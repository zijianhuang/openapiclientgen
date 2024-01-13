import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Describes the format of Error response. */
	export interface ErrorResponse {

		/** Error code */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Describes the format of Error response. */
	export interface ErrorResponseFormProperties {

		/** Error code */
		code: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of event categories. Currently possible values are: Administrative, Security, ServiceHealth, Alert, Recommendation, Policy. */
	export interface EventCategoryCollection {

		/**
		 * the list that includes the Azure event categories.
		 * Required
		 */
		value: Array<LocalizableString>;
	}

	/** A collection of event categories. Currently possible values are: Administrative, Security, ServiceHealth, Alert, Recommendation, Policy. */
	export interface EventCategoryCollectionFormProperties {
	}
	export function CreateEventCategoryCollectionFormGroup() {
		return new FormGroup<EventCategoryCollectionFormProperties>({
		});

	}


	/** The localizable string class. */
	export interface LocalizableString {

		/** the locale specific value. */
		localizedValue?: string | null;

		/**
		 * the invariant value.
		 * Required
		 */
		value: string;
	}

	/** The localizable string class. */
	export interface LocalizableStringFormProperties {

		/** the locale specific value. */
		localizedValue: FormControl<string | null | undefined>,

		/**
		 * the invariant value.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateLocalizableStringFormGroup() {
		return new FormGroup<LocalizableStringFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get the list of available event categories supported in the Activity Logs Service.<br>The current list includes the following: Administrative, Security, ServiceHealth, Alert, Recommendation, Policy.
		 * Get providers/microsoft.insights/eventcategories
		 * @param {string} api_version Client Api Version.
		 * @return {EventCategoryCollection} Successful request to get the list of event categories
		 */
		EventCategories_List(api_version: string): Observable<EventCategoryCollection> {
			return this.http.get<EventCategoryCollection>(this.baseUri + 'providers/microsoft.insights/eventcategories?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

