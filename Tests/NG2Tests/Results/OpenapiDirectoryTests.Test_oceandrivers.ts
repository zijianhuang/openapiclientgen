import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get forecast and realtime information for known points<br/>None
		 * Get v1.0/compareStation/{stationName}/
		 * @param {string} stationName Weather station to compare, values: cnareanl|rcnp | cmsap|boyaenderrocat|areopuertopalma | EWXXX
		 * @return {void} No response was specified
		 */
		CompareStation(stationName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1.0/compareStation/' + (stationName == null ? '' : encodeURIComponent(stationName)) + '/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get data from the aemet stations<br/>None
		 * Get v1.0/getAemetStation/{stationName}/{period}/
		 * @param {string} stationName station name currently: aeropuertopalma | caboblanco 
		 * @param {string} period Period of time to get the data. Options: lastdata lastday
		 * @return {void} No response was specified
		 */
		GetAemetStation(stationName: string, period: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1.0/getAemetStation/' + (stationName == null ? '' : encodeURIComponent(stationName)) + '/' + (period == null ? '' : encodeURIComponent(period)) + '/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get data from the easywind weather stations<br/>None
		 * Get v1.0/getEasyWind/{easywindId}/
		 * @param {string} easywindId currently: 'EW013'|'EW008'
		 * @param {string} period Period of time to get the data latestdata|latesthour|latestday
		 * @return {void} No response was specified
		 */
		GetEasywind(easywindId: string, period: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1.0/getEasyWind/' + (easywindId == null ? '' : encodeURIComponent(easywindId)) + '/&period=' + (period == null ? '' : encodeURIComponent(period)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get stations in an event<br/>None
		 * Get v1.0/getEventStations/{eventId}/
		 * @param {string} eventId currently: 'trofeoprincesasofia|palmavela'
		 * @return {void} No response was specified
		 */
		GetEventStations(eventId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1.0/getEventStations/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get forecast points of a yatchclub<br/>None
		 * Get v1.0/getForecastPoints/{yatchclubid}/language/{language}
		 * @param {string} yatchclubid base URL for the the
		 * @return {void} No response was specified
		 */
		GetForecastPoints(yatchclubid: string, language: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1.0/getForecastPoints/' + (yatchclubid == null ? '' : encodeURIComponent(yatchclubid)) + '/language/' + (language == null ? '' : encodeURIComponent(language)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get timeseries forecast information<br/>None
		 * Get v1.0/getForecastTimeSeries/{latitude}/{longitude}/
		 * @param {number} latitude latitude for the forecast
		 * @param {number} longitude longitude for the forecast
		 * @param {string} inittime initial date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ
		 * @param {string} endtime end date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ
		 * @param {number} days optional number of days in string. Will be added to init forecast date
		 * @param {number} hours optional number of hours in string. Will be added to init forecast date
		 * @param {string} weather  Comma separated values for the weather parameteres temperature,rain,wind_u,wind_v,gust,pressure,cloud,humidity&wave=height,direction,period
		 * @param {string} wave  Comma separated values for the wave parameteres height,direction,period
		 * @param {string} entryid Direct file I want to extract
		 * @return {void} No response was specified
		 */
		GetForecastTimeSeries(latitude: number, longitude: number, inittime: string | null | undefined, endtime: string | null | undefined, days: number | null | undefined, hours: number | null | undefined, weather: string, wave: string | null | undefined, entryid: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1.0/getForecastTimeSeries/' + latitude + '/' + longitude + '/?inittime=' + (inittime == null ? '' : encodeURIComponent(inittime)) + '&endtime=' + (endtime == null ? '' : encodeURIComponent(endtime)) + '&days=' + days + '&hours=' + hours + '&weather=' + (weather == null ? '' : encodeURIComponent(weather)) + '&wave=' + (wave == null ? '' : encodeURIComponent(wave)) + '&entryid=' + (entryid == null ? '' : encodeURIComponent(entryid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get timeseries forecast information<br/>None
		 * Get v1.0/getForecastTimeSeriesWrf/{latitude}/{longitude}/
		 * @param {number} latitude latitude for the forecast
		 * @param {number} longitude longitude for the forecast
		 * @param {string} inittime initial date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ
		 * @param {string} endtime end date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ
		 * @param {number} days optional number of days in string. Will be added to init forecast date
		 * @param {number} hours optional number of hours in string. Will be added to init forecast date
		 * @param {string} weather  Comma separated values for the weather parameteres temperature,rain,wind_u,wind_v,gust,pressure,cloud,humidity&wave=height,direction,period
		 * @param {string} wave  Comma separated values for the wave parameteres height,direction,period
		 * @param {string} entryid Direct file I want to extract
		 * @return {void} No response was specified
		 */
		GetForecastTimeSeriesWrf(latitude: number, longitude: number, inittime: string | null | undefined, endtime: string | null | undefined, days: number | null | undefined, hours: number | null | undefined, weather: string, wave: string | null | undefined, entryid: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1.0/getForecastTimeSeriesWrf/' + latitude + '/' + longitude + '/?inittime=' + (inittime == null ? '' : encodeURIComponent(inittime)) + '&endtime=' + (endtime == null ? '' : encodeURIComponent(endtime)) + '&days=' + days + '&hours=' + hours + '&weather=' + (weather == null ? '' : encodeURIComponent(weather)) + '&wave=' + (wave == null ? '' : encodeURIComponent(wave)) + '&entryid=' + (entryid == null ? '' : encodeURIComponent(entryid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get data from the socib bahia de palma buoy<br/>None
		 * Get v1.0/getSocibWeatherStation/{stationName}/{period}/
		 * @param {string} stationName station name currently: boyaenderrocat | playadepalma
		 * @param {string} period Period of time to get the data. Options: lastdata lasthour lastday
		 * @return {void} No response was specified
		 */
		GetSocibWeatherStation(stationName: string, period: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1.0/getSocibWeatherStation/' + (stationName == null ? '' : encodeURIComponent(stationName)) + '/' + (period == null ? '' : encodeURIComponent(period)) + '/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get data from the weather display software<br/>None
		 * Get v1.0/getWeatherDisplay/{stationName}/
		 * @param {string} stationName currently: 'cnarenal'|'campastilla' | 'cncg'
		 * @param {string} period Period of time to get the data latestdata|latesthour|latestday|dailylog
		 * @return {void} No response was specified
		 */
		GetWeatherDisplay(stationName: string, period: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1.0/getWeatherDisplay/' + (stationName == null ? '' : encodeURIComponent(stationName)) + '/&period=' + (period == null ? '' : encodeURIComponent(period)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get forecast and realtime information for known points<br/>None
		 * Get v1.0/getWebCams/
		 * @return {void} No response was specified
		 */
		GetWebCams(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1.0/getWebCams/', { observe: 'response', responseType: 'text' });
		}
	}

}

