import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Copyrights whole world
		 * The Copyrights API returns copyright information for
		 * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
		 * This call returns copyright information for the whole world.
		 * Get map/{versionNumber}/copyrights.{format}
		 * @param {Map_versionNumberCopyrights__formatGetByCallbackVersionNumber} versionNumber Version of the service to call. The current version is 1
		 * @param {Map_versionNumberCopyrights__formatGetByCallbackFormat} format Format of the response
		 * @param {string} callback Specifies the jsonp callback method. Only used when format is jsonp
		 * @return {void} <b>OK</b>
		 */
		Map_versionNumberCopyrights__formatGetByCallback(versionNumber: Map_versionNumberCopyrights__formatGetByCallbackVersionNumber, format: Map_versionNumberCopyrights__formatGetByCallbackFormat, callback: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'map/' + versionNumber + '/copyrights.' + format + '?callback=' + (callback == null ? '' : encodeURIComponent(callback)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Captions
		 * This API returns copyright captions for the map service.
		 * Get map/{versionNumber}/copyrights/caption.{format}
		 * @param {Map_versionNumberCopyrightsCaption__formatGetByCallbackVersionNumber} versionNumber Version of the service to call. The current version is 1.
		 * @param {Map_versionNumberCopyrights__formatGetByCallbackFormat} format Format of the response
		 * @param {string} callback Specifies the jsonp callback method. Only used when format is jsonp
		 * @return {void} <b>OK</b>
		 */
		Map_versionNumberCopyrightsCaption__formatGetByCallback(versionNumber: Map_versionNumberCopyrightsCaption__formatGetByCallbackVersionNumber, format: Map_versionNumberCopyrights__formatGetByCallbackFormat, callback: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'map/' + versionNumber + '/copyrights/caption.' + format + '?callback=' + (callback == null ? '' : encodeURIComponent(callback)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Copyrights bounding box
		 * The Copyrights API returns copyright information for
		 * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
		 * This call returns copyright information for a specific bounding box.
		 * Get map/{versionNumber}/copyrights/{minLon}/{minLat}/{maxLon}/{maxLat}.{format}
		 * @param {Map_versionNumberCopyrights_minLon_minLat_maxLon_maxLat__formatGetByCallbackVersionNumber} versionNumber Version of the service to call. The current version is 1
		 * @param {Map_versionNumberCopyrights__formatGetByCallbackFormat} format Format of the response
		 * @param {number} minLon Minimum longitude coordinate of bounding box defined in terms of latitude/longitude.
		 * @param {number} minLat Minimum latitude coordinate of bounding box defined in terms of latitude/longitude.
		 * @param {number} maxLon Maximum longitude coordinate of bounding box defined in terms of latitude/longitude.
		 * @param {number} maxLat Maximum latitude coordinate of bounding box defined in terms of latitude/longitude.
		 * @param {string} callback Specifies the jsonp callback method. Only used when format is jsonp.
		 * @return {void} <b>OK</b>
		 */
		Map_versionNumberCopyrights_minLon_minLat_maxLon_maxLat__formatGetByCallback(versionNumber: Map_versionNumberCopyrights_minLon_minLat_maxLon_maxLat__formatGetByCallbackVersionNumber, format: Map_versionNumberCopyrights__formatGetByCallbackFormat, minLon: number, minLat: number, maxLon: number, maxLat: number, callback: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'map/' + versionNumber + '/copyrights/' + minLon + '/' + minLat + '/' + maxLon + '/' + maxLat + '.' + format + '?callback=' + (callback == null ? '' : encodeURIComponent(callback)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Copyrights tile
		 * The Copyrights API returns copyright information for
		 * the Maps API Raster Tile Service in JSON, JSONP, or XML format.
		 * This call returns copyright information for the a specific map tile.
		 * Get map/{versionNumber}/copyrights/{zoom}/{X}/{Y}.{format}
		 * @param {Map_versionNumberCopyrights_zoom_X_Y__formatGetByCallbackVersionNumber} versionNumber Version of the service to call. The current version is 1
		 * @param {Map_versionNumberCopyrights__formatGetByCallbackFormat} format Format of the response
		 * @param {Map_versionNumberCopyrights_zoom_X_Y__formatGetByCallbackZoom} zoom Zoom level of tile to be rendered. Only used for tile-level
		 * copyright calls.
		 * @param {number} X X coordinate of the tile on zoom grid. Only used for tile-level
		 * copyright calls.
		 * @param {number} Y Y coordinate of the tile on zoom grid. Only used for tile-level
		 * copyright calls.
		 * @param {string} callback Specifies the jsonp callback method. Only used when format is jsonp.
		 * @return {void} <b>OK</b>
		 */
		Map_versionNumberCopyrights_zoom_X_Y__formatGetByCallback(versionNumber: Map_versionNumberCopyrights_zoom_X_Y__formatGetByCallbackVersionNumber, format: Map_versionNumberCopyrights__formatGetByCallbackFormat, zoom: Map_versionNumberCopyrights_zoom_X_Y__formatGetByCallbackZoom, X: number, Y: number, callback: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'map/' + versionNumber + '/copyrights/' + zoom + '/' + X + '/' + Y + '.' + format + '?callback=' + (callback == null ? '' : encodeURIComponent(callback)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Static Image
		 * The Static Image service renders a rectangular raster image
		 * in the style, size, and zoom level specified. The image can be requested
		 * using either a center point plus width and height or a bounding box.
		 * Get map/{versionNumber}/staticimage
		 * @param {Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewVersionNumber} versionNumber Version of the service to call. The current version is 1.
		 * @param {Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewLayer} layer Layer of image to be rendered. <em>Hybrid</em> and <em>labels</em>
		 * are intended for layering with other data and are only available in <em>png</em> format.
		 * @param {Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewStyle} style Map style to be returned
		 * @param {Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewFormat} format Image format to be returned
		 * @param {Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewZoom} zoom Zoom level of map image to be returned.
		 * @param {string} center Coordinates for the center point of the image.
		 * Must be used with the <strong>width</strong> and
		 * <strong>height</strong> parameters; cannot be used with <strong>bbox</strong>.
		 * Uses EPSG:3857 projection (functionally equivalent to EPSG:900910).
		 * @param {number} width Width of the resulting image in pixels. Width must be a positive integer between 1 and 8192.
		 * @param {number} height Height of the resulting image in pixels. Height must be a positive integer between 1 and 8192.
		 * @param {string} bbox Bounding box for the image, using EPSG:3857 projection (functionally equivalent to EPSG:900910).
		 * Values <strong>must</strong> be in the order of minLon, minLat, maxLon, maxLat.
		 * MaxLat must be greater than minLat. Longitude values can be on both sides of the 180th meridian.
		 * Cannot be used with <strong>center</strong>, <strong>width</strong>, or <strong>height</strong> parameters.
		 * @param {Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewView} view Geopolitical view. Determines rendering of disputed areas. See the <a href="/maps-api/maps-api-documentation-raster/raster-tile">documentation</a> for an explanation of how this works in live services.
		 * @return {void} <b>OK</b>
		 */
		Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndView(versionNumber: Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewVersionNumber, layer: Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewLayer | null | undefined, style: Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewStyle | null | undefined, format: Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewFormat | null | undefined, zoom: Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewZoom | null | undefined, center: string | null | undefined, width: number | null | undefined, height: number | null | undefined, bbox: string | null | undefined, view: Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewView | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'map/' + versionNumber + '/staticimage?layer=' + layer + '&style=' + style + '&format=' + format + '&zoom=' + zoom + '&center=' + (center == null ? '' : encodeURIComponent(center)) + '&width=' + width + '&height=' + height + '&bbox=' + (bbox == null ? '' : encodeURIComponent(bbox)) + '&view=' + view, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Tile
		 * The Maps API Vector Service delivers vector tiles, which are representations of square sections of map data.
		 * Get map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.pbf
		 * @param {Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguageVersionNumber} versionNumber Version of the service to call. The current version is 1
		 * @param {Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewLayer} layer Layer of tile to be rendered
		 * @param {Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguageStyle} style Style of tile to be rendered
		 * @param {Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguageZoom} zoom Zoom level of tile to be rendered
		 * @param {number} X x coordinate of tile on zoom grid
		 * @param {number} Y y coordinate of tile on zoom grid
		 * @param {Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguageView} view Geopolitical view. Determines rendering of disputed areas. See the <a href="/maps-api/maps-api-documentation-vector/tile">documentation</a> for an explanation of how this works in live services.
		 * @param {string} language Language to be used for labels in the response. The default is NGT: Neutral Ground Truth, which uses each place's local official language and script (where available). See the <a href="/maps-api/maps-api-documentation-vector/tile">documentation</a> for a full list of options.
		 * @return {void} <b>OK</b>
		 */
		Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguage(versionNumber: Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguageVersionNumber, layer: Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewLayer, style: Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguageStyle, zoom: Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguageZoom, X: number, Y: number, view: Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguageView | null | undefined, language: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'map/' + versionNumber + '/tile/' + layer + '/' + style + '/' + zoom + '/' + X + '/' + Y + '.pbf?view=' + view + '&language=' + (language == null ? '' : encodeURIComponent(language)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Tile
		 * The Maps API Raster Service delivers raster tiles, which are representations of square sections of map data.
		 * Get map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.{format}
		 * @param {Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndViewVersionNumber} versionNumber Version of the service to call. The current version is 1.
		 * @param {Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewLayer} layer Layer of tile to be rendered. <em>Hybrid</em> and <em>labels</em> are intended for layering with other data and are only available in <em>png</em> format.
		 * @param {Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewStyle} style Style of tile to be rendered
		 * @param {Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndViewZoom} zoom Zoom level of tile to be rendered
		 * @param {number} X x coordinate of tile on zoom grid
		 * @param {number} Y y coordinate of tile on zoom grid
		 * @param {Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndViewFormat} format Format of the response.
		 * @param {Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndViewTileSize} tileSize Tile dimensions in pixels. <em>512</em> is only available for the <em>main</em> style and <em>basic</em> or <em>labels</em> layers.
		 * @param {Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewView} view Geopolitical view. Determines rendering of disputed areas. See the <a href="/maps-sdk-web/functional-examples#geopolitical-views">documentation</a> for an explanation of how this works in live services.
		 * @return {void} <b>OK</b>
		 */
		Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndView(versionNumber: Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndViewVersionNumber, layer: Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewLayer, style: Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewStyle, zoom: Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndViewZoom, X: number, Y: number, format: Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndViewFormat, tileSize: Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndViewTileSize | null | undefined, view: Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewView | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'map/' + versionNumber + '/tile/' + layer + '/' + style + '/' + zoom + '/' + X + '/' + Y + '.' + format + '?tileSize=' + tileSize + '&view=' + view, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * GetMap
		 * The GetMap call implements the Web Map Service 1.1.1 standard
		 * to access TomTom raster map tiles. This service is described
		 * in the response to the GetCapabilities API call.
		 * Get map/{versionNumber}/wms/
		 * @param {Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionVersionNumber} versionNumber Version of the service to call. The current version is 1
		 * @param {Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionRequest} request Request type
		 * @param {Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionSrs} srs Projection used in describing the <b>bbox</b> EPSG:3857 is
		 * recommended, particularly at higher zoom levels. (Note that
		 * EPSG:3857 is functionally equivalent to EPSG:900913/EPSG:3785)
		 * @param {string} bbox Bounding box in the projection stated in <b>srs</b>
		 * (minLon,minLat,maxLon,maxLat)
		 * @param {number} width Width of the resulting image, in pixels Maximum value is 2048
		 * @param {number} height Height of the resulting image, in pixels Maximum value is 2048
		 * @param {Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionFormat} format Image format to be returned
		 * @param {Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionLayers} layers Map layers requested Currently only the basic layer is available
		 * @param {Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionStyles} styles Map styles to be returned. Currently, no styles are available. This
		 * parameter is present for forward compatibility; it must be used and
		 * left blank.
		 * @param {Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionService} service Service type
		 * @param {Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionVersion} version WMS service version
		 * @return {void} <b>OK</b>
		 */
		Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersion(versionNumber: Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionVersionNumber, request: Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionRequest, srs: Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionSrs, bbox: string, width: number, height: number, format: Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionFormat, layers: Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionLayers, styles: Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionStyles | null | undefined, service: Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionService | null | undefined, version: Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionVersion, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'map/' + versionNumber + '/wms/?request=' + request + '&srs=' + srs + '&bbox=' + (bbox == null ? '' : encodeURIComponent(bbox)) + '&width=' + width + '&height=' + height + '&format=' + format + '&layers=' + layers + '&styles=' + styles + '&service=' + service + '&version=' + version, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * GetCapabilities
		 * The GetCapabilities call is part of TomTom's implementation of version 1.1.1
		 * the Web Map Service (WMS). It provides descriptions of the other calls
		 * that are available in the implementation.
		 * Get map/{versionNumber}/wms//
		 * @param {Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionVersion} version WMS service version
		 * @return {void} <b>OK</b>
		 */
		Map_versionNumberWmsGetByServiceAndRequestAndVersion(versionNumber: Map_versionNumberWmsGetByServiceAndRequestAndVersionVersionNumber, service: Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionService, request: Map_versionNumberWmsGetByServiceAndRequestAndVersionRequest, version: Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionVersion | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'map/' + versionNumber + '/wms//?service=' + service + '&request=' + request + '&version=' + version, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * WMTS
		 * The WMTS GetCapabilities call implements version 1.0.0 of
		 * the <a href="http://www.opengeospatial.org/standards/wmts">Web Map Tile Service</a>
		 * (WMTS) standard. It returns metadata that allows compatible calling systems to construct
		 * calls to TomTom's raster map tile service. See the
		 * <a href="/maps-api/maps-api-documentation-raster/wmts">documentation</a>
		 * for more information on WMTS.
		 * Get map/{versionNumber}/wmts/{key}/{wmtsVersion}/WMTSCapabilities.xml
		 * @param {Map_versionNumberWmts_key_wmtsVersionWMTSCapabilities_xmlGetVersionNumber} versionNumber Version of the service to call. The current version is 1
		 * @param {string} key Your API key for calling this service.
		 * @return {void} <b>OK</b>
		 */
		Map_versionNumberWmts_key_wmtsVersionWMTSCapabilities_xmlGet(versionNumber: Map_versionNumberWmts_key_wmtsVersionWMTSCapabilities_xmlGetVersionNumber, key: string, wmtsVersion: Map_versionNumberWmts_key_wmtsVersionWMTSCapabilities_xmlGetWmtsVersion, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'map/' + versionNumber + '/wmts/' + (key == null ? '' : encodeURIComponent(key)) + '/' + wmtsVersion + '/WMTSCapabilities.xml', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum Map_versionNumberCopyrights__formatGetByCallbackVersionNumber { _1 = 0 }

	export enum Map_versionNumberCopyrights__formatGetByCallbackFormat { json = 'json', jsonp = 'jsonp', xml = 'xml' }

	export enum Map_versionNumberCopyrightsCaption__formatGetByCallbackVersionNumber { _1 = 0 }

	export enum Map_versionNumberCopyrights_minLon_minLat_maxLon_maxLat__formatGetByCallbackVersionNumber { _1 = 0 }

	export enum Map_versionNumberCopyrights_zoom_X_Y__formatGetByCallbackVersionNumber { _1 = 0 }

	export enum Map_versionNumberCopyrights_zoom_X_Y__formatGetByCallbackZoom { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _8 = 8, _9 = 9, _10 = 10, _11 = 11, _12 = 12, _13 = 13, _14 = 14, _15 = 15, _16 = 16, _17 = 17, _18 = 18 }

	export enum Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewVersionNumber { _1 = 0 }

	export enum Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewLayer { basic = 'basic', hybrid = 'hybrid', labels = 'labels' }

	export enum Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewStyle { main = 'main', night = 'night' }

	export enum Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewFormat { png = 'png', jpg = 'jpg', jpeg = 'jpeg' }

	export enum Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewZoom { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _8 = 8, _9 = 9, _10 = 10, _11 = 11, _12 = 12, _13 = 13, _14 = 14, _15 = 15, _16 = 16, _17 = 17, _18 = 18, _19 = 19, _20 = 20, _21 = 21, _22 = 22 }

	export enum Map_versionNumberStaticimageGetByLayerAndStyleAndFormatAndZoomAndCenterAndWidthAndHeightAndBboxAndViewView { Unified = 'Unified', IN = 'IN' }

	export enum Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguageVersionNumber { _1 = 0 }

	export enum Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguageStyle { main = 'main' }

	export enum Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguageZoom { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _8 = 8, _9 = 9, _10 = 10, _11 = 11, _12 = 12, _13 = 13, _14 = 14, _15 = 15, _16 = 16, _17 = 17, _18 = 18, _19 = 19, _20 = 20, _21 = 21, _22 = 22 }

	export enum Map_versionNumberTile_layer_style_zoom_X_Y_pbfGetByViewAndLanguageView { Unified = 'Unified', IL = 'IL', IN = 'IN' }

	export enum Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndViewVersionNumber { _1 = 0 }

	export enum Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndViewZoom { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _8 = 8, _9 = 9, _10 = 10, _11 = 11, _12 = 12, _13 = 13, _14 = 14, _15 = 15, _16 = 16, _17 = 17, _18 = 18, _19 = 19, _20 = 20, _21 = 21, _22 = 22 }

	export enum Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndViewFormat { jpg = 'jpg', png = 'png' }

	export enum Map_versionNumberTile_layer_style_zoom_X_Y__formatGetByTileSizeAndViewTileSize { _256 = 0, _512 = 1 }

	export enum Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionVersionNumber { _1 = 0 }

	export enum Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionRequest { GetMap = 'GetMap' }

	export enum Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionSrs { 'EPSG:3857' = 'EPSG:3857', 'EPSG:4326' = 'EPSG:4326' }

	export enum Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionFormat { 'image/jpeg' = 'image/jpeg', 'image/png' = 'image/png' }

	export enum Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionLayers { basic = 'basic' }

	export enum Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionStyles { '' = '' }

	export enum Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionService { WMS = 'WMS' }

	export enum Map_versionNumberWmsGetByRequestAndSrsAndBboxAndWidthAndHeightAndFormatAndLayersAndStylesAndServiceAndVersionVersion { '1.1.1' = '1.1.1' }

	export enum Map_versionNumberWmsGetByServiceAndRequestAndVersionVersionNumber { _1 = 0 }

	export enum Map_versionNumberWmsGetByServiceAndRequestAndVersionRequest { GetCapabilities = 'GetCapabilities' }

	export enum Map_versionNumberWmts_key_wmtsVersionWMTSCapabilities_xmlGetVersionNumber { _1 = 0 }

	export enum Map_versionNumberWmts_key_wmtsVersionWMTSCapabilities_xmlGetWmtsVersion { '1.0.0' = '1.0.0' }

}

