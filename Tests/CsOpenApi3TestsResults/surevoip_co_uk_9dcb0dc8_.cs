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
	using Newtonsoft.Json;
	using Fonlow.Net.Http;
	
	
	public partial class Misc
	{
		
		private System.Net.Http.HttpClient httpClient;
		
		private JsonSerializerSettings jsonSerializerSettings;
		
		public Misc(System.Net.Http.HttpClient httpClient, JsonSerializerSettings jsonSerializerSettings=null)
		{
			if (httpClient == null)
				throw new ArgumentNullException("Null HttpClient.", "httpClient");

			if (httpClient.BaseAddress == null)
				throw new ArgumentNullException("HttpClient has no BaseAddress", "httpClient");

			this.httpClient = httpClient;
			this.jsonSerializerSettings = jsonSerializerSettings;
		}
		
		/// <summary>
		/// List global resources
		/// GetByHypermediaAndContent_type 
		/// </summary>
		/// <param name="hypermedia">Disable Hypermedia</param>
		/// <param name="content_type">Content Type</param>
		/// <returns>Return Status OK and/or resource list</returns>
		public async Task<GetByHypermediaAndContent_typeReturn> GetByHypermediaAndContent_typeAsync(GetByHypermediaAndContent_typeHypermedia hypermedia, GetByHypermediaAndContent_typeContent_type content_type, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "?hypermedia=" + hypermedia+"&content-type=" + content_type;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<GetByHypermediaAndContent_typeReturn>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List global announcements
		/// AnnouncementsGet announcements
		/// </summary>
		/// <returns>Return Status OK and/or resource list</returns>
		public async Task AnnouncementsGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "announcements";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List areacodes
		/// AreacodesGet areacodes
		/// </summary>
		/// <returns>OK</returns>
		public async Task AreacodesGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "areacodes";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List global billing detail
		/// BillingGet billing
		/// </summary>
		/// <returns>OK</returns>
		public async Task BillingGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "billing";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Validate a phone number by calling it once
		/// CallsGetByValidate calls
		/// </summary>
		/// <param name="validate">Validate a phone number by calling it for one ring. Note; not 100% proof the number is in service.</param>
		/// <returns>OK</returns>
		public async Task CallsGetByValidateAsync(int validate, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "calls?validate="+validate;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Create phone calls with or without announcements and scheduled hangups
		/// CallsPost calls
		/// </summary>
		/// <param name="requestBody">Create a phone call and play announcement audio to the "from" party (a leg)</param>
		public async Task CallsPostAsync(CallsPostPostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "calls";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			using var requestWriter = new System.IO.StringWriter();
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new System.Net.Http.StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List charges
		/// ChargesGet charges
		/// </summary>
		/// <returns>OK</returns>
		public async Task ChargesGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "charges";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Create charges for invoices
		/// ChargesPost charges
		/// </summary>
		public async Task ChargesPostAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "charges";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List contacts
		/// ContactsGet contacts
		/// </summary>
		/// <returns>OK</returns>
		public async Task ContactsGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "contacts";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List all customers or find your own account
		/// CustomersGet customers
		/// </summary>
		public async Task CustomersGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "customers";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Represents a customer
		/// Customers_accountGet customers/{account}
		/// </summary>
		/// <param name="account">Account ID of customer</param>
		/// <returns>Found</returns>
		public async Task<Customers_accountGetReturn> Customers_accountGetAsync(int account, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "customers/"+account;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<Customers_accountGetReturn>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List of announcement audio files
		/// Customers_accountAnnouncementsGet customers/{account}/announcements
		/// </summary>
		/// <param name="account">Account ID of customer</param>
		/// <returns>OK</returns>
		public async Task<Customers_accountAnnouncementsGetReturn> Customers_accountAnnouncementsGetAsync(int account, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "customers/"+account+"/announcements";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<Customers_accountAnnouncementsGetReturn>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Delete an announcement audio file
		/// Customers_accountAnnouncements_announcement_idDelete customers/{account}/announcements/{announcement_id}
		/// </summary>
		public async Task Customers_accountAnnouncements_announcement_idDeleteAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "customers/{account}/announcements/{announcement_id}";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Represents an announcement audio file
		/// Customers_accountAnnouncements_announcement_idGet customers/{account}/announcements/{announcement_id}
		/// </summary>
		/// <returns>OK</returns>
		public async Task Customers_accountAnnouncements_announcement_idGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "customers/{account}/announcements/{announcement_id}";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List global ongoing faxes
		/// FaxesGet faxes
		/// </summary>
		/// <returns>OK</returns>
		public async Task FaxesGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "faxes";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List Hosted VoIP domains
		/// HostedGet hosted
		/// </summary>
		/// <returns>OK</returns>
		public async Task HostedGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "hosted";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return the IP address from where your API request originated
		/// Ip_addressGet ip-address
		/// </summary>
		/// <returns>OK</returns>
		public async Task Ip_addressGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "ip-address";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List mobile accounts
		/// MobileGet mobile
		/// </summary>
		/// <returns>OK</returns>
		public async Task MobileGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "mobile";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List available SureVoIP Ofcom number allocations for purchase
		/// NumbersGet numbers
		/// </summary>
		/// <returns>OK</returns>
		public async Task NumbersGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Search available numbers by areacode
		/// You can search by area name, area code or filter using both.
		/// 
		/// NumbersAreacodesGet numbers/areacodes
		/// </summary>
		/// <returns>OK</returns>
		public async Task<NumbersAreacodesGetReturn> NumbersAreacodesGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "numbers/areacodes";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<NumbersAreacodesGetReturn>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List SureVoIP Partner accounts
		/// PartnersGet partners
		/// </summary>
		/// <returns>OK</returns>
		public async Task PartnersGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "partners";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List ported numbers
		/// PortingGet porting
		/// </summary>
		/// <returns>OK</returns>
		public async Task PortingGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "porting";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List all Service Status messages
		/// Service_statusGet service-status
		/// </summary>
		/// <returns>OK</returns>
		public async Task Service_statusGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "service-status";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List all SIP accounts
		/// SipGet sip
		/// </summary>
		/// <returns>OK</returns>
		public async Task SipGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "sip";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List SMS
		/// SmsGet sms
		/// </summary>
		/// <returns>OK</returns>
		public async Task SmsGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "sms";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Return your POSTed data for testing
		/// SupportEchoPost support/echo
		/// </summary>
		/// <returns>OK</returns>
		public async Task SupportEchoPostAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "support/echo";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List all account credit topups
		/// TopupsGet topups
		/// </summary>
		/// <returns>OK</returns>
		public async Task TopupsGetAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "topups";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum GetByHypermediaAndContent_typeHypermedia
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="yes")]
		yes = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="no")]
		no = 1,
	}
	
	public enum GetByHypermediaAndContent_typeContent_type
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="application/json")]
		application_json = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="text/html")]
		text_html = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="text/xml")]
		text_xml = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="application/xml")]
		application_xml = 3,
	}
	
	public class GetByHypermediaAndContent_typeReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="status")]
		public System.Nullable<GetByHypermediaAndContent_typeReturnStatus> Status { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="")]
	[JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]
	[System.SerializableAttribute()]
	public enum GetByHypermediaAndContent_typeReturnStatus
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="OK")]
		OK = 0,
	}
	
	public class CallsPostPostBody
	{
		
		/// <summary>
		/// is in seconds. Just take 120 secs away from the hangup_at time for a announcement to be played 2 mins before the end of the call. If provided announcement_id is required
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="announcement_at")]
		public string Announcement_at { get; set; }
		
		/// <summary>
		/// is the announcement id (from https://api.surevoip.co.uk/customers/{customer}/announcements/{announcement_id}) to play for example “your call is about to end in 2 mins”. We only allow a wav file, but we may allow "words", which will use SureVoIP provided text to speech. If provided announcement_at is required
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="announcement_id")]
		public string Announcement_id { get; set; }
		
		/// <summary>
		/// The caller ID to show the b leg (to).
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="caller_id")]
		public string Caller_id { get; set; }
		
		/// <summary>
		/// The person making the call, i.e the a leg. This person must answer in order for the b leg to be rung
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="from")]
		public string From { get; set; }
		
		/// <summary>
		/// the id of a thank you announcement or similar. You can manage these as you would with any RESTful resource at https://api.surevoip.co.uk/announcements and https://api.surevoip.co.uk/customers/{customer}/announcements/{announcement_id}. It will be played at the end of the call at hangup. If provided hangup_at is required.
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="hangup_announcement_id")]
		public string Hangup_announcement_id { get; set; }
		
		/// <summary>
		/// length in seconds from when the call is *answered* to when the system hangs up. If "hangup_announcement_id" is present, this will be played at hangup
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="hangup_at")]
		public string Hangup_at { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="options")]
		public CallsPostPostBodyOptions Options { get; set; }
		
		/// <summary>
		/// The b leg of the call, i.e. the person you are calling
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="to")]
		public string To { get; set; }
	}
	
	public class CallsPostPostBodyOptions
	{
		
		/// <summary>
		/// Change the caller ID shown to the a leg (from)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="a_leg_caller_id")]
		public string A_leg_caller_id { get; set; }
		
		/// <summary>
		/// Do not ring the "to" number, only the from and show "caller_id"
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="a_leg_only")]
		public System.Nullable<System.Int32> A_leg_only { get; set; }
		
		/// <summary>
		/// The phone keypad number to press to hangup the call and not place the second leg of the call. Default 2
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="cancel_key")]
		public System.Nullable<System.Int32> Cancel_key { get; set; }
		
		/// <summary>
		/// The phone keypad number to press in order to place the call to the b leg, i.e. press to confirm. Default 1
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="connect_key")]
		public System.Nullable<System.Int32> Connect_key { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="play_audio")]
		public CallsPostPostBodyOptionsPlay_audio[] CallsPostPostBodyOptionsPlay_audio { get; set; }
	}
	
	public class CallsPostPostBodyOptionsPlay_audio
	{
		
		/// <summary>
		/// Id of announcement audio file which will play to the a leg of the call, i.e. the person that must answer the call first. This plays one or more audio files you have uploaded. The use case being you want to play audio to let the a leg of the call know what the call is about. Imagine a call center agent needs to know that they are calling a customer. These audio files may play a customer account number to the agent for example. 
		///Have lots of audio files in this array to build up a message
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="announcement_id")]
		public string Announcement_id { get; set; }
	}
	
	public class Customers_accountGetReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="address")]
		public string Address { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="balance")]
		public System.Nullable<System.Int32> Balance { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="city")]
		public string City { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="company_name")]
		public string Company_name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="company_website")]
		public string Company_website { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="country")]
		public string Country { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="creditlimit")]
		public string Creditlimit { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="email")]
		public string Email { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="fax")]
		public string Fax { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="firstname")]
		public string Firstname { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="lastname")]
		public string Lastname { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="phone")]
		public string Phone { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="postcode")]
		public string Postcode { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="state")]
		public string State { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="username")]
		public System.Nullable<System.Int32> Username { get; set; }
	}
	
	public class Customers_accountAnnouncementsGetReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="list")]
		public string[] List { get; set; }
	}
	
	public class NumbersAreacodesGetReturn
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="id")]
		public long Id { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
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