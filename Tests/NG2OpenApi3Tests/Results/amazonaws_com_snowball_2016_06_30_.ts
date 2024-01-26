import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelClusterResult {
	}
	export interface CancelClusterResultFormProperties {
	}
	export function CreateCancelClusterResultFormGroup() {
		return new FormGroup<CancelClusterResultFormProperties>({
		});

	}

	export interface CancelClusterRequest {

		/** Required */
		ClusterId: string;
	}
	export interface CancelClusterRequestFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
	}
	export function CreateCancelClusterRequestFormGroup() {
		return new FormGroup<CancelClusterRequestFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface KMSRequestFailedException {
	}
	export interface KMSRequestFailedExceptionFormProperties {
	}
	export function CreateKMSRequestFailedExceptionFormGroup() {
		return new FormGroup<KMSRequestFailedExceptionFormProperties>({
		});

	}

	export interface InvalidJobStateException {
	}
	export interface InvalidJobStateExceptionFormProperties {
	}
	export function CreateInvalidJobStateExceptionFormGroup() {
		return new FormGroup<InvalidJobStateExceptionFormProperties>({
		});

	}

	export interface InvalidResourceException {
	}
	export interface InvalidResourceExceptionFormProperties {
	}
	export function CreateInvalidResourceExceptionFormGroup() {
		return new FormGroup<InvalidResourceExceptionFormProperties>({
		});

	}

	export interface CancelJobResult {
	}
	export interface CancelJobResultFormProperties {
	}
	export function CreateCancelJobResultFormGroup() {
		return new FormGroup<CancelJobResultFormProperties>({
		});

	}

	export interface CancelJobRequest {

		/** Required */
		JobId: string;
	}
	export interface CancelJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateCancelJobRequestFormGroup() {
		return new FormGroup<CancelJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAddressResult {
		AddressId?: string;
	}
	export interface CreateAddressResultFormProperties {
		AddressId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAddressResultFormGroup() {
		return new FormGroup<CreateAddressResultFormProperties>({
			AddressId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAddressRequest {

		/** Required */
		Address: Address;
	}
	export interface CreateAddressRequestFormProperties {
	}
	export function CreateCreateAddressRequestFormGroup() {
		return new FormGroup<CreateAddressRequestFormProperties>({
		});

	}


	/** The address that you want the Snow device(s) associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown. */
	export interface Address {
		AddressId?: string;
		Name?: string;
		Company?: string;
		Street1?: string;
		Street2?: string;
		Street3?: string;
		City?: string;
		StateOrProvince?: string;
		PrefectureOrDistrict?: string;
		Landmark?: string;
		Country?: string;
		PostalCode?: string;
		PhoneNumber?: string;
		IsRestricted?: boolean | null;
		Type?: AddressType;
	}

	/** The address that you want the Snow device(s) associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown. */
	export interface AddressFormProperties {
		AddressId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Company: FormControl<string | null | undefined>,
		Street1: FormControl<string | null | undefined>,
		Street2: FormControl<string | null | undefined>,
		Street3: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		StateOrProvince: FormControl<string | null | undefined>,
		PrefectureOrDistrict: FormControl<string | null | undefined>,
		Landmark: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		PostalCode: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
		IsRestricted: FormControl<boolean | null | undefined>,
		Type: FormControl<AddressType | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			AddressId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Company: new FormControl<string | null | undefined>(undefined),
			Street1: new FormControl<string | null | undefined>(undefined),
			Street2: new FormControl<string | null | undefined>(undefined),
			Street3: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			StateOrProvince: new FormControl<string | null | undefined>(undefined),
			PrefectureOrDistrict: new FormControl<string | null | undefined>(undefined),
			Landmark: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			PostalCode: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			IsRestricted: new FormControl<boolean | null | undefined>(undefined),
			Type: new FormControl<AddressType | null | undefined>(undefined),
		});

	}

	export enum AddressType { CUST_PICKUP = 0, AWS_SHIP = 1 }

	export interface InvalidAddressException {
	}
	export interface InvalidAddressExceptionFormProperties {
	}
	export function CreateInvalidAddressExceptionFormGroup() {
		return new FormGroup<InvalidAddressExceptionFormProperties>({
		});

	}

	export interface UnsupportedAddressException {
	}
	export interface UnsupportedAddressExceptionFormProperties {
	}
	export function CreateUnsupportedAddressExceptionFormGroup() {
		return new FormGroup<UnsupportedAddressExceptionFormProperties>({
		});

	}

	export interface CreateClusterResult {
		ClusterId?: string;
		JobListEntries?: Array<JobListEntry>;
	}
	export interface CreateClusterResultFormProperties {
		ClusterId: FormControl<string | null | undefined>,
	}
	export function CreateCreateClusterResultFormGroup() {
		return new FormGroup<CreateClusterResultFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of an export job. */
	export interface JobListEntry {
		JobId?: string;
		JobState?: JobState;
		IsMaster?: boolean | null;
		JobType?: JobType;
		SnowballType?: SnowballType;
		CreationDate?: Date;
		Description?: string;
	}

	/** Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of an export job. */
	export interface JobListEntryFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobState: FormControl<JobState | null | undefined>,
		IsMaster: FormControl<boolean | null | undefined>,
		JobType: FormControl<JobType | null | undefined>,
		SnowballType: FormControl<SnowballType | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateJobListEntryFormGroup() {
		return new FormGroup<JobListEntryFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobState: new FormControl<JobState | null | undefined>(undefined),
			IsMaster: new FormControl<boolean | null | undefined>(undefined),
			JobType: new FormControl<JobType | null | undefined>(undefined),
			SnowballType: new FormControl<SnowballType | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobState { New = 0, PreparingAppliance = 1, PreparingShipment = 2, InTransitToCustomer = 3, WithCustomer = 4, InTransitToAWS = 5, WithAWSSortingFacility = 6, WithAWS = 7, InProgress = 8, Complete = 9, Cancelled = 10, Listing = 11, Pending = 12 }

	export enum JobType { IMPORT = 0, EXPORT = 1, LOCAL_USE = 2 }

	export enum SnowballType { STANDARD = 0, EDGE = 1, EDGE_C = 2, EDGE_CG = 3, EDGE_S = 4, SNC1_HDD = 5, SNC1_SSD = 6, V3_5C = 7, V3_5S = 8, RACK_5U_C = 9 }

	export interface CreateClusterRequest {

		/** Required */
		JobType: JobType;
		Resources?: JobResource;
		OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration;
		Description?: string;

		/** Required */
		AddressId: string;
		KmsKeyARN?: string;
		RoleARN?: string;

		/** Required */
		SnowballType: SnowballType;

		/** Required */
		ShippingOption: ShippingOption;
		Notification?: Notification;
		ForwardingAddressId?: string;
		TaxDocuments?: TaxDocuments;
		RemoteManagement?: RemoteManagement;
		InitialClusterSize?: number | null;
		ForceCreateJobs?: boolean | null;
		LongTermPricingIds?: Array<string>;
		SnowballCapacityPreference?: SnowballCapacity;
	}
	export interface CreateClusterRequestFormProperties {

		/** Required */
		JobType: FormControl<JobType | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		AddressId: FormControl<string | null | undefined>,
		KmsKeyARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,

		/** Required */
		SnowballType: FormControl<SnowballType | null | undefined>,

		/** Required */
		ShippingOption: FormControl<ShippingOption | null | undefined>,
		ForwardingAddressId: FormControl<string | null | undefined>,
		RemoteManagement: FormControl<RemoteManagement | null | undefined>,
		InitialClusterSize: FormControl<number | null | undefined>,
		ForceCreateJobs: FormControl<boolean | null | undefined>,
		SnowballCapacityPreference: FormControl<SnowballCapacity | null | undefined>,
	}
	export function CreateCreateClusterRequestFormGroup() {
		return new FormGroup<CreateClusterRequestFormProperties>({
			JobType: new FormControl<JobType | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			AddressId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsKeyARN: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			SnowballType: new FormControl<SnowballType | null | undefined>(undefined, [Validators.required]),
			ShippingOption: new FormControl<ShippingOption | null | undefined>(undefined, [Validators.required]),
			ForwardingAddressId: new FormControl<string | null | undefined>(undefined),
			RemoteManagement: new FormControl<RemoteManagement | null | undefined>(undefined),
			InitialClusterSize: new FormControl<number | null | undefined>(undefined),
			ForceCreateJobs: new FormControl<boolean | null | undefined>(undefined),
			SnowballCapacityPreference: new FormControl<SnowballCapacity | null | undefined>(undefined),
		});

	}


	/** Contains an array of Amazon Web Services resource objects. Each object represents an Amazon S3 bucket, an Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job. */
	export interface JobResource {
		S3Resources?: Array<S3Resource>;
		LambdaResources?: Array<LambdaResource>;
		Ec2AmiResources?: Array<Ec2AmiResource>;
	}

	/** Contains an array of Amazon Web Services resource objects. Each object represents an Amazon S3 bucket, an Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job. */
	export interface JobResourceFormProperties {
	}
	export function CreateJobResourceFormGroup() {
		return new FormGroup<JobResourceFormProperties>({
		});

	}


	/** Each <code>S3Resource</code> object represents an Amazon S3 bucket that your transferred data will be exported from or imported into. For export jobs, this object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted. */
	export interface S3Resource {
		BucketArn?: string;
		KeyRange?: KeyRange;
		TargetOnDeviceServices?: Array<TargetOnDeviceService>;
	}

	/** Each <code>S3Resource</code> object represents an Amazon S3 bucket that your transferred data will be exported from or imported into. For export jobs, this object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted. */
	export interface S3ResourceFormProperties {
		BucketArn: FormControl<string | null | undefined>,
	}
	export function CreateS3ResourceFormGroup() {
		return new FormGroup<S3ResourceFormProperties>({
			BucketArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a key range. For export jobs, a <code>S3Resource</code> object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted. */
	export interface KeyRange {
		BeginMarker?: string;
		EndMarker?: string;
	}

	/** Contains a key range. For export jobs, a <code>S3Resource</code> object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted. */
	export interface KeyRangeFormProperties {
		BeginMarker: FormControl<string | null | undefined>,
		EndMarker: FormControl<string | null | undefined>,
	}
	export function CreateKeyRangeFormGroup() {
		return new FormGroup<KeyRangeFormProperties>({
			BeginMarker: new FormControl<string | null | undefined>(undefined),
			EndMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents the service or services on the Snow Family device that your transferred data will be exported from or imported into. Amazon Web Services Snow Family supports Amazon S3 and NFS (Network File System). */
	export interface TargetOnDeviceService {
		ServiceName?: DeviceServiceName;
		TransferOption?: JobType;
	}

	/** An object that represents the service or services on the Snow Family device that your transferred data will be exported from or imported into. Amazon Web Services Snow Family supports Amazon S3 and NFS (Network File System). */
	export interface TargetOnDeviceServiceFormProperties {
		ServiceName: FormControl<DeviceServiceName | null | undefined>,
		TransferOption: FormControl<JobType | null | undefined>,
	}
	export function CreateTargetOnDeviceServiceFormGroup() {
		return new FormGroup<TargetOnDeviceServiceFormProperties>({
			ServiceName: new FormControl<DeviceServiceName | null | undefined>(undefined),
			TransferOption: new FormControl<JobType | null | undefined>(undefined),
		});

	}

	export enum DeviceServiceName { NFS_ON_DEVICE_SERVICE = 0, S3_ON_DEVICE_SERVICE = 1 }


	/** Identifies  */
	export interface LambdaResource {
		LambdaArn?: string;
		EventTriggers?: Array<EventTriggerDefinition>;
	}

	/** Identifies  */
	export interface LambdaResourceFormProperties {
		LambdaArn: FormControl<string | null | undefined>,
	}
	export function CreateLambdaResourceFormGroup() {
		return new FormGroup<LambdaResourceFormProperties>({
			LambdaArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The container for the <a>EventTriggerDefinition$EventResourceARN</a>. */
	export interface EventTriggerDefinition {
		EventResourceARN?: string;
	}

	/** The container for the <a>EventTriggerDefinition$EventResourceARN</a>. */
	export interface EventTriggerDefinitionFormProperties {
		EventResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateEventTriggerDefinitionFormGroup() {
		return new FormGroup<EventTriggerDefinitionFormProperties>({
			EventResourceARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A JSON-formatted object that contains the IDs for an Amazon Machine Image (AMI), including the Amazon EC2-compatible AMI ID and the Snow device AMI ID. Each AMI has these two IDs to simplify identifying the AMI in both the Amazon Web Services Cloud and on the device. */
	export interface Ec2AmiResource {

		/** Required */
		AmiId: string;
		SnowballAmiId?: string;
	}

	/** A JSON-formatted object that contains the IDs for an Amazon Machine Image (AMI), including the Amazon EC2-compatible AMI ID and the Snow device AMI ID. Each AMI has these two IDs to simplify identifying the AMI in both the Amazon Web Services Cloud and on the device. */
	export interface Ec2AmiResourceFormProperties {

		/** Required */
		AmiId: FormControl<string | null | undefined>,
		SnowballAmiId: FormControl<string | null | undefined>,
	}
	export function CreateEc2AmiResourceFormGroup() {
		return new FormGroup<Ec2AmiResourceFormProperties>({
			AmiId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnowballAmiId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents the metadata and configuration settings for services on an Amazon Web Services Snow Family device. */
	export interface OnDeviceServiceConfiguration {
		NFSOnDeviceService?: NFSOnDeviceServiceConfiguration;
		TGWOnDeviceService?: TGWOnDeviceServiceConfiguration;
		EKSOnDeviceService?: EKSOnDeviceServiceConfiguration;
		S3OnDeviceService?: S3OnDeviceServiceConfiguration;
	}

	/** An object that represents the metadata and configuration settings for services on an Amazon Web Services Snow Family device. */
	export interface OnDeviceServiceConfigurationFormProperties {
	}
	export function CreateOnDeviceServiceConfigurationFormGroup() {
		return new FormGroup<OnDeviceServiceConfigurationFormProperties>({
		});

	}


	/** An object that represents the metadata and configuration settings for the NFS (Network File System) service on an Amazon Web Services Snow Family device. */
	export interface NFSOnDeviceServiceConfiguration {
		StorageLimit?: number | null;
		StorageUnit?: StorageUnit;
	}

	/** An object that represents the metadata and configuration settings for the NFS (Network File System) service on an Amazon Web Services Snow Family device. */
	export interface NFSOnDeviceServiceConfigurationFormProperties {
		StorageLimit: FormControl<number | null | undefined>,
		StorageUnit: FormControl<StorageUnit | null | undefined>,
	}
	export function CreateNFSOnDeviceServiceConfigurationFormGroup() {
		return new FormGroup<NFSOnDeviceServiceConfigurationFormProperties>({
			StorageLimit: new FormControl<number | null | undefined>(undefined),
			StorageUnit: new FormControl<StorageUnit | null | undefined>(undefined),
		});

	}

	export enum StorageUnit { TB = 0 }


	/** An object that represents the metadata and configuration settings for the Storage Gateway service Tape Gateway type on an Amazon Web Services Snow Family device. */
	export interface TGWOnDeviceServiceConfiguration {
		StorageLimit?: number | null;
		StorageUnit?: StorageUnit;
	}

	/** An object that represents the metadata and configuration settings for the Storage Gateway service Tape Gateway type on an Amazon Web Services Snow Family device. */
	export interface TGWOnDeviceServiceConfigurationFormProperties {
		StorageLimit: FormControl<number | null | undefined>,
		StorageUnit: FormControl<StorageUnit | null | undefined>,
	}
	export function CreateTGWOnDeviceServiceConfigurationFormGroup() {
		return new FormGroup<TGWOnDeviceServiceConfigurationFormProperties>({
			StorageLimit: new FormControl<number | null | undefined>(undefined),
			StorageUnit: new FormControl<StorageUnit | null | undefined>(undefined),
		});

	}


	/** An object representing the metadata and configuration settings of EKS Anywhere on the Snow Family device. */
	export interface EKSOnDeviceServiceConfiguration {
		KubernetesVersion?: string;
		EKSAnywhereVersion?: string;
	}

	/** An object representing the metadata and configuration settings of EKS Anywhere on the Snow Family device. */
	export interface EKSOnDeviceServiceConfigurationFormProperties {
		KubernetesVersion: FormControl<string | null | undefined>,
		EKSAnywhereVersion: FormControl<string | null | undefined>,
	}
	export function CreateEKSOnDeviceServiceConfigurationFormGroup() {
		return new FormGroup<EKSOnDeviceServiceConfigurationFormProperties>({
			KubernetesVersion: new FormControl<string | null | undefined>(undefined),
			EKSAnywhereVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Amazon S3 compatible storage on Snow family devices configuration items. */
	export interface S3OnDeviceServiceConfiguration {
		StorageLimit?: number | null;
		StorageUnit?: StorageUnit;
		ServiceSize?: number | null;
		FaultTolerance?: number | null;
	}

	/** Amazon S3 compatible storage on Snow family devices configuration items. */
	export interface S3OnDeviceServiceConfigurationFormProperties {
		StorageLimit: FormControl<number | null | undefined>,
		StorageUnit: FormControl<StorageUnit | null | undefined>,
		ServiceSize: FormControl<number | null | undefined>,
		FaultTolerance: FormControl<number | null | undefined>,
	}
	export function CreateS3OnDeviceServiceConfigurationFormGroup() {
		return new FormGroup<S3OnDeviceServiceConfigurationFormProperties>({
			StorageLimit: new FormControl<number | null | undefined>(undefined),
			StorageUnit: new FormControl<StorageUnit | null | undefined>(undefined),
			ServiceSize: new FormControl<number | null | undefined>(undefined),
			FaultTolerance: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ShippingOption { SECOND_DAY = 0, NEXT_DAY = 1, EXPRESS = 2, STANDARD = 3 }


	/** <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
	export interface Notification {
		SnsTopicARN?: string;
		JobStatesToNotify?: Array<JobState>;
		NotifyAll?: boolean | null;
		DevicePickupSnsTopicARN?: string;
	}

	/** <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
	export interface NotificationFormProperties {
		SnsTopicARN: FormControl<string | null | undefined>,
		NotifyAll: FormControl<boolean | null | undefined>,
		DevicePickupSnsTopicARN: FormControl<string | null | undefined>,
	}
	export function CreateNotificationFormGroup() {
		return new FormGroup<NotificationFormProperties>({
			SnsTopicARN: new FormControl<string | null | undefined>(undefined),
			NotifyAll: new FormControl<boolean | null | undefined>(undefined),
			DevicePickupSnsTopicARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The tax documents required in your Amazon Web Services Region. */
	export interface TaxDocuments {

		/** The tax documents required in Amazon Web Services Region in India. */
		IND?: INDTaxDocuments;
	}

	/** The tax documents required in your Amazon Web Services Region. */
	export interface TaxDocumentsFormProperties {
	}
	export function CreateTaxDocumentsFormGroup() {
		return new FormGroup<TaxDocumentsFormProperties>({
		});

	}


	/** The tax documents required in Amazon Web Services Region in India. */
	export interface INDTaxDocuments {
		GSTIN?: string;
	}

	/** The tax documents required in Amazon Web Services Region in India. */
	export interface INDTaxDocumentsFormProperties {
		GSTIN: FormControl<string | null | undefined>,
	}
	export function CreateINDTaxDocumentsFormGroup() {
		return new FormGroup<INDTaxDocumentsFormProperties>({
			GSTIN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RemoteManagement { INSTALLED_ONLY = 0, INSTALLED_AUTOSTART = 1, NOT_INSTALLED = 2 }

	export enum SnowballCapacity { T50 = 0, T80 = 1, T100 = 2, T42 = 3, T98 = 4, T8 = 5, T14 = 6, T32 = 7, NoPreference = 8, T240 = 9, T13 = 10 }

	export interface InvalidInputCombinationException {
	}
	export interface InvalidInputCombinationExceptionFormProperties {
	}
	export function CreateInvalidInputCombinationExceptionFormGroup() {
		return new FormGroup<InvalidInputCombinationExceptionFormProperties>({
		});

	}

	export interface Ec2RequestFailedException {
	}
	export interface Ec2RequestFailedExceptionFormProperties {
	}
	export function CreateEc2RequestFailedExceptionFormGroup() {
		return new FormGroup<Ec2RequestFailedExceptionFormProperties>({
		});

	}

	export interface CreateJobResult {
		JobId?: string;
	}
	export interface CreateJobResultFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobResultFormGroup() {
		return new FormGroup<CreateJobResultFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateJobRequest {
		JobType?: JobType;
		Resources?: JobResource;
		OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration;
		Description?: string;
		AddressId?: string;
		KmsKeyARN?: string;
		RoleARN?: string;
		SnowballCapacityPreference?: SnowballCapacity;
		ShippingOption?: ShippingOption;
		Notification?: Notification;
		ClusterId?: string;
		SnowballType?: SnowballType;
		ForwardingAddressId?: string;
		TaxDocuments?: TaxDocuments;
		DeviceConfiguration?: DeviceConfiguration;
		RemoteManagement?: RemoteManagement;
		LongTermPricingId?: string;
		ImpactLevel?: ImpactLevel;
		PickupDetails?: PickupDetails;
	}
	export interface CreateJobRequestFormProperties {
		JobType: FormControl<JobType | null | undefined>,
		Description: FormControl<string | null | undefined>,
		AddressId: FormControl<string | null | undefined>,
		KmsKeyARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
		SnowballCapacityPreference: FormControl<SnowballCapacity | null | undefined>,
		ShippingOption: FormControl<ShippingOption | null | undefined>,
		ClusterId: FormControl<string | null | undefined>,
		SnowballType: FormControl<SnowballType | null | undefined>,
		ForwardingAddressId: FormControl<string | null | undefined>,
		RemoteManagement: FormControl<RemoteManagement | null | undefined>,
		LongTermPricingId: FormControl<string | null | undefined>,
		ImpactLevel: FormControl<ImpactLevel | null | undefined>,
	}
	export function CreateCreateJobRequestFormGroup() {
		return new FormGroup<CreateJobRequestFormProperties>({
			JobType: new FormControl<JobType | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			AddressId: new FormControl<string | null | undefined>(undefined),
			KmsKeyARN: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			SnowballCapacityPreference: new FormControl<SnowballCapacity | null | undefined>(undefined),
			ShippingOption: new FormControl<ShippingOption | null | undefined>(undefined),
			ClusterId: new FormControl<string | null | undefined>(undefined),
			SnowballType: new FormControl<SnowballType | null | undefined>(undefined),
			ForwardingAddressId: new FormControl<string | null | undefined>(undefined),
			RemoteManagement: new FormControl<RemoteManagement | null | undefined>(undefined),
			LongTermPricingId: new FormControl<string | null | undefined>(undefined),
			ImpactLevel: new FormControl<ImpactLevel | null | undefined>(undefined),
		});

	}


	/** The container for <code>SnowconeDeviceConfiguration</code>.  */
	export interface DeviceConfiguration {
		SnowconeDeviceConfiguration?: SnowconeDeviceConfiguration;
	}

	/** The container for <code>SnowconeDeviceConfiguration</code>.  */
	export interface DeviceConfigurationFormProperties {
	}
	export function CreateDeviceConfigurationFormGroup() {
		return new FormGroup<DeviceConfigurationFormProperties>({
		});

	}


	/** Specifies the device configuration for an Snowcone job. */
	export interface SnowconeDeviceConfiguration {
		WirelessConnection?: WirelessConnection;
	}

	/** Specifies the device configuration for an Snowcone job. */
	export interface SnowconeDeviceConfigurationFormProperties {
	}
	export function CreateSnowconeDeviceConfigurationFormGroup() {
		return new FormGroup<SnowconeDeviceConfigurationFormProperties>({
		});

	}


	/** Configures the wireless connection on an Snowcone device. */
	export interface WirelessConnection {
		IsWifiEnabled?: boolean | null;
	}

	/** Configures the wireless connection on an Snowcone device. */
	export interface WirelessConnectionFormProperties {
		IsWifiEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateWirelessConnectionFormGroup() {
		return new FormGroup<WirelessConnectionFormProperties>({
			IsWifiEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ImpactLevel { IL2 = 0, IL4 = 1, IL5 = 2, IL6 = 3, IL99 = 4 }


	/** Information identifying the person picking up the device. */
	export interface PickupDetails {
		Name?: string;
		PhoneNumber?: string;
		Email?: string;
		IdentificationNumber?: string;
		IdentificationExpirationDate?: Date;
		IdentificationIssuingOrg?: string;
		DevicePickupId?: string;
	}

	/** Information identifying the person picking up the device. */
	export interface PickupDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		IdentificationNumber: FormControl<string | null | undefined>,
		IdentificationExpirationDate: FormControl<Date | null | undefined>,
		IdentificationIssuingOrg: FormControl<string | null | undefined>,
		DevicePickupId: FormControl<string | null | undefined>,
	}
	export function CreatePickupDetailsFormGroup() {
		return new FormGroup<PickupDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			IdentificationNumber: new FormControl<string | null | undefined>(undefined),
			IdentificationExpirationDate: new FormControl<Date | null | undefined>(undefined),
			IdentificationIssuingOrg: new FormControl<string | null | undefined>(undefined),
			DevicePickupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClusterLimitExceededException {
	}
	export interface ClusterLimitExceededExceptionFormProperties {
	}
	export function CreateClusterLimitExceededExceptionFormGroup() {
		return new FormGroup<ClusterLimitExceededExceptionFormProperties>({
		});

	}

	export interface CreateLongTermPricingResult {
		LongTermPricingId?: string;
	}
	export interface CreateLongTermPricingResultFormProperties {
		LongTermPricingId: FormControl<string | null | undefined>,
	}
	export function CreateCreateLongTermPricingResultFormGroup() {
		return new FormGroup<CreateLongTermPricingResultFormProperties>({
			LongTermPricingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLongTermPricingRequest {

		/** Required */
		LongTermPricingType: LongTermPricingType;
		IsLongTermPricingAutoRenew?: boolean | null;

		/** Required */
		SnowballType: SnowballType;
	}
	export interface CreateLongTermPricingRequestFormProperties {

		/** Required */
		LongTermPricingType: FormControl<LongTermPricingType | null | undefined>,
		IsLongTermPricingAutoRenew: FormControl<boolean | null | undefined>,

		/** Required */
		SnowballType: FormControl<SnowballType | null | undefined>,
	}
	export function CreateCreateLongTermPricingRequestFormGroup() {
		return new FormGroup<CreateLongTermPricingRequestFormProperties>({
			LongTermPricingType: new FormControl<LongTermPricingType | null | undefined>(undefined, [Validators.required]),
			IsLongTermPricingAutoRenew: new FormControl<boolean | null | undefined>(undefined),
			SnowballType: new FormControl<SnowballType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LongTermPricingType { OneYear = 0, ThreeYear = 1, OneMonth = 2 }

	export interface CreateReturnShippingLabelResult {
		Status?: ShippingLabelStatus;
	}
	export interface CreateReturnShippingLabelResultFormProperties {
		Status: FormControl<ShippingLabelStatus | null | undefined>,
	}
	export function CreateCreateReturnShippingLabelResultFormGroup() {
		return new FormGroup<CreateReturnShippingLabelResultFormProperties>({
			Status: new FormControl<ShippingLabelStatus | null | undefined>(undefined),
		});

	}

	export enum ShippingLabelStatus { InProgress = 0, TimedOut = 1, Succeeded = 2, Failed = 3 }

	export interface CreateReturnShippingLabelRequest {

		/** Required */
		JobId: string;
		ShippingOption?: ShippingOption;
	}
	export interface CreateReturnShippingLabelRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
		ShippingOption: FormControl<ShippingOption | null | undefined>,
	}
	export function CreateCreateReturnShippingLabelRequestFormGroup() {
		return new FormGroup<CreateReturnShippingLabelRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShippingOption: new FormControl<ShippingOption | null | undefined>(undefined),
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface ReturnShippingLabelAlreadyExistsException {
	}
	export interface ReturnShippingLabelAlreadyExistsExceptionFormProperties {
	}
	export function CreateReturnShippingLabelAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ReturnShippingLabelAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface DescribeAddressResult {
		Address?: Address;
	}
	export interface DescribeAddressResultFormProperties {
	}
	export function CreateDescribeAddressResultFormGroup() {
		return new FormGroup<DescribeAddressResultFormProperties>({
		});

	}

	export interface DescribeAddressRequest {

		/** Required */
		AddressId: string;
	}
	export interface DescribeAddressRequestFormProperties {

		/** Required */
		AddressId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAddressRequestFormGroup() {
		return new FormGroup<DescribeAddressRequestFormProperties>({
			AddressId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAddressesResult {
		Addresses?: Array<Address>;
		NextToken?: string;
	}
	export interface DescribeAddressesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAddressesResultFormGroup() {
		return new FormGroup<DescribeAddressesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAddressesRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeAddressesRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAddressesRequestFormGroup() {
		return new FormGroup<DescribeAddressesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface DescribeClusterResult {
		ClusterMetadata?: ClusterMetadata;
	}
	export interface DescribeClusterResultFormProperties {
	}
	export function CreateDescribeClusterResultFormGroup() {
		return new FormGroup<DescribeClusterResultFormProperties>({
		});

	}


	/** Contains metadata about a specific cluster. */
	export interface ClusterMetadata {
		ClusterId?: string;
		Description?: string;
		KmsKeyARN?: string;
		RoleARN?: string;
		ClusterState?: ClusterState;
		JobType?: JobType;
		SnowballType?: SnowballType;
		CreationDate?: Date;
		Resources?: JobResource;
		AddressId?: string;
		ShippingOption?: ShippingOption;
		Notification?: Notification;
		ForwardingAddressId?: string;
		TaxDocuments?: TaxDocuments;
		OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration;
	}

	/** Contains metadata about a specific cluster. */
	export interface ClusterMetadataFormProperties {
		ClusterId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		KmsKeyARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
		ClusterState: FormControl<ClusterState | null | undefined>,
		JobType: FormControl<JobType | null | undefined>,
		SnowballType: FormControl<SnowballType | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		AddressId: FormControl<string | null | undefined>,
		ShippingOption: FormControl<ShippingOption | null | undefined>,
		ForwardingAddressId: FormControl<string | null | undefined>,
	}
	export function CreateClusterMetadataFormGroup() {
		return new FormGroup<ClusterMetadataFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			KmsKeyARN: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			ClusterState: new FormControl<ClusterState | null | undefined>(undefined),
			JobType: new FormControl<JobType | null | undefined>(undefined),
			SnowballType: new FormControl<SnowballType | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			AddressId: new FormControl<string | null | undefined>(undefined),
			ShippingOption: new FormControl<ShippingOption | null | undefined>(undefined),
			ForwardingAddressId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClusterState { AwaitingQuorum = 0, Pending = 1, InUse = 2, Complete = 3, Cancelled = 4 }

	export interface DescribeClusterRequest {

		/** Required */
		ClusterId: string;
	}
	export interface DescribeClusterRequestFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeClusterRequestFormGroup() {
		return new FormGroup<DescribeClusterRequestFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeJobResult {
		JobMetadata?: JobMetadata;
		SubJobMetadata?: Array<JobMetadata>;
	}
	export interface DescribeJobResultFormProperties {
	}
	export function CreateDescribeJobResultFormGroup() {
		return new FormGroup<DescribeJobResultFormProperties>({
		});

	}


	/** Contains information about a specific job including shipping information, job status, and other important metadata. This information is returned as a part of the response syntax of the <code>DescribeJob</code> action. */
	export interface JobMetadata {
		JobId?: string;
		JobState?: JobState;
		JobType?: JobType;
		SnowballType?: SnowballType;
		CreationDate?: Date;
		Resources?: JobResource;
		Description?: string;
		KmsKeyARN?: string;
		RoleARN?: string;
		AddressId?: string;
		ShippingDetails?: ShippingDetails;
		SnowballCapacityPreference?: SnowballCapacity;
		Notification?: Notification;
		DataTransferProgress?: DataTransfer;
		JobLogInfo?: JobLogs;
		ClusterId?: string;
		ForwardingAddressId?: string;
		TaxDocuments?: TaxDocuments;

		/** The container for <code>SnowconeDeviceConfiguration</code>. */
		DeviceConfiguration?: DeviceConfiguration;
		RemoteManagement?: RemoteManagement;
		LongTermPricingId?: string;
		OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration;
		ImpactLevel?: ImpactLevel;
		PickupDetails?: PickupDetails;
		SnowballId?: string;
	}

	/** Contains information about a specific job including shipping information, job status, and other important metadata. This information is returned as a part of the response syntax of the <code>DescribeJob</code> action. */
	export interface JobMetadataFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobState: FormControl<JobState | null | undefined>,
		JobType: FormControl<JobType | null | undefined>,
		SnowballType: FormControl<SnowballType | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		KmsKeyARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
		AddressId: FormControl<string | null | undefined>,
		SnowballCapacityPreference: FormControl<SnowballCapacity | null | undefined>,
		ClusterId: FormControl<string | null | undefined>,
		ForwardingAddressId: FormControl<string | null | undefined>,
		RemoteManagement: FormControl<RemoteManagement | null | undefined>,
		LongTermPricingId: FormControl<string | null | undefined>,
		ImpactLevel: FormControl<ImpactLevel | null | undefined>,
		SnowballId: FormControl<string | null | undefined>,
	}
	export function CreateJobMetadataFormGroup() {
		return new FormGroup<JobMetadataFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobState: new FormControl<JobState | null | undefined>(undefined),
			JobType: new FormControl<JobType | null | undefined>(undefined),
			SnowballType: new FormControl<SnowballType | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			KmsKeyARN: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			AddressId: new FormControl<string | null | undefined>(undefined),
			SnowballCapacityPreference: new FormControl<SnowballCapacity | null | undefined>(undefined),
			ClusterId: new FormControl<string | null | undefined>(undefined),
			ForwardingAddressId: new FormControl<string | null | undefined>(undefined),
			RemoteManagement: new FormControl<RemoteManagement | null | undefined>(undefined),
			LongTermPricingId: new FormControl<string | null | undefined>(undefined),
			ImpactLevel: new FormControl<ImpactLevel | null | undefined>(undefined),
			SnowballId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A job's shipping information, including inbound and outbound tracking numbers and shipping speed options. */
	export interface ShippingDetails {
		ShippingOption?: ShippingOption;
		InboundShipment?: Shipment;
		OutboundShipment?: Shipment;
	}

	/** A job's shipping information, including inbound and outbound tracking numbers and shipping speed options. */
	export interface ShippingDetailsFormProperties {
		ShippingOption: FormControl<ShippingOption | null | undefined>,
	}
	export function CreateShippingDetailsFormGroup() {
		return new FormGroup<ShippingDetailsFormProperties>({
			ShippingOption: new FormControl<ShippingOption | null | undefined>(undefined),
		});

	}


	/** The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or outbound shipment. */
	export interface Shipment {
		Status?: string;
		TrackingNumber?: string;
	}

	/** The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or outbound shipment. */
	export interface ShipmentFormProperties {
		Status: FormControl<string | null | undefined>,
		TrackingNumber: FormControl<string | null | undefined>,
	}
	export function CreateShipmentFormGroup() {
		return new FormGroup<ShipmentFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined),
			TrackingNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the real-time status of a Snow device's data transfer while the device is at Amazon Web Services. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs. */
	export interface DataTransfer {
		BytesTransferred?: number | null;
		ObjectsTransferred?: number | null;
		TotalBytes?: number | null;
		TotalObjects?: number | null;
	}

	/** Defines the real-time status of a Snow device's data transfer while the device is at Amazon Web Services. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs. */
	export interface DataTransferFormProperties {
		BytesTransferred: FormControl<number | null | undefined>,
		ObjectsTransferred: FormControl<number | null | undefined>,
		TotalBytes: FormControl<number | null | undefined>,
		TotalObjects: FormControl<number | null | undefined>,
	}
	export function CreateDataTransferFormGroup() {
		return new FormGroup<DataTransferFormProperties>({
			BytesTransferred: new FormControl<number | null | undefined>(undefined),
			ObjectsTransferred: new FormControl<number | null | undefined>(undefined),
			TotalBytes: new FormControl<number | null | undefined>(undefined),
			TotalObjects: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Contains job logs. Whenever a Snow device is used to import data into or export data out of Amazon S3, you'll have the option of downloading a PDF job report. Job logs are returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type. The job logs can be accessed for up to 60 minutes after this request has been made. To access any of the job logs after 60 minutes have passed, you'll have to make another call to the <code>DescribeJob</code> action.</p> <p>For import jobs, the PDF job report becomes available at the end of the import process. For export jobs, your job report typically becomes available while the Snow device for your job part is being delivered to you.</p> <p>The job report provides you insight into the state of your Amazon S3 data transfer. The report includes details about your job or job part for your records.</p> <p>For deeper visibility into the status of your transferred objects, you can look at the two associated logs: a success log and a failure log. The logs are saved in comma-separated value (CSV) format, and the name of each log includes the ID of the job or job part that the log describes.</p> */
	export interface JobLogs {
		JobCompletionReportURI?: string;
		JobSuccessLogURI?: string;
		JobFailureLogURI?: string;
	}

	/** <p>Contains job logs. Whenever a Snow device is used to import data into or export data out of Amazon S3, you'll have the option of downloading a PDF job report. Job logs are returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type. The job logs can be accessed for up to 60 minutes after this request has been made. To access any of the job logs after 60 minutes have passed, you'll have to make another call to the <code>DescribeJob</code> action.</p> <p>For import jobs, the PDF job report becomes available at the end of the import process. For export jobs, your job report typically becomes available while the Snow device for your job part is being delivered to you.</p> <p>The job report provides you insight into the state of your Amazon S3 data transfer. The report includes details about your job or job part for your records.</p> <p>For deeper visibility into the status of your transferred objects, you can look at the two associated logs: a success log and a failure log. The logs are saved in comma-separated value (CSV) format, and the name of each log includes the ID of the job or job part that the log describes.</p> */
	export interface JobLogsFormProperties {
		JobCompletionReportURI: FormControl<string | null | undefined>,
		JobSuccessLogURI: FormControl<string | null | undefined>,
		JobFailureLogURI: FormControl<string | null | undefined>,
	}
	export function CreateJobLogsFormGroup() {
		return new FormGroup<JobLogsFormProperties>({
			JobCompletionReportURI: new FormControl<string | null | undefined>(undefined),
			JobSuccessLogURI: new FormControl<string | null | undefined>(undefined),
			JobFailureLogURI: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeJobRequest {

		/** Required */
		JobId: string;
	}
	export interface DescribeJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobRequestFormGroup() {
		return new FormGroup<DescribeJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeReturnShippingLabelResult {
		Status?: ShippingLabelStatus;
		ExpirationDate?: Date;
		ReturnShippingLabelURI?: string;
	}
	export interface DescribeReturnShippingLabelResultFormProperties {
		Status: FormControl<ShippingLabelStatus | null | undefined>,
		ExpirationDate: FormControl<Date | null | undefined>,
		ReturnShippingLabelURI: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReturnShippingLabelResultFormGroup() {
		return new FormGroup<DescribeReturnShippingLabelResultFormProperties>({
			Status: new FormControl<ShippingLabelStatus | null | undefined>(undefined),
			ExpirationDate: new FormControl<Date | null | undefined>(undefined),
			ReturnShippingLabelURI: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeReturnShippingLabelRequest {

		/** Required */
		JobId: string;
	}
	export interface DescribeReturnShippingLabelRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReturnShippingLabelRequestFormGroup() {
		return new FormGroup<DescribeReturnShippingLabelRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetJobManifestResult {
		ManifestURI?: string;
	}
	export interface GetJobManifestResultFormProperties {
		ManifestURI: FormControl<string | null | undefined>,
	}
	export function CreateGetJobManifestResultFormGroup() {
		return new FormGroup<GetJobManifestResultFormProperties>({
			ManifestURI: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetJobManifestRequest {

		/** Required */
		JobId: string;
	}
	export interface GetJobManifestRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateGetJobManifestRequestFormGroup() {
		return new FormGroup<GetJobManifestRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetJobUnlockCodeResult {
		UnlockCode?: string;
	}
	export interface GetJobUnlockCodeResultFormProperties {
		UnlockCode: FormControl<string | null | undefined>,
	}
	export function CreateGetJobUnlockCodeResultFormGroup() {
		return new FormGroup<GetJobUnlockCodeResultFormProperties>({
			UnlockCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetJobUnlockCodeRequest {

		/** Required */
		JobId: string;
	}
	export interface GetJobUnlockCodeRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateGetJobUnlockCodeRequestFormGroup() {
		return new FormGroup<GetJobUnlockCodeRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSnowballUsageResult {
		SnowballLimit?: number | null;
		SnowballsInUse?: number | null;
	}
	export interface GetSnowballUsageResultFormProperties {
		SnowballLimit: FormControl<number | null | undefined>,
		SnowballsInUse: FormControl<number | null | undefined>,
	}
	export function CreateGetSnowballUsageResultFormGroup() {
		return new FormGroup<GetSnowballUsageResultFormProperties>({
			SnowballLimit: new FormControl<number | null | undefined>(undefined),
			SnowballsInUse: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetSnowballUsageRequest {
	}
	export interface GetSnowballUsageRequestFormProperties {
	}
	export function CreateGetSnowballUsageRequestFormGroup() {
		return new FormGroup<GetSnowballUsageRequestFormProperties>({
		});

	}

	export interface GetSoftwareUpdatesResult {
		UpdatesURI?: string;
	}
	export interface GetSoftwareUpdatesResultFormProperties {
		UpdatesURI: FormControl<string | null | undefined>,
	}
	export function CreateGetSoftwareUpdatesResultFormGroup() {
		return new FormGroup<GetSoftwareUpdatesResultFormProperties>({
			UpdatesURI: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSoftwareUpdatesRequest {

		/** Required */
		JobId: string;
	}
	export interface GetSoftwareUpdatesRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateGetSoftwareUpdatesRequestFormGroup() {
		return new FormGroup<GetSoftwareUpdatesRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListClusterJobsResult {
		JobListEntries?: Array<JobListEntry>;
		NextToken?: string;
	}
	export interface ListClusterJobsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClusterJobsResultFormGroup() {
		return new FormGroup<ListClusterJobsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClusterJobsRequest {

		/** Required */
		ClusterId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListClusterJobsRequestFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClusterJobsRequestFormGroup() {
		return new FormGroup<ListClusterJobsRequestFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClustersResult {
		ClusterListEntries?: Array<ClusterListEntry>;
		NextToken?: string;
	}
	export interface ListClustersResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClustersResultFormGroup() {
		return new FormGroup<ListClustersResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a cluster's state, a cluster's ID, and other important information. */
	export interface ClusterListEntry {
		ClusterId?: string;
		ClusterState?: ClusterState;
		CreationDate?: Date;
		Description?: string;
	}

	/** Contains a cluster's state, a cluster's ID, and other important information. */
	export interface ClusterListEntryFormProperties {
		ClusterId: FormControl<string | null | undefined>,
		ClusterState: FormControl<ClusterState | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateClusterListEntryFormGroup() {
		return new FormGroup<ClusterListEntryFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined),
			ClusterState: new FormControl<ClusterState | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClustersRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListClustersRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClustersRequestFormGroup() {
		return new FormGroup<ListClustersRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCompatibleImagesResult {
		CompatibleImages?: Array<CompatibleImage>;
		NextToken?: string;
	}
	export interface ListCompatibleImagesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCompatibleImagesResultFormGroup() {
		return new FormGroup<ListCompatibleImagesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A JSON-formatted object that describes a compatible Amazon Machine Image (AMI), including the ID and name for a Snow device AMI. This AMI is compatible with the device's physical hardware requirements, and it should be able to be run in an SBE1 instance on the device. */
	export interface CompatibleImage {
		AmiId?: string;
		Name?: string;
	}

	/** A JSON-formatted object that describes a compatible Amazon Machine Image (AMI), including the ID and name for a Snow device AMI. This AMI is compatible with the device's physical hardware requirements, and it should be able to be run in an SBE1 instance on the device. */
	export interface CompatibleImageFormProperties {
		AmiId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCompatibleImageFormGroup() {
		return new FormGroup<CompatibleImageFormProperties>({
			AmiId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCompatibleImagesRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListCompatibleImagesRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCompatibleImagesRequestFormGroup() {
		return new FormGroup<ListCompatibleImagesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListJobsResult {
		JobListEntries?: Array<JobListEntry>;
		NextToken?: string;
	}
	export interface ListJobsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResultFormGroup() {
		return new FormGroup<ListJobsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListJobsRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListJobsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsRequestFormGroup() {
		return new FormGroup<ListJobsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLongTermPricingResult {
		LongTermPricingEntries?: Array<LongTermPricingListEntry>;
		NextToken?: string;
	}
	export interface ListLongTermPricingResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLongTermPricingResultFormGroup() {
		return new FormGroup<ListLongTermPricingResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Each <code>LongTermPricingListEntry</code> object contains information about a long-term pricing type. */
	export interface LongTermPricingListEntry {
		LongTermPricingId?: string;
		LongTermPricingEndDate?: Date;
		LongTermPricingStartDate?: Date;
		LongTermPricingType?: LongTermPricingType;
		CurrentActiveJob?: string;
		ReplacementJob?: string;
		IsLongTermPricingAutoRenew?: boolean | null;
		LongTermPricingStatus?: string;
		SnowballType?: SnowballType;
		JobIds?: Array<string>;
	}

	/** Each <code>LongTermPricingListEntry</code> object contains information about a long-term pricing type. */
	export interface LongTermPricingListEntryFormProperties {
		LongTermPricingId: FormControl<string | null | undefined>,
		LongTermPricingEndDate: FormControl<Date | null | undefined>,
		LongTermPricingStartDate: FormControl<Date | null | undefined>,
		LongTermPricingType: FormControl<LongTermPricingType | null | undefined>,
		CurrentActiveJob: FormControl<string | null | undefined>,
		ReplacementJob: FormControl<string | null | undefined>,
		IsLongTermPricingAutoRenew: FormControl<boolean | null | undefined>,
		LongTermPricingStatus: FormControl<string | null | undefined>,
		SnowballType: FormControl<SnowballType | null | undefined>,
	}
	export function CreateLongTermPricingListEntryFormGroup() {
		return new FormGroup<LongTermPricingListEntryFormProperties>({
			LongTermPricingId: new FormControl<string | null | undefined>(undefined),
			LongTermPricingEndDate: new FormControl<Date | null | undefined>(undefined),
			LongTermPricingStartDate: new FormControl<Date | null | undefined>(undefined),
			LongTermPricingType: new FormControl<LongTermPricingType | null | undefined>(undefined),
			CurrentActiveJob: new FormControl<string | null | undefined>(undefined),
			ReplacementJob: new FormControl<string | null | undefined>(undefined),
			IsLongTermPricingAutoRenew: new FormControl<boolean | null | undefined>(undefined),
			LongTermPricingStatus: new FormControl<string | null | undefined>(undefined),
			SnowballType: new FormControl<SnowballType | null | undefined>(undefined),
		});

	}

	export interface ListLongTermPricingRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListLongTermPricingRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLongTermPricingRequestFormGroup() {
		return new FormGroup<ListLongTermPricingRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPickupLocationsResult {
		Addresses?: Array<Address>;
		NextToken?: string;
	}
	export interface ListPickupLocationsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPickupLocationsResultFormGroup() {
		return new FormGroup<ListPickupLocationsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPickupLocationsRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListPickupLocationsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPickupLocationsRequestFormGroup() {
		return new FormGroup<ListPickupLocationsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListServiceVersionsResult {

		/** Required */
		ServiceVersions: Array<ServiceVersion>;

		/** Required */
		ServiceName: ServiceName;
		DependentServices?: Array<DependentService>;
		NextToken?: string;
	}
	export interface ListServiceVersionsResultFormProperties {

		/** Required */
		ServiceName: FormControl<ServiceName | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceVersionsResultFormGroup() {
		return new FormGroup<ListServiceVersionsResultFormProperties>({
			ServiceName: new FormControl<ServiceName | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The version of the requested service. */
	export interface ServiceVersion {
		Version?: string;
	}

	/** The version of the requested service. */
	export interface ServiceVersionFormProperties {
		Version: FormControl<string | null | undefined>,
	}
	export function CreateServiceVersionFormGroup() {
		return new FormGroup<ServiceVersionFormProperties>({
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServiceName { KUBERNETES = 0, EKS_ANYWHERE = 1 }


	/** The name and version of the service dependant on the requested service. */
	export interface DependentService {
		ServiceName?: ServiceName;
		ServiceVersion?: ServiceVersion;
	}

	/** The name and version of the service dependant on the requested service. */
	export interface DependentServiceFormProperties {
		ServiceName: FormControl<ServiceName | null | undefined>,
	}
	export function CreateDependentServiceFormGroup() {
		return new FormGroup<DependentServiceFormProperties>({
			ServiceName: new FormControl<ServiceName | null | undefined>(undefined),
		});

	}

	export interface ListServiceVersionsRequest {

		/** Required */
		ServiceName: ServiceName;
		DependentServices?: Array<DependentService>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListServiceVersionsRequestFormProperties {

		/** Required */
		ServiceName: FormControl<ServiceName | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceVersionsRequestFormGroup() {
		return new FormGroup<ListServiceVersionsRequestFormProperties>({
			ServiceName: new FormControl<ServiceName | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateClusterResult {
	}
	export interface UpdateClusterResultFormProperties {
	}
	export function CreateUpdateClusterResultFormGroup() {
		return new FormGroup<UpdateClusterResultFormProperties>({
		});

	}

	export interface UpdateClusterRequest {

		/** Required */
		ClusterId: string;
		RoleARN?: string;
		Description?: string;
		Resources?: JobResource;
		OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration;
		AddressId?: string;
		ShippingOption?: ShippingOption;
		Notification?: Notification;
		ForwardingAddressId?: string;
	}
	export interface UpdateClusterRequestFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		AddressId: FormControl<string | null | undefined>,
		ShippingOption: FormControl<ShippingOption | null | undefined>,
		ForwardingAddressId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateClusterRequestFormGroup() {
		return new FormGroup<UpdateClusterRequestFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			AddressId: new FormControl<string | null | undefined>(undefined),
			ShippingOption: new FormControl<ShippingOption | null | undefined>(undefined),
			ForwardingAddressId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateJobResult {
	}
	export interface UpdateJobResultFormProperties {
	}
	export function CreateUpdateJobResultFormGroup() {
		return new FormGroup<UpdateJobResultFormProperties>({
		});

	}

	export interface UpdateJobRequest {

		/** Required */
		JobId: string;
		RoleARN?: string;
		Notification?: Notification;
		Resources?: JobResource;
		OnDeviceServiceConfiguration?: OnDeviceServiceConfiguration;
		AddressId?: string;
		ShippingOption?: ShippingOption;
		Description?: string;
		SnowballCapacityPreference?: SnowballCapacity;
		ForwardingAddressId?: string;

		/** Information identifying the person picking up the device. */
		PickupDetails?: PickupDetails;
	}
	export interface UpdateJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
		AddressId: FormControl<string | null | undefined>,
		ShippingOption: FormControl<ShippingOption | null | undefined>,
		Description: FormControl<string | null | undefined>,
		SnowballCapacityPreference: FormControl<SnowballCapacity | null | undefined>,
		ForwardingAddressId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateJobRequestFormGroup() {
		return new FormGroup<UpdateJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			AddressId: new FormControl<string | null | undefined>(undefined),
			ShippingOption: new FormControl<ShippingOption | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			SnowballCapacityPreference: new FormControl<SnowballCapacity | null | undefined>(undefined),
			ForwardingAddressId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateJobShipmentStateResult {
	}
	export interface UpdateJobShipmentStateResultFormProperties {
	}
	export function CreateUpdateJobShipmentStateResultFormGroup() {
		return new FormGroup<UpdateJobShipmentStateResultFormProperties>({
		});

	}

	export interface UpdateJobShipmentStateRequest {

		/** Required */
		JobId: string;

		/** Required */
		ShipmentState: ShipmentState;
	}
	export interface UpdateJobShipmentStateRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,

		/** Required */
		ShipmentState: FormControl<ShipmentState | null | undefined>,
	}
	export function CreateUpdateJobShipmentStateRequestFormGroup() {
		return new FormGroup<UpdateJobShipmentStateRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShipmentState: new FormControl<ShipmentState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ShipmentState { RECEIVED = 0, RETURNED = 1 }

	export interface UpdateLongTermPricingResult {
	}
	export interface UpdateLongTermPricingResultFormProperties {
	}
	export function CreateUpdateLongTermPricingResultFormGroup() {
		return new FormGroup<UpdateLongTermPricingResultFormProperties>({
		});

	}

	export interface UpdateLongTermPricingRequest {

		/** Required */
		LongTermPricingId: string;
		ReplacementJob?: string;
		IsLongTermPricingAutoRenew?: boolean | null;
	}
	export interface UpdateLongTermPricingRequestFormProperties {

		/** Required */
		LongTermPricingId: FormControl<string | null | undefined>,
		ReplacementJob: FormControl<string | null | undefined>,
		IsLongTermPricingAutoRenew: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateLongTermPricingRequestFormGroup() {
		return new FormGroup<UpdateLongTermPricingRequestFormProperties>({
			LongTermPricingId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReplacementJob: new FormControl<string | null | undefined>(undefined),
			IsLongTermPricingAutoRenew: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum TransferOption { IMPORT = 0, EXPORT = 1, LOCAL_USE = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Cancels a cluster job. You can only cancel a cluster job while it's in the <code>AwaitingQuorum</code> status. You'll have at least an hour after creating a cluster job to cancel it.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster
		 * @return {CancelClusterResult} Success
		 */
		CancelCluster(requestBody: CancelClusterRequest): Observable<CancelClusterResult> {
			return this.http.post<CancelClusterResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.CancelCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels the specified job. You can only cancel a job before its <code>JobState</code> value changes to <code>PreparingAppliance</code>. Requesting the <code>ListJobs</code> or <code>DescribeJob</code> action returns a job's <code>JobState</code> as part of the response element data returned.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.CancelJob
		 * @return {CancelJobResult} Success
		 */
		CancelJob(requestBody: CancelJobRequest): Observable<CancelJobResult> {
			return this.http.post<CancelJobResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.CancelJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an address for a Snow device to be shipped to. In most regions, addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. If the address is invalid or unsupported, then an exception is thrown.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress
		 * @return {CreateAddressResult} Success
		 */
		CreateAddress(requestBody: CreateAddressRequest): Observable<CreateAddressResult> {
			return this.http.post<CreateAddressResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.CreateAddress', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an empty cluster. Each cluster supports five nodes. You use the <a>CreateJob</a> action separately to create the jobs for each of these nodes. The cluster does not ship until these five node jobs have been created.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster
		 * @return {CreateClusterResult} Success
		 */
		CreateCluster(requestBody: CreateClusterRequest): Observable<CreateClusterResult> {
			return this.http.post<CreateClusterResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.CreateCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a job to import or export data between Amazon S3 and your on-premises data center. Your Amazon Web Services account must have the right trust policies and permissions in place to create a job for a Snow device. If you're creating a job for a node in a cluster, you only need to provide the <code>clusterId</code> value; the other job attributes are inherited from the cluster. </p> <note> <p>Only the Snowball; Edge device type is supported when ordering clustered jobs.</p> <p>The device capacity is optional.</p> <p>Availability of device types differ by Amazon Web Services Region. For more information about Region availability, see <a href="https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/?p=ngi&amp;loc=4">Amazon Web Services Regional Services</a>.</p> </note> <p/> <p class="title"> <b>Snow Family devices and their capacities.</b> </p> <ul> <li> <p>Device type: <b>SNC1_SSD</b> </p> <ul> <li> <p>Capacity: T14</p> </li> <li> <p>Description: Snowcone </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>SNC1_HDD</b> </p> <ul> <li> <p>Capacity: T8</p> </li> <li> <p>Description: Snowcone </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_S</b> </p> <ul> <li> <p>Capacity: T98</p> </li> <li> <p>Description: Snowball Edge Storage Optimized for data transfer only </p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_CG</b> </p> <ul> <li> <p>Capacity: T42</p> </li> <li> <p>Description: Snowball Edge Compute Optimized with GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE_C</b> </p> <ul> <li> <p>Capacity: T42</p> </li> <li> <p>Description: Snowball Edge Compute Optimized without GPU</p> </li> </ul> <p/> </li> <li> <p>Device type: <b>EDGE</b> </p> <ul> <li> <p>Capacity: T100</p> </li> <li> <p>Description: Snowball Edge Storage Optimized with EC2 Compute</p> </li> </ul> <note> <p>This device is replaced with T98.</p> </note> <p/> </li> <li> <p>Device type: <b>STANDARD</b> </p> <ul> <li> <p>Capacity: T50</p> </li> <li> <p>Description: Original Snowball device</p> <note> <p>This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region </p> </note> </li> </ul> <p/> </li> <li> <p>Device type: <b>STANDARD</b> </p> <ul> <li> <p>Capacity: T80</p> </li> <li> <p>Description: Original Snowball device</p> <note> <p>This device is only available in the Ningxia, Beijing, and Singapore Amazon Web Services Region. </p> </note> </li> </ul> <p/> </li> <li> <p>Snow Family device type: <b>RACK_5U_C</b> </p> <ul> <li> <p>Capacity: T13 </p> </li> <li> <p>Description: Snowblade.</p> </li> </ul> </li> <li> <p>Device type: <b>V3_5S</b> </p> <ul> <li> <p>Capacity: T240</p> </li> <li> <p>Description: Snowball Edge Storage Optimized 210TB</p> </li> </ul> </li> </ul>
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.CreateJob
		 * @return {CreateJobResult} Success
		 */
		CreateJob(requestBody: CreateJobRequest): Observable<CreateJobResult> {
			return this.http.post<CreateJobResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a job with the long-term usage option for a device. The long-term usage is a 1-year or 3-year long-term pricing type for the device. You are billed upfront, and Amazon Web Services provides discounts for long-term pricing.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing
		 * @return {CreateLongTermPricingResult} Success
		 */
		CreateLongTermPricing(requestBody: CreateLongTermPricingRequest): Observable<CreateLongTermPricingResult> {
			return this.http.post<CreateLongTermPricingResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.CreateLongTermPricing', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a shipping label that will be used to return the Snow device to Amazon Web Services.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel
		 * @return {CreateReturnShippingLabelResult} Success
		 */
		CreateReturnShippingLabel(requestBody: CreateReturnShippingLabelRequest): Observable<CreateReturnShippingLabelResult> {
			return this.http.post<CreateReturnShippingLabelResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.CreateReturnShippingLabel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Takes an <code>AddressId</code> and returns specific details about that address in the form of an <code>Address</code> object.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress
		 * @return {DescribeAddressResult} Success
		 */
		DescribeAddress(requestBody: DescribeAddressRequest): Observable<DescribeAddressResult> {
			return this.http.post<DescribeAddressResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddress', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a specified number of <code>ADDRESS</code> objects. Calling this API in one of the US regions will return addresses from the list of all addresses associated with this account in all US regions.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeAddressesResult} Success
		 */
		DescribeAddresses(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeAddressesRequest): Observable<DescribeAddressesResult> {
			return this.http.post<DescribeAddressesResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.DescribeAddresses?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific cluster including shipping information, cluster status, and other important metadata.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster
		 * @return {DescribeClusterResult} Success
		 */
		DescribeCluster(requestBody: DescribeClusterRequest): Observable<DescribeClusterResult> {
			return this.http.post<DescribeClusterResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.DescribeCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific job including shipping information, job status, and other important metadata.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob
		 * @return {DescribeJobResult} Success
		 */
		DescribeJob(requestBody: DescribeJobRequest): Observable<DescribeJobResult> {
			return this.http.post<DescribeJobResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.DescribeJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Information on the shipping label of a Snow device that is being returned to Amazon Web Services.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel
		 * @return {DescribeReturnShippingLabelResult} Success
		 */
		DescribeReturnShippingLabel(requestBody: DescribeReturnShippingLabelRequest): Observable<DescribeReturnShippingLabelResult> {
			return this.http.post<DescribeReturnShippingLabelResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.DescribeReturnShippingLabel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified <code>JobId</code> value. You can access the manifest file for up to 60 minutes after this request has been made. To access the manifest file after 60 minutes have passed, you'll have to make another call to the <code>GetJobManifest</code> action.</p> <p>The manifest is an encrypted file that you can download after your job enters the <code>WithCustomer</code> status. This is the only valid status for calling this API as the manifest and <code>UnlockCode</code> code value are used for securing your device and should only be used when you have the device. The manifest is decrypted by using the <code>UnlockCode</code> code value, when you pass both values to the Snow device through the Snowball client when the client is started for the first time. </p> <p>As a best practice, we recommend that you don't save a copy of an <code>UnlockCode</code> value in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snow device associated with that job.</p> <p>The credentials of a given job, including its manifest file and unlock code, expire 360 days after the job is created.</p>
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest
		 * @return {GetJobManifestResult} Success
		 */
		GetJobManifest(requestBody: GetJobManifestRequest): Observable<GetJobManifestResult> {
			return this.http.post<GetJobManifestResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the <code>UnlockCode</code> code value for the specified job. A particular <code>UnlockCode</code> value can be accessed for up to 360 days after the associated job has been created.</p> <p>The <code>UnlockCode</code> value is a 29-character code with 25 alphanumeric characters and 4 hyphens. This code is used to decrypt the manifest file when it is passed along with the manifest to the Snow device through the Snowball client when the client is started for the first time. The only valid status for calling this API is <code>WithCustomer</code> as the manifest and <code>Unlock</code> code values are used for securing your device and should only be used when you have the device.</p> <p>As a best practice, we recommend that you don't save a copy of the <code>UnlockCode</code> in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snow device associated with that job.</p>
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode
		 * @return {GetJobUnlockCodeResult} Success
		 */
		GetJobUnlockCode(requestBody: GetJobUnlockCodeRequest): Observable<GetJobUnlockCodeResult> {
			return this.http.post<GetJobUnlockCodeResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the Snow Family service limit for your account, and also the number of Snow devices your account has in use.</p> <p>The default service limit for the number of Snow devices that you can have at one time is 1. If you want to increase your service limit, contact Amazon Web Services Support.</p>
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage
		 * @return {GetSnowballUsageResult} Success
		 */
		GetSnowballUsage(requestBody: GetSnowballUsageRequest): Observable<GetSnowballUsageResult> {
			return this.http.post<GetSnowballUsageResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.GetSnowballUsage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an Amazon S3 presigned URL for an update file associated with a specified <code>JobId</code>.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates
		 * @return {GetSoftwareUpdatesResult} Success
		 */
		GetSoftwareUpdates(requestBody: GetSoftwareUpdatesRequest): Observable<GetSoftwareUpdatesResult> {
			return this.http.post<GetSoftwareUpdatesResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.GetSoftwareUpdates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of <code>JobListEntry</code> objects of the specified length. Each <code>JobListEntry</code> object is for a job in the specified cluster and contains a job's state, a job's ID, and other information.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListClusterJobsResult} Success
		 */
		ListClusterJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListClusterJobsRequest): Observable<ListClusterJobsResult> {
			return this.http.post<ListClusterJobsResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of <code>ClusterListEntry</code> objects of the specified length. Each <code>ClusterListEntry</code> object contains a cluster's state, a cluster's ID, and other important status information.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.ListClusters
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListClustersResult} Success
		 */
		ListClusters(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListClustersRequest): Observable<ListClustersResult> {
			return this.http.post<ListClustersResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This action returns a list of the different Amazon EC2-compatible Amazon Machine Images (AMIs) that are owned by your Amazon Web Services accountthat would be supported for use on a Snow device. Currently, supported AMIs are based on the Amazon Linux-2, Ubuntu 20.04 LTS - Focal, or Ubuntu 22.04 LTS - Jammy images, available on the Amazon Web Services Marketplace. Ubuntu 16.04 LTS - Xenial (HVM) images are no longer supported in the Market, but still supported for use on devices through Amazon EC2 VM Import/Export and running locally in AMIs.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCompatibleImagesResult} Success
		 */
		ListCompatibleImages(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCompatibleImagesRequest): Observable<ListCompatibleImagesResult> {
			return this.http.post<ListCompatibleImagesResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of <code>JobListEntry</code> objects of the specified length. Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of export jobs. Calling this API action in one of the US regions will return jobs from the list of all jobs associated with this account in all US regions.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.ListJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListJobsResult} Success
		 */
		ListJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListJobsRequest): Observable<ListJobsResult> {
			return this.http.post<ListJobsResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.ListJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all long-term pricing types.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLongTermPricingResult} Success
		 */
		ListLongTermPricing(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListLongTermPricingRequest): Observable<ListLongTermPricingResult> {
			return this.http.post<ListLongTermPricingResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.ListLongTermPricing?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A list of locations from which the customer can choose to pickup a device.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.ListPickupLocations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPickupLocationsResult} Success
		 */
		ListPickupLocations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPickupLocationsRequest): Observable<ListPickupLocationsResult> {
			return this.http.post<ListPickupLocationsResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.ListPickupLocations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all supported versions for Snow on-device services. Returns an array of <code>ServiceVersion</code> object containing the supported versions for a particular service.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions
		 * @return {ListServiceVersionsResult} Success
		 */
		ListServiceVersions(requestBody: ListServiceVersionsRequest): Observable<ListServiceVersionsResult> {
			return this.http.post<ListServiceVersionsResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.ListServiceVersions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * While a cluster's <code>ClusterState</code> value is in the <code>AwaitingQuorum</code> state, you can update some of the information associated with a cluster. Once the cluster changes to a different job state, usually 60 minutes after the cluster being created, this action is no longer available.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster
		 * @return {UpdateClusterResult} Success
		 */
		UpdateCluster(requestBody: UpdateClusterRequest): Observable<UpdateClusterResult> {
			return this.http.post<UpdateClusterResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.UpdateCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * While a job's <code>JobState</code> value is <code>New</code>, you can update some of the information associated with a job. Once the job changes to a different job state, usually within 60 minutes of the job being created, this action is no longer available.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob
		 * @return {UpdateJobResult} Success
		 */
		UpdateJob(requestBody: UpdateJobRequest): Observable<UpdateJobResult> {
			return this.http.post<UpdateJobResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the state when a shipment state changes to a different state.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState
		 * @return {UpdateJobShipmentStateResult} Success
		 */
		UpdateJobShipmentState(requestBody: UpdateJobShipmentStateRequest): Observable<UpdateJobShipmentStateResult> {
			return this.http.post<UpdateJobShipmentStateResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.UpdateJobShipmentState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the long-term pricing type.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing
		 * @return {UpdateLongTermPricingResult} Success
		 */
		UpdateLongTermPricing(requestBody: UpdateLongTermPricingRequest): Observable<UpdateLongTermPricingResult> {
			return this.http.post<UpdateLongTermPricingResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.UpdateLongTermPricing', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CancelClusterX_Amz_Target { 'AWSIESnowballJobManagementService.CancelCluster' = 0 }

	export enum CancelJobX_Amz_Target { 'AWSIESnowballJobManagementService.CancelJob' = 0 }

	export enum CreateAddressX_Amz_Target { 'AWSIESnowballJobManagementService.CreateAddress' = 0 }

	export enum CreateClusterX_Amz_Target { 'AWSIESnowballJobManagementService.CreateCluster' = 0 }

	export enum CreateJobX_Amz_Target { 'AWSIESnowballJobManagementService.CreateJob' = 0 }

	export enum CreateLongTermPricingX_Amz_Target { 'AWSIESnowballJobManagementService.CreateLongTermPricing' = 0 }

	export enum CreateReturnShippingLabelX_Amz_Target { 'AWSIESnowballJobManagementService.CreateReturnShippingLabel' = 0 }

	export enum DescribeAddressX_Amz_Target { 'AWSIESnowballJobManagementService.DescribeAddress' = 0 }

	export enum DescribeAddressesX_Amz_Target { 'AWSIESnowballJobManagementService.DescribeAddresses' = 0 }

	export enum DescribeClusterX_Amz_Target { 'AWSIESnowballJobManagementService.DescribeCluster' = 0 }

	export enum DescribeJobX_Amz_Target { 'AWSIESnowballJobManagementService.DescribeJob' = 0 }

	export enum DescribeReturnShippingLabelX_Amz_Target { 'AWSIESnowballJobManagementService.DescribeReturnShippingLabel' = 0 }

	export enum GetJobManifestX_Amz_Target { 'AWSIESnowballJobManagementService.GetJobManifest' = 0 }

	export enum GetJobUnlockCodeX_Amz_Target { 'AWSIESnowballJobManagementService.GetJobUnlockCode' = 0 }

	export enum GetSnowballUsageX_Amz_Target { 'AWSIESnowballJobManagementService.GetSnowballUsage' = 0 }

	export enum GetSoftwareUpdatesX_Amz_Target { 'AWSIESnowballJobManagementService.GetSoftwareUpdates' = 0 }

	export enum ListClusterJobsX_Amz_Target { 'AWSIESnowballJobManagementService.ListClusterJobs' = 0 }

	export enum ListClustersX_Amz_Target { 'AWSIESnowballJobManagementService.ListClusters' = 0 }

	export enum ListCompatibleImagesX_Amz_Target { 'AWSIESnowballJobManagementService.ListCompatibleImages' = 0 }

	export enum ListJobsX_Amz_Target { 'AWSIESnowballJobManagementService.ListJobs' = 0 }

	export enum ListLongTermPricingX_Amz_Target { 'AWSIESnowballJobManagementService.ListLongTermPricing' = 0 }

	export enum ListPickupLocationsX_Amz_Target { 'AWSIESnowballJobManagementService.ListPickupLocations' = 0 }

	export enum ListServiceVersionsX_Amz_Target { 'AWSIESnowballJobManagementService.ListServiceVersions' = 0 }

	export enum UpdateClusterX_Amz_Target { 'AWSIESnowballJobManagementService.UpdateCluster' = 0 }

	export enum UpdateJobX_Amz_Target { 'AWSIESnowballJobManagementService.UpdateJob' = 0 }

	export enum UpdateJobShipmentStateX_Amz_Target { 'AWSIESnowballJobManagementService.UpdateJobShipmentState' = 0 }

	export enum UpdateLongTermPricingX_Amz_Target { 'AWSIESnowballJobManagementService.UpdateLongTermPricing' = 0 }

}

