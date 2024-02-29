import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GoogleCloudPolicyanalyzerV1Activity {

		/** A struct of custom fields to explain the activity. */
		activity?: {[id: string]: any };

		/** The type of the activity. */
		activityType?: string | null;

		/** The full resource name that identifies the resource. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. */
		fullResourceName?: string | null;

		/** Represents data observation period. */
		observationPeriod?: GoogleCloudPolicyanalyzerV1ObservationPeriod;
	}
	export interface GoogleCloudPolicyanalyzerV1ActivityFormProperties {

		/** A struct of custom fields to explain the activity. */
		activity: FormControl<{[id: string]: any } | null | undefined>,

		/** The type of the activity. */
		activityType: FormControl<string | null | undefined>,

		/** The full resource name that identifies the resource. For examples of full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names. */
		fullResourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPolicyanalyzerV1ActivityFormGroup() {
		return new FormGroup<GoogleCloudPolicyanalyzerV1ActivityFormProperties>({
			activity: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			activityType: new FormControl<string | null | undefined>(undefined),
			fullResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents data observation period. */
	export interface GoogleCloudPolicyanalyzerV1ObservationPeriod {

		/** The observation end time. The time in this timestamp is always `07:00:00Z`. */
		endTime?: string | null;

		/** The observation start time. The time in this timestamp is always `07:00:00Z`. */
		startTime?: string | null;
	}

	/** Represents data observation period. */
	export interface GoogleCloudPolicyanalyzerV1ObservationPeriodFormProperties {

		/** The observation end time. The time in this timestamp is always `07:00:00Z`. */
		endTime: FormControl<string | null | undefined>,

		/** The observation start time. The time in this timestamp is always `07:00:00Z`. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPolicyanalyzerV1ObservationPeriodFormGroup() {
		return new FormGroup<GoogleCloudPolicyanalyzerV1ObservationPeriodFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to the `QueryActivity` method. */
	export interface GoogleCloudPolicyanalyzerV1QueryActivityResponse {

		/** The set of activities that match the filter included in the request. */
		activities?: Array<GoogleCloudPolicyanalyzerV1Activity>;

		/** If there might be more results than those appearing in this response, then `nextPageToken` is included. To get the next set of results, call this method again using the value of `nextPageToken` as `pageToken`. */
		nextPageToken?: string | null;
	}

	/** Response to the `QueryActivity` method. */
	export interface GoogleCloudPolicyanalyzerV1QueryActivityResponseFormProperties {

		/** If there might be more results than those appearing in this response, then `nextPageToken` is included. To get the next set of results, call this method again using the value of `nextPageToken` as `pageToken`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPolicyanalyzerV1QueryActivityResponseFormGroup() {
		return new FormGroup<GoogleCloudPolicyanalyzerV1QueryActivityResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Queries policy activities on Google Cloud resources.
		 * Get v1/{parent}/activities:query
		 * @param {string} parent Required. The container resource on which to execute the request. Acceptable formats: `projects/[PROJECT_ID|PROJECT_NUMBER]/locations/[LOCATION]/activityTypes/[ACTIVITY_TYPE]` LOCATION here refers to Google Cloud Locations: https://cloud.google.com/about/locations/
		 * @param {string} filter Optional. Filter expression to restrict the activities returned. For serviceAccountLastAuthentication activities, supported filters are: - `activities.full_resource_name {=} [STRING]` - `activities.fullResourceName {=} [STRING]` where `[STRING]` is the full resource name of the service account. For serviceAccountKeyLastAuthentication activities, supported filters are: - `activities.full_resource_name {=} [STRING]` - `activities.fullResourceName {=} [STRING]` where `[STRING]` is the full resource name of the service account key.
		 * @param {number} pageSize Optional. The maximum number of results to return from this request. Max limit is 1000. Non-positive values are ignored. The presence of `nextPageToken` in the response indicates that more results might be available.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. `pageToken` must be the value of `nextPageToken` from the previous response. The values of other method parameters should be identical to those in the previous call.
		 * @return {GoogleCloudPolicyanalyzerV1QueryActivityResponse} Successful response
		 */
		Policyanalyzer_projects_locations_activityTypes_activities_query(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudPolicyanalyzerV1QueryActivityResponse> {
			return this.http.get<GoogleCloudPolicyanalyzerV1QueryActivityResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/activities:query&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

}

