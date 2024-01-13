import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Response to an AccountOperation.ListNodeAgentSkus request. */
	export interface AccountListNodeAgentSkusResult {

		/** The URL to get the next set of results. */
		'odata.nextLink'?: string | null;

		/** The list of supported node agent SKUs. */
		value?: Array<NodeAgentSku>;
	}

	/** Response to an AccountOperation.ListNodeAgentSkus request. */
	export interface AccountListNodeAgentSkusResultFormProperties {

		/** The URL to get the next set of results. */
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreateAccountListNodeAgentSkusResultFormGroup() {
		return new FormGroup<AccountListNodeAgentSkusResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A node agent SKU supported by the Batch service. The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems. */
	export interface NodeAgentSku {

		/** The node agent SKU id. */
		id?: string | null;

		/** The type of operating system compatible with the node agent SKU. */
		osType?: NodeAgentSkuOsType | null;

		/** The list of images verified to be compatible with this node agent SKU. This collection is not exhaustive (the node agent may be compatible with other images). */
		verifiedImageReferences?: Array<ImageReference>;
	}

	/** A node agent SKU supported by the Batch service. The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems. */
	export interface NodeAgentSkuFormProperties {

		/** The node agent SKU id. */
		id: FormControl<string | null | undefined>,

		/** The type of operating system compatible with the node agent SKU. */
		osType: FormControl<NodeAgentSkuOsType | null | undefined>,
	}
	export function CreateNodeAgentSkuFormGroup() {
		return new FormGroup<NodeAgentSkuFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<NodeAgentSkuOsType | null | undefined>(undefined),
		});

	}

	export enum NodeAgentSkuOsType { linux = 0, windows = 1, unmapped = 2 }


	/** A reference to an Azure Virtual Machines Marketplace image. */
	export interface ImageReference {

		/**
		 * The offer type of the Azure Virtual Machines Marketplace image. For example, UbuntuServer or WindowsServer.
		 * Required
		 */
		offer: string;

		/**
		 * The publisher of the Azure Virtual Machines Marketplace image. For example, Canonical or MicrosoftWindowsServer.
		 * Required
		 */
		publisher: string;

		/**
		 * The SKU of the Azure Virtual Machines Marketplace image. For example, 14.04.0-LTS or 2012-R2-Datacenter.
		 * Required
		 */
		sku: string;

		/** The version of the Azure Virtual Machines Marketplace image. A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'. */
		version?: string | null;
	}

	/** A reference to an Azure Virtual Machines Marketplace image. */
	export interface ImageReferenceFormProperties {

		/**
		 * The offer type of the Azure Virtual Machines Marketplace image. For example, UbuntuServer or WindowsServer.
		 * Required
		 */
		offer: FormControl<string | null | undefined>,

		/**
		 * The publisher of the Azure Virtual Machines Marketplace image. For example, Canonical or MicrosoftWindowsServer.
		 * Required
		 */
		publisher: FormControl<string | null | undefined>,

		/**
		 * The SKU of the Azure Virtual Machines Marketplace image. For example, 14.04.0-LTS or 2012-R2-Datacenter.
		 * Required
		 */
		sku: FormControl<string | null | undefined>,

		/** The version of the Azure Virtual Machines Marketplace image. A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateImageReferenceFormGroup() {
		return new FormGroup<ImageReferenceFormProperties>({
			offer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			publisher: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sku: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A locality hint that can be used by the Batch service to select a compute node on which to start a task. */
	export interface AffinityInformation {

		/** An opaque string representing the location of a compute node or a task that has run previously. You can pass the AffinityId of a compute node or task to indicate that this task needs to be placed close to the node or task. */
		affinityId?: string | null;
	}

	/** A locality hint that can be used by the Batch service to select a compute node on which to start a task. */
	export interface AffinityInformationFormProperties {

		/** An opaque string representing the location of a compute node or a task that has run previously. You can pass the AffinityId of a compute node or task to indicate that this task needs to be placed close to the node or task. */
		affinityId: FormControl<string | null | undefined>,
	}
	export function CreateAffinityInformationFormGroup() {
		return new FormGroup<AffinityInformationFormProperties>({
			affinityId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to a ApplicationOperations.List request. */
	export interface ApplicationListResult {

		/** The URL to get the next set of results. */
		'odata.nextLink'?: string | null;

		/** The list of applications available in the account. */
		value?: Array<ApplicationSummary>;
	}

	/** Response to a ApplicationOperations.List request. */
	export interface ApplicationListResultFormProperties {

		/** The URL to get the next set of results. */
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreateApplicationListResultFormGroup() {
		return new FormGroup<ApplicationListResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about an application in an Azure Batch account. */
	export interface ApplicationSummary {

		/**
		 * The display name for the application.
		 * Required
		 */
		displayName: string;

		/**
		 * A string that uniquely identifies the application within the account.
		 * Required
		 */
		id: string;

		/** Required */
		versions: Array<string>;
	}

	/** Contains information about an application in an Azure Batch account. */
	export interface ApplicationSummaryFormProperties {

		/**
		 * The display name for the application.
		 * Required
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * A string that uniquely identifies the application within the account.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateApplicationSummaryFormGroup() {
		return new FormGroup<ApplicationSummaryFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A reference to an application package to be installed on compute nodes in a pool. */
	export interface ApplicationPackageReference {

		/**
		 * The id of the application to install.
		 * Required
		 */
		applicationId: string;

		/** The version of the application to install. If omitted, the default version is installed. */
		version?: string | null;
	}

	/** A reference to an application package to be installed on compute nodes in a pool. */
	export interface ApplicationPackageReferenceFormProperties {

		/**
		 * The id of the application to install.
		 * Required
		 */
		applicationId: FormControl<string | null | undefined>,

		/** The version of the application to install. If omitted, the default version is installed. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateApplicationPackageReferenceFormGroup() {
		return new FormGroup<ApplicationPackageReferenceFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies characteristics for a temporary 'auto pool'. The Batch service will create this auto pool, run all the tasks for the job on it, and will delete the pool once the job has completed. */
	export interface AutoPoolSpecification {

		/** A prefix to be added to the unique identifier when a pool is automatically created. The prefix can be up to 20 characters long. */
		autoPoolIdPrefix?: string | null;

		/** Whether to keep an auto pool alive after its lifetime expires. */
		keepAlive?: boolean | null;

		/** Specification for creating a new pool. */
		pool?: PoolSpecification;

		/**
		 * The minimum lifetime of created auto pools, and how multiple jobs on a schedule are assigned to pools.
		 * Required
		 */
		poolLifetimeOption: AutoPoolSpecificationPoolLifetimeOption;
	}

	/** Specifies characteristics for a temporary 'auto pool'. The Batch service will create this auto pool, run all the tasks for the job on it, and will delete the pool once the job has completed. */
	export interface AutoPoolSpecificationFormProperties {

		/** A prefix to be added to the unique identifier when a pool is automatically created. The prefix can be up to 20 characters long. */
		autoPoolIdPrefix: FormControl<string | null | undefined>,

		/** Whether to keep an auto pool alive after its lifetime expires. */
		keepAlive: FormControl<boolean | null | undefined>,

		/**
		 * The minimum lifetime of created auto pools, and how multiple jobs on a schedule are assigned to pools.
		 * Required
		 */
		poolLifetimeOption: FormControl<AutoPoolSpecificationPoolLifetimeOption | null | undefined>,
	}
	export function CreateAutoPoolSpecificationFormGroup() {
		return new FormGroup<AutoPoolSpecificationFormProperties>({
			autoPoolIdPrefix: new FormControl<string | null | undefined>(undefined),
			keepAlive: new FormControl<boolean | null | undefined>(undefined),
			poolLifetimeOption: new FormControl<AutoPoolSpecificationPoolLifetimeOption | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AutoPoolSpecificationPoolLifetimeOption { jobschedule = 0, job = 1, unmapped = 2 }


	/** The results and errors from an execution of a pool autoscale formula. */
	export interface AutoScaleRun {

		/** An error that occurred when executing or evaluating a pool autoscale formula. */
		error?: AutoScaleRunError;

		/** The final values of all variables used in the evaluation of the autoscale formula. Each variable value is returned in the form $variable=value, and variables are separated by semicolons. */
		results?: string | null;

		/**
		 * The time at which the autoscale formula was last evaluated.
		 * Required
		 */
		timestamp: Date;
	}

	/** The results and errors from an execution of a pool autoscale formula. */
	export interface AutoScaleRunFormProperties {

		/** The final values of all variables used in the evaluation of the autoscale formula. Each variable value is returned in the form $variable=value, and variables are separated by semicolons. */
		results: FormControl<string | null | undefined>,

		/**
		 * The time at which the autoscale formula was last evaluated.
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateAutoScaleRunFormGroup() {
		return new FormGroup<AutoScaleRunFormProperties>({
			results: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An error that occurred when executing or evaluating a pool autoscale formula. */
	export interface AutoScaleRunError {

		/** An identifier for the autoscale error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** A message describing the autoscale error, intended to be suitable for display in a user interface. */
		message?: string | null;

		/** A list of additional error details related to the autoscale error. */
		values?: Array<NameValuePair>;
	}

	/** An error that occurred when executing or evaluating a pool autoscale formula. */
	export interface AutoScaleRunErrorFormProperties {

		/** An identifier for the autoscale error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the autoscale error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateAutoScaleRunErrorFormGroup() {
		return new FormGroup<AutoScaleRunErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a name-value pair. */
	export interface NameValuePair {

		/** The name in the name-value pair. */
		name?: string | null;

		/** The value in the name-value pair. */
		value?: string | null;
	}

	/** Represents a name-value pair. */
	export interface NameValuePairFormProperties {

		/** The name in the name-value pair. */
		name: FormControl<string | null | undefined>,

		/** The value in the name-value pair. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateNameValuePairFormGroup() {
		return new FormGroup<NameValuePairFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error response received from the Azure Batch service. */
	export interface BatchError {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** An error message received in an Azure Batch error response. */
		message?: ErrorMessage;

		/** A collection of key-value pairs containing additional details about the error. */
		values?: Array<BatchErrorDetail>;
	}

	/** An error response received from the Azure Batch service. */
	export interface BatchErrorFormProperties {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,
	}
	export function CreateBatchErrorFormGroup() {
		return new FormGroup<BatchErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An item of additional information included in an Azure Batch error response. */
	export interface BatchErrorDetail {

		/** An identifier specifying the meaning of the Value property. */
		key?: string | null;

		/** The additional information included with the error response. */
		value?: string | null;
	}

	/** An item of additional information included in an Azure Batch error response. */
	export interface BatchErrorDetailFormProperties {

		/** An identifier specifying the meaning of the Value property. */
		key: FormControl<string | null | undefined>,

		/** The additional information included with the error response. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateBatchErrorDetailFormGroup() {
		return new FormGroup<BatchErrorDetailFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A certificate that can be installed on compute nodes and can be used to authenticate operations on the machine. */
	export interface Certificate {

		/** An error encountered by the Batch service when deleting a certificate. */
		deleteCertificateError?: DeleteCertificateError;

		/** The previous state of the certificate. This property is not set if the certificate is in its initial Active state. */
		previousState?: CertificatePreviousState | null;

		/** The time at which the certificate entered its previous state. This property is not set if the certificate is in its initial Active state. */
		previousStateTransitionTime?: Date | null;

		/** The public part of the certificate as a base-64 encoded .cer file. */
		publicData?: string | null;

		/** The current state of the certificate. */
		state?: CertificatePreviousState | null;

		/** The time at which the certificate entered its current state. */
		stateTransitionTime?: Date | null;

		/** The X.509 thumbprint of the certificate. This is a sequence of up to 40 hex digits (it may include spaces but these are removed). */
		thumbprint?: string | null;

		/** The algorithm used to derive the thumbprint. This must be sha1. */
		thumbprintAlgorithm?: string | null;

		/** The URL of the certificate. */
		url?: string | null;
	}

	/** A certificate that can be installed on compute nodes and can be used to authenticate operations on the machine. */
	export interface CertificateFormProperties {

		/** The previous state of the certificate. This property is not set if the certificate is in its initial Active state. */
		previousState: FormControl<CertificatePreviousState | null | undefined>,

		/** The time at which the certificate entered its previous state. This property is not set if the certificate is in its initial Active state. */
		previousStateTransitionTime: FormControl<Date | null | undefined>,

		/** The public part of the certificate as a base-64 encoded .cer file. */
		publicData: FormControl<string | null | undefined>,

		/** The current state of the certificate. */
		state: FormControl<CertificatePreviousState | null | undefined>,

		/** The time at which the certificate entered its current state. */
		stateTransitionTime: FormControl<Date | null | undefined>,

		/** The X.509 thumbprint of the certificate. This is a sequence of up to 40 hex digits (it may include spaces but these are removed). */
		thumbprint: FormControl<string | null | undefined>,

		/** The algorithm used to derive the thumbprint. This must be sha1. */
		thumbprintAlgorithm: FormControl<string | null | undefined>,

		/** The URL of the certificate. */
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

	export enum CertificatePreviousState { active = 0, deleting = 1, deletefailed = 2 }


	/** A certificate that can be installed on compute nodes and can be used to authenticate operations on the machine. */
	export interface CertificateAddParameter {

		/** The format of the certificate data. */
		certificateFormat?: CertificateAddParameterCertificateFormat | null;

		/**
		 * The base64-encoded contents of the certificate. The maximum size is 10KB.
		 * Required
		 */
		data: string;

		/** The password to access the certificate's private key. */
		password?: string | null;

		/**
		 * The X.509 thumbprint of the certificate. This is a sequence of up to 40 hex digits (it may include spaces but these are removed).
		 * Required
		 */
		thumbprint: string;

		/**
		 * The algorithm used to derive the thumbprint. This must be sha1.
		 * Required
		 */
		thumbprintAlgorithm: string;
	}

	/** A certificate that can be installed on compute nodes and can be used to authenticate operations on the machine. */
	export interface CertificateAddParameterFormProperties {

		/** The format of the certificate data. */
		certificateFormat: FormControl<CertificateAddParameterCertificateFormat | null | undefined>,

		/**
		 * The base64-encoded contents of the certificate. The maximum size is 10KB.
		 * Required
		 */
		data: FormControl<string | null | undefined>,

		/** The password to access the certificate's private key. */
		password: FormControl<string | null | undefined>,

		/**
		 * The X.509 thumbprint of the certificate. This is a sequence of up to 40 hex digits (it may include spaces but these are removed).
		 * Required
		 */
		thumbprint: FormControl<string | null | undefined>,

		/**
		 * The algorithm used to derive the thumbprint. This must be sha1.
		 * Required
		 */
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

	export enum CertificateAddParameterCertificateFormat { pfx = 0, cer = 1, unmapped = 2 }


	/** Response to a CertificateOperation.List request. */
	export interface CertificateListResult {

		/** The URL to get the next set of results. */
		'odata.nextLink'?: string | null;

		/** The list of certificates. */
		value?: Array<Certificate>;
	}

	/** Response to a CertificateOperation.List request. */
	export interface CertificateListResultFormProperties {

		/** The URL to get the next set of results. */
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreateCertificateListResultFormGroup() {
		return new FormGroup<CertificateListResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A reference to a certificate to be installed on compute nodes in a pool. */
	export interface CertificateReference {

		/** The location of the certificate store on the compute node into which to install the certificate. The default value is CurrentUser. */
		storeLocation?: CertificateReferenceStoreLocation | null;

		/** The name of the certificate store on the compute node into which to install the certificate. The default value is My. */
		storeName?: string | null;

		/**
		 * The thumbprint of the certificate.
		 * Required
		 */
		thumbprint: string;

		/**
		 * The algorithm with which the thumbprint is associated. This must be sha1.
		 * Required
		 */
		thumbprintAlgorithm: string;

		/** Which user accounts on the compute node should have access to the private data of the certificate. This may be any subset of the values 'starttask', 'task' and 'remoteuser', separated by commas. The default is all accounts, corresponding to the string 'starttask,task,remoteuser'. */
		visibility?: Array<string>;
	}

	/** A reference to a certificate to be installed on compute nodes in a pool. */
	export interface CertificateReferenceFormProperties {

		/** The location of the certificate store on the compute node into which to install the certificate. The default value is CurrentUser. */
		storeLocation: FormControl<CertificateReferenceStoreLocation | null | undefined>,

		/** The name of the certificate store on the compute node into which to install the certificate. The default value is My. */
		storeName: FormControl<string | null | undefined>,

		/**
		 * The thumbprint of the certificate.
		 * Required
		 */
		thumbprint: FormControl<string | null | undefined>,

		/**
		 * The algorithm with which the thumbprint is associated. This must be sha1.
		 * Required
		 */
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

	export enum CertificateReferenceStoreLocation { currentuser = 0, localmachine = 1, unmapped = 2 }


	/** An Azure Batch job. */
	export interface CloudJob {

		/** The list of common environment variable settings. These environment variables are set for all tasks in the job (including the Job Manager, Job Preparation and Job Release tasks). */
		commonEnvironmentSettings?: Array<EnvironmentSetting>;

		/** Specifies the execution constraints for jobs created on a schedule. */
		constraints?: JobConstraints;

		/** The creation time of the job. */
		creationTime?: Date | null;

		/** The display name for the job. */
		displayName?: string | null;

		/** The ETag of the job. */
		eTag?: string | null;

		/** Contains information about the execution of a job in the Azure Batch service. */
		executionInfo?: JobExecutionInformation;

		/** A string that uniquely identifies the job within the account. The id can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. It is common to use a GUID for the id. */
		id?: string | null;

		/** Specifies details of a Job Manager task. */
		jobManagerTask?: JobManagerTask;

		/** A Job Preparation task to run before any tasks of the job on any given compute node. */
		jobPreparationTask?: JobPreparationTask;

		/** A Job Release task to run on job completion on any compute node where the job has run. */
		jobReleaseTask?: JobReleaseTask;

		/** The last modified time of the job. */
		lastModified?: Date | null;

		/** A list of name-value pairs associated with the job as metadata. */
		metadata?: Array<MetadataItem>;

		/** Specifies how a job should be assigned to a pool. */
		poolInfo?: PoolInformation;

		/** The previous state of the job. This property is not set if the job is in its initial Active state. */
		previousState?: CloudJobPreviousState | null;

		/** The time at which the job entered its previous state. This property is not set if the job is in its initial Active state. */
		previousStateTransitionTime?: Date | null;

		/** The priority of the job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. */
		priority?: number | null;

		/** The current state of the job. */
		state?: CloudJobPreviousState | null;

		/** The time at which the job entered its current state. */
		stateTransitionTime?: Date | null;

		/** Resource usage statistics for a job. */
		stats?: JobStatistics;

		/** The URL of the job. */
		url?: string | null;

		/** The flag that determines if this job will use tasks with dependencies. */
		usesTaskDependencies?: boolean | null;
	}

	/** An Azure Batch job. */
	export interface CloudJobFormProperties {

		/** The creation time of the job. */
		creationTime: FormControl<Date | null | undefined>,

		/** The display name for the job. */
		displayName: FormControl<string | null | undefined>,

		/** The ETag of the job. */
		eTag: FormControl<string | null | undefined>,

		/** A string that uniquely identifies the job within the account. The id can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. It is common to use a GUID for the id. */
		id: FormControl<string | null | undefined>,

		/** The last modified time of the job. */
		lastModified: FormControl<Date | null | undefined>,

		/** The previous state of the job. This property is not set if the job is in its initial Active state. */
		previousState: FormControl<CloudJobPreviousState | null | undefined>,

		/** The time at which the job entered its previous state. This property is not set if the job is in its initial Active state. */
		previousStateTransitionTime: FormControl<Date | null | undefined>,

		/** The priority of the job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. */
		priority: FormControl<number | null | undefined>,

		/** The current state of the job. */
		state: FormControl<CloudJobPreviousState | null | undefined>,

		/** The time at which the job entered its current state. */
		stateTransitionTime: FormControl<Date | null | undefined>,

		/** The URL of the job. */
		url: FormControl<string | null | undefined>,

		/** The flag that determines if this job will use tasks with dependencies. */
		usesTaskDependencies: FormControl<boolean | null | undefined>,
	}
	export function CreateCloudJobFormGroup() {
		return new FormGroup<CloudJobFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			eTag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			previousState: new FormControl<CloudJobPreviousState | null | undefined>(undefined),
			previousStateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<CloudJobPreviousState | null | undefined>(undefined),
			stateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			usesTaskDependencies: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An environment variable to be set on a task process. */
	export interface EnvironmentSetting {

		/** The name of the environment variable. */
		name?: string | null;

		/** The value of the environment variable. */
		value?: string | null;
	}

	/** An environment variable to be set on a task process. */
	export interface EnvironmentSettingFormProperties {

		/** The name of the environment variable. */
		name: FormControl<string | null | undefined>,

		/** The value of the environment variable. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentSettingFormGroup() {
		return new FormGroup<EnvironmentSettingFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A name-value pair associated with a Batch service resource. The Batch service does not assign any meaning to this metadata; it is solely for the use of user code. */
	export interface MetadataItem {

		/** The name of the metadata item. */
		name?: string | null;

		/** The value of the metadata item. */
		value?: string | null;
	}

	/** A name-value pair associated with a Batch service resource. The Batch service does not assign any meaning to this metadata; it is solely for the use of user code. */
	export interface MetadataItemFormProperties {

		/** The name of the metadata item. */
		name: FormControl<string | null | undefined>,

		/** The value of the metadata item. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateMetadataItemFormGroup() {
		return new FormGroup<MetadataItemFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CloudJobPreviousState { active = 0, disabling = 1, disabled = 2, enabling = 3, terminating = 4, completed = 5, deleting = 6 }


	/** Response to a CloudJobOperations.ListPreparationAndReleaseTaskStatus request. */
	export interface CloudJobListPreparationAndReleaseTaskStatusResult {

		/** The URL to get the next set of results. */
		'odata.nextLink'?: string | null;

		/** A list of Job Preparation and Job Release task execution information. */
		value?: Array<JobPreparationAndReleaseTaskExecutionInformation>;
	}

	/** Response to a CloudJobOperations.ListPreparationAndReleaseTaskStatus request. */
	export interface CloudJobListPreparationAndReleaseTaskStatusResultFormProperties {

		/** The URL to get the next set of results. */
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreateCloudJobListPreparationAndReleaseTaskStatusResultFormGroup() {
		return new FormGroup<CloudJobListPreparationAndReleaseTaskStatusResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of the Job Preparation and Job Release tasks on a compute node. */
	export interface JobPreparationAndReleaseTaskExecutionInformation {

		/** Contains information about the execution of a Job Preparation task on a compute node. */
		jobPreparationTaskExecutionInfo?: JobPreparationTaskExecutionInformation;

		/** Contains information about the execution of a Job Release task on a compute node. */
		jobReleaseTaskExecutionInfo?: JobReleaseTaskExecutionInformation;

		/** The id of the compute node to which this entry refers. */
		nodeId?: string | null;

		/** The URL of the compute node to which this entry refers. */
		nodeUrl?: string | null;

		/** The id of the pool containing the compute node to which this entry refers. */
		poolId?: string | null;
	}

	/** The status of the Job Preparation and Job Release tasks on a compute node. */
	export interface JobPreparationAndReleaseTaskExecutionInformationFormProperties {

		/** The id of the compute node to which this entry refers. */
		nodeId: FormControl<string | null | undefined>,

		/** The URL of the compute node to which this entry refers. */
		nodeUrl: FormControl<string | null | undefined>,

		/** The id of the pool containing the compute node to which this entry refers. */
		poolId: FormControl<string | null | undefined>,
	}
	export function CreateJobPreparationAndReleaseTaskExecutionInformationFormGroup() {
		return new FormGroup<JobPreparationAndReleaseTaskExecutionInformationFormProperties>({
			nodeId: new FormControl<string | null | undefined>(undefined),
			nodeUrl: new FormControl<string | null | undefined>(undefined),
			poolId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to a CloudJobOperation.List or ListFromJobSchedule request. */
	export interface CloudJobListResult {

		/** The URL to get the next set of results. */
		'odata.nextLink'?: string | null;

		/** The list of jobs. */
		value?: Array<CloudJob>;
	}

	/** Response to a CloudJobOperation.List or ListFromJobSchedule request. */
	export interface CloudJobListResultFormProperties {

		/** The URL to get the next set of results. */
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreateCloudJobListResultFormGroup() {
		return new FormGroup<CloudJobListResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A job schedule that allows recurring jobs by specifying when to run jobs and a specification used to create each job. */
	export interface CloudJobSchedule {

		/** The creation time of the job schedule. */
		creationTime?: Date | null;

		/** The display name for the schedule. */
		displayName?: string | null;

		/** The ETag of the job schedule. */
		eTag?: string | null;

		/** Specifies how tasks should be run in a job associated with a job schedule. */
		executionInfo?: JobScheduleExecutionInformation;

		/** A string that uniquely identifies the schedule within the account. A GUID is recommended. */
		id?: string | null;

		/** Specifies details of the jobs to be created on a schedule. */
		jobSpecification?: JobSpecification;

		/** The last modified time of the job schedule. */
		lastModified?: Date | null;

		/** A list of name-value pairs associated with the schedule as metadata. */
		metadata?: Array<MetadataItem>;

		/** The previous state of the job schedule. */
		previousState?: CloudJobSchedulePreviousState | null;

		/** The time at which the job schedule entered its previous state. */
		previousStateTransitionTime?: Date | null;

		/** The schedule according to which jobs will be created */
		schedule?: Schedule;

		/** The current state of the job schedule. */
		state?: CloudJobSchedulePreviousState | null;

		/** The time at which the job schedule entered the current state. */
		stateTransitionTime?: Date | null;

		/** Resource usage statistics for a job schedule. */
		stats?: JobScheduleStatistics;

		/** The URL of the job schedule. */
		url?: string | null;
	}

	/** A job schedule that allows recurring jobs by specifying when to run jobs and a specification used to create each job. */
	export interface CloudJobScheduleFormProperties {

		/** The creation time of the job schedule. */
		creationTime: FormControl<Date | null | undefined>,

		/** The display name for the schedule. */
		displayName: FormControl<string | null | undefined>,

		/** The ETag of the job schedule. */
		eTag: FormControl<string | null | undefined>,

		/** A string that uniquely identifies the schedule within the account. A GUID is recommended. */
		id: FormControl<string | null | undefined>,

		/** The last modified time of the job schedule. */
		lastModified: FormControl<Date | null | undefined>,

		/** The previous state of the job schedule. */
		previousState: FormControl<CloudJobSchedulePreviousState | null | undefined>,

		/** The time at which the job schedule entered its previous state. */
		previousStateTransitionTime: FormControl<Date | null | undefined>,

		/** The current state of the job schedule. */
		state: FormControl<CloudJobSchedulePreviousState | null | undefined>,

		/** The time at which the job schedule entered the current state. */
		stateTransitionTime: FormControl<Date | null | undefined>,

		/** The URL of the job schedule. */
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

	export enum CloudJobSchedulePreviousState { active = 0, completed = 1, disabled = 2, terminating = 3, deleting = 4 }


	/** Response to a CloudJobScheduleOperation.List request. */
	export interface CloudJobScheduleListResult {

		/** The URL to get the next set of results. */
		'odata.nextLink'?: string | null;

		/** The list of job schedules. */
		value?: Array<CloudJobSchedule>;
	}

	/** Response to a CloudJobScheduleOperation.List request. */
	export interface CloudJobScheduleListResultFormProperties {

		/** The URL to get the next set of results. */
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreateCloudJobScheduleListResultFormGroup() {
		return new FormGroup<CloudJobScheduleListResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A pool in the Azure Batch service. */
	export interface CloudPool {

		/** Whether the pool is resizing. */
		allocationState?: CloudPoolAllocationState | null;

		/** The time at which the pool entered its current allocation state. */
		allocationStateTransitionTime?: Date | null;

		/** The list of application packages to be installed on each compute node in the pool. */
		applicationPackageReferences?: Array<ApplicationPackageReference>;

		/** A time interval for the desired AutoScale evaluation period in the pool. */
		autoScaleEvaluationInterval?: string | null;

		/** A formula for the desired number of compute nodes in the pool. */
		autoScaleFormula?: string | null;

		/** The results and errors from an execution of a pool autoscale formula. */
		autoScaleRun?: AutoScaleRun;

		/** The list of certificates to be installed on each compute node in the pool. */
		certificateReferences?: Array<CertificateReference>;

		/** The configuration for nodes in a pool based on the Azure Cloud Services platform. */
		cloudServiceConfiguration?: CloudServiceConfiguration;

		/** The creation time of the pool. */
		creationTime?: Date | null;

		/** The number of compute nodes currently in the pool. */
		currentDedicated?: number | null;

		/** The display name for the pool. */
		displayName?: string | null;

		/** The ETag of the pool. */
		eTag?: string | null;

		/** Whether the pool size should automatically adjust over time. If true, the AutoScaleFormula property must be set. If false, the TargetDedicated property must be set. */
		enableAutoScale?: boolean | null;

		/** Whether the pool permits direct communication between nodes. */
		enableInterNodeCommunication?: boolean | null;

		/** A string that uniquely identifies the pool within the account. The id can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. */
		id?: string | null;

		/** The last modified time of the pool. */
		lastModified?: Date | null;

		/** The maximum number of tasks that can run concurrently on a single compute node in the pool. */
		maxTasksPerNode?: number | null;

		/** A list of name-value pairs associated with the pool as metadata. */
		metadata?: Array<MetadataItem>;

		/** An error that occurred when resizing a pool. */
		resizeError?: ResizeError;

		/** The timeout for allocation of compute nodes to the pool. In a Get Pool operation, this is the timeout for the most recent resize operation. The default value is 10 minutes. */
		resizeTimeout?: string | null;

		/** A task which is run when a compute node joins a pool in the Azure Batch service, or when the compute node is rebooted or reimaged. */
		startTask?: StartTask;

		/** The current state of the pool. */
		state?: CloudPoolState | null;

		/** The time at which the pool entered its current state. */
		stateTransitionTime?: Date | null;

		/** Contains utilization and resource usage statistics for the lifetime of a pool. */
		stats?: PoolStatistics;

		/** The desired number of compute nodes in the pool. This property must have the default value if EnableAutoScale is true. It is required if EnableAutoScale is false. */
		targetDedicated?: number | null;

		/** Specifies how tasks should be distributed across compute nodes. */
		taskSchedulingPolicy?: TaskSchedulingPolicy;

		/** The URL of the pool. */
		url?: string | null;

		/** The configuration for compute nodes in a pool based on the Azure Virtual Machines infrastructure. */
		virtualMachineConfiguration?: VirtualMachineConfiguration;

		/** The size of virtual machines in the pool. All virtual machines in a pool are the same size. */
		vmSize?: string | null;
	}

	/** A pool in the Azure Batch service. */
	export interface CloudPoolFormProperties {

		/** Whether the pool is resizing. */
		allocationState: FormControl<CloudPoolAllocationState | null | undefined>,

		/** The time at which the pool entered its current allocation state. */
		allocationStateTransitionTime: FormControl<Date | null | undefined>,

		/** A time interval for the desired AutoScale evaluation period in the pool. */
		autoScaleEvaluationInterval: FormControl<string | null | undefined>,

		/** A formula for the desired number of compute nodes in the pool. */
		autoScaleFormula: FormControl<string | null | undefined>,

		/** The creation time of the pool. */
		creationTime: FormControl<Date | null | undefined>,

		/** The number of compute nodes currently in the pool. */
		currentDedicated: FormControl<number | null | undefined>,

		/** The display name for the pool. */
		displayName: FormControl<string | null | undefined>,

		/** The ETag of the pool. */
		eTag: FormControl<string | null | undefined>,

		/** Whether the pool size should automatically adjust over time. If true, the AutoScaleFormula property must be set. If false, the TargetDedicated property must be set. */
		enableAutoScale: FormControl<boolean | null | undefined>,

		/** Whether the pool permits direct communication between nodes. */
		enableInterNodeCommunication: FormControl<boolean | null | undefined>,

		/** A string that uniquely identifies the pool within the account. The id can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. */
		id: FormControl<string | null | undefined>,

		/** The last modified time of the pool. */
		lastModified: FormControl<Date | null | undefined>,

		/** The maximum number of tasks that can run concurrently on a single compute node in the pool. */
		maxTasksPerNode: FormControl<number | null | undefined>,

		/** The timeout for allocation of compute nodes to the pool. In a Get Pool operation, this is the timeout for the most recent resize operation. The default value is 10 minutes. */
		resizeTimeout: FormControl<string | null | undefined>,

		/** The current state of the pool. */
		state: FormControl<CloudPoolState | null | undefined>,

		/** The time at which the pool entered its current state. */
		stateTransitionTime: FormControl<Date | null | undefined>,

		/** The desired number of compute nodes in the pool. This property must have the default value if EnableAutoScale is true. It is required if EnableAutoScale is false. */
		targetDedicated: FormControl<number | null | undefined>,

		/** The URL of the pool. */
		url: FormControl<string | null | undefined>,

		/** The size of virtual machines in the pool. All virtual machines in a pool are the same size. */
		vmSize: FormControl<string | null | undefined>,
	}
	export function CreateCloudPoolFormGroup() {
		return new FormGroup<CloudPoolFormProperties>({
			allocationState: new FormControl<CloudPoolAllocationState | null | undefined>(undefined),
			allocationStateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			autoScaleEvaluationInterval: new FormControl<string | null | undefined>(undefined),
			autoScaleFormula: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			currentDedicated: new FormControl<number | null | undefined>(undefined),
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
			targetDedicated: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			vmSize: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CloudPoolAllocationState { steady = 0, resizing = 1, stopping = 2 }

	export enum CloudPoolState { active = 0, deleting = 1, upgrading = 2 }


	/** Response to a CloudPoolOperations.List request. */
	export interface CloudPoolListResult {

		/** The URL to get the next set of results. */
		'odata.nextLink'?: string | null;

		/** The list of pools. */
		value?: Array<CloudPool>;
	}

	/** Response to a CloudPoolOperations.List request. */
	export interface CloudPoolListResultFormProperties {

		/** The URL to get the next set of results. */
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreateCloudPoolListResultFormGroup() {
		return new FormGroup<CloudPoolListResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for nodes in a pool based on the Azure Cloud Services platform. */
	export interface CloudServiceConfiguration {

		/** The Azure Guest OS Version currently installed on the virtual machines in the pool. This may differ from TargetOSVersion if the pool state is Upgrading. */
		currentOSVersion?: string | null;

		/**
		 * The Azure Guest OS family to be installed on the virtual machines in the pool.
		 * Required
		 */
		osFamily: string;

		/** The Azure Guest OS version to be installed on the virtual machines in the pool. The default value is * which specifies the latest operating system version for the specified OS family. */
		targetOSVersion?: string | null;
	}

	/** The configuration for nodes in a pool based on the Azure Cloud Services platform. */
	export interface CloudServiceConfigurationFormProperties {

		/** The Azure Guest OS Version currently installed on the virtual machines in the pool. This may differ from TargetOSVersion if the pool state is Upgrading. */
		currentOSVersion: FormControl<string | null | undefined>,

		/**
		 * The Azure Guest OS family to be installed on the virtual machines in the pool.
		 * Required
		 */
		osFamily: FormControl<string | null | undefined>,

		/** The Azure Guest OS version to be installed on the virtual machines in the pool. The default value is * which specifies the latest operating system version for the specified OS family. */
		targetOSVersion: FormControl<string | null | undefined>,
	}
	export function CreateCloudServiceConfigurationFormGroup() {
		return new FormGroup<CloudServiceConfigurationFormProperties>({
			currentOSVersion: new FormControl<string | null | undefined>(undefined),
			osFamily: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetOSVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Azure Batch task. */
	export interface CloudTask {

		/** A locality hint that can be used by the Batch service to select a compute node on which to start a task. */
		affinityInfo?: AffinityInformation;

		/** The command line of the task. For multi-instance tasks, the command line is executed on the primary subtask after all the subtasks have finished executing the coordination command line. */
		commandLine?: string | null;

		/** Constraints to apply to the Job Manager task. */
		constraints?: TaskConstraints;

		/** The creation time of the task. */
		creationTime?: Date | null;

		/** Specifies any dependencies of a task. Any task that is explicitly specified or within a dependency range must complete before the dependant task will be scheduled. */
		dependsOn?: TaskDependencies;

		/** A display name for the task. */
		displayName?: string | null;

		/** The ETag of the task. */
		eTag?: string | null;

		/** A list of environment variable settings for the task. */
		environmentSettings?: Array<EnvironmentSetting>;

		/** Information about the execution of a task. */
		executionInfo?: TaskExecutionInformation;

		/** A string that uniquely identifies the task within the job. The id can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. */
		id?: string | null;

		/** The last modified time of the task. */
		lastModified?: Date | null;

		/** Settings which specify how to run a multi-instance task. Multi-instance tasks are commonly used to support MPI tasks. */
		multiInstanceSettings?: MultiInstanceSettings;

		/** Information about the compute node on which a task ran. */
		nodeInfo?: ComputeNodeInformation;

		/** The previous state of the task. This property is not set if the task is in its initial Active state. */
		previousState?: CloudTaskPreviousState | null;

		/** The time at which the task entered its previous state. This property is not set if the task is in its initial Active state. */
		previousStateTransitionTime?: Date | null;

		/** A list of files that the Batch service will download to the compute node before running the command line. For multi-instance tasks, the resource files will only be downloaded to the compute node on which the primary subtask is executed. */
		resourceFiles?: Array<ResourceFile>;

		/** Whether to run the task in elevated mode. */
		runElevated?: boolean | null;

		/** The current state of the task. */
		state?: CloudTaskPreviousState | null;

		/** The time at which the task entered its current state. */
		stateTransitionTime?: Date | null;

		/** Resource usage statistics for a task. */
		stats?: TaskStatistics;

		/** The URL of the task. */
		url?: string | null;
	}

	/** An Azure Batch task. */
	export interface CloudTaskFormProperties {

		/** The command line of the task. For multi-instance tasks, the command line is executed on the primary subtask after all the subtasks have finished executing the coordination command line. */
		commandLine: FormControl<string | null | undefined>,

		/** The creation time of the task. */
		creationTime: FormControl<Date | null | undefined>,

		/** A display name for the task. */
		displayName: FormControl<string | null | undefined>,

		/** The ETag of the task. */
		eTag: FormControl<string | null | undefined>,

		/** A string that uniquely identifies the task within the job. The id can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. */
		id: FormControl<string | null | undefined>,

		/** The last modified time of the task. */
		lastModified: FormControl<Date | null | undefined>,

		/** The previous state of the task. This property is not set if the task is in its initial Active state. */
		previousState: FormControl<CloudTaskPreviousState | null | undefined>,

		/** The time at which the task entered its previous state. This property is not set if the task is in its initial Active state. */
		previousStateTransitionTime: FormControl<Date | null | undefined>,

		/** Whether to run the task in elevated mode. */
		runElevated: FormControl<boolean | null | undefined>,

		/** The current state of the task. */
		state: FormControl<CloudTaskPreviousState | null | undefined>,

		/** The time at which the task entered its current state. */
		stateTransitionTime: FormControl<Date | null | undefined>,

		/** The URL of the task. */
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
			runElevated: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<CloudTaskPreviousState | null | undefined>(undefined),
			stateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CloudTaskPreviousState { active = 0, preparing = 1, running = 2, completed = 3 }


	/** A file to be downloaded from Azure blob storage to a compute node. */
	export interface ResourceFile {

		/** The URL of the file within Azure Blob Storage. This URL should include a shared access signature if the blob is not publicly readable. */
		blobSource?: string | null;

		/** The file mode attribute in octal format. This property will be ignored if it is specified for a resourceFile which will be downloaded to a Windows compute node. */
		fileMode?: string | null;

		/** The location to which to download the file, relative to the task's working directory. */
		filePath?: string | null;
	}

	/** A file to be downloaded from Azure blob storage to a compute node. */
	export interface ResourceFileFormProperties {

		/** The URL of the file within Azure Blob Storage. This URL should include a shared access signature if the blob is not publicly readable. */
		blobSource: FormControl<string | null | undefined>,

		/** The file mode attribute in octal format. This property will be ignored if it is specified for a resourceFile which will be downloaded to a Windows compute node. */
		fileMode: FormControl<string | null | undefined>,

		/** The location to which to download the file, relative to the task's working directory. */
		filePath: FormControl<string | null | undefined>,
	}
	export function CreateResourceFileFormGroup() {
		return new FormGroup<ResourceFileFormProperties>({
			blobSource: new FormControl<string | null | undefined>(undefined),
			fileMode: new FormControl<string | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to a CloudTaskOperations.List request. */
	export interface CloudTaskListResult {

		/** The URL to get the next set of results. */
		'odata.nextLink'?: string | null;

		/** The list of tasks. */
		value?: Array<CloudTask>;
	}

	/** Response to a CloudTaskOperations.List request. */
	export interface CloudTaskListResultFormProperties {

		/** The URL to get the next set of results. */
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreateCloudTaskListResultFormGroup() {
		return new FormGroup<CloudTaskListResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to a CloudTaskOperations.ListSubtasks request. */
	export interface CloudTaskListSubtasksResult {

		/** The list of information of subtasks. */
		value?: Array<SubtaskInformation>;
	}

	/** Response to a CloudTaskOperations.ListSubtasks request. */
	export interface CloudTaskListSubtasksResultFormProperties {
	}
	export function CreateCloudTaskListSubtasksResultFormGroup() {
		return new FormGroup<CloudTaskListSubtasksResultFormProperties>({
		});

	}


	/** Information about an Azure Batch subtask. */
	export interface SubtaskInformation {

		/** The time at which the subtask completed. This property is set only if the subtask is in the Completed state. */
		endTime?: Date | null;

		/** The exit code of the subtask. This property is set only if the subtask is in the Completed state. */
		exitCode?: number | null;

		/** The id of the subtask. */
		id?: number | null;

		/** Information about the compute node on which a task ran. */
		nodeInfo?: ComputeNodeInformation;

		/** The previous state of the subtask. This property is not set if the subtask is in its initial Active state. */
		previousState?: CloudTaskPreviousState | null;

		/** The time at which the subtask entered its previous state. This property is not set if the subtask is in its initial Active state. */
		previousStateTransitionTime?: Date | null;

		/** Information about an error when scheduling a task. */
		schedulingError?: TaskSchedulingError;

		/** The time at which the subtask started running. If the subtask has been restarted or retried, this is the most recent time at which the subtask started running. */
		startTime?: Date | null;

		/** The current state of the subtask. */
		state?: CloudTaskPreviousState | null;

		/** The time at which the subtask entered its current state. */
		stateTransitionTime?: Date | null;
	}

	/** Information about an Azure Batch subtask. */
	export interface SubtaskInformationFormProperties {

		/** The time at which the subtask completed. This property is set only if the subtask is in the Completed state. */
		endTime: FormControl<Date | null | undefined>,

		/** The exit code of the subtask. This property is set only if the subtask is in the Completed state. */
		exitCode: FormControl<number | null | undefined>,

		/** The id of the subtask. */
		id: FormControl<number | null | undefined>,

		/** The previous state of the subtask. This property is not set if the subtask is in its initial Active state. */
		previousState: FormControl<CloudTaskPreviousState | null | undefined>,

		/** The time at which the subtask entered its previous state. This property is not set if the subtask is in its initial Active state. */
		previousStateTransitionTime: FormControl<Date | null | undefined>,

		/** The time at which the subtask started running. If the subtask has been restarted or retried, this is the most recent time at which the subtask started running. */
		startTime: FormControl<Date | null | undefined>,

		/** The current state of the subtask. */
		state: FormControl<CloudTaskPreviousState | null | undefined>,

		/** The time at which the subtask entered its current state. */
		stateTransitionTime: FormControl<Date | null | undefined>,
	}
	export function CreateSubtaskInformationFormGroup() {
		return new FormGroup<SubtaskInformationFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			previousState: new FormControl<CloudTaskPreviousState | null | undefined>(undefined),
			previousStateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<CloudTaskPreviousState | null | undefined>(undefined),
			stateTransitionTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A compute node in the Batch service. */
	export interface ComputeNode {

		/** An identifier which can be passed in the Add Task API to request that the task be scheduled close to this compute node. */
		affinityId?: string | null;

		/** The time at which this compute node was allocated to the pool. */
		allocationTime?: Date | null;

		/** The list of certificates installed on the compute node. */
		certificateReferences?: Array<CertificateReference>;

		/** The list of errors that are currently being encountered by the compute node. */
		errors?: Array<ComputeNodeError>;

		/** The id of the compute node. */
		id?: string | null;

		/** The IP address that other compute nodes can use to communicate with this compute node. */
		ipAddress?: string | null;

		/** The time at which the compute node was started. */
		lastBootTime?: Date | null;

		/** The list of tasks that are currently running on the compute node. */
		recentTasks?: Array<TaskInformation>;

		/** The total number of currently running job tasks on the compute node. This includes Job Preparation, Job Release, and Job Manager tasks, but not the pool start task. */
		runningTasksCount?: number | null;

		/** Whether the compute node should be available for task scheduling. */
		schedulingState?: ComputeNodeSchedulingState | null;

		/** A task which is run when a compute node joins a pool in the Azure Batch service, or when the compute node is rebooted or reimaged. */
		startTask?: StartTask;

		/** Information about a start task running on a compute node. */
		startTaskInfo?: StartTaskInformation;

		/** The current state of the compute node. */
		state?: ComputeNodeState | null;

		/** The time at which the compute node entered its current state. */
		stateTransitionTime?: Date | null;

		/** The total number of job tasks completed on the compute node. This includes Job Preparation, Job Release and Job Manager tasks, but not the pool start task. */
		totalTasksRun?: number | null;

		/** The total number of job tasks which completed successfully (with exitCode 0) on the compute node. This includes Job Preparation, Job Release, and Job Manager tasks, but not the pool start task. */
		totalTasksSucceeded?: number | null;

		/** The URL of the compute node. */
		url?: string | null;

		/** The size of the virtual machine hosting the compute node. */
		vmSize?: string | null;
	}

	/** A compute node in the Batch service. */
	export interface ComputeNodeFormProperties {

		/** An identifier which can be passed in the Add Task API to request that the task be scheduled close to this compute node. */
		affinityId: FormControl<string | null | undefined>,

		/** The time at which this compute node was allocated to the pool. */
		allocationTime: FormControl<Date | null | undefined>,

		/** The id of the compute node. */
		id: FormControl<string | null | undefined>,

		/** The IP address that other compute nodes can use to communicate with this compute node. */
		ipAddress: FormControl<string | null | undefined>,

		/** The time at which the compute node was started. */
		lastBootTime: FormControl<Date | null | undefined>,

		/** The total number of currently running job tasks on the compute node. This includes Job Preparation, Job Release, and Job Manager tasks, but not the pool start task. */
		runningTasksCount: FormControl<number | null | undefined>,

		/** Whether the compute node should be available for task scheduling. */
		schedulingState: FormControl<ComputeNodeSchedulingState | null | undefined>,

		/** The current state of the compute node. */
		state: FormControl<ComputeNodeState | null | undefined>,

		/** The time at which the compute node entered its current state. */
		stateTransitionTime: FormControl<Date | null | undefined>,

		/** The total number of job tasks completed on the compute node. This includes Job Preparation, Job Release and Job Manager tasks, but not the pool start task. */
		totalTasksRun: FormControl<number | null | undefined>,

		/** The total number of job tasks which completed successfully (with exitCode 0) on the compute node. This includes Job Preparation, Job Release, and Job Manager tasks, but not the pool start task. */
		totalTasksSucceeded: FormControl<number | null | undefined>,

		/** The URL of the compute node. */
		url: FormControl<string | null | undefined>,

		/** The size of the virtual machine hosting the compute node. */
		vmSize: FormControl<string | null | undefined>,
	}
	export function CreateComputeNodeFormGroup() {
		return new FormGroup<ComputeNodeFormProperties>({
			affinityId: new FormControl<string | null | undefined>(undefined),
			allocationTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
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


	/** An error encountered by a compute node. */
	export interface ComputeNodeError {

		/** An identifier for the compute node error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** The list of additional error details related to the compute node error. */
		errorDetails?: Array<NameValuePair>;

		/** A message describing the compute node error, intended to be suitable for display in a user interface. */
		message?: string | null;
	}

	/** An error encountered by a compute node. */
	export interface ComputeNodeErrorFormProperties {

		/** An identifier for the compute node error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the compute node error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateComputeNodeErrorFormGroup() {
		return new FormGroup<ComputeNodeErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a task running on a compute node. */
	export interface TaskInformation {

		/** Information about the execution of a task. */
		executionInfo?: TaskExecutionInformation;

		/** The id of the job to which the task belongs. */
		jobId?: string | null;

		/** The id of the subtask if the task is a multi-instance task. */
		subtaskId?: number | null;

		/** The id of the task. */
		taskId?: string | null;

		/**
		 * The current state of the task.
		 * Required
		 */
		taskState: CloudTaskPreviousState;

		/** The URL of the task. */
		taskUrl?: string | null;
	}

	/** Information about a task running on a compute node. */
	export interface TaskInformationFormProperties {

		/** The id of the job to which the task belongs. */
		jobId: FormControl<string | null | undefined>,

		/** The id of the subtask if the task is a multi-instance task. */
		subtaskId: FormControl<number | null | undefined>,

		/** The id of the task. */
		taskId: FormControl<string | null | undefined>,

		/**
		 * The current state of the task.
		 * Required
		 */
		taskState: FormControl<CloudTaskPreviousState | null | undefined>,

		/** The URL of the task. */
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

	export enum ComputeNodeSchedulingState { enabled = 0, disabled = 1 }

	export enum ComputeNodeState { idle = 0, rebooting = 1, reimaging = 2, running = 3, unusable = 4, creating = 5, starting = 6, waitingforstarttask = 7, starttaskfailed = 8, unknown = 9, leavingpool = 10, offline = 11 }


	/** Response to a ComputeNodeOperation.GetRemoteLoginSettings request. */
	export interface ComputeNodeGetRemoteLoginSettingsResult {

		/**
		 * The IP address used for remote login to the compute node.
		 * Required
		 */
		remoteLoginIPAddress: string;

		/**
		 * The port used for remote login to the compute node.
		 * Required
		 */
		remoteLoginPort: number;
	}

	/** Response to a ComputeNodeOperation.GetRemoteLoginSettings request. */
	export interface ComputeNodeGetRemoteLoginSettingsResultFormProperties {

		/**
		 * The IP address used for remote login to the compute node.
		 * Required
		 */
		remoteLoginIPAddress: FormControl<string | null | undefined>,

		/**
		 * The port used for remote login to the compute node.
		 * Required
		 */
		remoteLoginPort: FormControl<number | null | undefined>,
	}
	export function CreateComputeNodeGetRemoteLoginSettingsResultFormGroup() {
		return new FormGroup<ComputeNodeGetRemoteLoginSettingsResultFormProperties>({
			remoteLoginIPAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			remoteLoginPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the compute node on which a task ran. */
	export interface ComputeNodeInformation {

		/** An identifier for the compute node on which the task ran, which can be passed when adding a task to request that the task be scheduled close to this compute node. */
		affinityId?: string | null;

		/** The id of the node on which the task ran. */
		nodeId?: string | null;

		/** The URL of the node on which the task ran. */
		nodeUrl?: string | null;

		/** The id of the pool on which the task ran. */
		poolId?: string | null;

		/** The root directory of the task on the compute node. */
		taskRootDirectory?: string | null;

		/** The URL to the root directory of the task on the compute node. */
		taskRootDirectoryUrl?: string | null;
	}

	/** Information about the compute node on which a task ran. */
	export interface ComputeNodeInformationFormProperties {

		/** An identifier for the compute node on which the task ran, which can be passed when adding a task to request that the task be scheduled close to this compute node. */
		affinityId: FormControl<string | null | undefined>,

		/** The id of the node on which the task ran. */
		nodeId: FormControl<string | null | undefined>,

		/** The URL of the node on which the task ran. */
		nodeUrl: FormControl<string | null | undefined>,

		/** The id of the pool on which the task ran. */
		poolId: FormControl<string | null | undefined>,

		/** The root directory of the task on the compute node. */
		taskRootDirectory: FormControl<string | null | undefined>,

		/** The URL to the root directory of the task on the compute node. */
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


	/** Response to a ComputeNodeOperation.List request. */
	export interface ComputeNodeListResult {

		/** The URL to get the next set of results. */
		'odata.nextLink'?: string | null;

		/** The list of compute nodes. */
		value?: Array<ComputeNode>;
	}

	/** Response to a ComputeNodeOperation.List request. */
	export interface ComputeNodeListResultFormProperties {

		/** The URL to get the next set of results. */
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreateComputeNodeListResultFormGroup() {
		return new FormGroup<ComputeNodeListResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An user account on a compute node. */
	export interface ComputeNodeUser {

		/** The time at which the account should expire. If omitted, the default is 1 day from the current time. */
		expiryTime?: Date | null;

		/** Whether the account should be an administrator on the compute node. */
		isAdmin?: boolean | null;

		/**
		 * The user name of the account.
		 * Required
		 */
		name: string;

		/** The password of the account. */
		password?: string | null;

		/** The SSH public key that can be used for remote login to the compute node. */
		sshPublicKey?: string | null;
	}

	/** An user account on a compute node. */
	export interface ComputeNodeUserFormProperties {

		/** The time at which the account should expire. If omitted, the default is 1 day from the current time. */
		expiryTime: FormControl<Date | null | undefined>,

		/** Whether the account should be an administrator on the compute node. */
		isAdmin: FormControl<boolean | null | undefined>,

		/**
		 * The user name of the account.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The password of the account. */
		password: FormControl<string | null | undefined>,

		/** The SSH public key that can be used for remote login to the compute node. */
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


	/** An error encountered by the Batch service when deleting a certificate. */
	export interface DeleteCertificateError {

		/** An identifier for the certificate deletion error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** A message describing the certificate deletion error, intended to be suitable for display in a user interface. */
		message?: string | null;

		/** A list of additional error details related to the certificate deletion error. */
		values?: Array<NameValuePair>;
	}

	/** An error encountered by the Batch service when deleting a certificate. */
	export interface DeleteCertificateErrorFormProperties {

		/** An identifier for the certificate deletion error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the certificate deletion error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCertificateErrorFormGroup() {
		return new FormGroup<DeleteCertificateErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error message received in an Azure Batch error response. */
	export interface ErrorMessage {

		/** The language code of the error message */
		lang?: string | null;

		/** The text of the message. */
		value?: string | null;
	}

	/** An error message received in an Azure Batch error response. */
	export interface ErrorMessageFormProperties {

		/** The language code of the error message */
		lang: FormControl<string | null | undefined>,

		/** The text of the message. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateErrorMessageFormGroup() {
		return new FormGroup<ErrorMessageFormProperties>({
			lang: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of a file on a compute node. */
	export interface FileProperties {

		/**
		 * The length of the file.
		 * Required
		 */
		contentLength: number;

		/** The content type of the file. */
		contentType?: string | null;

		/** The file creation time. */
		creationTime?: Date | null;

		/** The file mode attribute in octal format. This property will be returned only from a Linux compute node. */
		fileMode?: string | null;

		/**
		 * The time at which the file was last modified.
		 * Required
		 */
		lastModified: Date;
	}

	/** The properties of a file on a compute node. */
	export interface FilePropertiesFormProperties {

		/**
		 * The length of the file.
		 * Required
		 */
		contentLength: FormControl<number | null | undefined>,

		/** The content type of the file. */
		contentType: FormControl<string | null | undefined>,

		/** The file creation time. */
		creationTime: FormControl<Date | null | undefined>,

		/** The file mode attribute in octal format. This property will be returned only from a Linux compute node. */
		fileMode: FormControl<string | null | undefined>,

		/**
		 * The time at which the file was last modified.
		 * Required
		 */
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


	/** An Azure Batch job to add. */
	export interface JobAddParameter {

		/** The list of common environment variable settings. These environment variables are set for all tasks in the job (including the Job Manager, Job Preparation and Job Release tasks). */
		commonEnvironmentSettings?: Array<EnvironmentSetting>;

		/** Specifies the execution constraints for jobs created on a schedule. */
		constraints?: JobConstraints;

		/** The display name for the job. */
		displayName?: string | null;

		/**
		 * A string that uniquely identifies the job within the account. The id can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. It is common to use a GUID for the id.
		 * Required
		 */
		id: string;

		/** Specifies details of a Job Manager task. */
		jobManagerTask?: JobManagerTask;

		/** A Job Preparation task to run before any tasks of the job on any given compute node. */
		jobPreparationTask?: JobPreparationTask;

		/** A Job Release task to run on job completion on any compute node where the job has run. */
		jobReleaseTask?: JobReleaseTask;

		/** A list of name-value pairs associated with the job as metadata. */
		metadata?: Array<MetadataItem>;

		/**
		 * Specifies how a job should be assigned to a pool.
		 * Required
		 */
		poolInfo: PoolInformation;

		/** The priority of the job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. */
		priority?: number | null;

		/** The flag that determines if this job will use tasks with dependencies. */
		usesTaskDependencies?: boolean | null;
	}

	/** An Azure Batch job to add. */
	export interface JobAddParameterFormProperties {

		/** The display name for the job. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * A string that uniquely identifies the job within the account. The id can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. It is common to use a GUID for the id.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The priority of the job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. */
		priority: FormControl<number | null | undefined>,

		/** The flag that determines if this job will use tasks with dependencies. */
		usesTaskDependencies: FormControl<boolean | null | undefined>,
	}
	export function CreateJobAddParameterFormGroup() {
		return new FormGroup<JobAddParameterFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			priority: new FormControl<number | null | undefined>(undefined),
			usesTaskDependencies: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the execution constraints for jobs created on a schedule. */
	export interface JobConstraints {

		/** The maximum number of times each task may be retried. The Batch service retries a task if its exit code is nonzero. */
		maxTaskRetryCount?: number | null;

		/** The maximum elapsed time that the job may run, measured from the time the job starts. If the job does not complete within the time limit, the Batch service terminates it and any tasks that are still running. */
		maxWallClockTime?: string | null;
	}

	/** Specifies the execution constraints for jobs created on a schedule. */
	export interface JobConstraintsFormProperties {

		/** The maximum number of times each task may be retried. The Batch service retries a task if its exit code is nonzero. */
		maxTaskRetryCount: FormControl<number | null | undefined>,

		/** The maximum elapsed time that the job may run, measured from the time the job starts. If the job does not complete within the time limit, the Batch service terminates it and any tasks that are still running. */
		maxWallClockTime: FormControl<string | null | undefined>,
	}
	export function CreateJobConstraintsFormGroup() {
		return new FormGroup<JobConstraintsFormProperties>({
			maxTaskRetryCount: new FormControl<number | null | undefined>(undefined),
			maxWallClockTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters for a CloudJobOperations.Disable request. */
	export interface JobDisableParameter {

		/**
		 * What to do with active tasks associated with the job.
		 * Required
		 */
		disableTasks: JobDisableParameterDisableTasks;
	}

	/** Parameters for a CloudJobOperations.Disable request. */
	export interface JobDisableParameterFormProperties {

		/**
		 * What to do with active tasks associated with the job.
		 * Required
		 */
		disableTasks: FormControl<JobDisableParameterDisableTasks | null | undefined>,
	}
	export function CreateJobDisableParameterFormGroup() {
		return new FormGroup<JobDisableParameterFormProperties>({
			disableTasks: new FormControl<JobDisableParameterDisableTasks | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JobDisableParameterDisableTasks { requeue = 0, terminate = 1, wait = 2 }


	/** Contains information about the execution of a job in the Azure Batch service. */
	export interface JobExecutionInformation {

		/** The completion time of the job. This property is set only if the job is in the completed state. */
		endTime?: Date | null;

		/** The id of the pool to which this job is assigned. */
		poolId?: string | null;

		/** An error encountered by the Batch service when scheduling a job. */
		schedulingError?: JobSchedulingError;

		/**
		 * The start time of the job.
		 * Required
		 */
		startTime: Date;

		/** A string describing the reason the job ended. */
		terminateReason?: string | null;
	}

	/** Contains information about the execution of a job in the Azure Batch service. */
	export interface JobExecutionInformationFormProperties {

		/** The completion time of the job. This property is set only if the job is in the completed state. */
		endTime: FormControl<Date | null | undefined>,

		/** The id of the pool to which this job is assigned. */
		poolId: FormControl<string | null | undefined>,

		/**
		 * The start time of the job.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/** A string describing the reason the job ended. */
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


	/** Specifies details of a Job Manager task. */
	export interface JobManagerTask {

		/** The command line of the Job Manager task. */
		commandLine?: string | null;

		/** Constraints to apply to the Job Manager task. */
		constraints?: TaskConstraints;

		/** The display name of the Job Manager task. */
		displayName?: string | null;

		/** A list of environment variable settings for the Job Manager task. */
		environmentSettings?: Array<EnvironmentSetting>;

		/** A string that uniquely identifies the Job Manager task. A GUID is recommended. */
		id?: string | null;

		/** Whether completion of the Job Manager task signifies completion of the entire job. */
		killJobOnCompletion?: boolean | null;

		/** A list of files that the Batch service will download to the compute node before running the command line. */
		resourceFiles?: Array<ResourceFile>;

		/** Whether to run the Job Manager task in elevated mode. The default value is false. */
		runElevated?: boolean | null;

		/** Whether the Job Manager task requires exclusive use of the compute node where it runs. If true, no other tasks will run on the same compute node for as long as the Job Manager is running. If false, other tasks can run simultaneously with the Job Manager on a compute node. (The Job Manager task counts normally against the node's concurrent task limit, so this is only relevant if the node allows multiple concurrent tasks.) */
		runExclusive?: boolean | null;
	}

	/** Specifies details of a Job Manager task. */
	export interface JobManagerTaskFormProperties {

		/** The command line of the Job Manager task. */
		commandLine: FormControl<string | null | undefined>,

		/** The display name of the Job Manager task. */
		displayName: FormControl<string | null | undefined>,

		/** A string that uniquely identifies the Job Manager task. A GUID is recommended. */
		id: FormControl<string | null | undefined>,

		/** Whether completion of the Job Manager task signifies completion of the entire job. */
		killJobOnCompletion: FormControl<boolean | null | undefined>,

		/** Whether to run the Job Manager task in elevated mode. The default value is false. */
		runElevated: FormControl<boolean | null | undefined>,

		/** Whether the Job Manager task requires exclusive use of the compute node where it runs. If true, no other tasks will run on the same compute node for as long as the Job Manager is running. If false, other tasks can run simultaneously with the Job Manager on a compute node. (The Job Manager task counts normally against the node's concurrent task limit, so this is only relevant if the node allows multiple concurrent tasks.) */
		runExclusive: FormControl<boolean | null | undefined>,
	}
	export function CreateJobManagerTaskFormGroup() {
		return new FormGroup<JobManagerTaskFormProperties>({
			commandLine: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			killJobOnCompletion: new FormControl<boolean | null | undefined>(undefined),
			runElevated: new FormControl<boolean | null | undefined>(undefined),
			runExclusive: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Parameters for a CloudJobOperations.Patch request. */
	export interface JobPatchParameter {

		/** Specifies the execution constraints for jobs created on a schedule. */
		constraints?: JobConstraints;

		/** A list of name-value pairs associated with the job as metadata. If omitted, the existing job metadata is left unchanged. */
		metadata?: Array<MetadataItem>;

		/** Specifies how a job should be assigned to a pool. */
		poolInfo?: PoolInformation;

		/** The priority of the job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, the priority of the job is left unchanged. */
		priority?: number | null;
	}

	/** Parameters for a CloudJobOperations.Patch request. */
	export interface JobPatchParameterFormProperties {

		/** The priority of the job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, the priority of the job is left unchanged. */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateJobPatchParameterFormGroup() {
		return new FormGroup<JobPatchParameterFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A Job Preparation task to run before any tasks of the job on any given compute node. */
	export interface JobPreparationTask {

		/** The command line of the Job Preparation task. */
		commandLine?: string | null;

		/** Constraints to apply to the Job Manager task. */
		constraints?: TaskConstraints;

		/** A list of environment variable settings for the Job Preparation task. */
		environmentSettings?: Array<EnvironmentSetting>;

		/** A string that uniquely identifies the job preparation task within the job. The id can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. */
		id?: string | null;

		/** Whether the Batch service should rerun the Job Preparation task after a compute node reboots. Note that the Job Preparation task should still be written to be idempotent because it can be rerun if the compute node is rebooted while Job Preparation task is still running. The default value is true. */
		rerunOnNodeRebootAfterSuccess?: boolean | null;

		/** A list of files that the Batch service will download to the compute node before running the command line. */
		resourceFiles?: Array<ResourceFile>;

		/** Whether to run the Job Preparation task in elevated mode. The default value is false. */
		runElevated?: boolean | null;

		/** Whether the Batch service should wait for the Job Preparation task to complete successfully before scheduling any other tasks of the job on the compute node. */
		waitForSuccess?: boolean | null;
	}

	/** A Job Preparation task to run before any tasks of the job on any given compute node. */
	export interface JobPreparationTaskFormProperties {

		/** The command line of the Job Preparation task. */
		commandLine: FormControl<string | null | undefined>,

		/** A string that uniquely identifies the job preparation task within the job. The id can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. */
		id: FormControl<string | null | undefined>,

		/** Whether the Batch service should rerun the Job Preparation task after a compute node reboots. Note that the Job Preparation task should still be written to be idempotent because it can be rerun if the compute node is rebooted while Job Preparation task is still running. The default value is true. */
		rerunOnNodeRebootAfterSuccess: FormControl<boolean | null | undefined>,

		/** Whether to run the Job Preparation task in elevated mode. The default value is false. */
		runElevated: FormControl<boolean | null | undefined>,

		/** Whether the Batch service should wait for the Job Preparation task to complete successfully before scheduling any other tasks of the job on the compute node. */
		waitForSuccess: FormControl<boolean | null | undefined>,
	}
	export function CreateJobPreparationTaskFormGroup() {
		return new FormGroup<JobPreparationTaskFormProperties>({
			commandLine: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			rerunOnNodeRebootAfterSuccess: new FormControl<boolean | null | undefined>(undefined),
			runElevated: new FormControl<boolean | null | undefined>(undefined),
			waitForSuccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about the execution of a Job Preparation task on a compute node. */
	export interface JobPreparationTaskExecutionInformation {

		/** The time at which the Job Preparation task completed. This property is set only if the task is in the Completed state. */
		endTime?: Date | null;

		/** The exit code of the Job Preparation task. This property is set only if the task is in the Completed state. */
		exitCode?: number | null;

		/** The most recent time at which a retry of the Job Preparation task started running. This property is set only if the task was retried (i.e. retryCount is nonzero). */
		lastRetryTime?: Date | null;

		/**
		 * The number of times the task has been retried by the Batch service. Every time the task exits with a non-zero exit code, it is deemed a task failure. The Batch service will retry the task up to the limit specified by the constraints.
		 * Required
		 */
		retryCount: number;

		/** Information about an error when scheduling a task. */
		schedulingError?: TaskSchedulingError;

		/**
		 * The time at which the task started running. Note that every time the task is restarted, this value is updated.
		 * Required
		 */
		startTime: Date;

		/**
		 * The current state of the Job Preparation task.
		 * Required
		 */
		state: JobPreparationTaskExecutionInformationState;

		/** The root directory of the Job Preparation task on the compute node. You can use this path to retrieve files created by the task, such as log files. */
		taskRootDirectory?: string | null;

		/** The URL to the root directory of the Job Preparation task on the compute node. */
		taskRootDirectoryUrl?: string | null;
	}

	/** Contains information about the execution of a Job Preparation task on a compute node. */
	export interface JobPreparationTaskExecutionInformationFormProperties {

		/** The time at which the Job Preparation task completed. This property is set only if the task is in the Completed state. */
		endTime: FormControl<Date | null | undefined>,

		/** The exit code of the Job Preparation task. This property is set only if the task is in the Completed state. */
		exitCode: FormControl<number | null | undefined>,

		/** The most recent time at which a retry of the Job Preparation task started running. This property is set only if the task was retried (i.e. retryCount is nonzero). */
		lastRetryTime: FormControl<Date | null | undefined>,

		/**
		 * The number of times the task has been retried by the Batch service. Every time the task exits with a non-zero exit code, it is deemed a task failure. The Batch service will retry the task up to the limit specified by the constraints.
		 * Required
		 */
		retryCount: FormControl<number | null | undefined>,

		/**
		 * The time at which the task started running. Note that every time the task is restarted, this value is updated.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * The current state of the Job Preparation task.
		 * Required
		 */
		state: FormControl<JobPreparationTaskExecutionInformationState | null | undefined>,

		/** The root directory of the Job Preparation task on the compute node. You can use this path to retrieve files created by the task, such as log files. */
		taskRootDirectory: FormControl<string | null | undefined>,

		/** The URL to the root directory of the Job Preparation task on the compute node. */
		taskRootDirectoryUrl: FormControl<string | null | undefined>,
	}
	export function CreateJobPreparationTaskExecutionInformationFormGroup() {
		return new FormGroup<JobPreparationTaskExecutionInformationFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
			lastRetryTime: new FormControl<Date | null | undefined>(undefined),
			retryCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<JobPreparationTaskExecutionInformationState | null | undefined>(undefined, [Validators.required]),
			taskRootDirectory: new FormControl<string | null | undefined>(undefined),
			taskRootDirectoryUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobPreparationTaskExecutionInformationState { running = 0, completed = 1 }


	/** A Job Release task to run on job completion on any compute node where the job has run. */
	export interface JobReleaseTask {

		/** The command line of the Job Release task. */
		commandLine?: string | null;

		/** A list of environment variable settings for the Job Release task. */
		environmentSettings?: Array<EnvironmentSetting>;

		/** A string that uniquely identifies the Job Release task within the job. The id can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. */
		id?: string | null;

		/** The maximum elapsed time that the Job Release task may run on a given compute node, measured from the time the task starts. If the task does not complete within the time limit, the Batch service terminates it. The default value is 15 minutes. */
		maxWallClockTime?: string | null;

		/** A list of files that the Batch service will download to the compute node before running the command line. */
		resourceFiles?: Array<ResourceFile>;

		/** The minimum time to retain the working directory for the Job Release task on the compute node. After this time, the Batch service may delete the working directory and all its contents. The default is infinite. */
		retentionTime?: string | null;

		/** Whether to run the Job Release task in elevated mode. The default value is false. */
		runElevated?: boolean | null;
	}

	/** A Job Release task to run on job completion on any compute node where the job has run. */
	export interface JobReleaseTaskFormProperties {

		/** The command line of the Job Release task. */
		commandLine: FormControl<string | null | undefined>,

		/** A string that uniquely identifies the Job Release task within the job. The id can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. */
		id: FormControl<string | null | undefined>,

		/** The maximum elapsed time that the Job Release task may run on a given compute node, measured from the time the task starts. If the task does not complete within the time limit, the Batch service terminates it. The default value is 15 minutes. */
		maxWallClockTime: FormControl<string | null | undefined>,

		/** The minimum time to retain the working directory for the Job Release task on the compute node. After this time, the Batch service may delete the working directory and all its contents. The default is infinite. */
		retentionTime: FormControl<string | null | undefined>,

		/** Whether to run the Job Release task in elevated mode. The default value is false. */
		runElevated: FormControl<boolean | null | undefined>,
	}
	export function CreateJobReleaseTaskFormGroup() {
		return new FormGroup<JobReleaseTaskFormProperties>({
			commandLine: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			maxWallClockTime: new FormControl<string | null | undefined>(undefined),
			retentionTime: new FormControl<string | null | undefined>(undefined),
			runElevated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about the execution of a Job Release task on a compute node. */
	export interface JobReleaseTaskExecutionInformation {

		/** The time at which the Job Release task completed. This property is set only if the task is in the Completed state. */
		endTime?: Date | null;

		/** The exit code of the Job Release task. This property is set only if the task is in the Completed state. */
		exitCode?: number | null;

		/** Information about an error when scheduling a task. */
		schedulingError?: TaskSchedulingError;

		/**
		 * The time at which the task started running. Note that every time the task is restarted, this value is updated.
		 * Required
		 */
		startTime: Date;

		/**
		 * The current state of the Job Release task.
		 * Required
		 */
		state: JobPreparationTaskExecutionInformationState;

		/** The root directory of the Job Release task on the compute node. You can use this path to retrieve files created by the task, such as log files. */
		taskRootDirectory?: string | null;

		/** The URL to the root directory of the Job Release task on the compute node. */
		taskRootDirectoryUrl?: string | null;
	}

	/** Contains information about the execution of a Job Release task on a compute node. */
	export interface JobReleaseTaskExecutionInformationFormProperties {

		/** The time at which the Job Release task completed. This property is set only if the task is in the Completed state. */
		endTime: FormControl<Date | null | undefined>,

		/** The exit code of the Job Release task. This property is set only if the task is in the Completed state. */
		exitCode: FormControl<number | null | undefined>,

		/**
		 * The time at which the task started running. Note that every time the task is restarted, this value is updated.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * The current state of the Job Release task.
		 * Required
		 */
		state: FormControl<JobPreparationTaskExecutionInformationState | null | undefined>,

		/** The root directory of the Job Release task on the compute node. You can use this path to retrieve files created by the task, such as log files. */
		taskRootDirectory: FormControl<string | null | undefined>,

		/** The URL to the root directory of the Job Release task on the compute node. */
		taskRootDirectoryUrl: FormControl<string | null | undefined>,
	}
	export function CreateJobReleaseTaskExecutionInformationFormGroup() {
		return new FormGroup<JobReleaseTaskExecutionInformationFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<JobPreparationTaskExecutionInformationState | null | undefined>(undefined, [Validators.required]),
			taskRootDirectory: new FormControl<string | null | undefined>(undefined),
			taskRootDirectoryUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A job schedule that allows recurring jobs by specifying when to run jobs and a specification used to create each job. */
	export interface JobScheduleAddParameter {

		/** The display name for the schedule. */
		displayName?: string | null;

		/**
		 * A string that uniquely identifies the schedule within the account. A GUID is recommended.
		 * Required
		 */
		id: string;

		/**
		 * Specifies details of the jobs to be created on a schedule.
		 * Required
		 */
		jobSpecification: JobSpecification;

		/** A list of name-value pairs associated with the schedule as metadata. */
		metadata?: Array<MetadataItem>;

		/**
		 * The schedule according to which jobs will be created
		 * Required
		 */
		schedule: Schedule;
	}

	/** A job schedule that allows recurring jobs by specifying when to run jobs and a specification used to create each job. */
	export interface JobScheduleAddParameterFormProperties {

		/** The display name for the schedule. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * A string that uniquely identifies the schedule within the account. A GUID is recommended.
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


	/** Specifies how tasks should be run in a job associated with a job schedule. */
	export interface JobScheduleExecutionInformation {

		/** The time at which the schedule ended. This property is set only if the job schedule is in the completed state. */
		endTime?: Date | null;

		/** The next time at which a job will be created under this schedule. */
		nextRunTime?: Date | null;

		/** Information about the most recent job to run under the job schedule. */
		recentJob?: RecentJob;
	}

	/** Specifies how tasks should be run in a job associated with a job schedule. */
	export interface JobScheduleExecutionInformationFormProperties {

		/** The time at which the schedule ended. This property is set only if the job schedule is in the completed state. */
		endTime: FormControl<Date | null | undefined>,

		/** The next time at which a job will be created under this schedule. */
		nextRunTime: FormControl<Date | null | undefined>,
	}
	export function CreateJobScheduleExecutionInformationFormGroup() {
		return new FormGroup<JobScheduleExecutionInformationFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			nextRunTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Parameters for a CloudJobScheduleOperations.Patch request. */
	export interface JobSchedulePatchParameter {

		/** Specifies details of the jobs to be created on a schedule. */
		jobSpecification?: JobSpecification;

		/** A list of name-value pairs associated with the job schedule as metadata. */
		metadata?: Array<MetadataItem>;

		/** The schedule according to which jobs will be created */
		schedule?: Schedule;
	}

	/** Parameters for a CloudJobScheduleOperations.Patch request. */
	export interface JobSchedulePatchParameterFormProperties {
	}
	export function CreateJobSchedulePatchParameterFormGroup() {
		return new FormGroup<JobSchedulePatchParameterFormProperties>({
		});

	}


	/** Resource usage statistics for a job schedule. */
	export interface JobScheduleStatistics {

		/**
		 * The total kernel mode CPU time (summed across all cores and all compute nodes) consumed by all tasks in all jobs created under the schedule.
		 * Required
		 */
		kernelCPUTime: string;

		/**
		 * The time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime.
		 * Required
		 */
		lastUpdateTime: Date;

		/**
		 * The total number of tasks that failed during the given time range in jobs created under the schedule. A task fails if it exhausts its maximum retry count without returning exit code 0.
		 * Required
		 */
		numFailedTasks: number;

		/**
		 * The total number of tasks successfully completed during the given time range in jobs created under the schedule. A task completes successfully if it returns exit code 0.
		 * Required
		 */
		numSucceededTasks: number;

		/**
		 * The total number of retries during the given time range on all tasks in all jobs created under the schedule.
		 * Required
		 */
		numTaskRetries: number;

		/**
		 * The total gibibytes read from disk by all tasks in all jobs created under the schedule.
		 * Required
		 */
		readIOGiB: number;

		/**
		 * The total number of disk read operations made by all tasks in all jobs created under the schedule.
		 * Required
		 */
		readIOps: number;

		/**
		 * The start time of the time range covered by the statistics.
		 * Required
		 */
		startTime: Date;

		/**
		 * The URL of the statistics.
		 * Required
		 */
		url: string;

		/**
		 * The total user mode CPU time (summed across all cores and all compute nodes) consumed by all tasks in all jobs created under the schedule.
		 * Required
		 */
		userCPUTime: string;

		/**
		 * The total wait time of all tasks in all jobs created under the schedule. The wait time for a task is defined as the elapsed time between the creation of the task and the start of task execution. (If the task is retried due to failures, the wait time is the time to the most recent task execution.)
		 * Required
		 */
		waitTime: string;

		/**
		 * The total wall clock time of all the tasks in all the jobs created under the schedule.
		 * Required
		 */
		wallClockTime: string;

		/**
		 * The total gibibytes written to disk by all tasks in all jobs created under the schedule.
		 * Required
		 */
		writeIOGiB: number;

		/**
		 * The total number of disk write operations made by all tasks in all jobs created under the schedule.
		 * Required
		 */
		writeIOps: number;
	}

	/** Resource usage statistics for a job schedule. */
	export interface JobScheduleStatisticsFormProperties {

		/**
		 * The total kernel mode CPU time (summed across all cores and all compute nodes) consumed by all tasks in all jobs created under the schedule.
		 * Required
		 */
		kernelCPUTime: FormControl<string | null | undefined>,

		/**
		 * The time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime.
		 * Required
		 */
		lastUpdateTime: FormControl<Date | null | undefined>,

		/**
		 * The total number of tasks that failed during the given time range in jobs created under the schedule. A task fails if it exhausts its maximum retry count without returning exit code 0.
		 * Required
		 */
		numFailedTasks: FormControl<number | null | undefined>,

		/**
		 * The total number of tasks successfully completed during the given time range in jobs created under the schedule. A task completes successfully if it returns exit code 0.
		 * Required
		 */
		numSucceededTasks: FormControl<number | null | undefined>,

		/**
		 * The total number of retries during the given time range on all tasks in all jobs created under the schedule.
		 * Required
		 */
		numTaskRetries: FormControl<number | null | undefined>,

		/**
		 * The total gibibytes read from disk by all tasks in all jobs created under the schedule.
		 * Required
		 */
		readIOGiB: FormControl<number | null | undefined>,

		/**
		 * The total number of disk read operations made by all tasks in all jobs created under the schedule.
		 * Required
		 */
		readIOps: FormControl<number | null | undefined>,

		/**
		 * The start time of the time range covered by the statistics.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * The URL of the statistics.
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/**
		 * The total user mode CPU time (summed across all cores and all compute nodes) consumed by all tasks in all jobs created under the schedule.
		 * Required
		 */
		userCPUTime: FormControl<string | null | undefined>,

		/**
		 * The total wait time of all tasks in all jobs created under the schedule. The wait time for a task is defined as the elapsed time between the creation of the task and the start of task execution. (If the task is retried due to failures, the wait time is the time to the most recent task execution.)
		 * Required
		 */
		waitTime: FormControl<string | null | undefined>,

		/**
		 * The total wall clock time of all the tasks in all the jobs created under the schedule.
		 * Required
		 */
		wallClockTime: FormControl<string | null | undefined>,

		/**
		 * The total gibibytes written to disk by all tasks in all jobs created under the schedule.
		 * Required
		 */
		writeIOGiB: FormControl<number | null | undefined>,

		/**
		 * The total number of disk write operations made by all tasks in all jobs created under the schedule.
		 * Required
		 */
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


	/** Parameters for a CloudJobScheduleOperations.Update request. */
	export interface JobScheduleUpdateParameter {

		/**
		 * Specifies details of the jobs to be created on a schedule.
		 * Required
		 */
		jobSpecification: JobSpecification;

		/** A list of name-value pairs associated with the job schedule as metadata. If you do not specify this element, it takes the default value of an empty list; in effect, any existing metadata is deleted. */
		metadata?: Array<MetadataItem>;

		/**
		 * The schedule according to which jobs will be created
		 * Required
		 */
		schedule: Schedule;
	}

	/** Parameters for a CloudJobScheduleOperations.Update request. */
	export interface JobScheduleUpdateParameterFormProperties {
	}
	export function CreateJobScheduleUpdateParameterFormGroup() {
		return new FormGroup<JobScheduleUpdateParameterFormProperties>({
		});

	}


	/** An error encountered by the Batch service when scheduling a job. */
	export interface JobSchedulingError {

		/**
		 * The category of the job scheduling error.
		 * Required
		 */
		category: JobSchedulingErrorCategory;

		/** An identifier for the job scheduling error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** A list of additional error details related to the scheduling error. */
		details?: Array<NameValuePair>;

		/** A message describing the job scheduling error, intended to be suitable for display in a user interface. */
		message?: string | null;
	}

	/** An error encountered by the Batch service when scheduling a job. */
	export interface JobSchedulingErrorFormProperties {

		/**
		 * The category of the job scheduling error.
		 * Required
		 */
		category: FormControl<JobSchedulingErrorCategory | null | undefined>,

		/** An identifier for the job scheduling error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the job scheduling error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateJobSchedulingErrorFormGroup() {
		return new FormGroup<JobSchedulingErrorFormProperties>({
			category: new FormControl<JobSchedulingErrorCategory | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobSchedulingErrorCategory { usererror = 0, servererror = 1, unmapped = 2 }


	/** Specifies details of the jobs to be created on a schedule. */
	export interface JobSpecification {

		/** A list of common environment variable settings. These environment variables are set for all tasks in jobs created under this schedule (including the Job Manager, Job Preparation and Job Release tasks). */
		commonEnvironmentSettings?: Array<EnvironmentSetting>;

		/** Specifies the execution constraints for jobs created on a schedule. */
		constraints?: JobConstraints;

		/** The display name for jobs created under this schedule. It need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName?: string | null;

		/** Specifies details of a Job Manager task. */
		jobManagerTask?: JobManagerTask;

		/** A Job Preparation task to run before any tasks of the job on any given compute node. */
		jobPreparationTask?: JobPreparationTask;

		/** A Job Release task to run on job completion on any compute node where the job has run. */
		jobReleaseTask?: JobReleaseTask;

		/** A list of name-value pairs associated with each job created under this schedule as metadata. */
		metadata?: Array<MetadataItem>;

		/** Specifies how a job should be assigned to a pool. */
		poolInfo?: PoolInformation;

		/** The priority of jobs created under this schedule. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. */
		priority?: number | null;

		/** The flag that determines if this job will use tasks with dependencies. */
		usesTaskDependencies?: boolean | null;
	}

	/** Specifies details of the jobs to be created on a schedule. */
	export interface JobSpecificationFormProperties {

		/** The display name for jobs created under this schedule. It need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName: FormControl<string | null | undefined>,

		/** The priority of jobs created under this schedule. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. */
		priority: FormControl<number | null | undefined>,

		/** The flag that determines if this job will use tasks with dependencies. */
		usesTaskDependencies: FormControl<boolean | null | undefined>,
	}
	export function CreateJobSpecificationFormGroup() {
		return new FormGroup<JobSpecificationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			usesTaskDependencies: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Resource usage statistics for a job. */
	export interface JobStatistics {

		/**
		 * The total kernel mode CPU time (summed across all cores and all compute nodes) consumed by all tasks in the job.
		 * Required
		 */
		kernelCPUTime: string;

		/**
		 * The time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime.
		 * Required
		 */
		lastUpdateTime: Date;

		/**
		 * The total number of tasks in the job that failed during the given time range.
		 * Required
		 */
		numFailedTasks: number;

		/**
		 * The total number of tasks successfully completed in the job during the given time range.
		 * Required
		 */
		numSucceededTasks: number;

		/**
		 * The total number of retries on all the tasks in the job during the given time range.
		 * Required
		 */
		numTaskRetries: number;

		/**
		 * The total gibibytes read from disk by all tasks in the job.
		 * Required
		 */
		readIOGiB: number;

		/**
		 * The total number of disk read operations made by all tasks in the job.
		 * Required
		 */
		readIOps: number;

		/**
		 * The start time of the time range covered by the statistics.
		 * Required
		 */
		startTime: Date;

		/**
		 * The URL of the statistics.
		 * Required
		 */
		url: string;

		/**
		 * The total user mode CPU time (summed across all cores and all compute nodes) consumed by all tasks in the job.
		 * Required
		 */
		userCPUTime: string;

		/**
		 * The total wait time of all tasks in the job. The wait time for a task is defined as the elapsed time between the creation of the task and the start of task execution. (If the task is retried due to failures, the wait time is the time to the most recent task execution.)
		 * Required
		 */
		waitTime: string;

		/**
		 * The total wall clock time of all tasks in the job.
		 * Required
		 */
		wallClockTime: string;

		/**
		 * The total gibibytes written to disk by all tasks in the job.
		 * Required
		 */
		writeIOGiB: number;

		/**
		 * The total number of disk write operations made by all tasks in the job.
		 * Required
		 */
		writeIOps: number;
	}

	/** Resource usage statistics for a job. */
	export interface JobStatisticsFormProperties {

		/**
		 * The total kernel mode CPU time (summed across all cores and all compute nodes) consumed by all tasks in the job.
		 * Required
		 */
		kernelCPUTime: FormControl<string | null | undefined>,

		/**
		 * The time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime.
		 * Required
		 */
		lastUpdateTime: FormControl<Date | null | undefined>,

		/**
		 * The total number of tasks in the job that failed during the given time range.
		 * Required
		 */
		numFailedTasks: FormControl<number | null | undefined>,

		/**
		 * The total number of tasks successfully completed in the job during the given time range.
		 * Required
		 */
		numSucceededTasks: FormControl<number | null | undefined>,

		/**
		 * The total number of retries on all the tasks in the job during the given time range.
		 * Required
		 */
		numTaskRetries: FormControl<number | null | undefined>,

		/**
		 * The total gibibytes read from disk by all tasks in the job.
		 * Required
		 */
		readIOGiB: FormControl<number | null | undefined>,

		/**
		 * The total number of disk read operations made by all tasks in the job.
		 * Required
		 */
		readIOps: FormControl<number | null | undefined>,

		/**
		 * The start time of the time range covered by the statistics.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * The URL of the statistics.
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/**
		 * The total user mode CPU time (summed across all cores and all compute nodes) consumed by all tasks in the job.
		 * Required
		 */
		userCPUTime: FormControl<string | null | undefined>,

		/**
		 * The total wait time of all tasks in the job. The wait time for a task is defined as the elapsed time between the creation of the task and the start of task execution. (If the task is retried due to failures, the wait time is the time to the most recent task execution.)
		 * Required
		 */
		waitTime: FormControl<string | null | undefined>,

		/**
		 * The total wall clock time of all tasks in the job.
		 * Required
		 */
		wallClockTime: FormControl<string | null | undefined>,

		/**
		 * The total gibibytes written to disk by all tasks in the job.
		 * Required
		 */
		writeIOGiB: FormControl<number | null | undefined>,

		/**
		 * The total number of disk write operations made by all tasks in the job.
		 * Required
		 */
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


	/** Parameters for a CloudJobOperations.Terminate request. */
	export interface JobTerminateParameter {

		/** The text you want to appear as the job's TerminateReason. The default is 'UserTerminate'. */
		terminateReason?: string | null;
	}

	/** Parameters for a CloudJobOperations.Terminate request. */
	export interface JobTerminateParameterFormProperties {

		/** The text you want to appear as the job's TerminateReason. The default is 'UserTerminate'. */
		terminateReason: FormControl<string | null | undefined>,
	}
	export function CreateJobTerminateParameterFormGroup() {
		return new FormGroup<JobTerminateParameterFormProperties>({
			terminateReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters for a CloudJobOperations.Update request. */
	export interface JobUpdateParameter {

		/** Specifies the execution constraints for jobs created on a schedule. */
		constraints?: JobConstraints;

		/** A list of name-value pairs associated with the job as metadata. If omitted, the existing job metadata is left unchanged. */
		metadata?: Array<MetadataItem>;

		/**
		 * Specifies how a job should be assigned to a pool.
		 * Required
		 */
		poolInfo: PoolInformation;

		/** The priority of the job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, the priority of the job is left unchanged. */
		priority?: number | null;
	}

	/** Parameters for a CloudJobOperations.Update request. */
	export interface JobUpdateParameterFormProperties {

		/** The priority of the job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, the priority of the job is left unchanged. */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateJobUpdateParameterFormGroup() {
		return new FormGroup<JobUpdateParameterFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Settings which specify how to run a multi-instance task. Multi-instance tasks are commonly used to support MPI tasks. */
	export interface MultiInstanceSettings {

		/** A list of files that the Batch service will download before running the coordination command line. The difference between common resource files and task resource files is that common resource files are downloaded for all subtasks including the primary, whereas task resource files are downloaded only for the primary. */
		commonResourceFiles?: Array<ResourceFile>;

		/** The command to run on the compute node instances for coordinating among the subtasks. */
		coordinationCommandLine?: string | null;

		/**
		 * The number of compute nodes required by the multi-instance task.
		 * Required
		 */
		numberOfInstances: number;
	}

	/** Settings which specify how to run a multi-instance task. Multi-instance tasks are commonly used to support MPI tasks. */
	export interface MultiInstanceSettingsFormProperties {

		/** The command to run on the compute node instances for coordinating among the subtasks. */
		coordinationCommandLine: FormControl<string | null | undefined>,

		/**
		 * The number of compute nodes required by the multi-instance task.
		 * Required
		 */
		numberOfInstances: FormControl<number | null | undefined>,
	}
	export function CreateMultiInstanceSettingsFormGroup() {
		return new FormGroup<MultiInstanceSettingsFormProperties>({
			coordinationCommandLine: new FormControl<string | null | undefined>(undefined),
			numberOfInstances: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters for a ComputeNodeOperations.DisableScheduling request. */
	export interface NodeDisableSchedulingParameter {

		/** What to do with currently running tasks when disable task scheduling on the compute node. The default value is requeue. */
		nodeDisableSchedulingOption?: NodeDisableSchedulingParameterNodeDisableSchedulingOption | null;
	}

	/** Parameters for a ComputeNodeOperations.DisableScheduling request. */
	export interface NodeDisableSchedulingParameterFormProperties {

		/** What to do with currently running tasks when disable task scheduling on the compute node. The default value is requeue. */
		nodeDisableSchedulingOption: FormControl<NodeDisableSchedulingParameterNodeDisableSchedulingOption | null | undefined>,
	}
	export function CreateNodeDisableSchedulingParameterFormGroup() {
		return new FormGroup<NodeDisableSchedulingParameterFormProperties>({
			nodeDisableSchedulingOption: new FormControl<NodeDisableSchedulingParameterNodeDisableSchedulingOption | null | undefined>(undefined),
		});

	}

	export enum NodeDisableSchedulingParameterNodeDisableSchedulingOption { requeue = 0, terminate = 1, taskcompletion = 2 }


	/** Information about a file or directory on a compute node. */
	export interface NodeFile {

		/** Whether the object represents a directory. */
		isDirectory?: boolean | null;

		/** The file path. */
		name?: string | null;

		/** The properties of a file on a compute node. */
		properties?: FileProperties;

		/** The URL of the file. */
		url?: string | null;
	}

	/** Information about a file or directory on a compute node. */
	export interface NodeFileFormProperties {

		/** Whether the object represents a directory. */
		isDirectory: FormControl<boolean | null | undefined>,

		/** The file path. */
		name: FormControl<string | null | undefined>,

		/** The URL of the file. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateNodeFileFormGroup() {
		return new FormGroup<NodeFileFormProperties>({
			isDirectory: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to a FileOperation.ListFromComputeNode or FileOperation.ListFromTask request. */
	export interface NodeFileListResult {

		/** The URL to get the next set of results. */
		'odata.nextLink'?: string | null;

		/** The list of files. */
		value?: Array<NodeFile>;
	}

	/** Response to a FileOperation.ListFromComputeNode or FileOperation.ListFromTask request. */
	export interface NodeFileListResultFormProperties {

		/** The URL to get the next set of results. */
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreateNodeFileListResultFormGroup() {
		return new FormGroup<NodeFileListResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters for a ComputeNodeOperations.Reboot request. */
	export interface NodeRebootParameter {

		/** When to reboot the compute node and what to do with currently running tasks. The default value is requeue. */
		nodeRebootOption?: NodeRebootParameterNodeRebootOption | null;
	}

	/** Parameters for a ComputeNodeOperations.Reboot request. */
	export interface NodeRebootParameterFormProperties {

		/** When to reboot the compute node and what to do with currently running tasks. The default value is requeue. */
		nodeRebootOption: FormControl<NodeRebootParameterNodeRebootOption | null | undefined>,
	}
	export function CreateNodeRebootParameterFormGroup() {
		return new FormGroup<NodeRebootParameterFormProperties>({
			nodeRebootOption: new FormControl<NodeRebootParameterNodeRebootOption | null | undefined>(undefined),
		});

	}

	export enum NodeRebootParameterNodeRebootOption { requeue = 0, terminate = 1, taskcompletion = 2, retaineddata = 3 }


	/** Parameters for a ComputeNodeOperations.Reimage request. */
	export interface NodeReimageParameter {

		/** When to reimage the compute node and what to do with currently running tasks. The default value is requeue. */
		nodeReimageOption?: NodeRebootParameterNodeRebootOption | null;
	}

	/** Parameters for a ComputeNodeOperations.Reimage request. */
	export interface NodeReimageParameterFormProperties {

		/** When to reimage the compute node and what to do with currently running tasks. The default value is requeue. */
		nodeReimageOption: FormControl<NodeRebootParameterNodeRebootOption | null | undefined>,
	}
	export function CreateNodeReimageParameterFormGroup() {
		return new FormGroup<NodeReimageParameterFormProperties>({
			nodeReimageOption: new FormControl<NodeRebootParameterNodeRebootOption | null | undefined>(undefined),
		});

	}


	/** Parameters for a ComputeNodeOperations.Remove request. */
	export interface NodeRemoveParameter {

		/** When compute nodes may be removed from the pool. */
		nodeDeallocationOption?: NodeRebootParameterNodeRebootOption | null;

		/**
		 * A list containing the id of the compute nodes to be removed from the specified pool.
		 * Required
		 */
		nodeList: Array<string>;

		/** The timeout for removal of compute nodes to the pool. The default value is 10 minutes. */
		resizeTimeout?: string | null;
	}

	/** Parameters for a ComputeNodeOperations.Remove request. */
	export interface NodeRemoveParameterFormProperties {

		/** When compute nodes may be removed from the pool. */
		nodeDeallocationOption: FormControl<NodeRebootParameterNodeRebootOption | null | undefined>,

		/** The timeout for removal of compute nodes to the pool. The default value is 10 minutes. */
		resizeTimeout: FormControl<string | null | undefined>,
	}
	export function CreateNodeRemoveParameterFormGroup() {
		return new FormGroup<NodeRemoveParameterFormProperties>({
			nodeDeallocationOption: new FormControl<NodeRebootParameterNodeRebootOption | null | undefined>(undefined),
			resizeTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters for a ComputeNodeOperations.UpdateUser request. */
	export interface NodeUpdateUserParameter {

		/** The time at which the account should expire. If omitted, the default is 1 day from the current time. */
		expiryTime?: Date | null;

		/** The password of the account. */
		password?: string | null;

		/** The SSH public key that can be used for remote login to the compute node. */
		sshPublicKey?: string | null;
	}

	/** Parameters for a ComputeNodeOperations.UpdateUser request. */
	export interface NodeUpdateUserParameterFormProperties {

		/** The time at which the account should expire. If omitted, the default is 1 day from the current time. */
		expiryTime: FormControl<Date | null | undefined>,

		/** The password of the account. */
		password: FormControl<string | null | undefined>,

		/** The SSH public key that can be used for remote login to the compute node. */
		sshPublicKey: FormControl<string | null | undefined>,
	}
	export function CreateNodeUpdateUserParameterFormGroup() {
		return new FormGroup<NodeUpdateUserParameterFormProperties>({
			expiryTime: new FormControl<Date | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			sshPublicKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A pool in the Azure Batch service to add. */
	export interface PoolAddParameter {

		/** The list of application packages to be installed on each compute node in the pool. */
		applicationPackageReferences?: Array<ApplicationPackageReference>;

		/** A time interval for the desired autoscale evaluation period in the pool. */
		autoScaleEvaluationInterval?: string | null;

		/** A formula for the desired number of compute nodes in the pool. */
		autoScaleFormula?: string | null;

		/** The list of certificates to be installed on each compute node in the pool. */
		certificateReferences?: Array<CertificateReference>;

		/** The configuration for nodes in a pool based on the Azure Cloud Services platform. */
		cloudServiceConfiguration?: CloudServiceConfiguration;

		/** The display name for the pool. */
		displayName?: string | null;

		/** Whether the pool size should automatically adjust over time. If true, the AutoScaleFormula property must be set. If false, the TargetDedicated property must be set. */
		enableAutoScale?: boolean | null;

		/** Whether the pool permits direct communication between nodes. */
		enableInterNodeCommunication?: boolean | null;

		/**
		 * A string that uniquely identifies the pool within the account. The id can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters.
		 * Required
		 */
		id: string;

		/** The maximum number of tasks that can run concurrently on a single compute node in the pool. */
		maxTasksPerNode?: number | null;

		/** A list of name-value pairs associated with the pool as metadata. */
		metadata?: Array<MetadataItem>;

		/** The timeout for allocation of compute nodes to the pool. In a Get Pool operation, this is the timeout for the most recent resize operation. The default value is 10 minutes. */
		resizeTimeout?: string | null;

		/** A task which is run when a compute node joins a pool in the Azure Batch service, or when the compute node is rebooted or reimaged. */
		startTask?: StartTask;

		/** The desired number of compute nodes in the pool. This property must have the default value if EnableAutoScale is true. It is required if EnableAutoScale is false. */
		targetDedicated?: number | null;

		/** Specifies how tasks should be distributed across compute nodes. */
		taskSchedulingPolicy?: TaskSchedulingPolicy;

		/** The configuration for compute nodes in a pool based on the Azure Virtual Machines infrastructure. */
		virtualMachineConfiguration?: VirtualMachineConfiguration;

		/**
		 * The size of virtual machines in the pool. All virtual machines in a pool are the same size.
		 * Required
		 */
		vmSize: string;
	}

	/** A pool in the Azure Batch service to add. */
	export interface PoolAddParameterFormProperties {

		/** A time interval for the desired autoscale evaluation period in the pool. */
		autoScaleEvaluationInterval: FormControl<string | null | undefined>,

		/** A formula for the desired number of compute nodes in the pool. */
		autoScaleFormula: FormControl<string | null | undefined>,

		/** The display name for the pool. */
		displayName: FormControl<string | null | undefined>,

		/** Whether the pool size should automatically adjust over time. If true, the AutoScaleFormula property must be set. If false, the TargetDedicated property must be set. */
		enableAutoScale: FormControl<boolean | null | undefined>,

		/** Whether the pool permits direct communication between nodes. */
		enableInterNodeCommunication: FormControl<boolean | null | undefined>,

		/**
		 * A string that uniquely identifies the pool within the account. The id can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The maximum number of tasks that can run concurrently on a single compute node in the pool. */
		maxTasksPerNode: FormControl<number | null | undefined>,

		/** The timeout for allocation of compute nodes to the pool. In a Get Pool operation, this is the timeout for the most recent resize operation. The default value is 10 minutes. */
		resizeTimeout: FormControl<string | null | undefined>,

		/** The desired number of compute nodes in the pool. This property must have the default value if EnableAutoScale is true. It is required if EnableAutoScale is false. */
		targetDedicated: FormControl<number | null | undefined>,

		/**
		 * The size of virtual machines in the pool. All virtual machines in a pool are the same size.
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
			targetDedicated: new FormControl<number | null | undefined>(undefined),
			vmSize: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters for a CloudPoolOperations.EnableAutoScale request. */
	export interface PoolEnableAutoScaleParameter {

		/** A time interval for the desired autoscale evaluation period in the pool. */
		autoScaleEvaluationInterval?: string | null;

		/** The formula for the desired number of compute nodes in the pool. */
		autoScaleFormula?: string | null;
	}

	/** Parameters for a CloudPoolOperations.EnableAutoScale request. */
	export interface PoolEnableAutoScaleParameterFormProperties {

		/** A time interval for the desired autoscale evaluation period in the pool. */
		autoScaleEvaluationInterval: FormControl<string | null | undefined>,

		/** The formula for the desired number of compute nodes in the pool. */
		autoScaleFormula: FormControl<string | null | undefined>,
	}
	export function CreatePoolEnableAutoScaleParameterFormGroup() {
		return new FormGroup<PoolEnableAutoScaleParameterFormProperties>({
			autoScaleEvaluationInterval: new FormControl<string | null | undefined>(undefined),
			autoScaleFormula: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters for a CloudJobOperations.EvaluateAutoScale request. */
	export interface PoolEvaluateAutoScaleParameter {

		/**
		 * A formula for the desired number of compute nodes in the pool.
		 * Required
		 */
		autoScaleFormula: string;
	}

	/** Parameters for a CloudJobOperations.EvaluateAutoScale request. */
	export interface PoolEvaluateAutoScaleParameterFormProperties {

		/**
		 * A formula for the desired number of compute nodes in the pool.
		 * Required
		 */
		autoScaleFormula: FormControl<string | null | undefined>,
	}
	export function CreatePoolEvaluateAutoScaleParameterFormGroup() {
		return new FormGroup<PoolEvaluateAutoScaleParameterFormProperties>({
			autoScaleFormula: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies how a job should be assigned to a pool. */
	export interface PoolInformation {

		/** Specifies characteristics for a temporary 'auto pool'. The Batch service will create this auto pool, run all the tasks for the job on it, and will delete the pool once the job has completed. */
		autoPoolSpecification?: AutoPoolSpecification;

		/** The id of an existing pool. All the tasks of the job will run on the specified pool. You must specify either PoolId or AutoPoolSpecification, but not both. */
		poolId?: string | null;
	}

	/** Specifies how a job should be assigned to a pool. */
	export interface PoolInformationFormProperties {

		/** The id of an existing pool. All the tasks of the job will run on the specified pool. You must specify either PoolId or AutoPoolSpecification, but not both. */
		poolId: FormControl<string | null | undefined>,
	}
	export function CreatePoolInformationFormGroup() {
		return new FormGroup<PoolInformationFormProperties>({
			poolId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to an AccountOperation.ListPoolUsageMetrics request. */
	export interface PoolListPoolUsageMetricsResult {

		/** The URL to get the next set of results. */
		'odata.nextLink'?: string | null;

		/** The pool usage metrics data. */
		value?: Array<PoolUsageMetrics>;
	}

	/** Response to an AccountOperation.ListPoolUsageMetrics request. */
	export interface PoolListPoolUsageMetricsResultFormProperties {

		/** The URL to get the next set of results. */
		'odata.nextLink': FormControl<string | null | undefined>,
	}
	export function CreatePoolListPoolUsageMetricsResultFormGroup() {
		return new FormGroup<PoolListPoolUsageMetricsResultFormProperties>({
			'odata.nextLink': new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Usage metrics for a pool across an aggregation interval. */
	export interface PoolUsageMetrics {

		/**
		 * The cross data center network egress in GiB from the pool during this interval.
		 * Required
		 */
		dataEgressGiB: number;

		/**
		 * The cross data center network ingress in GiB to the pool during this interval.
		 * Required
		 */
		dataIngressGiB: number;

		/**
		 * The end time of the aggregation interval.
		 * Required
		 */
		endTime: Date;

		/**
		 * The id of the pool whose metrics are being aggregated.
		 * Required
		 */
		poolId: string;

		/**
		 * The start time of the aggregation interval.
		 * Required
		 */
		startTime: Date;

		/**
		 * The total core hours used in the pool during this aggregation interval.
		 * Required
		 */
		totalCoreHours: number;

		/**
		 * The size of virtual machines in the pool. All VMs in a pool are the same size.
		 * Required
		 */
		vmSize: string;
	}

	/** Usage metrics for a pool across an aggregation interval. */
	export interface PoolUsageMetricsFormProperties {

		/**
		 * The cross data center network egress in GiB from the pool during this interval.
		 * Required
		 */
		dataEgressGiB: FormControl<number | null | undefined>,

		/**
		 * The cross data center network ingress in GiB to the pool during this interval.
		 * Required
		 */
		dataIngressGiB: FormControl<number | null | undefined>,

		/**
		 * The end time of the aggregation interval.
		 * Required
		 */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * The id of the pool whose metrics are being aggregated.
		 * Required
		 */
		poolId: FormControl<string | null | undefined>,

		/**
		 * The start time of the aggregation interval.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * The total core hours used in the pool during this aggregation interval.
		 * Required
		 */
		totalCoreHours: FormControl<number | null | undefined>,

		/**
		 * The size of virtual machines in the pool. All VMs in a pool are the same size.
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


	/** Parameters for a CloudPoolOperations.Patch request. */
	export interface PoolPatchParameter {

		/** A list of application packages to be installed on each compute node in the pool. If omitted, any existing application package references are left unchanged. */
		applicationPackageReferences?: Array<ApplicationPackageReference>;

		/** A list of certificates to be installed on each compute node in the pool. If omitted, any existing certificate references are left unchanged. */
		certificateReferences?: Array<CertificateReference>;

		/** A list of name-value pairs associated with the pool as metadata. If omitted, any existing metadata is left unchanged. */
		metadata?: Array<MetadataItem>;

		/** A task which is run when a compute node joins a pool in the Azure Batch service, or when the compute node is rebooted or reimaged. */
		startTask?: StartTask;
	}

	/** Parameters for a CloudPoolOperations.Patch request. */
	export interface PoolPatchParameterFormProperties {
	}
	export function CreatePoolPatchParameterFormGroup() {
		return new FormGroup<PoolPatchParameterFormProperties>({
		});

	}


	/** Parameters for a CloudPoolOperations.Resize request. */
	export interface PoolResizeParameter {

		/** When nodes may be removed from the pool, if the pool size is decreasing. */
		nodeDeallocationOption?: NodeRebootParameterNodeRebootOption | null;

		/** The timeout for allocation of compute nodes to the pool or removal of compute nodes from the pool. The default value is 10 minutes. */
		resizeTimeout?: string | null;

		/**
		 * The desired number of compute nodes in the pool.
		 * Required
		 */
		targetDedicated: number;
	}

	/** Parameters for a CloudPoolOperations.Resize request. */
	export interface PoolResizeParameterFormProperties {

		/** When nodes may be removed from the pool, if the pool size is decreasing. */
		nodeDeallocationOption: FormControl<NodeRebootParameterNodeRebootOption | null | undefined>,

		/** The timeout for allocation of compute nodes to the pool or removal of compute nodes from the pool. The default value is 10 minutes. */
		resizeTimeout: FormControl<string | null | undefined>,

		/**
		 * The desired number of compute nodes in the pool.
		 * Required
		 */
		targetDedicated: FormControl<number | null | undefined>,
	}
	export function CreatePoolResizeParameterFormGroup() {
		return new FormGroup<PoolResizeParameterFormProperties>({
			nodeDeallocationOption: new FormControl<NodeRebootParameterNodeRebootOption | null | undefined>(undefined),
			resizeTimeout: new FormControl<string | null | undefined>(undefined),
			targetDedicated: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specification for creating a new pool. */
	export interface PoolSpecification {

		/** The list of application packages to be installed on each compute node in the pool. */
		applicationPackageReferences?: Array<ApplicationPackageReference>;

		/** A time interval for the desired AutoScale evaluation period in the pool. */
		autoScaleEvaluationInterval?: string | null;

		/** The formula for the desired number of compute nodes in the pool. */
		autoScaleFormula?: string | null;

		/** A list of certificates to be installed on each compute node in the pool. */
		certificateReferences?: Array<CertificateReference>;

		/** The configuration for nodes in a pool based on the Azure Cloud Services platform. */
		cloudServiceConfiguration?: CloudServiceConfiguration;

		/** The display name for the pool. */
		displayName?: string | null;

		/** Whether the pool size should automatically adjust over time. */
		enableAutoScale?: boolean | null;

		/** Whether the pool permits direct communication between nodes. */
		enableInterNodeCommunication?: boolean | null;

		/** The maximum number of tasks that can run concurrently on a single compute node in the pool. */
		maxTasksPerNode?: number | null;

		/** A list of name-value pairs associated with the pool as metadata. */
		metadata?: Array<MetadataItem>;

		/** The timeout for allocation of compute nodes to the pool. */
		resizeTimeout?: string | null;

		/** A task which is run when a compute node joins a pool in the Azure Batch service, or when the compute node is rebooted or reimaged. */
		startTask?: StartTask;

		/** The desired number of compute nodes in the pool. */
		targetDedicated?: number | null;

		/** Specifies how tasks should be distributed across compute nodes. */
		taskSchedulingPolicy?: TaskSchedulingPolicy;

		/** The configuration for compute nodes in a pool based on the Azure Virtual Machines infrastructure. */
		virtualMachineConfiguration?: VirtualMachineConfiguration;

		/** The size of the virtual machines in the pool. All virtual machines in a pool are the same size. */
		vmSize?: string | null;
	}

	/** Specification for creating a new pool. */
	export interface PoolSpecificationFormProperties {

		/** A time interval for the desired AutoScale evaluation period in the pool. */
		autoScaleEvaluationInterval: FormControl<string | null | undefined>,

		/** The formula for the desired number of compute nodes in the pool. */
		autoScaleFormula: FormControl<string | null | undefined>,

		/** The display name for the pool. */
		displayName: FormControl<string | null | undefined>,

		/** Whether the pool size should automatically adjust over time. */
		enableAutoScale: FormControl<boolean | null | undefined>,

		/** Whether the pool permits direct communication between nodes. */
		enableInterNodeCommunication: FormControl<boolean | null | undefined>,

		/** The maximum number of tasks that can run concurrently on a single compute node in the pool. */
		maxTasksPerNode: FormControl<number | null | undefined>,

		/** The timeout for allocation of compute nodes to the pool. */
		resizeTimeout: FormControl<string | null | undefined>,

		/** The desired number of compute nodes in the pool. */
		targetDedicated: FormControl<number | null | undefined>,

		/** The size of the virtual machines in the pool. All virtual machines in a pool are the same size. */
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
			targetDedicated: new FormControl<number | null | undefined>(undefined),
			vmSize: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains utilization and resource usage statistics for the lifetime of a pool. */
	export interface PoolStatistics {

		/**
		 * The time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime.
		 * Required
		 */
		lastUpdateTime: Date;

		/** Statistics related to resource consumption by compute nodes in a pool. */
		resourceStats?: ResourceStatistics;

		/**
		 * The start time of the time range covered by the statistics.
		 * Required
		 */
		startTime: Date;

		/**
		 * The URL for the statistics.
		 * Required
		 */
		url: string;

		/** Statistics related to pool usage information. */
		usageStats?: UsageStatistics;
	}

	/** Contains utilization and resource usage statistics for the lifetime of a pool. */
	export interface PoolStatisticsFormProperties {

		/**
		 * The time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime.
		 * Required
		 */
		lastUpdateTime: FormControl<Date | null | undefined>,

		/**
		 * The start time of the time range covered by the statistics.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * The URL for the statistics.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePoolStatisticsFormGroup() {
		return new FormGroup<PoolStatisticsFormProperties>({
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters for a CloudPoolOperations.UpdateProperties request. */
	export interface PoolUpdatePropertiesParameter {

		/**
		 * A list of application packages to be installed on each compute node in the pool. If you specify an empty collection, any existing application packages references are removed from the pool.
		 * Required
		 */
		applicationPackageReferences: Array<ApplicationPackageReference>;

		/**
		 * A list of certificates to be installed on each compute node in the pool. If you specify an empty collection, any existing certificate references are removed from the pool.
		 * Required
		 */
		certificateReferences: Array<CertificateReference>;

		/**
		 * A list of name-value pairs associated with the pool as metadata. If you specify an empty collection, any existing metadata is removed from the pool.
		 * Required
		 */
		metadata: Array<MetadataItem>;

		/** A task which is run when a compute node joins a pool in the Azure Batch service, or when the compute node is rebooted or reimaged. */
		startTask?: StartTask;
	}

	/** Parameters for a CloudPoolOperations.UpdateProperties request. */
	export interface PoolUpdatePropertiesParameterFormProperties {
	}
	export function CreatePoolUpdatePropertiesParameterFormGroup() {
		return new FormGroup<PoolUpdatePropertiesParameterFormProperties>({
		});

	}


	/** Parameters for a CloudPoolOperations.UpgradeOS request. */
	export interface PoolUpgradeOSParameter {

		/**
		 * The Azure Guest OS version to be installed on the virtual machines in the pool.
		 * Required
		 */
		targetOSVersion: string;
	}

	/** Parameters for a CloudPoolOperations.UpgradeOS request. */
	export interface PoolUpgradeOSParameterFormProperties {

		/**
		 * The Azure Guest OS version to be installed on the virtual machines in the pool.
		 * Required
		 */
		targetOSVersion: FormControl<string | null | undefined>,
	}
	export function CreatePoolUpgradeOSParameterFormGroup() {
		return new FormGroup<PoolUpgradeOSParameterFormProperties>({
			targetOSVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the most recent job to run under the job schedule. */
	export interface RecentJob {

		/** The id of the job. */
		id?: string | null;

		/** The URL of the job. */
		url?: string | null;
	}

	/** Information about the most recent job to run under the job schedule. */
	export interface RecentJobFormProperties {

		/** The id of the job. */
		id: FormControl<string | null | undefined>,

		/** The URL of the job. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateRecentJobFormGroup() {
		return new FormGroup<RecentJobFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error that occurred when resizing a pool. */
	export interface ResizeError {

		/** An identifier for the pool resize error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** A message describing the pool resize error, intended to be suitable for display in a user interface. */
		message?: string | null;

		/** A list of additional error details related to the pool resize error. */
		values?: Array<NameValuePair>;
	}

	/** An error that occurred when resizing a pool. */
	export interface ResizeErrorFormProperties {

		/** An identifier for the pool resize error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the pool resize error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateResizeErrorFormGroup() {
		return new FormGroup<ResizeErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Statistics related to resource consumption by compute nodes in a pool. */
	export interface ResourceStatistics {

		/**
		 * The average CPU usage across all nodes in the pool (percentage per node).
		 * Required
		 */
		avgCPUPercentage: number;

		/**
		 * The average used disk space in GiB across all nodes in the pool.
		 * Required
		 */
		avgDiskGiB: number;

		/**
		 * The average memory usage in GiB across all nodes in the pool.
		 * Required
		 */
		avgMemoryGiB: number;

		/**
		 * The total amount of data in GiB of disk reads across all nodes in the pool.
		 * Required
		 */
		diskReadGiB: number;

		/**
		 * The total number of disk read operations across all nodes in the pool.
		 * Required
		 */
		diskReadIOps: number;

		/**
		 * The total amount of data in GiB of disk writes across all nodes in the pool.
		 * Required
		 */
		diskWriteGiB: number;

		/**
		 * The total number of disk write operations across all nodes in the pool.
		 * Required
		 */
		diskWriteIOps: number;

		/**
		 * The time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime.
		 * Required
		 */
		lastUpdateTime: Date;

		/**
		 * The total amount of data in GiB of network reads across all nodes in the pool.
		 * Required
		 */
		networkReadGiB: number;

		/**
		 * The total amount of data in GiB of network writes across all nodes in the pool.
		 * Required
		 */
		networkWriteGiB: number;

		/**
		 * The peak used disk space in GiB across all nodes in the pool.
		 * Required
		 */
		peakDiskGiB: number;

		/**
		 * The peak memory usage in GiB across all nodes in the pool.
		 * Required
		 */
		peakMemoryGiB: number;

		/**
		 * The start time of the time range covered by the statistics.
		 * Required
		 */
		startTime: Date;
	}

	/** Statistics related to resource consumption by compute nodes in a pool. */
	export interface ResourceStatisticsFormProperties {

		/**
		 * The average CPU usage across all nodes in the pool (percentage per node).
		 * Required
		 */
		avgCPUPercentage: FormControl<number | null | undefined>,

		/**
		 * The average used disk space in GiB across all nodes in the pool.
		 * Required
		 */
		avgDiskGiB: FormControl<number | null | undefined>,

		/**
		 * The average memory usage in GiB across all nodes in the pool.
		 * Required
		 */
		avgMemoryGiB: FormControl<number | null | undefined>,

		/**
		 * The total amount of data in GiB of disk reads across all nodes in the pool.
		 * Required
		 */
		diskReadGiB: FormControl<number | null | undefined>,

		/**
		 * The total number of disk read operations across all nodes in the pool.
		 * Required
		 */
		diskReadIOps: FormControl<number | null | undefined>,

		/**
		 * The total amount of data in GiB of disk writes across all nodes in the pool.
		 * Required
		 */
		diskWriteGiB: FormControl<number | null | undefined>,

		/**
		 * The total number of disk write operations across all nodes in the pool.
		 * Required
		 */
		diskWriteIOps: FormControl<number | null | undefined>,

		/**
		 * The time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime.
		 * Required
		 */
		lastUpdateTime: FormControl<Date | null | undefined>,

		/**
		 * The total amount of data in GiB of network reads across all nodes in the pool.
		 * Required
		 */
		networkReadGiB: FormControl<number | null | undefined>,

		/**
		 * The total amount of data in GiB of network writes across all nodes in the pool.
		 * Required
		 */
		networkWriteGiB: FormControl<number | null | undefined>,

		/**
		 * The peak used disk space in GiB across all nodes in the pool.
		 * Required
		 */
		peakDiskGiB: FormControl<number | null | undefined>,

		/**
		 * The peak memory usage in GiB across all nodes in the pool.
		 * Required
		 */
		peakMemoryGiB: FormControl<number | null | undefined>,

		/**
		 * The start time of the time range covered by the statistics.
		 * Required
		 */
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


	/** The schedule according to which jobs will be created */
	export interface Schedule {

		/** A time after which no job will be created under this job schedule. The schedule will move to the completed state as soon as this deadline is past and there is no active job under this job schedule. */
		doNotRunAfter?: Date | null;

		/** The earliest time at which any job may be created under this job schedule. If you do not specify a doNotRunUntil time, the schedule becomes ready to create jobs immediately. */
		doNotRunUntil?: Date | null;

		/** The time interval between the start times of two successive jobs under the job schedule. A job schedule can have at most one active job under it at any given time. */
		recurrenceInterval?: string | null;

		/** The time interval, starting from the time at which the schedule indicates a job should be created, within which a job must be created. If a job is not created within the startWindow interval, then the 'opportunity' is lost; no job will be created until the next recurrence of the schedule. */
		startWindow?: string | null;
	}

	/** The schedule according to which jobs will be created */
	export interface ScheduleFormProperties {

		/** A time after which no job will be created under this job schedule. The schedule will move to the completed state as soon as this deadline is past and there is no active job under this job schedule. */
		doNotRunAfter: FormControl<Date | null | undefined>,

		/** The earliest time at which any job may be created under this job schedule. If you do not specify a doNotRunUntil time, the schedule becomes ready to create jobs immediately. */
		doNotRunUntil: FormControl<Date | null | undefined>,

		/** The time interval between the start times of two successive jobs under the job schedule. A job schedule can have at most one active job under it at any given time. */
		recurrenceInterval: FormControl<string | null | undefined>,

		/** The time interval, starting from the time at which the schedule indicates a job should be created, within which a job must be created. If a job is not created within the startWindow interval, then the 'opportunity' is lost; no job will be created until the next recurrence of the schedule. */
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


	/** A task which is run when a compute node joins a pool in the Azure Batch service, or when the compute node is rebooted or reimaged. */
	export interface StartTask {

		/** The command line of the start task. */
		commandLine?: string | null;

		/** A list of environment variable settings for the start task. */
		environmentSettings?: Array<EnvironmentSetting>;

		/** The maximum number of times the task may be retried. */
		maxTaskRetryCount?: number | null;

		/** A list of files that the Batch service will download to the compute node before running the command line. */
		resourceFiles?: Array<ResourceFile>;

		/** Whether to run the start task in elevated mode. The default value is false. */
		runElevated?: boolean | null;

		/** Whether the Batch service should wait for the start task to complete successfully (that is, to exit with exit code 0) before scheduling any tasks on the compute node. */
		waitForSuccess?: boolean | null;
	}

	/** A task which is run when a compute node joins a pool in the Azure Batch service, or when the compute node is rebooted or reimaged. */
	export interface StartTaskFormProperties {

		/** The command line of the start task. */
		commandLine: FormControl<string | null | undefined>,

		/** The maximum number of times the task may be retried. */
		maxTaskRetryCount: FormControl<number | null | undefined>,

		/** Whether to run the start task in elevated mode. The default value is false. */
		runElevated: FormControl<boolean | null | undefined>,

		/** Whether the Batch service should wait for the start task to complete successfully (that is, to exit with exit code 0) before scheduling any tasks on the compute node. */
		waitForSuccess: FormControl<boolean | null | undefined>,
	}
	export function CreateStartTaskFormGroup() {
		return new FormGroup<StartTaskFormProperties>({
			commandLine: new FormControl<string | null | undefined>(undefined),
			maxTaskRetryCount: new FormControl<number | null | undefined>(undefined),
			runElevated: new FormControl<boolean | null | undefined>(undefined),
			waitForSuccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about a start task running on a compute node. */
	export interface StartTaskInformation {

		/** The time at which the start task stopped running. */
		endTime?: Date | null;

		/** The exit code of the start task. */
		exitCode?: number | null;

		/** The most recent time at which a retry of the task started running. */
		lastRetryTime?: Date | null;

		/**
		 * The number of times the task has been retried by the Batch service.
		 * Required
		 */
		retryCount: number;

		/** Information about an error when scheduling a task. */
		schedulingError?: TaskSchedulingError;

		/**
		 * The time at which the start task started running.
		 * Required
		 */
		startTime: Date;

		/**
		 * The state of the start task on the compute node.
		 * Required
		 */
		state: JobPreparationTaskExecutionInformationState;
	}

	/** Information about a start task running on a compute node. */
	export interface StartTaskInformationFormProperties {

		/** The time at which the start task stopped running. */
		endTime: FormControl<Date | null | undefined>,

		/** The exit code of the start task. */
		exitCode: FormControl<number | null | undefined>,

		/** The most recent time at which a retry of the task started running. */
		lastRetryTime: FormControl<Date | null | undefined>,

		/**
		 * The number of times the task has been retried by the Batch service.
		 * Required
		 */
		retryCount: FormControl<number | null | undefined>,

		/**
		 * The time at which the start task started running.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * The state of the start task on the compute node.
		 * Required
		 */
		state: FormControl<JobPreparationTaskExecutionInformationState | null | undefined>,
	}
	export function CreateStartTaskInformationFormGroup() {
		return new FormGroup<StartTaskInformationFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
			lastRetryTime: new FormControl<Date | null | undefined>(undefined),
			retryCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<JobPreparationTaskExecutionInformationState | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A collection of Azure Batch tasks to add. */
	export interface TaskAddCollectionParameter {

		/**
		 * The collection of tasks to add.
		 * Required
		 */
		value: Array<TaskAddParameter>;
	}

	/** A collection of Azure Batch tasks to add. */
	export interface TaskAddCollectionParameterFormProperties {
	}
	export function CreateTaskAddCollectionParameterFormGroup() {
		return new FormGroup<TaskAddCollectionParameterFormProperties>({
		});

	}


	/** An Azure Batch task to add. */
	export interface TaskAddParameter {

		/** A locality hint that can be used by the Batch service to select a compute node on which to start a task. */
		affinityInfo?: AffinityInformation;

		/**
		 * The command line of the task. For multi-instance tasks, the command line is executed on the primary subtask after all the subtasks have finished executing the coordination command line.
		 * Required
		 */
		commandLine: string;

		/** Constraints to apply to the Job Manager task. */
		constraints?: TaskConstraints;

		/** Specifies any dependencies of a task. Any task that is explicitly specified or within a dependency range must complete before the dependant task will be scheduled. */
		dependsOn?: TaskDependencies;

		/** A display name for the task. */
		displayName?: string | null;

		/** A list of environment variable settings for the task. */
		environmentSettings?: Array<EnvironmentSetting>;

		/**
		 * A string that uniquely identifies the task within the job. The id can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters.
		 * Required
		 */
		id: string;

		/** Settings which specify how to run a multi-instance task. Multi-instance tasks are commonly used to support MPI tasks. */
		multiInstanceSettings?: MultiInstanceSettings;

		/** A list of files that the Batch service will download to the compute node before running the command line. For multi-instance tasks, the resource files will only be downloaded to the compute node on which the primary subtask is executed. */
		resourceFiles?: Array<ResourceFile>;

		/** Whether to run the task in elevated mode. */
		runElevated?: boolean | null;
	}

	/** An Azure Batch task to add. */
	export interface TaskAddParameterFormProperties {

		/**
		 * The command line of the task. For multi-instance tasks, the command line is executed on the primary subtask after all the subtasks have finished executing the coordination command line.
		 * Required
		 */
		commandLine: FormControl<string | null | undefined>,

		/** A display name for the task. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * A string that uniquely identifies the task within the job. The id can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Whether to run the task in elevated mode. */
		runElevated: FormControl<boolean | null | undefined>,
	}
	export function CreateTaskAddParameterFormGroup() {
		return new FormGroup<TaskAddParameterFormProperties>({
			commandLine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runElevated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response to a TaskOperations.AddCollection request. */
	export interface TaskAddCollectionResult {

		/** The results of the add task collection operation. */
		value?: Array<TaskAddResult>;
	}

	/** Response to a TaskOperations.AddCollection request. */
	export interface TaskAddCollectionResultFormProperties {
	}
	export function CreateTaskAddCollectionResultFormGroup() {
		return new FormGroup<TaskAddCollectionResultFormProperties>({
		});

	}


	/** Result for a single task added as part of an add task collection operation. */
	export interface TaskAddResult {

		/** The ETag of the task, if the task was successfully added. */
		eTag?: string | null;

		/** An error response received from the Azure Batch service. */
		error?: BatchError;

		/** The last modified time of the task. */
		lastModified?: Date | null;

		/** The URL of the task, if the task was successfully added. */
		location?: string | null;

		/**
		 * The status of the add task request.
		 * Required
		 */
		status: TaskAddResultStatus;

		/**
		 * The id of the task for which this is the result.
		 * Required
		 */
		taskId: string;
	}

	/** Result for a single task added as part of an add task collection operation. */
	export interface TaskAddResultFormProperties {

		/** The ETag of the task, if the task was successfully added. */
		eTag: FormControl<string | null | undefined>,

		/** The last modified time of the task. */
		lastModified: FormControl<Date | null | undefined>,

		/** The URL of the task, if the task was successfully added. */
		location: FormControl<string | null | undefined>,

		/**
		 * The status of the add task request.
		 * Required
		 */
		status: FormControl<TaskAddResultStatus | null | undefined>,

		/**
		 * The id of the task for which this is the result.
		 * Required
		 */
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

	export enum TaskAddResultStatus { success = 0, clienterror = 1, servererror = 2, unmapped = 3 }


	/** Constraints to apply to the Job Manager task. */
	export interface TaskConstraints {

		/** The maximum number of times the task may be retried. The Batch service retries a task if its exit code is nonzero. */
		maxTaskRetryCount?: number | null;

		/** The maximum elapsed time that the task may run, measured from the time the task starts. If the task does not complete within the time limit, the Batch service terminates it. */
		maxWallClockTime?: string | null;

		/** The minimum time to retain the working directory for the task on the compute node where it ran, from the time it completes execution. After this time, the Batch service may delete the working directory and all its contents. The default is infinite. */
		retentionTime?: string | null;
	}

	/** Constraints to apply to the Job Manager task. */
	export interface TaskConstraintsFormProperties {

		/** The maximum number of times the task may be retried. The Batch service retries a task if its exit code is nonzero. */
		maxTaskRetryCount: FormControl<number | null | undefined>,

		/** The maximum elapsed time that the task may run, measured from the time the task starts. If the task does not complete within the time limit, the Batch service terminates it. */
		maxWallClockTime: FormControl<string | null | undefined>,

		/** The minimum time to retain the working directory for the task on the compute node where it ran, from the time it completes execution. After this time, the Batch service may delete the working directory and all its contents. The default is infinite. */
		retentionTime: FormControl<string | null | undefined>,
	}
	export function CreateTaskConstraintsFormGroup() {
		return new FormGroup<TaskConstraintsFormProperties>({
			maxTaskRetryCount: new FormControl<number | null | undefined>(undefined),
			maxWallClockTime: new FormControl<string | null | undefined>(undefined),
			retentionTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies any dependencies of a task. Any task that is explicitly specified or within a dependency range must complete before the dependant task will be scheduled. */
	export interface TaskDependencies {

		/** The list of task ranges that must complete before this task can be scheduled. */
		taskIdRanges?: Array<TaskIdRange>;

		/** The list of task ids that must complete before this task can be scheduled. */
		taskIds?: Array<string>;
	}

	/** Specifies any dependencies of a task. Any task that is explicitly specified or within a dependency range must complete before the dependant task will be scheduled. */
	export interface TaskDependenciesFormProperties {
	}
	export function CreateTaskDependenciesFormGroup() {
		return new FormGroup<TaskDependenciesFormProperties>({
		});

	}


	/** A range of task ids that a task can depend on. All tasks with ids in the range must complete successfully before the dependent task can be scheduled. */
	export interface TaskIdRange {

		/**
		 * The last task id in the range.
		 * Required
		 */
		end: number;

		/**
		 * The first task id in the range.
		 * Required
		 */
		start: number;
	}

	/** A range of task ids that a task can depend on. All tasks with ids in the range must complete successfully before the dependent task can be scheduled. */
	export interface TaskIdRangeFormProperties {

		/**
		 * The last task id in the range.
		 * Required
		 */
		end: FormControl<number | null | undefined>,

		/**
		 * The first task id in the range.
		 * Required
		 */
		start: FormControl<number | null | undefined>,
	}
	export function CreateTaskIdRangeFormGroup() {
		return new FormGroup<TaskIdRangeFormProperties>({
			end: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			start: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the execution of a task. */
	export interface TaskExecutionInformation {

		/** The time at which the task completed. This property is set only if the task is in the Completed state. */
		endTime?: Date | null;

		/** The exit code of the task. This property is set only if the task is in completed state. */
		exitCode?: number | null;

		/** The most recent time at which the task has been requeued by the Batch service as the result of a user request. */
		lastRequeueTime?: Date | null;

		/** The most recent time at which a retry of the task started running. */
		lastRetryTime?: Date | null;

		/**
		 * The number of times the task has been requeued by the Batch service as the result of a user request.
		 * Required
		 */
		requeueCount: number;

		/**
		 * The number of times the task has been retried by the Batch service.
		 * Required
		 */
		retryCount: number;

		/** Information about an error when scheduling a task. */
		schedulingError?: TaskSchedulingError;

		/** The time at which the task started running. If the task has been restarted or retried, this is the most recent time at which the task started running. */
		startTime?: Date | null;
	}

	/** Information about the execution of a task. */
	export interface TaskExecutionInformationFormProperties {

		/** The time at which the task completed. This property is set only if the task is in the Completed state. */
		endTime: FormControl<Date | null | undefined>,

		/** The exit code of the task. This property is set only if the task is in completed state. */
		exitCode: FormControl<number | null | undefined>,

		/** The most recent time at which the task has been requeued by the Batch service as the result of a user request. */
		lastRequeueTime: FormControl<Date | null | undefined>,

		/** The most recent time at which a retry of the task started running. */
		lastRetryTime: FormControl<Date | null | undefined>,

		/**
		 * The number of times the task has been requeued by the Batch service as the result of a user request.
		 * Required
		 */
		requeueCount: FormControl<number | null | undefined>,

		/**
		 * The number of times the task has been retried by the Batch service.
		 * Required
		 */
		retryCount: FormControl<number | null | undefined>,

		/** The time at which the task started running. If the task has been restarted or retried, this is the most recent time at which the task started running. */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateTaskExecutionInformationFormGroup() {
		return new FormGroup<TaskExecutionInformationFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
			lastRequeueTime: new FormControl<Date | null | undefined>(undefined),
			lastRetryTime: new FormControl<Date | null | undefined>(undefined),
			requeueCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			retryCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about an error when scheduling a task. */
	export interface TaskSchedulingError {

		/**
		 * The category of the task scheduling error.
		 * Required
		 */
		category: JobSchedulingErrorCategory;

		/** An identifier for the task scheduling error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** The list of additional error details related to the scheduling error. */
		details?: Array<NameValuePair>;

		/** A message describing the task scheduling error, intended to be suitable for display in a user interface. */
		message?: string | null;
	}

	/** Information about an error when scheduling a task. */
	export interface TaskSchedulingErrorFormProperties {

		/**
		 * The category of the task scheduling error.
		 * Required
		 */
		category: FormControl<JobSchedulingErrorCategory | null | undefined>,

		/** An identifier for the task scheduling error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the task scheduling error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateTaskSchedulingErrorFormGroup() {
		return new FormGroup<TaskSchedulingErrorFormProperties>({
			category: new FormControl<JobSchedulingErrorCategory | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies how tasks should be distributed across compute nodes. */
	export interface TaskSchedulingPolicy {

		/**
		 * How tasks should be distributed across compute nodes
		 * Required
		 */
		nodeFillType: TaskSchedulingPolicyNodeFillType;
	}

	/** Specifies how tasks should be distributed across compute nodes. */
	export interface TaskSchedulingPolicyFormProperties {

		/**
		 * How tasks should be distributed across compute nodes
		 * Required
		 */
		nodeFillType: FormControl<TaskSchedulingPolicyNodeFillType | null | undefined>,
	}
	export function CreateTaskSchedulingPolicyFormGroup() {
		return new FormGroup<TaskSchedulingPolicyFormProperties>({
			nodeFillType: new FormControl<TaskSchedulingPolicyNodeFillType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TaskSchedulingPolicyNodeFillType { spread = 0, pack = 1, unmapped = 2 }


	/** Resource usage statistics for a task. */
	export interface TaskStatistics {

		/**
		 * The total kernel mode CPU time (summed across all cores and all compute nodes) consumed by the task.
		 * Required
		 */
		kernelCPUTime: string;

		/**
		 * The time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime.
		 * Required
		 */
		lastUpdateTime: Date;

		/**
		 * The total gibibytes read from disk by the task.
		 * Required
		 */
		readIOGiB: number;

		/**
		 * The total number of disk read operations made by the task.
		 * Required
		 */
		readIOps: number;

		/**
		 * The start time of the time range covered by the statistics.
		 * Required
		 */
		startTime: Date;

		/**
		 * The URL of the statistics.
		 * Required
		 */
		url: string;

		/**
		 * The total user mode CPU time (summed across all cores and all compute nodes) consumed by the task.
		 * Required
		 */
		userCPUTime: string;

		/**
		 * The total wait time of the task. The wait time for a task is defined as the elapsed time between the creation of the task and the start of task execution. (If the task is retried due to failures, the wait time is the time to the most recent task execution.)
		 * Required
		 */
		waitTime: string;

		/**
		 * The total wall clock time of the task.
		 * Required
		 */
		wallClockTime: string;

		/**
		 * The total gibibytes written to disk by the task.
		 * Required
		 */
		writeIOGiB: number;

		/**
		 * The total number of disk write operations made by the task.
		 * Required
		 */
		writeIOps: number;
	}

	/** Resource usage statistics for a task. */
	export interface TaskStatisticsFormProperties {

		/**
		 * The total kernel mode CPU time (summed across all cores and all compute nodes) consumed by the task.
		 * Required
		 */
		kernelCPUTime: FormControl<string | null | undefined>,

		/**
		 * The time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime.
		 * Required
		 */
		lastUpdateTime: FormControl<Date | null | undefined>,

		/**
		 * The total gibibytes read from disk by the task.
		 * Required
		 */
		readIOGiB: FormControl<number | null | undefined>,

		/**
		 * The total number of disk read operations made by the task.
		 * Required
		 */
		readIOps: FormControl<number | null | undefined>,

		/**
		 * The start time of the time range covered by the statistics.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * The URL of the statistics.
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/**
		 * The total user mode CPU time (summed across all cores and all compute nodes) consumed by the task.
		 * Required
		 */
		userCPUTime: FormControl<string | null | undefined>,

		/**
		 * The total wait time of the task. The wait time for a task is defined as the elapsed time between the creation of the task and the start of task execution. (If the task is retried due to failures, the wait time is the time to the most recent task execution.)
		 * Required
		 */
		waitTime: FormControl<string | null | undefined>,

		/**
		 * The total wall clock time of the task.
		 * Required
		 */
		wallClockTime: FormControl<string | null | undefined>,

		/**
		 * The total gibibytes written to disk by the task.
		 * Required
		 */
		writeIOGiB: FormControl<number | null | undefined>,

		/**
		 * The total number of disk write operations made by the task.
		 * Required
		 */
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


	/** Parameters for a CloudTaskOperations.Update request. */
	export interface TaskUpdateParameter {

		/** Constraints to apply to the Job Manager task. */
		constraints?: TaskConstraints;
	}

	/** Parameters for a CloudTaskOperations.Update request. */
	export interface TaskUpdateParameterFormProperties {
	}
	export function CreateTaskUpdateParameterFormGroup() {
		return new FormGroup<TaskUpdateParameterFormProperties>({
		});

	}


	/** Statistics related to pool usage information. */
	export interface UsageStatistics {

		/**
		 * The aggregated wall-clock time of the dedicated compute node cores being part of the pool.
		 * Required
		 */
		dedicatedCoreTime: string;

		/**
		 * The time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime.
		 * Required
		 */
		lastUpdateTime: Date;

		/**
		 * The start time of the time range covered by the statistics.
		 * Required
		 */
		startTime: Date;
	}

	/** Statistics related to pool usage information. */
	export interface UsageStatisticsFormProperties {

		/**
		 * The aggregated wall-clock time of the dedicated compute node cores being part of the pool.
		 * Required
		 */
		dedicatedCoreTime: FormControl<string | null | undefined>,

		/**
		 * The time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime.
		 * Required
		 */
		lastUpdateTime: FormControl<Date | null | undefined>,

		/**
		 * The start time of the time range covered by the statistics.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateUsageStatisticsFormGroup() {
		return new FormGroup<UsageStatisticsFormProperties>({
			dedicatedCoreTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration for compute nodes in a pool based on the Azure Virtual Machines infrastructure. */
	export interface VirtualMachineConfiguration {

		/**
		 * A reference to an Azure Virtual Machines Marketplace image.
		 * Required
		 */
		imageReference: ImageReference;

		/**
		 * The SKU of Batch Node Agent to be provisioned on the compute node. The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems.
		 * Required
		 */
		nodeAgentSKUId: string;

		/** Windows operating system settings to apply to the virtual machine. */
		windowsConfiguration?: WindowsConfiguration;
	}

	/** The configuration for compute nodes in a pool based on the Azure Virtual Machines infrastructure. */
	export interface VirtualMachineConfigurationFormProperties {

		/**
		 * The SKU of Batch Node Agent to be provisioned on the compute node. The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems.
		 * Required
		 */
		nodeAgentSKUId: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineConfigurationFormGroup() {
		return new FormGroup<VirtualMachineConfigurationFormProperties>({
			nodeAgentSKUId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Windows operating system settings to apply to the virtual machine. */
	export interface WindowsConfiguration {

		/** Whether automatic updates are enabled on the virtual machine. If omitted, the default value is true. */
		enableAutomaticUpdates?: boolean | null;
	}

	/** Windows operating system settings to apply to the virtual machine. */
	export interface WindowsConfigurationFormProperties {

		/** Whether automatic updates are enabled on the virtual machine. If omitted, the default value is true. */
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
		 * Get applications
		 * @param {number} maxresults The maximum number of items to return in the response.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {ApplicationListResult} 
		 */
		Application_List(maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<ApplicationListResult> {
			return this.http.get<ApplicationListResult>(this.baseUri + 'applications?maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified application.
		 * Get applications/{applicationId}
		 * @param {string} applicationId The id of the application.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {ApplicationSummary} 
		 */
		Application_Get(applicationId: string, timeout: number | null | undefined, api_version: string): Observable<ApplicationSummary> {
			return this.http.get<ApplicationSummary>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all of the certificates that have been added to the specified account.
		 * Get certificates
		 * @param {string} filter An OData $filter clause.
		 * @param {string} select An OData $select clause.
		 * @param {number} maxresults The maximum number of items to return in the response.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CertificateListResult} Gets the list of certificates.
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
		 * @param {string} api_version Client API Version.
		 * @return {Certificate} 
		 */
		Certificate_Get(thumbprintAlgorithm: string, thumbprint: string, select: string | null | undefined, timeout: number | null | undefined, api_version: string): Observable<Certificate> {
			return this.http.get<Certificate>(this.baseUri + 'certificates(thumbprintAlgorithm=' + (thumbprintAlgorithm == null ? '' : encodeURIComponent(thumbprintAlgorithm)) + ',thumbprint=' + (thumbprint == null ? '' : encodeURIComponent(thumbprint)) + ')&select=' + (select == null ? '' : encodeURIComponent(select)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a certificate from the specified account.
		 * Delete certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})
		 * @param {string} thumbprintAlgorithm The algorithm used to derive the thumbprint parameter. This must be sha1.
		 * @param {string} thumbprint The thumbprint of the certificate to be deleted.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Certificate_Delete(thumbprintAlgorithm: string, thumbprint: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'certificates(thumbprintAlgorithm=' + (thumbprintAlgorithm == null ? '' : encodeURIComponent(thumbprintAlgorithm)) + ',thumbprint=' + (thumbprint == null ? '' : encodeURIComponent(thumbprint)) + ')&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels a failed deletion of a certificate from the specified account.
		 * Post certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})/canceldelete
		 * @param {string} thumbprintAlgorithm The algorithm used to derive the thumbprint parameter. This must be sha1.
		 * @param {string} thumbprint The thumbprint of the certificate being deleted.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Certificate_CancelDeletion(thumbprintAlgorithm: string, thumbprint: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'certificates(thumbprintAlgorithm=' + (thumbprintAlgorithm == null ? '' : encodeURIComponent(thumbprintAlgorithm)) + ',thumbprint=' + (thumbprint == null ? '' : encodeURIComponent(thumbprint)) + ')/canceldelete&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all of the jobs in the specified account.
		 * Get jobs
		 * @param {string} filter An OData $filter clause.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} maxresults The maximum number of items to return in the response.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CloudJobListResult} 
		 */
		Job_List(filter: string | null | undefined, select: string | null | undefined, expand: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudJobListResult> {
			return this.http.get<CloudJobListResult>(this.baseUri + 'jobs?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified job.
		 * Get jobs/{jobId}
		 * @param {string} jobId The id of the job.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CloudJob} 
		 */
		Job_Get(jobId: string, select: string | null | undefined, expand: string | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudJob> {
			return this.http.get<CloudJob>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a job.
		 * Delete jobs/{jobId}
		 * @param {string} jobId The id of the job to delete.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Job_Delete(jobId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables the specified job, allowing new tasks to run.
		 * Post jobs/{jobId}/enable
		 * @param {string} jobId The id of the job to enable.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Job_Enable(jobId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/enable&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the execution status of the Job Preparation and Job Release task for the specified job across the compute nodes where the job has run.
		 * Get jobs/{jobId}/jobpreparationandreleasetaskstatus
		 * @param {string} jobId The id of the job.
		 * @param {string} filter An OData $filter clause.
		 * @param {string} select An OData $select clause.
		 * @param {number} maxresults The maximum number of items to return in the response.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CloudJobListPreparationAndReleaseTaskStatusResult} 
		 */
		Job_ListPreparationAndReleaseTaskStatus(jobId: string, filter: string | null | undefined, select: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudJobListPreparationAndReleaseTaskStatusResult> {
			return this.http.get<CloudJobListPreparationAndReleaseTaskStatusResult>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/jobpreparationandreleasetaskstatus&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all of the tasks that are associated with the specified job.
		 * Get jobs/{jobId}/tasks
		 * @param {string} jobId The id of the job.
		 * @param {string} filter An OData $filter clause.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} maxresults The maximum number of items to return in the response.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CloudTaskListResult} 
		 */
		Task_List(jobId: string, filter: string | null | undefined, select: string | null | undefined, expand: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudTaskListResult> {
			return this.http.get<CloudTaskListResult>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified task.
		 * Get jobs/{jobId}/tasks/{taskId}
		 * @param {string} jobId The id of the job that contains the task.
		 * @param {string} taskId The id of the task to get information about.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CloudTask} 
		 */
		Task_Get(jobId: string, taskId: string, select: string | null | undefined, expand: string | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudTask> {
			return this.http.get<CloudTask>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a task from the specified job.
		 * Delete jobs/{jobId}/tasks/{taskId}
		 * @param {string} jobId The id of the job from which to delete the task.
		 * @param {string} taskId The id of the task to delete.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Task_Delete(jobId: string, taskId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the files in a task's directory on its compute node.
		 * Get jobs/{jobId}/tasks/{taskId}/files
		 * @param {string} jobId The id of the job that contains the task.
		 * @param {string} taskId The id of the task whose files you want to list.
		 * @param {string} filter An OData $filter clause.
		 * @param {boolean} recursive Whether to list children of a directory.
		 * @param {number} maxresults The maximum number of items to return in the response.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {NodeFileListResult} 
		 */
		File_ListFromTask(jobId: string, taskId: string, filter: string | null | undefined, recursive: boolean | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<NodeFileListResult> {
			return this.http.get<NodeFileListResult>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/files&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&recursive=' + recursive + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns the content of the specified task file.
		 * Get jobs/{jobId}/tasks/{taskId}/files/{fileName}
		 * @param {string} jobId The id of the job that contains the task.
		 * @param {string} taskId The id of the task whose file you want to retrieve.
		 * @param {string} fileName The path to the task file that you want to get the content of.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {string} 
		 */
		File_GetFromTask(jobId: string, taskId: string, fileName: string, timeout: number | null | undefined, api_version: string): Observable<string> {
			return this.http.get(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/files/' + (fileName == null ? '' : encodeURIComponent(fileName)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { responseType: 'text' });
		}

		/**
		 * Deletes the specified task file from the compute node where the task ran.
		 * Delete jobs/{jobId}/tasks/{taskId}/files/{fileName}
		 * @param {string} jobId The id of the job that contains the task.
		 * @param {string} taskId The id of the task whose file you want to delete.
		 * @param {string} fileName The path to the task file that you want to delete.
		 * @param {boolean} recursive Whether to delete children of a directory. If the fileName parameter represents a directory instead of a file, you can set Recursive to true to delete the directory and all of the files and subdirectories in it. If Recursive is false then the directory must be empty or deletion will fail.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		File_DeleteFromTask(jobId: string, taskId: string, fileName: string, recursive: boolean | null | undefined, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/files/' + (fileName == null ? '' : encodeURIComponent(fileName)) + '&recursive=' + recursive + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all of the subtasks that are associated with the specified multi-instance task.
		 * Get jobs/{jobId}/tasks/{taskId}/subtasksinfo
		 * @param {string} jobId The id of the job.
		 * @param {string} taskId The id of the task.
		 * @param {string} select An OData $select clause.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CloudTaskListSubtasksResult} 
		 */
		Task_ListSubtasks(jobId: string, taskId: string, select: string | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudTaskListSubtasksResult> {
			return this.http.get<CloudTaskListSubtasksResult>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/subtasksinfo&select=' + (select == null ? '' : encodeURIComponent(select)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Terminates the specified task.
		 * Post jobs/{jobId}/tasks/{taskId}/terminate
		 * @param {string} jobId The id of the job containing the task.
		 * @param {string} taskId The id of the task to terminate.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Task_Terminate(jobId: string, taskId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/terminate&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all of the job schedules in the specified account.
		 * Get jobschedules
		 * @param {string} filter An OData $filter clause.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} maxresults The maximum number of items to return in the response.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CloudJobScheduleListResult} 
		 */
		JobSchedule_List(filter: string | null | undefined, select: string | null | undefined, expand: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudJobScheduleListResult> {
			return this.http.get<CloudJobScheduleListResult>(this.baseUri + 'jobschedules?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified job schedule.
		 * Get jobschedules/{jobScheduleId}
		 * @param {string} jobScheduleId The id of the job schedule to get.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CloudJobSchedule} 
		 */
		JobSchedule_Get(jobScheduleId: string, select: string | null | undefined, expand: string | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudJobSchedule> {
			return this.http.get<CloudJobSchedule>(this.baseUri + 'jobschedules/' + (jobScheduleId == null ? '' : encodeURIComponent(jobScheduleId)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a job schedule from the specified account.
		 * Delete jobschedules/{jobScheduleId}
		 * @param {string} jobScheduleId The id of the job schedule to delete.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		JobSchedule_Delete(jobScheduleId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'jobschedules/' + (jobScheduleId == null ? '' : encodeURIComponent(jobScheduleId)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Disables a job schedule.
		 * Post jobschedules/{jobScheduleId}/disable
		 * @param {string} jobScheduleId The id of the job schedule to disable.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		JobSchedule_Disable(jobScheduleId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobschedules/' + (jobScheduleId == null ? '' : encodeURIComponent(jobScheduleId)) + '/disable&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables a job schedule.
		 * Post jobschedules/{jobScheduleId}/enable
		 * @param {string} jobScheduleId The id of the job schedule to enable.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		JobSchedule_Enable(jobScheduleId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobschedules/' + (jobScheduleId == null ? '' : encodeURIComponent(jobScheduleId)) + '/enable&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the jobs that have been created under the specified job schedule.
		 * Get jobschedules/{jobScheduleId}/jobs
		 * @param {string} jobScheduleId The id of the job schedule from which you want to get a list of jobs.
		 * @param {string} filter An OData $filter clause.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} maxresults The maximum number of items to return in the response.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CloudJobListResult} 
		 */
		Job_ListFromJobSchedule(jobScheduleId: string, filter: string | null | undefined, select: string | null | undefined, expand: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudJobListResult> {
			return this.http.get<CloudJobListResult>(this.baseUri + 'jobschedules/' + (jobScheduleId == null ? '' : encodeURIComponent(jobScheduleId)) + '/jobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Terminates a job schedule.
		 * Post jobschedules/{jobScheduleId}/terminate
		 * @param {string} jobScheduleId The id of the job schedule to terminates.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		JobSchedule_Terminate(jobScheduleId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobschedules/' + (jobScheduleId == null ? '' : encodeURIComponent(jobScheduleId)) + '/terminate&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets lifetime summary statistics for all of the jobs in the specified account. Statistics are aggregated across all jobs that have ever existed in the account, from account creation to the last update time of the statistics.
		 * Get lifetimejobstats
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {JobStatistics} 
		 */
		Job_GetAllJobsLifetimeStatistics(timeout: number | null | undefined, api_version: string): Observable<JobStatistics> {
			return this.http.get<JobStatistics>(this.baseUri + 'lifetimejobstats?timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets lifetime summary statistics for all of the pools in the specified account. Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics.
		 * Get lifetimepoolstats
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {PoolStatistics} 
		 */
		Pool_GetAllPoolsLifetimeStatistics(timeout: number | null | undefined, api_version: string): Observable<PoolStatistics> {
			return this.http.get<PoolStatistics>(this.baseUri + 'lifetimepoolstats?timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all node agent SKUs supported by the Azure Batch service.
		 * Get nodeagentskus
		 * @param {string} filter An OData $filter clause.
		 * @param {number} maxresults The maximum number of items to return in the response.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {AccountListNodeAgentSkusResult} 
		 */
		Account_ListNodeAgentSkus(filter: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<AccountListNodeAgentSkusResult> {
			return this.http.get<AccountListNodeAgentSkusResult>(this.baseUri + 'nodeagentskus?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all of the pools in the specified account.
		 * Get pools
		 * @param {string} filter An OData $filter clause.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} maxresults The maximum number of items to return in the response.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CloudPoolListResult} 
		 */
		Pool_List(filter: string | null | undefined, select: string | null | undefined, expand: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudPoolListResult> {
			return this.http.get<CloudPoolListResult>(this.baseUri + 'pools?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified pool.
		 * Get pools/{poolId}
		 * @param {string} poolId The id of the pool to get.
		 * @param {string} select An OData $select clause.
		 * @param {string} expand An OData $expand clause.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {CloudPool} 
		 */
		Pool_Get(poolId: string, select: string | null | undefined, expand: string | null | undefined, timeout: number | null | undefined, api_version: string): Observable<CloudPool> {
			return this.http.get<CloudPool>(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a pool from the specified account.
		 * Delete pools/{poolId}
		 * @param {string} poolId The id of the pool to delete.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Pool_Delete(poolId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Disables automatic scaling for a pool.
		 * Post pools/{poolId}/disableautoscale
		 * @param {string} poolId The id of the pool on which to disable automatic scaling.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Pool_DisableAutoScale(poolId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/disableautoscale&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the compute nodes in the specified pool.
		 * Get pools/{poolId}/nodes
		 * @param {string} poolId The id of the pool from which you want to list nodes.
		 * @param {string} filter An OData $filter clause.
		 * @param {string} select An OData $select clause.
		 * @param {number} maxresults The maximum number of items to return in the response.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {ComputeNodeListResult} 
		 */
		ComputeNode_List(poolId: string, filter: string | null | undefined, select: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<ComputeNodeListResult> {
			return this.http.get<ComputeNodeListResult>(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified compute node.
		 * Get pools/{poolId}/nodes/{nodeId}
		 * @param {string} poolId The id of the pool that contains the compute node.
		 * @param {string} nodeId The id of the compute node that you want to get information about.
		 * @param {string} select An OData $select clause.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {ComputeNode} 
		 */
		ComputeNode_Get(poolId: string, nodeId: string, select: string | null | undefined, timeout: number | null | undefined, api_version: string): Observable<ComputeNode> {
			return this.http.get<ComputeNode>(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Enable task scheduling of the specified compute node.
		 * Post pools/{poolId}/nodes/{nodeId}/enablescheduling
		 * @param {string} poolId The id of the pool that contains the compute node.
		 * @param {string} nodeId The id of the compute node that you want to enable task scheduling.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		ComputeNode_EnableScheduling(poolId: string, nodeId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '/enablescheduling&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all of the files in task directories on the specified compute node.
		 * Get pools/{poolId}/nodes/{nodeId}/files
		 * @param {string} poolId The id of the pool that contains the compute node.
		 * @param {string} nodeId The id of the compute node whose files you want to list.
		 * @param {string} filter An OData $filter clause.
		 * @param {boolean} recursive Whether to list children of a directory.
		 * @param {number} maxresults The maximum number of items to return in the response.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {NodeFileListResult} 
		 */
		File_ListFromComputeNode(poolId: string, nodeId: string, filter: string | null | undefined, recursive: boolean | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<NodeFileListResult> {
			return this.http.get<NodeFileListResult>(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '/files&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&recursive=' + recursive + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns the content of the specified task file.
		 * Get pools/{poolId}/nodes/{nodeId}/files/{fileName}
		 * @param {string} poolId The id of the pool that contains the compute node.
		 * @param {string} nodeId The id of the compute node that contains the file.
		 * @param {string} fileName The path to the task file that you want to get the content of.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {string} 
		 */
		File_GetFromComputeNode(poolId: string, nodeId: string, fileName: string, timeout: number | null | undefined, api_version: string): Observable<string> {
			return this.http.get(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '/files/' + (fileName == null ? '' : encodeURIComponent(fileName)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { responseType: 'text' });
		}

		/**
		 * Deletes the specified task file from the compute node.
		 * Delete pools/{poolId}/nodes/{nodeId}/files/{fileName}
		 * @param {string} poolId The id of the pool that contains the compute node.
		 * @param {string} nodeId The id of the compute node from which you want to delete the file.
		 * @param {string} fileName The path to the file that you want to delete.
		 * @param {boolean} recursive Whether to delete children of a directory. If the fileName parameter represents a directory instead of a file, you can set Recursive to true to delete the directory and all of the files and subdirectories in it. If Recursive is false then the directory must be empty or deletion will fail.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		File_DeleteFromComputeNode(poolId: string, nodeId: string, fileName: string, recursive: boolean | null | undefined, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '/files/' + (fileName == null ? '' : encodeURIComponent(fileName)) + '&recursive=' + recursive + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the Remote Desktop Protocol file for the specified compute node.
		 * Get pools/{poolId}/nodes/{nodeId}/rdp
		 * @param {string} poolId The id of the pool that contains the compute node.
		 * @param {string} nodeId The id of the compute node for which you want to get the Remote Desktop Protocol file.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {string} 
		 */
		ComputeNode_GetRemoteDesktop(poolId: string, nodeId: string, timeout: number | null | undefined, api_version: string): Observable<string> {
			return this.http.get(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '/rdp&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { responseType: 'text' });
		}

		/**
		 * Gets the settings required for remote login to a compute node.
		 * Get pools/{poolId}/nodes/{nodeId}/remoteloginsettings
		 * @param {string} poolId The id of the pool that contains the compute node.
		 * @param {string} nodeId The id of the compute node for which to obtain the remote login settings.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {ComputeNodeGetRemoteLoginSettingsResult} 
		 */
		ComputeNode_GetRemoteLoginSettings(poolId: string, nodeId: string, timeout: number | null | undefined, api_version: string): Observable<ComputeNodeGetRemoteLoginSettingsResult> {
			return this.http.get<ComputeNodeGetRemoteLoginSettingsResult>(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '/remoteloginsettings&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a user account from the specified compute node.
		 * Delete pools/{poolId}/nodes/{nodeId}/users/{userName}
		 * @param {string} poolId The id of the pool that contains the compute node.
		 * @param {string} nodeId The id of the machine on which you want to delete a user account.
		 * @param {string} userName The name of the user account to delete.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		ComputeNode_DeleteUser(poolId: string, nodeId: string, userName: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/nodes/' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '/users/' + (userName == null ? '' : encodeURIComponent(userName)) + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops an ongoing resize operation on the pool. This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state.
		 * Post pools/{poolId}/stopresize
		 * @param {string} poolId The id of the pool whose resizing you want to stop.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {void} 
		 */
		Pool_StopResize(poolId: string, timeout: number | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/stopresize&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the usage metrics, aggregated by pool across individual time intervals, for the specified account.
		 * Get poolusagemetrics
		 * @param {Date} starttime The earliest time from which to include metrics. This must be at least two and a half hours before the current time.
		 * @param {Date} endtime The latest time from which to include metrics. This must be at least two hours before the current time.
		 * @param {string} filter An OData $filter clause.
		 * @param {number} maxresults The maximum number of items to return in the response.
		 * @param {number} timeout The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
		 * @param {string} api_version Client API Version.
		 * @return {PoolListPoolUsageMetricsResult} 
		 */
		Pool_ListPoolUsageMetrics(starttime: Date | null | undefined, endtime: Date | null | undefined, filter: string | null | undefined, maxresults: number | null | undefined, timeout: number | null | undefined, api_version: string): Observable<PoolListPoolUsageMetricsResult> {
			return this.http.get<PoolListPoolUsageMetricsResult>(this.baseUri + 'poolusagemetrics?starttime=' + starttime?.toISOString() + '&endtime=' + endtime?.toISOString() + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxresults=' + maxresults + '&timeout=' + timeout + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

