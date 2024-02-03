import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Request message to claim a device on behalf of a customer. */
	export interface ClaimDeviceRequest {

		/** Optional. The ID of the configuration applied to the device section. */
		configurationId?: string | null;

		/** The ID of the customer for whom the device is being claimed. */
		customerId?: string | null;

		/** Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers). */
		deviceIdentifier?: DeviceIdentifier;

		/** Metadata entries that can be attached to a `Device`. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata). */
		deviceMetadata?: DeviceMetadata;

		/** The Google Workspace customer ID. */
		googleWorkspaceCustomerId?: string | null;

		/** Optional. Must and can only be set for Chrome OS devices. */
		preProvisioningToken?: string | null;

		/** Required. The section type of the device's provisioning record. */
		sectionType?: ClaimDeviceRequestSectionType | null;

		/** Optional. Must and can only be set when DeviceProvisioningSectionType is SECTION_TYPE_SIM_LOCK. The unique identifier of the SimLock profile. */
		simlockProfileId?: string | null;
	}

	/** Request message to claim a device on behalf of a customer. */
	export interface ClaimDeviceRequestFormProperties {

		/** Optional. The ID of the configuration applied to the device section. */
		configurationId: FormControl<string | null | undefined>,

		/** The ID of the customer for whom the device is being claimed. */
		customerId: FormControl<string | null | undefined>,

		/** The Google Workspace customer ID. */
		googleWorkspaceCustomerId: FormControl<string | null | undefined>,

		/** Optional. Must and can only be set for Chrome OS devices. */
		preProvisioningToken: FormControl<string | null | undefined>,

		/** Required. The section type of the device's provisioning record. */
		sectionType: FormControl<ClaimDeviceRequestSectionType | null | undefined>,

		/** Optional. Must and can only be set when DeviceProvisioningSectionType is SECTION_TYPE_SIM_LOCK. The unique identifier of the SimLock profile. */
		simlockProfileId: FormControl<string | null | undefined>,
	}
	export function CreateClaimDeviceRequestFormGroup() {
		return new FormGroup<ClaimDeviceRequestFormProperties>({
			configurationId: new FormControl<string | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
			googleWorkspaceCustomerId: new FormControl<string | null | undefined>(undefined),
			preProvisioningToken: new FormControl<string | null | undefined>(undefined),
			sectionType: new FormControl<ClaimDeviceRequestSectionType | null | undefined>(undefined),
			simlockProfileId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers). */
	export interface DeviceIdentifier {

		/** An identifier provided by OEMs, carried through the production and sales process. Only applicable to Chrome OS devices. */
		chromeOsAttestedDeviceId?: string | null;

		/** The type of the device */
		deviceType?: DeviceIdentifierDeviceType | null;

		/** The device’s IMEI number. Validated on input. */
		imei?: string | null;

		/** The device manufacturer’s name. Matches the device's built-in value returned from `android.os.Build.MANUFACTURER`. Allowed values are listed in [Android manufacturers](/zero-touch/resources/manufacturer-names#manufacturers-names). */
		manufacturer?: string | null;

		/** The device’s MEID number. */
		meid?: string | null;

		/** The device model's name. Allowed values are listed in [Android models](/zero-touch/resources/manufacturer-names#model-names) and [Chrome OS models](https://support.google.com/chrome/a/answer/10130175#identify_compatible). */
		model?: string | null;

		/** The manufacturer's serial number for the device. This value might not be unique across different device models. */
		serialNumber?: string | null;
	}

	/** Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers). */
	export interface DeviceIdentifierFormProperties {

		/** An identifier provided by OEMs, carried through the production and sales process. Only applicable to Chrome OS devices. */
		chromeOsAttestedDeviceId: FormControl<string | null | undefined>,

		/** The type of the device */
		deviceType: FormControl<DeviceIdentifierDeviceType | null | undefined>,

		/** The device’s IMEI number. Validated on input. */
		imei: FormControl<string | null | undefined>,

		/** The device manufacturer’s name. Matches the device's built-in value returned from `android.os.Build.MANUFACTURER`. Allowed values are listed in [Android manufacturers](/zero-touch/resources/manufacturer-names#manufacturers-names). */
		manufacturer: FormControl<string | null | undefined>,

		/** The device’s MEID number. */
		meid: FormControl<string | null | undefined>,

		/** The device model's name. Allowed values are listed in [Android models](/zero-touch/resources/manufacturer-names#model-names) and [Chrome OS models](https://support.google.com/chrome/a/answer/10130175#identify_compatible). */
		model: FormControl<string | null | undefined>,

		/** The manufacturer's serial number for the device. This value might not be unique across different device models. */
		serialNumber: FormControl<string | null | undefined>,
	}
	export function CreateDeviceIdentifierFormGroup() {
		return new FormGroup<DeviceIdentifierFormProperties>({
			chromeOsAttestedDeviceId: new FormControl<string | null | undefined>(undefined),
			deviceType: new FormControl<DeviceIdentifierDeviceType | null | undefined>(undefined),
			imei: new FormControl<string | null | undefined>(undefined),
			manufacturer: new FormControl<string | null | undefined>(undefined),
			meid: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeviceIdentifierDeviceType { DEVICE_TYPE_UNSPECIFIED = 'DEVICE_TYPE_UNSPECIFIED', DEVICE_TYPE_ANDROID = 'DEVICE_TYPE_ANDROID', DEVICE_TYPE_CHROME_OS = 'DEVICE_TYPE_CHROME_OS' }


	/** Metadata entries that can be attached to a `Device`. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata). */
	export interface DeviceMetadata {

		/** Metadata entries recorded as key-value pairs. */
		entries?: {[id: string]: string };
	}

	/** Metadata entries that can be attached to a `Device`. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata). */
	export interface DeviceMetadataFormProperties {

		/** Metadata entries recorded as key-value pairs. */
		entries: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDeviceMetadataFormGroup() {
		return new FormGroup<DeviceMetadataFormProperties>({
			entries: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum ClaimDeviceRequestSectionType { SECTION_TYPE_UNSPECIFIED = 'SECTION_TYPE_UNSPECIFIED', SECTION_TYPE_SIM_LOCK = 'SECTION_TYPE_SIM_LOCK', SECTION_TYPE_ZERO_TOUCH = 'SECTION_TYPE_ZERO_TOUCH' }


	/** Response message containing device id of the claim. */
	export interface ClaimDeviceResponse {

		/** The device ID of the claimed device. */
		deviceId?: string | null;

		/** The resource name of the device in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`. */
		deviceName?: string | null;
	}

	/** Response message containing device id of the claim. */
	export interface ClaimDeviceResponseFormProperties {

		/** The device ID of the claimed device. */
		deviceId: FormControl<string | null | undefined>,

		/** The resource name of the device in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`. */
		deviceName: FormControl<string | null | undefined>,
	}
	export function CreateClaimDeviceResponseFormGroup() {
		return new FormGroup<ClaimDeviceResponseFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined),
			deviceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to claim devices asynchronously in batch. Claiming a device adds the device to zero-touch enrollment and shows the device in the customer's view of the portal. */
	export interface ClaimDevicesRequest {

		/** Required. A list of device claims. */
		claims?: Array<PartnerClaim>;
	}

	/** Request to claim devices asynchronously in batch. Claiming a device adds the device to zero-touch enrollment and shows the device in the customer's view of the portal. */
	export interface ClaimDevicesRequestFormProperties {
	}
	export function CreateClaimDevicesRequestFormGroup() {
		return new FormGroup<ClaimDevicesRequestFormProperties>({
		});

	}


	/** Identifies one claim request. */
	export interface PartnerClaim {

		/** Optional. The ID of the configuration applied to the device section. */
		configurationId?: string | null;

		/** The ID of the customer for whom the device is being claimed. */
		customerId?: string | null;

		/** Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers). */
		deviceIdentifier?: DeviceIdentifier;

		/** Metadata entries that can be attached to a `Device`. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata). */
		deviceMetadata?: DeviceMetadata;

		/** The Google Workspace customer ID. */
		googleWorkspaceCustomerId?: string | null;

		/** Optional. Must and can only be set for Chrome OS devices. */
		preProvisioningToken?: string | null;

		/** Required. The section type of the device's provisioning record. */
		sectionType?: ClaimDeviceRequestSectionType | null;

		/** Optional. Must and can only be set when DeviceProvisioningSectionType is SECTION_TYPE_SIM_LOCK. The unique identifier of the SimLock profile. */
		simlockProfileId?: string | null;
	}

	/** Identifies one claim request. */
	export interface PartnerClaimFormProperties {

		/** Optional. The ID of the configuration applied to the device section. */
		configurationId: FormControl<string | null | undefined>,

		/** The ID of the customer for whom the device is being claimed. */
		customerId: FormControl<string | null | undefined>,

		/** The Google Workspace customer ID. */
		googleWorkspaceCustomerId: FormControl<string | null | undefined>,

		/** Optional. Must and can only be set for Chrome OS devices. */
		preProvisioningToken: FormControl<string | null | undefined>,

		/** Required. The section type of the device's provisioning record. */
		sectionType: FormControl<ClaimDeviceRequestSectionType | null | undefined>,

		/** Optional. Must and can only be set when DeviceProvisioningSectionType is SECTION_TYPE_SIM_LOCK. The unique identifier of the SimLock profile. */
		simlockProfileId: FormControl<string | null | undefined>,
	}
	export function CreatePartnerClaimFormGroup() {
		return new FormGroup<PartnerClaimFormProperties>({
			configurationId: new FormControl<string | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
			googleWorkspaceCustomerId: new FormControl<string | null | undefined>(undefined),
			preProvisioningToken: new FormControl<string | null | undefined>(undefined),
			sectionType: new FormControl<ClaimDeviceRequestSectionType | null | undefined>(undefined),
			simlockProfileId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A reseller, vendor, or customer in the zero-touch reseller and customer APIs. */
	export interface Company {

		/** Optional. Email address of customer's users in the admin role. Each email address must be associated with a Google Account. */
		adminEmails?: Array<string>;

		/** Output only. The ID of the company. Assigned by the server. */
		companyId?: string | null;

		/** Required. The name of the company. For example _XYZ Corp_. Displayed to the company's employees in the zero-touch enrollment portal. */
		companyName?: string | null;

		/** A Google Workspace customer. */
		googleWorkspaceAccount?: GoogleWorkspaceAccount;

		/** Input only. The preferred locale of the customer represented as a BCP47 language code. This field is validated on input and requests containing unsupported language codes will be rejected. Supported language codes: Arabic (ar) Chinese (Hong Kong) (zh-HK) Chinese (Simplified) (zh-CN) Chinese (Traditional) (zh-TW) Czech (cs) Danish (da) Dutch (nl) English (UK) (en-GB) English (US) (en-US) Filipino (fil) Finnish (fi) French (fr) German (de) Hebrew (iw) Hindi (hi) Hungarian (hu) Indonesian (id) Italian (it) Japanese (ja) Korean (ko) Norwegian (Bokmal) (no) Polish (pl) Portuguese (Brazil) (pt-BR) Portuguese (Portugal) (pt-PT) Russian (ru) Spanish (es) Spanish (Latin America) (es-419) Swedish (sv) Thai (th) Turkish (tr) Ukrainian (uk) Vietnamese (vi) */
		languageCode?: string | null;

		/** Output only. The API resource name of the company. The resource name is one of the following formats: * `partners/[PARTNER_ID]/customers/[CUSTOMER_ID]` * `partners/[PARTNER_ID]/vendors/[VENDOR_ID]` * `partners/[PARTNER_ID]/vendors/[VENDOR_ID]/customers/[CUSTOMER_ID]` Assigned by the server. */
		name?: string | null;

		/** Required. Input only. Email address of customer's users in the owner role. At least one `owner_email` is required. Owners share the same access as admins but can also add, delete, and edit your organization's portal users. */
		ownerEmails?: Array<string>;

		/** Input only. If set to true, welcome email will not be sent to the customer. It is recommended to skip the welcome email if devices will be claimed with additional DEVICE_PROTECTION service, as the customer will receive separate emails at device claim time. This field is ignored if this is not a Zero-touch customer. */
		skipWelcomeEmail?: boolean | null;

		/** Output only. Whether any user from the company has accepted the latest Terms of Service (ToS). See TermsStatus. */
		termsStatus?: CompanyTermsStatus | null;
	}

	/** A reseller, vendor, or customer in the zero-touch reseller and customer APIs. */
	export interface CompanyFormProperties {

		/** Output only. The ID of the company. Assigned by the server. */
		companyId: FormControl<string | null | undefined>,

		/** Required. The name of the company. For example _XYZ Corp_. Displayed to the company's employees in the zero-touch enrollment portal. */
		companyName: FormControl<string | null | undefined>,

		/** Input only. The preferred locale of the customer represented as a BCP47 language code. This field is validated on input and requests containing unsupported language codes will be rejected. Supported language codes: Arabic (ar) Chinese (Hong Kong) (zh-HK) Chinese (Simplified) (zh-CN) Chinese (Traditional) (zh-TW) Czech (cs) Danish (da) Dutch (nl) English (UK) (en-GB) English (US) (en-US) Filipino (fil) Finnish (fi) French (fr) German (de) Hebrew (iw) Hindi (hi) Hungarian (hu) Indonesian (id) Italian (it) Japanese (ja) Korean (ko) Norwegian (Bokmal) (no) Polish (pl) Portuguese (Brazil) (pt-BR) Portuguese (Portugal) (pt-PT) Russian (ru) Spanish (es) Spanish (Latin America) (es-419) Swedish (sv) Thai (th) Turkish (tr) Ukrainian (uk) Vietnamese (vi) */
		languageCode: FormControl<string | null | undefined>,

		/** Output only. The API resource name of the company. The resource name is one of the following formats: * `partners/[PARTNER_ID]/customers/[CUSTOMER_ID]` * `partners/[PARTNER_ID]/vendors/[VENDOR_ID]` * `partners/[PARTNER_ID]/vendors/[VENDOR_ID]/customers/[CUSTOMER_ID]` Assigned by the server. */
		name: FormControl<string | null | undefined>,

		/** Input only. If set to true, welcome email will not be sent to the customer. It is recommended to skip the welcome email if devices will be claimed with additional DEVICE_PROTECTION service, as the customer will receive separate emails at device claim time. This field is ignored if this is not a Zero-touch customer. */
		skipWelcomeEmail: FormControl<boolean | null | undefined>,

		/** Output only. Whether any user from the company has accepted the latest Terms of Service (ToS). See TermsStatus. */
		termsStatus: FormControl<CompanyTermsStatus | null | undefined>,
	}
	export function CreateCompanyFormGroup() {
		return new FormGroup<CompanyFormProperties>({
			companyId: new FormControl<string | null | undefined>(undefined),
			companyName: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			skipWelcomeEmail: new FormControl<boolean | null | undefined>(undefined),
			termsStatus: new FormControl<CompanyTermsStatus | null | undefined>(undefined),
		});

	}


	/** A Google Workspace customer. */
	export interface GoogleWorkspaceAccount {

		/** Required. The customer ID. */
		customerId?: string | null;

		/** Output only. The pre-provisioning tokens previously used to claim devices. */
		preProvisioningTokens?: Array<string>;
	}

	/** A Google Workspace customer. */
	export interface GoogleWorkspaceAccountFormProperties {

		/** Required. The customer ID. */
		customerId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleWorkspaceAccountFormGroup() {
		return new FormGroup<GoogleWorkspaceAccountFormProperties>({
			customerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CompanyTermsStatus { TERMS_STATUS_UNSPECIFIED = 'TERMS_STATUS_UNSPECIFIED', TERMS_STATUS_NOT_ACCEPTED = 'TERMS_STATUS_NOT_ACCEPTED', TERMS_STATUS_ACCEPTED = 'TERMS_STATUS_ACCEPTED', TERMS_STATUS_STALE = 'TERMS_STATUS_STALE' }


	/** A configuration collects the provisioning options for Android devices. Each configuration combines the following: * The EMM device policy controller (DPC) installed on the devices. * EMM policies enforced on the devices. * Metadata displayed on the device to help users during setup. Customers can add as many configurations as they need. However, zero-touch enrollment works best when a customer sets a default configuration that's applied to any new devices the organization purchases. */
	export interface Configuration {

		/** Required. The name of the organization. Zero-touch enrollment shows this organization name to device users during device provisioning. */
		companyName?: string | null;

		/** Output only. The ID of the configuration. Assigned by the server. */
		configurationId?: string | null;

		/** Required. A short name that describes the configuration's purpose. For example, _Sales team_ or _Temporary employees_. The zero-touch enrollment portal displays this name to IT admins. */
		configurationName?: string | null;

		/** Required. The email address that device users can contact to get help. Zero-touch enrollment shows this email address to device users before device provisioning. The value is validated on input. */
		contactEmail?: string | null;

		/** Required. The telephone number that device users can call, using another device, to get help. Zero-touch enrollment shows this number to device users before device provisioning. Accepts numerals, spaces, the plus sign, hyphens, and parentheses. */
		contactPhone?: string | null;

		/** A message, containing one or two sentences, to help device users get help or give them more details about what’s happening to their device. Zero-touch enrollment shows this message before the device is provisioned. */
		customMessage?: string | null;

		/** The JSON-formatted EMM provisioning extras that are passed to the DPC. */
		dpcExtras?: string | null;

		/** Required. The resource name of the selected DPC (device policy controller) in the format `customers/[CUSTOMER_ID]/dpcs/*`. To list the supported DPCs, call `customers.dpcs.list`. */
		dpcResourcePath?: string | null;

		/** Optional. The timeout before forcing factory reset the device if the device doesn't go through provisioning in the setup wizard, usually due to lack of network connectivity during setup wizard. Ranges from 0-6 hours, with 2 hours being the default if unset. */
		forcedResetTime?: string | null;

		/** Required. Whether this is the default configuration that zero-touch enrollment applies to any new devices the organization purchases in the future. Only one customer configuration can be the default. Setting this value to `true`, changes the previous default configuration's `isDefault` value to `false`. */
		isDefault?: boolean | null;

		/** Output only. The API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. Assigned by the server. */
		name?: string | null;
	}

	/** A configuration collects the provisioning options for Android devices. Each configuration combines the following: * The EMM device policy controller (DPC) installed on the devices. * EMM policies enforced on the devices. * Metadata displayed on the device to help users during setup. Customers can add as many configurations as they need. However, zero-touch enrollment works best when a customer sets a default configuration that's applied to any new devices the organization purchases. */
	export interface ConfigurationFormProperties {

		/** Required. The name of the organization. Zero-touch enrollment shows this organization name to device users during device provisioning. */
		companyName: FormControl<string | null | undefined>,

		/** Output only. The ID of the configuration. Assigned by the server. */
		configurationId: FormControl<string | null | undefined>,

		/** Required. A short name that describes the configuration's purpose. For example, _Sales team_ or _Temporary employees_. The zero-touch enrollment portal displays this name to IT admins. */
		configurationName: FormControl<string | null | undefined>,

		/** Required. The email address that device users can contact to get help. Zero-touch enrollment shows this email address to device users before device provisioning. The value is validated on input. */
		contactEmail: FormControl<string | null | undefined>,

		/** Required. The telephone number that device users can call, using another device, to get help. Zero-touch enrollment shows this number to device users before device provisioning. Accepts numerals, spaces, the plus sign, hyphens, and parentheses. */
		contactPhone: FormControl<string | null | undefined>,

		/** A message, containing one or two sentences, to help device users get help or give them more details about what’s happening to their device. Zero-touch enrollment shows this message before the device is provisioned. */
		customMessage: FormControl<string | null | undefined>,

		/** The JSON-formatted EMM provisioning extras that are passed to the DPC. */
		dpcExtras: FormControl<string | null | undefined>,

		/** Required. The resource name of the selected DPC (device policy controller) in the format `customers/[CUSTOMER_ID]/dpcs/*`. To list the supported DPCs, call `customers.dpcs.list`. */
		dpcResourcePath: FormControl<string | null | undefined>,

		/** Optional. The timeout before forcing factory reset the device if the device doesn't go through provisioning in the setup wizard, usually due to lack of network connectivity during setup wizard. Ranges from 0-6 hours, with 2 hours being the default if unset. */
		forcedResetTime: FormControl<string | null | undefined>,

		/** Required. Whether this is the default configuration that zero-touch enrollment applies to any new devices the organization purchases in the future. Only one customer configuration can be the default. Setting this value to `true`, changes the previous default configuration's `isDefault` value to `false`. */
		isDefault: FormControl<boolean | null | undefined>,

		/** Output only. The API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. Assigned by the server. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationFormGroup() {
		return new FormGroup<ConfigurationFormProperties>({
			companyName: new FormControl<string | null | undefined>(undefined),
			configurationId: new FormControl<string | null | undefined>(undefined),
			configurationName: new FormControl<string | null | undefined>(undefined),
			contactEmail: new FormControl<string | null | undefined>(undefined),
			contactPhone: new FormControl<string | null | undefined>(undefined),
			customMessage: new FormControl<string | null | undefined>(undefined),
			dpcExtras: new FormControl<string | null | undefined>(undefined),
			dpcResourcePath: new FormControl<string | null | undefined>(undefined),
			forcedResetTime: new FormControl<string | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message to create a customer. */
	export interface CreateCustomerRequest {

		/** A reseller, vendor, or customer in the zero-touch reseller and customer APIs. */
		customer?: Company;
	}

	/** Request message to create a customer. */
	export interface CreateCustomerRequestFormProperties {
	}
	export function CreateCreateCustomerRequestFormGroup() {
		return new FormGroup<CreateCustomerRequestFormProperties>({
		});

	}


	/** Request message for customer to assign a configuration to device. */
	export interface CustomerApplyConfigurationRequest {

		/** Required. The configuration applied to the device in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. */
		configuration?: string | null;

		/** A `DeviceReference` is an API abstraction that lets you supply a _device_ argument to a method using one of the following identifier types: * A numeric API resource ID. * Real-world hardware IDs, such as IMEI number, belonging to the manufactured device. Methods that operate on devices take a `DeviceReference` as a parameter type because it's more flexible for the caller. To learn more about device identifiers, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers). */
		device?: DeviceReference;
	}

	/** Request message for customer to assign a configuration to device. */
	export interface CustomerApplyConfigurationRequestFormProperties {

		/** Required. The configuration applied to the device in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. */
		configuration: FormControl<string | null | undefined>,
	}
	export function CreateCustomerApplyConfigurationRequestFormGroup() {
		return new FormGroup<CustomerApplyConfigurationRequestFormProperties>({
			configuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A `DeviceReference` is an API abstraction that lets you supply a _device_ argument to a method using one of the following identifier types: * A numeric API resource ID. * Real-world hardware IDs, such as IMEI number, belonging to the manufactured device. Methods that operate on devices take a `DeviceReference` as a parameter type because it's more flexible for the caller. To learn more about device identifiers, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers). */
	export interface DeviceReference {

		/** The ID of the device. */
		deviceId?: string | null;

		/** Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers). */
		deviceIdentifier?: DeviceIdentifier;
	}

	/** A `DeviceReference` is an API abstraction that lets you supply a _device_ argument to a method using one of the following identifier types: * A numeric API resource ID. * Real-world hardware IDs, such as IMEI number, belonging to the manufactured device. Methods that operate on devices take a `DeviceReference` as a parameter type because it's more flexible for the caller. To learn more about device identifiers, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers). */
	export interface DeviceReferenceFormProperties {

		/** The ID of the device. */
		deviceId: FormControl<string | null | undefined>,
	}
	export function CreateDeviceReferenceFormGroup() {
		return new FormGroup<DeviceReferenceFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message of customer's listing configuration. */
	export interface CustomerListConfigurationsResponse {

		/** The configurations. */
		configurations?: Array<Configuration>;
	}

	/** Response message of customer's listing configuration. */
	export interface CustomerListConfigurationsResponseFormProperties {
	}
	export function CreateCustomerListConfigurationsResponseFormGroup() {
		return new FormGroup<CustomerListConfigurationsResponseFormProperties>({
		});

	}


	/** Response message for listing my customers. */
	export interface CustomerListCustomersResponse {

		/** The customer accounts the calling user is a member of. */
		customers?: Array<Company>;

		/** A token used to access the next page of results. Omitted if no further results are available. */
		nextPageToken?: string | null;
	}

	/** Response message for listing my customers. */
	export interface CustomerListCustomersResponseFormProperties {

		/** A token used to access the next page of results. Omitted if no further results are available. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateCustomerListCustomersResponseFormGroup() {
		return new FormGroup<CustomerListCustomersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message of customer's liting devices. */
	export interface CustomerListDevicesResponse {

		/** The customer's devices. */
		devices?: Array<Device>;

		/** A token used to access the next page of results. Omitted if no further results are available. */
		nextPageToken?: string | null;
	}

	/** Response message of customer's liting devices. */
	export interface CustomerListDevicesResponseFormProperties {

		/** A token used to access the next page of results. Omitted if no further results are available. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateCustomerListDevicesResponseFormGroup() {
		return new FormGroup<CustomerListDevicesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Android or Chrome OS device registered for zero-touch enrollment. */
	export interface Device {

		/** Output only. The provisioning claims for a device. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. Call `partners.devices.unclaim` or `partners.devices.unclaimAsync` to remove the device from zero-touch enrollment. */
		claims?: Array<DeviceClaim>;

		/** Not available to resellers. */
		configuration?: string | null;

		/** Output only. The ID of the device. Assigned by the server. */
		deviceId?: string | null;

		/** Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers). */
		deviceIdentifier?: DeviceIdentifier;

		/** Metadata entries that can be attached to a `Device`. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata). */
		deviceMetadata?: DeviceMetadata;

		/** Output only. The API resource name in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`. Assigned by the server. */
		name?: string | null;
	}

	/** An Android or Chrome OS device registered for zero-touch enrollment. */
	export interface DeviceFormProperties {

		/** Not available to resellers. */
		configuration: FormControl<string | null | undefined>,

		/** Output only. The ID of the device. Assigned by the server. */
		deviceId: FormControl<string | null | undefined>,

		/** Output only. The API resource name in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`. Assigned by the server. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			configuration: new FormControl<string | null | undefined>(undefined),
			deviceId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A record of a device claimed by a reseller for a customer. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. To learn more, read [Claim devices for customers](/zero-touch/guides/how-it-works#claim). */
	export interface DeviceClaim {

		/** The Additional service registered for the device. */
		additionalService?: DeviceClaimAdditionalService | null;

		/** The ID of the Google Workspace account that owns the Chrome OS device. */
		googleWorkspaceCustomerId?: string | null;

		/** The ID of the Customer that purchased the device. */
		ownerCompanyId?: string | null;

		/** The ID of the reseller that claimed the device. */
		resellerId?: string | null;

		/** Output only. The type of claim made on the device. */
		sectionType?: ClaimDeviceRequestSectionType | null;

		/** The timestamp when the device will exit ‘vacation mode’. This value is present iff the device is in 'vacation mode'. */
		vacationModeExpireTime?: string | null;

		/** The timestamp when the device was put into ‘vacation mode’. This value is present iff the device is in 'vacation mode'. */
		vacationModeStartTime?: string | null;
	}

	/** A record of a device claimed by a reseller for a customer. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. To learn more, read [Claim devices for customers](/zero-touch/guides/how-it-works#claim). */
	export interface DeviceClaimFormProperties {

		/** The Additional service registered for the device. */
		additionalService: FormControl<DeviceClaimAdditionalService | null | undefined>,

		/** The ID of the Google Workspace account that owns the Chrome OS device. */
		googleWorkspaceCustomerId: FormControl<string | null | undefined>,

		/** The ID of the Customer that purchased the device. */
		ownerCompanyId: FormControl<string | null | undefined>,

		/** The ID of the reseller that claimed the device. */
		resellerId: FormControl<string | null | undefined>,

		/** Output only. The type of claim made on the device. */
		sectionType: FormControl<ClaimDeviceRequestSectionType | null | undefined>,

		/** The timestamp when the device will exit ‘vacation mode’. This value is present iff the device is in 'vacation mode'. */
		vacationModeExpireTime: FormControl<string | null | undefined>,

		/** The timestamp when the device was put into ‘vacation mode’. This value is present iff the device is in 'vacation mode'. */
		vacationModeStartTime: FormControl<string | null | undefined>,
	}
	export function CreateDeviceClaimFormGroup() {
		return new FormGroup<DeviceClaimFormProperties>({
			additionalService: new FormControl<DeviceClaimAdditionalService | null | undefined>(undefined),
			googleWorkspaceCustomerId: new FormControl<string | null | undefined>(undefined),
			ownerCompanyId: new FormControl<string | null | undefined>(undefined),
			resellerId: new FormControl<string | null | undefined>(undefined),
			sectionType: new FormControl<ClaimDeviceRequestSectionType | null | undefined>(undefined),
			vacationModeExpireTime: new FormControl<string | null | undefined>(undefined),
			vacationModeStartTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeviceClaimAdditionalService { ADDITIONAL_SERVICE_UNSPECIFIED = 'ADDITIONAL_SERVICE_UNSPECIFIED', DEVICE_PROTECTION = 'DEVICE_PROTECTION' }


	/** Response message of customer's listing DPCs. */
	export interface CustomerListDpcsResponse {

		/** The list of DPCs available to the customer that support zero-touch enrollment. */
		dpcs?: Array<Dpc>;
	}

	/** Response message of customer's listing DPCs. */
	export interface CustomerListDpcsResponseFormProperties {
	}
	export function CreateCustomerListDpcsResponseFormGroup() {
		return new FormGroup<CustomerListDpcsResponseFormProperties>({
		});

	}


	/** An EMM's DPC ([device policy controller](http://developer.android.com/work/dpc/build-dpc.html)). Zero-touch enrollment installs a DPC (listed in the `Configuration`) on a device to maintain the customer's mobile policies. All the DPCs listed by the API support zero-touch enrollment and are available in Google Play. */
	export interface Dpc {

		/** Output only. The title of the DPC app in Google Play. For example, _Google Apps Device Policy_. Useful in an application's user interface. */
		dpcName?: string | null;

		/** Output only. The API resource name in the format `customers/[CUSTOMER_ID]/dpcs/[DPC_ID]`. Assigned by the server. To maintain a reference to a DPC across customer accounts, persist and match the last path component (`DPC_ID`). */
		name?: string | null;

		/** Output only. The DPC's Android application ID that looks like a Java package name. Zero-touch enrollment installs the DPC app onto a device using this identifier. */
		packageName?: string | null;
	}

	/** An EMM's DPC ([device policy controller](http://developer.android.com/work/dpc/build-dpc.html)). Zero-touch enrollment installs a DPC (listed in the `Configuration`) on a device to maintain the customer's mobile policies. All the DPCs listed by the API support zero-touch enrollment and are available in Google Play. */
	export interface DpcFormProperties {

		/** Output only. The title of the DPC app in Google Play. For example, _Google Apps Device Policy_. Useful in an application's user interface. */
		dpcName: FormControl<string | null | undefined>,

		/** Output only. The API resource name in the format `customers/[CUSTOMER_ID]/dpcs/[DPC_ID]`. Assigned by the server. To maintain a reference to a DPC across customer accounts, persist and match the last path component (`DPC_ID`). */
		name: FormControl<string | null | undefined>,

		/** Output only. The DPC's Android application ID that looks like a Java package name. Zero-touch enrollment installs the DPC app onto a device using this identifier. */
		packageName: FormControl<string | null | undefined>,
	}
	export function CreateDpcFormGroup() {
		return new FormGroup<DpcFormProperties>({
			dpcName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for customer to remove the configuration from device. */
	export interface CustomerRemoveConfigurationRequest {

		/** A `DeviceReference` is an API abstraction that lets you supply a _device_ argument to a method using one of the following identifier types: * A numeric API resource ID. * Real-world hardware IDs, such as IMEI number, belonging to the manufactured device. Methods that operate on devices take a `DeviceReference` as a parameter type because it's more flexible for the caller. To learn more about device identifiers, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers). */
		device?: DeviceReference;
	}

	/** Request message for customer to remove the configuration from device. */
	export interface CustomerRemoveConfigurationRequestFormProperties {
	}
	export function CreateCustomerRemoveConfigurationRequestFormGroup() {
		return new FormGroup<CustomerRemoveConfigurationRequestFormProperties>({
		});

	}


	/** Request message for customer to unclaim a device. */
	export interface CustomerUnclaimDeviceRequest {

		/** A `DeviceReference` is an API abstraction that lets you supply a _device_ argument to a method using one of the following identifier types: * A numeric API resource ID. * Real-world hardware IDs, such as IMEI number, belonging to the manufactured device. Methods that operate on devices take a `DeviceReference` as a parameter type because it's more flexible for the caller. To learn more about device identifiers, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers). */
		device?: DeviceReference;
	}

	/** Request message for customer to unclaim a device. */
	export interface CustomerUnclaimDeviceRequestFormProperties {
	}
	export function CreateCustomerUnclaimDeviceRequestFormGroup() {
		return new FormGroup<CustomerUnclaimDeviceRequestFormProperties>({
		});

	}


	/** Tracks the status of a long-running operation to asynchronously update a batch of reseller metadata attached to devices. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). */
	export interface DevicesLongRunningOperationMetadata {

		/** The number of metadata updates in the operation. This might be different from the number of updates in the request if the API can't parse some of the updates. */
		devicesCount?: number | null;

		/** The processing status of the operation. */
		processingStatus?: DevicesLongRunningOperationMetadataProcessingStatus | null;

		/** The processing progress of the operation. Measured as a number from 0 to 100. A value of 10O doesn't always mean the operation completed—check for the inclusion of a `done` field. */
		progress?: number | null;
	}

	/** Tracks the status of a long-running operation to asynchronously update a batch of reseller metadata attached to devices. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). */
	export interface DevicesLongRunningOperationMetadataFormProperties {

		/** The number of metadata updates in the operation. This might be different from the number of updates in the request if the API can't parse some of the updates. */
		devicesCount: FormControl<number | null | undefined>,

		/** The processing status of the operation. */
		processingStatus: FormControl<DevicesLongRunningOperationMetadataProcessingStatus | null | undefined>,

		/** The processing progress of the operation. Measured as a number from 0 to 100. A value of 10O doesn't always mean the operation completed—check for the inclusion of a `done` field. */
		progress: FormControl<number | null | undefined>,
	}
	export function CreateDevicesLongRunningOperationMetadataFormGroup() {
		return new FormGroup<DevicesLongRunningOperationMetadataFormProperties>({
			devicesCount: new FormControl<number | null | undefined>(undefined),
			processingStatus: new FormControl<DevicesLongRunningOperationMetadataProcessingStatus | null | undefined>(undefined),
			progress: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DevicesLongRunningOperationMetadataProcessingStatus { BATCH_PROCESS_STATUS_UNSPECIFIED = 'BATCH_PROCESS_STATUS_UNSPECIFIED', BATCH_PROCESS_PENDING = 'BATCH_PROCESS_PENDING', BATCH_PROCESS_IN_PROGRESS = 'BATCH_PROCESS_IN_PROGRESS', BATCH_PROCESS_PROCESSED = 'BATCH_PROCESS_PROCESSED' }


	/** Tracks the status of a long-running operation to claim, unclaim, or attach metadata to devices. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). */
	export interface DevicesLongRunningOperationResponse {

		/** The processing status for each device in the operation. One `PerDeviceStatus` per device. The list order matches the items in the original request. */
		perDeviceStatus?: Array<OperationPerDevice>;

		/** A summary of how many items in the operation the server processed successfully. Updated as the operation progresses. */
		successCount?: number | null;
	}

	/** Tracks the status of a long-running operation to claim, unclaim, or attach metadata to devices. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). */
	export interface DevicesLongRunningOperationResponseFormProperties {

		/** A summary of how many items in the operation the server processed successfully. Updated as the operation progresses. */
		successCount: FormControl<number | null | undefined>,
	}
	export function CreateDevicesLongRunningOperationResponseFormGroup() {
		return new FormGroup<DevicesLongRunningOperationResponseFormProperties>({
			successCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A task for each device in the operation. Corresponds to each device change in the request. */
	export interface OperationPerDevice {

		/** Identifies one claim request. */
		claim?: PartnerClaim;

		/** Captures the processing status for each device in the operation. */
		result?: PerDeviceStatusInBatch;

		/** Identifies one unclaim request. */
		unclaim?: PartnerUnclaim;

		/** Identifies metadata updates to one device. */
		updateMetadata?: UpdateMetadataArguments;
	}

	/** A task for each device in the operation. Corresponds to each device change in the request. */
	export interface OperationPerDeviceFormProperties {
	}
	export function CreateOperationPerDeviceFormGroup() {
		return new FormGroup<OperationPerDeviceFormProperties>({
		});

	}


	/** Captures the processing status for each device in the operation. */
	export interface PerDeviceStatusInBatch {

		/** If processing succeeds, the device ID of the device. */
		deviceId?: string | null;

		/** If processing fails, the error type. */
		errorIdentifier?: string | null;

		/** If processing fails, a developer message explaining what went wrong. */
		errorMessage?: string | null;

		/** The result status of the device after processing. */
		status?: PerDeviceStatusInBatchStatus | null;
	}

	/** Captures the processing status for each device in the operation. */
	export interface PerDeviceStatusInBatchFormProperties {

		/** If processing succeeds, the device ID of the device. */
		deviceId: FormControl<string | null | undefined>,

		/** If processing fails, the error type. */
		errorIdentifier: FormControl<string | null | undefined>,

		/** If processing fails, a developer message explaining what went wrong. */
		errorMessage: FormControl<string | null | undefined>,

		/** The result status of the device after processing. */
		status: FormControl<PerDeviceStatusInBatchStatus | null | undefined>,
	}
	export function CreatePerDeviceStatusInBatchFormGroup() {
		return new FormGroup<PerDeviceStatusInBatchFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined),
			errorIdentifier: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PerDeviceStatusInBatchStatus | null | undefined>(undefined),
		});

	}

	export enum PerDeviceStatusInBatchStatus { SINGLE_DEVICE_STATUS_UNSPECIFIED = 'SINGLE_DEVICE_STATUS_UNSPECIFIED', SINGLE_DEVICE_STATUS_UNKNOWN_ERROR = 'SINGLE_DEVICE_STATUS_UNKNOWN_ERROR', SINGLE_DEVICE_STATUS_OTHER_ERROR = 'SINGLE_DEVICE_STATUS_OTHER_ERROR', SINGLE_DEVICE_STATUS_SUCCESS = 'SINGLE_DEVICE_STATUS_SUCCESS', SINGLE_DEVICE_STATUS_PERMISSION_DENIED = 'SINGLE_DEVICE_STATUS_PERMISSION_DENIED', SINGLE_DEVICE_STATUS_INVALID_DEVICE_IDENTIFIER = 'SINGLE_DEVICE_STATUS_INVALID_DEVICE_IDENTIFIER', SINGLE_DEVICE_STATUS_INVALID_SECTION_TYPE = 'SINGLE_DEVICE_STATUS_INVALID_SECTION_TYPE', SINGLE_DEVICE_STATUS_SECTION_NOT_YOURS = 'SINGLE_DEVICE_STATUS_SECTION_NOT_YOURS', SINGLE_DEVICE_STATUS_INVALID_TOKEN = 'SINGLE_DEVICE_STATUS_INVALID_TOKEN', SINGLE_DEVICE_STATUS_REVOKED_TOKEN = 'SINGLE_DEVICE_STATUS_REVOKED_TOKEN', SINGLE_DEVICE_STATUS_DEVICE_LIMIT_EXCEEDED = 'SINGLE_DEVICE_STATUS_DEVICE_LIMIT_EXCEEDED' }


	/** Identifies one unclaim request. */
	export interface PartnerUnclaim {

		/** Required. Device ID of the device. */
		deviceId?: string | null;

		/** Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers). */
		deviceIdentifier?: DeviceIdentifier;

		/** Required. The section type of the device's provisioning record. */
		sectionType?: ClaimDeviceRequestSectionType | null;

		/** Optional. The duration of the vacation unlock starting from when the request is processed. (1 day is treated as 24 hours) */
		vacationModeDays?: number | null;

		/** Optional. The expiration time of the vacation unlock. */
		vacationModeExpireTime?: string | null;
	}

	/** Identifies one unclaim request. */
	export interface PartnerUnclaimFormProperties {

		/** Required. Device ID of the device. */
		deviceId: FormControl<string | null | undefined>,

		/** Required. The section type of the device's provisioning record. */
		sectionType: FormControl<ClaimDeviceRequestSectionType | null | undefined>,

		/** Optional. The duration of the vacation unlock starting from when the request is processed. (1 day is treated as 24 hours) */
		vacationModeDays: FormControl<number | null | undefined>,

		/** Optional. The expiration time of the vacation unlock. */
		vacationModeExpireTime: FormControl<string | null | undefined>,
	}
	export function CreatePartnerUnclaimFormGroup() {
		return new FormGroup<PartnerUnclaimFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined),
			sectionType: new FormControl<ClaimDeviceRequestSectionType | null | undefined>(undefined),
			vacationModeDays: new FormControl<number | null | undefined>(undefined),
			vacationModeExpireTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies metadata updates to one device. */
	export interface UpdateMetadataArguments {

		/** Required. Device ID of the device. */
		deviceId?: string | null;

		/** Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers). */
		deviceIdentifier?: DeviceIdentifier;

		/** Metadata entries that can be attached to a `Device`. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata). */
		deviceMetadata?: DeviceMetadata;
	}

	/** Identifies metadata updates to one device. */
	export interface UpdateMetadataArgumentsFormProperties {

		/** Required. Device ID of the device. */
		deviceId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMetadataArgumentsFormGroup() {
		return new FormGroup<UpdateMetadataArgumentsFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined),
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


	/** Request to find devices. */
	export interface FindDevicesByDeviceIdentifierRequest {

		/** Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers). */
		deviceIdentifier?: DeviceIdentifier;

		/** Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive. */
		limit?: string | null;

		/** A token specifying which result page to return. */
		pageToken?: string | null;
	}

	/** Request to find devices. */
	export interface FindDevicesByDeviceIdentifierRequestFormProperties {

		/** Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive. */
		limit: FormControl<string | null | undefined>,

		/** A token specifying which result page to return. */
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateFindDevicesByDeviceIdentifierRequestFormGroup() {
		return new FormGroup<FindDevicesByDeviceIdentifierRequestFormProperties>({
			limit: new FormControl<string | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing found devices. */
	export interface FindDevicesByDeviceIdentifierResponse {

		/** Found devices. */
		devices?: Array<Device>;

		/** A token used to access the next page of results. Omitted if no further results are available. */
		nextPageToken?: string | null;

		/** The total count of items in the list irrespective of pagination. */
		totalSize?: number | null;
	}

	/** Response containing found devices. */
	export interface FindDevicesByDeviceIdentifierResponseFormProperties {

		/** A token used to access the next page of results. Omitted if no further results are available. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total count of items in the list irrespective of pagination. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateFindDevicesByDeviceIdentifierResponseFormGroup() {
		return new FormGroup<FindDevicesByDeviceIdentifierResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request to find devices by customers. */
	export interface FindDevicesByOwnerRequest {

		/** The list of customer IDs to search for. */
		customerId?: Array<string>;

		/** The list of IDs of Google Workspace accounts to search for. */
		googleWorkspaceCustomerId?: Array<string>;

		/** Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive. */
		limit?: string | null;

		/** A token specifying which result page to return. */
		pageToken?: string | null;

		/** Required. The section type of the device's provisioning record. */
		sectionType?: ClaimDeviceRequestSectionType | null;
	}

	/** Request to find devices by customers. */
	export interface FindDevicesByOwnerRequestFormProperties {

		/** Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive. */
		limit: FormControl<string | null | undefined>,

		/** A token specifying which result page to return. */
		pageToken: FormControl<string | null | undefined>,

		/** Required. The section type of the device's provisioning record. */
		sectionType: FormControl<ClaimDeviceRequestSectionType | null | undefined>,
	}
	export function CreateFindDevicesByOwnerRequestFormGroup() {
		return new FormGroup<FindDevicesByOwnerRequestFormProperties>({
			limit: new FormControl<string | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			sectionType: new FormControl<ClaimDeviceRequestSectionType | null | undefined>(undefined),
		});

	}


	/** Response containing found devices. */
	export interface FindDevicesByOwnerResponse {

		/** The customer's devices. */
		devices?: Array<Device>;

		/** A token used to access the next page of results. Omitted if no further results are available. */
		nextPageToken?: string | null;

		/** The total count of items in the list irrespective of pagination. */
		totalSize?: number | null;
	}

	/** Response containing found devices. */
	export interface FindDevicesByOwnerResponseFormProperties {

		/** A token used to access the next page of results. Omitted if no further results are available. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total count of items in the list irrespective of pagination. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateFindDevicesByOwnerResponseFormGroup() {
		return new FormGroup<FindDevicesByOwnerResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request to get a device's SIM lock status. */
	export interface GetDeviceSimLockStateRequest {

		/** Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers). */
		deviceIdentifier?: DeviceIdentifier;
	}

	/** Request to get a device's SIM lock status. */
	export interface GetDeviceSimLockStateRequestFormProperties {
	}
	export function CreateGetDeviceSimLockStateRequestFormGroup() {
		return new FormGroup<GetDeviceSimLockStateRequestFormProperties>({
		});

	}


	/** Response containing a device's SimLock state. */
	export interface GetDeviceSimLockStateResponse {
		simLockState?: GetDeviceSimLockStateResponseSimLockState | null;
	}

	/** Response containing a device's SimLock state. */
	export interface GetDeviceSimLockStateResponseFormProperties {
		simLockState: FormControl<GetDeviceSimLockStateResponseSimLockState | null | undefined>,
	}
	export function CreateGetDeviceSimLockStateResponseFormGroup() {
		return new FormGroup<GetDeviceSimLockStateResponseFormProperties>({
			simLockState: new FormControl<GetDeviceSimLockStateResponseSimLockState | null | undefined>(undefined),
		});

	}

	export enum GetDeviceSimLockStateResponseSimLockState { SIM_LOCK_STATE_UNSPECIFIED = 'SIM_LOCK_STATE_UNSPECIFIED', UNLOCKED = 'UNLOCKED', LOCKED_TO_PARTNER = 'LOCKED_TO_PARTNER', LOCKED_TO_OTHER_PARTNER = 'LOCKED_TO_OTHER_PARTNER' }


	/** Response message of all customers related to this partner. */
	export interface ListCustomersResponse {

		/** List of customers related to this reseller partner. */
		customers?: Array<Company>;

		/** A token to retrieve the next page of results. Omitted if no further results are available. */
		nextPageToken?: string | null;

		/** The total count of items in the list irrespective of pagination. */
		totalSize?: number | null;
	}

	/** Response message of all customers related to this partner. */
	export interface ListCustomersResponseFormProperties {

		/** A token to retrieve the next page of results. Omitted if no further results are available. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total count of items in the list irrespective of pagination. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListCustomersResponseFormGroup() {
		return new FormGroup<ListCustomersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message to list customers of the vendor. */
	export interface ListVendorCustomersResponse {

		/** List of customers of the vendor. */
		customers?: Array<Company>;

		/** A token to retrieve the next page of results. Omitted if no further results are available. */
		nextPageToken?: string | null;

		/** The total count of items in the list irrespective of pagination. */
		totalSize?: number | null;
	}

	/** Response message to list customers of the vendor. */
	export interface ListVendorCustomersResponseFormProperties {

		/** A token to retrieve the next page of results. Omitted if no further results are available. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total count of items in the list irrespective of pagination. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListVendorCustomersResponseFormGroup() {
		return new FormGroup<ListVendorCustomersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message to list vendors of the partner. */
	export interface ListVendorsResponse {

		/** A token to retrieve the next page of results. Omitted if no further results are available. */
		nextPageToken?: string | null;

		/** The total count of items in the list irrespective of pagination. */
		totalSize?: number | null;

		/** List of vendors of the reseller partner. Fields `name`, `companyId` and `companyName` are populated to the Company object. */
		vendors?: Array<Company>;
	}

	/** Response message to list vendors of the partner. */
	export interface ListVendorsResponseFormProperties {

		/** A token to retrieve the next page of results. Omitted if no further results are available. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total count of items in the list irrespective of pagination. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListVendorsResponseFormGroup() {
		return new FormGroup<ListVendorsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** This field will contain a `DevicesLongRunningOperationMetadata` object if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** This field will contain a `DevicesLongRunningOperationResponse` object if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** This field will contain a `DevicesLongRunningOperationMetadata` object if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** This field will contain a `DevicesLongRunningOperationResponse` object if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`. */
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


	/** Request message to unclaim a device. */
	export interface UnclaimDeviceRequest {

		/** Required. The device ID returned by `ClaimDevice`. */
		deviceId?: string | null;

		/** Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers). */
		deviceIdentifier?: DeviceIdentifier;

		/** Required. The section type of the device's provisioning record. */
		sectionType?: ClaimDeviceRequestSectionType | null;

		/** The duration of the vacation unlock starting from when the request is processed. (1 day is treated as 24 hours) */
		vacationModeDays?: number | null;

		/** The expiration time of the vacation unlock. */
		vacationModeExpireTime?: string | null;
	}

	/** Request message to unclaim a device. */
	export interface UnclaimDeviceRequestFormProperties {

		/** Required. The device ID returned by `ClaimDevice`. */
		deviceId: FormControl<string | null | undefined>,

		/** Required. The section type of the device's provisioning record. */
		sectionType: FormControl<ClaimDeviceRequestSectionType | null | undefined>,

		/** The duration of the vacation unlock starting from when the request is processed. (1 day is treated as 24 hours) */
		vacationModeDays: FormControl<number | null | undefined>,

		/** The expiration time of the vacation unlock. */
		vacationModeExpireTime: FormControl<string | null | undefined>,
	}
	export function CreateUnclaimDeviceRequestFormGroup() {
		return new FormGroup<UnclaimDeviceRequestFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined),
			sectionType: new FormControl<ClaimDeviceRequestSectionType | null | undefined>(undefined),
			vacationModeDays: new FormControl<number | null | undefined>(undefined),
			vacationModeExpireTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to unclaim devices asynchronously in batch. */
	export interface UnclaimDevicesRequest {

		/** Required. The list of devices to unclaim. */
		unclaims?: Array<PartnerUnclaim>;
	}

	/** Request to unclaim devices asynchronously in batch. */
	export interface UnclaimDevicesRequestFormProperties {
	}
	export function CreateUnclaimDevicesRequestFormGroup() {
		return new FormGroup<UnclaimDevicesRequestFormProperties>({
		});

	}


	/** Request to update device metadata in batch. */
	export interface UpdateDeviceMetadataInBatchRequest {

		/** Required. The list of metadata updates. */
		updates?: Array<UpdateMetadataArguments>;
	}

	/** Request to update device metadata in batch. */
	export interface UpdateDeviceMetadataInBatchRequestFormProperties {
	}
	export function CreateUpdateDeviceMetadataInBatchRequestFormGroup() {
		return new FormGroup<UpdateDeviceMetadataInBatchRequestFormProperties>({
		});

	}


	/** Request to set metadata for a device. */
	export interface UpdateDeviceMetadataRequest {

		/** Metadata entries that can be attached to a `Device`. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata). */
		deviceMetadata?: DeviceMetadata;
	}

	/** Request to set metadata for a device. */
	export interface UpdateDeviceMetadataRequestFormProperties {
	}
	export function CreateUpdateDeviceMetadataRequestFormGroup() {
		return new FormGroup<UpdateDeviceMetadataRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the user's customer accounts.
		 * Get v1/customers
		 * @param {number} pageSize The maximum number of customers to show in a page of results. A number between 1 and 100 (inclusive).
		 * @param {string} pageToken A token specifying which result page to return. This field has custom validations in ListCustomersRequestValidator
		 * @return {CustomerListCustomersResponse} Successful response
		 */
		Androiddeviceprovisioning_customers_list(pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<CustomerListCustomersResponse> {
			return this.http.get<CustomerListCustomersResponse>(this.baseUri + 'v1/customers?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Updates reseller metadata associated with the device. Android devices only.
		 * Post v1/partners/{metadataOwnerId}/devices/{deviceId}/metadata
		 * @param {string} metadataOwnerId Required. The owner of the newly set metadata. Set this to the partner ID.
		 * @param {string} deviceId Required. The ID of the device.
		 * @return {DeviceMetadata} Successful response
		 */
		Androiddeviceprovisioning_partners_devices_metadata(metadataOwnerId: string, deviceId: string, requestBody: UpdateDeviceMetadataRequest): Observable<DeviceMetadata> {
			return this.http.post<DeviceMetadata>(this.baseUri + 'v1/partners/' + (metadataOwnerId == null ? '' : encodeURIComponent(metadataOwnerId)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/metadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.
		 * Get v1/partners/{partnerId}/customers
		 * @param {string} partnerId Required. The ID of the reseller partner.
		 * @param {number} pageSize The maximum number of results to be returned. If not specified or 0, all the records are returned.
		 * @param {string} pageToken A token identifying a page of results returned by the server.
		 * @return {ListCustomersResponse} Successful response
		 */
		Androiddeviceprovisioning_partners_customers_list(partnerId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCustomersResponse> {
			return this.http.get<ListCustomersResponse>(this.baseUri + 'v1/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/customers&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error.
		 * Post v1/partners/{partnerId}/devices:claim
		 * @param {string} partnerId Required. The ID of the reseller partner.
		 * @return {ClaimDeviceResponse} Successful response
		 */
		Androiddeviceprovisioning_partners_devices_claim(partnerId: string, requestBody: ClaimDeviceRequest): Observable<ClaimDeviceResponse> {
			return this.http.post<ClaimDeviceResponse>(this.baseUri + 'v1/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/devices:claim', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
		 * Post v1/partners/{partnerId}/devices:claimAsync
		 * @param {string} partnerId Required. The ID of the reseller partner.
		 * @return {Operation} Successful response
		 */
		Androiddeviceprovisioning_partners_devices_claimAsync(partnerId: string, requestBody: ClaimDevicesRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/devices:claimAsync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Finds devices by hardware identifiers, such as IMEI.
		 * Post v1/partners/{partnerId}/devices:findByIdentifier
		 * @param {string} partnerId Required. The ID of the reseller partner.
		 * @return {FindDevicesByDeviceIdentifierResponse} Successful response
		 */
		Androiddeviceprovisioning_partners_devices_findByIdentifier(partnerId: string, requestBody: FindDevicesByDeviceIdentifierRequest): Observable<FindDevicesByDeviceIdentifierResponse> {
			return this.http.post<FindDevicesByDeviceIdentifierResponse>(this.baseUri + 'v1/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/devices:findByIdentifier', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results.
		 * Post v1/partners/{partnerId}/devices:findByOwner
		 * @param {string} partnerId Required. The ID of the reseller partner.
		 * @return {FindDevicesByOwnerResponse} Successful response
		 */
		Androiddeviceprovisioning_partners_devices_findByOwner(partnerId: string, requestBody: FindDevicesByOwnerRequest): Observable<FindDevicesByOwnerResponse> {
			return this.http.post<FindDevicesByOwnerResponse>(this.baseUri + 'v1/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/devices:findByOwner', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a device's SIM lock state.
		 * Post v1/partners/{partnerId}/devices:getSimLockState
		 * @param {string} partnerId Required. The ID of the partner.
		 * @return {GetDeviceSimLockStateResponse} Successful response
		 */
		Androiddeviceprovisioning_partners_devices_getSimLockState(partnerId: string, requestBody: GetDeviceSimLockStateRequest): Observable<GetDeviceSimLockStateResponse> {
			return this.http.post<GetDeviceSimLockStateResponse>(this.baseUri + 'v1/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/devices:getSimLockState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unclaims a device from a customer and removes it from zero-touch enrollment.
		 * Post v1/partners/{partnerId}/devices:unclaim
		 * @param {string} partnerId Required. The ID of the reseller partner.
		 * @return {Empty} Successful response
		 */
		Androiddeviceprovisioning_partners_devices_unclaim(partnerId: string, requestBody: UnclaimDeviceRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/devices:unclaim', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
		 * Post v1/partners/{partnerId}/devices:unclaimAsync
		 * @param {string} partnerId Required. The reseller partner ID.
		 * @return {Operation} Successful response
		 */
		Androiddeviceprovisioning_partners_devices_unclaimAsync(partnerId: string, requestBody: UnclaimDevicesRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/devices:unclaimAsync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). Android Devices only.
		 * Post v1/partners/{partnerId}/devices:updateMetadataAsync
		 * @param {string} partnerId Required. The reseller partner ID.
		 * @return {Operation} Successful response
		 */
		Androiddeviceprovisioning_partners_devices_updateMetadataAsync(partnerId: string, requestBody: UpdateDeviceMetadataInBatchRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/devices:updateMetadataAsync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied.
		 * Delete v1/{name}
		 * @param {string} name Required. The configuration to delete. An API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. If the configuration is applied to any devices, the API call fails.
		 * @return {Empty} Successful response
		 */
		Androiddeviceprovisioning_customers_configurations_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets a device.
		 * Get v1/{name}
		 * @param {string} name Required. The device API resource name in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`.
		 * @return {Device} Successful response
		 */
		Androiddeviceprovisioning_partners_devices_get(name: string): Observable<Device> {
			return this.http.get<Device>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a configuration's field values.
		 * Patch v1/{name}
		 * @param {string} name Output only. The API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. Assigned by the server.
		 * @param {string} updateMask Required. The field mask applied to the target `Configuration` before updating the fields. To learn more about using field masks, read [FieldMask](/protocol-buffers/docs/reference/google.protobuf#fieldmask) in the Protocol Buffers documentation.
		 * @return {Configuration} Successful response
		 */
		Androiddeviceprovisioning_customers_configurations_patch(name: string, updateMask: string | null | undefined, requestBody: Configuration): Observable<Configuration> {
			return this.http.patch<Configuration>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists a customer's configurations.
		 * Get v1/{parent}/configurations
		 * @param {string} parent Required. The customer that manages the listed configurations. An API resource name in the format `customers/[CUSTOMER_ID]`.
		 * @return {CustomerListConfigurationsResponse} Successful response
		 */
		Androiddeviceprovisioning_customers_configurations_list(parent: string): Observable<CustomerListConfigurationsResponse> {
			return this.http.get<CustomerListConfigurationsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/configurations', {});
		}

		/**
		 * Creates a new configuration. Once created, a customer can apply the configuration to devices.
		 * Post v1/{parent}/configurations
		 * @param {string} parent Required. The customer that manages the configuration. An API resource name in the format `customers/[CUSTOMER_ID]`. This field has custom validation in CreateConfigurationRequestValidator
		 * @return {Configuration} Successful response
		 */
		Androiddeviceprovisioning_customers_configurations_create(parent: string, requestBody: Configuration): Observable<Configuration> {
			return this.http.post<Configuration>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/configurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the customers of the vendor.
		 * Get v1/{parent}/customers
		 * @param {string} parent Required. The resource name in the format `partners/[PARTNER_ID]/vendors/[VENDOR_ID]`.
		 * @param {number} pageSize The maximum number of results to be returned.
		 * @param {string} pageToken A token identifying a page of results returned by the server.
		 * @return {ListVendorCustomersResponse} Successful response
		 */
		Androiddeviceprovisioning_partners_vendors_customers_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListVendorCustomersResponse> {
			return this.http.get<ListVendorCustomersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customers&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal.
		 * Post v1/{parent}/customers
		 * @param {string} parent Required. The parent resource ID in the format `partners/[PARTNER_ID]` that identifies the reseller.
		 * @return {Company} Successful response
		 */
		Androiddeviceprovisioning_partners_customers_create(parent: string, requestBody: CreateCustomerRequest): Observable<Company> {
			return this.http.post<Company>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists a customer's devices.
		 * Get v1/{parent}/devices
		 * @param {string} parent Required. The customer managing the devices. An API resource name in the format `customers/[CUSTOMER_ID]`.
		 * @param {string} pageSize The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive.
		 * @param {string} pageToken A token specifying which result page to return.
		 * @return {CustomerListDevicesResponse} Successful response
		 */
		Androiddeviceprovisioning_customers_devices_list(parent: string, pageSize: string | null | undefined, pageToken: string | null | undefined): Observable<CustomerListDevicesResponse> {
			return this.http.get<CustomerListDevicesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/devices&pageSize=' + (pageSize == null ? '' : encodeURIComponent(pageSize)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first boot, or next factory reset.
		 * Post v1/{parent}/devices:applyConfiguration
		 * @param {string} parent Required. The customer managing the device. An API resource name in the format `customers/[CUSTOMER_ID]`.
		 * @return {Empty} Successful response
		 */
		Androiddeviceprovisioning_customers_devices_applyConfiguration(parent: string, requestBody: CustomerApplyConfigurationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/devices:applyConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a configuration from device.
		 * Post v1/{parent}/devices:removeConfiguration
		 * @param {string} parent Required. The customer managing the device in the format `customers/[CUSTOMER_ID]`.
		 * @return {Empty} Successful response
		 */
		Androiddeviceprovisioning_customers_devices_removeConfiguration(parent: string, requestBody: CustomerRemoveConfigurationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/devices:removeConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch enrollment again.
		 * Post v1/{parent}/devices:unclaim
		 * @param {string} parent Required. The customer managing the device. An API resource name in the format `customers/[CUSTOMER_ID]`.
		 * @return {Empty} Successful response
		 */
		Androiddeviceprovisioning_customers_devices_unclaim(parent: string, requestBody: CustomerUnclaimDeviceRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/devices:unclaim', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the DPCs (device policy controllers) that support zero-touch enrollment.
		 * Get v1/{parent}/dpcs
		 * @param {string} parent Required. The customer that can use the DPCs in configurations. An API resource name in the format `customers/[CUSTOMER_ID]`.
		 * @return {CustomerListDpcsResponse} Successful response
		 */
		Androiddeviceprovisioning_customers_dpcs_list(parent: string): Observable<CustomerListDpcsResponse> {
			return this.http.get<CustomerListDpcsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dpcs', {});
		}

		/**
		 * Lists the vendors of the partner.
		 * Get v1/{parent}/vendors
		 * @param {string} parent Required. The resource name in the format `partners/[PARTNER_ID]`.
		 * @param {number} pageSize The maximum number of results to be returned.
		 * @param {string} pageToken A token identifying a page of results returned by the server.
		 * @return {ListVendorsResponse} Successful response
		 */
		Androiddeviceprovisioning_partners_vendors_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListVendorsResponse> {
			return this.http.get<ListVendorsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/vendors&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

}

