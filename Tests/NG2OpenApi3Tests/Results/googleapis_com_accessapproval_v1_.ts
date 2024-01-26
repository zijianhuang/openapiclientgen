import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Access Approval service account related to a project/folder/organization. */
	export interface AccessApprovalServiceAccount {

		/** Email address of the service account. */
		accountEmail?: string | null;

		/** The resource name of the Access Approval service account. Format is one of: * "projects/{project}/serviceAccount" * "folders/{folder}/serviceAccount" * "organizations/{organization}/serviceAccount" */
		name?: string | null;
	}

	/** Access Approval service account related to a project/folder/organization. */
	export interface AccessApprovalServiceAccountFormProperties {

		/** Email address of the service account. */
		accountEmail: FormControl<string | null | undefined>,

		/** The resource name of the Access Approval service account. Format is one of: * "projects/{project}/serviceAccount" * "folders/{folder}/serviceAccount" * "organizations/{organization}/serviceAccount" */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAccessApprovalServiceAccountFormGroup() {
		return new FormGroup<AccessApprovalServiceAccountFormProperties>({
			accountEmail: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings on a Project/Folder/Organization related to Access Approval. */
	export interface AccessApprovalSettings {

		/** The asymmetric crypto key version to use for signing approval requests. Empty active_key_version indicates that a Google-managed key should be used for signing. This property will be ignored if set by an ancestor of this resource, and new non-empty values may not be set. */
		activeKeyVersion?: string | null;

		/** Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that an ancestor of this Project or Folder has set active_key_version (this field will always be unset for the organization since organizations do not have ancestors). */
		ancestorHasActiveKeyVersion?: boolean | null;

		/** Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that at least one service is enrolled for Access Approval in one or more ancestors of the Project or Folder (this field will always be unset for the organization since organizations do not have ancestors). */
		enrolledAncestor?: boolean | null;

		/** A list of Google Cloud Services for which the given resource has Access Approval enrolled. Access requests for the resource given by name against any of these services contained here will be required to have explicit approval. If name refers to an organization, enrollment can be done for individual services. If name refers to a folder or project, enrollment can only be done on an all or nothing basis. If a cloud_product is repeated in this list, the first entry will be honored and all following entries will be discarded. A maximum of 10 enrolled services will be enforced, to be expanded as the set of supported services is expanded. */
		enrolledServices?: Array<EnrolledService>;

		/** Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that there is some configuration issue with the active_key_version configured at this level in the resource hierarchy (e.g. it doesn't exist or the Access Approval service account doesn't have the correct permissions on it, etc.) This key version is not necessarily the effective key version at this level, as key versions are inherited top-down. */
		invalidKeyVersion?: boolean | null;

		/** The resource name of the settings. Format is one of: * "projects/{project}/accessApprovalSettings" * "folders/{folder}/accessApprovalSettings" * "organizations/{organization}/accessApprovalSettings" */
		name?: string | null;

		/** A list of email addresses to which notifications relating to approval requests should be sent. Notifications relating to a resource will be sent to all emails in the settings of ancestor resources of that resource. A maximum of 50 email addresses are allowed. */
		notificationEmails?: Array<string>;

		/** Optional. A pubsub topic to which notifications relating to approval requests should be sent. */
		notificationPubsubTopic?: string | null;

		/** This preference is communicated to Google personnel when sending an approval request but can be overridden if necessary. */
		preferNoBroadApprovalRequests?: boolean | null;

		/** This preference is shared with Google personnel, but can be overridden if said personnel deems necessary. The approver ultimately can set the expiration at approval time. */
		preferredRequestExpirationDays?: number | null;
	}

	/** Settings on a Project/Folder/Organization related to Access Approval. */
	export interface AccessApprovalSettingsFormProperties {

		/** The asymmetric crypto key version to use for signing approval requests. Empty active_key_version indicates that a Google-managed key should be used for signing. This property will be ignored if set by an ancestor of this resource, and new non-empty values may not be set. */
		activeKeyVersion: FormControl<string | null | undefined>,

		/** Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that an ancestor of this Project or Folder has set active_key_version (this field will always be unset for the organization since organizations do not have ancestors). */
		ancestorHasActiveKeyVersion: FormControl<boolean | null | undefined>,

		/** Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that at least one service is enrolled for Access Approval in one or more ancestors of the Project or Folder (this field will always be unset for the organization since organizations do not have ancestors). */
		enrolledAncestor: FormControl<boolean | null | undefined>,

		/** Output only. This field is read only (not settable via UpdateAccessApprovalSettings method). If the field is true, that indicates that there is some configuration issue with the active_key_version configured at this level in the resource hierarchy (e.g. it doesn't exist or the Access Approval service account doesn't have the correct permissions on it, etc.) This key version is not necessarily the effective key version at this level, as key versions are inherited top-down. */
		invalidKeyVersion: FormControl<boolean | null | undefined>,

		/** The resource name of the settings. Format is one of: * "projects/{project}/accessApprovalSettings" * "folders/{folder}/accessApprovalSettings" * "organizations/{organization}/accessApprovalSettings" */
		name: FormControl<string | null | undefined>,

		/** Optional. A pubsub topic to which notifications relating to approval requests should be sent. */
		notificationPubsubTopic: FormControl<string | null | undefined>,

		/** This preference is communicated to Google personnel when sending an approval request but can be overridden if necessary. */
		preferNoBroadApprovalRequests: FormControl<boolean | null | undefined>,

		/** This preference is shared with Google personnel, but can be overridden if said personnel deems necessary. The approver ultimately can set the expiration at approval time. */
		preferredRequestExpirationDays: FormControl<number | null | undefined>,
	}
	export function CreateAccessApprovalSettingsFormGroup() {
		return new FormGroup<AccessApprovalSettingsFormProperties>({
			activeKeyVersion: new FormControl<string | null | undefined>(undefined),
			ancestorHasActiveKeyVersion: new FormControl<boolean | null | undefined>(undefined),
			enrolledAncestor: new FormControl<boolean | null | undefined>(undefined),
			invalidKeyVersion: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notificationPubsubTopic: new FormControl<string | null | undefined>(undefined),
			preferNoBroadApprovalRequests: new FormControl<boolean | null | undefined>(undefined),
			preferredRequestExpirationDays: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the enrollment of a cloud resource into a specific service. */
	export interface EnrolledService {

		/** The product for which Access Approval will be enrolled. Allowed values are listed below (case-sensitive): * all * GA * App Engine * Artifact Registry * BigQuery * Certificate Authority Service * Cloud Bigtable * Cloud Key Management Service * Compute Engine * Cloud Composer * Cloud Dataflow * Cloud Dataproc * Cloud DLP * Cloud EKM * Cloud Firestore * Cloud HSM * Cloud Identity and Access Management * Cloud Logging * Cloud NAT * Cloud Pub/Sub * Cloud Spanner * Cloud SQL * Cloud Storage * Eventarc * Google Kubernetes Engine * Organization Policy Serivice * Persistent Disk * Resource Manager * Secret Manager * Speaker ID Note: These values are supported as input for legacy purposes, but will not be returned from the API. * all * ga-only * appengine.googleapis.com * artifactregistry.googleapis.com * bigquery.googleapis.com * bigtable.googleapis.com * container.googleapis.com * cloudkms.googleapis.com * cloudresourcemanager.googleapis.com * cloudsql.googleapis.com * compute.googleapis.com * dataflow.googleapis.com * dataproc.googleapis.com * dlp.googleapis.com * iam.googleapis.com * logging.googleapis.com * orgpolicy.googleapis.com * pubsub.googleapis.com * spanner.googleapis.com * secretmanager.googleapis.com * speakerid.googleapis.com * storage.googleapis.com Calls to UpdateAccessApprovalSettings using 'all' or any of the XXX.googleapis.com will be translated to the associated product name ('all', 'App Engine', etc.). Note: 'all' will enroll the resource in all products supported at both 'GA' and 'Preview' levels. More information about levels of support is available at https://cloud.google.com/access-approval/docs/supported-services */
		cloudProduct?: string | null;

		/** The enrollment level of the service. */
		enrollmentLevel?: EnrolledServiceEnrollmentLevel | null;
	}

	/** Represents the enrollment of a cloud resource into a specific service. */
	export interface EnrolledServiceFormProperties {

		/** The product for which Access Approval will be enrolled. Allowed values are listed below (case-sensitive): * all * GA * App Engine * Artifact Registry * BigQuery * Certificate Authority Service * Cloud Bigtable * Cloud Key Management Service * Compute Engine * Cloud Composer * Cloud Dataflow * Cloud Dataproc * Cloud DLP * Cloud EKM * Cloud Firestore * Cloud HSM * Cloud Identity and Access Management * Cloud Logging * Cloud NAT * Cloud Pub/Sub * Cloud Spanner * Cloud SQL * Cloud Storage * Eventarc * Google Kubernetes Engine * Organization Policy Serivice * Persistent Disk * Resource Manager * Secret Manager * Speaker ID Note: These values are supported as input for legacy purposes, but will not be returned from the API. * all * ga-only * appengine.googleapis.com * artifactregistry.googleapis.com * bigquery.googleapis.com * bigtable.googleapis.com * container.googleapis.com * cloudkms.googleapis.com * cloudresourcemanager.googleapis.com * cloudsql.googleapis.com * compute.googleapis.com * dataflow.googleapis.com * dataproc.googleapis.com * dlp.googleapis.com * iam.googleapis.com * logging.googleapis.com * orgpolicy.googleapis.com * pubsub.googleapis.com * spanner.googleapis.com * secretmanager.googleapis.com * speakerid.googleapis.com * storage.googleapis.com Calls to UpdateAccessApprovalSettings using 'all' or any of the XXX.googleapis.com will be translated to the associated product name ('all', 'App Engine', etc.). Note: 'all' will enroll the resource in all products supported at both 'GA' and 'Preview' levels. More information about levels of support is available at https://cloud.google.com/access-approval/docs/supported-services */
		cloudProduct: FormControl<string | null | undefined>,

		/** The enrollment level of the service. */
		enrollmentLevel: FormControl<EnrolledServiceEnrollmentLevel | null | undefined>,
	}
	export function CreateEnrolledServiceFormGroup() {
		return new FormGroup<EnrolledServiceFormProperties>({
			cloudProduct: new FormControl<string | null | undefined>(undefined),
			enrollmentLevel: new FormControl<EnrolledServiceEnrollmentLevel | null | undefined>(undefined),
		});

	}

	export enum EnrolledServiceEnrollmentLevel { ENROLLMENT_LEVEL_UNSPECIFIED = 0, BLOCK_ALL = 1 }


	/** Home office and physical location of the principal. */
	export interface AccessLocations {

		/** The "home office" location of the principal. A two-letter country code (ISO 3166-1 alpha-2), such as "US", "DE" or "GB" or a region code. In some limited situations Google systems may refer refer to a region code instead of a country code. Possible Region Codes: * ASI: Asia * EUR: Europe * OCE: Oceania * AFR: Africa * NAM: North America * SAM: South America * ANT: Antarctica * ANY: Any location */
		principalOfficeCountry?: string | null;

		/** Physical location of the principal at the time of the access. A two-letter country code (ISO 3166-1 alpha-2), such as "US", "DE" or "GB" or a region code. In some limited situations Google systems may refer refer to a region code instead of a country code. Possible Region Codes: * ASI: Asia * EUR: Europe * OCE: Oceania * AFR: Africa * NAM: North America * SAM: South America * ANT: Antarctica * ANY: Any location */
		principalPhysicalLocationCountry?: string | null;
	}

	/** Home office and physical location of the principal. */
	export interface AccessLocationsFormProperties {

		/** The "home office" location of the principal. A two-letter country code (ISO 3166-1 alpha-2), such as "US", "DE" or "GB" or a region code. In some limited situations Google systems may refer refer to a region code instead of a country code. Possible Region Codes: * ASI: Asia * EUR: Europe * OCE: Oceania * AFR: Africa * NAM: North America * SAM: South America * ANT: Antarctica * ANY: Any location */
		principalOfficeCountry: FormControl<string | null | undefined>,

		/** Physical location of the principal at the time of the access. A two-letter country code (ISO 3166-1 alpha-2), such as "US", "DE" or "GB" or a region code. In some limited situations Google systems may refer refer to a region code instead of a country code. Possible Region Codes: * ASI: Asia * EUR: Europe * OCE: Oceania * AFR: Africa * NAM: North America * SAM: South America * ANT: Antarctica * ANY: Any location */
		principalPhysicalLocationCountry: FormControl<string | null | undefined>,
	}
	export function CreateAccessLocationsFormGroup() {
		return new FormGroup<AccessLocationsFormProperties>({
			principalOfficeCountry: new FormControl<string | null | undefined>(undefined),
			principalPhysicalLocationCountry: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccessReason {

		/** More detail about certain reason types. See comments for each type above. */
		detail?: string | null;

		/** Type of access justification. */
		type?: AccessReasonType | null;
	}
	export interface AccessReasonFormProperties {

		/** More detail about certain reason types. See comments for each type above. */
		detail: FormControl<string | null | undefined>,

		/** Type of access justification. */
		type: FormControl<AccessReasonType | null | undefined>,
	}
	export function CreateAccessReasonFormGroup() {
		return new FormGroup<AccessReasonFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AccessReasonType | null | undefined>(undefined),
		});

	}

	export enum AccessReasonType { TYPE_UNSPECIFIED = 0, CUSTOMER_INITIATED_SUPPORT = 1, GOOGLE_INITIATED_SERVICE = 2, GOOGLE_INITIATED_REVIEW = 3, THIRD_PARTY_DATA_REQUEST = 4, GOOGLE_RESPONSE_TO_PRODUCTION_ALERT = 5, CLOUD_INITIATED_ACCESS = 6 }


	/** A request for the customer to approve access to a resource. */
	export interface ApprovalRequest {

		/** A decision that has been made to approve access to a resource. */
		approve?: ApproveDecision;

		/** A decision that has been made to dismiss an approval request. */
		dismiss?: DismissDecision;

		/** The resource name of the request. Format is "{projects|folders|organizations}/{id}/approvalRequests/{approval_request}". */
		name?: string | null;

		/** The time at which approval was requested. */
		requestTime?: string | null;

		/** The requested access duration. */
		requestedDuration?: string | null;

		/** The original requested expiration for the approval. Calculated by adding the requested_duration to the request_time. */
		requestedExpiration?: string | null;

		/** Home office and physical location of the principal. */
		requestedLocations?: AccessLocations;
		requestedReason?: AccessReason;

		/** The resource for which approval is being requested. The format of the resource name is defined at https://cloud.google.com/apis/design/resource_names. The resource name here may either be a "full" resource name (e.g. "//library.googleapis.com/shelves/shelf1/books/book2") or a "relative" resource name (e.g. "shelves/shelf1/books/book2") as described in the resource name specification. */
		requestedResourceName?: string | null;

		/** The properties associated with the resource of the request. */
		requestedResourceProperties?: ResourceProperties;
	}

	/** A request for the customer to approve access to a resource. */
	export interface ApprovalRequestFormProperties {

		/** The resource name of the request. Format is "{projects|folders|organizations}/{id}/approvalRequests/{approval_request}". */
		name: FormControl<string | null | undefined>,

		/** The time at which approval was requested. */
		requestTime: FormControl<string | null | undefined>,

		/** The requested access duration. */
		requestedDuration: FormControl<string | null | undefined>,

		/** The original requested expiration for the approval. Calculated by adding the requested_duration to the request_time. */
		requestedExpiration: FormControl<string | null | undefined>,

		/** The resource for which approval is being requested. The format of the resource name is defined at https://cloud.google.com/apis/design/resource_names. The resource name here may either be a "full" resource name (e.g. "//library.googleapis.com/shelves/shelf1/books/book2") or a "relative" resource name (e.g. "shelves/shelf1/books/book2") as described in the resource name specification. */
		requestedResourceName: FormControl<string | null | undefined>,
	}
	export function CreateApprovalRequestFormGroup() {
		return new FormGroup<ApprovalRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			requestTime: new FormControl<string | null | undefined>(undefined),
			requestedDuration: new FormControl<string | null | undefined>(undefined),
			requestedExpiration: new FormControl<string | null | undefined>(undefined),
			requestedResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A decision that has been made to approve access to a resource. */
	export interface ApproveDecision {

		/** The time at which approval was granted. */
		approveTime?: string | null;

		/** True when the request has been auto-approved. */
		autoApproved?: boolean | null;

		/** The time at which the approval expires. */
		expireTime?: string | null;

		/** If set, denotes the timestamp at which the approval is invalidated. */
		invalidateTime?: string | null;

		/** Information about the digital signature of the resource. */
		signatureInfo?: SignatureInfo;
	}

	/** A decision that has been made to approve access to a resource. */
	export interface ApproveDecisionFormProperties {

		/** The time at which approval was granted. */
		approveTime: FormControl<string | null | undefined>,

		/** True when the request has been auto-approved. */
		autoApproved: FormControl<boolean | null | undefined>,

		/** The time at which the approval expires. */
		expireTime: FormControl<string | null | undefined>,

		/** If set, denotes the timestamp at which the approval is invalidated. */
		invalidateTime: FormControl<string | null | undefined>,
	}
	export function CreateApproveDecisionFormGroup() {
		return new FormGroup<ApproveDecisionFormProperties>({
			approveTime: new FormControl<string | null | undefined>(undefined),
			autoApproved: new FormControl<boolean | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			invalidateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the digital signature of the resource. */
	export interface SignatureInfo {

		/** The resource name of the customer CryptoKeyVersion used for signing. */
		customerKmsKeyVersion?: string | null;

		/** The hashing algorithm used for signature verification. It will only be present in the case of Google managed keys. */
		googleKeyAlgorithm?: SignatureInfoGoogleKeyAlgorithm | null;

		/** The public key for the Google default signing, encoded in PEM format. The signature was created using a private key which may be verified using this public key. */
		googlePublicKeyPem?: string | null;

		/** The ApprovalRequest that is serialized without the SignatureInfo message field. This data is used with the hashing algorithm to generate the digital signature, and it can be used for signature verification. */
		serializedApprovalRequest?: string | null;

		/** The digital signature. */
		signature?: string | null;
	}

	/** Information about the digital signature of the resource. */
	export interface SignatureInfoFormProperties {

		/** The resource name of the customer CryptoKeyVersion used for signing. */
		customerKmsKeyVersion: FormControl<string | null | undefined>,

		/** The hashing algorithm used for signature verification. It will only be present in the case of Google managed keys. */
		googleKeyAlgorithm: FormControl<SignatureInfoGoogleKeyAlgorithm | null | undefined>,

		/** The public key for the Google default signing, encoded in PEM format. The signature was created using a private key which may be verified using this public key. */
		googlePublicKeyPem: FormControl<string | null | undefined>,

		/** The ApprovalRequest that is serialized without the SignatureInfo message field. This data is used with the hashing algorithm to generate the digital signature, and it can be used for signature verification. */
		serializedApprovalRequest: FormControl<string | null | undefined>,

		/** The digital signature. */
		signature: FormControl<string | null | undefined>,
	}
	export function CreateSignatureInfoFormGroup() {
		return new FormGroup<SignatureInfoFormProperties>({
			customerKmsKeyVersion: new FormControl<string | null | undefined>(undefined),
			googleKeyAlgorithm: new FormControl<SignatureInfoGoogleKeyAlgorithm | null | undefined>(undefined),
			googlePublicKeyPem: new FormControl<string | null | undefined>(undefined),
			serializedApprovalRequest: new FormControl<string | null | undefined>(undefined),
			signature: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SignatureInfoGoogleKeyAlgorithm { CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED = 0, GOOGLE_SYMMETRIC_ENCRYPTION = 1, AES_128_GCM = 2, AES_256_GCM = 3, AES_128_CBC = 4, AES_256_CBC = 5, AES_128_CTR = 6, AES_256_CTR = 7, RSA_SIGN_PSS_2048_SHA256 = 8, RSA_SIGN_PSS_3072_SHA256 = 9, RSA_SIGN_PSS_4096_SHA256 = 10, RSA_SIGN_PSS_4096_SHA512 = 11, RSA_SIGN_PKCS1_2048_SHA256 = 12, RSA_SIGN_PKCS1_3072_SHA256 = 13, RSA_SIGN_PKCS1_4096_SHA256 = 14, RSA_SIGN_PKCS1_4096_SHA512 = 15, RSA_SIGN_RAW_PKCS1_2048 = 16, RSA_SIGN_RAW_PKCS1_3072 = 17, RSA_SIGN_RAW_PKCS1_4096 = 18, RSA_DECRYPT_OAEP_2048_SHA256 = 19, RSA_DECRYPT_OAEP_3072_SHA256 = 20, RSA_DECRYPT_OAEP_4096_SHA256 = 21, RSA_DECRYPT_OAEP_4096_SHA512 = 22, RSA_DECRYPT_OAEP_2048_SHA1 = 23, RSA_DECRYPT_OAEP_3072_SHA1 = 24, RSA_DECRYPT_OAEP_4096_SHA1 = 25, EC_SIGN_P256_SHA256 = 26, EC_SIGN_P384_SHA384 = 27, EC_SIGN_SECP256K1_SHA256 = 28, HMAC_SHA256 = 29, HMAC_SHA1 = 30, HMAC_SHA384 = 31, HMAC_SHA512 = 32, HMAC_SHA224 = 33, EXTERNAL_SYMMETRIC_ENCRYPTION = 34 }


	/** A decision that has been made to dismiss an approval request. */
	export interface DismissDecision {

		/** The time at which the approval request was dismissed. */
		dismissTime?: string | null;

		/** This field will be true if the ApprovalRequest was implicitly dismissed due to inaction by the access approval approvers (the request is not acted on by the approvers before the exiration time). */
		implicit?: boolean | null;
	}

	/** A decision that has been made to dismiss an approval request. */
	export interface DismissDecisionFormProperties {

		/** The time at which the approval request was dismissed. */
		dismissTime: FormControl<string | null | undefined>,

		/** This field will be true if the ApprovalRequest was implicitly dismissed due to inaction by the access approval approvers (the request is not acted on by the approvers before the exiration time). */
		implicit: FormControl<boolean | null | undefined>,
	}
	export function CreateDismissDecisionFormGroup() {
		return new FormGroup<DismissDecisionFormProperties>({
			dismissTime: new FormControl<string | null | undefined>(undefined),
			implicit: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The properties associated with the resource of the request. */
	export interface ResourceProperties {

		/** Whether an approval will exclude the descendants of the resource being requested. */
		excludesDescendants?: boolean | null;
	}

	/** The properties associated with the resource of the request. */
	export interface ResourcePropertiesFormProperties {

		/** Whether an approval will exclude the descendants of the resource being requested. */
		excludesDescendants: FormControl<boolean | null | undefined>,
	}
	export function CreateResourcePropertiesFormGroup() {
		return new FormGroup<ResourcePropertiesFormProperties>({
			excludesDescendants: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request to approve an ApprovalRequest. */
	export interface ApproveApprovalRequestMessage {

		/** The expiration time of this approval. */
		expireTime?: string | null;
	}

	/** Request to approve an ApprovalRequest. */
	export interface ApproveApprovalRequestMessageFormProperties {

		/** The expiration time of this approval. */
		expireTime: FormControl<string | null | undefined>,
	}
	export function CreateApproveApprovalRequestMessageFormGroup() {
		return new FormGroup<ApproveApprovalRequestMessageFormProperties>({
			expireTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to dismiss an approval request. */
	export interface DismissApprovalRequestMessage {
	}

	/** Request to dismiss an approval request. */
	export interface DismissApprovalRequestMessageFormProperties {
	}
	export function CreateDismissApprovalRequestMessageFormGroup() {
		return new FormGroup<DismissApprovalRequestMessageFormProperties>({
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


	/** Request to invalidate an existing approval. */
	export interface InvalidateApprovalRequestMessage {
	}

	/** Request to invalidate an existing approval. */
	export interface InvalidateApprovalRequestMessageFormProperties {
	}
	export function CreateInvalidateApprovalRequestMessageFormGroup() {
		return new FormGroup<InvalidateApprovalRequestMessageFormProperties>({
		});

	}


	/** Response to listing of ApprovalRequest objects. */
	export interface ListApprovalRequestsResponse {

		/** Approval request details. */
		approvalRequests?: Array<ApprovalRequest>;

		/** Token to retrieve the next page of results, or empty if there are no more. */
		nextPageToken?: string | null;
	}

	/** Response to listing of ApprovalRequest objects. */
	export interface ListApprovalRequestsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListApprovalRequestsResponseFormGroup() {
		return new FormGroup<ListApprovalRequestsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.
		 * Delete v1/{name}
		 * @param {string} name Name of the AccessApprovalSettings to delete.
		 * @return {Empty} Successful response
		 */
		Accessapproval_projects_deleteAccessApprovalSettings(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets an approval request. Returns NOT_FOUND if the request does not exist.
		 * Get v1/{name}
		 * @param {string} name The name of the approval request to retrieve. Format: "{projects|folders|organizations}/{id}/approvalRequests/{approval_request}"
		 * @return {ApprovalRequest} Successful response
		 */
		Accessapproval_projects_approvalRequests_get(name: string): Observable<ApprovalRequest> {
			return this.http.get<ApprovalRequest>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.
		 * Patch v1/{name}
		 * @param {string} name The resource name of the settings. Format is one of: * "projects/{project}/accessApprovalSettings" * "folders/{folder}/accessApprovalSettings" * "organizations/{organization}/accessApprovalSettings"
		 * @param {string} updateMask The update mask applies to the settings. Only the top level fields of AccessApprovalSettings (notification_emails & enrolled_services) are supported. For each field, if it is included, the currently stored value will be entirely overwritten with the value of the field passed in this request. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated.
		 * @return {AccessApprovalSettings} Successful response
		 */
		Accessapproval_projects_updateAccessApprovalSettings(name: string, updateMask: string | null | undefined, requestBody: AccessApprovalSettings): Observable<AccessApprovalSettings> {
			return this.http.patch<AccessApprovalSettings>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
		 * Post v1/{name}:approve
		 * @param {string} name Name of the approval request to approve.
		 * @return {ApprovalRequest} Successful response
		 */
		Accessapproval_projects_approvalRequests_approve(name: string, requestBody: ApproveApprovalRequestMessage): Observable<ApprovalRequest> {
			return this.http.post<ApprovalRequest>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':approve', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
		 * Post v1/{name}:dismiss
		 * @param {string} name Name of the ApprovalRequest to dismiss.
		 * @return {ApprovalRequest} Successful response
		 */
		Accessapproval_projects_approvalRequests_dismiss(name: string, requestBody: DismissApprovalRequestMessage): Observable<ApprovalRequest> {
			return this.http.post<ApprovalRequest>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':dismiss', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.
		 * Post v1/{name}:invalidate
		 * @param {string} name Name of the ApprovalRequest to invalidate.
		 * @return {ApprovalRequest} Successful response
		 */
		Accessapproval_projects_approvalRequests_invalidate(name: string, requestBody: InvalidateApprovalRequestMessage): Observable<ApprovalRequest> {
			return this.http.post<ApprovalRequest>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':invalidate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.
		 * Get v1/{parent}/approvalRequests
		 * @param {string} parent The parent resource. This may be "projects/{project}", "folders/{folder}", or "organizations/{organization}".
		 * @param {string} filter A filter on the type of approval requests to retrieve. Must be one of the following values: * [not set]: Requests that are pending or have active approvals. * ALL: All requests. * PENDING: Only pending requests. * ACTIVE: Only active (i.e. currently approved) requests. * DISMISSED: Only requests that have been dismissed, or requests that are not approved and past expiration. * EXPIRED: Only requests that have been approved, and the approval has expired. * HISTORY: Active, dismissed and expired requests.
		 * @param {number} pageSize Requested page size.
		 * @param {string} pageToken A token identifying the page of results to return.
		 * @return {ListApprovalRequestsResponse} Successful response
		 */
		Accessapproval_projects_approvalRequests_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListApprovalRequestsResponse> {
			return this.http.get<ListApprovalRequestsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/approvalRequests&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

}

