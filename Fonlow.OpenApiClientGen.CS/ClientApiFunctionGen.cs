using Fonlow.CodeDom.Web;
using Fonlow.OpenApiClientGen.ClientTypes;
using Fonlow.Reflection;
using Microsoft.OpenApi.Models;
using System;
using System.CodeDom;
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
		ParameterDescriptionEx[] parameterDescriptions;
		CodeTypeReference requestBodyCodeTypeReference; // for post and put
		string requestBodyComment;

		string RelativePath;
		protected CodeTypeReference returnTypeReference;
		//bool returnTypeIsStream;
		CodeMemberMethod method;
		ComponentsToCsTypes coms2CsTypes;
		NameComposer nameComposer;
		ParametersHelper parametersHelper;
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
			OpenApiOperation apiOperation, ComponentsToCsTypes poco2CsGen, bool forAsync, bool useEnsureSuccessStatusCodeEx)
		{
			if (httpMethod > OperationType.Delete)
			{
				Trace.TraceWarning("This HTTP method {0} is not yet supported", httpMethod);
				return null;
			}

			this.settings = settings;
			this.nameComposer = new NameComposer(settings);
			this.parametersHelper = new ParametersHelper(poco2CsGen.ClientNamespace);
			this.bodyContentRefBuilder = new BodyContentRefBuilder(poco2CsGen, nameComposer);
			this.apiOperation = apiOperation;
			statementOfEnsureSuccessStatusCode = useEnsureSuccessStatusCodeEx ? "EnsureSuccessStatusCodeEx" : "EnsureSuccessStatusCode";
			this.parameterDescriptions = parametersHelper.OpenApiParametersToParameterDescriptions(apiOperation.Parameters);
			if (httpMethod == OperationType.Post || httpMethod == OperationType.Put)
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

			this.actionName = nameComposer.GetActionName(apiOperation, httpMethod.ToString(), relativePath);
			this.coms2CsTypes = poco2CsGen;
			this.forAsync = forAsync;


			this.RelativePath = RemovePrefixSlash(relativePath);
			this.RelativePath = RegexFunctions.RefineUrlWithHyphenInParameters(RelativePath);

			if (actionName.EndsWith("Async"))
				actionName = actionName[0..^5];

			Tuple<CodeTypeReference, bool, bool> r;
			try
			{
				r = TypeRefBuilder.GetOperationReturnTypeReference(apiOperation);

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

			//todo: stream, byte and ActionResult later.
			//returnTypeIsStream = returnType!=null && ( (returnType.FullName == typeNameOfHttpResponseMessage) 
			//	|| (returnType.FullName == typeOfIHttpActionResult) 
			//	|| (returnType.FullName == typeOfIActionResult) 
			//	|| (returnType.FullName == typeOfActionResult)
			//	|| (returnType.FullName.StartsWith("System.Threading.Tasks.Task`1[[Microsoft.AspNetCore.Mvc.IActionResult")) // .net core is not translating Task<IActionResult> properly.
			//	|| (returnType.FullName.StartsWith("System.Threading.Tasks.Task`1[[Microsoft.AspNetCore.Mvc.IHttpActionResult"))
			//	|| (returnType.FullName.StartsWith("System.Threading.Tasks.Task`1[[Microsoft.AspNetCore.Mvc.ActionResult"))
			//	);

			//create method
			method = forAsync ? CreateMethodBasicForAsync() : CreateMethodBasic();

			CreateDocComments();

			switch (httpMethod)
			{
				case OperationType.Get:
				case OperationType.Delete:
					RenderGetOrDeleteImplementation(httpMethod, forAsync);
					break;
				case OperationType.Post:
				case OperationType.Put:
					RenderPostOrPutImplementation(httpMethod, forAsync);
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
			foreach (ParameterDescriptionEx item in parameterDescriptions)
			{
				CreateParamDocComment(item.Name, item.Documentation);
			}

			if (!String.IsNullOrEmpty(requestBodyComment))
			{
				CreateParamDocComment("requestBody", requestBodyComment);
			}

			CreateDocComment("returns", NameComposer.GetOperationReturnComment(apiOperation));
		}

		void RenderGetOrDeleteImplementation(OperationType httpMethod, bool forAsync)
		{
			//Create function parameters
			//CodeParameterDeclarationExpression[] parameters = apiOperation.Parameters.Where(p => p.In == ParameterLocation.Path || p.In == ParameterLocation.Query)
			//	.Select(d =>
			//	new CodeParameterDeclarationExpression()
			//	{
			//		Name = d.Name.Replace('-', '_').Replace("$", ""),
			//		Type = parametersHelper.OpenApiParameterToCodeTypeReference(d),

			//	})
			//	.ToArray();
			CodeParameterDeclarationExpression[] parameters = parameterDescriptions.Where(p => p.ParameterDescriptor.ParameterBinder == ParameterBinder.FromUri || p.ParameterDescriptor.ParameterBinder == ParameterBinder.FromQuery)
				.Select(d =>
				new CodeParameterDeclarationExpression(coms2CsTypes.TranslateToClientTypeReference(d.ParameterDescriptor.ParameterType), d.Name))
				.ToArray();
			method.Parameters.AddRange(parameters);

			if (settings.HandleHttpRequestHeaders)
			{
				method.Parameters.Add(new CodeParameterDeclarationExpression(
					"Action<System.Net.Http.Headers.HttpRequestHeaders>", "handleHeaders = null"));
			}

			string jsUriQuery = UriQueryHelper.CreateUriQuery(RelativePath, parameterDescriptions);
			string uriText = jsUriQuery == null ? $"\"{RelativePath}\"" : RemoveTrialEmptyString($"\"{jsUriQuery}\"");

			method.Statements.Add(new CodeVariableDeclarationStatement(
				new CodeTypeReference("var"), "requestUri",
				new CodeSnippetExpression(uriText)));

			method.Statements.Add(new CodeSnippetStatement(
			$@"			using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.{httpMethod}, requestUri))
			{{"
			));

			if (settings.HandleHttpRequestHeaders)
			{
				method.Statements.Add(new CodeSnippetStatement(
				$@"			if (handleHeaders != null)
			{{
				handleHeaders(httpRequestMessage.Headers);
			}}
"
				));
			}

			method.Statements.Add(new CodeVariableDeclarationStatement(
				new CodeTypeReference("var"), "responseMessage", forAsync ? new CodeSnippetExpression("await client.SendAsync(httpRequestMessage)") : new CodeSnippetExpression("client.SendAsync(httpRequestMessage).Result")));


			CodeVariableReferenceExpression resultReference = new CodeVariableReferenceExpression("responseMessage");


			CodeTryCatchFinallyStatement try1 = new CodeTryCatchFinallyStatement();
			try1.TryStatements.Add(new CodeMethodInvokeExpression(resultReference, statementOfEnsureSuccessStatusCode));
			method.Statements.Add(try1);

			//Statement: return something;
			if (returnTypeReference != null)
			{
				AddReturnStatement(try1.TryStatements);
			}

			try1.FinallyStatements.Add(new CodeMethodInvokeExpression(resultReference, "Dispose"));

			method.Statements.Add(new CodeSnippetStatement("\t\t\t}"));
		}

		void RenderPostOrPutImplementation(OperationType httpMethod, bool forAsync)
		{
			//Create function parameters in prototype
			CodeParameterDeclarationExpression[] parameters = parameterDescriptions.Where(p => p.ParameterDescriptor.ParameterBinder == ParameterBinder.FromUri || p.ParameterDescriptor.ParameterBinder == ParameterBinder.FromQuery)
				.Select(d =>
				new CodeParameterDeclarationExpression(coms2CsTypes.TranslateToClientTypeReference(d.ParameterDescriptor.ParameterType), d.Name))
				.ToArray();
			method.Parameters.AddRange(parameters);

			if (requestBodyCodeTypeReference != null)
			{
				CodeParameterDeclarationExpression p = new CodeParameterDeclarationExpression(requestBodyCodeTypeReference, "requestBody");
				method.Parameters.Add(p);
			}

			if (settings.HandleHttpRequestHeaders)
			{
				method.Parameters.Add(new CodeParameterDeclarationExpression(
				"Action<System.Net.Http.Headers.HttpRequestHeaders>", "handleHeaders = null"));
			}

			CodeParameterDeclarationExpression[] uriQueryParameters = parameterDescriptions.Where(d =>
				(d.ParameterDescriptor.ParameterBinder != ParameterBinder.FromBody && d.ParameterDescriptor.ParameterBinder != ParameterBinder.FromForm && TypeHelper.IsSimpleType(d.ParameterDescriptor.ParameterType))
				|| (TypeHelper.IsComplexType(d.ParameterDescriptor.ParameterType) && d.ParameterDescriptor.ParameterBinder == ParameterBinder.FromUri)
				|| (d.ParameterDescriptor.ParameterType.IsValueType && d.ParameterDescriptor.ParameterBinder == ParameterBinder.FromUri)
				).Select(d => new CodeParameterDeclarationExpression()
				{
					Name = d.Name,
					Type = coms2CsTypes.TranslateToClientTypeReference(d.ParameterDescriptor.ParameterType),
				}).ToArray();

			void AddRequestUriWithQueryAssignmentStatement()
			{

				string jsUriQuery = UriQueryHelper.CreateUriQuery(RelativePath, parameterDescriptions);
				string uriText = jsUriQuery == null ? $"\"{RelativePath}\"" :
				RemoveTrialEmptyString($"\"{jsUriQuery}\"");

				method.Statements.Add(new CodeVariableDeclarationStatement(
					new CodeTypeReference("var"), "requestUri",
					new CodeSnippetExpression(uriText)));
			}

			//void AddPostStatement(CodeExpression httpMethodInvokeExpression)
			//{
			//	method.Statements.Add(new CodeVariableDeclarationStatement(
			//		new CodeTypeReference("var"), "responseMessage", httpMethodInvokeExpression));

			//}

			AddRequestUriWithQueryAssignmentStatement();

			method.Statements.Add(new CodeSnippetStatement(
				$@"			using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.{httpMethod}, requestUri))
			{{"
				));

			if (requestBodyCodeTypeReference != null)
			{
				method.Statements.Add(new CodeSnippetStatement(
@"			using (var requestWriter = new System.IO.StringWriter())
			{
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);"
));
				method.Statements.Add(new CodeMethodInvokeExpression(new CodeSnippetExpression("requestSerializer"), "Serialize",
					new CodeSnippetExpression("requestWriter"),
					new CodeSnippetExpression("requestBody")));


				method.Statements.Add(new CodeSnippetStatement(
@"			var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, ""application/json"");"
					));

				if (settings.HandleHttpRequestHeaders)
				{
					method.Statements.Add(new CodeSnippetStatement(@"			httpRequestMessage.Content = content;
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}
"));
				}

				method.Statements.Add(new CodeVariableDeclarationStatement(
					new CodeTypeReference("var"), "responseMessage", forAsync ? new CodeSnippetExpression("await client.SendAsync(httpRequestMessage)") : new CodeSnippetExpression("client.SendAsync(httpRequestMessage).Result")));

			}
			else
			{
				method.Statements.Add(new CodeVariableDeclarationStatement(
					new CodeTypeReference("var"), "responseMessage", forAsync ? new CodeSnippetExpression("await client.SendAsync(httpRequestMessage)") : new CodeSnippetExpression("client.SendAsync(httpRequestMessage).Result")));

			}

			CodeVariableReferenceExpression resultReference = new CodeVariableReferenceExpression("responseMessage");

			CodeTryCatchFinallyStatement try1 = new CodeTryCatchFinallyStatement();
			method.Statements.Add(try1);
			try1.TryStatements.Add(new CodeMethodInvokeExpression(resultReference, statementOfEnsureSuccessStatusCode));

			//Statement: return something;
			if (returnTypeReference != null)
			{
				AddReturnStatement(try1.TryStatements);
			}

			try1.FinallyStatements.Add(new CodeMethodInvokeExpression(resultReference, "Dispose"));

			if (requestBodyCodeTypeReference != null)
				method.Statements.Add(new CodeSnippetStatement("\t\t\t}"));

			method.Statements.Add(new CodeSnippetStatement("\t\t\t}"));
		}

		//const string typeNameOfHttpResponseMessage = "System.Net.Http.HttpResponseMessage";

		void AddReturnStatement(CodeStatementCollection statementCollection)
		{
			statementCollection.Add(new CodeSnippetStatement(forAsync ?
				"\t\t\t\tvar stream = await responseMessage.Content.ReadAsStreamAsync();"
				: "\t\t\t\tvar stream = responseMessage.Content.ReadAsStreamAsync().Result;"));
			//  statementCollection.Add(new CodeSnippetStatement("            using (System.IO.StreamReader reader = new System.IO.StreamReader(stream))"));

			if (returnTypeReference != null && returnTypeReference.BaseType == "System.String" && returnTypeReference.ArrayElementType == null)
			{
				if (this.stringAsString)
				{
					statementCollection.Add(new CodeSnippetStatement("\t\t\t\tusing (System.IO.StreamReader streamReader = new System.IO.StreamReader(stream))"));
					statementCollection.Add(new CodeSnippetStatement("\t\t\t\t{"));
					statementCollection.Add(new CodeMethodReturnStatement(new CodeSnippetExpression("streamReader.ReadToEnd();")));
				}
				else
				{
					statementCollection.Add(new CodeSnippetStatement("\t\t\t\tusing (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))"));
					statementCollection.Add(new CodeSnippetStatement("\t\t\t\t{"));
					statementCollection.Add(new CodeMethodReturnStatement(new CodeSnippetExpression("jsonReader.ReadAsString()")));
				}
			}
			else if (IsPrimitive(returnTypeReference.BaseType))
			{
				statementCollection.Add(new CodeSnippetStatement("\t\t\t\tusing (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))"));
				statementCollection.Add(new CodeSnippetStatement("\t\t\t\t{"));
				statementCollection.Add(new CodeVariableDeclarationStatement(
					new CodeTypeReference("var"), "serializer", new CodeSnippetExpression("new JsonSerializer()")));
				statementCollection.Add(new CodeMethodReturnStatement(new CodeMethodInvokeExpression(
					new CodeMethodReferenceExpression(new CodeVariableReferenceExpression("serializer"), "Deserialize", returnTypeReference),
						new CodeSnippetExpression("jsonReader"))));
			}
			else // then is complex.
			{
				statementCollection.Add(new CodeSnippetStatement("\t\t\t\tusing (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))"));
				statementCollection.Add(new CodeSnippetStatement("\t\t\t\t{"));
				statementCollection.Add(new CodeVariableDeclarationStatement(
					new CodeTypeReference("var"), "serializer", new CodeSnippetExpression("new JsonSerializer()")));
				statementCollection.Add(new CodeMethodReturnStatement(new CodeMethodInvokeExpression(
					new CodeMethodReferenceExpression(new CodeVariableReferenceExpression("serializer"), "Deserialize", returnTypeReference),
						new CodeSnippetExpression("jsonReader"))));
			}

			statementCollection.Add(new CodeSnippetStatement("\t\t\t\t}"));
		}

		static bool IsPrimitive(string typeName)
		{
			string[] ts = new string[] { "System.Int32", "System.Int64", "System.Float", "System.Double", "System.DateTime", "System.Boolean", "System.Enum" };
			return ts.Contains(typeName);
		}

		//bool IsComplexType(CodeTypeReference ctf)
		//{
		//	return ctf.BaseType.StartsWith(settings.ClientNamespace) || ctf.ArrayElementType != null;
		//}

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
