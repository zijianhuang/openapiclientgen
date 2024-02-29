import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AccountListNodeAgentSkusResult {
		'odata.nextLink'?: string | null;
		value?: Array<NodeAgentSku>;
	}
	export interface AccountListNodeAgentSkusResultFormProperties {
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreateAccountListNodeAgentSkusResultFormGroup() {
		return new FormGroup<AccountListNodeAgentSkusResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems. */
	export interface NodeAgentSku {
		id?: string | null;
		osType?: NodeAgentSkuOsType | null;

		/** This collection is not exhaustive (the node agent may be compatible with other images). */
		verifiedImageReferences?: Array<ImageReference>;
	}

	/** The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems. */
	export interface NodeAgentSkuFormProperties {
		id: FormControl<string | null | undefined>,
		osType: FormControl<NodeAgentSkuOsType | null | undefined>,
	}
	export function CreateNodeAgentSkuFormGroup() {
		return new FormGroup<NodeAgentSkuFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<NodeAgentSkuOsType | null | undefined>(undefined),
		});

	}

	export enum NodeAgentSkuOsType { linux = 'linux', windows = 'windows' }

	export interface ImageReference {

		/** For example, UbuntuServer or WindowsServer. */
		offer?: string | null;

		/** For example, Canonical or MicrosoftWindowsServer. */
		publisher?: string | null;

		/** For example, 14.04.0-LTS or 2012-R2-Datacenter. */
		sku?: string | null;

		/** A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'. */
		version?: string | null;

		/** This property is mutually exclusive with other ImageReference properties. The virtual machine image must be in the same region and subscription as the Azure Batch account. For information about the firewall settings for the Batch node agent to communicate with the Batch service see https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration. */
		virtualMachineImageId?: string | null;
	}
	export interface ImageReferenceFormProperties {

		/** For example, UbuntuServer or WindowsServer. */
		offer: FormControl<string | null | undefined>,

		/** For example, Canonical or MicrosoftWindowsServer. */
		publisher: FormControl<string | null | undefined>,

		/** For example, 14.04.0-LTS or 2012-R2-Datacenter. */
		sku: FormControl<string | null | undefined>,

		/** A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'. */
		version: FormControl<string | null | undefined>,

		/** This property is mutually exclusive with other ImageReference properties. The virtual machine image must be in the same region and subscription as the Azure Batch account. For information about the firewall settings for the Batch node agent to communicate with the Batch service see https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration. */
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

	export interface AffinityInformation {

		/**
		 * You can pass the affinityId of a compute node to indicate that this task needs to run on that compute node. Note that this is just a soft affinity. If the target node is busy or unavailable at the time the task is scheduled, then the task will be scheduled elsewhere.
		 * Required
		 */
		affinityId: string;
	}
	export interface AffinityInformationFormProperties {

		/**
		 * You can pass the affinityId of a compute node to indicate that this task needs to run on that compute node. Note that this is just a soft affinity. If the target node is busy or unavailable at the time the task is scheduled, then the task will be scheduled elsewhere.
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

		/** If this is omitted on a pool, and no default version is specified for this application, the request fails with the error code InvalidApplicationPackageReferences and HTTP status code 409. If this is omitted on a task, and no default version is specified for this application, the task fails with a pre-processing error. */
		version?: string | null;
	}
	export interface ApplicationPackageReferenceFormProperties {

		/** Required */
		applicationId: FormControl<string | null | undefined>,

		/** If this is omitted on a pool, and no default version is specified for this application, the request fails with the error code InvalidApplicationPackageReferences and HTTP status code 409. If this is omitted on a task, and no default version is specified for this application, the task fails with a pre-processing error. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateApplicationPackageReferenceFormGroup() {
		return new FormGroup<ApplicationPackageReferenceFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthenticationTokenSettings {

		/** The authentication token grants access to a limited set of Batch service operations. Currently the only supported value for the access property is 'job', which grants access to all operations related to the job which contains the task. */
		access?: Array<string>;
	}
	export interface AuthenticationTokenSettingsFormProperties {
	}
	export function CreateAuthenticationTokenSettingsFormGroup() {
		return new FormGroup<AuthenticationTokenSettingsFormProperties>({
		});

	}

	export interface AutoPoolSpecification {

		/** The Batch service assigns each auto pool a unique identifier on creation. To distinguish between pools created for different purposes, you can specify this element to add a prefix to the ID that is assigned. The prefix can be up to 20 characters long. */
		autoPoolIdPrefix?: string | null;

		/** If false, the Batch service deletes the pool once its lifetime (as determined by the poolLifetimeOption setting) expires; that is, when the job or job schedule completes. If true, the Batch service does not delete the pool automatically. It is up to the user to delete auto pools created with this option. */
		keepAlive?: boolean | null;
		pool?: PoolSpecification;

		/** Required */
		poolLifetimeOption: AutoPoolSpecificationPoolLifetimeOption;
	}
	export interface AutoPoolSpecificationFormProperties {

		/** The Batch service assigns each auto pool a unique identifier on creation. To distinguish between pools created for different purposes, you can specify this element to add a prefix to the ID that is assigned. The prefix can be up to 20 characters long. */
		autoPoolIdPrefix: FormControl<string | null | undefined>,

		/** If false, the Batch service deletes the pool once its lifetime (as determined by the poolLifetimeOption setting) expires; that is, when the job or job schedule completes. If true, the Batch service does not delete the pool automatically. It is up to the user to delete auto pools created with this option. */
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

		/** The default value is task. */
		scope?: AutoUserSpecificationScope | null;
	}
	export interface AutoUserSpecificationFormProperties {
		elevationLevel: FormControl<AutoUserSpecificationElevationLevel | null | undefined>,

		/** The default value is task. */
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


	/** The default value for caching is none. For information about the caching options see: https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/. */
	export enum CachingType { none = 'none', readonly = 'readonly', readwrite = 'readwrite' }


	/** A certificate that can be installed on compute nodes and can be used to authenticate operations on the machine. */
	export interface Certificate {
		deleteCertificateError?: DeleteCertificateError;
		previousState?: CertificatePreviousState | null;

		/** This property is not set if the certificate is in its initial Active state. */
		previousStateTransitionTime?: Date | null;
		publicData?: string | null;
		state?: CertificatePreviousState | null;
		stateTransitionTime?: Date | null;
		thumbprint?: string | null;
		thumbprintAlgorithm?: string | null;
		url?: string | null;
	}

	/** A certificate that can be installed on compute nodes and can be used to authenticate operations on the machine. */
	export interface CertificateFormProperties {
		previousState: FormControl<CertificatePreviousState | null | undefined>,

		/** This property is not set if the certificate is in its initial Active state. */
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

		/** This is required if the certificate format is pfx. It should be omitted if the certificate format is cer. */
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

		/** This is required if the certificate format is pfx. It should be omitted if the certificate format is cer. */
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

		/** The default value is currentuser. This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory. */
		storeLocation?: CertificateReferenceStoreLocation | null;

		/** This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). Common store names include: My, Root, CA, Trust, Disallowed, TrustedPeople, TrustedPublisher, AuthRoot, AddressBook, but any custom store name can also be used. The default value is My. */
		storeName?: string | null;

		/** Required */
		thumbprint: string;

		/** Required */
		thumbprintAlgorithm: string;

		/** You can specify more than one visibility in this collection. The default is all accounts. */
		visibility?: Array<string>;
	}
	export interface CertificateReferenceFormProperties {

		/** The default value is currentuser. This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory. */
		storeLocation: FormControl<CertificateReferenceStoreLocation | null | undefined>,

		/** This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). Common store names include: My, Root, CA, Trust, Disallowed, TrustedPeople, TrustedPublisher, AuthRoot, AddressBook, but any custom store name can also be used. The default value is My. */
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

		/** Individual tasks can override an environment setting specified here by specifying the same setting name with a different value. */
		commonEnvironmentSettings?: Array<EnvironmentSetting>;
		constraints?: JobConstraints;
		creationTime?: Date | null;
		displayName?: string | null;

		/** This is an opaque string. You can use it to detect whether the job has changed between requests. In particular, you can be pass the ETag when updating a job to specify that your changes should take effect only if nobody else has modified the job in the meantime. */
		eTag?: string | null;
		executionInfo?: JobExecutionInformation;

		/** The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an account that differ only by case). */
		id?: string | null;

		/** The Job Manager task is automatically started when the job is created. The Batch service tries to schedule the Job Manager task before any other tasks in the job. When shrinking a pool, the Batch service tries to preserve compute nodes where Job Manager tasks are running for as long as possible (that is, nodes running 'normal' tasks are removed before nodes running Job Manager tasks). When a Job Manager task fails and needs to be restarted, the system tries to schedule it at the highest priority. If there are no idle nodes available, the system may terminate one of the running tasks in the pool and return it to the queue in order to make room for the Job Manager task to restart. Note that a Job Manager task in one job does not have priority over tasks in other jobs. Across jobs, only job level priorities are observed. For example, if a Job Manager in a priority 0 job needs to be restarted, it will not displace tasks of a priority 1 job. */
		jobManagerTask?: JobManagerTask;

		/** You can use Job Preparation to prepare a compute node to run tasks for the job. Activities commonly performed in Job Preparation include: Downloading common resource files used by all the tasks in the job. The Job Preparation task can download these common resource files to the shared location on the compute node. (AZ_BATCH_NODE_ROOT_DIR\shared), or starting a local service on the compute node so that all tasks of that job can communicate with it. If the Job Preparation task fails (that is, exhausts its retry count before exiting with exit code 0), Batch will not run tasks of this job on the compute node. The node remains ineligible to run tasks of this job until it is reimaged. The node remains active and can be used for other jobs. The Job Preparation task can run multiple times on the same compute node. Therefore, you should write the Job Preparation task to handle re-execution. If the compute node is rebooted, the Job Preparation task is run again on the node before scheduling any other task of the job, if rerunOnNodeRebootAfterSuccess is true or if the Job Preparation task did not previously complete. If the compute node is reimaged, the Job Preparation task is run again before scheduling any task of the job. */
		jobPreparationTask?: JobPreparationTask;

		/** The Job Release task runs when the job ends, because of one of the following: The user calls the Terminate Job API, or the Delete Job API while the job is still active, the job's maximum wall clock time constraint is reached, and the job is still active, or the job's Job Manager task completed, and the job is configured to terminate when the Job Manager completes. The Job Release task runs on each compute node where tasks of the job have run and the Job Preparation task ran and completed. If you reimage a compute node after it has run the Job Preparation task, and the job ends without any further tasks of the job running on that compute node (and hence the Job Preparation task does not re-run), then the Job Release task does not run on that node. If a compute node reboots while the Job Release task is still running, the Job Release task runs again when the compute node starts up. The job is not marked as complete until all Job Release tasks have completed. The Job Release task runs in the background. It does not occupy a scheduling slot; that is, it does not count towards the maxTasksPerNode limit specified on the pool. */
		jobReleaseTask?: JobReleaseTask;

		/** This is the last time at which the job level data, such as the job state or priority, changed. It does not factor in task-level changes such as adding new tasks or tasks changing state. */
		lastModified?: Date | null;

		/** The Batch service does not assign any meaning to metadata; it is solely for the use of user code. */
		metadata?: Array<MetadataItem>;
		onAllTasksComplete?: CloudJobOnAllTasksComplete | null;

		/** A task is considered to have failed if has a failureInfo. A failureInfo is set if the task completes with a non-zero exit code after exhausting its retry count, or if there was an error starting the task, for example due to a resource file download error. The default is noaction. */
		onTaskFailure?: CloudJobOnTaskFailure | null;
		poolInfo?: PoolInformation;
		previousState?: CloudJobPreviousState | null;

		/** This property is not set if the job is in its initial Active state. */
		previousStateTransitionTime?: Date | null;

		/**
		 * Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

		/** This is an opaque string. You can use it to detect whether the job has changed between requests. In particular, you can be pass the ETag when updating a job to specify that your changes should take effect only if nobody else has modified the job in the meantime. */
		eTag: FormControl<string | null | undefined>,

		/** The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an account that differ only by case). */
		id: FormControl<string | null | undefined>,

		/** This is the last time at which the job level data, such as the job state or priority, changed. It does not factor in task-level changes such as adding new tasks or tasks changing state. */
		lastModified: FormControl<Date | null | undefined>,
		onAllTasksComplete: FormControl<CloudJobOnAllTasksComplete | null | undefined>,

		/** A task is considered to have failed if has a failureInfo. A failureInfo is set if the task completes with a non-zero exit code after exhausting its retry count, or if there was an error starting the task, for example due to a resource file download error. The default is noaction. */
		onTaskFailure: FormControl<CloudJobOnTaskFailure | null | undefined>,
		previousState: FormControl<CloudJobPreviousState | null | undefined>,

		/** This property is not set if the job is in its initial Active state. */
		previousStateTransitionTime: FormControl<Date | null | undefined>,

		/**
		 * Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

		/** This is an opaque string. You can use it to detect whether the job schedule has changed between requests. In particular, you can be pass the ETag with an Update Job Schedule request to specify that your changes should take effect only if nobody else has modified the schedule in the meantime. */
		eTag?: string | null;
		executionInfo?: JobScheduleExecutionInformation;
		id?: string | null;
		jobSpecification?: JobSpecification;

		/** This is the last time at which the schedule level data, such as the job specification or recurrence information, changed. It does not factor in job-level changes such as new jobs being created or jobs changing state. */
		lastModified?: Date | null;

		/** The Batch service does not assign any meaning to metadata; it is solely for the use of user code. */
		metadata?: Array<MetadataItem>;
		previousState?: CloudJobSchedulePreviousState | null;

		/** This property is not present if the job schedule is in its initial active state. */
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

		/** This is an opaque string. You can use it to detect whether the job schedule has changed between requests. In particular, you can be pass the ETag with an Update Job Schedule request to specify that your changes should take effect only if nobody else has modified the schedule in the meantime. */
		eTag: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** This is the last time at which the schedule level data, such as the job specification or recurrence information, changed. It does not factor in job-level changes such as new jobs being created or jobs changing state. */
		lastModified: FormControl<Date | null | undefined>,
		previousState: FormControl<CloudJobSchedulePreviousState | null | undefined>,

		/** This property is not present if the job schedule is in its initial active state. */
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

		/** The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, pool creation will fail. */
		applicationLicenses?: Array<string>;
		applicationPackageReferences?: Array<ApplicationPackageReference>;

		/** This property is set only if the pool automatically scales, i.e. enableAutoScale is true. */
		autoScaleEvaluationInterval?: string | null;

		/** This property is set only if the pool automatically scales, i.e. enableAutoScale is true. */
		autoScaleFormula?: string | null;
		autoScaleRun?: AutoScaleRun;

		/** For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory. */
		certificateReferences?: Array<CertificateReference>;
		cloudServiceConfiguration?: CloudServiceConfiguration;
		creationTime?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		currentDedicatedNodes?: number | null;

		/**
		 * Low-priority compute nodes which have been preempted are included in this count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currentLowPriorityNodes?: number | null;

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName?: string | null;

		/** This is an opaque string. You can use it to detect whether the pool has changed between requests. In particular, you can be pass the ETag when updating a pool to specify that your changes should take effect only if nobody else has modified the pool in the meantime. */
		eTag?: string | null;

		/** If false, at least one of targetDedicateNodes and targetLowPriorityNodes must be specified. If true, the autoScaleFormula property is required and the pool automatically resizes according to the formula. The default value is false. */
		enableAutoScale?: boolean | null;

		/** This imposes restrictions on which nodes can be assigned to the pool. Specifying this value can reduce the chance of the requested number of nodes to be allocated in the pool. */
		enableInterNodeCommunication?: boolean | null;

		/** The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an account that differ only by case). */
		id?: string | null;

		/** This is the last time at which the pool level data, such as the targetDedicatedNodes or enableAutoscale settings, changed. It does not factor in node-level changes such as a compute node changing state. */
		lastModified?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maxTasksPerNode?: number | null;
		metadata?: Array<MetadataItem>;

		/** The network configuration for a pool. */
		networkConfiguration?: NetworkConfiguration;

		/** This property is set only if one or more errors occurred during the last pool resize, and only when the pool allocationState is Steady. */
		resizeErrors?: Array<ResizeError>;

		/** This is the timeout for the most recent resize operation. (The initial sizing when the pool is created counts as a resize.) The default value is 15 minutes. */
		resizeTimeout?: string | null;
		startTask?: StartTask;
		state?: CloudPoolState | null;
		stateTransitionTime?: Date | null;
		stats?: PoolStatistics;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		targetDedicatedNodes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		targetLowPriorityNodes?: number | null;
		taskSchedulingPolicy?: TaskSchedulingPolicy;
		url?: string | null;
		userAccounts?: Array<UserAccount>;
		virtualMachineConfiguration?: VirtualMachineConfiguration;

		/** For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series). */
		vmSize?: string | null;
	}
	export interface CloudPoolFormProperties {
		allocationState: FormControl<CloudPoolAllocationState | null | undefined>,
		allocationStateTransitionTime: FormControl<Date | null | undefined>,

		/** This property is set only if the pool automatically scales, i.e. enableAutoScale is true. */
		autoScaleEvaluationInterval: FormControl<string | null | undefined>,

		/** This property is set only if the pool automatically scales, i.e. enableAutoScale is true. */
		autoScaleFormula: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		currentDedicatedNodes: FormControl<number | null | undefined>,

		/**
		 * Low-priority compute nodes which have been preempted are included in this count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currentLowPriorityNodes: FormControl<number | null | undefined>,

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName: FormControl<string | null | undefined>,

		/** This is an opaque string. You can use it to detect whether the pool has changed between requests. In particular, you can be pass the ETag when updating a pool to specify that your changes should take effect only if nobody else has modified the pool in the meantime. */
		eTag: FormControl<string | null | undefined>,

		/** If false, at least one of targetDedicateNodes and targetLowPriorityNodes must be specified. If true, the autoScaleFormula property is required and the pool automatically resizes according to the formula. The default value is false. */
		enableAutoScale: FormControl<boolean | null | undefined>,

		/** This imposes restrictions on which nodes can be assigned to the pool. Specifying this value can reduce the chance of the requested number of nodes to be allocated in the pool. */
		enableInterNodeCommunication: FormControl<boolean | null | undefined>,

		/** The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an account that differ only by case). */
		id: FormControl<string | null | undefined>,

		/** This is the last time at which the pool level data, such as the targetDedicatedNodes or enableAutoscale settings, changed. It does not factor in node-level changes such as a compute node changing state. */
		lastModified: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maxTasksPerNode: FormControl<number | null | undefined>,

		/** This is the timeout for the most recent resize operation. (The initial sizing when the pool is created counts as a resize.) The default value is 15 minutes. */
		resizeTimeout: FormControl<string | null | undefined>,
		state: FormControl<CloudPoolState | null | undefined>,
		stateTransitionTime: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		targetDedicatedNodes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		targetLowPriorityNodes: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,

		/** For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series). */
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

	export enum CloudPoolState { active = 'active', deleting = 'deleting', upgrading = 'upgrading' }

	export interface UserAccount {
		elevationLevel?: AutoUserSpecificationElevationLevel | null;
		linuxUserConfiguration?: LinuxUserConfiguration;

		/** Required */
		name: string;

		/** Required */
		password: string;
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

		/** This may differ from targetOSVersion if the pool state is Upgrading. In this case some virtual machines may be on the targetOSVersion and some may be on the currentOSVersion during the upgrade process. Once all virtual machines have upgraded, currentOSVersion is updated to be the same as targetOSVersion. */
		currentOSVersion?: string | null;

		/**
		 * Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows Server 2016. For more information, see Azure Guest OS Releases (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
		 * Required
		 */
		osFamily: string;

		/** The default value is * which specifies the latest operating system version for the specified OS family. */
		targetOSVersion?: string | null;
	}
	export interface CloudServiceConfigurationFormProperties {

		/** This may differ from targetOSVersion if the pool state is Upgrading. In this case some virtual machines may be on the targetOSVersion and some may be on the currentOSVersion during the upgrade process. Once all virtual machines have upgraded, currentOSVersion is updated to be the same as targetOSVersion. */
		currentOSVersion: FormControl<string | null | undefined>,

		/**
		 * Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows Server 2016. For more information, see Azure Guest OS Releases (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
		 * Required
		 */
		osFamily: FormControl<string | null | undefined>,

		/** The default value is * which specifies the latest operating system version for the specified OS family. */
		targetOSVersion: FormControl<string | null | undefined>,
	}
	export function CreateCloudServiceConfigurationFormGroup() {
		return new FormGroup<CloudServiceConfigurationFormProperties>({
			currentOSVersion: new FormControl<string | null | undefined>(undefined),
			osFamily: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetOSVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CloudTask {
		affinityInfo?: AffinityInformation;

		/** Application packages are downloaded and deployed to a shared directory, not the task working directory. Therefore, if a referenced package is already on the compute node, and is up to date, then it is not re-downloaded; the existing copy on the compute node is used. If a referenced application package cannot be installed, for example because the package has been deleted or because download failed, the task fails. */
		applicationPackageReferences?: Array<ApplicationPackageReference>;
		authenticationTokenSettings?: AuthenticationTokenSettings;

		/** For multi-instance tasks, the command line is executed as the primary task, after the primary task and all subtasks have finished executing the coordination command line. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. */
		commandLine?: string | null;
		constraints?: TaskConstraints;
		containerSettings?: TaskContainerSettings;
		creationTime?: Date | null;
		dependsOn?: TaskDependencies;

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName?: string | null;

		/** This is an opaque string. You can use it to detect whether the task has changed between requests. In particular, you can be pass the ETag when updating a task to specify that your changes should take effect only if nobody else has modified the task in the meantime. */
		eTag?: string | null;
		environmentSettings?: Array<EnvironmentSetting>;
		executionInfo?: TaskExecutionInformation;
		exitConditions?: ExitConditions;

		/** The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. */
		id?: string | null;
		lastModified?: Date | null;

		/** Multi-instance tasks are commonly used to support MPI tasks. */
		multiInstanceSettings?: MultiInstanceSettings;
		nodeInfo?: ComputeNodeInformation;

		/** For multi-instance tasks, the files will only be uploaded from the compute node on which the primary task is executed. */
		outputFiles?: Array<OutputFile>;
		previousState?: CloudTaskPreviousState | null;

		/** This property is not set if the task is in its initial Active state. */
		previousStateTransitionTime?: Date | null;

		/** For multi-instance tasks, the resource files will only be downloaded to the compute node on which the primary task is executed. */
		resourceFiles?: Array<ResourceFile>;
		state?: CloudTaskPreviousState | null;
		stateTransitionTime?: Date | null;
		stats?: TaskStatistics;
		url?: string | null;

		/** Specify either the userName or autoUser property, but not both. */
		userIdentity?: UserIdentity;
	}
	export interface CloudTaskFormProperties {

		/** For multi-instance tasks, the command line is executed as the primary task, after the primary task and all subtasks have finished executing the coordination command line. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. */
		commandLine: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName: FormControl<string | null | undefined>,

		/** This is an opaque string. You can use it to detect whether the task has changed between requests. In particular, you can be pass the ETag when updating a task to specify that your changes should take effect only if nobody else has modified the task in the meantime. */
		eTag: FormControl<string | null | undefined>,

		/** The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. */
		id: FormControl<string | null | undefined>,
		lastModified: FormControl<Date | null | undefined>,
		previousState: FormControl<CloudTaskPreviousState | null | undefined>,

		/** This property is not set if the task is in its initial Active state. */
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
		 * Both relative and absolute paths are supported. Relative paths are relative to the task working directory. The following wildcards are supported: * matches 0 or more characters (for example pattern abc* would match abc or abcdef), ** matches any directory, ? matches any single character, [abc] matches one character in the brackets, and [a-c] matches one character in the range. Brackets can include a negation to match any character not specified (for example [!abc] matches any character but a, b, or c). If a file name starts with "." it is ignored by default but may be matched by specifying it explicitly (for example *.gif will not match .a.gif, but .*.gif will). A simple example: **\*.txt matches any file that does not start in '.' and ends with .txt in the task working directory or any subdirectory. If the filename contains a wildcard character it can be escaped using brackets (for example abc[*] would match a file named abc*). Note that both \ and / are treated as directory separators on Windows, but only / is on Linux. Environment variables (%var% on Windows or $var on Linux) are expanded prior to the pattern being applied.
		 * Required
		 */
		filePattern: string;

		/** Required */
		uploadOptions: OutputFileUploadOptions;
	}
	export interface OutputFileFormProperties {

		/**
		 * Both relative and absolute paths are supported. Relative paths are relative to the task working directory. The following wildcards are supported: * matches 0 or more characters (for example pattern abc* would match abc or abcdef), ** matches any directory, ? matches any single character, [abc] matches one character in the brackets, and [a-c] matches one character in the range. Brackets can include a negation to match any character not specified (for example [!abc] matches any character but a, b, or c). If a file name starts with "." it is ignored by default but may be matched by specifying it explicitly (for example *.gif will not match .a.gif, but .*.gif will). A simple example: **\*.txt matches any file that does not start in '.' and ends with .txt in the task working directory or any subdirectory. If the filename contains a wildcard character it can be escaped using brackets (for example abc[*] would match a file named abc*). Note that both \ and / are treated as directory separators on Windows, but only / is on Linux. Environment variables (%var% on Windows or $var on Linux) are expanded prior to the pattern being applied.
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

		/**
		 * This URL must be readable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, or set the ACL for the blob or its container to allow public access.
		 * Required
		 */
		blobSource: string;

		/** This property applies only to files being downloaded to Linux compute nodes. It will be ignored if it is specified for a resourceFile which will be downloaded to a Windows node. If this property is not specified for a Linux node, then a default value of 0770 is applied to the file. */
		fileMode?: string | null;

		/** Required */
		filePath: string;
	}
	export interface ResourceFileFormProperties {

		/**
		 * This URL must be readable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, or set the ACL for the blob or its container to allow public access.
		 * Required
		 */
		blobSource: FormControl<string | null | undefined>,

		/** This property applies only to files being downloaded to Linux compute nodes. It will be ignored if it is specified for a resourceFile which will be downloaded to a Windows node. If this property is not specified for a Linux node, then a default value of 0770 is applied to the file. */
		fileMode: FormControl<string | null | undefined>,

		/** Required */
		filePath: FormControl<string | null | undefined>,
	}
	export function CreateResourceFileFormGroup() {
		return new FormGroup<ResourceFileFormProperties>({
			blobSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fileMode: new FormControl<string | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/**
		 * This property is set only if the subtask is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the subtask (due to timeout, or user termination via the API) you may see an operating system-defined exit code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exitCode?: number | null;
		failureInfo?: TaskFailureInformation;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/**
		 * This property is set only if the subtask is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the subtask (due to timeout, or user termination via the API) you may see an operating system-defined exit code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exitCode: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Note that this is just a soft affinity. If the target node is busy or unavailable at the time the task is scheduled, then the task will be scheduled elsewhere. */
		affinityId?: string | null;
		allocationTime?: Date | null;

		/** For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory. */
		certificateReferences?: Array<CertificateReference>;
		endpointConfiguration?: ComputeNodeEndpointConfiguration;
		errors?: Array<ComputeNodeError>;

		/** Every node that is added to a pool is assigned a unique ID. Whenever a node is removed from a pool, all of its local files are deleted, and the ID is reclaimed and could be reused for new nodes. */
		id?: string | null;

		/** Every node that is added to a pool is assigned a unique IP address. Whenever a node is removed from a pool, all of its local files are deleted, and the IP address is reclaimed and could be reused for new nodes. */
		ipAddress?: string | null;
		isDedicated?: boolean | null;

		/** This property may not be present if the node state is unusable. */
		lastBootTime?: Date | null;

		/** This property is present only if at least one task has run on this node since it was assigned to the pool. */
		recentTasks?: Array<TaskInformation>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		runningTasksCount?: number | null;
		schedulingState?: ComputeNodeSchedulingState | null;
		startTask?: StartTask;
		startTaskInfo?: StartTaskInformation;

		/** The low-priority node has been preempted. Tasks which were running on the node when it was preempted will be rescheduled when another node becomes available. */
		state?: ComputeNodeState | null;
		stateTransitionTime?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalTasksRun?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalTasksSucceeded?: number | null;
		url?: string | null;

		/** For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series). */
		vmSize?: string | null;
	}
	export interface ComputeNodeFormProperties {

		/** Note that this is just a soft affinity. If the target node is busy or unavailable at the time the task is scheduled, then the task will be scheduled elsewhere. */
		affinityId: FormControl<string | null | undefined>,
		allocationTime: FormControl<Date | null | undefined>,

		/** Every node that is added to a pool is assigned a unique ID. Whenever a node is removed from a pool, all of its local files are deleted, and the ID is reclaimed and could be reused for new nodes. */
		id: FormControl<string | null | undefined>,

		/** Every node that is added to a pool is assigned a unique IP address. Whenever a node is removed from a pool, all of its local files are deleted, and the IP address is reclaimed and could be reused for new nodes. */
		ipAddress: FormControl<string | null | undefined>,
		isDedicated: FormControl<boolean | null | undefined>,

		/** This property may not be present if the node state is unusable. */
		lastBootTime: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		runningTasksCount: FormControl<number | null | undefined>,
		schedulingState: FormControl<ComputeNodeSchedulingState | null | undefined>,

		/** The low-priority node has been preempted. Tasks which were running on the node when it was preempted will be rescheduled when another node becomes available. */
		state: FormControl<ComputeNodeState | null | undefined>,
		stateTransitionTime: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalTasksRun: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalTasksSucceeded: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,

		/** For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series). */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		subtaskId?: number | null;
		taskId?: string | null;

		/** Required */
		taskState: CloudTaskPreviousState;
		taskUrl?: string | null;
	}
	export interface TaskInformationFormProperties {
		jobId: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		backendPort: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		backendPort: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		remoteLoginPort: number;
	}
	export interface ComputeNodeGetRemoteLoginSettingsResultFormProperties {

		/** Required */
		remoteLoginIPAddress: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

		/** If omitted, the default is 1 day from the current time. For Linux compute nodes, the expiryTime has a precision up to a day. */
		expiryTime?: Date | null;

		/** The default value is false. */
		isAdmin?: boolean | null;

		/** Required */
		name: string;

		/** The password is required for Windows nodes (those created with 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration' using a Windows image reference). For Linux compute nodes, the password can optionally be specified along with the sshPublicKey property. */
		password?: string | null;

		/** The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux nodes. If this is specified for a Windows node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		sshPublicKey?: string | null;
	}
	export interface ComputeNodeUserFormProperties {

		/** If omitted, the default is 1 day from the current time. For Linux compute nodes, the expiryTime has a precision up to a day. */
		expiryTime: FormControl<Date | null | undefined>,

		/** The default value is false. */
		isAdmin: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** The password is required for Windows nodes (those created with 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration' using a Windows image reference). For Linux compute nodes, the password can optionally be specified along with the sshPublicKey property. */
		password: FormControl<string | null | undefined>,

		/** The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux nodes. If this is specified for a Windows node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
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

		/** This is the full image reference, as would be specified to "docker pull". An image will be sourced from the default Docker registry unless the image is fully qualified with an alternative registry. */
		containerImageNames?: Array<string>;

		/** If any images must be downloaded from a private registry which requires credentials, then those credentials must be provided here. */
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

	export enum ContainerConfigurationType { docker = 'docker' }

	export interface DataDisk {

		/** The default value for caching is none. For information about the caching options see: https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/. */
		caching?: CachingType | null;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGB: number;

		/**
		 * The lun is used to uniquely identify each data disk. If attaching multiple disks, each should have a distinct lun.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lun: number;
		storageAccountType?: DataDiskStorageAccountType | null;
	}
	export interface DataDiskFormProperties {

		/** The default value for caching is none. For information about the caching options see: https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/. */
		caching: FormControl<CachingType | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGB: FormControl<number | null | undefined>,

		/**
		 * The lun is used to uniquely identify each data disk. If attaching multiple disks, each should have a distinct lun.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
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

		/** This list includes details such as the active pools and nodes referencing this certificate. However, if a large number of resources reference the certificate, the list contains only about the first hundred. */
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

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: number;

		/** Required */
		exitOptions: ExitOptions;
	}
	export interface ExitCodeMappingFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,
	}
	export function CreateExitCodeMappingFormGroup() {
		return new FormGroup<ExitCodeMappingFormProperties>({
			code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExitCodeRangeMapping {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end: number;

		/** Required */
		exitOptions: ExitOptions;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start: number;
	}
	export interface ExitCodeRangeMappingFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

		/** The default is 'satisfy' for exit code 0, and 'block' for all other exit conditions. If the job's usesTaskDependencies property is set to false, then specifying the dependencyAction property returns an error and the add task request fails with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400  (Bad Request). */
		dependencyAction?: ExitOptionsDependencyAction | null;

		/** The default is none for exit code 0 and terminate for all other exit conditions. If the job's onTaskFailed property is noAction, then specifying this property returns an error and the add task request fails with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		jobAction?: ExitOptionsJobAction | null;
	}
	export interface ExitOptionsFormProperties {

		/** The default is 'satisfy' for exit code 0, and 'block' for all other exit conditions. If the job's usesTaskDependencies property is set to false, then specifying the dependencyAction property returns an error and the add task request fails with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400  (Bad Request). */
		dependencyAction: FormControl<ExitOptionsDependencyAction | null | undefined>,

		/** The default is none for exit code 0 and terminate for all other exit conditions. If the job's onTaskFailed property is noAction, then specifying this property returns an error and the add task request fails with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
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

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		contentLength: string;
		contentType?: string | null;

		/** The creation time is not returned for files on Linux compute nodes. */
		creationTime?: Date | null;

		/** The file mode is returned only for files on Linux compute nodes. */
		fileMode?: string | null;

		/** Required */
		lastModified: Date;
	}
	export interface FilePropertiesFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		contentLength: FormControl<string | null | undefined>,
		contentType: FormControl<string | null | undefined>,

		/** The creation time is not returned for files on Linux compute nodes. */
		creationTime: FormControl<Date | null | undefined>,

		/** The file mode is returned only for files on Linux compute nodes. */
		fileMode: FormControl<string | null | undefined>,

		/** Required */
		lastModified: FormControl<Date | null | undefined>,
	}
	export function CreateFilePropertiesFormGroup() {
		return new FormGroup<FilePropertiesFormProperties>({
			contentLength: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			contentType: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			fileMode: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InboundNATPool {

		/**
		 * This must be unique within a Batch pool. Acceptable values are between 1 and 65535 except for 22, 3389, 29876 and 29877 as these are reserved. If any reserved values are provided the request fails with HTTP status code 400.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		backendPort: number;

		/**
		 * Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved by the Batch service. All ranges within a pool must be distinct and cannot overlap. Each range must contain at least 40 ports. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontendPortRangeEnd: number;

		/**
		 * Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved. All ranges within a pool must be distinct and cannot overlap. Each range must contain at least 40 ports. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontendPortRangeStart: number;

		/**
		 * The name must be unique within a Batch pool, can contain letters, numbers, underscores, periods, and hyphens. Names must start with a letter or number, must end with a letter, number, or underscore, and cannot exceed 77 characters.  If any invalid values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		name: string;

		/** The maximum number of rules that can be specified across all the endpoints on a Batch pool is 25. If no network security group rules are specified, a default rule will be created to allow inbound access to the specified backendPort. If the maximum number of network security group rules is exceeded the request fails with HTTP status code 400. */
		networkSecurityGroupRules?: Array<NetworkSecurityGroupRule>;

		/** Required */
		protocol: InboundEndpointProtocol;
	}
	export interface InboundNATPoolFormProperties {

		/**
		 * This must be unique within a Batch pool. Acceptable values are between 1 and 65535 except for 22, 3389, 29876 and 29877 as these are reserved. If any reserved values are provided the request fails with HTTP status code 400.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		backendPort: FormControl<number | null | undefined>,

		/**
		 * Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved by the Batch service. All ranges within a pool must be distinct and cannot overlap. Each range must contain at least 40 ports. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontendPortRangeEnd: FormControl<number | null | undefined>,

		/**
		 * Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved. All ranges within a pool must be distinct and cannot overlap. Each range must contain at least 40 ports. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontendPortRangeStart: FormControl<number | null | undefined>,

		/**
		 * The name must be unique within a Batch pool, can contain letters, numbers, underscores, periods, and hyphens. Names must start with a letter or number, must end with a letter, number, or underscore, and cannot exceed 77 characters.  If any invalid values are provided the request fails with HTTP status code 400.
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
		 * Priorities within a pool must be unique and are evaluated in order of priority. The lower the number the higher the priority. For example, rules could be specified with order numbers of 150, 250, and 350. The rule with the order number of 150 takes precedence over the rule that has an order of 250. Allowed priorities are 150 to 3500. If any reserved or duplicate values are provided the request fails with HTTP status code 400.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: number;

		/**
		 * Valid values are a single IP address (i.e. 10.10.10.10), IP subnet (i.e. 192.168.1.0/24), default tag, or * (for all addresses).  If any other values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		sourceAddressPrefix: string;
	}
	export interface NetworkSecurityGroupRuleFormProperties {

		/** Required */
		access: FormControl<NetworkSecurityGroupRuleAccess | null | undefined>,

		/**
		 * Priorities within a pool must be unique and are evaluated in order of priority. The lower the number the higher the priority. For example, rules could be specified with order numbers of 150, 250, and 350. The rule with the order number of 150 takes precedence over the rule that has an order of 250. Allowed priorities are 150 to 3500. If any reserved or duplicate values are provided the request fails with HTTP status code 400.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
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

		/** Individual tasks can override an environment setting specified here by specifying the same setting name with a different value. */
		commonEnvironmentSettings?: Array<EnvironmentSetting>;
		constraints?: JobConstraints;

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName?: string | null;

		/**
		 * The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an account that differ only by case).
		 * Required
		 */
		id: string;

		/** The Job Manager task is automatically started when the job is created. The Batch service tries to schedule the Job Manager task before any other tasks in the job. When shrinking a pool, the Batch service tries to preserve compute nodes where Job Manager tasks are running for as long as possible (that is, nodes running 'normal' tasks are removed before nodes running Job Manager tasks). When a Job Manager task fails and needs to be restarted, the system tries to schedule it at the highest priority. If there are no idle nodes available, the system may terminate one of the running tasks in the pool and return it to the queue in order to make room for the Job Manager task to restart. Note that a Job Manager task in one job does not have priority over tasks in other jobs. Across jobs, only job level priorities are observed. For example, if a Job Manager in a priority 0 job needs to be restarted, it will not displace tasks of a priority 1 job. */
		jobManagerTask?: JobManagerTask;

		/** You can use Job Preparation to prepare a compute node to run tasks for the job. Activities commonly performed in Job Preparation include: Downloading common resource files used by all the tasks in the job. The Job Preparation task can download these common resource files to the shared location on the compute node. (AZ_BATCH_NODE_ROOT_DIR\shared), or starting a local service on the compute node so that all tasks of that job can communicate with it. If the Job Preparation task fails (that is, exhausts its retry count before exiting with exit code 0), Batch will not run tasks of this job on the compute node. The node remains ineligible to run tasks of this job until it is reimaged. The node remains active and can be used for other jobs. The Job Preparation task can run multiple times on the same compute node. Therefore, you should write the Job Preparation task to handle re-execution. If the compute node is rebooted, the Job Preparation task is run again on the node before scheduling any other task of the job, if rerunOnNodeRebootAfterSuccess is true or if the Job Preparation task did not previously complete. If the compute node is reimaged, the Job Preparation task is run again before scheduling any task of the job. */
		jobPreparationTask?: JobPreparationTask;

		/** The Job Release task runs when the job ends, because of one of the following: The user calls the Terminate Job API, or the Delete Job API while the job is still active, the job's maximum wall clock time constraint is reached, and the job is still active, or the job's Job Manager task completed, and the job is configured to terminate when the Job Manager completes. The Job Release task runs on each compute node where tasks of the job have run and the Job Preparation task ran and completed. If you reimage a compute node after it has run the Job Preparation task, and the job ends without any further tasks of the job running on that compute node (and hence the Job Preparation task does not re-run), then the Job Release task does not run on that node. If a compute node reboots while the Job Release task is still running, the Job Release task runs again when the compute node starts up. The job is not marked as complete until all Job Release tasks have completed. The Job Release task runs in the background. It does not occupy a scheduling slot; that is, it does not count towards the maxTasksPerNode limit specified on the pool. */
		jobReleaseTask?: JobReleaseTask;

		/** The Batch service does not assign any meaning to metadata; it is solely for the use of user code. */
		metadata?: Array<MetadataItem>;
		onAllTasksComplete?: CloudJobOnAllTasksComplete | null;

		/** A task is considered to have failed if has a failureInfo. A failureInfo is set if the task completes with a non-zero exit code after exhausting its retry count, or if there was an error starting the task, for example due to a resource file download error. The default is noaction. */
		onTaskFailure?: CloudJobOnTaskFailure | null;

		/** Required */
		poolInfo: PoolInformation;

		/**
		 * Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority?: number | null;
		usesTaskDependencies?: boolean | null;
	}
	export interface JobAddParameterFormProperties {

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an account that differ only by case).
		 * Required
		 */
		id: FormControl<string | null | undefined>,
		onAllTasksComplete: FormControl<CloudJobOnAllTasksComplete | null | undefined>,

		/** A task is considered to have failed if has a failureInfo. A failureInfo is set if the task completes with a non-zero exit code after exhausting its retry count, or if there was an error starting the task, for example due to a resource file download error. The default is noaction. */
		onTaskFailure: FormControl<CloudJobOnTaskFailure | null | undefined>,

		/**
		 * Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

		/**
		 * Note that this value specifically controls the number of retries. The Batch service will try each task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries a task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry tasks. If the maximum retry count is -1, the Batch service retries tasks without limit. The default value is 0 (no retries).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxTaskRetryCount?: number | null;

		/** If the job does not complete within the time limit, the Batch service terminates it and any tasks that are still running. In this case, the termination reason will be MaxWallClockTimeExpiry. If this property is not specified, there is no time limit on how long the job may run. */
		maxWallClockTime?: string | null;
	}
	export interface JobConstraintsFormProperties {

		/**
		 * Note that this value specifically controls the number of retries. The Batch service will try each task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries a task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry tasks. If the maximum retry count is -1, the Batch service retries tasks without limit. The default value is 0 (no retries).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxTaskRetryCount: FormControl<number | null | undefined>,

		/** If the job does not complete within the time limit, the Batch service terminates it and any tasks that are still running. In this case, the termination reason will be MaxWallClockTimeExpiry. If this property is not specified, there is no time limit on how long the job may run. */
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

		/** This property is set only if the job is in the completed state. */
		endTime?: Date | null;

		/** This element contains the actual pool where the job is assigned. When you get job details from the service, they also contain a poolInfo element, which contains the pool configuration data from when the job was added or updated. That poolInfo element may also contain a poolId element. If it does, the two IDs are the same. If it does not, it means the job ran on an auto pool, and this property contains the ID of that auto pool. */
		poolId?: string | null;
		schedulingError?: JobSchedulingError;

		/**
		 * This is the time at which the job was created.
		 * Required
		 */
		startTime: Date;

		/** This property is set only if the job is in the completed state. If the Batch service terminates the job, it sets the reason as follows: JMComplete - the Job Manager task completed, and killJobOnCompletion was set to true. MaxWallClockTimeExpiry - the job reached its maxWallClockTime constraint. TerminateJobSchedule - the job ran as part of a schedule, and the schedule terminated. AllTasksComplete - the job's onAllTasksComplete attribute is set to terminatejob, and all tasks in the job are complete. TaskFailed - the job's onTaskFailure attribute is set to performExitOptionsJobAction, and a task in the job failed with an exit condition that specified a jobAction of terminatejob. Any other string is a user-defined reason specified in a call to the 'Terminate a job' operation. */
		terminateReason?: string | null;
	}
	export interface JobExecutionInformationFormProperties {

		/** This property is set only if the job is in the completed state. */
		endTime: FormControl<Date | null | undefined>,

		/** This element contains the actual pool where the job is assigned. When you get job details from the service, they also contain a poolInfo element, which contains the pool configuration data from when the job was added or updated. That poolInfo element may also contain a poolId element. If it does, the two IDs are the same. If it does not, it means the job ran on an auto pool, and this property contains the ID of that auto pool. */
		poolId: FormControl<string | null | undefined>,

		/**
		 * This is the time at which the job was created.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/** This property is set only if the job is in the completed state. If the Batch service terminates the job, it sets the reason as follows: JMComplete - the Job Manager task completed, and killJobOnCompletion was set to true. MaxWallClockTimeExpiry - the job reached its maxWallClockTime constraint. TerminateJobSchedule - the job ran as part of a schedule, and the schedule terminated. AllTasksComplete - the job's onAllTasksComplete attribute is set to terminatejob, and all tasks in the job are complete. TaskFailed - the job's onTaskFailure attribute is set to performExitOptionsJobAction, and a task in the job failed with an exit condition that specified a jobAction of terminatejob. Any other string is a user-defined reason specified in a call to the 'Terminate a job' operation. */
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


	/** The Job Manager task is automatically started when the job is created. The Batch service tries to schedule the Job Manager task before any other tasks in the job. When shrinking a pool, the Batch service tries to preserve compute nodes where Job Manager tasks are running for as long as possible (that is, nodes running 'normal' tasks are removed before nodes running Job Manager tasks). When a Job Manager task fails and needs to be restarted, the system tries to schedule it at the highest priority. If there are no idle nodes available, the system may terminate one of the running tasks in the pool and return it to the queue in order to make room for the Job Manager task to restart. Note that a Job Manager task in one job does not have priority over tasks in other jobs. Across jobs, only job level priorities are observed. For example, if a Job Manager in a priority 0 job needs to be restarted, it will not displace tasks of a priority 1 job. */
	export interface JobManagerTask {

		/** The default value is false. */
		allowLowPriorityNode?: boolean | null;

		/** Application packages are downloaded and deployed to a shared directory, not the task working directory. Therefore, if a referenced package is already on the compute node, and is up to date, then it is not re-downloaded; the existing copy on the compute node is used. If a referenced application package cannot be installed, for example because the package has been deleted or because download failed, the task fails. */
		applicationPackageReferences?: Array<ApplicationPackageReference>;
		authenticationTokenSettings?: AuthenticationTokenSettings;

		/**
		 * The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
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

		/** If true, when the Job Manager task completes, the Batch service marks the job as complete. If any tasks are still running at this time (other than Job Release), those tasks are terminated. If false, the completion of the Job Manager task does not affect the job status. In this case, you should either use the onAllTasksComplete attribute to terminate the job, or have a client or user terminate the job explicitly. An example of this is if the Job Manager creates a set of tasks but then takes no further role in their execution. The default value is true. If you are using the onAllTasksComplete and onTaskFailure attributes to control job lifetime, and using the Job Manager task only to create the tasks for the job (not to monitor progress), then it is important to set killJobOnCompletion to false. */
		killJobOnCompletion?: boolean | null;

		/** For multi-instance tasks, the files will only be uploaded from the compute node on which the primary task is executed. */
		outputFiles?: Array<OutputFile>;

		/** Files listed under this element are located in the task's working directory. */
		resourceFiles?: Array<ResourceFile>;

		/** If true, no other tasks will run on the same compute node for as long as the Job Manager is running. If false, other tasks can run simultaneously with the Job Manager on a compute node. The Job Manager task counts normally against the node's concurrent task limit, so this is only relevant if the node allows multiple concurrent tasks. The default value is true. */
		runExclusive?: boolean | null;

		/** Specify either the userName or autoUser property, but not both. */
		userIdentity?: UserIdentity;
	}

	/** The Job Manager task is automatically started when the job is created. The Batch service tries to schedule the Job Manager task before any other tasks in the job. When shrinking a pool, the Batch service tries to preserve compute nodes where Job Manager tasks are running for as long as possible (that is, nodes running 'normal' tasks are removed before nodes running Job Manager tasks). When a Job Manager task fails and needs to be restarted, the system tries to schedule it at the highest priority. If there are no idle nodes available, the system may terminate one of the running tasks in the pool and return it to the queue in order to make room for the Job Manager task to restart. Note that a Job Manager task in one job does not have priority over tasks in other jobs. Across jobs, only job level priorities are observed. For example, if a Job Manager in a priority 0 job needs to be restarted, it will not displace tasks of a priority 1 job. */
	export interface JobManagerTaskFormProperties {

		/** The default value is false. */
		allowLowPriorityNode: FormControl<boolean | null | undefined>,

		/**
		 * The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
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

		/** If true, when the Job Manager task completes, the Batch service marks the job as complete. If any tasks are still running at this time (other than Job Release), those tasks are terminated. If false, the completion of the Job Manager task does not affect the job status. In this case, you should either use the onAllTasksComplete attribute to terminate the job, or have a client or user terminate the job explicitly. An example of this is if the Job Manager creates a set of tasks but then takes no further role in their execution. The default value is true. If you are using the onAllTasksComplete and onTaskFailure attributes to control job lifetime, and using the Job Manager task only to create the tasks for the job (not to monitor progress), then it is important to set killJobOnCompletion to false. */
		killJobOnCompletion: FormControl<boolean | null | undefined>,

		/** If true, no other tasks will run on the same compute node for as long as the Job Manager is running. If false, other tasks can run simultaneously with the Job Manager on a compute node. The Job Manager task counts normally against the node's concurrent task limit, so this is only relevant if the node allows multiple concurrent tasks. The default value is true. */
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

	export interface JobPatchParameter {
		constraints?: JobConstraints;

		/** If omitted, the existing job metadata is left unchanged. */
		metadata?: Array<MetadataItem>;
		onAllTasksComplete?: CloudJobOnAllTasksComplete | null;
		poolInfo?: PoolInformation;

		/**
		 * Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, the priority of the job is left unchanged.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority?: number | null;
	}
	export interface JobPatchParameterFormProperties {
		onAllTasksComplete: FormControl<CloudJobOnAllTasksComplete | null | undefined>,

		/**
		 * Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, the priority of the job is left unchanged.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateJobPatchParameterFormGroup() {
		return new FormGroup<JobPatchParameterFormProperties>({
			onAllTasksComplete: new FormControl<CloudJobOnAllTasksComplete | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** You can use Job Preparation to prepare a compute node to run tasks for the job. Activities commonly performed in Job Preparation include: Downloading common resource files used by all the tasks in the job. The Job Preparation task can download these common resource files to the shared location on the compute node. (AZ_BATCH_NODE_ROOT_DIR\shared), or starting a local service on the compute node so that all tasks of that job can communicate with it. If the Job Preparation task fails (that is, exhausts its retry count before exiting with exit code 0), Batch will not run tasks of this job on the compute node. The node remains ineligible to run tasks of this job until it is reimaged. The node remains active and can be used for other jobs. The Job Preparation task can run multiple times on the same compute node. Therefore, you should write the Job Preparation task to handle re-execution. If the compute node is rebooted, the Job Preparation task is run again on the node before scheduling any other task of the job, if rerunOnNodeRebootAfterSuccess is true or if the Job Preparation task did not previously complete. If the compute node is reimaged, the Job Preparation task is run again before scheduling any task of the job. */
	export interface JobPreparationTask {

		/**
		 * The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
		 * Required
		 */
		commandLine: string;
		constraints?: TaskConstraints;
		containerSettings?: TaskContainerSettings;
		environmentSettings?: Array<EnvironmentSetting>;

		/** The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. If you do not specify this property, the Batch service assigns a default value of 'jobpreparation'. No other task in the job can have the same ID as the Job Preparation task. If you try to submit a task with the same id, the Batch service rejects the request with error code TaskIdSameAsJobPreparationTask; if you are calling the REST API directly, the HTTP status code is 409 (Conflict). */
		id?: string | null;

		/** The Job Preparation task is always rerun if a compute node is reimaged, or if the Job Preparation task did not complete (e.g. because the reboot occurred while the task was running). Therefore, you should always write a Job Preparation task to be idempotent and to behave correctly if run multiple times. The default value is true. */
		rerunOnNodeRebootAfterSuccess?: boolean | null;

		/** Files listed under this element are located in the task's working directory. */
		resourceFiles?: Array<ResourceFile>;

		/** Specify either the userName or autoUser property, but not both. */
		userIdentity?: UserIdentity;

		/** If true and the Job Preparation task fails on a compute node, the Batch service retries the Job Preparation task up to its maximum retry count (as specified in the constraints element). If the task has still not completed successfully after all retries, then the Batch service will not schedule tasks of the job to the compute node. The compute node remains active and eligible to run tasks of other jobs. If false, the Batch service will not wait for the Job Preparation task to complete. In this case, other tasks of the job can start executing on the compute node while the Job Preparation task is still running; and even if the Job Preparation task fails, new tasks will continue to be scheduled on the node. The default value is true. */
		waitForSuccess?: boolean | null;
	}

	/** You can use Job Preparation to prepare a compute node to run tasks for the job. Activities commonly performed in Job Preparation include: Downloading common resource files used by all the tasks in the job. The Job Preparation task can download these common resource files to the shared location on the compute node. (AZ_BATCH_NODE_ROOT_DIR\shared), or starting a local service on the compute node so that all tasks of that job can communicate with it. If the Job Preparation task fails (that is, exhausts its retry count before exiting with exit code 0), Batch will not run tasks of this job on the compute node. The node remains ineligible to run tasks of this job until it is reimaged. The node remains active and can be used for other jobs. The Job Preparation task can run multiple times on the same compute node. Therefore, you should write the Job Preparation task to handle re-execution. If the compute node is rebooted, the Job Preparation task is run again on the node before scheduling any other task of the job, if rerunOnNodeRebootAfterSuccess is true or if the Job Preparation task did not previously complete. If the compute node is reimaged, the Job Preparation task is run again before scheduling any task of the job. */
	export interface JobPreparationTaskFormProperties {

		/**
		 * The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
		 * Required
		 */
		commandLine: FormControl<string | null | undefined>,

		/** The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. If you do not specify this property, the Batch service assigns a default value of 'jobpreparation'. No other task in the job can have the same ID as the Job Preparation task. If you try to submit a task with the same id, the Batch service rejects the request with error code TaskIdSameAsJobPreparationTask; if you are calling the REST API directly, the HTTP status code is 409 (Conflict). */
		id: FormControl<string | null | undefined>,

		/** The Job Preparation task is always rerun if a compute node is reimaged, or if the Job Preparation task did not complete (e.g. because the reboot occurred while the task was running). Therefore, you should always write a Job Preparation task to be idempotent and to behave correctly if run multiple times. The default value is true. */
		rerunOnNodeRebootAfterSuccess: FormControl<boolean | null | undefined>,

		/** If true and the Job Preparation task fails on a compute node, the Batch service retries the Job Preparation task up to its maximum retry count (as specified in the constraints element). If the task has still not completed successfully after all retries, then the Batch service will not schedule tasks of the job to the compute node. The compute node remains active and eligible to run tasks of other jobs. If false, the Batch service will not wait for the Job Preparation task to complete. In this case, other tasks of the job can start executing on the compute node while the Job Preparation task is still running; and even if the Job Preparation task fails, new tasks will continue to be scheduled on the node. The default value is true. */
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

		/** This property is set only if the task is in the Completed state. */
		endTime?: Date | null;

		/**
		 * This parameter is returned only if the task is in the completed state. The exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. Note that the exit code may also be generated by the compute node operating system, such as when a process is forcibly terminated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exitCode?: number | null;
		failureInfo?: TaskFailureInformation;

		/** This property is set only if the task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the task has been restarted for reasons other than retry; for example, if the compute node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not. */
		lastRetryTime?: Date | null;
		result?: SubtaskInformationResult | null;

		/**
		 * Task application failures (non-zero exit code) are retried, pre-processing errors (the task could not be run) and file upload errors are not retried. The Batch service will retry the task up to the limit specified by the constraints.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retryCount: number;

		/**
		 * If the task has been restarted or retried, this is the most recent time at which the task started running.
		 * Required
		 */
		startTime: Date;

		/** Required */
		state: JobPreparationTaskExecutionInformationState;
		taskRootDirectory?: string | null;
		taskRootDirectoryUrl?: string | null;
	}
	export interface JobPreparationTaskExecutionInformationFormProperties {

		/** This property is set only if the task is in the Completed state. */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * This parameter is returned only if the task is in the completed state. The exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. Note that the exit code may also be generated by the compute node operating system, such as when a process is forcibly terminated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exitCode: FormControl<number | null | undefined>,

		/** This property is set only if the task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the task has been restarted for reasons other than retry; for example, if the compute node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not. */
		lastRetryTime: FormControl<Date | null | undefined>,
		result: FormControl<SubtaskInformationResult | null | undefined>,

		/**
		 * Task application failures (non-zero exit code) are retried, pre-processing errors (the task could not be run) and file upload errors are not retried. The Batch service will retry the task up to the limit specified by the constraints.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retryCount: FormControl<number | null | undefined>,

		/**
		 * If the task has been restarted or retried, this is the most recent time at which the task started running.
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


	/** The Job Release task runs when the job ends, because of one of the following: The user calls the Terminate Job API, or the Delete Job API while the job is still active, the job's maximum wall clock time constraint is reached, and the job is still active, or the job's Job Manager task completed, and the job is configured to terminate when the Job Manager completes. The Job Release task runs on each compute node where tasks of the job have run and the Job Preparation task ran and completed. If you reimage a compute node after it has run the Job Preparation task, and the job ends without any further tasks of the job running on that compute node (and hence the Job Preparation task does not re-run), then the Job Release task does not run on that node. If a compute node reboots while the Job Release task is still running, the Job Release task runs again when the compute node starts up. The job is not marked as complete until all Job Release tasks have completed. The Job Release task runs in the background. It does not occupy a scheduling slot; that is, it does not count towards the maxTasksPerNode limit specified on the pool. */
	export interface JobReleaseTask {

		/**
		 * The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
		 * Required
		 */
		commandLine: string;
		containerSettings?: TaskContainerSettings;
		environmentSettings?: Array<EnvironmentSetting>;

		/** The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. If you do not specify this property, the Batch service assigns a default value of 'jobrelease'. No other task in the job can have the same ID as the Job Release task. If you try to submit a task with the same id, the Batch service rejects the request with error code TaskIdSameAsJobReleaseTask; if you are calling the REST API directly, the HTTP status code is 409 (Conflict). */
		id?: string | null;
		maxWallClockTime?: string | null;

		/** Files listed under this element are located in the task's working directory. */
		resourceFiles?: Array<ResourceFile>;

		/** The default is infinite, i.e. the task directory will be retained until the compute node is removed or reimaged. */
		retentionTime?: string | null;

		/** Specify either the userName or autoUser property, but not both. */
		userIdentity?: UserIdentity;
	}

	/** The Job Release task runs when the job ends, because of one of the following: The user calls the Terminate Job API, or the Delete Job API while the job is still active, the job's maximum wall clock time constraint is reached, and the job is still active, or the job's Job Manager task completed, and the job is configured to terminate when the Job Manager completes. The Job Release task runs on each compute node where tasks of the job have run and the Job Preparation task ran and completed. If you reimage a compute node after it has run the Job Preparation task, and the job ends without any further tasks of the job running on that compute node (and hence the Job Preparation task does not re-run), then the Job Release task does not run on that node. If a compute node reboots while the Job Release task is still running, the Job Release task runs again when the compute node starts up. The job is not marked as complete until all Job Release tasks have completed. The Job Release task runs in the background. It does not occupy a scheduling slot; that is, it does not count towards the maxTasksPerNode limit specified on the pool. */
	export interface JobReleaseTaskFormProperties {

		/**
		 * The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
		 * Required
		 */
		commandLine: FormControl<string | null | undefined>,

		/** The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. If you do not specify this property, the Batch service assigns a default value of 'jobrelease'. No other task in the job can have the same ID as the Job Release task. If you try to submit a task with the same id, the Batch service rejects the request with error code TaskIdSameAsJobReleaseTask; if you are calling the REST API directly, the HTTP status code is 409 (Conflict). */
		id: FormControl<string | null | undefined>,
		maxWallClockTime: FormControl<string | null | undefined>,

		/** The default is infinite, i.e. the task directory will be retained until the compute node is removed or reimaged. */
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

		/** This property is set only if the task is in the Completed state. */
		endTime?: Date | null;

		/**
		 * This parameter is returned only if the task is in the completed state. The exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. Note that the exit code may also be generated by the compute node operating system, such as when a process is forcibly terminated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exitCode?: number | null;
		failureInfo?: TaskFailureInformation;
		result?: SubtaskInformationResult | null;

		/**
		 * If the task has been restarted or retried, this is the most recent time at which the task started running.
		 * Required
		 */
		startTime: Date;

		/** Required */
		state: JobPreparationTaskExecutionInformationState;
		taskRootDirectory?: string | null;
		taskRootDirectoryUrl?: string | null;
	}
	export interface JobReleaseTaskExecutionInformationFormProperties {

		/** This property is set only if the task is in the Completed state. */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * This parameter is returned only if the task is in the completed state. The exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. Note that the exit code may also be generated by the compute node operating system, such as when a process is forcibly terminated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exitCode: FormControl<number | null | undefined>,
		result: FormControl<SubtaskInformationResult | null | undefined>,

		/**
		 * If the task has been restarted or retried, this is the most recent time at which the task started running.
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
		 * The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an account that differ only by case).
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
		 * The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an account that differ only by case).
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

		/** This property is set only if the job schedule is in the completed state. */
		endTime?: Date | null;

		/** This property is meaningful only if the schedule is in the active state when the time comes around. For example, if the schedule is disabled, no job will be created at nextRunTime unless the job is enabled before then. */
		nextRunTime?: Date | null;
		recentJob?: RecentJob;
	}
	export interface JobScheduleExecutionInformationFormProperties {

		/** This property is set only if the job schedule is in the completed state. */
		endTime: FormControl<Date | null | undefined>,

		/** This property is meaningful only if the schedule is in the active state when the time comes around. For example, if the schedule is disabled, no job will be created at nextRunTime unless the job is enabled before then. */
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

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		numFailedTasks: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		numSucceededTasks: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		numTaskRetries: string;

		/**
		 * Required
		 * Type: double
		 */
		readIOGiB: number;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		readIOps: string;

		/** Required */
		startTime: Date;

		/** Required */
		url: string;

		/** Required */
		userCPUTime: string;

		/**
		 * This value is only reported in the account lifetime statistics; it is not included in the job statistics.
		 * Required
		 */
		waitTime: string;

		/**
		 * The wall clock time is the elapsed time from when the task started running on a compute node to when it finished (or to the last time the statistics were updated, if the task had not finished by then). If a task was retried, this includes the wall clock time of all the task retries.
		 * Required
		 */
		wallClockTime: string;

		/**
		 * Required
		 * Type: double
		 */
		writeIOGiB: number;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		writeIOps: string;
	}
	export interface JobScheduleStatisticsFormProperties {

		/** Required */
		kernelCPUTime: FormControl<string | null | undefined>,

		/** Required */
		lastUpdateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		numFailedTasks: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		numSucceededTasks: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		numTaskRetries: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		readIOGiB: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		readIOps: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,

		/** Required */
		userCPUTime: FormControl<string | null | undefined>,

		/**
		 * This value is only reported in the account lifetime statistics; it is not included in the job statistics.
		 * Required
		 */
		waitTime: FormControl<string | null | undefined>,

		/**
		 * The wall clock time is the elapsed time from when the task started running on a compute node to when it finished (or to the last time the statistics were updated, if the task had not finished by then). If a task was retried, this includes the wall clock time of all the task retries.
		 * Required
		 */
		wallClockTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		writeIOGiB: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		writeIOps: FormControl<string | null | undefined>,
	}
	export function CreateJobScheduleStatisticsFormGroup() {
		return new FormGroup<JobScheduleStatisticsFormProperties>({
			kernelCPUTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			numFailedTasks: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numSucceededTasks: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numTaskRetries: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			readIOGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			readIOps: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userCPUTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			waitTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wallClockTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			writeIOGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			writeIOps: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Individual tasks can override an environment setting specified here by specifying the same setting name with a different value. */
		commonEnvironmentSettings?: Array<EnvironmentSetting>;
		constraints?: JobConstraints;

		/** The name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName?: string | null;

		/** The Job Manager task is automatically started when the job is created. The Batch service tries to schedule the Job Manager task before any other tasks in the job. When shrinking a pool, the Batch service tries to preserve compute nodes where Job Manager tasks are running for as long as possible (that is, nodes running 'normal' tasks are removed before nodes running Job Manager tasks). When a Job Manager task fails and needs to be restarted, the system tries to schedule it at the highest priority. If there are no idle nodes available, the system may terminate one of the running tasks in the pool and return it to the queue in order to make room for the Job Manager task to restart. Note that a Job Manager task in one job does not have priority over tasks in other jobs. Across jobs, only job level priorities are observed. For example, if a Job Manager in a priority 0 job needs to be restarted, it will not displace tasks of a priority 1 job. */
		jobManagerTask?: JobManagerTask;

		/** You can use Job Preparation to prepare a compute node to run tasks for the job. Activities commonly performed in Job Preparation include: Downloading common resource files used by all the tasks in the job. The Job Preparation task can download these common resource files to the shared location on the compute node. (AZ_BATCH_NODE_ROOT_DIR\shared), or starting a local service on the compute node so that all tasks of that job can communicate with it. If the Job Preparation task fails (that is, exhausts its retry count before exiting with exit code 0), Batch will not run tasks of this job on the compute node. The node remains ineligible to run tasks of this job until it is reimaged. The node remains active and can be used for other jobs. The Job Preparation task can run multiple times on the same compute node. Therefore, you should write the Job Preparation task to handle re-execution. If the compute node is rebooted, the Job Preparation task is run again on the node before scheduling any other task of the job, if rerunOnNodeRebootAfterSuccess is true or if the Job Preparation task did not previously complete. If the compute node is reimaged, the Job Preparation task is run again before scheduling any task of the job. */
		jobPreparationTask?: JobPreparationTask;

		/** The Job Release task runs when the job ends, because of one of the following: The user calls the Terminate Job API, or the Delete Job API while the job is still active, the job's maximum wall clock time constraint is reached, and the job is still active, or the job's Job Manager task completed, and the job is configured to terminate when the Job Manager completes. The Job Release task runs on each compute node where tasks of the job have run and the Job Preparation task ran and completed. If you reimage a compute node after it has run the Job Preparation task, and the job ends without any further tasks of the job running on that compute node (and hence the Job Preparation task does not re-run), then the Job Release task does not run on that node. If a compute node reboots while the Job Release task is still running, the Job Release task runs again when the compute node starts up. The job is not marked as complete until all Job Release tasks have completed. The Job Release task runs in the background. It does not occupy a scheduling slot; that is, it does not count towards the maxTasksPerNode limit specified on the pool. */
		jobReleaseTask?: JobReleaseTask;

		/** The Batch service does not assign any meaning to metadata; it is solely for the use of user code. */
		metadata?: Array<MetadataItem>;
		onAllTasksComplete?: CloudJobOnAllTasksComplete | null;

		/** A task is considered to have failed if has a failureInfo. A failureInfo is set if the task completes with a non-zero exit code after exhausting its retry count, or if there was an error starting the task, for example due to a resource file download error. The default is noaction. */
		onTaskFailure?: CloudJobOnTaskFailure | null;

		/** Required */
		poolInfo: PoolInformation;

		/**
		 * Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. This priority is used as the default for all jobs under the job schedule. You can update a job's priority after it has been created using by using the update job API.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority?: number | null;
		usesTaskDependencies?: boolean | null;
	}
	export interface JobSpecificationFormProperties {

		/** The name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName: FormControl<string | null | undefined>,
		onAllTasksComplete: FormControl<CloudJobOnAllTasksComplete | null | undefined>,

		/** A task is considered to have failed if has a failureInfo. A failureInfo is set if the task completes with a non-zero exit code after exhausting its retry count, or if there was an error starting the task, for example due to a resource file download error. The default is noaction. */
		onTaskFailure: FormControl<CloudJobOnTaskFailure | null | undefined>,

		/**
		 * Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. This priority is used as the default for all jobs under the job schedule. You can update a job's priority after it has been created using by using the update job API.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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
		 * A task fails if it exhausts its maximum retry count without returning exit code 0.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		numFailedTasks: string;

		/**
		 * A task completes successfully if it returns exit code 0.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		numSucceededTasks: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		numTaskRetries: string;

		/**
		 * Required
		 * Type: double
		 */
		readIOGiB: number;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		readIOps: string;

		/** Required */
		startTime: Date;

		/** Required */
		url: string;

		/** Required */
		userCPUTime: string;

		/**
		 * The wait time for a task is defined as the elapsed time between the creation of the task and the start of task execution. (If the task is retried due to failures, the wait time is the time to the most recent task execution.) This value is only reported in the account lifetime statistics; it is not included in the job statistics.
		 * Required
		 */
		waitTime: string;

		/**
		 * The wall clock time is the elapsed time from when the task started running on a compute node to when it finished (or to the last time the statistics were updated, if the task had not finished by then). If a task was retried, this includes the wall clock time of all the task retries.
		 * Required
		 */
		wallClockTime: string;

		/**
		 * Required
		 * Type: double
		 */
		writeIOGiB: number;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		writeIOps: string;
	}
	export interface JobStatisticsFormProperties {

		/** Required */
		kernelCPUTime: FormControl<string | null | undefined>,

		/** Required */
		lastUpdateTime: FormControl<Date | null | undefined>,

		/**
		 * A task fails if it exhausts its maximum retry count without returning exit code 0.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		numFailedTasks: FormControl<string | null | undefined>,

		/**
		 * A task completes successfully if it returns exit code 0.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		numSucceededTasks: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		numTaskRetries: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		readIOGiB: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		readIOps: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,

		/** Required */
		userCPUTime: FormControl<string | null | undefined>,

		/**
		 * The wait time for a task is defined as the elapsed time between the creation of the task and the start of task execution. (If the task is retried due to failures, the wait time is the time to the most recent task execution.) This value is only reported in the account lifetime statistics; it is not included in the job statistics.
		 * Required
		 */
		waitTime: FormControl<string | null | undefined>,

		/**
		 * The wall clock time is the elapsed time from when the task started running on a compute node to when it finished (or to the last time the statistics were updated, if the task had not finished by then). If a task was retried, this includes the wall clock time of all the task retries.
		 * Required
		 */
		wallClockTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		writeIOGiB: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		writeIOps: FormControl<string | null | undefined>,
	}
	export function CreateJobStatisticsFormGroup() {
		return new FormGroup<JobStatisticsFormProperties>({
			kernelCPUTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			numFailedTasks: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numSucceededTasks: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numTaskRetries: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			readIOGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			readIOps: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userCPUTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			waitTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wallClockTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			writeIOGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			writeIOps: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/**
		 * Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, it is set to the default value 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority?: number | null;
	}
	export interface JobUpdateParameterFormProperties {
		onAllTasksComplete: FormControl<CloudJobOnAllTasksComplete | null | undefined>,

		/**
		 * Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, it is set to the default value 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateJobUpdateParameterFormGroup() {
		return new FormGroup<JobUpdateParameterFormProperties>({
			onAllTasksComplete: new FormControl<CloudJobOnAllTasksComplete | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LinuxUserConfiguration {

		/**
		 * The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the gid.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gid?: number | null;

		/** The private key must not be password protected. The private key is used to automatically configure asymmetric-key based authentication for SSH between nodes in a Linux pool when the pool's enableInterNodeCommunication property is true (it is ignored if enableInterNodeCommunication is false). It does this by placing the key pair into the user's .ssh directory. If not specified, password-less SSH is not configured between nodes (no modification of the user's .ssh directory is done). */
		sshPrivateKey?: string | null;

		/**
		 * The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the uid.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		uid?: number | null;
	}
	export interface LinuxUserConfigurationFormProperties {

		/**
		 * The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the gid.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gid: FormControl<number | null | undefined>,

		/** The private key must not be password protected. The private key is used to automatically configure asymmetric-key based authentication for SSH between nodes in a Linux pool when the pool's enableInterNodeCommunication property is true (it is ignored if enableInterNodeCommunication is false). It does this by placing the key pair into the user's .ssh directory. If not specified, password-less SSH is not configured between nodes (no modification of the user's .ssh directory is done). */
		sshPrivateKey: FormControl<string | null | undefined>,

		/**
		 * The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the uid.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		uid: FormControl<number | null | undefined>,
	}
	export function CreateLinuxUserConfigurationFormGroup() {
		return new FormGroup<LinuxUserConfigurationFormProperties>({
			gid: new FormControl<number | null | undefined>(undefined),
			sshPrivateKey: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Multi-instance tasks are commonly used to support MPI tasks. */
	export interface MultiInstanceSettings {

		/** The difference between common resource files and task resource files is that common resource files are downloaded for all subtasks including the primary, whereas task resource files are downloaded only for the primary. Also note that these resource files are not downloaded to the task working directory, but instead are downloaded to the task root directory (one directory above the working directory). */
		commonResourceFiles?: Array<ResourceFile>;

		/**
		 * A typical coordination command line launches a background service and verifies that the service is ready to process inter-node messages.
		 * Required
		 */
		coordinationCommandLine: string;

		/**
		 * If omitted, the default is 1.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfInstances?: number | null;
	}

	/** Multi-instance tasks are commonly used to support MPI tasks. */
	export interface MultiInstanceSettingsFormProperties {

		/**
		 * A typical coordination command line launches a background service and verifies that the service is ready to process inter-node messages.
		 * Required
		 */
		coordinationCommandLine: FormControl<string | null | undefined>,

		/**
		 * If omitted, the default is 1.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfInstances: FormControl<number | null | undefined>,
	}
	export function CreateMultiInstanceSettingsFormGroup() {
		return new FormGroup<MultiInstanceSettingsFormProperties>({
			coordinationCommandLine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numberOfInstances: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The network configuration for a pool. */
	export interface NetworkConfiguration {
		endpointConfiguration?: PoolEndpointConfiguration;

		/** The virtual network must be in the same region and subscription as the Azure Batch account. The specified subnet should have enough free IP addresses to accommodate the number of nodes in the pool. If the subnet doesn't have enough free IP addresses, the pool will partially allocate compute nodes, and a resize error will occur. The 'MicrosoftAzureBatch' service principal must have the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role for the specified VNet. The specified subnet must allow communication from the Azure Batch service to be able to schedule tasks on the compute nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the compute nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the compute nodes to unusable. For pools created with virtualMachineConfiguration only ARM virtual networks ('Microsoft.Network/virtualNetworks') are supported, but for pools created with cloudServiceConfiguration both ARM and classic virtual networks are supported. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication. For pools created with a virtual machine configuration, enable ports 29876 and 29877, as well as port 22 for Linux and port 3389 for Windows. For pools created with a cloud service configuration, enable ports 10100, 20100, and 30100. Also enable outbound connections to Azure Storage on port 443. For more details see: https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration */
		subnetId?: string | null;
	}

	/** The network configuration for a pool. */
	export interface NetworkConfigurationFormProperties {

		/** The virtual network must be in the same region and subscription as the Azure Batch account. The specified subnet should have enough free IP addresses to accommodate the number of nodes in the pool. If the subnet doesn't have enough free IP addresses, the pool will partially allocate compute nodes, and a resize error will occur. The 'MicrosoftAzureBatch' service principal must have the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role for the specified VNet. The specified subnet must allow communication from the Azure Batch service to be able to schedule tasks on the compute nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the compute nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the compute nodes to unusable. For pools created with virtualMachineConfiguration only ARM virtual networks ('Microsoft.Network/virtualNetworks') are supported, but for pools created with cloudServiceConfiguration both ARM and classic virtual networks are supported. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication. For pools created with a virtual machine configuration, enable ports 29876 and 29877, as well as port 22 for Linux and port 3389 for Windows. For pools created with a cloud service configuration, enable ports 10100, 20100, and 30100. Also enable outbound connections to Azure Storage on port 443. For more details see: https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration */
		subnetId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkConfigurationFormGroup() {
		return new FormGroup<NetworkConfigurationFormProperties>({
			subnetId: new FormControl<string | null | undefined>(undefined),
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

		/** If omitted, the default is 1 day from the current time. For Linux compute nodes, the expiryTime has a precision up to a day. */
		expiryTime?: Date | null;

		/** The password is required for Windows nodes (those created with 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration' using a Windows image reference). For Linux compute nodes, the password can optionally be specified along with the sshPublicKey property. If omitted, any existing password is removed. */
		password?: string | null;

		/** The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux nodes. If this is specified for a Windows node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). If omitted, any existing SSH public key is removed. */
		sshPublicKey?: string | null;
	}
	export interface NodeUpdateUserParameterFormProperties {

		/** If omitted, the default is 1 day from the current time. For Linux compute nodes, the expiryTime has a precision up to a day. */
		expiryTime: FormControl<Date | null | undefined>,

		/** The password is required for Windows nodes (those created with 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration' using a Windows image reference). For Linux compute nodes, the password can optionally be specified along with the sshPublicKey property. If omitted, any existing password is removed. */
		password: FormControl<string | null | undefined>,

		/** The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux nodes. If this is specified for a Windows node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). If omitted, any existing SSH public key is removed. */
		sshPublicKey: FormControl<string | null | undefined>,
	}
	export function CreateNodeUpdateUserParameterFormGroup() {
		return new FormGroup<NodeUpdateUserParameterFormProperties>({
			expiryTime: new FormControl<Date | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			sshPublicKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OSDisk {

		/** The default value for caching is none. For information about the caching options see: https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/. */
		caching?: CachingType | null;
	}
	export interface OSDiskFormProperties {

		/** The default value for caching is none. For information about the caching options see: https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/. */
		caching: FormControl<CachingType | null | undefined>,
	}
	export function CreateOSDiskFormGroup() {
		return new FormGroup<OSDiskFormProperties>({
			caching: new FormControl<CachingType | null | undefined>(undefined),
		});

	}

	export enum OnAllTasksComplete { noaction = 'noaction', terminatejob = 'terminatejob' }


	/** A task is considered to have failed if has a failureInfo. A failureInfo is set if the task completes with a non-zero exit code after exhausting its retry count, or if there was an error starting the task, for example due to a resource file download error. The default is noaction. */
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

		/** The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, pool creation will fail. */
		applicationLicenses?: Array<string>;
		applicationPackageReferences?: Array<ApplicationPackageReference>;

		/** The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		autoScaleEvaluationInterval?: string | null;

		/** This property must not be specified if enableAutoScale is set to false. It is required if enableAutoScale is set to true. The formula is checked for validity before the pool is created. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see 'Automatically scale compute nodes in an Azure Batch pool' (https://azure.microsoft.com/documentation/articles/batch-automatic-scaling/). */
		autoScaleFormula?: string | null;

		/** For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory. */
		certificateReferences?: Array<CertificateReference>;
		cloudServiceConfiguration?: CloudServiceConfiguration;

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName?: string | null;

		/** If false, at least one of targetDedicateNodes and targetLowPriorityNodes must be specified. If true, the autoScaleFormula property is required and the pool automatically resizes according to the formula. The default value is false. */
		enableAutoScale?: boolean | null;

		/** Enabling inter-node communication limits the maximum size of the pool due to deployment restrictions on the nodes of the pool. This may result in the pool not reaching its desired size. The default value is false. */
		enableInterNodeCommunication?: boolean | null;

		/**
		 * The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two pool IDs within an account that differ only by case).
		 * Required
		 */
		id: string;

		/**
		 * The default value is 1. The maximum value of this setting depends on the size of the compute nodes in the pool (the vmSize setting).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxTasksPerNode?: number | null;

		/** The Batch service does not assign any meaning to metadata; it is solely for the use of user code. */
		metadata?: Array<MetadataItem>;

		/** The network configuration for a pool. */
		networkConfiguration?: NetworkConfiguration;

		/** This timeout applies only to manual scaling; it has no effect when enableAutoScale is set to true. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		resizeTimeout?: string | null;
		startTask?: StartTask;

		/**
		 * This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetDedicatedNodes?: number | null;

		/**
		 * This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetLowPriorityNodes?: number | null;
		taskSchedulingPolicy?: TaskSchedulingPolicy;
		userAccounts?: Array<UserAccount>;
		virtualMachineConfiguration?: VirtualMachineConfiguration;

		/**
		 * For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
		 * Required
		 */
		vmSize: string;
	}
	export interface PoolAddParameterFormProperties {

		/** The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		autoScaleEvaluationInterval: FormControl<string | null | undefined>,

		/** This property must not be specified if enableAutoScale is set to false. It is required if enableAutoScale is set to true. The formula is checked for validity before the pool is created. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see 'Automatically scale compute nodes in an Azure Batch pool' (https://azure.microsoft.com/documentation/articles/batch-automatic-scaling/). */
		autoScaleFormula: FormControl<string | null | undefined>,

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName: FormControl<string | null | undefined>,

		/** If false, at least one of targetDedicateNodes and targetLowPriorityNodes must be specified. If true, the autoScaleFormula property is required and the pool automatically resizes according to the formula. The default value is false. */
		enableAutoScale: FormControl<boolean | null | undefined>,

		/** Enabling inter-node communication limits the maximum size of the pool due to deployment restrictions on the nodes of the pool. This may result in the pool not reaching its desired size. The default value is false. */
		enableInterNodeCommunication: FormControl<boolean | null | undefined>,

		/**
		 * The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two pool IDs within an account that differ only by case).
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The default value is 1. The maximum value of this setting depends on the size of the compute nodes in the pool (the vmSize setting).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxTasksPerNode: FormControl<number | null | undefined>,

		/** This timeout applies only to manual scaling; it has no effect when enableAutoScale is set to true. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		resizeTimeout: FormControl<string | null | undefined>,

		/**
		 * This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetDedicatedNodes: FormControl<number | null | undefined>,

		/**
		 * This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetLowPriorityNodes: FormControl<number | null | undefined>,

		/**
		 * For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
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

		/** The formula is checked for validity before it is applied to the pool. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see Automatically scale compute nodes in an Azure Batch pool (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling). */
		autoScaleFormula?: string | null;
	}
	export interface PoolEnableAutoScaleParameterFormProperties {

		/** The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service rejects the request with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). If you specify a new interval, then the existing autoscale evaluation schedule will be stopped and a new autoscale evaluation schedule will be started, with its starting time being the time when this request was issued. */
		autoScaleEvaluationInterval: FormControl<string | null | undefined>,

		/** The formula is checked for validity before it is applied to the pool. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see Automatically scale compute nodes in an Azure Batch pool (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling). */
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
		 * The maximum number of inbound NAT pools per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded the request fails with HTTP status code 400.
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
		 * The formula is validated and its results calculated, but it is not applied to the pool. To apply the formula to the pool, 'Enable automatic scaling on a pool'. For more information about specifying this formula, see Automatically scale compute nodes in an Azure Batch pool (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling).
		 * Required
		 */
		autoScaleFormula: string;
	}
	export interface PoolEvaluateAutoScaleParameterFormProperties {

		/**
		 * The formula is validated and its results calculated, but it is not applied to the pool. To apply the formula to the pool, 'Enable automatic scaling on a pool'. For more information about specifying this formula, see Automatically scale compute nodes in an Azure Batch pool (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling).
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

		/** You must ensure that the pool referenced by this property exists. If the pool does not exist at the time the Batch service tries to schedule a job, no tasks for the job will run until you create a pool with that id. Note that the Batch service will not reject the job request; it will simply not run tasks until the pool exists. You must specify either the pool ID or the auto pool specification, but not both. */
		poolId?: string | null;
	}
	export interface PoolInformationFormProperties {

		/** You must ensure that the pool referenced by this property exists. If the pool does not exist at the time the Batch service tries to schedule a job, no tasks for the job will run until you create a pool with that id. Note that the Batch service will not reject the job request; it will simply not run tasks until the pool exists. You must specify either the pool ID or the auto pool specification, but not both. */
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

		/**
		 * Required
		 * Type: double
		 */
		dataEgressGiB: number;

		/**
		 * Required
		 * Type: double
		 */
		dataIngressGiB: number;

		/** Required */
		endTime: Date;

		/** Required */
		poolId: string;

		/** Required */
		startTime: Date;

		/**
		 * Required
		 * Type: double
		 */
		totalCoreHours: number;

		/**
		 * For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall, STANDARD_A1_V2 and STANDARD_A2_V2. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
		 * Required
		 */
		vmSize: string;
	}
	export interface PoolUsageMetricsFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		dataEgressGiB: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		dataIngressGiB: FormControl<number | null | undefined>,

		/** Required */
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		poolId: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		totalCoreHours: FormControl<number | null | undefined>,

		/**
		 * For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall, STANDARD_A1_V2 and STANDARD_A2_V2. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
		 * Required
		 */
		vmSize: FormControl<string | null | undefined>,
	}
	export function CreatePoolUsageMetricsFormGroup() {
		return new FormGroup<PoolUsageMetricsFormProperties>({
			dataEgressGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dataIngressGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			poolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			totalCoreHours: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			vmSize: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PoolPatchParameter {

		/** Changes to application package references affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. If this element is present, it replaces any existing application package references. If you specify an empty collection, then all application package references are removed from the pool. If omitted, any existing application package references are left unchanged. */
		applicationPackageReferences?: Array<ApplicationPackageReference>;

		/** If this element is present, it replaces any existing certificate references configured on the pool. If omitted, any existing certificate references are left unchanged. For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory. */
		certificateReferences?: Array<CertificateReference>;

		/** If this element is present, it replaces any existing metadata configured on the pool. If you specify an empty collection, any metadata is removed from the pool. If omitted, any existing metadata is left unchanged. */
		metadata?: Array<MetadataItem>;
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		targetDedicatedNodes?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		targetLowPriorityNodes?: number | null;
	}
	export interface PoolResizeParameterFormProperties {

		/** The default value is requeue. */
		nodeDeallocationOption: FormControl<ComputeNodeDeallocationOption | null | undefined>,

		/** The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		resizeTimeout: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		targetDedicatedNodes: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, pool creation will fail. */
		applicationLicenses?: Array<string>;
		applicationPackageReferences?: Array<ApplicationPackageReference>;

		/** The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service rejects the request with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		autoScaleEvaluationInterval?: string | null;

		/** This property must not be specified if enableAutoScale is set to false. It is required if enableAutoScale is set to true. The formula is checked for validity before the pool is created. If the formula is not valid, the Batch service rejects the request with detailed error information. */
		autoScaleFormula?: string | null;

		/** For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory. */
		certificateReferences?: Array<CertificateReference>;
		cloudServiceConfiguration?: CloudServiceConfiguration;

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName?: string | null;

		/** If false, at least one of targetDedicateNodes and targetLowPriorityNodes must be specified. If true, the autoScaleFormula element is required. The pool automatically resizes according to the formula. The default value is false. */
		enableAutoScale?: boolean | null;

		/** Enabling inter-node communication limits the maximum size of the pool due to deployment restrictions on the nodes of the pool. This may result in the pool not reaching its desired size. The default value is false. */
		enableInterNodeCommunication?: boolean | null;

		/**
		 * The default value is 1. The maximum value of this setting depends on the size of the compute nodes in the pool (the vmSize setting).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxTasksPerNode?: number | null;

		/** The Batch service does not assign any meaning to metadata; it is solely for the use of user code. */
		metadata?: Array<MetadataItem>;

		/** The network configuration for a pool. */
		networkConfiguration?: NetworkConfiguration;

		/** This timeout applies only to manual scaling; it has no effect when enableAutoScale is set to true. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service rejects the request with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		resizeTimeout?: string | null;
		startTask?: StartTask;

		/**
		 * This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetDedicatedNodes?: number | null;

		/**
		 * This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetLowPriorityNodes?: number | null;
		taskSchedulingPolicy?: TaskSchedulingPolicy;
		userAccounts?: Array<UserAccount>;
		virtualMachineConfiguration?: VirtualMachineConfiguration;

		/**
		 * For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
		 * Required
		 */
		vmSize: string;
	}
	export interface PoolSpecificationFormProperties {

		/** The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service rejects the request with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		autoScaleEvaluationInterval: FormControl<string | null | undefined>,

		/** This property must not be specified if enableAutoScale is set to false. It is required if enableAutoScale is set to true. The formula is checked for validity before the pool is created. If the formula is not valid, the Batch service rejects the request with detailed error information. */
		autoScaleFormula: FormControl<string | null | undefined>,

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName: FormControl<string | null | undefined>,

		/** If false, at least one of targetDedicateNodes and targetLowPriorityNodes must be specified. If true, the autoScaleFormula element is required. The pool automatically resizes according to the formula. The default value is false. */
		enableAutoScale: FormControl<boolean | null | undefined>,

		/** Enabling inter-node communication limits the maximum size of the pool due to deployment restrictions on the nodes of the pool. This may result in the pool not reaching its desired size. The default value is false. */
		enableInterNodeCommunication: FormControl<boolean | null | undefined>,

		/**
		 * The default value is 1. The maximum value of this setting depends on the size of the compute nodes in the pool (the vmSize setting).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxTasksPerNode: FormControl<number | null | undefined>,

		/** This timeout applies only to manual scaling; it has no effect when enableAutoScale is set to true. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service rejects the request with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		resizeTimeout: FormControl<string | null | undefined>,

		/**
		 * This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetDedicatedNodes: FormControl<number | null | undefined>,

		/**
		 * This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetLowPriorityNodes: FormControl<number | null | undefined>,

		/**
		 * For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (http://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
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
		 * The list replaces any existing application package references on the pool. Changes to application package references affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. If omitted, or if you specify an empty collection, any existing application packages references are removed from the pool.
		 * Required
		 */
		applicationPackageReferences: Array<ApplicationPackageReference>;

		/**
		 * This list replaces any existing certificate references configured on the pool. If you specify an empty collection, any existing certificate references are removed from the pool. For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory.
		 * Required
		 */
		certificateReferences: Array<CertificateReference>;

		/**
		 * This list replaces any existing metadata configured on the pool. If omitted, or if you specify an empty collection, any existing metadata is removed from the pool.
		 * Required
		 */
		metadata: Array<MetadataItem>;
		startTask?: StartTask;
	}
	export interface PoolUpdatePropertiesParameterFormProperties {
	}
	export function CreatePoolUpdatePropertiesParameterFormGroup() {
		return new FormGroup<PoolUpdatePropertiesParameterFormProperties>({
		});

	}

	export interface PoolUpgradeOSParameter {

		/** Required */
		targetOSVersion: string;
	}
	export interface PoolUpgradeOSParameterFormProperties {

		/** Required */
		targetOSVersion: FormControl<string | null | undefined>,
	}
	export function CreatePoolUpgradeOSParameterFormGroup() {
		return new FormGroup<PoolUpgradeOSParameterFormProperties>({
			targetOSVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/**
		 * Required
		 * Type: double
		 */
		avgCPUPercentage: number;

		/**
		 * Required
		 * Type: double
		 */
		avgDiskGiB: number;

		/**
		 * Required
		 * Type: double
		 */
		avgMemoryGiB: number;

		/**
		 * Required
		 * Type: double
		 */
		diskReadGiB: number;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		diskReadIOps: string;

		/**
		 * Required
		 * Type: double
		 */
		diskWriteGiB: number;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		diskWriteIOps: string;

		/** Required */
		lastUpdateTime: Date;

		/**
		 * Required
		 * Type: double
		 */
		networkReadGiB: number;

		/**
		 * Required
		 * Type: double
		 */
		networkWriteGiB: number;

		/**
		 * Required
		 * Type: double
		 */
		peakDiskGiB: number;

		/**
		 * Required
		 * Type: double
		 */
		peakMemoryGiB: number;

		/** Required */
		startTime: Date;
	}
	export interface ResourceStatisticsFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		avgCPUPercentage: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		avgDiskGiB: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		avgMemoryGiB: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		diskReadGiB: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		diskReadIOps: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		diskWriteGiB: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		diskWriteIOps: FormControl<string | null | undefined>,

		/** Required */
		lastUpdateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		networkReadGiB: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		networkWriteGiB: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		peakDiskGiB: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
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
			diskReadIOps: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			diskWriteGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			diskWriteIOps: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			networkReadGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			networkWriteGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			peakDiskGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			peakMemoryGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Schedule {

		/** If you do not specify a doNotRunAfter time, and you are creating a recurring job schedule, the job schedule will remain active until you explicitly terminate it. */
		doNotRunAfter?: Date | null;

		/** If you do not specify a doNotRunUntil time, the schedule becomes ready to create jobs immediately. */
		doNotRunUntil?: Date | null;

		/** Because a job schedule can have at most one active job under it at any given time, if it is time to create a new job under a job schedule, but the previous job is still running, the Batch service will not create the new job until the previous job finishes. If the previous job does not finish within the startWindow period of the new recurrenceInterval, then no new job will be scheduled for that interval. For recurring jobs, you should normally specify a jobManagerTask in the jobSpecification. If you do not use jobManagerTask, you will need an external process to monitor when jobs are created, add tasks to the jobs and terminate the jobs ready for the next recurrence. The default is that the schedule does not recur: one job is created, within the startWindow after the doNotRunUntil time, and the schedule is complete as soon as that job finishes. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		recurrenceInterval?: string | null;

		/** If a job is not created within the startWindow interval, then the 'opportunity' is lost; no job will be created until the next recurrence of the schedule. If the schedule is recurring, and the startWindow is longer than the recurrence interval, then this is equivalent to an infinite startWindow, because the job that is 'due' in one recurrenceInterval is not carried forward into the next recurrence interval. The default is infinite. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		startWindow?: string | null;
	}
	export interface ScheduleFormProperties {

		/** If you do not specify a doNotRunAfter time, and you are creating a recurring job schedule, the job schedule will remain active until you explicitly terminate it. */
		doNotRunAfter: FormControl<Date | null | undefined>,

		/** If you do not specify a doNotRunUntil time, the schedule becomes ready to create jobs immediately. */
		doNotRunUntil: FormControl<Date | null | undefined>,

		/** Because a job schedule can have at most one active job under it at any given time, if it is time to create a new job under a job schedule, but the previous job is still running, the Batch service will not create the new job until the previous job finishes. If the previous job does not finish within the startWindow period of the new recurrenceInterval, then no new job will be scheduled for that interval. For recurring jobs, you should normally specify a jobManagerTask in the jobSpecification. If you do not use jobManagerTask, you will need an external process to monitor when jobs are created, add tasks to the jobs and terminate the jobs ready for the next recurrence. The default is that the schedule does not recur: one job is created, within the startWindow after the doNotRunUntil time, and the schedule is complete as soon as that job finishes. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		recurrenceInterval: FormControl<string | null | undefined>,

		/** If a job is not created within the startWindow interval, then the 'opportunity' is lost; no job will be created until the next recurrence of the schedule. If the schedule is recurring, and the startWindow is longer than the recurrence interval, then this is equivalent to an infinite startWindow, because the job that is 'due' in one recurrenceInterval is not carried forward into the next recurrence interval. The default is infinite. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
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

	export interface StartTask {

		/**
		 * The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
		 * Required
		 */
		commandLine: string;
		containerSettings?: TaskContainerSettings;
		environmentSettings?: Array<EnvironmentSetting>;

		/**
		 * The Batch service retries a task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the task. If the maximum retry count is -1, the Batch service retries the task without limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxTaskRetryCount?: number | null;

		/** Files listed under this element are located in the task's working directory. */
		resourceFiles?: Array<ResourceFile>;

		/** Specify either the userName or autoUser property, but not both. */
		userIdentity?: UserIdentity;

		/** If true and the start task fails on a compute node, the Batch service retries the start task up to its maximum retry count (maxTaskRetryCount). If the task has still not completed successfully after all retries, then the Batch service marks the compute node unusable, and will not schedule tasks to it. This condition can be detected via the node state and failure info details. If false, the Batch service will not wait for the start task to complete. In this case, other tasks can start executing on the compute node while the start task is still running; and even if the start task fails, new tasks will continue to be scheduled on the node. The default is false. */
		waitForSuccess?: boolean | null;
	}
	export interface StartTaskFormProperties {

		/**
		 * The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
		 * Required
		 */
		commandLine: FormControl<string | null | undefined>,

		/**
		 * The Batch service retries a task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the task. If the maximum retry count is -1, the Batch service retries the task without limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxTaskRetryCount: FormControl<number | null | undefined>,

		/** If true and the start task fails on a compute node, the Batch service retries the start task up to its maximum retry count (maxTaskRetryCount). If the task has still not completed successfully after all retries, then the Batch service marks the compute node unusable, and will not schedule tasks to it. This condition can be detected via the node state and failure info details. If false, the Batch service will not wait for the start task to complete. In this case, other tasks can start executing on the compute node while the start task is still running; and even if the start task fails, new tasks will continue to be scheduled on the node. The default is false. */
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

		/** This is the end time of the most recent run of the start task, if that run has completed (even if that run failed and a retry is pending). This element is not present if the start task is currently running. */
		endTime?: Date | null;

		/**
		 * This property is set only if the start task is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the start task (due to timeout, or user termination via the API) you may see an operating system-defined exit code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exitCode?: number | null;
		failureInfo?: TaskFailureInformation;

		/** This element is present only if the task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the task has been restarted for reasons other than retry; for example, if the compute node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not. */
		lastRetryTime?: Date | null;
		result?: SubtaskInformationResult | null;

		/**
		 * Task application failures (non-zero exit code) are retried, pre-processing errors (the task could not be run) and file upload errors are not retried. The Batch service will retry the task up to the limit specified by the constraints.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retryCount: number;

		/**
		 * This value is reset every time the task is restarted or retried (that is, this is the most recent time at which the start task started running).
		 * Required
		 */
		startTime: Date;

		/** Required */
		state: JobPreparationTaskExecutionInformationState;
	}
	export interface StartTaskInformationFormProperties {

		/** This is the end time of the most recent run of the start task, if that run has completed (even if that run failed and a retry is pending). This element is not present if the start task is currently running. */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * This property is set only if the start task is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the start task (due to timeout, or user termination via the API) you may see an operating system-defined exit code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exitCode: FormControl<number | null | undefined>,

		/** This element is present only if the task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the task has been restarted for reasons other than retry; for example, if the compute node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not. */
		lastRetryTime: FormControl<Date | null | undefined>,
		result: FormControl<SubtaskInformationResult | null | undefined>,

		/**
		 * Task application failures (non-zero exit code) are retried, pre-processing errors (the task could not be run) and file upload errors are not retried. The Batch service will retry the task up to the limit specified by the constraints.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retryCount: FormControl<number | null | undefined>,

		/**
		 * This value is reset every time the task is restarted or retried (that is, this is the most recent time at which the start task started running).
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
		 * The total serialized size of this collection must be less than 4MB. If it is greater than 4MB (for example if each task has 100's of resource files or environment variables), the request will fail with code 'RequestBodyTooLarge' and should be retried again with fewer tasks.
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

	export interface TaskAddParameter {
		affinityInfo?: AffinityInformation;

		/** Application packages are downloaded and deployed to a shared directory, not the task working directory. Therefore, if a referenced package is already on the compute node, and is up to date, then it is not re-downloaded; the existing copy on the compute node is used. If a referenced application package cannot be installed, for example because the package has been deleted or because download failed, the task fails. */
		applicationPackageReferences?: Array<ApplicationPackageReference>;
		authenticationTokenSettings?: AuthenticationTokenSettings;

		/**
		 * For multi-instance tasks, the command line is executed as the primary task, after the primary task and all subtasks have finished executing the coordination command line. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
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
		 * The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within a job that differ only by case).
		 * Required
		 */
		id: string;

		/** Multi-instance tasks are commonly used to support MPI tasks. */
		multiInstanceSettings?: MultiInstanceSettings;

		/** For multi-instance tasks, the files will only be uploaded from the compute node on which the primary task is executed. */
		outputFiles?: Array<OutputFile>;

		/** For multi-instance tasks, the resource files will only be downloaded to the compute node on which the primary task is executed. */
		resourceFiles?: Array<ResourceFile>;

		/** Specify either the userName or autoUser property, but not both. */
		userIdentity?: UserIdentity;
	}
	export interface TaskAddParameterFormProperties {

		/**
		 * For multi-instance tasks, the command line is executed as the primary task, after the primary task and all subtasks have finished executing the coordination command line. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux.
		 * Required
		 */
		commandLine: FormControl<string | null | undefined>,

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within a job that differ only by case).
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

		/** You can use this to detect whether the task has changed between requests. In particular, you can be pass the ETag with an Update Task request to specify that your changes should take effect only if nobody else has modified the job in the meantime. */
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

		/** You can use this to detect whether the task has changed between requests. In particular, you can be pass the ETag with an Update Task request to specify that your changes should take effect only if nobody else has modified the job in the meantime. */
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

		/**
		 * Note that this value specifically controls the number of retries. The Batch service will try the task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the task. If the maximum retry count is -1, the Batch service retries the task without limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxTaskRetryCount?: number | null;

		/** If this is not specified, there is no time limit on how long the task may run. */
		maxWallClockTime?: string | null;

		/** The default is infinite, i.e. the task directory will be retained until the compute node is removed or reimaged. */
		retentionTime?: string | null;
	}
	export interface TaskConstraintsFormProperties {

		/**
		 * Note that this value specifically controls the number of retries. The Batch service will try the task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the task. If the maximum retry count is -1, the Batch service retries the task without limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxTaskRetryCount: FormControl<number | null | undefined>,

		/** If this is not specified, there is no time limit on how long the task may run. */
		maxWallClockTime: FormControl<string | null | undefined>,

		/** The default is infinite, i.e. the task directory will be retained until the compute node is removed or reimaged. */
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
		 * This is the full image reference, as would be specified to "docker pull". If no tag is provided as part of the image name, the tag ":latest" is used as a default.
		 * Required
		 */
		imageName: string;
		registry?: ContainerRegistry;
	}
	export interface TaskContainerSettingsFormProperties {

		/** These additional options are supplied as arguments to the "docker create" command, in addition to those controlled by the Batch Service. */
		containerRunOptions: FormControl<string | null | undefined>,

		/**
		 * This is the full image reference, as would be specified to "docker pull". If no tag is provided as part of the image name, the tag ":latest" is used as a default.
		 * Required
		 */
		imageName: FormControl<string | null | undefined>,
	}
	export function CreateTaskContainerSettingsFormGroup() {
		return new FormGroup<TaskContainerSettingsFormProperties>({
			containerRunOptions: new FormControl<string | null | undefined>(undefined),
			imageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TaskCounts {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		active: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		completed: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failed: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		running: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		succeeded: number;

		/** Required */
		validationStatus: TaskCountsValidationStatus;
	}
	export interface TaskCountsFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		active: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		completed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		running: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		succeeded: FormControl<number | null | undefined>,

		/** Required */
		validationStatus: FormControl<TaskCountsValidationStatus | null | undefined>,
	}
	export function CreateTaskCountsFormGroup() {
		return new FormGroup<TaskCountsFormProperties>({
			active: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			completed: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			failed: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			running: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			succeeded: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			validationStatus: new FormControl<TaskCountsValidationStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TaskCountsValidationStatus { validated = 'validated', unvalidated = 'unvalidated' }

	export interface TaskDependencies {
		taskIdRanges?: Array<TaskIdRange>;

		/** The taskIds collection is limited to 64000 characters total (i.e. the combined length of all task IDs). If the taskIds collection exceeds the maximum length, the Add Task request fails with error code TaskDependencyListTooLong. In this case consider using task ID ranges instead. */
		taskIds?: Array<string>;
	}
	export interface TaskDependenciesFormProperties {
	}
	export function CreateTaskDependenciesFormGroup() {
		return new FormGroup<TaskDependenciesFormProperties>({
		});

	}


	/** The start and end of the range are inclusive. For example, if a range has start 9 and end 12, then it represents tasks '9', '10', '11' and '12'. */
	export interface TaskIdRange {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start: number;
	}

	/** The start and end of the range are inclusive. For example, if a range has start 9 and end 12, then it represents tasks '9', '10', '11' and '12'. */
	export interface TaskIdRangeFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

		/** This property is set only if the task is in the Completed state. */
		endTime?: Date | null;

		/**
		 * This property is set only if the task is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the task (due to timeout, or user termination via the API) you may see an operating system-defined exit code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exitCode?: number | null;
		failureInfo?: TaskFailureInformation;

		/** This property is set only if the requeueCount is nonzero. */
		lastRequeueTime?: Date | null;

		/** This element is present only if the task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the task has been restarted for reasons other than retry; for example, if the compute node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not. */
		lastRetryTime?: Date | null;

		/**
		 * When the user removes nodes from a pool (by resizing/shrinking the pool) or when the job is being disabled, the user can specify that running tasks on the nodes be requeued for execution. This count tracks how many times the task has been requeued for these reasons.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requeueCount: number;
		result?: SubtaskInformationResult | null;

		/**
		 * Task application failures (non-zero exit code) are retried, pre-processing errors (the task could not be run) and file upload errors are not retried. The Batch service will retry the task up to the limit specified by the constraints.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retryCount: number;

		/** 'Running' corresponds to the running state, so if the task specifies resource files or application packages, then the start time reflects the time at which the task started downloading or deploying these. If the task has been restarted or retried, this is the most recent time at which the task started running. This property is present only for tasks that are in the running or completed state. */
		startTime?: Date | null;
	}
	export interface TaskExecutionInformationFormProperties {

		/** This property is set only if the task is in the Completed state. */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * This property is set only if the task is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the task (due to timeout, or user termination via the API) you may see an operating system-defined exit code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exitCode: FormControl<number | null | undefined>,

		/** This property is set only if the requeueCount is nonzero. */
		lastRequeueTime: FormControl<Date | null | undefined>,

		/** This element is present only if the task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the task has been restarted for reasons other than retry; for example, if the compute node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not. */
		lastRetryTime: FormControl<Date | null | undefined>,

		/**
		 * When the user removes nodes from a pool (by resizing/shrinking the pool) or when the job is being disabled, the user can specify that running tasks on the nodes be requeued for execution. This count tracks how many times the task has been requeued for these reasons.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requeueCount: FormControl<number | null | undefined>,
		result: FormControl<SubtaskInformationResult | null | undefined>,

		/**
		 * Task application failures (non-zero exit code) are retried, pre-processing errors (the task could not be run) and file upload errors are not retried. The Batch service will retry the task up to the limit specified by the constraints.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retryCount: FormControl<number | null | undefined>,

		/** 'Running' corresponds to the running state, so if the task specifies resource files or application packages, then the start time reflects the time at which the task started downloading or deploying these. If the task has been restarted or retried, this is the most recent time at which the task started running. This property is present only for tasks that are in the running or completed state. */
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

		/** Required */
		nodeFillType: TaskSchedulingPolicyNodeFillType;
	}
	export interface TaskSchedulingPolicyFormProperties {

		/** Required */
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

		/**
		 * Required
		 * Type: double
		 */
		readIOGiB: number;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		readIOps: string;

		/** Required */
		startTime: Date;

		/** Required */
		url: string;

		/** Required */
		userCPUTime: string;

		/** Required */
		waitTime: string;

		/**
		 * The wall clock time is the elapsed time from when the task started running on a compute node to when it finished (or to the last time the statistics were updated, if the task had not finished by then). If the task was retried, this includes the wall clock time of all the task retries.
		 * Required
		 */
		wallClockTime: string;

		/**
		 * Required
		 * Type: double
		 */
		writeIOGiB: number;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		writeIOps: string;
	}
	export interface TaskStatisticsFormProperties {

		/** Required */
		kernelCPUTime: FormControl<string | null | undefined>,

		/** Required */
		lastUpdateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		readIOGiB: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		readIOps: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,

		/** Required */
		userCPUTime: FormControl<string | null | undefined>,

		/** Required */
		waitTime: FormControl<string | null | undefined>,

		/**
		 * The wall clock time is the elapsed time from when the task started running on a compute node to when it finished (or to the last time the statistics were updated, if the task had not finished by then). If the task was retried, this includes the wall clock time of all the task retries.
		 * Required
		 */
		wallClockTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		writeIOGiB: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		writeIOps: FormControl<string | null | undefined>,
	}
	export function CreateTaskStatisticsFormGroup() {
		return new FormGroup<TaskStatisticsFormProperties>({
			kernelCPUTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			readIOGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			readIOps: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userCPUTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			waitTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wallClockTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			writeIOGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			writeIOps: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** This property must be specified if the compute nodes in the pool need to have empty data disks attached to them. This cannot be updated. Each node gets its own disk (the disk is not a file share). Existing disks cannot be attached, each attached disk is empty. When the node is removed from the pool, the disk and all data associated with it is also deleted. The disk is not formatted after being attached, it must be formatted before use - for more information see https://docs.microsoft.com/en-us/azure/virtual-machines/linux/classic/attach-disk#initialize-a-new-data-disk-in-linux and https://docs.microsoft.com/en-us/azure/virtual-machines/windows/attach-disk-ps#add-an-empty-data-disk-to-a-virtual-machine. */
		dataDisks?: Array<DataDisk>;

		/** Required */
		imageReference: ImageReference;

		/**
		 * This only applies to images that contain the Windows operating system, and should only be used when you hold valid on-premises licenses for the nodes which will be deployed. If omitted, no on-premises licensing discount is applied. Values are:
		 * Windows_Server - The on-premises license is for Windows Server.
		 * Windows_Client - The on-premises license is for Windows Client.
		 */
		licenseType?: string | null;

		/**
		 * The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems. You must specify a node agent SKU which matches the selected image reference. To get the list of supported node agent SKUs along with their list of verified image references, see the 'List supported node agent SKUs' operation.
		 * Required
		 */
		nodeAgentSKUId: string;
		osDisk?: OSDisk;
		windowsConfiguration?: WindowsConfiguration;
	}
	export interface VirtualMachineConfigurationFormProperties {

		/**
		 * This only applies to images that contain the Windows operating system, and should only be used when you hold valid on-premises licenses for the nodes which will be deployed. If omitted, no on-premises licensing discount is applied. Values are:
		 * Windows_Server - The on-premises license is for Windows Server.
		 * Windows_Client - The on-premises license is for Windows Client.
		 */
		licenseType: FormControl<string | null | undefined>,

		/**
		 * The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems. You must specify a node agent SKU which matches the selected image reference. To get the list of supported node agent SKUs along with their list of verified image references, see the 'List supported node agent SKUs' operation.
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the applications available in the specified account.
		 * This operation returns only applications and versions that are available for use on compute nodes; that is, that can be used in an application package reference. For administrator information about applications and versions that are not yet available to compute nodes, use the Azure portal or the Azure Resource Manager API.
		 * Get applications
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 applications can be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {ApplicationListResult} A response containing the list of applications.
		 */
		Application_List(maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<ApplicationListResult> {
			return this.http.get<ApplicationListResult>(this.baseUri + 'applications?maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified application.
		 * This operation returns only applications and versions that are available for use on compute nodes; that is, that can be used in an application package reference. For administrator information about applications and versions that are not yet available to compute nodes, use the Azure portal or the Azure Resource Manager API.
		 * Get applications/{applicationId}
		 * @param {string} applicationId The ID of the application.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {ApplicationSummary} A response containing the application.
		 */
		Application_Get(applicationId: string, timeout: number | null | undefined, api_version: string): Observable<ApplicationSummary> {
			return this.http.get<ApplicationSummary>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all of the certificates that have been added to the specified account.
		 * Get certificates
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-certificates.
		 * @param {string} select An OData $select clause.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 certificates can be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {CertificateListResult} A response containing the list of certificates.
		 */
		Certificate_List(filter: string | null | undefined, select: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CertificateListResult> {
			return this.http.get<CertificateListResult>(this.baseUri + 'certificates?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified certificate.
		 * Get certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})
		 * @param {string} thumbprintAlgorithm The algorithm used to derive the thumbprint parameter. This must be sha1.
		 * @param {string} thumbprint The thumbprint of the certificate to get.
		 * @param {string} select An OData $select clause.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {Certificate} A response containing the certificate.
		 */
		Certificate_Get(thumbprintAlgorithm: string, thumbprint: string, select: string | null | undefined, timeout: number | null | undefined, api_version: string): Observable<Certificate> {
			return this.http.get<Certificate>(this.baseUri + 'certificates(thumbprintAlgorithm=' + (thumbprintAlgorithm == null ? '' : encodeURIComponent(thumbprintAlgorithm)) + ',thumbprint=' + (thumbprint == null ? '' : encodeURIComponent(thumbprint)) + ')&select=' + (select == null ? '' : encodeURIComponent(select)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a certificate from the specified account.
		 * You cannot delete a certificate if a resource (pool or compute node) is using it. Before you can delete a certificate, you must therefore make sure that the certificate is not associated with any existing pools, the certificate is not installed on any compute nodes (even if you remove a certificate from a pool, it is not removed from existing compute nodes in that pool until they restart), and no running tasks depend on the certificate. If you try to delete a certificate that is in use, the deletion fails. The certificate status changes to deleteFailed. You can use Cancel Delete Certificate to set the status back to active if you decide that you want to continue using the certificate.
		 * Delete certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})
		 * @param {string} thumbprintAlgorithm The algorithm used to derive the thumbprint parameter. This must be sha1.
		 * @param {string} thumbprint The thumbprint of the certificate to be deleted.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Certificate_Delete(thumbprintAlgorithm: string, thumbprint: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'certificates(thumbprintAlgorithm=' + (thumbprintAlgorithm == null ? '' : encodeURIComponent(thumbprintAlgorithm)) + ',thumbprint=' + (thumbprint == null ? '' : encodeURIComponent(thumbprint)) + ')&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels a failed deletion of a certificate from the specified account.
		 * If you try to delete a certificate that is being used by a pool or compute node, the status of the certificate changes to deleteFailed. If you decide that you want to continue using the certificate, you can use this operation to set the status of the certificate back to active. If you intend to delete the certificate, you do not need to run this operation after the deletion failed. You must make sure that the certificate is not being used by any resources, and then you can try again to delete the certificate.
		 * Post certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})/canceldelete
		 * @param {string} thumbprintAlgorithm The algorithm used to derive the thumbprint parameter. This must be sha1.
		 * @param {string} thumbprint The thumbprint of the certificate being deleted.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Certificate_CancelDeletion(thumbprintAlgorithm: string, thumbprint: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'certificates(thumbprintAlgorithm=' + (thumbprintAlgorithm == null ? '' : encodeURIComponent(thumbprintAlgorithm)) + ',thumbprint=' + (thumbprint == null ? '' : encodeURIComponent(thumbprint)) + ')/canceldelete&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all of the jobs in the specified account.
		 * Get jobs
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-jobs.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 jobs can be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {CloudJobListResult} A response containing the list of jobs.
		 */
		Job_List(filter: string | null | undefined, select: string | null | undefined, expand: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudJobListResult> {
			return this.http.get<CloudJobListResult>(this.baseUri + 'jobs?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified job.
		 * Get jobs/{jobId}
		 * @param {string} jobId The ID of the job.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {CloudJob} A response containing the job.
		 */
		Job_Get(jobId: string, select: string | null | undefined, expand: string | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudJob> {
			return this.http.get<CloudJob>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a job.
		 * Deleting a job also deletes all tasks that are part of that job, and all job statistics. This also overrides the retention period for task data; that is, if the job contains tasks which are still retained on compute nodes, the Batch services deletes those tasks' working directories and all their contents.  When a Delete Job request is received, the Batch service sets the job to the deleting state. All update operations on a job that is in deleting state will fail with status code 409 (Conflict), with additional information indicating that the job is being deleted.
		 * Delete jobs/{jobId}
		 * @param {string} jobId The ID of the job to delete.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Job_Delete(jobId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables the specified job, allowing new tasks to run.
		 * When you call this API, the Batch service sets a disabled job to the enabling state. After the this operation is completed, the job moves to the active state, and scheduling of new tasks under the job resumes. The Batch service does not allow a task to remain in the active state for more than 7 days. Therefore, if you enable a job containing active tasks which were added more than 7 days ago, those tasks will not run.
		 * Post jobs/{jobId}/enable
		 * @param {string} jobId The ID of the job to enable.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Job_Enable(jobId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/enable&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the execution status of the Job Preparation and Job Release task for the specified job across the compute nodes where the job has run.
		 * This API returns the Job Preparation and Job Release task status on all compute nodes that have run the Job Preparation or Job Release task. This includes nodes which have since been removed from the pool. If this API is invoked on a job which has no Job Preparation or Job Release task, the Batch service returns HTTP status code 409 (Conflict) with an error code of JobPreparationTaskNotSpecified.
		 * Get jobs/{jobId}/jobpreparationandreleasetaskstatus
		 * @param {string} jobId The ID of the job.
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-preparation-and-release-status.
		 * @param {string} select An OData $select clause.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 tasks can be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {CloudJobListPreparationAndReleaseTaskStatusResult} A response containing a list of Job Preparation and Job Release task statuses.
		 */
		Job_ListPreparationAndReleaseTaskStatus(jobId: string, filter: string | null | undefined, select: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudJobListPreparationAndReleaseTaskStatusResult> {
			return this.http.get<CloudJobListPreparationAndReleaseTaskStatusResult>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/jobpreparationandreleasetaskstatus&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the task counts for the specified job.
		 * Task counts provide a count of the tasks by active, running or completed task state, and a count of tasks which succeeded or failed. Tasks in the preparing state are counted as running. If the validationStatus is unvalidated, then the Batch service has not been able to check state counts against the task states as reported in the List Tasks API. The validationStatus may be unvalidated if the job contains more than 200,000 tasks.
		 * Get jobs/{jobId}/taskcounts
		 * @param {string} jobId The ID of the job.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {TaskCounts} A response containing the task counts for the specified job.
		 */
		Job_GetTaskCounts(jobId: string, timeout: number | null | undefined, api_version: string): Observable<TaskCounts> {
			return this.http.get<TaskCounts>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/taskcounts&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all of the tasks that are associated with the specified job.
		 * For multi-instance tasks, information such as affinityId, executionInfo and nodeInfo refer to the primary task. Use the list subtasks API to retrieve information about subtasks.
		 * Get jobs/{jobId}/tasks
		 * @param {string} jobId The ID of the job.
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-tasks.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 tasks can be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {CloudTaskListResult} A response containing the list of tasks.
		 */
		Task_List(jobId: string, filter: string | null | undefined, select: string | null | undefined, expand: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudTaskListResult> {
			return this.http.get<CloudTaskListResult>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified task.
		 * For multi-instance tasks, information such as affinityId, executionInfo and nodeInfo refer to the primary task. Use the list subtasks API to retrieve information about subtasks.
		 * Get jobs/{jobId}/tasks/{taskId}
		 * @param {string} jobId The ID of the job that contains the task.
		 * @param {string} taskId The ID of the task to get information about.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {CloudTask} A response containing the task.
		 */
		Task_Get(jobId: string, taskId: string, select: string | null | undefined, expand: string | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudTask> {
			return this.http.get<CloudTask>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a task from the specified job.
		 * When a task is deleted, all of the files in its directory on the compute node where it ran are also deleted (regardless of the retention time). For multi-instance tasks, the delete task operation applies synchronously to the primary task; subtasks and their files are then deleted asynchronously in the background.
		 * Delete jobs/{jobId}/tasks/{taskId}
		 * @param {string} jobId The ID of the job from which to delete the task.
		 * @param {string} taskId The ID of the task to delete.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {void} The request to the Batch service was successful.
		 */
		Task_Delete(jobId: string, taskId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the files in a task's directory on its compute node.
		 * Get jobs/{jobId}/tasks/{taskId}/files
		 * @param {string} jobId The ID of the job that contains the task.
		 * @param {string} taskId The ID of the task whose files you want to list.
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-task-files.
		 * @param {boolean} recursive Whether to list children of the task directory. This parameter can be used in combination with the filter parameter to list specific type of files.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 files can be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {NodeFileListResult} A response containing the list of files.
		 */
		File_ListFromTask(jobId: string, taskId: string, filter: string | null | undefined, recursive: boolean | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<NodeFileListResult> {
			return this.http.get<NodeFileListResult>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/files&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&recursive=' + recursive + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns the content of the specified task file.
		 * Get jobs/{jobId}/tasks/{taskId}/files/{filePath}
		 * @param {string} jobId The ID of the job that contains the task.
		 * @param {string} taskId The ID of the task whose file you want to retrieve.
		 * @param {string} filePath The path to the task file that you want to get the content of.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {string} A response containing the file content.
		 */
		File_GetFromTask(jobId: string, taskId: string, filePath: string, timeout: number | null | undefined, api_version: string): Observable<string> {
			return this.http.get(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/files/' + (filePath == null ? '' : encodeURIComponent(filePath)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { responseType: 'text' });
		}

		/**
		 * Deletes the specified task file from the compute node where the task ran.
		 * Delete jobs/{jobId}/tasks/{taskId}/files/{filePath}
		 * @param {string} jobId The ID of the job that contains the task.
		 * @param {string} taskId The ID of the task whose file you want to delete.
		 * @param {string} filePath The path to the task file or directory that you want to delete.
		 * @param {boolean} recursive Whether to delete children of a directory. If the filePath parameter represents a directory instead of a file, you can set recursive to true to delete the directory and all of the files and subdirectories in it. If recursive is false then the directory must be empty or deletion will fail.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {void} The request to the Batch service was successful.
		 */
		File_DeleteFromTask(jobId: string, taskId: string, filePath: string, recursive: boolean | null | undefined, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/files/' + (filePath == null ? '' : encodeURIComponent(filePath)) + '&recursive=' + recursive + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reactivates a task, allowing it to run again even if its retry count has been exhausted.
		 * Reactivation makes a task eligible to be retried again up to its maximum retry count. The task's state is changed to active. As the task is no longer in the completed state, any previous exit code or failure information is no longer available after reactivation. Each time a task is reactivated, its retry count is reset to 0. Reactivation will fail for tasks that are not completed or that previously completed successfully (with an exit code of 0). Additionally, it will fail if the job has completed (or is terminating or deleting).
		 * Post jobs/{jobId}/tasks/{taskId}/reactivate
		 * @param {string} jobId The ID of the job containing the task.
		 * @param {string} taskId The ID of the task to reactivate.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Task_Reactivate(jobId: string, taskId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/reactivate&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all of the subtasks that are associated with the specified multi-instance task.
		 * If the task is not a multi-instance task then this returns an empty collection.
		 * Get jobs/{jobId}/tasks/{taskId}/subtasksinfo
		 * @param {string} jobId The ID of the job.
		 * @param {string} taskId The ID of the task.
		 * @param {string} select An OData $select clause.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {CloudTaskListSubtasksResult} A response containing the list of subtasks.
		 */
		Task_ListSubtasks(jobId: string, taskId: string, select: string | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudTaskListSubtasksResult> {
			return this.http.get<CloudTaskListSubtasksResult>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/subtasksinfo&select=' + (select == null ? '' : encodeURIComponent(select)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Terminates the specified task.
		 * When the task has been terminated, it moves to the completed state. For multi-instance tasks, the terminate task operation applies synchronously to the primary task; subtasks are then terminated asynchronously in the background.
		 * Post jobs/{jobId}/tasks/{taskId}/terminate
		 * @param {string} jobId The ID of the job containing the task.
		 * @param {string} taskId The ID of the task to terminate.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Task_Terminate(jobId: string, taskId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/terminate&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all of the job schedules in the specified account.
		 * Get jobschedules
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-schedules.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 job schedules can be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {CloudJobScheduleListResult} A response containing the list of job schedules.
		 */
		JobSchedule_List(filter: string | null | undefined, select: string | null | undefined, expand: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudJobScheduleListResult> {
			return this.http.get<CloudJobScheduleListResult>(this.baseUri + 'jobschedules?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified job schedule.
		 * Get jobschedules/{jobScheduleId}
		 * @param {string} jobScheduleId The ID of the job schedule to get.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {CloudJobSchedule} A response containing the job schedule.
		 */
		JobSchedule_Get(jobScheduleId: string, select: string | null | undefined, expand: string | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudJobSchedule> {
			return this.http.get<CloudJobSchedule>(this.baseUri + 'jobschedules/' + (jobScheduleId == null ? '' : encodeURIComponent(jobScheduleId)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a job schedule from the specified account.
		 * When you delete a job schedule, this also deletes all jobs and tasks under that schedule. When tasks are deleted, all the files in their working directories on the compute nodes are also deleted (the retention period is ignored). The job schedule statistics are no longer accessible once the job schedule is deleted, though they are still counted towards account lifetime statistics.
		 * Delete jobschedules/{jobScheduleId}
		 * @param {string} jobScheduleId The ID of the job schedule to delete.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		JobSchedule_Delete(jobScheduleId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'jobschedules/' + (jobScheduleId == null ? '' : encodeURIComponent(jobScheduleId)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Disables a job schedule.
		 * No new jobs will be created until the job schedule is enabled again.
		 * Post jobschedules/{jobScheduleId}/disable
		 * @param {string} jobScheduleId The ID of the job schedule to disable.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		JobSchedule_Disable(jobScheduleId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobschedules/' + (jobScheduleId == null ? '' : encodeURIComponent(jobScheduleId)) + '/disable&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables a job schedule.
		 * Post jobschedules/{jobScheduleId}/enable
		 * @param {string} jobScheduleId The ID of the job schedule to enable.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		JobSchedule_Enable(jobScheduleId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobschedules/' + (jobScheduleId == null ? '' : encodeURIComponent(jobScheduleId)) + '/enable&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the jobs that have been created under the specified job schedule.
		 * Get jobschedules/{jobScheduleId}/jobs
		 * @param {string} jobScheduleId The ID of the job schedule from which you want to get a list of jobs.
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-jobs-in-a-job-schedule.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 jobs can be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {CloudJobListResult} A response containing the list of jobs.
		 */
		Job_ListFromJobSchedule(jobScheduleId: string, filter: string | null | undefined, select: string | null | undefined, expand: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudJobListResult> {
			return this.http.get<CloudJobListResult>(this.baseUri + 'jobschedules/' + (jobScheduleId == null ? '' : encodeURIComponent(jobScheduleId)) + '/jobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Terminates a job schedule.
		 * Post jobschedules/{jobScheduleId}/terminate
		 * @param {string} jobScheduleId The ID of the job schedule to terminates.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		JobSchedule_Terminate(jobScheduleId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobschedules/' + (jobScheduleId == null ? '' : encodeURIComponent(jobScheduleId)) + '/terminate&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets lifetime summary statistics for all of the jobs in the specified account.
		 * Statistics are aggregated across all jobs that have ever existed in the account, from account creation to the last update time of the statistics.
		 * Get lifetimejobstats
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {JobStatistics} A response containing the job statistics for the lifetime of the Batch account.
		 */
		Job_GetAllLifetimeStatistics(timeout: number | null | undefined, api_version: string): Observable<JobStatistics> {
			return this.http.get<JobStatistics>(this.baseUri + 'lifetimejobstats?timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets lifetime summary statistics for all of the pools in the specified account.
		 * Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics.
		 * Get lifetimepoolstats
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {PoolStatistics} A response containing the pool statistics for the lifetime of the Batch account.
		 */
		Pool_GetAllLifetimeStatistics(timeout: number | null | undefined, api_version: string): Observable<PoolStatistics> {
			return this.http.get<PoolStatistics>(this.baseUri + 'lifetimepoolstats?timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all node agent SKUs supported by the Azure Batch service.
		 * Get nodeagentskus
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-node-agent-skus.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 results will be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {AccountListNodeAgentSkusResult} A response containing the list of node agent SKUs.
		 */
		Account_ListNodeAgentSkus(filter: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<AccountListNodeAgentSkusResult> {
			return this.http.get<AccountListNodeAgentSkusResult>(this.baseUri + 'nodeagentskus?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all of the pools in the specified account.
		 * Get pools
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-pools.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 pools can be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {CloudPoolListResult} A response containing the list of pools.
		 */
		Pool_List(filter: string | null | undefined, select: string | null | undefined, expand: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudPoolListResult> {
			return this.http.get<CloudPoolListResult>(this.baseUri + 'pools?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified pool.
		 * Get pools/{poolId}
		 * @param {string} poolId The ID of the pool to get.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {CloudPool} A response containing the pool.
		 */
		Pool_Get(poolId: string, select: string | null | undefined, expand: string | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudPool> {
			return this.http.get<CloudPool>(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a pool from the specified account.
		 * When you request that a pool be deleted, the following actions occur: the pool state is set to deleting; any ongoing resize operation on the pool are stopped; the Batch service starts resizing the pool to zero nodes; any tasks running on existing nodes are terminated and requeued (as if a resize pool operation had been requested with the default requeue option); finally, the pool is removed from the system. Because running tasks are requeued, the user can rerun these tasks by updating their job to target a different pool. The tasks can then run on the new pool. If you want to override the requeue behavior, then you should call resize pool explicitly to shrink the pool to zero size before deleting the pool. If you call an Update, Patch or Delete API on a pool in the deleting state, it will fail with HTTP status code 409 with error code PoolBeingDeleted.
		 * Delete pools/{poolId}
		 * @param {string} poolId The ID of the pool to delete.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Pool_Delete(poolId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Disables automatic scaling for a pool.
		 * Post pools/{poolId}/disableautoscale
		 * @param {string} poolId The ID of the pool on which to disable automatic scaling.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {void} The request to the Batch service was successful.
		 */
		Pool_DisableAutoScale(poolId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/disableautoscale&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the compute nodes in the specified pool.
		 * Get pools/{poolId}/nodes
		 * @param {string} poolId The ID of the pool from which you want to list nodes.
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-nodes-in-a-pool.
		 * @param {string} select An OData $select clause.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 nodes can be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {ComputeNodeListResult} A response containing the list of nodes.
		 */
		ComputeNode_List(poolId: string, filter: string | null | undefined, select: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<ComputeNodeListResult> {
			return this.http.get<ComputeNodeListResult>(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified compute node.
		 * Get pools/{poolId}/nodes/{nodeId}
		 * @param {string} poolId The ID of the pool that contains the compute node.
		 * @param {string} nodeId The ID of the compute node that you want to get information about.
		 * @param {string} select An OData $select clause.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {ComputeNode} A response containing the compute node.
		 */
		ComputeNode_Get(poolId: string, nodeId: string, select: string | null | undefined, timeout: number | null | undefined, api_version: string): Observable<ComputeNode> {
			return this.http.get<ComputeNode>(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Enables task scheduling on the specified compute node.
		 * You can enable task scheduling on a node only if its current scheduling state is disabled
		 * Post pools/{poolId}/nodes/{nodeId}/enablescheduling
		 * @param {string} poolId The ID of the pool that contains the compute node.
		 * @param {string} nodeId The ID of the compute node on which you want to enable task scheduling.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {void} The request to the Batch service was successful.
		 */
		ComputeNode_EnableScheduling(poolId: string, nodeId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '/enablescheduling&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all of the files in task directories on the specified compute node.
		 * Get pools/{poolId}/nodes/{nodeId}/files
		 * @param {string} poolId The ID of the pool that contains the compute node.
		 * @param {string} nodeId The ID of the compute node whose files you want to list.
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-compute-node-files.
		 * @param {boolean} recursive Whether to list children of a directory.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 files can be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {NodeFileListResult} A response containing the list of files.
		 */
		File_ListFromComputeNode(poolId: string, nodeId: string, filter: string | null | undefined, recursive: boolean | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<NodeFileListResult> {
			return this.http.get<NodeFileListResult>(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '/files&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&recursive=' + recursive + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns the content of the specified compute node file.
		 * Get pools/{poolId}/nodes/{nodeId}/files/{filePath}
		 * @param {string} poolId The ID of the pool that contains the compute node.
		 * @param {string} nodeId The ID of the compute node that contains the file.
		 * @param {string} filePath The path to the compute node file that you want to get the content of.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {string} The file content.
		 */
		File_GetFromComputeNode(poolId: string, nodeId: string, filePath: string, timeout: number | null | undefined, api_version: string): Observable<string> {
			return this.http.get(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '/files/' + (filePath == null ? '' : encodeURIComponent(filePath)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { responseType: 'text' });
		}

		/**
		 * Deletes the specified file from the compute node.
		 * Delete pools/{poolId}/nodes/{nodeId}/files/{filePath}
		 * @param {string} poolId The ID of the pool that contains the compute node.
		 * @param {string} nodeId The ID of the compute node from which you want to delete the file.
		 * @param {string} filePath The path to the file or directory that you want to delete.
		 * @param {boolean} recursive Whether to delete children of a directory. If the filePath parameter represents a directory instead of a file, you can set recursive to true to delete the directory and all of the files and subdirectories in it. If recursive is false then the directory must be empty or deletion will fail.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {void} The request to the Batch service was successful.
		 */
		File_DeleteFromComputeNode(poolId: string, nodeId: string, filePath: string, recursive: boolean | null | undefined, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '/files/' + (filePath == null ? '' : encodeURIComponent(filePath)) + '&recursive=' + recursive + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the Remote Desktop Protocol file for the specified compute node.
		 * Before you can access a node by using the RDP file, you must create a user account on the node. This API can only be invoked on pools created with a cloud service configuration. For pools created with a virtual machine configuration, see the GetRemoteLoginSettings API.
		 * Get pools/{poolId}/nodes/{nodeId}/rdp
		 * @param {string} poolId The ID of the pool that contains the compute node.
		 * @param {string} nodeId The ID of the compute node for which you want to get the Remote Desktop Protocol file.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {string} A response containing the RDP information.
		 */
		ComputeNode_GetRemoteDesktop(poolId: string, nodeId: string, timeout: number | null | undefined, api_version: string): Observable<string> {
			return this.http.get(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '/rdp&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { responseType: 'text' });
		}

		/**
		 * Gets the settings required for remote login to a compute node.
		 * Before you can remotely login to a node using the remote login settings, you must create a user account on the node. This API can be invoked only on pools created with the virtual machine configuration property. For pools created with a cloud service configuration, see the GetRemoteDesktop API.
		 * Get pools/{poolId}/nodes/{nodeId}/remoteloginsettings
		 * @param {string} poolId The ID of the pool that contains the compute node.
		 * @param {string} nodeId The ID of the compute node for which to obtain the remote login settings.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {ComputeNodeGetRemoteLoginSettingsResult} A response containing the login settings.
		 */
		ComputeNode_GetRemoteLoginSettings(poolId: string, nodeId: string, timeout: number | null | undefined, api_version: string): Observable<ComputeNodeGetRemoteLoginSettingsResult> {
			return this.http.get<ComputeNodeGetRemoteLoginSettingsResult>(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '/remoteloginsettings&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a user account from the specified compute node.
		 * You can delete a user account to a node only when it is in the idle or running state.
		 * Delete pools/{poolId}/nodes/{nodeId}/users/{userName}
		 * @param {string} poolId The ID of the pool that contains the compute node.
		 * @param {string} nodeId The ID of the machine on which you want to delete a user account.
		 * @param {string} userName The name of the user account to delete.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {void} The request to the Batch service was successful.
		 */
		ComputeNode_DeleteUser(poolId: string, nodeId: string, userName: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops an ongoing resize operation on the pool.
		 * This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state. After stopping, the pool stabilizes at the number of nodes it was at when the stop operation was done. During the stop operation, the pool allocation state changes first to stopping and then to steady. A resize operation need not be an explicit resize pool request; this API can also be used to halt the initial sizing of the pool when it is created.
		 * Post pools/{poolId}/stopresize
		 * @param {string} poolId The ID of the pool whose resizing you want to stop.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Pool_StopResize(poolId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/stopresize&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the usage metrics, aggregated by pool across individual time intervals, for the specified account.
		 * If you do not specify a $filter clause including a poolId, the response includes all pools that existed in the account in the time range of the returned aggregation intervals. If you do not specify a $filter clause including a startTime or endTime these filters default to the start and end times of the last aggregation interval currently available; that is, only the last aggregation interval is returned.
		 * Get poolusagemetrics
		 * @param {Date} starttime The earliest time from which to include metrics. This must be at least two and a half hours before the current time. If not specified this defaults to the start time of the last aggregation interval currently available.
		 * @param {Date} endtime The latest time from which to include metrics. This must be at least two hours before the current time. If not specified this defaults to the end time of the last aggregation interval currently available.
		 * @param {string} filter An OData $filter clause. For more information on constructing this filter, see https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-account-usage-metrics.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 results will be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} api_version Client API Version.
		 * @return {PoolListUsageMetricsResult} A response containing the list of pool usage details.
		 */
		Pool_ListUsageMetrics(starttime: Date | null | undefined, endtime: Date | null | undefined, filter: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<PoolListUsageMetricsResult> {
			return this.http.get<PoolListUsageMetricsResult>(this.baseUri + 'poolusagemetrics?starttime=' + starttime?.toISOString() + '&endtime=' + endtime?.toISOString() + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

