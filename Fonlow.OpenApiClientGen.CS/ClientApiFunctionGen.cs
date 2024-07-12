using Fonlow.CodeDom.Web;
using Fonlow.OpenApiClientGen.ClientTypes;
using Fonlow.Reflection;
using Fonlow.TypeScriptCodeDom;
using Microsoft.OpenApi.Models;
using System;
using System.CodeDom;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Diagnostics;
using System.Linq;

namespace Fonlow.OpenApiClientGen.CS
{
	/// <summary>
	/// Generate a client function upon OpenApiOperation for C#
	/// </summary>
	sealed internal class ClientApiFunctionGen
	{
		OpenApiOperation apiOperation;
		ParameterDescription[] parameterDescriptions;
		CodeTypeReference requestBodyCodeTypeReference; // for post and put
		string requestBodyComment;

		string RelativePath;
		CodeTypeReference returnTypeReference;
		//bool returnTypeIsStream;
		CodeMemberMethod clientMethod;
		ComponentsToCsTypes coms2CsTypes;
		NameComposer nameComposer;
		ParametersRefBuilder parametersRefBuilder;
		BodyContentRefBuilder bodyContentRefBuilder;
		ISettings settings;
		string actionName;
		bool forAsync;
		bool stringAsString;

		readonly IRenamer renamer;

		public ClientApiFunctionGen()
		{
			renamer = new CSharpRenamer();
		}

		string statementOfEnsureSuccessStatusCode;

		public CodeMemberMethod CreateApiFunction(ISettings settings, string relativePath, OperationType httpMethod,
			OpenApiOperation apiOperation, ComponentsToCsTypes coms2CsTypes, bool forAsync, bool useEnsureSuccessStatusCodeEx)
		{
			if (!(new OperationType[] { OperationType.Get, OperationType.Post, OperationType.Put, OperationType.Delete, OperationType.Patch }).Any(d => d == httpMethod))
			{
				Trace.TraceWarning("This HTTP method {0} is not yet supported", httpMethod);
				return null;
			}

			this.settings = settings;
			this.nameComposer = new NameComposer(settings, renamer);
			this.apiOperation = apiOperation;
			statementOfEnsureSuccessStatusCode = useEnsureSuccessStatusCodeEx ? "EnsureSuccessStatusCodeEx" : "EnsureSuccessStatusCode";

			this.actionName = nameComposer.GetActionName(apiOperation, httpMethod.ToString(), relativePath);
			this.coms2CsTypes = coms2CsTypes;
			this.forAsync = forAsync;


			this.RelativePath = RemovePrefixSlash(relativePath);
			this.RelativePath = RegexFunctions.RefineUrlWithHyphenInParameters(RelativePath);
#if DEBUG
			if (this.RelativePath == "admin/serviceAnnouncement/healthOverviews/{serviceHealth_id}/issues/{serviceHealthIssue_id}/microsoft.graph.incidentReport()")
			{
				Debug.WriteLine("ffff");
			}
#endif

			if (actionName.EndsWith("Async", StringComparison.Ordinal)) // better to be case sensitive, since some end with something like "cbaSync".
				actionName = actionName[0..^5];

			this.bodyContentRefBuilder = new BodyContentRefBuilder(coms2CsTypes, actionName, renamer);
			this.parametersRefBuilder = new ParametersRefBuilder(coms2CsTypes, actionName, renamer);
			this.parameterDescriptions = parametersRefBuilder.OpenApiParametersToParameterDescriptions(apiOperation.Parameters);
			if (httpMethod == OperationType.Post || httpMethod == OperationType.Put || httpMethod == OperationType.Patch)
			{
				Tuple<CodeTypeReference, string, bool> kc = bodyContentRefBuilder.GetBodyContent(apiOperation, httpMethod.ToString(), relativePath, settings.DotsToNamespaces);
				if (kc != null)
				{
					this.requestBodyCodeTypeReference = kc.Item1;
					this.requestBodyComment = kc.Item2;
					if (!kc.Item3)
					{
						return null; // not to generate for unsupported POST content type.
					}
				}
			}

			Tuple<CodeTypeReference, bool> r;
			try
			{
				var returnRefBuilder = new ReturnRefBuilder(coms2CsTypes, actionName);
				r = returnRefBuilder.GetOperationReturnTypeReference(apiOperation);

			}
			catch (CodeGenOperationException ex)
			{
				if (ex.Pending)
				{
					throw new CodeGenOperationException($"Definition {relativePath}=>{httpMethod} triggers error pending {ex.Message}");
				}

				throw;
			}

			returnTypeReference = r.Item1;
			stringAsString = r.Item2;

			//create method
			clientMethod = forAsync ? CreateMethodBasicForAsync() : CreateMethodBasic();

			CreateDocComments();

			switch (httpMethod)
			{
				case OperationType.Get:
				case OperationType.Delete:
					RenderGetOrDeleteImplementation(httpMethod);
					break;
				case OperationType.Post:
				case OperationType.Put:
				case OperationType.Patch:
					RenderPostOrPutImplementation(httpMethod);
					break;
				default:
					Trace.TraceWarning("This HTTP method {0} is not yet supported", httpMethod);
					break;
			}

			return clientMethod;
		}

		static string RemovePrefixSlash(string uriText)
		{
			if (uriText[0] == '/')
			{
				return uriText.Remove(0, 1);
			}

			return uriText;
		}

		CodeMemberMethod CreateMethodBasic()
		{
			return new CodeMemberMethod()
			{
				Attributes = MemberAttributes.Public | MemberAttributes.Final,
				Name = actionName,
				ReturnType = returnTypeReference,
			};
		}

		CodeMemberMethod CreateMethodBasicForAsync()
		{
			return new CodeMemberMethod()
			{
				Attributes = MemberAttributes.Public | MemberAttributes.Final,
				Name = actionName + "Async",
				ReturnType = returnTypeReference == null ? new CodeTypeReference("async Task")
				: new CodeTypeReference("async Task", returnTypeReference),
			};
		}

		void CreateDocComments()
		{
			void CreateDocComment(string elementName, string doc)
			{
				if (string.IsNullOrWhiteSpace(doc))
					return;

				clientMethod.Comments.Add(new CodeCommentStatement("<" + elementName + ">" + doc + "</" + elementName + ">", true));
			}

			void CreateParamDocComment(ParameterDescription item)
			{
				var memberSchema = item.ParameterDescriptor.Schema;
				CodeTypeReference tsParameterType = item.ParameterTypeReference;
				if (settings.DataAnnotationsToComments)
				{
					List<string> ss = ComponentsHelper.GetParamCommentsFromAnnotations(memberSchema, true);
					if (!String.IsNullOrEmpty(item.Documentation))
					{
						ss.Insert(0, item.Documentation);
					}

					if (ss.Count > 0)
					{
						AddLinesAsParamDocComment(clientMethod.Comments, item.Name, ss);
					}
				}
				else
				{
					if (!string.IsNullOrEmpty(item.Documentation))
					{
						AddDescriptionAsParamDocComment(clientMethod.Comments, item.Name, item.Documentation);
					}
				}
			}

			clientMethod.Comments.Add(new CodeCommentStatement("<summary>", true));
			string[] noIndent = Fonlow.DocComment.StringFunctions.TrimIndentedMultiLineTextToArray(
				apiOperation.Summary
				+ ((String.IsNullOrEmpty(apiOperation.Summary) || string.IsNullOrEmpty(apiOperation.Description)) ? String.Empty : Environment.NewLine)
				+ apiOperation.Description);
			if (noIndent != null)
			{
				foreach (string item in noIndent)
				{
					clientMethod.Comments.Add(new CodeCommentStatement(item, true));
				}
			}

			clientMethod.Comments.Add(new CodeCommentStatement(actionName + " " + RelativePath, true));
			clientMethod.Comments.Add(new CodeCommentStatement("</summary>", true));
			foreach (ParameterDescription item in parameterDescriptions)
			{
				CreateParamDocComment(item);
			}

			if (!String.IsNullOrEmpty(requestBodyComment))
			{
				AddDescriptionAsParamDocComment(clientMethod.Comments, "requestBody", requestBodyComment);
			}

			CreateDocComment("returns", NameComposer.GetOperationReturnComment(apiOperation));
		}

		static void AddDescriptionAsParamDocComment(CodeCommentStatementCollection comments, string paramName, string description)
		{
			comments.Add(new CodeCommentStatement("<param name=\"" + paramName + "\">" + description + "</param>", true));
		}

		static void AddLinesAsParamDocComment(CodeCommentStatementCollection comments, string paramName, IReadOnlyList<string> lines)
		{
			if (lines.Count == 0)
			{
				return;
			}

			if (lines.Count == 1)
			{
				comments.Add(new CodeCommentStatement("<param name=\"" + paramName + "\">" + lines[0] + "</param>", true));
				return;
			}

			comments.Add(new CodeCommentStatement("<param name=\"" + paramName + "\">" + lines[0], true));
			for (int i = 1; i < lines.Count; i++)
			{
				comments.Add(new CodeCommentStatement(lines[i], true));
			}

			comments.Add(new CodeCommentStatement("</param>"));
		}

		void RenderGetOrDeleteImplementation(OperationType httpMethod)
		{
			CodeParameterDeclarationExpression[] parameters = parameterDescriptions.Where(p => p.ParameterDescriptor.ParameterBinder == ParameterBinder.FromUri || p.ParameterDescriptor.ParameterBinder == ParameterBinder.FromQuery)
				.Select(d =>
				new CodeParameterDeclarationExpression(d.ParameterTypeReference, d.Name))
				.ToArray();
			clientMethod.Parameters.AddRange(parameters);
			if (settings.CancellationTokenEnabled)
			{
				clientMethod.Parameters.Add(new CodeParameterDeclarationExpression("System.Threading.CancellationToken", "cancellationToken"));
			}

			if (settings.HandleHttpRequestHeaders)
			{
				clientMethod.Parameters.Add(new CodeParameterDeclarationExpression("Action<System.Net.Http.Headers.HttpRequestHeaders>", "handleHeaders = null"));
			}

			string jsUriQuery = UriQueryHelper.CreateUriQuery(RelativePath, parameterDescriptions);
#pragma warning disable CA1508 // Avoid dead conditional code. False alarm
			string uriText = jsUriQuery == null ? $"\"{RelativePath}\"" : RemoveTrialEmptyString($"\"{jsUriQuery}\"");
#pragma warning restore CA1508 // Avoid dead conditional code

			clientMethod.Statements.Add(new CodeVariableDeclarationStatement(
				new CodeTypeReference("var"), "requestUri",
				new CodeSnippetExpression(uriText)));

			clientMethod.Statements.Add(new CodeSnippetStatement(
				ThreeTabs + $"using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.{httpMethod}, requestUri);"
			));

			if (settings.HandleHttpRequestHeaders)
			{
				clientMethod.Statements.Add(new CodeSnippetStatement(
					ThreeTabs + $@"if (handleHeaders != null)
			{{
				handleHeaders(httpRequestMessage.Headers);
			}}
"
				));
			}

			AddResponseMessageSendAsync(clientMethod);

			CodeVariableReferenceExpression resultReference = new("responseMessage");


			CodeTryCatchFinallyStatement try1 = new();
			try1.TryStatements.Add(new CodeMethodInvokeExpression(resultReference, statementOfEnsureSuccessStatusCode));
			clientMethod.Statements.Add(try1);

			//Statement: return something;
			if (returnTypeReference != null)
			{
				AddReturnStatement(try1.TryStatements);
			}

			try1.FinallyStatements.Add(new CodeMethodInvokeExpression(resultReference, "Dispose"));

			//Add3TEndBacket(clientMethod); for using
		}

		static void AddNewtonSoftJsonUsingTextReader(CodeStatementCollection statementCollection)
		{
			statementCollection.Add(new CodeSnippetStatement("\t\t\t\tusing JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));"));
		}

		void AddNewtonSoftJsonSerializerDeserialize(CodeStatementCollection statementCollection)
		{
			statementCollection.Add(new CodeMethodReturnStatement(new CodeMethodInvokeExpression(
				new CodeMethodReferenceExpression(new CodeVariableReferenceExpression("serializer"), "Deserialize", returnTypeReference),
				new CodeSnippetExpression("jsonReader"))));
		}

		static void AddNewtonSoftJsonSerializer(CodeStatementCollection statementCollection)
		{
			statementCollection.Add(new CodeVariableDeclarationStatement(
				new CodeTypeReference("var"), "serializer", new CodeSnippetExpression("JsonSerializer.Create(jsonSerializerSettings)")));
		}

		void AddResponseMessageSendAsync(CodeMemberMethod codeMemberMethod)
		{
			var cancellationToken = settings.CancellationTokenEnabled ? ", cancellationToken" : String.Empty;
			codeMemberMethod.Statements.Add(new CodeVariableDeclarationStatement(
				new CodeTypeReference("var"), "responseMessage", forAsync ? new CodeSnippetExpression($"await httpClient.SendAsync(httpRequestMessage{cancellationToken})")
				: new CodeSnippetExpression($"httpClient.SendAsync(httpRequestMessage{cancellationToken}).Result")));
		}

		static string ThreeTabs => "\t\t\t";

		void RenderPostOrPutImplementation(OperationType httpMethod)
		{
			//Create function parameters in prototype
			CodeParameterDeclarationExpression[] parameters = parameterDescriptions.Where(p => p.ParameterDescriptor.ParameterBinder == ParameterBinder.FromUri || p.ParameterDescriptor.ParameterBinder == ParameterBinder.FromQuery)
				.Select(d =>
				new CodeParameterDeclarationExpression(d.ParameterTypeReference, d.Name))
				.ToArray();
			clientMethod.Parameters.AddRange(parameters);

			if (requestBodyCodeTypeReference != null)
			{
				clientMethod.Parameters.Add(new CodeParameterDeclarationExpression(requestBodyCodeTypeReference, "requestBody"));
			}

			if (settings.CancellationTokenEnabled)
			{
				clientMethod.Parameters.Add(new CodeParameterDeclarationExpression("System.Threading.CancellationToken", "cancellationToken"));
			}

			if (settings.HandleHttpRequestHeaders)
			{
				clientMethod.Parameters.Add(new CodeParameterDeclarationExpression(
				"Action<System.Net.Http.Headers.HttpRequestHeaders>", "handleHeaders = null"));
			}

			CodeParameterDeclarationExpression[] uriQueryParameters = parameterDescriptions.Where(d =>
				(d.ParameterDescriptor.ParameterBinder != ParameterBinder.FromBody && d.ParameterDescriptor.ParameterBinder != ParameterBinder.FromForm && TypeHelper.IsDotNetSimpleType(d.ParameterDescriptor.ParameterType))
				|| (TypeHelper.IsComplexType(d.ParameterDescriptor.ParameterType) && d.ParameterDescriptor.ParameterBinder == ParameterBinder.FromUri)
				|| (d.ParameterDescriptor.ParameterType.IsValueType && d.ParameterDescriptor.ParameterBinder == ParameterBinder.FromUri)
				).Select(d => new CodeParameterDeclarationExpression(d.ParameterTypeReference, d.Name))
				.ToArray();

			void AddRequestUriWithQueryAssignmentStatement()
			{

				string jsUriQuery = UriQueryHelper.CreateUriQuery(RelativePath, parameterDescriptions);
				string uriText = jsUriQuery == null ? $"\"{RelativePath}\"" :
				RemoveTrialEmptyString($"\"{jsUriQuery}\"");

				clientMethod.Statements.Add(new CodeVariableDeclarationStatement(
					new CodeTypeReference("var"), "requestUri",
					new CodeSnippetExpression(uriText)));
			}

			AddRequestUriWithQueryAssignmentStatement();

			clientMethod.Statements.Add(new CodeSnippetStatement(
				ThreeTabs + $"using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.{httpMethod}, requestUri);"
				));

			if (requestBodyCodeTypeReference != null)
			{

				if (settings.UseSystemTextJson)
				{
					//clientMethod.Statements.Add(new CodeSnippetStatement(ThreeTabs + @"var contentJson = JsonSerializer.Serialize(requestBody, jsonSerializerSettings);"));
					//clientMethod.Statements.Add(new CodeSnippetStatement(ThreeTabs + @"var content = new System.Net.Http.StringContent(contentJson, System.Text.Encoding.UTF8, ""application/json"");"));
					clientMethod.Statements.Add(new CodeSnippetStatement(ThreeTabs + $"var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);"));
				}
				else
				{
					clientMethod.Statements.Add(new CodeSnippetStatement(
						ThreeTabs + @"using var requestWriter = new System.IO.StringWriter();
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);"
					));
					clientMethod.Statements.Add(new CodeMethodInvokeExpression(new CodeSnippetExpression("requestSerializer"), "Serialize",
						new CodeSnippetExpression("requestWriter"),
						new CodeSnippetExpression("requestBody")));


					clientMethod.Statements.Add(new CodeSnippetStatement(
						ThreeTabs + @"var content = new System.Net.Http.StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, ""application/json"");"
					));
				}

				clientMethod.Statements.Add(new CodeSnippetStatement(ThreeTabs + @"httpRequestMessage.Content = content;"));
				if (settings.HandleHttpRequestHeaders)
				{
					clientMethod.Statements.Add(new CodeSnippetStatement(ThreeTabs + @"if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}
"));
				}

			}

			AddResponseMessageSendAsync(clientMethod);

			CodeVariableReferenceExpression resultReference = new("responseMessage");

			CodeTryCatchFinallyStatement try1 = new();
			clientMethod.Statements.Add(try1);
			try1.TryStatements.Add(new CodeMethodInvokeExpression(resultReference, statementOfEnsureSuccessStatusCode));

			//Statement: return something;
			if (returnTypeReference != null)
			{
				AddReturnStatement(try1.TryStatements);
			}

			try1.FinallyStatements.Add(new CodeMethodInvokeExpression(resultReference, "Dispose"));

			//if (requestBodyCodeTypeReference != null && !settings.UseSystemTextJson)
			//{
			//	//Add3TEndBacket(clientMethod);
			//}

			////Add3TEndBacket(clientMethod); for using
		}

		static void Add3TEndBacket(CodeMemberMethod method)
		{
			method.Statements.Add(new CodeSnippetStatement("\t\t\t}"));
		}

		static void Add4TEndBacket(CodeStatementCollection statementCollection)
		{
			statementCollection.Add(new CodeSnippetStatement("\t\t\t\t}"));
		}

		static void Add4TStartBacket(CodeStatementCollection statementCollection)
		{
			statementCollection.Add(new CodeSnippetStatement("\t\t\t\t{"));
		}

		void DeserializeContentString(CodeStatementCollection statementCollection)
		{
			statementCollection.Add(new CodeMethodReturnStatement(new CodeMethodInvokeExpression(
				new CodeMethodReferenceExpression(
				new CodeVariableReferenceExpression("JsonSerializer"), "Deserialize", returnTypeReference),
				new CodeSnippetExpression("streamContent"), new CodeSnippetExpression("jsonSerializerSettings"))));
		}

		void AddResponseMessageReadStream(CodeStatementCollection statementCollection)
		{
			statementCollection.Add(new CodeSnippetStatement(forAsync
				 ? "\t\t\t\tvar streamContent = await responseMessage.Content.ReadAsStreamAsync();"
				 : "\t\t\t\tvar streamContent = responseMessage.Content.ReadAsStream();"));
		}

		void AddReturnStatement(CodeStatementCollection statementCollection)
		{
			AddResponseMessageReadStream(statementCollection);

			if (returnTypeReference != null && returnTypeReference.BaseType == "System.String" &&
				returnTypeReference.ArrayElementType == null)
			{
				if (this.stringAsString)
				{
					if (settings.UseSystemTextJson)
					{
						statementCollection.Add(new CodeMethodReturnStatement(new CodeMethodInvokeExpression(
							new CodeMethodReferenceExpression(
								new CodeVariableReferenceExpression("JsonSerializer"), "Deserialize", new CodeTypeReference(typeof(System.String))),
							new CodeSnippetExpression("streamContent"),
							new CodeSnippetExpression("jsonSerializerSettings"))));
					}
					else
					{
						statementCollection.Add(new CodeSnippetStatement("\t\t\t\tusing System.IO.StreamReader streamReader = new System.IO.StreamReader(streamContent);"));
						//Add4TStartBacket(statementCollection); // for using
						statementCollection.Add(new CodeMethodReturnStatement(new CodeSnippetExpression("streamReader.ReadToEnd();")));
						//Add4TEndBacket(statementCollection); for using
					}
				}
				else
				{
					if (settings.UseSystemTextJson)
					{
						statementCollection.Add(new CodeMethodReturnStatement(new CodeMethodInvokeExpression(
							new CodeMethodReferenceExpression(
								new CodeVariableReferenceExpression("JsonSerializer"), "Deserialize", new CodeTypeReference(typeof(System.String))),
							new CodeSnippetExpression("streamContent"),
							new CodeSnippetExpression("jsonSerializerSettings"))));
					}
					else
					{
						AddNewtonSoftJsonUsingTextReader(statementCollection);
						//Add4TStartBacket(statementCollection);
						statementCollection.Add(new CodeMethodReturnStatement(new CodeSnippetExpression("jsonReader.ReadAsString()")));
						//Add4TEndBacket(statementCollection); for using
					}
				}
			}
			else if (IsPrimitive(returnTypeReference.BaseType))
			{
				if (settings.UseSystemTextJson)
				{
					DeserializeContentString(statementCollection);
				}
				else
				{
					AddNewtonSoftJsonUsingTextReader(statementCollection);
					//Add4TStartBacket(statementCollection); // for using
					AddNewtonSoftJsonSerializer(statementCollection);
					AddNewtonSoftJsonSerializerDeserialize(statementCollection);
					//Add4TEndBacket(statementCollection); for using
				}
			}
			else // then is complex.
			{
				if (settings.UseSystemTextJson)
				{
					DeserializeContentString(statementCollection);
				}
				else
				{
					AddNewtonSoftJsonUsingTextReader(statementCollection);
					//Add4TStartBacket(statementCollection); for using
					AddNewtonSoftJsonSerializer(statementCollection);
					AddNewtonSoftJsonSerializerDeserialize(statementCollection);
					//Add4TEndBacket(statementCollection); for using
				}
			}


		}

		static bool IsPrimitive(string typeName)
		{
			string[] ts = new string[] { "System.Int32", "System.Int64", "System.Float", "System.Double", "System.DateTime", "System.Boolean", "System.Enum" };
			return ts.Contains(typeName);
		}

		private static string RemoveTrialEmptyString(string s)
		{
			int p = s.IndexOf("+\"\"", StringComparison.Ordinal);
			if (p >= 0)
			{
				return s.Remove(p, 3);
			}

			int p2 = s.IndexOf("))\"", StringComparison.Ordinal);
			if (p2 >= 0)
			{
				return s.Remove(p2 + 2, 1);
			}

			return s;
		}

	}

}
