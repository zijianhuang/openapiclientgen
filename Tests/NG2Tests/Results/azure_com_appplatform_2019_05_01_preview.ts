import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** App resource payload */
	export interface AppResource {

		/** App resource properties payload */
		properties?: AppResourceProperties;
	}

	/** App resource payload */
	export interface AppResourceFormProperties {
	}
	export function CreateAppResourceFormGroup() {
		return new FormGroup<AppResourceFormProperties>({
		});

	}


	/** App resource properties payload */
	export interface AppResourceProperties {

		/** Name of the active deployment of the App */
		activeDeploymentName?: string | null;

		/** Date time when the resource is created */
		createdTime?: Date | null;

		/** Persistent disk payload */
		persistentDisk?: PersistentDisk;

		/** Provisioning state of the App */
		provisioningState?: AppResourcePropertiesProvisioningState | null;

		/** Indicates whether the App exposes public endpoint */
		public?: boolean | null;

		/** Temporary disk payload */
		temporaryDisk?: TemporaryDisk;

		/** URL of the App */
		url?: string | null;
	}

	/** App resource properties payload */
	export interface AppResourcePropertiesFormProperties {

		/** Name of the active deployment of the App */
		activeDeploymentName: FormControl<string | null | undefined>,

		/** Date time when the resource is created */
		createdTime: FormControl<Date | null | undefined>,

		/** Provisioning state of the App */
		provisioningState: FormControl<AppResourcePropertiesProvisioningState | null | undefined>,

		/** Indicates whether the App exposes public endpoint */
		public: FormControl<boolean | null | undefined>,

		/** URL of the App */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAppResourcePropertiesFormGroup() {
		return new FormGroup<AppResourcePropertiesFormProperties>({
			activeDeploymentName: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<AppResourcePropertiesProvisioningState | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Persistent disk payload */
	export interface PersistentDisk {

		/** Mount path of the persistent disk */
		mountPath?: string | null;

		/**
		 * Size of the persistent disk in GB
		 * Minimum: 0
		 * Maximum: 50
		 */
		sizeInGB?: number | null;

		/**
		 * Size of the used persistent disk in GB
		 * Minimum: 0
		 * Maximum: 50
		 */
		usedInGB?: number | null;
	}

	/** Persistent disk payload */
	export interface PersistentDiskFormProperties {

		/** Mount path of the persistent disk */
		mountPath: FormControl<string | null | undefined>,

		/**
		 * Size of the persistent disk in GB
		 * Minimum: 0
		 * Maximum: 50
		 */
		sizeInGB: FormControl<number | null | undefined>,

		/**
		 * Size of the used persistent disk in GB
		 * Minimum: 0
		 * Maximum: 50
		 */
		usedInGB: FormControl<number | null | undefined>,
	}
	export function CreatePersistentDiskFormGroup() {
		return new FormGroup<PersistentDiskFormProperties>({
			mountPath: new FormControl<string | null | undefined>(undefined),
			sizeInGB: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(50)]),
			usedInGB: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(50)]),
		});

	}

	export enum AppResourcePropertiesProvisioningState { Succeeded = 'Succeeded', Failed = 'Failed', Creating = 'Creating', Updating = 'Updating' }


	/** Temporary disk payload */
	export interface TemporaryDisk {

		/** Mount path of the temporary disk */
		mountPath?: string | null;

		/**
		 * Size of the temporary disk in GB
		 * Minimum: 0
		 * Maximum: 5
		 */
		sizeInGB?: number | null;
	}

	/** Temporary disk payload */
	export interface TemporaryDiskFormProperties {

		/** Mount path of the temporary disk */
		mountPath: FormControl<string | null | undefined>,

		/**
		 * Size of the temporary disk in GB
		 * Minimum: 0
		 * Maximum: 5
		 */
		sizeInGB: FormControl<number | null | undefined>,
	}
	export function CreateTemporaryDiskFormGroup() {
		return new FormGroup<TemporaryDiskFormProperties>({
			mountPath: new FormControl<string | null | undefined>(undefined),
			sizeInGB: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(5)]),
		});

	}


	/** Object that includes an array of App resources and a possible link for next set */
	export interface AppResourceCollection {

		/**
		 * URL client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink?: string | null;

		/** Collection of App resources */
		value?: Array<AppResource>;
	}

	/** Object that includes an array of App resources and a possible link for next set */
	export interface AppResourceCollectionFormProperties {

		/**
		 * URL client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAppResourceCollectionFormGroup() {
		return new FormGroup<AppResourceCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Available operations of the service */
	export interface AvailableOperations {

		/**
		 * URL client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink?: string | null;

		/** Collection of available operation details */
		value?: Array<OperationDetail>;
	}

	/** Available operations of the service */
	export interface AvailableOperationsFormProperties {

		/**
		 * URL client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAvailableOperationsFormGroup() {
		return new FormGroup<AvailableOperationsFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operation detail payload */
	export interface OperationDetail {

		/** Indicates whether the operation is a data action */
		dataAction?: boolean | null;

		/** Operation display payload */
		display?: OperationDisplay;

		/** Name of the operation */
		name?: string | null;

		/** Origin of the operation */
		origin?: string | null;

		/** Extra Operation properties */
		properties?: OperationProperties;
	}

	/** Operation detail payload */
	export interface OperationDetailFormProperties {

		/** Indicates whether the operation is a data action */
		dataAction: FormControl<boolean | null | undefined>,

		/** Name of the operation */
		name: FormControl<string | null | undefined>,

		/** Origin of the operation */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationDetailFormGroup() {
		return new FormGroup<OperationDetailFormProperties>({
			dataAction: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operation display payload */
	export interface OperationDisplay {

		/** Localized friendly description for the operation */
		description?: string | null;

		/** Localized friendly name for the operation */
		operation?: string | null;

		/** Resource provider of the operation */
		provider?: string | null;

		/** Resource of the operation */
		resource?: string | null;
	}

	/** Operation display payload */
	export interface OperationDisplayFormProperties {

		/** Localized friendly description for the operation */
		description: FormControl<string | null | undefined>,

		/** Localized friendly name for the operation */
		operation: FormControl<string | null | undefined>,

		/** Resource provider of the operation */
		provider: FormControl<string | null | undefined>,

		/** Resource of the operation */
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


	/** Extra Operation properties */
	export interface OperationProperties {

		/** Service specification payload */
		serviceSpecification?: ServiceSpecification;
	}

	/** Extra Operation properties */
	export interface OperationPropertiesFormProperties {
	}
	export function CreateOperationPropertiesFormGroup() {
		return new FormGroup<OperationPropertiesFormProperties>({
		});

	}


	/** Service specification payload */
	export interface ServiceSpecification {

		/** Specifications of the Log for Azure Monitoring */
		logSpecifications?: Array<LogSpecification>;

		/** Specifications of the Metrics for Azure Monitoring */
		metricSpecifications?: Array<MetricSpecification>;
	}

	/** Service specification payload */
	export interface ServiceSpecificationFormProperties {
	}
	export function CreateServiceSpecificationFormGroup() {
		return new FormGroup<ServiceSpecificationFormProperties>({
		});

	}


	/** Specifications of the Log for Azure Monitoring */
	export interface LogSpecification {

		/** Blob duration of the log */
		blobDuration?: string | null;

		/** Localized friendly display name of the log */
		displayName?: string | null;

		/** Name of the log */
		name?: string | null;
	}

	/** Specifications of the Log for Azure Monitoring */
	export interface LogSpecificationFormProperties {

		/** Blob duration of the log */
		blobDuration: FormControl<string | null | undefined>,

		/** Localized friendly display name of the log */
		displayName: FormControl<string | null | undefined>,

		/** Name of the log */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLogSpecificationFormGroup() {
		return new FormGroup<LogSpecificationFormProperties>({
			blobDuration: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifications of the Metrics for Azure Monitoring */
	export interface MetricSpecification {

		/** Only provide one value for this field. Valid values: Average, Minimum, Maximum, Total, Count. */
		aggregationType?: string | null;

		/** Name of the metric category that the metric belongs to. A metric can only belong to a single category. */
		category?: string | null;

		/** Dimensions of the metric */
		dimensions?: Array<MetricDimension>;

		/** Localized friendly description of the metric */
		displayDescription?: string | null;

		/** Localized friendly display name of the metric */
		displayName?: string | null;

		/** Optional. If set to true, then zero will be returned for time duration where no metric is emitted/published. */
		fillGapWithZero?: boolean | null;

		/** Name of the metric */
		name?: string | null;

		/** Supported aggregation types */
		supportedAggregationTypes?: Array<string>;

		/** Supported time grain types */
		supportedTimeGrainTypes?: Array<string>;

		/** Unit that makes sense for the metric */
		unit?: string | null;
	}

	/** Specifications of the Metrics for Azure Monitoring */
	export interface MetricSpecificationFormProperties {

		/** Only provide one value for this field. Valid values: Average, Minimum, Maximum, Total, Count. */
		aggregationType: FormControl<string | null | undefined>,

		/** Name of the metric category that the metric belongs to. A metric can only belong to a single category. */
		category: FormControl<string | null | undefined>,

		/** Localized friendly description of the metric */
		displayDescription: FormControl<string | null | undefined>,

		/** Localized friendly display name of the metric */
		displayName: FormControl<string | null | undefined>,

		/** Optional. If set to true, then zero will be returned for time duration where no metric is emitted/published. */
		fillGapWithZero: FormControl<boolean | null | undefined>,

		/** Name of the metric */
		name: FormControl<string | null | undefined>,

		/** Unit that makes sense for the metric */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateMetricSpecificationFormGroup() {
		return new FormGroup<MetricSpecificationFormProperties>({
			aggregationType: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			displayDescription: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			fillGapWithZero: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifications of the Dimension of metrics */
	export interface MetricDimension {

		/** Localized friendly display name of the dimension */
		displayName?: string | null;

		/** Name of the dimension */
		name?: string | null;
	}

	/** Specifications of the Dimension of metrics */
	export interface MetricDimensionFormProperties {

		/** Localized friendly display name of the dimension */
		displayName: FormControl<string | null | undefined>,

		/** Name of the dimension */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMetricDimensionFormGroup() {
		return new FormGroup<MetricDimensionFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Binding resource payload */
	export interface BindingResource {

		/** Binding resource properties payload */
		properties?: BindingResourceProperties;
	}

	/** Binding resource payload */
	export interface BindingResourceFormProperties {
	}
	export function CreateBindingResourceFormGroup() {
		return new FormGroup<BindingResourceFormProperties>({
		});

	}


	/** Binding resource properties payload */
	export interface BindingResourceProperties {

		/** Binding parameters of the Binding resource */
		bindingParameters?: {[id: string]: any };

		/** Creation time of the Binding resource */
		createdAt?: string | null;

		/** The generated Spring Boot property file for this binding. The secret will be deducted. */
		generatedProperties?: string | null;

		/** The key of the bound resource */
		key?: string | null;

		/** The Azure resource id of the bound resource */
		resourceId?: string | null;

		/** The name of the bound resource */
		resourceName?: string | null;

		/** The standard Azure resource type of the bound resource */
		resourceType?: string | null;

		/** Update time of the Binding resource */
		updatedAt?: string | null;
	}

	/** Binding resource properties payload */
	export interface BindingResourcePropertiesFormProperties {

		/** Binding parameters of the Binding resource */
		bindingParameters: FormControl<{[id: string]: any } | null | undefined>,

		/** Creation time of the Binding resource */
		createdAt: FormControl<string | null | undefined>,

		/** The generated Spring Boot property file for this binding. The secret will be deducted. */
		generatedProperties: FormControl<string | null | undefined>,

		/** The key of the bound resource */
		key: FormControl<string | null | undefined>,

		/** The Azure resource id of the bound resource */
		resourceId: FormControl<string | null | undefined>,

		/** The name of the bound resource */
		resourceName: FormControl<string | null | undefined>,

		/** The standard Azure resource type of the bound resource */
		resourceType: FormControl<string | null | undefined>,

		/** Update time of the Binding resource */
		updatedAt: FormControl<string | null | undefined>,
	}
	export function CreateBindingResourcePropertiesFormGroup() {
		return new FormGroup<BindingResourcePropertiesFormProperties>({
			bindingParameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined),
			generatedProperties: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object that includes an array of Binding resources and a possible link for next set */
	export interface BindingResourceCollection {

		/**
		 * URL client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink?: string | null;

		/** Collection of Binding resources */
		value?: Array<BindingResource>;
	}

	/** Object that includes an array of Binding resources and a possible link for next set */
	export interface BindingResourceCollectionFormProperties {

		/**
		 * URL client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateBindingResourceCollectionFormGroup() {
		return new FormGroup<BindingResourceCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


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

		/** The target of the particular error. For example, the name of the property in error. */
		target?: string | null;
	}

	/** An error response from the service. */
	export interface CloudErrorBodyFormProperties {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. For example, the name of the property in error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Service properties payload */
	export interface ClusterResourceProperties {

		/** Config server git properties payload */
		configServerProperties?: ConfigServerProperties;

		/** Provisioning state of the Service */
		provisioningState?: ClusterResourcePropertiesProvisioningState | null;

		/** ServiceInstanceEntity GUID which uniquely identifies a created resource */
		serviceId?: string | null;

		/** Trace properties payload */
		trace?: TraceProperties;

		/** Version of the Service */
		version?: number | null;
	}

	/** Service properties payload */
	export interface ClusterResourcePropertiesFormProperties {

		/** Provisioning state of the Service */
		provisioningState: FormControl<ClusterResourcePropertiesProvisioningState | null | undefined>,

		/** ServiceInstanceEntity GUID which uniquely identifies a created resource */
		serviceId: FormControl<string | null | undefined>,

		/** Version of the Service */
		version: FormControl<number | null | undefined>,
	}
	export function CreateClusterResourcePropertiesFormGroup() {
		return new FormGroup<ClusterResourcePropertiesFormProperties>({
			provisioningState: new FormControl<ClusterResourcePropertiesProvisioningState | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Config server git properties payload */
	export interface ConfigServerProperties {

		/** The settings of config server. */
		configServer?: ConfigServerSettings;

		/** The error code compose of code and message. */
		error?: Error;

		/** State of the config server. */
		state?: ConfigServerPropertiesState | null;
	}

	/** Config server git properties payload */
	export interface ConfigServerPropertiesFormProperties {

		/** State of the config server. */
		state: FormControl<ConfigServerPropertiesState | null | undefined>,
	}
	export function CreateConfigServerPropertiesFormGroup() {
		return new FormGroup<ConfigServerPropertiesFormProperties>({
			state: new FormControl<ConfigServerPropertiesState | null | undefined>(undefined),
		});

	}


	/** The settings of config server. */
	export interface ConfigServerSettings {

		/** Property of git. */
		gitProperty?: ConfigServerGitProperty;
	}

	/** The settings of config server. */
	export interface ConfigServerSettingsFormProperties {
	}
	export function CreateConfigServerSettingsFormGroup() {
		return new FormGroup<ConfigServerSettingsFormProperties>({
		});

	}


	/** Property of git. */
	export interface ConfigServerGitProperty {

		/** Public sshKey of git repository. */
		hostKey?: string | null;

		/** SshKey algorithm of git repository. */
		hostKeyAlgorithm?: string | null;

		/** Label of the repository */
		label?: string | null;

		/** Password of git repository basic auth. */
		password?: string | null;

		/** Private sshKey algorithm of git repository. */
		privateKey?: string | null;

		/** Repositories of git. */
		repositories?: Array<GitPatternRepository>;

		/** Searching path of the repository */
		searchPaths?: Array<string>;

		/** Strict host key checking or not. */
		strictHostKeyChecking?: boolean | null;

		/**
		 * URI of the repository
		 * Required
		 */
		uri: string;

		/** Username of git repository basic auth. */
		username?: string | null;
	}

	/** Property of git. */
	export interface ConfigServerGitPropertyFormProperties {

		/** Public sshKey of git repository. */
		hostKey: FormControl<string | null | undefined>,

		/** SshKey algorithm of git repository. */
		hostKeyAlgorithm: FormControl<string | null | undefined>,

		/** Label of the repository */
		label: FormControl<string | null | undefined>,

		/** Password of git repository basic auth. */
		password: FormControl<string | null | undefined>,

		/** Private sshKey algorithm of git repository. */
		privateKey: FormControl<string | null | undefined>,

		/** Strict host key checking or not. */
		strictHostKeyChecking: FormControl<boolean | null | undefined>,

		/**
		 * URI of the repository
		 * Required
		 */
		uri: FormControl<string | null | undefined>,

		/** Username of git repository basic auth. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateConfigServerGitPropertyFormGroup() {
		return new FormGroup<ConfigServerGitPropertyFormProperties>({
			hostKey: new FormControl<string | null | undefined>(undefined),
			hostKeyAlgorithm: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			privateKey: new FormControl<string | null | undefined>(undefined),
			strictHostKeyChecking: new FormControl<boolean | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Git repository property payload */
	export interface GitPatternRepository {

		/** Public sshKey of git repository. */
		hostKey?: string | null;

		/** SshKey algorithm of git repository. */
		hostKeyAlgorithm?: string | null;

		/** Label of the repository */
		label?: string | null;

		/**
		 * Name of the repository
		 * Required
		 */
		name: string;

		/** Password of git repository basic auth. */
		password?: string | null;

		/** Collection of pattern of the repository */
		pattern?: Array<string>;

		/** Private sshKey algorithm of git repository. */
		privateKey?: string | null;

		/** Searching path of the repository */
		searchPaths?: Array<string>;

		/** Strict host key checking or not. */
		strictHostKeyChecking?: boolean | null;

		/**
		 * URI of the repository
		 * Required
		 */
		uri: string;

		/** Username of git repository basic auth. */
		username?: string | null;
	}

	/** Git repository property payload */
	export interface GitPatternRepositoryFormProperties {

		/** Public sshKey of git repository. */
		hostKey: FormControl<string | null | undefined>,

		/** SshKey algorithm of git repository. */
		hostKeyAlgorithm: FormControl<string | null | undefined>,

		/** Label of the repository */
		label: FormControl<string | null | undefined>,

		/**
		 * Name of the repository
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Password of git repository basic auth. */
		password: FormControl<string | null | undefined>,

		/** Private sshKey algorithm of git repository. */
		privateKey: FormControl<string | null | undefined>,

		/** Strict host key checking or not. */
		strictHostKeyChecking: FormControl<boolean | null | undefined>,

		/**
		 * URI of the repository
		 * Required
		 */
		uri: FormControl<string | null | undefined>,

		/** Username of git repository basic auth. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateGitPatternRepositoryFormGroup() {
		return new FormGroup<GitPatternRepositoryFormProperties>({
			hostKey: new FormControl<string | null | undefined>(undefined),
			hostKeyAlgorithm: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined),
			privateKey: new FormControl<string | null | undefined>(undefined),
			strictHostKeyChecking: new FormControl<boolean | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The error code compose of code and message. */
	export interface Error {

		/** The code of error. */
		code?: string | null;

		/** The message of error. */
		message?: string | null;
	}

	/** The error code compose of code and message. */
	export interface ErrorFormProperties {

		/** The code of error. */
		code: FormControl<string | null | undefined>,

		/** The message of error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConfigServerPropertiesState { NotAvailable = 'NotAvailable', Deleted = 'Deleted', Failed = 'Failed', Succeeded = 'Succeeded', Updating = 'Updating' }

	export enum ClusterResourcePropertiesProvisioningState { Creating = 'Creating', Updating = 'Updating', Deleting = 'Deleting', Deleted = 'Deleted', Succeeded = 'Succeeded', Failed = 'Failed', Moving = 'Moving', Moved = 'Moved', MoveFailed = 'MoveFailed' }


	/** Trace properties payload */
	export interface TraceProperties {

		/** Target application insight instrumentation key */
		appInsightInstrumentationKey?: string | null;

		/** Indicates whether enable the tracing functionality */
		enabled?: boolean | null;

		/** The error code compose of code and message. */
		error?: Error;

		/** State of the trace proxy. */
		state?: TracePropertiesState | null;
	}

	/** Trace properties payload */
	export interface TracePropertiesFormProperties {

		/** Target application insight instrumentation key */
		appInsightInstrumentationKey: FormControl<string | null | undefined>,

		/** Indicates whether enable the tracing functionality */
		enabled: FormControl<boolean | null | undefined>,

		/** State of the trace proxy. */
		state: FormControl<TracePropertiesState | null | undefined>,
	}
	export function CreateTracePropertiesFormGroup() {
		return new FormGroup<TracePropertiesFormProperties>({
			appInsightInstrumentationKey: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<TracePropertiesState | null | undefined>(undefined),
		});

	}

	export enum TracePropertiesState { NotAvailable = 'NotAvailable', Failed = 'Failed', Succeeded = 'Succeeded', Updating = 'Updating' }


	/** Deployment instance payload */
	export interface DeploymentInstance {

		/** Discovery status of the deployment instance */
		discoveryStatus?: string | null;

		/** Name of the deployment instance */
		name?: string | null;

		/** Failed reason of the deployment instance */
		reason?: string | null;

		/** Status of the deployment instance */
		status?: string | null;
	}

	/** Deployment instance payload */
	export interface DeploymentInstanceFormProperties {

		/** Discovery status of the deployment instance */
		discoveryStatus: FormControl<string | null | undefined>,

		/** Name of the deployment instance */
		name: FormControl<string | null | undefined>,

		/** Failed reason of the deployment instance */
		reason: FormControl<string | null | undefined>,

		/** Status of the deployment instance */
		status: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentInstanceFormGroup() {
		return new FormGroup<DeploymentInstanceFormProperties>({
			discoveryStatus: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deployment resource payload */
	export interface DeploymentResource {

		/** Deployment resource properties payload */
		properties?: DeploymentResourceProperties;
	}

	/** Deployment resource payload */
	export interface DeploymentResourceFormProperties {
	}
	export function CreateDeploymentResourceFormGroup() {
		return new FormGroup<DeploymentResourceFormProperties>({
		});

	}


	/** Deployment resource properties payload */
	export interface DeploymentResourceProperties {

		/** Indicates whether the Deployment is active */
		active?: boolean | null;

		/** App name of the deployment */
		appName?: string | null;

		/** Date time when the resource is created */
		createdTime?: Date | null;

		/** Deployment settings payload */
		deploymentSettings?: DeploymentSettings;

		/** Collection of instances belong to the Deployment */
		instances?: Array<DeploymentInstance>;

		/** Provisioning state of the Deployment */
		provisioningState?: DeploymentResourcePropertiesProvisioningState | null;

		/** Source information for a deployment */
		source?: UserSourceInfo;

		/** Status of the Deployment */
		status?: DeploymentResourcePropertiesStatus | null;
	}

	/** Deployment resource properties payload */
	export interface DeploymentResourcePropertiesFormProperties {

		/** Indicates whether the Deployment is active */
		active: FormControl<boolean | null | undefined>,

		/** App name of the deployment */
		appName: FormControl<string | null | undefined>,

		/** Date time when the resource is created */
		createdTime: FormControl<Date | null | undefined>,

		/** Provisioning state of the Deployment */
		provisioningState: FormControl<DeploymentResourcePropertiesProvisioningState | null | undefined>,

		/** Status of the Deployment */
		status: FormControl<DeploymentResourcePropertiesStatus | null | undefined>,
	}
	export function CreateDeploymentResourcePropertiesFormGroup() {
		return new FormGroup<DeploymentResourcePropertiesFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			appName: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<DeploymentResourcePropertiesProvisioningState | null | undefined>(undefined),
			status: new FormControl<DeploymentResourcePropertiesStatus | null | undefined>(undefined),
		});

	}


	/** Deployment settings payload */
	export interface DeploymentSettings {

		/**
		 * Required CPU
		 * Minimum: 1
		 * Maximum: 4
		 */
		cpu?: number | null;

		/** Collection of environment variables */
		environmentVariables?: {[id: string]: string };

		/**
		 * Instance count
		 * Minimum: 1
		 * Maximum: 20
		 */
		instanceCount?: number | null;

		/** JVM parameter */
		jvmOptions?: string | null;

		/**
		 * Required Memory size in GB
		 * Minimum: 1
		 * Maximum: 8
		 */
		memoryInGB?: number | null;

		/** Runtime version */
		runtimeVersion?: DeploymentSettingsRuntimeVersion | null;
	}

	/** Deployment settings payload */
	export interface DeploymentSettingsFormProperties {

		/**
		 * Required CPU
		 * Minimum: 1
		 * Maximum: 4
		 */
		cpu: FormControl<number | null | undefined>,

		/** Collection of environment variables */
		environmentVariables: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Instance count
		 * Minimum: 1
		 * Maximum: 20
		 */
		instanceCount: FormControl<number | null | undefined>,

		/** JVM parameter */
		jvmOptions: FormControl<string | null | undefined>,

		/**
		 * Required Memory size in GB
		 * Minimum: 1
		 * Maximum: 8
		 */
		memoryInGB: FormControl<number | null | undefined>,

		/** Runtime version */
		runtimeVersion: FormControl<DeploymentSettingsRuntimeVersion | null | undefined>,
	}
	export function CreateDeploymentSettingsFormGroup() {
		return new FormGroup<DeploymentSettingsFormProperties>({
			cpu: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(4)]),
			environmentVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			instanceCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
			jvmOptions: new FormControl<string | null | undefined>(undefined),
			memoryInGB: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(8)]),
			runtimeVersion: new FormControl<DeploymentSettingsRuntimeVersion | null | undefined>(undefined),
		});

	}

	export enum DeploymentSettingsRuntimeVersion { Java_8 = 'Java_8', Java_11 = 'Java_11' }

	export enum DeploymentResourcePropertiesProvisioningState { Creating = 'Creating', Updating = 'Updating', Succeeded = 'Succeeded', Failed = 'Failed' }


	/** Source information for a deployment */
	export interface UserSourceInfo {

		/**
		 * Selector for the artifact to be used for the deployment for multi-module projects. This should be
		 * the relative path to the target module/project.
		 */
		artifactSelector?: string | null;

		/** Relative path of the storage which stores the source */
		relativePath?: string | null;

		/** Type of the source uploaded */
		type?: UserSourceInfoType | null;

		/** Version of the source */
		version?: string | null;
	}

	/** Source information for a deployment */
	export interface UserSourceInfoFormProperties {

		/**
		 * Selector for the artifact to be used for the deployment for multi-module projects. This should be
		 * the relative path to the target module/project.
		 */
		artifactSelector: FormControl<string | null | undefined>,

		/** Relative path of the storage which stores the source */
		relativePath: FormControl<string | null | undefined>,

		/** Type of the source uploaded */
		type: FormControl<UserSourceInfoType | null | undefined>,

		/** Version of the source */
		version: FormControl<string | null | undefined>,
	}
	export function CreateUserSourceInfoFormGroup() {
		return new FormGroup<UserSourceInfoFormProperties>({
			artifactSelector: new FormControl<string | null | undefined>(undefined),
			relativePath: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<UserSourceInfoType | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserSourceInfoType { Jar = 'Jar', Source = 'Source' }

	export enum DeploymentResourcePropertiesStatus { Unknown = 'Unknown', Stopped = 'Stopped', Running = 'Running', Failed = 'Failed', Allocating = 'Allocating', Upgrading = 'Upgrading', Compiling = 'Compiling' }


	/** Object that includes an array of App resources and a possible link for next set */
	export interface DeploymentResourceCollection {

		/**
		 * URL client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink?: string | null;

		/** Collection of Deployment resources */
		value?: Array<DeploymentResource>;
	}

	/** Object that includes an array of App resources and a possible link for next set */
	export interface DeploymentResourceCollectionFormProperties {

		/**
		 * URL client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentResourceCollectionFormGroup() {
		return new FormGroup<DeploymentResourceCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Log file URL payload */
	export interface LogFileUrlResponse {

		/**
		 * URL of the log file
		 * Required
		 */
		url: string;
	}

	/** Log file URL payload */
	export interface LogFileUrlResponseFormProperties {

		/**
		 * URL of the log file
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateLogFileUrlResponseFormGroup() {
		return new FormGroup<LogFileUrlResponseFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Name availability result payload */
	export interface NameAvailability {

		/** Message why the name is not available */
		message?: string | null;

		/** Indicates whether the name is available */
		nameAvailable?: boolean | null;

		/** Reason why the name is not available */
		reason?: string | null;
	}

	/** Name availability result payload */
	export interface NameAvailabilityFormProperties {

		/** Message why the name is not available */
		message: FormControl<string | null | undefined>,

		/** Indicates whether the name is available */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** Reason why the name is not available */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateNameAvailabilityFormGroup() {
		return new FormGroup<NameAvailabilityFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Name availability parameters payload */
	export interface NameAvailabilityParameters {

		/**
		 * Name to be checked
		 * Required
		 */
		name: string;

		/**
		 * Type of the resource to check name availability
		 * Required
		 */
		type: string;
	}

	/** Name availability parameters payload */
	export interface NameAvailabilityParametersFormProperties {

		/**
		 * Name to be checked
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of the resource to check name availability
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateNameAvailabilityParametersFormGroup() {
		return new FormGroup<NameAvailabilityParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags. */
	export interface ProxyResource {
	}

	/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags. */
	export interface ProxyResourceFormProperties {
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
		});

	}


	/** Regenerate test key request payload */
	export interface RegenerateTestKeyRequestPayload {

		/**
		 * Type of the test key
		 * Required
		 */
		keyType: RegenerateTestKeyRequestPayloadKeyType;
	}

	/** Regenerate test key request payload */
	export interface RegenerateTestKeyRequestPayloadFormProperties {

		/**
		 * Type of the test key
		 * Required
		 */
		keyType: FormControl<RegenerateTestKeyRequestPayloadKeyType | null | undefined>,
	}
	export function CreateRegenerateTestKeyRequestPayloadFormGroup() {
		return new FormGroup<RegenerateTestKeyRequestPayloadFormProperties>({
			keyType: new FormControl<RegenerateTestKeyRequestPayloadKeyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RegenerateTestKeyRequestPayloadKeyType { Primary = 'Primary', Secondary = 'Secondary' }


	/** The core properties of ARM resources. */
	export interface Resource {

		/** Fully qualified resource Id for the resource. */
		id?: string | null;

		/** The name of the resource. */
		name?: string | null;

		/** The type of the resource. */
		type?: string | null;
	}

	/** The core properties of ARM resources. */
	export interface ResourceFormProperties {

		/** Fully qualified resource Id for the resource. */
		id: FormControl<string | null | undefined>,

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** The type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource upload definition payload */
	export interface ResourceUploadDefinition {

		/** Source relative path */
		relativePath?: string | null;

		/** Upload URL */
		uploadUrl?: string | null;
	}

	/** Resource upload definition payload */
	export interface ResourceUploadDefinitionFormProperties {

		/** Source relative path */
		relativePath: FormControl<string | null | undefined>,

		/** Upload URL */
		uploadUrl: FormControl<string | null | undefined>,
	}
	export function CreateResourceUploadDefinitionFormGroup() {
		return new FormGroup<ResourceUploadDefinitionFormProperties>({
			relativePath: new FormControl<string | null | undefined>(undefined),
			uploadUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Service resource */
	export interface ServiceResource {

		/** Service properties payload */
		properties?: ClusterResourceProperties;
	}

	/** Service resource */
	export interface ServiceResourceFormProperties {
	}
	export function CreateServiceResourceFormGroup() {
		return new FormGroup<ServiceResourceFormProperties>({
		});

	}


	/** Object that includes an array of Service resources and a possible link for next set */
	export interface ServiceResourceList {

		/**
		 * URL client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink?: string | null;

		/** Collection of Service resources */
		value?: Array<ServiceResource>;
	}

	/** Object that includes an array of Service resources and a possible link for next set */
	export interface ServiceResourceListFormProperties {

		/**
		 * URL client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateServiceResourceListFormGroup() {
		return new FormGroup<ServiceResourceListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Test keys payload */
	export interface TestKeys {

		/** Indicates whether the test endpoint feature enabled or not */
		enabled?: boolean | null;

		/** Primary key */
		primaryKey?: string | null;

		/** Primary test endpoint */
		primaryTestEndpoint?: string | null;

		/** Secondary key */
		secondaryKey?: string | null;

		/** Secondary test endpoint */
		secondaryTestEndpoint?: string | null;
	}

	/** Test keys payload */
	export interface TestKeysFormProperties {

		/** Indicates whether the test endpoint feature enabled or not */
		enabled: FormControl<boolean | null | undefined>,

		/** Primary key */
		primaryKey: FormControl<string | null | undefined>,

		/** Primary test endpoint */
		primaryTestEndpoint: FormControl<string | null | undefined>,

		/** Secondary key */
		secondaryKey: FormControl<string | null | undefined>,

		/** Secondary test endpoint */
		secondaryTestEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateTestKeysFormGroup() {
		return new FormGroup<TestKeysFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			primaryKey: new FormControl<string | null | undefined>(undefined),
			primaryTestEndpoint: new FormControl<string | null | undefined>(undefined),
			secondaryKey: new FormControl<string | null | undefined>(undefined),
			secondaryTestEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource model definition for a ARM tracked top level resource. */
	export interface TrackedResource {

		/** The GEO location of the resource. */
		location?: string | null;

		/** Tags of the service which is a list of key value pairs that describe the resource. */
		tags?: {[id: string]: string };
	}

	/** The resource model definition for a ARM tracked top level resource. */
	export interface TrackedResourceFormProperties {

		/** The GEO location of the resource. */
		location: FormControl<string | null | undefined>,

		/** Tags of the service which is a list of key value pairs that describe the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available REST API operations of the Microsoft.AppPlatform provider.
		 * Get providers/Microsoft.AppPlatform/operations
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @return {AvailableOperations} Success. The response describes the list of operations.
		 */
		Operations_List(api_version: Operations_ListApi_version): Observable<AvailableOperations> {
			return this.http.get<AvailableOperations>(this.baseUri + 'providers/Microsoft.AppPlatform/operations?api_version=' + api_version, {});
		}

		/**
		 * Handles requests to list all resources in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.AppPlatform/Spring
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ServiceResourceList} Success. The response describes the list of Services in the subscription.
		 */
		Services_ListBySubscription(api_version: Operations_ListApi_version, subscriptionId: string): Observable<ServiceResourceList> {
			return this.http.get<ServiceResourceList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.AppPlatform/Spring?api_version=' + api_version, {});
		}

		/**
		 * Checks that the resource name is valid and is not already in use.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.AppPlatform/locations/{location}/checkNameAvailability
		 * @param {string} location the region
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {NameAvailabilityParameters} requestBody Parameters supplied to the operation.
		 * @return {NameAvailability} Success. The response describes the name availability.
		 */
		Services_CheckNameAvailability(location: string, api_version: Operations_ListApi_version, subscriptionId: string, requestBody: NameAvailabilityParameters): Observable<NameAvailability> {
			return this.http.post<NameAvailability>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.AppPlatform/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/checkNameAvailability&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Handles requests to list all resources in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {ServiceResourceList} Success. The response describes the list of Services in the resource group.
		 */
		Services_List(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string): Observable<ServiceResourceList> {
			return this.http.get<ServiceResourceList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring?api_version=' + api_version, {});
		}

		/**
		 * Get a Service and its properties.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @return {ServiceResource} Success. The response describes the corresponding Service.
		 */
		Services_Get(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string): Observable<ServiceResource> {
			return this.http.get<ServiceResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '?api_version=' + api_version, {});
		}

		/**
		 * Create a new Service or update an exiting Service.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {ServiceResource} requestBody Parameters for the create or update operation
		 * @return {ServiceResource} Success. The response describes the updated Service.
		 */
		Services_CreateOrUpdate(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string, requestBody: ServiceResource): Observable<ServiceResource> {
			return this.http.put<ServiceResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Operation to delete a Service.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @return {void} 
		 */
		Services_Delete(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '?api_version=' + api_version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Operation to update an exiting Service.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {ServiceResource} requestBody Parameters for the update operation
		 * @return {ServiceResource} Success. The response describes the updated Service.
		 */
		Services_Update(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string, requestBody: ServiceResource): Observable<ServiceResource> {
			return this.http.patch<ServiceResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Handles requests to list all resources in a Service.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @return {AppResourceCollection} Success. The response describes the list of Apps in the Service.
		 */
		Apps_List(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string): Observable<AppResourceCollection> {
			return this.http.get<AppResourceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps?api_version=' + api_version, {});
		}

		/**
		 * Get an App and its properties.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}
		 * @param {string} syncStatus Indicates whether sync status
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @return {AppResource} Success. The response describes the corresponding App.
		 */
		Apps_Get(syncStatus: string | null | undefined, api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string): Observable<AppResource> {
			return this.http.get<AppResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '?syncStatus=' + (syncStatus == null ? '' : encodeURIComponent(syncStatus)) + '&api_version=' + api_version, {});
		}

		/**
		 * Create a new App or update an exiting App.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {AppResource} requestBody Parameters for the create or update operation
		 * @return {AppResource} Success. The response describes the updated App.
		 */
		Apps_CreateOrUpdate(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, requestBody: AppResource): Observable<AppResource> {
			return this.http.put<AppResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Operation to delete an App.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @return {void} Success. The response indicates the resource is deleted.
		 */
		Apps_Delete(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '?api_version=' + api_version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Operation to update an exiting App.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {AppResource} requestBody Parameters for the update operation
		 * @return {AppResource} Success. The response describes the updated App.
		 */
		Apps_Update(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, requestBody: AppResource): Observable<AppResource> {
			return this.http.patch<AppResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Handles requests to list all resources in an App.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @return {BindingResourceCollection} Success. The response describes the list of Bindings in the App.
		 */
		Bindings_List(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string): Observable<BindingResourceCollection> {
			return this.http.get<BindingResourceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/bindings?api_version=' + api_version, {});
		}

		/**
		 * Get a Binding and its properties.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings/{bindingName}
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {string} bindingName The name of the Binding resource.
		 * @return {BindingResource} Success. The response describes the corresponding Binding.
		 */
		Bindings_Get(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, bindingName: string): Observable<BindingResource> {
			return this.http.get<BindingResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/bindings/' + (bindingName == null ? '' : encodeURIComponent(bindingName)) + '?api_version=' + api_version, {});
		}

		/**
		 * Create a new Binding or update an exiting Binding.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings/{bindingName}
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {string} bindingName The name of the Binding resource.
		 * @param {BindingResource} requestBody Parameters for the create or update operation
		 * @return {BindingResource} Success. The response describes the created or updated Binding.
		 */
		Bindings_CreateOrUpdate(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, bindingName: string, requestBody: BindingResource): Observable<BindingResource> {
			return this.http.put<BindingResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/bindings/' + (bindingName == null ? '' : encodeURIComponent(bindingName)) + '?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Operation to delete a Binding.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings/{bindingName}
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {string} bindingName The name of the Binding resource.
		 * @return {void} Success. The response indicates the resource is deleted.
		 */
		Bindings_Delete(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, bindingName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/bindings/' + (bindingName == null ? '' : encodeURIComponent(bindingName)) + '?api_version=' + api_version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Operation to update an exiting Binding.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings/{bindingName}
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {string} bindingName The name of the Binding resource.
		 * @param {BindingResource} requestBody Parameters for the update operation
		 * @return {BindingResource} Success. The response describes the updated Binding.
		 */
		Bindings_Update(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, bindingName: string, requestBody: BindingResource): Observable<BindingResource> {
			return this.http.patch<BindingResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/bindings/' + (bindingName == null ? '' : encodeURIComponent(bindingName)) + '?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Handles requests to list all resources in an App.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments
		 * @param {Array<string>} version Version of the deployments to be listed
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @return {DeploymentResourceCollection} Success. The response describes the list of Deployments in the App.
		 */
		Deployments_List(version: Array<string> | null | undefined, api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string): Observable<DeploymentResourceCollection> {
			return this.http.get<DeploymentResourceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/deployments?' + version?.map(z => `version=${encodeURIComponent(z)}`).join('&') + '&api_version=' + api_version, {});
		}

		/**
		 * Get a Deployment and its properties.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {string} deploymentName The name of the Deployment resource.
		 * @return {DeploymentResource} Success. The response describes the corresponding Deployment.
		 */
		Deployments_Get(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, deploymentName: string): Observable<DeploymentResource> {
			return this.http.get<DeploymentResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '?api_version=' + api_version, {});
		}

		/**
		 * Create a new Deployment or update an exiting Deployment.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {string} deploymentName The name of the Deployment resource.
		 * @param {DeploymentResource} requestBody Parameters for the create or update operation
		 * @return {DeploymentResource} Success. The response describes the updated Deployment.
		 */
		Deployments_CreateOrUpdate(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, requestBody: DeploymentResource): Observable<DeploymentResource> {
			return this.http.put<DeploymentResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Operation to delete a Deployment.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {string} deploymentName The name of the Deployment resource.
		 * @return {void} Success. The response indicates the resource is deleted.
		 */
		Deployments_Delete(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, deploymentName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '?api_version=' + api_version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Operation to update an exiting Deployment.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {string} deploymentName The name of the Deployment resource.
		 * @param {DeploymentResource} requestBody Parameters for the update operation
		 * @return {DeploymentResource} Success. The response describes the updated Deployment.
		 */
		Deployments_Update(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, deploymentName: string, requestBody: DeploymentResource): Observable<DeploymentResource> {
			return this.http.patch<DeploymentResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get deployment log file URL
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/getLogFileUrl
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {string} deploymentName The name of the Deployment resource.
		 * @return {LogFileUrlResponse} Success. The response contains the log file URL.
		 */
		Deployments_GetLogFileUrl(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, deploymentName: string): Observable<LogFileUrlResponse> {
			return this.http.post<LogFileUrlResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/getLogFileUrl?api_version=' + api_version, null, {});
		}

		/**
		 * Restart the deployment.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/restart
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {string} deploymentName The name of the Deployment resource.
		 * @return {void} Success.
		 */
		Deployments_Restart(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, deploymentName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/restart?api_version=' + api_version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Start the deployment.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/start
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {string} deploymentName The name of the Deployment resource.
		 * @return {void} Success.
		 */
		Deployments_Start(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, deploymentName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/start?api_version=' + api_version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stop the deployment.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/stop
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @param {string} deploymentName The name of the Deployment resource.
		 * @return {void} Success.
		 */
		Deployments_Stop(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string, deploymentName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/deployments/' + (deploymentName == null ? '' : encodeURIComponent(deploymentName)) + '/stop?api_version=' + api_version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an resource upload URL for an App, which may be artifacts or source archive.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/getResourceUploadUrl
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {string} appName The name of the App resource.
		 * @return {ResourceUploadDefinition} Success. The response describes the resource upload URL.
		 */
		Apps_GetResourceUploadUrl(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string, appName: string): Observable<ResourceUploadDefinition> {
			return this.http.post<ResourceUploadDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/getResourceUploadUrl?api_version=' + api_version, null, {});
		}

		/**
		 * List deployments for a certain service
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/deployments
		 * @param {Array<string>} version Version of the deployments to be listed
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @return {DeploymentResourceCollection} Success
		 */
		Deployments_ListClusterAllDeployments(version: Array<string> | null | undefined, api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string): Observable<DeploymentResourceCollection> {
			return this.http.get<DeploymentResourceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/deployments?' + version?.map(z => `version=${encodeURIComponent(z)}`).join('&') + '&api_version=' + api_version, {});
		}

		/**
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/disableTestEndpoint
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @return {void} Success
		 */
		Services_DisableTestEndpoint(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/disableTestEndpoint?api_version=' + api_version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/enableTestEndpoint
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @return {TestKeys} Success
		 */
		Services_EnableTestEndpoint(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string): Observable<TestKeys> {
			return this.http.post<TestKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/enableTestEndpoint?api_version=' + api_version, null, {});
		}

		/**
		 * List test keys for a Service.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/listTestKeys
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @return {TestKeys} Success. The response describes the test keys.
		 */
		Services_ListTestKeys(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string): Observable<TestKeys> {
			return this.http.post<TestKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/listTestKeys?api_version=' + api_version, null, {});
		}

		/**
		 * Regenerate a test key for a Service.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/regenerateTestKey
		 * @param {Operations_ListApi_version} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serviceName The name of the Service resource.
		 * @param {RegenerateTestKeyRequestPayload} requestBody Parameters for the operation
		 * @return {TestKeys} Success.
		 */
		Services_RegenerateTestKey(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, serviceName: string, requestBody: RegenerateTestKeyRequestPayload): Observable<TestKeys> {
			return this.http.post<TestKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppPlatform/Spring/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/regenerateTestKey?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Operations_ListApi_version { '2019-05-01-preview' = '2019-05-01-preview' }

}

