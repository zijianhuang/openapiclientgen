import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** LRO response metadata for InboundSamlSsoProfilesService.AddIdpCredential. */
	export interface AddIdpCredentialOperationMetadata {
	}

	/** LRO response metadata for InboundSamlSsoProfilesService.AddIdpCredential. */
	export interface AddIdpCredentialOperationMetadataFormProperties {
	}
	export function CreateAddIdpCredentialOperationMetadataFormGroup() {
		return new FormGroup<AddIdpCredentialOperationMetadataFormProperties>({
		});

	}


	/** The request for creating an IdpCredential with its associated payload. An InboundSamlSsoProfile can own up to 2 credentials. */
	export interface AddIdpCredentialRequest {

		/** PEM encoded x509 certificate containing the public key for verifying IdP signatures. */
		pemData?: string | null;
	}

	/** The request for creating an IdpCredential with its associated payload. An InboundSamlSsoProfile can own up to 2 credentials. */
	export interface AddIdpCredentialRequestFormProperties {

		/** PEM encoded x509 certificate containing the public key for verifying IdP signatures. */
		pemData: FormControl<string | null | undefined>,
	}
	export function CreateAddIdpCredentialRequestFormGroup() {
		return new FormGroup<AddIdpCredentialRequestFormProperties>({
			pemData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource representing the Android specific attributes of a Device. */
	export interface AndroidAttributes {

		/** Whether the device passes Android CTS compliance. */
		ctsProfileMatch?: boolean | null;

		/** Whether applications from unknown sources can be installed on device. */
		enabledUnknownSources?: boolean | null;

		/** Whether any potentially harmful apps were detected on the device. */
		hasPotentiallyHarmfulApps?: boolean | null;

		/** Whether this account is on an owner/primary profile. For phones, only true for owner profiles. Android 4+ devices can have secondary or restricted user profiles. */
		ownerProfileAccount?: boolean | null;

		/** Ownership privileges on device. */
		ownershipPrivilege?: AndroidAttributesOwnershipPrivilege | null;

		/** Whether device supports Android work profiles. If false, this service will not block access to corp data even if an administrator turns on the "Enforce Work Profile" policy. */
		supportsWorkProfile?: boolean | null;

		/** Whether Android verified boot status is GREEN. */
		verifiedBoot?: boolean | null;

		/** Whether Google Play Protect Verify Apps is enabled. */
		verifyAppsEnabled?: boolean | null;
	}

	/** Resource representing the Android specific attributes of a Device. */
	export interface AndroidAttributesFormProperties {

		/** Whether the device passes Android CTS compliance. */
		ctsProfileMatch: FormControl<boolean | null | undefined>,

		/** Whether applications from unknown sources can be installed on device. */
		enabledUnknownSources: FormControl<boolean | null | undefined>,

		/** Whether any potentially harmful apps were detected on the device. */
		hasPotentiallyHarmfulApps: FormControl<boolean | null | undefined>,

		/** Whether this account is on an owner/primary profile. For phones, only true for owner profiles. Android 4+ devices can have secondary or restricted user profiles. */
		ownerProfileAccount: FormControl<boolean | null | undefined>,

		/** Ownership privileges on device. */
		ownershipPrivilege: FormControl<AndroidAttributesOwnershipPrivilege | null | undefined>,

		/** Whether device supports Android work profiles. If false, this service will not block access to corp data even if an administrator turns on the "Enforce Work Profile" policy. */
		supportsWorkProfile: FormControl<boolean | null | undefined>,

		/** Whether Android verified boot status is GREEN. */
		verifiedBoot: FormControl<boolean | null | undefined>,

		/** Whether Google Play Protect Verify Apps is enabled. */
		verifyAppsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAndroidAttributesFormGroup() {
		return new FormGroup<AndroidAttributesFormProperties>({
			ctsProfileMatch: new FormControl<boolean | null | undefined>(undefined),
			enabledUnknownSources: new FormControl<boolean | null | undefined>(undefined),
			hasPotentiallyHarmfulApps: new FormControl<boolean | null | undefined>(undefined),
			ownerProfileAccount: new FormControl<boolean | null | undefined>(undefined),
			ownershipPrivilege: new FormControl<AndroidAttributesOwnershipPrivilege | null | undefined>(undefined),
			supportsWorkProfile: new FormControl<boolean | null | undefined>(undefined),
			verifiedBoot: new FormControl<boolean | null | undefined>(undefined),
			verifyAppsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum AndroidAttributesOwnershipPrivilege { OWNERSHIP_PRIVILEGE_UNSPECIFIED = 0, DEVICE_ADMINISTRATOR = 1, PROFILE_OWNER = 2, DEVICE_OWNER = 3 }


	/** Request message for approving the device to access user data. */
	export interface ApproveDeviceUserRequest {

		/** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
		customer?: string | null;
	}

	/** Request message for approving the device to access user data. */
	export interface ApproveDeviceUserRequestFormProperties {

		/** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
		customer: FormControl<string | null | undefined>,
	}
	export function CreateApproveDeviceUserRequestFormGroup() {
		return new FormGroup<ApproveDeviceUserRequestFormProperties>({
			customer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for approving the device to access user data. */
	export interface ApproveDeviceUserResponse {

		/** Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device */
		deviceUser?: DeviceUser;
	}

	/** Response message for approving the device to access user data. */
	export interface ApproveDeviceUserResponseFormProperties {
	}
	export function CreateApproveDeviceUserResponseFormGroup() {
		return new FormGroup<ApproveDeviceUserResponseFormProperties>({
		});

	}


	/** Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device */
	export interface DeviceUser {

		/** Compromised State of the DeviceUser object */
		compromisedState?: DeviceUserCompromisedState | null;

		/** When the user first signed in to the device */
		createTime?: string | null;

		/** Output only. Most recent time when user registered with this service. */
		firstSyncTime?: string | null;

		/** Output only. Default locale used on device, in IETF BCP-47 format. */
		languageCode?: string | null;

		/** Output only. Last time when user synced with policies. */
		lastSyncTime?: string | null;

		/** Output only. Management state of the user on the device. */
		managementState?: DeviceUserManagementState | null;

		/** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the DeviceUser in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where `device_user_id` uniquely identifies a user's use of a device. */
		name?: string | null;

		/** Password state of the DeviceUser object */
		passwordState?: DeviceUserPasswordState | null;

		/** Output only. User agent on the device for this specific user */
		userAgent?: string | null;

		/** Email address of the user registered on the device. */
		userEmail?: string | null;
	}

	/** Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device */
	export interface DeviceUserFormProperties {

		/** Compromised State of the DeviceUser object */
		compromisedState: FormControl<DeviceUserCompromisedState | null | undefined>,

		/** When the user first signed in to the device */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Most recent time when user registered with this service. */
		firstSyncTime: FormControl<string | null | undefined>,

		/** Output only. Default locale used on device, in IETF BCP-47 format. */
		languageCode: FormControl<string | null | undefined>,

		/** Output only. Last time when user synced with policies. */
		lastSyncTime: FormControl<string | null | undefined>,

		/** Output only. Management state of the user on the device. */
		managementState: FormControl<DeviceUserManagementState | null | undefined>,

		/** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the DeviceUser in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where `device_user_id` uniquely identifies a user's use of a device. */
		name: FormControl<string | null | undefined>,

		/** Password state of the DeviceUser object */
		passwordState: FormControl<DeviceUserPasswordState | null | undefined>,

		/** Output only. User agent on the device for this specific user */
		userAgent: FormControl<string | null | undefined>,

		/** Email address of the user registered on the device. */
		userEmail: FormControl<string | null | undefined>,
	}
	export function CreateDeviceUserFormGroup() {
		return new FormGroup<DeviceUserFormProperties>({
			compromisedState: new FormControl<DeviceUserCompromisedState | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			firstSyncTime: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			lastSyncTime: new FormControl<string | null | undefined>(undefined),
			managementState: new FormControl<DeviceUserManagementState | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			passwordState: new FormControl<DeviceUserPasswordState | null | undefined>(undefined),
			userAgent: new FormControl<string | null | undefined>(undefined),
			userEmail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeviceUserCompromisedState { COMPROMISED_STATE_UNSPECIFIED = 0, COMPROMISED = 1, NOT_COMPROMISED = 2 }

	export enum DeviceUserManagementState { MANAGEMENT_STATE_UNSPECIFIED = 0, WIPING = 1, WIPED = 2, APPROVED = 3, BLOCKED = 4, PENDING_APPROVAL = 5, UNENROLLED = 6 }

	export enum DeviceUserPasswordState { PASSWORD_STATE_UNSPECIFIED = 0, PASSWORD_SET = 1, PASSWORD_NOT_SET = 2 }


	/** Request message for blocking account on device. */
	export interface BlockDeviceUserRequest {

		/** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
		customer?: string | null;
	}

	/** Request message for blocking account on device. */
	export interface BlockDeviceUserRequestFormProperties {

		/** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
		customer: FormControl<string | null | undefined>,
	}
	export function CreateBlockDeviceUserRequestFormGroup() {
		return new FormGroup<BlockDeviceUserRequestFormProperties>({
			customer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for blocking the device from accessing user data. */
	export interface BlockDeviceUserResponse {

		/** Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device */
		deviceUser?: DeviceUser;
	}

	/** Response message for blocking the device from accessing user data. */
	export interface BlockDeviceUserResponseFormProperties {
	}
	export function CreateBlockDeviceUserResponseFormGroup() {
		return new FormGroup<BlockDeviceUserResponseFormProperties>({
		});

	}


	/** Request to cancel sent invitation for target email in UserInvitation. */
	export interface CancelUserInvitationRequest {
	}

	/** Request to cancel sent invitation for target email in UserInvitation. */
	export interface CancelUserInvitationRequestFormProperties {
	}
	export function CreateCancelUserInvitationRequestFormGroup() {
		return new FormGroup<CancelUserInvitationRequestFormProperties>({
		});

	}


	/** Request message for cancelling an unfinished device wipe. */
	export interface CancelWipeDeviceRequest {

		/** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
		customer?: string | null;
	}

	/** Request message for cancelling an unfinished device wipe. */
	export interface CancelWipeDeviceRequestFormProperties {

		/** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
		customer: FormControl<string | null | undefined>,
	}
	export function CreateCancelWipeDeviceRequestFormGroup() {
		return new FormGroup<CancelWipeDeviceRequestFormProperties>({
			customer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for cancelling an unfinished device wipe. */
	export interface CancelWipeDeviceResponse {

		/** A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user. */
		device?: Device;
	}

	/** Response message for cancelling an unfinished device wipe. */
	export interface CancelWipeDeviceResponseFormProperties {
	}
	export function CreateCancelWipeDeviceResponseFormGroup() {
		return new FormGroup<CancelWipeDeviceResponseFormProperties>({
		});

	}


	/** A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user. */
	export interface Device {

		/** Resource representing the Android specific attributes of a Device. */
		androidSpecificAttributes?: AndroidAttributes;

		/** Asset tag of the device. */
		assetTag?: string | null;

		/** Output only. Baseband version of the device. */
		basebandVersion?: string | null;

		/** Output only. Device bootloader version. Example: 0.6.7. */
		bootloaderVersion?: string | null;

		/** Output only. Device brand. Example: Samsung. */
		brand?: string | null;

		/** Output only. Build number of the device. */
		buildNumber?: string | null;

		/** List of the clients the device is reporting to. */
		clientTypes?: Array<string>;

		/** Output only. Represents whether the Device is compromised. */
		compromisedState?: DeviceCompromisedState | null;

		/** Output only. When the Company-Owned device was imported. This field is empty for BYOD devices. */
		createTime?: string | null;

		/** Unique identifier for the device. */
		deviceId?: string | null;

		/** Output only. Type of device. */
		deviceType?: DeviceDeviceType | null;

		/** Output only. Whether developer options is enabled on device. */
		enabledDeveloperOptions?: boolean | null;

		/** Output only. Whether USB debugging is enabled on device. */
		enabledUsbDebugging?: boolean | null;

		/** Output only. Device encryption state. */
		encryptionState?: DeviceEncryptionState | null;

		/** Resource representing the Endpoint Verification-specific attributes of a Device. https://cloud.google.com/endpoint-verification/docs/overview */
		endpointVerificationSpecificAttributes?: EndpointVerificationSpecificAttributes;

		/** Host name of the device. */
		hostname?: string | null;

		/** Output only. IMEI number of device if GSM device; empty otherwise. */
		imei?: string | null;

		/** Output only. Kernel version of the device. */
		kernelVersion?: string | null;

		/** Most recent time when device synced with this service. */
		lastSyncTime?: string | null;

		/** Output only. Management state of the device */
		managementState?: DeviceManagementState | null;

		/** Output only. Device manufacturer. Example: Motorola. */
		manufacturer?: string | null;

		/** Output only. MEID number of device if CDMA device; empty otherwise. */
		meid?: string | null;

		/** Output only. Model name of device. Example: Pixel 3. */
		model?: string | null;

		/** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}`, where device_id is the unique id assigned to the Device. */
		name?: string | null;

		/** Output only. Mobile or network operator of device, if available. */
		networkOperator?: string | null;

		/** Output only. OS version of the device. Example: Android 8.1.0. */
		osVersion?: string | null;

		/** Output only. Domain name for Google accounts on device. Type for other accounts on device. On Android, will only be populated if |ownership_privilege| is |PROFILE_OWNER| or |DEVICE_OWNER|. Does not include the account signed in to the device policy app if that account's domain has only one account. Examples: "com.example", "xyz.com". */
		otherAccounts?: Array<string>;

		/** Output only. Whether the device is owned by the company or an individual */
		ownerType?: DeviceOwnerType | null;

		/** Output only. OS release version. Example: 6.0. */
		releaseVersion?: string | null;

		/** Output only. OS security patch update time on device. */
		securityPatchTime?: string | null;

		/** Serial Number of device. Example: HT82V1A01076. */
		serialNumber?: string | null;

		/** WiFi MAC addresses of device. */
		wifiMacAddresses?: Array<string>;
	}

	/** A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user. */
	export interface DeviceFormProperties {

		/** Asset tag of the device. */
		assetTag: FormControl<string | null | undefined>,

		/** Output only. Baseband version of the device. */
		basebandVersion: FormControl<string | null | undefined>,

		/** Output only. Device bootloader version. Example: 0.6.7. */
		bootloaderVersion: FormControl<string | null | undefined>,

		/** Output only. Device brand. Example: Samsung. */
		brand: FormControl<string | null | undefined>,

		/** Output only. Build number of the device. */
		buildNumber: FormControl<string | null | undefined>,

		/** Output only. Represents whether the Device is compromised. */
		compromisedState: FormControl<DeviceCompromisedState | null | undefined>,

		/** Output only. When the Company-Owned device was imported. This field is empty for BYOD devices. */
		createTime: FormControl<string | null | undefined>,

		/** Unique identifier for the device. */
		deviceId: FormControl<string | null | undefined>,

		/** Output only. Type of device. */
		deviceType: FormControl<DeviceDeviceType | null | undefined>,

		/** Output only. Whether developer options is enabled on device. */
		enabledDeveloperOptions: FormControl<boolean | null | undefined>,

		/** Output only. Whether USB debugging is enabled on device. */
		enabledUsbDebugging: FormControl<boolean | null | undefined>,

		/** Output only. Device encryption state. */
		encryptionState: FormControl<DeviceEncryptionState | null | undefined>,

		/** Host name of the device. */
		hostname: FormControl<string | null | undefined>,

		/** Output only. IMEI number of device if GSM device; empty otherwise. */
		imei: FormControl<string | null | undefined>,

		/** Output only. Kernel version of the device. */
		kernelVersion: FormControl<string | null | undefined>,

		/** Most recent time when device synced with this service. */
		lastSyncTime: FormControl<string | null | undefined>,

		/** Output only. Management state of the device */
		managementState: FormControl<DeviceManagementState | null | undefined>,

		/** Output only. Device manufacturer. Example: Motorola. */
		manufacturer: FormControl<string | null | undefined>,

		/** Output only. MEID number of device if CDMA device; empty otherwise. */
		meid: FormControl<string | null | undefined>,

		/** Output only. Model name of device. Example: Pixel 3. */
		model: FormControl<string | null | undefined>,

		/** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}`, where device_id is the unique id assigned to the Device. */
		name: FormControl<string | null | undefined>,

		/** Output only. Mobile or network operator of device, if available. */
		networkOperator: FormControl<string | null | undefined>,

		/** Output only. OS version of the device. Example: Android 8.1.0. */
		osVersion: FormControl<string | null | undefined>,

		/** Output only. Whether the device is owned by the company or an individual */
		ownerType: FormControl<DeviceOwnerType | null | undefined>,

		/** Output only. OS release version. Example: 6.0. */
		releaseVersion: FormControl<string | null | undefined>,

		/** Output only. OS security patch update time on device. */
		securityPatchTime: FormControl<string | null | undefined>,

		/** Serial Number of device. Example: HT82V1A01076. */
		serialNumber: FormControl<string | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			assetTag: new FormControl<string | null | undefined>(undefined),
			basebandVersion: new FormControl<string | null | undefined>(undefined),
			bootloaderVersion: new FormControl<string | null | undefined>(undefined),
			brand: new FormControl<string | null | undefined>(undefined),
			buildNumber: new FormControl<string | null | undefined>(undefined),
			compromisedState: new FormControl<DeviceCompromisedState | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deviceId: new FormControl<string | null | undefined>(undefined),
			deviceType: new FormControl<DeviceDeviceType | null | undefined>(undefined),
			enabledDeveloperOptions: new FormControl<boolean | null | undefined>(undefined),
			enabledUsbDebugging: new FormControl<boolean | null | undefined>(undefined),
			encryptionState: new FormControl<DeviceEncryptionState | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			imei: new FormControl<string | null | undefined>(undefined),
			kernelVersion: new FormControl<string | null | undefined>(undefined),
			lastSyncTime: new FormControl<string | null | undefined>(undefined),
			managementState: new FormControl<DeviceManagementState | null | undefined>(undefined),
			manufacturer: new FormControl<string | null | undefined>(undefined),
			meid: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			networkOperator: new FormControl<string | null | undefined>(undefined),
			osVersion: new FormControl<string | null | undefined>(undefined),
			ownerType: new FormControl<DeviceOwnerType | null | undefined>(undefined),
			releaseVersion: new FormControl<string | null | undefined>(undefined),
			securityPatchTime: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeviceCompromisedState { COMPROMISED_STATE_UNSPECIFIED = 0, COMPROMISED = 1, UNCOMPROMISED = 2 }

	export enum DeviceDeviceType { DEVICE_TYPE_UNSPECIFIED = 0, ANDROID = 1, IOS = 2, GOOGLE_SYNC = 3, WINDOWS = 4, MAC_OS = 5, LINUX = 6, CHROME_OS = 7 }

	export enum DeviceEncryptionState { ENCRYPTION_STATE_UNSPECIFIED = 0, UNSUPPORTED_BY_DEVICE = 1, ENCRYPTED = 2, NOT_ENCRYPTED = 3 }


	/** Resource representing the Endpoint Verification-specific attributes of a Device. https://cloud.google.com/endpoint-verification/docs/overview */
	export interface EndpointVerificationSpecificAttributes {

		/** Details of certificates. */
		certificateAttributes?: Array<CertificateAttributes>;
	}

	/** Resource representing the Endpoint Verification-specific attributes of a Device. https://cloud.google.com/endpoint-verification/docs/overview */
	export interface EndpointVerificationSpecificAttributesFormProperties {
	}
	export function CreateEndpointVerificationSpecificAttributesFormGroup() {
		return new FormGroup<EndpointVerificationSpecificAttributesFormProperties>({
		});

	}


	/** Stores information about a certificate. */
	export interface CertificateAttributes {

		/** CertificateTemplate (v3 Extension in X.509). */
		certificateTemplate?: CertificateTemplate;

		/** The encoded certificate fingerprint. */
		fingerprint?: string | null;

		/** The name of the issuer of this certificate. */
		issuer?: string | null;

		/** Serial number of the certificate, Example: "123456789". */
		serialNumber?: string | null;

		/** The subject name of this certificate. */
		subject?: string | null;

		/** The certificate thumbprint. */
		thumbprint?: string | null;

		/** Validation state of this certificate. */
		validationState?: CertificateAttributesValidationState | null;

		/** Certificate not valid at or after this timestamp. */
		validityExpirationTime?: string | null;

		/** Certificate not valid before this timestamp. */
		validityStartTime?: string | null;
	}

	/** Stores information about a certificate. */
	export interface CertificateAttributesFormProperties {

		/** The encoded certificate fingerprint. */
		fingerprint: FormControl<string | null | undefined>,

		/** The name of the issuer of this certificate. */
		issuer: FormControl<string | null | undefined>,

		/** Serial number of the certificate, Example: "123456789". */
		serialNumber: FormControl<string | null | undefined>,

		/** The subject name of this certificate. */
		subject: FormControl<string | null | undefined>,

		/** The certificate thumbprint. */
		thumbprint: FormControl<string | null | undefined>,

		/** Validation state of this certificate. */
		validationState: FormControl<CertificateAttributesValidationState | null | undefined>,

		/** Certificate not valid at or after this timestamp. */
		validityExpirationTime: FormControl<string | null | undefined>,

		/** Certificate not valid before this timestamp. */
		validityStartTime: FormControl<string | null | undefined>,
	}
	export function CreateCertificateAttributesFormGroup() {
		return new FormGroup<CertificateAttributesFormProperties>({
			fingerprint: new FormControl<string | null | undefined>(undefined),
			issuer: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined),
			validationState: new FormControl<CertificateAttributesValidationState | null | undefined>(undefined),
			validityExpirationTime: new FormControl<string | null | undefined>(undefined),
			validityStartTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CertificateTemplate (v3 Extension in X.509). */
	export interface CertificateTemplate {

		/** The template id of the template. Example: "1.3.6.1.4.1.311.21.8.15608621.11768144.5720724.16068415.6889630.81.2472537.7784047". */
		id?: string | null;

		/** The Major version of the template. Example: 100. */
		majorVersion?: number | null;

		/** The minor version of the template. Example: 12. */
		minorVersion?: number | null;
	}

	/** CertificateTemplate (v3 Extension in X.509). */
	export interface CertificateTemplateFormProperties {

		/** The template id of the template. Example: "1.3.6.1.4.1.311.21.8.15608621.11768144.5720724.16068415.6889630.81.2472537.7784047". */
		id: FormControl<string | null | undefined>,

		/** The Major version of the template. Example: 100. */
		majorVersion: FormControl<number | null | undefined>,

		/** The minor version of the template. Example: 12. */
		minorVersion: FormControl<number | null | undefined>,
	}
	export function CreateCertificateTemplateFormGroup() {
		return new FormGroup<CertificateTemplateFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			majorVersion: new FormControl<number | null | undefined>(undefined),
			minorVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CertificateAttributesValidationState { CERTIFICATE_VALIDATION_STATE_UNSPECIFIED = 0, VALIDATION_SUCCESSFUL = 1, VALIDATION_FAILED = 2 }

	export enum DeviceManagementState { MANAGEMENT_STATE_UNSPECIFIED = 0, APPROVED = 1, BLOCKED = 2, PENDING = 3, UNPROVISIONED = 4, WIPING = 5, WIPED = 6 }

	export enum DeviceOwnerType { DEVICE_OWNERSHIP_UNSPECIFIED = 0, COMPANY = 1, BYOD = 2 }


	/** Request message for cancelling an unfinished user account wipe. */
	export interface CancelWipeDeviceUserRequest {

		/** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
		customer?: string | null;
	}

	/** Request message for cancelling an unfinished user account wipe. */
	export interface CancelWipeDeviceUserRequestFormProperties {

		/** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
		customer: FormControl<string | null | undefined>,
	}
	export function CreateCancelWipeDeviceUserRequestFormGroup() {
		return new FormGroup<CancelWipeDeviceUserRequestFormProperties>({
			customer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for cancelling an unfinished user account wipe. */
	export interface CancelWipeDeviceUserResponse {

		/** Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device */
		deviceUser?: DeviceUser;
	}

	/** Response message for cancelling an unfinished user account wipe. */
	export interface CancelWipeDeviceUserResponseFormProperties {
	}
	export function CreateCancelWipeDeviceUserResponseFormGroup() {
		return new FormGroup<CancelWipeDeviceUserResponseFormProperties>({
		});

	}


	/** The response message for MembershipsService.CheckTransitiveMembership. */
	export interface CheckTransitiveMembershipResponse {

		/** Response does not include the possible roles of a member since the behavior of this rpc is not all-or-nothing unlike the other rpcs. So, it may not be possible to list all the roles definitively, due to possible lack of authorization in some of the paths. */
		hasMembership?: boolean | null;
	}

	/** The response message for MembershipsService.CheckTransitiveMembership. */
	export interface CheckTransitiveMembershipResponseFormProperties {

		/** Response does not include the possible roles of a member since the behavior of this rpc is not all-or-nothing unlike the other rpcs. So, it may not be possible to list all the roles definitively, due to possible lack of authorization in some of the paths. */
		hasMembership: FormControl<boolean | null | undefined>,
	}
	export function CreateCheckTransitiveMembershipResponseFormGroup() {
		return new FormGroup<CheckTransitiveMembershipResponseFormProperties>({
			hasMembership: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the state associated with an API client calling the Devices API. Resource representing ClientState and supports updates from API users */
	export interface ClientState {

		/** The caller can specify asset tags for this resource */
		assetTags?: Array<string>;

		/** The compliance state of the resource as specified by the API client. */
		complianceState?: ClientStateComplianceState | null;

		/** Output only. The time the client state data was created. */
		createTime?: string | null;

		/** This field may be used to store a unique identifier for the API resource within which these CustomAttributes are a field. */
		customId?: string | null;

		/** The token that needs to be passed back for concurrency control in updates. Token needs to be passed back in UpdateRequest */
		etag?: string | null;

		/** The Health score of the resource */
		healthScore?: ClientStateHealthScore | null;

		/** The map of key-value attributes stored by callers specific to a device. The total serialized length of this map may not exceed 10KB. No limit is placed on the number of attributes in a map. */
		keyValuePairs?: {[id: string]: CustomAttributeValue };

		/** Output only. The time the client state data was last updated. */
		lastUpdateTime?: string | null;

		/** The management state of the resource as specified by the API client. */
		managed?: ClientStateManaged | null;

		/** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device_id}/deviceUsers/{device_user_id}/clientState/{partner_id}`, where partner_id corresponds to the partner storing the data. */
		name?: string | null;

		/** Output only. The owner of the ClientState */
		ownerType?: ClientStateOwnerType | null;

		/** A descriptive cause of the health score. */
		scoreReason?: string | null;
	}

	/** Represents the state associated with an API client calling the Devices API. Resource representing ClientState and supports updates from API users */
	export interface ClientStateFormProperties {

		/** The compliance state of the resource as specified by the API client. */
		complianceState: FormControl<ClientStateComplianceState | null | undefined>,

		/** Output only. The time the client state data was created. */
		createTime: FormControl<string | null | undefined>,

		/** This field may be used to store a unique identifier for the API resource within which these CustomAttributes are a field. */
		customId: FormControl<string | null | undefined>,

		/** The token that needs to be passed back for concurrency control in updates. Token needs to be passed back in UpdateRequest */
		etag: FormControl<string | null | undefined>,

		/** The Health score of the resource */
		healthScore: FormControl<ClientStateHealthScore | null | undefined>,

		/** The map of key-value attributes stored by callers specific to a device. The total serialized length of this map may not exceed 10KB. No limit is placed on the number of attributes in a map. */
		keyValuePairs: FormControl<{[id: string]: CustomAttributeValue } | null | undefined>,

		/** Output only. The time the client state data was last updated. */
		lastUpdateTime: FormControl<string | null | undefined>,

		/** The management state of the resource as specified by the API client. */
		managed: FormControl<ClientStateManaged | null | undefined>,

		/** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device_id}/deviceUsers/{device_user_id}/clientState/{partner_id}`, where partner_id corresponds to the partner storing the data. */
		name: FormControl<string | null | undefined>,

		/** Output only. The owner of the ClientState */
		ownerType: FormControl<ClientStateOwnerType | null | undefined>,

		/** A descriptive cause of the health score. */
		scoreReason: FormControl<string | null | undefined>,
	}
	export function CreateClientStateFormGroup() {
		return new FormGroup<ClientStateFormProperties>({
			complianceState: new FormControl<ClientStateComplianceState | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			customId: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			healthScore: new FormControl<ClientStateHealthScore | null | undefined>(undefined),
			keyValuePairs: new FormControl<{[id: string]: CustomAttributeValue } | null | undefined>(undefined),
			lastUpdateTime: new FormControl<string | null | undefined>(undefined),
			managed: new FormControl<ClientStateManaged | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ownerType: new FormControl<ClientStateOwnerType | null | undefined>(undefined),
			scoreReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClientStateComplianceState { COMPLIANCE_STATE_UNSPECIFIED = 0, COMPLIANT = 1, NON_COMPLIANT = 2 }

	export enum ClientStateHealthScore { HEALTH_SCORE_UNSPECIFIED = 0, VERY_POOR = 1, POOR = 2, NEUTRAL = 3, GOOD = 4, VERY_GOOD = 5 }


	/** Additional custom attribute values may be one of these types */
	export interface CustomAttributeValue {

		/** Represents a boolean value. */
		boolValue?: boolean | null;

		/** Represents a double value. */
		numberValue?: number | null;

		/** Represents a string value. */
		stringValue?: string | null;
	}

	/** Additional custom attribute values may be one of these types */
	export interface CustomAttributeValueFormProperties {

		/** Represents a boolean value. */
		boolValue: FormControl<boolean | null | undefined>,

		/** Represents a double value. */
		numberValue: FormControl<number | null | undefined>,

		/** Represents a string value. */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateCustomAttributeValueFormGroup() {
		return new FormGroup<CustomAttributeValueFormProperties>({
			boolValue: new FormControl<boolean | null | undefined>(undefined),
			numberValue: new FormControl<number | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClientStateManaged { MANAGED_STATE_UNSPECIFIED = 0, MANAGED = 1, UNMANAGED = 2 }

	export enum ClientStateOwnerType { OWNER_TYPE_UNSPECIFIED = 0, OWNER_TYPE_CUSTOMER = 1, OWNER_TYPE_PARTNER = 2 }


	/** Request message for creating a Company Owned device. */
	export interface CreateDeviceRequest {

		/** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
		customer?: string | null;

		/** A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user. */
		device?: Device;
	}

	/** Request message for creating a Company Owned device. */
	export interface CreateDeviceRequestFormProperties {

		/** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
		customer: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeviceRequestFormGroup() {
		return new FormGroup<CreateDeviceRequestFormProperties>({
			customer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** LRO response metadata for InboundSamlSsoProfilesService.CreateInboundSamlSsoProfile. */
	export interface CreateInboundSamlSsoProfileOperationMetadata {
	}

	/** LRO response metadata for InboundSamlSsoProfilesService.CreateInboundSamlSsoProfile. */
	export interface CreateInboundSamlSsoProfileOperationMetadataFormProperties {
	}
	export function CreateCreateInboundSamlSsoProfileOperationMetadataFormGroup() {
		return new FormGroup<CreateInboundSamlSsoProfileOperationMetadataFormProperties>({
		});

	}


	/** LRO response metadata for InboundSsoAssignmentsService.CreateInboundSsoAssignment. */
	export interface CreateInboundSsoAssignmentOperationMetadata {
	}

	/** LRO response metadata for InboundSsoAssignmentsService.CreateInboundSsoAssignment. */
	export interface CreateInboundSsoAssignmentOperationMetadataFormProperties {
	}
	export function CreateCreateInboundSsoAssignmentOperationMetadataFormGroup() {
		return new FormGroup<CreateInboundSsoAssignmentOperationMetadataFormProperties>({
		});

	}


	/** LRO response metadata for InboundSamlSsoProfilesService.DeleteIdpCredential. */
	export interface DeleteIdpCredentialOperationMetadata {
	}

	/** LRO response metadata for InboundSamlSsoProfilesService.DeleteIdpCredential. */
	export interface DeleteIdpCredentialOperationMetadataFormProperties {
	}
	export function CreateDeleteIdpCredentialOperationMetadataFormGroup() {
		return new FormGroup<DeleteIdpCredentialOperationMetadataFormProperties>({
		});

	}


	/** LRO response metadata for InboundSamlSsoProfilesService.DeleteInboundSamlSsoProfile. */
	export interface DeleteInboundSamlSsoProfileOperationMetadata {
	}

	/** LRO response metadata for InboundSamlSsoProfilesService.DeleteInboundSamlSsoProfile. */
	export interface DeleteInboundSamlSsoProfileOperationMetadataFormProperties {
	}
	export function CreateDeleteInboundSamlSsoProfileOperationMetadataFormGroup() {
		return new FormGroup<DeleteInboundSamlSsoProfileOperationMetadataFormProperties>({
		});

	}


	/** LRO response metadata for InboundSsoAssignmentsService.DeleteInboundSsoAssignment. */
	export interface DeleteInboundSsoAssignmentOperationMetadata {
	}

	/** LRO response metadata for InboundSsoAssignmentsService.DeleteInboundSsoAssignment. */
	export interface DeleteInboundSsoAssignmentOperationMetadataFormProperties {
	}
	export function CreateDeleteInboundSsoAssignmentOperationMetadataFormGroup() {
		return new FormGroup<DeleteInboundSsoAssignmentOperationMetadataFormProperties>({
		});

	}


	/** Information of a DSA public key. */
	export interface DsaPublicKeyInfo {

		/** Key size in bits (size of parameter P). */
		keySize?: number | null;
	}

	/** Information of a DSA public key. */
	export interface DsaPublicKeyInfoFormProperties {

		/** Key size in bits (size of parameter P). */
		keySize: FormControl<number | null | undefined>,
	}
	export function CreateDsaPublicKeyInfoFormGroup() {
		return new FormGroup<DsaPublicKeyInfoFormProperties>({
			keySize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Dynamic group metadata like queries and status. */
	export interface DynamicGroupMetadata {

		/** Memberships will be the union of all queries. Only one entry with USER resource is currently supported. Customers can create up to 500 dynamic groups. */
		queries?: Array<DynamicGroupQuery>;

		/** The current status of a dynamic group along with timestamp. */
		status?: DynamicGroupStatus;
	}

	/** Dynamic group metadata like queries and status. */
	export interface DynamicGroupMetadataFormProperties {
	}
	export function CreateDynamicGroupMetadataFormGroup() {
		return new FormGroup<DynamicGroupMetadataFormProperties>({
		});

	}


	/** Defines a query on a resource. */
	export interface DynamicGroupQuery {

		/** Query that determines the memberships of the dynamic group. Examples: All users with at least one `organizations.department` of engineering. `user.organizations.exists(org, org.department=='engineering')` All users with at least one location that has `area` of `foo` and `building_id` of `bar`. `user.locations.exists(loc, loc.area=='foo' && loc.building_id=='bar')` All users with any variation of the name John Doe (case-insensitive queries add `equalsIgnoreCase()` to the value being queried). `user.name.value.equalsIgnoreCase('jOhn DoE')` */
		query?: string | null;
		resourceType?: DynamicGroupQueryResourceType | null;
	}

	/** Defines a query on a resource. */
	export interface DynamicGroupQueryFormProperties {

		/** Query that determines the memberships of the dynamic group. Examples: All users with at least one `organizations.department` of engineering. `user.organizations.exists(org, org.department=='engineering')` All users with at least one location that has `area` of `foo` and `building_id` of `bar`. `user.locations.exists(loc, loc.area=='foo' && loc.building_id=='bar')` All users with any variation of the name John Doe (case-insensitive queries add `equalsIgnoreCase()` to the value being queried). `user.name.value.equalsIgnoreCase('jOhn DoE')` */
		query: FormControl<string | null | undefined>,
		resourceType: FormControl<DynamicGroupQueryResourceType | null | undefined>,
	}
	export function CreateDynamicGroupQueryFormGroup() {
		return new FormGroup<DynamicGroupQueryFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<DynamicGroupQueryResourceType | null | undefined>(undefined),
		});

	}

	export enum DynamicGroupQueryResourceType { RESOURCE_TYPE_UNSPECIFIED = 0, USER = 1 }


	/** The current status of a dynamic group along with timestamp. */
	export interface DynamicGroupStatus {

		/** Status of the dynamic group. */
		status?: DynamicGroupStatusStatus | null;

		/** The latest time at which the dynamic group is guaranteed to be in the given status. If status is `UP_TO_DATE`, the latest time at which the dynamic group was confirmed to be up-to-date. If status is `UPDATING_MEMBERSHIPS`, the time at which dynamic group was created. */
		statusTime?: string | null;
	}

	/** The current status of a dynamic group along with timestamp. */
	export interface DynamicGroupStatusFormProperties {

		/** Status of the dynamic group. */
		status: FormControl<DynamicGroupStatusStatus | null | undefined>,

		/** The latest time at which the dynamic group is guaranteed to be in the given status. If status is `UP_TO_DATE`, the latest time at which the dynamic group was confirmed to be up-to-date. If status is `UPDATING_MEMBERSHIPS`, the time at which dynamic group was created. */
		statusTime: FormControl<string | null | undefined>,
	}
	export function CreateDynamicGroupStatusFormGroup() {
		return new FormGroup<DynamicGroupStatusFormProperties>({
			status: new FormControl<DynamicGroupStatusStatus | null | undefined>(undefined),
			statusTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DynamicGroupStatusStatus { STATUS_UNSPECIFIED = 0, UP_TO_DATE = 1, UPDATING_MEMBERSHIPS = 2, INVALID_QUERY = 3 }


	/** A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s. */
	export interface EntityKey {

		/** The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`. */
		id?: string | null;

		/** The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`. */
		namespace?: string | null;
	}

	/** A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s. */
	export interface EntityKeyFormProperties {

		/** The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`. */
		id: FormControl<string | null | undefined>,

		/** The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`. */
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateEntityKeyFormGroup() {
		return new FormGroup<EntityKeyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The `MembershipRole` expiry details. */
	export interface ExpiryDetail {

		/** The time at which the `MembershipRole` will expire. */
		expireTime?: string | null;
	}

	/** The `MembershipRole` expiry details. */
	export interface ExpiryDetailFormProperties {

		/** The time at which the `MembershipRole` will expire. */
		expireTime: FormControl<string | null | undefined>,
	}
	export function CreateExpiryDetailFormGroup() {
		return new FormGroup<ExpiryDetailFormProperties>({
			expireTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for MembershipsService.GetMembershipGraph. */
	export interface GetMembershipGraphResponse {

		/** The membership graph's path information represented as an adjacency list. */
		adjacencyList?: Array<MembershipAdjacencyList>;

		/** The resources representing each group in the adjacency list. Each group in this list can be correlated to a 'group' of the MembershipAdjacencyList using the 'name' of the Group resource. */
		groups?: Array<Group>;
	}

	/** The response message for MembershipsService.GetMembershipGraph. */
	export interface GetMembershipGraphResponseFormProperties {
	}
	export function CreateGetMembershipGraphResponseFormGroup() {
		return new FormGroup<GetMembershipGraphResponseFormProperties>({
		});

	}


	/** Membership graph's path information as an adjacency list. */
	export interface MembershipAdjacencyList {

		/** Each edge contains information about the member that belongs to this group. Note: Fields returned here will help identify the specific Membership resource (e.g name, preferred_member_key and role), but may not be a comprehensive list of all fields. */
		edges?: Array<Membership>;

		/** Resource name of the group that the members belong to. */
		group?: string | null;
	}

	/** Membership graph's path information as an adjacency list. */
	export interface MembershipAdjacencyListFormProperties {

		/** Resource name of the group that the members belong to. */
		group: FormControl<string | null | undefined>,
	}
	export function CreateMembershipAdjacencyListFormGroup() {
		return new FormGroup<MembershipAdjacencyListFormProperties>({
			group: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a "member". */
	export interface Membership {

		/** Output only. The time when the `Membership` was created. */
		createTime?: string | null;

		/** Output only. Delivery setting associated with the membership. */
		deliverySetting?: MembershipDeliverySetting | null;

		/** A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s. */
		memberKey?: EntityKey;

		/** Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership`. Shall be of the form `groups/{group_id}/memberships/{membership_id}`. */
		name?: string | null;

		/** A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s. */
		preferredMemberKey?: EntityKey;

		/** The `MembershipRole`s that apply to the `Membership`. If unspecified, defaults to a single `MembershipRole` with `name` `MEMBER`. Must not contain duplicate `MembershipRole`s with the same `name`. */
		roles?: Array<MembershipRole>;

		/** Output only. The type of the membership. */
		type?: MembershipType | null;

		/** Output only. The time when the `Membership` was last updated. */
		updateTime?: string | null;
	}

	/** A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a "member". */
	export interface MembershipFormProperties {

		/** Output only. The time when the `Membership` was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Delivery setting associated with the membership. */
		deliverySetting: FormControl<MembershipDeliverySetting | null | undefined>,

		/** Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership`. Shall be of the form `groups/{group_id}/memberships/{membership_id}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The type of the membership. */
		type: FormControl<MembershipType | null | undefined>,

		/** Output only. The time when the `Membership` was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateMembershipFormGroup() {
		return new FormGroup<MembershipFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deliverySetting: new FormControl<MembershipDeliverySetting | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<MembershipType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MembershipDeliverySetting { DELIVERY_SETTING_UNSPECIFIED = 0, ALL_MAIL = 1, DIGEST = 2, DAILY = 3, NONE = 4, DISABLED = 5 }


	/** A membership role within the Cloud Identity Groups API. A `MembershipRole` defines the privileges granted to a `Membership`. */
	export interface MembershipRole {

		/** The `MembershipRole` expiry details. */
		expiryDetail?: ExpiryDetail;

		/** The name of the `MembershipRole`. Must be one of `OWNER`, `MANAGER`, `MEMBER`. */
		name?: string | null;

		/** Evaluations of restrictions applied to parent group on this membership. */
		restrictionEvaluations?: RestrictionEvaluations;
	}

	/** A membership role within the Cloud Identity Groups API. A `MembershipRole` defines the privileges granted to a `Membership`. */
	export interface MembershipRoleFormProperties {

		/** The name of the `MembershipRole`. Must be one of `OWNER`, `MANAGER`, `MEMBER`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMembershipRoleFormGroup() {
		return new FormGroup<MembershipRoleFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Evaluations of restrictions applied to parent group on this membership. */
	export interface RestrictionEvaluations {

		/** The evaluated state of this restriction. */
		memberRestrictionEvaluation?: MembershipRoleRestrictionEvaluation;
	}

	/** Evaluations of restrictions applied to parent group on this membership. */
	export interface RestrictionEvaluationsFormProperties {
	}
	export function CreateRestrictionEvaluationsFormGroup() {
		return new FormGroup<RestrictionEvaluationsFormProperties>({
		});

	}


	/** The evaluated state of this restriction. */
	export interface MembershipRoleRestrictionEvaluation {

		/** Output only. The current state of the restriction */
		state?: MembershipRoleRestrictionEvaluationState | null;
	}

	/** The evaluated state of this restriction. */
	export interface MembershipRoleRestrictionEvaluationFormProperties {

		/** Output only. The current state of the restriction */
		state: FormControl<MembershipRoleRestrictionEvaluationState | null | undefined>,
	}
	export function CreateMembershipRoleRestrictionEvaluationFormGroup() {
		return new FormGroup<MembershipRoleRestrictionEvaluationFormProperties>({
			state: new FormControl<MembershipRoleRestrictionEvaluationState | null | undefined>(undefined),
		});

	}

	export enum MembershipRoleRestrictionEvaluationState { STATE_UNSPECIFIED = 0, COMPLIANT = 1, FORWARD_COMPLIANT = 2, NON_COMPLIANT = 3, EVALUATING = 4 }

	export enum MembershipType { TYPE_UNSPECIFIED = 0, USER = 1, SERVICE_ACCOUNT = 2, GROUP = 3, SHARED_DRIVE = 4, OTHER = 5 }


	/** A group within the Cloud Identity Groups API. A `Group` is a collection of entities, where each entity is either a user, another group, or a service account. */
	export interface Group {

		/** Output only. Additional group keys associated with the Group. */
		additionalGroupKeys?: Array<EntityKey>;

		/** Output only. The time when the `Group` was created. */
		createTime?: string | null;

		/** An extended description to help users determine the purpose of a `Group`. Must not be longer than 4,096 characters. */
		description?: string | null;

		/** The display name of the `Group`. */
		displayName?: string | null;

		/** Dynamic group metadata like queries and status. */
		dynamicGroupMetadata?: DynamicGroupMetadata;

		/** A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s. */
		groupKey?: EntityKey;

		/** Required. One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value. Google Groups are the default type of group and have a label with a key of `cloudidentity.googleapis.com/groups.discussion_forum` and an empty value. Existing Google Groups can have an additional label with a key of `cloudidentity.googleapis.com/groups.security` and an empty value added to them. **This is an immutable change and the security label cannot be removed once added.** Dynamic groups have a label with a key of `cloudidentity.googleapis.com/groups.dynamic`. Identity-mapped groups for Cloud Search have a label with a key of `system/groups/external` and an empty value. */
		labels?: {[id: string]: string };

		/** Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`. Shall be of the form `groups/{group_id}`. */
		name?: string | null;

		/** Required. Immutable. The resource name of the entity under which this `Group` resides in the Cloud Identity resource hierarchy. Must be of the form `identitysources/{identity_source}` for external [identity-mapped groups](https://support.google.com/a/answer/9039510) or `customers/{customer_id}` for Google Groups. The `customer_id` must begin with "C" (for example, 'C046psxkn'). [Find your customer ID.] (https://support.google.com/cloudidentity/answer/10070793) */
		parent?: string | null;

		/** Optional. The POSIX groups associated with the `Group`. */
		posixGroups?: Array<PosixGroup>;

		/** Output only. The time when the `Group` was last updated. */
		updateTime?: string | null;
	}

	/** A group within the Cloud Identity Groups API. A `Group` is a collection of entities, where each entity is either a user, another group, or a service account. */
	export interface GroupFormProperties {

		/** Output only. The time when the `Group` was created. */
		createTime: FormControl<string | null | undefined>,

		/** An extended description to help users determine the purpose of a `Group`. Must not be longer than 4,096 characters. */
		description: FormControl<string | null | undefined>,

		/** The display name of the `Group`. */
		displayName: FormControl<string | null | undefined>,

		/** Required. One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value. Google Groups are the default type of group and have a label with a key of `cloudidentity.googleapis.com/groups.discussion_forum` and an empty value. Existing Google Groups can have an additional label with a key of `cloudidentity.googleapis.com/groups.security` and an empty value added to them. **This is an immutable change and the security label cannot be removed once added.** Dynamic groups have a label with a key of `cloudidentity.googleapis.com/groups.dynamic`. Identity-mapped groups for Cloud Search have a label with a key of `system/groups/external` and an empty value. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`. Shall be of the form `groups/{group_id}`. */
		name: FormControl<string | null | undefined>,

		/** Required. Immutable. The resource name of the entity under which this `Group` resides in the Cloud Identity resource hierarchy. Must be of the form `identitysources/{identity_source}` for external [identity-mapped groups](https://support.google.com/a/answer/9039510) or `customers/{customer_id}` for Google Groups. The `customer_id` must begin with "C" (for example, 'C046psxkn'). [Find your customer ID.] (https://support.google.com/cloudidentity/answer/10070793) */
		parent: FormControl<string | null | undefined>,

		/** Output only. The time when the `Group` was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** POSIX Group definition to represent a group in a POSIX compliant system. */
	export interface PosixGroup {

		/** GID of the POSIX group. */
		gid?: string | null;

		/** Name of the POSIX group. */
		name?: string | null;

		/** System identifier for which group name and gid apply to. If not specified it will default to empty value. */
		systemId?: string | null;
	}

	/** POSIX Group definition to represent a group in a POSIX compliant system. */
	export interface PosixGroupFormProperties {

		/** GID of the POSIX group. */
		gid: FormControl<string | null | undefined>,

		/** Name of the POSIX group. */
		name: FormControl<string | null | undefined>,

		/** System identifier for which group name and gid apply to. If not specified it will default to empty value. */
		systemId: FormControl<string | null | undefined>,
	}
	export function CreatePosixGroupFormGroup() {
		return new FormGroup<PosixGroupFormProperties>({
			gid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			systemId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource representing the Android specific attributes of a Device. */
	export interface GoogleAppsCloudidentityDevicesV1AndroidAttributes {

		/** Whether the device passes Android CTS compliance. */
		ctsProfileMatch?: boolean | null;

		/** Whether applications from unknown sources can be installed on device. */
		enabledUnknownSources?: boolean | null;

		/** Whether any potentially harmful apps were detected on the device. */
		hasPotentiallyHarmfulApps?: boolean | null;

		/** Whether this account is on an owner/primary profile. For phones, only true for owner profiles. Android 4+ devices can have secondary or restricted user profiles. */
		ownerProfileAccount?: boolean | null;

		/** Ownership privileges on device. */
		ownershipPrivilege?: AndroidAttributesOwnershipPrivilege | null;

		/** Whether device supports Android work profiles. If false, this service will not block access to corp data even if an administrator turns on the "Enforce Work Profile" policy. */
		supportsWorkProfile?: boolean | null;

		/** Whether Android verified boot status is GREEN. */
		verifiedBoot?: boolean | null;

		/** Whether Google Play Protect Verify Apps is enabled. */
		verifyAppsEnabled?: boolean | null;
	}

	/** Resource representing the Android specific attributes of a Device. */
	export interface GoogleAppsCloudidentityDevicesV1AndroidAttributesFormProperties {

		/** Whether the device passes Android CTS compliance. */
		ctsProfileMatch: FormControl<boolean | null | undefined>,

		/** Whether applications from unknown sources can be installed on device. */
		enabledUnknownSources: FormControl<boolean | null | undefined>,

		/** Whether any potentially harmful apps were detected on the device. */
		hasPotentiallyHarmfulApps: FormControl<boolean | null | undefined>,

		/** Whether this account is on an owner/primary profile. For phones, only true for owner profiles. Android 4+ devices can have secondary or restricted user profiles. */
		ownerProfileAccount: FormControl<boolean | null | undefined>,

		/** Ownership privileges on device. */
		ownershipPrivilege: FormControl<AndroidAttributesOwnershipPrivilege | null | undefined>,

		/** Whether device supports Android work profiles. If false, this service will not block access to corp data even if an administrator turns on the "Enforce Work Profile" policy. */
		supportsWorkProfile: FormControl<boolean | null | undefined>,

		/** Whether Android verified boot status is GREEN. */
		verifiedBoot: FormControl<boolean | null | undefined>,

		/** Whether Google Play Protect Verify Apps is enabled. */
		verifyAppsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsCloudidentityDevicesV1AndroidAttributesFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1AndroidAttributesFormProperties>({
			ctsProfileMatch: new FormControl<boolean | null | undefined>(undefined),
			enabledUnknownSources: new FormControl<boolean | null | undefined>(undefined),
			hasPotentiallyHarmfulApps: new FormControl<boolean | null | undefined>(undefined),
			ownerProfileAccount: new FormControl<boolean | null | undefined>(undefined),
			ownershipPrivilege: new FormControl<AndroidAttributesOwnershipPrivilege | null | undefined>(undefined),
			supportsWorkProfile: new FormControl<boolean | null | undefined>(undefined),
			verifiedBoot: new FormControl<boolean | null | undefined>(undefined),
			verifyAppsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Metadata for ApproveDeviceUser LRO. */
	export interface GoogleAppsCloudidentityDevicesV1ApproveDeviceUserMetadata {
	}

	/** Metadata for ApproveDeviceUser LRO. */
	export interface GoogleAppsCloudidentityDevicesV1ApproveDeviceUserMetadataFormProperties {
	}
	export function CreateGoogleAppsCloudidentityDevicesV1ApproveDeviceUserMetadataFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1ApproveDeviceUserMetadataFormProperties>({
		});

	}


	/** Response message for approving the device to access user data. */
	export interface GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponse {

		/** Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device */
		deviceUser?: GoogleAppsCloudidentityDevicesV1DeviceUser;
	}

	/** Response message for approving the device to access user data. */
	export interface GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponseFormProperties {
	}
	export function CreateGoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponseFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponseFormProperties>({
		});

	}


	/** Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device */
	export interface GoogleAppsCloudidentityDevicesV1DeviceUser {

		/** Compromised State of the DeviceUser object */
		compromisedState?: DeviceUserCompromisedState | null;

		/** When the user first signed in to the device */
		createTime?: string | null;

		/** Output only. Most recent time when user registered with this service. */
		firstSyncTime?: string | null;

		/** Output only. Default locale used on device, in IETF BCP-47 format. */
		languageCode?: string | null;

		/** Output only. Last time when user synced with policies. */
		lastSyncTime?: string | null;

		/** Output only. Management state of the user on the device. */
		managementState?: DeviceUserManagementState | null;

		/** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the DeviceUser in format: `devices/{device}/deviceUsers/{device_user}`, where `device_user` uniquely identifies a user's use of a device. */
		name?: string | null;

		/** Password state of the DeviceUser object */
		passwordState?: DeviceUserPasswordState | null;

		/** Output only. User agent on the device for this specific user */
		userAgent?: string | null;

		/** Email address of the user registered on the device. */
		userEmail?: string | null;
	}

	/** Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device */
	export interface GoogleAppsCloudidentityDevicesV1DeviceUserFormProperties {

		/** Compromised State of the DeviceUser object */
		compromisedState: FormControl<DeviceUserCompromisedState | null | undefined>,

		/** When the user first signed in to the device */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Most recent time when user registered with this service. */
		firstSyncTime: FormControl<string | null | undefined>,

		/** Output only. Default locale used on device, in IETF BCP-47 format. */
		languageCode: FormControl<string | null | undefined>,

		/** Output only. Last time when user synced with policies. */
		lastSyncTime: FormControl<string | null | undefined>,

		/** Output only. Management state of the user on the device. */
		managementState: FormControl<DeviceUserManagementState | null | undefined>,

		/** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the DeviceUser in format: `devices/{device}/deviceUsers/{device_user}`, where `device_user` uniquely identifies a user's use of a device. */
		name: FormControl<string | null | undefined>,

		/** Password state of the DeviceUser object */
		passwordState: FormControl<DeviceUserPasswordState | null | undefined>,

		/** Output only. User agent on the device for this specific user */
		userAgent: FormControl<string | null | undefined>,

		/** Email address of the user registered on the device. */
		userEmail: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsCloudidentityDevicesV1DeviceUserFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1DeviceUserFormProperties>({
			compromisedState: new FormControl<DeviceUserCompromisedState | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			firstSyncTime: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			lastSyncTime: new FormControl<string | null | undefined>(undefined),
			managementState: new FormControl<DeviceUserManagementState | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			passwordState: new FormControl<DeviceUserPasswordState | null | undefined>(undefined),
			userAgent: new FormControl<string | null | undefined>(undefined),
			userEmail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for BlockDeviceUser LRO. */
	export interface GoogleAppsCloudidentityDevicesV1BlockDeviceUserMetadata {
	}

	/** Metadata for BlockDeviceUser LRO. */
	export interface GoogleAppsCloudidentityDevicesV1BlockDeviceUserMetadataFormProperties {
	}
	export function CreateGoogleAppsCloudidentityDevicesV1BlockDeviceUserMetadataFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1BlockDeviceUserMetadataFormProperties>({
		});

	}


	/** Response message for blocking the device from accessing user data. */
	export interface GoogleAppsCloudidentityDevicesV1BlockDeviceUserResponse {

		/** Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device */
		deviceUser?: GoogleAppsCloudidentityDevicesV1DeviceUser;
	}

	/** Response message for blocking the device from accessing user data. */
	export interface GoogleAppsCloudidentityDevicesV1BlockDeviceUserResponseFormProperties {
	}
	export function CreateGoogleAppsCloudidentityDevicesV1BlockDeviceUserResponseFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1BlockDeviceUserResponseFormProperties>({
		});

	}


	/** Metadata for CancelWipeDevice LRO. */
	export interface GoogleAppsCloudidentityDevicesV1CancelWipeDeviceMetadata {
	}

	/** Metadata for CancelWipeDevice LRO. */
	export interface GoogleAppsCloudidentityDevicesV1CancelWipeDeviceMetadataFormProperties {
	}
	export function CreateGoogleAppsCloudidentityDevicesV1CancelWipeDeviceMetadataFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1CancelWipeDeviceMetadataFormProperties>({
		});

	}


	/** Response message for cancelling an unfinished device wipe. */
	export interface GoogleAppsCloudidentityDevicesV1CancelWipeDeviceResponse {

		/** A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user. */
		device?: GoogleAppsCloudidentityDevicesV1Device;
	}

	/** Response message for cancelling an unfinished device wipe. */
	export interface GoogleAppsCloudidentityDevicesV1CancelWipeDeviceResponseFormProperties {
	}
	export function CreateGoogleAppsCloudidentityDevicesV1CancelWipeDeviceResponseFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1CancelWipeDeviceResponseFormProperties>({
		});

	}


	/**  A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user. */
	export interface GoogleAppsCloudidentityDevicesV1Device {

		/** Resource representing the Android specific attributes of a Device. */
		androidSpecificAttributes?: GoogleAppsCloudidentityDevicesV1AndroidAttributes;

		/** Asset tag of the device. */
		assetTag?: string | null;

		/** Output only. Baseband version of the device. */
		basebandVersion?: string | null;

		/** Output only. Device bootloader version. Example: 0.6.7. */
		bootloaderVersion?: string | null;

		/** Output only. Device brand. Example: Samsung. */
		brand?: string | null;

		/** Output only. Build number of the device. */
		buildNumber?: string | null;

		/** Output only. Represents whether the Device is compromised. */
		compromisedState?: DeviceCompromisedState | null;

		/** Output only. When the Company-Owned device was imported. This field is empty for BYOD devices. */
		createTime?: string | null;

		/** Unique identifier for the device. */
		deviceId?: string | null;

		/** Output only. Type of device. */
		deviceType?: DeviceDeviceType | null;

		/** Output only. Whether developer options is enabled on device. */
		enabledDeveloperOptions?: boolean | null;

		/** Output only. Whether USB debugging is enabled on device. */
		enabledUsbDebugging?: boolean | null;

		/** Output only. Device encryption state. */
		encryptionState?: DeviceEncryptionState | null;

		/** Host name of the device. */
		hostname?: string | null;

		/** Output only. IMEI number of device if GSM device; empty otherwise. */
		imei?: string | null;

		/** Output only. Kernel version of the device. */
		kernelVersion?: string | null;

		/** Most recent time when device synced with this service. */
		lastSyncTime?: string | null;

		/** Output only. Management state of the device */
		managementState?: DeviceManagementState | null;

		/** Output only. Device manufacturer. Example: Motorola. */
		manufacturer?: string | null;

		/** Output only. MEID number of device if CDMA device; empty otherwise. */
		meid?: string | null;

		/** Output only. Model name of device. Example: Pixel 3. */
		model?: string | null;

		/** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device}`, where device is the unique id assigned to the Device. */
		name?: string | null;

		/** Output only. Mobile or network operator of device, if available. */
		networkOperator?: string | null;

		/** Output only. OS version of the device. Example: Android 8.1.0. */
		osVersion?: string | null;

		/** Output only. Domain name for Google accounts on device. Type for other accounts on device. On Android, will only be populated if |ownership_privilege| is |PROFILE_OWNER| or |DEVICE_OWNER|. Does not include the account signed in to the device policy app if that account's domain has only one account. Examples: "com.example", "xyz.com". */
		otherAccounts?: Array<string>;

		/** Output only. Whether the device is owned by the company or an individual */
		ownerType?: DeviceOwnerType | null;

		/** Output only. OS release version. Example: 6.0. */
		releaseVersion?: string | null;

		/** Output only. OS security patch update time on device. */
		securityPatchTime?: string | null;

		/** Serial Number of device. Example: HT82V1A01076. */
		serialNumber?: string | null;

		/** WiFi MAC addresses of device. */
		wifiMacAddresses?: Array<string>;
	}

	/**  A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user. */
	export interface GoogleAppsCloudidentityDevicesV1DeviceFormProperties {

		/** Asset tag of the device. */
		assetTag: FormControl<string | null | undefined>,

		/** Output only. Baseband version of the device. */
		basebandVersion: FormControl<string | null | undefined>,

		/** Output only. Device bootloader version. Example: 0.6.7. */
		bootloaderVersion: FormControl<string | null | undefined>,

		/** Output only. Device brand. Example: Samsung. */
		brand: FormControl<string | null | undefined>,

		/** Output only. Build number of the device. */
		buildNumber: FormControl<string | null | undefined>,

		/** Output only. Represents whether the Device is compromised. */
		compromisedState: FormControl<DeviceCompromisedState | null | undefined>,

		/** Output only. When the Company-Owned device was imported. This field is empty for BYOD devices. */
		createTime: FormControl<string | null | undefined>,

		/** Unique identifier for the device. */
		deviceId: FormControl<string | null | undefined>,

		/** Output only. Type of device. */
		deviceType: FormControl<DeviceDeviceType | null | undefined>,

		/** Output only. Whether developer options is enabled on device. */
		enabledDeveloperOptions: FormControl<boolean | null | undefined>,

		/** Output only. Whether USB debugging is enabled on device. */
		enabledUsbDebugging: FormControl<boolean | null | undefined>,

		/** Output only. Device encryption state. */
		encryptionState: FormControl<DeviceEncryptionState | null | undefined>,

		/** Host name of the device. */
		hostname: FormControl<string | null | undefined>,

		/** Output only. IMEI number of device if GSM device; empty otherwise. */
		imei: FormControl<string | null | undefined>,

		/** Output only. Kernel version of the device. */
		kernelVersion: FormControl<string | null | undefined>,

		/** Most recent time when device synced with this service. */
		lastSyncTime: FormControl<string | null | undefined>,

		/** Output only. Management state of the device */
		managementState: FormControl<DeviceManagementState | null | undefined>,

		/** Output only. Device manufacturer. Example: Motorola. */
		manufacturer: FormControl<string | null | undefined>,

		/** Output only. MEID number of device if CDMA device; empty otherwise. */
		meid: FormControl<string | null | undefined>,

		/** Output only. Model name of device. Example: Pixel 3. */
		model: FormControl<string | null | undefined>,

		/** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device}`, where device is the unique id assigned to the Device. */
		name: FormControl<string | null | undefined>,

		/** Output only. Mobile or network operator of device, if available. */
		networkOperator: FormControl<string | null | undefined>,

		/** Output only. OS version of the device. Example: Android 8.1.0. */
		osVersion: FormControl<string | null | undefined>,

		/** Output only. Whether the device is owned by the company or an individual */
		ownerType: FormControl<DeviceOwnerType | null | undefined>,

		/** Output only. OS release version. Example: 6.0. */
		releaseVersion: FormControl<string | null | undefined>,

		/** Output only. OS security patch update time on device. */
		securityPatchTime: FormControl<string | null | undefined>,

		/** Serial Number of device. Example: HT82V1A01076. */
		serialNumber: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsCloudidentityDevicesV1DeviceFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1DeviceFormProperties>({
			assetTag: new FormControl<string | null | undefined>(undefined),
			basebandVersion: new FormControl<string | null | undefined>(undefined),
			bootloaderVersion: new FormControl<string | null | undefined>(undefined),
			brand: new FormControl<string | null | undefined>(undefined),
			buildNumber: new FormControl<string | null | undefined>(undefined),
			compromisedState: new FormControl<DeviceCompromisedState | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deviceId: new FormControl<string | null | undefined>(undefined),
			deviceType: new FormControl<DeviceDeviceType | null | undefined>(undefined),
			enabledDeveloperOptions: new FormControl<boolean | null | undefined>(undefined),
			enabledUsbDebugging: new FormControl<boolean | null | undefined>(undefined),
			encryptionState: new FormControl<DeviceEncryptionState | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			imei: new FormControl<string | null | undefined>(undefined),
			kernelVersion: new FormControl<string | null | undefined>(undefined),
			lastSyncTime: new FormControl<string | null | undefined>(undefined),
			managementState: new FormControl<DeviceManagementState | null | undefined>(undefined),
			manufacturer: new FormControl<string | null | undefined>(undefined),
			meid: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			networkOperator: new FormControl<string | null | undefined>(undefined),
			osVersion: new FormControl<string | null | undefined>(undefined),
			ownerType: new FormControl<DeviceOwnerType | null | undefined>(undefined),
			releaseVersion: new FormControl<string | null | undefined>(undefined),
			securityPatchTime: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for CancelWipeDeviceUser LRO. */
	export interface GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserMetadata {
	}

	/** Metadata for CancelWipeDeviceUser LRO. */
	export interface GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserMetadataFormProperties {
	}
	export function CreateGoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserMetadataFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserMetadataFormProperties>({
		});

	}


	/** Response message for cancelling an unfinished user account wipe. */
	export interface GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponse {

		/** Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device */
		deviceUser?: GoogleAppsCloudidentityDevicesV1DeviceUser;
	}

	/** Response message for cancelling an unfinished user account wipe. */
	export interface GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponseFormProperties {
	}
	export function CreateGoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponseFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponseFormProperties>({
		});

	}


	/** Represents the state associated with an API client calling the Devices API. Resource representing ClientState and supports updates from API users */
	export interface GoogleAppsCloudidentityDevicesV1ClientState {

		/** The caller can specify asset tags for this resource */
		assetTags?: Array<string>;

		/** The compliance state of the resource as specified by the API client. */
		complianceState?: ClientStateComplianceState | null;

		/** Output only. The time the client state data was created. */
		createTime?: string | null;

		/** This field may be used to store a unique identifier for the API resource within which these CustomAttributes are a field. */
		customId?: string | null;

		/** The token that needs to be passed back for concurrency control in updates. Token needs to be passed back in UpdateRequest */
		etag?: string | null;

		/** The Health score of the resource. The Health score is the callers specification of the condition of the device from a usability point of view. For example, a third-party device management provider may specify a health score based on its compliance with organizational policies. */
		healthScore?: ClientStateHealthScore | null;

		/** The map of key-value attributes stored by callers specific to a device. The total serialized length of this map may not exceed 10KB. No limit is placed on the number of attributes in a map. */
		keyValuePairs?: {[id: string]: GoogleAppsCloudidentityDevicesV1CustomAttributeValue };

		/** Output only. The time the client state data was last updated. */
		lastUpdateTime?: string | null;

		/** The management state of the resource as specified by the API client. */
		managed?: ClientStateManaged | null;

		/** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device}/deviceUsers/{device_user}/clientState/{partner}`, where partner corresponds to the partner storing the data. For partners belonging to the "BeyondCorp Alliance", this is the partner ID specified to you by Google. For all other callers, this is a string of the form: `{customer}-suffix`, where `customer` is your customer ID. The *suffix* is any string the caller specifies. This string will be displayed verbatim in the administration console. This suffix is used in setting up Custom Access Levels in Context-Aware Access. Your organization's customer ID can be obtained from the URL: `GET https://www.googleapis.com/admin/directory/v1/customers/my_customer` The `id` field in the response contains the customer ID starting with the letter 'C'. The customer ID to be used in this API is the string after the letter 'C' (not including 'C') */
		name?: string | null;

		/** Output only. The owner of the ClientState */
		ownerType?: ClientStateOwnerType | null;

		/** A descriptive cause of the health score. */
		scoreReason?: string | null;
	}

	/** Represents the state associated with an API client calling the Devices API. Resource representing ClientState and supports updates from API users */
	export interface GoogleAppsCloudidentityDevicesV1ClientStateFormProperties {

		/** The compliance state of the resource as specified by the API client. */
		complianceState: FormControl<ClientStateComplianceState | null | undefined>,

		/** Output only. The time the client state data was created. */
		createTime: FormControl<string | null | undefined>,

		/** This field may be used to store a unique identifier for the API resource within which these CustomAttributes are a field. */
		customId: FormControl<string | null | undefined>,

		/** The token that needs to be passed back for concurrency control in updates. Token needs to be passed back in UpdateRequest */
		etag: FormControl<string | null | undefined>,

		/** The Health score of the resource. The Health score is the callers specification of the condition of the device from a usability point of view. For example, a third-party device management provider may specify a health score based on its compliance with organizational policies. */
		healthScore: FormControl<ClientStateHealthScore | null | undefined>,

		/** The map of key-value attributes stored by callers specific to a device. The total serialized length of this map may not exceed 10KB. No limit is placed on the number of attributes in a map. */
		keyValuePairs: FormControl<{[id: string]: GoogleAppsCloudidentityDevicesV1CustomAttributeValue } | null | undefined>,

		/** Output only. The time the client state data was last updated. */
		lastUpdateTime: FormControl<string | null | undefined>,

		/** The management state of the resource as specified by the API client. */
		managed: FormControl<ClientStateManaged | null | undefined>,

		/** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device}/deviceUsers/{device_user}/clientState/{partner}`, where partner corresponds to the partner storing the data. For partners belonging to the "BeyondCorp Alliance", this is the partner ID specified to you by Google. For all other callers, this is a string of the form: `{customer}-suffix`, where `customer` is your customer ID. The *suffix* is any string the caller specifies. This string will be displayed verbatim in the administration console. This suffix is used in setting up Custom Access Levels in Context-Aware Access. Your organization's customer ID can be obtained from the URL: `GET https://www.googleapis.com/admin/directory/v1/customers/my_customer` The `id` field in the response contains the customer ID starting with the letter 'C'. The customer ID to be used in this API is the string after the letter 'C' (not including 'C') */
		name: FormControl<string | null | undefined>,

		/** Output only. The owner of the ClientState */
		ownerType: FormControl<ClientStateOwnerType | null | undefined>,

		/** A descriptive cause of the health score. */
		scoreReason: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsCloudidentityDevicesV1ClientStateFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1ClientStateFormProperties>({
			complianceState: new FormControl<ClientStateComplianceState | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			customId: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			healthScore: new FormControl<ClientStateHealthScore | null | undefined>(undefined),
			keyValuePairs: new FormControl<{[id: string]: GoogleAppsCloudidentityDevicesV1CustomAttributeValue } | null | undefined>(undefined),
			lastUpdateTime: new FormControl<string | null | undefined>(undefined),
			managed: new FormControl<ClientStateManaged | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ownerType: new FormControl<ClientStateOwnerType | null | undefined>(undefined),
			scoreReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional custom attribute values may be one of these types */
	export interface GoogleAppsCloudidentityDevicesV1CustomAttributeValue {

		/** Represents a boolean value. */
		boolValue?: boolean | null;

		/** Represents a double value. */
		numberValue?: number | null;

		/** Represents a string value. */
		stringValue?: string | null;
	}

	/** Additional custom attribute values may be one of these types */
	export interface GoogleAppsCloudidentityDevicesV1CustomAttributeValueFormProperties {

		/** Represents a boolean value. */
		boolValue: FormControl<boolean | null | undefined>,

		/** Represents a double value. */
		numberValue: FormControl<number | null | undefined>,

		/** Represents a string value. */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsCloudidentityDevicesV1CustomAttributeValueFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1CustomAttributeValueFormProperties>({
			boolValue: new FormControl<boolean | null | undefined>(undefined),
			numberValue: new FormControl<number | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for CreateDevice LRO. */
	export interface GoogleAppsCloudidentityDevicesV1CreateDeviceMetadata {
	}

	/** Metadata for CreateDevice LRO. */
	export interface GoogleAppsCloudidentityDevicesV1CreateDeviceMetadataFormProperties {
	}
	export function CreateGoogleAppsCloudidentityDevicesV1CreateDeviceMetadataFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1CreateDeviceMetadataFormProperties>({
		});

	}


	/** Metadata for DeleteDevice LRO. */
	export interface GoogleAppsCloudidentityDevicesV1DeleteDeviceMetadata {
	}

	/** Metadata for DeleteDevice LRO. */
	export interface GoogleAppsCloudidentityDevicesV1DeleteDeviceMetadataFormProperties {
	}
	export function CreateGoogleAppsCloudidentityDevicesV1DeleteDeviceMetadataFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1DeleteDeviceMetadataFormProperties>({
		});

	}


	/** Metadata for DeleteDeviceUser LRO. */
	export interface GoogleAppsCloudidentityDevicesV1DeleteDeviceUserMetadata {
	}

	/** Metadata for DeleteDeviceUser LRO. */
	export interface GoogleAppsCloudidentityDevicesV1DeleteDeviceUserMetadataFormProperties {
	}
	export function CreateGoogleAppsCloudidentityDevicesV1DeleteDeviceUserMetadataFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1DeleteDeviceUserMetadataFormProperties>({
		});

	}


	/** Metadata for ListEndpointApps LRO. */
	export interface GoogleAppsCloudidentityDevicesV1ListEndpointAppsMetadata {
	}

	/** Metadata for ListEndpointApps LRO. */
	export interface GoogleAppsCloudidentityDevicesV1ListEndpointAppsMetadataFormProperties {
	}
	export function CreateGoogleAppsCloudidentityDevicesV1ListEndpointAppsMetadataFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1ListEndpointAppsMetadataFormProperties>({
		});

	}


	/** Metadata for SignoutDeviceUser LRO. */
	export interface GoogleAppsCloudidentityDevicesV1SignoutDeviceUserMetadata {
	}

	/** Metadata for SignoutDeviceUser LRO. */
	export interface GoogleAppsCloudidentityDevicesV1SignoutDeviceUserMetadataFormProperties {
	}
	export function CreateGoogleAppsCloudidentityDevicesV1SignoutDeviceUserMetadataFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1SignoutDeviceUserMetadataFormProperties>({
		});

	}


	/** Metadata for UpdateClientState LRO. */
	export interface GoogleAppsCloudidentityDevicesV1UpdateClientStateMetadata {
	}

	/** Metadata for UpdateClientState LRO. */
	export interface GoogleAppsCloudidentityDevicesV1UpdateClientStateMetadataFormProperties {
	}
	export function CreateGoogleAppsCloudidentityDevicesV1UpdateClientStateMetadataFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1UpdateClientStateMetadataFormProperties>({
		});

	}


	/** Metadata for UpdateDevice LRO. */
	export interface GoogleAppsCloudidentityDevicesV1UpdateDeviceMetadata {
	}

	/** Metadata for UpdateDevice LRO. */
	export interface GoogleAppsCloudidentityDevicesV1UpdateDeviceMetadataFormProperties {
	}
	export function CreateGoogleAppsCloudidentityDevicesV1UpdateDeviceMetadataFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1UpdateDeviceMetadataFormProperties>({
		});

	}


	/** Metadata for WipeDevice LRO. */
	export interface GoogleAppsCloudidentityDevicesV1WipeDeviceMetadata {
	}

	/** Metadata for WipeDevice LRO. */
	export interface GoogleAppsCloudidentityDevicesV1WipeDeviceMetadataFormProperties {
	}
	export function CreateGoogleAppsCloudidentityDevicesV1WipeDeviceMetadataFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1WipeDeviceMetadataFormProperties>({
		});

	}


	/** Response message for wiping all data on the device. */
	export interface GoogleAppsCloudidentityDevicesV1WipeDeviceResponse {

		/** A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user. */
		device?: GoogleAppsCloudidentityDevicesV1Device;
	}

	/** Response message for wiping all data on the device. */
	export interface GoogleAppsCloudidentityDevicesV1WipeDeviceResponseFormProperties {
	}
	export function CreateGoogleAppsCloudidentityDevicesV1WipeDeviceResponseFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1WipeDeviceResponseFormProperties>({
		});

	}


	/** Metadata for WipeDeviceUser LRO. */
	export interface GoogleAppsCloudidentityDevicesV1WipeDeviceUserMetadata {
	}

	/** Metadata for WipeDeviceUser LRO. */
	export interface GoogleAppsCloudidentityDevicesV1WipeDeviceUserMetadataFormProperties {
	}
	export function CreateGoogleAppsCloudidentityDevicesV1WipeDeviceUserMetadataFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1WipeDeviceUserMetadataFormProperties>({
		});

	}


	/** Response message for wiping the user's account from the device. */
	export interface GoogleAppsCloudidentityDevicesV1WipeDeviceUserResponse {

		/** Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device */
		deviceUser?: GoogleAppsCloudidentityDevicesV1DeviceUser;
	}

	/** Response message for wiping the user's account from the device. */
	export interface GoogleAppsCloudidentityDevicesV1WipeDeviceUserResponseFormProperties {
	}
	export function CreateGoogleAppsCloudidentityDevicesV1WipeDeviceUserResponseFormGroup() {
		return new FormGroup<GoogleAppsCloudidentityDevicesV1WipeDeviceUserResponseFormProperties>({
		});

	}


	/** Message representing a transitive group of a user or a group. */
	export interface GroupRelation {

		/** Display name for this group. */
		displayName?: string | null;

		/** Resource name for this group. */
		group?: string | null;

		/** A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s. */
		groupKey?: EntityKey;

		/** Labels for Group resource. */
		labels?: {[id: string]: string };

		/** The relation between the member and the transitive group. */
		relationType?: GroupRelationRelationType | null;

		/** Membership roles of the member for the group. */
		roles?: Array<TransitiveMembershipRole>;
	}

	/** Message representing a transitive group of a user or a group. */
	export interface GroupRelationFormProperties {

		/** Display name for this group. */
		displayName: FormControl<string | null | undefined>,

		/** Resource name for this group. */
		group: FormControl<string | null | undefined>,

		/** Labels for Group resource. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The relation between the member and the transitive group. */
		relationType: FormControl<GroupRelationRelationType | null | undefined>,
	}
	export function CreateGroupRelationFormGroup() {
		return new FormGroup<GroupRelationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			relationType: new FormControl<GroupRelationRelationType | null | undefined>(undefined),
		});

	}

	export enum GroupRelationRelationType { RELATION_TYPE_UNSPECIFIED = 0, DIRECT = 1, INDIRECT = 2, DIRECT_AND_INDIRECT = 3 }


	/** Message representing the role of a TransitiveMembership. */
	export interface TransitiveMembershipRole {

		/** TransitiveMembershipRole in string format. Currently supported TransitiveMembershipRoles: `"MEMBER"`, `"OWNER"`, and `"MANAGER"`. */
		role?: string | null;
	}

	/** Message representing the role of a TransitiveMembership. */
	export interface TransitiveMembershipRoleFormProperties {

		/** TransitiveMembershipRole in string format. Currently supported TransitiveMembershipRoles: `"MEMBER"`, `"OWNER"`, and `"MANAGER"`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateTransitiveMembershipRoleFormGroup() {
		return new FormGroup<TransitiveMembershipRoleFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Credential for verifying signatures produced by the Identity Provider. */
	export interface IdpCredential {

		/** Information of a DSA public key. */
		dsaKeyInfo?: DsaPublicKeyInfo;

		/** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the credential. */
		name?: string | null;

		/** Information of a RSA public key. */
		rsaKeyInfo?: RsaPublicKeyInfo;

		/** Output only. Time when the `IdpCredential` was last updated. */
		updateTime?: string | null;
	}

	/** Credential for verifying signatures produced by the Identity Provider. */
	export interface IdpCredentialFormProperties {

		/** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the credential. */
		name: FormControl<string | null | undefined>,

		/** Output only. Time when the `IdpCredential` was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateIdpCredentialFormGroup() {
		return new FormGroup<IdpCredentialFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information of a RSA public key. */
	export interface RsaPublicKeyInfo {

		/** Key size in bits (size of the modulus). */
		keySize?: number | null;
	}

	/** Information of a RSA public key. */
	export interface RsaPublicKeyInfoFormProperties {

		/** Key size in bits (size of the modulus). */
		keySize: FormControl<number | null | undefined>,
	}
	export function CreateRsaPublicKeyInfoFormGroup() {
		return new FormGroup<RsaPublicKeyInfoFormProperties>({
			keySize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A [SAML 2.0](https://www.oasis-open.org/standards#samlv2.0) federation between a Google enterprise customer and a SAML identity provider. */
	export interface InboundSamlSsoProfile {

		/** Immutable. The customer. For example: `customers/C0123abc`. */
		customer?: string | null;

		/** Human-readable name of the SAML SSO profile. */
		displayName?: string | null;

		/** SAML IDP (identity provider) configuration. */
		idpConfig?: SamlIdpConfig;

		/** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the SAML SSO profile. */
		name?: string | null;

		/** SAML SP (service provider) configuration. */
		spConfig?: SamlSpConfig;
	}

	/** A [SAML 2.0](https://www.oasis-open.org/standards#samlv2.0) federation between a Google enterprise customer and a SAML identity provider. */
	export interface InboundSamlSsoProfileFormProperties {

		/** Immutable. The customer. For example: `customers/C0123abc`. */
		customer: FormControl<string | null | undefined>,

		/** Human-readable name of the SAML SSO profile. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the SAML SSO profile. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateInboundSamlSsoProfileFormGroup() {
		return new FormGroup<InboundSamlSsoProfileFormProperties>({
			customer: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SAML IDP (identity provider) configuration. */
	export interface SamlIdpConfig {

		/** The **Change Password URL** of the identity provider. Users will be sent to this URL when changing their passwords at `myaccount.google.com`. This takes precedence over the change password URL configured at customer-level. Must use `HTTPS`. */
		changePasswordUri?: string | null;

		/** Required. The SAML **Entity ID** of the identity provider. */
		entityId?: string | null;

		/** The **Logout Redirect URL** (sign-out page URL) of the identity provider. When a user clicks the sign-out link on a Google page, they will be redirected to this URL. This is a pure redirect with no attached SAML `LogoutRequest` i.e. SAML single logout is not supported. Must use `HTTPS`. */
		logoutRedirectUri?: string | null;

		/** Required. The `SingleSignOnService` endpoint location (sign-in page URL) of the identity provider. This is the URL where the `AuthnRequest` will be sent. Must use `HTTPS`. Assumed to accept the `HTTP-Redirect` binding. */
		singleSignOnServiceUri?: string | null;
	}

	/** SAML IDP (identity provider) configuration. */
	export interface SamlIdpConfigFormProperties {

		/** The **Change Password URL** of the identity provider. Users will be sent to this URL when changing their passwords at `myaccount.google.com`. This takes precedence over the change password URL configured at customer-level. Must use `HTTPS`. */
		changePasswordUri: FormControl<string | null | undefined>,

		/** Required. The SAML **Entity ID** of the identity provider. */
		entityId: FormControl<string | null | undefined>,

		/** The **Logout Redirect URL** (sign-out page URL) of the identity provider. When a user clicks the sign-out link on a Google page, they will be redirected to this URL. This is a pure redirect with no attached SAML `LogoutRequest` i.e. SAML single logout is not supported. Must use `HTTPS`. */
		logoutRedirectUri: FormControl<string | null | undefined>,

		/** Required. The `SingleSignOnService` endpoint location (sign-in page URL) of the identity provider. This is the URL where the `AuthnRequest` will be sent. Must use `HTTPS`. Assumed to accept the `HTTP-Redirect` binding. */
		singleSignOnServiceUri: FormControl<string | null | undefined>,
	}
	export function CreateSamlIdpConfigFormGroup() {
		return new FormGroup<SamlIdpConfigFormProperties>({
			changePasswordUri: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
			logoutRedirectUri: new FormControl<string | null | undefined>(undefined),
			singleSignOnServiceUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SAML SP (service provider) configuration. */
	export interface SamlSpConfig {

		/** Output only. The SAML **Assertion Consumer Service (ACS) URL** to be used for the IDP-initiated login. Assumed to accept response messages via the `HTTP-POST` binding. */
		assertionConsumerServiceUri?: string | null;

		/** Output only. The SAML **Entity ID** for this service provider. */
		entityId?: string | null;
	}

	/** SAML SP (service provider) configuration. */
	export interface SamlSpConfigFormProperties {

		/** Output only. The SAML **Assertion Consumer Service (ACS) URL** to be used for the IDP-initiated login. Assumed to accept response messages via the `HTTP-POST` binding. */
		assertionConsumerServiceUri: FormControl<string | null | undefined>,

		/** Output only. The SAML **Entity ID** for this service provider. */
		entityId: FormControl<string | null | undefined>,
	}
	export function CreateSamlSpConfigFormGroup() {
		return new FormGroup<SamlSpConfigFormProperties>({
			assertionConsumerServiceUri: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Targets with "set" SSO assignments and their respective assignments. */
	export interface InboundSsoAssignment {

		/** Immutable. The customer. For example: `customers/C0123abc`. */
		customer?: string | null;

		/** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Inbound SSO Assignment. */
		name?: string | null;

		/** Must be zero (which is the default value so it can be omitted) for assignments with `target_org_unit` set and must be greater-than-or-equal-to one for assignments with `target_group` set. */
		rank?: number | null;

		/** Details that are applicable when `sso_mode` == `SAML_SSO`. */
		samlSsoInfo?: SamlSsoInfo;

		/** Controls sign-in behavior. */
		signInBehavior?: SignInBehavior;

		/** Inbound SSO behavior. */
		ssoMode?: InboundSsoAssignmentSsoMode | null;

		/** Immutable. Must be of the form `groups/{group}`. */
		targetGroup?: string | null;

		/** Immutable. Must be of the form `orgUnits/{org_unit}`. */
		targetOrgUnit?: string | null;
	}

	/** Targets with "set" SSO assignments and their respective assignments. */
	export interface InboundSsoAssignmentFormProperties {

		/** Immutable. The customer. For example: `customers/C0123abc`. */
		customer: FormControl<string | null | undefined>,

		/** Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Inbound SSO Assignment. */
		name: FormControl<string | null | undefined>,

		/** Must be zero (which is the default value so it can be omitted) for assignments with `target_org_unit` set and must be greater-than-or-equal-to one for assignments with `target_group` set. */
		rank: FormControl<number | null | undefined>,

		/** Inbound SSO behavior. */
		ssoMode: FormControl<InboundSsoAssignmentSsoMode | null | undefined>,

		/** Immutable. Must be of the form `groups/{group}`. */
		targetGroup: FormControl<string | null | undefined>,

		/** Immutable. Must be of the form `orgUnits/{org_unit}`. */
		targetOrgUnit: FormControl<string | null | undefined>,
	}
	export function CreateInboundSsoAssignmentFormGroup() {
		return new FormGroup<InboundSsoAssignmentFormProperties>({
			customer: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
			ssoMode: new FormControl<InboundSsoAssignmentSsoMode | null | undefined>(undefined),
			targetGroup: new FormControl<string | null | undefined>(undefined),
			targetOrgUnit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details that are applicable when `sso_mode` == `SAML_SSO`. */
	export interface SamlSsoInfo {

		/** Required. Name of the `InboundSamlSsoProfile` to use. Must be of the form `inboundSamlSsoProfiles/{inbound_saml_sso_profile}`. */
		inboundSamlSsoProfile?: string | null;
	}

	/** Details that are applicable when `sso_mode` == `SAML_SSO`. */
	export interface SamlSsoInfoFormProperties {

		/** Required. Name of the `InboundSamlSsoProfile` to use. Must be of the form `inboundSamlSsoProfiles/{inbound_saml_sso_profile}`. */
		inboundSamlSsoProfile: FormControl<string | null | undefined>,
	}
	export function CreateSamlSsoInfoFormGroup() {
		return new FormGroup<SamlSsoInfoFormProperties>({
			inboundSamlSsoProfile: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Controls sign-in behavior. */
	export interface SignInBehavior {

		/** When to redirect sign-ins to the IdP. */
		redirectCondition?: SignInBehaviorRedirectCondition | null;
	}

	/** Controls sign-in behavior. */
	export interface SignInBehaviorFormProperties {

		/** When to redirect sign-ins to the IdP. */
		redirectCondition: FormControl<SignInBehaviorRedirectCondition | null | undefined>,
	}
	export function CreateSignInBehaviorFormGroup() {
		return new FormGroup<SignInBehaviorFormProperties>({
			redirectCondition: new FormControl<SignInBehaviorRedirectCondition | null | undefined>(undefined),
		});

	}

	export enum SignInBehaviorRedirectCondition { REDIRECT_CONDITION_UNSPECIFIED = 0, NEVER = 1 }

	export enum InboundSsoAssignmentSsoMode { SSO_MODE_UNSPECIFIED = 0, SSO_OFF = 1, SAML_SSO = 2, DOMAIN_WIDE_SAML_IF_ENABLED = 3 }


	/** Response for IsInvitableUser RPC. */
	export interface IsInvitableUserResponse {

		/** Returns true if the email address is invitable. */
		isInvitableUser?: boolean | null;
	}

	/** Response for IsInvitableUser RPC. */
	export interface IsInvitableUserResponseFormProperties {

		/** Returns true if the email address is invitable. */
		isInvitableUser: FormControl<boolean | null | undefined>,
	}
	export function CreateIsInvitableUserResponseFormGroup() {
		return new FormGroup<IsInvitableUserResponseFormProperties>({
			isInvitableUser: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response message that is returned in LRO result of ListClientStates Operation. */
	export interface ListClientStatesResponse {

		/** Client states meeting the list restrictions. */
		clientStates?: Array<ClientState>;

		/** Token to retrieve the next page of results. Empty if there are no more results. */
		nextPageToken?: string | null;
	}

	/** Response message that is returned in LRO result of ListClientStates Operation. */
	export interface ListClientStatesResponseFormProperties {

		/** Token to retrieve the next page of results. Empty if there are no more results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListClientStatesResponseFormGroup() {
		return new FormGroup<ListClientStatesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message that is returned from the ListDeviceUsers method. */
	export interface ListDeviceUsersResponse {

		/** Devices meeting the list restrictions. */
		deviceUsers?: Array<DeviceUser>;

		/** Token to retrieve the next page of results. Empty if there are no more results. */
		nextPageToken?: string | null;
	}

	/** Response message that is returned from the ListDeviceUsers method. */
	export interface ListDeviceUsersResponseFormProperties {

		/** Token to retrieve the next page of results. Empty if there are no more results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeviceUsersResponseFormGroup() {
		return new FormGroup<ListDeviceUsersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message that is returned from the ListDevices method. */
	export interface ListDevicesResponse {

		/** Devices meeting the list restrictions. */
		devices?: Array<Device>;

		/** Token to retrieve the next page of results. Empty if there are no more results. */
		nextPageToken?: string | null;
	}

	/** Response message that is returned from the ListDevices method. */
	export interface ListDevicesResponseFormProperties {

		/** Token to retrieve the next page of results. Empty if there are no more results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevicesResponseFormGroup() {
		return new FormGroup<ListDevicesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for GroupsService.ListGroups. */
	export interface ListGroupsResponse {

		/** The `Group` resources under the specified `parent`. */
		groups?: Array<Group>;

		/** A continuation token to retrieve the next page of results, or empty if there are no more results available. */
		nextPageToken?: string | null;
	}

	/** The response message for GroupsService.ListGroups. */
	export interface ListGroupsResponseFormProperties {

		/** A continuation token to retrieve the next page of results, or empty if there are no more results available. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupsResponseFormGroup() {
		return new FormGroup<ListGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the InboundSamlSsoProfilesService.ListIdpCredentials method. */
	export interface ListIdpCredentialsResponse {

		/** The IdpCredentials from the specified InboundSamlSsoProfile. */
		idpCredentials?: Array<IdpCredential>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response of the InboundSamlSsoProfilesService.ListIdpCredentials method. */
	export interface ListIdpCredentialsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdpCredentialsResponseFormGroup() {
		return new FormGroup<ListIdpCredentialsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the InboundSamlSsoProfilesService.ListInboundSamlSsoProfiles method. */
	export interface ListInboundSamlSsoProfilesResponse {

		/** List of InboundSamlSsoProfiles. */
		inboundSamlSsoProfiles?: Array<InboundSamlSsoProfile>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response of the InboundSamlSsoProfilesService.ListInboundSamlSsoProfiles method. */
	export interface ListInboundSamlSsoProfilesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListInboundSamlSsoProfilesResponseFormGroup() {
		return new FormGroup<ListInboundSamlSsoProfilesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the InboundSsoAssignmentsService.ListInboundSsoAssignments method. */
	export interface ListInboundSsoAssignmentsResponse {

		/** The assignments. */
		inboundSsoAssignments?: Array<InboundSsoAssignment>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response of the InboundSsoAssignmentsService.ListInboundSsoAssignments method. */
	export interface ListInboundSsoAssignmentsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListInboundSsoAssignmentsResponseFormGroup() {
		return new FormGroup<ListInboundSsoAssignmentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for MembershipsService.ListMemberships. */
	export interface ListMembershipsResponse {

		/** The `Membership`s under the specified `parent`. */
		memberships?: Array<Membership>;

		/** A continuation token to retrieve the next page of results, or empty if there are no more results available. */
		nextPageToken?: string | null;
	}

	/** The response message for MembershipsService.ListMemberships. */
	export interface ListMembershipsResponseFormProperties {

		/** A continuation token to retrieve the next page of results, or empty if there are no more results available. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListMembershipsResponseFormGroup() {
		return new FormGroup<ListMembershipsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for OrgMembershipsService.ListOrgMemberships. */
	export interface ListOrgMembershipsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The non-vacuous membership in an orgUnit. */
		orgMemberships?: Array<OrgMembership>;
	}

	/** The response message for OrgMembershipsService.ListOrgMemberships. */
	export interface ListOrgMembershipsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrgMembershipsResponseFormGroup() {
		return new FormGroup<ListOrgMembershipsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A membership in an OrgUnit. An `OrgMembership` defines a relationship between an `OrgUnit` and an entity belonging to that `OrgUnit`, referred to as a "member". */
	export interface OrgMembership {

		/** Immutable. Org member id as full resource name. Format for shared drive resource: //drive.googleapis.com/drives/{$memberId} where `$memberId` is the `id` from [Drive API (V3) `Drive` resource](https://developers.google.com/drive/api/v3/reference/drives#resource). */
		member?: string | null;

		/** Uri with which you can read the member. This follows https://aip.dev/122 Format for shared drive resource: https://drive.googleapis.com/drive/v3/drives/{$memberId} where `$memberId` is the `id` from [Drive API (V3) `Drive` resource](https://developers.google.com/drive/api/v3/reference/drives#resource). */
		memberUri?: string | null;

		/** Required. Immutable. The [resource name](https://cloud.google.com/apis/design/resource_names) of the OrgMembership. Format: orgUnits/{$orgUnitId}/memberships/{$membership} The `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits). The `$membership` shall be of the form `{$entityType};{$memberId}`, where `$entityType` is the enum value of [OrgMembership.EntityType], and `memberId` is the `id` from [Drive API (V3) `Drive` resource](https://developers.google.com/drive/api/v3/reference/drives#resource) for OrgMembership.EntityType.SHARED_DRIVE. */
		name?: string | null;

		/** Immutable. Entity type for the org member. */
		type?: OrgMembershipType | null;
	}

	/** A membership in an OrgUnit. An `OrgMembership` defines a relationship between an `OrgUnit` and an entity belonging to that `OrgUnit`, referred to as a "member". */
	export interface OrgMembershipFormProperties {

		/** Immutable. Org member id as full resource name. Format for shared drive resource: //drive.googleapis.com/drives/{$memberId} where `$memberId` is the `id` from [Drive API (V3) `Drive` resource](https://developers.google.com/drive/api/v3/reference/drives#resource). */
		member: FormControl<string | null | undefined>,

		/** Uri with which you can read the member. This follows https://aip.dev/122 Format for shared drive resource: https://drive.googleapis.com/drive/v3/drives/{$memberId} where `$memberId` is the `id` from [Drive API (V3) `Drive` resource](https://developers.google.com/drive/api/v3/reference/drives#resource). */
		memberUri: FormControl<string | null | undefined>,

		/** Required. Immutable. The [resource name](https://cloud.google.com/apis/design/resource_names) of the OrgMembership. Format: orgUnits/{$orgUnitId}/memberships/{$membership} The `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits). The `$membership` shall be of the form `{$entityType};{$memberId}`, where `$entityType` is the enum value of [OrgMembership.EntityType], and `memberId` is the `id` from [Drive API (V3) `Drive` resource](https://developers.google.com/drive/api/v3/reference/drives#resource) for OrgMembership.EntityType.SHARED_DRIVE. */
		name: FormControl<string | null | undefined>,

		/** Immutable. Entity type for the org member. */
		type: FormControl<OrgMembershipType | null | undefined>,
	}
	export function CreateOrgMembershipFormGroup() {
		return new FormGroup<OrgMembershipFormProperties>({
			member: new FormControl<string | null | undefined>(undefined),
			memberUri: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<OrgMembershipType | null | undefined>(undefined),
		});

	}

	export enum OrgMembershipType { ENTITY_TYPE_UNSPECIFIED = 0, SHARED_DRIVE = 1 }


	/** Response message for UserInvitation listing request. */
	export interface ListUserInvitationsResponse {

		/** The token for the next page. If not empty, indicates that there may be more `UserInvitation` resources that match the listing request; this value can be used in a subsequent ListUserInvitationsRequest to get continued results with the current list call. */
		nextPageToken?: string | null;

		/** The list of UserInvitation resources. */
		userInvitations?: Array<UserInvitation>;
	}

	/** Response message for UserInvitation listing request. */
	export interface ListUserInvitationsResponseFormProperties {

		/** The token for the next page. If not empty, indicates that there may be more `UserInvitation` resources that match the listing request; this value can be used in a subsequent ListUserInvitationsRequest to get continued results with the current list call. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserInvitationsResponseFormGroup() {
		return new FormGroup<ListUserInvitationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The `UserInvitation` resource represents an email that can be sent to an unmanaged user account inviting them to join the customer's Google Workspace or Cloud Identity account. An unmanaged account shares an email address domain with the Google Workspace or Cloud Identity account but is not managed by it yet. If the user accepts the `UserInvitation`, the user account will become managed. */
	export interface UserInvitation {

		/** Number of invitation emails sent to the user. */
		mailsSentCount?: string | null;

		/** Shall be of the form `customers/{customer}/userinvitations/{user_email_address}`. */
		name?: string | null;

		/** State of the `UserInvitation`. */
		state?: UserInvitationState | null;

		/** Time when the `UserInvitation` was last updated. */
		updateTime?: string | null;
	}

	/** The `UserInvitation` resource represents an email that can be sent to an unmanaged user account inviting them to join the customer's Google Workspace or Cloud Identity account. An unmanaged account shares an email address domain with the Google Workspace or Cloud Identity account but is not managed by it yet. If the user accepts the `UserInvitation`, the user account will become managed. */
	export interface UserInvitationFormProperties {

		/** Number of invitation emails sent to the user. */
		mailsSentCount: FormControl<string | null | undefined>,

		/** Shall be of the form `customers/{customer}/userinvitations/{user_email_address}`. */
		name: FormControl<string | null | undefined>,

		/** State of the `UserInvitation`. */
		state: FormControl<UserInvitationState | null | undefined>,

		/** Time when the `UserInvitation` was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateUserInvitationFormGroup() {
		return new FormGroup<UserInvitationFormProperties>({
			mailsSentCount: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<UserInvitationState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserInvitationState { STATE_UNSPECIFIED = 0, NOT_YET_SENT = 1, INVITED = 2, ACCEPTED = 3, DECLINED = 4 }


	/** The response message for GroupsService.LookupGroupName. */
	export interface LookupGroupNameResponse {

		/** Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the looked-up `Group`. */
		name?: string | null;
	}

	/** The response message for GroupsService.LookupGroupName. */
	export interface LookupGroupNameResponseFormProperties {

		/** Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the looked-up `Group`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLookupGroupNameResponseFormGroup() {
		return new FormGroup<LookupGroupNameResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for MembershipsService.LookupMembershipName. */
	export interface LookupMembershipNameResponse {

		/** The [resource name](https://cloud.google.com/apis/design/resource_names) of the looked-up `Membership`. Must be of the form `groups/{group_id}/memberships/{membership_id}`. */
		name?: string | null;
	}

	/** The response message for MembershipsService.LookupMembershipName. */
	export interface LookupMembershipNameResponseFormProperties {

		/** The [resource name](https://cloud.google.com/apis/design/resource_names) of the looked-up `Membership`. Must be of the form `groups/{group_id}/memberships/{membership_id}`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLookupMembershipNameResponseFormGroup() {
		return new FormGroup<LookupMembershipNameResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing resource names of the DeviceUsers associated with the caller's credentials. */
	export interface LookupSelfDeviceUsersResponse {

		/** The customer Id that may be passed back to other Devices API methods such as List, Get, etc. */
		customer?: string | null;

		/** [Resource names](https://cloud.google.com/apis/design/resource_names) of the DeviceUsers in the format: `devices/{device_id}/deviceUsers/{user_resource_id}`, where device_id is the unique ID assigned to a Device and user_resource_id is the unique user ID */
		names?: Array<string>;

		/** Token to retrieve the next page of results. Empty if there are no more results. */
		nextPageToken?: string | null;
	}

	/** Response containing resource names of the DeviceUsers associated with the caller's credentials. */
	export interface LookupSelfDeviceUsersResponseFormProperties {

		/** The customer Id that may be passed back to other Devices API methods such as List, Get, etc. */
		customer: FormControl<string | null | undefined>,

		/** Token to retrieve the next page of results. Empty if there are no more results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateLookupSelfDeviceUsersResponseFormGroup() {
		return new FormGroup<LookupSelfDeviceUsersResponseFormProperties>({
			customer: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message representing a transitive membership of a group. */
	export interface MemberRelation {

		/** Resource name for this member. */
		member?: string | null;

		/** Entity key has an id and a namespace. In case of discussion forums, the id will be an email address without a namespace. */
		preferredMemberKey?: Array<EntityKey>;

		/** The relation between the group and the transitive membership. */
		relationType?: GroupRelationRelationType | null;

		/** The membership role details (i.e name of role and expiry time). */
		roles?: Array<TransitiveMembershipRole>;
	}

	/** Message representing a transitive membership of a group. */
	export interface MemberRelationFormProperties {

		/** Resource name for this member. */
		member: FormControl<string | null | undefined>,

		/** The relation between the group and the transitive membership. */
		relationType: FormControl<GroupRelationRelationType | null | undefined>,
	}
	export function CreateMemberRelationFormGroup() {
		return new FormGroup<MemberRelationFormProperties>({
			member: new FormControl<string | null | undefined>(undefined),
			relationType: new FormControl<GroupRelationRelationType | null | undefined>(undefined),
		});

	}


	/** The definition of MemberRestriction */
	export interface MemberRestriction {

		/** The evaluated state of this restriction. */
		evaluation?: RestrictionEvaluation;

		/** Member Restriction as defined by CEL expression. Supported restrictions are: `member.customer_id` and `member.type`. Valid values for `member.type` are `1`, `2` and `3`. They correspond to USER, SERVICE_ACCOUNT, and GROUP respectively. The value for `member.customer_id` only supports `groupCustomerId()` currently which means the customer id of the group will be used for restriction. Supported operators are `&&`, `||` and `==`, corresponding to AND, OR, and EQUAL. Examples: Allow only service accounts of given customer to be members. `member.type == 2 && member.customer_id == groupCustomerId()` Allow only users or groups to be members. `member.type == 1 || member.type == 3` */
		query?: string | null;
	}

	/** The definition of MemberRestriction */
	export interface MemberRestrictionFormProperties {

		/** Member Restriction as defined by CEL expression. Supported restrictions are: `member.customer_id` and `member.type`. Valid values for `member.type` are `1`, `2` and `3`. They correspond to USER, SERVICE_ACCOUNT, and GROUP respectively. The value for `member.customer_id` only supports `groupCustomerId()` currently which means the customer id of the group will be used for restriction. Supported operators are `&&`, `||` and `==`, corresponding to AND, OR, and EQUAL. Examples: Allow only service accounts of given customer to be members. `member.type == 2 && member.customer_id == groupCustomerId()` Allow only users or groups to be members. `member.type == 1 || member.type == 3` */
		query: FormControl<string | null | undefined>,
	}
	export function CreateMemberRestrictionFormGroup() {
		return new FormGroup<MemberRestrictionFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The evaluated state of this restriction. */
	export interface RestrictionEvaluation {

		/** Output only. The current state of the restriction */
		state?: RestrictionEvaluationState | null;
	}

	/** The evaluated state of this restriction. */
	export interface RestrictionEvaluationFormProperties {

		/** Output only. The current state of the restriction */
		state: FormControl<RestrictionEvaluationState | null | undefined>,
	}
	export function CreateRestrictionEvaluationFormGroup() {
		return new FormGroup<RestrictionEvaluationFormProperties>({
			state: new FormControl<RestrictionEvaluationState | null | undefined>(undefined),
		});

	}

	export enum RestrictionEvaluationState { STATE_UNSPECIFIED = 0, EVALUATING = 1, COMPLIANT = 2, FORWARD_COMPLIANT = 3, NON_COMPLIANT = 4 }


	/** Message containing membership relation. */
	export interface MembershipRelation {

		/** An extended description to help users determine the purpose of a `Group`. */
		description?: string | null;

		/** The display name of the `Group`. */
		displayName?: string | null;

		/** The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`. Shall be of the form `groups/{group_id}`. */
		group?: string | null;

		/** A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s. */
		groupKey?: EntityKey;

		/** One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value. */
		labels?: {[id: string]: string };

		/** The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership`. Shall be of the form `groups/{group_id}/memberships/{membership_id}`. */
		membership?: string | null;

		/** The `MembershipRole`s that apply to the `Membership`. */
		roles?: Array<MembershipRole>;
	}

	/** Message containing membership relation. */
	export interface MembershipRelationFormProperties {

		/** An extended description to help users determine the purpose of a `Group`. */
		description: FormControl<string | null | undefined>,

		/** The display name of the `Group`. */
		displayName: FormControl<string | null | undefined>,

		/** The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`. Shall be of the form `groups/{group_id}`. */
		group: FormControl<string | null | undefined>,

		/** One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership`. Shall be of the form `groups/{group_id}/memberships/{membership_id}`. */
		membership: FormControl<string | null | undefined>,
	}
	export function CreateMembershipRelationFormGroup() {
		return new FormGroup<MembershipRelationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			membership: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for MembershipsService.ModifyMembershipRoles. */
	export interface ModifyMembershipRolesRequest {

		/** The `MembershipRole`s to be added. Adding or removing roles in the same request as updating roles is not supported. Must not be set if `update_roles_params` is set. */
		addRoles?: Array<MembershipRole>;

		/** The `name`s of the `MembershipRole`s to be removed. Adding or removing roles in the same request as updating roles is not supported. It is not possible to remove the `MEMBER` `MembershipRole`. If you wish to delete a `Membership`, call MembershipsService.DeleteMembership instead. Must not contain `MEMBER`. Must not be set if `update_roles_params` is set. */
		removeRoles?: Array<string>;

		/** The `MembershipRole`s to be updated. Updating roles in the same request as adding or removing roles is not supported. Must not be set if either `add_roles` or `remove_roles` is set. */
		updateRolesParams?: Array<UpdateMembershipRolesParams>;
	}

	/** The request message for MembershipsService.ModifyMembershipRoles. */
	export interface ModifyMembershipRolesRequestFormProperties {
	}
	export function CreateModifyMembershipRolesRequestFormGroup() {
		return new FormGroup<ModifyMembershipRolesRequestFormProperties>({
		});

	}


	/** The details of an update to a `MembershipRole`. */
	export interface UpdateMembershipRolesParams {

		/** The fully-qualified names of fields to update. May only contain the field `expiry_detail.expire_time`. */
		fieldMask?: string | null;

		/** A membership role within the Cloud Identity Groups API. A `MembershipRole` defines the privileges granted to a `Membership`. */
		membershipRole?: MembershipRole;
	}

	/** The details of an update to a `MembershipRole`. */
	export interface UpdateMembershipRolesParamsFormProperties {

		/** The fully-qualified names of fields to update. May only contain the field `expiry_detail.expire_time`. */
		fieldMask: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMembershipRolesParamsFormGroup() {
		return new FormGroup<UpdateMembershipRolesParamsFormProperties>({
			fieldMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for MembershipsService.ModifyMembershipRoles. */
	export interface ModifyMembershipRolesResponse {

		/** A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a "member". */
		membership?: Membership;
	}

	/** The response message for MembershipsService.ModifyMembershipRoles. */
	export interface ModifyMembershipRolesResponseFormProperties {
	}
	export function CreateModifyMembershipRolesResponseFormGroup() {
		return new FormGroup<ModifyMembershipRolesResponseFormProperties>({
		});

	}


	/** The request message for OrgMembershipsService.MoveOrgMembership. */
	export interface MoveOrgMembershipRequest {

		/** Required. Immutable. Customer on whose membership change is made. All authorization will happen on the role assignments of this customer. Format: customers/{$customerId} where `$customerId` is the `id` from the [Admin SDK `Customer` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers). You may also use `customers/my_customer` to specify your own organization. */
		customer?: string | null;

		/** Required. Immutable. OrgUnit where the membership will be moved to. Format: orgUnits/{$orgUnitId} where `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits). */
		destinationOrgUnit?: string | null;
	}

	/** The request message for OrgMembershipsService.MoveOrgMembership. */
	export interface MoveOrgMembershipRequestFormProperties {

		/** Required. Immutable. Customer on whose membership change is made. All authorization will happen on the role assignments of this customer. Format: customers/{$customerId} where `$customerId` is the `id` from the [Admin SDK `Customer` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers). You may also use `customers/my_customer` to specify your own organization. */
		customer: FormControl<string | null | undefined>,

		/** Required. Immutable. OrgUnit where the membership will be moved to. Format: orgUnits/{$orgUnitId} where `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits). */
		destinationOrgUnit: FormControl<string | null | undefined>,
	}
	export function CreateMoveOrgMembershipRequestFormGroup() {
		return new FormGroup<MoveOrgMembershipRequestFormProperties>({
			customer: new FormControl<string | null | undefined>(undefined),
			destinationOrgUnit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for MembershipsService.SearchDirectGroups. */
	export interface SearchDirectGroupsResponse {

		/** List of direct groups satisfying the query. */
		memberships?: Array<MembershipRelation>;

		/** Token to retrieve the next page of results, or empty if there are no more results available for listing. */
		nextPageToken?: string | null;
	}

	/** The response message for MembershipsService.SearchDirectGroups. */
	export interface SearchDirectGroupsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results available for listing. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchDirectGroupsResponseFormGroup() {
		return new FormGroup<SearchDirectGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for GroupsService.SearchGroups. */
	export interface SearchGroupsResponse {

		/** The `Group` resources that match the search query. */
		groups?: Array<Group>;

		/** A continuation token to retrieve the next page of results, or empty if there are no more results available. */
		nextPageToken?: string | null;
	}

	/** The response message for GroupsService.SearchGroups. */
	export interface SearchGroupsResponseFormProperties {

		/** A continuation token to retrieve the next page of results, or empty if there are no more results available. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchGroupsResponseFormGroup() {
		return new FormGroup<SearchGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for MembershipsService.SearchTransitiveGroups. */
	export interface SearchTransitiveGroupsResponse {

		/** List of transitive groups satisfying the query. */
		memberships?: Array<GroupRelation>;

		/** Token to retrieve the next page of results, or empty if there are no more results available for listing. */
		nextPageToken?: string | null;
	}

	/** The response message for MembershipsService.SearchTransitiveGroups. */
	export interface SearchTransitiveGroupsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results available for listing. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchTransitiveGroupsResponseFormGroup() {
		return new FormGroup<SearchTransitiveGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for MembershipsService.SearchTransitiveMemberships. */
	export interface SearchTransitiveMembershipsResponse {

		/** List of transitive memberships satisfying the query. */
		memberships?: Array<MemberRelation>;

		/** Token to retrieve the next page of results, or empty if there are no more results. */
		nextPageToken?: string | null;
	}

	/** The response message for MembershipsService.SearchTransitiveMemberships. */
	export interface SearchTransitiveMembershipsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchTransitiveMembershipsResponseFormGroup() {
		return new FormGroup<SearchTransitiveMembershipsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The definiion of security settings. */
	export interface SecuritySettings {

		/** The definition of MemberRestriction */
		memberRestriction?: MemberRestriction;

		/** Output only. The resource name of the security settings. Shall be of the form `groups/{group_id}/securitySettings`. */
		name?: string | null;
	}

	/** The definiion of security settings. */
	export interface SecuritySettingsFormProperties {

		/** Output only. The resource name of the security settings. Shall be of the form `groups/{group_id}/securitySettings`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSecuritySettingsFormGroup() {
		return new FormGroup<SecuritySettingsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to send email for inviting target user corresponding to the UserInvitation. */
	export interface SendUserInvitationRequest {
	}

	/** A request to send email for inviting target user corresponding to the UserInvitation. */
	export interface SendUserInvitationRequestFormProperties {
	}
	export function CreateSendUserInvitationRequestFormGroup() {
		return new FormGroup<SendUserInvitationRequestFormProperties>({
		});

	}


	/** LRO response metadata for InboundSamlSsoProfilesService.UpdateInboundSamlSsoProfile. */
	export interface UpdateInboundSamlSsoProfileOperationMetadata {
	}

	/** LRO response metadata for InboundSamlSsoProfilesService.UpdateInboundSamlSsoProfile. */
	export interface UpdateInboundSamlSsoProfileOperationMetadataFormProperties {
	}
	export function CreateUpdateInboundSamlSsoProfileOperationMetadataFormGroup() {
		return new FormGroup<UpdateInboundSamlSsoProfileOperationMetadataFormProperties>({
		});

	}


	/** LRO response metadata for InboundSsoAssignmentsService.UpdateInboundSsoAssignment. */
	export interface UpdateInboundSsoAssignmentOperationMetadata {
	}

	/** LRO response metadata for InboundSsoAssignmentsService.UpdateInboundSsoAssignment. */
	export interface UpdateInboundSsoAssignmentOperationMetadataFormProperties {
	}
	export function CreateUpdateInboundSsoAssignmentOperationMetadataFormGroup() {
		return new FormGroup<UpdateInboundSsoAssignmentOperationMetadataFormProperties>({
		});

	}


	/** Request message for wiping all data on the device. */
	export interface WipeDeviceRequest {

		/** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
		customer?: string | null;

		/** Optional. Specifies if a user is able to factory reset a device after a Device Wipe. On iOS, this is called "Activation Lock", while on Android, this is known as "Factory Reset Protection". If true, this protection will be removed from the device, so that a user can successfully factory reset. If false, the setting is untouched on the device. */
		removeResetLock?: boolean | null;
	}

	/** Request message for wiping all data on the device. */
	export interface WipeDeviceRequestFormProperties {

		/** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
		customer: FormControl<string | null | undefined>,

		/** Optional. Specifies if a user is able to factory reset a device after a Device Wipe. On iOS, this is called "Activation Lock", while on Android, this is known as "Factory Reset Protection". If true, this protection will be removed from the device, so that a user can successfully factory reset. If false, the setting is untouched on the device. */
		removeResetLock: FormControl<boolean | null | undefined>,
	}
	export function CreateWipeDeviceRequestFormGroup() {
		return new FormGroup<WipeDeviceRequestFormProperties>({
			customer: new FormControl<string | null | undefined>(undefined),
			removeResetLock: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response message for wiping all data on the device. */
	export interface WipeDeviceResponse {

		/** A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user. */
		device?: Device;
	}

	/** Response message for wiping all data on the device. */
	export interface WipeDeviceResponseFormProperties {
	}
	export function CreateWipeDeviceResponseFormGroup() {
		return new FormGroup<WipeDeviceResponseFormProperties>({
		});

	}


	/** Request message for starting an account wipe on device. */
	export interface WipeDeviceUserRequest {

		/** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
		customer?: string | null;
	}

	/** Request message for starting an account wipe on device. */
	export interface WipeDeviceUserRequestFormProperties {

		/** Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs. */
		customer: FormControl<string | null | undefined>,
	}
	export function CreateWipeDeviceUserRequestFormGroup() {
		return new FormGroup<WipeDeviceUserRequestFormProperties>({
			customer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for wiping the user's account from the device. */
	export interface WipeDeviceUserResponse {

		/** Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device */
		deviceUser?: DeviceUser;
	}

	/** Response message for wiping the user's account from the device. */
	export interface WipeDeviceUserResponseFormProperties {
	}
	export function CreateWipeDeviceUserResponseFormGroup() {
		return new FormGroup<WipeDeviceUserResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists/Searches devices.
		 * Get v1beta1/devices
		 * @param {string} customer Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer.
		 * @param {string} filter Optional. Additional restrictions when fetching list of devices. For a list of search fields, refer to [Mobile device search fields](https://developers.google.com/admin-sdk/directory/v1/search-operators). Multiple search fields are separated by the space character.
		 * @param {string} orderBy Optional. Order specification for devices in the response. Only one of the following field names may be used to specify the order: `create_time`, `last_sync_time`, `model`, `os_version`, `device_type` and `serial_number`. `desc` may be specified optionally to specify results to be sorted in descending order. Default order is ascending.
		 * @param {number} pageSize Optional. The maximum number of Devices to return. If unspecified, at most 20 Devices will be returned. The maximum value is 100; values above 100 will be coerced to 100.
		 * @param {string} pageToken Optional. A page token, received from a previous `ListDevices` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDevices` must match the call that provided the page token.
		 * @param {Cloudidentity_devices_listView} view Optional. The view to use for the List request.
		 * @return {ListDevicesResponse} Successful response
		 */
		Cloudidentity_devices_list(customer: string | null | undefined, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Cloudidentity_devices_listView | null | undefined): Observable<ListDevicesResponse> {
			return this.http.get<ListDevicesResponse>(this.baseUri + 'v1beta1/devices?customer=' + (customer == null ? '' : encodeURIComponent(customer)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a device. Only company-owned device may be created. **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium
		 * Post v1beta1/devices
		 * @return {Operation} Successful response
		 */
		Cloudidentity_devices_create(requestBody: CreateDeviceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/devices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the `Group` resources under a customer or namespace.
		 * Get v1beta1/groups
		 * @param {number} pageSize The maximum number of results to return. Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`. If unspecified, defaults to 200 for `View.BASIC` and to 50 for `View.FULL`. Must not be greater than 1000 for `View.BASIC` or 500 for `View.FULL`.
		 * @param {string} pageToken The `next_page_token` value returned from a previous list request, if any.
		 * @param {string} parent Required. The parent resource under which to list all `Group` resources. Must be of the form `identitysources/{identity_source_id}` for external- identity-mapped groups or `customers/{customer_id}` for Google Groups. The `customer_id` must begin with "C" (for example, 'C046psxkn'). [Find your customer ID.] (https://support.google.com/cloudidentity/answer/10070793)
		 * @param {Cloudidentity_groups_listView} view The level of detail to be returned. If unspecified, defaults to `View.BASIC`.
		 * @return {ListGroupsResponse} Successful response
		 */
		Cloudidentity_groups_list(pageSize: number | null | undefined, pageToken: string | null | undefined, parent: string | null | undefined, view: Cloudidentity_groups_listView | null | undefined): Observable<ListGroupsResponse> {
			return this.http.get<ListGroupsResponse>(this.baseUri + 'v1beta1/groups?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)) + '&view=' + view, {});
		}

		/**
		 * Creates a `Group`.
		 * Post v1beta1/groups
		 * @param {Cloudidentity_groups_createInitialGroupConfig} initialGroupConfig Required. The initial configuration option for the `Group`.
		 * @return {Operation} Successful response
		 */
		Cloudidentity_groups_create(initialGroupConfig: Cloudidentity_groups_createInitialGroupConfig | null | undefined, requestBody: Group): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/groups?initialGroupConfig=' + initialGroupConfig, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Group` by its `EntityKey`.
		 * Get v1beta1/groups:lookup
		 * @param {string} groupKey_id The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.
		 * @param {string} groupKey_namespace The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`.
		 * @return {LookupGroupNameResponse} Successful response
		 */
		Cloudidentity_groups_lookup(groupKey_id: string | null | undefined, groupKey_namespace: string | null | undefined): Observable<LookupGroupNameResponse> {
			return this.http.get<LookupGroupNameResponse>(this.baseUri + 'v1beta1/groups:lookup?groupKey_id=' + (groupKey_id == null ? '' : encodeURIComponent(groupKey_id)) + '&groupKey_namespace=' + (groupKey_namespace == null ? '' : encodeURIComponent(groupKey_namespace)), {});
		}

		/**
		 * Searches for `Group` resources matching a specified query.
		 * Get v1beta1/groups:search
		 * @param {string} orderBy The ordering of groups for the display name or email in the search groups response. The syntax for this field can be found at https://cloud.google.com/apis/design/design_patterns#sorting_order. Example: Sort by the ascending name: order_by="display_name" Sort by the descending group key email: order_by="group_key desc"
		 * @param {number} pageSize The maximum number of results to return. Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`. If unspecified, defaults to 200 for `GroupView.BASIC` and to 50 for `GroupView.FULL`. Must not be greater than 1000 for `GroupView.BASIC` or 500 for `GroupView.FULL`.
		 * @param {string} pageToken The `next_page_token` value returned from a previous search request, if any.
		 * @param {string} query Required. The search query. * Must be specified in [Common Expression Language](https://opensource.google/projects/cel). * Must contain equality operators on the parent, e.g. `parent == 'customers/{customer_id}'`. The `customer_id` must begin with "C" (for example, 'C046psxkn'). [Find your customer ID.] (https://support.google.com/cloudidentity/answer/10070793) * Can contain optional inclusion operators on `labels` such as `'cloudidentity.googleapis.com/groups.discussion_forum' in labels`). * Can contain an optional equality operator on `domain_name`. e.g. `domain_name == 'examplepetstore.com'` * Can contain optional `startsWith/contains/equality` operators on `group_key`, e.g. `group_key.startsWith('dev')`, `group_key.contains('dev'), group_key == 'dev@examplepetstore.com'` * Can contain optional `startsWith/contains/equality` operators on `display_name`, such as `display_name.startsWith('dev')` , `display_name.contains('dev')`, `display_name == 'dev'`
		 * @param {Cloudidentity_groups_searchView} view The level of detail to be returned. If unspecified, defaults to `View.BASIC`.
		 * @return {SearchGroupsResponse} Successful response
		 */
		Cloudidentity_groups_search(orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, query: string | null | undefined, view: Cloudidentity_groups_searchView | null | undefined): Observable<SearchGroupsResponse> {
			return this.http.get<SearchGroupsResponse>(this.baseUri + 'v1beta1/groups:search?orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&view=' + view, {});
		}

		/**
		 * Lists InboundSamlSsoProfiles for a customer.
		 * Get v1beta1/inboundSamlSsoProfiles
		 * @param {string} filter A [Common Expression Language](https://github.com/google/cel-spec) expression to filter the results. The only supported filter is filtering by customer. For example: `customer=="customers/C0123abc"`. Omitting the filter or specifying a filter of `customer=="customers/my_customer"` will return the profiles for the customer that the caller (authenticated user) belongs to.
		 * @param {number} pageSize The maximum number of InboundSamlSsoProfiles to return. The service may return fewer than this value. If omitted (or defaulted to zero) the server will use a sensible default. This default may change over time. The maximum allowed value is 100. Requests with page_size greater than that will be silently interpreted as having this maximum value.
		 * @param {string} pageToken A page token, received from a previous `ListInboundSamlSsoProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInboundSamlSsoProfiles` must match the call that provided the page token.
		 * @return {ListInboundSamlSsoProfilesResponse} Successful response
		 */
		Cloudidentity_inboundSamlSsoProfiles_list(filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListInboundSamlSsoProfilesResponse> {
			return this.http.get<ListInboundSamlSsoProfilesResponse>(this.baseUri + 'v1beta1/inboundSamlSsoProfiles?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an InboundSamlSsoProfile for a customer.
		 * Post v1beta1/inboundSamlSsoProfiles
		 * @return {Operation} Successful response
		 */
		Cloudidentity_inboundSamlSsoProfiles_create(requestBody: InboundSamlSsoProfile): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/inboundSamlSsoProfiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the InboundSsoAssignments for a `Customer`.
		 * Get v1beta1/inboundSsoAssignments
		 * @param {string} filter A CEL expression to filter the results. The only supported filter is filtering by customer. For example: `customer==customers/C0123abc`. Omitting the filter or specifying a filter of `customer==customers/my_customer` will return the assignments for the customer that the caller (authenticated user) belongs to.
		 * @param {number} pageSize The maximum number of assignments to return. The service may return fewer than this value. If omitted (or defaulted to zero) the server will use a sensible default. This default may change over time. The maximum allowed value is 100, though requests with page_size greater than that will be silently interpreted as having this maximum value. This may increase in the futue.
		 * @param {string} pageToken A page token, received from a previous `ListInboundSsoAssignments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInboundSsoAssignments` must match the call that provided the page token.
		 * @return {ListInboundSsoAssignmentsResponse} Successful response
		 */
		Cloudidentity_inboundSsoAssignments_list(filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListInboundSsoAssignmentsResponse> {
			return this.http.get<ListInboundSsoAssignmentsResponse>(this.baseUri + 'v1beta1/inboundSsoAssignments?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an InboundSsoAssignment for users and devices in a `Customer` under a given `Group` or `OrgUnit`.
		 * Post v1beta1/inboundSsoAssignments
		 * @return {Operation} Successful response
		 */
		Cloudidentity_inboundSsoAssignments_create(requestBody: InboundSsoAssignment): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/inboundSsoAssignments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an InboundSsoAssignment. To disable SSO, Create (or Update) an assignment that has `sso_mode` == `SSO_OFF`.
		 * Delete v1beta1/{name}
		 * @param {string} name Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the InboundSsoAssignment to delete. Format: `inboundSsoAssignments/{assignment}`
		 * @param {string} customer Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
		 * @return {Operation} Successful response
		 */
		Cloudidentity_inboundSsoAssignments_delete(name: string, customer: string | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&customer=' + (customer == null ? '' : encodeURIComponent(customer)), {});
		}

		/**
		 * Gets an InboundSsoAssignment.
		 * Get v1beta1/{name}
		 * @param {string} name Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the InboundSsoAssignment to fetch. Format: `inboundSsoAssignments/{assignment}`
		 * @param {string} readMask Field-level read mask of which fields to return. "*" returns all fields. If not specified, all fields will be returned. May only contain the following field: `member_restriction`.
		 * @return {InboundSsoAssignment} Successful response
		 */
		Cloudidentity_inboundSsoAssignments_get(name: string, readMask: string | null | undefined): Observable<InboundSsoAssignment> {
			return this.http.get<InboundSsoAssignment>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}

		/**
		 * Updates an InboundSsoAssignment. The body of this request is the `inbound_sso_assignment` field and the `update_mask` is relative to that. For example: a PATCH to `/v1beta1/inboundSsoAssignments/0abcdefg1234567&update_mask=rank` with a body of `{ "rank": 1 }` moves that (presumably group-targeted) SSO assignment to the highest priority and shifts any other group-targeted assignments down in priority.
		 * Patch v1beta1/{name}
		 * @param {string} name Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Inbound SSO Assignment.
		 * @param {string} updateMask Required. The list of fields to be updated.
		 * @return {Operation} Successful response
		 */
		Cloudidentity_inboundSsoAssignments_patch(name: string, updateMask: string | null | undefined, requestBody: InboundSsoAssignment): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Approves device to access user data.
		 * Post v1beta1/{name}:approve
		 * @param {string} name Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
		 * @return {Operation} Successful response
		 */
		Cloudidentity_devices_deviceUsers_approve(name: string, requestBody: ApproveDeviceUserRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':approve', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Blocks device from accessing user data
		 * Post v1beta1/{name}:block
		 * @param {string} name Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
		 * @return {Operation} Successful response
		 */
		Cloudidentity_devices_deviceUsers_block(name: string, requestBody: BlockDeviceUserRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':block', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels a UserInvitation that was already sent.
		 * Post v1beta1/{name}:cancel
		 * @param {string} name Required. `UserInvitation` name in the format `customers/{customer}/userinvitations/{user_email_address}`
		 * @return {Operation} Successful response
		 */
		Cloudidentity_customers_userinvitations_cancel(name: string, requestBody: CancelUserInvitationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped.
		 * Post v1beta1/{name}:cancelWipe
		 * @param {string} name Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
		 * @return {Operation} Successful response
		 */
		Cloudidentity_devices_deviceUsers_cancelWipe(name: string, requestBody: CancelWipeDeviceUserRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancelWipe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Verifies whether a user account is eligible to receive a UserInvitation (is an unmanaged account). Eligibility is based on the following criteria: * the email address is a consumer account and it's the primary email address of the account, and * the domain of the email address matches an existing verified Google Workspace or Cloud Identity domain If both conditions are met, the user is eligible. **Note:** This method is not supported for Workspace Essentials customers.
		 * Get v1beta1/{name}:isInvitableUser
		 * @param {string} name Required. `UserInvitation` name in the format `customers/{customer}/userinvitations/{user_email_address}`
		 * @return {IsInvitableUserResponse} Successful response
		 */
		Cloudidentity_customers_userinvitations_isInvitableUser(name: string): Observable<IsInvitableUserResponse> {
			return this.http.get<IsInvitableUserResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':isInvitableUser', {});
		}

		/**
		 * Modifies the `MembershipRole`s of a `Membership`.
		 * Post v1beta1/{name}:modifyMembershipRoles
		 * @param {string} name Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` whose roles are to be modified. Must be of the form `groups/{group_id}/memberships/{membership_id}`.
		 * @return {ModifyMembershipRolesResponse} Successful response
		 */
		Cloudidentity_groups_memberships_modifyMembershipRoles(name: string, requestBody: ModifyMembershipRolesRequest): Observable<ModifyMembershipRolesResponse> {
			return this.http.post<ModifyMembershipRolesResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':modifyMembershipRoles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Move an OrgMembership to a new OrgUnit. NOTE: This is an atomic copy-and-delete. The resource will have a new copy under the destination OrgUnit and be deleted from the source OrgUnit. The resource can only be searched under the destination OrgUnit afterwards.
		 * Post v1beta1/{name}:move
		 * @param {string} name Required. Immutable. The [resource name](https://cloud.google.com/apis/design/resource_names) of the OrgMembership. Format: orgUnits/{$orgUnitId}/memberships/{$membership} The `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits). To manage a Membership without specifying source `orgUnitId`, this API also supports the wildcard character '-' for `$orgUnitId` per https://google.aip.dev/159. The `$membership` shall be of the form `{$entityType};{$memberId}`, where `$entityType` is the enum value of OrgMembership.EntityType, and `memberId` is the `id` from [Drive API (V3) `Drive` resource](https://developers.google.com/drive/api/v3/reference/drives#resource) for OrgMembership.EntityType.SHARED_DRIVE.
		 * @return {Operation} Successful response
		 */
		Cloudidentity_orgUnits_memberships_move(name: string, requestBody: MoveOrgMembershipRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':move', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sends a UserInvitation to email. If the `UserInvitation` does not exist for this request and it is a valid request, the request creates a `UserInvitation`. **Note:** The `get` and `list` methods have a 48-hour delay where newly-created consumer accounts will not appear in the results. You can still send a `UserInvitation` to those accounts if you know the unmanaged email address and IsInvitableUser==True.
		 * Post v1beta1/{name}:send
		 * @param {string} name Required. `UserInvitation` name in the format `customers/{customer}/userinvitations/{user_email_address}`
		 * @return {Operation} Successful response
		 */
		Cloudidentity_customers_userinvitations_send(name: string, requestBody: SendUserInvitationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':send', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Wipes the user's account on a device.
		 * Post v1beta1/{name}:wipe
		 * @param {string} name Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
		 * @return {Operation} Successful response
		 */
		Cloudidentity_devices_deviceUsers_wipe(name: string, requestBody: WipeDeviceUserRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':wipe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists/Searches DeviceUsers.
		 * Get v1beta1/{parent}/deviceUsers
		 * @param {string} parent Required. To list all DeviceUsers, set this to "devices/-". To list all DeviceUsers owned by a device, set this to the resource name of the device. Format: devices/{device}
		 * @param {string} customer Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
		 * @param {string} filter Optional. Additional restrictions when fetching list of devices. For a list of search fields, refer to [Mobile device search fields](https://developers.google.com/admin-sdk/directory/v1/search-operators). Multiple search fields are separated by the space character.
		 * @param {string} orderBy Optional. Order specification for devices in the response.
		 * @param {number} pageSize Optional. The maximum number of DeviceUsers to return. If unspecified, at most 5 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20.
		 * @param {string} pageToken Optional. A page token, received from a previous `ListDeviceUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBooks` must match the call that provided the page token.
		 * @return {ListDeviceUsersResponse} Successful response
		 */
		Cloudidentity_devices_deviceUsers_list(parent: string, customer: string | null | undefined, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDeviceUsersResponse> {
			return this.http.get<ListDeviceUsersResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/deviceUsers&customer=' + (customer == null ? '' : encodeURIComponent(customer)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns a list of IdpCredentials in an InboundSamlSsoProfile.
		 * Get v1beta1/{parent}/idpCredentials
		 * @param {string} parent Required. The parent, which owns this collection of `IdpCredential`s. Format: `inboundSamlSsoProfiles/{sso_profile_id}`
		 * @param {number} pageSize The maximum number of `IdpCredential`s to return. The service may return fewer than this value.
		 * @param {string} pageToken A page token, received from a previous `ListIdpCredentials` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIdpCredentials` must match the call that provided the page token.
		 * @return {ListIdpCredentialsResponse} Successful response
		 */
		Cloudidentity_inboundSamlSsoProfiles_idpCredentials_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListIdpCredentialsResponse> {
			return this.http.get<ListIdpCredentialsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/idpCredentials&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Adds an IdpCredential. Up to 2 credentials are allowed.
		 * Post v1beta1/{parent}/idpCredentials:add
		 * @param {string} parent Required. The InboundSamlSsoProfile that owns the IdpCredential. Format: `inboundSamlSsoProfiles/{sso_profile_id}`
		 * @return {Operation} Successful response
		 */
		Cloudidentity_inboundSamlSsoProfiles_idpCredentials_add(parent: string, requestBody: AddIdpCredentialRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/idpCredentials:add', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List OrgMembership resources in an OrgUnit treated as 'parent'. Parent format: orgUnits/{$orgUnitId} where `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits)
		 * Get v1beta1/{parent}/memberships
		 * @param {string} parent Required. Immutable. OrgUnit which is queried for a list of memberships. Format: orgUnits/{$orgUnitId} where `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits).
		 * @param {string} customer Required. Immutable. Customer that this OrgMembership belongs to. All authorization will happen on the role assignments of this customer. Format: customers/{$customerId} where `$customerId` is the `id` from the [Admin SDK `Customer` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers). You may also use `customers/my_customer` to specify your own organization.
		 * @param {string} filter The search query. Must be specified in [Common Expression Language](https://opensource.google/projects/cel). May only contain equality operators on the `type` (e.g., `type == 'shared_drive'`).
		 * @param {Cloudidentity_orgUnits_memberships_listPageSize} pageSize The maximum number of results to return. The service may return fewer than this value. If omitted (or defaulted to zero) the server will default to 50. The maximum allowed value is 100, though requests with page_size greater than that will be silently interpreted as 100.
		 * @param {string} pageToken A page token, received from a previous `OrgMembershipsService.ListOrgMemberships` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListOrgMembershipsRequest` must match the call that provided the page token.
		 * @return {ListOrgMembershipsResponse} Successful response
		 */
		Cloudidentity_orgUnits_memberships_list(parent: string, customer: string | null | undefined, filter: string | null | undefined, pageSize: Cloudidentity_orgUnits_memberships_listPageSize | null | undefined, pageToken: string | null | undefined): Observable<ListOrgMembershipsResponse> {
			return this.http.get<ListOrgMembershipsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/memberships&customer=' + (customer == null ? '' : encodeURIComponent(customer)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a `Membership`.
		 * Post v1beta1/{parent}/memberships
		 * @param {string} parent Required. The parent `Group` resource under which to create the `Membership`. Must be of the form `groups/{group_id}`.
		 * @return {Operation} Successful response
		 */
		Cloudidentity_groups_memberships_create(parent: string, requestBody: Membership): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/memberships', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group.
		 * Get v1beta1/{parent}/memberships:checkTransitiveMembership
		 * @param {string} parent [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to check the transitive membership in. Format: `groups/{group_id}`, where `group_id` is the unique id assigned to the Group to which the Membership belongs to.
		 * @param {string} query Required. A CEL expression that MUST include member specification. This is a `required` field. Certain groups are uniquely identified by both a 'member_key_id' and a 'member_key_namespace', which requires an additional query input: 'member_key_namespace'. Example query: `member_key_id == 'member_key_id_value'`
		 * @return {CheckTransitiveMembershipResponse} Successful response
		 */
		Cloudidentity_groups_memberships_checkTransitiveMembership(parent: string, query: string | null | undefined): Observable<CheckTransitiveMembershipResponse> {
			return this.http.get<CheckTransitiveMembershipResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/memberships:checkTransitiveMembership&query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Get a membership graph of just a member or both a member and a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. Given a member, the response will contain all membership paths from the member. Given both a group and a member, the response will contain all membership paths between the group and the member.
		 * Get v1beta1/{parent}/memberships:getMembershipGraph
		 * @param {string} parent Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group to which the Membership belongs to. group_id can be a wildcard collection id "-". When a group_id is specified, the membership graph will be constrained to paths between the member (defined in the query) and the parent. If a wildcard collection is provided, all membership paths connected to the member will be returned.
		 * @param {string} query Required. A CEL expression that MUST include member specification AND label(s). Certain groups are uniquely identified by both a 'member_key_id' and a 'member_key_namespace', which requires an additional query input: 'member_key_namespace'. Example query: `member_key_id == 'member_key_id_value' && in labels`
		 * @return {Operation} Successful response
		 */
		Cloudidentity_groups_memberships_getMembershipGraph(parent: string, query: string | null | undefined): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/memberships:getMembershipGraph&query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`.
		 * Get v1beta1/{parent}/memberships:lookup
		 * @param {string} parent Required. The parent `Group` resource under which to lookup the `Membership` name. Must be of the form `groups/{group_id}`.
		 * @param {string} memberKey_id The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.
		 * @param {string} memberKey_namespace The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`.
		 * @return {LookupMembershipNameResponse} Successful response
		 */
		Cloudidentity_groups_memberships_lookup(parent: string, memberKey_id: string | null | undefined, memberKey_namespace: string | null | undefined): Observable<LookupMembershipNameResponse> {
			return this.http.get<LookupMembershipNameResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/memberships:lookup&memberKey_id=' + (memberKey_id == null ? '' : encodeURIComponent(memberKey_id)) + '&memberKey_namespace=' + (memberKey_namespace == null ? '' : encodeURIComponent(memberKey_namespace)), {});
		}

		/**
		 * Searches direct groups of a member.
		 * Get v1beta1/{parent}/memberships:searchDirectGroups
		 * @param {string} parent [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: groups/{group_id}, where group_id is always '-' as this API will search across all groups for a given member.
		 * @param {string} orderBy The ordering of membership relation for the display name or email in the response. The syntax for this field can be found at https://cloud.google.com/apis/design/design_patterns#sorting_order. Example: Sort by the ascending display name: order_by="group_name" or order_by="group_name asc". Sort by the descending display name: order_by="group_name desc". Sort by the ascending group key: order_by="group_key" or order_by="group_key asc". Sort by the descending group key: order_by="group_key desc".
		 * @param {number} pageSize The default page size is 200 (max 1000).
		 * @param {string} pageToken The next_page_token value returned from a previous list request, if any
		 * @param {string} query Required. A CEL expression that MUST include member specification AND label(s). Users can search on label attributes of groups. CONTAINS match ('in') is supported on labels. Identity-mapped groups are uniquely identified by both a `member_key_id` and a `member_key_namespace`, which requires an additional query input: `member_key_namespace`. Example query: `member_key_id == 'member_key_id_value' && 'label_value' in labels`
		 * @return {SearchDirectGroupsResponse} Successful response
		 */
		Cloudidentity_groups_memberships_searchDirectGroups(parent: string, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, query: string | null | undefined): Observable<SearchDirectGroupsResponse> {
			return this.http.get<SearchDirectGroupsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/memberships:searchDirectGroups&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups.
		 * Get v1beta1/{parent}/memberships:searchTransitiveGroups
		 * @param {string} parent [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group_id}`, where `group_id` is always '-' as this API will search across all groups for a given member.
		 * @param {number} pageSize The default page size is 200 (max 1000).
		 * @param {string} pageToken The next_page_token value returned from a previous list request, if any.
		 * @param {string} query Required. A CEL expression that MUST include member specification AND label(s). This is a `required` field. Users can search on label attributes of groups. CONTAINS match ('in') is supported on labels. Identity-mapped groups are uniquely identified by both a `member_key_id` and a `member_key_namespace`, which requires an additional query input: `member_key_namespace`. Example query: `member_key_id == 'member_key_id_value' && in labels` Query may optionally contain equality operators on the parent of the group restricting the search within a particular customer, e.g. `parent == 'customers/{customer_id}'`. The `customer_id` must begin with "C" (for example, 'C046psxkn'). This filtering is only supported for Admins with groups read permissons on the input customer. Example query: `member_key_id == 'member_key_id_value' && in labels && parent == 'customers/C046psxkn'`
		 * @return {SearchTransitiveGroupsResponse} Successful response
		 */
		Cloudidentity_groups_memberships_searchTransitiveGroups(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, query: string | null | undefined): Observable<SearchTransitiveGroupsResponse> {
			return this.http.get<SearchTransitiveGroupsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/memberships:searchTransitiveGroups&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships.
		 * Get v1beta1/{parent}/memberships:searchTransitiveMemberships
		 * @param {string} parent [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
		 * @param {number} pageSize The default page size is 200 (max 1000).
		 * @param {string} pageToken The next_page_token value returned from a previous list request, if any.
		 * @return {SearchTransitiveMembershipsResponse} Successful response
		 */
		Cloudidentity_groups_memberships_searchTransitiveMemberships(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<SearchTransitiveMembershipsResponse> {
			return this.http.get<SearchTransitiveMembershipsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/memberships:searchTransitiveMemberships&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Retrieves a list of UserInvitation resources. **Note:** New consumer accounts with the customer's verified domain created within the previous 48 hours will not appear in the result. This delay also applies to newly-verified domains.
		 * Get v1beta1/{parent}/userinvitations
		 * @param {string} parent Required. The customer ID of the Google Workspace or Cloud Identity account the UserInvitation resources are associated with.
		 * @param {string} filter Optional. A query string for filtering `UserInvitation` results by their current state, in the format: `"state=='invited'"`.
		 * @param {string} orderBy Optional. The sort order of the list results. You can sort the results in descending order based on either email or last update timestamp but not both, using `order_by="email desc"`. Currently, sorting is supported for `update_time asc`, `update_time desc`, `email asc`, and `email desc`. If not specified, results will be returned based on `email asc` order.
		 * @param {number} pageSize Optional. The maximum number of UserInvitation resources to return. If unspecified, at most 100 resources will be returned. The maximum value is 200; values above 200 will be set to 200.
		 * @param {string} pageToken Optional. A page token, received from a previous `ListUserInvitations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBooks` must match the call that provided the page token.
		 * @return {ListUserInvitationsResponse} Successful response
		 */
		Cloudidentity_customers_userinvitations_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListUserInvitationsResponse> {
			return this.http.get<ListUserInvitationsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/userinvitations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: No properties need to be passed, the caller's credentials are sufficient to identify the corresponding DeviceUser. - Android: Specifying the 'android_id' field is required. - Desktop: Specifying the 'raw_resource_id' field is required.
		 * Get v1beta1/{parent}:lookup
		 * @param {string} parent Must be set to "devices/-/deviceUsers" to search across all DeviceUser belonging to the user.
		 * @param {string} androidId Android Id returned by [Settings.Secure#ANDROID_ID](https://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID).
		 * @param {number} pageSize The maximum number of DeviceUsers to return. If unspecified, at most 20 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20.
		 * @param {string} pageToken A page token, received from a previous `LookupDeviceUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `LookupDeviceUsers` must match the call that provided the page token.
		 * @param {string} rawResourceId Raw Resource Id used by Google Endpoint Verification. If the user is enrolled into Google Endpoint Verification, this id will be saved as the 'device_resource_id' field in the following platform dependent files. Mac: ~/.secureConnect/context_aware_config.json Windows: C:\Users\%USERPROFILE%\.secureConnect\context_aware_config.json Linux: ~/.secureConnect/context_aware_config.json
		 * @param {string} userId The user whose DeviceUser's resource name will be fetched. Must be set to 'me' to fetch the DeviceUser's resource name for the calling user.
		 * @return {LookupSelfDeviceUsersResponse} Successful response
		 */
		Cloudidentity_devices_deviceUsers_lookup(parent: string, androidId: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, rawResourceId: string | null | undefined, userId: string | null | undefined): Observable<LookupSelfDeviceUsersResponse> {
			return this.http.get<LookupSelfDeviceUsersResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':lookup&androidId=' + (androidId == null ? '' : encodeURIComponent(androidId)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rawResourceId=' + (rawResourceId == null ? '' : encodeURIComponent(rawResourceId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}
	}

	export enum Cloudidentity_devices_listView { VIEW_UNSPECIFIED = 0, COMPANY_INVENTORY = 1, USER_ASSIGNED_DEVICES = 2 }

	export enum Cloudidentity_groups_listView { VIEW_UNSPECIFIED = 0, BASIC = 1, FULL = 2 }

	export enum Cloudidentity_groups_createInitialGroupConfig { INITIAL_GROUP_CONFIG_UNSPECIFIED = 0, WITH_INITIAL_OWNER = 1, EMPTY = 2 }

	export enum Cloudidentity_groups_searchView { BASIC = 0, FULL = 1 }

	export enum Cloudidentity_orgUnits_memberships_listPageSize { BASIC = 0, FULL = 1 }

}

