import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AcceptSharedDirectoryResult {

		/** Details about the shared directory in the directory owner account for which the share request in the directory consumer account has been accepted. */
		SharedDirectory?: SharedDirectory | null;
	}


	/** Details about the shared directory in the directory owner account for which the share request in the directory consumer account has been accepted. */
	export interface SharedDirectory {
		OwnerAccountId?: string | null;
		OwnerDirectoryId?: string | null;
		ShareMethod?: SharedDirectoryShareMethod | null;
		SharedAccountId?: string | null;
		SharedDirectoryId?: string | null;
		ShareStatus?: SharedDirectoryShareStatus | null;
		ShareNotes?: string | null;
		CreatedDateTime?: Date | null;
		LastUpdatedDateTime?: Date | null;
	}

	export enum SharedDirectoryShareMethod { ORGANIZATIONS = 0, HANDSHAKE = 1 }

	export enum SharedDirectoryShareStatus { Shared = 0, PendingAcceptance = 1, Rejected = 2, Rejecting = 3, RejectFailed = 4, Sharing = 5, ShareFailed = 6, Deleted = 7, Deleting = 8 }

	export interface AcceptSharedDirectoryRequest {
		SharedDirectoryId: string;
	}

	export interface InvalidParameterException {
	}

	export interface EntityDoesNotExistException {
	}

	export interface DirectoryAlreadySharedException {
	}

	export interface ClientException {
	}

	export interface ServiceException {
	}

	export interface AddIpRoutesResult {
	}

	export interface AddIpRoutesRequest {
		DirectoryId: string;
		IpRoutes: Array<IpRoute>;
		UpdateSecurityGroupForDirectoryControllers?: boolean | null;
	}


	/** IP address block. This is often the address block of the DNS server used for your on-premises domain.  */
	export interface IpRoute {
		CidrIp?: string | null;
		Description?: string | null;
	}

	export interface EntityAlreadyExistsException {
	}

	export interface DirectoryUnavailableException {
	}

	export interface IpRouteLimitExceededException {
	}

	export interface AddTagsToResourceResult {
	}

	export interface AddTagsToResourceRequest {
		ResourceId: string;
		Tags: Array<Tag>;
	}


	/** Metadata assigned to a directory consisting of a key-value pair. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface TagLimitExceededException {
	}

	export interface CancelSchemaExtensionResult {
	}

	export interface CancelSchemaExtensionRequest {
		DirectoryId: string;
		SchemaExtensionId: string;
	}


	/** Contains the results of the <a>ConnectDirectory</a> operation. */
	export interface ConnectDirectoryResult {
		DirectoryId?: string | null;
	}


	/** Contains the inputs for the <a>ConnectDirectory</a> operation. */
	export interface ConnectDirectoryRequest {
		Name: string;
		ShortName?: string | null;
		Password: string;
		Description?: string | null;
		Size: ConnectDirectoryRequestSize;

		/**
		 * Contains information for the <a>ConnectDirectory</a> operation when an AD Connector directory is being created.
		 * Required
		 */
		ConnectSettings: DirectoryConnectSettings;
		Tags?: Array<Tag> | null;
	}

	export enum ConnectDirectoryRequestSize { Small = 0, Large = 1 }


	/** Contains information for the <a>ConnectDirectory</a> operation when an AD Connector directory is being created. */
	export interface DirectoryConnectSettings {
		VpcId: string;
		SubnetIds: Array<string>;
		CustomerDnsIps: Array<string>;
		CustomerUserName: string;
	}

	export interface DirectoryLimitExceededException {
	}


	/** Contains the results of the <a>CreateAlias</a> operation. */
	export interface CreateAliasResult {
		DirectoryId?: string | null;
		Alias?: string | null;
	}


	/** Contains the inputs for the <a>CreateAlias</a> operation. */
	export interface CreateAliasRequest {
		DirectoryId: string;
		Alias: string;
	}


	/** Contains the results for the <a>CreateComputer</a> operation. */
	export interface CreateComputerResult {

		/** Contains information about a computer account in a directory. */
		Computer?: Computer | null;
	}


	/** Contains information about a computer account in a directory. */
	export interface Computer {
		ComputerId?: string | null;
		ComputerName?: string | null;
		ComputerAttributes?: Array<Attribute> | null;
	}


	/** Represents a named directory attribute. */
	export interface Attribute {
		Name?: string | null;
		Value?: string | null;
	}


	/** Contains the inputs for the <a>CreateComputer</a> operation. */
	export interface CreateComputerRequest {
		DirectoryId: string;
		ComputerName: string;
		Password: string;
		OrganizationalUnitDistinguishedName?: string | null;
		ComputerAttributes?: Array<Attribute> | null;
	}

	export interface AuthenticationFailedException {
	}

	export interface UnsupportedOperationException {
	}


	/** The result of a CreateConditinalForwarder request. */
	export interface CreateConditionalForwarderResult {
	}


	/** Initiates the creation of a conditional forwarder for your AWS Directory Service for Microsoft Active Directory. Conditional forwarders are required in order to set up a trust relationship with another domain. */
	export interface CreateConditionalForwarderRequest {
		DirectoryId: string;
		RemoteDomainName: string;
		DnsIpAddrs: Array<string>;
	}


	/** Contains the results of the <a>CreateDirectory</a> operation. */
	export interface CreateDirectoryResult {
		DirectoryId?: string | null;
	}


	/** Contains the inputs for the <a>CreateDirectory</a> operation.  */
	export interface CreateDirectoryRequest {
		Name: string;
		ShortName?: string | null;
		Password: string;
		Description?: string | null;
		Size: ConnectDirectoryRequestSize;

		/** Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation. */
		VpcSettings?: DirectoryVpcSettings | null;
		Tags?: Array<Tag> | null;
	}


	/** Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation. */
	export interface DirectoryVpcSettings {
		VpcId: string;
		SubnetIds: Array<string>;
	}

	export interface CreateLogSubscriptionResult {
	}

	export interface CreateLogSubscriptionRequest {
		DirectoryId: string;
		LogGroupName: string;
	}

	export interface InsufficientPermissionsException {
	}


	/** Result of a CreateMicrosoftAD request. */
	export interface CreateMicrosoftADResult {
		DirectoryId?: string | null;
	}


	/** Creates an AWS Managed Microsoft AD directory. */
	export interface CreateMicrosoftADRequest {
		Name: string;
		ShortName?: string | null;
		Password: string;
		Description?: string | null;

		/**
		 * Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.
		 * Required
		 */
		VpcSettings: DirectoryVpcSettings;
		Edition?: CreateMicrosoftADRequestEdition | null;
		Tags?: Array<Tag> | null;
	}

	export enum CreateMicrosoftADRequestEdition { Enterprise = 0, Standard = 1 }


	/** Contains the results of the <a>CreateSnapshot</a> operation. */
	export interface CreateSnapshotResult {
		SnapshotId?: string | null;
	}


	/** Contains the inputs for the <a>CreateSnapshot</a> operation. */
	export interface CreateSnapshotRequest {
		DirectoryId: string;
		Name?: string | null;
	}

	export interface SnapshotLimitExceededException {
	}


	/** The result of a CreateTrust request. */
	export interface CreateTrustResult {
		TrustId?: string | null;
	}


	/** <p>AWS Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your AWS Managed Microsoft AD directory, and your existing on-premises Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the AWS side of a trust relationship between an AWS Managed Microsoft AD directory and an external domain.</p> */
	export interface CreateTrustRequest {
		DirectoryId: string;
		RemoteDomainName: string;
		TrustPassword: string;
		TrustDirection: CreateTrustRequestTrustDirection;
		TrustType?: CreateTrustRequestTrustType | null;
		ConditionalForwarderIpAddrs?: Array<string> | null;
		SelectiveAuth?: CreateTrustRequestSelectiveAuth | null;
	}

	export enum CreateTrustRequestTrustDirection { One_Way_Outgoing = 0, One_Way_Incoming = 1, Two_Way = 2 }

	export enum CreateTrustRequestTrustType { Forest = 0, External = 1 }

	export enum CreateTrustRequestSelectiveAuth { Enabled = 0, Disabled = 1 }


	/** The result of a DeleteConditionalForwarder request. */
	export interface DeleteConditionalForwarderResult {
	}


	/** Deletes a conditional forwarder. */
	export interface DeleteConditionalForwarderRequest {
		DirectoryId: string;
		RemoteDomainName: string;
	}


	/** Contains the results of the <a>DeleteDirectory</a> operation. */
	export interface DeleteDirectoryResult {
		DirectoryId?: string | null;
	}


	/** Contains the inputs for the <a>DeleteDirectory</a> operation. */
	export interface DeleteDirectoryRequest {
		DirectoryId: string;
	}

	export interface DeleteLogSubscriptionResult {
	}

	export interface DeleteLogSubscriptionRequest {
		DirectoryId: string;
	}


	/** Contains the results of the <a>DeleteSnapshot</a> operation. */
	export interface DeleteSnapshotResult {
		SnapshotId?: string | null;
	}


	/** Contains the inputs for the <a>DeleteSnapshot</a> operation. */
	export interface DeleteSnapshotRequest {
		SnapshotId: string;
	}


	/** The result of a DeleteTrust request. */
	export interface DeleteTrustResult {
		TrustId?: string | null;
	}


	/** Deletes the local side of an existing trust relationship between the AWS Managed Microsoft AD directory and the external domain. */
	export interface DeleteTrustRequest {
		TrustId: string;
		DeleteAssociatedConditionalForwarder?: boolean | null;
	}

	export interface DeregisterCertificateResult {
	}

	export interface DeregisterCertificateRequest {
		DirectoryId: string;
		CertificateId: string;
	}

	export interface DirectoryDoesNotExistException {
	}

	export interface CertificateDoesNotExistException {
	}

	export interface CertificateInUseException {
	}


	/** The result of a DeregisterEventTopic request. */
	export interface DeregisterEventTopicResult {
	}


	/** Removes the specified directory as a publisher to the specified SNS topic. */
	export interface DeregisterEventTopicRequest {
		DirectoryId: string;
		TopicName: string;
	}

	export interface DescribeCertificateResult {

		/** Information about the certificate. */
		Certificate?: Certificate | null;
	}


	/** Information about the certificate. */
	export interface Certificate {
		CertificateId?: string | null;
		State?: CertificateState | null;
		StateReason?: string | null;
		CommonName?: string | null;
		RegisteredDateTime?: Date | null;
		ExpiryDateTime?: Date | null;
	}

	export enum CertificateState { Registering = 0, Registered = 1, RegisterFailed = 2, Deregistering = 3, Deregistered = 4, DeregisterFailed = 5 }

	export interface DescribeCertificateRequest {
		DirectoryId: string;
		CertificateId: string;
	}


	/** The result of a DescribeConditionalForwarder request. */
	export interface DescribeConditionalForwardersResult {
		ConditionalForwarders?: Array<ConditionalForwarder> | null;
	}


	/** Points to a remote domain with which you are setting up a trust relationship. Conditional forwarders are required in order to set up a trust relationship with another domain. */
	export interface ConditionalForwarder {
		RemoteDomainName?: string | null;
		DnsIpAddrs?: Array<string> | null;
		ReplicationScope?: ConditionalForwarderReplicationScope | null;
	}

	export enum ConditionalForwarderReplicationScope { Domain = 0 }


	/** Describes a conditional forwarder. */
	export interface DescribeConditionalForwardersRequest {
		DirectoryId: string;
		RemoteDomainNames?: Array<string> | null;
	}


	/** Contains the results of the <a>DescribeDirectories</a> operation. */
	export interface DescribeDirectoriesResult {

		/** A list of directory descriptions. */
		DirectoryDescriptions?: Array<DirectoryDescription> | null;
		NextToken?: string | null;
	}


	/** Contains information about an AWS Directory Service directory. */
	export interface DirectoryDescription {
		DirectoryId?: string | null;
		Name?: string | null;
		ShortName?: string | null;
		Size?: ConnectDirectoryRequestSize | null;
		Edition?: CreateMicrosoftADRequestEdition | null;
		Alias?: string | null;
		AccessUrl?: string | null;
		Description?: string | null;
		DnsIpAddrs?: Array<string> | null;
		Stage?: DirectoryDescriptionStage | null;
		ShareStatus?: SharedDirectoryShareStatus | null;
		ShareMethod?: SharedDirectoryShareMethod | null;
		ShareNotes?: string | null;
		LaunchTime?: Date | null;
		StageLastUpdatedDateTime?: Date | null;
		Type?: DirectoryDescriptionType | null;

		/** Contains information about the directory. */
		VpcSettings?: DirectoryVpcSettingsDescription | null;

		/** Contains information about an AD Connector directory. */
		ConnectSettings?: DirectoryConnectSettingsDescription | null;

		/** Contains information about a Remote Authentication Dial In User Service (RADIUS) server. */
		RadiusSettings?: RadiusSettings | null;
		RadiusStatus?: DirectoryDescriptionRadiusStatus | null;
		StageReason?: string | null;
		SsoEnabled?: boolean | null;
		DesiredNumberOfDomainControllers?: number | null;

		/** Describes the directory owner account details that have been shared to the directory consumer account. */
		OwnerDirectoryDescription?: OwnerDirectoryDescription | null;
	}

	export enum DirectoryDescriptionStage { Requested = 0, Creating = 1, Created = 2, Active = 3, Inoperable = 4, Impaired = 5, Restoring = 6, RestoreFailed = 7, Deleting = 8, Deleted = 9, Failed = 10 }

	export enum DirectoryDescriptionType { SimpleAD = 0, ADConnector = 1, MicrosoftAD = 2, SharedMicrosoftAD = 3 }


	/** Contains information about the directory. */
	export interface DirectoryVpcSettingsDescription {
		VpcId?: string | null;
		SubnetIds?: Array<string> | null;
		SecurityGroupId?: string | null;
		AvailabilityZones?: Array<string> | null;
	}


	/** Contains information about an AD Connector directory. */
	export interface DirectoryConnectSettingsDescription {
		VpcId?: string | null;
		SubnetIds?: Array<string> | null;
		CustomerUserName?: string | null;
		SecurityGroupId?: string | null;
		AvailabilityZones?: Array<string> | null;
		ConnectIps?: Array<string> | null;
	}


	/** Contains information about a Remote Authentication Dial In User Service (RADIUS) server. */
	export interface RadiusSettings {
		RadiusServers?: Array<string> | null;
		RadiusPort?: number | null;
		RadiusTimeout?: number | null;
		RadiusRetries?: number | null;
		SharedSecret?: string | null;
		AuthenticationProtocol?: RadiusSettingsAuthenticationProtocol | null;
		DisplayLabel?: string | null;
		UseSameUsername?: boolean | null;
	}

	export enum RadiusSettingsAuthenticationProtocol { PAP = 0, CHAP = 1, MS_CHAPv1 = 2, MS_CHAPv2 = 3 }

	export enum DirectoryDescriptionRadiusStatus { Creating = 0, Completed = 1, Failed = 2 }


	/** Describes the directory owner account details that have been shared to the directory consumer account. */
	export interface OwnerDirectoryDescription {
		DirectoryId?: string | null;
		AccountId?: string | null;
		DnsIpAddrs?: Array<string> | null;

		/** Contains information about the directory. */
		VpcSettings?: DirectoryVpcSettingsDescription | null;

		/** Contains information about a Remote Authentication Dial In User Service (RADIUS) server. */
		RadiusSettings?: RadiusSettings | null;
		RadiusStatus?: DirectoryDescriptionRadiusStatus | null;
	}


	/** Contains the inputs for the <a>DescribeDirectories</a> operation. */
	export interface DescribeDirectoriesRequest {

		/** A list of directory identifiers. */
		DirectoryIds?: Array<string> | null;
		NextToken?: string | null;
		Limit?: number | null;
	}

	export interface InvalidNextTokenException {
	}

	export interface DescribeDomainControllersResult {
		DomainControllers?: Array<DomainController> | null;
		NextToken?: string | null;
	}


	/** Contains information about the domain controllers for a specified directory. */
	export interface DomainController {
		DirectoryId?: string | null;
		DomainControllerId?: string | null;
		DnsIpAddr?: string | null;
		VpcId?: string | null;
		SubnetId?: string | null;
		AvailabilityZone?: string | null;
		Status?: DomainControllerStatus | null;
		StatusReason?: string | null;
		LaunchTime?: Date | null;
		StatusLastUpdatedDateTime?: Date | null;
	}

	export enum DomainControllerStatus { Creating = 0, Active = 1, Impaired = 2, Restoring = 3, Deleting = 4, Deleted = 5, Failed = 6 }

	export interface DescribeDomainControllersRequest {
		DirectoryId: string;
		DomainControllerIds?: Array<string> | null;
		NextToken?: string | null;
		Limit?: number | null;
	}


	/** The result of a DescribeEventTopic request. */
	export interface DescribeEventTopicsResult {
		EventTopics?: Array<EventTopic> | null;
	}


	/** Information about SNS topic and AWS Directory Service directory associations. */
	export interface EventTopic {
		DirectoryId?: string | null;
		TopicName?: string | null;
		TopicArn?: string | null;
		CreatedDateTime?: Date | null;
		Status?: EventTopicStatus | null;
	}

	export enum EventTopicStatus { Registered = 0, Topic_not_found = 1, Failed = 2, Deleted = 3 }


	/** Describes event topics. */
	export interface DescribeEventTopicsRequest {
		DirectoryId?: string | null;
		TopicNames?: Array<string> | null;
	}

	export interface DescribeLDAPSSettingsResult {
		LDAPSSettingsInfo?: Array<LDAPSSettingInfo> | null;
		NextToken?: string | null;
	}


	/** Contains general information about the LDAPS settings. */
	export interface LDAPSSettingInfo {
		LDAPSStatus?: LDAPSSettingInfoLDAPSStatus | null;
		LDAPSStatusReason?: string | null;
		LastUpdatedDateTime?: Date | null;
	}

	export enum LDAPSSettingInfoLDAPSStatus { Enabling = 0, Enabled = 1, EnableFailed = 2, Disabled = 3 }

	export interface DescribeLDAPSSettingsRequest {
		DirectoryId: string;
		Type?: DescribeLDAPSSettingsRequestType | null;
		NextToken?: string | null;
		Limit?: number | null;
	}

	export enum DescribeLDAPSSettingsRequestType { Client = 0 }

	export interface DescribeSharedDirectoriesResult {
		SharedDirectories?: Array<SharedDirectory> | null;
		NextToken?: string | null;
	}

	export interface DescribeSharedDirectoriesRequest {
		OwnerDirectoryId: string;

		/** A list of directory identifiers. */
		SharedDirectoryIds?: Array<string> | null;
		NextToken?: string | null;
		Limit?: number | null;
	}


	/** Contains the results of the <a>DescribeSnapshots</a> operation. */
	export interface DescribeSnapshotsResult {

		/** A list of descriptions of directory snapshots. */
		Snapshots?: Array<Snapshot> | null;
		NextToken?: string | null;
	}


	/** Describes a directory snapshot. */
	export interface Snapshot {
		DirectoryId?: string | null;
		SnapshotId?: string | null;
		Type?: SnapshotType | null;
		Name?: string | null;
		Status?: DirectoryDescriptionRadiusStatus | null;
		StartTime?: Date | null;
	}

	export enum SnapshotType { Auto = 0, Manual = 1 }


	/** Contains the inputs for the <a>DescribeSnapshots</a> operation. */
	export interface DescribeSnapshotsRequest {
		DirectoryId?: string | null;

		/** A list of directory snapshot identifiers. */
		SnapshotIds?: Array<string> | null;
		NextToken?: string | null;
		Limit?: number | null;
	}


	/** The result of a DescribeTrust request. */
	export interface DescribeTrustsResult {
		Trusts?: Array<Trust> | null;
		NextToken?: string | null;
	}


	/** Describes a trust relationship between an AWS Managed Microsoft AD directory and an external domain. */
	export interface Trust {
		DirectoryId?: string | null;
		TrustId?: string | null;
		RemoteDomainName?: string | null;
		TrustType?: CreateTrustRequestTrustType | null;
		TrustDirection?: TrustTrustDirection | null;
		TrustState?: TrustTrustState | null;
		CreatedDateTime?: Date | null;
		LastUpdatedDateTime?: Date | null;
		StateLastUpdatedDateTime?: Date | null;
		TrustStateReason?: string | null;
		SelectiveAuth?: CreateTrustRequestSelectiveAuth | null;
	}

	export enum TrustTrustDirection { One_Way_Outgoing = 0, One_Way_Incoming = 1, Two_Way = 2 }

	export enum TrustTrustState { Creating = 0, Created = 1, Verifying = 2, VerifyFailed = 3, Verified = 4, Updating = 5, UpdateFailed = 6, Updated = 7, Deleting = 8, Deleted = 9, Failed = 10 }


	/** Describes the trust relationships for a particular AWS Managed Microsoft AD directory. If no input parameters are are provided, such as directory ID or trust ID, this request describes all the trust relationships. */
	export interface DescribeTrustsRequest {
		DirectoryId?: string | null;
		TrustIds?: Array<string> | null;
		NextToken?: string | null;
		Limit?: number | null;
	}

	export interface DisableLDAPSResult {
	}

	export interface DisableLDAPSRequest {
		DirectoryId: string;
		Type: DescribeLDAPSSettingsRequestType;
	}

	export interface InvalidLDAPSStatusException {
	}


	/** Contains the results of the <a>DisableRadius</a> operation. */
	export interface DisableRadiusResult {
	}


	/** Contains the inputs for the <a>DisableRadius</a> operation. */
	export interface DisableRadiusRequest {
		DirectoryId: string;
	}


	/** Contains the results of the <a>DisableSso</a> operation. */
	export interface DisableSsoResult {
	}


	/** Contains the inputs for the <a>DisableSso</a> operation. */
	export interface DisableSsoRequest {
		DirectoryId: string;
		UserName?: string | null;
		Password?: string | null;
	}

	export interface EnableLDAPSResult {
	}

	export interface EnableLDAPSRequest {
		DirectoryId: string;
		Type: DescribeLDAPSSettingsRequestType;
	}

	export interface NoAvailableCertificateException {
	}


	/** Contains the results of the <a>EnableRadius</a> operation. */
	export interface EnableRadiusResult {
	}


	/** Contains the inputs for the <a>EnableRadius</a> operation. */
	export interface EnableRadiusRequest {
		DirectoryId: string;

		/**
		 * Contains information about a Remote Authentication Dial In User Service (RADIUS) server.
		 * Required
		 */
		RadiusSettings: RadiusSettings;
	}


	/** Contains the results of the <a>EnableSso</a> operation. */
	export interface EnableSsoResult {
	}


	/** Contains the inputs for the <a>EnableSso</a> operation. */
	export interface EnableSsoRequest {
		DirectoryId: string;
		UserName?: string | null;
		Password?: string | null;
	}


	/** Contains the results of the <a>GetDirectoryLimits</a> operation. */
	export interface GetDirectoryLimitsResult {

		/** Contains directory limit information for a Region. */
		DirectoryLimits?: DirectoryLimits | null;
	}


	/** Contains directory limit information for a Region. */
	export interface DirectoryLimits {
		CloudOnlyDirectoriesLimit?: number | null;
		CloudOnlyDirectoriesCurrentCount?: number | null;
		CloudOnlyDirectoriesLimitReached?: boolean | null;
		CloudOnlyMicrosoftADLimit?: number | null;
		CloudOnlyMicrosoftADCurrentCount?: number | null;
		CloudOnlyMicrosoftADLimitReached?: boolean | null;
		ConnectedDirectoriesLimit?: number | null;
		ConnectedDirectoriesCurrentCount?: number | null;
		ConnectedDirectoriesLimitReached?: boolean | null;
	}


	/** Contains the inputs for the <a>GetDirectoryLimits</a> operation. */
	export interface GetDirectoryLimitsRequest {
	}


	/** Contains the results of the <a>GetSnapshotLimits</a> operation. */
	export interface GetSnapshotLimitsResult {

		/** Contains manual snapshot limit information for a directory. */
		SnapshotLimits?: SnapshotLimits | null;
	}


	/** Contains manual snapshot limit information for a directory. */
	export interface SnapshotLimits {
		ManualSnapshotsLimit?: number | null;
		ManualSnapshotsCurrentCount?: number | null;
		ManualSnapshotsLimitReached?: boolean | null;
	}


	/** Contains the inputs for the <a>GetSnapshotLimits</a> operation. */
	export interface GetSnapshotLimitsRequest {
		DirectoryId: string;
	}

	export interface ListCertificatesResult {
		NextToken?: string | null;
		CertificatesInfo?: Array<CertificateInfo> | null;
	}


	/** Contains general information about a certificate. */
	export interface CertificateInfo {
		CertificateId?: string | null;
		CommonName?: string | null;
		State?: CertificateState | null;
		ExpiryDateTime?: Date | null;
	}

	export interface ListCertificatesRequest {
		DirectoryId: string;
		NextToken?: string | null;
		Limit?: number | null;
	}

	export interface ListIpRoutesResult {
		IpRoutesInfo?: Array<IpRouteInfo> | null;
		NextToken?: string | null;
	}


	/** Information about one or more IP address blocks. */
	export interface IpRouteInfo {
		DirectoryId?: string | null;
		CidrIp?: string | null;
		IpRouteStatusMsg?: IpRouteInfoIpRouteStatusMsg | null;
		AddedDateTime?: Date | null;
		IpRouteStatusReason?: string | null;
		Description?: string | null;
	}

	export enum IpRouteInfoIpRouteStatusMsg { Adding = 0, Added = 1, Removing = 2, Removed = 3, AddFailed = 4, RemoveFailed = 5 }

	export interface ListIpRoutesRequest {
		DirectoryId: string;
		NextToken?: string | null;
		Limit?: number | null;
	}

	export interface ListLogSubscriptionsResult {
		LogSubscriptions?: Array<LogSubscription> | null;
		NextToken?: string | null;
	}


	/** Represents a log subscription, which tracks real-time data from a chosen log group to a specified destination. */
	export interface LogSubscription {
		DirectoryId?: string | null;
		LogGroupName?: string | null;
		SubscriptionCreatedDateTime?: Date | null;
	}

	export interface ListLogSubscriptionsRequest {
		DirectoryId?: string | null;
		NextToken?: string | null;
		Limit?: number | null;
	}

	export interface ListSchemaExtensionsResult {
		SchemaExtensionsInfo?: Array<SchemaExtensionInfo> | null;
		NextToken?: string | null;
	}


	/** Information about a schema extension. */
	export interface SchemaExtensionInfo {
		DirectoryId?: string | null;
		SchemaExtensionId?: string | null;
		Description?: string | null;
		SchemaExtensionStatus?: SchemaExtensionInfoSchemaExtensionStatus | null;
		SchemaExtensionStatusReason?: string | null;
		StartDateTime?: Date | null;
		EndDateTime?: Date | null;
	}

	export enum SchemaExtensionInfoSchemaExtensionStatus { Initializing = 0, CreatingSnapshot = 1, UpdatingSchema = 2, Replicating = 3, CancelInProgress = 4, RollbackInProgress = 5, Cancelled = 6, Failed = 7, Completed = 8 }

	export interface ListSchemaExtensionsRequest {
		DirectoryId: string;
		NextToken?: string | null;
		Limit?: number | null;
	}

	export interface ListTagsForResourceResult {
		Tags?: Array<Tag> | null;
		NextToken?: string | null;
	}

	export interface ListTagsForResourceRequest {
		ResourceId: string;
		NextToken?: string | null;
		Limit?: number | null;
	}

	export interface RegisterCertificateResult {
		CertificateId?: string | null;
	}

	export interface RegisterCertificateRequest {
		DirectoryId: string;
		CertificateData: string;
	}

	export interface InvalidCertificateException {
	}

	export interface CertificateLimitExceededException {
	}

	export interface CertificateAlreadyExistsException {
	}


	/** The result of a RegisterEventTopic request. */
	export interface RegisterEventTopicResult {
	}


	/** Registers a new event topic. */
	export interface RegisterEventTopicRequest {
		DirectoryId: string;
		TopicName: string;
	}

	export interface RejectSharedDirectoryResult {
		SharedDirectoryId?: string | null;
	}

	export interface RejectSharedDirectoryRequest {
		SharedDirectoryId: string;
	}

	export interface RemoveIpRoutesResult {
	}

	export interface RemoveIpRoutesRequest {
		DirectoryId: string;
		CidrIps: Array<string>;
	}

	export interface RemoveTagsFromResourceResult {
	}

	export interface RemoveTagsFromResourceRequest {
		ResourceId: string;
		TagKeys: Array<string>;
	}

	export interface ResetUserPasswordResult {
	}

	export interface ResetUserPasswordRequest {
		DirectoryId: string;
		UserName: string;
		NewPassword: string;
	}

	export interface UserDoesNotExistException {
	}

	export interface InvalidPasswordException {
	}


	/** Contains the results of the <a>RestoreFromSnapshot</a> operation. */
	export interface RestoreFromSnapshotResult {
	}


	/** An object representing the inputs for the <a>RestoreFromSnapshot</a> operation. */
	export interface RestoreFromSnapshotRequest {
		SnapshotId: string;
	}

	export interface ShareDirectoryResult {
		SharedDirectoryId?: string | null;
	}

	export interface ShareDirectoryRequest {
		DirectoryId: string;
		ShareNotes?: string | null;

		/**
		 * Identifier that contains details about the directory consumer account.
		 * Required
		 */
		ShareTarget: ShareTarget;
		ShareMethod: SharedDirectoryShareMethod;
	}


	/** Identifier that contains details about the directory consumer account. */
	export interface ShareTarget {
		Id: string;
		Type: ShareTargetType;
	}

	export enum ShareTargetType { ACCOUNT = 0 }

	export interface InvalidTargetException {
	}

	export interface ShareLimitExceededException {
	}

	export interface OrganizationsException {
	}

	export interface AccessDeniedException {
	}

	export interface StartSchemaExtensionResult {
		SchemaExtensionId?: string | null;
	}

	export interface StartSchemaExtensionRequest {
		DirectoryId: string;
		CreateSnapshotBeforeSchemaExtension: boolean;
		LdifContent: string;
		Description: string;
	}

	export interface UnshareDirectoryResult {
		SharedDirectoryId?: string | null;
	}

	export interface UnshareDirectoryRequest {
		DirectoryId: string;

		/**
		 * Identifier that contains details about the directory consumer account with whom the directory is being unshared.
		 * Required
		 */
		UnshareTarget: UnshareTarget;
	}


	/** Identifier that contains details about the directory consumer account with whom the directory is being unshared. */
	export interface UnshareTarget {
		Id: string;
		Type: ShareTargetType;
	}

	export interface DirectoryNotSharedException {
	}


	/** The result of an UpdateConditionalForwarder request. */
	export interface UpdateConditionalForwarderResult {
	}


	/** Updates a conditional forwarder. */
	export interface UpdateConditionalForwarderRequest {
		DirectoryId: string;
		RemoteDomainName: string;
		DnsIpAddrs: Array<string>;
	}

	export interface UpdateNumberOfDomainControllersResult {
	}

	export interface UpdateNumberOfDomainControllersRequest {
		DirectoryId: string;
		DesiredNumber: number;
	}

	export interface DomainControllerLimitExceededException {
	}


	/** Contains the results of the <a>UpdateRadius</a> operation. */
	export interface UpdateRadiusResult {
	}


	/** Contains the inputs for the <a>UpdateRadius</a> operation. */
	export interface UpdateRadiusRequest {
		DirectoryId: string;

		/**
		 * Contains information about a Remote Authentication Dial In User Service (RADIUS) server.
		 * Required
		 */
		RadiusSettings: RadiusSettings;
	}

	export interface UpdateTrustResult {

		/**
		 * The AWS request identifier.
		 * Pattern: ^([A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12})$
		 */
		RequestId?: string | null;
		TrustId?: string | null;
	}

	export interface UpdateTrustRequest {
		TrustId: string;
		SelectiveAuth?: CreateTrustRequestSelectiveAuth | null;
	}


	/** Result of a VerifyTrust request. */
	export interface VerifyTrustResult {
		TrustId?: string | null;
	}


	/** Initiates the verification of an existing trust relationship between an AWS Managed Microsoft AD directory and an external domain. */
	export interface VerifyTrustRequest {
		TrustId: string;
	}

	export enum ReplicationScope { Domain = 0 }

	export enum DirectorySize { Small = 0, Large = 1 }

	export enum DirectoryEdition { Enterprise = 0, Standard = 1 }

	export enum TrustDirection { One_Way_Outgoing = 0, One_Way_Incoming = 1, Two_Way = 2 }

	export enum TrustType { Forest = 0, External = 1 }

	export enum SelectiveAuth { Enabled = 0, Disabled = 1 }

	export enum LDAPSType { Client = 0 }

	export enum DirectoryStage { Requested = 0, Creating = 1, Created = 2, Active = 3, Inoperable = 4, Impaired = 5, Restoring = 6, RestoreFailed = 7, Deleting = 8, Deleted = 9, Failed = 10 }

	export enum ShareStatus { Shared = 0, PendingAcceptance = 1, Rejected = 2, Rejecting = 3, RejectFailed = 4, Sharing = 5, ShareFailed = 6, Deleted = 7, Deleting = 8 }

	export enum ShareMethod { ORGANIZATIONS = 0, HANDSHAKE = 1 }

	export enum DirectoryType { SimpleAD = 0, ADConnector = 1, MicrosoftAD = 2, SharedMicrosoftAD = 3 }

	export enum RadiusStatus { Creating = 0, Completed = 1, Failed = 2 }

	export enum TopicStatus { Registered = 0, Topic_not_found = 1, Failed = 2, Deleted = 3 }

	export enum IpRouteStatusMsg { Adding = 0, Added = 1, Removing = 2, Removed = 3, AddFailed = 4, RemoveFailed = 5 }

	export enum LDAPSStatus { Enabling = 0, Enabled = 1, EnableFailed = 2, Disabled = 3 }

	export enum RadiusAuthenticationProtocol { PAP = 0, CHAP = 1, MS_CHAPv1 = 2, MS_CHAPv2 = 3 }

	export enum SchemaExtensionStatus { Initializing = 0, CreatingSnapshot = 1, UpdatingSchema = 2, Replicating = 3, CancelInProgress = 4, RollbackInProgress = 5, Cancelled = 6, Failed = 7, Completed = 8 }

	export enum TargetType { ACCOUNT = 0 }

	export enum SnapshotStatus { Creating = 0, Completed = 1, Failed = 2 }

	export enum TrustState { Creating = 0, Created = 1, Verifying = 2, VerifyFailed = 3, Verified = 4, Updating = 5, UpdateFailed = 6, Updated = 7, Deleting = 8, Deleted = 9, Failed = 10 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Accepts a directory sharing request that was sent from the directory owner account.
		 * Post #X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory
		 * @return {AcceptSharedDirectoryResult} Success
		 */
		AcceptSharedDirectory(requestBody: AcceptSharedDirectoryRequest): Observable<AcceptSharedDirectoryResult> {
			return this.http.post<AcceptSharedDirectoryResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>If the DNS server for your on-premises domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. <i>AddIpRoutes</i> adds this address block. You can also use <i>AddIpRoutes</i> to facilitate routing traffic that uses public IP ranges from your Microsoft AD on AWS to a peer VPC. </p> <p>Before you call <i>AddIpRoutes</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>AddIpRoutes</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.AddIpRoutes
		 * @return {AddIpRoutesResult} Success
		 */
		AddIpRoutes(requestBody: AddIpRoutesRequest): Observable<AddIpRoutesResult> {
			return this.http.post<AddIpRoutesResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.AddIpRoutes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds or overwrites one or more tags for the specified directory. Each directory can have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be unique to each resource.
		 * Post #X-Amz-Target=DirectoryService_20150416.AddTagsToResource
		 * @return {AddTagsToResourceResult} Success
		 */
		AddTagsToResource(requestBody: AddTagsToResourceRequest): Observable<AddTagsToResourceResult> {
			return this.http.post<AddTagsToResourceResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.AddTagsToResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; <code>Initializing</code>, <code>CreatingSnapshot</code>, and <code>UpdatingSchema</code>.
		 * Post #X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension
		 * @return {CancelSchemaExtensionResult} Success
		 */
		CancelSchemaExtension(requestBody: CancelSchemaExtensionRequest): Observable<CancelSchemaExtensionResult> {
			return this.http.post<CancelSchemaExtensionResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an AD Connector to connect to an on-premises directory.</p> <p>Before you call <code>ConnectDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>ConnectDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.ConnectDirectory
		 * @return {ConnectDirectoryResult} Success
		 */
		ConnectDirectory(requestBody: ConnectDirectoryRequest): Observable<ConnectDirectoryResult> {
			return this.http.post<ConnectDirectoryResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.ConnectDirectory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as <code>http://&lt;alias&gt;.awsapps.com</code>.</p> <important> <p>After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.</p> </important>
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateAlias
		 * @return {CreateAliasResult} Success
		 */
		CreateAlias(requestBody: CreateAliasRequest): Observable<CreateAliasResult> {
			return this.http.post<CreateAliasResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a computer account in the specified directory, and joins the computer to the directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateComputer
		 * @return {CreateComputerResult} Success
		 */
		CreateComputer(requestBody: CreateComputerRequest): Observable<CreateComputerResult> {
			return this.http.post<CreateComputerResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateComputer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a conditional forwarder associated with your AWS directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder
		 * @return {CreateConditionalForwarderResult} Success
		 */
		CreateConditionalForwarder(requestBody: CreateConditionalForwarderRequest): Observable<CreateConditionalForwarderResult> {
			return this.http.post<CreateConditionalForwarderResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a Simple AD directory. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_simple_ad.html">Simple Active Directory</a> in the <i>AWS Directory Service Admin Guide</i>.</p> <p>Before you call <code>CreateDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>CreateDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateDirectory
		 * @return {CreateDirectoryResult} Success
		 */
		CreateDirectory(requestBody: CreateDirectoryRequest): Observable<CreateDirectoryResult> {
			return this.http.post<CreateDirectoryResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateDirectory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a subscription to forward real-time Directory Service domain controller security logs to the specified Amazon CloudWatch log group in your AWS account.
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateLogSubscription
		 * @return {CreateLogSubscriptionResult} Success
		 */
		CreateLogSubscription(requestBody: CreateLogSubscriptionRequest): Observable<CreateLogSubscriptionResult> {
			return this.http.post<CreateLogSubscriptionResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a Microsoft AD directory in the AWS Cloud. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">AWS Managed Microsoft AD</a> in the <i>AWS Directory Service Admin Guide</i>.</p> <p>Before you call <i>CreateMicrosoftAD</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>CreateMicrosoftAD</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD
		 * @return {CreateMicrosoftADResult} Success
		 */
		CreateMicrosoftAD(requestBody: CreateMicrosoftADRequest): Observable<CreateMicrosoftADResult> {
			return this.http.post<CreateMicrosoftADResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a snapshot of a Simple AD or Microsoft AD directory in the AWS cloud.</p> <note> <p>You cannot take snapshots of AD Connector directories.</p> </note>
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateSnapshot
		 * @return {CreateSnapshotResult} Success
		 */
		CreateSnapshot(requestBody: CreateSnapshotRequest): Observable<CreateSnapshotResult> {
			return this.http.post<CreateSnapshotResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>AWS Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your AWS Managed Microsoft AD directory, and your existing on-premises Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the AWS side of a trust relationship between an AWS Managed Microsoft AD directory and an external domain. You can create either a forest trust or an external trust.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateTrust
		 * @return {CreateTrustResult} Success
		 */
		CreateTrust(requestBody: CreateTrustRequest): Observable<CreateTrustResult> {
			return this.http.post<CreateTrustResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateTrust', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a conditional forwarder that has been set up for your AWS directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder
		 * @return {DeleteConditionalForwarderResult} Success
		 */
		DeleteConditionalForwarder(requestBody: DeleteConditionalForwarderRequest): Observable<DeleteConditionalForwarderResult> {
			return this.http.post<DeleteConditionalForwarderResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an AWS Directory Service directory.</p> <p>Before you call <code>DeleteDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>DeleteDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.DeleteDirectory
		 * @return {DeleteDirectoryResult} Success
		 */
		DeleteDirectory(requestBody: DeleteDirectoryRequest): Observable<DeleteDirectoryResult> {
			return this.http.post<DeleteDirectoryResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DeleteDirectory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified log subscription.
		 * Post #X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription
		 * @return {DeleteLogSubscriptionResult} Success
		 */
		DeleteLogSubscription(requestBody: DeleteLogSubscriptionRequest): Observable<DeleteLogSubscriptionResult> {
			return this.http.post<DeleteLogSubscriptionResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a directory snapshot.
		 * Post #X-Amz-Target=DirectoryService_20150416.DeleteSnapshot
		 * @return {DeleteSnapshotResult} Success
		 */
		DeleteSnapshot(requestBody: DeleteSnapshotRequest): Observable<DeleteSnapshotResult> {
			return this.http.post<DeleteSnapshotResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DeleteSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing trust relationship between your AWS Managed Microsoft AD directory and an external domain.
		 * Post #X-Amz-Target=DirectoryService_20150416.DeleteTrust
		 * @return {DeleteTrustResult} Success
		 */
		DeleteTrust(requestBody: DeleteTrustRequest): Observable<DeleteTrustResult> {
			return this.http.post<DeleteTrustResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DeleteTrust', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes from the system the certificate that was registered for a secured LDAP connection.
		 * Post #X-Amz-Target=DirectoryService_20150416.DeregisterCertificate
		 * @return {DeregisterCertificateResult} Success
		 */
		DeregisterCertificate(requestBody: DeregisterCertificateRequest): Observable<DeregisterCertificateResult> {
			return this.http.post<DeregisterCertificateResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified directory as a publisher to the specified SNS topic.
		 * Post #X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic
		 * @return {DeregisterEventTopicResult} Success
		 */
		DeregisterEventTopic(requestBody: DeregisterEventTopicRequest): Observable<DeregisterEventTopicResult> {
			return this.http.post<DeregisterEventTopicResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Displays information about the certificate registered for a secured LDAP connection.
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeCertificate
		 * @return {DescribeCertificateResult} Success
		 */
		DescribeCertificate(requestBody: DescribeCertificateRequest): Observable<DescribeCertificateResult> {
			return this.http.post<DescribeCertificateResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Obtains information about the conditional forwarders for this account.</p> <p>If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders
		 * @return {DescribeConditionalForwardersResult} Success
		 */
		DescribeConditionalForwarders(requestBody: DescribeConditionalForwardersRequest): Observable<DescribeConditionalForwardersResult> {
			return this.http.post<DescribeConditionalForwardersResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Obtains information about the directories that belong to this account.</p> <p>You can retrieve information about specific directories by passing the directory identifiers in the <code>DirectoryIds</code> parameter. Otherwise, all directories that belong to the current account are returned.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> request and response parameters. If more results are available, the <code>DescribeDirectoriesResult.NextToken</code> member contains a token that you pass in the next call to <a>DescribeDirectories</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <code>Limit</code> parameter.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeDirectories
		 * @return {DescribeDirectoriesResult} Success
		 */
		DescribeDirectories(requestBody: DescribeDirectoriesRequest): Observable<DescribeDirectoriesResult> {
			return this.http.post<DescribeDirectoriesResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeDirectories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides information about any domain controllers in your directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeDomainControllersResult} Success
		 */
		DescribeDomainControllers(Limit: string, NextToken: string, requestBody: DescribeDomainControllersRequest): Observable<DescribeDomainControllersResult> {
			return this.http.post<DescribeDomainControllersResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Obtains information about which SNS topics receive status messages from the specified directory.</p> <p>If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeEventTopics
		 * @return {DescribeEventTopicsResult} Success
		 */
		DescribeEventTopics(requestBody: DescribeEventTopicsRequest): Observable<DescribeEventTopicsResult> {
			return this.http.post<DescribeEventTopicsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the status of LDAP security for the specified directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings
		 * @return {DescribeLDAPSSettingsResult} Success
		 */
		DescribeLDAPSSettings(requestBody: DescribeLDAPSSettingsRequest): Observable<DescribeLDAPSSettingsResult> {
			return this.http.post<DescribeLDAPSSettingsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the shared directories in your account.
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories
		 * @return {DescribeSharedDirectoriesResult} Success
		 */
		DescribeSharedDirectories(requestBody: DescribeSharedDirectoriesRequest): Observable<DescribeSharedDirectoriesResult> {
			return this.http.post<DescribeSharedDirectoriesResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Obtains information about the directory snapshots that belong to this account.</p> <p>This operation supports pagination with the use of the <i>NextToken</i> request and response parameters. If more results are available, the <i>DescribeSnapshots.NextToken</i> member contains a token that you pass in the next call to <a>DescribeSnapshots</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <i>Limit</i> parameter.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeSnapshots
		 * @return {DescribeSnapshotsResult} Success
		 */
		DescribeSnapshots(requestBody: DescribeSnapshotsRequest): Observable<DescribeSnapshotsResult> {
			return this.http.post<DescribeSnapshotsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Obtains information about the trust relationships for this account.</p> <p>If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeTrusts
		 * @return {DescribeTrustsResult} Success
		 */
		DescribeTrusts(requestBody: DescribeTrustsRequest): Observable<DescribeTrustsResult> {
			return this.http.post<DescribeTrustsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeTrusts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deactivates LDAP secure calls for the specified directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.DisableLDAPS
		 * @return {DisableLDAPSResult} Success
		 */
		DisableLDAPS(requestBody: DisableLDAPSRequest): Observable<DisableLDAPSResult> {
			return this.http.post<DisableLDAPSResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DisableLDAPS', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.DisableRadius
		 * @return {DisableRadiusResult} Success
		 */
		DisableRadius(requestBody: DisableRadiusRequest): Observable<DisableRadiusResult> {
			return this.http.post<DisableRadiusResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DisableRadius', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables single-sign on for a directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.DisableSso
		 * @return {DisableSsoResult} Success
		 */
		DisableSso(requestBody: DisableSsoRequest): Observable<DisableSsoResult> {
			return this.http.post<DisableSsoResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DisableSso', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Activates the switch for the specific directory to always use LDAP secure calls.
		 * Post #X-Amz-Target=DirectoryService_20150416.EnableLDAPS
		 * @return {EnableLDAPSResult} Success
		 */
		EnableLDAPS(requestBody: EnableLDAPSRequest): Observable<EnableLDAPSResult> {
			return this.http.post<EnableLDAPSResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.EnableLDAPS', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.EnableRadius
		 * @return {EnableRadiusResult} Success
		 */
		EnableRadius(requestBody: EnableRadiusRequest): Observable<EnableRadiusResult> {
			return this.http.post<EnableRadiusResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.EnableRadius', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables single sign-on for a directory. Single sign-on allows users in your directory to access certain AWS services from a computer joined to the directory without having to enter their credentials separately.
		 * Post #X-Amz-Target=DirectoryService_20150416.EnableSso
		 * @return {EnableSsoResult} Success
		 */
		EnableSso(requestBody: EnableSsoRequest): Observable<EnableSsoResult> {
			return this.http.post<EnableSsoResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.EnableSso', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Obtains directory limit information for the current Region.
		 * Post #X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits
		 * @return {GetDirectoryLimitsResult} Success
		 */
		GetDirectoryLimits(requestBody: GetDirectoryLimitsRequest): Observable<GetDirectoryLimitsResult> {
			return this.http.post<GetDirectoryLimitsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Obtains the manual snapshot limits for a directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits
		 * @return {GetSnapshotLimitsResult} Success
		 */
		GetSnapshotLimits(requestBody: GetSnapshotLimitsRequest): Observable<GetSnapshotLimitsResult> {
			return this.http.post<GetSnapshotLimitsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For the specified directory, lists all the certificates registered for a secured LDAP connection.
		 * Post #X-Amz-Target=DirectoryService_20150416.ListCertificates
		 * @return {ListCertificatesResult} Success
		 */
		ListCertificates(requestBody: ListCertificatesRequest): Observable<ListCertificatesResult> {
			return this.http.post<ListCertificatesResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.ListCertificates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the address blocks that you have added to a directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.ListIpRoutes
		 * @return {ListIpRoutesResult} Success
		 */
		ListIpRoutes(requestBody: ListIpRoutesRequest): Observable<ListIpRoutesResult> {
			return this.http.post<ListIpRoutesResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.ListIpRoutes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the active log subscriptions for the AWS account.
		 * Post #X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions
		 * @return {ListLogSubscriptionsResult} Success
		 */
		ListLogSubscriptions(requestBody: ListLogSubscriptionsRequest): Observable<ListLogSubscriptionsResult> {
			return this.http.post<ListLogSubscriptionsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all schema extensions applied to a Microsoft AD Directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions
		 * @return {ListSchemaExtensionsResult} Success
		 */
		ListSchemaExtensions(requestBody: ListSchemaExtensionsRequest): Observable<ListSchemaExtensionsResult> {
			return this.http.post<ListSchemaExtensionsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tags on a directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.ListTagsForResource
		 * @return {ListTagsForResourceResult} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResult> {
			return this.http.post<ListTagsForResourceResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers a certificate for secured LDAP connection.
		 * Post #X-Amz-Target=DirectoryService_20150416.RegisterCertificate
		 * @return {RegisterCertificateResult} Success
		 */
		RegisterCertificate(requestBody: RegisterCertificateRequest): Observable<RegisterCertificateResult> {
			return this.http.post<RegisterCertificateResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.RegisterCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a directory with an SNS topic. This establishes the directory as a publisher to the specified SNS topic. You can then receive email or text (SMS) messages when the status of your directory changes. You get notified if your directory goes from an Active status to an Impaired or Inoperable status. You also receive a notification when the directory returns to an Active status.
		 * Post #X-Amz-Target=DirectoryService_20150416.RegisterEventTopic
		 * @return {RegisterEventTopicResult} Success
		 */
		RegisterEventTopic(requestBody: RegisterEventTopicRequest): Observable<RegisterEventTopicResult> {
			return this.http.post<RegisterEventTopicResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.RegisterEventTopic', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Rejects a directory sharing request that was sent from the directory owner account.
		 * Post #X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory
		 * @return {RejectSharedDirectoryResult} Success
		 */
		RejectSharedDirectory(requestBody: RejectSharedDirectoryRequest): Observable<RejectSharedDirectoryResult> {
			return this.http.post<RejectSharedDirectoryResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes IP address blocks from a directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes
		 * @return {RemoveIpRoutesResult} Success
		 */
		RemoveIpRoutes(requestBody: RemoveIpRoutesRequest): Observable<RemoveIpRoutesResult> {
			return this.http.post<RemoveIpRoutesResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from a directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource
		 * @return {RemoveTagsFromResourceResult} Success
		 */
		RemoveTagsFromResource(requestBody: RemoveTagsFromResourceRequest): Observable<RemoveTagsFromResourceResult> {
			return this.http.post<RemoveTagsFromResourceResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Resets the password for any user in your AWS Managed Microsoft AD or Simple AD directory.</p> <p>You can reset the password for any user in your directory with the following exceptions:</p> <ul> <li> <p>For Simple AD, you cannot reset the password for any user that is a member of either the <b>Domain Admins</b> or <b>Enterprise Admins</b> group except for the administrator user.</p> </li> <li> <p>For AWS Managed Microsoft AD, you can only reset the password for a user that is in an OU based off of the NetBIOS name that you typed when you created your directory. For example, you cannot reset the password for a user in the <b>AWS Reserved</b> OU. For more information about the OU structure for an AWS Managed Microsoft AD directory, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What Gets Created</a> in the <i>AWS Directory Service Administration Guide</i>.</p> </li> </ul>
		 * Post #X-Amz-Target=DirectoryService_20150416.ResetUserPassword
		 * @return {ResetUserPasswordResult} Success
		 */
		ResetUserPassword(requestBody: ResetUserPasswordRequest): Observable<ResetUserPasswordResult> {
			return this.http.post<ResetUserPasswordResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.ResetUserPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Restores a directory using an existing directory snapshot.</p> <p>When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.</p> <p>This action returns as soon as the restore operation is initiated. You can monitor the progress of the restore operation by calling the <a>DescribeDirectories</a> operation with the directory identifier. When the <b>DirectoryDescription.Stage</b> value changes to <code>Active</code>, the restore operation is complete.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot
		 * @return {RestoreFromSnapshotResult} Success
		 */
		RestoreFromSnapshot(requestBody: RestoreFromSnapshotRequest): Observable<RestoreFromSnapshotResult> {
			return this.http.post<RestoreFromSnapshotResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Shares a specified directory (<code>DirectoryId</code>) in your AWS account (directory owner) with another AWS account (directory consumer). With this operation you can use your directory from any AWS account and from any Amazon VPC within an AWS Region.</p> <p>When you share your AWS Managed Microsoft AD directory, AWS Directory Service creates a shared directory in the directory consumer account. This shared directory contains the metadata to provide access to the directory within the directory owner account. The shared directory is visible in all VPCs in the directory consumer account.</p> <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be shared between AWS accounts inside the same AWS organization (<code>ORGANIZATIONS</code>). It also determines whether you can share the directory with any other AWS account either inside or outside of the organization (<code>HANDSHAKE</code>).</p> <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called, which sends a directory sharing request to the directory consumer. </p>
		 * Post #X-Amz-Target=DirectoryService_20150416.ShareDirectory
		 * @return {ShareDirectoryResult} Success
		 */
		ShareDirectory(requestBody: ShareDirectoryRequest): Observable<ShareDirectoryResult> {
			return this.http.post<ShareDirectoryResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.ShareDirectory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies a schema extension to a Microsoft AD directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.StartSchemaExtension
		 * @return {StartSchemaExtensionResult} Success
		 */
		StartSchemaExtension(requestBody: StartSchemaExtensionRequest): Observable<StartSchemaExtensionResult> {
			return this.http.post<StartSchemaExtensionResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.StartSchemaExtension', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops the directory sharing between the directory owner and consumer accounts.
		 * Post #X-Amz-Target=DirectoryService_20150416.UnshareDirectory
		 * @return {UnshareDirectoryResult} Success
		 */
		UnshareDirectory(requestBody: UnshareDirectoryRequest): Observable<UnshareDirectoryResult> {
			return this.http.post<UnshareDirectoryResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.UnshareDirectory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a conditional forwarder that has been set up for your AWS directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder
		 * @return {UpdateConditionalForwarderResult} Success
		 */
		UpdateConditionalForwarder(requestBody: UpdateConditionalForwarderRequest): Observable<UpdateConditionalForwarderResult> {
			return this.http.post<UpdateConditionalForwarderResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.
		 * Post #X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers
		 * @return {UpdateNumberOfDomainControllersResult} Success
		 */
		UpdateNumberOfDomainControllers(requestBody: UpdateNumberOfDomainControllersRequest): Observable<UpdateNumberOfDomainControllersResult> {
			return this.http.post<UpdateNumberOfDomainControllersResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector or Microsoft AD directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.UpdateRadius
		 * @return {UpdateRadiusResult} Success
		 */
		UpdateRadius(requestBody: UpdateRadiusRequest): Observable<UpdateRadiusResult> {
			return this.http.post<UpdateRadiusResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.UpdateRadius', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the trust that has been set up between your AWS Managed Microsoft AD directory and an on-premises Active Directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.UpdateTrust
		 * @return {UpdateTrustResult} Success
		 */
		UpdateTrust(requestBody: UpdateTrustRequest): Observable<UpdateTrustResult> {
			return this.http.post<UpdateTrustResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.UpdateTrust', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>AWS Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships.</p> <p>This action verifies a trust relationship between your AWS Managed Microsoft AD directory and an external domain.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.VerifyTrust
		 * @return {VerifyTrustResult} Success
		 */
		VerifyTrust(requestBody: VerifyTrustRequest): Observable<VerifyTrustResult> {
			return this.http.post<VerifyTrustResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.VerifyTrust', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AcceptSharedDirectoryX_Amz_Target { DirectoryService_20150416_AcceptSharedDirectory = 0 }

	export enum AddIpRoutesX_Amz_Target { DirectoryService_20150416_AddIpRoutes = 0 }

	export enum AddTagsToResourceX_Amz_Target { DirectoryService_20150416_AddTagsToResource = 0 }

	export enum CancelSchemaExtensionX_Amz_Target { DirectoryService_20150416_CancelSchemaExtension = 0 }

	export enum ConnectDirectoryX_Amz_Target { DirectoryService_20150416_ConnectDirectory = 0 }

	export enum CreateAliasX_Amz_Target { DirectoryService_20150416_CreateAlias = 0 }

	export enum CreateComputerX_Amz_Target { DirectoryService_20150416_CreateComputer = 0 }

	export enum CreateConditionalForwarderX_Amz_Target { DirectoryService_20150416_CreateConditionalForwarder = 0 }

	export enum CreateDirectoryX_Amz_Target { DirectoryService_20150416_CreateDirectory = 0 }

	export enum CreateLogSubscriptionX_Amz_Target { DirectoryService_20150416_CreateLogSubscription = 0 }

	export enum CreateMicrosoftADX_Amz_Target { DirectoryService_20150416_CreateMicrosoftAD = 0 }

	export enum CreateSnapshotX_Amz_Target { DirectoryService_20150416_CreateSnapshot = 0 }

	export enum CreateTrustX_Amz_Target { DirectoryService_20150416_CreateTrust = 0 }

	export enum DeleteConditionalForwarderX_Amz_Target { DirectoryService_20150416_DeleteConditionalForwarder = 0 }

	export enum DeleteDirectoryX_Amz_Target { DirectoryService_20150416_DeleteDirectory = 0 }

	export enum DeleteLogSubscriptionX_Amz_Target { DirectoryService_20150416_DeleteLogSubscription = 0 }

	export enum DeleteSnapshotX_Amz_Target { DirectoryService_20150416_DeleteSnapshot = 0 }

	export enum DeleteTrustX_Amz_Target { DirectoryService_20150416_DeleteTrust = 0 }

	export enum DeregisterCertificateX_Amz_Target { DirectoryService_20150416_DeregisterCertificate = 0 }

	export enum DeregisterEventTopicX_Amz_Target { DirectoryService_20150416_DeregisterEventTopic = 0 }

	export enum DescribeCertificateX_Amz_Target { DirectoryService_20150416_DescribeCertificate = 0 }

	export enum DescribeConditionalForwardersX_Amz_Target { DirectoryService_20150416_DescribeConditionalForwarders = 0 }

	export enum DescribeDirectoriesX_Amz_Target { DirectoryService_20150416_DescribeDirectories = 0 }

	export enum DescribeDomainControllersX_Amz_Target { DirectoryService_20150416_DescribeDomainControllers = 0 }

	export enum DescribeEventTopicsX_Amz_Target { DirectoryService_20150416_DescribeEventTopics = 0 }

	export enum DescribeLDAPSSettingsX_Amz_Target { DirectoryService_20150416_DescribeLDAPSSettings = 0 }

	export enum DescribeSharedDirectoriesX_Amz_Target { DirectoryService_20150416_DescribeSharedDirectories = 0 }

	export enum DescribeSnapshotsX_Amz_Target { DirectoryService_20150416_DescribeSnapshots = 0 }

	export enum DescribeTrustsX_Amz_Target { DirectoryService_20150416_DescribeTrusts = 0 }

	export enum DisableLDAPSX_Amz_Target { DirectoryService_20150416_DisableLDAPS = 0 }

	export enum DisableRadiusX_Amz_Target { DirectoryService_20150416_DisableRadius = 0 }

	export enum DisableSsoX_Amz_Target { DirectoryService_20150416_DisableSso = 0 }

	export enum EnableLDAPSX_Amz_Target { DirectoryService_20150416_EnableLDAPS = 0 }

	export enum EnableRadiusX_Amz_Target { DirectoryService_20150416_EnableRadius = 0 }

	export enum EnableSsoX_Amz_Target { DirectoryService_20150416_EnableSso = 0 }

	export enum GetDirectoryLimitsX_Amz_Target { DirectoryService_20150416_GetDirectoryLimits = 0 }

	export enum GetSnapshotLimitsX_Amz_Target { DirectoryService_20150416_GetSnapshotLimits = 0 }

	export enum ListCertificatesX_Amz_Target { DirectoryService_20150416_ListCertificates = 0 }

	export enum ListIpRoutesX_Amz_Target { DirectoryService_20150416_ListIpRoutes = 0 }

	export enum ListLogSubscriptionsX_Amz_Target { DirectoryService_20150416_ListLogSubscriptions = 0 }

	export enum ListSchemaExtensionsX_Amz_Target { DirectoryService_20150416_ListSchemaExtensions = 0 }

	export enum ListTagsForResourceX_Amz_Target { DirectoryService_20150416_ListTagsForResource = 0 }

	export enum RegisterCertificateX_Amz_Target { DirectoryService_20150416_RegisterCertificate = 0 }

	export enum RegisterEventTopicX_Amz_Target { DirectoryService_20150416_RegisterEventTopic = 0 }

	export enum RejectSharedDirectoryX_Amz_Target { DirectoryService_20150416_RejectSharedDirectory = 0 }

	export enum RemoveIpRoutesX_Amz_Target { DirectoryService_20150416_RemoveIpRoutes = 0 }

	export enum RemoveTagsFromResourceX_Amz_Target { DirectoryService_20150416_RemoveTagsFromResource = 0 }

	export enum ResetUserPasswordX_Amz_Target { DirectoryService_20150416_ResetUserPassword = 0 }

	export enum RestoreFromSnapshotX_Amz_Target { DirectoryService_20150416_RestoreFromSnapshot = 0 }

	export enum ShareDirectoryX_Amz_Target { DirectoryService_20150416_ShareDirectory = 0 }

	export enum StartSchemaExtensionX_Amz_Target { DirectoryService_20150416_StartSchemaExtension = 0 }

	export enum UnshareDirectoryX_Amz_Target { DirectoryService_20150416_UnshareDirectory = 0 }

	export enum UpdateConditionalForwarderX_Amz_Target { DirectoryService_20150416_UpdateConditionalForwarder = 0 }

	export enum UpdateNumberOfDomainControllersX_Amz_Target { DirectoryService_20150416_UpdateNumberOfDomainControllers = 0 }

	export enum UpdateRadiusX_Amz_Target { DirectoryService_20150416_UpdateRadius = 0 }

	export enum UpdateTrustX_Amz_Target { DirectoryService_20150416_UpdateTrust = 0 }

	export enum VerifyTrustX_Amz_Target { DirectoryService_20150416_VerifyTrust = 0 }

}

