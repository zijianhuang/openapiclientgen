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
	/// Request message for TablesService.BatchCreateRows.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BatchCreateRowsRequest
	{
		
		/// <summary>
		/// Required. The request message specifying the rows to create. A maximum of 500 rows can be created in a single batch.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="requests")]
		public CreateRowRequest[] Requests { get; set; }
	}
	
	/// <summary>
	/// Request message for TablesService.CreateRow.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class CreateRowRequest
	{
		
		/// <summary>
		/// Required. The parent table where this row will be created. Format: tables/{table}
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="parent")]
		public string Parent { get; set; }
		
		/// <summary>
		/// A single row in a table.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="row")]
		public Row Row { get; set; }
		
		/// <summary>
		/// Optional. Column key to use for values in the row. Defaults to user entered name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="view")]
		public System.Nullable<CreateRowRequestView> View { get; set; }
	}
	
	/// <summary>
	/// A single row in a table.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Row
	{
		
		/// <summary>
		/// Time when the row was created.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="createTime")]
		public string CreateTime { get; set; }
		
		/// <summary>
		/// The resource name of the row. Row names have the form `tables/{table}/rows/{row}`. The name is ignored when creating a row.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Time when the row was last updated.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="updateTime")]
		public string UpdateTime { get; set; }
		
		/// <summary>
		/// The values of the row. This is a map of column key to value. Key is user entered name(default) or the internal column id based on the view in the request.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="values")]
		public System.Collections.Generic.Dictionary<string, object> Values { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum CreateRowRequestView
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		VIEW_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		COLUMN_ID_VIEW = 1,
	}
	
	/// <summary>
	/// Response message for TablesService.BatchCreateRows.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BatchCreateRowsResponse
	{
		
		/// <summary>
		/// The created rows.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="rows")]
		public Row[] Rows { get; set; }
	}
	
	/// <summary>
	/// Request message for TablesService.BatchDeleteRows
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BatchDeleteRowsRequest
	{
		
		/// <summary>
		/// Required. The names of the rows to delete. All rows must belong to the parent table or else the entire batch will fail. A maximum of 500 rows can be deleted in a batch. Format: tables/{table}/rows/{row}
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="names")]
		public string[] Names { get; set; }
	}
	
	/// <summary>
	/// Request message for TablesService.BatchUpdateRows.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BatchUpdateRowsRequest
	{
		
		/// <summary>
		/// Required. The request messages specifying the rows to update. A maximum of 500 rows can be modified in a single batch.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="requests")]
		public UpdateRowRequest[] Requests { get; set; }
	}
	
	/// <summary>
	/// Request message for TablesService.UpdateRow.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class UpdateRowRequest
	{
		
		/// <summary>
		/// A single row in a table.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="row")]
		public Row Row { get; set; }
		
		/// <summary>
		/// The list of fields to update.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="updateMask")]
		public string UpdateMask { get; set; }
		
		/// <summary>
		/// Optional. Column key to use for values in the row. Defaults to user entered name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="view")]
		public CreateRowRequestView View { get; set; }
	}
	
	/// <summary>
	/// Response message for TablesService.BatchUpdateRows.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BatchUpdateRowsResponse
	{
		
		/// <summary>
		/// The updated rows.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="rows")]
		public Row[] Rows { get; set; }
	}
	
	/// <summary>
	/// Details on a column in the table.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ColumnDescription
	{
		
		/// <summary>
		/// Data type of the column Supported types are auto_id, boolean, boolean_list, creator, create_timestamp, date, dropdown, location, integer, integer_list, number, number_list, person, person_list, tags, check_list, text, text_list, update_timestamp, updater, relationship, file_attachment_list. These types directly map to the column types supported on Tables website.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="dataType")]
		public string DataType { get; set; }
		
		/// <summary>
		/// Details about a date column.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="dateDetails")]
		public DateDetails DateDetails { get; set; }
		
		/// <summary>
		/// Internal id for a column.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Optional. Range of labeled values for the column. Some columns like tags and drop-downs limit the values to a set of possible values. We return the range of values in such cases to help clients implement better user data validation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="labels")]
		public LabeledItem[] Labels { get; set; }
		
		/// <summary>
		/// Details about a lookup column whose value comes from the associated relationship.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="lookupDetails")]
		public LookupDetails LookupDetails { get; set; }
		
		/// <summary>
		/// Optional. Indicates whether or not multiple values are allowed for array types where such a restriction is possible.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="multipleValuesDisallowed")]
		public System.Nullable<System.Boolean> MultipleValuesDisallowed { get; set; }
		
		/// <summary>
		/// column name
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Optional. Indicates that values for the column cannot be set by the user.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="readonly")]
		public System.Nullable<System.Boolean> Readonly { get; set; }
		
		/// <summary>
		/// Details about a relationship column.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="relationshipDetails")]
		public RelationshipDetails RelationshipDetails { get; set; }
	}
	
	/// <summary>
	/// Details about a date column.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DateDetails
	{
		
		/// <summary>
		/// Whether the date column includes time.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="hasTime")]
		public System.Nullable<System.Boolean> HasTime { get; set; }
	}
	
	/// <summary>
	/// A single item in a labeled column.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class LabeledItem
	{
		
		/// <summary>
		/// Internal id associated with the item.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Display string as entered by user.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	/// <summary>
	/// Details about a lookup column whose value comes from the associated relationship.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class LookupDetails
	{
		
		/// <summary>
		/// The name of the relationship column associated with the lookup.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="relationshipColumn")]
		public string RelationshipColumn { get; set; }
		
		/// <summary>
		/// The id of the relationship column.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="relationshipColumnId")]
		public string RelationshipColumnId { get; set; }
	}
	
	/// <summary>
	/// Details about a relationship column.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class RelationshipDetails
	{
		
		/// <summary>
		/// The name of the table this relationship is linked to.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="linkedTable")]
		public string LinkedTable { get; set; }
	}
	
	/// <summary>
	/// A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Empty
	{
	}
	
	/// <summary>
	/// Response message for TablesService.ListRows.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListRowsResponse
	{
		
		/// <summary>
		/// A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextPageToken")]
		public string NextPageToken { get; set; }
		
		/// <summary>
		/// The rows from the specified table.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="rows")]
		public Row[] Rows { get; set; }
	}
	
	/// <summary>
	/// Response message for TablesService.ListTables.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListTablesResponse
	{
		
		/// <summary>
		/// A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextPageToken")]
		public string NextPageToken { get; set; }
		
		/// <summary>
		/// The list of tables.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tables")]
		public Table[] Tables { get; set; }
	}
	
	/// <summary>
	/// A single table. NextId: 8
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Table
	{
		
		/// <summary>
		/// List of columns in this table. Order of columns matches the display order.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="columns")]
		public ColumnDescription[] Columns { get; set; }
		
		/// <summary>
		/// Time when the table was created.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="createTime")]
		public string CreateTime { get; set; }
		
		/// <summary>
		/// The human readable title of the table.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="displayName")]
		public string DisplayName { get; set; }
		
		/// <summary>
		/// The resource name of the table. Table names have the form `tables/{table}`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Saved views for this table.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="savedViews")]
		public SavedView[] SavedViews { get; set; }
		
		/// <summary>
		/// The time zone of the table. IANA Time Zone Database time zone, e.g. "America/New_York".
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="timeZone")]
		public string TimeZone { get; set; }
		
		/// <summary>
		/// Time when the table was last updated excluding updates to individual rows
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="updateTime")]
		public string UpdateTime { get; set; }
	}
	
	/// <summary>
	/// A saved view of a table. NextId: 3
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SavedView
	{
		
		/// <summary>
		/// Internal id associated with the saved view.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Display name of the saved view.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	/// <summary>
	/// Response message for TablesService.ListWorkspaces.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListWorkspacesResponse
	{
		
		/// <summary>
		/// A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextPageToken")]
		public string NextPageToken { get; set; }
		
		/// <summary>
		/// The list of workspaces.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="workspaces")]
		public Workspace[] Workspaces { get; set; }
	}
	
	/// <summary>
	/// A single workspace.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Workspace
	{
		
		/// <summary>
		/// Time when the workspace was created.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="createTime")]
		public string CreateTime { get; set; }
		
		/// <summary>
		/// The human readable title of the workspace.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="displayName")]
		public string DisplayName { get; set; }
		
		/// <summary>
		/// The resource name of the workspace. Workspace names have the form `workspaces/{workspace}`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The list of tables in the workspace.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tables")]
		public Table[] Tables { get; set; }
		
		/// <summary>
		/// Time when the workspace was last updated.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="updateTime")]
		public string UpdateTime { get; set; }
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
		/// Lists tables for the user.
		/// Area120tables_tables_list v1alpha1/tables
		/// </summary>
		/// <param name="orderBy">Optional. Sorting order for the list of tables on createTime/updateTime.</param>
		/// <param name="pageSize">The maximum number of tables to return. The service may return fewer than this value. If unspecified, at most 20 tables are returned. The maximum value is 100; values above 100 are coerced to 100.</param>
		/// <param name="pageToken">A page token, received from a previous `ListTables` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTables` must match the call that provided the page token.</param>
		/// <returns>Successful response</returns>
		public async Task<ListTablesResponse> Area120tables_tables_listAsync(string orderBy, int pageSize, string pageToken, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1alpha1/tables?orderBy=" + (orderBy==null? "" : System.Uri.EscapeDataString(orderBy))+"&pageSize="+pageSize+"&pageToken=" + (pageToken==null? "" : System.Uri.EscapeDataString(pageToken));
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
				return JsonSerializer.Deserialize<ListTablesResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Lists workspaces for the user.
		/// Area120tables_workspaces_list v1alpha1/workspaces
		/// </summary>
		/// <param name="pageSize">The maximum number of workspaces to return. The service may return fewer than this value. If unspecified, at most 10 workspaces are returned. The maximum value is 25; values above 25 are coerced to 25.</param>
		/// <param name="pageToken">A page token, received from a previous `ListWorkspaces` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkspaces` must match the call that provided the page token.</param>
		/// <returns>Successful response</returns>
		public async Task<ListWorkspacesResponse> Area120tables_workspaces_listAsync(int pageSize, string pageToken, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1alpha1/workspaces?pageSize="+pageSize+"&pageToken=" + (pageToken==null? "" : System.Uri.EscapeDataString(pageToken));
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
				return JsonSerializer.Deserialize<ListWorkspacesResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes a row.
		/// Area120tables_tables_rows_delete v1alpha1/{name}
		/// </summary>
		/// <param name="name">Required. The name of the row to delete. Format: tables/{table}/rows/{row}</param>
		/// <returns>Successful response</returns>
		public async Task<Empty> Area120tables_tables_rows_deleteAsync(string name, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1alpha1/"+ (name==null? "" : System.Uri.EscapeDataString(name));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Empty>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets a workspace. Returns NOT_FOUND if the workspace does not exist.
		/// Area120tables_workspaces_get v1alpha1/{name}
		/// </summary>
		/// <param name="name">Required. The name of the workspace to retrieve. Format: workspaces/{workspace}</param>
		/// <param name="view">Optional. Column key to use for values in the row. Defaults to user entered name.</param>
		/// <returns>Successful response</returns>
		public async Task<Workspace> Area120tables_workspaces_getAsync(string name, CreateRowRequestView view, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1alpha1/"+ (name==null? "" : System.Uri.EscapeDataString(name))+"&view=" + view;
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
				return JsonSerializer.Deserialize<Workspace>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Updates a row.
		/// Area120tables_tables_rows_patch v1alpha1/{name}
		/// </summary>
		/// <param name="name">The resource name of the row. Row names have the form `tables/{table}/rows/{row}`. The name is ignored when creating a row.</param>
		/// <param name="updateMask">The list of fields to update.</param>
		/// <param name="view">Optional. Column key to use for values in the row. Defaults to user entered name.</param>
		/// <returns>Successful response</returns>
		public async Task<Row> Area120tables_tables_rows_patchAsync(string name, string updateMask, CreateRowRequestView view, Row requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1alpha1/"+ (name==null? "" : System.Uri.EscapeDataString(name))+"&updateMask=" + (updateMask==null? "" : System.Uri.EscapeDataString(updateMask))+"&view=" + view;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
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
				return JsonSerializer.Deserialize<Row>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Lists rows in a table. Returns NOT_FOUND if the table does not exist.
		/// Area120tables_tables_rows_list v1alpha1/{parent}/rows
		/// </summary>
		/// <param name="parent">Required. The parent table. Format: tables/{table}</param>
		/// <param name="filter">Optional. Filter to only include resources matching the requirements. For more information, see [Filtering list results](https://support.google.com/area120-tables/answer/10503371).</param>
		/// <param name="orderBy">Optional. Sorting order for the list of rows on createTime/updateTime.</param>
		/// <param name="pageSize">The maximum number of rows to return. The service may return fewer than this value. If unspecified, at most 50 rows are returned. The maximum value is 1,000; values above 1,000 are coerced to 1,000.</param>
		/// <param name="pageToken">A page token, received from a previous `ListRows` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRows` must match the call that provided the page token.</param>
		/// <param name="view">Optional. Column key to use for values in the row. Defaults to user entered name.</param>
		/// <returns>Successful response</returns>
		public async Task<ListRowsResponse> Area120tables_tables_rows_listAsync(string parent, string filter, string orderBy, int pageSize, string pageToken, CreateRowRequestView view, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1alpha1/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+"/rows&filter=" + (filter==null? "" : System.Uri.EscapeDataString(filter))+"&orderBy=" + (orderBy==null? "" : System.Uri.EscapeDataString(orderBy))+"&pageSize="+pageSize+"&pageToken=" + (pageToken==null? "" : System.Uri.EscapeDataString(pageToken))+"&view=" + view;
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
				return JsonSerializer.Deserialize<ListRowsResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates a row.
		/// Area120tables_tables_rows_create v1alpha1/{parent}/rows
		/// </summary>
		/// <param name="parent">Required. The parent table where this row will be created. Format: tables/{table}</param>
		/// <param name="view">Optional. Column key to use for values in the row. Defaults to user entered name.</param>
		/// <returns>Successful response</returns>
		public async Task<Row> Area120tables_tables_rows_createAsync(string parent, CreateRowRequestView view, Row requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1alpha1/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+"/rows&view=" + view;
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
				return JsonSerializer.Deserialize<Row>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates multiple rows.
		/// Area120tables_tables_rows_batchCreate v1alpha1/{parent}/rows:batchCreate
		/// </summary>
		/// <param name="parent">Required. The parent table where the rows will be created. Format: tables/{table}</param>
		/// <returns>Successful response</returns>
		public async Task<BatchCreateRowsResponse> Area120tables_tables_rows_batchCreateAsync(string parent, BatchCreateRowsRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1alpha1/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+"/rows:batchCreate";
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
				return JsonSerializer.Deserialize<BatchCreateRowsResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes multiple rows.
		/// Area120tables_tables_rows_batchDelete v1alpha1/{parent}/rows:batchDelete
		/// </summary>
		/// <param name="parent">Required. The parent table shared by all rows being deleted. Format: tables/{table}</param>
		/// <returns>Successful response</returns>
		public async Task<Empty> Area120tables_tables_rows_batchDeleteAsync(string parent, BatchDeleteRowsRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1alpha1/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+"/rows:batchDelete";
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
				return JsonSerializer.Deserialize<Empty>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Updates multiple rows.
		/// Area120tables_tables_rows_batchUpdate v1alpha1/{parent}/rows:batchUpdate
		/// </summary>
		/// <param name="parent">Required. The parent table shared by all rows being updated. Format: tables/{table}</param>
		/// <returns>Successful response</returns>
		public async Task<BatchUpdateRowsResponse> Area120tables_tables_rows_batchUpdateAsync(string parent, BatchUpdateRowsRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1alpha1/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+"/rows:batchUpdate";
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
				return JsonSerializer.Deserialize<BatchUpdateRowsResponse>(streamContent, jsonSerializerSettings);
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
