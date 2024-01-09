import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateCapacityProviderResponse {

		/** The details of a capacity provider. */
		capacityProvider?: CapacityProvider;
	}
	export interface CreateCapacityProviderResponseFormProperties {
	}
	export function CreateCreateCapacityProviderResponseFormGroup() {
		return new FormGroup<CreateCapacityProviderResponseFormProperties>({
		});

	}


	/** The details of a capacity provider. */
	export interface CapacityProvider {
		capacityProviderArn?: string | null;
		name?: string | null;
		status?: CapacityProviderStatus | null;

		/** The details of the Auto Scaling group for the capacity provider. */
		autoScalingGroupProvider?: AutoScalingGroupProvider;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}

	/** The details of a capacity provider. */
	export interface CapacityProviderFormProperties {
		capacityProviderArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<CapacityProviderStatus | null | undefined>,
	}
	export function CreateCapacityProviderFormGroup() {
		return new FormGroup<CapacityProviderFormProperties>({
			capacityProviderArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CapacityProviderStatus | null | undefined>(undefined),
		});

	}

	export enum CapacityProviderStatus { ACTIVE = 0 }


	/** The details of the Auto Scaling group for the capacity provider. */
	export interface AutoScalingGroupProvider {

		/** Required */
		autoScalingGroupArn: string;

		/** <p>The managed scaling settings for the Auto Scaling group capacity provider.</p> <p>When managed scaling is enabled, Amazon ECS manages the scale-in and scale-out actions of the Auto Scaling group. Amazon ECS manages a target tracking scaling policy using an Amazon ECS-managed CloudWatch metric with the specified <code>targetCapacity</code> value as the target value for the metric. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/asg-capacity-providers.html#asg-capacity-providers-managed-scaling">Using Managed Scaling</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>If managed scaling is disabled, the user must manage the scaling of the Auto Scaling group.</p> */
		managedScaling?: ManagedScaling;
		managedTerminationProtection?: ManagedScalingStatus | null;
	}

	/** The details of the Auto Scaling group for the capacity provider. */
	export interface AutoScalingGroupProviderFormProperties {

		/** Required */
		autoScalingGroupArn: FormControl<string | null | undefined>,
		managedTerminationProtection: FormControl<ManagedScalingStatus | null | undefined>,
	}
	export function CreateAutoScalingGroupProviderFormGroup() {
		return new FormGroup<AutoScalingGroupProviderFormProperties>({
			autoScalingGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			managedTerminationProtection: new FormControl<ManagedScalingStatus | null | undefined>(undefined),
		});

	}


	/** <p>The managed scaling settings for the Auto Scaling group capacity provider.</p> <p>When managed scaling is enabled, Amazon ECS manages the scale-in and scale-out actions of the Auto Scaling group. Amazon ECS manages a target tracking scaling policy using an Amazon ECS-managed CloudWatch metric with the specified <code>targetCapacity</code> value as the target value for the metric. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/asg-capacity-providers.html#asg-capacity-providers-managed-scaling">Using Managed Scaling</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>If managed scaling is disabled, the user must manage the scaling of the Auto Scaling group.</p> */
	export interface ManagedScaling {
		status?: ManagedScalingStatus | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		targetCapacity?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		minimumScalingStepSize?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		maximumScalingStepSize?: number | null;
	}

	/** <p>The managed scaling settings for the Auto Scaling group capacity provider.</p> <p>When managed scaling is enabled, Amazon ECS manages the scale-in and scale-out actions of the Auto Scaling group. Amazon ECS manages a target tracking scaling policy using an Amazon ECS-managed CloudWatch metric with the specified <code>targetCapacity</code> value as the target value for the metric. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/asg-capacity-providers.html#asg-capacity-providers-managed-scaling">Using Managed Scaling</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>If managed scaling is disabled, the user must manage the scaling of the Auto Scaling group.</p> */
	export interface ManagedScalingFormProperties {
		status: FormControl<ManagedScalingStatus | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		targetCapacity: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		minimumScalingStepSize: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		maximumScalingStepSize: FormControl<number | null | undefined>,
	}
	export function CreateManagedScalingFormGroup() {
		return new FormGroup<ManagedScalingFormProperties>({
			status: new FormControl<ManagedScalingStatus | null | undefined>(undefined),
			targetCapacity: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			minimumScalingStepSize: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10000)]),
			maximumScalingStepSize: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10000)]),
		});

	}

	export enum ManagedScalingStatus { ENABLED = 0, DISABLED = 1 }


	/** <p>The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case-sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.</p> </li> </ul> */
	export interface Tag {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		key?: string | null;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		value?: string | null;
	}

	/** <p>The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case-sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.</p> </li> </ul> */
	export interface TagFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
		});

	}

	export interface CreateCapacityProviderRequest {

		/** Required */
		name: string;

		/**
		 * The details of the Auto Scaling group for the capacity provider.
		 * Required
		 */
		autoScalingGroupProvider: AutoScalingGroupProvider;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}
	export interface CreateCapacityProviderRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateCapacityProviderRequestFormGroup() {
		return new FormGroup<CreateCapacityProviderRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServerException {
	}
	export interface ServerExceptionFormProperties {
	}
	export function CreateServerExceptionFormGroup() {
		return new FormGroup<ServerExceptionFormProperties>({
		});

	}

	export interface ClientException {
	}
	export interface ClientExceptionFormProperties {
	}
	export function CreateClientExceptionFormGroup() {
		return new FormGroup<ClientExceptionFormProperties>({
		});

	}

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface CreateClusterResponse {

		/** A regional grouping of one or more container instances on which you can run task requests. Each account receives a default cluster the first time you use the Amazon ECS service, but you may also create other clusters. Clusters may contain more than one instance type simultaneously. */
		cluster?: Cluster;
	}
	export interface CreateClusterResponseFormProperties {
	}
	export function CreateCreateClusterResponseFormGroup() {
		return new FormGroup<CreateClusterResponseFormProperties>({
		});

	}


	/** A regional grouping of one or more container instances on which you can run task requests. Each account receives a default cluster the first time you use the Amazon ECS service, but you may also create other clusters. Clusters may contain more than one instance type simultaneously. */
	export interface Cluster {
		clusterArn?: string | null;
		clusterName?: string | null;
		status?: string | null;
		registeredContainerInstancesCount?: number | null;
		runningTasksCount?: number | null;
		pendingTasksCount?: number | null;
		activeServicesCount?: number | null;
		statistics?: Array<KeyValuePair>;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
		settings?: Array<ClusterSetting>;
		capacityProviders?: Array<string>;
		defaultCapacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
		attachments?: Array<Attachment>;
		attachmentsStatus?: string | null;
	}

	/** A regional grouping of one or more container instances on which you can run task requests. Each account receives a default cluster the first time you use the Amazon ECS service, but you may also create other clusters. Clusters may contain more than one instance type simultaneously. */
	export interface ClusterFormProperties {
		clusterArn: FormControl<string | null | undefined>,
		clusterName: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		registeredContainerInstancesCount: FormControl<number | null | undefined>,
		runningTasksCount: FormControl<number | null | undefined>,
		pendingTasksCount: FormControl<number | null | undefined>,
		activeServicesCount: FormControl<number | null | undefined>,
		attachmentsStatus: FormControl<string | null | undefined>,
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
			clusterArn: new FormControl<string | null | undefined>(undefined),
			clusterName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			registeredContainerInstancesCount: new FormControl<number | null | undefined>(undefined),
			runningTasksCount: new FormControl<number | null | undefined>(undefined),
			pendingTasksCount: new FormControl<number | null | undefined>(undefined),
			activeServicesCount: new FormControl<number | null | undefined>(undefined),
			attachmentsStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A key-value pair object. */
	export interface KeyValuePair {
		name?: string | null;
		value?: string | null;
	}

	/** A key-value pair object. */
	export interface KeyValuePairFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateKeyValuePairFormGroup() {
		return new FormGroup<KeyValuePairFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The settings to use when creating a cluster. This parameter is used to enable CloudWatch Container Insights for a cluster. */
	export interface ClusterSetting {
		name?: ClusterSettingName | null;
		value?: string | null;
	}

	/** The settings to use when creating a cluster. This parameter is used to enable CloudWatch Container Insights for a cluster. */
	export interface ClusterSettingFormProperties {
		name: FormControl<ClusterSettingName | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateClusterSettingFormGroup() {
		return new FormGroup<ClusterSettingFormProperties>({
			name: new FormControl<ClusterSettingName | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClusterSettingName { containerInsights = 0 }


	/** The details of a capacity provider strategy. */
	export interface CapacityProviderStrategyItem {

		/** Required */
		capacityProvider: string;

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		weight?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 100000
		 */
		base?: number | null;
	}

	/** The details of a capacity provider strategy. */
	export interface CapacityProviderStrategyItemFormProperties {

		/** Required */
		capacityProvider: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		weight: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100000
		 */
		base: FormControl<number | null | undefined>,
	}
	export function CreateCapacityProviderStrategyItemFormGroup() {
		return new FormGroup<CapacityProviderStrategyItemFormProperties>({
			capacityProvider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
			base: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100000)]),
		});

	}


	/** An object representing a container instance or task attachment. */
	export interface Attachment {
		id?: string | null;
		type?: string | null;
		status?: string | null;
		details?: Array<KeyValuePair>;
	}

	/** An object representing a container instance or task attachment. */
	export interface AttachmentFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentFormGroup() {
		return new FormGroup<AttachmentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateClusterRequest {
		clusterName?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
		settings?: Array<ClusterSetting>;
		capacityProviders?: Array<string>;
		defaultCapacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
	}
	export interface CreateClusterRequestFormProperties {
		clusterName: FormControl<string | null | undefined>,
	}
	export function CreateCreateClusterRequestFormGroup() {
		return new FormGroup<CreateClusterRequestFormProperties>({
			clusterName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateServiceResponse {

		/** Details on a service within a cluster */
		service?: Service;
	}
	export interface CreateServiceResponseFormProperties {
	}
	export function CreateCreateServiceResponseFormGroup() {
		return new FormGroup<CreateServiceResponseFormProperties>({
		});

	}


	/** Details on a service within a cluster */
	export interface Service {
		serviceArn?: string | null;
		serviceName?: string | null;
		clusterArn?: string | null;
		loadBalancers?: Array<LoadBalancer>;
		serviceRegistries?: Array<ServiceRegistry>;
		status?: string | null;
		desiredCount?: number | null;
		runningCount?: number | null;
		pendingCount?: number | null;
		launchType?: ServiceLaunchType | null;
		capacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
		platformVersion?: string | null;
		taskDefinition?: string | null;

		/** Optional deployment parameters that control how many tasks run during a deployment and the ordering of stopping and starting tasks. */
		deploymentConfiguration?: DeploymentConfiguration;
		taskSets?: Array<TaskSet>;
		deployments?: Array<Deployment>;
		roleArn?: string | null;
		events?: Array<ServiceEvent>;
		createdAt?: Date | null;
		placementConstraints?: Array<PlacementConstraint>;
		placementStrategy?: Array<PlacementStrategy>;

		/** An object representing the network configuration for a task or service. */
		networkConfiguration?: NetworkConfiguration;
		healthCheckGracePeriodSeconds?: number | null;
		schedulingStrategy?: ServiceSchedulingStrategy | null;

		/** The deployment controller to use for the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
		deploymentController?: DeploymentController;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
		createdBy?: string | null;
		enableECSManagedTags?: boolean | null;
		propagateTags?: ServicePropagateTags | null;
	}

	/** Details on a service within a cluster */
	export interface ServiceFormProperties {
		serviceArn: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
		clusterArn: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		desiredCount: FormControl<number | null | undefined>,
		runningCount: FormControl<number | null | undefined>,
		pendingCount: FormControl<number | null | undefined>,
		launchType: FormControl<ServiceLaunchType | null | undefined>,
		platformVersion: FormControl<string | null | undefined>,
		taskDefinition: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		healthCheckGracePeriodSeconds: FormControl<number | null | undefined>,
		schedulingStrategy: FormControl<ServiceSchedulingStrategy | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		enableECSManagedTags: FormControl<boolean | null | undefined>,
		propagateTags: FormControl<ServicePropagateTags | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			serviceArn: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			clusterArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			desiredCount: new FormControl<number | null | undefined>(undefined),
			runningCount: new FormControl<number | null | undefined>(undefined),
			pendingCount: new FormControl<number | null | undefined>(undefined),
			launchType: new FormControl<ServiceLaunchType | null | undefined>(undefined),
			platformVersion: new FormControl<string | null | undefined>(undefined),
			taskDefinition: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			healthCheckGracePeriodSeconds: new FormControl<number | null | undefined>(undefined),
			schedulingStrategy: new FormControl<ServiceSchedulingStrategy | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			enableECSManagedTags: new FormControl<boolean | null | undefined>(undefined),
			propagateTags: new FormControl<ServicePropagateTags | null | undefined>(undefined),
		});

	}


	/** <p>The load balancer configuration to use with a service or task set.</p> <p>For specific notes and restrictions regarding the use of load balancers with services and task sets, see the CreateService and CreateTaskSet actions.</p> */
	export interface LoadBalancer {
		targetGroupArn?: string | null;
		loadBalancerName?: string | null;
		containerName?: string | null;
		containerPort?: number | null;
	}

	/** <p>The load balancer configuration to use with a service or task set.</p> <p>For specific notes and restrictions regarding the use of load balancers with services and task sets, see the CreateService and CreateTaskSet actions.</p> */
	export interface LoadBalancerFormProperties {
		targetGroupArn: FormControl<string | null | undefined>,
		loadBalancerName: FormControl<string | null | undefined>,
		containerName: FormControl<string | null | undefined>,
		containerPort: FormControl<number | null | undefined>,
	}
	export function CreateLoadBalancerFormGroup() {
		return new FormGroup<LoadBalancerFormProperties>({
			targetGroupArn: new FormControl<string | null | undefined>(undefined),
			loadBalancerName: new FormControl<string | null | undefined>(undefined),
			containerName: new FormControl<string | null | undefined>(undefined),
			containerPort: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details of the service registry. */
	export interface ServiceRegistry {
		registryArn?: string | null;
		port?: number | null;
		containerName?: string | null;
		containerPort?: number | null;
	}

	/** Details of the service registry. */
	export interface ServiceRegistryFormProperties {
		registryArn: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
		containerName: FormControl<string | null | undefined>,
		containerPort: FormControl<number | null | undefined>,
	}
	export function CreateServiceRegistryFormGroup() {
		return new FormGroup<ServiceRegistryFormProperties>({
			registryArn: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			containerName: new FormControl<string | null | undefined>(undefined),
			containerPort: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ServiceLaunchType { EC2 = 0, FARGATE = 1 }


	/** Optional deployment parameters that control how many tasks run during a deployment and the ordering of stopping and starting tasks. */
	export interface DeploymentConfiguration {
		maximumPercent?: number | null;
		minimumHealthyPercent?: number | null;
	}

	/** Optional deployment parameters that control how many tasks run during a deployment and the ordering of stopping and starting tasks. */
	export interface DeploymentConfigurationFormProperties {
		maximumPercent: FormControl<number | null | undefined>,
		minimumHealthyPercent: FormControl<number | null | undefined>,
	}
	export function CreateDeploymentConfigurationFormGroup() {
		return new FormGroup<DeploymentConfigurationFormProperties>({
			maximumPercent: new FormControl<number | null | undefined>(undefined),
			minimumHealthyPercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a set of Amazon ECS tasks in either an AWS CodeDeploy or an <code>EXTERNAL</code> deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. */
	export interface TaskSet {
		id?: string | null;
		taskSetArn?: string | null;
		serviceArn?: string | null;
		clusterArn?: string | null;
		startedBy?: string | null;
		externalId?: string | null;
		status?: string | null;
		taskDefinition?: string | null;
		computedDesiredCount?: number | null;
		pendingCount?: number | null;
		runningCount?: number | null;
		createdAt?: Date | null;
		updatedAt?: Date | null;
		launchType?: ServiceLaunchType | null;
		capacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
		platformVersion?: string | null;

		/** An object representing the network configuration for a task or service. */
		networkConfiguration?: NetworkConfiguration;
		loadBalancers?: Array<LoadBalancer>;
		serviceRegistries?: Array<ServiceRegistry>;

		/** A floating-point percentage of the desired number of tasks to place and keep running in the task set. */
		scale?: Scale;
		stabilityStatus?: TaskSetStabilityStatus | null;
		stabilityStatusAt?: Date | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}

	/** Information about a set of Amazon ECS tasks in either an AWS CodeDeploy or an <code>EXTERNAL</code> deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. */
	export interface TaskSetFormProperties {
		id: FormControl<string | null | undefined>,
		taskSetArn: FormControl<string | null | undefined>,
		serviceArn: FormControl<string | null | undefined>,
		clusterArn: FormControl<string | null | undefined>,
		startedBy: FormControl<string | null | undefined>,
		externalId: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		taskDefinition: FormControl<string | null | undefined>,
		computedDesiredCount: FormControl<number | null | undefined>,
		pendingCount: FormControl<number | null | undefined>,
		runningCount: FormControl<number | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		launchType: FormControl<ServiceLaunchType | null | undefined>,
		platformVersion: FormControl<string | null | undefined>,
		stabilityStatus: FormControl<TaskSetStabilityStatus | null | undefined>,
		stabilityStatusAt: FormControl<Date | null | undefined>,
	}
	export function CreateTaskSetFormGroup() {
		return new FormGroup<TaskSetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			taskSetArn: new FormControl<string | null | undefined>(undefined),
			serviceArn: new FormControl<string | null | undefined>(undefined),
			clusterArn: new FormControl<string | null | undefined>(undefined),
			startedBy: new FormControl<string | null | undefined>(undefined),
			externalId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			taskDefinition: new FormControl<string | null | undefined>(undefined),
			computedDesiredCount: new FormControl<number | null | undefined>(undefined),
			pendingCount: new FormControl<number | null | undefined>(undefined),
			runningCount: new FormControl<number | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			launchType: new FormControl<ServiceLaunchType | null | undefined>(undefined),
			platformVersion: new FormControl<string | null | undefined>(undefined),
			stabilityStatus: new FormControl<TaskSetStabilityStatus | null | undefined>(undefined),
			stabilityStatusAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** An object representing the network configuration for a task or service. */
	export interface NetworkConfiguration {

		/** An object representing the networking details for a task or service. */
		awsvpcConfiguration?: AwsVpcConfiguration;
	}

	/** An object representing the network configuration for a task or service. */
	export interface NetworkConfigurationFormProperties {
	}
	export function CreateNetworkConfigurationFormGroup() {
		return new FormGroup<NetworkConfigurationFormProperties>({
		});

	}


	/** An object representing the networking details for a task or service. */
	export interface AwsVpcConfiguration {

		/** Required */
		subnets: Array<string>;
		securityGroups?: Array<string>;
		assignPublicIp?: ManagedScalingStatus | null;
	}

	/** An object representing the networking details for a task or service. */
	export interface AwsVpcConfigurationFormProperties {
		assignPublicIp: FormControl<ManagedScalingStatus | null | undefined>,
	}
	export function CreateAwsVpcConfigurationFormGroup() {
		return new FormGroup<AwsVpcConfigurationFormProperties>({
			assignPublicIp: new FormControl<ManagedScalingStatus | null | undefined>(undefined),
		});

	}


	/** A floating-point percentage of the desired number of tasks to place and keep running in the task set. */
	export interface Scale {
		value?: number | null;
		unit?: ScaleUnit | null;
	}

	/** A floating-point percentage of the desired number of tasks to place and keep running in the task set. */
	export interface ScaleFormProperties {
		value: FormControl<number | null | undefined>,
		unit: FormControl<ScaleUnit | null | undefined>,
	}
	export function CreateScaleFormGroup() {
		return new FormGroup<ScaleFormProperties>({
			value: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<ScaleUnit | null | undefined>(undefined),
		});

	}

	export enum ScaleUnit { PERCENT = 0 }

	export enum TaskSetStabilityStatus { STEADY_STATE = 0, STABILIZING = 1 }


	/** The details of an Amazon ECS service deployment. This is used only when a service uses the <code>ECS</code> deployment controller type. */
	export interface Deployment {
		id?: string | null;
		status?: string | null;
		taskDefinition?: string | null;
		desiredCount?: number | null;
		pendingCount?: number | null;
		runningCount?: number | null;
		createdAt?: Date | null;
		updatedAt?: Date | null;
		capacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
		launchType?: ServiceLaunchType | null;
		platformVersion?: string | null;

		/** An object representing the network configuration for a task or service. */
		networkConfiguration?: NetworkConfiguration;
	}

	/** The details of an Amazon ECS service deployment. This is used only when a service uses the <code>ECS</code> deployment controller type. */
	export interface DeploymentFormProperties {
		id: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		taskDefinition: FormControl<string | null | undefined>,
		desiredCount: FormControl<number | null | undefined>,
		pendingCount: FormControl<number | null | undefined>,
		runningCount: FormControl<number | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		launchType: FormControl<ServiceLaunchType | null | undefined>,
		platformVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentFormGroup() {
		return new FormGroup<DeploymentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			taskDefinition: new FormControl<string | null | undefined>(undefined),
			desiredCount: new FormControl<number | null | undefined>(undefined),
			pendingCount: new FormControl<number | null | undefined>(undefined),
			runningCount: new FormControl<number | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			launchType: new FormControl<ServiceLaunchType | null | undefined>(undefined),
			platformVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details on an event associated with a service. */
	export interface ServiceEvent {
		id?: string | null;
		createdAt?: Date | null;
		message?: string | null;
	}

	/** Details on an event associated with a service. */
	export interface ServiceEventFormProperties {
		id: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateServiceEventFormGroup() {
		return new FormGroup<ServiceEventFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>An object representing a constraint on task placement. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>If you are using the Fargate launch type, task placement constraints are not supported.</p> </note> */
	export interface PlacementConstraint {
		type?: PlacementConstraintType | null;
		expression?: string | null;
	}

	/** <p>An object representing a constraint on task placement. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>If you are using the Fargate launch type, task placement constraints are not supported.</p> </note> */
	export interface PlacementConstraintFormProperties {
		type: FormControl<PlacementConstraintType | null | undefined>,
		expression: FormControl<string | null | undefined>,
	}
	export function CreatePlacementConstraintFormGroup() {
		return new FormGroup<PlacementConstraintFormProperties>({
			type: new FormControl<PlacementConstraintType | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PlacementConstraintType { distinctInstance = 0, memberOf = 1 }


	/** The task placement strategy for a task or service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface PlacementStrategy {
		type?: PlacementStrategyType | null;
		field?: string | null;
	}

	/** The task placement strategy for a task or service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface PlacementStrategyFormProperties {
		type: FormControl<PlacementStrategyType | null | undefined>,
		field: FormControl<string | null | undefined>,
	}
	export function CreatePlacementStrategyFormGroup() {
		return new FormGroup<PlacementStrategyFormProperties>({
			type: new FormControl<PlacementStrategyType | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PlacementStrategyType { random = 0, spread = 1, binpack = 2 }

	export enum ServiceSchedulingStrategy { REPLICA = 0, DAEMON = 1 }


	/** The deployment controller to use for the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface DeploymentController {

		/** Required */
		type: DeploymentControllerType;
	}

	/** The deployment controller to use for the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface DeploymentControllerFormProperties {

		/** Required */
		type: FormControl<DeploymentControllerType | null | undefined>,
	}
	export function CreateDeploymentControllerFormGroup() {
		return new FormGroup<DeploymentControllerFormProperties>({
			type: new FormControl<DeploymentControllerType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DeploymentControllerType { ECS = 0, CODE_DEPLOY = 1, EXTERNAL = 2 }

	export enum ServicePropagateTags { TASK_DEFINITION = 0, SERVICE = 1 }

	export interface CreateServiceRequest {
		cluster?: string | null;

		/** Required */
		serviceName: string;
		taskDefinition?: string | null;
		loadBalancers?: Array<LoadBalancer>;
		serviceRegistries?: Array<ServiceRegistry>;
		desiredCount?: number | null;
		clientToken?: string | null;
		launchType?: ServiceLaunchType | null;
		capacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
		platformVersion?: string | null;
		role?: string | null;

		/** Optional deployment parameters that control how many tasks run during a deployment and the ordering of stopping and starting tasks. */
		deploymentConfiguration?: DeploymentConfiguration;
		placementConstraints?: Array<PlacementConstraint>;
		placementStrategy?: Array<PlacementStrategy>;

		/** An object representing the network configuration for a task or service. */
		networkConfiguration?: NetworkConfiguration;
		healthCheckGracePeriodSeconds?: number | null;
		schedulingStrategy?: ServiceSchedulingStrategy | null;

		/** The deployment controller to use for the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
		deploymentController?: DeploymentController;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
		enableECSManagedTags?: boolean | null;
		propagateTags?: ServicePropagateTags | null;
	}
	export interface CreateServiceRequestFormProperties {
		cluster: FormControl<string | null | undefined>,

		/** Required */
		serviceName: FormControl<string | null | undefined>,
		taskDefinition: FormControl<string | null | undefined>,
		desiredCount: FormControl<number | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		launchType: FormControl<ServiceLaunchType | null | undefined>,
		platformVersion: FormControl<string | null | undefined>,
		role: FormControl<string | null | undefined>,
		healthCheckGracePeriodSeconds: FormControl<number | null | undefined>,
		schedulingStrategy: FormControl<ServiceSchedulingStrategy | null | undefined>,
		enableECSManagedTags: FormControl<boolean | null | undefined>,
		propagateTags: FormControl<ServicePropagateTags | null | undefined>,
	}
	export function CreateCreateServiceRequestFormGroup() {
		return new FormGroup<CreateServiceRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			taskDefinition: new FormControl<string | null | undefined>(undefined),
			desiredCount: new FormControl<number | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			launchType: new FormControl<ServiceLaunchType | null | undefined>(undefined),
			platformVersion: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
			healthCheckGracePeriodSeconds: new FormControl<number | null | undefined>(undefined),
			schedulingStrategy: new FormControl<ServiceSchedulingStrategy | null | undefined>(undefined),
			enableECSManagedTags: new FormControl<boolean | null | undefined>(undefined),
			propagateTags: new FormControl<ServicePropagateTags | null | undefined>(undefined),
		});

	}

	export interface ClusterNotFoundException {
	}
	export interface ClusterNotFoundExceptionFormProperties {
	}
	export function CreateClusterNotFoundExceptionFormGroup() {
		return new FormGroup<ClusterNotFoundExceptionFormProperties>({
		});

	}

	export interface UnsupportedFeatureException {
	}
	export interface UnsupportedFeatureExceptionFormProperties {
	}
	export function CreateUnsupportedFeatureExceptionFormGroup() {
		return new FormGroup<UnsupportedFeatureExceptionFormProperties>({
		});

	}

	export interface PlatformUnknownException {
	}
	export interface PlatformUnknownExceptionFormProperties {
	}
	export function CreatePlatformUnknownExceptionFormGroup() {
		return new FormGroup<PlatformUnknownExceptionFormProperties>({
		});

	}

	export interface PlatformTaskDefinitionIncompatibilityException {
	}
	export interface PlatformTaskDefinitionIncompatibilityExceptionFormProperties {
	}
	export function CreatePlatformTaskDefinitionIncompatibilityExceptionFormGroup() {
		return new FormGroup<PlatformTaskDefinitionIncompatibilityExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface CreateTaskSetResponse {

		/** Information about a set of Amazon ECS tasks in either an AWS CodeDeploy or an <code>EXTERNAL</code> deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. */
		taskSet?: TaskSet;
	}
	export interface CreateTaskSetResponseFormProperties {
	}
	export function CreateCreateTaskSetResponseFormGroup() {
		return new FormGroup<CreateTaskSetResponseFormProperties>({
		});

	}

	export interface CreateTaskSetRequest {

		/** Required */
		service: string;

		/** Required */
		cluster: string;
		externalId?: string | null;

		/** Required */
		taskDefinition: string;

		/** An object representing the network configuration for a task or service. */
		networkConfiguration?: NetworkConfiguration;
		loadBalancers?: Array<LoadBalancer>;
		serviceRegistries?: Array<ServiceRegistry>;
		launchType?: ServiceLaunchType | null;
		capacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
		platformVersion?: string | null;

		/** A floating-point percentage of the desired number of tasks to place and keep running in the task set. */
		scale?: Scale;
		clientToken?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}
	export interface CreateTaskSetRequestFormProperties {

		/** Required */
		service: FormControl<string | null | undefined>,

		/** Required */
		cluster: FormControl<string | null | undefined>,
		externalId: FormControl<string | null | undefined>,

		/** Required */
		taskDefinition: FormControl<string | null | undefined>,
		launchType: FormControl<ServiceLaunchType | null | undefined>,
		platformVersion: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateTaskSetRequestFormGroup() {
		return new FormGroup<CreateTaskSetRequestFormProperties>({
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cluster: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			externalId: new FormControl<string | null | undefined>(undefined),
			taskDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			launchType: new FormControl<ServiceLaunchType | null | undefined>(undefined),
			platformVersion: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceNotFoundException {
	}
	export interface ServiceNotFoundExceptionFormProperties {
	}
	export function CreateServiceNotFoundExceptionFormGroup() {
		return new FormGroup<ServiceNotFoundExceptionFormProperties>({
		});

	}

	export interface ServiceNotActiveException {
	}
	export interface ServiceNotActiveExceptionFormProperties {
	}
	export function CreateServiceNotActiveExceptionFormGroup() {
		return new FormGroup<ServiceNotActiveExceptionFormProperties>({
		});

	}

	export interface DeleteAccountSettingResponse {

		/** The current account setting for a resource. */
		setting?: Setting;
	}
	export interface DeleteAccountSettingResponseFormProperties {
	}
	export function CreateDeleteAccountSettingResponseFormGroup() {
		return new FormGroup<DeleteAccountSettingResponseFormProperties>({
		});

	}


	/** The current account setting for a resource. */
	export interface Setting {
		name?: SettingName | null;
		value?: string | null;
		principalArn?: string | null;
	}

	/** The current account setting for a resource. */
	export interface SettingFormProperties {
		name: FormControl<SettingName | null | undefined>,
		value: FormControl<string | null | undefined>,
		principalArn: FormControl<string | null | undefined>,
	}
	export function CreateSettingFormGroup() {
		return new FormGroup<SettingFormProperties>({
			name: new FormControl<SettingName | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			principalArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SettingName { serviceLongArnFormat = 0, taskLongArnFormat = 1, containerInstanceLongArnFormat = 2, awsvpcTrunking = 3, containerInsights = 4 }

	export interface DeleteAccountSettingRequest {

		/** Required */
		name: SettingName;
		principalArn?: string | null;
	}
	export interface DeleteAccountSettingRequestFormProperties {

		/** Required */
		name: FormControl<SettingName | null | undefined>,
		principalArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAccountSettingRequestFormGroup() {
		return new FormGroup<DeleteAccountSettingRequestFormProperties>({
			name: new FormControl<SettingName | null | undefined>(undefined, [Validators.required]),
			principalArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAttributesResponse {
		attributes?: Array<Attribute>;
	}
	export interface DeleteAttributesResponseFormProperties {
	}
	export function CreateDeleteAttributesResponseFormGroup() {
		return new FormGroup<DeleteAttributesResponseFormProperties>({
		});

	}


	/** An attribute is a name-value pair associated with an Amazon ECS object. Attributes enable you to extend the Amazon ECS data model by adding custom metadata to your resources. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface Attribute {

		/** Required */
		name: string;
		value?: string | null;
		targetType?: AttributeTargetType | null;
		targetId?: string | null;
	}

	/** An attribute is a name-value pair associated with an Amazon ECS object. Attributes enable you to extend the Amazon ECS data model by adding custom metadata to your resources. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface AttributeFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
		targetType: FormControl<AttributeTargetType | null | undefined>,
		targetId: FormControl<string | null | undefined>,
	}
	export function CreateAttributeFormGroup() {
		return new FormGroup<AttributeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
			targetType: new FormControl<AttributeTargetType | null | undefined>(undefined),
			targetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AttributeTargetType { container_instance = 0 }

	export interface DeleteAttributesRequest {
		cluster?: string | null;

		/** Required */
		attributes: Array<Attribute>;
	}
	export interface DeleteAttributesRequestFormProperties {
		cluster: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAttributesRequestFormGroup() {
		return new FormGroup<DeleteAttributesRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TargetNotFoundException {
	}
	export interface TargetNotFoundExceptionFormProperties {
	}
	export function CreateTargetNotFoundExceptionFormGroup() {
		return new FormGroup<TargetNotFoundExceptionFormProperties>({
		});

	}

	export interface DeleteClusterResponse {

		/** A regional grouping of one or more container instances on which you can run task requests. Each account receives a default cluster the first time you use the Amazon ECS service, but you may also create other clusters. Clusters may contain more than one instance type simultaneously. */
		cluster?: Cluster;
	}
	export interface DeleteClusterResponseFormProperties {
	}
	export function CreateDeleteClusterResponseFormGroup() {
		return new FormGroup<DeleteClusterResponseFormProperties>({
		});

	}

	export interface DeleteClusterRequest {

		/** Required */
		cluster: string;
	}
	export interface DeleteClusterRequestFormProperties {

		/** Required */
		cluster: FormControl<string | null | undefined>,
	}
	export function CreateDeleteClusterRequestFormGroup() {
		return new FormGroup<DeleteClusterRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ClusterContainsContainerInstancesException {
	}
	export interface ClusterContainsContainerInstancesExceptionFormProperties {
	}
	export function CreateClusterContainsContainerInstancesExceptionFormGroup() {
		return new FormGroup<ClusterContainsContainerInstancesExceptionFormProperties>({
		});

	}

	export interface ClusterContainsServicesException {
	}
	export interface ClusterContainsServicesExceptionFormProperties {
	}
	export function CreateClusterContainsServicesExceptionFormGroup() {
		return new FormGroup<ClusterContainsServicesExceptionFormProperties>({
		});

	}

	export interface ClusterContainsTasksException {
	}
	export interface ClusterContainsTasksExceptionFormProperties {
	}
	export function CreateClusterContainsTasksExceptionFormGroup() {
		return new FormGroup<ClusterContainsTasksExceptionFormProperties>({
		});

	}

	export interface UpdateInProgressException {
	}
	export interface UpdateInProgressExceptionFormProperties {
	}
	export function CreateUpdateInProgressExceptionFormGroup() {
		return new FormGroup<UpdateInProgressExceptionFormProperties>({
		});

	}

	export interface DeleteServiceResponse {

		/** Details on a service within a cluster */
		service?: Service;
	}
	export interface DeleteServiceResponseFormProperties {
	}
	export function CreateDeleteServiceResponseFormGroup() {
		return new FormGroup<DeleteServiceResponseFormProperties>({
		});

	}

	export interface DeleteServiceRequest {
		cluster?: string | null;

		/** Required */
		service: string;
		force?: boolean | null;
	}
	export interface DeleteServiceRequestFormProperties {
		cluster: FormControl<string | null | undefined>,

		/** Required */
		service: FormControl<string | null | undefined>,
		force: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteServiceRequestFormGroup() {
		return new FormGroup<DeleteServiceRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			force: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteTaskSetResponse {

		/** Information about a set of Amazon ECS tasks in either an AWS CodeDeploy or an <code>EXTERNAL</code> deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. */
		taskSet?: TaskSet;
	}
	export interface DeleteTaskSetResponseFormProperties {
	}
	export function CreateDeleteTaskSetResponseFormGroup() {
		return new FormGroup<DeleteTaskSetResponseFormProperties>({
		});

	}

	export interface DeleteTaskSetRequest {

		/** Required */
		cluster: string;

		/** Required */
		service: string;

		/** Required */
		taskSet: string;
		force?: boolean | null;
	}
	export interface DeleteTaskSetRequestFormProperties {

		/** Required */
		cluster: FormControl<string | null | undefined>,

		/** Required */
		service: FormControl<string | null | undefined>,

		/** Required */
		taskSet: FormControl<string | null | undefined>,
		force: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteTaskSetRequestFormGroup() {
		return new FormGroup<DeleteTaskSetRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			taskSet: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			force: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TaskSetNotFoundException {
	}
	export interface TaskSetNotFoundExceptionFormProperties {
	}
	export function CreateTaskSetNotFoundExceptionFormGroup() {
		return new FormGroup<TaskSetNotFoundExceptionFormProperties>({
		});

	}

	export interface DeregisterContainerInstanceResponse {

		/** An EC2 instance that is running the Amazon ECS agent and has been registered with a cluster. */
		containerInstance?: ContainerInstance;
	}
	export interface DeregisterContainerInstanceResponseFormProperties {
	}
	export function CreateDeregisterContainerInstanceResponseFormGroup() {
		return new FormGroup<DeregisterContainerInstanceResponseFormProperties>({
		});

	}


	/** An EC2 instance that is running the Amazon ECS agent and has been registered with a cluster. */
	export interface ContainerInstance {
		containerInstanceArn?: string | null;
		ec2InstanceId?: string | null;
		capacityProviderName?: string | null;
		version?: number | null;

		/** The Docker and Amazon ECS container agent version information about a container instance. */
		versionInfo?: VersionInfo;
		remainingResources?: Array<Resource>;
		registeredResources?: Array<Resource>;
		status?: string | null;
		statusReason?: string | null;
		agentConnected?: boolean | null;
		runningTasksCount?: number | null;
		pendingTasksCount?: number | null;
		agentUpdateStatus?: ContainerInstanceAgentUpdateStatus | null;
		attributes?: Array<Attribute>;
		registeredAt?: Date | null;
		attachments?: Array<Attachment>;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}

	/** An EC2 instance that is running the Amazon ECS agent and has been registered with a cluster. */
	export interface ContainerInstanceFormProperties {
		containerInstanceArn: FormControl<string | null | undefined>,
		ec2InstanceId: FormControl<string | null | undefined>,
		capacityProviderName: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		agentConnected: FormControl<boolean | null | undefined>,
		runningTasksCount: FormControl<number | null | undefined>,
		pendingTasksCount: FormControl<number | null | undefined>,
		agentUpdateStatus: FormControl<ContainerInstanceAgentUpdateStatus | null | undefined>,
		registeredAt: FormControl<Date | null | undefined>,
	}
	export function CreateContainerInstanceFormGroup() {
		return new FormGroup<ContainerInstanceFormProperties>({
			containerInstanceArn: new FormControl<string | null | undefined>(undefined),
			ec2InstanceId: new FormControl<string | null | undefined>(undefined),
			capacityProviderName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
			agentConnected: new FormControl<boolean | null | undefined>(undefined),
			runningTasksCount: new FormControl<number | null | undefined>(undefined),
			pendingTasksCount: new FormControl<number | null | undefined>(undefined),
			agentUpdateStatus: new FormControl<ContainerInstanceAgentUpdateStatus | null | undefined>(undefined),
			registeredAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The Docker and Amazon ECS container agent version information about a container instance. */
	export interface VersionInfo {
		agentVersion?: string | null;
		agentHash?: string | null;
		dockerVersion?: string | null;
	}

	/** The Docker and Amazon ECS container agent version information about a container instance. */
	export interface VersionInfoFormProperties {
		agentVersion: FormControl<string | null | undefined>,
		agentHash: FormControl<string | null | undefined>,
		dockerVersion: FormControl<string | null | undefined>,
	}
	export function CreateVersionInfoFormGroup() {
		return new FormGroup<VersionInfoFormProperties>({
			agentVersion: new FormControl<string | null | undefined>(undefined),
			agentHash: new FormControl<string | null | undefined>(undefined),
			dockerVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the resources available for a container instance. */
	export interface Resource {
		name?: string | null;
		type?: string | null;
		doubleValue?: number | null;
		longValue?: number | null;
		integerValue?: number | null;
		stringSetValue?: Array<string>;
	}

	/** Describes the resources available for a container instance. */
	export interface ResourceFormProperties {
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		doubleValue: FormControl<number | null | undefined>,
		longValue: FormControl<number | null | undefined>,
		integerValue: FormControl<number | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			longValue: new FormControl<number | null | undefined>(undefined),
			integerValue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ContainerInstanceAgentUpdateStatus { PENDING = 0, STAGING = 1, STAGED = 2, UPDATING = 3, UPDATED = 4, FAILED = 5 }

	export interface DeregisterContainerInstanceRequest {
		cluster?: string | null;

		/** Required */
		containerInstance: string;
		force?: boolean | null;
	}
	export interface DeregisterContainerInstanceRequestFormProperties {
		cluster: FormControl<string | null | undefined>,

		/** Required */
		containerInstance: FormControl<string | null | undefined>,
		force: FormControl<boolean | null | undefined>,
	}
	export function CreateDeregisterContainerInstanceRequestFormGroup() {
		return new FormGroup<DeregisterContainerInstanceRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			containerInstance: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			force: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeregisterTaskDefinitionResponse {

		/** The details of a task definition which describes the container and volume definitions of an Amazon Elastic Container Service task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task. */
		taskDefinition?: TaskDefinition;
	}
	export interface DeregisterTaskDefinitionResponseFormProperties {
	}
	export function CreateDeregisterTaskDefinitionResponseFormGroup() {
		return new FormGroup<DeregisterTaskDefinitionResponseFormProperties>({
		});

	}


	/** The details of a task definition which describes the container and volume definitions of an Amazon Elastic Container Service task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task. */
	export interface TaskDefinition {
		taskDefinitionArn?: string | null;
		containerDefinitions?: Array<ContainerDefinition>;
		family?: string | null;
		taskRoleArn?: string | null;
		executionRoleArn?: string | null;
		networkMode?: TaskDefinitionNetworkMode | null;
		revision?: number | null;
		volumes?: Array<Volume>;
		status?: TaskDefinitionStatus | null;
		requiresAttributes?: Array<Attribute>;
		placementConstraints?: Array<TaskDefinitionPlacementConstraint>;
		compatibilities?: Array<Compatibility>;
		requiresCompatibilities?: Array<Compatibility>;
		cpu?: string | null;
		memory?: string | null;
		inferenceAccelerators?: Array<InferenceAccelerator>;
		pidMode?: TaskDefinitionPidMode | null;
		ipcMode?: TaskDefinitionIpcMode | null;

		/** <p>The configuration details for the App Mesh proxy.</p> <p>For tasks using the EC2 launch type, the container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the <code>ecs-init</code> package to enable a proxy configuration. If your container instances are launched from the Amazon ECS-optimized AMI version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>For tasks using the Fargate launch type, the task or service requires platform version 1.3.0 or later.</p> */
		proxyConfiguration?: ProxyConfiguration;
	}

	/** The details of a task definition which describes the container and volume definitions of an Amazon Elastic Container Service task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task. */
	export interface TaskDefinitionFormProperties {
		taskDefinitionArn: FormControl<string | null | undefined>,
		family: FormControl<string | null | undefined>,
		taskRoleArn: FormControl<string | null | undefined>,
		executionRoleArn: FormControl<string | null | undefined>,
		networkMode: FormControl<TaskDefinitionNetworkMode | null | undefined>,
		revision: FormControl<number | null | undefined>,
		status: FormControl<TaskDefinitionStatus | null | undefined>,
		cpu: FormControl<string | null | undefined>,
		memory: FormControl<string | null | undefined>,
		pidMode: FormControl<TaskDefinitionPidMode | null | undefined>,
		ipcMode: FormControl<TaskDefinitionIpcMode | null | undefined>,
	}
	export function CreateTaskDefinitionFormGroup() {
		return new FormGroup<TaskDefinitionFormProperties>({
			taskDefinitionArn: new FormControl<string | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			taskRoleArn: new FormControl<string | null | undefined>(undefined),
			executionRoleArn: new FormControl<string | null | undefined>(undefined),
			networkMode: new FormControl<TaskDefinitionNetworkMode | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<TaskDefinitionStatus | null | undefined>(undefined),
			cpu: new FormControl<string | null | undefined>(undefined),
			memory: new FormControl<string | null | undefined>(undefined),
			pidMode: new FormControl<TaskDefinitionPidMode | null | undefined>(undefined),
			ipcMode: new FormControl<TaskDefinitionIpcMode | null | undefined>(undefined),
		});

	}


	/** Container definitions are used in task definitions to describe the different containers that are launched as part of a task. */
	export interface ContainerDefinition {
		name?: string | null;
		image?: string | null;

		/** The repository credentials for private registry authentication. */
		repositoryCredentials?: RepositoryCredentials;
		cpu?: number | null;
		memory?: number | null;
		memoryReservation?: number | null;
		links?: Array<string>;
		portMappings?: Array<PortMapping>;
		essential?: boolean | null;
		entryPoint?: Array<string>;
		command?: Array<string>;
		environment?: Array<KeyValuePair>;
		environmentFiles?: Array<EnvironmentFile>;
		mountPoints?: Array<MountPoint>;
		volumesFrom?: Array<VolumeFrom>;

		/** Linux-specific options that are applied to the container, such as Linux <a>KernelCapabilities</a>. */
		linuxParameters?: LinuxParameters;
		secrets?: Array<Secret>;
		dependsOn?: Array<ContainerDependency>;
		startTimeout?: number | null;
		stopTimeout?: number | null;
		hostname?: string | null;
		user?: string | null;
		workingDirectory?: string | null;
		disableNetworking?: boolean | null;
		privileged?: boolean | null;
		readonlyRootFilesystem?: boolean | null;
		dnsServers?: Array<string>;
		dnsSearchDomains?: Array<string>;
		extraHosts?: Array<HostEntry>;
		dockerSecurityOptions?: Array<string>;
		interactive?: boolean | null;
		pseudoTerminal?: boolean | null;
		dockerLabels?: DockerLabelsMap;
		ulimits?: Array<Ulimit>;

		/** <p>The log configuration specification for the container.</p> <p>This parameter maps to <code>LogConfig</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/commandline/run/"> <code>docker run</code> </a>. By default, containers use the same logging driver that the Docker daemon uses; however the container may use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options). For more information on the options for different supported log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure logging drivers</a> in the Docker documentation.</p> <p>The following should be noted when specifying a log configuration for your containers:</p> <ul> <li> <p>Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon (shown in the valid values below). Additional log drivers may be available in future releases of the Amazon ECS container agent.</p> </li> <li> <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.</p> </li> <li> <p>For tasks using the EC2 launch type, the Amazon ECS container agent running on a container instance must register the logging drivers available on that instance with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that instance can use these log configuration options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p>For tasks using the Fargate launch type, because you do not have access to the underlying infrastructure your tasks are hosted on, any additional software needed will have to be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.</p> </li> </ul> */
		logConfiguration?: LogConfiguration;

		/** <p>An object representing a container health check. Health check parameters that are specified in a container definition override any Docker health checks that exist in the container image (such as those specified in a parent image or from the image's Dockerfile).</p> <p>You can view the health status of both individual containers and a task with the DescribeTasks API operation or when viewing the task details in the console.</p> <p>The following describes the possible <code>healthStatus</code> values for a container:</p> <ul> <li> <p> <code>HEALTHY</code>-The container health check has passed successfully.</p> </li> <li> <p> <code>UNHEALTHY</code>-The container health check has failed.</p> </li> <li> <p> <code>UNKNOWN</code>-The container health check is being evaluated or there is no container health check defined.</p> </li> </ul> <p>The following describes the possible <code>healthStatus</code> values for a task. The container health check status of nonessential containers do not have an effect on the health status of a task.</p> <ul> <li> <p> <code>HEALTHY</code>-All essential containers within the task have passed their health checks.</p> </li> <li> <p> <code>UNHEALTHY</code>-One or more essential containers have failed their health check.</p> </li> <li> <p> <code>UNKNOWN</code>-The essential containers within the task are still having their health checks evaluated or there are no container health checks defined.</p> </li> </ul> <p>If a task is run manually, and not as part of a service, the task will continue its lifecycle regardless of its health status. For tasks that are part of a service, if the task reports as unhealthy then the task will be stopped and the service scheduler will replace it.</p> <p>The following are notes about container health check support:</p> <ul> <li> <p>Container health checks require version 1.17.0 or greater of the Amazon ECS container agent. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS Container Agent</a>.</p> </li> <li> <p>Container health checks are supported for Fargate tasks if you are using platform version 1.1.0 or greater. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">AWS Fargate Platform Versions</a>.</p> </li> <li> <p>Container health checks are not supported for tasks that are part of a service that is configured to use a Classic Load Balancer.</p> </li> </ul> */
		healthCheck?: HealthCheck;
		systemControls?: Array<SystemControl>;
		resourceRequirements?: Array<ResourceRequirement>;

		/** The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html">Custom Log Routing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
		firelensConfiguration?: FirelensConfiguration;
	}

	/** Container definitions are used in task definitions to describe the different containers that are launched as part of a task. */
	export interface ContainerDefinitionFormProperties {
		name: FormControl<string | null | undefined>,
		image: FormControl<string | null | undefined>,
		cpu: FormControl<number | null | undefined>,
		memory: FormControl<number | null | undefined>,
		memoryReservation: FormControl<number | null | undefined>,
		essential: FormControl<boolean | null | undefined>,
		startTimeout: FormControl<number | null | undefined>,
		stopTimeout: FormControl<number | null | undefined>,
		hostname: FormControl<string | null | undefined>,
		user: FormControl<string | null | undefined>,
		workingDirectory: FormControl<string | null | undefined>,
		disableNetworking: FormControl<boolean | null | undefined>,
		privileged: FormControl<boolean | null | undefined>,
		readonlyRootFilesystem: FormControl<boolean | null | undefined>,
		interactive: FormControl<boolean | null | undefined>,
		pseudoTerminal: FormControl<boolean | null | undefined>,
	}
	export function CreateContainerDefinitionFormGroup() {
		return new FormGroup<ContainerDefinitionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			cpu: new FormControl<number | null | undefined>(undefined),
			memory: new FormControl<number | null | undefined>(undefined),
			memoryReservation: new FormControl<number | null | undefined>(undefined),
			essential: new FormControl<boolean | null | undefined>(undefined),
			startTimeout: new FormControl<number | null | undefined>(undefined),
			stopTimeout: new FormControl<number | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
			workingDirectory: new FormControl<string | null | undefined>(undefined),
			disableNetworking: new FormControl<boolean | null | undefined>(undefined),
			privileged: new FormControl<boolean | null | undefined>(undefined),
			readonlyRootFilesystem: new FormControl<boolean | null | undefined>(undefined),
			interactive: new FormControl<boolean | null | undefined>(undefined),
			pseudoTerminal: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The repository credentials for private registry authentication. */
	export interface RepositoryCredentials {

		/** Required */
		credentialsParameter: string;
	}

	/** The repository credentials for private registry authentication. */
	export interface RepositoryCredentialsFormProperties {

		/** Required */
		credentialsParameter: FormControl<string | null | undefined>,
	}
	export function CreateRepositoryCredentialsFormGroup() {
		return new FormGroup<RepositoryCredentialsFormProperties>({
			credentialsParameter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Port mappings allow containers to access ports on the host container instance to send or receive traffic. Port mappings are specified as part of the container definition.</p> <p>If you are using containers in a task with the <code>awsvpc</code> or <code>host</code> network mode, exposed ports should be specified using <code>containerPort</code>. The <code>hostPort</code> can be left blank or it must be the same value as the <code>containerPort</code>.</p> <p>After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.</p> */
	export interface PortMapping {
		containerPort?: number | null;
		hostPort?: number | null;
		protocol?: PortMappingProtocol | null;
	}

	/** <p>Port mappings allow containers to access ports on the host container instance to send or receive traffic. Port mappings are specified as part of the container definition.</p> <p>If you are using containers in a task with the <code>awsvpc</code> or <code>host</code> network mode, exposed ports should be specified using <code>containerPort</code>. The <code>hostPort</code> can be left blank or it must be the same value as the <code>containerPort</code>.</p> <p>After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.</p> */
	export interface PortMappingFormProperties {
		containerPort: FormControl<number | null | undefined>,
		hostPort: FormControl<number | null | undefined>,
		protocol: FormControl<PortMappingProtocol | null | undefined>,
	}
	export function CreatePortMappingFormGroup() {
		return new FormGroup<PortMappingFormProperties>({
			containerPort: new FormControl<number | null | undefined>(undefined),
			hostPort: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<PortMappingProtocol | null | undefined>(undefined),
		});

	}

	export enum PortMappingProtocol { tcp = 0, udp = 1 }


	/** <p>A list of files containing the environment variables to pass to a container. You can specify up to ten environment files. The file must have a <code>.env</code> file extension. Each line in an environment file should contain an environment variable in <code>VARIABLE=VALUE</code> format. Lines beginning with <code>#</code> are treated as comments and are ignored. For more information on the environment variable file syntax, see <a href="https://docs.docker.com/compose/env-file/">Declare default environment variables in file</a>.</p> <p>If there are environment variables specified using the <code>environment</code> parameter in a container definition, they take precedence over the variables contained within an environment file. If multiple environment files are specified that contain the same variable, they are processed from the top down. It is recommended to use unique variable names. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html">Specifying Environment Variables</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>This field is not valid for containers in tasks using the Fargate launch type.</p> */
	export interface EnvironmentFile {

		/** Required */
		value: string;

		/** Required */
		type: EnvironmentFileType;
	}

	/** <p>A list of files containing the environment variables to pass to a container. You can specify up to ten environment files. The file must have a <code>.env</code> file extension. Each line in an environment file should contain an environment variable in <code>VARIABLE=VALUE</code> format. Lines beginning with <code>#</code> are treated as comments and are ignored. For more information on the environment variable file syntax, see <a href="https://docs.docker.com/compose/env-file/">Declare default environment variables in file</a>.</p> <p>If there are environment variables specified using the <code>environment</code> parameter in a container definition, they take precedence over the variables contained within an environment file. If multiple environment files are specified that contain the same variable, they are processed from the top down. It is recommended to use unique variable names. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html">Specifying Environment Variables</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>This field is not valid for containers in tasks using the Fargate launch type.</p> */
	export interface EnvironmentFileFormProperties {

		/** Required */
		value: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<EnvironmentFileType | null | undefined>,
	}
	export function CreateEnvironmentFileFormGroup() {
		return new FormGroup<EnvironmentFileFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<EnvironmentFileType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EnvironmentFileType { s3 = 0 }


	/** Details on a volume mount point that is used in a container definition. */
	export interface MountPoint {
		sourceVolume?: string | null;
		containerPath?: string | null;
		readOnly?: boolean | null;
	}

	/** Details on a volume mount point that is used in a container definition. */
	export interface MountPointFormProperties {
		sourceVolume: FormControl<string | null | undefined>,
		containerPath: FormControl<string | null | undefined>,
		readOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateMountPointFormGroup() {
		return new FormGroup<MountPointFormProperties>({
			sourceVolume: new FormControl<string | null | undefined>(undefined),
			containerPath: new FormControl<string | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details on a data volume from another container in the same task definition. */
	export interface VolumeFrom {
		sourceContainer?: string | null;
		readOnly?: boolean | null;
	}

	/** Details on a data volume from another container in the same task definition. */
	export interface VolumeFromFormProperties {
		sourceContainer: FormControl<string | null | undefined>,
		readOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateVolumeFromFormGroup() {
		return new FormGroup<VolumeFromFormProperties>({
			sourceContainer: new FormControl<string | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Linux-specific options that are applied to the container, such as Linux <a>KernelCapabilities</a>. */
	export interface LinuxParameters {

		/** The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker. For more information on the default capabilities and the non-default available capabilities, see <a href="https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities">Runtime privilege and Linux capabilities</a> in the <i>Docker run reference</i>. For more detailed information on these Linux capabilities, see the <a href="http://man7.org/linux/man-pages/man7/capabilities.7.html">capabilities(7)</a> Linux manual page. */
		capabilities?: KernelCapabilities;
		devices?: Array<Device>;
		initProcessEnabled?: boolean | null;
		sharedMemorySize?: number | null;
		tmpfs?: Array<Tmpfs>;
		maxSwap?: number | null;
		swappiness?: number | null;
	}

	/** Linux-specific options that are applied to the container, such as Linux <a>KernelCapabilities</a>. */
	export interface LinuxParametersFormProperties {
		initProcessEnabled: FormControl<boolean | null | undefined>,
		sharedMemorySize: FormControl<number | null | undefined>,
		maxSwap: FormControl<number | null | undefined>,
		swappiness: FormControl<number | null | undefined>,
	}
	export function CreateLinuxParametersFormGroup() {
		return new FormGroup<LinuxParametersFormProperties>({
			initProcessEnabled: new FormControl<boolean | null | undefined>(undefined),
			sharedMemorySize: new FormControl<number | null | undefined>(undefined),
			maxSwap: new FormControl<number | null | undefined>(undefined),
			swappiness: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker. For more information on the default capabilities and the non-default available capabilities, see <a href="https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities">Runtime privilege and Linux capabilities</a> in the <i>Docker run reference</i>. For more detailed information on these Linux capabilities, see the <a href="http://man7.org/linux/man-pages/man7/capabilities.7.html">capabilities(7)</a> Linux manual page. */
	export interface KernelCapabilities {
		add?: Array<string>;
		drop?: Array<string>;
	}

	/** The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker. For more information on the default capabilities and the non-default available capabilities, see <a href="https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities">Runtime privilege and Linux capabilities</a> in the <i>Docker run reference</i>. For more detailed information on these Linux capabilities, see the <a href="http://man7.org/linux/man-pages/man7/capabilities.7.html">capabilities(7)</a> Linux manual page. */
	export interface KernelCapabilitiesFormProperties {
	}
	export function CreateKernelCapabilitiesFormGroup() {
		return new FormGroup<KernelCapabilitiesFormProperties>({
		});

	}


	/** An object representing a container instance host device. */
	export interface Device {

		/** Required */
		hostPath: string;
		containerPath?: string | null;
		permissions?: Array<DeviceCgroupPermission>;
	}

	/** An object representing a container instance host device. */
	export interface DeviceFormProperties {

		/** Required */
		hostPath: FormControl<string | null | undefined>,
		containerPath: FormControl<string | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			hostPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			containerPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeviceCgroupPermission { read = 0, write = 1, mknod = 2 }


	/** The container path, mount options, and size of the tmpfs mount. */
	export interface Tmpfs {

		/** Required */
		containerPath: string;

		/** Required */
		size: number;
		mountOptions?: Array<string>;
	}

	/** The container path, mount options, and size of the tmpfs mount. */
	export interface TmpfsFormProperties {

		/** Required */
		containerPath: FormControl<string | null | undefined>,

		/** Required */
		size: FormControl<number | null | undefined>,
	}
	export function CreateTmpfsFormGroup() {
		return new FormGroup<TmpfsFormProperties>({
			containerPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>An object representing the secret to expose to your container. Secrets can be exposed to a container in the following ways:</p> <ul> <li> <p>To inject sensitive data into your containers as environment variables, use the <code>secrets</code> container definition parameter.</p> </li> <li> <p>To reference sensitive information in the log configuration of a container, use the <code>secretOptions</code> container definition parameter.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html">Specifying Sensitive Data</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> */
	export interface Secret {

		/** Required */
		name: string;

		/** Required */
		valueFrom: string;
	}

	/** <p>An object representing the secret to expose to your container. Secrets can be exposed to a container in the following ways:</p> <ul> <li> <p>To inject sensitive data into your containers as environment variables, use the <code>secrets</code> container definition parameter.</p> </li> <li> <p>To reference sensitive information in the log configuration of a container, use the <code>secretOptions</code> container definition parameter.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html">Specifying Sensitive Data</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> */
	export interface SecretFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		valueFrom: FormControl<string | null | undefined>,
	}
	export function CreateSecretFormGroup() {
		return new FormGroup<SecretFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			valueFrom: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The dependencies defined for container startup and shutdown. A container can contain multiple dependencies. When a dependency is defined for container startup, for container shutdown it is reversed.</p> <p>Your Amazon ECS container instances require at least version 1.26.0 of the container agent to enable container dependencies. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. If you are using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the <code>ecs-init</code> package. If your container instances are launched from version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>For tasks using the Fargate launch type, this parameter requires that the task or service uses platform version 1.3.0 or later.</p> </note> */
	export interface ContainerDependency {

		/** Required */
		containerName: string;

		/** Required */
		condition: ContainerDependencyCondition;
	}

	/** <p>The dependencies defined for container startup and shutdown. A container can contain multiple dependencies. When a dependency is defined for container startup, for container shutdown it is reversed.</p> <p>Your Amazon ECS container instances require at least version 1.26.0 of the container agent to enable container dependencies. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. If you are using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the <code>ecs-init</code> package. If your container instances are launched from version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>For tasks using the Fargate launch type, this parameter requires that the task or service uses platform version 1.3.0 or later.</p> </note> */
	export interface ContainerDependencyFormProperties {

		/** Required */
		containerName: FormControl<string | null | undefined>,

		/** Required */
		condition: FormControl<ContainerDependencyCondition | null | undefined>,
	}
	export function CreateContainerDependencyFormGroup() {
		return new FormGroup<ContainerDependencyFormProperties>({
			containerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			condition: new FormControl<ContainerDependencyCondition | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ContainerDependencyCondition { START = 0, COMPLETE = 1, SUCCESS = 2, HEALTHY = 3 }


	/** Hostnames and IP address entries that are added to the <code>/etc/hosts</code> file of a container via the <code>extraHosts</code> parameter of its <a>ContainerDefinition</a>.  */
	export interface HostEntry {

		/** Required */
		hostname: string;

		/** Required */
		ipAddress: string;
	}

	/** Hostnames and IP address entries that are added to the <code>/etc/hosts</code> file of a container via the <code>extraHosts</code> parameter of its <a>ContainerDefinition</a>.  */
	export interface HostEntryFormProperties {

		/** Required */
		hostname: FormControl<string | null | undefined>,

		/** Required */
		ipAddress: FormControl<string | null | undefined>,
	}
	export function CreateHostEntryFormGroup() {
		return new FormGroup<HostEntryFormProperties>({
			hostname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ipAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DockerLabelsMap {
	}
	export interface DockerLabelsMapFormProperties {
	}
	export function CreateDockerLabelsMapFormGroup() {
		return new FormGroup<DockerLabelsMapFormProperties>({
		});

	}


	/** The <code>ulimit</code> settings to pass to the container. */
	export interface Ulimit {

		/** Required */
		name: UlimitName;

		/** Required */
		softLimit: number;

		/** Required */
		hardLimit: number;
	}

	/** The <code>ulimit</code> settings to pass to the container. */
	export interface UlimitFormProperties {

		/** Required */
		name: FormControl<UlimitName | null | undefined>,

		/** Required */
		softLimit: FormControl<number | null | undefined>,

		/** Required */
		hardLimit: FormControl<number | null | undefined>,
	}
	export function CreateUlimitFormGroup() {
		return new FormGroup<UlimitFormProperties>({
			name: new FormControl<UlimitName | null | undefined>(undefined, [Validators.required]),
			softLimit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			hardLimit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UlimitName { core = 0, cpu = 1, data = 2, fsize = 3, locks = 4, memlock = 5, msgqueue = 6, nice = 7, nofile = 8, nproc = 9, rss = 10, rtprio = 11, rttime = 12, sigpending = 13, stack = 14 }


	/** <p>The log configuration specification for the container.</p> <p>This parameter maps to <code>LogConfig</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/commandline/run/"> <code>docker run</code> </a>. By default, containers use the same logging driver that the Docker daemon uses; however the container may use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options). For more information on the options for different supported log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure logging drivers</a> in the Docker documentation.</p> <p>The following should be noted when specifying a log configuration for your containers:</p> <ul> <li> <p>Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon (shown in the valid values below). Additional log drivers may be available in future releases of the Amazon ECS container agent.</p> </li> <li> <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.</p> </li> <li> <p>For tasks using the EC2 launch type, the Amazon ECS container agent running on a container instance must register the logging drivers available on that instance with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that instance can use these log configuration options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p>For tasks using the Fargate launch type, because you do not have access to the underlying infrastructure your tasks are hosted on, any additional software needed will have to be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.</p> </li> </ul> */
	export interface LogConfiguration {

		/** Required */
		logDriver: LogConfigurationLogDriver;
		options?: LogConfigurationOptionsMap;
		secretOptions?: Array<Secret>;
	}

	/** <p>The log configuration specification for the container.</p> <p>This parameter maps to <code>LogConfig</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/commandline/run/"> <code>docker run</code> </a>. By default, containers use the same logging driver that the Docker daemon uses; however the container may use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options). For more information on the options for different supported log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure logging drivers</a> in the Docker documentation.</p> <p>The following should be noted when specifying a log configuration for your containers:</p> <ul> <li> <p>Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon (shown in the valid values below). Additional log drivers may be available in future releases of the Amazon ECS container agent.</p> </li> <li> <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.</p> </li> <li> <p>For tasks using the EC2 launch type, the Amazon ECS container agent running on a container instance must register the logging drivers available on that instance with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that instance can use these log configuration options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p>For tasks using the Fargate launch type, because you do not have access to the underlying infrastructure your tasks are hosted on, any additional software needed will have to be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.</p> </li> </ul> */
	export interface LogConfigurationFormProperties {

		/** Required */
		logDriver: FormControl<LogConfigurationLogDriver | null | undefined>,
	}
	export function CreateLogConfigurationFormGroup() {
		return new FormGroup<LogConfigurationFormProperties>({
			logDriver: new FormControl<LogConfigurationLogDriver | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LogConfigurationLogDriver { json_file = 0, syslog = 1, journald = 2, gelf = 3, fluentd = 4, awslogs = 5, splunk = 6, awsfirelens = 7 }

	export interface LogConfigurationOptionsMap {
	}
	export interface LogConfigurationOptionsMapFormProperties {
	}
	export function CreateLogConfigurationOptionsMapFormGroup() {
		return new FormGroup<LogConfigurationOptionsMapFormProperties>({
		});

	}


	/** <p>An object representing a container health check. Health check parameters that are specified in a container definition override any Docker health checks that exist in the container image (such as those specified in a parent image or from the image's Dockerfile).</p> <p>You can view the health status of both individual containers and a task with the DescribeTasks API operation or when viewing the task details in the console.</p> <p>The following describes the possible <code>healthStatus</code> values for a container:</p> <ul> <li> <p> <code>HEALTHY</code>-The container health check has passed successfully.</p> </li> <li> <p> <code>UNHEALTHY</code>-The container health check has failed.</p> </li> <li> <p> <code>UNKNOWN</code>-The container health check is being evaluated or there is no container health check defined.</p> </li> </ul> <p>The following describes the possible <code>healthStatus</code> values for a task. The container health check status of nonessential containers do not have an effect on the health status of a task.</p> <ul> <li> <p> <code>HEALTHY</code>-All essential containers within the task have passed their health checks.</p> </li> <li> <p> <code>UNHEALTHY</code>-One or more essential containers have failed their health check.</p> </li> <li> <p> <code>UNKNOWN</code>-The essential containers within the task are still having their health checks evaluated or there are no container health checks defined.</p> </li> </ul> <p>If a task is run manually, and not as part of a service, the task will continue its lifecycle regardless of its health status. For tasks that are part of a service, if the task reports as unhealthy then the task will be stopped and the service scheduler will replace it.</p> <p>The following are notes about container health check support:</p> <ul> <li> <p>Container health checks require version 1.17.0 or greater of the Amazon ECS container agent. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS Container Agent</a>.</p> </li> <li> <p>Container health checks are supported for Fargate tasks if you are using platform version 1.1.0 or greater. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">AWS Fargate Platform Versions</a>.</p> </li> <li> <p>Container health checks are not supported for tasks that are part of a service that is configured to use a Classic Load Balancer.</p> </li> </ul> */
	export interface HealthCheck {

		/** Required */
		command: Array<string>;
		interval?: number | null;
		timeout?: number | null;
		retries?: number | null;
		startPeriod?: number | null;
	}

	/** <p>An object representing a container health check. Health check parameters that are specified in a container definition override any Docker health checks that exist in the container image (such as those specified in a parent image or from the image's Dockerfile).</p> <p>You can view the health status of both individual containers and a task with the DescribeTasks API operation or when viewing the task details in the console.</p> <p>The following describes the possible <code>healthStatus</code> values for a container:</p> <ul> <li> <p> <code>HEALTHY</code>-The container health check has passed successfully.</p> </li> <li> <p> <code>UNHEALTHY</code>-The container health check has failed.</p> </li> <li> <p> <code>UNKNOWN</code>-The container health check is being evaluated or there is no container health check defined.</p> </li> </ul> <p>The following describes the possible <code>healthStatus</code> values for a task. The container health check status of nonessential containers do not have an effect on the health status of a task.</p> <ul> <li> <p> <code>HEALTHY</code>-All essential containers within the task have passed their health checks.</p> </li> <li> <p> <code>UNHEALTHY</code>-One or more essential containers have failed their health check.</p> </li> <li> <p> <code>UNKNOWN</code>-The essential containers within the task are still having their health checks evaluated or there are no container health checks defined.</p> </li> </ul> <p>If a task is run manually, and not as part of a service, the task will continue its lifecycle regardless of its health status. For tasks that are part of a service, if the task reports as unhealthy then the task will be stopped and the service scheduler will replace it.</p> <p>The following are notes about container health check support:</p> <ul> <li> <p>Container health checks require version 1.17.0 or greater of the Amazon ECS container agent. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS Container Agent</a>.</p> </li> <li> <p>Container health checks are supported for Fargate tasks if you are using platform version 1.1.0 or greater. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">AWS Fargate Platform Versions</a>.</p> </li> <li> <p>Container health checks are not supported for tasks that are part of a service that is configured to use a Classic Load Balancer.</p> </li> </ul> */
	export interface HealthCheckFormProperties {
		interval: FormControl<number | null | undefined>,
		timeout: FormControl<number | null | undefined>,
		retries: FormControl<number | null | undefined>,
		startPeriod: FormControl<number | null | undefined>,
	}
	export function CreateHealthCheckFormGroup() {
		return new FormGroup<HealthCheckFormProperties>({
			interval: new FormControl<number | null | undefined>(undefined),
			timeout: new FormControl<number | null | undefined>(undefined),
			retries: new FormControl<number | null | undefined>(undefined),
			startPeriod: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>A list of namespaced kernel parameters to set in the container. This parameter maps to <code>Sysctls</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--sysctl</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <p>It is not recommended that you specify network-related <code>systemControls</code> parameters for multiple containers in a single task that also uses either the <code>awsvpc</code> or <code>host</code> network mode for the following reasons:</p> <ul> <li> <p>For tasks that use the <code>awsvpc</code> network mode, if you set <code>systemControls</code> for any container, it applies to all containers in the task. If you set different <code>systemControls</code> for multiple containers in a single task, the container that is started last determines which <code>systemControls</code> take effect.</p> </li> <li> <p>For tasks that use the <code>host</code> network mode, the <code>systemControls</code> parameter applies to the container instance's kernel parameter as well as that of all containers of any tasks running on that container instance.</p> </li> </ul> */
	export interface SystemControl {
		namespace?: string | null;
		value?: string | null;
	}

	/** <p>A list of namespaced kernel parameters to set in the container. This parameter maps to <code>Sysctls</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--sysctl</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <p>It is not recommended that you specify network-related <code>systemControls</code> parameters for multiple containers in a single task that also uses either the <code>awsvpc</code> or <code>host</code> network mode for the following reasons:</p> <ul> <li> <p>For tasks that use the <code>awsvpc</code> network mode, if you set <code>systemControls</code> for any container, it applies to all containers in the task. If you set different <code>systemControls</code> for multiple containers in a single task, the container that is started last determines which <code>systemControls</code> take effect.</p> </li> <li> <p>For tasks that use the <code>host</code> network mode, the <code>systemControls</code> parameter applies to the container instance's kernel parameter as well as that of all containers of any tasks running on that container instance.</p> </li> </ul> */
	export interface SystemControlFormProperties {
		namespace: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateSystemControlFormGroup() {
		return new FormGroup<SystemControlFormProperties>({
			namespace: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type and amount of a resource to assign to a container. The supported resource types are GPUs and Elastic Inference accelerators. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-gpu.html">Working with GPUs on Amazon ECS</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-eia.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>  */
	export interface ResourceRequirement {

		/** Required */
		value: string;

		/** Required */
		type: ResourceRequirementType;
	}

	/** The type and amount of a resource to assign to a container. The supported resource types are GPUs and Elastic Inference accelerators. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-gpu.html">Working with GPUs on Amazon ECS</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-eia.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>  */
	export interface ResourceRequirementFormProperties {

		/** Required */
		value: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<ResourceRequirementType | null | undefined>,
	}
	export function CreateResourceRequirementFormGroup() {
		return new FormGroup<ResourceRequirementFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ResourceRequirementType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceRequirementType { GPU = 0, InferenceAccelerator = 1 }


	/** The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html">Custom Log Routing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface FirelensConfiguration {

		/** Required */
		type: FirelensConfigurationType;
		options?: FirelensConfigurationOptionsMap;
	}

	/** The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html">Custom Log Routing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface FirelensConfigurationFormProperties {

		/** Required */
		type: FormControl<FirelensConfigurationType | null | undefined>,
	}
	export function CreateFirelensConfigurationFormGroup() {
		return new FormGroup<FirelensConfigurationFormProperties>({
			type: new FormControl<FirelensConfigurationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FirelensConfigurationType { fluentd = 0, fluentbit = 1 }

	export interface FirelensConfigurationOptionsMap {
	}
	export interface FirelensConfigurationOptionsMapFormProperties {
	}
	export function CreateFirelensConfigurationOptionsMapFormGroup() {
		return new FormGroup<FirelensConfigurationOptionsMapFormProperties>({
		});

	}

	export enum TaskDefinitionNetworkMode { bridge = 0, host = 1, awsvpc = 2, none = 3 }


	/** A data volume used in a task definition. For tasks that use a Docker volume, specify a <code>DockerVolumeConfiguration</code>. For tasks that use a bind mount host volume, specify a <code>host</code> and optional <code>sourcePath</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html">Using Data Volumes in Tasks</a>. */
	export interface Volume {
		name?: string | null;

		/** Details on a container instance bind mount host volume. */
		host?: HostVolumeProperties;

		/** This parameter is specified when you are using Docker volumes. Docker volumes are only supported when you are using the EC2 launch type. Windows containers only support the use of the <code>local</code> driver. To use bind mounts, specify a <code>host</code> instead. */
		dockerVolumeConfiguration?: DockerVolumeConfiguration;

		/** This parameter is specified when you are using an Amazon Elastic File System file system for task storage. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html">Amazon EFS Volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
		efsVolumeConfiguration?: EFSVolumeConfiguration;
	}

	/** A data volume used in a task definition. For tasks that use a Docker volume, specify a <code>DockerVolumeConfiguration</code>. For tasks that use a bind mount host volume, specify a <code>host</code> and optional <code>sourcePath</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html">Using Data Volumes in Tasks</a>. */
	export interface VolumeFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateVolumeFormGroup() {
		return new FormGroup<VolumeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details on a container instance bind mount host volume. */
	export interface HostVolumeProperties {
		sourcePath?: string | null;
	}

	/** Details on a container instance bind mount host volume. */
	export interface HostVolumePropertiesFormProperties {
		sourcePath: FormControl<string | null | undefined>,
	}
	export function CreateHostVolumePropertiesFormGroup() {
		return new FormGroup<HostVolumePropertiesFormProperties>({
			sourcePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This parameter is specified when you are using Docker volumes. Docker volumes are only supported when you are using the EC2 launch type. Windows containers only support the use of the <code>local</code> driver. To use bind mounts, specify a <code>host</code> instead. */
	export interface DockerVolumeConfiguration {
		scope?: DockerVolumeConfigurationScope | null;
		autoprovision?: boolean | null;
		driver?: string | null;
		driverOpts?: StringMap;
		labels?: StringMap;
	}

	/** This parameter is specified when you are using Docker volumes. Docker volumes are only supported when you are using the EC2 launch type. Windows containers only support the use of the <code>local</code> driver. To use bind mounts, specify a <code>host</code> instead. */
	export interface DockerVolumeConfigurationFormProperties {
		scope: FormControl<DockerVolumeConfigurationScope | null | undefined>,
		autoprovision: FormControl<boolean | null | undefined>,
		driver: FormControl<string | null | undefined>,
	}
	export function CreateDockerVolumeConfigurationFormGroup() {
		return new FormGroup<DockerVolumeConfigurationFormProperties>({
			scope: new FormControl<DockerVolumeConfigurationScope | null | undefined>(undefined),
			autoprovision: new FormControl<boolean | null | undefined>(undefined),
			driver: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DockerVolumeConfigurationScope { task = 0, shared = 1 }

	export interface StringMap {
	}
	export interface StringMapFormProperties {
	}
	export function CreateStringMapFormGroup() {
		return new FormGroup<StringMapFormProperties>({
		});

	}


	/** This parameter is specified when you are using an Amazon Elastic File System file system for task storage. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html">Amazon EFS Volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface EFSVolumeConfiguration {

		/** Required */
		fileSystemId: string;
		rootDirectory?: string | null;
		transitEncryption?: ManagedScalingStatus | null;
		transitEncryptionPort?: number | null;

		/** The authorization configuration details for the Amazon EFS file system. */
		authorizationConfig?: EFSAuthorizationConfig;
	}

	/** This parameter is specified when you are using an Amazon Elastic File System file system for task storage. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html">Amazon EFS Volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface EFSVolumeConfigurationFormProperties {

		/** Required */
		fileSystemId: FormControl<string | null | undefined>,
		rootDirectory: FormControl<string | null | undefined>,
		transitEncryption: FormControl<ManagedScalingStatus | null | undefined>,
		transitEncryptionPort: FormControl<number | null | undefined>,
	}
	export function CreateEFSVolumeConfigurationFormGroup() {
		return new FormGroup<EFSVolumeConfigurationFormProperties>({
			fileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rootDirectory: new FormControl<string | null | undefined>(undefined),
			transitEncryption: new FormControl<ManagedScalingStatus | null | undefined>(undefined),
			transitEncryptionPort: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The authorization configuration details for the Amazon EFS file system. */
	export interface EFSAuthorizationConfig {
		accessPointId?: string | null;
		iam?: ManagedScalingStatus | null;
	}

	/** The authorization configuration details for the Amazon EFS file system. */
	export interface EFSAuthorizationConfigFormProperties {
		accessPointId: FormControl<string | null | undefined>,
		iam: FormControl<ManagedScalingStatus | null | undefined>,
	}
	export function CreateEFSAuthorizationConfigFormGroup() {
		return new FormGroup<EFSAuthorizationConfigFormProperties>({
			accessPointId: new FormControl<string | null | undefined>(undefined),
			iam: new FormControl<ManagedScalingStatus | null | undefined>(undefined),
		});

	}

	export enum TaskDefinitionStatus { ACTIVE = 0, INACTIVE = 1 }


	/** <p>An object representing a constraint on task placement in the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>If you are using the Fargate launch type, task placement constraints are not supported.</p> </note> */
	export interface TaskDefinitionPlacementConstraint {
		type?: TaskDefinitionPlacementConstraintType | null;
		expression?: string | null;
	}

	/** <p>An object representing a constraint on task placement in the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>If you are using the Fargate launch type, task placement constraints are not supported.</p> </note> */
	export interface TaskDefinitionPlacementConstraintFormProperties {
		type: FormControl<TaskDefinitionPlacementConstraintType | null | undefined>,
		expression: FormControl<string | null | undefined>,
	}
	export function CreateTaskDefinitionPlacementConstraintFormGroup() {
		return new FormGroup<TaskDefinitionPlacementConstraintFormProperties>({
			type: new FormControl<TaskDefinitionPlacementConstraintType | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TaskDefinitionPlacementConstraintType { memberOf = 0 }

	export enum Compatibility { EC2 = 0, FARGATE = 1 }


	/** Details on a Elastic Inference accelerator. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-eia.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface InferenceAccelerator {

		/** Required */
		deviceName: string;

		/** Required */
		deviceType: string;
	}

	/** Details on a Elastic Inference accelerator. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-eia.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface InferenceAcceleratorFormProperties {

		/** Required */
		deviceName: FormControl<string | null | undefined>,

		/** Required */
		deviceType: FormControl<string | null | undefined>,
	}
	export function CreateInferenceAcceleratorFormGroup() {
		return new FormGroup<InferenceAcceleratorFormProperties>({
			deviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deviceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TaskDefinitionPidMode { host = 0, task = 1 }

	export enum TaskDefinitionIpcMode { host = 0, task = 1, none = 2 }


	/** <p>The configuration details for the App Mesh proxy.</p> <p>For tasks using the EC2 launch type, the container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the <code>ecs-init</code> package to enable a proxy configuration. If your container instances are launched from the Amazon ECS-optimized AMI version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>For tasks using the Fargate launch type, the task or service requires platform version 1.3.0 or later.</p> */
	export interface ProxyConfiguration {
		type?: ProxyConfigurationType | null;

		/** Required */
		containerName: string;
		properties?: Array<KeyValuePair>;
	}

	/** <p>The configuration details for the App Mesh proxy.</p> <p>For tasks using the EC2 launch type, the container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the <code>ecs-init</code> package to enable a proxy configuration. If your container instances are launched from the Amazon ECS-optimized AMI version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>For tasks using the Fargate launch type, the task or service requires platform version 1.3.0 or later.</p> */
	export interface ProxyConfigurationFormProperties {
		type: FormControl<ProxyConfigurationType | null | undefined>,

		/** Required */
		containerName: FormControl<string | null | undefined>,
	}
	export function CreateProxyConfigurationFormGroup() {
		return new FormGroup<ProxyConfigurationFormProperties>({
			type: new FormControl<ProxyConfigurationType | null | undefined>(undefined),
			containerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ProxyConfigurationType { APPMESH = 0 }

	export interface DeregisterTaskDefinitionRequest {

		/** Required */
		taskDefinition: string;
	}
	export interface DeregisterTaskDefinitionRequestFormProperties {

		/** Required */
		taskDefinition: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterTaskDefinitionRequestFormGroup() {
		return new FormGroup<DeregisterTaskDefinitionRequestFormProperties>({
			taskDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeCapacityProvidersResponse {
		capacityProviders?: Array<CapacityProvider>;
		failures?: Array<Failure>;
		nextToken?: string | null;
	}
	export interface DescribeCapacityProvidersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCapacityProvidersResponseFormGroup() {
		return new FormGroup<DescribeCapacityProvidersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A failed resource. */
	export interface Failure {
		arn?: string | null;
		reason?: string | null;
		detail?: string | null;
	}

	/** A failed resource. */
	export interface FailureFormProperties {
		arn: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
		detail: FormControl<string | null | undefined>,
	}
	export function CreateFailureFormGroup() {
		return new FormGroup<FailureFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeCapacityProvidersRequest {
		capacityProviders?: Array<string>;
		include?: Array<CapacityProviderField>;
		maxResults?: number | null;
		nextToken?: string | null;
	}
	export interface DescribeCapacityProvidersRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCapacityProvidersRequestFormGroup() {
		return new FormGroup<DescribeCapacityProvidersRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CapacityProviderField { TAGS = 0 }

	export interface DescribeClustersResponse {
		clusters?: Array<Cluster>;
		failures?: Array<Failure>;
	}
	export interface DescribeClustersResponseFormProperties {
	}
	export function CreateDescribeClustersResponseFormGroup() {
		return new FormGroup<DescribeClustersResponseFormProperties>({
		});

	}

	export interface DescribeClustersRequest {
		clusters?: Array<string>;
		include?: Array<ClusterField>;
	}
	export interface DescribeClustersRequestFormProperties {
	}
	export function CreateDescribeClustersRequestFormGroup() {
		return new FormGroup<DescribeClustersRequestFormProperties>({
		});

	}

	export enum ClusterField { ATTACHMENTS = 0, SETTINGS = 1, STATISTICS = 2, TAGS = 3 }

	export interface DescribeContainerInstancesResponse {
		containerInstances?: Array<ContainerInstance>;
		failures?: Array<Failure>;
	}
	export interface DescribeContainerInstancesResponseFormProperties {
	}
	export function CreateDescribeContainerInstancesResponseFormGroup() {
		return new FormGroup<DescribeContainerInstancesResponseFormProperties>({
		});

	}

	export interface DescribeContainerInstancesRequest {
		cluster?: string | null;

		/** Required */
		containerInstances: Array<string>;
		include?: Array<ContainerInstanceField>;
	}
	export interface DescribeContainerInstancesRequestFormProperties {
		cluster: FormControl<string | null | undefined>,
	}
	export function CreateDescribeContainerInstancesRequestFormGroup() {
		return new FormGroup<DescribeContainerInstancesRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContainerInstanceField { TAGS = 0 }

	export interface DescribeServicesResponse {
		services?: Array<Service>;
		failures?: Array<Failure>;
	}
	export interface DescribeServicesResponseFormProperties {
	}
	export function CreateDescribeServicesResponseFormGroup() {
		return new FormGroup<DescribeServicesResponseFormProperties>({
		});

	}

	export interface DescribeServicesRequest {
		cluster?: string | null;

		/** Required */
		services: Array<string>;
		include?: Array<ServiceField>;
	}
	export interface DescribeServicesRequestFormProperties {
		cluster: FormControl<string | null | undefined>,
	}
	export function CreateDescribeServicesRequestFormGroup() {
		return new FormGroup<DescribeServicesRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServiceField { TAGS = 0 }

	export interface DescribeTaskDefinitionResponse {

		/** The details of a task definition which describes the container and volume definitions of an Amazon Elastic Container Service task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task. */
		taskDefinition?: TaskDefinition;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}
	export interface DescribeTaskDefinitionResponseFormProperties {
	}
	export function CreateDescribeTaskDefinitionResponseFormGroup() {
		return new FormGroup<DescribeTaskDefinitionResponseFormProperties>({
		});

	}

	export interface DescribeTaskDefinitionRequest {

		/** Required */
		taskDefinition: string;
		include?: Array<TaskDefinitionField>;
	}
	export interface DescribeTaskDefinitionRequestFormProperties {

		/** Required */
		taskDefinition: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTaskDefinitionRequestFormGroup() {
		return new FormGroup<DescribeTaskDefinitionRequestFormProperties>({
			taskDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TaskDefinitionField { TAGS = 0 }

	export interface DescribeTaskSetsResponse {
		taskSets?: Array<TaskSet>;
		failures?: Array<Failure>;
	}
	export interface DescribeTaskSetsResponseFormProperties {
	}
	export function CreateDescribeTaskSetsResponseFormGroup() {
		return new FormGroup<DescribeTaskSetsResponseFormProperties>({
		});

	}

	export interface DescribeTaskSetsRequest {

		/** Required */
		cluster: string;

		/** Required */
		service: string;
		taskSets?: Array<string>;
		include?: Array<TaskSetField>;
	}
	export interface DescribeTaskSetsRequestFormProperties {

		/** Required */
		cluster: FormControl<string | null | undefined>,

		/** Required */
		service: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTaskSetsRequestFormGroup() {
		return new FormGroup<DescribeTaskSetsRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TaskSetField { TAGS = 0 }

	export interface DescribeTasksResponse {
		tasks?: Array<Task_>;
		failures?: Array<Failure>;
	}
	export interface DescribeTasksResponseFormProperties {
	}
	export function CreateDescribeTasksResponseFormGroup() {
		return new FormGroup<DescribeTasksResponseFormProperties>({
		});

	}


	/** Details on a task in a cluster. */
	export interface Task_ {
		attachments?: Array<Attachment>;
		attributes?: Array<Attribute>;
		availabilityZone?: string | null;
		capacityProviderName?: string | null;
		clusterArn?: string | null;
		connectivity?: Task_Connectivity | null;
		connectivityAt?: Date | null;
		containerInstanceArn?: string | null;
		containers?: Array<Container>;
		cpu?: string | null;
		createdAt?: Date | null;
		desiredStatus?: string | null;
		executionStoppedAt?: Date | null;
		group?: string | null;
		healthStatus?: ContainerHealthStatus | null;
		inferenceAccelerators?: Array<InferenceAccelerator>;
		lastStatus?: string | null;
		launchType?: ServiceLaunchType | null;
		memory?: string | null;

		/** The overrides associated with a task. */
		overrides?: TaskOverride;
		platformVersion?: string | null;
		pullStartedAt?: Date | null;
		pullStoppedAt?: Date | null;
		startedAt?: Date | null;
		startedBy?: string | null;
		stopCode?: Task_StopCode | null;
		stoppedAt?: Date | null;
		stoppedReason?: string | null;
		stoppingAt?: Date | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
		taskArn?: string | null;
		taskDefinitionArn?: string | null;
		version?: number | null;
	}

	/** Details on a task in a cluster. */
	export interface Task_FormProperties {
		availabilityZone: FormControl<string | null | undefined>,
		capacityProviderName: FormControl<string | null | undefined>,
		clusterArn: FormControl<string | null | undefined>,
		connectivity: FormControl<Task_Connectivity | null | undefined>,
		connectivityAt: FormControl<Date | null | undefined>,
		containerInstanceArn: FormControl<string | null | undefined>,
		cpu: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		desiredStatus: FormControl<string | null | undefined>,
		executionStoppedAt: FormControl<Date | null | undefined>,
		group: FormControl<string | null | undefined>,
		healthStatus: FormControl<ContainerHealthStatus | null | undefined>,
		lastStatus: FormControl<string | null | undefined>,
		launchType: FormControl<ServiceLaunchType | null | undefined>,
		memory: FormControl<string | null | undefined>,
		platformVersion: FormControl<string | null | undefined>,
		pullStartedAt: FormControl<Date | null | undefined>,
		pullStoppedAt: FormControl<Date | null | undefined>,
		startedAt: FormControl<Date | null | undefined>,
		startedBy: FormControl<string | null | undefined>,
		stopCode: FormControl<Task_StopCode | null | undefined>,
		stoppedAt: FormControl<Date | null | undefined>,
		stoppedReason: FormControl<string | null | undefined>,
		stoppingAt: FormControl<Date | null | undefined>,
		taskArn: FormControl<string | null | undefined>,
		taskDefinitionArn: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateTask_FormGroup() {
		return new FormGroup<Task_FormProperties>({
			availabilityZone: new FormControl<string | null | undefined>(undefined),
			capacityProviderName: new FormControl<string | null | undefined>(undefined),
			clusterArn: new FormControl<string | null | undefined>(undefined),
			connectivity: new FormControl<Task_Connectivity | null | undefined>(undefined),
			connectivityAt: new FormControl<Date | null | undefined>(undefined),
			containerInstanceArn: new FormControl<string | null | undefined>(undefined),
			cpu: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			desiredStatus: new FormControl<string | null | undefined>(undefined),
			executionStoppedAt: new FormControl<Date | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			healthStatus: new FormControl<ContainerHealthStatus | null | undefined>(undefined),
			lastStatus: new FormControl<string | null | undefined>(undefined),
			launchType: new FormControl<ServiceLaunchType | null | undefined>(undefined),
			memory: new FormControl<string | null | undefined>(undefined),
			platformVersion: new FormControl<string | null | undefined>(undefined),
			pullStartedAt: new FormControl<Date | null | undefined>(undefined),
			pullStoppedAt: new FormControl<Date | null | undefined>(undefined),
			startedAt: new FormControl<Date | null | undefined>(undefined),
			startedBy: new FormControl<string | null | undefined>(undefined),
			stopCode: new FormControl<Task_StopCode | null | undefined>(undefined),
			stoppedAt: new FormControl<Date | null | undefined>(undefined),
			stoppedReason: new FormControl<string | null | undefined>(undefined),
			stoppingAt: new FormControl<Date | null | undefined>(undefined),
			taskArn: new FormControl<string | null | undefined>(undefined),
			taskDefinitionArn: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Task_Connectivity { CONNECTED = 0, DISCONNECTED = 1 }


	/** A Docker container that is part of a task. */
	export interface Container {
		containerArn?: string | null;
		taskArn?: string | null;
		name?: string | null;
		image?: string | null;
		imageDigest?: string | null;
		runtimeId?: string | null;
		lastStatus?: string | null;
		exitCode?: number | null;
		reason?: string | null;
		networkBindings?: Array<NetworkBinding>;
		networkInterfaces?: Array<NetworkInterface>;
		healthStatus?: ContainerHealthStatus | null;
		cpu?: string | null;
		memory?: string | null;
		memoryReservation?: string | null;
		gpuIds?: Array<string>;
	}

	/** A Docker container that is part of a task. */
	export interface ContainerFormProperties {
		containerArn: FormControl<string | null | undefined>,
		taskArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		image: FormControl<string | null | undefined>,
		imageDigest: FormControl<string | null | undefined>,
		runtimeId: FormControl<string | null | undefined>,
		lastStatus: FormControl<string | null | undefined>,
		exitCode: FormControl<number | null | undefined>,
		reason: FormControl<string | null | undefined>,
		healthStatus: FormControl<ContainerHealthStatus | null | undefined>,
		cpu: FormControl<string | null | undefined>,
		memory: FormControl<string | null | undefined>,
		memoryReservation: FormControl<string | null | undefined>,
	}
	export function CreateContainerFormGroup() {
		return new FormGroup<ContainerFormProperties>({
			containerArn: new FormControl<string | null | undefined>(undefined),
			taskArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
			runtimeId: new FormControl<string | null | undefined>(undefined),
			lastStatus: new FormControl<string | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			healthStatus: new FormControl<ContainerHealthStatus | null | undefined>(undefined),
			cpu: new FormControl<string | null | undefined>(undefined),
			memory: new FormControl<string | null | undefined>(undefined),
			memoryReservation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details on the network bindings between a container and its host container instance. After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses. */
	export interface NetworkBinding {
		bindIP?: string | null;
		containerPort?: number | null;
		hostPort?: number | null;
		protocol?: PortMappingProtocol | null;
	}

	/** Details on the network bindings between a container and its host container instance. After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses. */
	export interface NetworkBindingFormProperties {
		bindIP: FormControl<string | null | undefined>,
		containerPort: FormControl<number | null | undefined>,
		hostPort: FormControl<number | null | undefined>,
		protocol: FormControl<PortMappingProtocol | null | undefined>,
	}
	export function CreateNetworkBindingFormGroup() {
		return new FormGroup<NetworkBindingFormProperties>({
			bindIP: new FormControl<string | null | undefined>(undefined),
			containerPort: new FormControl<number | null | undefined>(undefined),
			hostPort: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<PortMappingProtocol | null | undefined>(undefined),
		});

	}


	/** An object representing the elastic network interface for tasks that use the <code>awsvpc</code> network mode. */
	export interface NetworkInterface {
		attachmentId?: string | null;
		privateIpv4Address?: string | null;
		ipv6Address?: string | null;
	}

	/** An object representing the elastic network interface for tasks that use the <code>awsvpc</code> network mode. */
	export interface NetworkInterfaceFormProperties {
		attachmentId: FormControl<string | null | undefined>,
		privateIpv4Address: FormControl<string | null | undefined>,
		ipv6Address: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInterfaceFormGroup() {
		return new FormGroup<NetworkInterfaceFormProperties>({
			attachmentId: new FormControl<string | null | undefined>(undefined),
			privateIpv4Address: new FormControl<string | null | undefined>(undefined),
			ipv6Address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContainerHealthStatus { HEALTHY = 0, UNHEALTHY = 1, UNKNOWN = 2 }


	/** The overrides associated with a task. */
	export interface TaskOverride {
		containerOverrides?: Array<ContainerOverride>;
		cpu?: string | null;
		inferenceAcceleratorOverrides?: Array<InferenceAcceleratorOverride>;
		executionRoleArn?: string | null;
		memory?: string | null;
		taskRoleArn?: string | null;
	}

	/** The overrides associated with a task. */
	export interface TaskOverrideFormProperties {
		cpu: FormControl<string | null | undefined>,
		executionRoleArn: FormControl<string | null | undefined>,
		memory: FormControl<string | null | undefined>,
		taskRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateTaskOverrideFormGroup() {
		return new FormGroup<TaskOverrideFormProperties>({
			cpu: new FormControl<string | null | undefined>(undefined),
			executionRoleArn: new FormControl<string | null | undefined>(undefined),
			memory: new FormControl<string | null | undefined>(undefined),
			taskRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The overrides that should be sent to a container. An empty container override can be passed in. An example of an empty container override would be <code>{"containerOverrides": [ ] }</code>. If a non-empty container override is specified, the <code>name</code> parameter must be included. */
	export interface ContainerOverride {
		name?: string | null;
		command?: Array<string>;
		environment?: Array<KeyValuePair>;
		environmentFiles?: Array<EnvironmentFile>;
		cpu?: number | null;
		memory?: number | null;
		memoryReservation?: number | null;
		resourceRequirements?: Array<ResourceRequirement>;
	}

	/** The overrides that should be sent to a container. An empty container override can be passed in. An example of an empty container override would be <code>{"containerOverrides": [ ] }</code>. If a non-empty container override is specified, the <code>name</code> parameter must be included. */
	export interface ContainerOverrideFormProperties {
		name: FormControl<string | null | undefined>,
		cpu: FormControl<number | null | undefined>,
		memory: FormControl<number | null | undefined>,
		memoryReservation: FormControl<number | null | undefined>,
	}
	export function CreateContainerOverrideFormGroup() {
		return new FormGroup<ContainerOverrideFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			cpu: new FormControl<number | null | undefined>(undefined),
			memory: new FormControl<number | null | undefined>(undefined),
			memoryReservation: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details on an Elastic Inference accelerator task override. This parameter is used to override the Elastic Inference accelerator specified in the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-eia.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface InferenceAcceleratorOverride {
		deviceName?: string | null;
		deviceType?: string | null;
	}

	/** Details on an Elastic Inference accelerator task override. This parameter is used to override the Elastic Inference accelerator specified in the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-eia.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface InferenceAcceleratorOverrideFormProperties {
		deviceName: FormControl<string | null | undefined>,
		deviceType: FormControl<string | null | undefined>,
	}
	export function CreateInferenceAcceleratorOverrideFormGroup() {
		return new FormGroup<InferenceAcceleratorOverrideFormProperties>({
			deviceName: new FormControl<string | null | undefined>(undefined),
			deviceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Task_StopCode { TaskFailedToStart = 0, EssentialContainerExited = 1, UserInitiated = 2 }

	export interface DescribeTasksRequest {
		cluster?: string | null;

		/** Required */
		tasks: Array<string>;
		include?: Array<TaskField>;
	}
	export interface DescribeTasksRequestFormProperties {
		cluster: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTasksRequestFormGroup() {
		return new FormGroup<DescribeTasksRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TaskField { TAGS = 0 }

	export interface DiscoverPollEndpointResponse {
		endpoint?: string | null;
		telemetryEndpoint?: string | null;
	}
	export interface DiscoverPollEndpointResponseFormProperties {
		endpoint: FormControl<string | null | undefined>,
		telemetryEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateDiscoverPollEndpointResponseFormGroup() {
		return new FormGroup<DiscoverPollEndpointResponseFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined),
			telemetryEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DiscoverPollEndpointRequest {
		containerInstance?: string | null;
		cluster?: string | null;
	}
	export interface DiscoverPollEndpointRequestFormProperties {
		containerInstance: FormControl<string | null | undefined>,
		cluster: FormControl<string | null | undefined>,
	}
	export function CreateDiscoverPollEndpointRequestFormGroup() {
		return new FormGroup<DiscoverPollEndpointRequestFormProperties>({
			containerInstance: new FormControl<string | null | undefined>(undefined),
			cluster: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAccountSettingsResponse {
		settings?: Array<Setting>;
		nextToken?: string | null;
	}
	export interface ListAccountSettingsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountSettingsResponseFormGroup() {
		return new FormGroup<ListAccountSettingsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAccountSettingsRequest {
		name?: SettingName | null;
		value?: string | null;
		principalArn?: string | null;
		effectiveSettings?: boolean | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface ListAccountSettingsRequestFormProperties {
		name: FormControl<SettingName | null | undefined>,
		value: FormControl<string | null | undefined>,
		principalArn: FormControl<string | null | undefined>,
		effectiveSettings: FormControl<boolean | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAccountSettingsRequestFormGroup() {
		return new FormGroup<ListAccountSettingsRequestFormProperties>({
			name: new FormControl<SettingName | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			principalArn: new FormControl<string | null | undefined>(undefined),
			effectiveSettings: new FormControl<boolean | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListAttributesResponse {
		attributes?: Array<Attribute>;
		nextToken?: string | null;
	}
	export interface ListAttributesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAttributesResponseFormGroup() {
		return new FormGroup<ListAttributesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAttributesRequest {
		cluster?: string | null;

		/** Required */
		targetType: ListAttributesRequestTargetType;
		attributeName?: string | null;
		attributeValue?: string | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface ListAttributesRequestFormProperties {
		cluster: FormControl<string | null | undefined>,

		/** Required */
		targetType: FormControl<ListAttributesRequestTargetType | null | undefined>,
		attributeName: FormControl<string | null | undefined>,
		attributeValue: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAttributesRequestFormGroup() {
		return new FormGroup<ListAttributesRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			targetType: new FormControl<ListAttributesRequestTargetType | null | undefined>(undefined, [Validators.required]),
			attributeName: new FormControl<string | null | undefined>(undefined),
			attributeValue: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ListAttributesRequestTargetType { container_instance = 0 }

	export interface ListClustersResponse {
		clusterArns?: Array<string>;
		nextToken?: string | null;
	}
	export interface ListClustersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClustersResponseFormGroup() {
		return new FormGroup<ListClustersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClustersRequest {
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface ListClustersRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListClustersRequestFormGroup() {
		return new FormGroup<ListClustersRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListContainerInstancesResponse {
		containerInstanceArns?: Array<string>;
		nextToken?: string | null;
	}
	export interface ListContainerInstancesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListContainerInstancesResponseFormGroup() {
		return new FormGroup<ListContainerInstancesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListContainerInstancesRequest {
		cluster?: string | null;
		filter?: string | null;
		nextToken?: string | null;
		maxResults?: number | null;
		status?: ListContainerInstancesRequestStatus | null;
	}
	export interface ListContainerInstancesRequestFormProperties {
		cluster: FormControl<string | null | undefined>,
		filter: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		status: FormControl<ListContainerInstancesRequestStatus | null | undefined>,
	}
	export function CreateListContainerInstancesRequestFormGroup() {
		return new FormGroup<ListContainerInstancesRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<ListContainerInstancesRequestStatus | null | undefined>(undefined),
		});

	}

	export enum ListContainerInstancesRequestStatus { ACTIVE = 0, DRAINING = 1, REGISTERING = 2, DEREGISTERING = 3, REGISTRATION_FAILED = 4 }

	export interface ListServicesResponse {
		serviceArns?: Array<string>;
		nextToken?: string | null;
	}
	export interface ListServicesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServicesResponseFormGroup() {
		return new FormGroup<ListServicesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListServicesRequest {
		cluster?: string | null;
		nextToken?: string | null;
		maxResults?: number | null;
		launchType?: ServiceLaunchType | null;
		schedulingStrategy?: ServiceSchedulingStrategy | null;
	}
	export interface ListServicesRequestFormProperties {
		cluster: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		launchType: FormControl<ServiceLaunchType | null | undefined>,
		schedulingStrategy: FormControl<ServiceSchedulingStrategy | null | undefined>,
	}
	export function CreateListServicesRequestFormGroup() {
		return new FormGroup<ListServicesRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			launchType: new FormControl<ServiceLaunchType | null | undefined>(undefined),
			schedulingStrategy: new FormControl<ServiceSchedulingStrategy | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		resourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTaskDefinitionFamiliesResponse {
		families?: Array<string>;
		nextToken?: string | null;
	}
	export interface ListTaskDefinitionFamiliesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTaskDefinitionFamiliesResponseFormGroup() {
		return new FormGroup<ListTaskDefinitionFamiliesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTaskDefinitionFamiliesRequest {
		familyPrefix?: string | null;
		status?: ListTaskDefinitionFamiliesRequestStatus | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface ListTaskDefinitionFamiliesRequestFormProperties {
		familyPrefix: FormControl<string | null | undefined>,
		status: FormControl<ListTaskDefinitionFamiliesRequestStatus | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTaskDefinitionFamiliesRequestFormGroup() {
		return new FormGroup<ListTaskDefinitionFamiliesRequestFormProperties>({
			familyPrefix: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ListTaskDefinitionFamiliesRequestStatus | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ListTaskDefinitionFamiliesRequestStatus { ACTIVE = 0, INACTIVE = 1, ALL = 2 }

	export interface ListTaskDefinitionsResponse {
		taskDefinitionArns?: Array<string>;
		nextToken?: string | null;
	}
	export interface ListTaskDefinitionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTaskDefinitionsResponseFormGroup() {
		return new FormGroup<ListTaskDefinitionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTaskDefinitionsRequest {
		familyPrefix?: string | null;
		status?: TaskDefinitionStatus | null;
		sort?: ListTaskDefinitionsRequestSort | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface ListTaskDefinitionsRequestFormProperties {
		familyPrefix: FormControl<string | null | undefined>,
		status: FormControl<TaskDefinitionStatus | null | undefined>,
		sort: FormControl<ListTaskDefinitionsRequestSort | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTaskDefinitionsRequestFormGroup() {
		return new FormGroup<ListTaskDefinitionsRequestFormProperties>({
			familyPrefix: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TaskDefinitionStatus | null | undefined>(undefined),
			sort: new FormControl<ListTaskDefinitionsRequestSort | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ListTaskDefinitionsRequestSort { ASC = 0, DESC = 1 }

	export interface ListTasksResponse {
		taskArns?: Array<string>;
		nextToken?: string | null;
	}
	export interface ListTasksResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTasksResponseFormGroup() {
		return new FormGroup<ListTasksResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTasksRequest {
		cluster?: string | null;
		containerInstance?: string | null;
		family?: string | null;
		nextToken?: string | null;
		maxResults?: number | null;
		startedBy?: string | null;
		serviceName?: string | null;
		desiredStatus?: ListTasksRequestDesiredStatus | null;
		launchType?: ServiceLaunchType | null;
	}
	export interface ListTasksRequestFormProperties {
		cluster: FormControl<string | null | undefined>,
		containerInstance: FormControl<string | null | undefined>,
		family: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		startedBy: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
		desiredStatus: FormControl<ListTasksRequestDesiredStatus | null | undefined>,
		launchType: FormControl<ServiceLaunchType | null | undefined>,
	}
	export function CreateListTasksRequestFormGroup() {
		return new FormGroup<ListTasksRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			containerInstance: new FormControl<string | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			startedBy: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			desiredStatus: new FormControl<ListTasksRequestDesiredStatus | null | undefined>(undefined),
			launchType: new FormControl<ServiceLaunchType | null | undefined>(undefined),
		});

	}

	export enum ListTasksRequestDesiredStatus { RUNNING = 0, PENDING = 1, STOPPED = 2 }

	export interface PutAccountSettingResponse {

		/** The current account setting for a resource. */
		setting?: Setting;
	}
	export interface PutAccountSettingResponseFormProperties {
	}
	export function CreatePutAccountSettingResponseFormGroup() {
		return new FormGroup<PutAccountSettingResponseFormProperties>({
		});

	}

	export interface PutAccountSettingRequest {

		/** Required */
		name: SettingName;

		/** Required */
		value: string;
		principalArn?: string | null;
	}
	export interface PutAccountSettingRequestFormProperties {

		/** Required */
		name: FormControl<SettingName | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
		principalArn: FormControl<string | null | undefined>,
	}
	export function CreatePutAccountSettingRequestFormGroup() {
		return new FormGroup<PutAccountSettingRequestFormProperties>({
			name: new FormControl<SettingName | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			principalArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutAccountSettingDefaultResponse {

		/** The current account setting for a resource. */
		setting?: Setting;
	}
	export interface PutAccountSettingDefaultResponseFormProperties {
	}
	export function CreatePutAccountSettingDefaultResponseFormGroup() {
		return new FormGroup<PutAccountSettingDefaultResponseFormProperties>({
		});

	}

	export interface PutAccountSettingDefaultRequest {

		/** Required */
		name: SettingName;

		/** Required */
		value: string;
	}
	export interface PutAccountSettingDefaultRequestFormProperties {

		/** Required */
		name: FormControl<SettingName | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePutAccountSettingDefaultRequestFormGroup() {
		return new FormGroup<PutAccountSettingDefaultRequestFormProperties>({
			name: new FormControl<SettingName | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutAttributesResponse {
		attributes?: Array<Attribute>;
	}
	export interface PutAttributesResponseFormProperties {
	}
	export function CreatePutAttributesResponseFormGroup() {
		return new FormGroup<PutAttributesResponseFormProperties>({
		});

	}

	export interface PutAttributesRequest {
		cluster?: string | null;

		/** Required */
		attributes: Array<Attribute>;
	}
	export interface PutAttributesRequestFormProperties {
		cluster: FormControl<string | null | undefined>,
	}
	export function CreatePutAttributesRequestFormGroup() {
		return new FormGroup<PutAttributesRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttributeLimitExceededException {
	}
	export interface AttributeLimitExceededExceptionFormProperties {
	}
	export function CreateAttributeLimitExceededExceptionFormGroup() {
		return new FormGroup<AttributeLimitExceededExceptionFormProperties>({
		});

	}

	export interface PutClusterCapacityProvidersResponse {

		/** A regional grouping of one or more container instances on which you can run task requests. Each account receives a default cluster the first time you use the Amazon ECS service, but you may also create other clusters. Clusters may contain more than one instance type simultaneously. */
		cluster?: Cluster;
	}
	export interface PutClusterCapacityProvidersResponseFormProperties {
	}
	export function CreatePutClusterCapacityProvidersResponseFormGroup() {
		return new FormGroup<PutClusterCapacityProvidersResponseFormProperties>({
		});

	}

	export interface PutClusterCapacityProvidersRequest {

		/** Required */
		cluster: string;

		/** Required */
		capacityProviders: Array<string>;

		/** Required */
		defaultCapacityProviderStrategy: Array<CapacityProviderStrategyItem>;
	}
	export interface PutClusterCapacityProvidersRequestFormProperties {

		/** Required */
		cluster: FormControl<string | null | undefined>,
	}
	export function CreatePutClusterCapacityProvidersRequestFormGroup() {
		return new FormGroup<PutClusterCapacityProvidersRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
		});

	}

	export interface RegisterContainerInstanceResponse {

		/** An EC2 instance that is running the Amazon ECS agent and has been registered with a cluster. */
		containerInstance?: ContainerInstance;
	}
	export interface RegisterContainerInstanceResponseFormProperties {
	}
	export function CreateRegisterContainerInstanceResponseFormGroup() {
		return new FormGroup<RegisterContainerInstanceResponseFormProperties>({
		});

	}

	export interface RegisterContainerInstanceRequest {
		cluster?: string | null;
		instanceIdentityDocument?: string | null;
		instanceIdentityDocumentSignature?: string | null;
		totalResources?: Array<Resource>;

		/** The Docker and Amazon ECS container agent version information about a container instance. */
		versionInfo?: VersionInfo;
		containerInstanceArn?: string | null;
		attributes?: Array<Attribute>;
		platformDevices?: Array<PlatformDevice>;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}
	export interface RegisterContainerInstanceRequestFormProperties {
		cluster: FormControl<string | null | undefined>,
		instanceIdentityDocument: FormControl<string | null | undefined>,
		instanceIdentityDocumentSignature: FormControl<string | null | undefined>,
		containerInstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateRegisterContainerInstanceRequestFormGroup() {
		return new FormGroup<RegisterContainerInstanceRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			instanceIdentityDocument: new FormControl<string | null | undefined>(undefined),
			instanceIdentityDocumentSignature: new FormControl<string | null | undefined>(undefined),
			containerInstanceArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The devices that are available on the container instance. The only supported device type is a GPU. */
	export interface PlatformDevice {

		/** Required */
		id: string;

		/** Required */
		type: PlatformDeviceType;
	}

	/** The devices that are available on the container instance. The only supported device type is a GPU. */
	export interface PlatformDeviceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<PlatformDeviceType | null | undefined>,
	}
	export function CreatePlatformDeviceFormGroup() {
		return new FormGroup<PlatformDeviceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<PlatformDeviceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PlatformDeviceType { GPU = 0 }

	export interface RegisterTaskDefinitionResponse {

		/** The details of a task definition which describes the container and volume definitions of an Amazon Elastic Container Service task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task. */
		taskDefinition?: TaskDefinition;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}
	export interface RegisterTaskDefinitionResponseFormProperties {
	}
	export function CreateRegisterTaskDefinitionResponseFormGroup() {
		return new FormGroup<RegisterTaskDefinitionResponseFormProperties>({
		});

	}

	export interface RegisterTaskDefinitionRequest {

		/** Required */
		family: string;
		taskRoleArn?: string | null;
		executionRoleArn?: string | null;
		networkMode?: TaskDefinitionNetworkMode | null;

		/** Required */
		containerDefinitions: Array<ContainerDefinition>;
		volumes?: Array<Volume>;
		placementConstraints?: Array<TaskDefinitionPlacementConstraint>;
		requiresCompatibilities?: Array<Compatibility>;
		cpu?: string | null;
		memory?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
		pidMode?: TaskDefinitionPidMode | null;
		ipcMode?: TaskDefinitionIpcMode | null;

		/** <p>The configuration details for the App Mesh proxy.</p> <p>For tasks using the EC2 launch type, the container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the <code>ecs-init</code> package to enable a proxy configuration. If your container instances are launched from the Amazon ECS-optimized AMI version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>For tasks using the Fargate launch type, the task or service requires platform version 1.3.0 or later.</p> */
		proxyConfiguration?: ProxyConfiguration;
		inferenceAccelerators?: Array<InferenceAccelerator>;
	}
	export interface RegisterTaskDefinitionRequestFormProperties {

		/** Required */
		family: FormControl<string | null | undefined>,
		taskRoleArn: FormControl<string | null | undefined>,
		executionRoleArn: FormControl<string | null | undefined>,
		networkMode: FormControl<TaskDefinitionNetworkMode | null | undefined>,
		cpu: FormControl<string | null | undefined>,
		memory: FormControl<string | null | undefined>,
		pidMode: FormControl<TaskDefinitionPidMode | null | undefined>,
		ipcMode: FormControl<TaskDefinitionIpcMode | null | undefined>,
	}
	export function CreateRegisterTaskDefinitionRequestFormGroup() {
		return new FormGroup<RegisterTaskDefinitionRequestFormProperties>({
			family: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			taskRoleArn: new FormControl<string | null | undefined>(undefined),
			executionRoleArn: new FormControl<string | null | undefined>(undefined),
			networkMode: new FormControl<TaskDefinitionNetworkMode | null | undefined>(undefined),
			cpu: new FormControl<string | null | undefined>(undefined),
			memory: new FormControl<string | null | undefined>(undefined),
			pidMode: new FormControl<TaskDefinitionPidMode | null | undefined>(undefined),
			ipcMode: new FormControl<TaskDefinitionIpcMode | null | undefined>(undefined),
		});

	}

	export interface RunTaskResponse {
		tasks?: Array<Task_>;
		failures?: Array<Failure>;
	}
	export interface RunTaskResponseFormProperties {
	}
	export function CreateRunTaskResponseFormGroup() {
		return new FormGroup<RunTaskResponseFormProperties>({
		});

	}

	export interface RunTaskRequest {
		capacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
		cluster?: string | null;
		count?: number | null;
		enableECSManagedTags?: boolean | null;
		group?: string | null;
		launchType?: ServiceLaunchType | null;

		/** An object representing the network configuration for a task or service. */
		networkConfiguration?: NetworkConfiguration;

		/** The overrides associated with a task. */
		overrides?: TaskOverride;
		placementConstraints?: Array<PlacementConstraint>;
		placementStrategy?: Array<PlacementStrategy>;
		platformVersion?: string | null;
		propagateTags?: ServicePropagateTags | null;
		referenceId?: string | null;
		startedBy?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;

		/** Required */
		taskDefinition: string;
	}
	export interface RunTaskRequestFormProperties {
		cluster: FormControl<string | null | undefined>,
		count: FormControl<number | null | undefined>,
		enableECSManagedTags: FormControl<boolean | null | undefined>,
		group: FormControl<string | null | undefined>,
		launchType: FormControl<ServiceLaunchType | null | undefined>,
		platformVersion: FormControl<string | null | undefined>,
		propagateTags: FormControl<ServicePropagateTags | null | undefined>,
		referenceId: FormControl<string | null | undefined>,
		startedBy: FormControl<string | null | undefined>,

		/** Required */
		taskDefinition: FormControl<string | null | undefined>,
	}
	export function CreateRunTaskRequestFormGroup() {
		return new FormGroup<RunTaskRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			enableECSManagedTags: new FormControl<boolean | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			launchType: new FormControl<ServiceLaunchType | null | undefined>(undefined),
			platformVersion: new FormControl<string | null | undefined>(undefined),
			propagateTags: new FormControl<ServicePropagateTags | null | undefined>(undefined),
			referenceId: new FormControl<string | null | undefined>(undefined),
			startedBy: new FormControl<string | null | undefined>(undefined),
			taskDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BlockedException {
	}
	export interface BlockedExceptionFormProperties {
	}
	export function CreateBlockedExceptionFormGroup() {
		return new FormGroup<BlockedExceptionFormProperties>({
		});

	}

	export interface StartTaskResponse {
		tasks?: Array<Task_>;
		failures?: Array<Failure>;
	}
	export interface StartTaskResponseFormProperties {
	}
	export function CreateStartTaskResponseFormGroup() {
		return new FormGroup<StartTaskResponseFormProperties>({
		});

	}

	export interface StartTaskRequest {
		cluster?: string | null;

		/** Required */
		containerInstances: Array<string>;
		enableECSManagedTags?: boolean | null;
		group?: string | null;

		/** An object representing the network configuration for a task or service. */
		networkConfiguration?: NetworkConfiguration;

		/** The overrides associated with a task. */
		overrides?: TaskOverride;
		propagateTags?: ServicePropagateTags | null;
		referenceId?: string | null;
		startedBy?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;

		/** Required */
		taskDefinition: string;
	}
	export interface StartTaskRequestFormProperties {
		cluster: FormControl<string | null | undefined>,
		enableECSManagedTags: FormControl<boolean | null | undefined>,
		group: FormControl<string | null | undefined>,
		propagateTags: FormControl<ServicePropagateTags | null | undefined>,
		referenceId: FormControl<string | null | undefined>,
		startedBy: FormControl<string | null | undefined>,

		/** Required */
		taskDefinition: FormControl<string | null | undefined>,
	}
	export function CreateStartTaskRequestFormGroup() {
		return new FormGroup<StartTaskRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			enableECSManagedTags: new FormControl<boolean | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			propagateTags: new FormControl<ServicePropagateTags | null | undefined>(undefined),
			referenceId: new FormControl<string | null | undefined>(undefined),
			startedBy: new FormControl<string | null | undefined>(undefined),
			taskDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopTaskResponse {

		/** Details on a task in a cluster. */
		task?: Task_;
	}
	export interface StopTaskResponseFormProperties {
	}
	export function CreateStopTaskResponseFormGroup() {
		return new FormGroup<StopTaskResponseFormProperties>({
		});

	}

	export interface StopTaskRequest {
		cluster?: string | null;

		/** Required */
		task: string;
		reason?: string | null;
	}
	export interface StopTaskRequestFormProperties {
		cluster: FormControl<string | null | undefined>,

		/** Required */
		task: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateStopTaskRequestFormGroup() {
		return new FormGroup<StopTaskRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			task: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubmitAttachmentStateChangesResponse {
		acknowledgment?: string | null;
	}
	export interface SubmitAttachmentStateChangesResponseFormProperties {
		acknowledgment: FormControl<string | null | undefined>,
	}
	export function CreateSubmitAttachmentStateChangesResponseFormGroup() {
		return new FormGroup<SubmitAttachmentStateChangesResponseFormProperties>({
			acknowledgment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubmitAttachmentStateChangesRequest {
		cluster?: string | null;

		/** Required */
		attachments: Array<AttachmentStateChange>;
	}
	export interface SubmitAttachmentStateChangesRequestFormProperties {
		cluster: FormControl<string | null | undefined>,
	}
	export function CreateSubmitAttachmentStateChangesRequestFormGroup() {
		return new FormGroup<SubmitAttachmentStateChangesRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing a change in state for a task attachment. */
	export interface AttachmentStateChange {

		/** Required */
		attachmentArn: string;

		/** Required */
		status: string;
	}

	/** An object representing a change in state for a task attachment. */
	export interface AttachmentStateChangeFormProperties {

		/** Required */
		attachmentArn: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentStateChangeFormGroup() {
		return new FormGroup<AttachmentStateChangeFormProperties>({
			attachmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SubmitContainerStateChangeResponse {
		acknowledgment?: string | null;
	}
	export interface SubmitContainerStateChangeResponseFormProperties {
		acknowledgment: FormControl<string | null | undefined>,
	}
	export function CreateSubmitContainerStateChangeResponseFormGroup() {
		return new FormGroup<SubmitContainerStateChangeResponseFormProperties>({
			acknowledgment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubmitContainerStateChangeRequest {
		cluster?: string | null;
		task?: string | null;
		containerName?: string | null;
		runtimeId?: string | null;
		status?: string | null;
		exitCode?: number | null;
		reason?: string | null;
		networkBindings?: Array<NetworkBinding>;
	}
	export interface SubmitContainerStateChangeRequestFormProperties {
		cluster: FormControl<string | null | undefined>,
		task: FormControl<string | null | undefined>,
		containerName: FormControl<string | null | undefined>,
		runtimeId: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		exitCode: FormControl<number | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateSubmitContainerStateChangeRequestFormGroup() {
		return new FormGroup<SubmitContainerStateChangeRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			task: new FormControl<string | null | undefined>(undefined),
			containerName: new FormControl<string | null | undefined>(undefined),
			runtimeId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubmitTaskStateChangeResponse {
		acknowledgment?: string | null;
	}
	export interface SubmitTaskStateChangeResponseFormProperties {
		acknowledgment: FormControl<string | null | undefined>,
	}
	export function CreateSubmitTaskStateChangeResponseFormGroup() {
		return new FormGroup<SubmitTaskStateChangeResponseFormProperties>({
			acknowledgment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubmitTaskStateChangeRequest {
		cluster?: string | null;
		task?: string | null;
		status?: string | null;
		reason?: string | null;
		containers?: Array<ContainerStateChange>;
		attachments?: Array<AttachmentStateChange>;
		pullStartedAt?: Date | null;
		pullStoppedAt?: Date | null;
		executionStoppedAt?: Date | null;
	}
	export interface SubmitTaskStateChangeRequestFormProperties {
		cluster: FormControl<string | null | undefined>,
		task: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
		pullStartedAt: FormControl<Date | null | undefined>,
		pullStoppedAt: FormControl<Date | null | undefined>,
		executionStoppedAt: FormControl<Date | null | undefined>,
	}
	export function CreateSubmitTaskStateChangeRequestFormGroup() {
		return new FormGroup<SubmitTaskStateChangeRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			task: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			pullStartedAt: new FormControl<Date | null | undefined>(undefined),
			pullStoppedAt: new FormControl<Date | null | undefined>(undefined),
			executionStoppedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** An object representing a change in state for a container. */
	export interface ContainerStateChange {
		containerName?: string | null;
		imageDigest?: string | null;
		runtimeId?: string | null;
		exitCode?: number | null;
		networkBindings?: Array<NetworkBinding>;
		reason?: string | null;
		status?: string | null;
	}

	/** An object representing a change in state for a container. */
	export interface ContainerStateChangeFormProperties {
		containerName: FormControl<string | null | undefined>,
		imageDigest: FormControl<string | null | undefined>,
		runtimeId: FormControl<string | null | undefined>,
		exitCode: FormControl<number | null | undefined>,
		reason: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateContainerStateChangeFormGroup() {
		return new FormGroup<ContainerStateChangeFormProperties>({
			containerName: new FormControl<string | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
			runtimeId: new FormControl<string | null | undefined>(undefined),
			exitCode: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		resourceArn: string;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		resourceArn: string;

		/** Required */
		tagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateClusterSettingsResponse {

		/** A regional grouping of one or more container instances on which you can run task requests. Each account receives a default cluster the first time you use the Amazon ECS service, but you may also create other clusters. Clusters may contain more than one instance type simultaneously. */
		cluster?: Cluster;
	}
	export interface UpdateClusterSettingsResponseFormProperties {
	}
	export function CreateUpdateClusterSettingsResponseFormGroup() {
		return new FormGroup<UpdateClusterSettingsResponseFormProperties>({
		});

	}

	export interface UpdateClusterSettingsRequest {

		/** Required */
		cluster: string;

		/** Required */
		settings: Array<ClusterSetting>;
	}
	export interface UpdateClusterSettingsRequestFormProperties {

		/** Required */
		cluster: FormControl<string | null | undefined>,
	}
	export function CreateUpdateClusterSettingsRequestFormGroup() {
		return new FormGroup<UpdateClusterSettingsRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateContainerAgentResponse {

		/** An EC2 instance that is running the Amazon ECS agent and has been registered with a cluster. */
		containerInstance?: ContainerInstance;
	}
	export interface UpdateContainerAgentResponseFormProperties {
	}
	export function CreateUpdateContainerAgentResponseFormGroup() {
		return new FormGroup<UpdateContainerAgentResponseFormProperties>({
		});

	}

	export interface UpdateContainerAgentRequest {
		cluster?: string | null;

		/** Required */
		containerInstance: string;
	}
	export interface UpdateContainerAgentRequestFormProperties {
		cluster: FormControl<string | null | undefined>,

		/** Required */
		containerInstance: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContainerAgentRequestFormGroup() {
		return new FormGroup<UpdateContainerAgentRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			containerInstance: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NoUpdateAvailableException {
	}
	export interface NoUpdateAvailableExceptionFormProperties {
	}
	export function CreateNoUpdateAvailableExceptionFormGroup() {
		return new FormGroup<NoUpdateAvailableExceptionFormProperties>({
		});

	}

	export interface MissingVersionException {
	}
	export interface MissingVersionExceptionFormProperties {
	}
	export function CreateMissingVersionExceptionFormGroup() {
		return new FormGroup<MissingVersionExceptionFormProperties>({
		});

	}

	export interface UpdateContainerInstancesStateResponse {
		containerInstances?: Array<ContainerInstance>;
		failures?: Array<Failure>;
	}
	export interface UpdateContainerInstancesStateResponseFormProperties {
	}
	export function CreateUpdateContainerInstancesStateResponseFormGroup() {
		return new FormGroup<UpdateContainerInstancesStateResponseFormProperties>({
		});

	}

	export interface UpdateContainerInstancesStateRequest {
		cluster?: string | null;

		/** Required */
		containerInstances: Array<string>;

		/** Required */
		status: ListContainerInstancesRequestStatus;
	}
	export interface UpdateContainerInstancesStateRequestFormProperties {
		cluster: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ListContainerInstancesRequestStatus | null | undefined>,
	}
	export function CreateUpdateContainerInstancesStateRequestFormGroup() {
		return new FormGroup<UpdateContainerInstancesStateRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ListContainerInstancesRequestStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateServiceResponse {

		/** Details on a service within a cluster */
		service?: Service;
	}
	export interface UpdateServiceResponseFormProperties {
	}
	export function CreateUpdateServiceResponseFormGroup() {
		return new FormGroup<UpdateServiceResponseFormProperties>({
		});

	}

	export interface UpdateServiceRequest {
		cluster?: string | null;

		/** Required */
		service: string;
		desiredCount?: number | null;
		taskDefinition?: string | null;
		capacityProviderStrategy?: Array<CapacityProviderStrategyItem>;

		/** Optional deployment parameters that control how many tasks run during a deployment and the ordering of stopping and starting tasks. */
		deploymentConfiguration?: DeploymentConfiguration;

		/** An object representing the network configuration for a task or service. */
		networkConfiguration?: NetworkConfiguration;
		placementConstraints?: Array<PlacementConstraint>;
		placementStrategy?: Array<PlacementStrategy>;
		platformVersion?: string | null;
		forceNewDeployment?: boolean | null;
		healthCheckGracePeriodSeconds?: number | null;
	}
	export interface UpdateServiceRequestFormProperties {
		cluster: FormControl<string | null | undefined>,

		/** Required */
		service: FormControl<string | null | undefined>,
		desiredCount: FormControl<number | null | undefined>,
		taskDefinition: FormControl<string | null | undefined>,
		platformVersion: FormControl<string | null | undefined>,
		forceNewDeployment: FormControl<boolean | null | undefined>,
		healthCheckGracePeriodSeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdateServiceRequestFormGroup() {
		return new FormGroup<UpdateServiceRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			desiredCount: new FormControl<number | null | undefined>(undefined),
			taskDefinition: new FormControl<string | null | undefined>(undefined),
			platformVersion: new FormControl<string | null | undefined>(undefined),
			forceNewDeployment: new FormControl<boolean | null | undefined>(undefined),
			healthCheckGracePeriodSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateServicePrimaryTaskSetResponse {

		/** Information about a set of Amazon ECS tasks in either an AWS CodeDeploy or an <code>EXTERNAL</code> deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. */
		taskSet?: TaskSet;
	}
	export interface UpdateServicePrimaryTaskSetResponseFormProperties {
	}
	export function CreateUpdateServicePrimaryTaskSetResponseFormGroup() {
		return new FormGroup<UpdateServicePrimaryTaskSetResponseFormProperties>({
		});

	}

	export interface UpdateServicePrimaryTaskSetRequest {

		/** Required */
		cluster: string;

		/** Required */
		service: string;

		/** Required */
		primaryTaskSet: string;
	}
	export interface UpdateServicePrimaryTaskSetRequestFormProperties {

		/** Required */
		cluster: FormControl<string | null | undefined>,

		/** Required */
		service: FormControl<string | null | undefined>,

		/** Required */
		primaryTaskSet: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServicePrimaryTaskSetRequestFormGroup() {
		return new FormGroup<UpdateServicePrimaryTaskSetRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			primaryTaskSet: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateTaskSetResponse {

		/** Information about a set of Amazon ECS tasks in either an AWS CodeDeploy or an <code>EXTERNAL</code> deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. */
		taskSet?: TaskSet;
	}
	export interface UpdateTaskSetResponseFormProperties {
	}
	export function CreateUpdateTaskSetResponseFormGroup() {
		return new FormGroup<UpdateTaskSetResponseFormProperties>({
		});

	}

	export interface UpdateTaskSetRequest {

		/** Required */
		cluster: string;

		/** Required */
		service: string;

		/** Required */
		taskSet: string;

		/**
		 * A floating-point percentage of the desired number of tasks to place and keep running in the task set.
		 * Required
		 */
		scale: Scale;
	}
	export interface UpdateTaskSetRequestFormProperties {

		/** Required */
		cluster: FormControl<string | null | undefined>,

		/** Required */
		service: FormControl<string | null | undefined>,

		/** Required */
		taskSet: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTaskSetRequestFormGroup() {
		return new FormGroup<UpdateTaskSetRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			taskSet: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AgentUpdateStatus { PENDING = 0, STAGING = 1, STAGED = 2, UPDATING = 3, UPDATED = 4, FAILED = 5 }

	export enum AssignPublicIp { ENABLED = 0, DISABLED = 1 }

	export enum TargetType { container_instance = 0 }

	export enum ManagedTerminationProtection { ENABLED = 0, DISABLED = 1 }

	export enum Connectivity { CONNECTED = 0, DISCONNECTED = 1 }

	export enum HealthStatus { HEALTHY = 0, UNHEALTHY = 1, UNKNOWN = 2 }

	export enum ContainerCondition { START = 0, COMPLETE = 1, SUCCESS = 2, HEALTHY = 3 }

	export enum ContainerInstanceStatus { ACTIVE = 0, DRAINING = 1, REGISTERING = 2, DEREGISTERING = 3, REGISTRATION_FAILED = 4 }

	export enum LaunchType { EC2 = 0, FARGATE = 1 }

	export enum SchedulingStrategy { REPLICA = 0, DAEMON = 1 }

	export enum PropagateTags { TASK_DEFINITION = 0, SERVICE = 1 }

	export enum DesiredStatus { RUNNING = 0, PENDING = 1, STOPPED = 2 }

	export enum Scope { task = 0, shared = 1 }

	export enum EFSAuthorizationConfigIAM { ENABLED = 0, DISABLED = 1 }

	export enum EFSTransitEncryption { ENABLED = 0, DISABLED = 1 }

	export enum IpcMode { host = 0, task = 1, none = 2 }

	export enum TaskDefinitionFamilyStatus { ACTIVE = 0, INACTIVE = 1, ALL = 2 }

	export enum SortOrder { ASC = 0, DESC = 1 }

	export enum LogDriver { json_file = 0, syslog = 1, journald = 2, gelf = 3, fluentd = 4, awslogs = 5, splunk = 6, awsfirelens = 7 }

	export enum TransportProtocol { tcp = 0, udp = 1 }

	export enum NetworkMode { bridge = 0, host = 1, awsvpc = 2, none = 3 }

	export enum PidMode { host = 0, task = 1 }

	export enum ResourceType { GPU = 0, InferenceAccelerator = 1 }

	export enum StabilityStatus { STEADY_STATE = 0, STABILIZING = 1 }

	export enum TaskStopCode { TaskFailedToStart = 0, EssentialContainerExited = 1, UserInitiated = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a new capacity provider. Capacity providers are associated with an Amazon ECS cluster and are used in capacity provider strategies to facilitate cluster auto scaling.</p> <p>Only capacity providers using an Auto Scaling group can be created. Amazon ECS tasks on AWS Fargate use the <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers which are already created and available to all accounts in Regions supported by AWS Fargate.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCapacityProvider
		 * @return {CreateCapacityProviderResponse} Success
		 */
		CreateCapacityProvider(requestBody: CreateCapacityProviderRequest): Observable<CreateCapacityProviderResponse> {
			return this.http.post<CreateCapacityProviderResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCapacityProvider', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new Amazon ECS cluster. By default, your account receives a <code>default</code> cluster when you launch your first container instance. However, you can create your own cluster with a unique name with the <code>CreateCluster</code> action.</p> <note> <p>When you call the <a>CreateCluster</a> API operation, Amazon ECS attempts to create the Amazon ECS service-linked role for your account so that required resources in other AWS services can be managed on your behalf. However, if the IAM user that makes the call does not have permissions to create the service-linked role, it is not created. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using Service-Linked Roles for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCluster
		 * @return {CreateClusterResponse} Success
		 */
		CreateCluster(requestBody: CreateClusterRequest): Observable<CreateClusterResponse> {
			return this.http.post<CreateClusterResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Runs and maintains a desired number of tasks from a specified task definition. If the number of tasks running in a service drops below the <code>desiredCount</code>, Amazon ECS runs another copy of the task in the specified cluster. To update an existing service, see the UpdateService action.</p> <p>In addition to maintaining the desired count of tasks in your service, you can optionally run your service behind one or more load balancers. The load balancers distribute traffic across the tasks that are associated with the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html">Service Load Balancing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Tasks for services that <i>do not</i> use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that <i>do</i> use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and the container instance that they're hosted on is reported as healthy by the load balancer.</p> <p>There are two service scheduler strategies available:</p> <ul> <li> <p> <code>REPLICA</code> - The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service Scheduler Concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p> <code>DAEMON</code> - The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks and will stop tasks that do not meet the placement constraints. When using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service Scheduler Concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> </ul> <p>You can optionally specify a deployment configuration for your service. The deployment is triggered by changing properties, such as the task definition or the desired count of a service, with an <a>UpdateService</a> operation. The default value for a replica service for <code>minimumHealthyPercent</code> is 100%. The default value for a daemon service for <code>minimumHealthyPercent</code> is 0%.</p> <p>If a service is using the <code>ECS</code> deployment controller, the minimum healthy percent represents a lower limit on the number of tasks in a service that must remain in the <code>RUNNING</code> state during a deployment, as a percentage of the desired number of tasks (rounded up to the nearest integer), and while any container instances are in the <code>DRAINING</code> state if the service contains tasks using the EC2 launch type. This parameter enables you to deploy without using additional cluster capacity. For example, if your service has a desired number of four tasks and a minimum healthy percent of 50%, the scheduler might stop two existing tasks to free up cluster capacity before starting two new tasks. Tasks for services that <i>do not</i> use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that <i>do</i> use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and they're reported as healthy by the load balancer. The default value for minimum healthy percent is 100%.</p> <p>If a service is using the <code>ECS</code> deployment controller, the <b>maximum percent</b> parameter represents an upper limit on the number of tasks in a service that are allowed in the <code>RUNNING</code> or <code>PENDING</code> state during a deployment, as a percentage of the desired number of tasks (rounded down to the nearest integer), and while any container instances are in the <code>DRAINING</code> state if the service contains tasks using the EC2 launch type. This parameter enables you to define the deployment batch size. For example, if your service has a desired number of four tasks and a maximum percent value of 200%, the scheduler may start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default value for maximum percent is 200%.</p> <p>If a service is using either the <code>CODE_DEPLOY</code> or <code>EXTERNAL</code> deployment controller types and tasks that use the EC2 launch type, the <b>minimum healthy percent</b> and <b>maximum percent</b> values are used only to define the lower and upper limit on the number of the tasks in the service that remain in the <code>RUNNING</code> state while the container instances are in the <code>DRAINING</code> state. If the tasks in the service use the Fargate launch type, the minimum healthy percent and maximum percent values aren't used, although they're currently visible when describing your service.</p> <p>When creating a service that uses the <code>EXTERNAL</code> deployment controller, you can specify only parameters that aren't controlled at the task set level. The only required parameter is the service name. You control your services using the <a>CreateTaskSet</a> operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When the service scheduler launches new tasks, it determines task placement in your cluster using the following logic:</p> <ul> <li> <p>Determine which of the container instances in your cluster can support your service's task definition (for example, they have the required CPU, memory, ports, and container instance attributes).</p> </li> <li> <p>By default, the service scheduler attempts to balance tasks across Availability Zones in this manner (although you can choose a different placement strategy) with the <code>placementStrategy</code> parameter):</p> <ul> <li> <p>Sort the valid container instances, giving priority to instances that have the fewest number of running tasks for this service in their respective Availability Zone. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.</p> </li> <li> <p>Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.</p> </li> </ul> </li> </ul>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateService
		 * @return {CreateServiceResponse} Success
		 */
		CreateService(requestBody: CreateServiceRequest): Observable<CreateServiceResponse> {
			return this.http.post<CreateServiceResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a task set in the specified cluster and service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateTaskSet
		 * @return {CreateTaskSetResponse} Success
		 */
		CreateTaskSet(requestBody: CreateTaskSetRequest): Observable<CreateTaskSetResponse> {
			return this.http.post<CreateTaskSetResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateTaskSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables an account setting for a specified IAM user, IAM role, or the root user for an account.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAccountSetting
		 * @return {DeleteAccountSettingResponse} Success
		 */
		DeleteAccountSetting(requestBody: DeleteAccountSettingRequest): Observable<DeleteAccountSettingResponse> {
			return this.http.post<DeleteAccountSettingResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAccountSetting', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes one or more custom attributes from an Amazon ECS resource.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAttributes
		 * @return {DeleteAttributesResponse} Success
		 */
		DeleteAttributes(requestBody: DeleteAttributesRequest): Observable<DeleteAttributesResponse> {
			return this.http.post<DeleteAttributesResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified cluster. The cluster will transition to the <code>INACTIVE</code> state. Clusters with an <code>INACTIVE</code> status may remain discoverable in your account for a period of time. However, this behavior is subject to change in the future, so you should not rely on <code>INACTIVE</code> clusters persisting.</p> <p>You must deregister all container instances from this cluster before you may delete it. You can list the container instances in a cluster with <a>ListContainerInstances</a> and deregister them with <a>DeregisterContainerInstance</a>.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCluster
		 * @return {DeleteClusterResponse} Success
		 */
		DeleteCluster(requestBody: DeleteClusterRequest): Observable<DeleteClusterResponse> {
			return this.http.post<DeleteClusterResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a specified service within a cluster. You can delete a service if you have no running tasks in it and the desired task count is zero. If the service is actively maintaining tasks, you cannot delete it, and you must update the service to a desired task count of zero. For more information, see <a>UpdateService</a>.</p> <note> <p>When you delete a service, if there are still running tasks that require cleanup, the service status moves from <code>ACTIVE</code> to <code>DRAINING</code>, and the service is no longer visible in the console or in the <a>ListServices</a> API operation. After all tasks have transitioned to either <code>STOPPING</code> or <code>STOPPED</code> status, the service status moves from <code>DRAINING</code> to <code>INACTIVE</code>. Services in the <code>DRAINING</code> or <code>INACTIVE</code> status can still be viewed with the <a>DescribeServices</a> API operation. However, in the future, <code>INACTIVE</code> services may be cleaned up and purged from Amazon ECS record keeping, and <a>DescribeServices</a> calls on those services return a <code>ServiceNotFoundException</code> error.</p> </note> <important> <p>If you attempt to create a new service with the same name as an existing service in either <code>ACTIVE</code> or <code>DRAINING</code> status, you receive an error.</p> </important>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteService
		 * @return {DeleteServiceResponse} Success
		 */
		DeleteService(requestBody: DeleteServiceRequest): Observable<DeleteServiceResponse> {
			return this.http.post<DeleteServiceResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specified task set within a service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskSet
		 * @return {DeleteTaskSetResponse} Success
		 */
		DeleteTaskSet(requestBody: DeleteTaskSetRequest): Observable<DeleteTaskSetResponse> {
			return this.http.post<DeleteTaskSetResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deregisters an Amazon ECS container instance from the specified cluster. This instance is no longer available to run tasks.</p> <p>If you intend to use the container instance for some other purpose after deregistration, you should stop all of the tasks running on the container instance before deregistration. That prevents any orphaned tasks from consuming resources.</p> <p>Deregistering a container instance removes the instance from a cluster, but it does not terminate the EC2 instance. If you are finished using the instance, be sure to terminate it in the Amazon EC2 console to stop billing.</p> <note> <p>If you terminate a running container instance, Amazon ECS automatically deregisters the instance from your cluster (stopped container instances or instances with disconnected agents are not automatically deregistered when terminated).</p> </note>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance
		 * @return {DeregisterContainerInstanceResponse} Success
		 */
		DeregisterContainerInstance(requestBody: DeregisterContainerInstanceRequest): Observable<DeregisterContainerInstanceResponse> {
			return this.http.post<DeregisterContainerInstanceResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deregisters the specified task definition by family and revision. Upon deregistration, the task definition is marked as <code>INACTIVE</code>. Existing tasks and services that reference an <code>INACTIVE</code> task definition continue to run without disruption. Existing services that reference an <code>INACTIVE</code> task definition can still scale up or down by modifying the service's desired count.</p> <p>You cannot use an <code>INACTIVE</code> task definition to run new tasks or create new services, and you cannot update an existing service to reference an <code>INACTIVE</code> task definition. However, there may be up to a 10-minute window following deregistration where these restrictions have not yet taken effect.</p> <note> <p>At this time, <code>INACTIVE</code> task definitions remain discoverable in your account indefinitely. However, this behavior is subject to change in the future, so you should not rely on <code>INACTIVE</code> task definitions persisting beyond the lifecycle of any associated tasks and services.</p> </note>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition
		 * @return {DeregisterTaskDefinitionResponse} Success
		 */
		DeregisterTaskDefinition(requestBody: DeregisterTaskDefinitionRequest): Observable<DeregisterTaskDefinitionResponse> {
			return this.http.post<DeregisterTaskDefinitionResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes one or more of your capacity providers.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders
		 * @return {DescribeCapacityProvidersResponse} Success
		 */
		DescribeCapacityProviders(requestBody: DescribeCapacityProvidersRequest): Observable<DescribeCapacityProvidersResponse> {
			return this.http.post<DescribeCapacityProvidersResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes one or more of your clusters.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeClusters
		 * @return {DescribeClustersResponse} Success
		 */
		DescribeClusters(requestBody: DescribeClustersRequest): Observable<DescribeClustersResponse> {
			return this.http.post<DescribeClustersResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeClusters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes Amazon Elastic Container Service container instances. Returns metadata about registered and remaining resources on each container instance requested.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeContainerInstances
		 * @return {DescribeContainerInstancesResponse} Success
		 */
		DescribeContainerInstances(requestBody: DescribeContainerInstancesRequest): Observable<DescribeContainerInstancesResponse> {
			return this.http.post<DescribeContainerInstancesResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeContainerInstances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the specified services running in your cluster.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeServices
		 * @return {DescribeServicesResponse} Success
		 */
		DescribeServices(requestBody: DescribeServicesRequest): Observable<DescribeServicesResponse> {
			return this.http.post<DescribeServicesResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeServices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a task definition. You can specify a <code>family</code> and <code>revision</code> to find information about a specific task definition, or you can simply specify the family to find the latest <code>ACTIVE</code> revision in that family.</p> <note> <p>You can only describe <code>INACTIVE</code> task definitions while an active task or service references them.</p> </note>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition
		 * @return {DescribeTaskDefinitionResponse} Success
		 */
		DescribeTaskDefinition(requestBody: DescribeTaskDefinitionRequest): Observable<DescribeTaskDefinitionResponse> {
			return this.http.post<DescribeTaskDefinitionResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the task sets in the specified cluster and service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskSets
		 * @return {DescribeTaskSetsResponse} Success
		 */
		DescribeTaskSets(requestBody: DescribeTaskSetsRequest): Observable<DescribeTaskSetsResponse> {
			return this.http.post<DescribeTaskSetsResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a specified task or tasks.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTasks
		 * @return {DescribeTasksResponse} Success
		 */
		DescribeTasks(requestBody: DescribeTasksRequest): Observable<DescribeTasksResponse> {
			return this.http.post<DescribeTasksResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Returns an endpoint for the Amazon ECS agent to poll for updates.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint
		 * @return {DiscoverPollEndpointResponse} Success
		 */
		DiscoverPollEndpoint(requestBody: DiscoverPollEndpointRequest): Observable<DiscoverPollEndpointResponse> {
			return this.http.post<DiscoverPollEndpointResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the account settings for a specified principal.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAccountSettings
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAccountSettingsResponse} Success
		 */
		ListAccountSettings(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAccountSettingsRequest): Observable<ListAccountSettingsResponse> {
			return this.http.post<ListAccountSettingsResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAccountSettings?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the attributes for Amazon ECS resources within a specified target type and cluster. When you specify a target type and cluster, <code>ListAttributes</code> returns a list of attribute objects, one for each attribute on each resource. You can filter the list of results to a single attribute name to only return results that have that name. You can also filter the results by attribute name and value, for example, to see which container instances in a cluster are running a Linux AMI (<code>ecs.os-type=linux</code>).
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAttributes
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAttributesResponse} Success
		 */
		ListAttributes(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAttributesRequest): Observable<ListAttributesResponse> {
			return this.http.post<ListAttributesResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAttributes?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of existing clusters.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListClusters
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListClustersResponse} Success
		 */
		ListClusters(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListClustersRequest): Observable<ListClustersResponse> {
			return this.http.post<ListClustersResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListClusters?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of container instances in a specified cluster. You can filter the results of a <code>ListContainerInstances</code> operation with cluster query language statements inside the <code>filter</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListContainerInstances
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListContainerInstancesResponse} Success
		 */
		ListContainerInstances(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListContainerInstancesRequest): Observable<ListContainerInstancesResponse> {
			return this.http.post<ListContainerInstancesResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListContainerInstances?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the services that are running in a specified cluster.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServices
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListServicesResponse} Success
		 */
		ListServices(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListServicesRequest): Observable<ListServicesResponse> {
			return this.http.post<ListServicesResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServices?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the tags for an Amazon ECS resource.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of task definition families that are registered to your account (which may include task definition families that no longer have any <code>ACTIVE</code> task definition revisions).</p> <p>You can filter out task definition families that do not contain any <code>ACTIVE</code> task definition revisions by setting the <code>status</code> parameter to <code>ACTIVE</code>. You can also filter the results with the <code>familyPrefix</code> parameter.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTaskDefinitionFamiliesResponse} Success
		 */
		ListTaskDefinitionFamilies(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTaskDefinitionFamiliesRequest): Observable<ListTaskDefinitionFamiliesResponse> {
			return this.http.post<ListTaskDefinitionFamiliesResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of task definitions that are registered to your account. You can filter the results by family name with the <code>familyPrefix</code> parameter or by status with the <code>status</code> parameter.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTaskDefinitionsResponse} Success
		 */
		ListTaskDefinitions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTaskDefinitionsRequest): Observable<ListTaskDefinitionsResponse> {
			return this.http.post<ListTaskDefinitionsResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of tasks for a specified cluster. You can filter the results by family name, by a particular container instance, or by the desired status of the task with the <code>family</code>, <code>containerInstance</code>, and <code>desiredStatus</code> parameters.</p> <p>Recently stopped tasks might appear in the returned results. Currently, stopped tasks appear in the returned results for at least one hour. </p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTasks
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTasksResponse} Success
		 */
		ListTasks(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTasksRequest): Observable<ListTasksResponse> {
			return this.http.post<ListTasksResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTasks?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies an account setting. Account settings are set on a per-Region basis.</p> <p>If you change the account setting for the root user, the default settings for all of the IAM users and roles for which no individual account setting has been specified are reset. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html">Account Settings</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When <code>serviceLongArnFormat</code>, <code>taskLongArnFormat</code>, or <code>containerInstanceLongArnFormat</code> are specified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified IAM user, IAM role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource will be defined by the opt-in status of the IAM user or role that created the resource. You must enable this setting to use Amazon ECS features such as resource tagging.</p> <p>When <code>awsvpcTrunking</code> is specified, the elastic network interface (ENI) limit for any new container instances that support the feature is changed. If <code>awsvpcTrunking</code> is enabled, any new container instances that support the feature are launched have the increased ENI limits available to them. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-eni.html">Elastic Network Interface Trunking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When <code>containerInsights</code> is specified, the default setting indicating whether CloudWatch Container Insights is enabled for your clusters is changed. If <code>containerInsights</code> is enabled, any new clusters that are created will have Container Insights enabled unless you disable it during cluster creation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html">CloudWatch Container Insights</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSetting
		 * @return {PutAccountSettingResponse} Success
		 */
		PutAccountSetting(requestBody: PutAccountSettingRequest): Observable<PutAccountSettingResponse> {
			return this.http.post<PutAccountSettingResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSetting', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies an account setting for all IAM users on an account for whom no individual account setting has been specified. Account settings are set on a per-Region basis.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault
		 * @return {PutAccountSettingDefaultResponse} Success
		 */
		PutAccountSettingDefault(requestBody: PutAccountSettingDefaultRequest): Observable<PutAccountSettingDefaultResponse> {
			return this.http.post<PutAccountSettingDefaultResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create or update an attribute on an Amazon ECS resource. If the attribute does not exist, it is created. If the attribute exists, its value is replaced with the specified value. To delete an attribute, use <a>DeleteAttributes</a>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAttributes
		 * @return {PutAttributesResponse} Success
		 */
		PutAttributes(requestBody: PutAttributesRequest): Observable<PutAttributesResponse> {
			return this.http.post<PutAttributesResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the available capacity providers and the default capacity provider strategy for a cluster.</p> <p>You must specify both the available capacity providers and a default capacity provider strategy for the cluster. If the specified cluster has existing capacity providers associated with it, you must specify all existing capacity providers in addition to any new ones you want to add. Any existing capacity providers associated with a cluster that are omitted from a <a>PutClusterCapacityProviders</a> API call will be disassociated with the cluster. You can only disassociate an existing capacity provider from a cluster if it's not being used by any existing tasks.</p> <p>When creating a service or running a task on a cluster, if no capacity provider or launch type is specified, then the cluster's default capacity provider strategy is used. It is recommended to define a default capacity provider strategy for your cluster, however you may specify an empty array (<code>[]</code>) to bypass defining a default strategy.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders
		 * @return {PutClusterCapacityProvidersResponse} Success
		 */
		PutClusterCapacityProviders(requestBody: PutClusterCapacityProvidersRequest): Observable<PutClusterCapacityProvidersResponse> {
			return this.http.post<PutClusterCapacityProvidersResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Registers an EC2 instance into the specified cluster. This instance becomes available to place containers on.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterContainerInstance
		 * @return {RegisterContainerInstanceResponse} Success
		 */
		RegisterContainerInstance(requestBody: RegisterContainerInstanceRequest): Observable<RegisterContainerInstanceResponse> {
			return this.http.post<RegisterContainerInstanceResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterContainerInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers a new task definition from the supplied <code>family</code> and <code>containerDefinitions</code>. Optionally, you can add data volumes to your containers with the <code>volumes</code> parameter. For more information about task definition parameters and defaults, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Amazon ECS Task Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You can specify an IAM role for your task with the <code>taskRoleArn</code> parameter. When you specify an IAM role for a task, its containers can then use the latest versions of the AWS CLI or SDKs to make API requests to the AWS services that are specified in the IAM policy associated with the role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM Roles for Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You can specify a Docker networking mode for the containers in your task definition with the <code>networkMode</code> parameter. The available network modes correspond to those described in <a href="https://docs.docker.com/engine/reference/run/#/network-settings">Network settings</a> in the Docker run reference. If you specify the <code>awsvpc</code> network mode, the task is allocated an elastic network interface, and you must specify a <a>NetworkConfiguration</a> when you create a service or run a task with the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition
		 * @return {RegisterTaskDefinitionResponse} Success
		 */
		RegisterTaskDefinition(requestBody: RegisterTaskDefinitionRequest): Observable<RegisterTaskDefinitionResponse> {
			return this.http.post<RegisterTaskDefinitionResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a new task using the specified task definition.</p> <p>You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS places tasks using placement constraints and placement strategies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Alternatively, you can use <a>StartTask</a> to use your own scheduler or place tasks manually on specific container instances.</p> <p>The Amazon ECS API follows an eventual consistency model, due to the distributed nature of the system supporting the API. This means that the result of an API command you run that affects your Amazon ECS resources might not be immediately visible to all subsequent commands you run. Keep this in mind when you carry out an API command that immediately follows a previous API command.</p> <p>To manage eventual consistency, you can do the following:</p> <ul> <li> <p>Confirm the state of the resource before you run a command to modify it. Run the DescribeTasks command using an exponential backoff algorithm to ensure that you allow enough time for the previous command to propagate through the system. To do this, run the DescribeTasks command repeatedly, starting with a couple of seconds of wait time and increasing gradually up to five minutes of wait time.</p> </li> <li> <p>Add wait time between subsequent commands, even if the DescribeTasks command returns an accurate response. Apply an exponential backoff algorithm starting with a couple of seconds of wait time, and increase gradually up to about five minutes of wait time.</p> </li> </ul>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.RunTask
		 * @return {RunTaskResponse} Success
		 */
		RunTask(requestBody: RunTaskRequest): Observable<RunTaskResponse> {
			return this.http.post<RunTaskResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RunTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a new task from the specified task definition on the specified container instance or instances.</p> <p>Alternatively, you can use <a>RunTask</a> to place tasks for you. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.StartTask
		 * @return {StartTaskResponse} Success
		 */
		StartTask(requestBody: StartTaskRequest): Observable<StartTaskResponse> {
			return this.http.post<StartTaskResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StartTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops a running task. Any tags associated with the task will be deleted.</p> <p>When <a>StopTask</a> is called on a task, the equivalent of <code>docker stop</code> is issued to the containers running in the task. This results in a <code>SIGTERM</code> value and a default 30-second timeout, after which the <code>SIGKILL</code> value is sent and the containers are forcibly stopped. If the container handles the <code>SIGTERM</code> value gracefully and exits within 30 seconds from receiving it, no <code>SIGKILL</code> value is sent.</p> <note> <p>The default 30-second timeout can be configured on the Amazon ECS container agent with the <code>ECS_CONTAINER_STOP_TIMEOUT</code> variable. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container Agent Configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.StopTask
		 * @return {StopTaskResponse} Success
		 */
		StopTask(requestBody: StopTaskRequest): Observable<StopTaskResponse> {
			return this.http.post<StopTaskResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StopTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that an attachment changed states.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges
		 * @return {SubmitAttachmentStateChangesResponse} Success
		 */
		SubmitAttachmentStateChanges(requestBody: SubmitAttachmentStateChangesRequest): Observable<SubmitAttachmentStateChangesResponse> {
			return this.http.post<SubmitAttachmentStateChangesResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that a container changed states.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange
		 * @return {SubmitContainerStateChangeResponse} Success
		 */
		SubmitContainerStateChange(requestBody: SubmitContainerStateChangeRequest): Observable<SubmitContainerStateChangeResponse> {
			return this.http.post<SubmitContainerStateChangeResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p> </note> <p>Sent to acknowledge that a task changed states.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange
		 * @return {SubmitTaskStateChangeResponse} Success
		 */
		SubmitTaskStateChange(requestBody: SubmitTaskStateChangeRequest): Observable<SubmitTaskStateChangeResponse> {
			return this.http.post<SubmitTaskStateChangeResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes specified tags from a resource.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the settings to use for a cluster.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateClusterSettings
		 * @return {UpdateClusterSettingsResponse} Success
		 */
		UpdateClusterSettings(requestBody: UpdateClusterSettingsRequest): Observable<UpdateClusterSettingsResponse> {
			return this.http.post<UpdateClusterSettingsResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateClusterSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the Amazon ECS container agent on a specified container instance. Updating the Amazon ECS container agent does not interrupt running tasks or services on the container instance. The process for updating the agent differs depending on whether your container instance was launched with the Amazon ECS-optimized AMI or another operating system.</p> <p> <code>UpdateContainerAgent</code> requires the Amazon ECS-optimized AMI or Amazon Linux with the <code>ecs-init</code> service installed and running. For help updating the Amazon ECS container agent on other operating systems, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html#manually_update_agent">Manually Updating the Amazon ECS Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerAgent
		 * @return {UpdateContainerAgentResponse} Success
		 */
		UpdateContainerAgent(requestBody: UpdateContainerAgentRequest): Observable<UpdateContainerAgentResponse> {
			return this.http.post<UpdateContainerAgentResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerAgent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the status of an Amazon ECS container instance.</p> <p>Once a container instance has reached an <code>ACTIVE</code> state, you can change the status of a container instance to <code>DRAINING</code> to manually remove an instance from a cluster, for example to perform system updates, update the Docker daemon, or scale down the cluster size.</p> <important> <p>A container instance cannot be changed to <code>DRAINING</code> until it has reached an <code>ACTIVE</code> status. If the instance is in any other status, an error will be received.</p> </important> <p>When you set a container instance to <code>DRAINING</code>, Amazon ECS prevents new tasks from being scheduled for placement on the container instance and replacement service tasks are started on other container instances in the cluster if the resources are available. Service tasks on the container instance that are in the <code>PENDING</code> state are stopped immediately.</p> <p>Service tasks on the container instance that are in the <code>RUNNING</code> state are stopped and replaced according to the service's deployment configuration parameters, <code>minimumHealthyPercent</code> and <code>maximumPercent</code>. You can change the deployment configuration of your service using <a>UpdateService</a>.</p> <ul> <li> <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore <code>desiredCount</code> temporarily during task replacement. For example, <code>desiredCount</code> is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. If the minimum is 100%, the service scheduler can't remove existing tasks until the replacement tasks are considered healthy. Tasks for services that do not use a load balancer are considered healthy if they are in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they are in the <code>RUNNING</code> state and the container instance they are hosted on is reported as healthy by the load balancer.</p> </li> <li> <p>The <code>maximumPercent</code> parameter represents an upper limit on the number of running tasks during task replacement, which enables you to define the replacement batch size. For example, if <code>desiredCount</code> is four tasks, a maximum of 200% starts four new tasks before stopping the four tasks to be drained, provided that the cluster resources required to do this are available. If the maximum is 100%, then replacement tasks can't start until the draining tasks have stopped.</p> </li> </ul> <p>Any <code>PENDING</code> or <code>RUNNING</code> tasks that do not belong to a service are not affected. You must wait for them to finish or stop them manually.</p> <p>A container instance has completed draining when it has no more <code>RUNNING</code> tasks. You can verify this using <a>ListTasks</a>.</p> <p>When a container instance has been drained, you can set a container instance to <code>ACTIVE</code> status and once it has reached that status the Amazon ECS scheduler can begin scheduling tasks on the instance again.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState
		 * @return {UpdateContainerInstancesStateResponse} Success
		 */
		UpdateContainerInstancesState(requestBody: UpdateContainerInstancesStateRequest): Observable<UpdateContainerInstancesStateResponse> {
			return this.http.post<UpdateContainerInstancesStateResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <important> <p>Updating the task placement strategies and constraints on an Amazon ECS service remains in preview and is a Beta Service as defined by and subject to the Beta Service Participation Service Terms located at <a href="https://aws.amazon.com/service-terms">https://aws.amazon.com/service-terms</a> ("Beta Terms"). These Beta Terms apply to your participation in this preview.</p> </important> <p>Modifies the parameters of a service.</p> <p>For services using the rolling update (<code>ECS</code>) deployment controller, the desired count, deployment configuration, network configuration, task placement constraints and strategies, or task definition used can be updated.</p> <p>For services using the blue/green (<code>CODE_DEPLOY</code>) deployment controller, only the desired count, deployment configuration, task placement constraints and strategies, and health check grace period can be updated using this API. If the network configuration, platform version, or task definition need to be updated, a new AWS CodeDeploy deployment should be created. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html">CreateDeployment</a> in the <i>AWS CodeDeploy API Reference</i>.</p> <p>For services using an external deployment controller, you can update only the desired count, task placement constraints and strategies, and health check grace period using this API. If the launch type, load balancer, network configuration, platform version, or task definition need to be updated, you should create a new task set. For more information, see <a>CreateTaskSet</a>.</p> <p>You can add to or subtract from the number of instantiations of a task definition in a service by specifying the cluster that the service is running in and a new <code>desiredCount</code> parameter.</p> <p>If you have updated the Docker image of your application, you can create a new task definition with that image and deploy it to your service. The service scheduler uses the minimum healthy percent and maximum percent parameters (in the service's deployment configuration) to determine the deployment strategy.</p> <note> <p>If your updated Docker image uses the same tag as what is in the existing task definition for your service (for example, <code>my_image:latest</code>), you do not need to create a new revision of your task definition. You can update the service using the <code>forceNewDeployment</code> option. The new tasks launched by the deployment pull the current image/tag combination from your repository when they start.</p> </note> <p>You can also update the deployment configuration of a service. When a deployment is triggered by updating the task definition of a service, the service scheduler uses the deployment configuration parameters, <code>minimumHealthyPercent</code> and <code>maximumPercent</code>, to determine the deployment strategy.</p> <ul> <li> <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore <code>desiredCount</code> temporarily during a deployment. For example, if <code>desiredCount</code> is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. Tasks for services that do not use a load balancer are considered healthy if they are in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they are in the <code>RUNNING</code> state and the container instance they are hosted on is reported as healthy by the load balancer.</p> </li> <li> <p>The <code>maximumPercent</code> parameter represents an upper limit on the number of running tasks during a deployment, which enables you to define the deployment batch size. For example, if <code>desiredCount</code> is four tasks, a maximum of 200% starts four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available).</p> </li> </ul> <p>When <a>UpdateService</a> stops a task during a deployment, the equivalent of <code>docker stop</code> is issued to the containers running in the task. This results in a <code>SIGTERM</code> and a 30-second timeout, after which <code>SIGKILL</code> is sent and the containers are forcibly stopped. If the container handles the <code>SIGTERM</code> gracefully and exits within 30 seconds from receiving it, no <code>SIGKILL</code> is sent.</p> <p>When the service scheduler launches new tasks, it determines task placement in your cluster with the following logic:</p> <ul> <li> <p>Determine which of the container instances in your cluster can support your service's task definition (for example, they have the required CPU, memory, ports, and container instance attributes).</p> </li> <li> <p>By default, the service scheduler attempts to balance tasks across Availability Zones in this manner (although you can choose a different placement strategy):</p> <ul> <li> <p>Sort the valid container instances by the fewest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.</p> </li> <li> <p>Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.</p> </li> </ul> </li> </ul> <p>When the service scheduler stops running tasks, it attempts to maintain balance across the Availability Zones in your cluster using the following logic: </p> <ul> <li> <p>Sort the container instances by the largest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have two, container instances in either zone B or C are considered optimal for termination.</p> </li> <li> <p>Stop the task on a container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the largest number of running tasks for this service.</p> </li> </ul>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateService
		 * @return {UpdateServiceResponse} Success
		 */
		UpdateService(requestBody: UpdateServiceRequest): Observable<UpdateServiceResponse> {
			return this.http.post<UpdateServiceResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies which task set in a service is the primary task set. Any parameters that are updated on the primary task set in a service will transition to the service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet
		 * @return {UpdateServicePrimaryTaskSetResponse} Success
		 */
		UpdateServicePrimaryTaskSet(requestBody: UpdateServicePrimaryTaskSetRequest): Observable<UpdateServicePrimaryTaskSetResponse> {
			return this.http.post<UpdateServicePrimaryTaskSetResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies a task set. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskSet
		 * @return {UpdateTaskSetResponse} Success
		 */
		UpdateTaskSet(requestBody: UpdateTaskSetRequest): Observable<UpdateTaskSetResponse> {
			return this.http.post<UpdateTaskSetResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateCapacityProviderX_Amz_Target { AmazonEC2ContainerServiceV20141113_CreateCapacityProvider = 0 }

	export enum CreateClusterX_Amz_Target { AmazonEC2ContainerServiceV20141113_CreateCluster = 0 }

	export enum CreateServiceX_Amz_Target { AmazonEC2ContainerServiceV20141113_CreateService = 0 }

	export enum CreateTaskSetX_Amz_Target { AmazonEC2ContainerServiceV20141113_CreateTaskSet = 0 }

	export enum DeleteAccountSettingX_Amz_Target { AmazonEC2ContainerServiceV20141113_DeleteAccountSetting = 0 }

	export enum DeleteAttributesX_Amz_Target { AmazonEC2ContainerServiceV20141113_DeleteAttributes = 0 }

	export enum DeleteClusterX_Amz_Target { AmazonEC2ContainerServiceV20141113_DeleteCluster = 0 }

	export enum DeleteServiceX_Amz_Target { AmazonEC2ContainerServiceV20141113_DeleteService = 0 }

	export enum DeleteTaskSetX_Amz_Target { AmazonEC2ContainerServiceV20141113_DeleteTaskSet = 0 }

	export enum DeregisterContainerInstanceX_Amz_Target { AmazonEC2ContainerServiceV20141113_DeregisterContainerInstance = 0 }

	export enum DeregisterTaskDefinitionX_Amz_Target { AmazonEC2ContainerServiceV20141113_DeregisterTaskDefinition = 0 }

	export enum DescribeCapacityProvidersX_Amz_Target { AmazonEC2ContainerServiceV20141113_DescribeCapacityProviders = 0 }

	export enum DescribeClustersX_Amz_Target { AmazonEC2ContainerServiceV20141113_DescribeClusters = 0 }

	export enum DescribeContainerInstancesX_Amz_Target { AmazonEC2ContainerServiceV20141113_DescribeContainerInstances = 0 }

	export enum DescribeServicesX_Amz_Target { AmazonEC2ContainerServiceV20141113_DescribeServices = 0 }

	export enum DescribeTaskDefinitionX_Amz_Target { AmazonEC2ContainerServiceV20141113_DescribeTaskDefinition = 0 }

	export enum DescribeTaskSetsX_Amz_Target { AmazonEC2ContainerServiceV20141113_DescribeTaskSets = 0 }

	export enum DescribeTasksX_Amz_Target { AmazonEC2ContainerServiceV20141113_DescribeTasks = 0 }

	export enum DiscoverPollEndpointX_Amz_Target { AmazonEC2ContainerServiceV20141113_DiscoverPollEndpoint = 0 }

	export enum ListAccountSettingsX_Amz_Target { AmazonEC2ContainerServiceV20141113_ListAccountSettings = 0 }

	export enum ListAttributesX_Amz_Target { AmazonEC2ContainerServiceV20141113_ListAttributes = 0 }

	export enum ListClustersX_Amz_Target { AmazonEC2ContainerServiceV20141113_ListClusters = 0 }

	export enum ListContainerInstancesX_Amz_Target { AmazonEC2ContainerServiceV20141113_ListContainerInstances = 0 }

	export enum ListServicesX_Amz_Target { AmazonEC2ContainerServiceV20141113_ListServices = 0 }

	export enum ListTagsForResourceX_Amz_Target { AmazonEC2ContainerServiceV20141113_ListTagsForResource = 0 }

	export enum ListTaskDefinitionFamiliesX_Amz_Target { AmazonEC2ContainerServiceV20141113_ListTaskDefinitionFamilies = 0 }

	export enum ListTaskDefinitionsX_Amz_Target { AmazonEC2ContainerServiceV20141113_ListTaskDefinitions = 0 }

	export enum ListTasksX_Amz_Target { AmazonEC2ContainerServiceV20141113_ListTasks = 0 }

	export enum PutAccountSettingX_Amz_Target { AmazonEC2ContainerServiceV20141113_PutAccountSetting = 0 }

	export enum PutAccountSettingDefaultX_Amz_Target { AmazonEC2ContainerServiceV20141113_PutAccountSettingDefault = 0 }

	export enum PutAttributesX_Amz_Target { AmazonEC2ContainerServiceV20141113_PutAttributes = 0 }

	export enum PutClusterCapacityProvidersX_Amz_Target { AmazonEC2ContainerServiceV20141113_PutClusterCapacityProviders = 0 }

	export enum RegisterContainerInstanceX_Amz_Target { AmazonEC2ContainerServiceV20141113_RegisterContainerInstance = 0 }

	export enum RegisterTaskDefinitionX_Amz_Target { AmazonEC2ContainerServiceV20141113_RegisterTaskDefinition = 0 }

	export enum RunTaskX_Amz_Target { AmazonEC2ContainerServiceV20141113_RunTask = 0 }

	export enum StartTaskX_Amz_Target { AmazonEC2ContainerServiceV20141113_StartTask = 0 }

	export enum StopTaskX_Amz_Target { AmazonEC2ContainerServiceV20141113_StopTask = 0 }

	export enum SubmitAttachmentStateChangesX_Amz_Target { AmazonEC2ContainerServiceV20141113_SubmitAttachmentStateChanges = 0 }

	export enum SubmitContainerStateChangeX_Amz_Target { AmazonEC2ContainerServiceV20141113_SubmitContainerStateChange = 0 }

	export enum SubmitTaskStateChangeX_Amz_Target { AmazonEC2ContainerServiceV20141113_SubmitTaskStateChange = 0 }

	export enum TagResourceX_Amz_Target { AmazonEC2ContainerServiceV20141113_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { AmazonEC2ContainerServiceV20141113_UntagResource = 0 }

	export enum UpdateClusterSettingsX_Amz_Target { AmazonEC2ContainerServiceV20141113_UpdateClusterSettings = 0 }

	export enum UpdateContainerAgentX_Amz_Target { AmazonEC2ContainerServiceV20141113_UpdateContainerAgent = 0 }

	export enum UpdateContainerInstancesStateX_Amz_Target { AmazonEC2ContainerServiceV20141113_UpdateContainerInstancesState = 0 }

	export enum UpdateServiceX_Amz_Target { AmazonEC2ContainerServiceV20141113_UpdateService = 0 }

	export enum UpdateServicePrimaryTaskSetX_Amz_Target { AmazonEC2ContainerServiceV20141113_UpdateServicePrimaryTaskSet = 0 }

	export enum UpdateTaskSetX_Amz_Target { AmazonEC2ContainerServiceV20141113_UpdateTaskSet = 0 }

}

