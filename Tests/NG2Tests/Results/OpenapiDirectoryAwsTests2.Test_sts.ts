import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contains the response to a successful <a>AssumeRole</a> request, including temporary AWS credentials that can be used to make AWS requests.  */
	export interface AssumeRoleResponse {

		/** AWS credentials for API authentication. */
		Credentials?: Credentials;

		/** The identifiers for the temporary security credentials that the operation returns. */
		AssumedRoleUser?: AssumedRoleUser;

		/** Minimum: 0 */
		PackedPolicySize?: number | null;
	}

	/** Contains the response to a successful <a>AssumeRole</a> request, including temporary AWS credentials that can be used to make AWS requests.  */
	export interface AssumeRoleResponseFormProperties {

		/** Minimum: 0 */
		PackedPolicySize: FormControl<number | null | undefined>,
	}
	export function CreateAssumeRoleResponseFormGroup() {
		return new FormGroup<AssumeRoleResponseFormProperties>({
			PackedPolicySize: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** AWS credentials for API authentication. */
	export interface Credentials {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 16
		 */
		AccessKeyId: string;

		/** Required */
		SecretAccessKey: string;

		/** Required */
		SessionToken: string;

		/** Required */
		Expiration: Date;
	}

	/** AWS credentials for API authentication. */
	export interface CredentialsFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 16
		 */
		AccessKeyId: FormControl<string | null | undefined>,

		/** Required */
		SecretAccessKey: FormControl<string | null | undefined>,

		/** Required */
		SessionToken: FormControl<string | null | undefined>,

		/** Required */
		Expiration: FormControl<Date | null | undefined>,
	}
	export function CreateCredentialsFormGroup() {
		return new FormGroup<CredentialsFormProperties>({
			AccessKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(16), Validators.pattern('[\w]*')]),
			SecretAccessKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SessionToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Expiration: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The identifiers for the temporary security credentials that the operation returns. */
	export interface AssumedRoleUser {

		/**
		 * Required
		 * Max length: 193
		 * Min length: 2
		 */
		AssumedRoleId: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: string;
	}

	/** The identifiers for the temporary security credentials that the operation returns. */
	export interface AssumedRoleUserFormProperties {

		/**
		 * Required
		 * Max length: 193
		 * Min length: 2
		 */
		AssumedRoleId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateAssumedRoleUserFormGroup() {
		return new FormGroup<AssumedRoleUserFormProperties>({
			AssumedRoleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(193), Validators.minLength(2), Validators.pattern('[\w+=,.@:-]*')]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]+')]),
		});

	}


	/** A reference to the IAM managed policy that is passed as a session policy for a role session or a federated user session. */
	export interface PolicyDescriptorType {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		arn?: string | null;
	}

	/** A reference to the IAM managed policy that is passed as a session policy for a role session or a federated user session. */
	export interface PolicyDescriptorTypeFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreatePolicyDescriptorTypeFormGroup() {
		return new FormGroup<PolicyDescriptorTypeFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]+')]),
		});

	}


	/** You can pass custom key-value pair attributes when you assume a role or federate a user. These are called session tags. You can then use the session tags to control access to resources. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Tagging AWS STS Sessions</a> in the <i>IAM User Guide</i>. */
	export interface Tag {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Value: string;
	}

	/** You can pass custom key-value pair attributes when you assume a role or federate a user. These are called session tags. You can then use the session tags to control access to resources. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Tagging AWS STS Sessions</a> in the <i>IAM User Guide</i>. */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\p{L}\p{Z}\p{N}_.:/=+\-@]+')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(0), Validators.pattern('[\p{L}\p{Z}\p{N}_.:/=+\-@]*')]),
		});

	}

	export interface MalformedPolicyDocumentException {
	}
	export interface MalformedPolicyDocumentExceptionFormProperties {
	}
	export function CreateMalformedPolicyDocumentExceptionFormGroup() {
		return new FormGroup<MalformedPolicyDocumentExceptionFormProperties>({
		});

	}

	export interface PackedPolicyTooLargeException {
	}
	export interface PackedPolicyTooLargeExceptionFormProperties {
	}
	export function CreatePackedPolicyTooLargeExceptionFormGroup() {
		return new FormGroup<PackedPolicyTooLargeExceptionFormProperties>({
		});

	}

	export interface RegionDisabledException {
	}
	export interface RegionDisabledExceptionFormProperties {
	}
	export function CreateRegionDisabledExceptionFormGroup() {
		return new FormGroup<RegionDisabledExceptionFormProperties>({
		});

	}


	/** Contains the response to a successful <a>AssumeRoleWithSAML</a> request, including temporary AWS credentials that can be used to make AWS requests.  */
	export interface AssumeRoleWithSAMLResponse {

		/** AWS credentials for API authentication. */
		Credentials?: Credentials;

		/** The identifiers for the temporary security credentials that the operation returns. */
		AssumedRoleUser?: AssumedRoleUser;

		/** Minimum: 0 */
		PackedPolicySize?: number | null;
		Subject?: string | null;
		SubjectType?: string | null;
		Issuer?: string | null;
		Audience?: string | null;
		NameQualifier?: string | null;
	}

	/** Contains the response to a successful <a>AssumeRoleWithSAML</a> request, including temporary AWS credentials that can be used to make AWS requests.  */
	export interface AssumeRoleWithSAMLResponseFormProperties {

		/** Minimum: 0 */
		PackedPolicySize: FormControl<number | null | undefined>,
		Subject: FormControl<string | null | undefined>,
		SubjectType: FormControl<string | null | undefined>,
		Issuer: FormControl<string | null | undefined>,
		Audience: FormControl<string | null | undefined>,
		NameQualifier: FormControl<string | null | undefined>,
	}
	export function CreateAssumeRoleWithSAMLResponseFormGroup() {
		return new FormGroup<AssumeRoleWithSAMLResponseFormProperties>({
			PackedPolicySize: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			Subject: new FormControl<string | null | undefined>(undefined),
			SubjectType: new FormControl<string | null | undefined>(undefined),
			Issuer: new FormControl<string | null | undefined>(undefined),
			Audience: new FormControl<string | null | undefined>(undefined),
			NameQualifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IDPRejectedClaimException {
	}
	export interface IDPRejectedClaimExceptionFormProperties {
	}
	export function CreateIDPRejectedClaimExceptionFormGroup() {
		return new FormGroup<IDPRejectedClaimExceptionFormProperties>({
		});

	}

	export interface InvalidIdentityTokenException {
	}
	export interface InvalidIdentityTokenExceptionFormProperties {
	}
	export function CreateInvalidIdentityTokenExceptionFormGroup() {
		return new FormGroup<InvalidIdentityTokenExceptionFormProperties>({
		});

	}

	export interface ExpiredTokenException {
	}
	export interface ExpiredTokenExceptionFormProperties {
	}
	export function CreateExpiredTokenExceptionFormGroup() {
		return new FormGroup<ExpiredTokenExceptionFormProperties>({
		});

	}


	/** Contains the response to a successful <a>AssumeRoleWithWebIdentity</a> request, including temporary AWS credentials that can be used to make AWS requests.  */
	export interface AssumeRoleWithWebIdentityResponse {

		/** AWS credentials for API authentication. */
		Credentials?: Credentials;

		/**
		 * Max length: 255
		 * Min length: 6
		 */
		SubjectFromWebIdentityToken?: string | null;

		/** The identifiers for the temporary security credentials that the operation returns. */
		AssumedRoleUser?: AssumedRoleUser;

		/** Minimum: 0 */
		PackedPolicySize?: number | null;
		Provider?: string | null;
		Audience?: string | null;
	}

	/** Contains the response to a successful <a>AssumeRoleWithWebIdentity</a> request, including temporary AWS credentials that can be used to make AWS requests.  */
	export interface AssumeRoleWithWebIdentityResponseFormProperties {

		/**
		 * Max length: 255
		 * Min length: 6
		 */
		SubjectFromWebIdentityToken: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		PackedPolicySize: FormControl<number | null | undefined>,
		Provider: FormControl<string | null | undefined>,
		Audience: FormControl<string | null | undefined>,
	}
	export function CreateAssumeRoleWithWebIdentityResponseFormGroup() {
		return new FormGroup<AssumeRoleWithWebIdentityResponseFormProperties>({
			SubjectFromWebIdentityToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(6)]),
			PackedPolicySize: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			Provider: new FormControl<string | null | undefined>(undefined),
			Audience: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IDPCommunicationErrorException {
	}
	export interface IDPCommunicationErrorExceptionFormProperties {
	}
	export function CreateIDPCommunicationErrorExceptionFormGroup() {
		return new FormGroup<IDPCommunicationErrorExceptionFormProperties>({
		});

	}


	/** A document that contains additional information about the authorization status of a request from an encoded message that is returned in response to an AWS request. */
	export interface DecodeAuthorizationMessageResponse {
		DecodedMessage?: string | null;
	}

	/** A document that contains additional information about the authorization status of a request from an encoded message that is returned in response to an AWS request. */
	export interface DecodeAuthorizationMessageResponseFormProperties {
		DecodedMessage: FormControl<string | null | undefined>,
	}
	export function CreateDecodeAuthorizationMessageResponseFormGroup() {
		return new FormGroup<DecodeAuthorizationMessageResponseFormProperties>({
			DecodedMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidAuthorizationMessageException {
	}
	export interface InvalidAuthorizationMessageExceptionFormProperties {
	}
	export function CreateInvalidAuthorizationMessageExceptionFormGroup() {
		return new FormGroup<InvalidAuthorizationMessageExceptionFormProperties>({
		});

	}

	export interface GetAccessKeyInfoResponse {
		Account?: string | null;
	}
	export interface GetAccessKeyInfoResponseFormProperties {
		Account: FormControl<string | null | undefined>,
	}
	export function CreateGetAccessKeyInfoResponseFormGroup() {
		return new FormGroup<GetAccessKeyInfoResponseFormProperties>({
			Account: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a successful <a>GetCallerIdentity</a> request, including information about the entity making the request. */
	export interface GetCallerIdentityResponse {
		UserId?: string | null;
		Account?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn?: string | null;
	}

	/** Contains the response to a successful <a>GetCallerIdentity</a> request, including information about the entity making the request. */
	export interface GetCallerIdentityResponseFormProperties {
		UserId: FormControl<string | null | undefined>,
		Account: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateGetCallerIdentityResponseFormGroup() {
		return new FormGroup<GetCallerIdentityResponseFormProperties>({
			UserId: new FormControl<string | null | undefined>(undefined),
			Account: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]+')]),
		});

	}


	/** Contains the response to a successful <a>GetFederationToken</a> request, including temporary AWS credentials that can be used to make AWS requests.  */
	export interface GetFederationTokenResponse {

		/** AWS credentials for API authentication. */
		Credentials?: Credentials;

		/** Identifiers for the federated user that is associated with the credentials. */
		FederatedUser?: FederatedUser;

		/** Minimum: 0 */
		PackedPolicySize?: number | null;
	}

	/** Contains the response to a successful <a>GetFederationToken</a> request, including temporary AWS credentials that can be used to make AWS requests.  */
	export interface GetFederationTokenResponseFormProperties {

		/** Minimum: 0 */
		PackedPolicySize: FormControl<number | null | undefined>,
	}
	export function CreateGetFederationTokenResponseFormGroup() {
		return new FormGroup<GetFederationTokenResponseFormProperties>({
			PackedPolicySize: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** Identifiers for the federated user that is associated with the credentials. */
	export interface FederatedUser {

		/**
		 * Required
		 * Max length: 193
		 * Min length: 2
		 */
		FederatedUserId: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: string;
	}

	/** Identifiers for the federated user that is associated with the credentials. */
	export interface FederatedUserFormProperties {

		/**
		 * Required
		 * Max length: 193
		 * Min length: 2
		 */
		FederatedUserId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateFederatedUserFormGroup() {
		return new FormGroup<FederatedUserFormProperties>({
			FederatedUserId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(193), Validators.minLength(2), Validators.pattern('[\w+=,.@\:-]*')]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]+')]),
		});

	}


	/** Contains the response to a successful <a>GetSessionToken</a> request, including temporary AWS credentials that can be used to make AWS requests.  */
	export interface GetSessionTokenResponse {

		/** AWS credentials for API authentication. */
		Credentials?: Credentials;
	}

	/** Contains the response to a successful <a>GetSessionToken</a> request, including temporary AWS credentials that can be used to make AWS requests.  */
	export interface GetSessionTokenResponseFormProperties {
	}
	export function CreateGetSessionTokenResponseFormGroup() {
		return new FormGroup<GetSessionTokenResponseFormProperties>({
		});

	}

	export interface AssumeRoleRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		RoleSessionName: string;
		PolicyArns?: Array<PolicyDescriptorType>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Policy?: string | null;

		/**
		 * Minimum: 900
		 * Maximum: 43200
		 */
		DurationSeconds?: number | null;

		/** Maximum items: 50 */
		Tags?: Array<Tag>;

		/** Maximum items: 50 */
		TransitiveTagKeys?: Array<string>;

		/**
		 * Max length: 1224
		 * Min length: 2
		 */
		ExternalId?: string | null;

		/**
		 * Max length: 256
		 * Min length: 9
		 */
		SerialNumber?: string | null;

		/**
		 * Max length: 6
		 * Min length: 6
		 */
		TokenCode?: string | null;
	}
	export interface AssumeRoleRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		RoleSessionName: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Policy: FormControl<string | null | undefined>,

		/**
		 * Minimum: 900
		 * Maximum: 43200
		 */
		DurationSeconds: FormControl<number | null | undefined>,

		/**
		 * Max length: 1224
		 * Min length: 2
		 */
		ExternalId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 9
		 */
		SerialNumber: FormControl<string | null | undefined>,

		/**
		 * Max length: 6
		 * Min length: 6
		 */
		TokenCode: FormControl<string | null | undefined>,
	}
	export function CreateAssumeRoleRequestFormGroup() {
		return new FormGroup<AssumeRoleRequestFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]+')]),
			RoleSessionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(2), Validators.pattern('[\w+=,.@-]*')]),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\u0009\u000A\u000D\u0020-\u00FF]+')]),
			DurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(900), Validators.max(43200)]),
			ExternalId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1224), Validators.minLength(2), Validators.pattern('[\w+=,.@:\/-]*')]),
			SerialNumber: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(9), Validators.pattern('[\w+=/:,.@-]*')]),
			TokenCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(6), Validators.minLength(6), Validators.pattern('[\d]*')]),
		});

	}

	export interface AssumeRoleWithSAMLRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PrincipalArn: string;

		/**
		 * Required
		 * Max length: 100000
		 * Min length: 4
		 */
		SAMLAssertion: string;
		PolicyArns?: Array<PolicyDescriptorType>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Policy?: string | null;

		/**
		 * Minimum: 900
		 * Maximum: 43200
		 */
		DurationSeconds?: number | null;
	}
	export interface AssumeRoleWithSAMLRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		PrincipalArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100000
		 * Min length: 4
		 */
		SAMLAssertion: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Policy: FormControl<string | null | undefined>,

		/**
		 * Minimum: 900
		 * Maximum: 43200
		 */
		DurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateAssumeRoleWithSAMLRequestFormGroup() {
		return new FormGroup<AssumeRoleWithSAMLRequestFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]+')]),
			PrincipalArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]+')]),
			SAMLAssertion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100000), Validators.minLength(4)]),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\u0009\u000A\u000D\u0020-\u00FF]+')]),
			DurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(900), Validators.max(43200)]),
		});

	}

	export interface AssumeRoleWithWebIdentityRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		RoleSessionName: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 4
		 */
		WebIdentityToken: string;

		/**
		 * Max length: 2048
		 * Min length: 4
		 */
		ProviderId?: string | null;
		PolicyArns?: Array<PolicyDescriptorType>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Policy?: string | null;

		/**
		 * Minimum: 900
		 * Maximum: 43200
		 */
		DurationSeconds?: number | null;
	}
	export interface AssumeRoleWithWebIdentityRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 2
		 */
		RoleSessionName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 4
		 */
		WebIdentityToken: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 4
		 */
		ProviderId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Policy: FormControl<string | null | undefined>,

		/**
		 * Minimum: 900
		 * Maximum: 43200
		 */
		DurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateAssumeRoleWithWebIdentityRequestFormGroup() {
		return new FormGroup<AssumeRoleWithWebIdentityRequestFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('[\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]+')]),
			RoleSessionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(2), Validators.pattern('[\w+=,.@-]*')]),
			WebIdentityToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(4)]),
			ProviderId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(4)]),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\u0009\u000A\u000D\u0020-\u00FF]+')]),
			DurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(900), Validators.max(43200)]),
		});

	}

	export interface DecodeAuthorizationMessageRequest {

		/**
		 * Required
		 * Max length: 10240
		 * Min length: 1
		 */
		EncodedMessage: string;
	}
	export interface DecodeAuthorizationMessageRequestFormProperties {

		/**
		 * Required
		 * Max length: 10240
		 * Min length: 1
		 */
		EncodedMessage: FormControl<string | null | undefined>,
	}
	export function CreateDecodeAuthorizationMessageRequestFormGroup() {
		return new FormGroup<DecodeAuthorizationMessageRequestFormProperties>({
			EncodedMessage: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(10240), Validators.minLength(1)]),
		});

	}

	export interface GetAccessKeyInfoRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 16
		 */
		AccessKeyId: string;
	}
	export interface GetAccessKeyInfoRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 16
		 */
		AccessKeyId: FormControl<string | null | undefined>,
	}
	export function CreateGetAccessKeyInfoRequestFormGroup() {
		return new FormGroup<GetAccessKeyInfoRequestFormProperties>({
			AccessKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(16), Validators.pattern('[\w]*')]),
		});

	}

	export interface GetCallerIdentityRequest {
	}
	export interface GetCallerIdentityRequestFormProperties {
	}
	export function CreateGetCallerIdentityRequestFormGroup() {
		return new FormGroup<GetCallerIdentityRequestFormProperties>({
		});

	}

	export interface GetFederationTokenRequest {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 2
		 */
		Name: string;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Policy?: string | null;
		PolicyArns?: Array<PolicyDescriptorType>;

		/**
		 * Minimum: 900
		 * Maximum: 129600
		 */
		DurationSeconds?: number | null;

		/** Maximum items: 50 */
		Tags?: Array<Tag>;
	}
	export interface GetFederationTokenRequestFormProperties {

		/**
		 * Required
		 * Max length: 32
		 * Min length: 2
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Policy: FormControl<string | null | undefined>,

		/**
		 * Minimum: 900
		 * Maximum: 129600
		 */
		DurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateGetFederationTokenRequestFormGroup() {
		return new FormGroup<GetFederationTokenRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(2), Validators.pattern('[\w+=,.@-]*')]),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\u0009\u000A\u000D\u0020-\u00FF]+')]),
			DurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(900), Validators.max(129600)]),
		});

	}

	export interface GetSessionTokenRequest {

		/**
		 * Minimum: 900
		 * Maximum: 129600
		 */
		DurationSeconds?: number | null;

		/**
		 * Max length: 256
		 * Min length: 9
		 */
		SerialNumber?: string | null;

		/**
		 * Max length: 6
		 * Min length: 6
		 */
		TokenCode?: string | null;
	}
	export interface GetSessionTokenRequestFormProperties {

		/**
		 * Minimum: 900
		 * Maximum: 129600
		 */
		DurationSeconds: FormControl<number | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 9
		 */
		SerialNumber: FormControl<string | null | undefined>,

		/**
		 * Max length: 6
		 * Min length: 6
		 */
		TokenCode: FormControl<string | null | undefined>,
	}
	export function CreateGetSessionTokenRequestFormGroup() {
		return new FormGroup<GetSessionTokenRequestFormProperties>({
			DurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(900), Validators.max(129600)]),
			SerialNumber: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(9), Validators.pattern('[\w+=/:,.@-]*')]),
			TokenCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(6), Validators.minLength(6), Validators.pattern('[\d]*')]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Returns a set of temporary security credentials that you can use to access AWS resources that you might not normally have access to. These temporary credentials consist of an access key ID, a secret access key, and a security token. Typically, you use <code>AssumeRole</code> within your account or for cross-account access. For a comparison of <code>AssumeRole</code> with other API operations that produce temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the AWS STS API operations</a> in the <i>IAM User Guide</i>.</p> <important> <p>You cannot use AWS account root user credentials to call <code>AssumeRole</code>. You must use credentials for an IAM user or an IAM role to call <code>AssumeRole</code>.</p> </important> <p>For cross-account access, imagine that you own multiple accounts and need to access resources in each account. You could create long-term credentials in each account to access those resources. However, managing all those credentials and remembering which one can access which account can be time consuming. Instead, you can create one set of long-term credentials in one account. Then use temporary security credentials to access all the other accounts by assuming roles in those accounts. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM Roles</a> in the <i>IAM User Guide</i>. </p> <p> <b>Session Duration</b> </p> <p>By default, the temporary security credentials created by <code>AssumeRole</code> last for one hour. However, you can use the optional <code>DurationSeconds</code> parameter to specify the duration of your session. You can provide a value from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. To learn how to view the maximum value for your role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session">View the Maximum Session Duration Setting for a Role</a> in the <i>IAM User Guide</i>. The maximum session duration limit applies when you use the <code>AssumeRole*</code> API operations or the <code>assume-role*</code> CLI commands. However the limit does not apply when you use those operations to create a console URL. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a> in the <i>IAM User Guide</i>.</p> <p> <b>Permissions</b> </p> <p>The temporary security credentials created by <code>AssumeRole</code> can be used to make API calls to any AWS service with the following exception: You cannot call the AWS STS <code>GetFederationToken</code> or <code>GetSessionToken</code> API operations.</p> <p>(Optional) You can pass inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policies</a> to this operation. You can pass a single JSON policy document to use as an inline session policy. You can also specify up to 10 managed policies to use as managed session policies. The plain text that you use for both inline and managed session policies can't exceed 2,048 characters. Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent AWS API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p> <p>To assume a role from a different account, your AWS account must be trusted by the role. The trust relationship is defined in the role's trust policy when the role is created. That trust policy states which accounts are allowed to delegate that access to users in the account. </p> <p>A user who wants to access a role in a different account must also have permissions that are delegated from the user account administrator. The administrator must attach a policy that allows the user to call <code>AssumeRole</code> for the ARN of the role in the other account. If the user is in the same account as the role, then you can do either of the following:</p> <ul> <li> <p>Attach a policy to the user (identical to the previous user in a different account).</p> </li> <li> <p>Add the user as a principal directly in the role's trust policy.</p> </li> </ul> <p>In this case, the trust policy acts as an IAM resource-based policy. Users in the same account as the role do not need explicit permission to assume the role. For more information about trust policies and resource-based policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a> in the <i>IAM User Guide</i>.</p> <p> <b>Tags</b> </p> <p>(Optional) You can pass tag key-value pairs to your session. These tags are called session tags. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the <i>IAM User Guide</i>.</p> <p>An administrator must grant you the permissions necessary to pass session tags. The administrator can also create granular permissions to allow you to pass only specific session tags. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html">Tutorial: Using Tags for Attribute-Based Access Control</a> in the <i>IAM User Guide</i>.</p> <p>You can set the session tags as transitive. Transitive tags persist during role chaining. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining">Chaining Roles with Session Tags</a> in the <i>IAM User Guide</i>.</p> <p> <b>Using MFA with AssumeRole</b> </p> <p>(Optional) You can include multi-factor authentication (MFA) information when you call <code>AssumeRole</code>. This is useful for cross-account scenarios to ensure that the user that assumes the role has been authenticated with an AWS MFA device. In that scenario, the trust policy of the role being assumed includes a condition that tests for MFA authentication. If the caller does not include valid MFA information, the request to assume the role is denied. The condition in a trust policy that tests for MFA authentication might look like the following example.</p> <p> <code>"Condition": {"Bool": {"aws:MultiFactorAuthPresent": true}}</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/MFAProtectedAPI.html">Configuring MFA-Protected API Access</a> in the <i>IAM User Guide</i> guide.</p> <p>To use MFA with <code>AssumeRole</code>, you pass values for the <code>SerialNumber</code> and <code>TokenCode</code> parameters. The <code>SerialNumber</code> value identifies the user's hardware or virtual MFA device. The <code>TokenCode</code> is the time-based one-time password (TOTP) that the MFA device produces. </p>
		 * Get #Action=AssumeRole
		 * @param {string} RoleArn The Amazon Resource Name (ARN) of the role to assume.
		 * @param {string} RoleSessionName <p>An identifier for the assumed role session.</p> <p>Use the role session name to uniquely identify a session when the same role is assumed by different principals or for different reasons. In cross-account scenarios, the role session name is visible to, and can be logged by the account that owns the role. The role session name is also used in the ARN of the assumed role principal. This means that subsequent cross-account API requests that use the temporary security credentials will expose the role session name to the external account in their AWS CloudTrail logs.</p> <p>The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@-</p>
		 * @param {Array<PolicyDescriptorType>} PolicyArns <p>The Amazon Resource Names (ARNs) of the IAM managed policies that you want to use as managed session policies. The policies must exist in the same account as the role.</p> <p>This parameter is optional. You can provide up to 10 managed policy ARNs. However, the plain text that you use for both inline and managed session policies can't exceed 2,048 characters. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the AWS General Reference.</p> <note> <p>An AWS conversion compresses the passed session policies and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plain text meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit. </p> </note> <p>Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent AWS API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p>
		 * @param {string} Policy <p>An IAM policy in JSON format that you want to use as an inline session policy.</p> <p>This parameter is optional. Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent AWS API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p> <p>The plain text that you use for both inline and managed session policies can't exceed 2,048 characters. The JSON policy characters can be any ASCII character from the space character to the end of the valid character list (\u0020 through \u00FF). It can also include the tab (\u0009), linefeed (\u000A), and carriage return (\u000D) characters.</p> <note> <p>An AWS conversion compresses the passed session policies and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plain text meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit. </p> </note>
		 * @param {number} DurationSeconds <p>The duration, in seconds, of the role session. The value can range from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. If you specify a value higher than this setting, the operation fails. For example, if you specify a session duration of 12 hours, but your administrator set the maximum session duration to 6 hours, your operation fails. To learn how to view the maximum value for your role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session">View the Maximum Session Duration Setting for a Role</a> in the <i>IAM User Guide</i>.</p> <p>By default, the value is set to <code>3600</code> seconds. </p> <note> <p>The <code>DurationSeconds</code> parameter is separate from the duration of a console session that you might request using the returned credentials. The request to the federation endpoint for a console sign-in token takes a <code>SessionDuration</code> parameter that specifies the maximum length of the console session. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-custom-url.html">Creating a URL that Enables Federated Users to Access the AWS Management Console</a> in the <i>IAM User Guide</i>.</p> </note>
		 * @param {Array<Tag>} Tags <p>A list of session tags that you want to pass. Each session tag consists of a key name and an associated value. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Tagging AWS STS Sessions</a> in the <i>IAM User Guide</i>.</p> <p>This parameter is optional. You can pass up to 50 session tags. The plain text session tag keys can’t exceed 128 characters, and the values can’t exceed 256 characters. For these and additional limits, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-limits.html#reference_iam-limits-entity-length">IAM and STS Character Limits</a> in the <i>IAM User Guide</i>.</p> <note> <p>An AWS conversion compresses the passed session policies and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plain text meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit. </p> </note> <p>You can pass a session tag with the same key as a tag that is already attached to the role. When you do, session tags override a role tag with the same key. </p> <p>Tag key–value pairs are not case sensitive, but case is preserved. This means that you cannot have separate <code>Department</code> and <code>department</code> tag keys. Assume that the role has the <code>Department</code>=<code>Marketing</code> tag and you pass the <code>department</code>=<code>engineering</code> session tag. <code>Department</code> and <code>department</code> are not saved as separate tags, and the session tag passed in the request takes precedence over the role tag.</p> <p>Additionally, if you used temporary credentials to perform this operation, the new session inherits any transitive session tags from the calling session. If you pass a session tag with the same key as an inherited tag, the operation fails. To view the inherited tags for a session, see the AWS CloudTrail logs. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/session-tags.html#id_session-tags_ctlogs">Viewing Session Tags in CloudTrail</a> in the <i>IAM User Guide</i>.</p>
		 * @param {Array<string>} TransitiveTagKeys <p>A list of keys for session tags that you want to set as transitive. If you set a tag key as transitive, the corresponding key and value passes to subsequent sessions in a role chain. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining">Chaining Roles with Session Tags</a> in the <i>IAM User Guide</i>.</p> <p>This parameter is optional. When you set session tags as transitive, the session policy and session tags packed binary limit is not affected.</p> <p>If you choose not to specify a transitive tag key, then no tags are passed from this session to any subsequent sessions.</p>
		 * @param {string} ExternalId <p>A unique identifier that might be required when you assume a role in another account. If the administrator of the account to which the role belongs provided you with an external ID, then provide that value in the <code>ExternalId</code> parameter. This value can be any string, such as a passphrase or account number. A cross-account role is usually set up to trust everyone in an account. Therefore, the administrator of the trusting account might send an external ID to the administrator of the trusted account. That way, only someone with the ID can assume the role, rather than everyone in the account. For more information about the external ID, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html">How to Use an External ID When Granting Access to Your AWS Resources to a Third Party</a> in the <i>IAM User Guide</i>.</p> <p>The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-</p>
		 * @param {string} SerialNumber <p>The identification number of the MFA device that is associated with the user who is making the <code>AssumeRole</code> call. Specify this value if the trust policy of the role being assumed includes a condition that requires MFA authentication. The value is either the serial number for a hardware device (such as <code>GAHT12345678</code>) or an Amazon Resource Name (ARN) for a virtual device (such as <code>arn:aws:iam::123456789012:mfa/user</code>).</p> <p>The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@-</p>
		 * @param {string} TokenCode <p>The value provided by the MFA device, if the trust policy of the role being assumed requires MFA (that is, if the policy includes a condition that tests for MFA). If the role being assumed requires MFA and if the <code>TokenCode</code> value is missing or expired, the <code>AssumeRole</code> call returns an "access denied" error.</p> <p>The format for this parameter, as described by its regex pattern, is a sequence of six numeric digits.</p>
		 * @return {void} Success
		 */
		GET_AssumeRole(RoleArn: string, RoleSessionName: string, PolicyArns: Array<PolicyDescriptorType> | null | undefined, Policy: string | null | undefined, DurationSeconds: number | null | undefined, Tags: Array<Tag> | null | undefined, TransitiveTagKeys: Array<string> | null | undefined, ExternalId: string | null | undefined, SerialNumber: string | null | undefined, TokenCode: string | null | undefined, Action: GET_AssumeRoleAction, Version: GET_AssumeRoleVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AssumeRole?RoleArn=' + (RoleArn == null ? '' : encodeURIComponent(RoleArn)) + '&RoleSessionName=' + (RoleSessionName == null ? '' : encodeURIComponent(RoleSessionName)) + '&' + PolicyArns?.map(z => `PolicyArns=${z}`).join('&') + '&Policy=' + (Policy == null ? '' : encodeURIComponent(Policy)) + '&DurationSeconds=' + DurationSeconds + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&' + TransitiveTagKeys?.map(z => `TransitiveTagKeys=${encodeURIComponent(z)}`).join('&') + '&ExternalId=' + (ExternalId == null ? '' : encodeURIComponent(ExternalId)) + '&SerialNumber=' + (SerialNumber == null ? '' : encodeURIComponent(SerialNumber)) + '&TokenCode=' + (TokenCode == null ? '' : encodeURIComponent(TokenCode)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a set of temporary security credentials for users who have been authenticated via a SAML authentication response. This operation provides a mechanism for tying an enterprise identity store or directory to role-based AWS access without user-specific credentials or configuration. For a comparison of <code>AssumeRoleWithSAML</code> with the other API operations that produce temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the AWS STS API operations</a> in the <i>IAM User Guide</i>.</p> <p>The temporary security credentials returned by this operation consist of an access key ID, a secret access key, and a security token. Applications can use these temporary security credentials to sign calls to AWS services.</p> <p> <b>Session Duration</b> </p> <p>By default, the temporary security credentials created by <code>AssumeRoleWithSAML</code> last for one hour. However, you can use the optional <code>DurationSeconds</code> parameter to specify the duration of your session. Your role session lasts for the duration that you specify, or until the time specified in the SAML authentication response's <code>SessionNotOnOrAfter</code> value, whichever is shorter. You can provide a <code>DurationSeconds</code> value from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. To learn how to view the maximum value for your role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session">View the Maximum Session Duration Setting for a Role</a> in the <i>IAM User Guide</i>. The maximum session duration limit applies when you use the <code>AssumeRole*</code> API operations or the <code>assume-role*</code> CLI commands. However the limit does not apply when you use those operations to create a console URL. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a> in the <i>IAM User Guide</i>.</p> <p> <b>Permissions</b> </p> <p>The temporary security credentials created by <code>AssumeRoleWithSAML</code> can be used to make API calls to any AWS service with the following exception: you cannot call the STS <code>GetFederationToken</code> or <code>GetSessionToken</code> API operations.</p> <p>(Optional) You can pass inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policies</a> to this operation. You can pass a single JSON policy document to use as an inline session policy. You can also specify up to 10 managed policies to use as managed session policies. The plain text that you use for both inline and managed session policies can't exceed 2,048 characters. Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent AWS API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p> <p>Calling <code>AssumeRoleWithSAML</code> does not require the use of AWS security credentials. The identity of the caller is validated by using keys in the metadata document that is uploaded for the SAML provider entity for your identity provider. </p> <important> <p>Calling <code>AssumeRoleWithSAML</code> can result in an entry in your AWS CloudTrail logs. The entry includes the value in the <code>NameID</code> element of the SAML assertion. We recommend that you use a <code>NameIDType</code> that is not associated with any personally identifiable information (PII). For example, you could instead use the persistent identifier (<code>urn:oasis:names:tc:SAML:2.0:nameid-format:persistent</code>).</p> </important> <p> <b>Tags</b> </p> <p>(Optional) You can configure your IdP to pass attributes into your SAML assertion as session tags. Each session tag consists of a key name and an associated value. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the <i>IAM User Guide</i>.</p> <p>You can pass up to 50 session tags. The plain text session tag keys can’t exceed 128 characters and the values can’t exceed 256 characters. For these and additional limits, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-limits.html#reference_iam-limits-entity-length">IAM and STS Character Limits</a> in the <i>IAM User Guide</i>.</p> <note> <p>An AWS conversion compresses the passed session policies and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plain text meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit. </p> </note> <p>You can pass a session tag with the same key as a tag that is attached to the role. When you do, session tags override the role's tags with the same key.</p> <p>An administrator must grant you the permissions necessary to pass session tags. The administrator can also create granular permissions to allow you to pass only specific session tags. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html">Tutorial: Using Tags for Attribute-Based Access Control</a> in the <i>IAM User Guide</i>.</p> <p>You can set the session tags as transitive. Transitive tags persist during role chaining. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining">Chaining Roles with Session Tags</a> in the <i>IAM User Guide</i>.</p> <p> <b>SAML Configuration</b> </p> <p>Before your application can call <code>AssumeRoleWithSAML</code>, you must configure your SAML identity provider (IdP) to issue the claims required by AWS. Additionally, you must use AWS Identity and Access Management (IAM) to create a SAML provider entity in your AWS account that represents your identity provider. You must also create an IAM role that specifies this SAML provider in its trust policy. </p> <p>For more information, see the following resources:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based Federation</a> in the <i>IAM User Guide</i>. </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_saml.html">Creating SAML Identity Providers</a> in the <i>IAM User Guide</i>. </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_saml_relying-party.html">Configuring a Relying Party and Claims</a> in the <i>IAM User Guide</i>. </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_saml.html">Creating a Role for SAML 2.0 Federation</a> in the <i>IAM User Guide</i>. </p> </li> </ul>
		 * Get #Action=AssumeRoleWithSAML
		 * @param {string} RoleArn The Amazon Resource Name (ARN) of the role that the caller is assuming.
		 * @param {string} PrincipalArn The Amazon Resource Name (ARN) of the SAML provider in IAM that describes the IdP.
		 * @param {string} SAMLAssertion <p>The base-64 encoded SAML authentication response provided by the IdP.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/create-role-saml-IdP-tasks.html">Configuring a Relying Party and Adding Claims</a> in the <i>IAM User Guide</i>. </p>
		 * @param {Array<PolicyDescriptorType>} PolicyArns <p>The Amazon Resource Names (ARNs) of the IAM managed policies that you want to use as managed session policies. The policies must exist in the same account as the role.</p> <p>This parameter is optional. You can provide up to 10 managed policy ARNs. However, the plain text that you use for both inline and managed session policies can't exceed 2,048 characters. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the AWS General Reference.</p> <note> <p>An AWS conversion compresses the passed session policies and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plain text meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit. </p> </note> <p>Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent AWS API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p>
		 * @param {string} Policy <p>An IAM policy in JSON format that you want to use as an inline session policy.</p> <p>This parameter is optional. Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent AWS API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>. </p> <p>The plain text that you use for both inline and managed session policies can't exceed 2,048 characters. The JSON policy characters can be any ASCII character from the space character to the end of the valid character list (\u0020 through \u00FF). It can also include the tab (\u0009), linefeed (\u000A), and carriage return (\u000D) characters.</p> <note> <p>An AWS conversion compresses the passed session policies and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plain text meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit. </p> </note>
		 * @param {number} DurationSeconds <p>The duration, in seconds, of the role session. Your role session lasts for the duration that you specify for the <code>DurationSeconds</code> parameter, or until the time specified in the SAML authentication response's <code>SessionNotOnOrAfter</code> value, whichever is shorter. You can provide a <code>DurationSeconds</code> value from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. If you specify a value higher than this setting, the operation fails. For example, if you specify a session duration of 12 hours, but your administrator set the maximum session duration to 6 hours, your operation fails. To learn how to view the maximum value for your role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session">View the Maximum Session Duration Setting for a Role</a> in the <i>IAM User Guide</i>.</p> <p>By default, the value is set to <code>3600</code> seconds. </p> <note> <p>The <code>DurationSeconds</code> parameter is separate from the duration of a console session that you might request using the returned credentials. The request to the federation endpoint for a console sign-in token takes a <code>SessionDuration</code> parameter that specifies the maximum length of the console session. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-custom-url.html">Creating a URL that Enables Federated Users to Access the AWS Management Console</a> in the <i>IAM User Guide</i>.</p> </note>
		 * @return {void} Success
		 */
		GET_AssumeRoleWithSAML(RoleArn: string, PrincipalArn: string, SAMLAssertion: string, PolicyArns: Array<PolicyDescriptorType> | null | undefined, Policy: string | null | undefined, DurationSeconds: number | null | undefined, Action: GET_AssumeRoleWithSAMLAction, Version: GET_AssumeRoleWithSAMLVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AssumeRoleWithSAML?RoleArn=' + (RoleArn == null ? '' : encodeURIComponent(RoleArn)) + '&PrincipalArn=' + (PrincipalArn == null ? '' : encodeURIComponent(PrincipalArn)) + '&SAMLAssertion=' + (SAMLAssertion == null ? '' : encodeURIComponent(SAMLAssertion)) + '&' + PolicyArns?.map(z => `PolicyArns=${z}`).join('&') + '&Policy=' + (Policy == null ? '' : encodeURIComponent(Policy)) + '&DurationSeconds=' + DurationSeconds + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a set of temporary security credentials for users who have been authenticated in a mobile or web application with a web identity provider. Example providers include Amazon Cognito, Login with Amazon, Facebook, Google, or any OpenID Connect-compatible identity provider.</p> <note> <p>For mobile applications, we recommend that you use Amazon Cognito. You can use Amazon Cognito with the <a href="http://aws.amazon.com/sdkforios/">AWS SDK for iOS Developer Guide</a> and the <a href="http://aws.amazon.com/sdkforandroid/">AWS SDK for Android Developer Guide</a> to uniquely identify a user. You can also supply the user with a consistent identity throughout the lifetime of an application.</p> <p>To learn more about Amazon Cognito, see <a href="https://docs.aws.amazon.com/mobile/sdkforandroid/developerguide/cognito-auth.html#d0e840">Amazon Cognito Overview</a> in <i>AWS SDK for Android Developer Guide</i> and <a href="https://docs.aws.amazon.com/mobile/sdkforios/developerguide/cognito-auth.html#d0e664">Amazon Cognito Overview</a> in the <i>AWS SDK for iOS Developer Guide</i>.</p> </note> <p>Calling <code>AssumeRoleWithWebIdentity</code> does not require the use of AWS security credentials. Therefore, you can distribute an application (for example, on mobile devices) that requests temporary security credentials without including long-term AWS credentials in the application. You also don't need to deploy server-based proxy services that use long-term AWS credentials. Instead, the identity of the caller is validated by using a token from the web identity provider. For a comparison of <code>AssumeRoleWithWebIdentity</code> with the other API operations that produce temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the AWS STS API operations</a> in the <i>IAM User Guide</i>.</p> <p>The temporary security credentials returned by this API consist of an access key ID, a secret access key, and a security token. Applications can use these temporary security credentials to sign calls to AWS service API operations.</p> <p> <b>Session Duration</b> </p> <p>By default, the temporary security credentials created by <code>AssumeRoleWithWebIdentity</code> last for one hour. However, you can use the optional <code>DurationSeconds</code> parameter to specify the duration of your session. You can provide a value from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. To learn how to view the maximum value for your role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session">View the Maximum Session Duration Setting for a Role</a> in the <i>IAM User Guide</i>. The maximum session duration limit applies when you use the <code>AssumeRole*</code> API operations or the <code>assume-role*</code> CLI commands. However the limit does not apply when you use those operations to create a console URL. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a> in the <i>IAM User Guide</i>. </p> <p> <b>Permissions</b> </p> <p>The temporary security credentials created by <code>AssumeRoleWithWebIdentity</code> can be used to make API calls to any AWS service with the following exception: you cannot call the STS <code>GetFederationToken</code> or <code>GetSessionToken</code> API operations.</p> <p>(Optional) You can pass inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policies</a> to this operation. You can pass a single JSON policy document to use as an inline session policy. You can also specify up to 10 managed policies to use as managed session policies. The plain text that you use for both inline and managed session policies can't exceed 2,048 characters. Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent AWS API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p> <p> <b>Tags</b> </p> <p>(Optional) You can configure your IdP to pass attributes into your web identity token as session tags. Each session tag consists of a key name and an associated value. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the <i>IAM User Guide</i>.</p> <p>You can pass up to 50 session tags. The plain text session tag keys can’t exceed 128 characters and the values can’t exceed 256 characters. For these and additional limits, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-limits.html#reference_iam-limits-entity-length">IAM and STS Character Limits</a> in the <i>IAM User Guide</i>.</p> <note> <p>An AWS conversion compresses the passed session policies and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plain text meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit. </p> </note> <p>You can pass a session tag with the same key as a tag that is attached to the role. When you do, the session tag overrides the role tag with the same key.</p> <p>An administrator must grant you the permissions necessary to pass session tags. The administrator can also create granular permissions to allow you to pass only specific session tags. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html">Tutorial: Using Tags for Attribute-Based Access Control</a> in the <i>IAM User Guide</i>.</p> <p>You can set the session tags as transitive. Transitive tags persist during role chaining. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining">Chaining Roles with Session Tags</a> in the <i>IAM User Guide</i>.</p> <p> <b>Identities</b> </p> <p>Before your application can call <code>AssumeRoleWithWebIdentity</code>, you must have an identity token from a supported identity provider and create a role that the application can assume. The role that your application assumes must trust the identity provider that is associated with the identity token. In other words, the identity provider must be specified in the role's trust policy. </p> <important> <p>Calling <code>AssumeRoleWithWebIdentity</code> can result in an entry in your AWS CloudTrail logs. The entry includes the <a href="http://openid.net/specs/openid-connect-core-1_0.html#Claims">Subject</a> of the provided Web Identity Token. We recommend that you avoid using any personally identifiable information (PII) in this field. For example, you could instead use a GUID or a pairwise identifier, as <a href="http://openid.net/specs/openid-connect-core-1_0.html#SubjectIDTypes">suggested in the OIDC specification</a>.</p> </important> <p>For more information about how to use web identity federation and the <code>AssumeRoleWithWebIdentity</code> API, see the following resources: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc_manual.html">Using Web Identity Federation API Operations for Mobile Apps</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_assumerolewithwebidentity">Federation Through a Web-based Identity Provider</a>. </p> </li> <li> <p> <a href="https://web-identity-federation-playground.s3.amazonaws.com/index.html"> Web Identity Federation Playground</a>. Walk through the process of authenticating through Login with Amazon, Facebook, or Google, getting temporary security credentials, and then using those credentials to make a request to AWS. </p> </li> <li> <p> <a href="http://aws.amazon.com/sdkforios/">AWS SDK for iOS Developer Guide</a> and <a href="http://aws.amazon.com/sdkforandroid/">AWS SDK for Android Developer Guide</a>. These toolkits contain sample apps that show how to invoke the identity providers. The toolkits then show how to use the information from these providers to get and use temporary security credentials. </p> </li> <li> <p> <a href="http://aws.amazon.com/articles/web-identity-federation-with-mobile-applications">Web Identity Federation with Mobile Applications</a>. This article discusses web identity federation and shows an example of how to use web identity federation to get access to content in Amazon S3. </p> </li> </ul>
		 * Get #Action=AssumeRoleWithWebIdentity
		 * @param {string} RoleArn The Amazon Resource Name (ARN) of the role that the caller is assuming.
		 * @param {string} RoleSessionName <p>An identifier for the assumed role session. Typically, you pass the name or identifier that is associated with the user who is using your application. That way, the temporary security credentials that your application will use are associated with that user. This session name is included as part of the ARN and assumed role ID in the <code>AssumedRoleUser</code> response element.</p> <p>The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@-</p>
		 * @param {string} WebIdentityToken The OAuth 2.0 access token or OpenID Connect ID token that is provided by the identity provider. Your application must get this token by authenticating the user who is using your application with a web identity provider before the application makes an <code>AssumeRoleWithWebIdentity</code> call. 
		 * @param {string} ProviderId <p>The fully qualified host component of the domain name of the identity provider.</p> <p>Specify this value only for OAuth 2.0 access tokens. Currently <code>www.amazon.com</code> and <code>graph.facebook.com</code> are the only supported identity providers for OAuth 2.0 access tokens. Do not include URL schemes and port numbers.</p> <p>Do not specify this value for OpenID Connect ID tokens.</p>
		 * @param {Array<PolicyDescriptorType>} PolicyArns <p>The Amazon Resource Names (ARNs) of the IAM managed policies that you want to use as managed session policies. The policies must exist in the same account as the role.</p> <p>This parameter is optional. You can provide up to 10 managed policy ARNs. However, the plain text that you use for both inline and managed session policies can't exceed 2,048 characters. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the AWS General Reference.</p> <note> <p>An AWS conversion compresses the passed session policies and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plain text meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit. </p> </note> <p>Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent AWS API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p>
		 * @param {string} Policy <p>An IAM policy in JSON format that you want to use as an inline session policy.</p> <p>This parameter is optional. Passing policies to this operation returns new temporary credentials. The resulting session's permissions are the intersection of the role's identity-based policy and the session policies. You can use the role's temporary credentials in subsequent AWS API calls to access resources in the account that owns the role. You cannot use session policies to grant more permissions than those allowed by the identity-based policy of the role that is being assumed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p> <p>The plain text that you use for both inline and managed session policies can't exceed 2,048 characters. The JSON policy characters can be any ASCII character from the space character to the end of the valid character list (\u0020 through \u00FF). It can also include the tab (\u0009), linefeed (\u000A), and carriage return (\u000D) characters.</p> <note> <p>An AWS conversion compresses the passed session policies and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plain text meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit. </p> </note>
		 * @param {number} DurationSeconds <p>The duration, in seconds, of the role session. The value can range from 900 seconds (15 minutes) up to the maximum session duration setting for the role. This setting can have a value from 1 hour to 12 hours. If you specify a value higher than this setting, the operation fails. For example, if you specify a session duration of 12 hours, but your administrator set the maximum session duration to 6 hours, your operation fails. To learn how to view the maximum value for your role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html#id_roles_use_view-role-max-session">View the Maximum Session Duration Setting for a Role</a> in the <i>IAM User Guide</i>.</p> <p>By default, the value is set to <code>3600</code> seconds. </p> <note> <p>The <code>DurationSeconds</code> parameter is separate from the duration of a console session that you might request using the returned credentials. The request to the federation endpoint for a console sign-in token takes a <code>SessionDuration</code> parameter that specifies the maximum length of the console session. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-custom-url.html">Creating a URL that Enables Federated Users to Access the AWS Management Console</a> in the <i>IAM User Guide</i>.</p> </note>
		 * @return {void} Success
		 */
		GET_AssumeRoleWithWebIdentity(RoleArn: string, RoleSessionName: string, WebIdentityToken: string, ProviderId: string | null | undefined, PolicyArns: Array<PolicyDescriptorType> | null | undefined, Policy: string | null | undefined, DurationSeconds: number | null | undefined, Action: GET_AssumeRoleWithWebIdentityAction, Version: GET_AssumeRoleWithWebIdentityVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AssumeRoleWithWebIdentity?RoleArn=' + (RoleArn == null ? '' : encodeURIComponent(RoleArn)) + '&RoleSessionName=' + (RoleSessionName == null ? '' : encodeURIComponent(RoleSessionName)) + '&WebIdentityToken=' + (WebIdentityToken == null ? '' : encodeURIComponent(WebIdentityToken)) + '&ProviderId=' + (ProviderId == null ? '' : encodeURIComponent(ProviderId)) + '&' + PolicyArns?.map(z => `PolicyArns=${z}`).join('&') + '&Policy=' + (Policy == null ? '' : encodeURIComponent(Policy)) + '&DurationSeconds=' + DurationSeconds + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Decodes additional information about the authorization status of a request from an encoded message returned in response to an AWS request.</p> <p>For example, if a user is not authorized to perform an operation that he or she has requested, the request returns a <code>Client.UnauthorizedOperation</code> response (an HTTP 403 response). Some AWS operations additionally return an encoded message that can provide details about this authorization failure. </p> <note> <p>Only certain AWS operations return an encoded authorization message. The documentation for an individual operation indicates whether that operation returns an encoded message in addition to returning an HTTP code.</p> </note> <p>The message is encoded because the details of the authorization status can constitute privileged information that the user who requested the operation should not see. To decode an authorization status message, a user must be granted permissions via an IAM policy to request the <code>DecodeAuthorizationMessage</code> (<code>sts:DecodeAuthorizationMessage</code>) action. </p> <p>The decoded message includes the following type of information:</p> <ul> <li> <p>Whether the request was denied due to an explicit deny or due to the absence of an explicit allow. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-denyallow">Determining Whether a Request is Allowed or Denied</a> in the <i>IAM User Guide</i>. </p> </li> <li> <p>The principal who made the request.</p> </li> <li> <p>The requested action.</p> </li> <li> <p>The requested resource.</p> </li> <li> <p>The values of condition keys in the context of the user's request.</p> </li> </ul>
		 * Get #Action=DecodeAuthorizationMessage
		 * @param {string} EncodedMessage The encoded message that was returned with the response.
		 * @return {void} Success
		 */
		GET_DecodeAuthorizationMessage(EncodedMessage: string, Action: GET_DecodeAuthorizationMessageAction, Version: GET_DecodeAuthorizationMessageVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DecodeAuthorizationMessage?EncodedMessage=' + (EncodedMessage == null ? '' : encodeURIComponent(EncodedMessage)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the account identifier for the specified access key ID.</p> <p>Access keys consist of two parts: an access key ID (for example, <code>AKIAIOSFODNN7EXAMPLE</code>) and a secret access key (for example, <code>wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY</code>). For more information about access keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html">Managing Access Keys for IAM Users</a> in the <i>IAM User Guide</i>.</p> <p>When you pass an access key ID to this operation, it returns the ID of the AWS account to which the keys belong. Access key IDs beginning with <code>AKIA</code> are long-term credentials for an IAM user or the AWS account root user. Access key IDs beginning with <code>ASIA</code> are temporary credentials that are created using STS operations. If the account in the response belongs to you, you can sign in as the root user and review your root user access keys. Then, you can pull a <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html">credentials report</a> to learn which IAM user owns the keys. To learn who requested the temporary credentials for an <code>ASIA</code> access key, view the STS events in your <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">CloudTrail logs</a> in the <i>IAM User Guide</i>.</p> <p>This operation does not indicate the state of the access key. The key might be active, inactive, or deleted. Active keys might not have permissions to perform an operation. Providing a deleted access key might return an error that the key doesn't exist.</p>
		 * Get #Action=GetAccessKeyInfo
		 * @param {string} AccessKeyId <p>The identifier of an access key.</p> <p>This parameter allows (through its regex pattern) a string of characters that can consist of any upper- or lowercase letter or digit.</p>
		 * @return {void} Success
		 */
		GET_GetAccessKeyInfo(AccessKeyId: string, Action: GET_GetAccessKeyInfoAction, Version: GET_GetAccessKeyInfoVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetAccessKeyInfo?AccessKeyId=' + (AccessKeyId == null ? '' : encodeURIComponent(AccessKeyId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns details about the IAM user or role whose credentials are used to call the operation.</p> <note> <p>No permissions are required to perform this operation. If an administrator adds a policy to your IAM user or role that explicitly denies access to the <code>sts:GetCallerIdentity</code> action, you can still perform this operation. Permissions are not required because the same information is returned when an IAM user or role is denied access. To view an example response, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_access-denied-delete-mfa">I Am Not Authorized to Perform: iam:DeleteVirtualMFADevice</a> in the <i>IAM User Guide</i>.</p> </note>
		 * Get #Action=GetCallerIdentity
		 * @return {void} Success
		 */
		GET_GetCallerIdentity(Action: GET_GetCallerIdentityAction, Version: GET_GetCallerIdentityVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetCallerIdentity?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a set of temporary security credentials (consisting of an access key ID, a secret access key, and a security token) for a federated user. A typical use is in a proxy application that gets temporary security credentials on behalf of distributed applications inside a corporate network. You must call the <code>GetFederationToken</code> operation using the long-term security credentials of an IAM user. As a result, this call is appropriate in contexts where those credentials can be safely stored, usually in a server-based application. For a comparison of <code>GetFederationToken</code> with the other API operations that produce temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the AWS STS API operations</a> in the <i>IAM User Guide</i>.</p> <note> <p>You can create a mobile-based or browser-based app that can authenticate users using a web identity provider like Login with Amazon, Facebook, Google, or an OpenID Connect-compatible identity provider. In this case, we recommend that you use <a href="http://aws.amazon.com/cognito/">Amazon Cognito</a> or <code>AssumeRoleWithWebIdentity</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_assumerolewithwebidentity">Federation Through a Web-based Identity Provider</a> in the <i>IAM User Guide</i>.</p> </note> <p>You can also call <code>GetFederationToken</code> using the security credentials of an AWS account root user, but we do not recommend it. Instead, we recommend that you create an IAM user for the purpose of the proxy application. Then attach a policy to the IAM user that limits federated users to only the actions and resources that they need to access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html">IAM Best Practices</a> in the <i>IAM User Guide</i>. </p> <p> <b>Session duration</b> </p> <p>The temporary credentials are valid for the specified duration, from 900 seconds (15 minutes) up to a maximum of 129,600 seconds (36 hours). The default session duration is 43,200 seconds (12 hours). Temporary credentials that are obtained by using AWS account root user credentials have a maximum duration of 3,600 seconds (1 hour).</p> <p> <b>Permissions</b> </p> <p>You can use the temporary credentials created by <code>GetFederationToken</code> in any AWS service except the following:</p> <ul> <li> <p>You cannot call any IAM operations using the AWS CLI or the AWS API. </p> </li> <li> <p>You cannot call any STS operations except <code>GetCallerIdentity</code>.</p> </li> </ul> <p>You must pass an inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policy</a> to this operation. You can pass a single JSON policy document to use as an inline session policy. You can also specify up to 10 managed policies to use as managed session policies. The plain text that you use for both inline and managed session policies can't exceed 2,048 characters.</p> <p>Though the session policy parameters are optional, if you do not pass a policy, then the resulting federated user session has no permissions. When you pass session policies, the session permissions are the intersection of the IAM user policies and the session policies that you pass. This gives you a way to further restrict the permissions for a federated user. You cannot use session policies to grant more permissions than those that are defined in the permissions policy of the IAM user. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>. For information about using <code>GetFederationToken</code> to create temporary security credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_getfederationtoken">GetFederationToken—Federation Through a Custom Identity Broker</a>. </p> <p>You can use the credentials to access a resource that has a resource-based policy. If that policy specifically references the federated user session in the <code>Principal</code> element of the policy, the session has the permissions allowed by the policy. These permissions are granted in addition to the permissions granted by the session policies.</p> <p> <b>Tags</b> </p> <p>(Optional) You can pass tag key-value pairs to your session. These are called session tags. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the <i>IAM User Guide</i>.</p> <p>An administrator must grant you the permissions necessary to pass session tags. The administrator can also create granular permissions to allow you to pass only specific session tags. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html">Tutorial: Using Tags for Attribute-Based Access Control</a> in the <i>IAM User Guide</i>.</p> <p>Tag key–value pairs are not case sensitive, but case is preserved. This means that you cannot have separate <code>Department</code> and <code>department</code> tag keys. Assume that the user that you are federating has the <code>Department</code>=<code>Marketing</code> tag and you pass the <code>department</code>=<code>engineering</code> session tag. <code>Department</code> and <code>department</code> are not saved as separate tags, and the session tag passed in the request takes precedence over the user tag.</p>
		 * Get #Action=GetFederationToken
		 * @param {string} Name <p>The name of the federated user. The name is used as an identifier for the temporary security credentials (such as <code>Bob</code>). For example, you can reference the federated user name in a resource-based policy, such as in an Amazon S3 bucket policy.</p> <p>The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@-</p>
		 * @param {string} Policy <p>An IAM policy in JSON format that you want to use as an inline session policy.</p> <p>You must pass an inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policy</a> to this operation. You can pass a single JSON policy document to use as an inline session policy. You can also specify up to 10 managed policies to use as managed session policies.</p> <p>This parameter is optional. However, if you do not pass any session policies, then the resulting federated user session has no permissions.</p> <p>When you pass session policies, the session permissions are the intersection of the IAM user policies and the session policies that you pass. This gives you a way to further restrict the permissions for a federated user. You cannot use session policies to grant more permissions than those that are defined in the permissions policy of the IAM user. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p> <p>The resulting credentials can be used to access a resource that has a resource-based policy. If that policy specifically references the federated user session in the <code>Principal</code> element of the policy, the session has the permissions allowed by the policy. These permissions are granted in addition to the permissions that are granted by the session policies.</p> <p>The plain text that you use for both inline and managed session policies can't exceed 2,048 characters. The JSON policy characters can be any ASCII character from the space character to the end of the valid character list (\u0020 through \u00FF). It can also include the tab (\u0009), linefeed (\u000A), and carriage return (\u000D) characters.</p> <note> <p>An AWS conversion compresses the passed session policies and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plain text meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit. </p> </note>
		 * @param {Array<PolicyDescriptorType>} PolicyArns <p>The Amazon Resource Names (ARNs) of the IAM managed policies that you want to use as a managed session policy. The policies must exist in the same account as the IAM user that is requesting federated access.</p> <p>You must pass an inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policy</a> to this operation. You can pass a single JSON policy document to use as an inline session policy. You can also specify up to 10 managed policies to use as managed session policies. The plain text that you use for both inline and managed session policies can't exceed 2,048 characters. You can provide up to 10 managed policy ARNs. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the AWS General Reference.</p> <p>This parameter is optional. However, if you do not pass any session policies, then the resulting federated user session has no permissions.</p> <p>When you pass session policies, the session permissions are the intersection of the IAM user policies and the session policies that you pass. This gives you a way to further restrict the permissions for a federated user. You cannot use session policies to grant more permissions than those that are defined in the permissions policy of the IAM user. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p> <p>The resulting credentials can be used to access a resource that has a resource-based policy. If that policy specifically references the federated user session in the <code>Principal</code> element of the policy, the session has the permissions allowed by the policy. These permissions are granted in addition to the permissions that are granted by the session policies.</p> <note> <p>An AWS conversion compresses the passed session policies and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plain text meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit. </p> </note>
		 * @param {number} DurationSeconds The duration, in seconds, that the session should last. Acceptable durations for federation sessions range from 900 seconds (15 minutes) to 129,600 seconds (36 hours), with 43,200 seconds (12 hours) as the default. Sessions obtained using AWS account root user credentials are restricted to a maximum of 3,600 seconds (one hour). If the specified duration is longer than one hour, the session obtained by using root user credentials defaults to one hour.
		 * @param {Array<Tag>} Tags <p>A list of session tags. Each session tag consists of a key name and an associated value. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the <i>IAM User Guide</i>.</p> <p>This parameter is optional. You can pass up to 50 session tags. The plain text session tag keys can’t exceed 128 characters and the values can’t exceed 256 characters. For these and additional limits, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-limits.html#reference_iam-limits-entity-length">IAM and STS Character Limits</a> in the <i>IAM User Guide</i>.</p> <note> <p>An AWS conversion compresses the passed session policies and session tags into a packed binary format that has a separate limit. Your request can fail for this limit even if your plain text meets the other requirements. The <code>PackedPolicySize</code> response element indicates by percentage how close the policies and tags for your request are to the upper size limit. </p> </note> <p>You can pass a session tag with the same key as a tag that is already attached to the user you are federating. When you do, session tags override a user tag with the same key. </p> <p>Tag key–value pairs are not case sensitive, but case is preserved. This means that you cannot have separate <code>Department</code> and <code>department</code> tag keys. Assume that the role has the <code>Department</code>=<code>Marketing</code> tag and you pass the <code>department</code>=<code>engineering</code> session tag. <code>Department</code> and <code>department</code> are not saved as separate tags, and the session tag passed in the request takes precedence over the role tag.</p>
		 * @return {void} Success
		 */
		GET_GetFederationToken(Name: string, Policy: string | null | undefined, PolicyArns: Array<PolicyDescriptorType> | null | undefined, DurationSeconds: number | null | undefined, Tags: Array<Tag> | null | undefined, Action: GET_GetFederationTokenAction, Version: GET_GetFederationTokenVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetFederationToken?Name=' + (Name == null ? '' : encodeURIComponent(Name)) + '&Policy=' + (Policy == null ? '' : encodeURIComponent(Policy)) + '&' + PolicyArns?.map(z => `PolicyArns=${z}`).join('&') + '&DurationSeconds=' + DurationSeconds + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a set of temporary credentials for an AWS account or IAM user. The credentials consist of an access key ID, a secret access key, and a security token. Typically, you use <code>GetSessionToken</code> if you want to use MFA to protect programmatic calls to specific AWS API operations like Amazon EC2 <code>StopInstances</code>. MFA-enabled IAM users would need to call <code>GetSessionToken</code> and submit an MFA code that is associated with their MFA device. Using the temporary security credentials that are returned from the call, IAM users can then make programmatic calls to API operations that require MFA authentication. If you do not supply a correct MFA code, then the API returns an access denied error. For a comparison of <code>GetSessionToken</code> with the other API operations that produce temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the AWS STS API operations</a> in the <i>IAM User Guide</i>.</p> <p> <b>Session Duration</b> </p> <p>The <code>GetSessionToken</code> operation must be called by using the long-term AWS security credentials of the AWS account root user or an IAM user. Credentials that are created by IAM users are valid for the duration that you specify. This duration can range from 900 seconds (15 minutes) up to a maximum of 129,600 seconds (36 hours), with a default of 43,200 seconds (12 hours). Credentials based on account credentials can range from 900 seconds (15 minutes) up to 3,600 seconds (1 hour), with a default of 1 hour. </p> <p> <b>Permissions</b> </p> <p>The temporary security credentials created by <code>GetSessionToken</code> can be used to make API calls to any AWS service with the following exceptions:</p> <ul> <li> <p>You cannot call any IAM API operations unless MFA authentication information is included in the request.</p> </li> <li> <p>You cannot call any STS API <i>except</i> <code>AssumeRole</code> or <code>GetCallerIdentity</code>.</p> </li> </ul> <note> <p>We recommend that you do not call <code>GetSessionToken</code> with AWS account root user credentials. Instead, follow our <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#create-iam-users">best practices</a> by creating one or more IAM users, giving them the necessary permissions, and using IAM users for everyday interaction with AWS. </p> </note> <p>The credentials that are returned by <code>GetSessionToken</code> are based on permissions associated with the user whose credentials were used to call the operation. If <code>GetSessionToken</code> is called using AWS account root user credentials, the temporary credentials have root user permissions. Similarly, if <code>GetSessionToken</code> is called using the credentials of an IAM user, the temporary credentials have the same permissions as the IAM user. </p> <p>For more information about using <code>GetSessionToken</code> to create temporary credentials, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_getsessiontoken">Temporary Credentials for Users in Untrusted Environments</a> in the <i>IAM User Guide</i>. </p>
		 * Get #Action=GetSessionToken
		 * @param {number} DurationSeconds The duration, in seconds, that the credentials should remain valid. Acceptable durations for IAM user sessions range from 900 seconds (15 minutes) to 129,600 seconds (36 hours), with 43,200 seconds (12 hours) as the default. Sessions for AWS account owners are restricted to a maximum of 3,600 seconds (one hour). If the duration is longer than one hour, the session for AWS account owners defaults to one hour.
		 * @param {string} SerialNumber <p>The identification number of the MFA device that is associated with the IAM user who is making the <code>GetSessionToken</code> call. Specify this value if the IAM user has a policy that requires MFA authentication. The value is either the serial number for a hardware device (such as <code>GAHT12345678</code>) or an Amazon Resource Name (ARN) for a virtual device (such as <code>arn:aws:iam::123456789012:mfa/user</code>). You can find the device for an IAM user by going to the AWS Management Console and viewing the user's security credentials. </p> <p>The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@:/-</p>
		 * @param {string} TokenCode <p>The value provided by the MFA device, if MFA is required. If any policy requires the IAM user to submit an MFA code, specify this value. If MFA authentication is required, the user must provide a code when requesting a set of temporary security credentials. A user who fails to provide the code receives an "access denied" response when requesting resources that require MFA authentication.</p> <p>The format for this parameter, as described by its regex pattern, is a sequence of six numeric digits.</p>
		 * @return {void} Success
		 */
		GET_GetSessionToken(DurationSeconds: number | null | undefined, SerialNumber: string | null | undefined, TokenCode: string | null | undefined, Action: GET_GetSessionTokenAction, Version: GET_GetSessionTokenVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetSessionToken?DurationSeconds=' + DurationSeconds + '&SerialNumber=' + (SerialNumber == null ? '' : encodeURIComponent(SerialNumber)) + '&TokenCode=' + (TokenCode == null ? '' : encodeURIComponent(TokenCode)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_AssumeRoleAction { AssumeRole = 0 }

	export enum GET_AssumeRoleVersion { _2011_06_15 = 0 }

	export enum POST_AssumeRoleVersion { _2011_06_15 = 0 }

	export enum GET_AssumeRoleWithSAMLAction { AssumeRoleWithSAML = 0 }

	export enum GET_AssumeRoleWithSAMLVersion { _2011_06_15 = 0 }

	export enum POST_AssumeRoleWithSAMLVersion { _2011_06_15 = 0 }

	export enum GET_AssumeRoleWithWebIdentityAction { AssumeRoleWithWebIdentity = 0 }

	export enum GET_AssumeRoleWithWebIdentityVersion { _2011_06_15 = 0 }

	export enum POST_AssumeRoleWithWebIdentityVersion { _2011_06_15 = 0 }

	export enum GET_DecodeAuthorizationMessageAction { DecodeAuthorizationMessage = 0 }

	export enum GET_DecodeAuthorizationMessageVersion { _2011_06_15 = 0 }

	export enum POST_DecodeAuthorizationMessageVersion { _2011_06_15 = 0 }

	export enum GET_GetAccessKeyInfoAction { GetAccessKeyInfo = 0 }

	export enum GET_GetAccessKeyInfoVersion { _2011_06_15 = 0 }

	export enum POST_GetAccessKeyInfoVersion { _2011_06_15 = 0 }

	export enum GET_GetCallerIdentityAction { GetCallerIdentity = 0 }

	export enum GET_GetCallerIdentityVersion { _2011_06_15 = 0 }

	export enum POST_GetCallerIdentityVersion { _2011_06_15 = 0 }

	export enum GET_GetFederationTokenAction { GetFederationToken = 0 }

	export enum GET_GetFederationTokenVersion { _2011_06_15 = 0 }

	export enum POST_GetFederationTokenVersion { _2011_06_15 = 0 }

	export enum GET_GetSessionTokenAction { GetSessionToken = 0 }

	export enum GET_GetSessionTokenVersion { _2011_06_15 = 0 }

	export enum POST_GetSessionTokenVersion { _2011_06_15 = 0 }

}

