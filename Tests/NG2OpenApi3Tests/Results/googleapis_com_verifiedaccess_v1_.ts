import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Result message for VerifiedAccess.CreateChallenge. */
	export interface Challenge {

		/** The wrapper message of any data and its signature. */
		alternativeChallenge?: SignedData;

		/** The wrapper message of any data and its signature. */
		challenge?: SignedData;
	}

	/** Result message for VerifiedAccess.CreateChallenge. */
	export interface ChallengeFormProperties {
	}
	export function CreateChallengeFormGroup() {
		return new FormGroup<ChallengeFormProperties>({
		});

	}


	/** The wrapper message of any data and its signature. */
	export interface SignedData {

		/** The data to be signed. */
		data?: string | null;

		/** The signature of the data field. */
		signature?: string | null;
	}

	/** The wrapper message of any data and its signature. */
	export interface SignedDataFormProperties {

		/** The data to be signed. */
		data: FormControl<string | null | undefined>,

		/** The signature of the data field. */
		signature: FormControl<string | null | undefined>,
	}
	export function CreateSignedDataFormGroup() {
		return new FormGroup<SignedDataFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			signature: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** signed ChallengeResponse */
	export interface VerifyChallengeResponseRequest {

		/** The wrapper message of any data and its signature. */
		challengeResponse?: SignedData;

		/** Service can optionally provide identity information about the device or user associated with the key. For an EMK, this value is the enrolled domain. For an EUK, this value is the user's email address. If present, this value will be checked against contents of the response, and verification will fail if there is no match. */
		expectedIdentity?: string | null;
	}

	/** signed ChallengeResponse */
	export interface VerifyChallengeResponseRequestFormProperties {

		/** Service can optionally provide identity information about the device or user associated with the key. For an EMK, this value is the enrolled domain. For an EUK, this value is the user's email address. If present, this value will be checked against contents of the response, and verification will fail if there is no match. */
		expectedIdentity: FormControl<string | null | undefined>,
	}
	export function CreateVerifyChallengeResponseRequestFormGroup() {
		return new FormGroup<VerifyChallengeResponseRequestFormProperties>({
			expectedIdentity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result message for VerifiedAccess.VerifyChallengeResponse. */
	export interface VerifyChallengeResponseResult {

		/** Attested device id (ADID) of the device, read from the verified data. */
		attestedDeviceId?: string | null;

		/** Device enrollment id is returned in this field (for the machine response only). */
		deviceEnrollmentId?: string | null;

		/** Device permanent id is returned in this field (for the machine response only). */
		devicePermanentId?: string | null;

		/** Certificate Signing Request (in the SPKAC format, base64 encoded) is returned in this field. This field will be set only if device has included CSR in its challenge response. (the option to include CSR is now available for both user and machine responses) */
		signedPublicKeyAndChallenge?: string | null;

		/** For EMCert check, device permanent id is returned here. For EUCert check, signed_public_key_and_challenge [base64 encoded] is returned if present, otherwise empty string is returned. This field is deprecated, please use device_permanent_id or signed_public_key_and_challenge fields. */
		verificationOutput?: string | null;
	}

	/** Result message for VerifiedAccess.VerifyChallengeResponse. */
	export interface VerifyChallengeResponseResultFormProperties {

		/** Attested device id (ADID) of the device, read from the verified data. */
		attestedDeviceId: FormControl<string | null | undefined>,

		/** Device enrollment id is returned in this field (for the machine response only). */
		deviceEnrollmentId: FormControl<string | null | undefined>,

		/** Device permanent id is returned in this field (for the machine response only). */
		devicePermanentId: FormControl<string | null | undefined>,

		/** Certificate Signing Request (in the SPKAC format, base64 encoded) is returned in this field. This field will be set only if device has included CSR in its challenge response. (the option to include CSR is now available for both user and machine responses) */
		signedPublicKeyAndChallenge: FormControl<string | null | undefined>,

		/** For EMCert check, device permanent id is returned here. For EUCert check, signed_public_key_and_challenge [base64 encoded] is returned if present, otherwise empty string is returned. This field is deprecated, please use device_permanent_id or signed_public_key_and_challenge fields. */
		verificationOutput: FormControl<string | null | undefined>,
	}
	export function CreateVerifyChallengeResponseResultFormGroup() {
		return new FormGroup<VerifyChallengeResponseResultFormProperties>({
			attestedDeviceId: new FormControl<string | null | undefined>(undefined),
			deviceEnrollmentId: new FormControl<string | null | undefined>(undefined),
			devicePermanentId: new FormControl<string | null | undefined>(undefined),
			signedPublicKeyAndChallenge: new FormControl<string | null | undefined>(undefined),
			verificationOutput: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * CreateChallenge API
		 * Post v1/challenge
		 * @return {Challenge} Successful response
		 */
		Verifiedaccess_challenge_create(requestBody: Empty): Observable<Challenge> {
			return this.http.post<Challenge>(this.baseUri + 'v1/challenge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * VerifyChallengeResponse API
		 * Post v1/challenge:verify
		 * @return {VerifyChallengeResponseResult} Successful response
		 */
		Verifiedaccess_challenge_verify(requestBody: VerifyChallengeResponseRequest): Observable<VerifyChallengeResponseResult> {
			return this.http.post<VerifyChallengeResponseResult>(this.baseUri + 'v1/challenge:verify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

