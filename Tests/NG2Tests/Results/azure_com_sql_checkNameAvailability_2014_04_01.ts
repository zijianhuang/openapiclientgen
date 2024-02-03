import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A request to check whether the specified name for a resource is available. */
	export interface CheckNameAvailabilityRequest {

		/**
		 * The name whose availability is to be checked.
		 * Required
		 */
		name: string;

		/**
		 * The type of resource that is used as the scope of the availability check.
		 * Required
		 */
		type: CheckNameAvailabilityRequestType;
	}

	/** A request to check whether the specified name for a resource is available. */
	export interface CheckNameAvailabilityRequestFormProperties {

		/**
		 * The name whose availability is to be checked.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of resource that is used as the scope of the availability check.
		 * Required
		 */
		type: FormControl<CheckNameAvailabilityRequestType | null | undefined>,
	}
	export function CreateCheckNameAvailabilityRequestFormGroup() {
		return new FormGroup<CheckNameAvailabilityRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CheckNameAvailabilityRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CheckNameAvailabilityRequestType { 'Microsoft.Sql/servers' = 'Microsoft.Sql/servers' }


	/** A response indicating whether the specified name for a resource is available. */
	export interface CheckNameAvailabilityResponse {

		/** True if the name is available, otherwise false. */
		available?: boolean | null;

		/** A message explaining why the name is unavailable. Will be null if the name is available. */
		message?: string | null;

		/** The name whose availability was checked. */
		name?: string | null;

		/** The reason code explaining why the name is unavailable. Will be null if the name is available. */
		reason?: CheckNameAvailabilityResponseReason | null;
	}

	/** A response indicating whether the specified name for a resource is available. */
	export interface CheckNameAvailabilityResponseFormProperties {

		/** True if the name is available, otherwise false. */
		available: FormControl<boolean | null | undefined>,

		/** A message explaining why the name is unavailable. Will be null if the name is available. */
		message: FormControl<string | null | undefined>,

		/** The name whose availability was checked. */
		name: FormControl<string | null | undefined>,

		/** The reason code explaining why the name is unavailable. Will be null if the name is available. */
		reason: FormControl<CheckNameAvailabilityResponseReason | null | undefined>,
	}
	export function CreateCheckNameAvailabilityResponseFormGroup() {
		return new FormGroup<CheckNameAvailabilityResponseFormProperties>({
			available: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<CheckNameAvailabilityResponseReason | null | undefined>(undefined),
		});

	}

	export enum CheckNameAvailabilityResponseReason { Invalid = 'Invalid', AlreadyExists = 'AlreadyExists' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Determines whether a resource can be created with the specified name.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Sql/checkNameAvailability
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {CheckNameAvailabilityRequest} requestBody The parameters to request for name availability.
		 * @return {CheckNameAvailabilityResponse} OK
		 */
		Servers_CheckNameAvailability(api_version: string, subscriptionId: string, requestBody: CheckNameAvailabilityRequest): Observable<CheckNameAvailabilityResponse> {
			return this.http.post<CheckNameAvailabilityResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Sql/checkNameAvailability?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

