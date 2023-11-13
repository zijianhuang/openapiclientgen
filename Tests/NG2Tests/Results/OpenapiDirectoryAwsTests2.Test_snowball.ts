import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CancelClusterResult {
	}

	export interface CancelClusterRequest {
		ClusterId: string;
	}

	export interface KMSRequestFailedException {
	}

	export interface InvalidJobStateException {
	}

	export interface InvalidResourceException {
	}

	export interface CancelJobResult {
	}

	export interface CancelJobRequest {
		JobId: string;
	}

	export interface CreateAddressResult {
		AddressId?: string | null;
	}

	export interface CreateAddressRequest {

		/**
		 * The address that you want the Snowball or Snowballs associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown.
		 * Required
		 */
		Address: Address;
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

	export interface InvalidAddressException {
	}

	export interface UnsupportedAddressException {
	}

	export interface CreateClusterResult {
		ClusterId?: string | null;
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
		Notification?: Notification | null;
		ForwardingAddressId?: string | null;

		/** The tax documents required in your AWS Region. */
		TaxDocuments?: TaxDocuments | null;
	}

	export enum CreateClusterRequestJobType { IMPORT = 0, EXPORT = 1, LOCAL_USE = 2 }


	/** Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job. */
	export interface JobResource {
		S3Resources?: Array<S3Resource> | null;
		LambdaResources?: Array<LambdaResource> | null;
		Ec2AmiResources?: Array<Ec2AmiResource> | null;
	}


	/** Each <code>S3Resource</code> object represents an Amazon S3 bucket that your transferred data will be exported from or imported into. For export jobs, this object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted. */
	export interface S3Resource {
		BucketArn?: string | null;

		/** Contains a key range. For export jobs, a <code>S3Resource</code> object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted. */
		KeyRange?: KeyRange | null;
	}


	/** Contains a key range. For export jobs, a <code>S3Resource</code> object can have an optional <code>KeyRange</code> value. The length of the range is defined at job creation, and has either an inclusive <code>BeginMarker</code>, an inclusive <code>EndMarker</code>, or both. Ranges are UTF-8 binary sorted. */
	export interface KeyRange {
		BeginMarker?: string | null;
		EndMarker?: string | null;
	}


	/** Identifies  */
	export interface LambdaResource {
		LambdaArn?: string | null;
		EventTriggers?: Array<EventTriggerDefinition> | null;
	}


	/** The container for the <a>EventTriggerDefinition$EventResourceARN</a>. */
	export interface EventTriggerDefinition {
		EventResourceARN?: string | null;
	}


	/** A JSON-formatted object that contains the IDs for an Amazon Machine Image (AMI), including the Amazon EC2 AMI ID and the Snowball Edge AMI ID. Each AMI has these two IDs to simplify identifying the AMI in both the AWS Cloud and on the device. */
	export interface Ec2AmiResource {
		AmiId: string;
		SnowballAmiId?: string | null;
	}

	export enum CreateClusterRequestSnowballType { STANDARD = 0, EDGE = 1, EDGE_C = 2, EDGE_CG = 3, EDGE_S = 4 }

	export enum CreateClusterRequestShippingOption { SECOND_DAY = 0, NEXT_DAY = 1, EXPRESS = 2, STANDARD = 3 }


	/** <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
	export interface Notification {
		SnsTopicARN?: string | null;
		JobStatesToNotify?: Array<JobState> | null;
		NotifyAll?: boolean | null;
	}

	export enum JobState { New = 0, PreparingAppliance = 1, PreparingShipment = 2, InTransitToCustomer = 3, WithCustomer = 4, InTransitToAWS = 5, WithAWSSortingFacility = 6, WithAWS = 7, InProgress = 8, Complete = 9, Cancelled = 10, Listing = 11, Pending = 12 }


	/** The tax documents required in your AWS Region. */
	export interface TaxDocuments {

		/** The tax documents required in AWS Regions in India. */
		IND?: INDTaxDocuments | null;
	}


	/** The tax documents required in AWS Regions in India. */
	export interface INDTaxDocuments {
		GSTIN?: string | null;
	}

	export interface InvalidInputCombinationException {
	}

	export interface Ec2RequestFailedException {
	}

	export interface CreateJobResult {
		JobId?: string | null;
	}

	export interface CreateJobRequest {
		JobType?: CreateClusterRequestJobType | null;

		/** Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job. */
		Resources?: JobResource | null;
		Description?: string | null;
		AddressId?: string | null;
		KmsKeyARN?: string | null;
		RoleARN?: string | null;
		SnowballCapacityPreference?: CreateJobRequestSnowballCapacityPreference | null;
		ShippingOption?: CreateClusterRequestShippingOption | null;

		/** <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
		Notification?: Notification | null;
		ClusterId?: string | null;
		SnowballType?: CreateClusterRequestSnowballType | null;
		ForwardingAddressId?: string | null;

		/** The tax documents required in your AWS Region. */
		TaxDocuments?: TaxDocuments | null;
	}

	export enum CreateJobRequestSnowballCapacityPreference { T50 = 0, T80 = 1, T100 = 2, T42 = 3, T98 = 4, NoPreference = 5 }

	export interface ClusterLimitExceededException {
	}

	export interface DescribeAddressResult {

		/** The address that you want the Snowball or Snowballs associated with a specific job to be shipped to. Addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. Although no individual elements of the <code>Address</code> are required, if the address is invalid or unsupported, then an exception is thrown. */
		Address?: Address | null;
	}

	export interface DescribeAddressRequest {
		AddressId: string;
	}

	export interface DescribeAddressesResult {
		Addresses?: Array<Address> | null;
		NextToken?: string | null;
	}

	export interface DescribeAddressesRequest {
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface InvalidNextTokenException {
	}

	export interface DescribeClusterResult {

		/** Contains metadata about a specific cluster. */
		ClusterMetadata?: ClusterMetadata | null;
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
		Resources?: JobResource | null;
		AddressId?: string | null;
		ShippingOption?: CreateClusterRequestShippingOption | null;

		/** <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
		Notification?: Notification | null;
		ForwardingAddressId?: string | null;

		/** The tax documents required in your AWS Region. */
		TaxDocuments?: TaxDocuments | null;
	}

	export enum ClusterMetadataClusterState { AwaitingQuorum = 0, Pending = 1, InUse = 2, Complete = 3, Cancelled = 4 }

	export interface DescribeClusterRequest {
		ClusterId: string;
	}

	export interface DescribeJobResult {

		/** Contains information about a specific job including shipping information, job status, and other important metadata. This information is returned as a part of the response syntax of the <code>DescribeJob</code> action. */
		JobMetadata?: JobMetadata | null;
		SubJobMetadata?: Array<JobMetadata> | null;
	}


	/** Contains information about a specific job including shipping information, job status, and other important metadata. This information is returned as a part of the response syntax of the <code>DescribeJob</code> action. */
	export interface JobMetadata {
		JobId?: string | null;
		JobState?: JobState | null;
		JobType?: CreateClusterRequestJobType | null;
		SnowballType?: CreateClusterRequestSnowballType | null;
		CreationDate?: Date | null;

		/** Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job. */
		Resources?: JobResource | null;
		Description?: string | null;
		KmsKeyARN?: string | null;
		RoleARN?: string | null;
		AddressId?: string | null;

		/** A job's shipping information, including inbound and outbound tracking numbers and shipping speed options. */
		ShippingDetails?: ShippingDetails | null;
		SnowballCapacityPreference?: CreateJobRequestSnowballCapacityPreference | null;

		/** <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
		Notification?: Notification | null;

		/** Defines the real-time status of a Snowball's data transfer while the device is at AWS. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs. */
		DataTransferProgress?: DataTransfer | null;

		/** <p>Contains job logs. Whenever Snowball is used to import data into or export data out of Amazon S3, you'll have the option of downloading a PDF job report. Job logs are returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type. The job logs can be accessed for up to 60 minutes after this request has been made. To access any of the job logs after 60 minutes have passed, you'll have to make another call to the <code>DescribeJob</code> action.</p> <p>For import jobs, the PDF job report becomes available at the end of the import process. For export jobs, your job report typically becomes available while the Snowball for your job part is being delivered to you.</p> <p>The job report provides you insight into the state of your Amazon S3 data transfer. The report includes details about your job or job part for your records.</p> <p>For deeper visibility into the status of your transferred objects, you can look at the two associated logs: a success log and a failure log. The logs are saved in comma-separated value (CSV) format, and the name of each log includes the ID of the job or job part that the log describes.</p> */
		JobLogInfo?: JobLogs | null;
		ClusterId?: string | null;
		ForwardingAddressId?: string | null;

		/** The tax documents required in your AWS Region. */
		TaxDocuments?: TaxDocuments | null;
	}


	/** A job's shipping information, including inbound and outbound tracking numbers and shipping speed options. */
	export interface ShippingDetails {
		ShippingOption?: CreateClusterRequestShippingOption | null;

		/** The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or outbound shipment. */
		InboundShipment?: Shipment | null;

		/** The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or outbound shipment. */
		OutboundShipment?: Shipment | null;
	}


	/** The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or outbound shipment. */
	export interface Shipment {
		Status?: string | null;
		TrackingNumber?: string | null;
	}


	/** Defines the real-time status of a Snowball's data transfer while the device is at AWS. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs. */
	export interface DataTransfer {
		BytesTransferred?: number | null;
		ObjectsTransferred?: number | null;
		TotalBytes?: number | null;
		TotalObjects?: number | null;
	}


	/** <p>Contains job logs. Whenever Snowball is used to import data into or export data out of Amazon S3, you'll have the option of downloading a PDF job report. Job logs are returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type. The job logs can be accessed for up to 60 minutes after this request has been made. To access any of the job logs after 60 minutes have passed, you'll have to make another call to the <code>DescribeJob</code> action.</p> <p>For import jobs, the PDF job report becomes available at the end of the import process. For export jobs, your job report typically becomes available while the Snowball for your job part is being delivered to you.</p> <p>The job report provides you insight into the state of your Amazon S3 data transfer. The report includes details about your job or job part for your records.</p> <p>For deeper visibility into the status of your transferred objects, you can look at the two associated logs: a success log and a failure log. The logs are saved in comma-separated value (CSV) format, and the name of each log includes the ID of the job or job part that the log describes.</p> */
	export interface JobLogs {
		JobCompletionReportURI?: string | null;
		JobSuccessLogURI?: string | null;
		JobFailureLogURI?: string | null;
	}

	export interface DescribeJobRequest {
		JobId: string;
	}

	export interface GetJobManifestResult {
		ManifestURI?: string | null;
	}

	export interface GetJobManifestRequest {
		JobId: string;
	}

	export interface GetJobUnlockCodeResult {
		UnlockCode?: string | null;
	}

	export interface GetJobUnlockCodeRequest {
		JobId: string;
	}

	export interface GetSnowballUsageResult {
		SnowballLimit?: number | null;
		SnowballsInUse?: number | null;
	}

	export interface GetSnowballUsageRequest {
	}

	export interface GetSoftwareUpdatesResult {
		UpdatesURI?: string | null;
	}

	export interface GetSoftwareUpdatesRequest {
		JobId: string;
	}

	export interface ListClusterJobsResult {
		JobListEntries?: Array<JobListEntry> | null;
		NextToken?: string | null;
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

	export interface ListClusterJobsRequest {
		ClusterId: string;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface ListClustersResult {
		ClusterListEntries?: Array<ClusterListEntry> | null;
		NextToken?: string | null;
	}


	/** Contains a cluster's state, a cluster's ID, and other important information. */
	export interface ClusterListEntry {
		ClusterId?: string | null;
		ClusterState?: ClusterMetadataClusterState | null;
		CreationDate?: Date | null;
		Description?: string | null;
	}

	export interface ListClustersRequest {
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface ListCompatibleImagesResult {
		CompatibleImages?: Array<CompatibleImage> | null;
		NextToken?: string | null;
	}


	/** A JSON-formatted object that describes a compatible Amazon Machine Image (AMI), including the ID and name for a Snowball Edge AMI. This AMI is compatible with the device's physical hardware requirements, and it should be able to be run in an SBE1 instance on the device. */
	export interface CompatibleImage {
		AmiId?: string | null;
		Name?: string | null;
	}

	export interface ListCompatibleImagesRequest {
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface ListJobsResult {
		JobListEntries?: Array<JobListEntry> | null;
		NextToken?: string | null;
	}

	export interface ListJobsRequest {
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface UpdateClusterResult {
	}

	export interface UpdateClusterRequest {
		ClusterId: string;
		RoleARN?: string | null;
		Description?: string | null;

		/** Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job. */
		Resources?: JobResource | null;
		AddressId?: string | null;
		ShippingOption?: CreateClusterRequestShippingOption | null;

		/** <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
		Notification?: Notification | null;
		ForwardingAddressId?: string | null;
	}

	export interface UpdateJobResult {
	}

	export interface UpdateJobRequest {
		JobId: string;
		RoleARN?: string | null;

		/** <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p> */
		Notification?: Notification | null;

		/** Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job. */
		Resources?: JobResource | null;
		AddressId?: string | null;
		ShippingOption?: CreateClusterRequestShippingOption | null;
		Description?: string | null;
		SnowballCapacityPreference?: CreateJobRequestSnowballCapacityPreference | null;
		ForwardingAddressId?: string | null;
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

