import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateCapacityProviderResponse {
		capacityProvider?: CapacityProvider;
	}
	export interface CreateCapacityProviderResponseFormProperties {
	}
	export function CreateCreateCapacityProviderResponseFormGroup() {
		return new FormGroup<CreateCapacityProviderResponseFormProperties>({
		});

	}


	/** The details for a capacity provider. */
	export interface CapacityProvider {
		capacityProviderArn?: string;
		name?: string;
		status?: CapacityProviderStatus;
		autoScalingGroupProvider?: AutoScalingGroupProvider;
		updateStatus?: CapacityProviderUpdateStatus;
		updateStatusReason?: string;
		tags?: Array<Tag>;
	}

	/** The details for a capacity provider. */
	export interface CapacityProviderFormProperties {
		capacityProviderArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<CapacityProviderStatus | null | undefined>,
		updateStatus: FormControl<CapacityProviderUpdateStatus | null | undefined>,
		updateStatusReason: FormControl<string | null | undefined>,
	}
	export function CreateCapacityProviderFormGroup() {
		return new FormGroup<CapacityProviderFormProperties>({
			capacityProviderArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CapacityProviderStatus | null | undefined>(undefined),
			updateStatus: new FormControl<CapacityProviderUpdateStatus | null | undefined>(undefined),
			updateStatusReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CapacityProviderStatus { ACTIVE = 0, INACTIVE = 1 }


	/** The details of the Auto Scaling group for the capacity provider. */
	export interface AutoScalingGroupProvider {

		/** Required */
		autoScalingGroupArn: string;
		managedScaling?: ManagedScaling;
		managedTerminationProtection?: ManagedScalingStatus;
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


	/** <p>The managed scaling settings for the Auto Scaling group capacity provider.</p> <p>When managed scaling is turned on, Amazon ECS manages the scale-in and scale-out actions of the Auto Scaling group. Amazon ECS manages a target tracking scaling policy using an Amazon ECS managed CloudWatch metric with the specified <code>targetCapacity</code> value as the target value for the metric. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/asg-capacity-providers.html#asg-capacity-providers-managed-scaling">Using managed scaling</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>If managed scaling is off, the user must manage the scaling of the Auto Scaling group.</p> */
	export interface ManagedScaling {
		status?: ManagedScalingStatus;
		targetCapacity?: number | null;
		minimumScalingStepSize?: number | null;
		maximumScalingStepSize?: number | null;
		instanceWarmupPeriod?: number | null;
	}

	/** <p>The managed scaling settings for the Auto Scaling group capacity provider.</p> <p>When managed scaling is turned on, Amazon ECS manages the scale-in and scale-out actions of the Auto Scaling group. Amazon ECS manages a target tracking scaling policy using an Amazon ECS managed CloudWatch metric with the specified <code>targetCapacity</code> value as the target value for the metric. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/asg-capacity-providers.html#asg-capacity-providers-managed-scaling">Using managed scaling</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>If managed scaling is off, the user must manage the scaling of the Auto Scaling group.</p> */
	export interface ManagedScalingFormProperties {
		status: FormControl<ManagedScalingStatus | null | undefined>,
		targetCapacity: FormControl<number | null | undefined>,
		minimumScalingStepSize: FormControl<number | null | undefined>,
		maximumScalingStepSize: FormControl<number | null | undefined>,
		instanceWarmupPeriod: FormControl<number | null | undefined>,
	}
	export function CreateManagedScalingFormGroup() {
		return new FormGroup<ManagedScalingFormProperties>({
			status: new FormControl<ManagedScalingStatus | null | undefined>(undefined),
			targetCapacity: new FormControl<number | null | undefined>(undefined),
			minimumScalingStepSize: new FormControl<number | null | undefined>(undefined),
			maximumScalingStepSize: new FormControl<number | null | undefined>(undefined),
			instanceWarmupPeriod: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ManagedScalingStatus { ENABLED = 0, DISABLED = 1 }

	export enum CapacityProviderUpdateStatus { DELETE_IN_PROGRESS = 0, DELETE_COMPLETE = 1, DELETE_FAILED = 2, UPDATE_IN_PROGRESS = 3, UPDATE_COMPLETE = 4, UPDATE_FAILED = 5 }


	/** <p>The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define them.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case-sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.</p> </li> </ul> */
	export interface Tag {
		key?: string;
		value?: string;
	}

	/** <p>The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define them.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case-sensitive.</p> </li> <li> <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.</p> </li> </ul> */
	export interface TagFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCapacityProviderRequest {

		/** Required */
		name: string;

		/** Required */
		autoScalingGroupProvider: AutoScalingGroupProvider;
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

	export interface UpdateInProgressException {
	}
	export interface UpdateInProgressExceptionFormProperties {
	}
	export function CreateUpdateInProgressExceptionFormGroup() {
		return new FormGroup<UpdateInProgressExceptionFormProperties>({
		});

	}

	export interface CreateClusterResponse {
		cluster?: Cluster;
	}
	export interface CreateClusterResponseFormProperties {
	}
	export function CreateCreateClusterResponseFormGroup() {
		return new FormGroup<CreateClusterResponseFormProperties>({
		});

	}


	/** A regional grouping of one or more container instances where you can run task requests. Each account receives a default cluster the first time you use the Amazon ECS service, but you may also create other clusters. Clusters may contain more than one instance type simultaneously. */
	export interface Cluster {
		clusterArn?: string;
		clusterName?: string;
		configuration?: ClusterConfiguration;
		status?: string;
		registeredContainerInstancesCount?: number | null;
		runningTasksCount?: number | null;
		pendingTasksCount?: number | null;
		activeServicesCount?: number | null;
		statistics?: Array<KeyValuePair>;
		tags?: Array<Tag>;
		settings?: Array<ClusterSetting>;
		capacityProviders?: Array<string>;
		defaultCapacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
		attachments?: Array<Attachment>;
		attachmentsStatus?: string;
		serviceConnectDefaults?: ClusterServiceConnectDefaults;
	}

	/** A regional grouping of one or more container instances where you can run task requests. Each account receives a default cluster the first time you use the Amazon ECS service, but you may also create other clusters. Clusters may contain more than one instance type simultaneously. */
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


	/** The execute command configuration for the cluster. */
	export interface ClusterConfiguration {
		executeCommandConfiguration?: ExecuteCommandConfiguration;
	}

	/** The execute command configuration for the cluster. */
	export interface ClusterConfigurationFormProperties {
	}
	export function CreateClusterConfigurationFormGroup() {
		return new FormGroup<ClusterConfigurationFormProperties>({
		});

	}


	/** The details of the execute command configuration. */
	export interface ExecuteCommandConfiguration {
		kmsKeyId?: string;
		logging?: ExecuteCommandLogging;
		logConfiguration?: ExecuteCommandLogConfiguration;
	}

	/** The details of the execute command configuration. */
	export interface ExecuteCommandConfigurationFormProperties {
		kmsKeyId: FormControl<string | null | undefined>,
		logging: FormControl<ExecuteCommandLogging | null | undefined>,
	}
	export function CreateExecuteCommandConfigurationFormGroup() {
		return new FormGroup<ExecuteCommandConfigurationFormProperties>({
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			logging: new FormControl<ExecuteCommandLogging | null | undefined>(undefined),
		});

	}

	export enum ExecuteCommandLogging { NONE = 0, DEFAULT = 1, OVERRIDE = 2 }


	/** The log configuration for the results of the execute command actions. The logs can be sent to CloudWatch Logs or an Amazon S3 bucket. */
	export interface ExecuteCommandLogConfiguration {
		cloudWatchLogGroupName?: string;
		cloudWatchEncryptionEnabled?: boolean | null;
		s3BucketName?: string;
		s3EncryptionEnabled?: boolean | null;
		s3KeyPrefix?: string;
	}

	/** The log configuration for the results of the execute command actions. The logs can be sent to CloudWatch Logs or an Amazon S3 bucket. */
	export interface ExecuteCommandLogConfigurationFormProperties {
		cloudWatchLogGroupName: FormControl<string | null | undefined>,
		cloudWatchEncryptionEnabled: FormControl<boolean | null | undefined>,
		s3BucketName: FormControl<string | null | undefined>,
		s3EncryptionEnabled: FormControl<boolean | null | undefined>,
		s3KeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateExecuteCommandLogConfigurationFormGroup() {
		return new FormGroup<ExecuteCommandLogConfigurationFormProperties>({
			cloudWatchLogGroupName: new FormControl<string | null | undefined>(undefined),
			cloudWatchEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			s3BucketName: new FormControl<string | null | undefined>(undefined),
			s3EncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			s3KeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A key-value pair object. */
	export interface KeyValuePair {
		name?: string;
		value?: string;
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


	/** The settings to use when creating a cluster. This parameter is used to turn on CloudWatch Container Insights for a cluster. */
	export interface ClusterSetting {
		name?: ClusterSettingName;
		value?: string;
	}

	/** The settings to use when creating a cluster. This parameter is used to turn on CloudWatch Container Insights for a cluster. */
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


	/** <p>The details of a capacity provider strategy. A capacity provider strategy can be set when using the <a>RunTask</a> or <a>CreateCluster</a> APIs or as the default capacity provider strategy for a cluster with the <a>CreateCluster</a> API.</p> <p>Only capacity providers that are already associated with a cluster and have an <code>ACTIVE</code> or <code>UPDATING</code> status can be used in a capacity provider strategy. The <a>PutClusterCapacityProviders</a> API is used to associate a capacity provider with a cluster.</p> <p>If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must already be created. New Auto Scaling group capacity providers can be created with the <a>CreateCapacityProvider</a> API operation.</p> <p>To use a Fargate capacity provider, specify either the <code>FARGATE</code> or <code>FARGATE_SPOT</code> capacity providers. The Fargate capacity providers are available to all accounts and only need to be associated with a cluster to be used in a capacity provider strategy.</p> <p>A capacity provider strategy may contain a maximum of 6 capacity providers.</p> */
	export interface CapacityProviderStrategyItem {

		/** Required */
		capacityProvider: string;
		weight?: number | null;
		base?: number | null;
	}

	/** <p>The details of a capacity provider strategy. A capacity provider strategy can be set when using the <a>RunTask</a> or <a>CreateCluster</a> APIs or as the default capacity provider strategy for a cluster with the <a>CreateCluster</a> API.</p> <p>Only capacity providers that are already associated with a cluster and have an <code>ACTIVE</code> or <code>UPDATING</code> status can be used in a capacity provider strategy. The <a>PutClusterCapacityProviders</a> API is used to associate a capacity provider with a cluster.</p> <p>If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must already be created. New Auto Scaling group capacity providers can be created with the <a>CreateCapacityProvider</a> API operation.</p> <p>To use a Fargate capacity provider, specify either the <code>FARGATE</code> or <code>FARGATE_SPOT</code> capacity providers. The Fargate capacity providers are available to all accounts and only need to be associated with a cluster to be used in a capacity provider strategy.</p> <p>A capacity provider strategy may contain a maximum of 6 capacity providers.</p> */
	export interface CapacityProviderStrategyItemFormProperties {

		/** Required */
		capacityProvider: FormControl<string | null | undefined>,
		weight: FormControl<number | null | undefined>,
		base: FormControl<number | null | undefined>,
	}
	export function CreateCapacityProviderStrategyItemFormGroup() {
		return new FormGroup<CapacityProviderStrategyItemFormProperties>({
			capacityProvider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined),
			base: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object representing a container instance or task attachment. */
	export interface Attachment {
		id?: string;
		type?: string;
		status?: string;
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


	/** <p>Use this parameter to set a default Service Connect namespace. After you set a default Service Connect namespace, any new services with Service Connect turned on that are created in the cluster are added as client services in the namespace. This setting only applies to new services that set the <code>enabled</code> parameter to <code>true</code> in the <code>ServiceConnectConfiguration</code>. You can set the namespace of each service individually in the <code>ServiceConnectConfiguration</code> to override this default parameter.</p> <p>Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> */
	export interface ClusterServiceConnectDefaults {
		namespace?: string;
	}

	/** <p>Use this parameter to set a default Service Connect namespace. After you set a default Service Connect namespace, any new services with Service Connect turned on that are created in the cluster are added as client services in the namespace. This setting only applies to new services that set the <code>enabled</code> parameter to <code>true</code> in the <code>ServiceConnectConfiguration</code>. You can set the namespace of each service individually in the <code>ServiceConnectConfiguration</code> to override this default parameter.</p> <p>Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> */
	export interface ClusterServiceConnectDefaultsFormProperties {
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateClusterServiceConnectDefaultsFormGroup() {
		return new FormGroup<ClusterServiceConnectDefaultsFormProperties>({
			namespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateClusterRequest {
		clusterName?: string;
		tags?: Array<Tag>;
		settings?: Array<ClusterSetting>;
		configuration?: ClusterConfiguration;
		capacityProviders?: Array<string>;
		defaultCapacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
		serviceConnectDefaults?: ClusterServiceConnectDefaultsRequest;
	}
	export interface CreateClusterRequestFormProperties {
		clusterName: FormControl<string | null | undefined>,
	}
	export function CreateCreateClusterRequestFormGroup() {
		return new FormGroup<CreateClusterRequestFormProperties>({
			clusterName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Use this parameter to set a default Service Connect namespace. After you set a default Service Connect namespace, any new services with Service Connect turned on that are created in the cluster are added as client services in the namespace. This setting only applies to new services that set the <code>enabled</code> parameter to <code>true</code> in the <code>ServiceConnectConfiguration</code>. You can set the namespace of each service individually in the <code>ServiceConnectConfiguration</code> to override this default parameter.</p> <p>Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> */
	export interface ClusterServiceConnectDefaultsRequest {

		/** Required */
		namespace: string;
	}

	/** <p>Use this parameter to set a default Service Connect namespace. After you set a default Service Connect namespace, any new services with Service Connect turned on that are created in the cluster are added as client services in the namespace. This setting only applies to new services that set the <code>enabled</code> parameter to <code>true</code> in the <code>ServiceConnectConfiguration</code>. You can set the namespace of each service individually in the <code>ServiceConnectConfiguration</code> to override this default parameter.</p> <p>Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> */
	export interface ClusterServiceConnectDefaultsRequestFormProperties {

		/** Required */
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateClusterServiceConnectDefaultsRequestFormGroup() {
		return new FormGroup<ClusterServiceConnectDefaultsRequestFormProperties>({
			namespace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NamespaceNotFoundException {
	}
	export interface NamespaceNotFoundExceptionFormProperties {
	}
	export function CreateNamespaceNotFoundExceptionFormGroup() {
		return new FormGroup<NamespaceNotFoundExceptionFormProperties>({
		});

	}

	export interface CreateServiceResponse {
		service?: Service;
	}
	export interface CreateServiceResponseFormProperties {
	}
	export function CreateCreateServiceResponseFormGroup() {
		return new FormGroup<CreateServiceResponseFormProperties>({
		});

	}


	/** Details on a service within a cluster. */
	export interface Service {
		serviceArn?: string;
		serviceName?: string;
		clusterArn?: string;
		loadBalancers?: Array<LoadBalancer>;
		serviceRegistries?: Array<ServiceRegistry>;
		status?: string;
		desiredCount?: number | null;
		runningCount?: number | null;
		pendingCount?: number | null;
		launchType?: LaunchType;
		capacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
		platformVersion?: string;
		platformFamily?: string;
		taskDefinition?: string;
		deploymentConfiguration?: DeploymentConfiguration;
		taskSets?: Array<TaskSet>;
		deployments?: Array<Deployment>;
		roleArn?: string;
		events?: Array<ServiceEvent>;
		createdAt?: Date;
		placementConstraints?: Array<PlacementConstraint>;
		placementStrategy?: Array<PlacementStrategy>;
		networkConfiguration?: NetworkConfiguration;
		healthCheckGracePeriodSeconds?: number | null;
		schedulingStrategy?: SchedulingStrategy;
		deploymentController?: DeploymentController;
		tags?: Array<Tag>;
		createdBy?: string;
		enableECSManagedTags?: boolean | null;
		propagateTags?: PropagateTags;
		enableExecuteCommand?: boolean | null;
	}

	/** Details on a service within a cluster. */
	export interface ServiceFormProperties {
		serviceArn: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
		clusterArn: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		desiredCount: FormControl<number | null | undefined>,
		runningCount: FormControl<number | null | undefined>,
		pendingCount: FormControl<number | null | undefined>,
		launchType: FormControl<LaunchType | null | undefined>,
		platformVersion: FormControl<string | null | undefined>,
		platformFamily: FormControl<string | null | undefined>,
		taskDefinition: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		healthCheckGracePeriodSeconds: FormControl<number | null | undefined>,
		schedulingStrategy: FormControl<SchedulingStrategy | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		enableECSManagedTags: FormControl<boolean | null | undefined>,
		propagateTags: FormControl<PropagateTags | null | undefined>,
		enableExecuteCommand: FormControl<boolean | null | undefined>,
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
			launchType: new FormControl<LaunchType | null | undefined>(undefined),
			platformVersion: new FormControl<string | null | undefined>(undefined),
			platformFamily: new FormControl<string | null | undefined>(undefined),
			taskDefinition: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			healthCheckGracePeriodSeconds: new FormControl<number | null | undefined>(undefined),
			schedulingStrategy: new FormControl<SchedulingStrategy | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			enableECSManagedTags: new FormControl<boolean | null | undefined>(undefined),
			propagateTags: new FormControl<PropagateTags | null | undefined>(undefined),
			enableExecuteCommand: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>The load balancer configuration to use with a service or task set.</p> <p>When you add, update, or remove a load balancer configuration, Amazon ECS starts a new deployment with the updated Elastic Load Balancing configuration. This causes tasks to register to and deregister from load balancers.</p> <p>We recommend that you verify this on a test environment before you update the Elastic Load Balancing configuration. </p> <p>A service-linked role is required for services that use multiple target groups. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using service-linked roles</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> */
	export interface LoadBalancer {
		targetGroupArn?: string;
		loadBalancerName?: string;
		containerName?: string;
		containerPort?: number | null;
	}

	/** <p>The load balancer configuration to use with a service or task set.</p> <p>When you add, update, or remove a load balancer configuration, Amazon ECS starts a new deployment with the updated Elastic Load Balancing configuration. This causes tasks to register to and deregister from load balancers.</p> <p>We recommend that you verify this on a test environment before you update the Elastic Load Balancing configuration. </p> <p>A service-linked role is required for services that use multiple target groups. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using service-linked roles</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> */
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


	/** <p>The details for the service registry.</p> <p>Each service may be associated with one service registry. Multiple service registries for each service are not supported.</p> <p>When you add, update, or remove the service registries configuration, Amazon ECS starts a new deployment. New tasks are registered and deregistered to the updated service registry configuration.</p> */
	export interface ServiceRegistry {
		registryArn?: string;
		port?: number | null;
		containerName?: string;
		containerPort?: number | null;
	}

	/** <p>The details for the service registry.</p> <p>Each service may be associated with one service registry. Multiple service registries for each service are not supported.</p> <p>When you add, update, or remove the service registries configuration, Amazon ECS starts a new deployment. New tasks are registered and deregistered to the updated service registry configuration.</p> */
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

	export enum LaunchType { EC2 = 0, FARGATE = 1, EXTERNAL = 2 }


	/** Optional deployment parameters that control how many tasks run during a deployment and the ordering of stopping and starting tasks. */
	export interface DeploymentConfiguration {
		deploymentCircuitBreaker?: DeploymentCircuitBreaker;
		maximumPercent?: number | null;
		minimumHealthyPercent?: number | null;
		alarms?: DeploymentAlarms;
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


	/** <note> <p>The deployment circuit breaker can only be used for services using the rolling update (<code>ECS</code>) deployment type.</p> </note> <p>The <b>deployment circuit breaker</b> determines whether a service deployment will fail if the service can't reach a steady state. If it is turned on, a service deployment will transition to a failed state and stop launching new tasks. You can also configure Amazon ECS to roll back your service to the last completed deployment after a failure. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html">Rolling update</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>For more information about API failure reasons, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure reasons</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> */
	export interface DeploymentCircuitBreaker {

		/** Required */
		enable: boolean;

		/** Required */
		rollback: boolean;
	}

	/** <note> <p>The deployment circuit breaker can only be used for services using the rolling update (<code>ECS</code>) deployment type.</p> </note> <p>The <b>deployment circuit breaker</b> determines whether a service deployment will fail if the service can't reach a steady state. If it is turned on, a service deployment will transition to a failed state and stop launching new tasks. You can also configure Amazon ECS to roll back your service to the last completed deployment after a failure. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html">Rolling update</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>For more information about API failure reasons, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure reasons</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> */
	export interface DeploymentCircuitBreakerFormProperties {

		/** Required */
		enable: FormControl<boolean | null | undefined>,

		/** Required */
		rollback: FormControl<boolean | null | undefined>,
	}
	export function CreateDeploymentCircuitBreakerFormGroup() {
		return new FormGroup<DeploymentCircuitBreakerFormProperties>({
			enable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			rollback: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>One of the methods which provide a way for you to quickly identify when a deployment has failed, and then to optionally roll back the failure to the last working deployment.</p> <p>When the alarms are generated, Amazon ECS sets the service deployment to failed. Set the rollback parameter to have Amazon ECS to roll back your service to the last completed deployment after a failure.</p> <p>You can only use the <code>DeploymentAlarms</code> method to detect failures when the <code>DeploymentController</code> is set to <code>ECS</code> (rolling update).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html">Rolling update</a> in the <i> <i>Amazon Elastic Container Service Developer Guide</i> </i>.</p> */
	export interface DeploymentAlarms {

		/** Required */
		alarmNames: Array<string>;

		/** Required */
		enable: boolean;

		/** Required */
		rollback: boolean;
	}

	/** <p>One of the methods which provide a way for you to quickly identify when a deployment has failed, and then to optionally roll back the failure to the last working deployment.</p> <p>When the alarms are generated, Amazon ECS sets the service deployment to failed. Set the rollback parameter to have Amazon ECS to roll back your service to the last completed deployment after a failure.</p> <p>You can only use the <code>DeploymentAlarms</code> method to detect failures when the <code>DeploymentController</code> is set to <code>ECS</code> (rolling update).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html">Rolling update</a> in the <i> <i>Amazon Elastic Container Service Developer Guide</i> </i>.</p> */
	export interface DeploymentAlarmsFormProperties {

		/** Required */
		enable: FormControl<boolean | null | undefined>,

		/** Required */
		rollback: FormControl<boolean | null | undefined>,
	}
	export function CreateDeploymentAlarmsFormGroup() {
		return new FormGroup<DeploymentAlarmsFormProperties>({
			enable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			rollback: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a set of Amazon ECS tasks in either an CodeDeploy or an <code>EXTERNAL</code> deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. */
	export interface TaskSet {
		id?: string;
		taskSetArn?: string;
		serviceArn?: string;
		clusterArn?: string;
		startedBy?: string;
		externalId?: string;
		status?: string;
		taskDefinition?: string;
		computedDesiredCount?: number | null;
		pendingCount?: number | null;
		runningCount?: number | null;
		createdAt?: Date;
		updatedAt?: Date;
		launchType?: LaunchType;
		capacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
		platformVersion?: string;
		platformFamily?: string;
		networkConfiguration?: NetworkConfiguration;
		loadBalancers?: Array<LoadBalancer>;
		serviceRegistries?: Array<ServiceRegistry>;
		scale?: Scale;
		stabilityStatus?: StabilityStatus;
		stabilityStatusAt?: Date;
		tags?: Array<Tag>;
	}

	/** Information about a set of Amazon ECS tasks in either an CodeDeploy or an <code>EXTERNAL</code> deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. */
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
		launchType: FormControl<LaunchType | null | undefined>,
		platformVersion: FormControl<string | null | undefined>,
		platformFamily: FormControl<string | null | undefined>,
		stabilityStatus: FormControl<StabilityStatus | null | undefined>,
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
			launchType: new FormControl<LaunchType | null | undefined>(undefined),
			platformVersion: new FormControl<string | null | undefined>(undefined),
			platformFamily: new FormControl<string | null | undefined>(undefined),
			stabilityStatus: new FormControl<StabilityStatus | null | undefined>(undefined),
			stabilityStatusAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The network configuration for a task or service. */
	export interface NetworkConfiguration {
		awsvpcConfiguration?: AwsVpcConfiguration;
	}

	/** The network configuration for a task or service. */
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
		assignPublicIp?: ManagedScalingStatus;
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
		unit?: ScaleUnit;
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

	export enum StabilityStatus { STEADY_STATE = 0, STABILIZING = 1 }


	/** The details of an Amazon ECS service deployment. This is used only when a service uses the <code>ECS</code> deployment controller type. */
	export interface Deployment {
		id?: string;
		status?: string;
		taskDefinition?: string;
		desiredCount?: number | null;
		pendingCount?: number | null;
		runningCount?: number | null;
		failedTasks?: number | null;
		createdAt?: Date;
		updatedAt?: Date;
		capacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
		launchType?: LaunchType;
		platformVersion?: string;
		platformFamily?: string;
		networkConfiguration?: NetworkConfiguration;
		rolloutState?: DeploymentRolloutState;
		rolloutStateReason?: string;
		serviceConnectConfiguration?: ServiceConnectConfiguration;
		serviceConnectResources?: Array<ServiceConnectServiceResource>;
	}

	/** The details of an Amazon ECS service deployment. This is used only when a service uses the <code>ECS</code> deployment controller type. */
	export interface DeploymentFormProperties {
		id: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		taskDefinition: FormControl<string | null | undefined>,
		desiredCount: FormControl<number | null | undefined>,
		pendingCount: FormControl<number | null | undefined>,
		runningCount: FormControl<number | null | undefined>,
		failedTasks: FormControl<number | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		launchType: FormControl<LaunchType | null | undefined>,
		platformVersion: FormControl<string | null | undefined>,
		platformFamily: FormControl<string | null | undefined>,
		rolloutState: FormControl<DeploymentRolloutState | null | undefined>,
		rolloutStateReason: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentFormGroup() {
		return new FormGroup<DeploymentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			taskDefinition: new FormControl<string | null | undefined>(undefined),
			desiredCount: new FormControl<number | null | undefined>(undefined),
			pendingCount: new FormControl<number | null | undefined>(undefined),
			runningCount: new FormControl<number | null | undefined>(undefined),
			failedTasks: new FormControl<number | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			launchType: new FormControl<LaunchType | null | undefined>(undefined),
			platformVersion: new FormControl<string | null | undefined>(undefined),
			platformFamily: new FormControl<string | null | undefined>(undefined),
			rolloutState: new FormControl<DeploymentRolloutState | null | undefined>(undefined),
			rolloutStateReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeploymentRolloutState { COMPLETED = 0, FAILED = 1, IN_PROGRESS = 2 }


	/** <p>The Service Connect configuration of your Amazon ECS service. The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace.</p> <p>Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> */
	export interface ServiceConnectConfiguration {

		/** Required */
		enabled: boolean;
		namespace?: string;
		services?: Array<ServiceConnectService>;

		/** <p>The log configuration for the container. This parameter maps to <code>LogConfig</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/commandline/run/"> <code>docker run</code> </a>.</p> <p>By default, containers use the same logging driver that the Docker daemon uses. However, the container might use a different logging driver than the Docker daemon by specifying a log driver configuration in the container definition. For more information about the options for different supported log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure logging drivers</a> in the Docker documentation.</p> <p>Understand the following when specifying a log configuration for your containers.</p> <ul> <li> <p>Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon. Additional log drivers may be available in future releases of the Amazon ECS container agent.</p> <p>For tasks on Fargate, the supported log drivers are <code>awslogs</code>, <code>splunk</code>, and <code>awsfirelens</code>.</p> <p>For tasks hosted on Amazon EC2 instances, the supported log drivers are <code>awslogs</code>, <code>fluentd</code>, <code>gelf</code>, <code>json-file</code>, <code>journald</code>, <code>logentries</code>,<code>syslog</code>, <code>splunk</code>, and <code>awsfirelens</code>.</p> </li> <li> <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.</p> </li> <li> <p>For tasks that are hosted on Amazon EC2 instances, the Amazon ECS container agent must register the available logging drivers with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that instance can use these log configuration options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS container agent configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p>For tasks that are on Fargate, because you don't have access to the underlying infrastructure your tasks are hosted on, any additional software needed must be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.</p> </li> </ul> */
		logConfiguration?: LogConfiguration;
	}

	/** <p>The Service Connect configuration of your Amazon ECS service. The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace.</p> <p>Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> */
	export interface ServiceConnectConfigurationFormProperties {

		/** Required */
		enabled: FormControl<boolean | null | undefined>,
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateServiceConnectConfigurationFormGroup() {
		return new FormGroup<ServiceConnectConfigurationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			namespace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Service Connect service object configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface ServiceConnectService {

		/** Required */
		portName: string;
		discoveryName?: string;
		clientAliases?: Array<ServiceConnectClientAlias>;
		ingressPortOverride?: number | null;
	}

	/** The Service Connect service object configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface ServiceConnectServiceFormProperties {

		/** Required */
		portName: FormControl<string | null | undefined>,
		discoveryName: FormControl<string | null | undefined>,
		ingressPortOverride: FormControl<number | null | undefined>,
	}
	export function CreateServiceConnectServiceFormGroup() {
		return new FormGroup<ServiceConnectServiceFormProperties>({
			portName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			discoveryName: new FormControl<string | null | undefined>(undefined),
			ingressPortOverride: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Each alias ("endpoint") is a fully-qualified name and port number that other tasks ("clients") can use to connect to this service.</p> <p>Each name and port mapping must be unique within the namespace.</p> <p>Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> */
	export interface ServiceConnectClientAlias {

		/** Required */
		port: number;
		dnsName?: string;
	}

	/** <p>Each alias ("endpoint") is a fully-qualified name and port number that other tasks ("clients") can use to connect to this service.</p> <p>Each name and port mapping must be unique within the namespace.</p> <p>Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> */
	export interface ServiceConnectClientAliasFormProperties {

		/** Required */
		port: FormControl<number | null | undefined>,
		dnsName: FormControl<string | null | undefined>,
	}
	export function CreateServiceConnectClientAliasFormGroup() {
		return new FormGroup<ServiceConnectClientAliasFormProperties>({
			port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dnsName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The log configuration for the container. This parameter maps to <code>LogConfig</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/commandline/run/"> <code>docker run</code> </a>.</p> <p>By default, containers use the same logging driver that the Docker daemon uses. However, the container might use a different logging driver than the Docker daemon by specifying a log driver configuration in the container definition. For more information about the options for different supported log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure logging drivers</a> in the Docker documentation.</p> <p>Understand the following when specifying a log configuration for your containers.</p> <ul> <li> <p>Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon. Additional log drivers may be available in future releases of the Amazon ECS container agent.</p> <p>For tasks on Fargate, the supported log drivers are <code>awslogs</code>, <code>splunk</code>, and <code>awsfirelens</code>.</p> <p>For tasks hosted on Amazon EC2 instances, the supported log drivers are <code>awslogs</code>, <code>fluentd</code>, <code>gelf</code>, <code>json-file</code>, <code>journald</code>, <code>logentries</code>,<code>syslog</code>, <code>splunk</code>, and <code>awsfirelens</code>.</p> </li> <li> <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.</p> </li> <li> <p>For tasks that are hosted on Amazon EC2 instances, the Amazon ECS container agent must register the available logging drivers with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that instance can use these log configuration options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS container agent configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p>For tasks that are on Fargate, because you don't have access to the underlying infrastructure your tasks are hosted on, any additional software needed must be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.</p> </li> </ul> */
	export interface LogConfiguration {

		/** Required */
		logDriver: LogDriver;
		options?: LogConfigurationOptionsMap;
		secretOptions?: Array<Secret>;
	}

	/** <p>The log configuration for the container. This parameter maps to <code>LogConfig</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--log-driver</code> option to <a href="https://docs.docker.com/engine/reference/commandline/run/"> <code>docker run</code> </a>.</p> <p>By default, containers use the same logging driver that the Docker daemon uses. However, the container might use a different logging driver than the Docker daemon by specifying a log driver configuration in the container definition. For more information about the options for different supported log drivers, see <a href="https://docs.docker.com/engine/admin/logging/overview/">Configure logging drivers</a> in the Docker documentation.</p> <p>Understand the following when specifying a log configuration for your containers.</p> <ul> <li> <p>Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon. Additional log drivers may be available in future releases of the Amazon ECS container agent.</p> <p>For tasks on Fargate, the supported log drivers are <code>awslogs</code>, <code>splunk</code>, and <code>awsfirelens</code>.</p> <p>For tasks hosted on Amazon EC2 instances, the supported log drivers are <code>awslogs</code>, <code>fluentd</code>, <code>gelf</code>, <code>json-file</code>, <code>journald</code>, <code>logentries</code>,<code>syslog</code>, <code>splunk</code>, and <code>awsfirelens</code>.</p> </li> <li> <p>This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.</p> </li> <li> <p>For tasks that are hosted on Amazon EC2 instances, the Amazon ECS container agent must register the available logging drivers with the <code>ECS_AVAILABLE_LOGGING_DRIVERS</code> environment variable before containers placed on that instance can use these log configuration options. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS container agent configuration</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p>For tasks that are on Fargate, because you don't have access to the underlying infrastructure your tasks are hosted on, any additional software needed must be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.</p> </li> </ul> */
	export interface LogConfigurationFormProperties {

		/** Required */
		logDriver: FormControl<LogDriver | null | undefined>,
	}
	export function CreateLogConfigurationFormGroup() {
		return new FormGroup<LogConfigurationFormProperties>({
			logDriver: new FormControl<LogDriver | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LogDriver { 'json-file' = 0, syslog = 1, journald = 2, gelf = 3, fluentd = 4, awslogs = 5, splunk = 6, awsfirelens = 7 }

	export interface LogConfigurationOptionsMap {
	}
	export interface LogConfigurationOptionsMapFormProperties {
	}
	export function CreateLogConfigurationOptionsMapFormGroup() {
		return new FormGroup<LogConfigurationOptionsMapFormProperties>({
		});

	}


	/** <p>An object representing the secret to expose to your container. Secrets can be exposed to a container in the following ways:</p> <ul> <li> <p>To inject sensitive data into your containers as environment variables, use the <code>secrets</code> container definition parameter.</p> </li> <li> <p>To reference sensitive information in the log configuration of a container, use the <code>secretOptions</code> container definition parameter.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html">Specifying sensitive data</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> */
	export interface Secret {

		/** Required */
		name: string;

		/** Required */
		valueFrom: string;
	}

	/** <p>An object representing the secret to expose to your container. Secrets can be exposed to a container in the following ways:</p> <ul> <li> <p>To inject sensitive data into your containers as environment variables, use the <code>secrets</code> container definition parameter.</p> </li> <li> <p>To reference sensitive information in the log configuration of a container, use the <code>secretOptions</code> container definition parameter.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html">Specifying sensitive data</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> */
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


	/** <p>The Service Connect resource. Each configuration maps a discovery name to a Cloud Map service name. The data is stored in Cloud Map as part of the Service Connect configuration for each discovery name of this Amazon ECS service.</p> <p>A task can resolve the <code>dnsName</code> for each of the <code>clientAliases</code> of a service. However a task can't resolve the discovery names. If you want to connect to a service, refer to the <code>ServiceConnectConfiguration</code> of that service for the list of <code>clientAliases</code> that you can use.</p> */
	export interface ServiceConnectServiceResource {
		discoveryName?: string;
		discoveryArn?: string;
	}

	/** <p>The Service Connect resource. Each configuration maps a discovery name to a Cloud Map service name. The data is stored in Cloud Map as part of the Service Connect configuration for each discovery name of this Amazon ECS service.</p> <p>A task can resolve the <code>dnsName</code> for each of the <code>clientAliases</code> of a service. However a task can't resolve the discovery names. If you want to connect to a service, refer to the <code>ServiceConnectConfiguration</code> of that service for the list of <code>clientAliases</code> that you can use.</p> */
	export interface ServiceConnectServiceResourceFormProperties {
		discoveryName: FormControl<string | null | undefined>,
		discoveryArn: FormControl<string | null | undefined>,
	}
	export function CreateServiceConnectServiceResourceFormGroup() {
		return new FormGroup<ServiceConnectServiceResourceFormProperties>({
			discoveryName: new FormControl<string | null | undefined>(undefined),
			discoveryArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details for an event that's associated with a service. */
	export interface ServiceEvent {
		id?: string;
		createdAt?: Date;
		message?: string;
	}

	/** The details for an event that's associated with a service. */
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


	/** <p>An object representing a constraint on task placement. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task placement constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>If you're using the Fargate launch type, task placement constraints aren't supported.</p> </note> */
	export interface PlacementConstraint {
		type?: PlacementConstraintType;
		expression?: string;
	}

	/** <p>An object representing a constraint on task placement. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task placement constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>If you're using the Fargate launch type, task placement constraints aren't supported.</p> </note> */
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


	/** The task placement strategy for a task or service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task placement strategies</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface PlacementStrategy {
		type?: PlacementStrategyType;
		field?: string;
	}

	/** The task placement strategy for a task or service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task placement strategies</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
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

	export enum SchedulingStrategy { REPLICA = 0, DAEMON = 1 }


	/** The deployment controller to use for the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface DeploymentController {

		/** Required */
		type: DeploymentControllerType;
	}

	/** The deployment controller to use for the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
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

	export enum PropagateTags { TASK_DEFINITION = 0, SERVICE = 1, NONE = 2 }

	export interface CreateServiceRequest {
		cluster?: string;

		/** Required */
		serviceName: string;
		taskDefinition?: string;
		loadBalancers?: Array<LoadBalancer>;
		serviceRegistries?: Array<ServiceRegistry>;
		desiredCount?: number | null;
		clientToken?: string;
		launchType?: LaunchType;
		capacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
		platformVersion?: string;
		role?: string;
		deploymentConfiguration?: DeploymentConfiguration;
		placementConstraints?: Array<PlacementConstraint>;
		placementStrategy?: Array<PlacementStrategy>;
		networkConfiguration?: NetworkConfiguration;
		healthCheckGracePeriodSeconds?: number | null;
		schedulingStrategy?: SchedulingStrategy;
		deploymentController?: DeploymentController;
		tags?: Array<Tag>;
		enableECSManagedTags?: boolean | null;
		propagateTags?: PropagateTags;
		enableExecuteCommand?: boolean | null;
		serviceConnectConfiguration?: ServiceConnectConfiguration;
	}
	export interface CreateServiceRequestFormProperties {
		cluster: FormControl<string | null | undefined>,

		/** Required */
		serviceName: FormControl<string | null | undefined>,
		taskDefinition: FormControl<string | null | undefined>,
		desiredCount: FormControl<number | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		launchType: FormControl<LaunchType | null | undefined>,
		platformVersion: FormControl<string | null | undefined>,
		role: FormControl<string | null | undefined>,
		healthCheckGracePeriodSeconds: FormControl<number | null | undefined>,
		schedulingStrategy: FormControl<SchedulingStrategy | null | undefined>,
		enableECSManagedTags: FormControl<boolean | null | undefined>,
		propagateTags: FormControl<PropagateTags | null | undefined>,
		enableExecuteCommand: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateServiceRequestFormGroup() {
		return new FormGroup<CreateServiceRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			taskDefinition: new FormControl<string | null | undefined>(undefined),
			desiredCount: new FormControl<number | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			launchType: new FormControl<LaunchType | null | undefined>(undefined),
			platformVersion: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
			healthCheckGracePeriodSeconds: new FormControl<number | null | undefined>(undefined),
			schedulingStrategy: new FormControl<SchedulingStrategy | null | undefined>(undefined),
			enableECSManagedTags: new FormControl<boolean | null | undefined>(undefined),
			propagateTags: new FormControl<PropagateTags | null | undefined>(undefined),
			enableExecuteCommand: new FormControl<boolean | null | undefined>(undefined),
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
		externalId?: string;

		/** Required */
		taskDefinition: string;
		networkConfiguration?: NetworkConfiguration;
		loadBalancers?: Array<LoadBalancer>;
		serviceRegistries?: Array<ServiceRegistry>;
		launchType?: LaunchType;
		capacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
		platformVersion?: string;
		scale?: Scale;
		clientToken?: string;
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
		launchType: FormControl<LaunchType | null | undefined>,
		platformVersion: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateTaskSetRequestFormGroup() {
		return new FormGroup<CreateTaskSetRequestFormProperties>({
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cluster: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			externalId: new FormControl<string | null | undefined>(undefined),
			taskDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			launchType: new FormControl<LaunchType | null | undefined>(undefined),
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
		name?: SettingName;
		value?: string;
		principalArn?: string;
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

	export enum SettingName { serviceLongArnFormat = 0, taskLongArnFormat = 1, containerInstanceLongArnFormat = 2, awsvpcTrunking = 3, containerInsights = 4, fargateFIPSMode = 5, tagResourceAuthorization = 6 }

	export interface DeleteAccountSettingRequest {

		/** Required */
		name: SettingName;
		principalArn?: string;
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


	/** An attribute is a name-value pair that's associated with an Amazon ECS object. Use attributes to extend the Amazon ECS data model by adding custom metadata to your resources. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface Attribute {

		/** Required */
		name: string;
		value?: string;
		targetType?: TargetType;
		targetId?: string;
	}

	/** An attribute is a name-value pair that's associated with an Amazon ECS object. Use attributes to extend the Amazon ECS data model by adding custom metadata to your resources. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface AttributeFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
		targetType: FormControl<TargetType | null | undefined>,
		targetId: FormControl<string | null | undefined>,
	}
	export function CreateAttributeFormGroup() {
		return new FormGroup<AttributeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
			targetType: new FormControl<TargetType | null | undefined>(undefined),
			targetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TargetType { 'container-instance' = 0 }

	export interface DeleteAttributesRequest {
		cluster?: string;

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

	export interface DeleteCapacityProviderResponse {
		capacityProvider?: CapacityProvider;
	}
	export interface DeleteCapacityProviderResponseFormProperties {
	}
	export function CreateDeleteCapacityProviderResponseFormGroup() {
		return new FormGroup<DeleteCapacityProviderResponseFormProperties>({
		});

	}

	export interface DeleteCapacityProviderRequest {

		/** Required */
		capacityProvider: string;
	}
	export interface DeleteCapacityProviderRequestFormProperties {

		/** Required */
		capacityProvider: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCapacityProviderRequestFormGroup() {
		return new FormGroup<DeleteCapacityProviderRequestFormProperties>({
			capacityProvider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteClusterResponse {
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

	export interface DeleteServiceResponse {
		service?: Service;
	}
	export interface DeleteServiceResponseFormProperties {
	}
	export function CreateDeleteServiceResponseFormGroup() {
		return new FormGroup<DeleteServiceResponseFormProperties>({
		});

	}

	export interface DeleteServiceRequest {
		cluster?: string;

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

	export interface DeleteTaskDefinitionsResponse {
		taskDefinitions?: Array<TaskDefinition>;
		failures?: Array<Failure>;
	}
	export interface DeleteTaskDefinitionsResponseFormProperties {
	}
	export function CreateDeleteTaskDefinitionsResponseFormGroup() {
		return new FormGroup<DeleteTaskDefinitionsResponseFormProperties>({
		});

	}


	/** The details of a task definition which describes the container and volume definitions of an Amazon Elastic Container Service task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task. */
	export interface TaskDefinition {
		taskDefinitionArn?: string;
		containerDefinitions?: Array<ContainerDefinition>;
		family?: string;
		taskRoleArn?: string;
		executionRoleArn?: string;
		networkMode?: NetworkMode;
		revision?: number | null;
		volumes?: Array<Volume>;
		status?: TaskDefinitionStatus;
		requiresAttributes?: Array<Attribute>;
		placementConstraints?: Array<TaskDefinitionPlacementConstraint>;
		compatibilities?: Array<Compatibility>;
		runtimePlatform?: RuntimePlatform;
		requiresCompatibilities?: Array<Compatibility>;
		cpu?: string;
		memory?: string;
		inferenceAccelerators?: Array<InferenceAccelerator>;
		pidMode?: PidMode;
		ipcMode?: IpcMode;
		proxyConfiguration?: ProxyConfiguration;
		registeredAt?: Date;
		deregisteredAt?: Date;
		registeredBy?: string;
		ephemeralStorage?: EphemeralStorage;
	}

	/** The details of a task definition which describes the container and volume definitions of an Amazon Elastic Container Service task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task. */
	export interface TaskDefinitionFormProperties {
		taskDefinitionArn: FormControl<string | null | undefined>,
		family: FormControl<string | null | undefined>,
		taskRoleArn: FormControl<string | null | undefined>,
		executionRoleArn: FormControl<string | null | undefined>,
		networkMode: FormControl<NetworkMode | null | undefined>,
		revision: FormControl<number | null | undefined>,
		status: FormControl<TaskDefinitionStatus | null | undefined>,
		cpu: FormControl<string | null | undefined>,
		memory: FormControl<string | null | undefined>,
		pidMode: FormControl<PidMode | null | undefined>,
		ipcMode: FormControl<IpcMode | null | undefined>,
		registeredAt: FormControl<Date | null | undefined>,
		deregisteredAt: FormControl<Date | null | undefined>,
		registeredBy: FormControl<string | null | undefined>,
	}
	export function CreateTaskDefinitionFormGroup() {
		return new FormGroup<TaskDefinitionFormProperties>({
			taskDefinitionArn: new FormControl<string | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			taskRoleArn: new FormControl<string | null | undefined>(undefined),
			executionRoleArn: new FormControl<string | null | undefined>(undefined),
			networkMode: new FormControl<NetworkMode | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<TaskDefinitionStatus | null | undefined>(undefined),
			cpu: new FormControl<string | null | undefined>(undefined),
			memory: new FormControl<string | null | undefined>(undefined),
			pidMode: new FormControl<PidMode | null | undefined>(undefined),
			ipcMode: new FormControl<IpcMode | null | undefined>(undefined),
			registeredAt: new FormControl<Date | null | undefined>(undefined),
			deregisteredAt: new FormControl<Date | null | undefined>(undefined),
			registeredBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container definitions are used in task definitions to describe the different containers that are launched as part of a task. */
	export interface ContainerDefinition {
		name?: string;
		image?: string;
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
		linuxParameters?: LinuxParameters;
		secrets?: Array<Secret>;
		dependsOn?: Array<ContainerDependency>;
		startTimeout?: number | null;
		stopTimeout?: number | null;
		hostname?: string;
		user?: string;
		workingDirectory?: string;
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
		logConfiguration?: LogConfiguration;
		healthCheck?: HealthCheck;
		systemControls?: Array<SystemControl>;
		resourceRequirements?: Array<ResourceRequirement>;
		firelensConfiguration?: FirelensConfiguration;
		credentialSpecs?: Array<string>;
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


	/** <p>Port mappings allow containers to access ports on the host container instance to send or receive traffic. Port mappings are specified as part of the container definition.</p> <p>If you use containers in a task with the <code>awsvpc</code> or <code>host</code> network mode, specify the exposed ports using <code>containerPort</code>. The <code>hostPort</code> can be left blank or it must be the same value as the <code>containerPort</code>.</p> <p>Most fields of this parameter (<code>containerPort</code>, <code>hostPort</code>, <code>protocol</code>) maps to <code>PortBindings</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--publish</code> option to <a href="https://docs.docker.com/engine/reference/commandline/run/"> <code>docker run</code> </a>. If the network mode of a task definition is set to <code>host</code>, host ports must either be undefined or match the container port in the port mapping.</p> <note> <p>You can't expose the same container port for multiple protocols. If you attempt this, an error is returned.</p> </note> <p>After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.</p> */
	export interface PortMapping {
		containerPort?: number | null;
		hostPort?: number | null;
		protocol?: TransportProtocol;
		name?: string;
		appProtocol?: ApplicationProtocol;
		containerPortRange?: string;
	}

	/** <p>Port mappings allow containers to access ports on the host container instance to send or receive traffic. Port mappings are specified as part of the container definition.</p> <p>If you use containers in a task with the <code>awsvpc</code> or <code>host</code> network mode, specify the exposed ports using <code>containerPort</code>. The <code>hostPort</code> can be left blank or it must be the same value as the <code>containerPort</code>.</p> <p>Most fields of this parameter (<code>containerPort</code>, <code>hostPort</code>, <code>protocol</code>) maps to <code>PortBindings</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--publish</code> option to <a href="https://docs.docker.com/engine/reference/commandline/run/"> <code>docker run</code> </a>. If the network mode of a task definition is set to <code>host</code>, host ports must either be undefined or match the container port in the port mapping.</p> <note> <p>You can't expose the same container port for multiple protocols. If you attempt this, an error is returned.</p> </note> <p>After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.</p> */
	export interface PortMappingFormProperties {
		containerPort: FormControl<number | null | undefined>,
		hostPort: FormControl<number | null | undefined>,
		protocol: FormControl<TransportProtocol | null | undefined>,
		name: FormControl<string | null | undefined>,
		appProtocol: FormControl<ApplicationProtocol | null | undefined>,
		containerPortRange: FormControl<string | null | undefined>,
	}
	export function CreatePortMappingFormGroup() {
		return new FormGroup<PortMappingFormProperties>({
			containerPort: new FormControl<number | null | undefined>(undefined),
			hostPort: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<TransportProtocol | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			appProtocol: new FormControl<ApplicationProtocol | null | undefined>(undefined),
			containerPortRange: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TransportProtocol { tcp = 0, udp = 1 }

	export enum ApplicationProtocol { http = 0, http2 = 1, grpc = 2 }


	/** <p>A list of files containing the environment variables to pass to a container. You can specify up to ten environment files. The file must have a <code>.env</code> file extension. Each line in an environment file should contain an environment variable in <code>VARIABLE=VALUE</code> format. Lines beginning with <code>#</code> are treated as comments and are ignored. For more information about the environment variable file syntax, see <a href="https://docs.docker.com/compose/env-file/">Declare default environment variables in file</a>.</p> <p>If there are environment variables specified using the <code>environment</code> parameter in a container definition, they take precedence over the variables contained within an environment file. If multiple environment files are specified that contain the same variable, they're processed from the top down. We recommend that you use unique variable names. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html">Specifying environment variables</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You must use the following platforms for the Fargate launch type:</p> <ul> <li> <p>Linux platform version <code>1.4.0</code> or later.</p> </li> <li> <p>Windows platform version <code>1.0.0</code> or later.</p> </li> </ul> */
	export interface EnvironmentFile {

		/** Required */
		value: string;

		/** Required */
		type: EnvironmentFileType;
	}

	/** <p>A list of files containing the environment variables to pass to a container. You can specify up to ten environment files. The file must have a <code>.env</code> file extension. Each line in an environment file should contain an environment variable in <code>VARIABLE=VALUE</code> format. Lines beginning with <code>#</code> are treated as comments and are ignored. For more information about the environment variable file syntax, see <a href="https://docs.docker.com/compose/env-file/">Declare default environment variables in file</a>.</p> <p>If there are environment variables specified using the <code>environment</code> parameter in a container definition, they take precedence over the variables contained within an environment file. If multiple environment files are specified that contain the same variable, they're processed from the top down. We recommend that you use unique variable names. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html">Specifying environment variables</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You must use the following platforms for the Fargate launch type:</p> <ul> <li> <p>Linux platform version <code>1.4.0</code> or later.</p> </li> <li> <p>Windows platform version <code>1.0.0</code> or later.</p> </li> </ul> */
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


	/** The details for a volume mount point that's used in a container definition. */
	export interface MountPoint {
		sourceVolume?: string;
		containerPath?: string;
		readOnly?: boolean | null;
	}

	/** The details for a volume mount point that's used in a container definition. */
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
		sourceContainer?: string;
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


	/** The Linux-specific options that are applied to the container, such as Linux <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_KernelCapabilities.html">KernelCapabilities</a>. */
	export interface LinuxParameters {
		capabilities?: KernelCapabilities;
		devices?: Array<Device>;
		initProcessEnabled?: boolean | null;
		sharedMemorySize?: number | null;
		tmpfs?: Array<Tmpfs>;
		maxSwap?: number | null;
		swappiness?: number | null;
	}

	/** The Linux-specific options that are applied to the container, such as Linux <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_KernelCapabilities.html">KernelCapabilities</a>. */
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


	/** The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker. For more information about the default capabilities and the non-default available capabilities, see <a href="https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities">Runtime privilege and Linux capabilities</a> in the <i>Docker run reference</i>. For more detailed information about these Linux capabilities, see the <a href="http://man7.org/linux/man-pages/man7/capabilities.7.html">capabilities(7)</a> Linux manual page. */
	export interface KernelCapabilities {
		add?: Array<string>;
		drop?: Array<string>;
	}

	/** The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker. For more information about the default capabilities and the non-default available capabilities, see <a href="https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities">Runtime privilege and Linux capabilities</a> in the <i>Docker run reference</i>. For more detailed information about these Linux capabilities, see the <a href="http://man7.org/linux/man-pages/man7/capabilities.7.html">capabilities(7)</a> Linux manual page. */
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
		containerPath?: string;
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


	/** <p>The dependencies defined for container startup and shutdown. A container can contain multiple dependencies. When a dependency is defined for container startup, for container shutdown it is reversed.</p> <p>Your Amazon ECS container instances require at least version 1.26.0 of the container agent to use container dependencies. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the <code>ecs-init</code> package. If your container instances are launched from version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>For tasks that use the Fargate launch type, the task or service requires the following platforms:</p> <ul> <li> <p>Linux platform version <code>1.3.0</code> or later.</p> </li> <li> <p>Windows platform version <code>1.0.0</code> or later.</p> </li> </ul> </note> */
	export interface ContainerDependency {

		/** Required */
		containerName: string;

		/** Required */
		condition: ContainerCondition;
	}

	/** <p>The dependencies defined for container startup and shutdown. A container can contain multiple dependencies. When a dependency is defined for container startup, for container shutdown it is reversed.</p> <p>Your Amazon ECS container instances require at least version 1.26.0 of the container agent to use container dependencies. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS Container Agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the <code>ecs-init</code> package. If your container instances are launched from version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>For tasks that use the Fargate launch type, the task or service requires the following platforms:</p> <ul> <li> <p>Linux platform version <code>1.3.0</code> or later.</p> </li> <li> <p>Windows platform version <code>1.0.0</code> or later.</p> </li> </ul> </note> */
	export interface ContainerDependencyFormProperties {

		/** Required */
		containerName: FormControl<string | null | undefined>,

		/** Required */
		condition: FormControl<ContainerCondition | null | undefined>,
	}
	export function CreateContainerDependencyFormGroup() {
		return new FormGroup<ContainerDependencyFormProperties>({
			containerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			condition: new FormControl<ContainerCondition | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ContainerCondition { START = 0, COMPLETE = 1, SUCCESS = 2, HEALTHY = 3 }


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


	/** <p>The <code>ulimit</code> settings to pass to the container.</p> <p>Amazon ECS tasks hosted on Fargate use the default resource limit values set by the operating system with the exception of the <code>nofile</code> resource limit parameter which Fargate overrides. The <code>nofile</code> resource limit sets a restriction on the number of open files that a container can use. The default <code>nofile</code> soft limit is <code>1024</code> and the default hard limit is <code>4096</code>.</p> <p>You can specify the <code>ulimit</code> settings for a container in a task definition.</p> */
	export interface Ulimit {

		/** Required */
		name: UlimitName;

		/** Required */
		softLimit: number;

		/** Required */
		hardLimit: number;
	}

	/** <p>The <code>ulimit</code> settings to pass to the container.</p> <p>Amazon ECS tasks hosted on Fargate use the default resource limit values set by the operating system with the exception of the <code>nofile</code> resource limit parameter which Fargate overrides. The <code>nofile</code> resource limit sets a restriction on the number of open files that a container can use. The default <code>nofile</code> soft limit is <code>1024</code> and the default hard limit is <code>4096</code>.</p> <p>You can specify the <code>ulimit</code> settings for a container in a task definition.</p> */
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


	/** <p>An object representing a container health check. Health check parameters that are specified in a container definition override any Docker health checks that exist in the container image (such as those specified in a parent image or from the image's Dockerfile). This configuration maps to the <code>HEALTHCHECK</code> parameter of <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>The Amazon ECS container agent only monitors and reports on the health checks specified in the task definition. Amazon ECS does not monitor Docker health checks that are embedded in a container image and not specified in the container definition. Health check parameters that are specified in a container definition override any Docker health checks that exist in the container image.</p> </note> <p>You can view the health status of both individual containers and a task with the DescribeTasks API operation or when viewing the task details in the console.</p> <p>The health check is designed to make sure that your containers survive agent restarts, upgrades, or temporary unavailability.</p> <p>The following describes the possible <code>healthStatus</code> values for a container:</p> <ul> <li> <p> <code>HEALTHY</code>-The container health check has passed successfully.</p> </li> <li> <p> <code>UNHEALTHY</code>-The container health check has failed.</p> </li> <li> <p> <code>UNKNOWN</code>-The container health check is being evaluated or there's no container health check defined.</p> </li> </ul> <p>The following describes the possible <code>healthStatus</code> values for a task. The container health check status of non-essential containers don't have an effect on the health status of a task.</p> <ul> <li> <p> <code>HEALTHY</code>-All essential containers within the task have passed their health checks.</p> </li> <li> <p> <code>UNHEALTHY</code>-One or more essential containers have failed their health check.</p> </li> <li> <p> <code>UNKNOWN</code>-The essential containers within the task are still having their health checks evaluated, there are only nonessential containers with health checks defined, or there are no container health checks defined.</p> </li> </ul> <p>If a task is run manually, and not as part of a service, the task will continue its lifecycle regardless of its health status. For tasks that are part of a service, if the task reports as unhealthy then the task will be stopped and the service scheduler will replace it.</p> <p>The following are notes about container health check support:</p> <ul> <li> <p>When the Amazon ECS agent cannot connect to the Amazon ECS service, the service reports the container as <code>UNHEALTHY</code>. </p> </li> <li> <p>The health check statuses are the "last heard from" response from the Amazon ECS agent. There are no assumptions made about the status of the container health checks.</p> </li> <li> <p>Container health checks require version 1.17.0 or greater of the Amazon ECS container agent. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS container agent</a>.</p> </li> <li> <p>Container health checks are supported for Fargate tasks if you're using platform version <code>1.1.0</code> or greater. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate platform versions</a>.</p> </li> <li> <p>Container health checks aren't supported for tasks that are part of a service that's configured to use a Classic Load Balancer.</p> </li> </ul> */
	export interface HealthCheck {

		/** Required */
		command: Array<string>;
		interval?: number | null;
		timeout?: number | null;
		retries?: number | null;
		startPeriod?: number | null;
	}

	/** <p>An object representing a container health check. Health check parameters that are specified in a container definition override any Docker health checks that exist in the container image (such as those specified in a parent image or from the image's Dockerfile). This configuration maps to the <code>HEALTHCHECK</code> parameter of <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p> <note> <p>The Amazon ECS container agent only monitors and reports on the health checks specified in the task definition. Amazon ECS does not monitor Docker health checks that are embedded in a container image and not specified in the container definition. Health check parameters that are specified in a container definition override any Docker health checks that exist in the container image.</p> </note> <p>You can view the health status of both individual containers and a task with the DescribeTasks API operation or when viewing the task details in the console.</p> <p>The health check is designed to make sure that your containers survive agent restarts, upgrades, or temporary unavailability.</p> <p>The following describes the possible <code>healthStatus</code> values for a container:</p> <ul> <li> <p> <code>HEALTHY</code>-The container health check has passed successfully.</p> </li> <li> <p> <code>UNHEALTHY</code>-The container health check has failed.</p> </li> <li> <p> <code>UNKNOWN</code>-The container health check is being evaluated or there's no container health check defined.</p> </li> </ul> <p>The following describes the possible <code>healthStatus</code> values for a task. The container health check status of non-essential containers don't have an effect on the health status of a task.</p> <ul> <li> <p> <code>HEALTHY</code>-All essential containers within the task have passed their health checks.</p> </li> <li> <p> <code>UNHEALTHY</code>-One or more essential containers have failed their health check.</p> </li> <li> <p> <code>UNKNOWN</code>-The essential containers within the task are still having their health checks evaluated, there are only nonessential containers with health checks defined, or there are no container health checks defined.</p> </li> </ul> <p>If a task is run manually, and not as part of a service, the task will continue its lifecycle regardless of its health status. For tasks that are part of a service, if the task reports as unhealthy then the task will be stopped and the service scheduler will replace it.</p> <p>The following are notes about container health check support:</p> <ul> <li> <p>When the Amazon ECS agent cannot connect to the Amazon ECS service, the service reports the container as <code>UNHEALTHY</code>. </p> </li> <li> <p>The health check statuses are the "last heard from" response from the Amazon ECS agent. There are no assumptions made about the status of the container health checks.</p> </li> <li> <p>Container health checks require version 1.17.0 or greater of the Amazon ECS container agent. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html">Updating the Amazon ECS container agent</a>.</p> </li> <li> <p>Container health checks are supported for Fargate tasks if you're using platform version <code>1.1.0</code> or greater. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate platform versions</a>.</p> </li> <li> <p>Container health checks aren't supported for tasks that are part of a service that's configured to use a Classic Load Balancer.</p> </li> </ul> */
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


	/** <p>A list of namespaced kernel parameters to set in the container. This parameter maps to <code>Sysctls</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--sysctl</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>.</p> <p>We don't recommend that you specify network-related <code>systemControls</code> parameters for multiple containers in a single task. This task also uses either the <code>awsvpc</code> or <code>host</code> network mode. It does it for the following reasons.</p> <ul> <li> <p>For tasks that use the <code>awsvpc</code> network mode, if you set <code>systemControls</code> for any container, it applies to all containers in the task. If you set different <code>systemControls</code> for multiple containers in a single task, the container that's started last determines which <code>systemControls</code> take effect.</p> </li> <li> <p>For tasks that use the <code>host</code> network mode, the <code>systemControls</code> parameter applies to the container instance's kernel parameter and that of all containers of any tasks running on that container instance.</p> </li> </ul> */
	export interface SystemControl {
		namespace?: string;
		value?: string;
	}

	/** <p>A list of namespaced kernel parameters to set in the container. This parameter maps to <code>Sysctls</code> in the <a href="https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate">Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.35/">Docker Remote API</a> and the <code>--sysctl</code> option to <a href="https://docs.docker.com/engine/reference/run/#security-configuration">docker run</a>.</p> <p>We don't recommend that you specify network-related <code>systemControls</code> parameters for multiple containers in a single task. This task also uses either the <code>awsvpc</code> or <code>host</code> network mode. It does it for the following reasons.</p> <ul> <li> <p>For tasks that use the <code>awsvpc</code> network mode, if you set <code>systemControls</code> for any container, it applies to all containers in the task. If you set different <code>systemControls</code> for multiple containers in a single task, the container that's started last determines which <code>systemControls</code> take effect.</p> </li> <li> <p>For tasks that use the <code>host</code> network mode, the <code>systemControls</code> parameter applies to the container instance's kernel parameter and that of all containers of any tasks running on that container instance.</p> </li> </ul> */
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


	/** The type and amount of a resource to assign to a container. The supported resource types are GPUs and Elastic Inference accelerators. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-gpu.html">Working with GPUs on Amazon ECS</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>  */
	export interface ResourceRequirement {

		/** Required */
		value: string;

		/** Required */
		type: ResourceType;
	}

	/** The type and amount of a resource to assign to a container. The supported resource types are GPUs and Elastic Inference accelerators. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-gpu.html">Working with GPUs on Amazon ECS</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>  */
	export interface ResourceRequirementFormProperties {

		/** Required */
		value: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<ResourceType | null | undefined>,
	}
	export function CreateResourceRequirementFormGroup() {
		return new FormGroup<ResourceRequirementFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceType { GPU = 0, InferenceAccelerator = 1 }


	/** The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html">Custom log routing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface FirelensConfiguration {

		/** Required */
		type: FirelensConfigurationType;
		options?: FirelensConfigurationOptionsMap;
	}

	/** The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html">Custom log routing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
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

	export enum NetworkMode { bridge = 0, host = 1, awsvpc = 2, none = 3 }


	/** A data volume that's used in a task definition. For tasks that use the Amazon Elastic File System (Amazon EFS), specify an <code>efsVolumeConfiguration</code>. For Windows tasks that use Amazon FSx for Windows File Server file system, specify a <code>fsxWindowsFileServerVolumeConfiguration</code>. For tasks that use a Docker volume, specify a <code>DockerVolumeConfiguration</code>. For tasks that use a bind mount host volume, specify a <code>host</code> and optional <code>sourcePath</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html">Using Data Volumes in Tasks</a>. */
	export interface Volume {
		name?: string;
		host?: HostVolumeProperties;
		dockerVolumeConfiguration?: DockerVolumeConfiguration;
		efsVolumeConfiguration?: EFSVolumeConfiguration;
		fsxWindowsFileServerVolumeConfiguration?: FSxWindowsFileServerVolumeConfiguration;
	}

	/** A data volume that's used in a task definition. For tasks that use the Amazon Elastic File System (Amazon EFS), specify an <code>efsVolumeConfiguration</code>. For Windows tasks that use Amazon FSx for Windows File Server file system, specify a <code>fsxWindowsFileServerVolumeConfiguration</code>. For tasks that use a Docker volume, specify a <code>DockerVolumeConfiguration</code>. For tasks that use a bind mount host volume, specify a <code>host</code> and optional <code>sourcePath</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html">Using Data Volumes in Tasks</a>. */
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
		sourcePath?: string;
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


	/** This parameter is specified when you're using Docker volumes. Docker volumes are only supported when you're using the EC2 launch type. Windows containers only support the use of the <code>local</code> driver. To use bind mounts, specify a <code>host</code> instead. */
	export interface DockerVolumeConfiguration {
		scope?: Scope;
		autoprovision?: boolean | null;
		driver?: string;
		driverOpts?: StringMap;
		labels?: StringMap;
	}

	/** This parameter is specified when you're using Docker volumes. Docker volumes are only supported when you're using the EC2 launch type. Windows containers only support the use of the <code>local</code> driver. To use bind mounts, specify a <code>host</code> instead. */
	export interface DockerVolumeConfigurationFormProperties {
		scope: FormControl<Scope | null | undefined>,
		autoprovision: FormControl<boolean | null | undefined>,
		driver: FormControl<string | null | undefined>,
	}
	export function CreateDockerVolumeConfigurationFormGroup() {
		return new FormGroup<DockerVolumeConfigurationFormProperties>({
			scope: new FormControl<Scope | null | undefined>(undefined),
			autoprovision: new FormControl<boolean | null | undefined>(undefined),
			driver: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Scope { task = 0, shared = 1 }

	export interface StringMap {
	}
	export interface StringMapFormProperties {
	}
	export function CreateStringMapFormGroup() {
		return new FormGroup<StringMapFormProperties>({
		});

	}


	/** This parameter is specified when you're using an Amazon Elastic File System file system for task storage. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html">Amazon EFS volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface EFSVolumeConfiguration {

		/** Required */
		fileSystemId: string;
		rootDirectory?: string;
		transitEncryption?: ManagedScalingStatus;
		transitEncryptionPort?: number | null;
		authorizationConfig?: EFSAuthorizationConfig;
	}

	/** This parameter is specified when you're using an Amazon Elastic File System file system for task storage. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html">Amazon EFS volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
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
		accessPointId?: string;
		iam?: ManagedScalingStatus;
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


	/** <p>This parameter is specified when you're using <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html">Amazon FSx for Windows File Server</a> file system for task storage.</p> <p>For more information and the input format, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/wfsx-volumes.html">Amazon FSx for Windows File Server volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> */
	export interface FSxWindowsFileServerVolumeConfiguration {

		/** Required */
		fileSystemId: string;

		/** Required */
		rootDirectory: string;

		/** Required */
		authorizationConfig: FSxWindowsFileServerAuthorizationConfig;
	}

	/** <p>This parameter is specified when you're using <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html">Amazon FSx for Windows File Server</a> file system for task storage.</p> <p>For more information and the input format, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/wfsx-volumes.html">Amazon FSx for Windows File Server volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> */
	export interface FSxWindowsFileServerVolumeConfigurationFormProperties {

		/** Required */
		fileSystemId: FormControl<string | null | undefined>,

		/** Required */
		rootDirectory: FormControl<string | null | undefined>,
	}
	export function CreateFSxWindowsFileServerVolumeConfigurationFormGroup() {
		return new FormGroup<FSxWindowsFileServerVolumeConfigurationFormProperties>({
			fileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rootDirectory: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The authorization configuration details for Amazon FSx for Windows File Server file system. See <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_FSxWindowsFileServerVolumeConfiguration.html">FSxWindowsFileServerVolumeConfiguration</a> in the <i>Amazon ECS API Reference</i>.</p> <p>For more information and the input format, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/wfsx-volumes.html">Amazon FSx for Windows File Server Volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> */
	export interface FSxWindowsFileServerAuthorizationConfig {

		/** Required */
		credentialsParameter: string;

		/** Required */
		domain: string;
	}

	/** <p>The authorization configuration details for Amazon FSx for Windows File Server file system. See <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_FSxWindowsFileServerVolumeConfiguration.html">FSxWindowsFileServerVolumeConfiguration</a> in the <i>Amazon ECS API Reference</i>.</p> <p>For more information and the input format, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/wfsx-volumes.html">Amazon FSx for Windows File Server Volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> */
	export interface FSxWindowsFileServerAuthorizationConfigFormProperties {

		/** Required */
		credentialsParameter: FormControl<string | null | undefined>,

		/** Required */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateFSxWindowsFileServerAuthorizationConfigFormGroup() {
		return new FormGroup<FSxWindowsFileServerAuthorizationConfigFormProperties>({
			credentialsParameter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TaskDefinitionStatus { ACTIVE = 0, INACTIVE = 1, DELETE_IN_PROGRESS = 2 }


	/** <p>The constraint on task placement in the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task placement constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>Task placement constraints aren't supported for tasks run on Fargate.</p> </note> */
	export interface TaskDefinitionPlacementConstraint {
		type?: TaskDefinitionPlacementConstraintType;
		expression?: string;
	}

	/** <p>The constraint on task placement in the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task placement constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>Task placement constraints aren't supported for tasks run on Fargate.</p> </note> */
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

	export enum Compatibility { EC2 = 0, FARGATE = 1, EXTERNAL = 2 }


	/** <p>Information about the platform for the Amazon ECS service or task.</p> <p>For more information about <code>RuntimePlatform</code>, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#runtime-platform">RuntimePlatform</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> */
	export interface RuntimePlatform {
		cpuArchitecture?: CPUArchitecture;
		operatingSystemFamily?: OSFamily;
	}

	/** <p>Information about the platform for the Amazon ECS service or task.</p> <p>For more information about <code>RuntimePlatform</code>, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#runtime-platform">RuntimePlatform</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> */
	export interface RuntimePlatformFormProperties {
		cpuArchitecture: FormControl<CPUArchitecture | null | undefined>,
		operatingSystemFamily: FormControl<OSFamily | null | undefined>,
	}
	export function CreateRuntimePlatformFormGroup() {
		return new FormGroup<RuntimePlatformFormProperties>({
			cpuArchitecture: new FormControl<CPUArchitecture | null | undefined>(undefined),
			operatingSystemFamily: new FormControl<OSFamily | null | undefined>(undefined),
		});

	}

	export enum CPUArchitecture { X86_64 = 0, ARM64 = 1 }

	export enum OSFamily { WINDOWS_SERVER_2019_FULL = 0, WINDOWS_SERVER_2019_CORE = 1, WINDOWS_SERVER_2016_FULL = 2, WINDOWS_SERVER_2004_CORE = 3, WINDOWS_SERVER_2022_CORE = 4, WINDOWS_SERVER_2022_FULL = 5, WINDOWS_SERVER_20H2_CORE = 6, LINUX = 7 }


	/** Details on an Elastic Inference accelerator. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface InferenceAccelerator {

		/** Required */
		deviceName: string;

		/** Required */
		deviceType: string;
	}

	/** Details on an Elastic Inference accelerator. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
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

	export enum PidMode { host = 0, task = 1 }

	export enum IpcMode { host = 0, task = 1, none = 2 }


	/** <p>The configuration details for the App Mesh proxy.</p> <p>For tasks that use the EC2 launch type, the container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the <code>ecs-init</code> package to use a proxy configuration. If your container instances are launched from the Amazon ECS optimized AMI version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> </p> */
	export interface ProxyConfiguration {
		type?: ProxyConfigurationType;

		/** Required */
		containerName: string;

		/** <p>The set of network configuration parameters to provide the Container Network Interface (CNI) plugin, specified as key-value pairs.</p> <ul> <li> <p> <code>IgnoredUID</code> - (Required) The user ID (UID) of the proxy container as defined by the <code>user</code> parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If <code>IgnoredGID</code> is specified, this field can be empty.</p> </li> <li> <p> <code>IgnoredGID</code> - (Required) The group ID (GID) of the proxy container as defined by the <code>user</code> parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If <code>IgnoredUID</code> is specified, this field can be empty.</p> </li> <li> <p> <code>AppPorts</code> - (Required) The list of ports that the application uses. Network traffic to these ports is forwarded to the <code>ProxyIngressPort</code> and <code>ProxyEgressPort</code>.</p> </li> <li> <p> <code>ProxyIngressPort</code> - (Required) Specifies the port that incoming traffic to the <code>AppPorts</code> is directed to.</p> </li> <li> <p> <code>ProxyEgressPort</code> - (Required) Specifies the port that outgoing traffic from the <code>AppPorts</code> is directed to.</p> </li> <li> <p> <code>EgressIgnoredPorts</code> - (Required) The egress traffic going to the specified ports is ignored and not redirected to the <code>ProxyEgressPort</code>. It can be an empty list.</p> </li> <li> <p> <code>EgressIgnoredIPs</code> - (Required) The egress traffic going to the specified IP addresses is ignored and not redirected to the <code>ProxyEgressPort</code>. It can be an empty list.</p> </li> </ul> */
		properties?: any;
	}

	/** <p>The configuration details for the App Mesh proxy.</p> <p>For tasks that use the EC2 launch type, the container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the <code>ecs-init</code> package to use a proxy configuration. If your container instances are launched from the Amazon ECS optimized AMI version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> </p> */
	export interface ProxyConfigurationFormProperties {
		type: FormControl<ProxyConfigurationType | null | undefined>,

		/** Required */
		containerName: FormControl<string | null | undefined>,

		/** <p>The set of network configuration parameters to provide the Container Network Interface (CNI) plugin, specified as key-value pairs.</p> <ul> <li> <p> <code>IgnoredUID</code> - (Required) The user ID (UID) of the proxy container as defined by the <code>user</code> parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If <code>IgnoredGID</code> is specified, this field can be empty.</p> </li> <li> <p> <code>IgnoredGID</code> - (Required) The group ID (GID) of the proxy container as defined by the <code>user</code> parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If <code>IgnoredUID</code> is specified, this field can be empty.</p> </li> <li> <p> <code>AppPorts</code> - (Required) The list of ports that the application uses. Network traffic to these ports is forwarded to the <code>ProxyIngressPort</code> and <code>ProxyEgressPort</code>.</p> </li> <li> <p> <code>ProxyIngressPort</code> - (Required) Specifies the port that incoming traffic to the <code>AppPorts</code> is directed to.</p> </li> <li> <p> <code>ProxyEgressPort</code> - (Required) Specifies the port that outgoing traffic from the <code>AppPorts</code> is directed to.</p> </li> <li> <p> <code>EgressIgnoredPorts</code> - (Required) The egress traffic going to the specified ports is ignored and not redirected to the <code>ProxyEgressPort</code>. It can be an empty list.</p> </li> <li> <p> <code>EgressIgnoredIPs</code> - (Required) The egress traffic going to the specified IP addresses is ignored and not redirected to the <code>ProxyEgressPort</code>. It can be an empty list.</p> </li> </ul> */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateProxyConfigurationFormGroup() {
		return new FormGroup<ProxyConfigurationFormProperties>({
			type: new FormControl<ProxyConfigurationType | null | undefined>(undefined),
			containerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export enum ProxyConfigurationType { APPMESH = 0 }


	/** <p>The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/userguide/using_data_volumes.html">Fargate task storage</a> in the <i>Amazon ECS User Guide for Fargate</i>.</p> <note> <p>For tasks using the Fargate launch type, the task requires the following platforms:</p> <ul> <li> <p>Linux platform version <code>1.4.0</code> or later.</p> </li> <li> <p>Windows platform version <code>1.0.0</code> or later.</p> </li> </ul> </note> */
	export interface EphemeralStorage {

		/** Required */
		sizeInGiB: number;
	}

	/** <p>The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/userguide/using_data_volumes.html">Fargate task storage</a> in the <i>Amazon ECS User Guide for Fargate</i>.</p> <note> <p>For tasks using the Fargate launch type, the task requires the following platforms:</p> <ul> <li> <p>Linux platform version <code>1.4.0</code> or later.</p> </li> <li> <p>Windows platform version <code>1.0.0</code> or later.</p> </li> </ul> </note> */
	export interface EphemeralStorageFormProperties {

		/** Required */
		sizeInGiB: FormControl<number | null | undefined>,
	}
	export function CreateEphemeralStorageFormGroup() {
		return new FormGroup<EphemeralStorageFormProperties>({
			sizeInGiB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A failed resource. For a list of common causes, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure reasons</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface Failure {
		arn?: string;
		reason?: string;
		detail?: string;
	}

	/** A failed resource. For a list of common causes, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure reasons</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
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

	export interface DeleteTaskDefinitionsRequest {

		/** Required */
		taskDefinitions: Array<string>;
	}
	export interface DeleteTaskDefinitionsRequestFormProperties {
	}
	export function CreateDeleteTaskDefinitionsRequestFormGroup() {
		return new FormGroup<DeleteTaskDefinitionsRequestFormProperties>({
		});

	}

	export interface DeleteTaskSetResponse {
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
		containerInstance?: ContainerInstance;
	}
	export interface DeregisterContainerInstanceResponseFormProperties {
	}
	export function CreateDeregisterContainerInstanceResponseFormGroup() {
		return new FormGroup<DeregisterContainerInstanceResponseFormProperties>({
		});

	}


	/** An Amazon EC2 or External instance that's running the Amazon ECS agent and has been registered with a cluster. */
	export interface ContainerInstance {
		containerInstanceArn?: string;
		ec2InstanceId?: string;
		capacityProviderName?: string;
		version?: number | null;
		versionInfo?: VersionInfo;
		remainingResources?: Array<Resource>;
		registeredResources?: Array<Resource>;
		status?: string;
		statusReason?: string;
		agentConnected?: boolean | null;
		runningTasksCount?: number | null;
		pendingTasksCount?: number | null;
		agentUpdateStatus?: AgentUpdateStatus;
		attributes?: Array<Attribute>;
		registeredAt?: Date;
		attachments?: Array<Attachment>;
		tags?: Array<Tag>;
		healthStatus?: ContainerInstanceHealthStatus;
	}

	/** An Amazon EC2 or External instance that's running the Amazon ECS agent and has been registered with a cluster. */
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
		agentUpdateStatus: FormControl<AgentUpdateStatus | null | undefined>,
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
			agentUpdateStatus: new FormControl<AgentUpdateStatus | null | undefined>(undefined),
			registeredAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The Docker and Amazon ECS container agent version information about a container instance. */
	export interface VersionInfo {
		agentVersion?: string;
		agentHash?: string;
		dockerVersion?: string;
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
		name?: string;
		type?: string;
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

	export enum AgentUpdateStatus { PENDING = 0, STAGING = 1, STAGED = 2, UPDATING = 3, UPDATED = 4, FAILED = 5 }


	/** An object representing the health status of the container instance. */
	export interface ContainerInstanceHealthStatus {
		overallStatus?: InstanceHealthCheckState;
		details?: Array<InstanceHealthCheckResult>;
	}

	/** An object representing the health status of the container instance. */
	export interface ContainerInstanceHealthStatusFormProperties {
		overallStatus: FormControl<InstanceHealthCheckState | null | undefined>,
	}
	export function CreateContainerInstanceHealthStatusFormGroup() {
		return new FormGroup<ContainerInstanceHealthStatusFormProperties>({
			overallStatus: new FormControl<InstanceHealthCheckState | null | undefined>(undefined),
		});

	}

	export enum InstanceHealthCheckState { OK = 0, IMPAIRED = 1, INSUFFICIENT_DATA = 2, INITIALIZING = 3 }


	/** An object representing the result of a container instance health status check. */
	export interface InstanceHealthCheckResult {
		type?: InstanceHealthCheckType;
		status?: InstanceHealthCheckState;
		lastUpdated?: Date;
		lastStatusChange?: Date;
	}

	/** An object representing the result of a container instance health status check. */
	export interface InstanceHealthCheckResultFormProperties {
		type: FormControl<InstanceHealthCheckType | null | undefined>,
		status: FormControl<InstanceHealthCheckState | null | undefined>,
		lastUpdated: FormControl<Date | null | undefined>,
		lastStatusChange: FormControl<Date | null | undefined>,
	}
	export function CreateInstanceHealthCheckResultFormGroup() {
		return new FormGroup<InstanceHealthCheckResultFormProperties>({
			type: new FormControl<InstanceHealthCheckType | null | undefined>(undefined),
			status: new FormControl<InstanceHealthCheckState | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			lastStatusChange: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum InstanceHealthCheckType { CONTAINER_RUNTIME = 0 }

	export interface DeregisterContainerInstanceRequest {
		cluster?: string;

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
		taskDefinition?: TaskDefinition;
	}
	export interface DeregisterTaskDefinitionResponseFormProperties {
	}
	export function CreateDeregisterTaskDefinitionResponseFormGroup() {
		return new FormGroup<DeregisterTaskDefinitionResponseFormProperties>({
		});

	}

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
		nextToken?: string;
	}
	export interface DescribeCapacityProvidersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCapacityProvidersResponseFormGroup() {
		return new FormGroup<DescribeCapacityProvidersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeCapacityProvidersRequest {
		capacityProviders?: Array<string>;
		include?: Array<CapacityProviderField>;
		maxResults?: number | null;
		nextToken?: string;
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

	export enum ClusterField { ATTACHMENTS = 0, CONFIGURATIONS = 1, SETTINGS = 2, STATISTICS = 3, TAGS = 4 }

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
		cluster?: string;

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

	export enum ContainerInstanceField { TAGS = 0, CONTAINER_INSTANCE_HEALTH = 1 }

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
		cluster?: string;

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
		taskDefinition?: TaskDefinition;
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
		availabilityZone?: string;
		capacityProviderName?: string;
		clusterArn?: string;
		connectivity?: Connectivity;
		connectivityAt?: Date;
		containerInstanceArn?: string;
		containers?: Array<Container>;
		cpu?: string;
		createdAt?: Date;
		desiredStatus?: string;
		enableExecuteCommand?: boolean | null;
		executionStoppedAt?: Date;
		group?: string;
		healthStatus?: HealthStatus;
		inferenceAccelerators?: Array<InferenceAccelerator>;
		lastStatus?: string;
		launchType?: LaunchType;
		memory?: string;
		overrides?: TaskOverride;
		platformVersion?: string;
		platformFamily?: string;
		pullStartedAt?: Date;
		pullStoppedAt?: Date;
		startedAt?: Date;
		startedBy?: string;
		stopCode?: TaskStopCode;
		stoppedAt?: Date;
		stoppedReason?: string;
		stoppingAt?: Date;
		tags?: Array<Tag>;
		taskArn?: string;
		taskDefinitionArn?: string;
		version?: number | null;
		ephemeralStorage?: EphemeralStorage;
	}

	/** Details on a task in a cluster. */
	export interface Task_FormProperties {
		availabilityZone: FormControl<string | null | undefined>,
		capacityProviderName: FormControl<string | null | undefined>,
		clusterArn: FormControl<string | null | undefined>,
		connectivity: FormControl<Connectivity | null | undefined>,
		connectivityAt: FormControl<Date | null | undefined>,
		containerInstanceArn: FormControl<string | null | undefined>,
		cpu: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		desiredStatus: FormControl<string | null | undefined>,
		enableExecuteCommand: FormControl<boolean | null | undefined>,
		executionStoppedAt: FormControl<Date | null | undefined>,
		group: FormControl<string | null | undefined>,
		healthStatus: FormControl<HealthStatus | null | undefined>,
		lastStatus: FormControl<string | null | undefined>,
		launchType: FormControl<LaunchType | null | undefined>,
		memory: FormControl<string | null | undefined>,
		platformVersion: FormControl<string | null | undefined>,
		platformFamily: FormControl<string | null | undefined>,
		pullStartedAt: FormControl<Date | null | undefined>,
		pullStoppedAt: FormControl<Date | null | undefined>,
		startedAt: FormControl<Date | null | undefined>,
		startedBy: FormControl<string | null | undefined>,
		stopCode: FormControl<TaskStopCode | null | undefined>,
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
			connectivity: new FormControl<Connectivity | null | undefined>(undefined),
			connectivityAt: new FormControl<Date | null | undefined>(undefined),
			containerInstanceArn: new FormControl<string | null | undefined>(undefined),
			cpu: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			desiredStatus: new FormControl<string | null | undefined>(undefined),
			enableExecuteCommand: new FormControl<boolean | null | undefined>(undefined),
			executionStoppedAt: new FormControl<Date | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			healthStatus: new FormControl<HealthStatus | null | undefined>(undefined),
			lastStatus: new FormControl<string | null | undefined>(undefined),
			launchType: new FormControl<LaunchType | null | undefined>(undefined),
			memory: new FormControl<string | null | undefined>(undefined),
			platformVersion: new FormControl<string | null | undefined>(undefined),
			platformFamily: new FormControl<string | null | undefined>(undefined),
			pullStartedAt: new FormControl<Date | null | undefined>(undefined),
			pullStoppedAt: new FormControl<Date | null | undefined>(undefined),
			startedAt: new FormControl<Date | null | undefined>(undefined),
			startedBy: new FormControl<string | null | undefined>(undefined),
			stopCode: new FormControl<TaskStopCode | null | undefined>(undefined),
			stoppedAt: new FormControl<Date | null | undefined>(undefined),
			stoppedReason: new FormControl<string | null | undefined>(undefined),
			stoppingAt: new FormControl<Date | null | undefined>(undefined),
			taskArn: new FormControl<string | null | undefined>(undefined),
			taskDefinitionArn: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Connectivity { CONNECTED = 0, DISCONNECTED = 1 }


	/** A Docker container that's part of a task. */
	export interface Container {
		containerArn?: string;
		taskArn?: string;
		name?: string;
		image?: string;
		imageDigest?: string;
		runtimeId?: string;
		lastStatus?: string;
		exitCode?: number | null;
		reason?: string;
		networkBindings?: Array<NetworkBinding>;
		networkInterfaces?: Array<NetworkInterface>;
		healthStatus?: HealthStatus;
		managedAgents?: Array<ManagedAgent>;
		cpu?: string;
		memory?: string;
		memoryReservation?: string;
		gpuIds?: Array<string>;
	}

	/** A Docker container that's part of a task. */
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
		healthStatus: FormControl<HealthStatus | null | undefined>,
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
			healthStatus: new FormControl<HealthStatus | null | undefined>(undefined),
			cpu: new FormControl<string | null | undefined>(undefined),
			memory: new FormControl<string | null | undefined>(undefined),
			memoryReservation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details on the network bindings between a container and its host container instance. After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses. */
	export interface NetworkBinding {
		bindIP?: string;
		containerPort?: number | null;
		hostPort?: number | null;
		protocol?: TransportProtocol;
		containerPortRange?: string;
		hostPortRange?: string;
	}

	/** Details on the network bindings between a container and its host container instance. After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses. */
	export interface NetworkBindingFormProperties {
		bindIP: FormControl<string | null | undefined>,
		containerPort: FormControl<number | null | undefined>,
		hostPort: FormControl<number | null | undefined>,
		protocol: FormControl<TransportProtocol | null | undefined>,
		containerPortRange: FormControl<string | null | undefined>,
		hostPortRange: FormControl<string | null | undefined>,
	}
	export function CreateNetworkBindingFormGroup() {
		return new FormGroup<NetworkBindingFormProperties>({
			bindIP: new FormControl<string | null | undefined>(undefined),
			containerPort: new FormControl<number | null | undefined>(undefined),
			hostPort: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<TransportProtocol | null | undefined>(undefined),
			containerPortRange: new FormControl<string | null | undefined>(undefined),
			hostPortRange: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing the elastic network interface for tasks that use the <code>awsvpc</code> network mode. */
	export interface NetworkInterface {
		attachmentId?: string;
		privateIpv4Address?: string;
		ipv6Address?: string;
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

	export enum HealthStatus { HEALTHY = 0, UNHEALTHY = 1, UNKNOWN = 2 }


	/** Details about the managed agent status for the container. */
	export interface ManagedAgent {
		lastStartedAt?: Date;
		name?: ManagedAgentName;
		reason?: string;
		lastStatus?: string;
	}

	/** Details about the managed agent status for the container. */
	export interface ManagedAgentFormProperties {
		lastStartedAt: FormControl<Date | null | undefined>,
		name: FormControl<ManagedAgentName | null | undefined>,
		reason: FormControl<string | null | undefined>,
		lastStatus: FormControl<string | null | undefined>,
	}
	export function CreateManagedAgentFormGroup() {
		return new FormGroup<ManagedAgentFormProperties>({
			lastStartedAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<ManagedAgentName | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			lastStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ManagedAgentName { ExecuteCommandAgent = 0 }


	/** The overrides that are associated with a task. */
	export interface TaskOverride {
		containerOverrides?: Array<ContainerOverride>;
		cpu?: string;
		inferenceAcceleratorOverrides?: Array<InferenceAcceleratorOverride>;
		executionRoleArn?: string;
		memory?: string;
		taskRoleArn?: string;
		ephemeralStorage?: EphemeralStorage;
	}

	/** The overrides that are associated with a task. */
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


	/** <p>The overrides that are sent to a container. An empty container override can be passed in. An example of an empty container override is <code>{"containerOverrides": [ ] }</code>. If a non-empty container override is specified, the <code>name</code> parameter must be included.</p> <p>You can use Secrets Manager or Amazon Web Services Systems Manager Parameter Store to store the sensitive data. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/secrets-envvar.html">Retrieve secrets through environment variables</a> in the Amazon ECS Developer Guide.</p> */
	export interface ContainerOverride {
		name?: string;
		command?: Array<string>;
		environment?: Array<KeyValuePair>;
		environmentFiles?: Array<EnvironmentFile>;
		cpu?: number | null;
		memory?: number | null;
		memoryReservation?: number | null;
		resourceRequirements?: Array<ResourceRequirement>;
	}

	/** <p>The overrides that are sent to a container. An empty container override can be passed in. An example of an empty container override is <code>{"containerOverrides": [ ] }</code>. If a non-empty container override is specified, the <code>name</code> parameter must be included.</p> <p>You can use Secrets Manager or Amazon Web Services Systems Manager Parameter Store to store the sensitive data. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/secrets-envvar.html">Retrieve secrets through environment variables</a> in the Amazon ECS Developer Guide.</p> */
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


	/** Details on an Elastic Inference accelerator task override. This parameter is used to override the Elastic Inference accelerator specified in the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
	export interface InferenceAcceleratorOverride {
		deviceName?: string;
		deviceType?: string;
	}

	/** Details on an Elastic Inference accelerator task override. This parameter is used to override the Elastic Inference accelerator specified in the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html">Working with Amazon Elastic Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. */
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

	export enum TaskStopCode { TaskFailedToStart = 0, EssentialContainerExited = 1, UserInitiated = 2, ServiceSchedulerInitiated = 3, SpotInterruption = 4, TerminationNotice = 5 }

	export interface DescribeTasksRequest {
		cluster?: string;

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
		endpoint?: string;
		telemetryEndpoint?: string;
		serviceConnectEndpoint?: string;
	}
	export interface DiscoverPollEndpointResponseFormProperties {
		endpoint: FormControl<string | null | undefined>,
		telemetryEndpoint: FormControl<string | null | undefined>,
		serviceConnectEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateDiscoverPollEndpointResponseFormGroup() {
		return new FormGroup<DiscoverPollEndpointResponseFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined),
			telemetryEndpoint: new FormControl<string | null | undefined>(undefined),
			serviceConnectEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DiscoverPollEndpointRequest {
		containerInstance?: string;
		cluster?: string;
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

	export interface ExecuteCommandResponse {
		clusterArn?: string;
		containerArn?: string;
		containerName?: string;
		interactive?: boolean | null;
		session?: Session;
		taskArn?: string;
	}
	export interface ExecuteCommandResponseFormProperties {
		clusterArn: FormControl<string | null | undefined>,
		containerArn: FormControl<string | null | undefined>,
		containerName: FormControl<string | null | undefined>,
		interactive: FormControl<boolean | null | undefined>,
		taskArn: FormControl<string | null | undefined>,
	}
	export function CreateExecuteCommandResponseFormGroup() {
		return new FormGroup<ExecuteCommandResponseFormProperties>({
			clusterArn: new FormControl<string | null | undefined>(undefined),
			containerArn: new FormControl<string | null | undefined>(undefined),
			containerName: new FormControl<string | null | undefined>(undefined),
			interactive: new FormControl<boolean | null | undefined>(undefined),
			taskArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details for the execute command session. */
	export interface Session {
		sessionId?: string;
		streamUrl?: string;
		tokenValue?: string;
	}

	/** The details for the execute command session. */
	export interface SessionFormProperties {
		sessionId: FormControl<string | null | undefined>,
		streamUrl: FormControl<string | null | undefined>,
		tokenValue: FormControl<string | null | undefined>,
	}
	export function CreateSessionFormGroup() {
		return new FormGroup<SessionFormProperties>({
			sessionId: new FormControl<string | null | undefined>(undefined),
			streamUrl: new FormControl<string | null | undefined>(undefined),
			tokenValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExecuteCommandRequest {
		cluster?: string;
		container?: string;

		/** Required */
		command: string;

		/** Required */
		interactive: boolean;

		/** Required */
		task: string;
	}
	export interface ExecuteCommandRequestFormProperties {
		cluster: FormControl<string | null | undefined>,
		container: FormControl<string | null | undefined>,

		/** Required */
		command: FormControl<string | null | undefined>,

		/** Required */
		interactive: FormControl<boolean | null | undefined>,

		/** Required */
		task: FormControl<string | null | undefined>,
	}
	export function CreateExecuteCommandRequestFormGroup() {
		return new FormGroup<ExecuteCommandRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			container: new FormControl<string | null | undefined>(undefined),
			command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			interactive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			task: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TargetNotConnectedException {
	}
	export interface TargetNotConnectedExceptionFormProperties {
	}
	export function CreateTargetNotConnectedExceptionFormGroup() {
		return new FormGroup<TargetNotConnectedExceptionFormProperties>({
		});

	}

	export interface GetTaskProtectionResponse {
		protectedTasks?: Array<ProtectedTask>;
		failures?: Array<Failure>;
	}
	export interface GetTaskProtectionResponseFormProperties {
	}
	export function CreateGetTaskProtectionResponseFormGroup() {
		return new FormGroup<GetTaskProtectionResponseFormProperties>({
		});

	}


	/** An object representing the protection status details for a task. You can set the protection status with the <a>UpdateTaskProtection</a> API and get the status of tasks with the <a>GetTaskProtection</a> API. */
	export interface ProtectedTask {
		taskArn?: string;
		protectionEnabled?: boolean | null;
		expirationDate?: Date;
	}

	/** An object representing the protection status details for a task. You can set the protection status with the <a>UpdateTaskProtection</a> API and get the status of tasks with the <a>GetTaskProtection</a> API. */
	export interface ProtectedTaskFormProperties {
		taskArn: FormControl<string | null | undefined>,
		protectionEnabled: FormControl<boolean | null | undefined>,
		expirationDate: FormControl<Date | null | undefined>,
	}
	export function CreateProtectedTaskFormGroup() {
		return new FormGroup<ProtectedTaskFormProperties>({
			taskArn: new FormControl<string | null | undefined>(undefined),
			protectionEnabled: new FormControl<boolean | null | undefined>(undefined),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetTaskProtectionRequest {

		/** Required */
		cluster: string;
		tasks?: Array<string>;
	}
	export interface GetTaskProtectionRequestFormProperties {

		/** Required */
		cluster: FormControl<string | null | undefined>,
	}
	export function CreateGetTaskProtectionRequestFormGroup() {
		return new FormGroup<GetTaskProtectionRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ListAccountSettingsResponse {
		settings?: Array<Setting>;
		nextToken?: string;
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
		name?: SettingName;
		value?: string;
		principalArn?: string;
		effectiveSettings?: boolean | null;
		nextToken?: string;
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
		nextToken?: string;
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
		cluster?: string;

		/** Required */
		targetType: TargetType;
		attributeName?: string;
		attributeValue?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListAttributesRequestFormProperties {
		cluster: FormControl<string | null | undefined>,

		/** Required */
		targetType: FormControl<TargetType | null | undefined>,
		attributeName: FormControl<string | null | undefined>,
		attributeValue: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAttributesRequestFormGroup() {
		return new FormGroup<ListAttributesRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			targetType: new FormControl<TargetType | null | undefined>(undefined, [Validators.required]),
			attributeName: new FormControl<string | null | undefined>(undefined),
			attributeValue: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListClustersResponse {
		clusterArns?: Array<string>;
		nextToken?: string;
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
		nextToken?: string;
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
		nextToken?: string;
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
		cluster?: string;
		filter?: string;
		nextToken?: string;
		maxResults?: number | null;
		status?: ContainerInstanceStatus;
	}
	export interface ListContainerInstancesRequestFormProperties {
		cluster: FormControl<string | null | undefined>,
		filter: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		status: FormControl<ContainerInstanceStatus | null | undefined>,
	}
	export function CreateListContainerInstancesRequestFormGroup() {
		return new FormGroup<ListContainerInstancesRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<ContainerInstanceStatus | null | undefined>(undefined),
		});

	}

	export enum ContainerInstanceStatus { ACTIVE = 0, DRAINING = 1, REGISTERING = 2, DEREGISTERING = 3, REGISTRATION_FAILED = 4 }

	export interface ListServicesResponse {
		serviceArns?: Array<string>;
		nextToken?: string;
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
		cluster?: string;
		nextToken?: string;
		maxResults?: number | null;
		launchType?: LaunchType;
		schedulingStrategy?: SchedulingStrategy;
	}
	export interface ListServicesRequestFormProperties {
		cluster: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		launchType: FormControl<LaunchType | null | undefined>,
		schedulingStrategy: FormControl<SchedulingStrategy | null | undefined>,
	}
	export function CreateListServicesRequestFormGroup() {
		return new FormGroup<ListServicesRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			launchType: new FormControl<LaunchType | null | undefined>(undefined),
			schedulingStrategy: new FormControl<SchedulingStrategy | null | undefined>(undefined),
		});

	}

	export interface ListServicesByNamespaceResponse {
		serviceArns?: Array<string>;
		nextToken?: string;
	}
	export interface ListServicesByNamespaceResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServicesByNamespaceResponseFormGroup() {
		return new FormGroup<ListServicesByNamespaceResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListServicesByNamespaceRequest {

		/** Required */
		namespace: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListServicesByNamespaceRequestFormProperties {

		/** Required */
		namespace: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListServicesByNamespaceRequestFormGroup() {
		return new FormGroup<ListServicesByNamespaceRequestFormProperties>({
			namespace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
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
		nextToken?: string;
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
		familyPrefix?: string;
		status?: TaskDefinitionFamilyStatus;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListTaskDefinitionFamiliesRequestFormProperties {
		familyPrefix: FormControl<string | null | undefined>,
		status: FormControl<TaskDefinitionFamilyStatus | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTaskDefinitionFamiliesRequestFormGroup() {
		return new FormGroup<ListTaskDefinitionFamiliesRequestFormProperties>({
			familyPrefix: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TaskDefinitionFamilyStatus | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TaskDefinitionFamilyStatus { ACTIVE = 0, INACTIVE = 1, ALL = 2 }

	export interface ListTaskDefinitionsResponse {
		taskDefinitionArns?: Array<string>;
		nextToken?: string;
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
		familyPrefix?: string;
		status?: TaskDefinitionStatus;
		sort?: SortOrder;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListTaskDefinitionsRequestFormProperties {
		familyPrefix: FormControl<string | null | undefined>,
		status: FormControl<TaskDefinitionStatus | null | undefined>,
		sort: FormControl<SortOrder | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTaskDefinitionsRequestFormGroup() {
		return new FormGroup<ListTaskDefinitionsRequestFormProperties>({
			familyPrefix: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TaskDefinitionStatus | null | undefined>(undefined),
			sort: new FormControl<SortOrder | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SortOrder { ASC = 0, DESC = 1 }

	export interface ListTasksResponse {
		taskArns?: Array<string>;
		nextToken?: string;
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
		cluster?: string;
		containerInstance?: string;
		family?: string;
		nextToken?: string;
		maxResults?: number | null;
		startedBy?: string;
		serviceName?: string;
		desiredStatus?: DesiredStatus;
		launchType?: LaunchType;
	}
	export interface ListTasksRequestFormProperties {
		cluster: FormControl<string | null | undefined>,
		containerInstance: FormControl<string | null | undefined>,
		family: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		startedBy: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
		desiredStatus: FormControl<DesiredStatus | null | undefined>,
		launchType: FormControl<LaunchType | null | undefined>,
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
			desiredStatus: new FormControl<DesiredStatus | null | undefined>(undefined),
			launchType: new FormControl<LaunchType | null | undefined>(undefined),
		});

	}

	export enum DesiredStatus { RUNNING = 0, PENDING = 1, STOPPED = 2 }

	export interface PutAccountSettingResponse {
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
		principalArn?: string;
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
		cluster?: string;

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
		containerInstance?: ContainerInstance;
	}
	export interface RegisterContainerInstanceResponseFormProperties {
	}
	export function CreateRegisterContainerInstanceResponseFormGroup() {
		return new FormGroup<RegisterContainerInstanceResponseFormProperties>({
		});

	}

	export interface RegisterContainerInstanceRequest {
		cluster?: string;
		instanceIdentityDocument?: string;
		instanceIdentityDocumentSignature?: string;
		totalResources?: Array<Resource>;
		versionInfo?: VersionInfo;
		containerInstanceArn?: string;
		attributes?: Array<Attribute>;
		platformDevices?: Array<PlatformDevice>;
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
		taskDefinition?: TaskDefinition;
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
		taskRoleArn?: string;
		executionRoleArn?: string;
		networkMode?: NetworkMode;

		/** Required */
		containerDefinitions: Array<ContainerDefinition>;
		volumes?: Array<Volume>;
		placementConstraints?: Array<TaskDefinitionPlacementConstraint>;
		requiresCompatibilities?: Array<Compatibility>;
		cpu?: string;
		memory?: string;
		tags?: Array<Tag>;
		pidMode?: PidMode;
		ipcMode?: IpcMode;
		proxyConfiguration?: ProxyConfiguration;
		inferenceAccelerators?: Array<InferenceAccelerator>;
		ephemeralStorage?: EphemeralStorage;
		runtimePlatform?: RuntimePlatform;
	}
	export interface RegisterTaskDefinitionRequestFormProperties {

		/** Required */
		family: FormControl<string | null | undefined>,
		taskRoleArn: FormControl<string | null | undefined>,
		executionRoleArn: FormControl<string | null | undefined>,
		networkMode: FormControl<NetworkMode | null | undefined>,
		cpu: FormControl<string | null | undefined>,
		memory: FormControl<string | null | undefined>,
		pidMode: FormControl<PidMode | null | undefined>,
		ipcMode: FormControl<IpcMode | null | undefined>,
	}
	export function CreateRegisterTaskDefinitionRequestFormGroup() {
		return new FormGroup<RegisterTaskDefinitionRequestFormProperties>({
			family: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			taskRoleArn: new FormControl<string | null | undefined>(undefined),
			executionRoleArn: new FormControl<string | null | undefined>(undefined),
			networkMode: new FormControl<NetworkMode | null | undefined>(undefined),
			cpu: new FormControl<string | null | undefined>(undefined),
			memory: new FormControl<string | null | undefined>(undefined),
			pidMode: new FormControl<PidMode | null | undefined>(undefined),
			ipcMode: new FormControl<IpcMode | null | undefined>(undefined),
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
		cluster?: string;
		count?: number | null;
		enableECSManagedTags?: boolean | null;
		enableExecuteCommand?: boolean | null;
		group?: string;
		launchType?: LaunchType;
		networkConfiguration?: NetworkConfiguration;
		overrides?: TaskOverride;
		placementConstraints?: Array<PlacementConstraint>;
		placementStrategy?: Array<PlacementStrategy>;
		platformVersion?: string;
		propagateTags?: PropagateTags;
		referenceId?: string;
		startedBy?: string;
		tags?: Array<Tag>;

		/** Required */
		taskDefinition: string;
	}
	export interface RunTaskRequestFormProperties {
		cluster: FormControl<string | null | undefined>,
		count: FormControl<number | null | undefined>,
		enableECSManagedTags: FormControl<boolean | null | undefined>,
		enableExecuteCommand: FormControl<boolean | null | undefined>,
		group: FormControl<string | null | undefined>,
		launchType: FormControl<LaunchType | null | undefined>,
		platformVersion: FormControl<string | null | undefined>,
		propagateTags: FormControl<PropagateTags | null | undefined>,
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
			enableExecuteCommand: new FormControl<boolean | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			launchType: new FormControl<LaunchType | null | undefined>(undefined),
			platformVersion: new FormControl<string | null | undefined>(undefined),
			propagateTags: new FormControl<PropagateTags | null | undefined>(undefined),
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
		cluster?: string;

		/** Required */
		containerInstances: Array<string>;
		enableECSManagedTags?: boolean | null;
		enableExecuteCommand?: boolean | null;
		group?: string;
		networkConfiguration?: NetworkConfiguration;
		overrides?: TaskOverride;
		propagateTags?: PropagateTags;
		referenceId?: string;
		startedBy?: string;
		tags?: Array<Tag>;

		/** Required */
		taskDefinition: string;
	}
	export interface StartTaskRequestFormProperties {
		cluster: FormControl<string | null | undefined>,
		enableECSManagedTags: FormControl<boolean | null | undefined>,
		enableExecuteCommand: FormControl<boolean | null | undefined>,
		group: FormControl<string | null | undefined>,
		propagateTags: FormControl<PropagateTags | null | undefined>,
		referenceId: FormControl<string | null | undefined>,
		startedBy: FormControl<string | null | undefined>,

		/** Required */
		taskDefinition: FormControl<string | null | undefined>,
	}
	export function CreateStartTaskRequestFormGroup() {
		return new FormGroup<StartTaskRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			enableECSManagedTags: new FormControl<boolean | null | undefined>(undefined),
			enableExecuteCommand: new FormControl<boolean | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			propagateTags: new FormControl<PropagateTags | null | undefined>(undefined),
			referenceId: new FormControl<string | null | undefined>(undefined),
			startedBy: new FormControl<string | null | undefined>(undefined),
			taskDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopTaskResponse {
		task?: Task_;
	}
	export interface StopTaskResponseFormProperties {
	}
	export function CreateStopTaskResponseFormGroup() {
		return new FormGroup<StopTaskResponseFormProperties>({
		});

	}

	export interface StopTaskRequest {
		cluster?: string;

		/** Required */
		task: string;
		reason?: string;
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
		acknowledgment?: string;
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
		cluster?: string;

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
		acknowledgment?: string;
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
		cluster?: string;
		task?: string;
		containerName?: string;
		runtimeId?: string;
		status?: string;
		exitCode?: number | null;
		reason?: string;
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
		acknowledgment?: string;
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
		cluster?: string;
		task?: string;
		status?: string;
		reason?: string;
		containers?: Array<ContainerStateChange>;
		attachments?: Array<AttachmentStateChange>;
		managedAgents?: Array<ManagedAgentStateChange>;
		pullStartedAt?: Date;
		pullStoppedAt?: Date;
		executionStoppedAt?: Date;
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


	/** An object that represents a change in state for a container. */
	export interface ContainerStateChange {
		containerName?: string;
		imageDigest?: string;
		runtimeId?: string;
		exitCode?: number | null;
		networkBindings?: Array<NetworkBinding>;
		reason?: string;
		status?: string;
	}

	/** An object that represents a change in state for a container. */
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


	/** An object representing a change in state for a managed agent. */
	export interface ManagedAgentStateChange {

		/** Required */
		containerName: string;

		/** Required */
		managedAgentName: ManagedAgentName;

		/** Required */
		status: string;
		reason?: string;
	}

	/** An object representing a change in state for a managed agent. */
	export interface ManagedAgentStateChangeFormProperties {

		/** Required */
		containerName: FormControl<string | null | undefined>,

		/** Required */
		managedAgentName: FormControl<ManagedAgentName | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateManagedAgentStateChangeFormGroup() {
		return new FormGroup<ManagedAgentStateChangeFormProperties>({
			containerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			managedAgentName: new FormControl<ManagedAgentName | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined),
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

		/** Required */
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

	export interface UpdateCapacityProviderResponse {
		capacityProvider?: CapacityProvider;
	}
	export interface UpdateCapacityProviderResponseFormProperties {
	}
	export function CreateUpdateCapacityProviderResponseFormGroup() {
		return new FormGroup<UpdateCapacityProviderResponseFormProperties>({
		});

	}

	export interface UpdateCapacityProviderRequest {

		/** Required */
		name: string;

		/** Required */
		autoScalingGroupProvider: AutoScalingGroupProviderUpdate;
	}
	export interface UpdateCapacityProviderRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCapacityProviderRequestFormGroup() {
		return new FormGroup<UpdateCapacityProviderRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The details of the Auto Scaling group capacity provider to update. */
	export interface AutoScalingGroupProviderUpdate {
		managedScaling?: ManagedScaling;
		managedTerminationProtection?: ManagedScalingStatus;
	}

	/** The details of the Auto Scaling group capacity provider to update. */
	export interface AutoScalingGroupProviderUpdateFormProperties {
		managedTerminationProtection: FormControl<ManagedScalingStatus | null | undefined>,
	}
	export function CreateAutoScalingGroupProviderUpdateFormGroup() {
		return new FormGroup<AutoScalingGroupProviderUpdateFormProperties>({
			managedTerminationProtection: new FormControl<ManagedScalingStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateClusterResponse {
		cluster?: Cluster;
	}
	export interface UpdateClusterResponseFormProperties {
	}
	export function CreateUpdateClusterResponseFormGroup() {
		return new FormGroup<UpdateClusterResponseFormProperties>({
		});

	}

	export interface UpdateClusterRequest {

		/** Required */
		cluster: string;
		settings?: Array<ClusterSetting>;
		configuration?: ClusterConfiguration;
		serviceConnectDefaults?: ClusterServiceConnectDefaultsRequest;
	}
	export interface UpdateClusterRequestFormProperties {

		/** Required */
		cluster: FormControl<string | null | undefined>,
	}
	export function CreateUpdateClusterRequestFormGroup() {
		return new FormGroup<UpdateClusterRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateClusterSettingsResponse {
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
		containerInstance?: ContainerInstance;
	}
	export interface UpdateContainerAgentResponseFormProperties {
	}
	export function CreateUpdateContainerAgentResponseFormGroup() {
		return new FormGroup<UpdateContainerAgentResponseFormProperties>({
		});

	}

	export interface UpdateContainerAgentRequest {
		cluster?: string;

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
		cluster?: string;

		/** Required */
		containerInstances: Array<string>;

		/** Required */
		status: ContainerInstanceStatus;
	}
	export interface UpdateContainerInstancesStateRequestFormProperties {
		cluster: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ContainerInstanceStatus | null | undefined>,
	}
	export function CreateUpdateContainerInstancesStateRequestFormGroup() {
		return new FormGroup<UpdateContainerInstancesStateRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ContainerInstanceStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateServiceResponse {
		service?: Service;
	}
	export interface UpdateServiceResponseFormProperties {
	}
	export function CreateUpdateServiceResponseFormGroup() {
		return new FormGroup<UpdateServiceResponseFormProperties>({
		});

	}

	export interface UpdateServiceRequest {
		cluster?: string;

		/** Required */
		service: string;
		desiredCount?: number | null;
		taskDefinition?: string;
		capacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
		deploymentConfiguration?: DeploymentConfiguration;
		networkConfiguration?: NetworkConfiguration;
		placementConstraints?: Array<PlacementConstraint>;
		placementStrategy?: Array<PlacementStrategy>;
		platformVersion?: string;
		forceNewDeployment?: boolean | null;
		healthCheckGracePeriodSeconds?: number | null;
		enableExecuteCommand?: boolean | null;
		enableECSManagedTags?: boolean | null;
		loadBalancers?: Array<LoadBalancer>;
		propagateTags?: PropagateTags;
		serviceRegistries?: Array<ServiceRegistry>;
		serviceConnectConfiguration?: ServiceConnectConfiguration;
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
		enableExecuteCommand: FormControl<boolean | null | undefined>,
		enableECSManagedTags: FormControl<boolean | null | undefined>,
		propagateTags: FormControl<PropagateTags | null | undefined>,
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
			enableExecuteCommand: new FormControl<boolean | null | undefined>(undefined),
			enableECSManagedTags: new FormControl<boolean | null | undefined>(undefined),
			propagateTags: new FormControl<PropagateTags | null | undefined>(undefined),
		});

	}

	export interface UpdateServicePrimaryTaskSetResponse {
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

	export interface UpdateTaskProtectionResponse {
		protectedTasks?: Array<ProtectedTask>;
		failures?: Array<Failure>;
	}
	export interface UpdateTaskProtectionResponseFormProperties {
	}
	export function CreateUpdateTaskProtectionResponseFormGroup() {
		return new FormGroup<UpdateTaskProtectionResponseFormProperties>({
		});

	}

	export interface UpdateTaskProtectionRequest {

		/** Required */
		cluster: string;

		/** Required */
		tasks: Array<string>;

		/** Required */
		protectionEnabled: boolean;
		expiresInMinutes?: number | null;
	}
	export interface UpdateTaskProtectionRequestFormProperties {

		/** Required */
		cluster: FormControl<string | null | undefined>,

		/** Required */
		protectionEnabled: FormControl<boolean | null | undefined>,
		expiresInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateUpdateTaskProtectionRequestFormGroup() {
		return new FormGroup<UpdateTaskProtectionRequestFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			protectionEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			expiresInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateTaskSetResponse {
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

		/** Required */
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

	export enum AssignPublicIp { ENABLED = 0, DISABLED = 1 }

	export enum ManagedTerminationProtection { ENABLED = 0, DISABLED = 1 }

	export enum EFSAuthorizationConfigIAM { ENABLED = 0, DISABLED = 1 }

	export enum EFSTransitEncryption { ENABLED = 0, DISABLED = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a new capacity provider. Capacity providers are associated with an Amazon ECS cluster and are used in capacity provider strategies to facilitate cluster auto scaling.</p> <p>Only capacity providers that use an Auto Scaling group can be created. Amazon ECS tasks on Fargate use the <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers. These providers are available to all accounts in the Amazon Web Services Regions that Fargate supports.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCapacityProvider
		 * @return {CreateCapacityProviderResponse} Success
		 */
		CreateCapacityProvider(requestBody: CreateCapacityProviderRequest): Observable<CreateCapacityProviderResponse> {
			return this.http.post<CreateCapacityProviderResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCapacityProvider', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new Amazon ECS cluster. By default, your account receives a <code>default</code> cluster when you launch your first container instance. However, you can create your own cluster with a unique name with the <code>CreateCluster</code> action.</p> <note> <p>When you call the <a>CreateCluster</a> API operation, Amazon ECS attempts to create the Amazon ECS service-linked role for your account. This is so that it can manage required resources in other Amazon Web Services services on your behalf. However, if the user that makes the call doesn't have permissions to create the service-linked role, it isn't created. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html">Using service-linked roles for Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCluster
		 * @return {CreateClusterResponse} Success
		 */
		CreateCluster(requestBody: CreateClusterRequest): Observable<CreateClusterResponse> {
			return this.http.post<CreateClusterResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Runs and maintains your desired number of tasks from a specified task definition. If the number of tasks running in a service drops below the <code>desiredCount</code>, Amazon ECS runs another copy of the task in the specified cluster. To update an existing service, see the <a>UpdateService</a> action.</p> <note> <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p> </note> <p>In addition to maintaining the desired count of tasks in your service, you can optionally run your service behind one or more load balancers. The load balancers distribute traffic across the tasks that are associated with the service. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html">Service load balancing</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Tasks for services that don't use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and are reported as healthy by the load balancer.</p> <p>There are two service scheduler strategies available:</p> <ul> <li> <p> <code>REPLICA</code> - The replica scheduling strategy places and maintains your desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service scheduler concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> <li> <p> <code>DAEMON</code> - The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks. It also stops tasks that don't meet the placement constraints. When using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html">Service scheduler concepts</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </li> </ul> <p>You can optionally specify a deployment configuration for your service. The deployment is initiated by changing properties. For example, the deployment might be initiated by the task definition or by your desired count of a service. This is done with an <a>UpdateService</a> operation. The default value for a replica service for <code>minimumHealthyPercent</code> is 100%. The default value for a daemon service for <code>minimumHealthyPercent</code> is 0%.</p> <p>If a service uses the <code>ECS</code> deployment controller, the minimum healthy percent represents a lower limit on the number of tasks in a service that must remain in the <code>RUNNING</code> state during a deployment. Specifically, it represents it as a percentage of your desired number of tasks (rounded up to the nearest integer). This happens when any of your container instances are in the <code>DRAINING</code> state if the service contains tasks using the EC2 launch type. Using this parameter, you can deploy without using additional cluster capacity. For example, if you set your service to have desired number of four tasks and a minimum healthy percent of 50%, the scheduler might stop two existing tasks to free up cluster capacity before starting two new tasks. If they're in the <code>RUNNING</code> state, tasks for services that don't use a load balancer are considered healthy . If they're in the <code>RUNNING</code> state and reported as healthy by the load balancer, tasks for services that <i>do</i> use a load balancer are considered healthy . The default value for minimum healthy percent is 100%.</p> <p>If a service uses the <code>ECS</code> deployment controller, the <b>maximum percent</b> parameter represents an upper limit on the number of tasks in a service that are allowed in the <code>RUNNING</code> or <code>PENDING</code> state during a deployment. Specifically, it represents it as a percentage of the desired number of tasks (rounded down to the nearest integer). This happens when any of your container instances are in the <code>DRAINING</code> state if the service contains tasks using the EC2 launch type. Using this parameter, you can define the deployment batch size. For example, if your service has a desired number of four tasks and a maximum percent value of 200%, the scheduler may start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default value for maximum percent is 200%.</p> <p>If a service uses either the <code>CODE_DEPLOY</code> or <code>EXTERNAL</code> deployment controller types and tasks that use the EC2 launch type, the <b>minimum healthy percent</b> and <b>maximum percent</b> values are used only to define the lower and upper limit on the number of the tasks in the service that remain in the <code>RUNNING</code> state. This is while the container instances are in the <code>DRAINING</code> state. If the tasks in the service use the Fargate launch type, the minimum healthy percent and maximum percent values aren't used. This is the case even if they're currently visible when describing your service.</p> <p>When creating a service that uses the <code>EXTERNAL</code> deployment controller, you can specify only parameters that aren't controlled at the task set level. The only required parameter is the service name. You control your services using the <a>CreateTaskSet</a> operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When the service scheduler launches new tasks, it determines task placement. For information about task placement and task placement strategies, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement.html">Amazon ECS task placement</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateService
		 * @return {CreateServiceResponse} Success
		 */
		CreateService(requestBody: CreateServiceRequest): Observable<CreateServiceResponse> {
			return this.http.post<CreateServiceResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a task set in the specified cluster and service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateTaskSet
		 * @return {CreateTaskSetResponse} Success
		 */
		CreateTaskSet(requestBody: CreateTaskSetRequest): Observable<CreateTaskSetResponse> {
			return this.http.post<CreateTaskSetResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateTaskSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables an account setting for a specified user, role, or the root user for an account.
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
		 * <p>Deletes the specified capacity provider.</p> <note> <p>The <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers are reserved and can't be deleted. You can disassociate them from a cluster using either the <a>PutClusterCapacityProviders</a> API or by deleting the cluster.</p> </note> <p>Prior to a capacity provider being deleted, the capacity provider must be removed from the capacity provider strategy from all services. The <a>UpdateService</a> API can be used to remove a capacity provider from a service's capacity provider strategy. When updating a service, the <code>forceNewDeployment</code> option can be used to ensure that any tasks using the Amazon EC2 instance capacity provided by the capacity provider are transitioned to use the capacity from the remaining capacity providers. Only capacity providers that aren't associated with a cluster can be deleted. To remove a capacity provider from a cluster, you can either use <a>PutClusterCapacityProviders</a> or delete the cluster.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider
		 * @return {DeleteCapacityProviderResponse} Success
		 */
		DeleteCapacityProvider(requestBody: DeleteCapacityProviderRequest): Observable<DeleteCapacityProviderResponse> {
			return this.http.post<DeleteCapacityProviderResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified cluster. The cluster transitions to the <code>INACTIVE</code> state. Clusters with an <code>INACTIVE</code> status might remain discoverable in your account for a period of time. However, this behavior is subject to change in the future. We don't recommend that you rely on <code>INACTIVE</code> clusters persisting.</p> <p>You must deregister all container instances from this cluster before you may delete it. You can list the container instances in a cluster with <a>ListContainerInstances</a> and deregister them with <a>DeregisterContainerInstance</a>.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCluster
		 * @return {DeleteClusterResponse} Success
		 */
		DeleteCluster(requestBody: DeleteClusterRequest): Observable<DeleteClusterResponse> {
			return this.http.post<DeleteClusterResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a specified service within a cluster. You can delete a service if you have no running tasks in it and the desired task count is zero. If the service is actively maintaining tasks, you can't delete it, and you must update the service to a desired task count of zero. For more information, see <a>UpdateService</a>.</p> <note> <p>When you delete a service, if there are still running tasks that require cleanup, the service status moves from <code>ACTIVE</code> to <code>DRAINING</code>, and the service is no longer visible in the console or in the <a>ListServices</a> API operation. After all tasks have transitioned to either <code>STOPPING</code> or <code>STOPPED</code> status, the service status moves from <code>DRAINING</code> to <code>INACTIVE</code>. Services in the <code>DRAINING</code> or <code>INACTIVE</code> status can still be viewed with the <a>DescribeServices</a> API operation. However, in the future, <code>INACTIVE</code> services may be cleaned up and purged from Amazon ECS record keeping, and <a>DescribeServices</a> calls on those services return a <code>ServiceNotFoundException</code> error.</p> </note> <important> <p>If you attempt to create a new service with the same name as an existing service in either <code>ACTIVE</code> or <code>DRAINING</code> status, you receive an error.</p> </important>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteService
		 * @return {DeleteServiceResponse} Success
		 */
		DeleteService(requestBody: DeleteServiceRequest): Observable<DeleteServiceResponse> {
			return this.http.post<DeleteServiceResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes one or more task definitions.</p> <p>You must deregister a task definition revision before you delete it. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterTaskDefinition.html">DeregisterTaskDefinition</a>.</p> <p>When you delete a task definition revision, it is immediately transitions from the <code>INACTIVE</code> to <code>DELETE_IN_PROGRESS</code>. Existing tasks and services that reference a <code>DELETE_IN_PROGRESS</code> task definition revision continue to run without disruption. Existing services that reference a <code>DELETE_IN_PROGRESS</code> task definition revision can still scale up or down by modifying the service's desired count.</p> <p>You can't use a <code>DELETE_IN_PROGRESS</code> task definition revision to run new tasks or create new services. You also can't update an existing service to reference a <code>DELETE_IN_PROGRESS</code> task definition revision.</p> <p> A task definition revision will stay in <code>DELETE_IN_PROGRESS</code> status until all the associated tasks and services have been terminated.</p> <p>When you delete all <code>INACTIVE</code> task definition revisions, the task definition name is not displayed in the console and not returned in the API. If a task definition revisions are in the <code>DELETE_IN_PROGRESS</code> state, the task definition name is displayed in the console and returned in the API. The task definition name is retained by Amazon ECS and the revision is incremented the next time you create a task definition with that name.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions
		 * @return {DeleteTaskDefinitionsResponse} Success
		 */
		DeleteTaskDefinitions(requestBody: DeleteTaskDefinitionsRequest): Observable<DeleteTaskDefinitionsResponse> {
			return this.http.post<DeleteTaskDefinitionsResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specified task set within a service. This is used when a service uses the <code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS deployment types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskSet
		 * @return {DeleteTaskSetResponse} Success
		 */
		DeleteTaskSet(requestBody: DeleteTaskSetRequest): Observable<DeleteTaskSetResponse> {
			return this.http.post<DeleteTaskSetResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deregisters an Amazon ECS container instance from the specified cluster. This instance is no longer available to run tasks.</p> <p>If you intend to use the container instance for some other purpose after deregistration, we recommend that you stop all of the tasks running on the container instance before deregistration. That prevents any orphaned tasks from consuming resources.</p> <p>Deregistering a container instance removes the instance from a cluster, but it doesn't terminate the EC2 instance. If you are finished using the instance, be sure to terminate it in the Amazon EC2 console to stop billing.</p> <note> <p>If you terminate a running container instance, Amazon ECS automatically deregisters the instance from your cluster (stopped container instances or instances with disconnected agents aren't automatically deregistered when terminated).</p> </note>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance
		 * @return {DeregisterContainerInstanceResponse} Success
		 */
		DeregisterContainerInstance(requestBody: DeregisterContainerInstanceRequest): Observable<DeregisterContainerInstanceResponse> {
			return this.http.post<DeregisterContainerInstanceResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deregisters the specified task definition by family and revision. Upon deregistration, the task definition is marked as <code>INACTIVE</code>. Existing tasks and services that reference an <code>INACTIVE</code> task definition continue to run without disruption. Existing services that reference an <code>INACTIVE</code> task definition can still scale up or down by modifying the service's desired count. If you want to delete a task definition revision, you must first deregister the task definition revision.</p> <p>You can't use an <code>INACTIVE</code> task definition to run new tasks or create new services, and you can't update an existing service to reference an <code>INACTIVE</code> task definition. However, there may be up to a 10-minute window following deregistration where these restrictions have not yet taken effect.</p> <note> <p>At this time, <code>INACTIVE</code> task definitions remain discoverable in your account indefinitely. However, this behavior is subject to change in the future. We don't recommend that you rely on <code>INACTIVE</code> task definitions persisting beyond the lifecycle of any associated tasks and services.</p> </note> <p>You must deregister a task definition revision before you delete it. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskDefinitions.html">DeleteTaskDefinitions</a>.</p>
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
		 * Describes one or more container instances. Returns metadata about each container instance requested.
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
		 * <p>Describes a specified task or tasks.</p> <p>Currently, stopped tasks appear in the returned results for at least one hour.</p> <p>If you have tasks with tags, and then delete the cluster, the tagged tasks are returned in the response. If you create a new cluster with the same name as the deleted cluster, the tagged tasks are not included in the response.</p>
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
		 * <p>Runs a command remotely on a container within a task.</p> <p>If you use a condition key in your IAM policy to refine the conditions for the policy statement, for example limit the actions to a specific cluster, you receive an <code>AccessDeniedException</code> when there is a mismatch between the condition key value and the corresponding parameter value.</p> <p>For information about required permissions and considerations, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.html">Using Amazon ECS Exec for debugging</a> in the <i>Amazon ECS Developer Guide</i>. </p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.ExecuteCommand
		 * @return {ExecuteCommandResponse} Success
		 */
		ExecuteCommand(requestBody: ExecuteCommandRequest): Observable<ExecuteCommandResponse> {
			return this.http.post<ExecuteCommandResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ExecuteCommand', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the protection status of tasks in an Amazon ECS service.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.GetTaskProtection
		 * @return {GetTaskProtectionResponse} Success
		 */
		GetTaskProtection(requestBody: GetTaskProtectionRequest): Observable<GetTaskProtectionResponse> {
			return this.http.post<GetTaskProtectionResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.GetTaskProtection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Lists the attributes for Amazon ECS resources within a specified target type and cluster. When you specify a target type and cluster, <code>ListAttributes</code> returns a list of attribute objects, one for each attribute on each resource. You can filter the list of results to a single attribute name to only return results that have that name. You can also filter the results by attribute name and value. You can do this, for example, to see which container instances in a cluster are running a Linux AMI (<code>ecs.os-type=linux</code>).
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
		 * Returns a list of services. You can filter the results by cluster, launch type, and scheduling strategy.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServices
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListServicesResponse} Success
		 */
		ListServices(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListServicesRequest): Observable<ListServicesResponse> {
			return this.http.post<ListServicesResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServices?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation lists all of the services that are associated with a Cloud Map namespace. This list might include services in different clusters. In contrast, <code>ListServices</code> can only list services in one cluster at a time. If you need to filter the list of services in a single cluster by various parameters, use <code>ListServices</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html">Service Connect</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServicesByNamespace
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListServicesByNamespaceResponse} Success
		 */
		ListServicesByNamespace(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListServicesByNamespaceRequest): Observable<ListServicesByNamespaceResponse> {
			return this.http.post<ListServicesByNamespaceResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServicesByNamespace?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Returns a list of task definition families that are registered to your account. This list includes task definition families that no longer have any <code>ACTIVE</code> task definition revisions.</p> <p>You can filter out task definition families that don't contain any <code>ACTIVE</code> task definition revisions by setting the <code>status</code> parameter to <code>ACTIVE</code>. You can also filter the results with the <code>familyPrefix</code> parameter.</p>
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
		 * <p>Returns a list of tasks. You can filter the results by cluster, task definition family, container instance, launch type, what IAM principal started the task, or by the desired status of the task.</p> <p>Recently stopped tasks might appear in the returned results. </p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTasks
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTasksResponse} Success
		 */
		ListTasks(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTasksRequest): Observable<ListTasksResponse> {
			return this.http.post<ListTasksResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTasks?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies an account setting. Account settings are set on a per-Region basis.</p> <p>If you change the root user account setting, the default settings are reset for users and roles that do not have specified individual account settings. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-account-settings.html">Account Settings</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When <code>serviceLongArnFormat</code>, <code>taskLongArnFormat</code>, or <code>containerInstanceLongArnFormat</code> are specified, the Amazon Resource Name (ARN) and resource ID format of the resource type for a specified user, role, or the root user for an account is affected. The opt-in and opt-out account setting must be set for each Amazon ECS resource separately. The ARN and resource ID format of a resource is defined by the opt-in status of the user or role that created the resource. You must turn on this setting to use Amazon ECS features such as resource tagging.</p> <p>When <code>awsvpcTrunking</code> is specified, the elastic network interface (ENI) limit for any new container instances that support the feature is changed. If <code>awsvpcTrunking</code> is turned on, any new container instances that support the feature are launched have the increased ENI limits available to them. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-instance-eni.html">Elastic Network Interface Trunking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>When <code>containerInsights</code> is specified, the default setting indicating whether Amazon Web Services CloudWatch Container Insights is turned on for your clusters is changed. If <code>containerInsights</code> is turned on, any new clusters that are created will have Container Insights turned on unless you disable it during cluster creation. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html">CloudWatch Container Insights</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Amazon ECS is introducing tagging authorization for resource creation. Users must have permissions for actions that create the resource, such as <code>ecsCreateCluster</code>. If tags are specified when you create a resource, Amazon Web Services performs additional authorization to verify if users or roles have permissions to create tags. Therefore, you must grant explicit permissions to use the <code>ecs:TagResource</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/supported-iam-actions-tagging.html">Grant permission to tag resources on creation</a> in the <i>Amazon ECS Developer Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSetting
		 * @return {PutAccountSettingResponse} Success
		 */
		PutAccountSetting(requestBody: PutAccountSettingRequest): Observable<PutAccountSettingResponse> {
			return this.http.post<PutAccountSettingResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSetting', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies an account setting for all users on an account for whom no individual account setting has been specified. Account settings are set on a per-Region basis.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault
		 * @return {PutAccountSettingDefaultResponse} Success
		 */
		PutAccountSettingDefault(requestBody: PutAccountSettingDefaultRequest): Observable<PutAccountSettingDefaultResponse> {
			return this.http.post<PutAccountSettingDefaultResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create or update an attribute on an Amazon ECS resource. If the attribute doesn't exist, it's created. If the attribute exists, its value is replaced with the specified value. To delete an attribute, use <a>DeleteAttributes</a>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAttributes
		 * @return {PutAttributesResponse} Success
		 */
		PutAttributes(requestBody: PutAttributesRequest): Observable<PutAttributesResponse> {
			return this.http.post<PutAttributesResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the available capacity providers and the default capacity provider strategy for a cluster.</p> <p>You must specify both the available capacity providers and a default capacity provider strategy for the cluster. If the specified cluster has existing capacity providers associated with it, you must specify all existing capacity providers in addition to any new ones you want to add. Any existing capacity providers that are associated with a cluster that are omitted from a <a>PutClusterCapacityProviders</a> API call will be disassociated with the cluster. You can only disassociate an existing capacity provider from a cluster if it's not being used by any existing tasks.</p> <p>When creating a service or running a task on a cluster, if no capacity provider or launch type is specified, then the cluster's default capacity provider strategy is used. We recommend that you define a default capacity provider strategy for your cluster. However, you must specify an empty array (<code>[]</code>) to bypass defining a default strategy.</p>
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
		 * <p>Registers a new task definition from the supplied <code>family</code> and <code>containerDefinitions</code>. Optionally, you can add data volumes to your containers with the <code>volumes</code> parameter. For more information about task definition parameters and defaults, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Amazon ECS Task Definitions</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You can specify a role for your task with the <code>taskRoleArn</code> parameter. When you specify a role for a task, its containers can then use the latest versions of the CLI or SDKs to make API requests to the Amazon Web Services services that are specified in the policy that's associated with the role. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM Roles for Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>You can specify a Docker networking mode for the containers in your task definition with the <code>networkMode</code> parameter. The available network modes correspond to those described in <a href="https://docs.docker.com/engine/reference/run/#/network-settings">Network settings</a> in the Docker run reference. If you specify the <code>awsvpc</code> network mode, the task is allocated an elastic network interface, and you must specify a <a>NetworkConfiguration</a> when you create a service or run a task with the task definition. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">Task Networking</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition
		 * @return {RegisterTaskDefinitionResponse} Success
		 */
		RegisterTaskDefinition(requestBody: RegisterTaskDefinitionRequest): Observable<RegisterTaskDefinitionResponse> {
			return this.http.post<RegisterTaskDefinitionResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a new task using the specified task definition.</p> <p>You can allow Amazon ECS to place tasks for you, or you can customize how Amazon ECS places tasks using placement constraints and placement strategies. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>Alternatively, you can use <a>StartTask</a> to use your own scheduler or place tasks manually on specific container instances.</p> <note> <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p> </note> <p>The Amazon ECS API follows an eventual consistency model. This is because of the distributed nature of the system supporting the API. This means that the result of an API command you run that affects your Amazon ECS resources might not be immediately visible to all subsequent commands you run. Keep this in mind when you carry out an API command that immediately follows a previous API command.</p> <p>To manage eventual consistency, you can do the following:</p> <ul> <li> <p>Confirm the state of the resource before you run a command to modify it. Run the DescribeTasks command using an exponential backoff algorithm to ensure that you allow enough time for the previous command to propagate through the system. To do this, run the DescribeTasks command repeatedly, starting with a couple of seconds of wait time and increasing gradually up to five minutes of wait time.</p> </li> <li> <p>Add wait time between subsequent commands, even if the DescribeTasks command returns an accurate response. Apply an exponential backoff algorithm starting with a couple of seconds of wait time, and increase gradually up to about five minutes of wait time.</p> </li> </ul>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.RunTask
		 * @return {RunTaskResponse} Success
		 */
		RunTask(requestBody: RunTaskRequest): Observable<RunTaskResponse> {
			return this.http.post<RunTaskResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RunTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a new task from the specified task definition on the specified container instance or instances.</p> <note> <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p> </note> <p>Alternatively, you can use <a>RunTask</a> to place tasks for you. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
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
		 * Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags that are associated with that resource are deleted as well.
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
		 * Modifies the parameters for a capacity provider.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider
		 * @return {UpdateCapacityProviderResponse} Success
		 */
		UpdateCapacityProvider(requestBody: UpdateCapacityProviderRequest): Observable<UpdateCapacityProviderResponse> {
			return this.http.post<UpdateCapacityProviderResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the cluster.
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCluster
		 * @return {UpdateClusterResponse} Success
		 */
		UpdateCluster(requestBody: UpdateClusterRequest): Observable<UpdateClusterResponse> {
			return this.http.post<UpdateClusterResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Updates the Amazon ECS container agent on a specified container instance. Updating the Amazon ECS container agent doesn't interrupt running tasks or services on the container instance. The process for updating the agent differs depending on whether your container instance was launched with the Amazon ECS-optimized AMI or another operating system.</p> <note> <p>The <code>UpdateContainerAgent</code> API isn't supported for container instances using the Amazon ECS-optimized Amazon Linux 2 (arm64) AMI. To update the container agent, you can update the <code>ecs-init</code> package. This updates the agent. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/agent-update-ecs-ami.html">Updating the Amazon ECS container agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> </note> <note> <p>Agent updates with the <code>UpdateContainerAgent</code> API operation do not apply to Windows container instances. We recommend that you launch new container instances to update the agent version in your Windows clusters.</p> </note> <p>The <code>UpdateContainerAgent</code> API requires an Amazon ECS-optimized AMI or Amazon Linux AMI with the <code>ecs-init</code> service installed and running. For help updating the Amazon ECS container agent on other operating systems, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html#manually_update_agent">Manually updating the Amazon ECS container agent</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerAgent
		 * @return {UpdateContainerAgentResponse} Success
		 */
		UpdateContainerAgent(requestBody: UpdateContainerAgentRequest): Observable<UpdateContainerAgentResponse> {
			return this.http.post<UpdateContainerAgentResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerAgent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the status of an Amazon ECS container instance.</p> <p>Once a container instance has reached an <code>ACTIVE</code> state, you can change the status of a container instance to <code>DRAINING</code> to manually remove an instance from a cluster, for example to perform system updates, update the Docker daemon, or scale down the cluster size.</p> <important> <p>A container instance can't be changed to <code>DRAINING</code> until it has reached an <code>ACTIVE</code> status. If the instance is in any other status, an error will be received.</p> </important> <p>When you set a container instance to <code>DRAINING</code>, Amazon ECS prevents new tasks from being scheduled for placement on the container instance and replacement service tasks are started on other container instances in the cluster if the resources are available. Service tasks on the container instance that are in the <code>PENDING</code> state are stopped immediately.</p> <p>Service tasks on the container instance that are in the <code>RUNNING</code> state are stopped and replaced according to the service's deployment configuration parameters, <code>minimumHealthyPercent</code> and <code>maximumPercent</code>. You can change the deployment configuration of your service using <a>UpdateService</a>.</p> <ul> <li> <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore <code>desiredCount</code> temporarily during task replacement. For example, <code>desiredCount</code> is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. If the minimum is 100%, the service scheduler can't remove existing tasks until the replacement tasks are considered healthy. Tasks for services that do not use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and are reported as healthy by the load balancer.</p> </li> <li> <p>The <code>maximumPercent</code> parameter represents an upper limit on the number of running tasks during task replacement. You can use this to define the replacement batch size. For example, if <code>desiredCount</code> is four tasks, a maximum of 200% starts four new tasks before stopping the four tasks to be drained, provided that the cluster resources required to do this are available. If the maximum is 100%, then replacement tasks can't start until the draining tasks have stopped.</p> </li> </ul> <p>Any <code>PENDING</code> or <code>RUNNING</code> tasks that do not belong to a service aren't affected. You must wait for them to finish or stop them manually.</p> <p>A container instance has completed draining when it has no more <code>RUNNING</code> tasks. You can verify this using <a>ListTasks</a>.</p> <p>When a container instance has been drained, you can set a container instance to <code>ACTIVE</code> status and once it has reached that status the Amazon ECS scheduler can begin scheduling tasks on the instance again.</p>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState
		 * @return {UpdateContainerInstancesStateResponse} Success
		 */
		UpdateContainerInstancesState(requestBody: UpdateContainerInstancesStateRequest): Observable<UpdateContainerInstancesStateResponse> {
			return this.http.post<UpdateContainerInstancesStateResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the parameters of a service.</p> <p>For services using the rolling update (<code>ECS</code>) you can update the desired count, deployment configuration, network configuration, load balancers, service registries, enable ECS managed tags option, propagate tags option, task placement constraints and strategies, and task definition. When you update any of these parameters, Amazon ECS starts new tasks with the new configuration. </p> <p>For services using the blue/green (<code>CODE_DEPLOY</code>) deployment controller, only the desired count, deployment configuration, health check grace period, task placement constraints and strategies, enable ECS managed tags option, and propagate tags can be updated using this API. If the network configuration, platform version, task definition, or load balancer need to be updated, create a new CodeDeploy deployment. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html">CreateDeployment</a> in the <i>CodeDeploy API Reference</i>.</p> <p>For services using an external deployment controller, you can update only the desired count, task placement constraints and strategies, health check grace period, enable ECS managed tags option, and propagate tags option, using this API. If the launch type, load balancer, network configuration, platform version, or task definition need to be updated, create a new task set For more information, see <a>CreateTaskSet</a>.</p> <p>You can add to or subtract from the number of instantiations of a task definition in a service by specifying the cluster that the service is running in and a new <code>desiredCount</code> parameter.</p> <p>If you have updated the Docker image of your application, you can create a new task definition with that image and deploy it to your service. The service scheduler uses the minimum healthy percent and maximum percent parameters (in the service's deployment configuration) to determine the deployment strategy.</p> <note> <p>If your updated Docker image uses the same tag as what is in the existing task definition for your service (for example, <code>my_image:latest</code>), you don't need to create a new revision of your task definition. You can update the service using the <code>forceNewDeployment</code> option. The new tasks launched by the deployment pull the current image/tag combination from your repository when they start.</p> </note> <p>You can also update the deployment configuration of a service. When a deployment is triggered by updating the task definition of a service, the service scheduler uses the deployment configuration parameters, <code>minimumHealthyPercent</code> and <code>maximumPercent</code>, to determine the deployment strategy.</p> <ul> <li> <p>If <code>minimumHealthyPercent</code> is below 100%, the scheduler can ignore <code>desiredCount</code> temporarily during a deployment. For example, if <code>desiredCount</code> is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. Tasks for services that don't use a load balancer are considered healthy if they're in the <code>RUNNING</code> state. Tasks for services that use a load balancer are considered healthy if they're in the <code>RUNNING</code> state and are reported as healthy by the load balancer.</p> </li> <li> <p>The <code>maximumPercent</code> parameter represents an upper limit on the number of running tasks during a deployment. You can use it to define the deployment batch size. For example, if <code>desiredCount</code> is four tasks, a maximum of 200% starts four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available).</p> </li> </ul> <p>When <a>UpdateService</a> stops a task during a deployment, the equivalent of <code>docker stop</code> is issued to the containers running in the task. This results in a <code>SIGTERM</code> and a 30-second timeout. After this, <code>SIGKILL</code> is sent and the containers are forcibly stopped. If the container handles the <code>SIGTERM</code> gracefully and exits within 30 seconds from receiving it, no <code>SIGKILL</code> is sent.</p> <p>When the service scheduler launches new tasks, it determines task placement in your cluster with the following logic.</p> <ul> <li> <p>Determine which of the container instances in your cluster can support your service's task definition. For example, they have the required CPU, memory, ports, and container instance attributes.</p> </li> <li> <p>By default, the service scheduler attempts to balance tasks across Availability Zones in this manner even though you can choose a different placement strategy.</p> <ul> <li> <p>Sort the valid container instances by the fewest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement.</p> </li> <li> <p>Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service.</p> </li> </ul> </li> </ul> <p>When the service scheduler stops running tasks, it attempts to maintain balance across the Availability Zones in your cluster using the following logic: </p> <ul> <li> <p>Sort the container instances by the largest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have two, container instances in either zone B or C are considered optimal for termination.</p> </li> <li> <p>Stop the task on a container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the largest number of running tasks for this service.</p> </li> </ul> <note> <p>You must have a service-linked role when you update any of the following service properties:</p> <ul> <li> <p> <code>loadBalancers</code>,</p> </li> <li> <p> <code>serviceRegistries</code> </p> </li> </ul> <p>For more information about the role see the <code>CreateService</code> request parameter <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html#ECS-CreateService-request-role"> <code>role</code> </a>. </p> </note>
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
		 * <p>Updates the protection status of a task. You can set <code>protectionEnabled</code> to <code>true</code> to protect your task from termination during scale-in events from <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-auto-scaling.html">Service Autoscaling</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">deployments</a>.</p> <p>Task-protection, by default, expires after 2 hours at which point Amazon ECS clears the <code>protectionEnabled</code> property making the task eligible for termination by a subsequent scale-in event.</p> <p>You can specify a custom expiration period for task protection from 1 minute to up to 2,880 minutes (48 hours). To specify the custom expiration period, set the <code>expiresInMinutes</code> property. The <code>expiresInMinutes</code> property is always reset when you invoke this operation for a task that already has <code>protectionEnabled</code> set to <code>true</code>. You can keep extending the protection expiration period of a task by invoking this operation repeatedly.</p> <p>To learn more about Amazon ECS task protection, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-scale-in-protection.html">Task scale-in protection</a> in the <i> <i>Amazon Elastic Container Service Developer Guide</i> </i>.</p> <note> <p>This operation is only supported for tasks belonging to an Amazon ECS service. Invoking this operation for a standalone task will result in an <code>TASK_NOT_VALID</code> failure. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure reasons</a>.</p> </note> <important> <p>If you prefer to set task protection from within the container, we recommend using the <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-scale-in-protection-endpoint.html">Task scale-in protection endpoint</a>.</p> </important>
		 * Post #X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskProtection
		 * @return {UpdateTaskProtectionResponse} Success
		 */
		UpdateTaskProtection(requestBody: UpdateTaskProtectionRequest): Observable<UpdateTaskProtectionResponse> {
			return this.http.post<UpdateTaskProtectionResponse>(this.baseUri + '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskProtection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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

	export enum CreateCapacityProviderX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.CreateCapacityProvider' = 0 }

	export enum CreateClusterX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.CreateCluster' = 0 }

	export enum CreateServiceX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.CreateService' = 0 }

	export enum CreateTaskSetX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.CreateTaskSet' = 0 }

	export enum DeleteAccountSettingX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.DeleteAccountSetting' = 0 }

	export enum DeleteAttributesX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.DeleteAttributes' = 0 }

	export enum DeleteCapacityProviderX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider' = 0 }

	export enum DeleteClusterX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.DeleteCluster' = 0 }

	export enum DeleteServiceX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.DeleteService' = 0 }

	export enum DeleteTaskDefinitionsX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions' = 0 }

	export enum DeleteTaskSetX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.DeleteTaskSet' = 0 }

	export enum DeregisterContainerInstanceX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance' = 0 }

	export enum DeregisterTaskDefinitionX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition' = 0 }

	export enum DescribeCapacityProvidersX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders' = 0 }

	export enum DescribeClustersX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.DescribeClusters' = 0 }

	export enum DescribeContainerInstancesX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.DescribeContainerInstances' = 0 }

	export enum DescribeServicesX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.DescribeServices' = 0 }

	export enum DescribeTaskDefinitionX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition' = 0 }

	export enum DescribeTaskSetsX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.DescribeTaskSets' = 0 }

	export enum DescribeTasksX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.DescribeTasks' = 0 }

	export enum DiscoverPollEndpointX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint' = 0 }

	export enum ExecuteCommandX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.ExecuteCommand' = 0 }

	export enum GetTaskProtectionX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.GetTaskProtection' = 0 }

	export enum ListAccountSettingsX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.ListAccountSettings' = 0 }

	export enum ListAttributesX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.ListAttributes' = 0 }

	export enum ListClustersX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.ListClusters' = 0 }

	export enum ListContainerInstancesX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.ListContainerInstances' = 0 }

	export enum ListServicesX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.ListServices' = 0 }

	export enum ListServicesByNamespaceX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.ListServicesByNamespace' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.ListTagsForResource' = 0 }

	export enum ListTaskDefinitionFamiliesX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies' = 0 }

	export enum ListTaskDefinitionsX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.ListTaskDefinitions' = 0 }

	export enum ListTasksX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.ListTasks' = 0 }

	export enum PutAccountSettingX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.PutAccountSetting' = 0 }

	export enum PutAccountSettingDefaultX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault' = 0 }

	export enum PutAttributesX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.PutAttributes' = 0 }

	export enum PutClusterCapacityProvidersX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders' = 0 }

	export enum RegisterContainerInstanceX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.RegisterContainerInstance' = 0 }

	export enum RegisterTaskDefinitionX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition' = 0 }

	export enum RunTaskX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.RunTask' = 0 }

	export enum StartTaskX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.StartTask' = 0 }

	export enum StopTaskX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.StopTask' = 0 }

	export enum SubmitAttachmentStateChangesX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges' = 0 }

	export enum SubmitContainerStateChangeX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange' = 0 }

	export enum SubmitTaskStateChangeX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange' = 0 }

	export enum TagResourceX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.UntagResource' = 0 }

	export enum UpdateCapacityProviderX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider' = 0 }

	export enum UpdateClusterX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.UpdateCluster' = 0 }

	export enum UpdateClusterSettingsX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.UpdateClusterSettings' = 0 }

	export enum UpdateContainerAgentX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.UpdateContainerAgent' = 0 }

	export enum UpdateContainerInstancesStateX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState' = 0 }

	export enum UpdateServiceX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.UpdateService' = 0 }

	export enum UpdateServicePrimaryTaskSetX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet' = 0 }

	export enum UpdateTaskProtectionX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.UpdateTaskProtection' = 0 }

	export enum UpdateTaskSetX_Amz_Target { 'AmazonEC2ContainerServiceV20141113.UpdateTaskSet' = 0 }

}

