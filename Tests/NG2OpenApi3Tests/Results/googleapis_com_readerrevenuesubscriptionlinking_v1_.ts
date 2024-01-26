import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Response to deleting a reader of a publication. */
	export interface DeleteReaderResponse {
	}

	/** Response to deleting a reader of a publication. */
	export interface DeleteReaderResponseFormProperties {
	}
	export function CreateDeleteReaderResponseFormGroup() {
		return new FormGroup<DeleteReaderResponseFormProperties>({
		});

	}


	/** A single entitlement for a publication reader */
	export interface Entitlement {

		/** The detail field can carry a description of the SKU that corresponds to what the user has been granted access to. This description, which is opaque to Google, can be displayed in the Google user subscription console for users who linked the subscription to a Google Account. Max 80 character limit. */
		detail?: string | null;

		/** Required. Expiration time of the entitlement. Entitlements that have expired over 30 days will be purged. Required. LINT.IfChange(expire_time) The max expire_time is 398 days from now(). LINT.ThenChange(//depot/google3/java/com/google/subscribewithgoogle/accountlinking/subscriptionlink/service/config/protoconf.pi:max_expiry_age) */
		expireTime?: string | null;

		/** Required. The publication's product ID that the user has access to. This is the same product ID as can be found in Schema.org markup (http://schema.org/productID). E.g. "dailybugle.com:basic" */
		productId?: string | null;

		/** A source-specific subscription token. This is an opaque string that the publisher provides to Google. This token is opaque and has no meaning to Google. */
		subscriptionToken?: string | null;
	}

	/** A single entitlement for a publication reader */
	export interface EntitlementFormProperties {

		/** The detail field can carry a description of the SKU that corresponds to what the user has been granted access to. This description, which is opaque to Google, can be displayed in the Google user subscription console for users who linked the subscription to a Google Account. Max 80 character limit. */
		detail: FormControl<string | null | undefined>,

		/** Required. Expiration time of the entitlement. Entitlements that have expired over 30 days will be purged. Required. LINT.IfChange(expire_time) The max expire_time is 398 days from now(). LINT.ThenChange(//depot/google3/java/com/google/subscribewithgoogle/accountlinking/subscriptionlink/service/config/protoconf.pi:max_expiry_age) */
		expireTime: FormControl<string | null | undefined>,

		/** Required. The publication's product ID that the user has access to. This is the same product ID as can be found in Schema.org markup (http://schema.org/productID). E.g. "dailybugle.com:basic" */
		productId: FormControl<string | null | undefined>,

		/** A source-specific subscription token. This is an opaque string that the publisher provides to Google. This token is opaque and has no meaning to Google. */
		subscriptionToken: FormControl<string | null | undefined>,
	}
	export function CreateEntitlementFormGroup() {
		return new FormGroup<EntitlementFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			subscriptionToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A reader of a publication. */
	export interface Reader {

		/** Output only. Time the publication reader was created and associated with a Google user. */
		createTime?: string | null;

		/** Output only. The resource name of the reader. The last part of ppid in the resource name is the publisher provided id. */
		name?: string | null;
	}

	/** A reader of a publication. */
	export interface ReaderFormProperties {

		/** Output only. Time the publication reader was created and associated with a Google user. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The resource name of the reader. The last part of ppid in the resource name is the publisher provided id. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateReaderFormGroup() {
		return new FormGroup<ReaderFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A singleton containing all of a reader's entitlements for a publication. */
	export interface ReaderEntitlements {

		/** All of the entitlements for a publication reader. */
		entitlements?: Array<Entitlement>;

		/** Output only. The resource name of the singleton. */
		name?: string | null;
	}

	/** A singleton containing all of a reader's entitlements for a publication. */
	export interface ReaderEntitlementsFormProperties {

		/** Output only. The resource name of the singleton. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateReaderEntitlementsFormGroup() {
		return new FormGroup<ReaderEntitlementsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Removes a publication reader, effectively severing the association with a Google user. If `force` is set to true, any entitlements for this reader will also be deleted. (Otherwise, the request will only work if the reader has no entitlements.) - If the reader does not exist, return NOT_FOUND. - Return FAILED_PRECONDITION if the force field is false (or unset) and entitlements are present.
		 * Delete v1/{name}
		 * @param {string} name Required. The resource name of the reader. Format: publications/{publication_id}/readers/{ppid}
		 * @param {boolean} force If set to true, any entitlements under the reader will also be purged.
		 * @return {DeleteReaderResponse} Successful response
		 */
		Readerrevenuesubscriptionlinking_publications_readers_delete(name: string, force: boolean | null | undefined): Observable<DeleteReaderResponse> {
			return this.http.delete<DeleteReaderResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&force=' + force, {});
		}

		/**
		 * Gets the reader entitlements for a publication reader. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the reader entitlements to retrieve. Format: publications/{publication_id}/readers/{reader_id}/entitlements
		 * @return {ReaderEntitlements} Successful response
		 */
		Readerrevenuesubscriptionlinking_publications_readers_getEntitlements(name: string): Observable<ReaderEntitlements> {
			return this.http.get<ReaderEntitlements>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the reader entitlements for a publication reader. The entire reader entitlements will be overwritten by the new reader entitlements in the payload, like a PUT. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.
		 * Patch v1/{name}
		 * @param {string} name Output only. The resource name of the singleton.
		 * @param {string} updateMask Optional. The list of fields to update. Defaults to all fields.
		 * @return {ReaderEntitlements} Successful response
		 */
		Readerrevenuesubscriptionlinking_publications_readers_updateEntitlements(name: string, updateMask: string | null | undefined, requestBody: ReaderEntitlements): Observable<ReaderEntitlements> {
			return this.http.patch<ReaderEntitlements>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

