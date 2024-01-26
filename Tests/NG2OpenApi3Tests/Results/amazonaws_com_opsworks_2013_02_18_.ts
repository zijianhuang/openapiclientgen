import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssignInstanceRequest {

		/** Required */
		InstanceId: string;

		/** Required */
		LayerIds: Array<string>;
	}
	export interface AssignInstanceRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateAssignInstanceRequestFormGroup() {
		return new FormGroup<AssignInstanceRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface AssignVolumeRequest {

		/** Required */
		VolumeId: string;
		InstanceId?: string;
	}
	export interface AssignVolumeRequestFormProperties {

		/** Required */
		VolumeId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateAssignVolumeRequestFormGroup() {
		return new FormGroup<AssignVolumeRequestFormProperties>({
			VolumeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateElasticIpRequest {

		/** Required */
		ElasticIp: string;
		InstanceId?: string;
	}
	export interface AssociateElasticIpRequestFormProperties {

		/** Required */
		ElasticIp: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateElasticIpRequestFormGroup() {
		return new FormGroup<AssociateElasticIpRequestFormProperties>({
			ElasticIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttachElasticLoadBalancerRequest {

		/** Required */
		ElasticLoadBalancerName: string;

		/** Required */
		LayerId: string;
	}
	export interface AttachElasticLoadBalancerRequestFormProperties {

		/** Required */
		ElasticLoadBalancerName: FormControl<string | null | undefined>,

		/** Required */
		LayerId: FormControl<string | null | undefined>,
	}
	export function CreateAttachElasticLoadBalancerRequestFormGroup() {
		return new FormGroup<AttachElasticLoadBalancerRequestFormProperties>({
			ElasticLoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LayerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the response to a <code>CloneStack</code> request. */
	export interface CloneStackResult {
		StackId?: string;
	}

	/** Contains the response to a <code>CloneStack</code> request. */
	export interface CloneStackResultFormProperties {
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateCloneStackResultFormGroup() {
		return new FormGroup<CloneStackResultFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CloneStackRequest {

		/** Required */
		SourceStackId: string;
		Name?: string;
		Region?: string;
		VpcId?: string;
		Attributes?: StackAttributes;

		/** Required */
		ServiceRoleArn: string;
		DefaultInstanceProfileArn?: string;
		DefaultOs?: string;
		HostnameTheme?: string;
		DefaultAvailabilityZone?: string;
		DefaultSubnetId?: string;
		CustomJson?: string;
		ConfigurationManager?: StackConfigurationManager;
		ChefConfiguration?: ChefConfiguration;
		UseCustomCookbooks?: boolean | null;
		UseOpsworksSecurityGroups?: boolean | null;
		CustomCookbooksSource?: Source;
		DefaultSshKeyName?: string;
		ClonePermissions?: boolean | null;
		CloneAppIds?: Array<string>;
		DefaultRootDeviceType?: RootDeviceType;
		AgentVersion?: string;
	}
	export interface CloneStackRequestFormProperties {

		/** Required */
		SourceStackId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,

		/** Required */
		ServiceRoleArn: FormControl<string | null | undefined>,
		DefaultInstanceProfileArn: FormControl<string | null | undefined>,
		DefaultOs: FormControl<string | null | undefined>,
		HostnameTheme: FormControl<string | null | undefined>,
		DefaultAvailabilityZone: FormControl<string | null | undefined>,
		DefaultSubnetId: FormControl<string | null | undefined>,
		CustomJson: FormControl<string | null | undefined>,
		UseCustomCookbooks: FormControl<boolean | null | undefined>,
		UseOpsworksSecurityGroups: FormControl<boolean | null | undefined>,
		DefaultSshKeyName: FormControl<string | null | undefined>,
		ClonePermissions: FormControl<boolean | null | undefined>,
		DefaultRootDeviceType: FormControl<RootDeviceType | null | undefined>,
		AgentVersion: FormControl<string | null | undefined>,
	}
	export function CreateCloneStackRequestFormGroup() {
		return new FormGroup<CloneStackRequestFormProperties>({
			SourceStackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			ServiceRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultInstanceProfileArn: new FormControl<string | null | undefined>(undefined),
			DefaultOs: new FormControl<string | null | undefined>(undefined),
			HostnameTheme: new FormControl<string | null | undefined>(undefined),
			DefaultAvailabilityZone: new FormControl<string | null | undefined>(undefined),
			DefaultSubnetId: new FormControl<string | null | undefined>(undefined),
			CustomJson: new FormControl<string | null | undefined>(undefined),
			UseCustomCookbooks: new FormControl<boolean | null | undefined>(undefined),
			UseOpsworksSecurityGroups: new FormControl<boolean | null | undefined>(undefined),
			DefaultSshKeyName: new FormControl<string | null | undefined>(undefined),
			ClonePermissions: new FormControl<boolean | null | undefined>(undefined),
			DefaultRootDeviceType: new FormControl<RootDeviceType | null | undefined>(undefined),
			AgentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StackAttributes {
	}
	export interface StackAttributesFormProperties {
	}
	export function CreateStackAttributesFormGroup() {
		return new FormGroup<StackAttributesFormProperties>({
		});

	}


	/** Describes the configuration manager. */
	export interface StackConfigurationManager {
		Name?: string;
		Version?: string;
	}

	/** Describes the configuration manager. */
	export interface StackConfigurationManagerFormProperties {
		Name: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateStackConfigurationManagerFormGroup() {
		return new FormGroup<StackConfigurationManagerFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the Chef configuration. */
	export interface ChefConfiguration {
		ManageBerkshelf?: boolean | null;
		BerkshelfVersion?: string;
	}

	/** Describes the Chef configuration. */
	export interface ChefConfigurationFormProperties {
		ManageBerkshelf: FormControl<boolean | null | undefined>,
		BerkshelfVersion: FormControl<string | null | undefined>,
	}
	export function CreateChefConfigurationFormGroup() {
		return new FormGroup<ChefConfigurationFormProperties>({
			ManageBerkshelf: new FormControl<boolean | null | undefined>(undefined),
			BerkshelfVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>. */
	export interface Source {
		Type?: SourceType;
		Url?: string;
		Username?: string;
		Password?: string;
		SshKey?: string;
		Revision?: string;
	}

	/** Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a> or <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html">Custom Recipes and Cookbooks</a>. */
	export interface SourceFormProperties {
		Type: FormControl<SourceType | null | undefined>,
		Url: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		SshKey: FormControl<string | null | undefined>,
		Revision: FormControl<string | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			Type: new FormControl<SourceType | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			SshKey: new FormControl<string | null | undefined>(undefined),
			Revision: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SourceType { git = 0, svn = 1, archive = 2, s3 = 3 }

	export enum RootDeviceType { ebs = 0, 'instance-store' = 1 }


	/** Contains the response to a <code>CreateApp</code> request. */
	export interface CreateAppResult {
		AppId?: string;
	}

	/** Contains the response to a <code>CreateApp</code> request. */
	export interface CreateAppResultFormProperties {
		AppId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppResultFormGroup() {
		return new FormGroup<CreateAppResultFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAppRequest {

		/** Required */
		StackId: string;
		Shortname?: string;

		/** Required */
		Name: string;
		Description?: string;
		DataSources?: Array<DataSource>;

		/** Required */
		Type: AppType;
		AppSource?: Source;
		Domains?: Array<string>;
		EnableSsl?: boolean | null;
		SslConfiguration?: SslConfiguration;
		Attributes?: AppAttributes;
		Environment?: Array<EnvironmentVariable>;
	}
	export interface CreateAppRequestFormProperties {

		/** Required */
		StackId: FormControl<string | null | undefined>,
		Shortname: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<AppType | null | undefined>,
		EnableSsl: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateAppRequestFormGroup() {
		return new FormGroup<CreateAppRequestFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Shortname: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<AppType | null | undefined>(undefined, [Validators.required]),
			EnableSsl: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes an app's data source. */
	export interface DataSource {
		Type?: string;
		Arn?: string;
		DatabaseName?: string;
	}

	/** Describes an app's data source. */
	export interface DataSourceFormProperties {
		Type: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AppType { 'aws-flow-ruby' = 0, java = 1, rails = 2, php = 3, nodejs = 4, static = 5, other = 6 }


	/** Describes an app's SSL configuration. */
	export interface SslConfiguration {

		/** Required */
		Certificate: string;

		/** Required */
		PrivateKey: string;
		Chain?: string;
	}

	/** Describes an app's SSL configuration. */
	export interface SslConfigurationFormProperties {

		/** Required */
		Certificate: FormControl<string | null | undefined>,

		/** Required */
		PrivateKey: FormControl<string | null | undefined>,
		Chain: FormControl<string | null | undefined>,
	}
	export function CreateSslConfigurationFormGroup() {
		return new FormGroup<SslConfigurationFormProperties>({
			Certificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PrivateKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Chain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppAttributes {
	}
	export interface AppAttributesFormProperties {
	}
	export function CreateAppAttributesFormGroup() {
		return new FormGroup<AppAttributesFormProperties>({
		});

	}


	/** Represents an app's environment variable. */
	export interface EnvironmentVariable {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
		Secure?: boolean | null;
	}

	/** Represents an app's environment variable. */
	export interface EnvironmentVariableFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
		Secure: FormControl<boolean | null | undefined>,
	}
	export function CreateEnvironmentVariableFormGroup() {
		return new FormGroup<EnvironmentVariableFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Secure: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains the response to a <code>CreateDeployment</code> request. */
	export interface CreateDeploymentResult {
		DeploymentId?: string;
	}

	/** Contains the response to a <code>CreateDeployment</code> request. */
	export interface CreateDeploymentResultFormProperties {
		DeploymentId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentResultFormGroup() {
		return new FormGroup<CreateDeploymentResultFormProperties>({
			DeploymentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeploymentRequest {

		/** Required */
		StackId: string;
		AppId?: string;
		InstanceIds?: Array<string>;
		LayerIds?: Array<string>;

		/** Required */
		Command: DeploymentCommand;
		Comment?: string;
		CustomJson?: string;
	}
	export interface CreateDeploymentRequestFormProperties {

		/** Required */
		StackId: FormControl<string | null | undefined>,
		AppId: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,
		CustomJson: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentRequestFormGroup() {
		return new FormGroup<CreateDeploymentRequestFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AppId: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
			CustomJson: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to specify a stack or deployment command. */
	export interface DeploymentCommand {

		/** Required */
		Name: DeploymentCommandName;
		Args?: DeploymentCommandArgs;
	}

	/** Used to specify a stack or deployment command. */
	export interface DeploymentCommandFormProperties {

		/** Required */
		Name: FormControl<DeploymentCommandName | null | undefined>,
	}
	export function CreateDeploymentCommandFormGroup() {
		return new FormGroup<DeploymentCommandFormProperties>({
			Name: new FormControl<DeploymentCommandName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DeploymentCommandName { install_dependencies = 0, update_dependencies = 1, update_custom_cookbooks = 2, execute_recipes = 3, configure = 4, setup = 5, deploy = 6, rollback = 7, start = 8, stop = 9, restart = 10, undeploy = 11 }

	export interface DeploymentCommandArgs {
	}
	export interface DeploymentCommandArgsFormProperties {
	}
	export function CreateDeploymentCommandArgsFormGroup() {
		return new FormGroup<DeploymentCommandArgsFormProperties>({
		});

	}


	/** Contains the response to a <code>CreateInstance</code> request. */
	export interface CreateInstanceResult {
		InstanceId?: string;
	}

	/** Contains the response to a <code>CreateInstance</code> request. */
	export interface CreateInstanceResultFormProperties {
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateCreateInstanceResultFormGroup() {
		return new FormGroup<CreateInstanceResultFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateInstanceRequest {

		/** Required */
		StackId: string;

		/** Required */
		LayerIds: Array<string>;

		/** Required */
		InstanceType: string;
		AutoScalingType?: AutoScalingType;
		Hostname?: string;
		Os?: string;
		AmiId?: string;
		SshKeyName?: string;
		AvailabilityZone?: string;
		VirtualizationType?: string;
		SubnetId?: string;
		Architecture?: Architecture;
		RootDeviceType?: RootDeviceType;
		BlockDeviceMappings?: Array<BlockDeviceMapping>;
		InstallUpdatesOnBoot?: boolean | null;
		EbsOptimized?: boolean | null;
		AgentVersion?: string;
		Tenancy?: string;
	}
	export interface CreateInstanceRequestFormProperties {

		/** Required */
		StackId: FormControl<string | null | undefined>,

		/** Required */
		InstanceType: FormControl<string | null | undefined>,
		AutoScalingType: FormControl<AutoScalingType | null | undefined>,
		Hostname: FormControl<string | null | undefined>,
		Os: FormControl<string | null | undefined>,
		AmiId: FormControl<string | null | undefined>,
		SshKeyName: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		VirtualizationType: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
		Architecture: FormControl<Architecture | null | undefined>,
		RootDeviceType: FormControl<RootDeviceType | null | undefined>,
		InstallUpdatesOnBoot: FormControl<boolean | null | undefined>,
		EbsOptimized: FormControl<boolean | null | undefined>,
		AgentVersion: FormControl<string | null | undefined>,
		Tenancy: FormControl<string | null | undefined>,
	}
	export function CreateCreateInstanceRequestFormGroup() {
		return new FormGroup<CreateInstanceRequestFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AutoScalingType: new FormControl<AutoScalingType | null | undefined>(undefined),
			Hostname: new FormControl<string | null | undefined>(undefined),
			Os: new FormControl<string | null | undefined>(undefined),
			AmiId: new FormControl<string | null | undefined>(undefined),
			SshKeyName: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			VirtualizationType: new FormControl<string | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined),
			Architecture: new FormControl<Architecture | null | undefined>(undefined),
			RootDeviceType: new FormControl<RootDeviceType | null | undefined>(undefined),
			InstallUpdatesOnBoot: new FormControl<boolean | null | undefined>(undefined),
			EbsOptimized: new FormControl<boolean | null | undefined>(undefined),
			AgentVersion: new FormControl<string | null | undefined>(undefined),
			Tenancy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AutoScalingType { load = 0, timer = 1 }

	export enum Architecture { x86_64 = 0, i386 = 1 }


	/** Describes a block device mapping. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html">BlockDeviceMapping</a> data type.  */
	export interface BlockDeviceMapping {
		DeviceName?: string;
		NoDevice?: string;
		VirtualName?: string;
		Ebs?: EbsBlockDevice;
	}

	/** Describes a block device mapping. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html">BlockDeviceMapping</a> data type.  */
	export interface BlockDeviceMappingFormProperties {
		DeviceName: FormControl<string | null | undefined>,
		NoDevice: FormControl<string | null | undefined>,
		VirtualName: FormControl<string | null | undefined>,
	}
	export function CreateBlockDeviceMappingFormGroup() {
		return new FormGroup<BlockDeviceMappingFormProperties>({
			DeviceName: new FormControl<string | null | undefined>(undefined),
			NoDevice: new FormControl<string | null | undefined>(undefined),
			VirtualName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Amazon EBS volume. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a> data type. */
	export interface EbsBlockDevice {
		SnapshotId?: string;
		Iops?: number | null;
		VolumeSize?: number | null;
		VolumeType?: VolumeType;
		DeleteOnTermination?: boolean | null;
	}

	/** Describes an Amazon EBS volume. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a> data type. */
	export interface EbsBlockDeviceFormProperties {
		SnapshotId: FormControl<string | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		VolumeSize: FormControl<number | null | undefined>,
		VolumeType: FormControl<VolumeType | null | undefined>,
		DeleteOnTermination: FormControl<boolean | null | undefined>,
	}
	export function CreateEbsBlockDeviceFormGroup() {
		return new FormGroup<EbsBlockDeviceFormProperties>({
			SnapshotId: new FormControl<string | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			VolumeSize: new FormControl<number | null | undefined>(undefined),
			VolumeType: new FormControl<VolumeType | null | undefined>(undefined),
			DeleteOnTermination: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum VolumeType { gp2 = 0, io1 = 1, standard = 2 }


	/** Contains the response to a <code>CreateLayer</code> request. */
	export interface CreateLayerResult {
		LayerId?: string;
	}

	/** Contains the response to a <code>CreateLayer</code> request. */
	export interface CreateLayerResultFormProperties {
		LayerId: FormControl<string | null | undefined>,
	}
	export function CreateCreateLayerResultFormGroup() {
		return new FormGroup<CreateLayerResultFormProperties>({
			LayerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLayerRequest {

		/** Required */
		StackId: string;

		/** Required */
		Type: LayerType;

		/** Required */
		Name: string;

		/** Required */
		Shortname: string;
		Attributes?: LayerAttributes;
		CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;
		CustomInstanceProfileArn?: string;
		CustomJson?: string;
		CustomSecurityGroupIds?: Array<string>;
		Packages?: Array<string>;
		VolumeConfigurations?: Array<VolumeConfiguration>;
		EnableAutoHealing?: boolean | null;
		AutoAssignElasticIps?: boolean | null;
		AutoAssignPublicIps?: boolean | null;
		CustomRecipes?: Recipes;
		InstallUpdatesOnBoot?: boolean | null;
		UseEbsOptimizedInstances?: boolean | null;
		LifecycleEventConfiguration?: LifecycleEventConfiguration;
	}
	export interface CreateLayerRequestFormProperties {

		/** Required */
		StackId: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<LayerType | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Shortname: FormControl<string | null | undefined>,
		CustomInstanceProfileArn: FormControl<string | null | undefined>,
		CustomJson: FormControl<string | null | undefined>,
		EnableAutoHealing: FormControl<boolean | null | undefined>,
		AutoAssignElasticIps: FormControl<boolean | null | undefined>,
		AutoAssignPublicIps: FormControl<boolean | null | undefined>,
		InstallUpdatesOnBoot: FormControl<boolean | null | undefined>,
		UseEbsOptimizedInstances: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateLayerRequestFormGroup() {
		return new FormGroup<CreateLayerRequestFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<LayerType | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Shortname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CustomInstanceProfileArn: new FormControl<string | null | undefined>(undefined),
			CustomJson: new FormControl<string | null | undefined>(undefined),
			EnableAutoHealing: new FormControl<boolean | null | undefined>(undefined),
			AutoAssignElasticIps: new FormControl<boolean | null | undefined>(undefined),
			AutoAssignPublicIps: new FormControl<boolean | null | undefined>(undefined),
			InstallUpdatesOnBoot: new FormControl<boolean | null | undefined>(undefined),
			UseEbsOptimizedInstances: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum LayerType { 'aws-flow-ruby' = 0, 'ecs-cluster' = 1, 'java-app' = 2, lb = 3, web = 4, 'php-app' = 5, 'rails-app' = 6, 'nodejs-app' = 7, memcached = 8, 'db-master' = 9, 'monitoring-master' = 10, custom = 11 }

	export interface LayerAttributes {
	}
	export interface LayerAttributesFormProperties {
	}
	export function CreateLayerAttributesFormGroup() {
		return new FormGroup<LayerAttributesFormProperties>({
		});

	}


	/** Describes the Amazon CloudWatch logs configuration for a layer. */
	export interface CloudWatchLogsConfiguration {
		Enabled?: boolean | null;
		LogStreams?: Array<CloudWatchLogsLogStream>;
	}

	/** Describes the Amazon CloudWatch logs configuration for a layer. */
	export interface CloudWatchLogsConfigurationFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCloudWatchLogsConfigurationFormGroup() {
		return new FormGroup<CloudWatchLogsConfigurationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes the Amazon CloudWatch logs configuration for a layer. For detailed information about members of this data type, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html">CloudWatch Logs Agent Reference</a>. */
	export interface CloudWatchLogsLogStream {
		LogGroupName?: string;
		DatetimeFormat?: string;
		TimeZone?: CloudWatchLogsTimeZone;
		File?: string;
		FileFingerprintLines?: string;
		MultiLineStartPattern?: string;
		InitialPosition?: CloudWatchLogsInitialPosition;
		Encoding?: CloudWatchLogsEncoding;
		BufferDuration?: number | null;
		BatchCount?: number | null;
		BatchSize?: number | null;
	}

	/** Describes the Amazon CloudWatch logs configuration for a layer. For detailed information about members of this data type, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AgentReference.html">CloudWatch Logs Agent Reference</a>. */
	export interface CloudWatchLogsLogStreamFormProperties {
		LogGroupName: FormControl<string | null | undefined>,
		DatetimeFormat: FormControl<string | null | undefined>,
		TimeZone: FormControl<CloudWatchLogsTimeZone | null | undefined>,
		File: FormControl<string | null | undefined>,
		FileFingerprintLines: FormControl<string | null | undefined>,
		MultiLineStartPattern: FormControl<string | null | undefined>,
		InitialPosition: FormControl<CloudWatchLogsInitialPosition | null | undefined>,
		Encoding: FormControl<CloudWatchLogsEncoding | null | undefined>,
		BufferDuration: FormControl<number | null | undefined>,
		BatchCount: FormControl<number | null | undefined>,
		BatchSize: FormControl<number | null | undefined>,
	}
	export function CreateCloudWatchLogsLogStreamFormGroup() {
		return new FormGroup<CloudWatchLogsLogStreamFormProperties>({
			LogGroupName: new FormControl<string | null | undefined>(undefined),
			DatetimeFormat: new FormControl<string | null | undefined>(undefined),
			TimeZone: new FormControl<CloudWatchLogsTimeZone | null | undefined>(undefined),
			File: new FormControl<string | null | undefined>(undefined),
			FileFingerprintLines: new FormControl<string | null | undefined>(undefined),
			MultiLineStartPattern: new FormControl<string | null | undefined>(undefined),
			InitialPosition: new FormControl<CloudWatchLogsInitialPosition | null | undefined>(undefined),
			Encoding: new FormControl<CloudWatchLogsEncoding | null | undefined>(undefined),
			BufferDuration: new FormControl<number | null | undefined>(undefined),
			BatchCount: new FormControl<number | null | undefined>(undefined),
			BatchSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The preferred time zone for logs streamed to CloudWatch Logs. Valid values are <code>LOCAL</code> and <code>UTC</code>, for Coordinated Universal Time. */
	export enum CloudWatchLogsTimeZone { LOCAL = 0, UTC = 1 }


	/** Specifies where to start to read data (start_of_file or end_of_file). The default is start_of_file. It's only used if there is no state persisted for that log stream. */
	export enum CloudWatchLogsInitialPosition { start_of_file = 0, end_of_file = 1 }


	/** Specifies the encoding of the log file so that the file can be read correctly. The default is <code>utf_8</code>. Encodings supported by Python <code>codecs.decode()</code> can be used here. */
	export enum CloudWatchLogsEncoding { ascii = 0, big5 = 1, big5hkscs = 2, cp037 = 3, cp424 = 4, cp437 = 5, cp500 = 6, cp720 = 7, cp737 = 8, cp775 = 9, cp850 = 10, cp852 = 11, cp855 = 12, cp856 = 13, cp857 = 14, cp858 = 15, cp860 = 16, cp861 = 17, cp862 = 18, cp863 = 19, cp864 = 20, cp865 = 21, cp866 = 22, cp869 = 23, cp874 = 24, cp875 = 25, cp932 = 26, cp949 = 27, cp950 = 28, cp1006 = 29, cp1026 = 30, cp1140 = 31, cp1250 = 32, cp1251 = 33, cp1252 = 34, cp1253 = 35, cp1254 = 36, cp1255 = 37, cp1256 = 38, cp1257 = 39, cp1258 = 40, euc_jp = 41, euc_jis_2004 = 42, euc_jisx0213 = 43, euc_kr = 44, gb2312 = 45, gbk = 46, gb18030 = 47, hz = 48, iso2022_jp = 49, iso2022_jp_1 = 50, iso2022_jp_2 = 51, iso2022_jp_2004 = 52, iso2022_jp_3 = 53, iso2022_jp_ext = 54, iso2022_kr = 55, latin_1 = 56, iso8859_2 = 57, iso8859_3 = 58, iso8859_4 = 59, iso8859_5 = 60, iso8859_6 = 61, iso8859_7 = 62, iso8859_8 = 63, iso8859_9 = 64, iso8859_10 = 65, iso8859_13 = 66, iso8859_14 = 67, iso8859_15 = 68, iso8859_16 = 69, johab = 70, koi8_r = 71, koi8_u = 72, mac_cyrillic = 73, mac_greek = 74, mac_iceland = 75, mac_latin2 = 76, mac_roman = 77, mac_turkish = 78, ptcp154 = 79, shift_jis = 80, shift_jis_2004 = 81, shift_jisx0213 = 82, utf_32 = 83, utf_32_be = 84, utf_32_le = 85, utf_16 = 86, utf_16_be = 87, utf_16_le = 88, utf_7 = 89, utf_8 = 90, utf_8_sig = 91 }


	/** Describes an Amazon EBS volume configuration. */
	export interface VolumeConfiguration {

		/** Required */
		MountPoint: string;
		RaidLevel?: number | null;

		/** Required */
		NumberOfDisks: number;

		/** Required */
		Size: number;
		VolumeType?: string;
		Iops?: number | null;
		Encrypted?: boolean | null;
	}

	/** Describes an Amazon EBS volume configuration. */
	export interface VolumeConfigurationFormProperties {

		/** Required */
		MountPoint: FormControl<string | null | undefined>,
		RaidLevel: FormControl<number | null | undefined>,

		/** Required */
		NumberOfDisks: FormControl<number | null | undefined>,

		/** Required */
		Size: FormControl<number | null | undefined>,
		VolumeType: FormControl<string | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		Encrypted: FormControl<boolean | null | undefined>,
	}
	export function CreateVolumeConfigurationFormGroup() {
		return new FormGroup<VolumeConfigurationFormProperties>({
			MountPoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RaidLevel: new FormControl<number | null | undefined>(undefined),
			NumberOfDisks: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			VolumeType: new FormControl<string | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>AWS OpsWorks Stacks supports five lifecycle events: <b>setup</b>, <b>configuration</b>, <b>deploy</b>, <b>undeploy</b>, and <b>shutdown</b>. For each layer, AWS OpsWorks Stacks runs a set of standard recipes for each event. In addition, you can provide custom recipes for any or all layers and events. AWS OpsWorks Stacks runs custom event recipes after the standard recipes. <code>LayerCustomRecipes</code> specifies the custom recipes for a particular layer to be run in response to each of the five events. </p> <p>To specify a recipe, use the cookbook's directory name in the repository followed by two colons and the recipe name, which is the recipe's file name without the .rb extension. For example: phpapp2::dbsetup specifies the dbsetup.rb recipe in the repository's phpapp2 folder.</p> */
	export interface Recipes {
		Setup?: Array<string>;
		Configure?: Array<string>;
		Deploy?: Array<string>;
		Undeploy?: Array<string>;
		Shutdown?: Array<string>;
	}

	/** <p>AWS OpsWorks Stacks supports five lifecycle events: <b>setup</b>, <b>configuration</b>, <b>deploy</b>, <b>undeploy</b>, and <b>shutdown</b>. For each layer, AWS OpsWorks Stacks runs a set of standard recipes for each event. In addition, you can provide custom recipes for any or all layers and events. AWS OpsWorks Stacks runs custom event recipes after the standard recipes. <code>LayerCustomRecipes</code> specifies the custom recipes for a particular layer to be run in response to each of the five events. </p> <p>To specify a recipe, use the cookbook's directory name in the repository followed by two colons and the recipe name, which is the recipe's file name without the .rb extension. For example: phpapp2::dbsetup specifies the dbsetup.rb recipe in the repository's phpapp2 folder.</p> */
	export interface RecipesFormProperties {
	}
	export function CreateRecipesFormGroup() {
		return new FormGroup<RecipesFormProperties>({
		});

	}


	/** Specifies the lifecycle event configuration */
	export interface LifecycleEventConfiguration {
		Shutdown?: ShutdownEventConfiguration;
	}

	/** Specifies the lifecycle event configuration */
	export interface LifecycleEventConfigurationFormProperties {
	}
	export function CreateLifecycleEventConfigurationFormGroup() {
		return new FormGroup<LifecycleEventConfigurationFormProperties>({
		});

	}


	/** The Shutdown event configuration. */
	export interface ShutdownEventConfiguration {
		ExecutionTimeout?: number | null;
		DelayUntilElbConnectionsDrained?: boolean | null;
	}

	/** The Shutdown event configuration. */
	export interface ShutdownEventConfigurationFormProperties {
		ExecutionTimeout: FormControl<number | null | undefined>,
		DelayUntilElbConnectionsDrained: FormControl<boolean | null | undefined>,
	}
	export function CreateShutdownEventConfigurationFormGroup() {
		return new FormGroup<ShutdownEventConfigurationFormProperties>({
			ExecutionTimeout: new FormControl<number | null | undefined>(undefined),
			DelayUntilElbConnectionsDrained: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains the response to a <code>CreateStack</code> request. */
	export interface CreateStackResult {
		StackId?: string;
	}

	/** Contains the response to a <code>CreateStack</code> request. */
	export interface CreateStackResultFormProperties {
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateCreateStackResultFormGroup() {
		return new FormGroup<CreateStackResultFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateStackRequest {

		/** Required */
		Name: string;

		/** Required */
		Region: string;
		VpcId?: string;
		Attributes?: StackAttributes;

		/** Required */
		ServiceRoleArn: string;

		/** Required */
		DefaultInstanceProfileArn: string;
		DefaultOs?: string;
		HostnameTheme?: string;
		DefaultAvailabilityZone?: string;
		DefaultSubnetId?: string;
		CustomJson?: string;
		ConfigurationManager?: StackConfigurationManager;
		ChefConfiguration?: ChefConfiguration;
		UseCustomCookbooks?: boolean | null;
		UseOpsworksSecurityGroups?: boolean | null;
		CustomCookbooksSource?: Source;
		DefaultSshKeyName?: string;
		DefaultRootDeviceType?: RootDeviceType;
		AgentVersion?: string;
	}
	export interface CreateStackRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Region: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,

		/** Required */
		ServiceRoleArn: FormControl<string | null | undefined>,

		/** Required */
		DefaultInstanceProfileArn: FormControl<string | null | undefined>,
		DefaultOs: FormControl<string | null | undefined>,
		HostnameTheme: FormControl<string | null | undefined>,
		DefaultAvailabilityZone: FormControl<string | null | undefined>,
		DefaultSubnetId: FormControl<string | null | undefined>,
		CustomJson: FormControl<string | null | undefined>,
		UseCustomCookbooks: FormControl<boolean | null | undefined>,
		UseOpsworksSecurityGroups: FormControl<boolean | null | undefined>,
		DefaultSshKeyName: FormControl<string | null | undefined>,
		DefaultRootDeviceType: FormControl<RootDeviceType | null | undefined>,
		AgentVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateStackRequestFormGroup() {
		return new FormGroup<CreateStackRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VpcId: new FormControl<string | null | undefined>(undefined),
			ServiceRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultInstanceProfileArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultOs: new FormControl<string | null | undefined>(undefined),
			HostnameTheme: new FormControl<string | null | undefined>(undefined),
			DefaultAvailabilityZone: new FormControl<string | null | undefined>(undefined),
			DefaultSubnetId: new FormControl<string | null | undefined>(undefined),
			CustomJson: new FormControl<string | null | undefined>(undefined),
			UseCustomCookbooks: new FormControl<boolean | null | undefined>(undefined),
			UseOpsworksSecurityGroups: new FormControl<boolean | null | undefined>(undefined),
			DefaultSshKeyName: new FormControl<string | null | undefined>(undefined),
			DefaultRootDeviceType: new FormControl<RootDeviceType | null | undefined>(undefined),
			AgentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a <code>CreateUserProfile</code> request. */
	export interface CreateUserProfileResult {
		IamUserArn?: string;
	}

	/** Contains the response to a <code>CreateUserProfile</code> request. */
	export interface CreateUserProfileResultFormProperties {
		IamUserArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserProfileResultFormGroup() {
		return new FormGroup<CreateUserProfileResultFormProperties>({
			IamUserArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUserProfileRequest {

		/** Required */
		IamUserArn: string;
		SshUsername?: string;
		SshPublicKey?: string;
		AllowSelfManagement?: boolean | null;
	}
	export interface CreateUserProfileRequestFormProperties {

		/** Required */
		IamUserArn: FormControl<string | null | undefined>,
		SshUsername: FormControl<string | null | undefined>,
		SshPublicKey: FormControl<string | null | undefined>,
		AllowSelfManagement: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateUserProfileRequestFormGroup() {
		return new FormGroup<CreateUserProfileRequestFormProperties>({
			IamUserArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SshUsername: new FormControl<string | null | undefined>(undefined),
			SshPublicKey: new FormControl<string | null | undefined>(undefined),
			AllowSelfManagement: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteAppRequest {

		/** Required */
		AppId: string;
	}
	export interface DeleteAppRequestFormProperties {

		/** Required */
		AppId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppRequestFormGroup() {
		return new FormGroup<DeleteAppRequestFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteInstanceRequest {

		/** Required */
		InstanceId: string;
		DeleteElasticIp?: boolean | null;
		DeleteVolumes?: boolean | null;
	}
	export interface DeleteInstanceRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		DeleteElasticIp: FormControl<boolean | null | undefined>,
		DeleteVolumes: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteInstanceRequestFormGroup() {
		return new FormGroup<DeleteInstanceRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeleteElasticIp: new FormControl<boolean | null | undefined>(undefined),
			DeleteVolumes: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteLayerRequest {

		/** Required */
		LayerId: string;
	}
	export interface DeleteLayerRequestFormProperties {

		/** Required */
		LayerId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLayerRequestFormGroup() {
		return new FormGroup<DeleteLayerRequestFormProperties>({
			LayerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteStackRequest {

		/** Required */
		StackId: string;
	}
	export interface DeleteStackRequestFormProperties {

		/** Required */
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStackRequestFormGroup() {
		return new FormGroup<DeleteStackRequestFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteUserProfileRequest {

		/** Required */
		IamUserArn: string;
	}
	export interface DeleteUserProfileRequestFormProperties {

		/** Required */
		IamUserArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserProfileRequestFormGroup() {
		return new FormGroup<DeleteUserProfileRequestFormProperties>({
			IamUserArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeregisterEcsClusterRequest {

		/** Required */
		EcsClusterArn: string;
	}
	export interface DeregisterEcsClusterRequestFormProperties {

		/** Required */
		EcsClusterArn: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterEcsClusterRequestFormGroup() {
		return new FormGroup<DeregisterEcsClusterRequestFormProperties>({
			EcsClusterArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeregisterElasticIpRequest {

		/** Required */
		ElasticIp: string;
	}
	export interface DeregisterElasticIpRequestFormProperties {

		/** Required */
		ElasticIp: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterElasticIpRequestFormGroup() {
		return new FormGroup<DeregisterElasticIpRequestFormProperties>({
			ElasticIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeregisterInstanceRequest {

		/** Required */
		InstanceId: string;
	}
	export interface DeregisterInstanceRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterInstanceRequestFormGroup() {
		return new FormGroup<DeregisterInstanceRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeregisterRdsDbInstanceRequest {

		/** Required */
		RdsDbInstanceArn: string;
	}
	export interface DeregisterRdsDbInstanceRequestFormProperties {

		/** Required */
		RdsDbInstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterRdsDbInstanceRequestFormGroup() {
		return new FormGroup<DeregisterRdsDbInstanceRequestFormProperties>({
			RdsDbInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeregisterVolumeRequest {

		/** Required */
		VolumeId: string;
	}
	export interface DeregisterVolumeRequestFormProperties {

		/** Required */
		VolumeId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterVolumeRequestFormGroup() {
		return new FormGroup<DeregisterVolumeRequestFormProperties>({
			VolumeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the response to a <code>DescribeAgentVersions</code> request. */
	export interface DescribeAgentVersionsResult {
		AgentVersions?: Array<AgentVersion>;
	}

	/** Contains the response to a <code>DescribeAgentVersions</code> request. */
	export interface DescribeAgentVersionsResultFormProperties {
	}
	export function CreateDescribeAgentVersionsResultFormGroup() {
		return new FormGroup<DescribeAgentVersionsResultFormProperties>({
		});

	}


	/** Describes an agent version. */
	export interface AgentVersion {
		Version?: string;
		ConfigurationManager?: StackConfigurationManager;
	}

	/** Describes an agent version. */
	export interface AgentVersionFormProperties {
		Version: FormControl<string | null | undefined>,
	}
	export function CreateAgentVersionFormGroup() {
		return new FormGroup<AgentVersionFormProperties>({
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAgentVersionsRequest {
		StackId?: string;
		ConfigurationManager?: StackConfigurationManager;
	}
	export interface DescribeAgentVersionsRequestFormProperties {
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAgentVersionsRequestFormGroup() {
		return new FormGroup<DescribeAgentVersionsRequestFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a <code>DescribeApps</code> request. */
	export interface DescribeAppsResult {
		Apps?: Array<App>;
	}

	/** Contains the response to a <code>DescribeApps</code> request. */
	export interface DescribeAppsResultFormProperties {
	}
	export function CreateDescribeAppsResultFormGroup() {
		return new FormGroup<DescribeAppsResultFormProperties>({
		});

	}


	/** A description of the app. */
	export interface App {
		AppId?: string;
		StackId?: string;
		Shortname?: string;
		Name?: string;
		Description?: string;
		DataSources?: Array<DataSource>;
		Type?: AppType;
		AppSource?: Source;
		Domains?: Array<string>;
		EnableSsl?: boolean | null;
		SslConfiguration?: SslConfiguration;
		Attributes?: AppAttributes;
		CreatedAt?: string;
		Environment?: Array<EnvironmentVariable>;
	}

	/** A description of the app. */
	export interface AppFormProperties {
		AppId: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
		Shortname: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Type: FormControl<AppType | null | undefined>,
		EnableSsl: FormControl<boolean | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
	}
	export function CreateAppFormGroup() {
		return new FormGroup<AppFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
			Shortname: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<AppType | null | undefined>(undefined),
			EnableSsl: new FormControl<boolean | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAppsRequest {
		StackId?: string;
		AppIds?: Array<string>;
	}
	export interface DescribeAppsRequestFormProperties {
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAppsRequestFormGroup() {
		return new FormGroup<DescribeAppsRequestFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a <code>DescribeCommands</code> request. */
	export interface DescribeCommandsResult {
		Commands?: Array<Command>;
	}

	/** Contains the response to a <code>DescribeCommands</code> request. */
	export interface DescribeCommandsResultFormProperties {
	}
	export function CreateDescribeCommandsResultFormGroup() {
		return new FormGroup<DescribeCommandsResultFormProperties>({
		});

	}


	/** Describes a command. */
	export interface Command {
		CommandId?: string;
		InstanceId?: string;
		DeploymentId?: string;
		CreatedAt?: string;
		AcknowledgedAt?: string;
		CompletedAt?: string;
		Status?: string;
		ExitCode?: number | null;
		LogUrl?: string;
		Type?: string;
	}

	/** Describes a command. */
	export interface CommandFormProperties {
		CommandId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		DeploymentId: FormControl<string | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
		AcknowledgedAt: FormControl<string | null | undefined>,
		CompletedAt: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		ExitCode: FormControl<number | null | undefined>,
		LogUrl: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateCommandFormGroup() {
		return new FormGroup<CommandFormProperties>({
			CommandId: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined),
			AcknowledgedAt: new FormControl<string | null | undefined>(undefined),
			CompletedAt: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			ExitCode: new FormControl<number | null | undefined>(undefined),
			LogUrl: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeCommandsRequest {
		DeploymentId?: string;
		InstanceId?: string;
		CommandIds?: Array<string>;
	}
	export interface DescribeCommandsRequestFormProperties {
		DeploymentId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCommandsRequestFormGroup() {
		return new FormGroup<DescribeCommandsRequestFormProperties>({
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a <code>DescribeDeployments</code> request. */
	export interface DescribeDeploymentsResult {
		Deployments?: Array<Deployment>;
	}

	/** Contains the response to a <code>DescribeDeployments</code> request. */
	export interface DescribeDeploymentsResultFormProperties {
	}
	export function CreateDescribeDeploymentsResultFormGroup() {
		return new FormGroup<DescribeDeploymentsResultFormProperties>({
		});

	}


	/** Describes a deployment of a stack or app. */
	export interface Deployment {
		DeploymentId?: string;
		StackId?: string;
		AppId?: string;
		CreatedAt?: string;
		CompletedAt?: string;
		Duration?: number | null;
		IamUserArn?: string;
		Comment?: string;
		Command?: DeploymentCommand;
		Status?: string;
		CustomJson?: string;
		InstanceIds?: Array<string>;
	}

	/** Describes a deployment of a stack or app. */
	export interface DeploymentFormProperties {
		DeploymentId: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
		AppId: FormControl<string | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
		CompletedAt: FormControl<string | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		IamUserArn: FormControl<string | null | undefined>,
		Comment: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		CustomJson: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentFormGroup() {
		return new FormGroup<DeploymentFormProperties>({
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
			AppId: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined),
			CompletedAt: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			IamUserArn: new FormControl<string | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			CustomJson: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDeploymentsRequest {
		StackId?: string;
		AppId?: string;
		DeploymentIds?: Array<string>;
	}
	export interface DescribeDeploymentsRequestFormProperties {
		StackId: FormControl<string | null | undefined>,
		AppId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDeploymentsRequestFormGroup() {
		return new FormGroup<DescribeDeploymentsRequestFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined),
			AppId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a <code>DescribeEcsClusters</code> request. */
	export interface DescribeEcsClustersResult {
		EcsClusters?: Array<EcsCluster>;
		NextToken?: string;
	}

	/** Contains the response to a <code>DescribeEcsClusters</code> request. */
	export interface DescribeEcsClustersResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEcsClustersResultFormGroup() {
		return new FormGroup<DescribeEcsClustersResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a registered Amazon ECS cluster. */
	export interface EcsCluster {
		EcsClusterArn?: string;
		EcsClusterName?: string;
		StackId?: string;
		RegisteredAt?: string;
	}

	/** Describes a registered Amazon ECS cluster. */
	export interface EcsClusterFormProperties {
		EcsClusterArn: FormControl<string | null | undefined>,
		EcsClusterName: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
		RegisteredAt: FormControl<string | null | undefined>,
	}
	export function CreateEcsClusterFormGroup() {
		return new FormGroup<EcsClusterFormProperties>({
			EcsClusterArn: new FormControl<string | null | undefined>(undefined),
			EcsClusterName: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
			RegisteredAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEcsClustersRequest {
		EcsClusterArns?: Array<string>;
		StackId?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeEcsClustersRequestFormProperties {
		StackId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeEcsClustersRequestFormGroup() {
		return new FormGroup<DescribeEcsClustersRequestFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains the response to a <code>DescribeElasticIps</code> request. */
	export interface DescribeElasticIpsResult {
		ElasticIps?: Array<ElasticIp>;
	}

	/** Contains the response to a <code>DescribeElasticIps</code> request. */
	export interface DescribeElasticIpsResultFormProperties {
	}
	export function CreateDescribeElasticIpsResultFormGroup() {
		return new FormGroup<DescribeElasticIpsResultFormProperties>({
		});

	}


	/** Describes an Elastic IP address. */
	export interface ElasticIp {
		Ip?: string;
		Name?: string;
		Domain?: string;
		Region?: string;
		InstanceId?: string;
	}

	/** Describes an Elastic IP address. */
	export interface ElasticIpFormProperties {
		Ip: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Domain: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateElasticIpFormGroup() {
		return new FormGroup<ElasticIpFormProperties>({
			Ip: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Domain: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeElasticIpsRequest {
		InstanceId?: string;
		StackId?: string;
		Ips?: Array<string>;
	}
	export interface DescribeElasticIpsRequestFormProperties {
		InstanceId: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeElasticIpsRequestFormGroup() {
		return new FormGroup<DescribeElasticIpsRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a <code>DescribeElasticLoadBalancers</code> request. */
	export interface DescribeElasticLoadBalancersResult {
		ElasticLoadBalancers?: Array<ElasticLoadBalancer>;
	}

	/** Contains the response to a <code>DescribeElasticLoadBalancers</code> request. */
	export interface DescribeElasticLoadBalancersResultFormProperties {
	}
	export function CreateDescribeElasticLoadBalancersResultFormGroup() {
		return new FormGroup<DescribeElasticLoadBalancersResultFormProperties>({
		});

	}


	/** Describes an Elastic Load Balancing instance. */
	export interface ElasticLoadBalancer {
		ElasticLoadBalancerName?: string;
		Region?: string;
		DnsName?: string;
		StackId?: string;
		LayerId?: string;
		VpcId?: string;
		AvailabilityZones?: Array<string>;
		SubnetIds?: Array<string>;
		Ec2InstanceIds?: Array<string>;
	}

	/** Describes an Elastic Load Balancing instance. */
	export interface ElasticLoadBalancerFormProperties {
		ElasticLoadBalancerName: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		DnsName: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
		LayerId: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateElasticLoadBalancerFormGroup() {
		return new FormGroup<ElasticLoadBalancerFormProperties>({
			ElasticLoadBalancerName: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			DnsName: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
			LayerId: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeElasticLoadBalancersRequest {
		StackId?: string;
		LayerIds?: Array<string>;
	}
	export interface DescribeElasticLoadBalancersRequestFormProperties {
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeElasticLoadBalancersRequestFormGroup() {
		return new FormGroup<DescribeElasticLoadBalancersRequestFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a <code>DescribeInstances</code> request. */
	export interface DescribeInstancesResult {
		Instances?: Array<Instance>;
	}

	/** Contains the response to a <code>DescribeInstances</code> request. */
	export interface DescribeInstancesResultFormProperties {
	}
	export function CreateDescribeInstancesResultFormGroup() {
		return new FormGroup<DescribeInstancesResultFormProperties>({
		});

	}


	/** Describes an instance. */
	export interface Instance {
		AgentVersion?: string;
		AmiId?: string;
		Architecture?: Architecture;
		Arn?: string;
		AutoScalingType?: AutoScalingType;
		AvailabilityZone?: string;
		BlockDeviceMappings?: Array<BlockDeviceMapping>;
		CreatedAt?: string;
		EbsOptimized?: boolean | null;
		Ec2InstanceId?: string;
		EcsClusterArn?: string;
		EcsContainerInstanceArn?: string;
		ElasticIp?: string;
		Hostname?: string;
		InfrastructureClass?: string;
		InstallUpdatesOnBoot?: boolean | null;
		InstanceId?: string;
		InstanceProfileArn?: string;
		InstanceType?: string;
		LastServiceErrorId?: string;
		LayerIds?: Array<string>;
		Os?: string;
		Platform?: string;
		PrivateDns?: string;
		PrivateIp?: string;
		PublicDns?: string;
		PublicIp?: string;
		RegisteredBy?: string;
		ReportedAgentVersion?: string;
		ReportedOs?: ReportedOs;
		RootDeviceType?: RootDeviceType;
		RootDeviceVolumeId?: string;
		SecurityGroupIds?: Array<string>;
		SshHostDsaKeyFingerprint?: string;
		SshHostRsaKeyFingerprint?: string;
		SshKeyName?: string;
		StackId?: string;
		Status?: string;
		SubnetId?: string;
		Tenancy?: string;
		VirtualizationType?: VirtualizationType;
	}

	/** Describes an instance. */
	export interface InstanceFormProperties {
		AgentVersion: FormControl<string | null | undefined>,
		AmiId: FormControl<string | null | undefined>,
		Architecture: FormControl<Architecture | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		AutoScalingType: FormControl<AutoScalingType | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
		EbsOptimized: FormControl<boolean | null | undefined>,
		Ec2InstanceId: FormControl<string | null | undefined>,
		EcsClusterArn: FormControl<string | null | undefined>,
		EcsContainerInstanceArn: FormControl<string | null | undefined>,
		ElasticIp: FormControl<string | null | undefined>,
		Hostname: FormControl<string | null | undefined>,
		InfrastructureClass: FormControl<string | null | undefined>,
		InstallUpdatesOnBoot: FormControl<boolean | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		InstanceProfileArn: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		LastServiceErrorId: FormControl<string | null | undefined>,
		Os: FormControl<string | null | undefined>,
		Platform: FormControl<string | null | undefined>,
		PrivateDns: FormControl<string | null | undefined>,
		PrivateIp: FormControl<string | null | undefined>,
		PublicDns: FormControl<string | null | undefined>,
		PublicIp: FormControl<string | null | undefined>,
		RegisteredBy: FormControl<string | null | undefined>,
		ReportedAgentVersion: FormControl<string | null | undefined>,
		RootDeviceType: FormControl<RootDeviceType | null | undefined>,
		RootDeviceVolumeId: FormControl<string | null | undefined>,
		SshHostDsaKeyFingerprint: FormControl<string | null | undefined>,
		SshHostRsaKeyFingerprint: FormControl<string | null | undefined>,
		SshKeyName: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
		Tenancy: FormControl<string | null | undefined>,
		VirtualizationType: FormControl<VirtualizationType | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			AgentVersion: new FormControl<string | null | undefined>(undefined),
			AmiId: new FormControl<string | null | undefined>(undefined),
			Architecture: new FormControl<Architecture | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			AutoScalingType: new FormControl<AutoScalingType | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined),
			EbsOptimized: new FormControl<boolean | null | undefined>(undefined),
			Ec2InstanceId: new FormControl<string | null | undefined>(undefined),
			EcsClusterArn: new FormControl<string | null | undefined>(undefined),
			EcsContainerInstanceArn: new FormControl<string | null | undefined>(undefined),
			ElasticIp: new FormControl<string | null | undefined>(undefined),
			Hostname: new FormControl<string | null | undefined>(undefined),
			InfrastructureClass: new FormControl<string | null | undefined>(undefined),
			InstallUpdatesOnBoot: new FormControl<boolean | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			InstanceProfileArn: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			LastServiceErrorId: new FormControl<string | null | undefined>(undefined),
			Os: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<string | null | undefined>(undefined),
			PrivateDns: new FormControl<string | null | undefined>(undefined),
			PrivateIp: new FormControl<string | null | undefined>(undefined),
			PublicDns: new FormControl<string | null | undefined>(undefined),
			PublicIp: new FormControl<string | null | undefined>(undefined),
			RegisteredBy: new FormControl<string | null | undefined>(undefined),
			ReportedAgentVersion: new FormControl<string | null | undefined>(undefined),
			RootDeviceType: new FormControl<RootDeviceType | null | undefined>(undefined),
			RootDeviceVolumeId: new FormControl<string | null | undefined>(undefined),
			SshHostDsaKeyFingerprint: new FormControl<string | null | undefined>(undefined),
			SshHostRsaKeyFingerprint: new FormControl<string | null | undefined>(undefined),
			SshKeyName: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined),
			Tenancy: new FormControl<string | null | undefined>(undefined),
			VirtualizationType: new FormControl<VirtualizationType | null | undefined>(undefined),
		});

	}


	/** A registered instance's reported operating system. */
	export interface ReportedOs {
		Family?: string;
		Name?: string;
		Version?: string;
	}

	/** A registered instance's reported operating system. */
	export interface ReportedOsFormProperties {
		Family: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateReportedOsFormGroup() {
		return new FormGroup<ReportedOsFormProperties>({
			Family: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VirtualizationType { paravirtual = 0, hvm = 1 }

	export interface DescribeInstancesRequest {
		StackId?: string;
		LayerId?: string;
		InstanceIds?: Array<string>;
	}
	export interface DescribeInstancesRequestFormProperties {
		StackId: FormControl<string | null | undefined>,
		LayerId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstancesRequestFormGroup() {
		return new FormGroup<DescribeInstancesRequestFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined),
			LayerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a <code>DescribeLayers</code> request. */
	export interface DescribeLayersResult {
		Layers?: Array<Layer>;
	}

	/** Contains the response to a <code>DescribeLayers</code> request. */
	export interface DescribeLayersResultFormProperties {
	}
	export function CreateDescribeLayersResultFormGroup() {
		return new FormGroup<DescribeLayersResultFormProperties>({
		});

	}


	/** Describes a layer. */
	export interface Layer {
		Arn?: string;
		StackId?: string;
		LayerId?: string;
		Type?: LayerType;
		Name?: string;
		Shortname?: string;
		Attributes?: LayerAttributes;
		CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;
		CustomInstanceProfileArn?: string;
		CustomJson?: string;
		CustomSecurityGroupIds?: Array<string>;
		DefaultSecurityGroupNames?: Array<string>;
		Packages?: Array<string>;
		VolumeConfigurations?: Array<VolumeConfiguration>;
		EnableAutoHealing?: boolean | null;
		AutoAssignElasticIps?: boolean | null;
		AutoAssignPublicIps?: boolean | null;
		DefaultRecipes?: Recipes;
		CustomRecipes?: Recipes;
		CreatedAt?: string;
		InstallUpdatesOnBoot?: boolean | null;
		UseEbsOptimizedInstances?: boolean | null;
		LifecycleEventConfiguration?: LifecycleEventConfiguration;
	}

	/** Describes a layer. */
	export interface LayerFormProperties {
		Arn: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
		LayerId: FormControl<string | null | undefined>,
		Type: FormControl<LayerType | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Shortname: FormControl<string | null | undefined>,
		CustomInstanceProfileArn: FormControl<string | null | undefined>,
		CustomJson: FormControl<string | null | undefined>,
		EnableAutoHealing: FormControl<boolean | null | undefined>,
		AutoAssignElasticIps: FormControl<boolean | null | undefined>,
		AutoAssignPublicIps: FormControl<boolean | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
		InstallUpdatesOnBoot: FormControl<boolean | null | undefined>,
		UseEbsOptimizedInstances: FormControl<boolean | null | undefined>,
	}
	export function CreateLayerFormGroup() {
		return new FormGroup<LayerFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
			LayerId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<LayerType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Shortname: new FormControl<string | null | undefined>(undefined),
			CustomInstanceProfileArn: new FormControl<string | null | undefined>(undefined),
			CustomJson: new FormControl<string | null | undefined>(undefined),
			EnableAutoHealing: new FormControl<boolean | null | undefined>(undefined),
			AutoAssignElasticIps: new FormControl<boolean | null | undefined>(undefined),
			AutoAssignPublicIps: new FormControl<boolean | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined),
			InstallUpdatesOnBoot: new FormControl<boolean | null | undefined>(undefined),
			UseEbsOptimizedInstances: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeLayersRequest {
		StackId?: string;
		LayerIds?: Array<string>;
	}
	export interface DescribeLayersRequestFormProperties {
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLayersRequestFormGroup() {
		return new FormGroup<DescribeLayersRequestFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a <code>DescribeLoadBasedAutoScaling</code> request. */
	export interface DescribeLoadBasedAutoScalingResult {
		LoadBasedAutoScalingConfigurations?: Array<LoadBasedAutoScalingConfiguration>;
	}

	/** Contains the response to a <code>DescribeLoadBasedAutoScaling</code> request. */
	export interface DescribeLoadBasedAutoScalingResultFormProperties {
	}
	export function CreateDescribeLoadBasedAutoScalingResultFormGroup() {
		return new FormGroup<DescribeLoadBasedAutoScalingResultFormProperties>({
		});

	}


	/** Describes a layer's load-based auto scaling configuration. */
	export interface LoadBasedAutoScalingConfiguration {
		LayerId?: string;
		Enable?: boolean | null;
		UpScaling?: AutoScalingThresholds;
		DownScaling?: AutoScalingThresholds;
	}

	/** Describes a layer's load-based auto scaling configuration. */
	export interface LoadBasedAutoScalingConfigurationFormProperties {
		LayerId: FormControl<string | null | undefined>,
		Enable: FormControl<boolean | null | undefined>,
	}
	export function CreateLoadBasedAutoScalingConfigurationFormGroup() {
		return new FormGroup<LoadBasedAutoScalingConfigurationFormProperties>({
			LayerId: new FormControl<string | null | undefined>(undefined),
			Enable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a load-based auto scaling upscaling or downscaling threshold configuration, which specifies when AWS OpsWorks Stacks starts or stops load-based instances. */
	export interface AutoScalingThresholds {
		InstanceCount?: number | null;
		ThresholdsWaitTime?: number | null;
		IgnoreMetricsTime?: number | null;
		CpuThreshold?: number | null;
		MemoryThreshold?: number | null;
		LoadThreshold?: number | null;
		Alarms?: Array<string>;
	}

	/** Describes a load-based auto scaling upscaling or downscaling threshold configuration, which specifies when AWS OpsWorks Stacks starts or stops load-based instances. */
	export interface AutoScalingThresholdsFormProperties {
		InstanceCount: FormControl<number | null | undefined>,
		ThresholdsWaitTime: FormControl<number | null | undefined>,
		IgnoreMetricsTime: FormControl<number | null | undefined>,
		CpuThreshold: FormControl<number | null | undefined>,
		MemoryThreshold: FormControl<number | null | undefined>,
		LoadThreshold: FormControl<number | null | undefined>,
	}
	export function CreateAutoScalingThresholdsFormGroup() {
		return new FormGroup<AutoScalingThresholdsFormProperties>({
			InstanceCount: new FormControl<number | null | undefined>(undefined),
			ThresholdsWaitTime: new FormControl<number | null | undefined>(undefined),
			IgnoreMetricsTime: new FormControl<number | null | undefined>(undefined),
			CpuThreshold: new FormControl<number | null | undefined>(undefined),
			MemoryThreshold: new FormControl<number | null | undefined>(undefined),
			LoadThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeLoadBasedAutoScalingRequest {

		/** Required */
		LayerIds: Array<string>;
	}
	export interface DescribeLoadBasedAutoScalingRequestFormProperties {
	}
	export function CreateDescribeLoadBasedAutoScalingRequestFormGroup() {
		return new FormGroup<DescribeLoadBasedAutoScalingRequestFormProperties>({
		});

	}


	/** Contains the response to a <code>DescribeMyUserProfile</code> request. */
	export interface DescribeMyUserProfileResult {
		UserProfile?: SelfUserProfile;
	}

	/** Contains the response to a <code>DescribeMyUserProfile</code> request. */
	export interface DescribeMyUserProfileResultFormProperties {
	}
	export function CreateDescribeMyUserProfileResultFormGroup() {
		return new FormGroup<DescribeMyUserProfileResultFormProperties>({
		});

	}


	/** Describes a user's SSH information. */
	export interface SelfUserProfile {
		IamUserArn?: string;
		Name?: string;
		SshUsername?: string;
		SshPublicKey?: string;
	}

	/** Describes a user's SSH information. */
	export interface SelfUserProfileFormProperties {
		IamUserArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		SshUsername: FormControl<string | null | undefined>,
		SshPublicKey: FormControl<string | null | undefined>,
	}
	export function CreateSelfUserProfileFormGroup() {
		return new FormGroup<SelfUserProfileFormProperties>({
			IamUserArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SshUsername: new FormControl<string | null | undefined>(undefined),
			SshPublicKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to a <code>DescribeOperatingSystems</code> request. */
	export interface DescribeOperatingSystemsResponse {
		OperatingSystems?: Array<OperatingSystem>;
	}

	/** The response to a <code>DescribeOperatingSystems</code> request. */
	export interface DescribeOperatingSystemsResponseFormProperties {
	}
	export function CreateDescribeOperatingSystemsResponseFormGroup() {
		return new FormGroup<DescribeOperatingSystemsResponseFormProperties>({
		});

	}


	/** Describes supported operating systems in AWS OpsWorks Stacks. */
	export interface OperatingSystem {
		Name?: string;
		Id?: string;
		Type?: string;
		ConfigurationManagers?: Array<OperatingSystemConfigurationManager>;
		ReportedName?: string;
		ReportedVersion?: string;
		Supported?: boolean | null;
	}

	/** Describes supported operating systems in AWS OpsWorks Stacks. */
	export interface OperatingSystemFormProperties {
		Name: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		ReportedName: FormControl<string | null | undefined>,
		ReportedVersion: FormControl<string | null | undefined>,
		Supported: FormControl<boolean | null | undefined>,
	}
	export function CreateOperatingSystemFormGroup() {
		return new FormGroup<OperatingSystemFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			ReportedName: new FormControl<string | null | undefined>(undefined),
			ReportedVersion: new FormControl<string | null | undefined>(undefined),
			Supported: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A block that contains information about the configuration manager (Chef) and the versions of the configuration manager that are supported for an operating system. */
	export interface OperatingSystemConfigurationManager {
		Name?: string;
		Version?: string;
	}

	/** A block that contains information about the configuration manager (Chef) and the versions of the configuration manager that are supported for an operating system. */
	export interface OperatingSystemConfigurationManagerFormProperties {
		Name: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateOperatingSystemConfigurationManagerFormGroup() {
		return new FormGroup<OperatingSystemConfigurationManagerFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a <code>DescribePermissions</code> request. */
	export interface DescribePermissionsResult {
		Permissions?: Array<Permission>;
	}

	/** Contains the response to a <code>DescribePermissions</code> request. */
	export interface DescribePermissionsResultFormProperties {
	}
	export function CreateDescribePermissionsResultFormGroup() {
		return new FormGroup<DescribePermissionsResultFormProperties>({
		});

	}


	/** Describes stack or user permissions. */
	export interface Permission {
		StackId?: string;
		IamUserArn?: string;
		AllowSsh?: boolean | null;
		AllowSudo?: boolean | null;
		Level?: string;
	}

	/** Describes stack or user permissions. */
	export interface PermissionFormProperties {
		StackId: FormControl<string | null | undefined>,
		IamUserArn: FormControl<string | null | undefined>,
		AllowSsh: FormControl<boolean | null | undefined>,
		AllowSudo: FormControl<boolean | null | undefined>,
		Level: FormControl<string | null | undefined>,
	}
	export function CreatePermissionFormGroup() {
		return new FormGroup<PermissionFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined),
			IamUserArn: new FormControl<string | null | undefined>(undefined),
			AllowSsh: new FormControl<boolean | null | undefined>(undefined),
			AllowSudo: new FormControl<boolean | null | undefined>(undefined),
			Level: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePermissionsRequest {
		IamUserArn?: string;
		StackId?: string;
	}
	export interface DescribePermissionsRequestFormProperties {
		IamUserArn: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateDescribePermissionsRequestFormGroup() {
		return new FormGroup<DescribePermissionsRequestFormProperties>({
			IamUserArn: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a <code>DescribeRaidArrays</code> request. */
	export interface DescribeRaidArraysResult {
		RaidArrays?: Array<RaidArray>;
	}

	/** Contains the response to a <code>DescribeRaidArrays</code> request. */
	export interface DescribeRaidArraysResultFormProperties {
	}
	export function CreateDescribeRaidArraysResultFormGroup() {
		return new FormGroup<DescribeRaidArraysResultFormProperties>({
		});

	}


	/** Describes an instance's RAID array. */
	export interface RaidArray {
		RaidArrayId?: string;
		InstanceId?: string;
		Name?: string;
		RaidLevel?: number | null;
		NumberOfDisks?: number | null;
		Size?: number | null;
		Device?: string;
		MountPoint?: string;
		AvailabilityZone?: string;
		CreatedAt?: string;
		StackId?: string;
		VolumeType?: string;
		Iops?: number | null;
	}

	/** Describes an instance's RAID array. */
	export interface RaidArrayFormProperties {
		RaidArrayId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RaidLevel: FormControl<number | null | undefined>,
		NumberOfDisks: FormControl<number | null | undefined>,
		Size: FormControl<number | null | undefined>,
		Device: FormControl<string | null | undefined>,
		MountPoint: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
		VolumeType: FormControl<string | null | undefined>,
		Iops: FormControl<number | null | undefined>,
	}
	export function CreateRaidArrayFormGroup() {
		return new FormGroup<RaidArrayFormProperties>({
			RaidArrayId: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RaidLevel: new FormControl<number | null | undefined>(undefined),
			NumberOfDisks: new FormControl<number | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
			Device: new FormControl<string | null | undefined>(undefined),
			MountPoint: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
			VolumeType: new FormControl<string | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeRaidArraysRequest {
		InstanceId?: string;
		StackId?: string;
		RaidArrayIds?: Array<string>;
	}
	export interface DescribeRaidArraysRequestFormProperties {
		InstanceId: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRaidArraysRequestFormGroup() {
		return new FormGroup<DescribeRaidArraysRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a <code>DescribeRdsDbInstances</code> request. */
	export interface DescribeRdsDbInstancesResult {
		RdsDbInstances?: Array<RdsDbInstance>;
	}

	/** Contains the response to a <code>DescribeRdsDbInstances</code> request. */
	export interface DescribeRdsDbInstancesResultFormProperties {
	}
	export function CreateDescribeRdsDbInstancesResultFormGroup() {
		return new FormGroup<DescribeRdsDbInstancesResultFormProperties>({
		});

	}


	/** Describes an Amazon RDS instance. */
	export interface RdsDbInstance {
		RdsDbInstanceArn?: string;
		DbInstanceIdentifier?: string;
		DbUser?: string;
		DbPassword?: string;
		Region?: string;
		Address?: string;
		Engine?: string;
		StackId?: string;
		MissingOnRds?: boolean | null;
	}

	/** Describes an Amazon RDS instance. */
	export interface RdsDbInstanceFormProperties {
		RdsDbInstanceArn: FormControl<string | null | undefined>,
		DbInstanceIdentifier: FormControl<string | null | undefined>,
		DbUser: FormControl<string | null | undefined>,
		DbPassword: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		Address: FormControl<string | null | undefined>,
		Engine: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
		MissingOnRds: FormControl<boolean | null | undefined>,
	}
	export function CreateRdsDbInstanceFormGroup() {
		return new FormGroup<RdsDbInstanceFormProperties>({
			RdsDbInstanceArn: new FormControl<string | null | undefined>(undefined),
			DbInstanceIdentifier: new FormControl<string | null | undefined>(undefined),
			DbUser: new FormControl<string | null | undefined>(undefined),
			DbPassword: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			Address: new FormControl<string | null | undefined>(undefined),
			Engine: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
			MissingOnRds: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeRdsDbInstancesRequest {

		/** Required */
		StackId: string;
		RdsDbInstanceArns?: Array<string>;
	}
	export interface DescribeRdsDbInstancesRequestFormProperties {

		/** Required */
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRdsDbInstancesRequestFormGroup() {
		return new FormGroup<DescribeRdsDbInstancesRequestFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the response to a <code>DescribeServiceErrors</code> request. */
	export interface DescribeServiceErrorsResult {
		ServiceErrors?: Array<ServiceError>;
	}

	/** Contains the response to a <code>DescribeServiceErrors</code> request. */
	export interface DescribeServiceErrorsResultFormProperties {
	}
	export function CreateDescribeServiceErrorsResultFormGroup() {
		return new FormGroup<DescribeServiceErrorsResultFormProperties>({
		});

	}


	/** Describes an AWS OpsWorks Stacks service error. */
	export interface ServiceError {
		ServiceErrorId?: string;
		StackId?: string;
		InstanceId?: string;
		Type?: string;
		Message?: string;
		CreatedAt?: string;
	}

	/** Describes an AWS OpsWorks Stacks service error. */
	export interface ServiceErrorFormProperties {
		ServiceErrorId: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
	}
	export function CreateServiceErrorFormGroup() {
		return new FormGroup<ServiceErrorFormProperties>({
			ServiceErrorId: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeServiceErrorsRequest {
		StackId?: string;
		InstanceId?: string;
		ServiceErrorIds?: Array<string>;
	}
	export interface DescribeServiceErrorsRequestFormProperties {
		StackId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeServiceErrorsRequestFormGroup() {
		return new FormGroup<DescribeServiceErrorsRequestFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response to a <code>DescribeStackProvisioningParameters</code> request. */
	export interface DescribeStackProvisioningParametersResult {
		AgentInstallerUrl?: string;
		Parameters?: Parameters;
	}

	/** Contains the response to a <code>DescribeStackProvisioningParameters</code> request. */
	export interface DescribeStackProvisioningParametersResultFormProperties {
		AgentInstallerUrl: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStackProvisioningParametersResultFormGroup() {
		return new FormGroup<DescribeStackProvisioningParametersResultFormProperties>({
			AgentInstallerUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Parameters {
	}
	export interface ParametersFormProperties {
	}
	export function CreateParametersFormGroup() {
		return new FormGroup<ParametersFormProperties>({
		});

	}

	export interface DescribeStackProvisioningParametersRequest {

		/** Required */
		StackId: string;
	}
	export interface DescribeStackProvisioningParametersRequestFormProperties {

		/** Required */
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStackProvisioningParametersRequestFormGroup() {
		return new FormGroup<DescribeStackProvisioningParametersRequestFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the response to a <code>DescribeStackSummary</code> request. */
	export interface DescribeStackSummaryResult {
		StackSummary?: StackSummary;
	}

	/** Contains the response to a <code>DescribeStackSummary</code> request. */
	export interface DescribeStackSummaryResultFormProperties {
	}
	export function CreateDescribeStackSummaryResultFormGroup() {
		return new FormGroup<DescribeStackSummaryResultFormProperties>({
		});

	}


	/** Summarizes the number of layers, instances, and apps in a stack. */
	export interface StackSummary {
		StackId?: string;
		Name?: string;
		Arn?: string;
		LayersCount?: number | null;
		AppsCount?: number | null;
		InstancesCount?: InstancesCount;
	}

	/** Summarizes the number of layers, instances, and apps in a stack. */
	export interface StackSummaryFormProperties {
		StackId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		LayersCount: FormControl<number | null | undefined>,
		AppsCount: FormControl<number | null | undefined>,
	}
	export function CreateStackSummaryFormGroup() {
		return new FormGroup<StackSummaryFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			LayersCount: new FormControl<number | null | undefined>(undefined),
			AppsCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes how many instances a stack has for each status. */
	export interface InstancesCount {
		Assigning?: number | null;
		Booting?: number | null;
		ConnectionLost?: number | null;
		Deregistering?: number | null;
		Online?: number | null;
		Pending?: number | null;
		Rebooting?: number | null;
		Registered?: number | null;
		Registering?: number | null;
		Requested?: number | null;
		RunningSetup?: number | null;
		SetupFailed?: number | null;
		ShuttingDown?: number | null;
		StartFailed?: number | null;
		StopFailed?: number | null;
		Stopped?: number | null;
		Stopping?: number | null;
		Terminated?: number | null;
		Terminating?: number | null;
		Unassigning?: number | null;
	}

	/** Describes how many instances a stack has for each status. */
	export interface InstancesCountFormProperties {
		Assigning: FormControl<number | null | undefined>,
		Booting: FormControl<number | null | undefined>,
		ConnectionLost: FormControl<number | null | undefined>,
		Deregistering: FormControl<number | null | undefined>,
		Online: FormControl<number | null | undefined>,
		Pending: FormControl<number | null | undefined>,
		Rebooting: FormControl<number | null | undefined>,
		Registered: FormControl<number | null | undefined>,
		Registering: FormControl<number | null | undefined>,
		Requested: FormControl<number | null | undefined>,
		RunningSetup: FormControl<number | null | undefined>,
		SetupFailed: FormControl<number | null | undefined>,
		ShuttingDown: FormControl<number | null | undefined>,
		StartFailed: FormControl<number | null | undefined>,
		StopFailed: FormControl<number | null | undefined>,
		Stopped: FormControl<number | null | undefined>,
		Stopping: FormControl<number | null | undefined>,
		Terminated: FormControl<number | null | undefined>,
		Terminating: FormControl<number | null | undefined>,
		Unassigning: FormControl<number | null | undefined>,
	}
	export function CreateInstancesCountFormGroup() {
		return new FormGroup<InstancesCountFormProperties>({
			Assigning: new FormControl<number | null | undefined>(undefined),
			Booting: new FormControl<number | null | undefined>(undefined),
			ConnectionLost: new FormControl<number | null | undefined>(undefined),
			Deregistering: new FormControl<number | null | undefined>(undefined),
			Online: new FormControl<number | null | undefined>(undefined),
			Pending: new FormControl<number | null | undefined>(undefined),
			Rebooting: new FormControl<number | null | undefined>(undefined),
			Registered: new FormControl<number | null | undefined>(undefined),
			Registering: new FormControl<number | null | undefined>(undefined),
			Requested: new FormControl<number | null | undefined>(undefined),
			RunningSetup: new FormControl<number | null | undefined>(undefined),
			SetupFailed: new FormControl<number | null | undefined>(undefined),
			ShuttingDown: new FormControl<number | null | undefined>(undefined),
			StartFailed: new FormControl<number | null | undefined>(undefined),
			StopFailed: new FormControl<number | null | undefined>(undefined),
			Stopped: new FormControl<number | null | undefined>(undefined),
			Stopping: new FormControl<number | null | undefined>(undefined),
			Terminated: new FormControl<number | null | undefined>(undefined),
			Terminating: new FormControl<number | null | undefined>(undefined),
			Unassigning: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeStackSummaryRequest {

		/** Required */
		StackId: string;
	}
	export interface DescribeStackSummaryRequestFormProperties {

		/** Required */
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStackSummaryRequestFormGroup() {
		return new FormGroup<DescribeStackSummaryRequestFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the response to a <code>DescribeStacks</code> request. */
	export interface DescribeStacksResult {
		Stacks?: Array<Stack>;
	}

	/** Contains the response to a <code>DescribeStacks</code> request. */
	export interface DescribeStacksResultFormProperties {
	}
	export function CreateDescribeStacksResultFormGroup() {
		return new FormGroup<DescribeStacksResultFormProperties>({
		});

	}


	/** Describes a stack. */
	export interface Stack {
		StackId?: string;
		Name?: string;
		Arn?: string;
		Region?: string;
		VpcId?: string;
		Attributes?: StackAttributes;
		ServiceRoleArn?: string;
		DefaultInstanceProfileArn?: string;
		DefaultOs?: string;
		HostnameTheme?: string;
		DefaultAvailabilityZone?: string;
		DefaultSubnetId?: string;
		CustomJson?: string;
		ConfigurationManager?: StackConfigurationManager;
		ChefConfiguration?: ChefConfiguration;
		UseCustomCookbooks?: boolean | null;
		UseOpsworksSecurityGroups?: boolean | null;
		CustomCookbooksSource?: Source;
		DefaultSshKeyName?: string;
		CreatedAt?: string;
		DefaultRootDeviceType?: RootDeviceType;
		AgentVersion?: string;
	}

	/** Describes a stack. */
	export interface StackFormProperties {
		StackId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		ServiceRoleArn: FormControl<string | null | undefined>,
		DefaultInstanceProfileArn: FormControl<string | null | undefined>,
		DefaultOs: FormControl<string | null | undefined>,
		HostnameTheme: FormControl<string | null | undefined>,
		DefaultAvailabilityZone: FormControl<string | null | undefined>,
		DefaultSubnetId: FormControl<string | null | undefined>,
		CustomJson: FormControl<string | null | undefined>,
		UseCustomCookbooks: FormControl<boolean | null | undefined>,
		UseOpsworksSecurityGroups: FormControl<boolean | null | undefined>,
		DefaultSshKeyName: FormControl<string | null | undefined>,
		CreatedAt: FormControl<string | null | undefined>,
		DefaultRootDeviceType: FormControl<RootDeviceType | null | undefined>,
		AgentVersion: FormControl<string | null | undefined>,
	}
	export function CreateStackFormGroup() {
		return new FormGroup<StackFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			ServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			DefaultInstanceProfileArn: new FormControl<string | null | undefined>(undefined),
			DefaultOs: new FormControl<string | null | undefined>(undefined),
			HostnameTheme: new FormControl<string | null | undefined>(undefined),
			DefaultAvailabilityZone: new FormControl<string | null | undefined>(undefined),
			DefaultSubnetId: new FormControl<string | null | undefined>(undefined),
			CustomJson: new FormControl<string | null | undefined>(undefined),
			UseCustomCookbooks: new FormControl<boolean | null | undefined>(undefined),
			UseOpsworksSecurityGroups: new FormControl<boolean | null | undefined>(undefined),
			DefaultSshKeyName: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<string | null | undefined>(undefined),
			DefaultRootDeviceType: new FormControl<RootDeviceType | null | undefined>(undefined),
			AgentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeStacksRequest {
		StackIds?: Array<string>;
	}
	export interface DescribeStacksRequestFormProperties {
	}
	export function CreateDescribeStacksRequestFormGroup() {
		return new FormGroup<DescribeStacksRequestFormProperties>({
		});

	}


	/** Contains the response to a <code>DescribeTimeBasedAutoScaling</code> request. */
	export interface DescribeTimeBasedAutoScalingResult {
		TimeBasedAutoScalingConfigurations?: Array<TimeBasedAutoScalingConfiguration>;
	}

	/** Contains the response to a <code>DescribeTimeBasedAutoScaling</code> request. */
	export interface DescribeTimeBasedAutoScalingResultFormProperties {
	}
	export function CreateDescribeTimeBasedAutoScalingResultFormGroup() {
		return new FormGroup<DescribeTimeBasedAutoScalingResultFormProperties>({
		});

	}


	/** Describes an instance's time-based auto scaling configuration. */
	export interface TimeBasedAutoScalingConfiguration {
		InstanceId?: string;
		AutoScalingSchedule?: WeeklyAutoScalingSchedule;
	}

	/** Describes an instance's time-based auto scaling configuration. */
	export interface TimeBasedAutoScalingConfigurationFormProperties {
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateTimeBasedAutoScalingConfigurationFormGroup() {
		return new FormGroup<TimeBasedAutoScalingConfigurationFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes a time-based instance's auto scaling schedule. The schedule consists of a set of key-value pairs.</p> <ul> <li> <p>The key is the time period (a UTC hour) and must be an integer from 0 - 23.</p> </li> <li> <p>The value indicates whether the instance should be online or offline for the specified period, and must be set to "on" or "off"</p> </li> </ul> <p>The default setting for all time periods is off, so you use the following parameters primarily to specify the online periods. You don't have to explicitly specify offline periods unless you want to change an online period to an offline period.</p> <p>The following example specifies that the instance should be online for four hours, from UTC 1200 - 1600. It will be off for the remainder of the day.</p> <p> <code> { "12":"on", "13":"on", "14":"on", "15":"on" } </code> </p> */
	export interface WeeklyAutoScalingSchedule {
		Monday?: DailyAutoScalingSchedule;
		Tuesday?: DailyAutoScalingSchedule;
		Wednesday?: DailyAutoScalingSchedule;
		Thursday?: DailyAutoScalingSchedule;
		Friday?: DailyAutoScalingSchedule;
		Saturday?: DailyAutoScalingSchedule;
		Sunday?: DailyAutoScalingSchedule;
	}

	/** <p>Describes a time-based instance's auto scaling schedule. The schedule consists of a set of key-value pairs.</p> <ul> <li> <p>The key is the time period (a UTC hour) and must be an integer from 0 - 23.</p> </li> <li> <p>The value indicates whether the instance should be online or offline for the specified period, and must be set to "on" or "off"</p> </li> </ul> <p>The default setting for all time periods is off, so you use the following parameters primarily to specify the online periods. You don't have to explicitly specify offline periods unless you want to change an online period to an offline period.</p> <p>The following example specifies that the instance should be online for four hours, from UTC 1200 - 1600. It will be off for the remainder of the day.</p> <p> <code> { "12":"on", "13":"on", "14":"on", "15":"on" } </code> </p> */
	export interface WeeklyAutoScalingScheduleFormProperties {
	}
	export function CreateWeeklyAutoScalingScheduleFormGroup() {
		return new FormGroup<WeeklyAutoScalingScheduleFormProperties>({
		});

	}

	export interface DailyAutoScalingSchedule {
	}
	export interface DailyAutoScalingScheduleFormProperties {
	}
	export function CreateDailyAutoScalingScheduleFormGroup() {
		return new FormGroup<DailyAutoScalingScheduleFormProperties>({
		});

	}

	export interface DescribeTimeBasedAutoScalingRequest {

		/** Required */
		InstanceIds: Array<string>;
	}
	export interface DescribeTimeBasedAutoScalingRequestFormProperties {
	}
	export function CreateDescribeTimeBasedAutoScalingRequestFormGroup() {
		return new FormGroup<DescribeTimeBasedAutoScalingRequestFormProperties>({
		});

	}


	/** Contains the response to a <code>DescribeUserProfiles</code> request. */
	export interface DescribeUserProfilesResult {
		UserProfiles?: Array<UserProfile>;
	}

	/** Contains the response to a <code>DescribeUserProfiles</code> request. */
	export interface DescribeUserProfilesResultFormProperties {
	}
	export function CreateDescribeUserProfilesResultFormGroup() {
		return new FormGroup<DescribeUserProfilesResultFormProperties>({
		});

	}


	/** Describes a user's SSH information. */
	export interface UserProfile {
		IamUserArn?: string;
		Name?: string;
		SshUsername?: string;
		SshPublicKey?: string;
		AllowSelfManagement?: boolean | null;
	}

	/** Describes a user's SSH information. */
	export interface UserProfileFormProperties {
		IamUserArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		SshUsername: FormControl<string | null | undefined>,
		SshPublicKey: FormControl<string | null | undefined>,
		AllowSelfManagement: FormControl<boolean | null | undefined>,
	}
	export function CreateUserProfileFormGroup() {
		return new FormGroup<UserProfileFormProperties>({
			IamUserArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SshUsername: new FormControl<string | null | undefined>(undefined),
			SshPublicKey: new FormControl<string | null | undefined>(undefined),
			AllowSelfManagement: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeUserProfilesRequest {
		IamUserArns?: Array<string>;
	}
	export interface DescribeUserProfilesRequestFormProperties {
	}
	export function CreateDescribeUserProfilesRequestFormGroup() {
		return new FormGroup<DescribeUserProfilesRequestFormProperties>({
		});

	}


	/** Contains the response to a <code>DescribeVolumes</code> request. */
	export interface DescribeVolumesResult {
		Volumes?: Array<Volume>;
	}

	/** Contains the response to a <code>DescribeVolumes</code> request. */
	export interface DescribeVolumesResultFormProperties {
	}
	export function CreateDescribeVolumesResultFormGroup() {
		return new FormGroup<DescribeVolumesResultFormProperties>({
		});

	}


	/** Describes an instance's Amazon EBS volume. */
	export interface Volume {
		VolumeId?: string;
		Ec2VolumeId?: string;
		Name?: string;
		RaidArrayId?: string;
		InstanceId?: string;
		Status?: string;
		Size?: number | null;
		Device?: string;
		MountPoint?: string;
		Region?: string;
		AvailabilityZone?: string;
		VolumeType?: string;
		Iops?: number | null;
		Encrypted?: boolean | null;
	}

	/** Describes an instance's Amazon EBS volume. */
	export interface VolumeFormProperties {
		VolumeId: FormControl<string | null | undefined>,
		Ec2VolumeId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RaidArrayId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		Size: FormControl<number | null | undefined>,
		Device: FormControl<string | null | undefined>,
		MountPoint: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		VolumeType: FormControl<string | null | undefined>,
		Iops: FormControl<number | null | undefined>,
		Encrypted: FormControl<boolean | null | undefined>,
	}
	export function CreateVolumeFormGroup() {
		return new FormGroup<VolumeFormProperties>({
			VolumeId: new FormControl<string | null | undefined>(undefined),
			Ec2VolumeId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RaidArrayId: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
			Device: new FormControl<string | null | undefined>(undefined),
			MountPoint: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			VolumeType: new FormControl<string | null | undefined>(undefined),
			Iops: new FormControl<number | null | undefined>(undefined),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeVolumesRequest {
		InstanceId?: string;
		StackId?: string;
		RaidArrayId?: string;
		VolumeIds?: Array<string>;
	}
	export interface DescribeVolumesRequestFormProperties {
		InstanceId: FormControl<string | null | undefined>,
		StackId: FormControl<string | null | undefined>,
		RaidArrayId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeVolumesRequestFormGroup() {
		return new FormGroup<DescribeVolumesRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined),
			RaidArrayId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DetachElasticLoadBalancerRequest {

		/** Required */
		ElasticLoadBalancerName: string;

		/** Required */
		LayerId: string;
	}
	export interface DetachElasticLoadBalancerRequestFormProperties {

		/** Required */
		ElasticLoadBalancerName: FormControl<string | null | undefined>,

		/** Required */
		LayerId: FormControl<string | null | undefined>,
	}
	export function CreateDetachElasticLoadBalancerRequestFormGroup() {
		return new FormGroup<DetachElasticLoadBalancerRequestFormProperties>({
			ElasticLoadBalancerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LayerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateElasticIpRequest {

		/** Required */
		ElasticIp: string;
	}
	export interface DisassociateElasticIpRequestFormProperties {

		/** Required */
		ElasticIp: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateElasticIpRequestFormGroup() {
		return new FormGroup<DisassociateElasticIpRequestFormProperties>({
			ElasticIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the response to a <code>GetHostnameSuggestion</code> request. */
	export interface GetHostnameSuggestionResult {
		LayerId?: string;
		Hostname?: string;
	}

	/** Contains the response to a <code>GetHostnameSuggestion</code> request. */
	export interface GetHostnameSuggestionResultFormProperties {
		LayerId: FormControl<string | null | undefined>,
		Hostname: FormControl<string | null | undefined>,
	}
	export function CreateGetHostnameSuggestionResultFormGroup() {
		return new FormGroup<GetHostnameSuggestionResultFormProperties>({
			LayerId: new FormControl<string | null | undefined>(undefined),
			Hostname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetHostnameSuggestionRequest {

		/** Required */
		LayerId: string;
	}
	export interface GetHostnameSuggestionRequestFormProperties {

		/** Required */
		LayerId: FormControl<string | null | undefined>,
	}
	export function CreateGetHostnameSuggestionRequestFormGroup() {
		return new FormGroup<GetHostnameSuggestionRequestFormProperties>({
			LayerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the response to a <code>GrantAccess</code> request. */
	export interface GrantAccessResult {
		TemporaryCredential?: TemporaryCredential;
	}

	/** Contains the response to a <code>GrantAccess</code> request. */
	export interface GrantAccessResultFormProperties {
	}
	export function CreateGrantAccessResultFormGroup() {
		return new FormGroup<GrantAccessResultFormProperties>({
		});

	}


	/** Contains the data needed by RDP clients such as the Microsoft Remote Desktop Connection to log in to the instance. */
	export interface TemporaryCredential {
		Username?: string;
		Password?: string;
		ValidForInMinutes?: number | null;
		InstanceId?: string;
	}

	/** Contains the data needed by RDP clients such as the Microsoft Remote Desktop Connection to log in to the instance. */
	export interface TemporaryCredentialFormProperties {
		Username: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
		ValidForInMinutes: FormControl<number | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateTemporaryCredentialFormGroup() {
		return new FormGroup<TemporaryCredentialFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
			ValidForInMinutes: new FormControl<number | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GrantAccessRequest {

		/** Required */
		InstanceId: string;
		ValidForInMinutes?: number | null;
	}
	export interface GrantAccessRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		ValidForInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateGrantAccessRequestFormGroup() {
		return new FormGroup<GrantAccessRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ValidForInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains the response to a <code>ListTags</code> request. */
	export interface ListTagsResult {
		Tags?: Tags;
		NextToken?: string;
	}

	/** Contains the response to a <code>ListTags</code> request. */
	export interface ListTagsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsResultFormGroup() {
		return new FormGroup<ListTagsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tags {
	}
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}

	export interface ListTagsRequest {

		/** Required */
		ResourceArn: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListTagsRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsRequestFormGroup() {
		return new FormGroup<ListTagsRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RebootInstanceRequest {

		/** Required */
		InstanceId: string;
	}
	export interface RebootInstanceRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateRebootInstanceRequestFormGroup() {
		return new FormGroup<RebootInstanceRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the response to a <code>RegisterEcsCluster</code> request. */
	export interface RegisterEcsClusterResult {
		EcsClusterArn?: string;
	}

	/** Contains the response to a <code>RegisterEcsCluster</code> request. */
	export interface RegisterEcsClusterResultFormProperties {
		EcsClusterArn: FormControl<string | null | undefined>,
	}
	export function CreateRegisterEcsClusterResultFormGroup() {
		return new FormGroup<RegisterEcsClusterResultFormProperties>({
			EcsClusterArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterEcsClusterRequest {

		/** Required */
		EcsClusterArn: string;

		/** Required */
		StackId: string;
	}
	export interface RegisterEcsClusterRequestFormProperties {

		/** Required */
		EcsClusterArn: FormControl<string | null | undefined>,

		/** Required */
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterEcsClusterRequestFormGroup() {
		return new FormGroup<RegisterEcsClusterRequestFormProperties>({
			EcsClusterArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the response to a <code>RegisterElasticIp</code> request. */
	export interface RegisterElasticIpResult {
		ElasticIp?: string;
	}

	/** Contains the response to a <code>RegisterElasticIp</code> request. */
	export interface RegisterElasticIpResultFormProperties {
		ElasticIp: FormControl<string | null | undefined>,
	}
	export function CreateRegisterElasticIpResultFormGroup() {
		return new FormGroup<RegisterElasticIpResultFormProperties>({
			ElasticIp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterElasticIpRequest {

		/** Required */
		ElasticIp: string;

		/** Required */
		StackId: string;
	}
	export interface RegisterElasticIpRequestFormProperties {

		/** Required */
		ElasticIp: FormControl<string | null | undefined>,

		/** Required */
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterElasticIpRequestFormGroup() {
		return new FormGroup<RegisterElasticIpRequestFormProperties>({
			ElasticIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the response to a <code>RegisterInstanceResult</code> request. */
	export interface RegisterInstanceResult {
		InstanceId?: string;
	}

	/** Contains the response to a <code>RegisterInstanceResult</code> request. */
	export interface RegisterInstanceResultFormProperties {
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterInstanceResultFormGroup() {
		return new FormGroup<RegisterInstanceResultFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterInstanceRequest {

		/** Required */
		StackId: string;
		Hostname?: string;
		PublicIp?: string;
		PrivateIp?: string;
		RsaPublicKey?: string;
		RsaPublicKeyFingerprint?: string;
		InstanceIdentity?: InstanceIdentity;
	}
	export interface RegisterInstanceRequestFormProperties {

		/** Required */
		StackId: FormControl<string | null | undefined>,
		Hostname: FormControl<string | null | undefined>,
		PublicIp: FormControl<string | null | undefined>,
		PrivateIp: FormControl<string | null | undefined>,
		RsaPublicKey: FormControl<string | null | undefined>,
		RsaPublicKeyFingerprint: FormControl<string | null | undefined>,
	}
	export function CreateRegisterInstanceRequestFormGroup() {
		return new FormGroup<RegisterInstanceRequestFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Hostname: new FormControl<string | null | undefined>(undefined),
			PublicIp: new FormControl<string | null | undefined>(undefined),
			PrivateIp: new FormControl<string | null | undefined>(undefined),
			RsaPublicKey: new FormControl<string | null | undefined>(undefined),
			RsaPublicKeyFingerprint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a description of an Amazon EC2 instance from the Amazon EC2 metadata service. For more information, see <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/Index.html">Instance Metadata and User Data</a>. */
	export interface InstanceIdentity {
		Document?: string;
		Signature?: string;
	}

	/** Contains a description of an Amazon EC2 instance from the Amazon EC2 metadata service. For more information, see <a href="https://docs.aws.amazon.com/sdkfornet/latest/apidocs/Index.html">Instance Metadata and User Data</a>. */
	export interface InstanceIdentityFormProperties {
		Document: FormControl<string | null | undefined>,
		Signature: FormControl<string | null | undefined>,
	}
	export function CreateInstanceIdentityFormGroup() {
		return new FormGroup<InstanceIdentityFormProperties>({
			Document: new FormControl<string | null | undefined>(undefined),
			Signature: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterRdsDbInstanceRequest {

		/** Required */
		StackId: string;

		/** Required */
		RdsDbInstanceArn: string;

		/** Required */
		DbUser: string;

		/** Required */
		DbPassword: string;
	}
	export interface RegisterRdsDbInstanceRequestFormProperties {

		/** Required */
		StackId: FormControl<string | null | undefined>,

		/** Required */
		RdsDbInstanceArn: FormControl<string | null | undefined>,

		/** Required */
		DbUser: FormControl<string | null | undefined>,

		/** Required */
		DbPassword: FormControl<string | null | undefined>,
	}
	export function CreateRegisterRdsDbInstanceRequestFormGroup() {
		return new FormGroup<RegisterRdsDbInstanceRequestFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RdsDbInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DbUser: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DbPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the response to a <code>RegisterVolume</code> request. */
	export interface RegisterVolumeResult {
		VolumeId?: string;
	}

	/** Contains the response to a <code>RegisterVolume</code> request. */
	export interface RegisterVolumeResultFormProperties {
		VolumeId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterVolumeResultFormGroup() {
		return new FormGroup<RegisterVolumeResultFormProperties>({
			VolumeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterVolumeRequest {
		Ec2VolumeId?: string;

		/** Required */
		StackId: string;
	}
	export interface RegisterVolumeRequestFormProperties {
		Ec2VolumeId: FormControl<string | null | undefined>,

		/** Required */
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterVolumeRequestFormGroup() {
		return new FormGroup<RegisterVolumeRequestFormProperties>({
			Ec2VolumeId: new FormControl<string | null | undefined>(undefined),
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetLoadBasedAutoScalingRequest {

		/** Required */
		LayerId: string;
		Enable?: boolean | null;
		UpScaling?: AutoScalingThresholds;
		DownScaling?: AutoScalingThresholds;
	}
	export interface SetLoadBasedAutoScalingRequestFormProperties {

		/** Required */
		LayerId: FormControl<string | null | undefined>,
		Enable: FormControl<boolean | null | undefined>,
	}
	export function CreateSetLoadBasedAutoScalingRequestFormGroup() {
		return new FormGroup<SetLoadBasedAutoScalingRequestFormProperties>({
			LayerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Enable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SetPermissionRequest {

		/** Required */
		StackId: string;

		/** Required */
		IamUserArn: string;
		AllowSsh?: boolean | null;
		AllowSudo?: boolean | null;
		Level?: string;
	}
	export interface SetPermissionRequestFormProperties {

		/** Required */
		StackId: FormControl<string | null | undefined>,

		/** Required */
		IamUserArn: FormControl<string | null | undefined>,
		AllowSsh: FormControl<boolean | null | undefined>,
		AllowSudo: FormControl<boolean | null | undefined>,
		Level: FormControl<string | null | undefined>,
	}
	export function CreateSetPermissionRequestFormGroup() {
		return new FormGroup<SetPermissionRequestFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IamUserArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AllowSsh: new FormControl<boolean | null | undefined>(undefined),
			AllowSudo: new FormControl<boolean | null | undefined>(undefined),
			Level: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetTimeBasedAutoScalingRequest {

		/** Required */
		InstanceId: string;
		AutoScalingSchedule?: WeeklyAutoScalingSchedule;
	}
	export interface SetTimeBasedAutoScalingRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateSetTimeBasedAutoScalingRequestFormGroup() {
		return new FormGroup<SetTimeBasedAutoScalingRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartInstanceRequest {

		/** Required */
		InstanceId: string;
	}
	export interface StartInstanceRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateStartInstanceRequestFormGroup() {
		return new FormGroup<StartInstanceRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartStackRequest {

		/** Required */
		StackId: string;
	}
	export interface StartStackRequestFormProperties {

		/** Required */
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateStartStackRequestFormGroup() {
		return new FormGroup<StartStackRequestFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopInstanceRequest {

		/** Required */
		InstanceId: string;
		Force?: boolean | null;
	}
	export interface StopInstanceRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		Force: FormControl<boolean | null | undefined>,
	}
	export function CreateStopInstanceRequestFormGroup() {
		return new FormGroup<StopInstanceRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Force: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StopStackRequest {

		/** Required */
		StackId: string;
	}
	export interface StopStackRequestFormProperties {

		/** Required */
		StackId: FormControl<string | null | undefined>,
	}
	export function CreateStopStackRequestFormGroup() {
		return new FormGroup<StopStackRequestFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Tags;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnassignInstanceRequest {

		/** Required */
		InstanceId: string;
	}
	export interface UnassignInstanceRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateUnassignInstanceRequestFormGroup() {
		return new FormGroup<UnassignInstanceRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnassignVolumeRequest {

		/** Required */
		VolumeId: string;
	}
	export interface UnassignVolumeRequestFormProperties {

		/** Required */
		VolumeId: FormControl<string | null | undefined>,
	}
	export function CreateUnassignVolumeRequestFormGroup() {
		return new FormGroup<UnassignVolumeRequestFormProperties>({
			VolumeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAppRequest {

		/** Required */
		AppId: string;
		Name?: string;
		Description?: string;
		DataSources?: Array<DataSource>;
		Type?: AppType;
		AppSource?: Source;
		Domains?: Array<string>;
		EnableSsl?: boolean | null;
		SslConfiguration?: SslConfiguration;
		Attributes?: AppAttributes;
		Environment?: Array<EnvironmentVariable>;
	}
	export interface UpdateAppRequestFormProperties {

		/** Required */
		AppId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Type: FormControl<AppType | null | undefined>,
		EnableSsl: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateAppRequestFormGroup() {
		return new FormGroup<UpdateAppRequestFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<AppType | null | undefined>(undefined),
			EnableSsl: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateElasticIpRequest {

		/** Required */
		ElasticIp: string;
		Name?: string;
	}
	export interface UpdateElasticIpRequestFormProperties {

		/** Required */
		ElasticIp: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateElasticIpRequestFormGroup() {
		return new FormGroup<UpdateElasticIpRequestFormProperties>({
			ElasticIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateInstanceRequest {

		/** Required */
		InstanceId: string;
		LayerIds?: Array<string>;
		InstanceType?: string;
		AutoScalingType?: AutoScalingType;
		Hostname?: string;
		Os?: string;
		AmiId?: string;
		SshKeyName?: string;
		Architecture?: Architecture;
		InstallUpdatesOnBoot?: boolean | null;
		EbsOptimized?: boolean | null;
		AgentVersion?: string;
	}
	export interface UpdateInstanceRequestFormProperties {

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		AutoScalingType: FormControl<AutoScalingType | null | undefined>,
		Hostname: FormControl<string | null | undefined>,
		Os: FormControl<string | null | undefined>,
		AmiId: FormControl<string | null | undefined>,
		SshKeyName: FormControl<string | null | undefined>,
		Architecture: FormControl<Architecture | null | undefined>,
		InstallUpdatesOnBoot: FormControl<boolean | null | undefined>,
		EbsOptimized: FormControl<boolean | null | undefined>,
		AgentVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInstanceRequestFormGroup() {
		return new FormGroup<UpdateInstanceRequestFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			AutoScalingType: new FormControl<AutoScalingType | null | undefined>(undefined),
			Hostname: new FormControl<string | null | undefined>(undefined),
			Os: new FormControl<string | null | undefined>(undefined),
			AmiId: new FormControl<string | null | undefined>(undefined),
			SshKeyName: new FormControl<string | null | undefined>(undefined),
			Architecture: new FormControl<Architecture | null | undefined>(undefined),
			InstallUpdatesOnBoot: new FormControl<boolean | null | undefined>(undefined),
			EbsOptimized: new FormControl<boolean | null | undefined>(undefined),
			AgentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLayerRequest {

		/** Required */
		LayerId: string;
		Name?: string;
		Shortname?: string;
		Attributes?: LayerAttributes;
		CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;
		CustomInstanceProfileArn?: string;
		CustomJson?: string;
		CustomSecurityGroupIds?: Array<string>;
		Packages?: Array<string>;
		VolumeConfigurations?: Array<VolumeConfiguration>;
		EnableAutoHealing?: boolean | null;
		AutoAssignElasticIps?: boolean | null;
		AutoAssignPublicIps?: boolean | null;
		CustomRecipes?: Recipes;
		InstallUpdatesOnBoot?: boolean | null;
		UseEbsOptimizedInstances?: boolean | null;
		LifecycleEventConfiguration?: LifecycleEventConfiguration;
	}
	export interface UpdateLayerRequestFormProperties {

		/** Required */
		LayerId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Shortname: FormControl<string | null | undefined>,
		CustomInstanceProfileArn: FormControl<string | null | undefined>,
		CustomJson: FormControl<string | null | undefined>,
		EnableAutoHealing: FormControl<boolean | null | undefined>,
		AutoAssignElasticIps: FormControl<boolean | null | undefined>,
		AutoAssignPublicIps: FormControl<boolean | null | undefined>,
		InstallUpdatesOnBoot: FormControl<boolean | null | undefined>,
		UseEbsOptimizedInstances: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateLayerRequestFormGroup() {
		return new FormGroup<UpdateLayerRequestFormProperties>({
			LayerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Shortname: new FormControl<string | null | undefined>(undefined),
			CustomInstanceProfileArn: new FormControl<string | null | undefined>(undefined),
			CustomJson: new FormControl<string | null | undefined>(undefined),
			EnableAutoHealing: new FormControl<boolean | null | undefined>(undefined),
			AutoAssignElasticIps: new FormControl<boolean | null | undefined>(undefined),
			AutoAssignPublicIps: new FormControl<boolean | null | undefined>(undefined),
			InstallUpdatesOnBoot: new FormControl<boolean | null | undefined>(undefined),
			UseEbsOptimizedInstances: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateMyUserProfileRequest {
		SshPublicKey?: string;
	}
	export interface UpdateMyUserProfileRequestFormProperties {
		SshPublicKey: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMyUserProfileRequestFormGroup() {
		return new FormGroup<UpdateMyUserProfileRequestFormProperties>({
			SshPublicKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRdsDbInstanceRequest {

		/** Required */
		RdsDbInstanceArn: string;
		DbUser?: string;
		DbPassword?: string;
	}
	export interface UpdateRdsDbInstanceRequestFormProperties {

		/** Required */
		RdsDbInstanceArn: FormControl<string | null | undefined>,
		DbUser: FormControl<string | null | undefined>,
		DbPassword: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRdsDbInstanceRequestFormGroup() {
		return new FormGroup<UpdateRdsDbInstanceRequestFormProperties>({
			RdsDbInstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DbUser: new FormControl<string | null | undefined>(undefined),
			DbPassword: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateStackRequest {

		/** Required */
		StackId: string;
		Name?: string;
		Attributes?: StackAttributes;
		ServiceRoleArn?: string;
		DefaultInstanceProfileArn?: string;
		DefaultOs?: string;
		HostnameTheme?: string;
		DefaultAvailabilityZone?: string;
		DefaultSubnetId?: string;
		CustomJson?: string;
		ConfigurationManager?: StackConfigurationManager;
		ChefConfiguration?: ChefConfiguration;
		UseCustomCookbooks?: boolean | null;
		CustomCookbooksSource?: Source;
		DefaultSshKeyName?: string;
		DefaultRootDeviceType?: RootDeviceType;
		UseOpsworksSecurityGroups?: boolean | null;
		AgentVersion?: string;
	}
	export interface UpdateStackRequestFormProperties {

		/** Required */
		StackId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ServiceRoleArn: FormControl<string | null | undefined>,
		DefaultInstanceProfileArn: FormControl<string | null | undefined>,
		DefaultOs: FormControl<string | null | undefined>,
		HostnameTheme: FormControl<string | null | undefined>,
		DefaultAvailabilityZone: FormControl<string | null | undefined>,
		DefaultSubnetId: FormControl<string | null | undefined>,
		CustomJson: FormControl<string | null | undefined>,
		UseCustomCookbooks: FormControl<boolean | null | undefined>,
		DefaultSshKeyName: FormControl<string | null | undefined>,
		DefaultRootDeviceType: FormControl<RootDeviceType | null | undefined>,
		UseOpsworksSecurityGroups: FormControl<boolean | null | undefined>,
		AgentVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStackRequestFormGroup() {
		return new FormGroup<UpdateStackRequestFormProperties>({
			StackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			ServiceRoleArn: new FormControl<string | null | undefined>(undefined),
			DefaultInstanceProfileArn: new FormControl<string | null | undefined>(undefined),
			DefaultOs: new FormControl<string | null | undefined>(undefined),
			HostnameTheme: new FormControl<string | null | undefined>(undefined),
			DefaultAvailabilityZone: new FormControl<string | null | undefined>(undefined),
			DefaultSubnetId: new FormControl<string | null | undefined>(undefined),
			CustomJson: new FormControl<string | null | undefined>(undefined),
			UseCustomCookbooks: new FormControl<boolean | null | undefined>(undefined),
			DefaultSshKeyName: new FormControl<string | null | undefined>(undefined),
			DefaultRootDeviceType: new FormControl<RootDeviceType | null | undefined>(undefined),
			UseOpsworksSecurityGroups: new FormControl<boolean | null | undefined>(undefined),
			AgentVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateUserProfileRequest {

		/** Required */
		IamUserArn: string;
		SshUsername?: string;
		SshPublicKey?: string;
		AllowSelfManagement?: boolean | null;
	}
	export interface UpdateUserProfileRequestFormProperties {

		/** Required */
		IamUserArn: FormControl<string | null | undefined>,
		SshUsername: FormControl<string | null | undefined>,
		SshPublicKey: FormControl<string | null | undefined>,
		AllowSelfManagement: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateUserProfileRequestFormGroup() {
		return new FormGroup<UpdateUserProfileRequestFormProperties>({
			IamUserArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SshUsername: new FormControl<string | null | undefined>(undefined),
			SshPublicKey: new FormControl<string | null | undefined>(undefined),
			AllowSelfManagement: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateVolumeRequest {

		/** Required */
		VolumeId: string;
		Name?: string;
		MountPoint?: string;
	}
	export interface UpdateVolumeRequestFormProperties {

		/** Required */
		VolumeId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		MountPoint: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVolumeRequestFormGroup() {
		return new FormGroup<UpdateVolumeRequestFormProperties>({
			VolumeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			MountPoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AppAttributesKeys { DocumentRoot = 0, RailsEnv = 1, AutoBundleOnDeploy = 2, AwsFlowRubySettings = 3 }

	export enum LayerAttributesKeys { EcsClusterArn = 0, EnableHaproxyStats = 1, HaproxyStatsUrl = 2, HaproxyStatsUser = 3, HaproxyStatsPassword = 4, HaproxyHealthCheckUrl = 5, HaproxyHealthCheckMethod = 6, MysqlRootPassword = 7, MysqlRootPasswordUbiquitous = 8, GangliaUrl = 9, GangliaUser = 10, GangliaPassword = 11, MemcachedMemory = 12, NodejsVersion = 13, RubyVersion = 14, RubygemsVersion = 15, ManageBundler = 16, BundlerVersion = 17, RailsStack = 18, PassengerVersion = 19, Jvm = 20, JvmVersion = 21, JvmOptions = 22, JavaAppServer = 23, JavaAppServerVersion = 24 }

	export enum StackAttributesKeys { Color = 0 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Assign a registered instance to a layer.</p> <ul> <li> <p>You can assign registered on-premises instances to any layer type.</p> </li> <li> <p>You can assign registered Amazon EC2 instances only to custom layers.</p> </li> <li> <p>You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p> </li> </ul> <p> <b>Required Permissions</b>: To use this action, an AWS Identity and Access Management (IAM) user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.AssignInstance
		 * @return {void} Success
		 */
		AssignInstance(requestBody: AssignInstanceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.AssignInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Assigns one of the stack's registered Amazon EBS volumes to a specified instance. The volume must first be registered with the stack by calling <a>RegisterVolume</a>. After you register the volume, you must call <a>UpdateVolume</a> to specify a mount point before calling <code>AssignVolume</code>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.AssignVolume
		 * @return {void} Success
		 */
		AssignVolume(requestBody: AssignVolumeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.AssignVolume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Associates one of the stack's registered Elastic IP addresses with a specified instance. The address must first be registered with the stack by calling <a>RegisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.AssociateElasticIp
		 * @return {void} Success
		 */
		AssociateElasticIp(requestBody: AssociateElasticIpRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.AssociateElasticIp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Attaches an Elastic Load Balancing load balancer to a specified layer. AWS OpsWorks Stacks does not support Application Load Balancer. You can only use Classic Load Balancer with AWS OpsWorks Stacks. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/layers-elb.html">Elastic Load Balancing</a>.</p> <note> <p>You must create the Elastic Load Balancing instance separately, by using the Elastic Load Balancing console, API, or CLI. For more information, see <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/Welcome.html"> Elastic Load Balancing Developer Guide</a>.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer
		 * @return {void} Success
		 */
		AttachElasticLoadBalancer(requestBody: AttachElasticLoadBalancerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.AttachElasticLoadBalancer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a clone of a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-cloning.html">Clone a Stack</a>. By default, all parameters are set to the values used by the parent stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.CloneStack
		 * @return {CloneStackResult} Success
		 */
		CloneStack(requestBody: CloneStackRequest): Observable<CloneStackResult> {
			return this.http.post<CloneStackResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.CloneStack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an app for a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating Apps</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.CreateApp
		 * @return {CreateAppResult} Success
		 */
		CreateApp(requestBody: CreateAppRequest): Observable<CreateAppResult> {
			return this.http.post<CreateAppResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.CreateApp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Runs deployment or stack commands. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-deploying.html">Deploying Apps</a> and <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-commands.html">Run Stack Commands</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.CreateDeployment
		 * @return {CreateDeploymentResult} Success
		 */
		CreateDeployment(requestBody: CreateDeploymentRequest): Observable<CreateDeploymentResult> {
			return this.http.post<CreateDeploymentResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.CreateDeployment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an instance in a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-add.html">Adding an Instance to a Layer</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.CreateInstance
		 * @return {CreateInstanceResult} Success
		 */
		CreateInstance(requestBody: CreateInstanceRequest): Observable<CreateInstanceResult> {
			return this.http.post<CreateInstanceResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.CreateInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-create.html">How to Create a Layer</a>.</p> <note> <p>You should use <b>CreateLayer</b> for noncustom layer types such as PHP App Server only if the stack does not have an existing layer of that type. A stack can have at most one instance of each noncustom layer; if you attempt to create a second instance, <b>CreateLayer</b> fails. A stack can have an arbitrary number of custom layers, so you can call <b>CreateLayer</b> as many times as you like for that layer type.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.CreateLayer
		 * @return {CreateLayerResult} Success
		 */
		CreateLayer(requestBody: CreateLayerRequest): Observable<CreateLayerResult> {
			return this.http.post<CreateLayerResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.CreateLayer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-edit.html">Create a New Stack</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.CreateStack
		 * @return {CreateStackResult} Success
		 */
		CreateStack(requestBody: CreateStackRequest): Observable<CreateStackResult> {
			return this.http.post<CreateStackResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.CreateStack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.CreateUserProfile
		 * @return {CreateUserProfileResult} Success
		 */
		CreateUserProfile(requestBody: CreateUserProfileRequest): Observable<CreateUserProfileResult> {
			return this.http.post<CreateUserProfileResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.CreateUserProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a specified app.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DeleteApp
		 * @return {void} Success
		 */
		DeleteApp(requestBody: DeleteAppRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DeleteApp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a specified instance, which terminates the associated Amazon EC2 instance. You must stop an instance before you can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-delete.html">Deleting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DeleteInstance
		 * @return {void} Success
		 */
		DeleteInstance(requestBody: DeleteInstanceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DeleteInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a specified layer. You must first stop and then delete all associated instances or unassign registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-delete.html">How to Delete a Layer</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DeleteLayer
		 * @return {void} Success
		 */
		DeleteLayer(requestBody: DeleteLayerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DeleteLayer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a specified stack. You must first delete all instances, layers, and apps or deregister registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-shutting.html">Shut Down a Stack</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DeleteStack
		 * @return {void} Success
		 */
		DeleteStack(requestBody: DeleteStackRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DeleteStack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DeleteUserProfile
		 * @return {void} Success
		 */
		DeleteUserProfile(requestBody: DeleteUserProfileRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DeleteUserProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deregisters a specified Amazon ECS cluster from a stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html#workinglayers-ecscluster-delete"> Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster
		 * @return {void} Success
		 */
		DeregisterEcsCluster(requestBody: DeregisterEcsClusterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DeregisterEcsCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deregisters a specified Elastic IP address. The address can then be registered by another stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp
		 * @return {void} Success
		 */
		DeregisterElasticIp(requestBody: DeregisterElasticIpRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DeregisterElasticIp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deregister a registered Amazon EC2 or on-premises instance. This action removes the instance from the stack and returns it to your control. This action cannot be used with instances that were created with AWS OpsWorks Stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DeregisterInstance
		 * @return {void} Success
		 */
		DeregisterInstance(requestBody: DeregisterInstanceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DeregisterInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deregisters an Amazon RDS instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance
		 * @return {void} Success
		 */
		DeregisterRdsDbInstance(requestBody: DeregisterRdsDbInstanceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DeregisterRdsDbInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deregisters an Amazon EBS volume. The volume can then be registered by another stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DeregisterVolume
		 * @return {void} Success
		 */
		DeregisterVolume(requestBody: DeregisterVolumeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DeregisterVolume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the available AWS OpsWorks Stacks agent versions. You must specify a stack ID or a configuration manager. <code>DescribeAgentVersions</code> returns a list of available agent versions for the specified stack or configuration manager.
		 * Post #X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions
		 * @return {DescribeAgentVersionsResult} Success
		 */
		DescribeAgentVersions(requestBody: DescribeAgentVersionsRequest): Observable<DescribeAgentVersionsResult> {
			return this.http.post<DescribeAgentVersionsResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DescribeAgentVersions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Requests a description of a specified set of apps.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DescribeApps
		 * @return {DescribeAppsResult} Success
		 */
		DescribeApps(requestBody: DescribeAppsRequest): Observable<DescribeAppsResult> {
			return this.http.post<DescribeAppsResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DescribeApps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the results of specified commands.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DescribeCommands
		 * @return {DescribeCommandsResult} Success
		 */
		DescribeCommands(requestBody: DescribeCommandsRequest): Observable<DescribeCommandsResult> {
			return this.http.post<DescribeCommandsResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DescribeCommands', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Requests a description of a specified set of deployments.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DescribeDeployments
		 * @return {DescribeDeploymentsResult} Success
		 */
		DescribeDeployments(requestBody: DescribeDeploymentsRequest): Observable<DescribeDeploymentsResult> {
			return this.http.post<DescribeDeploymentsResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DescribeDeployments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes Amazon ECS clusters that are registered with a stack. If you specify only a stack ID, you can use the <code>MaxResults</code> and <code>NextToken</code> parameters to paginate the response. However, AWS OpsWorks Stacks currently supports only one cluster per layer, so the result set has a maximum of one element.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permission. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeEcsClustersResult} Success
		 */
		DescribeEcsClusters(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeEcsClustersRequest): Observable<DescribeEcsClustersResult> {
			return this.http.post<DescribeEcsClustersResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DescribeEcsClusters?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP addresses</a>.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DescribeElasticIps
		 * @return {DescribeElasticIpsResult} Success
		 */
		DescribeElasticIps(requestBody: DescribeElasticIpsRequest): Observable<DescribeElasticIpsResult> {
			return this.http.post<DescribeElasticIpsResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DescribeElasticIps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a stack's Elastic Load Balancing instances.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers
		 * @return {DescribeElasticLoadBalancersResult} Success
		 */
		DescribeElasticLoadBalancers(requestBody: DescribeElasticLoadBalancersRequest): Observable<DescribeElasticLoadBalancersResult> {
			return this.http.post<DescribeElasticLoadBalancersResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DescribeElasticLoadBalancers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Requests a description of a set of instances.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DescribeInstances
		 * @return {DescribeInstancesResult} Success
		 */
		DescribeInstances(requestBody: DescribeInstancesRequest): Observable<DescribeInstancesResult> {
			return this.http.post<DescribeInstancesResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DescribeInstances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Requests a description of one or more layers in a specified stack.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DescribeLayers
		 * @return {DescribeLayersResult} Success
		 */
		DescribeLayers(requestBody: DescribeLayersRequest): Observable<DescribeLayersResult> {
			return this.http.post<DescribeLayersResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DescribeLayers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes load-based auto scaling configurations for specified layers.</p> <note> <p>You must specify at least one of the parameters.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling
		 * @return {DescribeLoadBasedAutoScalingResult} Success
		 */
		DescribeLoadBasedAutoScaling(requestBody: DescribeLoadBasedAutoScalingRequest): Observable<DescribeLoadBasedAutoScalingResult> {
			return this.http.post<DescribeLoadBasedAutoScalingResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DescribeLoadBasedAutoScaling', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a user's SSH information.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile
		 * @return {DescribeMyUserProfileResult} Success
		 */
		DescribeMyUserProfile(): Observable<DescribeMyUserProfileResult> {
			return this.http.post<DescribeMyUserProfileResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DescribeMyUserProfile', null, {});
		}

		/**
		 * Describes the operating systems that are supported by AWS OpsWorks Stacks.
		 * Post #X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems
		 * @return {DescribeOperatingSystemsResponse} Success
		 */
		DescribeOperatingSystems(): Observable<DescribeOperatingSystemsResponse> {
			return this.http.post<DescribeOperatingSystemsResponse>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DescribeOperatingSystems', null, {});
		}

		/**
		 * <p>Describes the permissions for a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DescribePermissions
		 * @return {DescribePermissionsResult} Success
		 */
		DescribePermissions(requestBody: DescribePermissionsRequest): Observable<DescribePermissionsResult> {
			return this.http.post<DescribePermissionsResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DescribePermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describe an instance's RAID arrays.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays
		 * @return {DescribeRaidArraysResult} Success
		 */
		DescribeRaidArrays(requestBody: DescribeRaidArraysRequest): Observable<DescribeRaidArraysResult> {
			return this.http.post<DescribeRaidArraysResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DescribeRaidArrays', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes Amazon RDS instances.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances
		 * @return {DescribeRdsDbInstancesResult} Success
		 */
		DescribeRdsDbInstances(requestBody: DescribeRdsDbInstancesRequest): Observable<DescribeRdsDbInstancesResult> {
			return this.http.post<DescribeRdsDbInstancesResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DescribeRdsDbInstances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes AWS OpsWorks Stacks service errors.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p> <p>This call accepts only one resource-identifying parameter.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors
		 * @return {DescribeServiceErrorsResult} Success
		 */
		DescribeServiceErrors(requestBody: DescribeServiceErrorsRequest): Observable<DescribeServiceErrorsResult> {
			return this.http.post<DescribeServiceErrorsResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DescribeServiceErrors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Requests a description of a stack's provisioning parameters.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters
		 * @return {DescribeStackProvisioningParametersResult} Success
		 */
		DescribeStackProvisioningParameters(requestBody: DescribeStackProvisioningParametersRequest): Observable<DescribeStackProvisioningParametersResult> {
			return this.http.post<DescribeStackProvisioningParametersResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DescribeStackProvisioningParameters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the number of layers and apps in a specified stack, and the number of instances in each state, such as <code>running_setup</code> or <code>online</code>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DescribeStackSummary
		 * @return {DescribeStackSummaryResult} Success
		 */
		DescribeStackSummary(requestBody: DescribeStackSummaryRequest): Observable<DescribeStackSummaryResult> {
			return this.http.post<DescribeStackSummaryResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DescribeStackSummary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Requests a description of one or more stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DescribeStacks
		 * @return {DescribeStacksResult} Success
		 */
		DescribeStacks(requestBody: DescribeStacksRequest): Observable<DescribeStacksResult> {
			return this.http.post<DescribeStacksResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DescribeStacks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes time-based auto scaling configurations for specified instances.</p> <note> <p>You must specify at least one of the parameters.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling
		 * @return {DescribeTimeBasedAutoScalingResult} Success
		 */
		DescribeTimeBasedAutoScaling(requestBody: DescribeTimeBasedAutoScalingRequest): Observable<DescribeTimeBasedAutoScalingResult> {
			return this.http.post<DescribeTimeBasedAutoScalingResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DescribeTimeBasedAutoScaling', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describe specified users.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles
		 * @return {DescribeUserProfilesResult} Success
		 */
		DescribeUserProfiles(requestBody: DescribeUserProfilesRequest): Observable<DescribeUserProfilesResult> {
			return this.http.post<DescribeUserProfilesResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DescribeUserProfiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes an instance's Amazon EBS volumes.</p> <note> <p>This call accepts only one resource-identifying parameter.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DescribeVolumes
		 * @return {DescribeVolumesResult} Success
		 */
		DescribeVolumes(requestBody: DescribeVolumesRequest): Observable<DescribeVolumesResult> {
			return this.http.post<DescribeVolumesResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DescribeVolumes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detaches a specified Elastic Load Balancing instance from its layer.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer
		 * @return {void} Success
		 */
		DetachElasticLoadBalancer(requestBody: DetachElasticLoadBalancerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DetachElasticLoadBalancer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Disassociates an Elastic IP address from its instance. The address remains registered with the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp
		 * @return {void} Success
		 */
		DisassociateElasticIp(requestBody: DisassociateElasticIpRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.DisassociateElasticIp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a generated host name for the specified layer, based on the current host name theme.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion
		 * @return {GetHostnameSuggestionResult} Success
		 */
		GetHostnameSuggestion(requestBody: GetHostnameSuggestionRequest): Observable<GetHostnameSuggestionResult> {
			return this.http.post<GetHostnameSuggestionResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.GetHostnameSuggestion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p>This action can be used only with Windows stacks.</p> </note> <p>Grants RDP access to a Windows instance for a specified time period.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.GrantAccess
		 * @return {GrantAccessResult} Success
		 */
		GrantAccess(requestBody: GrantAccessRequest): Observable<GrantAccessResult> {
			return this.http.post<GrantAccessResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.GrantAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of tags that are applied to the specified stack or layer.
		 * Post #X-Amz-Target=OpsWorks_20130218.ListTags
		 * @return {ListTagsResult} Success
		 */
		ListTags(requestBody: ListTagsRequest): Observable<ListTagsResult> {
			return this.http.post<ListTagsResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.ListTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Reboots a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.RebootInstance
		 * @return {void} Success
		 */
		RebootInstance(requestBody: RebootInstanceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.RebootInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Registers a specified Amazon ECS cluster with a stack. You can register only one cluster with a stack. A cluster can be registered with only one stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-ecscluster.html"> Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html"> Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster
		 * @return {RegisterEcsClusterResult} Success
		 */
		RegisterEcsCluster(requestBody: RegisterEcsClusterRequest): Observable<RegisterEcsClusterResult> {
			return this.http.post<RegisterEcsClusterResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.RegisterEcsCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers an Elastic IP address with a specified stack. An address can be registered with only one stack at a time. If the address is already registered, you must first deregister it by calling <a>DeregisterElasticIp</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.RegisterElasticIp
		 * @return {RegisterElasticIpResult} Success
		 */
		RegisterElasticIp(requestBody: RegisterElasticIpRequest): Observable<RegisterElasticIpResult> {
			return this.http.post<RegisterElasticIpResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.RegisterElasticIp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers instances that were created outside of AWS OpsWorks Stacks with a specified stack.</p> <note> <p>We do not recommend using this action to register instances. The complete registration operation includes two tasks: installing the AWS OpsWorks Stacks agent on the instance, and registering the instance with the stack. <code>RegisterInstance</code> handles only the second step. You should instead use the AWS CLI <code>register</code> command, which performs the entire registration operation. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register.html"> Registering an Instance with an AWS OpsWorks Stacks Stack</a>.</p> </note> <p>Registered instances have the same requirements as instances that are created by using the <a>CreateInstance</a> API. For example, registered instances must be running a supported Linux-based operating system, and they must have a supported instance type. For more information about requirements for instances that you want to register, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances-register-registering-preparer.html"> Preparing the Instance</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.RegisterInstance
		 * @return {RegisterInstanceResult} Success
		 */
		RegisterInstance(requestBody: RegisterInstanceRequest): Observable<RegisterInstanceResult> {
			return this.http.post<RegisterInstanceResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.RegisterInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers an Amazon RDS instance with a stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance
		 * @return {void} Success
		 */
		RegisterRdsDbInstance(requestBody: RegisterRdsDbInstanceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.RegisterRdsDbInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Registers an Amazon EBS volume with a specified stack. A volume can be registered with only one stack at a time. If the volume is already registered, you must first deregister it by calling <a>DeregisterVolume</a>. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.RegisterVolume
		 * @return {RegisterVolumeResult} Success
		 */
		RegisterVolume(requestBody: RegisterVolumeRequest): Observable<RegisterVolumeResult> {
			return this.http.post<RegisterVolumeResult>(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.RegisterVolume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Specify the load-based auto scaling configuration for a specified layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing Load with Time-based and Load-based Instances</a>.</p> <note> <p>To use load-based auto scaling, you must create a set of load-based auto scaling instances. Load-based auto scaling operates only on the instances from that set, so you must ensure that you have created enough instances to handle the maximum anticipated load.</p> </note> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling
		 * @return {void} Success
		 */
		SetLoadBasedAutoScaling(requestBody: SetLoadBasedAutoScalingRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.SetLoadBasedAutoScaling', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Specifies a user's permissions. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingsecurity.html">Security and Permissions</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.SetPermission
		 * @return {void} Success
		 */
		SetPermission(requestBody: SetPermissionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.SetPermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Specify the time-based auto scaling configuration for a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html">Managing Load with Time-based and Load-based Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling
		 * @return {void} Success
		 */
		SetTimeBasedAutoScaling(requestBody: SetTimeBasedAutoScalingRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.SetTimeBasedAutoScaling', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Starts a specified instance. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.StartInstance
		 * @return {void} Success
		 */
		StartInstance(requestBody: StartInstanceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.StartInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Starts a stack's instances.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.StartStack
		 * @return {void} Success
		 */
		StartStack(requestBody: StartStackRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.StartStack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Stops a specified instance. When you stop a standard instance, the data disappears and must be reinstalled when you restart the instance. You can stop an Amazon EBS-backed instance without losing data. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-starting.html">Starting, Stopping, and Rebooting Instances</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.StopInstance
		 * @return {void} Success
		 */
		StopInstance(requestBody: StopInstanceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.StopInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Stops a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.StopStack
		 * @return {void} Success
		 */
		StopStack(requestBody: StopStackRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.StopStack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Apply cost-allocation tags to a specified stack or layer in AWS OpsWorks Stacks. For more information about how tagging works, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/tagging.html">Tags</a> in the AWS OpsWorks User Guide.
		 * Post #X-Amz-Target=OpsWorks_20130218.TagResource
		 * @return {void} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Unassigns a registered instance from all layers that are using the instance. The instance remains in the stack as an unassigned instance, and can be assigned to another layer as needed. You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.UnassignInstance
		 * @return {void} Success
		 */
		UnassignInstance(requestBody: UnassignInstanceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.UnassignInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Unassigns an assigned Amazon EBS volume. The volume remains registered with the stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.UnassignVolume
		 * @return {void} Success
		 */
		UnassignVolume(requestBody: UnassignVolumeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.UnassignVolume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes tags from a specified stack or layer.
		 * Post #X-Amz-Target=OpsWorks_20130218.UntagResource
		 * @return {void} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates a specified app.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Deploy or Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.UpdateApp
		 * @return {void} Success
		 */
		UpdateApp(requestBody: UpdateAppRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.UpdateApp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates a registered Elastic IP address's name. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.UpdateElasticIp
		 * @return {void} Success
		 */
		UpdateElasticIp(requestBody: UpdateElasticIpRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.UpdateElasticIp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates a specified instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.UpdateInstance
		 * @return {void} Success
		 */
		UpdateInstance(requestBody: UpdateInstanceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.UpdateInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates a specified layer.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.UpdateLayer
		 * @return {void} Success
		 */
		UpdateLayer(requestBody: UpdateLayerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.UpdateLayer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates a user's SSH public key.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have self-management enabled or an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile
		 * @return {void} Success
		 */
		UpdateMyUserProfile(requestBody: UpdateMyUserProfileRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.UpdateMyUserProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates an Amazon RDS instance.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance
		 * @return {void} Success
		 */
		UpdateRdsDbInstance(requestBody: UpdateRdsDbInstanceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.UpdateRdsDbInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates a specified stack.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.UpdateStack
		 * @return {void} Success
		 */
		UpdateStack(requestBody: UpdateStackRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.UpdateStack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates a specified user profile.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.UpdateUserProfile
		 * @return {void} Success
		 */
		UpdateUserProfile(requestBody: UpdateUserProfileRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.UpdateUserProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates an Amazon EBS volume's name or mount point. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html">Resource Management</a>.</p> <p> <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions level for the stack, or an attached policy that explicitly grants permissions. For more information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User Permissions</a>.</p>
		 * Post #X-Amz-Target=OpsWorks_20130218.UpdateVolume
		 * @return {void} Success
		 */
		UpdateVolume(requestBody: UpdateVolumeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=OpsWorks_20130218.UpdateVolume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum AssignInstanceX_Amz_Target { 'OpsWorks_20130218.AssignInstance' = 0 }

	export enum AssignVolumeX_Amz_Target { 'OpsWorks_20130218.AssignVolume' = 0 }

	export enum AssociateElasticIpX_Amz_Target { 'OpsWorks_20130218.AssociateElasticIp' = 0 }

	export enum AttachElasticLoadBalancerX_Amz_Target { 'OpsWorks_20130218.AttachElasticLoadBalancer' = 0 }

	export enum CloneStackX_Amz_Target { 'OpsWorks_20130218.CloneStack' = 0 }

	export enum CreateAppX_Amz_Target { 'OpsWorks_20130218.CreateApp' = 0 }

	export enum CreateDeploymentX_Amz_Target { 'OpsWorks_20130218.CreateDeployment' = 0 }

	export enum CreateInstanceX_Amz_Target { 'OpsWorks_20130218.CreateInstance' = 0 }

	export enum CreateLayerX_Amz_Target { 'OpsWorks_20130218.CreateLayer' = 0 }

	export enum CreateStackX_Amz_Target { 'OpsWorks_20130218.CreateStack' = 0 }

	export enum CreateUserProfileX_Amz_Target { 'OpsWorks_20130218.CreateUserProfile' = 0 }

	export enum DeleteAppX_Amz_Target { 'OpsWorks_20130218.DeleteApp' = 0 }

	export enum DeleteInstanceX_Amz_Target { 'OpsWorks_20130218.DeleteInstance' = 0 }

	export enum DeleteLayerX_Amz_Target { 'OpsWorks_20130218.DeleteLayer' = 0 }

	export enum DeleteStackX_Amz_Target { 'OpsWorks_20130218.DeleteStack' = 0 }

	export enum DeleteUserProfileX_Amz_Target { 'OpsWorks_20130218.DeleteUserProfile' = 0 }

	export enum DeregisterEcsClusterX_Amz_Target { 'OpsWorks_20130218.DeregisterEcsCluster' = 0 }

	export enum DeregisterElasticIpX_Amz_Target { 'OpsWorks_20130218.DeregisterElasticIp' = 0 }

	export enum DeregisterInstanceX_Amz_Target { 'OpsWorks_20130218.DeregisterInstance' = 0 }

	export enum DeregisterRdsDbInstanceX_Amz_Target { 'OpsWorks_20130218.DeregisterRdsDbInstance' = 0 }

	export enum DeregisterVolumeX_Amz_Target { 'OpsWorks_20130218.DeregisterVolume' = 0 }

	export enum DescribeAgentVersionsX_Amz_Target { 'OpsWorks_20130218.DescribeAgentVersions' = 0 }

	export enum DescribeAppsX_Amz_Target { 'OpsWorks_20130218.DescribeApps' = 0 }

	export enum DescribeCommandsX_Amz_Target { 'OpsWorks_20130218.DescribeCommands' = 0 }

	export enum DescribeDeploymentsX_Amz_Target { 'OpsWorks_20130218.DescribeDeployments' = 0 }

	export enum DescribeEcsClustersX_Amz_Target { 'OpsWorks_20130218.DescribeEcsClusters' = 0 }

	export enum DescribeElasticIpsX_Amz_Target { 'OpsWorks_20130218.DescribeElasticIps' = 0 }

	export enum DescribeElasticLoadBalancersX_Amz_Target { 'OpsWorks_20130218.DescribeElasticLoadBalancers' = 0 }

	export enum DescribeInstancesX_Amz_Target { 'OpsWorks_20130218.DescribeInstances' = 0 }

	export enum DescribeLayersX_Amz_Target { 'OpsWorks_20130218.DescribeLayers' = 0 }

	export enum DescribeLoadBasedAutoScalingX_Amz_Target { 'OpsWorks_20130218.DescribeLoadBasedAutoScaling' = 0 }

	export enum DescribeMyUserProfileX_Amz_Target { 'OpsWorks_20130218.DescribeMyUserProfile' = 0 }

	export enum DescribeOperatingSystemsX_Amz_Target { 'OpsWorks_20130218.DescribeOperatingSystems' = 0 }

	export enum DescribePermissionsX_Amz_Target { 'OpsWorks_20130218.DescribePermissions' = 0 }

	export enum DescribeRaidArraysX_Amz_Target { 'OpsWorks_20130218.DescribeRaidArrays' = 0 }

	export enum DescribeRdsDbInstancesX_Amz_Target { 'OpsWorks_20130218.DescribeRdsDbInstances' = 0 }

	export enum DescribeServiceErrorsX_Amz_Target { 'OpsWorks_20130218.DescribeServiceErrors' = 0 }

	export enum DescribeStackProvisioningParametersX_Amz_Target { 'OpsWorks_20130218.DescribeStackProvisioningParameters' = 0 }

	export enum DescribeStackSummaryX_Amz_Target { 'OpsWorks_20130218.DescribeStackSummary' = 0 }

	export enum DescribeStacksX_Amz_Target { 'OpsWorks_20130218.DescribeStacks' = 0 }

	export enum DescribeTimeBasedAutoScalingX_Amz_Target { 'OpsWorks_20130218.DescribeTimeBasedAutoScaling' = 0 }

	export enum DescribeUserProfilesX_Amz_Target { 'OpsWorks_20130218.DescribeUserProfiles' = 0 }

	export enum DescribeVolumesX_Amz_Target { 'OpsWorks_20130218.DescribeVolumes' = 0 }

	export enum DetachElasticLoadBalancerX_Amz_Target { 'OpsWorks_20130218.DetachElasticLoadBalancer' = 0 }

	export enum DisassociateElasticIpX_Amz_Target { 'OpsWorks_20130218.DisassociateElasticIp' = 0 }

	export enum GetHostnameSuggestionX_Amz_Target { 'OpsWorks_20130218.GetHostnameSuggestion' = 0 }

	export enum GrantAccessX_Amz_Target { 'OpsWorks_20130218.GrantAccess' = 0 }

	export enum ListTagsX_Amz_Target { 'OpsWorks_20130218.ListTags' = 0 }

	export enum RebootInstanceX_Amz_Target { 'OpsWorks_20130218.RebootInstance' = 0 }

	export enum RegisterEcsClusterX_Amz_Target { 'OpsWorks_20130218.RegisterEcsCluster' = 0 }

	export enum RegisterElasticIpX_Amz_Target { 'OpsWorks_20130218.RegisterElasticIp' = 0 }

	export enum RegisterInstanceX_Amz_Target { 'OpsWorks_20130218.RegisterInstance' = 0 }

	export enum RegisterRdsDbInstanceX_Amz_Target { 'OpsWorks_20130218.RegisterRdsDbInstance' = 0 }

	export enum RegisterVolumeX_Amz_Target { 'OpsWorks_20130218.RegisterVolume' = 0 }

	export enum SetLoadBasedAutoScalingX_Amz_Target { 'OpsWorks_20130218.SetLoadBasedAutoScaling' = 0 }

	export enum SetPermissionX_Amz_Target { 'OpsWorks_20130218.SetPermission' = 0 }

	export enum SetTimeBasedAutoScalingX_Amz_Target { 'OpsWorks_20130218.SetTimeBasedAutoScaling' = 0 }

	export enum StartInstanceX_Amz_Target { 'OpsWorks_20130218.StartInstance' = 0 }

	export enum StartStackX_Amz_Target { 'OpsWorks_20130218.StartStack' = 0 }

	export enum StopInstanceX_Amz_Target { 'OpsWorks_20130218.StopInstance' = 0 }

	export enum StopStackX_Amz_Target { 'OpsWorks_20130218.StopStack' = 0 }

	export enum TagResourceX_Amz_Target { 'OpsWorks_20130218.TagResource' = 0 }

	export enum UnassignInstanceX_Amz_Target { 'OpsWorks_20130218.UnassignInstance' = 0 }

	export enum UnassignVolumeX_Amz_Target { 'OpsWorks_20130218.UnassignVolume' = 0 }

	export enum UntagResourceX_Amz_Target { 'OpsWorks_20130218.UntagResource' = 0 }

	export enum UpdateAppX_Amz_Target { 'OpsWorks_20130218.UpdateApp' = 0 }

	export enum UpdateElasticIpX_Amz_Target { 'OpsWorks_20130218.UpdateElasticIp' = 0 }

	export enum UpdateInstanceX_Amz_Target { 'OpsWorks_20130218.UpdateInstance' = 0 }

	export enum UpdateLayerX_Amz_Target { 'OpsWorks_20130218.UpdateLayer' = 0 }

	export enum UpdateMyUserProfileX_Amz_Target { 'OpsWorks_20130218.UpdateMyUserProfile' = 0 }

	export enum UpdateRdsDbInstanceX_Amz_Target { 'OpsWorks_20130218.UpdateRdsDbInstance' = 0 }

	export enum UpdateStackX_Amz_Target { 'OpsWorks_20130218.UpdateStack' = 0 }

	export enum UpdateUserProfileX_Amz_Target { 'OpsWorks_20130218.UpdateUserProfile' = 0 }

	export enum UpdateVolumeX_Amz_Target { 'OpsWorks_20130218.UpdateVolume' = 0 }

}

