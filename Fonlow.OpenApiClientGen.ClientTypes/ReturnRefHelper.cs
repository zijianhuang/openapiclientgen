using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.CodeDom;
using System.Text.RegularExpressions;
using System.Numerics;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public class ReturnRefHelper
	{
		public ReturnRefHelper(IComponentToCodeDom com2TsTypes)
		{
			this.typeAliasDic = com2TsTypes.TypeAliasDic;
		}

		readonly TypeAliasDic typeAliasDic;

	/// <summary>
	/// 
	/// </summary>
	/// <param name="op"></param>
	/// <returns>Item3 indicate whether to be complex type.</returns>
	public Tuple<CodeTypeReference, bool, bool> GetOperationReturnTypeReference(OpenApiOperation op)
		{
			var referenceId = GetOperationReturnComplexTypeReferenceId(op);
			bool stringAsString = false;
			if (referenceId == null)
			{
				Tuple<CodeTypeReference, bool> r = GetOperationReturnSimpleTypeReference(op);
				CodeTypeReference primitiveTypeReference = r.Item1;
				stringAsString = r.Item2;
				return Tuple.Create(primitiveTypeReference ?? null, stringAsString, false);
			}

			var ns = NameFunc.GetNamespaceOfClassName(referenceId);
			string complexTypeName = NameFunc.RefineTypeName(referenceId, ns);

			if (typeAliasDic.TryGet(complexTypeName, out string typeAlias))
			{
				return Tuple.Create(new CodeTypeReference(typeAlias), stringAsString, true);
			}

			return Tuple.Create(new CodeTypeReference(TypeRefHelper.CombineNamespaceWithClassName(ns, complexTypeName)), stringAsString, true);
		}

		/// <summary>
		/// content.Schema.Reference.Id of op
		/// </summary>
		/// <param name="op"></param>
		/// <returns></returns>
		public static string GetOperationReturnComplexTypeReferenceId(OpenApiOperation op)
		{
			if (op.Responses.TryGetValue("200", out OpenApiResponse goodResponse))
			{
				if (goodResponse.Content == null)
				{
					throw new CodeGenException($"OpenApiOperation {op.OperationId} is having 200 response content null.");
				}

				if (goodResponse.Content.TryGetValue("application/json", out OpenApiMediaType content))
					if (content != null && content.Schema != null && content.Schema.Reference != null)
					{
						return content.Schema.Reference.Id;
					}
			}

			return null;
		}

		static readonly Type typeOfString = typeof(string);

		/// <summary>
		/// 
		/// </summary>
		/// <param name="op"></param>
		/// <returns>CodeTypeReference of the return type, and StringAsString generally with text/plain</returns>
		public static Tuple<CodeTypeReference, bool> GetOperationReturnSimpleTypeReference(OpenApiOperation op)
		{
			if (op.Responses.TryGetValue("200", out OpenApiResponse goodResponse))
			{
				CodeTypeReference codeTypeReference;

				if (goodResponse.Content.TryGetValue("application/json", out OpenApiMediaType content)) // application/json has better to be first.
				{
					if (content == null || content.Schema == null)
					{
						return Tuple.Create<CodeTypeReference, bool>(null, false);
					}

					try
					{
						codeTypeReference = TypeRefHelper.OpenApiMediaTypeToCodeTypeReference(content);

					}
					catch (ArgumentException ex)
					{
						throw new CodeGenException(ex.Message) { Pending = true };
					}

					return Tuple.Create(codeTypeReference, false);
				}

				if (goodResponse.Content.TryGetValue("text/plain", out content))
				{
					if (content.Schema != null)
					{
						string schemaType = content.Schema.Type;
						if (schemaType != null)
						{
							string schemaFormat = content.Schema.Format;
							Type type = TypeRefHelper.PrimitiveSwaggerTypeToClrType(schemaType, schemaFormat);
							return Tuple.Create(new CodeTypeReference(type), type == typeOfString);
						}
					}
				}

			}

			return Tuple.Create<CodeTypeReference, bool>(null, false);
		}

	}
}
