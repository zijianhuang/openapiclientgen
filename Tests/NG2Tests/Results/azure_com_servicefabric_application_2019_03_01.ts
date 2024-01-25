import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/**
	 * Describes capacity information for a custom resource balancing metric. This can be used to limit the total consumption of this metric by the services of this application.
	 */
	export interface ApplicationMetricDescription {

		/**
		 * The maximum node capacity for Service Fabric application.
		 * This is the maximum Load for an instance of this application on a single node. Even if the capacity of node is greater than this value, Service Fabric will limit the total load of services within the application on each node to this value.
		 * If set to zero, capacity for this metric is unlimited on each node.
		 * When creating a new application with application capacity defined, the product of MaximumNodes and this value must always be smaller than or equal to TotalApplicationCapacity.
		 * When updating existing application with application capacity, the product of MaximumNodes and this value must always be smaller than or equal to TotalApplicationCapacity.
		 */
		maximumCapacity?: number | null;

		/** The name of the metric. */
		name?: string | null;

		/**
		 * The node reservation capacity for Service Fabric application.
		 * This is the amount of load which is reserved on nodes which have instances of this application.
		 * If MinimumNodes is specified, then the product of these values will be the capacity reserved in the cluster for the application.
		 * If set to zero, no capacity is reserved for this metric.
		 * When setting application capacity or when updating application capacity; this value must be smaller than or equal to MaximumCapacity for each metric.
		 */
		reservationCapacity?: number | null;

		/**
		 * The total metric capacity for Service Fabric application.
		 * This is the total metric capacity for this application in the cluster. Service Fabric will try to limit the sum of loads of services within the application to this value.
		 * When creating a new application with application capacity defined, the product of MaximumNodes and MaximumCapacity must always be smaller than or equal to this value.
		 */
		totalApplicationCapacity?: number | null;
	}

	/**
	 * Describes capacity information for a custom resource balancing metric. This can be used to limit the total consumption of this metric by the services of this application.
	 */
	export interface ApplicationMetricDescriptionFormProperties {

		/**
		 * The maximum node capacity for Service Fabric application.
		 * This is the maximum Load for an instance of this application on a single node. Even if the capacity of node is greater than this value, Service Fabric will limit the total load of services within the application on each node to this value.
		 * If set to zero, capacity for this metric is unlimited on each node.
		 * When creating a new application with application capacity defined, the product of MaximumNodes and this value must always be smaller than or equal to TotalApplicationCapacity.
		 * When updating existing application with application capacity, the product of MaximumNodes and this value must always be smaller than or equal to TotalApplicationCapacity.
		 */
		maximumCapacity: FormControl<number | null | undefined>,

		/** The name of the metric. */
		name: FormControl<string | null | undefined>,

		/**
		 * The node reservation capacity for Service Fabric application.
		 * This is the amount of load which is reserved on nodes which have instances of this application.
		 * If MinimumNodes is specified, then the product of these values will be the capacity reserved in the cluster for the application.
		 * If set to zero, no capacity is reserved for this metric.
		 * When setting application capacity or when updating application capacity; this value must be smaller than or equal to MaximumCapacity for each metric.
		 */
		reservationCapacity: FormControl<number | null | undefined>,

		/**
		 * The total metric capacity for Service Fabric application.
		 * This is the total metric capacity for this application in the cluster. Service Fabric will try to limit the sum of loads of services within the application to this value.
		 * When creating a new application with application capacity defined, the product of MaximumNodes and MaximumCapacity must always be smaller than or equal to this value.
		 */
		totalApplicationCapacity: FormControl<number | null | undefined>,
	}
	export function CreateApplicationMetricDescriptionFormGroup() {
		return new FormGroup<ApplicationMetricDescriptionFormProperties>({
			maximumCapacity: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reservationCapacity: new FormControl<number | null | undefined>(undefined),
			totalApplicationCapacity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List of application parameters with overridden values from their default values specified in the application manifest. */
	export interface ApplicationParameterList {
	}

	/** List of application parameters with overridden values from their default values specified in the application manifest. */
	export interface ApplicationParameterListFormProperties {
	}
	export function CreateApplicationParameterListFormGroup() {
		return new FormGroup<ApplicationParameterListFormProperties>({
		});

	}


	/** The application resource. */
	export interface ApplicationResource extends ProxyResource {

		/** The application resource properties. */
		properties?: ApplicationResourceProperties;
	}

	/** The application resource. */
	export interface ApplicationResourceFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateApplicationResourceFormGroup() {
		return new FormGroup<ApplicationResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of application resources. */
	export interface ApplicationResourceList {

		/** URL to get the next set of application list results if there are any. */
		nextLink?: string | null;
		value?: Array<ApplicationResource>;
	}

	/** The list of application resources. */
	export interface ApplicationResourceListFormProperties {

		/** URL to get the next set of application list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateApplicationResourceListFormGroup() {
		return new FormGroup<ApplicationResourceListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The application resource properties. */
	export interface ApplicationResourceProperties extends ApplicationResourceUpdateProperties {

		/** The current deployment or provisioning state, which only appears in the response */
		provisioningState?: string | null;

		/** The application type name as defined in the application manifest. */
		typeName?: string | null;
	}

	/** The application resource properties. */
	export interface ApplicationResourcePropertiesFormProperties extends ApplicationResourceUpdatePropertiesFormProperties {

		/** The current deployment or provisioning state, which only appears in the response */
		provisioningState: FormControl<string | null | undefined>,

		/** The application type name as defined in the application manifest. */
		typeName: FormControl<string | null | undefined>,
	}
	export function CreateApplicationResourcePropertiesFormGroup() {
		return new FormGroup<ApplicationResourcePropertiesFormProperties>({
			maximumNodes: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			minimumNodes: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			removeApplicationCapacity: new FormControl<boolean | null | undefined>(undefined),
			typeVersion: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			typeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The application resource for patch operations. */
	export interface ApplicationResourceUpdate extends ProxyResource {

		/** The application resource properties for patch operations. */
		properties?: ApplicationResourceUpdateProperties;
	}

	/** The application resource for patch operations. */
	export interface ApplicationResourceUpdateFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateApplicationResourceUpdateFormGroup() {
		return new FormGroup<ApplicationResourceUpdateFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The application resource properties for patch operations. */
	export interface ApplicationResourceUpdateProperties {

		/**
		 * The maximum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. By default, the value of this property is zero and it means that the services can be placed on any node.
		 * Minimum: 0
		 */
		maximumNodes?: number | null;

		/** List of application capacity metric description. */
		metrics?: Array<ApplicationMetricDescription>;

		/**
		 * The minimum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. If this property is set to zero, no capacity will be reserved. The value of this property cannot be more than the value of the MaximumNodes property.
		 * Minimum: 0
		 */
		minimumNodes?: number | null;

		/** List of application parameters with overridden values from their default values specified in the application manifest. */
		parameters?: ApplicationParameterList;

		/** Remove the current application capacity settings. */
		removeApplicationCapacity?: boolean | null;

		/** The version of the application type as defined in the application manifest. */
		typeVersion?: string | null;

		/** Describes the policy for a monitored application upgrade. */
		upgradePolicy?: ApplicationUpgradePolicy;
	}

	/** The application resource properties for patch operations. */
	export interface ApplicationResourceUpdatePropertiesFormProperties {

		/**
		 * The maximum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. By default, the value of this property is zero and it means that the services can be placed on any node.
		 * Minimum: 0
		 */
		maximumNodes: FormControl<number | null | undefined>,

		/**
		 * The minimum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. If this property is set to zero, no capacity will be reserved. The value of this property cannot be more than the value of the MaximumNodes property.
		 * Minimum: 0
		 */
		minimumNodes: FormControl<number | null | undefined>,

		/** Remove the current application capacity settings. */
		removeApplicationCapacity: FormControl<boolean | null | undefined>,

		/** The version of the application type as defined in the application manifest. */
		typeVersion: FormControl<string | null | undefined>,
	}
	export function CreateApplicationResourceUpdatePropertiesFormGroup() {
		return new FormGroup<ApplicationResourceUpdatePropertiesFormProperties>({
			maximumNodes: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			minimumNodes: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			removeApplicationCapacity: new FormControl<boolean | null | undefined>(undefined),
			typeVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of application type parameters that can be overridden when creating or updating the application. */
	export interface ApplicationTypeParameterList {
	}

	/** List of application type parameters that can be overridden when creating or updating the application. */
	export interface ApplicationTypeParameterListFormProperties {
	}
	export function CreateApplicationTypeParameterListFormGroup() {
		return new FormGroup<ApplicationTypeParameterListFormProperties>({
		});

	}


	/** The application type name resource */
	export interface ApplicationTypeResource extends ProxyResource {

		/** The application type name properties */
		properties?: ApplicationTypeResourceProperties;
	}

	/** The application type name resource */
	export interface ApplicationTypeResourceFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateApplicationTypeResourceFormGroup() {
		return new FormGroup<ApplicationTypeResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of application type names. */
	export interface ApplicationTypeResourceList {

		/** URL to get the next set of application type list results if there are any. */
		nextLink?: string | null;
		value?: Array<ApplicationTypeResource>;
	}

	/** The list of application type names. */
	export interface ApplicationTypeResourceListFormProperties {

		/** URL to get the next set of application type list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateApplicationTypeResourceListFormGroup() {
		return new FormGroup<ApplicationTypeResourceListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The application type name properties */
	export interface ApplicationTypeResourceProperties {

		/** The current deployment or provisioning state, which only appears in the response. */
		provisioningState?: string | null;
	}

	/** The application type name properties */
	export interface ApplicationTypeResourcePropertiesFormProperties {

		/** The current deployment or provisioning state, which only appears in the response. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateApplicationTypeResourcePropertiesFormGroup() {
		return new FormGroup<ApplicationTypeResourcePropertiesFormProperties>({
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An application type version resource for the specified application type name resource. */
	export interface ApplicationTypeVersionResource extends ProxyResource {

		/** The properties of the application type version resource. */
		properties?: ApplicationTypeVersionResourceProperties;
	}

	/** An application type version resource for the specified application type name resource. */
	export interface ApplicationTypeVersionResourceFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateApplicationTypeVersionResourceFormGroup() {
		return new FormGroup<ApplicationTypeVersionResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of application type version resources for the specified application type name resource. */
	export interface ApplicationTypeVersionResourceList {

		/** URL to get the next set of application type version list results if there are any. */
		nextLink?: string | null;
		value?: Array<ApplicationTypeVersionResource>;
	}

	/** The list of application type version resources for the specified application type name resource. */
	export interface ApplicationTypeVersionResourceListFormProperties {

		/** URL to get the next set of application type version list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateApplicationTypeVersionResourceListFormGroup() {
		return new FormGroup<ApplicationTypeVersionResourceListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of the application type version resource. */
	export interface ApplicationTypeVersionResourceProperties {

		/**
		 * The URL to the application package
		 * Required
		 */
		appPackageUrl: string;

		/** List of application type parameters that can be overridden when creating or updating the application. */
		defaultParameterList?: ApplicationTypeParameterList;

		/** The current deployment or provisioning state, which only appears in the response */
		provisioningState?: string | null;
	}

	/** The properties of the application type version resource. */
	export interface ApplicationTypeVersionResourcePropertiesFormProperties {

		/**
		 * The URL to the application package
		 * Required
		 */
		appPackageUrl: FormControl<string | null | undefined>,

		/** The current deployment or provisioning state, which only appears in the response */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateApplicationTypeVersionResourcePropertiesFormGroup() {
		return new FormGroup<ApplicationTypeVersionResourcePropertiesFormProperties>({
			appPackageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the policy for a monitored application upgrade. */
	export interface ApplicationUpgradePolicy {

		/**
		 * Defines a health policy used to evaluate the health of an application or one of its children entities.
		 */
		applicationHealthPolicy?: ArmApplicationHealthPolicy;

		/** If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data). */
		forceRestart?: boolean | null;

		/** The policy used for monitoring the application upgrade */
		rollingUpgradeMonitoringPolicy?: ArmRollingUpgradeMonitoringPolicy;

		/** The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer). */
		upgradeReplicaSetCheckTimeout?: string | null;
	}

	/** Describes the policy for a monitored application upgrade. */
	export interface ApplicationUpgradePolicyFormProperties {

		/** If true, then processes are forcefully restarted during upgrade even when the code version has not changed (the upgrade only changes configuration or data). */
		forceRestart: FormControl<boolean | null | undefined>,

		/** The maximum amount of time to block processing of an upgrade domain and prevent loss of availability when there are unexpected issues. When this timeout expires, processing of the upgrade domain will proceed regardless of availability loss issues. The timeout is reset at the start of each upgrade domain. Valid values are between 0 and 42949672925 inclusive. (unsigned 32-bit integer). */
		upgradeReplicaSetCheckTimeout: FormControl<string | null | undefined>,
	}
	export function CreateApplicationUpgradePolicyFormGroup() {
		return new FormGroup<ApplicationUpgradePolicyFormProperties>({
			forceRestart: new FormControl<boolean | null | undefined>(undefined),
			upgradeReplicaSetCheckTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Defines a health policy used to evaluate the health of an application or one of its children entities.
	 */
	export interface ArmApplicationHealthPolicy {

		/** Indicates whether warnings are treated with the same severity as errors. */
		considerWarningAsError?: boolean | null;

		/**
		 * Represents the health policy used to evaluate the health of services belonging to a service type.
		 */
		defaultServiceTypeHealthPolicy?: ArmServiceTypeHealthPolicy;

		/**
		 * The maximum allowed percentage of unhealthy deployed applications. Allowed values are Byte values from zero to 100.
		 * The percentage represents the maximum tolerated percentage of deployed applications that can be unhealthy before the application is considered in error.
		 * This is calculated by dividing the number of unhealthy deployed applications over the number of nodes where the application is currently deployed on in the cluster.
		 * The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.
		 */
		maxPercentUnhealthyDeployedApplications?: number | null;

		/**
		 * Defines a ServiceTypeHealthPolicy per service type name.
		 * The entries in the map replace the default service type health policy for each specified service type.
		 * For example, in an application that contains both a stateless gateway service type and a stateful engine service type, the health policies for the stateless and stateful services can be configured differently.
		 * With policy per service type, there's more granular control of the health of the service.
		 * If no policy is specified for a service type name, the DefaultServiceTypeHealthPolicy is used for evaluation.
		 */
		serviceTypeHealthPolicyMap?: ArmServiceTypeHealthPolicyMap;
	}

	/**
	 * Defines a health policy used to evaluate the health of an application or one of its children entities.
	 */
	export interface ArmApplicationHealthPolicyFormProperties {

		/** Indicates whether warnings are treated with the same severity as errors. */
		considerWarningAsError: FormControl<boolean | null | undefined>,

		/**
		 * The maximum allowed percentage of unhealthy deployed applications. Allowed values are Byte values from zero to 100.
		 * The percentage represents the maximum tolerated percentage of deployed applications that can be unhealthy before the application is considered in error.
		 * This is calculated by dividing the number of unhealthy deployed applications over the number of nodes where the application is currently deployed on in the cluster.
		 * The computation rounds up to tolerate one failure on small numbers of nodes. Default percentage is zero.
		 */
		maxPercentUnhealthyDeployedApplications: FormControl<number | null | undefined>,
	}
	export function CreateArmApplicationHealthPolicyFormGroup() {
		return new FormGroup<ArmApplicationHealthPolicyFormProperties>({
			considerWarningAsError: new FormControl<boolean | null | undefined>(undefined),
			maxPercentUnhealthyDeployedApplications: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * Represents the health policy used to evaluate the health of services belonging to a service type.
	 */
	export interface ArmServiceTypeHealthPolicy {

		/**
		 * The maximum percentage of partitions per service allowed to be unhealthy before your application is considered in error.
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxPercentUnhealthyPartitionsPerService?: number | null;

		/**
		 * The maximum percentage of replicas per partition allowed to be unhealthy before your application is considered in error.
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxPercentUnhealthyReplicasPerPartition?: number | null;

		/**
		 * The maximum percentage of services allowed to be unhealthy before your application is considered in error.
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxPercentUnhealthyServices?: number | null;
	}

	/**
	 * Represents the health policy used to evaluate the health of services belonging to a service type.
	 */
	export interface ArmServiceTypeHealthPolicyFormProperties {

		/**
		 * The maximum percentage of partitions per service allowed to be unhealthy before your application is considered in error.
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxPercentUnhealthyPartitionsPerService: FormControl<number | null | undefined>,

		/**
		 * The maximum percentage of replicas per partition allowed to be unhealthy before your application is considered in error.
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxPercentUnhealthyReplicasPerPartition: FormControl<number | null | undefined>,

		/**
		 * The maximum percentage of services allowed to be unhealthy before your application is considered in error.
		 * Minimum: 0
		 * Maximum: 100
		 */
		maxPercentUnhealthyServices: FormControl<number | null | undefined>,
	}
	export function CreateArmServiceTypeHealthPolicyFormGroup() {
		return new FormGroup<ArmServiceTypeHealthPolicyFormProperties>({
			maxPercentUnhealthyPartitionsPerService: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			maxPercentUnhealthyReplicasPerPartition: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			maxPercentUnhealthyServices: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}


	/**
	 * Defines a ServiceTypeHealthPolicy per service type name.
	 * The entries in the map replace the default service type health policy for each specified service type.
	 * For example, in an application that contains both a stateless gateway service type and a stateful engine service type, the health policies for the stateless and stateful services can be configured differently.
	 * With policy per service type, there's more granular control of the health of the service.
	 * If no policy is specified for a service type name, the DefaultServiceTypeHealthPolicy is used for evaluation.
	 */
	export interface ArmServiceTypeHealthPolicyMap {
	}

	/**
	 * Defines a ServiceTypeHealthPolicy per service type name.
	 * The entries in the map replace the default service type health policy for each specified service type.
	 * For example, in an application that contains both a stateless gateway service type and a stateful engine service type, the health policies for the stateless and stateful services can be configured differently.
	 * With policy per service type, there's more granular control of the health of the service.
	 * If no policy is specified for a service type name, the DefaultServiceTypeHealthPolicy is used for evaluation.
	 */
	export interface ArmServiceTypeHealthPolicyMapFormProperties {
	}
	export function CreateArmServiceTypeHealthPolicyMapFormGroup() {
		return new FormGroup<ArmServiceTypeHealthPolicyMapFormProperties>({
		});

	}


	/** The policy used for monitoring the application upgrade */
	export interface ArmRollingUpgradeMonitoringPolicy {

		/** The activation Mode of the service package */
		failureAction?: ArmRollingUpgradeMonitoringPolicyFailureAction | null;

		/** The amount of time to retry health evaluation when the application or cluster is unhealthy before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. */
		healthCheckRetryTimeout?: string | null;

		/** The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. */
		healthCheckStableDuration?: string | null;

		/** The amount of time to wait after completing an upgrade domain before applying health policies. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. */
		healthCheckWaitDuration?: string | null;

		/** The amount of time each upgrade domain has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. */
		upgradeDomainTimeout?: string | null;

		/** The amount of time the overall upgrade has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. */
		upgradeTimeout?: string | null;
	}

	/** The policy used for monitoring the application upgrade */
	export interface ArmRollingUpgradeMonitoringPolicyFormProperties {

		/** The activation Mode of the service package */
		failureAction: FormControl<ArmRollingUpgradeMonitoringPolicyFailureAction | null | undefined>,

		/** The amount of time to retry health evaluation when the application or cluster is unhealthy before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. */
		healthCheckRetryTimeout: FormControl<string | null | undefined>,

		/** The amount of time that the application or cluster must remain healthy before the upgrade proceeds to the next upgrade domain. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. */
		healthCheckStableDuration: FormControl<string | null | undefined>,

		/** The amount of time to wait after completing an upgrade domain before applying health policies. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. */
		healthCheckWaitDuration: FormControl<string | null | undefined>,

		/** The amount of time each upgrade domain has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. */
		upgradeDomainTimeout: FormControl<string | null | undefined>,

		/** The amount of time the overall upgrade has to complete before FailureAction is executed. It is first interpreted as a string representing an ISO 8601 duration. If that fails, then it is interpreted as a number representing the total number of milliseconds. */
		upgradeTimeout: FormControl<string | null | undefined>,
	}
	export function CreateArmRollingUpgradeMonitoringPolicyFormGroup() {
		return new FormGroup<ArmRollingUpgradeMonitoringPolicyFormProperties>({
			failureAction: new FormControl<ArmRollingUpgradeMonitoringPolicyFailureAction | null | undefined>(undefined),
			healthCheckRetryTimeout: new FormControl<string | null | undefined>(undefined),
			healthCheckStableDuration: new FormControl<string | null | undefined>(undefined),
			healthCheckWaitDuration: new FormControl<string | null | undefined>(undefined),
			upgradeDomainTimeout: new FormControl<string | null | undefined>(undefined),
			upgradeTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ArmRollingUpgradeMonitoringPolicyFailureAction { Rollback = 0, Manual = 1 }


	/** Operation supported by the Service Fabric resource provider */
	export interface AvailableOperationDisplay {

		/** Operation description */
		description?: string | null;

		/** The operation that can be performed. */
		operation?: string | null;

		/** The name of the provider. */
		provider?: string | null;

		/** The resource on which the operation is performed */
		resource?: string | null;
	}

	/** Operation supported by the Service Fabric resource provider */
	export interface AvailableOperationDisplayFormProperties {

		/** Operation description */
		description: FormControl<string | null | undefined>,

		/** The operation that can be performed. */
		operation: FormControl<string | null | undefined>,

		/** The name of the provider. */
		provider: FormControl<string | null | undefined>,

		/** The resource on which the operation is performed */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateAvailableOperationDisplayFormGroup() {
		return new FormGroup<AvailableOperationDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates a particular correlation between services. */
	export interface ServiceCorrelationDescription {

		/**
		 * The service correlation scheme.
		 * Required
		 */
		scheme: ServiceCorrelationDescriptionScheme;

		/**
		 * The full name of the service with 'fabric:' URI scheme.
		 * Required
		 */
		serviceName: string;
	}

	/** Creates a particular correlation between services. */
	export interface ServiceCorrelationDescriptionFormProperties {

		/**
		 * The service correlation scheme.
		 * Required
		 */
		scheme: FormControl<ServiceCorrelationDescriptionScheme | null | undefined>,

		/**
		 * The full name of the service with 'fabric:' URI scheme.
		 * Required
		 */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateServiceCorrelationDescriptionFormGroup() {
		return new FormGroup<ServiceCorrelationDescriptionFormProperties>({
			scheme: new FormControl<ServiceCorrelationDescriptionScheme | null | undefined>(undefined, [Validators.required]),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ServiceCorrelationDescriptionScheme { Invalid = 0, Affinity = 1, AlignedAffinity = 2, NonAlignedAffinity = 3 }


	/** The structure of the error. */
	export interface ErrorModel {

		/** The error details. */
		error?: ErrorModelError;
	}

	/** The structure of the error. */
	export interface ErrorModelFormProperties {
	}
	export function CreateErrorModelFormGroup() {
		return new FormGroup<ErrorModelFormProperties>({
		});

	}


	/** The error details. */
	export interface ErrorModelError {

		/** The error code. */
		code?: string | null;

		/** The error message. */
		message?: string | null;
	}

	/** The error details. */
	export interface ErrorModelErrorFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorModelErrorFormGroup() {
		return new FormGroup<ErrorModelErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the move cost for the service. */
	export enum MoveCost { Zero = 0, Low = 1, Medium = 2, High = 3 }


	/** Describes the named partition scheme of the service. */
	export interface NamedPartitionSchemeDescription extends PartitionSchemeDescription {

		/**
		 * The number of partitions.
		 * Required
		 */
		Count: number;

		/**
		 * Array of size specified by the ‘Count’ parameter, for the names of the partitions.
		 * Required
		 */
		Names: Array<string>;
	}

	/** Describes the named partition scheme of the service. */
	export interface NamedPartitionSchemeDescriptionFormProperties extends PartitionSchemeDescriptionFormProperties {

		/**
		 * The number of partitions.
		 * Required
		 */
		Count: FormControl<number | null | undefined>,
	}
	export function CreateNamedPartitionSchemeDescriptionFormGroup() {
		return new FormGroup<NamedPartitionSchemeDescriptionFormProperties>({
			partitionScheme: new FormControl<PartitionScheme | null | undefined>(undefined, [Validators.required]),
			Count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the result of the request to list Service Fabric resource provider operations. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of operations supported by the Service Fabric resource provider. */
		value?: Array<OperationResult>;
	}

	/** Describes the result of the request to list Service Fabric resource provider operations. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Available operation list result */
	export interface OperationResult {

		/** Operation supported by the Service Fabric resource provider */
		display?: AvailableOperationDisplay;

		/** The name of the operation. */
		name?: string | null;

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** Origin result */
		origin?: string | null;
	}

	/** Available operation list result */
	export interface OperationResultFormProperties {

		/** The name of the operation. */
		name: FormControl<string | null | undefined>,

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,

		/** Origin result */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationResultFormGroup() {
		return new FormGroup<OperationResultFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Enumerates the ways that a service can be partitioned. */
	export enum PartitionScheme { Invalid = 0, Singleton = 1, UniformInt64Range = 2, Named = 3 }


	/** Describes how the service is partitioned. */
	export interface PartitionSchemeDescription {

		/**
		 * Enumerates the ways that a service can be partitioned.
		 * Required
		 */
		partitionScheme: PartitionScheme;
	}

	/** Describes how the service is partitioned. */
	export interface PartitionSchemeDescriptionFormProperties {

		/**
		 * Enumerates the ways that a service can be partitioned.
		 * Required
		 */
		partitionScheme: FormControl<PartitionScheme | null | undefined>,
	}
	export function CreatePartitionSchemeDescriptionFormGroup() {
		return new FormGroup<PartitionSchemeDescriptionFormProperties>({
			partitionScheme: new FormControl<PartitionScheme | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The resource model definition for proxy-only resource. */
	export interface ProxyResource {

		/** Azure resource etag. */
		etag?: string | null;

		/** Azure resource identifier. */
		id?: string | null;

		/** It will be deprecated in New API, resource location depends on the parent resource. */
		location?: string | null;

		/** Azure resource name. */
		name?: string | null;

		/** Azure resource tags. */
		tags?: {[id: string]: string };

		/** Azure resource type. */
		type?: string | null;
	}

	/** The resource model definition for proxy-only resource. */
	export interface ProxyResourceFormProperties {

		/** Azure resource etag. */
		etag: FormControl<string | null | undefined>,

		/** Azure resource identifier. */
		id: FormControl<string | null | undefined>,

		/** It will be deprecated in New API, resource location depends on the parent resource. */
		location: FormControl<string | null | undefined>,

		/** Azure resource name. */
		name: FormControl<string | null | undefined>,

		/** Azure resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Azure resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The service correlation scheme. */
	export enum ServiceCorrelationScheme { Invalid = 0, Affinity = 1, AlignedAffinity = 2, NonAlignedAffinity = 3 }


	/** The kind of service (Stateless or Stateful). */
	export enum ServiceKind { Invalid = 0, Stateless = 1, Stateful = 2 }


	/** Specifies a metric to load balance a service during runtime. */
	export interface ServiceLoadMetricDescription {

		/** Used only for Stateless services. The default amount of load, as a number, that this service creates for this metric. */
		defaultLoad?: number | null;

		/**
		 * The name of the metric. If the service chooses to report load during runtime, the load metric name should match the name that is specified in Name exactly. Note that metric names are case sensitive.
		 * Required
		 */
		name: string;

		/** Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Primary replica. */
		primaryDefaultLoad?: number | null;

		/** Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Secondary replica. */
		secondaryDefaultLoad?: number | null;

		/** Determines the metric weight relative to the other metrics that are configured for this service. During runtime, if two metrics end up in conflict, the Cluster Resource Manager prefers the metric with the higher weight. */
		weight?: MoveCost | null;
	}

	/** Specifies a metric to load balance a service during runtime. */
	export interface ServiceLoadMetricDescriptionFormProperties {

		/** Used only for Stateless services. The default amount of load, as a number, that this service creates for this metric. */
		defaultLoad: FormControl<number | null | undefined>,

		/**
		 * The name of the metric. If the service chooses to report load during runtime, the load metric name should match the name that is specified in Name exactly. Note that metric names are case sensitive.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Primary replica. */
		primaryDefaultLoad: FormControl<number | null | undefined>,

		/** Used only for Stateful services. The default amount of load, as a number, that this service creates for this metric when it is a Secondary replica. */
		secondaryDefaultLoad: FormControl<number | null | undefined>,

		/** Determines the metric weight relative to the other metrics that are configured for this service. During runtime, if two metrics end up in conflict, the Cluster Resource Manager prefers the metric with the higher weight. */
		weight: FormControl<MoveCost | null | undefined>,
	}
	export function CreateServiceLoadMetricDescriptionFormGroup() {
		return new FormGroup<ServiceLoadMetricDescriptionFormProperties>({
			defaultLoad: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			primaryDefaultLoad: new FormControl<number | null | undefined>(undefined),
			secondaryDefaultLoad: new FormControl<number | null | undefined>(undefined),
			weight: new FormControl<MoveCost | null | undefined>(undefined),
		});

	}


	/** Determines the metric weight relative to the other metrics that are configured for this service. During runtime, if two metrics end up in conflict, the Cluster Resource Manager prefers the metric with the higher weight. */
	export enum ServiceLoadMetricWeight { Zero = 0, Low = 1, Medium = 2, High = 3 }


	/** Describes the policy to be used for placement of a Service Fabric service. */
	export interface ServicePlacementPolicyDescription {

		/**
		 * The type of placement policy for a service fabric service. Following are the possible values.
		 * Required
		 */
		Type: ServicePlacementPolicyDescriptionType;
	}

	/** Describes the policy to be used for placement of a Service Fabric service. */
	export interface ServicePlacementPolicyDescriptionFormProperties {

		/**
		 * The type of placement policy for a service fabric service. Following are the possible values.
		 * Required
		 */
		Type: FormControl<ServicePlacementPolicyDescriptionType | null | undefined>,
	}
	export function CreateServicePlacementPolicyDescriptionFormGroup() {
		return new FormGroup<ServicePlacementPolicyDescriptionFormProperties>({
			Type: new FormControl<ServicePlacementPolicyDescriptionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ServicePlacementPolicyDescriptionType { Invalid = 0, InvalidDomain = 1, RequiredDomain = 2, PreferredPrimaryDomain = 3, RequiredDomainDistribution = 4, NonPartiallyPlaceService = 5 }


	/** The type of placement policy for a service fabric service. Following are the possible values. */
	export enum ServicePlacementPolicyType { Invalid = 0, InvalidDomain = 1, RequiredDomain = 2, PreferredPrimaryDomain = 3, RequiredDomainDistribution = 4, NonPartiallyPlaceService = 5 }


	/** The service resource. */
	export interface ServiceResource extends ProxyResource {

		/** The service resource properties. */
		properties?: ServiceResourceProperties;
	}

	/** The service resource. */
	export interface ServiceResourceFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateServiceResourceFormGroup() {
		return new FormGroup<ServiceResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of service resources. */
	export interface ServiceResourceList {

		/** URL to get the next set of service list results if there are any. */
		nextLink?: string | null;
		value?: Array<ServiceResource>;
	}

	/** The list of service resources. */
	export interface ServiceResourceListFormProperties {

		/** URL to get the next set of service list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateServiceResourceListFormGroup() {
		return new FormGroup<ServiceResourceListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The service resource properties. */
	export interface ServiceResourceProperties extends ServiceResourcePropertiesBase {

		/** Describes how the service is partitioned. */
		partitionDescription?: PartitionSchemeDescription;

		/** The current deployment or provisioning state, which only appears in the response */
		provisioningState?: string | null;

		/**
		 * The kind of service (Stateless or Stateful).
		 * Required
		 */
		serviceKind: ServiceKind;

		/** The activation Mode of the service package */
		servicePackageActivationMode?: ServiceResourcePropertiesServicePackageActivationMode | null;

		/** The name of the service type */
		serviceTypeName?: string | null;
	}

	/** The service resource properties. */
	export interface ServiceResourcePropertiesFormProperties extends ServiceResourcePropertiesBaseFormProperties {

		/** The current deployment or provisioning state, which only appears in the response */
		provisioningState: FormControl<string | null | undefined>,

		/**
		 * The kind of service (Stateless or Stateful).
		 * Required
		 */
		serviceKind: FormControl<ServiceKind | null | undefined>,

		/** The activation Mode of the service package */
		servicePackageActivationMode: FormControl<ServiceResourcePropertiesServicePackageActivationMode | null | undefined>,

		/** The name of the service type */
		serviceTypeName: FormControl<string | null | undefined>,
	}
	export function CreateServiceResourcePropertiesFormGroup() {
		return new FormGroup<ServiceResourcePropertiesFormProperties>({
			defaultMoveCost: new FormControl<MoveCost | null | undefined>(undefined),
			placementConstraints: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			serviceKind: new FormControl<ServiceKind | null | undefined>(undefined, [Validators.required]),
			servicePackageActivationMode: new FormControl<ServiceResourcePropertiesServicePackageActivationMode | null | undefined>(undefined),
			serviceTypeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServiceResourcePropertiesServicePackageActivationMode { SharedProcess = 0, ExclusiveProcess = 1 }


	/** The common service resource properties. */
	export interface ServiceResourcePropertiesBase {

		/** A list that describes the correlation of the service with other services. */
		correlationScheme?: Array<ServiceCorrelationDescription>;

		/** Specifies the move cost for the service. */
		defaultMoveCost?: MoveCost | null;

		/** The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)". */
		placementConstraints?: string | null;

		/** The service load metrics is given as an array of ServiceLoadMetricDescription objects. */
		serviceLoadMetrics?: Array<ServiceLoadMetricDescription>;

		/** A list that describes the correlation of the service with other services. */
		servicePlacementPolicies?: Array<ServicePlacementPolicyDescription>;
	}

	/** The common service resource properties. */
	export interface ServiceResourcePropertiesBaseFormProperties {

		/** Specifies the move cost for the service. */
		defaultMoveCost: FormControl<MoveCost | null | undefined>,

		/** The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)". */
		placementConstraints: FormControl<string | null | undefined>,
	}
	export function CreateServiceResourcePropertiesBaseFormGroup() {
		return new FormGroup<ServiceResourcePropertiesBaseFormProperties>({
			defaultMoveCost: new FormControl<MoveCost | null | undefined>(undefined),
			placementConstraints: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The service resource for patch operations. */
	export interface ServiceResourceUpdate extends ProxyResource {

		/** The service resource properties for patch operations. */
		properties?: ServiceResourceUpdateProperties;
	}

	/** The service resource for patch operations. */
	export interface ServiceResourceUpdateFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateServiceResourceUpdateFormGroup() {
		return new FormGroup<ServiceResourceUpdateFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The service resource properties for patch operations. */
	export interface ServiceResourceUpdateProperties extends ServiceResourcePropertiesBase {

		/**
		 * The kind of service (Stateless or Stateful).
		 * Required
		 */
		serviceKind: ServiceKind;
	}

	/** The service resource properties for patch operations. */
	export interface ServiceResourceUpdatePropertiesFormProperties extends ServiceResourcePropertiesBaseFormProperties {

		/**
		 * The kind of service (Stateless or Stateful).
		 * Required
		 */
		serviceKind: FormControl<ServiceKind | null | undefined>,
	}
	export function CreateServiceResourceUpdatePropertiesFormGroup() {
		return new FormGroup<ServiceResourceUpdatePropertiesFormProperties>({
			defaultMoveCost: new FormControl<MoveCost | null | undefined>(undefined),
			placementConstraints: new FormControl<string | null | undefined>(undefined),
			serviceKind: new FormControl<ServiceKind | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the partition scheme of a singleton-partitioned, or non-partitioned service. */
	export interface SingletonPartitionSchemeDescription extends PartitionSchemeDescription {
	}

	/** Describes the partition scheme of a singleton-partitioned, or non-partitioned service. */
	export interface SingletonPartitionSchemeDescriptionFormProperties extends PartitionSchemeDescriptionFormProperties {
	}
	export function CreateSingletonPartitionSchemeDescriptionFormGroup() {
		return new FormGroup<SingletonPartitionSchemeDescriptionFormProperties>({
			partitionScheme: new FormControl<PartitionScheme | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties of a stateful service resource. */
	export interface StatefulServiceProperties extends ServiceResourceProperties {

		/** A flag indicating whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false. */
		hasPersistedState?: boolean | null;

		/**
		 * The minimum replica set size as a number.
		 * Minimum: 1
		 */
		minReplicaSetSize?: number | null;

		/** The maximum duration for which a partition is allowed to be in a state of quorum loss, represented in ISO 8601 format (hh:mm:ss.s). */
		quorumLossWaitDuration?: Date | null;

		/** The duration between when a replica goes down and when a new replica is created, represented in ISO 8601 format (hh:mm:ss.s). */
		replicaRestartWaitDuration?: Date | null;

		/** The definition on how long StandBy replicas should be maintained before being removed, represented in ISO 8601 format (hh:mm:ss.s). */
		standByReplicaKeepDuration?: Date | null;

		/**
		 * The target replica set size as a number.
		 * Minimum: 1
		 */
		targetReplicaSetSize?: number | null;
	}

	/** The properties of a stateful service resource. */
	export interface StatefulServicePropertiesFormProperties extends ServiceResourcePropertiesFormProperties {

		/** A flag indicating whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false. */
		hasPersistedState: FormControl<boolean | null | undefined>,

		/**
		 * The minimum replica set size as a number.
		 * Minimum: 1
		 */
		minReplicaSetSize: FormControl<number | null | undefined>,

		/** The maximum duration for which a partition is allowed to be in a state of quorum loss, represented in ISO 8601 format (hh:mm:ss.s). */
		quorumLossWaitDuration: FormControl<Date | null | undefined>,

		/** The duration between when a replica goes down and when a new replica is created, represented in ISO 8601 format (hh:mm:ss.s). */
		replicaRestartWaitDuration: FormControl<Date | null | undefined>,

		/** The definition on how long StandBy replicas should be maintained before being removed, represented in ISO 8601 format (hh:mm:ss.s). */
		standByReplicaKeepDuration: FormControl<Date | null | undefined>,

		/**
		 * The target replica set size as a number.
		 * Minimum: 1
		 */
		targetReplicaSetSize: FormControl<number | null | undefined>,
	}
	export function CreateStatefulServicePropertiesFormGroup() {
		return new FormGroup<StatefulServicePropertiesFormProperties>({
			defaultMoveCost: new FormControl<MoveCost | null | undefined>(undefined),
			placementConstraints: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			serviceKind: new FormControl<ServiceKind | null | undefined>(undefined, [Validators.required]),
			servicePackageActivationMode: new FormControl<ServiceResourcePropertiesServicePackageActivationMode | null | undefined>(undefined),
			serviceTypeName: new FormControl<string | null | undefined>(undefined),
			hasPersistedState: new FormControl<boolean | null | undefined>(undefined),
			minReplicaSetSize: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			quorumLossWaitDuration: new FormControl<Date | null | undefined>(undefined),
			replicaRestartWaitDuration: new FormControl<Date | null | undefined>(undefined),
			standByReplicaKeepDuration: new FormControl<Date | null | undefined>(undefined),
			targetReplicaSetSize: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** The properties of a stateful service resource for patch operations. */
	export interface StatefulServiceUpdateProperties extends ServiceResourceUpdateProperties {

		/**
		 * The minimum replica set size as a number.
		 * Minimum: 1
		 */
		minReplicaSetSize?: number | null;

		/** The maximum duration for which a partition is allowed to be in a state of quorum loss, represented in ISO 8601 format (hh:mm:ss.s). */
		quorumLossWaitDuration?: Date | null;

		/** The duration between when a replica goes down and when a new replica is created, represented in ISO 8601 format (hh:mm:ss.s). */
		replicaRestartWaitDuration?: Date | null;

		/** The definition on how long StandBy replicas should be maintained before being removed, represented in ISO 8601 format (hh:mm:ss.s). */
		standByReplicaKeepDuration?: Date | null;

		/**
		 * The target replica set size as a number.
		 * Minimum: 1
		 */
		targetReplicaSetSize?: number | null;
	}

	/** The properties of a stateful service resource for patch operations. */
	export interface StatefulServiceUpdatePropertiesFormProperties extends ServiceResourceUpdatePropertiesFormProperties {

		/**
		 * The minimum replica set size as a number.
		 * Minimum: 1
		 */
		minReplicaSetSize: FormControl<number | null | undefined>,

		/** The maximum duration for which a partition is allowed to be in a state of quorum loss, represented in ISO 8601 format (hh:mm:ss.s). */
		quorumLossWaitDuration: FormControl<Date | null | undefined>,

		/** The duration between when a replica goes down and when a new replica is created, represented in ISO 8601 format (hh:mm:ss.s). */
		replicaRestartWaitDuration: FormControl<Date | null | undefined>,

		/** The definition on how long StandBy replicas should be maintained before being removed, represented in ISO 8601 format (hh:mm:ss.s). */
		standByReplicaKeepDuration: FormControl<Date | null | undefined>,

		/**
		 * The target replica set size as a number.
		 * Minimum: 1
		 */
		targetReplicaSetSize: FormControl<number | null | undefined>,
	}
	export function CreateStatefulServiceUpdatePropertiesFormGroup() {
		return new FormGroup<StatefulServiceUpdatePropertiesFormProperties>({
			defaultMoveCost: new FormControl<MoveCost | null | undefined>(undefined),
			placementConstraints: new FormControl<string | null | undefined>(undefined),
			serviceKind: new FormControl<ServiceKind | null | undefined>(undefined, [Validators.required]),
			minReplicaSetSize: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			quorumLossWaitDuration: new FormControl<Date | null | undefined>(undefined),
			replicaRestartWaitDuration: new FormControl<Date | null | undefined>(undefined),
			standByReplicaKeepDuration: new FormControl<Date | null | undefined>(undefined),
			targetReplicaSetSize: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** The properties of a stateless service resource. */
	export interface StatelessServiceProperties extends ServiceResourceProperties {

		/**
		 * The instance count.
		 * Minimum: -1
		 */
		instanceCount?: number | null;
	}

	/** The properties of a stateless service resource. */
	export interface StatelessServicePropertiesFormProperties extends ServiceResourcePropertiesFormProperties {

		/**
		 * The instance count.
		 * Minimum: -1
		 */
		instanceCount: FormControl<number | null | undefined>,
	}
	export function CreateStatelessServicePropertiesFormGroup() {
		return new FormGroup<StatelessServicePropertiesFormProperties>({
			defaultMoveCost: new FormControl<MoveCost | null | undefined>(undefined),
			placementConstraints: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			serviceKind: new FormControl<ServiceKind | null | undefined>(undefined, [Validators.required]),
			servicePackageActivationMode: new FormControl<ServiceResourcePropertiesServicePackageActivationMode | null | undefined>(undefined),
			serviceTypeName: new FormControl<string | null | undefined>(undefined),
			instanceCount: new FormControl<number | null | undefined>(undefined, [Validators.min(-1)]),
		});

	}


	/** The properties of a stateless service resource for patch operations. */
	export interface StatelessServiceUpdateProperties extends ServiceResourceUpdateProperties {

		/**
		 * The instance count.
		 * Minimum: -1
		 */
		instanceCount?: number | null;
	}

	/** The properties of a stateless service resource for patch operations. */
	export interface StatelessServiceUpdatePropertiesFormProperties extends ServiceResourceUpdatePropertiesFormProperties {

		/**
		 * The instance count.
		 * Minimum: -1
		 */
		instanceCount: FormControl<number | null | undefined>,
	}
	export function CreateStatelessServiceUpdatePropertiesFormGroup() {
		return new FormGroup<StatelessServiceUpdatePropertiesFormProperties>({
			defaultMoveCost: new FormControl<MoveCost | null | undefined>(undefined),
			placementConstraints: new FormControl<string | null | undefined>(undefined),
			serviceKind: new FormControl<ServiceKind | null | undefined>(undefined, [Validators.required]),
			instanceCount: new FormControl<number | null | undefined>(undefined, [Validators.min(-1)]),
		});

	}


	/** Describes a partitioning scheme where an integer range is allocated evenly across a number of partitions. */
	export interface UniformInt64RangePartitionSchemeDescription extends PartitionSchemeDescription {

		/**
		 * The number of partitions.
		 * Required
		 */
		Count: number;

		/**
		 * String indicating the upper bound of the partition key range that
		 * should be split between the partition ‘Count’
		 * Required
		 */
		HighKey: string;

		/**
		 * String indicating the lower bound of the partition key range that
		 * should be split between the partition ‘Count’
		 * Required
		 */
		LowKey: string;
	}

	/** Describes a partitioning scheme where an integer range is allocated evenly across a number of partitions. */
	export interface UniformInt64RangePartitionSchemeDescriptionFormProperties extends PartitionSchemeDescriptionFormProperties {

		/**
		 * The number of partitions.
		 * Required
		 */
		Count: FormControl<number | null | undefined>,

		/**
		 * String indicating the upper bound of the partition key range that
		 * should be split between the partition ‘Count’
		 * Required
		 */
		HighKey: FormControl<string | null | undefined>,

		/**
		 * String indicating the lower bound of the partition key range that
		 * should be split between the partition ‘Count’
		 * Required
		 */
		LowKey: FormControl<string | null | undefined>,
	}
	export function CreateUniformInt64RangePartitionSchemeDescriptionFormGroup() {
		return new FormGroup<UniformInt64RangePartitionSchemeDescriptionFormProperties>({
			partitionScheme: new FormControl<PartitionScheme | null | undefined>(undefined, [Validators.required]),
			Count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			HighKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LowKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Service Fabric resource provider API operations.
		 * Get the list of available Service Fabric resource provider API operations.
		 * Get providers/Microsoft.ServiceFabric/operations
		 * @param {string} api_version The version of the Service Fabric resource provider API
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.ServiceFabric/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the list of application type name resources created in the specified Service Fabric cluster resource.
		 * Gets all application type name resources created or in the process of being created in the Service Fabric cluster resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster resource.
		 * @param {ApplicationTypes_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @return {ApplicationTypeResourceList} The operation completed successfully.
		 */
		ApplicationTypes_List(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: ApplicationTypes_ListApi_version): Observable<ApplicationTypeResourceList> {
			return this.http.get<ApplicationTypeResourceList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/applicationTypes&api_version=' + api_version, {});
		}

		/**
		 * Gets a Service Fabric application type name resource.
		 * Get a Service Fabric application type name resource created or in the process of being created in the Service Fabric cluster resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster resource.
		 * @param {string} applicationTypeName The name of the application type name resource.
		 * @param {ApplicationTypes_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @return {ApplicationTypeResource} The operation completed successfully.
		 */
		ApplicationTypes_Get(subscriptionId: string, resourceGroupName: string, clusterName: string, applicationTypeName: string, api_version: ApplicationTypes_ListApi_version): Observable<ApplicationTypeResource> {
			return this.http.get<ApplicationTypeResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/applicationTypes/' + (applicationTypeName == null ? '' : encodeURIComponent(applicationTypeName)) + '&api_version=' + api_version, {});
		}

		/**
		 * Creates or updates a Service Fabric application type name resource.
		 * Create or update a Service Fabric application type name resource with the specified name.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster resource.
		 * @param {string} applicationTypeName The name of the application type name resource.
		 * @param {ApplicationTypes_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @param {ApplicationTypeResource} requestBody The application type name resource.
		 * @return {ApplicationTypeResource} The operation completed successfully.
		 */
		ApplicationTypes_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, clusterName: string, applicationTypeName: string, api_version: ApplicationTypes_ListApi_version, requestBody: ApplicationTypeResource): Observable<ApplicationTypeResource> {
			return this.http.put<ApplicationTypeResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/applicationTypes/' + (applicationTypeName == null ? '' : encodeURIComponent(applicationTypeName)) + '&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Service Fabric application type name resource.
		 * Delete a Service Fabric application type name resource with the specified name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster resource.
		 * @param {string} applicationTypeName The name of the application type name resource.
		 * @param {ApplicationTypes_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @return {void} 
		 */
		ApplicationTypes_Delete(subscriptionId: string, resourceGroupName: string, clusterName: string, applicationTypeName: string, api_version: ApplicationTypes_ListApi_version): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/applicationTypes/' + (applicationTypeName == null ? '' : encodeURIComponent(applicationTypeName)) + '&api_version=' + api_version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the list of application type version resources created in the specified Service Fabric application type name resource.
		 * Gets all application type version resources created or in the process of being created in the Service Fabric application type name resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}/versions
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster resource.
		 * @param {string} applicationTypeName The name of the application type name resource.
		 * @param {ApplicationTypes_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @return {ApplicationTypeVersionResourceList} The operation completed successfully.
		 */
		ApplicationTypeVersions_List(subscriptionId: string, resourceGroupName: string, clusterName: string, applicationTypeName: string, api_version: ApplicationTypes_ListApi_version): Observable<ApplicationTypeVersionResourceList> {
			return this.http.get<ApplicationTypeVersionResourceList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/applicationTypes/' + (applicationTypeName == null ? '' : encodeURIComponent(applicationTypeName)) + '/versions&api_version=' + api_version, {});
		}

		/**
		 * Gets a Service Fabric application type version resource.
		 * Get a Service Fabric application type version resource created or in the process of being created in the Service Fabric application type name resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}/versions/{version}
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster resource.
		 * @param {string} applicationTypeName The name of the application type name resource.
		 * @param {string} version The application type version.
		 * @param {ApplicationTypes_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @return {ApplicationTypeVersionResource} The operation completed successfully.
		 */
		ApplicationTypeVersions_Get(subscriptionId: string, resourceGroupName: string, clusterName: string, applicationTypeName: string, version: string, api_version: ApplicationTypes_ListApi_version): Observable<ApplicationTypeVersionResource> {
			return this.http.get<ApplicationTypeVersionResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/applicationTypes/' + (applicationTypeName == null ? '' : encodeURIComponent(applicationTypeName)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)) + '&api_version=' + api_version, {});
		}

		/**
		 * Creates or updates a Service Fabric application type version resource.
		 * Create or update a Service Fabric application type version resource with the specified name.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}/versions/{version}
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster resource.
		 * @param {string} applicationTypeName The name of the application type name resource.
		 * @param {string} version The application type version.
		 * @param {ApplicationTypes_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @param {ApplicationTypeVersionResource} requestBody The application type version resource.
		 * @return {void} 
		 */
		ApplicationTypeVersions_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, clusterName: string, applicationTypeName: string, version: string, api_version: ApplicationTypes_ListApi_version, requestBody: ApplicationTypeVersionResource): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/applicationTypes/' + (applicationTypeName == null ? '' : encodeURIComponent(applicationTypeName)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)) + '&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a Service Fabric application type version resource.
		 * Delete a Service Fabric application type version resource with the specified name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}/versions/{version}
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster resource.
		 * @param {string} applicationTypeName The name of the application type name resource.
		 * @param {string} version The application type version.
		 * @param {ApplicationTypes_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @return {void} 
		 */
		ApplicationTypeVersions_Delete(subscriptionId: string, resourceGroupName: string, clusterName: string, applicationTypeName: string, version: string, api_version: ApplicationTypes_ListApi_version): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/applicationTypes/' + (applicationTypeName == null ? '' : encodeURIComponent(applicationTypeName)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)) + '&api_version=' + api_version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the list of application resources created in the specified Service Fabric cluster resource.
		 * Gets all application resources created or in the process of being created in the Service Fabric cluster resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster resource.
		 * @param {ApplicationTypes_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @return {ApplicationResourceList} The operation completed successfully.
		 */
		Applications_List(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: ApplicationTypes_ListApi_version): Observable<ApplicationResourceList> {
			return this.http.get<ApplicationResourceList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/applications&api_version=' + api_version, {});
		}

		/**
		 * Gets a Service Fabric application resource.
		 * Get a Service Fabric application resource created or in the process of being created in the Service Fabric cluster resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster resource.
		 * @param {string} applicationName The name of the application resource.
		 * @param {ApplicationTypes_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @return {ApplicationResource} The operation completed successfully.
		 */
		Applications_Get(subscriptionId: string, resourceGroupName: string, clusterName: string, applicationName: string, api_version: ApplicationTypes_ListApi_version): Observable<ApplicationResource> {
			return this.http.get<ApplicationResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '&api_version=' + api_version, {});
		}

		/**
		 * Creates or updates a Service Fabric application resource.
		 * Create or update a Service Fabric application resource with the specified name.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster resource.
		 * @param {string} applicationName The name of the application resource.
		 * @param {ApplicationTypes_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @param {ApplicationResource} requestBody The application resource.
		 * @return {void} 
		 */
		Applications_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, clusterName: string, applicationName: string, api_version: ApplicationTypes_ListApi_version, requestBody: ApplicationResource): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a Service Fabric application resource.
		 * Delete a Service Fabric application resource with the specified name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster resource.
		 * @param {string} applicationName The name of the application resource.
		 * @param {ApplicationTypes_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @return {void} 
		 */
		Applications_Delete(subscriptionId: string, resourceGroupName: string, clusterName: string, applicationName: string, api_version: ApplicationTypes_ListApi_version): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '&api_version=' + api_version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a Service Fabric application resource.
		 * Update a Service Fabric application resource with the specified name.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster resource.
		 * @param {string} applicationName The name of the application resource.
		 * @param {ApplicationTypes_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @param {ApplicationResourceUpdate} requestBody The application resource for patch operations.
		 * @return {void} 
		 */
		Applications_Update(subscriptionId: string, resourceGroupName: string, clusterName: string, applicationName: string, api_version: ApplicationTypes_ListApi_version, requestBody: ApplicationResourceUpdate): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the list of service resources created in the specified Service Fabric application resource.
		 * Gets all service resources created or in the process of being created in the Service Fabric application resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}/services
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster resource.
		 * @param {string} applicationName The name of the application resource.
		 * @param {ApplicationTypes_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @return {ServiceResourceList} The operation completed successfully.
		 */
		Services_List(subscriptionId: string, resourceGroupName: string, clusterName: string, applicationName: string, api_version: ApplicationTypes_ListApi_version): Observable<ServiceResourceList> {
			return this.http.get<ServiceResourceList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '/services&api_version=' + api_version, {});
		}

		/**
		 * Gets a Service Fabric service resource.
		 * Get a Service Fabric service resource created or in the process of being created in the Service Fabric application resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}/services/{serviceName}
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster resource.
		 * @param {string} applicationName The name of the application resource.
		 * @param {string} serviceName The name of the service resource in the format of {applicationName}~{serviceName}.
		 * @param {ApplicationTypes_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @return {ServiceResource} The operation completed successfully.
		 */
		Services_Get(subscriptionId: string, resourceGroupName: string, clusterName: string, applicationName: string, serviceName: string, api_version: ApplicationTypes_ListApi_version): Observable<ServiceResource> {
			return this.http.get<ServiceResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '/services/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '&api_version=' + api_version, {});
		}

		/**
		 * Creates or updates a Service Fabric service resource.
		 * Create or update a Service Fabric service resource with the specified name.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}/services/{serviceName}
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster resource.
		 * @param {string} applicationName The name of the application resource.
		 * @param {string} serviceName The name of the service resource in the format of {applicationName}~{serviceName}.
		 * @param {ApplicationTypes_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @param {ServiceResource} requestBody The service resource.
		 * @return {void} 
		 */
		Services_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, clusterName: string, applicationName: string, serviceName: string, api_version: ApplicationTypes_ListApi_version, requestBody: ServiceResource): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '/services/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a Service Fabric service resource.
		 * Delete a Service Fabric service resource with the specified name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}/services/{serviceName}
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster resource.
		 * @param {string} applicationName The name of the application resource.
		 * @param {string} serviceName The name of the service resource in the format of {applicationName}~{serviceName}.
		 * @param {ApplicationTypes_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @return {void} 
		 */
		Services_Delete(subscriptionId: string, resourceGroupName: string, clusterName: string, applicationName: string, serviceName: string, api_version: ApplicationTypes_ListApi_version): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '/services/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '&api_version=' + api_version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a Service Fabric service resource.
		 * Update a Service Fabric service resource with the specified name.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}/services/{serviceName}
		 * @param {string} subscriptionId The customer subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster resource.
		 * @param {string} applicationName The name of the application resource.
		 * @param {string} serviceName The name of the service resource in the format of {applicationName}~{serviceName}.
		 * @param {ApplicationTypes_ListApi_version} api_version The version of the Service Fabric resource provider API. This is a required parameter and it's value must be "2019-03-01" for this specification.
		 * @param {ServiceResourceUpdate} requestBody The service resource for patch operations.
		 * @return {void} 
		 */
		Services_Update(subscriptionId: string, resourceGroupName: string, clusterName: string, applicationName: string, serviceName: string, api_version: ApplicationTypes_ListApi_version, requestBody: ServiceResourceUpdate): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceFabric/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '/services/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum ApplicationTypes_ListApi_version { '2019-03-01' = 0 }

}

