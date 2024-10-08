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
		 * Paginated incidents matching parameters
		 * <p>If you’d like more detailed information about bike incidents, use this endpoint. For mapping, <code>locations</code> is probably a better bet.</p>
		 * <p><strong>Notes on location searching</strong>: <br />
		 * - <code>proximity</code> accepts an ip address, an address, zipcode, city, or latitude,longitude - i.e. <code>70.210.133.87</code>, <code>210 NW 11th Ave, Portland, OR</code>, <code>60647</code>, <code>Chicago, IL</code>, and <code>45.521728,-122.67326</code> are all acceptable<br />
		 * - <code>proximity_square</code> sets the length of the sides of the square to find matches inside of. The square is centered on the location specified by <code>proximity</code>. It defaults to 100.</p>
		 * Get v2/incidents
		 * @param {number} page <p>Page of results to fetch.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} per_page <p>Number of results to return per page.</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} occurred_before <p>End of period</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} occurred_after <p>Start of period</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {GET__version_incidents___format_Incident_type} incident_type <p>Only incidents of specific type</p>
		 * @param {string} proximity <p>Center of location for proximity search</p>
		 * @param {number} proximity_square <p>Size of the proximity search</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} query <p>Full text search of incidents</p>
		 * @return {void} No response was specified
		 */
		GET__version_incidents___format_(page: number | null | undefined, per_page: number | null | undefined, occurred_before: number | null | undefined, occurred_after: number | null | undefined, incident_type: GET__version_incidents___format_Incident_type | null | undefined, proximity: string | null | undefined, proximity_square: number | null | undefined, query: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/incidents?page=' + page + '&per_page=' + per_page + '&occurred_before=' + occurred_before + '&occurred_after=' + occurred_after + '&incident_type=' + incident_type + '&proximity=' + (proximity == null ? '' : encodeURIComponent(proximity)) + '&proximity_square=' + proximity_square + '&query=' + (query == null ? '' : encodeURIComponent(query)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v2/incidents/{id}
		 * @param {number} id <p>Incident ID</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} No response was specified
		 */
		GET__version_incidents__id___format_(id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/incidents/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Unpaginated geojson response
		 * <p><strong>This endpoint behaves exactly like</strong> <code>incidents</code>, but returns a valid geojson <code>FeatureCollection</code> that looks like this:</p>
		 * <pre><code>{
		 * type: "FeatureCollection",
		 * features: [
		 * {
		 * type: "Feature",
		 * properties: {
		 * id: 4474199,
		 * type: "Theft",
		 * occurred_at: 1428536937
		 * },
		 * geometry: {
		 * type: "Point",
		 * coordinates: [ -122.6244177, 45.5164386 ]
		 * }
		 * }
		 * }
		 * </code></pre>
		 * <p>It doesn’t paginate. If you pass the <code>all</code> parameter it returns all matches (which can be big, &gt; 4mb), otherwise it returns the 100 most recent.</p>
		 * <p><strong>Go forth and make maps!</strong></p>
		 * Get v2/locations
		 * @param {number} occurred_before <p>End of period</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} occurred_after <p>Start of period</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {GET__version_incidents___format_Incident_type} incident_type <p>Only incidents of specific type</p>
		 * @param {string} proximity <p>Center of location for proximity search</p>
		 * @param {number} proximity_square <p>Size of the proximity search</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} query <p>Full text search of incidents</p>
		 * @param {number} limit <p>Max number of results to return. Defaults to 100</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} all <p>Give ‘em all to me. Will ignore limit</p>
		 * @return {void} No response was specified
		 */
		GET__version_locations___format_(occurred_before: number | null | undefined, occurred_after: number | null | undefined, incident_type: GET__version_incidents___format_Incident_type | null | undefined, proximity: string | null | undefined, proximity_square: number | null | undefined, query: string | null | undefined, limit: number | null | undefined, all: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/locations?occurred_before=' + occurred_before + '&occurred_after=' + occurred_after + '&incident_type=' + incident_type + '&proximity=' + (proximity == null ? '' : encodeURIComponent(proximity)) + '&proximity_square=' + proximity_square + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&limit=' + limit + '&all=' + all, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Unpaginated geojson response with simplestyled markers
		 * <p>This behaves exactly like the root <code>locations</code> endpoint, but returns <a href="https://github.com/mapbox/simplestyle-spec">simplestyled markers</a> (<a href="https://www.mapbox.com/guides/markers/#simple-style">mapbox styled markers</a>)</p>
		 * <p><strong>Go forth and make maps!</strong></p>
		 * Get v2/locations/markers
		 * @param {number} occurred_before <p>End of period</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} occurred_after <p>Start of period</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {GET__version_incidents___format_Incident_type} incident_type <p>Only incidents of specific type</p>
		 * @param {string} proximity <p>Center of location for proximity search</p>
		 * @param {number} proximity_square <p>Size of the proximity search</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} query <p>Full text search of incidents</p>
		 * @param {number} limit <p>Max number of results to return. Defaults to 100</p>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} all <p>Give ‘em all to me. Will ignore limit</p>
		 * @return {void} No response was specified
		 */
		GET__version_locations_markers___format_(occurred_before: number | null | undefined, occurred_after: number | null | undefined, incident_type: GET__version_incidents___format_Incident_type | null | undefined, proximity: string | null | undefined, proximity_square: number | null | undefined, query: string | null | undefined, limit: number | null | undefined, all: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/locations/markers?occurred_before=' + occurred_before + '&occurred_after=' + occurred_after + '&incident_type=' + incident_type + '&proximity=' + (proximity == null ? '' : encodeURIComponent(proximity)) + '&proximity_square=' + proximity_square + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&limit=' + limit + '&all=' + all, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET__version_incidents___format_Incident_type { crash = 'crash', hazard = 'hazard', theft = 'theft', unconfirmed = 'unconfirmed', infrastructure_issue = 'infrastructure_issue', chop_shop = 'chop_shop' }

}

