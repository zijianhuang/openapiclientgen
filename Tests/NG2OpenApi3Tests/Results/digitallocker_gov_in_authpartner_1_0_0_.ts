import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AccessResponse {

		/**
		 * The access token that can be used to call the DigiLocker APIs.
		 * Required
		 */
		access_token: string;

		/**
		 * A unique 36 character DigiLocker Id of the user account.
		 * Required
		 */
		digilocker_id: string;

		/**
		 * This is date of birth of the user as registered with DigiLocker in DDMMYYYY format.
		 * Required
		 */
		dob: string;

		/**
		 * This indicates whether eAadhaar data is available for this account. Possible values are Y and N.
		 * Required
		 */
		eaadhar: AccessResponseEaadhar;

		/**
		 * The duration in seconds for which the access token is valid
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		expires_in: string;

		/**
		 * This is gender of the user as registered with DigiLocker. The possible values are M, F, T for male, female and transgender respectively.
		 * Required
		 */
		gender: AccessResponseGender;

		/**
		 * The name of the user as registered with DigiLocker.
		 * Required
		 */
		name: string;

		/**
		 * A unique reference of the user account.
		 * Required
		 */
		reference_key: string;

		/**
		 * The refresh token used to refresh the above access token when it expires. Please refer to Refresh Access Token API for more details.
		 * Required
		 */
		refresh_token: string;

		/**
		 * Scope of the token.
		 * Required
		 */
		scope: string;

		/**
		 * The type of token which will always be Bearer.
		 * Required
		 */
		token_type: string;
	}
	export interface AccessResponseFormProperties {

		/**
		 * The access token that can be used to call the DigiLocker APIs.
		 * Required
		 */
		access_token: FormControl<string | null | undefined>,

		/**
		 * A unique 36 character DigiLocker Id of the user account.
		 * Required
		 */
		digilocker_id: FormControl<string | null | undefined>,

		/**
		 * This is date of birth of the user as registered with DigiLocker in DDMMYYYY format.
		 * Required
		 */
		dob: FormControl<string | null | undefined>,

		/**
		 * This indicates whether eAadhaar data is available for this account. Possible values are Y and N.
		 * Required
		 */
		eaadhar: FormControl<AccessResponseEaadhar | null | undefined>,

		/**
		 * The duration in seconds for which the access token is valid
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		expires_in: FormControl<string | null | undefined>,

		/**
		 * This is gender of the user as registered with DigiLocker. The possible values are M, F, T for male, female and transgender respectively.
		 * Required
		 */
		gender: FormControl<AccessResponseGender | null | undefined>,

		/**
		 * The name of the user as registered with DigiLocker.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A unique reference of the user account.
		 * Required
		 */
		reference_key: FormControl<string | null | undefined>,

		/**
		 * The refresh token used to refresh the above access token when it expires. Please refer to Refresh Access Token API for more details.
		 * Required
		 */
		refresh_token: FormControl<string | null | undefined>,

		/**
		 * Scope of the token.
		 * Required
		 */
		scope: FormControl<string | null | undefined>,

		/**
		 * The type of token which will always be Bearer.
		 * Required
		 */
		token_type: FormControl<string | null | undefined>,
	}
	export function CreateAccessResponseFormGroup() {
		return new FormGroup<AccessResponseFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			digilocker_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dob: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eaadhar: new FormControl<AccessResponseEaadhar | null | undefined>(undefined, [Validators.required]),
			expires_in: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gender: new FormControl<AccessResponseGender | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reference_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			refresh_token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scope: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			token_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AccessResponseEaadhar { Y = 'Y', N = 'N' }

	export enum AccessResponseGender { M = 'M', F = 'F', T = 'T' }

	export interface AccessToken {

		/** Required */
		client_id: string;

		/** Required */
		client_secret: string;
		code?: string | null;
		code_verifier?: string | null;

		/** Required */
		grant_type: AccessTokenGrant_type;
		redirect_uri?: string | null;
	}
	export interface AccessTokenFormProperties {

		/** Required */
		client_id: FormControl<string | null | undefined>,

		/** Required */
		client_secret: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
		code_verifier: FormControl<string | null | undefined>,

		/** Required */
		grant_type: FormControl<AccessTokenGrant_type | null | undefined>,
		redirect_uri: FormControl<string | null | undefined>,
	}
	export function CreateAccessTokenFormGroup() {
		return new FormGroup<AccessTokenFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			client_secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined),
			code_verifier: new FormControl<string | null | undefined>(undefined),
			grant_type: new FormControl<AccessTokenGrant_type | null | undefined>(undefined, [Validators.required]),
			redirect_uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccessTokenGrant_type { authorization_code = 'authorization_code' }

	export interface AuthTokenResponse {

		/**
		 * The access token that can be used to call the
		 * DigiLocker APIs.
		 * Required
		 */
		access_token: string;

		/**
		 * The duration in seconds for which the access token is
		 * valid.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		expires_in: string;

		/**
		 * The refresh token used to refresh the above access
		 * token when it expires. This will value will be
		 * returned only in case of web applications and not be
		 * returned for limited input devices.
		 * Required
		 */
		refresh_token: string;

		/**
		 * Scope of the token.
		 * Required
		 */
		scope: string;

		/**
		 * The type of token which will always be Bearer.
		 * Required
		 */
		token_type: string;
	}
	export interface AuthTokenResponseFormProperties {

		/**
		 * The access token that can be used to call the
		 * DigiLocker APIs.
		 * Required
		 */
		access_token: FormControl<string | null | undefined>,

		/**
		 * The duration in seconds for which the access token is
		 * valid.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		expires_in: FormControl<string | null | undefined>,

		/**
		 * The refresh token used to refresh the above access
		 * token when it expires. This will value will be
		 * returned only in case of web applications and not be
		 * returned for limited input devices.
		 * Required
		 */
		refresh_token: FormControl<string | null | undefined>,

		/**
		 * Scope of the token.
		 * Required
		 */
		scope: FormControl<string | null | undefined>,

		/**
		 * The type of token which will always be Bearer.
		 * Required
		 */
		token_type: FormControl<string | null | undefined>,
	}
	export function CreateAuthTokenResponseFormGroup() {
		return new FormGroup<AuthTokenResponseFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expires_in: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			refresh_token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scope: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			token_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DemoAuth {

		/** Provide the client id that was created during the application registration process on Partners Portal. */
		clientid?: string | null;

		/** The consent indicator from the user for performing demographic authentication using Aadhaar details. This Partner Application must capture the user consent for performing the Aadhaar demographic authentication. The possible values are ‘Y’ and ‘N’. The sign up request will be processed only when this indicator is ‘Y’. */
		consent?: string | null;

		/** The parameter indicates whether Aadhaar demographic authentication must be successful for creating DigiLocker account. The possible values are ‘Y’ and ‘N’. The value of ‘Y’ will perform Aadhaar demographic authentication and will return errors if any in response. The value of ‘N’ will also perform Aadhaar demographic authentication but will return any error in case of authentication failure. It will create a basic mobile based account for the user. Value ‘N’ should be used when the user account needs to be created in the absence of the user. */
		demoauth?: string | null;

		/**
		 * This is date of birth of the user as mentioned in Aadhaar in DDMMYYYY format.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dob?: number | null;

		/** This is gender of the user as mentioned in Aadhaar. The possible values are M, F, T for male, female and transgender respectively. */
		gender?: DemoAuthGender | null;

		/** Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret. */
		hmac?: string | null;

		/**
		 * This is the mobile number of the user. DigiLocker will check whether an account exists for this mobile number. Either uid or mobile is required to verify whether an account exists.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		mobile?: number | null;

		/** This is name of the user as mentioned in Aadhaar. */
		name?: string | null;

		/** Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes. */
		ts?: string | null;

		/**
		 * This is the Aadhaar number of the user. DigiLocker will check whether an account exists for this Aadhaar number. Either uid or mobile is required to verify whether an account exists.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		uid?: number | null;

		/** The parameter indicates whether the mobile number provided above should be validated by DigiLocker. If this parameter is ‘Y’, the DigiLocker sends an OTP to verify the mobile number. In this case the client application will call the second API to validate the OTP. The user will be signed on only after successful OTP validation. This flow should be used when the user account is created by user himself/herself or the user is present to provide the OTP. If this parameter is ‘N’, the user account will be created without OTP validation. The OTP validation will be performed when the user signs in for the first time in DigiLocker. This flow should be used when the user account needs to be created in the absence of the user. */
		verification?: string | null;
	}
	export interface DemoAuthFormProperties {

		/** Provide the client id that was created during the application registration process on Partners Portal. */
		clientid: FormControl<string | null | undefined>,

		/** The consent indicator from the user for performing demographic authentication using Aadhaar details. This Partner Application must capture the user consent for performing the Aadhaar demographic authentication. The possible values are ‘Y’ and ‘N’. The sign up request will be processed only when this indicator is ‘Y’. */
		consent: FormControl<string | null | undefined>,

		/** The parameter indicates whether Aadhaar demographic authentication must be successful for creating DigiLocker account. The possible values are ‘Y’ and ‘N’. The value of ‘Y’ will perform Aadhaar demographic authentication and will return errors if any in response. The value of ‘N’ will also perform Aadhaar demographic authentication but will return any error in case of authentication failure. It will create a basic mobile based account for the user. Value ‘N’ should be used when the user account needs to be created in the absence of the user. */
		demoauth: FormControl<string | null | undefined>,

		/**
		 * This is date of birth of the user as mentioned in Aadhaar in DDMMYYYY format.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dob: FormControl<number | null | undefined>,

		/** This is gender of the user as mentioned in Aadhaar. The possible values are M, F, T for male, female and transgender respectively. */
		gender: FormControl<DemoAuthGender | null | undefined>,

		/** Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret. */
		hmac: FormControl<string | null | undefined>,

		/**
		 * This is the mobile number of the user. DigiLocker will check whether an account exists for this mobile number. Either uid or mobile is required to verify whether an account exists.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		mobile: FormControl<number | null | undefined>,

		/** This is name of the user as mentioned in Aadhaar. */
		name: FormControl<string | null | undefined>,

		/** Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes. */
		ts: FormControl<string | null | undefined>,

		/**
		 * This is the Aadhaar number of the user. DigiLocker will check whether an account exists for this Aadhaar number. Either uid or mobile is required to verify whether an account exists.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		uid: FormControl<number | null | undefined>,

		/** The parameter indicates whether the mobile number provided above should be validated by DigiLocker. If this parameter is ‘Y’, the DigiLocker sends an OTP to verify the mobile number. In this case the client application will call the second API to validate the OTP. The user will be signed on only after successful OTP validation. This flow should be used when the user account is created by user himself/herself or the user is present to provide the OTP. If this parameter is ‘N’, the user account will be created without OTP validation. The OTP validation will be performed when the user signs in for the first time in DigiLocker. This flow should be used when the user account needs to be created in the absence of the user. */
		verification: FormControl<string | null | undefined>,
	}
	export function CreateDemoAuthFormGroup() {
		return new FormGroup<DemoAuthFormProperties>({
			clientid: new FormControl<string | null | undefined>(undefined),
			consent: new FormControl<string | null | undefined>(undefined),
			demoauth: new FormControl<string | null | undefined>(undefined),
			dob: new FormControl<number | null | undefined>(undefined),
			gender: new FormControl<DemoAuthGender | null | undefined>(undefined),
			hmac: new FormControl<string | null | undefined>(undefined),
			mobile: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ts: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<number | null | undefined>(undefined),
			verification: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DemoAuthGender { M = 'M', F = 'F', T = 'T' }

	export interface DemoAuthResponse {
		details?: DemoAuthResponseDetails;
	}
	export interface DemoAuthResponseFormProperties {
	}
	export function CreateDemoAuthResponseFormGroup() {
		return new FormGroup<DemoAuthResponseFormProperties>({
		});

	}

	export interface DemoAuthResponseDetails {

		/**
		 * The access token that can be used to call the DigiLocker APIs.
		 * Required
		 */
		access_token: string;

		/**
		 * The duration in seconds for which the access token is valid.
		 * Required
		 */
		expires_in: string;

		/**
		 * The masked mobile number of the user on which the OTP has been sent.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		mobile: number;

		/**
		 * The refresh token used to refresh the above access token when it expires. Please refer to Refresh Access Token API for more details.
		 * Required
		 */
		refresh_token: string;

		/**
		 * Scope of the token
		 * Required
		 */
		scope: string;

		/**
		 * The type of token which will always be Bearer.
		 * Required
		 */
		token_type: string;
	}
	export interface DemoAuthResponseDetailsFormProperties {

		/**
		 * The access token that can be used to call the DigiLocker APIs.
		 * Required
		 */
		access_token: FormControl<string | null | undefined>,

		/**
		 * The duration in seconds for which the access token is valid.
		 * Required
		 */
		expires_in: FormControl<string | null | undefined>,

		/**
		 * The masked mobile number of the user on which the OTP has been sent.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		mobile: FormControl<number | null | undefined>,

		/**
		 * The refresh token used to refresh the above access token when it expires. Please refer to Refresh Access Token API for more details.
		 * Required
		 */
		refresh_token: FormControl<string | null | undefined>,

		/**
		 * Scope of the token
		 * Required
		 */
		scope: FormControl<string | null | undefined>,

		/**
		 * The type of token which will always be Bearer.
		 * Required
		 */
		token_type: FormControl<string | null | undefined>,
	}
	export function CreateDemoAuthResponseDetailsFormGroup() {
		return new FormGroup<DemoAuthResponseDetailsFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expires_in: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mobile: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			refresh_token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scope: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			token_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DemoAuthVerify {

		/** Provide the client id that was created during the application registration process on Partners Portal. */
		clientid?: string | null;

		/** Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret. */
		hmac?: string | null;

		/**
		 * This is the mobile number of the user. DigiLocker will check whether an account exists for this mobile number. Either uid or mobile is required to verify whether an account exists.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		mobile?: number | null;

		/**
		 * The OTP provided by the user.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		otp?: number | null;

		/** Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes. */
		ts?: string | null;
	}
	export interface DemoAuthVerifyFormProperties {

		/** Provide the client id that was created during the application registration process on Partners Portal. */
		clientid: FormControl<string | null | undefined>,

		/** Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret. */
		hmac: FormControl<string | null | undefined>,

		/**
		 * This is the mobile number of the user. DigiLocker will check whether an account exists for this mobile number. Either uid or mobile is required to verify whether an account exists.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		mobile: FormControl<number | null | undefined>,

		/**
		 * The OTP provided by the user.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		otp: FormControl<number | null | undefined>,

		/** Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes. */
		ts: FormControl<string | null | undefined>,
	}
	export function CreateDemoAuthVerifyFormGroup() {
		return new FormGroup<DemoAuthVerifyFormProperties>({
			clientid: new FormControl<string | null | undefined>(undefined),
			hmac: new FormControl<string | null | undefined>(undefined),
			mobile: new FormControl<number | null | undefined>(undefined),
			otp: new FormControl<number | null | undefined>(undefined),
			ts: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DemoAuthVerifyResponse {
		details?: DemoAuthVerifyResponseDetails;
	}
	export interface DemoAuthVerifyResponseFormProperties {
	}
	export function CreateDemoAuthVerifyResponseFormGroup() {
		return new FormGroup<DemoAuthVerifyResponseFormProperties>({
		});

	}

	export interface DemoAuthVerifyResponseDetails {

		/**
		 * The access token that can be used to call the DigiLocker APIs.
		 * Required
		 */
		access_token: string;

		/**
		 * The duration in seconds for which the access token is valid.
		 * Required
		 */
		expires_in: string;

		/**
		 * The refresh token used to refresh the above access token when it expires. Please refer to Refresh Access Token API for more details.
		 * Required
		 */
		refresh_token: string;

		/**
		 * Scope of the token
		 * Required
		 */
		scope: string;

		/**
		 * The type of token which will always be Bearer.
		 * Required
		 */
		token_type: string;
	}
	export interface DemoAuthVerifyResponseDetailsFormProperties {

		/**
		 * The access token that can be used to call the DigiLocker APIs.
		 * Required
		 */
		access_token: FormControl<string | null | undefined>,

		/**
		 * The duration in seconds for which the access token is valid.
		 * Required
		 */
		expires_in: FormControl<string | null | undefined>,

		/**
		 * The refresh token used to refresh the above access token when it expires. Please refer to Refresh Access Token API for more details.
		 * Required
		 */
		refresh_token: FormControl<string | null | undefined>,

		/**
		 * Scope of the token
		 * Required
		 */
		scope: FormControl<string | null | undefined>,

		/**
		 * The type of token which will always be Bearer.
		 * Required
		 */
		token_type: FormControl<string | null | undefined>,
	}
	export function CreateDemoAuthVerifyResponseDetailsFormGroup() {
		return new FormGroup<DemoAuthVerifyResponseDetailsFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expires_in: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			refresh_token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scope: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			token_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeviceAccessToken {

		/** Provide the client id that was created during the application registration process on Partners Portal. */
		client_id?: string | null;

		/** The device verification code. The device_code field from Get Device Code Response. */
		device_code?: string | null;

		/** The OTP collected from the user */
		dl_otp?: string | null;

		/** The grant type, which must be “urn:ietf:params:oauth:grant-type:device_code”. */
		grant_type?: string | null;
	}
	export interface DeviceAccessTokenFormProperties {

		/** Provide the client id that was created during the application registration process on Partners Portal. */
		client_id: FormControl<string | null | undefined>,

		/** The device verification code. The device_code field from Get Device Code Response. */
		device_code: FormControl<string | null | undefined>,

		/** The OTP collected from the user */
		dl_otp: FormControl<string | null | undefined>,

		/** The grant type, which must be “urn:ietf:params:oauth:grant-type:device_code”. */
		grant_type: FormControl<string | null | undefined>,
	}
	export function CreateDeviceAccessTokenFormGroup() {
		return new FormGroup<DeviceAccessTokenFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined),
			device_code: new FormControl<string | null | undefined>(undefined),
			dl_otp: new FormControl<string | null | undefined>(undefined),
			grant_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeviceAuthorizationCode {
		client_id?: string | null;

		/**
		 * Mobile number associated with DigiLocker account of the
		 * user. The client device accepts the mobile number on the device from user and sends it in this parameter. Either the username or the mobile number must be provided.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dl_mobile?: number | null;

		/** DigiLocker username of the user. The client device accepts the username on the device from user and sends the username in this parameter. Either the username or the mobile number must be provided. */
		dl_username?: string | null;

		/** The parameter must be set to device_code. */
		response_type?: string | null;
	}
	export interface DeviceAuthorizationCodeFormProperties {
		client_id: FormControl<string | null | undefined>,

		/**
		 * Mobile number associated with DigiLocker account of the
		 * user. The client device accepts the mobile number on the device from user and sends it in this parameter. Either the username or the mobile number must be provided.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dl_mobile: FormControl<number | null | undefined>,

		/** DigiLocker username of the user. The client device accepts the username on the device from user and sends the username in this parameter. Either the username or the mobile number must be provided. */
		dl_username: FormControl<string | null | undefined>,

		/** The parameter must be set to device_code. */
		response_type: FormControl<string | null | undefined>,
	}
	export function CreateDeviceAuthorizationCodeFormGroup() {
		return new FormGroup<DeviceAuthorizationCodeFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined),
			dl_mobile: new FormControl<number | null | undefined>(undefined),
			dl_username: new FormControl<string | null | undefined>(undefined),
			response_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeviceAuthorizationCodeResponse {

		/**
		 * The device verification code.
		 * Required
		 */
		device_code: string;

		/**
		 * The masked email on which the OTP is sent.
		 * Required
		 */
		dl_masked_email: string;

		/**
		 * The masked mobile number on which the OTP is sent.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dl_masked_mobile: number;

		/**
		 * The duration in seconds for which the code is valid.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expires_in: number;
	}
	export interface DeviceAuthorizationCodeResponseFormProperties {

		/**
		 * The device verification code.
		 * Required
		 */
		device_code: FormControl<string | null | undefined>,

		/**
		 * The masked email on which the OTP is sent.
		 * Required
		 */
		dl_masked_email: FormControl<string | null | undefined>,

		/**
		 * The masked mobile number on which the OTP is sent.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dl_masked_mobile: FormControl<number | null | undefined>,

		/**
		 * The duration in seconds for which the code is valid.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expires_in: FormControl<number | null | undefined>,
	}
	export function CreateDeviceAuthorizationCodeResponseFormGroup() {
		return new FormGroup<DeviceAuthorizationCodeResponseFormProperties>({
			device_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dl_masked_email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dl_masked_mobile: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			expires_in: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DocType {

		/** Provide the client id that was created during the application registration process on Partners Portal. */
		clientid?: string | null;

		/** Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret. */
		hmac?: string | null;

		/** The organization id for the issuer in DigiLocker. This organization id is returned in Get List of Issuers API mentioned earlier. */
		orgid?: string | null;

		/** Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes. */
		ts?: string | null;
	}
	export interface DocTypeFormProperties {

		/** Provide the client id that was created during the application registration process on Partners Portal. */
		clientid: FormControl<string | null | undefined>,

		/** Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret. */
		hmac: FormControl<string | null | undefined>,

		/** The organization id for the issuer in DigiLocker. This organization id is returned in Get List of Issuers API mentioned earlier. */
		orgid: FormControl<string | null | undefined>,

		/** Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes. */
		ts: FormControl<string | null | undefined>,
	}
	export function CreateDocTypeFormGroup() {
		return new FormGroup<DocTypeFormProperties>({
			clientid: new FormControl<string | null | undefined>(undefined),
			hmac: new FormControl<string | null | undefined>(undefined),
			orgid: new FormControl<string | null | undefined>(undefined),
			ts: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocTypeResponse {

		/**
		 * Required
		 * Minimum items: 1
		 */
		DocTypeResponseDocuments: Array<DocTypeResponseDocuments>;
	}
	export interface DocTypeResponseFormProperties {
	}
	export function CreateDocTypeResponseFormGroup() {
		return new FormGroup<DocTypeResponseFormProperties>({
		});

	}

	export interface DocTypeResponseDocuments {

		/**
		 * Required
		 * Min length: 1
		 */
		description: string;

		/**
		 * Required
		 * Min length: 1
		 */
		doctype: string;
	}
	export interface DocTypeResponseDocumentsFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		doctype: FormControl<string | null | undefined>,
	}
	export function CreateDocTypeResponseDocumentsFormGroup() {
		return new FormGroup<DocTypeResponseDocumentsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			doctype: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface EaadharXamlSchema {

		/** Required */
		KycRes: EaadharXamlSchemaKycRes;
	}
	export interface EaadharXamlSchemaFormProperties {
	}
	export function CreateEaadharXamlSchemaFormGroup() {
		return new FormGroup<EaadharXamlSchemaFormProperties>({
		});

	}

	export interface EaadharXamlSchemaKycRes {

		/**
		 * Required
		 * Min length: 1
		 */
		Rar: string;

		/** Required */
		Signature: EaadharXamlSchemaKycResSignature;

		/** Required */
		UidData: EaadharXamlSchemaKycResUidData;

		/**
		 * Required
		 * Min length: 1
		 */
		code: string;

		/**
		 * Required
		 * Min length: 1
		 */
		ret: string;

		/**
		 * Required
		 * Min length: 1
		 */
		ts: string;

		/**
		 * Required
		 * Min length: 1
		 */
		ttl: string;

		/**
		 * Required
		 * Min length: 1
		 */
		txn: string;
	}
	export interface EaadharXamlSchemaKycResFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		Rar: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		ret: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		ts: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		ttl: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		txn: FormControl<string | null | undefined>,
	}
	export function CreateEaadharXamlSchemaKycResFormGroup() {
		return new FormGroup<EaadharXamlSchemaKycResFormProperties>({
			Rar: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			ret: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			ts: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			ttl: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			txn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface EaadharXamlSchemaKycResSignature {

		/** Required */
		KeyInfo: EaadharXamlSchemaKycResSignatureKeyInfo;

		/**
		 * Required
		 * Min length: 1
		 */
		SignatureValue: string;

		/** Required */
		SignedInfo: EaadharXamlSchemaKycResSignatureSignedInfo;

		/**
		 * Required
		 * Min length: 1
		 */
		xmlns: string;
	}
	export interface EaadharXamlSchemaKycResSignatureFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		SignatureValue: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		xmlns: FormControl<string | null | undefined>,
	}
	export function CreateEaadharXamlSchemaKycResSignatureFormGroup() {
		return new FormGroup<EaadharXamlSchemaKycResSignatureFormProperties>({
			SignatureValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			xmlns: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface EaadharXamlSchemaKycResSignatureKeyInfo {

		/** Required */
		X509Data: EaadharXamlSchemaKycResSignatureKeyInfoX509Data;
	}
	export interface EaadharXamlSchemaKycResSignatureKeyInfoFormProperties {
	}
	export function CreateEaadharXamlSchemaKycResSignatureKeyInfoFormGroup() {
		return new FormGroup<EaadharXamlSchemaKycResSignatureKeyInfoFormProperties>({
		});

	}

	export interface EaadharXamlSchemaKycResSignatureKeyInfoX509Data {

		/**
		 * Required
		 * Min length: 1
		 */
		X509Certificate: string;

		/**
		 * Required
		 * Min length: 1
		 */
		X509SubjectName: string;
	}
	export interface EaadharXamlSchemaKycResSignatureKeyInfoX509DataFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		X509Certificate: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		X509SubjectName: FormControl<string | null | undefined>,
	}
	export function CreateEaadharXamlSchemaKycResSignatureKeyInfoX509DataFormGroup() {
		return new FormGroup<EaadharXamlSchemaKycResSignatureKeyInfoX509DataFormProperties>({
			X509Certificate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			X509SubjectName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface EaadharXamlSchemaKycResSignatureSignedInfo {

		/** Required */
		CanonicalizationMethod: EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod;

		/** Required */
		Reference: EaadharXamlSchemaKycResSignatureSignedInfoReference;

		/** Required */
		SignatureMethod: EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod;
	}
	export interface EaadharXamlSchemaKycResSignatureSignedInfoFormProperties {
	}
	export function CreateEaadharXamlSchemaKycResSignatureSignedInfoFormGroup() {
		return new FormGroup<EaadharXamlSchemaKycResSignatureSignedInfoFormProperties>({
		});

	}

	export interface EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod {

		/**
		 * Required
		 * Min length: 1
		 */
		Algorithm: string;
	}
	export interface EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethodFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		Algorithm: FormControl<string | null | undefined>,
	}
	export function CreateEaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethodFormGroup() {
		return new FormGroup<EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethodFormProperties>({
			Algorithm: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface EaadharXamlSchemaKycResSignatureSignedInfoReference {

		/** Required */
		DigestMethod: EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod;

		/**
		 * Required
		 * Min length: 1
		 */
		DigestValue: string;

		/** Required */
		Transforms: EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms;

		/** Required */
		URI: string;
	}
	export interface EaadharXamlSchemaKycResSignatureSignedInfoReferenceFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		DigestValue: FormControl<string | null | undefined>,

		/** Required */
		URI: FormControl<string | null | undefined>,
	}
	export function CreateEaadharXamlSchemaKycResSignatureSignedInfoReferenceFormGroup() {
		return new FormGroup<EaadharXamlSchemaKycResSignatureSignedInfoReferenceFormProperties>({
			DigestValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			URI: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod {

		/**
		 * Required
		 * Min length: 1
		 */
		Algorithm: string;
	}
	export interface EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethodFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		Algorithm: FormControl<string | null | undefined>,
	}
	export function CreateEaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethodFormGroup() {
		return new FormGroup<EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethodFormProperties>({
			Algorithm: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms {

		/** Required */
		Transform: EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransform;
	}
	export interface EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsFormProperties {
	}
	export function CreateEaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsFormGroup() {
		return new FormGroup<EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsFormProperties>({
		});

	}

	export interface EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransform {

		/**
		 * Required
		 * Min length: 1
		 */
		Algorithm: string;
	}
	export interface EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransformFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		Algorithm: FormControl<string | null | undefined>,
	}
	export function CreateEaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransformFormGroup() {
		return new FormGroup<EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransformFormProperties>({
			Algorithm: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod {

		/**
		 * Required
		 * Min length: 1
		 */
		Algorithm: string;
	}
	export interface EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethodFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		Algorithm: FormControl<string | null | undefined>,
	}
	export function CreateEaadharXamlSchemaKycResSignatureSignedInfoSignatureMethodFormGroup() {
		return new FormGroup<EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethodFormProperties>({
			Algorithm: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface EaadharXamlSchemaKycResUidData {

		/** Required */
		LData: EaadharXamlSchemaKycResUidDataLData;

		/**
		 * Required
		 * Min length: 1
		 */
		Pht: string;

		/** Required */
		Poa: EaadharXamlSchemaKycResUidDataPoa;

		/** Required */
		Poi: EaadharXamlSchemaKycResUidDataPoi;

		/** Required */
		Prn: EaadharXamlSchemaKycResUidDataPrn;

		/**
		 * Required
		 * Min length: 1
		 */
		tkn: string;

		/**
		 * Required
		 * Min length: 1
		 */
		uid: string;
	}
	export interface EaadharXamlSchemaKycResUidDataFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		Pht: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		tkn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateEaadharXamlSchemaKycResUidDataFormGroup() {
		return new FormGroup<EaadharXamlSchemaKycResUidDataFormProperties>({
			Pht: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			tkn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			uid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface EaadharXamlSchemaKycResUidDataLData {

		/**
		 * Required
		 * Min length: 1
		 */
		co: string;

		/**
		 * Required
		 * Min length: 1
		 */
		country: string;

		/**
		 * Required
		 * Min length: 1
		 */
		dist: string;

		/**
		 * Required
		 * Min length: 1
		 */
		lang: string;

		/**
		 * Required
		 * Min length: 1
		 */
		lm: string;

		/**
		 * Required
		 * Min length: 1
		 */
		loc: string;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Min length: 1
		 */
		pc: string;

		/**
		 * Required
		 * Min length: 1
		 */
		state: string;

		/**
		 * Required
		 * Min length: 1
		 */
		vtc: string;
	}
	export interface EaadharXamlSchemaKycResUidDataLDataFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		co: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		dist: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		lang: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		lm: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		loc: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		pc: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		state: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		vtc: FormControl<string | null | undefined>,
	}
	export function CreateEaadharXamlSchemaKycResUidDataLDataFormGroup() {
		return new FormGroup<EaadharXamlSchemaKycResUidDataLDataFormProperties>({
			co: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			dist: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			lang: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			lm: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			loc: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			pc: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			vtc: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface EaadharXamlSchemaKycResUidDataPoa {

		/**
		 * Required
		 * Min length: 1
		 */
		co: string;

		/**
		 * Required
		 * Min length: 1
		 */
		country: string;

		/**
		 * Required
		 * Min length: 1
		 */
		dist: string;

		/**
		 * Required
		 * Min length: 1
		 */
		lm: string;

		/**
		 * Required
		 * Min length: 1
		 */
		loc: string;

		/**
		 * Required
		 * Min length: 1
		 */
		pc: string;

		/**
		 * Required
		 * Min length: 1
		 */
		state: string;

		/**
		 * Required
		 * Min length: 1
		 */
		vtc: string;
	}
	export interface EaadharXamlSchemaKycResUidDataPoaFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		co: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		dist: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		lm: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		loc: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		pc: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		state: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		vtc: FormControl<string | null | undefined>,
	}
	export function CreateEaadharXamlSchemaKycResUidDataPoaFormGroup() {
		return new FormGroup<EaadharXamlSchemaKycResUidDataPoaFormProperties>({
			co: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			dist: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			lm: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			loc: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			pc: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			vtc: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface EaadharXamlSchemaKycResUidDataPoi {

		/**
		 * Required
		 * Min length: 1
		 */
		dob: string;

		/**
		 * Required
		 * Min length: 1
		 */
		gender: string;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
	}
	export interface EaadharXamlSchemaKycResUidDataPoiFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		dob: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		gender: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEaadharXamlSchemaKycResUidDataPoiFormGroup() {
		return new FormGroup<EaadharXamlSchemaKycResUidDataPoiFormProperties>({
			dob: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			gender: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface EaadharXamlSchemaKycResUidDataPrn {

		/**
		 * Required
		 * Min length: 1
		 */
		text: string;

		/**
		 * Required
		 * Min length: 1
		 */
		type: string;
	}
	export interface EaadharXamlSchemaKycResUidDataPrnFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		text: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEaadharXamlSchemaKycResUidDataPrnFormGroup() {
		return new FormGroup<EaadharXamlSchemaKycResUidDataPrnFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface FileUpload {

		/** The mime type of the file e.g. image/jpg, image/jpeg, image/png, application/pdf. */
		'Content-Type'?: string | null;
	}
	export interface FileUploadFormProperties {

		/** The mime type of the file e.g. image/jpg, image/jpeg, image/png, application/pdf. */
		'Content-Type': FormControl<string | null | undefined>,
	}
	export function CreateFileUploadFormGroup() {
		return new FormGroup<FileUploadFormProperties>({
			'Content-Type': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FileUploadResponse {
		details?: FileUploadResponseDetails;
	}
	export interface FileUploadResponseFormProperties {
	}
	export function CreateFileUploadResponseFormGroup() {
		return new FormGroup<FileUploadResponseFormProperties>({
		});

	}

	export interface FileUploadResponseDetails {

		/**
		 * The destination path of the file in DigiLocker including filename.
		 * Required
		 */
		Path: string;

		/**
		 * Size of file.
		 * Required
		 */
		size: string;
	}
	export interface FileUploadResponseDetailsFormProperties {

		/**
		 * The destination path of the file in DigiLocker including filename.
		 * Required
		 */
		Path: FormControl<string | null | undefined>,

		/**
		 * Size of file.
		 * Required
		 */
		size: FormControl<string | null | undefined>,
	}
	export function CreateFileUploadResponseDetailsFormGroup() {
		return new FormGroup<FileUploadResponseDetailsFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetStatistics {

		/** Provide the client id that was created during the application registration process on Partners Portal. */
		clientid?: string | null;

		/** Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret. */
		hmac?: string | null;

		/** Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes. */
		ts?: string | null;
	}
	export interface GetStatisticsFormProperties {

		/** Provide the client id that was created during the application registration process on Partners Portal. */
		clientid: FormControl<string | null | undefined>,

		/** Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret. */
		hmac: FormControl<string | null | undefined>,

		/** Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes. */
		ts: FormControl<string | null | undefined>,
	}
	export function CreateGetStatisticsFormGroup() {
		return new FormGroup<GetStatisticsFormProperties>({
			clientid: new FormControl<string | null | undefined>(undefined),
			hmac: new FormControl<string | null | undefined>(undefined),
			ts: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetStatisticsResponse {

		/**
		 * Count of authentic documents available through DigiLocker.
		 * Required
		 */
		authentic_documents: string;

		/**
		 * The date on which this statistics is generated.
		 * Required
		 */
		count_as_on: string;

		/**
		 * Count of issuer organizations registered on DigiLocker.
		 * Required
		 */
		issuers: string;

		/**
		 * List of last 12 months cumulative user registrations
		 * Required
		 */
		monthwise_registations: GetStatisticsResponseMonthwise_registations;

		/**
		 * Count of requester organizations registered on DigiLocker.
		 * Required
		 */
		requestors: string;

		/**
		 * Count of registered users on DigiLocker.
		 * Required
		 */
		users: string;

		/**
		 * List of cumulative year-wise counts of authentic documents in DigiLocker.
		 * Required
		 */
		yearwise_authentic_documents: GetStatisticsResponseYearwise_authentic_documents;
	}
	export interface GetStatisticsResponseFormProperties {

		/**
		 * Count of authentic documents available through DigiLocker.
		 * Required
		 */
		authentic_documents: FormControl<string | null | undefined>,

		/**
		 * The date on which this statistics is generated.
		 * Required
		 */
		count_as_on: FormControl<string | null | undefined>,

		/**
		 * Count of issuer organizations registered on DigiLocker.
		 * Required
		 */
		issuers: FormControl<string | null | undefined>,

		/**
		 * Count of requester organizations registered on DigiLocker.
		 * Required
		 */
		requestors: FormControl<string | null | undefined>,

		/**
		 * Count of registered users on DigiLocker.
		 * Required
		 */
		users: FormControl<string | null | undefined>,
	}
	export function CreateGetStatisticsResponseFormGroup() {
		return new FormGroup<GetStatisticsResponseFormProperties>({
			authentic_documents: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			count_as_on: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			issuers: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requestors: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			users: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetStatisticsResponseMonthwise_registations {

		/**
		 * Count of cumulative user registrations in the given month.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;
		details2?: GetStatisticsResponseMonthwise_registationsDetails2;

		/**
		 * Unique id of the list item.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/**
		 * Month of the year in numeric format with January as 1
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month?: number | null;

		/**
		 * Year in YYYY format
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year?: number | null;
	}
	export interface GetStatisticsResponseMonthwise_registationsFormProperties {

		/**
		 * Count of cumulative user registrations in the given month.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Unique id of the list item.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Month of the year in numeric format with January as 1
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month: FormControl<number | null | undefined>,

		/**
		 * Year in YYYY format
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGetStatisticsResponseMonthwise_registationsFormGroup() {
		return new FormGroup<GetStatisticsResponseMonthwise_registationsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetStatisticsResponseMonthwise_registationsDetails2 {

		/**
		 * Count of cumulative user registrations in the given month.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/**
		 * Unique id of the list item.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/**
		 * Month of the year in numeric format with January as 1
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month?: number | null;

		/**
		 * Year in YYYY format
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year?: number | null;
	}
	export interface GetStatisticsResponseMonthwise_registationsDetails2FormProperties {

		/**
		 * Count of cumulative user registrations in the given month.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Unique id of the list item.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Month of the year in numeric format with January as 1
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month: FormControl<number | null | undefined>,

		/**
		 * Year in YYYY format
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGetStatisticsResponseMonthwise_registationsDetails2FormGroup() {
		return new FormGroup<GetStatisticsResponseMonthwise_registationsDetails2FormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetStatisticsResponseYearwise_authentic_documents {

		/**
		 * Count of cumulative user authentic documents in
		 * the given year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;
		details?: GetStatisticsResponseYearwise_authentic_documentsDetails;
		details1?: GetStatisticsResponseYearwise_authentic_documentsDetails1;
		details2?: GetStatisticsResponseYearwise_authentic_documentsDetails2;

		/**
		 * Unique id of the list item.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/**
		 * Year in YYYY format.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year?: number | null;
	}
	export interface GetStatisticsResponseYearwise_authentic_documentsFormProperties {

		/**
		 * Count of cumulative user authentic documents in
		 * the given year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Unique id of the list item.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Year in YYYY format.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGetStatisticsResponseYearwise_authentic_documentsFormGroup() {
		return new FormGroup<GetStatisticsResponseYearwise_authentic_documentsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetStatisticsResponseYearwise_authentic_documentsDetails {

		/**
		 * Count of cumulative user authentic documents in the given year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/**
		 * Unique id of the list item.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/**
		 * Year in YYYY format.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year?: number | null;
	}
	export interface GetStatisticsResponseYearwise_authentic_documentsDetailsFormProperties {

		/**
		 * Count of cumulative user authentic documents in the given year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Unique id of the list item.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Year in YYYY format.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGetStatisticsResponseYearwise_authentic_documentsDetailsFormGroup() {
		return new FormGroup<GetStatisticsResponseYearwise_authentic_documentsDetailsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetStatisticsResponseYearwise_authentic_documentsDetails1 {

		/**
		 * Count of cumulative user authentic documents in the given year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/**
		 * Unique id of the list item.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/**
		 * Year in YYYY format.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year?: number | null;
	}
	export interface GetStatisticsResponseYearwise_authentic_documentsDetails1FormProperties {

		/**
		 * Count of cumulative user authentic documents in the given year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Unique id of the list item.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Year in YYYY format.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGetStatisticsResponseYearwise_authentic_documentsDetails1FormGroup() {
		return new FormGroup<GetStatisticsResponseYearwise_authentic_documentsDetails1FormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetStatisticsResponseYearwise_authentic_documentsDetails2 {

		/**
		 * Count of cumulative user authentic documents in the given year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/**
		 * Unique id of the list item.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/**
		 * Year in YYYY format.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year?: number | null;
	}
	export interface GetStatisticsResponseYearwise_authentic_documentsDetails2FormProperties {

		/**
		 * Count of cumulative user authentic documents in the given year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Unique id of the list item.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Year in YYYY format.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGetStatisticsResponseYearwise_authentic_documentsDetails2FormGroup() {
		return new FormGroup<GetStatisticsResponseYearwise_authentic_documentsDetails2FormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Issuer {

		/** Provide the client id that was created during the application registration process on Partners Portal. */
		clientid?: string | null;

		/** Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret. */
		hmac?: string | null;

		/** Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes. */
		ts?: string | null;
	}
	export interface IssuerFormProperties {

		/** Provide the client id that was created during the application registration process on Partners Portal. */
		clientid: FormControl<string | null | undefined>,

		/** Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret. */
		hmac: FormControl<string | null | undefined>,

		/** Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes. */
		ts: FormControl<string | null | undefined>,
	}
	export function CreateIssuerFormGroup() {
		return new FormGroup<IssuerFormProperties>({
			clientid: new FormControl<string | null | undefined>(undefined),
			hmac: new FormControl<string | null | undefined>(undefined),
			ts: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IssuerResponse {

		/**
		 * Required
		 * Minimum items: 1
		 */
		IssuerResponseIssuers: Array<IssuerResponseIssuers>;
	}
	export interface IssuerResponseFormProperties {
	}
	export function CreateIssuerResponseFormGroup() {
		return new FormGroup<IssuerResponseFormProperties>({
		});

	}

	export interface IssuerResponseIssuers {

		/**
		 * Required
		 * Min length: 1
		 */
		categories: string;

		/** Required */
		description: string;

		/**
		 * Required
		 * Min length: 1
		 */
		issuerid: string;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Min length: 1
		 */
		orgid: string;
	}
	export interface IssuerResponseIssuersFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		categories: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		issuerid: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		orgid: FormControl<string | null | undefined>,
	}
	export function CreateIssuerResponseIssuersFormGroup() {
		return new FormGroup<IssuerResponseIssuersFormProperties>({
			categories: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			issuerid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			orgid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface PullDocumentSchema {

		/** Other parameters required for fetching a document as listed in paramname field of Get Search Parameters API. */
		chasis_no?: string | null;

		/** The consent indicator from the user for performing demographic authentication using Aadhaar details. This Partner Application must capture the user consent for performing the Aadhaar demographic authentication. The possible values are ‘Y’ and ‘N’. The sign up request will be processed only when this indicator is ‘Y’. */
		consent?: string | null;

		/** A 5 character unique document type provided by DigiLocker. */
		doctype?: string | null;

		/** The organization id for the issuer in DigiLocker. This organization id is returned in Get List of Issuers API mentioned above. */
		orgid?: string | null;

		/** Other parameters required for fetching a document as listed in paramname field of Get Search Parameters API. */
		reg_no?: string | null;
	}
	export interface PullDocumentSchemaFormProperties {

		/** Other parameters required for fetching a document as listed in paramname field of Get Search Parameters API. */
		chasis_no: FormControl<string | null | undefined>,

		/** The consent indicator from the user for performing demographic authentication using Aadhaar details. This Partner Application must capture the user consent for performing the Aadhaar demographic authentication. The possible values are ‘Y’ and ‘N’. The sign up request will be processed only when this indicator is ‘Y’. */
		consent: FormControl<string | null | undefined>,

		/** A 5 character unique document type provided by DigiLocker. */
		doctype: FormControl<string | null | undefined>,

		/** The organization id for the issuer in DigiLocker. This organization id is returned in Get List of Issuers API mentioned above. */
		orgid: FormControl<string | null | undefined>,

		/** Other parameters required for fetching a document as listed in paramname field of Get Search Parameters API. */
		reg_no: FormControl<string | null | undefined>,
	}
	export function CreatePullDocumentSchemaFormGroup() {
		return new FormGroup<PullDocumentSchemaFormProperties>({
			chasis_no: new FormControl<string | null | undefined>(undefined),
			consent: new FormControl<string | null | undefined>(undefined),
			doctype: new FormControl<string | null | undefined>(undefined),
			orgid: new FormControl<string | null | undefined>(undefined),
			reg_no: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PushUri {

		/** Action that needs to be taken for the Aadhaar number and URI combination. Possible values are A for adding a new URI, U for updating an already added URI details or D for deleting the URI. */
		action?: string | null;

		/** Provide the client id that was created during the application registration process on Partners Portal. */
		clientid?: string | null;

		/**
		 * This is the DigiLocker Id of the user that was acquired using Get User Details API.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		digilockerid?: number | null;

		/** A unique number of the document. This id will be unique within the document type issued by the issuer. */
		docid?: string | null;

		/** Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret. */
		hmac?: string | null;

		/** The issue date of the document in DDMMYYYY format. */
		issuedate?: string | null;

		/** Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes. */
		ts?: string | null;

		/** This is the unique identifier of the document. */
		uri?: string | null;

		/**
		 * The date from which the document is valid in DDMMYYYY format. This may be same as the issue date.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		validfrom?: number | null;

		/** The expiry date of the document in DDMMYYYY format. */
		validto?: string | null;
	}
	export interface PushUriFormProperties {

		/** Action that needs to be taken for the Aadhaar number and URI combination. Possible values are A for adding a new URI, U for updating an already added URI details or D for deleting the URI. */
		action: FormControl<string | null | undefined>,

		/** Provide the client id that was created during the application registration process on Partners Portal. */
		clientid: FormControl<string | null | undefined>,

		/**
		 * This is the DigiLocker Id of the user that was acquired using Get User Details API.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		digilockerid: FormControl<number | null | undefined>,

		/** A unique number of the document. This id will be unique within the document type issued by the issuer. */
		docid: FormControl<string | null | undefined>,

		/** Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret. */
		hmac: FormControl<string | null | undefined>,

		/** The issue date of the document in DDMMYYYY format. */
		issuedate: FormControl<string | null | undefined>,

		/** Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes. */
		ts: FormControl<string | null | undefined>,

		/** This is the unique identifier of the document. */
		uri: FormControl<string | null | undefined>,

		/**
		 * The date from which the document is valid in DDMMYYYY format. This may be same as the issue date.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		validfrom: FormControl<number | null | undefined>,

		/** The expiry date of the document in DDMMYYYY format. */
		validto: FormControl<string | null | undefined>,
	}
	export function CreatePushUriFormGroup() {
		return new FormGroup<PushUriFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			clientid: new FormControl<string | null | undefined>(undefined),
			digilockerid: new FormControl<number | null | undefined>(undefined),
			docid: new FormControl<string | null | undefined>(undefined),
			hmac: new FormControl<string | null | undefined>(undefined),
			issuedate: new FormControl<string | null | undefined>(undefined),
			ts: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			validfrom: new FormControl<number | null | undefined>(undefined),
			validto: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RefreshAccessToken {

		/** Required */
		grant_type: string;

		/** Required */
		refresh_Token: string;
	}
	export interface RefreshAccessTokenFormProperties {

		/** Required */
		grant_type: FormControl<string | null | undefined>,

		/** Required */
		refresh_Token: FormControl<string | null | undefined>,
	}
	export function CreateRefreshAccessTokenFormGroup() {
		return new FormGroup<RefreshAccessTokenFormProperties>({
			grant_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			refresh_Token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RefreshToken {

		/** Required */
		client_id: string;

		/** Required */
		client_secret: string;

		/** Required */
		grant_type: RefreshTokenGrant_type;

		/** Required */
		refresh_token: string;
	}
	export interface RefreshTokenFormProperties {

		/** Required */
		client_id: FormControl<string | null | undefined>,

		/** Required */
		client_secret: FormControl<string | null | undefined>,

		/** Required */
		grant_type: FormControl<RefreshTokenGrant_type | null | undefined>,

		/** Required */
		refresh_token: FormControl<string | null | undefined>,
	}
	export function CreateRefreshTokenFormGroup() {
		return new FormGroup<RefreshTokenFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			client_secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			grant_type: new FormControl<RefreshTokenGrant_type | null | undefined>(undefined, [Validators.required]),
			refresh_token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RefreshTokenGrant_type { refresh_token = 'refresh_token' }

	export interface Response1 {

		/** repository_service_inactive */
		error?: string | null;

		/** Internal server error */
		error_description?: string | null;
	}
	export interface Response1FormProperties {

		/** repository_service_inactive */
		error: FormControl<string | null | undefined>,

		/** Internal server error */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponse1FormGroup() {
		return new FormGroup<Response1FormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Response10 {

		/** mobile_exists */
		error?: string | null;

		/** A DigiLocker account already exists with this mobile number. */
		error_description?: string | null;
	}
	export interface Response10FormProperties {

		/** mobile_exists */
		error: FormControl<string | null | undefined>,

		/** A DigiLocker account already exists with this mobile number. */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponse10FormGroup() {
		return new FormGroup<Response10FormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Response11 {

		/** auth_failure */
		error?: string | null;

		/** The data on Aadhaar does not match with one or more of Aadhaar, Name, DOB and Gender data provided. Aadhaar demographic authentication failure. */
		error_description?: string | null;
	}
	export interface Response11FormProperties {

		/** auth_failure */
		error: FormControl<string | null | undefined>,

		/** The data on Aadhaar does not match with one or more of Aadhaar, Name, DOB and Gender data provided. Aadhaar demographic authentication failure. */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponse11FormGroup() {
		return new FormGroup<Response11FormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Response12 {

		/** invalid_parameter */
		error?: string | null;

		/** One or more of the mandatory parameters is missing or invalid. The error description text will contain one or more of the following error texts:|-  uid parameter is missing or invalid  Name parameter is missing or invalid  Dob parameter is missing or invalid  Gender parameter is missing or invalid  Mobile parameter is missing or invalid  Verification parameter is missing or invalid  Consent parameter is missing or invalid  Timestamp parameter is missing or invalid  HMAC parameter is missing or invalid */
		error_description?: string | null;
	}
	export interface Response12FormProperties {

		/** invalid_parameter */
		error: FormControl<string | null | undefined>,

		/** One or more of the mandatory parameters is missing or invalid. The error description text will contain one or more of the following error texts:|-  uid parameter is missing or invalid  Name parameter is missing or invalid  Dob parameter is missing or invalid  Gender parameter is missing or invalid  Mobile parameter is missing or invalid  Verification parameter is missing or invalid  Consent parameter is missing or invalid  Timestamp parameter is missing or invalid  HMAC parameter is missing or invalid */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponse12FormGroup() {
		return new FormGroup<Response12FormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Response13 {

		/** repository_service_configerror */
		error?: string | null;

		/** The issuer service is not available. Please contact DigiLocker support. */
		error_description?: string | null;
	}
	export interface Response13FormProperties {

		/** repository_service_configerror */
		error: FormControl<string | null | undefined>,

		/** The issuer service is not available. Please contact DigiLocker support. */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponse13FormGroup() {
		return new FormGroup<Response13FormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Response14 {

		/** invalid_orgid */
		error?: string | null;

		/** The orgid parameter is missing or invalid. */
		error_description?: string | null;
	}
	export interface Response14FormProperties {

		/** invalid_orgid */
		error: FormControl<string | null | undefined>,

		/** The orgid parameter is missing or invalid. */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponse14FormGroup() {
		return new FormGroup<Response14FormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Response15 {

		/** invalid_doctype */
		error?: string | null;

		/** The doctype parameter is missing or invalid. */
		error_description?: string | null;
	}
	export interface Response15FormProperties {

		/** invalid_doctype */
		error: FormControl<string | null | undefined>,

		/** The doctype parameter is missing or invalid. */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponse15FormGroup() {
		return new FormGroup<Response15FormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Response16 {

		/** pull_response_pending */
		error?: string | null;

		/** The details provided above do not exactly match with the details on the certificate. Your request has been forwarded to the Issuer department. The Issuer department will verify the details provided above. If the verification is successful, your certificate will be made available in the Issued Documents section of your DigiLocker. */
		error_description?: string | null;
	}
	export interface Response16FormProperties {

		/** pull_response_pending */
		error: FormControl<string | null | undefined>,

		/** The details provided above do not exactly match with the details on the certificate. Your request has been forwarded to the Issuer department. The Issuer department will verify the details provided above. If the verification is successful, your certificate will be made available in the Issued Documents section of your DigiLocker. */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponse16FormGroup() {
		return new FormGroup<Response16FormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Response17 {

		/** uri_exists */
		error?: string | null;

		/** This document already exists in your Issued Documents. */
		error_description?: string | null;
	}
	export interface Response17FormProperties {

		/** uri_exists */
		error: FormControl<string | null | undefined>,

		/** This document already exists in your Issued Documents. */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponse17FormGroup() {
		return new FormGroup<Response17FormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Response18 {

		/** aadhaar_not_linked */
		error?: string | null;

		/** To access issued documents, please link your Aadhaar number to your DigiLocker account. */
		error_description?: string | null;
	}
	export interface Response18FormProperties {

		/** aadhaar_not_linked */
		error: FormControl<string | null | undefined>,

		/** To access issued documents, please link your Aadhaar number to your DigiLocker account. */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponse18FormGroup() {
		return new FormGroup<Response18FormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Response2 {

		/** repository_service_unpublished */
		error?: string | null;

		/** Internal server error */
		error_description?: string | null;
	}
	export interface Response2FormProperties {

		/** repository_service_unpublished */
		error: FormControl<string | null | undefined>,

		/** Internal server error */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponse2FormGroup() {
		return new FormGroup<Response2FormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Response3 {

		/** repository_service_unresponsive */
		error?: string | null;

		/** Internal server error */
		error_description?: string | null;
	}
	export interface Response3FormProperties {

		/** repository_service_unresponsive */
		error: FormControl<string | null | undefined>,

		/** Internal server error */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponse3FormGroup() {
		return new FormGroup<Response3FormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Response4 {

		/** repository_service_configerror */
		error?: string | null;

		/** Internal server error */
		error_description?: string | null;
	}
	export interface Response4FormProperties {

		/** repository_service_configerror */
		error: FormControl<string | null | undefined>,

		/** Internal server error */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponse4FormGroup() {
		return new FormGroup<Response4FormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Response5 {

		/** repository_service_resperror */
		error?: string | null;

		/** Internal server error */
		error_description?: string | null;
	}
	export interface Response5FormProperties {

		/** repository_service_resperror */
		error: FormControl<string | null | undefined>,

		/** Internal server error */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponse5FormGroup() {
		return new FormGroup<Response5FormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Response6 {

		/** repository_service_exception */
		error?: string | null;

		/** Internal server error */
		error_description?: string | null;
	}
	export interface Response6FormProperties {

		/** repository_service_exception */
		error: FormControl<string | null | undefined>,

		/** Internal server error */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponse6FormGroup() {
		return new FormGroup<Response6FormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Response7 {

		/** parameter_missing */
		error?: string | null;

		/** One or more of the mandatory parameters is missing */
		error_description?: string | null;
	}
	export interface Response7FormProperties {

		/** parameter_missing */
		error: FormControl<string | null | undefined>,

		/** One or more of the mandatory parameters is missing */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponse7FormGroup() {
		return new FormGroup<Response7FormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Response8 {

		/** invalid_ts */
		error?: string | null;

		/** Timestamp parameter is invalid */
		error_description?: string | null;
	}
	export interface Response8FormProperties {

		/** invalid_ts */
		error: FormControl<string | null | undefined>,

		/** Timestamp parameter is invalid */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponse8FormGroup() {
		return new FormGroup<Response8FormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Response9 {

		/** hmac_mismatch */
		error?: string | null;

		/** HMAC does not match */
		error_description?: string | null;
	}
	export interface Response9FormProperties {

		/** hmac_mismatch */
		error: FormControl<string | null | undefined>,

		/** HMAC does not match */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponse9FormGroup() {
		return new FormGroup<Response9FormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResponseFive {

		/** otp_error */
		error?: string | null;

		/** OTP could not be sent as the account may not have a valid mobile or a valid email. */
		error_description?: string | null;
	}
	export interface ResponseFiveFormProperties {

		/** otp_error */
		error: FormControl<string | null | undefined>,

		/** OTP could not be sent as the account may not have a valid mobile or a valid email. */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponseFiveFormGroup() {
		return new FormGroup<ResponseFiveFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResponseFour {

		/** multiple_mobile_accounts */
		error?: string | null;

		/** The mobile number provided is associated with more than one DigiLocker accounts. Please login using username. */
		error_description?: string | null;
	}
	export interface ResponseFourFormProperties {

		/** multiple_mobile_accounts */
		error: FormControl<string | null | undefined>,

		/** The mobile number provided is associated with more than one DigiLocker accounts. Please login using username. */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponseFourFormGroup() {
		return new FormGroup<ResponseFourFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResponseOne {

		/** invalid_response_type */
		error?: string | null;

		/** The response_type parameter is invalid */
		error_description?: string | null;
	}
	export interface ResponseOneFormProperties {

		/** invalid_response_type */
		error: FormControl<string | null | undefined>,

		/** The response_type parameter is invalid */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponseOneFormGroup() {
		return new FormGroup<ResponseOneFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResponseSeven {

		/** partner_service_unresponsive */
		error?: string | null;

		/** Internal server error */
		error_description?: string | null;
	}
	export interface ResponseSevenFormProperties {

		/** partner_service_unresponsive */
		error: FormControl<string | null | undefined>,

		/** Internal server error */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponseSevenFormGroup() {
		return new FormGroup<ResponseSevenFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResponseSix {

		/** unexpected_error */
		error?: string | null;

		/** Internal server error */
		error_description?: string | null;
	}
	export interface ResponseSixFormProperties {

		/** unexpected_error */
		error: FormControl<string | null | undefined>,

		/** Internal server error */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponseSixFormGroup() {
		return new FormGroup<ResponseSixFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResponseThree {

		/** invalid_mobile */
		error?: string | null;

		/** The dl_mobile parameter is invalid */
		error_description?: string | null;
	}
	export interface ResponseThreeFormProperties {

		/** invalid_mobile */
		error: FormControl<string | null | undefined>,

		/** The dl_mobile parameter is invalid */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponseThreeFormGroup() {
		return new FormGroup<ResponseThreeFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResponseTwo {

		/** invalid_username */
		error?: string | null;

		/** The dl_username parameter is invalid */
		error_description?: string | null;
	}
	export interface ResponseTwoFormProperties {

		/** invalid_username */
		error: FormControl<string | null | undefined>,

		/** The dl_username parameter is invalid */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateResponseTwoFormGroup() {
		return new FormGroup<ResponseTwoFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchParameters {

		/** Provide the client id that was created during the application registration process on Partners Portal. */
		clientid?: string | null;

		/** A 5 character unique document type provided by DigiLocker. */
		doctype?: string | null;

		/** Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret. */
		hmac?: string | null;

		/** The organization id for the issuer in DigiLocker. This organization id is returned in Get List of Issuers API mentioned earlier. */
		orgid?: string | null;

		/** Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes. */
		ts?: string | null;
	}
	export interface SearchParametersFormProperties {

		/** Provide the client id that was created during the application registration process on Partners Portal. */
		clientid: FormControl<string | null | undefined>,

		/** A 5 character unique document type provided by DigiLocker. */
		doctype: FormControl<string | null | undefined>,

		/** Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret. */
		hmac: FormControl<string | null | undefined>,

		/** The organization id for the issuer in DigiLocker. This organization id is returned in Get List of Issuers API mentioned earlier. */
		orgid: FormControl<string | null | undefined>,

		/** Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes. */
		ts: FormControl<string | null | undefined>,
	}
	export function CreateSearchParametersFormGroup() {
		return new FormGroup<SearchParametersFormProperties>({
			clientid: new FormControl<string | null | undefined>(undefined),
			doctype: new FormControl<string | null | undefined>(undefined),
			hmac: new FormControl<string | null | undefined>(undefined),
			orgid: new FormControl<string | null | undefined>(undefined),
			ts: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchParametersResponseElement {

		/**
		 * Required
		 * Min length: 1
		 */
		example: string;

		/**
		 * Required
		 * Min length: 1
		 */
		label: string;

		/**
		 * Required
		 * Min length: 1
		 */
		paramname: string;
		valuelist?: any;
	}
	export interface SearchParametersResponseElementFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		example: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		paramname: FormControl<string | null | undefined>,
		valuelist: FormControl<any | null | undefined>,
	}
	export function CreateSearchParametersResponseElementFormGroup() {
		return new FormGroup<SearchParametersResponseElementFormProperties>({
			example: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			paramname: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			valuelist: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface VerifyAccount {

		/** Provide the client id that was created during the application registration process on Partners Portal. */
		clientid?: string | null;

		/** Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret. */
		hmac?: string | null;

		/**
		 * This is the mobile number of the user. DigiLocker will check whether an account exists for this mobile number. Either uid or mobile is required to verify whether an account exists.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		mobile?: number | null;

		/** Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes. */
		ts?: string | null;

		/**
		 * This is the Aadhaar number of the user. DigiLocker will check whether an account exists for this Aadhaar number. Either uid or mobile is required to verify whether an account exists.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		uid?: number | null;
	}
	export interface VerifyAccountFormProperties {

		/** Provide the client id that was created during the application registration process on Partners Portal. */
		clientid: FormControl<string | null | undefined>,

		/** Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret. */
		hmac: FormControl<string | null | undefined>,

		/**
		 * This is the mobile number of the user. DigiLocker will check whether an account exists for this mobile number. Either uid or mobile is required to verify whether an account exists.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		mobile: FormControl<number | null | undefined>,

		/** Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes. */
		ts: FormControl<string | null | undefined>,

		/**
		 * This is the Aadhaar number of the user. DigiLocker will check whether an account exists for this Aadhaar number. Either uid or mobile is required to verify whether an account exists.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		uid: FormControl<number | null | undefined>,
	}
	export function CreateVerifyAccountFormGroup() {
		return new FormGroup<VerifyAccountFormProperties>({
			clientid: new FormControl<string | null | undefined>(undefined),
			hmac: new FormControl<string | null | undefined>(undefined),
			mobile: new FormControl<number | null | undefined>(undefined),
			ts: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface VerifyAccountResponse {

		/**
		 * A unique 36 character DigiLocker Id of the user account.
		 * Required
		 */
		digilockerid: string;

		/**
		 * true indicates that the provided Aadhaar/mobile number is already registered and false indicates otherwise.
		 * Required
		 */
		registered: string;
	}
	export interface VerifyAccountResponseFormProperties {

		/**
		 * A unique 36 character DigiLocker Id of the user account.
		 * Required
		 */
		digilockerid: FormControl<string | null | undefined>,

		/**
		 * true indicates that the provided Aadhaar/mobile number is already registered and false indicates otherwise.
		 * Required
		 */
		registered: FormControl<string | null | undefined>,
	}
	export function CreateVerifyAccountResponseFormGroup() {
		return new FormGroup<VerifyAccountResponseFormProperties>({
			digilockerid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			registered: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface XMLFormatSchema {

		/** Required */
		CertificateData: Array<string>;

		/** Required */
		Signature: XMLFormatSchemaSignature;
	}
	export interface XMLFormatSchemaFormProperties {
	}
	export function CreateXMLFormatSchemaFormGroup() {
		return new FormGroup<XMLFormatSchemaFormProperties>({
		});

	}

	export interface XMLFormatSchemaSignature {

		/** Required */
		KeyInfo: XMLFormatSchemaSignatureKeyInfo;
		SignatureValue?: any;
		SignedInfo?: any;
	}
	export interface XMLFormatSchemaSignatureFormProperties {
		SignatureValue: FormControl<any | null | undefined>,
		SignedInfo: FormControl<any | null | undefined>,
	}
	export function CreateXMLFormatSchemaSignatureFormGroup() {
		return new FormGroup<XMLFormatSchemaSignatureFormProperties>({
			SignatureValue: new FormControl<any | null | undefined>(undefined),
			SignedInfo: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface XMLFormatSchemaSignatureKeyInfo {
		X509Data?: any;
	}
	export interface XMLFormatSchemaSignatureKeyInfoFormProperties {
		X509Data: FormControl<any | null | undefined>,
	}
	export function CreateXMLFormatSchemaSignatureKeyInfoFormGroup() {
		return new FormGroup<XMLFormatSchemaSignatureKeyInfoFormProperties>({
			X509Data: new FormControl<any | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Authorization Code
		 * Call to this API starts authorization flow using OAuth 2.0 protocol. This isn't an API call—it's a DigiLocker web page that lets the user sign in to DigiLocker and authorize your application to access user’s data. After the user decides whether or not to authorize your app, they will be redirected to the redirect link provided by your application.
		 * Get oauth2/1/authorize
		 * @param {string} client_id Provide the client id that was created during the application registration process on Partners Portal.
		 * @param {string} response_type Provide the grant type requested, either token or code.
		 * @param {string} redirect_uri The URI to redirect the user after authorization has completed.
		 * @param {string} state This is your application specific data that will be passed back to your application through redirect_uri.
		 * @param {Get_Authorization_Code_idCode_challenge} Code_challenge A unique random string called code verifier (code_verifier) is
		 * created by the client application for every authorization request.
		 * The code_challenge sent as this parameter is the Base64URL (with no
		 * padding) encoded SHA256 hash of the code verifier.
		 *         Code block:
		 *        ```
		 *        string base64_url_encode_without_padding(string arg)
		 *        { 
		 *           string s = base64encode(arg); //Regular base64encoder with padding
		 *           s = s.replace(’=’,’’); //Remove any trailing ’=’
		 *           s = s.replace(’+’, ’-’); //Replace ’+’ with ’-’
		 *           s = s.replace(’/’, ’_’); //Replace ’/’ with ’_’ return s;
		 *         }
		 *         ```
		 * @param {Get_Authorization_Code_idCode_challenge_method} Code_challenge_method Specifies what method was used to encode a code_verifier to generate code_challenge parameter above. This parameter must be used with the code_challenge parameter. The only supported values for this parameter is S256.
		 * @param {string} dl_flow If this parameter is provided its value will always be signup. This parameter indicates that the user does not have a DigiLocker account and will be directed to the signup flow directly. After the account is created, the user will be directed to the authorization flow. If this parameter is not sent, the user will be redirected to the sign in flow.
		 * @param {number} Verified_mobile Verified mobile number of the user. If this parameter is passed, DigiLocker will skip the mobile OTP verification step during sign up. DigiLocker will treat the mobile number passed in this parameter as a verified mobile number by the trusted client application. This parameter will be used only if dl_flow parameter mentioned above is set to signup and will be ignored otherwise.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {any} successful operation
		 */
		Get_Authorization_Code_id(client_id: string | null | undefined, response_type: string, redirect_uri: string, state: string, Code_challenge: Get_Authorization_Code_idCode_challenge | null | undefined, Code_challenge_method: Get_Authorization_Code_idCode_challenge_method | null | undefined, dl_flow: string | null | undefined, Verified_mobile: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'oauth2/1/authorize?client_id=' + (client_id == null ? '' : encodeURIComponent(client_id)) + '&response_type=' + (response_type == null ? '' : encodeURIComponent(response_type)) + '&redirect_uri=' + (redirect_uri == null ? '' : encodeURIComponent(redirect_uri)) + '&state=' + (state == null ? '' : encodeURIComponent(state)) + '&Code_challenge=' + Code_challenge + '&Code_challenge_method=' + Code_challenge_method + '&dl_flow=' + (dl_flow == null ? '' : encodeURIComponent(dl_flow)) + '&Verified_mobile=' + Verified_mobile, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Device Code
		 * The client device calls the DigiLocker API to get the device code by providing the client_id issued to the device OEM and either the username or the mobile number of the user. DigiLocker responds with a device code and then sends an OTP on the mobile number and email address associated with the user’s account. The masked mobile number and email address is also sent in response. The device should use these values to notify the users about the mobile and email address on which the OTP has been sent.
		 * Post oauth2/1/code
		 * @return {DeviceAuthorizationCodeResponse} successful operation
		 */
		Get_Device_Code_id(requestBody: DeviceAuthorizationCode): Observable<DeviceAuthorizationCodeResponse> {
			return this.http.post<DeviceAuthorizationCodeResponse>(this.baseUri + 'oauth2/1/code', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get File from URI
		 * Returns a file from URI. This API can be used to fetch both issued document and uploaded document.
		 * Get oauth2/1/file/{uri}
		 * @param {string} uri This is the unique identifier of the document.
		 * @return {void} successful operation
		 */
		Get_File_from_URI_id(uri: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'oauth2/1/file/' + (uri == null ? '' : encodeURIComponent(uri)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get List of Self Uploaded Documents
		 * Returns the list of meta-data about documents or folders in user’s DigiLocker in a specific location.
		 * Get oauth2/1/files/
		 * @return {any} successful operation
		 */
		Get_List_of_Self_Uploaded_Documents(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'oauth2/1/files/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Issued Documents
		 * Returns the list of meta-data about issued documents in user’s DigiLocker.
		 * Get oauth2/1/files/issued
		 * @return {any} successful operation
		 */
		Get_List_of_issued_Documents_Version1_id(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'oauth2/1/files/issued', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get List of Self Uploaded Documents
		 * Returns the list of meta-data about documents or folders in user’s DigiLocker in a specific location.
		 * Get oauth2/1/files/{id}
		 * @param {string} id The id of the folder to list. To list the files of root folder of a user’s locker, do not send this parameter. This is sent as a part of the URL.
		 * @return {any} successful operation
		 */
		Get_List_of_Self_Uploaded_Documents_id(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'oauth2/1/files/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Revoke Token.
		 * Client applications can revoke a previously obtained refresh or access token when it is no longer needed. This is done by making a request to the token revocation endpoint. DigiLocker will invalidate the specified token and, if applicable, other tokens based on the same authorisation grant. This API may be used to sign out a user from DigiLocker. This API will work for server based web applications, mobile application and limited input devices.
		 * Post oauth2/1/revoke
		 * @return {void} successful operation
		 */
		Get_token_revocation_id(requestBody: Get_token_revocation_idPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'oauth2/1/revoke', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Access Token
		 * This endpoint only applies to apps using the authorization code flow. An app calls this endpoint to acquire a bearer token once the user has authorized the app. Calls to /oauth2/1/token need to be authenticated using the app's key and secret. These can either be passed as application/x-www-form-urlencoded POST parameters (see parameters below) or via HTTP basic authentication. If basic authentication is used, the app key should be provided as the username, and the app secret should be provided as the password.
		 * Post oauth2/1/token
		 * @param {Getaccesstoken_idPostBody} requestBody Details of documents being created.
		 * @return {AccessResponse} successful operation
		 */
		Getaccesstoken_id(requestBody: Getaccesstoken_idPostBody): Observable<AccessResponse> {
			return this.http.post<AccessResponse>(this.baseUri + 'oauth2/1/token', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get User Details
		 * Client applications can call this API to get the DigiLocker Id, name, date of birth and gender of the account holder. An access token is required to call this API. The API will return the user details of the account with which the access token is linked. It is strongly recommended that the API can be called by client application only once after acquiring the access token. Since the user details do not change, the client application may store the values and use them when necessary than calling this API repeatedly.
		 * Get oauth2/1/user
		 * @return {any} successful operation
		 */
		Account_Detail_API_id(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'oauth2/1/user', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Certificate Data in XML Format from URI
		 * Returns the certificate data in machine readable XML format for a URI. This API can be used to only for issued documents. The XML data may not be available for all documents. If the XML data is available for a particular document, the mime parameter in Get List of Issued Documents API will contain application/xml. Please refer to Digital Locker XML Certificate Formats for more details of XML formats of various documents.
		 * Get oauth2/1/xml/{uri}
		 * @return {void} successful operation
		 */
		Get_Certificate_Data_in_XML_Format_from_URI_id(uri: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'oauth2/1/xml/' + (uri == null ? '' : encodeURIComponent(uri)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Issued Documents
		 * Returns the list of meta-data about issued documents in user’s DigiLocker.
		 * Get oauth2/2/files/issued
		 * @return {Get_List_of_issued_Documents_idReturn} successful operation
		 */
		Get_List_of_issued_Documents_id(): Observable<Get_List_of_issued_Documents_idReturn> {
			return this.http.get<Get_List_of_issued_Documents_idReturn>(this.baseUri + 'oauth2/2/files/issued', {});
		}

		/**
		 * Get e-Aadhaar Data in XML Format
		 * Returns e-Aadhaar data in XML format for the account.
		 * Get oauth2/2/xml/eaadhaar
		 * @return {void} successful operation
		 */
		Get_e_Aadhaar_Data_in_XML_Format_id(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'oauth2/2/xml/eaadhaar', { observe: 'response', responseType: 'text' });
		}
	}

	export interface Get_Authorization_Code_idCode_challenge {
		parameter?: Get_Authorization_Code_idCode_challengeParameter | null;
	}
	export interface Get_Authorization_Code_idCode_challengeFormProperties {
		parameter: FormControl<Get_Authorization_Code_idCode_challengeParameter | null | undefined>,
	}
	export function CreateGet_Authorization_Code_idCode_challengeFormGroup() {
		return new FormGroup<Get_Authorization_Code_idCode_challengeFormProperties>({
			parameter: new FormControl<Get_Authorization_Code_idCode_challengeParameter | null | undefined>(undefined),
		});

	}

	export enum Get_Authorization_Code_idCode_challengeParameter { Base64URL = 'Base64URL', SHA256 = 'SHA256' }

	export interface Get_Authorization_Code_idCode_challenge_method {
		parameter?: Get_Authorization_Code_idCode_challenge_methodParameter | null;
	}
	export interface Get_Authorization_Code_idCode_challenge_methodFormProperties {
		parameter: FormControl<Get_Authorization_Code_idCode_challenge_methodParameter | null | undefined>,
	}
	export function CreateGet_Authorization_Code_idCode_challenge_methodFormGroup() {
		return new FormGroup<Get_Authorization_Code_idCode_challenge_methodFormProperties>({
			parameter: new FormControl<Get_Authorization_Code_idCode_challenge_methodParameter | null | undefined>(undefined),
		});

	}

	export enum Get_Authorization_Code_idCode_challenge_methodParameter { S256 = 'S256' }

	export interface Get_token_revocation_idPostBody {

		/**
		 * The token that needs to be revoked.
		 * Required
		 */
		token: string;

		/** The type of the above token. The value will be one of access_token or refresh_token. If this parameter is not sent, DigiLocker will look for this token in both access and refresh tokens and then revoke it. */
		token_type_hint?: Get_token_revocation_idPostBodyToken_type_hint | null;
	}
	export interface Get_token_revocation_idPostBodyFormProperties {

		/**
		 * The token that needs to be revoked.
		 * Required
		 */
		token: FormControl<string | null | undefined>,

		/** The type of the above token. The value will be one of access_token or refresh_token. If this parameter is not sent, DigiLocker will look for this token in both access and refresh tokens and then revoke it. */
		token_type_hint: FormControl<Get_token_revocation_idPostBodyToken_type_hint | null | undefined>,
	}
	export function CreateGet_token_revocation_idPostBodyFormGroup() {
		return new FormGroup<Get_token_revocation_idPostBodyFormProperties>({
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			token_type_hint: new FormControl<Get_token_revocation_idPostBodyToken_type_hint | null | undefined>(undefined),
		});

	}

	export enum Get_token_revocation_idPostBodyToken_type_hint { refresh_token = 'refresh_token', access_token = 'access_token' }

	export interface Getaccesstoken_idPostBody {
		'Get access token using authorization code'?: AccessToken;
		'Get access token using device code and OTP'?: DeviceAccessToken;
		'Get access token using refresh token'?: RefreshToken;
	}
	export interface Getaccesstoken_idPostBodyFormProperties {
	}
	export function CreateGetaccesstoken_idPostBodyFormGroup() {
		return new FormGroup<Getaccesstoken_idPostBodyFormProperties>({
		});

	}

	export interface Get_List_of_issued_Documents_idReturn {

		/**
		 * Required
		 * Minimum items: 1
		 */
		Get_List_of_issued_Documents_idReturnItems: Array<Get_List_of_issued_Documents_idReturnItems>;

		/**
		 * Required
		 * Min length: 1
		 */
		resource: string;
	}
	export interface Get_List_of_issued_Documents_idReturnFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateGet_List_of_issued_Documents_idReturnFormGroup() {
		return new FormGroup<Get_List_of_issued_Documents_idReturnFormProperties>({
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface Get_List_of_issued_Documents_idReturnItems {

		/**
		 * Required
		 * Min length: 1
		 */
		date: string;

		/**
		 * Required
		 * Min length: 1
		 */
		description: string;

		/**
		 * Required
		 * Min length: 1
		 */
		doctype: string;

		/**
		 * Required
		 * Min length: 1
		 */
		issuer: string;

		/**
		 * Required
		 * Min length: 1
		 */
		issuerid: string;
		mime?: Array<string>;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/** Required */
		parent: string;

		/** Required */
		size: string;

		/**
		 * Required
		 * Min length: 1
		 */
		type: string;

		/**
		 * Required
		 * Min length: 1
		 */
		uri: string;
	}
	export interface Get_List_of_issued_Documents_idReturnItemsFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		date: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		doctype: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		issuer: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		issuerid: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		parent: FormControl<string | null | undefined>,

		/** Required */
		size: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGet_List_of_issued_Documents_idReturnItemsFormGroup() {
		return new FormGroup<Get_List_of_issued_Documents_idReturnItemsFormProperties>({
			date: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			doctype: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			issuer: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			issuerid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			parent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

}

