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
	
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Game
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Attendance { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string AwayTeam { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamMoneyLine { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Channel { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string DateTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Day { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string GameEndDateTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GameID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GlobalAwayTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GlobalGameID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GlobalHomeTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string HomeTeam { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamMoneyLine { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> IsClosed { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string LastPlay { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> OverUnder { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> PointSpread { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PointSpreadAwayTeamMoneyLine { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PointSpreadHomeTeamMoneyLine { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Quarter { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Quarter[] Quarters { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Season { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SeasonType { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> StadiumID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Status { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TimeRemainingMinutes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TimeRemainingSeconds { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Updated { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Quarter
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> GameID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Number { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> QuarterID { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Play
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AssistedByPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> AwayTeamScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> BlockedByPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Category { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Created { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> FastBreak { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> HomeTeamScore { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Opponent { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> OpponentID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PlayID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Points { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PotentialPoints { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> QuarterID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string QuarterName { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string ReceivingTeam { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> ReceivingTeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Sequence { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> ShotMade { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string SideOfBasket { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SubstituteInPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> SubstituteOutPlayerID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Team { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TeamID { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TimeRemainingMinutes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> TimeRemainingSeconds { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Type { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Updated { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class PlayByPlay
	{
		
		[System.Runtime.Serialization.DataMember()]
		public Game Game { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Play[] Plays { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Quarter[] Quarters { get; set; }
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
		/// Play By Play
		/// PlayByPlay {format}/PlayByPlay/{gameid}
		/// </summary>
		/// <param name="format">Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.</param>
		/// <param name="gameid">The GameID of an NBA game.  GameIDs can be found in the Games API.  Valid entries are <code>14620</code>, <code>16905</code>, etc.</param>
		public async Task<PlayByPlay> PlayByPlayAsync(PlayByPlayFormat format, string gameid)
		{
			var requestUri = ""+format+"/PlayByPlay/"+ (gameid==null? "" : System.Uri.EscapeDataString(gameid));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<PlayByPlay>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Play By Play Delta
		/// PlayByPlayDelta {format}/PlayByPlayDelta/{date}/{minutes}
		/// </summary>
		/// <param name="format">Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.</param>
		/// <param name="date">The date of the game(s).
		///<br>Examples: <code>2016-OCT-31</code>, <code>2017-JAN-15</code>.</param>
		/// <param name="minutes">Only returns plays that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:
		///<code>1</code>, <code>2</code> ... <code>all</code>.</param>
		public async Task<PlayByPlay[]> PlayByPlayDeltaAsync(PlayByPlayFormat format, string date, string minutes)
		{
			var requestUri = ""+format+"/PlayByPlayDelta/"+ (date==null? "" : System.Uri.EscapeDataString(date))+"/"+ (minutes==null? "" : System.Uri.EscapeDataString(minutes));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<PlayByPlay[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum PlayByPlayFormat
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		XML = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		JSON = 1,
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