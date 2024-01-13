import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Credential details of the account. */
	export interface AccountCredentialDetails {

		/** Connection string of the account endpoint to use the account as a storage endpoint on the device. */
		accountConnectionString?: string | null;

		/** Name of the account. */
		accountName?: string | null;

		/** Data Destination Type. */
		dataDestinationType?: AccountCredentialDetailsDataDestinationType | null;

		/** Per share level unencrypted access credentials. */
		shareCredentialDetails?: Array<ShareCredentialDetails>;
	}

	/** Credential details of the account. */
	export interface AccountCredentialDetailsFormProperties {

		/** Connection string of the account endpoint to use the account as a storage endpoint on the device. */
		accountConnectionString: FormControl<string | null | undefined>,

		/** Name of the account. */
		accountName: FormControl<string | null | undefined>,

		/** Data Destination Type. */
		dataDestinationType: FormControl<AccountCredentialDetailsDataDestinationType | null | undefined>,
	}
	export function CreateAccountCredentialDetailsFormGroup() {
		return new FormGroup<AccountCredentialDetailsFormProperties>({
			accountConnectionString: new FormControl<string | null | undefined>(undefined),
			accountName: new FormControl<string | null | undefined>(undefined),
			dataDestinationType: new FormControl<AccountCredentialDetailsDataDestinationType | null | undefined>(undefined),
		});

	}

	export enum AccountCredentialDetailsDataDestinationType { StorageAccount = 0, ManagedDisk = 1 }


	/** Credential details of the shares in account. */
	export interface ShareCredentialDetails {

		/** Password for the share. */
		password?: string | null;

		/** Name of the share. */
		shareName?: string | null;

		/** Type of the share. */
		shareType?: ShareCredentialDetailsShareType | null;

		/** Access protocols supported on the device. */
		supportedAccessProtocols?: Array<string>;

		/** User name for the share. */
		userName?: string | null;
	}

	/** Credential details of the shares in account. */
	export interface ShareCredentialDetailsFormProperties {

		/** Password for the share. */
		password: FormControl<string | null | undefined>,

		/** Name of the share. */
		shareName: FormControl<string | null | undefined>,

		/** Type of the share. */
		shareType: FormControl<ShareCredentialDetailsShareType | null | undefined>,

		/** User name for the share. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateShareCredentialDetailsFormGroup() {
		return new FormGroup<ShareCredentialDetailsFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
			shareName: new FormControl<string | null | undefined>(undefined),
			shareType: new FormControl<ShareCredentialDetailsShareType | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ShareCredentialDetailsShareType { UnknownType = 0, HCS = 1, BlockBlob = 2, PageBlob = 3, AzureFile = 4, ManagedDisk = 5 }


	/** Output of the address validation api. */
	export interface AddressValidationOutput {

		/** The address validation output. */
		properties?: AddressValidationProperties;
	}

	/** Output of the address validation api. */
	export interface AddressValidationOutputFormProperties {
	}
	export function CreateAddressValidationOutputFormGroup() {
		return new FormGroup<AddressValidationOutputFormProperties>({
		});

	}


	/** The address validation output. */
	export interface AddressValidationProperties {

		/** List of alternate addresses. */
		alternateAddresses?: Array<ShippingAddress>;

		/** The address validation status. */
		validationStatus?: AddressValidationPropertiesValidationStatus | null;
	}

	/** The address validation output. */
	export interface AddressValidationPropertiesFormProperties {

		/** The address validation status. */
		validationStatus: FormControl<AddressValidationPropertiesValidationStatus | null | undefined>,
	}
	export function CreateAddressValidationPropertiesFormGroup() {
		return new FormGroup<AddressValidationPropertiesFormProperties>({
			validationStatus: new FormControl<AddressValidationPropertiesValidationStatus | null | undefined>(undefined),
		});

	}


	/** Shipping address where customer wishes to receive the device. */
	export interface ShippingAddress {

		/** Type of address. */
		addressType?: ShippingAddressAddressType | null;

		/** Name of the City. */
		city?: string | null;

		/** Name of the company. */
		companyName?: string | null;

		/**
		 * Name of the Country.
		 * Required
		 */
		country: string;

		/**
		 * Postal code.
		 * Required
		 */
		postalCode: string;

		/** Name of the State or Province. */
		stateOrProvince?: string | null;

		/**
		 * Street Address line 1.
		 * Required
		 */
		streetAddress1: string;

		/** Street Address line 2. */
		streetAddress2?: string | null;

		/** Street Address line 3. */
		streetAddress3?: string | null;

		/** Extended Zip Code. */
		zipExtendedCode?: string | null;
	}

	/** Shipping address where customer wishes to receive the device. */
	export interface ShippingAddressFormProperties {

		/** Type of address. */
		addressType: FormControl<ShippingAddressAddressType | null | undefined>,

		/** Name of the City. */
		city: FormControl<string | null | undefined>,

		/** Name of the company. */
		companyName: FormControl<string | null | undefined>,

		/**
		 * Name of the Country.
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Postal code.
		 * Required
		 */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the State or Province. */
		stateOrProvince: FormControl<string | null | undefined>,

		/**
		 * Street Address line 1.
		 * Required
		 */
		streetAddress1: FormControl<string | null | undefined>,

		/** Street Address line 2. */
		streetAddress2: FormControl<string | null | undefined>,

		/** Street Address line 3. */
		streetAddress3: FormControl<string | null | undefined>,

		/** Extended Zip Code. */
		zipExtendedCode: FormControl<string | null | undefined>,
	}
	export function CreateShippingAddressFormGroup() {
		return new FormGroup<ShippingAddressFormProperties>({
			addressType: new FormControl<ShippingAddressAddressType | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			companyName: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stateOrProvince: new FormControl<string | null | undefined>(undefined),
			streetAddress1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			streetAddress2: new FormControl<string | null | undefined>(undefined),
			streetAddress3: new FormControl<string | null | undefined>(undefined),
			zipExtendedCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ShippingAddressAddressType { None = 0, Residential = 1, Commercial = 2 }

	export enum AddressValidationPropertiesValidationStatus { Valid = 0, Invalid = 1, Ambiguous = 2 }


	/** The Network Adapter configuration of a DataBox. */
	export interface ApplianceNetworkConfiguration {

		/** Mac Address. */
		macAddress?: string | null;

		/** Name of the network. */
		name?: string | null;
	}

	/** The Network Adapter configuration of a DataBox. */
	export interface ApplianceNetworkConfigurationFormProperties {

		/** Mac Address. */
		macAddress: FormControl<string | null | undefined>,

		/** Name of the network. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateApplianceNetworkConfigurationFormGroup() {
		return new FormGroup<ApplianceNetworkConfigurationFormProperties>({
			macAddress: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Base class for all objects under resource. */
	export interface ArmBaseObject {

		/** Id of the object. */
		id?: string | null;

		/** Name of the object. */
		name?: string | null;

		/** Type of the object. */
		type?: string | null;
	}

	/** Base class for all objects under resource. */
	export interface ArmBaseObjectFormProperties {

		/** Id of the object. */
		id: FormControl<string | null | undefined>,

		/** Name of the object. */
		name: FormControl<string | null | undefined>,

		/** Type of the object. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateArmBaseObjectFormGroup() {
		return new FormGroup<ArmBaseObjectFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The filters for showing the available skus. */
	export interface AvailableSkuRequest {

		/**
		 * ISO country code. Country for hardware shipment. For codes check: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
		 * Required
		 */
		country: string;

		/**
		 * Location for data transfer. For locations check: https://management.azure.com/subscriptions/SUBSCRIPTIONID/locations?api-version=2018-01-01
		 * Required
		 */
		location: string;

		/** Sku Names to filter for available skus */
		skuNames?: Array<string>;

		/**
		 * Type of the transfer.
		 * Required
		 */
		transferType: AvailableSkuRequestTransferType;
	}

	/** The filters for showing the available skus. */
	export interface AvailableSkuRequestFormProperties {

		/**
		 * ISO country code. Country for hardware shipment. For codes check: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Location for data transfer. For locations check: https://management.azure.com/subscriptions/SUBSCRIPTIONID/locations?api-version=2018-01-01
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/**
		 * Type of the transfer.
		 * Required
		 */
		transferType: FormControl<AvailableSkuRequestTransferType | null | undefined>,
	}
	export function CreateAvailableSkuRequestFormGroup() {
		return new FormGroup<AvailableSkuRequestFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transferType: new FormControl<AvailableSkuRequestTransferType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AvailableSkuRequestTransferType { ImportToAzure = 0 }


	/** The available skus operation response. */
	export interface AvailableSkusResult {

		/** Link for the next set of skus. */
		nextLink?: string | null;

		/** List of available skus. */
		value?: Array<SkuInformation>;
	}

	/** The available skus operation response. */
	export interface AvailableSkusResultFormProperties {

		/** Link for the next set of skus. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAvailableSkusResultFormGroup() {
		return new FormGroup<AvailableSkusResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information of the sku. */
	export interface SkuInformation {

		/** The sku is enabled or not. */
		enabled?: boolean | null;

		/** Properties of the sku. */
		properties?: SkuProperties;

		/** The Sku. */
		sku?: Sku;
	}

	/** Information of the sku. */
	export interface SkuInformationFormProperties {

		/** The sku is enabled or not. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateSkuInformationFormGroup() {
		return new FormGroup<SkuInformationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Properties of the sku. */
	export interface SkuProperties {

		/** Api versions that support this Sku. */
		apiVersions?: Array<string>;

		/** Capacity of the sku. */
		capacity?: SkuCapacity;

		/** Cost of the Sku. */
		costs?: Array<SkuCost>;

		/** The map of destination location to service location. */
		destinationToServiceLocationMap?: Array<DestinationToServiceLocationMap>;

		/** Reason why the Sku is disabled. */
		disabledReason?: SkuPropertiesDisabledReason | null;

		/** Message for why the Sku is disabled. */
		disabledReasonMessage?: string | null;

		/** Required feature to access the sku. */
		requiredFeature?: string | null;
	}

	/** Properties of the sku. */
	export interface SkuPropertiesFormProperties {

		/** Reason why the Sku is disabled. */
		disabledReason: FormControl<SkuPropertiesDisabledReason | null | undefined>,

		/** Message for why the Sku is disabled. */
		disabledReasonMessage: FormControl<string | null | undefined>,

		/** Required feature to access the sku. */
		requiredFeature: FormControl<string | null | undefined>,
	}
	export function CreateSkuPropertiesFormGroup() {
		return new FormGroup<SkuPropertiesFormProperties>({
			disabledReason: new FormControl<SkuPropertiesDisabledReason | null | undefined>(undefined),
			disabledReasonMessage: new FormControl<string | null | undefined>(undefined),
			requiredFeature: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Capacity of the sku. */
	export interface SkuCapacity {

		/** Maximum capacity in TB. */
		maximum?: string | null;

		/** Usable capacity in TB. */
		usable?: string | null;
	}

	/** Capacity of the sku. */
	export interface SkuCapacityFormProperties {

		/** Maximum capacity in TB. */
		maximum: FormControl<string | null | undefined>,

		/** Usable capacity in TB. */
		usable: FormControl<string | null | undefined>,
	}
	export function CreateSkuCapacityFormGroup() {
		return new FormGroup<SkuCapacityFormProperties>({
			maximum: new FormControl<string | null | undefined>(undefined),
			usable: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes metadata for retrieving price info. */
	export interface SkuCost {

		/** Meter id of the Sku. */
		meterId?: string | null;

		/** The type of the meter. */
		meterType?: string | null;
	}

	/** Describes metadata for retrieving price info. */
	export interface SkuCostFormProperties {

		/** Meter id of the Sku. */
		meterId: FormControl<string | null | undefined>,

		/** The type of the meter. */
		meterType: FormControl<string | null | undefined>,
	}
	export function CreateSkuCostFormGroup() {
		return new FormGroup<SkuCostFormProperties>({
			meterId: new FormControl<string | null | undefined>(undefined),
			meterType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Map of destination location to service location. */
	export interface DestinationToServiceLocationMap {

		/** Location of the destination. */
		destinationLocation?: string | null;

		/** Location of the service. */
		serviceLocation?: string | null;
	}

	/** Map of destination location to service location. */
	export interface DestinationToServiceLocationMapFormProperties {

		/** Location of the destination. */
		destinationLocation: FormControl<string | null | undefined>,

		/** Location of the service. */
		serviceLocation: FormControl<string | null | undefined>,
	}
	export function CreateDestinationToServiceLocationMapFormGroup() {
		return new FormGroup<DestinationToServiceLocationMapFormProperties>({
			destinationLocation: new FormControl<string | null | undefined>(undefined),
			serviceLocation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SkuPropertiesDisabledReason { None = 0, Country = 1, Region = 2, Feature = 3, OfferType = 4, NoSubscriptionInfo = 5 }


	/** The Sku. */
	export interface Sku {

		/** The display name of the sku. */
		displayName?: string | null;

		/** The sku family. */
		family?: string | null;

		/**
		 * The sku name.
		 * Required
		 */
		name: SkuName;
	}

	/** The Sku. */
	export interface SkuFormProperties {

		/** The display name of the sku. */
		displayName: FormControl<string | null | undefined>,

		/** The sku family. */
		family: FormControl<string | null | undefined>,

		/**
		 * The sku name.
		 * Required
		 */
		name: FormControl<SkuName | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<SkuName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SkuName { DataBox = 0, DataBoxDisk = 1, DataBoxHeavy = 2 }


	/** Reason for cancellation. */
	export interface CancellationReason {

		/**
		 * Reason for cancellation.
		 * Required
		 */
		reason: string;
	}

	/** Reason for cancellation. */
	export interface CancellationReasonFormProperties {

		/**
		 * Reason for cancellation.
		 * Required
		 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateCancellationReasonFormGroup() {
		return new FormGroup<CancellationReasonFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The error information object. */
	export interface CloudError {

		/** Error code string. */
		code?: string | null;

		/** More detailed error information. */
		details?: Array<CloudError>;

		/** Descriptive error information. */
		message?: string | null;

		/** Error target */
		target?: string | null;
	}

	/** The error information object. */
	export interface CloudErrorFormProperties {

		/** Error code string. */
		code: FormControl<string | null | undefined>,

		/** Descriptive error information. */
		message: FormControl<string | null | undefined>,

		/** Error target */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contact Details. */
	export interface ContactDetails {

		/**
		 * Contact name of the person.
		 * Required
		 */
		contactName: string;

		/**
		 * List of Email-ids to be notified about job progress.
		 * Required
		 */
		emailList: Array<string>;

		/** Mobile number of the contact person. */
		mobile?: string | null;

		/** Notification preference for a job stage. */
		notificationPreference?: Array<NotificationPreference>;

		/**
		 * Phone number of the contact person.
		 * Required
		 */
		phone: string;

		/** Phone extension number of the contact person. */
		phoneExtension?: string | null;
	}

	/** Contact Details. */
	export interface ContactDetailsFormProperties {

		/**
		 * Contact name of the person.
		 * Required
		 */
		contactName: FormControl<string | null | undefined>,

		/** Mobile number of the contact person. */
		mobile: FormControl<string | null | undefined>,

		/**
		 * Phone number of the contact person.
		 * Required
		 */
		phone: FormControl<string | null | undefined>,

		/** Phone extension number of the contact person. */
		phoneExtension: FormControl<string | null | undefined>,
	}
	export function CreateContactDetailsFormGroup() {
		return new FormGroup<ContactDetailsFormProperties>({
			contactName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mobile: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phoneExtension: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Notification preference for a job stage. */
	export interface NotificationPreference {

		/**
		 * Notification is required or not.
		 * Required
		 */
		sendNotification: boolean;

		/**
		 * Name of the stage.
		 * Required
		 */
		stageName: NotificationPreferenceStageName;
	}

	/** Notification preference for a job stage. */
	export interface NotificationPreferenceFormProperties {

		/**
		 * Notification is required or not.
		 * Required
		 */
		sendNotification: FormControl<boolean | null | undefined>,

		/**
		 * Name of the stage.
		 * Required
		 */
		stageName: FormControl<NotificationPreferenceStageName | null | undefined>,
	}
	export function CreateNotificationPreferenceFormGroup() {
		return new FormGroup<NotificationPreferenceFormProperties>({
			sendNotification: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			stageName: new FormControl<NotificationPreferenceStageName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NotificationPreferenceStageName { DevicePrepared = 0, Dispatched = 1, Delivered = 2, PickedUp = 3, AtAzureDC = 4, DataCopy = 5 }


	/** Details for log generated during copy. */
	export interface CopyLogDetails {

		/**
		 * Indicates the type of job details.
		 * Required
		 */
		copyLogDetailsType: SkuName;
	}

	/** Details for log generated during copy. */
	export interface CopyLogDetailsFormProperties {

		/**
		 * Indicates the type of job details.
		 * Required
		 */
		copyLogDetailsType: FormControl<SkuName | null | undefined>,
	}
	export function CreateCopyLogDetailsFormGroup() {
		return new FormGroup<CopyLogDetailsFormProperties>({
			copyLogDetailsType: new FormControl<SkuName | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Copy progress. */
	export interface CopyProgress {

		/** Id of the account where the data needs to be uploaded. */
		accountId?: string | null;

		/** Amount of data uploaded by the job as of now. */
		bytesSentToCloud?: number | null;

		/** Data Destination Type. */
		dataDestinationType?: AccountCredentialDetailsDataDestinationType | null;

		/** Number of files which could not be copied */
		filesErroredOut?: number | null;

		/** Number of files processed by the job as of now. */
		filesProcessed?: number | null;

		/** Total amount of data not adhering to azure naming conventions which were processed by automatic renaming */
		invalidFileBytesUploaded?: number | null;

		/** Number of files not adhering to azure naming conventions which were processed by automatic renaming */
		invalidFilesProcessed?: number | null;

		/** Number of folders not adhering to azure naming conventions which were processed by automatic renaming */
		renamedContainerCount?: number | null;

		/** Name of the storage account where the data needs to be uploaded. */
		storageAccountName?: string | null;

		/** Total amount of data to be processed by the job. */
		totalBytesToProcess?: number | null;

		/** Total number of files to be processed by the job. */
		totalFilesToProcess?: number | null;
	}

	/** Copy progress. */
	export interface CopyProgressFormProperties {

		/** Id of the account where the data needs to be uploaded. */
		accountId: FormControl<string | null | undefined>,

		/** Amount of data uploaded by the job as of now. */
		bytesSentToCloud: FormControl<number | null | undefined>,

		/** Data Destination Type. */
		dataDestinationType: FormControl<AccountCredentialDetailsDataDestinationType | null | undefined>,

		/** Number of files which could not be copied */
		filesErroredOut: FormControl<number | null | undefined>,

		/** Number of files processed by the job as of now. */
		filesProcessed: FormControl<number | null | undefined>,

		/** Total amount of data not adhering to azure naming conventions which were processed by automatic renaming */
		invalidFileBytesUploaded: FormControl<number | null | undefined>,

		/** Number of files not adhering to azure naming conventions which were processed by automatic renaming */
		invalidFilesProcessed: FormControl<number | null | undefined>,

		/** Number of folders not adhering to azure naming conventions which were processed by automatic renaming */
		renamedContainerCount: FormControl<number | null | undefined>,

		/** Name of the storage account where the data needs to be uploaded. */
		storageAccountName: FormControl<string | null | undefined>,

		/** Total amount of data to be processed by the job. */
		totalBytesToProcess: FormControl<number | null | undefined>,

		/** Total number of files to be processed by the job. */
		totalFilesToProcess: FormControl<number | null | undefined>,
	}
	export function CreateCopyProgressFormGroup() {
		return new FormGroup<CopyProgressFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			bytesSentToCloud: new FormControl<number | null | undefined>(undefined),
			dataDestinationType: new FormControl<AccountCredentialDetailsDataDestinationType | null | undefined>(undefined),
			filesErroredOut: new FormControl<number | null | undefined>(undefined),
			filesProcessed: new FormControl<number | null | undefined>(undefined),
			invalidFileBytesUploaded: new FormControl<number | null | undefined>(undefined),
			invalidFilesProcessed: new FormControl<number | null | undefined>(undefined),
			renamedContainerCount: new FormControl<number | null | undefined>(undefined),
			storageAccountName: new FormControl<string | null | undefined>(undefined),
			totalBytesToProcess: new FormControl<number | null | undefined>(undefined),
			totalFilesToProcess: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** It does all pre-job creation validations. */
	export interface CreateJobValidations {
	}

	/** It does all pre-job creation validations. */
	export interface CreateJobValidationsFormProperties {
	}
	export function CreateCreateJobValidationsFormGroup() {
		return new FormGroup<CreateJobValidationsFormProperties>({
		});

	}


	/** Request to validate create order limit for current subscription. */
	export interface CreateOrderLimitForSubscriptionValidationRequest {

		/**
		 * Device type to be used for the job.
		 * Required
		 */
		deviceType: SkuName;
	}

	/** Request to validate create order limit for current subscription. */
	export interface CreateOrderLimitForSubscriptionValidationRequestFormProperties {

		/**
		 * Device type to be used for the job.
		 * Required
		 */
		deviceType: FormControl<SkuName | null | undefined>,
	}
	export function CreateCreateOrderLimitForSubscriptionValidationRequestFormGroup() {
		return new FormGroup<CreateOrderLimitForSubscriptionValidationRequestFormProperties>({
			deviceType: new FormControl<SkuName | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Properties of create order limit for subscription validation response. */
	export interface CreateOrderLimitForSubscriptionValidationResponseProperties {

		/** Create order limit validation status. */
		status?: CreateOrderLimitForSubscriptionValidationResponsePropertiesStatus | null;
	}

	/** Properties of create order limit for subscription validation response. */
	export interface CreateOrderLimitForSubscriptionValidationResponsePropertiesFormProperties {

		/** Create order limit validation status. */
		status: FormControl<CreateOrderLimitForSubscriptionValidationResponsePropertiesStatus | null | undefined>,
	}
	export function CreateCreateOrderLimitForSubscriptionValidationResponsePropertiesFormGroup() {
		return new FormGroup<CreateOrderLimitForSubscriptionValidationResponsePropertiesFormProperties>({
			status: new FormControl<CreateOrderLimitForSubscriptionValidationResponsePropertiesStatus | null | undefined>(undefined),
		});

	}

	export enum CreateOrderLimitForSubscriptionValidationResponsePropertiesStatus { Valid = 0, Invalid = 1, Skipped = 2 }


	/** Copy log details for a storage account of a DataBox job */
	export interface DataBoxAccountCopyLogDetails {

		/** Destination account name. */
		accountName?: string | null;

		/** Link for copy logs. */
		copyLogLink?: string | null;
	}

	/** Copy log details for a storage account of a DataBox job */
	export interface DataBoxAccountCopyLogDetailsFormProperties {

		/** Destination account name. */
		accountName: FormControl<string | null | undefined>,

		/** Link for copy logs. */
		copyLogLink: FormControl<string | null | undefined>,
	}
	export function CreateDataBoxAccountCopyLogDetailsFormGroup() {
		return new FormGroup<DataBoxAccountCopyLogDetailsFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined),
			copyLogLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Copy Log Details for a disk */
	export interface DataBoxDiskCopyLogDetails {

		/** Disk Serial Number. */
		diskSerialNumber?: string | null;

		/** Link for copy error logs. */
		errorLogLink?: string | null;

		/** Link for copy verbose logs. */
		verboseLogLink?: string | null;
	}

	/** Copy Log Details for a disk */
	export interface DataBoxDiskCopyLogDetailsFormProperties {

		/** Disk Serial Number. */
		diskSerialNumber: FormControl<string | null | undefined>,

		/** Link for copy error logs. */
		errorLogLink: FormControl<string | null | undefined>,

		/** Link for copy verbose logs. */
		verboseLogLink: FormControl<string | null | undefined>,
	}
	export function CreateDataBoxDiskCopyLogDetailsFormGroup() {
		return new FormGroup<DataBoxDiskCopyLogDetailsFormProperties>({
			diskSerialNumber: new FormControl<string | null | undefined>(undefined),
			errorLogLink: new FormControl<string | null | undefined>(undefined),
			verboseLogLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DataBox Disk Copy Progress */
	export interface DataBoxDiskCopyProgress {

		/** Bytes copied during the copy of disk. */
		bytesCopied?: number | null;

		/** Indicates the percentage completed for the copy of the disk. */
		percentComplete?: number | null;

		/** The serial number of the disk */
		serialNumber?: string | null;

		/** The Status of the copy */
		status?: DataBoxDiskCopyProgressStatus | null;
	}

	/** DataBox Disk Copy Progress */
	export interface DataBoxDiskCopyProgressFormProperties {

		/** Bytes copied during the copy of disk. */
		bytesCopied: FormControl<number | null | undefined>,

		/** Indicates the percentage completed for the copy of the disk. */
		percentComplete: FormControl<number | null | undefined>,

		/** The serial number of the disk */
		serialNumber: FormControl<string | null | undefined>,

		/** The Status of the copy */
		status: FormControl<DataBoxDiskCopyProgressStatus | null | undefined>,
	}
	export function CreateDataBoxDiskCopyProgressFormGroup() {
		return new FormGroup<DataBoxDiskCopyProgressFormProperties>({
			bytesCopied: new FormControl<number | null | undefined>(undefined),
			percentComplete: new FormControl<number | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DataBoxDiskCopyProgressStatus | null | undefined>(undefined),
		});

	}

	export enum DataBoxDiskCopyProgressStatus { NotStarted = 0, InProgress = 1, Completed = 2, CompletedWithErrors = 3, Failed = 4, NotReturned = 5, HardwareError = 6, DeviceFormatted = 7, DeviceMetadataModified = 8, StorageAccountNotAccessible = 9, UnsupportedData = 10 }


	/** DataBox Disk Job Details. */
	export interface DataBoxDiskJobDetails {

		/** Copy progress per disk. */
		copyProgress?: Array<DataBoxDiskCopyProgress>;

		/** Contains the map of disk serial number to the disk size being used for the job. Is returned only after the disks are shipped to the customer. */
		disksAndSizeDetails?: {[id: string]: number };

		/** User entered passkey for DataBox Disk job. */
		passkey?: string | null;

		/** User preference on what size disks are needed for the job. The map is from the disk size in TB to the count. Eg. {2,5} means 5 disks of 2 TB size. Key is string but will be checked against an int. */
		preferredDisks?: {[id: string]: number };
	}

	/** DataBox Disk Job Details. */
	export interface DataBoxDiskJobDetailsFormProperties {

		/** Contains the map of disk serial number to the disk size being used for the job. Is returned only after the disks are shipped to the customer. */
		disksAndSizeDetails: FormControl<{[id: string]: number } | null | undefined>,

		/** User entered passkey for DataBox Disk job. */
		passkey: FormControl<string | null | undefined>,

		/** User preference on what size disks are needed for the job. The map is from the disk size in TB to the count. Eg. {2,5} means 5 disks of 2 TB size. Key is string but will be checked against an int. */
		preferredDisks: FormControl<{[id: string]: number } | null | undefined>,
	}
	export function CreateDataBoxDiskJobDetailsFormGroup() {
		return new FormGroup<DataBoxDiskJobDetailsFormProperties>({
			disksAndSizeDetails: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			passkey: new FormControl<string | null | undefined>(undefined),
			preferredDisks: new FormControl<{[id: string]: number } | null | undefined>(undefined),
		});

	}


	/** The secrets related to disk job. */
	export interface DataBoxDiskJobSecrets {

		/** Contains the list of secrets object for that device. */
		diskSecrets?: Array<DiskSecret>;

		/** Whether passkey was provided by user. */
		isPasskeyUserDefined?: boolean | null;

		/** PassKey for the disk Job. */
		passKey?: string | null;
	}

	/** The secrets related to disk job. */
	export interface DataBoxDiskJobSecretsFormProperties {

		/** Whether passkey was provided by user. */
		isPasskeyUserDefined: FormControl<boolean | null | undefined>,

		/** PassKey for the disk Job. */
		passKey: FormControl<string | null | undefined>,
	}
	export function CreateDataBoxDiskJobSecretsFormGroup() {
		return new FormGroup<DataBoxDiskJobSecretsFormProperties>({
			isPasskeyUserDefined: new FormControl<boolean | null | undefined>(undefined),
			passKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains all the secrets of a Disk. */
	export interface DiskSecret {

		/** Bit Locker key of the disk which can be used to unlock the disk to copy data. */
		bitLockerKey?: string | null;

		/** Serial number of the assigned disk. */
		diskSerialNumber?: string | null;
	}

	/** Contains all the secrets of a Disk. */
	export interface DiskSecretFormProperties {

		/** Bit Locker key of the disk which can be used to unlock the disk to copy data. */
		bitLockerKey: FormControl<string | null | undefined>,

		/** Serial number of the assigned disk. */
		diskSerialNumber: FormControl<string | null | undefined>,
	}
	export function CreateDiskSecretFormGroup() {
		return new FormGroup<DiskSecretFormProperties>({
			bitLockerKey: new FormControl<string | null | undefined>(undefined),
			diskSerialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Copy log details for a storage account for Databox heavy */
	export interface DataBoxHeavyAccountCopyLogDetails {

		/** Destination account name. */
		accountName?: string | null;

		/** Link for copy logs. */
		copyLogLink?: Array<string>;
	}

	/** Copy log details for a storage account for Databox heavy */
	export interface DataBoxHeavyAccountCopyLogDetailsFormProperties {

		/** Destination account name. */
		accountName: FormControl<string | null | undefined>,
	}
	export function CreateDataBoxHeavyAccountCopyLogDetailsFormGroup() {
		return new FormGroup<DataBoxHeavyAccountCopyLogDetailsFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Databox Heavy Device Job Details */
	export interface DataBoxHeavyJobDetails {

		/** Copy progress per account. */
		copyProgress?: Array<CopyProgress>;

		/** Set Device password for unlocking Databox Heavy */
		devicePassword?: string | null;
	}

	/** Databox Heavy Device Job Details */
	export interface DataBoxHeavyJobDetailsFormProperties {

		/** Set Device password for unlocking Databox Heavy */
		devicePassword: FormControl<string | null | undefined>,
	}
	export function CreateDataBoxHeavyJobDetailsFormGroup() {
		return new FormGroup<DataBoxHeavyJobDetailsFormProperties>({
			devicePassword: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The secrets related to a databox heavy job. */
	export interface DataBoxHeavyJobSecrets {

		/** Contains the list of secret objects for a databox heavy job. */
		cabinetPodSecrets?: Array<DataBoxHeavySecret>;
	}

	/** The secrets related to a databox heavy job. */
	export interface DataBoxHeavyJobSecretsFormProperties {
	}
	export function CreateDataBoxHeavyJobSecretsFormGroup() {
		return new FormGroup<DataBoxHeavyJobSecretsFormProperties>({
		});

	}


	/** The secrets related to a databox heavy. */
	export interface DataBoxHeavySecret {

		/** Per account level access credentials. */
		accountCredentialDetails?: Array<AccountCredentialDetails>;

		/** Password for out of the box experience on device. */
		devicePassword?: string | null;

		/** Serial number of the assigned device. */
		deviceSerialNumber?: string | null;

		/** The base 64 encoded public key to authenticate with the device */
		encodedValidationCertPubKey?: string | null;

		/** Network configuration of the appliance. */
		networkConfigurations?: Array<ApplianceNetworkConfiguration>;
	}

	/** The secrets related to a databox heavy. */
	export interface DataBoxHeavySecretFormProperties {

		/** Password for out of the box experience on device. */
		devicePassword: FormControl<string | null | undefined>,

		/** Serial number of the assigned device. */
		deviceSerialNumber: FormControl<string | null | undefined>,

		/** The base 64 encoded public key to authenticate with the device */
		encodedValidationCertPubKey: FormControl<string | null | undefined>,
	}
	export function CreateDataBoxHeavySecretFormGroup() {
		return new FormGroup<DataBoxHeavySecretFormProperties>({
			devicePassword: new FormControl<string | null | undefined>(undefined),
			deviceSerialNumber: new FormControl<string | null | undefined>(undefined),
			encodedValidationCertPubKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Databox Job Details */
	export interface DataBoxJobDetails {

		/** Copy progress per storage account. */
		copyProgress?: Array<CopyProgress>;

		/** Set Device password for unlocking Databox */
		devicePassword?: string | null;
	}

	/** Databox Job Details */
	export interface DataBoxJobDetailsFormProperties {

		/** Set Device password for unlocking Databox */
		devicePassword: FormControl<string | null | undefined>,
	}
	export function CreateDataBoxJobDetailsFormGroup() {
		return new FormGroup<DataBoxJobDetailsFormProperties>({
			devicePassword: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request body to get the availability for scheduling data box orders orders. */
	export interface DataBoxScheduleAvailabilityRequest {
	}

	/** Request body to get the availability for scheduling data box orders orders. */
	export interface DataBoxScheduleAvailabilityRequestFormProperties {
	}
	export function CreateDataBoxScheduleAvailabilityRequestFormGroup() {
		return new FormGroup<DataBoxScheduleAvailabilityRequestFormProperties>({
		});

	}


	/** The secrets related to a DataBox. */
	export interface DataBoxSecret {

		/** Per account level access credentials. */
		accountCredentialDetails?: Array<AccountCredentialDetails>;

		/** Password for out of the box experience on device. */
		devicePassword?: string | null;

		/** Serial number of the assigned device. */
		deviceSerialNumber?: string | null;

		/** The base 64 encoded public key to authenticate with the device */
		encodedValidationCertPubKey?: string | null;

		/** Network configuration of the appliance. */
		networkConfigurations?: Array<ApplianceNetworkConfiguration>;
	}

	/** The secrets related to a DataBox. */
	export interface DataBoxSecretFormProperties {

		/** Password for out of the box experience on device. */
		devicePassword: FormControl<string | null | undefined>,

		/** Serial number of the assigned device. */
		deviceSerialNumber: FormControl<string | null | undefined>,

		/** The base 64 encoded public key to authenticate with the device */
		encodedValidationCertPubKey: FormControl<string | null | undefined>,
	}
	export function CreateDataBoxSecretFormGroup() {
		return new FormGroup<DataBoxSecretFormProperties>({
			devicePassword: new FormControl<string | null | undefined>(undefined),
			deviceSerialNumber: new FormControl<string | null | undefined>(undefined),
			encodedValidationCertPubKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to validate data destination details. */
	export interface DataDestinationDetailsValidationRequest {

		/**
		 * Destination account details list.
		 * Required
		 */
		destinationAccountDetails: Array<DestinationAccountDetails>;

		/**
		 * Location of stamp or geo.
		 * Required
		 */
		location: string;
	}

	/** Request to validate data destination details. */
	export interface DataDestinationDetailsValidationRequestFormProperties {

		/**
		 * Location of stamp or geo.
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateDataDestinationDetailsValidationRequestFormGroup() {
		return new FormGroup<DataDestinationDetailsValidationRequestFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details of the destination storage accounts. */
	export interface DestinationAccountDetails {

		/** Arm Id of the destination where the data has to be moved. */
		accountId?: string | null;

		/**
		 * Data Destination Type.
		 * Required
		 */
		dataDestinationType: AccountCredentialDetailsDataDestinationType;

		/** Share password to be shared by all shares in SA. */
		sharePassword?: string | null;
	}

	/** Details of the destination storage accounts. */
	export interface DestinationAccountDetailsFormProperties {

		/** Arm Id of the destination where the data has to be moved. */
		accountId: FormControl<string | null | undefined>,

		/**
		 * Data Destination Type.
		 * Required
		 */
		dataDestinationType: FormControl<AccountCredentialDetailsDataDestinationType | null | undefined>,

		/** Share password to be shared by all shares in SA. */
		sharePassword: FormControl<string | null | undefined>,
	}
	export function CreateDestinationAccountDetailsFormGroup() {
		return new FormGroup<DestinationAccountDetailsFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			dataDestinationType: new FormControl<AccountCredentialDetailsDataDestinationType | null | undefined>(undefined, [Validators.required]),
			sharePassword: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of data destination details validation response. */
	export interface DataDestinationDetailsValidationResponseProperties {

		/** Data destination details validation status. */
		status?: CreateOrderLimitForSubscriptionValidationResponsePropertiesStatus | null;
	}

	/** Properties of data destination details validation response. */
	export interface DataDestinationDetailsValidationResponsePropertiesFormProperties {

		/** Data destination details validation status. */
		status: FormControl<CreateOrderLimitForSubscriptionValidationResponsePropertiesStatus | null | undefined>,
	}
	export function CreateDataDestinationDetailsValidationResponsePropertiesFormGroup() {
		return new FormGroup<DataDestinationDetailsValidationResponsePropertiesFormProperties>({
			status: new FormControl<CreateOrderLimitForSubscriptionValidationResponsePropertiesStatus | null | undefined>(undefined),
		});

	}


	/** The secrets related to a databox job. */
	export interface DataboxJobSecrets {

		/** Contains the list of secret objects for a job. */
		podSecrets?: Array<DataBoxSecret>;
	}

	/** The secrets related to a databox job. */
	export interface DataboxJobSecretsFormProperties {
	}
	export function CreateDataboxJobSecretsFormGroup() {
		return new FormGroup<DataboxJobSecretsFormProperties>({
		});

	}


	/** Dc Access Security code for device. */
	export interface DcAccessSecurityCode {

		/** Dc Access Code for dispatching from DC. */
		forwardDcAccessCode?: string | null;

		/** Dc Access code for dropping off at DC. */
		reverseDcAccessCode?: string | null;
	}

	/** Dc Access Security code for device. */
	export interface DcAccessSecurityCodeFormProperties {

		/** Dc Access Code for dispatching from DC. */
		forwardDcAccessCode: FormControl<string | null | undefined>,

		/** Dc Access code for dropping off at DC. */
		reverseDcAccessCode: FormControl<string | null | undefined>,
	}
	export function CreateDcAccessSecurityCodeFormGroup() {
		return new FormGroup<DcAccessSecurityCodeFormProperties>({
			forwardDcAccessCode: new FormControl<string | null | undefined>(undefined),
			reverseDcAccessCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for the destination compute disks. */
	export interface DestinationManagedDiskDetails {

		/**
		 * Destination Resource Group Id where the Compute disks should be created.
		 * Required
		 */
		resourceGroupId: string;

		/**
		 * Arm Id of the storage account that can be used to copy the vhd for staging.
		 * Required
		 */
		stagingStorageAccountId: string;
	}

	/** Details for the destination compute disks. */
	export interface DestinationManagedDiskDetailsFormProperties {

		/**
		 * Destination Resource Group Id where the Compute disks should be created.
		 * Required
		 */
		resourceGroupId: FormControl<string | null | undefined>,

		/**
		 * Arm Id of the storage account that can be used to copy the vhd for staging.
		 * Required
		 */
		stagingStorageAccountId: FormControl<string | null | undefined>,
	}
	export function CreateDestinationManagedDiskDetailsFormGroup() {
		return new FormGroup<DestinationManagedDiskDetailsFormProperties>({
			resourceGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stagingStorageAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details for the destination storage account. */
	export interface DestinationStorageAccountDetails {

		/**
		 * Destination Storage Account Arm Id.
		 * Required
		 */
		storageAccountId: string;
	}

	/** Details for the destination storage account. */
	export interface DestinationStorageAccountDetailsFormProperties {

		/**
		 * Destination Storage Account Arm Id.
		 * Required
		 */
		storageAccountId: FormControl<string | null | undefined>,
	}
	export function CreateDestinationStorageAccountDetailsFormGroup() {
		return new FormGroup<DestinationStorageAccountDetailsFormProperties>({
			storageAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request body to get the availability for scheduling disk orders. */
	export interface DiskScheduleAvailabilityRequest {

		/**
		 * The expected size of the data, which needs to be transferred in this job, in terabytes.
		 * Required
		 */
		expectedDataSizeInTerabytes: number;
	}

	/** Request body to get the availability for scheduling disk orders. */
	export interface DiskScheduleAvailabilityRequestFormProperties {

		/**
		 * The expected size of the data, which needs to be transferred in this job, in terabytes.
		 * Required
		 */
		expectedDataSizeInTerabytes: FormControl<number | null | undefined>,
	}
	export function CreateDiskScheduleAvailabilityRequestFormGroup() {
		return new FormGroup<DiskScheduleAvailabilityRequestFormProperties>({
			expectedDataSizeInTerabytes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Top level error for the job. */
	export interface Error {

		/** Error code that can be used to programmatically identify the error. */
		code?: string | null;

		/** Describes the error in detail and provides debugging information. */
		message?: string | null;
	}

	/** Top level error for the job. */
	export interface ErrorFormProperties {

		/** Error code that can be used to programmatically identify the error. */
		code: FormControl<string | null | undefined>,

		/** Describes the error in detail and provides debugging information. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request body to get the availability for scheduling heavy orders. */
	export interface HeavyScheduleAvailabilityRequest {
	}

	/** Request body to get the availability for scheduling heavy orders. */
	export interface HeavyScheduleAvailabilityRequestFormProperties {
	}
	export function CreateHeavyScheduleAvailabilityRequestFormGroup() {
		return new FormGroup<HeavyScheduleAvailabilityRequestFormProperties>({
		});

	}


	/** Additional delivery info. */
	export interface JobDeliveryInfo {

		/** Scheduled date time. */
		scheduledDateTime?: Date | null;
	}

	/** Additional delivery info. */
	export interface JobDeliveryInfoFormProperties {

		/** Scheduled date time. */
		scheduledDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateJobDeliveryInfoFormGroup() {
		return new FormGroup<JobDeliveryInfoFormProperties>({
			scheduledDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Job details. */
	export interface JobDetails {

		/** Shared access key to download the chain of custody logs */
		chainOfCustodySasKey?: string | null;

		/**
		 * Contact Details.
		 * Required
		 */
		contactDetails: ContactDetails;

		/** List of copy log details. */
		copyLogDetails?: Array<CopyLogDetails>;

		/** Shipping details. */
		deliveryPackage?: PackageShippingDetails;

		/**
		 * Destination account details.
		 * Required
		 */
		destinationAccountDetails: Array<DestinationAccountDetails>;

		/** Error details for failure. This is optional. */
		errorDetails?: Array<JobErrorDetails>;

		/** The expected size of the data, which needs to be transferred in this job, in terabytes. */
		expectedDataSizeInTerabytes?: number | null;

		/**
		 * Indicates the type of job details.
		 * Required
		 */
		jobDetailsType: SkuName;

		/** List of stages that run in the job. */
		jobStages?: Array<JobStages>;

		/** Preferences related to the order */
		preferences?: Preferences;

		/** Shipping details. */
		returnPackage?: PackageShippingDetails;

		/** Shared access key to download the return shipment label */
		reverseShipmentLabelSasKey?: string | null;

		/**
		 * Shipping address where customer wishes to receive the device.
		 * Required
		 */
		shippingAddress: ShippingAddress;
	}

	/** Job details. */
	export interface JobDetailsFormProperties {

		/** Shared access key to download the chain of custody logs */
		chainOfCustodySasKey: FormControl<string | null | undefined>,

		/** The expected size of the data, which needs to be transferred in this job, in terabytes. */
		expectedDataSizeInTerabytes: FormControl<number | null | undefined>,

		/**
		 * Indicates the type of job details.
		 * Required
		 */
		jobDetailsType: FormControl<SkuName | null | undefined>,

		/** Shared access key to download the return shipment label */
		reverseShipmentLabelSasKey: FormControl<string | null | undefined>,
	}
	export function CreateJobDetailsFormGroup() {
		return new FormGroup<JobDetailsFormProperties>({
			chainOfCustodySasKey: new FormControl<string | null | undefined>(undefined),
			expectedDataSizeInTerabytes: new FormControl<number | null | undefined>(undefined),
			jobDetailsType: new FormControl<SkuName | null | undefined>(undefined, [Validators.required]),
			reverseShipmentLabelSasKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Shipping details. */
	export interface PackageShippingDetails {

		/** Name of the carrier. */
		carrierName?: string | null;

		/** Tracking Id of shipment. */
		trackingId?: string | null;

		/** Url where shipment can be tracked. */
		trackingUrl?: string | null;
	}

	/** Shipping details. */
	export interface PackageShippingDetailsFormProperties {

		/** Name of the carrier. */
		carrierName: FormControl<string | null | undefined>,

		/** Tracking Id of shipment. */
		trackingId: FormControl<string | null | undefined>,

		/** Url where shipment can be tracked. */
		trackingUrl: FormControl<string | null | undefined>,
	}
	export function CreatePackageShippingDetailsFormGroup() {
		return new FormGroup<PackageShippingDetailsFormProperties>({
			carrierName: new FormControl<string | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
			trackingUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Job Error Details for providing the information and recommended action. */
	export interface JobErrorDetails {

		/** Code for the error. */
		errorCode?: number | null;

		/** Message for the error. */
		errorMessage?: string | null;

		/** Contains the non localized exception message */
		exceptionMessage?: string | null;

		/** Recommended action for the error. */
		recommendedAction?: string | null;
	}

	/** Job Error Details for providing the information and recommended action. */
	export interface JobErrorDetailsFormProperties {

		/** Code for the error. */
		errorCode: FormControl<number | null | undefined>,

		/** Message for the error. */
		errorMessage: FormControl<string | null | undefined>,

		/** Contains the non localized exception message */
		exceptionMessage: FormControl<string | null | undefined>,

		/** Recommended action for the error. */
		recommendedAction: FormControl<string | null | undefined>,
	}
	export function CreateJobErrorDetailsFormGroup() {
		return new FormGroup<JobErrorDetailsFormProperties>({
			errorCode: new FormControl<number | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			exceptionMessage: new FormControl<string | null | undefined>(undefined),
			recommendedAction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Job stages. */
	export interface JobStages {

		/** Display name of the job stage. */
		displayName?: string | null;

		/** Error details for the stage. */
		errorDetails?: Array<JobErrorDetails>;

		/** Job Stage Details */
		jobStageDetails?: string | null;

		/** Name of the job stage. */
		stageName?: JobStagesStageName | null;

		/** Status of the job stage. */
		stageStatus?: JobStagesStageStatus | null;

		/** Time for the job stage in UTC ISO 8601 format. */
		stageTime?: Date | null;
	}

	/** Job stages. */
	export interface JobStagesFormProperties {

		/** Display name of the job stage. */
		displayName: FormControl<string | null | undefined>,

		/** Job Stage Details */
		jobStageDetails: FormControl<string | null | undefined>,

		/** Name of the job stage. */
		stageName: FormControl<JobStagesStageName | null | undefined>,

		/** Status of the job stage. */
		stageStatus: FormControl<JobStagesStageStatus | null | undefined>,

		/** Time for the job stage in UTC ISO 8601 format. */
		stageTime: FormControl<Date | null | undefined>,
	}
	export function CreateJobStagesFormGroup() {
		return new FormGroup<JobStagesFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			jobStageDetails: new FormControl<string | null | undefined>(undefined),
			stageName: new FormControl<JobStagesStageName | null | undefined>(undefined),
			stageStatus: new FormControl<JobStagesStageStatus | null | undefined>(undefined),
			stageTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum JobStagesStageName { DeviceOrdered = 0, DevicePrepared = 1, Dispatched = 2, Delivered = 3, PickedUp = 4, AtAzureDC = 5, DataCopy = 6, Completed = 7, CompletedWithErrors = 8, Cancelled = 9, Failed_IssueReportedAtCustomer = 10, Failed_IssueDetectedAtAzureDC = 11, Aborted = 12, CompletedWithWarnings = 13, ReadyToDispatchFromAzureDC = 14, ReadyToReceiveAtAzureDC = 15 }

	export enum JobStagesStageStatus { None = 0, InProgress = 1, Succeeded = 2, Failed = 3, Cancelled = 4, Cancelling = 5, SucceededWithErrors = 6 }


	/** Preferences related to the order */
	export interface Preferences {

		/** Preferred Data Center Region. */
		preferredDataCenterRegion?: Array<string>;

		/** Preferences related to the shipment logistics of the sku */
		transportPreferences?: TransportPreferences;
	}

	/** Preferences related to the order */
	export interface PreferencesFormProperties {
	}
	export function CreatePreferencesFormGroup() {
		return new FormGroup<PreferencesFormProperties>({
		});

	}


	/** Preferences related to the shipment logistics of the sku */
	export interface TransportPreferences {

		/**
		 * Indicates Shipment Logistics type that the customer preferred.
		 * Required
		 */
		preferredShipmentType: TransportPreferencesPreferredShipmentType;
	}

	/** Preferences related to the shipment logistics of the sku */
	export interface TransportPreferencesFormProperties {

		/**
		 * Indicates Shipment Logistics type that the customer preferred.
		 * Required
		 */
		preferredShipmentType: FormControl<TransportPreferencesPreferredShipmentType | null | undefined>,
	}
	export function CreateTransportPreferencesFormGroup() {
		return new FormGroup<TransportPreferencesFormProperties>({
			preferredShipmentType: new FormControl<TransportPreferencesPreferredShipmentType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TransportPreferencesPreferredShipmentType { CustomerManaged = 0, MicrosoftManaged = 1 }


	/** Job Properties */
	export interface JobProperties {

		/** Reason for cancellation. */
		cancellationReason?: string | null;

		/** Additional delivery info. */
		deliveryInfo?: JobDeliveryInfo;

		/** Delivery type of Job. */
		deliveryType?: JobPropertiesDeliveryType | null;

		/** Job details. */
		details?: JobDetails;

		/** Top level error for the job. */
		error?: Error;

		/** Describes whether the job is cancellable or not. */
		isCancellable?: boolean | null;

		/** Flag to indicate cancellation of scheduled job. */
		isCancellableWithoutFee?: boolean | null;

		/** Describes whether the job is deletable or not. */
		isDeletable?: boolean | null;

		/** Describes whether the shipping address is editable or not. */
		isShippingAddressEditable?: boolean | null;

		/** Time at which the job was started in UTC ISO 8601 format. */
		startTime?: Date | null;

		/** Name of the stage which is in progress. */
		status?: JobStagesStageName | null;
	}

	/** Job Properties */
	export interface JobPropertiesFormProperties {

		/** Reason for cancellation. */
		cancellationReason: FormControl<string | null | undefined>,

		/** Delivery type of Job. */
		deliveryType: FormControl<JobPropertiesDeliveryType | null | undefined>,

		/** Describes whether the job is cancellable or not. */
		isCancellable: FormControl<boolean | null | undefined>,

		/** Flag to indicate cancellation of scheduled job. */
		isCancellableWithoutFee: FormControl<boolean | null | undefined>,

		/** Describes whether the job is deletable or not. */
		isDeletable: FormControl<boolean | null | undefined>,

		/** Describes whether the shipping address is editable or not. */
		isShippingAddressEditable: FormControl<boolean | null | undefined>,

		/** Time at which the job was started in UTC ISO 8601 format. */
		startTime: FormControl<Date | null | undefined>,

		/** Name of the stage which is in progress. */
		status: FormControl<JobStagesStageName | null | undefined>,
	}
	export function CreateJobPropertiesFormGroup() {
		return new FormGroup<JobPropertiesFormProperties>({
			cancellationReason: new FormControl<string | null | undefined>(undefined),
			deliveryType: new FormControl<JobPropertiesDeliveryType | null | undefined>(undefined),
			isCancellable: new FormControl<boolean | null | undefined>(undefined),
			isCancellableWithoutFee: new FormControl<boolean | null | undefined>(undefined),
			isDeletable: new FormControl<boolean | null | undefined>(undefined),
			isShippingAddressEditable: new FormControl<boolean | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<JobStagesStageName | null | undefined>(undefined),
		});

	}

	export enum JobPropertiesDeliveryType { NonScheduled = 0, Scheduled = 1 }


	/** Job Resource. */
	export interface JobResource {

		/** Id of the object. */
		id?: string | null;

		/** Name of the object. */
		name?: string | null;

		/**
		 * Job Properties
		 * Required
		 */
		properties: JobProperties;

		/** Type of the object. */
		type?: string | null;
	}

	/** Job Resource. */
	export interface JobResourceFormProperties {

		/** Id of the object. */
		id: FormControl<string | null | undefined>,

		/** Name of the object. */
		name: FormControl<string | null | undefined>,

		/** Type of the object. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateJobResourceFormGroup() {
		return new FormGroup<JobResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Job Resource Collection */
	export interface JobResourceList {

		/** Link for the next set of job resources. */
		nextLink?: string | null;

		/** List of job resources. */
		value?: Array<JobResource>;
	}

	/** Job Resource Collection */
	export interface JobResourceListFormProperties {

		/** Link for the next set of job resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJobResourceListFormGroup() {
		return new FormGroup<JobResourceListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The JobResourceUpdateParameter. */
	export interface JobResourceUpdateParameter {

		/** Job Properties for update */
		properties?: UpdateJobProperties;

		/** The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). */
		tags?: {[id: string]: string };
	}

	/** The JobResourceUpdateParameter. */
	export interface JobResourceUpdateParameterFormProperties {

		/** The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateJobResourceUpdateParameterFormGroup() {
		return new FormGroup<JobResourceUpdateParameterFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Job Properties for update */
	export interface UpdateJobProperties {

		/** Destination account details. */
		destinationAccountDetails?: Array<DestinationAccountDetails>;

		/** Job details for update. */
		details?: UpdateJobDetails;
	}

	/** Job Properties for update */
	export interface UpdateJobPropertiesFormProperties {
	}
	export function CreateUpdateJobPropertiesFormGroup() {
		return new FormGroup<UpdateJobPropertiesFormProperties>({
		});

	}


	/** Job details for update. */
	export interface UpdateJobDetails {

		/** Contact Details. */
		contactDetails?: ContactDetails;

		/** Shipping address where customer wishes to receive the device. */
		shippingAddress?: ShippingAddress;
	}

	/** Job details for update. */
	export interface UpdateJobDetailsFormProperties {
	}
	export function CreateUpdateJobDetailsFormGroup() {
		return new FormGroup<UpdateJobDetailsFormProperties>({
		});

	}


	/** The base class for the secrets */
	export interface JobSecrets {

		/** Dc Access Security code for device. */
		dcAccessSecurityCode?: DcAccessSecurityCode;

		/**
		 * Used to indicate what type of job secrets object.
		 * Required
		 */
		jobSecretsType: SkuName;
	}

	/** The base class for the secrets */
	export interface JobSecretsFormProperties {

		/**
		 * Used to indicate what type of job secrets object.
		 * Required
		 */
		jobSecretsType: FormControl<SkuName | null | undefined>,
	}
	export function CreateJobSecretsFormGroup() {
		return new FormGroup<JobSecretsFormProperties>({
			jobSecretsType: new FormControl<SkuName | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Operation entity. */
	export interface Operation {

		/** Operation display */
		display?: OperationDisplay;

		/** Name of the operation. Format: {resourceProviderNamespace}/{resourceType}/{read|write|delete|action} */
		name?: string | null;

		/** Origin of the operation. Can be : user|system|user,system */
		origin?: string | null;

		/** Operation properties. */
		properties?: OperationProperties;
	}

	/** Operation entity. */
	export interface OperationFormProperties {

		/** Name of the operation. Format: {resourceProviderNamespace}/{resourceType}/{read|write|delete|action} */
		name: FormControl<string | null | undefined>,

		/** Origin of the operation. Can be : user|system|user,system */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operation display */
	export interface OperationDisplay {

		/** Localized description of the operation for display purpose. */
		description?: string | null;

		/** Localized name of the operation for display purpose. */
		operation?: string | null;

		/** Provider name. */
		provider?: string | null;

		/** Resource name. */
		resource?: string | null;
	}

	/** Operation display */
	export interface OperationDisplayFormProperties {

		/** Localized description of the operation for display purpose. */
		description: FormControl<string | null | undefined>,

		/** Localized name of the operation for display purpose. */
		operation: FormControl<string | null | undefined>,

		/** Provider name. */
		provider: FormControl<string | null | undefined>,

		/** Resource name. */
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
	}

	/** Operation properties. */
	export interface OperationPropertiesFormProperties {
	}
	export function CreateOperationPropertiesFormGroup() {
		return new FormGroup<OperationPropertiesFormProperties>({
		});

	}


	/** Operation Collection. */
	export interface OperationList {

		/** Link for the next set of operations. */
		nextLink?: string | null;

		/** List of operations. */
		value?: Array<Operation>;
	}

	/** Operation Collection. */
	export interface OperationListFormProperties {

		/** Link for the next set of operations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListFormGroup() {
		return new FormGroup<OperationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to validate preference of transport and data center. */
	export interface PreferencesValidationRequest {

		/**
		 * Device type to be used for the job.
		 * Required
		 */
		deviceType: SkuName;

		/** Preferences related to the order */
		preference?: Preferences;
	}

	/** Request to validate preference of transport and data center. */
	export interface PreferencesValidationRequestFormProperties {

		/**
		 * Device type to be used for the job.
		 * Required
		 */
		deviceType: FormControl<SkuName | null | undefined>,
	}
	export function CreatePreferencesValidationRequestFormGroup() {
		return new FormGroup<PreferencesValidationRequestFormProperties>({
			deviceType: new FormControl<SkuName | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Properties of data center and transport preference validation response. */
	export interface PreferencesValidationResponseProperties {

		/** Validation status of requested data center and transport. */
		status?: CreateOrderLimitForSubscriptionValidationResponsePropertiesStatus | null;
	}

	/** Properties of data center and transport preference validation response. */
	export interface PreferencesValidationResponsePropertiesFormProperties {

		/** Validation status of requested data center and transport. */
		status: FormControl<CreateOrderLimitForSubscriptionValidationResponsePropertiesStatus | null | undefined>,
	}
	export function CreatePreferencesValidationResponsePropertiesFormGroup() {
		return new FormGroup<PreferencesValidationResponsePropertiesFormProperties>({
			status: new FormControl<CreateOrderLimitForSubscriptionValidationResponsePropertiesStatus | null | undefined>(undefined),
		});

	}


	/** Request body to get the configuration for the region. */
	export interface RegionConfigurationRequest {

		/** Request body to get the availability for scheduling orders. */
		scheduleAvailabilityRequest?: ScheduleAvailabilityRequest;

		/** Request body to get the transport availability for given sku. */
		transportAvailabilityRequest?: TransportAvailabilityRequest;
	}

	/** Request body to get the configuration for the region. */
	export interface RegionConfigurationRequestFormProperties {
	}
	export function CreateRegionConfigurationRequestFormGroup() {
		return new FormGroup<RegionConfigurationRequestFormProperties>({
		});

	}


	/** Request body to get the availability for scheduling orders. */
	export interface ScheduleAvailabilityRequest {

		/**
		 * Sku Name for which the order is to be scheduled.
		 * Required
		 */
		skuName: SkuName;

		/**
		 * Location for data transfer.
		 * For locations check: https://management.azure.com/subscriptions/SUBSCRIPTIONID/locations?api-version=2018-01-01
		 * Required
		 */
		storageLocation: string;
	}

	/** Request body to get the availability for scheduling orders. */
	export interface ScheduleAvailabilityRequestFormProperties {

		/**
		 * Sku Name for which the order is to be scheduled.
		 * Required
		 */
		skuName: FormControl<SkuName | null | undefined>,

		/**
		 * Location for data transfer.
		 * For locations check: https://management.azure.com/subscriptions/SUBSCRIPTIONID/locations?api-version=2018-01-01
		 * Required
		 */
		storageLocation: FormControl<string | null | undefined>,
	}
	export function CreateScheduleAvailabilityRequestFormGroup() {
		return new FormGroup<ScheduleAvailabilityRequestFormProperties>({
			skuName: new FormControl<SkuName | null | undefined>(undefined, [Validators.required]),
			storageLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request body to get the transport availability for given sku. */
	export interface TransportAvailabilityRequest {

		/** Type of the device. */
		skuName?: SkuName | null;
	}

	/** Request body to get the transport availability for given sku. */
	export interface TransportAvailabilityRequestFormProperties {

		/** Type of the device. */
		skuName: FormControl<SkuName | null | undefined>,
	}
	export function CreateTransportAvailabilityRequestFormGroup() {
		return new FormGroup<TransportAvailabilityRequestFormProperties>({
			skuName: new FormControl<SkuName | null | undefined>(undefined),
		});

	}


	/** Configuration response specific to a region. */
	export interface RegionConfigurationResponse {

		/** Schedule availability response for given sku in a region. */
		scheduleAvailabilityResponse?: ScheduleAvailabilityResponse;

		/** Transport options available for given sku in a region. */
		transportAvailabilityResponse?: TransportAvailabilityResponse;
	}

	/** Configuration response specific to a region. */
	export interface RegionConfigurationResponseFormProperties {
	}
	export function CreateRegionConfigurationResponseFormGroup() {
		return new FormGroup<RegionConfigurationResponseFormProperties>({
		});

	}


	/** Schedule availability response for given sku in a region. */
	export interface ScheduleAvailabilityResponse {

		/** List of dates available to schedule */
		availableDates?: Array<string>;
	}

	/** Schedule availability response for given sku in a region. */
	export interface ScheduleAvailabilityResponseFormProperties {
	}
	export function CreateScheduleAvailabilityResponseFormGroup() {
		return new FormGroup<ScheduleAvailabilityResponseFormProperties>({
		});

	}


	/** Transport options available for given sku in a region. */
	export interface TransportAvailabilityResponse {

		/** List of transport availability details for given region */
		transportAvailabilityDetails?: Array<TransportAvailabilityDetails>;
	}

	/** Transport options available for given sku in a region. */
	export interface TransportAvailabilityResponseFormProperties {
	}
	export function CreateTransportAvailabilityResponseFormGroup() {
		return new FormGroup<TransportAvailabilityResponseFormProperties>({
		});

	}


	/** Transport options availability details for given region. */
	export interface TransportAvailabilityDetails {

		/** Transport Shipment Type supported for given region. */
		shipmentType?: TransportPreferencesPreferredShipmentType | null;
	}

	/** Transport options availability details for given region. */
	export interface TransportAvailabilityDetailsFormProperties {

		/** Transport Shipment Type supported for given region. */
		shipmentType: FormControl<TransportPreferencesPreferredShipmentType | null | undefined>,
	}
	export function CreateTransportAvailabilityDetailsFormGroup() {
		return new FormGroup<TransportAvailabilityDetailsFormProperties>({
			shipmentType: new FormControl<TransportPreferencesPreferredShipmentType | null | undefined>(undefined),
		});

	}


	/** Model of the Resource. */
	export interface Resource {

		/**
		 * The location of the resource. This will be one of the supported and registered Azure Regions (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once it is created, but if an identical region is specified on update the request will succeed.
		 * Required
		 */
		location: string;

		/**
		 * The Sku.
		 * Required
		 */
		sku: Sku;

		/** The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). */
		tags?: {[id: string]: string };
	}

	/** Model of the Resource. */
	export interface ResourceFormProperties {

		/**
		 * The location of the resource. This will be one of the supported and registered Azure Regions (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once it is created, but if an identical region is specified on update the request will succeed.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Shipment pick up request details. */
	export interface ShipmentPickUpRequest {

		/**
		 * Maximum date before which the pick up should commence, this must be in local time of pick up area.
		 * Required
		 */
		endTime: Date;

		/**
		 * Shipment Location in the pickup place. Eg.front desk
		 * Required
		 */
		shipmentLocation: string;

		/**
		 * Minimum date after which the pick up should commence, this must be in local time of pick up area.
		 * Required
		 */
		startTime: Date;
	}

	/** Shipment pick up request details. */
	export interface ShipmentPickUpRequestFormProperties {

		/**
		 * Maximum date before which the pick up should commence, this must be in local time of pick up area.
		 * Required
		 */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * Shipment Location in the pickup place. Eg.front desk
		 * Required
		 */
		shipmentLocation: FormControl<string | null | undefined>,

		/**
		 * Minimum date after which the pick up should commence, this must be in local time of pick up area.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateShipmentPickUpRequestFormGroup() {
		return new FormGroup<ShipmentPickUpRequestFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			shipmentLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Shipment pick up response. */
	export interface ShipmentPickUpResponse {

		/** Confirmation number for the pick up request. */
		confirmationNumber?: string | null;

		/** Time by which shipment should be ready for pick up, this is in local time of pick up area. */
		readyByTime?: Date | null;
	}

	/** Shipment pick up response. */
	export interface ShipmentPickUpResponseFormProperties {

		/** Confirmation number for the pick up request. */
		confirmationNumber: FormControl<string | null | undefined>,

		/** Time by which shipment should be ready for pick up, this is in local time of pick up area. */
		readyByTime: FormControl<Date | null | undefined>,
	}
	export function CreateShipmentPickUpResponseFormGroup() {
		return new FormGroup<ShipmentPickUpResponseFormProperties>({
			confirmationNumber: new FormControl<string | null | undefined>(undefined),
			readyByTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Request to validate sku availability. */
	export interface SkuAvailabilityValidationRequest {

		/**
		 * ISO country code. Country for hardware shipment. For codes check: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
		 * Required
		 */
		country: string;

		/**
		 * Device type to be used for the job.
		 * Required
		 */
		deviceType: SkuName;

		/**
		 * Location for data transfer. For locations check: https://management.azure.com/subscriptions/SUBSCRIPTIONID/locations?api-version=2018-01-01
		 * Required
		 */
		location: string;

		/**
		 * Type of the transfer.
		 * Required
		 */
		transferType: AvailableSkuRequestTransferType;
	}

	/** Request to validate sku availability. */
	export interface SkuAvailabilityValidationRequestFormProperties {

		/**
		 * ISO country code. Country for hardware shipment. For codes check: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Device type to be used for the job.
		 * Required
		 */
		deviceType: FormControl<SkuName | null | undefined>,

		/**
		 * Location for data transfer. For locations check: https://management.azure.com/subscriptions/SUBSCRIPTIONID/locations?api-version=2018-01-01
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/**
		 * Type of the transfer.
		 * Required
		 */
		transferType: FormControl<AvailableSkuRequestTransferType | null | undefined>,
	}
	export function CreateSkuAvailabilityValidationRequestFormGroup() {
		return new FormGroup<SkuAvailabilityValidationRequestFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deviceType: new FormControl<SkuName | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transferType: new FormControl<AvailableSkuRequestTransferType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Properties of sku availability validation response. */
	export interface SkuAvailabilityValidationResponseProperties {

		/** Sku availability validation status. */
		status?: CreateOrderLimitForSubscriptionValidationResponsePropertiesStatus | null;
	}

	/** Properties of sku availability validation response. */
	export interface SkuAvailabilityValidationResponsePropertiesFormProperties {

		/** Sku availability validation status. */
		status: FormControl<CreateOrderLimitForSubscriptionValidationResponsePropertiesStatus | null | undefined>,
	}
	export function CreateSkuAvailabilityValidationResponsePropertiesFormGroup() {
		return new FormGroup<SkuAvailabilityValidationResponsePropertiesFormProperties>({
			status: new FormControl<CreateOrderLimitForSubscriptionValidationResponsePropertiesStatus | null | undefined>(undefined),
		});

	}


	/** Request to validate subscription permission to create jobs. */
	export interface SubscriptionIsAllowedToCreateJobValidationRequest {
	}

	/** Request to validate subscription permission to create jobs. */
	export interface SubscriptionIsAllowedToCreateJobValidationRequestFormProperties {
	}
	export function CreateSubscriptionIsAllowedToCreateJobValidationRequestFormGroup() {
		return new FormGroup<SubscriptionIsAllowedToCreateJobValidationRequestFormProperties>({
		});

	}


	/** Properties of subscription permission to create job validation response. */
	export interface SubscriptionIsAllowedToCreateJobValidationResponseProperties {

		/** Validation status of subscription permission to create job. */
		status?: CreateOrderLimitForSubscriptionValidationResponsePropertiesStatus | null;
	}

	/** Properties of subscription permission to create job validation response. */
	export interface SubscriptionIsAllowedToCreateJobValidationResponsePropertiesFormProperties {

		/** Validation status of subscription permission to create job. */
		status: FormControl<CreateOrderLimitForSubscriptionValidationResponsePropertiesStatus | null | undefined>,
	}
	export function CreateSubscriptionIsAllowedToCreateJobValidationResponsePropertiesFormGroup() {
		return new FormGroup<SubscriptionIsAllowedToCreateJobValidationResponsePropertiesFormProperties>({
			status: new FormControl<CreateOrderLimitForSubscriptionValidationResponsePropertiesStatus | null | undefined>(undefined),
		});

	}


	/** Unencrypted credentials for accessing device. */
	export interface UnencryptedCredentials {

		/** Name of the job. */
		jobName?: string | null;

		/** The base class for the secrets */
		jobSecrets?: JobSecrets;
	}

	/** Unencrypted credentials for accessing device. */
	export interface UnencryptedCredentialsFormProperties {

		/** Name of the job. */
		jobName: FormControl<string | null | undefined>,
	}
	export function CreateUnencryptedCredentialsFormGroup() {
		return new FormGroup<UnencryptedCredentialsFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of unencrypted credentials for accessing device. */
	export interface UnencryptedCredentialsList {

		/** Link for the next set of unencrypted credentials. */
		nextLink?: string | null;

		/** List of unencrypted credentials. */
		value?: Array<UnencryptedCredentials>;
	}

	/** List of unencrypted credentials for accessing device. */
	export interface UnencryptedCredentialsListFormProperties {

		/** Link for the next set of unencrypted credentials. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateUnencryptedCredentialsListFormGroup() {
		return new FormGroup<UnencryptedCredentialsListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The requirements to validate customer address where the device needs to be shipped. */
	export interface ValidateAddress {

		/**
		 * Device type to be used for the job.
		 * Required
		 */
		deviceType: SkuName;

		/**
		 * Shipping address where customer wishes to receive the device.
		 * Required
		 */
		shippingAddress: ShippingAddress;

		/** Preferences related to the shipment logistics of the sku */
		transportPreferences?: TransportPreferences;
	}

	/** The requirements to validate customer address where the device needs to be shipped. */
	export interface ValidateAddressFormProperties {

		/**
		 * Device type to be used for the job.
		 * Required
		 */
		deviceType: FormControl<SkuName | null | undefined>,
	}
	export function CreateValidateAddressFormGroup() {
		return new FormGroup<ValidateAddressFormProperties>({
			deviceType: new FormControl<SkuName | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Minimum fields that must be present in any type of validation request. */
	export interface ValidationInputRequest {

		/**
		 * Identifies the type of validation request.
		 * Required
		 */
		validationType: ValidationInputRequestValidationType;
	}

	/** Minimum fields that must be present in any type of validation request. */
	export interface ValidationInputRequestFormProperties {

		/**
		 * Identifies the type of validation request.
		 * Required
		 */
		validationType: FormControl<ValidationInputRequestValidationType | null | undefined>,
	}
	export function CreateValidationInputRequestFormGroup() {
		return new FormGroup<ValidationInputRequestFormProperties>({
			validationType: new FormControl<ValidationInputRequestValidationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ValidationInputRequestValidationType { ValidateAddress = 0, ValidateDataDestinationDetails = 1, ValidateSubscriptionIsAllowedToCreateJob = 2, ValidatePreferences = 3, ValidateCreateOrderLimit = 4, ValidateSkuAvailability = 5 }


	/** Minimum properties that should be present in each individual validation response. */
	export interface ValidationInputResponse {

		/** Top level error for the job. */
		error?: Error;

		/**
		 * Identifies the type of validation response.
		 * Required
		 */
		validationType: ValidationInputRequestValidationType;
	}

	/** Minimum properties that should be present in each individual validation response. */
	export interface ValidationInputResponseFormProperties {

		/**
		 * Identifies the type of validation response.
		 * Required
		 */
		validationType: FormControl<ValidationInputRequestValidationType | null | undefined>,
	}
	export function CreateValidationInputResponseFormGroup() {
		return new FormGroup<ValidationInputResponseFormProperties>({
			validationType: new FormControl<ValidationInputRequestValidationType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Input request for all pre job creation validation. */
	export interface ValidationRequest {

		/**
		 * List of request details contain validationType and its request as key and value respectively.
		 * Required
		 */
		individualRequestDetails: Array<ValidationInputRequest>;

		/**
		 * Identify the nature of validation.
		 * Required
		 */
		validationCategory: ValidationRequestValidationCategory;
	}

	/** Input request for all pre job creation validation. */
	export interface ValidationRequestFormProperties {

		/**
		 * Identify the nature of validation.
		 * Required
		 */
		validationCategory: FormControl<ValidationRequestValidationCategory | null | undefined>,
	}
	export function CreateValidationRequestFormGroup() {
		return new FormGroup<ValidationRequestFormProperties>({
			validationCategory: new FormControl<ValidationRequestValidationCategory | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ValidationRequestValidationCategory { JobCreationValidation = 0 }


	/** Response of pre job creation validations. */
	export interface ValidationResponse {

		/** Properties of pre job creation validation response. */
		properties?: ValidationResponseProperties;
	}

	/** Response of pre job creation validations. */
	export interface ValidationResponseFormProperties {
	}
	export function CreateValidationResponseFormGroup() {
		return new FormGroup<ValidationResponseFormProperties>({
		});

	}


	/** Properties of pre job creation validation response. */
	export interface ValidationResponseProperties {

		/** List of response details contain validationType and its response as key and value respectively. */
		individualResponseDetails?: Array<ValidationInputResponse>;

		/** Overall validation status. */
		status?: ValidationResponsePropertiesStatus | null;
	}

	/** Properties of pre job creation validation response. */
	export interface ValidationResponsePropertiesFormProperties {

		/** Overall validation status. */
		status: FormControl<ValidationResponsePropertiesStatus | null | undefined>,
	}
	export function CreateValidationResponsePropertiesFormGroup() {
		return new FormGroup<ValidationResponsePropertiesFormProperties>({
			status: new FormControl<ValidationResponsePropertiesStatus | null | undefined>(undefined),
		});

	}

	export enum ValidationResponsePropertiesStatus { AllValidToProceed = 0, InputsRevisitRequired = 1, CertainInputValidationsSkipped = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * This method gets all the operations.
		 * Get providers/Microsoft.DataBox/operations
		 * @param {string} api_version The API Version
		 * @return {OperationList} The supported operations list.
		 */
		Operations_List(api_version: string): Observable<OperationList> {
			return this.http.get<OperationList>(this.baseUri + 'providers/Microsoft.DataBox/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the jobs available under the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.DataBox/jobs
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} api_version The API Version
		 * @param {string} skipToken $skipToken is supported on Get list of jobs, which provides the next page in the list of jobs.
		 * @return {JobResourceList} List of jobs available under the subscription.
		 */
		Jobs_List(subscriptionId: string, api_version: string, skipToken: string | null | undefined): Observable<JobResourceList> {
			return this.http.get<JobResourceList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DataBox/jobs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * This method provides the list of available skus for the given subscription and location.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.DataBox/locations/{location}/availableSkus
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} location The location of the resource
		 * @param {string} api_version The API Version
		 * @param {AvailableSkuRequest} requestBody Filters for showing the available skus.
		 * @return {AvailableSkusResult} The list of available skus under subscription.
		 */
		Service_ListAvailableSkus(subscriptionId: string, location: string, api_version: string, requestBody: AvailableSkuRequest): Observable<AvailableSkusResult> {
			return this.http.post<AvailableSkusResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DataBox/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/availableSkus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This API provides configuration details specific to given region/location.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.DataBox/locations/{location}/regionConfiguration
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} location The location of the resource
		 * @param {string} api_version The API Version
		 * @param {RegionConfigurationRequest} requestBody Request body to get the configuration for the region.
		 * @return {RegionConfigurationResponse} Region configuration response.
		 */
		Service_RegionConfiguration(subscriptionId: string, location: string, api_version: string, requestBody: RegionConfigurationRequest): Observable<RegionConfigurationResponse> {
			return this.http.post<RegionConfigurationResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DataBox/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/regionConfiguration&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * [DEPRECATED NOTICE: This operation will soon be removed] This method validates the customer shipping address and provide alternate addresses if any.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.DataBox/locations/{location}/validateAddress
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} location The location of the resource
		 * @param {string} api_version The API Version
		 * @param {ValidateAddress} requestBody Shipping address of the customer.
		 * @return {AddressValidationOutput} The valid and alternate addresses.
		 */
		Service_ValidateAddress(subscriptionId: string, location: string, api_version: string, requestBody: ValidateAddress): Observable<AddressValidationOutput> {
			return this.http.post<AddressValidationOutput>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DataBox/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/validateAddress&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This method does all necessary pre-job creation validation under subscription.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.DataBox/locations/{location}/validateInputs
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} location The location of the resource
		 * @param {string} api_version The API Version
		 * @param {ValidationRequest} requestBody Inputs of the customer.
		 * @return {ValidationResponse} The validation status and responses of each validating parameter.
		 */
		Service_ValidateInputs(subscriptionId: string, location: string, api_version: string, requestBody: ValidationRequest): Observable<ValidationResponse> {
			return this.http.post<ValidationResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DataBox/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/validateInputs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the jobs available under the given resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} api_version The API Version
		 * @param {string} skipToken $skipToken is supported on Get list of jobs, which provides the next page in the list of jobs.
		 * @return {JobResourceList} List of jobs by resource group.
		 */
		Jobs_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string, skipToken: string | null | undefined): Observable<JobResourceList> {
			return this.http.get<JobResourceList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBox/jobs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Gets information about the specified job.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} jobName The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 * @param {string} api_version The API Version
		 * @param {string} expand $expand is supported on details parameter for job, which provides details on the job stages.
		 * @return {JobResource} Job object.
		 */
		Jobs_Get(subscriptionId: string, resourceGroupName: string, jobName: string, api_version: string, expand: string | null | undefined): Observable<JobResource> {
			return this.http.get<JobResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBox/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), {});
		}

		/**
		 * Creates a new job with the specified parameters. Existing job cannot be updated with this API and should instead be updated with the Update job API.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} jobName The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 * @param {string} api_version The API Version
		 * @param {JobResource} requestBody Job details from request body.
		 * @return {JobResource} Job object.
		 */
		Jobs_Create(subscriptionId: string, resourceGroupName: string, jobName: string, api_version: string, requestBody: JobResource): Observable<JobResource> {
			return this.http.put<JobResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBox/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a job.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} jobName The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 * @param {string} api_version The API Version
		 * @return {void} 
		 */
		Jobs_Delete(subscriptionId: string, resourceGroupName: string, jobName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBox/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the properties of an existing job.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} jobName The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 * @param {string} api_version The API Version
		 * @param {JobResourceUpdateParameter} requestBody Job update parameters from request body.
		 * @return {JobResource} Job object.
		 */
		Jobs_Update(subscriptionId: string, resourceGroupName: string, jobName: string, api_version: string, requestBody: JobResourceUpdateParameter): Observable<JobResource> {
			return this.http.patch<JobResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBox/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Book shipment pick up.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}/bookShipmentPickUp
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} jobName The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 * @param {string} api_version The API Version
		 * @param {ShipmentPickUpRequest} requestBody Details of shipment pick up request.
		 * @return {ShipmentPickUpResponse} Booked shipment pick up successfully.
		 */
		Jobs_BookShipmentPickUp(subscriptionId: string, resourceGroupName: string, jobName: string, api_version: string, requestBody: ShipmentPickUpRequest): Observable<ShipmentPickUpResponse> {
			return this.http.post<ShipmentPickUpResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBox/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/bookShipmentPickUp&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * CancelJob.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}/cancel
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} jobName The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 * @param {string} api_version The API Version
		 * @param {CancellationReason} requestBody Reason for cancellation.
		 * @return {void} 
		 */
		Jobs_Cancel(subscriptionId: string, resourceGroupName: string, jobName: string, api_version: string, requestBody: CancellationReason): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBox/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/cancel&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method gets the unencrypted secrets related to the job.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}/listCredentials
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} jobName The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 * @param {string} api_version The API Version
		 * @return {UnencryptedCredentialsList} List of unencrypted credentials of the job.
		 */
		Jobs_ListCredentials(subscriptionId: string, resourceGroupName: string, jobName: string, api_version: string): Observable<UnencryptedCredentialsList> {
			return this.http.post<UnencryptedCredentialsList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBox/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/listCredentials&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * This method provides the list of available skus for the given subscription, resource group and location.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/locations/{location}/availableSkus
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} location The location of the resource
		 * @param {string} api_version The API Version
		 * @param {AvailableSkuRequest} requestBody Filters for showing the available skus.
		 * @return {AvailableSkusResult} The list of available skus under Resource group.
		 */
		Service_ListAvailableSkusByResourceGroup(subscriptionId: string, resourceGroupName: string, location: string, api_version: string, requestBody: AvailableSkuRequest): Observable<AvailableSkusResult> {
			return this.http.post<AvailableSkusResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBox/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/availableSkus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This method does all necessary pre-job creation validation under resource group.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/locations/{location}/validateInputs
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} location The location of the resource
		 * @param {string} api_version The API Version
		 * @param {ValidationRequest} requestBody Inputs of the customer.
		 * @return {ValidationResponse} The validation status and responses of each validating parameter.
		 */
		Service_ValidateInputsByResourceGroup(subscriptionId: string, resourceGroupName: string, location: string, api_version: string, requestBody: ValidationRequest): Observable<ValidationResponse> {
			return this.http.post<ValidationResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataBox/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/validateInputs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

