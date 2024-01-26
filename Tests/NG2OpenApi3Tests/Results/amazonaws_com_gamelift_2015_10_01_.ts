import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcceptMatchOutput {
	}
	export interface AcceptMatchOutputFormProperties {
	}
	export function CreateAcceptMatchOutputFormGroup() {
		return new FormGroup<AcceptMatchOutputFormProperties>({
		});

	}

	export interface AcceptMatchInput {

		/** Required */
		TicketId: string;

		/** Required */
		PlayerIds: Array<string>;

		/** Required */
		AcceptanceType: AcceptanceType;
	}
	export interface AcceptMatchInputFormProperties {

		/** Required */
		TicketId: FormControl<string | null | undefined>,

		/** Required */
		AcceptanceType: FormControl<AcceptanceType | null | undefined>,
	}
	export function CreateAcceptMatchInputFormGroup() {
		return new FormGroup<AcceptMatchInputFormProperties>({
			TicketId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AcceptanceType: new FormControl<AcceptanceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AcceptanceType { ACCEPT = 0, REJECT = 1 }

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface InternalServiceException {
	}
	export interface InternalServiceExceptionFormProperties {
	}
	export function CreateInternalServiceExceptionFormGroup() {
		return new FormGroup<InternalServiceExceptionFormProperties>({
		});

	}

	export interface UnsupportedRegionException {
	}
	export interface UnsupportedRegionExceptionFormProperties {
	}
	export function CreateUnsupportedRegionExceptionFormGroup() {
		return new FormGroup<UnsupportedRegionExceptionFormProperties>({
		});

	}

	export interface ClaimGameServerOutput {
		GameServer?: GameServer;
	}
	export interface ClaimGameServerOutputFormProperties {
	}
	export function CreateClaimGameServerOutputFormGroup() {
		return new FormGroup<ClaimGameServerOutputFormProperties>({
		});

	}


	/** <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>Properties describing a game server that is running on an instance in a game server group. </p> <p>A game server is created by a successful call to <code>RegisterGameServer</code> and deleted by calling <code>DeregisterGameServer</code>. A game server is claimed to host a game session by calling <code>ClaimGameServer</code>. </p> */
	export interface GameServer {
		GameServerGroupName?: string;
		GameServerGroupArn?: string;
		GameServerId?: string;
		InstanceId?: string;
		ConnectionInfo?: string;
		GameServerData?: string;
		ClaimStatus?: GameServerClaimStatus;
		UtilizationStatus?: GameServerUtilizationStatus;
		RegistrationTime?: Date;
		LastClaimTime?: Date;
		LastHealthCheckTime?: Date;
	}

	/** <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>Properties describing a game server that is running on an instance in a game server group. </p> <p>A game server is created by a successful call to <code>RegisterGameServer</code> and deleted by calling <code>DeregisterGameServer</code>. A game server is claimed to host a game session by calling <code>ClaimGameServer</code>. </p> */
	export interface GameServerFormProperties {
		GameServerGroupName: FormControl<string | null | undefined>,
		GameServerGroupArn: FormControl<string | null | undefined>,
		GameServerId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		ConnectionInfo: FormControl<string | null | undefined>,
		GameServerData: FormControl<string | null | undefined>,
		ClaimStatus: FormControl<GameServerClaimStatus | null | undefined>,
		UtilizationStatus: FormControl<GameServerUtilizationStatus | null | undefined>,
		RegistrationTime: FormControl<Date | null | undefined>,
		LastClaimTime: FormControl<Date | null | undefined>,
		LastHealthCheckTime: FormControl<Date | null | undefined>,
	}
	export function CreateGameServerFormGroup() {
		return new FormGroup<GameServerFormProperties>({
			GameServerGroupName: new FormControl<string | null | undefined>(undefined),
			GameServerGroupArn: new FormControl<string | null | undefined>(undefined),
			GameServerId: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			ConnectionInfo: new FormControl<string | null | undefined>(undefined),
			GameServerData: new FormControl<string | null | undefined>(undefined),
			ClaimStatus: new FormControl<GameServerClaimStatus | null | undefined>(undefined),
			UtilizationStatus: new FormControl<GameServerUtilizationStatus | null | undefined>(undefined),
			RegistrationTime: new FormControl<Date | null | undefined>(undefined),
			LastClaimTime: new FormControl<Date | null | undefined>(undefined),
			LastHealthCheckTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum GameServerClaimStatus { CLAIMED = 0 }

	export enum GameServerUtilizationStatus { AVAILABLE = 0, UTILIZED = 1 }

	export interface ClaimGameServerInput {

		/** Required */
		GameServerGroupName: string;
		GameServerId?: string;
		GameServerData?: string;
		FilterOption?: ClaimFilterOption;
	}
	export interface ClaimGameServerInputFormProperties {

		/** Required */
		GameServerGroupName: FormControl<string | null | undefined>,
		GameServerId: FormControl<string | null | undefined>,
		GameServerData: FormControl<string | null | undefined>,
	}
	export function CreateClaimGameServerInputFormGroup() {
		return new FormGroup<ClaimGameServerInputFormProperties>({
			GameServerGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GameServerId: new FormControl<string | null | undefined>(undefined),
			GameServerData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p> Filters which game servers may be claimed when calling <code>ClaimGameServer</code>. </p> */
	export interface ClaimFilterOption {
		InstanceStatuses?: Array<FilterInstanceStatus>;
	}

	/** <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p> Filters which game servers may be claimed when calling <code>ClaimGameServer</code>. </p> */
	export interface ClaimFilterOptionFormProperties {
	}
	export function CreateClaimFilterOptionFormGroup() {
		return new FormGroup<ClaimFilterOptionFormProperties>({
		});

	}

	export enum FilterInstanceStatus { ACTIVE = 0, DRAINING = 1 }

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface OutOfCapacityException {
	}
	export interface OutOfCapacityExceptionFormProperties {
	}
	export function CreateOutOfCapacityExceptionFormGroup() {
		return new FormGroup<OutOfCapacityExceptionFormProperties>({
		});

	}

	export interface UnauthorizedException {
	}
	export interface UnauthorizedExceptionFormProperties {
	}
	export function CreateUnauthorizedExceptionFormGroup() {
		return new FormGroup<UnauthorizedExceptionFormProperties>({
		});

	}

	export interface CreateAliasOutput {
		Alias?: Alias;
	}
	export interface CreateAliasOutputFormProperties {
	}
	export function CreateCreateAliasOutputFormGroup() {
		return new FormGroup<CreateAliasOutputFormProperties>({
		});

	}


	/** <p>Properties that describe an alias resource.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p> */
	export interface Alias {
		AliasId?: string;
		Name?: string;
		AliasArn?: string;
		Description?: string;
		RoutingStrategy?: RoutingStrategy;
		CreationTime?: Date;
		LastUpdatedTime?: Date;
	}

	/** <p>Properties that describe an alias resource.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p> */
	export interface AliasFormProperties {
		AliasId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		AliasArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateAliasFormGroup() {
		return new FormGroup<AliasFormProperties>({
			AliasId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			AliasArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p>The routing configuration for a fleet alias.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p> */
	export interface RoutingStrategy {
		Type?: RoutingStrategyType;
		FleetId?: string;
		Message?: string;
	}

	/** <p>The routing configuration for a fleet alias.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p> */
	export interface RoutingStrategyFormProperties {
		Type: FormControl<RoutingStrategyType | null | undefined>,
		FleetId: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateRoutingStrategyFormGroup() {
		return new FormGroup<RoutingStrategyFormProperties>({
			Type: new FormControl<RoutingStrategyType | null | undefined>(undefined),
			FleetId: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RoutingStrategyType { SIMPLE = 0, TERMINAL = 1 }

	export interface CreateAliasInput {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		RoutingStrategy: RoutingStrategy;
		Tags?: Array<Tag>;
	}
	export interface CreateAliasInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateAliasInputFormGroup() {
		return new FormGroup<CreateAliasInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A label that you can assign to a Amazon GameLift resource. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p> */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** <p>A label that you can assign to a Amazon GameLift resource. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p> */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface TaggingFailedException {
	}
	export interface TaggingFailedExceptionFormProperties {
	}
	export function CreateTaggingFailedExceptionFormGroup() {
		return new FormGroup<TaggingFailedExceptionFormProperties>({
		});

	}

	export interface CreateBuildOutput {
		Build?: Build;
		UploadCredentials?: AwsCredentials;
		StorageLocation?: S3Location;
	}
	export interface CreateBuildOutputFormProperties {
	}
	export function CreateCreateBuildOutputFormGroup() {
		return new FormGroup<CreateBuildOutputFormProperties>({
		});

	}


	/** <p>Properties describing a custom game build.</p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p> */
	export interface Build {
		BuildId?: string;
		BuildArn?: string;
		Name?: string;
		Version?: string;
		Status?: BuildStatus;
		SizeOnDisk?: number | null;
		OperatingSystem?: OperatingSystem;
		CreationTime?: Date;
		ServerSdkVersion?: string;
	}

	/** <p>Properties describing a custom game build.</p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p> */
	export interface BuildFormProperties {
		BuildId: FormControl<string | null | undefined>,
		BuildArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
		Status: FormControl<BuildStatus | null | undefined>,
		SizeOnDisk: FormControl<number | null | undefined>,
		OperatingSystem: FormControl<OperatingSystem | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		ServerSdkVersion: FormControl<string | null | undefined>,
	}
	export function CreateBuildFormGroup() {
		return new FormGroup<BuildFormProperties>({
			BuildId: new FormControl<string | null | undefined>(undefined),
			BuildArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<BuildStatus | null | undefined>(undefined),
			SizeOnDisk: new FormControl<number | null | undefined>(undefined),
			OperatingSystem: new FormControl<OperatingSystem | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			ServerSdkVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BuildStatus { INITIALIZED = 0, READY = 1, FAILED = 2 }

	export enum OperatingSystem { WINDOWS_2012 = 0, AMAZON_LINUX = 1, AMAZON_LINUX_2 = 2, WINDOWS_2016 = 3, AMAZON_LINUX_2023 = 4 }


	/** Temporary access credentials used for uploading game build files to Amazon GameLift. They are valid for a limited time. If they expire before you upload your game build, get a new set by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_RequestUploadCredentials.html">RequestUploadCredentials</a>. */
	export interface AwsCredentials {
		AccessKeyId?: string;
		SecretAccessKey?: string;
		SessionToken?: string;
	}

	/** Temporary access credentials used for uploading game build files to Amazon GameLift. They are valid for a limited time. If they expire before you upload your game build, get a new set by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_RequestUploadCredentials.html">RequestUploadCredentials</a>. */
	export interface AwsCredentialsFormProperties {
		AccessKeyId: FormControl<string | null | undefined>,
		SecretAccessKey: FormControl<string | null | undefined>,
		SessionToken: FormControl<string | null | undefined>,
	}
	export function CreateAwsCredentialsFormGroup() {
		return new FormGroup<AwsCredentialsFormProperties>({
			AccessKeyId: new FormControl<string | null | undefined>(undefined),
			SecretAccessKey: new FormControl<string | null | undefined>(undefined),
			SessionToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The location in Amazon S3 where build or script files are stored for access by Amazon GameLift. */
	export interface S3Location {
		Bucket?: string;
		Key?: string;
		RoleArn?: string;
		ObjectVersion?: string;
	}

	/** The location in Amazon S3 where build or script files are stored for access by Amazon GameLift. */
	export interface S3LocationFormProperties {
		Bucket: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		ObjectVersion: FormControl<string | null | undefined>,
	}
	export function CreateS3LocationFormGroup() {
		return new FormGroup<S3LocationFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			ObjectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBuildInput {
		Name?: string;
		Version?: string;
		StorageLocation?: S3Location;
		OperatingSystem?: OperatingSystem;
		Tags?: Array<Tag>;
		ServerSdkVersion?: string;
	}
	export interface CreateBuildInputFormProperties {
		Name: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
		OperatingSystem: FormControl<OperatingSystem | null | undefined>,
		ServerSdkVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateBuildInputFormGroup() {
		return new FormGroup<CreateBuildInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
			OperatingSystem: new FormControl<OperatingSystem | null | undefined>(undefined),
			ServerSdkVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFleetOutput {
		FleetAttributes?: FleetAttributes;
		LocationStates?: Array<LocationState>;
	}
	export interface CreateFleetOutputFormProperties {
	}
	export function CreateCreateFleetOutputFormGroup() {
		return new FormGroup<CreateFleetOutputFormProperties>({
		});

	}


	/** <p>Describes a Amazon GameLift fleet of game hosting resources.</p> <p> <b>Related actions</b> </p> */
	export interface FleetAttributes {
		FleetId?: string;
		FleetArn?: string;
		FleetType?: FleetType;
		InstanceType?: EC2InstanceType;
		Description?: string;
		Name?: string;
		CreationTime?: Date;
		TerminationTime?: Date;
		Status?: FleetStatus;
		BuildId?: string;
		BuildArn?: string;
		ScriptId?: string;
		ScriptArn?: string;
		ServerLaunchPath?: string;
		ServerLaunchParameters?: string;
		LogPaths?: Array<string>;
		NewGameSessionProtectionPolicy?: ProtectionPolicy;
		OperatingSystem?: OperatingSystem;

		/** <p>A policy that puts limits on the number of game sessions that a player can create within a specified span of time. With this policy, you can control players' ability to consume available resources.</p> <p>The policy is evaluated when a player tries to create a new game session. On receiving a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by <code>CreatorId</code>) has created fewer than game session limit in the specified time period.</p> */
		ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
		MetricGroups?: Array<string>;
		StoppedActions?: Array<FleetAction>;
		InstanceRoleArn?: string;

		/** Determines whether a TLS/SSL certificate is generated for a fleet. This feature must be enabled when creating the fleet. All instances in a fleet share the same certificate. The certificate can be retrieved by calling the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html">Amazon GameLift Server SDK</a> operation <code>GetInstanceCertificate</code>. */
		CertificateConfiguration?: CertificateConfiguration;
		ComputeType?: ComputeType;

		/** Amazon GameLift Anywhere configuration options for your Anywhere fleets. */
		AnywhereConfiguration?: AnywhereConfiguration;
	}

	/** <p>Describes a Amazon GameLift fleet of game hosting resources.</p> <p> <b>Related actions</b> </p> */
	export interface FleetAttributesFormProperties {
		FleetId: FormControl<string | null | undefined>,
		FleetArn: FormControl<string | null | undefined>,
		FleetType: FormControl<FleetType | null | undefined>,
		InstanceType: FormControl<EC2InstanceType | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		TerminationTime: FormControl<Date | null | undefined>,
		Status: FormControl<FleetStatus | null | undefined>,
		BuildId: FormControl<string | null | undefined>,
		BuildArn: FormControl<string | null | undefined>,
		ScriptId: FormControl<string | null | undefined>,
		ScriptArn: FormControl<string | null | undefined>,
		ServerLaunchPath: FormControl<string | null | undefined>,
		ServerLaunchParameters: FormControl<string | null | undefined>,
		NewGameSessionProtectionPolicy: FormControl<ProtectionPolicy | null | undefined>,
		OperatingSystem: FormControl<OperatingSystem | null | undefined>,
		InstanceRoleArn: FormControl<string | null | undefined>,
		ComputeType: FormControl<ComputeType | null | undefined>,
	}
	export function CreateFleetAttributesFormGroup() {
		return new FormGroup<FleetAttributesFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			FleetArn: new FormControl<string | null | undefined>(undefined),
			FleetType: new FormControl<FleetType | null | undefined>(undefined),
			InstanceType: new FormControl<EC2InstanceType | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			TerminationTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<FleetStatus | null | undefined>(undefined),
			BuildId: new FormControl<string | null | undefined>(undefined),
			BuildArn: new FormControl<string | null | undefined>(undefined),
			ScriptId: new FormControl<string | null | undefined>(undefined),
			ScriptArn: new FormControl<string | null | undefined>(undefined),
			ServerLaunchPath: new FormControl<string | null | undefined>(undefined),
			ServerLaunchParameters: new FormControl<string | null | undefined>(undefined),
			NewGameSessionProtectionPolicy: new FormControl<ProtectionPolicy | null | undefined>(undefined),
			OperatingSystem: new FormControl<OperatingSystem | null | undefined>(undefined),
			InstanceRoleArn: new FormControl<string | null | undefined>(undefined),
			ComputeType: new FormControl<ComputeType | null | undefined>(undefined),
		});

	}

	export enum FleetType { ON_DEMAND = 0, SPOT = 1 }

	export enum EC2InstanceType { 't2.micro' = 0, 't2.small' = 1, 't2.medium' = 2, 't2.large' = 3, 'c3.large' = 4, 'c3.xlarge' = 5, 'c3.2xlarge' = 6, 'c3.4xlarge' = 7, 'c3.8xlarge' = 8, 'c4.large' = 9, 'c4.xlarge' = 10, 'c4.2xlarge' = 11, 'c4.4xlarge' = 12, 'c4.8xlarge' = 13, 'c5.large' = 14, 'c5.xlarge' = 15, 'c5.2xlarge' = 16, 'c5.4xlarge' = 17, 'c5.9xlarge' = 18, 'c5.12xlarge' = 19, 'c5.18xlarge' = 20, 'c5.24xlarge' = 21, 'c5a.large' = 22, 'c5a.xlarge' = 23, 'c5a.2xlarge' = 24, 'c5a.4xlarge' = 25, 'c5a.8xlarge' = 26, 'c5a.12xlarge' = 27, 'c5a.16xlarge' = 28, 'c5a.24xlarge' = 29, 'r3.large' = 30, 'r3.xlarge' = 31, 'r3.2xlarge' = 32, 'r3.4xlarge' = 33, 'r3.8xlarge' = 34, 'r4.large' = 35, 'r4.xlarge' = 36, 'r4.2xlarge' = 37, 'r4.4xlarge' = 38, 'r4.8xlarge' = 39, 'r4.16xlarge' = 40, 'r5.large' = 41, 'r5.xlarge' = 42, 'r5.2xlarge' = 43, 'r5.4xlarge' = 44, 'r5.8xlarge' = 45, 'r5.12xlarge' = 46, 'r5.16xlarge' = 47, 'r5.24xlarge' = 48, 'r5a.large' = 49, 'r5a.xlarge' = 50, 'r5a.2xlarge' = 51, 'r5a.4xlarge' = 52, 'r5a.8xlarge' = 53, 'r5a.12xlarge' = 54, 'r5a.16xlarge' = 55, 'r5a.24xlarge' = 56, 'm3.medium' = 57, 'm3.large' = 58, 'm3.xlarge' = 59, 'm3.2xlarge' = 60, 'm4.large' = 61, 'm4.xlarge' = 62, 'm4.2xlarge' = 63, 'm4.4xlarge' = 64, 'm4.10xlarge' = 65, 'm5.large' = 66, 'm5.xlarge' = 67, 'm5.2xlarge' = 68, 'm5.4xlarge' = 69, 'm5.8xlarge' = 70, 'm5.12xlarge' = 71, 'm5.16xlarge' = 72, 'm5.24xlarge' = 73, 'm5a.large' = 74, 'm5a.xlarge' = 75, 'm5a.2xlarge' = 76, 'm5a.4xlarge' = 77, 'm5a.8xlarge' = 78, 'm5a.12xlarge' = 79, 'm5a.16xlarge' = 80, 'm5a.24xlarge' = 81, 'c5d.large' = 82, 'c5d.xlarge' = 83, 'c5d.2xlarge' = 84, 'c5d.4xlarge' = 85, 'c5d.9xlarge' = 86, 'c5d.12xlarge' = 87, 'c5d.18xlarge' = 88, 'c5d.24xlarge' = 89, 'c6a.large' = 90, 'c6a.xlarge' = 91, 'c6a.2xlarge' = 92, 'c6a.4xlarge' = 93, 'c6a.8xlarge' = 94, 'c6a.12xlarge' = 95, 'c6a.16xlarge' = 96, 'c6a.24xlarge' = 97, 'c6i.large' = 98, 'c6i.xlarge' = 99, 'c6i.2xlarge' = 100, 'c6i.4xlarge' = 101, 'c6i.8xlarge' = 102, 'c6i.12xlarge' = 103, 'c6i.16xlarge' = 104, 'c6i.24xlarge' = 105, 'r5d.large' = 106, 'r5d.xlarge' = 107, 'r5d.2xlarge' = 108, 'r5d.4xlarge' = 109, 'r5d.8xlarge' = 110, 'r5d.12xlarge' = 111, 'r5d.16xlarge' = 112, 'r5d.24xlarge' = 113 }

	export enum FleetStatus { NEW = 0, DOWNLOADING = 1, VALIDATING = 2, BUILDING = 3, ACTIVATING = 4, ACTIVE = 5, DELETING = 6, ERROR = 7, TERMINATED = 8, NOT_FOUND = 9 }

	export enum ProtectionPolicy { NoProtection = 0, FullProtection = 1 }


	/** <p>A policy that puts limits on the number of game sessions that a player can create within a specified span of time. With this policy, you can control players' ability to consume available resources.</p> <p>The policy is evaluated when a player tries to create a new game session. On receiving a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by <code>CreatorId</code>) has created fewer than game session limit in the specified time period.</p> */
	export interface ResourceCreationLimitPolicy {
		NewGameSessionsPerCreator?: number | null;
		PolicyPeriodInMinutes?: number | null;
	}

	/** <p>A policy that puts limits on the number of game sessions that a player can create within a specified span of time. With this policy, you can control players' ability to consume available resources.</p> <p>The policy is evaluated when a player tries to create a new game session. On receiving a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by <code>CreatorId</code>) has created fewer than game session limit in the specified time period.</p> */
	export interface ResourceCreationLimitPolicyFormProperties {
		NewGameSessionsPerCreator: FormControl<number | null | undefined>,
		PolicyPeriodInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateResourceCreationLimitPolicyFormGroup() {
		return new FormGroup<ResourceCreationLimitPolicyFormProperties>({
			NewGameSessionsPerCreator: new FormControl<number | null | undefined>(undefined),
			PolicyPeriodInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FleetAction { AUTO_SCALING = 0 }


	/** Determines whether a TLS/SSL certificate is generated for a fleet. This feature must be enabled when creating the fleet. All instances in a fleet share the same certificate. The certificate can be retrieved by calling the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html">Amazon GameLift Server SDK</a> operation <code>GetInstanceCertificate</code>.  */
	export interface CertificateConfiguration {

		/** Required */
		CertificateType: CertificateType;
	}

	/** Determines whether a TLS/SSL certificate is generated for a fleet. This feature must be enabled when creating the fleet. All instances in a fleet share the same certificate. The certificate can be retrieved by calling the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html">Amazon GameLift Server SDK</a> operation <code>GetInstanceCertificate</code>.  */
	export interface CertificateConfigurationFormProperties {

		/** Required */
		CertificateType: FormControl<CertificateType | null | undefined>,
	}
	export function CreateCertificateConfigurationFormGroup() {
		return new FormGroup<CertificateConfigurationFormProperties>({
			CertificateType: new FormControl<CertificateType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CertificateType { DISABLED = 0, GENERATED = 1 }

	export enum ComputeType { EC2 = 0, ANYWHERE = 1 }


	/** Amazon GameLift Anywhere configuration options for your Anywhere fleets. */
	export interface AnywhereConfiguration {

		/** Required */
		Cost: string;
	}

	/** Amazon GameLift Anywhere configuration options for your Anywhere fleets. */
	export interface AnywhereConfigurationFormProperties {

		/** Required */
		Cost: FormControl<string | null | undefined>,
	}
	export function CreateAnywhereConfigurationFormGroup() {
		return new FormGroup<AnywhereConfigurationFormProperties>({
			Cost: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>A fleet location and its life-cycle state. A location state object might be used to describe a fleet's remote location or home Region. Life-cycle state tracks the progress of launching the first instance in a new location and preparing it for game hosting, and then removing all instances and deleting the location from the fleet.</p> <ul> <li> <p> <b>NEW</b> -- A new fleet location has been defined and desired instances is set to 1. </p> </li> <li> <p> <b>DOWNLOADING/VALIDATING/BUILDING/ACTIVATING</b> -- Amazon GameLift is setting up the new fleet location, creating new instances with the game build or Realtime script and starting server processes.</p> </li> <li> <p> <b>ACTIVE</b> -- Hosts can now accept game sessions.</p> </li> <li> <p> <b>ERROR</b> -- An error occurred when downloading, validating, building, or activating the fleet location.</p> </li> <li> <p> <b>DELETING</b> -- Hosts are responding to a delete fleet location request.</p> </li> <li> <p> <b>TERMINATED</b> -- The fleet location no longer exists.</p> </li> <li> <p> <b>NOT_FOUND</b> -- The fleet location was not found. This could be because the custom location was removed or not created. </p> </li> </ul> */
	export interface LocationState {
		Location?: string;
		Status?: FleetStatus;
	}

	/** <p>A fleet location and its life-cycle state. A location state object might be used to describe a fleet's remote location or home Region. Life-cycle state tracks the progress of launching the first instance in a new location and preparing it for game hosting, and then removing all instances and deleting the location from the fleet.</p> <ul> <li> <p> <b>NEW</b> -- A new fleet location has been defined and desired instances is set to 1. </p> </li> <li> <p> <b>DOWNLOADING/VALIDATING/BUILDING/ACTIVATING</b> -- Amazon GameLift is setting up the new fleet location, creating new instances with the game build or Realtime script and starting server processes.</p> </li> <li> <p> <b>ACTIVE</b> -- Hosts can now accept game sessions.</p> </li> <li> <p> <b>ERROR</b> -- An error occurred when downloading, validating, building, or activating the fleet location.</p> </li> <li> <p> <b>DELETING</b> -- Hosts are responding to a delete fleet location request.</p> </li> <li> <p> <b>TERMINATED</b> -- The fleet location no longer exists.</p> </li> <li> <p> <b>NOT_FOUND</b> -- The fleet location was not found. This could be because the custom location was removed or not created. </p> </li> </ul> */
	export interface LocationStateFormProperties {
		Location: FormControl<string | null | undefined>,
		Status: FormControl<FleetStatus | null | undefined>,
	}
	export function CreateLocationStateFormGroup() {
		return new FormGroup<LocationStateFormProperties>({
			Location: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<FleetStatus | null | undefined>(undefined),
		});

	}

	export interface CreateFleetInput {

		/** Required */
		Name: string;
		Description?: string;
		BuildId?: string;
		ScriptId?: string;
		ServerLaunchPath?: string;
		ServerLaunchParameters?: string;
		LogPaths?: Array<string>;
		EC2InstanceType?: EC2InstanceType;
		EC2InboundPermissions?: Array<IpPermission>;
		NewGameSessionProtectionPolicy?: ProtectionPolicy;
		RuntimeConfiguration?: RuntimeConfiguration;
		ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
		MetricGroups?: Array<string>;
		PeerVpcAwsAccountId?: string;
		PeerVpcId?: string;
		FleetType?: FleetType;
		InstanceRoleArn?: string;
		CertificateConfiguration?: CertificateConfiguration;
		Locations?: Array<LocationConfiguration>;
		Tags?: Array<Tag>;
		ComputeType?: ComputeType;
		AnywhereConfiguration?: AnywhereConfiguration;
	}
	export interface CreateFleetInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		BuildId: FormControl<string | null | undefined>,
		ScriptId: FormControl<string | null | undefined>,
		ServerLaunchPath: FormControl<string | null | undefined>,
		ServerLaunchParameters: FormControl<string | null | undefined>,
		EC2InstanceType: FormControl<EC2InstanceType | null | undefined>,
		NewGameSessionProtectionPolicy: FormControl<ProtectionPolicy | null | undefined>,
		PeerVpcAwsAccountId: FormControl<string | null | undefined>,
		PeerVpcId: FormControl<string | null | undefined>,
		FleetType: FormControl<FleetType | null | undefined>,
		InstanceRoleArn: FormControl<string | null | undefined>,
		ComputeType: FormControl<ComputeType | null | undefined>,
	}
	export function CreateCreateFleetInputFormGroup() {
		return new FormGroup<CreateFleetInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			BuildId: new FormControl<string | null | undefined>(undefined),
			ScriptId: new FormControl<string | null | undefined>(undefined),
			ServerLaunchPath: new FormControl<string | null | undefined>(undefined),
			ServerLaunchParameters: new FormControl<string | null | undefined>(undefined),
			EC2InstanceType: new FormControl<EC2InstanceType | null | undefined>(undefined),
			NewGameSessionProtectionPolicy: new FormControl<ProtectionPolicy | null | undefined>(undefined),
			PeerVpcAwsAccountId: new FormControl<string | null | undefined>(undefined),
			PeerVpcId: new FormControl<string | null | undefined>(undefined),
			FleetType: new FormControl<FleetType | null | undefined>(undefined),
			InstanceRoleArn: new FormControl<string | null | undefined>(undefined),
			ComputeType: new FormControl<ComputeType | null | undefined>(undefined),
		});

	}


	/** A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an instance in a fleet. New game sessions are assigned an IP address/port number combination, which must fall into the fleet's allowed ranges. Fleets with custom game builds must have permissions explicitly set. For Realtime Servers fleets, Amazon GameLift automatically opens two port ranges, one for TCP messaging and one for UDP. */
	export interface IpPermission {

		/** Required */
		FromPort: number;

		/** Required */
		ToPort: number;

		/** Required */
		IpRange: string;

		/** Required */
		Protocol: IpProtocol;
	}

	/** A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an instance in a fleet. New game sessions are assigned an IP address/port number combination, which must fall into the fleet's allowed ranges. Fleets with custom game builds must have permissions explicitly set. For Realtime Servers fleets, Amazon GameLift automatically opens two port ranges, one for TCP messaging and one for UDP. */
	export interface IpPermissionFormProperties {

		/** Required */
		FromPort: FormControl<number | null | undefined>,

		/** Required */
		ToPort: FormControl<number | null | undefined>,

		/** Required */
		IpRange: FormControl<string | null | undefined>,

		/** Required */
		Protocol: FormControl<IpProtocol | null | undefined>,
	}
	export function CreateIpPermissionFormGroup() {
		return new FormGroup<IpPermissionFormProperties>({
			FromPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ToPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			IpRange: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Protocol: new FormControl<IpProtocol | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IpProtocol { TCP = 0, UDP = 1 }


	/** <p>A collection of server process configurations that describe the set of processes to run on each instance in a fleet. Server processes run either an executable in a custom game build or a Realtime Servers script. Amazon GameLift launches the configured processes, manages their life cycle, and replaces them as needed. Each instance checks regularly for an updated runtime configuration. </p> <p>A Amazon GameLift instance is limited to 50 processes running concurrently. To calculate the total number of processes in a runtime configuration, add the values of the <code>ConcurrentExecutions</code> parameter for each server process. Learn more about <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html"> Running Multiple Processes on a Fleet</a>.</p> */
	export interface RuntimeConfiguration {
		ServerProcesses?: Array<ServerProcess>;
		MaxConcurrentGameSessionActivations?: number | null;
		GameSessionActivationTimeoutSeconds?: number | null;
	}

	/** <p>A collection of server process configurations that describe the set of processes to run on each instance in a fleet. Server processes run either an executable in a custom game build or a Realtime Servers script. Amazon GameLift launches the configured processes, manages their life cycle, and replaces them as needed. Each instance checks regularly for an updated runtime configuration. </p> <p>A Amazon GameLift instance is limited to 50 processes running concurrently. To calculate the total number of processes in a runtime configuration, add the values of the <code>ConcurrentExecutions</code> parameter for each server process. Learn more about <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html"> Running Multiple Processes on a Fleet</a>.</p> */
	export interface RuntimeConfigurationFormProperties {
		MaxConcurrentGameSessionActivations: FormControl<number | null | undefined>,
		GameSessionActivationTimeoutSeconds: FormControl<number | null | undefined>,
	}
	export function CreateRuntimeConfigurationFormGroup() {
		return new FormGroup<RuntimeConfigurationFormProperties>({
			MaxConcurrentGameSessionActivations: new FormControl<number | null | undefined>(undefined),
			GameSessionActivationTimeoutSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A set of instructions for launching server processes on each instance in a fleet. Server processes run either an executable in a custom game build or a Realtime Servers script. Server process configurations are part of a fleet's runtime configuration. */
	export interface ServerProcess {

		/** Required */
		LaunchPath: string;
		Parameters?: string;

		/** Required */
		ConcurrentExecutions: number;
	}

	/** A set of instructions for launching server processes on each instance in a fleet. Server processes run either an executable in a custom game build or a Realtime Servers script. Server process configurations are part of a fleet's runtime configuration. */
	export interface ServerProcessFormProperties {

		/** Required */
		LaunchPath: FormControl<string | null | undefined>,
		Parameters: FormControl<string | null | undefined>,

		/** Required */
		ConcurrentExecutions: FormControl<number | null | undefined>,
	}
	export function CreateServerProcessFormGroup() {
		return new FormGroup<ServerProcessFormProperties>({
			LaunchPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Parameters: new FormControl<string | null | undefined>(undefined),
			ConcurrentExecutions: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A remote location where a multi-location fleet can deploy game servers for game hosting.  */
	export interface LocationConfiguration {

		/** Required */
		Location: string;
	}

	/** A remote location where a multi-location fleet can deploy game servers for game hosting.  */
	export interface LocationConfigurationFormProperties {

		/** Required */
		Location: FormControl<string | null | undefined>,
	}
	export function CreateLocationConfigurationFormGroup() {
		return new FormGroup<LocationConfigurationFormProperties>({
			Location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateFleetLocationsOutput {
		FleetId?: string;
		FleetArn?: string;
		LocationStates?: Array<LocationState>;
	}
	export interface CreateFleetLocationsOutputFormProperties {
		FleetId: FormControl<string | null | undefined>,
		FleetArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateFleetLocationsOutputFormGroup() {
		return new FormGroup<CreateFleetLocationsOutputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			FleetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFleetLocationsInput {

		/** Required */
		FleetId: string;

		/** Required */
		Locations: Array<LocationConfiguration>;
	}
	export interface CreateFleetLocationsInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,
	}
	export function CreateCreateFleetLocationsInputFormGroup() {
		return new FormGroup<CreateFleetLocationsInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidFleetStatusException {
	}
	export interface InvalidFleetStatusExceptionFormProperties {
	}
	export function CreateInvalidFleetStatusExceptionFormGroup() {
		return new FormGroup<InvalidFleetStatusExceptionFormProperties>({
		});

	}

	export interface CreateGameServerGroupOutput {
		GameServerGroup?: GameServerGroup;
	}
	export interface CreateGameServerGroupOutputFormProperties {
	}
	export function CreateCreateGameServerGroupOutputFormGroup() {
		return new FormGroup<CreateGameServerGroupOutputFormProperties>({
		});

	}


	/** <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>Properties that describe a game server group resource. A game server group manages certain properties related to a corresponding Amazon EC2 Auto Scaling group. </p> <p>A game server group is created by a successful call to <code>CreateGameServerGroup</code> and deleted by calling <code>DeleteGameServerGroup</code>. Game server group activity can be temporarily suspended and resumed by calling <code>SuspendGameServerGroup</code> and <code>ResumeGameServerGroup</code>, respectively. </p> */
	export interface GameServerGroup {
		GameServerGroupName?: string;
		GameServerGroupArn?: string;
		RoleArn?: string;
		InstanceDefinitions?: Array<InstanceDefinition>;
		BalancingStrategy?: BalancingStrategy;
		GameServerProtectionPolicy?: GameServerProtectionPolicy;
		AutoScalingGroupArn?: string;
		Status?: GameServerGroupStatus;
		StatusReason?: string;
		SuspendedActions?: Array<GameServerGroupAction>;
		CreationTime?: Date;
		LastUpdatedTime?: Date;
	}

	/** <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>Properties that describe a game server group resource. A game server group manages certain properties related to a corresponding Amazon EC2 Auto Scaling group. </p> <p>A game server group is created by a successful call to <code>CreateGameServerGroup</code> and deleted by calling <code>DeleteGameServerGroup</code>. Game server group activity can be temporarily suspended and resumed by calling <code>SuspendGameServerGroup</code> and <code>ResumeGameServerGroup</code>, respectively. </p> */
	export interface GameServerGroupFormProperties {
		GameServerGroupName: FormControl<string | null | undefined>,
		GameServerGroupArn: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		BalancingStrategy: FormControl<BalancingStrategy | null | undefined>,
		GameServerProtectionPolicy: FormControl<GameServerProtectionPolicy | null | undefined>,
		AutoScalingGroupArn: FormControl<string | null | undefined>,
		Status: FormControl<GameServerGroupStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateGameServerGroupFormGroup() {
		return new FormGroup<GameServerGroupFormProperties>({
			GameServerGroupName: new FormControl<string | null | undefined>(undefined),
			GameServerGroupArn: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			BalancingStrategy: new FormControl<BalancingStrategy | null | undefined>(undefined),
			GameServerProtectionPolicy: new FormControl<GameServerProtectionPolicy | null | undefined>(undefined),
			AutoScalingGroupArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<GameServerGroupStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>An allowed instance type for a game server group. All game server groups must have at least two instance types defined for it. Amazon GameLift FleetIQ periodically evaluates each defined instance type for viability. It then updates the Auto Scaling group with the list of viable instance types.</p> */
	export interface InstanceDefinition {

		/** Required */
		InstanceType: GameServerGroupInstanceType;
		WeightedCapacity?: string;
	}

	/** <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>An allowed instance type for a game server group. All game server groups must have at least two instance types defined for it. Amazon GameLift FleetIQ periodically evaluates each defined instance type for viability. It then updates the Auto Scaling group with the list of viable instance types.</p> */
	export interface InstanceDefinitionFormProperties {

		/** Required */
		InstanceType: FormControl<GameServerGroupInstanceType | null | undefined>,
		WeightedCapacity: FormControl<string | null | undefined>,
	}
	export function CreateInstanceDefinitionFormGroup() {
		return new FormGroup<InstanceDefinitionFormProperties>({
			InstanceType: new FormControl<GameServerGroupInstanceType | null | undefined>(undefined, [Validators.required]),
			WeightedCapacity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GameServerGroupInstanceType { 'c4.large' = 0, 'c4.xlarge' = 1, 'c4.2xlarge' = 2, 'c4.4xlarge' = 3, 'c4.8xlarge' = 4, 'c5.large' = 5, 'c5.xlarge' = 6, 'c5.2xlarge' = 7, 'c5.4xlarge' = 8, 'c5.9xlarge' = 9, 'c5.12xlarge' = 10, 'c5.18xlarge' = 11, 'c5.24xlarge' = 12, 'c5a.large' = 13, 'c5a.xlarge' = 14, 'c5a.2xlarge' = 15, 'c5a.4xlarge' = 16, 'c5a.8xlarge' = 17, 'c5a.12xlarge' = 18, 'c5a.16xlarge' = 19, 'c5a.24xlarge' = 20, 'c6g.medium' = 21, 'c6g.large' = 22, 'c6g.xlarge' = 23, 'c6g.2xlarge' = 24, 'c6g.4xlarge' = 25, 'c6g.8xlarge' = 26, 'c6g.12xlarge' = 27, 'c6g.16xlarge' = 28, 'r4.large' = 29, 'r4.xlarge' = 30, 'r4.2xlarge' = 31, 'r4.4xlarge' = 32, 'r4.8xlarge' = 33, 'r4.16xlarge' = 34, 'r5.large' = 35, 'r5.xlarge' = 36, 'r5.2xlarge' = 37, 'r5.4xlarge' = 38, 'r5.8xlarge' = 39, 'r5.12xlarge' = 40, 'r5.16xlarge' = 41, 'r5.24xlarge' = 42, 'r5a.large' = 43, 'r5a.xlarge' = 44, 'r5a.2xlarge' = 45, 'r5a.4xlarge' = 46, 'r5a.8xlarge' = 47, 'r5a.12xlarge' = 48, 'r5a.16xlarge' = 49, 'r5a.24xlarge' = 50, 'r6g.medium' = 51, 'r6g.large' = 52, 'r6g.xlarge' = 53, 'r6g.2xlarge' = 54, 'r6g.4xlarge' = 55, 'r6g.8xlarge' = 56, 'r6g.12xlarge' = 57, 'r6g.16xlarge' = 58, 'm4.large' = 59, 'm4.xlarge' = 60, 'm4.2xlarge' = 61, 'm4.4xlarge' = 62, 'm4.10xlarge' = 63, 'm5.large' = 64, 'm5.xlarge' = 65, 'm5.2xlarge' = 66, 'm5.4xlarge' = 67, 'm5.8xlarge' = 68, 'm5.12xlarge' = 69, 'm5.16xlarge' = 70, 'm5.24xlarge' = 71, 'm5a.large' = 72, 'm5a.xlarge' = 73, 'm5a.2xlarge' = 74, 'm5a.4xlarge' = 75, 'm5a.8xlarge' = 76, 'm5a.12xlarge' = 77, 'm5a.16xlarge' = 78, 'm5a.24xlarge' = 79, 'm6g.medium' = 80, 'm6g.large' = 81, 'm6g.xlarge' = 82, 'm6g.2xlarge' = 83, 'm6g.4xlarge' = 84, 'm6g.8xlarge' = 85, 'm6g.12xlarge' = 86, 'm6g.16xlarge' = 87 }

	export enum BalancingStrategy { SPOT_ONLY = 0, SPOT_PREFERRED = 1, ON_DEMAND_ONLY = 2 }

	export enum GameServerProtectionPolicy { NO_PROTECTION = 0, FULL_PROTECTION = 1 }

	export enum GameServerGroupStatus { NEW = 0, ACTIVATING = 1, ACTIVE = 2, DELETE_SCHEDULED = 3, DELETING = 4, DELETED = 5, ERROR = 6 }

	export enum GameServerGroupAction { REPLACE_INSTANCE_TYPES = 0 }

	export interface CreateGameServerGroupInput {

		/** Required */
		GameServerGroupName: string;

		/** Required */
		RoleArn: string;

		/** Required */
		MinSize: number;

		/** Required */
		MaxSize: number;

		/** Required */
		LaunchTemplate: LaunchTemplateSpecification;

		/** Required */
		InstanceDefinitions: Array<InstanceDefinition>;
		AutoScalingPolicy?: GameServerGroupAutoScalingPolicy;
		BalancingStrategy?: BalancingStrategy;
		GameServerProtectionPolicy?: GameServerProtectionPolicy;
		VpcSubnets?: Array<string>;
		Tags?: Array<Tag>;
	}
	export interface CreateGameServerGroupInputFormProperties {

		/** Required */
		GameServerGroupName: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		MinSize: FormControl<number | null | undefined>,

		/** Required */
		MaxSize: FormControl<number | null | undefined>,
		BalancingStrategy: FormControl<BalancingStrategy | null | undefined>,
		GameServerProtectionPolicy: FormControl<GameServerProtectionPolicy | null | undefined>,
	}
	export function CreateCreateGameServerGroupInputFormGroup() {
		return new FormGroup<CreateGameServerGroupInputFormProperties>({
			GameServerGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MinSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MaxSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			BalancingStrategy: new FormControl<BalancingStrategy | null | undefined>(undefined),
			GameServerProtectionPolicy: new FormControl<GameServerProtectionPolicy | null | undefined>(undefined),
		});

	}


	/** <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>An Amazon Elastic Compute Cloud launch template that contains configuration settings and game server code to be deployed to all instances in a game server group. The launch template is specified when creating a new game server group. </p> */
	export interface LaunchTemplateSpecification {
		LaunchTemplateId?: string;
		LaunchTemplateName?: string;
		Version?: string;
	}

	/** <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>An Amazon Elastic Compute Cloud launch template that contains configuration settings and game server code to be deployed to all instances in a game server group. The launch template is specified when creating a new game server group. </p> */
	export interface LaunchTemplateSpecificationFormProperties {
		LaunchTemplateId: FormControl<string | null | undefined>,
		LaunchTemplateName: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateLaunchTemplateSpecificationFormGroup() {
		return new FormGroup<LaunchTemplateSpecificationFormProperties>({
			LaunchTemplateId: new FormControl<string | null | undefined>(undefined),
			LaunchTemplateName: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>Configuration settings for intelligent automatic scaling that uses target tracking. These settings are used to add an Auto Scaling policy when creating the corresponding Auto Scaling group. After the Auto Scaling group is created, all updates to Auto Scaling policies, including changing this policy and adding or removing other policies, is done directly on the Auto Scaling group. </p> */
	export interface GameServerGroupAutoScalingPolicy {
		EstimatedInstanceWarmup?: number | null;

		/** Required */
		TargetTrackingConfiguration: TargetTrackingConfiguration;
	}

	/** <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>Configuration settings for intelligent automatic scaling that uses target tracking. These settings are used to add an Auto Scaling policy when creating the corresponding Auto Scaling group. After the Auto Scaling group is created, all updates to Auto Scaling policies, including changing this policy and adding or removing other policies, is done directly on the Auto Scaling group. </p> */
	export interface GameServerGroupAutoScalingPolicyFormProperties {
		EstimatedInstanceWarmup: FormControl<number | null | undefined>,
	}
	export function CreateGameServerGroupAutoScalingPolicyFormGroup() {
		return new FormGroup<GameServerGroupAutoScalingPolicyFormProperties>({
			EstimatedInstanceWarmup: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>Settings for a target-based scaling policy as part of a <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerGroupAutoScalingPolicy.html">GameServerGroupAutoScalingPolicy</a> . These settings are used to create a target-based policy that tracks the Amazon GameLift FleetIQ metric <code>"PercentUtilizedGameServers"</code> and specifies a target value for the metric. As player usage changes, the policy triggers to adjust the game server group capacity so that the metric returns to the target value. </p> */
	export interface TargetTrackingConfiguration {

		/** Required */
		TargetValue: number;
	}

	/** <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p>Settings for a target-based scaling policy as part of a <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerGroupAutoScalingPolicy.html">GameServerGroupAutoScalingPolicy</a> . These settings are used to create a target-based policy that tracks the Amazon GameLift FleetIQ metric <code>"PercentUtilizedGameServers"</code> and specifies a target value for the metric. As player usage changes, the policy triggers to adjust the game server group capacity so that the metric returns to the target value. </p> */
	export interface TargetTrackingConfigurationFormProperties {

		/** Required */
		TargetValue: FormControl<number | null | undefined>,
	}
	export function CreateTargetTrackingConfigurationFormGroup() {
		return new FormGroup<TargetTrackingConfigurationFormProperties>({
			TargetValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateGameSessionOutput {
		GameSession?: GameSession;
	}
	export interface CreateGameSessionOutputFormProperties {
	}
	export function CreateCreateGameSessionOutputFormGroup() {
		return new FormGroup<CreateGameSessionOutputFormProperties>({
		});

	}


	/** <p>Properties describing a game session.</p> <p>A game session in ACTIVE status can host players. When a game session ends, its status is set to <code>TERMINATED</code>. </p> <p>Once the session ends, the game session object is retained for 30 days. This means you can reuse idempotency token values after this time. Game session logs are retained for 14 days.</p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p> */
	export interface GameSession {
		GameSessionId?: string;
		Name?: string;
		FleetId?: string;
		FleetArn?: string;
		CreationTime?: Date;
		TerminationTime?: Date;
		CurrentPlayerSessionCount?: number | null;
		MaximumPlayerSessionCount?: number | null;
		Status?: GameSessionStatus;
		StatusReason?: GameSessionStatusReason;
		GameProperties?: Array<GameProperty>;
		IpAddress?: string;
		DnsName?: string;
		Port?: number | null;
		PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy;
		CreatorId?: string;
		GameSessionData?: string;
		MatchmakerData?: string;
		Location?: string;
	}

	/** <p>Properties describing a game session.</p> <p>A game session in ACTIVE status can host players. When a game session ends, its status is set to <code>TERMINATED</code>. </p> <p>Once the session ends, the game session object is retained for 30 days. This means you can reuse idempotency token values after this time. Game session logs are retained for 14 days.</p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p> */
	export interface GameSessionFormProperties {
		GameSessionId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		FleetId: FormControl<string | null | undefined>,
		FleetArn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		TerminationTime: FormControl<Date | null | undefined>,
		CurrentPlayerSessionCount: FormControl<number | null | undefined>,
		MaximumPlayerSessionCount: FormControl<number | null | undefined>,
		Status: FormControl<GameSessionStatus | null | undefined>,
		StatusReason: FormControl<GameSessionStatusReason | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
		DnsName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		PlayerSessionCreationPolicy: FormControl<PlayerSessionCreationPolicy | null | undefined>,
		CreatorId: FormControl<string | null | undefined>,
		GameSessionData: FormControl<string | null | undefined>,
		MatchmakerData: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
	}
	export function CreateGameSessionFormGroup() {
		return new FormGroup<GameSessionFormProperties>({
			GameSessionId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			FleetId: new FormControl<string | null | undefined>(undefined),
			FleetArn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			TerminationTime: new FormControl<Date | null | undefined>(undefined),
			CurrentPlayerSessionCount: new FormControl<number | null | undefined>(undefined),
			MaximumPlayerSessionCount: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<GameSessionStatus | null | undefined>(undefined),
			StatusReason: new FormControl<GameSessionStatusReason | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
			DnsName: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			PlayerSessionCreationPolicy: new FormControl<PlayerSessionCreationPolicy | null | undefined>(undefined),
			CreatorId: new FormControl<string | null | undefined>(undefined),
			GameSessionData: new FormControl<string | null | undefined>(undefined),
			MatchmakerData: new FormControl<string | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GameSessionStatus { ACTIVE = 0, ACTIVATING = 1, TERMINATED = 2, TERMINATING = 3, ERROR = 4 }

	export enum GameSessionStatusReason { INTERRUPTED = 0 }


	/** Set of key-value pairs that contain information about a game session. When included in a game session request, these properties communicate details to be used when setting up the new game session. For example, a game property might specify a game mode, level, or map. Game properties are passed to the game server process when initiating a new game session. For more information, see the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-create"> Amazon GameLift Developer Guide</a>. */
	export interface GameProperty {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** Set of key-value pairs that contain information about a game session. When included in a game session request, these properties communicate details to be used when setting up the new game session. For example, a game property might specify a game mode, level, or map. Game properties are passed to the game server process when initiating a new game session. For more information, see the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-create"> Amazon GameLift Developer Guide</a>. */
	export interface GamePropertyFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateGamePropertyFormGroup() {
		return new FormGroup<GamePropertyFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PlayerSessionCreationPolicy { ACCEPT_ALL = 0, DENY_ALL = 1 }

	export interface CreateGameSessionInput {
		FleetId?: string;
		AliasId?: string;

		/** Required */
		MaximumPlayerSessionCount: number;
		Name?: string;
		GameProperties?: Array<GameProperty>;
		CreatorId?: string;
		GameSessionId?: string;
		IdempotencyToken?: string;
		GameSessionData?: string;
		Location?: string;
	}
	export interface CreateGameSessionInputFormProperties {
		FleetId: FormControl<string | null | undefined>,
		AliasId: FormControl<string | null | undefined>,

		/** Required */
		MaximumPlayerSessionCount: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		CreatorId: FormControl<string | null | undefined>,
		GameSessionId: FormControl<string | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
		GameSessionData: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
	}
	export function CreateCreateGameSessionInputFormGroup() {
		return new FormGroup<CreateGameSessionInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			AliasId: new FormControl<string | null | undefined>(undefined),
			MaximumPlayerSessionCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			CreatorId: new FormControl<string | null | undefined>(undefined),
			GameSessionId: new FormControl<string | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
			GameSessionData: new FormControl<string | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TerminalRoutingStrategyException {
	}
	export interface TerminalRoutingStrategyExceptionFormProperties {
	}
	export function CreateTerminalRoutingStrategyExceptionFormGroup() {
		return new FormGroup<TerminalRoutingStrategyExceptionFormProperties>({
		});

	}

	export interface FleetCapacityExceededException {
	}
	export interface FleetCapacityExceededExceptionFormProperties {
	}
	export function CreateFleetCapacityExceededExceptionFormGroup() {
		return new FormGroup<FleetCapacityExceededExceptionFormProperties>({
		});

	}

	export interface IdempotentParameterMismatchException {
	}
	export interface IdempotentParameterMismatchExceptionFormProperties {
	}
	export function CreateIdempotentParameterMismatchExceptionFormGroup() {
		return new FormGroup<IdempotentParameterMismatchExceptionFormProperties>({
		});

	}

	export interface CreateGameSessionQueueOutput {
		GameSessionQueue?: GameSessionQueue;
	}
	export interface CreateGameSessionQueueOutputFormProperties {
	}
	export function CreateCreateGameSessionQueueOutputFormGroup() {
		return new FormGroup<CreateGameSessionQueueOutputFormProperties>({
		});

	}


	/** Configuration for a game session placement mechanism that processes requests for new game sessions. A queue can be used on its own or as part of a matchmaking solution. */
	export interface GameSessionQueue {
		Name?: string;
		GameSessionQueueArn?: string;
		TimeoutInSeconds?: number | null;
		PlayerLatencyPolicies?: Array<PlayerLatencyPolicy>;
		Destinations?: Array<GameSessionQueueDestination>;
		FilterConfiguration?: FilterConfiguration;
		PriorityConfiguration?: PriorityConfiguration;
		CustomEventData?: string;
		NotificationTarget?: string;
	}

	/** Configuration for a game session placement mechanism that processes requests for new game sessions. A queue can be used on its own or as part of a matchmaking solution. */
	export interface GameSessionQueueFormProperties {
		Name: FormControl<string | null | undefined>,
		GameSessionQueueArn: FormControl<string | null | undefined>,
		TimeoutInSeconds: FormControl<number | null | undefined>,
		CustomEventData: FormControl<string | null | undefined>,
		NotificationTarget: FormControl<string | null | undefined>,
	}
	export function CreateGameSessionQueueFormGroup() {
		return new FormGroup<GameSessionQueueFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			GameSessionQueueArn: new FormControl<string | null | undefined>(undefined),
			TimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			CustomEventData: new FormControl<string | null | undefined>(undefined),
			NotificationTarget: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sets a latency cap for individual players when placing a game session. With a latency policy in force, a game session cannot be placed in a fleet location where a player reports latency higher than the cap. Latency policies are used only with placement request that provide player latency information. Player latency policies can be stacked to gradually relax latency requirements over time.  */
	export interface PlayerLatencyPolicy {
		MaximumIndividualPlayerLatencyMilliseconds?: number | null;
		PolicyDurationSeconds?: number | null;
	}

	/** Sets a latency cap for individual players when placing a game session. With a latency policy in force, a game session cannot be placed in a fleet location where a player reports latency higher than the cap. Latency policies are used only with placement request that provide player latency information. Player latency policies can be stacked to gradually relax latency requirements over time.  */
	export interface PlayerLatencyPolicyFormProperties {
		MaximumIndividualPlayerLatencyMilliseconds: FormControl<number | null | undefined>,
		PolicyDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreatePlayerLatencyPolicyFormGroup() {
		return new FormGroup<PlayerLatencyPolicyFormProperties>({
			MaximumIndividualPlayerLatencyMilliseconds: new FormControl<number | null | undefined>(undefined),
			PolicyDurationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A fleet or alias designated in a game session queue. Queues fulfill requests for new game sessions by placing a new game session on any of the queue's destinations.  */
	export interface GameSessionQueueDestination {
		DestinationArn?: string;
	}

	/** A fleet or alias designated in a game session queue. Queues fulfill requests for new game sessions by placing a new game session on any of the queue's destinations.  */
	export interface GameSessionQueueDestinationFormProperties {
		DestinationArn: FormControl<string | null | undefined>,
	}
	export function CreateGameSessionQueueDestinationFormGroup() {
		return new FormGroup<GameSessionQueueDestinationFormProperties>({
			DestinationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of fleet locations where a game session queue can place new game sessions. You can use a filter to temporarily turn off placements for specific locations. For queues that have multi-location fleets, you can use a filter configuration allow placement with some, but not all of these locations. */
	export interface FilterConfiguration {
		AllowedLocations?: Array<string>;
	}

	/** A list of fleet locations where a game session queue can place new game sessions. You can use a filter to temporarily turn off placements for specific locations. For queues that have multi-location fleets, you can use a filter configuration allow placement with some, but not all of these locations. */
	export interface FilterConfigurationFormProperties {
	}
	export function CreateFilterConfigurationFormGroup() {
		return new FormGroup<FilterConfigurationFormProperties>({
		});

	}


	/** <p>Custom prioritization settings for use by a game session queue when placing new game sessions with available game servers. When defined, this configuration replaces the default FleetIQ prioritization process, which is as follows:</p> <ul> <li> <p>If player latency data is included in a game session request, destinations and locations are prioritized first based on lowest average latency (1), then on lowest hosting cost (2), then on destination list order (3), and finally on location (alphabetical) (4). This approach ensures that the queue's top priority is to place game sessions where average player latency is lowest, and--if latency is the same--where the hosting cost is less, etc.</p> </li> <li> <p>If player latency data is not included, destinations and locations are prioritized first on destination list order (1), and then on location (alphabetical) (2). This approach ensures that the queue's top priority is to place game sessions on the first destination fleet listed. If that fleet has multiple locations, the game session is placed on the first location (when listed alphabetically).</p> </li> </ul> <p>Changing the priority order will affect how game sessions are placed.</p> */
	export interface PriorityConfiguration {
		PriorityOrder?: Array<PriorityType>;
		LocationOrder?: Array<string>;
	}

	/** <p>Custom prioritization settings for use by a game session queue when placing new game sessions with available game servers. When defined, this configuration replaces the default FleetIQ prioritization process, which is as follows:</p> <ul> <li> <p>If player latency data is included in a game session request, destinations and locations are prioritized first based on lowest average latency (1), then on lowest hosting cost (2), then on destination list order (3), and finally on location (alphabetical) (4). This approach ensures that the queue's top priority is to place game sessions where average player latency is lowest, and--if latency is the same--where the hosting cost is less, etc.</p> </li> <li> <p>If player latency data is not included, destinations and locations are prioritized first on destination list order (1), and then on location (alphabetical) (2). This approach ensures that the queue's top priority is to place game sessions on the first destination fleet listed. If that fleet has multiple locations, the game session is placed on the first location (when listed alphabetically).</p> </li> </ul> <p>Changing the priority order will affect how game sessions are placed.</p> */
	export interface PriorityConfigurationFormProperties {
	}
	export function CreatePriorityConfigurationFormGroup() {
		return new FormGroup<PriorityConfigurationFormProperties>({
		});

	}

	export enum PriorityType { LATENCY = 0, COST = 1, DESTINATION = 2, LOCATION = 3 }

	export interface CreateGameSessionQueueInput {

		/** Required */
		Name: string;
		TimeoutInSeconds?: number | null;
		PlayerLatencyPolicies?: Array<PlayerLatencyPolicy>;
		Destinations?: Array<GameSessionQueueDestination>;
		FilterConfiguration?: FilterConfiguration;
		PriorityConfiguration?: PriorityConfiguration;
		CustomEventData?: string;
		NotificationTarget?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateGameSessionQueueInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		TimeoutInSeconds: FormControl<number | null | undefined>,
		CustomEventData: FormControl<string | null | undefined>,
		NotificationTarget: FormControl<string | null | undefined>,
	}
	export function CreateCreateGameSessionQueueInputFormGroup() {
		return new FormGroup<CreateGameSessionQueueInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			CustomEventData: new FormControl<string | null | undefined>(undefined),
			NotificationTarget: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLocationOutput {
		Location?: LocationModel;
	}
	export interface CreateLocationOutputFormProperties {
	}
	export function CreateCreateLocationOutputFormGroup() {
		return new FormGroup<CreateLocationOutputFormProperties>({
		});

	}


	/** Properties of a location */
	export interface LocationModel {
		LocationName?: string;
		LocationArn?: string;
	}

	/** Properties of a location */
	export interface LocationModelFormProperties {
		LocationName: FormControl<string | null | undefined>,
		LocationArn: FormControl<string | null | undefined>,
	}
	export function CreateLocationModelFormGroup() {
		return new FormGroup<LocationModelFormProperties>({
			LocationName: new FormControl<string | null | undefined>(undefined),
			LocationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLocationInput {

		/** Required */
		LocationName: string;
		Tags?: Array<Tag>;
	}
	export interface CreateLocationInputFormProperties {

		/** Required */
		LocationName: FormControl<string | null | undefined>,
	}
	export function CreateCreateLocationInputFormGroup() {
		return new FormGroup<CreateLocationInputFormProperties>({
			LocationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateMatchmakingConfigurationOutput {
		Configuration?: MatchmakingConfiguration;
	}
	export interface CreateMatchmakingConfigurationOutputFormProperties {
	}
	export function CreateCreateMatchmakingConfigurationOutputFormGroup() {
		return new FormGroup<CreateMatchmakingConfigurationOutputFormProperties>({
		});

	}


	/** Guidelines for use with FlexMatch to match players into games. All matchmaking requests must specify a matchmaking configuration. */
	export interface MatchmakingConfiguration {
		Name?: string;
		ConfigurationArn?: string;
		Description?: string;
		GameSessionQueueArns?: Array<string>;
		RequestTimeoutSeconds?: number | null;
		AcceptanceTimeoutSeconds?: number | null;
		AcceptanceRequired?: boolean | null;
		RuleSetName?: string;
		RuleSetArn?: string;
		NotificationTarget?: string;
		AdditionalPlayerCount?: number | null;
		CustomEventData?: string;
		CreationTime?: Date;
		GameProperties?: Array<GameProperty>;
		GameSessionData?: string;
		BackfillMode?: BackfillMode;
		FlexMatchMode?: FlexMatchMode;
	}

	/** Guidelines for use with FlexMatch to match players into games. All matchmaking requests must specify a matchmaking configuration. */
	export interface MatchmakingConfigurationFormProperties {
		Name: FormControl<string | null | undefined>,
		ConfigurationArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RequestTimeoutSeconds: FormControl<number | null | undefined>,
		AcceptanceTimeoutSeconds: FormControl<number | null | undefined>,
		AcceptanceRequired: FormControl<boolean | null | undefined>,
		RuleSetName: FormControl<string | null | undefined>,
		RuleSetArn: FormControl<string | null | undefined>,
		NotificationTarget: FormControl<string | null | undefined>,
		AdditionalPlayerCount: FormControl<number | null | undefined>,
		CustomEventData: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		GameSessionData: FormControl<string | null | undefined>,
		BackfillMode: FormControl<BackfillMode | null | undefined>,
		FlexMatchMode: FormControl<FlexMatchMode | null | undefined>,
	}
	export function CreateMatchmakingConfigurationFormGroup() {
		return new FormGroup<MatchmakingConfigurationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ConfigurationArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			RequestTimeoutSeconds: new FormControl<number | null | undefined>(undefined),
			AcceptanceTimeoutSeconds: new FormControl<number | null | undefined>(undefined),
			AcceptanceRequired: new FormControl<boolean | null | undefined>(undefined),
			RuleSetName: new FormControl<string | null | undefined>(undefined),
			RuleSetArn: new FormControl<string | null | undefined>(undefined),
			NotificationTarget: new FormControl<string | null | undefined>(undefined),
			AdditionalPlayerCount: new FormControl<number | null | undefined>(undefined),
			CustomEventData: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			GameSessionData: new FormControl<string | null | undefined>(undefined),
			BackfillMode: new FormControl<BackfillMode | null | undefined>(undefined),
			FlexMatchMode: new FormControl<FlexMatchMode | null | undefined>(undefined),
		});

	}

	export enum BackfillMode { AUTOMATIC = 0, MANUAL = 1 }

	export enum FlexMatchMode { STANDALONE = 0, WITH_QUEUE = 1 }

	export interface CreateMatchmakingConfigurationInput {

		/** Required */
		Name: string;
		Description?: string;
		GameSessionQueueArns?: Array<string>;

		/** Required */
		RequestTimeoutSeconds: number;
		AcceptanceTimeoutSeconds?: number | null;

		/** Required */
		AcceptanceRequired: boolean;

		/** Required */
		RuleSetName: string;
		NotificationTarget?: string;
		AdditionalPlayerCount?: number | null;
		CustomEventData?: string;
		GameProperties?: Array<GameProperty>;
		GameSessionData?: string;
		BackfillMode?: BackfillMode;
		FlexMatchMode?: FlexMatchMode;
		Tags?: Array<Tag>;
	}
	export interface CreateMatchmakingConfigurationInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		RequestTimeoutSeconds: FormControl<number | null | undefined>,
		AcceptanceTimeoutSeconds: FormControl<number | null | undefined>,

		/** Required */
		AcceptanceRequired: FormControl<boolean | null | undefined>,

		/** Required */
		RuleSetName: FormControl<string | null | undefined>,
		NotificationTarget: FormControl<string | null | undefined>,
		AdditionalPlayerCount: FormControl<number | null | undefined>,
		CustomEventData: FormControl<string | null | undefined>,
		GameSessionData: FormControl<string | null | undefined>,
		BackfillMode: FormControl<BackfillMode | null | undefined>,
		FlexMatchMode: FormControl<FlexMatchMode | null | undefined>,
	}
	export function CreateCreateMatchmakingConfigurationInputFormGroup() {
		return new FormGroup<CreateMatchmakingConfigurationInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			RequestTimeoutSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			AcceptanceTimeoutSeconds: new FormControl<number | null | undefined>(undefined),
			AcceptanceRequired: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			RuleSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NotificationTarget: new FormControl<string | null | undefined>(undefined),
			AdditionalPlayerCount: new FormControl<number | null | undefined>(undefined),
			CustomEventData: new FormControl<string | null | undefined>(undefined),
			GameSessionData: new FormControl<string | null | undefined>(undefined),
			BackfillMode: new FormControl<BackfillMode | null | undefined>(undefined),
			FlexMatchMode: new FormControl<FlexMatchMode | null | undefined>(undefined),
		});

	}

	export interface CreateMatchmakingRuleSetOutput {

		/** Required */
		RuleSet: MatchmakingRuleSet;
	}
	export interface CreateMatchmakingRuleSetOutputFormProperties {
	}
	export function CreateCreateMatchmakingRuleSetOutputFormGroup() {
		return new FormGroup<CreateMatchmakingRuleSetOutputFormProperties>({
		});

	}


	/** <p>Set of rule statements, used with FlexMatch, that determine how to build your player matches. Each rule set describes a type of group to be created and defines the parameters for acceptable player matches.</p> <p>A rule set may define the following elements for a match. For detailed information and examples showing how to construct a rule set, see <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a FlexMatch rule set</a>. </p> <ul> <li> <p>Teams -- Required. A rule set must define one or multiple teams for the match and set minimum and maximum team sizes. For example, a rule set might describe a 4x4 match that requires all eight slots to be filled. </p> </li> <li> <p>Player attributes -- Optional. These attributes specify a set of player characteristics to evaluate when looking for a match. Matchmaking requests that use a rule set with player attributes must provide the corresponding attribute values. For example, an attribute might specify a player's skill or level.</p> </li> <li> <p>Rules -- Optional. Rules define how to evaluate potential players for a match based on player attributes. A rule might specify minimum requirements for individual players, teams, or entire matches. For example, a rule might require each player to meet a certain skill level, each team to have at least one player in a certain role, or the match to have a minimum average skill level. or may describe an entire group--such as all teams must be evenly matched or have at least one player in a certain role. </p> </li> <li> <p>Expansions -- Optional. Expansions allow you to relax the rules after a period of time when no acceptable matches are found. This feature lets you balance getting players into games in a reasonable amount of time instead of making them wait indefinitely for the best possible match. For example, you might use an expansion to increase the maximum skill variance between players after 30 seconds.</p> </li> </ul> */
	export interface MatchmakingRuleSet {
		RuleSetName?: string;
		RuleSetArn?: string;

		/** Required */
		RuleSetBody: string;
		CreationTime?: Date;
	}

	/** <p>Set of rule statements, used with FlexMatch, that determine how to build your player matches. Each rule set describes a type of group to be created and defines the parameters for acceptable player matches.</p> <p>A rule set may define the following elements for a match. For detailed information and examples showing how to construct a rule set, see <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a FlexMatch rule set</a>. </p> <ul> <li> <p>Teams -- Required. A rule set must define one or multiple teams for the match and set minimum and maximum team sizes. For example, a rule set might describe a 4x4 match that requires all eight slots to be filled. </p> </li> <li> <p>Player attributes -- Optional. These attributes specify a set of player characteristics to evaluate when looking for a match. Matchmaking requests that use a rule set with player attributes must provide the corresponding attribute values. For example, an attribute might specify a player's skill or level.</p> </li> <li> <p>Rules -- Optional. Rules define how to evaluate potential players for a match based on player attributes. A rule might specify minimum requirements for individual players, teams, or entire matches. For example, a rule might require each player to meet a certain skill level, each team to have at least one player in a certain role, or the match to have a minimum average skill level. or may describe an entire group--such as all teams must be evenly matched or have at least one player in a certain role. </p> </li> <li> <p>Expansions -- Optional. Expansions allow you to relax the rules after a period of time when no acceptable matches are found. This feature lets you balance getting players into games in a reasonable amount of time instead of making them wait indefinitely for the best possible match. For example, you might use an expansion to increase the maximum skill variance between players after 30 seconds.</p> </li> </ul> */
	export interface MatchmakingRuleSetFormProperties {
		RuleSetName: FormControl<string | null | undefined>,
		RuleSetArn: FormControl<string | null | undefined>,

		/** Required */
		RuleSetBody: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateMatchmakingRuleSetFormGroup() {
		return new FormGroup<MatchmakingRuleSetFormProperties>({
			RuleSetName: new FormControl<string | null | undefined>(undefined),
			RuleSetArn: new FormControl<string | null | undefined>(undefined),
			RuleSetBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateMatchmakingRuleSetInput {

		/** Required */
		Name: string;

		/** Required */
		RuleSetBody: string;
		Tags?: Array<Tag>;
	}
	export interface CreateMatchmakingRuleSetInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RuleSetBody: FormControl<string | null | undefined>,
	}
	export function CreateCreateMatchmakingRuleSetInputFormGroup() {
		return new FormGroup<CreateMatchmakingRuleSetInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RuleSetBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePlayerSessionOutput {
		PlayerSession?: PlayerSession;
	}
	export interface CreatePlayerSessionOutputFormProperties {
	}
	export function CreateCreatePlayerSessionOutputFormGroup() {
		return new FormGroup<CreatePlayerSessionOutputFormProperties>({
		});

	}


	/** <p>Represents a player session. Player sessions are created either for a specific game session, or as part of a game session placement or matchmaking request. A player session can represents a reserved player slot in a game session (when status is <code>RESERVED</code>) or actual player activity in a game session (when status is <code>ACTIVE</code>). A player session object, including player data, is automatically passed to a game session when the player connects to the game session and is validated. After the game session ends, player sessions information is retained for 30 days and then removed.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p> */
	export interface PlayerSession {
		PlayerSessionId?: string;
		PlayerId?: string;
		GameSessionId?: string;
		FleetId?: string;
		FleetArn?: string;
		CreationTime?: Date;
		TerminationTime?: Date;
		Status?: PlayerSessionStatus;
		IpAddress?: string;
		DnsName?: string;
		Port?: number | null;
		PlayerData?: string;
	}

	/** <p>Represents a player session. Player sessions are created either for a specific game session, or as part of a game session placement or matchmaking request. A player session can represents a reserved player slot in a game session (when status is <code>RESERVED</code>) or actual player activity in a game session (when status is <code>ACTIVE</code>). A player session object, including player data, is automatically passed to a game session when the player connects to the game session and is validated. After the game session ends, player sessions information is retained for 30 days and then removed.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p> */
	export interface PlayerSessionFormProperties {
		PlayerSessionId: FormControl<string | null | undefined>,
		PlayerId: FormControl<string | null | undefined>,
		GameSessionId: FormControl<string | null | undefined>,
		FleetId: FormControl<string | null | undefined>,
		FleetArn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		TerminationTime: FormControl<Date | null | undefined>,
		Status: FormControl<PlayerSessionStatus | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
		DnsName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		PlayerData: FormControl<string | null | undefined>,
	}
	export function CreatePlayerSessionFormGroup() {
		return new FormGroup<PlayerSessionFormProperties>({
			PlayerSessionId: new FormControl<string | null | undefined>(undefined),
			PlayerId: new FormControl<string | null | undefined>(undefined),
			GameSessionId: new FormControl<string | null | undefined>(undefined),
			FleetId: new FormControl<string | null | undefined>(undefined),
			FleetArn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			TerminationTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<PlayerSessionStatus | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
			DnsName: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			PlayerData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PlayerSessionStatus { RESERVED = 0, ACTIVE = 1, COMPLETED = 2, TIMEDOUT = 3 }

	export interface CreatePlayerSessionInput {

		/** Required */
		GameSessionId: string;

		/** Required */
		PlayerId: string;
		PlayerData?: string;
	}
	export interface CreatePlayerSessionInputFormProperties {

		/** Required */
		GameSessionId: FormControl<string | null | undefined>,

		/** Required */
		PlayerId: FormControl<string | null | undefined>,
		PlayerData: FormControl<string | null | undefined>,
	}
	export function CreateCreatePlayerSessionInputFormGroup() {
		return new FormGroup<CreatePlayerSessionInputFormProperties>({
			GameSessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PlayerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PlayerData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidGameSessionStatusException {
	}
	export interface InvalidGameSessionStatusExceptionFormProperties {
	}
	export function CreateInvalidGameSessionStatusExceptionFormGroup() {
		return new FormGroup<InvalidGameSessionStatusExceptionFormProperties>({
		});

	}

	export interface GameSessionFullException {
	}
	export interface GameSessionFullExceptionFormProperties {
	}
	export function CreateGameSessionFullExceptionFormGroup() {
		return new FormGroup<GameSessionFullExceptionFormProperties>({
		});

	}

	export interface CreatePlayerSessionsOutput {
		PlayerSessions?: Array<PlayerSession>;
	}
	export interface CreatePlayerSessionsOutputFormProperties {
	}
	export function CreateCreatePlayerSessionsOutputFormGroup() {
		return new FormGroup<CreatePlayerSessionsOutputFormProperties>({
		});

	}

	export interface CreatePlayerSessionsInput {

		/** Required */
		GameSessionId: string;

		/** Required */
		PlayerIds: Array<string>;
		PlayerDataMap?: PlayerDataMap;
	}
	export interface CreatePlayerSessionsInputFormProperties {

		/** Required */
		GameSessionId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePlayerSessionsInputFormGroup() {
		return new FormGroup<CreatePlayerSessionsInputFormProperties>({
			GameSessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PlayerDataMap {
	}
	export interface PlayerDataMapFormProperties {
	}
	export function CreatePlayerDataMapFormGroup() {
		return new FormGroup<PlayerDataMapFormProperties>({
		});

	}

	export interface CreateScriptOutput {
		Script?: Script;
	}
	export interface CreateScriptOutputFormProperties {
	}
	export function CreateCreateScriptOutputFormGroup() {
		return new FormGroup<CreateScriptOutputFormProperties>({
		});

	}


	/** <p>Properties describing a Realtime script.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p> */
	export interface Script {
		ScriptId?: string;
		ScriptArn?: string;
		Name?: string;
		Version?: string;
		SizeOnDisk?: number | null;
		CreationTime?: Date;
		StorageLocation?: S3Location;
	}

	/** <p>Properties describing a Realtime script.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p> */
	export interface ScriptFormProperties {
		ScriptId: FormControl<string | null | undefined>,
		ScriptArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
		SizeOnDisk: FormControl<number | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateScriptFormGroup() {
		return new FormGroup<ScriptFormProperties>({
			ScriptId: new FormControl<string | null | undefined>(undefined),
			ScriptArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
			SizeOnDisk: new FormControl<number | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateScriptInput {
		Name?: string;
		Version?: string;
		StorageLocation?: S3Location;
		ZipFile?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateScriptInputFormProperties {
		Name: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
		ZipFile: FormControl<string | null | undefined>,
	}
	export function CreateCreateScriptInputFormGroup() {
		return new FormGroup<CreateScriptInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
			ZipFile: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVpcPeeringAuthorizationOutput {
		VpcPeeringAuthorization?: VpcPeeringAuthorization;
	}
	export interface CreateVpcPeeringAuthorizationOutputFormProperties {
	}
	export function CreateCreateVpcPeeringAuthorizationOutputFormGroup() {
		return new FormGroup<CreateVpcPeeringAuthorizationOutputFormProperties>({
		});

	}


	/** <p>Represents an authorization for a VPC peering connection between the VPC for an Amazon GameLift fleet and another VPC on an account you have access to. This authorization must exist and be valid for the peering connection to be established. Authorizations are valid for 24 hours after they are issued.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p> */
	export interface VpcPeeringAuthorization {
		GameLiftAwsAccountId?: string;
		PeerVpcAwsAccountId?: string;
		PeerVpcId?: string;
		CreationTime?: Date;
		ExpirationTime?: Date;
	}

	/** <p>Represents an authorization for a VPC peering connection between the VPC for an Amazon GameLift fleet and another VPC on an account you have access to. This authorization must exist and be valid for the peering connection to be established. Authorizations are valid for 24 hours after they are issued.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p> */
	export interface VpcPeeringAuthorizationFormProperties {
		GameLiftAwsAccountId: FormControl<string | null | undefined>,
		PeerVpcAwsAccountId: FormControl<string | null | undefined>,
		PeerVpcId: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		ExpirationTime: FormControl<Date | null | undefined>,
	}
	export function CreateVpcPeeringAuthorizationFormGroup() {
		return new FormGroup<VpcPeeringAuthorizationFormProperties>({
			GameLiftAwsAccountId: new FormControl<string | null | undefined>(undefined),
			PeerVpcAwsAccountId: new FormControl<string | null | undefined>(undefined),
			PeerVpcId: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			ExpirationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateVpcPeeringAuthorizationInput {

		/** Required */
		GameLiftAwsAccountId: string;

		/** Required */
		PeerVpcId: string;
	}
	export interface CreateVpcPeeringAuthorizationInputFormProperties {

		/** Required */
		GameLiftAwsAccountId: FormControl<string | null | undefined>,

		/** Required */
		PeerVpcId: FormControl<string | null | undefined>,
	}
	export function CreateCreateVpcPeeringAuthorizationInputFormGroup() {
		return new FormGroup<CreateVpcPeeringAuthorizationInputFormProperties>({
			GameLiftAwsAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PeerVpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateVpcPeeringConnectionOutput {
	}
	export interface CreateVpcPeeringConnectionOutputFormProperties {
	}
	export function CreateCreateVpcPeeringConnectionOutputFormGroup() {
		return new FormGroup<CreateVpcPeeringConnectionOutputFormProperties>({
		});

	}

	export interface CreateVpcPeeringConnectionInput {

		/** Required */
		FleetId: string;

		/** Required */
		PeerVpcAwsAccountId: string;

		/** Required */
		PeerVpcId: string;
	}
	export interface CreateVpcPeeringConnectionInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,

		/** Required */
		PeerVpcAwsAccountId: FormControl<string | null | undefined>,

		/** Required */
		PeerVpcId: FormControl<string | null | undefined>,
	}
	export function CreateCreateVpcPeeringConnectionInputFormGroup() {
		return new FormGroup<CreateVpcPeeringConnectionInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PeerVpcAwsAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PeerVpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAliasInput {

		/** Required */
		AliasId: string;
	}
	export interface DeleteAliasInputFormProperties {

		/** Required */
		AliasId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAliasInputFormGroup() {
		return new FormGroup<DeleteAliasInputFormProperties>({
			AliasId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteBuildInput {

		/** Required */
		BuildId: string;
	}
	export interface DeleteBuildInputFormProperties {

		/** Required */
		BuildId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBuildInputFormGroup() {
		return new FormGroup<DeleteBuildInputFormProperties>({
			BuildId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteFleetInput {

		/** Required */
		FleetId: string;
	}
	export interface DeleteFleetInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFleetInputFormGroup() {
		return new FormGroup<DeleteFleetInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteFleetLocationsOutput {
		FleetId?: string;
		FleetArn?: string;
		LocationStates?: Array<LocationState>;
	}
	export interface DeleteFleetLocationsOutputFormProperties {
		FleetId: FormControl<string | null | undefined>,
		FleetArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFleetLocationsOutputFormGroup() {
		return new FormGroup<DeleteFleetLocationsOutputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			FleetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteFleetLocationsInput {

		/** Required */
		FleetId: string;

		/** Required */
		Locations: Array<string>;
	}
	export interface DeleteFleetLocationsInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFleetLocationsInputFormGroup() {
		return new FormGroup<DeleteFleetLocationsInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteGameServerGroupOutput {
		GameServerGroup?: GameServerGroup;
	}
	export interface DeleteGameServerGroupOutputFormProperties {
	}
	export function CreateDeleteGameServerGroupOutputFormGroup() {
		return new FormGroup<DeleteGameServerGroupOutputFormProperties>({
		});

	}

	export interface DeleteGameServerGroupInput {

		/** Required */
		GameServerGroupName: string;
		DeleteOption?: GameServerGroupDeleteOption;
	}
	export interface DeleteGameServerGroupInputFormProperties {

		/** Required */
		GameServerGroupName: FormControl<string | null | undefined>,
		DeleteOption: FormControl<GameServerGroupDeleteOption | null | undefined>,
	}
	export function CreateDeleteGameServerGroupInputFormGroup() {
		return new FormGroup<DeleteGameServerGroupInputFormProperties>({
			GameServerGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeleteOption: new FormControl<GameServerGroupDeleteOption | null | undefined>(undefined),
		});

	}

	export enum GameServerGroupDeleteOption { SAFE_DELETE = 0, FORCE_DELETE = 1, RETAIN = 2 }

	export interface DeleteGameSessionQueueOutput {
	}
	export interface DeleteGameSessionQueueOutputFormProperties {
	}
	export function CreateDeleteGameSessionQueueOutputFormGroup() {
		return new FormGroup<DeleteGameSessionQueueOutputFormProperties>({
		});

	}

	export interface DeleteGameSessionQueueInput {

		/** Required */
		Name: string;
	}
	export interface DeleteGameSessionQueueInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGameSessionQueueInputFormGroup() {
		return new FormGroup<DeleteGameSessionQueueInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLocationOutput {
	}
	export interface DeleteLocationOutputFormProperties {
	}
	export function CreateDeleteLocationOutputFormGroup() {
		return new FormGroup<DeleteLocationOutputFormProperties>({
		});

	}

	export interface DeleteLocationInput {

		/** Required */
		LocationName: string;
	}
	export interface DeleteLocationInputFormProperties {

		/** Required */
		LocationName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLocationInputFormGroup() {
		return new FormGroup<DeleteLocationInputFormProperties>({
			LocationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteMatchmakingConfigurationOutput {
	}
	export interface DeleteMatchmakingConfigurationOutputFormProperties {
	}
	export function CreateDeleteMatchmakingConfigurationOutputFormGroup() {
		return new FormGroup<DeleteMatchmakingConfigurationOutputFormProperties>({
		});

	}

	export interface DeleteMatchmakingConfigurationInput {

		/** Required */
		Name: string;
	}
	export interface DeleteMatchmakingConfigurationInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMatchmakingConfigurationInputFormGroup() {
		return new FormGroup<DeleteMatchmakingConfigurationInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteMatchmakingRuleSetOutput {
	}
	export interface DeleteMatchmakingRuleSetOutputFormProperties {
	}
	export function CreateDeleteMatchmakingRuleSetOutputFormGroup() {
		return new FormGroup<DeleteMatchmakingRuleSetOutputFormProperties>({
		});

	}

	export interface DeleteMatchmakingRuleSetInput {

		/** Required */
		Name: string;
	}
	export interface DeleteMatchmakingRuleSetInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMatchmakingRuleSetInputFormGroup() {
		return new FormGroup<DeleteMatchmakingRuleSetInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteScalingPolicyInput {

		/** Required */
		Name: string;

		/** Required */
		FleetId: string;
	}
	export interface DeleteScalingPolicyInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		FleetId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteScalingPolicyInputFormGroup() {
		return new FormGroup<DeleteScalingPolicyInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteScriptInput {

		/** Required */
		ScriptId: string;
	}
	export interface DeleteScriptInputFormProperties {

		/** Required */
		ScriptId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteScriptInputFormGroup() {
		return new FormGroup<DeleteScriptInputFormProperties>({
			ScriptId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteVpcPeeringAuthorizationOutput {
	}
	export interface DeleteVpcPeeringAuthorizationOutputFormProperties {
	}
	export function CreateDeleteVpcPeeringAuthorizationOutputFormGroup() {
		return new FormGroup<DeleteVpcPeeringAuthorizationOutputFormProperties>({
		});

	}

	export interface DeleteVpcPeeringAuthorizationInput {

		/** Required */
		GameLiftAwsAccountId: string;

		/** Required */
		PeerVpcId: string;
	}
	export interface DeleteVpcPeeringAuthorizationInputFormProperties {

		/** Required */
		GameLiftAwsAccountId: FormControl<string | null | undefined>,

		/** Required */
		PeerVpcId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVpcPeeringAuthorizationInputFormGroup() {
		return new FormGroup<DeleteVpcPeeringAuthorizationInputFormProperties>({
			GameLiftAwsAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PeerVpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteVpcPeeringConnectionOutput {
	}
	export interface DeleteVpcPeeringConnectionOutputFormProperties {
	}
	export function CreateDeleteVpcPeeringConnectionOutputFormGroup() {
		return new FormGroup<DeleteVpcPeeringConnectionOutputFormProperties>({
		});

	}

	export interface DeleteVpcPeeringConnectionInput {

		/** Required */
		FleetId: string;

		/** Required */
		VpcPeeringConnectionId: string;
	}
	export interface DeleteVpcPeeringConnectionInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,

		/** Required */
		VpcPeeringConnectionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVpcPeeringConnectionInputFormGroup() {
		return new FormGroup<DeleteVpcPeeringConnectionInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VpcPeeringConnectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeregisterComputeOutput {
	}
	export interface DeregisterComputeOutputFormProperties {
	}
	export function CreateDeregisterComputeOutputFormGroup() {
		return new FormGroup<DeregisterComputeOutputFormProperties>({
		});

	}

	export interface DeregisterComputeInput {

		/** Required */
		FleetId: string;

		/** Required */
		ComputeName: string;
	}
	export interface DeregisterComputeInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,

		/** Required */
		ComputeName: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterComputeInputFormGroup() {
		return new FormGroup<DeregisterComputeInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComputeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeregisterGameServerInput {

		/** Required */
		GameServerGroupName: string;

		/** Required */
		GameServerId: string;
	}
	export interface DeregisterGameServerInputFormProperties {

		/** Required */
		GameServerGroupName: FormControl<string | null | undefined>,

		/** Required */
		GameServerId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterGameServerInputFormGroup() {
		return new FormGroup<DeregisterGameServerInputFormProperties>({
			GameServerGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GameServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAliasOutput {
		Alias?: Alias;
	}
	export interface DescribeAliasOutputFormProperties {
	}
	export function CreateDescribeAliasOutputFormGroup() {
		return new FormGroup<DescribeAliasOutputFormProperties>({
		});

	}

	export interface DescribeAliasInput {

		/** Required */
		AliasId: string;
	}
	export interface DescribeAliasInputFormProperties {

		/** Required */
		AliasId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAliasInputFormGroup() {
		return new FormGroup<DescribeAliasInputFormProperties>({
			AliasId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeBuildOutput {
		Build?: Build;
	}
	export interface DescribeBuildOutputFormProperties {
	}
	export function CreateDescribeBuildOutputFormGroup() {
		return new FormGroup<DescribeBuildOutputFormProperties>({
		});

	}

	export interface DescribeBuildInput {

		/** Required */
		BuildId: string;
	}
	export interface DescribeBuildInputFormProperties {

		/** Required */
		BuildId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBuildInputFormGroup() {
		return new FormGroup<DescribeBuildInputFormProperties>({
			BuildId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeComputeOutput {
		Compute?: Compute;
	}
	export interface DescribeComputeOutputFormProperties {
	}
	export function CreateDescribeComputeOutputFormGroup() {
		return new FormGroup<DescribeComputeOutputFormProperties>({
		});

	}


	/** Resources used to host your game servers. A compute resource can be managed Amazon GameLift Amazon EC2 instances or your own resources. */
	export interface Compute {
		FleetId?: string;
		FleetArn?: string;
		ComputeName?: string;
		ComputeArn?: string;
		IpAddress?: string;
		DnsName?: string;
		ComputeStatus?: ComputeStatus;
		Location?: string;
		CreationTime?: Date;
		OperatingSystem?: OperatingSystem;
		Type?: EC2InstanceType;
		GameLiftServiceSdkEndpoint?: string;
	}

	/** Resources used to host your game servers. A compute resource can be managed Amazon GameLift Amazon EC2 instances or your own resources. */
	export interface ComputeFormProperties {
		FleetId: FormControl<string | null | undefined>,
		FleetArn: FormControl<string | null | undefined>,
		ComputeName: FormControl<string | null | undefined>,
		ComputeArn: FormControl<string | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
		DnsName: FormControl<string | null | undefined>,
		ComputeStatus: FormControl<ComputeStatus | null | undefined>,
		Location: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		OperatingSystem: FormControl<OperatingSystem | null | undefined>,
		Type: FormControl<EC2InstanceType | null | undefined>,
		GameLiftServiceSdkEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateComputeFormGroup() {
		return new FormGroup<ComputeFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			FleetArn: new FormControl<string | null | undefined>(undefined),
			ComputeName: new FormControl<string | null | undefined>(undefined),
			ComputeArn: new FormControl<string | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
			DnsName: new FormControl<string | null | undefined>(undefined),
			ComputeStatus: new FormControl<ComputeStatus | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			OperatingSystem: new FormControl<OperatingSystem | null | undefined>(undefined),
			Type: new FormControl<EC2InstanceType | null | undefined>(undefined),
			GameLiftServiceSdkEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ComputeStatus { PENDING = 0, ACTIVE = 1, TERMINATING = 2 }

	export interface DescribeComputeInput {

		/** Required */
		FleetId: string;

		/** Required */
		ComputeName: string;
	}
	export interface DescribeComputeInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,

		/** Required */
		ComputeName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeComputeInputFormGroup() {
		return new FormGroup<DescribeComputeInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComputeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeEC2InstanceLimitsOutput {
		EC2InstanceLimits?: Array<EC2InstanceLimit>;
	}
	export interface DescribeEC2InstanceLimitsOutputFormProperties {
	}
	export function CreateDescribeEC2InstanceLimitsOutputFormGroup() {
		return new FormGroup<DescribeEC2InstanceLimitsOutputFormProperties>({
		});

	}


	/** The Amazon GameLift service limits for an Amazon EC2 instance type and current utilization. Amazon GameLift allows Amazon Web Services accounts a maximum number of instances, per instance type, per Amazon Web Services Region or location, for use with Amazon GameLift. You can request an limit increase for your account by using the <b>Service limits</b> page in the Amazon GameLift console. */
	export interface EC2InstanceLimit {
		EC2InstanceType?: EC2InstanceType;
		CurrentInstances?: number | null;
		InstanceLimit?: number | null;
		Location?: string;
	}

	/** The Amazon GameLift service limits for an Amazon EC2 instance type and current utilization. Amazon GameLift allows Amazon Web Services accounts a maximum number of instances, per instance type, per Amazon Web Services Region or location, for use with Amazon GameLift. You can request an limit increase for your account by using the <b>Service limits</b> page in the Amazon GameLift console. */
	export interface EC2InstanceLimitFormProperties {
		EC2InstanceType: FormControl<EC2InstanceType | null | undefined>,
		CurrentInstances: FormControl<number | null | undefined>,
		InstanceLimit: FormControl<number | null | undefined>,
		Location: FormControl<string | null | undefined>,
	}
	export function CreateEC2InstanceLimitFormGroup() {
		return new FormGroup<EC2InstanceLimitFormProperties>({
			EC2InstanceType: new FormControl<EC2InstanceType | null | undefined>(undefined),
			CurrentInstances: new FormControl<number | null | undefined>(undefined),
			InstanceLimit: new FormControl<number | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEC2InstanceLimitsInput {
		EC2InstanceType?: EC2InstanceType;
		Location?: string;
	}
	export interface DescribeEC2InstanceLimitsInputFormProperties {
		EC2InstanceType: FormControl<EC2InstanceType | null | undefined>,
		Location: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEC2InstanceLimitsInputFormGroup() {
		return new FormGroup<DescribeEC2InstanceLimitsInputFormProperties>({
			EC2InstanceType: new FormControl<EC2InstanceType | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetAttributesOutput {
		FleetAttributes?: Array<FleetAttributes>;
		NextToken?: string;
	}
	export interface DescribeFleetAttributesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetAttributesOutputFormGroup() {
		return new FormGroup<DescribeFleetAttributesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetAttributesInput {
		FleetIds?: Array<string>;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeFleetAttributesInputFormProperties {
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetAttributesInputFormGroup() {
		return new FormGroup<DescribeFleetAttributesInputFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetCapacityOutput {
		FleetCapacity?: Array<FleetCapacity>;
		NextToken?: string;
	}
	export interface DescribeFleetCapacityOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetCapacityOutputFormGroup() {
		return new FormGroup<DescribeFleetCapacityOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Current resource capacity settings in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html">DescribeFleetCapacity</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html">DescribeFleetLocationCapacity</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html">UpdateFleetCapacity</a> </p> */
	export interface FleetCapacity {
		FleetId?: string;
		FleetArn?: string;
		InstanceType?: EC2InstanceType;

		/** Resource capacity settings. Fleet capacity is measured in Amazon EC2 instances. Pending and terminating counts are non-zero when the fleet capacity is adjusting to a scaling event or if access to resources is temporarily affected. */
		InstanceCounts?: EC2InstanceCounts;
		Location?: string;
	}

	/** <p>Current resource capacity settings in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html">DescribeFleetCapacity</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html">DescribeFleetLocationCapacity</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html">UpdateFleetCapacity</a> </p> */
	export interface FleetCapacityFormProperties {
		FleetId: FormControl<string | null | undefined>,
		FleetArn: FormControl<string | null | undefined>,
		InstanceType: FormControl<EC2InstanceType | null | undefined>,
		Location: FormControl<string | null | undefined>,
	}
	export function CreateFleetCapacityFormGroup() {
		return new FormGroup<FleetCapacityFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			FleetArn: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<EC2InstanceType | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource capacity settings. Fleet capacity is measured in Amazon EC2 instances. Pending and terminating counts are non-zero when the fleet capacity is adjusting to a scaling event or if access to resources is temporarily affected. */
	export interface EC2InstanceCounts {
		DESIRED?: number | null;
		MINIMUM?: number | null;
		MAXIMUM?: number | null;
		PENDING?: number | null;
		ACTIVE?: number | null;
		IDLE?: number | null;
		TERMINATING?: number | null;
	}

	/** Resource capacity settings. Fleet capacity is measured in Amazon EC2 instances. Pending and terminating counts are non-zero when the fleet capacity is adjusting to a scaling event or if access to resources is temporarily affected. */
	export interface EC2InstanceCountsFormProperties {
		DESIRED: FormControl<number | null | undefined>,
		MINIMUM: FormControl<number | null | undefined>,
		MAXIMUM: FormControl<number | null | undefined>,
		PENDING: FormControl<number | null | undefined>,
		ACTIVE: FormControl<number | null | undefined>,
		IDLE: FormControl<number | null | undefined>,
		TERMINATING: FormControl<number | null | undefined>,
	}
	export function CreateEC2InstanceCountsFormGroup() {
		return new FormGroup<EC2InstanceCountsFormProperties>({
			DESIRED: new FormControl<number | null | undefined>(undefined),
			MINIMUM: new FormControl<number | null | undefined>(undefined),
			MAXIMUM: new FormControl<number | null | undefined>(undefined),
			PENDING: new FormControl<number | null | undefined>(undefined),
			ACTIVE: new FormControl<number | null | undefined>(undefined),
			IDLE: new FormControl<number | null | undefined>(undefined),
			TERMINATING: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetCapacityInput {
		FleetIds?: Array<string>;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeFleetCapacityInputFormProperties {
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetCapacityInputFormGroup() {
		return new FormGroup<DescribeFleetCapacityInputFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetEventsOutput {
		Events?: Array<Event>;
		NextToken?: string;
	}
	export interface DescribeFleetEventsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetEventsOutputFormGroup() {
		return new FormGroup<DescribeFleetEventsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Log entry describing an event that involves Amazon GameLift resources (such as a fleet). In addition to tracking activity, event codes and messages can provide additional information for troubleshooting and debugging problems. */
	export interface Event {
		EventId?: string;
		ResourceId?: string;
		EventCode?: EventCode;
		Message?: string;
		EventTime?: Date;
		PreSignedLogUrl?: string;
	}

	/** Log entry describing an event that involves Amazon GameLift resources (such as a fleet). In addition to tracking activity, event codes and messages can provide additional information for troubleshooting and debugging problems. */
	export interface EventFormProperties {
		EventId: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		EventCode: FormControl<EventCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
		EventTime: FormControl<Date | null | undefined>,
		PreSignedLogUrl: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			EventId: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			EventCode: new FormControl<EventCode | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			EventTime: new FormControl<Date | null | undefined>(undefined),
			PreSignedLogUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventCode { GENERIC_EVENT = 0, FLEET_CREATED = 1, FLEET_DELETED = 2, FLEET_SCALING_EVENT = 3, FLEET_STATE_DOWNLOADING = 4, FLEET_STATE_VALIDATING = 5, FLEET_STATE_BUILDING = 6, FLEET_STATE_ACTIVATING = 7, FLEET_STATE_ACTIVE = 8, FLEET_STATE_ERROR = 9, FLEET_INITIALIZATION_FAILED = 10, FLEET_BINARY_DOWNLOAD_FAILED = 11, FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND = 12, FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE = 13, FLEET_VALIDATION_TIMED_OUT = 14, FLEET_ACTIVATION_FAILED = 15, FLEET_ACTIVATION_FAILED_NO_INSTANCES = 16, FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED = 17, SERVER_PROCESS_INVALID_PATH = 18, SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT = 19, SERVER_PROCESS_PROCESS_READY_TIMEOUT = 20, SERVER_PROCESS_CRASHED = 21, SERVER_PROCESS_TERMINATED_UNHEALTHY = 22, SERVER_PROCESS_FORCE_TERMINATED = 23, SERVER_PROCESS_PROCESS_EXIT_TIMEOUT = 24, GAME_SESSION_ACTIVATION_TIMEOUT = 25, FLEET_CREATION_EXTRACTING_BUILD = 26, FLEET_CREATION_RUNNING_INSTALLER = 27, FLEET_CREATION_VALIDATING_RUNTIME_CONFIG = 28, FLEET_VPC_PEERING_SUCCEEDED = 29, FLEET_VPC_PEERING_FAILED = 30, FLEET_VPC_PEERING_DELETED = 31, INSTANCE_INTERRUPTED = 32, INSTANCE_RECYCLED = 33 }

	export interface DescribeFleetEventsInput {

		/** Required */
		FleetId: string;
		StartTime?: Date;
		EndTime?: Date;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeFleetEventsInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetEventsInputFormGroup() {
		return new FormGroup<DescribeFleetEventsInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetLocationAttributesOutput {
		FleetId?: string;
		FleetArn?: string;
		LocationAttributes?: Array<LocationAttributes>;
		NextToken?: string;
	}
	export interface DescribeFleetLocationAttributesOutputFormProperties {
		FleetId: FormControl<string | null | undefined>,
		FleetArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetLocationAttributesOutputFormGroup() {
		return new FormGroup<DescribeFleetLocationAttributesOutputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			FleetArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a location in a multi-location fleet. */
	export interface LocationAttributes {
		LocationState?: LocationState;
		StoppedActions?: Array<FleetAction>;
		UpdateStatus?: LocationUpdateStatus;
	}

	/** Details about a location in a multi-location fleet. */
	export interface LocationAttributesFormProperties {
		UpdateStatus: FormControl<LocationUpdateStatus | null | undefined>,
	}
	export function CreateLocationAttributesFormGroup() {
		return new FormGroup<LocationAttributesFormProperties>({
			UpdateStatus: new FormControl<LocationUpdateStatus | null | undefined>(undefined),
		});

	}

	export enum LocationUpdateStatus { PENDING_UPDATE = 0 }

	export interface DescribeFleetLocationAttributesInput {

		/** Required */
		FleetId: string;
		Locations?: Array<string>;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeFleetLocationAttributesInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetLocationAttributesInputFormGroup() {
		return new FormGroup<DescribeFleetLocationAttributesInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetLocationCapacityOutput {
		FleetCapacity?: FleetCapacity;
	}
	export interface DescribeFleetLocationCapacityOutputFormProperties {
	}
	export function CreateDescribeFleetLocationCapacityOutputFormGroup() {
		return new FormGroup<DescribeFleetLocationCapacityOutputFormProperties>({
		});

	}

	export interface DescribeFleetLocationCapacityInput {

		/** Required */
		FleetId: string;

		/** Required */
		Location: string;
	}
	export interface DescribeFleetLocationCapacityInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,

		/** Required */
		Location: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetLocationCapacityInputFormGroup() {
		return new FormGroup<DescribeFleetLocationCapacityInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeFleetLocationUtilizationOutput {
		FleetUtilization?: FleetUtilization;
	}
	export interface DescribeFleetLocationUtilizationOutputFormProperties {
	}
	export function CreateDescribeFleetLocationUtilizationOutputFormGroup() {
		return new FormGroup<DescribeFleetLocationUtilizationOutputFormProperties>({
		});

	}


	/** <p>Current resource utilization statistics in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region.</p> <p> <b>Related actions</b> </p> */
	export interface FleetUtilization {
		FleetId?: string;
		FleetArn?: string;
		ActiveServerProcessCount?: number | null;
		ActiveGameSessionCount?: number | null;
		CurrentPlayerSessionCount?: number | null;
		MaximumPlayerSessionCount?: number | null;
		Location?: string;
	}

	/** <p>Current resource utilization statistics in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region.</p> <p> <b>Related actions</b> </p> */
	export interface FleetUtilizationFormProperties {
		FleetId: FormControl<string | null | undefined>,
		FleetArn: FormControl<string | null | undefined>,
		ActiveServerProcessCount: FormControl<number | null | undefined>,
		ActiveGameSessionCount: FormControl<number | null | undefined>,
		CurrentPlayerSessionCount: FormControl<number | null | undefined>,
		MaximumPlayerSessionCount: FormControl<number | null | undefined>,
		Location: FormControl<string | null | undefined>,
	}
	export function CreateFleetUtilizationFormGroup() {
		return new FormGroup<FleetUtilizationFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			FleetArn: new FormControl<string | null | undefined>(undefined),
			ActiveServerProcessCount: new FormControl<number | null | undefined>(undefined),
			ActiveGameSessionCount: new FormControl<number | null | undefined>(undefined),
			CurrentPlayerSessionCount: new FormControl<number | null | undefined>(undefined),
			MaximumPlayerSessionCount: new FormControl<number | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetLocationUtilizationInput {

		/** Required */
		FleetId: string;

		/** Required */
		Location: string;
	}
	export interface DescribeFleetLocationUtilizationInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,

		/** Required */
		Location: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetLocationUtilizationInputFormGroup() {
		return new FormGroup<DescribeFleetLocationUtilizationInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeFleetPortSettingsOutput {
		FleetId?: string;
		FleetArn?: string;
		InboundPermissions?: Array<IpPermission>;
		UpdateStatus?: LocationUpdateStatus;
		Location?: string;
	}
	export interface DescribeFleetPortSettingsOutputFormProperties {
		FleetId: FormControl<string | null | undefined>,
		FleetArn: FormControl<string | null | undefined>,
		UpdateStatus: FormControl<LocationUpdateStatus | null | undefined>,
		Location: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetPortSettingsOutputFormGroup() {
		return new FormGroup<DescribeFleetPortSettingsOutputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			FleetArn: new FormControl<string | null | undefined>(undefined),
			UpdateStatus: new FormControl<LocationUpdateStatus | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetPortSettingsInput {

		/** Required */
		FleetId: string;
		Location?: string;
	}
	export interface DescribeFleetPortSettingsInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetPortSettingsInputFormGroup() {
		return new FormGroup<DescribeFleetPortSettingsInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetUtilizationOutput {
		FleetUtilization?: Array<FleetUtilization>;
		NextToken?: string;
	}
	export interface DescribeFleetUtilizationOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetUtilizationOutputFormGroup() {
		return new FormGroup<DescribeFleetUtilizationOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeFleetUtilizationInput {
		FleetIds?: Array<string>;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeFleetUtilizationInputFormProperties {
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetUtilizationInputFormGroup() {
		return new FormGroup<DescribeFleetUtilizationInputFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeGameServerOutput {
		GameServer?: GameServer;
	}
	export interface DescribeGameServerOutputFormProperties {
	}
	export function CreateDescribeGameServerOutputFormGroup() {
		return new FormGroup<DescribeGameServerOutputFormProperties>({
		});

	}

	export interface DescribeGameServerInput {

		/** Required */
		GameServerGroupName: string;

		/** Required */
		GameServerId: string;
	}
	export interface DescribeGameServerInputFormProperties {

		/** Required */
		GameServerGroupName: FormControl<string | null | undefined>,

		/** Required */
		GameServerId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGameServerInputFormGroup() {
		return new FormGroup<DescribeGameServerInputFormProperties>({
			GameServerGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GameServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeGameServerGroupOutput {
		GameServerGroup?: GameServerGroup;
	}
	export interface DescribeGameServerGroupOutputFormProperties {
	}
	export function CreateDescribeGameServerGroupOutputFormGroup() {
		return new FormGroup<DescribeGameServerGroupOutputFormProperties>({
		});

	}

	export interface DescribeGameServerGroupInput {

		/** Required */
		GameServerGroupName: string;
	}
	export interface DescribeGameServerGroupInputFormProperties {

		/** Required */
		GameServerGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGameServerGroupInputFormGroup() {
		return new FormGroup<DescribeGameServerGroupInputFormProperties>({
			GameServerGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeGameServerInstancesOutput {
		GameServerInstances?: Array<GameServerInstance>;
		NextToken?: string;
	}
	export interface DescribeGameServerInstancesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGameServerInstancesOutputFormGroup() {
		return new FormGroup<DescribeGameServerInstancesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p> Additional properties, including status, that describe an EC2 instance in a game server group. Instance configurations are set with game server group properties (see <code>DescribeGameServerGroup</code> and with the EC2 launch template that was used when creating the game server group. </p> <p>Retrieve game server instances for a game server group by calling <code>DescribeGameServerInstances</code>. </p> */
	export interface GameServerInstance {
		GameServerGroupName?: string;
		GameServerGroupArn?: string;
		InstanceId?: string;
		InstanceStatus?: GameServerInstanceStatus;
	}

	/** <p> <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b> </p> <p> Additional properties, including status, that describe an EC2 instance in a game server group. Instance configurations are set with game server group properties (see <code>DescribeGameServerGroup</code> and with the EC2 launch template that was used when creating the game server group. </p> <p>Retrieve game server instances for a game server group by calling <code>DescribeGameServerInstances</code>. </p> */
	export interface GameServerInstanceFormProperties {
		GameServerGroupName: FormControl<string | null | undefined>,
		GameServerGroupArn: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		InstanceStatus: FormControl<GameServerInstanceStatus | null | undefined>,
	}
	export function CreateGameServerInstanceFormGroup() {
		return new FormGroup<GameServerInstanceFormProperties>({
			GameServerGroupName: new FormControl<string | null | undefined>(undefined),
			GameServerGroupArn: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			InstanceStatus: new FormControl<GameServerInstanceStatus | null | undefined>(undefined),
		});

	}

	export enum GameServerInstanceStatus { ACTIVE = 0, DRAINING = 1, SPOT_TERMINATING = 2 }

	export interface DescribeGameServerInstancesInput {

		/** Required */
		GameServerGroupName: string;
		InstanceIds?: Array<string>;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeGameServerInstancesInputFormProperties {

		/** Required */
		GameServerGroupName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGameServerInstancesInputFormGroup() {
		return new FormGroup<DescribeGameServerInstancesInputFormProperties>({
			GameServerGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeGameSessionDetailsOutput {
		GameSessionDetails?: Array<GameSessionDetail>;
		NextToken?: string;
	}
	export interface DescribeGameSessionDetailsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGameSessionDetailsOutputFormGroup() {
		return new FormGroup<DescribeGameSessionDetailsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A game session's properties plus the protection policy currently in force. */
	export interface GameSessionDetail {
		GameSession?: GameSession;
		ProtectionPolicy?: ProtectionPolicy;
	}

	/** A game session's properties plus the protection policy currently in force. */
	export interface GameSessionDetailFormProperties {
		ProtectionPolicy: FormControl<ProtectionPolicy | null | undefined>,
	}
	export function CreateGameSessionDetailFormGroup() {
		return new FormGroup<GameSessionDetailFormProperties>({
			ProtectionPolicy: new FormControl<ProtectionPolicy | null | undefined>(undefined),
		});

	}

	export interface DescribeGameSessionDetailsInput {
		FleetId?: string;
		GameSessionId?: string;
		AliasId?: string;
		Location?: string;
		StatusFilter?: string;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeGameSessionDetailsInputFormProperties {
		FleetId: FormControl<string | null | undefined>,
		GameSessionId: FormControl<string | null | undefined>,
		AliasId: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
		StatusFilter: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGameSessionDetailsInputFormGroup() {
		return new FormGroup<DescribeGameSessionDetailsInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			GameSessionId: new FormControl<string | null | undefined>(undefined),
			AliasId: new FormControl<string | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
			StatusFilter: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeGameSessionPlacementOutput {
		GameSessionPlacement?: GameSessionPlacement;
	}
	export interface DescribeGameSessionPlacementOutputFormProperties {
	}
	export function CreateDescribeGameSessionPlacementOutputFormGroup() {
		return new FormGroup<DescribeGameSessionPlacementOutputFormProperties>({
		});

	}


	/** This object includes the full details of the original request plus the current status and start/end time stamps. */
	export interface GameSessionPlacement {
		PlacementId?: string;
		GameSessionQueueName?: string;
		Status?: GameSessionPlacementState;
		GameProperties?: Array<GameProperty>;
		MaximumPlayerSessionCount?: number | null;
		GameSessionName?: string;
		GameSessionId?: string;
		GameSessionArn?: string;
		GameSessionRegion?: string;
		PlayerLatencies?: Array<PlayerLatency>;
		StartTime?: Date;
		EndTime?: Date;
		IpAddress?: string;
		DnsName?: string;
		Port?: number | null;
		PlacedPlayerSessions?: Array<PlacedPlayerSession>;
		GameSessionData?: string;
		MatchmakerData?: string;
	}

	/** This object includes the full details of the original request plus the current status and start/end time stamps. */
	export interface GameSessionPlacementFormProperties {
		PlacementId: FormControl<string | null | undefined>,
		GameSessionQueueName: FormControl<string | null | undefined>,
		Status: FormControl<GameSessionPlacementState | null | undefined>,
		MaximumPlayerSessionCount: FormControl<number | null | undefined>,
		GameSessionName: FormControl<string | null | undefined>,
		GameSessionId: FormControl<string | null | undefined>,
		GameSessionArn: FormControl<string | null | undefined>,
		GameSessionRegion: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
		DnsName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		GameSessionData: FormControl<string | null | undefined>,
		MatchmakerData: FormControl<string | null | undefined>,
	}
	export function CreateGameSessionPlacementFormGroup() {
		return new FormGroup<GameSessionPlacementFormProperties>({
			PlacementId: new FormControl<string | null | undefined>(undefined),
			GameSessionQueueName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<GameSessionPlacementState | null | undefined>(undefined),
			MaximumPlayerSessionCount: new FormControl<number | null | undefined>(undefined),
			GameSessionName: new FormControl<string | null | undefined>(undefined),
			GameSessionId: new FormControl<string | null | undefined>(undefined),
			GameSessionArn: new FormControl<string | null | undefined>(undefined),
			GameSessionRegion: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
			DnsName: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			GameSessionData: new FormControl<string | null | undefined>(undefined),
			MatchmakerData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GameSessionPlacementState { PENDING = 0, FULFILLED = 1, CANCELLED = 2, TIMED_OUT = 3, FAILED = 4 }


	/** Regional latency information for a player, used when requesting a new game session. This value indicates the amount of time lag that exists when the player is connected to a fleet in the specified Region. The relative difference between a player's latency values for multiple Regions are used to determine which fleets are best suited to place a new game session for the player.  */
	export interface PlayerLatency {
		PlayerId?: string;
		RegionIdentifier?: string;
		LatencyInMilliseconds?: number;
	}

	/** Regional latency information for a player, used when requesting a new game session. This value indicates the amount of time lag that exists when the player is connected to a fleet in the specified Region. The relative difference between a player's latency values for multiple Regions are used to determine which fleets are best suited to place a new game session for the player.  */
	export interface PlayerLatencyFormProperties {
		PlayerId: FormControl<string | null | undefined>,
		RegionIdentifier: FormControl<string | null | undefined>,
		LatencyInMilliseconds: FormControl<number | null | undefined>,
	}
	export function CreatePlayerLatencyFormGroup() {
		return new FormGroup<PlayerLatencyFormProperties>({
			PlayerId: new FormControl<string | null | undefined>(undefined),
			RegionIdentifier: new FormControl<string | null | undefined>(undefined),
			LatencyInMilliseconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a player session. This object contains only the player ID and player session ID. To retrieve full details on a player session, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribePlayerSessions.html">DescribePlayerSessions</a> with the player session ID. */
	export interface PlacedPlayerSession {
		PlayerId?: string;
		PlayerSessionId?: string;
	}

	/** Information about a player session. This object contains only the player ID and player session ID. To retrieve full details on a player session, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribePlayerSessions.html">DescribePlayerSessions</a> with the player session ID. */
	export interface PlacedPlayerSessionFormProperties {
		PlayerId: FormControl<string | null | undefined>,
		PlayerSessionId: FormControl<string | null | undefined>,
	}
	export function CreatePlacedPlayerSessionFormGroup() {
		return new FormGroup<PlacedPlayerSessionFormProperties>({
			PlayerId: new FormControl<string | null | undefined>(undefined),
			PlayerSessionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeGameSessionPlacementInput {

		/** Required */
		PlacementId: string;
	}
	export interface DescribeGameSessionPlacementInputFormProperties {

		/** Required */
		PlacementId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGameSessionPlacementInputFormGroup() {
		return new FormGroup<DescribeGameSessionPlacementInputFormProperties>({
			PlacementId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeGameSessionQueuesOutput {
		GameSessionQueues?: Array<GameSessionQueue>;
		NextToken?: string;
	}
	export interface DescribeGameSessionQueuesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGameSessionQueuesOutputFormGroup() {
		return new FormGroup<DescribeGameSessionQueuesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeGameSessionQueuesInput {
		Names?: Array<string>;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeGameSessionQueuesInputFormProperties {
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGameSessionQueuesInputFormGroup() {
		return new FormGroup<DescribeGameSessionQueuesInputFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeGameSessionsOutput {
		GameSessions?: Array<GameSession>;
		NextToken?: string;
	}
	export interface DescribeGameSessionsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGameSessionsOutputFormGroup() {
		return new FormGroup<DescribeGameSessionsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeGameSessionsInput {
		FleetId?: string;
		GameSessionId?: string;
		AliasId?: string;
		Location?: string;
		StatusFilter?: string;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeGameSessionsInputFormProperties {
		FleetId: FormControl<string | null | undefined>,
		GameSessionId: FormControl<string | null | undefined>,
		AliasId: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
		StatusFilter: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGameSessionsInputFormGroup() {
		return new FormGroup<DescribeGameSessionsInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			GameSessionId: new FormControl<string | null | undefined>(undefined),
			AliasId: new FormControl<string | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
			StatusFilter: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeInstancesOutput {
		Instances?: Array<Instance>;
		NextToken?: string;
	}
	export interface DescribeInstancesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstancesOutputFormGroup() {
		return new FormGroup<DescribeInstancesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Represents an EC2 instance of virtual computing resources that hosts one or more game servers. In Amazon GameLift, a fleet can contain zero or more instances.</p> <p> <b>Related actions</b> </p> */
	export interface Instance {
		FleetId?: string;
		FleetArn?: string;
		InstanceId?: string;
		IpAddress?: string;
		DnsName?: string;
		OperatingSystem?: OperatingSystem;
		Type?: EC2InstanceType;
		Status?: ComputeStatus;
		CreationTime?: Date;
		Location?: string;
	}

	/** <p>Represents an EC2 instance of virtual computing resources that hosts one or more game servers. In Amazon GameLift, a fleet can contain zero or more instances.</p> <p> <b>Related actions</b> </p> */
	export interface InstanceFormProperties {
		FleetId: FormControl<string | null | undefined>,
		FleetArn: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
		DnsName: FormControl<string | null | undefined>,
		OperatingSystem: FormControl<OperatingSystem | null | undefined>,
		Type: FormControl<EC2InstanceType | null | undefined>,
		Status: FormControl<ComputeStatus | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		Location: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			FleetArn: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
			DnsName: new FormControl<string | null | undefined>(undefined),
			OperatingSystem: new FormControl<OperatingSystem | null | undefined>(undefined),
			Type: new FormControl<EC2InstanceType | null | undefined>(undefined),
			Status: new FormControl<ComputeStatus | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeInstancesInput {

		/** Required */
		FleetId: string;
		InstanceId?: string;
		Limit?: number | null;
		NextToken?: string;
		Location?: string;
	}
	export interface DescribeInstancesInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstancesInputFormGroup() {
		return new FormGroup<DescribeInstancesInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMatchmakingOutput {
		TicketList?: Array<MatchmakingTicket>;
	}
	export interface DescribeMatchmakingOutputFormProperties {
	}
	export function CreateDescribeMatchmakingOutputFormGroup() {
		return new FormGroup<DescribeMatchmakingOutputFormProperties>({
		});

	}


	/** Ticket generated to track the progress of a matchmaking request. Each ticket is uniquely identified by a ticket ID, supplied by the requester, when creating a matchmaking request. */
	export interface MatchmakingTicket {
		TicketId?: string;
		ConfigurationName?: string;
		ConfigurationArn?: string;
		Status?: MatchmakingConfigurationStatus;
		StatusReason?: string;
		StatusMessage?: string;
		StartTime?: Date;
		EndTime?: Date;
		Players?: Array<Player>;
		GameSessionConnectionInfo?: GameSessionConnectionInfo;
		EstimatedWaitTime?: number | null;
	}

	/** Ticket generated to track the progress of a matchmaking request. Each ticket is uniquely identified by a ticket ID, supplied by the requester, when creating a matchmaking request. */
	export interface MatchmakingTicketFormProperties {
		TicketId: FormControl<string | null | undefined>,
		ConfigurationName: FormControl<string | null | undefined>,
		ConfigurationArn: FormControl<string | null | undefined>,
		Status: FormControl<MatchmakingConfigurationStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		EstimatedWaitTime: FormControl<number | null | undefined>,
	}
	export function CreateMatchmakingTicketFormGroup() {
		return new FormGroup<MatchmakingTicketFormProperties>({
			TicketId: new FormControl<string | null | undefined>(undefined),
			ConfigurationName: new FormControl<string | null | undefined>(undefined),
			ConfigurationArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<MatchmakingConfigurationStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			EstimatedWaitTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum MatchmakingConfigurationStatus { CANCELLED = 0, COMPLETED = 1, FAILED = 2, PLACING = 3, QUEUED = 4, REQUIRES_ACCEPTANCE = 5, SEARCHING = 6, TIMED_OUT = 7 }


	/** Represents a player in matchmaking. When starting a matchmaking request, a player has a player ID, attributes, and may have latency data. Team information is added after a match has been successfully completed. */
	export interface Player {
		PlayerId?: string;
		PlayerAttributes?: PlayerAttributeMap;
		Team?: string;
		LatencyInMs?: LatencyMap;
	}

	/** Represents a player in matchmaking. When starting a matchmaking request, a player has a player ID, attributes, and may have latency data. Team information is added after a match has been successfully completed. */
	export interface PlayerFormProperties {
		PlayerId: FormControl<string | null | undefined>,
		Team: FormControl<string | null | undefined>,
	}
	export function CreatePlayerFormGroup() {
		return new FormGroup<PlayerFormProperties>({
			PlayerId: new FormControl<string | null | undefined>(undefined),
			Team: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlayerAttributeMap {
	}
	export interface PlayerAttributeMapFormProperties {
	}
	export function CreatePlayerAttributeMapFormGroup() {
		return new FormGroup<PlayerAttributeMapFormProperties>({
		});

	}

	export interface LatencyMap {
	}
	export interface LatencyMapFormProperties {
	}
	export function CreateLatencyMapFormGroup() {
		return new FormGroup<LatencyMapFormProperties>({
		});

	}


	/** Connection information for a new game session that is created in response to a start matchmaking request. Once a match is made, the FlexMatch engine creates a new game session for it. This information, including the game session endpoint and player sessions for each player in the original matchmaking request, is added to the matchmaking ticket. */
	export interface GameSessionConnectionInfo {
		GameSessionArn?: string;
		IpAddress?: string;
		DnsName?: string;
		Port?: number | null;
		MatchedPlayerSessions?: Array<MatchedPlayerSession>;
	}

	/** Connection information for a new game session that is created in response to a start matchmaking request. Once a match is made, the FlexMatch engine creates a new game session for it. This information, including the game session endpoint and player sessions for each player in the original matchmaking request, is added to the matchmaking ticket. */
	export interface GameSessionConnectionInfoFormProperties {
		GameSessionArn: FormControl<string | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
		DnsName: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
	}
	export function CreateGameSessionConnectionInfoFormGroup() {
		return new FormGroup<GameSessionConnectionInfoFormProperties>({
			GameSessionArn: new FormControl<string | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
			DnsName: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Represents a new player session that is created as a result of a successful FlexMatch match. A successful match automatically creates new player sessions for every player ID in the original matchmaking request. </p> <p>When players connect to the match's game session, they must include both player ID and player session ID in order to claim their assigned player slot.</p> */
	export interface MatchedPlayerSession {
		PlayerId?: string;
		PlayerSessionId?: string;
	}

	/** <p>Represents a new player session that is created as a result of a successful FlexMatch match. A successful match automatically creates new player sessions for every player ID in the original matchmaking request. </p> <p>When players connect to the match's game session, they must include both player ID and player session ID in order to claim their assigned player slot.</p> */
	export interface MatchedPlayerSessionFormProperties {
		PlayerId: FormControl<string | null | undefined>,
		PlayerSessionId: FormControl<string | null | undefined>,
	}
	export function CreateMatchedPlayerSessionFormGroup() {
		return new FormGroup<MatchedPlayerSessionFormProperties>({
			PlayerId: new FormControl<string | null | undefined>(undefined),
			PlayerSessionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMatchmakingInput {

		/** Required */
		TicketIds: Array<string>;
	}
	export interface DescribeMatchmakingInputFormProperties {
	}
	export function CreateDescribeMatchmakingInputFormGroup() {
		return new FormGroup<DescribeMatchmakingInputFormProperties>({
		});

	}

	export interface DescribeMatchmakingConfigurationsOutput {
		Configurations?: Array<MatchmakingConfiguration>;
		NextToken?: string;
	}
	export interface DescribeMatchmakingConfigurationsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMatchmakingConfigurationsOutputFormGroup() {
		return new FormGroup<DescribeMatchmakingConfigurationsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMatchmakingConfigurationsInput {
		Names?: Array<string>;
		RuleSetName?: string;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeMatchmakingConfigurationsInputFormProperties {
		RuleSetName: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMatchmakingConfigurationsInputFormGroup() {
		return new FormGroup<DescribeMatchmakingConfigurationsInputFormProperties>({
			RuleSetName: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMatchmakingRuleSetsOutput {

		/** Required */
		RuleSets: Array<MatchmakingRuleSet>;
		NextToken?: string;
	}
	export interface DescribeMatchmakingRuleSetsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMatchmakingRuleSetsOutputFormGroup() {
		return new FormGroup<DescribeMatchmakingRuleSetsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeMatchmakingRuleSetsInput {
		Names?: Array<string>;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeMatchmakingRuleSetsInputFormProperties {
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMatchmakingRuleSetsInputFormGroup() {
		return new FormGroup<DescribeMatchmakingRuleSetsInputFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePlayerSessionsOutput {
		PlayerSessions?: Array<PlayerSession>;
		NextToken?: string;
	}
	export interface DescribePlayerSessionsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePlayerSessionsOutputFormGroup() {
		return new FormGroup<DescribePlayerSessionsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePlayerSessionsInput {
		GameSessionId?: string;
		PlayerId?: string;
		PlayerSessionId?: string;
		PlayerSessionStatusFilter?: string;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribePlayerSessionsInputFormProperties {
		GameSessionId: FormControl<string | null | undefined>,
		PlayerId: FormControl<string | null | undefined>,
		PlayerSessionId: FormControl<string | null | undefined>,
		PlayerSessionStatusFilter: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePlayerSessionsInputFormGroup() {
		return new FormGroup<DescribePlayerSessionsInputFormProperties>({
			GameSessionId: new FormControl<string | null | undefined>(undefined),
			PlayerId: new FormControl<string | null | undefined>(undefined),
			PlayerSessionId: new FormControl<string | null | undefined>(undefined),
			PlayerSessionStatusFilter: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRuntimeConfigurationOutput {
		RuntimeConfiguration?: RuntimeConfiguration;
	}
	export interface DescribeRuntimeConfigurationOutputFormProperties {
	}
	export function CreateDescribeRuntimeConfigurationOutputFormGroup() {
		return new FormGroup<DescribeRuntimeConfigurationOutputFormProperties>({
		});

	}

	export interface DescribeRuntimeConfigurationInput {

		/** Required */
		FleetId: string;
	}
	export interface DescribeRuntimeConfigurationInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRuntimeConfigurationInputFormGroup() {
		return new FormGroup<DescribeRuntimeConfigurationInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeScalingPoliciesOutput {
		ScalingPolicies?: Array<ScalingPolicy>;
		NextToken?: string;
	}
	export interface DescribeScalingPoliciesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScalingPoliciesOutputFormGroup() {
		return new FormGroup<DescribeScalingPoliciesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by the combination of name and fleet ID. */
	export interface ScalingPolicy {
		FleetId?: string;
		FleetArn?: string;
		Name?: string;
		Status?: ScalingStatusType;
		ScalingAdjustment?: number | null;
		ScalingAdjustmentType?: ScalingAdjustmentType;
		ComparisonOperator?: ComparisonOperatorType;
		Threshold?: number | null;
		EvaluationPeriods?: number | null;
		MetricName?: MetricName;
		PolicyType?: PolicyType;
		TargetConfiguration?: TargetConfiguration;
		UpdateStatus?: LocationUpdateStatus;
		Location?: string;
	}

	/** Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by the combination of name and fleet ID. */
	export interface ScalingPolicyFormProperties {
		FleetId: FormControl<string | null | undefined>,
		FleetArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<ScalingStatusType | null | undefined>,
		ScalingAdjustment: FormControl<number | null | undefined>,
		ScalingAdjustmentType: FormControl<ScalingAdjustmentType | null | undefined>,
		ComparisonOperator: FormControl<ComparisonOperatorType | null | undefined>,
		Threshold: FormControl<number | null | undefined>,
		EvaluationPeriods: FormControl<number | null | undefined>,
		MetricName: FormControl<MetricName | null | undefined>,
		PolicyType: FormControl<PolicyType | null | undefined>,
		UpdateStatus: FormControl<LocationUpdateStatus | null | undefined>,
		Location: FormControl<string | null | undefined>,
	}
	export function CreateScalingPolicyFormGroup() {
		return new FormGroup<ScalingPolicyFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			FleetArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ScalingStatusType | null | undefined>(undefined),
			ScalingAdjustment: new FormControl<number | null | undefined>(undefined),
			ScalingAdjustmentType: new FormControl<ScalingAdjustmentType | null | undefined>(undefined),
			ComparisonOperator: new FormControl<ComparisonOperatorType | null | undefined>(undefined),
			Threshold: new FormControl<number | null | undefined>(undefined),
			EvaluationPeriods: new FormControl<number | null | undefined>(undefined),
			MetricName: new FormControl<MetricName | null | undefined>(undefined),
			PolicyType: new FormControl<PolicyType | null | undefined>(undefined),
			UpdateStatus: new FormControl<LocationUpdateStatus | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScalingStatusType { ACTIVE = 0, UPDATE_REQUESTED = 1, UPDATING = 2, DELETE_REQUESTED = 3, DELETING = 4, DELETED = 5, ERROR = 6 }

	export enum ScalingAdjustmentType { ChangeInCapacity = 0, ExactCapacity = 1, PercentChangeInCapacity = 2 }

	export enum ComparisonOperatorType { GreaterThanOrEqualToThreshold = 0, GreaterThanThreshold = 1, LessThanThreshold = 2, LessThanOrEqualToThreshold = 3 }

	export enum MetricName { ActivatingGameSessions = 0, ActiveGameSessions = 1, ActiveInstances = 2, AvailableGameSessions = 3, AvailablePlayerSessions = 4, CurrentPlayerSessions = 5, IdleInstances = 6, PercentAvailableGameSessions = 7, PercentIdleInstances = 8, QueueDepth = 9, WaitTime = 10, ConcurrentActivatableGameSessions = 11 }

	export enum PolicyType { RuleBased = 0, TargetBased = 1 }


	/** Settings for a target-based scaling policy. A target-based policy tracks a particular fleet metric specifies a target value for the metric. As player usage changes, the policy triggers Amazon GameLift to adjust capacity so that the metric returns to the target value. The target configuration specifies settings as needed for the target based policy, including the target value.  */
	export interface TargetConfiguration {

		/** Required */
		TargetValue: number;
	}

	/** Settings for a target-based scaling policy. A target-based policy tracks a particular fleet metric specifies a target value for the metric. As player usage changes, the policy triggers Amazon GameLift to adjust capacity so that the metric returns to the target value. The target configuration specifies settings as needed for the target based policy, including the target value.  */
	export interface TargetConfigurationFormProperties {

		/** Required */
		TargetValue: FormControl<number | null | undefined>,
	}
	export function CreateTargetConfigurationFormGroup() {
		return new FormGroup<TargetConfigurationFormProperties>({
			TargetValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeScalingPoliciesInput {

		/** Required */
		FleetId: string;
		StatusFilter?: ScalingStatusType;
		Limit?: number | null;
		NextToken?: string;
		Location?: string;
	}
	export interface DescribeScalingPoliciesInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,
		StatusFilter: FormControl<ScalingStatusType | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScalingPoliciesInputFormGroup() {
		return new FormGroup<DescribeScalingPoliciesInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StatusFilter: new FormControl<ScalingStatusType | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeScriptOutput {
		Script?: Script;
	}
	export interface DescribeScriptOutputFormProperties {
	}
	export function CreateDescribeScriptOutputFormGroup() {
		return new FormGroup<DescribeScriptOutputFormProperties>({
		});

	}

	export interface DescribeScriptInput {

		/** Required */
		ScriptId: string;
	}
	export interface DescribeScriptInputFormProperties {

		/** Required */
		ScriptId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScriptInputFormGroup() {
		return new FormGroup<DescribeScriptInputFormProperties>({
			ScriptId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeVpcPeeringAuthorizationsOutput {
		VpcPeeringAuthorizations?: Array<VpcPeeringAuthorization>;
	}
	export interface DescribeVpcPeeringAuthorizationsOutputFormProperties {
	}
	export function CreateDescribeVpcPeeringAuthorizationsOutputFormGroup() {
		return new FormGroup<DescribeVpcPeeringAuthorizationsOutputFormProperties>({
		});

	}

	export interface DescribeVpcPeeringAuthorizationsInput {
	}
	export interface DescribeVpcPeeringAuthorizationsInputFormProperties {
	}
	export function CreateDescribeVpcPeeringAuthorizationsInputFormGroup() {
		return new FormGroup<DescribeVpcPeeringAuthorizationsInputFormProperties>({
		});

	}

	export interface DescribeVpcPeeringConnectionsOutput {
		VpcPeeringConnections?: Array<VpcPeeringConnection>;
	}
	export interface DescribeVpcPeeringConnectionsOutputFormProperties {
	}
	export function CreateDescribeVpcPeeringConnectionsOutputFormGroup() {
		return new FormGroup<DescribeVpcPeeringConnectionsOutputFormProperties>({
		});

	}


	/** <p>Represents a peering connection between a VPC on one of your Amazon Web Services accounts and the VPC for your Amazon GameLift fleets. This record may be for an active peering connection or a pending connection that has not yet been established.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p> */
	export interface VpcPeeringConnection {
		FleetId?: string;
		FleetArn?: string;
		IpV4CidrBlock?: string;
		VpcPeeringConnectionId?: string;
		Status?: VpcPeeringConnectionStatus;
		PeerVpcId?: string;
		GameLiftVpcId?: string;
	}

	/** <p>Represents a peering connection between a VPC on one of your Amazon Web Services accounts and the VPC for your Amazon GameLift fleets. This record may be for an active peering connection or a pending connection that has not yet been established.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p> */
	export interface VpcPeeringConnectionFormProperties {
		FleetId: FormControl<string | null | undefined>,
		FleetArn: FormControl<string | null | undefined>,
		IpV4CidrBlock: FormControl<string | null | undefined>,
		VpcPeeringConnectionId: FormControl<string | null | undefined>,
		PeerVpcId: FormControl<string | null | undefined>,
		GameLiftVpcId: FormControl<string | null | undefined>,
	}
	export function CreateVpcPeeringConnectionFormGroup() {
		return new FormGroup<VpcPeeringConnectionFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			FleetArn: new FormControl<string | null | undefined>(undefined),
			IpV4CidrBlock: new FormControl<string | null | undefined>(undefined),
			VpcPeeringConnectionId: new FormControl<string | null | undefined>(undefined),
			PeerVpcId: new FormControl<string | null | undefined>(undefined),
			GameLiftVpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents status information for a VPC peering connection. Status codes and messages are provided from EC2 (see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VpcPeeringConnectionStateReason.html">VpcPeeringConnectionStateReason</a>). Connection status information is also communicated as a fleet event. */
	export interface VpcPeeringConnectionStatus {
		Code?: string;
		Message?: string;
	}

	/** Represents status information for a VPC peering connection. Status codes and messages are provided from EC2 (see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VpcPeeringConnectionStateReason.html">VpcPeeringConnectionStateReason</a>). Connection status information is also communicated as a fleet event. */
	export interface VpcPeeringConnectionStatusFormProperties {
		Code: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateVpcPeeringConnectionStatusFormGroup() {
		return new FormGroup<VpcPeeringConnectionStatusFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeVpcPeeringConnectionsInput {
		FleetId?: string;
	}
	export interface DescribeVpcPeeringConnectionsInputFormProperties {
		FleetId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeVpcPeeringConnectionsInputFormGroup() {
		return new FormGroup<DescribeVpcPeeringConnectionsInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetComputeAccessOutput {
		FleetId?: string;
		FleetArn?: string;
		ComputeName?: string;
		ComputeArn?: string;
		Credentials?: AwsCredentials;
	}
	export interface GetComputeAccessOutputFormProperties {
		FleetId: FormControl<string | null | undefined>,
		FleetArn: FormControl<string | null | undefined>,
		ComputeName: FormControl<string | null | undefined>,
		ComputeArn: FormControl<string | null | undefined>,
	}
	export function CreateGetComputeAccessOutputFormGroup() {
		return new FormGroup<GetComputeAccessOutputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			FleetArn: new FormControl<string | null | undefined>(undefined),
			ComputeName: new FormControl<string | null | undefined>(undefined),
			ComputeArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetComputeAccessInput {

		/** Required */
		FleetId: string;

		/** Required */
		ComputeName: string;
	}
	export interface GetComputeAccessInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,

		/** Required */
		ComputeName: FormControl<string | null | undefined>,
	}
	export function CreateGetComputeAccessInputFormGroup() {
		return new FormGroup<GetComputeAccessInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComputeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetComputeAuthTokenOutput {
		FleetId?: string;
		FleetArn?: string;
		ComputeName?: string;
		ComputeArn?: string;
		AuthToken?: string;
		ExpirationTimestamp?: Date;
	}
	export interface GetComputeAuthTokenOutputFormProperties {
		FleetId: FormControl<string | null | undefined>,
		FleetArn: FormControl<string | null | undefined>,
		ComputeName: FormControl<string | null | undefined>,
		ComputeArn: FormControl<string | null | undefined>,
		AuthToken: FormControl<string | null | undefined>,
		ExpirationTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateGetComputeAuthTokenOutputFormGroup() {
		return new FormGroup<GetComputeAuthTokenOutputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			FleetArn: new FormControl<string | null | undefined>(undefined),
			ComputeName: new FormControl<string | null | undefined>(undefined),
			ComputeArn: new FormControl<string | null | undefined>(undefined),
			AuthToken: new FormControl<string | null | undefined>(undefined),
			ExpirationTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetComputeAuthTokenInput {

		/** Required */
		FleetId: string;

		/** Required */
		ComputeName: string;
	}
	export interface GetComputeAuthTokenInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,

		/** Required */
		ComputeName: FormControl<string | null | undefined>,
	}
	export function CreateGetComputeAuthTokenInputFormGroup() {
		return new FormGroup<GetComputeAuthTokenInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComputeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetGameSessionLogUrlOutput {
		PreSignedUrl?: string;
	}
	export interface GetGameSessionLogUrlOutputFormProperties {
		PreSignedUrl: FormControl<string | null | undefined>,
	}
	export function CreateGetGameSessionLogUrlOutputFormGroup() {
		return new FormGroup<GetGameSessionLogUrlOutputFormProperties>({
			PreSignedUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGameSessionLogUrlInput {

		/** Required */
		GameSessionId: string;
	}
	export interface GetGameSessionLogUrlInputFormProperties {

		/** Required */
		GameSessionId: FormControl<string | null | undefined>,
	}
	export function CreateGetGameSessionLogUrlInputFormGroup() {
		return new FormGroup<GetGameSessionLogUrlInputFormProperties>({
			GameSessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetInstanceAccessOutput {
		InstanceAccess?: InstanceAccess;
	}
	export interface GetInstanceAccessOutputFormProperties {
	}
	export function CreateGetInstanceAccessOutputFormGroup() {
		return new FormGroup<GetInstanceAccessOutputFormProperties>({
		});

	}


	/** Information required to remotely connect to a fleet instance.  */
	export interface InstanceAccess {
		FleetId?: string;
		InstanceId?: string;
		IpAddress?: string;
		OperatingSystem?: OperatingSystem;
		Credentials?: InstanceCredentials;
	}

	/** Information required to remotely connect to a fleet instance.  */
	export interface InstanceAccessFormProperties {
		FleetId: FormControl<string | null | undefined>,
		InstanceId: FormControl<string | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
		OperatingSystem: FormControl<OperatingSystem | null | undefined>,
	}
	export function CreateInstanceAccessFormGroup() {
		return new FormGroup<InstanceAccessFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			InstanceId: new FormControl<string | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
			OperatingSystem: new FormControl<OperatingSystem | null | undefined>(undefined),
		});

	}


	/** Set of credentials required to remotely access a fleet instance. */
	export interface InstanceCredentials {
		UserName?: string;
		Secret?: string;
	}

	/** Set of credentials required to remotely access a fleet instance. */
	export interface InstanceCredentialsFormProperties {
		UserName: FormControl<string | null | undefined>,
		Secret: FormControl<string | null | undefined>,
	}
	export function CreateInstanceCredentialsFormGroup() {
		return new FormGroup<InstanceCredentialsFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			Secret: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetInstanceAccessInput {

		/** Required */
		FleetId: string;

		/** Required */
		InstanceId: string;
	}
	export interface GetInstanceAccessInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
	}
	export function CreateGetInstanceAccessInputFormGroup() {
		return new FormGroup<GetInstanceAccessInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAliasesOutput {
		Aliases?: Array<Alias>;
		NextToken?: string;
	}
	export interface ListAliasesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAliasesOutputFormGroup() {
		return new FormGroup<ListAliasesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAliasesInput {
		RoutingStrategyType?: RoutingStrategyType;
		Name?: string;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface ListAliasesInputFormProperties {
		RoutingStrategyType: FormControl<RoutingStrategyType | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAliasesInputFormGroup() {
		return new FormGroup<ListAliasesInputFormProperties>({
			RoutingStrategyType: new FormControl<RoutingStrategyType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBuildsOutput {
		Builds?: Array<Build>;
		NextToken?: string;
	}
	export interface ListBuildsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBuildsOutputFormGroup() {
		return new FormGroup<ListBuildsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBuildsInput {
		Status?: BuildStatus;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface ListBuildsInputFormProperties {
		Status: FormControl<BuildStatus | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBuildsInputFormGroup() {
		return new FormGroup<ListBuildsInputFormProperties>({
			Status: new FormControl<BuildStatus | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListComputeOutput {
		ComputeList?: Array<Compute>;
		NextToken?: string;
	}
	export interface ListComputeOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComputeOutputFormGroup() {
		return new FormGroup<ListComputeOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListComputeInput {

		/** Required */
		FleetId: string;
		Location?: string;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface ListComputeInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComputeInputFormGroup() {
		return new FormGroup<ListComputeInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Location: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFleetsOutput {
		FleetIds?: Array<string>;
		NextToken?: string;
	}
	export interface ListFleetsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFleetsOutputFormGroup() {
		return new FormGroup<ListFleetsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFleetsInput {
		BuildId?: string;
		ScriptId?: string;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface ListFleetsInputFormProperties {
		BuildId: FormControl<string | null | undefined>,
		ScriptId: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFleetsInputFormGroup() {
		return new FormGroup<ListFleetsInputFormProperties>({
			BuildId: new FormControl<string | null | undefined>(undefined),
			ScriptId: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGameServerGroupsOutput {
		GameServerGroups?: Array<GameServerGroup>;
		NextToken?: string;
	}
	export interface ListGameServerGroupsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGameServerGroupsOutputFormGroup() {
		return new FormGroup<ListGameServerGroupsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGameServerGroupsInput {
		Limit?: number | null;
		NextToken?: string;
	}
	export interface ListGameServerGroupsInputFormProperties {
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGameServerGroupsInputFormGroup() {
		return new FormGroup<ListGameServerGroupsInputFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGameServersOutput {
		GameServers?: Array<GameServer>;
		NextToken?: string;
	}
	export interface ListGameServersOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGameServersOutputFormGroup() {
		return new FormGroup<ListGameServersOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGameServersInput {

		/** Required */
		GameServerGroupName: string;
		SortOrder?: SortOrder;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface ListGameServersInputFormProperties {

		/** Required */
		GameServerGroupName: FormControl<string | null | undefined>,
		SortOrder: FormControl<SortOrder | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGameServersInputFormGroup() {
		return new FormGroup<ListGameServersInputFormProperties>({
			GameServerGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SortOrder { ASCENDING = 0, DESCENDING = 1 }

	export interface ListLocationsOutput {
		Locations?: Array<LocationModel>;
		NextToken?: string;
	}
	export interface ListLocationsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsOutputFormGroup() {
		return new FormGroup<ListLocationsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLocationsInput {
		Filters?: Array<LocationFilter>;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface ListLocationsInputFormProperties {
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsInputFormGroup() {
		return new FormGroup<ListLocationsInputFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LocationFilter { AWS = 0, CUSTOM = 1 }

	export interface ListScriptsOutput {
		Scripts?: Array<Script>;
		NextToken?: string;
	}
	export interface ListScriptsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListScriptsOutputFormGroup() {
		return new FormGroup<ListScriptsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListScriptsInput {
		Limit?: number | null;
		NextToken?: string;
	}
	export interface ListScriptsInputFormProperties {
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListScriptsInputFormGroup() {
		return new FormGroup<ListScriptsInputFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceARN: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutScalingPolicyOutput {
		Name?: string;
	}
	export interface PutScalingPolicyOutputFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreatePutScalingPolicyOutputFormGroup() {
		return new FormGroup<PutScalingPolicyOutputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutScalingPolicyInput {

		/** Required */
		Name: string;

		/** Required */
		FleetId: string;
		ScalingAdjustment?: number | null;
		ScalingAdjustmentType?: ScalingAdjustmentType;
		Threshold?: number | null;
		ComparisonOperator?: ComparisonOperatorType;
		EvaluationPeriods?: number | null;

		/** Required */
		MetricName: MetricName;
		PolicyType?: PolicyType;
		TargetConfiguration?: TargetConfiguration;
	}
	export interface PutScalingPolicyInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		FleetId: FormControl<string | null | undefined>,
		ScalingAdjustment: FormControl<number | null | undefined>,
		ScalingAdjustmentType: FormControl<ScalingAdjustmentType | null | undefined>,
		Threshold: FormControl<number | null | undefined>,
		ComparisonOperator: FormControl<ComparisonOperatorType | null | undefined>,
		EvaluationPeriods: FormControl<number | null | undefined>,

		/** Required */
		MetricName: FormControl<MetricName | null | undefined>,
		PolicyType: FormControl<PolicyType | null | undefined>,
	}
	export function CreatePutScalingPolicyInputFormGroup() {
		return new FormGroup<PutScalingPolicyInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalingAdjustment: new FormControl<number | null | undefined>(undefined),
			ScalingAdjustmentType: new FormControl<ScalingAdjustmentType | null | undefined>(undefined),
			Threshold: new FormControl<number | null | undefined>(undefined),
			ComparisonOperator: new FormControl<ComparisonOperatorType | null | undefined>(undefined),
			EvaluationPeriods: new FormControl<number | null | undefined>(undefined),
			MetricName: new FormControl<MetricName | null | undefined>(undefined, [Validators.required]),
			PolicyType: new FormControl<PolicyType | null | undefined>(undefined),
		});

	}

	export interface RegisterComputeOutput {
		Compute?: Compute;
	}
	export interface RegisterComputeOutputFormProperties {
	}
	export function CreateRegisterComputeOutputFormGroup() {
		return new FormGroup<RegisterComputeOutputFormProperties>({
		});

	}

	export interface RegisterComputeInput {

		/** Required */
		FleetId: string;

		/** Required */
		ComputeName: string;
		CertificatePath?: string;
		DnsName?: string;
		IpAddress?: string;
		Location?: string;
	}
	export interface RegisterComputeInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,

		/** Required */
		ComputeName: FormControl<string | null | undefined>,
		CertificatePath: FormControl<string | null | undefined>,
		DnsName: FormControl<string | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
	}
	export function CreateRegisterComputeInputFormGroup() {
		return new FormGroup<RegisterComputeInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComputeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CertificatePath: new FormControl<string | null | undefined>(undefined),
			DnsName: new FormControl<string | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterGameServerOutput {
		GameServer?: GameServer;
	}
	export interface RegisterGameServerOutputFormProperties {
	}
	export function CreateRegisterGameServerOutputFormGroup() {
		return new FormGroup<RegisterGameServerOutputFormProperties>({
		});

	}

	export interface RegisterGameServerInput {

		/** Required */
		GameServerGroupName: string;

		/** Required */
		GameServerId: string;

		/** Required */
		InstanceId: string;
		ConnectionInfo?: string;
		GameServerData?: string;
	}
	export interface RegisterGameServerInputFormProperties {

		/** Required */
		GameServerGroupName: FormControl<string | null | undefined>,

		/** Required */
		GameServerId: FormControl<string | null | undefined>,

		/** Required */
		InstanceId: FormControl<string | null | undefined>,
		ConnectionInfo: FormControl<string | null | undefined>,
		GameServerData: FormControl<string | null | undefined>,
	}
	export function CreateRegisterGameServerInputFormGroup() {
		return new FormGroup<RegisterGameServerInputFormProperties>({
			GameServerGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GameServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectionInfo: new FormControl<string | null | undefined>(undefined),
			GameServerData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RequestUploadCredentialsOutput {
		UploadCredentials?: AwsCredentials;
		StorageLocation?: S3Location;
	}
	export interface RequestUploadCredentialsOutputFormProperties {
	}
	export function CreateRequestUploadCredentialsOutputFormGroup() {
		return new FormGroup<RequestUploadCredentialsOutputFormProperties>({
		});

	}

	export interface RequestUploadCredentialsInput {

		/** Required */
		BuildId: string;
	}
	export interface RequestUploadCredentialsInputFormProperties {

		/** Required */
		BuildId: FormControl<string | null | undefined>,
	}
	export function CreateRequestUploadCredentialsInputFormGroup() {
		return new FormGroup<RequestUploadCredentialsInputFormProperties>({
			BuildId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResolveAliasOutput {
		FleetId?: string;
		FleetArn?: string;
	}
	export interface ResolveAliasOutputFormProperties {
		FleetId: FormControl<string | null | undefined>,
		FleetArn: FormControl<string | null | undefined>,
	}
	export function CreateResolveAliasOutputFormGroup() {
		return new FormGroup<ResolveAliasOutputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			FleetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResolveAliasInput {

		/** Required */
		AliasId: string;
	}
	export interface ResolveAliasInputFormProperties {

		/** Required */
		AliasId: FormControl<string | null | undefined>,
	}
	export function CreateResolveAliasInputFormGroup() {
		return new FormGroup<ResolveAliasInputFormProperties>({
			AliasId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResumeGameServerGroupOutput {
		GameServerGroup?: GameServerGroup;
	}
	export interface ResumeGameServerGroupOutputFormProperties {
	}
	export function CreateResumeGameServerGroupOutputFormGroup() {
		return new FormGroup<ResumeGameServerGroupOutputFormProperties>({
		});

	}

	export interface ResumeGameServerGroupInput {

		/** Required */
		GameServerGroupName: string;

		/** Required */
		ResumeActions: Array<GameServerGroupAction>;
	}
	export interface ResumeGameServerGroupInputFormProperties {

		/** Required */
		GameServerGroupName: FormControl<string | null | undefined>,
	}
	export function CreateResumeGameServerGroupInputFormGroup() {
		return new FormGroup<ResumeGameServerGroupInputFormProperties>({
			GameServerGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchGameSessionsOutput {
		GameSessions?: Array<GameSession>;
		NextToken?: string;
	}
	export interface SearchGameSessionsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchGameSessionsOutputFormGroup() {
		return new FormGroup<SearchGameSessionsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchGameSessionsInput {
		FleetId?: string;
		AliasId?: string;
		Location?: string;
		FilterExpression?: string;
		SortExpression?: string;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface SearchGameSessionsInputFormProperties {
		FleetId: FormControl<string | null | undefined>,
		AliasId: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
		FilterExpression: FormControl<string | null | undefined>,
		SortExpression: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchGameSessionsInputFormGroup() {
		return new FormGroup<SearchGameSessionsInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			AliasId: new FormControl<string | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
			FilterExpression: new FormControl<string | null | undefined>(undefined),
			SortExpression: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartFleetActionsOutput {
		FleetId?: string;
		FleetArn?: string;
	}
	export interface StartFleetActionsOutputFormProperties {
		FleetId: FormControl<string | null | undefined>,
		FleetArn: FormControl<string | null | undefined>,
	}
	export function CreateStartFleetActionsOutputFormGroup() {
		return new FormGroup<StartFleetActionsOutputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			FleetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartFleetActionsInput {

		/** Required */
		FleetId: string;

		/** Required */
		Actions: Array<FleetAction>;
		Location?: string;
	}
	export interface StartFleetActionsInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
	}
	export function CreateStartFleetActionsInputFormGroup() {
		return new FormGroup<StartFleetActionsInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartGameSessionPlacementOutput {
		GameSessionPlacement?: GameSessionPlacement;
	}
	export interface StartGameSessionPlacementOutputFormProperties {
	}
	export function CreateStartGameSessionPlacementOutputFormGroup() {
		return new FormGroup<StartGameSessionPlacementOutputFormProperties>({
		});

	}

	export interface StartGameSessionPlacementInput {

		/** Required */
		PlacementId: string;

		/** Required */
		GameSessionQueueName: string;
		GameProperties?: Array<GameProperty>;

		/** Required */
		MaximumPlayerSessionCount: number;
		GameSessionName?: string;
		PlayerLatencies?: Array<PlayerLatency>;
		DesiredPlayerSessions?: Array<DesiredPlayerSession>;
		GameSessionData?: string;
	}
	export interface StartGameSessionPlacementInputFormProperties {

		/** Required */
		PlacementId: FormControl<string | null | undefined>,

		/** Required */
		GameSessionQueueName: FormControl<string | null | undefined>,

		/** Required */
		MaximumPlayerSessionCount: FormControl<number | null | undefined>,
		GameSessionName: FormControl<string | null | undefined>,
		GameSessionData: FormControl<string | null | undefined>,
	}
	export function CreateStartGameSessionPlacementInputFormGroup() {
		return new FormGroup<StartGameSessionPlacementInputFormProperties>({
			PlacementId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GameSessionQueueName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaximumPlayerSessionCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			GameSessionName: new FormControl<string | null | undefined>(undefined),
			GameSessionData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Player information for use when creating player sessions using a game session placement request. */
	export interface DesiredPlayerSession {
		PlayerId?: string;
		PlayerData?: string;
	}

	/** Player information for use when creating player sessions using a game session placement request. */
	export interface DesiredPlayerSessionFormProperties {
		PlayerId: FormControl<string | null | undefined>,
		PlayerData: FormControl<string | null | undefined>,
	}
	export function CreateDesiredPlayerSessionFormGroup() {
		return new FormGroup<DesiredPlayerSessionFormProperties>({
			PlayerId: new FormControl<string | null | undefined>(undefined),
			PlayerData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartMatchBackfillOutput {
		MatchmakingTicket?: MatchmakingTicket;
	}
	export interface StartMatchBackfillOutputFormProperties {
	}
	export function CreateStartMatchBackfillOutputFormGroup() {
		return new FormGroup<StartMatchBackfillOutputFormProperties>({
		});

	}

	export interface StartMatchBackfillInput {
		TicketId?: string;

		/** Required */
		ConfigurationName: string;
		GameSessionArn?: string;

		/** Required */
		Players: Array<Player>;
	}
	export interface StartMatchBackfillInputFormProperties {
		TicketId: FormControl<string | null | undefined>,

		/** Required */
		ConfigurationName: FormControl<string | null | undefined>,
		GameSessionArn: FormControl<string | null | undefined>,
	}
	export function CreateStartMatchBackfillInputFormGroup() {
		return new FormGroup<StartMatchBackfillInputFormProperties>({
			TicketId: new FormControl<string | null | undefined>(undefined),
			ConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GameSessionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartMatchmakingOutput {
		MatchmakingTicket?: MatchmakingTicket;
	}
	export interface StartMatchmakingOutputFormProperties {
	}
	export function CreateStartMatchmakingOutputFormGroup() {
		return new FormGroup<StartMatchmakingOutputFormProperties>({
		});

	}

	export interface StartMatchmakingInput {
		TicketId?: string;

		/** Required */
		ConfigurationName: string;

		/** Required */
		Players: Array<Player>;
	}
	export interface StartMatchmakingInputFormProperties {
		TicketId: FormControl<string | null | undefined>,

		/** Required */
		ConfigurationName: FormControl<string | null | undefined>,
	}
	export function CreateStartMatchmakingInputFormGroup() {
		return new FormGroup<StartMatchmakingInputFormProperties>({
			TicketId: new FormControl<string | null | undefined>(undefined),
			ConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopFleetActionsOutput {
		FleetId?: string;
		FleetArn?: string;
	}
	export interface StopFleetActionsOutputFormProperties {
		FleetId: FormControl<string | null | undefined>,
		FleetArn: FormControl<string | null | undefined>,
	}
	export function CreateStopFleetActionsOutputFormGroup() {
		return new FormGroup<StopFleetActionsOutputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			FleetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopFleetActionsInput {

		/** Required */
		FleetId: string;

		/** Required */
		Actions: Array<FleetAction>;
		Location?: string;
	}
	export interface StopFleetActionsInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
	}
	export function CreateStopFleetActionsInputFormGroup() {
		return new FormGroup<StopFleetActionsInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopGameSessionPlacementOutput {
		GameSessionPlacement?: GameSessionPlacement;
	}
	export interface StopGameSessionPlacementOutputFormProperties {
	}
	export function CreateStopGameSessionPlacementOutputFormGroup() {
		return new FormGroup<StopGameSessionPlacementOutputFormProperties>({
		});

	}

	export interface StopGameSessionPlacementInput {

		/** Required */
		PlacementId: string;
	}
	export interface StopGameSessionPlacementInputFormProperties {

		/** Required */
		PlacementId: FormControl<string | null | undefined>,
	}
	export function CreateStopGameSessionPlacementInputFormGroup() {
		return new FormGroup<StopGameSessionPlacementInputFormProperties>({
			PlacementId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopMatchmakingOutput {
	}
	export interface StopMatchmakingOutputFormProperties {
	}
	export function CreateStopMatchmakingOutputFormGroup() {
		return new FormGroup<StopMatchmakingOutputFormProperties>({
		});

	}

	export interface StopMatchmakingInput {

		/** Required */
		TicketId: string;
	}
	export interface StopMatchmakingInputFormProperties {

		/** Required */
		TicketId: FormControl<string | null | undefined>,
	}
	export function CreateStopMatchmakingInputFormGroup() {
		return new FormGroup<StopMatchmakingInputFormProperties>({
			TicketId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SuspendGameServerGroupOutput {
		GameServerGroup?: GameServerGroup;
	}
	export interface SuspendGameServerGroupOutputFormProperties {
	}
	export function CreateSuspendGameServerGroupOutputFormGroup() {
		return new FormGroup<SuspendGameServerGroupOutputFormProperties>({
		});

	}

	export interface SuspendGameServerGroupInput {

		/** Required */
		GameServerGroupName: string;

		/** Required */
		SuspendActions: Array<GameServerGroupAction>;
	}
	export interface SuspendGameServerGroupInputFormProperties {

		/** Required */
		GameServerGroupName: FormControl<string | null | undefined>,
	}
	export function CreateSuspendGameServerGroupInputFormGroup() {
		return new FormGroup<SuspendGameServerGroupInputFormProperties>({
			GameServerGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAliasOutput {
		Alias?: Alias;
	}
	export interface UpdateAliasOutputFormProperties {
	}
	export function CreateUpdateAliasOutputFormGroup() {
		return new FormGroup<UpdateAliasOutputFormProperties>({
		});

	}

	export interface UpdateAliasInput {

		/** Required */
		AliasId: string;
		Name?: string;
		Description?: string;
		RoutingStrategy?: RoutingStrategy;
	}
	export interface UpdateAliasInputFormProperties {

		/** Required */
		AliasId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAliasInputFormGroup() {
		return new FormGroup<UpdateAliasInputFormProperties>({
			AliasId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBuildOutput {
		Build?: Build;
	}
	export interface UpdateBuildOutputFormProperties {
	}
	export function CreateUpdateBuildOutputFormGroup() {
		return new FormGroup<UpdateBuildOutputFormProperties>({
		});

	}

	export interface UpdateBuildInput {

		/** Required */
		BuildId: string;
		Name?: string;
		Version?: string;
	}
	export interface UpdateBuildInputFormProperties {

		/** Required */
		BuildId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBuildInputFormGroup() {
		return new FormGroup<UpdateBuildInputFormProperties>({
			BuildId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFleetAttributesOutput {
		FleetId?: string;
		FleetArn?: string;
	}
	export interface UpdateFleetAttributesOutputFormProperties {
		FleetId: FormControl<string | null | undefined>,
		FleetArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFleetAttributesOutputFormGroup() {
		return new FormGroup<UpdateFleetAttributesOutputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			FleetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFleetAttributesInput {

		/** Required */
		FleetId: string;
		Name?: string;
		Description?: string;
		NewGameSessionProtectionPolicy?: ProtectionPolicy;
		ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
		MetricGroups?: Array<string>;
		AnywhereConfiguration?: AnywhereConfiguration;
	}
	export interface UpdateFleetAttributesInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		NewGameSessionProtectionPolicy: FormControl<ProtectionPolicy | null | undefined>,
	}
	export function CreateUpdateFleetAttributesInputFormGroup() {
		return new FormGroup<UpdateFleetAttributesInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			NewGameSessionProtectionPolicy: new FormControl<ProtectionPolicy | null | undefined>(undefined),
		});

	}

	export interface UpdateFleetCapacityOutput {
		FleetId?: string;
		FleetArn?: string;
		Location?: string;
	}
	export interface UpdateFleetCapacityOutputFormProperties {
		FleetId: FormControl<string | null | undefined>,
		FleetArn: FormControl<string | null | undefined>,
		Location: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFleetCapacityOutputFormGroup() {
		return new FormGroup<UpdateFleetCapacityOutputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			FleetArn: new FormControl<string | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFleetCapacityInput {

		/** Required */
		FleetId: string;
		DesiredInstances?: number | null;
		MinSize?: number | null;
		MaxSize?: number | null;
		Location?: string;
	}
	export interface UpdateFleetCapacityInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,
		DesiredInstances: FormControl<number | null | undefined>,
		MinSize: FormControl<number | null | undefined>,
		MaxSize: FormControl<number | null | undefined>,
		Location: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFleetCapacityInputFormGroup() {
		return new FormGroup<UpdateFleetCapacityInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DesiredInstances: new FormControl<number | null | undefined>(undefined),
			MinSize: new FormControl<number | null | undefined>(undefined),
			MaxSize: new FormControl<number | null | undefined>(undefined),
			Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFleetPortSettingsOutput {
		FleetId?: string;
		FleetArn?: string;
	}
	export interface UpdateFleetPortSettingsOutputFormProperties {
		FleetId: FormControl<string | null | undefined>,
		FleetArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFleetPortSettingsOutputFormGroup() {
		return new FormGroup<UpdateFleetPortSettingsOutputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined),
			FleetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFleetPortSettingsInput {

		/** Required */
		FleetId: string;
		InboundPermissionAuthorizations?: Array<IpPermission>;
		InboundPermissionRevocations?: Array<IpPermission>;
	}
	export interface UpdateFleetPortSettingsInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFleetPortSettingsInputFormGroup() {
		return new FormGroup<UpdateFleetPortSettingsInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateGameServerOutput {
		GameServer?: GameServer;
	}
	export interface UpdateGameServerOutputFormProperties {
	}
	export function CreateUpdateGameServerOutputFormGroup() {
		return new FormGroup<UpdateGameServerOutputFormProperties>({
		});

	}

	export interface UpdateGameServerInput {

		/** Required */
		GameServerGroupName: string;

		/** Required */
		GameServerId: string;
		GameServerData?: string;
		UtilizationStatus?: GameServerUtilizationStatus;
		HealthCheck?: GameServerHealthCheck;
	}
	export interface UpdateGameServerInputFormProperties {

		/** Required */
		GameServerGroupName: FormControl<string | null | undefined>,

		/** Required */
		GameServerId: FormControl<string | null | undefined>,
		GameServerData: FormControl<string | null | undefined>,
		UtilizationStatus: FormControl<GameServerUtilizationStatus | null | undefined>,
		HealthCheck: FormControl<GameServerHealthCheck | null | undefined>,
	}
	export function CreateUpdateGameServerInputFormGroup() {
		return new FormGroup<UpdateGameServerInputFormProperties>({
			GameServerGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GameServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GameServerData: new FormControl<string | null | undefined>(undefined),
			UtilizationStatus: new FormControl<GameServerUtilizationStatus | null | undefined>(undefined),
			HealthCheck: new FormControl<GameServerHealthCheck | null | undefined>(undefined),
		});

	}

	export enum GameServerHealthCheck { HEALTHY = 0 }

	export interface UpdateGameServerGroupOutput {
		GameServerGroup?: GameServerGroup;
	}
	export interface UpdateGameServerGroupOutputFormProperties {
	}
	export function CreateUpdateGameServerGroupOutputFormGroup() {
		return new FormGroup<UpdateGameServerGroupOutputFormProperties>({
		});

	}

	export interface UpdateGameServerGroupInput {

		/** Required */
		GameServerGroupName: string;
		RoleArn?: string;
		InstanceDefinitions?: Array<InstanceDefinition>;
		GameServerProtectionPolicy?: GameServerProtectionPolicy;
		BalancingStrategy?: BalancingStrategy;
	}
	export interface UpdateGameServerGroupInputFormProperties {

		/** Required */
		GameServerGroupName: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		GameServerProtectionPolicy: FormControl<GameServerProtectionPolicy | null | undefined>,
		BalancingStrategy: FormControl<BalancingStrategy | null | undefined>,
	}
	export function CreateUpdateGameServerGroupInputFormGroup() {
		return new FormGroup<UpdateGameServerGroupInputFormProperties>({
			GameServerGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			GameServerProtectionPolicy: new FormControl<GameServerProtectionPolicy | null | undefined>(undefined),
			BalancingStrategy: new FormControl<BalancingStrategy | null | undefined>(undefined),
		});

	}

	export interface UpdateGameSessionOutput {
		GameSession?: GameSession;
	}
	export interface UpdateGameSessionOutputFormProperties {
	}
	export function CreateUpdateGameSessionOutputFormGroup() {
		return new FormGroup<UpdateGameSessionOutputFormProperties>({
		});

	}

	export interface UpdateGameSessionInput {

		/** Required */
		GameSessionId: string;
		MaximumPlayerSessionCount?: number | null;
		Name?: string;
		PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy;
		ProtectionPolicy?: ProtectionPolicy;
	}
	export interface UpdateGameSessionInputFormProperties {

		/** Required */
		GameSessionId: FormControl<string | null | undefined>,
		MaximumPlayerSessionCount: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		PlayerSessionCreationPolicy: FormControl<PlayerSessionCreationPolicy | null | undefined>,
		ProtectionPolicy: FormControl<ProtectionPolicy | null | undefined>,
	}
	export function CreateUpdateGameSessionInputFormGroup() {
		return new FormGroup<UpdateGameSessionInputFormProperties>({
			GameSessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaximumPlayerSessionCount: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PlayerSessionCreationPolicy: new FormControl<PlayerSessionCreationPolicy | null | undefined>(undefined),
			ProtectionPolicy: new FormControl<ProtectionPolicy | null | undefined>(undefined),
		});

	}

	export interface UpdateGameSessionQueueOutput {
		GameSessionQueue?: GameSessionQueue;
	}
	export interface UpdateGameSessionQueueOutputFormProperties {
	}
	export function CreateUpdateGameSessionQueueOutputFormGroup() {
		return new FormGroup<UpdateGameSessionQueueOutputFormProperties>({
		});

	}

	export interface UpdateGameSessionQueueInput {

		/** Required */
		Name: string;
		TimeoutInSeconds?: number | null;
		PlayerLatencyPolicies?: Array<PlayerLatencyPolicy>;
		Destinations?: Array<GameSessionQueueDestination>;
		FilterConfiguration?: FilterConfiguration;
		PriorityConfiguration?: PriorityConfiguration;
		CustomEventData?: string;
		NotificationTarget?: string;
	}
	export interface UpdateGameSessionQueueInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		TimeoutInSeconds: FormControl<number | null | undefined>,
		CustomEventData: FormControl<string | null | undefined>,
		NotificationTarget: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGameSessionQueueInputFormGroup() {
		return new FormGroup<UpdateGameSessionQueueInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TimeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			CustomEventData: new FormControl<string | null | undefined>(undefined),
			NotificationTarget: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMatchmakingConfigurationOutput {
		Configuration?: MatchmakingConfiguration;
	}
	export interface UpdateMatchmakingConfigurationOutputFormProperties {
	}
	export function CreateUpdateMatchmakingConfigurationOutputFormGroup() {
		return new FormGroup<UpdateMatchmakingConfigurationOutputFormProperties>({
		});

	}

	export interface UpdateMatchmakingConfigurationInput {

		/** Required */
		Name: string;
		Description?: string;
		GameSessionQueueArns?: Array<string>;
		RequestTimeoutSeconds?: number | null;
		AcceptanceTimeoutSeconds?: number | null;
		AcceptanceRequired?: boolean | null;
		RuleSetName?: string;
		NotificationTarget?: string;
		AdditionalPlayerCount?: number | null;
		CustomEventData?: string;
		GameProperties?: Array<GameProperty>;
		GameSessionData?: string;
		BackfillMode?: BackfillMode;
		FlexMatchMode?: FlexMatchMode;
	}
	export interface UpdateMatchmakingConfigurationInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RequestTimeoutSeconds: FormControl<number | null | undefined>,
		AcceptanceTimeoutSeconds: FormControl<number | null | undefined>,
		AcceptanceRequired: FormControl<boolean | null | undefined>,
		RuleSetName: FormControl<string | null | undefined>,
		NotificationTarget: FormControl<string | null | undefined>,
		AdditionalPlayerCount: FormControl<number | null | undefined>,
		CustomEventData: FormControl<string | null | undefined>,
		GameSessionData: FormControl<string | null | undefined>,
		BackfillMode: FormControl<BackfillMode | null | undefined>,
		FlexMatchMode: FormControl<FlexMatchMode | null | undefined>,
	}
	export function CreateUpdateMatchmakingConfigurationInputFormGroup() {
		return new FormGroup<UpdateMatchmakingConfigurationInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			RequestTimeoutSeconds: new FormControl<number | null | undefined>(undefined),
			AcceptanceTimeoutSeconds: new FormControl<number | null | undefined>(undefined),
			AcceptanceRequired: new FormControl<boolean | null | undefined>(undefined),
			RuleSetName: new FormControl<string | null | undefined>(undefined),
			NotificationTarget: new FormControl<string | null | undefined>(undefined),
			AdditionalPlayerCount: new FormControl<number | null | undefined>(undefined),
			CustomEventData: new FormControl<string | null | undefined>(undefined),
			GameSessionData: new FormControl<string | null | undefined>(undefined),
			BackfillMode: new FormControl<BackfillMode | null | undefined>(undefined),
			FlexMatchMode: new FormControl<FlexMatchMode | null | undefined>(undefined),
		});

	}

	export interface UpdateRuntimeConfigurationOutput {
		RuntimeConfiguration?: RuntimeConfiguration;
	}
	export interface UpdateRuntimeConfigurationOutputFormProperties {
	}
	export function CreateUpdateRuntimeConfigurationOutputFormGroup() {
		return new FormGroup<UpdateRuntimeConfigurationOutputFormProperties>({
		});

	}

	export interface UpdateRuntimeConfigurationInput {

		/** Required */
		FleetId: string;

		/** Required */
		RuntimeConfiguration: RuntimeConfiguration;
	}
	export interface UpdateRuntimeConfigurationInputFormProperties {

		/** Required */
		FleetId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRuntimeConfigurationInputFormGroup() {
		return new FormGroup<UpdateRuntimeConfigurationInputFormProperties>({
			FleetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateScriptOutput {
		Script?: Script;
	}
	export interface UpdateScriptOutputFormProperties {
	}
	export function CreateUpdateScriptOutputFormGroup() {
		return new FormGroup<UpdateScriptOutputFormProperties>({
		});

	}

	export interface UpdateScriptInput {

		/** Required */
		ScriptId: string;
		Name?: string;
		Version?: string;
		StorageLocation?: S3Location;
		ZipFile?: string;
	}
	export interface UpdateScriptInputFormProperties {

		/** Required */
		ScriptId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
		ZipFile: FormControl<string | null | undefined>,
	}
	export function CreateUpdateScriptInputFormGroup() {
		return new FormGroup<UpdateScriptInputFormProperties>({
			ScriptId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
			ZipFile: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ValidateMatchmakingRuleSetOutput {
		Valid?: boolean | null;
	}
	export interface ValidateMatchmakingRuleSetOutputFormProperties {
		Valid: FormControl<boolean | null | undefined>,
	}
	export function CreateValidateMatchmakingRuleSetOutputFormGroup() {
		return new FormGroup<ValidateMatchmakingRuleSetOutputFormProperties>({
			Valid: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ValidateMatchmakingRuleSetInput {

		/** Required */
		RuleSetBody: string;
	}
	export interface ValidateMatchmakingRuleSetInputFormProperties {

		/** Required */
		RuleSetBody: FormControl<string | null | undefined>,
	}
	export function CreateValidateMatchmakingRuleSetInputFormGroup() {
		return new FormGroup<ValidateMatchmakingRuleSetInputFormProperties>({
			RuleSetBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PlayerAttributeStringDoubleMap {
	}
	export interface PlayerAttributeStringDoubleMapFormProperties {
	}
	export function CreatePlayerAttributeStringDoubleMapFormGroup() {
		return new FormGroup<PlayerAttributeStringDoubleMapFormProperties>({
		});

	}


	/** Values for use in player attribute key-value pairs. This object lets you specify an attribute value using any of the valid data types: string, number, string array, or data map. Each <code>AttributeValue</code> object can use only one of the available properties. */
	export interface AttributeValue {
		S?: string;
		N?: number | null;
		SL?: Array<string>;
		SDM?: PlayerAttributeStringDoubleMap;
	}

	/** Values for use in player attribute key-value pairs. This object lets you specify an attribute value using any of the valid data types: string, number, string array, or data map. Each <code>AttributeValue</code> object can use only one of the available properties. */
	export interface AttributeValueFormProperties {
		S: FormControl<string | null | undefined>,
		N: FormControl<number | null | undefined>,
	}
	export function CreateAttributeValueFormGroup() {
		return new FormGroup<AttributeValueFormProperties>({
			S: new FormControl<string | null | undefined>(undefined),
			N: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum InstanceStatus { PENDING = 0, ACTIVE = 1, TERMINATING = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Registers a player's acceptance or rejection of a proposed FlexMatch match. A matchmaking configuration may require player acceptance; if so, then matches built with that configuration cannot be completed unless all players accept the proposed match within a specified time limit. </p> <p>When FlexMatch builds a match, all the matchmaking tickets involved in the proposed match are placed into status <code>REQUIRES_ACCEPTANCE</code>. This is a trigger for your game to get acceptance from all players in the ticket. Acceptances are only valid for tickets when they are in this status; all other acceptances result in an error.</p> <p>To register acceptance, specify the ticket ID, a response, and one or more players. Once all players have registered acceptance, the matchmaking tickets advance to status <code>PLACING</code>, where a new game session is created for the match. </p> <p>If any player rejects the match, or if acceptances are not received before a specified timeout, the proposed match is dropped. The matchmaking tickets are then handled in one of two ways: For tickets where one or more players rejected the match or failed to respond, the ticket status is set to <code>CANCELLED</code>, and processing is terminated. For tickets where players have accepted or not yet responded, the ticket status is returned to <code>SEARCHING</code> to find a new match. A new matchmaking request for these players can be submitted as needed. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html"> FlexMatch events</a> (reference)</p>
		 * Post #X-Amz-Target=GameLift.AcceptMatch
		 * @return {AcceptMatchOutput} Success
		 */
		AcceptMatch(requestBody: AcceptMatchInput): Observable<AcceptMatchOutput> {
			return this.http.post<AcceptMatchOutput>(this.baseUri + '#X-Amz-Target=GameLift.AcceptMatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Locates an available game server and temporarily reserves it to host gameplay and players. This operation is called from a game client or client service (such as a matchmaker) to request hosting resources for a new game session. In response, Amazon GameLift FleetIQ locates an available game server, places it in <code>CLAIMED</code> status for 60 seconds, and returns connection information that players can use to connect to the game server. </p> <p>To claim a game server, identify a game server group. You can also specify a game server ID, although this approach bypasses Amazon GameLift FleetIQ placement optimization. Optionally, include game data to pass to the game server at the start of a game session, such as a game map or player information. Add filter options to further restrict how a game server is chosen, such as only allowing game servers on <code>ACTIVE</code> instances to be claimed.</p> <p>When a game server is successfully claimed, connection information is returned. A claimed game server's utilization status remains <code>AVAILABLE</code> while the claim status is set to <code>CLAIMED</code> for up to 60 seconds. This time period gives the game server time to update its status to <code>UTILIZED</code> after players join. If the game server's status is not updated within 60 seconds, the game server reverts to unclaimed status and is available to be claimed by another request. The claim time period is a fixed value and is not configurable.</p> <p>If you try to claim a specific game server, this request will fail in the following cases:</p> <ul> <li> <p>If the game server utilization status is <code>UTILIZED</code>.</p> </li> <li> <p>If the game server claim status is <code>CLAIMED</code>.</p> </li> <li> <p>If the game server is running on an instance in <code>DRAINING</code> status and the provided filter option does not allow placing on <code>DRAINING</code> instances.</p> </li> </ul> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
		 * Post #X-Amz-Target=GameLift.ClaimGameServer
		 * @return {ClaimGameServerOutput} Success
		 */
		ClaimGameServer(requestBody: ClaimGameServerInput): Observable<ClaimGameServerOutput> {
			return this.http.post<ClaimGameServerOutput>(this.baseUri + '#X-Amz-Target=GameLift.ClaimGameServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an alias for a fleet. In most situations, you can use an alias ID in place of a fleet ID. An alias provides a level of abstraction for a fleet that is useful when redirecting player traffic from one fleet to another, such as when updating your game build. </p> <p>Amazon GameLift supports two types of routing strategies for aliases: simple and terminal. A simple alias points to an active fleet. A terminal alias is used to display messaging or link to a URL instead of routing players to an active fleet. For example, you might use a terminal alias when a game version is no longer supported and you want to direct players to an upgrade site. </p> <p>To create a fleet alias, specify an alias name, routing strategy, and optional description. Each simple alias can point to only one fleet, but a fleet can have multiple aliases. If successful, a new alias record is returned, including an alias ID and an ARN. You can reassign an alias to another fleet by calling <code>UpdateAlias</code>.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.CreateAlias
		 * @return {CreateAliasOutput} Success
		 */
		CreateAlias(requestBody: CreateAliasInput): Observable<CreateAliasOutput> {
			return this.http.post<CreateAliasOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new Amazon GameLift build resource for your game server binary files. Combine game server binaries into a zip file for use with Amazon GameLift. </p> <important> <p>When setting up a new game build for Amazon GameLift, we recommend using the CLI command <b> <a href="https://docs.aws.amazon.com/cli/latest/reference/gamelift/upload-build.html">upload-build</a> </b>. This helper command combines two tasks: (1) it uploads your build files from a file directory to an Amazon GameLift Amazon S3 location, and (2) it creates a new build resource.</p> </important> <p>You can use the <code>CreateBuild</code> operation in the following scenarios:</p> <ul> <li> <p>Create a new game build with build files that are in an Amazon S3 location under an Amazon Web Services account that you control. To use this option, you give Amazon GameLift access to the Amazon S3 bucket. With permissions in place, specify a build name, operating system, and the Amazon S3 storage location of your game build.</p> </li> <li> <p>Upload your build files to a Amazon GameLift Amazon S3 location. To use this option, specify a build name and operating system. This operation creates a new build resource and also returns an Amazon S3 location with temporary access credentials. Use the credentials to manually upload your build files to the specified Amazon S3 location. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UploadingObjects.html">Uploading Objects</a> in the <i>Amazon S3 Developer Guide</i>. After you upload build files to the Amazon GameLift Amazon S3 location, you can't update them. </p> </li> </ul> <p>If successful, this operation creates a new build resource with a unique build ID and places it in <code>INITIALIZED</code> status. A build must be in <code>READY</code> status before you can create fleets with it.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html">Uploading Your Game</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in Amazon S3</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.CreateBuild
		 * @return {CreateBuildOutput} Success
		 */
		CreateBuild(requestBody: CreateBuildInput): Observable<CreateBuildOutput> {
			return this.http.post<CreateBuildOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateBuild', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a fleet of Amazon Elastic Compute Cloud (Amazon EC2) instances to host your custom game server or Realtime Servers. Use this operation to configure the computing resources for your fleet and provide instructions for running game servers on each instance.</p> <p>Most Amazon GameLift fleets can deploy instances to multiple locations, including the home Region (where the fleet is created) and an optional set of remote locations. Fleets that are created in the following Amazon Web Services Regions support multiple locations: us-east-1 (N. Virginia), us-west-2 (Oregon), eu-central-1 (Frankfurt), eu-west-1 (Ireland), ap-southeast-2 (Sydney), ap-northeast-1 (Tokyo), and ap-northeast-2 (Seoul). Fleets that are created in other Amazon GameLift Regions can deploy instances in the fleet's home Region only. All fleet instances use the same configuration regardless of location; however, you can adjust capacity settings and turn auto-scaling on/off for each location.</p> <p>To create a fleet, choose the hardware for your instances, specify a game server build or Realtime script to deploy, and provide a runtime configuration to direct Amazon GameLift how to start and run game servers on each instance in the fleet. Set permissions for inbound traffic to your game servers, and enable optional features as needed. When creating a multi-location fleet, provide a list of additional remote locations.</p> <p>If you need to debug your fleet, fetch logs, view performance metrics or other actions on the fleet, create the development fleet with port 22/3389 open. As a best practice, we recommend opening ports for remote access only when you need them and closing them when you're finished. </p> <p>If successful, this operation creates a new Fleet resource and places it in <code>NEW</code> status, which prompts Amazon GameLift to initiate the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-all.html#fleets-creation-workflow">fleet creation workflow</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html#fleets-creating-debug-creation">Debug fleet creation issues</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a> </p>
		 * Post #X-Amz-Target=GameLift.CreateFleet
		 * @return {CreateFleetOutput} Success
		 */
		CreateFleet(requestBody: CreateFleetInput): Observable<CreateFleetOutput> {
			return this.http.post<CreateFleetOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds remote locations to a fleet and begins populating the new locations with EC2 instances. The new instances conform to the fleet's instance type, auto-scaling, and other configuration settings. </p> <note> <p>This operation cannot be used with fleets that don't support remote locations. Fleets can have multiple locations only if they reside in Amazon Web Services Regions that support this feature and were created after the feature was released in March 2021.</p> </note> <p>To add fleet locations, specify the fleet to be updated and provide a list of one or more locations. </p> <p>If successful, this operation returns the list of added locations with their status set to <code>NEW</code>. Amazon GameLift initiates the process of starting an instance in each added location. You can track the status of each new location by monitoring location creation events using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html">DescribeFleetEvents</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a> </p>
		 * Post #X-Amz-Target=GameLift.CreateFleetLocations
		 * @return {CreateFleetLocationsOutput} Success
		 */
		CreateFleetLocations(requestBody: CreateFleetLocationsInput): Observable<CreateFleetLocationsOutput> {
			return this.http.post<CreateFleetLocationsOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateFleetLocations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Creates a Amazon GameLift FleetIQ game server group for managing game hosting on a collection of Amazon Elastic Compute Cloud instances for game hosting. This operation creates the game server group, creates an Auto Scaling group in your Amazon Web Services account, and establishes a link between the two groups. You can view the status of your game server groups in the Amazon GameLift console. Game server group metrics and events are emitted to Amazon CloudWatch.</p> <p>Before creating a new game server group, you must have the following: </p> <ul> <li> <p>An Amazon Elastic Compute Cloud launch template that specifies how to launch Amazon Elastic Compute Cloud instances with your game server build. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html"> Launching an Instance from a Launch Template</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. </p> </li> <li> <p>An IAM role that extends limited access to your Amazon Web Services account to allow Amazon GameLift FleetIQ to create and interact with the Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-iam-permissions-roles.html">Create IAM roles for cross-service interaction</a> in the <i>Amazon GameLift FleetIQ Developer Guide</i>.</p> </li> </ul> <p>To create a new game server group, specify a unique group name, IAM role and Amazon Elastic Compute Cloud launch template, and provide a list of instance types that can be used in the group. You must also set initial maximum and minimum limits on the group's instance count. You can optionally set an Auto Scaling policy with target tracking based on a Amazon GameLift FleetIQ metric.</p> <p>Once the game server group and corresponding Auto Scaling group are created, you have full access to change the Auto Scaling group's configuration as needed. Several properties that are set when creating a game server group, including maximum/minimum size and auto-scaling policy settings, must be updated directly in the Auto Scaling group. Keep in mind that some Auto Scaling group properties are periodically updated by Amazon GameLift FleetIQ as part of its balancing activities to optimize for availability and cost.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
		 * Post #X-Amz-Target=GameLift.CreateGameServerGroup
		 * @return {CreateGameServerGroupOutput} Success
		 */
		CreateGameServerGroup(requestBody: CreateGameServerGroupInput): Observable<CreateGameServerGroupOutput> {
			return this.http.post<CreateGameServerGroupOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateGameServerGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a multiplayer game session for players in a specific fleet location. This operation prompts an available server process to start a game session and retrieves connection information for the new game session. As an alternative, consider using the Amazon GameLift game session placement feature with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> , which uses FleetIQ algorithms and queues to optimize the placement process.</p> <p>When creating a game session, you specify exactly where you want to place it and provide a set of game session configuration settings. The fleet must be in <code>ACTIVE</code> status before a game session can be created in it. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To create a game session on an instance in a fleet's home Region, provide a fleet or alias ID along with your game session configuration. </p> </li> <li> <p>To create a game session on an instance in a fleet's remote location, provide a fleet or alias ID and a location name, along with your game session configuration. </p> </li> </ul> <p>If successful, a workflow is initiated to start a new game session. A <code>GameSession</code> object is returned containing the game session configuration and status. When the status is <code>ACTIVE</code>, game session connection information is provided and player sessions can be created for the game session. By default, newly created game sessions are open to new players. You can restrict new player access by using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html">UpdateGameSession</a> to change the game session's player session creation policy.</p> <p>Game session logs are retained for all active game sessions for 14 days. To access the logs, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetGameSessionLogUrl.html">GetGameSessionLogUrl</a> to download the log files.</p> <p> <i>Available in Amazon GameLift Local.</i> </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.CreateGameSession
		 * @return {CreateGameSessionOutput} Success
		 */
		CreateGameSession(requestBody: CreateGameSessionInput): Observable<CreateGameSessionOutput> {
			return this.http.post<CreateGameSessionOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateGameSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a placement queue that processes requests for new game sessions. A queue uses FleetIQ algorithms to determine the best placement locations and find an available game server there, then prompts the game server process to start a new game session. </p> <p>A game session queue is configured with a set of destinations (Amazon GameLift fleets or aliases), which determine the locations where the queue can place new game sessions. These destinations can span multiple fleet types (Spot and On-Demand), instance types, and Amazon Web Services Regions. If the queue includes multi-location fleets, the queue is able to place game sessions in all of a fleet's remote locations. You can opt to filter out individual locations if needed.</p> <p>The queue configuration also determines how FleetIQ selects the best available placement for a new game session. Before searching for an available game server, FleetIQ first prioritizes the queue's destinations and locations, with the best placement locations on top. You can set up the queue to use the FleetIQ default prioritization or provide an alternate set of priorities.</p> <p>To create a new queue, provide a name, timeout value, and a list of destinations. Optionally, specify a sort configuration and/or a filter, and define a set of latency cap policies. You can also include the ARN for an Amazon Simple Notification Service (SNS) topic to receive notifications of game session placement activity. Notifications using SNS or CloudWatch events is the preferred way to track placement activity.</p> <p>If successful, a new <code>GameSessionQueue</code> object is returned with an assigned queue ARN. New game session requests, which are submitted to queue with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> or <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchmaking.html">StartMatchmaking</a>, reference a queue's name or ARN. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-design.html"> Design a game session queue</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-creating.html"> Create a game session queue</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSessionQueue.html">CreateGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionQueues.html">DescribeGameSessionQueues</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSessionQueue.html">UpdateGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameSessionQueue.html">DeleteGameSessionQueue</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.CreateGameSessionQueue
		 * @return {CreateGameSessionQueueOutput} Success
		 */
		CreateGameSessionQueue(requestBody: CreateGameSessionQueueInput): Observable<CreateGameSessionQueueOutput> {
			return this.http.post<CreateGameSessionQueueOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateGameSessionQueue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a custom location for use in an Anywhere fleet.
		 * Post #X-Amz-Target=GameLift.CreateLocation
		 * @return {CreateLocationOutput} Success
		 */
		CreateLocation(requestBody: CreateLocationInput): Observable<CreateLocationOutput> {
			return this.http.post<CreateLocationOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateLocation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Defines a new matchmaking configuration for use with FlexMatch. Whether your are using FlexMatch with Amazon GameLift hosting or as a standalone matchmaking service, the matchmaking configuration sets out rules for matching players and forming teams. If you're also using Amazon GameLift hosting, it defines how to start game sessions for each match. Your matchmaking system can use multiple configurations to handle different game scenarios. All matchmaking requests identify the matchmaking configuration to use and provide player attributes consistent with that configuration. </p> <p>To create a matchmaking configuration, you must provide the following: configuration name and FlexMatch mode (with or without Amazon GameLift hosting); a rule set that specifies how to evaluate players and find acceptable matches; whether player acceptance is required; and the maximum time allowed for a matchmaking attempt. When using FlexMatch with Amazon GameLift hosting, you also need to identify the game session queue to use when starting a game session for the match.</p> <p>In addition, you must set up an Amazon Simple Notification Service topic to receive matchmaking notifications. Provide the topic ARN in the matchmaking configuration.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html"> Design a FlexMatch matchmaker</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set up FlexMatch event notification</a> </p>
		 * Post #X-Amz-Target=GameLift.CreateMatchmakingConfiguration
		 * @return {CreateMatchmakingConfigurationOutput} Success
		 */
		CreateMatchmakingConfiguration(requestBody: CreateMatchmakingConfigurationInput): Observable<CreateMatchmakingConfigurationOutput> {
			return this.http.post<CreateMatchmakingConfigurationOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateMatchmakingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new rule set for FlexMatch matchmaking. A rule set describes the type of match to create, such as the number and size of teams. It also sets the parameters for acceptable player matches, such as minimum skill level or character type.</p> <p>To create a matchmaking rule set, provide unique rule set name and the rule set body in JSON format. Rule sets must be defined in the same Region as the matchmaking configuration they are used with.</p> <p>Since matchmaking rule sets cannot be edited, it is a good idea to check the rule set syntax using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_ValidateMatchmakingRuleSet.html">ValidateMatchmakingRuleSet</a> before creating a new rule set.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html">Design a matchmaker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-intro.html">Matchmaking with FlexMatch</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.CreateMatchmakingRuleSet
		 * @return {CreateMatchmakingRuleSetOutput} Success
		 */
		CreateMatchmakingRuleSet(requestBody: CreateMatchmakingRuleSetInput): Observable<CreateMatchmakingRuleSetOutput> {
			return this.http.post<CreateMatchmakingRuleSetOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateMatchmakingRuleSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Reserves an open player slot in a game session for a player. New player sessions can be created in any game session with an open slot that is in <code>ACTIVE</code> status and has a player creation policy of <code>ACCEPT_ALL</code>. You can add a group of players to a game session with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSessions.html">CreatePlayerSessions</a> . </p> <p>To create a player session, specify a game session ID, player ID, and optionally a set of player data. </p> <p>If successful, a slot is reserved in the game session for the player and a new <code>PlayerSessions</code> object is returned with a player session ID. The player references the player session ID when sending a connection request to the game session, and the game server can use it to validate the player reservation with the Amazon GameLift service. Player sessions cannot be updated. </p> <p>The maximum number of players per game session is 200. It is not adjustable. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.CreatePlayerSession
		 * @return {CreatePlayerSessionOutput} Success
		 */
		CreatePlayerSession(requestBody: CreatePlayerSessionInput): Observable<CreatePlayerSessionOutput> {
			return this.http.post<CreatePlayerSessionOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreatePlayerSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Reserves open slots in a game session for a group of players. New player sessions can be created in any game session with an open slot that is in <code>ACTIVE</code> status and has a player creation policy of <code>ACCEPT_ALL</code>. To add a single player to a game session, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreatePlayerSession.html">CreatePlayerSession</a> </p> <p>To create player sessions, specify a game session ID and a list of player IDs. Optionally, provide a set of player data for each player ID. </p> <p>If successful, a slot is reserved in the game session for each player, and new <code>PlayerSession</code> objects are returned with player session IDs. Each player references their player session ID when sending a connection request to the game session, and the game server can use it to validate the player reservation with the Amazon GameLift service. Player sessions cannot be updated.</p> <p>The maximum number of players per game session is 200. It is not adjustable. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.CreatePlayerSessions
		 * @return {CreatePlayerSessionsOutput} Success
		 */
		CreatePlayerSessions(requestBody: CreatePlayerSessionsInput): Observable<CreatePlayerSessionsOutput> {
			return this.http.post<CreatePlayerSessionsOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreatePlayerSessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new script record for your Realtime Servers script. Realtime scripts are JavaScript that provide configuration settings and optional custom game logic for your game. The script is deployed when you create a Realtime Servers fleet to host your game sessions. Script logic is executed during an active game session. </p> <p>To create a new script record, specify a script name and provide the script file(s). The script files and all dependencies must be zipped into a single file. You can pull the zip file from either of these locations: </p> <ul> <li> <p>A locally available directory. Use the <i>ZipFile</i> parameter for this option.</p> </li> <li> <p>An Amazon Simple Storage Service (Amazon S3) bucket under your Amazon Web Services account. Use the <i>StorageLocation</i> parameter for this option. You'll need to have an Identity Access Management (IAM) role that allows the Amazon GameLift service to access your S3 bucket. </p> </li> </ul> <p>If the call is successful, a new script record is created with a unique script ID. If the script file is provided as a local file, the file is uploaded to an Amazon GameLift-owned S3 bucket and the script record's storage location reflects this location. If the script file is provided as an S3 bucket, Amazon GameLift accesses the file at this storage location as needed for deployment.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/setting-up-role.html">Set Up a Role for Amazon GameLift Access</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.CreateScript
		 * @return {CreateScriptOutput} Success
		 */
		CreateScript(requestBody: CreateScriptInput): Observable<CreateScriptOutput> {
			return this.http.post<CreateScriptOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateScript', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Requests authorization to create or delete a peer connection between the VPC for your Amazon GameLift fleet and a virtual private cloud (VPC) in your Amazon Web Services account. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. After you've received authorization, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringConnection.html">CreateVpcPeeringConnection</a> to establish the peering connection. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p> <p>You can peer with VPCs that are owned by any Amazon Web Services account you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions.</p> <p>To request authorization to create a connection, call this operation from the Amazon Web Services account with the VPC that you want to peer to your Amazon GameLift fleet. For example, to enable your game servers to retrieve data from a DynamoDB table, use the account that manages that DynamoDB resource. Identify the following values: (1) The ID of the VPC that you want to peer with, and (2) the ID of the Amazon Web Services account that you use to manage Amazon GameLift. If successful, VPC peering is authorized for the specified VPC. </p> <p>To request authorization to delete a connection, call this operation from the Amazon Web Services account with the VPC that is peered with your Amazon GameLift fleet. Identify the following values: (1) VPC ID that you want to delete the peering connection for, and (2) ID of the Amazon Web Services account that you use to manage Amazon GameLift. </p> <p>The authorization remains valid for 24 hours unless it is canceled. You must create or delete the peering connection while the authorization is valid. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.CreateVpcPeeringAuthorization
		 * @return {CreateVpcPeeringAuthorizationOutput} Success
		 */
		CreateVpcPeeringAuthorization(requestBody: CreateVpcPeeringAuthorizationInput): Observable<CreateVpcPeeringAuthorizationOutput> {
			return this.http.post<CreateVpcPeeringAuthorizationOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateVpcPeeringAuthorization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Establishes a VPC peering connection between a virtual private cloud (VPC) in an Amazon Web Services account with the VPC for your Amazon GameLift fleet. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. You can peer with VPCs in any Amazon Web Services account that you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p> <p>Before calling this operation to establish the peering connection, you first need to use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html">CreateVpcPeeringAuthorization</a> and identify the VPC you want to peer with. Once the authorization for the specified VPC is issued, you have 24 hours to establish the connection. These two operations handle all tasks necessary to peer the two VPCs, including acceptance, updating routing tables, etc. </p> <p>To establish the connection, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Identify the following values: (1) The ID of the fleet you want to be enable a VPC peering connection for; (2) The Amazon Web Services account with the VPC that you want to peer with; and (3) The ID of the VPC you want to peer with. This operation is asynchronous. If successful, a connection request is created. You can use continuous polling to track the request's status using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeVpcPeeringConnections.html">DescribeVpcPeeringConnections</a> , or by monitoring fleet events for success or failure using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html">DescribeFleetEvents</a> . </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.CreateVpcPeeringConnection
		 * @return {CreateVpcPeeringConnectionOutput} Success
		 */
		CreateVpcPeeringConnection(requestBody: CreateVpcPeeringConnectionInput): Observable<CreateVpcPeeringConnectionOutput> {
			return this.http.post<CreateVpcPeeringConnectionOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateVpcPeeringConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an alias. This operation removes all record of the alias. Game clients attempting to access a server process using the deleted alias receive an error. To delete an alias, specify the alias ID to be deleted.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.DeleteAlias
		 * @return {void} Success
		 */
		DeleteAlias(requestBody: DeleteAliasInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GameLift.DeleteAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a build. This operation permanently deletes the build resource and any uploaded build files. Deleting a build does not affect the status of any active fleets using the build, but you can no longer create new fleets with the deleted build.</p> <p>To delete a build, specify the build ID. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.DeleteBuild
		 * @return {void} Success
		 */
		DeleteBuild(requestBody: DeleteBuildInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GameLift.DeleteBuild', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes all resources and information related a fleet. Any current fleet instances, including those in remote locations, are shut down. You don't need to call <code>DeleteFleetLocations</code> separately.</p> <note> <p>If the fleet being deleted has a VPC peering connection, you first need to get a valid authorization (good for 24 hours) by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html">CreateVpcPeeringAuthorization</a>. You do not need to explicitly delete the VPC peering connection.</p> </note> <p>To delete a fleet, specify the fleet ID to be terminated. During the deletion process the fleet status is changed to <code>DELETING</code>. When completed, the status switches to <code>TERMINATED</code> and the fleet event <code>FLEET_DELETED</code> is sent.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p>
		 * Post #X-Amz-Target=GameLift.DeleteFleet
		 * @return {void} Success
		 */
		DeleteFleet(requestBody: DeleteFleetInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GameLift.DeleteFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes locations from a multi-location fleet. When deleting a location, all game server process and all instances that are still active in the location are shut down. </p> <p>To delete fleet locations, identify the fleet ID and provide a list of the locations to be deleted. </p> <p>If successful, GameLift sets the location status to <code>DELETING</code>, and begins to shut down existing server processes and terminate instances in each location being deleted. When completed, the location status changes to <code>TERMINATED</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
		 * Post #X-Amz-Target=GameLift.DeleteFleetLocations
		 * @return {DeleteFleetLocationsOutput} Success
		 */
		DeleteFleetLocations(requestBody: DeleteFleetLocationsInput): Observable<DeleteFleetLocationsOutput> {
			return this.http.post<DeleteFleetLocationsOutput>(this.baseUri + '#X-Amz-Target=GameLift.DeleteFleetLocations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Terminates a game server group and permanently deletes the game server group record. You have several options for how these resources are impacted when deleting the game server group. Depending on the type of delete operation selected, this operation might affect these resources:</p> <ul> <li> <p>The game server group</p> </li> <li> <p>The corresponding Auto Scaling group</p> </li> <li> <p>All game servers that are currently running in the group</p> </li> </ul> <p>To delete a game server group, identify the game server group to delete and specify the type of delete operation to initiate. Game server groups can only be deleted if they are in <code>ACTIVE</code> or <code>ERROR</code> status.</p> <p>If the delete request is successful, a series of operations are kicked off. The game server group status is changed to <code>DELETE_SCHEDULED</code>, which prevents new game servers from being registered and stops automatic scaling activity. Once all game servers in the game server group are deregistered, Amazon GameLift FleetIQ can begin deleting resources. If any of the delete operations fail, the game server group is placed in <code>ERROR</code> status.</p> <p>Amazon GameLift FleetIQ emits delete events to Amazon CloudWatch.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
		 * Post #X-Amz-Target=GameLift.DeleteGameServerGroup
		 * @return {DeleteGameServerGroupOutput} Success
		 */
		DeleteGameServerGroup(requestBody: DeleteGameServerGroupInput): Observable<DeleteGameServerGroupOutput> {
			return this.http.post<DeleteGameServerGroupOutput>(this.baseUri + '#X-Amz-Target=GameLift.DeleteGameServerGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a game session queue. Once a queue is successfully deleted, unfulfilled <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> requests that reference the queue will fail. To delete a queue, specify the queue name.
		 * Post #X-Amz-Target=GameLift.DeleteGameSessionQueue
		 * @return {DeleteGameSessionQueueOutput} Success
		 */
		DeleteGameSessionQueue(requestBody: DeleteGameSessionQueueInput): Observable<DeleteGameSessionQueueOutput> {
			return this.http.post<DeleteGameSessionQueueOutput>(this.baseUri + '#X-Amz-Target=GameLift.DeleteGameSessionQueue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a custom location.</p> <p>Before deleting a custom location, review any fleets currently using the custom location and deregister the location if it is in use. For more information see, <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeregisterCompute.html">DeregisterCompute</a>.</p>
		 * Post #X-Amz-Target=GameLift.DeleteLocation
		 * @return {DeleteLocationOutput} Success
		 */
		DeleteLocation(requestBody: DeleteLocationInput): Observable<DeleteLocationOutput> {
			return this.http.post<DeleteLocationOutput>(this.baseUri + '#X-Amz-Target=GameLift.DeleteLocation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Permanently removes a FlexMatch matchmaking configuration. To delete, specify the configuration name. A matchmaking configuration cannot be deleted if it is being used in any active matchmaking tickets.
		 * Post #X-Amz-Target=GameLift.DeleteMatchmakingConfiguration
		 * @return {DeleteMatchmakingConfigurationOutput} Success
		 */
		DeleteMatchmakingConfiguration(requestBody: DeleteMatchmakingConfigurationInput): Observable<DeleteMatchmakingConfigurationOutput> {
			return this.http.post<DeleteMatchmakingConfigurationOutput>(this.baseUri + '#X-Amz-Target=GameLift.DeleteMatchmakingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an existing matchmaking rule set. To delete the rule set, provide the rule set name. Rule sets cannot be deleted if they are currently being used by a matchmaking configuration. </p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DeleteMatchmakingRuleSet
		 * @return {DeleteMatchmakingRuleSetOutput} Success
		 */
		DeleteMatchmakingRuleSet(requestBody: DeleteMatchmakingRuleSetInput): Observable<DeleteMatchmakingRuleSetOutput> {
			return this.http.post<DeleteMatchmakingRuleSetOutput>(this.baseUri + '#X-Amz-Target=GameLift.DeleteMatchmakingRuleSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a fleet scaling policy. Once deleted, the policy is no longer in force and Amazon GameLift removes all record of it. To delete a scaling policy, specify both the scaling policy name and the fleet ID it is associated with.</p> <p>To temporarily suspend scaling policies, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html">StopFleetActions</a>. This operation suspends all policies for the fleet.</p>
		 * Post #X-Amz-Target=GameLift.DeleteScalingPolicy
		 * @return {void} Success
		 */
		DeleteScalingPolicy(requestBody: DeleteScalingPolicyInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GameLift.DeleteScalingPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a Realtime script. This operation permanently deletes the script record. If script files were uploaded, they are also deleted (files stored in an S3 bucket are not deleted). </p> <p>To delete a script, specify the script ID. Before deleting a script, be sure to terminate all fleets that are deployed with the script being deleted. Fleet instances periodically check for script updates, and if the script record no longer exists, the instance will go into an error state and be unable to host game sessions.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.DeleteScript
		 * @return {void} Success
		 */
		DeleteScript(requestBody: DeleteScriptInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GameLift.DeleteScript', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Cancels a pending VPC peering authorization for the specified VPC. If you need to delete an existing VPC peering connection, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteVpcPeeringConnection.html">DeleteVpcPeeringConnection</a>.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization
		 * @return {DeleteVpcPeeringAuthorizationOutput} Success
		 */
		DeleteVpcPeeringAuthorization(requestBody: DeleteVpcPeeringAuthorizationInput): Observable<DeleteVpcPeeringAuthorizationOutput> {
			return this.http.post<DeleteVpcPeeringAuthorizationOutput>(this.baseUri + '#X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes a VPC peering connection. To delete the connection, you must have a valid authorization for the VPC peering connection that you want to delete.. </p> <p>Once a valid authorization exists, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Identify the connection to delete by the connection ID and fleet ID. If successful, the connection is removed. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.DeleteVpcPeeringConnection
		 * @return {DeleteVpcPeeringConnectionOutput} Success
		 */
		DeleteVpcPeeringConnection(requestBody: DeleteVpcPeeringConnectionInput): Observable<DeleteVpcPeeringConnectionOutput> {
			return this.http.post<DeleteVpcPeeringConnectionOutput>(this.baseUri + '#X-Amz-Target=GameLift.DeleteVpcPeeringConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a compute resource from the specified fleet. Deregister your compute resources before you delete the compute.
		 * Post #X-Amz-Target=GameLift.DeregisterCompute
		 * @return {DeregisterComputeOutput} Success
		 */
		DeregisterCompute(requestBody: DeregisterComputeInput): Observable<DeregisterComputeOutput> {
			return this.http.post<DeregisterComputeOutput>(this.baseUri + '#X-Amz-Target=GameLift.DeregisterCompute', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Removes the game server from a game server group. As a result of this operation, the deregistered game server can no longer be claimed and will not be returned in a list of active game servers. </p> <p>To deregister a game server, specify the game server group and game server ID. If successful, this operation emits a CloudWatch event with termination timestamp and reason.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
		 * Post #X-Amz-Target=GameLift.DeregisterGameServer
		 * @return {void} Success
		 */
		DeregisterGameServer(requestBody: DeregisterGameServerInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GameLift.DeregisterGameServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves properties for an alias. This operation returns all alias metadata and settings. To get an alias's target fleet ID only, use <code>ResolveAlias</code>. </p> <p>To get alias properties, specify the alias ID. If successful, the requested alias record is returned.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeAlias
		 * @return {DescribeAliasOutput} Success
		 */
		DescribeAlias(requestBody: DescribeAliasInput): Observable<DescribeAliasOutput> {
			return this.http.post<DescribeAliasOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves properties for a custom game build. To request a build resource, specify a build ID. If successful, an object containing the build properties is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeBuild
		 * @return {DescribeBuildOutput} Success
		 */
		DescribeBuild(requestBody: DescribeBuildInput): Observable<DescribeBuildOutput> {
			return this.http.post<DescribeBuildOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeBuild', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves properties for a compute resource. To request a compute resource specify the fleet ID and compute name. If successful, Amazon GameLift returns an object containing the build properties.
		 * Post #X-Amz-Target=GameLift.DescribeCompute
		 * @return {DescribeComputeOutput} Success
		 */
		DescribeCompute(requestBody: DescribeComputeInput): Observable<DescribeComputeOutput> {
			return this.http.post<DescribeComputeOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeCompute', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the instance limits and current utilization for an Amazon Web Services Region or location. Instance limits control the number of instances, per instance type, per location, that your Amazon Web Services account can use. Learn more at <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>. The information returned includes the maximum number of instances allowed and your account's current usage across all fleets. This information can affect your ability to scale your Amazon GameLift fleets. You can request a limit increase for your account by using the <b>Service limits</b> page in the Amazon GameLift console.</p> <p>Instance limits differ based on whether the instances are deployed in a fleet's home Region or in a remote location. For remote locations, limits also differ based on the combination of home Region and remote location. All requests must specify an Amazon Web Services Region (either explicitly or as your default settings). To get the limit for a remote location, you must also specify the location. For example, the following requests all return different results: </p> <ul> <li> <p>Request specifies the Region <code>ap-northeast-1</code> with no location. The result is limits and usage data on all instance types that are deployed in <code>us-east-2</code>, by all of the fleets that reside in <code>ap-northeast-1</code>. </p> </li> <li> <p>Request specifies the Region <code>us-east-1</code> with location <code>ca-central-1</code>. The result is limits and usage data on all instance types that are deployed in <code>ca-central-1</code>, by all of the fleets that reside in <code>us-east-2</code>. These limits do not affect fleets in any other Regions that deploy instances to <code>ca-central-1</code>.</p> </li> <li> <p>Request specifies the Region <code>eu-west-1</code> with location <code>ca-central-1</code>. The result is limits and usage data on all instance types that are deployed in <code>ca-central-1</code>, by all of the fleets that reside in <code>eu-west-1</code>.</p> </li> </ul> <p>This operation can be used in the following ways:</p> <ul> <li> <p>To get limit and usage data for all instance types that are deployed in an Amazon Web Services Region by fleets that reside in the same Region: Specify the Region only. Optionally, specify a single instance type to retrieve information for.</p> </li> <li> <p>To get limit and usage data for all instance types that are deployed to a remote location by fleets that reside in different Amazon Web Services Region: Provide both the Amazon Web Services Region and the remote location. Optionally, specify a single instance type to retrieve information for.</p> </li> </ul> <p>If successful, an <code>EC2InstanceLimits</code> object is returned with limits and usage data for each requested instance type.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeEC2InstanceLimits
		 * @return {DescribeEC2InstanceLimitsOutput} Success
		 */
		DescribeEC2InstanceLimits(requestBody: DescribeEC2InstanceLimitsInput): Observable<DescribeEC2InstanceLimitsOutput> {
			return this.http.post<DescribeEC2InstanceLimitsOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeEC2InstanceLimits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves core fleet-wide properties, including the computing hardware and deployment configuration for all instances in the fleet.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get attributes for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get attributes for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting attributes for multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>FleetAttributes</code> object is returned for each fleet requested, unless the fleet identifier is not found. </p> <note> <p>Some API operations limit the number of fleet IDs that allowed in one request. If a request exceeds this limit, the request fails and the error message contains the maximum allowed number.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeFleetAttributes
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeFleetAttributesOutput} Success
		 */
		DescribeFleetAttributes(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeFleetAttributesInput): Observable<DescribeFleetAttributesOutput> {
			return this.http.post<DescribeFleetAttributesOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeFleetAttributes?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the resource capacity settings for one or more fleets. The data returned includes the current fleet capacity (number of EC2 instances), and settings that can control how capacity scaling. For fleets with remote locations, this operation retrieves data for the fleet's home Region only.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get capacity data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get capacity data for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>FleetCapacity</code> object is returned for each requested fleet ID. Each FleetCapacity object includes a <code>Location</code> property, which is set to the fleet's home Region. When a list of fleet IDs is provided, attribute objects are returned only for fleets that currently exist.</p> <note> <p>Some API operations may limit the number of fleet IDs that are allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeFleetCapacity
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeFleetCapacityOutput} Success
		 */
		DescribeFleetCapacity(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeFleetCapacityInput): Observable<DescribeFleetCapacityOutput> {
			return this.http.post<DescribeFleetCapacityOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeFleetCapacity?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves entries from a fleet's event log. Fleet events are initiated by changes in status, such as during fleet creation and termination, changes in capacity, etc. If a fleet has multiple locations, events are also initiated by changes to status and capacity in remote locations. </p> <p>You can specify a time range to limit the result set. Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a collection of event log entries matching the request are returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeFleetEvents
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeFleetEventsOutput} Success
		 */
		DescribeFleetEvents(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeFleetEventsInput): Observable<DescribeFleetEventsOutput> {
			return this.http.post<DescribeFleetEventsOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeFleetEvents?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves information on a fleet's remote locations, including life-cycle status and any suspended fleet activity. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get data for specific locations, provide a fleet identifier and a list of locations. Location data is returned in the order that it is requested. </p> </li> <li> <p>To get data for all locations, provide a fleet identifier only. Location data is returned in no particular order. </p> </li> </ul> <p>When requesting attributes for multiple locations, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>LocationAttributes</code> object is returned for each requested location. If the fleet does not have a requested location, no information is returned. This operation does not return the home Region. To get information on a fleet's home Region, call <code>DescribeFleetAttributes</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeFleetLocationAttributes
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeFleetLocationAttributesOutput} Success
		 */
		DescribeFleetLocationAttributes(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeFleetLocationAttributesInput): Observable<DescribeFleetLocationAttributesOutput> {
			return this.http.post<DescribeFleetLocationAttributesOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeFleetLocationAttributes?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the resource capacity settings for a fleet location. The data returned includes the current capacity (number of EC2 instances) and some scaling settings for the requested fleet location. Use this operation to retrieve capacity information for a fleet's remote location or home Region (you can also retrieve home Region capacity by calling <code>DescribeFleetCapacity</code>).</p> <p>To retrieve capacity data, identify a fleet and location. </p> <p>If successful, a <code>FleetCapacity</code> object is returned for the requested fleet location. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeFleetLocationCapacity
		 * @return {DescribeFleetLocationCapacityOutput} Success
		 */
		DescribeFleetLocationCapacity(requestBody: DescribeFleetLocationCapacityInput): Observable<DescribeFleetLocationCapacityOutput> {
			return this.http.post<DescribeFleetLocationCapacityOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeFleetLocationCapacity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves current usage data for a fleet location. Utilization data provides a snapshot of current game hosting activity at the requested location. Use this operation to retrieve utilization information for a fleet's remote location or home Region (you can also retrieve home Region utilization by calling <code>DescribeFleetUtilization</code>).</p> <p>To retrieve utilization data, identify a fleet and location. </p> <p>If successful, a <code>FleetUtilization</code> object is returned for the requested fleet location. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift metrics for fleets</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeFleetLocationUtilization
		 * @return {DescribeFleetLocationUtilizationOutput} Success
		 */
		DescribeFleetLocationUtilization(requestBody: DescribeFleetLocationUtilizationInput): Observable<DescribeFleetLocationUtilizationOutput> {
			return this.http.post<DescribeFleetLocationUtilizationOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeFleetLocationUtilization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a fleet's inbound connection permissions. Connection permissions specify the range of IP addresses and port settings that incoming traffic can use to access server processes in the fleet. Game sessions that are running on instances in the fleet must use connections that fall in this range.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve the inbound connection permissions for a fleet, identify the fleet's unique identifier. </p> </li> <li> <p>To check the status of recent updates to a fleet remote location, specify the fleet ID and a location. Port setting updates can take time to propagate across all locations. </p> </li> </ul> <p>If successful, a set of <code>IpPermission</code> objects is returned for the requested fleet ID. When a location is specified, a pending status is included. If the requested fleet has been deleted, the result set is empty.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeFleetPortSettings
		 * @return {DescribeFleetPortSettingsOutput} Success
		 */
		DescribeFleetPortSettings(requestBody: DescribeFleetPortSettingsInput): Observable<DescribeFleetPortSettingsOutput> {
			return this.http.post<DescribeFleetPortSettingsOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeFleetPortSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves utilization statistics for one or more fleets. Utilization data provides a snapshot of how the fleet's hosting resources are currently being used. For fleets with remote locations, this operation retrieves data for the fleet's home Region only. See <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationUtilization.html">DescribeFleetLocationUtilization</a> to get utilization statistics for a fleet's remote locations.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get utilization data for one or more specific fleets, provide a list of fleet IDs or fleet ARNs. </p> </li> <li> <p>To get utilization data for all fleets, do not provide a fleet identifier. </p> </li> </ul> <p>When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_FleetUtilization.html">FleetUtilization</a> object is returned for each requested fleet ID, unless the fleet identifier is not found. Each fleet utilization object includes a <code>Location</code> property, which is set to the fleet's home Region. </p> <note> <p>Some API operations may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift Metrics for Fleets</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeFleetUtilization
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeFleetUtilizationOutput} Success
		 */
		DescribeFleetUtilization(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeFleetUtilizationInput): Observable<DescribeFleetUtilizationOutput> {
			return this.http.post<DescribeFleetUtilizationOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeFleetUtilization?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information for a registered game server. Information includes game server status, health check info, and the instance that the game server is running on. </p> <p>To retrieve game server information, specify the game server ID. If successful, the requested game server object is returned. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeGameServer
		 * @return {DescribeGameServerOutput} Success
		 */
		DescribeGameServer(requestBody: DescribeGameServerInput): Observable<DescribeGameServerOutput> {
			return this.http.post<DescribeGameServerOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeGameServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information on a game server group. This operation returns only properties related to Amazon GameLift FleetIQ. To view or update properties for the corresponding Auto Scaling group, such as launch template, auto scaling policies, and maximum/minimum group size, access the Auto Scaling group directly.</p> <p>To get attributes for a game server group, provide a group name or ARN value. If successful, a <code>GameServerGroup</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeGameServerGroup
		 * @return {DescribeGameServerGroupOutput} Success
		 */
		DescribeGameServerGroup(requestBody: DescribeGameServerGroupInput): Observable<DescribeGameServerGroupOutput> {
			return this.http.post<DescribeGameServerGroupOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeGameServerGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves status information about the Amazon EC2 instances associated with a Amazon GameLift FleetIQ game server group. Use this operation to detect when instances are active or not available to host new game servers.</p> <p>To request status for all instances in the game server group, provide a game server group ID only. To request status for specific instances, provide the game server group ID and one or more instance IDs. Use the pagination parameters to retrieve results in sequential segments. If successful, a collection of <code>GameServerInstance</code> objects is returned. </p> <p>This operation is not designed to be called with every game server claim request; this practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, cache the results and refresh your cache no more than once every 10 seconds.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeGameServerInstances
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeGameServerInstancesOutput} Success
		 */
		DescribeGameServerInstances(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeGameServerInstancesInput): Observable<DescribeGameServerInstancesOutput> {
			return this.http.post<DescribeGameServerInstancesOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeGameServerInstances?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves additional game session properties, including the game session protection policy in force, a set of one or more game sessions in a specific fleet location. You can optionally filter the results by current game session status.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve details for all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID, with an optional status filter. This approach returns details from the fleet's home Region and all remote locations.</p> </li> <li> <p>To retrieve details for all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name, with optional status filter. The location can be the fleet's home Region or any remote location.</p> </li> <li> <p>To retrieve details for a specific game session, provide the game session ID. This approach looks for the game session ID in all fleets that reside in the Amazon Web Services Region defined in the request.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSessionDetail</code> object is returned for each game session that matches the request.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-find">Find a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeGameSessionDetails
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeGameSessionDetailsOutput} Success
		 */
		DescribeGameSessionDetails(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeGameSessionDetailsInput): Observable<DescribeGameSessionDetailsOutput> {
			return this.http.post<DescribeGameSessionDetailsOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeGameSessionDetails?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves information, including current status, about a game session placement request. </p> <p>To get game session placement details, specify the placement ID.</p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling with <code>DescribeGameSessionPlacement</code> should only be used for games in development with low game session usage. </p>
		 * Post #X-Amz-Target=GameLift.DescribeGameSessionPlacement
		 * @return {DescribeGameSessionPlacementOutput} Success
		 */
		DescribeGameSessionPlacement(requestBody: DescribeGameSessionPlacementInput): Observable<DescribeGameSessionPlacementOutput> {
			return this.http.post<DescribeGameSessionPlacementOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeGameSessionPlacement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the properties for one or more game session queues. When requesting multiple queues, use the pagination parameters to retrieve results as a set of sequential pages. When specifying a list of queues, objects are returned only for queues that currently exist in the Region.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-console.html"> View Your Queues</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeGameSessionQueues
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeGameSessionQueuesOutput} Success
		 */
		DescribeGameSessionQueues(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeGameSessionQueuesInput): Observable<DescribeGameSessionQueuesOutput> {
			return this.http.post<DescribeGameSessionQueuesOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeGameSessionQueues?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a set of one or more game sessions in a specific fleet location. You can optionally filter the results by current game session status.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To retrieve all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID, with an optional status filter. This approach returns all game sessions in the fleet's home Region and all remote locations.</p> </li> <li> <p>To retrieve all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name, with optional status filter. The location can be the fleet's home Region or any remote location.</p> </li> <li> <p>To retrieve a specific game session, provide the game session ID. This approach looks for the game session ID in all fleets that reside in the Amazon Web Services Region defined in the request.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSession</code> object is returned for each game session that matches the request.</p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling with <code>DescribeGameSessions</code> should only be used for games in development with low game session usage. </p> <p> <i>Available in Amazon GameLift Local.</i> </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-find">Find a game session</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeGameSessions
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeGameSessionsOutput} Success
		 */
		DescribeGameSessions(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeGameSessionsInput): Observable<DescribeGameSessionsOutput> {
			return this.http.post<DescribeGameSessionsOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeGameSessions?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves information about a fleet's instances, including instance IDs, connection data, and status. </p> <p>This operation can be used in the following ways:</p> <ul> <li> <p>To get information on all instances that are deployed to a fleet's home Region, provide the fleet ID.</p> </li> <li> <p>To get information on all instances that are deployed to a fleet's remote location, provide the fleet ID and location name.</p> </li> <li> <p>To get information on a specific instance in a fleet, provide the fleet ID and instance ID.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, an <code>Instance</code> object is returned for each requested instance. Instances are not returned in any particular order. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeInstances
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeInstancesOutput} Success
		 */
		DescribeInstances(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeInstancesInput): Observable<DescribeInstancesOutput> {
			return this.http.post<DescribeInstancesOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeInstances?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves one or more matchmaking tickets. Use this operation to retrieve ticket information, including--after a successful match is made--connection information for the resulting new game session. </p> <p>To request matchmaking tickets, provide a list of up to 10 ticket IDs. If the request is successful, a ticket object is returned for each requested ID that currently exists.</p> <p>This operation is not designed to be continually called to track matchmaking ticket status. This practice can cause you to exceed your API limit, which results in errors. Instead, as a best practice, set up an Amazon Simple Notification Service to receive notifications, and provide the topic ARN in the matchmaking configuration.</p> <p/> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set Up FlexMatch event notification</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeMatchmaking
		 * @return {DescribeMatchmakingOutput} Success
		 */
		DescribeMatchmaking(requestBody: DescribeMatchmakingInput): Observable<DescribeMatchmakingOutput> {
			return this.http.post<DescribeMatchmakingOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeMatchmaking', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the details of FlexMatch matchmaking configurations. </p> <p>This operation offers the following options: (1) retrieve all matchmaking configurations, (2) retrieve configurations for a specified list, or (3) retrieve all configurations that use a specified rule set name. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a configuration is returned for each requested name. When specifying a list of names, only configurations that currently exist are returned. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/matchmaker-build.html"> Setting up FlexMatch matchmakers</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeMatchmakingConfigurations
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeMatchmakingConfigurationsOutput} Success
		 */
		DescribeMatchmakingConfigurations(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeMatchmakingConfigurationsInput): Observable<DescribeMatchmakingConfigurationsOutput> {
			return this.http.post<DescribeMatchmakingConfigurationsOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeMatchmakingConfigurations?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the details for FlexMatch matchmaking rule sets. You can request all existing rule sets for the Region, or provide a list of one or more rule set names. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a rule set is returned for each requested name. </p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeMatchmakingRuleSets
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeMatchmakingRuleSetsOutput} Success
		 */
		DescribeMatchmakingRuleSets(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeMatchmakingRuleSetsInput): Observable<DescribeMatchmakingRuleSetsOutput> {
			return this.http.post<DescribeMatchmakingRuleSetsOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeMatchmakingRuleSets?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves properties for one or more player sessions. </p> <p>This action can be used in the following ways: </p> <ul> <li> <p>To retrieve a specific player session, provide the player session ID only.</p> </li> <li> <p>To retrieve all player sessions in a game session, provide the game session ID only.</p> </li> <li> <p>To retrieve all player sessions for a specific player, provide a player ID only.</p> </li> </ul> <p>To request player sessions, specify either a player session ID, game session ID, or player ID. You can filter this request by player session status. Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>PlayerSession</code> object is returned for each session that matches the request.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribePlayerSessions
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribePlayerSessionsOutput} Success
		 */
		DescribePlayerSessions(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribePlayerSessionsInput): Observable<DescribePlayerSessionsOutput> {
			return this.http.post<DescribePlayerSessionsOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribePlayerSessions?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a fleet's runtime configuration settings. The runtime configuration tells Amazon GameLift which server processes to run (and how) on each instance in the fleet.</p> <p>To get the runtime configuration that is currently in forces for a fleet, provide the fleet ID. </p> <p>If successful, a <code>RuntimeConfiguration</code> object is returned for the requested fleet. If the requested fleet has been deleted, the result set is empty.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html">Running multiple processes on a fleet</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeRuntimeConfiguration
		 * @return {DescribeRuntimeConfigurationOutput} Success
		 */
		DescribeRuntimeConfiguration(requestBody: DescribeRuntimeConfigurationInput): Observable<DescribeRuntimeConfigurationOutput> {
			return this.http.post<DescribeRuntimeConfigurationOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeRuntimeConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves all scaling policies applied to a fleet.</p> <p>To get a fleet's scaling policies, specify the fleet ID. You can filter this request by policy status, such as to retrieve only active scaling policies. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, set of <code>ScalingPolicy</code> objects is returned for the fleet.</p> <p>A fleet may have all of its scaling policies suspended. This operation does not affect the status of the scaling policies, which remains ACTIVE.</p>
		 * Post #X-Amz-Target=GameLift.DescribeScalingPolicies
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeScalingPoliciesOutput} Success
		 */
		DescribeScalingPolicies(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeScalingPoliciesInput): Observable<DescribeScalingPoliciesOutput> {
			return this.http.post<DescribeScalingPoliciesOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeScalingPolicies?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves properties for a Realtime script. </p> <p>To request a script record, specify the script ID. If successful, an object containing the script properties is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeScript
		 * @return {DescribeScriptOutput} Success
		 */
		DescribeScript(requestBody: DescribeScriptInput): Observable<DescribeScriptOutput> {
			return this.http.post<DescribeScriptOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeScript', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves valid VPC peering authorizations that are pending for the Amazon Web Services account. This operation returns all VPC peering authorizations and requests for peering. This includes those initiated and received by this account. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations
		 * @return {DescribeVpcPeeringAuthorizationsOutput} Success
		 */
		DescribeVpcPeeringAuthorizations(requestBody: DescribeVpcPeeringAuthorizationsInput): Observable<DescribeVpcPeeringAuthorizationsOutput> {
			return this.http.post<DescribeVpcPeeringAuthorizationsOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves information on VPC peering connections. Use this operation to get peering information for all fleets or for one specific fleet ID. </p> <p>To retrieve connection information, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift fleets. Specify a fleet ID or leave the parameter empty to retrieve all connection records. If successful, the retrieved information includes both active and pending connections. Active connections identify the IpV4 CIDR block that the VPC uses to connect. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.DescribeVpcPeeringConnections
		 * @return {DescribeVpcPeeringConnectionsOutput} Success
		 */
		DescribeVpcPeeringConnections(requestBody: DescribeVpcPeeringConnectionsInput): Observable<DescribeVpcPeeringConnectionsOutput> {
			return this.http.post<DescribeVpcPeeringConnectionsOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeVpcPeeringConnections', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Requests remote access to a fleet instance. Remote access is useful for debugging, gathering benchmarking data, or observing activity in real time. </p> <p>To remotely access an instance, you need credentials that match the operating system of the instance. For a Windows instance, Amazon GameLift returns a user name and password as strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA private key, also as strings, for use with an SSH client. The private key must be saved in the proper format to a <code>.pem</code> file before using. If you're making this request using the CLI, saving the secret can be handled as part of the <code>GetInstanceAccess</code> request, as shown in one of the examples for this operation. </p> <p>To request access to a specific instance, specify the IDs of both the instance and the fleet it belongs to.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p>
		 * Post #X-Amz-Target=GameLift.GetComputeAccess
		 * @return {GetComputeAccessOutput} Success
		 */
		GetComputeAccess(requestBody: GetComputeAccessInput): Observable<GetComputeAccessOutput> {
			return this.http.post<GetComputeAccessOutput>(this.baseUri + '#X-Amz-Target=GameLift.GetComputeAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Requests an authentication token from Amazon GameLift. The authentication token is used by your game server to authenticate with Amazon GameLift. Each authentication token has an expiration time. To continue using the compute resource to host your game server, regularly retrieve a new authorization token.
		 * Post #X-Amz-Target=GameLift.GetComputeAuthToken
		 * @return {GetComputeAuthTokenOutput} Success
		 */
		GetComputeAuthToken(requestBody: GetComputeAuthTokenInput): Observable<GetComputeAuthTokenOutput> {
			return this.http.post<GetComputeAuthTokenOutput>(this.baseUri + '#X-Amz-Target=GameLift.GetComputeAuthToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the location of stored game session logs for a specified game session on Amazon GameLift managed fleets. When a game session is terminated, Amazon GameLift automatically stores the logs in Amazon S3 and retains them for 14 days. Use this URL to download the logs.</p> <note> <p>See the <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_gamelift">Amazon Web Services Service Limits</a> page for maximum log file sizes. Log files that exceed this limit are not saved.</p> </note> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.GetGameSessionLogUrl
		 * @return {GetGameSessionLogUrlOutput} Success
		 */
		GetGameSessionLogUrl(requestBody: GetGameSessionLogUrlInput): Observable<GetGameSessionLogUrlOutput> {
			return this.http.post<GetGameSessionLogUrlOutput>(this.baseUri + '#X-Amz-Target=GameLift.GetGameSessionLogUrl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Requests remote access to a fleet instance. Remote access is useful for debugging, gathering benchmarking data, or observing activity in real time. </p> <p>To remotely access an instance, you need credentials that match the operating system of the instance. For a Windows instance, Amazon GameLift returns a user name and password as strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA private key, also as strings, for use with an SSH client. The private key must be saved in the proper format to a <code>.pem</code> file before using. If you're making this request using the CLI, saving the secret can be handled as part of the <code>GetInstanceAccess</code> request, as shown in one of the examples for this operation. </p> <p>To request access to a specific instance, specify the IDs of both the instance and the fleet it belongs to. You can retrieve a fleet's instance IDs by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeInstances.html">DescribeInstances</a>. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.GetInstanceAccess
		 * @return {GetInstanceAccessOutput} Success
		 */
		GetInstanceAccess(requestBody: GetInstanceAccessInput): Observable<GetInstanceAccessOutput> {
			return this.http.post<GetInstanceAccessOutput>(this.baseUri + '#X-Amz-Target=GameLift.GetInstanceAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves all aliases for this Amazon Web Services account. You can filter the result set by alias name and/or routing strategy type. Use the pagination parameters to retrieve results in sequential pages.</p> <note> <p>Returned aliases are not listed in any particular order.</p> </note> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.ListAliases
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAliasesOutput} Success
		 */
		ListAliases(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAliasesInput): Observable<ListAliasesOutput> {
			return this.http.post<ListAliasesOutput>(this.baseUri + '#X-Amz-Target=GameLift.ListAliases?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves build resources for all builds associated with the Amazon Web Services account in use. You can limit results to builds that are in a specific status by using the <code>Status</code> parameter. Use the pagination parameters to retrieve results in a set of sequential pages. </p> <note> <p>Build resources are not listed in any particular order.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.ListBuilds
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBuildsOutput} Success
		 */
		ListBuilds(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: ListBuildsInput): Observable<ListBuildsOutput> {
			return this.http.post<ListBuildsOutput>(this.baseUri + '#X-Amz-Target=GameLift.ListBuilds?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves all compute resources registered to a fleet in your Amazon Web Services account. You can filter the result set by location.
		 * Post #X-Amz-Target=GameLift.ListCompute
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListComputeOutput} Success
		 */
		ListCompute(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: ListComputeInput): Observable<ListComputeOutput> {
			return this.http.post<ListComputeOutput>(this.baseUri + '#X-Amz-Target=GameLift.ListCompute?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a collection of fleet resources in an Amazon Web Services Region. You can call this operation to get fleets in a previously selected default Region (see <a href="https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-region.html">https://docs.aws.amazon.com/credref/latest/refdocs/setting-global-region.html</a>or specify a Region in your request. You can filter the result set to find only those fleets that are deployed with a specific build or script. For fleets that have multiple locations, this operation retrieves fleets based on their home Region only.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To get a list of all fleets in a Region, don't provide a build or script identifier. </p> </li> <li> <p>To get a list of all fleets where a specific custom game build is deployed, provide the build ID.</p> </li> <li> <p>To get a list of all Realtime Servers fleets with a specific configuration script, provide the script ID. </p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a list of fleet IDs that match the request parameters is returned. A NextToken value is also returned if there are more result pages to retrieve.</p> <note> <p>Fleet resources are not listed in a particular order.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
		 * Post #X-Amz-Target=GameLift.ListFleets
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFleetsOutput} Success
		 */
		ListFleets(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFleetsInput): Observable<ListFleetsOutput> {
			return this.http.post<ListFleetsOutput>(this.baseUri + '#X-Amz-Target=GameLift.ListFleets?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists a game server groups.
		 * Post #X-Amz-Target=GameLift.ListGameServerGroups
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGameServerGroupsOutput} Success
		 */
		ListGameServerGroups(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGameServerGroupsInput): Observable<ListGameServerGroupsOutput> {
			return this.http.post<ListGameServerGroupsOutput>(this.baseUri + '#X-Amz-Target=GameLift.ListGameServerGroups?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Retrieves information on all game servers that are currently active in a specified game server group. You can opt to sort the list by game server age. Use the pagination parameters to retrieve results in a set of sequential segments. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
		 * Post #X-Amz-Target=GameLift.ListGameServers
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGameServersOutput} Success
		 */
		ListGameServers(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGameServersInput): Observable<ListGameServersOutput> {
			return this.http.post<ListGameServersOutput>(this.baseUri + '#X-Amz-Target=GameLift.ListGameServers?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all custom and Amazon Web Services locations.
		 * Post #X-Amz-Target=GameLift.ListLocations
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLocationsOutput} Success
		 */
		ListLocations(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: ListLocationsInput): Observable<ListLocationsOutput> {
			return this.http.post<ListLocationsOutput>(this.baseUri + '#X-Amz-Target=GameLift.ListLocations?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves script records for all Realtime scripts that are associated with the Amazon Web Services account in use. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.ListScripts
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListScriptsOutput} Success
		 */
		ListScripts(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: ListScriptsInput): Observable<ListScriptsOutput> {
			return this.http.post<ListScriptsOutput>(this.baseUri + '#X-Amz-Target=GameLift.ListScripts?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves all tags assigned to a Amazon GameLift resource. Use resource tags to organize Amazon Web Services resources for a range of purposes. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To list tags for a resource, specify the unique ARN value for the resource.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=GameLift.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates a scaling policy for a fleet. Scaling policies are used to automatically scale a fleet's hosting capacity to meet player demand. An active scaling policy instructs Amazon GameLift to track a fleet metric and automatically change the fleet's capacity when a certain threshold is reached. There are two types of scaling policies: target-based and rule-based. Use a target-based policy to quickly and efficiently manage fleet scaling; this option is the most commonly used. Use rule-based policies when you need to exert fine-grained control over auto-scaling. </p> <p>Fleets can have multiple scaling policies of each type in force at the same time; you can have one target-based policy, one or multiple rule-based scaling policies, or both. We recommend caution, however, because multiple auto-scaling policies can have unintended consequences.</p> <p>Learn more about how to work with auto-scaling in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-autoscaling.html">Set Up Fleet Automatic Scaling</a>.</p> <p> <b>Target-based policy</b> </p> <p>A target-based policy tracks a single metric: PercentAvailableGameSessions. This metric tells us how much of a fleet's hosting capacity is ready to host game sessions but is not currently in use. This is the fleet's buffer; it measures the additional player demand that the fleet could handle at current capacity. With a target-based policy, you set your ideal buffer size and leave it to Amazon GameLift to take whatever action is needed to maintain that target. </p> <p>For example, you might choose to maintain a 10% buffer for a fleet that has the capacity to host 100 simultaneous game sessions. This policy tells Amazon GameLift to take action whenever the fleet's available capacity falls below or rises above 10 game sessions. Amazon GameLift will start new instances or stop unused instances in order to return to the 10% buffer. </p> <p>To create or update a target-based policy, specify a fleet ID and name, and set the policy type to "TargetBased". Specify the metric to track (PercentAvailableGameSessions) and reference a <code>TargetConfiguration</code> object with your desired buffer value. Exclude all other parameters. On a successful request, the policy name is returned. The scaling policy is automatically in force as soon as it's successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.</p> <p> <b>Rule-based policy</b> </p> <p>A rule-based policy tracks specified fleet metric, sets a threshold value, and specifies the type of action to initiate when triggered. With a rule-based policy, you can select from several available fleet metrics. Each policy specifies whether to scale up or scale down (and by how much), so you need one policy for each type of action. </p> <p>For example, a policy may make the following statement: "If the percentage of idle instances is greater than 20% for more than 15 minutes, then reduce the fleet capacity by 10%."</p> <p>A policy's rule statement has the following structure:</p> <p>If <code>[MetricName]</code> is <code>[ComparisonOperator]</code> <code>[Threshold]</code> for <code>[EvaluationPeriods]</code> minutes, then <code>[ScalingAdjustmentType]</code> to/by <code>[ScalingAdjustment]</code>.</p> <p>To implement the example, the rule statement would look like this:</p> <p>If <code>[PercentIdleInstances]</code> is <code>[GreaterThanThreshold]</code> <code>[20]</code> for <code>[15]</code> minutes, then <code>[PercentChangeInCapacity]</code> to/by <code>[10]</code>.</p> <p>To create or update a scaling policy, specify a unique combination of name and fleet ID, and set the policy type to "RuleBased". Specify the parameter values for a policy rule statement. On a successful request, the policy name is returned. Scaling policies are automatically in force as soon as they're successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.</p>
		 * Post #X-Amz-Target=GameLift.PutScalingPolicy
		 * @return {PutScalingPolicyOutput} Success
		 */
		PutScalingPolicy(requestBody: PutScalingPolicyInput): Observable<PutScalingPolicyOutput> {
			return this.http.post<PutScalingPolicyOutput>(this.baseUri + '#X-Amz-Target=GameLift.PutScalingPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers your compute resources in a fleet you previously created. After you register a compute to your fleet, you can monitor and manage your compute using Amazon GameLift. The operation returns the compute resource containing SDK endpoint you can use to connect your game server to Amazon GameLift.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-anywhere.html">Create an Anywhere fleet</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-testing.html">Test your integration</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.RegisterCompute
		 * @return {RegisterComputeOutput} Success
		 */
		RegisterCompute(requestBody: RegisterComputeInput): Observable<RegisterComputeOutput> {
			return this.http.post<RegisterComputeOutput>(this.baseUri + '#X-Amz-Target=GameLift.RegisterCompute', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Creates a new game server resource and notifies Amazon GameLift FleetIQ that the game server is ready to host gameplay and players. This operation is called by a game server process that is running on an instance in a game server group. Registering game servers enables Amazon GameLift FleetIQ to track available game servers and enables game clients and services to claim a game server for a new game session. </p> <p>To register a game server, identify the game server group and instance where the game server is running, and provide a unique identifier for the game server. You can also include connection and game server data.</p> <p>Once a game server is successfully registered, it is put in status <code>AVAILABLE</code>. A request to register a game server may fail if the instance it is running on is in the process of shutting down as part of instance balancing or scale-down activity. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
		 * Post #X-Amz-Target=GameLift.RegisterGameServer
		 * @return {RegisterGameServerOutput} Success
		 */
		RegisterGameServer(requestBody: RegisterGameServerInput): Observable<RegisterGameServerOutput> {
			return this.http.post<RegisterGameServerOutput>(this.baseUri + '#X-Amz-Target=GameLift.RegisterGameServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a fresh set of credentials for use when uploading a new set of game build files to Amazon GameLift's Amazon S3. This is done as part of the build creation process; see <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateBuild.html">GameSession</a>.</p> <p>To request new credentials, specify the build ID as returned with an initial <code>CreateBuild</code> request. If successful, a new set of credentials are returned, along with the S3 storage location associated with the build ID.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in S3</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.RequestUploadCredentials
		 * @return {RequestUploadCredentialsOutput} Success
		 */
		RequestUploadCredentials(requestBody: RequestUploadCredentialsInput): Observable<RequestUploadCredentialsOutput> {
			return this.http.post<RequestUploadCredentialsOutput>(this.baseUri + '#X-Amz-Target=GameLift.RequestUploadCredentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the fleet ID that an alias is currently pointing to.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.ResolveAlias
		 * @return {ResolveAliasOutput} Success
		 */
		ResolveAlias(requestBody: ResolveAliasInput): Observable<ResolveAliasOutput> {
			return this.http.post<ResolveAliasOutput>(this.baseUri + '#X-Amz-Target=GameLift.ResolveAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Reinstates activity on a game server group after it has been suspended. A game server group might be suspended by the <a href="gamelift/latest/apireference/API_SuspendGameServerGroup.html">SuspendGameServerGroup</a> operation, or it might be suspended involuntarily due to a configuration problem. In the second case, you can manually resume activity on the group once the configuration problem has been resolved. Refer to the game server group status and status reason for more information on why group activity is suspended.</p> <p>To resume activity, specify a game server group ARN and the type of activity to be resumed. If successful, a <code>GameServerGroup</code> object is returned showing that the resumed activity is no longer listed in <code>SuspendedActions</code>. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
		 * Post #X-Amz-Target=GameLift.ResumeGameServerGroup
		 * @return {ResumeGameServerGroupOutput} Success
		 */
		ResumeGameServerGroup(requestBody: ResumeGameServerGroupInput): Observable<ResumeGameServerGroupOutput> {
			return this.http.post<ResumeGameServerGroupOutput>(this.baseUri + '#X-Amz-Target=GameLift.ResumeGameServerGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves all active game sessions that match a set of search criteria and sorts them into a specified order. </p> <p>This operation is not designed to be continually called to track game session status. This practice can cause you to exceed your API limit, which results in errors. Instead, you must configure configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or queues. Continuously polling game session status with <code>DescribeGameSessions</code> should only be used for games in development with low game session usage. </p> <p>When searching for game sessions, you specify exactly where you want to search and provide a search filter expression, a sort expression, or both. A search request can search only one fleet, but it can search all of a fleet's locations. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To search all game sessions that are currently running on all locations in a fleet, provide a fleet or alias ID. This approach returns game sessions in the fleet's home Region and all remote locations that fit the search criteria.</p> </li> <li> <p>To search all game sessions that are currently running on a specific fleet location, provide a fleet or alias ID and a location name. For location, you can specify a fleet's home Region or any remote location.</p> </li> </ul> <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>If successful, a <code>GameSession</code> object is returned for each game session that matches the request. Search finds game sessions that are in <code>ACTIVE</code> status only. To retrieve information on game sessions in other statuses, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessions.html">DescribeGameSessions</a> .</p> <p>You can search or sort by the following game session attributes:</p> <ul> <li> <p> <b>gameSessionId</b> -- A unique identifier for the game session. You can use either a <code>GameSessionId</code> or <code>GameSessionArn</code> value. </p> </li> <li> <p> <b>gameSessionName</b> -- Name assigned to a game session. Game session names do not need to be unique to a game session.</p> </li> <li> <p> <b>gameSessionProperties</b> -- Custom data defined in a game session's <code>GameProperty</code> parameter. <code>GameProperty</code> values are stored as key:value pairs; the filter expression must indicate the key and a string to search the data values for. For example, to search for game sessions with custom data containing the key:value pair "gameMode:brawl", specify the following: <code>gameSessionProperties.gameMode = "brawl"</code>. All custom data values are searched as strings.</p> </li> <li> <p> <b>maximumSessions</b> -- Maximum number of player sessions allowed for a game session.</p> </li> <li> <p> <b>creationTimeMillis</b> -- Value indicating when a game session was created. It is expressed in Unix time as milliseconds.</p> </li> <li> <p> <b>playerSessionCount</b> -- Number of players currently connected to a game session. This value changes rapidly as players join the session or drop out.</p> </li> <li> <p> <b>hasAvailablePlayerSessions</b> -- Boolean value indicating whether a game session has reached its maximum number of players. It is highly recommended that all search requests include this filter attribute to optimize search performance and return only sessions that players can join. </p> </li> </ul> <note> <p>Returned values for <code>playerSessionCount</code> and <code>hasAvailablePlayerSessions</code> change quickly as players join sessions and others drop out. Results should be considered a snapshot in time. Be sure to refresh search results often, and handle sessions that fill up before a player can join. </p> </note> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.SearchGameSessions
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchGameSessionsOutput} Success
		 */
		SearchGameSessions(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchGameSessionsInput): Observable<SearchGameSessionsOutput> {
			return this.http.post<SearchGameSessionsOutput>(this.baseUri + '#X-Amz-Target=GameLift.SearchGameSessions?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Resumes certain types of activity on fleet instances that were suspended with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html">StopFleetActions</a>. For multi-location fleets, fleet actions are managed separately for each location. Currently, this operation is used to restart a fleet's auto-scaling activity.</p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To restart actions on instances in the fleet's home Region, provide a fleet ID and the type of actions to resume. </p> </li> <li> <p>To restart actions on instances in one of the fleet's remote locations, provide a fleet ID, a location name, and the type of actions to resume. </p> </li> </ul> <p>If successful, Amazon GameLift once again initiates scaling events as triggered by the fleet's scaling policies. If actions on the fleet location were never stopped, this operation will have no effect.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
		 * Post #X-Amz-Target=GameLift.StartFleetActions
		 * @return {StartFleetActionsOutput} Success
		 */
		StartFleetActions(requestBody: StartFleetActionsInput): Observable<StartFleetActionsOutput> {
			return this.http.post<StartFleetActionsOutput>(this.baseUri + '#X-Amz-Target=GameLift.StartFleetActions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Places a request for a new game session in a queue. When processing a placement request, Amazon GameLift searches for available resources on the queue's destinations, scanning each until it finds resources or the placement request times out.</p> <p>A game session placement request can also request player sessions. When a new game session is successfully created, Amazon GameLift creates a player session for each player included in the request.</p> <p>When placing a game session, by default Amazon GameLift tries each fleet in the order they are listed in the queue configuration. Ideally, a queue's destinations are listed in preference order.</p> <p>Alternatively, when requesting a game session with players, you can also provide latency data for each player in relevant Regions. Latency data indicates the performance lag a player experiences when connected to a fleet in the Region. Amazon GameLift uses latency data to reorder the list of destinations to place the game session in a Region with minimal lag. If latency data is provided for multiple players, Amazon GameLift calculates each Region's average lag for all players and reorders to get the best game play across all players. </p> <p>To place a new game session request, specify the following:</p> <ul> <li> <p>The queue name and a set of game session properties and settings</p> </li> <li> <p>A unique ID (such as a UUID) for the placement. You use this ID to track the status of the placement request</p> </li> <li> <p>(Optional) A set of player data and a unique player ID for each player that you are joining to the new game session (player data is optional, but if you include it, you must also provide a unique ID for each player)</p> </li> <li> <p>Latency data for all players (if you want to optimize game play for the players)</p> </li> </ul> <p>If successful, a new game session placement is created.</p> <p>To track the status of a placement request, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionPlacement.html">DescribeGameSessionPlacement</a> and check the request's status. If the status is <code>FULFILLED</code>, a new game session has been created and a game session ARN and Region are referenced. If the placement request times out, you can resubmit the request or retry it with a different queue. </p>
		 * Post #X-Amz-Target=GameLift.StartGameSessionPlacement
		 * @return {StartGameSessionPlacementOutput} Success
		 */
		StartGameSessionPlacement(requestBody: StartGameSessionPlacementInput): Observable<StartGameSessionPlacementOutput> {
			return this.http.post<StartGameSessionPlacementOutput>(this.baseUri + '#X-Amz-Target=GameLift.StartGameSessionPlacement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Finds new players to fill open slots in currently running game sessions. The backfill match process is essentially identical to the process of forming new matches. Backfill requests use the same matchmaker that was used to make the original match, and they provide matchmaking data for all players currently in the game session. FlexMatch uses this information to select new players so that backfilled match continues to meet the original match requirements. </p> <p>When using FlexMatch with Amazon GameLift managed hosting, you can request a backfill match from a client service by calling this operation with a <code>GameSessions</code> ID. You also have the option of making backfill requests directly from your game server. In response to a request, FlexMatch creates player sessions for the new players, updates the <code>GameSession</code> resource, and sends updated matchmaking data to the game server. You can request a backfill match at any point after a game session is started. Each game session can have only one active backfill request at a time; a subsequent request automatically replaces the earlier request.</p> <p>When using FlexMatch as a standalone component, request a backfill match by calling this operation without a game session identifier. As with newly formed matches, matchmaking results are returned in a matchmaking event so that your game can update the game session that is being backfilled.</p> <p>To request a backfill match, specify a unique ticket ID, the original matchmaking configuration, and matchmaking data for all current players in the game session being backfilled. Optionally, specify the <code>GameSession</code> ARN. If successful, a match backfill ticket is created and returned with status set to QUEUED. Track the status of backfill tickets using the same method for tracking tickets for new matches.</p> <p>Only game sessions created by FlexMatch are supported for match backfill.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html"> Backfill existing games with FlexMatch</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html"> Matchmaking events</a> (reference)</p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html"> How Amazon GameLift FlexMatch works</a> </p>
		 * Post #X-Amz-Target=GameLift.StartMatchBackfill
		 * @return {StartMatchBackfillOutput} Success
		 */
		StartMatchBackfill(requestBody: StartMatchBackfillInput): Observable<StartMatchBackfillOutput> {
			return this.http.post<StartMatchBackfillOutput>(this.baseUri + '#X-Amz-Target=GameLift.StartMatchBackfill', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Uses FlexMatch to create a game match for a group of players based on custom matchmaking rules. With games that use Amazon GameLift managed hosting, this operation also triggers Amazon GameLift to find hosting resources and start a new game session for the new match. Each matchmaking request includes information on one or more players and specifies the FlexMatch matchmaker to use. When a request is for multiple players, FlexMatch attempts to build a match that includes all players in the request, placing them in the same team and finding additional players as needed to fill the match. </p> <p>To start matchmaking, provide a unique ticket ID, specify a matchmaking configuration, and include the players to be matched. You must also include any player attributes that are required by the matchmaking configuration's rule set. If successful, a matchmaking ticket is returned with status set to <code>QUEUED</code>. </p> <p>Track matchmaking events to respond as needed and acquire game session connection information for successfully completed matches. Ticket status updates are tracked using event notification through Amazon Simple Notification Service, which is defined in the matchmaking configuration.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set Up FlexMatch event notification</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html"> How Amazon GameLift FlexMatch works</a> </p>
		 * Post #X-Amz-Target=GameLift.StartMatchmaking
		 * @return {StartMatchmakingOutput} Success
		 */
		StartMatchmaking(requestBody: StartMatchmakingInput): Observable<StartMatchmakingOutput> {
			return this.http.post<StartMatchmakingOutput>(this.baseUri + '#X-Amz-Target=GameLift.StartMatchmaking', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Suspends certain types of activity in a fleet location. Currently, this operation is used to stop auto-scaling activity. For multi-location fleets, fleet actions are managed separately for each location. </p> <p>Stopping fleet actions has several potential purposes. It allows you to temporarily stop auto-scaling activity but retain your scaling policies for use in the future. For multi-location fleets, you can set up fleet-wide auto-scaling, and then opt out of it for certain locations. </p> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To stop actions on instances in the fleet's home Region, provide a fleet ID and the type of actions to suspend. </p> </li> <li> <p>To stop actions on instances in one of the fleet's remote locations, provide a fleet ID, a location name, and the type of actions to suspend. </p> </li> </ul> <p>If successful, Amazon GameLift no longer initiates scaling events except in response to manual changes using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html">UpdateFleetCapacity</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift Fleets</a> </p>
		 * Post #X-Amz-Target=GameLift.StopFleetActions
		 * @return {StopFleetActionsOutput} Success
		 */
		StopFleetActions(requestBody: StopFleetActionsInput): Observable<StopFleetActionsOutput> {
			return this.http.post<StopFleetActionsOutput>(this.baseUri + '#X-Amz-Target=GameLift.StopFleetActions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels a game session placement that is in <code>PENDING</code> status. To stop a placement, provide the placement ID values. If successful, the placement is moved to <code>CANCELLED</code> status.
		 * Post #X-Amz-Target=GameLift.StopGameSessionPlacement
		 * @return {StopGameSessionPlacementOutput} Success
		 */
		StopGameSessionPlacement(requestBody: StopGameSessionPlacementInput): Observable<StopGameSessionPlacementOutput> {
			return this.http.post<StopGameSessionPlacementOutput>(this.baseUri + '#X-Amz-Target=GameLift.StopGameSessionPlacement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Cancels a matchmaking ticket or match backfill ticket that is currently being processed. To stop the matchmaking operation, specify the ticket ID. If successful, work on the ticket is stopped, and the ticket status is changed to <code>CANCELLED</code>.</p> <p>This call is also used to turn off automatic backfill for an individual game session. This is for game sessions that are created with a matchmaking configuration that has automatic backfill enabled. The ticket ID is included in the <code>MatchmakerData</code> of an updated game session object, which is provided to the game server.</p> <note> <p>If the operation is successful, the service sends back an empty JSON struct with the HTTP 200 response (not an empty HTTP body).</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html"> Add FlexMatch to a game client</a> </p>
		 * Post #X-Amz-Target=GameLift.StopMatchmaking
		 * @return {StopMatchmakingOutput} Success
		 */
		StopMatchmaking(requestBody: StopMatchmakingInput): Observable<StopMatchmakingOutput> {
			return this.http.post<StopMatchmakingOutput>(this.baseUri + '#X-Amz-Target=GameLift.StopMatchmaking', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Temporarily stops activity on a game server group without terminating instances or the game server group. You can restart activity by calling <a href="gamelift/latest/apireference/API_ResumeGameServerGroup.html">ResumeGameServerGroup</a>. You can suspend the following activity:</p> <ul> <li> <p> <b>Instance type replacement</b> - This activity evaluates the current game hosting viability of all Spot instance types that are defined for the game server group. It updates the Auto Scaling group to remove nonviable Spot Instance types, which have a higher chance of game server interruptions. It then balances capacity across the remaining viable Spot Instance types. When this activity is suspended, the Auto Scaling group continues with its current balance, regardless of viability. Instance protection, utilization metrics, and capacity scaling activities continue to be active. </p> </li> </ul> <p>To suspend activity, specify a game server group ARN and the type of activity to be suspended. If successful, a <code>GameServerGroup</code> object is returned showing that the activity is listed in <code>SuspendedActions</code>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
		 * Post #X-Amz-Target=GameLift.SuspendGameServerGroup
		 * @return {SuspendGameServerGroupOutput} Success
		 */
		SuspendGameServerGroup(requestBody: SuspendGameServerGroupInput): Observable<SuspendGameServerGroupOutput> {
			return this.http.post<SuspendGameServerGroupOutput>(this.baseUri + '#X-Amz-Target=GameLift.SuspendGameServerGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Assigns a tag to an Amazon GameLift resource. You can use tags to organize resources, create IAM permissions policies to manage access to groups of resources, customize Amazon Web Services cost breakdowns, and more. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To add a tag to a resource, specify the unique ARN value for the resource and provide a tag list containing one or more tags. The operation succeeds even if the list includes tags that are already assigned to the resource. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=GameLift.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes a tag assigned to a Amazon GameLift resource. You can use resource tags to organize Amazon Web Services resources for a range of purposes. This operation handles the permissions necessary to manage tags for Amazon GameLift resources that support tagging.</p> <p>To remove a tag from a resource, specify the unique ARN value for the resource and provide a string list containing one or more tags to remove. This operation succeeds even if the list includes tags that aren't assigned to the resource.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> Amazon Web Services Tagging Strategies</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=GameLift.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates properties for an alias. To update properties, specify the alias ID to be updated and provide the information to be changed. To reassign an alias to another fleet, provide an updated routing strategy. If successful, the updated alias record is returned.</p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.UpdateAlias
		 * @return {UpdateAliasOutput} Success
		 */
		UpdateAlias(requestBody: UpdateAliasInput): Observable<UpdateAliasOutput> {
			return this.http.post<UpdateAliasOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates metadata in a build resource, including the build name and version. To update the metadata, specify the build ID to update and provide the new values. If successful, a build object containing the updated metadata is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.UpdateBuild
		 * @return {UpdateBuildOutput} Success
		 */
		UpdateBuild(requestBody: UpdateBuildInput): Observable<UpdateBuildOutput> {
			return this.http.post<UpdateBuildOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateBuild', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates a fleet's mutable attributes, including game session protection and resource creation limits.</p> <p>To update fleet attributes, specify the fleet ID and the property values that you want to change. </p> <p>If successful, an updated <code>FleetAttributes</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
		 * Post #X-Amz-Target=GameLift.UpdateFleetAttributes
		 * @return {UpdateFleetAttributesOutput} Success
		 */
		UpdateFleetAttributes(requestBody: UpdateFleetAttributesInput): Observable<UpdateFleetAttributesOutput> {
			return this.http.post<UpdateFleetAttributesOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateFleetAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates capacity settings for a fleet. For fleets with multiple locations, use this operation to manage capacity settings in each location individually. Fleet capacity determines the number of game sessions and players that can be hosted based on the fleet configuration. Use this operation to set the following fleet capacity properties: </p> <ul> <li> <p>Minimum/maximum size: Set hard limits on fleet capacity. Amazon GameLift cannot set the fleet's capacity to a value outside of this range, whether the capacity is changed manually or through automatic scaling. </p> </li> <li> <p>Desired capacity: Manually set the number of Amazon EC2 instances to be maintained in a fleet location. Before changing a fleet's desired capacity, you may want to call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeEC2InstanceLimits.html">DescribeEC2InstanceLimits</a> to get the maximum capacity of the fleet's Amazon EC2 instance type. Alternatively, consider using automatic scaling to adjust capacity based on player demand.</p> </li> </ul> <p>This operation can be used in the following ways: </p> <ul> <li> <p>To update capacity for a fleet's home Region, or if the fleet has no remote locations, omit the <code>Location</code> parameter. The fleet must be in <code>ACTIVE</code> status. </p> </li> <li> <p>To update capacity for a fleet's remote location, include the <code>Location</code> parameter set to the location to be updated. The location must be in <code>ACTIVE</code> status.</p> </li> </ul> <p>If successful, capacity settings are updated immediately. In response a change in desired capacity, Amazon GameLift initiates steps to start new instances or terminate existing instances in the requested fleet location. This continues until the location's active instance count matches the new desired instance count. You can track a fleet's current capacity by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html">DescribeFleetCapacity</a> or <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html">DescribeFleetLocationCapacity</a>. If the requested desired instance count is higher than the instance type's limit, the <code>LimitExceeded</code> exception occurs.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-manage-capacity.html">Scaling fleet capacity</a> </p>
		 * Post #X-Amz-Target=GameLift.UpdateFleetCapacity
		 * @return {UpdateFleetCapacityOutput} Success
		 */
		UpdateFleetCapacity(requestBody: UpdateFleetCapacityInput): Observable<UpdateFleetCapacityOutput> {
			return this.http.post<UpdateFleetCapacityOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateFleetCapacity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates permissions that allow inbound traffic to connect to game sessions that are being hosted on instances in the fleet. </p> <p>To update settings, specify the fleet ID to be updated and specify the changes to be made. List the permissions you want to add in <code>InboundPermissionAuthorizations</code>, and permissions you want to remove in <code>InboundPermissionRevocations</code>. Permissions to be removed must match existing fleet permissions. </p> <p>If successful, the fleet ID for the updated fleet is returned. For fleets with remote locations, port setting updates can take time to propagate across all locations. You can check the status of updates in each location by calling <code>DescribeFleetPortSettings</code> with a location name.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
		 * Post #X-Amz-Target=GameLift.UpdateFleetPortSettings
		 * @return {UpdateFleetPortSettingsOutput} Success
		 */
		UpdateFleetPortSettings(requestBody: UpdateFleetPortSettingsInput): Observable<UpdateFleetPortSettingsOutput> {
			return this.http.post<UpdateFleetPortSettingsOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateFleetPortSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Updates information about a registered game server to help Amazon GameLift FleetIQ to track game server availability. This operation is called by a game server process that is running on an instance in a game server group. </p> <p>Use this operation to update the following types of game server information. You can make all three types of updates in the same request:</p> <ul> <li> <p>To update the game server's utilization status, identify the game server and game server group and specify the current utilization status. Use this status to identify when game servers are currently hosting games and when they are available to be claimed.</p> </li> <li> <p>To report health status, identify the game server and game server group and set health check to <code>HEALTHY</code>. If a game server does not report health status for a certain length of time, the game server is no longer considered healthy. As a result, it will be eventually deregistered from the game server group to avoid affecting utilization metrics. The best practice is to report health every 60 seconds.</p> </li> <li> <p>To change game server metadata, provide updated game server data.</p> </li> </ul> <p>Once a game server is successfully updated, the relevant statuses and timestamps are updated.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
		 * Post #X-Amz-Target=GameLift.UpdateGameServer
		 * @return {UpdateGameServerOutput} Success
		 */
		UpdateGameServer(requestBody: UpdateGameServerInput): Observable<UpdateGameServerOutput> {
			return this.http.post<UpdateGameServerOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateGameServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b> </p> <p>Updates Amazon GameLift FleetIQ-specific properties for a game server group. Many Auto Scaling group properties are updated on the Auto Scaling group directly, including the launch template, Auto Scaling policies, and maximum/minimum/desired instance counts.</p> <p>To update the game server group, specify the game server group ID and provide the updated values. Before applying the updates, the new values are validated to ensure that Amazon GameLift FleetIQ can continue to perform instance balancing activity. If successful, a <code>GameServerGroup</code> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ Guide</a> </p>
		 * Post #X-Amz-Target=GameLift.UpdateGameServerGroup
		 * @return {UpdateGameServerGroupOutput} Success
		 */
		UpdateGameServerGroup(requestBody: UpdateGameServerGroupInput): Observable<UpdateGameServerGroupOutput> {
			return this.http.post<UpdateGameServerGroupOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateGameServerGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the mutable properties of a game session. </p> <p>To update a game session, specify the game session ID and the values you want to change. </p> <p>If successful, the updated <code>GameSession</code> object is returned. </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.UpdateGameSession
		 * @return {UpdateGameSessionOutput} Success
		 */
		UpdateGameSession(requestBody: UpdateGameSessionInput): Observable<UpdateGameSessionOutput> {
			return this.http.post<UpdateGameSessionOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateGameSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the configuration of a game session queue, which determines how the queue processes new game session requests. To update settings, specify the queue name to be updated and provide the new settings. When updating destinations, provide a complete list of destinations. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-intro.html"> Using Multi-Region Queues</a> </p>
		 * Post #X-Amz-Target=GameLift.UpdateGameSessionQueue
		 * @return {UpdateGameSessionQueueOutput} Success
		 */
		UpdateGameSessionQueue(requestBody: UpdateGameSessionQueueInput): Observable<UpdateGameSessionQueueOutput> {
			return this.http.post<UpdateGameSessionQueueOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateGameSessionQueue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates settings for a FlexMatch matchmaking configuration. These changes affect all matches and game sessions that are created after the update. To update settings, specify the configuration name to be updated and provide the new settings. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html"> Design a FlexMatch matchmaker</a> </p>
		 * Post #X-Amz-Target=GameLift.UpdateMatchmakingConfiguration
		 * @return {UpdateMatchmakingConfigurationOutput} Success
		 */
		UpdateMatchmakingConfiguration(requestBody: UpdateMatchmakingConfigurationInput): Observable<UpdateMatchmakingConfigurationOutput> {
			return this.http.post<UpdateMatchmakingConfigurationOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateMatchmakingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the current runtime configuration for the specified fleet, which tells Amazon GameLift how to launch server processes on all instances in the fleet. You can update a fleet's runtime configuration at any time after the fleet is created; it does not need to be in <code>ACTIVE</code> status.</p> <p>To update runtime configuration, specify the fleet ID and provide a <code>RuntimeConfiguration</code> with an updated set of server process configurations.</p> <p>If successful, the fleet's runtime configuration settings are updated. Each instance in the fleet regularly checks for and retrieves updated runtime configurations. Instances immediately begin complying with the new configuration by launching new server processes or not replacing existing processes when they shut down. Updating a fleet's runtime configuration never affects existing server processes.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift fleets</a> </p>
		 * Post #X-Amz-Target=GameLift.UpdateRuntimeConfiguration
		 * @return {UpdateRuntimeConfigurationOutput} Success
		 */
		UpdateRuntimeConfiguration(requestBody: UpdateRuntimeConfigurationInput): Observable<UpdateRuntimeConfigurationOutput> {
			return this.http.post<UpdateRuntimeConfigurationOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateRuntimeConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates Realtime script metadata and content.</p> <p>To update script metadata, specify the script ID and provide updated name and/or version values. </p> <p>To update script content, provide an updated zip file by pointing to either a local file or an Amazon S3 bucket location. You can use either method regardless of how the original script was uploaded. Use the <i>Version</i> parameter to track updates to the script.</p> <p>If the call is successful, the updated metadata is stored in the script record and a revised script is uploaded to the Amazon GameLift service. Once the script is updated and acquired by a fleet instance, the new version is used for all new game sessions. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
		 * Post #X-Amz-Target=GameLift.UpdateScript
		 * @return {UpdateScriptOutput} Success
		 */
		UpdateScript(requestBody: UpdateScriptInput): Observable<UpdateScriptOutput> {
			return this.http.post<UpdateScriptOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateScript', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Validates the syntax of a matchmaking rule or rule set. This operation checks that the rule set is using syntactically correct JSON and that it conforms to allowed property expressions. To validate syntax, provide a rule set JSON string.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule set</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.ValidateMatchmakingRuleSet
		 * @return {ValidateMatchmakingRuleSetOutput} Success
		 */
		ValidateMatchmakingRuleSet(requestBody: ValidateMatchmakingRuleSetInput): Observable<ValidateMatchmakingRuleSetOutput> {
			return this.http.post<ValidateMatchmakingRuleSetOutput>(this.baseUri + '#X-Amz-Target=GameLift.ValidateMatchmakingRuleSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AcceptMatchX_Amz_Target { 'GameLift.AcceptMatch' = 0 }

	export enum ClaimGameServerX_Amz_Target { 'GameLift.ClaimGameServer' = 0 }

	export enum CreateAliasX_Amz_Target { 'GameLift.CreateAlias' = 0 }

	export enum CreateBuildX_Amz_Target { 'GameLift.CreateBuild' = 0 }

	export enum CreateFleetX_Amz_Target { 'GameLift.CreateFleet' = 0 }

	export enum CreateFleetLocationsX_Amz_Target { 'GameLift.CreateFleetLocations' = 0 }

	export enum CreateGameServerGroupX_Amz_Target { 'GameLift.CreateGameServerGroup' = 0 }

	export enum CreateGameSessionX_Amz_Target { 'GameLift.CreateGameSession' = 0 }

	export enum CreateGameSessionQueueX_Amz_Target { 'GameLift.CreateGameSessionQueue' = 0 }

	export enum CreateLocationX_Amz_Target { 'GameLift.CreateLocation' = 0 }

	export enum CreateMatchmakingConfigurationX_Amz_Target { 'GameLift.CreateMatchmakingConfiguration' = 0 }

	export enum CreateMatchmakingRuleSetX_Amz_Target { 'GameLift.CreateMatchmakingRuleSet' = 0 }

	export enum CreatePlayerSessionX_Amz_Target { 'GameLift.CreatePlayerSession' = 0 }

	export enum CreatePlayerSessionsX_Amz_Target { 'GameLift.CreatePlayerSessions' = 0 }

	export enum CreateScriptX_Amz_Target { 'GameLift.CreateScript' = 0 }

	export enum CreateVpcPeeringAuthorizationX_Amz_Target { 'GameLift.CreateVpcPeeringAuthorization' = 0 }

	export enum CreateVpcPeeringConnectionX_Amz_Target { 'GameLift.CreateVpcPeeringConnection' = 0 }

	export enum DeleteAliasX_Amz_Target { 'GameLift.DeleteAlias' = 0 }

	export enum DeleteBuildX_Amz_Target { 'GameLift.DeleteBuild' = 0 }

	export enum DeleteFleetX_Amz_Target { 'GameLift.DeleteFleet' = 0 }

	export enum DeleteFleetLocationsX_Amz_Target { 'GameLift.DeleteFleetLocations' = 0 }

	export enum DeleteGameServerGroupX_Amz_Target { 'GameLift.DeleteGameServerGroup' = 0 }

	export enum DeleteGameSessionQueueX_Amz_Target { 'GameLift.DeleteGameSessionQueue' = 0 }

	export enum DeleteLocationX_Amz_Target { 'GameLift.DeleteLocation' = 0 }

	export enum DeleteMatchmakingConfigurationX_Amz_Target { 'GameLift.DeleteMatchmakingConfiguration' = 0 }

	export enum DeleteMatchmakingRuleSetX_Amz_Target { 'GameLift.DeleteMatchmakingRuleSet' = 0 }

	export enum DeleteScalingPolicyX_Amz_Target { 'GameLift.DeleteScalingPolicy' = 0 }

	export enum DeleteScriptX_Amz_Target { 'GameLift.DeleteScript' = 0 }

	export enum DeleteVpcPeeringAuthorizationX_Amz_Target { 'GameLift.DeleteVpcPeeringAuthorization' = 0 }

	export enum DeleteVpcPeeringConnectionX_Amz_Target { 'GameLift.DeleteVpcPeeringConnection' = 0 }

	export enum DeregisterComputeX_Amz_Target { 'GameLift.DeregisterCompute' = 0 }

	export enum DeregisterGameServerX_Amz_Target { 'GameLift.DeregisterGameServer' = 0 }

	export enum DescribeAliasX_Amz_Target { 'GameLift.DescribeAlias' = 0 }

	export enum DescribeBuildX_Amz_Target { 'GameLift.DescribeBuild' = 0 }

	export enum DescribeComputeX_Amz_Target { 'GameLift.DescribeCompute' = 0 }

	export enum DescribeEC2InstanceLimitsX_Amz_Target { 'GameLift.DescribeEC2InstanceLimits' = 0 }

	export enum DescribeFleetAttributesX_Amz_Target { 'GameLift.DescribeFleetAttributes' = 0 }

	export enum DescribeFleetCapacityX_Amz_Target { 'GameLift.DescribeFleetCapacity' = 0 }

	export enum DescribeFleetEventsX_Amz_Target { 'GameLift.DescribeFleetEvents' = 0 }

	export enum DescribeFleetLocationAttributesX_Amz_Target { 'GameLift.DescribeFleetLocationAttributes' = 0 }

	export enum DescribeFleetLocationCapacityX_Amz_Target { 'GameLift.DescribeFleetLocationCapacity' = 0 }

	export enum DescribeFleetLocationUtilizationX_Amz_Target { 'GameLift.DescribeFleetLocationUtilization' = 0 }

	export enum DescribeFleetPortSettingsX_Amz_Target { 'GameLift.DescribeFleetPortSettings' = 0 }

	export enum DescribeFleetUtilizationX_Amz_Target { 'GameLift.DescribeFleetUtilization' = 0 }

	export enum DescribeGameServerX_Amz_Target { 'GameLift.DescribeGameServer' = 0 }

	export enum DescribeGameServerGroupX_Amz_Target { 'GameLift.DescribeGameServerGroup' = 0 }

	export enum DescribeGameServerInstancesX_Amz_Target { 'GameLift.DescribeGameServerInstances' = 0 }

	export enum DescribeGameSessionDetailsX_Amz_Target { 'GameLift.DescribeGameSessionDetails' = 0 }

	export enum DescribeGameSessionPlacementX_Amz_Target { 'GameLift.DescribeGameSessionPlacement' = 0 }

	export enum DescribeGameSessionQueuesX_Amz_Target { 'GameLift.DescribeGameSessionQueues' = 0 }

	export enum DescribeGameSessionsX_Amz_Target { 'GameLift.DescribeGameSessions' = 0 }

	export enum DescribeInstancesX_Amz_Target { 'GameLift.DescribeInstances' = 0 }

	export enum DescribeMatchmakingX_Amz_Target { 'GameLift.DescribeMatchmaking' = 0 }

	export enum DescribeMatchmakingConfigurationsX_Amz_Target { 'GameLift.DescribeMatchmakingConfigurations' = 0 }

	export enum DescribeMatchmakingRuleSetsX_Amz_Target { 'GameLift.DescribeMatchmakingRuleSets' = 0 }

	export enum DescribePlayerSessionsX_Amz_Target { 'GameLift.DescribePlayerSessions' = 0 }

	export enum DescribeRuntimeConfigurationX_Amz_Target { 'GameLift.DescribeRuntimeConfiguration' = 0 }

	export enum DescribeScalingPoliciesX_Amz_Target { 'GameLift.DescribeScalingPolicies' = 0 }

	export enum DescribeScriptX_Amz_Target { 'GameLift.DescribeScript' = 0 }

	export enum DescribeVpcPeeringAuthorizationsX_Amz_Target { 'GameLift.DescribeVpcPeeringAuthorizations' = 0 }

	export enum DescribeVpcPeeringConnectionsX_Amz_Target { 'GameLift.DescribeVpcPeeringConnections' = 0 }

	export enum GetComputeAccessX_Amz_Target { 'GameLift.GetComputeAccess' = 0 }

	export enum GetComputeAuthTokenX_Amz_Target { 'GameLift.GetComputeAuthToken' = 0 }

	export enum GetGameSessionLogUrlX_Amz_Target { 'GameLift.GetGameSessionLogUrl' = 0 }

	export enum GetInstanceAccessX_Amz_Target { 'GameLift.GetInstanceAccess' = 0 }

	export enum ListAliasesX_Amz_Target { 'GameLift.ListAliases' = 0 }

	export enum ListBuildsX_Amz_Target { 'GameLift.ListBuilds' = 0 }

	export enum ListComputeX_Amz_Target { 'GameLift.ListCompute' = 0 }

	export enum ListFleetsX_Amz_Target { 'GameLift.ListFleets' = 0 }

	export enum ListGameServerGroupsX_Amz_Target { 'GameLift.ListGameServerGroups' = 0 }

	export enum ListGameServersX_Amz_Target { 'GameLift.ListGameServers' = 0 }

	export enum ListLocationsX_Amz_Target { 'GameLift.ListLocations' = 0 }

	export enum ListScriptsX_Amz_Target { 'GameLift.ListScripts' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'GameLift.ListTagsForResource' = 0 }

	export enum PutScalingPolicyX_Amz_Target { 'GameLift.PutScalingPolicy' = 0 }

	export enum RegisterComputeX_Amz_Target { 'GameLift.RegisterCompute' = 0 }

	export enum RegisterGameServerX_Amz_Target { 'GameLift.RegisterGameServer' = 0 }

	export enum RequestUploadCredentialsX_Amz_Target { 'GameLift.RequestUploadCredentials' = 0 }

	export enum ResolveAliasX_Amz_Target { 'GameLift.ResolveAlias' = 0 }

	export enum ResumeGameServerGroupX_Amz_Target { 'GameLift.ResumeGameServerGroup' = 0 }

	export enum SearchGameSessionsX_Amz_Target { 'GameLift.SearchGameSessions' = 0 }

	export enum StartFleetActionsX_Amz_Target { 'GameLift.StartFleetActions' = 0 }

	export enum StartGameSessionPlacementX_Amz_Target { 'GameLift.StartGameSessionPlacement' = 0 }

	export enum StartMatchBackfillX_Amz_Target { 'GameLift.StartMatchBackfill' = 0 }

	export enum StartMatchmakingX_Amz_Target { 'GameLift.StartMatchmaking' = 0 }

	export enum StopFleetActionsX_Amz_Target { 'GameLift.StopFleetActions' = 0 }

	export enum StopGameSessionPlacementX_Amz_Target { 'GameLift.StopGameSessionPlacement' = 0 }

	export enum StopMatchmakingX_Amz_Target { 'GameLift.StopMatchmaking' = 0 }

	export enum SuspendGameServerGroupX_Amz_Target { 'GameLift.SuspendGameServerGroup' = 0 }

	export enum TagResourceX_Amz_Target { 'GameLift.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'GameLift.UntagResource' = 0 }

	export enum UpdateAliasX_Amz_Target { 'GameLift.UpdateAlias' = 0 }

	export enum UpdateBuildX_Amz_Target { 'GameLift.UpdateBuild' = 0 }

	export enum UpdateFleetAttributesX_Amz_Target { 'GameLift.UpdateFleetAttributes' = 0 }

	export enum UpdateFleetCapacityX_Amz_Target { 'GameLift.UpdateFleetCapacity' = 0 }

	export enum UpdateFleetPortSettingsX_Amz_Target { 'GameLift.UpdateFleetPortSettings' = 0 }

	export enum UpdateGameServerX_Amz_Target { 'GameLift.UpdateGameServer' = 0 }

	export enum UpdateGameServerGroupX_Amz_Target { 'GameLift.UpdateGameServerGroup' = 0 }

	export enum UpdateGameSessionX_Amz_Target { 'GameLift.UpdateGameSession' = 0 }

	export enum UpdateGameSessionQueueX_Amz_Target { 'GameLift.UpdateGameSessionQueue' = 0 }

	export enum UpdateMatchmakingConfigurationX_Amz_Target { 'GameLift.UpdateMatchmakingConfiguration' = 0 }

	export enum UpdateRuntimeConfigurationX_Amz_Target { 'GameLift.UpdateRuntimeConfiguration' = 0 }

	export enum UpdateScriptX_Amz_Target { 'GameLift.UpdateScript' = 0 }

	export enum ValidateMatchmakingRuleSetX_Amz_Target { 'GameLift.ValidateMatchmakingRuleSet' = 0 }

}

