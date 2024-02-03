import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AccountListSupportedImagesResult {
		'odata.nextLink'?: string | null;
		value?: Array<ImageInformation>;
	}
	export interface AccountListSupportedImagesResultFormProperties {
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreateAccountListSupportedImagesResultFormGroup() {
		return new FormGroup<AccountListSupportedImagesResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageInformation {
		batchSupportEndOfLife?: Date | null;

		/** Not every capability of the Image is listed. Capabilities in this list are considered of special interest and are generally related to integration with other features in the Azure Batch service. */
		capabilities?: Array<string>;

		/** Required */
		imageReference: ImageReference;

		/** Required */
		nodeAgentSKUId: string;

		/** Required */
		osType: ImageInformationOsType;

		/** Required */
		verificationType: ImageInformationVerificationType;
	}
	export interface ImageInformationFormProperties {
		batchSupportEndOfLife: FormControl<Date | null | undefined>,

		/** Required */
		nodeAgentSKUId: FormControl<string | null | undefined>,

		/** Required */
		osType: FormControl<ImageInformationOsType | null | undefined>,

		/** Required */
		verificationType: FormControl<ImageInformationVerificationType | null | undefined>,
	}
	export function CreateImageInformationFormGroup() {
		return new FormGroup<ImageInformationFormProperties>({
			batchSupportEndOfLife: new FormControl<Date | null | undefined>(undefined),
			nodeAgentSKUId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			osType: new FormControl<ImageInformationOsType | null | undefined>(undefined, [Validators.required]),
			verificationType: new FormControl<ImageInformationVerificationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ImageInformationOsType { linux = 'linux', windows = 'windows' }

	export enum ImageInformationVerificationType { verified = 'verified', unverified = 'unverified' }

	export interface AffinityInformation {

		/**
		 * You can pass the affinityId of a Node to indicate that this Task needs to run on that Compute Node. Note that this is just a soft affinity. If the target Compute Node is busy or unavailable at the time the Task is scheduled, then the Task will be scheduled elsewhere.
		 * Required
		 */
		affinityId: string;
	}
	export interface AffinityInformationFormProperties {

		/**
		 * You can pass the affinityId of a Node to indicate that this Task needs to run on that Compute Node. Note that this is just a soft affinity. If the target Compute Node is busy or unavailable at the time the Task is scheduled, then the Task will be scheduled elsewhere.
		 * Required
		 */
		affinityId: FormControl<string | null | undefined>,
	}
	export function CreateAffinityInformationFormGroup() {
		return new FormGroup<AffinityInformationFormProperties>({
			affinityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ApplicationListResult {
		'odata.nextLink'?: string | null;
		value?: Array<ApplicationSummary>;
	}
	export interface ApplicationListResultFormProperties {
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreateApplicationListResultFormGroup() {
		return new FormGroup<ApplicationListResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApplicationSummary {

		/** Required */
		displayName: string;

		/** Required */
		id: string;

		/** Required */
		versions: Array<string>;
	}
	export interface ApplicationSummaryFormProperties {

		/** Required */
		displayName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateApplicationSummaryFormGroup() {
		return new FormGroup<ApplicationSummaryFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ApplicationPackageReference {

		/** Required */
		applicationId: string;

		/** If this is omitted on a Pool, and no default version is specified for this application, the request fails with the error code InvalidApplicationPackageReferences and HTTP status code 409. If this is omitted on a Task, and no default version is specified for this application, the Task fails with a pre-processing error. */
		version?: string | null;
	}
	export interface ApplicationPackageReferenceFormProperties {

		/** Required */
		applicationId: FormControl<string | null | undefined>,

		/** If this is omitted on a Pool, and no default version is specified for this application, the request fails with the error code InvalidApplicationPackageReferences and HTTP status code 409. If this is omitted on a Task, and no default version is specified for this application, the Task fails with a pre-processing error. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateApplicationPackageReferenceFormGroup() {
		return new FormGroup<ApplicationPackageReferenceFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthenticationTokenSettings {

		/** The authentication token grants access to a limited set of Batch service operations. Currently the only supported value for the access property is 'job', which grants access to all operations related to the Job which contains the Task. */
		access?: Array<string>;
	}
	export interface AuthenticationTokenSettingsFormProperties {
	}
	export function CreateAuthenticationTokenSettingsFormGroup() {
		return new FormGroup<AuthenticationTokenSettingsFormProperties>({
		});

	}

	export interface AutoPoolSpecification {

		/** The Batch service assigns each auto Pool a unique identifier on creation. To distinguish between Pools created for different purposes, you can specify this element to add a prefix to the ID that is assigned. The prefix can be up to 20 characters long. */
		autoPoolIdPrefix?: string | null;

		/** If false, the Batch service deletes the Pool once its lifetime (as determined by the poolLifetimeOption setting) expires; that is, when the Job or Job Schedule completes. If true, the Batch service does not delete the Pool automatically. It is up to the user to delete auto Pools created with this option. */
		keepAlive?: boolean | null;
		pool?: PoolSpecification;

		/** Required */
		poolLifetimeOption: AutoPoolSpecificationPoolLifetimeOption;
	}
	export interface AutoPoolSpecificationFormProperties {

		/** The Batch service assigns each auto Pool a unique identifier on creation. To distinguish between Pools created for different purposes, you can specify this element to add a prefix to the ID that is assigned. The prefix can be up to 20 characters long. */
		autoPoolIdPrefix: FormControl<string | null | undefined>,

		/** If false, the Batch service deletes the Pool once its lifetime (as determined by the poolLifetimeOption setting) expires; that is, when the Job or Job Schedule completes. If true, the Batch service does not delete the Pool automatically. It is up to the user to delete auto Pools created with this option. */
		keepAlive: FormControl<boolean | null | undefined>,

		/** Required */
		poolLifetimeOption: FormControl<AutoPoolSpecificationPoolLifetimeOption | null | undefined>,
	}
	export function CreateAutoPoolSpecificationFormGroup() {
		return new FormGroup<AutoPoolSpecificationFormProperties>({
			autoPoolIdPrefix: new FormControl<string | null | undefined>(undefined),
			keepAlive: new FormControl<boolean | null | undefined>(undefined),
			poolLifetimeOption: new FormControl<AutoPoolSpecificationPoolLifetimeOption | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AutoPoolSpecificationPoolLifetimeOption { jobschedule = 'jobschedule', job = 'job' }

	export interface AutoScaleRun {
		error?: AutoScaleRunError;

		/** Each variable value is returned in the form $variable=value, and variables are separated by semicolons. */
		results?: string | null;

		/** Required */
		timestamp: Date;
	}
	export interface AutoScaleRunFormProperties {

		/** Each variable value is returned in the form $variable=value, and variables are separated by semicolons. */
		results: FormControl<string | null | undefined>,

		/** Required */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateAutoScaleRunFormGroup() {
		return new FormGroup<AutoScaleRunFormProperties>({
			results: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AutoScaleRunError {
		code?: string | null;
		message?: string | null;
		values?: Array<NameValuePair>;
	}
	export interface AutoScaleRunErrorFormProperties {
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateAutoScaleRunErrorFormGroup() {
		return new FormGroup<AutoScaleRunErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NameValuePair {
		name?: string | null;
		value?: string | null;
	}
	export interface NameValuePairFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateNameValuePairFormGroup() {
		return new FormGroup<NameValuePairFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AutoUserSpecification {
		elevationLevel?: AutoUserSpecificationElevationLevel | null;

		/** The default value is pool. If the pool is running Windows a value of Task should be specified if stricter isolation between tasks is required. For example, if the task mutates the registry in a way which could impact other tasks, or if certificates have been specified on the pool which should not be accessible by normal tasks but should be accessible by StartTasks. */
		scope?: AutoUserSpecificationScope | null;
	}
	export interface AutoUserSpecificationFormProperties {
		elevationLevel: FormControl<AutoUserSpecificationElevationLevel | null | undefined>,

		/** The default value is pool. If the pool is running Windows a value of Task should be specified if stricter isolation between tasks is required. For example, if the task mutates the registry in a way which could impact other tasks, or if certificates have been specified on the pool which should not be accessible by normal tasks but should be accessible by StartTasks. */
		scope: FormControl<AutoUserSpecificationScope | null | undefined>,
	}
	export function CreateAutoUserSpecificationFormGroup() {
		return new FormGroup<AutoUserSpecificationFormProperties>({
			elevationLevel: new FormControl<AutoUserSpecificationElevationLevel | null | undefined>(undefined),
			scope: new FormControl<AutoUserSpecificationScope | null | undefined>(undefined),
		});

	}

	export enum AutoUserSpecificationElevationLevel { nonadmin = 'nonadmin', admin = 'admin' }

	export enum AutoUserSpecificationScope { task = 'task', pool = 'pool' }

	export interface AzureBlobFileSystemConfiguration {

		/** This property is mutually exclusive with sasKey and one must be specified. */
		accountKey?: string | null;

		/** Required */
		accountName: string;

		/** These are 'net use' options in Windows and 'mount' options in Linux. */
		blobfuseOptions?: string | null;

		/** Required */
		containerName: string;

		/**
		 * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
		 * Required
		 */
		relativeMountPath: string;

		/** This property is mutually exclusive with accountKey and one must be specified. */
		sasKey?: string | null;
	}
	export interface AzureBlobFileSystemConfigurationFormProperties {

		/** This property is mutually exclusive with sasKey and one must be specified. */
		accountKey: FormControl<string | null | undefined>,

		/** Required */
		accountName: FormControl<string | null | undefined>,

		/** These are 'net use' options in Windows and 'mount' options in Linux. */
		blobfuseOptions: FormControl<string | null | undefined>,

		/** Required */
		containerName: FormControl<string | null | undefined>,

		/**
		 * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
		 * Required
		 */
		relativeMountPath: FormControl<string | null | undefined>,

		/** This property is mutually exclusive with accountKey and one must be specified. */
		sasKey: FormControl<string | null | undefined>,
	}
	export function CreateAzureBlobFileSystemConfigurationFormGroup() {
		return new FormGroup<AzureBlobFileSystemConfigurationFormProperties>({
			accountKey: new FormControl<string | null | undefined>(undefined),
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			blobfuseOptions: new FormControl<string | null | undefined>(undefined),
			containerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			relativeMountPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sasKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AzureFileShareConfiguration {

		/** Required */
		accountKey: string;

		/** Required */
		accountName: string;

		/**
		 * This is of the form 'https://{account}.file.core.windows.net/'.
		 * Required
		 */
		azureFileUrl: string;

		/** These are 'net use' options in Windows and 'mount' options in Linux. */
		mountOptions?: string | null;

		/**
		 * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
		 * Required
		 */
		relativeMountPath: string;
	}
	export interface AzureFileShareConfigurationFormProperties {

		/** Required */
		accountKey: FormControl<string | null | undefined>,

		/** Required */
		accountName: FormControl<string | null | undefined>,

		/**
		 * This is of the form 'https://{account}.file.core.windows.net/'.
		 * Required
		 */
		azureFileUrl: FormControl<string | null | undefined>,

		/** These are 'net use' options in Windows and 'mount' options in Linux. */
		mountOptions: FormControl<string | null | undefined>,

		/**
		 * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
		 * Required
		 */
		relativeMountPath: FormControl<string | null | undefined>,
	}
	export function CreateAzureFileShareConfigurationFormGroup() {
		return new FormGroup<AzureFileShareConfigurationFormProperties>({
			accountKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			azureFileUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mountOptions: new FormControl<string | null | undefined>(undefined),
			relativeMountPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchError {
		code?: string | null;
		message?: ErrorMessage;
		values?: Array<BatchErrorDetail>;
	}
	export interface BatchErrorFormProperties {
		code: FormControl<string | null | undefined>,
	}
	export function CreateBatchErrorFormGroup() {
		return new FormGroup<BatchErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchErrorDetail {
		key?: string | null;
		value?: string | null;
	}
	export interface BatchErrorDetailFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateBatchErrorDetailFormGroup() {
		return new FormGroup<BatchErrorDetailFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CIFSMountConfiguration {

		/** These are 'net use' options in Windows and 'mount' options in Linux. */
		mountOptions?: string | null;

		/** Required */
		password: string;

		/**
		 * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
		 * Required
		 */
		relativeMountPath: string;

		/** Required */
		source: string;

		/** Required */
		username: string;
	}
	export interface CIFSMountConfigurationFormProperties {

		/** These are 'net use' options in Windows and 'mount' options in Linux. */
		mountOptions: FormControl<string | null | undefined>,

		/** Required */
		password: FormControl<string | null | undefined>,

		/**
		 * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
		 * Required
		 */
		relativeMountPath: FormControl<string | null | undefined>,

		/** Required */
		source: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function CreateCIFSMountConfigurationFormGroup() {
		return new FormGroup<CIFSMountConfigurationFormProperties>({
			mountOptions: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			relativeMountPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The default value for caching is none. For information about the caching options see: https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/. */
	export enum CachingType { none = 'none', readonly = 'readonly', readwrite = 'readwrite' }


	/** A Certificate that can be installed on Compute Nodes and can be used to authenticate operations on the machine. */
	export interface Certificate {
		deleteCertificateError?: DeleteCertificateError;
		previousState?: CertificatePreviousState | null;

		/** This property is not set if the Certificate is in its initial Active state. */
		previousStateTransitionTime?: Date | null;
		publicData?: string | null;
		state?: CertificatePreviousState | null;
		stateTransitionTime?: Date | null;
		thumbprint?: string | null;
		thumbprintAlgorithm?: string | null;
		url?: string | null;
	}

	/** A Certificate that can be installed on Compute Nodes and can be used to authenticate operations on the machine. */
	export interface CertificateFormProperties {
		previousState: FormControl<CertificatePreviousState | null | undefined>,

		/** This property is not set if the Certificate is in its initial Active state. */
		previousStateTransitionTime: FormControl<Date | null | undefined>,
		publicData: FormControl<string | null | undefined>,
		state: FormControl<CertificatePreviousState | null | undefined>,
		stateTransitionTime: FormControl<Date | null | undefined>,
		thumbprint: FormControl<string | null | undefined>,
		thumbprintAlgorithm: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			previousState: new FormControl<CertificatePreviousState | null | undefined>(undefined),
			previousStateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			publicData: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<CertificatePreviousState | null | undefined>(undefined),
			stateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined),
			thumbprintAlgorithm: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CertificatePreviousState { active = 'active', deleting = 'deleting', deletefailed = 'deletefailed' }

	export interface CertificateAddParameter {
		certificateFormat?: CertificateAddParameterCertificateFormat | null;

		/** Required */
		data: string;

		/** This is required if the Certificate format is pfx. It should be omitted if the Certificate format is cer. */
		password?: string | null;

		/** Required */
		thumbprint: string;

		/** Required */
		thumbprintAlgorithm: string;
	}
	export interface CertificateAddParameterFormProperties {
		certificateFormat: FormControl<CertificateAddParameterCertificateFormat | null | undefined>,

		/** Required */
		data: FormControl<string | null | undefined>,

		/** This is required if the Certificate format is pfx. It should be omitted if the Certificate format is cer. */
		password: FormControl<string | null | undefined>,

		/** Required */
		thumbprint: FormControl<string | null | undefined>,

		/** Required */
		thumbprintAlgorithm: FormControl<string | null | undefined>,
	}
	export function CreateCertificateAddParameterFormGroup() {
		return new FormGroup<CertificateAddParameterFormProperties>({
			certificateFormat: new FormControl<CertificateAddParameterCertificateFormat | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			thumbprintAlgorithm: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CertificateAddParameterCertificateFormat { pfx = 'pfx', cer = 'cer' }

	export interface CertificateListResult {
		'odata.nextLink'?: string | null;
		value?: Array<Certificate>;
	}
	export interface CertificateListResultFormProperties {
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreateCertificateListResultFormGroup() {
		return new FormGroup<CertificateListResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CertificateReference {

		/** The default value is currentuser. This property is applicable only for Pools configured with Windows Compute Nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows Image reference). For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory. */
		storeLocation?: CertificateReferenceStoreLocation | null;

		/** This property is applicable only for Pools configured with Windows Compute Nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows Image reference). Common store names include: My, Root, CA, Trust, Disallowed, TrustedPeople, TrustedPublisher, AuthRoot, AddressBook, but any custom store name can also be used. The default value is My. */
		storeName?: string | null;

		/** Required */
		thumbprint: string;

		/** Required */
		thumbprintAlgorithm: string;

		/** You can specify more than one visibility in this collection. The default is all Accounts. */
		visibility?: Array<string>;
	}
	export interface CertificateReferenceFormProperties {

		/** The default value is currentuser. This property is applicable only for Pools configured with Windows Compute Nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows Image reference). For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory. */
		storeLocation: FormControl<CertificateReferenceStoreLocation | null | undefined>,

		/** This property is applicable only for Pools configured with Windows Compute Nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows Image reference). Common store names include: My, Root, CA, Trust, Disallowed, TrustedPeople, TrustedPublisher, AuthRoot, AddressBook, but any custom store name can also be used. The default value is My. */
		storeName: FormControl<string | null | undefined>,

		/** Required */
		thumbprint: FormControl<string | null | undefined>,

		/** Required */
		thumbprintAlgorithm: FormControl<string | null | undefined>,
	}
	export function CreateCertificateReferenceFormGroup() {
		return new FormGroup<CertificateReferenceFormProperties>({
			storeLocation: new FormControl<CertificateReferenceStoreLocation | null | undefined>(undefined),
			storeName: new FormControl<string | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			thumbprintAlgorithm: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CertificateReferenceStoreLocation { currentuser = 'currentuser', localmachine = 'localmachine' }

	export enum CertificateState { active = 'active', deleting = 'deleting', deletefailed = 'deletefailed' }

	export interface CloudJob {

		/** Individual Tasks can override an environment setting specified here by specifying the same setting name with a different value. */
		commonEnvironmentSettings?: Array<EnvironmentSetting>;
		constraints?: JobConstraints;
		creationTime?: Date | null;
		displayName?: string | null;

		/** This is an opaque string. You can use it to detect whether the Job has changed between requests. In particular, you can be pass the ETag when updating a Job to specify that your changes should take effect only if nobody else has modified the Job in the meantime. */
		eTag?: string | null;
		executionInfo?: JobExecutionInformation;

		/** The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an Account that differ only by case). */
		id?: string | null;

		/** The Job Manager Task is automatically started when the Job is created. The Batch service tries to schedule the Job Manager Task before any other Tasks in the Job. When shrinking a Pool, the Batch service tries to preserve Nodes where Job Manager Tasks are running for as long as possible (that is, Compute Nodes running 'normal' Tasks are removed before Compute Nodes running Job Manager Tasks). When a Job Manager Task fails and needs to be restarted, the system tries to schedule it at the highest priority. If there are no idle Compute Nodes available, the system may terminate one of the running Tasks in the Pool and return it to the queue in order to make room for the Job Manager Task to restart. Note that a Job Manager Task in one Job does not have priority over Tasks in other Jobs. Across Jobs, only Job level priorities are observed. For example, if a Job Manager in a priority 0 Job needs to be restarted, it will not displace Tasks of a priority 1 Job. Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. */
		jobManagerTask?: JobManagerTask;

		/** You can use Job Preparation to prepare a Node to run Tasks for the Job. Activities commonly performed in Job Preparation include: Downloading common resource files used by all the Tasks in the Job. The Job Preparation Task can download these common resource files to the shared location on the Node. (AZ_BATCH_NODE_ROOT_DIR\shared), or starting a local service on the Node so that all Tasks of that Job can communicate with it. If the Job Preparation Task fails (that is, exhausts its retry count before exiting with exit code 0), Batch will not run Tasks of this Job on the Node. The Compute Node remains ineligible to run Tasks of this Job until it is reimaged. The Compute Node remains active and can be used for other Jobs. The Job Preparation Task can run multiple times on the same Node. Therefore, you should write the Job Preparation Task to handle re-execution. If the Node is rebooted, the Job Preparation Task is run again on the Compute Node before scheduling any other Task of the Job, if rerunOnNodeRebootAfterSuccess is true or if the Job Preparation Task did not previously complete. If the Node is reimaged, the Job Preparation Task is run again before scheduling any Task of the Job. Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. */
		jobPreparationTask?: JobPreparationTask;

		/** The Job Release Task runs when the Job ends, because of one of the following: The user calls the Terminate Job API, or the Delete Job API while the Job is still active, the Job's maximum wall clock time constraint is reached, and the Job is still active, or the Job's Job Manager Task completed, and the Job is configured to terminate when the Job Manager completes. The Job Release Task runs on each Node where Tasks of the Job have run and the Job Preparation Task ran and completed. If you reimage a Node after it has run the Job Preparation Task, and the Job ends without any further Tasks of the Job running on that Node (and hence the Job Preparation Task does not re-run), then the Job Release Task does not run on that Compute Node. If a Node reboots while the Job Release Task is still running, the Job Release Task runs again when the Compute Node starts up. The Job is not marked as complete until all Job Release Tasks have completed. The Job Release Task runs in the background. It does not occupy a scheduling slot; that is, it does not count towards the maxTasksPerNode limit specified on the Pool. */
		jobReleaseTask?: JobReleaseTask;

		/** This is the last time at which the Job level data, such as the Job state or priority, changed. It does not factor in task-level changes such as adding new Tasks or Tasks changing state. */
		lastModified?: Date | null;

		/** The Batch service does not assign any meaning to metadata; it is solely for the use of user code. */
		metadata?: Array<MetadataItem>;
		networkConfiguration?: JobNetworkConfiguration;
		onAllTasksComplete?: CloudJobOnAllTasksComplete | null;

		/** A Task is considered to have failed if has a failureInfo. A failureInfo is set if the Task completes with a non-zero exit code after exhausting its retry count, or if there was an error starting the Task, for example due to a resource file download error. The default is noaction. */
		onTaskFailure?: CloudJobOnTaskFailure | null;
		poolInfo?: PoolInformation;
		previousState?: CloudJobPreviousState | null;

		/** This property is not set if the Job is in its initial Active state. */
		previousStateTransitionTime?: Date | null;

		/** Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. */
		priority?: number | null;
		state?: CloudJobPreviousState | null;
		stateTransitionTime?: Date | null;
		stats?: JobStatistics;
		url?: string | null;
		usesTaskDependencies?: boolean | null;
	}
	export interface CloudJobFormProperties {
		creationTime: FormControl<Date | null | undefined>,
		displayName: FormControl<string | null | undefined>,

		/** This is an opaque string. You can use it to detect whether the Job has changed between requests. In particular, you can be pass the ETag when updating a Job to specify that your changes should take effect only if nobody else has modified the Job in the meantime. */
		eTag: FormControl<string | null | undefined>,

		/** The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an Account that differ only by case). */
		id: FormControl<string | null | undefined>,

		/** This is the last time at which the Job level data, such as the Job state or priority, changed. It does not factor in task-level changes such as adding new Tasks or Tasks changing state. */
		lastModified: FormControl<Date | null | undefined>,
		onAllTasksComplete: FormControl<CloudJobOnAllTasksComplete | null | undefined>,

		/** A Task is considered to have failed if has a failureInfo. A failureInfo is set if the Task completes with a non-zero exit code after exhausting its retry count, or if there was an error starting the Task, for example due to a resource file download error. The default is noaction. */
		onTaskFailure: FormControl<CloudJobOnTaskFailure | null | undefined>,
		previousState: FormControl<CloudJobPreviousState | null | undefined>,

		/** This property is not set if the Job is in its initial Active state. */
		previousStateTransitionTime: FormControl<Date | null | undefined>,

		/** Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. */
		priority: FormControl<number | null | undefined>,
		state: FormControl<CloudJobPreviousState | null | undefined>,
		stateTransitionTime: FormControl<Date | null | undefined>,
		url: FormControl<string | null | undefined>,
		usesTaskDependencies: FormControl<boolean | null | undefined>,
	}
	export function CreateCloudJobFormGroup() {
		return new FormGroup<CloudJobFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			eTag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			onAllTasksComplete: new FormControl<CloudJobOnAllTasksComplete | null | undefined>(undefined),
			onTaskFailure: new FormControl<CloudJobOnTaskFailure | null | undefined>(undefined),
			previousState: new FormControl<CloudJobPreviousState | null | undefined>(undefined),
			previousStateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<CloudJobPreviousState | null | undefined>(undefined),
			stateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			usesTaskDependencies: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EnvironmentSetting {

		/** Required */
		name: string;
		value?: string | null;
	}
	export interface EnvironmentSettingFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentSettingFormGroup() {
		return new FormGroup<EnvironmentSettingFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Batch service does not assign any meaning to this metadata; it is solely for the use of user code. */
	export interface MetadataItem {

		/** Required */
		name: string;

		/** Required */
		value: string;
	}

	/** The Batch service does not assign any meaning to this metadata; it is solely for the use of user code. */
	export interface MetadataItemFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateMetadataItemFormGroup() {
		return new FormGroup<MetadataItemFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CloudJobOnAllTasksComplete { noaction = 'noaction', terminatejob = 'terminatejob' }

	export enum CloudJobOnTaskFailure { noaction = 'noaction', performexitoptionsjobaction = 'performexitoptionsjobaction' }

	export enum CloudJobPreviousState { active = 'active', disabling = 'disabling', disabled = 'disabled', enabling = 'enabling', terminating = 'terminating', completed = 'completed', deleting = 'deleting' }

	export interface CloudJobListPreparationAndReleaseTaskStatusResult {
		'odata.nextLink'?: string | null;
		value?: Array<JobPreparationAndReleaseTaskExecutionInformation>;
	}
	export interface CloudJobListPreparationAndReleaseTaskStatusResultFormProperties {
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreateCloudJobListPreparationAndReleaseTaskStatusResultFormGroup() {
		return new FormGroup<CloudJobListPreparationAndReleaseTaskStatusResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobPreparationAndReleaseTaskExecutionInformation {
		jobPreparationTaskExecutionInfo?: JobPreparationTaskExecutionInformation;
		jobReleaseTaskExecutionInfo?: JobReleaseTaskExecutionInformation;
		nodeId?: string | null;
		nodeUrl?: string | null;
		poolId?: string | null;
	}
	export interface JobPreparationAndReleaseTaskExecutionInformationFormProperties {
		nodeId: FormControl<string | null | undefined>,
		nodeUrl: FormControl<string | null | undefined>,
		poolId: FormControl<string | null | undefined>,
	}
	export function CreateJobPreparationAndReleaseTaskExecutionInformationFormGroup() {
		return new FormGroup<JobPreparationAndReleaseTaskExecutionInformationFormProperties>({
			nodeId: new FormControl<string | null | undefined>(undefined),
			nodeUrl: new FormControl<string | null | undefined>(undefined),
			poolId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CloudJobListResult {
		'odata.nextLink'?: string | null;
		value?: Array<CloudJob>;
	}
	export interface CloudJobListResultFormProperties {
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreateCloudJobListResultFormGroup() {
		return new FormGroup<CloudJobListResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CloudJobSchedule {
		creationTime?: Date | null;
		displayName?: string | null;

		/** This is an opaque string. You can use it to detect whether the Job Schedule has changed between requests. In particular, you can be pass the ETag with an Update Job Schedule request to specify that your changes should take effect only if nobody else has modified the schedule in the meantime. */
		eTag?: string | null;
		executionInfo?: JobScheduleExecutionInformation;
		id?: string | null;
		jobSpecification?: JobSpecification;

		/** This is the last time at which the schedule level data, such as the Job specification or recurrence information, changed. It does not factor in job-level changes such as new Jobs being created or Jobs changing state. */
		lastModified?: Date | null;

		/** The Batch service does not assign any meaning to metadata; it is solely for the use of user code. */
		metadata?: Array<MetadataItem>;
		previousState?: CloudJobSchedulePreviousState | null;

		/** This property is not present if the Job Schedule is in its initial active state. */
		previousStateTransitionTime?: Date | null;
		schedule?: Schedule;
		state?: CloudJobSchedulePreviousState | null;
		stateTransitionTime?: Date | null;
		stats?: JobScheduleStatistics;
		url?: string | null;
	}
	export interface CloudJobScheduleFormProperties {
		creationTime: FormControl<Date | null | undefined>,
		displayName: FormControl<string | null | undefined>,

		/** This is an opaque string. You can use it to detect whether the Job Schedule has changed between requests. In particular, you can be pass the ETag with an Update Job Schedule request to specify that your changes should take effect only if nobody else has modified the schedule in the meantime. */
		eTag: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** This is the last time at which the schedule level data, such as the Job specification or recurrence information, changed. It does not factor in job-level changes such as new Jobs being created or Jobs changing state. */
		lastModified: FormControl<Date | null | undefined>,
		previousState: FormControl<CloudJobSchedulePreviousState | null | undefined>,

		/** This property is not present if the Job Schedule is in its initial active state. */
		previousStateTransitionTime: FormControl<Date | null | undefined>,
		state: FormControl<CloudJobSchedulePreviousState | null | undefined>,
		stateTransitionTime: FormControl<Date | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateCloudJobScheduleFormGroup() {
		return new FormGroup<CloudJobScheduleFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			eTag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			previousState: new FormControl<CloudJobSchedulePreviousState | null | undefined>(undefined),
			previousStateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<CloudJobSchedulePreviousState | null | undefined>(undefined),
			stateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CloudJobSchedulePreviousState { active = 'active', completed = 'completed', disabled = 'disabled', terminating = 'terminating', deleting = 'deleting' }

	export interface CloudJobScheduleListResult {
		'odata.nextLink'?: string | null;
		value?: Array<CloudJobSchedule>;
	}
	export interface CloudJobScheduleListResultFormProperties {
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreateCloudJobScheduleListResultFormGroup() {
		return new FormGroup<CloudJobScheduleListResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CloudPool {
		allocationState?: CloudPoolAllocationState | null;
		allocationStateTransitionTime?: Date | null;

		/** The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, Pool creation will fail. */
		applicationLicenses?: Array<string>;

		/** Changes to Package references affect all new Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. There is a maximum of 10 Package references on any given Pool. */
		applicationPackageReferences?: Array<ApplicationPackageReference>;

		/** This property is set only if the Pool automatically scales, i.e. enableAutoScale is true. */
		autoScaleEvaluationInterval?: string | null;

		/** This property is set only if the Pool automatically scales, i.e. enableAutoScale is true. */
		autoScaleFormula?: string | null;
		autoScaleRun?: AutoScaleRun;

		/** For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location. For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory. */
		certificateReferences?: Array<CertificateReference>;
		cloudServiceConfiguration?: CloudServiceConfiguration;
		creationTime?: Date | null;
		currentDedicatedNodes?: number | null;

		/** Low-priority Compute Nodes which have been preempted are included in this count. */
		currentLowPriorityNodes?: number | null;

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName?: string | null;

		/** This is an opaque string. You can use it to detect whether the Pool has changed between requests. In particular, you can be pass the ETag when updating a Pool to specify that your changes should take effect only if nobody else has modified the Pool in the meantime. */
		eTag?: string | null;

		/** If false, at least one of targetDedicateNodes and targetLowPriorityNodes must be specified. If true, the autoScaleFormula property is required and the Pool automatically resizes according to the formula. The default value is false. */
		enableAutoScale?: boolean | null;

		/** This imposes restrictions on which Compute Nodes can be assigned to the Pool. Specifying this value can reduce the chance of the requested number of Compute Nodes to be allocated in the Pool. */
		enableInterNodeCommunication?: boolean | null;

		/** The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an Account that differ only by case). */
		id?: string | null;

		/** This is the last time at which the Pool level data, such as the targetDedicatedNodes or enableAutoscale settings, changed. It does not factor in node-level changes such as a Compute Node changing state. */
		lastModified?: Date | null;

		/** The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the Pool or 256. */
		maxTasksPerNode?: number | null;
		metadata?: Array<MetadataItem>;

		/** This supports Azure Files, NFS, CIFS/SMB, and Blobfuse. */
		mountConfiguration?: Array<MountConfiguration>;

		/** The network configuration for a Pool. */
		networkConfiguration?: NetworkConfiguration;

		/** This property is set only if one or more errors occurred during the last Pool resize, and only when the Pool allocationState is Steady. */
		resizeErrors?: Array<ResizeError>;

		/** This is the timeout for the most recent resize operation. (The initial sizing when the Pool is created counts as a resize.) The default value is 15 minutes. */
		resizeTimeout?: string | null;

		/** Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. In some cases the StartTask may be re-run even though the Compute Node was not rebooted. Special care should be taken to avoid StartTasks which create breakaway process or install/launch services from the StartTask working directory, as this will block Batch from being able to re-run the StartTask. */
		startTask?: StartTask;
		state?: CloudPoolState | null;
		stateTransitionTime?: Date | null;
		stats?: PoolStatistics;
		targetDedicatedNodes?: number | null;
		targetLowPriorityNodes?: number | null;
		taskSchedulingPolicy?: TaskSchedulingPolicy;
		url?: string | null;
		userAccounts?: Array<UserAccount>;
		virtualMachineConfiguration?: VirtualMachineConfiguration;

		/** For information about available sizes of virtual machines in Pools, see Choose a VM size for Compute Nodes in an Azure Batch Pool (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes). */
		vmSize?: string | null;
	}
	export interface CloudPoolFormProperties {
		allocationState: FormControl<CloudPoolAllocationState | null | undefined>,
		allocationStateTransitionTime: FormControl<Date | null | undefined>,

		/** This property is set only if the Pool automatically scales, i.e. enableAutoScale is true. */
		autoScaleEvaluationInterval: FormControl<string | null | undefined>,

		/** This property is set only if the Pool automatically scales, i.e. enableAutoScale is true. */
		autoScaleFormula: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		currentDedicatedNodes: FormControl<number | null | undefined>,

		/** Low-priority Compute Nodes which have been preempted are included in this count. */
		currentLowPriorityNodes: FormControl<number | null | undefined>,

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName: FormControl<string | null | undefined>,

		/** This is an opaque string. You can use it to detect whether the Pool has changed between requests. In particular, you can be pass the ETag when updating a Pool to specify that your changes should take effect only if nobody else has modified the Pool in the meantime. */
		eTag: FormControl<string | null | undefined>,

		/** If false, at least one of targetDedicateNodes and targetLowPriorityNodes must be specified. If true, the autoScaleFormula property is required and the Pool automatically resizes according to the formula. The default value is false. */
		enableAutoScale: FormControl<boolean | null | undefined>,

		/** This imposes restrictions on which Compute Nodes can be assigned to the Pool. Specifying this value can reduce the chance of the requested number of Compute Nodes to be allocated in the Pool. */
		enableInterNodeCommunication: FormControl<boolean | null | undefined>,

		/** The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an Account that differ only by case). */
		id: FormControl<string | null | undefined>,

		/** This is the last time at which the Pool level data, such as the targetDedicatedNodes or enableAutoscale settings, changed. It does not factor in node-level changes such as a Compute Node changing state. */
		lastModified: FormControl<Date | null | undefined>,

		/** The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the Pool or 256. */
		maxTasksPerNode: FormControl<number | null | undefined>,

		/** This is the timeout for the most recent resize operation. (The initial sizing when the Pool is created counts as a resize.) The default value is 15 minutes. */
		resizeTimeout: FormControl<string | null | undefined>,
		state: FormControl<CloudPoolState | null | undefined>,
		stateTransitionTime: FormControl<Date | null | undefined>,
		targetDedicatedNodes: FormControl<number | null | undefined>,
		targetLowPriorityNodes: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,

		/** For information about available sizes of virtual machines in Pools, see Choose a VM size for Compute Nodes in an Azure Batch Pool (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes). */
		vmSize: FormControl<string | null | undefined>,
	}
	export function CreateCloudPoolFormGroup() {
		return new FormGroup<CloudPoolFormProperties>({
			allocationState: new FormControl<CloudPoolAllocationState | null | undefined>(undefined),
			allocationStateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			autoScaleEvaluationInterval: new FormControl<string | null | undefined>(undefined),
			autoScaleFormula: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			currentDedicatedNodes: new FormControl<number | null | undefined>(undefined),
			currentLowPriorityNodes: new FormControl<number | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			eTag: new FormControl<string | null | undefined>(undefined),
			enableAutoScale: new FormControl<boolean | null | undefined>(undefined),
			enableInterNodeCommunication: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			maxTasksPerNode: new FormControl<number | null | undefined>(undefined),
			resizeTimeout: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<CloudPoolState | null | undefined>(undefined),
			stateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			targetDedicatedNodes: new FormControl<number | null | undefined>(undefined),
			targetLowPriorityNodes: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			vmSize: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CloudPoolAllocationState { steady = 'steady', resizing = 'resizing', stopping = 'stopping' }

	export interface MountConfiguration {
		azureBlobFileSystemConfiguration?: AzureBlobFileSystemConfiguration;
		azureFileShareConfiguration?: AzureFileShareConfiguration;
		cifsMountConfiguration?: CIFSMountConfiguration;
		nfsMountConfiguration?: NFSMountConfiguration;
	}
	export interface MountConfigurationFormProperties {
	}
	export function CreateMountConfigurationFormGroup() {
		return new FormGroup<MountConfigurationFormProperties>({
		});

	}

	export interface ResizeError {
		code?: string | null;
		message?: string | null;
		values?: Array<NameValuePair>;
	}
	export interface ResizeErrorFormProperties {
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateResizeErrorFormGroup() {
		return new FormGroup<ResizeErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CloudPoolState { active = 'active', deleting = 'deleting' }

	export interface UserAccount {
		elevationLevel?: AutoUserSpecificationElevationLevel | null;
		linuxUserConfiguration?: LinuxUserConfiguration;

		/** Required */
		name: string;

		/** Required */
		password: string;
		windowsUserConfiguration?: WindowsUserConfiguration;
	}
	export interface UserAccountFormProperties {
		elevationLevel: FormControl<AutoUserSpecificationElevationLevel | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		password: FormControl<string | null | undefined>,
	}
	export function CreateUserAccountFormGroup() {
		return new FormGroup<UserAccountFormProperties>({
			elevationLevel: new FormControl<AutoUserSpecificationElevationLevel | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CloudPoolListResult {
		'odata.nextLink'?: string | null;
		value?: Array<CloudPool>;
	}
	export interface CloudPoolListResultFormProperties {
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreateCloudPoolListResultFormGroup() {
		return new FormGroup<CloudPoolListResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CloudServiceConfiguration {

		/**
		 * Possible values are:
		 * 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1.
		 * 3 - OS Family 3, equivalent to Windows Server 2012.
		 * 4 - OS Family 4, equivalent to Windows Server 2012 R2.
		 * 5 - OS Family 5, equivalent to Windows Server 2016.
		 * 6 - OS Family 6, equivalent to Windows Server 2019. For more information, see Azure Guest OS Releases (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
		 * Required
		 */
		osFamily: string;

		/** The default value is * which specifies the latest operating system version for the specified OS family. */
		osVersion?: string | null;
	}
	export interface CloudServiceConfigurationFormProperties {

		/**
		 * Possible values are:
		 * 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1.
		 * 3 - OS Family 3, equivalent to Windows Server 2012.
		 * 4 - OS Family 4, equivalent to Windows Server 2012 R2.
		 * 5 - OS Family 5, equivalent to Windows Server 2016.
		 * 6 - OS Family 6, equivalent to Windows Server 2019. For more information, see Azure Guest OS Releases (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
		 * Required
		 */
		osFamily: FormControl<string | null | undefined>,

		/** The default value is * which specifies the latest operating system version for the specified OS family. */
		osVersion: FormControl<string | null | undefined>,
	}
	export function CreateCloudServiceConfigurationFormGroup() {
		return new FormGroup<CloudServiceConfigurationFormProperties>({
			osFamily: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			osVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. */
	export interface CloudTask {
		affinityInfo?: AffinityInformation;

		/** Application packages are downloaded and deployed to a shared directory, not the Task working directory. Therefore, if a referenced package is already on the Node, and is up to date, then it is not re-downloaded; the existing copy on the Compute Node is used. If a referenced Package cannot be installed, for example because the package has been deleted or because download failed, the Task fails. */
		applicationPackageReferences?: Array<ApplicationPackageReference>;
		authenticationTokenSettings?: AuthenticationTokenSettings;

		/** For multi-instance Tasks, the command line is executed as the primary Task, after the primary Task and all subtasks have finished executing the coordination command line. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables). */
		commandLine?: string | null;
		constraints?: TaskConstraints;
		containerSettings?: TaskContainerSettings;
		creationTime?: Date | null;
		dependsOn?: TaskDependencies;

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName?: string | null;

		/** This is an opaque string. You can use it to detect whether the Task has changed between requests. In particular, you can be pass the ETag when updating a Task to specify that your changes should take effect only if nobody else has modified the Task in the meantime. */
		eTag?: string | null;
		environmentSettings?: Array<EnvironmentSetting>;
		executionInfo?: TaskExecutionInformation;
		exitConditions?: ExitConditions;

		/** The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. */
		id?: string | null;
		lastModified?: Date | null;

		/** Multi-instance Tasks are commonly used to support MPI Tasks. In the MPI case, if any of the subtasks fail (for example due to exiting with a non-zero exit code) the entire multi-instance Task fails. The multi-instance Task is then terminated and retried, up to its retry limit. */
		multiInstanceSettings?: MultiInstanceSettings;
		nodeInfo?: ComputeNodeInformation;

		/** For multi-instance Tasks, the files will only be uploaded from the Compute Node on which the primary Task is executed. */
		outputFiles?: Array<OutputFile>;
		previousState?: CloudTaskPreviousState | null;

		/** This property is not set if the Task is in its initial Active state. */
		previousStateTransitionTime?: Date | null;

		/** For multi-instance Tasks, the resource files will only be downloaded to the Compute Node on which the primary Task is executed. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. */
		resourceFiles?: Array<ResourceFile>;
		state?: CloudTaskPreviousState | null;
		stateTransitionTime?: Date | null;
		stats?: TaskStatistics;
		url?: string | null;

		/** Specify either the userName or autoUser property, but not both. */
		userIdentity?: UserIdentity;
	}

	/** Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. */
	export interface CloudTaskFormProperties {

		/** For multi-instance Tasks, the command line is executed as the primary Task, after the primary Task and all subtasks have finished executing the coordination command line. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables). */
		commandLine: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName: FormControl<string | null | undefined>,

		/** This is an opaque string. You can use it to detect whether the Task has changed between requests. In particular, you can be pass the ETag when updating a Task to specify that your changes should take effect only if nobody else has modified the Task in the meantime. */
		eTag: FormControl<string | null | undefined>,

		/** The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. */
		id: FormControl<string | null | undefined>,
		lastModified: FormControl<Date | null | undefined>,
		previousState: FormControl<CloudTaskPreviousState | null | undefined>,

		/** This property is not set if the Task is in its initial Active state. */
		previousStateTransitionTime: FormControl<Date | null | undefined>,
		state: FormControl<CloudTaskPreviousState | null | undefined>,
		stateTransitionTime: FormControl<Date | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateCloudTaskFormGroup() {
		return new FormGroup<CloudTaskFormProperties>({
			commandLine: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			eTag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			previousState: new FormControl<CloudTaskPreviousState | null | undefined>(undefined),
			previousStateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<CloudTaskPreviousState | null | undefined>(undefined),
			stateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OutputFile {

		/** Required */
		destination: OutputFileDestination;

		/**
		 * Both relative and absolute paths are supported. Relative paths are relative to the Task working directory. The following wildcards are supported: * matches 0 or more characters (for example pattern abc* would match abc or abcdef), ** matches any directory, ? matches any single character, [abc] matches one character in the brackets, and [a-c] matches one character in the range. Brackets can include a negation to match any character not specified (for example [!abc] matches any character but a, b, or c). If a file name starts with "." it is ignored by default but may be matched by specifying it explicitly (for example *.gif will not match .a.gif, but .*.gif will). A simple example: **\*.txt matches any file that does not start in '.' and ends with .txt in the Task working directory or any subdirectory. If the filename contains a wildcard character it can be escaped using brackets (for example abc[*] would match a file named abc*). Note that both \ and / are treated as directory separators on Windows, but only / is on Linux. Environment variables (%var% on Windows or $var on Linux) are expanded prior to the pattern being applied.
		 * Required
		 */
		filePattern: string;

		/** Required */
		uploadOptions: OutputFileUploadOptions;
	}
	export interface OutputFileFormProperties {

		/**
		 * Both relative and absolute paths are supported. Relative paths are relative to the Task working directory. The following wildcards are supported: * matches 0 or more characters (for example pattern abc* would match abc or abcdef), ** matches any directory, ? matches any single character, [abc] matches one character in the brackets, and [a-c] matches one character in the range. Brackets can include a negation to match any character not specified (for example [!abc] matches any character but a, b, or c). If a file name starts with "." it is ignored by default but may be matched by specifying it explicitly (for example *.gif will not match .a.gif, but .*.gif will). A simple example: **\*.txt matches any file that does not start in '.' and ends with .txt in the Task working directory or any subdirectory. If the filename contains a wildcard character it can be escaped using brackets (for example abc[*] would match a file named abc*). Note that both \ and / are treated as directory separators on Windows, but only / is on Linux. Environment variables (%var% on Windows or $var on Linux) are expanded prior to the pattern being applied.
		 * Required
		 */
		filePattern: FormControl<string | null | undefined>,
	}
	export function CreateOutputFileFormGroup() {
		return new FormGroup<OutputFileFormProperties>({
			filePattern: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CloudTaskPreviousState { active = 'active', preparing = 'preparing', running = 'running', completed = 'completed' }

	export interface ResourceFile {

		/** The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. */
		autoStorageContainerName?: string | null;

		/** The property is valid only when autoStorageContainerName or storageContainerUrl is used. This prefix can be a partial filename or a subdirectory. If a prefix is not specified, all the files in the container will be downloaded. */
		blobPrefix?: string | null;

		/** This property applies only to files being downloaded to Linux Compute Nodes. It will be ignored if it is specified for a resourceFile which will be downloaded to a Windows Compute Node. If this property is not specified for a Linux Compute Node, then a default value of 0770 is applied to the file. */
		fileMode?: string | null;

		/** If the httpUrl property is specified, the filePath is required and describes the path which the file will be downloaded to, including the filename. Otherwise, if the autoStorageContainerName or storageContainerUrl property is specified, filePath is optional and is the directory to download the files to. In the case where filePath is used as a directory, any directory structure already associated with the input data will be retained in full and appended to the specified filePath directory. The specified relative path cannot break out of the Task's working directory (for example by using '..'). */
		filePath?: string | null;

		/** The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. If the URL points to Azure Blob Storage, it must be readable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, or set the ACL for the blob or its container to allow public access. */
		httpUrl?: string | null;

		/** The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. This URL must be readable and listable using anonymous access; that is, the Batch service does not present any credentials when downloading blobs from the container. There are two ways to get such a URL for a container in Azure storage: include a Shared Access Signature (SAS) granting read and list permissions on the container, or set the ACL for the container to allow public access. */
		storageContainerUrl?: string | null;
	}
	export interface ResourceFileFormProperties {

		/** The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. */
		autoStorageContainerName: FormControl<string | null | undefined>,

		/** The property is valid only when autoStorageContainerName or storageContainerUrl is used. This prefix can be a partial filename or a subdirectory. If a prefix is not specified, all the files in the container will be downloaded. */
		blobPrefix: FormControl<string | null | undefined>,

		/** This property applies only to files being downloaded to Linux Compute Nodes. It will be ignored if it is specified for a resourceFile which will be downloaded to a Windows Compute Node. If this property is not specified for a Linux Compute Node, then a default value of 0770 is applied to the file. */
		fileMode: FormControl<string | null | undefined>,

		/** If the httpUrl property is specified, the filePath is required and describes the path which the file will be downloaded to, including the filename. Otherwise, if the autoStorageContainerName or storageContainerUrl property is specified, filePath is optional and is the directory to download the files to. In the case where filePath is used as a directory, any directory structure already associated with the input data will be retained in full and appended to the specified filePath directory. The specified relative path cannot break out of the Task's working directory (for example by using '..'). */
		filePath: FormControl<string | null | undefined>,

		/** The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. If the URL points to Azure Blob Storage, it must be readable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, or set the ACL for the blob or its container to allow public access. */
		httpUrl: FormControl<string | null | undefined>,

		/** The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. This URL must be readable and listable using anonymous access; that is, the Batch service does not present any credentials when downloading blobs from the container. There are two ways to get such a URL for a container in Azure storage: include a Shared Access Signature (SAS) granting read and list permissions on the container, or set the ACL for the container to allow public access. */
		storageContainerUrl: FormControl<string | null | undefined>,
	}
	export function CreateResourceFileFormGroup() {
		return new FormGroup<ResourceFileFormProperties>({
			autoStorageContainerName: new FormControl<string | null | undefined>(undefined),
			blobPrefix: new FormControl<string | null | undefined>(undefined),
			fileMode: new FormControl<string | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined),
			httpUrl: new FormControl<string | null | undefined>(undefined),
			storageContainerUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CloudTaskListResult {
		'odata.nextLink'?: string | null;
		value?: Array<CloudTask>;
	}
	export interface CloudTaskListResultFormProperties {
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreateCloudTaskListResultFormGroup() {
		return new FormGroup<CloudTaskListResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CloudTaskListSubtasksResult {
		value?: Array<SubtaskInformation>;
	}
	export interface CloudTaskListSubtasksResultFormProperties {
	}
	export function CreateCloudTaskListSubtasksResultFormGroup() {
		return new FormGroup<CloudTaskListSubtasksResultFormProperties>({
		});

	}

	export interface SubtaskInformation {
		containerInfo?: TaskContainerExecutionInformation;

		/** This property is set only if the subtask is in the Completed state. */
		endTime?: Date | null;

		/** This property is set only if the subtask is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the subtask (due to timeout, or user termination via the API) you may see an operating system-defined exit code. */
		exitCode?: number | null;
		failureInfo?: TaskFailureInformation;
		id?: number | null;
		nodeInfo?: ComputeNodeInformation;
		previousState?: SubtaskInformationPreviousState | null;

		/** This property is not set if the subtask is in its initial running state. */
		previousStateTransitionTime?: Date | null;
		result?: SubtaskInformationResult | null;
		startTime?: Date | null;
		state?: SubtaskInformationPreviousState | null;
		stateTransitionTime?: Date | null;
	}
	export interface SubtaskInformationFormProperties {

		/** This property is set only if the subtask is in the Completed state. */
		endTime: FormControl<Date | null | undefined>,

		/** This property is set only if the subtask is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the subtask (due to timeout, or user termination via the API) you may see an operating system-defined exit code. */
		exitCode: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		previousState: FormControl<SubtaskInformationPreviousState | null | undefined>,

		/** This property is not set if the subtask is in its initial running state. */
		previousStateTransitionTime: FormControl<Date | null | undefined>,
		result: FormControl<SubtaskInformationResult | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		state: FormControl<SubtaskInformationPreviousState | null | undefined>,
		stateTransitionTime: FormControl<Date | null | undefined>,
	}
	export function CreateSubtaskInformationFormGroup() {
		return new FormGroup<SubtaskInformationFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			previousState: new FormControl<SubtaskInformationPreviousState | null | undefined>(undefined),
			previousStateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			result: new FormControl<SubtaskInformationResult | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<SubtaskInformationPreviousState | null | undefined>(undefined),
			stateTransitionTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum SubtaskInformationPreviousState { preparing = 'preparing', running = 'running', completed = 'completed' }

	export enum SubtaskInformationResult { success = 'success', failure = 'failure' }

	export interface ComputeNode {

		/** Note that this is just a soft affinity. If the target Compute Node is busy or unavailable at the time the Task is scheduled, then the Task will be scheduled elsewhere. */
		affinityId?: string | null;

		/** This is the time when the Compute Node was initially allocated and doesn't change once set. It is not updated when the Compute Node is service healed or preempted. */
		allocationTime?: Date | null;

		/** For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location. For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory. */
		certificateReferences?: Array<CertificateReference>;
		endpointConfiguration?: ComputeNodeEndpointConfiguration;
		errors?: Array<ComputeNodeError>;

		/** Every Compute Node that is added to a Pool is assigned a unique ID. Whenever a Compute Node is removed from a Pool, all of its local files are deleted, and the ID is reclaimed and could be reused for new Compute Nodes. */
		id?: string | null;

		/** Every Compute Node that is added to a Pool is assigned a unique IP address. Whenever a Compute Node is removed from a Pool, all of its local files are deleted, and the IP address is reclaimed and could be reused for new Compute Nodes. */
		ipAddress?: string | null;
		isDedicated?: boolean | null;

		/** This property may not be present if the Compute Node state is unusable. */
		lastBootTime?: Date | null;

		/** The Batch Compute Node agent is a program that runs on each Compute Node in the Pool and provides Batch capability on the Compute Node. */
		nodeAgentInfo?: NodeAgentInformation;

		/** This property is present only if at least one Task has run on this Compute Node since it was assigned to the Pool. */
		recentTasks?: Array<TaskInformation>;
		runningTasksCount?: number | null;
		schedulingState?: ComputeNodeSchedulingState | null;

		/** Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. In some cases the StartTask may be re-run even though the Compute Node was not rebooted. Special care should be taken to avoid StartTasks which create breakaway process or install/launch services from the StartTask working directory, as this will block Batch from being able to re-run the StartTask. */
		startTask?: StartTask;
		startTaskInfo?: StartTaskInformation;

		/** The low-priority Compute Node has been preempted. Tasks which were running on the Compute Node when it was preempted will be rescheduled when another Compute Node becomes available. */
		state?: ComputeNodeState | null;
		stateTransitionTime?: Date | null;
		totalTasksRun?: number | null;
		totalTasksSucceeded?: number | null;
		url?: string | null;

		/** For information about available sizes of virtual machines in Pools, see Choose a VM size for Compute Nodes in an Azure Batch Pool (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes). */
		vmSize?: string | null;
	}
	export interface ComputeNodeFormProperties {

		/** Note that this is just a soft affinity. If the target Compute Node is busy or unavailable at the time the Task is scheduled, then the Task will be scheduled elsewhere. */
		affinityId: FormControl<string | null | undefined>,

		/** This is the time when the Compute Node was initially allocated and doesn't change once set. It is not updated when the Compute Node is service healed or preempted. */
		allocationTime: FormControl<Date | null | undefined>,

		/** Every Compute Node that is added to a Pool is assigned a unique ID. Whenever a Compute Node is removed from a Pool, all of its local files are deleted, and the ID is reclaimed and could be reused for new Compute Nodes. */
		id: FormControl<string | null | undefined>,

		/** Every Compute Node that is added to a Pool is assigned a unique IP address. Whenever a Compute Node is removed from a Pool, all of its local files are deleted, and the IP address is reclaimed and could be reused for new Compute Nodes. */
		ipAddress: FormControl<string | null | undefined>,
		isDedicated: FormControl<boolean | null | undefined>,

		/** This property may not be present if the Compute Node state is unusable. */
		lastBootTime: FormControl<Date | null | undefined>,
		runningTasksCount: FormControl<number | null | undefined>,
		schedulingState: FormControl<ComputeNodeSchedulingState | null | undefined>,

		/** The low-priority Compute Node has been preempted. Tasks which were running on the Compute Node when it was preempted will be rescheduled when another Compute Node becomes available. */
		state: FormControl<ComputeNodeState | null | undefined>,
		stateTransitionTime: FormControl<Date | null | undefined>,
		totalTasksRun: FormControl<number | null | undefined>,
		totalTasksSucceeded: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,

		/** For information about available sizes of virtual machines in Pools, see Choose a VM size for Compute Nodes in an Azure Batch Pool (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes). */
		vmSize: FormControl<string | null | undefined>,
	}
	export function CreateComputeNodeFormGroup() {
		return new FormGroup<ComputeNodeFormProperties>({
			affinityId: new FormControl<string | null | undefined>(undefined),
			allocationTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			isDedicated: new FormControl<boolean | null | undefined>(undefined),
			lastBootTime: new FormControl<Date | null | undefined>(undefined),
			runningTasksCount: new FormControl<number | null | undefined>(undefined),
			schedulingState: new FormControl<ComputeNodeSchedulingState | null | undefined>(undefined),
			state: new FormControl<ComputeNodeState | null | undefined>(undefined),
			stateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			totalTasksRun: new FormControl<number | null | undefined>(undefined),
			totalTasksSucceeded: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			vmSize: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ComputeNodeError {
		code?: string | null;
		errorDetails?: Array<NameValuePair>;
		message?: string | null;
	}
	export interface ComputeNodeErrorFormProperties {
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateComputeNodeErrorFormGroup() {
		return new FormGroup<ComputeNodeErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaskInformation {
		executionInfo?: TaskExecutionInformation;
		jobId?: string | null;
		subtaskId?: number | null;
		taskId?: string | null;

		/** Required */
		taskState: CloudTaskPreviousState;
		taskUrl?: string | null;
	}
	export interface TaskInformationFormProperties {
		jobId: FormControl<string | null | undefined>,
		subtaskId: FormControl<number | null | undefined>,
		taskId: FormControl<string | null | undefined>,

		/** Required */
		taskState: FormControl<CloudTaskPreviousState | null | undefined>,
		taskUrl: FormControl<string | null | undefined>,
	}
	export function CreateTaskInformationFormGroup() {
		return new FormGroup<TaskInformationFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			subtaskId: new FormControl<number | null | undefined>(undefined),
			taskId: new FormControl<string | null | undefined>(undefined),
			taskState: new FormControl<CloudTaskPreviousState | null | undefined>(undefined, [Validators.required]),
			taskUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ComputeNodeSchedulingState { enabled = 'enabled', disabled = 'disabled' }

	export enum ComputeNodeState { idle = 'idle', rebooting = 'rebooting', reimaging = 'reimaging', running = 'running', unusable = 'unusable', creating = 'creating', starting = 'starting', waitingforstarttask = 'waitingforstarttask', starttaskfailed = 'starttaskfailed', unknown = 'unknown', leavingpool = 'leavingpool', offline = 'offline', preempted = 'preempted' }


	/** The default value is requeue. */
	export enum ComputeNodeDeallocationOption { requeue = 'requeue', terminate = 'terminate', taskcompletion = 'taskcompletion', retaineddata = 'retaineddata' }

	export interface ComputeNodeEndpointConfiguration {

		/** Required */
		inboundEndpoints: Array<InboundEndpoint>;
	}
	export interface ComputeNodeEndpointConfigurationFormProperties {
	}
	export function CreateComputeNodeEndpointConfigurationFormGroup() {
		return new FormGroup<ComputeNodeEndpointConfigurationFormProperties>({
		});

	}

	export interface InboundEndpoint {

		/** Required */
		backendPort: number;

		/** Required */
		frontendPort: number;

		/** Required */
		name: string;

		/** Required */
		protocol: InboundEndpointProtocol;

		/** Required */
		publicFQDN: string;

		/** Required */
		publicIPAddress: string;
	}
	export interface InboundEndpointFormProperties {

		/** Required */
		backendPort: FormControl<number | null | undefined>,

		/** Required */
		frontendPort: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		protocol: FormControl<InboundEndpointProtocol | null | undefined>,

		/** Required */
		publicFQDN: FormControl<string | null | undefined>,

		/** Required */
		publicIPAddress: FormControl<string | null | undefined>,
	}
	export function CreateInboundEndpointFormGroup() {
		return new FormGroup<InboundEndpointFormProperties>({
			backendPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			frontendPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<InboundEndpointProtocol | null | undefined>(undefined, [Validators.required]),
			publicFQDN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			publicIPAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InboundEndpointProtocol { tcp = 'tcp', udp = 'udp' }

	export interface ComputeNodeGetRemoteLoginSettingsResult {

		/** Required */
		remoteLoginIPAddress: string;

		/** Required */
		remoteLoginPort: number;
	}
	export interface ComputeNodeGetRemoteLoginSettingsResultFormProperties {

		/** Required */
		remoteLoginIPAddress: FormControl<string | null | undefined>,

		/** Required */
		remoteLoginPort: FormControl<number | null | undefined>,
	}
	export function CreateComputeNodeGetRemoteLoginSettingsResultFormGroup() {
		return new FormGroup<ComputeNodeGetRemoteLoginSettingsResultFormProperties>({
			remoteLoginIPAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			remoteLoginPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ComputeNodeInformation {
		affinityId?: string | null;
		nodeId?: string | null;
		nodeUrl?: string | null;
		poolId?: string | null;
		taskRootDirectory?: string | null;
		taskRootDirectoryUrl?: string | null;
	}
	export interface ComputeNodeInformationFormProperties {
		affinityId: FormControl<string | null | undefined>,
		nodeId: FormControl<string | null | undefined>,
		nodeUrl: FormControl<string | null | undefined>,
		poolId: FormControl<string | null | undefined>,
		taskRootDirectory: FormControl<string | null | undefined>,
		taskRootDirectoryUrl: FormControl<string | null | undefined>,
	}
	export function CreateComputeNodeInformationFormGroup() {
		return new FormGroup<ComputeNodeInformationFormProperties>({
			affinityId: new FormControl<string | null | undefined>(undefined),
			nodeId: new FormControl<string | null | undefined>(undefined),
			nodeUrl: new FormControl<string | null | undefined>(undefined),
			poolId: new FormControl<string | null | undefined>(undefined),
			taskRootDirectory: new FormControl<string | null | undefined>(undefined),
			taskRootDirectoryUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ComputeNodeListResult {
		'odata.nextLink'?: string | null;
		value?: Array<ComputeNode>;
	}
	export interface ComputeNodeListResultFormProperties {
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreateComputeNodeListResultFormGroup() {
		return new FormGroup<ComputeNodeListResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ComputeNodeUser {

		/** If omitted, the default is 1 day from the current time. For Linux Compute Nodes, the expiryTime has a precision up to a day. */
		expiryTime?: Date | null;

		/** The default value is false. */
		isAdmin?: boolean | null;

		/** Required */
		name: string;

		/** The password is required for Windows Compute Nodes (those created with 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration' using a Windows Image reference). For Linux Compute Nodes, the password can optionally be specified along with the sshPublicKey property. */
		password?: string | null;

		/** The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux Compute Nodes. If this is specified for a Windows Compute Node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		sshPublicKey?: string | null;
	}
	export interface ComputeNodeUserFormProperties {

		/** If omitted, the default is 1 day from the current time. For Linux Compute Nodes, the expiryTime has a precision up to a day. */
		expiryTime: FormControl<Date | null | undefined>,

		/** The default value is false. */
		isAdmin: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** The password is required for Windows Compute Nodes (those created with 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration' using a Windows Image reference). For Linux Compute Nodes, the password can optionally be specified along with the sshPublicKey property. */
		password: FormControl<string | null | undefined>,

		/** The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux Compute Nodes. If this is specified for a Windows Compute Node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		sshPublicKey: FormControl<string | null | undefined>,
	}
	export function CreateComputeNodeUserFormGroup() {
		return new FormGroup<ComputeNodeUserFormProperties>({
			expiryTime: new FormControl<Date | null | undefined>(undefined),
			isAdmin: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined),
			sshPublicKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContainerConfiguration {

		/** This is the full Image reference, as would be specified to "docker pull". An Image will be sourced from the default Docker registry unless the Image is fully qualified with an alternative registry. */
		containerImageNames?: Array<string>;

		/** If any Images must be downloaded from a private registry which requires credentials, then those credentials must be provided here. */
		containerRegistries?: Array<ContainerRegistry>;

		/** Required */
		type: ContainerConfigurationType;
	}
	export interface ContainerConfigurationFormProperties {

		/** Required */
		type: FormControl<ContainerConfigurationType | null | undefined>,
	}
	export function CreateContainerConfigurationFormGroup() {
		return new FormGroup<ContainerConfigurationFormProperties>({
			type: new FormControl<ContainerConfigurationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ContainerRegistry {

		/** Required */
		password: string;

		/** If omitted, the default is "docker.io". */
		registryServer?: string | null;

		/** Required */
		username: string;
	}
	export interface ContainerRegistryFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,

		/** If omitted, the default is "docker.io". */
		registryServer: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function CreateContainerRegistryFormGroup() {
		return new FormGroup<ContainerRegistryFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			registryServer: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ContainerConfigurationType { dockerCompatible = 'dockerCompatible' }

	export interface DataDisk {

		/** The default value for caching is none. For information about the caching options see: https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/. */
		caching?: CachingType | null;

		/** Required */
		diskSizeGB: number;

		/**
		 * The lun is used to uniquely identify each data disk. If attaching multiple disks, each should have a distinct lun.
		 * Required
		 */
		lun: number;
		storageAccountType?: DataDiskStorageAccountType | null;
	}
	export interface DataDiskFormProperties {

		/** The default value for caching is none. For information about the caching options see: https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/. */
		caching: FormControl<CachingType | null | undefined>,

		/** Required */
		diskSizeGB: FormControl<number | null | undefined>,

		/**
		 * The lun is used to uniquely identify each data disk. If attaching multiple disks, each should have a distinct lun.
		 * Required
		 */
		lun: FormControl<number | null | undefined>,
		storageAccountType: FormControl<DataDiskStorageAccountType | null | undefined>,
	}
	export function CreateDataDiskFormGroup() {
		return new FormGroup<DataDiskFormProperties>({
			caching: new FormControl<CachingType | null | undefined>(undefined),
			diskSizeGB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lun: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			storageAccountType: new FormControl<DataDiskStorageAccountType | null | undefined>(undefined),
		});

	}

	export enum DataDiskStorageAccountType { standard_lrs = 'standard_lrs', premium_lrs = 'premium_lrs' }

	export interface DeleteCertificateError {
		code?: string | null;
		message?: string | null;

		/** This list includes details such as the active Pools and Compute Nodes referencing this Certificate. However, if a large number of resources reference the Certificate, the list contains only about the first hundred. */
		values?: Array<NameValuePair>;
	}
	export interface DeleteCertificateErrorFormProperties {
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCertificateErrorFormGroup() {
		return new FormGroup<DeleteCertificateErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ElevationLevel { nonadmin = 'nonadmin', admin = 'admin' }

	export enum ErrorCategory { usererror = 'usererror', servererror = 'servererror' }

	export interface ErrorMessage {
		lang?: string | null;
		value?: string | null;
	}
	export interface ErrorMessageFormProperties {
		lang: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateErrorMessageFormGroup() {
		return new FormGroup<ErrorMessageFormProperties>({
			lang: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExitCodeMapping {

		/** Required */
		code: number;

		/** Required */
		exitOptions: ExitOptions;
	}
	export interface ExitCodeMappingFormProperties {

		/** Required */
		code: FormControl<number | null | undefined>,
	}
	export function CreateExitCodeMappingFormGroup() {
		return new FormGroup<ExitCodeMappingFormProperties>({
			code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExitCodeRangeMapping {

		/** Required */
		end: number;

		/** Required */
		exitOptions: ExitOptions;

		/** Required */
		start: number;
	}
	export interface ExitCodeRangeMappingFormProperties {

		/** Required */
		end: FormControl<number | null | undefined>,

		/** Required */
		start: FormControl<number | null | undefined>,
	}
	export function CreateExitCodeRangeMappingFormGroup() {
		return new FormGroup<ExitCodeRangeMappingFormProperties>({
			end: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			start: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExitConditions {
		default?: ExitOptions;
		exitCodeRanges?: Array<ExitCodeRangeMapping>;
		exitCodes?: Array<ExitCodeMapping>;
		fileUploadError?: ExitOptions;
		preProcessingError?: ExitOptions;
	}
	export interface ExitConditionsFormProperties {
	}
	export function CreateExitConditionsFormGroup() {
		return new FormGroup<ExitConditionsFormProperties>({
		});

	}

	export interface ExitOptions {

		/** Possible values are 'satisfy' (allowing dependent tasks to progress) and 'block' (dependent tasks continue to wait). Batch does not yet support cancellation of dependent tasks. */
		dependencyAction?: ExitOptionsDependencyAction | null;

		/** The default is none for exit code 0 and terminate for all other exit conditions. If the Job's onTaskFailed property is noaction, then specifying this property returns an error and the add Task request fails with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		jobAction?: ExitOptionsJobAction | null;
	}
	export interface ExitOptionsFormProperties {

		/** Possible values are 'satisfy' (allowing dependent tasks to progress) and 'block' (dependent tasks continue to wait). Batch does not yet support cancellation of dependent tasks. */
		dependencyAction: FormControl<ExitOptionsDependencyAction | null | undefined>,

		/** The default is none for exit code 0 and terminate for all other exit conditions. If the Job's onTaskFailed property is noaction, then specifying this property returns an error and the add Task request fails with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		jobAction: FormControl<ExitOptionsJobAction | null | undefined>,
	}
	export function CreateExitOptionsFormGroup() {
		return new FormGroup<ExitOptionsFormProperties>({
			dependencyAction: new FormControl<ExitOptionsDependencyAction | null | undefined>(undefined),
			jobAction: new FormControl<ExitOptionsJobAction | null | undefined>(undefined),
		});

	}

	export enum ExitOptionsDependencyAction { satisfy = 'satisfy', block = 'block' }

	export enum ExitOptionsJobAction { none = 'none', disable = 'disable', terminate = 'terminate' }

	export interface FileProperties {

		/** Required */
		contentLength: number;
		contentType?: string | null;

		/** The creation time is not returned for files on Linux Compute Nodes. */
		creationTime?: Date | null;

		/** The file mode is returned only for files on Linux Compute Nodes. */
		fileMode?: string | null;

		/** Required */
		lastModified: Date;
	}
	export interface FilePropertiesFormProperties {

		/** Required */
		contentLength: FormControl<number | null | undefined>,
		contentType: FormControl<string | null | undefined>,

		/** The creation time is not returned for files on Linux Compute Nodes. */
		creationTime: FormControl<Date | null | undefined>,

		/** The file mode is returned only for files on Linux Compute Nodes. */
		fileMode: FormControl<string | null | undefined>,

		/** Required */
		lastModified: FormControl<Date | null | undefined>,
	}
	export function CreateFilePropertiesFormGroup() {
		return new FormGroup<FilePropertiesFormProperties>({
			contentLength: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			contentType: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			fileMode: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImageReference {

		/** For example, UbuntuServer or WindowsServer. */
		offer?: string | null;

		/** For example, Canonical or MicrosoftWindowsServer. */
		publisher?: string | null;

		/** For example, 18.04-LTS or 2019-Datacenter. */
		sku?: string | null;

		/** A value of 'latest' can be specified to select the latest version of an Image. If omitted, the default is 'latest'. */
		version?: string | null;

		/** This property is mutually exclusive with other ImageReference properties. For Virtual Machine Image it must be in the same region and subscription as the Azure Batch account. For SIG image it must have replicas in the same region as the Azure Batch account. For information about the firewall settings for the Batch Compute Node agent to communicate with the Batch service see https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration. */
		virtualMachineImageId?: string | null;
	}
	export interface ImageReferenceFormProperties {

		/** For example, UbuntuServer or WindowsServer. */
		offer: FormControl<string | null | undefined>,

		/** For example, Canonical or MicrosoftWindowsServer. */
		publisher: FormControl<string | null | undefined>,

		/** For example, 18.04-LTS or 2019-Datacenter. */
		sku: FormControl<string | null | undefined>,

		/** A value of 'latest' can be specified to select the latest version of an Image. If omitted, the default is 'latest'. */
		version: FormControl<string | null | undefined>,

		/** This property is mutually exclusive with other ImageReference properties. For Virtual Machine Image it must be in the same region and subscription as the Azure Batch account. For SIG image it must have replicas in the same region as the Azure Batch account. For information about the firewall settings for the Batch Compute Node agent to communicate with the Batch service see https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration. */
		virtualMachineImageId: FormControl<string | null | undefined>,
	}
	export function CreateImageReferenceFormGroup() {
		return new FormGroup<ImageReferenceFormProperties>({
			offer: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			virtualMachineImageId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InboundNATPool {

		/**
		 * This must be unique within a Batch Pool. Acceptable values are between 1 and 65535 except for 22, 3389, 29876 and 29877 as these are reserved. If any reserved values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		backendPort: number;

		/**
		 * Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved by the Batch service. All ranges within a Pool must be distinct and cannot overlap. Each range must contain at least 40 ports. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		frontendPortRangeEnd: number;

		/**
		 * Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved. All ranges within a Pool must be distinct and cannot overlap. Each range must contain at least 40 ports. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		frontendPortRangeStart: number;

		/**
		 * The name must be unique within a Batch Pool, can contain letters, numbers, underscores, periods, and hyphens. Names must start with a letter or number, must end with a letter, number, or underscore, and cannot exceed 77 characters.  If any invalid values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		name: string;

		/** The maximum number of rules that can be specified across all the endpoints on a Batch Pool is 25. If no network security group rules are specified, a default rule will be created to allow inbound access to the specified backendPort. If the maximum number of network security group rules is exceeded the request fails with HTTP status code 400. */
		networkSecurityGroupRules?: Array<NetworkSecurityGroupRule>;

		/** Required */
		protocol: InboundEndpointProtocol;
	}
	export interface InboundNATPoolFormProperties {

		/**
		 * This must be unique within a Batch Pool. Acceptable values are between 1 and 65535 except for 22, 3389, 29876 and 29877 as these are reserved. If any reserved values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		backendPort: FormControl<number | null | undefined>,

		/**
		 * Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved by the Batch service. All ranges within a Pool must be distinct and cannot overlap. Each range must contain at least 40 ports. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		frontendPortRangeEnd: FormControl<number | null | undefined>,

		/**
		 * Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved. All ranges within a Pool must be distinct and cannot overlap. Each range must contain at least 40 ports. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		frontendPortRangeStart: FormControl<number | null | undefined>,

		/**
		 * The name must be unique within a Batch Pool, can contain letters, numbers, underscores, periods, and hyphens. Names must start with a letter or number, must end with a letter, number, or underscore, and cannot exceed 77 characters.  If any invalid values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		protocol: FormControl<InboundEndpointProtocol | null | undefined>,
	}
	export function CreateInboundNATPoolFormGroup() {
		return new FormGroup<InboundNATPoolFormProperties>({
			backendPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			frontendPortRangeEnd: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			frontendPortRangeStart: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<InboundEndpointProtocol | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NetworkSecurityGroupRule {

		/** Required */
		access: NetworkSecurityGroupRuleAccess;

		/**
		 * Priorities within a Pool must be unique and are evaluated in order of priority. The lower the number the higher the priority. For example, rules could be specified with order numbers of 150, 250, and 350. The rule with the order number of 150 takes precedence over the rule that has an order of 250. Allowed priorities are 150 to 3500. If any reserved or duplicate values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		priority: number;

		/**
		 * Valid values are a single IP address (i.e. 10.10.10.10), IP subnet (i.e. 192.168.1.0/24), default tag, or * (for all addresses).  If any other values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		sourceAddressPrefix: string;

		/** Valid values are '*' (for all ports 0 - 65535), a specific port (i.e. 22), or a port range (i.e. 100-200). The ports must be in the range of 0 to 65535. Each entry in this collection must not overlap any other entry (either a range or an individual port). If any other values are provided the request fails with HTTP status code 400. The default value is '*'. */
		sourcePortRanges?: Array<string>;
	}
	export interface NetworkSecurityGroupRuleFormProperties {

		/** Required */
		access: FormControl<NetworkSecurityGroupRuleAccess | null | undefined>,

		/**
		 * Priorities within a Pool must be unique and are evaluated in order of priority. The lower the number the higher the priority. For example, rules could be specified with order numbers of 150, 250, and 350. The rule with the order number of 150 takes precedence over the rule that has an order of 250. Allowed priorities are 150 to 3500. If any reserved or duplicate values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		priority: FormControl<number | null | undefined>,

		/**
		 * Valid values are a single IP address (i.e. 10.10.10.10), IP subnet (i.e. 192.168.1.0/24), default tag, or * (for all addresses).  If any other values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		sourceAddressPrefix: FormControl<string | null | undefined>,
	}
	export function CreateNetworkSecurityGroupRuleFormGroup() {
		return new FormGroup<NetworkSecurityGroupRuleFormProperties>({
			access: new FormControl<NetworkSecurityGroupRuleAccess | null | undefined>(undefined, [Validators.required]),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sourceAddressPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NetworkSecurityGroupRuleAccess { allow = 'allow', deny = 'deny' }

	export interface JobAddParameter {

		/** Individual Tasks can override an environment setting specified here by specifying the same setting name with a different value. */
		commonEnvironmentSettings?: Array<EnvironmentSetting>;
		constraints?: JobConstraints;

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName?: string | null;

		/**
		 * The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an Account that differ only by case).
		 * Required
		 */
		id: string;

		/** The Job Manager Task is automatically started when the Job is created. The Batch service tries to schedule the Job Manager Task before any other Tasks in the Job. When shrinking a Pool, the Batch service tries to preserve Nodes where Job Manager Tasks are running for as long as possible (that is, Compute Nodes running 'normal' Tasks are removed before Compute Nodes running Job Manager Tasks). When a Job Manager Task fails and needs to be restarted, the system tries to schedule it at the highest priority. If there are no idle Compute Nodes available, the system may terminate one of the running Tasks in the Pool and return it to the queue in order to make room for the Job Manager Task to restart. Note that a Job Manager Task in one Job does not have priority over Tasks in other Jobs. Across Jobs, only Job level priorities are observed. For example, if a Job Manager in a priority 0 Job needs to be restarted, it will not displace Tasks of a priority 1 Job. Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. */
		jobManagerTask?: JobManagerTask;

		/** You can use Job Preparation to prepare a Node to run Tasks for the Job. Activities commonly performed in Job Preparation include: Downloading common resource files used by all the Tasks in the Job. The Job Preparation Task can download these common resource files to the shared location on the Node. (AZ_BATCH_NODE_ROOT_DIR\shared), or starting a local service on the Node so that all Tasks of that Job can communicate with it. If the Job Preparation Task fails (that is, exhausts its retry count before exiting with exit code 0), Batch will not run Tasks of this Job on the Node. The Compute Node remains ineligible to run Tasks of this Job until it is reimaged. The Compute Node remains active and can be used for other Jobs. The Job Preparation Task can run multiple times on the same Node. Therefore, you should write the Job Preparation Task to handle re-execution. If the Node is rebooted, the Job Preparation Task is run again on the Compute Node before scheduling any other Task of the Job, if rerunOnNodeRebootAfterSuccess is true or if the Job Preparation Task did not previously complete. If the Node is reimaged, the Job Preparation Task is run again before scheduling any Task of the Job. Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. */
		jobPreparationTask?: JobPreparationTask;

		/** The Job Release Task runs when the Job ends, because of one of the following: The user calls the Terminate Job API, or the Delete Job API while the Job is still active, the Job's maximum wall clock time constraint is reached, and the Job is still active, or the Job's Job Manager Task completed, and the Job is configured to terminate when the Job Manager completes. The Job Release Task runs on each Node where Tasks of the Job have run and the Job Preparation Task ran and completed. If you reimage a Node after it has run the Job Preparation Task, and the Job ends without any further Tasks of the Job running on that Node (and hence the Job Preparation Task does not re-run), then the Job Release Task does not run on that Compute Node. If a Node reboots while the Job Release Task is still running, the Job Release Task runs again when the Compute Node starts up. The Job is not marked as complete until all Job Release Tasks have completed. The Job Release Task runs in the background. It does not occupy a scheduling slot; that is, it does not count towards the maxTasksPerNode limit specified on the Pool. */
		jobReleaseTask?: JobReleaseTask;

		/** The Batch service does not assign any meaning to metadata; it is solely for the use of user code. */
		metadata?: Array<MetadataItem>;
		networkConfiguration?: JobNetworkConfiguration;
		onAllTasksComplete?: CloudJobOnAllTasksComplete | null;

		/** A Task is considered to have failed if has a failureInfo. A failureInfo is set if the Task completes with a non-zero exit code after exhausting its retry count, or if there was an error starting the Task, for example due to a resource file download error. The default is noaction. */
		onTaskFailure?: CloudJobOnTaskFailure | null;

		/** Required */
		poolInfo: PoolInformation;

		/** Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. */
		priority?: number | null;
		usesTaskDependencies?: boolean | null;
	}
	export interface JobAddParameterFormProperties {

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an Account that differ only by case).
		 * Required
		 */
		id: FormControl<string | null | undefined>,
		onAllTasksComplete: FormControl<CloudJobOnAllTasksComplete | null | undefined>,

		/** A Task is considered to have failed if has a failureInfo. A failureInfo is set if the Task completes with a non-zero exit code after exhausting its retry count, or if there was an error starting the Task, for example due to a resource file download error. The default is noaction. */
		onTaskFailure: FormControl<CloudJobOnTaskFailure | null | undefined>,

		/** Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. */
		priority: FormControl<number | null | undefined>,
		usesTaskDependencies: FormControl<boolean | null | undefined>,
	}
	export function CreateJobAddParameterFormGroup() {
		return new FormGroup<JobAddParameterFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			onAllTasksComplete: new FormControl<CloudJobOnAllTasksComplete | null | undefined>(undefined),
			onTaskFailure: new FormControl<CloudJobOnTaskFailure | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			usesTaskDependencies: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface JobConstraints {

		/** Note that this value specifically controls the number of retries. The Batch service will try each Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries a Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry Tasks. If the maximum retry count is -1, the Batch service retries Tasks without limit. The default value is 0 (no retries). */
		maxTaskRetryCount?: number | null;

		/** If the Job does not complete within the time limit, the Batch service terminates it and any Tasks that are still running. In this case, the termination reason will be MaxWallClockTimeExpiry. If this property is not specified, there is no time limit on how long the Job may run. */
		maxWallClockTime?: string | null;
	}
	export interface JobConstraintsFormProperties {

		/** Note that this value specifically controls the number of retries. The Batch service will try each Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries a Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry Tasks. If the maximum retry count is -1, the Batch service retries Tasks without limit. The default value is 0 (no retries). */
		maxTaskRetryCount: FormControl<number | null | undefined>,

		/** If the Job does not complete within the time limit, the Batch service terminates it and any Tasks that are still running. In this case, the termination reason will be MaxWallClockTimeExpiry. If this property is not specified, there is no time limit on how long the Job may run. */
		maxWallClockTime: FormControl<string | null | undefined>,
	}
	export function CreateJobConstraintsFormGroup() {
		return new FormGroup<JobConstraintsFormProperties>({
			maxTaskRetryCount: new FormControl<number | null | undefined>(undefined),
			maxWallClockTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobDisableParameter {

		/** Required */
		disableTasks: JobDisableParameterDisableTasks;
	}
	export interface JobDisableParameterFormProperties {

		/** Required */
		disableTasks: FormControl<JobDisableParameterDisableTasks | null | undefined>,
	}
	export function CreateJobDisableParameterFormGroup() {
		return new FormGroup<JobDisableParameterFormProperties>({
			disableTasks: new FormControl<JobDisableParameterDisableTasks | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JobDisableParameterDisableTasks { requeue = 'requeue', terminate = 'terminate', wait = 'wait' }

	export interface JobExecutionInformation {

		/** This property is set only if the Job is in the completed state. */
		endTime?: Date | null;

		/** This element contains the actual Pool where the Job is assigned. When you get Job details from the service, they also contain a poolInfo element, which contains the Pool configuration data from when the Job was added or updated. That poolInfo element may also contain a poolId element. If it does, the two IDs are the same. If it does not, it means the Job ran on an auto Pool, and this property contains the ID of that auto Pool. */
		poolId?: string | null;
		schedulingError?: JobSchedulingError;

		/**
		 * This is the time at which the Job was created.
		 * Required
		 */
		startTime: Date;

		/** This property is set only if the Job is in the completed state. If the Batch service terminates the Job, it sets the reason as follows: JMComplete - the Job Manager Task completed, and killJobOnCompletion was set to true. MaxWallClockTimeExpiry - the Job reached its maxWallClockTime constraint. TerminateJobSchedule - the Job ran as part of a schedule, and the schedule terminated. AllTasksComplete - the Job's onAllTasksComplete attribute is set to terminatejob, and all Tasks in the Job are complete. TaskFailed - the Job's onTaskFailure attribute is set to performExitOptionsJobAction, and a Task in the Job failed with an exit condition that specified a jobAction of terminatejob. Any other string is a user-defined reason specified in a call to the 'Terminate a Job' operation. */
		terminateReason?: string | null;
	}
	export interface JobExecutionInformationFormProperties {

		/** This property is set only if the Job is in the completed state. */
		endTime: FormControl<Date | null | undefined>,

		/** This element contains the actual Pool where the Job is assigned. When you get Job details from the service, they also contain a poolInfo element, which contains the Pool configuration data from when the Job was added or updated. That poolInfo element may also contain a poolId element. If it does, the two IDs are the same. If it does not, it means the Job ran on an auto Pool, and this property contains the ID of that auto Pool. */
		poolId: FormControl<string | null | undefined>,

		/**
		 * This is the time at which the Job was created.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/** This property is set only if the Job is in the completed state. If the Batch service terminates the Job, it sets the reason as follows: JMComplete - the Job Manager Task completed, and killJobOnCompletion was set to true. MaxWallClockTimeExpiry - the Job reached its maxWallClockTime constraint. TerminateJobSchedule - the Job ran as part of a schedule, and the schedule terminated. AllTasksComplete - the Job's onAllTasksComplete attribute is set to terminatejob, and all Tasks in the Job are complete. TaskFailed - the Job's onTaskFailure attribute is set to performExitOptionsJobAction, and a Task in the Job failed with an exit condition that specified a jobAction of terminatejob. Any other string is a user-defined reason specified in a call to the 'Terminate a Job' operation. */
		terminateReason: FormControl<string | null | undefined>,
	}
	export function CreateJobExecutionInformationFormGroup() {
		return new FormGroup<JobExecutionInformationFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			poolId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			terminateReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Job Manager Task is automatically started when the Job is created. The Batch service tries to schedule the Job Manager Task before any other Tasks in the Job. When shrinking a Pool, the Batch service tries to preserve Nodes where Job Manager Tasks are running for as long as possible (that is, Compute Nodes running 'normal' Tasks are removed before Compute Nodes running Job Manager Tasks). When a Job Manager Task fails and needs to be restarted, the system tries to schedule it at the highest priority. If there are no idle Compute Nodes available, the system may terminate one of the running Tasks in the Pool and return it to the queue in order to make room for the Job Manager Task to restart. Note that a Job Manager Task in one Job does not have priority over Tasks in other Jobs. Across Jobs, only Job level priorities are observed. For example, if a Job Manager in a priority 0 Job needs to be restarted, it will not displace Tasks of a priority 1 Job. Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. */
	export interface JobManagerTask {

		/** The default value is true. */
		allowLowPriorityNode?: boolean | null;

		/** Application Packages are downloaded and deployed to a shared directory, not the Task working directory. Therefore, if a referenced Application Package is already on the Compute Node, and is up to date, then it is not re-downloaded; the existing copy on the Compute Node is used. If a referenced Application Package cannot be installed, for example because the package has been deleted or because download failed, the Task fails. */
		applicationPackageReferences?: Array<ApplicationPackageReference>;
		authenticationTokenSettings?: AuthenticationTokenSettings;

		/**
		 * The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
		 * Required
		 */
		commandLine: string;
		constraints?: TaskConstraints;
		containerSettings?: TaskContainerSettings;

		/** It need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName?: string | null;
		environmentSettings?: Array<EnvironmentSetting>;

		/**
		 * The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters.
		 * Required
		 */
		id: string;

		/** If true, when the Job Manager Task completes, the Batch service marks the Job as complete. If any Tasks are still running at this time (other than Job Release), those Tasks are terminated. If false, the completion of the Job Manager Task does not affect the Job status. In this case, you should either use the onAllTasksComplete attribute to terminate the Job, or have a client or user terminate the Job explicitly. An example of this is if the Job Manager creates a set of Tasks but then takes no further role in their execution. The default value is true. If you are using the onAllTasksComplete and onTaskFailure attributes to control Job lifetime, and using the Job Manager Task only to create the Tasks for the Job (not to monitor progress), then it is important to set killJobOnCompletion to false. */
		killJobOnCompletion?: boolean | null;

		/** For multi-instance Tasks, the files will only be uploaded from the Compute Node on which the primary Task is executed. */
		outputFiles?: Array<OutputFile>;

		/** Files listed under this element are located in the Task's working directory. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. */
		resourceFiles?: Array<ResourceFile>;

		/** If true, no other Tasks will run on the same Node for as long as the Job Manager is running. If false, other Tasks can run simultaneously with the Job Manager on a Compute Node. The Job Manager Task counts normally against the Compute Node's concurrent Task limit, so this is only relevant if the Compute Node allows multiple concurrent Tasks. The default value is true. */
		runExclusive?: boolean | null;

		/** Specify either the userName or autoUser property, but not both. */
		userIdentity?: UserIdentity;
	}

	/** The Job Manager Task is automatically started when the Job is created. The Batch service tries to schedule the Job Manager Task before any other Tasks in the Job. When shrinking a Pool, the Batch service tries to preserve Nodes where Job Manager Tasks are running for as long as possible (that is, Compute Nodes running 'normal' Tasks are removed before Compute Nodes running Job Manager Tasks). When a Job Manager Task fails and needs to be restarted, the system tries to schedule it at the highest priority. If there are no idle Compute Nodes available, the system may terminate one of the running Tasks in the Pool and return it to the queue in order to make room for the Job Manager Task to restart. Note that a Job Manager Task in one Job does not have priority over Tasks in other Jobs. Across Jobs, only Job level priorities are observed. For example, if a Job Manager in a priority 0 Job needs to be restarted, it will not displace Tasks of a priority 1 Job. Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. */
	export interface JobManagerTaskFormProperties {

		/** The default value is true. */
		allowLowPriorityNode: FormControl<boolean | null | undefined>,

		/**
		 * The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
		 * Required
		 */
		commandLine: FormControl<string | null | undefined>,

		/** It need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** If true, when the Job Manager Task completes, the Batch service marks the Job as complete. If any Tasks are still running at this time (other than Job Release), those Tasks are terminated. If false, the completion of the Job Manager Task does not affect the Job status. In this case, you should either use the onAllTasksComplete attribute to terminate the Job, or have a client or user terminate the Job explicitly. An example of this is if the Job Manager creates a set of Tasks but then takes no further role in their execution. The default value is true. If you are using the onAllTasksComplete and onTaskFailure attributes to control Job lifetime, and using the Job Manager Task only to create the Tasks for the Job (not to monitor progress), then it is important to set killJobOnCompletion to false. */
		killJobOnCompletion: FormControl<boolean | null | undefined>,

		/** If true, no other Tasks will run on the same Node for as long as the Job Manager is running. If false, other Tasks can run simultaneously with the Job Manager on a Compute Node. The Job Manager Task counts normally against the Compute Node's concurrent Task limit, so this is only relevant if the Compute Node allows multiple concurrent Tasks. The default value is true. */
		runExclusive: FormControl<boolean | null | undefined>,
	}
	export function CreateJobManagerTaskFormGroup() {
		return new FormGroup<JobManagerTaskFormProperties>({
			allowLowPriorityNode: new FormControl<boolean | null | undefined>(undefined),
			commandLine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			killJobOnCompletion: new FormControl<boolean | null | undefined>(undefined),
			runExclusive: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface JobNetworkConfiguration {

		/**
		 * The virtual network must be in the same region and subscription as the Azure Batch Account. The specified subnet should have enough free IP addresses to accommodate the number of Compute Nodes which will run Tasks from the Job. This can be up to the number of Compute Nodes in the Pool. The 'MicrosoftAzureBatch' service principal must have the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role for the specified VNet so that Azure Batch service can schedule Tasks on the Nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the Nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the Compute Nodes to unusable. This is of the form /subscriptions/{subscription}/resourceGroups/{group}/providers/{provider}/virtualNetworks/{network}/subnets/{subnet}. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication from the Azure Batch service. For Pools created with a Virtual Machine configuration, enable ports 29876 and 29877, as well as port 22 for Linux and port 3389 for Windows. Port 443 is also required to be open for outbound connections for communications to Azure Storage. For more details see: https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
		 * Required
		 */
		subnetId: string;
	}
	export interface JobNetworkConfigurationFormProperties {

		/**
		 * The virtual network must be in the same region and subscription as the Azure Batch Account. The specified subnet should have enough free IP addresses to accommodate the number of Compute Nodes which will run Tasks from the Job. This can be up to the number of Compute Nodes in the Pool. The 'MicrosoftAzureBatch' service principal must have the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role for the specified VNet so that Azure Batch service can schedule Tasks on the Nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the Nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the Compute Nodes to unusable. This is of the form /subscriptions/{subscription}/resourceGroups/{group}/providers/{provider}/virtualNetworks/{network}/subnets/{subnet}. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication from the Azure Batch service. For Pools created with a Virtual Machine configuration, enable ports 29876 and 29877, as well as port 22 for Linux and port 3389 for Windows. Port 443 is also required to be open for outbound connections for communications to Azure Storage. For more details see: https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration
		 * Required
		 */
		subnetId: FormControl<string | null | undefined>,
	}
	export function CreateJobNetworkConfigurationFormGroup() {
		return new FormGroup<JobNetworkConfigurationFormProperties>({
			subnetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface JobPatchParameter {
		constraints?: JobConstraints;

		/** If omitted, the existing Job metadata is left unchanged. */
		metadata?: Array<MetadataItem>;
		onAllTasksComplete?: CloudJobOnAllTasksComplete | null;
		poolInfo?: PoolInformation;

		/** Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, the priority of the Job is left unchanged. */
		priority?: number | null;
	}
	export interface JobPatchParameterFormProperties {
		onAllTasksComplete: FormControl<CloudJobOnAllTasksComplete | null | undefined>,

		/** Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, the priority of the Job is left unchanged. */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateJobPatchParameterFormGroup() {
		return new FormGroup<JobPatchParameterFormProperties>({
			onAllTasksComplete: new FormControl<CloudJobOnAllTasksComplete | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** You can use Job Preparation to prepare a Node to run Tasks for the Job. Activities commonly performed in Job Preparation include: Downloading common resource files used by all the Tasks in the Job. The Job Preparation Task can download these common resource files to the shared location on the Node. (AZ_BATCH_NODE_ROOT_DIR\shared), or starting a local service on the Node so that all Tasks of that Job can communicate with it. If the Job Preparation Task fails (that is, exhausts its retry count before exiting with exit code 0), Batch will not run Tasks of this Job on the Node. The Compute Node remains ineligible to run Tasks of this Job until it is reimaged. The Compute Node remains active and can be used for other Jobs. The Job Preparation Task can run multiple times on the same Node. Therefore, you should write the Job Preparation Task to handle re-execution. If the Node is rebooted, the Job Preparation Task is run again on the Compute Node before scheduling any other Task of the Job, if rerunOnNodeRebootAfterSuccess is true or if the Job Preparation Task did not previously complete. If the Node is reimaged, the Job Preparation Task is run again before scheduling any Task of the Job. Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. */
	export interface JobPreparationTask {

		/**
		 * The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
		 * Required
		 */
		commandLine: string;
		constraints?: TaskConstraints;
		containerSettings?: TaskContainerSettings;
		environmentSettings?: Array<EnvironmentSetting>;

		/** The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. If you do not specify this property, the Batch service assigns a default value of 'jobpreparation'. No other Task in the Job can have the same ID as the Job Preparation Task. If you try to submit a Task with the same id, the Batch service rejects the request with error code TaskIdSameAsJobPreparationTask; if you are calling the REST API directly, the HTTP status code is 409 (Conflict). */
		id?: string | null;

		/** The Job Preparation Task is always rerun if a Compute Node is reimaged, or if the Job Preparation Task did not complete (e.g. because the reboot occurred while the Task was running). Therefore, you should always write a Job Preparation Task to be idempotent and to behave correctly if run multiple times. The default value is true. */
		rerunOnNodeRebootAfterSuccess?: boolean | null;

		/** Files listed under this element are located in the Task's working directory.  There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. */
		resourceFiles?: Array<ResourceFile>;

		/** Specify either the userName or autoUser property, but not both. */
		userIdentity?: UserIdentity;

		/** If true and the Job Preparation Task fails on a Node, the Batch service retries the Job Preparation Task up to its maximum retry count (as specified in the constraints element). If the Task has still not completed successfully after all retries, then the Batch service will not schedule Tasks of the Job to the Node. The Node remains active and eligible to run Tasks of other Jobs. If false, the Batch service will not wait for the Job Preparation Task to complete. In this case, other Tasks of the Job can start executing on the Compute Node while the Job Preparation Task is still running; and even if the Job Preparation Task fails, new Tasks will continue to be scheduled on the Compute Node. The default value is true. */
		waitForSuccess?: boolean | null;
	}

	/** You can use Job Preparation to prepare a Node to run Tasks for the Job. Activities commonly performed in Job Preparation include: Downloading common resource files used by all the Tasks in the Job. The Job Preparation Task can download these common resource files to the shared location on the Node. (AZ_BATCH_NODE_ROOT_DIR\shared), or starting a local service on the Node so that all Tasks of that Job can communicate with it. If the Job Preparation Task fails (that is, exhausts its retry count before exiting with exit code 0), Batch will not run Tasks of this Job on the Node. The Compute Node remains ineligible to run Tasks of this Job until it is reimaged. The Compute Node remains active and can be used for other Jobs. The Job Preparation Task can run multiple times on the same Node. Therefore, you should write the Job Preparation Task to handle re-execution. If the Node is rebooted, the Job Preparation Task is run again on the Compute Node before scheduling any other Task of the Job, if rerunOnNodeRebootAfterSuccess is true or if the Job Preparation Task did not previously complete. If the Node is reimaged, the Job Preparation Task is run again before scheduling any Task of the Job. Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. */
	export interface JobPreparationTaskFormProperties {

		/**
		 * The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
		 * Required
		 */
		commandLine: FormControl<string | null | undefined>,

		/** The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. If you do not specify this property, the Batch service assigns a default value of 'jobpreparation'. No other Task in the Job can have the same ID as the Job Preparation Task. If you try to submit a Task with the same id, the Batch service rejects the request with error code TaskIdSameAsJobPreparationTask; if you are calling the REST API directly, the HTTP status code is 409 (Conflict). */
		id: FormControl<string | null | undefined>,

		/** The Job Preparation Task is always rerun if a Compute Node is reimaged, or if the Job Preparation Task did not complete (e.g. because the reboot occurred while the Task was running). Therefore, you should always write a Job Preparation Task to be idempotent and to behave correctly if run multiple times. The default value is true. */
		rerunOnNodeRebootAfterSuccess: FormControl<boolean | null | undefined>,

		/** If true and the Job Preparation Task fails on a Node, the Batch service retries the Job Preparation Task up to its maximum retry count (as specified in the constraints element). If the Task has still not completed successfully after all retries, then the Batch service will not schedule Tasks of the Job to the Node. The Node remains active and eligible to run Tasks of other Jobs. If false, the Batch service will not wait for the Job Preparation Task to complete. In this case, other Tasks of the Job can start executing on the Compute Node while the Job Preparation Task is still running; and even if the Job Preparation Task fails, new Tasks will continue to be scheduled on the Compute Node. The default value is true. */
		waitForSuccess: FormControl<boolean | null | undefined>,
	}
	export function CreateJobPreparationTaskFormGroup() {
		return new FormGroup<JobPreparationTaskFormProperties>({
			commandLine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			rerunOnNodeRebootAfterSuccess: new FormControl<boolean | null | undefined>(undefined),
			waitForSuccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface JobPreparationTaskExecutionInformation {
		containerInfo?: TaskContainerExecutionInformation;

		/** This property is set only if the Task is in the Completed state. */
		endTime?: Date | null;

		/** This parameter is returned only if the Task is in the completed state. The exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. Note that the exit code may also be generated by the Compute Node operating system, such as when a process is forcibly terminated. */
		exitCode?: number | null;
		failureInfo?: TaskFailureInformation;

		/** This property is set only if the Task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the Task has been restarted for reasons other than retry; for example, if the Compute Node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not. */
		lastRetryTime?: Date | null;
		result?: SubtaskInformationResult | null;

		/**
		 * Task application failures (non-zero exit code) are retried, pre-processing errors (the Task could not be run) and file upload errors are not retried. The Batch service will retry the Task up to the limit specified by the constraints.
		 * Required
		 */
		retryCount: number;

		/**
		 * If the Task has been restarted or retried, this is the most recent time at which the Task started running.
		 * Required
		 */
		startTime: Date;

		/** Required */
		state: JobPreparationTaskExecutionInformationState;
		taskRootDirectory?: string | null;
		taskRootDirectoryUrl?: string | null;
	}
	export interface JobPreparationTaskExecutionInformationFormProperties {

		/** This property is set only if the Task is in the Completed state. */
		endTime: FormControl<Date | null | undefined>,

		/** This parameter is returned only if the Task is in the completed state. The exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. Note that the exit code may also be generated by the Compute Node operating system, such as when a process is forcibly terminated. */
		exitCode: FormControl<number | null | undefined>,

		/** This property is set only if the Task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the Task has been restarted for reasons other than retry; for example, if the Compute Node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not. */
		lastRetryTime: FormControl<Date | null | undefined>,
		result: FormControl<SubtaskInformationResult | null | undefined>,

		/**
		 * Task application failures (non-zero exit code) are retried, pre-processing errors (the Task could not be run) and file upload errors are not retried. The Batch service will retry the Task up to the limit specified by the constraints.
		 * Required
		 */
		retryCount: FormControl<number | null | undefined>,

		/**
		 * If the Task has been restarted or retried, this is the most recent time at which the Task started running.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		state: FormControl<JobPreparationTaskExecutionInformationState | null | undefined>,
		taskRootDirectory: FormControl<string | null | undefined>,
		taskRootDirectoryUrl: FormControl<string | null | undefined>,
	}
	export function CreateJobPreparationTaskExecutionInformationFormGroup() {
		return new FormGroup<JobPreparationTaskExecutionInformationFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
			lastRetryTime: new FormControl<Date | null | undefined>(undefined),
			result: new FormControl<SubtaskInformationResult | null | undefined>(undefined),
			retryCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<JobPreparationTaskExecutionInformationState | null | undefined>(undefined, [Validators.required]),
			taskRootDirectory: new FormControl<string | null | undefined>(undefined),
			taskRootDirectoryUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobPreparationTaskExecutionInformationState { running = 'running', completed = 'completed' }


	/** The Job Release Task runs when the Job ends, because of one of the following: The user calls the Terminate Job API, or the Delete Job API while the Job is still active, the Job's maximum wall clock time constraint is reached, and the Job is still active, or the Job's Job Manager Task completed, and the Job is configured to terminate when the Job Manager completes. The Job Release Task runs on each Node where Tasks of the Job have run and the Job Preparation Task ran and completed. If you reimage a Node after it has run the Job Preparation Task, and the Job ends without any further Tasks of the Job running on that Node (and hence the Job Preparation Task does not re-run), then the Job Release Task does not run on that Compute Node. If a Node reboots while the Job Release Task is still running, the Job Release Task runs again when the Compute Node starts up. The Job is not marked as complete until all Job Release Tasks have completed. The Job Release Task runs in the background. It does not occupy a scheduling slot; that is, it does not count towards the maxTasksPerNode limit specified on the Pool. */
	export interface JobReleaseTask {

		/**
		 * The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
		 * Required
		 */
		commandLine: string;
		containerSettings?: TaskContainerSettings;
		environmentSettings?: Array<EnvironmentSetting>;

		/** The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. If you do not specify this property, the Batch service assigns a default value of 'jobrelease'. No other Task in the Job can have the same ID as the Job Release Task. If you try to submit a Task with the same id, the Batch service rejects the request with error code TaskIdSameAsJobReleaseTask; if you are calling the REST API directly, the HTTP status code is 409 (Conflict). */
		id?: string | null;
		maxWallClockTime?: string | null;

		/** Files listed under this element are located in the Task's working directory. */
		resourceFiles?: Array<ResourceFile>;

		/** The default is 7 days, i.e. the Task directory will be retained for 7 days unless the Compute Node is removed or the Job is deleted. */
		retentionTime?: string | null;

		/** Specify either the userName or autoUser property, but not both. */
		userIdentity?: UserIdentity;
	}

	/** The Job Release Task runs when the Job ends, because of one of the following: The user calls the Terminate Job API, or the Delete Job API while the Job is still active, the Job's maximum wall clock time constraint is reached, and the Job is still active, or the Job's Job Manager Task completed, and the Job is configured to terminate when the Job Manager completes. The Job Release Task runs on each Node where Tasks of the Job have run and the Job Preparation Task ran and completed. If you reimage a Node after it has run the Job Preparation Task, and the Job ends without any further Tasks of the Job running on that Node (and hence the Job Preparation Task does not re-run), then the Job Release Task does not run on that Compute Node. If a Node reboots while the Job Release Task is still running, the Job Release Task runs again when the Compute Node starts up. The Job is not marked as complete until all Job Release Tasks have completed. The Job Release Task runs in the background. It does not occupy a scheduling slot; that is, it does not count towards the maxTasksPerNode limit specified on the Pool. */
	export interface JobReleaseTaskFormProperties {

		/**
		 * The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
		 * Required
		 */
		commandLine: FormControl<string | null | undefined>,

		/** The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. If you do not specify this property, the Batch service assigns a default value of 'jobrelease'. No other Task in the Job can have the same ID as the Job Release Task. If you try to submit a Task with the same id, the Batch service rejects the request with error code TaskIdSameAsJobReleaseTask; if you are calling the REST API directly, the HTTP status code is 409 (Conflict). */
		id: FormControl<string | null | undefined>,
		maxWallClockTime: FormControl<string | null | undefined>,

		/** The default is 7 days, i.e. the Task directory will be retained for 7 days unless the Compute Node is removed or the Job is deleted. */
		retentionTime: FormControl<string | null | undefined>,
	}
	export function CreateJobReleaseTaskFormGroup() {
		return new FormGroup<JobReleaseTaskFormProperties>({
			commandLine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			maxWallClockTime: new FormControl<string | null | undefined>(undefined),
			retentionTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobReleaseTaskExecutionInformation {
		containerInfo?: TaskContainerExecutionInformation;

		/** This property is set only if the Task is in the Completed state. */
		endTime?: Date | null;

		/** This parameter is returned only if the Task is in the completed state. The exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. Note that the exit code may also be generated by the Compute Node operating system, such as when a process is forcibly terminated. */
		exitCode?: number | null;
		failureInfo?: TaskFailureInformation;
		result?: SubtaskInformationResult | null;

		/**
		 * If the Task has been restarted or retried, this is the most recent time at which the Task started running.
		 * Required
		 */
		startTime: Date;

		/** Required */
		state: JobPreparationTaskExecutionInformationState;
		taskRootDirectory?: string | null;
		taskRootDirectoryUrl?: string | null;
	}
	export interface JobReleaseTaskExecutionInformationFormProperties {

		/** This property is set only if the Task is in the Completed state. */
		endTime: FormControl<Date | null | undefined>,

		/** This parameter is returned only if the Task is in the completed state. The exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. Note that the exit code may also be generated by the Compute Node operating system, such as when a process is forcibly terminated. */
		exitCode: FormControl<number | null | undefined>,
		result: FormControl<SubtaskInformationResult | null | undefined>,

		/**
		 * If the Task has been restarted or retried, this is the most recent time at which the Task started running.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		state: FormControl<JobPreparationTaskExecutionInformationState | null | undefined>,
		taskRootDirectory: FormControl<string | null | undefined>,
		taskRootDirectoryUrl: FormControl<string | null | undefined>,
	}
	export function CreateJobReleaseTaskExecutionInformationFormGroup() {
		return new FormGroup<JobReleaseTaskExecutionInformationFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
			result: new FormControl<SubtaskInformationResult | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<JobPreparationTaskExecutionInformationState | null | undefined>(undefined, [Validators.required]),
			taskRootDirectory: new FormControl<string | null | undefined>(undefined),
			taskRootDirectoryUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobScheduleAddParameter {

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName?: string | null;

		/**
		 * The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an Account that differ only by case).
		 * Required
		 */
		id: string;

		/** Required */
		jobSpecification: JobSpecification;

		/** The Batch service does not assign any meaning to metadata; it is solely for the use of user code. */
		metadata?: Array<MetadataItem>;

		/** Required */
		schedule: Schedule;
	}
	export interface JobScheduleAddParameterFormProperties {

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an Account that differ only by case).
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateJobScheduleAddParameterFormGroup() {
		return new FormGroup<JobScheduleAddParameterFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface JobScheduleExecutionInformation {

		/** This property is set only if the Job Schedule is in the completed state. */
		endTime?: Date | null;

		/** This property is meaningful only if the schedule is in the active state when the time comes around. For example, if the schedule is disabled, no Job will be created at nextRunTime unless the Job is enabled before then. */
		nextRunTime?: Date | null;
		recentJob?: RecentJob;
	}
	export interface JobScheduleExecutionInformationFormProperties {

		/** This property is set only if the Job Schedule is in the completed state. */
		endTime: FormControl<Date | null | undefined>,

		/** This property is meaningful only if the schedule is in the active state when the time comes around. For example, if the schedule is disabled, no Job will be created at nextRunTime unless the Job is enabled before then. */
		nextRunTime: FormControl<Date | null | undefined>,
	}
	export function CreateJobScheduleExecutionInformationFormGroup() {
		return new FormGroup<JobScheduleExecutionInformationFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			nextRunTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface JobSchedulePatchParameter {
		jobSpecification?: JobSpecification;

		/** If you do not specify this element, existing metadata is left unchanged. */
		metadata?: Array<MetadataItem>;
		schedule?: Schedule;
	}
	export interface JobSchedulePatchParameterFormProperties {
	}
	export function CreateJobSchedulePatchParameterFormGroup() {
		return new FormGroup<JobSchedulePatchParameterFormProperties>({
		});

	}

	export enum JobScheduleState { active = 'active', completed = 'completed', disabled = 'disabled', terminating = 'terminating', deleting = 'deleting' }

	export interface JobScheduleStatistics {

		/** Required */
		kernelCPUTime: string;

		/** Required */
		lastUpdateTime: Date;

		/** Required */
		numFailedTasks: number;

		/** Required */
		numSucceededTasks: number;

		/** Required */
		numTaskRetries: number;

		/** Required */
		readIOGiB: number;

		/** Required */
		readIOps: number;

		/** Required */
		startTime: Date;

		/** Required */
		url: string;

		/** Required */
		userCPUTime: string;

		/**
		 * This value is only reported in the Account lifetime statistics; it is not included in the Job statistics.
		 * Required
		 */
		waitTime: string;

		/**
		 * The wall clock time is the elapsed time from when the Task started running on a Compute Node to when it finished (or to the last time the statistics were updated, if the Task had not finished by then). If a Task was retried, this includes the wall clock time of all the Task retries.
		 * Required
		 */
		wallClockTime: string;

		/** Required */
		writeIOGiB: number;

		/** Required */
		writeIOps: number;
	}
	export interface JobScheduleStatisticsFormProperties {

		/** Required */
		kernelCPUTime: FormControl<string | null | undefined>,

		/** Required */
		lastUpdateTime: FormControl<Date | null | undefined>,

		/** Required */
		numFailedTasks: FormControl<number | null | undefined>,

		/** Required */
		numSucceededTasks: FormControl<number | null | undefined>,

		/** Required */
		numTaskRetries: FormControl<number | null | undefined>,

		/** Required */
		readIOGiB: FormControl<number | null | undefined>,

		/** Required */
		readIOps: FormControl<number | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,

		/** Required */
		userCPUTime: FormControl<string | null | undefined>,

		/**
		 * This value is only reported in the Account lifetime statistics; it is not included in the Job statistics.
		 * Required
		 */
		waitTime: FormControl<string | null | undefined>,

		/**
		 * The wall clock time is the elapsed time from when the Task started running on a Compute Node to when it finished (or to the last time the statistics were updated, if the Task had not finished by then). If a Task was retried, this includes the wall clock time of all the Task retries.
		 * Required
		 */
		wallClockTime: FormControl<string | null | undefined>,

		/** Required */
		writeIOGiB: FormControl<number | null | undefined>,

		/** Required */
		writeIOps: FormControl<number | null | undefined>,
	}
	export function CreateJobScheduleStatisticsFormGroup() {
		return new FormGroup<JobScheduleStatisticsFormProperties>({
			kernelCPUTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			numFailedTasks: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			numSucceededTasks: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			numTaskRetries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			readIOGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			readIOps: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userCPUTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			waitTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wallClockTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			writeIOGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			writeIOps: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface JobScheduleUpdateParameter {

		/** Required */
		jobSpecification: JobSpecification;

		/** If you do not specify this element, it takes the default value of an empty list; in effect, any existing metadata is deleted. */
		metadata?: Array<MetadataItem>;

		/** Required */
		schedule: Schedule;
	}
	export interface JobScheduleUpdateParameterFormProperties {
	}
	export function CreateJobScheduleUpdateParameterFormGroup() {
		return new FormGroup<JobScheduleUpdateParameterFormProperties>({
		});

	}

	export interface JobSchedulingError {

		/** Required */
		category: ErrorCategory;
		code?: string | null;
		details?: Array<NameValuePair>;
		message?: string | null;
	}
	export interface JobSchedulingErrorFormProperties {

		/** Required */
		category: FormControl<ErrorCategory | null | undefined>,
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateJobSchedulingErrorFormGroup() {
		return new FormGroup<JobSchedulingErrorFormProperties>({
			category: new FormControl<ErrorCategory | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobSpecification {

		/** Individual Tasks can override an environment setting specified here by specifying the same setting name with a different value. */
		commonEnvironmentSettings?: Array<EnvironmentSetting>;
		constraints?: JobConstraints;

		/** The name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName?: string | null;

		/** The Job Manager Task is automatically started when the Job is created. The Batch service tries to schedule the Job Manager Task before any other Tasks in the Job. When shrinking a Pool, the Batch service tries to preserve Nodes where Job Manager Tasks are running for as long as possible (that is, Compute Nodes running 'normal' Tasks are removed before Compute Nodes running Job Manager Tasks). When a Job Manager Task fails and needs to be restarted, the system tries to schedule it at the highest priority. If there are no idle Compute Nodes available, the system may terminate one of the running Tasks in the Pool and return it to the queue in order to make room for the Job Manager Task to restart. Note that a Job Manager Task in one Job does not have priority over Tasks in other Jobs. Across Jobs, only Job level priorities are observed. For example, if a Job Manager in a priority 0 Job needs to be restarted, it will not displace Tasks of a priority 1 Job. Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. */
		jobManagerTask?: JobManagerTask;

		/** You can use Job Preparation to prepare a Node to run Tasks for the Job. Activities commonly performed in Job Preparation include: Downloading common resource files used by all the Tasks in the Job. The Job Preparation Task can download these common resource files to the shared location on the Node. (AZ_BATCH_NODE_ROOT_DIR\shared), or starting a local service on the Node so that all Tasks of that Job can communicate with it. If the Job Preparation Task fails (that is, exhausts its retry count before exiting with exit code 0), Batch will not run Tasks of this Job on the Node. The Compute Node remains ineligible to run Tasks of this Job until it is reimaged. The Compute Node remains active and can be used for other Jobs. The Job Preparation Task can run multiple times on the same Node. Therefore, you should write the Job Preparation Task to handle re-execution. If the Node is rebooted, the Job Preparation Task is run again on the Compute Node before scheduling any other Task of the Job, if rerunOnNodeRebootAfterSuccess is true or if the Job Preparation Task did not previously complete. If the Node is reimaged, the Job Preparation Task is run again before scheduling any Task of the Job. Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. */
		jobPreparationTask?: JobPreparationTask;

		/** The Job Release Task runs when the Job ends, because of one of the following: The user calls the Terminate Job API, or the Delete Job API while the Job is still active, the Job's maximum wall clock time constraint is reached, and the Job is still active, or the Job's Job Manager Task completed, and the Job is configured to terminate when the Job Manager completes. The Job Release Task runs on each Node where Tasks of the Job have run and the Job Preparation Task ran and completed. If you reimage a Node after it has run the Job Preparation Task, and the Job ends without any further Tasks of the Job running on that Node (and hence the Job Preparation Task does not re-run), then the Job Release Task does not run on that Compute Node. If a Node reboots while the Job Release Task is still running, the Job Release Task runs again when the Compute Node starts up. The Job is not marked as complete until all Job Release Tasks have completed. The Job Release Task runs in the background. It does not occupy a scheduling slot; that is, it does not count towards the maxTasksPerNode limit specified on the Pool. */
		jobReleaseTask?: JobReleaseTask;

		/** The Batch service does not assign any meaning to metadata; it is solely for the use of user code. */
		metadata?: Array<MetadataItem>;
		networkConfiguration?: JobNetworkConfiguration;
		onAllTasksComplete?: CloudJobOnAllTasksComplete | null;

		/** A Task is considered to have failed if has a failureInfo. A failureInfo is set if the Task completes with a non-zero exit code after exhausting its retry count, or if there was an error starting the Task, for example due to a resource file download error. The default is noaction. */
		onTaskFailure?: CloudJobOnTaskFailure | null;

		/** Required */
		poolInfo: PoolInformation;

		/** Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. This priority is used as the default for all Jobs under the Job Schedule. You can update a Job's priority after it has been created using by using the update Job API. */
		priority?: number | null;
		usesTaskDependencies?: boolean | null;
	}
	export interface JobSpecificationFormProperties {

		/** The name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName: FormControl<string | null | undefined>,
		onAllTasksComplete: FormControl<CloudJobOnAllTasksComplete | null | undefined>,

		/** A Task is considered to have failed if has a failureInfo. A failureInfo is set if the Task completes with a non-zero exit code after exhausting its retry count, or if there was an error starting the Task, for example due to a resource file download error. The default is noaction. */
		onTaskFailure: FormControl<CloudJobOnTaskFailure | null | undefined>,

		/** Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. This priority is used as the default for all Jobs under the Job Schedule. You can update a Job's priority after it has been created using by using the update Job API. */
		priority: FormControl<number | null | undefined>,
		usesTaskDependencies: FormControl<boolean | null | undefined>,
	}
	export function CreateJobSpecificationFormGroup() {
		return new FormGroup<JobSpecificationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			onAllTasksComplete: new FormControl<CloudJobOnAllTasksComplete | null | undefined>(undefined),
			onTaskFailure: new FormControl<CloudJobOnTaskFailure | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			usesTaskDependencies: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum JobState { active = 'active', disabling = 'disabling', disabled = 'disabled', enabling = 'enabling', terminating = 'terminating', completed = 'completed', deleting = 'deleting' }

	export interface JobStatistics {

		/** Required */
		kernelCPUTime: string;

		/** Required */
		lastUpdateTime: Date;

		/**
		 * A Task fails if it exhausts its maximum retry count without returning exit code 0.
		 * Required
		 */
		numFailedTasks: number;

		/**
		 * A Task completes successfully if it returns exit code 0.
		 * Required
		 */
		numSucceededTasks: number;

		/** Required */
		numTaskRetries: number;

		/** Required */
		readIOGiB: number;

		/** Required */
		readIOps: number;

		/** Required */
		startTime: Date;

		/** Required */
		url: string;

		/** Required */
		userCPUTime: string;

		/**
		 * The wait time for a Task is defined as the elapsed time between the creation of the Task and the start of Task execution. (If the Task is retried due to failures, the wait time is the time to the most recent Task execution.) This value is only reported in the Account lifetime statistics; it is not included in the Job statistics.
		 * Required
		 */
		waitTime: string;

		/**
		 * The wall clock time is the elapsed time from when the Task started running on a Compute Node to when it finished (or to the last time the statistics were updated, if the Task had not finished by then). If a Task was retried, this includes the wall clock time of all the Task retries.
		 * Required
		 */
		wallClockTime: string;

		/** Required */
		writeIOGiB: number;

		/** Required */
		writeIOps: number;
	}
	export interface JobStatisticsFormProperties {

		/** Required */
		kernelCPUTime: FormControl<string | null | undefined>,

		/** Required */
		lastUpdateTime: FormControl<Date | null | undefined>,

		/**
		 * A Task fails if it exhausts its maximum retry count without returning exit code 0.
		 * Required
		 */
		numFailedTasks: FormControl<number | null | undefined>,

		/**
		 * A Task completes successfully if it returns exit code 0.
		 * Required
		 */
		numSucceededTasks: FormControl<number | null | undefined>,

		/** Required */
		numTaskRetries: FormControl<number | null | undefined>,

		/** Required */
		readIOGiB: FormControl<number | null | undefined>,

		/** Required */
		readIOps: FormControl<number | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,

		/** Required */
		userCPUTime: FormControl<string | null | undefined>,

		/**
		 * The wait time for a Task is defined as the elapsed time between the creation of the Task and the start of Task execution. (If the Task is retried due to failures, the wait time is the time to the most recent Task execution.) This value is only reported in the Account lifetime statistics; it is not included in the Job statistics.
		 * Required
		 */
		waitTime: FormControl<string | null | undefined>,

		/**
		 * The wall clock time is the elapsed time from when the Task started running on a Compute Node to when it finished (or to the last time the statistics were updated, if the Task had not finished by then). If a Task was retried, this includes the wall clock time of all the Task retries.
		 * Required
		 */
		wallClockTime: FormControl<string | null | undefined>,

		/** Required */
		writeIOGiB: FormControl<number | null | undefined>,

		/** Required */
		writeIOps: FormControl<number | null | undefined>,
	}
	export function CreateJobStatisticsFormGroup() {
		return new FormGroup<JobStatisticsFormProperties>({
			kernelCPUTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			numFailedTasks: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			numSucceededTasks: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			numTaskRetries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			readIOGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			readIOps: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userCPUTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			waitTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wallClockTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			writeIOGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			writeIOps: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface JobTerminateParameter {
		terminateReason?: string | null;
	}
	export interface JobTerminateParameterFormProperties {
		terminateReason: FormControl<string | null | undefined>,
	}
	export function CreateJobTerminateParameterFormGroup() {
		return new FormGroup<JobTerminateParameterFormProperties>({
			terminateReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobUpdateParameter {
		constraints?: JobConstraints;

		/** If omitted, it takes the default value of an empty list; in effect, any existing metadata is deleted. */
		metadata?: Array<MetadataItem>;
		onAllTasksComplete?: CloudJobOnAllTasksComplete | null;

		/** Required */
		poolInfo: PoolInformation;

		/** Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, it is set to the default value 0. */
		priority?: number | null;
	}
	export interface JobUpdateParameterFormProperties {
		onAllTasksComplete: FormControl<CloudJobOnAllTasksComplete | null | undefined>,

		/** Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, it is set to the default value 0. */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateJobUpdateParameterFormGroup() {
		return new FormGroup<JobUpdateParameterFormProperties>({
			onAllTasksComplete: new FormControl<CloudJobOnAllTasksComplete | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LinuxUserConfiguration {

		/** The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the gid. */
		gid?: number | null;

		/** The private key must not be password protected. The private key is used to automatically configure asymmetric-key based authentication for SSH between Compute Nodes in a Linux Pool when the Pool's enableInterNodeCommunication property is true (it is ignored if enableInterNodeCommunication is false). It does this by placing the key pair into the user's .ssh directory. If not specified, password-less SSH is not configured between Compute Nodes (no modification of the user's .ssh directory is done). */
		sshPrivateKey?: string | null;

		/** The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the uid. */
		uid?: number | null;
	}
	export interface LinuxUserConfigurationFormProperties {

		/** The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the gid. */
		gid: FormControl<number | null | undefined>,

		/** The private key must not be password protected. The private key is used to automatically configure asymmetric-key based authentication for SSH between Compute Nodes in a Linux Pool when the Pool's enableInterNodeCommunication property is true (it is ignored if enableInterNodeCommunication is false). It does this by placing the key pair into the user's .ssh directory. If not specified, password-less SSH is not configured between Compute Nodes (no modification of the user's .ssh directory is done). */
		sshPrivateKey: FormControl<string | null | undefined>,

		/** The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the uid. */
		uid: FormControl<number | null | undefined>,
	}
	export function CreateLinuxUserConfigurationFormGroup() {
		return new FormGroup<LinuxUserConfigurationFormProperties>({
			gid: new FormControl<number | null | undefined>(undefined),
			sshPrivateKey: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Multi-instance Tasks are commonly used to support MPI Tasks. In the MPI case, if any of the subtasks fail (for example due to exiting with a non-zero exit code) the entire multi-instance Task fails. The multi-instance Task is then terminated and retried, up to its retry limit. */
	export interface MultiInstanceSettings {

		/** The difference between common resource files and Task resource files is that common resource files are downloaded for all subtasks including the primary, whereas Task resource files are downloaded only for the primary. Also note that these resource files are not downloaded to the Task working directory, but instead are downloaded to the Task root directory (one directory above the working directory).  There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. */
		commonResourceFiles?: Array<ResourceFile>;

		/**
		 * A typical coordination command line launches a background service and verifies that the service is ready to process inter-node messages.
		 * Required
		 */
		coordinationCommandLine: string;

		/** If omitted, the default is 1. */
		numberOfInstances?: number | null;
	}

	/** Multi-instance Tasks are commonly used to support MPI Tasks. In the MPI case, if any of the subtasks fail (for example due to exiting with a non-zero exit code) the entire multi-instance Task fails. The multi-instance Task is then terminated and retried, up to its retry limit. */
	export interface MultiInstanceSettingsFormProperties {

		/**
		 * A typical coordination command line launches a background service and verifies that the service is ready to process inter-node messages.
		 * Required
		 */
		coordinationCommandLine: FormControl<string | null | undefined>,

		/** If omitted, the default is 1. */
		numberOfInstances: FormControl<number | null | undefined>,
	}
	export function CreateMultiInstanceSettingsFormGroup() {
		return new FormGroup<MultiInstanceSettingsFormProperties>({
			coordinationCommandLine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numberOfInstances: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface NFSMountConfiguration {

		/** These are 'net use' options in Windows and 'mount' options in Linux. */
		mountOptions?: string | null;

		/**
		 * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
		 * Required
		 */
		relativeMountPath: string;

		/** Required */
		source: string;
	}
	export interface NFSMountConfigurationFormProperties {

		/** These are 'net use' options in Windows and 'mount' options in Linux. */
		mountOptions: FormControl<string | null | undefined>,

		/**
		 * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
		 * Required
		 */
		relativeMountPath: FormControl<string | null | undefined>,

		/** Required */
		source: FormControl<string | null | undefined>,
	}
	export function CreateNFSMountConfigurationFormGroup() {
		return new FormGroup<NFSMountConfigurationFormProperties>({
			mountOptions: new FormControl<string | null | undefined>(undefined),
			relativeMountPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The network configuration for a Pool. */
	export interface NetworkConfiguration {
		dynamicVNetAssignmentScope?: NetworkConfigurationDynamicVNetAssignmentScope | null;
		endpointConfiguration?: PoolEndpointConfiguration;

		/** The number of IPs specified here limits the maximum size of the Pool - 50 dedicated nodes or 20 low-priority nodes can be allocated for each public IP. For example, a pool needing 150 dedicated VMs would need at least 3 public IPs specified. Each element of this collection is of the form: /subscriptions/{subscription}/resourceGroups/{group}/providers/Microsoft.Network/publicIPAddresses/{ip}. */
		publicIPs?: Array<string>;

		/** The virtual network must be in the same region and subscription as the Azure Batch Account. The specified subnet should have enough free IP addresses to accommodate the number of Compute Nodes in the Pool. If the subnet doesn't have enough free IP addresses, the Pool will partially allocate Nodes, and a resize error will occur. The 'MicrosoftAzureBatch' service principal must have the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role for the specified VNet. The specified subnet must allow communication from the Azure Batch service to be able to schedule Tasks on the Nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the Nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the Compute Nodes to unusable. For Pools created with virtualMachineConfiguration only ARM virtual networks ('Microsoft.Network/virtualNetworks') are supported, but for Pools created with cloudServiceConfiguration both ARM and classic virtual networks are supported. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication. For Pools created with a virtual machine configuration, enable ports 29876 and 29877, as well as port 22 for Linux and port 3389 for Windows. For Pools created with a cloud service configuration, enable ports 10100, 20100, and 30100. Also enable outbound connections to Azure Storage on port 443. For more details see: https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration */
		subnetId?: string | null;
	}

	/** The network configuration for a Pool. */
	export interface NetworkConfigurationFormProperties {
		dynamicVNetAssignmentScope: FormControl<NetworkConfigurationDynamicVNetAssignmentScope | null | undefined>,

		/** The virtual network must be in the same region and subscription as the Azure Batch Account. The specified subnet should have enough free IP addresses to accommodate the number of Compute Nodes in the Pool. If the subnet doesn't have enough free IP addresses, the Pool will partially allocate Nodes, and a resize error will occur. The 'MicrosoftAzureBatch' service principal must have the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role for the specified VNet. The specified subnet must allow communication from the Azure Batch service to be able to schedule Tasks on the Nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the Nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the Compute Nodes to unusable. For Pools created with virtualMachineConfiguration only ARM virtual networks ('Microsoft.Network/virtualNetworks') are supported, but for Pools created with cloudServiceConfiguration both ARM and classic virtual networks are supported. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication. For Pools created with a virtual machine configuration, enable ports 29876 and 29877, as well as port 22 for Linux and port 3389 for Windows. For Pools created with a cloud service configuration, enable ports 10100, 20100, and 30100. Also enable outbound connections to Azure Storage on port 443. For more details see: https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration */
		subnetId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkConfigurationFormGroup() {
		return new FormGroup<NetworkConfigurationFormProperties>({
			dynamicVNetAssignmentScope: new FormControl<NetworkConfigurationDynamicVNetAssignmentScope | null | undefined>(undefined),
			subnetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NetworkConfigurationDynamicVNetAssignmentScope { none = 'none', job = 'job' }


	/** The Batch Compute Node agent is a program that runs on each Compute Node in the Pool and provides Batch capability on the Compute Node. */
	export interface NodeAgentInformation {

		/**
		 * This is the most recent time that the Compute Node agent was updated to a new version.
		 * Required
		 */
		lastUpdateTime: Date;

		/**
		 * This version number can be checked against the Compute Node agent release notes located at https://github.com/Azure/Batch/blob/master/changelogs/nodeagent/CHANGELOG.md.
		 * Required
		 */
		version: string;
	}

	/** The Batch Compute Node agent is a program that runs on each Compute Node in the Pool and provides Batch capability on the Compute Node. */
	export interface NodeAgentInformationFormProperties {

		/**
		 * This is the most recent time that the Compute Node agent was updated to a new version.
		 * Required
		 */
		lastUpdateTime: FormControl<Date | null | undefined>,

		/**
		 * This version number can be checked against the Compute Node agent release notes located at https://github.com/Azure/Batch/blob/master/changelogs/nodeagent/CHANGELOG.md.
		 * Required
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateNodeAgentInformationFormGroup() {
		return new FormGroup<NodeAgentInformationFormProperties>({
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NodeCounts {

		/** Required */
		creating: number;

		/** Required */
		idle: number;

		/** Required */
		leavingPool: number;

		/** Required */
		offline: number;

		/** Required */
		preempted: number;

		/** Required */
		rebooting: number;

		/** Required */
		reimaging: number;

		/** Required */
		running: number;

		/** Required */
		startTaskFailed: number;

		/** Required */
		starting: number;

		/** Required */
		total: number;

		/** Required */
		unknown: number;

		/** Required */
		unusable: number;

		/** Required */
		waitingForStartTask: number;
	}
	export interface NodeCountsFormProperties {

		/** Required */
		creating: FormControl<number | null | undefined>,

		/** Required */
		idle: FormControl<number | null | undefined>,

		/** Required */
		leavingPool: FormControl<number | null | undefined>,

		/** Required */
		offline: FormControl<number | null | undefined>,

		/** Required */
		preempted: FormControl<number | null | undefined>,

		/** Required */
		rebooting: FormControl<number | null | undefined>,

		/** Required */
		reimaging: FormControl<number | null | undefined>,

		/** Required */
		running: FormControl<number | null | undefined>,

		/** Required */
		startTaskFailed: FormControl<number | null | undefined>,

		/** Required */
		starting: FormControl<number | null | undefined>,

		/** Required */
		total: FormControl<number | null | undefined>,

		/** Required */
		unknown: FormControl<number | null | undefined>,

		/** Required */
		unusable: FormControl<number | null | undefined>,

		/** Required */
		waitingForStartTask: FormControl<number | null | undefined>,
	}
	export function CreateNodeCountsFormGroup() {
		return new FormGroup<NodeCountsFormProperties>({
			creating: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			idle: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			leavingPool: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			offline: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			preempted: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			rebooting: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			reimaging: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			running: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTaskFailed: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			starting: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unknown: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unusable: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			waitingForStartTask: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NodeDisableSchedulingParameter {

		/** The default value is requeue. */
		nodeDisableSchedulingOption?: NodeDisableSchedulingParameterNodeDisableSchedulingOption | null;
	}
	export interface NodeDisableSchedulingParameterFormProperties {

		/** The default value is requeue. */
		nodeDisableSchedulingOption: FormControl<NodeDisableSchedulingParameterNodeDisableSchedulingOption | null | undefined>,
	}
	export function CreateNodeDisableSchedulingParameterFormGroup() {
		return new FormGroup<NodeDisableSchedulingParameterFormProperties>({
			nodeDisableSchedulingOption: new FormControl<NodeDisableSchedulingParameterNodeDisableSchedulingOption | null | undefined>(undefined),
		});

	}

	export enum NodeDisableSchedulingParameterNodeDisableSchedulingOption { requeue = 'requeue', terminate = 'terminate', taskcompletion = 'taskcompletion' }

	export interface NodeFile {
		isDirectory?: boolean | null;
		name?: string | null;
		properties?: FileProperties;
		url?: string | null;
	}
	export interface NodeFileFormProperties {
		isDirectory: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateNodeFileFormGroup() {
		return new FormGroup<NodeFileFormProperties>({
			isDirectory: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NodeFileListResult {
		'odata.nextLink'?: string | null;
		value?: Array<NodeFile>;
	}
	export interface NodeFileListResultFormProperties {
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreateNodeFileListResultFormGroup() {
		return new FormGroup<NodeFileListResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NodeRebootParameter {

		/** The default value is requeue. */
		nodeRebootOption?: ComputeNodeDeallocationOption | null;
	}
	export interface NodeRebootParameterFormProperties {

		/** The default value is requeue. */
		nodeRebootOption: FormControl<ComputeNodeDeallocationOption | null | undefined>,
	}
	export function CreateNodeRebootParameterFormGroup() {
		return new FormGroup<NodeRebootParameterFormProperties>({
			nodeRebootOption: new FormControl<ComputeNodeDeallocationOption | null | undefined>(undefined),
		});

	}

	export interface NodeReimageParameter {

		/** The default value is requeue. */
		nodeReimageOption?: ComputeNodeDeallocationOption | null;
	}
	export interface NodeReimageParameterFormProperties {

		/** The default value is requeue. */
		nodeReimageOption: FormControl<ComputeNodeDeallocationOption | null | undefined>,
	}
	export function CreateNodeReimageParameterFormGroup() {
		return new FormGroup<NodeReimageParameterFormProperties>({
			nodeReimageOption: new FormControl<ComputeNodeDeallocationOption | null | undefined>(undefined),
		});

	}

	export interface NodeRemoveParameter {

		/** The default value is requeue. */
		nodeDeallocationOption?: ComputeNodeDeallocationOption | null;

		/**
		 * Required
		 * Maximum items: 100
		 */
		nodeList: Array<string>;

		/** The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		resizeTimeout?: string | null;
	}
	export interface NodeRemoveParameterFormProperties {

		/** The default value is requeue. */
		nodeDeallocationOption: FormControl<ComputeNodeDeallocationOption | null | undefined>,

		/** The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		resizeTimeout: FormControl<string | null | undefined>,
	}
	export function CreateNodeRemoveParameterFormGroup() {
		return new FormGroup<NodeRemoveParameterFormProperties>({
			nodeDeallocationOption: new FormControl<ComputeNodeDeallocationOption | null | undefined>(undefined),
			resizeTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NodeUpdateUserParameter {

		/** If omitted, the default is 1 day from the current time. For Linux Compute Nodes, the expiryTime has a precision up to a day. */
		expiryTime?: Date | null;

		/** The password is required for Windows Compute Nodes (those created with 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration' using a Windows Image reference). For Linux Compute Nodes, the password can optionally be specified along with the sshPublicKey property. If omitted, any existing password is removed. */
		password?: string | null;

		/** The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux Compute Nodes. If this is specified for a Windows Compute Node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). If omitted, any existing SSH public key is removed. */
		sshPublicKey?: string | null;
	}
	export interface NodeUpdateUserParameterFormProperties {

		/** If omitted, the default is 1 day from the current time. For Linux Compute Nodes, the expiryTime has a precision up to a day. */
		expiryTime: FormControl<Date | null | undefined>,

		/** The password is required for Windows Compute Nodes (those created with 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration' using a Windows Image reference). For Linux Compute Nodes, the password can optionally be specified along with the sshPublicKey property. If omitted, any existing password is removed. */
		password: FormControl<string | null | undefined>,

		/** The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux Compute Nodes. If this is specified for a Windows Compute Node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). If omitted, any existing SSH public key is removed. */
		sshPublicKey: FormControl<string | null | undefined>,
	}
	export function CreateNodeUpdateUserParameterFormGroup() {
		return new FormGroup<NodeUpdateUserParameterFormProperties>({
			expiryTime: new FormControl<Date | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			sshPublicKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OnAllTasksComplete { noaction = 'noaction', terminatejob = 'terminatejob' }


	/** A Task is considered to have failed if has a failureInfo. A failureInfo is set if the Task completes with a non-zero exit code after exhausting its retry count, or if there was an error starting the Task, for example due to a resource file download error. The default is noaction. */
	export enum OnTaskFailure { noaction = 'noaction', performexitoptionsjobaction = 'performexitoptionsjobaction' }

	export interface OutputFileBlobContainerDestination {

		/**
		 * The URL must include a Shared Access Signature (SAS) granting write permissions to the container.
		 * Required
		 */
		containerUrl: string;

		/** If filePattern refers to a specific file (i.e. contains no wildcards), then path is the name of the blob to which to upload that file. If filePattern contains one or more wildcards (and therefore may match multiple files), then path is the name of the blob virtual directory (which is prepended to each blob name) to which to upload the file(s). If omitted, file(s) are uploaded to the root of the container with a blob name matching their file name. */
		path?: string | null;
	}
	export interface OutputFileBlobContainerDestinationFormProperties {

		/**
		 * The URL must include a Shared Access Signature (SAS) granting write permissions to the container.
		 * Required
		 */
		containerUrl: FormControl<string | null | undefined>,

		/** If filePattern refers to a specific file (i.e. contains no wildcards), then path is the name of the blob to which to upload that file. If filePattern contains one or more wildcards (and therefore may match multiple files), then path is the name of the blob virtual directory (which is prepended to each blob name) to which to upload the file(s). If omitted, file(s) are uploaded to the root of the container with a blob name matching their file name. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateOutputFileBlobContainerDestinationFormGroup() {
		return new FormGroup<OutputFileBlobContainerDestinationFormProperties>({
			containerUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OutputFileDestination {
		container?: OutputFileBlobContainerDestination;
	}
	export interface OutputFileDestinationFormProperties {
	}
	export function CreateOutputFileDestinationFormGroup() {
		return new FormGroup<OutputFileDestinationFormProperties>({
		});

	}

	export enum OutputFileUploadCondition { tasksuccess = 'tasksuccess', taskfailure = 'taskfailure', taskcompletion = 'taskcompletion' }

	export interface OutputFileUploadOptions {

		/** Required */
		uploadCondition: OutputFileUploadCondition;
	}
	export interface OutputFileUploadOptionsFormProperties {

		/** Required */
		uploadCondition: FormControl<OutputFileUploadCondition | null | undefined>,
	}
	export function CreateOutputFileUploadOptionsFormGroup() {
		return new FormGroup<OutputFileUploadOptionsFormProperties>({
			uploadCondition: new FormControl<OutputFileUploadCondition | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PoolAddParameter {

		/** The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, Pool creation will fail. */
		applicationLicenses?: Array<string>;

		/** Changes to Package references affect all new Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. There is a maximum of 10 Package references on any given Pool. */
		applicationPackageReferences?: Array<ApplicationPackageReference>;

		/** The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		autoScaleEvaluationInterval?: string | null;

		/** This property must not be specified if enableAutoScale is set to false. It is required if enableAutoScale is set to true. The formula is checked for validity before the Pool is created. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see 'Automatically scale Compute Nodes in an Azure Batch Pool' (https://azure.microsoft.com/documentation/articles/batch-automatic-scaling/). */
		autoScaleFormula?: string | null;

		/** For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location. For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory. */
		certificateReferences?: Array<CertificateReference>;
		cloudServiceConfiguration?: CloudServiceConfiguration;

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName?: string | null;

		/** If false, at least one of targetDedicateNodes and targetLowPriorityNodes must be specified. If true, the autoScaleFormula property is required and the Pool automatically resizes according to the formula. The default value is false. */
		enableAutoScale?: boolean | null;

		/** Enabling inter-node communication limits the maximum size of the Pool due to deployment restrictions on the Compute Nodes of the Pool. This may result in the Pool not reaching its desired size. The default value is false. */
		enableInterNodeCommunication?: boolean | null;

		/**
		 * The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two Pool IDs within an Account that differ only by case).
		 * Required
		 */
		id: string;

		/** The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the Pool or 256. */
		maxTasksPerNode?: number | null;

		/** The Batch service does not assign any meaning to metadata; it is solely for the use of user code. */
		metadata?: Array<MetadataItem>;

		/** Mount the storage using Azure fileshare, NFS, CIFS or Blobfuse based file system. */
		mountConfiguration?: Array<MountConfiguration>;

		/** The network configuration for a Pool. */
		networkConfiguration?: NetworkConfiguration;

		/** This timeout applies only to manual scaling; it has no effect when enableAutoScale is set to true. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		resizeTimeout?: string | null;

		/** Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. In some cases the StartTask may be re-run even though the Compute Node was not rebooted. Special care should be taken to avoid StartTasks which create breakaway process or install/launch services from the StartTask working directory, as this will block Batch from being able to re-run the StartTask. */
		startTask?: StartTask;

		/** This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both. */
		targetDedicatedNodes?: number | null;

		/** This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both. */
		targetLowPriorityNodes?: number | null;
		taskSchedulingPolicy?: TaskSchedulingPolicy;
		userAccounts?: Array<UserAccount>;
		virtualMachineConfiguration?: VirtualMachineConfiguration;

		/**
		 * For information about available sizes of virtual machines for Cloud Services Pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2. For information about available VM sizes for Pools using Images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
		 * Required
		 */
		vmSize: string;
	}
	export interface PoolAddParameterFormProperties {

		/** The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		autoScaleEvaluationInterval: FormControl<string | null | undefined>,

		/** This property must not be specified if enableAutoScale is set to false. It is required if enableAutoScale is set to true. The formula is checked for validity before the Pool is created. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see 'Automatically scale Compute Nodes in an Azure Batch Pool' (https://azure.microsoft.com/documentation/articles/batch-automatic-scaling/). */
		autoScaleFormula: FormControl<string | null | undefined>,

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName: FormControl<string | null | undefined>,

		/** If false, at least one of targetDedicateNodes and targetLowPriorityNodes must be specified. If true, the autoScaleFormula property is required and the Pool automatically resizes according to the formula. The default value is false. */
		enableAutoScale: FormControl<boolean | null | undefined>,

		/** Enabling inter-node communication limits the maximum size of the Pool due to deployment restrictions on the Compute Nodes of the Pool. This may result in the Pool not reaching its desired size. The default value is false. */
		enableInterNodeCommunication: FormControl<boolean | null | undefined>,

		/**
		 * The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two Pool IDs within an Account that differ only by case).
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the Pool or 256. */
		maxTasksPerNode: FormControl<number | null | undefined>,

		/** This timeout applies only to manual scaling; it has no effect when enableAutoScale is set to true. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		resizeTimeout: FormControl<string | null | undefined>,

		/** This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both. */
		targetDedicatedNodes: FormControl<number | null | undefined>,

		/** This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both. */
		targetLowPriorityNodes: FormControl<number | null | undefined>,

		/**
		 * For information about available sizes of virtual machines for Cloud Services Pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2. For information about available VM sizes for Pools using Images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
		 * Required
		 */
		vmSize: FormControl<string | null | undefined>,
	}
	export function CreatePoolAddParameterFormGroup() {
		return new FormGroup<PoolAddParameterFormProperties>({
			autoScaleEvaluationInterval: new FormControl<string | null | undefined>(undefined),
			autoScaleFormula: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enableAutoScale: new FormControl<boolean | null | undefined>(undefined),
			enableInterNodeCommunication: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxTasksPerNode: new FormControl<number | null | undefined>(undefined),
			resizeTimeout: new FormControl<string | null | undefined>(undefined),
			targetDedicatedNodes: new FormControl<number | null | undefined>(undefined),
			targetLowPriorityNodes: new FormControl<number | null | undefined>(undefined),
			vmSize: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PoolEnableAutoScaleParameter {

		/** The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service rejects the request with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). If you specify a new interval, then the existing autoscale evaluation schedule will be stopped and a new autoscale evaluation schedule will be started, with its starting time being the time when this request was issued. */
		autoScaleEvaluationInterval?: string | null;

		/** The formula is checked for validity before it is applied to the Pool. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see Automatically scale Compute Nodes in an Azure Batch Pool (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling). */
		autoScaleFormula?: string | null;
	}
	export interface PoolEnableAutoScaleParameterFormProperties {

		/** The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service rejects the request with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). If you specify a new interval, then the existing autoscale evaluation schedule will be stopped and a new autoscale evaluation schedule will be started, with its starting time being the time when this request was issued. */
		autoScaleEvaluationInterval: FormControl<string | null | undefined>,

		/** The formula is checked for validity before it is applied to the Pool. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see Automatically scale Compute Nodes in an Azure Batch Pool (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling). */
		autoScaleFormula: FormControl<string | null | undefined>,
	}
	export function CreatePoolEnableAutoScaleParameterFormGroup() {
		return new FormGroup<PoolEnableAutoScaleParameterFormProperties>({
			autoScaleEvaluationInterval: new FormControl<string | null | undefined>(undefined),
			autoScaleFormula: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PoolEndpointConfiguration {

		/**
		 * The maximum number of inbound NAT Pools per Batch Pool is 5. If the maximum number of inbound NAT Pools is exceeded the request fails with HTTP status code 400.
		 * Required
		 */
		inboundNATPools: Array<InboundNATPool>;
	}
	export interface PoolEndpointConfigurationFormProperties {
	}
	export function CreatePoolEndpointConfigurationFormGroup() {
		return new FormGroup<PoolEndpointConfigurationFormProperties>({
		});

	}

	export interface PoolEvaluateAutoScaleParameter {

		/**
		 * The formula is validated and its results calculated, but it is not applied to the Pool. To apply the formula to the Pool, 'Enable automatic scaling on a Pool'. For more information about specifying this formula, see Automatically scale Compute Nodes in an Azure Batch Pool (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling).
		 * Required
		 */
		autoScaleFormula: string;
	}
	export interface PoolEvaluateAutoScaleParameterFormProperties {

		/**
		 * The formula is validated and its results calculated, but it is not applied to the Pool. To apply the formula to the Pool, 'Enable automatic scaling on a Pool'. For more information about specifying this formula, see Automatically scale Compute Nodes in an Azure Batch Pool (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling).
		 * Required
		 */
		autoScaleFormula: FormControl<string | null | undefined>,
	}
	export function CreatePoolEvaluateAutoScaleParameterFormGroup() {
		return new FormGroup<PoolEvaluateAutoScaleParameterFormProperties>({
			autoScaleFormula: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PoolInformation {
		autoPoolSpecification?: AutoPoolSpecification;

		/** You must ensure that the Pool referenced by this property exists. If the Pool does not exist at the time the Batch service tries to schedule a Job, no Tasks for the Job will run until you create a Pool with that id. Note that the Batch service will not reject the Job request; it will simply not run Tasks until the Pool exists. You must specify either the Pool ID or the auto Pool specification, but not both. */
		poolId?: string | null;
	}
	export interface PoolInformationFormProperties {

		/** You must ensure that the Pool referenced by this property exists. If the Pool does not exist at the time the Batch service tries to schedule a Job, no Tasks for the Job will run until you create a Pool with that id. Note that the Batch service will not reject the Job request; it will simply not run Tasks until the Pool exists. You must specify either the Pool ID or the auto Pool specification, but not both. */
		poolId: FormControl<string | null | undefined>,
	}
	export function CreatePoolInformationFormGroup() {
		return new FormGroup<PoolInformationFormProperties>({
			poolId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PoolListUsageMetricsResult {
		'odata.nextLink'?: string | null;
		value?: Array<PoolUsageMetrics>;
	}
	export interface PoolListUsageMetricsResultFormProperties {
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreatePoolListUsageMetricsResultFormGroup() {
		return new FormGroup<PoolListUsageMetricsResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PoolUsageMetrics {

		/** Required */
		endTime: Date;

		/** Required */
		poolId: string;

		/** Required */
		startTime: Date;

		/** Required */
		totalCoreHours: number;

		/**
		 * For information about available sizes of virtual machines in Pools, see Choose a VM size for Compute Nodes in an Azure Batch Pool (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes).
		 * Required
		 */
		vmSize: string;
	}
	export interface PoolUsageMetricsFormProperties {

		/** Required */
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		poolId: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		totalCoreHours: FormControl<number | null | undefined>,

		/**
		 * For information about available sizes of virtual machines in Pools, see Choose a VM size for Compute Nodes in an Azure Batch Pool (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes).
		 * Required
		 */
		vmSize: FormControl<string | null | undefined>,
	}
	export function CreatePoolUsageMetricsFormGroup() {
		return new FormGroup<PoolUsageMetricsFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			poolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			totalCoreHours: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			vmSize: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PoolNodeCounts {
		dedicated?: NodeCounts;
		lowPriority?: NodeCounts;

		/** Required */
		poolId: string;
	}
	export interface PoolNodeCountsFormProperties {

		/** Required */
		poolId: FormControl<string | null | undefined>,
	}
	export function CreatePoolNodeCountsFormGroup() {
		return new FormGroup<PoolNodeCountsFormProperties>({
			poolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PoolNodeCountsListResult {
		'odata.nextLink'?: string | null;

		/** A list of Compute Node counts by Pool. */
		value?: Array<PoolNodeCounts>;
	}
	export interface PoolNodeCountsListResultFormProperties {
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreatePoolNodeCountsListResultFormGroup() {
		return new FormGroup<PoolNodeCountsListResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PoolPatchParameter {

		/** Changes to Package references affect all new Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. If this element is present, it replaces any existing Package references. If you specify an empty collection, then all Package references are removed from the Pool. If omitted, any existing Package references are left unchanged. */
		applicationPackageReferences?: Array<ApplicationPackageReference>;

		/** If this element is present, it replaces any existing Certificate references configured on the Pool. If omitted, any existing Certificate references are left unchanged. For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location. For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory. */
		certificateReferences?: Array<CertificateReference>;

		/** If this element is present, it replaces any existing metadata configured on the Pool. If you specify an empty collection, any metadata is removed from the Pool. If omitted, any existing metadata is left unchanged. */
		metadata?: Array<MetadataItem>;

		/** Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. In some cases the StartTask may be re-run even though the Compute Node was not rebooted. Special care should be taken to avoid StartTasks which create breakaway process or install/launch services from the StartTask working directory, as this will block Batch from being able to re-run the StartTask. */
		startTask?: StartTask;
	}
	export interface PoolPatchParameterFormProperties {
	}
	export function CreatePoolPatchParameterFormGroup() {
		return new FormGroup<PoolPatchParameterFormProperties>({
		});

	}

	export interface PoolResizeParameter {

		/** The default value is requeue. */
		nodeDeallocationOption?: ComputeNodeDeallocationOption | null;

		/** The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		resizeTimeout?: string | null;
		targetDedicatedNodes?: number | null;
		targetLowPriorityNodes?: number | null;
	}
	export interface PoolResizeParameterFormProperties {

		/** The default value is requeue. */
		nodeDeallocationOption: FormControl<ComputeNodeDeallocationOption | null | undefined>,

		/** The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		resizeTimeout: FormControl<string | null | undefined>,
		targetDedicatedNodes: FormControl<number | null | undefined>,
		targetLowPriorityNodes: FormControl<number | null | undefined>,
	}
	export function CreatePoolResizeParameterFormGroup() {
		return new FormGroup<PoolResizeParameterFormProperties>({
			nodeDeallocationOption: new FormControl<ComputeNodeDeallocationOption | null | undefined>(undefined),
			resizeTimeout: new FormControl<string | null | undefined>(undefined),
			targetDedicatedNodes: new FormControl<number | null | undefined>(undefined),
			targetLowPriorityNodes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PoolSpecification {

		/** The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, Pool creation will fail. The permitted licenses available on the Pool are 'maya', 'vray', '3dsmax', 'arnold'. An additional charge applies for each application license added to the Pool. */
		applicationLicenses?: Array<string>;

		/** Changes to Package references affect all new Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. There is a maximum of 10 Package references on any given Pool. */
		applicationPackageReferences?: Array<ApplicationPackageReference>;

		/** The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service rejects the request with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		autoScaleEvaluationInterval?: string | null;

		/** This property must not be specified if enableAutoScale is set to false. It is required if enableAutoScale is set to true. The formula is checked for validity before the Pool is created. If the formula is not valid, the Batch service rejects the request with detailed error information. */
		autoScaleFormula?: string | null;

		/** For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location. For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory. */
		certificateReferences?: Array<CertificateReference>;
		cloudServiceConfiguration?: CloudServiceConfiguration;

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName?: string | null;

		/** If false, at least one of targetDedicateNodes and targetLowPriorityNodes must be specified. If true, the autoScaleFormula element is required. The Pool automatically resizes according to the formula. The default value is false. */
		enableAutoScale?: boolean | null;

		/** Enabling inter-node communication limits the maximum size of the Pool due to deployment restrictions on the Compute Nodes of the Pool. This may result in the Pool not reaching its desired size. The default value is false. */
		enableInterNodeCommunication?: boolean | null;

		/** The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the Pool or 256. */
		maxTasksPerNode?: number | null;

		/** The Batch service does not assign any meaning to metadata; it is solely for the use of user code. */
		metadata?: Array<MetadataItem>;

		/** This supports Azure Files, NFS, CIFS/SMB, and Blobfuse. */
		mountConfiguration?: Array<MountConfiguration>;

		/** The network configuration for a Pool. */
		networkConfiguration?: NetworkConfiguration;

		/** This timeout applies only to manual scaling; it has no effect when enableAutoScale is set to true. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service rejects the request with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		resizeTimeout?: string | null;

		/** Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. In some cases the StartTask may be re-run even though the Compute Node was not rebooted. Special care should be taken to avoid StartTasks which create breakaway process or install/launch services from the StartTask working directory, as this will block Batch from being able to re-run the StartTask. */
		startTask?: StartTask;

		/** This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both. */
		targetDedicatedNodes?: number | null;

		/** This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both. */
		targetLowPriorityNodes?: number | null;
		taskSchedulingPolicy?: TaskSchedulingPolicy;
		userAccounts?: Array<UserAccount>;
		virtualMachineConfiguration?: VirtualMachineConfiguration;

		/**
		 * For information about available sizes of virtual machines in Pools, see Choose a VM size for Compute Nodes in an Azure Batch Pool (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes).
		 * Required
		 */
		vmSize: string;
	}
	export interface PoolSpecificationFormProperties {

		/** The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service rejects the request with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		autoScaleEvaluationInterval: FormControl<string | null | undefined>,

		/** This property must not be specified if enableAutoScale is set to false. It is required if enableAutoScale is set to true. The formula is checked for validity before the Pool is created. If the formula is not valid, the Batch service rejects the request with detailed error information. */
		autoScaleFormula: FormControl<string | null | undefined>,

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName: FormControl<string | null | undefined>,

		/** If false, at least one of targetDedicateNodes and targetLowPriorityNodes must be specified. If true, the autoScaleFormula element is required. The Pool automatically resizes according to the formula. The default value is false. */
		enableAutoScale: FormControl<boolean | null | undefined>,

		/** Enabling inter-node communication limits the maximum size of the Pool due to deployment restrictions on the Compute Nodes of the Pool. This may result in the Pool not reaching its desired size. The default value is false. */
		enableInterNodeCommunication: FormControl<boolean | null | undefined>,

		/** The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the Pool or 256. */
		maxTasksPerNode: FormControl<number | null | undefined>,

		/** This timeout applies only to manual scaling; it has no effect when enableAutoScale is set to true. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service rejects the request with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		resizeTimeout: FormControl<string | null | undefined>,

		/** This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both. */
		targetDedicatedNodes: FormControl<number | null | undefined>,

		/** This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both. */
		targetLowPriorityNodes: FormControl<number | null | undefined>,

		/**
		 * For information about available sizes of virtual machines in Pools, see Choose a VM size for Compute Nodes in an Azure Batch Pool (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes).
		 * Required
		 */
		vmSize: FormControl<string | null | undefined>,
	}
	export function CreatePoolSpecificationFormGroup() {
		return new FormGroup<PoolSpecificationFormProperties>({
			autoScaleEvaluationInterval: new FormControl<string | null | undefined>(undefined),
			autoScaleFormula: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enableAutoScale: new FormControl<boolean | null | undefined>(undefined),
			enableInterNodeCommunication: new FormControl<boolean | null | undefined>(undefined),
			maxTasksPerNode: new FormControl<number | null | undefined>(undefined),
			resizeTimeout: new FormControl<string | null | undefined>(undefined),
			targetDedicatedNodes: new FormControl<number | null | undefined>(undefined),
			targetLowPriorityNodes: new FormControl<number | null | undefined>(undefined),
			vmSize: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PoolStatistics {

		/** Required */
		lastUpdateTime: Date;
		resourceStats?: ResourceStatistics;

		/** Required */
		startTime: Date;

		/** Required */
		url: string;
		usageStats?: UsageStatistics;
	}
	export interface PoolStatisticsFormProperties {

		/** Required */
		lastUpdateTime: FormControl<Date | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePoolStatisticsFormGroup() {
		return new FormGroup<PoolStatisticsFormProperties>({
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PoolUpdatePropertiesParameter {

		/**
		 * The list replaces any existing Application Package references on the Pool. Changes to Application Package references affect all new Compute Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. There is a maximum of 10 Application Package references on any given Pool. If omitted, or if you specify an empty collection, any existing Application Packages references are removed from the Pool. A maximum of 10 references may be specified on a given Pool.
		 * Required
		 */
		applicationPackageReferences: Array<ApplicationPackageReference>;

		/**
		 * This list replaces any existing Certificate references configured on the Pool. If you specify an empty collection, any existing Certificate references are removed from the Pool. For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location. For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory.
		 * Required
		 */
		certificateReferences: Array<CertificateReference>;

		/**
		 * This list replaces any existing metadata configured on the Pool. If omitted, or if you specify an empty collection, any existing metadata is removed from the Pool.
		 * Required
		 */
		metadata: Array<MetadataItem>;

		/** Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. In some cases the StartTask may be re-run even though the Compute Node was not rebooted. Special care should be taken to avoid StartTasks which create breakaway process or install/launch services from the StartTask working directory, as this will block Batch from being able to re-run the StartTask. */
		startTask?: StartTask;
	}
	export interface PoolUpdatePropertiesParameterFormProperties {
	}
	export function CreatePoolUpdatePropertiesParameterFormGroup() {
		return new FormGroup<PoolUpdatePropertiesParameterFormProperties>({
		});

	}

	export interface RecentJob {
		id?: string | null;
		url?: string | null;
	}
	export interface RecentJobFormProperties {
		id: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateRecentJobFormGroup() {
		return new FormGroup<RecentJobFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceStatistics {

		/** Required */
		avgCPUPercentage: number;

		/** Required */
		avgDiskGiB: number;

		/** Required */
		avgMemoryGiB: number;

		/** Required */
		diskReadGiB: number;

		/** Required */
		diskReadIOps: number;

		/** Required */
		diskWriteGiB: number;

		/** Required */
		diskWriteIOps: number;

		/** Required */
		lastUpdateTime: Date;

		/** Required */
		networkReadGiB: number;

		/** Required */
		networkWriteGiB: number;

		/** Required */
		peakDiskGiB: number;

		/** Required */
		peakMemoryGiB: number;

		/** Required */
		startTime: Date;
	}
	export interface ResourceStatisticsFormProperties {

		/** Required */
		avgCPUPercentage: FormControl<number | null | undefined>,

		/** Required */
		avgDiskGiB: FormControl<number | null | undefined>,

		/** Required */
		avgMemoryGiB: FormControl<number | null | undefined>,

		/** Required */
		diskReadGiB: FormControl<number | null | undefined>,

		/** Required */
		diskReadIOps: FormControl<number | null | undefined>,

		/** Required */
		diskWriteGiB: FormControl<number | null | undefined>,

		/** Required */
		diskWriteIOps: FormControl<number | null | undefined>,

		/** Required */
		lastUpdateTime: FormControl<Date | null | undefined>,

		/** Required */
		networkReadGiB: FormControl<number | null | undefined>,

		/** Required */
		networkWriteGiB: FormControl<number | null | undefined>,

		/** Required */
		peakDiskGiB: FormControl<number | null | undefined>,

		/** Required */
		peakMemoryGiB: FormControl<number | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateResourceStatisticsFormGroup() {
		return new FormGroup<ResourceStatisticsFormProperties>({
			avgCPUPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			avgDiskGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			avgMemoryGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			diskReadGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			diskReadIOps: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			diskWriteGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			diskWriteIOps: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			networkReadGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			networkWriteGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			peakDiskGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			peakMemoryGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Schedule {

		/** If you do not specify a doNotRunAfter time, and you are creating a recurring Job Schedule, the Job Schedule will remain active until you explicitly terminate it. */
		doNotRunAfter?: Date | null;

		/** If you do not specify a doNotRunUntil time, the schedule becomes ready to create Jobs immediately. */
		doNotRunUntil?: Date | null;

		/** Because a Job Schedule can have at most one active Job under it at any given time, if it is time to create a new Job under a Job Schedule, but the previous Job is still running, the Batch service will not create the new Job until the previous Job finishes. If the previous Job does not finish within the startWindow period of the new recurrenceInterval, then no new Job will be scheduled for that interval. For recurring Jobs, you should normally specify a jobManagerTask in the jobSpecification. If you do not use jobManagerTask, you will need an external process to monitor when Jobs are created, add Tasks to the Jobs and terminate the Jobs ready for the next recurrence. The default is that the schedule does not recur: one Job is created, within the startWindow after the doNotRunUntil time, and the schedule is complete as soon as that Job finishes. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		recurrenceInterval?: string | null;

		/** If a Job is not created within the startWindow interval, then the 'opportunity' is lost; no Job will be created until the next recurrence of the schedule. If the schedule is recurring, and the startWindow is longer than the recurrence interval, then this is equivalent to an infinite startWindow, because the Job that is 'due' in one recurrenceInterval is not carried forward into the next recurrence interval. The default is infinite. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		startWindow?: string | null;
	}
	export interface ScheduleFormProperties {

		/** If you do not specify a doNotRunAfter time, and you are creating a recurring Job Schedule, the Job Schedule will remain active until you explicitly terminate it. */
		doNotRunAfter: FormControl<Date | null | undefined>,

		/** If you do not specify a doNotRunUntil time, the schedule becomes ready to create Jobs immediately. */
		doNotRunUntil: FormControl<Date | null | undefined>,

		/** Because a Job Schedule can have at most one active Job under it at any given time, if it is time to create a new Job under a Job Schedule, but the previous Job is still running, the Batch service will not create the new Job until the previous Job finishes. If the previous Job does not finish within the startWindow period of the new recurrenceInterval, then no new Job will be scheduled for that interval. For recurring Jobs, you should normally specify a jobManagerTask in the jobSpecification. If you do not use jobManagerTask, you will need an external process to monitor when Jobs are created, add Tasks to the Jobs and terminate the Jobs ready for the next recurrence. The default is that the schedule does not recur: one Job is created, within the startWindow after the doNotRunUntil time, and the schedule is complete as soon as that Job finishes. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		recurrenceInterval: FormControl<string | null | undefined>,

		/** If a Job is not created within the startWindow interval, then the 'opportunity' is lost; no Job will be created until the next recurrence of the schedule. If the schedule is recurring, and the startWindow is longer than the recurrence interval, then this is equivalent to an infinite startWindow, because the Job that is 'due' in one recurrenceInterval is not carried forward into the next recurrence interval. The default is infinite. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		startWindow: FormControl<string | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			doNotRunAfter: new FormControl<Date | null | undefined>(undefined),
			doNotRunUntil: new FormControl<Date | null | undefined>(undefined),
			recurrenceInterval: new FormControl<string | null | undefined>(undefined),
			startWindow: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. In some cases the StartTask may be re-run even though the Compute Node was not rebooted. Special care should be taken to avoid StartTasks which create breakaway process or install/launch services from the StartTask working directory, as this will block Batch from being able to re-run the StartTask. */
	export interface StartTask {

		/**
		 * The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
		 * Required
		 */
		commandLine: string;
		containerSettings?: TaskContainerSettings;
		environmentSettings?: Array<EnvironmentSetting>;

		/** The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the Task. If the maximum retry count is -1, the Batch service retries the Task without limit. */
		maxTaskRetryCount?: number | null;

		/** Files listed under this element are located in the Task's working directory. */
		resourceFiles?: Array<ResourceFile>;

		/** Specify either the userName or autoUser property, but not both. */
		userIdentity?: UserIdentity;

		/** If true and the StartTask fails on a Node, the Batch service retries the StartTask up to its maximum retry count (maxTaskRetryCount). If the Task has still not completed successfully after all retries, then the Batch service marks the Node unusable, and will not schedule Tasks to it. This condition can be detected via the Compute Node state and failure info details. If false, the Batch service will not wait for the StartTask to complete. In this case, other Tasks can start executing on the Compute Node while the StartTask is still running; and even if the StartTask fails, new Tasks will continue to be scheduled on the Compute Node. The default is true. */
		waitForSuccess?: boolean | null;
	}

	/** Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. In some cases the StartTask may be re-run even though the Compute Node was not rebooted. Special care should be taken to avoid StartTasks which create breakaway process or install/launch services from the StartTask working directory, as this will block Batch from being able to re-run the StartTask. */
	export interface StartTaskFormProperties {

		/**
		 * The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
		 * Required
		 */
		commandLine: FormControl<string | null | undefined>,

		/** The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the Task. If the maximum retry count is -1, the Batch service retries the Task without limit. */
		maxTaskRetryCount: FormControl<number | null | undefined>,

		/** If true and the StartTask fails on a Node, the Batch service retries the StartTask up to its maximum retry count (maxTaskRetryCount). If the Task has still not completed successfully after all retries, then the Batch service marks the Node unusable, and will not schedule Tasks to it. This condition can be detected via the Compute Node state and failure info details. If false, the Batch service will not wait for the StartTask to complete. In this case, other Tasks can start executing on the Compute Node while the StartTask is still running; and even if the StartTask fails, new Tasks will continue to be scheduled on the Compute Node. The default is true. */
		waitForSuccess: FormControl<boolean | null | undefined>,
	}
	export function CreateStartTaskFormGroup() {
		return new FormGroup<StartTaskFormProperties>({
			commandLine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxTaskRetryCount: new FormControl<number | null | undefined>(undefined),
			waitForSuccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StartTaskInformation {
		containerInfo?: TaskContainerExecutionInformation;

		/** This is the end time of the most recent run of the StartTask, if that run has completed (even if that run failed and a retry is pending). This element is not present if the StartTask is currently running. */
		endTime?: Date | null;

		/** This property is set only if the StartTask is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the StartTask (due to timeout, or user termination via the API) you may see an operating system-defined exit code. */
		exitCode?: number | null;
		failureInfo?: TaskFailureInformation;

		/** This element is present only if the Task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the Task has been restarted for reasons other than retry; for example, if the Compute Node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not. */
		lastRetryTime?: Date | null;
		result?: SubtaskInformationResult | null;

		/**
		 * Task application failures (non-zero exit code) are retried, pre-processing errors (the Task could not be run) and file upload errors are not retried. The Batch service will retry the Task up to the limit specified by the constraints.
		 * Required
		 */
		retryCount: number;

		/**
		 * This value is reset every time the Task is restarted or retried (that is, this is the most recent time at which the StartTask started running).
		 * Required
		 */
		startTime: Date;

		/** Required */
		state: JobPreparationTaskExecutionInformationState;
	}
	export interface StartTaskInformationFormProperties {

		/** This is the end time of the most recent run of the StartTask, if that run has completed (even if that run failed and a retry is pending). This element is not present if the StartTask is currently running. */
		endTime: FormControl<Date | null | undefined>,

		/** This property is set only if the StartTask is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the StartTask (due to timeout, or user termination via the API) you may see an operating system-defined exit code. */
		exitCode: FormControl<number | null | undefined>,

		/** This element is present only if the Task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the Task has been restarted for reasons other than retry; for example, if the Compute Node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not. */
		lastRetryTime: FormControl<Date | null | undefined>,
		result: FormControl<SubtaskInformationResult | null | undefined>,

		/**
		 * Task application failures (non-zero exit code) are retried, pre-processing errors (the Task could not be run) and file upload errors are not retried. The Batch service will retry the Task up to the limit specified by the constraints.
		 * Required
		 */
		retryCount: FormControl<number | null | undefined>,

		/**
		 * This value is reset every time the Task is restarted or retried (that is, this is the most recent time at which the StartTask started running).
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		state: FormControl<JobPreparationTaskExecutionInformationState | null | undefined>,
	}
	export function CreateStartTaskInformationFormGroup() {
		return new FormGroup<StartTaskInformationFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
			lastRetryTime: new FormControl<Date | null | undefined>(undefined),
			result: new FormControl<SubtaskInformationResult | null | undefined>(undefined),
			retryCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<JobPreparationTaskExecutionInformationState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StorageAccountType { standard_lrs = 'standard_lrs', premium_lrs = 'premium_lrs' }

	export enum SubtaskState { preparing = 'preparing', running = 'running', completed = 'completed' }

	export interface TaskAddCollectionParameter {

		/**
		 * The total serialized size of this collection must be less than 1MB. If it is greater than 1MB (for example if each Task has 100's of resource files or environment variables), the request will fail with code 'RequestBodyTooLarge' and should be retried again with fewer Tasks.
		 * Required
		 * Maximum items: 100
		 */
		value: Array<TaskAddParameter>;
	}
	export interface TaskAddCollectionParameterFormProperties {
	}
	export function CreateTaskAddCollectionParameterFormGroup() {
		return new FormGroup<TaskAddCollectionParameterFormProperties>({
		});

	}


	/** Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. */
	export interface TaskAddParameter {
		affinityInfo?: AffinityInformation;

		/** Application packages are downloaded and deployed to a shared directory, not the Task working directory. Therefore, if a referenced package is already on the Node, and is up to date, then it is not re-downloaded; the existing copy on the Compute Node is used. If a referenced Package cannot be installed, for example because the package has been deleted or because download failed, the Task fails. */
		applicationPackageReferences?: Array<ApplicationPackageReference>;
		authenticationTokenSettings?: AuthenticationTokenSettings;

		/**
		 * For multi-instance Tasks, the command line is executed as the primary Task, after the primary Task and all subtasks have finished executing the coordination command line. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
		 * Required
		 */
		commandLine: string;
		constraints?: TaskConstraints;
		containerSettings?: TaskContainerSettings;
		dependsOn?: TaskDependencies;

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName?: string | null;
		environmentSettings?: Array<EnvironmentSetting>;
		exitConditions?: ExitConditions;

		/**
		 * The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within a Job that differ only by case).
		 * Required
		 */
		id: string;

		/** Multi-instance Tasks are commonly used to support MPI Tasks. In the MPI case, if any of the subtasks fail (for example due to exiting with a non-zero exit code) the entire multi-instance Task fails. The multi-instance Task is then terminated and retried, up to its retry limit. */
		multiInstanceSettings?: MultiInstanceSettings;

		/** For multi-instance Tasks, the files will only be uploaded from the Compute Node on which the primary Task is executed. */
		outputFiles?: Array<OutputFile>;

		/** For multi-instance Tasks, the resource files will only be downloaded to the Compute Node on which the primary Task is executed. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. */
		resourceFiles?: Array<ResourceFile>;

		/** Specify either the userName or autoUser property, but not both. */
		userIdentity?: UserIdentity;
	}

	/** Batch will retry Tasks when a recovery operation is triggered on a Node. Examples of recovery operations include (but are not limited to) when an unhealthy Node is rebooted or a Compute Node disappeared due to host failure. Retries due to recovery operations are independent of and are not counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to a recovery operation may occur. Because of this, all Tasks should be idempotent. This means Tasks need to tolerate being interrupted and restarted without causing any corruption or duplicate data. The best practice for long running Tasks is to use some form of checkpointing. */
	export interface TaskAddParameterFormProperties {

		/**
		 * For multi-instance Tasks, the command line is executed as the primary Task, after the primary Task and all subtasks have finished executing the coordination command line. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
		 * Required
		 */
		commandLine: FormControl<string | null | undefined>,

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within a Job that differ only by case).
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateTaskAddParameterFormGroup() {
		return new FormGroup<TaskAddParameterFormProperties>({
			commandLine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TaskAddCollectionResult {
		value?: Array<TaskAddResult>;
	}
	export interface TaskAddCollectionResultFormProperties {
	}
	export function CreateTaskAddCollectionResultFormGroup() {
		return new FormGroup<TaskAddCollectionResultFormProperties>({
		});

	}

	export interface TaskAddResult {

		/** You can use this to detect whether the Task has changed between requests. In particular, you can be pass the ETag with an Update Task request to specify that your changes should take effect only if nobody else has modified the Job in the meantime. */
		eTag?: string | null;
		error?: BatchError;
		lastModified?: Date | null;
		location?: string | null;

		/** Required */
		status: TaskAddResultStatus;

		/** Required */
		taskId: string;
	}
	export interface TaskAddResultFormProperties {

		/** You can use this to detect whether the Task has changed between requests. In particular, you can be pass the ETag with an Update Task request to specify that your changes should take effect only if nobody else has modified the Job in the meantime. */
		eTag: FormControl<string | null | undefined>,
		lastModified: FormControl<Date | null | undefined>,
		location: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<TaskAddResultStatus | null | undefined>,

		/** Required */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateTaskAddResultFormGroup() {
		return new FormGroup<TaskAddResultFormProperties>({
			eTag: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TaskAddResultStatus | null | undefined>(undefined, [Validators.required]),
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TaskAddResultStatus { success = 'success', clienterror = 'clienterror', servererror = 'servererror' }

	export interface TaskConstraints {

		/** Note that this value specifically controls the number of retries for the Task executable due to a nonzero exit code. The Batch service will try the Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the Task after the first attempt. If the maximum retry count is -1, the Batch service retries the Task without limit. */
		maxTaskRetryCount?: number | null;

		/** If this is not specified, there is no time limit on how long the Task may run. */
		maxWallClockTime?: string | null;

		/** The default is 7 days, i.e. the Task directory will be retained for 7 days unless the Compute Node is removed or the Job is deleted. */
		retentionTime?: string | null;
	}
	export interface TaskConstraintsFormProperties {

		/** Note that this value specifically controls the number of retries for the Task executable due to a nonzero exit code. The Batch service will try the Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the Task after the first attempt. If the maximum retry count is -1, the Batch service retries the Task without limit. */
		maxTaskRetryCount: FormControl<number | null | undefined>,

		/** If this is not specified, there is no time limit on how long the Task may run. */
		maxWallClockTime: FormControl<string | null | undefined>,

		/** The default is 7 days, i.e. the Task directory will be retained for 7 days unless the Compute Node is removed or the Job is deleted. */
		retentionTime: FormControl<string | null | undefined>,
	}
	export function CreateTaskConstraintsFormGroup() {
		return new FormGroup<TaskConstraintsFormProperties>({
			maxTaskRetryCount: new FormControl<number | null | undefined>(undefined),
			maxWallClockTime: new FormControl<string | null | undefined>(undefined),
			retentionTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaskContainerExecutionInformation {
		containerId?: string | null;

		/** This is the detailed error string from the Docker service, if available. It is equivalent to the error field returned by "docker inspect". */
		error?: string | null;

		/** This is the state of the container according to the Docker service. It is equivalent to the status field returned by "docker inspect". */
		state?: string | null;
	}
	export interface TaskContainerExecutionInformationFormProperties {
		containerId: FormControl<string | null | undefined>,

		/** This is the detailed error string from the Docker service, if available. It is equivalent to the error field returned by "docker inspect". */
		error: FormControl<string | null | undefined>,

		/** This is the state of the container according to the Docker service. It is equivalent to the status field returned by "docker inspect". */
		state: FormControl<string | null | undefined>,
	}
	export function CreateTaskContainerExecutionInformationFormGroup() {
		return new FormGroup<TaskContainerExecutionInformationFormProperties>({
			containerId: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaskContainerSettings {

		/** These additional options are supplied as arguments to the "docker create" command, in addition to those controlled by the Batch Service. */
		containerRunOptions?: string | null;

		/**
		 * This is the full Image reference, as would be specified to "docker pull". If no tag is provided as part of the Image name, the tag ":latest" is used as a default.
		 * Required
		 */
		imageName: string;
		registry?: ContainerRegistry;

		/** The default is 'taskWorkingDirectory'. */
		workingDirectory?: TaskContainerSettingsWorkingDirectory | null;
	}
	export interface TaskContainerSettingsFormProperties {

		/** These additional options are supplied as arguments to the "docker create" command, in addition to those controlled by the Batch Service. */
		containerRunOptions: FormControl<string | null | undefined>,

		/**
		 * This is the full Image reference, as would be specified to "docker pull". If no tag is provided as part of the Image name, the tag ":latest" is used as a default.
		 * Required
		 */
		imageName: FormControl<string | null | undefined>,

		/** The default is 'taskWorkingDirectory'. */
		workingDirectory: FormControl<TaskContainerSettingsWorkingDirectory | null | undefined>,
	}
	export function CreateTaskContainerSettingsFormGroup() {
		return new FormGroup<TaskContainerSettingsFormProperties>({
			containerRunOptions: new FormControl<string | null | undefined>(undefined),
			imageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workingDirectory: new FormControl<TaskContainerSettingsWorkingDirectory | null | undefined>(undefined),
		});

	}

	export enum TaskContainerSettingsWorkingDirectory { taskWorkingDirectory = 'taskWorkingDirectory', containerImageDefault = 'containerImageDefault' }

	export interface TaskCounts {

		/** Required */
		active: number;

		/** Required */
		completed: number;

		/** Required */
		failed: number;

		/** Required */
		running: number;

		/** Required */
		succeeded: number;
	}
	export interface TaskCountsFormProperties {

		/** Required */
		active: FormControl<number | null | undefined>,

		/** Required */
		completed: FormControl<number | null | undefined>,

		/** Required */
		failed: FormControl<number | null | undefined>,

		/** Required */
		running: FormControl<number | null | undefined>,

		/** Required */
		succeeded: FormControl<number | null | undefined>,
	}
	export function CreateTaskCountsFormGroup() {
		return new FormGroup<TaskCountsFormProperties>({
			active: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			completed: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			failed: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			running: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			succeeded: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TaskDependencies {
		taskIdRanges?: Array<TaskIdRange>;

		/** The taskIds collection is limited to 64000 characters total (i.e. the combined length of all Task IDs). If the taskIds collection exceeds the maximum length, the Add Task request fails with error code TaskDependencyListTooLong. In this case consider using Task ID ranges instead. */
		taskIds?: Array<string>;
	}
	export interface TaskDependenciesFormProperties {
	}
	export function CreateTaskDependenciesFormGroup() {
		return new FormGroup<TaskDependenciesFormProperties>({
		});

	}


	/** The start and end of the range are inclusive. For example, if a range has start 9 and end 12, then it represents Tasks '9', '10', '11' and '12'. */
	export interface TaskIdRange {

		/** Required */
		end: number;

		/** Required */
		start: number;
	}

	/** The start and end of the range are inclusive. For example, if a range has start 9 and end 12, then it represents Tasks '9', '10', '11' and '12'. */
	export interface TaskIdRangeFormProperties {

		/** Required */
		end: FormControl<number | null | undefined>,

		/** Required */
		start: FormControl<number | null | undefined>,
	}
	export function CreateTaskIdRangeFormGroup() {
		return new FormGroup<TaskIdRangeFormProperties>({
			end: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			start: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TaskExecutionInformation {
		containerInfo?: TaskContainerExecutionInformation;

		/** This property is set only if the Task is in the Completed state. */
		endTime?: Date | null;

		/** This property is set only if the Task is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the Task (due to timeout, or user termination via the API) you may see an operating system-defined exit code. */
		exitCode?: number | null;
		failureInfo?: TaskFailureInformation;

		/** This property is set only if the requeueCount is nonzero. */
		lastRequeueTime?: Date | null;

		/** This element is present only if the Task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the Task has been restarted for reasons other than retry; for example, if the Compute Node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not. */
		lastRetryTime?: Date | null;

		/**
		 * When the user removes Compute Nodes from a Pool (by resizing/shrinking the pool) or when the Job is being disabled, the user can specify that running Tasks on the Compute Nodes be requeued for execution. This count tracks how many times the Task has been requeued for these reasons.
		 * Required
		 */
		requeueCount: number;
		result?: SubtaskInformationResult | null;

		/**
		 * Task application failures (non-zero exit code) are retried, pre-processing errors (the Task could not be run) and file upload errors are not retried. The Batch service will retry the Task up to the limit specified by the constraints.
		 * Required
		 */
		retryCount: number;

		/** 'Running' corresponds to the running state, so if the Task specifies resource files or Packages, then the start time reflects the time at which the Task started downloading or deploying these. If the Task has been restarted or retried, this is the most recent time at which the Task started running. This property is present only for Tasks that are in the running or completed state. */
		startTime?: Date | null;
	}
	export interface TaskExecutionInformationFormProperties {

		/** This property is set only if the Task is in the Completed state. */
		endTime: FormControl<Date | null | undefined>,

		/** This property is set only if the Task is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the Task (due to timeout, or user termination via the API) you may see an operating system-defined exit code. */
		exitCode: FormControl<number | null | undefined>,

		/** This property is set only if the requeueCount is nonzero. */
		lastRequeueTime: FormControl<Date | null | undefined>,

		/** This element is present only if the Task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the Task has been restarted for reasons other than retry; for example, if the Compute Node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not. */
		lastRetryTime: FormControl<Date | null | undefined>,

		/**
		 * When the user removes Compute Nodes from a Pool (by resizing/shrinking the pool) or when the Job is being disabled, the user can specify that running Tasks on the Compute Nodes be requeued for execution. This count tracks how many times the Task has been requeued for these reasons.
		 * Required
		 */
		requeueCount: FormControl<number | null | undefined>,
		result: FormControl<SubtaskInformationResult | null | undefined>,

		/**
		 * Task application failures (non-zero exit code) are retried, pre-processing errors (the Task could not be run) and file upload errors are not retried. The Batch service will retry the Task up to the limit specified by the constraints.
		 * Required
		 */
		retryCount: FormControl<number | null | undefined>,

		/** 'Running' corresponds to the running state, so if the Task specifies resource files or Packages, then the start time reflects the time at which the Task started downloading or deploying these. If the Task has been restarted or retried, this is the most recent time at which the Task started running. This property is present only for Tasks that are in the running or completed state. */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateTaskExecutionInformationFormGroup() {
		return new FormGroup<TaskExecutionInformationFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
			lastRequeueTime: new FormControl<Date | null | undefined>(undefined),
			lastRetryTime: new FormControl<Date | null | undefined>(undefined),
			requeueCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			result: new FormControl<SubtaskInformationResult | null | undefined>(undefined),
			retryCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum TaskExecutionResult { success = 'success', failure = 'failure' }

	export interface TaskFailureInformation {

		/** Required */
		category: ErrorCategory;
		code?: string | null;
		details?: Array<NameValuePair>;
		message?: string | null;
	}
	export interface TaskFailureInformationFormProperties {

		/** Required */
		category: FormControl<ErrorCategory | null | undefined>,
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateTaskFailureInformationFormGroup() {
		return new FormGroup<TaskFailureInformationFormProperties>({
			category: new FormControl<ErrorCategory | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaskSchedulingPolicy {

		/**
		 * If not specified, the default is spread.
		 * Required
		 */
		nodeFillType: TaskSchedulingPolicyNodeFillType;
	}
	export interface TaskSchedulingPolicyFormProperties {

		/**
		 * If not specified, the default is spread.
		 * Required
		 */
		nodeFillType: FormControl<TaskSchedulingPolicyNodeFillType | null | undefined>,
	}
	export function CreateTaskSchedulingPolicyFormGroup() {
		return new FormGroup<TaskSchedulingPolicyFormProperties>({
			nodeFillType: new FormControl<TaskSchedulingPolicyNodeFillType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TaskSchedulingPolicyNodeFillType { spread = 'spread', pack = 'pack' }

	export enum TaskState { active = 'active', preparing = 'preparing', running = 'running', completed = 'completed' }

	export interface TaskStatistics {

		/** Required */
		kernelCPUTime: string;

		/** Required */
		lastUpdateTime: Date;

		/** Required */
		readIOGiB: number;

		/** Required */
		readIOps: number;

		/** Required */
		startTime: Date;

		/** Required */
		url: string;

		/** Required */
		userCPUTime: string;

		/** Required */
		waitTime: string;

		/**
		 * The wall clock time is the elapsed time from when the Task started running on a Compute Node to when it finished (or to the last time the statistics were updated, if the Task had not finished by then). If the Task was retried, this includes the wall clock time of all the Task retries.
		 * Required
		 */
		wallClockTime: string;

		/** Required */
		writeIOGiB: number;

		/** Required */
		writeIOps: number;
	}
	export interface TaskStatisticsFormProperties {

		/** Required */
		kernelCPUTime: FormControl<string | null | undefined>,

		/** Required */
		lastUpdateTime: FormControl<Date | null | undefined>,

		/** Required */
		readIOGiB: FormControl<number | null | undefined>,

		/** Required */
		readIOps: FormControl<number | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,

		/** Required */
		userCPUTime: FormControl<string | null | undefined>,

		/** Required */
		waitTime: FormControl<string | null | undefined>,

		/**
		 * The wall clock time is the elapsed time from when the Task started running on a Compute Node to when it finished (or to the last time the statistics were updated, if the Task had not finished by then). If the Task was retried, this includes the wall clock time of all the Task retries.
		 * Required
		 */
		wallClockTime: FormControl<string | null | undefined>,

		/** Required */
		writeIOGiB: FormControl<number | null | undefined>,

		/** Required */
		writeIOps: FormControl<number | null | undefined>,
	}
	export function CreateTaskStatisticsFormGroup() {
		return new FormGroup<TaskStatisticsFormProperties>({
			kernelCPUTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			readIOGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			readIOps: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userCPUTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			waitTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wallClockTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			writeIOGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			writeIOps: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TaskUpdateParameter {
		constraints?: TaskConstraints;
	}
	export interface TaskUpdateParameterFormProperties {
	}
	export function CreateTaskUpdateParameterFormGroup() {
		return new FormGroup<TaskUpdateParameterFormProperties>({
		});

	}

	export interface UploadBatchServiceLogsConfiguration {

		/**
		 * The URL must include a Shared Access Signature (SAS) granting write permissions to the container. The SAS duration must allow enough time for the upload to finish. The start time for SAS is optional and recommended to not be specified.
		 * Required
		 */
		containerUrl: string;

		/** Any log file containing a log message in the time range will be uploaded. This means that the operation might retrieve more logs than have been requested since the entire log file is always uploaded, but the operation should not retrieve fewer logs than have been requested. If omitted, the default is to upload all logs available after the startTime. */
		endTime?: Date | null;

		/**
		 * Any log file containing a log message in the time range will be uploaded. This means that the operation might retrieve more logs than have been requested since the entire log file is always uploaded, but the operation should not retrieve fewer logs than have been requested.
		 * Required
		 */
		startTime: Date;
	}
	export interface UploadBatchServiceLogsConfigurationFormProperties {

		/**
		 * The URL must include a Shared Access Signature (SAS) granting write permissions to the container. The SAS duration must allow enough time for the upload to finish. The start time for SAS is optional and recommended to not be specified.
		 * Required
		 */
		containerUrl: FormControl<string | null | undefined>,

		/** Any log file containing a log message in the time range will be uploaded. This means that the operation might retrieve more logs than have been requested since the entire log file is always uploaded, but the operation should not retrieve fewer logs than have been requested. If omitted, the default is to upload all logs available after the startTime. */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * Any log file containing a log message in the time range will be uploaded. This means that the operation might retrieve more logs than have been requested since the entire log file is always uploaded, but the operation should not retrieve fewer logs than have been requested.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateUploadBatchServiceLogsConfigurationFormGroup() {
		return new FormGroup<UploadBatchServiceLogsConfigurationFormProperties>({
			containerUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UploadBatchServiceLogsResult {

		/** Required */
		numberOfFilesUploaded: number;

		/**
		 * The virtual directory name is part of the blob name for each log file uploaded, and it is built based poolId, nodeId and a unique identifier.
		 * Required
		 */
		virtualDirectoryName: string;
	}
	export interface UploadBatchServiceLogsResultFormProperties {

		/** Required */
		numberOfFilesUploaded: FormControl<number | null | undefined>,

		/**
		 * The virtual directory name is part of the blob name for each log file uploaded, and it is built based poolId, nodeId and a unique identifier.
		 * Required
		 */
		virtualDirectoryName: FormControl<string | null | undefined>,
	}
	export function CreateUploadBatchServiceLogsResultFormGroup() {
		return new FormGroup<UploadBatchServiceLogsResultFormProperties>({
			numberOfFilesUploaded: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			virtualDirectoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UsageStatistics {

		/** Required */
		dedicatedCoreTime: string;

		/** Required */
		lastUpdateTime: Date;

		/** Required */
		startTime: Date;
	}
	export interface UsageStatisticsFormProperties {

		/** Required */
		dedicatedCoreTime: FormControl<string | null | undefined>,

		/** Required */
		lastUpdateTime: FormControl<Date | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateUsageStatisticsFormGroup() {
		return new FormGroup<UsageStatisticsFormProperties>({
			dedicatedCoreTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specify either the userName or autoUser property, but not both. */
	export interface UserIdentity {
		autoUser?: AutoUserSpecification;

		/** The userName and autoUser properties are mutually exclusive; you must specify one but not both. */
		username?: string | null;
	}

	/** Specify either the userName or autoUser property, but not both. */
	export interface UserIdentityFormProperties {

		/** The userName and autoUser properties are mutually exclusive; you must specify one but not both. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserIdentityFormGroup() {
		return new FormGroup<UserIdentityFormProperties>({
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VirtualMachineConfiguration {
		containerConfiguration?: ContainerConfiguration;

		/** This property must be specified if the Compute Nodes in the Pool need to have empty data disks attached to them. This cannot be updated. Each Compute Node gets its own disk (the disk is not a file share). Existing disks cannot be attached, each attached disk is empty. When the Compute Node is removed from the Pool, the disk and all data associated with it is also deleted. The disk is not formatted after being attached, it must be formatted before use - for more information see https://docs.microsoft.com/en-us/azure/virtual-machines/linux/classic/attach-disk#initialize-a-new-data-disk-in-linux and https://docs.microsoft.com/en-us/azure/virtual-machines/windows/attach-disk-ps#add-an-empty-data-disk-to-a-virtual-machine. */
		dataDisks?: Array<DataDisk>;

		/** Required */
		imageReference: ImageReference;

		/**
		 * This only applies to Images that contain the Windows operating system, and should only be used when you hold valid on-premises licenses for the Compute Nodes which will be deployed. If omitted, no on-premises licensing discount is applied. Values are:
		 * Windows_Server - The on-premises license is for Windows Server.
		 * Windows_Client - The on-premises license is for Windows Client.
		 */
		licenseType?: string | null;

		/**
		 * The Batch Compute Node agent is a program that runs on each Compute Node in the Pool, and provides the command-and-control interface between the Compute Node and the Batch service. There are different implementations of the Compute Node agent, known as SKUs, for different operating systems. You must specify a Compute Node agent SKU which matches the selected Image reference. To get the list of supported Compute Node agent SKUs along with their list of verified Image references, see the 'List supported Compute Node agent SKUs' operation.
		 * Required
		 */
		nodeAgentSKUId: string;
		windowsConfiguration?: WindowsConfiguration;
	}
	export interface VirtualMachineConfigurationFormProperties {

		/**
		 * This only applies to Images that contain the Windows operating system, and should only be used when you hold valid on-premises licenses for the Compute Nodes which will be deployed. If omitted, no on-premises licensing discount is applied. Values are:
		 * Windows_Server - The on-premises license is for Windows Server.
		 * Windows_Client - The on-premises license is for Windows Client.
		 */
		licenseType: FormControl<string | null | undefined>,

		/**
		 * The Batch Compute Node agent is a program that runs on each Compute Node in the Pool, and provides the command-and-control interface between the Compute Node and the Batch service. There are different implementations of the Compute Node agent, known as SKUs, for different operating systems. You must specify a Compute Node agent SKU which matches the selected Image reference. To get the list of supported Compute Node agent SKUs along with their list of verified Image references, see the 'List supported Compute Node agent SKUs' operation.
		 * Required
		 */
		nodeAgentSKUId: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineConfigurationFormGroup() {
		return new FormGroup<VirtualMachineConfigurationFormProperties>({
			licenseType: new FormControl<string | null | undefined>(undefined),
			nodeAgentSKUId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WindowsConfiguration {

		/** If omitted, the default value is true. */
		enableAutomaticUpdates?: boolean | null;
	}
	export interface WindowsConfigurationFormProperties {

		/** If omitted, the default value is true. */
		enableAutomaticUpdates: FormControl<boolean | null | undefined>,
	}
	export function CreateWindowsConfigurationFormGroup() {
		return new FormGroup<WindowsConfigurationFormProperties>({
			enableAutomaticUpdates: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface WindowsUserConfiguration {

		/** The default value for VirtualMachineConfiguration Pools is 'batch' and for CloudServiceConfiguration Pools is 'interactive'. */
		loginMode?: WindowsUserConfigurationLoginMode | null;
	}
	export interface WindowsUserConfigurationFormProperties {

		/** The default value for VirtualMachineConfiguration Pools is 'batch' and for CloudServiceConfiguration Pools is 'interactive'. */
		loginMode: FormControl<WindowsUserConfigurationLoginMode | null | undefined>,
	}
	export function CreateWindowsUserConfigurationFormGroup() {
		return new FormGroup<WindowsUserConfigurationFormProperties>({
			loginMode: new FormControl<WindowsUserConfigurationLoginMode | null | undefined>(undefined),
		});

	}

	export enum WindowsUserConfigurationLoginMode { batch = 'batch', interactive = 'interactive' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the applications available in the specified Account.
		 * This operation returns only Applications and versions that are available for use on Compute Nodes; that is, that can be used in an Package reference. For administrator information about applications and versions that are not yet available to Compute Nodes, use the Azure portal or the Azure Resource Manager API.
		 * Get applications
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 applications can be returned.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {ApplicationListResult} A response containing the list of applications.
		 */
		Application_List(maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<ApplicationListResult> {
			return this.http.get<ApplicationListResult>(this.baseUri + 'applications?maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified Application.
		 * This operation returns only Applications and versions that are available for use on Compute Nodes; that is, that can be used in an Package reference. For administrator information about Applications and versions that are not yet available to Compute Nodes, use the Azure portal or the Azure Resource Manager API.
		 * Get applications/{applicationId}
		 * @param {string} applicationId The ID of the Application.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {ApplicationSummary} A response containing the application.
		 */
		Application_Get(applicationId: string, timeout: number | null | undefined, api_version: string): Observable<ApplicationSummary> {
			return this.http.get<ApplicationSummary>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all of the Certificates that have been added to the specified Account.
		 * Get certificates
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-certificates.
		 * @param {string} select An OData $select clause.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 Certificates can be returned.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CertificateListResult} A response containing the list of Certificates.
		 */
		Certificate_List(filter: string | null | undefined, select: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CertificateListResult> {
			return this.http.get<CertificateListResult>(this.baseUri + 'certificates?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified Certificate.
		 * Get certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})
		 * @param {string} thumbprintAlgorithm The algorithm used to derive the thumbprint parameter. This must be sha1.
		 * @param {string} thumbprint The thumbprint of the Certificate to get.
		 * @param {string} select An OData $select clause.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {Certificate} A response containing the Certificate.
		 */
		Certificate_Get(thumbprintAlgorithm: string, thumbprint: string, select: string | null | undefined, timeout: number | null | undefined, api_version: string): Observable<Certificate> {
			return this.http.get<Certificate>(this.baseUri + 'certificates(thumbprintAlgorithm=' + (thumbprintAlgorithm == null ? '' : encodeURIComponent(thumbprintAlgorithm)) + ',thumbprint=' + (thumbprint == null ? '' : encodeURIComponent(thumbprint)) + ')&select=' + (select == null ? '' : encodeURIComponent(select)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a Certificate from the specified Account.
		 * You cannot delete a Certificate if a resource (Pool or Compute Node) is using it. Before you can delete a Certificate, you must therefore make sure that the Certificate is not associated with any existing Pools, the Certificate is not installed on any Nodes (even if you remove a Certificate from a Pool, it is not removed from existing Compute Nodes in that Pool until they restart), and no running Tasks depend on the Certificate. If you try to delete a Certificate that is in use, the deletion fails. The Certificate status changes to deleteFailed. You can use Cancel Delete Certificate to set the status back to active if you decide that you want to continue using the Certificate.
		 * Delete certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})
		 * @param {string} thumbprintAlgorithm The algorithm used to derive the thumbprint parameter. This must be sha1.
		 * @param {string} thumbprint The thumbprint of the Certificate to be deleted.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Certificate_Delete(thumbprintAlgorithm: string, thumbprint: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'certificates(thumbprintAlgorithm=' + (thumbprintAlgorithm == null ? '' : encodeURIComponent(thumbprintAlgorithm)) + ',thumbprint=' + (thumbprint == null ? '' : encodeURIComponent(thumbprint)) + ')&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels a failed deletion of a Certificate from the specified Account.
		 * If you try to delete a Certificate that is being used by a Pool or Compute Node, the status of the Certificate changes to deleteFailed. If you decide that you want to continue using the Certificate, you can use this operation to set the status of the Certificate back to active. If you intend to delete the Certificate, you do not need to run this operation after the deletion failed. You must make sure that the Certificate is not being used by any resources, and then you can try again to delete the Certificate.
		 * Post certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})/canceldelete
		 * @param {string} thumbprintAlgorithm The algorithm used to derive the thumbprint parameter. This must be sha1.
		 * @param {string} thumbprint The thumbprint of the Certificate being deleted.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Certificate_CancelDeletion(thumbprintAlgorithm: string, thumbprint: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'certificates(thumbprintAlgorithm=' + (thumbprintAlgorithm == null ? '' : encodeURIComponent(thumbprintAlgorithm)) + ',thumbprint=' + (thumbprint == null ? '' : encodeURIComponent(thumbprint)) + ')/canceldelete&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all of the Jobs in the specified Account.
		 * Get jobs
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-jobs.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 Jobs can be returned.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CloudJobListResult} A response containing the list of Jobs.
		 */
		Job_List(filter: string | null | undefined, select: string | null | undefined, expand: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudJobListResult> {
			return this.http.get<CloudJobListResult>(this.baseUri + 'jobs?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified Job.
		 * Get jobs/{jobId}
		 * @param {string} jobId The ID of the Job.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CloudJob} A response containing the Job.
		 */
		Job_Get(jobId: string, select: string | null | undefined, expand: string | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudJob> {
			return this.http.get<CloudJob>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a Job.
		 * Deleting a Job also deletes all Tasks that are part of that Job, and all Job statistics. This also overrides the retention period for Task data; that is, if the Job contains Tasks which are still retained on Compute Nodes, the Batch services deletes those Tasks' working directories and all their contents.  When a Delete Job request is received, the Batch service sets the Job to the deleting state. All update operations on a Job that is in deleting state will fail with status code 409 (Conflict), with additional information indicating that the Job is being deleted.
		 * Delete jobs/{jobId}
		 * @param {string} jobId The ID of the Job to delete.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Job_Delete(jobId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables the specified Job, allowing new Tasks to run.
		 * When you call this API, the Batch service sets a disabled Job to the enabling state. After the this operation is completed, the Job moves to the active state, and scheduling of new Tasks under the Job resumes. The Batch service does not allow a Task to remain in the active state for more than 180 days. Therefore, if you enable a Job containing active Tasks which were added more than 180 days ago, those Tasks will not run.
		 * Post jobs/{jobId}/enable
		 * @param {string} jobId The ID of the Job to enable.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Job_Enable(jobId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/enable&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the execution status of the Job Preparation and Job Release Task for the specified Job across the Compute Nodes where the Job has run.
		 * This API returns the Job Preparation and Job Release Task status on all Compute Nodes that have run the Job Preparation or Job Release Task. This includes Compute Nodes which have since been removed from the Pool. If this API is invoked on a Job which has no Job Preparation or Job Release Task, the Batch service returns HTTP status code 409 (Conflict) with an error code of JobPreparationTaskNotSpecified.
		 * Get jobs/{jobId}/jobpreparationandreleasetaskstatus
		 * @param {string} jobId The ID of the Job.
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-preparation-and-release-status.
		 * @param {string} select An OData $select clause.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 Tasks can be returned.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CloudJobListPreparationAndReleaseTaskStatusResult} A response containing a list of Job Preparation and Job Release Task statuses.
		 */
		Job_ListPreparationAndReleaseTaskStatus(jobId: string, filter: string | null | undefined, select: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudJobListPreparationAndReleaseTaskStatusResult> {
			return this.http.get<CloudJobListPreparationAndReleaseTaskStatusResult>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/jobpreparationandreleasetaskstatus&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the Task counts for the specified Job.
		 * Task counts provide a count of the Tasks by active, running or completed Task state, and a count of Tasks which succeeded or failed. Tasks in the preparing state are counted as running.
		 * Get jobs/{jobId}/taskcounts
		 * @param {string} jobId The ID of the Job.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {TaskCounts} A response containing the Task counts for the specified Job.
		 */
		Job_GetTaskCounts(jobId: string, timeout: number | null | undefined, api_version: string): Observable<TaskCounts> {
			return this.http.get<TaskCounts>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/taskcounts&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all of the Tasks that are associated with the specified Job.
		 * For multi-instance Tasks, information such as affinityId, executionInfo and nodeInfo refer to the primary Task. Use the list subtasks API to retrieve information about subtasks.
		 * Get jobs/{jobId}/tasks
		 * @param {string} jobId The ID of the Job.
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-tasks.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 Tasks can be returned.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CloudTaskListResult} A response containing the list of Tasks.
		 */
		Task_List(jobId: string, filter: string | null | undefined, select: string | null | undefined, expand: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudTaskListResult> {
			return this.http.get<CloudTaskListResult>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified Task.
		 * For multi-instance Tasks, information such as affinityId, executionInfo and nodeInfo refer to the primary Task. Use the list subtasks API to retrieve information about subtasks.
		 * Get jobs/{jobId}/tasks/{taskId}
		 * @param {string} jobId The ID of the Job that contains the Task.
		 * @param {string} taskId The ID of the Task to get information about.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CloudTask} A response containing the Task.
		 */
		Task_Get(jobId: string, taskId: string, select: string | null | undefined, expand: string | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudTask> {
			return this.http.get<CloudTask>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a Task from the specified Job.
		 * When a Task is deleted, all of the files in its directory on the Compute Node where it ran are also deleted (regardless of the retention time). For multi-instance Tasks, the delete Task operation applies synchronously to the primary task; subtasks and their files are then deleted asynchronously in the background.
		 * Delete jobs/{jobId}/tasks/{taskId}
		 * @param {string} jobId The ID of the Job from which to delete the Task.
		 * @param {string} taskId The ID of the Task to delete.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} The request to the Batch service was successful.
		 */
		Task_Delete(jobId: string, taskId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the files in a Task's directory on its Compute Node.
		 * Get jobs/{jobId}/tasks/{taskId}/files
		 * @param {string} jobId The ID of the Job that contains the Task.
		 * @param {string} taskId The ID of the Task whose files you want to list.
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-task-files.
		 * @param {boolean} recursive Whether to list children of the Task directory. This parameter can be used in combination with the filter parameter to list specific type of files.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 files can be returned.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {NodeFileListResult} A response containing the list of files.
		 */
		File_ListFromTask(jobId: string, taskId: string, filter: string | null | undefined, recursive: boolean | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<NodeFileListResult> {
			return this.http.get<NodeFileListResult>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/files&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&recursive=' + recursive + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns the content of the specified Task file.
		 * Get jobs/{jobId}/tasks/{taskId}/files/{filePath}
		 * @param {string} jobId The ID of the Job that contains the Task.
		 * @param {string} taskId The ID of the Task whose file you want to retrieve.
		 * @param {string} filePath The path to the Task file that you want to get the content of.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {string} A response containing the file content.
		 */
		File_GetFromTask(jobId: string, taskId: string, filePath: string, timeout: number | null | undefined, api_version: string): Observable<string> {
			return this.http.get(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/files/' + (filePath == null ? '' : encodeURIComponent(filePath)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { responseType: 'text' });
		}

		/**
		 * Deletes the specified Task file from the Compute Node where the Task ran.
		 * Delete jobs/{jobId}/tasks/{taskId}/files/{filePath}
		 * @param {string} jobId The ID of the Job that contains the Task.
		 * @param {string} taskId The ID of the Task whose file you want to delete.
		 * @param {string} filePath The path to the Task file or directory that you want to delete.
		 * @param {boolean} recursive Whether to delete children of a directory. If the filePath parameter represents a directory instead of a file, you can set recursive to true to delete the directory and all of the files and subdirectories in it. If recursive is false then the directory must be empty or deletion will fail.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} The request to the Batch service was successful.
		 */
		File_DeleteFromTask(jobId: string, taskId: string, filePath: string, recursive: boolean | null | undefined, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/files/' + (filePath == null ? '' : encodeURIComponent(filePath)) + '&recursive=' + recursive + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reactivates a Task, allowing it to run again even if its retry count has been exhausted.
		 * Reactivation makes a Task eligible to be retried again up to its maximum retry count. The Task's state is changed to active. As the Task is no longer in the completed state, any previous exit code or failure information is no longer available after reactivation. Each time a Task is reactivated, its retry count is reset to 0. Reactivation will fail for Tasks that are not completed or that previously completed successfully (with an exit code of 0). Additionally, it will fail if the Job has completed (or is terminating or deleting).
		 * Post jobs/{jobId}/tasks/{taskId}/reactivate
		 * @param {string} jobId The ID of the Job containing the Task.
		 * @param {string} taskId The ID of the Task to reactivate.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Task_Reactivate(jobId: string, taskId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/reactivate&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all of the subtasks that are associated with the specified multi-instance Task.
		 * If the Task is not a multi-instance Task then this returns an empty collection.
		 * Get jobs/{jobId}/tasks/{taskId}/subtasksinfo
		 * @param {string} jobId The ID of the Job.
		 * @param {string} taskId The ID of the Task.
		 * @param {string} select An OData $select clause.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CloudTaskListSubtasksResult} A response containing the list of subtasks.
		 */
		Task_ListSubtasks(jobId: string, taskId: string, select: string | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudTaskListSubtasksResult> {
			return this.http.get<CloudTaskListSubtasksResult>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/subtasksinfo&select=' + (select == null ? '' : encodeURIComponent(select)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Terminates the specified Task.
		 * When the Task has been terminated, it moves to the completed state. For multi-instance Tasks, the terminate Task operation applies synchronously to the primary task; subtasks are then terminated asynchronously in the background.
		 * Post jobs/{jobId}/tasks/{taskId}/terminate
		 * @param {string} jobId The ID of the Job containing the Task.
		 * @param {string} taskId The ID of the Task to terminate.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Task_Terminate(jobId: string, taskId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/terminate&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all of the Job Schedules in the specified Account.
		 * Get jobschedules
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-schedules.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 Job Schedules can be returned.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CloudJobScheduleListResult} A response containing the list of Job Schedules.
		 */
		JobSchedule_List(filter: string | null | undefined, select: string | null | undefined, expand: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudJobScheduleListResult> {
			return this.http.get<CloudJobScheduleListResult>(this.baseUri + 'jobschedules?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified Job Schedule.
		 * Get jobschedules/{jobScheduleId}
		 * @param {string} jobScheduleId The ID of the Job Schedule to get.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CloudJobSchedule} A response containing the Job Schedule.
		 */
		JobSchedule_Get(jobScheduleId: string, select: string | null | undefined, expand: string | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudJobSchedule> {
			return this.http.get<CloudJobSchedule>(this.baseUri + 'jobschedules/' + (jobScheduleId == null ? '' : encodeURIComponent(jobScheduleId)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a Job Schedule from the specified Account.
		 * When you delete a Job Schedule, this also deletes all Jobs and Tasks under that schedule. When Tasks are deleted, all the files in their working directories on the Compute Nodes are also deleted (the retention period is ignored). The Job Schedule statistics are no longer accessible once the Job Schedule is deleted, though they are still counted towards Account lifetime statistics.
		 * Delete jobschedules/{jobScheduleId}
		 * @param {string} jobScheduleId The ID of the Job Schedule to delete.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		JobSchedule_Delete(jobScheduleId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'jobschedules/' + (jobScheduleId == null ? '' : encodeURIComponent(jobScheduleId)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Disables a Job Schedule.
		 * No new Jobs will be created until the Job Schedule is enabled again.
		 * Post jobschedules/{jobScheduleId}/disable
		 * @param {string} jobScheduleId The ID of the Job Schedule to disable.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		JobSchedule_Disable(jobScheduleId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobschedules/' + (jobScheduleId == null ? '' : encodeURIComponent(jobScheduleId)) + '/disable&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables a Job Schedule.
		 * Post jobschedules/{jobScheduleId}/enable
		 * @param {string} jobScheduleId The ID of the Job Schedule to enable.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		JobSchedule_Enable(jobScheduleId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobschedules/' + (jobScheduleId == null ? '' : encodeURIComponent(jobScheduleId)) + '/enable&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the Jobs that have been created under the specified Job Schedule.
		 * Get jobschedules/{jobScheduleId}/jobs
		 * @param {string} jobScheduleId The ID of the Job Schedule from which you want to get a list of Jobs.
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-jobs-in-a-job-schedule.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 Jobs can be returned.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CloudJobListResult} A response containing the list of Jobs.
		 */
		Job_ListFromJobSchedule(jobScheduleId: string, filter: string | null | undefined, select: string | null | undefined, expand: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudJobListResult> {
			return this.http.get<CloudJobListResult>(this.baseUri + 'jobschedules/' + (jobScheduleId == null ? '' : encodeURIComponent(jobScheduleId)) + '/jobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Terminates a Job Schedule.
		 * Post jobschedules/{jobScheduleId}/terminate
		 * @param {string} jobScheduleId The ID of the Job Schedule to terminates.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		JobSchedule_Terminate(jobScheduleId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobschedules/' + (jobScheduleId == null ? '' : encodeURIComponent(jobScheduleId)) + '/terminate&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets lifetime summary statistics for all of the Jobs in the specified Account.
		 * Statistics are aggregated across all Jobs that have ever existed in the Account, from Account creation to the last update time of the statistics. The statistics may not be immediately available. The Batch service performs periodic roll-up of statistics. The typical delay is about 30 minutes.
		 * Get lifetimejobstats
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {JobStatistics} A response containing the Job statistics for the lifetime of the Batch Account.
		 */
		Job_GetAllLifetimeStatistics(timeout: number | null | undefined, api_version: string): Observable<JobStatistics> {
			return this.http.get<JobStatistics>(this.baseUri + 'lifetimejobstats?timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets lifetime summary statistics for all of the Pools in the specified Account.
		 * Statistics are aggregated across all Pools that have ever existed in the Account, from Account creation to the last update time of the statistics. The statistics may not be immediately available. The Batch service performs periodic roll-up of statistics. The typical delay is about 30 minutes.
		 * Get lifetimepoolstats
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {PoolStatistics} A response containing the Pool statistics for the lifetime of the Batch Account.
		 */
		Pool_GetAllLifetimeStatistics(timeout: number | null | undefined, api_version: string): Observable<PoolStatistics> {
			return this.http.get<PoolStatistics>(this.baseUri + 'lifetimepoolstats?timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the number of Compute Nodes in each state, grouped by Pool.
		 * Get nodecounts
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch.
		 * @param {number} maxresults The maximum number of items to return in the response.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {PoolNodeCountsListResult} The response contains the number of Compute Nodes in each Compute Node state, grouped by Pool.
		 */
		Account_ListPoolNodeCounts(filter: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<PoolNodeCountsListResult> {
			return this.http.get<PoolNodeCountsListResult>(this.baseUri + 'nodecounts?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all of the Pools in the specified Account.
		 * Get pools
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-pools.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 Pools can be returned.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CloudPoolListResult} A response containing the list of Pools.
		 */
		Pool_List(filter: string | null | undefined, select: string | null | undefined, expand: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudPoolListResult> {
			return this.http.get<CloudPoolListResult>(this.baseUri + 'pools?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified Pool.
		 * Get pools/{poolId}
		 * @param {string} poolId The ID of the Pool to get.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CloudPool} A response containing the Pool.
		 */
		Pool_Get(poolId: string, select: string | null | undefined, expand: string | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudPool> {
			return this.http.get<CloudPool>(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a Pool from the specified Account.
		 * When you request that a Pool be deleted, the following actions occur: the Pool state is set to deleting; any ongoing resize operation on the Pool are stopped; the Batch service starts resizing the Pool to zero Compute Nodes; any Tasks running on existing Compute Nodes are terminated and requeued (as if a resize Pool operation had been requested with the default requeue option); finally, the Pool is removed from the system. Because running Tasks are requeued, the user can rerun these Tasks by updating their Job to target a different Pool. The Tasks can then run on the new Pool. If you want to override the requeue behavior, then you should call resize Pool explicitly to shrink the Pool to zero size before deleting the Pool. If you call an Update, Patch or Delete API on a Pool in the deleting state, it will fail with HTTP status code 409 with error code PoolBeingDeleted.
		 * Delete pools/{poolId}
		 * @param {string} poolId The ID of the Pool to delete.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Pool_Delete(poolId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Disables automatic scaling for a Pool.
		 * Post pools/{poolId}/disableautoscale
		 * @param {string} poolId The ID of the Pool on which to disable automatic scaling.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} The request to the Batch service was successful.
		 */
		Pool_DisableAutoScale(poolId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/disableautoscale&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the Compute Nodes in the specified Pool.
		 * Get pools/{poolId}/nodes
		 * @param {string} poolId The ID of the Pool from which you want to list Compute Nodes.
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-nodes-in-a-pool.
		 * @param {string} select An OData $select clause.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 Compute Nodes can be returned.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {ComputeNodeListResult} A response containing the list of Compute Nodes.
		 */
		ComputeNode_List(poolId: string, filter: string | null | undefined, select: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<ComputeNodeListResult> {
			return this.http.get<ComputeNodeListResult>(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified Compute Node.
		 * Get pools/{poolId}/nodes/{nodeId}
		 * @param {string} poolId The ID of the Pool that contains the Compute Node.
		 * @param {string} nodeId The ID of the Compute Node that you want to get information about.
		 * @param {string} select An OData $select clause.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {ComputeNode} A response containing the Compute Node.
		 */
		ComputeNode_Get(poolId: string, nodeId: string, select: string | null | undefined, timeout: number | null | undefined, api_version: string): Observable<ComputeNode> {
			return this.http.get<ComputeNode>(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Enables Task scheduling on the specified Compute Node.
		 * You can enable Task scheduling on a Compute Node only if its current scheduling state is disabled
		 * Post pools/{poolId}/nodes/{nodeId}/enablescheduling
		 * @param {string} poolId The ID of the Pool that contains the Compute Node.
		 * @param {string} nodeId The ID of the Compute Node on which you want to enable Task scheduling.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} The request to the Batch service was successful.
		 */
		ComputeNode_EnableScheduling(poolId: string, nodeId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '/enablescheduling&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all of the files in Task directories on the specified Compute Node.
		 * Get pools/{poolId}/nodes/{nodeId}/files
		 * @param {string} poolId The ID of the Pool that contains the Compute Node.
		 * @param {string} nodeId The ID of the Compute Node whose files you want to list.
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-compute-node-files.
		 * @param {boolean} recursive Whether to list children of a directory.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 files can be returned.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {NodeFileListResult} A response containing the list of files.
		 */
		File_ListFromComputeNode(poolId: string, nodeId: string, filter: string | null | undefined, recursive: boolean | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<NodeFileListResult> {
			return this.http.get<NodeFileListResult>(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '/files&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&recursive=' + recursive + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns the content of the specified Compute Node file.
		 * Get pools/{poolId}/nodes/{nodeId}/files/{filePath}
		 * @param {string} poolId The ID of the Pool that contains the Compute Node.
		 * @param {string} nodeId The ID of the Compute Node that contains the file.
		 * @param {string} filePath The path to the Compute Node file that you want to get the content of.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {string} The file content.
		 */
		File_GetFromComputeNode(poolId: string, nodeId: string, filePath: string, timeout: number | null | undefined, api_version: string): Observable<string> {
			return this.http.get(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '/files/' + (filePath == null ? '' : encodeURIComponent(filePath)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { responseType: 'text' });
		}

		/**
		 * Deletes the specified file from the Compute Node.
		 * Delete pools/{poolId}/nodes/{nodeId}/files/{filePath}
		 * @param {string} poolId The ID of the Pool that contains the Compute Node.
		 * @param {string} nodeId The ID of the Compute Node from which you want to delete the file.
		 * @param {string} filePath The path to the file or directory that you want to delete.
		 * @param {boolean} recursive Whether to delete children of a directory. If the filePath parameter represents a directory instead of a file, you can set recursive to true to delete the directory and all of the files and subdirectories in it. If recursive is false then the directory must be empty or deletion will fail.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} The request to the Batch service was successful.
		 */
		File_DeleteFromComputeNode(poolId: string, nodeId: string, filePath: string, recursive: boolean | null | undefined, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '/files/' + (filePath == null ? '' : encodeURIComponent(filePath)) + '&recursive=' + recursive + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the Remote Desktop Protocol file for the specified Compute Node.
		 * Before you can access a Compute Node by using the RDP file, you must create a user Account on the Compute Node. This API can only be invoked on Pools created with a cloud service configuration. For Pools created with a virtual machine configuration, see the GetRemoteLoginSettings API.
		 * Get pools/{poolId}/nodes/{nodeId}/rdp
		 * @param {string} poolId The ID of the Pool that contains the Compute Node.
		 * @param {string} nodeId The ID of the Compute Node for which you want to get the Remote Desktop Protocol file.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {string} A response containing the RDP information.
		 */
		ComputeNode_GetRemoteDesktop(poolId: string, nodeId: string, timeout: number | null | undefined, api_version: string): Observable<string> {
			return this.http.get(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '/rdp&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { responseType: 'text' });
		}

		/**
		 * Gets the settings required for remote login to a Compute Node.
		 * Before you can remotely login to a Compute Node using the remote login settings, you must create a user Account on the Compute Node. This API can be invoked only on Pools created with the virtual machine configuration property. For Pools created with a cloud service configuration, see the GetRemoteDesktop API.
		 * Get pools/{poolId}/nodes/{nodeId}/remoteloginsettings
		 * @param {string} poolId The ID of the Pool that contains the Compute Node.
		 * @param {string} nodeId The ID of the Compute Node for which to obtain the remote login settings.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {ComputeNodeGetRemoteLoginSettingsResult} A response containing the login settings.
		 */
		ComputeNode_GetRemoteLoginSettings(poolId: string, nodeId: string, timeout: number | null | undefined, api_version: string): Observable<ComputeNodeGetRemoteLoginSettingsResult> {
			return this.http.get<ComputeNodeGetRemoteLoginSettingsResult>(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '/remoteloginsettings&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a user Account from the specified Compute Node.
		 * You can delete a user Account to a Compute Node only when it is in the idle or running state.
		 * Delete pools/{poolId}/nodes/{nodeId}/users/{userName}
		 * @param {string} poolId The ID of the Pool that contains the Compute Node.
		 * @param {string} nodeId The ID of the machine on which you want to delete a user Account.
		 * @param {string} userName The name of the user Account to delete.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} The request to the Batch service was successful.
		 */
		ComputeNode_DeleteUser(poolId: string, nodeId: string, userName: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops an ongoing resize operation on the Pool.
		 * This does not restore the Pool to its previous state before the resize operation: it only stops any further changes being made, and the Pool maintains its current state. After stopping, the Pool stabilizes at the number of Compute Nodes it was at when the stop operation was done. During the stop operation, the Pool allocation state changes first to stopping and then to steady. A resize operation need not be an explicit resize Pool request; this API can also be used to halt the initial sizing of the Pool when it is created.
		 * Post pools/{poolId}/stopresize
		 * @param {string} poolId The ID of the Pool whose resizing you want to stop.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Pool_StopResize(poolId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/stopresize&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the usage metrics, aggregated by Pool across individual time intervals, for the specified Account.
		 * If you do not specify a $filter clause including a poolId, the response includes all Pools that existed in the Account in the time range of the returned aggregation intervals. If you do not specify a $filter clause including a startTime or endTime these filters default to the start and end times of the last aggregation interval currently available; that is, only the last aggregation interval is returned.
		 * Get poolusagemetrics
		 * @param {Date} starttime The earliest time from which to include metrics. This must be at least two and a half hours before the current time. If not specified this defaults to the start time of the last aggregation interval currently available.
		 * @param {Date} endtime The latest time from which to include metrics. This must be at least two hours before the current time. If not specified this defaults to the end time of the last aggregation interval currently available.
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-account-usage-metrics.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 results will be returned.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {PoolListUsageMetricsResult} A response containing the list of Pool usage details.
		 */
		Pool_ListUsageMetrics(starttime: Date | null | undefined, endtime: Date | null | undefined, filter: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<PoolListUsageMetricsResult> {
			return this.http.get<PoolListUsageMetricsResult>(this.baseUri + 'poolusagemetrics?starttime=' + starttime?.toISOString() + '&endtime=' + endtime?.toISOString() + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all Virtual Machine Images supported by the Azure Batch service.
		 * Get supportedimages
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-support-images.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 results will be returned.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {AccountListSupportedImagesResult} A response containing the list of supported Virtual Machine Images.
		 */
		Account_ListSupportedImages(filter: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<AccountListSupportedImagesResult> {
			return this.http.get<AccountListSupportedImagesResult>(this.baseUri + 'supportedimages?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

