using System;
using System.Collections.Generic;
using System.Text;
using System.CodeDom;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public static class CodeNamespaceExtensions
	{
		/// <summary>
		/// Find existing enum type according to enum members in literal string.
		/// </summary>
		/// <param name="clientNamespace"></param>
		/// <param name="ms"></param>
		/// <returns></returns>
		public static CodeTypeDeclaration FindEnumDeclaration(this CodeNamespace clientNamespace, string[] ms)
		{
			for (int i = 0; i < clientNamespace.Types.Count; i++)
			{
				var tc = clientNamespace.Types[i];
				if (tc.IsEnum)
				{
					var memberCount = tc.Members.Count;
					if (memberCount != ms.Length)
					{
						continue;
					}

					for (int k = 0; k < memberCount; k++)
					{
						var tem = tc.Members[k];
						if (tem.Name != ms[k])
						{
							break;
						}

						if (k == memberCount - 1)// last one pass
						{
							return tc;
						}
					}
				}
			}

			return null;
		}

		public static CodeTypeDeclaration FindTypeDeclaration(this CodeNamespace clientNamespace, string typeName)
		{
			for (int i = 0; i < clientNamespace.Types.Count; i++)
			{
				var tc = clientNamespace.Types[i];
				if (tc.Name == typeName)
				{
					return tc;
				}
			}

			return null;
		}
	}
}
