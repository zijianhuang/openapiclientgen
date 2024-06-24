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

}
