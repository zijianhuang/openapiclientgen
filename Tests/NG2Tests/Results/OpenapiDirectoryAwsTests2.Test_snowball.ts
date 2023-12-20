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
		ClusterId: string;
	}
	export interface CancelClusterRequestFormProperties {
		ClusterId: FormControl<string | null | undefined>,
	}
	export function CreateCancelClusterRequestFormGroup() {
		return new FormGroup<CancelClusterRequestFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined),
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
		JobId: string;
	}
	export interface CancelJobRequestFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateCancelJobRequestFormGroup() {
		return new FormGroup<CancelJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAddressResult {
		AddressId?: string | null;
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

		/**
		 * The address that you want the Snowball or Snowballs associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown.
		 * Required
		 */
		Address: Address;
	}
	export interface CreateAddressRequestFormProperties {
	}
	export function CreateCreateAddressRequestFormGroup() {
		return new FormGroup<CreateAddressRequestFormProperties>({
		});

	}


	/** The address that you want the Snowball or Snowballs associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown. */
	export interface Address {
		AddressId?: string | null;
		Name?: string | null;
		Company?: string | null;
		Street1?: string | null;
		Street2?: string | null;
		Street3?: string | null;
		City?: string | null;
		StateOrProvince?: string | null;
		PrefectureOrDistrict?: string | null;
		Landmark?: string | null;
		Country?: string | null;
		PostalCode?: string | null;
		PhoneNumber?: string | null;
		IsRestricted?: boolean | null;
	}

	/** The address that you want the Snowball or Snowballs associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown. */
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
		});

	}

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
		ClusterId?: string | null;
	}
	export interface CreateClusterResultFormProperties {
		ClusterId: FormControl<string | null | undefined>,
	}
	export function CreateCreateClusterResultFormGroup() {
		return new FormGroup<CreateClusterResultFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateClusterRequest {
		JobType: CreateClusterRequestJobType;

		/**
		 * Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job.
		 * Required
		 */
		Resources: JobResource;
		Description?: string | null;
		AddressId: string;
		KmsKeyARN?: string | null;
		RoleARN: string;
		SnowballType?: CreateClusterRequestSnowballType | null;
		ShippingOption: CreateClusterRequestShippingOption;

		/** <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
		Notification?: Notification;
		ForwardingAddressId?: string | null;

		/** The tax documents required in your AWS Region. */
		TaxDocuments?: TaxDocuments;
	}
	export interface CreateClusterRequestFormProperties {
		JobType: FormControl<CreateClusterRequestJobType | null | undefined>,
		Description: FormControl<string | null | undefined>,
		AddressId: FormControl<string | null | undefined>,
		KmsKeyARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
		SnowballType: FormControl<CreateClusterRequestSnowballType | null | undefined>,
		ShippingOption: FormControl<CreateClusterRequestShippingOption | null | undefined>,
		ForwardingAddressId: FormControl<string | null | undefined>,
	}
	export function CreateCreateClusterRequestFormGroup() {
		return new FormGroup<CreateClusterRequestFormProperties>({
			JobType: new FormControl<CreateClusterRequestJobType | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			AddressId: new FormControl<string | null | undefined>(undefined),
			KmsKeyARN: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			SnowballType: new FormControl<CreateClusterRequestSnowballType | null | undefined>(undefined),
			ShippingOption: new FormControl<CreateClusterRequestShippingOption | null | undefined>(undefined),
			ForwardingAddressId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateClusterRequestJobType { IMPORT = 0, EXPORT = 1, LOCAL_USE = 2 }


	/** Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job. */
	export interface JobResource {
		S3Resources?: Array<S3Resource>;
		LambdaResources?: Array<LambdaResource>;
		Ec2AmiResources?: Array<Ec2AmiResource>;
	}

	/** Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job. */
	export interface JobResourceFormProperties {
	}
	export function CreateJobResourceFormGroup() {
		return new FormGroup<JobResourceFormProperties>({
		});

	}


	/** Each <code>S3Resource</code> object represents an Amazon S3 bucket that your transferred data will be exported from or imported into. For export jobs, this object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted. */
	export interface S3Resource {
		BucketArn?: string | null;

		/** Contains a key range. For export jobs, a <code>S3Resource</code> object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted. */
		KeyRange?: KeyRange;
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
		BeginMarker?: string | null;
		EndMarker?: string | null;
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


	/** Identifies  */
	export interface LambdaResource {
		LambdaArn?: string | null;
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
		EventResourceARN?: string | null;
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


	/** A JSON-formatted object that contains the IDs for an Amazon Machine Image (AMI), including the Amazon EC2 AMI ID and the Snowball Edge AMI ID. Each AMI has these two IDs to simplify identifying the AMI in both the AWS Cloud and on the device. */
	export interface Ec2AmiResource {
		AmiId: string;
		SnowballAmiId?: string | null;
	}

	/** A JSON-formatted object that contains the IDs for an Amazon Machine Image (AMI), including the Amazon EC2 AMI ID and the Snowball Edge AMI ID. Each AMI has these two IDs to simplify identifying the AMI in both the AWS Cloud and on the device. */
	export interface Ec2AmiResourceFormProperties {
		AmiId: FormControl<string | null | undefined>,
		SnowballAmiId: FormControl<string | null | undefined>,
	}
	export function CreateEc2AmiResourceFormGroup() {
		return new FormGroup<Ec2AmiResourceFormProperties>({
			AmiId: new FormControl<string | null | undefined>(undefined),
			SnowballAmiId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateClusterRequestSnowballType { STANDARD = 0, EDGE = 1, EDGE_C = 2, EDGE_CG = 3, EDGE_S = 4 }

	export enum CreateClusterRequestShippingOption { SECOND_DAY = 0, NEXT_DAY = 1, EXPRESS = 2, STANDARD = 3 }


	/** <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
	export interface Notification {
		SnsTopicARN?: string | null;
		JobStatesToNotify?: Array<JobState>;
		NotifyAll?: boolean | null;
	}

	/** <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
	export interface NotificationFormProperties {
		SnsTopicARN: FormControl<string | null | undefined>,
		NotifyAll: FormControl<boolean | null | undefined>,
	}
	export function CreateNotificationFormGroup() {
		return new FormGroup<NotificationFormProperties>({
			SnsTopicARN: new FormControl<string | null | undefined>(undefined),
			NotifyAll: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum JobState { New = 0, PreparingAppliance = 1, PreparingShipment = 2, InTransitToCustomer = 3, WithCustomer = 4, InTransitToAWS = 5, WithAWSSortingFacility = 6, WithAWS = 7, InProgress = 8, Complete = 9, Cancelled = 10, Listing = 11, Pending = 12 }


	/** The tax documents required in your AWS Region. */
	export interface TaxDocuments {

		/** The tax documents required in AWS Regions in India. */
		IND?: INDTaxDocuments;
	}

	/** The tax documents required in your AWS Region. */
	export interface TaxDocumentsFormProperties {
	}
	export function CreateTaxDocumentsFormGroup() {
		return new FormGroup<TaxDocumentsFormProperties>({
		});

	}


	/** The tax documents required in AWS Regions in India. */
	export interface INDTaxDocuments {
		GSTIN?: string | null;
	}

	/** The tax documents required in AWS Regions in India. */
	export interface INDTaxDocumentsFormProperties {
		GSTIN: FormControl<string | null | undefined>,
	}
	export function CreateINDTaxDocumentsFormGroup() {
		return new FormGroup<INDTaxDocumentsFormProperties>({
			GSTIN: new FormControl<string | null | undefined>(undefined),
		});

	}

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
		JobId?: string | null;
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
		JobType?: CreateClusterRequestJobType | null;

		/** Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job. */
		Resources?: JobResource;
		Description?: string | null;
		AddressId?: string | null;
		KmsKeyARN?: string | null;
		RoleARN?: string | null;
		SnowballCapacityPreference?: CreateJobRequestSnowballCapacityPreference | null;
		ShippingOption?: CreateClusterRequestShippingOption | null;

		/** <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
		Notification?: Notification;
		ClusterId?: string | null;
		SnowballType?: CreateClusterRequestSnowballType | null;
		ForwardingAddressId?: string | null;

		/** The tax documents required in your AWS Region. */
		TaxDocuments?: TaxDocuments;
	}
	export interface CreateJobRequestFormProperties {
		JobType: FormControl<CreateClusterRequestJobType | null | undefined>,
		Description: FormControl<string | null | undefined>,
		AddressId: FormControl<string | null | undefined>,
		KmsKeyARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
		SnowballCapacityPreference: FormControl<CreateJobRequestSnowballCapacityPreference | null | undefined>,
		ShippingOption: FormControl<CreateClusterRequestShippingOption | null | undefined>,
		ClusterId: FormControl<string | null | undefined>,
		SnowballType: FormControl<CreateClusterRequestSnowballType | null | undefined>,
		ForwardingAddressId: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobRequestFormGroup() {
		return new FormGroup<CreateJobRequestFormProperties>({
			JobType: new FormControl<CreateClusterRequestJobType | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			AddressId: new FormControl<string | null | undefined>(undefined),
			KmsKeyARN: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			SnowballCapacityPreference: new FormControl<CreateJobRequestSnowballCapacityPreference | null | undefined>(undefined),
			ShippingOption: new FormControl<CreateClusterRequestShippingOption | null | undefined>(undefined),
			ClusterId: new FormControl<string | null | undefined>(undefined),
			SnowballType: new FormControl<CreateClusterRequestSnowballType | null | undefined>(undefined),
			ForwardingAddressId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateJobRequestSnowballCapacityPreference { T50 = 0, T80 = 1, T100 = 2, T42 = 3, T98 = 4, NoPreference = 5 }

	export interface ClusterLimitExceededException {
	}
	export interface ClusterLimitExceededExceptionFormProperties {
	}
	export function CreateClusterLimitExceededExceptionFormGroup() {
		return new FormGroup<ClusterLimitExceededExceptionFormProperties>({
		});

	}

	export interface DescribeAddressResult {

		/** The address that you want the Snowball or Snowballs associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown. */
		Address?: Address;
	}
	export interface DescribeAddressResultFormProperties {
	}
	export function CreateDescribeAddressResultFormGroup() {
		return new FormGroup<DescribeAddressResultFormProperties>({
		});

	}

	export interface DescribeAddressRequest {
		AddressId: string;
	}
	export interface DescribeAddressRequestFormProperties {
		AddressId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAddressRequestFormGroup() {
		return new FormGroup<DescribeAddressRequestFormProperties>({
			AddressId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAddressesResult {
		Addresses?: Array<Address>;
		NextToken?: string | null;
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
		NextToken?: string | null;
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

		/** Contains metadata about a specific cluster. */
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
		ClusterId?: string | null;
		Description?: string | null;
		KmsKeyARN?: string | null;
		RoleARN?: string | null;
		ClusterState?: ClusterMetadataClusterState | null;
		JobType?: CreateClusterRequestJobType | null;
		SnowballType?: CreateClusterRequestSnowballType | null;
		CreationDate?: Date | null;

		/** Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job. */
		Resources?: JobResource;
		AddressId?: string | null;
		ShippingOption?: CreateClusterRequestShippingOption | null;

		/** <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
		Notification?: Notification;
		ForwardingAddressId?: string | null;

		/** The tax documents required in your AWS Region. */
		TaxDocuments?: TaxDocuments;
	}

	/** Contains metadata about a specific cluster. */
	export interface ClusterMetadataFormProperties {
		ClusterId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		KmsKeyARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
		ClusterState: FormControl<ClusterMetadataClusterState | null | undefined>,
		JobType: FormControl<CreateClusterRequestJobType | null | undefined>,
		SnowballType: FormControl<CreateClusterRequestSnowballType | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		AddressId: FormControl<string | null | undefined>,
		ShippingOption: FormControl<CreateClusterRequestShippingOption | null | undefined>,
		ForwardingAddressId: FormControl<string | null | undefined>,
	}
	export function CreateClusterMetadataFormGroup() {
		return new FormGroup<ClusterMetadataFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			KmsKeyARN: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			ClusterState: new FormControl<ClusterMetadataClusterState | null | undefined>(undefined),
			JobType: new FormControl<CreateClusterRequestJobType | null | undefined>(undefined),
			SnowballType: new FormControl<CreateClusterRequestSnowballType | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			AddressId: new FormControl<string | null | undefined>(undefined),
			ShippingOption: new FormControl<CreateClusterRequestShippingOption | null | undefined>(undefined),
			ForwardingAddressId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClusterMetadataClusterState { AwaitingQuorum = 0, Pending = 1, InUse = 2, Complete = 3, Cancelled = 4 }

	export interface DescribeClusterRequest {
		ClusterId: string;
	}
	export interface DescribeClusterRequestFormProperties {
		ClusterId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeClusterRequestFormGroup() {
		return new FormGroup<DescribeClusterRequestFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeJobResult {

		/** Contains information about a specific job including shipping information, job status, and other important metadata. This information is returned as a part of the response syntax of the <code>DescribeJob</code> action. */
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
		JobId?: string | null;
		JobState?: JobState | null;
		JobType?: CreateClusterRequestJobType | null;
		SnowballType?: CreateClusterRequestSnowballType | null;
		CreationDate?: Date | null;

		/** Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job. */
		Resources?: JobResource;
		Description?: string | null;
		KmsKeyARN?: string | null;
		RoleARN?: string | null;
		AddressId?: string | null;

		/** A job's shipping information, including inbound and outbound tracking numbers and shipping speed options. */
		ShippingDetails?: ShippingDetails;
		SnowballCapacityPreference?: CreateJobRequestSnowballCapacityPreference | null;

		/** <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
		Notification?: Notification;

		/** Defines the real-time status of a Snowball's data transfer while the device is at AWS. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs. */
		DataTransferProgress?: DataTransfer;

		/** <p>Contains job logs. Whenever Snowball is used to import data into or export data out of Amazon S3, you'll have the option of downloading a PDF job report. Job logs are returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type. The job logs can be accessed for up to 60 minutes after this request has been made. To access any of the job logs after 60 minutes have passed, you'll have to make another call to the <code>DescribeJob</code> action.</p> <p>For import jobs, the PDF job report becomes available at the end of the import process. For export jobs, your job report typically becomes available while the Snowball for your job part is being delivered to you.</p> <p>The job report provides you insight into the state of your Amazon S3 data transfer. The report includes details about your job or job part for your records.</p> <p>For deeper visibility into the status of your transferred objects, you can look at the two associated logs: a success log and a failure log. The logs are saved in comma-separated value (CSV) format, and the name of each log includes the ID of the job or job part that the log describes.</p> */
		JobLogInfo?: JobLogs;
		ClusterId?: string | null;
		ForwardingAddressId?: string | null;

		/** The tax documents required in your AWS Region. */
		TaxDocuments?: TaxDocuments;
	}

	/** Contains information about a specific job including shipping information, job status, and other important metadata. This information is returned as a part of the response syntax of the <code>DescribeJob</code> action. */
	export interface JobMetadataFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobState: FormControl<JobState | null | undefined>,
		JobType: FormControl<CreateClusterRequestJobType | null | undefined>,
		SnowballType: FormControl<CreateClusterRequestSnowballType | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		KmsKeyARN: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
		AddressId: FormControl<string | null | undefined>,
		SnowballCapacityPreference: FormControl<CreateJobRequestSnowballCapacityPreference | null | undefined>,
		ClusterId: FormControl<string | null | undefined>,
		ForwardingAddressId: FormControl<string | null | undefined>,
	}
	export function CreateJobMetadataFormGroup() {
		return new FormGroup<JobMetadataFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobState: new FormControl<JobState | null | undefined>(undefined),
			JobType: new FormControl<CreateClusterRequestJobType | null | undefined>(undefined),
			SnowballType: new FormControl<CreateClusterRequestSnowballType | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			KmsKeyARN: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			AddressId: new FormControl<string | null | undefined>(undefined),
			SnowballCapacityPreference: new FormControl<CreateJobRequestSnowballCapacityPreference | null | undefined>(undefined),
			ClusterId: new FormControl<string | null | undefined>(undefined),
			ForwardingAddressId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A job's shipping information, including inbound and outbound tracking numbers and shipping speed options. */
	export interface ShippingDetails {
		ShippingOption?: CreateClusterRequestShippingOption | null;

		/** The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or outbound shipment. */
		InboundShipment?: Shipment;

		/** The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or outbound shipment. */
		OutboundShipment?: Shipment;
	}

	/** A job's shipping information, including inbound and outbound tracking numbers and shipping speed options. */
	export interface ShippingDetailsFormProperties {
		ShippingOption: FormControl<CreateClusterRequestShippingOption | null | undefined>,
	}
	export function CreateShippingDetailsFormGroup() {
		return new FormGroup<ShippingDetailsFormProperties>({
			ShippingOption: new FormControl<CreateClusterRequestShippingOption | null | undefined>(undefined),
		});

	}


	/** The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or outbound shipment. */
	export interface Shipment {
		Status?: string | null;
		TrackingNumber?: string | null;
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


	/** Defines the real-time status of a Snowball's data transfer while the device is at AWS. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs. */
	export interface DataTransfer {
		BytesTransferred?: number | null;
		ObjectsTransferred?: number | null;
		TotalBytes?: number | null;
		TotalObjects?: number | null;
	}

	/** Defines the real-time status of a Snowball's data transfer while the device is at AWS. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs. */
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


	/** <p>Contains job logs. Whenever Snowball is used to import data into or export data out of Amazon S3, you'll have the option of downloading a PDF job report. Job logs are returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type. The job logs can be accessed for up to 60 minutes after this request has been made. To access any of the job logs after 60 minutes have passed, you'll have to make another call to the <code>DescribeJob</code> action.</p> <p>For import jobs, the PDF job report becomes available at the end of the import process. For export jobs, your job report typically becomes available while the Snowball for your job part is being delivered to you.</p> <p>The job report provides you insight into the state of your Amazon S3 data transfer. The report includes details about your job or job part for your records.</p> <p>For deeper visibility into the status of your transferred objects, you can look at the two associated logs: a success log and a failure log. The logs are saved in comma-separated value (CSV) format, and the name of each log includes the ID of the job or job part that the log describes.</p> */
	export interface JobLogs {
		JobCompletionReportURI?: string | null;
		JobSuccessLogURI?: string | null;
		JobFailureLogURI?: string | null;
	}

	/** <p>Contains job logs. Whenever Snowball is used to import data into or export data out of Amazon S3, you'll have the option of downloading a PDF job report. Job logs are returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type. The job logs can be accessed for up to 60 minutes after this request has been made. To access any of the job logs after 60 minutes have passed, you'll have to make another call to the <code>DescribeJob</code> action.</p> <p>For import jobs, the PDF job report becomes available at the end of the import process. For export jobs, your job report typically becomes available while the Snowball for your job part is being delivered to you.</p> <p>The job report provides you insight into the state of your Amazon S3 data transfer. The report includes details about your job or job part for your records.</p> <p>For deeper visibility into the status of your transferred objects, you can look at the two associated logs: a success log and a failure log. The logs are saved in comma-separated value (CSV) format, and the name of each log includes the ID of the job or job part that the log describes.</p> */
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
		JobId: string;
	}
	export interface DescribeJobRequestFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobRequestFormGroup() {
		return new FormGroup<DescribeJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetJobManifestResult {
		ManifestURI?: string | null;
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
		JobId: string;
	}
	export interface GetJobManifestRequestFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateGetJobManifestRequestFormGroup() {
		return new FormGroup<GetJobManifestRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetJobUnlockCodeResult {
		UnlockCode?: string | null;
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
		JobId: string;
	}
	export interface GetJobUnlockCodeRequestFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateGetJobUnlockCodeRequestFormGroup() {
		return new FormGroup<GetJobUnlockCodeRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
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
		UpdatesURI?: string | null;
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
		JobId: string;
	}
	export interface GetSoftwareUpdatesRequestFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateGetSoftwareUpdatesRequestFormGroup() {
		return new FormGroup<GetSoftwareUpdatesRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClusterJobsResult {
		JobListEntries?: Array<JobListEntry>;
		NextToken?: string | null;
	}
	export interface ListClusterJobsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClusterJobsResultFormGroup() {
		return new FormGroup<ListClusterJobsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of an export job. */
	export interface JobListEntry {
		JobId?: string | null;
		JobState?: JobState | null;
		IsMaster?: boolean | null;
		JobType?: CreateClusterRequestJobType | null;
		SnowballType?: CreateClusterRequestSnowballType | null;
		CreationDate?: Date | null;
		Description?: string | null;
	}

	/** Each <code>JobListEntry</code> object contains a job's state, a job's ID, and a value that indicates whether the job is a job part, in the case of an export job. */
	export interface JobListEntryFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobState: FormControl<JobState | null | undefined>,
		IsMaster: FormControl<boolean | null | undefined>,
		JobType: FormControl<CreateClusterRequestJobType | null | undefined>,
		SnowballType: FormControl<CreateClusterRequestSnowballType | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateJobListEntryFormGroup() {
		return new FormGroup<JobListEntryFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobState: new FormControl<JobState | null | undefined>(undefined),
			IsMaster: new FormControl<boolean | null | undefined>(undefined),
			JobType: new FormControl<CreateClusterRequestJobType | null | undefined>(undefined),
			SnowballType: new FormControl<CreateClusterRequestSnowballType | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClusterJobsRequest {
		ClusterId: string;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListClusterJobsRequestFormProperties {
		ClusterId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClusterJobsRequestFormGroup() {
		return new FormGroup<ListClusterJobsRequestFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClustersResult {
		ClusterListEntries?: Array<ClusterListEntry>;
		NextToken?: string | null;
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
		ClusterId?: string | null;
		ClusterState?: ClusterMetadataClusterState | null;
		CreationDate?: Date | null;
		Description?: string | null;
	}

	/** Contains a cluster's state, a cluster's ID, and other important information. */
	export interface ClusterListEntryFormProperties {
		ClusterId: FormControl<string | null | undefined>,
		ClusterState: FormControl<ClusterMetadataClusterState | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateClusterListEntryFormGroup() {
		return new FormGroup<ClusterListEntryFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined),
			ClusterState: new FormControl<ClusterMetadataClusterState | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClustersRequest {
		MaxResults?: number | null;
		NextToken?: string | null;
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
		NextToken?: string | null;
	}
	export interface ListCompatibleImagesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCompatibleImagesResultFormGroup() {
		return new FormGroup<ListCompatibleImagesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A JSON-formatted object that describes a compatible Amazon Machine Image (AMI), including the ID and name for a Snowball Edge AMI. This AMI is compatible with the device's physical hardware requirements, and it should be able to be run in an SBE1 instance on the device. */
	export interface CompatibleImage {
		AmiId?: string | null;
		Name?: string | null;
	}

	/** A JSON-formatted object that describes a compatible Amazon Machine Image (AMI), including the ID and name for a Snowball Edge AMI. This AMI is compatible with the device's physical hardware requirements, and it should be able to be run in an SBE1 instance on the device. */
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
		NextToken?: string | null;
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
		NextToken?: string | null;
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
		NextToken?: string | null;
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

	export interface UpdateClusterResult {
	}
	export interface UpdateClusterResultFormProperties {
	}
	export function CreateUpdateClusterResultFormGroup() {
		return new FormGroup<UpdateClusterResultFormProperties>({
		});

	}

	export interface UpdateClusterRequest {
		ClusterId: string;
		RoleARN?: string | null;
		Description?: string | null;

		/** Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job. */
		Resources?: JobResource;
		AddressId?: string | null;
		ShippingOption?: CreateClusterRequestShippingOption | null;

		/** <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
		Notification?: Notification;
		ForwardingAddressId?: string | null;
	}
	export interface UpdateClusterRequestFormProperties {
		ClusterId: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		AddressId: FormControl<string | null | undefined>,
		ShippingOption: FormControl<CreateClusterRequestShippingOption | null | undefined>,
		ForwardingAddressId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateClusterRequestFormGroup() {
		return new FormGroup<UpdateClusterRequestFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			AddressId: new FormControl<string | null | undefined>(undefined),
			ShippingOption: new FormControl<CreateClusterRequestShippingOption | null | undefined>(undefined),
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
		JobId: string;
		RoleARN?: string | null;

		/** <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
		Notification?: Notification;

		/** Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job. */
		Resources?: JobResource;
		AddressId?: string | null;
		ShippingOption?: CreateClusterRequestShippingOption | null;
		Description?: string | null;
		SnowballCapacityPreference?: CreateJobRequestSnowballCapacityPreference | null;
		ForwardingAddressId?: string | null;
	}
	export interface UpdateJobRequestFormProperties {
		JobId: FormControl<string | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
		AddressId: FormControl<string | null | undefined>,
		ShippingOption: FormControl<CreateClusterRequestShippingOption | null | undefined>,
		Description: FormControl<string | null | undefined>,
		SnowballCapacityPreference: FormControl<CreateJobRequestSnowballCapacityPreference | null | undefined>,
		ForwardingAddressId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateJobRequestFormGroup() {
		return new FormGroup<UpdateJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			AddressId: new FormControl<string | null | undefined>(undefined),
			ShippingOption: new FormControl<CreateClusterRequestShippingOption | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			SnowballCapacityPreference: new FormControl<CreateJobRequestSnowballCapacityPreference | null | undefined>(undefined),
			ForwardingAddressId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClusterState { AwaitingQuorum = 0, Pending = 1, InUse = 2, Complete = 3, Cancelled = 4 }

	export enum JobType { IMPORT = 0, EXPORT = 1, LOCAL_USE = 2 }

	export enum SnowballType { STANDARD = 0, EDGE = 1, EDGE_C = 2, EDGE_CG = 3, EDGE_S = 4 }

	export enum ShippingOption { SECOND_DAY = 0, NEXT_DAY = 1, EXPRESS = 2, STANDARD = 3 }

	export enum SnowballCapacity { T50 = 0, T80 = 1, T100 = 2, T42 = 3, T98 = 4, NoPreference = 5 }

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
		 * Creates an address for a Snowball to be shipped to. In most regions, addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. If the address is invalid or unsupported, then an exception is thrown.
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
		 * Creates a job to import or export data between Amazon S3 and your on-premises data center. Your AWS account must have the right trust policies and permissions in place to create a job for Snowball. If you're creating a job for a node in a cluster, you only need to provide the <code>clusterId</code> value; the other job attributes are inherited from the cluster.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.CreateJob
		 * @return {CreateJobResult} Success
		 */
		CreateJob(requestBody: CreateJobRequest): Observable<CreateJobResult> {
			return this.http.post<CreateJobResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.CreateJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Returns a link to an Amazon S3 presigned URL for the manifest file associated with the specified <code>JobId</code> value. You can access the manifest file for up to 60 minutes after this request has been made. To access the manifest file after 60 minutes have passed, you'll have to make another call to the <code>GetJobManifest</code> action.</p> <p>The manifest is an encrypted file that you can download after your job enters the <code>WithCustomer</code> status. The manifest is decrypted by using the <code>UnlockCode</code> code value, when you pass both values to the Snowball through the Snowball client when the client is started for the first time.</p> <p>As a best practice, we recommend that you don't save a copy of an <code>UnlockCode</code> value in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snowball associated with that job.</p> <p>The credentials of a given job, including its manifest file and unlock code, expire 90 days after the job is created.</p>
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest
		 * @return {GetJobManifestResult} Success
		 */
		GetJobManifest(requestBody: GetJobManifestRequest): Observable<GetJobManifestResult> {
			return this.http.post<GetJobManifestResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.GetJobManifest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the <code>UnlockCode</code> code value for the specified job. A particular <code>UnlockCode</code> value can be accessed for up to 90 days after the associated job has been created.</p> <p>The <code>UnlockCode</code> value is a 29-character code with 25 alphanumeric characters and 4 hyphens. This code is used to decrypt the manifest file when it is passed along with the manifest to the Snowball through the Snowball client when the client is started for the first time.</p> <p>As a best practice, we recommend that you don't save a copy of the <code>UnlockCode</code> in the same location as the manifest file for that job. Saving these separately helps prevent unauthorized parties from gaining access to the Snowball associated with that job.</p>
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode
		 * @return {GetJobUnlockCodeResult} Success
		 */
		GetJobUnlockCode(requestBody: GetJobUnlockCodeRequest): Observable<GetJobUnlockCodeResult> {
			return this.http.post<GetJobUnlockCodeResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.GetJobUnlockCode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the Snowball service limit for your account, and also the number of Snowballs your account has in use.</p> <p>The default service limit for the number of Snowballs that you can have at one time is 1. If you want to increase your service limit, contact AWS Support.</p>
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
		 * @return {ListClusterJobsResult} Success
		 */
		ListClusterJobs(requestBody: ListClusterJobsRequest): Observable<ListClusterJobsResult> {
			return this.http.post<ListClusterJobsResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.ListClusterJobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of <code>ClusterListEntry</code> objects of the specified length. Each <code>ClusterListEntry</code> object contains a cluster's state, a cluster's ID, and other important status information.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.ListClusters
		 * @return {ListClustersResult} Success
		 */
		ListClusters(requestBody: ListClustersRequest): Observable<ListClustersResult> {
			return this.http.post<ListClustersResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.ListClusters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This action returns a list of the different Amazon EC2 Amazon Machine Images (AMIs) that are owned by your AWS account that would be supported for use on a Snowball Edge device. Currently, supported AMIs are based on the CentOS 7 (x86_64) - with Updates HVM, Ubuntu Server 14.04 LTS (HVM), and Ubuntu 16.04 LTS - Xenial (HVM) images, available on the AWS Marketplace.
		 * Post #X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages
		 * @return {ListCompatibleImagesResult} Success
		 */
		ListCompatibleImages(requestBody: ListCompatibleImagesRequest): Observable<ListCompatibleImagesResult> {
			return this.http.post<ListCompatibleImagesResult>(this.baseUri + '#X-Amz-Target=AWSIESnowballJobManagementService.ListCompatibleImages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
	}

	export enum CancelClusterX_Amz_Target { AWSIESnowballJobManagementService_CancelCluster = 0 }

	export enum CancelJobX_Amz_Target { AWSIESnowballJobManagementService_CancelJob = 0 }

	export enum CreateAddressX_Amz_Target { AWSIESnowballJobManagementService_CreateAddress = 0 }

	export enum CreateClusterX_Amz_Target { AWSIESnowballJobManagementService_CreateCluster = 0 }

	export enum CreateJobX_Amz_Target { AWSIESnowballJobManagementService_CreateJob = 0 }

	export enum DescribeAddressX_Amz_Target { AWSIESnowballJobManagementService_DescribeAddress = 0 }

	export enum DescribeAddressesX_Amz_Target { AWSIESnowballJobManagementService_DescribeAddresses = 0 }

	export enum DescribeClusterX_Amz_Target { AWSIESnowballJobManagementService_DescribeCluster = 0 }

	export enum DescribeJobX_Amz_Target { AWSIESnowballJobManagementService_DescribeJob = 0 }

	export enum GetJobManifestX_Amz_Target { AWSIESnowballJobManagementService_GetJobManifest = 0 }

	export enum GetJobUnlockCodeX_Amz_Target { AWSIESnowballJobManagementService_GetJobUnlockCode = 0 }

	export enum GetSnowballUsageX_Amz_Target { AWSIESnowballJobManagementService_GetSnowballUsage = 0 }

	export enum GetSoftwareUpdatesX_Amz_Target { AWSIESnowballJobManagementService_GetSoftwareUpdates = 0 }

	export enum ListClusterJobsX_Amz_Target { AWSIESnowballJobManagementService_ListClusterJobs = 0 }

	export enum ListClustersX_Amz_Target { AWSIESnowballJobManagementService_ListClusters = 0 }

	export enum ListCompatibleImagesX_Amz_Target { AWSIESnowballJobManagementService_ListCompatibleImages = 0 }

	export enum ListJobsX_Amz_Target { AWSIESnowballJobManagementService_ListJobs = 0 }

	export enum UpdateClusterX_Amz_Target { AWSIESnowballJobManagementService_UpdateCluster = 0 }

	export enum UpdateJobX_Amz_Target { AWSIESnowballJobManagementService_UpdateJob = 0 }

}

