import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Response message for GetSiteSummary. */
	export interface SiteSummaryResponse {

		/** The site's Abusive Experience Report status. */
		abusiveStatus?: SiteSummaryResponseAbusiveStatus | null;

		/** The time at which [enforcement](https://support.google.com/webtools/answer/7538608) against the site began or will begin. Not set when the filter_status is OFF. */
		enforcementTime?: string | null;

		/** The site's [enforcement status](https://support.google.com/webtools/answer/7538608). */
		filterStatus?: SiteSummaryResponseFilterStatus | null;

		/** The time at which the site's status last changed. */
		lastChangeTime?: string | null;

		/** A link to the full Abusive Experience Report for the site. Not set in ViolatingSitesResponse. Note that you must complete the [Search Console verification process](https://support.google.com/webmasters/answer/9008080) for the site before you can access the full report. */
		reportUrl?: string | null;

		/** The name of the reviewed site, e.g. `google.com`. */
		reviewedSite?: string | null;

		/** Whether the site is currently under review. */
		underReview?: boolean | null;
	}

	/** Response message for GetSiteSummary. */
	export interface SiteSummaryResponseFormProperties {

		/** The site's Abusive Experience Report status. */
		abusiveStatus: FormControl<SiteSummaryResponseAbusiveStatus | null | undefined>,

		/** The time at which [enforcement](https://support.google.com/webtools/answer/7538608) against the site began or will begin. Not set when the filter_status is OFF. */
		enforcementTime: FormControl<string | null | undefined>,

		/** The site's [enforcement status](https://support.google.com/webtools/answer/7538608). */
		filterStatus: FormControl<SiteSummaryResponseFilterStatus | null | undefined>,

		/** The time at which the site's status last changed. */
		lastChangeTime: FormControl<string | null | undefined>,

		/** A link to the full Abusive Experience Report for the site. Not set in ViolatingSitesResponse. Note that you must complete the [Search Console verification process](https://support.google.com/webmasters/answer/9008080) for the site before you can access the full report. */
		reportUrl: FormControl<string | null | undefined>,

		/** The name of the reviewed site, e.g. `google.com`. */
		reviewedSite: FormControl<string | null | undefined>,

		/** Whether the site is currently under review. */
		underReview: FormControl<boolean | null | undefined>,
	}
	export function CreateSiteSummaryResponseFormGroup() {
		return new FormGroup<SiteSummaryResponseFormProperties>({
			abusiveStatus: new FormControl<SiteSummaryResponseAbusiveStatus | null | undefined>(undefined),
			enforcementTime: new FormControl<string | null | undefined>(undefined),
			filterStatus: new FormControl<SiteSummaryResponseFilterStatus | null | undefined>(undefined),
			lastChangeTime: new FormControl<string | null | undefined>(undefined),
			reportUrl: new FormControl<string | null | undefined>(undefined),
			reviewedSite: new FormControl<string | null | undefined>(undefined),
			underReview: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum SiteSummaryResponseAbusiveStatus { UNKNOWN = 0, PASSING = 1, FAILING = 2 }

	export enum SiteSummaryResponseFilterStatus { UNKNOWN = 0, ON = 1, OFF = 2, PAUSED = 3, PENDING = 4 }


	/** Response message for ListViolatingSites. */
	export interface ViolatingSitesResponse {

		/** The list of violating sites. */
		violatingSites?: Array<SiteSummaryResponse>;
	}

	/** Response message for ListViolatingSites. */
	export interface ViolatingSitesResponseFormProperties {
	}
	export function CreateViolatingSitesResponseFormGroup() {
		return new FormGroup<ViolatingSitesResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists sites that are failing in the Abusive Experience Report.
		 * Get v1/violatingSites
		 * @return {ViolatingSitesResponse} Successful response
		 */
		Abusiveexperiencereport_violatingSites_list(): Observable<ViolatingSitesResponse> {
			return this.http.get<ViolatingSitesResponse>(this.baseUri + 'v1/violatingSites', {});
		}

		/**
		 * Gets a site's Abusive Experience Report summary.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the site whose summary to get, e.g. `sites/http%3A%2F%2Fwww.google.com%2F`. Format: `sites/{site}`
		 * @return {SiteSummaryResponse} Successful response
		 */
		Abusiveexperiencereport_sites_get(name: string): Observable<SiteSummaryResponse> {
			return this.http.get<SiteSummaryResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}
	}

}

