//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	using System;
	using System.Linq;
	using System.Collections.Generic;
	using System.Threading.Tasks;
	using System.Text.Json;
	using System.Text.Json.Serialization;
	using Fonlow.Net.Http;
	
	
	/// <summary>
	/// Error Response
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ErrorResponse
	{
		
		[System.Runtime.Serialization.DataMember(Name="errors")]
		public Errors[] Errors { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Errors
	{
		
		/// <summary>
		/// DVLA reference code
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// A meaningful description of the error which has occurred
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="detail")]
		public string Detail { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="status")]
		public string Status { get; set; }
		
		/// <summary>
		/// Error title
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="title")]
		public string Title { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Vehicle
	{
		
		/// <summary>
		/// Additional Rate of Tax End Date, format: YYYY-MM-DD
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="artEndDate")]
		public System.Nullable<System.DateOnly> ArtEndDate { get; set; }
		
		/// <summary>
		/// Carbon Dioxide emissions in grams per kilometre
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="co2Emissions")]
		public System.Nullable<System.Int32> Co2Emissions { get; set; }
		
		/// <summary>
		/// Vehicle colour
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="colour")]
		public string Colour { get; set; }
		
		/// <summary>
		/// Date of last V5C issued
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="dateOfLastV5CIssued")]
		public System.Nullable<System.DateOnly> DateOfLastV5CIssued { get; set; }
		
		/// <summary>
		/// Engine capacity in cubic centimetres
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="engineCapacity")]
		public System.Nullable<System.Int32> EngineCapacity { get; set; }
		
		/// <summary>
		/// Euro Status (Dealer / Customer Provided (new vehicles))
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="euroStatus")]
		public string EuroStatus { get; set; }
		
		/// <summary>
		/// Fuel type (Method of Propulsion)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fuelType")]
		public string FuelType { get; set; }
		
		/// <summary>
		/// Vehicle make
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="make")]
		public string Make { get; set; }
		
		/// <summary>
		/// True only if vehicle has been export marked
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="markedForExport")]
		public System.Nullable<System.Boolean> MarkedForExport { get; set; }
		
		/// <summary>
		/// Month of First DVLA Registration
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="monthOfFirstDvlaRegistration")]
		public System.Nullable<System.DateOnly> MonthOfFirstDvlaRegistration { get; set; }
		
		/// <summary>
		/// Month of First Registration
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="monthOfFirstRegistration")]
		public System.Nullable<System.DateOnly> MonthOfFirstRegistration { get; set; }
		
		/// <summary>
		/// Mot Expiry Date
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="motExpiryDate")]
		public System.Nullable<System.DateOnly> MotExpiryDate { get; set; }
		
		/// <summary>
		/// MOT Status of the vehicle
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="motStatus")]
		public System.Nullable<VehicleMotStatus> MotStatus { get; set; }
		
		/// <summary>
		/// Real Driving Emissions value
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="realDrivingEmissions")]
		public string RealDrivingEmissions { get; set; }
		
		/// <summary>
		/// Registration number of the vehicle
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="registrationNumber")]
		public string RegistrationNumber { get; set; }
		
		/// <summary>
		/// Revenue weight in kilograms
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="revenueWeight")]
		public System.Nullable<System.Int32> RevenueWeight { get; set; }
		
		/// <summary>
		/// Date of tax liablity, Used in calculating licence information presented to user
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="taxDueDate")]
		public System.Nullable<System.DateOnly> TaxDueDate { get; set; }
		
		/// <summary>
		/// Tax status of the vehicle
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="taxStatus")]
		public System.Nullable<VehicleTaxStatus> TaxStatus { get; set; }
		
		/// <summary>
		/// Vehicle Type Approval Category
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="typeApproval")]
		public string TypeApproval { get; set; }
		
		/// <summary>
		/// Vehicle wheel plan
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="wheelplan")]
		public string Wheelplan { get; set; }
		
		/// <summary>
		/// Year of Manufacture
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="yearOfManufacture")]
		public System.Nullable<System.Int32> YearOfManufacture { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum VehicleMotStatus
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="No details held by DVLA")]
		No_details_held_by_DVLA = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="No results returned")]
		No_results_returned = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="Not valid")]
		Not_valid = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Valid = 3,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum VehicleTaxStatus
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="Not Taxed for on Road Use")]
		Not_Taxed_for_on_Road_Use = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SORN = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Taxed = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Untaxed = 3,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class VehicleRequest
	{
		
		[System.Runtime.Serialization.DataMember(Name="registrationNumber")]
		public string RegistrationNumber { get; set; }
	}
	
	public partial class Misc
	{
		
		private System.Net.Http.HttpClient httpClient;
		
		private JsonSerializerOptions jsonSerializerSettings;
		
		public Misc(System.Net.Http.HttpClient httpClient, JsonSerializerOptions jsonSerializerSettings=null)
		{
			if (httpClient == null)
				throw new ArgumentNullException("Null HttpClient.", "httpClient");

			if (httpClient.BaseAddress == null)
				throw new ArgumentNullException("HttpClient has no BaseAddress", "httpClient");

			this.httpClient = httpClient;
			this.jsonSerializerSettings = jsonSerializerSettings;
		}
		
		/// <summary>
		/// Get vehicle details by registration number
		/// Returns vehicle details based on registration number
		/// GetVehicleDetailsByRegistrationNumber v1/vehicles
		/// </summary>
		/// <param name="requestBody">Registration number of the vehicle to find details for</param>
		/// <returns>Successful response</returns>
		public async Task<Vehicle> GetVehicleDetailsByRegistrationNumberAsync(VehicleRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/vehicles";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Vehicle>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
}

namespace Fonlow.Net.Http
{
	using System.Net.Http;

	public class WebApiRequestException : HttpRequestException
	{
		public new System.Net.HttpStatusCode StatusCode { get; private set; }

		public string Response { get; private set; }

		public System.Net.Http.Headers.HttpResponseHeaders Headers { get; private set; }

		public System.Net.Http.Headers.MediaTypeHeaderValue ContentType { get; private set; }

		public WebApiRequestException(string message, System.Net.HttpStatusCode statusCode, string response, System.Net.Http.Headers.HttpResponseHeaders headers, System.Net.Http.Headers.MediaTypeHeaderValue contentType) : base(message)
		{
			StatusCode = statusCode;
			Response = response;
			Headers = headers;
			ContentType = contentType;
		}
	}

	public static class ResponseMessageExtensions
	{
		public static void EnsureSuccessStatusCodeEx(this HttpResponseMessage responseMessage)
		{
			if (!responseMessage.IsSuccessStatusCode)
			{
				var responseText = responseMessage.Content.ReadAsStringAsync().Result;
				var contentType = responseMessage.Content.Headers.ContentType;
				throw new WebApiRequestException(responseMessage.ReasonPhrase, responseMessage.StatusCode, responseText, responseMessage.Headers, contentType);
			}
		}
	}
}
