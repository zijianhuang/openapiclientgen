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
		/// Copyrights whole world
		/// The Copyrights API returns copyright information for
		/// the Maps API Raster Tile Service in JSON, JSONP, or XML format.
		/// This call returns copyright information for the whole world.
		/// Map_versionNumberCopyrights__formatGetByCallback map/{versionNumber}/copyrights.{format}
		/// </summary>
		/// <param name="versionNumber">Version of the service to call. The current version is 1</param>
		/// <param name="format">Format of the response</param>
		/// <param name="callback">Specifies the jsonp callback method. Only used when format is jsonp</param>
		/// <returns><b>OK</b></returns>
		public async Task Map_versionNumberCopyrights__formatGetByCallbackAsync(Map_versionNumberCopyrights__formatGetByCallbackVersionNumber versionNumber, Map_versionNumberCopyrights__formatGetByCallbackFormat format, string callback, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "map/"+versionNumber+"/copyrights."+format+"?callback=" + (callback==null? "" : System.Uri.EscapeDataString(callback));
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
		/// Captions
		/// This API returns copyright captions for the map service.
		/// Map_versionNumberCopyrightsCaption__formatGetByCallback map/{versionNumber}/copyrights/caption.{format}
		/// </summary>
		/// <param name="versionNumber">Version of the service to call. The current version is 1.</param>
		/// <param name="format">Format of the response</param>
		/// <param name="callback">Specifies the jsonp callback method. Only used when format is jsonp</param>
		/// <returns><b>OK</b></returns>
		public async Task Map_versionNumberCopyrightsCaption__formatGetByCallbackAsync(Map_versionNumberCopyrightsCaption__formatGetByCallbackVersionNumber versionNumber, Map_versionNumberCopyrights__formatGetByCallbackFormat format, string callback, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "map/"+versionNumber+"/copyrights/caption."+format+"?callback=" + (callback==null? "" : System.Uri.EscapeDataString(callback));
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
		/// Copyrights bounding box
		/// The Copyrights API returns copyright information for
		/// the Maps API Raster Tile Service in JSON, JSONP, or XML format.
		/// This call returns copyright information for a specific bounding box.
		/// Map_versionNumberCopyrights_minLon_minLat_maxLon_maxLat__formatGetByCallback map/{versionNumber}/copyrights/{minLon}/{minLat}/{maxLon}/{maxLat}.{format}
		/// </summary>
		/// <param name="versionNumber">Version of the service to call. The current version is 1</param>
		/// <param name="format">Format of the response</param>
		/// <param name="minLon">Minimum longitude coordinate of bounding box defined in terms of latitude/longitude.</param>
		/// <param name="minLat">Minimum latitude coordinate of bounding box defined in terms of latitude/longitude.</param>
		/// <param name="maxLon">Maximum longitude coordinate of bounding box defined in terms of latitude/longitude.</param>
		/// <param name="maxLat">Maximum latitude coordinate of bounding box defined in terms of latitude/longitude.</param>
		/// <param name="callback">Specifies the jsonp callback method. Only used when format is jsonp.</param>
		/// <returns><b>OK</b></returns>
		public async Task Map_versionNumberCopyrights_minLon_minLat_maxLon_maxLat__formatGetByCallbackAsync(Map_versionNumberCopyrights_minLon_minLat_maxLon_maxLat__formatGetByCallbackVersionNumber versionNumber, Map_versionNumberCopyrights__formatGetByCallbackFormat format, double minLon, double minLat, double maxLon, double maxLat, string callback, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "map/"+versionNumber+"/copyrights/"+minLon+"/"+minLat+"/"+maxLon+"/"+maxLat+"."+format+"?callback=" + (callback==null? "" : System.Uri.EscapeDataString(callback));
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
		/// Copyrights tile
		/// The Copyrights API returns copyright information for
		/// the Maps API Raster Tile Service in JSON, JSONP, or XML format.
		/// This call returns copyright information for the a specific map tile.
		/// Map_versionNumberCopyrights_zoom_X_Y__formatGetByCallback map/{versionNumber}/copyrights/{zoom}/{X}/{Y}.{format}
		/// </summary>
		/// <param name="versionNumber">Version of the service to call. The current version is 1</param>
		/// <param name="format">Format of the response</param>
		/// <param name="zoom">Zoom level of tile to be rendered. Only used for tile-level
		///copyright calls.</param>
		/// <param name="X">X coordinate of the tile on zoom grid. Only used for tile-level
		///copyright calls.</param>
		/// <param name="Y">Y coordinate of the tile on zoom grid. Only used for tile-level
		///copyright calls.</param>
		/// <param name="callback">Specifies the jsonp callback method. Only used when format is jsonp.</param>
		/// <returns><b>OK</b></returns>
		public async Task Map_versionNumberCopyrights_zoom_X_Y__formatGetByCallbackAsync(Map_versionNumberCopyrights_zoom_X_Y__formatGetByCallbackVersionNumber versionNumber, Map_versionNumberCopyrights__formatGetByCallbackFormat format, Map_versionNumberCopyrights_zoom_X_Y__formatGetByCallbackZoom zoom, int X, int Y, string callback, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "map/"+versionNumber+"/copyrights/"+zoom+"/"+X+"/"+Y+"."+format+"?callback=" + (callback==null? "" : System.Uri.EscapeDataString(callback));
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
		/// Static Image
		/// The Static Image service renders a rectangular raster image
		/// in the style, size, and zoom level specified. The image can be requested
		/// using either a center point plus width and height or a bounding box.
		/// Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndView map/{versionNumber}/staticimage
		/// </summary>
		/// <param name="versionNumber">Version of the service to call. The current version is 1.</param>
		/// <param name="layer">Layer of image to be rendered. <em>Hybrid</em> and <em>labels</em>
		///are intended for layering with other data and are only available in <em>png</em> format.</param>
		/// <param name="style">Map style to be returned</param>
		/// <param name="format">Image format to be returned</param>
		/// <param name="zoom">Zoom level of map image to be returned.</param>
		/// <param name="center">Coordinates for the center point of the image.
		///Must be used with the <strong>width</strong> and
		///<strong>height</strong> parameters; cannot be used with <strong>bbox</strong>.
		///Uses EPSG:3857 projection (functionally equivalent to EPSG:900910).</param>
		/// <param name="width">Width of the resulting image in pixels. Width must be a positive integer between 1 and 8192.
		/// Minimum: 1
		/// Maximum: 8192
		// </param>
		/// <param name="height">Height of the resulting image in pixels. Height must be a positive integer between 1 and 8192.
		/// Minimum: 1
		/// Maximum: 8192
		// </param>
		/// <param name="bbox">Bounding box for the image, using EPSG:3857 projection (functionally equivalent to EPSG:900910).
		///Values <strong>must</strong> be in the order of minLon, minLat, maxLon, maxLat.
		///MaxLat must be greater than minLat. Longitude values can be on both sides of the 180th meridian.
		///Cannot be used with <strong>center</strong>, <strong>width</strong>, or <strong>height</strong> parameters.</param>
		/// <param name="view">Geopolitical view. Determines rendering of disputed areas. See the <a href="/maps-api/maps-api-documentation-raster/raster-tile">documentation</a> for an explanation of how this works in live services.</param>
		/// <returns><b>OK</b></returns>
		public async Task Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewAsync(Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewVersionNumber versionNumber, Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewLayer layer, Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewStyle style, Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewFormat format, Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewZoom zoom, string center, int width, int height, string bbox, Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewView view, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "map/"+versionNumber+"/staticimage?layer=" + layer+"&style=" + style+"&format=" + format+"&zoom="+zoom+"&center=" + (center==null? "" : System.Uri.EscapeDataString(center))+"&width="+width+"&height="+height+"&bbox=" + (bbox==null? "" : System.Uri.EscapeDataString(bbox))+"&view=" + view;
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
		/// Tile
		/// The Maps API Vector Service delivers vector tiles, which are representations of square sections of map data.
		/// Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguage map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.pbf
		/// </summary>
		/// <param name="versionNumber">Version of the service to call. The current version is 1</param>
		/// <param name="layer">Layer of tile to be rendered</param>
		/// <param name="style">Style of tile to be rendered</param>
		/// <param name="zoom">Zoom level of tile to be rendered</param>
		/// <param name="X">x coordinate of tile on zoom grid</param>
		/// <param name="Y">y coordinate of tile on zoom grid</param>
		/// <param name="view">Geopolitical view. Determines rendering of disputed areas. See the <a href="/maps-api/maps-api-documentation-vector/tile">documentation</a> for an explanation of how this works in live services.</param>
		/// <param name="language">Language to be used for labels in the response. The default is NGT: Neutral Ground Truth, which uses each place's local official language and script (where available). See the <a href="/maps-api/maps-api-documentation-vector/tile">documentation</a> for a full list of options.</param>
		/// <returns><b>OK</b></returns>
		public async Task Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguageAsync(Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguageVersionNumber versionNumber, Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewLayer layer, Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguageStyle style, Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguageZoom zoom, int X, int Y, Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguageView view, string language, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "map/"+versionNumber+"/tile/"+layer+"/"+style+"/"+zoom+"/"+X+"/"+Y+".pbf?view=" + view+"&language=" + (language==null? "" : System.Uri.EscapeDataString(language));
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
		/// Tile
		/// The Maps API Raster Service delivers raster tiles, which are representations of square sections of map data.
		/// Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndView map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.{format}
		/// </summary>
		/// <param name="versionNumber">Version of the service to call. The current version is 1.</param>
		/// <param name="layer">Layer of tile to be rendered. <em>Hybrid</em> and <em>labels</em> are intended for layering with other data and are only available in <em>png</em> format.</param>
		/// <param name="style">Style of tile to be rendered</param>
		/// <param name="zoom">Zoom level of tile to be rendered</param>
		/// <param name="X">x coordinate of tile on zoom grid</param>
		/// <param name="Y">y coordinate of tile on zoom grid</param>
		/// <param name="format">Format of the response.</param>
		/// <param name="tileSize">Tile dimensions in pixels. <em>512</em> is only available for the <em>main</em> style and <em>basic</em> or <em>labels</em> layers.</param>
		/// <param name="view">Geopolitical view. Determines rendering of disputed areas. See the <a href="/maps-sdk-web/functional-examples#geopolitical-views">documentation</a> for an explanation of how this works in live services.</param>
		/// <returns><b>OK</b></returns>
		public async Task Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndViewAsync(Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndViewVersionNumber versionNumber, Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewLayer layer, Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewStyle style, Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndViewZoom zoom, int X, int Y, Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndViewFormat format, Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndViewTileSize tileSize, Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewView view, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "map/"+versionNumber+"/tile/"+layer+"/"+style+"/"+zoom+"/"+X+"/"+Y+"."+format+"?tileSize="+tileSize+"&view=" + view;
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
		/// GetMap
		/// The GetMap call implements the Web Map Service 1.1.1 standard
		/// to access TomTom raster map tiles. This service is described
		/// in the response to the GetCapabilities API call.
		/// Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersion map/{versionNumber}/wms/
		/// </summary>
		/// <param name="versionNumber">Version of the service to call. The current version is 1</param>
		/// <param name="request">Request type</param>
		/// <param name="srs">Projection used in describing the <b>bbox</b> EPSG:3857 is
		///recommended, particularly at higher zoom levels. (Note that
		///EPSG:3857 is functionally equivalent to EPSG:900913/EPSG:3785)</param>
		/// <param name="bbox">Bounding box in the projection stated in <b>srs</b>
		///(minLon,minLat,maxLon,maxLat)</param>
		/// <param name="width">Width of the resulting image, in pixels Maximum value is 2048</param>
		/// <param name="height">Height of the resulting image, in pixels Maximum value is 2048</param>
		/// <param name="format">Image format to be returned</param>
		/// <param name="layers">Map layers requested Currently only the basic layer is available</param>
		/// <param name="styles">Map styles to be returned. Currently, no styles are available. This
		///parameter is present for forward compatibility; it must be used and
		///left blank.</param>
		/// <param name="service">Service type</param>
		/// <param name="version">WMS service version</param>
		/// <returns><b>OK</b></returns>
		public async Task Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionAsync(Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionVersionNumber versionNumber, Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionRequest request, Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionSrs srs, string bbox, int width, int height, Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionFormat format, Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionLayers layers, Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionStyles styles, Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionService service, Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionVersion version, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "map/"+versionNumber+"/wms/?request=" + request+"&srs=" + srs+"&bbox=" + (bbox==null? "" : System.Uri.EscapeDataString(bbox))+"&width="+width+"&height="+height+"&format=" + format+"&layers=" + layers+"&styles=" + styles+"&service=" + service+"&version=" + version;
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
		/// GetCapabilities
		/// The GetCapabilities call is part of TomTom's implementation of version 1.1.1
		/// the Web Map Service (WMS). It provides descriptions of the other calls
		/// that are available in the implementation.
		/// Map_versionNumberWmsGetByServiceAndRequestAndVersion map/{versionNumber}/wms//
		/// </summary>
		/// <param name="version">WMS service version</param>
		/// <returns><b>OK</b></returns>
		public async Task Map_versionNumberWmsGetByServiceAndRequestAndVersionAsync(Map_versionNumberWmsGetByServiceAndRequestAndVersionVersionNumber versionNumber, Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionService service, Map_versionNumberWmsGetByServiceAndRequestAndVersionRequest request, Map_versionNumberWmsGetByServiceAndRequestAndVersionVersion version, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "map/"+versionNumber+"/wms//?service=" + service+"&request=" + request+"&version=" + version;
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
		/// WMTS
		/// The WMTS GetCapabilities call implements version 1.0.0 of
		/// the <a href="http://www.opengeospatial.org/standards/wmts">Web Map Tile Service</a>
		/// (WMTS) standard. It returns metadata that allows compatible calling systems to construct
		/// calls to TomTom's raster map tile service. See the
		/// <a href="/maps-api/maps-api-documentation-raster/wmts">documentation</a>
		/// for more information on WMTS.
		/// Map_versionNumberWmts_key_wmtsVersionWMTSCapabilities_xmlGet map/{versionNumber}/wmts/{key}/{wmtsVersion}/WMTSCapabilities.xml
		/// </summary>
		/// <param name="versionNumber">Version of the service to call. The current version is 1</param>
		/// <param name="key">Your API key for calling this service.</param>
		/// <returns><b>OK</b></returns>
		public async Task Map_versionNumberWmts_key_wmtsVersionWMTSCapabilities_xmlGetAsync(Map_versionNumberWmts_key_wmtsVersionWMTSCapabilities_xmlGetVersionNumber versionNumber, string key, Map_versionNumberWmts_key_wmtsVersionWMTSCapabilities_xmlGetWmtsVersion wmtsVersion, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "map/"+versionNumber+"/wmts/"+ (key==null? "" : System.Uri.EscapeDataString(key))+"/"+wmtsVersion+"/WMTSCapabilities.xml";
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
	
	public enum Map_versionNumberCopyrights__formatGetByCallbackVersionNumber
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_1 = 1,
	}
	
	public enum Map_versionNumberCopyrights__formatGetByCallbackFormat
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="json")]
		json = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="jsonp")]
		jsonp = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="xml")]
		xml = 2,
	}
	
	public enum Map_versionNumberCopyrightsCaption__formatGetByCallbackVersionNumber
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_1 = 1,
	}
	
	public enum Map_versionNumberCopyrights_minLon_minLat_maxLon_maxLat__formatGetByCallbackVersionNumber
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_1 = 1,
	}
	
	public enum Map_versionNumberCopyrights_zoom_X_Y__formatGetByCallbackVersionNumber
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_1 = 1,
	}
	
	public enum Map_versionNumberCopyrights_zoom_X_Y__formatGetByCallbackZoom
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
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_8 = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_9 = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_10 = 10,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_11 = 11,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_12 = 12,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_13 = 13,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_14 = 14,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_15 = 15,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_16 = 16,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_17 = 17,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_18 = 18,
	}
	
	public enum Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewVersionNumber
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_1 = 1,
	}
	
	public enum Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewLayer
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="basic")]
		basic = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="hybrid")]
		hybrid = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="labels")]
		labels = 2,
	}
	
	public enum Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewStyle
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="main")]
		main = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="night")]
		night = 1,
	}
	
	public enum Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewFormat
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="png")]
		png = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="jpg")]
		jpg = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="jpeg")]
		jpeg = 2,
	}
	
	public enum Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewZoom
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
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_8 = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_9 = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_10 = 10,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_11 = 11,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_12 = 12,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_13 = 13,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_14 = 14,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_15 = 15,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_16 = 16,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_17 = 17,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_18 = 18,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_19 = 19,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_20 = 20,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_21 = 21,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_22 = 22,
	}
	
	public enum Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewView
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="Unified")]
		Unified = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="IN")]
		IN = 1,
	}
	
	public enum Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguageVersionNumber
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_1 = 1,
	}
	
	public enum Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguageStyle
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="main")]
		main = 0,
	}
	
	public enum Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguageZoom
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
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_8 = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_9 = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_10 = 10,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_11 = 11,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_12 = 12,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_13 = 13,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_14 = 14,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_15 = 15,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_16 = 16,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_17 = 17,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_18 = 18,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_19 = 19,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_20 = 20,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_21 = 21,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_22 = 22,
	}
	
	public enum Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguageView
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="Unified")]
		Unified = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="IL")]
		IL = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="IN")]
		IN = 2,
	}
	
	public enum Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndViewVersionNumber
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_1 = 1,
	}
	
	public enum Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndViewZoom
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
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_8 = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_9 = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_10 = 10,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_11 = 11,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_12 = 12,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_13 = 13,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_14 = 14,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_15 = 15,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_16 = 16,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_17 = 17,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_18 = 18,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_19 = 19,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_20 = 20,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_21 = 21,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_22 = 22,
	}
	
	public enum Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndViewFormat
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="jpg")]
		jpg = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="png")]
		png = 1,
	}
	
	public enum Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndViewTileSize
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_256 = 256,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_512 = 512,
	}
	
	public enum Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionVersionNumber
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_1 = 1,
	}
	
	public enum Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionRequest
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="GetMap")]
		GetMap = 0,
	}
	
	public enum Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionSrs
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="EPSG:3857")]
		EPSG3857 = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="EPSG:4326")]
		EPSG4326 = 1,
	}
	
	public enum Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionFormat
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="image/jpeg")]
		image_jpeg = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="image/png")]
		image_png = 1,
	}
	
	public enum Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionLayers
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="basic")]
		basic = 0,
	}
	
	public enum Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionStyles
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="")]
		_ = 0,
	}
	
	public enum Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionService
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="WMS")]
		WMS = 0,
	}
	
	public enum Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionVersion
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="1.1.1")]
		_1_1_1 = 0,
	}
	
	public enum Map_versionNumberWmsGetByServiceAndRequestAndVersionVersionNumber
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_1 = 1,
	}
	
	public enum Map_versionNumberWmsGetByServiceAndRequestAndVersionRequest
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="GetCapabilities")]
		GetCapabilities = 0,
	}
	
	public enum Map_versionNumberWmsGetByServiceAndRequestAndVersionVersion
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="1.1.1")]
		_1_1_1 = 0,
	}
	
	public enum Map_versionNumberWmts_key_wmtsVersionWMTSCapabilities_xmlGetVersionNumber
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		_1 = 1,
	}
	
	public enum Map_versionNumberWmts_key_wmtsVersionWMTSCapabilities_xmlGetWmtsVersion
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="1.0.0")]
		_1_0_0 = 0,
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