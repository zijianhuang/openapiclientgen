import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Request message for CreateOrUpdateTags. VerifyToken. */
	export interface CreateOrUpdateTagsRequest {

		/** Tags to be inserted or updated. */
		tags?: Array<Tag>;
	}

	/** Request message for CreateOrUpdateTags. VerifyToken. */
	export interface CreateOrUpdateTagsRequestFormProperties {
	}
	export function CreateCreateOrUpdateTagsRequestFormGroup() {
		return new FormGroup<CreateOrUpdateTagsRequestFormProperties>({
		});

	}


	/** A tag is associated with exactly one package name and user. */
	export interface Tag {

		/** A boolean value of the tag. */
		booleanValue?: boolean | null;

		/** A signed 64-bit integer value of the tag. */
		int64Value?: string | null;

		/** Required. Key for the tag. */
		key?: string | null;

		/** A string value of the tag. */
		stringValue?: string | null;

		/** A time value of the tag. */
		timeValue?: string | null;
	}

	/** A tag is associated with exactly one package name and user. */
	export interface TagFormProperties {

		/** A boolean value of the tag. */
		booleanValue: FormControl<boolean | null | undefined>,

		/** A signed 64-bit integer value of the tag. */
		int64Value: FormControl<string | null | undefined>,

		/** Required. Key for the tag. */
		key: FormControl<string | null | undefined>,

		/** A string value of the tag. */
		stringValue: FormControl<string | null | undefined>,

		/** A time value of the tag. */
		timeValue: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			booleanValue: new FormControl<boolean | null | undefined>(undefined),
			int64Value: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
			timeValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CreateOrUpdateTags. */
	export interface CreateOrUpdateTagsResponse {

		/** All requested tags are returned, including pre-existing ones. */
		tags?: Array<Tag>;
	}

	/** Response message for CreateOrUpdateTags. */
	export interface CreateOrUpdateTagsResponseFormProperties {
	}
	export function CreateCreateOrUpdateTagsResponseFormGroup() {
		return new FormGroup<CreateOrUpdateTagsResponseFormProperties>({
		});

	}


	/** Request message for VerifyToken. */
	export interface VerifyTokenRequest {

		/** Required. Persona represented by the token. Format: personas/{persona} */
		persona?: string | null;
	}

	/** Request message for VerifyToken. */
	export interface VerifyTokenRequestFormProperties {

		/** Required. Persona represented by the token. Format: personas/{persona} */
		persona: FormControl<string | null | undefined>,
	}
	export function CreateVerifyTokenRequestFormGroup() {
		return new FormGroup<VerifyTokenRequestFormProperties>({
			persona: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for VerifyToken. */
	export interface VerifyTokenResponse {
	}

	/** Response message for VerifyToken. */
	export interface VerifyTokenResponseFormProperties {
	}
	export function CreateVerifyTokenResponseFormGroup() {
		return new FormGroup<VerifyTokenResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create or update tags for the user and app that are represented by the given token.
		 * Post v1alpha1/{appPackage}/{token}/tags:createOrUpdate
		 * @param {string} appPackage Required. App whose tags are being manipulated. Format: apps/{package_name}
		 * @param {string} token Required. Token for which the tags are being inserted or updated. Format: tokens/{token}
		 * @return {CreateOrUpdateTagsResponse} Successful response
		 */
		Playgrouping_apps_tokens_tags_createOrUpdate(appPackage: string, token: string, requestBody: CreateOrUpdateTagsRequest): Observable<CreateOrUpdateTagsResponse> {
			return this.http.post<CreateOrUpdateTagsResponse>(this.baseUri + 'v1alpha1/' + (appPackage == null ? '' : encodeURIComponent(appPackage)) + '/' + (token == null ? '' : encodeURIComponent(token)) + '/tags:createOrUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Verify an API token by asserting the app and persona it belongs to. The verification is a protection against client-side attacks and will fail if the contents of the token don't match the provided values. A token must be verified before it can be used to manipulate user tags.
		 * Post v1alpha1/{appPackage}/{token}:verify
		 * @param {string} appPackage Required. App the token belongs to. Format: apps/{package_name}
		 * @param {string} token Required. The token to be verified. Format: tokens/{token}
		 * @return {VerifyTokenResponse} Successful response
		 */
		Playgrouping_apps_tokens_verify(appPackage: string, token: string, requestBody: VerifyTokenRequest): Observable<VerifyTokenResponse> {
			return this.http.post<VerifyTokenResponse>(this.baseUri + 'v1alpha1/' + (appPackage == null ? '' : encodeURIComponent(appPackage)) + '/' + (token == null ? '' : encodeURIComponent(token)) + ':verify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

