using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;
using System.CodeDom;
using Microsoft.OpenApi.Models;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	[Serializable]
	public class ParameterDescription
	{
		public string Documentation { get; set; }

		public string Name
		{ get; set; }

		public string QName
		{ get; set; }

		public ParameterDescriptor ParameterDescriptor
		{ get; set; }

		public CodeTypeReference ParameterTypeReference { get; set; }
	}

	[Serializable]
	public class ParameterDescriptor
	{
		public bool IsRequired
		{ get; set; }

		public string ParameterName
		{ get; set; }

		public Type ParameterType
		{ get; set; }

		public OpenApiSchema Schema
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

		/// <summary>
		/// The thrower has no enough info to report, and the catcher with enough info should throw a new one with the info to be displayed in console.
		/// </summary>
		public bool Pending { get; set; }

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
