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
		 * getArrivalsAndDeparturesByCRS is used to get a list of services arriving to and departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
		 * Get getArrivalsAndDeparturesByCRS/{CRS}
		 * @param {string} CRS The CRS (Computer Reservation System) for the Station you wish to get departure and arrival information for, e.g. KGX for London Kings Cross.
		 *     Min length: 3    Max length: 3
		 * @param {string} apiKey The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.
		 * @param {number} numServices The number of arriving and departing services to return. This is a maximum value, less may be returned if there is not a sufficient amount of services arriving to or departing from this station within the time window specified.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} timeOffset The time window in minutes to offset the arrival and departure information by. For example, a value of 20 will not show services arriving to or departing from the station within the next 20 minutes.
		 *     Minimum: -239    Maximum: 119
		 * @param {number} timeWindow The time window in minutes to offset the arrival and departure information by. For example, a value of 20 will not show services arriving to or departing from the selected station within the next 20 minutes.
		 *     Minimum: 0
		 * @param {boolean} serviceDetails Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.
		 * @param {string} filterStation The CRS (Computer Reservation System) code to filter the results by. When setting this you must also set the filterType parameter. For example, performing a lookup for PAD (London Paddington) and setting filterStation to RED (Reading) and filterType to from, will only show services arriving to London Paddington that stopped at Reading. Setting a filter for getArrivalsAndDeparturesByCRS is similar to performing a getArrivalsByCRS or getDeparturesByCRS lookup, with the appropriate filterStation parameter. However using the getArrivalsAndDeparturesByCRS endpoint shows more details for each of the returned services.
		 * @param {string} filterType Determines if the filterStation parameter should be applied for services arriving to, or leaving from the selected station. Required if filterStation is set.
		 * @return {void} **OK**: The API Request was successful and returned data.
		 */
		GetArrivalsAndDeparturesByCRS(CRS: string, apiKey: string, numServices: number | null | undefined, timeOffset: number | null | undefined, timeWindow: number | null | undefined, serviceDetails: boolean | null | undefined, filterStation: string | null | undefined, filterType: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'getArrivalsAndDeparturesByCRS/' + (CRS == null ? '' : encodeURIComponent(CRS)) + '&apiKey=' + (apiKey == null ? '' : encodeURIComponent(apiKey)) + '&numServices=' + numServices + '&timeOffset=' + timeOffset + '&timeWindow=' + timeWindow + '&serviceDetails=' + serviceDetails + '&filterStation=' + (filterStation == null ? '' : encodeURIComponent(filterStation)) + '&filterType=' + (filterType == null ? '' : encodeURIComponent(filterType)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * getArrivalsByCRS is used to get a list of services arriving to a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
		 * Get getArrivalsByCRS/{CRS}
		 * @param {string} CRS The CRS (Computer Reservation System) for the Station you wish to get arrival information for, e.g. KGX for London Kings Cross.
		 *     Min length: 3    Max length: 3
		 * @param {string} apiKey The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.
		 * @param {number} numServices The number of arriving train services to return. This is a maximum value, less may be returned if there is not a sufficient amount of services running to this station within the time window specified.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} timeOffset The time window in minutes to offset the arrival information by. For example, a value of 20 will not show services arriving within the next 20 minutes.
		 *     Minimum: -239    Maximum: 119
		 * @param {number} timeWindow The time window to show train services for in minutes. For example, a value of 60 will show services arriving to the station in the next 60 minutes.
		 *     Minimum: 0
		 * @param {boolean} serviceDetails Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.
		 * @param {string} filterStation The CRS (Computer Reservation System) code to filter the results by. For example, performing a lookup for PAD (London Paddington) and setting filterStation to RED (Reading), will only show services arriving to Paddington that stopped at Reading.
		 * @return {void} **OK**: The API Request was successful and returned data.
		 */
		GetArrivalsByCRS(CRS: string, apiKey: string, numServices: number | null | undefined, timeOffset: number | null | undefined, timeWindow: number | null | undefined, serviceDetails: boolean | null | undefined, filterStation: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'getArrivalsByCRS/' + (CRS == null ? '' : encodeURIComponent(CRS)) + '&apiKey=' + (apiKey == null ? '' : encodeURIComponent(apiKey)) + '&numServices=' + numServices + '&timeOffset=' + timeOffset + '&timeWindow=' + timeWindow + '&serviceDetails=' + serviceDetails + '&filterStation=' + (filterStation == null ? '' : encodeURIComponent(filterStation)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * getDeparturesByCRS is used to get a list of services departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
		 * Get getDeparturesByCRS/{CRS}
		 * @param {string} CRS The CRS (Computer Reservation System) for the station you wish to get departure information for, e.g. KGX for London Kings Cross.
		 *     Min length: 3    Max length: 3
		 * @param {string} apiKey The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.
		 * @param {number} numServices The number of departing services to return. This is a maximum value, less may be returned if there is not a sufficient amount of services running from the selected station within the time window specified.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} timeOffset The time window in minutes to offset the departure information by. For example, a value of 20 will not show services departing within the next 20 minutes.
		 *     Minimum: -239    Maximum: 119
		 * @param {number} timeWindow The time window to show services for in minutes. For example, a value of 60 will show services departing the station in the next 60 minutes.
		 *     Minimum: 0
		 * @param {boolean} serviceDetails Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.
		 * @param {string} filterStation The CRS (Computer Reservation System) code to filter the results by. For example, performing a lookup for PAD (London Paddington) and setting filterStation to RED (Reading), will only show services departing from Paddington that stop at Reading.
		 * @return {void} **OK**: The API Request was successful and returned data.
		 */
		GetDeparturesByCRS(CRS: string, apiKey: string, numServices: number | null | undefined, timeOffset: number | null | undefined, timeWindow: number | null | undefined, serviceDetails: boolean | null | undefined, filterStation: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'getDeparturesByCRS/' + (CRS == null ? '' : encodeURIComponent(CRS)) + '&apiKey=' + (apiKey == null ? '' : encodeURIComponent(apiKey)) + '&numServices=' + numServices + '&timeOffset=' + timeOffset + '&timeWindow=' + timeWindow + '&serviceDetails=' + serviceDetails + '&filterStation=' + (filterStation == null ? '' : encodeURIComponent(filterStation)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * getFastestDeparturesByCRS is used to get the fastest next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place.
		 * Get getFastestDeparturesByCRS/{CRS}
		 * @param {string} CRS The CRS (Computer Reservation System) for the station you wish to get departure information for, e.g. KGX for London Kings Cross.
		 *     Min length: 3    Max length: 3
		 * @param {string} apiKey The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.
		 * @param {string} filterList The CRS (Computer Reservation System) codes to show the fastest departing services to. Up to 20 destination stations can be specified. These should be split by a comma, for example HAY,EAL,PAD.
		 * @param {number} timeOffset The time window in minutes to offset the departure information by. For example, a value of 20 will show the fastest services departing after 20 minutes.
		 *     Minimum: -239    Maximum: 119
		 * @param {number} timeWindow The time window to show train services for in minutes. For example, a value of 60 will show the fastest services departing the station in the next 60 minutes.
		 *     Minimum: 0
		 * @param {boolean} serviceDetails Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.
		 * @return {void} **OK**: The API Request was successful and returned data.
		 */
		GetFastestDeparturesByCRS(CRS: string, apiKey: string, filterList: string, timeOffset: number | null | undefined, timeWindow: number | null | undefined, serviceDetails: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'getFastestDeparturesByCRS/' + (CRS == null ? '' : encodeURIComponent(CRS)) + '&apiKey=' + (apiKey == null ? '' : encodeURIComponent(apiKey)) + '&filterList=' + (filterList == null ? '' : encodeURIComponent(filterList)) + '&timeOffset=' + timeOffset + '&timeWindow=' + timeWindow + '&serviceDetails=' + serviceDetails, { observe: 'response', responseType: 'text' });
		}

		/**
		 * getNextDeparturesByCRS is used to get the next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place. This will return the next departures for each of the filterList stations specified. It may not return the fastest next service. To get the fastest next service use the getFastestDeparturesByCRS endpoint.
		 * Get getNextDeparturesByCRS/{CRS}
		 * @param {string} CRS The CRS (Computer Reservation System) for the station you wish to get departure information for, e.g. KGX for London Kings Cross.
		 *     Min length: 3    Max length: 3
		 * @param {string} apiKey The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.
		 * @param {string} filterList The CRS (Computer Reservation System) codes to show departing services to. Up to 20 destination stations can be specified. These should be split by a comma, for example HAY,EAL,PAD.
		 * @param {number} timeOffset The time window in minutes to offset the arrival and departure information by. For example, a value of 20 will not show services arriving to or departing from the station within the next 20 minutes.
		 *     Minimum: -239    Maximum: 119
		 * @param {number} timeWindow The time window in minutes to offset the arrival and departure information by. For example, a value of 20 will not show services arriving to or departing from the selected station within the next 20 minutes.
		 *     Minimum: 0
		 * @param {boolean} serviceDetails Should the response contain information on the calling points for each service? If set to false, calling points will not be returned.
		 * @return {void} **OK**: The API Request was successful and returned data.
		 */
		GetNextDeparturesByCRS(CRS: string, apiKey: string, filterList: string, timeOffset: number | null | undefined, timeWindow: number | null | undefined, serviceDetails: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'getNextDeparturesByCRS/' + (CRS == null ? '' : encodeURIComponent(CRS)) + '&apiKey=' + (apiKey == null ? '' : encodeURIComponent(apiKey)) + '&filterList=' + (filterList == null ? '' : encodeURIComponent(filterList)) + '&timeOffset=' + timeOffset + '&timeWindow=' + timeWindow + '&serviceDetails=' + serviceDetails, { observe: 'response', responseType: 'text' });
		}

		/**
		 * getServiceDetailsByID is used to get information on a service, by the Service ID. This will typically return a train service, but will also return a bus and ferry services. The Service ID must be provided in the serviceIDUrlSafe format that is provided in the response for Arrival and Departure Boards. A service ID is specific to a station, and can only be looked up for a short time after a train/bus/ferry arrives at, or departs from a station. This is a National Rail limitation.
		 * Get getServiceDetailsByID/{serviceID}
		 * @param {string} serviceID The Service ID for the Train Service you wish to look up in the URL Safe format. For example "qsec4O8LW7k8ITcOt_ir4Q--".
		 * @param {string} apiKey The National Rail OpenLDBWS API Key to use for looking up service information. You must register with National Rail to obtain this key and whitelist it with us. See https://api.departureboard.io/docs/registration for more information.
		 * @return {void} **OK**: The API Request was successful and returned data.
		 */
		GetServiceDetailsByID(serviceID: string, apiKey: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'getServiceDetailsByID/' + (serviceID == null ? '' : encodeURIComponent(serviceID)) + '&apiKey=' + (apiKey == null ? '' : encodeURIComponent(apiKey)), { observe: 'response', responseType: 'text' });
		}
	}

}

