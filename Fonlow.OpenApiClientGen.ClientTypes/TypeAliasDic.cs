using System;
using System.Collections.Generic;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	/// <summary>
	/// Store type aliases 
	/// </summary>
	public class TypeAliasDic
	{
		readonly Dictionary<string, string> dic = new();

		public void Add(string alias, string typeName)
		{
			if (string.IsNullOrEmpty(alias))
			{
				return;
			}

			dic.TryAdd(alias, typeName);
		}

		public bool TryGet(string alias, out string typeName)
		{
			if (string.IsNullOrEmpty(alias))
			{
				typeName = null;
				return false;
			}

			bool r = dic.TryGetValue(alias, out typeName);
			if (!r)
			{
				return false;
			}

			bool r2 = TryGet(typeName, out string typeName2);
			if (r2)
			{
				typeName = typeName2;
				return true;
			}

			return true;
		}

		public void Clear()
		{
			dic.Clear();
		}
	}
}

