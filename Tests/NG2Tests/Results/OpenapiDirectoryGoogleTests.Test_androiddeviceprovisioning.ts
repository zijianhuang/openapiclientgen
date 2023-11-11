import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Request message to claim a device on behalf of a customer. */
	export interface ClaimDeviceRequest {

		/** Required. The ID of the customer for whom the device is being claimed. */
		customerId?: string | null;

		/**
		 * Encapsulates hardware and product IDs to identify a manufactured device.
		 * To understand requirements on identifier sets, read
		 * [Identifiers](/zero-touch/guides/identifiers).
		 */
		deviceIdentifier?: DeviceIdentifier | null;

		/**
		 * Metadata entries that can be attached to a `Device`. To learn more, read
		 * [Device metadata](/zero-touch/guides/metadata).
		 */
		deviceMetadata?: DeviceMetadata | null;

		/** Required. The section type of the device's provisioning record. */
		sectionType?: ClaimDeviceRequestSectionType | null;
	}


	/**
	 * Encapsulates hardware and product IDs to identify a manufactured device.
	 * To understand requirements on identifier sets, read
	 * [Identifiers](/zero-touch/guides/identifiers).
	 */
	export interface DeviceIdentifier {

		/** The device’s IMEI number. Validated on input. */
		imei?: string | null;

		/**
		 * The device manufacturer’s name. Matches the device's built-in
		 * value returned from `android.os.Build.MANUFACTURER`. Allowed values are
		 * listed in
		 * [manufacturers](/zero-touch/resources/manufacturer-names#manufacturers-names).
		 */
		manufacturer?: string | null;

		/** The device’s MEID number. */
		meid?: string | null;

		/**
		 * The device model's name. Matches the device's built-in value returned from
		 * `android.os.Build.MODEL`. Allowed values are listed in
		 * [models](/zero-touch/resources/manufacturer-names#model-names).
		 */
		model?: string | null;

		/**
		 * The manufacturer's serial number for the device. This value might not be
		 * unique across different device models.
		 */
		serialNumber?: string | null;
	}


	/**
	 * Metadata entries that can be attached to a `Device`. To learn more, read
	 * [Device metadata](/zero-touch/guides/metadata).
	 */
	export interface DeviceMetadata {

		/** Metadata entries recorded as key-value pairs. */
		entries?: {[id: string]: string } | null;
	}

	export enum ClaimDeviceRequestSectionType { SECTION_TYPE_UNSPECIFIED = 0, SECTION_TYPE_SIM_LOCK = 1, SECTION_TYPE_ZERO_TOUCH = 2 }


	/** Response message containing device id of the claim. */
	export interface ClaimDeviceResponse {

		/** The device ID of the claimed device. */
		deviceId?: string | null;

		/**
		 * The resource name of the device in the format
		 * `partners/[PARTNER_ID]/devices/[DEVICE_ID]`.
		 */
		deviceName?: string | null;
	}


	/**
	 * Request to claim devices asynchronously in batch. Claiming a device adds the
	 * device to zero-touch enrollment and shows the device in the customer's view
	 * of the portal.
	 */
	export interface ClaimDevicesRequest {

		/** Required. A list of device claims. */
		claims?: Array<PartnerClaim> | null;
	}


	/** Identifies one claim request. */
	export interface PartnerClaim {

		/** Required. The ID of the customer for whom the device is being claimed. */
		customerId?: string | null;

		/**
		 * Encapsulates hardware and product IDs to identify a manufactured device.
		 * To understand requirements on identifier sets, read
		 * [Identifiers](/zero-touch/guides/identifiers).
		 */
		deviceIdentifier?: DeviceIdentifier | null;

		/**
		 * Metadata entries that can be attached to a `Device`. To learn more, read
		 * [Device metadata](/zero-touch/guides/metadata).
		 */
		deviceMetadata?: DeviceMetadata | null;

		/** Required. The section type of the device's provisioning record. */
		sectionType?: ClaimDeviceRequestSectionType | null;
	}


	/** A reseller, vendor, or customer in the zero-touch reseller and customer APIs. */
	export interface Company {

		/**
		 * Optional. Input only. Email address of customer's users in the admin role.
		 * Each email address must be associated with a Google Account.
		 */
		adminEmails?: Array<string> | null;

		/** Output only. The ID of the company. Assigned by the server. */
		companyId?: string | null;

		/**
		 * Required. The name of the company. For example _XYZ Corp_. Displayed to the
		 * company's employees in the zero-touch enrollment portal.
		 */
		companyName?: string | null;

		/**
		 * Output only. The API resource name of the company. The resource name is one
		 * of the following formats:
		 * * `partners/[PARTNER_ID]/customers/[CUSTOMER_ID]`
		 * * `partners/[PARTNER_ID]/vendors/[VENDOR_ID]`
		 * * `partners/[PARTNER_ID]/vendors/[VENDOR_ID]/customers/[CUSTOMER_ID]`
		 * Assigned by the server.
		 */
		name?: string | null;

		/**
		 * Input only. Email address of customer's users in the owner role. At least
		 * one `owner_email` is required. Each email address must be associated with a
		 * Google Account. Owners share the same access as admins but can also add,
		 * delete, and edit your organization's portal users.
		 */
		ownerEmails?: Array<string> | null;

		/**
		 * Output only. Whether any user from the company has accepted the latest
		 * Terms of Service (ToS). See
		 * TermsStatus.
		 */
		termsStatus?: CompanyTermsStatus | null;
	}

	export enum CompanyTermsStatus { TERMS_STATUS_UNSPECIFIED = 0, TERMS_STATUS_NOT_ACCEPTED = 1, TERMS_STATUS_ACCEPTED = 2, TERMS_STATUS_STALE = 3 }


	/**
	 * A configuration collects the provisioning options for Android devices. Each
	 * configuration combines the following:
	 * * The EMM device policy controller (DPC) installed on the devices.
	 * * EMM policies enforced on the devices.
	 * * Metadata displayed on the device to help users during setup.
	 * Customers can add as many configurations as they need. However, zero-touch
	 * enrollment works best when a customer sets a default configuration that's
	 * applied to any new devices the organization purchases.
	 */
	export interface Configuration {

		/**
		 * Required. The name of the organization. Zero-touch enrollment shows this
		 * organization name to device users during device provisioning.
		 */
		companyName?: string | null;

		/** Output only. The ID of the configuration. Assigned by the server. */
		configurationId?: string | null;

		/**
		 * Required. A short name that describes the configuration's purpose. For
		 * example, _Sales team_ or _Temporary employees_. The zero-touch enrollment
		 * portal displays this name to IT admins.
		 */
		configurationName?: string | null;

		/**
		 * Required. The email address that device users can contact to get help.
		 * Zero-touch enrollment shows this email address to device users before
		 * device provisioning. The value is validated on input.
		 */
		contactEmail?: string | null;

		/**
		 * Required. The telephone number that device users can call, using another
		 * device, to get help. Zero-touch enrollment shows this number to device
		 * users before device provisioning. Accepts numerals, spaces, the plus sign,
		 * hyphens, and parentheses.
		 */
		contactPhone?: string | null;

		/**
		 * A message, containing one or two sentences, to help device users get help
		 * or give them more details about what’s happening to their device.
		 * Zero-touch enrollment shows this message before the device is provisioned.
		 */
		customMessage?: string | null;

		/** The JSON-formatted EMM provisioning extras that are passed to the DPC. */
		dpcExtras?: string | null;

		/**
		 * Required. The resource name of the selected DPC (device policy controller)
		 * in the format `customers/[CUSTOMER_ID]/dpcs/*`. To list the supported DPCs,
		 * call
		 * `customers.dpcs.list`.
		 */
		dpcResourcePath?: string | null;

		/**
		 * Required. Whether this is the default configuration that zero-touch
		 * enrollment applies to any new devices the organization purchases in the
		 * future. Only one customer configuration can be the default. Setting this
		 * value to `true`, changes the previous default configuration's `isDefault`
		 * value to `false`.
		 */
		isDefault?: boolean | null;

		/**
		 * Output only. The API resource name in the format
		 * `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. Assigned by
		 * the server.
		 */
		name?: string | null;
	}


	/** Request message to create a customer. */
	export interface CreateCustomerRequest {

		/** A reseller, vendor, or customer in the zero-touch reseller and customer APIs. */
		customer?: Company | null;
	}


	/** Request message for customer to assign a configuration to device. */
	export interface CustomerApplyConfigurationRequest {

		/**
		 * Required. The configuration applied to the device in the format
		 * `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`.
		 */
		configuration?: string | null;

		/**
		 * A `DeviceReference` is an API abstraction that lets you supply a _device_
		 * argument to a method using one of the following identifier types:
		 * * A numeric API resource ID.
		 * * Real-world hardware IDs, such as IMEI number, belonging to the manufactured
		 * device.
		 * Methods that operate on devices take a `DeviceReference` as a parameter type
		 * because it's more flexible for the caller. To learn more about device
		 * identifiers, read [Identifiers](/zero-touch/guides/identifiers).
		 */
		device?: DeviceReference | null;
	}


	/**
	 * A `DeviceReference` is an API abstraction that lets you supply a _device_
	 * argument to a method using one of the following identifier types:
	 * * A numeric API resource ID.
	 * * Real-world hardware IDs, such as IMEI number, belonging to the manufactured
	 *   device.
	 * Methods that operate on devices take a `DeviceReference` as a parameter type
	 * because it's more flexible for the caller. To learn more about device
	 * identifiers, read [Identifiers](/zero-touch/guides/identifiers).
	 */
	export interface DeviceReference {

		/** The ID of the device. */
		deviceId?: string | null;

		/**
		 * Encapsulates hardware and product IDs to identify a manufactured device.
		 * To understand requirements on identifier sets, read
		 * [Identifiers](/zero-touch/guides/identifiers).
		 */
		deviceIdentifier?: DeviceIdentifier | null;
	}


	/** Response message of customer's listing configuration. */
	export interface CustomerListConfigurationsResponse {

		/** The configurations. */
		configurations?: Array<Configuration> | null;
	}


	/** Response message for listing my customers. */
	export interface CustomerListCustomersResponse {

		/** The customer accounts the calling user is a member of. */
		customers?: Array<Company> | null;

		/**
		 * A token used to access the next page of results. Omitted if no further
		 * results are available.
		 */
		nextPageToken?: string | null;
	}


	/** Response message of customer's liting devices. */
	export interface CustomerListDevicesResponse {

		/** The customer's devices. */
		devices?: Array<Device> | null;

		/**
		 * A token used to access the next page of results. Omitted if no further
		 * results are available.
		 */
		nextPageToken?: string | null;
	}


	/** An Android device registered for zero-touch enrollment. */
	export interface Device {

		/**
		 * Output only. The provisioning claims for a device. Devices claimed for
		 * zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`.
		 * Call
		 * `partners.devices.unclaim`
		 * or
		 * `partners.devices.unclaimAsync`
		 * to remove the device from zero-touch enrollment.
		 */
		claims?: Array<DeviceClaim> | null;

		/** Not available to resellers. */
		configuration?: string | null;

		/** Output only. The ID of the device. Assigned by the server. */
		deviceId?: string | null;

		/**
		 * Encapsulates hardware and product IDs to identify a manufactured device.
		 * To understand requirements on identifier sets, read
		 * [Identifiers](/zero-touch/guides/identifiers).
		 */
		deviceIdentifier?: DeviceIdentifier | null;

		/**
		 * Metadata entries that can be attached to a `Device`. To learn more, read
		 * [Device metadata](/zero-touch/guides/metadata).
		 */
		deviceMetadata?: DeviceMetadata | null;

		/**
		 * Output only. The API resource name in the format
		 * `partners/[PARTNER_ID]/devices/[DEVICE_ID]`. Assigned by the server.
		 */
		name?: string | null;
	}


	/**
	 * A record of a device claimed by a reseller for a customer. Devices claimed
	 * for zero-touch enrollment have a claim with the type
	 * `SECTION_TYPE_ZERO_TOUCH`. To learn more, read
	 * [Claim devices for customers](/zero-touch/guides/how-it-works#claim).
	 */
	export interface DeviceClaim {

		/** The ID of the Customer that purchased the device. */
		ownerCompanyId?: string | null;

		/** The ID of the reseller that claimed the device. */
		resellerId?: string | null;

		/** Output only. The type of claim made on the device. */
		sectionType?: ClaimDeviceRequestSectionType | null;

		/**
		 * The timestamp when the device will exit ‘vacation mode’. This value is
		 * present iff the device is in 'vacation mode'.
		 */
		vacationModeExpireTime?: string | null;

		/**
		 * The timestamp when the device was put into ‘vacation mode’. This value is
		 * present iff the device is in 'vacation mode'.
		 */
		vacationModeStartTime?: string | null;
	}


	/** Response message of customer's listing DPCs. */
	export interface CustomerListDpcsResponse {

		/**
		 * The list of DPCs available to the customer that support zero-touch
		 * enrollment.
		 */
		dpcs?: Array<Dpc> | null;
	}


	/**
	 * An EMM's DPC ([device policy
	 * controller](http://developer.android.com/work/dpc/build-dpc.html)).
	 * Zero-touch enrollment installs a DPC (listed in the `Configuration`) on a
	 * device to maintain the customer's mobile policies. All the DPCs listed by the
	 * API support zero-touch enrollment and are available in Google Play.
	 */
	export interface Dpc {

		/**
		 * Output only. The title of the DPC app in Google Play. For example, _Google
		 * Apps Device Policy_. Useful in an application's user interface.
		 */
		dpcName?: string | null;

		/**
		 * Output only. The API resource name in the format
		 * `customers/[CUSTOMER_ID]/dpcs/[DPC_ID]`. Assigned by
		 * the server. To maintain a reference to a DPC across customer accounts,
		 * persist and match the last path component (`DPC_ID`).
		 */
		name?: string | null;

		/**
		 * Output only. The DPC's Android application ID that looks like a Java
		 * package name. Zero-touch enrollment installs the DPC app onto a device
		 * using this identifier.
		 */
		packageName?: string | null;
	}


	/** Request message for customer to remove the configuration from device. */
	export interface CustomerRemoveConfigurationRequest {

		/**
		 * A `DeviceReference` is an API abstraction that lets you supply a _device_
		 * argument to a method using one of the following identifier types:
		 * * A numeric API resource ID.
		 * * Real-world hardware IDs, such as IMEI number, belonging to the manufactured
		 * device.
		 * Methods that operate on devices take a `DeviceReference` as a parameter type
		 * because it's more flexible for the caller. To learn more about device
		 * identifiers, read [Identifiers](/zero-touch/guides/identifiers).
		 */
		device?: DeviceReference | null;
	}


	/** Request message for customer to unclaim a device. */
	export interface CustomerUnclaimDeviceRequest {

		/**
		 * A `DeviceReference` is an API abstraction that lets you supply a _device_
		 * argument to a method using one of the following identifier types:
		 * * A numeric API resource ID.
		 * * Real-world hardware IDs, such as IMEI number, belonging to the manufactured
		 * device.
		 * Methods that operate on devices take a `DeviceReference` as a parameter type
		 * because it's more flexible for the caller. To learn more about device
		 * identifiers, read [Identifiers](/zero-touch/guides/identifiers).
		 */
		device?: DeviceReference | null;
	}


	/**
	 * Tracks the status of a long-running operation to asynchronously update a
	 * batch of reseller metadata attached to devices. To learn more, read
	 * [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
	 */
	export interface DevicesLongRunningOperationMetadata {

		/**
		 * The number of metadata updates in the operation. This might be different
		 * from the number of updates in the request if the API can't parse some of
		 * the updates.
		 */
		devicesCount?: number | null;

		/** The processing status of the operation. */
		processingStatus?: DevicesLongRunningOperationMetadataProcessingStatus | null;

		/**
		 * The processing progress of the operation. Measured as a number from 0 to
		 * 100. A value of 10O doesnt always mean the operation completed—check for
		 * the inclusion of a `done` field.
		 */
		progress?: number | null;
	}

	export enum DevicesLongRunningOperationMetadataProcessingStatus { BATCH_PROCESS_STATUS_UNSPECIFIED = 0, BATCH_PROCESS_PENDING = 1, BATCH_PROCESS_IN_PROGRESS = 2, BATCH_PROCESS_PROCESSED = 3 }


	/**
	 * Tracks the status of a long-running operation to claim, unclaim, or attach
	 * metadata to devices. To learn more, read
	 * [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
	 */
	export interface DevicesLongRunningOperationResponse {

		/**
		 * The processing status for each device in the operation.
		 * One `PerDeviceStatus` per device. The list order matches the items in the
		 * original request.
		 */
		perDeviceStatus?: Array<OperationPerDevice> | null;

		/**
		 * A summary of how many items in the operation the server processed
		 * successfully. Updated as the operation progresses.
		 */
		successCount?: number | null;
	}


	/**
	 * A task for each device in the operation. Corresponds to each device
	 * change in the request.
	 */
	export interface OperationPerDevice {

		/** Identifies one claim request. */
		claim?: PartnerClaim | null;

		/** Captures the processing status for each device in the operation. */
		result?: PerDeviceStatusInBatch | null;

		/** Identifies one unclaim request. */
		unclaim?: PartnerUnclaim | null;

		/** Identifies metadata updates to one device. */
		updateMetadata?: UpdateMetadataArguments | null;
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

	export enum PerDeviceStatusInBatchStatus { SINGLE_DEVICE_STATUS_UNSPECIFIED = 0, SINGLE_DEVICE_STATUS_UNKNOWN_ERROR = 1, SINGLE_DEVICE_STATUS_OTHER_ERROR = 2, SINGLE_DEVICE_STATUS_SUCCESS = 3, SINGLE_DEVICE_STATUS_PERMISSION_DENIED = 4, SINGLE_DEVICE_STATUS_INVALID_DEVICE_IDENTIFIER = 5, SINGLE_DEVICE_STATUS_INVALID_SECTION_TYPE = 6, SINGLE_DEVICE_STATUS_SECTION_NOT_YOURS = 7 }


	/** Identifies one unclaim request. */
	export interface PartnerUnclaim {

		/** Device ID of the device. */
		deviceId?: string | null;

		/**
		 * Encapsulates hardware and product IDs to identify a manufactured device.
		 * To understand requirements on identifier sets, read
		 * [Identifiers](/zero-touch/guides/identifiers).
		 */
		deviceIdentifier?: DeviceIdentifier | null;

		/** Required. The section type of the device's provisioning record. */
		sectionType?: ClaimDeviceRequestSectionType | null;

		/**
		 * The duration of the vacation unlock starting from when the request is
		 * processed. (1 day is treated as 24 hours)
		 */
		vacationModeDays?: number | null;

		/** The expiration time of the vacation unlock. */
		vacationModeExpireTime?: string | null;
	}


	/** Identifies metadata updates to one device. */
	export interface UpdateMetadataArguments {

		/** Device ID of the device. */
		deviceId?: string | null;

		/**
		 * Encapsulates hardware and product IDs to identify a manufactured device.
		 * To understand requirements on identifier sets, read
		 * [Identifiers](/zero-touch/guides/identifiers).
		 */
		deviceIdentifier?: DeviceIdentifier | null;

		/**
		 * Metadata entries that can be attached to a `Device`. To learn more, read
		 * [Device metadata](/zero-touch/guides/metadata).
		 */
		deviceMetadata?: DeviceMetadata | null;
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


	/** Request to find devices. */
	export interface FindDevicesByDeviceIdentifierRequest {

		/**
		 * Encapsulates hardware and product IDs to identify a manufactured device.
		 * To understand requirements on identifier sets, read
		 * [Identifiers](/zero-touch/guides/identifiers).
		 */
		deviceIdentifier?: DeviceIdentifier | null;

		/**
		 * Required. The maximum number of devices to show in a page of results. Must
		 * be between 1 and 100 inclusive.
		 */
		limit?: string | null;

		/** A token specifying which result page to return. */
		pageToken?: string | null;
	}


	/** Response containing found devices. */
	export interface FindDevicesByDeviceIdentifierResponse {

		/** Found devices. */
		devices?: Array<Device> | null;

		/**
		 * A token used to access the next page of results. Omitted if no further
		 * results are available.
		 */
		nextPageToken?: string | null;

		/** The total count of items in the list irrespective of pagination. */
		totalSize?: number | null;
	}


	/** Request to find devices by customers. */
	export interface FindDevicesByOwnerRequest {

		/** Required. The list of customer IDs to search for. */
		customerId?: Array<string> | null;

		/**
		 * Required. The maximum number of devices to show in a page of results. Must
		 * be between 1 and 100 inclusive.
		 */
		limit?: string | null;

		/** A token specifying which result page to return. */
		pageToken?: string | null;

		/** Required. The section type of the device's provisioning record. */
		sectionType?: ClaimDeviceRequestSectionType | null;
	}


	/** Response containing found devices. */
	export interface FindDevicesByOwnerResponse {

		/** The customer's devices. */
		devices?: Array<Device> | null;

		/**
		 * A token used to access the next page of results.
		 * Omitted if no further results are available.
		 */
		nextPageToken?: string | null;

		/** The total count of items in the list irrespective of pagination. */
		totalSize?: number | null;
	}


	/** Response message of all customers related to this partner. */
	export interface ListCustomersResponse {

		/** List of customers related to this reseller partner. */
		customers?: Array<Company> | null;

		/**
		 * A token to retrieve the next page of results. Omitted if no further results
		 * are available.
		 */
		nextPageToken?: string | null;

		/** The total count of items in the list irrespective of pagination. */
		totalSize?: number | null;
	}


	/** Response message to list customers of the vendor. */
	export interface ListVendorCustomersResponse {

		/** List of customers of the vendor. */
		customers?: Array<Company> | null;

		/**
		 * A token to retrieve the next page of results. Omitted if no further results
		 * are available.
		 */
		nextPageToken?: string | null;

		/** The total count of items in the list irrespective of pagination. */
		totalSize?: number | null;
	}


	/** Response message to list vendors of the partner. */
	export interface ListVendorsResponse {

		/**
		 * A token to retrieve the next page of results. Omitted if no further results
		 * are available.
		 */
		nextPageToken?: string | null;

		/** The total count of items in the list irrespective of pagination. */
		totalSize?: number | null;

		/**
		 * List of vendors of the reseller partner. Fields `name`, `companyId` and
		 * `companyName` are populated to the Company object.
		 */
		vendors?: Array<Company> | null;
	}


	/**
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface Operation {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done?: boolean | null;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status | null;

		/** This field will contain a `DevicesLongRunningOperationMetadata` object if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`. */
		metadata?: {[id: string]: any } | null;

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name?: string | null;

		/** This field will contain a `DevicesLongRunningOperationResponse` object if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`. */
		response?: {[id: string]: any } | null;
	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string> | null;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string | null;
	}


	/** Request message to unclaim a device. */
	export interface UnclaimDeviceRequest {

		/** The device ID returned by `ClaimDevice`. */
		deviceId?: string | null;

		/**
		 * Encapsulates hardware and product IDs to identify a manufactured device.
		 * To understand requirements on identifier sets, read
		 * [Identifiers](/zero-touch/guides/identifiers).
		 */
		deviceIdentifier?: DeviceIdentifier | null;

		/** Required. The section type of the device's provisioning record. */
		sectionType?: ClaimDeviceRequestSectionType | null;

		/**
		 * The duration of the vacation unlock starting from when the request is
		 * processed. (1 day is treated as 24 hours)
		 */
		vacationModeDays?: number | null;

		/** The expiration time of the vacation unlock. */
		vacationModeExpireTime?: string | null;
	}


	/** Request to unclaim devices asynchronously in batch. */
	export interface UnclaimDevicesRequest {

		/** Required. The list of devices to unclaim. */
		unclaims?: Array<PartnerUnclaim> | null;
	}


	/** Request to update device metadata in batch. */
	export interface UpdateDeviceMetadataInBatchRequest {

		/** Required. The list of metadata updates. */
		updates?: Array<UpdateMetadataArguments> | null;
	}


	/** Request to set metadata for a device. */
	export interface UpdateDeviceMetadataRequest {

		/**
		 * Metadata entries that can be attached to a `Device`. To learn more, read
		 * [Device metadata](/zero-touch/guides/metadata).
		 */
		deviceMetadata?: DeviceMetadata | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the user's customer accounts.
		 * Get v1/customers
		 * @param {number} pageSize The maximum number of customers to show in a page of results.
		 * A number between 1 and 100 (inclusive).
		 * @param {string} pageToken A token specifying which result page to return.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_customers_list(pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/customers?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates reseller metadata associated with the device.
		 * Post v1/partners/{metadataOwnerId}/devices/{deviceId}/metadata
		 * @param {string} metadataOwnerId Required. The owner of the newly set metadata. Set this to the partner ID.
		 * @param {string} deviceId Required. The ID of the device.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_partners_devices_metadata(metadataOwnerId: string, deviceId: string, requestBody: UpdateDeviceMetadataRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/partners/' + (metadataOwnerId == null ? '' : encodeURIComponent(metadataOwnerId)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/metadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the customers that are enrolled to the reseller identified by the
		 * `partnerId` argument. This list includes customers that the reseller
		 * created and customers that enrolled themselves using the portal.
		 * Get v1/partners/{partnerId}/customers
		 * @param {string} partnerId Required. The ID of the reseller partner.
		 * @param {number} pageSize The maximum number of results to be returned. If not specified or 0, all
		 * the records are returned.
		 * @param {string} pageToken A token identifying a page of results returned by the server.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_partners_customers_list(partnerId: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/customers&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Claims a device for a customer and adds it to zero-touch enrollment. If the
		 * device is already claimed by another customer, the call returns an error.
		 * Post v1/partners/{partnerId}/devices:claim
		 * @param {string} partnerId Required. The ID of the reseller partner.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_partners_devices_claim(partnerId: string, requestBody: ClaimDeviceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/devices:claim', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Claims a batch of devices for a customer asynchronously. Adds the devices
		 * to zero-touch enrollment. To learn more, read [Long‑running batch
		 * operations](/zero-touch/guides/how-it-works#operations).
		 * Post v1/partners/{partnerId}/devices:claimAsync
		 * @param {string} partnerId Required. The ID of the reseller partner.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_partners_devices_claimAsync(partnerId: string, requestBody: ClaimDevicesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/devices:claimAsync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Finds devices by hardware identifiers, such as IMEI.
		 * Post v1/partners/{partnerId}/devices:findByIdentifier
		 * @param {string} partnerId Required. The ID of the reseller partner.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_partners_devices_findByIdentifier(partnerId: string, requestBody: FindDevicesByDeviceIdentifierRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/devices:findByIdentifier', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Finds devices claimed for customers. The results only contain devices
		 * registered to the reseller that's identified by the `partnerId` argument.
		 * The customer's devices purchased from other resellers don't appear in the
		 * results.
		 * Post v1/partners/{partnerId}/devices:findByOwner
		 * @param {string} partnerId Required. The ID of the reseller partner.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_partners_devices_findByOwner(partnerId: string, requestBody: FindDevicesByOwnerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/devices:findByOwner', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unclaims a device from a customer and removes it from zero-touch
		 * enrollment.
		 * Post v1/partners/{partnerId}/devices:unclaim
		 * @param {string} partnerId Required. The ID of the reseller partner.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_partners_devices_unclaim(partnerId: string, requestBody: UnclaimDeviceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/devices:unclaim', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unclaims a batch of devices for a customer asynchronously. Removes the
		 * devices from zero-touch enrollment. To learn more, read [Long‑running batch
		 * operations](/zero-touch/guides/how-it-works#operations).
		 * Post v1/partners/{partnerId}/devices:unclaimAsync
		 * @param {string} partnerId Required. The reseller partner ID.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_partners_devices_unclaimAsync(partnerId: string, requestBody: UnclaimDevicesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/devices:unclaimAsync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the reseller metadata attached to a batch of devices. This method
		 * updates devices asynchronously and returns an `Operation` that can be used
		 * to track progress. Read [Long‑running batch
		 * operations](/zero-touch/guides/how-it-works#operations).
		 * Post v1/partners/{partnerId}/devices:updateMetadataAsync
		 * @param {string} partnerId Required. The reseller partner ID.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_partners_devices_updateMetadataAsync(partnerId: string, requestBody: UpdateDeviceMetadataInBatchRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/devices:updateMetadataAsync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an unused configuration. The API call fails if the customer has
		 * devices with the configuration applied.
		 * Delete v1/{name}
		 * @param {string} name Required. The configuration to delete. An API resource name in the format
		 * `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. If the
		 * configuration is applied to any devices, the API call fails.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_customers_configurations_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the latest state of a long-running operation.  Clients can use this
		 * method to poll the operation result at intervals as recommended by the API
		 * service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_operations_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a configuration's field values.
		 * Patch v1/{name}
		 * @param {string} name Output only. The API resource name in the format
		 * `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. Assigned by
		 * the server.
		 * @param {string} updateMask Required. The field mask applied to the target `Configuration` before
		 * updating the fields. To learn more about using field masks, read
		 * [FieldMask](/protocol-buffers/docs/reference/google.protobuf#fieldmask) in
		 * the Protocol Buffers documentation.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_customers_configurations_patch(name: string, updateMask: string, requestBody: Configuration): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists a customer's configurations.
		 * Get v1/{parent}/configurations
		 * @param {string} parent Required. The customer that manages the listed configurations. An API
		 * resource name in the format `customers/[CUSTOMER_ID]`.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_customers_configurations_list(parent: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/configurations', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new configuration. Once created, a customer can apply the
		 * configuration to devices.
		 * Post v1/{parent}/configurations
		 * @param {string} parent Required. The customer that manages the configuration. An API resource name
		 * in the format `customers/[CUSTOMER_ID]`.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_customers_configurations_create(parent: string, requestBody: Configuration): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/configurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the customers of the vendor.
		 * Get v1/{parent}/customers
		 * @param {string} parent Required. The resource name in the format
		 * `partners/[PARTNER_ID]/vendors/[VENDOR_ID]`.
		 * @param {number} pageSize The maximum number of results to be returned.
		 * @param {string} pageToken A token identifying a page of results returned by the server.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_partners_vendors_customers_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customers&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a customer for zero-touch enrollment. After the method returns
		 * successfully, admin and owner roles can manage devices and EMM configs
		 * by calling API methods or using their zero-touch enrollment portal.
		 * The customer receives an email that welcomes them to zero-touch enrollment
		 * and explains how to sign into the portal.
		 * Post v1/{parent}/customers
		 * @param {string} parent Required. The parent resource ID in the format `partners/[PARTNER_ID]` that
		 * identifies the reseller.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_partners_customers_create(parent: string, requestBody: CreateCustomerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists a customer's devices.
		 * Get v1/{parent}/devices
		 * @param {string} parent Required. The customer managing the devices. An API resource name in the
		 * format `customers/[CUSTOMER_ID]`.
		 * @param {string} pageSize The maximum number of devices to show in a page of results.
		 * Must be between 1 and 100 inclusive.
		 * @param {string} pageToken A token specifying which result page to return.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_customers_devices_list(parent: string, pageSize: string, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/devices&pageSize=' + (pageSize == null ? '' : encodeURIComponent(pageSize)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Applies a Configuration to the device to register the device for zero-touch
		 * enrollment. After applying a configuration to a device, the device
		 * automatically provisions itself on first boot, or next factory reset.
		 * Post v1/{parent}/devices:applyConfiguration
		 * @param {string} parent Required. The customer managing the device. An API resource name in the
		 * format `customers/[CUSTOMER_ID]`.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_customers_devices_applyConfiguration(parent: string, requestBody: CustomerApplyConfigurationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/devices:applyConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a configuration from device.
		 * Post v1/{parent}/devices:removeConfiguration
		 * @param {string} parent Required. The customer managing the device in the format
		 * `customers/[CUSTOMER_ID]`.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_customers_devices_removeConfiguration(parent: string, requestBody: CustomerRemoveConfigurationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/devices:removeConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unclaims a device from a customer and removes it from zero-touch
		 * enrollment.
		 * After removing a device, a customer must contact their reseller to register
		 * the device into zero-touch enrollment again.
		 * Post v1/{parent}/devices:unclaim
		 * @param {string} parent Required. The customer managing the device. An API resource name in the
		 * format `customers/[CUSTOMER_ID]`.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_customers_devices_unclaim(parent: string, requestBody: CustomerUnclaimDeviceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/devices:unclaim', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the DPCs (device policy controllers) that support zero-touch
		 * enrollment.
		 * Get v1/{parent}/dpcs
		 * @param {string} parent Required. The customer that can use the DPCs in configurations. An API
		 * resource name in the format `customers/[CUSTOMER_ID]`.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_customers_dpcs_list(parent: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dpcs', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the vendors of the partner.
		 * Get v1/{parent}/vendors
		 * @param {string} parent Required. The resource name in the format `partners/[PARTNER_ID]`.
		 * @param {number} pageSize The maximum number of results to be returned.
		 * @param {string} pageToken A token identifying a page of results returned by the server.
		 * @return {void} Successful response
		 */
		Androiddeviceprovisioning_partners_vendors_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/vendors&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}
	}

}

