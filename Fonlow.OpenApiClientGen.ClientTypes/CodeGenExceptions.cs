using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	[Serializable]
	public class CodeGenOperationException : Exception
	{
		public CodeGenOperationException()
		{

		}

		/// <summary>
		/// The thrower has no enough info to report, and the catcher with enough info should throw a new one with the info to be displayed in console.
		/// </summary>
		public bool Pending { get; set; }

		public CodeGenOperationException(string message) : base(message) { }

		public CodeGenOperationException(string message, Exception innerException) : base(message, innerException) { }
	}

	[Serializable]
	public class CodeGenLoadPluginException : Exception
	{
		public CodeGenLoadPluginException()
		{

		}

		public CodeGenLoadPluginException(string message) : base(message) { }

		public CodeGenLoadPluginException(string message, Exception innerException) : base(message, innerException) { }

		public string Description { get; set; }
	}

	[Serializable]
	public class CodeGenReadPluginException : Exception
	{
		public CodeGenReadPluginException()
		{

		}

		public CodeGenReadPluginException(string message) : base(message) { }

		public CodeGenReadPluginException(string message, Exception innerException) : base(message, innerException) { }

		public string Description { get; set; }
	}

}
