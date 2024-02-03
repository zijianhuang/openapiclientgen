using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	/// <summary>
	/// 
	/// Inspired by Jackson Dunstan, http://JacksonDunstan.com/articles/3189.
	/// </summary>
	public static class CodeTypeMemberCollectionExtensions
	{
		/// <summary>
		/// Insert member to CodeTypeMemberCollection with in-place sorting.
		/// </summary>
		/// <param name="list">List to insert into</param>
		/// <param name="value">Value to insert</param>
		public static void InsertIntoSortedList(this CodeTypeMemberCollection list, CodeTypeMember value)
		{
			InsertIntoSortedList(list, value, (a, b) => string.Compare(a.Name, b.Name));
		}

		/// <summary>
		/// Insert a value into an Collection that is presumed to be already sorted such that sort ordering is preserved
		/// </summary>
		/// <param name="list">List to insert into</param>
		/// <param name="value">Value to insert</param>
		/// <param name="comparison">Comparison to determine sort order with</param>
		public static void InsertIntoSortedList(
			this CodeTypeMemberCollection list,
			CodeTypeMember value,
			Comparison<CodeTypeMember> comparison
		)
		{
			var startIndex = 0;
			var endIndex = list.Count;
			while (endIndex > startIndex)
			{
				var windowSize = endIndex - startIndex;
				var middleIndex = startIndex + (windowSize / 2);
				var middleValue = list[middleIndex];
				var compareToResult = comparison(middleValue, value);
				if (compareToResult == 0)
				{
					list.Insert(middleIndex, value);
					return;
				}
				else if (compareToResult < 0)
				{
					startIndex = middleIndex + 1;
				}
				else
				{
					endIndex = middleIndex;
				}
			}
			list.Insert(startIndex, value);
		}
	}
}
