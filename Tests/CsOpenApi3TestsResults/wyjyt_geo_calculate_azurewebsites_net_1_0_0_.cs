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
	
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GeoConvertRequest
	{
		
		/// <summary>
		/// Comma-separated list of Geo Coordinates to convert. See accepted Systems below.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="coordinates")]
		public string Coordinates { get; set; }
		
		/// <summary>
		/// Output format:
		///(decimal, degree, minutes, seconds.)
		///Default is decimal.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="format")]
		public string Format { get; set; }
		
		/// <summary>
		/// Output standard coordinate system:
		///(latlon | utm | mgrs | ecef | epsg3857 | georef | cartesian).  
		///Default is latlon.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="system")]
		public string System { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GeoConvertResponse
	{
		
		/// <summary>
		/// Comma-separated list of formatted Geo Coordinates.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="coordinates")]
		public string Coordinates { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GeoDistanceRequest
	{
		
		/// <summary>
		/// Geo Coordinate 1 to calculate from.
		///  Standards are (latlon | utm | mgrs | ecef | epsg3857 | georef | cartesian)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="coordinate1")]
		public string Coordinate1 { get; set; }
		
		/// <summary>
		/// Geo Coordinate 2 to calculate to.
		///  Standards are (latlon | utm | mgrs | ecef | epsg3857 | georef | cartesian)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="coordinate2")]
		public string Coordinate2 { get; set; }
		
		/// <summary>
		/// Flag to use ellipsoid calculation.
		///  Default is false, spherical.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="useEllipse")]
		public System.Nullable<System.Boolean> UseEllipse { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GeoDistanceResponse
	{
		
		/// <summary>
		/// Bearing direction between the two coordinates in degrees.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="bearing")]
		public System.Nullable<System.Double> Bearing { get; set; }
		
		/// <summary>
		/// Distance between the two coordinates in meters.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="meters")]
		public System.Nullable<System.Double> Meters { get; set; }
	}
	
	/// <summary>
	/// Celestial event information.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GeoEventDto
	{
		
		[System.Runtime.Serialization.DataMember(Name="fall")]
		public System.Nullable<System.DateTimeOffset> Fall { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="lastApogee")]
		public System.Nullable<System.DateTimeOffset> LastApogee { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="lastPerigee")]
		public System.Nullable<System.DateTimeOffset> LastPerigee { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="nextApogee")]
		public System.Nullable<System.DateTimeOffset> NextApogee { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="nextPerigee")]
		public System.Nullable<System.DateTimeOffset> NextPerigee { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="spring")]
		public System.Nullable<System.DateTimeOffset> Spring { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="summer")]
		public System.Nullable<System.DateTimeOffset> Summer { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="winter")]
		public System.Nullable<System.DateTimeOffset> Winter { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="zodiacSign")]
		public string ZodiacSign { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GeoFenceRequest
	{
		
		/// <summary>
		/// Array of coordinates to check if in the fence.
		///  Accepted standards: (latlon | utm | mgrs | ecef | epsg3857 | georef | cartesian)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="checkCoordinates")]
		public string[] CheckCoordinates { get; set; }
		
		/// <summary>
		/// Array of coordinates that define the fence.  First and last should be the same for polygons.
		///  Accepted standards: (latlon | utm | mgrs | ecef | epsg3857 | georef | cartesian)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fenceCoordinates")]
		public string[] FenceCoordinates { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GeoFenceResponse
	{
		
		/// <summary>
		/// List of distances from the fence.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="distances")]
		public double[] Distances { get; set; }
		
		/// <summary>
		/// List of flags indicating inside or outside of the fence.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="insides")]
		public bool[] Insides { get; set; }
	}
	
	/// <summary>
	/// Lunar information.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GeoMoonDto
	{
		
		[System.Runtime.Serialization.DataMember(Name="altitude")]
		public System.Nullable<System.Double> Altitude { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="azimuth")]
		public System.Nullable<System.Double> Azimuth { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="bearing")]
		public System.Nullable<System.Double> Bearing { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="declination")]
		public System.Nullable<System.Double> Declination { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="distance")]
		public System.Nullable<System.Double> Distance { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="illumination")]
		public MoonIllum Illumination { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="isUp")]
		public System.Nullable<System.Boolean> IsUp { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="lastEclipse")]
		public LunarEclipseDetails LastEclipse { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="nextEclipse")]
		public LunarEclipseDetails NextEclipse { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="rightAscension")]
		public System.Nullable<System.Double> RightAscension { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="rise")]
		public System.Nullable<System.DateTimeOffset> Rise { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="set")]
		public System.Nullable<System.DateTimeOffset> Set { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sign")]
		public string Sign { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class MoonIllum
	{
		
		[System.Runtime.Serialization.DataMember(Name="angle")]
		public System.Nullable<System.Double> Angle { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="fraction")]
		public System.Nullable<System.Double> Fraction { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="phase")]
		public System.Nullable<System.Double> Phase { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="phaseName")]
		public string PhaseName { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="phaseNameEnum")]
		public System.Nullable<MoonIllumPhaseNameEnum> PhaseNameEnum { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum MoonIllumPhaseNameEnum
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_0 = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_1 = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_2 = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_3 = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_4 = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_5 = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_6 = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_7 = 7,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class LunarEclipseDetails
	{
		
		[System.Runtime.Serialization.DataMember(Name="date")]
		public System.Nullable<System.DateTimeOffset> Date { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="hasEclipseData")]
		public System.Nullable<System.Boolean> HasEclipseData { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="midEclipse")]
		public System.Nullable<System.DateTimeOffset> MidEclipse { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="partialEclispeBegin")]
		public System.Nullable<System.DateTimeOffset> PartialEclispeBegin { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="partialEclispeEnd")]
		public System.Nullable<System.DateTimeOffset> PartialEclispeEnd { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="penumbralEclipseBegin")]
		public System.Nullable<System.DateTimeOffset> PenumbralEclipseBegin { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="penumbralEclispeEnd")]
		public System.Nullable<System.DateTimeOffset> PenumbralEclispeEnd { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="totalEclipseBegin")]
		public System.Nullable<System.DateTimeOffset> TotalEclipseBegin { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="totalEclipseEnd")]
		public System.Nullable<System.DateTimeOffset> TotalEclipseEnd { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="type")]
		public System.Nullable<LunarEclipseDetailsType> Type { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum LunarEclipseDetailsType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_0 = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_1 = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_2 = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GeoSkyRequest
	{
		
		/// <summary>
		/// Location coordinate of sky data.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="coordinate")]
		public string Coordinate { get; set; }
		
		/// <summary>
		/// Date on which to fetch sky data.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="date")]
		public System.Nullable<System.DateTimeOffset> Date { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GeoSkyResponse
	{
		
		/// <summary>
		/// Celestial event information.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="event")]
		public GeoEventDto Event { get; set; }
		
		/// <summary>
		/// Lunar information.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="moon")]
		public GeoMoonDto Moon { get; set; }
		
		/// <summary>
		/// Solar information.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sun")]
		public GeoSunDto Sun { get; set; }
	}
	
	/// <summary>
	/// Solar information.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GeoSunDto
	{
		
		[System.Runtime.Serialization.DataMember(Name="altitude")]
		public System.Nullable<System.Double> Altitude { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="azimuth")]
		public System.Nullable<System.Double> Azimuth { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="dawn")]
		public System.Nullable<System.DateTimeOffset> Dawn { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="declination")]
		public System.Nullable<System.Double> Declination { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="dusk")]
		public System.Nullable<System.DateTimeOffset> Dusk { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="isUp")]
		public System.Nullable<System.Boolean> IsUp { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="lastEclipse")]
		public SolarEclipseDetails LastEclipse { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="nextEclipse")]
		public SolarEclipseDetails NextEclipse { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="noon")]
		public System.Nullable<System.DateTimeOffset> Noon { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="rightAscension")]
		public System.Nullable<System.Double> RightAscension { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="rise")]
		public System.Nullable<System.DateTimeOffset> Rise { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="set")]
		public System.Nullable<System.DateTimeOffset> Set { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SolarEclipseDetails
	{
		
		[System.Runtime.Serialization.DataMember(Name="aorTDuration")]
		public string AorTDuration { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="aorTEclipseBegin")]
		public System.Nullable<System.DateTimeOffset> AorTEclipseBegin { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="aorTEclipseEnd")]
		public System.Nullable<System.DateTimeOffset> AorTEclipseEnd { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="date")]
		public System.Nullable<System.DateTimeOffset> Date { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="hasEclipseData")]
		public System.Nullable<System.Boolean> HasEclipseData { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="maximumEclipse")]
		public System.Nullable<System.DateTimeOffset> MaximumEclipse { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="partialEclispeBegin")]
		public System.Nullable<System.DateTimeOffset> PartialEclispeBegin { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="partialEclispeEnd")]
		public System.Nullable<System.DateTimeOffset> PartialEclispeEnd { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="type")]
		public System.Nullable<SolarEclipseDetailsType> Type { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum SolarEclipseDetailsType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_0 = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_1 = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_2 = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class WyjytErrorResponse
	{
		
		/// <summary>
		/// Error message.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="reason")]
		public string Reason { get; set; }
		
		/// <summary>
		/// Success or fail.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="success")]
		public System.Nullable<System.Boolean> Success { get; set; }
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
		/// Convert the list of geo coordinates to a standard format - (latlon | utm | mgrs | ecef | epsg3857 | georef | cartesian)
		/// Convert the list of geo coordinates to a standard format - (latlon | utm | mgrs | ecef | epsg3857 | georef | cartesian)
		/// Convert Convert
		/// </summary>
		/// <returns>Success</returns>
		public async Task<GeoConvertResponse> ConvertAsync(GeoConvertRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "Convert";
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
				return JsonSerializer.Deserialize<GeoConvertResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Calculate the distance between two geo coordinates.
		/// Calculate the distance between two geo coordinates.
		/// Distance Distance
		/// </summary>
		/// <returns>Success</returns>
		public async Task<GeoDistanceResponse> DistanceAsync(GeoDistanceRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "Distance";
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
				return JsonSerializer.Deserialize<GeoDistanceResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Check if a list of coordinates are inside of a fence of coordinates.
		/// Check if a list of coordinates are inside of a fence of coordinates.
		/// Fence Fence
		/// </summary>
		/// <returns>Success</returns>
		public async Task<GeoFenceResponse> FenceAsync(GeoFenceRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "Fence";
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
				return JsonSerializer.Deserialize<GeoFenceResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Calculate sun, moon, eclipse and sky information for the date and location.
		/// Calculate sun, moon, eclipse and sky information for the date and location.
		/// Sky Sky
		/// </summary>
		/// <returns>Success</returns>
		public async Task<GeoSkyResponse> SkyAsync(GeoSkyRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "Sky";
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
				return JsonSerializer.Deserialize<GeoSkyResponse>(streamContent, jsonSerializerSettings);
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