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
	public class Asset
	{
		
		/// <summary>
		/// The accounting value of the asset
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="accountingBookValue")]
		public System.Nullable<System.Double> AccountingBookValue { get; set; }
		
		/// <summary>
		/// The Xero-generated Id for the asset
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="assetId")]
		public string AssetId { get; set; }
		
		/// <summary>
		/// The name of the asset
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="assetName")]
		public string AssetName { get; set; }
		
		/// <summary>
		/// Must be unique.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="assetNumber")]
		public string AssetNumber { get; set; }
		
		/// <summary>
		/// See Asset Status Codes.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="assetStatus")]
		public System.Nullable<AssetAssetStatus> AssetStatus { get; set; }
		
		/// <summary>
		/// The Xero-generated Id for the asset type
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="assetTypeId")]
		public string AssetTypeId { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="bookDepreciationDetail")]
		public BookDepreciationDetail BookDepreciationDetail { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="bookDepreciationSetting")]
		public BookDepreciationSetting BookDepreciationSetting { get; set; }
		
		/// <summary>
		/// Boolean to indicate whether depreciation can be rolled back for this asset individually. This is true if it doesn't have 'legacy' journal entries and if there is no lock period that would prevent this asset from rolling back.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="canRollback")]
		public System.Nullable<System.Boolean> CanRollback { get; set; }
		
		/// <summary>
		/// The date the asset was disposed
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="disposalDate")]
		public System.Nullable<System.DateOnly> DisposalDate { get; set; }
		
		/// <summary>
		/// The price the asset was disposed at
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="disposalPrice")]
		public System.Nullable<System.Double> DisposalPrice { get; set; }
		
		/// <summary>
		/// Boolean to indicate whether delete is enabled
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="isDeleteEnabledForDate")]
		public System.Nullable<System.Boolean> IsDeleteEnabledForDate { get; set; }
		
		/// <summary>
		/// The date the asset was purchased YYYY-MM-DD
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="purchaseDate")]
		public System.Nullable<System.DateOnly> PurchaseDate { get; set; }
		
		/// <summary>
		/// The purchase price of the asset
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="purchasePrice")]
		public System.Nullable<System.Double> PurchasePrice { get; set; }
		
		/// <summary>
		/// The asset's serial number
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="serialNumber")]
		public string SerialNumber { get; set; }
		
		/// <summary>
		/// The date the asset’s warranty expires (if needed) YYYY-MM-DD
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="warrantyExpiryDate")]
		public string WarrantyExpiryDate { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum AssetAssetStatus
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Draft = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Registered = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Disposed = 2,
	}
	
	/// <summary>
	/// See Asset Status Codes.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum AssetStatus
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Draft = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Registered = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Disposed = 2,
	}
	
	/// <summary>
	/// See Asset Status Codes.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum AssetStatusQueryParam
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DRAFT = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		REGISTERED = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DISPOSED = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class AssetType
	{
		
		/// <summary>
		/// The account for accumulated depreciation of fixed assets of this type
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="accumulatedDepreciationAccountId")]
		public string AccumulatedDepreciationAccountId { get; set; }
		
		/// <summary>
		/// Xero generated unique identifier for asset types
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="assetTypeId")]
		public string AssetTypeId { get; set; }
		
		/// <summary>
		/// The name of the asset type
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="assetTypeName")]
		public string AssetTypeName { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="bookDepreciationSetting")]
		public BookDepreciationSetting BookDepreciationSetting { get; set; }
		
		/// <summary>
		/// The expense account for the depreciation of fixed assets of this type
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="depreciationExpenseAccountId")]
		public string DepreciationExpenseAccountId { get; set; }
		
		/// <summary>
		/// The asset account for fixed assets of this type
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fixedAssetAccountId")]
		public string FixedAssetAccountId { get; set; }
		
		/// <summary>
		/// All asset types that have accumulated depreciation for any assets that use them are deemed ‘locked’ and cannot be removed.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="locks")]
		public System.Nullable<System.Int32> Locks { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Assets
	{
		
		[System.Runtime.Serialization.DataMember(Name="items")]
		public Asset[] Items { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="pagination")]
		public Pagination Pagination { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BookDepreciationDetail
	{
		
		/// <summary>
		/// The value of the asset you want to depreciate, if this is less than the cost of the asset.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="costLimit")]
		public System.Nullable<System.Double> CostLimit { get; set; }
		
		/// <summary>
		/// All depreciation occurring in the current financial year.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="currentAccumDepreciationAmount")]
		public System.Nullable<System.Double> CurrentAccumDepreciationAmount { get; set; }
		
		/// <summary>
		/// When an asset is disposed, this will be the sell price minus the purchase price if a profit was made.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="currentCapitalGain")]
		public System.Nullable<System.Double> CurrentCapitalGain { get; set; }
		
		/// <summary>
		/// When an asset is disposed, this will be the lowest one of sell price or purchase price, minus the current book value.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="currentGainLoss")]
		public System.Nullable<System.Double> CurrentGainLoss { get; set; }
		
		/// <summary>
		/// YYYY-MM-DD
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="depreciationStartDate")]
		public System.Nullable<System.DateOnly> DepreciationStartDate { get; set; }
		
		/// <summary>
		/// All depreciation prior to the current financial year.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="priorAccumDepreciationAmount")]
		public System.Nullable<System.Double> PriorAccumDepreciationAmount { get; set; }
		
		/// <summary>
		/// The value of the asset remaining when you've fully depreciated it.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="residualValue")]
		public System.Nullable<System.Double> ResidualValue { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BookDepreciationSetting
	{
		
		/// <summary>
		/// The method of averaging applied to this asset. See Averaging Methods
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="averagingMethod")]
		public System.Nullable<BookDepreciationSettingAveragingMethod> AveragingMethod { get; set; }
		
		/// <summary>
		/// Unique Xero identifier for the effective date change
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="bookEffectiveDateOfChangeId")]
		public string BookEffectiveDateOfChangeId { get; set; }
		
		/// <summary>
		/// Unique Xero identifier for the depreciable object
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="depreciableObjectId")]
		public string DepreciableObjectId { get; set; }
		
		/// <summary>
		/// The type of asset object
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="depreciableObjectType")]
		public string DepreciableObjectType { get; set; }
		
		/// <summary>
		/// See Depreciation Calculation Methods
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="depreciationCalculationMethod")]
		public System.Nullable<BookDepreciationSettingDepreciationCalculationMethod> DepreciationCalculationMethod { get; set; }
		
		/// <summary>
		/// The method of depreciation applied to this asset. See Depreciation Methods
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="depreciationMethod")]
		public System.Nullable<BookDepreciationSettingDepreciationMethod> DepreciationMethod { get; set; }
		
		/// <summary>
		/// The rate of depreciation (e.g. 0.05)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="depreciationRate")]
		public System.Nullable<System.Double> DepreciationRate { get; set; }
		
		/// <summary>
		/// Effective life of the asset in years (e.g. 5)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="effectiveLifeYears")]
		public System.Nullable<System.Int32> EffectiveLifeYears { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum BookDepreciationSettingAveragingMethod
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FullMonth = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ActualDays = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum BookDepreciationSettingDepreciationCalculationMethod
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Rate = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Life = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		None = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum BookDepreciationSettingDepreciationMethod
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NoDepreciation = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		StraightLine = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DiminishingValue100 = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DiminishingValue150 = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DiminishingValue200 = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FullDepreciation = 5,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Error
	{
		
		/// <summary>
		/// Detail of the error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="detail")]
		public string Detail { get; set; }
		
		/// <summary>
		/// Array of elements of field validation errors
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fieldValidationErrors")]
		public FieldValidationErrorsElement[] FieldValidationErrors { get; set; }
		
		/// <summary>
		/// Array of elements of resource validation errors
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resourceValidationErrors")]
		public ResourceValidationErrorsElement[] ResourceValidationErrors { get; set; }
		
		/// <summary>
		/// Title of the error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="title")]
		public string Title { get; set; }
		
		/// <summary>
		/// The internal type of error, not accessible externally
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class FieldValidationErrorsElement
	{
		
		/// <summary>
		/// Detail of the field validation error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="detail")]
		public string Detail { get; set; }
		
		/// <summary>
		/// The field name of the erroneous field
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fieldName")]
		public string FieldName { get; set; }
		
		/// <summary>
		/// Explanation of the field validation error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="localisedMessage")]
		public string LocalisedMessage { get; set; }
		
		/// <summary>
		/// Title of the field validation error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="title")]
		public string Title { get; set; }
		
		/// <summary>
		/// Internal type of the field validation error message
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
		
		/// <summary>
		/// The provided value
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="valueProvided")]
		public string ValueProvided { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ResourceValidationErrorsElement
	{
		
		/// <summary>
		/// Detail of the resource validation error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="detail")]
		public string Detail { get; set; }
		
		/// <summary>
		/// Explanation of the resource validation error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="localisedMessage")]
		public string LocalisedMessage { get; set; }
		
		/// <summary>
		/// The field name of the erroneous field
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resourceName")]
		public string ResourceName { get; set; }
		
		/// <summary>
		/// Title of the resource validation error
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="title")]
		public string Title { get; set; }
		
		/// <summary>
		/// Internal type of the resource error message
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Pagination
	{
		
		[System.Runtime.Serialization.DataMember(Name="itemCount")]
		public System.Nullable<System.Int32> ItemCount { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="page")]
		public System.Nullable<System.Int32> Page { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="pageCount")]
		public System.Nullable<System.Int32> PageCount { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="pageSize")]
		public System.Nullable<System.Int32> PageSize { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Setting
	{
		
		/// <summary>
		/// The prefix used for fixed asset numbers (“FA-” by default)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="assetNumberPrefix")]
		public string AssetNumberPrefix { get; set; }
		
		/// <summary>
		/// The next available sequence number
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="assetNumberSequence")]
		public string AssetNumberSequence { get; set; }
		
		/// <summary>
		/// The date depreciation calculations started on registered fixed assets in Xero
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="assetStartDate")]
		public System.Nullable<System.DateOnly> AssetStartDate { get; set; }
		
		/// <summary>
		/// Default account that capital gains are posted to
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="defaultCapitalGainOnDisposalAccountId")]
		public string DefaultCapitalGainOnDisposalAccountId { get; set; }
		
		/// <summary>
		/// Default account that gains are posted to
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="defaultGainOnDisposalAccountId")]
		public string DefaultGainOnDisposalAccountId { get; set; }
		
		/// <summary>
		/// Default account that losses are posted to
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="defaultLossOnDisposalAccountId")]
		public string DefaultLossOnDisposalAccountId { get; set; }
		
		/// <summary>
		/// The last depreciation date
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="lastDepreciationDate")]
		public System.Nullable<System.DateOnly> LastDepreciationDate { get; set; }
		
		/// <summary>
		/// opt in for tax calculation
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="optInForTax")]
		public System.Nullable<System.Boolean> OptInForTax { get; set; }
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
		/// searches fixed asset types
		/// By passing in the appropriate options, you can search for available fixed asset types in the system
		/// GetAssetTypes AssetTypes
		/// </summary>
		/// <returns>search results matching criteria</returns>
		public async Task<AssetType[]> GetAssetTypesAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "AssetTypes";
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
				return JsonSerializer.Deserialize<AssetType[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// adds a fixed asset type
		/// Adds an fixed asset type to the system
		/// CreateAssetType AssetTypes
		/// </summary>
		/// <param name="requestBody">Asset type to add</param>
		/// <returns>results single object -  created fixed type</returns>
		public async Task<AssetType> CreateAssetTypeAsync(AssetType requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "AssetTypes";
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
				return JsonSerializer.Deserialize<AssetType>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// searches fixed asset
		/// By passing in the appropriate options, you can search for available fixed asset in the system
		/// GetAssets Assets
		/// </summary>
		/// <param name="status">Required when retrieving a collection of assets. See Asset Status Codes</param>
		/// <param name="page">Results are paged. This specifies which page of the results to return. The default page is 1.</param>
		/// <param name="pageSize">The number of records returned per page. By default the number of records returned is 10.</param>
		/// <param name="orderBy">Requests can be ordered by AssetType, AssetName, AssetNumber, PurchaseDate and PurchasePrice. If the asset status is DISPOSED it also allows DisposalDate and DisposalPrice.</param>
		/// <param name="sortDirection">ASC or DESC</param>
		/// <param name="filterBy">A string that can be used to filter the list to only return assets containing the text. Checks it against the AssetName, AssetNumber, Description and AssetTypeName fields.</param>
		/// <returns>search results matching criteria</returns>
		public async Task<Assets> GetAssetsAsync(AssetStatusQueryParam status, int page, int pageSize, GetAssetsOrderBy orderBy, GetAssetsSortDirection sortDirection, string filterBy, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "Assets?status=" + status+"&page="+page+"&pageSize="+pageSize+"&orderBy=" + orderBy+"&sortDirection=" + sortDirection+"&filterBy=" + (filterBy==null? "" : System.Uri.EscapeDataString(filterBy));
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
				return JsonSerializer.Deserialize<Assets>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// adds a fixed asset
		/// Adds an asset to the system
		/// CreateAsset Assets
		/// </summary>
		/// <param name="requestBody">Fixed asset you are creating</param>
		/// <returns>return single object - create new asset</returns>
		public async Task<Asset> CreateAssetAsync(Asset requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "Assets";
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
				return JsonSerializer.Deserialize<Asset>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieves fixed asset by id
		/// By passing in the appropriate asset id, you can search for
		/// a specific fixed asset in the system
		/// 
		/// GetAssetById Assets/{id}
		/// </summary>
		/// <param name="id">fixed asset id for single object</param>
		/// <returns>search results matching criteria</returns>
		public async Task<Asset> GetAssetByIdAsync(string id, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "Assets/"+ (id==null? "" : System.Uri.EscapeDataString(id));
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
				return JsonSerializer.Deserialize<Asset>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// searches fixed asset settings
		/// By passing in the appropriate options, you can search for available fixed asset types in the system
		/// GetAssetSettings Settings
		/// </summary>
		/// <returns>search results matching criteria</returns>
		public async Task<Setting> GetAssetSettingsAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "Settings";
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
				return JsonSerializer.Deserialize<Setting>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum GetAssetsOrderBy
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AssetType = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AssetName = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		AssetNumber = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PurchaseDate = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PurchasePrice = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DisposalDate = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DisposalPrice = 6,
	}
	
	public enum GetAssetsSortDirection
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		asc = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		desc = 1,
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