using Fonlow.OpenApiClientGen.ClientTypes;
using Microsoft.OpenApi.Models;
using Microsoft.OpenApi.Readers;
using System;
using System.IO;
using Xunit;

namespace SwagTests
{
	public class DocFixture
	{
		public DocFixture()
		{
			using FileStream stream = new("SwagMock/myswagger.json", FileMode.Open, FileAccess.Read);
			Doc = new OpenApiStreamReader().Read(stream, out OpenApiDiagnostic diagnostic);
			Composer = new NameComposer(new Settings
			{
				PathPrefixToRemove = "/api",
			}, new CSharpRenamer());
		}

		public OpenApiDocument Doc { get; }

		public NameComposer Composer { get;}
	}

	public class ComposeNameTests : IClassFixture<DocFixture>
	{
		public ComposeNameTests(DocFixture fixture)
		{
			doc = fixture.Doc;
			composer = fixture.Composer;
		}

		readonly OpenApiDocument doc;
		readonly NameComposer composer;

		[Fact]
		public void TestHead()
		{
			Assert.Equal("My API", doc.Info.Title);
		}

		[Fact]
		public void TestComposeActionNameWithId()
		{
			OpenApiPathItem pathItem = doc.Paths["/api/Values/{id}"];
			string actionName = composer.ComposeActionName(pathItem.Operations[OperationType.Get], OperationType.Get.ToString());
			Assert.Equal("ValuesGetById", actionName);
		}

		[Fact]
		public void TestComposeActionName()
		{
			OpenApiPathItem pathItem = doc.Paths["/api/Values"];
			string actionName = composer.ComposeActionName(pathItem.Operations[OperationType.Get], OperationType.Get.ToString());
			Assert.Equal("ValuesGet", actionName);
		}

		[Fact]
		public void TestComposeActionNameWithParameters()
		{
			OpenApiPathItem pathItem = doc.Paths["/api/Entities/link"];
			string actionName = composer.ComposeActionName(pathItem.Operations[OperationType.Put], OperationType.Put.ToString());
			Assert.Equal("EntitiesPutByIdAndRelationship", actionName);
		}

		[Fact]
		public void TestUrlToFunctionName()
		{
			Assert.Equal("EntitiesPerson_id", composer.PathToActionOrContainerName("/api/Entities/person/{id}"));
		}

		[Fact]
		public void TestUrlToFunctionName2()
		{
			Assert.Equal("Sites_siteID__outputFormat", composer.PathToActionOrContainerName("/sites/{siteID}.{outputFormat}"));
		}

		//[Fact]
		//public void TestUrlToFunctionName3()
		//{
		//	Assert.Equal("Sitessubsites", composer.PathToActionOrContainerName("/sites/{siteID}/subsites.{outputFormat}"));
		//}

		[Fact]
		public void TestSwaggerTypeToClrType()
		{
			Assert.Equal(typeof(long), TypeRefHelper.PrimitiveSwaggerTypeToClrType("integer", "int64"));
			Assert.Equal(typeof(double), TypeRefHelper.PrimitiveSwaggerTypeToClrType("number", "double"));
			Assert.Equal(typeof(string), TypeRefHelper.PrimitiveSwaggerTypeToClrType("string", ""));
			Assert.Equal(typeof(DateOnly), TypeRefHelper.PrimitiveSwaggerTypeToClrType("string", "date"));
			Assert.Equal(typeof(DateTimeOffset), TypeRefHelper.PrimitiveSwaggerTypeToClrType("string", "date-time"));
		}

		//[Fact]
		//public void TestReturnSimpleType()
		//{
		//	OpenApiPathItem pathItem = doc.Paths["/api/SuperDemo/decimal/{d}"];
		//	Tuple<System.CodeDom.CodeTypeReference, bool> t = ReturnRefHelper.GetOperationReturnSimpleTypeReference(pathItem.Operations[OperationType.Get]);
		//	Assert.Equal("System.Double", t.Item1.BaseType);
		//}

		//[Fact]
		//public void TestReturnComplexType()
		//{
		//	OpenApiPathItem pathItem = doc.Paths["/api/Entities/getPerson/{id}"];
		//	string t = ReturnRefHelper.GetOperationReturnComplexTypeReferenceId(pathItem.Operations[OperationType.Get]);
		//	Assert.Equal("Person", t);
		//}

		//[Fact]
		//public void TestReturnTypePerson()
		//{
		//	var pathItem = doc.Paths["/api/Entities/getPerson/{id}"];
		//	var t = composer.GetOperationReturnType(pathItem.Operations[OperationType.Get]);
		//	Assert.Equal("Person", t.Item2);
		//}

		//[Fact]
		//public void TestReturnTypeDouble()
		//{
		//	var pathItem = doc.Paths["/api/SuperDemo/decimal/{d}"];
		//	var t = composer.GetOperationReturnType(pathItem.Operations[OperationType.Get]);
		//	Assert.Equal(typeof(double), t.Item1);
		//}

		[Fact]
		public void TestEnumType()
		{
			Type type = typeof(PhoneType);
			System.Reflection.FieldInfo[] fields = type.GetFields();
			Assert.NotEmpty(fields);
		}

		[Fact]
		public void TestDataAnnotationsRange()
		{
			DDD d = new()
			{
				PackSize = 1000
			};

			Assert.Equal(1000, d.PackSize); // no check.

			string s = Newtonsoft.Json.JsonConvert.SerializeObject(d);
			Assert.Equal("{\"packSize\":1000}", s); //no check in serialization
		}


	}

	public enum PhoneType
	{
		/// <summary>
		/// Land line
		/// </summary>
		Tel = 0,

		/// <summary>
		/// Mobile phone
		/// </summary>
		Mobile = 1,

		Skype = 2,
		Fax = 3,
	}

	public partial class DDD
	{
		/// <summary>The size of the pack the dog is from</summary>
		[Newtonsoft.Json.JsonProperty("packSize", Required = Newtonsoft.Json.Required.Always)]
		[System.ComponentModel.DataAnnotations.Range(1, 100)]
		public int PackSize { get; set; } = 1;
	}


}
