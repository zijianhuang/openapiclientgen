import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Result message for VerifiedAccess.CreateChallenge. */
	export interface Challenge {

		/** The wrapper message of any data and its signature. */
		alternativeChallenge?: SignedData;

		/** The wrapper message of any data and its signature. */
		challenge?: SignedData;
	}


	/** The wrapper message of any data and its signature. */
	export interface SignedData {

		/** The data to be signed. */
		data?: string;

		/** The signature of the data field. */
		signature?: string;
	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}


	/** signed ChallengeResponse */
	export interface VerifyChallengeResponseRequest {

		/** The wrapper message of any data and its signature. */
		challengeResponse?: SignedData;

		/**
		 * Service can optionally provide identity information about the device
		 * or user associated with the key.
		 * For an EMK, this value is the enrolled domain.
		 * For an EUK, this value is the user's email address.
		 * If present, this value will be checked against contents
		 * of the response, and verification will fail if there is no match.
		 */
		expectedIdentity?: string;
	}


	/** Result message for VerifiedAccess.VerifyChallengeResponse. */
	export interface VerifyChallengeResponseResult {

		/**
		 * Device enrollment id is returned in this field (for the machine response
		 * only).
		 */
		deviceEnrollmentId?: string;

		/**
		 * Device permanent id is returned in this field (for the machine response
		 * only).
		 */
		devicePermanentId?: string;

		/**
		 * Certificate Signing Request (in the SPKAC format, base64 encoded) is
		 * returned in this field. This field will be set only if device has included
		 * CSR in its challenge response.
		 * (the option to include CSR is now available for both user and machine
		 * responses)
		 */
		signedPublicKeyAndChallenge?: string;

		/**
		 * For EMCert check, device permanent id is returned here.
		 * For EUCert check, signed_public_key_and_challenge [base64 encoded]
		 * is returned if present, otherwise empty string is returned.
		 * This field is deprecated, please use device_permanent_id or
		 * signed_public_key_and_challenge fields.
		 */
		verificationOutput?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * CreateChallenge API
		 * Post v1/challenge
		 * @return {void} Successful response
		 */
		Verifiedaccess_challenge_create(requestBody: Empty): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/challenge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * VerifyChallengeResponse API
		 * Post v1/challenge:verify
		 * @return {void} Successful response
		 */
		Verifiedaccess_challenge_verify(requestBody: VerifyChallengeResponseRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/challenge:verify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

