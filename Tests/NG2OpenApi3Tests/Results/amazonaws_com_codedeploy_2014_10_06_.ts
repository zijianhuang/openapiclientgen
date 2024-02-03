import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents the input of, and adds tags to, an on-premises instance operation. */
	export interface AddTagsToOnPremisesInstancesInput {

		/** Required */
		tags: Array<Tag>;

		/** Required */
		instanceNames: Array<string>;
	}

	/** Represents the input of, and adds tags to, an on-premises instance operation. */
	export interface AddTagsToOnPremisesInstancesInputFormProperties {
	}
	export function CreateAddTagsToOnPremisesInstancesInputFormGroup() {
		return new FormGroup<AddTagsToOnPremisesInstancesInputFormProperties>({
		});

	}


	/** Information about a tag. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	/** Information about a tag. */
	export interface TagFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InstanceNameRequiredException {
	}
	export interface InstanceNameRequiredExceptionFormProperties {
	}
	export function CreateInstanceNameRequiredExceptionFormGroup() {
		return new FormGroup<InstanceNameRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidInstanceNameException {
	}
	export interface InvalidInstanceNameExceptionFormProperties {
	}
	export function CreateInvalidInstanceNameExceptionFormGroup() {
		return new FormGroup<InvalidInstanceNameExceptionFormProperties>({
		});

	}

	export interface TagRequiredException {
	}
	export interface TagRequiredExceptionFormProperties {
	}
	export function CreateTagRequiredExceptionFormGroup() {
		return new FormGroup<TagRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidTagException {
	}
	export interface InvalidTagExceptionFormProperties {
	}
	export function CreateInvalidTagExceptionFormGroup() {
		return new FormGroup<InvalidTagExceptionFormProperties>({
		});

	}

	export interface TagLimitExceededException {
	}
	export interface TagLimitExceededExceptionFormProperties {
	}
	export function CreateTagLimitExceededExceptionFormGroup() {
		return new FormGroup<TagLimitExceededExceptionFormProperties>({
		});

	}

	export interface InstanceLimitExceededException {
	}
	export interface InstanceLimitExceededExceptionFormProperties {
	}
	export function CreateInstanceLimitExceededExceptionFormGroup() {
		return new FormGroup<InstanceLimitExceededExceptionFormProperties>({
		});

	}

	export interface InstanceNotRegisteredException {
	}
	export interface InstanceNotRegisteredExceptionFormProperties {
	}
	export function CreateInstanceNotRegisteredExceptionFormGroup() {
		return new FormGroup<InstanceNotRegisteredExceptionFormProperties>({
		});

	}


	/** Represents the output of a <code>BatchGetApplicationRevisions</code> operation. */
	export interface BatchGetApplicationRevisionsOutput {
		applicationName?: string;
		errorMessage?: string;
		revisions?: Array<RevisionInfo>;
	}

	/** Represents the output of a <code>BatchGetApplicationRevisions</code> operation. */
	export interface BatchGetApplicationRevisionsOutputFormProperties {
		applicationName: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetApplicationRevisionsOutputFormGroup() {
		return new FormGroup<BatchGetApplicationRevisionsOutputFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an application revision. */
	export interface RevisionInfo {
		revisionLocation?: RevisionLocation;
		genericRevisionInfo?: GenericRevisionInfo;
	}

	/** Information about an application revision. */
	export interface RevisionInfoFormProperties {
	}
	export function CreateRevisionInfoFormGroup() {
		return new FormGroup<RevisionInfoFormProperties>({
		});

	}


	/** Information about the location of an application revision. */
	export interface RevisionLocation {
		revisionType?: RevisionLocationType;
		s3Location?: S3Location;
		gitHubLocation?: GitHubLocation;
		string?: RawString;
		appSpecContent?: AppSpecContent;
	}

	/** Information about the location of an application revision. */
	export interface RevisionLocationFormProperties {
		revisionType: FormControl<RevisionLocationType | null | undefined>,
	}
	export function CreateRevisionLocationFormGroup() {
		return new FormGroup<RevisionLocationFormProperties>({
			revisionType: new FormControl<RevisionLocationType | null | undefined>(undefined),
		});

	}

	export enum RevisionLocationType { S3 = 'S3', GitHub = 'GitHub', String = 'String', AppSpecContent = 'AppSpecContent' }


	/** Information about the location of application artifacts stored in Amazon S3. */
	export interface S3Location {
		bucket?: string;
		key?: string;
		bundleType?: BundleType;
		version?: string;
		eTag?: string;
	}

	/** Information about the location of application artifacts stored in Amazon S3. */
	export interface S3LocationFormProperties {
		bucket: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		bundleType: FormControl<BundleType | null | undefined>,
		version: FormControl<string | null | undefined>,
		eTag: FormControl<string | null | undefined>,
	}
	export function CreateS3LocationFormGroup() {
		return new FormGroup<S3LocationFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			bundleType: new FormControl<BundleType | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			eTag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BundleType { tar = 'tar', tgz = 'tgz', zip = 'zip', YAML = 'YAML', JSON = 'JSON' }


	/** Information about the location of application artifacts stored in GitHub. */
	export interface GitHubLocation {
		repository?: string;
		commitId?: string;
	}

	/** Information about the location of application artifacts stored in GitHub. */
	export interface GitHubLocationFormProperties {
		repository: FormControl<string | null | undefined>,
		commitId: FormControl<string | null | undefined>,
	}
	export function CreateGitHubLocationFormGroup() {
		return new FormGroup<GitHubLocationFormProperties>({
			repository: new FormControl<string | null | undefined>(undefined),
			commitId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A revision for an Lambda deployment that is a YAML-formatted or JSON-formatted string. For Lambda deployments, the revision is the same as the AppSpec file.RawString and String revision type are deprecated, use AppSpecContent type instead. */
	export interface RawString {
		content?: string;
		sha256?: string;
	}

	/** A revision for an Lambda deployment that is a YAML-formatted or JSON-formatted string. For Lambda deployments, the revision is the same as the AppSpec file.RawString and String revision type are deprecated, use AppSpecContent type instead. */
	export interface RawStringFormProperties {
		content: FormControl<string | null | undefined>,
		sha256: FormControl<string | null | undefined>,
	}
	export function CreateRawStringFormGroup() {
		return new FormGroup<RawStringFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			sha256: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A revision for an Lambda or Amazon ECS deployment that is a YAML-formatted or JSON-formatted string. For Lambda and Amazon ECS deployments, the revision is the same as the AppSpec file. This method replaces the deprecated <code>RawString</code> data type.  */
	export interface AppSpecContent {
		content?: string;
		sha256?: string;
	}

	/**  A revision for an Lambda or Amazon ECS deployment that is a YAML-formatted or JSON-formatted string. For Lambda and Amazon ECS deployments, the revision is the same as the AppSpec file. This method replaces the deprecated <code>RawString</code> data type.  */
	export interface AppSpecContentFormProperties {
		content: FormControl<string | null | undefined>,
		sha256: FormControl<string | null | undefined>,
	}
	export function CreateAppSpecContentFormGroup() {
		return new FormGroup<AppSpecContentFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			sha256: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an application revision. */
	export interface GenericRevisionInfo {
		description?: string;
		deploymentGroups?: Array<string>;
		firstUsedTime?: Date;
		lastUsedTime?: Date;
		registerTime?: Date;
	}

	/** Information about an application revision. */
	export interface GenericRevisionInfoFormProperties {
		description: FormControl<string | null | undefined>,
		firstUsedTime: FormControl<Date | null | undefined>,
		lastUsedTime: FormControl<Date | null | undefined>,
		registerTime: FormControl<Date | null | undefined>,
	}
	export function CreateGenericRevisionInfoFormGroup() {
		return new FormGroup<GenericRevisionInfoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			firstUsedTime: new FormControl<Date | null | undefined>(undefined),
			lastUsedTime: new FormControl<Date | null | undefined>(undefined),
			registerTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>BatchGetApplicationRevisions</code> operation. */
	export interface BatchGetApplicationRevisionsInput {

		/** Required */
		applicationName: string;

		/** Required */
		revisions: Array<RevisionLocation>;
	}

	/** Represents the input of a <code>BatchGetApplicationRevisions</code> operation. */
	export interface BatchGetApplicationRevisionsInputFormProperties {

		/** Required */
		applicationName: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetApplicationRevisionsInputFormGroup() {
		return new FormGroup<BatchGetApplicationRevisionsInputFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ApplicationDoesNotExistException {
	}
	export interface ApplicationDoesNotExistExceptionFormProperties {
	}
	export function CreateApplicationDoesNotExistExceptionFormGroup() {
		return new FormGroup<ApplicationDoesNotExistExceptionFormProperties>({
		});

	}

	export interface ApplicationNameRequiredException {
	}
	export interface ApplicationNameRequiredExceptionFormProperties {
	}
	export function CreateApplicationNameRequiredExceptionFormGroup() {
		return new FormGroup<ApplicationNameRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidApplicationNameException {
	}
	export interface InvalidApplicationNameExceptionFormProperties {
	}
	export function CreateInvalidApplicationNameExceptionFormGroup() {
		return new FormGroup<InvalidApplicationNameExceptionFormProperties>({
		});

	}

	export interface RevisionRequiredException {
	}
	export interface RevisionRequiredExceptionFormProperties {
	}
	export function CreateRevisionRequiredExceptionFormGroup() {
		return new FormGroup<RevisionRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidRevisionException {
	}
	export interface InvalidRevisionExceptionFormProperties {
	}
	export function CreateInvalidRevisionExceptionFormGroup() {
		return new FormGroup<InvalidRevisionExceptionFormProperties>({
		});

	}

	export interface BatchLimitExceededException {
	}
	export interface BatchLimitExceededExceptionFormProperties {
	}
	export function CreateBatchLimitExceededExceptionFormGroup() {
		return new FormGroup<BatchLimitExceededExceptionFormProperties>({
		});

	}


	/** Represents the output of a <code>BatchGetApplications</code> operation. */
	export interface BatchGetApplicationsOutput {
		applicationsInfo?: Array<ApplicationInfo>;
	}

	/** Represents the output of a <code>BatchGetApplications</code> operation. */
	export interface BatchGetApplicationsOutputFormProperties {
	}
	export function CreateBatchGetApplicationsOutputFormGroup() {
		return new FormGroup<BatchGetApplicationsOutputFormProperties>({
		});

	}


	/** Information about an application. */
	export interface ApplicationInfo {
		applicationId?: string;
		applicationName?: string;
		createTime?: Date;
		linkedToGitHub?: boolean | null;
		gitHubAccountName?: string;
		computePlatform?: ComputePlatform;
	}

	/** Information about an application. */
	export interface ApplicationInfoFormProperties {
		applicationId: FormControl<string | null | undefined>,
		applicationName: FormControl<string | null | undefined>,
		createTime: FormControl<Date | null | undefined>,
		linkedToGitHub: FormControl<boolean | null | undefined>,
		gitHubAccountName: FormControl<string | null | undefined>,
		computePlatform: FormControl<ComputePlatform | null | undefined>,
	}
	export function CreateApplicationInfoFormGroup() {
		return new FormGroup<ApplicationInfoFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined),
			applicationName: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
			linkedToGitHub: new FormControl<boolean | null | undefined>(undefined),
			gitHubAccountName: new FormControl<string | null | undefined>(undefined),
			computePlatform: new FormControl<ComputePlatform | null | undefined>(undefined),
		});

	}

	export enum ComputePlatform { Server = 'Server', Lambda = 'Lambda', ECS = 'ECS' }


	/** Represents the input of a <code>BatchGetApplications</code> operation. */
	export interface BatchGetApplicationsInput {

		/** Required */
		applicationNames: Array<string>;
	}

	/** Represents the input of a <code>BatchGetApplications</code> operation. */
	export interface BatchGetApplicationsInputFormProperties {
	}
	export function CreateBatchGetApplicationsInputFormGroup() {
		return new FormGroup<BatchGetApplicationsInputFormProperties>({
		});

	}


	/** Represents the output of a <code>BatchGetDeploymentGroups</code> operation. */
	export interface BatchGetDeploymentGroupsOutput {
		deploymentGroupsInfo?: Array<DeploymentGroupInfo>;
		errorMessage?: string;
	}

	/** Represents the output of a <code>BatchGetDeploymentGroups</code> operation. */
	export interface BatchGetDeploymentGroupsOutputFormProperties {
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetDeploymentGroupsOutputFormGroup() {
		return new FormGroup<BatchGetDeploymentGroupsOutputFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a deployment group. */
	export interface DeploymentGroupInfo {
		applicationName?: string;
		deploymentGroupId?: string;
		deploymentGroupName?: string;
		deploymentConfigName?: string;
		ec2TagFilters?: Array<EC2TagFilter>;
		onPremisesInstanceTagFilters?: Array<TagFilter>;
		autoScalingGroups?: Array<AutoScalingGroup>;
		serviceRoleArn?: string;
		targetRevision?: RevisionLocation;
		triggerConfigurations?: Array<TriggerConfig>;
		alarmConfiguration?: AlarmConfiguration;
		autoRollbackConfiguration?: AutoRollbackConfiguration;
		deploymentStyle?: DeploymentStyle;
		outdatedInstancesStrategy?: OutdatedInstancesStrategy;
		blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
		loadBalancerInfo?: LoadBalancerInfo;
		lastSuccessfulDeployment?: LastDeploymentInfo;
		lastAttemptedDeployment?: LastDeploymentInfo;
		ec2TagSet?: EC2TagSet;
		onPremisesTagSet?: OnPremisesTagSet;
		computePlatform?: ComputePlatform;
		ecsServices?: Array<ECSService>;
	}

	/** Information about a deployment group. */
	export interface DeploymentGroupInfoFormProperties {
		applicationName: FormControl<string | null | undefined>,
		deploymentGroupId: FormControl<string | null | undefined>,
		deploymentGroupName: FormControl<string | null | undefined>,
		deploymentConfigName: FormControl<string | null | undefined>,
		serviceRoleArn: FormControl<string | null | undefined>,
		outdatedInstancesStrategy: FormControl<OutdatedInstancesStrategy | null | undefined>,
		computePlatform: FormControl<ComputePlatform | null | undefined>,
	}
	export function CreateDeploymentGroupInfoFormGroup() {
		return new FormGroup<DeploymentGroupInfoFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined),
			deploymentGroupId: new FormControl<string | null | undefined>(undefined),
			deploymentGroupName: new FormControl<string | null | undefined>(undefined),
			deploymentConfigName: new FormControl<string | null | undefined>(undefined),
			serviceRoleArn: new FormControl<string | null | undefined>(undefined),
			outdatedInstancesStrategy: new FormControl<OutdatedInstancesStrategy | null | undefined>(undefined),
			computePlatform: new FormControl<ComputePlatform | null | undefined>(undefined),
		});

	}


	/** Information about an EC2 tag filter. */
	export interface EC2TagFilter {
		Key?: string;
		Value?: string;
		Type?: EC2TagFilterType;
	}

	/** Information about an EC2 tag filter. */
	export interface EC2TagFilterFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		Type: FormControl<EC2TagFilterType | null | undefined>,
	}
	export function CreateEC2TagFilterFormGroup() {
		return new FormGroup<EC2TagFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<EC2TagFilterType | null | undefined>(undefined),
		});

	}

	export enum EC2TagFilterType { KEY_ONLY = 'KEY_ONLY', VALUE_ONLY = 'VALUE_ONLY', KEY_AND_VALUE = 'KEY_AND_VALUE' }


	/** Information about an on-premises instance tag filter. */
	export interface TagFilter {
		Key?: string;
		Value?: string;
		Type?: EC2TagFilterType;
	}

	/** Information about an on-premises instance tag filter. */
	export interface TagFilterFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		Type: FormControl<EC2TagFilterType | null | undefined>,
	}
	export function CreateTagFilterFormGroup() {
		return new FormGroup<TagFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<EC2TagFilterType | null | undefined>(undefined),
		});

	}


	/** Information about an Auto Scaling group. */
	export interface AutoScalingGroup {
		name?: string;
		hook?: string;
	}

	/** Information about an Auto Scaling group. */
	export interface AutoScalingGroupFormProperties {
		name: FormControl<string | null | undefined>,
		hook: FormControl<string | null | undefined>,
	}
	export function CreateAutoScalingGroupFormGroup() {
		return new FormGroup<AutoScalingGroupFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			hook: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about notification triggers for the deployment group. */
	export interface TriggerConfig {
		triggerName?: string;
		triggerTargetArn?: string;
		triggerEvents?: Array<TriggerEventType>;
	}

	/** Information about notification triggers for the deployment group. */
	export interface TriggerConfigFormProperties {
		triggerName: FormControl<string | null | undefined>,
		triggerTargetArn: FormControl<string | null | undefined>,
	}
	export function CreateTriggerConfigFormGroup() {
		return new FormGroup<TriggerConfigFormProperties>({
			triggerName: new FormControl<string | null | undefined>(undefined),
			triggerTargetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TriggerEventType { DeploymentStart = 'DeploymentStart', DeploymentSuccess = 'DeploymentSuccess', DeploymentFailure = 'DeploymentFailure', DeploymentStop = 'DeploymentStop', DeploymentRollback = 'DeploymentRollback', DeploymentReady = 'DeploymentReady', InstanceStart = 'InstanceStart', InstanceSuccess = 'InstanceSuccess', InstanceFailure = 'InstanceFailure', InstanceReady = 'InstanceReady' }


	/** Information about alarms associated with a deployment or deployment group. */
	export interface AlarmConfiguration {
		enabled?: boolean | null;
		ignorePollAlarmFailure?: boolean | null;
		alarms?: Array<Alarm>;
	}

	/** Information about alarms associated with a deployment or deployment group. */
	export interface AlarmConfigurationFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		ignorePollAlarmFailure: FormControl<boolean | null | undefined>,
	}
	export function CreateAlarmConfigurationFormGroup() {
		return new FormGroup<AlarmConfigurationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			ignorePollAlarmFailure: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about an alarm. */
	export interface Alarm {
		name?: string;
	}

	/** Information about an alarm. */
	export interface AlarmFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateAlarmFormGroup() {
		return new FormGroup<AlarmFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully. */
	export interface AutoRollbackConfiguration {
		enabled?: boolean | null;
		events?: Array<AutoRollbackEvent>;
	}

	/** Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully. */
	export interface AutoRollbackConfigurationFormProperties {
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAutoRollbackConfigurationFormGroup() {
		return new FormGroup<AutoRollbackConfigurationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum AutoRollbackEvent { DEPLOYMENT_FAILURE = 'DEPLOYMENT_FAILURE', DEPLOYMENT_STOP_ON_ALARM = 'DEPLOYMENT_STOP_ON_ALARM', DEPLOYMENT_STOP_ON_REQUEST = 'DEPLOYMENT_STOP_ON_REQUEST' }


	/** Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer. */
	export interface DeploymentStyle {
		deploymentType?: DeploymentType;
		deploymentOption?: DeploymentOption;
	}

	/** Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer. */
	export interface DeploymentStyleFormProperties {
		deploymentType: FormControl<DeploymentType | null | undefined>,
		deploymentOption: FormControl<DeploymentOption | null | undefined>,
	}
	export function CreateDeploymentStyleFormGroup() {
		return new FormGroup<DeploymentStyleFormProperties>({
			deploymentType: new FormControl<DeploymentType | null | undefined>(undefined),
			deploymentOption: new FormControl<DeploymentOption | null | undefined>(undefined),
		});

	}

	export enum DeploymentType { IN_PLACE = 'IN_PLACE', BLUE_GREEN = 'BLUE_GREEN' }

	export enum DeploymentOption { WITH_TRAFFIC_CONTROL = 'WITH_TRAFFIC_CONTROL', WITHOUT_TRAFFIC_CONTROL = 'WITHOUT_TRAFFIC_CONTROL' }

	export enum OutdatedInstancesStrategy { UPDATE = 'UPDATE', IGNORE = 'IGNORE' }


	/** Information about blue/green deployment options for a deployment group. */
	export interface BlueGreenDeploymentConfiguration {
		terminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOption;
		deploymentReadyOption?: DeploymentReadyOption;
		greenFleetProvisioningOption?: GreenFleetProvisioningOption;
	}

	/** Information about blue/green deployment options for a deployment group. */
	export interface BlueGreenDeploymentConfigurationFormProperties {
	}
	export function CreateBlueGreenDeploymentConfigurationFormGroup() {
		return new FormGroup<BlueGreenDeploymentConfigurationFormProperties>({
		});

	}


	/** Information about whether instances in the original environment are terminated when a blue/green deployment is successful. <code>BlueInstanceTerminationOption</code> does not apply to Lambda deployments.  */
	export interface BlueInstanceTerminationOption {
		action?: InstanceAction;
		terminationWaitTimeInMinutes?: number | null;
	}

	/** Information about whether instances in the original environment are terminated when a blue/green deployment is successful. <code>BlueInstanceTerminationOption</code> does not apply to Lambda deployments.  */
	export interface BlueInstanceTerminationOptionFormProperties {
		action: FormControl<InstanceAction | null | undefined>,
		terminationWaitTimeInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateBlueInstanceTerminationOptionFormGroup() {
		return new FormGroup<BlueInstanceTerminationOptionFormProperties>({
			action: new FormControl<InstanceAction | null | undefined>(undefined),
			terminationWaitTimeInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum InstanceAction { TERMINATE = 'TERMINATE', KEEP_ALIVE = 'KEEP_ALIVE' }


	/** Information about how traffic is rerouted to instances in a replacement environment in a blue/green deployment. */
	export interface DeploymentReadyOption {
		actionOnTimeout?: DeploymentReadyAction;
		waitTimeInMinutes?: number | null;
	}

	/** Information about how traffic is rerouted to instances in a replacement environment in a blue/green deployment. */
	export interface DeploymentReadyOptionFormProperties {
		actionOnTimeout: FormControl<DeploymentReadyAction | null | undefined>,
		waitTimeInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateDeploymentReadyOptionFormGroup() {
		return new FormGroup<DeploymentReadyOptionFormProperties>({
			actionOnTimeout: new FormControl<DeploymentReadyAction | null | undefined>(undefined),
			waitTimeInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DeploymentReadyAction { CONTINUE_DEPLOYMENT = 'CONTINUE_DEPLOYMENT', STOP_DEPLOYMENT = 'STOP_DEPLOYMENT' }


	/** Information about the instances that belong to the replacement environment in a blue/green deployment. */
	export interface GreenFleetProvisioningOption {
		action?: GreenFleetProvisioningAction;
	}

	/** Information about the instances that belong to the replacement environment in a blue/green deployment. */
	export interface GreenFleetProvisioningOptionFormProperties {
		action: FormControl<GreenFleetProvisioningAction | null | undefined>,
	}
	export function CreateGreenFleetProvisioningOptionFormGroup() {
		return new FormGroup<GreenFleetProvisioningOptionFormProperties>({
			action: new FormControl<GreenFleetProvisioningAction | null | undefined>(undefined),
		});

	}

	export enum GreenFleetProvisioningAction { DISCOVER_EXISTING = 'DISCOVER_EXISTING', COPY_AUTO_SCALING_GROUP = 'COPY_AUTO_SCALING_GROUP' }


	/** Information about the Elastic Load Balancing load balancer or target group used in a deployment. */
	export interface LoadBalancerInfo {
		elbInfoList?: Array<ELBInfo>;
		targetGroupInfoList?: Array<TargetGroupInfo>;
		targetGroupPairInfoList?: Array<TargetGroupPairInfo>;
	}

	/** Information about the Elastic Load Balancing load balancer or target group used in a deployment. */
	export interface LoadBalancerInfoFormProperties {
	}
	export function CreateLoadBalancerInfoFormGroup() {
		return new FormGroup<LoadBalancerInfoFormProperties>({
		});

	}


	/** Information about a load balancer in Elastic Load Balancing to use in a deployment. Instances are registered directly with a load balancer, and traffic is routed to the load balancer. */
	export interface ELBInfo {
		name?: string;
	}

	/** Information about a load balancer in Elastic Load Balancing to use in a deployment. Instances are registered directly with a load balancer, and traffic is routed to the load balancer. */
	export interface ELBInfoFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateELBInfoFormGroup() {
		return new FormGroup<ELBInfoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a target group in Elastic Load Balancing to use in a deployment. Instances are registered as targets in a target group, and traffic is routed to the target group. */
	export interface TargetGroupInfo {
		name?: string;
	}

	/** Information about a target group in Elastic Load Balancing to use in a deployment. Instances are registered as targets in a target group, and traffic is routed to the target group. */
	export interface TargetGroupInfoFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateTargetGroupInfoFormGroup() {
		return new FormGroup<TargetGroupInfoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about two target groups and how traffic is routed during an Amazon ECS deployment. An optional test traffic route can be specified.  */
	export interface TargetGroupPairInfo {
		targetGroups?: Array<TargetGroupInfo>;
		prodTrafficRoute?: TrafficRoute;
		testTrafficRoute?: TrafficRoute;
	}

	/**  Information about two target groups and how traffic is routed during an Amazon ECS deployment. An optional test traffic route can be specified.  */
	export interface TargetGroupPairInfoFormProperties {
	}
	export function CreateTargetGroupPairInfoFormGroup() {
		return new FormGroup<TargetGroupPairInfoFormProperties>({
		});

	}


	/**  Information about a listener. The listener contains the path used to route traffic that is received from the load balancer to a target group.  */
	export interface TrafficRoute {
		listenerArns?: Array<string>;
	}

	/**  Information about a listener. The listener contains the path used to route traffic that is received from the load balancer to a target group.  */
	export interface TrafficRouteFormProperties {
	}
	export function CreateTrafficRouteFormGroup() {
		return new FormGroup<TrafficRouteFormProperties>({
		});

	}


	/** Information about the most recent attempted or successful deployment to a deployment group. */
	export interface LastDeploymentInfo {
		deploymentId?: string;
		status?: DeploymentStatus;
		endTime?: Date;
		createTime?: Date;
	}

	/** Information about the most recent attempted or successful deployment to a deployment group. */
	export interface LastDeploymentInfoFormProperties {
		deploymentId: FormControl<string | null | undefined>,
		status: FormControl<DeploymentStatus | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		createTime: FormControl<Date | null | undefined>,
	}
	export function CreateLastDeploymentInfoFormGroup() {
		return new FormGroup<LastDeploymentInfoFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DeploymentStatus | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DeploymentStatus { Created = 'Created', Queued = 'Queued', InProgress = 'InProgress', Baking = 'Baking', Succeeded = 'Succeeded', Failed = 'Failed', Stopped = 'Stopped', Ready = 'Ready' }


	/** Information about groups of Amazon EC2 instance tags. */
	export interface EC2TagSet {
		ec2TagSetList?: Array<Array<EC2TagFilter>>;
	}

	/** Information about groups of Amazon EC2 instance tags. */
	export interface EC2TagSetFormProperties {
	}
	export function CreateEC2TagSetFormGroup() {
		return new FormGroup<EC2TagSetFormProperties>({
		});

	}


	/** Information about groups of on-premises instance tags. */
	export interface OnPremisesTagSet {
		onPremisesTagSetList?: Array<Array<TagFilter>>;
	}

	/** Information about groups of on-premises instance tags. */
	export interface OnPremisesTagSetFormProperties {
	}
	export function CreateOnPremisesTagSetFormGroup() {
		return new FormGroup<OnPremisesTagSetFormProperties>({
		});

	}


	/**  Contains the service and cluster names used to identify an Amazon ECS deployment's target.  */
	export interface ECSService {
		serviceName?: string;
		clusterName?: string;
	}

	/**  Contains the service and cluster names used to identify an Amazon ECS deployment's target.  */
	export interface ECSServiceFormProperties {
		serviceName: FormControl<string | null | undefined>,
		clusterName: FormControl<string | null | undefined>,
	}
	export function CreateECSServiceFormGroup() {
		return new FormGroup<ECSServiceFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined),
			clusterName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>BatchGetDeploymentGroups</code> operation. */
	export interface BatchGetDeploymentGroupsInput {

		/** Required */
		applicationName: string;

		/** Required */
		deploymentGroupNames: Array<string>;
	}

	/** Represents the input of a <code>BatchGetDeploymentGroups</code> operation. */
	export interface BatchGetDeploymentGroupsInputFormProperties {

		/** Required */
		applicationName: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetDeploymentGroupsInputFormGroup() {
		return new FormGroup<BatchGetDeploymentGroupsInputFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeploymentGroupNameRequiredException {
	}
	export interface DeploymentGroupNameRequiredExceptionFormProperties {
	}
	export function CreateDeploymentGroupNameRequiredExceptionFormGroup() {
		return new FormGroup<DeploymentGroupNameRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidDeploymentGroupNameException {
	}
	export interface InvalidDeploymentGroupNameExceptionFormProperties {
	}
	export function CreateInvalidDeploymentGroupNameExceptionFormGroup() {
		return new FormGroup<InvalidDeploymentGroupNameExceptionFormProperties>({
		});

	}

	export interface DeploymentConfigDoesNotExistException {
	}
	export interface DeploymentConfigDoesNotExistExceptionFormProperties {
	}
	export function CreateDeploymentConfigDoesNotExistExceptionFormGroup() {
		return new FormGroup<DeploymentConfigDoesNotExistExceptionFormProperties>({
		});

	}


	/** Represents the output of a <code>BatchGetDeploymentInstances</code> operation. */
	export interface BatchGetDeploymentInstancesOutput {
		instancesSummary?: Array<InstanceSummary>;
		errorMessage?: string;
	}

	/** Represents the output of a <code>BatchGetDeploymentInstances</code> operation. */
	export interface BatchGetDeploymentInstancesOutputFormProperties {
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetDeploymentInstancesOutputFormGroup() {
		return new FormGroup<BatchGetDeploymentInstancesOutputFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an instance in a deployment.InstanceSummary is deprecated, use DeploymentTarget instead. */
	export interface InstanceSummary {
		deploymentId?: string;
		instanceId?: string;
		status?: InstanceStatus;
		lastUpdatedAt?: Date;
		lifecycleEvents?: Array<LifecycleEvent>;
		instanceType?: InstanceType;
	}

	/** Information about an instance in a deployment.InstanceSummary is deprecated, use DeploymentTarget instead. */
	export interface InstanceSummaryFormProperties {
		deploymentId: FormControl<string | null | undefined>,
		instanceId: FormControl<string | null | undefined>,
		status: FormControl<InstanceStatus | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		instanceType: FormControl<InstanceType | null | undefined>,
	}
	export function CreateInstanceSummaryFormGroup() {
		return new FormGroup<InstanceSummaryFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined),
			instanceId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<InstanceStatus | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			instanceType: new FormControl<InstanceType | null | undefined>(undefined),
		});

	}


	/** InstanceStatus is deprecated, use TargetStatus instead. */
	export enum InstanceStatus { Pending = 'Pending', InProgress = 'InProgress', Succeeded = 'Succeeded', Failed = 'Failed', Skipped = 'Skipped', Unknown = 'Unknown', Ready = 'Ready' }


	/** Information about a deployment lifecycle event. */
	export interface LifecycleEvent {
		lifecycleEventName?: string;
		diagnostics?: Diagnostics;
		startTime?: Date;
		endTime?: Date;
		status?: LifecycleEventStatus;
	}

	/** Information about a deployment lifecycle event. */
	export interface LifecycleEventFormProperties {
		lifecycleEventName: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		status: FormControl<LifecycleEventStatus | null | undefined>,
	}
	export function CreateLifecycleEventFormGroup() {
		return new FormGroup<LifecycleEventFormProperties>({
			lifecycleEventName: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<LifecycleEventStatus | null | undefined>(undefined),
		});

	}


	/** Diagnostic information about executable scripts that are part of a deployment. */
	export interface Diagnostics {
		errorCode?: LifecycleErrorCode;
		scriptName?: string;
		message?: string;
		logTail?: string;
	}

	/** Diagnostic information about executable scripts that are part of a deployment. */
	export interface DiagnosticsFormProperties {
		errorCode: FormControl<LifecycleErrorCode | null | undefined>,
		scriptName: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		logTail: FormControl<string | null | undefined>,
	}
	export function CreateDiagnosticsFormGroup() {
		return new FormGroup<DiagnosticsFormProperties>({
			errorCode: new FormControl<LifecycleErrorCode | null | undefined>(undefined),
			scriptName: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			logTail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LifecycleErrorCode { Success = 'Success', ScriptMissing = 'ScriptMissing', ScriptNotExecutable = 'ScriptNotExecutable', ScriptTimedOut = 'ScriptTimedOut', ScriptFailed = 'ScriptFailed', UnknownError = 'UnknownError' }

	export enum LifecycleEventStatus { Pending = 'Pending', InProgress = 'InProgress', Succeeded = 'Succeeded', Failed = 'Failed', Skipped = 'Skipped', Unknown = 'Unknown' }

	export enum InstanceType { Blue = 'Blue', Green = 'Green' }


	/**  Represents the input of a <code>BatchGetDeploymentInstances</code> operation.  */
	export interface BatchGetDeploymentInstancesInput {

		/** Required */
		deploymentId: string;

		/** Required */
		instanceIds: Array<string>;
	}

	/**  Represents the input of a <code>BatchGetDeploymentInstances</code> operation.  */
	export interface BatchGetDeploymentInstancesInputFormProperties {

		/** Required */
		deploymentId: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetDeploymentInstancesInputFormGroup() {
		return new FormGroup<BatchGetDeploymentInstancesInputFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeploymentIdRequiredException {
	}
	export interface DeploymentIdRequiredExceptionFormProperties {
	}
	export function CreateDeploymentIdRequiredExceptionFormGroup() {
		return new FormGroup<DeploymentIdRequiredExceptionFormProperties>({
		});

	}

	export interface DeploymentDoesNotExistException {
	}
	export interface DeploymentDoesNotExistExceptionFormProperties {
	}
	export function CreateDeploymentDoesNotExistExceptionFormGroup() {
		return new FormGroup<DeploymentDoesNotExistExceptionFormProperties>({
		});

	}

	export interface InstanceIdRequiredException {
	}
	export interface InstanceIdRequiredExceptionFormProperties {
	}
	export function CreateInstanceIdRequiredExceptionFormGroup() {
		return new FormGroup<InstanceIdRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidDeploymentIdException {
	}
	export interface InvalidDeploymentIdExceptionFormProperties {
	}
	export function CreateInvalidDeploymentIdExceptionFormGroup() {
		return new FormGroup<InvalidDeploymentIdExceptionFormProperties>({
		});

	}

	export interface InvalidComputePlatformException {
	}
	export interface InvalidComputePlatformExceptionFormProperties {
	}
	export function CreateInvalidComputePlatformExceptionFormGroup() {
		return new FormGroup<InvalidComputePlatformExceptionFormProperties>({
		});

	}

	export interface BatchGetDeploymentTargetsOutput {
		deploymentTargets?: Array<DeploymentTarget>;
	}
	export interface BatchGetDeploymentTargetsOutputFormProperties {
	}
	export function CreateBatchGetDeploymentTargetsOutputFormGroup() {
		return new FormGroup<BatchGetDeploymentTargetsOutputFormProperties>({
		});

	}


	/**  Information about the deployment target.  */
	export interface DeploymentTarget {
		deploymentTargetType?: DeploymentTargetType;
		instanceTarget?: InstanceTarget;
		lambdaTarget?: LambdaTarget;
		ecsTarget?: ECSTarget;

		/** Information about the target to be updated by an CloudFormation blue/green deployment. This target type is used for all deployments initiated by a CloudFormation stack update. */
		cloudFormationTarget?: CloudFormationTarget;
	}

	/**  Information about the deployment target.  */
	export interface DeploymentTargetFormProperties {
		deploymentTargetType: FormControl<DeploymentTargetType | null | undefined>,
	}
	export function CreateDeploymentTargetFormGroup() {
		return new FormGroup<DeploymentTargetFormProperties>({
			deploymentTargetType: new FormControl<DeploymentTargetType | null | undefined>(undefined),
		});

	}

	export enum DeploymentTargetType { InstanceTarget = 'InstanceTarget', LambdaTarget = 'LambdaTarget', ECSTarget = 'ECSTarget', CloudFormationTarget = 'CloudFormationTarget' }


	/**  A target Amazon EC2 or on-premises instance during a deployment that uses the EC2/On-premises compute platform.  */
	export interface InstanceTarget {
		deploymentId?: string;
		targetId?: string;
		targetArn?: string;
		status?: InstanceStatus;
		lastUpdatedAt?: Date;
		lifecycleEvents?: Array<LifecycleEvent>;
		instanceLabel?: InstanceType;
	}

	/**  A target Amazon EC2 or on-premises instance during a deployment that uses the EC2/On-premises compute platform.  */
	export interface InstanceTargetFormProperties {
		deploymentId: FormControl<string | null | undefined>,
		targetId: FormControl<string | null | undefined>,
		targetArn: FormControl<string | null | undefined>,
		status: FormControl<InstanceStatus | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		instanceLabel: FormControl<InstanceType | null | undefined>,
	}
	export function CreateInstanceTargetFormGroup() {
		return new FormGroup<InstanceTargetFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined),
			targetId: new FormControl<string | null | undefined>(undefined),
			targetArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<InstanceStatus | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			instanceLabel: new FormControl<InstanceType | null | undefined>(undefined),
		});

	}


	/**  Information about the target Lambda function during an Lambda deployment.  */
	export interface LambdaTarget {
		deploymentId?: string;
		targetId?: string;
		targetArn?: string;
		status?: InstanceStatus;
		lastUpdatedAt?: Date;
		lifecycleEvents?: Array<LifecycleEvent>;
		lambdaFunctionInfo?: LambdaFunctionInfo;
	}

	/**  Information about the target Lambda function during an Lambda deployment.  */
	export interface LambdaTargetFormProperties {
		deploymentId: FormControl<string | null | undefined>,
		targetId: FormControl<string | null | undefined>,
		targetArn: FormControl<string | null | undefined>,
		status: FormControl<InstanceStatus | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateLambdaTargetFormGroup() {
		return new FormGroup<LambdaTargetFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined),
			targetId: new FormControl<string | null | undefined>(undefined),
			targetArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<InstanceStatus | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**  Information about a Lambda function specified in a deployment.  */
	export interface LambdaFunctionInfo {
		functionName?: string;
		functionAlias?: string;
		currentVersion?: string;
		targetVersion?: string;
		targetVersionWeight?: number | null;
	}

	/**  Information about a Lambda function specified in a deployment.  */
	export interface LambdaFunctionInfoFormProperties {
		functionName: FormControl<string | null | undefined>,
		functionAlias: FormControl<string | null | undefined>,
		currentVersion: FormControl<string | null | undefined>,
		targetVersion: FormControl<string | null | undefined>,
		targetVersionWeight: FormControl<number | null | undefined>,
	}
	export function CreateLambdaFunctionInfoFormGroup() {
		return new FormGroup<LambdaFunctionInfoFormProperties>({
			functionName: new FormControl<string | null | undefined>(undefined),
			functionAlias: new FormControl<string | null | undefined>(undefined),
			currentVersion: new FormControl<string | null | undefined>(undefined),
			targetVersion: new FormControl<string | null | undefined>(undefined),
			targetVersionWeight: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  Information about the target of an Amazon ECS deployment.  */
	export interface ECSTarget {
		deploymentId?: string;
		targetId?: string;
		targetArn?: string;
		lastUpdatedAt?: Date;
		lifecycleEvents?: Array<LifecycleEvent>;
		status?: InstanceStatus;
		taskSetsInfo?: Array<ECSTaskSet>;
	}

	/**  Information about the target of an Amazon ECS deployment.  */
	export interface ECSTargetFormProperties {
		deploymentId: FormControl<string | null | undefined>,
		targetId: FormControl<string | null | undefined>,
		targetArn: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		status: FormControl<InstanceStatus | null | undefined>,
	}
	export function CreateECSTargetFormGroup() {
		return new FormGroup<ECSTargetFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined),
			targetId: new FormControl<string | null | undefined>(undefined),
			targetArn: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<InstanceStatus | null | undefined>(undefined),
		});

	}


	/**  Information about a set of Amazon ECS tasks in an CodeDeploy deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. An CodeDeploy application that uses the Amazon ECS compute platform deploys a containerized application in an Amazon ECS service as a task set.  */
	export interface ECSTaskSet {
		identifer?: string;
		desiredCount?: number | null;
		pendingCount?: number | null;
		runningCount?: number | null;
		status?: string;
		trafficWeight?: number | null;
		targetGroup?: TargetGroupInfo;
		taskSetLabel?: InstanceType;
	}

	/**  Information about a set of Amazon ECS tasks in an CodeDeploy deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. An CodeDeploy application that uses the Amazon ECS compute platform deploys a containerized application in an Amazon ECS service as a task set.  */
	export interface ECSTaskSetFormProperties {
		identifer: FormControl<string | null | undefined>,
		desiredCount: FormControl<number | null | undefined>,
		pendingCount: FormControl<number | null | undefined>,
		runningCount: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
		trafficWeight: FormControl<number | null | undefined>,
		taskSetLabel: FormControl<InstanceType | null | undefined>,
	}
	export function CreateECSTaskSetFormGroup() {
		return new FormGroup<ECSTaskSetFormProperties>({
			identifer: new FormControl<string | null | undefined>(undefined),
			desiredCount: new FormControl<number | null | undefined>(undefined),
			pendingCount: new FormControl<number | null | undefined>(undefined),
			runningCount: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			trafficWeight: new FormControl<number | null | undefined>(undefined),
			taskSetLabel: new FormControl<InstanceType | null | undefined>(undefined),
		});

	}


	/**  Information about the target to be updated by an CloudFormation blue/green deployment. This target type is used for all deployments initiated by a CloudFormation stack update. */
	export interface CloudFormationTarget {
		deploymentId?: string;
		targetId?: string;
		lastUpdatedAt?: Date;
		lifecycleEvents?: Array<LifecycleEvent>;
		status?: InstanceStatus;
		resourceType?: string;
		targetVersionWeight?: number | null;
	}

	/**  Information about the target to be updated by an CloudFormation blue/green deployment. This target type is used for all deployments initiated by a CloudFormation stack update. */
	export interface CloudFormationTargetFormProperties {
		deploymentId: FormControl<string | null | undefined>,
		targetId: FormControl<string | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		status: FormControl<InstanceStatus | null | undefined>,
		resourceType: FormControl<string | null | undefined>,
		targetVersionWeight: FormControl<number | null | undefined>,
	}
	export function CreateCloudFormationTargetFormGroup() {
		return new FormGroup<CloudFormationTargetFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined),
			targetId: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<InstanceStatus | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			targetVersionWeight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BatchGetDeploymentTargetsInput {
		deploymentId?: string;
		targetIds?: Array<string>;
	}
	export interface BatchGetDeploymentTargetsInputFormProperties {
		deploymentId: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetDeploymentTargetsInputFormGroup() {
		return new FormGroup<BatchGetDeploymentTargetsInputFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeploymentNotStartedException {
	}
	export interface DeploymentNotStartedExceptionFormProperties {
	}
	export function CreateDeploymentNotStartedExceptionFormGroup() {
		return new FormGroup<DeploymentNotStartedExceptionFormProperties>({
		});

	}

	export interface DeploymentTargetIdRequiredException {
	}
	export interface DeploymentTargetIdRequiredExceptionFormProperties {
	}
	export function CreateDeploymentTargetIdRequiredExceptionFormGroup() {
		return new FormGroup<DeploymentTargetIdRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidDeploymentTargetIdException {
	}
	export interface InvalidDeploymentTargetIdExceptionFormProperties {
	}
	export function CreateInvalidDeploymentTargetIdExceptionFormGroup() {
		return new FormGroup<InvalidDeploymentTargetIdExceptionFormProperties>({
		});

	}

	export interface DeploymentTargetDoesNotExistException {
	}
	export interface DeploymentTargetDoesNotExistExceptionFormProperties {
	}
	export function CreateDeploymentTargetDoesNotExistExceptionFormGroup() {
		return new FormGroup<DeploymentTargetDoesNotExistExceptionFormProperties>({
		});

	}

	export interface DeploymentTargetListSizeExceededException {
	}
	export interface DeploymentTargetListSizeExceededExceptionFormProperties {
	}
	export function CreateDeploymentTargetListSizeExceededExceptionFormGroup() {
		return new FormGroup<DeploymentTargetListSizeExceededExceptionFormProperties>({
		});

	}

	export interface InstanceDoesNotExistException {
	}
	export interface InstanceDoesNotExistExceptionFormProperties {
	}
	export function CreateInstanceDoesNotExistExceptionFormGroup() {
		return new FormGroup<InstanceDoesNotExistExceptionFormProperties>({
		});

	}


	/**  Represents the output of a <code>BatchGetDeployments</code> operation.  */
	export interface BatchGetDeploymentsOutput {
		deploymentsInfo?: Array<DeploymentInfo>;
	}

	/**  Represents the output of a <code>BatchGetDeployments</code> operation.  */
	export interface BatchGetDeploymentsOutputFormProperties {
	}
	export function CreateBatchGetDeploymentsOutputFormGroup() {
		return new FormGroup<BatchGetDeploymentsOutputFormProperties>({
		});

	}


	/** Information about a deployment. */
	export interface DeploymentInfo {
		applicationName?: string;
		deploymentGroupName?: string;
		deploymentConfigName?: string;
		deploymentId?: string;
		previousRevision?: RevisionLocation;
		revision?: RevisionLocation;
		status?: DeploymentStatus;
		errorInformation?: ErrorInformation;
		createTime?: Date;
		startTime?: Date;
		completeTime?: Date;
		deploymentOverview?: DeploymentOverview;
		description?: string;
		creator?: DeploymentCreator;
		ignoreApplicationStopFailures?: boolean | null;
		autoRollbackConfiguration?: AutoRollbackConfiguration;
		updateOutdatedInstancesOnly?: boolean | null;
		rollbackInfo?: RollbackInfo;
		deploymentStyle?: DeploymentStyle;
		targetInstances?: TargetInstances;
		instanceTerminationWaitTimeStarted?: boolean | null;
		blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
		loadBalancerInfo?: LoadBalancerInfo;
		additionalDeploymentStatusInfo?: string;
		fileExistsBehavior?: FileExistsBehavior;
		deploymentStatusMessages?: Array<string>;
		computePlatform?: ComputePlatform;
		externalId?: string;

		/** Information about deployments related to the specified deployment. */
		relatedDeployments?: RelatedDeployments;

		/** Information about alarms associated with a deployment or deployment group. */
		overrideAlarmConfiguration?: AlarmConfiguration;
	}

	/** Information about a deployment. */
	export interface DeploymentInfoFormProperties {
		applicationName: FormControl<string | null | undefined>,
		deploymentGroupName: FormControl<string | null | undefined>,
		deploymentConfigName: FormControl<string | null | undefined>,
		deploymentId: FormControl<string | null | undefined>,
		status: FormControl<DeploymentStatus | null | undefined>,
		createTime: FormControl<Date | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		completeTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		creator: FormControl<DeploymentCreator | null | undefined>,
		ignoreApplicationStopFailures: FormControl<boolean | null | undefined>,
		updateOutdatedInstancesOnly: FormControl<boolean | null | undefined>,
		instanceTerminationWaitTimeStarted: FormControl<boolean | null | undefined>,
		additionalDeploymentStatusInfo: FormControl<string | null | undefined>,
		fileExistsBehavior: FormControl<FileExistsBehavior | null | undefined>,
		computePlatform: FormControl<ComputePlatform | null | undefined>,
		externalId: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentInfoFormGroup() {
		return new FormGroup<DeploymentInfoFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined),
			deploymentGroupName: new FormControl<string | null | undefined>(undefined),
			deploymentConfigName: new FormControl<string | null | undefined>(undefined),
			deploymentId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DeploymentStatus | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			completeTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creator: new FormControl<DeploymentCreator | null | undefined>(undefined),
			ignoreApplicationStopFailures: new FormControl<boolean | null | undefined>(undefined),
			updateOutdatedInstancesOnly: new FormControl<boolean | null | undefined>(undefined),
			instanceTerminationWaitTimeStarted: new FormControl<boolean | null | undefined>(undefined),
			additionalDeploymentStatusInfo: new FormControl<string | null | undefined>(undefined),
			fileExistsBehavior: new FormControl<FileExistsBehavior | null | undefined>(undefined),
			computePlatform: new FormControl<ComputePlatform | null | undefined>(undefined),
			externalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a deployment error. */
	export interface ErrorInformation {
		code?: ErrorCode;
		message?: string;
	}

	/** Information about a deployment error. */
	export interface ErrorInformationFormProperties {
		code: FormControl<ErrorCode | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorInformationFormGroup() {
		return new FormGroup<ErrorInformationFormProperties>({
			code: new FormControl<ErrorCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorCode { AGENT_ISSUE = 'AGENT_ISSUE', ALARM_ACTIVE = 'ALARM_ACTIVE', APPLICATION_MISSING = 'APPLICATION_MISSING', AUTOSCALING_VALIDATION_ERROR = 'AUTOSCALING_VALIDATION_ERROR', AUTO_SCALING_CONFIGURATION = 'AUTO_SCALING_CONFIGURATION', AUTO_SCALING_IAM_ROLE_PERMISSIONS = 'AUTO_SCALING_IAM_ROLE_PERMISSIONS', CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND = 'CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND', CUSTOMER_APPLICATION_UNHEALTHY = 'CUSTOMER_APPLICATION_UNHEALTHY', DEPLOYMENT_GROUP_MISSING = 'DEPLOYMENT_GROUP_MISSING', ECS_UPDATE_ERROR = 'ECS_UPDATE_ERROR', ELASTIC_LOAD_BALANCING_INVALID = 'ELASTIC_LOAD_BALANCING_INVALID', ELB_INVALID_INSTANCE = 'ELB_INVALID_INSTANCE', HEALTH_CONSTRAINTS = 'HEALTH_CONSTRAINTS', HEALTH_CONSTRAINTS_INVALID = 'HEALTH_CONSTRAINTS_INVALID', HOOK_EXECUTION_FAILURE = 'HOOK_EXECUTION_FAILURE', IAM_ROLE_MISSING = 'IAM_ROLE_MISSING', IAM_ROLE_PERMISSIONS = 'IAM_ROLE_PERMISSIONS', INTERNAL_ERROR = 'INTERNAL_ERROR', INVALID_ECS_SERVICE = 'INVALID_ECS_SERVICE', INVALID_LAMBDA_CONFIGURATION = 'INVALID_LAMBDA_CONFIGURATION', INVALID_LAMBDA_FUNCTION = 'INVALID_LAMBDA_FUNCTION', INVALID_REVISION = 'INVALID_REVISION', MANUAL_STOP = 'MANUAL_STOP', MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION = 'MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION', MISSING_ELB_INFORMATION = 'MISSING_ELB_INFORMATION', MISSING_GITHUB_TOKEN = 'MISSING_GITHUB_TOKEN', NO_EC2_SUBSCRIPTION = 'NO_EC2_SUBSCRIPTION', NO_INSTANCES = 'NO_INSTANCES', OVER_MAX_INSTANCES = 'OVER_MAX_INSTANCES', RESOURCE_LIMIT_EXCEEDED = 'RESOURCE_LIMIT_EXCEEDED', REVISION_MISSING = 'REVISION_MISSING', THROTTLED = 'THROTTLED', TIMEOUT = 'TIMEOUT', CLOUDFORMATION_STACK_FAILURE = 'CLOUDFORMATION_STACK_FAILURE' }


	/** Information about the deployment status of the instances in the deployment. */
	export interface DeploymentOverview {
		Pending?: number | null;
		InProgress?: number | null;
		Succeeded?: number | null;
		Failed?: number | null;
		Skipped?: number | null;
		Ready?: number | null;
	}

	/** Information about the deployment status of the instances in the deployment. */
	export interface DeploymentOverviewFormProperties {
		Pending: FormControl<number | null | undefined>,
		InProgress: FormControl<number | null | undefined>,
		Succeeded: FormControl<number | null | undefined>,
		Failed: FormControl<number | null | undefined>,
		Skipped: FormControl<number | null | undefined>,
		Ready: FormControl<number | null | undefined>,
	}
	export function CreateDeploymentOverviewFormGroup() {
		return new FormGroup<DeploymentOverviewFormProperties>({
			Pending: new FormControl<number | null | undefined>(undefined),
			InProgress: new FormControl<number | null | undefined>(undefined),
			Succeeded: new FormControl<number | null | undefined>(undefined),
			Failed: new FormControl<number | null | undefined>(undefined),
			Skipped: new FormControl<number | null | undefined>(undefined),
			Ready: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DeploymentCreator { user = 'user', autoscaling = 'autoscaling', codeDeployRollback = 'codeDeployRollback', CodeDeploy = 'CodeDeploy', CodeDeployAutoUpdate = 'CodeDeployAutoUpdate', CloudFormation = 'CloudFormation', CloudFormationRollback = 'CloudFormationRollback' }


	/** Information about a deployment rollback. */
	export interface RollbackInfo {
		rollbackDeploymentId?: string;
		rollbackTriggeringDeploymentId?: string;
		rollbackMessage?: string;
	}

	/** Information about a deployment rollback. */
	export interface RollbackInfoFormProperties {
		rollbackDeploymentId: FormControl<string | null | undefined>,
		rollbackTriggeringDeploymentId: FormControl<string | null | undefined>,
		rollbackMessage: FormControl<string | null | undefined>,
	}
	export function CreateRollbackInfoFormGroup() {
		return new FormGroup<RollbackInfoFormProperties>({
			rollbackDeploymentId: new FormControl<string | null | undefined>(undefined),
			rollbackTriggeringDeploymentId: new FormControl<string | null | undefined>(undefined),
			rollbackMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the instances to be used in the replacement environment in a blue/green deployment. */
	export interface TargetInstances {
		tagFilters?: Array<EC2TagFilter>;
		autoScalingGroups?: Array<string>;
		ec2TagSet?: EC2TagSet;
	}

	/** Information about the instances to be used in the replacement environment in a blue/green deployment. */
	export interface TargetInstancesFormProperties {
	}
	export function CreateTargetInstancesFormGroup() {
		return new FormGroup<TargetInstancesFormProperties>({
		});

	}

	export enum FileExistsBehavior { DISALLOW = 'DISALLOW', OVERWRITE = 'OVERWRITE', RETAIN = 'RETAIN' }


	/** Information about deployments related to the specified deployment. */
	export interface RelatedDeployments {
		autoUpdateOutdatedInstancesRootDeploymentId?: string;
		autoUpdateOutdatedInstancesDeploymentIds?: Array<string>;
	}

	/** Information about deployments related to the specified deployment. */
	export interface RelatedDeploymentsFormProperties {
		autoUpdateOutdatedInstancesRootDeploymentId: FormControl<string | null | undefined>,
	}
	export function CreateRelatedDeploymentsFormGroup() {
		return new FormGroup<RelatedDeploymentsFormProperties>({
			autoUpdateOutdatedInstancesRootDeploymentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Represents the input of a <code>BatchGetDeployments</code> operation.  */
	export interface BatchGetDeploymentsInput {

		/** Required */
		deploymentIds: Array<string>;
	}

	/**  Represents the input of a <code>BatchGetDeployments</code> operation.  */
	export interface BatchGetDeploymentsInputFormProperties {
	}
	export function CreateBatchGetDeploymentsInputFormGroup() {
		return new FormGroup<BatchGetDeploymentsInputFormProperties>({
		});

	}


	/** Represents the output of a <code>BatchGetOnPremisesInstances</code> operation. */
	export interface BatchGetOnPremisesInstancesOutput {
		instanceInfos?: Array<InstanceInfo>;
	}

	/** Represents the output of a <code>BatchGetOnPremisesInstances</code> operation. */
	export interface BatchGetOnPremisesInstancesOutputFormProperties {
	}
	export function CreateBatchGetOnPremisesInstancesOutputFormGroup() {
		return new FormGroup<BatchGetOnPremisesInstancesOutputFormProperties>({
		});

	}


	/** Information about an on-premises instance. */
	export interface InstanceInfo {
		instanceName?: string;
		iamSessionArn?: string;
		iamUserArn?: string;
		instanceArn?: string;
		registerTime?: Date;
		deregisterTime?: Date;
		tags?: Array<Tag>;
	}

	/** Information about an on-premises instance. */
	export interface InstanceInfoFormProperties {
		instanceName: FormControl<string | null | undefined>,
		iamSessionArn: FormControl<string | null | undefined>,
		iamUserArn: FormControl<string | null | undefined>,
		instanceArn: FormControl<string | null | undefined>,
		registerTime: FormControl<Date | null | undefined>,
		deregisterTime: FormControl<Date | null | undefined>,
	}
	export function CreateInstanceInfoFormGroup() {
		return new FormGroup<InstanceInfoFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined),
			iamSessionArn: new FormControl<string | null | undefined>(undefined),
			iamUserArn: new FormControl<string | null | undefined>(undefined),
			instanceArn: new FormControl<string | null | undefined>(undefined),
			registerTime: new FormControl<Date | null | undefined>(undefined),
			deregisterTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>BatchGetOnPremisesInstances</code> operation. */
	export interface BatchGetOnPremisesInstancesInput {

		/** Required */
		instanceNames: Array<string>;
	}

	/** Represents the input of a <code>BatchGetOnPremisesInstances</code> operation. */
	export interface BatchGetOnPremisesInstancesInputFormProperties {
	}
	export function CreateBatchGetOnPremisesInstancesInputFormGroup() {
		return new FormGroup<BatchGetOnPremisesInstancesInputFormProperties>({
		});

	}

	export interface ContinueDeploymentInput {
		deploymentId?: string;
		deploymentWaitType?: DeploymentWaitType;
	}
	export interface ContinueDeploymentInputFormProperties {
		deploymentId: FormControl<string | null | undefined>,
		deploymentWaitType: FormControl<DeploymentWaitType | null | undefined>,
	}
	export function CreateContinueDeploymentInputFormGroup() {
		return new FormGroup<ContinueDeploymentInputFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined),
			deploymentWaitType: new FormControl<DeploymentWaitType | null | undefined>(undefined),
		});

	}

	export enum DeploymentWaitType { READY_WAIT = 'READY_WAIT', TERMINATION_WAIT = 'TERMINATION_WAIT' }

	export interface DeploymentAlreadyCompletedException {
	}
	export interface DeploymentAlreadyCompletedExceptionFormProperties {
	}
	export function CreateDeploymentAlreadyCompletedExceptionFormGroup() {
		return new FormGroup<DeploymentAlreadyCompletedExceptionFormProperties>({
		});

	}

	export interface DeploymentIsNotInReadyStateException {
	}
	export interface DeploymentIsNotInReadyStateExceptionFormProperties {
	}
	export function CreateDeploymentIsNotInReadyStateExceptionFormGroup() {
		return new FormGroup<DeploymentIsNotInReadyStateExceptionFormProperties>({
		});

	}

	export interface UnsupportedActionForDeploymentTypeException {
	}
	export interface UnsupportedActionForDeploymentTypeExceptionFormProperties {
	}
	export function CreateUnsupportedActionForDeploymentTypeExceptionFormGroup() {
		return new FormGroup<UnsupportedActionForDeploymentTypeExceptionFormProperties>({
		});

	}

	export interface InvalidDeploymentWaitTypeException {
	}
	export interface InvalidDeploymentWaitTypeExceptionFormProperties {
	}
	export function CreateInvalidDeploymentWaitTypeExceptionFormGroup() {
		return new FormGroup<InvalidDeploymentWaitTypeExceptionFormProperties>({
		});

	}

	export interface InvalidDeploymentStatusException {
	}
	export interface InvalidDeploymentStatusExceptionFormProperties {
	}
	export function CreateInvalidDeploymentStatusExceptionFormGroup() {
		return new FormGroup<InvalidDeploymentStatusExceptionFormProperties>({
		});

	}


	/** Represents the output of a <code>CreateApplication</code> operation. */
	export interface CreateApplicationOutput {
		applicationId?: string;
	}

	/** Represents the output of a <code>CreateApplication</code> operation. */
	export interface CreateApplicationOutputFormProperties {
		applicationId: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationOutputFormGroup() {
		return new FormGroup<CreateApplicationOutputFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>CreateApplication</code> operation. */
	export interface CreateApplicationInput {

		/** Required */
		applicationName: string;
		computePlatform?: ComputePlatform;
		tags?: Array<Tag>;
	}

	/** Represents the input of a <code>CreateApplication</code> operation. */
	export interface CreateApplicationInputFormProperties {

		/** Required */
		applicationName: FormControl<string | null | undefined>,
		computePlatform: FormControl<ComputePlatform | null | undefined>,
	}
	export function CreateCreateApplicationInputFormGroup() {
		return new FormGroup<CreateApplicationInputFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			computePlatform: new FormControl<ComputePlatform | null | undefined>(undefined),
		});

	}

	export interface ApplicationAlreadyExistsException {
	}
	export interface ApplicationAlreadyExistsExceptionFormProperties {
	}
	export function CreateApplicationAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ApplicationAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface ApplicationLimitExceededException {
	}
	export interface ApplicationLimitExceededExceptionFormProperties {
	}
	export function CreateApplicationLimitExceededExceptionFormGroup() {
		return new FormGroup<ApplicationLimitExceededExceptionFormProperties>({
		});

	}

	export interface InvalidTagsToAddException {
	}
	export interface InvalidTagsToAddExceptionFormProperties {
	}
	export function CreateInvalidTagsToAddExceptionFormGroup() {
		return new FormGroup<InvalidTagsToAddExceptionFormProperties>({
		});

	}


	/**  Represents the output of a <code>CreateDeployment</code> operation.  */
	export interface CreateDeploymentOutput {
		deploymentId?: string;
	}

	/**  Represents the output of a <code>CreateDeployment</code> operation.  */
	export interface CreateDeploymentOutputFormProperties {
		deploymentId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentOutputFormGroup() {
		return new FormGroup<CreateDeploymentOutputFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>CreateDeployment</code> operation. */
	export interface CreateDeploymentInput {

		/** Required */
		applicationName: string;
		deploymentGroupName?: string;
		revision?: RevisionLocation;
		deploymentConfigName?: string;
		description?: string;
		ignoreApplicationStopFailures?: boolean | null;
		targetInstances?: TargetInstances;
		autoRollbackConfiguration?: AutoRollbackConfiguration;
		updateOutdatedInstancesOnly?: boolean | null;
		fileExistsBehavior?: FileExistsBehavior;
		overrideAlarmConfiguration?: AlarmConfiguration;
	}

	/** Represents the input of a <code>CreateDeployment</code> operation. */
	export interface CreateDeploymentInputFormProperties {

		/** Required */
		applicationName: FormControl<string | null | undefined>,
		deploymentGroupName: FormControl<string | null | undefined>,
		deploymentConfigName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		ignoreApplicationStopFailures: FormControl<boolean | null | undefined>,
		updateOutdatedInstancesOnly: FormControl<boolean | null | undefined>,
		fileExistsBehavior: FormControl<FileExistsBehavior | null | undefined>,
	}
	export function CreateCreateDeploymentInputFormGroup() {
		return new FormGroup<CreateDeploymentInputFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deploymentGroupName: new FormControl<string | null | undefined>(undefined),
			deploymentConfigName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			ignoreApplicationStopFailures: new FormControl<boolean | null | undefined>(undefined),
			updateOutdatedInstancesOnly: new FormControl<boolean | null | undefined>(undefined),
			fileExistsBehavior: new FormControl<FileExistsBehavior | null | undefined>(undefined),
		});

	}

	export interface DeploymentGroupDoesNotExistException {
	}
	export interface DeploymentGroupDoesNotExistExceptionFormProperties {
	}
	export function CreateDeploymentGroupDoesNotExistExceptionFormGroup() {
		return new FormGroup<DeploymentGroupDoesNotExistExceptionFormProperties>({
		});

	}

	export interface RevisionDoesNotExistException {
	}
	export interface RevisionDoesNotExistExceptionFormProperties {
	}
	export function CreateRevisionDoesNotExistExceptionFormGroup() {
		return new FormGroup<RevisionDoesNotExistExceptionFormProperties>({
		});

	}

	export interface InvalidDeploymentConfigNameException {
	}
	export interface InvalidDeploymentConfigNameExceptionFormProperties {
	}
	export function CreateInvalidDeploymentConfigNameExceptionFormGroup() {
		return new FormGroup<InvalidDeploymentConfigNameExceptionFormProperties>({
		});

	}

	export interface DescriptionTooLongException {
	}
	export interface DescriptionTooLongExceptionFormProperties {
	}
	export function CreateDescriptionTooLongExceptionFormGroup() {
		return new FormGroup<DescriptionTooLongExceptionFormProperties>({
		});

	}

	export interface DeploymentLimitExceededException {
	}
	export interface DeploymentLimitExceededExceptionFormProperties {
	}
	export function CreateDeploymentLimitExceededExceptionFormGroup() {
		return new FormGroup<DeploymentLimitExceededExceptionFormProperties>({
		});

	}

	export interface InvalidTargetInstancesException {
	}
	export interface InvalidTargetInstancesExceptionFormProperties {
	}
	export function CreateInvalidTargetInstancesExceptionFormGroup() {
		return new FormGroup<InvalidTargetInstancesExceptionFormProperties>({
		});

	}

	export interface InvalidAlarmConfigException {
	}
	export interface InvalidAlarmConfigExceptionFormProperties {
	}
	export function CreateInvalidAlarmConfigExceptionFormGroup() {
		return new FormGroup<InvalidAlarmConfigExceptionFormProperties>({
		});

	}

	export interface AlarmsLimitExceededException {
	}
	export interface AlarmsLimitExceededExceptionFormProperties {
	}
	export function CreateAlarmsLimitExceededExceptionFormGroup() {
		return new FormGroup<AlarmsLimitExceededExceptionFormProperties>({
		});

	}

	export interface InvalidAutoRollbackConfigException {
	}
	export interface InvalidAutoRollbackConfigExceptionFormProperties {
	}
	export function CreateInvalidAutoRollbackConfigExceptionFormGroup() {
		return new FormGroup<InvalidAutoRollbackConfigExceptionFormProperties>({
		});

	}

	export interface InvalidLoadBalancerInfoException {
	}
	export interface InvalidLoadBalancerInfoExceptionFormProperties {
	}
	export function CreateInvalidLoadBalancerInfoExceptionFormGroup() {
		return new FormGroup<InvalidLoadBalancerInfoExceptionFormProperties>({
		});

	}

	export interface InvalidFileExistsBehaviorException {
	}
	export interface InvalidFileExistsBehaviorExceptionFormProperties {
	}
	export function CreateInvalidFileExistsBehaviorExceptionFormGroup() {
		return new FormGroup<InvalidFileExistsBehaviorExceptionFormProperties>({
		});

	}

	export interface InvalidRoleException {
	}
	export interface InvalidRoleExceptionFormProperties {
	}
	export function CreateInvalidRoleExceptionFormGroup() {
		return new FormGroup<InvalidRoleExceptionFormProperties>({
		});

	}

	export interface InvalidAutoScalingGroupException {
	}
	export interface InvalidAutoScalingGroupExceptionFormProperties {
	}
	export function CreateInvalidAutoScalingGroupExceptionFormGroup() {
		return new FormGroup<InvalidAutoScalingGroupExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface InvalidUpdateOutdatedInstancesOnlyValueException {
	}
	export interface InvalidUpdateOutdatedInstancesOnlyValueExceptionFormProperties {
	}
	export function CreateInvalidUpdateOutdatedInstancesOnlyValueExceptionFormGroup() {
		return new FormGroup<InvalidUpdateOutdatedInstancesOnlyValueExceptionFormProperties>({
		});

	}

	export interface InvalidIgnoreApplicationStopFailuresValueException {
	}
	export interface InvalidIgnoreApplicationStopFailuresValueExceptionFormProperties {
	}
	export function CreateInvalidIgnoreApplicationStopFailuresValueExceptionFormGroup() {
		return new FormGroup<InvalidIgnoreApplicationStopFailuresValueExceptionFormProperties>({
		});

	}

	export interface InvalidGitHubAccountTokenException {
	}
	export interface InvalidGitHubAccountTokenExceptionFormProperties {
	}
	export function CreateInvalidGitHubAccountTokenExceptionFormGroup() {
		return new FormGroup<InvalidGitHubAccountTokenExceptionFormProperties>({
		});

	}

	export interface InvalidTrafficRoutingConfigurationException {
	}
	export interface InvalidTrafficRoutingConfigurationExceptionFormProperties {
	}
	export function CreateInvalidTrafficRoutingConfigurationExceptionFormGroup() {
		return new FormGroup<InvalidTrafficRoutingConfigurationExceptionFormProperties>({
		});

	}


	/** Represents the output of a <code>CreateDeploymentConfig</code> operation. */
	export interface CreateDeploymentConfigOutput {
		deploymentConfigId?: string;
	}

	/** Represents the output of a <code>CreateDeploymentConfig</code> operation. */
	export interface CreateDeploymentConfigOutputFormProperties {
		deploymentConfigId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentConfigOutputFormGroup() {
		return new FormGroup<CreateDeploymentConfigOutputFormProperties>({
			deploymentConfigId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>CreateDeploymentConfig</code> operation. */
	export interface CreateDeploymentConfigInput {

		/** Required */
		deploymentConfigName: string;
		minimumHealthyHosts?: MinimumHealthyHosts;
		trafficRoutingConfig?: TrafficRoutingConfig;
		computePlatform?: ComputePlatform;
	}

	/** Represents the input of a <code>CreateDeploymentConfig</code> operation. */
	export interface CreateDeploymentConfigInputFormProperties {

		/** Required */
		deploymentConfigName: FormControl<string | null | undefined>,
		computePlatform: FormControl<ComputePlatform | null | undefined>,
	}
	export function CreateCreateDeploymentConfigInputFormGroup() {
		return new FormGroup<CreateDeploymentConfigInputFormProperties>({
			deploymentConfigName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			computePlatform: new FormControl<ComputePlatform | null | undefined>(undefined),
		});

	}


	/** Information about minimum healthy instance. */
	export interface MinimumHealthyHosts {
		type?: MinimumHealthyHostsType;
		value?: number | null;
	}

	/** Information about minimum healthy instance. */
	export interface MinimumHealthyHostsFormProperties {
		type: FormControl<MinimumHealthyHostsType | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateMinimumHealthyHostsFormGroup() {
		return new FormGroup<MinimumHealthyHostsFormProperties>({
			type: new FormControl<MinimumHealthyHostsType | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum MinimumHealthyHostsType { HOST_COUNT = 'HOST_COUNT', FLEET_PERCENT = 'FLEET_PERCENT' }


	/** The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an Lambda deployment, or from one Amazon ECS task set to another during an Amazon ECS deployment. */
	export interface TrafficRoutingConfig {
		type?: TrafficRoutingType;
		timeBasedCanary?: TimeBasedCanary;
		timeBasedLinear?: TimeBasedLinear;
	}

	/** The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an Lambda deployment, or from one Amazon ECS task set to another during an Amazon ECS deployment. */
	export interface TrafficRoutingConfigFormProperties {
		type: FormControl<TrafficRoutingType | null | undefined>,
	}
	export function CreateTrafficRoutingConfigFormGroup() {
		return new FormGroup<TrafficRoutingConfigFormProperties>({
			type: new FormControl<TrafficRoutingType | null | undefined>(undefined),
		});

	}

	export enum TrafficRoutingType { TimeBasedCanary = 'TimeBasedCanary', TimeBasedLinear = 'TimeBasedLinear', AllAtOnce = 'AllAtOnce' }


	/** A configuration that shifts traffic from one version of a Lambda function or Amazon ECS task set to another in two increments. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file. */
	export interface TimeBasedCanary {
		canaryPercentage?: number | null;
		canaryInterval?: number | null;
	}

	/** A configuration that shifts traffic from one version of a Lambda function or Amazon ECS task set to another in two increments. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file. */
	export interface TimeBasedCanaryFormProperties {
		canaryPercentage: FormControl<number | null | undefined>,
		canaryInterval: FormControl<number | null | undefined>,
	}
	export function CreateTimeBasedCanaryFormGroup() {
		return new FormGroup<TimeBasedCanaryFormProperties>({
			canaryPercentage: new FormControl<number | null | undefined>(undefined),
			canaryInterval: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file. */
	export interface TimeBasedLinear {
		linearPercentage?: number | null;
		linearInterval?: number | null;
	}

	/** A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file. */
	export interface TimeBasedLinearFormProperties {
		linearPercentage: FormControl<number | null | undefined>,
		linearInterval: FormControl<number | null | undefined>,
	}
	export function CreateTimeBasedLinearFormGroup() {
		return new FormGroup<TimeBasedLinearFormProperties>({
			linearPercentage: new FormControl<number | null | undefined>(undefined),
			linearInterval: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeploymentConfigNameRequiredException {
	}
	export interface DeploymentConfigNameRequiredExceptionFormProperties {
	}
	export function CreateDeploymentConfigNameRequiredExceptionFormGroup() {
		return new FormGroup<DeploymentConfigNameRequiredExceptionFormProperties>({
		});

	}

	export interface DeploymentConfigAlreadyExistsException {
	}
	export interface DeploymentConfigAlreadyExistsExceptionFormProperties {
	}
	export function CreateDeploymentConfigAlreadyExistsExceptionFormGroup() {
		return new FormGroup<DeploymentConfigAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface InvalidMinimumHealthyHostValueException {
	}
	export interface InvalidMinimumHealthyHostValueExceptionFormProperties {
	}
	export function CreateInvalidMinimumHealthyHostValueExceptionFormGroup() {
		return new FormGroup<InvalidMinimumHealthyHostValueExceptionFormProperties>({
		});

	}

	export interface DeploymentConfigLimitExceededException {
	}
	export interface DeploymentConfigLimitExceededExceptionFormProperties {
	}
	export function CreateDeploymentConfigLimitExceededExceptionFormGroup() {
		return new FormGroup<DeploymentConfigLimitExceededExceptionFormProperties>({
		});

	}


	/** Represents the output of a <code>CreateDeploymentGroup</code> operation. */
	export interface CreateDeploymentGroupOutput {
		deploymentGroupId?: string;
	}

	/** Represents the output of a <code>CreateDeploymentGroup</code> operation. */
	export interface CreateDeploymentGroupOutputFormProperties {
		deploymentGroupId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentGroupOutputFormGroup() {
		return new FormGroup<CreateDeploymentGroupOutputFormProperties>({
			deploymentGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>CreateDeploymentGroup</code> operation. */
	export interface CreateDeploymentGroupInput {

		/** Required */
		applicationName: string;

		/** Required */
		deploymentGroupName: string;
		deploymentConfigName?: string;
		ec2TagFilters?: Array<EC2TagFilter>;
		onPremisesInstanceTagFilters?: Array<TagFilter>;
		autoScalingGroups?: Array<string>;

		/** Required */
		serviceRoleArn: string;
		triggerConfigurations?: Array<TriggerConfig>;
		alarmConfiguration?: AlarmConfiguration;
		autoRollbackConfiguration?: AutoRollbackConfiguration;
		outdatedInstancesStrategy?: OutdatedInstancesStrategy;
		deploymentStyle?: DeploymentStyle;
		blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
		loadBalancerInfo?: LoadBalancerInfo;
		ec2TagSet?: EC2TagSet;
		ecsServices?: Array<ECSService>;
		onPremisesTagSet?: OnPremisesTagSet;
		tags?: Array<Tag>;
	}

	/** Represents the input of a <code>CreateDeploymentGroup</code> operation. */
	export interface CreateDeploymentGroupInputFormProperties {

		/** Required */
		applicationName: FormControl<string | null | undefined>,

		/** Required */
		deploymentGroupName: FormControl<string | null | undefined>,
		deploymentConfigName: FormControl<string | null | undefined>,

		/** Required */
		serviceRoleArn: FormControl<string | null | undefined>,
		outdatedInstancesStrategy: FormControl<OutdatedInstancesStrategy | null | undefined>,
	}
	export function CreateCreateDeploymentGroupInputFormGroup() {
		return new FormGroup<CreateDeploymentGroupInputFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deploymentGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deploymentConfigName: new FormControl<string | null | undefined>(undefined),
			serviceRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			outdatedInstancesStrategy: new FormControl<OutdatedInstancesStrategy | null | undefined>(undefined),
		});

	}

	export interface DeploymentGroupAlreadyExistsException {
	}
	export interface DeploymentGroupAlreadyExistsExceptionFormProperties {
	}
	export function CreateDeploymentGroupAlreadyExistsExceptionFormGroup() {
		return new FormGroup<DeploymentGroupAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface InvalidEC2TagException {
	}
	export interface InvalidEC2TagExceptionFormProperties {
	}
	export function CreateInvalidEC2TagExceptionFormGroup() {
		return new FormGroup<InvalidEC2TagExceptionFormProperties>({
		});

	}

	export interface RoleRequiredException {
	}
	export interface RoleRequiredExceptionFormProperties {
	}
	export function CreateRoleRequiredExceptionFormGroup() {
		return new FormGroup<RoleRequiredExceptionFormProperties>({
		});

	}

	export interface DeploymentGroupLimitExceededException {
	}
	export interface DeploymentGroupLimitExceededExceptionFormProperties {
	}
	export function CreateDeploymentGroupLimitExceededExceptionFormGroup() {
		return new FormGroup<DeploymentGroupLimitExceededExceptionFormProperties>({
		});

	}

	export interface LifecycleHookLimitExceededException {
	}
	export interface LifecycleHookLimitExceededExceptionFormProperties {
	}
	export function CreateLifecycleHookLimitExceededExceptionFormGroup() {
		return new FormGroup<LifecycleHookLimitExceededExceptionFormProperties>({
		});

	}

	export interface InvalidTriggerConfigException {
	}
	export interface InvalidTriggerConfigExceptionFormProperties {
	}
	export function CreateInvalidTriggerConfigExceptionFormGroup() {
		return new FormGroup<InvalidTriggerConfigExceptionFormProperties>({
		});

	}

	export interface TriggerTargetsLimitExceededException {
	}
	export interface TriggerTargetsLimitExceededExceptionFormProperties {
	}
	export function CreateTriggerTargetsLimitExceededExceptionFormGroup() {
		return new FormGroup<TriggerTargetsLimitExceededExceptionFormProperties>({
		});

	}

	export interface InvalidDeploymentStyleException {
	}
	export interface InvalidDeploymentStyleExceptionFormProperties {
	}
	export function CreateInvalidDeploymentStyleExceptionFormGroup() {
		return new FormGroup<InvalidDeploymentStyleExceptionFormProperties>({
		});

	}

	export interface InvalidBlueGreenDeploymentConfigurationException {
	}
	export interface InvalidBlueGreenDeploymentConfigurationExceptionFormProperties {
	}
	export function CreateInvalidBlueGreenDeploymentConfigurationExceptionFormGroup() {
		return new FormGroup<InvalidBlueGreenDeploymentConfigurationExceptionFormProperties>({
		});

	}

	export interface InvalidEC2TagCombinationException {
	}
	export interface InvalidEC2TagCombinationExceptionFormProperties {
	}
	export function CreateInvalidEC2TagCombinationExceptionFormGroup() {
		return new FormGroup<InvalidEC2TagCombinationExceptionFormProperties>({
		});

	}

	export interface InvalidOnPremisesTagCombinationException {
	}
	export interface InvalidOnPremisesTagCombinationExceptionFormProperties {
	}
	export function CreateInvalidOnPremisesTagCombinationExceptionFormGroup() {
		return new FormGroup<InvalidOnPremisesTagCombinationExceptionFormProperties>({
		});

	}

	export interface TagSetListLimitExceededException {
	}
	export interface TagSetListLimitExceededExceptionFormProperties {
	}
	export function CreateTagSetListLimitExceededExceptionFormGroup() {
		return new FormGroup<TagSetListLimitExceededExceptionFormProperties>({
		});

	}

	export interface InvalidInputException {
	}
	export interface InvalidInputExceptionFormProperties {
	}
	export function CreateInvalidInputExceptionFormGroup() {
		return new FormGroup<InvalidInputExceptionFormProperties>({
		});

	}

	export interface InvalidECSServiceException {
	}
	export interface InvalidECSServiceExceptionFormProperties {
	}
	export function CreateInvalidECSServiceExceptionFormGroup() {
		return new FormGroup<InvalidECSServiceExceptionFormProperties>({
		});

	}

	export interface InvalidTargetGroupPairException {
	}
	export interface InvalidTargetGroupPairExceptionFormProperties {
	}
	export function CreateInvalidTargetGroupPairExceptionFormGroup() {
		return new FormGroup<InvalidTargetGroupPairExceptionFormProperties>({
		});

	}

	export interface ECSServiceMappingLimitExceededException {
	}
	export interface ECSServiceMappingLimitExceededExceptionFormProperties {
	}
	export function CreateECSServiceMappingLimitExceededExceptionFormGroup() {
		return new FormGroup<ECSServiceMappingLimitExceededExceptionFormProperties>({
		});

	}


	/** Represents the input of a <code>DeleteApplication</code> operation. */
	export interface DeleteApplicationInput {

		/** Required */
		applicationName: string;
	}

	/** Represents the input of a <code>DeleteApplication</code> operation. */
	export interface DeleteApplicationInputFormProperties {

		/** Required */
		applicationName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteApplicationInputFormGroup() {
		return new FormGroup<DeleteApplicationInputFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input of a <code>DeleteDeploymentConfig</code> operation. */
	export interface DeleteDeploymentConfigInput {

		/** Required */
		deploymentConfigName: string;
	}

	/** Represents the input of a <code>DeleteDeploymentConfig</code> operation. */
	export interface DeleteDeploymentConfigInputFormProperties {

		/** Required */
		deploymentConfigName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDeploymentConfigInputFormGroup() {
		return new FormGroup<DeleteDeploymentConfigInputFormProperties>({
			deploymentConfigName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeploymentConfigInUseException {
	}
	export interface DeploymentConfigInUseExceptionFormProperties {
	}
	export function CreateDeploymentConfigInUseExceptionFormGroup() {
		return new FormGroup<DeploymentConfigInUseExceptionFormProperties>({
		});

	}

	export interface InvalidOperationException {
	}
	export interface InvalidOperationExceptionFormProperties {
	}
	export function CreateInvalidOperationExceptionFormGroup() {
		return new FormGroup<InvalidOperationExceptionFormProperties>({
		});

	}


	/** Represents the output of a <code>DeleteDeploymentGroup</code> operation. */
	export interface DeleteDeploymentGroupOutput {
		hooksNotCleanedUp?: Array<AutoScalingGroup>;
	}

	/** Represents the output of a <code>DeleteDeploymentGroup</code> operation. */
	export interface DeleteDeploymentGroupOutputFormProperties {
	}
	export function CreateDeleteDeploymentGroupOutputFormGroup() {
		return new FormGroup<DeleteDeploymentGroupOutputFormProperties>({
		});

	}


	/** Represents the input of a <code>DeleteDeploymentGroup</code> operation. */
	export interface DeleteDeploymentGroupInput {

		/** Required */
		applicationName: string;

		/** Required */
		deploymentGroupName: string;
	}

	/** Represents the input of a <code>DeleteDeploymentGroup</code> operation. */
	export interface DeleteDeploymentGroupInputFormProperties {

		/** Required */
		applicationName: FormControl<string | null | undefined>,

		/** Required */
		deploymentGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDeploymentGroupInputFormGroup() {
		return new FormGroup<DeleteDeploymentGroupInputFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deploymentGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a <code>DeleteGitHubAccountToken</code> operation. */
	export interface DeleteGitHubAccountTokenOutput {
		tokenName?: string;
	}

	/** Represents the output of a <code>DeleteGitHubAccountToken</code> operation. */
	export interface DeleteGitHubAccountTokenOutputFormProperties {
		tokenName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGitHubAccountTokenOutputFormGroup() {
		return new FormGroup<DeleteGitHubAccountTokenOutputFormProperties>({
			tokenName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>DeleteGitHubAccount</code> operation. */
	export interface DeleteGitHubAccountTokenInput {
		tokenName?: string;
	}

	/** Represents the input of a <code>DeleteGitHubAccount</code> operation. */
	export interface DeleteGitHubAccountTokenInputFormProperties {
		tokenName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGitHubAccountTokenInputFormGroup() {
		return new FormGroup<DeleteGitHubAccountTokenInputFormProperties>({
			tokenName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GitHubAccountTokenNameRequiredException {
	}
	export interface GitHubAccountTokenNameRequiredExceptionFormProperties {
	}
	export function CreateGitHubAccountTokenNameRequiredExceptionFormGroup() {
		return new FormGroup<GitHubAccountTokenNameRequiredExceptionFormProperties>({
		});

	}

	export interface GitHubAccountTokenDoesNotExistException {
	}
	export interface GitHubAccountTokenDoesNotExistExceptionFormProperties {
	}
	export function CreateGitHubAccountTokenDoesNotExistExceptionFormGroup() {
		return new FormGroup<GitHubAccountTokenDoesNotExistExceptionFormProperties>({
		});

	}

	export interface InvalidGitHubAccountTokenNameException {
	}
	export interface InvalidGitHubAccountTokenNameExceptionFormProperties {
	}
	export function CreateInvalidGitHubAccountTokenNameExceptionFormGroup() {
		return new FormGroup<InvalidGitHubAccountTokenNameExceptionFormProperties>({
		});

	}

	export interface ResourceValidationException {
	}
	export interface ResourceValidationExceptionFormProperties {
	}
	export function CreateResourceValidationExceptionFormGroup() {
		return new FormGroup<ResourceValidationExceptionFormProperties>({
		});

	}

	export interface OperationNotSupportedException {
	}
	export interface OperationNotSupportedExceptionFormProperties {
	}
	export function CreateOperationNotSupportedExceptionFormGroup() {
		return new FormGroup<OperationNotSupportedExceptionFormProperties>({
		});

	}

	export interface DeleteResourcesByExternalIdOutput {
	}
	export interface DeleteResourcesByExternalIdOutputFormProperties {
	}
	export function CreateDeleteResourcesByExternalIdOutputFormGroup() {
		return new FormGroup<DeleteResourcesByExternalIdOutputFormProperties>({
		});

	}

	export interface DeleteResourcesByExternalIdInput {
		externalId?: string;
	}
	export interface DeleteResourcesByExternalIdInputFormProperties {
		externalId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcesByExternalIdInputFormGroup() {
		return new FormGroup<DeleteResourcesByExternalIdInputFormProperties>({
			externalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>DeregisterOnPremisesInstance</code> operation. */
	export interface DeregisterOnPremisesInstanceInput {

		/** Required */
		instanceName: string;
	}

	/** Represents the input of a <code>DeregisterOnPremisesInstance</code> operation. */
	export interface DeregisterOnPremisesInstanceInputFormProperties {

		/** Required */
		instanceName: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterOnPremisesInstanceInputFormGroup() {
		return new FormGroup<DeregisterOnPremisesInstanceInputFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a <code>GetApplication</code> operation. */
	export interface GetApplicationOutput {
		application?: ApplicationInfo;
	}

	/** Represents the output of a <code>GetApplication</code> operation. */
	export interface GetApplicationOutputFormProperties {
	}
	export function CreateGetApplicationOutputFormGroup() {
		return new FormGroup<GetApplicationOutputFormProperties>({
		});

	}


	/** Represents the input of a <code>GetApplication</code> operation. */
	export interface GetApplicationInput {

		/** Required */
		applicationName: string;
	}

	/** Represents the input of a <code>GetApplication</code> operation. */
	export interface GetApplicationInputFormProperties {

		/** Required */
		applicationName: FormControl<string | null | undefined>,
	}
	export function CreateGetApplicationInputFormGroup() {
		return new FormGroup<GetApplicationInputFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a <code>GetApplicationRevision</code> operation. */
	export interface GetApplicationRevisionOutput {
		applicationName?: string;
		revision?: RevisionLocation;
		revisionInfo?: GenericRevisionInfo;
	}

	/** Represents the output of a <code>GetApplicationRevision</code> operation. */
	export interface GetApplicationRevisionOutputFormProperties {
		applicationName: FormControl<string | null | undefined>,
	}
	export function CreateGetApplicationRevisionOutputFormGroup() {
		return new FormGroup<GetApplicationRevisionOutputFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>GetApplicationRevision</code> operation. */
	export interface GetApplicationRevisionInput {

		/** Required */
		applicationName: string;

		/** Required */
		revision: RevisionLocation;
	}

	/** Represents the input of a <code>GetApplicationRevision</code> operation. */
	export interface GetApplicationRevisionInputFormProperties {

		/** Required */
		applicationName: FormControl<string | null | undefined>,
	}
	export function CreateGetApplicationRevisionInputFormGroup() {
		return new FormGroup<GetApplicationRevisionInputFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a <code>GetDeployment</code> operation. */
	export interface GetDeploymentOutput {
		deploymentInfo?: DeploymentInfo;
	}

	/** Represents the output of a <code>GetDeployment</code> operation. */
	export interface GetDeploymentOutputFormProperties {
	}
	export function CreateGetDeploymentOutputFormGroup() {
		return new FormGroup<GetDeploymentOutputFormProperties>({
		});

	}


	/** Represents the input of a <code>GetDeployment</code> operation. */
	export interface GetDeploymentInput {

		/** Required */
		deploymentId: string;
	}

	/** Represents the input of a <code>GetDeployment</code> operation. */
	export interface GetDeploymentInputFormProperties {

		/** Required */
		deploymentId: FormControl<string | null | undefined>,
	}
	export function CreateGetDeploymentInputFormGroup() {
		return new FormGroup<GetDeploymentInputFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a <code>GetDeploymentConfig</code> operation. */
	export interface GetDeploymentConfigOutput {
		deploymentConfigInfo?: DeploymentConfigInfo;
	}

	/** Represents the output of a <code>GetDeploymentConfig</code> operation. */
	export interface GetDeploymentConfigOutputFormProperties {
	}
	export function CreateGetDeploymentConfigOutputFormGroup() {
		return new FormGroup<GetDeploymentConfigOutputFormProperties>({
		});

	}


	/** Information about a deployment configuration. */
	export interface DeploymentConfigInfo {
		deploymentConfigId?: string;
		deploymentConfigName?: string;
		minimumHealthyHosts?: MinimumHealthyHosts;
		createTime?: Date;
		computePlatform?: ComputePlatform;
		trafficRoutingConfig?: TrafficRoutingConfig;
	}

	/** Information about a deployment configuration. */
	export interface DeploymentConfigInfoFormProperties {
		deploymentConfigId: FormControl<string | null | undefined>,
		deploymentConfigName: FormControl<string | null | undefined>,
		createTime: FormControl<Date | null | undefined>,
		computePlatform: FormControl<ComputePlatform | null | undefined>,
	}
	export function CreateDeploymentConfigInfoFormGroup() {
		return new FormGroup<DeploymentConfigInfoFormProperties>({
			deploymentConfigId: new FormControl<string | null | undefined>(undefined),
			deploymentConfigName: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
			computePlatform: new FormControl<ComputePlatform | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>GetDeploymentConfig</code> operation. */
	export interface GetDeploymentConfigInput {

		/** Required */
		deploymentConfigName: string;
	}

	/** Represents the input of a <code>GetDeploymentConfig</code> operation. */
	export interface GetDeploymentConfigInputFormProperties {

		/** Required */
		deploymentConfigName: FormControl<string | null | undefined>,
	}
	export function CreateGetDeploymentConfigInputFormGroup() {
		return new FormGroup<GetDeploymentConfigInputFormProperties>({
			deploymentConfigName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a <code>GetDeploymentGroup</code> operation. */
	export interface GetDeploymentGroupOutput {
		deploymentGroupInfo?: DeploymentGroupInfo;
	}

	/** Represents the output of a <code>GetDeploymentGroup</code> operation. */
	export interface GetDeploymentGroupOutputFormProperties {
	}
	export function CreateGetDeploymentGroupOutputFormGroup() {
		return new FormGroup<GetDeploymentGroupOutputFormProperties>({
		});

	}


	/** Represents the input of a <code>GetDeploymentGroup</code> operation. */
	export interface GetDeploymentGroupInput {

		/** Required */
		applicationName: string;

		/** Required */
		deploymentGroupName: string;
	}

	/** Represents the input of a <code>GetDeploymentGroup</code> operation. */
	export interface GetDeploymentGroupInputFormProperties {

		/** Required */
		applicationName: FormControl<string | null | undefined>,

		/** Required */
		deploymentGroupName: FormControl<string | null | undefined>,
	}
	export function CreateGetDeploymentGroupInputFormGroup() {
		return new FormGroup<GetDeploymentGroupInputFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deploymentGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Represents the output of a <code>GetDeploymentInstance</code> operation.  */
	export interface GetDeploymentInstanceOutput {
		instanceSummary?: InstanceSummary;
	}

	/**  Represents the output of a <code>GetDeploymentInstance</code> operation.  */
	export interface GetDeploymentInstanceOutputFormProperties {
	}
	export function CreateGetDeploymentInstanceOutputFormGroup() {
		return new FormGroup<GetDeploymentInstanceOutputFormProperties>({
		});

	}


	/**  Represents the input of a <code>GetDeploymentInstance</code> operation.  */
	export interface GetDeploymentInstanceInput {

		/** Required */
		deploymentId: string;

		/** Required */
		instanceId: string;
	}

	/**  Represents the input of a <code>GetDeploymentInstance</code> operation.  */
	export interface GetDeploymentInstanceInputFormProperties {

		/** Required */
		deploymentId: FormControl<string | null | undefined>,

		/** Required */
		instanceId: FormControl<string | null | undefined>,
	}
	export function CreateGetDeploymentInstanceInputFormGroup() {
		return new FormGroup<GetDeploymentInstanceInputFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDeploymentTargetOutput {
		deploymentTarget?: DeploymentTarget;
	}
	export interface GetDeploymentTargetOutputFormProperties {
	}
	export function CreateGetDeploymentTargetOutputFormGroup() {
		return new FormGroup<GetDeploymentTargetOutputFormProperties>({
		});

	}

	export interface GetDeploymentTargetInput {
		deploymentId?: string;
		targetId?: string;
	}
	export interface GetDeploymentTargetInputFormProperties {
		deploymentId: FormControl<string | null | undefined>,
		targetId: FormControl<string | null | undefined>,
	}
	export function CreateGetDeploymentTargetInputFormGroup() {
		return new FormGroup<GetDeploymentTargetInputFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined),
			targetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Represents the output of a <code>GetOnPremisesInstance</code> operation.  */
	export interface GetOnPremisesInstanceOutput {
		instanceInfo?: InstanceInfo;
	}

	/**  Represents the output of a <code>GetOnPremisesInstance</code> operation.  */
	export interface GetOnPremisesInstanceOutputFormProperties {
	}
	export function CreateGetOnPremisesInstanceOutputFormGroup() {
		return new FormGroup<GetOnPremisesInstanceOutputFormProperties>({
		});

	}


	/**  Represents the input of a <code>GetOnPremisesInstance</code> operation.  */
	export interface GetOnPremisesInstanceInput {

		/** Required */
		instanceName: string;
	}

	/**  Represents the input of a <code>GetOnPremisesInstance</code> operation.  */
	export interface GetOnPremisesInstanceInputFormProperties {

		/** Required */
		instanceName: FormControl<string | null | undefined>,
	}
	export function CreateGetOnPremisesInstanceInputFormGroup() {
		return new FormGroup<GetOnPremisesInstanceInputFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a <code>ListApplicationRevisions</code> operation. */
	export interface ListApplicationRevisionsOutput {
		revisions?: Array<RevisionLocation>;
		nextToken?: string;
	}

	/** Represents the output of a <code>ListApplicationRevisions</code> operation. */
	export interface ListApplicationRevisionsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationRevisionsOutputFormGroup() {
		return new FormGroup<ListApplicationRevisionsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Represents the input of a <code>ListApplicationRevisions</code> operation.  */
	export interface ListApplicationRevisionsInput {

		/** Required */
		applicationName: string;
		sortBy?: ApplicationRevisionSortBy;
		sortOrder?: SortOrder;
		s3Bucket?: string;
		s3KeyPrefix?: string;
		deployed?: ListStateFilterAction;
		nextToken?: string;
	}

	/**  Represents the input of a <code>ListApplicationRevisions</code> operation.  */
	export interface ListApplicationRevisionsInputFormProperties {

		/** Required */
		applicationName: FormControl<string | null | undefined>,
		sortBy: FormControl<ApplicationRevisionSortBy | null | undefined>,
		sortOrder: FormControl<SortOrder | null | undefined>,
		s3Bucket: FormControl<string | null | undefined>,
		s3KeyPrefix: FormControl<string | null | undefined>,
		deployed: FormControl<ListStateFilterAction | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationRevisionsInputFormGroup() {
		return new FormGroup<ListApplicationRevisionsInputFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sortBy: new FormControl<ApplicationRevisionSortBy | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrder | null | undefined>(undefined),
			s3Bucket: new FormControl<string | null | undefined>(undefined),
			s3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			deployed: new FormControl<ListStateFilterAction | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApplicationRevisionSortBy { registerTime = 'registerTime', firstUsedTime = 'firstUsedTime', lastUsedTime = 'lastUsedTime' }

	export enum SortOrder { ascending = 'ascending', descending = 'descending' }

	export enum ListStateFilterAction { include = 'include', exclude = 'exclude', ignore = 'ignore' }

	export interface InvalidSortByException {
	}
	export interface InvalidSortByExceptionFormProperties {
	}
	export function CreateInvalidSortByExceptionFormGroup() {
		return new FormGroup<InvalidSortByExceptionFormProperties>({
		});

	}

	export interface InvalidSortOrderException {
	}
	export interface InvalidSortOrderExceptionFormProperties {
	}
	export function CreateInvalidSortOrderExceptionFormGroup() {
		return new FormGroup<InvalidSortOrderExceptionFormProperties>({
		});

	}

	export interface InvalidBucketNameFilterException {
	}
	export interface InvalidBucketNameFilterExceptionFormProperties {
	}
	export function CreateInvalidBucketNameFilterExceptionFormGroup() {
		return new FormGroup<InvalidBucketNameFilterExceptionFormProperties>({
		});

	}

	export interface InvalidKeyPrefixFilterException {
	}
	export interface InvalidKeyPrefixFilterExceptionFormProperties {
	}
	export function CreateInvalidKeyPrefixFilterExceptionFormGroup() {
		return new FormGroup<InvalidKeyPrefixFilterExceptionFormProperties>({
		});

	}

	export interface BucketNameFilterRequiredException {
	}
	export interface BucketNameFilterRequiredExceptionFormProperties {
	}
	export function CreateBucketNameFilterRequiredExceptionFormGroup() {
		return new FormGroup<BucketNameFilterRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidDeployedStateFilterException {
	}
	export interface InvalidDeployedStateFilterExceptionFormProperties {
	}
	export function CreateInvalidDeployedStateFilterExceptionFormGroup() {
		return new FormGroup<InvalidDeployedStateFilterExceptionFormProperties>({
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


	/** Represents the output of a ListApplications operation. */
	export interface ListApplicationsOutput {
		applications?: Array<string>;
		nextToken?: string;
	}

	/** Represents the output of a ListApplications operation. */
	export interface ListApplicationsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsOutputFormGroup() {
		return new FormGroup<ListApplicationsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>ListApplications</code> operation. */
	export interface ListApplicationsInput {
		nextToken?: string;
	}

	/** Represents the input of a <code>ListApplications</code> operation. */
	export interface ListApplicationsInputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsInputFormGroup() {
		return new FormGroup<ListApplicationsInputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>ListDeploymentConfigs</code> operation. */
	export interface ListDeploymentConfigsOutput {
		deploymentConfigsList?: Array<string>;
		nextToken?: string;
	}

	/** Represents the output of a <code>ListDeploymentConfigs</code> operation. */
	export interface ListDeploymentConfigsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeploymentConfigsOutputFormGroup() {
		return new FormGroup<ListDeploymentConfigsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>ListDeploymentConfigs</code> operation. */
	export interface ListDeploymentConfigsInput {
		nextToken?: string;
	}

	/** Represents the input of a <code>ListDeploymentConfigs</code> operation. */
	export interface ListDeploymentConfigsInputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeploymentConfigsInputFormGroup() {
		return new FormGroup<ListDeploymentConfigsInputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>ListDeploymentGroups</code> operation. */
	export interface ListDeploymentGroupsOutput {
		applicationName?: string;
		deploymentGroups?: Array<string>;
		nextToken?: string;
	}

	/** Represents the output of a <code>ListDeploymentGroups</code> operation. */
	export interface ListDeploymentGroupsOutputFormProperties {
		applicationName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeploymentGroupsOutputFormGroup() {
		return new FormGroup<ListDeploymentGroupsOutputFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>ListDeploymentGroups</code> operation. */
	export interface ListDeploymentGroupsInput {

		/** Required */
		applicationName: string;
		nextToken?: string;
	}

	/** Represents the input of a <code>ListDeploymentGroups</code> operation. */
	export interface ListDeploymentGroupsInputFormProperties {

		/** Required */
		applicationName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeploymentGroupsInputFormGroup() {
		return new FormGroup<ListDeploymentGroupsInputFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>ListDeploymentInstances</code> operation. */
	export interface ListDeploymentInstancesOutput {
		instancesList?: Array<string>;
		nextToken?: string;
	}

	/** Represents the output of a <code>ListDeploymentInstances</code> operation. */
	export interface ListDeploymentInstancesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeploymentInstancesOutputFormGroup() {
		return new FormGroup<ListDeploymentInstancesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Represents the input of a <code>ListDeploymentInstances</code> operation.  */
	export interface ListDeploymentInstancesInput {

		/** Required */
		deploymentId: string;
		nextToken?: string;
		instanceStatusFilter?: Array<InstanceStatus>;
		instanceTypeFilter?: Array<InstanceType>;
	}

	/**  Represents the input of a <code>ListDeploymentInstances</code> operation.  */
	export interface ListDeploymentInstancesInputFormProperties {

		/** Required */
		deploymentId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeploymentInstancesInputFormGroup() {
		return new FormGroup<ListDeploymentInstancesInputFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidInstanceStatusException {
	}
	export interface InvalidInstanceStatusExceptionFormProperties {
	}
	export function CreateInvalidInstanceStatusExceptionFormGroup() {
		return new FormGroup<InvalidInstanceStatusExceptionFormProperties>({
		});

	}

	export interface InvalidInstanceTypeException {
	}
	export interface InvalidInstanceTypeExceptionFormProperties {
	}
	export function CreateInvalidInstanceTypeExceptionFormGroup() {
		return new FormGroup<InvalidInstanceTypeExceptionFormProperties>({
		});

	}

	export interface InvalidDeploymentInstanceTypeException {
	}
	export interface InvalidDeploymentInstanceTypeExceptionFormProperties {
	}
	export function CreateInvalidDeploymentInstanceTypeExceptionFormGroup() {
		return new FormGroup<InvalidDeploymentInstanceTypeExceptionFormProperties>({
		});

	}

	export interface InvalidTargetFilterNameException {
	}
	export interface InvalidTargetFilterNameExceptionFormProperties {
	}
	export function CreateInvalidTargetFilterNameExceptionFormGroup() {
		return new FormGroup<InvalidTargetFilterNameExceptionFormProperties>({
		});

	}

	export interface ListDeploymentTargetsOutput {
		targetIds?: Array<string>;
		nextToken?: string;
	}
	export interface ListDeploymentTargetsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeploymentTargetsOutputFormGroup() {
		return new FormGroup<ListDeploymentTargetsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDeploymentTargetsInput {
		deploymentId?: string;
		nextToken?: string;
		targetFilters?: TargetFilters;
	}
	export interface ListDeploymentTargetsInputFormProperties {
		deploymentId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeploymentTargetsInputFormGroup() {
		return new FormGroup<ListDeploymentTargetsInputFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TargetFilters {
	}
	export interface TargetFiltersFormProperties {
	}
	export function CreateTargetFiltersFormGroup() {
		return new FormGroup<TargetFiltersFormProperties>({
		});

	}


	/** Represents the output of a <code>ListDeployments</code> operation. */
	export interface ListDeploymentsOutput {
		deployments?: Array<string>;
		nextToken?: string;
	}

	/** Represents the output of a <code>ListDeployments</code> operation. */
	export interface ListDeploymentsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeploymentsOutputFormGroup() {
		return new FormGroup<ListDeploymentsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>ListDeployments</code> operation. */
	export interface ListDeploymentsInput {
		applicationName?: string;
		deploymentGroupName?: string;
		externalId?: string;
		includeOnlyStatuses?: Array<DeploymentStatus>;
		createTimeRange?: TimeRange;
		nextToken?: string;
	}

	/** Represents the input of a <code>ListDeployments</code> operation. */
	export interface ListDeploymentsInputFormProperties {
		applicationName: FormControl<string | null | undefined>,
		deploymentGroupName: FormControl<string | null | undefined>,
		externalId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeploymentsInputFormGroup() {
		return new FormGroup<ListDeploymentsInputFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined),
			deploymentGroupName: new FormControl<string | null | undefined>(undefined),
			externalId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a time range. */
	export interface TimeRange {
		start?: Date;
		end?: Date;
	}

	/** Information about a time range. */
	export interface TimeRangeFormProperties {
		start: FormControl<Date | null | undefined>,
		end: FormControl<Date | null | undefined>,
	}
	export function CreateTimeRangeFormGroup() {
		return new FormGroup<TimeRangeFormProperties>({
			start: new FormControl<Date | null | undefined>(undefined),
			end: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface InvalidTimeRangeException {
	}
	export interface InvalidTimeRangeExceptionFormProperties {
	}
	export function CreateInvalidTimeRangeExceptionFormGroup() {
		return new FormGroup<InvalidTimeRangeExceptionFormProperties>({
		});

	}

	export interface InvalidExternalIdException {
	}
	export interface InvalidExternalIdExceptionFormProperties {
	}
	export function CreateInvalidExternalIdExceptionFormGroup() {
		return new FormGroup<InvalidExternalIdExceptionFormProperties>({
		});

	}


	/** Represents the output of a <code>ListGitHubAccountTokenNames</code> operation. */
	export interface ListGitHubAccountTokenNamesOutput {
		tokenNameList?: Array<string>;
		nextToken?: string;
	}

	/** Represents the output of a <code>ListGitHubAccountTokenNames</code> operation. */
	export interface ListGitHubAccountTokenNamesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGitHubAccountTokenNamesOutputFormGroup() {
		return new FormGroup<ListGitHubAccountTokenNamesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>ListGitHubAccountTokenNames</code> operation. */
	export interface ListGitHubAccountTokenNamesInput {
		nextToken?: string;
	}

	/** Represents the input of a <code>ListGitHubAccountTokenNames</code> operation. */
	export interface ListGitHubAccountTokenNamesInputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGitHubAccountTokenNamesInputFormGroup() {
		return new FormGroup<ListGitHubAccountTokenNamesInputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of the list on-premises instances operation. */
	export interface ListOnPremisesInstancesOutput {
		instanceNames?: Array<string>;
		nextToken?: string;
	}

	/** Represents the output of the list on-premises instances operation. */
	export interface ListOnPremisesInstancesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOnPremisesInstancesOutputFormGroup() {
		return new FormGroup<ListOnPremisesInstancesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>ListOnPremisesInstances</code> operation. */
	export interface ListOnPremisesInstancesInput {
		registrationStatus?: RegistrationStatus;
		tagFilters?: Array<TagFilter>;
		nextToken?: string;
	}

	/** Represents the input of a <code>ListOnPremisesInstances</code> operation. */
	export interface ListOnPremisesInstancesInputFormProperties {
		registrationStatus: FormControl<RegistrationStatus | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOnPremisesInstancesInputFormGroup() {
		return new FormGroup<ListOnPremisesInstancesInputFormProperties>({
			registrationStatus: new FormControl<RegistrationStatus | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RegistrationStatus { Registered = 'Registered', Deregistered = 'Deregistered' }

	export interface InvalidRegistrationStatusException {
	}
	export interface InvalidRegistrationStatusExceptionFormProperties {
	}
	export function CreateInvalidRegistrationStatusExceptionFormGroup() {
		return new FormGroup<InvalidRegistrationStatusExceptionFormProperties>({
		});

	}

	export interface InvalidTagFilterException {
	}
	export interface InvalidTagFilterExceptionFormProperties {
	}
	export function CreateInvalidTagFilterExceptionFormGroup() {
		return new FormGroup<InvalidTagFilterExceptionFormProperties>({
		});

	}

	export interface ListTagsForResourceOutput {
		Tags?: Array<Tag>;
		NextToken?: string;
	}
	export interface ListTagsForResourceOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceInput {

		/** Required */
		ResourceArn: string;
		NextToken?: string;
	}
	export interface ListTagsForResourceInputFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ArnNotSupportedException {
	}
	export interface ArnNotSupportedExceptionFormProperties {
	}
	export function CreateArnNotSupportedExceptionFormGroup() {
		return new FormGroup<ArnNotSupportedExceptionFormProperties>({
		});

	}

	export interface InvalidArnException {
	}
	export interface InvalidArnExceptionFormProperties {
	}
	export function CreateInvalidArnExceptionFormGroup() {
		return new FormGroup<InvalidArnExceptionFormProperties>({
		});

	}

	export interface ResourceArnRequiredException {
	}
	export interface ResourceArnRequiredExceptionFormProperties {
	}
	export function CreateResourceArnRequiredExceptionFormGroup() {
		return new FormGroup<ResourceArnRequiredExceptionFormProperties>({
		});

	}

	export interface PutLifecycleEventHookExecutionStatusOutput {
		lifecycleEventHookExecutionId?: string;
	}
	export interface PutLifecycleEventHookExecutionStatusOutputFormProperties {
		lifecycleEventHookExecutionId: FormControl<string | null | undefined>,
	}
	export function CreatePutLifecycleEventHookExecutionStatusOutputFormGroup() {
		return new FormGroup<PutLifecycleEventHookExecutionStatusOutputFormProperties>({
			lifecycleEventHookExecutionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutLifecycleEventHookExecutionStatusInput {
		deploymentId?: string;
		lifecycleEventHookExecutionId?: string;
		status?: LifecycleEventStatus;
	}
	export interface PutLifecycleEventHookExecutionStatusInputFormProperties {
		deploymentId: FormControl<string | null | undefined>,
		lifecycleEventHookExecutionId: FormControl<string | null | undefined>,
		status: FormControl<LifecycleEventStatus | null | undefined>,
	}
	export function CreatePutLifecycleEventHookExecutionStatusInputFormGroup() {
		return new FormGroup<PutLifecycleEventHookExecutionStatusInputFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined),
			lifecycleEventHookExecutionId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<LifecycleEventStatus | null | undefined>(undefined),
		});

	}

	export interface InvalidLifecycleEventHookExecutionStatusException {
	}
	export interface InvalidLifecycleEventHookExecutionStatusExceptionFormProperties {
	}
	export function CreateInvalidLifecycleEventHookExecutionStatusExceptionFormGroup() {
		return new FormGroup<InvalidLifecycleEventHookExecutionStatusExceptionFormProperties>({
		});

	}

	export interface InvalidLifecycleEventHookExecutionIdException {
	}
	export interface InvalidLifecycleEventHookExecutionIdExceptionFormProperties {
	}
	export function CreateInvalidLifecycleEventHookExecutionIdExceptionFormGroup() {
		return new FormGroup<InvalidLifecycleEventHookExecutionIdExceptionFormProperties>({
		});

	}

	export interface LifecycleEventAlreadyCompletedException {
	}
	export interface LifecycleEventAlreadyCompletedExceptionFormProperties {
	}
	export function CreateLifecycleEventAlreadyCompletedExceptionFormGroup() {
		return new FormGroup<LifecycleEventAlreadyCompletedExceptionFormProperties>({
		});

	}


	/** Represents the input of a RegisterApplicationRevision operation. */
	export interface RegisterApplicationRevisionInput {

		/** Required */
		applicationName: string;
		description?: string;

		/** Required */
		revision: RevisionLocation;
	}

	/** Represents the input of a RegisterApplicationRevision operation. */
	export interface RegisterApplicationRevisionInputFormProperties {

		/** Required */
		applicationName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateRegisterApplicationRevisionInputFormGroup() {
		return new FormGroup<RegisterApplicationRevisionInputFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of the register on-premises instance operation. */
	export interface RegisterOnPremisesInstanceInput {

		/** Required */
		instanceName: string;
		iamSessionArn?: string;
		iamUserArn?: string;
	}

	/** Represents the input of the register on-premises instance operation. */
	export interface RegisterOnPremisesInstanceInputFormProperties {

		/** Required */
		instanceName: FormControl<string | null | undefined>,
		iamSessionArn: FormControl<string | null | undefined>,
		iamUserArn: FormControl<string | null | undefined>,
	}
	export function CreateRegisterOnPremisesInstanceInputFormGroup() {
		return new FormGroup<RegisterOnPremisesInstanceInputFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			iamSessionArn: new FormControl<string | null | undefined>(undefined),
			iamUserArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InstanceNameAlreadyRegisteredException {
	}
	export interface InstanceNameAlreadyRegisteredExceptionFormProperties {
	}
	export function CreateInstanceNameAlreadyRegisteredExceptionFormGroup() {
		return new FormGroup<InstanceNameAlreadyRegisteredExceptionFormProperties>({
		});

	}

	export interface IamArnRequiredException {
	}
	export interface IamArnRequiredExceptionFormProperties {
	}
	export function CreateIamArnRequiredExceptionFormGroup() {
		return new FormGroup<IamArnRequiredExceptionFormProperties>({
		});

	}

	export interface IamSessionArnAlreadyRegisteredException {
	}
	export interface IamSessionArnAlreadyRegisteredExceptionFormProperties {
	}
	export function CreateIamSessionArnAlreadyRegisteredExceptionFormGroup() {
		return new FormGroup<IamSessionArnAlreadyRegisteredExceptionFormProperties>({
		});

	}

	export interface IamUserArnAlreadyRegisteredException {
	}
	export interface IamUserArnAlreadyRegisteredExceptionFormProperties {
	}
	export function CreateIamUserArnAlreadyRegisteredExceptionFormGroup() {
		return new FormGroup<IamUserArnAlreadyRegisteredExceptionFormProperties>({
		});

	}

	export interface IamUserArnRequiredException {
	}
	export interface IamUserArnRequiredExceptionFormProperties {
	}
	export function CreateIamUserArnRequiredExceptionFormGroup() {
		return new FormGroup<IamUserArnRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidIamSessionArnException {
	}
	export interface InvalidIamSessionArnExceptionFormProperties {
	}
	export function CreateInvalidIamSessionArnExceptionFormGroup() {
		return new FormGroup<InvalidIamSessionArnExceptionFormProperties>({
		});

	}

	export interface InvalidIamUserArnException {
	}
	export interface InvalidIamUserArnExceptionFormProperties {
	}
	export function CreateInvalidIamUserArnExceptionFormGroup() {
		return new FormGroup<InvalidIamUserArnExceptionFormProperties>({
		});

	}

	export interface MultipleIamArnsProvidedException {
	}
	export interface MultipleIamArnsProvidedExceptionFormProperties {
	}
	export function CreateMultipleIamArnsProvidedExceptionFormGroup() {
		return new FormGroup<MultipleIamArnsProvidedExceptionFormProperties>({
		});

	}


	/** Represents the input of a <code>RemoveTagsFromOnPremisesInstances</code> operation. */
	export interface RemoveTagsFromOnPremisesInstancesInput {

		/** Required */
		tags: Array<Tag>;

		/** Required */
		instanceNames: Array<string>;
	}

	/** Represents the input of a <code>RemoveTagsFromOnPremisesInstances</code> operation. */
	export interface RemoveTagsFromOnPremisesInstancesInputFormProperties {
	}
	export function CreateRemoveTagsFromOnPremisesInstancesInputFormGroup() {
		return new FormGroup<RemoveTagsFromOnPremisesInstancesInputFormProperties>({
		});

	}

	export interface SkipWaitTimeForInstanceTerminationInput {
		deploymentId?: string;
	}
	export interface SkipWaitTimeForInstanceTerminationInputFormProperties {
		deploymentId: FormControl<string | null | undefined>,
	}
	export function CreateSkipWaitTimeForInstanceTerminationInputFormGroup() {
		return new FormGroup<SkipWaitTimeForInstanceTerminationInputFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Represents the output of a <code>StopDeployment</code> operation.  */
	export interface StopDeploymentOutput {
		status?: StopStatus;
		statusMessage?: string;
	}

	/**  Represents the output of a <code>StopDeployment</code> operation.  */
	export interface StopDeploymentOutputFormProperties {
		status: FormControl<StopStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
	}
	export function CreateStopDeploymentOutputFormGroup() {
		return new FormGroup<StopDeploymentOutputFormProperties>({
			status: new FormControl<StopStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StopStatus { Pending = 'Pending', Succeeded = 'Succeeded' }


	/**  Represents the input of a <code>StopDeployment</code> operation.  */
	export interface StopDeploymentInput {

		/** Required */
		deploymentId: string;
		autoRollbackEnabled?: boolean | null;
	}

	/**  Represents the input of a <code>StopDeployment</code> operation.  */
	export interface StopDeploymentInputFormProperties {

		/** Required */
		deploymentId: FormControl<string | null | undefined>,
		autoRollbackEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateStopDeploymentInputFormGroup() {
		return new FormGroup<StopDeploymentInputFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			autoRollbackEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TagResourceOutput {
	}
	export interface TagResourceOutputFormProperties {
	}
	export function CreateTagResourceOutputFormGroup() {
		return new FormGroup<TagResourceOutputFormProperties>({
		});

	}

	export interface TagResourceInput {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceInputFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceOutput {
	}
	export interface UntagResourceOutputFormProperties {
	}
	export function CreateUntagResourceOutputFormGroup() {
		return new FormGroup<UntagResourceOutputFormProperties>({
		});

	}

	export interface UntagResourceInput {

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceInputFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input of an <code>UpdateApplication</code> operation. */
	export interface UpdateApplicationInput {
		applicationName?: string;
		newApplicationName?: string;
	}

	/** Represents the input of an <code>UpdateApplication</code> operation. */
	export interface UpdateApplicationInputFormProperties {
		applicationName: FormControl<string | null | undefined>,
		newApplicationName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationInputFormGroup() {
		return new FormGroup<UpdateApplicationInputFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined),
			newApplicationName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of an <code>UpdateDeploymentGroup</code> operation. */
	export interface UpdateDeploymentGroupOutput {
		hooksNotCleanedUp?: Array<AutoScalingGroup>;
	}

	/** Represents the output of an <code>UpdateDeploymentGroup</code> operation. */
	export interface UpdateDeploymentGroupOutputFormProperties {
	}
	export function CreateUpdateDeploymentGroupOutputFormGroup() {
		return new FormGroup<UpdateDeploymentGroupOutputFormProperties>({
		});

	}


	/** Represents the input of an <code>UpdateDeploymentGroup</code> operation. */
	export interface UpdateDeploymentGroupInput {

		/** Required */
		applicationName: string;

		/** Required */
		currentDeploymentGroupName: string;
		newDeploymentGroupName?: string;
		deploymentConfigName?: string;
		ec2TagFilters?: Array<EC2TagFilter>;
		onPremisesInstanceTagFilters?: Array<TagFilter>;
		autoScalingGroups?: Array<string>;
		serviceRoleArn?: string;
		triggerConfigurations?: Array<TriggerConfig>;
		alarmConfiguration?: AlarmConfiguration;
		autoRollbackConfiguration?: AutoRollbackConfiguration;
		outdatedInstancesStrategy?: OutdatedInstancesStrategy;
		deploymentStyle?: DeploymentStyle;
		blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
		loadBalancerInfo?: LoadBalancerInfo;
		ec2TagSet?: EC2TagSet;
		ecsServices?: Array<ECSService>;
		onPremisesTagSet?: OnPremisesTagSet;
	}

	/** Represents the input of an <code>UpdateDeploymentGroup</code> operation. */
	export interface UpdateDeploymentGroupInputFormProperties {

		/** Required */
		applicationName: FormControl<string | null | undefined>,

		/** Required */
		currentDeploymentGroupName: FormControl<string | null | undefined>,
		newDeploymentGroupName: FormControl<string | null | undefined>,
		deploymentConfigName: FormControl<string | null | undefined>,
		serviceRoleArn: FormControl<string | null | undefined>,
		outdatedInstancesStrategy: FormControl<OutdatedInstancesStrategy | null | undefined>,
	}
	export function CreateUpdateDeploymentGroupInputFormGroup() {
		return new FormGroup<UpdateDeploymentGroupInputFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currentDeploymentGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			newDeploymentGroupName: new FormControl<string | null | undefined>(undefined),
			deploymentConfigName: new FormControl<string | null | undefined>(undefined),
			serviceRoleArn: new FormControl<string | null | undefined>(undefined),
			outdatedInstancesStrategy: new FormControl<OutdatedInstancesStrategy | null | undefined>(undefined),
		});

	}

	export enum TargetStatus { Pending = 'Pending', InProgress = 'InProgress', Succeeded = 'Succeeded', Failed = 'Failed', Skipped = 'Skipped', Unknown = 'Unknown', Ready = 'Ready' }

	export enum TargetLabel { Blue = 'Blue', Green = 'Green' }

	export enum TagFilterType { KEY_ONLY = 'KEY_ONLY', VALUE_ONLY = 'VALUE_ONLY', KEY_AND_VALUE = 'KEY_AND_VALUE' }

	export enum TargetFilterName { TargetStatus = 'TargetStatus', ServerInstanceLabel = 'ServerInstanceLabel' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds tags to on-premises instances.
		 * Post #X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances
		 * @return {void} Success
		 */
		AddTagsToOnPremisesInstances(requestBody: AddTagsToOnPremisesInstancesInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.AddTagsToOnPremisesInstances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about one or more application revisions. The maximum number of application revisions that can be returned is 25.
		 * Post #X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions
		 * @return {BatchGetApplicationRevisionsOutput} Success
		 */
		BatchGetApplicationRevisions(requestBody: BatchGetApplicationRevisionsInput): Observable<BatchGetApplicationRevisionsOutput> {
			return this.http.post<BatchGetApplicationRevisionsOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.BatchGetApplicationRevisions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about one or more applications. The maximum number of applications that can be returned is 100.
		 * Post #X-Amz-Target=CodeDeploy_20141006.BatchGetApplications
		 * @return {BatchGetApplicationsOutput} Success
		 */
		BatchGetApplications(requestBody: BatchGetApplicationsInput): Observable<BatchGetApplicationsOutput> {
			return this.http.post<BatchGetApplicationsOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.BatchGetApplications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about one or more deployment groups.
		 * Post #X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups
		 * @return {BatchGetDeploymentGroupsOutput} Success
		 */
		BatchGetDeploymentGroups(requestBody: BatchGetDeploymentGroupsInput): Observable<BatchGetDeploymentGroupsOutput> {
			return this.http.post<BatchGetDeploymentGroupsOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p> This method works, but is deprecated. Use <code>BatchGetDeploymentTargets</code> instead. </p> </note> <p> Returns an array of one or more instances associated with a deployment. This method works with EC2/On-premises and Lambda compute platforms. The newer <code>BatchGetDeploymentTargets</code> works with all compute platforms. The maximum number of instances that can be returned is 25.</p>
		 * Post #X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances
		 * @return {BatchGetDeploymentInstancesOutput} Success
		 */
		BatchGetDeploymentInstances(requestBody: BatchGetDeploymentInstancesInput): Observable<BatchGetDeploymentInstancesOutput> {
			return this.http.post<BatchGetDeploymentInstancesOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be returned is 25.</p> <p> The type of targets returned depends on the deployment's compute platform or deployment method: </p> <ul> <li> <p> <b>EC2/On-premises</b>: Information about Amazon EC2 instance targets. </p> </li> <li> <p> <b>Lambda</b>: Information about Lambda functions targets. </p> </li> <li> <p> <b>Amazon ECS</b>: Information about Amazon ECS service targets. </p> </li> <li> <p> <b>CloudFormation</b>: Information about targets of blue/green deployments initiated by a CloudFormation stack update.</p> </li> </ul>
		 * Post #X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets
		 * @return {BatchGetDeploymentTargetsOutput} Success
		 */
		BatchGetDeploymentTargets(requestBody: BatchGetDeploymentTargetsInput): Observable<BatchGetDeploymentTargetsOutput> {
			return this.http.post<BatchGetDeploymentTargetsOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentTargets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about one or more deployments. The maximum number of deployments that can be returned is 25.
		 * Post #X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments
		 * @return {BatchGetDeploymentsOutput} Success
		 */
		BatchGetDeployments(requestBody: BatchGetDeploymentsInput): Observable<BatchGetDeploymentsOutput> {
			return this.http.post<BatchGetDeploymentsOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.BatchGetDeployments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about one or more on-premises instances. The maximum number of on-premises instances that can be returned is 25.
		 * Post #X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances
		 * @return {BatchGetOnPremisesInstancesOutput} Success
		 */
		BatchGetOnPremisesInstances(requestBody: BatchGetOnPremisesInstancesInput): Observable<BatchGetOnPremisesInstancesOutput> {
			return this.http.post<BatchGetOnPremisesInstancesOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.BatchGetOnPremisesInstances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For a blue/green deployment, starts the process of rerouting traffic from instances in the original environment to instances in the replacement environment without waiting for a specified wait time to elapse. (Traffic rerouting, which is achieved by registering instances in the replacement environment with the load balancer, can start as soon as all instances have a status of Ready.)
		 * Post #X-Amz-Target=CodeDeploy_20141006.ContinueDeployment
		 * @return {void} Success
		 */
		ContinueDeployment(requestBody: ContinueDeploymentInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.ContinueDeployment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an application.
		 * Post #X-Amz-Target=CodeDeploy_20141006.CreateApplication
		 * @return {CreateApplicationOutput} Success
		 */
		CreateApplication(requestBody: CreateApplicationInput): Observable<CreateApplicationOutput> {
			return this.http.post<CreateApplicationOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.CreateApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deploys an application revision through the specified deployment group.
		 * Post #X-Amz-Target=CodeDeploy_20141006.CreateDeployment
		 * @return {CreateDeploymentOutput} Success
		 */
		CreateDeployment(requestBody: CreateDeploymentInput): Observable<CreateDeploymentOutput> {
			return this.http.post<CreateDeploymentOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.CreateDeployment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a deployment configuration.
		 * Post #X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig
		 * @return {CreateDeploymentConfigOutput} Success
		 */
		CreateDeploymentConfig(requestBody: CreateDeploymentConfigInput): Observable<CreateDeploymentConfigOutput> {
			return this.http.post<CreateDeploymentConfigOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a deployment group to which application revisions are deployed.
		 * Post #X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup
		 * @return {CreateDeploymentGroupOutput} Success
		 */
		CreateDeploymentGroup(requestBody: CreateDeploymentGroupInput): Observable<CreateDeploymentGroupOutput> {
			return this.http.post<CreateDeploymentGroupOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.CreateDeploymentGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an application.
		 * Post #X-Amz-Target=CodeDeploy_20141006.DeleteApplication
		 * @return {void} Success
		 */
		DeleteApplication(requestBody: DeleteApplicationInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.DeleteApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a deployment configuration.</p> <note> <p>A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted.</p> </note>
		 * Post #X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig
		 * @return {void} Success
		 */
		DeleteDeploymentConfig(requestBody: DeleteDeploymentConfigInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a deployment group.
		 * Post #X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup
		 * @return {DeleteDeploymentGroupOutput} Success
		 */
		DeleteDeploymentGroup(requestBody: DeleteDeploymentGroupInput): Observable<DeleteDeploymentGroupOutput> {
			return this.http.post<DeleteDeploymentGroupOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.DeleteDeploymentGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a GitHub account connection.
		 * Post #X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken
		 * @return {DeleteGitHubAccountTokenOutput} Success
		 */
		DeleteGitHubAccountToken(requestBody: DeleteGitHubAccountTokenInput): Observable<DeleteGitHubAccountTokenOutput> {
			return this.http.post<DeleteGitHubAccountTokenOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.DeleteGitHubAccountToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes resources linked to an external ID.
		 * Post #X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId
		 * @return {DeleteResourcesByExternalIdOutput} Success
		 */
		DeleteResourcesByExternalId(requestBody: DeleteResourcesByExternalIdInput): Observable<DeleteResourcesByExternalIdOutput> {
			return this.http.post<DeleteResourcesByExternalIdOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.DeleteResourcesByExternalId', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deregisters an on-premises instance.
		 * Post #X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance
		 * @return {void} Success
		 */
		DeregisterOnPremisesInstance(requestBody: DeregisterOnPremisesInstanceInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.DeregisterOnPremisesInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about an application.
		 * Post #X-Amz-Target=CodeDeploy_20141006.GetApplication
		 * @return {GetApplicationOutput} Success
		 */
		GetApplication(requestBody: GetApplicationInput): Observable<GetApplicationOutput> {
			return this.http.post<GetApplicationOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.GetApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about an application revision.
		 * Post #X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision
		 * @return {GetApplicationRevisionOutput} Success
		 */
		GetApplicationRevision(requestBody: GetApplicationRevisionInput): Observable<GetApplicationRevisionOutput> {
			return this.http.post<GetApplicationRevisionOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.GetApplicationRevision', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets information about a deployment.</p> <note> <p> The <code>content</code> property of the <code>appSpecContent</code> object in the returned revision is always null. Use <code>GetApplicationRevision</code> and the <code>sha256</code> property of the returned <code>appSpecContent</code> object to get the content of the deployment’s AppSpec file. </p> </note>
		 * Post #X-Amz-Target=CodeDeploy_20141006.GetDeployment
		 * @return {GetDeploymentOutput} Success
		 */
		GetDeployment(requestBody: GetDeploymentInput): Observable<GetDeploymentOutput> {
			return this.http.post<GetDeploymentOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.GetDeployment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a deployment configuration.
		 * Post #X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig
		 * @return {GetDeploymentConfigOutput} Success
		 */
		GetDeploymentConfig(requestBody: GetDeploymentConfigInput): Observable<GetDeploymentConfigOutput> {
			return this.http.post<GetDeploymentConfigOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.GetDeploymentConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a deployment group.
		 * Post #X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup
		 * @return {GetDeploymentGroupOutput} Success
		 */
		GetDeploymentGroup(requestBody: GetDeploymentGroupInput): Observable<GetDeploymentGroupOutput> {
			return this.http.post<GetDeploymentGroupOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.GetDeploymentGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about an instance as part of a deployment.
		 * Post #X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance
		 * @return {GetDeploymentInstanceOutput} Success
		 */
		GetDeploymentInstance(requestBody: GetDeploymentInstanceInput): Observable<GetDeploymentInstanceOutput> {
			return this.http.post<GetDeploymentInstanceOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.GetDeploymentInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a deployment target.
		 * Post #X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget
		 * @return {GetDeploymentTargetOutput} Success
		 */
		GetDeploymentTarget(requestBody: GetDeploymentTargetInput): Observable<GetDeploymentTargetOutput> {
			return this.http.post<GetDeploymentTargetOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.GetDeploymentTarget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about an on-premises instance.
		 * Post #X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance
		 * @return {GetOnPremisesInstanceOutput} Success
		 */
		GetOnPremisesInstance(requestBody: GetOnPremisesInstanceInput): Observable<GetOnPremisesInstanceOutput> {
			return this.http.post<GetOnPremisesInstanceOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.GetOnPremisesInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about revisions for an application.
		 * Post #X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions
		 * @param {string} nextToken Pagination token
		 * @return {ListApplicationRevisionsOutput} Success
		 */
		ListApplicationRevisions(nextToken: string | null | undefined, requestBody: ListApplicationRevisionsInput): Observable<ListApplicationRevisionsOutput> {
			return this.http.post<ListApplicationRevisionsOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the applications registered with the IAM user or Amazon Web Services account.
		 * Post #X-Amz-Target=CodeDeploy_20141006.ListApplications
		 * @param {string} nextToken Pagination token
		 * @return {ListApplicationsOutput} Success
		 */
		ListApplications(nextToken: string | null | undefined, requestBody: ListApplicationsInput): Observable<ListApplicationsOutput> {
			return this.http.post<ListApplicationsOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.ListApplications?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the deployment configurations with the IAM user or Amazon Web Services account.
		 * Post #X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs
		 * @param {string} nextToken Pagination token
		 * @return {ListDeploymentConfigsOutput} Success
		 */
		ListDeploymentConfigs(nextToken: string | null | undefined, requestBody: ListDeploymentConfigsInput): Observable<ListDeploymentConfigsOutput> {
			return this.http.post<ListDeploymentConfigsOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the deployment groups for an application registered with the IAM user or Amazon Web Services account.
		 * Post #X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups
		 * @param {string} nextToken Pagination token
		 * @return {ListDeploymentGroupsOutput} Success
		 */
		ListDeploymentGroups(nextToken: string | null | undefined, requestBody: ListDeploymentGroupsInput): Observable<ListDeploymentGroupsOutput> {
			return this.http.post<ListDeploymentGroupsOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because it works with all compute types. <code>ListDeploymentInstances</code> throws an exception if it is used with a compute platform other than EC2/On-premises or Lambda. </p> </note> <p> Lists the instance for a deployment associated with the IAM user or Amazon Web Services account. </p>
		 * Post #X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances
		 * @param {string} nextToken Pagination token
		 * @return {ListDeploymentInstancesOutput} Success
		 */
		ListDeploymentInstances(nextToken: string | null | undefined, requestBody: ListDeploymentInstancesInput): Observable<ListDeploymentInstancesOutput> {
			return this.http.post<ListDeploymentInstancesOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of target IDs that are associated a deployment.
		 * Post #X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets
		 * @return {ListDeploymentTargetsOutput} Success
		 */
		ListDeploymentTargets(requestBody: ListDeploymentTargetsInput): Observable<ListDeploymentTargetsOutput> {
			return this.http.post<ListDeploymentTargetsOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.ListDeploymentTargets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the deployments in a deployment group for an application registered with the IAM user or Amazon Web Services account.
		 * Post #X-Amz-Target=CodeDeploy_20141006.ListDeployments
		 * @param {string} nextToken Pagination token
		 * @return {ListDeploymentsOutput} Success
		 */
		ListDeployments(nextToken: string | null | undefined, requestBody: ListDeploymentsInput): Observable<ListDeploymentsOutput> {
			return this.http.post<ListDeploymentsOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.ListDeployments?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the names of stored connections to GitHub accounts.
		 * Post #X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames
		 * @return {ListGitHubAccountTokenNamesOutput} Success
		 */
		ListGitHubAccountTokenNames(requestBody: ListGitHubAccountTokenNamesInput): Observable<ListGitHubAccountTokenNamesOutput> {
			return this.http.post<ListGitHubAccountTokenNamesOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.ListGitHubAccountTokenNames', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets a list of names for one or more on-premises instances.</p> <p>Unless otherwise specified, both registered and deregistered on-premises instance names are listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.</p>
		 * Post #X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances
		 * @return {ListOnPremisesInstancesOutput} Success
		 */
		ListOnPremisesInstances(requestBody: ListOnPremisesInstancesInput): Observable<ListOnPremisesInstancesOutput> {
			return this.http.post<ListOnPremisesInstancesOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.ListOnPremisesInstances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of tags for the resource identified by a specified Amazon Resource Name (ARN). Tags are used to organize and categorize your CodeDeploy resources.
		 * Post #X-Amz-Target=CodeDeploy_20141006.ListTagsForResource
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceInput): Observable<ListTagsForResourceOutput> {
			return this.http.post<ListTagsForResourceOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the result of a Lambda validation function. The function validates lifecycle hooks during a deployment that uses the Lambda or Amazon ECS compute platform. For Lambda deployments, the available lifecycle hooks are <code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>. For Amazon ECS deployments, the available lifecycle hooks are <code>BeforeInstall</code>, <code>AfterInstall</code>, <code>AfterAllowTestTraffic</code>, <code>BeforeAllowTraffic</code>, and <code>AfterAllowTraffic</code>. Lambda validation functions return <code>Succeeded</code> or <code>Failed</code>. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda">AppSpec 'hooks' Section for an Lambda Deployment </a> and <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-ecs">AppSpec 'hooks' Section for an Amazon ECS Deployment</a>.
		 * Post #X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus
		 * @return {PutLifecycleEventHookExecutionStatusOutput} Success
		 */
		PutLifecycleEventHookExecutionStatus(requestBody: PutLifecycleEventHookExecutionStatusInput): Observable<PutLifecycleEventHookExecutionStatusOutput> {
			return this.http.post<PutLifecycleEventHookExecutionStatusOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers with CodeDeploy a revision for the specified application.
		 * Post #X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision
		 * @return {void} Success
		 */
		RegisterApplicationRevision(requestBody: RegisterApplicationRevisionInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.RegisterApplicationRevision', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Registers an on-premises instance.</p> <note> <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.</p> </note>
		 * Post #X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance
		 * @return {void} Success
		 */
		RegisterOnPremisesInstance(requestBody: RegisterOnPremisesInstanceInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.RegisterOnPremisesInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes one or more tags from one or more on-premises instances.
		 * Post #X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances
		 * @return {void} Success
		 */
		RemoveTagsFromOnPremisesInstances(requestBody: RemoveTagsFromOnPremisesInstancesInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete.
		 * Post #X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination
		 * @return {void} Success
		 */
		SkipWaitTimeForInstanceTermination(requestBody: SkipWaitTimeForInstanceTerminationInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.SkipWaitTimeForInstanceTermination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Attempts to stop an ongoing deployment.
		 * Post #X-Amz-Target=CodeDeploy_20141006.StopDeployment
		 * @return {StopDeploymentOutput} Success
		 */
		StopDeployment(requestBody: StopDeploymentInput): Observable<StopDeploymentOutput> {
			return this.http.post<StopDeploymentOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.StopDeployment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates the list of tags in the input <code>Tags</code> parameter with the resource identified by the <code>ResourceArn</code> input parameter.
		 * Post #X-Amz-Target=CodeDeploy_20141006.TagResource
		 * @return {TagResourceOutput} Success
		 */
		TagResource(requestBody: TagResourceInput): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates a resource from a list of tags. The resource is identified by the <code>ResourceArn</code> input parameter. The tags are identified by the list of keys in the <code>TagKeys</code> input parameter.
		 * Post #X-Amz-Target=CodeDeploy_20141006.UntagResource
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(requestBody: UntagResourceInput): Observable<UntagResourceOutput> {
			return this.http.post<UntagResourceOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Changes the name of an application.
		 * Post #X-Amz-Target=CodeDeploy_20141006.UpdateApplication
		 * @return {void} Success
		 */
		UpdateApplication(requestBody: UpdateApplicationInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.UpdateApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Changes information about a deployment group.
		 * Post #X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup
		 * @return {UpdateDeploymentGroupOutput} Success
		 */
		UpdateDeploymentGroup(requestBody: UpdateDeploymentGroupInput): Observable<UpdateDeploymentGroupOutput> {
			return this.http.post<UpdateDeploymentGroupOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.UpdateDeploymentGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddTagsToOnPremisesInstancesX_Amz_Target { 'CodeDeploy_20141006.AddTagsToOnPremisesInstances' = 'CodeDeploy_20141006.AddTagsToOnPremisesInstances' }

	export enum BatchGetApplicationRevisionsX_Amz_Target { 'CodeDeploy_20141006.BatchGetApplicationRevisions' = 'CodeDeploy_20141006.BatchGetApplicationRevisions' }

	export enum BatchGetApplicationsX_Amz_Target { 'CodeDeploy_20141006.BatchGetApplications' = 'CodeDeploy_20141006.BatchGetApplications' }

	export enum BatchGetDeploymentGroupsX_Amz_Target { 'CodeDeploy_20141006.BatchGetDeploymentGroups' = 'CodeDeploy_20141006.BatchGetDeploymentGroups' }

	export enum BatchGetDeploymentInstancesX_Amz_Target { 'CodeDeploy_20141006.BatchGetDeploymentInstances' = 'CodeDeploy_20141006.BatchGetDeploymentInstances' }

	export enum BatchGetDeploymentTargetsX_Amz_Target { 'CodeDeploy_20141006.BatchGetDeploymentTargets' = 'CodeDeploy_20141006.BatchGetDeploymentTargets' }

	export enum BatchGetDeploymentsX_Amz_Target { 'CodeDeploy_20141006.BatchGetDeployments' = 'CodeDeploy_20141006.BatchGetDeployments' }

	export enum BatchGetOnPremisesInstancesX_Amz_Target { 'CodeDeploy_20141006.BatchGetOnPremisesInstances' = 'CodeDeploy_20141006.BatchGetOnPremisesInstances' }

	export enum ContinueDeploymentX_Amz_Target { 'CodeDeploy_20141006.ContinueDeployment' = 'CodeDeploy_20141006.ContinueDeployment' }

	export enum CreateApplicationX_Amz_Target { 'CodeDeploy_20141006.CreateApplication' = 'CodeDeploy_20141006.CreateApplication' }

	export enum CreateDeploymentX_Amz_Target { 'CodeDeploy_20141006.CreateDeployment' = 'CodeDeploy_20141006.CreateDeployment' }

	export enum CreateDeploymentConfigX_Amz_Target { 'CodeDeploy_20141006.CreateDeploymentConfig' = 'CodeDeploy_20141006.CreateDeploymentConfig' }

	export enum CreateDeploymentGroupX_Amz_Target { 'CodeDeploy_20141006.CreateDeploymentGroup' = 'CodeDeploy_20141006.CreateDeploymentGroup' }

	export enum DeleteApplicationX_Amz_Target { 'CodeDeploy_20141006.DeleteApplication' = 'CodeDeploy_20141006.DeleteApplication' }

	export enum DeleteDeploymentConfigX_Amz_Target { 'CodeDeploy_20141006.DeleteDeploymentConfig' = 'CodeDeploy_20141006.DeleteDeploymentConfig' }

	export enum DeleteDeploymentGroupX_Amz_Target { 'CodeDeploy_20141006.DeleteDeploymentGroup' = 'CodeDeploy_20141006.DeleteDeploymentGroup' }

	export enum DeleteGitHubAccountTokenX_Amz_Target { 'CodeDeploy_20141006.DeleteGitHubAccountToken' = 'CodeDeploy_20141006.DeleteGitHubAccountToken' }

	export enum DeleteResourcesByExternalIdX_Amz_Target { 'CodeDeploy_20141006.DeleteResourcesByExternalId' = 'CodeDeploy_20141006.DeleteResourcesByExternalId' }

	export enum DeregisterOnPremisesInstanceX_Amz_Target { 'CodeDeploy_20141006.DeregisterOnPremisesInstance' = 'CodeDeploy_20141006.DeregisterOnPremisesInstance' }

	export enum GetApplicationX_Amz_Target { 'CodeDeploy_20141006.GetApplication' = 'CodeDeploy_20141006.GetApplication' }

	export enum GetApplicationRevisionX_Amz_Target { 'CodeDeploy_20141006.GetApplicationRevision' = 'CodeDeploy_20141006.GetApplicationRevision' }

	export enum GetDeploymentX_Amz_Target { 'CodeDeploy_20141006.GetDeployment' = 'CodeDeploy_20141006.GetDeployment' }

	export enum GetDeploymentConfigX_Amz_Target { 'CodeDeploy_20141006.GetDeploymentConfig' = 'CodeDeploy_20141006.GetDeploymentConfig' }

	export enum GetDeploymentGroupX_Amz_Target { 'CodeDeploy_20141006.GetDeploymentGroup' = 'CodeDeploy_20141006.GetDeploymentGroup' }

	export enum GetDeploymentInstanceX_Amz_Target { 'CodeDeploy_20141006.GetDeploymentInstance' = 'CodeDeploy_20141006.GetDeploymentInstance' }

	export enum GetDeploymentTargetX_Amz_Target { 'CodeDeploy_20141006.GetDeploymentTarget' = 'CodeDeploy_20141006.GetDeploymentTarget' }

	export enum GetOnPremisesInstanceX_Amz_Target { 'CodeDeploy_20141006.GetOnPremisesInstance' = 'CodeDeploy_20141006.GetOnPremisesInstance' }

	export enum ListApplicationRevisionsX_Amz_Target { 'CodeDeploy_20141006.ListApplicationRevisions' = 'CodeDeploy_20141006.ListApplicationRevisions' }

	export enum ListApplicationsX_Amz_Target { 'CodeDeploy_20141006.ListApplications' = 'CodeDeploy_20141006.ListApplications' }

	export enum ListDeploymentConfigsX_Amz_Target { 'CodeDeploy_20141006.ListDeploymentConfigs' = 'CodeDeploy_20141006.ListDeploymentConfigs' }

	export enum ListDeploymentGroupsX_Amz_Target { 'CodeDeploy_20141006.ListDeploymentGroups' = 'CodeDeploy_20141006.ListDeploymentGroups' }

	export enum ListDeploymentInstancesX_Amz_Target { 'CodeDeploy_20141006.ListDeploymentInstances' = 'CodeDeploy_20141006.ListDeploymentInstances' }

	export enum ListDeploymentTargetsX_Amz_Target { 'CodeDeploy_20141006.ListDeploymentTargets' = 'CodeDeploy_20141006.ListDeploymentTargets' }

	export enum ListDeploymentsX_Amz_Target { 'CodeDeploy_20141006.ListDeployments' = 'CodeDeploy_20141006.ListDeployments' }

	export enum ListGitHubAccountTokenNamesX_Amz_Target { 'CodeDeploy_20141006.ListGitHubAccountTokenNames' = 'CodeDeploy_20141006.ListGitHubAccountTokenNames' }

	export enum ListOnPremisesInstancesX_Amz_Target { 'CodeDeploy_20141006.ListOnPremisesInstances' = 'CodeDeploy_20141006.ListOnPremisesInstances' }

	export enum ListTagsForResourceX_Amz_Target { 'CodeDeploy_20141006.ListTagsForResource' = 'CodeDeploy_20141006.ListTagsForResource' }

	export enum PutLifecycleEventHookExecutionStatusX_Amz_Target { 'CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus' = 'CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus' }

	export enum RegisterApplicationRevisionX_Amz_Target { 'CodeDeploy_20141006.RegisterApplicationRevision' = 'CodeDeploy_20141006.RegisterApplicationRevision' }

	export enum RegisterOnPremisesInstanceX_Amz_Target { 'CodeDeploy_20141006.RegisterOnPremisesInstance' = 'CodeDeploy_20141006.RegisterOnPremisesInstance' }

	export enum RemoveTagsFromOnPremisesInstancesX_Amz_Target { 'CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances' = 'CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances' }

	export enum SkipWaitTimeForInstanceTerminationX_Amz_Target { 'CodeDeploy_20141006.SkipWaitTimeForInstanceTermination' = 'CodeDeploy_20141006.SkipWaitTimeForInstanceTermination' }

	export enum StopDeploymentX_Amz_Target { 'CodeDeploy_20141006.StopDeployment' = 'CodeDeploy_20141006.StopDeployment' }

	export enum TagResourceX_Amz_Target { 'CodeDeploy_20141006.TagResource' = 'CodeDeploy_20141006.TagResource' }

	export enum UntagResourceX_Amz_Target { 'CodeDeploy_20141006.UntagResource' = 'CodeDeploy_20141006.UntagResource' }

	export enum UpdateApplicationX_Amz_Target { 'CodeDeploy_20141006.UpdateApplication' = 'CodeDeploy_20141006.UpdateApplication' }

	export enum UpdateDeploymentGroupX_Amz_Target { 'CodeDeploy_20141006.UpdateDeploymentGroup' = 'CodeDeploy_20141006.UpdateDeploymentGroup' }

}

