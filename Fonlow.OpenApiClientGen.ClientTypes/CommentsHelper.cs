using Fonlow.Poco2Client;
using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using System;
using System.CodeDom;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Globalization;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public static class CommentsHelper
	{
		public static List<string> GetCommentsFromAnnotations(OpenApiSchema fieldSchema)
		{
			List<string> ss = new List<string>();
			if (fieldSchema.MaxLength.HasValue)
			{
				ss.Add(String.Format(CultureInfo.CurrentCulture, "Max length: {0}", fieldSchema.MaxLength.Value));
			}

			if (fieldSchema.MinLength.HasValue)
			{
				ss.Add(String.Format(CultureInfo.CurrentCulture, "Min length: {0}", fieldSchema.MinLength.Value));
			}

			if (fieldSchema.Minimum.HasValue)
			{
				ss.Add(String.Format(CultureInfo.CurrentCulture, "Minimum: {0}", fieldSchema.Minimum.Value));
			}

			if (fieldSchema.Maximum.HasValue)
			{
				ss.Add(String.Format(CultureInfo.CurrentCulture, "Maximum: {0}", fieldSchema.Maximum.Value));
			}

			if (fieldSchema.MinItems.HasValue)
			{
				ss.Add(String.Format(CultureInfo.CurrentCulture, "Minimum items: {0}", fieldSchema.MinItems.Value));
			}

			if (fieldSchema.MaxItems.HasValue)
			{
				ss.Add(String.Format(CultureInfo.CurrentCulture, "Maximum items: {0}", fieldSchema.MaxItems.Value));
			}

			if (!String.IsNullOrEmpty(fieldSchema.Pattern))
			{
				ss.Add(String.Format(CultureInfo.CurrentCulture, "Pattern: {0}", fieldSchema.Pattern));
			}

			return ss;
		}


	}
}
