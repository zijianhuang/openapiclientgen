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
	public class DescribeDimensionKeysResponse
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.DateTimeOffset AlignedStartTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.DateTimeOffset AlignedEndTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public ResponsePartitionKey[] PartitionKeys { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public DimensionKeyDescription[] Keys { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string NextToken { get; set; }
	}
	
	/// <summary>
	/// If <code>PartitionBy</code> was specified in a <code>DescribeDimensionKeys</code> request, the dimensions are returned in an array. Each element in the array specifies one dimension. 
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ResponsePartitionKey
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public DimensionMap Dimensions { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DimensionMap
	{
	}
	
	/// <summary>
	/// An object that includes the requested dimension key values and aggregated metric values within a dimension group.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DimensionKeyDescription
	{
		
		[System.Runtime.Serialization.DataMember()]
		public DimensionMap Dimensions { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Total { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public AdditionalMetricsMap AdditionalMetrics { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Double> Partitions { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class AdditionalMetricsMap
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DescribeDimensionKeysRequest
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public ServiceType ServiceType { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Identifier { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public System.DateTimeOffset StartTime { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public System.DateTimeOffset EndTime { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Metric { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PeriodInSeconds { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public DimensionGroup GroupBy { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string[] AdditionalMetrics { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public DimensionGroup PartitionBy { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public MetricQueryFilterMap Filter { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> MaxResults { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string NextToken { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum ServiceType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RDS = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DOCDB = 1,
	}
	
	/// <summary>
	/// <p>A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions:</p> <ul> <li> <p> <code>db.sql.id</code> - The hash of a running SQL statement, generated by Performance Insights.</p> </li> <li> <p> <code>db.sql.db_id</code> - Either the SQL ID generated by the database engine, or a value generated by Performance Insights that begins with <code>pi-</code>.</p> </li> <li> <p> <code>db.sql.statement</code> - The full text of the SQL statement that is running, for example, <code>SELECT * FROM employees</code>.</p> </li> <li> <p> <code>db.sql_tokenized.id</code> - The hash of the SQL digest generated by Performance Insights.</p> </li> </ul> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DimensionGroup
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Group { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string[] Dimensions { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Limit { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class MetricQueryFilterMap
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class InvalidArgumentException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class InternalServiceError
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class NotAuthorizedException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GetDimensionKeyDetailsResponse
	{
		
		[System.Runtime.Serialization.DataMember()]
		public DimensionKeyDetail[] Dimensions { get; set; }
	}
	
	/// <summary>
	/// An object that describes the details for a specified dimension.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DimensionKeyDetail
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Value { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Dimension { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public DetailStatus Status { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum DetailStatus
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AVAILABLE = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PROCESSING = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		UNAVAILABLE = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GetDimensionKeyDetailsRequest
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public ServiceType ServiceType { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Identifier { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Group { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string GroupIdentifier { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string[] RequestedDimensions { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GetResourceMetadataResponse
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Identifier { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public FeatureMetadataMap Features { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class FeatureMetadataMap
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GetResourceMetadataRequest
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public ServiceType ServiceType { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Identifier { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GetResourceMetricsResponse
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.DateTimeOffset AlignedStartTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.DateTimeOffset AlignedEndTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Identifier { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public MetricKeyDataPoints[] MetricList { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string NextToken { get; set; }
	}
	
	/// <summary>
	/// A time-ordered series of data points, corresponding to a dimension of a Performance Insights metric.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class MetricKeyDataPoints
	{
		
		[System.Runtime.Serialization.DataMember()]
		public ResponseResourceMetricKey Key { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public DataPoint[] DataPoints { get; set; }
	}
	
	/// <summary>
	/// An object describing a Performance Insights metric and one or more dimensions for that metric.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ResponseResourceMetricKey
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Metric { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public DimensionMap Dimensions { get; set; }
	}
	
	/// <summary>
	/// A timestamp, and a single numerical value, which together represent a measurement at a particular point in time.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DataPoint
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public System.DateTimeOffset Timestamp { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public double Value { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GetResourceMetricsRequest
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public ServiceType ServiceType { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Identifier { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public MetricQuery[] MetricQueries { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public System.DateTimeOffset StartTime { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public System.DateTimeOffset EndTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> PeriodInSeconds { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> MaxResults { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string NextToken { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public PeriodAlignment PeriodAlignment { get; set; }
	}
	
	/// <summary>
	/// A single query to be processed. You must provide the metric to query. If no other parameters are specified, Performance Insights returns all data points for the specified metric. Optionally, you can request that the data points be aggregated by dimension group (<code>GroupBy</code>), and return only those data points that match your criteria (<code>Filter</code>).
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class MetricQuery
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Metric { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public DimensionGroup GroupBy { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public MetricQueryFilterMap Filter { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum PeriodAlignment
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		END_TIME = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		START_TIME = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListAvailableResourceDimensionsResponse
	{
		
		[System.Runtime.Serialization.DataMember()]
		public MetricDimensionGroups[] MetricDimensions { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string NextToken { get; set; }
	}
	
	/// <summary>
	/// The available dimension information for a metric type.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class MetricDimensionGroups
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Metric { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public DimensionGroupDetail[] Groups { get; set; }
	}
	
	/// <summary>
	/// Information about dimensions within a dimension group.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DimensionGroupDetail
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Group { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public DimensionDetail[] Dimensions { get; set; }
	}
	
	/// <summary>
	/// The information about a dimension.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DimensionDetail
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Identifier { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListAvailableResourceDimensionsRequest
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public ServiceType ServiceType { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Identifier { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string[] Metrics { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> MaxResults { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string NextToken { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListAvailableResourceMetricsResponse
	{
		
		[System.Runtime.Serialization.DataMember()]
		public ResponseResourceMetric[] Metrics { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string NextToken { get; set; }
	}
	
	/// <summary>
	/// An object that contains the full name, description, and unit of a metric. 
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ResponseResourceMetric
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Metric { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Unit { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListAvailableResourceMetricsRequest
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public ServiceType ServiceType { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string Identifier { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string[] MetricTypes { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string NextToken { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> MaxResults { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum FeatureStatus
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ENABLED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DISABLED = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		UNSUPPORTED = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ENABLED_PENDING_REBOOT = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DISABLED_PENDING_REBOOT = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		UNKNOWN = 5,
	}
	
	/// <summary>
	/// The metadata for a feature. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class FeatureMetadata
	{
		
		[System.Runtime.Serialization.DataMember()]
		public FeatureStatus Status { get; set; }
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
		/// <p>For a specific time period, retrieve the top <code>N</code> dimension keys for a metric. </p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
		/// DescribeDimensionKeys #X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys
		/// </summary>
		/// <param name="MaxResults">Pagination limit</param>
		/// <param name="NextToken">Pagination token</param>
		/// <returns>Success</returns>
		public async Task<DescribeDimensionKeysResponse> DescribeDimensionKeysAsync(string MaxResults, string NextToken, DescribeDimensionKeysRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys?MaxResults=" + (MaxResults==null? "" : System.Uri.EscapeDataString(MaxResults))+"&NextToken=" + (NextToken==null? "" : System.Uri.EscapeDataString(NextToken));
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
				return JsonSerializer.Deserialize<DescribeDimensionKeysResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID, <code>GetDimensionKeyDetails</code> retrieves the full text of the dimension <code>db.sql.statement</code> associated with this ID. This operation is useful because <code>GetResourceMetrics</code> and <code>DescribeDimensionKeys</code> don't support retrieval of large SQL statement text.
		/// GetDimensionKeyDetails #X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails
		/// </summary>
		/// <returns>Success</returns>
		public async Task<GetDimensionKeyDetailsResponse> GetDimensionKeyDetailsAsync(GetDimensionKeyDetailsRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "#X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails";
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
				return JsonSerializer.Deserialize<GetDimensionKeyDetailsResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieve the metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance.
		/// GetResourceMetadata #X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata
		/// </summary>
		/// <returns>Success</returns>
		public async Task<GetResourceMetadataResponse> GetResourceMetadataAsync(GetResourceMetadataRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata";
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
				return JsonSerializer.Deserialize<GetResourceMetadataResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// <p>Retrieve Performance Insights metrics for a set of data sources over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
		/// GetResourceMetrics #X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics
		/// </summary>
		/// <param name="MaxResults">Pagination limit</param>
		/// <param name="NextToken">Pagination token</param>
		/// <returns>Success</returns>
		public async Task<GetResourceMetricsResponse> GetResourceMetricsAsync(string MaxResults, string NextToken, GetResourceMetricsRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics?MaxResults=" + (MaxResults==null? "" : System.Uri.EscapeDataString(MaxResults))+"&NextToken=" + (NextToken==null? "" : System.Uri.EscapeDataString(NextToken));
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
				return JsonSerializer.Deserialize<GetResourceMetricsResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.
		/// ListAvailableResourceDimensions #X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions
		/// </summary>
		/// <param name="MaxResults">Pagination limit</param>
		/// <param name="NextToken">Pagination token</param>
		/// <returns>Success</returns>
		public async Task<ListAvailableResourceDimensionsResponse> ListAvailableResourceDimensionsAsync(string MaxResults, string NextToken, ListAvailableResourceDimensionsRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions?MaxResults=" + (MaxResults==null? "" : System.Uri.EscapeDataString(MaxResults))+"&NextToken=" + (NextToken==null? "" : System.Uri.EscapeDataString(NextToken));
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
				return JsonSerializer.Deserialize<ListAvailableResourceDimensionsResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieve metrics of the specified types that can be queried for a specified DB instance.
		/// ListAvailableResourceMetrics #X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics
		/// </summary>
		/// <param name="MaxResults">Pagination limit</param>
		/// <param name="NextToken">Pagination token</param>
		/// <returns>Success</returns>
		public async Task<ListAvailableResourceMetricsResponse> ListAvailableResourceMetricsAsync(string MaxResults, string NextToken, ListAvailableResourceMetricsRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics?MaxResults=" + (MaxResults==null? "" : System.Uri.EscapeDataString(MaxResults))+"&NextToken=" + (NextToken==null? "" : System.Uri.EscapeDataString(NextToken));
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
				return JsonSerializer.Deserialize<ListAvailableResourceMetricsResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum DescribeDimensionKeysX_Amz_Target
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="PerformanceInsightsv20180227.DescribeDimensionKeys")]
		PerformanceInsightsv20180227_DescribeDimensionKeys = 0,
	}
	
	public enum GetDimensionKeyDetailsX_Amz_Target
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="PerformanceInsightsv20180227.GetDimensionKeyDetails")]
		PerformanceInsightsv20180227_GetDimensionKeyDetails = 0,
	}
	
	public enum GetResourceMetadataX_Amz_Target
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="PerformanceInsightsv20180227.GetResourceMetadata")]
		PerformanceInsightsv20180227_GetResourceMetadata = 0,
	}
	
	public enum GetResourceMetricsX_Amz_Target
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="PerformanceInsightsv20180227.GetResourceMetrics")]
		PerformanceInsightsv20180227_GetResourceMetrics = 0,
	}
	
	public enum ListAvailableResourceDimensionsX_Amz_Target
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="PerformanceInsightsv20180227.ListAvailableResourceDimensions")]
		PerformanceInsightsv20180227_ListAvailableResourceDimensions = 0,
	}
	
	public enum ListAvailableResourceMetricsX_Amz_Target
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="PerformanceInsightsv20180227.ListAvailableResourceMetrics")]
		PerformanceInsightsv20180227_ListAvailableResourceMetrics = 0,
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