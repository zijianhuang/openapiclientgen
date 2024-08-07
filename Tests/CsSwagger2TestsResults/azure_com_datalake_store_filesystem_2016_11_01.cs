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
	/// Data Lake Store file or directory Access Control List information.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AclStatus
	{
		
		/// <summary>
		/// the list of ACLSpec entries on a file or directory.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="entries")]
		public string[] Entries { get; set; }
		
		/// <summary>
		/// the group owner, an AAD Object ID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="group")]
		public string Group { get; set; }
		
		/// <summary>
		/// the user owner, an AAD Object ID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="owner")]
		public string Owner { get; set; }
		
		/// <summary>
		/// The octal representation of the unnamed user, mask and other permissions.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="permission")]
		public string Permission { get; set; }
		
		/// <summary>
		/// the indicator of whether the sticky bit is on or off.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="stickyBit")]
		public System.Nullable<System.Boolean> StickyBit { get; set; }
	}
	
	/// <summary>
	/// Data Lake Store file or directory Access Control List information.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AclStatusResult
	{
		
		/// <summary>
		/// Data Lake Store file or directory Access Control List information.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="aclStatus")]
		public AclStatus AclStatus { get; set; }
	}
	
	/// <summary>
	/// A WebHDFS exception thrown indicating that access is denied due to insufficient permissions. Thrown when a 403 error response code is returned (forbidden).
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AdlsAccessControlException
	{
	}
	
	/// <summary>
	/// A WebHDFS exception thrown indicating the append or read is from a bad offset. Thrown when a 400 error response code is returned for append and open operations (Bad request).
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AdlsBadOffsetException
	{
	}
	
	/// <summary>
	/// Data Lake Store filesystem error containing a specific WebHDFS exception.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AdlsError
	{
		
		/// <summary>
		/// Data Lake Store filesystem exception based on the WebHDFS definition for RemoteExceptions. This is a WebHDFS 'catch all' exception
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="remoteException")]
		public AdlsRemoteException RemoteException { get; set; }
	}
	
	/// <summary>
	/// A WebHDFS exception thrown indicating the file or folder already exists. Thrown when a 403 error response code is returned (forbidden).
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AdlsFileAlreadyExistsException
	{
	}
	
	/// <summary>
	/// A WebHDFS exception thrown indicating the file or folder could not be found. Thrown when a 404 error response code is returned (not found).
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AdlsFileNotFoundException
	{
	}
	
	/// <summary>
	/// A WebHDFS exception thrown indicating there was an IO (read or write) error. Thrown when a 403 error response code is returned (forbidden).
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AdlsIOException
	{
	}
	
	/// <summary>
	/// A WebHDFS exception thrown indicating that one more arguments is incorrect. Thrown when a 400 error response code is returned (bad request).
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AdlsIllegalArgumentException
	{
	}
	
	/// <summary>
	/// Data Lake Store filesystem exception based on the WebHDFS definition for RemoteExceptions. This is a WebHDFS 'catch all' exception
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AdlsRemoteException
	{
		
		/// <summary>
		/// the class name of the exception thrown, such as 'IllegalArgumentException'.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="exception")]
		public string Exception { get; set; }
		
		/// <summary>
		/// the full class package name for the exception thrown, such as 'java.lang.IllegalArgumentException'.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="javaClassName")]
		public string JavaClassName { get; set; }
		
		/// <summary>
		/// the message associated with the exception that was thrown, such as 'Invalid value for webhdfs parameter "permission":...'.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// A WebHDFS exception thrown when an unexpected error occurs during an operation. Thrown when a 500 error response code is returned (Internal server error).
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AdlsRuntimeException
	{
	}
	
	/// <summary>
	/// A WebHDFS exception thrown indicating that access is denied. Thrown when a 401 error response code is returned (Unauthorized).
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AdlsSecurityException
	{
	}
	
	/// <summary>
	/// A WebHDFS exception thrown indicating that the request is being throttled. Reducing the number of requests or request size helps to mitigate this error.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AdlsThrottledException
	{
	}
	
	/// <summary>
	/// A WebHDFS exception thrown indicating that the requested operation is not supported. Thrown when a 400 error response code is returned (bad request).
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AdlsUnsupportedOperationException
	{
	}
	
	/// <summary>
	/// Data Lake Store content summary information
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ContentSummary
	{
		
		/// <summary>
		/// the number of directories.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="directoryCount")]
		public System.Nullable<System.Int64> DirectoryCount { get; set; }
		
		/// <summary>
		/// the number of files.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fileCount")]
		public System.Nullable<System.Int64> FileCount { get; set; }
		
		/// <summary>
		/// the number of bytes used by the content.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="length")]
		public System.Nullable<System.Int64> Length { get; set; }
		
		/// <summary>
		/// the disk space consumed by the content.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="spaceConsumed")]
		public System.Nullable<System.Int64> SpaceConsumed { get; set; }
	}
	
	/// <summary>
	/// Data Lake Store filesystem content summary information response.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ContentSummaryResult
	{
		
		/// <summary>
		/// Data Lake Store content summary information
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="contentSummary")]
		public ContentSummary ContentSummary { get; set; }
	}
	
	/// <summary>
	/// The result of the request or operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FileOperationResult
	{
		
		/// <summary>
		/// the result of the operation or request.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="boolean")]
		public System.Nullable<System.Boolean> Boolean { get; set; }
	}
	
	/// <summary>
	/// Data Lake Store file or directory information.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FileStatusProperties
	{
		
		/// <summary>
		/// the last access time as ticks since the epoch.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="accessTime")]
		public System.Nullable<System.Int64> AccessTime { get; set; }
		
		/// <summary>
		/// flag to indicate if extended acls are enabled 
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="aclBit")]
		public System.Nullable<System.Boolean> AclBit { get; set; }
		
		/// <summary>
		/// the block size for the file.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="blockSize")]
		public System.Nullable<System.Int64> BlockSize { get; set; }
		
		/// <summary>
		/// the group owner.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="group")]
		public string Group { get; set; }
		
		/// <summary>
		/// the number of bytes in a file.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="length")]
		public System.Nullable<System.Int64> Length { get; set; }
		
		/// <summary>
		/// the modification time as ticks since the epoch.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="modificationTime")]
		public System.Nullable<System.Int64> ModificationTime { get; set; }
		
		/// <summary>
		/// Gets the expiration time, if any, as ticks since the epoch. If the value is 0 or DateTime.MaxValue there is no expiration.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="msExpirationTime")]
		public System.Nullable<System.Int64> MsExpirationTime { get; set; }
		
		/// <summary>
		/// the user who is the owner.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="owner")]
		public string Owner { get; set; }
		
		/// <summary>
		/// the path suffix.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="pathSuffix")]
		public string PathSuffix { get; set; }
		
		/// <summary>
		/// the permission represented as an string.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="permission")]
		public string Permission { get; set; }
		
		/// <summary>
		/// the type of the path object.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public System.Nullable<FileStatusPropertiesType> Type { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum FileStatusPropertiesType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FILE = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DIRECTORY = 1,
	}
	
	/// <summary>
	/// Data Lake Store filesystem file status information response.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FileStatusResult
	{
		
		/// <summary>
		/// Data Lake Store file or directory information.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fileStatus")]
		public FileStatusProperties FileStatus { get; set; }
	}
	
	/// <summary>
	/// Data Lake Store file status list information.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FileStatuses
	{
		
		/// <summary>
		/// the object containing the list of properties of the files.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fileStatus")]
		public FileStatusProperties[] FileStatus { get; set; }
	}
	
	/// <summary>
	/// Data Lake Store filesystem file status list information response.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class FileStatusesResult
	{
		
		/// <summary>
		/// Data Lake Store file status list information.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fileStatuses")]
		public FileStatuses FileStatuses { get; set; }
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
		/// Sets or removes the expiration time on the specified file. This operation can only be executed against files. Folders are not supported.
		/// FileSystem_SetFileExpiry WebHdfsExt/{path}
		/// </summary>
		/// <param name="path">The Data Lake Store path (starting with '/') of the file on which to set or remove the expiration time.</param>
		/// <param name="expiryOption">Indicates the type of expiration to use for the file: 1. NeverExpire: ExpireTime is ignored. 2. RelativeToNow: ExpireTime is an integer in milliseconds representing the expiration date relative to when file expiration is updated. 3. RelativeToCreationDate: ExpireTime is an integer in milliseconds representing the expiration date relative to file creation. 4. Absolute: ExpireTime is an integer in milliseconds, as a Unix timestamp relative to 1/1/1970 00:00:00.</param>
		/// <param name="expireTime">The time that the file will expire, corresponding to the ExpiryOption that was set.</param>
		/// <param name="op">The constant value for the operation.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>Successfully set the expiration time on the specified file.</returns>
		public async Task FileSystem_SetFileExpiryAsync(string path, FileSystem_SetFileExpiryExpiryOption expiryOption, long expireTime, FileSystem_SetFileExpiryOp op, string api_version)
		{
			var requestUri = "WebHdfsExt/"+ (path==null? "" : System.Uri.EscapeDataString(path))+"&expiryOption=" + expiryOption+"&expireTime="+expireTime+"&op=" + op+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
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
		/// Checks if the specified access is available at the given path.
		/// FileSystem_CheckAccess webhdfs/v1/{path}
		/// </summary>
		/// <param name="path">The Data Lake Store path (starting with '/') of the file or directory for which to check access.</param>
		/// <param name="fsaction">File system operation read/write/execute in string form, matching regex pattern '[rwx-]{3}'</param>
		/// <param name="op">The constant value for the operation.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>OK</returns>
		public async Task FileSystem_CheckAccessAsync(string path, string fsaction, FileSystem_CheckAccessOp op, string api_version)
		{
			var requestUri = "webhdfs/v1/"+ (path==null? "" : System.Uri.EscapeDataString(path))+"&fsaction=" + (fsaction==null? "" : System.Uri.EscapeDataString(fsaction))+"&op=" + op+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
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
	
	public enum FileSystem_SetFileExpiryExpiryOption
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NeverExpire = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RelativeToNow = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RelativeToCreationDate = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Absolute = 3,
	}
	
	public enum FileSystem_SetFileExpiryOp
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SETEXPIRY = 0,
	}
	
	public enum FileSystem_ConcurrentAppendAppendMode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		autocreate = 0,
	}
	
	public enum FileSystem_ConcurrentAppendOp
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CONCURRENTAPPEND = 0,
	}
	
	public enum FileSystem_ConcurrentAppendTransfer_Encoding
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		chunked = 0,
	}
	
	public enum FileSystem_ConcurrentAppendSyncFlag
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DATA = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		METADATA = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CLOSE = 2,
	}
	
	public enum FileSystem_CheckAccessOp
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CHECKACCESS = 0,
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
