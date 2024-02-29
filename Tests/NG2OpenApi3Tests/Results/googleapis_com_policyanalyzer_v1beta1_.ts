import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GoogleCloudPolicyanalyzerV1beta1Activity {

		/** A struct of custom fields to explain the activity. */
		activity?: {[id: string]: any };

		/** The type of the activity. */
		activityType?: string | null;

		/** The full resource name that identifies the resource. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. */
		fullResourceName?: string | null;

		/** Represents data observation period. */
		observationPeriod?: GoogleCloudPolicyanalyzerV1beta1ObservationPeriod;
	}
	export interface GoogleCloudPolicyanalyzerV1beta1ActivityFormProperties {

		/** A struct of custom fields to explain the activity. */
		activity: FormControl<{[id: string]: any } | null | undefined>,

		/** The type of the activity. */
		activityType: FormControl<string | null | undefined>,

		/** The full resource name that identifies the resource. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. */
		fullResourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPolicyanalyzerV1beta1ActivityFormGroup() {
		return new FormGroup<GoogleCloudPolicyanalyzerV1beta1ActivityFormProperties>({
			activity: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			activityType: new FormControl<string | null | undefined>(undefined),
			fullResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents data observation period. */
	export interface GoogleCloudPolicyanalyzerV1beta1ObservationPeriod {

		/** The observation end time. */
		endTime?: string | null;

		/** The observation start time. */
		startTime?: string | null;
	}

	/** Represents data observation period. */
	export interface GoogleCloudPolicyanalyzerV1beta1ObservationPeriodFormProperties {

		/** The observation end time. */
		endTime: FormControl<string | null | undefined>,

		/** The observation start time. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPolicyanalyzerV1beta1ObservationPeriodFormGroup() {
		return new FormGroup<GoogleCloudPolicyanalyzerV1beta1ObservationPeriodFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to the `QueryActivity` method. */
	export interface GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse {

		/** The set of activities that match the filter included in the request. */
		activities?: Array<GoogleCloudPolicyanalyzerV1beta1Activity>;

		/** If there might be more results than those appearing in this response, then `nextPageToken` is included. To get the next set of results, call this method again using the value of `nextPageToken` as `pageToken`. */
		nextPageToken?: string | null;
	}

	/** Response to the `QueryActivity` method. */
	export interface GoogleCloudPolicyanalyzerV1beta1QueryActivityResponseFormProperties {

		/** If there might be more results than those appearing in this response, then `nextPageToken` is included. To get the next set of results, call this method again using the value of `nextPageToken` as `pageToken`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPolicyanalyzerV1beta1QueryActivityResponseFormGroup() {
		return new FormGroup<GoogleCloudPolicyanalyzerV1beta1QueryActivityResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Queries policy activities on GCP resources.
		 * Get v1beta1/{parent}/activities:query
		 * @param {string} parent Required. The container resource on which to execute the request. Acceptable formats: `projects/[PROJECT_ID|PROJECT_NUMBER]/locations/[LOCATION]/activityTypes/[ACTIVITY_TYPE]` LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/
		 * @param {string} filter Optional. Optional filter expression to restrict the activities returned. Supported filters are: - service_account_last_authn.full_resource_name {=} - service_account_key_last_authn.full_resource_name {=} 
		 * @param {number} pageSize Optional. The maximum number of results to return from this request. Max limit is 1000. Non-positive values are ignored. The presence of `nextPageToken` in the response indicates that more results might be available.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. `pageToken` must be the value of `nextPageToken` from the previous response. The values of other method parameters should be identical to those in the previous call.
		 * @return {GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse} Successful response
		 */
		Policyanalyzer_projects_locations_activityTypes_activities_query(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse> {
			return this.http.get<GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/activities:query&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

}

