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
	/// Specify _Next link_ paginator on pages containing a link pointing to the next page. The next page link is extracted from a document by querying href attribute of a given element's CSS selector.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Paginator
	{
		
		[System.Runtime.Serialization.DataMember(Name="nextPageSelector")]
		public string NextPageSelector { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="pageNum")]
		public System.Nullable<System.Int32> PageNum { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Action
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Fetchrequest
	{
		
		/// <summary>
		/// Use actions to automate manual workflows while rendering web pages. They simulate real-world human interaction with pages. _(Chrome fetcher type only)_
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="actions")]
		public Action[] Actions { get; set; }
		
		/// <summary>
		/// The HTTP 200 OK success status response code indicates that the request has succeeded. Sometimes a server returns normal HTML content even with an erroneous Non-200 HTTP response status code. The IgnoreHTTPStatusCode option is useful when you need to force the return of HTML content. Defaults to "false."
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="ignoreHTTPStatusErrCodes")]
		public System.Nullable<System.Boolean> IgnoreHTTPStatusErrCodes { get; set; }
		
		/// <summary>
		/// The "Initial Cookies" option is useful for crawling websites that require a login. The simplest solution to get an array of cookies for specific websites is to use a web browser "EditThisCookie" extension. Copy a cookie array with "EditThisCookie" and paste it into the "Initial cookie" field.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="initialCookies")]
		public InitialCookie[] InitialCookies { get; set; }
		
		/// <summary>
		/// If set to _file_, the content of downloaded HTML is uploaded to Dataflow Kit Storage first. Then the link to this file is returned. Overwise, downloaded content is returned in the response body.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="output")]
		public System.Nullable<FetchrequestOutput> Output { get; set; }
		
		/// <summary>
		/// Specify proxy by adding [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="proxy")]
		public string Proxy { get; set; }
		
		/// <summary>
		/// If set to `base`, the Base fetcher is used for downloading web page content. Use `chrome` for fetching content with a Headless chrome browser. If omitted `base` fetcher is used by default.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="type")]
		public FetchrequestType Type { get; set; }
		
		/// <summary>
		/// Specify URL to download.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
		
		/// <summary>
		/// Specify a wait delay (in seconds). This may be useful if certain elements of the web site need to be rendered after the initial page load. _(Chrome fetcher type only)_
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="waitDelay")]
		public System.Nullable<System.Double> WaitDelay { get; set; }
	}
	
	/// <summary>
	/// InitialCookie structure keep cookies that optionally can be passed to the new fetcher crawl a website that requires a login. Generate Cookies array with EditThisCookie chrome extension.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class InitialCookie
	{
		
		[System.Runtime.Serialization.DataMember(Name="domain")]
		public string Domain { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="expirationDate")]
		public System.Nullable<System.Double> ExpirationDate { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="hostOnly")]
		public System.Nullable<System.Boolean> HostOnly { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="httpOnly")]
		public System.Nullable<System.Boolean> HttpOnly { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="id")]
		public System.Nullable<System.Double> Id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="path")]
		public string Path { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sameSite")]
		public System.Nullable<InitialCookieSameSite> SameSite { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="secure")]
		public System.Nullable<System.Boolean> Secure { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="session")]
		public System.Nullable<System.Boolean> Session { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="storeID")]
		public string StoreID { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="value")]
		public string Value { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum InitialCookieSameSite
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		unspecified = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		strict = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		lax = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		no_restriction = 3,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum FetchrequestOutput
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		buffer = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		file = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum FetchrequestType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="base")]
		_base = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		chrome = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Field
	{
		
		/// <summary>
		/// A set of attributes to extract from a Field. Find more information about attributes
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="attrs")]
		public string[] Attrs { get; set; }
		
		/// <summary>
		/// Details themself represent independent Parse request that extracts data from linked pages.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="details")]
		public Parserequest Details { get; set; }
		
		/// <summary>
		/// Filters are used to pre-processing of text data when extracting.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="filters")]
		public string[] Filters { get; set; }
		
		/// <summary>
		/// Field name is used to aggregate results.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Selector represents a CSS selector for data extraction within the given block.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="selector")]
		public string Selector { get; set; }
		
		/// <summary>
		/// Selector type. ( 0 - image, 1 - text, 2 - link)
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="type")]
		public FieldType Type { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Parserequest
	{
		
		/// <summary>
		/// Specifies common ancestor block for a set of fields used to extract data from a web page. _(CSS Selector)_
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="commonParent")]
		public string CommonParent { get; set; }
		
		/// <summary>
		/// Define a  set of fields used to extract data from a web page. A Field represents a given chunk of extracted data from every block on each page.
		///
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="fields")]
		public Field[] Fields { get; set; }
		
		/// <summary>
		/// Extracted data is returned either in CSV, MS Excel, JSON, JSON(Lines) or XML format.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="format")]
		public ParserequestFormat Format { get; set; }
		
		/// <summary>
		/// Collection name.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Specify _Next link_ paginator on pages containing a link pointing to the next page. The next page link is extracted from a document by querying href attribute of a given element's CSS selector.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="paginator")]
		public Paginator Paginator { get; set; }
		
		/// <summary>
		/// Path is a special parameter specifying navigation pages only. It collects information from detailed pages. No results from the current page return. Defaults to false.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="path")]
		public System.Nullable<System.Boolean> Path { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="request")]
		public Fetchrequest Request { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum ParserequestFormat
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		csv = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		json = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		jsonl = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		excel = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		xml = 4,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum FieldType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_0 = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_1 = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_2 = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Serprequest
	{
		
		/// <summary>
		/// Specify CSS selectors (patterns) used to gather data from Search Engine Result Pages.
		///
		///Ready-to-use payloads for collecting search results from the most popular Search Engines are available. These payloads are customizable, though.
		///
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fields")]
		public Field[] Fields { get; set; }
		
		/// <summary>
		/// Extracted data is returned either in CSV, MS Excel, JSON, JSON(Lines) or XML format.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="format")]
		public ParserequestFormat Format { get; set; }
		
		/// <summary>
		/// Collection name.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Specify number of pages to crawl.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="pageNum")]
		public System.Nullable<System.Int32> PageNum { get; set; }
		
		/// <summary>
		/// Always specify proxy for sending SERP requests. Add choosen [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="proxy")]
		public string Proxy { get; set; }
		
		/// <summary>
		/// For SERP requests you should _always_ use `chrome` type to fetch content with a Headless chrome browser
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
		
		/// <summary>
		/// url holds the link to a Search Engine to use, and other optional parameters like languages or country.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Url2pdfrequest
	{
		
		/// <summary>
		/// Use actions to automate manual workflows while rendering web pages. They simulate real-world human interaction with pages.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="actions")]
		public Action[] Actions { get; set; }
		
		/// <summary>
		/// The HTTP 200 OK success status response code indicates that the request has succeeded. Sometimes a server returns normal HTML content even with an erroneous Non-200 HTTP response status code. The IgnoreHTTPStatusCode option is useful when you need to force the return of HTML content. Defaults to "false."
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="ignoreHTTPStatusErrCodes")]
		public System.Nullable<System.Boolean> IgnoreHTTPStatusErrCodes { get; set; }
		
		/// <summary>
		/// The "Initial Cookies" option is useful for crawling websites that require a login. The simplest solution to get an array of cookies for specific websites is to use a web browser "EditThisCookie" extension. Copy a cookie array with "EditThisCookie" and paste it into the "Initial cookie" field.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="initialCookies")]
		public InitialCookie[] InitialCookies { get; set; }
		
		/// <summary>
		/// Paper orientation. Parameter landscape = false means portrait orientation. Set landscape to true for landscape page oriantation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="landscape")]
		public System.Nullable<System.Boolean> Landscape { get; set; }
		
		/// <summary>
		/// Bottom Margin of the PDF (in inches)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="marginBottom")]
		public System.Nullable<System.Double> MarginBottom { get; set; }
		
		/// <summary>
		/// Left Margin of the PDF (in inches)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="marginLeft")]
		public System.Nullable<System.Double> MarginLeft { get; set; }
		
		/// <summary>
		/// Right Margin of the PDF (in inches)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="marginRight")]
		public System.Nullable<System.Double> MarginRight { get; set; }
		
		/// <summary>
		/// Top Margin of the PDF (in inches)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="marginTop")]
		public System.Nullable<System.Double> MarginTop { get; set; }
		
		/// <summary>
		/// If set to _file_, the resulted PDF is uploaded to Dataflow Kit Storage first. Then the link to this file is returned. Overwise, PDF content is returned in the response body.
		/// </summary>
		[System.ComponentModel.DefaultValue(FetchrequestOutput.buffer)]
		[System.Runtime.Serialization.DataMember(Name="output")]
		public FetchrequestOutput Output { get; set; } = FetchrequestOutput.buffer;
		
		/// <summary>
		/// Specify page ranges to convert. Defaults to the empty value, which means convert all pages.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="pageRanges")]
		public string PageRanges { get; set; }
		
		/// <summary>
		/// Page size parameter consists of the most popular page formats.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="paperSize")]
		public System.Nullable<Url2pdfrequestPaperSize> PaperSize { get; set; }
		
		/// <summary>
		/// Print background graphics in the PDF.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="printBackground")]
		public System.Nullable<System.Boolean> PrintBackground { get; set; }
		
		/// <summary>
		/// printHeaderFooter  parameter consists of the date, name of the web page, the page URL, and how many pages the document you are printing.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="printHeaderFooter")]
		public System.Nullable<System.Boolean> PrintHeaderFooter { get; set; }
		
		/// <summary>
		/// Specify proxy by adding [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="proxy")]
		public string Proxy { get; set; }
		
		/// <summary>
		/// By default, PDF document content is generated according to dimensions of the original web page content. Using the `scale` parameter, you can specify a custom zoom factor from 0.1 to 5.0 of the webpage rendering.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="scale")]
		public System.Nullable<System.Double> Scale { get; set; }
		
		/// <summary>
		/// The full URL address (including HTTP/HTTPS) of a web page that you want to save as PDF
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
		
		/// <summary>
		/// Specify a wait delay (in seconds). This may be useful if certain elements of the web site need to be rendered after the initial page load.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="waitDelay")]
		public System.Nullable<System.Double> WaitDelay { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum Url2pdfrequestPaperSize
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		A3 = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		A4 = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		A5 = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		A6 = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Letter = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Legal = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Tabloid = 6,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Url2screenshotrequest
	{
		
		/// <summary>
		/// Use actions to automate manual workflows while rendering web pages. They simulate real-world human interaction with pages.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="actions")]
		public Action[] Actions { get; set; }
		
		/// <summary>
		/// Captures a screenshot of specified CSS element on a web page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="clipSelector")]
		public string ClipSelector { get; set; }
		
		/// <summary>
		/// Sets the Format of output image
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="format")]
		public System.Nullable<Url2screenshotrequestFormat> Format { get; set; }
		
		/// <summary>
		/// takes a screenshot of a full web page. It ignores offsetX, offsety, width and height argument values.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fullPage")]
		public System.Nullable<System.Boolean> FullPage { get; set; }
		
		/// <summary>
		/// Rectangle height in device independent pixels (dip).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="height")]
		public System.Nullable<System.Int32> Height { get; set; }
		
		/// <summary>
		/// The HTTP 200 OK success status response code indicates that the request has succeeded. Sometimes a server returns normal HTML content even with an erroneous Non-200 HTTP response status code. The IgnoreHTTPStatusCode option is useful when you need to force the return of HTML content. Defaults to "false."
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="ignoreHTTPStatusErrCodes")]
		public System.Nullable<System.Boolean> IgnoreHTTPStatusErrCodes { get; set; }
		
		/// <summary>
		/// The "Initial Cookies" option is useful for crawling websites that require a login. The simplest solution to get an array of cookies for specific websites is to use a web browser "EditThisCookie" extension. Copy a cookie array with "EditThisCookie" and paste it into the "Initial cookie" field.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="initialCookies")]
		public InitialCookie[] InitialCookies { get; set; }
		
		/// <summary>
		/// X offset in device independent pixels (dip).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="offsetx")]
		public System.Nullable<System.Int32> Offsetx { get; set; }
		
		/// <summary>
		/// Y offset in device independent pixels (dip).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="offsety")]
		public System.Nullable<System.Int32> Offsety { get; set; }
		
		/// <summary>
		/// If set to _file_, the resulted screenshot is uploaded to Dataflow Kit Storage first. Then the link to this file is returned. Overwise, web site screenshot is returned in the response body.
		/// </summary>
		[System.ComponentModel.DefaultValue(FetchrequestOutput.buffer)]
		[System.Runtime.Serialization.DataMember(Name="output")]
		public FetchrequestOutput Output { get; set; } = FetchrequestOutput.buffer;
		
		/// <summary>
		/// Print background graphics in the PDF.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="printBackground")]
		public System.Nullable<System.Boolean> PrintBackground { get; set; }
		
		/// <summary>
		/// Specify proxy by adding [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="proxy")]
		public string Proxy { get; set; }
		
		/// <summary>
		/// Sets the Quality of output image. Compression quality from range [0..100] (jpeg only).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="quality")]
		public System.Nullable<System.Int32> Quality { get; set; }
		
		/// <summary>
		/// Image scale factor. range [0.1 .. 3]
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="scale")]
		public System.Nullable<System.Double> Scale { get; set; }
		
		/// <summary>
		/// The full URL address (including HTTP/HTTPS) of a web page that you want to capture
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
		
		/// <summary>
		/// Specify a wait delay (in seconds). This may be useful if certain elements of the web site need to be rendered after the initial page load.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="waitDelay")]
		public System.Nullable<System.Double> WaitDelay { get; set; }
		
		/// <summary>
		/// Rectangle width in device independent pixels (dip).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="width")]
		public System.Nullable<System.Int32> Width { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum Url2screenshotrequestFormat
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		png = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		jpeg = 1,
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
		/// Save web page as PDF
		/// Automate URL to PDF Conversion right in your application.
		/// 
		/// Specify request parameters like URL, Proxy, and actions to render web pages to PDF using Headless Chrome.
		/// 
		/// Get resulted PDF even from websites blocked in your area for some reason utilizing our worldwide pool of proxies.
		/// 
		/// Simulate real-world human interaction with the page. For example, before saving a web page to PDF, you may need to scroll it.
		/// 
		/// Generate ready-to-run code for your favorite language at [https://dataflowkit.com/url-to-pdf](https://dataflowkit.com/url-to-pdf)
		/// Url_to_pdf convert/url/pdf
		/// </summary>
		/// <returns>A PDF file.</returns>
		public async Task Url_to_pdfAsync(Url2pdfrequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "convert/url/pdf";
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
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Capture web page Screenshots.
		/// Automate URL to Screenshot Conversion right in your application.
		/// 
		/// Specify request parameters like URL, Proxy, and actions to convert web pages to screenshots using Headless Chrome.
		/// 
		/// Get resulted pictures in JPG or PNG formats even from websites blocked in your area for some reason utilizing our worldwide pool of proxies.
		/// 
		/// Simulate real-world human interaction with the page. For example, before capturing a web page, you may need to scroll it.
		/// 
		/// Generate ready-to-run code for your favorite language at [https://dataflowkit.com/url-to-screenshot](https://dataflowkit.com/url-to-screenshot)
		/// Url_to_screenshot convert/url/screenshot
		/// </summary>
		/// <returns>Returns jpg or png file.</returns>
		public async Task Url_to_screenshotAsync(Url2screenshotrequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "convert/url/screenshot";
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
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Download web page content
		/// Use fetch endpoint to download web pages.
		/// Fetch fetch
		/// </summary>
		/// <param name="requestBody">- _Base fetcher type_ is the right choice for fetching server-side rendered pages. It takes fewer resources and works faster than rendering HTML with _Chrome fetcher_
		///- But for rendering Angular, React, and Vue.js web sites, you should always specify _Chrome fetcher type_. In this case, headless chrome fetcher renders dynamic Javascript content in the same way as real web browsers would do it.
		///
		///Generate ready-to-run code for your favorite language at [https://dataflowkit.com/render-web](https://dataflowkit.com/render-web)
		///</param>
		/// <returns>Returns utf8 encoded web page content.</returns>
		public async Task FetchAsync(Fetchrequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "fetch";
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
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Extract structured data from web pages
		/// Dataflow kit uses CSS selectors to find HTML elements in web pages for later data extraction.
		/// 
		/// Open [visual point-and-click toolkit](https://dataflowkit.com/dfk) and click desired elements on a page to specify extracting data.
		/// 
		/// 
		/// Then you can send generated payload to `/parse` endpoint. We crawl web pages and extract data like text, links, or images for you following the specified rules.
		/// 
		/// 
		/// Extracted data is returned in CSV, MS Excel, JSON, JSON(Lines) or XML format.
		/// 
		/// Parse parse
		/// </summary>
		/// <param name="requestBody">### Field types and attributes
		///  
		///- **Text**. Extract human-readable text from the selected element and all its child elements. HTML tags are stripped, and only text returned.
		///    
		///- **Link**. Capture link `href` attribute and link text. Or specify a special _Path_ option for website navigation. When Path option is true, all other selectors ignored, and no results from the current page returned.
		///    
		///- **Image**. Image type extracts `src` (URL) and `alt` attributes of an image
		///
		///
		///***
		///### Filters
		///Filters are used to manipulate text data when extracting.
		///
		///Here is the list of available filters
		///
		///
		///- **Trim** removes leading and trailing white spaces from the _field text or attribute_
		///
		///- **Normal** leaves the case and capitalization of text/ attribute exactly as is.
		///
		///- **UPPERCASE** makes all of the letters in the Field's text/ attribute uppercase.
		///
		///- **lowercase** makes all of the letters in the Field's text/ attribute lowercase.
		///
		///- **Capitalize** capitalizes the first letter of each word in the Field's text/ attribute
		///
		///- **Concatinate** joins text array element into a single string
		///
		///***
		///### Regular Expressions
		///
		///For more advanced text formatting regular expression can be used. Some useful examples are listed below
		///
		///
		///| Input text | Regex | Result |
		///| ---------- | ----- | ------ |
		///| price- 10.99€ | <code>[0-9]+\.[0-9]+</code> | 10.99 |
		///| phone- 0 (944) 244-18-22 | <code>\w+</code> | 09442441822 |
		///
		///
		///***
		///### Details. Chaining.
		///The Link field type serves as a navigation link to a details page containing more data.
		///A special _Path_ option is used for navigation only. When the Path option specified, no results from the current page returned. But grouped results from details pages will be pulled instead. You can use chaining functionality of Dataflow Kit scraper to retrieve all the detail page data at the same time.
		///</param>
		/// <returns>Returns data in the one of the follwing formats - JSON, JSON Lines, CSV, MS Excel, XML</returns>
		public async Task<string> ParseAsync(Parserequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "parse";
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
				return JsonSerializer.Deserialize<string>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Collect search results from search engines
		/// To crawl search engine result pages, you can use `/serp` endpoint. SERP collection service extracts a list of organic results, news, images, and more.  Specify configuration parameters, such as country or languages, to customize output SERP data.
		/// The following search engines are supported
		/// 
		/// - google
		/// - google-image
		/// - google-news
		/// - google-shopping
		/// - bing
		/// - duckduckgo
		/// - baidu
		/// - yandex
		/// 
		/// 
		/// Generate ready-to-run code for your favorite language at [https://dataflowkit.com/serp](https://dataflowkit.com/serp)
		/// Serp serp
		/// </summary>
		/// <param name="requestBody"><h2>Search parameters</h2>
		///
		///> In most cases, you don't need to customize parameters by hand. Use <a href="https://dataflowkit.com/serp" target="_blank">SERP extraction Code generator</a>. It is the easiest way to generate a payload for launching in the Dataflow kit cloud.
		///
		///<h3>URL GET parameters</h3>
		///
		///||||
		///|-|-|-|
		///|q| Parameter defines encoded search term. You can use anything that you would use in a regular Search engines search. (e.g. for Google, <ul> <li><code>link:dataflowkit.com</code>,</li> <li><code>site:twitter.com Bratislava</code>,</li><li><code>inurl:view/view.shtml</code>, etc.)</li></ul> See The Complete List of 42 Advanced <a href="https://ahrefs.com/blog/google-advanced-search-operators/" target="_blank">Google Search Operators</a>|<ul> <li><code>q</code> parameter is used by google, Bing, DuckDuckGo.</li><li> <code>text</code> is used as query holder by Yandex SE.</li><li> Chineese Baidu uses <code>wd</code> for this purpose.</li></ul>|
		///|tbm| <code>tbm</code> is a special Google parameter used to differentiate between search types|  <ul> <li><code>tbm=isch</code> - Google Images,</li> <li> <code>tbm=nws</code> - Google News</li> <li><code>tbm=shop</code> - Google Shopping</li> </ul>|
		///|lr|Restricts the search to documents written in a particular languages.|<ul><li>Google uses <code>lang_{two-letter lang code}</code> to specify languages and <code>&#124;</code> as a delimiter. (e.g., <code>lang_sk&#124;lang_de</code> will only search Slovak and German pages). See the <a href="https://developers.google.com/custom-search/v1/cse/list">full list</a> of possible values for Google. </li><li>For Bing specify <code>setLang=en</code> parameter.</li><li> In Yandex use <code>lang=ca</code> parameter</li></ul>|
		///|gl|Specify the country to search from. It's a two-letter country code. (e.g., <code>sk</code> for Slovakia, or <code>us</code> for the United States).| For Google see the <a href="https://developers.google.com/custom-search/docs/xml_results_appendices#countryCodes">Country Codes</a> page for a list of valid values. For Bing <code>cc=at</code> parameter is used.|
		///</param>
		/// <returns>Returns data in the one of the follwing formats - JSON, JSON Lines, CSV, MS Excel, XML</returns>
		public async Task<string> SerpAsync(Serprequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "serp";
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
				return JsonSerializer.Deserialize<string>(streamContent, jsonSerializerSettings);
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