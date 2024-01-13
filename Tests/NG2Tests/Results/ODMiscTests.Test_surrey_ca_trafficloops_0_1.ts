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
		 * Provides traffic loop counts for the input time interval. The LOOP_ID and DATETIME combinations are unique in the output. The output timestamp will contain the time zone offset, either -08 (PST) or -07 (PDT) depending on whether daylight savings time was observed at the output datetime. In order to work with local time you may omit the time zone offset from the input and truncate it from the output.
		 * Get TrafficLoopCounts.fmw
		 * @param {number} startdatetime Beginning of the required date/time range in ISO 8601. For example March 24 2016 at 1:00 PM Pacific Standard Time would be 2016-03-24T13:00:00-08.
		 * @param {number} enddatetime End of the required date/time range. For details see the startdatetime parameter.
		 * @return {void} City of Surrey Traffic Loop Counts
		 */
		CountsGetByStartdatetimeAndEnddatetime(startdatetime: number | null | undefined, enddatetime: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'TrafficLoopCounts.fmw?startdatetime=' + startdatetime + '&enddatetime=' + enddatetime, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Provides all the traffic loops maintained by the City of Surrey in GeoJSON format. LANE_DIRECTION indicates the heading of the traffic (NB, SB, EB, WB). INTERSECTION_ID corresponds to the INTID field in the intersections dataset which can be found on the Surrey Open Data site. ROAD_FACILITYID indicates which road segment the loop is located on.  This corresponds to the FACILITYID in the Road Centrelines dataset on the City of Surrey Open Data site.
		 * Get TrafficLoops.fmw
		 * @param {number} proj_epsg The output projection EPSG code.  Eg. WGS84 is 4326 and NAD 83 UTM Zone 10 is 26910.  If this is left blank, the default is 4326.  For more on EPSG codes please see http://spatialreference.org/
		 * @return {void} City of Surrey Traffic Loops
		 */
		LoopsGetByProj_epsg(proj_epsg: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'TrafficLoops.fmw?proj_epsg=' + proj_epsg, { observe: 'response', responseType: 'text' });
		}
	}

}

