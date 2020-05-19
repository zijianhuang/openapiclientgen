using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	[Serializable]
	public class ParameterDescription
	{
		public string Documentation
		{ get; set; }

		public string Name
		{ get; set; }

		public ParameterDescriptor ParameterDescriptor
		{ get; set; }
	}

	[Serializable]
	public class ParameterDescriptor
	{
		public bool IsOptional
		{ get; set; }

		public string ParameterName
		{ get; set; }

		public Type ParameterType
		{ get; set; }

		public ParameterBinder ParameterBinder
		{ get; set; }
	}

	[Serializable]
	public enum ParameterBinder
	{
		None,
		FromUri,
		FromBody,
		FromQuery,
		FromForm,

	}

	[Serializable]
	public class CodeGenException : Exception
	{
		public CodeGenException()
		{

		}

		public CodeGenException(string message) : base(message) { }

		public CodeGenException(string message, Exception innerException) : base(message, innerException) { }

		public override void GetObjectData(SerializationInfo info, StreamingContext context)
		{
			base.GetObjectData(info, context);
		}

		protected CodeGenException(SerializationInfo serializationInfo, StreamingContext streamingContext) : base(serializationInfo, streamingContext)
		{
		}
	}
}
