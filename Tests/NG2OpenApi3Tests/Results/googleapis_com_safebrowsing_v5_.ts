import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The full hash identified with one or more matches. */
	export interface GoogleSecuritySafebrowsingV5FullHash {

		/** The matching full hash. This is the SHA256 hash. The length will be exactly 32 bytes. */
		fullHash?: string | null;

		/** Unordered list. A repeated field identifying the details relevant to this full hash. */
		fullHashDetails?: Array<GoogleSecuritySafebrowsingV5FullHashFullHashDetail>;
	}

	/** The full hash identified with one or more matches. */
	export interface GoogleSecuritySafebrowsingV5FullHashFormProperties {

		/** The matching full hash. This is the SHA256 hash. The length will be exactly 32 bytes. */
		fullHash: FormControl<string | null | undefined>,
	}
	export function CreateGoogleSecuritySafebrowsingV5FullHashFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV5FullHashFormProperties>({
			fullHash: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a matching full hash. An important note about forward compatibility: new threat types and threat attributes may be added by the server at any time; those additions are considered minor version changes. It is Google's policy not to expose minor version numbers in APIs (see https://cloud.google.com/apis/design/versioning), so clients MUST be prepared to receive FullHashDetail messages containing ThreatType enum values or ThreatAttribute enum values that are considered invalid by the client. Therefore, it is the client's responsibility to check for the validity of all ThreatType and ThreatAttribute enum values; if any value is considered invalid, the client MUST disregard the entire FullHashDetail message. */
	export interface GoogleSecuritySafebrowsingV5FullHashFullHashDetail {

		/** Unordered list. Additional attributes about those full hashes. This may be empty. */
		attributes?: Array<string>;

		/** The type of threat. This field will never be empty. */
		threatType?: GoogleSecuritySafebrowsingV5FullHashFullHashDetailThreatType | null;
	}

	/** Details about a matching full hash. An important note about forward compatibility: new threat types and threat attributes may be added by the server at any time; those additions are considered minor version changes. It is Google's policy not to expose minor version numbers in APIs (see https://cloud.google.com/apis/design/versioning), so clients MUST be prepared to receive FullHashDetail messages containing ThreatType enum values or ThreatAttribute enum values that are considered invalid by the client. Therefore, it is the client's responsibility to check for the validity of all ThreatType and ThreatAttribute enum values; if any value is considered invalid, the client MUST disregard the entire FullHashDetail message. */
	export interface GoogleSecuritySafebrowsingV5FullHashFullHashDetailFormProperties {

		/** The type of threat. This field will never be empty. */
		threatType: FormControl<GoogleSecuritySafebrowsingV5FullHashFullHashDetailThreatType | null | undefined>,
	}
	export function CreateGoogleSecuritySafebrowsingV5FullHashFullHashDetailFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV5FullHashFullHashDetailFormProperties>({
			threatType: new FormControl<GoogleSecuritySafebrowsingV5FullHashFullHashDetailThreatType | null | undefined>(undefined),
		});

	}

	export enum GoogleSecuritySafebrowsingV5FullHashFullHashDetailThreatType { THREAT_TYPE_UNSPECIFIED = 'THREAT_TYPE_UNSPECIFIED', MALWARE = 'MALWARE', SOCIAL_ENGINEERING = 'SOCIAL_ENGINEERING', UNWANTED_SOFTWARE = 'UNWANTED_SOFTWARE', POTENTIALLY_HARMFUL_APPLICATION = 'POTENTIALLY_HARMFUL_APPLICATION' }


	/** The response returned after searching threat hashes. Note that if nothing is found, the server will return an OK status (HTTP status code 200) with the `full_hashes` field empty, rather than returning a NOT_FOUND status (HTTP status code 404). */
	export interface GoogleSecuritySafebrowsingV5SearchHashesResponse {

		/** The client-side cache duration. The client shall add this duration to the current time to determine the expiration time. The expiration time then applies to every hash prefix queried by the client in the request, regardless of how many full hashes are returned in the response. Even if the server returns no full hashes for a particular hash prefix, this fact should also be cached by the client. Important: the client must not assume that the server will return the same cache duration for all responses. The server may choose different cache durations for different responses depending on the situation. */
		cacheDuration?: string | null;

		/** Unordered list. The unordered list of full hashes found. */
		fullHashes?: Array<GoogleSecuritySafebrowsingV5FullHash>;
	}

	/** The response returned after searching threat hashes. Note that if nothing is found, the server will return an OK status (HTTP status code 200) with the `full_hashes` field empty, rather than returning a NOT_FOUND status (HTTP status code 404). */
	export interface GoogleSecuritySafebrowsingV5SearchHashesResponseFormProperties {

		/** The client-side cache duration. The client shall add this duration to the current time to determine the expiration time. The expiration time then applies to every hash prefix queried by the client in the request, regardless of how many full hashes are returned in the response. Even if the server returns no full hashes for a particular hash prefix, this fact should also be cached by the client. Important: the client must not assume that the server will return the same cache duration for all responses. The server may choose different cache durations for different responses depending on the situation. */
		cacheDuration: FormControl<string | null | undefined>,
	}
	export function CreateGoogleSecuritySafebrowsingV5SearchHashesResponseFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV5SearchHashesResponseFormProperties>({
			cacheDuration: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Search for full hashes matching the specified prefixes. This is a custom method as described by guidance at https://google.aip.dev/136
		 * Get v5/hashes:search
		 * @param {Array<string>} hashPrefixes Required. The hash prefixes to be looked up.
		 * @return {GoogleSecuritySafebrowsingV5SearchHashesResponse} Successful response
		 */
		Safebrowsing_hashes_search(hashPrefixes: Array<string> | null | undefined): Observable<GoogleSecuritySafebrowsingV5SearchHashesResponse> {
			return this.http.get<GoogleSecuritySafebrowsingV5SearchHashesResponse>(this.baseUri + 'v5/hashes:search?' + hashPrefixes?.map(z => `hashPrefixes=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

}

