using Fonlow.CodeDom.Web;
using Fonlow.OpenApiClientGen.ClientTypes;
using Fonlow.Reflection;
using Microsoft.OpenApi.Models;
using System;
using System.CodeDom;
using System.ComponentModel.Design;
using System.Diagnostics;
using System.Linq;

namespace Fonlow.OpenApiClientGen.CS
{
	/// <summary>
	/// Generate a client function upon OpenApiOperation for C#
	/// </summary>
	internal class ClientApiFunctionGen
	{
		OpenApiOperation apiOperation;
		ParameterDescription[] parameterDescriptions;
		CodeTypeReference requestBodyCodeTypeReference; // for post and put
		string requestBodyComment;

		string RelativePath;
		protected CodeTypeReference returnTypeReference;
		//bool returnTypeIsStream;
		CodeMemberMethod method;
		ComponentsToCsTypes coms2CsTypes;
		NameComposer nameComposer;
		ParametersRefBuilder parametersRefBuilder;
		BodyContentRefBuilder bodyContentRefBuilder;
		Settings settings;
		string actionName;
		bool forAsync;
		bool stringAsString;

		public ClientApiFunctionGen()
		{
		}

		string statementOfEnsureSuccessStatusCode;

		public CodeMemberMethod CreateApiFunction(Settings settings, string relativePath, OperationType httpMethod,
			OpenApiOperation apiOperation, ComponentsToCsTypes coms2CsTypes, bool forAsync, bool useEnsureSuccessStatusCodeEx)
		{
			if (!(new OperationType[] { OperationType.Get, OperationType.Post, OperationType.Put, OperationType.Delete, OperationType.Patch }).Any(d => d == httpMethod))
			{
				Trace.TraceWarning("This HTTP method {0} is not yet supported", httpMethod);
				return null;
			}

			this.settings = settings;
			this.nameComposer = new NameComposer(settings);
			this.apiOperation = apiOperation;
			statementOfEnsureSuccessStatusCode = useEnsureSuccessStatusCodeEx ? "EnsureSuccessStatusCodeEx" : "EnsureSuccessStatusCode";

			this.actionName = nameComposer.GetActionName(apiOperation, httpMethod.ToString(), relativePath);
			this.coms2CsTypes = coms2CsTypes;
			this.forAsync = forAsync;


			this.RelativePath = RemovePrefixSlash(relativePath);
			this.RelativePath = RegexFunctions.RefineUrlWithHyphenInParameters(RelativePath);

			if (actionName.EndsWith("Async"))
				actionName = actionName[0..^5];

			this.bodyContentRefBuilder = new BodyContentRefBuilder(coms2CsTypes, actionName);
			this.parametersRefBuilder = new ParametersRefBuilder(coms2CsTypes, actionName);
			this.parameterDescriptions = parametersRefBuilder.OpenApiParametersToParameterDescriptions(apiOperation.Parameters);
			if (httpMethod == OperationType.Post || httpMethod == OperationType.Put || httpMethod == OperationType.Patch)
			{
				Tuple<CodeTypeReference, string, bool> kc = bodyContentRefBuilder.GetBodyContent(apiOperation, httpMethod.ToString(), relativePath);
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
			catch (CodeGenException ex)
			{
				if (ex.Pending)
				{
					throw new CodeGenException($"Definition {relativePath}=>{httpMethod} triggers error pending {ex.Message}");
				}

				throw;
			}

			returnTypeReference = r.Item1;
			stringAsString = r.Item2;

			//create method
			method = forAsync ? CreateMethodBasicForAsync() : CreateMethodBasic();

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

			return method;
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

				method.Comments.Add(new CodeCommentStatement("<" + elementName + ">" + doc + "</" + elementName + ">", true));
			}

			void CreateParamDocComment(string paramName, string doc)
			{
				if (String.IsNullOrWhiteSpace(doc))
					return;

				method.Comments.Add(new CodeCommentStatement("<param name=\"" + paramName + "\">" + doc + "</param>", true));
			}

			method.Comments.Add(new CodeCommentStatement("<summary>", true));
			string[] noIndent = Fonlow.DocComment.StringFunctions.TrimIndentedMultiLineTextToArray(
				apiOperation.Summary
				+ ((String.IsNullOrEmpty(apiOperation.Summary) || string.IsNullOrEmpty(apiOperation.Description)) ? String.Empty : "\n")
				+ apiOperation.Description);
			if (noIndent != null)
			{
				foreach (string item in noIndent)
				{
					method.Comments.Add(new CodeCommentStatement(item, true));
				}
			}

			method.Comments.Add(new CodeCommentStatement(actionName + " " + RelativePath, true));
			method.Comments.Add(new CodeCommentStatement("</summary>", true));
			foreach (ParameterDescription item in parameterDescriptions)
			{
				CreateParamDocComment(item.Name, item.Documentation);
			}

			if (!String.IsNullOrEmpty(requestBodyComment))
			{
				CreateParamDocComment("requestBody", requestBodyComment);
			}

			CreateDocComment("returns", NameComposer.GetOperationReturnComment(apiOperation));
		}

		void RenderGetOrDeleteImplementation(OperationType httpMethod)
		{
			CodeParameterDeclarationExpression[] parameters = parameterDescriptions.Where(p => p.ParameterDescriptor.ParameterBinder == ParameterBinder.FromUri || p.ParameterDescriptor.ParameterBinder == ParameterBinder.FromQuery)
				.Select(d =>
				new CodeParameterDeclarationExpression(d.ParameterTypeReference, d.Name))
				.ToArray();
			method.Parameters.AddRange(parameters);
			if (settings.CancellationTokenEnabled)
			{
				method.Parameters.Add(new CodeParameterDeclarationExpression("System.Threading.CancellationToken", "cancellationToken"));
			}

			if (settings.HandleHttpRequestHeaders)
			{
				method.Parameters.Add(new CodeParameterDeclarationExpression("Action<System.Net.Http.Headers.HttpRequestHeaders>", "handleHeaders = null"));
			}

			string jsUriQuery = UriQueryHelper.CreateUriQuery(RelativePath, parameterDescriptions);
			string uriText = jsUriQuery == null ? $"\"{RelativePath}\"" : RemoveTrialEmptyString($"\"{jsUriQuery}\"");

			method.Statements.Add(new CodeVariableDeclarationStatement(
				new CodeTypeReference("var"), "requestUri",
				new CodeSnippetExpression(uriText)));

			method.Statements.Add(new CodeSnippetStatement(
				"\t\t\t" + $@"using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.{httpMethod}, requestUri))
			{{"
			));

			if (settings.HandleHttpRequestHeaders)
			{
				method.Statements.Add(new CodeSnippetStatement(
					"\t\t\t" + $@"if (handleHeaders != null)
			{{
				handleHeaders(httpRequestMessage.Headers);
			}}
"
				));
			}

			AddResponseMessageSendAsync(method);

			CodeVariableReferenceExpression resultReference = new("responseMessage");


			CodeTryCatchFinallyStatement try1 = new();
			try1.TryStatements.Add(new CodeMethodInvokeExpression(resultReference, statementOfEnsureSuccessStatusCode));
			method.Statements.Add(try1);

			//Statement: return something;
			if (returnTypeReference != null)
			{
				AddReturnStatement(try1.TryStatements);
			}

			try1.FinallyStatements.Add(new CodeMethodInvokeExpression(resultReference, "Dispose"));

			Add3TEndBacket(method);
		}

		static void AddNewtonSoftJsonTextReader(CodeStatementCollection statementCollection)
		{
			statementCollection.Add(new CodeSnippetStatement("\t\t\t\tusing (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(responseMessageStream)))"));
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

		void AddResponseMessageSendAsync(CodeMemberMethod method)
		{
			var cancellationToken = settings.CancellationTokenEnabled? ", cancellationToken" : String.Empty;
			method.Statements.Add(new CodeVariableDeclarationStatement(
				new CodeTypeReference("var"), "responseMessage", forAsync ? new CodeSnippetExpression($"await httpClient.SendAsync(httpRequestMessage{cancellationToken})") 
				: new CodeSnippetExpression($"httpClient.SendAsync(httpRequestMessage{cancellationToken}).Result")));
		}

		void RenderPostOrPutImplementation(OperationType httpMethod)
		{
			//Create function parameters in prototype
			CodeParameterDeclarationExpression[] parameters = parameterDescriptions.Where(p => p.ParameterDescriptor.ParameterBinder == ParameterBinder.FromUri || p.ParameterDescriptor.ParameterBinder == ParameterBinder.FromQuery)
				.Select(d =>
				new CodeParameterDeclarationExpression(d.ParameterTypeReference, d.Name))
				.ToArray();
			method.Parameters.AddRange(parameters);

			if (requestBodyCodeTypeReference != null)
			{
				method.Parameters.Add(new CodeParameterDeclarationExpression(requestBodyCodeTypeReference, "requestBody"));
			}

			if (settings.CancellationTokenEnabled)
			{
				method.Parameters.Add(new CodeParameterDeclarationExpression("System.Threading.CancellationToken", "cancellationToken"));
			}

			if (settings.HandleHttpRequestHeaders)
			{
				method.Parameters.Add(new CodeParameterDeclarationExpression(
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

				method.Statements.Add(new CodeVariableDeclarationStatement(
					new CodeTypeReference("var"), "requestUri",
					new CodeSnippetExpression(uriText)));
			}

			AddRequestUriWithQueryAssignmentStatement();

			method.Statements.Add(new CodeSnippetStatement(
				"\t\t\t" + $@"using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.{httpMethod}, requestUri))
			{{"
				));

			if (requestBodyCodeTypeReference != null)
			{

				if (settings.UseSystemTextJson)
				{
					method.Statements.Add(new CodeSnippetStatement("\t\t\t" + @"var contentJson = JsonSerializer.Serialize(requestBody, jsonSerializerSettings);"));
					method.Statements.Add(new CodeSnippetStatement("\t\t\t" + @"var content = new StringContent(contentJson, System.Text.Encoding.UTF8, ""application/json"");"));
				}
				else
				{
					method.Statements.Add(new CodeSnippetStatement(
						"\t\t\t" + @"using (var requestWriter = new System.IO.StringWriter())
			{
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);"
					));
					method.Statements.Add(new CodeMethodInvokeExpression(new CodeSnippetExpression("requestSerializer"), "Serialize",
						new CodeSnippetExpression("requestWriter"),
						new CodeSnippetExpression("requestBody")));


					method.Statements.Add(new CodeSnippetStatement(
						"\t\t\t" + @"var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, ""application/json"");"
					));
				}

				method.Statements.Add(new CodeSnippetStatement("\t\t\t" + @"httpRequestMessage.Content = content;"));
				if (settings.HandleHttpRequestHeaders)
				{
					method.Statements.Add(new CodeSnippetStatement("\t\t\t" + @"if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}
"));
				}

			}

			AddResponseMessageSendAsync(method);

			CodeVariableReferenceExpression resultReference = new("responseMessage");

			CodeTryCatchFinallyStatement try1 = new();
			method.Statements.Add(try1);
			try1.TryStatements.Add(new CodeMethodInvokeExpression(resultReference, statementOfEnsureSuccessStatusCode));

			//Statement: return something;
			if (returnTypeReference != null)
			{
				AddReturnStatement(try1.TryStatements);
			}

			try1.FinallyStatements.Add(new CodeMethodInvokeExpression(resultReference, "Dispose"));

			if (requestBodyCodeTypeReference != null && !settings.UseSystemTextJson)
			{
				Add3TEndBacket(method);
			}

			Add3TEndBacket(method);
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
				new CodeSnippetExpression("contentString"), new CodeSnippetExpression("jsonSerializerSettings"))));
		}

		void AddResponseMessageRead(CodeStatementCollection statementCollection)
		{
			if (settings.UseSystemTextJson)
			{
				statementCollection.Add(new CodeSnippetStatement(forAsync
					? "\t\t\t\tvar contentString = await responseMessage.Content.ReadAsStringAsync();"
					: "\t\t\t\tvar contentString = responseMessage.Content.ReadAsStringAsync().Result;"));
			}
			else
			{
				statementCollection.Add(new CodeSnippetStatement(forAsync
					? "\t\t\t\tvar responseMessageStream = await responseMessage.Content.ReadAsStreamAsync();"
					: "\t\t\t\tvar responseMessageStream = responseMessage.Content.ReadAsStreamAsync().Result;"));
			}
		}

		void AddReturnStatement(CodeStatementCollection statementCollection)
		{
			AddResponseMessageRead(statementCollection);

			if (returnTypeReference != null && returnTypeReference.BaseType == "System.String" &&
				returnTypeReference.ArrayElementType == null)
			{
				if (this.stringAsString)
				{
					statementCollection.Add(new CodeSnippetStatement("\t\t\t\tusing (System.IO.StreamReader streamReader = new System.IO.StreamReader(responseMessageStream))"));
					Add4TStartBacket(statementCollection);
					statementCollection.Add(new CodeMethodReturnStatement(new CodeSnippetExpression("streamReader.ReadToEnd();")));
					Add4TEndBacket(statementCollection);
				}
				else
				{
					if (settings.UseSystemTextJson)
					{
						statementCollection.Add(new CodeMethodReturnStatement(new CodeMethodInvokeExpression(
							new CodeMethodReferenceExpression(
								new CodeVariableReferenceExpression("JsonSerializer"), "Deserialize", new CodeTypeReference(typeof(System.String))),
							new CodeSnippetExpression("contentString"),
							new CodeSnippetExpression("jsonSerializerSettings"))));
					}
					else
					{
						AddNewtonSoftJsonTextReader(statementCollection);
						Add4TStartBacket(statementCollection);
						statementCollection.Add(new CodeMethodReturnStatement(new CodeSnippetExpression("jsonReader.ReadAsString()")));
						Add4TEndBacket(statementCollection);
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
					AddNewtonSoftJsonTextReader(statementCollection);
					Add4TStartBacket(statementCollection);
					AddNewtonSoftJsonSerializer(statementCollection);
					AddNewtonSoftJsonSerializerDeserialize(statementCollection);
					Add4TEndBacket(statementCollection);
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
					AddNewtonSoftJsonTextReader(statementCollection);
					Add4TStartBacket(statementCollection);
					AddNewtonSoftJsonSerializer(statementCollection);
					AddNewtonSoftJsonSerializerDeserialize(statementCollection);
					Add4TEndBacket(statementCollection);
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
			int p = s.IndexOf("+\"\"");
			if (p >= 0)
			{
				return s.Remove(p, 3);
			}

			int p2 = s.IndexOf("))\"");
			if (p2 >= 0)
			{
				return s.Remove(p2 + 2, 1);
			}

			return s;
		}

	}

}
