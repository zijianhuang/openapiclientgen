import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents the base class for all object models. */
	export interface ARMBaseModel {

		/** The path ID that uniquely identifies the object. */
		id?: string | null;

		/** The object name. */
		name?: string | null;

		/** The hierarchical type of the object. */
		type?: string | null;
	}

	/** Represents the base class for all object models. */
	export interface ARMBaseModelFormProperties {

		/** The path ID that uniquely identifies the object. */
		id: FormControl<string | null | undefined>,

		/** The object name. */
		name: FormControl<string | null | undefined>,

		/** The hierarchical type of the object. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateARMBaseModelFormGroup() {
		return new FormGroup<ARMBaseModelFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The shipping address of the customer. */
	export interface Address {

		/**
		 * The address line1.
		 * Required
		 */
		addressLine1: string;

		/** The address line2. */
		addressLine2?: string | null;

		/** The address line3. */
		addressLine3?: string | null;

		/**
		 * The city name.
		 * Required
		 */
		city: string;

		/**
		 * The country name.
		 * Required
		 */
		country: string;

		/**
		 * The postal code.
		 * Required
		 */
		postalCode: string;

		/**
		 * The state name.
		 * Required
		 */
		state: string;
	}

	/** The shipping address of the customer. */
	export interface AddressFormProperties {

		/**
		 * The address line1.
		 * Required
		 */
		addressLine1: FormControl<string | null | undefined>,

		/** The address line2. */
		addressLine2: FormControl<string | null | undefined>,

		/** The address line3. */
		addressLine3: FormControl<string | null | undefined>,

		/**
		 * The city name.
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * The country name.
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * The postal code.
		 * Required
		 */
		postalCode: FormControl<string | null | undefined>,

		/**
		 * The state name.
		 * Required
		 */
		state: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			addressLine1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			addressLine2: new FormControl<string | null | undefined>(undefined),
			addressLine3: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Alert on the data box edge/gateway device. */
	export interface Alert {

		/** Properties of alert. */
		properties?: AlertProperties;
	}

	/** Alert on the data box edge/gateway device. */
	export interface AlertFormProperties {
	}
	export function CreateAlertFormGroup() {
		return new FormGroup<AlertFormProperties>({
		});

	}


	/** Properties of alert. */
	export interface AlertProperties {

		/** Alert type. */
		alertType?: string | null;

		/** UTC time when the alert appeared. */
		appearedAtDateTime?: Date | null;

		/** Alert details. */
		detailedInformation?: {[id: string]: string };

		/** Error details for the alert. */
		errorDetails?: AlertErrorDetails;

		/** Alert recommendation. */
		recommendation?: string | null;

		/** Severity of the alert. */
		severity?: AlertPropertiesSeverity | null;

		/** Alert title. */
		title?: string | null;
	}

	/** Properties of alert. */
	export interface AlertPropertiesFormProperties {

		/** Alert type. */
		alertType: FormControl<string | null | undefined>,

		/** UTC time when the alert appeared. */
		appearedAtDateTime: FormControl<Date | null | undefined>,

		/** Alert details. */
		detailedInformation: FormControl<{[id: string]: string } | null | undefined>,

		/** Alert recommendation. */
		recommendation: FormControl<string | null | undefined>,

		/** Severity of the alert. */
		severity: FormControl<AlertPropertiesSeverity | null | undefined>,

		/** Alert title. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateAlertPropertiesFormGroup() {
		return new FormGroup<AlertPropertiesFormProperties>({
			alertType: new FormControl<string | null | undefined>(undefined),
			appearedAtDateTime: new FormControl<Date | null | undefined>(undefined),
			detailedInformation: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			recommendation: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<AlertPropertiesSeverity | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error details for the alert. */
	export interface AlertErrorDetails {

		/** Error code. */
		errorCode?: string | null;

		/** Error Message. */
		errorMessage?: string | null;

		/** Number of occurrences. */
		occurrences?: number | null;
	}

	/** Error details for the alert. */
	export interface AlertErrorDetailsFormProperties {

		/** Error code. */
		errorCode: FormControl<string | null | undefined>,

		/** Error Message. */
		errorMessage: FormControl<string | null | undefined>,

		/** Number of occurrences. */
		occurrences: FormControl<number | null | undefined>,
	}
	export function CreateAlertErrorDetailsFormGroup() {
		return new FormGroup<AlertErrorDetailsFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			occurrences: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AlertPropertiesSeverity { Informational = 'Informational', Warning = 'Warning', Critical = 'Critical' }


	/** Collection of alerts. */
	export interface AlertList {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** The value. */
		value?: Array<Alert>;
	}

	/** Collection of alerts. */
	export interface AlertListFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAlertListFormGroup() {
		return new FormGroup<AlertListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represent the secrets intended for encryption with asymmetric key pair. */
	export interface AsymmetricEncryptedSecret {

		/**
		 * The algorithm used to encrypt "Value".
		 * Required
		 */
		encryptionAlgorithm: AsymmetricEncryptedSecretEncryptionAlgorithm;

		/** Thumbprint certificate used to encrypt \"Value\". If the value is unencrypted, it will be null. */
		encryptionCertThumbprint?: string | null;

		/**
		 * The value of the secret.
		 * Required
		 */
		value: string;
	}

	/** Represent the secrets intended for encryption with asymmetric key pair. */
	export interface AsymmetricEncryptedSecretFormProperties {

		/**
		 * The algorithm used to encrypt "Value".
		 * Required
		 */
		encryptionAlgorithm: FormControl<AsymmetricEncryptedSecretEncryptionAlgorithm | null | undefined>,

		/** Thumbprint certificate used to encrypt \"Value\". If the value is unencrypted, it will be null. */
		encryptionCertThumbprint: FormControl<string | null | undefined>,

		/**
		 * The value of the secret.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAsymmetricEncryptedSecretFormGroup() {
		return new FormGroup<AsymmetricEncryptedSecretFormProperties>({
			encryptionAlgorithm: new FormControl<AsymmetricEncryptedSecretEncryptionAlgorithm | null | undefined>(undefined, [Validators.required]),
			encryptionCertThumbprint: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AsymmetricEncryptedSecretEncryptionAlgorithm { None = 'None', AES256 = 'AES256', RSAES_PKCS1_v_1_5 = 'RSAES_PKCS1_v_1_5' }


	/** Authentication mechanism for IoT devices. */
	export interface Authentication {

		/** Symmetric key for authentication. */
		symmetricKey?: SymmetricKey;
	}

	/** Authentication mechanism for IoT devices. */
	export interface AuthenticationFormProperties {
	}
	export function CreateAuthenticationFormGroup() {
		return new FormGroup<AuthenticationFormProperties>({
		});

	}


	/** Symmetric key for authentication. */
	export interface SymmetricKey {

		/** Represent the secrets intended for encryption with asymmetric key pair. */
		connectionString?: AsymmetricEncryptedSecret;
	}

	/** Symmetric key for authentication. */
	export interface SymmetricKeyFormProperties {
	}
	export function CreateSymmetricKeyFormGroup() {
		return new FormGroup<SymmetricKeyFormProperties>({
		});

	}


	/** Azure container mapping of the endpoint. */
	export interface AzureContainerInfo {

		/**
		 * Container name (Based on the data format specified, this represents the name of Azure Files/Page blob/Block blob).
		 * Required
		 */
		containerName: string;

		/**
		 * Storage format used for the file represented by the share.
		 * Required
		 */
		dataFormat: AzureContainerInfoDataFormat;

		/**
		 * ID of the storage account credential used to access storage.
		 * Required
		 */
		storageAccountCredentialId: string;
	}

	/** Azure container mapping of the endpoint. */
	export interface AzureContainerInfoFormProperties {

		/**
		 * Container name (Based on the data format specified, this represents the name of Azure Files/Page blob/Block blob).
		 * Required
		 */
		containerName: FormControl<string | null | undefined>,

		/**
		 * Storage format used for the file represented by the share.
		 * Required
		 */
		dataFormat: FormControl<AzureContainerInfoDataFormat | null | undefined>,

		/**
		 * ID of the storage account credential used to access storage.
		 * Required
		 */
		storageAccountCredentialId: FormControl<string | null | undefined>,
	}
	export function CreateAzureContainerInfoFormGroup() {
		return new FormGroup<AzureContainerInfoFormProperties>({
			containerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataFormat: new FormControl<AzureContainerInfoDataFormat | null | undefined>(undefined, [Validators.required]),
			storageAccountCredentialId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AzureContainerInfoDataFormat { BlockBlob = 'BlockBlob', PageBlob = 'PageBlob', AzureFile = 'AzureFile' }


	/** The bandwidth schedule details. */
	export interface BandwidthSchedule {

		/**
		 * The properties of the bandwidth schedule.
		 * Required
		 */
		properties: BandwidthScheduleProperties;
	}

	/** The bandwidth schedule details. */
	export interface BandwidthScheduleFormProperties {
	}
	export function CreateBandwidthScheduleFormGroup() {
		return new FormGroup<BandwidthScheduleFormProperties>({
		});

	}


	/** The properties of the bandwidth schedule. */
	export interface BandwidthScheduleProperties {

		/**
		 * The days of the week when this schedule is applicable.
		 * Required
		 */
		days: Array<string>;

		/**
		 * The bandwidth rate in Mbps.
		 * Required
		 */
		rateInMbps: number;

		/**
		 * The start time of the schedule in UTC.
		 * Required
		 */
		start: string;

		/**
		 * The stop time of the schedule in UTC.
		 * Required
		 */
		stop: string;
	}

	/** The properties of the bandwidth schedule. */
	export interface BandwidthSchedulePropertiesFormProperties {

		/**
		 * The bandwidth rate in Mbps.
		 * Required
		 */
		rateInMbps: FormControl<number | null | undefined>,

		/**
		 * The start time of the schedule in UTC.
		 * Required
		 */
		start: FormControl<string | null | undefined>,

		/**
		 * The stop time of the schedule in UTC.
		 * Required
		 */
		stop: FormControl<string | null | undefined>,
	}
	export function CreateBandwidthSchedulePropertiesFormGroup() {
		return new FormGroup<BandwidthSchedulePropertiesFormProperties>({
			rateInMbps: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			start: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stop: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The collection of bandwidth schedules. */
	export interface BandwidthSchedulesList {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** The list of bandwidth schedules. */
		value?: Array<BandwidthSchedule>;
	}

	/** The collection of bandwidth schedules. */
	export interface BandwidthSchedulesListFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateBandwidthSchedulesListFormGroup() {
		return new FormGroup<BandwidthSchedulesListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The mapping between a particular client IP and the type of access client has on the NFS share. */
	export interface ClientAccessRight {

		/**
		 * Type of access to be allowed for the client.
		 * Required
		 */
		accessPermission: ClientAccessRightAccessPermission;

		/**
		 * IP of the client.
		 * Required
		 */
		client: string;
	}

	/** The mapping between a particular client IP and the type of access client has on the NFS share. */
	export interface ClientAccessRightFormProperties {

		/**
		 * Type of access to be allowed for the client.
		 * Required
		 */
		accessPermission: FormControl<ClientAccessRightAccessPermission | null | undefined>,

		/**
		 * IP of the client.
		 * Required
		 */
		client: FormControl<string | null | undefined>,
	}
	export function CreateClientAccessRightFormGroup() {
		return new FormGroup<ClientAccessRightFormProperties>({
			accessPermission: new FormControl<ClientAccessRightAccessPermission | null | undefined>(undefined, [Validators.required]),
			client: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ClientAccessRightAccessPermission { NoAccess = 'NoAccess', ReadOnly = 'ReadOnly', ReadWrite = 'ReadWrite' }


	/** An error response from the service. */
	export interface CloudError {

		/** An error response from the service. */
		error?: CloudErrorBody;
	}

	/** An error response from the service. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** An error response from the service. */
	export interface CloudErrorBody {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** A list of additional details about the error. */
		details?: Array<CloudErrorBody>;

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message?: string | null;
	}

	/** An error response from the service. */
	export interface CloudErrorBodyFormProperties {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains all the contact details of the customer. */
	export interface ContactDetails {

		/**
		 * The name of the company.
		 * Required
		 */
		companyName: string;

		/**
		 * The contact person name.
		 * Required
		 */
		contactPerson: string;

		/**
		 * The email list.
		 * Required
		 */
		emailList: Array<string>;

		/**
		 * The phone number.
		 * Required
		 */
		phone: string;
	}

	/** Contains all the contact details of the customer. */
	export interface ContactDetailsFormProperties {

		/**
		 * The name of the company.
		 * Required
		 */
		companyName: FormControl<string | null | undefined>,

		/**
		 * The contact person name.
		 * Required
		 */
		contactPerson: FormControl<string | null | undefined>,

		/**
		 * The phone number.
		 * Required
		 */
		phone: FormControl<string | null | undefined>,
	}
	export function CreateContactDetailsFormGroup() {
		return new FormGroup<ContactDetailsFormProperties>({
			companyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			contactPerson: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Data Box Edge/Gateway device. */
	export interface DataBoxEdgeDevice {

		/** The etag for the devices. */
		etag?: string | null;

		/**
		 * The location of the device. This is a supported and registered Azure geographical region (for example, West US, East US, or Southeast Asia). The geographical region of a device cannot be changed once it is created, but if an identical geographical region is specified on update, the request will succeed.
		 * Required
		 */
		location: string;

		/** The properties of the Data Box Edge/Gateway device. */
		properties?: DataBoxEdgeDeviceProperties;

		/** The SKU type. */
		sku?: Sku;

		/** The list of tags that describe the device. These tags can be used to view and group this device (across resource groups). */
		tags?: {[id: string]: string };
	}

	/** The Data Box Edge/Gateway device. */
	export interface DataBoxEdgeDeviceFormProperties {

		/** The etag for the devices. */
		etag: FormControl<string | null | undefined>,

		/**
		 * The location of the device. This is a supported and registered Azure geographical region (for example, West US, East US, or Southeast Asia). The geographical region of a device cannot be changed once it is created, but if an identical geographical region is specified on update, the request will succeed.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** The list of tags that describe the device. These tags can be used to view and group this device (across resource groups). */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDataBoxEdgeDeviceFormGroup() {
		return new FormGroup<DataBoxEdgeDeviceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The properties of the Data Box Edge/Gateway device. */
	export interface DataBoxEdgeDeviceProperties {

		/** Type of compute roles configured. */
		configuredRoleTypes?: Array<string>;

		/** The Data Box Edge/Gateway device culture. */
		culture?: string | null;

		/** The status of the Data Box Edge/Gateway device. */
		dataBoxEdgeDeviceStatus?: DataBoxEdgeDevicePropertiesDataBoxEdgeDeviceStatus | null;

		/** The Description of the Data Box Edge/Gateway device. */
		description?: string | null;

		/** The device software version number of the device (eg: 1.2.18105.6). */
		deviceHcsVersion?: string | null;

		/** The Data Box Edge/Gateway device local capacity in MB. */
		deviceLocalCapacity?: number | null;

		/** The Data Box Edge/Gateway device model. */
		deviceModel?: string | null;

		/** The Data Box Edge/Gateway device software version. */
		deviceSoftwareVersion?: string | null;

		/** The type of the Data Box Edge/Gateway device. */
		deviceType?: DataBoxEdgeDevicePropertiesDeviceType | null;

		/** The Data Box Edge/Gateway device name. */
		friendlyName?: string | null;

		/** The description of the Data Box Edge/Gateway device model. */
		modelDescription?: string | null;

		/** The Serial Number of Data Box Edge/Gateway device. */
		serialNumber?: string | null;

		/** The Data Box Edge/Gateway device timezone. */
		timeZone?: string | null;
	}

	/** The properties of the Data Box Edge/Gateway device. */
	export interface DataBoxEdgeDevicePropertiesFormProperties {

		/** The Data Box Edge/Gateway device culture. */
		culture: FormControl<string | null | undefined>,

		/** The status of the Data Box Edge/Gateway device. */
		dataBoxEdgeDeviceStatus: FormControl<DataBoxEdgeDevicePropertiesDataBoxEdgeDeviceStatus | null | undefined>,

		/** The Description of the Data Box Edge/Gateway device. */
		description: FormControl<string | null | undefined>,

		/** The device software version number of the device (eg: 1.2.18105.6). */
		deviceHcsVersion: FormControl<string | null | undefined>,

		/** The Data Box Edge/Gateway device local capacity in MB. */
		deviceLocalCapacity: FormControl<number | null | undefined>,

		/** The Data Box Edge/Gateway device model. */
		deviceModel: FormControl<string | null | undefined>,

		/** The Data Box Edge/Gateway device software version. */
		deviceSoftwareVersion: FormControl<string | null | undefined>,

		/** The type of the Data Box Edge/Gateway device. */
		deviceType: FormControl<DataBoxEdgeDevicePropertiesDeviceType | null | undefined>,

		/** The Data Box Edge/Gateway device name. */
		friendlyName: FormControl<string | null | undefined>,

		/** The description of the Data Box Edge/Gateway device model. */
		modelDescription: FormControl<string | null | undefined>,

		/** The Serial Number of Data Box Edge/Gateway device. */
		serialNumber: FormControl<string | null | undefined>,

		/** The Data Box Edge/Gateway device timezone. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateDataBoxEdgeDevicePropertiesFormGroup() {
		return new FormGroup<DataBoxEdgeDevicePropertiesFormProperties>({
			culture: new FormControl<string | null | undefined>(undefined),
			dataBoxEdgeDeviceStatus: new FormControl<DataBoxEdgeDevicePropertiesDataBoxEdgeDeviceStatus | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			deviceHcsVersion: new FormControl<string | null | undefined>(undefined),
			deviceLocalCapacity: new FormControl<number | null | undefined>(undefined),
			deviceModel: new FormControl<string | null | undefined>(undefined),
			deviceSoftwareVersion: new FormControl<string | null | undefined>(undefined),
			deviceType: new FormControl<DataBoxEdgeDevicePropertiesDeviceType | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			modelDescription: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataBoxEdgeDevicePropertiesDataBoxEdgeDeviceStatus { ReadyToSetup = 'ReadyToSetup', Online = 'Online', Offline = 'Offline', NeedsAttention = 'NeedsAttention', Disconnected = 'Disconnected', PartiallyDisconnected = 'PartiallyDisconnected' }

	export enum DataBoxEdgeDevicePropertiesDeviceType { DataBoxEdgeDevice = 'DataBoxEdgeDevice' }


	/** The SKU type. */
	export interface Sku {

		/** SKU name. */
		name?: SkuName | null;

		/** The SKU tier. This is based on the SKU name. */
		tier?: SkuTier | null;
	}

	/** The SKU type. */
	export interface SkuFormProperties {

		/** SKU name. */
		name: FormControl<SkuName | null | undefined>,

		/** The SKU tier. This is based on the SKU name. */
		tier: FormControl<SkuTier | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			name: new FormControl<SkuName | null | undefined>(undefined),
			tier: new FormControl<SkuTier | null | undefined>(undefined),
		});

	}

	export enum SkuName { Gateway = 'Gateway', Edge = 'Edge' }

	export enum SkuTier { Standard = 'Standard' }


	/** The extended Info of the Data Box Edge/Gateway device. */
	export interface DataBoxEdgeDeviceExtendedInfo {

		/** The properties of the Data Box Edge/Gateway device extended info. */
		properties?: DataBoxEdgeDeviceExtendedInfoProperties;
	}

	/** The extended Info of the Data Box Edge/Gateway device. */
	export interface DataBoxEdgeDeviceExtendedInfoFormProperties {
	}
	export function CreateDataBoxEdgeDeviceExtendedInfoFormGroup() {
		return new FormGroup<DataBoxEdgeDeviceExtendedInfoFormProperties>({
		});

	}


	/** The properties of the Data Box Edge/Gateway device extended info. */
	export interface DataBoxEdgeDeviceExtendedInfoProperties {

		/** The public part of the encryption certificate. Client uses this to encrypt any secret. */
		encryptionKey?: string | null;

		/** The digital signature of encrypted certificate. */
		encryptionKeyThumbprint?: string | null;

		/** The Resource ID of the Resource. */
		resourceKey?: string | null;
	}

	/** The properties of the Data Box Edge/Gateway device extended info. */
	export interface DataBoxEdgeDeviceExtendedInfoPropertiesFormProperties {

		/** The public part of the encryption certificate. Client uses this to encrypt any secret. */
		encryptionKey: FormControl<string | null | undefined>,

		/** The digital signature of encrypted certificate. */
		encryptionKeyThumbprint: FormControl<string | null | undefined>,

		/** The Resource ID of the Resource. */
		resourceKey: FormControl<string | null | undefined>,
	}
	export function CreateDataBoxEdgeDeviceExtendedInfoPropertiesFormGroup() {
		return new FormGroup<DataBoxEdgeDeviceExtendedInfoPropertiesFormProperties>({
			encryptionKey: new FormControl<string | null | undefined>(undefined),
			encryptionKeyThumbprint: new FormControl<string | null | undefined>(undefined),
			resourceKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The collection of Data Box Edge/Gateway devices. */
	export interface DataBoxEdgeDeviceList {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** The list of Data Box Edge/Gateway devices. */
		value?: Array<DataBoxEdgeDevice>;
	}

	/** The collection of Data Box Edge/Gateway devices. */
	export interface DataBoxEdgeDeviceListFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDataBoxEdgeDeviceListFormGroup() {
		return new FormGroup<DataBoxEdgeDeviceListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Data Box Edge/Gateway device patch. */
	export interface DataBoxEdgeDevicePatch {

		/** The tags attached to the Data Box Edge/Gateway resource. */
		tags?: {[id: string]: string };
	}

	/** The Data Box Edge/Gateway device patch. */
	export interface DataBoxEdgeDevicePatchFormProperties {

		/** The tags attached to the Data Box Edge/Gateway resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDataBoxEdgeDevicePatchFormGroup() {
		return new FormGroup<DataBoxEdgeDevicePatchFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Trigger details. */
	export interface FileEventTrigger {

		/** The path ID that uniquely identifies the object. */
		id?: string | null;

		/** The object name. */
		name?: string | null;

		/**
		 * File trigger properties.
		 * Required
		 */
		properties: FileTriggerProperties;

		/** The hierarchical type of the object. */
		type?: string | null;
	}

	/** Trigger details. */
	export interface FileEventTriggerFormProperties {

		/** The path ID that uniquely identifies the object. */
		id: FormControl<string | null | undefined>,

		/** The object name. */
		name: FormControl<string | null | undefined>,

		/** The hierarchical type of the object. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFileEventTriggerFormGroup() {
		return new FormGroup<FileEventTriggerFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** File trigger properties. */
	export interface FileTriggerProperties {

		/** A custom context tag typically used to correlate the trigger against its usage. For example, if a periodic timer trigger is intended for certain specific IoT modules in the device, the tag can be the name or the image URL of the module. */
		customContextTag?: string | null;

		/**
		 * Compute role against which events will be raised.
		 * Required
		 */
		sinkInfo: RoleSinkInfo;

		/**
		 * File source details.
		 * Required
		 */
		sourceInfo: FileSourceInfo;
	}

	/** File trigger properties. */
	export interface FileTriggerPropertiesFormProperties {

		/** A custom context tag typically used to correlate the trigger against its usage. For example, if a periodic timer trigger is intended for certain specific IoT modules in the device, the tag can be the name or the image URL of the module. */
		customContextTag: FormControl<string | null | undefined>,
	}
	export function CreateFileTriggerPropertiesFormGroup() {
		return new FormGroup<FileTriggerPropertiesFormProperties>({
			customContextTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Compute role against which events will be raised. */
	export interface RoleSinkInfo {

		/**
		 * Compute role ID.
		 * Required
		 */
		roleId: string;
	}

	/** Compute role against which events will be raised. */
	export interface RoleSinkInfoFormProperties {

		/**
		 * Compute role ID.
		 * Required
		 */
		roleId: FormControl<string | null | undefined>,
	}
	export function CreateRoleSinkInfoFormGroup() {
		return new FormGroup<RoleSinkInfoFormProperties>({
			roleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** File source details. */
	export interface FileSourceInfo {

		/**
		 * File share ID.
		 * Required
		 */
		shareId: string;
	}

	/** File source details. */
	export interface FileSourceInfoFormProperties {

		/**
		 * File share ID.
		 * Required
		 */
		shareId: FormControl<string | null | undefined>,
	}
	export function CreateFileSourceInfoFormGroup() {
		return new FormGroup<FileSourceInfoFormProperties>({
			shareId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Metadata of IoT device/IoT Edge device to be configured. */
	export interface IoTDeviceInfo {

		/** Authentication mechanism for IoT devices. */
		authentication?: Authentication;

		/**
		 * ID of the IoT device/edge device.
		 * Required
		 */
		deviceId: string;

		/**
		 * Host name for the IoT hub associated to the device.
		 * Required
		 */
		ioTHostHub: string;
	}

	/** Metadata of IoT device/IoT Edge device to be configured. */
	export interface IoTDeviceInfoFormProperties {

		/**
		 * ID of the IoT device/edge device.
		 * Required
		 */
		deviceId: FormControl<string | null | undefined>,

		/**
		 * Host name for the IoT hub associated to the device.
		 * Required
		 */
		ioTHostHub: FormControl<string | null | undefined>,
	}
	export function CreateIoTDeviceInfoFormGroup() {
		return new FormGroup<IoTDeviceInfoFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ioTHostHub: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Compute role. */
	export interface IoTRole {

		/** The path ID that uniquely identifies the object. */
		id?: string | null;

		/** The object name. */
		name?: string | null;

		/** IoT role properties. */
		properties?: IoTRoleProperties;

		/** The hierarchical type of the object. */
		type?: string | null;
	}

	/** Compute role. */
	export interface IoTRoleFormProperties {

		/** The path ID that uniquely identifies the object. */
		id: FormControl<string | null | undefined>,

		/** The object name. */
		name: FormControl<string | null | undefined>,

		/** The hierarchical type of the object. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateIoTRoleFormGroup() {
		return new FormGroup<IoTRoleFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** IoT role properties. */
	export interface IoTRoleProperties {

		/**
		 * Host OS supported by the IoT role.
		 * Required
		 */
		hostPlatform: IoTRolePropertiesHostPlatform;

		/**
		 * Metadata of IoT device/IoT Edge device to be configured.
		 * Required
		 */
		ioTDeviceDetails: IoTDeviceInfo;

		/**
		 * Metadata of IoT device/IoT Edge device to be configured.
		 * Required
		 */
		ioTEdgeDeviceDetails: IoTDeviceInfo;

		/**
		 * Role status.
		 * Required
		 */
		roleStatus: IoTRolePropertiesRoleStatus;

		/** Mount points of shares in role(s). */
		shareMappings?: Array<MountPointMap>;
	}

	/** IoT role properties. */
	export interface IoTRolePropertiesFormProperties {

		/**
		 * Host OS supported by the IoT role.
		 * Required
		 */
		hostPlatform: FormControl<IoTRolePropertiesHostPlatform | null | undefined>,

		/**
		 * Role status.
		 * Required
		 */
		roleStatus: FormControl<IoTRolePropertiesRoleStatus | null | undefined>,
	}
	export function CreateIoTRolePropertiesFormGroup() {
		return new FormGroup<IoTRolePropertiesFormProperties>({
			hostPlatform: new FormControl<IoTRolePropertiesHostPlatform | null | undefined>(undefined, [Validators.required]),
			roleStatus: new FormControl<IoTRolePropertiesRoleStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IoTRolePropertiesHostPlatform { Windows = 'Windows', Linux = 'Linux' }

	export enum IoTRolePropertiesRoleStatus { Enabled = 'Enabled', Disabled = 'Disabled' }


	/** The share mount point. */
	export interface MountPointMap {

		/** Mount point for the share. */
		mountPoint?: string | null;

		/** ID of the role to which share is mounted. */
		roleId?: string | null;

		/** Role type. */
		roleType?: MountPointMapRoleType | null;

		/**
		 * ID of the share mounted to the role VM.
		 * Required
		 */
		shareId: string;
	}

	/** The share mount point. */
	export interface MountPointMapFormProperties {

		/** Mount point for the share. */
		mountPoint: FormControl<string | null | undefined>,

		/** ID of the role to which share is mounted. */
		roleId: FormControl<string | null | undefined>,

		/** Role type. */
		roleType: FormControl<MountPointMapRoleType | null | undefined>,

		/**
		 * ID of the share mounted to the role VM.
		 * Required
		 */
		shareId: FormControl<string | null | undefined>,
	}
	export function CreateMountPointMapFormGroup() {
		return new FormGroup<MountPointMapFormProperties>({
			mountPoint: new FormControl<string | null | undefined>(undefined),
			roleId: new FormControl<string | null | undefined>(undefined),
			roleType: new FormControl<MountPointMapRoleType | null | undefined>(undefined),
			shareId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MountPointMapRoleType { IOT = 'IOT', ASA = 'ASA', Functions = 'Functions', Cognitive = 'Cognitive' }


	/** Details related to the IPv4 address configuration. */
	export interface Ipv4Config {

		/** The IPv4 gateway of the network adapter. */
		gateway?: string | null;

		/** The IPv4 address of the network adapter. */
		ipAddress?: string | null;

		/** The IPv4 subnet of the network adapter. */
		subnet?: string | null;
	}

	/** Details related to the IPv4 address configuration. */
	export interface Ipv4ConfigFormProperties {

		/** The IPv4 gateway of the network adapter. */
		gateway: FormControl<string | null | undefined>,

		/** The IPv4 address of the network adapter. */
		ipAddress: FormControl<string | null | undefined>,

		/** The IPv4 subnet of the network adapter. */
		subnet: FormControl<string | null | undefined>,
	}
	export function CreateIpv4ConfigFormGroup() {
		return new FormGroup<Ipv4ConfigFormProperties>({
			gateway: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			subnet: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details related to the IPv6 address configuration. */
	export interface Ipv6Config {

		/** The IPv6 gateway of the network adapter. */
		gateway?: string | null;

		/** The IPv6 address of the network adapter. */
		ipAddress?: string | null;

		/** The IPv6 prefix of the network adapter. */
		prefixLength?: number | null;
	}

	/** Details related to the IPv6 address configuration. */
	export interface Ipv6ConfigFormProperties {

		/** The IPv6 gateway of the network adapter. */
		gateway: FormControl<string | null | undefined>,

		/** The IPv6 address of the network adapter. */
		ipAddress: FormControl<string | null | undefined>,

		/** The IPv6 prefix of the network adapter. */
		prefixLength: FormControl<number | null | undefined>,
	}
	export function CreateIpv6ConfigFormGroup() {
		return new FormGroup<Ipv6ConfigFormProperties>({
			gateway: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			prefixLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A device job. */
	export interface Job {

		/** The UTC date and time at which the job completed. */
		endTime?: Date | null;

		/** The job error information containing the list of job errors. */
		error?: JobErrorDetails;

		/** The path ID that uniquely identifies the object. */
		id?: string | null;

		/** The name of the object. */
		name?: string | null;

		/** The percentage of the job that is complete. */
		percentComplete?: number | null;

		/** The properties for the job. */
		properties?: JobProperties;

		/** The UTC date and time at which the job started. */
		startTime?: Date | null;

		/** The current status of the job. */
		status?: JobStatus | null;

		/** The hierarchical type of the object. */
		type?: string | null;
	}

	/** A device job. */
	export interface JobFormProperties {

		/** The UTC date and time at which the job completed. */
		endTime: FormControl<Date | null | undefined>,

		/** The path ID that uniquely identifies the object. */
		id: FormControl<string | null | undefined>,

		/** The name of the object. */
		name: FormControl<string | null | undefined>,

		/** The percentage of the job that is complete. */
		percentComplete: FormControl<number | null | undefined>,

		/** The UTC date and time at which the job started. */
		startTime: FormControl<Date | null | undefined>,

		/** The current status of the job. */
		status: FormControl<JobStatus | null | undefined>,

		/** The hierarchical type of the object. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			percentComplete: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<JobStatus | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The job error information containing the list of job errors. */
	export interface JobErrorDetails {

		/** The code intended for programmatic access. */
		code?: string | null;

		/** The error details. */
		errorDetails?: Array<JobErrorItem>;

		/** The message that describes the error in detail. */
		message?: string | null;
	}

	/** The job error information containing the list of job errors. */
	export interface JobErrorDetailsFormProperties {

		/** The code intended for programmatic access. */
		code: FormControl<string | null | undefined>,

		/** The message that describes the error in detail. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateJobErrorDetailsFormGroup() {
		return new FormGroup<JobErrorDetailsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The job error items. */
	export interface JobErrorItem {

		/** The code intended for programmatic access. */
		code?: string | null;

		/** The message that describes the error in detail. */
		message?: string | null;

		/** The recommended actions. */
		recommendations?: Array<string>;
	}

	/** The job error items. */
	export interface JobErrorItemFormProperties {

		/** The code intended for programmatic access. */
		code: FormControl<string | null | undefined>,

		/** The message that describes the error in detail. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateJobErrorItemFormGroup() {
		return new FormGroup<JobErrorItemFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties for the job. */
	export interface JobProperties {

		/** Current stage of the update operation. */
		currentStage?: JobPropertiesCurrentStage | null;

		/** Details about the download progress of update. */
		downloadProgress?: UpdateDownloadProgress;

		/** Local share/remote container relative path to the error manifest file of the refresh. */
		errorManifestFile?: string | null;

		/** If only subfolders need to be refreshed, then the subfolder path inside the share. (The path is empty if there are no subfolders.) */
		folder?: string | null;

		/** Progress details during installation of updates. */
		installProgress?: UpdateInstallProgress;

		/** The type of the job. */
		jobType?: JobPropertiesJobType | null;

		/** ARM ID of the share that was refreshed. */
		shareId?: string | null;

		/** Total number of errors encountered during the refresh process. */
		totalRefreshErrors?: number | null;
	}

	/** The properties for the job. */
	export interface JobPropertiesFormProperties {

		/** Current stage of the update operation. */
		currentStage: FormControl<JobPropertiesCurrentStage | null | undefined>,

		/** Local share/remote container relative path to the error manifest file of the refresh. */
		errorManifestFile: FormControl<string | null | undefined>,

		/** If only subfolders need to be refreshed, then the subfolder path inside the share. (The path is empty if there are no subfolders.) */
		folder: FormControl<string | null | undefined>,

		/** The type of the job. */
		jobType: FormControl<JobPropertiesJobType | null | undefined>,

		/** ARM ID of the share that was refreshed. */
		shareId: FormControl<string | null | undefined>,

		/** Total number of errors encountered during the refresh process. */
		totalRefreshErrors: FormControl<number | null | undefined>,
	}
	export function CreateJobPropertiesFormGroup() {
		return new FormGroup<JobPropertiesFormProperties>({
			currentStage: new FormControl<JobPropertiesCurrentStage | null | undefined>(undefined),
			errorManifestFile: new FormControl<string | null | undefined>(undefined),
			folder: new FormControl<string | null | undefined>(undefined),
			jobType: new FormControl<JobPropertiesJobType | null | undefined>(undefined),
			shareId: new FormControl<string | null | undefined>(undefined),
			totalRefreshErrors: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum JobPropertiesCurrentStage { Unknown = 'Unknown', Initial = 'Initial', ScanStarted = 'ScanStarted', ScanComplete = 'ScanComplete', ScanFailed = 'ScanFailed', DownloadStarted = 'DownloadStarted', DownloadComplete = 'DownloadComplete', DownloadFailed = 'DownloadFailed', InstallStarted = 'InstallStarted', InstallComplete = 'InstallComplete', InstallFailed = 'InstallFailed', RebootInitiated = 'RebootInitiated', Success = 'Success', Failure = 'Failure', RescanStarted = 'RescanStarted', RescanComplete = 'RescanComplete', RescanFailed = 'RescanFailed' }


	/** Details about the download progress of update. */
	export interface UpdateDownloadProgress {

		/** The download phase. */
		downloadPhase?: UpdateDownloadProgressDownloadPhase | null;

		/** Number of updates downloaded. */
		numberOfUpdatesDownloaded?: number | null;

		/** Number of updates to download. */
		numberOfUpdatesToDownload?: number | null;

		/** Percentage of completion. */
		percentComplete?: number | null;

		/** Total bytes downloaded. */
		totalBytesDownloaded?: number | null;

		/** Total bytes to download. */
		totalBytesToDownload?: number | null;
	}

	/** Details about the download progress of update. */
	export interface UpdateDownloadProgressFormProperties {

		/** The download phase. */
		downloadPhase: FormControl<UpdateDownloadProgressDownloadPhase | null | undefined>,

		/** Number of updates downloaded. */
		numberOfUpdatesDownloaded: FormControl<number | null | undefined>,

		/** Number of updates to download. */
		numberOfUpdatesToDownload: FormControl<number | null | undefined>,

		/** Percentage of completion. */
		percentComplete: FormControl<number | null | undefined>,

		/** Total bytes downloaded. */
		totalBytesDownloaded: FormControl<number | null | undefined>,

		/** Total bytes to download. */
		totalBytesToDownload: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDownloadProgressFormGroup() {
		return new FormGroup<UpdateDownloadProgressFormProperties>({
			downloadPhase: new FormControl<UpdateDownloadProgressDownloadPhase | null | undefined>(undefined),
			numberOfUpdatesDownloaded: new FormControl<number | null | undefined>(undefined),
			numberOfUpdatesToDownload: new FormControl<number | null | undefined>(undefined),
			percentComplete: new FormControl<number | null | undefined>(undefined),
			totalBytesDownloaded: new FormControl<number | null | undefined>(undefined),
			totalBytesToDownload: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum UpdateDownloadProgressDownloadPhase { Unknown = 'Unknown', Initializing = 'Initializing', Downloading = 'Downloading', Verifying = 'Verifying' }


	/** Progress details during installation of updates. */
	export interface UpdateInstallProgress {

		/** Number of updates installed. */
		numberOfUpdatesInstalled?: number | null;

		/** Number of updates to install. */
		numberOfUpdatesToInstall?: number | null;

		/** Percentage completed. */
		percentComplete?: number | null;
	}

	/** Progress details during installation of updates. */
	export interface UpdateInstallProgressFormProperties {

		/** Number of updates installed. */
		numberOfUpdatesInstalled: FormControl<number | null | undefined>,

		/** Number of updates to install. */
		numberOfUpdatesToInstall: FormControl<number | null | undefined>,

		/** Percentage completed. */
		percentComplete: FormControl<number | null | undefined>,
	}
	export function CreateUpdateInstallProgressFormGroup() {
		return new FormGroup<UpdateInstallProgressFormProperties>({
			numberOfUpdatesInstalled: new FormControl<number | null | undefined>(undefined),
			numberOfUpdatesToInstall: new FormControl<number | null | undefined>(undefined),
			percentComplete: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum JobPropertiesJobType { Invalid = 'Invalid', ScanForUpdates = 'ScanForUpdates', DownloadUpdates = 'DownloadUpdates', InstallUpdates = 'InstallUpdates', RefreshShare = 'RefreshShare' }

	export enum JobStatus { Invalid = 'Invalid', Running = 'Running', Succeeded = 'Succeeded', Failed = 'Failed', Canceled = 'Canceled', Paused = 'Paused', Scheduled = 'Scheduled' }


	/** Metric Dimension v1. */
	export interface MetricDimension_V1 {

		/** Display name of the metrics dimension. */
		displayName?: string | null;

		/** Name of the metrics dimension. */
		name?: string | null;

		/** To be exported to shoe box. */
		toBeExportedForShoebox?: boolean | null;
	}

	/** Metric Dimension v1. */
	export interface MetricDimension_V1FormProperties {

		/** Display name of the metrics dimension. */
		displayName: FormControl<string | null | undefined>,

		/** Name of the metrics dimension. */
		name: FormControl<string | null | undefined>,

		/** To be exported to shoe box. */
		toBeExportedForShoebox: FormControl<boolean | null | undefined>,
	}
	export function CreateMetricDimension_V1FormGroup() {
		return new FormGroup<MetricDimension_V1FormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			toBeExportedForShoebox: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Metric specification version 1. */
	export interface MetricSpecification_V1 {

		/** Metric aggregation type. */
		aggregationType?: MetricSpecification_V1AggregationType | null;

		/** Metric category. */
		category?: MetricSpecification_V1Category | null;

		/** Metric dimensions, other than default dimension which is resource. */
		dimensions?: Array<MetricDimension_V1>;

		/** Description of the metric to be displayed. */
		displayDescription?: string | null;

		/** Display name of the metric. */
		displayName?: string | null;

		/** Set true to fill the gaps with zero. */
		fillGapWithZero?: boolean | null;

		/** Name of the metric. */
		name?: string | null;

		/** Resource name override. */
		resourceIdDimensionNameOverride?: string | null;

		/** Support metric aggregation type. */
		supportedAggregationTypes?: Array<MetricSpecification_V1AggregationType>;

		/** Support granularity of metrics. */
		supportedTimeGrainTypes?: Array<string>;

		/** Metric units. */
		unit?: MetricSpecification_V1Unit | null;
	}

	/** Metric specification version 1. */
	export interface MetricSpecification_V1FormProperties {

		/** Metric aggregation type. */
		aggregationType: FormControl<MetricSpecification_V1AggregationType | null | undefined>,

		/** Metric category. */
		category: FormControl<MetricSpecification_V1Category | null | undefined>,

		/** Description of the metric to be displayed. */
		displayDescription: FormControl<string | null | undefined>,

		/** Display name of the metric. */
		displayName: FormControl<string | null | undefined>,

		/** Set true to fill the gaps with zero. */
		fillGapWithZero: FormControl<boolean | null | undefined>,

		/** Name of the metric. */
		name: FormControl<string | null | undefined>,

		/** Resource name override. */
		resourceIdDimensionNameOverride: FormControl<string | null | undefined>,

		/** Metric units. */
		unit: FormControl<MetricSpecification_V1Unit | null | undefined>,
	}
	export function CreateMetricSpecification_V1FormGroup() {
		return new FormGroup<MetricSpecification_V1FormProperties>({
			aggregationType: new FormControl<MetricSpecification_V1AggregationType | null | undefined>(undefined),
			category: new FormControl<MetricSpecification_V1Category | null | undefined>(undefined),
			displayDescription: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			fillGapWithZero: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceIdDimensionNameOverride: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<MetricSpecification_V1Unit | null | undefined>(undefined),
		});

	}

	export enum MetricSpecification_V1AggregationType { NotSpecified = 'NotSpecified', None = 'None', Average = 'Average', Minimum = 'Minimum', Maximum = 'Maximum', Total = 'Total', Count = 'Count' }

	export enum MetricSpecification_V1Category { Capacity = 'Capacity', Transaction = 'Transaction' }

	export enum MetricSpecification_V1Unit { NotSpecified = 'NotSpecified', Percent = 'Percent', Count = 'Count', Seconds = 'Seconds', Milliseconds = 'Milliseconds', Bytes = 'Bytes', BytesPerSecond = 'BytesPerSecond', CountPerSecond = 'CountPerSecond' }


	/** Represents the networkAdapter on a device. */
	export interface NetworkAdapter {

		/** Instance ID of network adapter. */
		adapterId?: string | null;

		/** The network adapter position. */
		adapterPosition?: NetworkAdapterPosition;

		/** Value indicating whether this adapter has DHCP enabled. */
		dhcpStatus?: NetworkAdapterDhcpStatus | null;

		/** The list of DNS Servers of the device. */
		dnsServers?: Array<string>;

		/** Logical index of the adapter. */
		index?: number | null;

		/** Details related to the IPv4 address configuration. */
		ipv4Configuration?: Ipv4Config;

		/** Details related to the IPv6 address configuration. */
		ipv6Configuration?: Ipv6Config;

		/** The IPv6 local address. */
		ipv6LinkLocalAddress?: string | null;

		/** Hardware label for the adapter. */
		label?: string | null;

		/** Link speed. */
		linkSpeed?: number | null;

		/** MAC address. */
		macAddress?: string | null;

		/** Network adapter name. */
		networkAdapterName?: string | null;

		/** Node ID of the network adapter. */
		nodeId?: string | null;

		/** Value indicating whether this adapter is RDMA capable. */
		rdmaStatus?: NetworkAdapterRdmaStatus | null;

		/** Value indicating whether this adapter is valid. */
		status?: NetworkAdapterStatus | null;
	}

	/** Represents the networkAdapter on a device. */
	export interface NetworkAdapterFormProperties {

		/** Instance ID of network adapter. */
		adapterId: FormControl<string | null | undefined>,

		/** Value indicating whether this adapter has DHCP enabled. */
		dhcpStatus: FormControl<NetworkAdapterDhcpStatus | null | undefined>,

		/** Logical index of the adapter. */
		index: FormControl<number | null | undefined>,

		/** The IPv6 local address. */
		ipv6LinkLocalAddress: FormControl<string | null | undefined>,

		/** Hardware label for the adapter. */
		label: FormControl<string | null | undefined>,

		/** Link speed. */
		linkSpeed: FormControl<number | null | undefined>,

		/** MAC address. */
		macAddress: FormControl<string | null | undefined>,

		/** Network adapter name. */
		networkAdapterName: FormControl<string | null | undefined>,

		/** Node ID of the network adapter. */
		nodeId: FormControl<string | null | undefined>,

		/** Value indicating whether this adapter is RDMA capable. */
		rdmaStatus: FormControl<NetworkAdapterRdmaStatus | null | undefined>,

		/** Value indicating whether this adapter is valid. */
		status: FormControl<NetworkAdapterStatus | null | undefined>,
	}
	export function CreateNetworkAdapterFormGroup() {
		return new FormGroup<NetworkAdapterFormProperties>({
			adapterId: new FormControl<string | null | undefined>(undefined),
			dhcpStatus: new FormControl<NetworkAdapterDhcpStatus | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			ipv6LinkLocalAddress: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			linkSpeed: new FormControl<number | null | undefined>(undefined),
			macAddress: new FormControl<string | null | undefined>(undefined),
			networkAdapterName: new FormControl<string | null | undefined>(undefined),
			nodeId: new FormControl<string | null | undefined>(undefined),
			rdmaStatus: new FormControl<NetworkAdapterRdmaStatus | null | undefined>(undefined),
			status: new FormControl<NetworkAdapterStatus | null | undefined>(undefined),
		});

	}


	/** The network adapter position. */
	export interface NetworkAdapterPosition {

		/** The network group. */
		networkGroup?: NetworkAdapterPositionNetworkGroup | null;

		/** The port. */
		port?: number | null;
	}

	/** The network adapter position. */
	export interface NetworkAdapterPositionFormProperties {

		/** The network group. */
		networkGroup: FormControl<NetworkAdapterPositionNetworkGroup | null | undefined>,

		/** The port. */
		port: FormControl<number | null | undefined>,
	}
	export function CreateNetworkAdapterPositionFormGroup() {
		return new FormGroup<NetworkAdapterPositionFormProperties>({
			networkGroup: new FormControl<NetworkAdapterPositionNetworkGroup | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum NetworkAdapterPositionNetworkGroup { None = 'None', NonRDMA = 'NonRDMA', RDMA = 'RDMA' }

	export enum NetworkAdapterDhcpStatus { Disabled = 'Disabled', Enabled = 'Enabled' }

	export enum NetworkAdapterRdmaStatus { Incapable = 'Incapable', Capable = 'Capable' }

	export enum NetworkAdapterStatus { Inactive = 'Inactive', Active = 'Active' }


	/** The network settings of a device. */
	export interface NetworkSettings {

		/** The properties of network settings. */
		properties?: NetworkSettingsProperties;
	}

	/** The network settings of a device. */
	export interface NetworkSettingsFormProperties {
	}
	export function CreateNetworkSettingsFormGroup() {
		return new FormGroup<NetworkSettingsFormProperties>({
		});

	}


	/** The properties of network settings. */
	export interface NetworkSettingsProperties {

		/** The network adapter list on the device. */
		networkAdapters?: Array<NetworkAdapter>;
	}

	/** The properties of network settings. */
	export interface NetworkSettingsPropertiesFormProperties {
	}
	export function CreateNetworkSettingsPropertiesFormGroup() {
		return new FormGroup<NetworkSettingsPropertiesFormProperties>({
		});

	}


	/** Operations. */
	export interface Operation {

		/** Operation display properties. */
		display?: OperationDisplay;

		/** Name of the operation. */
		name?: string | null;

		/** Origin of the operation. */
		origin?: string | null;

		/** Operation properties. */
		properties?: OperationProperties;
	}

	/** Operations. */
	export interface OperationFormProperties {

		/** Name of the operation. */
		name: FormControl<string | null | undefined>,

		/** Origin of the operation. */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operation display properties. */
	export interface OperationDisplay {

		/** Description of the operation to be performed. */
		description?: string | null;

		/** Operation to be performed on the resource. */
		operation?: string | null;

		/** Provider name. */
		provider?: string | null;

		/** The type of resource in which the operation is performed. */
		resource?: string | null;
	}

	/** Operation display properties. */
	export interface OperationDisplayFormProperties {

		/** Description of the operation to be performed. */
		description: FormControl<string | null | undefined>,

		/** Operation to be performed on the resource. */
		operation: FormControl<string | null | undefined>,

		/** Provider name. */
		provider: FormControl<string | null | undefined>,

		/** The type of resource in which the operation is performed. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayFormGroup() {
		return new FormGroup<OperationDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operation properties. */
	export interface OperationProperties {

		/** Service specification. */
		serviceSpecification?: ServiceSpecification;
	}

	/** Operation properties. */
	export interface OperationPropertiesFormProperties {
	}
	export function CreateOperationPropertiesFormGroup() {
		return new FormGroup<OperationPropertiesFormProperties>({
		});

	}


	/** Service specification. */
	export interface ServiceSpecification {

		/** Metric specification as defined by shoebox. */
		metricSpecifications?: Array<MetricSpecification_V1>;
	}

	/** Service specification. */
	export interface ServiceSpecificationFormProperties {
	}
	export function CreateServiceSpecificationFormGroup() {
		return new FormGroup<ServiceSpecificationFormProperties>({
		});

	}


	/** The list of operations used for the discovery of available provider operations. */
	export interface OperationsList {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/**
		 * The value.
		 * Required
		 */
		value: Array<Operation>;
	}

	/** The list of operations used for the discovery of available provider operations. */
	export interface OperationsListFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationsListFormGroup() {
		return new FormGroup<OperationsListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The order details. */
	export interface Order {

		/** Order properties. */
		properties?: OrderProperties;
	}

	/** The order details. */
	export interface OrderFormProperties {
	}
	export function CreateOrderFormGroup() {
		return new FormGroup<OrderFormProperties>({
		});

	}


	/** Order properties. */
	export interface OrderProperties {

		/**
		 * Contains all the contact details of the customer.
		 * Required
		 */
		contactInformation: ContactDetails;

		/** Represents a single status change. */
		currentStatus?: OrderStatus;

		/** Tracking information for the package delivered to the customer whether it has an original or a replacement device. */
		deliveryTrackingInfo?: Array<TrackingInfo>;

		/** List of status changes in the order. */
		orderHistory?: Array<OrderStatus>;

		/** Tracking information for the package returned from the customer whether it has an original or a replacement device. */
		returnTrackingInfo?: Array<TrackingInfo>;

		/** Serial number of the device. */
		serialNumber?: string | null;

		/**
		 * The shipping address of the customer.
		 * Required
		 */
		shippingAddress: Address;
	}

	/** Order properties. */
	export interface OrderPropertiesFormProperties {

		/** Serial number of the device. */
		serialNumber: FormControl<string | null | undefined>,
	}
	export function CreateOrderPropertiesFormGroup() {
		return new FormGroup<OrderPropertiesFormProperties>({
			serialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single status change. */
	export interface OrderStatus {

		/** Comments related to this status change. */
		comments?: string | null;

		/**
		 * Status of the order as per the allowed status types.
		 * Required
		 */
		status: OrderStatusStatus;

		/** Time of status update. */
		updateDateTime?: Date | null;
	}

	/** Represents a single status change. */
	export interface OrderStatusFormProperties {

		/** Comments related to this status change. */
		comments: FormControl<string | null | undefined>,

		/**
		 * Status of the order as per the allowed status types.
		 * Required
		 */
		status: FormControl<OrderStatusStatus | null | undefined>,

		/** Time of status update. */
		updateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateOrderStatusFormGroup() {
		return new FormGroup<OrderStatusFormProperties>({
			comments: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<OrderStatusStatus | null | undefined>(undefined, [Validators.required]),
			updateDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum OrderStatusStatus { Untracked = 'Untracked', AwaitingFulfilment = 'AwaitingFulfilment', AwaitingPreparation = 'AwaitingPreparation', AwaitingShipment = 'AwaitingShipment', Shipped = 'Shipped', Arriving = 'Arriving', Delivered = 'Delivered', ReplacementRequested = 'ReplacementRequested', LostDevice = 'LostDevice', Declined = 'Declined', ReturnInitiated = 'ReturnInitiated', AwaitingReturnShipment = 'AwaitingReturnShipment', ShippedBack = 'ShippedBack', CollectedAtMicrosoft = 'CollectedAtMicrosoft' }


	/** Tracking courier information. */
	export interface TrackingInfo {

		/** Name of the carrier used in the delivery. */
		carrierName?: string | null;

		/** Serial number of the device being tracked. */
		serialNumber?: string | null;

		/** Tracking ID of the shipment. */
		trackingId?: string | null;

		/** Tracking URL of the shipment. */
		trackingUrl?: string | null;
	}

	/** Tracking courier information. */
	export interface TrackingInfoFormProperties {

		/** Name of the carrier used in the delivery. */
		carrierName: FormControl<string | null | undefined>,

		/** Serial number of the device being tracked. */
		serialNumber: FormControl<string | null | undefined>,

		/** Tracking ID of the shipment. */
		trackingId: FormControl<string | null | undefined>,

		/** Tracking URL of the shipment. */
		trackingUrl: FormControl<string | null | undefined>,
	}
	export function CreateTrackingInfoFormGroup() {
		return new FormGroup<TrackingInfoFormProperties>({
			carrierName: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
			trackingUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of order entities. */
	export interface OrderList {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** The list of orders. */
		value?: Array<Order>;
	}

	/** List of order entities. */
	export interface OrderListFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOrderListFormGroup() {
		return new FormGroup<OrderListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Trigger details. */
	export interface PeriodicTimerEventTrigger {

		/** The path ID that uniquely identifies the object. */
		id?: string | null;

		/** The object name. */
		name?: string | null;

		/**
		 * Periodic timer trigger properties.
		 * Required
		 */
		properties: PeriodicTimerProperties;

		/** The hierarchical type of the object. */
		type?: string | null;
	}

	/** Trigger details. */
	export interface PeriodicTimerEventTriggerFormProperties {

		/** The path ID that uniquely identifies the object. */
		id: FormControl<string | null | undefined>,

		/** The object name. */
		name: FormControl<string | null | undefined>,

		/** The hierarchical type of the object. */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePeriodicTimerEventTriggerFormGroup() {
		return new FormGroup<PeriodicTimerEventTriggerFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Periodic timer trigger properties. */
	export interface PeriodicTimerProperties {

		/** A custom context tag typically used to correlate the trigger against its usage. For example, if a periodic timer trigger is intended for certain specific IoT modules in the device, the tag can be the name or the image URL of the module. */
		customContextTag?: string | null;

		/**
		 * Compute role against which events will be raised.
		 * Required
		 */
		sinkInfo: RoleSinkInfo;

		/**
		 * Periodic timer event source.
		 * Required
		 */
		sourceInfo: PeriodicTimerSourceInfo;
	}

	/** Periodic timer trigger properties. */
	export interface PeriodicTimerPropertiesFormProperties {

		/** A custom context tag typically used to correlate the trigger against its usage. For example, if a periodic timer trigger is intended for certain specific IoT modules in the device, the tag can be the name or the image URL of the module. */
		customContextTag: FormControl<string | null | undefined>,
	}
	export function CreatePeriodicTimerPropertiesFormGroup() {
		return new FormGroup<PeriodicTimerPropertiesFormProperties>({
			customContextTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Periodic timer event source. */
	export interface PeriodicTimerSourceInfo {

		/**
		 * Periodic frequency at which timer event needs to be raised. Supports daily, hourly, minutes, and seconds.
		 * Required
		 */
		schedule: string;

		/**
		 * The time of the day that results in a valid trigger. Schedule is computed with reference to the time specified up to seconds. If timezone is not specified the time will considered to be in device timezone. The value will always be returned as UTC time.
		 * Required
		 */
		startTime: Date;

		/** Topic where periodic events are published to IoT device. */
		topic?: string | null;
	}

	/** Periodic timer event source. */
	export interface PeriodicTimerSourceInfoFormProperties {

		/**
		 * Periodic frequency at which timer event needs to be raised. Supports daily, hourly, minutes, and seconds.
		 * Required
		 */
		schedule: FormControl<string | null | undefined>,

		/**
		 * The time of the day that results in a valid trigger. Schedule is computed with reference to the time specified up to seconds. If timezone is not specified the time will considered to be in device timezone. The value will always be returned as UTC time.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/** Topic where periodic events are published to IoT device. */
		topic: FormControl<string | null | undefined>,
	}
	export function CreatePeriodicTimerSourceInfoFormGroup() {
		return new FormGroup<PeriodicTimerSourceInfoFormProperties>({
			schedule: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Raw Certificate Data. */
	export interface RawCertificateData {

		/** The authentication type. */
		authenticationType?: RawCertificateDataAuthenticationType | null;

		/**
		 * The base64 encoded certificate raw data.
		 * Required
		 */
		certificate: string;
	}

	/** Raw Certificate Data. */
	export interface RawCertificateDataFormProperties {

		/** The authentication type. */
		authenticationType: FormControl<RawCertificateDataAuthenticationType | null | undefined>,

		/**
		 * The base64 encoded certificate raw data.
		 * Required
		 */
		certificate: FormControl<string | null | undefined>,
	}
	export function CreateRawCertificateDataFormGroup() {
		return new FormGroup<RawCertificateDataFormProperties>({
			authenticationType: new FormControl<RawCertificateDataAuthenticationType | null | undefined>(undefined),
			certificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RawCertificateDataAuthenticationType { Invalid = 'Invalid', AzureActiveDirectory = 'AzureActiveDirectory' }


	/** Fields for tracking refresh job on the share. */
	export interface RefreshDetails {

		/** Indicates the relative path of the error xml for the last refresh job on this particular share, if any. This could be a failed job or a successful job. */
		errorManifestFile?: string | null;

		/** If a refresh share job is currently in progress on this share, this field indicates the ARM resource ID of that job. The field is empty if no job is in progress. */
		inProgressRefreshJobId?: string | null;

		/** Indicates the completed time for the last refresh job on this particular share, if any.This could be a failed job or a successful job. */
		lastCompletedRefreshJobTimeInUTC?: Date | null;

		/** Indicates the id of the last refresh job on this particular share,if any. This could be a failed job or a successful job. */
		lastJob?: string | null;
	}

	/** Fields for tracking refresh job on the share. */
	export interface RefreshDetailsFormProperties {

		/** Indicates the relative path of the error xml for the last refresh job on this particular share, if any. This could be a failed job or a successful job. */
		errorManifestFile: FormControl<string | null | undefined>,

		/** If a refresh share job is currently in progress on this share, this field indicates the ARM resource ID of that job. The field is empty if no job is in progress. */
		inProgressRefreshJobId: FormControl<string | null | undefined>,

		/** Indicates the completed time for the last refresh job on this particular share, if any.This could be a failed job or a successful job. */
		lastCompletedRefreshJobTimeInUTC: FormControl<Date | null | undefined>,

		/** Indicates the id of the last refresh job on this particular share,if any. This could be a failed job or a successful job. */
		lastJob: FormControl<string | null | undefined>,
	}
	export function CreateRefreshDetailsFormGroup() {
		return new FormGroup<RefreshDetailsFormProperties>({
			errorManifestFile: new FormControl<string | null | undefined>(undefined),
			inProgressRefreshJobId: new FormControl<string | null | undefined>(undefined),
			lastCompletedRefreshJobTimeInUTC: new FormControl<Date | null | undefined>(undefined),
			lastJob: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Compute role. */
	export interface Role {

		/**
		 * Role type.
		 * Required
		 */
		kind: MountPointMapRoleType;
	}

	/** Compute role. */
	export interface RoleFormProperties {

		/**
		 * Role type.
		 * Required
		 */
		kind: FormControl<MountPointMapRoleType | null | undefined>,
	}
	export function CreateRoleFormGroup() {
		return new FormGroup<RoleFormProperties>({
			kind: new FormControl<MountPointMapRoleType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Collection of all the roles on the Data Box Edge device. */
	export interface RoleList {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** The Value. */
		value?: Array<Role>;
	}

	/** Collection of all the roles on the Data Box Edge device. */
	export interface RoleListFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRoleListFormGroup() {
		return new FormGroup<RoleListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The security settings of a device. */
	export interface SecuritySettings {

		/**
		 * The properties of security settings.
		 * Required
		 */
		properties: SecuritySettingsProperties;
	}

	/** The security settings of a device. */
	export interface SecuritySettingsFormProperties {
	}
	export function CreateSecuritySettingsFormGroup() {
		return new FormGroup<SecuritySettingsFormProperties>({
		});

	}


	/** The properties of security settings. */
	export interface SecuritySettingsProperties {

		/**
		 * Represent the secrets intended for encryption with asymmetric key pair.
		 * Required
		 */
		deviceAdminPassword: AsymmetricEncryptedSecret;
	}

	/** The properties of security settings. */
	export interface SecuritySettingsPropertiesFormProperties {
	}
	export function CreateSecuritySettingsPropertiesFormGroup() {
		return new FormGroup<SecuritySettingsPropertiesFormProperties>({
		});

	}


	/** Represents a share on the  Data Box Edge/Gateway device. */
	export interface Share {

		/**
		 * The share properties.
		 * Required
		 */
		properties: ShareProperties;
	}

	/** Represents a share on the  Data Box Edge/Gateway device. */
	export interface ShareFormProperties {
	}
	export function CreateShareFormGroup() {
		return new FormGroup<ShareFormProperties>({
		});

	}


	/** The share properties. */
	export interface ShareProperties {

		/**
		 * Access protocol to be used by the share.
		 * Required
		 */
		accessProtocol: SharePropertiesAccessProtocol;

		/** Azure container mapping of the endpoint. */
		azureContainerInfo?: AzureContainerInfo;

		/** List of IP addresses and corresponding access rights on the share(required for NFS protocol). */
		clientAccessRights?: Array<ClientAccessRight>;

		/** Data policy of the share. */
		dataPolicy?: SharePropertiesDataPolicy | null;

		/** Description for the share. */
		description?: string | null;

		/**
		 * Current monitoring status of the share.
		 * Required
		 */
		monitoringStatus: IoTRolePropertiesRoleStatus;

		/** Fields for tracking refresh job on the share. */
		refreshDetails?: RefreshDetails;

		/** Share mount point to the role. */
		shareMappings?: Array<MountPointMap>;

		/**
		 * Current status of the share.
		 * Required
		 */
		shareStatus: SharePropertiesShareStatus;

		/** Mapping of users and corresponding access rights on the share (required for SMB protocol). */
		userAccessRights?: Array<UserAccessRight>;
	}

	/** The share properties. */
	export interface SharePropertiesFormProperties {

		/**
		 * Access protocol to be used by the share.
		 * Required
		 */
		accessProtocol: FormControl<SharePropertiesAccessProtocol | null | undefined>,

		/** Data policy of the share. */
		dataPolicy: FormControl<SharePropertiesDataPolicy | null | undefined>,

		/** Description for the share. */
		description: FormControl<string | null | undefined>,

		/**
		 * Current monitoring status of the share.
		 * Required
		 */
		monitoringStatus: FormControl<IoTRolePropertiesRoleStatus | null | undefined>,

		/**
		 * Current status of the share.
		 * Required
		 */
		shareStatus: FormControl<SharePropertiesShareStatus | null | undefined>,
	}
	export function CreateSharePropertiesFormGroup() {
		return new FormGroup<SharePropertiesFormProperties>({
			accessProtocol: new FormControl<SharePropertiesAccessProtocol | null | undefined>(undefined, [Validators.required]),
			dataPolicy: new FormControl<SharePropertiesDataPolicy | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			monitoringStatus: new FormControl<IoTRolePropertiesRoleStatus | null | undefined>(undefined, [Validators.required]),
			shareStatus: new FormControl<SharePropertiesShareStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SharePropertiesAccessProtocol { SMB = 'SMB', NFS = 'NFS' }

	export enum SharePropertiesDataPolicy { Cloud = 'Cloud', Local = 'Local' }

	export enum SharePropertiesShareStatus { Online = 'Online', Offline = 'Offline' }


	/** The mapping between a particular user and the access type on the SMB share. */
	export interface UserAccessRight {

		/**
		 * Type of access to be allowed for the user.
		 * Required
		 */
		accessType: UserAccessRightAccessType;

		/**
		 * User ID (already existing in the device).
		 * Required
		 */
		userId: string;
	}

	/** The mapping between a particular user and the access type on the SMB share. */
	export interface UserAccessRightFormProperties {

		/**
		 * Type of access to be allowed for the user.
		 * Required
		 */
		accessType: FormControl<UserAccessRightAccessType | null | undefined>,

		/**
		 * User ID (already existing in the device).
		 * Required
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUserAccessRightFormGroup() {
		return new FormGroup<UserAccessRightFormProperties>({
			accessType: new FormControl<UserAccessRightAccessType | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UserAccessRightAccessType { Change = 'Change', Read = 'Read', Custom = 'Custom' }


	/** Specifies the mapping between this particular user and the type of access he has on shares on this device. */
	export interface ShareAccessRight {

		/**
		 * Type of access to be allowed on the share for this user.
		 * Required
		 */
		accessType: UserAccessRightAccessType;

		/**
		 * The share ID.
		 * Required
		 */
		shareId: string;
	}

	/** Specifies the mapping between this particular user and the type of access he has on shares on this device. */
	export interface ShareAccessRightFormProperties {

		/**
		 * Type of access to be allowed on the share for this user.
		 * Required
		 */
		accessType: FormControl<UserAccessRightAccessType | null | undefined>,

		/**
		 * The share ID.
		 * Required
		 */
		shareId: FormControl<string | null | undefined>,
	}
	export function CreateShareAccessRightFormGroup() {
		return new FormGroup<ShareAccessRightFormProperties>({
			accessType: new FormControl<UserAccessRightAccessType | null | undefined>(undefined, [Validators.required]),
			shareId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Collection of all the shares on the Data Box Edge/Gateway device. */
	export interface ShareList {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** The list of shares. */
		value?: Array<Share>;
	}

	/** Collection of all the shares on the Data Box Edge/Gateway device. */
	export interface ShareListFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateShareListFormGroup() {
		return new FormGroup<ShareListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The storage account credential. */
	export interface StorageAccountCredential {

		/**
		 * The storage account credential properties.
		 * Required
		 */
		properties: StorageAccountCredentialProperties;
	}

	/** The storage account credential. */
	export interface StorageAccountCredentialFormProperties {
	}
	export function CreateStorageAccountCredentialFormGroup() {
		return new FormGroup<StorageAccountCredentialFormProperties>({
		});

	}


	/** The storage account credential properties. */
	export interface StorageAccountCredentialProperties {

		/** Represent the secrets intended for encryption with asymmetric key pair. */
		accountKey?: AsymmetricEncryptedSecret;

		/**
		 * Type of storage accessed on the storage account.
		 * Required
		 */
		accountType: StorageAccountCredentialPropertiesAccountType;

		/**
		 * Alias for the storage account.
		 * Required
		 */
		alias: string;

		/** Blob end point for private clouds. */
		blobDomainName?: string | null;

		/** Connection string for the storage account. Use this string if username and account key are not specified. */
		connectionString?: string | null;

		/**
		 * Signifies whether SSL needs to be enabled or not.
		 * Required
		 */
		sslStatus: IoTRolePropertiesRoleStatus;

		/** Username for the storage account. */
		userName?: string | null;
	}

	/** The storage account credential properties. */
	export interface StorageAccountCredentialPropertiesFormProperties {

		/**
		 * Type of storage accessed on the storage account.
		 * Required
		 */
		accountType: FormControl<StorageAccountCredentialPropertiesAccountType | null | undefined>,

		/**
		 * Alias for the storage account.
		 * Required
		 */
		alias: FormControl<string | null | undefined>,

		/** Blob end point for private clouds. */
		blobDomainName: FormControl<string | null | undefined>,

		/** Connection string for the storage account. Use this string if username and account key are not specified. */
		connectionString: FormControl<string | null | undefined>,

		/**
		 * Signifies whether SSL needs to be enabled or not.
		 * Required
		 */
		sslStatus: FormControl<IoTRolePropertiesRoleStatus | null | undefined>,

		/** Username for the storage account. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateStorageAccountCredentialPropertiesFormGroup() {
		return new FormGroup<StorageAccountCredentialPropertiesFormProperties>({
			accountType: new FormControl<StorageAccountCredentialPropertiesAccountType | null | undefined>(undefined, [Validators.required]),
			alias: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			blobDomainName: new FormControl<string | null | undefined>(undefined),
			connectionString: new FormControl<string | null | undefined>(undefined),
			sslStatus: new FormControl<IoTRolePropertiesRoleStatus | null | undefined>(undefined, [Validators.required]),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StorageAccountCredentialPropertiesAccountType { GeneralPurposeStorage = 'GeneralPurposeStorage', BlobStorage = 'BlobStorage' }


	/** The collection of storage account credentials. */
	export interface StorageAccountCredentialList {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** The value. */
		value?: Array<StorageAccountCredential>;
	}

	/** The collection of storage account credentials. */
	export interface StorageAccountCredentialListFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateStorageAccountCredentialListFormGroup() {
		return new FormGroup<StorageAccountCredentialListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Trigger details. */
	export interface Trigger {

		/**
		 * Trigger Kind.
		 * Required
		 */
		kind: TriggerKind;
	}

	/** Trigger details. */
	export interface TriggerFormProperties {

		/**
		 * Trigger Kind.
		 * Required
		 */
		kind: FormControl<TriggerKind | null | undefined>,
	}
	export function CreateTriggerFormGroup() {
		return new FormGroup<TriggerFormProperties>({
			kind: new FormControl<TriggerKind | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TriggerKind { FileEvent = 'FileEvent', PeriodicTimerEvent = 'PeriodicTimerEvent' }


	/** Collection of all trigger on the data box edge device. */
	export interface TriggerList {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** The list of triggers. */
		value?: Array<Trigger>;
	}

	/** Collection of all trigger on the data box edge device. */
	export interface TriggerListFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateTriggerListFormGroup() {
		return new FormGroup<TriggerListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about ongoing updates and availability of updates on the device. */
	export interface UpdateSummary {

		/** The device update information summary. */
		properties?: UpdateSummaryProperties;
	}

	/** Details about ongoing updates and availability of updates on the device. */
	export interface UpdateSummaryFormProperties {
	}
	export function CreateUpdateSummaryFormGroup() {
		return new FormGroup<UpdateSummaryFormProperties>({
		});

	}


	/** The device update information summary. */
	export interface UpdateSummaryProperties {

		/** The last time when a scan was done on the device. */
		deviceLastScannedDateTime?: Date | null;

		/** The current version of the device in format: 1.2.17312.13.", */
		deviceVersionNumber?: string | null;

		/** The current version of the device in text format. */
		friendlyDeviceVersionName?: string | null;

		/** The job ID of the download job in progress. */
		inProgressDownloadJobId?: string | null;

		/** The time when the currently running download (if any) started. */
		inProgressDownloadJobStartedDateTime?: Date | null;

		/** The job ID of the install job in progress. */
		inProgressInstallJobId?: string | null;

		/** The time when the currently running install (if any) started. */
		inProgressInstallJobStartedDateTime?: Date | null;

		/** The time when the last Download job was completed (success/cancelled/failed) on the appliance. */
		lastCompletedDownloadJobDateTime?: Date | null;

		/** The time when the last Install job was completed (success/cancelled/failed) on the appliance. */
		lastCompletedInstallJobDateTime?: Date | null;

		/** The time when the last scan job was completed (success/cancelled/failed) on the appliance. */
		lastCompletedScanJobDateTime?: Date | null;

		/** The current update operation. */
		ongoingUpdateOperation?: UpdateSummaryPropertiesOngoingUpdateOperation | null;

		/** Indicates if updates are available and at least one of the updates needs a reboot. */
		rebootBehavior?: UpdateSummaryPropertiesRebootBehavior | null;

		/** The number of updates available for the current device version as per the last device scan. */
		totalNumberOfUpdatesAvailable?: number | null;

		/** The total number of items pending download. */
		totalNumberOfUpdatesPendingDownload?: number | null;

		/** The total number of items pending install. */
		totalNumberOfUpdatesPendingInstall?: number | null;

		/** The total size of updates available for download in bytes. */
		totalUpdateSizeInBytes?: number | null;

		/** The list of updates available for install. */
		updateTitles?: Array<string>;
	}

	/** The device update information summary. */
	export interface UpdateSummaryPropertiesFormProperties {

		/** The last time when a scan was done on the device. */
		deviceLastScannedDateTime: FormControl<Date | null | undefined>,

		/** The current version of the device in format: 1.2.17312.13.", */
		deviceVersionNumber: FormControl<string | null | undefined>,

		/** The current version of the device in text format. */
		friendlyDeviceVersionName: FormControl<string | null | undefined>,

		/** The job ID of the download job in progress. */
		inProgressDownloadJobId: FormControl<string | null | undefined>,

		/** The time when the currently running download (if any) started. */
		inProgressDownloadJobStartedDateTime: FormControl<Date | null | undefined>,

		/** The job ID of the install job in progress. */
		inProgressInstallJobId: FormControl<string | null | undefined>,

		/** The time when the currently running install (if any) started. */
		inProgressInstallJobStartedDateTime: FormControl<Date | null | undefined>,

		/** The time when the last Download job was completed (success/cancelled/failed) on the appliance. */
		lastCompletedDownloadJobDateTime: FormControl<Date | null | undefined>,

		/** The time when the last Install job was completed (success/cancelled/failed) on the appliance. */
		lastCompletedInstallJobDateTime: FormControl<Date | null | undefined>,

		/** The time when the last scan job was completed (success/cancelled/failed) on the appliance. */
		lastCompletedScanJobDateTime: FormControl<Date | null | undefined>,

		/** The current update operation. */
		ongoingUpdateOperation: FormControl<UpdateSummaryPropertiesOngoingUpdateOperation | null | undefined>,

		/** Indicates if updates are available and at least one of the updates needs a reboot. */
		rebootBehavior: FormControl<UpdateSummaryPropertiesRebootBehavior | null | undefined>,

		/** The number of updates available for the current device version as per the last device scan. */
		totalNumberOfUpdatesAvailable: FormControl<number | null | undefined>,

		/** The total number of items pending download. */
		totalNumberOfUpdatesPendingDownload: FormControl<number | null | undefined>,

		/** The total number of items pending install. */
		totalNumberOfUpdatesPendingInstall: FormControl<number | null | undefined>,

		/** The total size of updates available for download in bytes. */
		totalUpdateSizeInBytes: FormControl<number | null | undefined>,
	}
	export function CreateUpdateSummaryPropertiesFormGroup() {
		return new FormGroup<UpdateSummaryPropertiesFormProperties>({
			deviceLastScannedDateTime: new FormControl<Date | null | undefined>(undefined),
			deviceVersionNumber: new FormControl<string | null | undefined>(undefined),
			friendlyDeviceVersionName: new FormControl<string | null | undefined>(undefined),
			inProgressDownloadJobId: new FormControl<string | null | undefined>(undefined),
			inProgressDownloadJobStartedDateTime: new FormControl<Date | null | undefined>(undefined),
			inProgressInstallJobId: new FormControl<string | null | undefined>(undefined),
			inProgressInstallJobStartedDateTime: new FormControl<Date | null | undefined>(undefined),
			lastCompletedDownloadJobDateTime: new FormControl<Date | null | undefined>(undefined),
			lastCompletedInstallJobDateTime: new FormControl<Date | null | undefined>(undefined),
			lastCompletedScanJobDateTime: new FormControl<Date | null | undefined>(undefined),
			ongoingUpdateOperation: new FormControl<UpdateSummaryPropertiesOngoingUpdateOperation | null | undefined>(undefined),
			rebootBehavior: new FormControl<UpdateSummaryPropertiesRebootBehavior | null | undefined>(undefined),
			totalNumberOfUpdatesAvailable: new FormControl<number | null | undefined>(undefined),
			totalNumberOfUpdatesPendingDownload: new FormControl<number | null | undefined>(undefined),
			totalNumberOfUpdatesPendingInstall: new FormControl<number | null | undefined>(undefined),
			totalUpdateSizeInBytes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum UpdateSummaryPropertiesOngoingUpdateOperation { None = 'None', Scan = 'Scan', Download = 'Download', Install = 'Install' }

	export enum UpdateSummaryPropertiesRebootBehavior { NeverReboots = 'NeverReboots', RequiresReboot = 'RequiresReboot', RequestReboot = 'RequestReboot' }


	/** The upload certificate request. */
	export interface UploadCertificateRequest {

		/**
		 * Raw Certificate Data.
		 * Required
		 */
		properties: RawCertificateData;
	}

	/** The upload certificate request. */
	export interface UploadCertificateRequestFormProperties {
	}
	export function CreateUploadCertificateRequestFormGroup() {
		return new FormGroup<UploadCertificateRequestFormProperties>({
		});

	}


	/** The upload registration certificate response. */
	export interface UploadCertificateResponse {

		/**
		 * Azure Active Directory tenant authority.
		 * Required
		 */
		aadAuthority: string;

		/**
		 * Azure Active Directory tenant ID.
		 * Required
		 */
		aadTenantId: string;

		/** Specifies authentication type. */
		authType?: RawCertificateDataAuthenticationType | null;

		/**
		 * The azure management endpoint audience.
		 * Required
		 */
		azureManagementEndpointAudience: string;

		/**
		 * The resource ID of the Data Box Edge/Gateway device.
		 * Required
		 */
		resourceId: string;

		/**
		 * Azure Active Directory service principal client ID.
		 * Required
		 */
		servicePrincipalClientId: string;

		/**
		 * Azure Active Directory service principal object ID.
		 * Required
		 */
		servicePrincipalObjectId: string;
	}

	/** The upload registration certificate response. */
	export interface UploadCertificateResponseFormProperties {

		/**
		 * Azure Active Directory tenant authority.
		 * Required
		 */
		aadAuthority: FormControl<string | null | undefined>,

		/**
		 * Azure Active Directory tenant ID.
		 * Required
		 */
		aadTenantId: FormControl<string | null | undefined>,

		/** Specifies authentication type. */
		authType: FormControl<RawCertificateDataAuthenticationType | null | undefined>,

		/**
		 * The azure management endpoint audience.
		 * Required
		 */
		azureManagementEndpointAudience: FormControl<string | null | undefined>,

		/**
		 * The resource ID of the Data Box Edge/Gateway device.
		 * Required
		 */
		resourceId: FormControl<string | null | undefined>,

		/**
		 * Azure Active Directory service principal client ID.
		 * Required
		 */
		servicePrincipalClientId: FormControl<string | null | undefined>,

		/**
		 * Azure Active Directory service principal object ID.
		 * Required
		 */
		servicePrincipalObjectId: FormControl<string | null | undefined>,
	}
	export function CreateUploadCertificateResponseFormGroup() {
		return new FormGroup<UploadCertificateResponseFormProperties>({
			aadAuthority: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			aadTenantId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authType: new FormControl<RawCertificateDataAuthenticationType | null | undefined>(undefined),
			azureManagementEndpointAudience: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			servicePrincipalClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			servicePrincipalObjectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a user who has access to one or more shares on the Data Box Edge/Gateway device. */
	export interface User {

		/**
		 * The user properties.
		 * Required
		 */
		properties: UserProperties;
	}

	/** Represents a user who has access to one or more shares on the Data Box Edge/Gateway device. */
	export interface UserFormProperties {
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
		});

	}


	/** The user properties. */
	export interface UserProperties {

		/** Represent the secrets intended for encryption with asymmetric key pair. */
		encryptedPassword?: AsymmetricEncryptedSecret;

		/** List of shares that the user has rights on. This field should not be specified during user creation. */
		shareAccessRights?: Array<ShareAccessRight>;
	}

	/** The user properties. */
	export interface UserPropertiesFormProperties {
	}
	export function CreateUserPropertiesFormGroup() {
		return new FormGroup<UserPropertiesFormProperties>({
		});

	}


	/** Collection of users. */
	export interface UserList {

		/** Link to the next set of results. */
		nextLink?: string | null;

		/** The list of users. */
		value?: Array<User>;
	}

	/** Collection of users. */
	export interface UserListFormProperties {

		/** Link to the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateUserListFormGroup() {
		return new FormGroup<UserListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all the supported operations.
		 * Get providers/Microsoft.DataBoxEdge/operations
		 * @param {string} api_version The API version.
		 * @return {OperationsList} List of supported operations.
		 */
		Operations_List(api_version: string): Observable<OperationsList> {
			return this.http.get<OperationsList>(this.baseUri + 'providers/Microsoft.DataBoxEdge/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all the data box edge/gateway devices in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} api_version The API version.
		 * @param {string} expand Specify $expand=details to populate additional fields related to the resource or Specify $skipToken=<token> to populate the next page in the list.
		 * @return {DataBoxEdgeDeviceList} The collection of data box edge/gateway devices.
		 */
		Devices_ListBySubscription(subscriptionId: string, api_version: string, expand: string | null | undefined): Observable<DataBoxEdgeDeviceList> {
			return this.http.get<DataBoxEdgeDeviceList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), {});
		}

		/**
		 * Gets all the data box edge/gateway devices in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @param {string} expand Specify $expand=details to populate additional fields related to the resource or Specify $skipToken=<token> to populate the next page in the list.
		 * @return {DataBoxEdgeDeviceList} The collection of data box edge/gateway devices.
		 */
		Devices_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string, expand: string | null | undefined): Observable<DataBoxEdgeDeviceList> {
			return this.http.get<DataBoxEdgeDeviceList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), {});
		}

		/**
		 * Gets the properties of the data box edge/gateway device.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {DataBoxEdgeDevice} The data box edge/gateway device.
		 */
		Devices_Get(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<DataBoxEdgeDevice> {
			return this.http.get<DataBoxEdgeDevice>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a Data Box Edge/Gateway resource.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @param {DataBoxEdgeDevice} requestBody The resource object.
		 * @return {DataBoxEdgeDevice} Successfully created or updated the resource.
		 */
		Devices_CreateOrUpdate(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string, requestBody: DataBoxEdgeDevice): Observable<DataBoxEdgeDevice> {
			return this.http.put<DataBoxEdgeDevice>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the data box edge/gateway device.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {void} Successfully deleted the resource.
		 */
		Devices_Delete(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies a Data Box Edge/Gateway resource.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @param {DataBoxEdgeDevicePatch} requestBody The resource parameters.
		 * @return {DataBoxEdgeDevice} Successfully updated the resource.
		 */
		Devices_Update(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string, requestBody: DataBoxEdgeDevicePatch): Observable<DataBoxEdgeDevice> {
			return this.http.patch<DataBoxEdgeDevice>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all the alerts for a data box edge/gateway device.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/alerts
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {AlertList} The collection of alerts.
		 */
		Alerts_ListByDataBoxEdgeDevice(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<AlertList> {
			return this.http.get<AlertList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/alerts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an alert by name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/alerts/{name}
		 * @param {string} deviceName The device name.
		 * @param {string} name The alert name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {Alert} The alert details.
		 */
		Alerts_Get(deviceName: string, name: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<Alert> {
			return this.http.get<Alert>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/alerts/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all the bandwidth schedules for a data box edge/gateway device.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/bandwidthSchedules
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {BandwidthSchedulesList} The collection of bandwidth schedules.
		 */
		BandwidthSchedules_ListByDataBoxEdgeDevice(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<BandwidthSchedulesList> {
			return this.http.get<BandwidthSchedulesList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/bandwidthSchedules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the properties of the specified bandwidth schedule.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/bandwidthSchedules/{name}
		 * @param {string} deviceName The device name.
		 * @param {string} name The bandwidth schedule name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {BandwidthSchedule} The bandwidth schedule.
		 */
		BandwidthSchedules_Get(deviceName: string, name: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<BandwidthSchedule> {
			return this.http.get<BandwidthSchedule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/bandwidthSchedules/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a bandwidth schedule.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/bandwidthSchedules/{name}
		 * @param {string} deviceName The device name.
		 * @param {string} name The bandwidth schedule name which needs to be added/updated.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @param {BandwidthSchedule} requestBody The bandwidth schedule to be added or updated.
		 * @return {BandwidthSchedule} Successfully created or updated the bandwidth schedule.
		 */
		BandwidthSchedules_CreateOrUpdate(deviceName: string, name: string, subscriptionId: string, resourceGroupName: string, api_version: string, requestBody: BandwidthSchedule): Observable<BandwidthSchedule> {
			return this.http.put<BandwidthSchedule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/bandwidthSchedules/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified bandwidth schedule.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/bandwidthSchedules/{name}
		 * @param {string} deviceName The device name.
		 * @param {string} name The bandwidth schedule name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {void} Successfully deleted the bandwidth schedule.
		 */
		BandwidthSchedules_Delete(deviceName: string, name: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/bandwidthSchedules/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Downloads the updates on a data box edge/gateway device.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/downloadUpdates
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {void} Successfully downloaded the updates on the device.
		 */
		Devices_DownloadUpdates(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/downloadUpdates&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets additional information for the specified data box edge/gateway device.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/getExtendedInformation
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {DataBoxEdgeDeviceExtendedInfo} The additional information.
		 */
		Devices_GetExtendedInformation(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<DataBoxEdgeDeviceExtendedInfo> {
			return this.http.post<DataBoxEdgeDeviceExtendedInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/getExtendedInformation&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Installs the updates on the data box edge/gateway device.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/installUpdates
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {void} Successfully installed updates on the device.
		 */
		Devices_InstallUpdates(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/installUpdates&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the details of a specified job on a data box edge/gateway device.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/jobs/{name}
		 * @param {string} deviceName The device name.
		 * @param {string} name The job name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {Job} The job details.
		 */
		Jobs_Get(deviceName: string, name: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<Job> {
			return this.http.get<Job>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/jobs/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the network settings of the specified data box edge/gateway device.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/networkSettings/default
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {NetworkSettings} The device network settings.
		 */
		Devices_GetNetworkSettings(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<NetworkSettings> {
			return this.http.get<NetworkSettings>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/networkSettings/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the details of a specified job on a data box edge/gateway device.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/operationsStatus/{name}
		 * @param {string} deviceName The device name.
		 * @param {string} name The job name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {Job} The job details.
		 */
		OperationsStatus_Get(deviceName: string, name: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<Job> {
			return this.http.get<Job>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/operationsStatus/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the orders related to a data box edge/gateway device.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/orders
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {OrderList} Lists all the orders for the Data Box Edge Device
		 */
		Orders_ListByDataBoxEdgeDevice(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<OrderList> {
			return this.http.get<OrderList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/orders&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a specific order by name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/orders/default
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {Order} The order details of a device.
		 */
		Orders_Get(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<Order> {
			return this.http.get<Order>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/orders/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an order.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/orders/default
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @param {Order} requestBody The order to be created or updated.
		 * @return {Order} Successfully created or updated the order.
		 */
		Orders_CreateOrUpdate(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string, requestBody: Order): Observable<Order> {
			return this.http.put<Order>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/orders/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the order related to the device.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/orders/default
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {void} Successfully deleted the order.
		 */
		Orders_Delete(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/orders/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the roles configured in a data box edge/gateway device.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {RoleList} List of all the roles configured in the device.
		 */
		Roles_ListByDataBoxEdgeDevice(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<RoleList> {
			return this.http.get<RoleList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/roles&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a specific role by name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles/{name}
		 * @param {string} deviceName The device name.
		 * @param {string} name The role name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {Role} The role with the specified name in the given device.
		 */
		Roles_Get(deviceName: string, name: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<Role> {
			return this.http.get<Role>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/roles/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a role.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles/{name}
		 * @param {string} deviceName The device name.
		 * @param {string} name The role name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @param {Role} requestBody The role properties.
		 * @return {Role} Successfully created or updated the role.
		 */
		Roles_CreateOrUpdate(deviceName: string, name: string, subscriptionId: string, resourceGroupName: string, api_version: string, requestBody: Role): Observable<Role> {
			return this.http.put<Role>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/roles/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the role on the data box edge device.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles/{name}
		 * @param {string} deviceName The device name.
		 * @param {string} name The role name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {void} Successfully deleted the role.
		 */
		Roles_Delete(deviceName: string, name: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/roles/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Scans for updates on a data box edge/gateway device.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/scanForUpdates
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {void} Successfully scanned the device for updates.
		 */
		Devices_ScanForUpdates(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/scanForUpdates&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the security settings on a data box edge/gateway device.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/securitySettings/default/update
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @param {SecuritySettings} requestBody The security settings.
		 * @return {void} 
		 */
		Devices_CreateOrUpdateSecuritySettings(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string, requestBody: SecuritySettings): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/securitySettings/default/update&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the shares in a data box edge/gateway device.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/shares
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {ShareList} The collection of all the shares on the device.
		 */
		Shares_ListByDataBoxEdgeDevice(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<ShareList> {
			return this.http.get<ShareList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/shares&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a share by name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/shares/{name}
		 * @param {string} deviceName The device name.
		 * @param {string} name The share name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {Share} The share details.
		 */
		Shares_Get(deviceName: string, name: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<Share> {
			return this.http.get<Share>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/shares/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new share or updates an existing share on the device.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/shares/{name}
		 * @param {string} deviceName The device name.
		 * @param {string} name The share name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @param {Share} requestBody The share properties.
		 * @return {Share} Successfully created or updated the share.
		 */
		Shares_CreateOrUpdate(deviceName: string, name: string, subscriptionId: string, resourceGroupName: string, api_version: string, requestBody: Share): Observable<Share> {
			return this.http.put<Share>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/shares/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the share on the data box edge/gateway device.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/shares/{name}
		 * @param {string} deviceName The device name.
		 * @param {string} name The share name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {void} Successfully deleted the share.
		 */
		Shares_Delete(deviceName: string, name: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/shares/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Refreshes the share metadata with the data from the cloud.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/shares/{name}/refresh
		 * @param {string} deviceName The device name.
		 * @param {string} name The share name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {void} Successfully refreshed the share on the device.
		 */
		Shares_Refresh(deviceName: string, name: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/shares/' + (name == null ? '' : encodeURIComponent(name)) + '/refresh&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all the storage account credentials in a data box edge/gateway device.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccountCredentials
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {StorageAccountCredentialList} The collection of storage account credentials.
		 */
		StorageAccountCredentials_ListByDataBoxEdgeDevice(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<StorageAccountCredentialList> {
			return this.http.get<StorageAccountCredentialList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/storageAccountCredentials&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the properties of the specified storage account credential.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccountCredentials/{name}
		 * @param {string} deviceName The device name.
		 * @param {string} name The storage account credential name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {StorageAccountCredential} The storage account credential properties.
		 */
		StorageAccountCredentials_Get(deviceName: string, name: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<StorageAccountCredential> {
			return this.http.get<StorageAccountCredential>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/storageAccountCredentials/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates the storage account credential.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccountCredentials/{name}
		 * @param {string} deviceName The device name.
		 * @param {string} name The storage account credential name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @param {StorageAccountCredential} requestBody The storage account credential.
		 * @return {StorageAccountCredential} Successfully created or updated the storage account credential.
		 */
		StorageAccountCredentials_CreateOrUpdate(deviceName: string, name: string, subscriptionId: string, resourceGroupName: string, api_version: string, requestBody: StorageAccountCredential): Observable<StorageAccountCredential> {
			return this.http.put<StorageAccountCredential>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/storageAccountCredentials/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the storage account credential.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccountCredentials/{name}
		 * @param {string} deviceName The device name.
		 * @param {string} name The storage account credential name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {void} Successfully deleted the storage account credential.
		 */
		StorageAccountCredentials_Delete(deviceName: string, name: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/storageAccountCredentials/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the triggers configured in the device.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/triggers
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @param {string} expand Specify $filter='CustomContextTag eq <tag>' to filter on custom context tag property
		 * @return {TriggerList} List all the triggers configured in the device
		 */
		Triggers_ListByDataBoxEdgeDevice(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string, expand: string | null | undefined): Observable<TriggerList> {
			return this.http.get<TriggerList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/triggers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), {});
		}

		/**
		 * Get a specific trigger by name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/triggers/{name}
		 * @param {string} deviceName The device name.
		 * @param {string} name The trigger name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {Trigger} The trigger.
		 */
		Triggers_Get(deviceName: string, name: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<Trigger> {
			return this.http.get<Trigger>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/triggers/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a trigger.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/triggers/{name}
		 * @param {string} deviceName Creates or updates a trigger
		 * @param {string} name The trigger name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @param {Trigger} requestBody The trigger.
		 * @return {Trigger} Successfully created or updated the trigger.
		 */
		Triggers_CreateOrUpdate(deviceName: string, name: string, subscriptionId: string, resourceGroupName: string, api_version: string, requestBody: Trigger): Observable<Trigger> {
			return this.http.put<Trigger>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/triggers/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the trigger on the gateway device.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/triggers/{name}
		 * @param {string} deviceName The device name.
		 * @param {string} name The trigger name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {void} Successfully deleted the trigger.
		 */
		Triggers_Delete(deviceName: string, name: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/triggers/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the availability of updates based on the last scan of the device. It also gets information about any ongoing download or install jobs on the device.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/updateSummary/default
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {UpdateSummary} The update summary.
		 */
		Devices_GetUpdateSummary(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<UpdateSummary> {
			return this.http.get<UpdateSummary>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/updateSummary/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Uploads registration certificate for the device.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/uploadCertificate
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @param {UploadCertificateRequest} requestBody The upload certificate request.
		 * @return {UploadCertificateResponse} Successfully uploaded the registration certificate.
		 */
		Devices_UploadCertificate(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string, requestBody: UploadCertificateRequest): Observable<UploadCertificateResponse> {
			return this.http.post<UploadCertificateResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/uploadCertificate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all the users registered on a data box edge/gateway device.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/users
		 * @param {string} deviceName The device name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {UserList} The collection of all users on the device.
		 */
		Users_ListByDataBoxEdgeDevice(deviceName: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<UserList> {
			return this.http.get<UserList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/users&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the properties of the specified user.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/users/{name}
		 * @param {string} deviceName The device name.
		 * @param {string} name The user name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {User} The user details.
		 */
		Users_Get(deviceName: string, name: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<User> {
			return this.http.get<User>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/users/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new user or updates an existing user's information on a data box edge/gateway device.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/users/{name}
		 * @param {string} deviceName The device name.
		 * @param {string} name The user name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @param {User} requestBody The user details.
		 * @return {User} Successfully created or updated the user.
		 */
		Users_CreateOrUpdate(deviceName: string, name: string, subscriptionId: string, resourceGroupName: string, api_version: string, requestBody: User): Observable<User> {
			return this.http.put<User>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/users/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the user on a databox edge/gateway device.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/users/{name}
		 * @param {string} deviceName The device name.
		 * @param {string} name The user name.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The resource group name.
		 * @param {string} api_version The API version.
		 * @return {void} Successfully deleted the user.
		 */
		Users_Delete(deviceName: string, name: string, subscriptionId: string, resourceGroupName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '/users/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

