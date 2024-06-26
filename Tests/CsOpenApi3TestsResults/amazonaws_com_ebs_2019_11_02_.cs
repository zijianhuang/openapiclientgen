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
	public class CompleteSnapshotResponse
	{
		
		[System.Runtime.Serialization.DataMember()]
		public Status Status { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum Status
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		completed = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		pending = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		error = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class AccessDeniedException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ValidationException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ResourceNotFoundException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class RequestThrottledException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ServiceQuotaExceededException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class InternalServerException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GetSnapshotBlockResponse
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string BlockData { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListChangedBlocksResponse
	{
		
		[System.Runtime.Serialization.DataMember()]
		public ChangedBlock[] ChangedBlocks { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.DateTimeOffset ExpiryTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> VolumeSize { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> BlockSize { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string NextToken { get; set; }
	}
	
	/// <summary>
	/// A block of data in an Amazon Elastic Block Store snapshot that is different from another snapshot of the same volume/snapshot lineage.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ChangedBlock
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> BlockIndex { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string FirstBlockToken { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string SecondBlockToken { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListSnapshotBlocksResponse
	{
		
		[System.Runtime.Serialization.DataMember()]
		public Block[] Blocks { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.DateTimeOffset ExpiryTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> VolumeSize { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> BlockSize { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string NextToken { get; set; }
	}
	
	/// <summary>
	/// A block of data in an Amazon Elastic Block Store snapshot.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Block
	{
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> BlockIndex { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string BlockToken { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class PutSnapshotBlockResponse
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class StartSnapshotResponse
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string SnapshotId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string OwnerId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Status Status { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.DateTimeOffset StartTime { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> VolumeSize { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> BlockSize { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Tag[] Tags { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string ParentSnapshotId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string KmsKeyArn { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public SSEType SseType { get; set; }
	}
	
	/// <summary>
	/// Describes a tag.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Tag
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Key { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Value { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum SSEType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="sse-ebs")]
		sseMinusebs = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="sse-kms")]
		sseMinuskms = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		none = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ConcurrentLimitExceededException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ConflictException
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum ChecksumAggregationMethod
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		LINEAR = 0,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum ChecksumAlgorithm
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SHA256 = 0,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class CompleteSnapshotRequest
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GetSnapshotBlockRequest
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListChangedBlocksRequest
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListSnapshotBlocksRequest
	{
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class PutSnapshotBlockRequest
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string BlockData { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class StartSnapshotRequest
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public int VolumeSize { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string ParentSnapshotId { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public Tag[] Tags { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string ClientToken { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> Encrypted { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string KmsKeyArn { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Int32> Timeout { get; set; }
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
		/// <p>Seals and completes the snapshot after all of the required blocks of data have been written to it. Completing the snapshot changes the status to <code>completed</code>. You cannot write new blocks to a snapshot after it has been completed.</p> <note> <p>You should always retry requests that receive server (<code>5xx</code>) error responses, and <code>ThrottlingException</code> and <code>RequestThrottledException</code> client error responses. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
		/// CompleteSnapshot snapshots/completion/{snapshotId}#x-amz-ChangedBlocksCount
		/// </summary>
		/// <param name="snapshotId">The ID of the snapshot.
		/// Min length: 1
		/// Max length: 64
		// </param>
		public async Task CompleteSnapshotAsync(string snapshotId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "snapshots/completion/"+ (snapshotId==null? "" : System.Uri.EscapeDataString(snapshotId))+"#x-amz-ChangedBlocksCount";
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
		/// <p>Returns the data in a block in an Amazon Elastic Block Store snapshot.</p> <note> <p>You should always retry requests that receive server (<code>5xx</code>) error responses, and <code>ThrottlingException</code> and <code>RequestThrottledException</code> client error responses. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
		/// GetSnapshotBlock snapshots/{snapshotId}/blocks/{blockIndex}#blockToken
		/// </summary>
		/// <param name="snapshotId"><p>The ID of the snapshot containing the block from which to get data.</p> <important> <p>If the specified snapshot is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>
		/// Min length: 1
		/// Max length: 64
		// </param>
		/// <param name="blockIndex">The block index of the block in which to read the data. A block index is a logical index in units of <code>512</code> KiB blocks. To identify the block index, divide the logical offset of the data in the logical volume by the block size (logical offset of data/<code>524288</code>). The logical offset of the data must be <code>512</code> KiB aligned.
		/// Minimum: 0
		// </param>
		/// <param name="blockToken">The block token of the block from which to get data. You can obtain the <code>BlockToken</code> by running the <code>ListChangedBlocks</code> or <code>ListSnapshotBlocks</code> operations.
		/// Max length: 256
		// </param>
		/// <returns>Success</returns>
		public async Task<GetSnapshotBlockResponse> GetSnapshotBlockAsync(string snapshotId, int blockIndex, string blockToken, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "snapshots/"+ (snapshotId==null? "" : System.Uri.EscapeDataString(snapshotId))+"/blocks/"+blockIndex+"#blockToken&blockToken=" + (blockToken==null? "" : System.Uri.EscapeDataString(blockToken));
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
				return JsonSerializer.Deserialize<GetSnapshotBlockResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// <p>Returns information about the blocks that are different between two Amazon Elastic Block Store snapshots of the same volume/snapshot lineage.</p> <note> <p>You should always retry requests that receive server (<code>5xx</code>) error responses, and <code>ThrottlingException</code> and <code>RequestThrottledException</code> client error responses. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
		/// ListChangedBlocks snapshots/{secondSnapshotId}/changedblocks
		/// </summary>
		/// <param name="firstSnapshotId"><p>The ID of the first snapshot to use for the comparison.</p> <important> <p>The <code>FirstSnapshotID</code> parameter must be specified with a <code>SecondSnapshotId</code> parameter; otherwise, an error occurs.</p> </important>
		/// Min length: 1
		/// Max length: 64
		// </param>
		/// <param name="secondSnapshotId"><p>The ID of the second snapshot to use for the comparison.</p> <important> <p>The <code>SecondSnapshotId</code> parameter must be specified with a <code>FirstSnapshotID</code> parameter; otherwise, an error occurs.</p> </important>
		/// Min length: 1
		/// Max length: 64
		// </param>
		/// <param name="pageToken"><p>The token to request the next page of results.</p> <p>If you specify <b>NextToken</b>, then <b>StartingBlockIndex</b> is ignored.</p>
		/// Max length: 256
		// </param>
		/// <param name="maxResults"><p>The maximum number of blocks to be returned by the request.</p> <p>Even if additional blocks can be retrieved from the snapshot, the request can return less blocks than <b>MaxResults</b> or an empty array of blocks.</p> <p>To retrieve the next set of blocks from the snapshot, make another request with the returned <b>NextToken</b> value. The value of <b>NextToken</b> is <code>null</code> when there are no more blocks to return.</p>
		/// Minimum: 100
		/// Maximum: 10000
		// </param>
		/// <param name="startingBlockIndex"><p>The block index from which the comparison should start.</p> <p>The list in the response will start from this block index or the next valid block index in the snapshots.</p> <p>If you specify <b>NextToken</b>, then <b>StartingBlockIndex</b> is ignored.</p>
		/// Minimum: 0
		// </param>
		/// <param name="MaxResults">Pagination limit</param>
		/// <param name="NextToken">Pagination token</param>
		/// <returns>Success</returns>
		public async Task<ListChangedBlocksResponse> ListChangedBlocksAsync(string firstSnapshotId, string secondSnapshotId, string pageToken, int maxResults, int startingBlockIndex, string MaxResults, string NextToken, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "snapshots/"+ (secondSnapshotId==null? "" : System.Uri.EscapeDataString(secondSnapshotId))+"/changedblocks?firstSnapshotId=" + (firstSnapshotId==null? "" : System.Uri.EscapeDataString(firstSnapshotId))+"&pageToken=" + (pageToken==null? "" : System.Uri.EscapeDataString(pageToken))+"&maxResults="+maxResults+"&startingBlockIndex="+startingBlockIndex+"&MaxResults=" + (MaxResults==null? "" : System.Uri.EscapeDataString(MaxResults))+"&NextToken=" + (NextToken==null? "" : System.Uri.EscapeDataString(NextToken));
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
				return JsonSerializer.Deserialize<ListChangedBlocksResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// <p>Returns information about the blocks in an Amazon Elastic Block Store snapshot.</p> <note> <p>You should always retry requests that receive server (<code>5xx</code>) error responses, and <code>ThrottlingException</code> and <code>RequestThrottledException</code> client error responses. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
		/// ListSnapshotBlocks snapshots/{snapshotId}/blocks
		/// </summary>
		/// <param name="snapshotId">The ID of the snapshot from which to get block indexes and block tokens.
		/// Min length: 1
		/// Max length: 64
		// </param>
		/// <param name="pageToken"><p>The token to request the next page of results.</p> <p>If you specify <b>NextToken</b>, then <b>StartingBlockIndex</b> is ignored.</p>
		/// Max length: 256
		// </param>
		/// <param name="maxResults"><p>The maximum number of blocks to be returned by the request.</p> <p>Even if additional blocks can be retrieved from the snapshot, the request can return less blocks than <b>MaxResults</b> or an empty array of blocks.</p> <p>To retrieve the next set of blocks from the snapshot, make another request with the returned <b>NextToken</b> value. The value of <b>NextToken</b> is <code>null</code> when there are no more blocks to return.</p>
		/// Minimum: 100
		/// Maximum: 10000
		// </param>
		/// <param name="startingBlockIndex"><p>The block index from which the list should start. The list in the response will start from this block index or the next valid block index in the snapshot.</p> <p>If you specify <b>NextToken</b>, then <b>StartingBlockIndex</b> is ignored.</p>
		/// Minimum: 0
		// </param>
		/// <param name="MaxResults">Pagination limit</param>
		/// <param name="NextToken">Pagination token</param>
		/// <returns>Success</returns>
		public async Task<ListSnapshotBlocksResponse> ListSnapshotBlocksAsync(string snapshotId, string pageToken, int maxResults, int startingBlockIndex, string MaxResults, string NextToken, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "snapshots/"+ (snapshotId==null? "" : System.Uri.EscapeDataString(snapshotId))+"/blocks&pageToken=" + (pageToken==null? "" : System.Uri.EscapeDataString(pageToken))+"&maxResults="+maxResults+"&startingBlockIndex="+startingBlockIndex+"&MaxResults=" + (MaxResults==null? "" : System.Uri.EscapeDataString(MaxResults))+"&NextToken=" + (NextToken==null? "" : System.Uri.EscapeDataString(NextToken));
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
				return JsonSerializer.Deserialize<ListSnapshotBlocksResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// <p>Writes a block of data to a snapshot. If the specified block contains data, the existing data is overwritten. The target snapshot must be in the <code>pending</code> state.</p> <p>Data written to a snapshot must be aligned with 512-KiB sectors.</p> <note> <p>You should always retry requests that receive server (<code>5xx</code>) error responses, and <code>ThrottlingException</code> and <code>RequestThrottledException</code> client error responses. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
		/// PutSnapshotBlock snapshots/{snapshotId}/blocks/{blockIndex}#x-amz-Data-Length&x-amz-Checksum&x-amz-Checksum-Algorithm
		/// </summary>
		/// <param name="snapshotId"><p>The ID of the snapshot.</p> <important> <p>If the specified snapshot is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>..</p> </important>
		/// Min length: 1
		/// Max length: 64
		// </param>
		/// <param name="blockIndex">The block index of the block in which to write the data. A block index is a logical index in units of <code>512</code> KiB blocks. To identify the block index, divide the logical offset of the data in the logical volume by the block size (logical offset of data/<code>524288</code>). The logical offset of the data must be <code>512</code> KiB aligned.
		/// Minimum: 0
		// </param>
		public async Task PutSnapshotBlockAsync(string snapshotId, int blockIndex, PutSnapshotBlockPutBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "snapshots/"+ (snapshotId==null? "" : System.Uri.EscapeDataString(snapshotId))+"/blocks/"+blockIndex+"#x-amz-Data-Length&x-amz-Checksum&x-amz-Checksum-Algorithm";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
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
		/// <p>Creates a new Amazon EBS snapshot. The new snapshot enters the <code>pending</code> state after the request completes. </p> <p>After creating the snapshot, use <a href="https://docs.aws.amazon.com/ebs/latest/APIReference/API_PutSnapshotBlock.html"> PutSnapshotBlock</a> to write blocks of data to the snapshot.</p> <note> <p>You should always retry requests that receive server (<code>5xx</code>) error responses, and <code>ThrottlingException</code> and <code>RequestThrottledException</code> client error responses. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
		/// StartSnapshot snapshots
		/// </summary>
		public async Task StartSnapshotAsync(StartSnapshotPostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "snapshots";
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
	}
	
	public class PutSnapshotBlockPutBody
	{
		
		/// <summary>
		/// <p>The data to write to the block.</p> <p>The block data is not signed as part of the Signature Version 4 signing process. As a result, you must generate and provide a Base64-encoded SHA256 checksum for the block data using the <b>x-amz-Checksum</b> header. Also, you must specify the checksum algorithm using the <b>x-amz-Checksum-Algorithm</b> header. The checksum that you provide is part of the Signature Version 4 signing process. It is validated against a checksum generated by Amazon EBS to ensure the validity and authenticity of the data. If the checksums do not correspond, the request fails. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-accessing-snapshot.html#ebsapis-using-checksums"> Using checksums with the EBS direct APIs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		public string BlockData { get; set; }
	}
	
	public class StartSnapshotPostBody
	{
		
		/// <summary>
		/// The size of the volume, in GiB. The maximum size is <code>65536</code> GiB (64 TiB).
		/// Required
		/// Minimum: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.Range(1, System.Int32.MaxValue)]
		public int VolumeSize { get; set; }
		
		/// <summary>
		/// <p>The ID of the parent snapshot. If there is no parent snapshot, or if you are creating the first snapshot for an on-premises volume, omit this parameter.</p> <p>You can't specify <b>ParentSnapshotId</b> and <b>Encrypted</b> in the same request. If you specify both parameters, the request fails with <code>ValidationException</code>.</p> <p>The encryption status of the snapshot depends on the values that you specify for <b>Encrypted</b>, <b>KmsKeyArn</b>, and <b>ParentSnapshotId</b>, and whether your Amazon Web Services account is enabled for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default"> encryption by default</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <important> <p>If you specify an encrypted parent snapshot, you must have permission to use the KMS key that was used to encrypt the parent snapshot. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions"> Permissions to use Key Management Service keys</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>
		/// Min length: 1
		/// Max length: 64
		/// Pattern: ^snap-[0-9a-f]+$
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.Length(1, 64)]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"^snap-[0-9a-f]+$")]
		public string ParentSnapshotId { get; set; }
		
		/// <summary>
		/// The tags to apply to the snapshot.
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public Tag[] Tags { get; set; }
		
		/// <summary>
		/// A description for the snapshot.
		/// Max length: 255
		/// Pattern: ^[\S\s]+$
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.MaxLength(255)]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"^[\S\s]+$")]
		public string Description { get; set; }
		
		/// <summary>
		/// <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully. The subsequent retries with the same client token return the result from the original successful request and they have no additional effect.</p> <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-direct-api-idempotency.html"> Idempotency for StartSnapshot API</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
		/// Max length: 255
		/// Pattern: ^[\S]+$
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.MaxLength(255)]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"^[\S]+$")]
		public string ClientToken { get; set; }
		
		/// <summary>
		/// <p>Indicates whether to encrypt the snapshot.</p> <p>You can't specify <b>Encrypted</b> and <b> ParentSnapshotId</b> in the same request. If you specify both parameters, the request fails with <code>ValidationException</code>.</p> <p>The encryption status of the snapshot depends on the values that you specify for <b>Encrypted</b>, <b>KmsKeyArn</b>, and <b>ParentSnapshotId</b>, and whether your Amazon Web Services account is enabled for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default"> encryption by default</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <important> <p>To create an encrypted snapshot, you must have permission to use the KMS key. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions"> Permissions to use Key Management Service keys</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		public System.Nullable<System.Boolean> Encrypted { get; set; }
		
		/// <summary>
		/// <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) key to be used to encrypt the snapshot.</p> <p>The encryption status of the snapshot depends on the values that you specify for <b>Encrypted</b>, <b>KmsKeyArn</b>, and <b>ParentSnapshotId</b>, and whether your Amazon Web Services account is enabled for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default"> encryption by default</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <important> <p>To create an encrypted snapshot, you must have permission to use the KMS key. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions"> Permissions to use Key Management Service keys</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>
		/// Min length: 1
		/// Max length: 2048
		/// Pattern: arn:aws[a-z\-]*:kms:.*:[0-9]{12}:key/.*
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.Length(1, 2048)]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"arn:aws[a-z\-]*:kms:.*:[0-9]{12}:key/.*")]
		public string KmsKeyArn { get; set; }
		
		/// <summary>
		/// <p>The amount of time (in minutes) after which the snapshot is automatically cancelled if:</p> <ul> <li> <p>No blocks are written to the snapshot.</p> </li> <li> <p>The snapshot is not completed after writing the last block of data.</p> </li> </ul> <p>If no value is specified, the timeout defaults to <code>60</code> minutes.</p>
		/// Minimum: 10
		/// Maximum: 4320
		/// </summary>
		[System.Runtime.Serialization.DataMember()]
		[System.ComponentModel.DataAnnotations.Range(10, 4320)]
		public System.Nullable<System.Int32> Timeout { get; set; }
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
