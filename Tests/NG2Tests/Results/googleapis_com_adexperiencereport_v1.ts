import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A site's Ad Experience Report summary on a single platform. */
	export interface PlatformSummary {

		/** The site's Ad Experience Report status on this platform. */
		betterAdsStatus?: PlatformSummaryBetterAdsStatus | null;

		/**
		 * The time at which
		 * [enforcement](https://support.google.com/webtools/answer/7308033) against
		 * the site began or will begin on this platform.
		 * Not set when the
		 * filter_status
		 * is OFF.
		 */
		enforcementTime?: string | null;

		/**
		 * The site's [enforcement
		 * status](https://support.google.com/webtools/answer/7308033) on this
		 * platform.
		 */
		filterStatus?: PlatformSummaryFilterStatus | null;

		/** The time at which the site's status last changed on this platform. */
		lastChangeTime?: string | null;

		/**
		 * The site's regions on this platform.
		 * No longer populated, because there is no longer any semantic difference
		 * between sites in different regions.
		 */
		region?: Array<string>;

		/**
		 * A link to the full Ad Experience Report for the site on this platform..
		 * Not set in
		 * ViolatingSitesResponse.
		 * Note that you must complete the [Search Console verification
		 * process](https://support.google.com/webmasters/answer/9008080) for the site
		 * before you can access the full report.
		 */
		reportUrl?: string | null;

		/** Whether the site is currently under review on this platform. */
		underReview?: boolean | null;
	}

	/** A site's Ad Experience Report summary on a single platform. */
	export interface PlatformSummaryFormProperties {

		/** The site's Ad Experience Report status on this platform. */
		betterAdsStatus: FormControl<PlatformSummaryBetterAdsStatus | null | undefined>,

		/**
		 * The time at which
		 * [enforcement](https://support.google.com/webtools/answer/7308033) against
		 * the site began or will begin on this platform.
		 * Not set when the
		 * filter_status
		 * is OFF.
		 */
		enforcementTime: FormControl<string | null | undefined>,

		/**
		 * The site's [enforcement
		 * status](https://support.google.com/webtools/answer/7308033) on this
		 * platform.
		 */
		filterStatus: FormControl<PlatformSummaryFilterStatus | null | undefined>,

		/** The time at which the site's status last changed on this platform. */
		lastChangeTime: FormControl<string | null | undefined>,

		/**
		 * A link to the full Ad Experience Report for the site on this platform..
		 * Not set in
		 * ViolatingSitesResponse.
		 * Note that you must complete the [Search Console verification
		 * process](https://support.google.com/webmasters/answer/9008080) for the site
		 * before you can access the full report.
		 */
		reportUrl: FormControl<string | null | undefined>,

		/** Whether the site is currently under review on this platform. */
		underReview: FormControl<boolean | null | undefined>,
	}
	export function CreatePlatformSummaryFormGroup() {
		return new FormGroup<PlatformSummaryFormProperties>({
			betterAdsStatus: new FormControl<PlatformSummaryBetterAdsStatus | null | undefined>(undefined),
			enforcementTime: new FormControl<string | null | undefined>(undefined),
			filterStatus: new FormControl<PlatformSummaryFilterStatus | null | undefined>(undefined),
			lastChangeTime: new FormControl<string | null | undefined>(undefined),
			reportUrl: new FormControl<string | null | undefined>(undefined),
			underReview: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PlatformSummaryBetterAdsStatus { UNKNOWN = 0, PASSING = 1, WARNING = 2, FAILING = 3 }

	export enum PlatformSummaryFilterStatus { UNKNOWN = 0, ON = 1, OFF = 2, PAUSED = 3, PENDING = 4 }


	/** Response message for GetSiteSummary. */
	export interface SiteSummaryResponse {

		/** A site's Ad Experience Report summary on a single platform. */
		desktopSummary?: PlatformSummary;

		/** A site's Ad Experience Report summary on a single platform. */
		mobileSummary?: PlatformSummary;

		/** The name of the reviewed site, e.g. `google.com`. */
		reviewedSite?: string | null;
	}

	/** Response message for GetSiteSummary. */
	export interface SiteSummaryResponseFormProperties {

		/** The name of the reviewed site, e.g. `google.com`. */
		reviewedSite: FormControl<string | null | undefined>,
	}
	export function CreateSiteSummaryResponseFormGroup() {
		return new FormGroup<SiteSummaryResponseFormProperties>({
			reviewedSite: new FormControl<string | null | undefined>(undefined),
		});

	}


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
		 * Lists sites that are failing in the Ad Experience Report on at least one
		 * platform.
		 * Get v1/violatingSites
		 * @return {void} Successful response
		 */
		Adexperiencereport_violatingSites_list(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/violatingSites', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a site's Ad Experience Report summary.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the site whose summary to get, e.g.
		 * `sites/http%3A%2F%2Fwww.google.com%2F`.
		 * Format: `sites/{site}`
		 * @return {void} Successful response
		 */
		Adexperiencereport_sites_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}
	}

}

