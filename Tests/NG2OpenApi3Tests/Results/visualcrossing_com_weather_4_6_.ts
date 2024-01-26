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
		 * Historical and Forecast Weather API
		 * Seamless access to daily and hourly historical and forecast weather data plus weather alerts, events and current conditions.
		 * Get VisualCrossingWebServices/rest/services/timeline/{location}
		 * @param {string} location Locaton of interest as an address, partial address or decimal latitude,longtude value
		 * @param {string} contentType data format of the output either json or CSV
		 * @param {string} include data to include in the output (required for CSV format - days,hours,alerts,current,events )
		 * @param {string} lang Language to use for weather descriptions
		 * @return {void} Auto generated using Swagger Inspector
		 */
		Timeline_Weather_API_15_day_forecast_requestGetByLocationAndContentTypeAndUnitGroupAndIncludeAndLangAndKey(location: string, contentType: string | null | undefined, unitGroup: string | null | undefined, include: string | null | undefined, lang: string | null | undefined, key: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'VisualCrossingWebServices/rest/services/timeline/' + (location == null ? '' : encodeURIComponent(location)) + '&contentType=' + (contentType == null ? '' : encodeURIComponent(contentType)) + '&unitGroup=' + (unitGroup == null ? '' : encodeURIComponent(unitGroup)) + '&include=' + (include == null ? '' : encodeURIComponent(include)) + '&lang=' + (lang == null ? '' : encodeURIComponent(lang)) + '&key=' + (key == null ? '' : encodeURIComponent(key)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Historical and Forecast Weather API
		 * Seamless access to daily and hourly historical and forecast weather data plus weather alerts, events and current conditions.
		 * Get VisualCrossingWebServices/rest/services/timeline/{location}/{startdate}
		 * @param {string} contentType data format of the output either json or CSV
		 * @param {string} include data to include in the output (required for CSV format - days,hours,alerts,current,events )
		 * @param {string} lang Language to use for weather descriptions
		 * @return {void} Auto generated using Swagger Inspector
		 */
		Timeline_Weather_API_single_date_requestGetByLocationAndStartdateAndContentTypeAndUnitGroupAndIncludeAndLangAndKey(location: string, startdate: string, contentType: string | null | undefined, unitGroup: string | null | undefined, include: string | null | undefined, lang: string | null | undefined, key: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'VisualCrossingWebServices/rest/services/timeline/' + (location == null ? '' : encodeURIComponent(location)) + '/' + (startdate == null ? '' : encodeURIComponent(startdate)) + '&contentType=' + (contentType == null ? '' : encodeURIComponent(contentType)) + '&unitGroup=' + (unitGroup == null ? '' : encodeURIComponent(unitGroup)) + '&include=' + (include == null ? '' : encodeURIComponent(include)) + '&lang=' + (lang == null ? '' : encodeURIComponent(lang)) + '&key=' + (key == null ? '' : encodeURIComponent(key)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Historical and Forecast Weather API
		 * Seamless access to daily and hourly historical and forecast weather data plus weather alerts, events and current conditions.
		 * Get VisualCrossingWebServices/rest/services/timeline/{location}/{startdate}/{enddate}
		 * @param {string} contentType data format of the output either json or CSV
		 * @param {string} include data to include in the output (required for CSV format - days,hours,alerts,current,events )
		 * @param {string} lang Language to use for weather descriptions
		 * @return {void} Auto generated using Swagger Inspector
		 */
		Timeline_Weather_API_date_range_requestGetByLocationAndStartdateAndEnddateAndContentTypeAndUnitGroupAndIncludeAndLangAndKey(location: string, startdate: string, enddate: string, contentType: string | null | undefined, unitGroup: string | null | undefined, include: string | null | undefined, lang: string | null | undefined, key: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'VisualCrossingWebServices/rest/services/timeline/' + (location == null ? '' : encodeURIComponent(location)) + '/' + (startdate == null ? '' : encodeURIComponent(startdate)) + '/' + (enddate == null ? '' : encodeURIComponent(enddate)) + '&contentType=' + (contentType == null ? '' : encodeURIComponent(contentType)) + '&unitGroup=' + (unitGroup == null ? '' : encodeURIComponent(unitGroup)) + '&include=' + (include == null ? '' : encodeURIComponent(include)) + '&lang=' + (lang == null ? '' : encodeURIComponent(lang)) + '&key=' + (key == null ? '' : encodeURIComponent(key)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Weather Forecast API
		 * Provides access to weather forecast information. The forecast is available for up to 15 days at the hourly, 12 hour and daily summary level.
		 * Get VisualCrossingWebServices/rest/services/weatherdata/forecast
		 * @return {void} Auto generated using Swagger Inspector
		 */
		Weather_ForecastGetBySendAsDatasourceAndAllowAsynchAndShortColumnNamesAndLocationsAndAggregateHoursAndContentTypeAndUnitGroupAndKey(sendAsDatasource: boolean | null | undefined, allowAsynch: boolean | null | undefined, shortColumnNames: boolean | null | undefined, locations: string | null | undefined, aggregateHours: string | null | undefined, contentType: string | null | undefined, unitGroup: string | null | undefined, key: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'VisualCrossingWebServices/rest/services/weatherdata/forecast?sendAsDatasource=' + sendAsDatasource + '&allowAsynch=' + allowAsynch + '&shortColumnNames=' + shortColumnNames + '&locations=' + (locations == null ? '' : encodeURIComponent(locations)) + '&aggregateHours=' + (aggregateHours == null ? '' : encodeURIComponent(aggregateHours)) + '&contentType=' + (contentType == null ? '' : encodeURIComponent(contentType)) + '&unitGroup=' + (unitGroup == null ? '' : encodeURIComponent(unitGroup)) + '&key=' + (key == null ? '' : encodeURIComponent(key)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves hourly or daily historical weather records.
		 * The weather history data is suitable for retrieving hourly or daily historical weather records.
		 * Get VisualCrossingWebServices/rest/services/weatherdata/history
		 * @return {void} Auto generated using Swagger Inspector
		 */
		Historical_WeatherGetByMaxDistanceAndShortColumnNamesAndEndDateTimeAndAggregateHoursAndCollectStationContributionsAndStartDateTimeAndMaxStationsAndAllowAsynchAndLocationsAndIncludeNormalsAndContentTypeAndUnitGroupAndKey(maxDistance: string | null | undefined, shortColumnNames: boolean | null | undefined, endDateTime: string | null | undefined, aggregateHours: string | null | undefined, collectStationContributions: boolean | null | undefined, startDateTime: string | null | undefined, maxStations: string | null | undefined, allowAsynch: boolean | null | undefined, locations: string | null | undefined, includeNormals: boolean | null | undefined, contentType: string | null | undefined, unitGroup: string | null | undefined, key: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'VisualCrossingWebServices/rest/services/weatherdata/history?maxDistance=' + (maxDistance == null ? '' : encodeURIComponent(maxDistance)) + '&shortColumnNames=' + shortColumnNames + '&endDateTime=' + (endDateTime == null ? '' : encodeURIComponent(endDateTime)) + '&aggregateHours=' + (aggregateHours == null ? '' : encodeURIComponent(aggregateHours)) + '&collectStationContributions=' + collectStationContributions + '&startDateTime=' + (startDateTime == null ? '' : encodeURIComponent(startDateTime)) + '&maxStations=' + (maxStations == null ? '' : encodeURIComponent(maxStations)) + '&allowAsynch=' + allowAsynch + '&locations=' + (locations == null ? '' : encodeURIComponent(locations)) + '&includeNormals=' + includeNormals + '&contentType=' + (contentType == null ? '' : encodeURIComponent(contentType)) + '&unitGroup=' + (unitGroup == null ? '' : encodeURIComponent(unitGroup)) + '&key=' + (key == null ? '' : encodeURIComponent(key)), { observe: 'response', responseType: 'text' });
		}
	}

}

