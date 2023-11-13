import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AssociateRoleToGroupResponse {
		AssociatedAt?: string | null;
	}

	export interface BadRequestException {
	}

	export interface InternalServerErrorException {
	}

	export interface AssociateServiceRoleToAccountResponse {
		AssociatedAt?: string | null;
	}

	export interface CreateConnectorDefinitionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		LastUpdatedTimestamp?: string | null;
		LatestVersion?: string | null;
		LatestVersionArn?: string | null;
		Name?: string | null;
	}


	/** Information about a connector. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services. */
	export interface Connector {
		ConnectorArn: string;
		Id: string;
		Parameters?: __mapOf__string | null;
	}

	export interface __mapOf__string {
	}

	export interface CreateConnectorDefinitionVersionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		Version?: string | null;
	}

	export interface CreateCoreDefinitionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		LastUpdatedTimestamp?: string | null;
		LatestVersion?: string | null;
		LatestVersionArn?: string | null;
		Name?: string | null;
	}


	/** Information about a core. */
	export interface Core {
		CertificateArn: string;
		Id: string;
		SyncShadow?: boolean | null;
		ThingArn: string;
	}

	export interface CreateCoreDefinitionVersionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		Version?: string | null;
	}

	export interface CreateDeploymentResponse {
		DeploymentArn?: string | null;
		DeploymentId?: string | null;
	}

	export interface CreateDeviceDefinitionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		LastUpdatedTimestamp?: string | null;
		LatestVersion?: string | null;
		LatestVersionArn?: string | null;
		Name?: string | null;
	}


	/** Information about a device. */
	export interface Device {
		CertificateArn: string;
		Id: string;
		SyncShadow?: boolean | null;
		ThingArn: string;
	}

	export interface CreateDeviceDefinitionVersionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		Version?: string | null;
	}

	export interface CreateFunctionDefinitionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		LastUpdatedTimestamp?: string | null;
		LatestVersion?: string | null;
		LatestVersionArn?: string | null;
		Name?: string | null;
	}


	/** The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings. */
	export interface FunctionDefaultConfig {

		/** Configuration information that specifies how a Lambda function runs. */
		Execution?: FunctionDefaultExecutionConfig | null;
	}


	/** Configuration information that specifies how a Lambda function runs.  */
	export interface FunctionDefaultExecutionConfig {

		/** Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group. */
		IsolationMode?: FunctionDefaultExecutionConfigIsolationMode | null;

		/** Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''. */
		RunAs?: FunctionRunAsConfig | null;
	}

	export enum FunctionDefaultExecutionConfigIsolationMode { GreengrassContainer = 0, NoContainer = 1 }


	/** Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''. */
	export interface FunctionRunAsConfig {
		Gid?: number | null;
		Uid?: number | null;
	}


	/** Information about a Lambda function. */
	export interface Function {
		FunctionArn?: string | null;

		/** The configuration of the Lambda function. */
		FunctionConfiguration?: FunctionConfiguration | null;
		Id: string;
	}


	/** The configuration of the Lambda function. */
	export interface FunctionConfiguration {
		EncodingType?: FunctionConfigurationEncodingType | null;

		/** The environment configuration of the function. */
		Environment?: FunctionConfigurationEnvironment | null;
		ExecArgs?: string | null;
		Executable?: string | null;
		MemorySize?: number | null;
		Pinned?: boolean | null;
		Timeout?: number | null;
	}

	export enum FunctionConfigurationEncodingType { binary = 0, json = 1 }


	/** The environment configuration of the function. */
	export interface FunctionConfigurationEnvironment {
		AccessSysfs?: boolean | null;

		/** Configuration information that specifies how a Lambda function runs. */
		Execution?: FunctionExecutionConfig | null;
		ResourceAccessPolicies?: Array<ResourceAccessPolicy> | null;
		Variables?: __mapOf__string | null;
	}


	/** Configuration information that specifies how a Lambda function runs.  */
	export interface FunctionExecutionConfig {

		/** Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group. */
		IsolationMode?: FunctionDefaultExecutionConfigIsolationMode | null;

		/** Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''. */
		RunAs?: FunctionRunAsConfig | null;
	}


	/** A policy used by the function to access a resource. */
	export interface ResourceAccessPolicy {

		/** The type of permission a function has to access a resource. */
		Permission?: ResourceAccessPolicyPermission | null;
		ResourceId: string;
	}

	export enum ResourceAccessPolicyPermission { ro = 0, rw = 1 }

	export interface CreateFunctionDefinitionVersionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		Version?: string | null;
	}

	export interface CreateGroupResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		LastUpdatedTimestamp?: string | null;
		LatestVersion?: string | null;
		LatestVersionArn?: string | null;
		Name?: string | null;
	}

	export interface CreateGroupCertificateAuthorityResponse {
		GroupCertificateAuthorityArn?: string | null;
	}

	export interface CreateGroupVersionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		Version?: string | null;
	}

	export interface CreateLoggerDefinitionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		LastUpdatedTimestamp?: string | null;
		LatestVersion?: string | null;
		LatestVersionArn?: string | null;
		Name?: string | null;
	}


	/** Information about a logger */
	export interface Logger {
		Component: LoggerComponent;
		Id: string;
		Level: LoggerLevel;
		Space?: number | null;
		Type: LoggerType;
	}

	export enum LoggerComponent { GreengrassSystem = 0, Lambda = 1 }

	export enum LoggerLevel { DEBUG = 0, INFO = 1, WARN = 2, ERROR = 3, FATAL = 4 }

	export enum LoggerType { FileSystem = 0, AWSCloudWatch = 1 }

	export interface CreateLoggerDefinitionVersionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		Version?: string | null;
	}

	export interface CreateResourceDefinitionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		LastUpdatedTimestamp?: string | null;
		LatestVersion?: string | null;
		LatestVersionArn?: string | null;
		Name?: string | null;
	}


	/** Information about a resource. */
	export interface Resource {
		Id: string;
		Name: string;

		/**
		 * A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData'', ''SecretsManagerSecretResourceData''.
		 * Required
		 */
		ResourceDataContainer: ResourceDataContainer;
	}


	/** A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData'', ''SecretsManagerSecretResourceData''. */
	export interface ResourceDataContainer {

		/** Attributes that define a local device resource. */
		LocalDeviceResourceData?: LocalDeviceResourceData | null;

		/** Attributes that define a local volume resource. */
		LocalVolumeResourceData?: LocalVolumeResourceData | null;

		/** Attributes that define an Amazon S3 machine learning resource. */
		S3MachineLearningModelResourceData?: S3MachineLearningModelResourceData | null;

		/** Attributes that define an Amazon SageMaker machine learning resource. */
		SageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceData | null;

		/** Attributes that define a secret resource, which references a secret from AWS Secrets Manager. AWS IoT Greengrass stores a local, encrypted copy of the secret on the Greengrass core, where it can be securely accessed by connectors and Lambda functions. */
		SecretsManagerSecretResourceData?: SecretsManagerSecretResourceData | null;
	}


	/** Attributes that define a local device resource. */
	export interface LocalDeviceResourceData {

		/** Group owner related settings for local resources. */
		GroupOwnerSetting?: GroupOwnerSetting | null;
		SourcePath?: string | null;
	}


	/** Group owner related settings for local resources. */
	export interface GroupOwnerSetting {
		AutoAddGroupOwner?: boolean | null;
		GroupOwner?: string | null;
	}


	/** Attributes that define a local volume resource. */
	export interface LocalVolumeResourceData {
		DestinationPath?: string | null;

		/** Group owner related settings for local resources. */
		GroupOwnerSetting?: GroupOwnerSetting | null;
		SourcePath?: string | null;
	}


	/** Attributes that define an Amazon S3 machine learning resource. */
	export interface S3MachineLearningModelResourceData {
		DestinationPath?: string | null;

		/** The owner setting for downloaded machine learning resources. */
		OwnerSetting?: ResourceDownloadOwnerSetting | null;
		S3Uri?: string | null;
	}


	/** The owner setting for downloaded machine learning resources. */
	export interface ResourceDownloadOwnerSetting {
		GroupOwner: string;

		/**
		 * The type of permission a function has to access a resource.
		 * Required
		 */
		GroupPermission: ResourceAccessPolicyPermission;
	}


	/** Attributes that define an Amazon SageMaker machine learning resource. */
	export interface SageMakerMachineLearningModelResourceData {
		DestinationPath?: string | null;

		/** The owner setting for downloaded machine learning resources. */
		OwnerSetting?: ResourceDownloadOwnerSetting | null;
		SageMakerJobArn?: string | null;
	}


	/** Attributes that define a secret resource, which references a secret from AWS Secrets Manager. AWS IoT Greengrass stores a local, encrypted copy of the secret on the Greengrass core, where it can be securely accessed by connectors and Lambda functions. */
	export interface SecretsManagerSecretResourceData {
		ARN?: string | null;
		AdditionalStagingLabelsToDownload?: Array<string> | null;
	}

	export interface CreateResourceDefinitionVersionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		Version?: string | null;
	}

	export interface CreateSoftwareUpdateJobResponse {
		IotJobArn?: string | null;
		IotJobId?: string | null;
		PlatformSoftwareVersion?: string | null;
	}

	export interface CreateSubscriptionDefinitionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		LastUpdatedTimestamp?: string | null;
		LatestVersion?: string | null;
		LatestVersionArn?: string | null;
		Name?: string | null;
	}


	/** Information about a subscription. */
	export interface Subscription {
		Id: string;
		Source: string;
		Subject: string;
		Target: string;
	}

	export interface CreateSubscriptionDefinitionVersionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		Version?: string | null;
	}

	export interface DeleteConnectorDefinitionResponse {
	}

	export interface DeleteCoreDefinitionResponse {
	}

	export interface DeleteDeviceDefinitionResponse {
	}

	export interface DeleteFunctionDefinitionResponse {
	}

	export interface DeleteGroupResponse {
	}

	export interface DeleteLoggerDefinitionResponse {
	}

	export interface DeleteResourceDefinitionResponse {
	}

	export interface DeleteSubscriptionDefinitionResponse {
	}

	export interface DisassociateRoleFromGroupResponse {
		DisassociatedAt?: string | null;
	}

	export interface DisassociateServiceRoleFromAccountResponse {
		DisassociatedAt?: string | null;
	}

	export interface GetAssociatedRoleResponse {
		AssociatedAt?: string | null;
		RoleArn?: string | null;
	}

	export interface GetBulkDeploymentStatusResponse {

		/** Relevant metrics on input records processed during bulk deployment. */
		BulkDeploymentMetrics?: BulkDeploymentMetrics | null;

		/** The current status of the bulk deployment. */
		BulkDeploymentStatus?: GetBulkDeploymentStatusResponseBulkDeploymentStatus | null;
		CreatedAt?: string | null;

		/** A list of error details. */
		ErrorDetails?: Array<ErrorDetail> | null;
		ErrorMessage?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: Tags | null;
	}


	/** Relevant metrics on input records processed during bulk deployment. */
	export interface BulkDeploymentMetrics {
		InvalidInputRecords?: number | null;
		RecordsProcessed?: number | null;
		RetryAttempts?: number | null;
	}

	export enum GetBulkDeploymentStatusResponseBulkDeploymentStatus { Initializing = 0, Running = 1, Completed = 2, Stopping = 3, Stopped = 4, Failed = 5 }


	/** Details about the error. */
	export interface ErrorDetail {
		DetailedErrorCode?: string | null;
		DetailedErrorMessage?: string | null;
	}


	/** The key-value pair for the resource tag. */
	export interface Tags {
	}

	export interface GetConnectivityInfoResponse {
		ConnectivityInfo?: Array<ConnectivityInfo> | null;
		Message?: string | null;
	}


	/** Information about a Greengrass core's connectivity. */
	export interface ConnectivityInfo {
		HostAddress?: string | null;
		Id?: string | null;
		Metadata?: string | null;
		PortNumber?: number | null;
	}

	export interface GetConnectorDefinitionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		LastUpdatedTimestamp?: string | null;
		LatestVersion?: string | null;
		LatestVersionArn?: string | null;
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: Tags | null;
	}

	export interface GetConnectorDefinitionVersionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;

		/** Information about the connector definition version, which is a container for connectors. */
		Definition?: ConnectorDefinitionVersion | null;
		Id?: string | null;
		NextToken?: string | null;
		Version?: string | null;
	}


	/** Information about the connector definition version, which is a container for connectors. */
	export interface ConnectorDefinitionVersion {
		Connectors?: Array<Connector> | null;
	}

	export interface GetCoreDefinitionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		LastUpdatedTimestamp?: string | null;
		LatestVersion?: string | null;
		LatestVersionArn?: string | null;
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: Tags | null;
	}

	export interface GetCoreDefinitionVersionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;

		/** Information about a core definition version. */
		Definition?: CoreDefinitionVersion | null;
		Id?: string | null;
		NextToken?: string | null;
		Version?: string | null;
	}


	/** Information about a core definition version. */
	export interface CoreDefinitionVersion {
		Cores?: Array<Core> | null;
	}

	export interface GetDeploymentStatusResponse {
		DeploymentStatus?: string | null;

		/** The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid. */
		DeploymentType?: GetDeploymentStatusResponseDeploymentType | null;

		/** A list of error details. */
		ErrorDetails?: Array<ErrorDetail> | null;
		ErrorMessage?: string | null;
		UpdatedAt?: string | null;
	}

	export enum GetDeploymentStatusResponseDeploymentType { NewDeployment = 0, Redeployment = 1, ResetDeployment = 2, ForceResetDeployment = 3 }

	export interface GetDeviceDefinitionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		LastUpdatedTimestamp?: string | null;
		LatestVersion?: string | null;
		LatestVersionArn?: string | null;
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: Tags | null;
	}

	export interface GetDeviceDefinitionVersionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;

		/** Information about a device definition version. */
		Definition?: DeviceDefinitionVersion | null;
		Id?: string | null;
		NextToken?: string | null;
		Version?: string | null;
	}


	/** Information about a device definition version. */
	export interface DeviceDefinitionVersion {
		Devices?: Array<Device> | null;
	}

	export interface GetFunctionDefinitionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		LastUpdatedTimestamp?: string | null;
		LatestVersion?: string | null;
		LatestVersionArn?: string | null;
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: Tags | null;
	}

	export interface GetFunctionDefinitionVersionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;

		/** Information about a function definition version. */
		Definition?: FunctionDefinitionVersion | null;
		Id?: string | null;
		NextToken?: string | null;
		Version?: string | null;
	}


	/** Information about a function definition version. */
	export interface FunctionDefinitionVersion {

		/** The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings. */
		DefaultConfig?: FunctionDefaultConfig | null;
		Functions?: Array<Function> | null;
	}

	export interface GetGroupResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		LastUpdatedTimestamp?: string | null;
		LatestVersion?: string | null;
		LatestVersionArn?: string | null;
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: Tags | null;
	}

	export interface GetGroupCertificateAuthorityResponse {
		GroupCertificateAuthorityArn?: string | null;
		GroupCertificateAuthorityId?: string | null;
		PemEncodedCertificate?: string | null;
	}

	export interface GetGroupCertificateConfigurationResponse {
		CertificateAuthorityExpiryInMilliseconds?: string | null;
		CertificateExpiryInMilliseconds?: string | null;
		GroupId?: string | null;
	}

	export interface GetGroupVersionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;

		/** Information about a group version. */
		Definition?: GroupVersion | null;
		Id?: string | null;
		Version?: string | null;
	}


	/** Information about a group version. */
	export interface GroupVersion {
		ConnectorDefinitionVersionArn?: string | null;
		CoreDefinitionVersionArn?: string | null;
		DeviceDefinitionVersionArn?: string | null;
		FunctionDefinitionVersionArn?: string | null;
		LoggerDefinitionVersionArn?: string | null;
		ResourceDefinitionVersionArn?: string | null;
		SubscriptionDefinitionVersionArn?: string | null;
	}

	export interface GetLoggerDefinitionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		LastUpdatedTimestamp?: string | null;
		LatestVersion?: string | null;
		LatestVersionArn?: string | null;
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: Tags | null;
	}

	export interface GetLoggerDefinitionVersionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;

		/** Information about a logger definition version. */
		Definition?: LoggerDefinitionVersion | null;
		Id?: string | null;
		Version?: string | null;
	}


	/** Information about a logger definition version. */
	export interface LoggerDefinitionVersion {
		Loggers?: Array<Logger> | null;
	}

	export interface GetResourceDefinitionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		LastUpdatedTimestamp?: string | null;
		LatestVersion?: string | null;
		LatestVersionArn?: string | null;
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: Tags | null;
	}

	export interface GetResourceDefinitionVersionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;

		/** Information about a resource definition version. */
		Definition?: ResourceDefinitionVersion | null;
		Id?: string | null;
		Version?: string | null;
	}


	/** Information about a resource definition version. */
	export interface ResourceDefinitionVersion {
		Resources?: Array<Resource> | null;
	}

	export interface GetServiceRoleForAccountResponse {
		AssociatedAt?: string | null;
		RoleArn?: string | null;
	}

	export interface GetSubscriptionDefinitionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		LastUpdatedTimestamp?: string | null;
		LatestVersion?: string | null;
		LatestVersionArn?: string | null;
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: Tags | null;
	}

	export interface GetSubscriptionDefinitionVersionResponse {
		Arn?: string | null;
		CreationTimestamp?: string | null;

		/** Information about a subscription definition version. */
		Definition?: SubscriptionDefinitionVersion | null;
		Id?: string | null;
		NextToken?: string | null;
		Version?: string | null;
	}


	/** Information about a subscription definition version. */
	export interface SubscriptionDefinitionVersion {
		Subscriptions?: Array<Subscription> | null;
	}

	export interface ListBulkDeploymentDetailedReportsResponse {
		Deployments?: Array<BulkDeploymentResult> | null;
		NextToken?: string | null;
	}


	/** Information about an individual group deployment in a bulk deployment operation. */
	export interface BulkDeploymentResult {
		CreatedAt?: string | null;
		DeploymentArn?: string | null;
		DeploymentId?: string | null;
		DeploymentStatus?: string | null;

		/** The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid. */
		DeploymentType?: GetDeploymentStatusResponseDeploymentType | null;

		/** A list of error details. */
		ErrorDetails?: Array<ErrorDetail> | null;
		ErrorMessage?: string | null;
		GroupArn?: string | null;
	}

	export interface ListBulkDeploymentsResponse {
		BulkDeployments?: Array<BulkDeployment> | null;
		NextToken?: string | null;
	}


	/** Information about a bulk deployment. You cannot start a new bulk deployment while another one is still running or in a non-terminal state. */
	export interface BulkDeployment {
		BulkDeploymentArn?: string | null;
		BulkDeploymentId?: string | null;
		CreatedAt?: string | null;
	}

	export interface ListConnectorDefinitionVersionsResponse {
		NextToken?: string | null;
		Versions?: Array<VersionInformation> | null;
	}


	/** Information about a version. */
	export interface VersionInformation {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		Version?: string | null;
	}

	export interface ListConnectorDefinitionsResponse {
		Definitions?: Array<DefinitionInformation> | null;
		NextToken?: string | null;
	}


	/** Information about a definition. */
	export interface DefinitionInformation {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		LastUpdatedTimestamp?: string | null;
		LatestVersion?: string | null;
		LatestVersionArn?: string | null;
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		Tags?: Tags | null;
	}

	export interface ListCoreDefinitionVersionsResponse {
		NextToken?: string | null;
		Versions?: Array<VersionInformation> | null;
	}

	export interface ListCoreDefinitionsResponse {
		Definitions?: Array<DefinitionInformation> | null;
		NextToken?: string | null;
	}

	export interface ListDeploymentsResponse {
		Deployments?: Array<Deployment> | null;
		NextToken?: string | null;
	}


	/** Information about a deployment. */
	export interface Deployment {
		CreatedAt?: string | null;
		DeploymentArn?: string | null;
		DeploymentId?: string | null;

		/** The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid. */
		DeploymentType?: GetDeploymentStatusResponseDeploymentType | null;
		GroupArn?: string | null;
	}

	export interface ListDeviceDefinitionVersionsResponse {
		NextToken?: string | null;
		Versions?: Array<VersionInformation> | null;
	}

	export interface ListDeviceDefinitionsResponse {
		Definitions?: Array<DefinitionInformation> | null;
		NextToken?: string | null;
	}

	export interface ListFunctionDefinitionVersionsResponse {
		NextToken?: string | null;
		Versions?: Array<VersionInformation> | null;
	}

	export interface ListFunctionDefinitionsResponse {
		Definitions?: Array<DefinitionInformation> | null;
		NextToken?: string | null;
	}

	export interface ListGroupCertificateAuthoritiesResponse {
		GroupCertificateAuthorities?: Array<GroupCertificateAuthorityProperties> | null;
	}


	/** Information about a certificate authority for a group. */
	export interface GroupCertificateAuthorityProperties {
		GroupCertificateAuthorityArn?: string | null;
		GroupCertificateAuthorityId?: string | null;
	}

	export interface ListGroupVersionsResponse {
		NextToken?: string | null;
		Versions?: Array<VersionInformation> | null;
	}

	export interface ListGroupsResponse {
		Groups?: Array<GroupInformation> | null;
		NextToken?: string | null;
	}


	/** Information about a group. */
	export interface GroupInformation {
		Arn?: string | null;
		CreationTimestamp?: string | null;
		Id?: string | null;
		LastUpdatedTimestamp?: string | null;
		LatestVersion?: string | null;
		LatestVersionArn?: string | null;
		Name?: string | null;
	}

	export interface ListLoggerDefinitionVersionsResponse {
		NextToken?: string | null;
		Versions?: Array<VersionInformation> | null;
	}

	export interface ListLoggerDefinitionsResponse {
		Definitions?: Array<DefinitionInformation> | null;
		NextToken?: string | null;
	}

	export interface ListResourceDefinitionVersionsResponse {
		NextToken?: string | null;
		Versions?: Array<VersionInformation> | null;
	}

	export interface ListResourceDefinitionsResponse {
		Definitions?: Array<DefinitionInformation> | null;
		NextToken?: string | null;
	}

	export interface ListSubscriptionDefinitionVersionsResponse {
		NextToken?: string | null;
		Versions?: Array<VersionInformation> | null;
	}

	export interface ListSubscriptionDefinitionsResponse {
		Definitions?: Array<DefinitionInformation> | null;
		NextToken?: string | null;
	}

	export interface ListTagsForResourceResponse {

		/** The key-value pair for the resource tag. */
		tags?: Tags | null;
	}

	export interface ResetDeploymentsResponse {
		DeploymentArn?: string | null;
		DeploymentId?: string | null;
	}

	export interface StartBulkDeploymentResponse {
		BulkDeploymentArn?: string | null;
		BulkDeploymentId?: string | null;
	}

	export interface StopBulkDeploymentResponse {
	}

	export interface UpdateConnectivityInfoResponse {
		Message?: string | null;
		Version?: string | null;
	}

	export interface UpdateConnectorDefinitionResponse {
	}

	export interface UpdateCoreDefinitionResponse {
	}

	export interface UpdateDeviceDefinitionResponse {
	}

	export interface UpdateFunctionDefinitionResponse {
	}

	export interface UpdateGroupResponse {
	}

	export interface UpdateGroupCertificateConfigurationResponse {
		CertificateAuthorityExpiryInMilliseconds?: string | null;
		CertificateExpiryInMilliseconds?: string | null;
		GroupId?: string | null;
	}

	export interface UpdateLoggerDefinitionResponse {
	}

	export interface UpdateResourceDefinitionResponse {
	}

	export interface UpdateSubscriptionDefinitionResponse {
	}

	export interface AssociateRoleToGroupRequest {
		RoleArn: string;
	}

	export interface AssociateServiceRoleToAccountRequest {
		RoleArn: string;
	}


	/** The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid. */
	export enum DeploymentType { NewDeployment = 0, Redeployment = 1, ResetDeployment = 2, ForceResetDeployment = 3 }


	/** The current status of the bulk deployment. */
	export enum BulkDeploymentStatus { Initializing = 0, Running = 1, Completed = 2, Stopping = 3, Stopped = 4, Failed = 5 }

	export interface CreateConnectorDefinitionRequest {

		/** Information about the connector definition version, which is a container for connectors. */
		InitialVersion?: ConnectorDefinitionVersion | null;
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: Tags | null;
	}

	export interface CreateConnectorDefinitionVersionRequest {
		Connectors?: Array<Connector> | null;
	}


	/** Information needed to create a core definition. */
	export interface CreateCoreDefinitionRequest {

		/** Information about a core definition version. */
		InitialVersion?: CoreDefinitionVersion | null;
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: Tags | null;
	}

	export interface CreateCoreDefinitionVersionRequest {
		Cores?: Array<Core> | null;
	}

	export interface CreateDeploymentRequest {
		DeploymentId?: string | null;

		/**
		 * The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid.
		 * Required
		 */
		DeploymentType: GetDeploymentStatusResponseDeploymentType;
		GroupVersionId?: string | null;
	}

	export interface CreateDeviceDefinitionRequest {

		/** Information about a device definition version. */
		InitialVersion?: DeviceDefinitionVersion | null;
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: Tags | null;
	}

	export interface CreateDeviceDefinitionVersionRequest {
		Devices?: Array<Device> | null;
	}

	export interface CreateFunctionDefinitionRequest {

		/** Information about a function definition version. */
		InitialVersion?: FunctionDefinitionVersion | null;
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: Tags | null;
	}


	/** Information needed to create a function definition version. */
	export interface CreateFunctionDefinitionVersionRequest {

		/** The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings. */
		DefaultConfig?: FunctionDefaultConfig | null;
		Functions?: Array<Function> | null;
	}

	export interface CreateGroupCertificateAuthorityRequest {
	}

	export interface CreateGroupRequest {

		/** Information about a group version. */
		InitialVersion?: GroupVersion | null;
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: Tags | null;
	}

	export interface CreateGroupVersionRequest {
		ConnectorDefinitionVersionArn?: string | null;
		CoreDefinitionVersionArn?: string | null;
		DeviceDefinitionVersionArn?: string | null;
		FunctionDefinitionVersionArn?: string | null;
		LoggerDefinitionVersionArn?: string | null;
		ResourceDefinitionVersionArn?: string | null;
		SubscriptionDefinitionVersionArn?: string | null;
	}

	export interface CreateLoggerDefinitionRequest {

		/** Information about a logger definition version. */
		InitialVersion?: LoggerDefinitionVersion | null;
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: Tags | null;
	}

	export interface CreateLoggerDefinitionVersionRequest {
		Loggers?: Array<Logger> | null;
	}

	export interface CreateResourceDefinitionRequest {

		/** Information about a resource definition version. */
		InitialVersion?: ResourceDefinitionVersion | null;
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: Tags | null;
	}

	export interface CreateResourceDefinitionVersionRequest {
		Resources?: Array<Resource> | null;
	}


	/** The piece of software on the Greengrass core that will be updated. */
	export enum SoftwareToUpdate { core = 0, ota_agent = 1 }


	/** The minimum level of log statements that should be logged by the OTA Agent during an update. */
	export enum UpdateAgentLogLevel { NONE = 0, TRACE = 1, DEBUG = 2, VERBOSE = 3, INFO = 4, WARN = 5, ERROR = 6, FATAL = 7 }


	/** The architecture of the cores which are the targets of an update. */
	export enum UpdateTargetsArchitecture { armv6l = 0, armv7l = 1, x86_64 = 2, aarch64 = 3 }


	/** The operating system of the cores which are the targets of an update. */
	export enum UpdateTargetsOperatingSystem { ubuntu = 0, raspbian = 1, amazon_linux = 2, openwrt = 3 }

	export interface CreateSoftwareUpdateJobRequest {

		/**
		 * The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.
		 * Required
		 */
		S3UrlSignerRole: string;

		/**
		 * The piece of software on the Greengrass core that will be updated.
		 * Required
		 */
		SoftwareToUpdate: SoftwareToUpdate;

		/** The minimum level of log statements that should be logged by the OTA Agent during an update. */
		UpdateAgentLogLevel?: UpdateAgentLogLevel | null;

		/**
		 * The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.
		 * Required
		 */
		UpdateTargets: Array<string>;

		/**
		 * The architecture of the cores which are the targets of an update.
		 * Required
		 */
		UpdateTargetsArchitecture: UpdateTargetsArchitecture;

		/**
		 * The operating system of the cores which are the targets of an update.
		 * Required
		 */
		UpdateTargetsOperatingSystem: UpdateTargetsOperatingSystem;
	}

	export interface CreateSubscriptionDefinitionRequest {

		/** Information about a subscription definition version. */
		InitialVersion?: SubscriptionDefinitionVersion | null;
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: Tags | null;
	}

	export interface CreateSubscriptionDefinitionVersionRequest {
		Subscriptions?: Array<Subscription> | null;
	}

	export interface DeleteConnectorDefinitionRequest {
	}

	export interface DeleteCoreDefinitionRequest {
	}

	export interface DeleteDeviceDefinitionRequest {
	}

	export interface DeleteFunctionDefinitionRequest {
	}

	export interface DeleteGroupRequest {
	}

	export interface DeleteLoggerDefinitionRequest {
	}

	export interface DeleteResourceDefinitionRequest {
	}

	export interface DeleteSubscriptionDefinitionRequest {
	}

	export interface DisassociateRoleFromGroupRequest {
	}

	export interface DisassociateServiceRoleFromAccountRequest {
	}

	export enum EncodingType { binary = 0, json = 1 }


	/** Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group. */
	export enum FunctionIsolationMode { GreengrassContainer = 0, NoContainer = 1 }

	export interface GetAssociatedRoleRequest {
	}

	export interface GetBulkDeploymentStatusRequest {
	}

	export interface GetConnectivityInfoRequest {
	}

	export interface GetConnectorDefinitionRequest {
	}

	export interface GetConnectorDefinitionVersionRequest {
	}

	export interface GetCoreDefinitionRequest {
	}

	export interface GetCoreDefinitionVersionRequest {
	}

	export interface GetDeploymentStatusRequest {
	}

	export interface GetDeviceDefinitionRequest {
	}

	export interface GetDeviceDefinitionVersionRequest {
	}

	export interface GetFunctionDefinitionRequest {
	}

	export interface GetFunctionDefinitionVersionRequest {
	}

	export interface GetGroupCertificateAuthorityRequest {
	}

	export interface GetGroupCertificateConfigurationRequest {
	}

	export interface GetGroupRequest {
	}

	export interface GetGroupVersionRequest {
	}

	export interface GetLoggerDefinitionRequest {
	}

	export interface GetLoggerDefinitionVersionRequest {
	}

	export interface GetResourceDefinitionRequest {
	}

	export interface GetResourceDefinitionVersionRequest {
	}

	export interface GetServiceRoleForAccountRequest {
	}

	export interface GetSubscriptionDefinitionRequest {
	}

	export interface GetSubscriptionDefinitionVersionRequest {
	}

	export interface ListBulkDeploymentDetailedReportsRequest {
	}

	export interface ListBulkDeploymentsRequest {
	}

	export interface ListConnectorDefinitionVersionsRequest {
	}

	export interface ListConnectorDefinitionsRequest {
	}

	export interface ListCoreDefinitionVersionsRequest {
	}

	export interface ListCoreDefinitionsRequest {
	}

	export interface ListDeploymentsRequest {
	}

	export interface ListDeviceDefinitionVersionsRequest {
	}

	export interface ListDeviceDefinitionsRequest {
	}

	export interface ListFunctionDefinitionVersionsRequest {
	}

	export interface ListFunctionDefinitionsRequest {
	}

	export interface ListGroupCertificateAuthoritiesRequest {
	}

	export interface ListGroupVersionsRequest {
	}

	export interface ListGroupsRequest {
	}

	export interface ListLoggerDefinitionVersionsRequest {
	}

	export interface ListLoggerDefinitionsRequest {
	}

	export interface ListResourceDefinitionVersionsRequest {
	}

	export interface ListResourceDefinitionsRequest {
	}

	export interface ListSubscriptionDefinitionVersionsRequest {
	}

	export interface ListSubscriptionDefinitionsRequest {
	}

	export interface ListTagsForResourceRequest {
	}


	/** The type of permission a function has to access a resource. */
	export enum Permission { ro = 0, rw = 1 }


	/** Information needed to reset deployments. */
	export interface ResetDeploymentsRequest {
		Force?: boolean | null;
	}

	export interface StartBulkDeploymentRequest {
		ExecutionRoleArn: string;
		InputFileUri: string;

		/** The key-value pair for the resource tag. */
		tags?: Tags | null;
	}

	export interface StopBulkDeploymentRequest {
	}


	/** A map of the key-value pairs for the resource tag. */
	export interface TagResourceRequest {

		/** The key-value pair for the resource tag. */
		tags?: Tags | null;
	}

	export interface UntagResourceRequest {
	}


	/** Connectivity information. */
	export interface UpdateConnectivityInfoRequest {
		ConnectivityInfo?: Array<ConnectivityInfo> | null;
	}

	export interface UpdateConnectorDefinitionRequest {
		Name?: string | null;
	}

	export interface UpdateCoreDefinitionRequest {
		Name?: string | null;
	}

	export interface UpdateDeviceDefinitionRequest {
		Name?: string | null;
	}

	export interface UpdateFunctionDefinitionRequest {
		Name?: string | null;
	}

	export interface UpdateGroupCertificateConfigurationRequest {
		CertificateExpiryInMilliseconds?: string | null;
	}

	export interface UpdateGroupRequest {
		Name?: string | null;
	}

	export interface UpdateLoggerDefinitionRequest {
		Name?: string | null;
	}

	export interface UpdateResourceDefinitionRequest {
		Name?: string | null;
	}

	export interface UpdateSubscriptionDefinitionRequest {
		Name?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.
		 * Put greengrass/groups/{GroupId}/role
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {AssociateRoleToGroupResponse} Success
		 */
		AssociateRoleToGroup(GroupId: string, requestBody: AssociateRoleToGroupPutBody): Observable<AssociateRoleToGroupResponse> {
			return this.http.put<AssociateRoleToGroupResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/role', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates the role from a group.
		 * Delete greengrass/groups/{GroupId}/role
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {DisassociateRoleFromGroupResponse} Success
		 */
		DisassociateRoleFromGroup(GroupId: string): Observable<DisassociateRoleFromGroupResponse> {
			return this.http.delete<DisassociateRoleFromGroupResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/role', {});
		}

		/**
		 * Retrieves the role associated with a particular group.
		 * Get greengrass/groups/{GroupId}/role
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {GetAssociatedRoleResponse} Success
		 */
		GetAssociatedRole(GroupId: string): Observable<GetAssociatedRoleResponse> {
			return this.http.get<GetAssociatedRoleResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/role', {});
		}

		/**
		 * Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.
		 * Put greengrass/servicerole
		 * @return {AssociateServiceRoleToAccountResponse} Success
		 */
		AssociateServiceRoleToAccount(requestBody: AssociateServiceRoleToAccountPutBody): Observable<AssociateServiceRoleToAccountResponse> {
			return this.http.put<AssociateServiceRoleToAccountResponse>(this.baseUri + 'greengrass/servicerole', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates the service role from your account. Without a service role, deployments will not work.
		 * Delete greengrass/servicerole
		 * @return {DisassociateServiceRoleFromAccountResponse} Success
		 */
		DisassociateServiceRoleFromAccount(): Observable<DisassociateServiceRoleFromAccountResponse> {
			return this.http.delete<DisassociateServiceRoleFromAccountResponse>(this.baseUri + 'greengrass/servicerole', {});
		}

		/**
		 * Retrieves the service role that is attached to your account.
		 * Get greengrass/servicerole
		 * @return {GetServiceRoleForAccountResponse} Success
		 */
		GetServiceRoleForAccount(): Observable<GetServiceRoleForAccountResponse> {
			return this.http.get<GetServiceRoleForAccountResponse>(this.baseUri + 'greengrass/servicerole', {});
		}

		/**
		 * Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.
		 * Post greengrass/definition/connectors
		 * @return {CreateConnectorDefinitionResponse} Success
		 */
		CreateConnectorDefinition(requestBody: CreateConnectorDefinitionPostBody): Observable<CreateConnectorDefinitionResponse> {
			return this.http.post<CreateConnectorDefinitionResponse>(this.baseUri + 'greengrass/definition/connectors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of connector definitions.
		 * Get greengrass/definition/connectors
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListConnectorDefinitionsResponse} Success
		 */
		ListConnectorDefinitions(MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListConnectorDefinitionsResponse> {
			return this.http.get<ListConnectorDefinitionsResponse>(this.baseUri + 'greengrass/definition/connectors?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a version of a connector definition which has already been defined.
		 * Post greengrass/definition/connectors/{ConnectorDefinitionId}/versions
		 * @param {string} ConnectorDefinitionId The ID of the connector definition.
		 * @return {CreateConnectorDefinitionVersionResponse} Success
		 */
		CreateConnectorDefinitionVersion(ConnectorDefinitionId: string, requestBody: CreateConnectorDefinitionVersionPostBody): Observable<CreateConnectorDefinitionVersionResponse> {
			return this.http.post<CreateConnectorDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/connectors/' + (ConnectorDefinitionId == null ? '' : encodeURIComponent(ConnectorDefinitionId)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the versions of a connector definition, which are containers for connectors. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
		 * Get greengrass/definition/connectors/{ConnectorDefinitionId}/versions
		 * @param {string} ConnectorDefinitionId The ID of the connector definition.
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListConnectorDefinitionVersionsResponse} Success
		 */
		ListConnectorDefinitionVersions(ConnectorDefinitionId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListConnectorDefinitionVersionsResponse> {
			return this.http.get<ListConnectorDefinitionVersionsResponse>(this.baseUri + 'greengrass/definition/connectors/' + (ConnectorDefinitionId == null ? '' : encodeURIComponent(ConnectorDefinitionId)) + '/versions&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.
		 * Post greengrass/definition/cores
		 * @return {CreateCoreDefinitionResponse} Success
		 */
		CreateCoreDefinition(requestBody: CreateCoreDefinitionPostBody): Observable<CreateCoreDefinitionResponse> {
			return this.http.post<CreateCoreDefinitionResponse>(this.baseUri + 'greengrass/definition/cores', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of core definitions.
		 * Get greengrass/definition/cores
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListCoreDefinitionsResponse} Success
		 */
		ListCoreDefinitions(MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListCoreDefinitionsResponse> {
			return this.http.get<ListCoreDefinitionsResponse>(this.baseUri + 'greengrass/definition/cores?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a version of a core definition that has already been defined. Greengrass groups must each contain exactly one Greengrass core.
		 * Post greengrass/definition/cores/{CoreDefinitionId}/versions
		 * @param {string} CoreDefinitionId The ID of the core definition.
		 * @return {CreateCoreDefinitionVersionResponse} Success
		 */
		CreateCoreDefinitionVersion(CoreDefinitionId: string, requestBody: CreateCoreDefinitionVersionPostBody): Observable<CreateCoreDefinitionVersionResponse> {
			return this.http.post<CreateCoreDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/cores/' + (CoreDefinitionId == null ? '' : encodeURIComponent(CoreDefinitionId)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the versions of a core definition.
		 * Get greengrass/definition/cores/{CoreDefinitionId}/versions
		 * @param {string} CoreDefinitionId The ID of the core definition.
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListCoreDefinitionVersionsResponse} Success
		 */
		ListCoreDefinitionVersions(CoreDefinitionId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListCoreDefinitionVersionsResponse> {
			return this.http.get<ListCoreDefinitionVersionsResponse>(this.baseUri + 'greengrass/definition/cores/' + (CoreDefinitionId == null ? '' : encodeURIComponent(CoreDefinitionId)) + '/versions&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a deployment. ''CreateDeployment'' requests are idempotent with respect to the ''X-Amzn-Client-Token'' token and the request parameters.
		 * Post greengrass/groups/{GroupId}/deployments
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {CreateDeploymentResponse} Success
		 */
		CreateDeployment(GroupId: string, requestBody: CreateDeploymentPostBody): Observable<CreateDeploymentResponse> {
			return this.http.post<CreateDeploymentResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/deployments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a history of deployments for the group.
		 * Get greengrass/groups/{GroupId}/deployments
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListDeploymentsResponse} Success
		 */
		ListDeployments(GroupId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListDeploymentsResponse> {
			return this.http.get<ListDeploymentsResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/deployments&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time.
		 * Post greengrass/definition/devices
		 * @return {CreateDeviceDefinitionResponse} Success
		 */
		CreateDeviceDefinition(requestBody: CreateDeviceDefinitionPostBody): Observable<CreateDeviceDefinitionResponse> {
			return this.http.post<CreateDeviceDefinitionResponse>(this.baseUri + 'greengrass/definition/devices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of device definitions.
		 * Get greengrass/definition/devices
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListDeviceDefinitionsResponse} Success
		 */
		ListDeviceDefinitions(MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListDeviceDefinitionsResponse> {
			return this.http.get<ListDeviceDefinitionsResponse>(this.baseUri + 'greengrass/definition/devices?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a version of a device definition that has already been defined.
		 * Post greengrass/definition/devices/{DeviceDefinitionId}/versions
		 * @param {string} DeviceDefinitionId The ID of the device definition.
		 * @return {CreateDeviceDefinitionVersionResponse} Success
		 */
		CreateDeviceDefinitionVersion(DeviceDefinitionId: string, requestBody: CreateDeviceDefinitionVersionPostBody): Observable<CreateDeviceDefinitionVersionResponse> {
			return this.http.post<CreateDeviceDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/devices/' + (DeviceDefinitionId == null ? '' : encodeURIComponent(DeviceDefinitionId)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the versions of a device definition.
		 * Get greengrass/definition/devices/{DeviceDefinitionId}/versions
		 * @param {string} DeviceDefinitionId The ID of the device definition.
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListDeviceDefinitionVersionsResponse} Success
		 */
		ListDeviceDefinitionVersions(DeviceDefinitionId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListDeviceDefinitionVersionsResponse> {
			return this.http.get<ListDeviceDefinitionVersionsResponse>(this.baseUri + 'greengrass/definition/devices/' + (DeviceDefinitionId == null ? '' : encodeURIComponent(DeviceDefinitionId)) + '/versions&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.
		 * Post greengrass/definition/functions
		 * @return {CreateFunctionDefinitionResponse} Success
		 */
		CreateFunctionDefinition(requestBody: CreateFunctionDefinitionPostBody): Observable<CreateFunctionDefinitionResponse> {
			return this.http.post<CreateFunctionDefinitionResponse>(this.baseUri + 'greengrass/definition/functions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of Lambda function definitions.
		 * Get greengrass/definition/functions
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListFunctionDefinitionsResponse} Success
		 */
		ListFunctionDefinitions(MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListFunctionDefinitionsResponse> {
			return this.http.get<ListFunctionDefinitionsResponse>(this.baseUri + 'greengrass/definition/functions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a version of a Lambda function definition that has already been defined.
		 * Post greengrass/definition/functions/{FunctionDefinitionId}/versions
		 * @param {string} FunctionDefinitionId The ID of the Lambda function definition.
		 * @return {CreateFunctionDefinitionVersionResponse} Success
		 */
		CreateFunctionDefinitionVersion(FunctionDefinitionId: string, requestBody: CreateFunctionDefinitionVersionPostBody): Observable<CreateFunctionDefinitionVersionResponse> {
			return this.http.post<CreateFunctionDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/functions/' + (FunctionDefinitionId == null ? '' : encodeURIComponent(FunctionDefinitionId)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the versions of a Lambda function definition.
		 * Get greengrass/definition/functions/{FunctionDefinitionId}/versions
		 * @param {string} FunctionDefinitionId The ID of the Lambda function definition.
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListFunctionDefinitionVersionsResponse} Success
		 */
		ListFunctionDefinitionVersions(FunctionDefinitionId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListFunctionDefinitionVersionsResponse> {
			return this.http.get<ListFunctionDefinitionVersionsResponse>(this.baseUri + 'greengrass/definition/functions/' + (FunctionDefinitionId == null ? '' : encodeURIComponent(FunctionDefinitionId)) + '/versions&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time. Tip: You can use the ''gg_group_setup'' package (https://github.com/awslabs/aws-greengrass-group-setup) as a library or command-line application to create and deploy Greengrass groups.
		 * Post greengrass/groups
		 * @return {CreateGroupResponse} Success
		 */
		CreateGroup(requestBody: CreateGroupPostBody): Observable<CreateGroupResponse> {
			return this.http.post<CreateGroupResponse>(this.baseUri + 'greengrass/groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of groups.
		 * Get greengrass/groups
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListGroupsResponse} Success
		 */
		ListGroups(MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListGroupsResponse> {
			return this.http.get<ListGroupsResponse>(this.baseUri + 'greengrass/groups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a CA for the group. If a CA already exists, it will rotate the existing CA.
		 * Post greengrass/groups/{GroupId}/certificateauthorities
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {CreateGroupCertificateAuthorityResponse} Success
		 */
		CreateGroupCertificateAuthority(GroupId: string): Observable<CreateGroupCertificateAuthorityResponse> {
			return this.http.post<CreateGroupCertificateAuthorityResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/certificateauthorities', null, {});
		}

		/**
		 * Retrieves the current CAs for a group.
		 * Get greengrass/groups/{GroupId}/certificateauthorities
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {ListGroupCertificateAuthoritiesResponse} Success
		 */
		ListGroupCertificateAuthorities(GroupId: string): Observable<ListGroupCertificateAuthoritiesResponse> {
			return this.http.get<ListGroupCertificateAuthoritiesResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/certificateauthorities', {});
		}

		/**
		 * Creates a version of a group which has already been defined.
		 * Post greengrass/groups/{GroupId}/versions
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {CreateGroupVersionResponse} Success
		 */
		CreateGroupVersion(GroupId: string, requestBody: CreateGroupVersionPostBody): Observable<CreateGroupVersionResponse> {
			return this.http.post<CreateGroupVersionResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the versions of a group.
		 * Get greengrass/groups/{GroupId}/versions
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListGroupVersionsResponse} Success
		 */
		ListGroupVersions(GroupId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListGroupVersionsResponse> {
			return this.http.get<ListGroupVersionsResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/versions&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time.
		 * Post greengrass/definition/loggers
		 * @return {CreateLoggerDefinitionResponse} Success
		 */
		CreateLoggerDefinition(requestBody: CreateLoggerDefinitionPostBody): Observable<CreateLoggerDefinitionResponse> {
			return this.http.post<CreateLoggerDefinitionResponse>(this.baseUri + 'greengrass/definition/loggers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of logger definitions.
		 * Get greengrass/definition/loggers
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListLoggerDefinitionsResponse} Success
		 */
		ListLoggerDefinitions(MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListLoggerDefinitionsResponse> {
			return this.http.get<ListLoggerDefinitionsResponse>(this.baseUri + 'greengrass/definition/loggers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a version of a logger definition that has already been defined.
		 * Post greengrass/definition/loggers/{LoggerDefinitionId}/versions
		 * @param {string} LoggerDefinitionId The ID of the logger definition.
		 * @return {CreateLoggerDefinitionVersionResponse} Success
		 */
		CreateLoggerDefinitionVersion(LoggerDefinitionId: string, requestBody: CreateLoggerDefinitionVersionPostBody): Observable<CreateLoggerDefinitionVersionResponse> {
			return this.http.post<CreateLoggerDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/loggers/' + (LoggerDefinitionId == null ? '' : encodeURIComponent(LoggerDefinitionId)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the versions of a logger definition.
		 * Get greengrass/definition/loggers/{LoggerDefinitionId}/versions
		 * @param {string} LoggerDefinitionId The ID of the logger definition.
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListLoggerDefinitionVersionsResponse} Success
		 */
		ListLoggerDefinitionVersions(LoggerDefinitionId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListLoggerDefinitionVersionsResponse> {
			return this.http.get<ListLoggerDefinitionVersionsResponse>(this.baseUri + 'greengrass/definition/loggers/' + (LoggerDefinitionId == null ? '' : encodeURIComponent(LoggerDefinitionId)) + '/versions&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later.
		 * Post greengrass/definition/resources
		 * @return {CreateResourceDefinitionResponse} Success
		 */
		CreateResourceDefinition(requestBody: CreateResourceDefinitionPostBody): Observable<CreateResourceDefinitionResponse> {
			return this.http.post<CreateResourceDefinitionResponse>(this.baseUri + 'greengrass/definition/resources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of resource definitions.
		 * Get greengrass/definition/resources
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListResourceDefinitionsResponse} Success
		 */
		ListResourceDefinitions(MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListResourceDefinitionsResponse> {
			return this.http.get<ListResourceDefinitionsResponse>(this.baseUri + 'greengrass/definition/resources?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a version of a resource definition that has already been defined.
		 * Post greengrass/definition/resources/{ResourceDefinitionId}/versions
		 * @param {string} ResourceDefinitionId The ID of the resource definition.
		 * @return {CreateResourceDefinitionVersionResponse} Success
		 */
		CreateResourceDefinitionVersion(ResourceDefinitionId: string, requestBody: CreateResourceDefinitionVersionPostBody): Observable<CreateResourceDefinitionVersionResponse> {
			return this.http.post<CreateResourceDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/resources/' + (ResourceDefinitionId == null ? '' : encodeURIComponent(ResourceDefinitionId)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the versions of a resource definition.
		 * Get greengrass/definition/resources/{ResourceDefinitionId}/versions
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @param {string} ResourceDefinitionId The ID of the resource definition.
		 * @return {ListResourceDefinitionVersionsResponse} Success
		 */
		ListResourceDefinitionVersions(MaxResults: string | null | undefined, NextToken: string | null | undefined, ResourceDefinitionId: string): Observable<ListResourceDefinitionVersionsResponse> {
			return this.http.get<ListResourceDefinitionVersionsResponse>(this.baseUri + 'greengrass/definition/resources/' + (ResourceDefinitionId == null ? '' : encodeURIComponent(ResourceDefinitionId)) + '/versions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.
		 * Post greengrass/updates
		 * @return {CreateSoftwareUpdateJobResponse} Success
		 */
		CreateSoftwareUpdateJob(requestBody: CreateSoftwareUpdateJobPostBody): Observable<CreateSoftwareUpdateJobResponse> {
			return this.http.post<CreateSoftwareUpdateJobResponse>(this.baseUri + 'greengrass/updates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.
		 * Post greengrass/definition/subscriptions
		 * @return {CreateSubscriptionDefinitionResponse} Success
		 */
		CreateSubscriptionDefinition(requestBody: CreateSubscriptionDefinitionPostBody): Observable<CreateSubscriptionDefinitionResponse> {
			return this.http.post<CreateSubscriptionDefinitionResponse>(this.baseUri + 'greengrass/definition/subscriptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of subscription definitions.
		 * Get greengrass/definition/subscriptions
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListSubscriptionDefinitionsResponse} Success
		 */
		ListSubscriptionDefinitions(MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListSubscriptionDefinitionsResponse> {
			return this.http.get<ListSubscriptionDefinitionsResponse>(this.baseUri + 'greengrass/definition/subscriptions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a version of a subscription definition which has already been defined.
		 * Post greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions
		 * @param {string} SubscriptionDefinitionId The ID of the subscription definition.
		 * @return {CreateSubscriptionDefinitionVersionResponse} Success
		 */
		CreateSubscriptionDefinitionVersion(SubscriptionDefinitionId: string, requestBody: CreateSubscriptionDefinitionVersionPostBody): Observable<CreateSubscriptionDefinitionVersionResponse> {
			return this.http.post<CreateSubscriptionDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/subscriptions/' + (SubscriptionDefinitionId == null ? '' : encodeURIComponent(SubscriptionDefinitionId)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the versions of a subscription definition.
		 * Get greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @param {string} SubscriptionDefinitionId The ID of the subscription definition.
		 * @return {ListSubscriptionDefinitionVersionsResponse} Success
		 */
		ListSubscriptionDefinitionVersions(MaxResults: string | null | undefined, NextToken: string | null | undefined, SubscriptionDefinitionId: string): Observable<ListSubscriptionDefinitionVersionsResponse> {
			return this.http.get<ListSubscriptionDefinitionVersionsResponse>(this.baseUri + 'greengrass/definition/subscriptions/' + (SubscriptionDefinitionId == null ? '' : encodeURIComponent(SubscriptionDefinitionId)) + '/versions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Deletes a connector definition.
		 * Delete greengrass/definition/connectors/{ConnectorDefinitionId}
		 * @param {string} ConnectorDefinitionId The ID of the connector definition.
		 * @return {DeleteConnectorDefinitionResponse} Success
		 */
		DeleteConnectorDefinition(ConnectorDefinitionId: string): Observable<DeleteConnectorDefinitionResponse> {
			return this.http.delete<DeleteConnectorDefinitionResponse>(this.baseUri + 'greengrass/definition/connectors/' + (ConnectorDefinitionId == null ? '' : encodeURIComponent(ConnectorDefinitionId)), {});
		}

		/**
		 * Retrieves information about a connector definition.
		 * Get greengrass/definition/connectors/{ConnectorDefinitionId}
		 * @param {string} ConnectorDefinitionId The ID of the connector definition.
		 * @return {GetConnectorDefinitionResponse} Success
		 */
		GetConnectorDefinition(ConnectorDefinitionId: string): Observable<GetConnectorDefinitionResponse> {
			return this.http.get<GetConnectorDefinitionResponse>(this.baseUri + 'greengrass/definition/connectors/' + (ConnectorDefinitionId == null ? '' : encodeURIComponent(ConnectorDefinitionId)), {});
		}

		/**
		 * Updates a connector definition.
		 * Put greengrass/definition/connectors/{ConnectorDefinitionId}
		 * @param {string} ConnectorDefinitionId The ID of the connector definition.
		 * @return {UpdateConnectorDefinitionResponse} Success
		 */
		UpdateConnectorDefinition(ConnectorDefinitionId: string, requestBody: UpdateConnectorDefinitionPutBody): Observable<UpdateConnectorDefinitionResponse> {
			return this.http.put<UpdateConnectorDefinitionResponse>(this.baseUri + 'greengrass/definition/connectors/' + (ConnectorDefinitionId == null ? '' : encodeURIComponent(ConnectorDefinitionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a core definition.
		 * Delete greengrass/definition/cores/{CoreDefinitionId}
		 * @param {string} CoreDefinitionId The ID of the core definition.
		 * @return {DeleteCoreDefinitionResponse} Success
		 */
		DeleteCoreDefinition(CoreDefinitionId: string): Observable<DeleteCoreDefinitionResponse> {
			return this.http.delete<DeleteCoreDefinitionResponse>(this.baseUri + 'greengrass/definition/cores/' + (CoreDefinitionId == null ? '' : encodeURIComponent(CoreDefinitionId)), {});
		}

		/**
		 * Retrieves information about a core definition version.
		 * Get greengrass/definition/cores/{CoreDefinitionId}
		 * @param {string} CoreDefinitionId The ID of the core definition.
		 * @return {GetCoreDefinitionResponse} Success
		 */
		GetCoreDefinition(CoreDefinitionId: string): Observable<GetCoreDefinitionResponse> {
			return this.http.get<GetCoreDefinitionResponse>(this.baseUri + 'greengrass/definition/cores/' + (CoreDefinitionId == null ? '' : encodeURIComponent(CoreDefinitionId)), {});
		}

		/**
		 * Updates a core definition.
		 * Put greengrass/definition/cores/{CoreDefinitionId}
		 * @param {string} CoreDefinitionId The ID of the core definition.
		 * @return {UpdateCoreDefinitionResponse} Success
		 */
		UpdateCoreDefinition(CoreDefinitionId: string, requestBody: UpdateCoreDefinitionPutBody): Observable<UpdateCoreDefinitionResponse> {
			return this.http.put<UpdateCoreDefinitionResponse>(this.baseUri + 'greengrass/definition/cores/' + (CoreDefinitionId == null ? '' : encodeURIComponent(CoreDefinitionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a device definition.
		 * Delete greengrass/definition/devices/{DeviceDefinitionId}
		 * @param {string} DeviceDefinitionId The ID of the device definition.
		 * @return {DeleteDeviceDefinitionResponse} Success
		 */
		DeleteDeviceDefinition(DeviceDefinitionId: string): Observable<DeleteDeviceDefinitionResponse> {
			return this.http.delete<DeleteDeviceDefinitionResponse>(this.baseUri + 'greengrass/definition/devices/' + (DeviceDefinitionId == null ? '' : encodeURIComponent(DeviceDefinitionId)), {});
		}

		/**
		 * Retrieves information about a device definition.
		 * Get greengrass/definition/devices/{DeviceDefinitionId}
		 * @param {string} DeviceDefinitionId The ID of the device definition.
		 * @return {GetDeviceDefinitionResponse} Success
		 */
		GetDeviceDefinition(DeviceDefinitionId: string): Observable<GetDeviceDefinitionResponse> {
			return this.http.get<GetDeviceDefinitionResponse>(this.baseUri + 'greengrass/definition/devices/' + (DeviceDefinitionId == null ? '' : encodeURIComponent(DeviceDefinitionId)), {});
		}

		/**
		 * Updates a device definition.
		 * Put greengrass/definition/devices/{DeviceDefinitionId}
		 * @param {string} DeviceDefinitionId The ID of the device definition.
		 * @return {UpdateDeviceDefinitionResponse} Success
		 */
		UpdateDeviceDefinition(DeviceDefinitionId: string, requestBody: UpdateDeviceDefinitionPutBody): Observable<UpdateDeviceDefinitionResponse> {
			return this.http.put<UpdateDeviceDefinitionResponse>(this.baseUri + 'greengrass/definition/devices/' + (DeviceDefinitionId == null ? '' : encodeURIComponent(DeviceDefinitionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Lambda function definition.
		 * Delete greengrass/definition/functions/{FunctionDefinitionId}
		 * @param {string} FunctionDefinitionId The ID of the Lambda function definition.
		 * @return {DeleteFunctionDefinitionResponse} Success
		 */
		DeleteFunctionDefinition(FunctionDefinitionId: string): Observable<DeleteFunctionDefinitionResponse> {
			return this.http.delete<DeleteFunctionDefinitionResponse>(this.baseUri + 'greengrass/definition/functions/' + (FunctionDefinitionId == null ? '' : encodeURIComponent(FunctionDefinitionId)), {});
		}

		/**
		 * Retrieves information about a Lambda function definition, including its creation time and latest version.
		 * Get greengrass/definition/functions/{FunctionDefinitionId}
		 * @param {string} FunctionDefinitionId The ID of the Lambda function definition.
		 * @return {GetFunctionDefinitionResponse} Success
		 */
		GetFunctionDefinition(FunctionDefinitionId: string): Observable<GetFunctionDefinitionResponse> {
			return this.http.get<GetFunctionDefinitionResponse>(this.baseUri + 'greengrass/definition/functions/' + (FunctionDefinitionId == null ? '' : encodeURIComponent(FunctionDefinitionId)), {});
		}

		/**
		 * Updates a Lambda function definition.
		 * Put greengrass/definition/functions/{FunctionDefinitionId}
		 * @param {string} FunctionDefinitionId The ID of the Lambda function definition.
		 * @return {UpdateFunctionDefinitionResponse} Success
		 */
		UpdateFunctionDefinition(FunctionDefinitionId: string, requestBody: UpdateFunctionDefinitionPutBody): Observable<UpdateFunctionDefinitionResponse> {
			return this.http.put<UpdateFunctionDefinitionResponse>(this.baseUri + 'greengrass/definition/functions/' + (FunctionDefinitionId == null ? '' : encodeURIComponent(FunctionDefinitionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a group.
		 * Delete greengrass/groups/{GroupId}
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {DeleteGroupResponse} Success
		 */
		DeleteGroup(GroupId: string): Observable<DeleteGroupResponse> {
			return this.http.delete<DeleteGroupResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)), {});
		}

		/**
		 * Retrieves information about a group.
		 * Get greengrass/groups/{GroupId}
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {GetGroupResponse} Success
		 */
		GetGroup(GroupId: string): Observable<GetGroupResponse> {
			return this.http.get<GetGroupResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)), {});
		}

		/**
		 * Updates a group.
		 * Put greengrass/groups/{GroupId}
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {UpdateGroupResponse} Success
		 */
		UpdateGroup(GroupId: string, requestBody: UpdateGroupPutBody): Observable<UpdateGroupResponse> {
			return this.http.put<UpdateGroupResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a logger definition.
		 * Delete greengrass/definition/loggers/{LoggerDefinitionId}
		 * @param {string} LoggerDefinitionId The ID of the logger definition.
		 * @return {DeleteLoggerDefinitionResponse} Success
		 */
		DeleteLoggerDefinition(LoggerDefinitionId: string): Observable<DeleteLoggerDefinitionResponse> {
			return this.http.delete<DeleteLoggerDefinitionResponse>(this.baseUri + 'greengrass/definition/loggers/' + (LoggerDefinitionId == null ? '' : encodeURIComponent(LoggerDefinitionId)), {});
		}

		/**
		 * Retrieves information about a logger definition.
		 * Get greengrass/definition/loggers/{LoggerDefinitionId}
		 * @param {string} LoggerDefinitionId The ID of the logger definition.
		 * @return {GetLoggerDefinitionResponse} Success
		 */
		GetLoggerDefinition(LoggerDefinitionId: string): Observable<GetLoggerDefinitionResponse> {
			return this.http.get<GetLoggerDefinitionResponse>(this.baseUri + 'greengrass/definition/loggers/' + (LoggerDefinitionId == null ? '' : encodeURIComponent(LoggerDefinitionId)), {});
		}

		/**
		 * Updates a logger definition.
		 * Put greengrass/definition/loggers/{LoggerDefinitionId}
		 * @param {string} LoggerDefinitionId The ID of the logger definition.
		 * @return {UpdateLoggerDefinitionResponse} Success
		 */
		UpdateLoggerDefinition(LoggerDefinitionId: string, requestBody: UpdateLoggerDefinitionPutBody): Observable<UpdateLoggerDefinitionResponse> {
			return this.http.put<UpdateLoggerDefinitionResponse>(this.baseUri + 'greengrass/definition/loggers/' + (LoggerDefinitionId == null ? '' : encodeURIComponent(LoggerDefinitionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a resource definition.
		 * Delete greengrass/definition/resources/{ResourceDefinitionId}
		 * @param {string} ResourceDefinitionId The ID of the resource definition.
		 * @return {DeleteResourceDefinitionResponse} Success
		 */
		DeleteResourceDefinition(ResourceDefinitionId: string): Observable<DeleteResourceDefinitionResponse> {
			return this.http.delete<DeleteResourceDefinitionResponse>(this.baseUri + 'greengrass/definition/resources/' + (ResourceDefinitionId == null ? '' : encodeURIComponent(ResourceDefinitionId)), {});
		}

		/**
		 * Retrieves information about a resource definition, including its creation time and latest version.
		 * Get greengrass/definition/resources/{ResourceDefinitionId}
		 * @param {string} ResourceDefinitionId The ID of the resource definition.
		 * @return {GetResourceDefinitionResponse} Success
		 */
		GetResourceDefinition(ResourceDefinitionId: string): Observable<GetResourceDefinitionResponse> {
			return this.http.get<GetResourceDefinitionResponse>(this.baseUri + 'greengrass/definition/resources/' + (ResourceDefinitionId == null ? '' : encodeURIComponent(ResourceDefinitionId)), {});
		}

		/**
		 * Updates a resource definition.
		 * Put greengrass/definition/resources/{ResourceDefinitionId}
		 * @param {string} ResourceDefinitionId The ID of the resource definition.
		 * @return {UpdateResourceDefinitionResponse} Success
		 */
		UpdateResourceDefinition(ResourceDefinitionId: string, requestBody: UpdateResourceDefinitionPutBody): Observable<UpdateResourceDefinitionResponse> {
			return this.http.put<UpdateResourceDefinitionResponse>(this.baseUri + 'greengrass/definition/resources/' + (ResourceDefinitionId == null ? '' : encodeURIComponent(ResourceDefinitionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a subscription definition.
		 * Delete greengrass/definition/subscriptions/{SubscriptionDefinitionId}
		 * @param {string} SubscriptionDefinitionId The ID of the subscription definition.
		 * @return {DeleteSubscriptionDefinitionResponse} Success
		 */
		DeleteSubscriptionDefinition(SubscriptionDefinitionId: string): Observable<DeleteSubscriptionDefinitionResponse> {
			return this.http.delete<DeleteSubscriptionDefinitionResponse>(this.baseUri + 'greengrass/definition/subscriptions/' + (SubscriptionDefinitionId == null ? '' : encodeURIComponent(SubscriptionDefinitionId)), {});
		}

		/**
		 * Retrieves information about a subscription definition.
		 * Get greengrass/definition/subscriptions/{SubscriptionDefinitionId}
		 * @param {string} SubscriptionDefinitionId The ID of the subscription definition.
		 * @return {GetSubscriptionDefinitionResponse} Success
		 */
		GetSubscriptionDefinition(SubscriptionDefinitionId: string): Observable<GetSubscriptionDefinitionResponse> {
			return this.http.get<GetSubscriptionDefinitionResponse>(this.baseUri + 'greengrass/definition/subscriptions/' + (SubscriptionDefinitionId == null ? '' : encodeURIComponent(SubscriptionDefinitionId)), {});
		}

		/**
		 * Updates a subscription definition.
		 * Put greengrass/definition/subscriptions/{SubscriptionDefinitionId}
		 * @param {string} SubscriptionDefinitionId The ID of the subscription definition.
		 * @return {UpdateSubscriptionDefinitionResponse} Success
		 */
		UpdateSubscriptionDefinition(SubscriptionDefinitionId: string, requestBody: UpdateSubscriptionDefinitionPutBody): Observable<UpdateSubscriptionDefinitionResponse> {
			return this.http.put<UpdateSubscriptionDefinitionResponse>(this.baseUri + 'greengrass/definition/subscriptions/' + (SubscriptionDefinitionId == null ? '' : encodeURIComponent(SubscriptionDefinitionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the status of a bulk deployment.
		 * Get greengrass/bulk/deployments/{BulkDeploymentId}/status
		 * @param {string} BulkDeploymentId The ID of the bulk deployment.
		 * @return {GetBulkDeploymentStatusResponse} Success
		 */
		GetBulkDeploymentStatus(BulkDeploymentId: string): Observable<GetBulkDeploymentStatusResponse> {
			return this.http.get<GetBulkDeploymentStatusResponse>(this.baseUri + 'greengrass/bulk/deployments/' + (BulkDeploymentId == null ? '' : encodeURIComponent(BulkDeploymentId)) + '/status', {});
		}

		/**
		 * Retrieves the connectivity information for a core.
		 * Get greengrass/things/{ThingName}/connectivityInfo
		 * @param {string} ThingName The thing name.
		 * @return {GetConnectivityInfoResponse} Success
		 */
		GetConnectivityInfo(ThingName: string): Observable<GetConnectivityInfoResponse> {
			return this.http.get<GetConnectivityInfoResponse>(this.baseUri + 'greengrass/things/' + (ThingName == null ? '' : encodeURIComponent(ThingName)) + '/connectivityInfo', {});
		}

		/**
		 * Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.
		 * Put greengrass/things/{ThingName}/connectivityInfo
		 * @param {string} ThingName The thing name.
		 * @return {UpdateConnectivityInfoResponse} Success
		 */
		UpdateConnectivityInfo(ThingName: string, requestBody: UpdateConnectivityInfoPutBody): Observable<UpdateConnectivityInfoResponse> {
			return this.http.put<UpdateConnectivityInfoResponse>(this.baseUri + 'greengrass/things/' + (ThingName == null ? '' : encodeURIComponent(ThingName)) + '/connectivityInfo', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about a connector definition version, including the connectors that the version contains. Connectors are prebuilt modules that interact with local infrastructure, device protocols, AWS, and other cloud services.
		 * Get greengrass/definition/connectors/{ConnectorDefinitionId}/versions/{ConnectorDefinitionVersionId}
		 * @param {string} ConnectorDefinitionId The ID of the connector definition.
		 * @param {string} ConnectorDefinitionVersionId The ID of the connector definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListConnectorDefinitionVersions'' requests. If the version is the last one that was associated with a connector definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {GetConnectorDefinitionVersionResponse} Success
		 */
		GetConnectorDefinitionVersion(ConnectorDefinitionId: string, ConnectorDefinitionVersionId: string, NextToken: string | null | undefined): Observable<GetConnectorDefinitionVersionResponse> {
			return this.http.get<GetConnectorDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/connectors/' + (ConnectorDefinitionId == null ? '' : encodeURIComponent(ConnectorDefinitionId)) + '/versions/' + (ConnectorDefinitionVersionId == null ? '' : encodeURIComponent(ConnectorDefinitionVersionId)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Retrieves information about a core definition version.
		 * Get greengrass/definition/cores/{CoreDefinitionId}/versions/{CoreDefinitionVersionId}
		 * @param {string} CoreDefinitionId The ID of the core definition.
		 * @param {string} CoreDefinitionVersionId The ID of the core definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListCoreDefinitionVersions'' requests. If the version is the last one that was associated with a core definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
		 * @return {GetCoreDefinitionVersionResponse} Success
		 */
		GetCoreDefinitionVersion(CoreDefinitionId: string, CoreDefinitionVersionId: string): Observable<GetCoreDefinitionVersionResponse> {
			return this.http.get<GetCoreDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/cores/' + (CoreDefinitionId == null ? '' : encodeURIComponent(CoreDefinitionId)) + '/versions/' + (CoreDefinitionVersionId == null ? '' : encodeURIComponent(CoreDefinitionVersionId)), {});
		}

		/**
		 * Returns the status of a deployment.
		 * Get greengrass/groups/{GroupId}/deployments/{DeploymentId}/status
		 * @param {string} DeploymentId The ID of the deployment.
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {GetDeploymentStatusResponse} Success
		 */
		GetDeploymentStatus(DeploymentId: string, GroupId: string): Observable<GetDeploymentStatusResponse> {
			return this.http.get<GetDeploymentStatusResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/deployments/' + (DeploymentId == null ? '' : encodeURIComponent(DeploymentId)) + '/status', {});
		}

		/**
		 * Retrieves information about a device definition version.
		 * Get greengrass/definition/devices/{DeviceDefinitionId}/versions/{DeviceDefinitionVersionId}
		 * @param {string} DeviceDefinitionId The ID of the device definition.
		 * @param {string} DeviceDefinitionVersionId The ID of the device definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListDeviceDefinitionVersions'' requests. If the version is the last one that was associated with a device definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {GetDeviceDefinitionVersionResponse} Success
		 */
		GetDeviceDefinitionVersion(DeviceDefinitionId: string, DeviceDefinitionVersionId: string, NextToken: string | null | undefined): Observable<GetDeviceDefinitionVersionResponse> {
			return this.http.get<GetDeviceDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/devices/' + (DeviceDefinitionId == null ? '' : encodeURIComponent(DeviceDefinitionId)) + '/versions/' + (DeviceDefinitionVersionId == null ? '' : encodeURIComponent(DeviceDefinitionVersionId)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.
		 * Get greengrass/definition/functions/{FunctionDefinitionId}/versions/{FunctionDefinitionVersionId}
		 * @param {string} FunctionDefinitionId The ID of the Lambda function definition.
		 * @param {string} FunctionDefinitionVersionId The ID of the function definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListFunctionDefinitionVersions'' requests. If the version is the last one that was associated with a function definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {GetFunctionDefinitionVersionResponse} Success
		 */
		GetFunctionDefinitionVersion(FunctionDefinitionId: string, FunctionDefinitionVersionId: string, NextToken: string | null | undefined): Observable<GetFunctionDefinitionVersionResponse> {
			return this.http.get<GetFunctionDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/functions/' + (FunctionDefinitionId == null ? '' : encodeURIComponent(FunctionDefinitionId)) + '/versions/' + (FunctionDefinitionVersionId == null ? '' : encodeURIComponent(FunctionDefinitionVersionId)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Retreives the CA associated with a group. Returns the public key of the CA.
		 * Get greengrass/groups/{GroupId}/certificateauthorities/{CertificateAuthorityId}
		 * @param {string} CertificateAuthorityId The ID of the certificate authority.
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {GetGroupCertificateAuthorityResponse} Success
		 */
		GetGroupCertificateAuthority(CertificateAuthorityId: string, GroupId: string): Observable<GetGroupCertificateAuthorityResponse> {
			return this.http.get<GetGroupCertificateAuthorityResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/certificateauthorities/' + (CertificateAuthorityId == null ? '' : encodeURIComponent(CertificateAuthorityId)), {});
		}

		/**
		 * Retrieves the current configuration for the CA used by the group.
		 * Get greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {GetGroupCertificateConfigurationResponse} Success
		 */
		GetGroupCertificateConfiguration(GroupId: string): Observable<GetGroupCertificateConfigurationResponse> {
			return this.http.get<GetGroupCertificateConfigurationResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/certificateauthorities/configuration/expiry', {});
		}

		/**
		 * Updates the Certificate expiry time for a group.
		 * Put greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {UpdateGroupCertificateConfigurationResponse} Success
		 */
		UpdateGroupCertificateConfiguration(GroupId: string, requestBody: UpdateGroupCertificateConfigurationPutBody): Observable<UpdateGroupCertificateConfigurationResponse> {
			return this.http.put<UpdateGroupCertificateConfigurationResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/certificateauthorities/configuration/expiry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about a group version.
		 * Get greengrass/groups/{GroupId}/versions/{GroupVersionId}
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @param {string} GroupVersionId The ID of the group version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListGroupVersions'' requests. If the version is the last one that was associated with a group, the value also maps to the ''LatestVersion'' property of the corresponding ''GroupInformation'' object.
		 * @return {GetGroupVersionResponse} Success
		 */
		GetGroupVersion(GroupId: string, GroupVersionId: string): Observable<GetGroupVersionResponse> {
			return this.http.get<GetGroupVersionResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/versions/' + (GroupVersionId == null ? '' : encodeURIComponent(GroupVersionId)), {});
		}

		/**
		 * Retrieves information about a logger definition version.
		 * Get greengrass/definition/loggers/{LoggerDefinitionId}/versions/{LoggerDefinitionVersionId}
		 * @param {string} LoggerDefinitionId The ID of the logger definition.
		 * @param {string} LoggerDefinitionVersionId The ID of the logger definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListLoggerDefinitionVersions'' requests. If the version is the last one that was associated with a logger definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {GetLoggerDefinitionVersionResponse} Success
		 */
		GetLoggerDefinitionVersion(LoggerDefinitionId: string, LoggerDefinitionVersionId: string, NextToken: string | null | undefined): Observable<GetLoggerDefinitionVersionResponse> {
			return this.http.get<GetLoggerDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/loggers/' + (LoggerDefinitionId == null ? '' : encodeURIComponent(LoggerDefinitionId)) + '/versions/' + (LoggerDefinitionVersionId == null ? '' : encodeURIComponent(LoggerDefinitionVersionId)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Retrieves information about a resource definition version, including which resources are included in the version.
		 * Get greengrass/definition/resources/{ResourceDefinitionId}/versions/{ResourceDefinitionVersionId}
		 * @param {string} ResourceDefinitionId The ID of the resource definition.
		 * @param {string} ResourceDefinitionVersionId The ID of the resource definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListResourceDefinitionVersions'' requests. If the version is the last one that was associated with a resource definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
		 * @return {GetResourceDefinitionVersionResponse} Success
		 */
		GetResourceDefinitionVersion(ResourceDefinitionId: string, ResourceDefinitionVersionId: string): Observable<GetResourceDefinitionVersionResponse> {
			return this.http.get<GetResourceDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/resources/' + (ResourceDefinitionId == null ? '' : encodeURIComponent(ResourceDefinitionId)) + '/versions/' + (ResourceDefinitionVersionId == null ? '' : encodeURIComponent(ResourceDefinitionVersionId)), {});
		}

		/**
		 * Retrieves information about a subscription definition version.
		 * Get greengrass/definition/subscriptions/{SubscriptionDefinitionId}/versions/{SubscriptionDefinitionVersionId}
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @param {string} SubscriptionDefinitionId The ID of the subscription definition.
		 * @param {string} SubscriptionDefinitionVersionId The ID of the subscription definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListSubscriptionDefinitionVersions'' requests. If the version is the last one that was associated with a subscription definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
		 * @return {GetSubscriptionDefinitionVersionResponse} Success
		 */
		GetSubscriptionDefinitionVersion(NextToken: string | null | undefined, SubscriptionDefinitionId: string, SubscriptionDefinitionVersionId: string): Observable<GetSubscriptionDefinitionVersionResponse> {
			return this.http.get<GetSubscriptionDefinitionVersionResponse>(this.baseUri + 'greengrass/definition/subscriptions/' + (SubscriptionDefinitionId == null ? '' : encodeURIComponent(SubscriptionDefinitionId)) + '/versions/' + (SubscriptionDefinitionVersionId == null ? '' : encodeURIComponent(SubscriptionDefinitionVersionId)) + '?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.
		 * Get greengrass/bulk/deployments/{BulkDeploymentId}/detailed-reports
		 * @param {string} BulkDeploymentId The ID of the bulk deployment.
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListBulkDeploymentDetailedReportsResponse} Success
		 */
		ListBulkDeploymentDetailedReports(BulkDeploymentId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListBulkDeploymentDetailedReportsResponse> {
			return this.http.get<ListBulkDeploymentDetailedReportsResponse>(this.baseUri + 'greengrass/bulk/deployments/' + (BulkDeploymentId == null ? '' : encodeURIComponent(BulkDeploymentId)) + '/detailed-reports&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns a list of bulk deployments.
		 * Get greengrass/bulk/deployments
		 * @param {string} MaxResults The maximum number of results to be returned per request.
		 * @param {string} NextToken The token for the next set of results, or ''null'' if there are no additional results.
		 * @return {ListBulkDeploymentsResponse} Success
		 */
		ListBulkDeployments(MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListBulkDeploymentsResponse> {
			return this.http.get<ListBulkDeploymentsResponse>(this.baseUri + 'greengrass/bulk/deployments?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.
		 * Post greengrass/bulk/deployments
		 * @return {StartBulkDeploymentResponse} Success
		 */
		StartBulkDeployment(requestBody: StartBulkDeploymentPostBody): Observable<StartBulkDeploymentResponse> {
			return this.http.post<StartBulkDeploymentResponse>(this.baseUri + 'greengrass/bulk/deployments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of resource tags for a resource arn.
		 * Get tags/{resource_arn}
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resource_arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), {});
		}

		/**
		 * Adds tags to a Greengrass resource. Valid resources are 'Group', 'ConnectorDefinition', 'CoreDefinition', 'DeviceDefinition', 'FunctionDefinition', 'LoggerDefinition', 'SubscriptionDefinition', 'ResourceDefinition', and 'BulkDeployment'.
		 * Post tags/{resource_arn}
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource.
		 * @return {void} 
		 */
		TagResource(resource_arn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Resets a group's deployments.
		 * Post greengrass/groups/{GroupId}/deployments/$reset
		 * @param {string} GroupId The ID of the Greengrass group.
		 * @return {ResetDeploymentsResponse} Success
		 */
		ResetDeployments(GroupId: string, requestBody: ResetDeploymentsPostBody): Observable<ResetDeploymentsResponse> {
			return this.http.post<ResetDeploymentsResponse>(this.baseUri + 'greengrass/groups/' + (GroupId == null ? '' : encodeURIComponent(GroupId)) + '/deployments/$reset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.
		 * Put greengrass/bulk/deployments/{BulkDeploymentId}/$stop
		 * @param {string} BulkDeploymentId The ID of the bulk deployment.
		 * @return {StopBulkDeploymentResponse} Success
		 */
		StopBulkDeployment(BulkDeploymentId: string): Observable<StopBulkDeploymentResponse> {
			return this.http.put<StopBulkDeploymentResponse>(this.baseUri + 'greengrass/bulk/deployments/' + (BulkDeploymentId == null ? '' : encodeURIComponent(BulkDeploymentId)) + '/$stop', null, {});
		}

		/**
		 * Remove resource tags from a Greengrass Resource.
		 * Delete tags/{resource_arn}#tagKeys
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource.
		 * @param {Array<string>} tagKeys An array of tag keys to delete
		 * @return {void} 
		 */
		UntagResource(resource_arn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface AssociateRoleToGroupPutBody {

		/**
		 * The ARN of the role you wish to associate with this group. The existence of the role is not validated.
		 * Required
		 */
		RoleArn: string;
	}

	export interface AssociateServiceRoleToAccountPutBody {

		/**
		 * The ARN of the service role you wish to associate with your account.
		 * Required
		 */
		RoleArn: string;
	}

	export interface CreateConnectorDefinitionPostBody {

		/** Information about the connector definition version, which is a container for connectors. */
		InitialVersion?: CreateConnectorDefinitionPostBodyInitialVersion | null;

		/** The name of the connector definition. */
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: {[id: string]: string } | null;
	}

	export interface CreateConnectorDefinitionPostBodyInitialVersion {
		Connectors?: Array<Connector> | null;
	}

	export interface CreateConnectorDefinitionVersionPostBody {

		/** A list of references to connectors in this version, with their corresponding configuration settings. */
		Connectors?: Array<Connector> | null;
	}

	export interface CreateCoreDefinitionPostBody {

		/** Information about a core definition version. */
		InitialVersion?: CreateCoreDefinitionPostBodyInitialVersion | null;

		/** The name of the core definition. */
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: {[id: string]: string } | null;
	}

	export interface CreateCoreDefinitionPostBodyInitialVersion {
		Cores?: Array<Core> | null;
	}

	export interface CreateCoreDefinitionVersionPostBody {

		/** A list of cores in the core definition version. */
		Cores?: Array<Core> | null;
	}

	export interface CreateDeploymentPostBody {

		/** The ID of the deployment if you wish to redeploy a previous deployment. */
		DeploymentId?: string | null;

		/**
		 * The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid.
		 * Required
		 */
		DeploymentType: GetDeploymentStatusResponseDeploymentType;

		/** The ID of the group version to be deployed. */
		GroupVersionId?: string | null;
	}

	export interface CreateDeviceDefinitionPostBody {

		/** Information about a device definition version. */
		InitialVersion?: CreateDeviceDefinitionPostBodyInitialVersion | null;

		/** The name of the device definition. */
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: {[id: string]: string } | null;
	}

	export interface CreateDeviceDefinitionPostBodyInitialVersion {
		Devices?: Array<Device> | null;
	}

	export interface CreateDeviceDefinitionVersionPostBody {

		/** A list of devices in the definition version. */
		Devices?: Array<Device> | null;
	}

	export interface CreateFunctionDefinitionPostBody {

		/** Information about a function definition version. */
		InitialVersion?: CreateFunctionDefinitionPostBodyInitialVersion | null;

		/** The name of the function definition. */
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: {[id: string]: string } | null;
	}

	export interface CreateFunctionDefinitionPostBodyInitialVersion {

		/** The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings. */
		DefaultConfig?: FunctionDefaultConfig | null;
		Functions?: Array<Function> | null;
	}

	export interface CreateFunctionDefinitionVersionPostBody {

		/** The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings. */
		DefaultConfig?: CreateFunctionDefinitionVersionPostBodyDefaultConfig | null;

		/** A list of Lambda functions in this function definition version. */
		Functions?: Array<Function> | null;
	}

	export interface CreateFunctionDefinitionVersionPostBodyDefaultConfig {

		/** Configuration information that specifies how a Lambda function runs. */
		Execution?: FunctionDefaultExecutionConfig | null;
	}

	export interface CreateGroupPostBody {

		/** Information about a group version. */
		InitialVersion?: CreateGroupPostBodyInitialVersion | null;

		/** The name of the group. */
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: {[id: string]: string } | null;
	}

	export interface CreateGroupPostBodyInitialVersion {
		ConnectorDefinitionVersionArn?: string | null;
		CoreDefinitionVersionArn?: string | null;
		DeviceDefinitionVersionArn?: string | null;
		FunctionDefinitionVersionArn?: string | null;
		LoggerDefinitionVersionArn?: string | null;
		ResourceDefinitionVersionArn?: string | null;
		SubscriptionDefinitionVersionArn?: string | null;
	}

	export interface CreateGroupVersionPostBody {

		/** The ARN of the connector definition version for this group. */
		ConnectorDefinitionVersionArn?: string | null;

		/** The ARN of the core definition version for this group. */
		CoreDefinitionVersionArn?: string | null;

		/** The ARN of the device definition version for this group. */
		DeviceDefinitionVersionArn?: string | null;

		/** The ARN of the function definition version for this group. */
		FunctionDefinitionVersionArn?: string | null;

		/** The ARN of the logger definition version for this group. */
		LoggerDefinitionVersionArn?: string | null;

		/** The ARN of the resource definition version for this group. */
		ResourceDefinitionVersionArn?: string | null;

		/** The ARN of the subscription definition version for this group. */
		SubscriptionDefinitionVersionArn?: string | null;
	}

	export interface CreateLoggerDefinitionPostBody {

		/** Information about a logger definition version. */
		InitialVersion?: CreateLoggerDefinitionPostBodyInitialVersion | null;

		/** The name of the logger definition. */
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: {[id: string]: string } | null;
	}

	export interface CreateLoggerDefinitionPostBodyInitialVersion {
		Loggers?: Array<Logger> | null;
	}

	export interface CreateLoggerDefinitionVersionPostBody {

		/** A list of loggers. */
		Loggers?: Array<Logger> | null;
	}

	export interface CreateResourceDefinitionPostBody {

		/** Information about a resource definition version. */
		InitialVersion?: CreateResourceDefinitionPostBodyInitialVersion | null;

		/** The name of the resource definition. */
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: {[id: string]: string } | null;
	}

	export interface CreateResourceDefinitionPostBodyInitialVersion {
		Resources?: Array<Resource> | null;
	}

	export interface CreateResourceDefinitionVersionPostBody {

		/** A list of resources. */
		Resources?: Array<Resource> | null;
	}

	export interface CreateSoftwareUpdateJobPostBody {

		/**
		 * The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.
		 * Required
		 */
		S3UrlSignerRole: string;

		/**
		 * The piece of software on the Greengrass core that will be updated.
		 * Required
		 */
		SoftwareToUpdate: SoftwareToUpdate;

		/** The minimum level of log statements that should be logged by the OTA Agent during an update. */
		UpdateAgentLogLevel?: UpdateAgentLogLevel | null;

		/**
		 * The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.
		 * Required
		 */
		UpdateTargets: Array<string>;

		/**
		 * The architecture of the cores which are the targets of an update.
		 * Required
		 */
		UpdateTargetsArchitecture: UpdateTargetsArchitecture;

		/**
		 * The operating system of the cores which are the targets of an update.
		 * Required
		 */
		UpdateTargetsOperatingSystem: UpdateTargetsOperatingSystem;
	}

	export interface CreateSubscriptionDefinitionPostBody {

		/** Information about a subscription definition version. */
		InitialVersion?: CreateSubscriptionDefinitionPostBodyInitialVersion | null;

		/** The name of the subscription definition. */
		Name?: string | null;

		/** The key-value pair for the resource tag. */
		tags?: {[id: string]: string } | null;
	}

	export interface CreateSubscriptionDefinitionPostBodyInitialVersion {
		Subscriptions?: Array<Subscription> | null;
	}

	export interface CreateSubscriptionDefinitionVersionPostBody {

		/** A list of subscriptions. */
		Subscriptions?: Array<Subscription> | null;
	}

	export interface UpdateConnectorDefinitionPutBody {

		/** The name of the definition. */
		Name?: string | null;
	}

	export interface UpdateCoreDefinitionPutBody {

		/** The name of the definition. */
		Name?: string | null;
	}

	export interface UpdateDeviceDefinitionPutBody {

		/** The name of the definition. */
		Name?: string | null;
	}

	export interface UpdateFunctionDefinitionPutBody {

		/** The name of the definition. */
		Name?: string | null;
	}

	export interface UpdateGroupPutBody {

		/** The name of the definition. */
		Name?: string | null;
	}

	export interface UpdateLoggerDefinitionPutBody {

		/** The name of the definition. */
		Name?: string | null;
	}

	export interface UpdateResourceDefinitionPutBody {

		/** The name of the definition. */
		Name?: string | null;
	}

	export interface UpdateSubscriptionDefinitionPutBody {

		/** The name of the definition. */
		Name?: string | null;
	}

	export interface UpdateConnectivityInfoPutBody {

		/** A list of connectivity info. */
		ConnectivityInfo?: Array<ConnectivityInfo> | null;
	}

	export interface UpdateGroupCertificateConfigurationPutBody {

		/** The amount of time remaining before the certificate expires, in milliseconds. */
		CertificateExpiryInMilliseconds?: string | null;
	}

	export interface StartBulkDeploymentPostBody {

		/**
		 * The ARN of the execution role to associate with the bulk deployment operation. This IAM role must allow the ''greengrass:CreateDeployment'' action for all group versions that are listed in the input file. This IAM role must have access to the S3 bucket containing the input file.
		 * Required
		 */
		ExecutionRoleArn: string;

		/**
		 * The URI of the input file contained in the S3 bucket. The execution role must have ''getObject'' permissions on this bucket to access the input file. The input file is a JSON-serialized, line delimited file with UTF-8 encoding that provides a list of group and version IDs and the deployment type. This file must be less than 100 MB. Currently, AWS IoT Greengrass supports only ''NewDeployment'' deployment types.
		 * Required
		 */
		InputFileUri: string;

		/** The key-value pair for the resource tag. */
		tags?: {[id: string]: string } | null;
	}

	export interface TagResourcePostBody {

		/** The key-value pair for the resource tag. */
		tags?: {[id: string]: string } | null;
	}

	export interface ResetDeploymentsPostBody {

		/** If true, performs a best-effort only core reset. */
		Force?: boolean | null;
	}

}

