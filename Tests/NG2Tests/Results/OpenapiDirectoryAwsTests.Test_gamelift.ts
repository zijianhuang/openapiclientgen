import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AcceptMatchOutput {
	}


	/** Represents the input for a request action. */
	export interface AcceptMatchInput {
		TicketId: string;
		PlayerIds: Array<string>;
		AcceptanceType: AcceptMatchInputAcceptanceType;
	}

	export enum AcceptMatchInputAcceptanceType { ACCEPT = 0, REJECT = 1 }

	export interface InvalidRequestException {
	}

	export interface NotFoundException {
	}

	export interface InternalServiceException {
	}

	export interface UnsupportedRegionException {
	}

	export interface ClaimGameServerOutput {

		/** <p> <b>This data type is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Properties describing a game server resource. </p> <p>A game server resource is created by a successful call to <a>RegisterGameServer</a> and deleted by calling <a>DeregisterGameServer</a>. </p> */
		GameServer?: GameServer;
	}


	/** <p> <b>This data type is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Properties describing a game server resource. </p> <p>A game server resource is created by a successful call to <a>RegisterGameServer</a> and deleted by calling <a>DeregisterGameServer</a>. </p> */
	export interface GameServer {
		GameServerGroupName?: string;
		GameServerGroupArn?: string;
		GameServerId?: string;
		InstanceId?: string;
		ConnectionInfo?: string;
		GameServerData?: string;
		CustomSortKey?: string;
		ClaimStatus?: GameServerClaimStatus;
		UtilizationStatus?: GameServerUtilizationStatus;
		RegistrationTime?: Date;
		LastClaimTime?: Date;
		LastHealthCheckTime?: Date;
	}

	export enum GameServerClaimStatus { CLAIMED = 0 }

	export enum GameServerUtilizationStatus { AVAILABLE = 0, UTILIZED = 1 }

	export interface ClaimGameServerInput {
		GameServerGroupName: string;
		GameServerId?: string;
		GameServerData?: string;
	}

	export interface ConflictException {
	}

	export interface OutOfCapacityException {
	}

	export interface UnauthorizedException {
	}


	/** Represents the returned data in response to a request action. */
	export interface CreateAliasOutput {

		/** <p>Properties that describe an alias resource.</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul> */
		Alias?: Alias;
	}


	/** <p>Properties that describe an alias resource.</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul> */
	export interface Alias {
		AliasId?: string;
		Name?: string;
		AliasArn?: string;
		Description?: string;

		/** <p>The routing configuration for a fleet alias.</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul> */
		RoutingStrategy?: RoutingStrategy;
		CreationTime?: Date;
		LastUpdatedTime?: Date;
	}


	/** <p>The routing configuration for a fleet alias.</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul> */
	export interface RoutingStrategy {
		Type?: RoutingStrategyType;
		FleetId?: string;
		Message?: string;
	}

	export enum RoutingStrategyType { SIMPLE = 0, TERMINAL = 1 }


	/** Represents the input for a request action. */
	export interface CreateAliasInput {
		Name: string;
		Description?: string;

		/** <p>The routing configuration for a fleet alias.</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul> */
		RoutingStrategy: RoutingStrategy;
		Tags?: Array<Tag>;
	}


	/** <p> A label that can be assigned to a GameLift resource. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> in the <i>AWS General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> AWS Tagging Strategies</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>TagResource</a> </p> </li> <li> <p> <a>UntagResource</a> </p> </li> <li> <p> <a>ListTagsForResource</a> </p> </li> </ul> */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface LimitExceededException {
	}

	export interface TaggingFailedException {
	}


	/** Represents the returned data in response to a request action. */
	export interface CreateBuildOutput {

		/** <p>Properties describing a custom game build.</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateBuild</a> </p> </li> <li> <p> <a>ListBuilds</a> </p> </li> <li> <p> <a>DescribeBuild</a> </p> </li> <li> <p> <a>UpdateBuild</a> </p> </li> <li> <p> <a>DeleteBuild</a> </p> </li> </ul> */
		Build?: Build;

		/** Temporary access credentials used for uploading game build files to Amazon GameLift. They are valid for a limited time. If they expire before you upload your game build, get a new set by calling <a>RequestUploadCredentials</a>. */
		UploadCredentials?: AwsCredentials;

		/** The location in S3 where build or script files are stored for access by Amazon GameLift. This location is specified in <a>CreateBuild</a>, <a>CreateScript</a>, and <a>UpdateScript</a> requests. */
		StorageLocation?: S3Location;
	}


	/** <p>Properties describing a custom game build.</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateBuild</a> </p> </li> <li> <p> <a>ListBuilds</a> </p> </li> <li> <p> <a>DescribeBuild</a> </p> </li> <li> <p> <a>UpdateBuild</a> </p> </li> <li> <p> <a>DeleteBuild</a> </p> </li> </ul> */
	export interface Build {
		BuildId?: string;
		BuildArn?: string;
		Name?: string;
		Version?: string;
		Status?: BuildStatus;
		SizeOnDisk?: number;
		OperatingSystem?: BuildOperatingSystem;
		CreationTime?: Date;
	}

	export enum BuildStatus { INITIALIZED = 0, READY = 1, FAILED = 2 }

	export enum BuildOperatingSystem { WINDOWS_2012 = 0, AMAZON_LINUX = 1, AMAZON_LINUX_2 = 2 }


	/** Temporary access credentials used for uploading game build files to Amazon GameLift. They are valid for a limited time. If they expire before you upload your game build, get a new set by calling <a>RequestUploadCredentials</a>. */
	export interface AwsCredentials {
		AccessKeyId?: string;
		SecretAccessKey?: string;
		SessionToken?: string;
	}


	/** The location in S3 where build or script files are stored for access by Amazon GameLift. This location is specified in <a>CreateBuild</a>, <a>CreateScript</a>, and <a>UpdateScript</a> requests.  */
	export interface S3Location {
		Bucket?: string;
		Key?: string;
		RoleArn?: string;
		ObjectVersion?: string;
	}


	/** Represents the input for a request action. */
	export interface CreateBuildInput {
		Name?: string;
		Version?: string;

		/** The location in S3 where build or script files are stored for access by Amazon GameLift. This location is specified in <a>CreateBuild</a>, <a>CreateScript</a>, and <a>UpdateScript</a> requests. */
		StorageLocation?: S3Location;
		OperatingSystem?: BuildOperatingSystem;
		Tags?: Array<Tag>;
	}


	/** Represents the returned data in response to a request action. */
	export interface CreateFleetOutput {

		/** <p>General properties describing a fleet.</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul> */
		FleetAttributes?: FleetAttributes;
	}


	/** <p>General properties describing a fleet.</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul> */
	export interface FleetAttributes {
		FleetId?: string;
		FleetArn?: string;
		FleetType?: FleetAttributesFleetType;
		InstanceType?: FleetAttributesInstanceType;
		Description?: string;
		Name?: string;
		CreationTime?: Date;
		TerminationTime?: Date;
		Status?: FleetAttributesStatus;
		BuildId?: string;
		BuildArn?: string;
		ScriptId?: string;
		ScriptArn?: string;
		ServerLaunchPath?: string;
		ServerLaunchParameters?: string;
		LogPaths?: Array<string>;
		NewGameSessionProtectionPolicy?: FleetAttributesNewGameSessionProtectionPolicy;
		OperatingSystem?: BuildOperatingSystem;

		/** <p>A policy that limits the number of game sessions a player can create on the same fleet. This optional policy gives game owners control over how players can consume available game server resources. A resource creation policy makes the following statement: "An individual player can create a maximum number of new game sessions within a specified time period".</p> <p>The policy is evaluated when a player tries to create a new game session. For example: Assume you have a policy of 10 new game sessions and a time period of 60 minutes. On receiving a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by <code>CreatorId</code>) has created fewer than 10 game sessions in the past 60 minutes.</p> */
		ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
		MetricGroups?: Array<string>;
		StoppedActions?: Array<FleetAction>;
		InstanceRoleArn?: string;

		/** Information about the use of a TLS/SSL certificate for a fleet. TLS certificate generation is enabled at the fleet level, with one certificate generated for the fleet. When this feature is enabled, the certificate can be retrieved using the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html">GameLift Server SDK</a> call <code>GetInstanceCertificate</code>. All instances in a fleet share the same certificate. */
		CertificateConfiguration?: CertificateConfiguration;
	}

	export enum FleetAttributesFleetType { ON_DEMAND = 0, SPOT = 1 }

	export enum FleetAttributesInstanceType { t2_micro = 0, t2_small = 1, t2_medium = 2, t2_large = 3, c3_large = 4, c3_xlarge = 5, c3_2xlarge = 6, c3_4xlarge = 7, c3_8xlarge = 8, c4_large = 9, c4_xlarge = 10, c4_2xlarge = 11, c4_4xlarge = 12, c4_8xlarge = 13, c5_large = 14, c5_xlarge = 15, c5_2xlarge = 16, c5_4xlarge = 17, c5_9xlarge = 18, c5_12xlarge = 19, c5_18xlarge = 20, c5_24xlarge = 21, r3_large = 22, r3_xlarge = 23, r3_2xlarge = 24, r3_4xlarge = 25, r3_8xlarge = 26, r4_large = 27, r4_xlarge = 28, r4_2xlarge = 29, r4_4xlarge = 30, r4_8xlarge = 31, r4_16xlarge = 32, r5_large = 33, r5_xlarge = 34, r5_2xlarge = 35, r5_4xlarge = 36, r5_8xlarge = 37, r5_12xlarge = 38, r5_16xlarge = 39, r5_24xlarge = 40, m3_medium = 41, m3_large = 42, m3_xlarge = 43, m3_2xlarge = 44, m4_large = 45, m4_xlarge = 46, m4_2xlarge = 47, m4_4xlarge = 48, m4_10xlarge = 49, m5_large = 50, m5_xlarge = 51, m5_2xlarge = 52, m5_4xlarge = 53, m5_8xlarge = 54, m5_12xlarge = 55, m5_16xlarge = 56, m5_24xlarge = 57 }

	export enum FleetAttributesStatus { NEW = 0, DOWNLOADING = 1, VALIDATING = 2, BUILDING = 3, ACTIVATING = 4, ACTIVE = 5, DELETING = 6, ERROR = 7, TERMINATED = 8 }

	export enum FleetAttributesNewGameSessionProtectionPolicy { NoProtection = 0, FullProtection = 1 }


	/** <p>A policy that limits the number of game sessions a player can create on the same fleet. This optional policy gives game owners control over how players can consume available game server resources. A resource creation policy makes the following statement: "An individual player can create a maximum number of new game sessions within a specified time period".</p> <p>The policy is evaluated when a player tries to create a new game session. For example: Assume you have a policy of 10 new game sessions and a time period of 60 minutes. On receiving a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by <code>CreatorId</code>) has created fewer than 10 game sessions in the past 60 minutes.</p> */
	export interface ResourceCreationLimitPolicy {
		NewGameSessionsPerCreator?: number;
		PolicyPeriodInMinutes?: number;
	}

	export enum FleetAction { AUTO_SCALING = 0 }


	/** Information about the use of a TLS/SSL certificate for a fleet. TLS certificate generation is enabled at the fleet level, with one certificate generated for the fleet. When this feature is enabled, the certificate can be retrieved using the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html">GameLift Server SDK</a> call <code>GetInstanceCertificate</code>. All instances in a fleet share the same certificate. */
	export interface CertificateConfiguration {
		CertificateType: CertificateConfigurationCertificateType;
	}

	export enum CertificateConfigurationCertificateType { DISABLED = 0, GENERATED = 1 }


	/** Represents the input for a request action. */
	export interface CreateFleetInput {
		Name: string;
		Description?: string;
		BuildId?: string;
		ScriptId?: string;
		ServerLaunchPath?: string;
		ServerLaunchParameters?: string;
		LogPaths?: Array<string>;
		EC2InstanceType: CreateFleetInputEC2InstanceType;
		EC2InboundPermissions?: Array<IpPermission>;
		NewGameSessionProtectionPolicy?: FleetAttributesNewGameSessionProtectionPolicy;

		/** <p>A collection of server process configurations that describe what processes to run on each instance in a fleet. Server processes run either a custom game build executable or a Realtime Servers script. Each instance in the fleet starts the specified server processes and continues to start new processes as existing processes end. Each instance regularly checks for an updated runtime configuration. </p> <p>The runtime configuration enables the instances in a fleet to run multiple processes simultaneously. Learn more about <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html"> Running Multiple Processes on a Fleet </a>.</p> <p>A Amazon GameLift instance is limited to 50 processes running simultaneously. To calculate the total number of processes in a runtime configuration, add the values of the <code>ConcurrentExecutions</code> parameter for each <a>ServerProcess</a> object.</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul> */
		RuntimeConfiguration?: RuntimeConfiguration;

		/** <p>A policy that limits the number of game sessions a player can create on the same fleet. This optional policy gives game owners control over how players can consume available game server resources. A resource creation policy makes the following statement: "An individual player can create a maximum number of new game sessions within a specified time period".</p> <p>The policy is evaluated when a player tries to create a new game session. For example: Assume you have a policy of 10 new game sessions and a time period of 60 minutes. On receiving a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by <code>CreatorId</code>) has created fewer than 10 game sessions in the past 60 minutes.</p> */
		ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
		MetricGroups?: Array<string>;
		PeerVpcAwsAccountId?: string;
		PeerVpcId?: string;
		FleetType?: FleetAttributesFleetType;
		InstanceRoleArn?: string;

		/** Information about the use of a TLS/SSL certificate for a fleet. TLS certificate generation is enabled at the fleet level, with one certificate generated for the fleet. When this feature is enabled, the certificate can be retrieved using the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html">GameLift Server SDK</a> call <code>GetInstanceCertificate</code>. All instances in a fleet share the same certificate. */
		CertificateConfiguration?: CertificateConfiguration;
		Tags?: Array<Tag>;
	}

	export enum CreateFleetInputEC2InstanceType { t2_micro = 0, t2_small = 1, t2_medium = 2, t2_large = 3, c3_large = 4, c3_xlarge = 5, c3_2xlarge = 6, c3_4xlarge = 7, c3_8xlarge = 8, c4_large = 9, c4_xlarge = 10, c4_2xlarge = 11, c4_4xlarge = 12, c4_8xlarge = 13, c5_large = 14, c5_xlarge = 15, c5_2xlarge = 16, c5_4xlarge = 17, c5_9xlarge = 18, c5_12xlarge = 19, c5_18xlarge = 20, c5_24xlarge = 21, r3_large = 22, r3_xlarge = 23, r3_2xlarge = 24, r3_4xlarge = 25, r3_8xlarge = 26, r4_large = 27, r4_xlarge = 28, r4_2xlarge = 29, r4_4xlarge = 30, r4_8xlarge = 31, r4_16xlarge = 32, r5_large = 33, r5_xlarge = 34, r5_2xlarge = 35, r5_4xlarge = 36, r5_8xlarge = 37, r5_12xlarge = 38, r5_16xlarge = 39, r5_24xlarge = 40, m3_medium = 41, m3_large = 42, m3_xlarge = 43, m3_2xlarge = 44, m4_large = 45, m4_xlarge = 46, m4_2xlarge = 47, m4_4xlarge = 48, m4_10xlarge = 49, m5_large = 50, m5_xlarge = 51, m5_2xlarge = 52, m5_4xlarge = 53, m5_8xlarge = 54, m5_12xlarge = 55, m5_16xlarge = 56, m5_24xlarge = 57 }


	/** A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift hosting resource. New game sessions that are started on the fleet are assigned an IP address/port number combination, which must fall into the fleet's allowed ranges. For fleets created with a custom game server, the ranges reflect the server's game session assignments. For Realtime Servers fleets, Amazon GameLift automatically opens two port ranges, one for TCP messaging and one for UDP for use by the Realtime servers. */
	export interface IpPermission {
		FromPort: number;
		ToPort: number;
		IpRange: string;
		Protocol: IpPermissionProtocol;
	}

	export enum IpPermissionProtocol { TCP = 0, UDP = 1 }


	/** <p>A collection of server process configurations that describe what processes to run on each instance in a fleet. Server processes run either a custom game build executable or a Realtime Servers script. Each instance in the fleet starts the specified server processes and continues to start new processes as existing processes end. Each instance regularly checks for an updated runtime configuration. </p> <p>The runtime configuration enables the instances in a fleet to run multiple processes simultaneously. Learn more about <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html"> Running Multiple Processes on a Fleet </a>.</p> <p>A Amazon GameLift instance is limited to 50 processes running simultaneously. To calculate the total number of processes in a runtime configuration, add the values of the <code>ConcurrentExecutions</code> parameter for each <a>ServerProcess</a> object.</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul> */
	export interface RuntimeConfiguration {
		ServerProcesses?: Array<ServerProcess>;
		MaxConcurrentGameSessionActivations?: number;
		GameSessionActivationTimeoutSeconds?: number;
	}


	/** A set of instructions for launching server processes on each instance in a fleet. Server processes run either a custom game build executable or a Realtime Servers script. Each instruction set identifies the location of the custom game build executable or Realtime launch script, optional launch parameters, and the number of server processes with this configuration to maintain concurrently on the instance. Server process configurations make up a fleet's <code> <a>RuntimeConfiguration</a> </code>. */
	export interface ServerProcess {
		LaunchPath: string;
		Parameters?: string;
		ConcurrentExecutions: number;
	}

	export interface CreateGameServerGroupOutput {

		/** <p> <b>This data type is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Properties describing a game server group resource. A game server group manages certain properties of a corresponding EC2 Auto Scaling group. </p> <p>A game server group is created by a successful call to <a>CreateGameServerGroup</a> and deleted by calling <a>DeleteGameServerGroup</a>. Game server group activity can be temporarily suspended and resumed by calling <a>SuspendGameServerGroup</a> and <a>ResumeGameServerGroup</a>. </p> */
		GameServerGroup?: GameServerGroup;
	}


	/** <p> <b>This data type is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Properties describing a game server group resource. A game server group manages certain properties of a corresponding EC2 Auto Scaling group. </p> <p>A game server group is created by a successful call to <a>CreateGameServerGroup</a> and deleted by calling <a>DeleteGameServerGroup</a>. Game server group activity can be temporarily suspended and resumed by calling <a>SuspendGameServerGroup</a> and <a>ResumeGameServerGroup</a>. </p> */
	export interface GameServerGroup {
		GameServerGroupName?: string;
		GameServerGroupArn?: string;
		RoleArn?: string;
		InstanceDefinitions?: Array<InstanceDefinition>;
		BalancingStrategy?: GameServerGroupBalancingStrategy;
		GameServerProtectionPolicy?: GameServerGroupGameServerProtectionPolicy;
		AutoScalingGroupArn?: string;
		Status?: GameServerGroupStatus;
		StatusReason?: string;
		SuspendedActions?: Array<GameServerGroupAction>;
		CreationTime?: Date;
		LastUpdatedTime?: Date;
	}


	/** <p> <b>This data type is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>An allowed instance type for your game server group. GameLift FleetIQ periodically evaluates each defined instance type for viability. It then updates the Auto Scaling group with the list of viable instance types.</p> */
	export interface InstanceDefinition {
		InstanceType: InstanceDefinitionInstanceType;
		WeightedCapacity?: string;
	}

	export enum InstanceDefinitionInstanceType { c4_large = 0, c4_xlarge = 1, c4_2xlarge = 2, c4_4xlarge = 3, c4_8xlarge = 4, c5_large = 5, c5_xlarge = 6, c5_2xlarge = 7, c5_4xlarge = 8, c5_9xlarge = 9, c5_12xlarge = 10, c5_18xlarge = 11, c5_24xlarge = 12, r4_large = 13, r4_xlarge = 14, r4_2xlarge = 15, r4_4xlarge = 16, r4_8xlarge = 17, r4_16xlarge = 18, r5_large = 19, r5_xlarge = 20, r5_2xlarge = 21, r5_4xlarge = 22, r5_8xlarge = 23, r5_12xlarge = 24, r5_16xlarge = 25, r5_24xlarge = 26, m4_large = 27, m4_xlarge = 28, m4_2xlarge = 29, m4_4xlarge = 30, m4_10xlarge = 31, m5_large = 32, m5_xlarge = 33, m5_2xlarge = 34, m5_4xlarge = 35, m5_8xlarge = 36, m5_12xlarge = 37, m5_16xlarge = 38, m5_24xlarge = 39 }

	export enum GameServerGroupBalancingStrategy { SPOT_ONLY = 0, SPOT_PREFERRED = 1 }

	export enum GameServerGroupGameServerProtectionPolicy { NO_PROTECTION = 0, FULL_PROTECTION = 1 }

	export enum GameServerGroupStatus { NEW = 0, ACTIVATING = 1, ACTIVE = 2, DELETE_SCHEDULED = 3, DELETING = 4, DELETED = 5, ERROR = 6 }

	export enum GameServerGroupAction { REPLACE_INSTANCE_TYPES = 0 }

	export interface CreateGameServerGroupInput {
		GameServerGroupName: string;
		RoleArn: string;
		MinSize: number;
		MaxSize: number;

		/** <p> <b>This data type is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>An EC2 launch template that contains configuration settings and game server code to be deployed to all instances in a game server group. </p> */
		LaunchTemplate: LaunchTemplateSpecification;
		InstanceDefinitions: Array<InstanceDefinition>;

		/** <p> <b>This data type is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Configuration settings for intelligent autoscaling that uses target tracking. An autoscaling policy can be specified when a new game server group is created with <a>CreateGameServerGroup</a>. If a group has an autoscaling policy, the Auto Scaling group takes action based on this policy, in addition to (and potentially in conflict with) any other autoscaling policies that are separately applied to the Auto Scaling group. </p> */
		AutoScalingPolicy?: GameServerGroupAutoScalingPolicy;
		BalancingStrategy?: GameServerGroupBalancingStrategy;
		GameServerProtectionPolicy?: GameServerGroupGameServerProtectionPolicy;
		VpcSubnets?: Array<string>;
		Tags?: Array<Tag>;
	}


	/** <p> <b>This data type is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>An EC2 launch template that contains configuration settings and game server code to be deployed to all instances in a game server group. </p> */
	export interface LaunchTemplateSpecification {
		LaunchTemplateId?: string;
		LaunchTemplateName?: string;
		Version?: string;
	}


	/** <p> <b>This data type is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Configuration settings for intelligent autoscaling that uses target tracking. An autoscaling policy can be specified when a new game server group is created with <a>CreateGameServerGroup</a>. If a group has an autoscaling policy, the Auto Scaling group takes action based on this policy, in addition to (and potentially in conflict with) any other autoscaling policies that are separately applied to the Auto Scaling group. </p> */
	export interface GameServerGroupAutoScalingPolicy {
		EstimatedInstanceWarmup?: number;

		/** <p> <b>This data type is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Settings for a target-based scaling policy applied to Auto Scaling group. These settings are used to create a target-based policy that tracks the GameLift FleetIQ metric "PercentUtilizedGameServers" and specifies a target value for the metric. As player usage changes, the policy triggers to adjust the game server group capacity so that the metric returns to the target value. </p> */
		TargetTrackingConfiguration: TargetTrackingConfiguration;
	}


	/** <p> <b>This data type is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Settings for a target-based scaling policy applied to Auto Scaling group. These settings are used to create a target-based policy that tracks the GameLift FleetIQ metric "PercentUtilizedGameServers" and specifies a target value for the metric. As player usage changes, the policy triggers to adjust the game server group capacity so that the metric returns to the target value. </p> */
	export interface TargetTrackingConfiguration {
		TargetValue: number;
	}


	/** Represents the returned data in response to a request action. */
	export interface CreateGameSessionOutput {

		/** <p>Properties describing a game session.</p> <p>A game session in ACTIVE status can host players. When a game session ends, its status is set to <code>TERMINATED</code>. </p> <p>Once the session ends, the game session object is retained for 30 days. This means you can reuse idempotency token values after this time. Game session logs are retained for 14 days.</p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul> */
		GameSession?: GameSession;
	}


	/** <p>Properties describing a game session.</p> <p>A game session in ACTIVE status can host players. When a game session ends, its status is set to <code>TERMINATED</code>. </p> <p>Once the session ends, the game session object is retained for 30 days. This means you can reuse idempotency token values after this time. Game session logs are retained for 14 days.</p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul> */
	export interface GameSession {
		GameSessionId?: string;
		Name?: string;
		FleetId?: string;
		FleetArn?: string;
		CreationTime?: Date;
		TerminationTime?: Date;
		CurrentPlayerSessionCount?: number;
		MaximumPlayerSessionCount?: number;
		Status?: GameSessionStatus;
		StatusReason?: GameSessionStatusReason;
		GameProperties?: Array<GameProperty>;
		IpAddress?: string;
		DnsName?: string;
		Port?: number;
		PlayerSessionCreationPolicy?: GameSessionPlayerSessionCreationPolicy;
		CreatorId?: string;
		GameSessionData?: string;
		MatchmakerData?: string;
	}

	export enum GameSessionStatus { ACTIVE = 0, ACTIVATING = 1, TERMINATED = 2, TERMINATING = 3, ERROR = 4 }

	export enum GameSessionStatusReason { INTERRUPTED = 0 }


	/** Set of key-value pairs that contain information about a game session. When included in a game session request, these properties communicate details to be used when setting up the new game session. For example, a game property might specify a game mode, level, or map. Game properties are passed to the game server process when initiating a new game session. For more information, see the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-create"> Amazon GameLift Developer Guide</a>. */
	export interface GameProperty {
		Key: string;
		Value: string;
	}

	export enum GameSessionPlayerSessionCreationPolicy { ACCEPT_ALL = 0, DENY_ALL = 1 }


	/** Represents the input for a request action. */
	export interface CreateGameSessionInput {
		FleetId?: string;
		AliasId?: string;
		MaximumPlayerSessionCount: number;
		Name?: string;
		GameProperties?: Array<GameProperty>;
		CreatorId?: string;
		GameSessionId?: string;
		IdempotencyToken?: string;
		GameSessionData?: string;
	}

	export interface InvalidFleetStatusException {
	}

	export interface TerminalRoutingStrategyException {
	}

	export interface FleetCapacityExceededException {
	}

	export interface IdempotentParameterMismatchException {
	}


	/** Represents the returned data in response to a request action. */
	export interface CreateGameSessionQueueOutput {

		/** <p>Configuration of a queue that is used to process game session placement requests. The queue configuration identifies several game features:</p> <ul> <li> <p>The destinations where a new game session can potentially be hosted. Amazon GameLift tries these destinations in an order based on either the queue's default order or player latency information, if provided in a placement request. With latency information, Amazon GameLift can place game sessions where the majority of players are reporting the lowest possible latency. </p> </li> <li> <p>The length of time that placement requests can wait in the queue before timing out. </p> </li> <li> <p>A set of optional latency policies that protect individual players from high latencies, preventing game sessions from being placed where any individual player is reporting latency higher than a policy's maximum.</p> </li> </ul> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul> */
		GameSessionQueue?: GameSessionQueue;
	}


	/** <p>Configuration of a queue that is used to process game session placement requests. The queue configuration identifies several game features:</p> <ul> <li> <p>The destinations where a new game session can potentially be hosted. Amazon GameLift tries these destinations in an order based on either the queue's default order or player latency information, if provided in a placement request. With latency information, Amazon GameLift can place game sessions where the majority of players are reporting the lowest possible latency. </p> </li> <li> <p>The length of time that placement requests can wait in the queue before timing out. </p> </li> <li> <p>A set of optional latency policies that protect individual players from high latencies, preventing game sessions from being placed where any individual player is reporting latency higher than a policy's maximum.</p> </li> </ul> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul> */
	export interface GameSessionQueue {
		Name?: string;
		GameSessionQueueArn?: string;
		TimeoutInSeconds?: number;
		PlayerLatencyPolicies?: Array<PlayerLatencyPolicy>;
		Destinations?: Array<GameSessionQueueDestination>;
	}


	/** <p>Queue setting that determines the highest latency allowed for individual players when placing a game session. When a latency policy is in force, a game session cannot be placed with any fleet in a Region where a player reports latency higher than the cap. Latency policies are only enforced when the placement request contains player latency information.</p> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul> */
	export interface PlayerLatencyPolicy {
		MaximumIndividualPlayerLatencyMilliseconds?: number;
		PolicyDurationSeconds?: number;
	}


	/** <p>Fleet designated in a game session queue. Requests for new game sessions in the queue are fulfilled by starting a new game session on any destination that is configured for a queue. </p> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul> */
	export interface GameSessionQueueDestination {
		DestinationArn?: string;
	}


	/** Represents the input for a request action. */
	export interface CreateGameSessionQueueInput {
		Name: string;
		TimeoutInSeconds?: number;
		PlayerLatencyPolicies?: Array<PlayerLatencyPolicy>;
		Destinations?: Array<GameSessionQueueDestination>;
		Tags?: Array<Tag>;
	}


	/** Represents the returned data in response to a request action. */
	export interface CreateMatchmakingConfigurationOutput {

		/** Guidelines for use with FlexMatch to match players into games. All matchmaking requests must specify a matchmaking configuration. */
		Configuration?: MatchmakingConfiguration;
	}


	/** Guidelines for use with FlexMatch to match players into games. All matchmaking requests must specify a matchmaking configuration. */
	export interface MatchmakingConfiguration {
		Name?: string;

		/**
		 * Data type used for Matchmaking Configuration ARN.
		 * Pattern: ^arn:.*:matchmakingconfiguration\/[a-zA-Z0-9-\.]*
		 */
		ConfigurationArn?: string;
		Description?: string;
		GameSessionQueueArns?: Array<string>;
		RequestTimeoutSeconds?: number;
		AcceptanceTimeoutSeconds?: number;
		AcceptanceRequired?: boolean;
		RuleSetName?: string;

		/**
		 * Data type used for Matchmaking RuleSet ARN.
		 * Pattern: ^arn:.*:matchmakingruleset\/[a-zA-Z0-9-\.]*
		 */
		RuleSetArn?: string;
		NotificationTarget?: string;
		AdditionalPlayerCount?: number;
		CustomEventData?: string;
		CreationTime?: Date;
		GameProperties?: Array<GameProperty>;
		GameSessionData?: string;
		BackfillMode?: MatchmakingConfigurationBackfillMode;
	}

	export enum MatchmakingConfigurationBackfillMode { AUTOMATIC = 0, MANUAL = 1 }


	/** Represents the input for a request action. */
	export interface CreateMatchmakingConfigurationInput {
		Name: string;
		Description?: string;
		GameSessionQueueArns: Array<string>;
		RequestTimeoutSeconds: number;
		AcceptanceTimeoutSeconds?: number;
		AcceptanceRequired: boolean;
		RuleSetName: string;
		NotificationTarget?: string;
		AdditionalPlayerCount?: number;
		CustomEventData?: string;
		GameProperties?: Array<GameProperty>;
		GameSessionData?: string;
		BackfillMode?: MatchmakingConfigurationBackfillMode;
		Tags?: Array<Tag>;
	}


	/** Represents the returned data in response to a request action. */
	export interface CreateMatchmakingRuleSetOutput {

		/** <p>Set of rule statements, used with FlexMatch, that determine how to build your player matches. Each rule set describes a type of group to be created and defines the parameters for acceptable player matches. Rule sets are used in <a>MatchmakingConfiguration</a> objects.</p> <p>A rule set may define the following elements for a match. For detailed information and examples showing how to construct a rule set, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-rulesets.html">Build a FlexMatch Rule Set</a>. </p> <ul> <li> <p>Teams -- Required. A rule set must define one or multiple teams for the match and set minimum and maximum team sizes. For example, a rule set might describe a 4x4 match that requires all eight slots to be filled. </p> </li> <li> <p>Player attributes -- Optional. These attributes specify a set of player characteristics to evaluate when looking for a match. Matchmaking requests that use a rule set with player attributes must provide the corresponding attribute values. For example, an attribute might specify a player's skill or level.</p> </li> <li> <p>Rules -- Optional. Rules define how to evaluate potential players for a match based on player attributes. A rule might specify minimum requirements for individual players, teams, or entire matches. For example, a rule might require each player to meet a certain skill level, each team to have at least one player in a certain role, or the match to have a minimum average skill level. or may describe an entire group--such as all teams must be evenly matched or have at least one player in a certain role. </p> </li> <li> <p>Expansions -- Optional. Expansions allow you to relax the rules after a period of time when no acceptable matches are found. This feature lets you balance getting players into games in a reasonable amount of time instead of making them wait indefinitely for the best possible match. For example, you might use an expansion to increase the maximum skill variance between players after 30 seconds.</p> </li> </ul> */
		RuleSet: MatchmakingRuleSet;
	}


	/** <p>Set of rule statements, used with FlexMatch, that determine how to build your player matches. Each rule set describes a type of group to be created and defines the parameters for acceptable player matches. Rule sets are used in <a>MatchmakingConfiguration</a> objects.</p> <p>A rule set may define the following elements for a match. For detailed information and examples showing how to construct a rule set, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-rulesets.html">Build a FlexMatch Rule Set</a>. </p> <ul> <li> <p>Teams -- Required. A rule set must define one or multiple teams for the match and set minimum and maximum team sizes. For example, a rule set might describe a 4x4 match that requires all eight slots to be filled. </p> </li> <li> <p>Player attributes -- Optional. These attributes specify a set of player characteristics to evaluate when looking for a match. Matchmaking requests that use a rule set with player attributes must provide the corresponding attribute values. For example, an attribute might specify a player's skill or level.</p> </li> <li> <p>Rules -- Optional. Rules define how to evaluate potential players for a match based on player attributes. A rule might specify minimum requirements for individual players, teams, or entire matches. For example, a rule might require each player to meet a certain skill level, each team to have at least one player in a certain role, or the match to have a minimum average skill level. or may describe an entire group--such as all teams must be evenly matched or have at least one player in a certain role. </p> </li> <li> <p>Expansions -- Optional. Expansions allow you to relax the rules after a period of time when no acceptable matches are found. This feature lets you balance getting players into games in a reasonable amount of time instead of making them wait indefinitely for the best possible match. For example, you might use an expansion to increase the maximum skill variance between players after 30 seconds.</p> </li> </ul> */
	export interface MatchmakingRuleSet {
		RuleSetName?: string;

		/**
		 * Data type used for Matchmaking RuleSet ARN.
		 * Pattern: ^arn:.*:matchmakingruleset\/[a-zA-Z0-9-\.]*
		 */
		RuleSetArn?: string;
		RuleSetBody: string;
		CreationTime?: Date;
	}


	/** Represents the input for a request action. */
	export interface CreateMatchmakingRuleSetInput {
		Name: string;
		RuleSetBody: string;
		Tags?: Array<Tag>;
	}


	/** Represents the returned data in response to a request action. */
	export interface CreatePlayerSessionOutput {

		/** <p>Properties describing a player session. Player session objects are created either by creating a player session for a specific game session, or as part of a game session placement. A player session represents either a player reservation for a game session (status <code>RESERVED</code>) or actual player activity in a game session (status <code>ACTIVE</code>). A player session object (including player data) is automatically passed to a game session when the player connects to the game session and is validated.</p> <p>When a player disconnects, the player session status changes to <code>COMPLETED</code>. Once the session ends, the player session object is retained for 30 days and then removed.</p> <ul> <li> <p> <a>CreatePlayerSession</a> </p> </li> <li> <p> <a>CreatePlayerSessions</a> </p> </li> <li> <p> <a>DescribePlayerSessions</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul> */
		PlayerSession?: PlayerSession;
	}


	/** <p>Properties describing a player session. Player session objects are created either by creating a player session for a specific game session, or as part of a game session placement. A player session represents either a player reservation for a game session (status <code>RESERVED</code>) or actual player activity in a game session (status <code>ACTIVE</code>). A player session object (including player data) is automatically passed to a game session when the player connects to the game session and is validated.</p> <p>When a player disconnects, the player session status changes to <code>COMPLETED</code>. Once the session ends, the player session object is retained for 30 days and then removed.</p> <ul> <li> <p> <a>CreatePlayerSession</a> </p> </li> <li> <p> <a>CreatePlayerSessions</a> </p> </li> <li> <p> <a>DescribePlayerSessions</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul> */
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
		Port?: number;
		PlayerData?: string;
	}

	export enum PlayerSessionStatus { RESERVED = 0, ACTIVE = 1, COMPLETED = 2, TIMEDOUT = 3 }


	/** Represents the input for a request action. */
	export interface CreatePlayerSessionInput {
		GameSessionId: string;
		PlayerId: string;
		PlayerData?: string;
	}

	export interface InvalidGameSessionStatusException {
	}

	export interface GameSessionFullException {
	}


	/** Represents the returned data in response to a request action. */
	export interface CreatePlayerSessionsOutput {
		PlayerSessions?: Array<PlayerSession>;
	}


	/** Represents the input for a request action. */
	export interface CreatePlayerSessionsInput {
		GameSessionId: string;
		PlayerIds: Array<string>;
		PlayerDataMap?: PlayerDataMap;
	}

	export interface PlayerDataMap {
	}

	export interface CreateScriptOutput {

		/** <p>Properties describing a Realtime script.</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateScript</a> </p> </li> <li> <p> <a>ListScripts</a> </p> </li> <li> <p> <a>DescribeScript</a> </p> </li> <li> <p> <a>UpdateScript</a> </p> </li> <li> <p> <a>DeleteScript</a> </p> </li> </ul> */
		Script?: Script;
	}


	/** <p>Properties describing a Realtime script.</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateScript</a> </p> </li> <li> <p> <a>ListScripts</a> </p> </li> <li> <p> <a>DescribeScript</a> </p> </li> <li> <p> <a>UpdateScript</a> </p> </li> <li> <p> <a>DeleteScript</a> </p> </li> </ul> */
	export interface Script {
		ScriptId?: string;
		ScriptArn?: string;
		Name?: string;
		Version?: string;
		SizeOnDisk?: number;
		CreationTime?: Date;

		/** The location in S3 where build or script files are stored for access by Amazon GameLift. This location is specified in <a>CreateBuild</a>, <a>CreateScript</a>, and <a>UpdateScript</a> requests. */
		StorageLocation?: S3Location;
	}

	export interface CreateScriptInput {
		Name?: string;
		Version?: string;

		/** The location in S3 where build or script files are stored for access by Amazon GameLift. This location is specified in <a>CreateBuild</a>, <a>CreateScript</a>, and <a>UpdateScript</a> requests. */
		StorageLocation?: S3Location;
		ZipFile?: string;
		Tags?: Array<Tag>;
	}


	/** Represents the returned data in response to a request action. */
	export interface CreateVpcPeeringAuthorizationOutput {

		/** <p>Represents an authorization for a VPC peering connection between the VPC for an Amazon GameLift fleet and another VPC on an account you have access to. This authorization must exist and be valid for the peering connection to be established. Authorizations are valid for 24 hours after they are issued.</p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> </p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> </p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> </p> </li> </ul> */
		VpcPeeringAuthorization?: VpcPeeringAuthorization;
	}


	/** <p>Represents an authorization for a VPC peering connection between the VPC for an Amazon GameLift fleet and another VPC on an account you have access to. This authorization must exist and be valid for the peering connection to be established. Authorizations are valid for 24 hours after they are issued.</p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> </p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> </p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> </p> </li> </ul> */
	export interface VpcPeeringAuthorization {
		GameLiftAwsAccountId?: string;
		PeerVpcAwsAccountId?: string;
		PeerVpcId?: string;
		CreationTime?: Date;
		ExpirationTime?: Date;
	}


	/** Represents the input for a request action. */
	export interface CreateVpcPeeringAuthorizationInput {
		GameLiftAwsAccountId: string;
		PeerVpcId: string;
	}

	export interface CreateVpcPeeringConnectionOutput {
	}


	/** Represents the input for a request action. */
	export interface CreateVpcPeeringConnectionInput {
		FleetId: string;
		PeerVpcAwsAccountId: string;
		PeerVpcId: string;
	}


	/** Represents the input for a request action. */
	export interface DeleteAliasInput {
		AliasId: string;
	}


	/** Represents the input for a request action. */
	export interface DeleteBuildInput {
		BuildId: string;
	}


	/** Represents the input for a request action. */
	export interface DeleteFleetInput {
		FleetId: string;
	}

	export interface DeleteGameServerGroupOutput {

		/** <p> <b>This data type is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Properties describing a game server group resource. A game server group manages certain properties of a corresponding EC2 Auto Scaling group. </p> <p>A game server group is created by a successful call to <a>CreateGameServerGroup</a> and deleted by calling <a>DeleteGameServerGroup</a>. Game server group activity can be temporarily suspended and resumed by calling <a>SuspendGameServerGroup</a> and <a>ResumeGameServerGroup</a>. </p> */
		GameServerGroup?: GameServerGroup;
	}

	export interface DeleteGameServerGroupInput {
		GameServerGroupName: string;
		DeleteOption?: DeleteGameServerGroupInputDeleteOption;
	}

	export enum DeleteGameServerGroupInputDeleteOption { SAFE_DELETE = 0, FORCE_DELETE = 1, RETAIN = 2 }

	export interface DeleteGameSessionQueueOutput {
	}


	/** Represents the input for a request action.  */
	export interface DeleteGameSessionQueueInput {
		Name: string;
	}

	export interface DeleteMatchmakingConfigurationOutput {
	}


	/** Represents the input for a request action. */
	export interface DeleteMatchmakingConfigurationInput {
		Name: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface DeleteMatchmakingRuleSetOutput {
	}


	/** Represents the input for a request action. */
	export interface DeleteMatchmakingRuleSetInput {
		Name: string;
	}


	/** Represents the input for a request action. */
	export interface DeleteScalingPolicyInput {
		Name: string;
		FleetId: string;
	}

	export interface DeleteScriptInput {
		ScriptId: string;
	}

	export interface DeleteVpcPeeringAuthorizationOutput {
	}


	/** Represents the input for a request action. */
	export interface DeleteVpcPeeringAuthorizationInput {
		GameLiftAwsAccountId: string;
		PeerVpcId: string;
	}

	export interface DeleteVpcPeeringConnectionOutput {
	}


	/** Represents the input for a request action. */
	export interface DeleteVpcPeeringConnectionInput {
		FleetId: string;
		VpcPeeringConnectionId: string;
	}

	export interface DeregisterGameServerInput {
		GameServerGroupName: string;
		GameServerId: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface DescribeAliasOutput {

		/** <p>Properties that describe an alias resource.</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul> */
		Alias?: Alias;
	}


	/** Represents the input for a request action. */
	export interface DescribeAliasInput {
		AliasId: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface DescribeBuildOutput {

		/** <p>Properties describing a custom game build.</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateBuild</a> </p> </li> <li> <p> <a>ListBuilds</a> </p> </li> <li> <p> <a>DescribeBuild</a> </p> </li> <li> <p> <a>UpdateBuild</a> </p> </li> <li> <p> <a>DeleteBuild</a> </p> </li> </ul> */
		Build?: Build;
	}


	/** Represents the input for a request action. */
	export interface DescribeBuildInput {
		BuildId: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface DescribeEC2InstanceLimitsOutput {
		EC2InstanceLimits?: Array<EC2InstanceLimit>;
	}


	/** The maximum number of instances allowed based on the Amazon Elastic Compute Cloud (Amazon EC2) instance type. Instance limits can be retrieved by calling <a>DescribeEC2InstanceLimits</a>. */
	export interface EC2InstanceLimit {
		EC2InstanceType?: EC2InstanceLimitEC2InstanceType;
		CurrentInstances?: number;
		InstanceLimit?: number;
	}

	export enum EC2InstanceLimitEC2InstanceType { t2_micro = 0, t2_small = 1, t2_medium = 2, t2_large = 3, c3_large = 4, c3_xlarge = 5, c3_2xlarge = 6, c3_4xlarge = 7, c3_8xlarge = 8, c4_large = 9, c4_xlarge = 10, c4_2xlarge = 11, c4_4xlarge = 12, c4_8xlarge = 13, c5_large = 14, c5_xlarge = 15, c5_2xlarge = 16, c5_4xlarge = 17, c5_9xlarge = 18, c5_12xlarge = 19, c5_18xlarge = 20, c5_24xlarge = 21, r3_large = 22, r3_xlarge = 23, r3_2xlarge = 24, r3_4xlarge = 25, r3_8xlarge = 26, r4_large = 27, r4_xlarge = 28, r4_2xlarge = 29, r4_4xlarge = 30, r4_8xlarge = 31, r4_16xlarge = 32, r5_large = 33, r5_xlarge = 34, r5_2xlarge = 35, r5_4xlarge = 36, r5_8xlarge = 37, r5_12xlarge = 38, r5_16xlarge = 39, r5_24xlarge = 40, m3_medium = 41, m3_large = 42, m3_xlarge = 43, m3_2xlarge = 44, m4_large = 45, m4_xlarge = 46, m4_2xlarge = 47, m4_4xlarge = 48, m4_10xlarge = 49, m5_large = 50, m5_xlarge = 51, m5_2xlarge = 52, m5_4xlarge = 53, m5_8xlarge = 54, m5_12xlarge = 55, m5_16xlarge = 56, m5_24xlarge = 57 }


	/** Represents the input for a request action. */
	export interface DescribeEC2InstanceLimitsInput {
		EC2InstanceType?: DescribeEC2InstanceLimitsInputEC2InstanceType;
	}

	export enum DescribeEC2InstanceLimitsInputEC2InstanceType { t2_micro = 0, t2_small = 1, t2_medium = 2, t2_large = 3, c3_large = 4, c3_xlarge = 5, c3_2xlarge = 6, c3_4xlarge = 7, c3_8xlarge = 8, c4_large = 9, c4_xlarge = 10, c4_2xlarge = 11, c4_4xlarge = 12, c4_8xlarge = 13, c5_large = 14, c5_xlarge = 15, c5_2xlarge = 16, c5_4xlarge = 17, c5_9xlarge = 18, c5_12xlarge = 19, c5_18xlarge = 20, c5_24xlarge = 21, r3_large = 22, r3_xlarge = 23, r3_2xlarge = 24, r3_4xlarge = 25, r3_8xlarge = 26, r4_large = 27, r4_xlarge = 28, r4_2xlarge = 29, r4_4xlarge = 30, r4_8xlarge = 31, r4_16xlarge = 32, r5_large = 33, r5_xlarge = 34, r5_2xlarge = 35, r5_4xlarge = 36, r5_8xlarge = 37, r5_12xlarge = 38, r5_16xlarge = 39, r5_24xlarge = 40, m3_medium = 41, m3_large = 42, m3_xlarge = 43, m3_2xlarge = 44, m4_large = 45, m4_xlarge = 46, m4_2xlarge = 47, m4_4xlarge = 48, m4_10xlarge = 49, m5_large = 50, m5_xlarge = 51, m5_2xlarge = 52, m5_4xlarge = 53, m5_8xlarge = 54, m5_12xlarge = 55, m5_16xlarge = 56, m5_24xlarge = 57 }


	/** Represents the returned data in response to a request action. */
	export interface DescribeFleetAttributesOutput {
		FleetAttributes?: Array<FleetAttributes>;
		NextToken?: string;
	}


	/** Represents the input for a request action. */
	export interface DescribeFleetAttributesInput {
		FleetIds?: Array<string>;
		Limit?: number;
		NextToken?: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface DescribeFleetCapacityOutput {
		FleetCapacity?: Array<FleetCapacity>;
		NextToken?: string;
	}


	/** <p>Information about the fleet's capacity. Fleet capacity is measured in EC2 instances. By default, new fleets have a capacity of one instance, but can be updated as needed. The maximum number of instances for a fleet is determined by the fleet's instance type.</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul> */
	export interface FleetCapacity {
		FleetId?: string;
		InstanceType?: FleetCapacityInstanceType;

		/** <p>Current status of fleet capacity. The number of active instances should match or be in the process of matching the number of desired instances. Pending and terminating counts are non-zero only if fleet capacity is adjusting to an <a>UpdateFleetCapacity</a> request, or if access to resources is temporarily affected.</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul> */
		InstanceCounts?: EC2InstanceCounts;
	}

	export enum FleetCapacityInstanceType { t2_micro = 0, t2_small = 1, t2_medium = 2, t2_large = 3, c3_large = 4, c3_xlarge = 5, c3_2xlarge = 6, c3_4xlarge = 7, c3_8xlarge = 8, c4_large = 9, c4_xlarge = 10, c4_2xlarge = 11, c4_4xlarge = 12, c4_8xlarge = 13, c5_large = 14, c5_xlarge = 15, c5_2xlarge = 16, c5_4xlarge = 17, c5_9xlarge = 18, c5_12xlarge = 19, c5_18xlarge = 20, c5_24xlarge = 21, r3_large = 22, r3_xlarge = 23, r3_2xlarge = 24, r3_4xlarge = 25, r3_8xlarge = 26, r4_large = 27, r4_xlarge = 28, r4_2xlarge = 29, r4_4xlarge = 30, r4_8xlarge = 31, r4_16xlarge = 32, r5_large = 33, r5_xlarge = 34, r5_2xlarge = 35, r5_4xlarge = 36, r5_8xlarge = 37, r5_12xlarge = 38, r5_16xlarge = 39, r5_24xlarge = 40, m3_medium = 41, m3_large = 42, m3_xlarge = 43, m3_2xlarge = 44, m4_large = 45, m4_xlarge = 46, m4_2xlarge = 47, m4_4xlarge = 48, m4_10xlarge = 49, m5_large = 50, m5_xlarge = 51, m5_2xlarge = 52, m5_4xlarge = 53, m5_8xlarge = 54, m5_12xlarge = 55, m5_16xlarge = 56, m5_24xlarge = 57 }


	/** <p>Current status of fleet capacity. The number of active instances should match or be in the process of matching the number of desired instances. Pending and terminating counts are non-zero only if fleet capacity is adjusting to an <a>UpdateFleetCapacity</a> request, or if access to resources is temporarily affected.</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul> */
	export interface EC2InstanceCounts {
		DESIRED?: number;
		MINIMUM?: number;
		MAXIMUM?: number;
		PENDING?: number;
		ACTIVE?: number;
		IDLE?: number;
		TERMINATING?: number;
	}


	/** Represents the input for a request action. */
	export interface DescribeFleetCapacityInput {
		FleetIds?: Array<string>;
		Limit?: number;
		NextToken?: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface DescribeFleetEventsOutput {
		Events?: Array<Event>;
		NextToken?: string;
	}


	/** Log entry describing an event that involves Amazon GameLift resources (such as a fleet). In addition to tracking activity, event codes and messages can provide additional information for troubleshooting and debugging problems. */
	export interface Event {
		EventId?: string;
		ResourceId?: string;
		EventCode?: EventEventCode;
		Message?: string;
		EventTime?: Date;
		PreSignedLogUrl?: string;
	}

	export enum EventEventCode { GENERIC_EVENT = 0, FLEET_CREATED = 1, FLEET_DELETED = 2, FLEET_SCALING_EVENT = 3, FLEET_STATE_DOWNLOADING = 4, FLEET_STATE_VALIDATING = 5, FLEET_STATE_BUILDING = 6, FLEET_STATE_ACTIVATING = 7, FLEET_STATE_ACTIVE = 8, FLEET_STATE_ERROR = 9, FLEET_INITIALIZATION_FAILED = 10, FLEET_BINARY_DOWNLOAD_FAILED = 11, FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND = 12, FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE = 13, FLEET_VALIDATION_TIMED_OUT = 14, FLEET_ACTIVATION_FAILED = 15, FLEET_ACTIVATION_FAILED_NO_INSTANCES = 16, FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED = 17, SERVER_PROCESS_INVALID_PATH = 18, SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT = 19, SERVER_PROCESS_PROCESS_READY_TIMEOUT = 20, SERVER_PROCESS_CRASHED = 21, SERVER_PROCESS_TERMINATED_UNHEALTHY = 22, SERVER_PROCESS_FORCE_TERMINATED = 23, SERVER_PROCESS_PROCESS_EXIT_TIMEOUT = 24, GAME_SESSION_ACTIVATION_TIMEOUT = 25, FLEET_CREATION_EXTRACTING_BUILD = 26, FLEET_CREATION_RUNNING_INSTALLER = 27, FLEET_CREATION_VALIDATING_RUNTIME_CONFIG = 28, FLEET_VPC_PEERING_SUCCEEDED = 29, FLEET_VPC_PEERING_FAILED = 30, FLEET_VPC_PEERING_DELETED = 31, INSTANCE_INTERRUPTED = 32 }


	/** Represents the input for a request action. */
	export interface DescribeFleetEventsInput {
		FleetId: string;
		StartTime?: Date;
		EndTime?: Date;
		Limit?: number;
		NextToken?: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface DescribeFleetPortSettingsOutput {
		InboundPermissions?: Array<IpPermission>;
	}


	/** Represents the input for a request action. */
	export interface DescribeFleetPortSettingsInput {
		FleetId: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface DescribeFleetUtilizationOutput {
		FleetUtilization?: Array<FleetUtilization>;
		NextToken?: string;
	}


	/** <p>Current status of fleet utilization, including the number of game and player sessions being hosted.</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul> */
	export interface FleetUtilization {
		FleetId?: string;
		ActiveServerProcessCount?: number;
		ActiveGameSessionCount?: number;
		CurrentPlayerSessionCount?: number;
		MaximumPlayerSessionCount?: number;
	}


	/** Represents the input for a request action. */
	export interface DescribeFleetUtilizationInput {
		FleetIds?: Array<string>;
		Limit?: number;
		NextToken?: string;
	}

	export interface DescribeGameServerOutput {

		/** <p> <b>This data type is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Properties describing a game server resource. </p> <p>A game server resource is created by a successful call to <a>RegisterGameServer</a> and deleted by calling <a>DeregisterGameServer</a>. </p> */
		GameServer?: GameServer;
	}

	export interface DescribeGameServerInput {
		GameServerGroupName: string;
		GameServerId: string;
	}

	export interface DescribeGameServerGroupOutput {

		/** <p> <b>This data type is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Properties describing a game server group resource. A game server group manages certain properties of a corresponding EC2 Auto Scaling group. </p> <p>A game server group is created by a successful call to <a>CreateGameServerGroup</a> and deleted by calling <a>DeleteGameServerGroup</a>. Game server group activity can be temporarily suspended and resumed by calling <a>SuspendGameServerGroup</a> and <a>ResumeGameServerGroup</a>. </p> */
		GameServerGroup?: GameServerGroup;
	}

	export interface DescribeGameServerGroupInput {
		GameServerGroupName: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface DescribeGameSessionDetailsOutput {
		GameSessionDetails?: Array<GameSessionDetail>;
		NextToken?: string;
	}


	/** A game session's properties plus the protection policy currently in force. */
	export interface GameSessionDetail {

		/** <p>Properties describing a game session.</p> <p>A game session in ACTIVE status can host players. When a game session ends, its status is set to <code>TERMINATED</code>. </p> <p>Once the session ends, the game session object is retained for 30 days. This means you can reuse idempotency token values after this time. Game session logs are retained for 14 days.</p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul> */
		GameSession?: GameSession;
		ProtectionPolicy?: FleetAttributesNewGameSessionProtectionPolicy;
	}


	/** Represents the input for a request action. */
	export interface DescribeGameSessionDetailsInput {
		FleetId?: string;
		GameSessionId?: string;
		AliasId?: string;
		StatusFilter?: string;
		Limit?: number;
		NextToken?: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface DescribeGameSessionPlacementOutput {

		/** <p>Object that describes a <a>StartGameSessionPlacement</a> request. This object includes the full details of the original request plus the current status and start/end time stamps.</p> <p>Game session placement-related operations include:</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> */
		GameSessionPlacement?: GameSessionPlacement;
	}


	/** <p>Object that describes a <a>StartGameSessionPlacement</a> request. This object includes the full details of the original request plus the current status and start/end time stamps.</p> <p>Game session placement-related operations include:</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> */
	export interface GameSessionPlacement {
		PlacementId?: string;
		GameSessionQueueName?: string;
		Status?: GameSessionPlacementStatus;
		GameProperties?: Array<GameProperty>;
		MaximumPlayerSessionCount?: number;
		GameSessionName?: string;
		GameSessionId?: string;
		GameSessionArn?: string;
		GameSessionRegion?: string;
		PlayerLatencies?: Array<PlayerLatency>;
		StartTime?: Date;
		EndTime?: Date;
		IpAddress?: string;
		DnsName?: string;
		Port?: number;
		PlacedPlayerSessions?: Array<PlacedPlayerSession>;
		GameSessionData?: string;
		MatchmakerData?: string;
	}

	export enum GameSessionPlacementStatus { PENDING = 0, FULFILLED = 1, CANCELLED = 2, TIMED_OUT = 3, FAILED = 4 }


	/** Regional latency information for a player, used when requesting a new game session with <a>StartGameSessionPlacement</a>. This value indicates the amount of time lag that exists when the player is connected to a fleet in the specified Region. The relative difference between a player's latency values for multiple Regions are used to determine which fleets are best suited to place a new game session for the player.  */
	export interface PlayerLatency {
		PlayerId?: string;
		RegionIdentifier?: string;
		LatencyInMilliseconds?: number;
	}


	/** <p>Information about a player session that was created as part of a <a>StartGameSessionPlacement</a> request. This object contains only the player ID and player session ID. To retrieve full details on a player session, call <a>DescribePlayerSessions</a> with the player session ID.</p> <ul> <li> <p> <a>CreatePlayerSession</a> </p> </li> <li> <p> <a>CreatePlayerSessions</a> </p> </li> <li> <p> <a>DescribePlayerSessions</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul> */
	export interface PlacedPlayerSession {
		PlayerId?: string;
		PlayerSessionId?: string;
	}


	/** Represents the input for a request action. */
	export interface DescribeGameSessionPlacementInput {
		PlacementId: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface DescribeGameSessionQueuesOutput {
		GameSessionQueues?: Array<GameSessionQueue>;
		NextToken?: string;
	}


	/** Represents the input for a request action. */
	export interface DescribeGameSessionQueuesInput {
		Names?: Array<string>;
		Limit?: number;
		NextToken?: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface DescribeGameSessionsOutput {
		GameSessions?: Array<GameSession>;
		NextToken?: string;
	}


	/** Represents the input for a request action. */
	export interface DescribeGameSessionsInput {
		FleetId?: string;
		GameSessionId?: string;
		AliasId?: string;
		StatusFilter?: string;
		Limit?: number;
		NextToken?: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface DescribeInstancesOutput {
		Instances?: Array<Instance>;
		NextToken?: string;
	}


	/** Properties that describe an instance of a virtual computing resource that hosts one or more game servers. A fleet may contain zero or more instances. */
	export interface Instance {
		FleetId?: string;
		InstanceId?: string;
		IpAddress?: string;
		DnsName?: string;
		OperatingSystem?: BuildOperatingSystem;
		Type?: InstanceType;
		Status?: InstanceStatus;
		CreationTime?: Date;
	}

	export enum InstanceType { t2_micro = 0, t2_small = 1, t2_medium = 2, t2_large = 3, c3_large = 4, c3_xlarge = 5, c3_2xlarge = 6, c3_4xlarge = 7, c3_8xlarge = 8, c4_large = 9, c4_xlarge = 10, c4_2xlarge = 11, c4_4xlarge = 12, c4_8xlarge = 13, c5_large = 14, c5_xlarge = 15, c5_2xlarge = 16, c5_4xlarge = 17, c5_9xlarge = 18, c5_12xlarge = 19, c5_18xlarge = 20, c5_24xlarge = 21, r3_large = 22, r3_xlarge = 23, r3_2xlarge = 24, r3_4xlarge = 25, r3_8xlarge = 26, r4_large = 27, r4_xlarge = 28, r4_2xlarge = 29, r4_4xlarge = 30, r4_8xlarge = 31, r4_16xlarge = 32, r5_large = 33, r5_xlarge = 34, r5_2xlarge = 35, r5_4xlarge = 36, r5_8xlarge = 37, r5_12xlarge = 38, r5_16xlarge = 39, r5_24xlarge = 40, m3_medium = 41, m3_large = 42, m3_xlarge = 43, m3_2xlarge = 44, m4_large = 45, m4_xlarge = 46, m4_2xlarge = 47, m4_4xlarge = 48, m4_10xlarge = 49, m5_large = 50, m5_xlarge = 51, m5_2xlarge = 52, m5_4xlarge = 53, m5_8xlarge = 54, m5_12xlarge = 55, m5_16xlarge = 56, m5_24xlarge = 57 }

	export enum InstanceStatus { PENDING = 0, ACTIVE = 1, TERMINATING = 2 }


	/** Represents the input for a request action. */
	export interface DescribeInstancesInput {
		FleetId: string;
		InstanceId?: string;
		Limit?: number;
		NextToken?: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface DescribeMatchmakingOutput {
		TicketList?: Array<MatchmakingTicket>;
	}


	/** Ticket generated to track the progress of a matchmaking request. Each ticket is uniquely identified by a ticket ID, supplied by the requester, when creating a matchmaking request with <a>StartMatchmaking</a>. Tickets can be retrieved by calling <a>DescribeMatchmaking</a> with the ticket ID. */
	export interface MatchmakingTicket {
		TicketId?: string;
		ConfigurationName?: string;

		/**
		 * Data type used for Matchmaking Configuration ARN.
		 * Pattern: ^arn:.*:matchmakingconfiguration\/[a-zA-Z0-9-\.]*
		 */
		ConfigurationArn?: string;
		Status?: MatchmakingTicketStatus;
		StatusReason?: string;
		StatusMessage?: string;
		StartTime?: Date;
		EndTime?: Date;
		Players?: Array<Player>;

		/** Connection information for the new game session that is created with matchmaking. (with <a>StartMatchmaking</a>). Once a match is set, the FlexMatch engine places the match and creates a new game session for it. This information, including the game session endpoint and player sessions for each player in the original matchmaking request, is added to the <a>MatchmakingTicket</a>, which can be retrieved by calling <a>DescribeMatchmaking</a>. */
		GameSessionConnectionInfo?: GameSessionConnectionInfo;
		EstimatedWaitTime?: number;
	}

	export enum MatchmakingTicketStatus { CANCELLED = 0, COMPLETED = 1, FAILED = 2, PLACING = 3, QUEUED = 4, REQUIRES_ACCEPTANCE = 5, SEARCHING = 6, TIMED_OUT = 7 }


	/** Represents a player in matchmaking. When starting a matchmaking request, a player has a player ID, attributes, and may have latency data. Team information is added after a match has been successfully completed. */
	export interface Player {
		PlayerId?: string;
		PlayerAttributes?: PlayerAttributeMap;
		Team?: string;
		LatencyInMs?: LatencyMap;
	}

	export interface PlayerAttributeMap {
	}

	export interface LatencyMap {
	}


	/** Connection information for the new game session that is created with matchmaking. (with <a>StartMatchmaking</a>). Once a match is set, the FlexMatch engine places the match and creates a new game session for it. This information, including the game session endpoint and player sessions for each player in the original matchmaking request, is added to the <a>MatchmakingTicket</a>, which can be retrieved by calling <a>DescribeMatchmaking</a>. */
	export interface GameSessionConnectionInfo {
		GameSessionArn?: string;
		IpAddress?: string;
		DnsName?: string;
		Port?: number;
		MatchedPlayerSessions?: Array<MatchedPlayerSession>;
	}


	/** <p>Represents a new player session that is created as a result of a successful FlexMatch match. A successful match automatically creates new player sessions for every player ID in the original matchmaking request. </p> <p>When players connect to the match's game session, they must include both player ID and player session ID in order to claim their assigned player slot.</p> */
	export interface MatchedPlayerSession {
		PlayerId?: string;
		PlayerSessionId?: string;
	}


	/** Represents the input for a request action. */
	export interface DescribeMatchmakingInput {
		TicketIds: Array<string>;
	}


	/** Represents the returned data in response to a request action. */
	export interface DescribeMatchmakingConfigurationsOutput {
		Configurations?: Array<MatchmakingConfiguration>;
		NextToken?: string;
	}


	/** Represents the input for a request action. */
	export interface DescribeMatchmakingConfigurationsInput {
		Names?: Array<string>;
		RuleSetName?: string;
		Limit?: number;
		NextToken?: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface DescribeMatchmakingRuleSetsOutput {
		RuleSets: Array<MatchmakingRuleSet>;
		NextToken?: string;
	}


	/** Represents the input for a request action. */
	export interface DescribeMatchmakingRuleSetsInput {
		Names?: Array<string>;
		Limit?: number;
		NextToken?: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface DescribePlayerSessionsOutput {
		PlayerSessions?: Array<PlayerSession>;
		NextToken?: string;
	}


	/** Represents the input for a request action. */
	export interface DescribePlayerSessionsInput {
		GameSessionId?: string;
		PlayerId?: string;
		PlayerSessionId?: string;
		PlayerSessionStatusFilter?: string;
		Limit?: number;
		NextToken?: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface DescribeRuntimeConfigurationOutput {

		/** <p>A collection of server process configurations that describe what processes to run on each instance in a fleet. Server processes run either a custom game build executable or a Realtime Servers script. Each instance in the fleet starts the specified server processes and continues to start new processes as existing processes end. Each instance regularly checks for an updated runtime configuration. </p> <p>The runtime configuration enables the instances in a fleet to run multiple processes simultaneously. Learn more about <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html"> Running Multiple Processes on a Fleet </a>.</p> <p>A Amazon GameLift instance is limited to 50 processes running simultaneously. To calculate the total number of processes in a runtime configuration, add the values of the <code>ConcurrentExecutions</code> parameter for each <a>ServerProcess</a> object.</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul> */
		RuntimeConfiguration?: RuntimeConfiguration;
	}


	/** Represents the input for a request action. */
	export interface DescribeRuntimeConfigurationInput {
		FleetId: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface DescribeScalingPoliciesOutput {
		ScalingPolicies?: Array<ScalingPolicy>;
		NextToken?: string;
	}


	/** <p>Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by the combination of name and fleet ID.</p> <ul> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p>Manage scaling policies:</p> <ul> <li> <p> <a>PutScalingPolicy</a> (auto-scaling)</p> </li> <li> <p> <a>DescribeScalingPolicies</a> (auto-scaling)</p> </li> <li> <p> <a>DeleteScalingPolicy</a> (auto-scaling)</p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul> */
	export interface ScalingPolicy {
		FleetId?: string;
		Name?: string;
		Status?: ScalingPolicyStatus;
		ScalingAdjustment?: number;
		ScalingAdjustmentType?: ScalingPolicyScalingAdjustmentType;
		ComparisonOperator?: ScalingPolicyComparisonOperator;
		Threshold?: number;
		EvaluationPeriods?: number;
		MetricName?: ScalingPolicyMetricName;
		PolicyType?: ScalingPolicyPolicyType;

		/** <p>Settings for a target-based scaling policy (see <a>ScalingPolicy</a>. A target-based policy tracks a particular fleet metric specifies a target value for the metric. As player usage changes, the policy triggers Amazon GameLift to adjust capacity so that the metric returns to the target value. The target configuration specifies settings as needed for the target based policy, including the target value. </p> <ul> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p>Manage scaling policies:</p> <ul> <li> <p> <a>PutScalingPolicy</a> (auto-scaling)</p> </li> <li> <p> <a>DescribeScalingPolicies</a> (auto-scaling)</p> </li> <li> <p> <a>DeleteScalingPolicy</a> (auto-scaling)</p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul> */
		TargetConfiguration?: TargetConfiguration;
	}

	export enum ScalingPolicyStatus { ACTIVE = 0, UPDATE_REQUESTED = 1, UPDATING = 2, DELETE_REQUESTED = 3, DELETING = 4, DELETED = 5, ERROR = 6 }

	export enum ScalingPolicyScalingAdjustmentType { ChangeInCapacity = 0, ExactCapacity = 1, PercentChangeInCapacity = 2 }

	export enum ScalingPolicyComparisonOperator { GreaterThanOrEqualToThreshold = 0, GreaterThanThreshold = 1, LessThanThreshold = 2, LessThanOrEqualToThreshold = 3 }

	export enum ScalingPolicyMetricName { ActivatingGameSessions = 0, ActiveGameSessions = 1, ActiveInstances = 2, AvailableGameSessions = 3, AvailablePlayerSessions = 4, CurrentPlayerSessions = 5, IdleInstances = 6, PercentAvailableGameSessions = 7, PercentIdleInstances = 8, QueueDepth = 9, WaitTime = 10 }

	export enum ScalingPolicyPolicyType { RuleBased = 0, TargetBased = 1 }


	/** <p>Settings for a target-based scaling policy (see <a>ScalingPolicy</a>. A target-based policy tracks a particular fleet metric specifies a target value for the metric. As player usage changes, the policy triggers Amazon GameLift to adjust capacity so that the metric returns to the target value. The target configuration specifies settings as needed for the target based policy, including the target value. </p> <ul> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p>Manage scaling policies:</p> <ul> <li> <p> <a>PutScalingPolicy</a> (auto-scaling)</p> </li> <li> <p> <a>DescribeScalingPolicies</a> (auto-scaling)</p> </li> <li> <p> <a>DeleteScalingPolicy</a> (auto-scaling)</p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul> */
	export interface TargetConfiguration {
		TargetValue: number;
	}


	/** Represents the input for a request action. */
	export interface DescribeScalingPoliciesInput {
		FleetId: string;
		StatusFilter?: ScalingPolicyStatus;
		Limit?: number;
		NextToken?: string;
	}

	export interface DescribeScriptOutput {

		/** <p>Properties describing a Realtime script.</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateScript</a> </p> </li> <li> <p> <a>ListScripts</a> </p> </li> <li> <p> <a>DescribeScript</a> </p> </li> <li> <p> <a>UpdateScript</a> </p> </li> <li> <p> <a>DeleteScript</a> </p> </li> </ul> */
		Script?: Script;
	}

	export interface DescribeScriptInput {
		ScriptId: string;
	}

	export interface DescribeVpcPeeringAuthorizationsOutput {
		VpcPeeringAuthorizations?: Array<VpcPeeringAuthorization>;
	}

	export interface DescribeVpcPeeringAuthorizationsInput {
	}


	/** Represents the returned data in response to a request action. */
	export interface DescribeVpcPeeringConnectionsOutput {
		VpcPeeringConnections?: Array<VpcPeeringConnection>;
	}


	/** <p>Represents a peering connection between a VPC on one of your AWS accounts and the VPC for your Amazon GameLift fleets. This record may be for an active peering connection or a pending connection that has not yet been established.</p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> </p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> </p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> </p> </li> </ul> */
	export interface VpcPeeringConnection {
		FleetId?: string;
		FleetArn?: string;
		IpV4CidrBlock?: string;
		VpcPeeringConnectionId?: string;

		/** Represents status information for a VPC peering connection. Status is associated with a <a>VpcPeeringConnection</a> object. Status codes and messages are provided from EC2 (see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VpcPeeringConnectionStateReason.html">VpcPeeringConnectionStateReason</a>). Connection status information is also communicated as a fleet <a>Event</a>. */
		Status?: VpcPeeringConnectionStatus;
		PeerVpcId?: string;
		GameLiftVpcId?: string;
	}


	/** Represents status information for a VPC peering connection. Status is associated with a <a>VpcPeeringConnection</a> object. Status codes and messages are provided from EC2 (see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VpcPeeringConnectionStateReason.html">VpcPeeringConnectionStateReason</a>). Connection status information is also communicated as a fleet <a>Event</a>. */
	export interface VpcPeeringConnectionStatus {
		Code?: string;
		Message?: string;
	}


	/** Represents the input for a request action. */
	export interface DescribeVpcPeeringConnectionsInput {
		FleetId?: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface GetGameSessionLogUrlOutput {
		PreSignedUrl?: string;
	}


	/** Represents the input for a request action. */
	export interface GetGameSessionLogUrlInput {
		GameSessionId: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface GetInstanceAccessOutput {

		/** Information required to remotely connect to a fleet instance. Access is requested by calling <a>GetInstanceAccess</a>. */
		InstanceAccess?: InstanceAccess;
	}


	/** Information required to remotely connect to a fleet instance. Access is requested by calling <a>GetInstanceAccess</a>.  */
	export interface InstanceAccess {
		FleetId?: string;
		InstanceId?: string;
		IpAddress?: string;
		OperatingSystem?: BuildOperatingSystem;

		/** Set of credentials required to remotely access a fleet instance. Access credentials are requested by calling <a>GetInstanceAccess</a> and returned in an <a>InstanceAccess</a> object. */
		Credentials?: InstanceCredentials;
	}


	/** Set of credentials required to remotely access a fleet instance. Access credentials are requested by calling <a>GetInstanceAccess</a> and returned in an <a>InstanceAccess</a> object. */
	export interface InstanceCredentials {
		UserName?: string;
		Secret?: string;
	}


	/** Represents the input for a request action. */
	export interface GetInstanceAccessInput {
		FleetId: string;
		InstanceId: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface ListAliasesOutput {
		Aliases?: Array<Alias>;
		NextToken?: string;
	}


	/** Represents the input for a request action. */
	export interface ListAliasesInput {
		RoutingStrategyType?: RoutingStrategyType;
		Name?: string;
		Limit?: number;
		NextToken?: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface ListBuildsOutput {
		Builds?: Array<Build>;
		NextToken?: string;
	}


	/** Represents the input for a request action. */
	export interface ListBuildsInput {
		Status?: BuildStatus;
		Limit?: number;
		NextToken?: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface ListFleetsOutput {
		FleetIds?: Array<string>;
		NextToken?: string;
	}


	/** Represents the input for a request action. */
	export interface ListFleetsInput {
		BuildId?: string;
		ScriptId?: string;
		Limit?: number;
		NextToken?: string;
	}

	export interface ListGameServerGroupsOutput {
		GameServerGroups?: Array<GameServerGroup>;
		NextToken?: string;
	}

	export interface ListGameServerGroupsInput {
		Limit?: number;
		NextToken?: string;
	}

	export interface ListGameServersOutput {
		GameServers?: Array<GameServer>;
		NextToken?: string;
	}

	export interface ListGameServersInput {
		GameServerGroupName: string;
		SortOrder?: ListGameServersInputSortOrder;
		Limit?: number;
		NextToken?: string;
	}

	export enum ListGameServersInputSortOrder { ASCENDING = 0, DESCENDING = 1 }

	export interface ListScriptsOutput {
		Scripts?: Array<Script>;
		NextToken?: string;
	}

	export interface ListScriptsInput {
		Limit?: number;
		NextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}

	export interface ListTagsForResourceRequest {
		ResourceARN: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface PutScalingPolicyOutput {
		Name?: string;
	}


	/** Represents the input for a request action. */
	export interface PutScalingPolicyInput {
		Name: string;
		FleetId: string;
		ScalingAdjustment?: number;
		ScalingAdjustmentType?: ScalingPolicyScalingAdjustmentType;
		Threshold?: number;
		ComparisonOperator?: ScalingPolicyComparisonOperator;
		EvaluationPeriods?: number;
		MetricName: ScalingPolicyMetricName;
		PolicyType?: ScalingPolicyPolicyType;

		/** <p>Settings for a target-based scaling policy (see <a>ScalingPolicy</a>. A target-based policy tracks a particular fleet metric specifies a target value for the metric. As player usage changes, the policy triggers Amazon GameLift to adjust capacity so that the metric returns to the target value. The target configuration specifies settings as needed for the target based policy, including the target value. </p> <ul> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p>Manage scaling policies:</p> <ul> <li> <p> <a>PutScalingPolicy</a> (auto-scaling)</p> </li> <li> <p> <a>DescribeScalingPolicies</a> (auto-scaling)</p> </li> <li> <p> <a>DeleteScalingPolicy</a> (auto-scaling)</p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul> */
		TargetConfiguration?: TargetConfiguration;
	}

	export interface RegisterGameServerOutput {

		/** <p> <b>This data type is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Properties describing a game server resource. </p> <p>A game server resource is created by a successful call to <a>RegisterGameServer</a> and deleted by calling <a>DeregisterGameServer</a>. </p> */
		GameServer?: GameServer;
	}

	export interface RegisterGameServerInput {
		GameServerGroupName: string;
		GameServerId: string;
		InstanceId: string;
		ConnectionInfo?: string;
		GameServerData?: string;
		CustomSortKey?: string;
		Tags?: Array<Tag>;
	}


	/** Represents the returned data in response to a request action. */
	export interface RequestUploadCredentialsOutput {

		/** Temporary access credentials used for uploading game build files to Amazon GameLift. They are valid for a limited time. If they expire before you upload your game build, get a new set by calling <a>RequestUploadCredentials</a>. */
		UploadCredentials?: AwsCredentials;

		/** The location in S3 where build or script files are stored for access by Amazon GameLift. This location is specified in <a>CreateBuild</a>, <a>CreateScript</a>, and <a>UpdateScript</a> requests. */
		StorageLocation?: S3Location;
	}


	/** Represents the input for a request action. */
	export interface RequestUploadCredentialsInput {
		BuildId: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface ResolveAliasOutput {
		FleetId?: string;
		FleetArn?: string;
	}


	/** Represents the input for a request action. */
	export interface ResolveAliasInput {
		AliasId: string;
	}

	export interface ResumeGameServerGroupOutput {

		/** <p> <b>This data type is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Properties describing a game server group resource. A game server group manages certain properties of a corresponding EC2 Auto Scaling group. </p> <p>A game server group is created by a successful call to <a>CreateGameServerGroup</a> and deleted by calling <a>DeleteGameServerGroup</a>. Game server group activity can be temporarily suspended and resumed by calling <a>SuspendGameServerGroup</a> and <a>ResumeGameServerGroup</a>. </p> */
		GameServerGroup?: GameServerGroup;
	}

	export interface ResumeGameServerGroupInput {
		GameServerGroupName: string;
		ResumeActions: Array<GameServerGroupAction>;
	}


	/** Represents the returned data in response to a request action. */
	export interface SearchGameSessionsOutput {
		GameSessions?: Array<GameSession>;
		NextToken?: string;
	}


	/** Represents the input for a request action. */
	export interface SearchGameSessionsInput {
		FleetId?: string;
		AliasId?: string;
		FilterExpression?: string;
		SortExpression?: string;
		Limit?: number;
		NextToken?: string;
	}

	export interface StartFleetActionsOutput {
	}

	export interface StartFleetActionsInput {
		FleetId: string;
		Actions: Array<FleetAction>;
	}


	/** Represents the returned data in response to a request action. */
	export interface StartGameSessionPlacementOutput {

		/** <p>Object that describes a <a>StartGameSessionPlacement</a> request. This object includes the full details of the original request plus the current status and start/end time stamps.</p> <p>Game session placement-related operations include:</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> */
		GameSessionPlacement?: GameSessionPlacement;
	}


	/** Represents the input for a request action. */
	export interface StartGameSessionPlacementInput {
		PlacementId: string;
		GameSessionQueueName: string;
		GameProperties?: Array<GameProperty>;
		MaximumPlayerSessionCount: number;
		GameSessionName?: string;
		PlayerLatencies?: Array<PlayerLatency>;
		DesiredPlayerSessions?: Array<DesiredPlayerSession>;
		GameSessionData?: string;
	}


	/** Player information for use when creating player sessions using a game session placement request with <a>StartGameSessionPlacement</a>. */
	export interface DesiredPlayerSession {
		PlayerId?: string;
		PlayerData?: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface StartMatchBackfillOutput {

		/** Ticket generated to track the progress of a matchmaking request. Each ticket is uniquely identified by a ticket ID, supplied by the requester, when creating a matchmaking request with <a>StartMatchmaking</a>. Tickets can be retrieved by calling <a>DescribeMatchmaking</a> with the ticket ID. */
		MatchmakingTicket?: MatchmakingTicket;
	}


	/** Represents the input for a request action. */
	export interface StartMatchBackfillInput {
		TicketId?: string;
		ConfigurationName: string;
		GameSessionArn: string;
		Players: Array<Player>;
	}


	/** Represents the returned data in response to a request action. */
	export interface StartMatchmakingOutput {

		/** Ticket generated to track the progress of a matchmaking request. Each ticket is uniquely identified by a ticket ID, supplied by the requester, when creating a matchmaking request with <a>StartMatchmaking</a>. Tickets can be retrieved by calling <a>DescribeMatchmaking</a> with the ticket ID. */
		MatchmakingTicket?: MatchmakingTicket;
	}


	/** Represents the input for a request action. */
	export interface StartMatchmakingInput {
		TicketId?: string;
		ConfigurationName: string;
		Players: Array<Player>;
	}

	export interface StopFleetActionsOutput {
	}

	export interface StopFleetActionsInput {
		FleetId: string;
		Actions: Array<FleetAction>;
	}


	/** Represents the returned data in response to a request action. */
	export interface StopGameSessionPlacementOutput {

		/** <p>Object that describes a <a>StartGameSessionPlacement</a> request. This object includes the full details of the original request plus the current status and start/end time stamps.</p> <p>Game session placement-related operations include:</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> */
		GameSessionPlacement?: GameSessionPlacement;
	}


	/** Represents the input for a request action. */
	export interface StopGameSessionPlacementInput {
		PlacementId: string;
	}

	export interface StopMatchmakingOutput {
	}


	/** Represents the input for a request action. */
	export interface StopMatchmakingInput {
		TicketId: string;
	}

	export interface SuspendGameServerGroupOutput {

		/** <p> <b>This data type is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Properties describing a game server group resource. A game server group manages certain properties of a corresponding EC2 Auto Scaling group. </p> <p>A game server group is created by a successful call to <a>CreateGameServerGroup</a> and deleted by calling <a>DeleteGameServerGroup</a>. Game server group activity can be temporarily suspended and resumed by calling <a>SuspendGameServerGroup</a> and <a>ResumeGameServerGroup</a>. </p> */
		GameServerGroup?: GameServerGroup;
	}

	export interface SuspendGameServerGroupInput {
		GameServerGroupName: string;
		SuspendActions: Array<GameServerGroupAction>;
	}

	export interface TagResourceResponse {
	}

	export interface TagResourceRequest {
		ResourceARN: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceResponse {
	}

	export interface UntagResourceRequest {
		ResourceARN: string;
		TagKeys: Array<string>;
	}


	/** Represents the returned data in response to a request action. */
	export interface UpdateAliasOutput {

		/** <p>Properties that describe an alias resource.</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul> */
		Alias?: Alias;
	}


	/** Represents the input for a request action. */
	export interface UpdateAliasInput {
		AliasId: string;
		Name?: string;
		Description?: string;

		/** <p>The routing configuration for a fleet alias.</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul> */
		RoutingStrategy?: RoutingStrategy;
	}


	/** Represents the returned data in response to a request action. */
	export interface UpdateBuildOutput {

		/** <p>Properties describing a custom game build.</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateBuild</a> </p> </li> <li> <p> <a>ListBuilds</a> </p> </li> <li> <p> <a>DescribeBuild</a> </p> </li> <li> <p> <a>UpdateBuild</a> </p> </li> <li> <p> <a>DeleteBuild</a> </p> </li> </ul> */
		Build?: Build;
	}


	/** Represents the input for a request action. */
	export interface UpdateBuildInput {
		BuildId: string;
		Name?: string;
		Version?: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface UpdateFleetAttributesOutput {
		FleetId?: string;
	}


	/** Represents the input for a request action. */
	export interface UpdateFleetAttributesInput {
		FleetId: string;
		Name?: string;
		Description?: string;
		NewGameSessionProtectionPolicy?: FleetAttributesNewGameSessionProtectionPolicy;

		/** <p>A policy that limits the number of game sessions a player can create on the same fleet. This optional policy gives game owners control over how players can consume available game server resources. A resource creation policy makes the following statement: "An individual player can create a maximum number of new game sessions within a specified time period".</p> <p>The policy is evaluated when a player tries to create a new game session. For example: Assume you have a policy of 10 new game sessions and a time period of 60 minutes. On receiving a <code>CreateGameSession</code> request, Amazon GameLift checks that the player (identified by <code>CreatorId</code>) has created fewer than 10 game sessions in the past 60 minutes.</p> */
		ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
		MetricGroups?: Array<string>;
	}


	/** Represents the returned data in response to a request action. */
	export interface UpdateFleetCapacityOutput {
		FleetId?: string;
	}


	/** Represents the input for a request action. */
	export interface UpdateFleetCapacityInput {
		FleetId: string;
		DesiredInstances?: number;
		MinSize?: number;
		MaxSize?: number;
	}


	/** Represents the returned data in response to a request action. */
	export interface UpdateFleetPortSettingsOutput {
		FleetId?: string;
	}


	/** Represents the input for a request action. */
	export interface UpdateFleetPortSettingsInput {
		FleetId: string;
		InboundPermissionAuthorizations?: Array<IpPermission>;
		InboundPermissionRevocations?: Array<IpPermission>;
	}

	export interface UpdateGameServerOutput {

		/** <p> <b>This data type is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Properties describing a game server resource. </p> <p>A game server resource is created by a successful call to <a>RegisterGameServer</a> and deleted by calling <a>DeregisterGameServer</a>. </p> */
		GameServer?: GameServer;
	}

	export interface UpdateGameServerInput {
		GameServerGroupName: string;
		GameServerId: string;
		GameServerData?: string;
		CustomSortKey?: string;
		UtilizationStatus?: GameServerUtilizationStatus;
		HealthCheck?: UpdateGameServerInputHealthCheck;
	}

	export enum UpdateGameServerInputHealthCheck { HEALTHY = 0 }

	export interface UpdateGameServerGroupOutput {

		/** <p> <b>This data type is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Properties describing a game server group resource. A game server group manages certain properties of a corresponding EC2 Auto Scaling group. </p> <p>A game server group is created by a successful call to <a>CreateGameServerGroup</a> and deleted by calling <a>DeleteGameServerGroup</a>. Game server group activity can be temporarily suspended and resumed by calling <a>SuspendGameServerGroup</a> and <a>ResumeGameServerGroup</a>. </p> */
		GameServerGroup?: GameServerGroup;
	}

	export interface UpdateGameServerGroupInput {
		GameServerGroupName: string;
		RoleArn?: string;
		InstanceDefinitions?: Array<InstanceDefinition>;
		GameServerProtectionPolicy?: GameServerGroupGameServerProtectionPolicy;
		BalancingStrategy?: GameServerGroupBalancingStrategy;
	}


	/** Represents the returned data in response to a request action. */
	export interface UpdateGameSessionOutput {

		/** <p>Properties describing a game session.</p> <p>A game session in ACTIVE status can host players. When a game session ends, its status is set to <code>TERMINATED</code>. </p> <p>Once the session ends, the game session object is retained for 30 days. This means you can reuse idempotency token values after this time. Game session logs are retained for 14 days.</p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul> */
		GameSession?: GameSession;
	}


	/** Represents the input for a request action. */
	export interface UpdateGameSessionInput {
		GameSessionId: string;
		MaximumPlayerSessionCount?: number;
		Name?: string;
		PlayerSessionCreationPolicy?: GameSessionPlayerSessionCreationPolicy;
		ProtectionPolicy?: FleetAttributesNewGameSessionProtectionPolicy;
	}


	/** Represents the returned data in response to a request action. */
	export interface UpdateGameSessionQueueOutput {

		/** <p>Configuration of a queue that is used to process game session placement requests. The queue configuration identifies several game features:</p> <ul> <li> <p>The destinations where a new game session can potentially be hosted. Amazon GameLift tries these destinations in an order based on either the queue's default order or player latency information, if provided in a placement request. With latency information, Amazon GameLift can place game sessions where the majority of players are reporting the lowest possible latency. </p> </li> <li> <p>The length of time that placement requests can wait in the queue before timing out. </p> </li> <li> <p>A set of optional latency policies that protect individual players from high latencies, preventing game sessions from being placed where any individual player is reporting latency higher than a policy's maximum.</p> </li> </ul> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul> */
		GameSessionQueue?: GameSessionQueue;
	}


	/** Represents the input for a request action. */
	export interface UpdateGameSessionQueueInput {
		Name: string;
		TimeoutInSeconds?: number;
		PlayerLatencyPolicies?: Array<PlayerLatencyPolicy>;
		Destinations?: Array<GameSessionQueueDestination>;
	}


	/** Represents the returned data in response to a request action. */
	export interface UpdateMatchmakingConfigurationOutput {

		/** Guidelines for use with FlexMatch to match players into games. All matchmaking requests must specify a matchmaking configuration. */
		Configuration?: MatchmakingConfiguration;
	}


	/** Represents the input for a request action. */
	export interface UpdateMatchmakingConfigurationInput {
		Name: string;
		Description?: string;
		GameSessionQueueArns?: Array<string>;
		RequestTimeoutSeconds?: number;
		AcceptanceTimeoutSeconds?: number;
		AcceptanceRequired?: boolean;
		RuleSetName?: string;
		NotificationTarget?: string;
		AdditionalPlayerCount?: number;
		CustomEventData?: string;
		GameProperties?: Array<GameProperty>;
		GameSessionData?: string;
		BackfillMode?: MatchmakingConfigurationBackfillMode;
	}


	/** Represents the returned data in response to a request action. */
	export interface UpdateRuntimeConfigurationOutput {

		/** <p>A collection of server process configurations that describe what processes to run on each instance in a fleet. Server processes run either a custom game build executable or a Realtime Servers script. Each instance in the fleet starts the specified server processes and continues to start new processes as existing processes end. Each instance regularly checks for an updated runtime configuration. </p> <p>The runtime configuration enables the instances in a fleet to run multiple processes simultaneously. Learn more about <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html"> Running Multiple Processes on a Fleet </a>.</p> <p>A Amazon GameLift instance is limited to 50 processes running simultaneously. To calculate the total number of processes in a runtime configuration, add the values of the <code>ConcurrentExecutions</code> parameter for each <a>ServerProcess</a> object.</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul> */
		RuntimeConfiguration?: RuntimeConfiguration;
	}


	/** Represents the input for a request action. */
	export interface UpdateRuntimeConfigurationInput {
		FleetId: string;

		/** <p>A collection of server process configurations that describe what processes to run on each instance in a fleet. Server processes run either a custom game build executable or a Realtime Servers script. Each instance in the fleet starts the specified server processes and continues to start new processes as existing processes end. Each instance regularly checks for an updated runtime configuration. </p> <p>The runtime configuration enables the instances in a fleet to run multiple processes simultaneously. Learn more about <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html"> Running Multiple Processes on a Fleet </a>.</p> <p>A Amazon GameLift instance is limited to 50 processes running simultaneously. To calculate the total number of processes in a runtime configuration, add the values of the <code>ConcurrentExecutions</code> parameter for each <a>ServerProcess</a> object.</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul> */
		RuntimeConfiguration: RuntimeConfiguration;
	}

	export interface UpdateScriptOutput {

		/** <p>Properties describing a Realtime script.</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateScript</a> </p> </li> <li> <p> <a>ListScripts</a> </p> </li> <li> <p> <a>DescribeScript</a> </p> </li> <li> <p> <a>UpdateScript</a> </p> </li> <li> <p> <a>DeleteScript</a> </p> </li> </ul> */
		Script?: Script;
	}

	export interface UpdateScriptInput {
		ScriptId: string;
		Name?: string;
		Version?: string;

		/** The location in S3 where build or script files are stored for access by Amazon GameLift. This location is specified in <a>CreateBuild</a>, <a>CreateScript</a>, and <a>UpdateScript</a> requests. */
		StorageLocation?: S3Location;
		ZipFile?: string;
	}


	/** Represents the returned data in response to a request action. */
	export interface ValidateMatchmakingRuleSetOutput {
		Valid?: boolean;
	}


	/** Represents the input for a request action. */
	export interface ValidateMatchmakingRuleSetInput {
		RuleSetBody: string;
	}

	export enum AcceptanceType { ACCEPT = 0, REJECT = 1 }

	export interface StringDoubleMap {
	}


	/** Values for use in <a>Player</a> attribute key-value pairs. This object lets you specify an attribute value using any of the valid data types: string, number, string array, or data map. Each <code>AttributeValue</code> object can use only one of the available properties. */
	export interface AttributeValue {
		S?: string;
		N?: number;
		SL?: Array<string>;
		SDM?: StringDoubleMap;
	}

	export enum BackfillMode { AUTOMATIC = 0, MANUAL = 1 }

	export enum BalancingStrategy { SPOT_ONLY = 0, SPOT_PREFERRED = 1 }

	export enum OperatingSystem { WINDOWS_2012 = 0, AMAZON_LINUX = 1, AMAZON_LINUX_2 = 2 }

	export enum CertificateType { DISABLED = 0, GENERATED = 1 }

	export enum ComparisonOperatorType { GreaterThanOrEqualToThreshold = 0, GreaterThanThreshold = 1, LessThanThreshold = 2, LessThanOrEqualToThreshold = 3 }

	export enum EC2InstanceType { t2_micro = 0, t2_small = 1, t2_medium = 2, t2_large = 3, c3_large = 4, c3_xlarge = 5, c3_2xlarge = 6, c3_4xlarge = 7, c3_8xlarge = 8, c4_large = 9, c4_xlarge = 10, c4_2xlarge = 11, c4_4xlarge = 12, c4_8xlarge = 13, c5_large = 14, c5_xlarge = 15, c5_2xlarge = 16, c5_4xlarge = 17, c5_9xlarge = 18, c5_12xlarge = 19, c5_18xlarge = 20, c5_24xlarge = 21, r3_large = 22, r3_xlarge = 23, r3_2xlarge = 24, r3_4xlarge = 25, r3_8xlarge = 26, r4_large = 27, r4_xlarge = 28, r4_2xlarge = 29, r4_4xlarge = 30, r4_8xlarge = 31, r4_16xlarge = 32, r5_large = 33, r5_xlarge = 34, r5_2xlarge = 35, r5_4xlarge = 36, r5_8xlarge = 37, r5_12xlarge = 38, r5_16xlarge = 39, r5_24xlarge = 40, m3_medium = 41, m3_large = 42, m3_xlarge = 43, m3_2xlarge = 44, m4_large = 45, m4_xlarge = 46, m4_2xlarge = 47, m4_4xlarge = 48, m4_10xlarge = 49, m5_large = 50, m5_xlarge = 51, m5_2xlarge = 52, m5_4xlarge = 53, m5_8xlarge = 54, m5_12xlarge = 55, m5_16xlarge = 56, m5_24xlarge = 57 }

	export enum ProtectionPolicy { NoProtection = 0, FullProtection = 1 }

	export enum FleetType { ON_DEMAND = 0, SPOT = 1 }

	export enum GameServerProtectionPolicy { NO_PROTECTION = 0, FULL_PROTECTION = 1 }

	export enum GameServerGroupDeleteOption { SAFE_DELETE = 0, FORCE_DELETE = 1, RETAIN = 2 }

	export enum ScalingStatusType { ACTIVE = 0, UPDATE_REQUESTED = 1, UPDATING = 2, DELETE_REQUESTED = 3, DELETING = 4, DELETED = 5, ERROR = 6 }

	export enum EventCode { GENERIC_EVENT = 0, FLEET_CREATED = 1, FLEET_DELETED = 2, FLEET_SCALING_EVENT = 3, FLEET_STATE_DOWNLOADING = 4, FLEET_STATE_VALIDATING = 5, FLEET_STATE_BUILDING = 6, FLEET_STATE_ACTIVATING = 7, FLEET_STATE_ACTIVE = 8, FLEET_STATE_ERROR = 9, FLEET_INITIALIZATION_FAILED = 10, FLEET_BINARY_DOWNLOAD_FAILED = 11, FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND = 12, FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE = 13, FLEET_VALIDATION_TIMED_OUT = 14, FLEET_ACTIVATION_FAILED = 15, FLEET_ACTIVATION_FAILED_NO_INSTANCES = 16, FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED = 17, SERVER_PROCESS_INVALID_PATH = 18, SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT = 19, SERVER_PROCESS_PROCESS_READY_TIMEOUT = 20, SERVER_PROCESS_CRASHED = 21, SERVER_PROCESS_TERMINATED_UNHEALTHY = 22, SERVER_PROCESS_FORCE_TERMINATED = 23, SERVER_PROCESS_PROCESS_EXIT_TIMEOUT = 24, GAME_SESSION_ACTIVATION_TIMEOUT = 25, FLEET_CREATION_EXTRACTING_BUILD = 26, FLEET_CREATION_RUNNING_INSTALLER = 27, FLEET_CREATION_VALIDATING_RUNTIME_CONFIG = 28, FLEET_VPC_PEERING_SUCCEEDED = 29, FLEET_VPC_PEERING_FAILED = 30, FLEET_VPC_PEERING_DELETED = 31, INSTANCE_INTERRUPTED = 32 }

	export enum FleetStatus { NEW = 0, DOWNLOADING = 1, VALIDATING = 2, BUILDING = 3, ACTIVATING = 4, ACTIVE = 5, DELETING = 6, ERROR = 7, TERMINATED = 8 }

	export enum GameServerGroupInstanceType { c4_large = 0, c4_xlarge = 1, c4_2xlarge = 2, c4_4xlarge = 3, c4_8xlarge = 4, c5_large = 5, c5_xlarge = 6, c5_2xlarge = 7, c5_4xlarge = 8, c5_9xlarge = 9, c5_12xlarge = 10, c5_18xlarge = 11, c5_24xlarge = 12, r4_large = 13, r4_xlarge = 14, r4_2xlarge = 15, r4_4xlarge = 16, r4_8xlarge = 17, r4_16xlarge = 18, r5_large = 19, r5_xlarge = 20, r5_2xlarge = 21, r5_4xlarge = 22, r5_8xlarge = 23, r5_12xlarge = 24, r5_16xlarge = 25, r5_24xlarge = 26, m4_large = 27, m4_xlarge = 28, m4_2xlarge = 29, m4_4xlarge = 30, m4_10xlarge = 31, m5_large = 32, m5_xlarge = 33, m5_2xlarge = 34, m5_4xlarge = 35, m5_8xlarge = 36, m5_12xlarge = 37, m5_16xlarge = 38, m5_24xlarge = 39 }

	export enum GameServerHealthCheck { HEALTHY = 0 }

	export enum PlayerSessionCreationPolicy { ACCEPT_ALL = 0, DENY_ALL = 1 }

	export enum GameSessionPlacementState { PENDING = 0, FULFILLED = 1, CANCELLED = 2, TIMED_OUT = 3, FAILED = 4 }

	export enum IpProtocol { TCP = 0, UDP = 1 }

	export enum SortOrder { ASCENDING = 0, DESCENDING = 1 }

	export enum MatchmakingConfigurationStatus { CANCELLED = 0, COMPLETED = 1, FAILED = 2, PLACING = 3, QUEUED = 4, REQUIRES_ACCEPTANCE = 5, SEARCHING = 6, TIMED_OUT = 7 }

	export enum MetricName { ActivatingGameSessions = 0, ActiveGameSessions = 1, ActiveInstances = 2, AvailableGameSessions = 3, AvailablePlayerSessions = 4, CurrentPlayerSessions = 5, IdleInstances = 6, PercentAvailableGameSessions = 7, PercentIdleInstances = 8, QueueDepth = 9, WaitTime = 10 }

	export enum PolicyType { RuleBased = 0, TargetBased = 1 }

	export enum ScalingAdjustmentType { ChangeInCapacity = 0, ExactCapacity = 1, PercentChangeInCapacity = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Registers a player's acceptance or rejection of a proposed FlexMatch match. A matchmaking configuration may require player acceptance; if so, then matches built with that configuration cannot be completed unless all players accept the proposed match within a specified time limit. </p> <p>When FlexMatch builds a match, all the matchmaking tickets involved in the proposed match are placed into status <code>REQUIRES_ACCEPTANCE</code>. This is a trigger for your game to get acceptance from all players in the ticket. Acceptances are only valid for tickets when they are in this status; all other acceptances result in an error.</p> <p>To register acceptance, specify the ticket ID, a response, and one or more players. Once all players have registered acceptance, the matchmaking tickets advance to status <code>PLACING</code>, where a new game session is created for the match. </p> <p>If any player rejects the match, or if acceptances are not received before a specified timeout, the proposed match is dropped. The matchmaking tickets are then handled in one of two ways: For tickets where one or more players rejected the match, the ticket status is returned to <code>SEARCHING</code> to find a new match. For tickets where one or more players failed to respond, the ticket status is set to <code>CANCELLED</code>, and processing is terminated. A new matchmaking request for these players can be submitted as needed. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-client.html"> Add FlexMatch to a Game Client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-events.html"> FlexMatch Events Reference</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>StartMatchmaking</a> </p> </li> <li> <p> <a>DescribeMatchmaking</a> </p> </li> <li> <p> <a>StopMatchmaking</a> </p> </li> <li> <p> <a>AcceptMatch</a> </p> </li> <li> <p> <a>StartMatchBackfill</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.AcceptMatch
		 * @return {AcceptMatchOutput} Success
		 */
		AcceptMatch(requestBody: AcceptMatchInput): Observable<AcceptMatchOutput> {
			return this.http.post<AcceptMatchOutput>(this.baseUri + '#X-Amz-Target=GameLift.AcceptMatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This action is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Locates an available game server and temporarily reserves it to host gameplay and players. This action is called by a game client or client service (such as a matchmaker) to request hosting resources for a new game session. In response, GameLift FleetIQ searches for an available game server in the specified game server group, places the game server in "claimed" status for 60 seconds, and returns connection information back to the requester so that players can connect to the game server. </p> <p>There are two ways you can claim a game server. For the first option, you provide a game server group ID only, which prompts GameLift FleetIQ to search for an available game server in the specified group and claim it. With this option, GameLift FleetIQ attempts to consolidate gameplay on as few instances as possible to minimize hosting costs. For the second option, you request a specific game server by its ID. This option results in a less efficient claiming process because it does not take advantage of consolidation and may fail if the requested game server is unavailable. </p> <p>To claim a game server, identify a game server group and (optionally) a game server ID. If your game requires that game data be provided to the game server at the start of a game, such as a game map or player information, you can provide it in your claim request. </p> <p>When a game server is successfully claimed, connection information is returned. A claimed game server's utilization status remains AVAILABLE, while the claim status is set to CLAIMED for up to 60 seconds. This time period allows the game server to be prompted to update its status to UTILIZED (using <a>UpdateGameServer</a>). If the game server's status is not updated within 60 seconds, the game server reverts to unclaimed status and is available to be claimed by another request.</p> <p>If you try to claim a specific game server, this request will fail in the following cases: (1) if the game server utilization status is UTILIZED, (2) if the game server claim status is CLAIMED, or (3) if the instance that the game server is running on is flagged as draining.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gsg-intro.html">GameLift FleetIQ Guide</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>RegisterGameServer</a> </p> </li> <li> <p> <a>ListGameServers</a> </p> </li> <li> <p> <a>ClaimGameServer</a> </p> </li> <li> <p> <a>DescribeGameServer</a> </p> </li> <li> <p> <a>UpdateGameServer</a> </p> </li> <li> <p> <a>DeregisterGameServer</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.ClaimGameServer
		 * @return {ClaimGameServerOutput} Success
		 */
		ClaimGameServer(requestBody: ClaimGameServerInput): Observable<ClaimGameServerOutput> {
			return this.http.post<ClaimGameServerOutput>(this.baseUri + '#X-Amz-Target=GameLift.ClaimGameServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an alias for a fleet. In most situations, you can use an alias ID in place of a fleet ID. An alias provides a level of abstraction for a fleet that is useful when redirecting player traffic from one fleet to another, such as when updating your game build. </p> <p>Amazon GameLift supports two types of routing strategies for aliases: simple and terminal. A simple alias points to an active fleet. A terminal alias is used to display messaging or link to a URL instead of routing players to an active fleet. For example, you might use a terminal alias when a game version is no longer supported and you want to direct players to an upgrade site. </p> <p>To create a fleet alias, specify an alias name, routing strategy, and optional description. Each simple alias can point to only one fleet, but a fleet can have multiple aliases. If successful, a new alias record is returned, including an alias ID and an ARN. You can reassign an alias to another fleet by calling <code>UpdateAlias</code>.</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.CreateAlias
		 * @return {CreateAliasOutput} Success
		 */
		CreateAlias(requestBody: CreateAliasInput): Observable<CreateAliasOutput> {
			return this.http.post<CreateAliasOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new Amazon GameLift build resource for your game server binary files. Game server binaries must be combined into a zip file for use with Amazon GameLift. </p> <important> <p>When setting up a new game build for GameLift, we recommend using the AWS CLI command <b> <a href="https://docs.aws.amazon.com/cli/latest/reference/gamelift/upload-build.html">upload-build</a> </b>. This helper command combines two tasks: (1) it uploads your build files from a file directory to a GameLift Amazon S3 location, and (2) it creates a new build resource. </p> </important> <p>The <code>CreateBuild</code> operation can used in the following scenarios:</p> <ul> <li> <p>To create a new game build with build files that are in an S3 location under an AWS account that you control. To use this option, you must first give Amazon GameLift access to the S3 bucket. With permissions in place, call <code>CreateBuild</code> and specify a build name, operating system, and the S3 storage location of your game build.</p> </li> <li> <p>To directly upload your build files to a GameLift S3 location. To use this option, first call <code>CreateBuild</code> and specify a build name and operating system. This action creates a new build resource and also returns an S3 location with temporary access credentials. Use the credentials to manually upload your build files to the specified S3 location. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UploadingObjects.html">Uploading Objects</a> in the <i>Amazon S3 Developer Guide</i>. Build files can be uploaded to the GameLift S3 location once only; that can't be updated. </p> </li> </ul> <p>If successful, this operation creates a new build resource with a unique build ID and places it in <code>INITIALIZED</code> status. A build must be in <code>READY</code> status before you can create fleets with it.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html">Uploading Your Game</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in Amazon S3</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateBuild</a> </p> </li> <li> <p> <a>ListBuilds</a> </p> </li> <li> <p> <a>DescribeBuild</a> </p> </li> <li> <p> <a>UpdateBuild</a> </p> </li> <li> <p> <a>DeleteBuild</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.CreateBuild
		 * @return {CreateBuildOutput} Success
		 */
		CreateBuild(requestBody: CreateBuildInput): Observable<CreateBuildOutput> {
			return this.http.post<CreateBuildOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateBuild', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new fleet to run your game servers. whether they are custom game builds or Realtime Servers with game-specific script. A fleet is a set of Amazon Elastic Compute Cloud (Amazon EC2) instances, each of which can host multiple game sessions. When creating a fleet, you choose the hardware specifications, set some configuration options, and specify the game server to deploy on the new fleet. </p> <p>To create a new fleet, provide the following: (1) a fleet name, (2) an EC2 instance type and fleet type (spot or on-demand), (3) the build ID for your game build or script ID if using Realtime Servers, and (4) a runtime configuration, which determines how game servers will run on each instance in the fleet. </p> <p>If the <code>CreateFleet</code> call is successful, Amazon GameLift performs the following tasks. You can track the process of a fleet by checking the fleet status or by monitoring fleet creation events:</p> <ul> <li> <p>Creates a fleet resource. Status: <code>NEW</code>.</p> </li> <li> <p>Begins writing events to the fleet event log, which can be accessed in the Amazon GameLift console.</p> </li> <li> <p>Sets the fleet's target capacity to 1 (desired instances), which triggers Amazon GameLift to start one new EC2 instance.</p> </li> <li> <p>Downloads the game build or Realtime script to the new instance and installs it. Statuses: <code>DOWNLOADING</code>, <code>VALIDATING</code>, <code>BUILDING</code>. </p> </li> <li> <p>Starts launching server processes on the instance. If the fleet is configured to run multiple server processes per instance, Amazon GameLift staggers each process launch by a few seconds. Status: <code>ACTIVATING</code>.</p> </li> <li> <p>Sets the fleet's status to <code>ACTIVE</code> as soon as one server process is ready to host a game session.</p> </li> </ul> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting Up Fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html#fleets-creating-debug-creation">Debug Fleet Creation Issues</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.CreateFleet
		 * @return {CreateFleetOutput} Success
		 */
		CreateFleet(requestBody: CreateFleetInput): Observable<CreateFleetOutput> {
			return this.http.post<CreateFleetOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This action is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Creates a GameLift FleetIQ game server group to manage a collection of EC2 instances for game hosting. In addition to creating the game server group, this action also creates an Auto Scaling group in your AWS account and establishes a link between the two groups. You have full control over configuration of the Auto Scaling group, but GameLift FleetIQ routinely certain Auto Scaling group properties in order to optimize the group's instances for low-cost game hosting. You can view the status of your game server groups in the GameLift Console. Game server group metrics and events are emitted to Amazon CloudWatch.</p> <p>Prior creating a new game server group, you must set up the following: </p> <ul> <li> <p>An EC2 launch template. The template provides configuration settings for a set of EC2 instances and includes the game server build that you want to deploy and run on each instance. For more information on creating a launch template, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html"> Launching an Instance from a Launch Template</a> in the <i>Amazon EC2 User Guide</i>. </p> </li> <li> <p>An IAM role. The role sets up limited access to your AWS account, allowing GameLift FleetIQ to create and manage the EC2 Auto Scaling group, get instance data, and emit metrics and events to CloudWatch. For more information on setting up an IAM permissions policy with principal access for GameLift, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-bucket-user-policy-specifying-principal-intro.html"> Specifying a Principal in a Policy</a> in the <i>Amazon S3 Developer Guide</i>.</p> </li> </ul> <p>To create a new game server group, provide a name and specify the IAM role and EC2 launch template. You also need to provide a list of instance types to be used in the group and set initial maximum and minimum limits on the group's instance count. You can optionally set an autoscaling policy with target tracking based on a GameLift FleetIQ metric.</p> <p>Once the game server group and corresponding Auto Scaling group are created, you have full access to change the Auto Scaling group's configuration as needed. Keep in mind, however, that some properties are periodically updated by GameLift FleetIQ as it balances the group's instances based on availability and cost.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gsg-intro.html">GameLift FleetIQ Guide</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gsg-asgroups.html">Updating a GameLift FleetIQ-Linked Auto Scaling Group</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateGameServerGroup</a> </p> </li> <li> <p> <a>ListGameServerGroups</a> </p> </li> <li> <p> <a>DescribeGameServerGroup</a> </p> </li> <li> <p> <a>UpdateGameServerGroup</a> </p> </li> <li> <p> <a>DeleteGameServerGroup</a> </p> </li> <li> <p> <a>ResumeGameServerGroup</a> </p> </li> <li> <p> <a>SuspendGameServerGroup</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.CreateGameServerGroup
		 * @return {CreateGameServerGroupOutput} Success
		 */
		CreateGameServerGroup(requestBody: CreateGameServerGroupInput): Observable<CreateGameServerGroupOutput> {
			return this.http.post<CreateGameServerGroupOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateGameServerGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a multiplayer game session for players. This action creates a game session record and assigns an available server process in the specified fleet to host the game session. A fleet must have an <code>ACTIVE</code> status before a game session can be created in it.</p> <p>To create a game session, specify either fleet ID or alias ID and indicate a maximum number of players to allow in the game session. You can also provide a name and game-specific properties for this game session. If successful, a <a>GameSession</a> object is returned containing the game session properties and other settings you specified.</p> <p> <b>Idempotency tokens.</b> You can add a token that uniquely identifies game session requests. This is useful for ensuring that game session requests are idempotent. Multiple requests with the same idempotency token are processed only once; subsequent requests return the original result. All response values are the same with the exception of game session status, which may change.</p> <p> <b>Resource creation limits.</b> If you are creating a game session on a fleet with a resource creation limit policy in force, then you must specify a creator ID. Without this ID, Amazon GameLift has no way to evaluate the policy for this new game session request.</p> <p> <b>Player acceptance policy.</b> By default, newly created game sessions are open to new players. You can restrict new player access by using <a>UpdateGameSession</a> to change the game session's player session creation policy.</p> <p> <b>Game session logs.</b> Logs are retained for all active game sessions for 14 days. To access the logs, call <a>GetGameSessionLogUrl</a> to download the log files.</p> <p> <i>Available in Amazon GameLift Local.</i> </p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>
		 * Post #X-Amz-Target=GameLift.CreateGameSession
		 * @return {CreateGameSessionOutput} Success
		 */
		CreateGameSession(requestBody: CreateGameSessionInput): Observable<CreateGameSessionOutput> {
			return this.http.post<CreateGameSessionOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateGameSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Establishes a new queue for processing requests to place new game sessions. A queue identifies where new game sessions can be hosted -- by specifying a list of destinations (fleets or aliases) -- and how long requests can wait in the queue before timing out. You can set up a queue to try to place game sessions on fleets in multiple Regions. To add placement requests to a queue, call <a>StartGameSessionPlacement</a> and reference the queue name.</p> <p> <b>Destination order.</b> When processing a request for a game session, Amazon GameLift tries each destination in order until it finds one with available resources to host the new game session. A queue's default order is determined by how destinations are listed. The default order is overridden when a game session placement request provides player latency information. Player latency information enables Amazon GameLift to prioritize destinations where players report the lowest average latency, as a result placing the new game session where the majority of players will have the best possible gameplay experience.</p> <p> <b>Player latency policies.</b> For placement requests containing player latency information, use player latency policies to protect individual players from very high latencies. With a latency cap, even when a destination can deliver a low latency for most players, the game is not placed where any individual player is reporting latency higher than a policy's maximum. A queue can have multiple latency policies, which are enforced consecutively starting with the policy with the lowest latency cap. Use multiple policies to gradually relax latency controls; for example, you might set a policy with a low latency cap for the first 60 seconds, a second policy with a higher cap for the next 60 seconds, etc. </p> <p>To create a new queue, provide a name, timeout value, a list of destinations and, if desired, a set of latency policies. If successful, a new queue object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-design.html"> Design a Game Session Queue</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-creating.html"> Create a Game Session Queue</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.CreateGameSessionQueue
		 * @return {CreateGameSessionQueueOutput} Success
		 */
		CreateGameSessionQueue(requestBody: CreateGameSessionQueueInput): Observable<CreateGameSessionQueueOutput> {
			return this.http.post<CreateGameSessionQueueOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateGameSessionQueue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Defines a new matchmaking configuration for use with FlexMatch. A matchmaking configuration sets out guidelines for matching players and getting the matches into games. You can set up multiple matchmaking configurations to handle the scenarios needed for your game. Each matchmaking ticket (<a>StartMatchmaking</a> or <a>StartMatchBackfill</a>) specifies a configuration for the match and provides player attributes to support the configuration being used. </p> <p>To create a matchmaking configuration, at a minimum you must specify the following: configuration name; a rule set that governs how to evaluate players and find acceptable matches; a game session queue to use when placing a new game session for the match; and the maximum time allowed for a matchmaking attempt.</p> <p>There are two ways to track the progress of matchmaking tickets: (1) polling ticket status with <a>DescribeMatchmaking</a>; or (2) receiving notifications with Amazon Simple Notification Service (SNS). To use notifications, you first need to set up an SNS topic to receive the notifications, and provide the topic ARN in the matchmaking configuration. Since notifications promise only "best effort" delivery, we recommend calling <code>DescribeMatchmaking</code> if no notifications are received within 30 seconds.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-configuration.html"> Design a FlexMatch Matchmaker</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-notification.html"> Setting up Notifications for Matchmaking</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DescribeMatchmakingConfigurations</a> </p> </li> <li> <p> <a>UpdateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DeleteMatchmakingConfiguration</a> </p> </li> <li> <p> <a>CreateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DescribeMatchmakingRuleSets</a> </p> </li> <li> <p> <a>ValidateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DeleteMatchmakingRuleSet</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.CreateMatchmakingConfiguration
		 * @return {CreateMatchmakingConfigurationOutput} Success
		 */
		CreateMatchmakingConfiguration(requestBody: CreateMatchmakingConfigurationInput): Observable<CreateMatchmakingConfigurationOutput> {
			return this.http.post<CreateMatchmakingConfigurationOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateMatchmakingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new rule set for FlexMatch matchmaking. A rule set describes the type of match to create, such as the number and size of teams. It also sets the parameters for acceptable player matches, such as minimum skill level or character type. A rule set is used by a <a>MatchmakingConfiguration</a>. </p> <p>To create a matchmaking rule set, provide unique rule set name and the rule set body in JSON format. Rule sets must be defined in the same Region as the matchmaking configuration they are used with.</p> <p>Since matchmaking rule sets cannot be edited, it is a good idea to check the rule set syntax using <a>ValidateMatchmakingRuleSet</a> before creating a new rule set.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-rulesets.html">Build a Rule Set</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-configuration.html">Design a Matchmaker</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-intro.html">Matchmaking with FlexMatch</a> </p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DescribeMatchmakingConfigurations</a> </p> </li> <li> <p> <a>UpdateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DeleteMatchmakingConfiguration</a> </p> </li> <li> <p> <a>CreateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DescribeMatchmakingRuleSets</a> </p> </li> <li> <p> <a>ValidateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DeleteMatchmakingRuleSet</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.CreateMatchmakingRuleSet
		 * @return {CreateMatchmakingRuleSetOutput} Success
		 */
		CreateMatchmakingRuleSet(requestBody: CreateMatchmakingRuleSetInput): Observable<CreateMatchmakingRuleSetOutput> {
			return this.http.post<CreateMatchmakingRuleSetOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateMatchmakingRuleSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Reserves an open player slot in an active game session. Before a player can be added, a game session must have an <code>ACTIVE</code> status, have a creation policy of <code>ALLOW_ALL</code>, and have an open player slot. To add a group of players to a game session, use <a>CreatePlayerSessions</a>. When the player connects to the game server and references a player session ID, the game server contacts the Amazon GameLift service to validate the player reservation and accept the player.</p> <p>To create a player session, specify a game session ID, player ID, and optionally a string of player data. If successful, a slot is reserved in the game session for the player and a new <a>PlayerSession</a> object is returned. Player sessions cannot be updated. </p> <p> <i>Available in Amazon GameLift Local.</i> </p> <ul> <li> <p> <a>CreatePlayerSession</a> </p> </li> <li> <p> <a>CreatePlayerSessions</a> </p> </li> <li> <p> <a>DescribePlayerSessions</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>
		 * Post #X-Amz-Target=GameLift.CreatePlayerSession
		 * @return {CreatePlayerSessionOutput} Success
		 */
		CreatePlayerSession(requestBody: CreatePlayerSessionInput): Observable<CreatePlayerSessionOutput> {
			return this.http.post<CreatePlayerSessionOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreatePlayerSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Reserves open slots in a game session for a group of players. Before players can be added, a game session must have an <code>ACTIVE</code> status, have a creation policy of <code>ALLOW_ALL</code>, and have an open player slot. To add a single player to a game session, use <a>CreatePlayerSession</a>. When a player connects to the game server and references a player session ID, the game server contacts the Amazon GameLift service to validate the player reservation and accept the player.</p> <p>To create player sessions, specify a game session ID, a list of player IDs, and optionally a set of player data strings. If successful, a slot is reserved in the game session for each player and a set of new <a>PlayerSession</a> objects is returned. Player sessions cannot be updated.</p> <p> <i>Available in Amazon GameLift Local.</i> </p> <ul> <li> <p> <a>CreatePlayerSession</a> </p> </li> <li> <p> <a>CreatePlayerSessions</a> </p> </li> <li> <p> <a>DescribePlayerSessions</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>
		 * Post #X-Amz-Target=GameLift.CreatePlayerSessions
		 * @return {CreatePlayerSessionsOutput} Success
		 */
		CreatePlayerSessions(requestBody: CreatePlayerSessionsInput): Observable<CreatePlayerSessionsOutput> {
			return this.http.post<CreatePlayerSessionsOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreatePlayerSessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new script record for your Realtime Servers script. Realtime scripts are JavaScript that provide configuration settings and optional custom game logic for your game. The script is deployed when you create a Realtime Servers fleet to host your game sessions. Script logic is executed during an active game session. </p> <p>To create a new script record, specify a script name and provide the script file(s). The script files and all dependencies must be zipped into a single file. You can pull the zip file from either of these locations: </p> <ul> <li> <p>A locally available directory. Use the <i>ZipFile</i> parameter for this option.</p> </li> <li> <p>An Amazon Simple Storage Service (Amazon S3) bucket under your AWS account. Use the <i>StorageLocation</i> parameter for this option. You'll need to have an Identity Access Management (IAM) role that allows the Amazon GameLift service to access your S3 bucket. </p> </li> </ul> <p>If the call is successful, a new script record is created with a unique script ID. If the script file is provided as a local file, the file is uploaded to an Amazon GameLift-owned S3 bucket and the script record's storage location reflects this location. If the script file is provided as an S3 bucket, Amazon GameLift accesses the file at this storage location as needed for deployment.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/setting-up-role.html">Set Up a Role for Amazon GameLift Access</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateScript</a> </p> </li> <li> <p> <a>ListScripts</a> </p> </li> <li> <p> <a>DescribeScript</a> </p> </li> <li> <p> <a>UpdateScript</a> </p> </li> <li> <p> <a>DeleteScript</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.CreateScript
		 * @return {CreateScriptOutput} Success
		 */
		CreateScript(requestBody: CreateScriptInput): Observable<CreateScriptOutput> {
			return this.http.post<CreateScriptOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateScript', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Requests authorization to create or delete a peer connection between the VPC for your Amazon GameLift fleet and a virtual private cloud (VPC) in your AWS account. VPC peering enables the game servers on your fleet to communicate directly with other AWS resources. Once you've received authorization, call <a>CreateVpcPeeringConnection</a> to establish the peering connection. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p> <p>You can peer with VPCs that are owned by any AWS account you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions.</p> <p>To request authorization to create a connection, call this operation from the AWS account with the VPC that you want to peer to your Amazon GameLift fleet. For example, to enable your game servers to retrieve data from a DynamoDB table, use the account that manages that DynamoDB resource. Identify the following values: (1) The ID of the VPC that you want to peer with, and (2) the ID of the AWS account that you use to manage Amazon GameLift. If successful, VPC peering is authorized for the specified VPC. </p> <p>To request authorization to delete a connection, call this operation from the AWS account with the VPC that is peered with your Amazon GameLift fleet. Identify the following values: (1) VPC ID that you want to delete the peering connection for, and (2) ID of the AWS account that you use to manage Amazon GameLift. </p> <p>The authorization remains valid for 24 hours unless it is canceled by a call to <a>DeleteVpcPeeringAuthorization</a>. You must create or delete the peering connection while the authorization is valid. </p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> </p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> </p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.CreateVpcPeeringAuthorization
		 * @return {CreateVpcPeeringAuthorizationOutput} Success
		 */
		CreateVpcPeeringAuthorization(requestBody: CreateVpcPeeringAuthorizationInput): Observable<CreateVpcPeeringAuthorizationOutput> {
			return this.http.post<CreateVpcPeeringAuthorizationOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateVpcPeeringAuthorization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Establishes a VPC peering connection between a virtual private cloud (VPC) in an AWS account with the VPC for your Amazon GameLift fleet. VPC peering enables the game servers on your fleet to communicate directly with other AWS resources. You can peer with VPCs in any AWS account that you have access to, including the account that you use to manage your Amazon GameLift fleets. You cannot peer with VPCs that are in different Regions. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p> <p>Before calling this operation to establish the peering connection, you first need to call <a>CreateVpcPeeringAuthorization</a> and identify the VPC you want to peer with. Once the authorization for the specified VPC is issued, you have 24 hours to establish the connection. These two operations handle all tasks necessary to peer the two VPCs, including acceptance, updating routing tables, etc. </p> <p>To establish the connection, call this operation from the AWS account that is used to manage the Amazon GameLift fleets. Identify the following values: (1) The ID of the fleet you want to be enable a VPC peering connection for; (2) The AWS account with the VPC that you want to peer with; and (3) The ID of the VPC you want to peer with. This operation is asynchronous. If successful, a <a>VpcPeeringConnection</a> request is created. You can use continuous polling to track the request's status using <a>DescribeVpcPeeringConnections</a>, or by monitoring fleet events for success or failure using <a>DescribeFleetEvents</a>. </p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> </p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> </p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.CreateVpcPeeringConnection
		 * @return {CreateVpcPeeringConnectionOutput} Success
		 */
		CreateVpcPeeringConnection(requestBody: CreateVpcPeeringConnectionInput): Observable<CreateVpcPeeringConnectionOutput> {
			return this.http.post<CreateVpcPeeringConnectionOutput>(this.baseUri + '#X-Amz-Target=GameLift.CreateVpcPeeringConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an alias. This action removes all record of the alias. Game clients attempting to access a server process using the deleted alias receive an error. To delete an alias, specify the alias ID to be deleted.</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DeleteAlias
		 * @return {void} Success
		 */
		DeleteAlias(requestBody: DeleteAliasInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GameLift.DeleteAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a build. This action permanently deletes the build resource and any uploaded build files. Deleting a build does not affect the status of any active fleets using the build, but you can no longer create new fleets with the deleted build.</p> <p>To delete a build, specify the build ID. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateBuild</a> </p> </li> <li> <p> <a>ListBuilds</a> </p> </li> <li> <p> <a>DescribeBuild</a> </p> </li> <li> <p> <a>UpdateBuild</a> </p> </li> <li> <p> <a>DeleteBuild</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DeleteBuild
		 * @return {void} Success
		 */
		DeleteBuild(requestBody: DeleteBuildInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GameLift.DeleteBuild', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes everything related to a fleet. Before deleting a fleet, you must set the fleet's desired capacity to zero. See <a>UpdateFleetCapacity</a>.</p> <p>If the fleet being deleted has a VPC peering connection, you first need to get a valid authorization (good for 24 hours) by calling <a>CreateVpcPeeringAuthorization</a>. You do not need to explicitly delete the VPC peering connection--this is done as part of the delete fleet process.</p> <p>This action removes the fleet and its resources. Once a fleet is deleted, you can no longer use any of the resource in that fleet.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DeleteFleet
		 * @return {void} Success
		 */
		DeleteFleet(requestBody: DeleteFleetInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GameLift.DeleteFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> <b>This action is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Terminates a game server group and permanently deletes the game server group record. You have several options for how these resources are impacted when deleting the game server group. Depending on the type of delete action selected, this action may affect three types of resources: the game server group, the corresponding Auto Scaling group, and all game servers currently running in the group. </p> <p>To delete a game server group, identify the game server group to delete and specify the type of delete action to initiate. Game server groups can only be deleted if they are in ACTIVE or ERROR status.</p> <p>If the delete request is successful, a series of actions are kicked off. The game server group status is changed to DELETE_SCHEDULED, which prevents new game servers from being registered and stops autoscaling activity. Once all game servers in the game server group are de-registered, GameLift FleetIQ can begin deleting resources. If any of the delete actions fail, the game server group is placed in ERROR status.</p> <p>GameLift FleetIQ emits delete events to Amazon CloudWatch.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gsg-intro.html">GameLift FleetIQ Guide</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateGameServerGroup</a> </p> </li> <li> <p> <a>ListGameServerGroups</a> </p> </li> <li> <p> <a>DescribeGameServerGroup</a> </p> </li> <li> <p> <a>UpdateGameServerGroup</a> </p> </li> <li> <p> <a>DeleteGameServerGroup</a> </p> </li> <li> <p> <a>ResumeGameServerGroup</a> </p> </li> <li> <p> <a>SuspendGameServerGroup</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DeleteGameServerGroup
		 * @return {DeleteGameServerGroupOutput} Success
		 */
		DeleteGameServerGroup(requestBody: DeleteGameServerGroupInput): Observable<DeleteGameServerGroupOutput> {
			return this.http.post<DeleteGameServerGroupOutput>(this.baseUri + '#X-Amz-Target=GameLift.DeleteGameServerGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a game session queue. This action means that any <a>StartGameSessionPlacement</a> requests that reference this queue will fail. To delete a queue, specify the queue name.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-intro.html"> Using Multi-Region Queues</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DeleteGameSessionQueue
		 * @return {DeleteGameSessionQueueOutput} Success
		 */
		DeleteGameSessionQueue(requestBody: DeleteGameSessionQueueInput): Observable<DeleteGameSessionQueueOutput> {
			return this.http.post<DeleteGameSessionQueueOutput>(this.baseUri + '#X-Amz-Target=GameLift.DeleteGameSessionQueue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Permanently removes a FlexMatch matchmaking configuration. To delete, specify the configuration name. A matchmaking configuration cannot be deleted if it is being used in any active matchmaking tickets.</p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DescribeMatchmakingConfigurations</a> </p> </li> <li> <p> <a>UpdateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DeleteMatchmakingConfiguration</a> </p> </li> <li> <p> <a>CreateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DescribeMatchmakingRuleSets</a> </p> </li> <li> <p> <a>ValidateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DeleteMatchmakingRuleSet</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DeleteMatchmakingConfiguration
		 * @return {DeleteMatchmakingConfigurationOutput} Success
		 */
		DeleteMatchmakingConfiguration(requestBody: DeleteMatchmakingConfigurationInput): Observable<DeleteMatchmakingConfigurationOutput> {
			return this.http.post<DeleteMatchmakingConfigurationOutput>(this.baseUri + '#X-Amz-Target=GameLift.DeleteMatchmakingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an existing matchmaking rule set. To delete the rule set, provide the rule set name. Rule sets cannot be deleted if they are currently being used by a matchmaking configuration. </p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-rulesets.html">Build a Rule Set</a> </p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DescribeMatchmakingConfigurations</a> </p> </li> <li> <p> <a>UpdateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DeleteMatchmakingConfiguration</a> </p> </li> <li> <p> <a>CreateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DescribeMatchmakingRuleSets</a> </p> </li> <li> <p> <a>ValidateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DeleteMatchmakingRuleSet</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DeleteMatchmakingRuleSet
		 * @return {DeleteMatchmakingRuleSetOutput} Success
		 */
		DeleteMatchmakingRuleSet(requestBody: DeleteMatchmakingRuleSetInput): Observable<DeleteMatchmakingRuleSetOutput> {
			return this.http.post<DeleteMatchmakingRuleSetOutput>(this.baseUri + '#X-Amz-Target=GameLift.DeleteMatchmakingRuleSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a fleet scaling policy. This action means that the policy is no longer in force and removes all record of it. To delete a scaling policy, specify both the scaling policy name and the fleet ID it is associated with.</p> <p>To temporarily suspend scaling policies, call <a>StopFleetActions</a>. This operation suspends all policies for the fleet.</p> <ul> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p>Manage scaling policies:</p> <ul> <li> <p> <a>PutScalingPolicy</a> (auto-scaling)</p> </li> <li> <p> <a>DescribeScalingPolicies</a> (auto-scaling)</p> </li> <li> <p> <a>DeleteScalingPolicy</a> (auto-scaling)</p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DeleteScalingPolicy
		 * @return {void} Success
		 */
		DeleteScalingPolicy(requestBody: DeleteScalingPolicyInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GameLift.DeleteScalingPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a Realtime script. This action permanently deletes the script record. If script files were uploaded, they are also deleted (files stored in an S3 bucket are not deleted). </p> <p>To delete a script, specify the script ID. Before deleting a script, be sure to terminate all fleets that are deployed with the script being deleted. Fleet instances periodically check for script updates, and if the script record no longer exists, the instance will go into an error state and be unable to host game sessions.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateScript</a> </p> </li> <li> <p> <a>ListScripts</a> </p> </li> <li> <p> <a>DescribeScript</a> </p> </li> <li> <p> <a>UpdateScript</a> </p> </li> <li> <p> <a>DeleteScript</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DeleteScript
		 * @return {void} Success
		 */
		DeleteScript(requestBody: DeleteScriptInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GameLift.DeleteScript', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Cancels a pending VPC peering authorization for the specified VPC. If you need to delete an existing VPC peering connection, call <a>DeleteVpcPeeringConnection</a>. </p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> </p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> </p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization
		 * @return {DeleteVpcPeeringAuthorizationOutput} Success
		 */
		DeleteVpcPeeringAuthorization(requestBody: DeleteVpcPeeringAuthorizationInput): Observable<DeleteVpcPeeringAuthorizationOutput> {
			return this.http.post<DeleteVpcPeeringAuthorizationOutput>(this.baseUri + '#X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes a VPC peering connection. To delete the connection, you must have a valid authorization for the VPC peering connection that you want to delete. You can check for an authorization by calling <a>DescribeVpcPeeringAuthorizations</a> or request a new one using <a>CreateVpcPeeringAuthorization</a>. </p> <p>Once a valid authorization exists, call this operation from the AWS account that is used to manage the Amazon GameLift fleets. Identify the connection to delete by the connection ID and fleet ID. If successful, the connection is removed. </p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> </p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> </p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DeleteVpcPeeringConnection
		 * @return {DeleteVpcPeeringConnectionOutput} Success
		 */
		DeleteVpcPeeringConnection(requestBody: DeleteVpcPeeringConnectionInput): Observable<DeleteVpcPeeringConnectionOutput> {
			return this.http.post<DeleteVpcPeeringConnectionOutput>(this.baseUri + '#X-Amz-Target=GameLift.DeleteVpcPeeringConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This action is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Removes the game server resource from the game server group. As a result of this action, the de-registered game server can no longer be claimed and will not returned in a list of active game servers. </p> <p>To de-register a game server, specify the game server group and game server ID. If successful, this action emits a CloudWatch event with termination time stamp and reason.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gsg-intro.html">GameLift FleetIQ Guide</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>RegisterGameServer</a> </p> </li> <li> <p> <a>ListGameServers</a> </p> </li> <li> <p> <a>ClaimGameServer</a> </p> </li> <li> <p> <a>DescribeGameServer</a> </p> </li> <li> <p> <a>UpdateGameServer</a> </p> </li> <li> <p> <a>DeregisterGameServer</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DeregisterGameServer
		 * @return {void} Success
		 */
		DeregisterGameServer(requestBody: DeregisterGameServerInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=GameLift.DeregisterGameServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves properties for an alias. This operation returns all alias metadata and settings. To get an alias's target fleet ID only, use <code>ResolveAlias</code>. </p> <p>To get alias properties, specify the alias ID. If successful, the requested alias record is returned.</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeAlias
		 * @return {DescribeAliasOutput} Success
		 */
		DescribeAlias(requestBody: DescribeAliasInput): Observable<DescribeAliasOutput> {
			return this.http.post<DescribeAliasOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves properties for a custom game build. To request a build resource, specify a build ID. If successful, an object containing the build properties is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateBuild</a> </p> </li> <li> <p> <a>ListBuilds</a> </p> </li> <li> <p> <a>DescribeBuild</a> </p> </li> <li> <p> <a>UpdateBuild</a> </p> </li> <li> <p> <a>DeleteBuild</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeBuild
		 * @return {DescribeBuildOutput} Success
		 */
		DescribeBuild(requestBody: DescribeBuildInput): Observable<DescribeBuildOutput> {
			return this.http.post<DescribeBuildOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeBuild', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the following information for the specified EC2 instance type:</p> <ul> <li> <p>Maximum number of instances allowed per AWS account (service limit).</p> </li> <li> <p>Current usage for the AWS account.</p> </li> </ul> <p>To learn more about the capabilities of each instance type, see <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>. Note that the instance types offered may vary depending on the region.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeEC2InstanceLimits
		 * @return {DescribeEC2InstanceLimitsOutput} Success
		 */
		DescribeEC2InstanceLimits(requestBody: DescribeEC2InstanceLimitsInput): Observable<DescribeEC2InstanceLimitsOutput> {
			return this.http.post<DescribeEC2InstanceLimitsOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeEC2InstanceLimits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves core properties, including configuration, status, and metadata, for a fleet. </p> <p>To get attributes for one or more fleets, provide a list of fleet IDs or fleet ARNs. To get attributes for all fleets, do not specify a fleet identifier. When requesting attributes for multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a <a>FleetAttributes</a> object is returned for each fleet requested, unless the fleet identifier is not found.</p> <note> <p>Some API actions may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed number.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeFleetAttributes
		 * @return {DescribeFleetAttributesOutput} Success
		 */
		DescribeFleetAttributes(requestBody: DescribeFleetAttributesInput): Observable<DescribeFleetAttributesOutput> {
			return this.http.post<DescribeFleetAttributesOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeFleetAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the current capacity statistics for one or more fleets. These statistics present a snapshot of the fleet's instances and provide insight on current or imminent scaling activity. To get statistics on game hosting activity in the fleet, see <a>DescribeFleetUtilization</a>.</p> <p>You can request capacity for all fleets or specify a list of one or more fleet identifiers. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a <a>FleetCapacity</a> object is returned for each requested fleet ID. When a list of fleet IDs is provided, attribute objects are returned only for fleets that currently exist.</p> <note> <p>Some API actions may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift Metrics for Fleets</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeFleetCapacity
		 * @return {DescribeFleetCapacityOutput} Success
		 */
		DescribeFleetCapacity(requestBody: DescribeFleetCapacityInput): Observable<DescribeFleetCapacityOutput> {
			return this.http.post<DescribeFleetCapacityOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeFleetCapacity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves entries from the specified fleet's event log. You can specify a time range to limit the result set. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a collection of event log entries matching the request are returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeFleetEvents
		 * @return {DescribeFleetEventsOutput} Success
		 */
		DescribeFleetEvents(requestBody: DescribeFleetEventsInput): Observable<DescribeFleetEventsOutput> {
			return this.http.post<DescribeFleetEventsOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeFleetEvents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a fleet's inbound connection permissions. Connection permissions specify the range of IP addresses and port settings that incoming traffic can use to access server processes in the fleet. Game sessions that are running on instances in the fleet use connections that fall in this range. </p> <p>To get a fleet's inbound connection permissions, specify the fleet's unique identifier. If successful, a collection of <a>IpPermission</a> objects is returned for the requested fleet ID. If the requested fleet has been deleted, the result set is empty.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeFleetPortSettings
		 * @return {DescribeFleetPortSettingsOutput} Success
		 */
		DescribeFleetPortSettings(requestBody: DescribeFleetPortSettingsInput): Observable<DescribeFleetPortSettingsOutput> {
			return this.http.post<DescribeFleetPortSettingsOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeFleetPortSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves utilization statistics for one or more fleets. These statistics provide insight into how available hosting resources are currently being used. To get statistics on available hosting resources, see <a>DescribeFleetCapacity</a>.</p> <p>You can request utilization data for all fleets, or specify a list of one or more fleet IDs. When requesting multiple fleets, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a <a>FleetUtilization</a> object is returned for each requested fleet ID, unless the fleet identifier is not found. </p> <note> <p>Some API actions may limit the number of fleet IDs allowed in one request. If a request exceeds this limit, the request fails and the error message includes the maximum allowed.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html#gamelift-metrics-fleet">GameLift Metrics for Fleets</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeFleetUtilization
		 * @return {DescribeFleetUtilizationOutput} Success
		 */
		DescribeFleetUtilization(requestBody: DescribeFleetUtilizationInput): Observable<DescribeFleetUtilizationOutput> {
			return this.http.post<DescribeFleetUtilizationOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeFleetUtilization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This action is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Retrieves information for a game server resource. Information includes the game server statuses, health check info, and the instance the game server is running on. </p> <p>To retrieve game server information, specify the game server ID. If successful, the requested game server object is returned. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gsg-intro.html">GameLift FleetIQ Guide</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>RegisterGameServer</a> </p> </li> <li> <p> <a>ListGameServers</a> </p> </li> <li> <p> <a>ClaimGameServer</a> </p> </li> <li> <p> <a>DescribeGameServer</a> </p> </li> <li> <p> <a>UpdateGameServer</a> </p> </li> <li> <p> <a>DeregisterGameServer</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeGameServer
		 * @return {DescribeGameServerOutput} Success
		 */
		DescribeGameServer(requestBody: DescribeGameServerInput): Observable<DescribeGameServerOutput> {
			return this.http.post<DescribeGameServerOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeGameServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This action is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Retrieves information on a game server group. </p> <p>To get attributes for a game server group, provide a group name or ARN value. If successful, a <a>GameServerGroup</a> object is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gsg-intro.html">GameLift FleetIQ Guide</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateGameServerGroup</a> </p> </li> <li> <p> <a>ListGameServerGroups</a> </p> </li> <li> <p> <a>DescribeGameServerGroup</a> </p> </li> <li> <p> <a>UpdateGameServerGroup</a> </p> </li> <li> <p> <a>DeleteGameServerGroup</a> </p> </li> <li> <p> <a>ResumeGameServerGroup</a> </p> </li> <li> <p> <a>SuspendGameServerGroup</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeGameServerGroup
		 * @return {DescribeGameServerGroupOutput} Success
		 */
		DescribeGameServerGroup(requestBody: DescribeGameServerGroupInput): Observable<DescribeGameServerGroupOutput> {
			return this.http.post<DescribeGameServerGroupOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeGameServerGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves properties, including the protection policy in force, for one or more game sessions. This action can be used in several ways: (1) provide a <code>GameSessionId</code> or <code>GameSessionArn</code> to request details for a specific game session; (2) provide either a <code>FleetId</code> or an <code>AliasId</code> to request properties for all game sessions running on a fleet. </p> <p>To get game session record(s), specify just one of the following: game session ID, fleet ID, or alias ID. You can filter this request by game session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a <a>GameSessionDetail</a> object is returned for each session matching the request.</p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeGameSessionDetails
		 * @return {DescribeGameSessionDetailsOutput} Success
		 */
		DescribeGameSessionDetails(requestBody: DescribeGameSessionDetailsInput): Observable<DescribeGameSessionDetailsOutput> {
			return this.http.post<DescribeGameSessionDetailsOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeGameSessionDetails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves properties and current status of a game session placement request. To get game session placement details, specify the placement ID. If successful, a <a>GameSessionPlacement</a> object is returned.</p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeGameSessionPlacement
		 * @return {DescribeGameSessionPlacementOutput} Success
		 */
		DescribeGameSessionPlacement(requestBody: DescribeGameSessionPlacementInput): Observable<DescribeGameSessionPlacementOutput> {
			return this.http.post<DescribeGameSessionPlacementOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeGameSessionPlacement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the properties for one or more game session queues. When requesting multiple queues, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a <a>GameSessionQueue</a> object is returned for each requested queue. When specifying a list of queues, objects are returned only for queues that currently exist in the Region.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-console.html"> View Your Queues</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeGameSessionQueues
		 * @return {DescribeGameSessionQueuesOutput} Success
		 */
		DescribeGameSessionQueues(requestBody: DescribeGameSessionQueuesInput): Observable<DescribeGameSessionQueuesOutput> {
			return this.http.post<DescribeGameSessionQueuesOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeGameSessionQueues', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a set of one or more game sessions. Request a specific game session or request all game sessions on a fleet. Alternatively, use <a>SearchGameSessions</a> to request a set of active game sessions that are filtered by certain criteria. To retrieve protection policy settings for game sessions, use <a>DescribeGameSessionDetails</a>.</p> <p>To get game sessions, specify one of the following: game session ID, fleet ID, or alias ID. You can filter this request by game session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a <a>GameSession</a> object is returned for each game session matching the request.</p> <p> <i>Available in Amazon GameLift Local.</i> </p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeGameSessions
		 * @return {DescribeGameSessionsOutput} Success
		 */
		DescribeGameSessions(requestBody: DescribeGameSessionsInput): Observable<DescribeGameSessionsOutput> {
			return this.http.post<DescribeGameSessionsOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeGameSessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves information about a fleet's instances, including instance IDs. Use this action to get details on all instances in the fleet or get details on one specific instance.</p> <p>To get a specific instance, specify fleet ID and instance ID. To get all instances in a fleet, specify a fleet ID only. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, an <a>Instance</a> object is returned for each result.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>DescribeInstances</a> </p> </li> <li> <p> <a>GetInstanceAccess</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeInstances
		 * @return {DescribeInstancesOutput} Success
		 */
		DescribeInstances(requestBody: DescribeInstancesInput): Observable<DescribeInstancesOutput> {
			return this.http.post<DescribeInstancesOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeInstances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves one or more matchmaking tickets. Use this operation to retrieve ticket information, including status and--once a successful match is made--acquire connection information for the resulting new game session. </p> <p>You can use this operation to track the progress of matchmaking requests (through polling) as an alternative to using event notifications. See more details on tracking matchmaking requests through polling or notifications in <a>StartMatchmaking</a>. </p> <p>To request matchmaking tickets, provide a list of up to 10 ticket IDs. If the request is successful, a ticket object is returned for each requested ID that currently exists.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-client.html"> Add FlexMatch to a Game Client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-notification.html"> Set Up FlexMatch Event Notification</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>StartMatchmaking</a> </p> </li> <li> <p> <a>DescribeMatchmaking</a> </p> </li> <li> <p> <a>StopMatchmaking</a> </p> </li> <li> <p> <a>AcceptMatch</a> </p> </li> <li> <p> <a>StartMatchBackfill</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeMatchmaking
		 * @return {DescribeMatchmakingOutput} Success
		 */
		DescribeMatchmaking(requestBody: DescribeMatchmakingInput): Observable<DescribeMatchmakingOutput> {
			return this.http.post<DescribeMatchmakingOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeMatchmaking', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the details of FlexMatch matchmaking configurations. With this operation, you have the following options: (1) retrieve all existing configurations, (2) provide the names of one or more configurations to retrieve, or (3) retrieve all configurations that use a specified rule set name. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a configuration is returned for each requested name. When specifying a list of names, only configurations that currently exist are returned. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/matchmaker-build.html"> Setting Up FlexMatch Matchmakers</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DescribeMatchmakingConfigurations</a> </p> </li> <li> <p> <a>UpdateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DeleteMatchmakingConfiguration</a> </p> </li> <li> <p> <a>CreateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DescribeMatchmakingRuleSets</a> </p> </li> <li> <p> <a>ValidateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DeleteMatchmakingRuleSet</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeMatchmakingConfigurations
		 * @return {DescribeMatchmakingConfigurationsOutput} Success
		 */
		DescribeMatchmakingConfigurations(requestBody: DescribeMatchmakingConfigurationsInput): Observable<DescribeMatchmakingConfigurationsOutput> {
			return this.http.post<DescribeMatchmakingConfigurationsOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeMatchmakingConfigurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the details for FlexMatch matchmaking rule sets. You can request all existing rule sets for the Region, or provide a list of one or more rule set names. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a rule set is returned for each requested name. </p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-rulesets.html">Build a Rule Set</a> </p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DescribeMatchmakingConfigurations</a> </p> </li> <li> <p> <a>UpdateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DeleteMatchmakingConfiguration</a> </p> </li> <li> <p> <a>CreateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DescribeMatchmakingRuleSets</a> </p> </li> <li> <p> <a>ValidateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DeleteMatchmakingRuleSet</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeMatchmakingRuleSets
		 * @return {DescribeMatchmakingRuleSetsOutput} Success
		 */
		DescribeMatchmakingRuleSets(requestBody: DescribeMatchmakingRuleSetsInput): Observable<DescribeMatchmakingRuleSetsOutput> {
			return this.http.post<DescribeMatchmakingRuleSetsOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeMatchmakingRuleSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves properties for one or more player sessions. This action can be used in several ways: (1) provide a <code>PlayerSessionId</code> to request properties for a specific player session; (2) provide a <code>GameSessionId</code> to request properties for all player sessions in the specified game session; (3) provide a <code>PlayerId</code> to request properties for all player sessions of a specified player. </p> <p>To get game session record(s), specify only one of the following: a player session ID, a game session ID, or a player ID. You can filter this request by player session status. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, a <a>PlayerSession</a> object is returned for each session matching the request.</p> <p> <i>Available in Amazon GameLift Local.</i> </p> <ul> <li> <p> <a>CreatePlayerSession</a> </p> </li> <li> <p> <a>CreatePlayerSessions</a> </p> </li> <li> <p> <a>DescribePlayerSessions</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribePlayerSessions
		 * @return {DescribePlayerSessionsOutput} Success
		 */
		DescribePlayerSessions(requestBody: DescribePlayerSessionsInput): Observable<DescribePlayerSessionsOutput> {
			return this.http.post<DescribePlayerSessionsOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribePlayerSessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a fleet's runtime configuration settings. The runtime configuration tells Amazon GameLift which server processes to run (and how) on each instance in the fleet.</p> <p>To get a runtime configuration, specify the fleet's unique identifier. If successful, a <a>RuntimeConfiguration</a> object is returned for the requested fleet. If the requested fleet has been deleted, the result set is empty.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html">Running Multiple Processes on a Fleet</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeRuntimeConfiguration
		 * @return {DescribeRuntimeConfigurationOutput} Success
		 */
		DescribeRuntimeConfiguration(requestBody: DescribeRuntimeConfigurationInput): Observable<DescribeRuntimeConfigurationOutput> {
			return this.http.post<DescribeRuntimeConfigurationOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeRuntimeConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves all scaling policies applied to a fleet.</p> <p>To get a fleet's scaling policies, specify the fleet ID. You can filter this request by policy status, such as to retrieve only active scaling policies. Use the pagination parameters to retrieve results as a set of sequential pages. If successful, set of <a>ScalingPolicy</a> objects is returned for the fleet.</p> <p>A fleet may have all of its scaling policies suspended (<a>StopFleetActions</a>). This action does not affect the status of the scaling policies, which remains ACTIVE. To see whether a fleet's scaling policies are in force or suspended, call <a>DescribeFleetAttributes</a> and check the stopped actions.</p> <ul> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p>Manage scaling policies:</p> <ul> <li> <p> <a>PutScalingPolicy</a> (auto-scaling)</p> </li> <li> <p> <a>DescribeScalingPolicies</a> (auto-scaling)</p> </li> <li> <p> <a>DeleteScalingPolicy</a> (auto-scaling)</p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeScalingPolicies
		 * @return {DescribeScalingPoliciesOutput} Success
		 */
		DescribeScalingPolicies(requestBody: DescribeScalingPoliciesInput): Observable<DescribeScalingPoliciesOutput> {
			return this.http.post<DescribeScalingPoliciesOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeScalingPolicies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves properties for a Realtime script. </p> <p>To request a script record, specify the script ID. If successful, an object containing the script properties is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateScript</a> </p> </li> <li> <p> <a>ListScripts</a> </p> </li> <li> <p> <a>DescribeScript</a> </p> </li> <li> <p> <a>UpdateScript</a> </p> </li> <li> <p> <a>DeleteScript</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeScript
		 * @return {DescribeScriptOutput} Success
		 */
		DescribeScript(requestBody: DescribeScriptInput): Observable<DescribeScriptOutput> {
			return this.http.post<DescribeScriptOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeScript', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves valid VPC peering authorizations that are pending for the AWS account. This operation returns all VPC peering authorizations and requests for peering. This includes those initiated and received by this account. </p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> </p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> </p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations
		 * @return {DescribeVpcPeeringAuthorizationsOutput} Success
		 */
		DescribeVpcPeeringAuthorizations(requestBody: DescribeVpcPeeringAuthorizationsInput): Observable<DescribeVpcPeeringAuthorizationsOutput> {
			return this.http.post<DescribeVpcPeeringAuthorizationsOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves information on VPC peering connections. Use this operation to get peering information for all fleets or for one specific fleet ID. </p> <p>To retrieve connection information, call this operation from the AWS account that is used to manage the Amazon GameLift fleets. Specify a fleet ID or leave the parameter empty to retrieve all connection records. If successful, the retrieved information includes both active and pending connections. Active connections identify the IpV4 CIDR block that the VPC uses to connect. </p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> </p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> </p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.DescribeVpcPeeringConnections
		 * @return {DescribeVpcPeeringConnectionsOutput} Success
		 */
		DescribeVpcPeeringConnections(requestBody: DescribeVpcPeeringConnectionsInput): Observable<DescribeVpcPeeringConnectionsOutput> {
			return this.http.post<DescribeVpcPeeringConnectionsOutput>(this.baseUri + '#X-Amz-Target=GameLift.DescribeVpcPeeringConnections', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the location of stored game session logs for a specified game session. When a game session is terminated, Amazon GameLift automatically stores the logs in Amazon S3 and retains them for 14 days. Use this URL to download the logs.</p> <note> <p>See the <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_gamelift">AWS Service Limits</a> page for maximum log file sizes. Log files that exceed this limit are not saved.</p> </note> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>
		 * Post #X-Amz-Target=GameLift.GetGameSessionLogUrl
		 * @return {GetGameSessionLogUrlOutput} Success
		 */
		GetGameSessionLogUrl(requestBody: GetGameSessionLogUrlInput): Observable<GetGameSessionLogUrlOutput> {
			return this.http.post<GetGameSessionLogUrlOutput>(this.baseUri + '#X-Amz-Target=GameLift.GetGameSessionLogUrl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Requests remote access to a fleet instance. Remote access is useful for debugging, gathering benchmarking data, or observing activity in real time. </p> <p>To remotely access an instance, you need credentials that match the operating system of the instance. For a Windows instance, Amazon GameLift returns a user name and password as strings for use with a Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA private key, also as strings, for use with an SSH client. The private key must be saved in the proper format to a <code>.pem</code> file before using. If you're making this request using the AWS CLI, saving the secret can be handled as part of the GetInstanceAccess request, as shown in one of the examples for this action. </p> <p>To request access to a specific instance, specify the IDs of both the instance and the fleet it belongs to. You can retrieve a fleet's instance IDs by calling <a>DescribeInstances</a>. If successful, an <a>InstanceAccess</a> object is returned that contains the instance's IP address and a set of credentials.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet Instances</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet Issues</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>DescribeInstances</a> </p> </li> <li> <p> <a>GetInstanceAccess</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.GetInstanceAccess
		 * @return {GetInstanceAccessOutput} Success
		 */
		GetInstanceAccess(requestBody: GetInstanceAccessInput): Observable<GetInstanceAccessOutput> {
			return this.http.post<GetInstanceAccessOutput>(this.baseUri + '#X-Amz-Target=GameLift.GetInstanceAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves all aliases for this AWS account. You can filter the result set by alias name and/or routing strategy type. Use the pagination parameters to retrieve results in sequential pages.</p> <note> <p>Returned aliases are not listed in any particular order.</p> </note> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.ListAliases
		 * @return {ListAliasesOutput} Success
		 */
		ListAliases(requestBody: ListAliasesInput): Observable<ListAliasesOutput> {
			return this.http.post<ListAliasesOutput>(this.baseUri + '#X-Amz-Target=GameLift.ListAliases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves build resources for all builds associated with the AWS account in use. You can limit results to builds that are in a specific status by using the <code>Status</code> parameter. Use the pagination parameters to retrieve results in a set of sequential pages. </p> <note> <p>Build resources are not listed in any particular order.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateBuild</a> </p> </li> <li> <p> <a>ListBuilds</a> </p> </li> <li> <p> <a>DescribeBuild</a> </p> </li> <li> <p> <a>UpdateBuild</a> </p> </li> <li> <p> <a>DeleteBuild</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.ListBuilds
		 * @return {ListBuildsOutput} Success
		 */
		ListBuilds(requestBody: ListBuildsInput): Observable<ListBuildsOutput> {
			return this.http.post<ListBuildsOutput>(this.baseUri + '#X-Amz-Target=GameLift.ListBuilds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a collection of fleet resources for this AWS account. You can filter the result set to find only those fleets that are deployed with a specific build or script. Use the pagination parameters to retrieve results in sequential pages.</p> <note> <p>Fleet resources are not listed in a particular order.</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.ListFleets
		 * @return {ListFleetsOutput} Success
		 */
		ListFleets(requestBody: ListFleetsInput): Observable<ListFleetsOutput> {
			return this.http.post<ListFleetsOutput>(this.baseUri + '#X-Amz-Target=GameLift.ListFleets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This action is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Retrieves information on all game servers groups that exist in the current AWS account for the selected region. Use the pagination parameters to retrieve results in a set of sequential pages. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gsg-intro.html">GameLift FleetIQ Guide</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateGameServerGroup</a> </p> </li> <li> <p> <a>ListGameServerGroups</a> </p> </li> <li> <p> <a>DescribeGameServerGroup</a> </p> </li> <li> <p> <a>UpdateGameServerGroup</a> </p> </li> <li> <p> <a>DeleteGameServerGroup</a> </p> </li> <li> <p> <a>ResumeGameServerGroup</a> </p> </li> <li> <p> <a>SuspendGameServerGroup</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.ListGameServerGroups
		 * @return {ListGameServerGroupsOutput} Success
		 */
		ListGameServerGroups(requestBody: ListGameServerGroupsInput): Observable<ListGameServerGroupsOutput> {
			return this.http.post<ListGameServerGroupsOutput>(this.baseUri + '#X-Amz-Target=GameLift.ListGameServerGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This action is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Retrieves information on all game servers that are currently running in a specified game server group. If there are custom key sort values for your game servers, you can opt to have the returned list sorted based on these values. Use the pagination parameters to retrieve results in a set of sequential pages. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gsg-intro.html">GameLift FleetIQ Guide</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>RegisterGameServer</a> </p> </li> <li> <p> <a>ListGameServers</a> </p> </li> <li> <p> <a>ClaimGameServer</a> </p> </li> <li> <p> <a>DescribeGameServer</a> </p> </li> <li> <p> <a>UpdateGameServer</a> </p> </li> <li> <p> <a>DeregisterGameServer</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.ListGameServers
		 * @return {ListGameServersOutput} Success
		 */
		ListGameServers(requestBody: ListGameServersInput): Observable<ListGameServersOutput> {
			return this.http.post<ListGameServersOutput>(this.baseUri + '#X-Amz-Target=GameLift.ListGameServers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves script records for all Realtime scripts that are associated with the AWS account in use. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateScript</a> </p> </li> <li> <p> <a>ListScripts</a> </p> </li> <li> <p> <a>DescribeScript</a> </p> </li> <li> <p> <a>UpdateScript</a> </p> </li> <li> <p> <a>DeleteScript</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.ListScripts
		 * @return {ListScriptsOutput} Success
		 */
		ListScripts(requestBody: ListScriptsInput): Observable<ListScriptsOutput> {
			return this.http.post<ListScriptsOutput>(this.baseUri + '#X-Amz-Target=GameLift.ListScripts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Retrieves all tags that are assigned to a GameLift resource. Resource tags are used to organize AWS resources for a range of purposes. This action handles the permissions necessary to manage tags for the following GameLift resource types:</p> <ul> <li> <p>Build</p> </li> <li> <p>Script</p> </li> <li> <p>Fleet</p> </li> <li> <p>Alias</p> </li> <li> <p>GameSessionQueue</p> </li> <li> <p>MatchmakingConfiguration</p> </li> <li> <p>MatchmakingRuleSet</p> </li> </ul> <p>To list tags for a resource, specify the unique ARN value for the resource.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> in the <i>AWS General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> AWS Tagging Strategies</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>TagResource</a> </p> </li> <li> <p> <a>UntagResource</a> </p> </li> <li> <p> <a>ListTagsForResource</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=GameLift.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates a scaling policy for a fleet. Scaling policies are used to automatically scale a fleet's hosting capacity to meet player demand. An active scaling policy instructs Amazon GameLift to track a fleet metric and automatically change the fleet's capacity when a certain threshold is reached. There are two types of scaling policies: target-based and rule-based. Use a target-based policy to quickly and efficiently manage fleet scaling; this option is the most commonly used. Use rule-based policies when you need to exert fine-grained control over auto-scaling. </p> <p>Fleets can have multiple scaling policies of each type in force at the same time; you can have one target-based policy, one or multiple rule-based scaling policies, or both. We recommend caution, however, because multiple auto-scaling policies can have unintended consequences.</p> <p>You can temporarily suspend all scaling policies for a fleet by calling <a>StopFleetActions</a> with the fleet action AUTO_SCALING. To resume scaling policies, call <a>StartFleetActions</a> with the same fleet action. To stop just one scaling policy--or to permanently remove it, you must delete the policy with <a>DeleteScalingPolicy</a>.</p> <p>Learn more about how to work with auto-scaling in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-autoscaling.html">Set Up Fleet Automatic Scaling</a>.</p> <p> <b>Target-based policy</b> </p> <p>A target-based policy tracks a single metric: PercentAvailableGameSessions. This metric tells us how much of a fleet's hosting capacity is ready to host game sessions but is not currently in use. This is the fleet's buffer; it measures the additional player demand that the fleet could handle at current capacity. With a target-based policy, you set your ideal buffer size and leave it to Amazon GameLift to take whatever action is needed to maintain that target. </p> <p>For example, you might choose to maintain a 10% buffer for a fleet that has the capacity to host 100 simultaneous game sessions. This policy tells Amazon GameLift to take action whenever the fleet's available capacity falls below or rises above 10 game sessions. Amazon GameLift will start new instances or stop unused instances in order to return to the 10% buffer. </p> <p>To create or update a target-based policy, specify a fleet ID and name, and set the policy type to "TargetBased". Specify the metric to track (PercentAvailableGameSessions) and reference a <a>TargetConfiguration</a> object with your desired buffer value. Exclude all other parameters. On a successful request, the policy name is returned. The scaling policy is automatically in force as soon as it's successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.</p> <p> <b>Rule-based policy</b> </p> <p>A rule-based policy tracks specified fleet metric, sets a threshold value, and specifies the type of action to initiate when triggered. With a rule-based policy, you can select from several available fleet metrics. Each policy specifies whether to scale up or scale down (and by how much), so you need one policy for each type of action. </p> <p>For example, a policy may make the following statement: "If the percentage of idle instances is greater than 20% for more than 15 minutes, then reduce the fleet capacity by 10%."</p> <p>A policy's rule statement has the following structure:</p> <p>If <code>[MetricName]</code> is <code>[ComparisonOperator]</code> <code>[Threshold]</code> for <code>[EvaluationPeriods]</code> minutes, then <code>[ScalingAdjustmentType]</code> to/by <code>[ScalingAdjustment]</code>.</p> <p>To implement the example, the rule statement would look like this:</p> <p>If <code>[PercentIdleInstances]</code> is <code>[GreaterThanThreshold]</code> <code>[20]</code> for <code>[15]</code> minutes, then <code>[PercentChangeInCapacity]</code> to/by <code>[10]</code>.</p> <p>To create or update a scaling policy, specify a unique combination of name and fleet ID, and set the policy type to "RuleBased". Specify the parameter values for a policy rule statement. On a successful request, the policy name is returned. Scaling policies are automatically in force as soon as they're successfully created. If the fleet's auto-scaling actions are temporarily suspended, the new policy will be in force once the fleet actions are restarted.</p> <ul> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p>Manage scaling policies:</p> <ul> <li> <p> <a>PutScalingPolicy</a> (auto-scaling)</p> </li> <li> <p> <a>DescribeScalingPolicies</a> (auto-scaling)</p> </li> <li> <p> <a>DeleteScalingPolicy</a> (auto-scaling)</p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>
		 * Post #X-Amz-Target=GameLift.PutScalingPolicy
		 * @return {PutScalingPolicyOutput} Success
		 */
		PutScalingPolicy(requestBody: PutScalingPolicyInput): Observable<PutScalingPolicyOutput> {
			return this.http.post<PutScalingPolicyOutput>(this.baseUri + '#X-Amz-Target=GameLift.PutScalingPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This action is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Creates a new game server resource and notifies GameLift FleetIQ that the game server is ready to host gameplay and players. This action is called by a game server process that is running on an instance in a game server group. Registering game servers enables GameLift FleetIQ to track available game servers and enables game clients and services to claim a game server for a new game session. </p> <p>To register a game server, identify the game server group and instance where the game server is running, and provide a unique identifier for the game server. You can also include connection and game server data; when a game client or service requests a game server by calling <a>ClaimGameServer</a>, this information is returned in response.</p> <p>Once a game server is successfully registered, it is put in status AVAILABLE. A request to register a game server may fail if the instance it is in the process of shutting down as part of instance rebalancing or scale-down activity. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gsg-intro.html">GameLift FleetIQ Guide</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>RegisterGameServer</a> </p> </li> <li> <p> <a>ListGameServers</a> </p> </li> <li> <p> <a>ClaimGameServer</a> </p> </li> <li> <p> <a>DescribeGameServer</a> </p> </li> <li> <p> <a>UpdateGameServer</a> </p> </li> <li> <p> <a>DeregisterGameServer</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.RegisterGameServer
		 * @return {RegisterGameServerOutput} Success
		 */
		RegisterGameServer(requestBody: RegisterGameServerInput): Observable<RegisterGameServerOutput> {
			return this.http.post<RegisterGameServerOutput>(this.baseUri + '#X-Amz-Target=GameLift.RegisterGameServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a fresh set of credentials for use when uploading a new set of game build files to Amazon GameLift's Amazon S3. This is done as part of the build creation process; see <a>CreateBuild</a>.</p> <p>To request new credentials, specify the build ID as returned with an initial <code>CreateBuild</code> request. If successful, a new set of credentials are returned, along with the S3 storage location associated with the build ID.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in S3</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateBuild</a> </p> </li> <li> <p> <a>ListBuilds</a> </p> </li> <li> <p> <a>DescribeBuild</a> </p> </li> <li> <p> <a>UpdateBuild</a> </p> </li> <li> <p> <a>DeleteBuild</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.RequestUploadCredentials
		 * @return {RequestUploadCredentialsOutput} Success
		 */
		RequestUploadCredentials(requestBody: RequestUploadCredentialsInput): Observable<RequestUploadCredentialsOutput> {
			return this.http.post<RequestUploadCredentialsOutput>(this.baseUri + '#X-Amz-Target=GameLift.RequestUploadCredentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the fleet ID that an alias is currently pointing to.</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.ResolveAlias
		 * @return {ResolveAliasOutput} Success
		 */
		ResolveAlias(requestBody: ResolveAliasInput): Observable<ResolveAliasOutput> {
			return this.http.post<ResolveAliasOutput>(this.baseUri + '#X-Amz-Target=GameLift.ResolveAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This action is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Reinstates activity on a game server group after it has been suspended. A game server group may be suspended by calling <a>SuspendGameServerGroup</a>, or it may have been involuntarily suspended due to a configuration problem. You can manually resume activity on the group once the configuration problem has been resolved. Refer to the game server group status and status reason for more information on why group activity is suspended.</p> <p>To resume activity, specify a game server group ARN and the type of activity to be resumed.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gsg-intro.html">GameLift FleetIQ Guide</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateGameServerGroup</a> </p> </li> <li> <p> <a>ListGameServerGroups</a> </p> </li> <li> <p> <a>DescribeGameServerGroup</a> </p> </li> <li> <p> <a>UpdateGameServerGroup</a> </p> </li> <li> <p> <a>DeleteGameServerGroup</a> </p> </li> <li> <p> <a>ResumeGameServerGroup</a> </p> </li> <li> <p> <a>SuspendGameServerGroup</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.ResumeGameServerGroup
		 * @return {ResumeGameServerGroupOutput} Success
		 */
		ResumeGameServerGroup(requestBody: ResumeGameServerGroupInput): Observable<ResumeGameServerGroupOutput> {
			return this.http.post<ResumeGameServerGroupOutput>(this.baseUri + '#X-Amz-Target=GameLift.ResumeGameServerGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves all active game sessions that match a set of search criteria and sorts them in a specified order. You can search or sort by the following game session attributes:</p> <ul> <li> <p> <b>gameSessionId</b> -- A unique identifier for the game session. You can use either a <code>GameSessionId</code> or <code>GameSessionArn</code> value. </p> </li> <li> <p> <b>gameSessionName</b> -- Name assigned to a game session. This value is set when requesting a new game session with <a>CreateGameSession</a> or updating with <a>UpdateGameSession</a>. Game session names do not need to be unique to a game session.</p> </li> <li> <p> <b>gameSessionProperties</b> -- Custom data defined in a game session's <code>GameProperty</code> parameter. <code>GameProperty</code> values are stored as key:value pairs; the filter expression must indicate the key and a string to search the data values for. For example, to search for game sessions with custom data containing the key:value pair "gameMode:brawl", specify the following: <code>gameSessionProperties.gameMode = "brawl"</code>. All custom data values are searched as strings.</p> </li> <li> <p> <b>maximumSessions</b> -- Maximum number of player sessions allowed for a game session. This value is set when requesting a new game session with <a>CreateGameSession</a> or updating with <a>UpdateGameSession</a>.</p> </li> <li> <p> <b>creationTimeMillis</b> -- Value indicating when a game session was created. It is expressed in Unix time as milliseconds.</p> </li> <li> <p> <b>playerSessionCount</b> -- Number of players currently connected to a game session. This value changes rapidly as players join the session or drop out.</p> </li> <li> <p> <b>hasAvailablePlayerSessions</b> -- Boolean value indicating whether a game session has reached its maximum number of players. It is highly recommended that all search requests include this filter attribute to optimize search performance and return only sessions that players can join. </p> </li> </ul> <note> <p>Returned values for <code>playerSessionCount</code> and <code>hasAvailablePlayerSessions</code> change quickly as players join sessions and others drop out. Results should be considered a snapshot in time. Be sure to refresh search results often, and handle sessions that fill up before a player can join. </p> </note> <p>To search or sort, specify either a fleet ID or an alias ID, and provide a search filter expression, a sort expression, or both. If successful, a collection of <a>GameSession</a> objects matching the request is returned. Use the pagination parameters to retrieve results as a set of sequential pages. </p> <p>You can search for game sessions one fleet at a time only. To find game sessions across multiple fleets, you must search each fleet separately and combine the results. This search feature finds only game sessions that are in <code>ACTIVE</code> status. To locate games in statuses other than active, use <a>DescribeGameSessionDetails</a>.</p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>
		 * Post #X-Amz-Target=GameLift.SearchGameSessions
		 * @return {SearchGameSessionsOutput} Success
		 */
		SearchGameSessions(requestBody: SearchGameSessionsInput): Observable<SearchGameSessionsOutput> {
			return this.http.post<SearchGameSessionsOutput>(this.baseUri + '#X-Amz-Target=GameLift.SearchGameSessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Resumes activity on a fleet that was suspended with <a>StopFleetActions</a>. Currently, this operation is used to restart a fleet's auto-scaling activity. </p> <p>To start fleet actions, specify the fleet ID and the type of actions to restart. When auto-scaling fleet actions are restarted, Amazon GameLift once again initiates scaling events as triggered by the fleet's scaling policies. If actions on the fleet were never stopped, this operation will have no effect. You can view a fleet's stopped actions using <a>DescribeFleetAttributes</a>.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.StartFleetActions
		 * @return {StartFleetActionsOutput} Success
		 */
		StartFleetActions(requestBody: StartFleetActionsInput): Observable<StartFleetActionsOutput> {
			return this.http.post<StartFleetActionsOutput>(this.baseUri + '#X-Amz-Target=GameLift.StartFleetActions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Places a request for a new game session in a queue (see <a>CreateGameSessionQueue</a>). When processing a placement request, Amazon GameLift searches for available resources on the queue's destinations, scanning each until it finds resources or the placement request times out.</p> <p>A game session placement request can also request player sessions. When a new game session is successfully created, Amazon GameLift creates a player session for each player included in the request.</p> <p>When placing a game session, by default Amazon GameLift tries each fleet in the order they are listed in the queue configuration. Ideally, a queue's destinations are listed in preference order.</p> <p>Alternatively, when requesting a game session with players, you can also provide latency data for each player in relevant Regions. Latency data indicates the performance lag a player experiences when connected to a fleet in the Region. Amazon GameLift uses latency data to reorder the list of destinations to place the game session in a Region with minimal lag. If latency data is provided for multiple players, Amazon GameLift calculates each Region's average lag for all players and reorders to get the best game play across all players. </p> <p>To place a new game session request, specify the following:</p> <ul> <li> <p>The queue name and a set of game session properties and settings</p> </li> <li> <p>A unique ID (such as a UUID) for the placement. You use this ID to track the status of the placement request</p> </li> <li> <p>(Optional) A set of player data and a unique player ID for each player that you are joining to the new game session (player data is optional, but if you include it, you must also provide a unique ID for each player)</p> </li> <li> <p>Latency data for all players (if you want to optimize game play for the players)</p> </li> </ul> <p>If successful, a new game session placement is created.</p> <p>To track the status of a placement request, call <a>DescribeGameSessionPlacement</a> and check the request's status. If the status is <code>FULFILLED</code>, a new game session has been created and a game session ARN and Region are referenced. If the placement request times out, you can resubmit the request or retry it with a different queue. </p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>
		 * Post #X-Amz-Target=GameLift.StartGameSessionPlacement
		 * @return {StartGameSessionPlacementOutput} Success
		 */
		StartGameSessionPlacement(requestBody: StartGameSessionPlacementInput): Observable<StartGameSessionPlacementOutput> {
			return this.http.post<StartGameSessionPlacementOutput>(this.baseUri + '#X-Amz-Target=GameLift.StartGameSessionPlacement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Finds new players to fill open slots in an existing game session. This operation can be used to add players to matched games that start with fewer than the maximum number of players or to replace players when they drop out. By backfilling with the same matchmaker used to create the original match, you ensure that new players meet the match criteria and maintain a consistent experience throughout the game session. You can backfill a match anytime after a game session has been created. </p> <p>To request a match backfill, specify a unique ticket ID, the existing game session's ARN, a matchmaking configuration, and a set of data that describes all current players in the game session. If successful, a match backfill ticket is created and returned with status set to QUEUED. The ticket is placed in the matchmaker's ticket pool and processed. Track the status of the ticket to respond as needed. </p> <p>The process of finding backfill matches is essentially identical to the initial matchmaking process. The matchmaker searches the pool and groups tickets together to form potential matches, allowing only one backfill ticket per potential match. Once the a match is formed, the matchmaker creates player sessions for the new players. All tickets in the match are updated with the game session's connection information, and the <a>GameSession</a> object is updated to include matchmaker data on the new players. For more detail on how match backfill requests are processed, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-match.html"> How Amazon GameLift FlexMatch Works</a>. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-backfill.html"> Backfill Existing Games with FlexMatch</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-match.html"> How GameLift FlexMatch Works</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>StartMatchmaking</a> </p> </li> <li> <p> <a>DescribeMatchmaking</a> </p> </li> <li> <p> <a>StopMatchmaking</a> </p> </li> <li> <p> <a>AcceptMatch</a> </p> </li> <li> <p> <a>StartMatchBackfill</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.StartMatchBackfill
		 * @return {StartMatchBackfillOutput} Success
		 */
		StartMatchBackfill(requestBody: StartMatchBackfillInput): Observable<StartMatchBackfillOutput> {
			return this.http.post<StartMatchBackfillOutput>(this.baseUri + '#X-Amz-Target=GameLift.StartMatchBackfill', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Uses FlexMatch to create a game match for a group of players based on custom matchmaking rules, and starts a new game for the matched players. Each matchmaking request specifies the type of match to build (team configuration, rules for an acceptable match, etc.). The request also specifies the players to find a match for and where to host the new game session for optimal performance. A matchmaking request might start with a single player or a group of players who want to play together. FlexMatch finds additional players as needed to fill the match. Match type, rules, and the queue used to place a new game session are defined in a <code>MatchmakingConfiguration</code>. </p> <p>To start matchmaking, provide a unique ticket ID, specify a matchmaking configuration, and include the players to be matched. You must also include a set of player attributes relevant for the matchmaking configuration. If successful, a matchmaking ticket is returned with status set to <code>QUEUED</code>. Track the status of the ticket to respond as needed and acquire game session connection information for successfully completed matches.</p> <p> <b>Tracking ticket status</b> -- A couple of options are available for tracking the status of matchmaking requests: </p> <ul> <li> <p>Polling -- Call <code>DescribeMatchmaking</code>. This operation returns the full ticket object, including current status and (for completed tickets) game session connection info. We recommend polling no more than once every 10 seconds.</p> </li> <li> <p>Notifications -- Get event notifications for changes in ticket status using Amazon Simple Notification Service (SNS). Notifications are easy to set up (see <a>CreateMatchmakingConfiguration</a>) and typically deliver match status changes faster and more efficiently than polling. We recommend that you use polling to back up to notifications (since delivery is not guaranteed) and call <code>DescribeMatchmaking</code> only when notifications are not received within 30 seconds.</p> </li> </ul> <p> <b>Processing a matchmaking request</b> -- FlexMatch handles a matchmaking request as follows: </p> <ol> <li> <p>Your client code submits a <code>StartMatchmaking</code> request for one or more players and tracks the status of the request ticket. </p> </li> <li> <p>FlexMatch uses this ticket and others in process to build an acceptable match. When a potential match is identified, all tickets in the proposed match are advanced to the next status. </p> </li> <li> <p>If the match requires player acceptance (set in the matchmaking configuration), the tickets move into status <code>REQUIRES_ACCEPTANCE</code>. This status triggers your client code to solicit acceptance from all players in every ticket involved in the match, and then call <a>AcceptMatch</a> for each player. If any player rejects or fails to accept the match before a specified timeout, the proposed match is dropped (see <code>AcceptMatch</code> for more details).</p> </li> <li> <p>Once a match is proposed and accepted, the matchmaking tickets move into status <code>PLACING</code>. FlexMatch locates resources for a new game session using the game session queue (set in the matchmaking configuration) and creates the game session based on the match data. </p> </li> <li> <p>When the match is successfully placed, the matchmaking tickets move into <code>COMPLETED</code> status. Connection information (including game session endpoint and player session) is added to the matchmaking tickets. Matched players can use the connection information to join the game. </p> </li> </ol> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-client.html"> Add FlexMatch to a Game Client</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-notification.html"> Set Up FlexMatch Event Notification</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-tasks.html"> FlexMatch Integration Roadmap</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-match.html"> How GameLift FlexMatch Works</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>StartMatchmaking</a> </p> </li> <li> <p> <a>DescribeMatchmaking</a> </p> </li> <li> <p> <a>StopMatchmaking</a> </p> </li> <li> <p> <a>AcceptMatch</a> </p> </li> <li> <p> <a>StartMatchBackfill</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.StartMatchmaking
		 * @return {StartMatchmakingOutput} Success
		 */
		StartMatchmaking(requestBody: StartMatchmakingInput): Observable<StartMatchmakingOutput> {
			return this.http.post<StartMatchmakingOutput>(this.baseUri + '#X-Amz-Target=GameLift.StartMatchmaking', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Suspends activity on a fleet. Currently, this operation is used to stop a fleet's auto-scaling activity. It is used to temporarily stop triggering scaling events. The policies can be retained and auto-scaling activity can be restarted using <a>StartFleetActions</a>. You can view a fleet's stopped actions using <a>DescribeFleetAttributes</a>.</p> <p>To stop fleet actions, specify the fleet ID and the type of actions to suspend. When auto-scaling fleet actions are stopped, Amazon GameLift no longer initiates scaling events except in response to manual changes using <a>UpdateFleetCapacity</a>. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.StopFleetActions
		 * @return {StopFleetActionsOutput} Success
		 */
		StopFleetActions(requestBody: StopFleetActionsInput): Observable<StopFleetActionsOutput> {
			return this.http.post<StopFleetActionsOutput>(this.baseUri + '#X-Amz-Target=GameLift.StopFleetActions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Cancels a game session placement that is in <code>PENDING</code> status. To stop a placement, provide the placement ID values. If successful, the placement is moved to <code>CANCELLED</code> status.</p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>
		 * Post #X-Amz-Target=GameLift.StopGameSessionPlacement
		 * @return {StopGameSessionPlacementOutput} Success
		 */
		StopGameSessionPlacement(requestBody: StopGameSessionPlacementInput): Observable<StopGameSessionPlacementOutput> {
			return this.http.post<StopGameSessionPlacementOutput>(this.baseUri + '#X-Amz-Target=GameLift.StopGameSessionPlacement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Cancels a matchmaking ticket or match backfill ticket that is currently being processed. To stop the matchmaking operation, specify the ticket ID. If successful, work on the ticket is stopped, and the ticket status is changed to <code>CANCELLED</code>.</p> <p>This call is also used to turn off automatic backfill for an individual game session. This is for game sessions that are created with a matchmaking configuration that has automatic backfill enabled. The ticket ID is included in the <code>MatchmakerData</code> of an updated game session object, which is provided to the game server.</p> <note> <p>If the action is successful, the service sends back an empty JSON struct with the HTTP 200 response (not an empty HTTP body).</p> </note> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-client.html"> Add FlexMatch to a Game Client</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>StartMatchmaking</a> </p> </li> <li> <p> <a>DescribeMatchmaking</a> </p> </li> <li> <p> <a>StopMatchmaking</a> </p> </li> <li> <p> <a>AcceptMatch</a> </p> </li> <li> <p> <a>StartMatchBackfill</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.StopMatchmaking
		 * @return {StopMatchmakingOutput} Success
		 */
		StopMatchmaking(requestBody: StopMatchmakingInput): Observable<StopMatchmakingOutput> {
			return this.http.post<StopMatchmakingOutput>(this.baseUri + '#X-Amz-Target=GameLift.StopMatchmaking', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This action is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Temporarily stops activity on a game server group without terminating instances or the game server group. Activity can be restarted by calling <a>ResumeGameServerGroup</a>. Activities that can suspended are:</p> <ul> <li> <p>Instance type replacement. This activity evaluates the current Spot viability of all instance types that are defined for the game server group. It updates the Auto Scaling group to remove nonviable Spot instance types (which have a higher chance of game server interruptions) and rebalances capacity across the remaining viable Spot instance types. When this activity is suspended, the Auto Scaling group continues with its current balance, regardless of viability. Instance protection, utilization metrics, and capacity autoscaling activities continue to be active. </p> </li> </ul> <p>To suspend activity, specify a game server group ARN and the type of activity to be suspended.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gsg-intro.html">GameLift FleetIQ Guide</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateGameServerGroup</a> </p> </li> <li> <p> <a>ListGameServerGroups</a> </p> </li> <li> <p> <a>DescribeGameServerGroup</a> </p> </li> <li> <p> <a>UpdateGameServerGroup</a> </p> </li> <li> <p> <a>DeleteGameServerGroup</a> </p> </li> <li> <p> <a>ResumeGameServerGroup</a> </p> </li> <li> <p> <a>SuspendGameServerGroup</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.SuspendGameServerGroup
		 * @return {SuspendGameServerGroupOutput} Success
		 */
		SuspendGameServerGroup(requestBody: SuspendGameServerGroupInput): Observable<SuspendGameServerGroupOutput> {
			return this.http.post<SuspendGameServerGroupOutput>(this.baseUri + '#X-Amz-Target=GameLift.SuspendGameServerGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Assigns a tag to a GameLift resource. AWS resource tags provide an additional management tool set. You can use tags to organize resources, create IAM permissions policies to manage access to groups of resources, customize AWS cost breakdowns, etc. This action handles the permissions necessary to manage tags for the following GameLift resource types:</p> <ul> <li> <p>Build</p> </li> <li> <p>Script</p> </li> <li> <p>Fleet</p> </li> <li> <p>Alias</p> </li> <li> <p>GameSessionQueue</p> </li> <li> <p>MatchmakingConfiguration</p> </li> <li> <p>MatchmakingRuleSet</p> </li> </ul> <p>To add a tag to a resource, specify the unique ARN value for the resource and provide a tag list containing one or more tags. The operation succeeds even if the list includes tags that are already assigned to the specified resource. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> in the <i>AWS General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> AWS Tagging Strategies</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>TagResource</a> </p> </li> <li> <p> <a>UntagResource</a> </p> </li> <li> <p> <a>ListTagsForResource</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=GameLift.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes a tag that is assigned to a GameLift resource. Resource tags are used to organize AWS resources for a range of purposes. This action handles the permissions necessary to manage tags for the following GameLift resource types:</p> <ul> <li> <p>Build</p> </li> <li> <p>Script</p> </li> <li> <p>Fleet</p> </li> <li> <p>Alias</p> </li> <li> <p>GameSessionQueue</p> </li> <li> <p>MatchmakingConfiguration</p> </li> <li> <p>MatchmakingRuleSet</p> </li> </ul> <p>To remove a tag from a resource, specify the unique ARN value for the resource and provide a string list containing one or more tags to be removed. This action succeeds even if the list includes tags that are not currently assigned to the specified resource.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> in the <i>AWS General Reference</i> </p> <p> <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/"> AWS Tagging Strategies</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>TagResource</a> </p> </li> <li> <p> <a>UntagResource</a> </p> </li> <li> <p> <a>ListTagsForResource</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=GameLift.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates properties for an alias. To update properties, specify the alias ID to be updated and provide the information to be changed. To reassign an alias to another fleet, provide an updated routing strategy. If successful, the updated alias record is returned.</p> <ul> <li> <p> <a>CreateAlias</a> </p> </li> <li> <p> <a>ListAliases</a> </p> </li> <li> <p> <a>DescribeAlias</a> </p> </li> <li> <p> <a>UpdateAlias</a> </p> </li> <li> <p> <a>DeleteAlias</a> </p> </li> <li> <p> <a>ResolveAlias</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.UpdateAlias
		 * @return {UpdateAliasOutput} Success
		 */
		UpdateAlias(requestBody: UpdateAliasInput): Observable<UpdateAliasOutput> {
			return this.http.post<UpdateAliasOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates metadata in a build resource, including the build name and version. To update the metadata, specify the build ID to update and provide the new values. If successful, a build object containing the updated metadata is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom Server Build</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateBuild</a> </p> </li> <li> <p> <a>ListBuilds</a> </p> </li> <li> <p> <a>DescribeBuild</a> </p> </li> <li> <p> <a>UpdateBuild</a> </p> </li> <li> <p> <a>DeleteBuild</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.UpdateBuild
		 * @return {UpdateBuildOutput} Success
		 */
		UpdateBuild(requestBody: UpdateBuildInput): Observable<UpdateBuildOutput> {
			return this.http.post<UpdateBuildOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateBuild', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates fleet properties, including name and description, for a fleet. To update metadata, specify the fleet ID and the property values that you want to change. If successful, the fleet ID for the updated fleet is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.UpdateFleetAttributes
		 * @return {UpdateFleetAttributesOutput} Success
		 */
		UpdateFleetAttributes(requestBody: UpdateFleetAttributesInput): Observable<UpdateFleetAttributesOutput> {
			return this.http.post<UpdateFleetAttributesOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateFleetAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates capacity settings for a fleet. Use this action to specify the number of EC2 instances (hosts) that you want this fleet to contain. Before calling this action, you may want to call <a>DescribeEC2InstanceLimits</a> to get the maximum capacity based on the fleet's EC2 instance type.</p> <p>Specify minimum and maximum number of instances. Amazon GameLift will not change fleet capacity to values fall outside of this range. This is particularly important when using auto-scaling (see <a>PutScalingPolicy</a>) to allow capacity to adjust based on player demand while imposing limits on automatic adjustments.</p> <p>To update fleet capacity, specify the fleet ID and the number of instances you want the fleet to host. If successful, Amazon GameLift starts or terminates instances so that the fleet's active instance count matches the desired instance count. You can view a fleet's current capacity information by calling <a>DescribeFleetCapacity</a>. If the desired instance count is higher than the instance type's limit, the "Limit Exceeded" exception occurs.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.UpdateFleetCapacity
		 * @return {UpdateFleetCapacityOutput} Success
		 */
		UpdateFleetCapacity(requestBody: UpdateFleetCapacityInput): Observable<UpdateFleetCapacityOutput> {
			return this.http.post<UpdateFleetCapacityOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateFleetCapacity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates port settings for a fleet. To update settings, specify the fleet ID to be updated and list the permissions you want to update. List the permissions you want to add in <code>InboundPermissionAuthorizations</code>, and permissions you want to remove in <code>InboundPermissionRevocations</code>. Permissions to be removed must match existing fleet permissions. If successful, the fleet ID for the updated fleet is returned.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.UpdateFleetPortSettings
		 * @return {UpdateFleetPortSettingsOutput} Success
		 */
		UpdateFleetPortSettings(requestBody: UpdateFleetPortSettingsInput): Observable<UpdateFleetPortSettingsOutput> {
			return this.http.post<UpdateFleetPortSettingsOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateFleetPortSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This action is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Updates information about a registered game server. This action is called by a game server process that is running on an instance in a game server group. There are three reasons to update game server information: (1) to change the utilization status of the game server, (2) to report game server health status, and (3) to change game server metadata. A registered game server should regularly report health and should update utilization status when it is supporting gameplay so that GameLift FleetIQ can accurately track game server availability. You can make all three types of updates in the same request.</p> <ul> <li> <p>To update the game server's utilization status, identify the game server and game server group and specify the current utilization status. Use this status to identify when game servers are currently hosting games and when they are available to be claimed. </p> </li> <li> <p>To report health status, identify the game server and game server group and set health check to HEALTHY. If a game server does not report health status for a certain length of time, the game server is no longer considered healthy and will be eventually de-registered from the game server group to avoid affecting utilization metrics. The best practice is to report health every 60 seconds.</p> </li> <li> <p>To change game server metadata, provide updated game server data and custom sort key values.</p> </li> </ul> <p>Once a game server is successfully updated, the relevant statuses and timestamps are updated.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gsg-intro.html">GameLift FleetIQ Guide</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>RegisterGameServer</a> </p> </li> <li> <p> <a>ListGameServers</a> </p> </li> <li> <p> <a>ClaimGameServer</a> </p> </li> <li> <p> <a>DescribeGameServer</a> </p> </li> <li> <p> <a>UpdateGameServer</a> </p> </li> <li> <p> <a>DeregisterGameServer</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.UpdateGameServer
		 * @return {UpdateGameServerOutput} Success
		 */
		UpdateGameServer(requestBody: UpdateGameServerInput): Observable<UpdateGameServerOutput> {
			return this.http.post<UpdateGameServerOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateGameServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <b>This action is part of Amazon GameLift FleetIQ with game server groups, which is in preview release and is subject to change.</b> </p> <p>Updates GameLift FleetIQ-specific properties for a game server group. These properties include instance rebalancing and game server protection. Many Auto Scaling group properties are updated directly. These include autoscaling policies, minimum/maximum/desired instance counts, and launch template. </p> <p>To update the game server group, specify the game server group ID and provide the updated values.</p> <p>Updated properties are validated to ensure that GameLift FleetIQ can continue to perform its core instance rebalancing activity. When you change Auto Scaling group properties directly and the changes cause errors with GameLift FleetIQ activities, an alert is sent.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gsg-intro.html">GameLift FleetIQ Guide</a> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gsg-asgroups.html">Updating a GameLift FleetIQ-Linked Auto Scaling Group</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateGameServerGroup</a> </p> </li> <li> <p> <a>ListGameServerGroups</a> </p> </li> <li> <p> <a>DescribeGameServerGroup</a> </p> </li> <li> <p> <a>UpdateGameServerGroup</a> </p> </li> <li> <p> <a>DeleteGameServerGroup</a> </p> </li> <li> <p> <a>ResumeGameServerGroup</a> </p> </li> <li> <p> <a>SuspendGameServerGroup</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.UpdateGameServerGroup
		 * @return {UpdateGameServerGroupOutput} Success
		 */
		UpdateGameServerGroup(requestBody: UpdateGameServerGroupInput): Observable<UpdateGameServerGroupOutput> {
			return this.http.post<UpdateGameServerGroupOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateGameServerGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates game session properties. This includes the session name, maximum player count, protection policy, which controls whether or not an active game session can be terminated during a scale-down event, and the player session creation policy, which controls whether or not new players can join the session. To update a game session, specify the game session ID and the values you want to change. If successful, an updated <a>GameSession</a> object is returned. </p> <ul> <li> <p> <a>CreateGameSession</a> </p> </li> <li> <p> <a>DescribeGameSessions</a> </p> </li> <li> <p> <a>DescribeGameSessionDetails</a> </p> </li> <li> <p> <a>SearchGameSessions</a> </p> </li> <li> <p> <a>UpdateGameSession</a> </p> </li> <li> <p> <a>GetGameSessionLogUrl</a> </p> </li> <li> <p>Game session placements</p> <ul> <li> <p> <a>StartGameSessionPlacement</a> </p> </li> <li> <p> <a>DescribeGameSessionPlacement</a> </p> </li> <li> <p> <a>StopGameSessionPlacement</a> </p> </li> </ul> </li> </ul>
		 * Post #X-Amz-Target=GameLift.UpdateGameSession
		 * @return {UpdateGameSessionOutput} Success
		 */
		UpdateGameSession(requestBody: UpdateGameSessionInput): Observable<UpdateGameSessionOutput> {
			return this.http.post<UpdateGameSessionOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateGameSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates settings for a game session queue, which determines how new game session requests in the queue are processed. To update settings, specify the queue name to be updated and provide the new settings. When updating destinations, provide a complete list of destinations. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-intro.html"> Using Multi-Region Queues</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateGameSessionQueue</a> </p> </li> <li> <p> <a>DescribeGameSessionQueues</a> </p> </li> <li> <p> <a>UpdateGameSessionQueue</a> </p> </li> <li> <p> <a>DeleteGameSessionQueue</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.UpdateGameSessionQueue
		 * @return {UpdateGameSessionQueueOutput} Success
		 */
		UpdateGameSessionQueue(requestBody: UpdateGameSessionQueueInput): Observable<UpdateGameSessionQueueOutput> {
			return this.http.post<UpdateGameSessionQueueOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateGameSessionQueue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates settings for a FlexMatch matchmaking configuration. These changes affect all matches and game sessions that are created after the update. To update settings, specify the configuration name to be updated and provide the new settings. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-configuration.html"> Design a FlexMatch Matchmaker</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DescribeMatchmakingConfigurations</a> </p> </li> <li> <p> <a>UpdateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DeleteMatchmakingConfiguration</a> </p> </li> <li> <p> <a>CreateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DescribeMatchmakingRuleSets</a> </p> </li> <li> <p> <a>ValidateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DeleteMatchmakingRuleSet</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.UpdateMatchmakingConfiguration
		 * @return {UpdateMatchmakingConfigurationOutput} Success
		 */
		UpdateMatchmakingConfiguration(requestBody: UpdateMatchmakingConfigurationInput): Observable<UpdateMatchmakingConfigurationOutput> {
			return this.http.post<UpdateMatchmakingConfigurationOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateMatchmakingConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the current runtime configuration for the specified fleet, which tells Amazon GameLift how to launch server processes on instances in the fleet. You can update a fleet's runtime configuration at any time after the fleet is created; it does not need to be in an <code>ACTIVE</code> status.</p> <p>To update runtime configuration, specify the fleet ID and provide a <code>RuntimeConfiguration</code> object with an updated set of server process configurations.</p> <p>Each instance in a Amazon GameLift fleet checks regularly for an updated runtime configuration and changes how it launches server processes to comply with the latest version. Existing server processes are not affected by the update; runtime configuration changes are applied gradually as existing processes shut down and new processes are launched during Amazon GameLift's normal process recycling activity.</p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p> <a>StartFleetActions</a> or <a>StopFleetActions</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.UpdateRuntimeConfiguration
		 * @return {UpdateRuntimeConfigurationOutput} Success
		 */
		UpdateRuntimeConfiguration(requestBody: UpdateRuntimeConfigurationInput): Observable<UpdateRuntimeConfigurationOutput> {
			return this.http.post<UpdateRuntimeConfigurationOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateRuntimeConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates Realtime script metadata and content.</p> <p>To update script metadata, specify the script ID and provide updated name and/or version values. </p> <p>To update script content, provide an updated zip file by pointing to either a local file or an Amazon S3 bucket location. You can use either method regardless of how the original script was uploaded. Use the <i>Version</i> parameter to track updates to the script.</p> <p>If the call is successful, the updated metadata is stored in the script record and a revised script is uploaded to the Amazon GameLift service. Once the script is updated and acquired by a fleet instance, the new version is used for all new game sessions. </p> <p> <b>Learn more</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a> </p> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateScript</a> </p> </li> <li> <p> <a>ListScripts</a> </p> </li> <li> <p> <a>DescribeScript</a> </p> </li> <li> <p> <a>UpdateScript</a> </p> </li> <li> <p> <a>DeleteScript</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.UpdateScript
		 * @return {UpdateScriptOutput} Success
		 */
		UpdateScript(requestBody: UpdateScriptInput): Observable<UpdateScriptOutput> {
			return this.http.post<UpdateScriptOutput>(this.baseUri + '#X-Amz-Target=GameLift.UpdateScript', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Validates the syntax of a matchmaking rule or rule set. This operation checks that the rule set is using syntactically correct JSON and that it conforms to allowed property expressions. To validate syntax, provide a rule set JSON string.</p> <p> <b>Learn more</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-rulesets.html">Build a Rule Set</a> </p> </li> </ul> <p> <b>Related operations</b> </p> <ul> <li> <p> <a>CreateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DescribeMatchmakingConfigurations</a> </p> </li> <li> <p> <a>UpdateMatchmakingConfiguration</a> </p> </li> <li> <p> <a>DeleteMatchmakingConfiguration</a> </p> </li> <li> <p> <a>CreateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DescribeMatchmakingRuleSets</a> </p> </li> <li> <p> <a>ValidateMatchmakingRuleSet</a> </p> </li> <li> <p> <a>DeleteMatchmakingRuleSet</a> </p> </li> </ul>
		 * Post #X-Amz-Target=GameLift.ValidateMatchmakingRuleSet
		 * @return {ValidateMatchmakingRuleSetOutput} Success
		 */
		ValidateMatchmakingRuleSet(requestBody: ValidateMatchmakingRuleSetInput): Observable<ValidateMatchmakingRuleSetOutput> {
			return this.http.post<ValidateMatchmakingRuleSetOutput>(this.baseUri + '#X-Amz-Target=GameLift.ValidateMatchmakingRuleSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AcceptMatchX_Amz_Target { GameLift_AcceptMatch = 0 }

	export enum ClaimGameServerX_Amz_Target { GameLift_ClaimGameServer = 0 }

	export enum CreateAliasX_Amz_Target { GameLift_CreateAlias = 0 }

	export enum CreateBuildX_Amz_Target { GameLift_CreateBuild = 0 }

	export enum CreateFleetX_Amz_Target { GameLift_CreateFleet = 0 }

	export enum CreateGameServerGroupX_Amz_Target { GameLift_CreateGameServerGroup = 0 }

	export enum CreateGameSessionX_Amz_Target { GameLift_CreateGameSession = 0 }

	export enum CreateGameSessionQueueX_Amz_Target { GameLift_CreateGameSessionQueue = 0 }

	export enum CreateMatchmakingConfigurationX_Amz_Target { GameLift_CreateMatchmakingConfiguration = 0 }

	export enum CreateMatchmakingRuleSetX_Amz_Target { GameLift_CreateMatchmakingRuleSet = 0 }

	export enum CreatePlayerSessionX_Amz_Target { GameLift_CreatePlayerSession = 0 }

	export enum CreatePlayerSessionsX_Amz_Target { GameLift_CreatePlayerSessions = 0 }

	export enum CreateScriptX_Amz_Target { GameLift_CreateScript = 0 }

	export enum CreateVpcPeeringAuthorizationX_Amz_Target { GameLift_CreateVpcPeeringAuthorization = 0 }

	export enum CreateVpcPeeringConnectionX_Amz_Target { GameLift_CreateVpcPeeringConnection = 0 }

	export enum DeleteAliasX_Amz_Target { GameLift_DeleteAlias = 0 }

	export enum DeleteBuildX_Amz_Target { GameLift_DeleteBuild = 0 }

	export enum DeleteFleetX_Amz_Target { GameLift_DeleteFleet = 0 }

	export enum DeleteGameServerGroupX_Amz_Target { GameLift_DeleteGameServerGroup = 0 }

	export enum DeleteGameSessionQueueX_Amz_Target { GameLift_DeleteGameSessionQueue = 0 }

	export enum DeleteMatchmakingConfigurationX_Amz_Target { GameLift_DeleteMatchmakingConfiguration = 0 }

	export enum DeleteMatchmakingRuleSetX_Amz_Target { GameLift_DeleteMatchmakingRuleSet = 0 }

	export enum DeleteScalingPolicyX_Amz_Target { GameLift_DeleteScalingPolicy = 0 }

	export enum DeleteScriptX_Amz_Target { GameLift_DeleteScript = 0 }

	export enum DeleteVpcPeeringAuthorizationX_Amz_Target { GameLift_DeleteVpcPeeringAuthorization = 0 }

	export enum DeleteVpcPeeringConnectionX_Amz_Target { GameLift_DeleteVpcPeeringConnection = 0 }

	export enum DeregisterGameServerX_Amz_Target { GameLift_DeregisterGameServer = 0 }

	export enum DescribeAliasX_Amz_Target { GameLift_DescribeAlias = 0 }

	export enum DescribeBuildX_Amz_Target { GameLift_DescribeBuild = 0 }

	export enum DescribeEC2InstanceLimitsX_Amz_Target { GameLift_DescribeEC2InstanceLimits = 0 }

	export enum DescribeFleetAttributesX_Amz_Target { GameLift_DescribeFleetAttributes = 0 }

	export enum DescribeFleetCapacityX_Amz_Target { GameLift_DescribeFleetCapacity = 0 }

	export enum DescribeFleetEventsX_Amz_Target { GameLift_DescribeFleetEvents = 0 }

	export enum DescribeFleetPortSettingsX_Amz_Target { GameLift_DescribeFleetPortSettings = 0 }

	export enum DescribeFleetUtilizationX_Amz_Target { GameLift_DescribeFleetUtilization = 0 }

	export enum DescribeGameServerX_Amz_Target { GameLift_DescribeGameServer = 0 }

	export enum DescribeGameServerGroupX_Amz_Target { GameLift_DescribeGameServerGroup = 0 }

	export enum DescribeGameSessionDetailsX_Amz_Target { GameLift_DescribeGameSessionDetails = 0 }

	export enum DescribeGameSessionPlacementX_Amz_Target { GameLift_DescribeGameSessionPlacement = 0 }

	export enum DescribeGameSessionQueuesX_Amz_Target { GameLift_DescribeGameSessionQueues = 0 }

	export enum DescribeGameSessionsX_Amz_Target { GameLift_DescribeGameSessions = 0 }

	export enum DescribeInstancesX_Amz_Target { GameLift_DescribeInstances = 0 }

	export enum DescribeMatchmakingX_Amz_Target { GameLift_DescribeMatchmaking = 0 }

	export enum DescribeMatchmakingConfigurationsX_Amz_Target { GameLift_DescribeMatchmakingConfigurations = 0 }

	export enum DescribeMatchmakingRuleSetsX_Amz_Target { GameLift_DescribeMatchmakingRuleSets = 0 }

	export enum DescribePlayerSessionsX_Amz_Target { GameLift_DescribePlayerSessions = 0 }

	export enum DescribeRuntimeConfigurationX_Amz_Target { GameLift_DescribeRuntimeConfiguration = 0 }

	export enum DescribeScalingPoliciesX_Amz_Target { GameLift_DescribeScalingPolicies = 0 }

	export enum DescribeScriptX_Amz_Target { GameLift_DescribeScript = 0 }

	export enum DescribeVpcPeeringAuthorizationsX_Amz_Target { GameLift_DescribeVpcPeeringAuthorizations = 0 }

	export enum DescribeVpcPeeringConnectionsX_Amz_Target { GameLift_DescribeVpcPeeringConnections = 0 }

	export enum GetGameSessionLogUrlX_Amz_Target { GameLift_GetGameSessionLogUrl = 0 }

	export enum GetInstanceAccessX_Amz_Target { GameLift_GetInstanceAccess = 0 }

	export enum ListAliasesX_Amz_Target { GameLift_ListAliases = 0 }

	export enum ListBuildsX_Amz_Target { GameLift_ListBuilds = 0 }

	export enum ListFleetsX_Amz_Target { GameLift_ListFleets = 0 }

	export enum ListGameServerGroupsX_Amz_Target { GameLift_ListGameServerGroups = 0 }

	export enum ListGameServersX_Amz_Target { GameLift_ListGameServers = 0 }

	export enum ListScriptsX_Amz_Target { GameLift_ListScripts = 0 }

	export enum ListTagsForResourceX_Amz_Target { GameLift_ListTagsForResource = 0 }

	export enum PutScalingPolicyX_Amz_Target { GameLift_PutScalingPolicy = 0 }

	export enum RegisterGameServerX_Amz_Target { GameLift_RegisterGameServer = 0 }

	export enum RequestUploadCredentialsX_Amz_Target { GameLift_RequestUploadCredentials = 0 }

	export enum ResolveAliasX_Amz_Target { GameLift_ResolveAlias = 0 }

	export enum ResumeGameServerGroupX_Amz_Target { GameLift_ResumeGameServerGroup = 0 }

	export enum SearchGameSessionsX_Amz_Target { GameLift_SearchGameSessions = 0 }

	export enum StartFleetActionsX_Amz_Target { GameLift_StartFleetActions = 0 }

	export enum StartGameSessionPlacementX_Amz_Target { GameLift_StartGameSessionPlacement = 0 }

	export enum StartMatchBackfillX_Amz_Target { GameLift_StartMatchBackfill = 0 }

	export enum StartMatchmakingX_Amz_Target { GameLift_StartMatchmaking = 0 }

	export enum StopFleetActionsX_Amz_Target { GameLift_StopFleetActions = 0 }

	export enum StopGameSessionPlacementX_Amz_Target { GameLift_StopGameSessionPlacement = 0 }

	export enum StopMatchmakingX_Amz_Target { GameLift_StopMatchmaking = 0 }

	export enum SuspendGameServerGroupX_Amz_Target { GameLift_SuspendGameServerGroup = 0 }

	export enum TagResourceX_Amz_Target { GameLift_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { GameLift_UntagResource = 0 }

	export enum UpdateAliasX_Amz_Target { GameLift_UpdateAlias = 0 }

	export enum UpdateBuildX_Amz_Target { GameLift_UpdateBuild = 0 }

	export enum UpdateFleetAttributesX_Amz_Target { GameLift_UpdateFleetAttributes = 0 }

	export enum UpdateFleetCapacityX_Amz_Target { GameLift_UpdateFleetCapacity = 0 }

	export enum UpdateFleetPortSettingsX_Amz_Target { GameLift_UpdateFleetPortSettings = 0 }

	export enum UpdateGameServerX_Amz_Target { GameLift_UpdateGameServer = 0 }

	export enum UpdateGameServerGroupX_Amz_Target { GameLift_UpdateGameServerGroup = 0 }

	export enum UpdateGameSessionX_Amz_Target { GameLift_UpdateGameSession = 0 }

	export enum UpdateGameSessionQueueX_Amz_Target { GameLift_UpdateGameSessionQueue = 0 }

	export enum UpdateMatchmakingConfigurationX_Amz_Target { GameLift_UpdateMatchmakingConfiguration = 0 }

	export enum UpdateRuntimeConfigurationX_Amz_Target { GameLift_UpdateRuntimeConfiguration = 0 }

	export enum UpdateScriptX_Amz_Target { GameLift_UpdateScript = 0 }

	export enum ValidateMatchmakingRuleSetX_Amz_Target { GameLift_ValidateMatchmakingRuleSet = 0 }

}

