import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AcceptInvitationResponse {
	}

	export interface BadRequestException {
	}

	export interface InternalServerErrorException {
	}

	export interface ArchiveFindingsResponse {
	}

	export interface CreateDetectorResponse {
		DetectorId?: string;
	}

	export interface CreateFilterResponse {
		Name: string;
	}

	export interface Criterion {
	}

	export interface CreateIPSetResponse {
		IpSetId: string;
	}

	export interface CreateMembersResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}


	/** Contains information about the accounts that weren't processed. */
	export interface UnprocessedAccount {
		AccountId: string;
		Result: string;
	}


	/** Contains information about the account. */
	export interface AccountDetail {
		AccountId: string;
		Email: string;
	}

	export interface CreatePublishingDestinationResponse {
		DestinationId: string;
	}

	export interface CreateSampleFindingsResponse {
	}

	export interface CreateThreatIntelSetResponse {
		ThreatIntelSetId: string;
	}

	export interface DeclineInvitationsResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}

	export interface DeleteDetectorResponse {
	}

	export interface DeleteFilterResponse {
	}

	export interface DeleteIPSetResponse {
	}

	export interface DeleteInvitationsResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}

	export interface DeleteMembersResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}

	export interface DeletePublishingDestinationResponse {
	}

	export interface DeleteThreatIntelSetResponse {
	}

	export interface DescribeOrganizationConfigurationResponse {
		AutoEnable: boolean;
		MemberAccountLimitReached: boolean;
	}

	export interface DescribePublishingDestinationResponse {
		DestinationId: string;
		DestinationType: DescribePublishingDestinationResponseDestinationType;
		Status: DescribePublishingDestinationResponseStatus;
		PublishingFailureStartTimestamp: number;

		/** Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings. */
		DestinationProperties: DestinationProperties;
	}

	export enum DescribePublishingDestinationResponseDestinationType { S3 = 0 }

	export enum DescribePublishingDestinationResponseStatus { PENDING_VERIFICATION = 0, PUBLISHING = 1, UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY = 2, STOPPED = 3 }


	/** Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings. */
	export interface DestinationProperties {
		DestinationArn?: string;
		KmsKeyArn?: string;
	}

	export interface DisableOrganizationAdminAccountResponse {
	}

	export interface DisassociateFromMasterAccountResponse {
	}

	export interface DisassociateMembersResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}

	export interface EnableOrganizationAdminAccountResponse {
	}

	export interface GetDetectorResponse {
		CreatedAt?: string;
		FindingPublishingFrequency?: GetDetectorResponseFindingPublishingFrequency;
		ServiceRole: string;
		Status: GetDetectorResponseStatus;
		UpdatedAt?: string;
		Tags?: TagMap;
	}

	export enum GetDetectorResponseFindingPublishingFrequency { FIFTEEN_MINUTES = 0, ONE_HOUR = 1, SIX_HOURS = 2 }

	export enum GetDetectorResponseStatus { ENABLED = 0, DISABLED = 1 }

	export interface TagMap {
	}

	export interface GetFilterResponse {
		Name: string;
		Description?: string;
		Action: GetFilterResponseAction;
		Rank?: number;

		/** Contains information about the criteria used for querying findings. */
		FindingCriteria: FindingCriteria;
		Tags?: TagMap;
	}

	export enum GetFilterResponseAction { NOOP = 0, ARCHIVE = 1 }


	/** Contains information about the criteria used for querying findings. */
	export interface FindingCriteria {
		Criterion?: Criterion;
	}

	export interface GetFindingsResponse {
		Findings: Array<Finding>;
	}


	/** Contains information about the finding, which is generated when abnormal or suspicious activity is detected. */
	export interface Finding {
		AccountId: string;
		Arn: string;
		Confidence?: number;
		CreatedAt: string;
		Description?: string;
		Id: string;
		Partition?: string;
		Region: string;

		/** Contains information about the AWS resource associated with the activity that prompted GuardDuty to generate a finding. */
		Resource: Resource;
		SchemaVersion: string;

		/** Contains additional information about the generated finding. */
		Service?: Service;
		Severity: number;
		Title?: string;
		Type: string;
		UpdatedAt: string;
	}


	/** Contains information about the AWS resource associated with the activity that prompted GuardDuty to generate a finding. */
	export interface Resource {

		/** Contains information about the access keys. */
		AccessKeyDetails?: AccessKeyDetails;

		/** Contains information on the S3 bucket. */
		S3BucketDetails?: Array<S3BucketDetail>;

		/** Contains information about the details of an instance. */
		InstanceDetails?: InstanceDetails;
		ResourceType?: string;
	}


	/** Contains information about the access keys. */
	export interface AccessKeyDetails {
		AccessKeyId?: string;
		PrincipalId?: string;
		UserName?: string;
		UserType?: string;
	}

	export interface S3BucketDetail {
		Arn?: string;
		Name?: string;
		Type?: string;
		CreatedAt?: Date;

		/** Contains information on the owner of the bucket. */
		Owner?: Owner;
		Tags?: Array<Tag>;

		/** Contains information on the server side encryption method used in the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/atest/dev/serv-side-encryption.html">S3 Server-Side Encryption</a> for more information. */
		DefaultServerSideEncryption?: DefaultServerSideEncryption;

		/** Describes the public access policies that apply to the S3 bucket. */
		PublicAccess?: PublicAccess;
	}


	/** Contains information on the owner of the bucket. */
	export interface Owner {
		Id?: string;
	}


	/** Contains information about a tag associated with the EC2 instance. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}


	/** Contains information on the server side encryption method used in the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/atest/dev/serv-side-encryption.html">S3 Server-Side Encryption</a> for more information. */
	export interface DefaultServerSideEncryption {
		EncryptionType?: string;
		KmsMasterKeyArn?: string;
	}


	/** Describes the public access policies that apply to the S3 bucket. */
	export interface PublicAccess {

		/** Contains information about how permissions are configured for the S3 bucket. */
		PermissionConfiguration?: PermissionConfiguration;
		EffectivePermission?: string;
	}


	/** Contains information about how permissions are configured for the S3 bucket. */
	export interface PermissionConfiguration {

		/** Contains information about the bucket level permissions for the S3 bucket. */
		BucketLevelPermissions?: BucketLevelPermissions;

		/** Contains information about the account level permissions on the S3 bucket. */
		AccountLevelPermissions?: AccountLevelPermissions;
	}


	/** Contains information about the bucket level permissions for the S3 bucket. */
	export interface BucketLevelPermissions {

		/** Contains information on the current access control policies for the bucket. */
		AccessControlList?: AccessControlList;

		/** Contains information on the current bucket policies for the S3 bucket. */
		BucketPolicy?: BucketPolicy;

		/** Contains information on how the bucker owner's S3 Block Public Access settings are being applied to the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">S3 Block Public Access</a> for more information. */
		BlockPublicAccess?: BlockPublicAccess;
	}


	/** Contains information on the current access control policies for the bucket. */
	export interface AccessControlList {
		AllowsPublicReadAccess?: boolean;
		AllowsPublicWriteAccess?: boolean;
	}


	/** Contains information on the current bucket policies for the S3 bucket. */
	export interface BucketPolicy {
		AllowsPublicReadAccess?: boolean;
		AllowsPublicWriteAccess?: boolean;
	}


	/** Contains information on how the bucker owner's S3 Block Public Access settings are being applied to the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">S3 Block Public Access</a> for more information.  */
	export interface BlockPublicAccess {
		IgnorePublicAcls?: boolean;
		RestrictPublicBuckets?: boolean;
		BlockPublicAcls?: boolean;
		BlockPublicPolicy?: boolean;
	}


	/** Contains information about the account level permissions on the S3 bucket. */
	export interface AccountLevelPermissions {

		/** Contains information on how the bucker owner's S3 Block Public Access settings are being applied to the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">S3 Block Public Access</a> for more information. */
		BlockPublicAccess?: BlockPublicAccess;
	}


	/** Contains information about the details of an instance. */
	export interface InstanceDetails {
		AvailabilityZone?: string;

		/** Contains information about the EC2 instance profile. */
		IamInstanceProfile?: IamInstanceProfile;
		ImageDescription?: string;
		ImageId?: string;
		InstanceId?: string;
		InstanceState?: string;
		InstanceType?: string;
		OutpostArn?: string;
		LaunchTime?: string;
		NetworkInterfaces?: Array<NetworkInterface>;
		Platform?: string;
		ProductCodes?: Array<ProductCode>;
		Tags?: Array<Tag>;
	}


	/** Contains information about the EC2 instance profile. */
	export interface IamInstanceProfile {
		Arn?: string;
		Id?: string;
	}


	/** Contains information about the elastic network interface of the EC2 instance. */
	export interface NetworkInterface {
		Ipv6Addresses?: Array<string>;
		NetworkInterfaceId?: string;
		PrivateDnsName?: string;
		PrivateIpAddress?: string;
		PrivateIpAddresses?: Array<PrivateIpAddressDetails>;
		PublicDnsName?: string;
		PublicIp?: string;
		SecurityGroups?: Array<SecurityGroup>;
		SubnetId?: string;
		VpcId?: string;
	}


	/** Contains other private IP address information of the EC2 instance. */
	export interface PrivateIpAddressDetails {
		PrivateDnsName?: string;
		PrivateIpAddress?: string;
	}


	/** Contains information about the security groups associated with the EC2 instance. */
	export interface SecurityGroup {
		GroupId?: string;
		GroupName?: string;
	}


	/** Contains information about the product code for the EC2 instance. */
	export interface ProductCode {
		Code?: string;
		ProductType?: string;
	}


	/** Contains additional information about the generated finding. */
	export interface Service {

		/** Contains information about actions. */
		Action?: Action;

		/** Contains information about the reason that the finding was generated. */
		Evidence?: Evidence;
		Archived?: boolean;
		Count?: number;
		DetectorId?: string;
		EventFirstSeen?: string;
		EventLastSeen?: string;
		ResourceRole?: string;
		ServiceName?: string;
		UserFeedback?: string;
	}


	/** Contains information about actions. */
	export interface Action {
		ActionType?: string;

		/** Contains information about the API operation. */
		AwsApiCallAction?: AwsApiCallAction;

		/** Contains information about the DNS_REQUEST action described in this finding. */
		DnsRequestAction?: DnsRequestAction;

		/** Contains information about the NETWORK_CONNECTION action described in the finding. */
		NetworkConnectionAction?: NetworkConnectionAction;

		/** Contains information about the PORT_PROBE action described in the finding. */
		PortProbeAction?: PortProbeAction;
	}


	/** Contains information about the API operation. */
	export interface AwsApiCallAction {
		Api?: string;
		CallerType?: string;

		/** Contains information about the domain. */
		DomainDetails?: DomainDetails;

		/** Contains information about the remote IP address of the connection. */
		RemoteIpDetails?: RemoteIpDetails;
		ServiceName?: string;
	}


	/** Contains information about the domain. */
	export interface DomainDetails {
		Domain?: string;
	}


	/** Contains information about the remote IP address of the connection. */
	export interface RemoteIpDetails {

		/** Contains information about the city associated with the IP address. */
		City?: City;

		/** Contains information about the country where the remote IP address is located. */
		Country?: Country;

		/** Contains information about the location of the remote IP address. */
		GeoLocation?: GeoLocation;
		IpAddressV4?: string;

		/** Contains information about the ISP organization of the remote IP address. */
		Organization?: Organization;
	}


	/** Contains information about the city associated with the IP address. */
	export interface City {
		CityName?: string;
	}


	/** Contains information about the country where the remote IP address is located. */
	export interface Country {
		CountryCode?: string;
		CountryName?: string;
	}


	/** Contains information about the location of the remote IP address. */
	export interface GeoLocation {
		Lat?: number;
		Lon?: number;
	}


	/** Contains information about the ISP organization of the remote IP address. */
	export interface Organization {
		Asn?: string;
		AsnOrg?: string;
		Isp?: string;
		Org?: string;
	}


	/** Contains information about the DNS_REQUEST action described in this finding. */
	export interface DnsRequestAction {
		Domain?: string;
	}


	/** Contains information about the NETWORK_CONNECTION action described in the finding. */
	export interface NetworkConnectionAction {
		Blocked?: boolean;
		ConnectionDirection?: string;

		/** Contains information about the port for the local connection. */
		LocalPortDetails?: LocalPortDetails;
		Protocol?: string;

		/** Contains information about the local IP address of the connection. */
		LocalIpDetails?: LocalIpDetails;

		/** Contains information about the remote IP address of the connection. */
		RemoteIpDetails?: RemoteIpDetails;

		/** Contains information about the remote port. */
		RemotePortDetails?: RemotePortDetails;
	}


	/** Contains information about the port for the local connection. */
	export interface LocalPortDetails {
		Port?: number;
		PortName?: string;
	}


	/** Contains information about the local IP address of the connection. */
	export interface LocalIpDetails {
		IpAddressV4?: string;
	}


	/** Contains information about the remote port. */
	export interface RemotePortDetails {
		Port?: number;
		PortName?: string;
	}


	/** Contains information about the PORT_PROBE action described in the finding. */
	export interface PortProbeAction {
		Blocked?: boolean;
		PortProbeDetails?: Array<PortProbeDetail>;
	}


	/** Contains information about the port probe details. */
	export interface PortProbeDetail {

		/** Contains information about the port for the local connection. */
		LocalPortDetails?: LocalPortDetails;

		/** Contains information about the local IP address of the connection. */
		LocalIpDetails?: LocalIpDetails;

		/** Contains information about the remote IP address of the connection. */
		RemoteIpDetails?: RemoteIpDetails;
	}


	/** Contains information about the reason that the finding was generated. */
	export interface Evidence {
		ThreatIntelligenceDetails?: Array<ThreatIntelligenceDetail>;
	}


	/** An instance of a threat intelligence detail that constitutes evidence for the finding. */
	export interface ThreatIntelligenceDetail {
		ThreatListName?: string;
		ThreatNames?: Array<string>;
	}

	export enum OrderBy { ASC = 0, DESC = 1 }

	export interface GetFindingsStatisticsResponse {

		/** Contains information about finding statistics. */
		FindingStatistics: FindingStatistics;
	}


	/** Contains information about finding statistics. */
	export interface FindingStatistics {
		CountBySeverity?: CountBySeverity;
	}

	export interface CountBySeverity {
	}

	export enum FindingStatisticType { COUNT_BY_SEVERITY = 0 }

	export interface GetIPSetResponse {
		Name: string;
		Format: GetIPSetResponseFormat;
		Location: string;
		Status: GetIPSetResponseStatus;
		Tags?: TagMap;
	}

	export enum GetIPSetResponseFormat { TXT = 0, STIX = 1, OTX_CSV = 2, ALIEN_VAULT = 3, PROOF_POINT = 4, FIRE_EYE = 5 }

	export enum GetIPSetResponseStatus { INACTIVE = 0, ACTIVATING = 1, ACTIVE = 2, DEACTIVATING = 3, ERROR = 4, DELETE_PENDING = 5, DELETED = 6 }

	export interface GetInvitationsCountResponse {
		InvitationsCount?: number;
	}

	export interface GetMasterAccountResponse {

		/** Contains information about the master account and invitation. */
		Master: Master;
	}


	/** Contains information about the master account and invitation. */
	export interface Master {
		AccountId?: string;
		InvitationId?: string;
		RelationshipStatus?: string;
		InvitedAt?: string;
	}

	export interface GetMembersResponse {
		Members: Array<Member>;
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}


	/** Contains information about the member account.  */
	export interface Member {
		AccountId: string;
		DetectorId?: string;
		MasterId: string;
		Email: string;
		RelationshipStatus: string;
		InvitedAt?: string;
		UpdatedAt: string;
	}

	export interface GetThreatIntelSetResponse {
		Name: string;
		Format: GetIPSetResponseFormat;
		Location: string;
		Status: GetIPSetResponseStatus;
		Tags?: TagMap;
	}

	export interface InviteMembersResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}

	export interface ListDetectorsResponse {
		DetectorIds: Array<string>;
		NextToken?: string;
	}

	export interface ListFiltersResponse {
		FilterNames: Array<string>;
		NextToken?: string;
	}

	export interface ListFindingsResponse {
		FindingIds: Array<string>;
		NextToken?: string;
	}

	export interface ListIPSetsResponse {
		IpSetIds: Array<string>;
		NextToken?: string;
	}

	export interface ListInvitationsResponse {
		Invitations?: Array<Invitation>;
		NextToken?: string;
	}


	/** Contains information about the invitation to become a member account. */
	export interface Invitation {
		AccountId?: string;
		InvitationId?: string;
		RelationshipStatus?: string;
		InvitedAt?: string;
	}

	export interface ListMembersResponse {
		Members?: Array<Member>;
		NextToken?: string;
	}

	export interface ListOrganizationAdminAccountsResponse {
		AdminAccounts?: Array<AdminAccount>;
		NextToken?: string;
	}


	/** The account within the organization specified as the GuardDuty delegated administrator. */
	export interface AdminAccount {
		AdminAccountId?: string;
		AdminStatus?: AdminAccountAdminStatus;
	}

	export enum AdminAccountAdminStatus { ENABLED = 0, DISABLE_IN_PROGRESS = 1 }

	export interface ListPublishingDestinationsResponse {
		Destinations: Array<Destination>;
		NextToken?: string;
	}


	/** Contains information about the publishing destination, including the ID, type, and status. */
	export interface Destination {
		DestinationId: string;
		DestinationType: DescribePublishingDestinationResponseDestinationType;
		Status: DescribePublishingDestinationResponseStatus;
	}

	export interface ListTagsForResourceResponse {
		Tags?: TagMap;
	}

	export interface ListThreatIntelSetsResponse {
		ThreatIntelSetIds: Array<string>;
		NextToken?: string;
	}

	export interface StartMonitoringMembersResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}

	export interface StopMonitoringMembersResponse {
		UnprocessedAccounts: Array<UnprocessedAccount>;
	}

	export interface TagResourceResponse {
	}

	export interface UnarchiveFindingsResponse {
	}

	export interface UntagResourceResponse {
	}

	export interface UpdateDetectorResponse {
	}

	export interface UpdateFilterResponse {
		Name: string;
	}

	export interface UpdateFindingsFeedbackResponse {
	}

	export interface UpdateIPSetResponse {
	}

	export interface UpdateOrganizationConfigurationResponse {
	}

	export interface UpdatePublishingDestinationResponse {
	}

	export interface UpdateThreatIntelSetResponse {
	}

	export interface AcceptInvitationRequest {
		MasterId: string;
		InvitationId: string;
	}

	export enum AdminStatus { ENABLED = 0, DISABLE_IN_PROGRESS = 1 }

	export interface ArchiveFindingsRequest {
		FindingIds: Array<string>;
	}


	/** Contains information about the condition. */
	export interface Condition {
		Eq?: Array<string>;
		Neq?: Array<string>;
		Gt?: number;
		Gte?: number;
		Lt?: number;
		Lte?: number;
		Equals?: Array<string>;
		NotEquals?: Array<string>;
		GreaterThan?: number;
		GreaterThanOrEqual?: number;
		LessThan?: number;
		LessThanOrEqual?: number;
	}

	export enum FindingPublishingFrequency { FIFTEEN_MINUTES = 0, ONE_HOUR = 1, SIX_HOURS = 2 }

	export interface CreateDetectorRequest {
		Enable: boolean;
		ClientToken?: string;
		FindingPublishingFrequency?: GetDetectorResponseFindingPublishingFrequency;
		Tags?: TagMap;
	}

	export enum FilterAction { NOOP = 0, ARCHIVE = 1 }

	export interface CreateFilterRequest {
		Name: string;
		Description?: string;
		Action?: GetFilterResponseAction;
		Rank?: number;

		/** Contains information about the criteria used for querying findings. */
		FindingCriteria: FindingCriteria;
		ClientToken?: string;
		Tags?: TagMap;
	}

	export enum IpSetFormat { TXT = 0, STIX = 1, OTX_CSV = 2, ALIEN_VAULT = 3, PROOF_POINT = 4, FIRE_EYE = 5 }

	export interface CreateIPSetRequest {
		Name: string;
		Format: GetIPSetResponseFormat;
		Location: string;
		Activate: boolean;
		ClientToken?: string;
		Tags?: TagMap;
	}

	export interface CreateMembersRequest {
		AccountDetails: Array<AccountDetail>;
	}

	export enum DestinationType { S3 = 0 }

	export interface CreatePublishingDestinationRequest {
		DestinationType: DescribePublishingDestinationResponseDestinationType;

		/** Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings. */
		DestinationProperties: DestinationProperties;
		ClientToken?: string;
	}

	export interface CreateSampleFindingsRequest {
		FindingTypes?: Array<string>;
	}

	export enum ThreatIntelSetFormat { TXT = 0, STIX = 1, OTX_CSV = 2, ALIEN_VAULT = 3, PROOF_POINT = 4, FIRE_EYE = 5 }

	export interface CreateThreatIntelSetRequest {
		Name: string;
		Format: GetIPSetResponseFormat;
		Location: string;
		Activate: boolean;
		ClientToken?: string;
		Tags?: TagMap;
	}

	export interface DeclineInvitationsRequest {
		AccountIds: Array<string>;
	}

	export interface DeleteDetectorRequest {
	}

	export interface DeleteFilterRequest {
	}

	export interface DeleteIPSetRequest {
	}

	export interface DeleteInvitationsRequest {
		AccountIds: Array<string>;
	}

	export interface DeleteMembersRequest {
		AccountIds: Array<string>;
	}

	export interface DeletePublishingDestinationRequest {
	}

	export interface DeleteThreatIntelSetRequest {
	}

	export interface DescribeOrganizationConfigurationRequest {
	}

	export interface DescribePublishingDestinationRequest {
	}

	export enum PublishingStatus { PENDING_VERIFICATION = 0, PUBLISHING = 1, UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY = 2, STOPPED = 3 }

	export enum DetectorStatus { ENABLED = 0, DISABLED = 1 }

	export interface DisableOrganizationAdminAccountRequest {
		AdminAccountId: string;
	}

	export interface DisassociateFromMasterAccountRequest {
	}

	export interface DisassociateMembersRequest {
		AccountIds: Array<string>;
	}

	export interface EnableOrganizationAdminAccountRequest {
		AdminAccountId: string;
	}

	export enum Feedback { USEFUL = 0, NOT_USEFUL = 1 }

	export interface GetDetectorRequest {
	}

	export interface GetFilterRequest {
	}


	/** Contains information about the criteria used for sorting findings. */
	export interface SortCriteria {
		AttributeName?: string;
		OrderBy?: OrderBy;
	}

	export interface GetFindingsRequest {
		FindingIds: Array<string>;

		/** Contains information about the criteria used for sorting findings. */
		SortCriteria?: SortCriteria;
	}

	export interface GetFindingsStatisticsRequest {
		FindingStatisticTypes: Array<FindingStatisticType>;

		/** Contains information about the criteria used for querying findings. */
		FindingCriteria?: FindingCriteria;
	}

	export interface GetIPSetRequest {
	}

	export enum IpSetStatus { INACTIVE = 0, ACTIVATING = 1, ACTIVE = 2, DEACTIVATING = 3, ERROR = 4, DELETE_PENDING = 5, DELETED = 6 }

	export interface GetInvitationsCountRequest {
	}

	export interface GetMasterAccountRequest {
	}

	export interface GetMembersRequest {
		AccountIds: Array<string>;
	}

	export interface GetThreatIntelSetRequest {
	}

	export enum ThreatIntelSetStatus { INACTIVE = 0, ACTIVATING = 1, ACTIVE = 2, DEACTIVATING = 3, ERROR = 4, DELETE_PENDING = 5, DELETED = 6 }

	export interface InviteMembersRequest {
		AccountIds: Array<string>;
		DisableEmailNotification?: boolean;
		Message?: string;
	}

	export interface ListDetectorsRequest {
	}

	export interface ListFiltersRequest {
	}

	export interface ListFindingsRequest {

		/** Contains information about the criteria used for querying findings. */
		FindingCriteria?: FindingCriteria;

		/** Contains information about the criteria used for sorting findings. */
		SortCriteria?: SortCriteria;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListIPSetsRequest {
	}

	export interface ListInvitationsRequest {
	}

	export interface ListMembersRequest {
	}

	export interface ListOrganizationAdminAccountsRequest {
	}

	export interface ListPublishingDestinationsRequest {
	}

	export interface ListTagsForResourceRequest {
	}

	export interface ListThreatIntelSetsRequest {
	}

	export interface StartMonitoringMembersRequest {
		AccountIds: Array<string>;
	}

	export interface StopMonitoringMembersRequest {
		AccountIds: Array<string>;
	}

	export interface TagResourceRequest {
		Tags: TagMap;
	}

	export interface UnarchiveFindingsRequest {
		FindingIds: Array<string>;
	}

	export interface UntagResourceRequest {
	}

	export interface UpdateDetectorRequest {
		Enable?: boolean;
		FindingPublishingFrequency?: GetDetectorResponseFindingPublishingFrequency;
	}

	export interface UpdateFilterRequest {
		Description?: string;
		Action?: GetFilterResponseAction;
		Rank?: number;

		/** Contains information about the criteria used for querying findings. */
		FindingCriteria?: FindingCriteria;
	}

	export interface UpdateFindingsFeedbackRequest {
		FindingIds: Array<string>;
		Feedback: Feedback;
		Comments?: string;
	}

	export interface UpdateIPSetRequest {
		Name?: string;
		Location?: string;
		Activate?: boolean;
	}

	export interface UpdateOrganizationConfigurationRequest {
		AutoEnable: boolean;
	}

	export interface UpdatePublishingDestinationRequest {

		/** Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings. */
		DestinationProperties?: DestinationProperties;
	}

	export interface UpdateThreatIntelSetRequest {
		Name?: string;
		Location?: string;
		Activate?: boolean;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Accepts the invitation to be monitored by a master GuardDuty account.
		 * Post detector/{detectorId}/master
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty member account.
		 * @return {AcceptInvitationResponse} Success
		 */
		AcceptInvitation(detectorId: string, requestBody: AcceptInvitationPostBody): Observable<AcceptInvitationResponse> {
			return this.http.post<AcceptInvitationResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/master', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides the details for the GuardDuty master account associated with the current GuardDuty member account.
		 * Get detector/{detectorId}/master
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty member account.
		 * @return {GetMasterAccountResponse} Success
		 */
		GetMasterAccount(detectorId: string): Observable<GetMasterAccountResponse> {
			return this.http.get<GetMasterAccountResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/master', {});
		}

		/**
		 * <p>Archives GuardDuty findings that are specified by the list of finding IDs.</p> <note> <p>Only the master account can archive findings. Member accounts don't have permission to archive findings from their accounts.</p> </note>
		 * Post detector/{detectorId}/findings/archive
		 * @param {string} detectorId The ID of the detector that specifies the GuardDuty service whose findings you want to archive.
		 * @return {ArchiveFindingsResponse} Success
		 */
		ArchiveFindings(detectorId: string, requestBody: ArchiveFindingsPostBody): Observable<ArchiveFindingsResponse> {
			return this.http.post<ArchiveFindingsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/archive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a single Amazon GuardDuty detector. A detector is a resource that represents the GuardDuty service. To start using GuardDuty, you must create a detector in each Region where you enable the service. You can have only one detector per account per Region.
		 * Post detector
		 * @return {CreateDetectorResponse} Success
		 */
		CreateDetector(requestBody: CreateDetectorPostBody): Observable<CreateDetectorResponse> {
			return this.http.post<CreateDetectorResponse>(this.baseUri + 'detector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists detectorIds of all the existing Amazon GuardDuty detector resources.
		 * Get detector
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDetectorsResponse} Success
		 */
		ListDetectors(maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListDetectorsResponse> {
			return this.http.get<ListDetectorsResponse>(this.baseUri + 'detector?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a filter using the specified finding criteria.
		 * Post detector/{detectorId}/filter
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account that you want to create a filter for.
		 * @return {CreateFilterResponse} Success
		 */
		CreateFilter(detectorId: string, requestBody: CreateFilterPostBody): Observable<CreateFilterResponse> {
			return this.http.post<CreateFilterResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/filter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a paginated list of the current filters.
		 * Get detector/{detectorId}/filter
		 * @param {string} detectorId The unique ID of the detector that the filter is associated with.
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFiltersResponse} Success
		 */
		ListFilters(detectorId: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListFiltersResponse> {
			return this.http.get<ListFiltersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/filter&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new IPSet, which is called a trusted IP list in the console user interface. An IPSet is a list of IP addresses that are trusted for secure communication with AWS infrastructure and applications. GuardDuty doesn't generate findings for IP addresses that are included in IPSets. Only users from the master account can use this operation.
		 * Post detector/{detectorId}/ipset
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account that you want to create an IPSet for.
		 * @return {CreateIPSetResponse} Success
		 */
		CreateIPSet(detectorId: string, requestBody: CreateIPSetPostBody): Observable<CreateIPSetResponse> {
			return this.http.post<CreateIPSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/ipset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the IPSets of the GuardDuty service specified by the detector ID. If you use this operation from a member account, the IPSets returned are the IPSets from the associated master account.
		 * Get detector/{detectorId}/ipset
		 * @param {string} detectorId The unique ID of the detector that the IPSet is associated with.
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListIPSetsResponse} Success
		 */
		ListIPSets(detectorId: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListIPSetsResponse> {
			return this.http.get<ListIPSetsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/ipset&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates member accounts of the current AWS account by specifying a list of AWS account IDs. The current AWS account can then invite these members to manage GuardDuty in their accounts.
		 * Post detector/{detectorId}/member
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account that you want to associate member accounts with.
		 * @return {CreateMembersResponse} Success
		 */
		CreateMembers(detectorId: string, requestBody: CreateMembersPostBody): Observable<CreateMembersResponse> {
			return this.http.post<CreateMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists details about all member accounts for the current GuardDuty master account.
		 * Get detector/{detectorId}/member
		 * @param {string} detectorId The unique ID of the detector the member is associated with.
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} onlyAssociated Specifies whether to only return associated members or to return all members (including members who haven't been invited yet or have been disassociated).
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMembersResponse} Success
		 */
		ListMembers(detectorId: string, maxResults: number, nextToken: string, onlyAssociated: string, MaxResults: string, NextToken: string): Observable<ListMembersResponse> {
			return this.http.get<ListMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&onlyAssociated=' + (onlyAssociated == null ? '' : encodeURIComponent(onlyAssociated)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a publishing destination to export findings to. The resource to export findings to must exist before you use this operation.
		 * Post detector/{detectorId}/publishingDestination
		 * @param {string} detectorId The ID of the GuardDuty detector associated with the publishing destination.
		 * @return {CreatePublishingDestinationResponse} Success
		 */
		CreatePublishingDestination(detectorId: string, requestBody: CreatePublishingDestinationPostBody): Observable<CreatePublishingDestinationResponse> {
			return this.http.post<CreatePublishingDestinationResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/publishingDestination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of publishing destinations associated with the specified <code>dectectorId</code>.
		 * Get detector/{detectorId}/publishingDestination
		 * @param {string} detectorId The ID of the detector to retrieve publishing destinations for.
		 * @param {number} maxResults The maximum number of results to return in the response.
		 * @param {string} nextToken A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPublishingDestinationsResponse} Success
		 */
		ListPublishingDestinations(detectorId: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListPublishingDestinationsResponse> {
			return this.http.get<ListPublishingDestinationsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/publishingDestination&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Generates example findings of types specified by the list of finding types. If 'NULL' is specified for <code>findingTypes</code>, the API generates example findings of all supported finding types.
		 * Post detector/{detectorId}/findings/create
		 * @param {string} detectorId The ID of the detector to create sample findings for.
		 * @return {CreateSampleFindingsResponse} Success
		 */
		CreateSampleFindings(detectorId: string, requestBody: CreateSampleFindingsPostBody): Observable<CreateSampleFindingsResponse> {
			return this.http.post<CreateSampleFindingsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/create', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new ThreatIntelSet. ThreatIntelSets consist of known malicious IP addresses. GuardDuty generates findings based on ThreatIntelSets. Only users of the master account can use this operation.
		 * Post detector/{detectorId}/threatintelset
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account that you want to create a threatIntelSet for.
		 * @return {CreateThreatIntelSetResponse} Success
		 */
		CreateThreatIntelSet(detectorId: string, requestBody: CreateThreatIntelSetPostBody): Observable<CreateThreatIntelSetResponse> {
			return this.http.post<CreateThreatIntelSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/threatintelset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the ThreatIntelSets of the GuardDuty service specified by the detector ID. If you use this operation from a member account, the ThreatIntelSets associated with the master account are returned.
		 * Get detector/{detectorId}/threatintelset
		 * @param {string} detectorId The unique ID of the detector that the threatIntelSet is associated with.
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter to paginate results in the response. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListThreatIntelSetsResponse} Success
		 */
		ListThreatIntelSets(detectorId: string, maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListThreatIntelSetsResponse> {
			return this.http.get<ListThreatIntelSetsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/threatintelset&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Declines invitations sent to the current member account by AWS accounts specified by their account IDs.
		 * Post invitation/decline
		 * @return {DeclineInvitationsResponse} Success
		 */
		DeclineInvitations(requestBody: DeclineInvitationsPostBody): Observable<DeclineInvitationsResponse> {
			return this.http.post<DeclineInvitationsResponse>(this.baseUri + 'invitation/decline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Amazon GuardDuty detector that is specified by the detector ID.
		 * Delete detector/{detectorId}
		 * @param {string} detectorId The unique ID of the detector that you want to delete.
		 * @return {DeleteDetectorResponse} Success
		 */
		DeleteDetector(detectorId: string): Observable<DeleteDetectorResponse> {
			return this.http.delete<DeleteDetectorResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)), {});
		}

		/**
		 * Retrieves an Amazon GuardDuty detector specified by the detectorId.
		 * Get detector/{detectorId}
		 * @param {string} detectorId The unique ID of the detector that you want to get.
		 * @return {GetDetectorResponse} Success
		 */
		GetDetector(detectorId: string): Observable<GetDetectorResponse> {
			return this.http.get<GetDetectorResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)), {});
		}

		/**
		 * Updates the Amazon GuardDuty detector specified by the detectorId.
		 * Post detector/{detectorId}
		 * @param {string} detectorId The unique ID of the detector to update.
		 * @return {UpdateDetectorResponse} Success
		 */
		UpdateDetector(detectorId: string, requestBody: UpdateDetectorPostBody): Observable<UpdateDetectorResponse> {
			return this.http.post<UpdateDetectorResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the filter specified by the filter name.
		 * Delete detector/{detectorId}/filter/{filterName}
		 * @param {string} detectorId The unique ID of the detector that the filter is associated with.
		 * @param {string} filterName The name of the filter that you want to delete.
		 * @return {DeleteFilterResponse} Success
		 */
		DeleteFilter(detectorId: string, filterName: string): Observable<DeleteFilterResponse> {
			return this.http.delete<DeleteFilterResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/filter/' + (filterName == null ? '' : encodeURIComponent(filterName)), {});
		}

		/**
		 * Returns the details of the filter specified by the filter name.
		 * Get detector/{detectorId}/filter/{filterName}
		 * @param {string} detectorId The unique ID of the detector that the filter is associated with.
		 * @param {string} filterName The name of the filter you want to get.
		 * @return {GetFilterResponse} Success
		 */
		GetFilter(detectorId: string, filterName: string): Observable<GetFilterResponse> {
			return this.http.get<GetFilterResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/filter/' + (filterName == null ? '' : encodeURIComponent(filterName)), {});
		}

		/**
		 * Updates the filter specified by the filter name.
		 * Post detector/{detectorId}/filter/{filterName}
		 * @param {string} detectorId The unique ID of the detector that specifies the GuardDuty service where you want to update a filter.
		 * @param {string} filterName The name of the filter.
		 * @return {UpdateFilterResponse} Success
		 */
		UpdateFilter(detectorId: string, filterName: string, requestBody: UpdateFilterPostBody): Observable<UpdateFilterResponse> {
			return this.http.post<UpdateFilterResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/filter/' + (filterName == null ? '' : encodeURIComponent(filterName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the IPSet specified by the <code>ipSetId</code>. IPSets are called trusted IP lists in the console user interface.
		 * Delete detector/{detectorId}/ipset/{ipSetId}
		 * @param {string} detectorId The unique ID of the detector associated with the IPSet.
		 * @param {string} ipSetId The unique ID of the IPSet to delete.
		 * @return {DeleteIPSetResponse} Success
		 */
		DeleteIPSet(detectorId: string, ipSetId: string): Observable<DeleteIPSetResponse> {
			return this.http.delete<DeleteIPSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/ipset/' + (ipSetId == null ? '' : encodeURIComponent(ipSetId)), {});
		}

		/**
		 * Retrieves the IPSet specified by the <code>ipSetId</code>.
		 * Get detector/{detectorId}/ipset/{ipSetId}
		 * @param {string} detectorId The unique ID of the detector that the IPSet is associated with.
		 * @param {string} ipSetId The unique ID of the IPSet to retrieve.
		 * @return {GetIPSetResponse} Success
		 */
		GetIPSet(detectorId: string, ipSetId: string): Observable<GetIPSetResponse> {
			return this.http.get<GetIPSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/ipset/' + (ipSetId == null ? '' : encodeURIComponent(ipSetId)), {});
		}

		/**
		 * Updates the IPSet specified by the IPSet ID.
		 * Post detector/{detectorId}/ipset/{ipSetId}
		 * @param {string} detectorId The detectorID that specifies the GuardDuty service whose IPSet you want to update.
		 * @param {string} ipSetId The unique ID that specifies the IPSet that you want to update.
		 * @return {UpdateIPSetResponse} Success
		 */
		UpdateIPSet(detectorId: string, ipSetId: string, requestBody: UpdateIPSetPostBody): Observable<UpdateIPSetResponse> {
			return this.http.post<UpdateIPSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/ipset/' + (ipSetId == null ? '' : encodeURIComponent(ipSetId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes invitations sent to the current member account by AWS accounts specified by their account IDs.
		 * Post invitation/delete
		 * @return {DeleteInvitationsResponse} Success
		 */
		DeleteInvitations(requestBody: DeleteInvitationsPostBody): Observable<DeleteInvitationsResponse> {
			return this.http.post<DeleteInvitationsResponse>(this.baseUri + 'invitation/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes GuardDuty member accounts (to the current GuardDuty master account) specified by the account IDs.
		 * Post detector/{detectorId}/member/delete
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account whose members you want to delete.
		 * @return {DeleteMembersResponse} Success
		 */
		DeleteMembers(detectorId: string, requestBody: DeleteMembersPostBody): Observable<DeleteMembersResponse> {
			return this.http.post<DeleteMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the publishing definition with the specified <code>destinationId</code>.
		 * Delete detector/{detectorId}/publishingDestination/{destinationId}
		 * @param {string} detectorId The unique ID of the detector associated with the publishing destination to delete.
		 * @param {string} destinationId The ID of the publishing destination to delete.
		 * @return {DeletePublishingDestinationResponse} Success
		 */
		DeletePublishingDestination(detectorId: string, destinationId: string): Observable<DeletePublishingDestinationResponse> {
			return this.http.delete<DeletePublishingDestinationResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/publishingDestination/' + (destinationId == null ? '' : encodeURIComponent(destinationId)), {});
		}

		/**
		 * Returns information about the publishing destination specified by the provided <code>destinationId</code>.
		 * Get detector/{detectorId}/publishingDestination/{destinationId}
		 * @param {string} detectorId The unique ID of the detector associated with the publishing destination to retrieve.
		 * @param {string} destinationId The ID of the publishing destination to retrieve.
		 * @return {DescribePublishingDestinationResponse} Success
		 */
		DescribePublishingDestination(detectorId: string, destinationId: string): Observable<DescribePublishingDestinationResponse> {
			return this.http.get<DescribePublishingDestinationResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/publishingDestination/' + (destinationId == null ? '' : encodeURIComponent(destinationId)), {});
		}

		/**
		 * Updates information about the publishing destination specified by the <code>destinationId</code>.
		 * Post detector/{detectorId}/publishingDestination/{destinationId}
		 * @param {string} detectorId The ID of the detector associated with the publishing destinations to update.
		 * @param {string} destinationId The ID of the publishing destination to update.
		 * @return {UpdatePublishingDestinationResponse} Success
		 */
		UpdatePublishingDestination(detectorId: string, destinationId: string, requestBody: UpdatePublishingDestinationPostBody): Observable<UpdatePublishingDestinationResponse> {
			return this.http.post<UpdatePublishingDestinationResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/publishingDestination/' + (destinationId == null ? '' : encodeURIComponent(destinationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the ThreatIntelSet specified by the ThreatIntelSet ID.
		 * Delete detector/{detectorId}/threatintelset/{threatIntelSetId}
		 * @param {string} detectorId The unique ID of the detector that the threatIntelSet is associated with.
		 * @param {string} threatIntelSetId The unique ID of the threatIntelSet that you want to delete.
		 * @return {DeleteThreatIntelSetResponse} Success
		 */
		DeleteThreatIntelSet(detectorId: string, threatIntelSetId: string): Observable<DeleteThreatIntelSetResponse> {
			return this.http.delete<DeleteThreatIntelSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/threatintelset/' + (threatIntelSetId == null ? '' : encodeURIComponent(threatIntelSetId)), {});
		}

		/**
		 * Retrieves the ThreatIntelSet that is specified by the ThreatIntelSet ID.
		 * Get detector/{detectorId}/threatintelset/{threatIntelSetId}
		 * @param {string} detectorId The unique ID of the detector that the threatIntelSet is associated with.
		 * @param {string} threatIntelSetId The unique ID of the threatIntelSet that you want to get.
		 * @return {GetThreatIntelSetResponse} Success
		 */
		GetThreatIntelSet(detectorId: string, threatIntelSetId: string): Observable<GetThreatIntelSetResponse> {
			return this.http.get<GetThreatIntelSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/threatintelset/' + (threatIntelSetId == null ? '' : encodeURIComponent(threatIntelSetId)), {});
		}

		/**
		 * Updates the ThreatIntelSet specified by the ThreatIntelSet ID.
		 * Post detector/{detectorId}/threatintelset/{threatIntelSetId}
		 * @param {string} detectorId The detectorID that specifies the GuardDuty service whose ThreatIntelSet you want to update.
		 * @param {string} threatIntelSetId The unique ID that specifies the ThreatIntelSet that you want to update.
		 * @return {UpdateThreatIntelSetResponse} Success
		 */
		UpdateThreatIntelSet(detectorId: string, threatIntelSetId: string, requestBody: UpdateThreatIntelSetPostBody): Observable<UpdateThreatIntelSetResponse> {
			return this.http.post<UpdateThreatIntelSetResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/threatintelset/' + (threatIntelSetId == null ? '' : encodeURIComponent(threatIntelSetId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the account selected as the delegated administrator for GuardDuty.
		 * Get detector/{detectorId}/admin
		 * @param {string} detectorId The ID of the detector to retrieve information about the delegated administrator from.
		 * @return {DescribeOrganizationConfigurationResponse} Success
		 */
		DescribeOrganizationConfiguration(detectorId: string): Observable<DescribeOrganizationConfigurationResponse> {
			return this.http.get<DescribeOrganizationConfigurationResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/admin', {});
		}

		/**
		 * Updates the delegated administrator account with the values provided.
		 * Post detector/{detectorId}/admin
		 * @param {string} detectorId The ID of the detector to update the delegated administrator for.
		 * @return {UpdateOrganizationConfigurationResponse} Success
		 */
		UpdateOrganizationConfiguration(detectorId: string, requestBody: UpdateOrganizationConfigurationPostBody): Observable<UpdateOrganizationConfigurationResponse> {
			return this.http.post<UpdateOrganizationConfigurationResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/admin', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables an AWS account within the Organization as the GuardDuty delegated administrator.
		 * Post admin/disable
		 * @return {DisableOrganizationAdminAccountResponse} Success
		 */
		DisableOrganizationAdminAccount(requestBody: DisableOrganizationAdminAccountPostBody): Observable<DisableOrganizationAdminAccountResponse> {
			return this.http.post<DisableOrganizationAdminAccountResponse>(this.baseUri + 'admin/disable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates the current GuardDuty member account from its master account.
		 * Post detector/{detectorId}/master/disassociate
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty member account.
		 * @return {DisassociateFromMasterAccountResponse} Success
		 */
		DisassociateFromMasterAccount(detectorId: string): Observable<DisassociateFromMasterAccountResponse> {
			return this.http.post<DisassociateFromMasterAccountResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/master/disassociate', null, {});
		}

		/**
		 * Disassociates GuardDuty member accounts (to the current GuardDuty master account) specified by the account IDs.
		 * Post detector/{detectorId}/member/disassociate
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account whose members you want to disassociate from the master account.
		 * @return {DisassociateMembersResponse} Success
		 */
		DisassociateMembers(detectorId: string, requestBody: DisassociateMembersPostBody): Observable<DisassociateMembersResponse> {
			return this.http.post<DisassociateMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/disassociate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables an AWS account within the organization as the GuardDuty delegated administrator.
		 * Post admin/enable
		 * @return {EnableOrganizationAdminAccountResponse} Success
		 */
		EnableOrganizationAdminAccount(requestBody: EnableOrganizationAdminAccountPostBody): Observable<EnableOrganizationAdminAccountResponse> {
			return this.http.post<EnableOrganizationAdminAccountResponse>(this.baseUri + 'admin/enable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes Amazon GuardDuty findings specified by finding IDs.
		 * Post detector/{detectorId}/findings/get
		 * @param {string} detectorId The ID of the detector that specifies the GuardDuty service whose findings you want to retrieve.
		 * @return {GetFindingsResponse} Success
		 */
		GetFindings(detectorId: string, requestBody: GetFindingsPostBody): Observable<GetFindingsResponse> {
			return this.http.post<GetFindingsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Amazon GuardDuty findings statistics for the specified detector ID.
		 * Post detector/{detectorId}/findings/statistics
		 * @param {string} detectorId The ID of the detector that specifies the GuardDuty service whose findings' statistics you want to retrieve.
		 * @return {GetFindingsStatisticsResponse} Success
		 */
		GetFindingsStatistics(detectorId: string, requestBody: GetFindingsStatisticsPostBody): Observable<GetFindingsStatisticsResponse> {
			return this.http.post<GetFindingsStatisticsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/statistics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the count of all GuardDuty membership invitations that were sent to the current member account except the currently accepted invitation.
		 * Get invitation/count
		 * @return {GetInvitationsCountResponse} Success
		 */
		GetInvitationsCount(): Observable<GetInvitationsCountResponse> {
			return this.http.get<GetInvitationsCountResponse>(this.baseUri + 'invitation/count', {});
		}

		/**
		 * Retrieves GuardDuty member accounts (to the current GuardDuty master account) specified by the account IDs.
		 * Post detector/{detectorId}/member/get
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account whose members you want to retrieve.
		 * @return {GetMembersResponse} Success
		 */
		GetMembers(detectorId: string, requestBody: GetMembersPostBody): Observable<GetMembersResponse> {
			return this.http.post<GetMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Invites other AWS accounts (created as members of the current AWS account by CreateMembers) to enable GuardDuty, and allow the current AWS account to view and manage these accounts' GuardDuty findings on their behalf as the master account.
		 * Post detector/{detectorId}/member/invite
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty account that you want to invite members with.
		 * @return {InviteMembersResponse} Success
		 */
		InviteMembers(detectorId: string, requestBody: InviteMembersPostBody): Observable<InviteMembersResponse> {
			return this.http.post<InviteMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/invite', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Amazon GuardDuty findings for the specified detector ID.
		 * Post detector/{detectorId}/findings
		 * @param {string} detectorId The ID of the detector that specifies the GuardDuty service whose findings you want to list.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFindingsResponse} Success
		 */
		ListFindings(detectorId: string, MaxResults: string, NextToken: string, requestBody: ListFindingsPostBody): Observable<ListFindingsResponse> {
			return this.http.post<ListFindingsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all GuardDuty membership invitations that were sent to the current AWS account.
		 * Get invitation
		 * @param {number} maxResults You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.
		 * @param {string} nextToken You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInvitationsResponse} Success
		 */
		ListInvitations(maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListInvitationsResponse> {
			return this.http.get<ListInvitationsResponse>(this.baseUri + 'invitation?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the accounts configured as GuardDuty delegated administrators.
		 * Get admin
		 * @param {number} maxResults The maximum number of results to return in the response.
		 * @param {string} nextToken A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOrganizationAdminAccountsResponse} Success
		 */
		ListOrganizationAdminAccounts(maxResults: number, nextToken: string, MaxResults: string, NextToken: string): Observable<ListOrganizationAdminAccountsResponse> {
			return this.http.get<ListOrganizationAdminAccountsResponse>(this.baseUri + 'admin?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists tags for a resource. Tagging is currently supported for detectors, finding filters, IP sets, and threat intel sets, with a limit of 50 tags per resource. When invoked, this operation returns all assigned tags for a given resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) for the given GuardDuty resource. 
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds tags to a resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) for the GuardDuty resource to apply a tag to.
		 * @return {void} 
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Turns on GuardDuty monitoring of the specified member accounts. Use this operation to restart monitoring of accounts that you stopped monitoring with the <code>StopMonitoringMembers</code> operation.
		 * Post detector/{detectorId}/member/start
		 * @param {string} detectorId The unique ID of the detector of the GuardDuty master account associated with the member accounts to monitor.
		 * @return {StartMonitoringMembersResponse} Success
		 */
		StartMonitoringMembers(detectorId: string, requestBody: StartMonitoringMembersPostBody): Observable<StartMonitoringMembersResponse> {
			return this.http.post<StartMonitoringMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops GuardDuty monitoring for the specified member accounts. Use the <code>StartMonitoringMembers</code> operation to restart monitoring for those accounts.
		 * Post detector/{detectorId}/member/stop
		 * @param {string} detectorId The unique ID of the detector associated with the GuardDuty master account that is monitoring member accounts.
		 * @return {StopMonitoringMembersResponse} Success
		 */
		StopMonitoringMembers(detectorId: string, requestBody: StopMonitoringMembersPostBody): Observable<StopMonitoringMembersResponse> {
			return this.http.post<StopMonitoringMembersResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/member/stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unarchives GuardDuty findings specified by the <code>findingIds</code>.
		 * Post detector/{detectorId}/findings/unarchive
		 * @param {string} detectorId The ID of the detector associated with the findings to unarchive.
		 * @return {UnarchiveFindingsResponse} Success
		 */
		UnarchiveFindings(detectorId: string, requestBody: UnarchiveFindingsPostBody): Observable<UnarchiveFindingsResponse> {
			return this.http.post<UnarchiveFindingsResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/unarchive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from a resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) for the resource to remove tags from.
		 * @param {Array<string>} tagKeys The tag keys to remove from the resource.
		 * @return {void} 
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Marks the specified GuardDuty findings as useful or not useful.
		 * Post detector/{detectorId}/findings/feedback
		 * @param {string} detectorId The ID of the detector associated with the findings to update feedback for.
		 * @return {UpdateFindingsFeedbackResponse} Success
		 */
		UpdateFindingsFeedback(detectorId: string, requestBody: UpdateFindingsFeedbackPostBody): Observable<UpdateFindingsFeedbackResponse> {
			return this.http.post<UpdateFindingsFeedbackResponse>(this.baseUri + 'detector/' + (detectorId == null ? '' : encodeURIComponent(detectorId)) + '/findings/feedback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AcceptInvitationPostBody {

		/** The account ID of the master GuardDuty account whose invitation you're accepting. */
		masterId: string;

		/** The value that is used to validate the master account to the member account. */
		invitationId: string;
	}

	export interface ArchiveFindingsPostBody {

		/**
		 * The IDs of the findings that you want to archive.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		findingIds: Array<string>;
	}

	export interface CreateDetectorPostBody {

		/** A Boolean value that specifies whether the detector is to be enabled. */
		enable: boolean;

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string;

		/** An enum value that specifies how frequently updated findings are exported. */
		findingPublishingFrequency?: GetDetectorResponseFindingPublishingFrequency;

		/** The tags to be added to a new detector resource. */
		tags?: {[id: string]: string };
	}

	export interface CreateFilterPostBody {

		/**
		 * The name of the filter.
		 * Max length: 64
		 * Min length: 3
		 */
		name: string;

		/**
		 * The description of the filter.
		 * Max length: 512
		 * Min length: 0
		 */
		description?: string;

		/**
		 * Specifies the action that is to be applied to the findings that match the filter.
		 * Max length: 300
		 * Min length: 1
		 */
		action?: GetFilterResponseAction;

		/**
		 * Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.
		 * Minimum: 1
		 * Maximum: 100
		 */
		rank?: number;

		/** Contains information about the criteria used for querying findings. */
		findingCriteria: CreateFilterPostBodyFindingCriteria;

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string;

		/** The tags to be added to a new filter resource. */
		tags?: {[id: string]: string };
	}

	export interface CreateFilterPostBodyFindingCriteria {
		Criterion?: Criterion;
	}

	export interface CreateIPSetPostBody {

		/**
		 * <p>The user-friendly name to identify the IPSet.</p> <p> Allowed characters are alphanumerics, spaces, hyphens (-), and underscores (_).</p>
		 * Max length: 300
		 * Min length: 1
		 */
		name: string;

		/**
		 * The format of the file that contains the IPSet.
		 * Max length: 300
		 * Min length: 1
		 */
		format: GetIPSetResponseFormat;

		/**
		 * The URI of the file that contains the IPSet. For example: https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.
		 * Max length: 300
		 * Min length: 1
		 */
		location: string;

		/** A Boolean value that indicates whether GuardDuty is to start using the uploaded IPSet. */
		activate: boolean;

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string;

		/** The tags to be added to a new IP set resource. */
		tags?: {[id: string]: string };
	}

	export interface CreateMembersPostBody {

		/**
		 * A list of account ID and email address pairs of the accounts that you want to associate with the master GuardDuty account.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountDetails: Array<AccountDetail>;
	}

	export interface CreatePublishingDestinationPostBody {

		/**
		 * The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported.
		 * Max length: 300
		 * Min length: 1
		 */
		destinationType: DescribePublishingDestinationResponseDestinationType;

		/** Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings. */
		destinationProperties: CreatePublishingDestinationPostBodyDestinationProperties;

		/**
		 * The idempotency token for the request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string;
	}

	export interface CreatePublishingDestinationPostBodyDestinationProperties {
		DestinationArn?: string;
		KmsKeyArn?: string;
	}

	export interface CreateSampleFindingsPostBody {

		/**
		 * The types of sample findings to generate.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		findingTypes?: Array<string>;
	}

	export interface CreateThreatIntelSetPostBody {

		/**
		 * A user-friendly ThreatIntelSet name displayed in all findings that are generated by activity that involves IP addresses included in this ThreatIntelSet.
		 * Max length: 300
		 * Min length: 1
		 */
		name: string;

		/**
		 * The format of the file that contains the ThreatIntelSet.
		 * Max length: 300
		 * Min length: 1
		 */
		format: GetIPSetResponseFormat;

		/**
		 * The URI of the file that contains the ThreatIntelSet. For example: https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.
		 * Max length: 300
		 * Min length: 1
		 */
		location: string;

		/** A Boolean value that indicates whether GuardDuty is to start using the uploaded ThreatIntelSet. */
		activate: boolean;

		/**
		 * The idempotency token for the create request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string;

		/** The tags to be added to a new threat list resource. */
		tags?: {[id: string]: string };
	}

	export interface DeclineInvitationsPostBody {

		/**
		 * A list of account IDs of the AWS accounts that sent invitations to the current member account that you want to decline invitations from.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;
	}

	export interface UpdateDetectorPostBody {

		/** Specifies whether the detector is enabled or not enabled. */
		enable?: boolean;

		/** An enum value that specifies how frequently findings are exported, such as to CloudWatch Events. */
		findingPublishingFrequency?: GetDetectorResponseFindingPublishingFrequency;
	}

	export interface UpdateFilterPostBody {

		/**
		 * The description of the filter.
		 * Max length: 512
		 * Min length: 0
		 */
		description?: string;

		/**
		 * Specifies the action that is to be applied to the findings that match the filter.
		 * Max length: 300
		 * Min length: 1
		 */
		action?: GetFilterResponseAction;

		/**
		 * Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.
		 * Minimum: 1
		 * Maximum: 100
		 */
		rank?: number;

		/** Contains information about the criteria used for querying findings. */
		findingCriteria?: UpdateFilterPostBodyFindingCriteria;
	}

	export interface UpdateFilterPostBodyFindingCriteria {
		Criterion?: Criterion;
	}

	export interface UpdateIPSetPostBody {

		/**
		 * The unique ID that specifies the IPSet that you want to update.
		 * Max length: 300
		 * Min length: 1
		 */
		name?: string;

		/**
		 * The updated URI of the file that contains the IPSet. For example: https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.
		 * Max length: 300
		 * Min length: 1
		 */
		location?: string;

		/** The updated Boolean value that specifies whether the IPSet is active or not. */
		activate?: boolean;
	}

	export interface DeleteInvitationsPostBody {

		/**
		 * A list of account IDs of the AWS accounts that sent invitations to the current member account that you want to delete invitations from.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;
	}

	export interface DeleteMembersPostBody {

		/**
		 * A list of account IDs of the GuardDuty member accounts that you want to delete.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;
	}

	export interface UpdatePublishingDestinationPostBody {

		/** Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings. */
		destinationProperties?: UpdatePublishingDestinationPostBodyDestinationProperties;
	}

	export interface UpdatePublishingDestinationPostBodyDestinationProperties {
		DestinationArn?: string;
		KmsKeyArn?: string;
	}

	export interface UpdateThreatIntelSetPostBody {

		/**
		 * The unique ID that specifies the ThreatIntelSet that you want to update.
		 * Max length: 300
		 * Min length: 1
		 */
		name?: string;

		/**
		 * The updated URI of the file that contains the ThreateIntelSet. For example: https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.
		 * Max length: 300
		 * Min length: 1
		 */
		location?: string;

		/** The updated Boolean value that specifies whether the ThreateIntelSet is active or not. */
		activate?: boolean;
	}

	export interface UpdateOrganizationConfigurationPostBody {

		/** Indicates whether to automatically enable member accounts in the organization. */
		autoEnable: boolean;
	}

	export interface DisableOrganizationAdminAccountPostBody {

		/** The AWS Account ID for the organizations account to be disabled as a GuardDuty delegated administrator. */
		adminAccountId: string;
	}

	export interface DisassociateMembersPostBody {

		/**
		 * A list of account IDs of the GuardDuty member accounts that you want to disassociate from the master account.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;
	}

	export interface EnableOrganizationAdminAccountPostBody {

		/** The AWS Account ID for the organization account to be enabled as a GuardDuty delegated administrator. */
		adminAccountId: string;
	}

	export interface GetFindingsPostBody {

		/**
		 * The IDs of the findings that you want to retrieve.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		findingIds: Array<string>;

		/** Contains information about the criteria used for sorting findings. */
		sortCriteria?: GetFindingsPostBodySortCriteria;
	}

	export interface GetFindingsPostBodySortCriteria {
		AttributeName?: string;
		OrderBy?: OrderBy;
	}

	export interface GetFindingsStatisticsPostBody {

		/**
		 * The types of finding statistics to retrieve.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		findingStatisticTypes: Array<FindingStatisticType>;

		/** Contains information about the criteria used for querying findings. */
		findingCriteria?: GetFindingsStatisticsPostBodyFindingCriteria;
	}

	export interface GetFindingsStatisticsPostBodyFindingCriteria {
		Criterion?: Criterion;
	}

	export interface GetMembersPostBody {

		/**
		 * A list of account IDs of the GuardDuty member accounts that you want to describe.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;
	}

	export interface InviteMembersPostBody {

		/**
		 * A list of account IDs of the accounts that you want to invite to GuardDuty as members.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;

		/** A Boolean value that specifies whether you want to disable email notification to the accounts that you’re inviting to GuardDuty as members. */
		disableEmailNotification?: boolean;

		/** The invitation message that you want to send to the accounts that you’re inviting to GuardDuty as members. */
		message?: string;
	}

	export interface ListFindingsPostBody {

		/** Contains information about the criteria used for querying findings. */
		findingCriteria?: ListFindingsPostBodyFindingCriteria;

		/** Contains information about the criteria used for sorting findings. */
		sortCriteria?: ListFindingsPostBodySortCriteria;

		/**
		 * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults?: number;

		/** You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data. */
		nextToken?: string;
	}

	export interface ListFindingsPostBodyFindingCriteria {
		Criterion?: Criterion;
	}

	export interface ListFindingsPostBodySortCriteria {
		AttributeName?: string;
		OrderBy?: OrderBy;
	}

	export interface TagResourcePostBody {

		/** The tags to be added to a resource. */
		tags: {[id: string]: string };
	}

	export interface StartMonitoringMembersPostBody {

		/**
		 * A list of account IDs of the GuardDuty member accounts to start monitoring.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;
	}

	export interface StopMonitoringMembersPostBody {

		/**
		 * A list of account IDs for the member accounts to stop monitoring.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		accountIds: Array<string>;
	}

	export interface UnarchiveFindingsPostBody {

		/**
		 * The IDs of the findings to unarchive.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		findingIds: Array<string>;
	}

	export interface UpdateFindingsFeedbackPostBody {

		/**
		 * The IDs of the findings that you want to mark as useful or not useful.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		findingIds: Array<string>;

		/** The feedback for the finding. */
		feedback: Feedback;

		/** Additional feedback about the GuardDuty findings. */
		comments?: string;
	}

}

