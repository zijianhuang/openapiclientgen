import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Response message for GetSiteSummary. */
	export interface SiteSummaryResponse {

		/** The site's Abusive Experience Report status. */
		abusiveStatus?: SiteSummaryResponseAbusiveStatus;

		/**
		 * The time at which
		 * [enforcement](https://support.google.com/webtools/answer/7538608) against
		 * the site began or will begin.
		 * Not set when the
		 * filter_status
		 * is OFF.
		 */
		enforcementTime?: string;

		/**
		 * The site's [enforcement
		 * status](https://support.google.com/webtools/answer/7538608).
		 */
		filterStatus?: SiteSummaryResponseFilterStatus;

		/** The time at which the site's status last changed. */
		lastChangeTime?: string;

		/**
		 * A link to the full Abusive Experience Report for the site.
		 * Not set in
		 * ViolatingSitesResponse.
		 * Note that you must complete the [Search Console verification
		 * process](https://support.google.com/webmasters/answer/9008080) for the site
		 * before you can access the full report.
		 */
		reportUrl?: string;

		/** The name of the reviewed site, e.g. `google.com`. */
		reviewedSite?: string;

		/** Whether the site is currently under review. */
		underReview?: boolean;
	}

	export enum SiteSummaryResponseAbusiveStatus { UNKNOWN = 0, PASSING = 1, FAILING = 2 }

	export enum SiteSummaryResponseFilterStatus { UNKNOWN = 0, ON = 1, OFF = 2, PAUSED = 3, PENDING = 4 }


	/** Response message for ListViolatingSites. */
	export interface ViolatingSitesResponse {

		/** The list of violating sites. */
		violatingSites?: Array<SiteSummaryResponse>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists sites that are failing in the Abusive Experience Report.
		 * Get v1/violatingSites
		 * @return {void} Successful response
		 */
		Abusiveexperiencereport_violatingSites_list(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/violatingSites', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a site's Abusive Experience Report summary.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the site whose summary to get, e.g.
		 * `sites/http%3A%2F%2Fwww.google.com%2F`.
		 * Format: `sites/{site}`
		 * @return {void} Successful response
		 */
		Abusiveexperiencereport_sites_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}
	}

}

