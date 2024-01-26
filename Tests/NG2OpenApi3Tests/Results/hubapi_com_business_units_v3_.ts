import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A response object containing a collection of Business Units */
	export interface CollectionResponsePublicBusinessUnitNoPaging {

		/**
		 * The collection of Business Units
		 * Required
		 */
		results: Array<PublicBusinessUnit>;
	}

	/** A response object containing a collection of Business Units */
	export interface CollectionResponsePublicBusinessUnitNoPagingFormProperties {
	}
	export function CreateCollectionResponsePublicBusinessUnitNoPagingFormGroup() {
		return new FormGroup<CollectionResponsePublicBusinessUnitNoPagingFormProperties>({
		});

	}


	/** A Business Unit */
	export interface PublicBusinessUnit {

		/**
		 * The Business Unit's unique ID
		 * Required
		 */
		id: string;

		/** A Business Unit's logo metadata */
		logoMetadata?: PublicBusinessUnitLogoMetadata;

		/**
		 * The Business Unit's name
		 * Required
		 */
		name: string;
	}

	/** A Business Unit */
	export interface PublicBusinessUnitFormProperties {

		/**
		 * The Business Unit's unique ID
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The Business Unit's name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePublicBusinessUnitFormGroup() {
		return new FormGroup<PublicBusinessUnitFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A Business Unit's logo metadata */
	export interface PublicBusinessUnitLogoMetadata {

		/** The logo's alt text */
		logoAltText?: string | null;

		/** The logo's url */
		logoUrl?: string | null;

		/** The logo's resized url */
		resizedUrl?: string | null;
	}

	/** A Business Unit's logo metadata */
	export interface PublicBusinessUnitLogoMetadataFormProperties {

		/** The logo's alt text */
		logoAltText: FormControl<string | null | undefined>,

		/** The logo's url */
		logoUrl: FormControl<string | null | undefined>,

		/** The logo's resized url */
		resizedUrl: FormControl<string | null | undefined>,
	}
	export function CreatePublicBusinessUnitLogoMetadataFormGroup() {
		return new FormGroup<PublicBusinessUnitLogoMetadataFormProperties>({
			logoAltText: new FormControl<string | null | undefined>(undefined),
			logoUrl: new FormControl<string | null | undefined>(undefined),
			resizedUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error {

		/**
		 * The error category
		 * Required
		 */
		category: string;

		/** Context about the error condition */
		context?: {[id: string]: Array<string> };

		/**
		 * A unique identifier for the request. Include this value with any error reports or support tickets
		 * Required
		 */
		correlationId: string;

		/** further information about the error */
		errors?: Array<ErrorDetail>;

		/** A map of link names to associated URIs containing documentation about the error or recommended remediation steps */
		links?: {[id: string]: string };

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: string;

		/** A specific category that contains more specific detail about the error */
		subCategory?: string | null;
	}
	export interface ErrorFormProperties {

		/**
		 * The error category
		 * Required
		 */
		category: FormControl<string | null | undefined>,

		/** Context about the error condition */
		context: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/**
		 * A unique identifier for the request. Include this value with any error reports or support tickets
		 * Required
		 */
		correlationId: FormControl<string | null | undefined>,

		/** A map of link names to associated URIs containing documentation about the error or recommended remediation steps */
		links: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** A specific category that contains more specific detail about the error */
		subCategory: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			category: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			context: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			links: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subCategory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorDetail {

		/** The status code associated with the error detail */
		code?: string | null;

		/** Context about the error condition */
		context?: {[id: string]: Array<string> };

		/** The name of the field or parameter in which the error was found. */
		in?: string | null;

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: string;

		/** A specific category that contains more specific detail about the error */
		subCategory?: string | null;
	}
	export interface ErrorDetailFormProperties {

		/** The status code associated with the error detail */
		code: FormControl<string | null | undefined>,

		/** Context about the error condition */
		context: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/** The name of the field or parameter in which the error was found. */
		in: FormControl<string | null | undefined>,

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** A specific category that contains more specific detail about the error */
		subCategory: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			context: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			in: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subCategory: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Business Units for a user
		 * Get Business Units identified by `userId`. The `userId` refers to the user’s ID.
		 * Get business-units/v3/business-units/user/{userId}
		 * @param {string} userId Identifier of user to retrieve.
		 * @param {Array<string>} properties The names of properties to optionally include in the response body. The only valid value is `logoMetadata`.
		 * @param {Array<string>} name The names of Business Units to retrieve. If empty or not provided, then all associated Business Units will be returned.
		 * @return {CollectionResponsePublicBusinessUnitNoPaging} successful operation
		 */
		Get_Slashbusiness_unitsSlashv3Slashbusiness_unitsSlashuserSlashuserId_getByUserID(userId: string, properties: Array<string> | null | undefined, name: Array<string> | null | undefined): Observable<CollectionResponsePublicBusinessUnitNoPaging> {
			return this.http.get<CollectionResponsePublicBusinessUnitNoPaging>(this.baseUri + 'business-units/v3/business-units/user/' + (userId == null ? '' : encodeURIComponent(userId)) + '&' + properties?.map(z => `properties=${encodeURIComponent(z)}`).join('&') + '&' + name?.map(z => `name=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

}

