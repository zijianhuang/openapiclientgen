import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Represents the input of, and adds tags to, an on-premises instance operation. */
	export interface AddTagsToOnPremisesInstancesInput {
		tags: Array<Tag>;
		instanceNames: Array<string>;
	}


	/** Information about a tag. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	export interface InstanceNameRequiredException {
	}

	export interface InvalidInstanceNameException {
	}

	export interface TagRequiredException {
	}

	export interface InvalidTagException {
	}

	export interface TagLimitExceededException {
	}

	export interface InstanceLimitExceededException {
	}

	export interface InstanceNotRegisteredException {
	}


	/** Represents the output of a <code>BatchGetApplicationRevisions</code> operation. */
	export interface BatchGetApplicationRevisionsOutput {
		applicationName?: string;
		errorMessage?: string;
		revisions?: Array<RevisionInfo>;
	}


	/** Information about an application revision. */
	export interface RevisionInfo {

		/** Information about the location of an application revision. */
		revisionLocation?: RevisionLocation;

		/** Information about an application revision. */
		genericRevisionInfo?: GenericRevisionInfo;
	}


	/** Information about the location of an application revision. */
	export interface RevisionLocation {
		revisionType?: RevisionLocationRevisionType;

		/** Information about the location of application artifacts stored in Amazon S3. */
		s3Location?: S3Location;

		/** Information about the location of application artifacts stored in GitHub. */
		gitHubLocation?: GitHubLocation;

		/** A revision for an AWS Lambda deployment that is a YAML-formatted or JSON-formatted string. For AWS Lambda deployments, the revision is the same as the AppSpec file.RawString and String revision type are deprecated, use AppSpecContent type instead. */
		string?: RawString;

		/** A revision for an AWS Lambda or Amazon ECS deployment that is a YAML-formatted or JSON-formatted string. For AWS Lambda and Amazon ECS deployments, the revision is the same as the AppSpec file. This method replaces the deprecated <code>RawString</code> data type. */
		appSpecContent?: AppSpecContent;
	}

	export enum RevisionLocationRevisionType { S3 = 0, GitHub = 1, String = 2, AppSpecContent = 3 }


	/** Information about the location of application artifacts stored in Amazon S3. */
	export interface S3Location {
		bucket?: string;
		key?: string;
		bundleType?: S3LocationBundleType;
		version?: string;
		eTag?: string;
	}

	export enum S3LocationBundleType { tar = 0, tgz = 1, zip = 2, YAML = 3, JSON = 4 }


	/** Information about the location of application artifacts stored in GitHub. */
	export interface GitHubLocation {
		repository?: string;
		commitId?: string;
	}


	/** A revision for an AWS Lambda deployment that is a YAML-formatted or JSON-formatted string. For AWS Lambda deployments, the revision is the same as the AppSpec file.RawString and String revision type are deprecated, use AppSpecContent type instead. */
	export interface RawString {
		content?: string;
		sha256?: string;
	}


	/**  A revision for an AWS Lambda or Amazon ECS deployment that is a YAML-formatted or JSON-formatted string. For AWS Lambda and Amazon ECS deployments, the revision is the same as the AppSpec file. This method replaces the deprecated <code>RawString</code> data type.  */
	export interface AppSpecContent {
		content?: string;
		sha256?: string;
	}


	/** Information about an application revision. */
	export interface GenericRevisionInfo {
		description?: string;
		deploymentGroups?: Array<string>;
		firstUsedTime?: Date;
		lastUsedTime?: Date;
		registerTime?: Date;
	}


	/** Represents the input of a <code>BatchGetApplicationRevisions</code> operation. */
	export interface BatchGetApplicationRevisionsInput {
		applicationName: string;
		revisions: Array<RevisionLocation>;
	}

	export interface ApplicationDoesNotExistException {
	}

	export interface ApplicationNameRequiredException {
	}

	export interface InvalidApplicationNameException {
	}

	export interface RevisionRequiredException {
	}

	export interface InvalidRevisionException {
	}

	export interface BatchLimitExceededException {
	}


	/** Represents the output of a <code>BatchGetApplications</code> operation. */
	export interface BatchGetApplicationsOutput {
		applicationsInfo?: Array<ApplicationInfo>;
	}


	/** Information about an application. */
	export interface ApplicationInfo {
		applicationId?: string;
		applicationName?: string;
		createTime?: Date;
		linkedToGitHub?: boolean;
		gitHubAccountName?: string;
		computePlatform?: ApplicationInfoComputePlatform;
	}

	export enum ApplicationInfoComputePlatform { Server = 0, Lambda = 1, ECS = 2 }


	/** Represents the input of a <code>BatchGetApplications</code> operation. */
	export interface BatchGetApplicationsInput {
		applicationNames: Array<string>;
	}


	/** Represents the output of a <code>BatchGetDeploymentGroups</code> operation. */
	export interface BatchGetDeploymentGroupsOutput {
		deploymentGroupsInfo?: Array<DeploymentGroupInfo>;
		errorMessage?: string;
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

		/** Information about the location of an application revision. */
		targetRevision?: RevisionLocation;
		triggerConfigurations?: Array<TriggerConfig>;

		/** Information about alarms associated with the deployment group. */
		alarmConfiguration?: AlarmConfiguration;

		/** Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully. */
		autoRollbackConfiguration?: AutoRollbackConfiguration;

		/** Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer. */
		deploymentStyle?: DeploymentStyle;

		/** Information about blue/green deployment options for a deployment group. */
		blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

		/** Information about the Elastic Load Balancing load balancer or target group used in a deployment. */
		loadBalancerInfo?: LoadBalancerInfo;

		/** Information about the most recent attempted or successful deployment to a deployment group. */
		lastSuccessfulDeployment?: LastDeploymentInfo;

		/** Information about the most recent attempted or successful deployment to a deployment group. */
		lastAttemptedDeployment?: LastDeploymentInfo;

		/** Information about groups of EC2 instance tags. */
		ec2TagSet?: EC2TagSet;

		/** Information about groups of on-premises instance tags. */
		onPremisesTagSet?: OnPremisesTagSet;
		computePlatform?: ApplicationInfoComputePlatform;
		ecsServices?: Array<ECSService>;
	}


	/** Information about an EC2 tag filter. */
	export interface EC2TagFilter {
		Key?: string;
		Value?: string;
		Type?: EC2TagFilterType;
	}

	export enum EC2TagFilterType { KEY_ONLY = 0, VALUE_ONLY = 1, KEY_AND_VALUE = 2 }


	/** Information about an on-premises instance tag filter. */
	export interface TagFilter {
		Key?: string;
		Value?: string;
		Type?: EC2TagFilterType;
	}


	/** Information about an Auto Scaling group. */
	export interface AutoScalingGroup {
		name?: string;
		hook?: string;
	}


	/** Information about notification triggers for the deployment group. */
	export interface TriggerConfig {
		triggerName?: string;
		triggerTargetArn?: string;
		triggerEvents?: Array<TriggerEventType>;
	}

	export enum TriggerEventType { DeploymentStart = 0, DeploymentSuccess = 1, DeploymentFailure = 2, DeploymentStop = 3, DeploymentRollback = 4, DeploymentReady = 5, InstanceStart = 6, InstanceSuccess = 7, InstanceFailure = 8, InstanceReady = 9 }


	/** Information about alarms associated with the deployment group. */
	export interface AlarmConfiguration {
		enabled?: boolean;
		ignorePollAlarmFailure?: boolean;
		alarms?: Array<Alarm>;
	}


	/** Information about an alarm. */
	export interface Alarm {
		name?: string;
	}


	/** Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully. */
	export interface AutoRollbackConfiguration {
		enabled?: boolean;
		events?: Array<AutoRollbackEvent>;
	}

	export enum AutoRollbackEvent { DEPLOYMENT_FAILURE = 0, DEPLOYMENT_STOP_ON_ALARM = 1, DEPLOYMENT_STOP_ON_REQUEST = 2 }


	/** Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer. */
	export interface DeploymentStyle {
		deploymentType?: DeploymentStyleDeploymentType;
		deploymentOption?: DeploymentStyleDeploymentOption;
	}

	export enum DeploymentStyleDeploymentType { IN_PLACE = 0, BLUE_GREEN = 1 }

	export enum DeploymentStyleDeploymentOption { WITH_TRAFFIC_CONTROL = 0, WITHOUT_TRAFFIC_CONTROL = 1 }


	/** Information about blue/green deployment options for a deployment group. */
	export interface BlueGreenDeploymentConfiguration {

		/** Information about whether instances in the original environment are terminated when a blue/green deployment is successful. <code>BlueInstanceTerminationOption</code> does not apply to Lambda deployments. */
		terminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOption;

		/** Information about how traffic is rerouted to instances in a replacement environment in a blue/green deployment. */
		deploymentReadyOption?: DeploymentReadyOption;

		/** Information about the instances that belong to the replacement environment in a blue/green deployment. */
		greenFleetProvisioningOption?: GreenFleetProvisioningOption;
	}


	/** Information about whether instances in the original environment are terminated when a blue/green deployment is successful. <code>BlueInstanceTerminationOption</code> does not apply to Lambda deployments.  */
	export interface BlueInstanceTerminationOption {
		action?: BlueInstanceTerminationOptionAction;
		terminationWaitTimeInMinutes?: number;
	}

	export enum BlueInstanceTerminationOptionAction { TERMINATE = 0, KEEP_ALIVE = 1 }


	/** Information about how traffic is rerouted to instances in a replacement environment in a blue/green deployment. */
	export interface DeploymentReadyOption {
		actionOnTimeout?: DeploymentReadyOptionActionOnTimeout;
		waitTimeInMinutes?: number;
	}

	export enum DeploymentReadyOptionActionOnTimeout { CONTINUE_DEPLOYMENT = 0, STOP_DEPLOYMENT = 1 }


	/** Information about the instances that belong to the replacement environment in a blue/green deployment. */
	export interface GreenFleetProvisioningOption {
		action?: GreenFleetProvisioningOptionAction;
	}

	export enum GreenFleetProvisioningOptionAction { DISCOVER_EXISTING = 0, COPY_AUTO_SCALING_GROUP = 1 }


	/** Information about the Elastic Load Balancing load balancer or target group used in a deployment. */
	export interface LoadBalancerInfo {
		elbInfoList?: Array<ELBInfo>;
		targetGroupInfoList?: Array<TargetGroupInfo>;
		targetGroupPairInfoList?: Array<TargetGroupPairInfo>;
	}


	/** Information about a load balancer in Elastic Load Balancing to use in a deployment. Instances are registered directly with a load balancer, and traffic is routed to the load balancer. */
	export interface ELBInfo {
		name?: string;
	}


	/** Information about a target group in Elastic Load Balancing to use in a deployment. Instances are registered as targets in a target group, and traffic is routed to the target group. */
	export interface TargetGroupInfo {
		name?: string;
	}


	/**  Information about two target groups and how traffic is routed during an Amazon ECS deployment. An optional test traffic route can be specified.  */
	export interface TargetGroupPairInfo {
		targetGroups?: Array<TargetGroupInfo>;

		/** Information about a listener. The listener contains the path used to route traffic that is received from the load balancer to a target group. */
		prodTrafficRoute?: TrafficRoute;

		/** Information about a listener. The listener contains the path used to route traffic that is received from the load balancer to a target group. */
		testTrafficRoute?: TrafficRoute;
	}


	/**  Information about a listener. The listener contains the path used to route traffic that is received from the load balancer to a target group.  */
	export interface TrafficRoute {
		listenerArns?: Array<string>;
	}


	/** Information about the most recent attempted or successful deployment to a deployment group. */
	export interface LastDeploymentInfo {
		deploymentId?: string;
		status?: LastDeploymentInfoStatus;
		endTime?: Date;
		createTime?: Date;
	}

	export enum LastDeploymentInfoStatus { Created = 0, Queued = 1, InProgress = 2, Baking = 3, Succeeded = 4, Failed = 5, Stopped = 6, Ready = 7 }


	/** Information about groups of EC2 instance tags. */
	export interface EC2TagSet {
		ec2TagSetList?: Array<Array<EC2TagFilter>>;
	}


	/** Information about groups of on-premises instance tags. */
	export interface OnPremisesTagSet {
		onPremisesTagSetList?: Array<Array<TagFilter>>;
	}


	/**  Contains the service and cluster names used to identify an Amazon ECS deployment's target.  */
	export interface ECSService {
		serviceName?: string;
		clusterName?: string;
	}


	/** Represents the input of a <code>BatchGetDeploymentGroups</code> operation. */
	export interface BatchGetDeploymentGroupsInput {
		applicationName: string;
		deploymentGroupNames: Array<string>;
	}

	export interface DeploymentGroupNameRequiredException {
	}

	export interface InvalidDeploymentGroupNameException {
	}

	export interface DeploymentConfigDoesNotExistException {
	}


	/** Represents the output of a <code>BatchGetDeploymentInstances</code> operation. */
	export interface BatchGetDeploymentInstancesOutput {
		instancesSummary?: Array<InstanceSummary>;
		errorMessage?: string;
	}


	/** Information about an instance in a deployment.InstanceSummary is deprecated, use DeploymentTarget instead. */
	export interface InstanceSummary {
		deploymentId?: string;
		instanceId?: string;

		/** InstanceStatus is deprecated, use TargetStatus instead. */
		status?: InstanceSummaryStatus;
		lastUpdatedAt?: Date;
		lifecycleEvents?: Array<LifecycleEvent>;
		instanceType?: InstanceSummaryInstanceType;
	}

	export enum InstanceSummaryStatus { Pending = 0, InProgress = 1, Succeeded = 2, Failed = 3, Skipped = 4, Unknown = 5, Ready = 6 }


	/** Information about a deployment lifecycle event. */
	export interface LifecycleEvent {
		lifecycleEventName?: string;

		/** Diagnostic information about executable scripts that are part of a deployment. */
		diagnostics?: Diagnostics;
		startTime?: Date;
		endTime?: Date;
		status?: LifecycleEventStatus;
	}


	/** Diagnostic information about executable scripts that are part of a deployment. */
	export interface Diagnostics {
		errorCode?: DiagnosticsErrorCode;
		scriptName?: string;
		message?: string;
		logTail?: string;
	}

	export enum DiagnosticsErrorCode { Success = 0, ScriptMissing = 1, ScriptNotExecutable = 2, ScriptTimedOut = 3, ScriptFailed = 4, UnknownError = 5 }

	export enum LifecycleEventStatus { Pending = 0, InProgress = 1, Succeeded = 2, Failed = 3, Skipped = 4, Unknown = 5 }

	export enum InstanceSummaryInstanceType { Blue = 0, Green = 1 }


	/**  Represents the input of a <code>BatchGetDeploymentInstances</code> operation.  */
	export interface BatchGetDeploymentInstancesInput {
		deploymentId: string;
		instanceIds: Array<string>;
	}

	export interface DeploymentIdRequiredException {
	}

	export interface DeploymentDoesNotExistException {
	}

	export interface InstanceIdRequiredException {
	}

	export interface InvalidDeploymentIdException {
	}

	export interface InvalidComputePlatformException {
	}

	export interface BatchGetDeploymentTargetsOutput {
		deploymentTargets?: Array<DeploymentTarget>;
	}


	/**  Information about the deployment target.  */
	export interface DeploymentTarget {
		deploymentTargetType?: DeploymentTargetDeploymentTargetType;

		/** A target Amazon EC2 or on-premises instance during a deployment that uses the EC2/On-premises compute platform. */
		instanceTarget?: InstanceTarget;

		/** Information about the target AWS Lambda function during an AWS Lambda deployment. */
		lambdaTarget?: LambdaTarget;

		/** Information about the target of an Amazon ECS deployment. */
		ecsTarget?: ECSTarget;

		/** Information about the target to be updated by an AWS CloudFormation blue/green deployment. This target type is used for all deployments initiated by a CloudFormation stack update. */
		cloudFormationTarget?: CloudFormationTarget;
	}

	export enum DeploymentTargetDeploymentTargetType { InstanceTarget = 0, LambdaTarget = 1, ECSTarget = 2, CloudFormationTarget = 3 }


	/**  A target Amazon EC2 or on-premises instance during a deployment that uses the EC2/On-premises compute platform.  */
	export interface InstanceTarget {
		deploymentId?: string;
		targetId?: string;
		targetArn?: string;
		status?: InstanceSummaryStatus;
		lastUpdatedAt?: Date;
		lifecycleEvents?: Array<LifecycleEvent>;
		instanceLabel?: InstanceSummaryInstanceType;
	}


	/**  Information about the target AWS Lambda function during an AWS Lambda deployment.  */
	export interface LambdaTarget {
		deploymentId?: string;
		targetId?: string;
		targetArn?: string;
		status?: InstanceSummaryStatus;
		lastUpdatedAt?: Date;
		lifecycleEvents?: Array<LifecycleEvent>;

		/** Information about a Lambda function specified in a deployment. */
		lambdaFunctionInfo?: LambdaFunctionInfo;
	}


	/**  Information about a Lambda function specified in a deployment.  */
	export interface LambdaFunctionInfo {
		functionName?: string;
		functionAlias?: string;
		currentVersion?: string;
		targetVersion?: string;
		targetVersionWeight?: number;
	}


	/**  Information about the target of an Amazon ECS deployment.  */
	export interface ECSTarget {
		deploymentId?: string;
		targetId?: string;
		targetArn?: string;
		lastUpdatedAt?: Date;
		lifecycleEvents?: Array<LifecycleEvent>;
		status?: InstanceSummaryStatus;
		taskSetsInfo?: Array<ECSTaskSet>;
	}


	/**  Information about a set of Amazon ECS tasks in an AWS CodeDeploy deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. An AWS CodeDeploy application that uses the Amazon ECS compute platform deploys a containerized application in an Amazon ECS service as a task set.  */
	export interface ECSTaskSet {
		identifer?: string;
		desiredCount?: number;
		pendingCount?: number;
		runningCount?: number;
		status?: string;
		trafficWeight?: number;

		/** Information about a target group in Elastic Load Balancing to use in a deployment. Instances are registered as targets in a target group, and traffic is routed to the target group. */
		targetGroup?: TargetGroupInfo;
		taskSetLabel?: InstanceSummaryInstanceType;
	}


	/**  Information about the target to be updated by an AWS CloudFormation blue/green deployment. This target type is used for all deployments initiated by a CloudFormation stack update. */
	export interface CloudFormationTarget {
		deploymentId?: string;
		targetId?: string;
		lastUpdatedAt?: Date;
		lifecycleEvents?: Array<LifecycleEvent>;
		status?: InstanceSummaryStatus;
		resourceType?: string;
		targetVersionWeight?: number;
	}

	export interface BatchGetDeploymentTargetsInput {
		deploymentId?: string;
		targetIds?: Array<string>;
	}

	export interface DeploymentNotStartedException {
	}

	export interface DeploymentTargetIdRequiredException {
	}

	export interface InvalidDeploymentTargetIdException {
	}

	export interface DeploymentTargetDoesNotExistException {
	}

	export interface DeploymentTargetListSizeExceededException {
	}

	export interface InstanceDoesNotExistException {
	}


	/**  Represents the output of a <code>BatchGetDeployments</code> operation.  */
	export interface BatchGetDeploymentsOutput {
		deploymentsInfo?: Array<DeploymentInfo>;
	}


	/** Information about a deployment. */
	export interface DeploymentInfo {
		applicationName?: string;
		deploymentGroupName?: string;
		deploymentConfigName?: string;
		deploymentId?: string;

		/** Information about the location of an application revision. */
		previousRevision?: RevisionLocation;

		/** Information about the location of an application revision. */
		revision?: RevisionLocation;
		status?: LastDeploymentInfoStatus;

		/** Information about a deployment error. */
		errorInformation?: ErrorInformation;
		createTime?: Date;
		startTime?: Date;
		completeTime?: Date;

		/** Information about the deployment status of the instances in the deployment. */
		deploymentOverview?: DeploymentOverview;
		description?: string;
		creator?: DeploymentInfoCreator;
		ignoreApplicationStopFailures?: boolean;

		/** Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully. */
		autoRollbackConfiguration?: AutoRollbackConfiguration;
		updateOutdatedInstancesOnly?: boolean;

		/** Information about a deployment rollback. */
		rollbackInfo?: RollbackInfo;

		/** Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer. */
		deploymentStyle?: DeploymentStyle;

		/** Information about the instances to be used in the replacement environment in a blue/green deployment. */
		targetInstances?: TargetInstances;
		instanceTerminationWaitTimeStarted?: boolean;

		/** Information about blue/green deployment options for a deployment group. */
		blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

		/** Information about the Elastic Load Balancing load balancer or target group used in a deployment. */
		loadBalancerInfo?: LoadBalancerInfo;

		/** AdditionalDeploymentStatusInfo is deprecated, use DeploymentStatusMessageList instead. */
		additionalDeploymentStatusInfo?: string;
		fileExistsBehavior?: DeploymentInfoFileExistsBehavior;
		deploymentStatusMessages?: Array<string>;
		computePlatform?: ApplicationInfoComputePlatform;
		externalId?: string;
	}


	/** Information about a deployment error. */
	export interface ErrorInformation {
		code?: ErrorInformationCode;
		message?: string;
	}

	export enum ErrorInformationCode { AGENT_ISSUE = 0, ALARM_ACTIVE = 1, APPLICATION_MISSING = 2, AUTOSCALING_VALIDATION_ERROR = 3, AUTO_SCALING_CONFIGURATION = 4, AUTO_SCALING_IAM_ROLE_PERMISSIONS = 5, CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND = 6, CUSTOMER_APPLICATION_UNHEALTHY = 7, DEPLOYMENT_GROUP_MISSING = 8, ECS_UPDATE_ERROR = 9, ELASTIC_LOAD_BALANCING_INVALID = 10, ELB_INVALID_INSTANCE = 11, HEALTH_CONSTRAINTS = 12, HEALTH_CONSTRAINTS_INVALID = 13, HOOK_EXECUTION_FAILURE = 14, IAM_ROLE_MISSING = 15, IAM_ROLE_PERMISSIONS = 16, INTERNAL_ERROR = 17, INVALID_ECS_SERVICE = 18, INVALID_LAMBDA_CONFIGURATION = 19, INVALID_LAMBDA_FUNCTION = 20, INVALID_REVISION = 21, MANUAL_STOP = 22, MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION = 23, MISSING_ELB_INFORMATION = 24, MISSING_GITHUB_TOKEN = 25, NO_EC2_SUBSCRIPTION = 26, NO_INSTANCES = 27, OVER_MAX_INSTANCES = 28, RESOURCE_LIMIT_EXCEEDED = 29, REVISION_MISSING = 30, THROTTLED = 31, TIMEOUT = 32, CLOUDFORMATION_STACK_FAILURE = 33 }


	/** Information about the deployment status of the instances in the deployment. */
	export interface DeploymentOverview {
		Pending?: number;
		InProgress?: number;
		Succeeded?: number;
		Failed?: number;
		Skipped?: number;
		Ready?: number;
	}

	export enum DeploymentInfoCreator { user = 0, autoscaling = 1, codeDeployRollback = 2, CodeDeploy = 3, CloudFormation = 4, CloudFormationRollback = 5 }


	/** Information about a deployment rollback. */
	export interface RollbackInfo {
		rollbackDeploymentId?: string;
		rollbackTriggeringDeploymentId?: string;
		rollbackMessage?: string;
	}


	/** Information about the instances to be used in the replacement environment in a blue/green deployment. */
	export interface TargetInstances {
		tagFilters?: Array<EC2TagFilter>;
		autoScalingGroups?: Array<string>;

		/** Information about groups of EC2 instance tags. */
		ec2TagSet?: EC2TagSet;
	}

	export enum DeploymentInfoFileExistsBehavior { DISALLOW = 0, OVERWRITE = 1, RETAIN = 2 }


	/**  Represents the input of a <code>BatchGetDeployments</code> operation.  */
	export interface BatchGetDeploymentsInput {
		deploymentIds: Array<string>;
	}


	/** Represents the output of a <code>BatchGetOnPremisesInstances</code> operation. */
	export interface BatchGetOnPremisesInstancesOutput {
		instanceInfos?: Array<InstanceInfo>;
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


	/** Represents the input of a <code>BatchGetOnPremisesInstances</code> operation. */
	export interface BatchGetOnPremisesInstancesInput {
		instanceNames: Array<string>;
	}

	export interface ContinueDeploymentInput {
		deploymentId?: string;
		deploymentWaitType?: ContinueDeploymentInputDeploymentWaitType;
	}

	export enum ContinueDeploymentInputDeploymentWaitType { READY_WAIT = 0, TERMINATION_WAIT = 1 }

	export interface DeploymentAlreadyCompletedException {
	}

	export interface DeploymentIsNotInReadyStateException {
	}

	export interface UnsupportedActionForDeploymentTypeException {
	}

	export interface InvalidDeploymentWaitTypeException {
	}

	export interface InvalidDeploymentStatusException {
	}


	/** Represents the output of a <code>CreateApplication</code> operation. */
	export interface CreateApplicationOutput {
		applicationId?: string;
	}


	/** Represents the input of a <code>CreateApplication</code> operation. */
	export interface CreateApplicationInput {
		applicationName: string;
		computePlatform?: ApplicationInfoComputePlatform;
		tags?: Array<Tag>;
	}

	export interface ApplicationAlreadyExistsException {
	}

	export interface ApplicationLimitExceededException {
	}

	export interface InvalidTagsToAddException {
	}


	/**  Represents the output of a <code>CreateDeployment</code> operation.  */
	export interface CreateDeploymentOutput {
		deploymentId?: string;
	}


	/** Represents the input of a <code>CreateDeployment</code> operation. */
	export interface CreateDeploymentInput {
		applicationName: string;
		deploymentGroupName?: string;

		/** Information about the location of an application revision. */
		revision?: RevisionLocation;
		deploymentConfigName?: string;
		description?: string;
		ignoreApplicationStopFailures?: boolean;

		/** Information about the instances to be used in the replacement environment in a blue/green deployment. */
		targetInstances?: TargetInstances;

		/** Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully. */
		autoRollbackConfiguration?: AutoRollbackConfiguration;
		updateOutdatedInstancesOnly?: boolean;
		fileExistsBehavior?: DeploymentInfoFileExistsBehavior;
	}

	export interface DeploymentGroupDoesNotExistException {
	}

	export interface RevisionDoesNotExistException {
	}

	export interface InvalidDeploymentConfigNameException {
	}

	export interface DescriptionTooLongException {
	}

	export interface DeploymentLimitExceededException {
	}

	export interface InvalidTargetInstancesException {
	}

	export interface InvalidAutoRollbackConfigException {
	}

	export interface InvalidLoadBalancerInfoException {
	}

	export interface InvalidFileExistsBehaviorException {
	}

	export interface InvalidRoleException {
	}

	export interface InvalidAutoScalingGroupException {
	}

	export interface ThrottlingException {
	}

	export interface InvalidUpdateOutdatedInstancesOnlyValueException {
	}

	export interface InvalidIgnoreApplicationStopFailuresValueException {
	}

	export interface InvalidGitHubAccountTokenException {
	}

	export interface InvalidTrafficRoutingConfigurationException {
	}


	/** Represents the output of a <code>CreateDeploymentConfig</code> operation. */
	export interface CreateDeploymentConfigOutput {
		deploymentConfigId?: string;
	}


	/** Represents the input of a <code>CreateDeploymentConfig</code> operation. */
	export interface CreateDeploymentConfigInput {
		deploymentConfigName: string;

		/** Information about minimum healthy instance. */
		minimumHealthyHosts?: MinimumHealthyHosts;

		/** The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an AWS Lambda deployment, or from one Amazon ECS task set to another during an Amazon ECS deployment. */
		trafficRoutingConfig?: TrafficRoutingConfig;
		computePlatform?: ApplicationInfoComputePlatform;
	}


	/** Information about minimum healthy instance. */
	export interface MinimumHealthyHosts {
		value?: number;
		type?: MinimumHealthyHostsType;
	}

	export enum MinimumHealthyHostsType { HOST_COUNT = 0, FLEET_PERCENT = 1 }


	/** The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an AWS Lambda deployment, or from one Amazon ECS task set to another during an Amazon ECS deployment. */
	export interface TrafficRoutingConfig {
		type?: TrafficRoutingConfigType;

		/** A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in two increments. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file. */
		timeBasedCanary?: TimeBasedCanary;

		/** A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file. */
		timeBasedLinear?: TimeBasedLinear;
	}

	export enum TrafficRoutingConfigType { TimeBasedCanary = 0, TimeBasedLinear = 1, AllAtOnce = 2 }


	/** A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in two increments. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file. */
	export interface TimeBasedCanary {
		canaryPercentage?: number;
		canaryInterval?: number;
	}


	/** A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in equal increments, with an equal number of minutes between each increment. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file. */
	export interface TimeBasedLinear {
		linearPercentage?: number;
		linearInterval?: number;
	}

	export interface DeploymentConfigNameRequiredException {
	}

	export interface DeploymentConfigAlreadyExistsException {
	}

	export interface InvalidMinimumHealthyHostValueException {
	}

	export interface DeploymentConfigLimitExceededException {
	}


	/** Represents the output of a <code>CreateDeploymentGroup</code> operation. */
	export interface CreateDeploymentGroupOutput {
		deploymentGroupId?: string;
	}


	/** Represents the input of a <code>CreateDeploymentGroup</code> operation. */
	export interface CreateDeploymentGroupInput {
		applicationName: string;
		deploymentGroupName: string;
		deploymentConfigName?: string;
		ec2TagFilters?: Array<EC2TagFilter>;
		onPremisesInstanceTagFilters?: Array<TagFilter>;
		autoScalingGroups?: Array<string>;
		serviceRoleArn: string;
		triggerConfigurations?: Array<TriggerConfig>;

		/** Information about alarms associated with the deployment group. */
		alarmConfiguration?: AlarmConfiguration;

		/** Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully. */
		autoRollbackConfiguration?: AutoRollbackConfiguration;

		/** Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer. */
		deploymentStyle?: DeploymentStyle;

		/** Information about blue/green deployment options for a deployment group. */
		blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

		/** Information about the Elastic Load Balancing load balancer or target group used in a deployment. */
		loadBalancerInfo?: LoadBalancerInfo;

		/** Information about groups of EC2 instance tags. */
		ec2TagSet?: EC2TagSet;
		ecsServices?: Array<ECSService>;

		/** Information about groups of on-premises instance tags. */
		onPremisesTagSet?: OnPremisesTagSet;
		tags?: Array<Tag>;
	}

	export interface DeploymentGroupAlreadyExistsException {
	}

	export interface InvalidEC2TagException {
	}

	export interface RoleRequiredException {
	}

	export interface DeploymentGroupLimitExceededException {
	}

	export interface LifecycleHookLimitExceededException {
	}

	export interface InvalidTriggerConfigException {
	}

	export interface TriggerTargetsLimitExceededException {
	}

	export interface InvalidAlarmConfigException {
	}

	export interface AlarmsLimitExceededException {
	}

	export interface InvalidDeploymentStyleException {
	}

	export interface InvalidBlueGreenDeploymentConfigurationException {
	}

	export interface InvalidEC2TagCombinationException {
	}

	export interface InvalidOnPremisesTagCombinationException {
	}

	export interface TagSetListLimitExceededException {
	}

	export interface InvalidInputException {
	}

	export interface InvalidECSServiceException {
	}

	export interface InvalidTargetGroupPairException {
	}

	export interface ECSServiceMappingLimitExceededException {
	}


	/** Represents the input of a <code>DeleteApplication</code> operation. */
	export interface DeleteApplicationInput {
		applicationName: string;
	}


	/** Represents the input of a <code>DeleteDeploymentConfig</code> operation. */
	export interface DeleteDeploymentConfigInput {
		deploymentConfigName: string;
	}

	export interface DeploymentConfigInUseException {
	}

	export interface InvalidOperationException {
	}


	/** Represents the output of a <code>DeleteDeploymentGroup</code> operation. */
	export interface DeleteDeploymentGroupOutput {
		hooksNotCleanedUp?: Array<AutoScalingGroup>;
	}


	/** Represents the input of a <code>DeleteDeploymentGroup</code> operation. */
	export interface DeleteDeploymentGroupInput {
		applicationName: string;
		deploymentGroupName: string;
	}


	/** Represents the output of a <code>DeleteGitHubAccountToken</code> operation. */
	export interface DeleteGitHubAccountTokenOutput {
		tokenName?: string;
	}


	/** Represents the input of a <code>DeleteGitHubAccount</code> operation. */
	export interface DeleteGitHubAccountTokenInput {
		tokenName?: string;
	}

	export interface GitHubAccountTokenNameRequiredException {
	}

	export interface GitHubAccountTokenDoesNotExistException {
	}

	export interface InvalidGitHubAccountTokenNameException {
	}

	export interface ResourceValidationException {
	}

	export interface OperationNotSupportedException {
	}

	export interface DeleteResourcesByExternalIdOutput {
	}

	export interface DeleteResourcesByExternalIdInput {
		externalId?: string;
	}


	/** Represents the input of a <code>DeregisterOnPremisesInstance</code> operation. */
	export interface DeregisterOnPremisesInstanceInput {
		instanceName: string;
	}


	/** Represents the output of a <code>GetApplication</code> operation. */
	export interface GetApplicationOutput {

		/** Information about an application. */
		application?: ApplicationInfo;
	}


	/** Represents the input of a <code>GetApplication</code> operation. */
	export interface GetApplicationInput {
		applicationName: string;
	}


	/** Represents the output of a <code>GetApplicationRevision</code> operation. */
	export interface GetApplicationRevisionOutput {
		applicationName?: string;

		/** Information about the location of an application revision. */
		revision?: RevisionLocation;

		/** Information about an application revision. */
		revisionInfo?: GenericRevisionInfo;
	}


	/** Represents the input of a <code>GetApplicationRevision</code> operation. */
	export interface GetApplicationRevisionInput {
		applicationName: string;

		/**
		 * Information about the location of an application revision.
		 * Required
		 */
		revision: RevisionLocation;
	}


	/** Represents the output of a <code>GetDeployment</code> operation. */
	export interface GetDeploymentOutput {

		/** Information about a deployment. */
		deploymentInfo?: DeploymentInfo;
	}


	/** Represents the input of a <code>GetDeployment</code> operation. */
	export interface GetDeploymentInput {
		deploymentId: string;
	}


	/** Represents the output of a <code>GetDeploymentConfig</code> operation. */
	export interface GetDeploymentConfigOutput {

		/** Information about a deployment configuration. */
		deploymentConfigInfo?: DeploymentConfigInfo;
	}


	/** Information about a deployment configuration. */
	export interface DeploymentConfigInfo {
		deploymentConfigId?: string;
		deploymentConfigName?: string;

		/** Information about minimum healthy instance. */
		minimumHealthyHosts?: MinimumHealthyHosts;
		createTime?: Date;
		computePlatform?: ApplicationInfoComputePlatform;

		/** The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an AWS Lambda deployment, or from one Amazon ECS task set to another during an Amazon ECS deployment. */
		trafficRoutingConfig?: TrafficRoutingConfig;
	}


	/** Represents the input of a <code>GetDeploymentConfig</code> operation. */
	export interface GetDeploymentConfigInput {
		deploymentConfigName: string;
	}


	/** Represents the output of a <code>GetDeploymentGroup</code> operation. */
	export interface GetDeploymentGroupOutput {

		/** Information about a deployment group. */
		deploymentGroupInfo?: DeploymentGroupInfo;
	}


	/** Represents the input of a <code>GetDeploymentGroup</code> operation. */
	export interface GetDeploymentGroupInput {
		applicationName: string;
		deploymentGroupName: string;
	}


	/**  Represents the output of a <code>GetDeploymentInstance</code> operation.  */
	export interface GetDeploymentInstanceOutput {

		/** Information about an instance in a deployment.InstanceSummary is deprecated, use DeploymentTarget instead. */
		instanceSummary?: InstanceSummary;
	}


	/**  Represents the input of a <code>GetDeploymentInstance</code> operation.  */
	export interface GetDeploymentInstanceInput {
		deploymentId: string;
		instanceId: string;
	}

	export interface GetDeploymentTargetOutput {

		/** Information about the deployment target. */
		deploymentTarget?: DeploymentTarget;
	}

	export interface GetDeploymentTargetInput {
		deploymentId?: string;
		targetId?: string;
	}


	/**  Represents the output of a <code>GetOnPremisesInstance</code> operation.  */
	export interface GetOnPremisesInstanceOutput {

		/** Information about an on-premises instance. */
		instanceInfo?: InstanceInfo;
	}


	/**  Represents the input of a <code>GetOnPremisesInstance</code> operation.  */
	export interface GetOnPremisesInstanceInput {
		instanceName: string;
	}


	/** Represents the output of a <code>ListApplicationRevisions</code> operation. */
	export interface ListApplicationRevisionsOutput {
		revisions?: Array<RevisionLocation>;
		nextToken?: string;
	}


	/**  Represents the input of a <code>ListApplicationRevisions</code> operation.  */
	export interface ListApplicationRevisionsInput {
		applicationName: string;
		sortBy?: ListApplicationRevisionsInputSortBy;
		sortOrder?: ListApplicationRevisionsInputSortOrder;
		s3Bucket?: string;
		s3KeyPrefix?: string;
		deployed?: ListApplicationRevisionsInputDeployed;
		nextToken?: string;
	}

	export enum ListApplicationRevisionsInputSortBy { registerTime = 0, firstUsedTime = 1, lastUsedTime = 2 }

	export enum ListApplicationRevisionsInputSortOrder { ascending = 0, descending = 1 }

	export enum ListApplicationRevisionsInputDeployed { include = 0, exclude = 1, ignore = 2 }

	export interface InvalidSortByException {
	}

	export interface InvalidSortOrderException {
	}

	export interface InvalidBucketNameFilterException {
	}

	export interface InvalidKeyPrefixFilterException {
	}

	export interface BucketNameFilterRequiredException {
	}

	export interface InvalidDeployedStateFilterException {
	}

	export interface InvalidNextTokenException {
	}


	/** Represents the output of a ListApplications operation. */
	export interface ListApplicationsOutput {
		applications?: Array<string>;
		nextToken?: string;
	}


	/** Represents the input of a <code>ListApplications</code> operation. */
	export interface ListApplicationsInput {
		nextToken?: string;
	}


	/** Represents the output of a <code>ListDeploymentConfigs</code> operation. */
	export interface ListDeploymentConfigsOutput {
		deploymentConfigsList?: Array<string>;
		nextToken?: string;
	}


	/** Represents the input of a <code>ListDeploymentConfigs</code> operation. */
	export interface ListDeploymentConfigsInput {
		nextToken?: string;
	}


	/** Represents the output of a <code>ListDeploymentGroups</code> operation. */
	export interface ListDeploymentGroupsOutput {
		applicationName?: string;
		deploymentGroups?: Array<string>;
		nextToken?: string;
	}


	/** Represents the input of a <code>ListDeploymentGroups</code> operation. */
	export interface ListDeploymentGroupsInput {
		applicationName: string;
		nextToken?: string;
	}


	/** Represents the output of a <code>ListDeploymentInstances</code> operation. */
	export interface ListDeploymentInstancesOutput {
		instancesList?: Array<string>;
		nextToken?: string;
	}


	/**  Represents the input of a <code>ListDeploymentInstances</code> operation.  */
	export interface ListDeploymentInstancesInput {
		deploymentId: string;
		nextToken?: string;
		instanceStatusFilter?: Array<InstanceStatus>;
		instanceTypeFilter?: Array<InstanceType>;
	}


	/** InstanceStatus is deprecated, use TargetStatus instead. */
	export enum InstanceStatus { Pending = 0, InProgress = 1, Succeeded = 2, Failed = 3, Skipped = 4, Unknown = 5, Ready = 6 }

	export enum InstanceType { Blue = 0, Green = 1 }

	export interface InvalidInstanceStatusException {
	}

	export interface InvalidInstanceTypeException {
	}

	export interface InvalidDeploymentInstanceTypeException {
	}

	export interface InvalidTargetFilterNameException {
	}

	export interface ListDeploymentTargetsOutput {
		targetIds?: Array<string>;
		nextToken?: string;
	}

	export interface ListDeploymentTargetsInput {
		deploymentId?: string;
		nextToken?: string;
		targetFilters?: TargetFilters;
	}

	export interface TargetFilters {
	}


	/** Represents the output of a <code>ListDeployments</code> operation. */
	export interface ListDeploymentsOutput {
		deployments?: Array<string>;
		nextToken?: string;
	}


	/** Represents the input of a <code>ListDeployments</code> operation. */
	export interface ListDeploymentsInput {
		applicationName?: string;
		deploymentGroupName?: string;
		externalId?: string;
		includeOnlyStatuses?: Array<DeploymentStatus>;

		/** Information about a time range. */
		createTimeRange?: TimeRange;
		nextToken?: string;
	}

	export enum DeploymentStatus { Created = 0, Queued = 1, InProgress = 2, Baking = 3, Succeeded = 4, Failed = 5, Stopped = 6, Ready = 7 }


	/** Information about a time range. */
	export interface TimeRange {
		start?: Date;
		end?: Date;
	}

	export interface InvalidTimeRangeException {
	}

	export interface InvalidExternalIdException {
	}


	/** Represents the output of a <code>ListGitHubAccountTokenNames</code> operation. */
	export interface ListGitHubAccountTokenNamesOutput {
		tokenNameList?: Array<string>;
		nextToken?: string;
	}


	/** Represents the input of a <code>ListGitHubAccountTokenNames</code> operation. */
	export interface ListGitHubAccountTokenNamesInput {
		nextToken?: string;
	}


	/** Represents the output of the list on-premises instances operation. */
	export interface ListOnPremisesInstancesOutput {
		instanceNames?: Array<string>;
		nextToken?: string;
	}


	/** Represents the input of a <code>ListOnPremisesInstances</code> operation. */
	export interface ListOnPremisesInstancesInput {
		registrationStatus?: ListOnPremisesInstancesInputRegistrationStatus;
		tagFilters?: Array<TagFilter>;
		nextToken?: string;
	}

	export enum ListOnPremisesInstancesInputRegistrationStatus { Registered = 0, Deregistered = 1 }

	export interface InvalidRegistrationStatusException {
	}

	export interface InvalidTagFilterException {
	}

	export interface ListTagsForResourceOutput {
		Tags?: Array<Tag>;
		NextToken?: string;
	}

	export interface ListTagsForResourceInput {
		ResourceArn: string;
		NextToken?: string;
	}

	export interface ArnNotSupportedException {
	}

	export interface InvalidArnException {
	}

	export interface ResourceArnRequiredException {
	}

	export interface PutLifecycleEventHookExecutionStatusOutput {
		lifecycleEventHookExecutionId?: string;
	}

	export interface PutLifecycleEventHookExecutionStatusInput {
		deploymentId?: string;
		lifecycleEventHookExecutionId?: string;
		status?: LifecycleEventStatus;
	}

	export interface InvalidLifecycleEventHookExecutionStatusException {
	}

	export interface InvalidLifecycleEventHookExecutionIdException {
	}

	export interface LifecycleEventAlreadyCompletedException {
	}


	/** Represents the input of a RegisterApplicationRevision operation. */
	export interface RegisterApplicationRevisionInput {
		applicationName: string;
		description?: string;

		/**
		 * Information about the location of an application revision.
		 * Required
		 */
		revision: RevisionLocation;
	}


	/** Represents the input of the register on-premises instance operation. */
	export interface RegisterOnPremisesInstanceInput {
		instanceName: string;
		iamSessionArn?: string;
		iamUserArn?: string;
	}

	export interface InstanceNameAlreadyRegisteredException {
	}

	export interface IamArnRequiredException {
	}

	export interface IamSessionArnAlreadyRegisteredException {
	}

	export interface IamUserArnAlreadyRegisteredException {
	}

	export interface IamUserArnRequiredException {
	}

	export interface InvalidIamSessionArnException {
	}

	export interface InvalidIamUserArnException {
	}

	export interface MultipleIamArnsProvidedException {
	}


	/** Represents the input of a <code>RemoveTagsFromOnPremisesInstances</code> operation. */
	export interface RemoveTagsFromOnPremisesInstancesInput {
		tags: Array<Tag>;
		instanceNames: Array<string>;
	}

	export interface SkipWaitTimeForInstanceTerminationInput {
		deploymentId?: string;
	}


	/**  Represents the output of a <code>StopDeployment</code> operation.  */
	export interface StopDeploymentOutput {
		status?: StopDeploymentOutputStatus;
		statusMessage?: string;
	}

	export enum StopDeploymentOutputStatus { Pending = 0, Succeeded = 1 }


	/**  Represents the input of a <code>StopDeployment</code> operation.  */
	export interface StopDeploymentInput {
		deploymentId: string;
		autoRollbackEnabled?: boolean;
	}

	export interface TagResourceOutput {
	}

	export interface TagResourceInput {
		ResourceArn: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceOutput {
	}

	export interface UntagResourceInput {
		ResourceArn: string;
		TagKeys: Array<string>;
	}


	/** Represents the input of an <code>UpdateApplication</code> operation. */
	export interface UpdateApplicationInput {
		applicationName?: string;
		newApplicationName?: string;
	}


	/** Represents the output of an <code>UpdateDeploymentGroup</code> operation. */
	export interface UpdateDeploymentGroupOutput {
		hooksNotCleanedUp?: Array<AutoScalingGroup>;
	}


	/** Represents the input of an <code>UpdateDeploymentGroup</code> operation. */
	export interface UpdateDeploymentGroupInput {
		applicationName: string;
		currentDeploymentGroupName: string;
		newDeploymentGroupName?: string;
		deploymentConfigName?: string;
		ec2TagFilters?: Array<EC2TagFilter>;
		onPremisesInstanceTagFilters?: Array<TagFilter>;
		autoScalingGroups?: Array<string>;
		serviceRoleArn?: string;
		triggerConfigurations?: Array<TriggerConfig>;

		/** Information about alarms associated with the deployment group. */
		alarmConfiguration?: AlarmConfiguration;

		/** Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully. */
		autoRollbackConfiguration?: AutoRollbackConfiguration;

		/** Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer. */
		deploymentStyle?: DeploymentStyle;

		/** Information about blue/green deployment options for a deployment group. */
		blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;

		/** Information about the Elastic Load Balancing load balancer or target group used in a deployment. */
		loadBalancerInfo?: LoadBalancerInfo;

		/** Information about groups of EC2 instance tags. */
		ec2TagSet?: EC2TagSet;
		ecsServices?: Array<ECSService>;

		/** Information about groups of on-premises instance tags. */
		onPremisesTagSet?: OnPremisesTagSet;
	}

	export enum ComputePlatform { Server = 0, Lambda = 1, ECS = 2 }

	export enum ApplicationRevisionSortBy { registerTime = 0, firstUsedTime = 1, lastUsedTime = 2 }

	export enum InstanceAction { TERMINATE = 0, KEEP_ALIVE = 1 }

	export enum BundleType { tar = 0, tgz = 1, zip = 2, YAML = 3, JSON = 4 }

	export enum TargetStatus { Pending = 0, InProgress = 1, Succeeded = 2, Failed = 3, Skipped = 4, Unknown = 5, Ready = 6 }

	export enum DeploymentWaitType { READY_WAIT = 0, TERMINATION_WAIT = 1 }

	export enum FileExistsBehavior { DISALLOW = 0, OVERWRITE = 1, RETAIN = 2 }

	export enum DeploymentCreator { user = 0, autoscaling = 1, codeDeployRollback = 2, CodeDeploy = 3, CloudFormation = 4, CloudFormationRollback = 5 }

	export enum DeploymentOption { WITH_TRAFFIC_CONTROL = 0, WITHOUT_TRAFFIC_CONTROL = 1 }

	export enum DeploymentReadyAction { CONTINUE_DEPLOYMENT = 0, STOP_DEPLOYMENT = 1 }

	export enum DeploymentType { IN_PLACE = 0, BLUE_GREEN = 1 }

	export enum DeploymentTargetType { InstanceTarget = 0, LambdaTarget = 1, ECSTarget = 2, CloudFormationTarget = 3 }

	export enum LifecycleErrorCode { Success = 0, ScriptMissing = 1, ScriptNotExecutable = 2, ScriptTimedOut = 3, ScriptFailed = 4, UnknownError = 5 }

	export enum TargetLabel { Blue = 0, Green = 1 }

	export enum ErrorCode { AGENT_ISSUE = 0, ALARM_ACTIVE = 1, APPLICATION_MISSING = 2, AUTOSCALING_VALIDATION_ERROR = 3, AUTO_SCALING_CONFIGURATION = 4, AUTO_SCALING_IAM_ROLE_PERMISSIONS = 5, CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND = 6, CUSTOMER_APPLICATION_UNHEALTHY = 7, DEPLOYMENT_GROUP_MISSING = 8, ECS_UPDATE_ERROR = 9, ELASTIC_LOAD_BALANCING_INVALID = 10, ELB_INVALID_INSTANCE = 11, HEALTH_CONSTRAINTS = 12, HEALTH_CONSTRAINTS_INVALID = 13, HOOK_EXECUTION_FAILURE = 14, IAM_ROLE_MISSING = 15, IAM_ROLE_PERMISSIONS = 16, INTERNAL_ERROR = 17, INVALID_ECS_SERVICE = 18, INVALID_LAMBDA_CONFIGURATION = 19, INVALID_LAMBDA_FUNCTION = 20, INVALID_REVISION = 21, MANUAL_STOP = 22, MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION = 23, MISSING_ELB_INFORMATION = 24, MISSING_GITHUB_TOKEN = 25, NO_EC2_SUBSCRIPTION = 26, NO_INSTANCES = 27, OVER_MAX_INSTANCES = 28, RESOURCE_LIMIT_EXCEEDED = 29, REVISION_MISSING = 30, THROTTLED = 31, TIMEOUT = 32, CLOUDFORMATION_STACK_FAILURE = 33 }

	export enum GreenFleetProvisioningAction { DISCOVER_EXISTING = 0, COPY_AUTO_SCALING_GROUP = 1 }

	export enum SortOrder { ascending = 0, descending = 1 }

	export enum ListStateFilterAction { include = 0, exclude = 1, ignore = 2 }

	export enum RegistrationStatus { Registered = 0, Deregistered = 1 }

	export enum RevisionLocationType { S3 = 0, GitHub = 1, String = 2, AppSpecContent = 3 }

	export enum StopStatus { Pending = 0, Succeeded = 1 }

	export enum TagFilterType { KEY_ONLY = 0, VALUE_ONLY = 1, KEY_AND_VALUE = 2 }

	export enum TargetFilterName { TargetStatus = 0, ServerInstanceLabel = 1 }

	export enum TrafficRoutingType { TimeBasedCanary = 0, TimeBasedLinear = 1, AllAtOnce = 2 }

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
		 * <note> <p> This method works, but is deprecated. Use <code>BatchGetDeploymentTargets</code> instead. </p> </note> <p> Returns an array of one or more instances associated with a deployment. This method works with EC2/On-premises and AWS Lambda compute platforms. The newer <code>BatchGetDeploymentTargets</code> works with all compute platforms. The maximum number of instances that can be returned is 25.</p>
		 * Post #X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances
		 * @return {BatchGetDeploymentInstancesOutput} Success
		 */
		BatchGetDeploymentInstances(requestBody: BatchGetDeploymentInstancesInput): Observable<BatchGetDeploymentInstancesOutput> {
			return this.http.post<BatchGetDeploymentInstancesOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.BatchGetDeploymentInstances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be returned is 25.</p> <p> The type of targets returned depends on the deployment's compute platform or deployment method: </p> <ul> <li> <p> <b>EC2/On-premises</b>: Information about EC2 instance targets. </p> </li> <li> <p> <b>AWS Lambda</b>: Information about Lambda functions targets. </p> </li> <li> <p> <b>Amazon ECS</b>: Information about Amazon ECS service targets. </p> </li> <li> <p> <b>CloudFormation</b>: Information about targets of blue/green deployments initiated by a CloudFormation stack update.</p> </li> </ul>
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
		ListApplicationRevisions(nextToken: string, requestBody: ListApplicationRevisionsInput): Observable<ListApplicationRevisionsOutput> {
			return this.http.post<ListApplicationRevisionsOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.ListApplicationRevisions?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the applications registered with the IAM user or AWS account.
		 * Post #X-Amz-Target=CodeDeploy_20141006.ListApplications
		 * @param {string} nextToken Pagination token
		 * @return {ListApplicationsOutput} Success
		 */
		ListApplications(nextToken: string, requestBody: ListApplicationsInput): Observable<ListApplicationsOutput> {
			return this.http.post<ListApplicationsOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.ListApplications?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the deployment configurations with the IAM user or AWS account.
		 * Post #X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs
		 * @param {string} nextToken Pagination token
		 * @return {ListDeploymentConfigsOutput} Success
		 */
		ListDeploymentConfigs(nextToken: string, requestBody: ListDeploymentConfigsInput): Observable<ListDeploymentConfigsOutput> {
			return this.http.post<ListDeploymentConfigsOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.ListDeploymentConfigs?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the deployment groups for an application registered with the IAM user or AWS account.
		 * Post #X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups
		 * @param {string} nextToken Pagination token
		 * @return {ListDeploymentGroupsOutput} Success
		 */
		ListDeploymentGroups(nextToken: string, requestBody: ListDeploymentGroupsInput): Observable<ListDeploymentGroupsOutput> {
			return this.http.post<ListDeploymentGroupsOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.ListDeploymentGroups?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because it works with all compute types. <code>ListDeploymentInstances</code> throws an exception if it is used with a compute platform other than EC2/On-premises or AWS Lambda. </p> </note> <p> Lists the instance for a deployment associated with the IAM user or AWS account. </p>
		 * Post #X-Amz-Target=CodeDeploy_20141006.ListDeploymentInstances
		 * @param {string} nextToken Pagination token
		 * @return {ListDeploymentInstancesOutput} Success
		 */
		ListDeploymentInstances(nextToken: string, requestBody: ListDeploymentInstancesInput): Observable<ListDeploymentInstancesOutput> {
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
		 * Lists the deployments in a deployment group for an application registered with the IAM user or AWS account.
		 * Post #X-Amz-Target=CodeDeploy_20141006.ListDeployments
		 * @param {string} nextToken Pagination token
		 * @return {ListDeploymentsOutput} Success
		 */
		ListDeployments(nextToken: string, requestBody: ListDeploymentsInput): Observable<ListDeploymentsOutput> {
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
		 * Sets the result of a Lambda validation function. The function validates lifecycle hooks during a deployment that uses the AWS Lambda or Amazon ECS compute platform. For AWS Lambda deployments, the available lifecycle hooks are <code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>. For Amazon ECS deployments, the available lifecycle hooks are <code>BeforeInstall</code>, <code>AfterInstall</code>, <code>AfterAllowTestTraffic</code>, <code>BeforeAllowTraffic</code>, and <code>AfterAllowTraffic</code>. Lambda validation functions return <code>Succeeded</code> or <code>Failed</code>. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda">AppSpec 'hooks' Section for an AWS Lambda Deployment </a> and <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-ecs">AppSpec 'hooks' Section for an Amazon ECS Deployment</a>.
		 * Post #X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus
		 * @return {PutLifecycleEventHookExecutionStatusOutput} Success
		 */
		PutLifecycleEventHookExecutionStatus(requestBody: PutLifecycleEventHookExecutionStatusInput): Observable<PutLifecycleEventHookExecutionStatusOutput> {
			return this.http.post<PutLifecycleEventHookExecutionStatusOutput>(this.baseUri + '#X-Amz-Target=CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers with AWS CodeDeploy a revision for the specified application.
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

	export enum AddTagsToOnPremisesInstancesX_Amz_Target { CodeDeploy_20141006_AddTagsToOnPremisesInstances = 0 }

	export enum BatchGetApplicationRevisionsX_Amz_Target { CodeDeploy_20141006_BatchGetApplicationRevisions = 0 }

	export enum BatchGetApplicationsX_Amz_Target { CodeDeploy_20141006_BatchGetApplications = 0 }

	export enum BatchGetDeploymentGroupsX_Amz_Target { CodeDeploy_20141006_BatchGetDeploymentGroups = 0 }

	export enum BatchGetDeploymentInstancesX_Amz_Target { CodeDeploy_20141006_BatchGetDeploymentInstances = 0 }

	export enum BatchGetDeploymentTargetsX_Amz_Target { CodeDeploy_20141006_BatchGetDeploymentTargets = 0 }

	export enum BatchGetDeploymentsX_Amz_Target { CodeDeploy_20141006_BatchGetDeployments = 0 }

	export enum BatchGetOnPremisesInstancesX_Amz_Target { CodeDeploy_20141006_BatchGetOnPremisesInstances = 0 }

	export enum ContinueDeploymentX_Amz_Target { CodeDeploy_20141006_ContinueDeployment = 0 }

	export enum CreateApplicationX_Amz_Target { CodeDeploy_20141006_CreateApplication = 0 }

	export enum CreateDeploymentX_Amz_Target { CodeDeploy_20141006_CreateDeployment = 0 }

	export enum CreateDeploymentConfigX_Amz_Target { CodeDeploy_20141006_CreateDeploymentConfig = 0 }

	export enum CreateDeploymentGroupX_Amz_Target { CodeDeploy_20141006_CreateDeploymentGroup = 0 }

	export enum DeleteApplicationX_Amz_Target { CodeDeploy_20141006_DeleteApplication = 0 }

	export enum DeleteDeploymentConfigX_Amz_Target { CodeDeploy_20141006_DeleteDeploymentConfig = 0 }

	export enum DeleteDeploymentGroupX_Amz_Target { CodeDeploy_20141006_DeleteDeploymentGroup = 0 }

	export enum DeleteGitHubAccountTokenX_Amz_Target { CodeDeploy_20141006_DeleteGitHubAccountToken = 0 }

	export enum DeleteResourcesByExternalIdX_Amz_Target { CodeDeploy_20141006_DeleteResourcesByExternalId = 0 }

	export enum DeregisterOnPremisesInstanceX_Amz_Target { CodeDeploy_20141006_DeregisterOnPremisesInstance = 0 }

	export enum GetApplicationX_Amz_Target { CodeDeploy_20141006_GetApplication = 0 }

	export enum GetApplicationRevisionX_Amz_Target { CodeDeploy_20141006_GetApplicationRevision = 0 }

	export enum GetDeploymentX_Amz_Target { CodeDeploy_20141006_GetDeployment = 0 }

	export enum GetDeploymentConfigX_Amz_Target { CodeDeploy_20141006_GetDeploymentConfig = 0 }

	export enum GetDeploymentGroupX_Amz_Target { CodeDeploy_20141006_GetDeploymentGroup = 0 }

	export enum GetDeploymentInstanceX_Amz_Target { CodeDeploy_20141006_GetDeploymentInstance = 0 }

	export enum GetDeploymentTargetX_Amz_Target { CodeDeploy_20141006_GetDeploymentTarget = 0 }

	export enum GetOnPremisesInstanceX_Amz_Target { CodeDeploy_20141006_GetOnPremisesInstance = 0 }

	export enum ListApplicationRevisionsX_Amz_Target { CodeDeploy_20141006_ListApplicationRevisions = 0 }

	export enum ListApplicationsX_Amz_Target { CodeDeploy_20141006_ListApplications = 0 }

	export enum ListDeploymentConfigsX_Amz_Target { CodeDeploy_20141006_ListDeploymentConfigs = 0 }

	export enum ListDeploymentGroupsX_Amz_Target { CodeDeploy_20141006_ListDeploymentGroups = 0 }

	export enum ListDeploymentInstancesX_Amz_Target { CodeDeploy_20141006_ListDeploymentInstances = 0 }

	export enum ListDeploymentTargetsX_Amz_Target { CodeDeploy_20141006_ListDeploymentTargets = 0 }

	export enum ListDeploymentsX_Amz_Target { CodeDeploy_20141006_ListDeployments = 0 }

	export enum ListGitHubAccountTokenNamesX_Amz_Target { CodeDeploy_20141006_ListGitHubAccountTokenNames = 0 }

	export enum ListOnPremisesInstancesX_Amz_Target { CodeDeploy_20141006_ListOnPremisesInstances = 0 }

	export enum ListTagsForResourceX_Amz_Target { CodeDeploy_20141006_ListTagsForResource = 0 }

	export enum PutLifecycleEventHookExecutionStatusX_Amz_Target { CodeDeploy_20141006_PutLifecycleEventHookExecutionStatus = 0 }

	export enum RegisterApplicationRevisionX_Amz_Target { CodeDeploy_20141006_RegisterApplicationRevision = 0 }

	export enum RegisterOnPremisesInstanceX_Amz_Target { CodeDeploy_20141006_RegisterOnPremisesInstance = 0 }

	export enum RemoveTagsFromOnPremisesInstancesX_Amz_Target { CodeDeploy_20141006_RemoveTagsFromOnPremisesInstances = 0 }

	export enum SkipWaitTimeForInstanceTerminationX_Amz_Target { CodeDeploy_20141006_SkipWaitTimeForInstanceTermination = 0 }

	export enum StopDeploymentX_Amz_Target { CodeDeploy_20141006_StopDeployment = 0 }

	export enum TagResourceX_Amz_Target { CodeDeploy_20141006_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { CodeDeploy_20141006_UntagResource = 0 }

	export enum UpdateApplicationX_Amz_Target { CodeDeploy_20141006_UpdateApplication = 0 }

	export enum UpdateDeploymentGroupX_Amz_Target { CodeDeploy_20141006_UpdateDeploymentGroup = 0 }

}

