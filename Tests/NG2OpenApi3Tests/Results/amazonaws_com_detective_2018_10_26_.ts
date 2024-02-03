import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface BatchGetGraphMemberDatasourcesResponse {
		MemberDatasources?: Array<MembershipDatasources>;
		UnprocessedAccounts?: Array<UnprocessedAccount>;
	}
	export interface BatchGetGraphMemberDatasourcesResponseFormProperties {
	}
	export function CreateBatchGetGraphMemberDatasourcesResponseFormGroup() {
		return new FormGroup<BatchGetGraphMemberDatasourcesResponseFormProperties>({
		});

	}


	/** Details on data source packages for members of the behavior graph. */
	export interface MembershipDatasources {
		AccountId?: string;
		GraphArn?: string;
		DatasourcePackageIngestHistory?: DatasourcePackageIngestHistory;
	}

	/** Details on data source packages for members of the behavior graph. */
	export interface MembershipDatasourcesFormProperties {
		AccountId: FormControl<string | null | undefined>,
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateMembershipDatasourcesFormGroup() {
		return new FormGroup<MembershipDatasourcesFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			GraphArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatasourcePackageIngestHistory {
	}
	export interface DatasourcePackageIngestHistoryFormProperties {
	}
	export function CreateDatasourcePackageIngestHistoryFormGroup() {
		return new FormGroup<DatasourcePackageIngestHistoryFormProperties>({
		});

	}


	/** A member account that was included in a request but for which the request could not be processed. */
	export interface UnprocessedAccount {
		AccountId?: string;
		Reason?: string;
	}

	/** A member account that was included in a request but for which the request could not be processed. */
	export interface UnprocessedAccountFormProperties {
		AccountId: FormControl<string | null | undefined>,
		Reason: FormControl<string | null | undefined>,
	}
	export function CreateUnprocessedAccountFormGroup() {
		return new FormGroup<UnprocessedAccountFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			Reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchGetMembershipDatasourcesResponse {
		MembershipDatasources?: Array<MembershipDatasources>;
		UnprocessedGraphs?: Array<UnprocessedGraph>;
	}
	export interface BatchGetMembershipDatasourcesResponseFormProperties {
	}
	export function CreateBatchGetMembershipDatasourcesResponseFormGroup() {
		return new FormGroup<BatchGetMembershipDatasourcesResponseFormProperties>({
		});

	}


	/** Behavior graphs that could not be processed in the request. */
	export interface UnprocessedGraph {
		GraphArn?: string;
		Reason?: string;
	}

	/** Behavior graphs that could not be processed in the request. */
	export interface UnprocessedGraphFormProperties {
		GraphArn: FormControl<string | null | undefined>,
		Reason: FormControl<string | null | undefined>,
	}
	export function CreateUnprocessedGraphFormGroup() {
		return new FormGroup<UnprocessedGraphFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined),
			Reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGraphResponse {
		GraphArn?: string;
	}
	export interface CreateGraphResponseFormProperties {
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateGraphResponseFormGroup() {
		return new FormGroup<CreateGraphResponseFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface CreateMembersResponse {
		Members?: Array<MemberDetail>;
		UnprocessedAccounts?: Array<UnprocessedAccount>;
	}
	export interface CreateMembersResponseFormProperties {
	}
	export function CreateCreateMembersResponseFormGroup() {
		return new FormGroup<CreateMembersResponseFormProperties>({
		});

	}


	/** Details about a member account in a behavior graph. */
	export interface MemberDetail {
		AccountId?: string;
		EmailAddress?: string;
		GraphArn?: string;
		MasterId?: string;
		AdministratorId?: string;
		Status?: MemberStatus;
		DisabledReason?: MemberDisabledReason;
		InvitedTime?: Date;
		UpdatedTime?: Date;
		VolumeUsageInBytes?: number | null;
		VolumeUsageUpdatedTime?: Date;
		PercentOfGraphUtilization?: number | null;
		PercentOfGraphUtilizationUpdatedTime?: Date;
		InvitationType?: InvitationType;
		VolumeUsageByDatasourcePackage?: VolumeUsageByDatasourcePackage;
		DatasourcePackageIngestStates?: DatasourcePackageIngestStates;
	}

	/** Details about a member account in a behavior graph. */
	export interface MemberDetailFormProperties {
		AccountId: FormControl<string | null | undefined>,
		EmailAddress: FormControl<string | null | undefined>,
		GraphArn: FormControl<string | null | undefined>,
		MasterId: FormControl<string | null | undefined>,
		AdministratorId: FormControl<string | null | undefined>,
		Status: FormControl<MemberStatus | null | undefined>,
		DisabledReason: FormControl<MemberDisabledReason | null | undefined>,
		InvitedTime: FormControl<Date | null | undefined>,
		UpdatedTime: FormControl<Date | null | undefined>,
		VolumeUsageInBytes: FormControl<number | null | undefined>,
		VolumeUsageUpdatedTime: FormControl<Date | null | undefined>,
		PercentOfGraphUtilization: FormControl<number | null | undefined>,
		PercentOfGraphUtilizationUpdatedTime: FormControl<Date | null | undefined>,
		InvitationType: FormControl<InvitationType | null | undefined>,
	}
	export function CreateMemberDetailFormGroup() {
		return new FormGroup<MemberDetailFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			EmailAddress: new FormControl<string | null | undefined>(undefined),
			GraphArn: new FormControl<string | null | undefined>(undefined),
			MasterId: new FormControl<string | null | undefined>(undefined),
			AdministratorId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<MemberStatus | null | undefined>(undefined),
			DisabledReason: new FormControl<MemberDisabledReason | null | undefined>(undefined),
			InvitedTime: new FormControl<Date | null | undefined>(undefined),
			UpdatedTime: new FormControl<Date | null | undefined>(undefined),
			VolumeUsageInBytes: new FormControl<number | null | undefined>(undefined),
			VolumeUsageUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			PercentOfGraphUtilization: new FormControl<number | null | undefined>(undefined),
			PercentOfGraphUtilizationUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			InvitationType: new FormControl<InvitationType | null | undefined>(undefined),
		});

	}

	export enum MemberStatus { INVITED = 'INVITED', VERIFICATION_IN_PROGRESS = 'VERIFICATION_IN_PROGRESS', VERIFICATION_FAILED = 'VERIFICATION_FAILED', ENABLED = 'ENABLED', ACCEPTED_BUT_DISABLED = 'ACCEPTED_BUT_DISABLED' }

	export enum MemberDisabledReason { VOLUME_TOO_HIGH = 'VOLUME_TOO_HIGH', VOLUME_UNKNOWN = 'VOLUME_UNKNOWN' }

	export enum InvitationType { INVITATION = 'INVITATION', ORGANIZATION = 'ORGANIZATION' }

	export interface VolumeUsageByDatasourcePackage {
	}
	export interface VolumeUsageByDatasourcePackageFormProperties {
	}
	export function CreateVolumeUsageByDatasourcePackageFormGroup() {
		return new FormGroup<VolumeUsageByDatasourcePackageFormProperties>({
		});

	}

	export interface DatasourcePackageIngestStates {
	}
	export interface DatasourcePackageIngestStatesFormProperties {
	}
	export function CreateDatasourcePackageIngestStatesFormGroup() {
		return new FormGroup<DatasourcePackageIngestStatesFormProperties>({
		});

	}


	/** An Amazon Web Services account that is the administrator account of or a member of a behavior graph. */
	export interface Account {

		/** Required */
		AccountId: string;

		/** Required */
		EmailAddress: string;
	}

	/** An Amazon Web Services account that is the administrator account of or a member of a behavior graph. */
	export interface AccountFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		EmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteMembersResponse {
		AccountIds?: Array<string>;
		UnprocessedAccounts?: Array<UnprocessedAccount>;
	}
	export interface DeleteMembersResponseFormProperties {
	}
	export function CreateDeleteMembersResponseFormGroup() {
		return new FormGroup<DeleteMembersResponseFormProperties>({
		});

	}

	export interface DescribeOrganizationConfigurationResponse {
		AutoEnable?: boolean | null;
	}
	export interface DescribeOrganizationConfigurationResponseFormProperties {
		AutoEnable: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeOrganizationConfigurationResponseFormGroup() {
		return new FormGroup<DescribeOrganizationConfigurationResponseFormProperties>({
			AutoEnable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}

	export interface GetMembersResponse {
		MemberDetails?: Array<MemberDetail>;
		UnprocessedAccounts?: Array<UnprocessedAccount>;
	}
	export interface GetMembersResponseFormProperties {
	}
	export function CreateGetMembersResponseFormGroup() {
		return new FormGroup<GetMembersResponseFormProperties>({
		});

	}

	export interface ListDatasourcePackagesResponse {
		DatasourcePackages?: DatasourcePackageIngestDetails;
		NextToken?: string;
	}
	export interface ListDatasourcePackagesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasourcePackagesResponseFormGroup() {
		return new FormGroup<ListDatasourcePackagesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatasourcePackageIngestDetails {
	}
	export interface DatasourcePackageIngestDetailsFormProperties {
	}
	export function CreateDatasourcePackageIngestDetailsFormGroup() {
		return new FormGroup<DatasourcePackageIngestDetailsFormProperties>({
		});

	}

	export interface ListGraphsResponse {
		GraphList?: Array<Graph>;
		NextToken?: string;
	}
	export interface ListGraphsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGraphsResponseFormGroup() {
		return new FormGroup<ListGraphsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A behavior graph in Detective. */
	export interface Graph {
		Arn?: string;
		CreatedTime?: Date;
	}

	/** A behavior graph in Detective. */
	export interface GraphFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateGraphFormGroup() {
		return new FormGroup<GraphFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListInvitationsResponse {
		Invitations?: Array<MemberDetail>;
		NextToken?: string;
	}
	export interface ListInvitationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInvitationsResponseFormGroup() {
		return new FormGroup<ListInvitationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMembersResponse {
		MemberDetails?: Array<MemberDetail>;
		NextToken?: string;
	}
	export interface ListMembersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMembersResponseFormGroup() {
		return new FormGroup<ListMembersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOrganizationAdminAccountsResponse {
		Administrators?: Array<Administrator>;
		NextToken?: string;
	}
	export interface ListOrganizationAdminAccountsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrganizationAdminAccountsResponseFormGroup() {
		return new FormGroup<ListOrganizationAdminAccountsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the Detective administrator account for an organization. */
	export interface Administrator {
		AccountId?: string;
		GraphArn?: string;
		DelegationTime?: Date;
	}

	/** Information about the Detective administrator account for an organization. */
	export interface AdministratorFormProperties {
		AccountId: FormControl<string | null | undefined>,
		GraphArn: FormControl<string | null | undefined>,
		DelegationTime: FormControl<Date | null | undefined>,
	}
	export function CreateAdministratorFormGroup() {
		return new FormGroup<AdministratorFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			GraphArn: new FormControl<string | null | undefined>(undefined),
			DelegationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
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

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export enum DatasourcePackage { DETECTIVE_CORE = 'DETECTIVE_CORE', EKS_AUDIT = 'EKS_AUDIT', ASFF_SECURITYHUB_FINDING = 'ASFF_SECURITYHUB_FINDING' }

	export interface AcceptInvitationRequest {

		/** Required */
		GraphArn: string;
	}
	export interface AcceptInvitationRequestFormProperties {

		/** Required */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateAcceptInvitationRequestFormGroup() {
		return new FormGroup<AcceptInvitationRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchGetGraphMemberDatasourcesRequest {

		/** Required */
		GraphArn: string;

		/** Required */
		AccountIds: Array<string>;
	}
	export interface BatchGetGraphMemberDatasourcesRequestFormProperties {

		/** Required */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetGraphMemberDatasourcesRequestFormGroup() {
		return new FormGroup<BatchGetGraphMemberDatasourcesRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchGetMembershipDatasourcesRequest {

		/** Required */
		GraphArns: Array<string>;
	}
	export interface BatchGetMembershipDatasourcesRequestFormProperties {
	}
	export function CreateBatchGetMembershipDatasourcesRequestFormGroup() {
		return new FormGroup<BatchGetMembershipDatasourcesRequestFormProperties>({
		});

	}

	export interface CreateGraphRequest {
		Tags?: TagMap;
	}
	export interface CreateGraphRequestFormProperties {
	}
	export function CreateCreateGraphRequestFormGroup() {
		return new FormGroup<CreateGraphRequestFormProperties>({
		});

	}

	export interface CreateMembersRequest {

		/** Required */
		GraphArn: string;
		Message?: string;
		DisableEmailNotification?: boolean | null;

		/** Required */
		Accounts: Array<Account>;
	}
	export interface CreateMembersRequestFormProperties {

		/** Required */
		GraphArn: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		DisableEmailNotification: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateMembersRequestFormGroup() {
		return new FormGroup<CreateMembersRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined),
			DisableEmailNotification: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DatasourcePackageIngestState { STARTED = 'STARTED', STOPPED = 'STOPPED', DISABLED = 'DISABLED' }

	export interface LastIngestStateChangeDates {
	}
	export interface LastIngestStateChangeDatesFormProperties {
	}
	export function CreateLastIngestStateChangeDatesFormGroup() {
		return new FormGroup<LastIngestStateChangeDatesFormProperties>({
		});

	}


	/** Details about the data source packages ingested by your behavior graph. */
	export interface DatasourcePackageIngestDetail {
		DatasourcePackageIngestState?: DatasourcePackageIngestState;
		LastIngestStateChange?: LastIngestStateChangeDates;
	}

	/** Details about the data source packages ingested by your behavior graph. */
	export interface DatasourcePackageIngestDetailFormProperties {
		DatasourcePackageIngestState: FormControl<DatasourcePackageIngestState | null | undefined>,
	}
	export function CreateDatasourcePackageIngestDetailFormGroup() {
		return new FormGroup<DatasourcePackageIngestDetailFormProperties>({
			DatasourcePackageIngestState: new FormControl<DatasourcePackageIngestState | null | undefined>(undefined),
		});

	}


	/** Information on the usage of a data source package in the behavior graph. */
	export interface DatasourcePackageUsageInfo {
		VolumeUsageInBytes?: number | null;
		VolumeUsageUpdateTime?: Date;
	}

	/** Information on the usage of a data source package in the behavior graph. */
	export interface DatasourcePackageUsageInfoFormProperties {
		VolumeUsageInBytes: FormControl<number | null | undefined>,
		VolumeUsageUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDatasourcePackageUsageInfoFormGroup() {
		return new FormGroup<DatasourcePackageUsageInfoFormProperties>({
			VolumeUsageInBytes: new FormControl<number | null | undefined>(undefined),
			VolumeUsageUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DeleteGraphRequest {

		/** Required */
		GraphArn: string;
	}
	export interface DeleteGraphRequestFormProperties {

		/** Required */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGraphRequestFormGroup() {
		return new FormGroup<DeleteGraphRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteMembersRequest {

		/** Required */
		GraphArn: string;

		/** Required */
		AccountIds: Array<string>;
	}
	export interface DeleteMembersRequestFormProperties {

		/** Required */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMembersRequestFormGroup() {
		return new FormGroup<DeleteMembersRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeOrganizationConfigurationRequest {

		/** Required */
		GraphArn: string;
	}
	export interface DescribeOrganizationConfigurationRequestFormProperties {

		/** Required */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrganizationConfigurationRequestFormGroup() {
		return new FormGroup<DescribeOrganizationConfigurationRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateMembershipRequest {

		/** Required */
		GraphArn: string;
	}
	export interface DisassociateMembershipRequestFormProperties {

		/** Required */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateMembershipRequestFormGroup() {
		return new FormGroup<DisassociateMembershipRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EnableOrganizationAdminAccountRequest {

		/** Required */
		AccountId: string;
	}
	export interface EnableOrganizationAdminAccountRequestFormProperties {

		/** Required */
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateEnableOrganizationAdminAccountRequestFormGroup() {
		return new FormGroup<EnableOrganizationAdminAccountRequestFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMembersRequest {

		/** Required */
		GraphArn: string;

		/** Required */
		AccountIds: Array<string>;
	}
	export interface GetMembersRequestFormProperties {

		/** Required */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateGetMembersRequestFormGroup() {
		return new FormGroup<GetMembersRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details on when data collection began for a source package. */
	export interface TimestampForCollection {
		Timestamp?: Date;
	}

	/** Details on when data collection began for a source package. */
	export interface TimestampForCollectionFormProperties {
		Timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateTimestampForCollectionFormGroup() {
		return new FormGroup<TimestampForCollectionFormProperties>({
			Timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDatasourcePackagesRequest {

		/** Required */
		GraphArn: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDatasourcePackagesRequestFormProperties {

		/** Required */
		GraphArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatasourcePackagesRequestFormGroup() {
		return new FormGroup<ListDatasourcePackagesRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListGraphsRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListGraphsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListGraphsRequestFormGroup() {
		return new FormGroup<ListGraphsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListInvitationsRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListInvitationsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListInvitationsRequestFormGroup() {
		return new FormGroup<ListInvitationsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListMembersRequest {

		/** Required */
		GraphArn: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListMembersRequestFormProperties {

		/** Required */
		GraphArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListMembersRequestFormGroup() {
		return new FormGroup<ListMembersRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListOrganizationAdminAccountsRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListOrganizationAdminAccountsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListOrganizationAdminAccountsRequestFormGroup() {
		return new FormGroup<ListOrganizationAdminAccountsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface RejectInvitationRequest {

		/** Required */
		GraphArn: string;
	}
	export interface RejectInvitationRequestFormProperties {

		/** Required */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateRejectInvitationRequestFormGroup() {
		return new FormGroup<RejectInvitationRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartMonitoringMemberRequest {

		/** Required */
		GraphArn: string;

		/** Required */
		AccountId: string;
	}
	export interface StartMonitoringMemberRequestFormProperties {

		/** Required */
		GraphArn: FormControl<string | null | undefined>,

		/** Required */
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateStartMonitoringMemberRequestFormGroup() {
		return new FormGroup<StartMonitoringMemberRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateDatasourcePackagesRequest {

		/** Required */
		GraphArn: string;

		/** Required */
		DatasourcePackages: Array<DatasourcePackage>;
	}
	export interface UpdateDatasourcePackagesRequestFormProperties {

		/** Required */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDatasourcePackagesRequestFormGroup() {
		return new FormGroup<UpdateDatasourcePackagesRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateOrganizationConfigurationRequest {

		/** Required */
		GraphArn: string;
		AutoEnable?: boolean | null;
	}
	export interface UpdateOrganizationConfigurationRequestFormProperties {

		/** Required */
		GraphArn: FormControl<string | null | undefined>,
		AutoEnable: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateOrganizationConfigurationRequestFormGroup() {
		return new FormGroup<UpdateOrganizationConfigurationRequestFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AutoEnable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Accepts an invitation for the member account to contribute data to a behavior graph. This operation can only be called by an invited member account. </p> <p>The request provides the ARN of behavior graph.</p> <p>The member account status in the graph must be <code>INVITED</code>.</p>
		 * Put invitation
		 * @return {void} Success
		 */
		AcceptInvitation(requestBody: AcceptInvitationPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'invitation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets data source package information for the behavior graph.
		 * Post graph/datasources/get
		 * @return {BatchGetGraphMemberDatasourcesResponse} Success
		 */
		BatchGetGraphMemberDatasources(requestBody: BatchGetGraphMemberDatasourcesPostBody): Observable<BatchGetGraphMemberDatasourcesResponse> {
			return this.http.post<BatchGetGraphMemberDatasourcesResponse>(this.baseUri + 'graph/datasources/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information on the data source package history for an account.
		 * Post membership/datasources/get
		 * @return {BatchGetMembershipDatasourcesResponse} Success
		 */
		BatchGetMembershipDatasources(requestBody: BatchGetMembershipDatasourcesPostBody): Observable<BatchGetMembershipDatasourcesResponse> {
			return this.http.post<BatchGetMembershipDatasourcesResponse>(this.baseUri + 'membership/datasources/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new behavior graph for the calling account, and sets that account as the administrator account. This operation is called by the account that is enabling Detective.</p> <p>Before you try to enable Detective, make sure that your account has been enrolled in Amazon GuardDuty for at least 48 hours. If you do not meet this requirement, you cannot enable Detective. If you do meet the GuardDuty prerequisite, then when you make the request to enable Detective, it checks whether your data volume is within the Detective quota. If it exceeds the quota, then you cannot enable Detective. </p> <p>The operation also enables Detective for the calling account in the currently selected Region. It returns the ARN of the new behavior graph.</p> <p> <code>CreateGraph</code> triggers a process to create the corresponding data tables for the new behavior graph.</p> <p>An account can only be the administrator account for one behavior graph within a Region. If the same account calls <code>CreateGraph</code> with the same administrator account, it always returns the same behavior graph ARN. It does not create a new behavior graph.</p>
		 * Post graph
		 * @return {CreateGraphResponse} Success
		 */
		CreateGraph(requestBody: CreateGraphPostBody): Observable<CreateGraphResponse> {
			return this.http.post<CreateGraphResponse>(this.baseUri + 'graph', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <code>CreateMembers</code> is used to send invitations to accounts. For the organization behavior graph, the Detective administrator account uses <code>CreateMembers</code> to enable organization accounts as member accounts.</p> <p>For invited accounts, <code>CreateMembers</code> sends a request to invite the specified Amazon Web Services accounts to be member accounts in the behavior graph. This operation can only be called by the administrator account for a behavior graph. </p> <p> <code>CreateMembers</code> verifies the accounts and then invites the verified accounts. The administrator can optionally specify to not send invitation emails to the member accounts. This would be used when the administrator manages their member accounts centrally.</p> <p>For organization accounts in the organization behavior graph, <code>CreateMembers</code> attempts to enable the accounts. The organization accounts do not receive invitations.</p> <p>The request provides the behavior graph ARN and the list of accounts to invite or to enable.</p> <p>The response separates the requested accounts into two lists:</p> <ul> <li> <p>The accounts that <code>CreateMembers</code> was able to process. For invited accounts, includes member accounts that are being verified, that have passed verification and are to be invited, and that have failed verification. For organization accounts in the organization behavior graph, includes accounts that can be enabled and that cannot be enabled.</p> </li> <li> <p>The accounts that <code>CreateMembers</code> was unable to process. This list includes accounts that were already invited to be member accounts in the behavior graph.</p> </li> </ul>
		 * Post graph/members
		 * @return {CreateMembersResponse} Success
		 */
		CreateMembers(requestBody: CreateMembersPostBody): Observable<CreateMembersResponse> {
			return this.http.post<CreateMembersResponse>(this.baseUri + 'graph/members', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disables the specified behavior graph and queues it to be deleted. This operation removes the behavior graph from each member account's list of behavior graphs.</p> <p> <code>DeleteGraph</code> can only be called by the administrator account for a behavior graph.</p>
		 * Post graph/removal
		 * @return {void} Success
		 */
		DeleteGraph(requestBody: DeleteGraphPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'graph/removal', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the specified member accounts from the behavior graph. The removed accounts no longer contribute data to the behavior graph. This operation can only be called by the administrator account for the behavior graph.</p> <p>For invited accounts, the removed accounts are deleted from the list of accounts in the behavior graph. To restore the account, the administrator account must send another invitation.</p> <p>For organization accounts in the organization behavior graph, the Detective administrator account can always enable the organization account again. Organization accounts that are not enabled as member accounts are not included in the <code>ListMembers</code> results for the organization behavior graph.</p> <p>An administrator account cannot use <code>DeleteMembers</code> to remove their own account from the behavior graph. To disable a behavior graph, the administrator account uses the <code>DeleteGraph</code> API method.</p>
		 * Post graph/members/removal
		 * @return {DeleteMembersResponse} Success
		 */
		DeleteMembers(requestBody: DeleteMembersPostBody): Observable<DeleteMembersResponse> {
			return this.http.post<DeleteMembersResponse>(this.baseUri + 'graph/members/removal', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the configuration for the organization behavior graph. Currently indicates whether to automatically enable new organization accounts as member accounts.</p> <p>Can only be called by the Detective administrator account for the organization. </p>
		 * Post orgs/describeOrganizationConfiguration
		 * @return {DescribeOrganizationConfigurationResponse} Success
		 */
		DescribeOrganizationConfiguration(requestBody: DescribeOrganizationConfigurationPostBody): Observable<DescribeOrganizationConfigurationResponse> {
			return this.http.post<DescribeOrganizationConfigurationResponse>(this.baseUri + 'orgs/describeOrganizationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the Detective administrator account in the current Region. Deletes the organization behavior graph.</p> <p>Can only be called by the organization management account.</p> <p>Removing the Detective administrator account does not affect the delegated administrator account for Detective in Organizations.</p> <p>To remove the delegated administrator account in Organizations, use the Organizations API. Removing the delegated administrator account also removes the Detective administrator account in all Regions, except for Regions where the Detective administrator account is the organization management account.</p>
		 * Post orgs/disableAdminAccount
		 * @return {void} Success
		 */
		DisableOrganizationAdminAccount(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'orgs/disableAdminAccount', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the member account from the specified behavior graph. This operation can only be called by an invited member account that has the <code>ENABLED</code> status.</p> <p> <code>DisassociateMembership</code> cannot be called by an organization account in the organization behavior graph. For the organization behavior graph, the Detective administrator account determines which organization accounts to enable or disable as member accounts.</p>
		 * Post membership/removal
		 * @return {void} Success
		 */
		DisassociateMembership(requestBody: DisassociateMembershipPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'membership/removal', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Designates the Detective administrator account for the organization in the current Region.</p> <p>If the account does not have Detective enabled, then enables Detective for that account and creates a new behavior graph.</p> <p>Can only be called by the organization management account.</p> <p>If the organization has a delegated administrator account in Organizations, then the Detective administrator account must be either the delegated administrator account or the organization management account.</p> <p>If the organization does not have a delegated administrator account in Organizations, then you can choose any account in the organization. If you choose an account other than the organization management account, Detective calls Organizations to make that account the delegated administrator account for Detective. The organization management account cannot be the delegated administrator account.</p>
		 * Post orgs/enableAdminAccount
		 * @return {void} Success
		 */
		EnableOrganizationAdminAccount(requestBody: EnableOrganizationAdminAccountPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'orgs/enableAdminAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the membership details for specified member accounts for a behavior graph.
		 * Post graph/members/get
		 * @return {GetMembersResponse} Success
		 */
		GetMembers(requestBody: GetMembersPostBody): Observable<GetMembersResponse> {
			return this.http.post<GetMembersResponse>(this.baseUri + 'graph/members/get', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists data source packages in the behavior graph.
		 * Post graph/datasources/list
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDatasourcePackagesResponse} Success
		 */
		ListDatasourcePackages(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDatasourcePackagesPostBody): Observable<ListDatasourcePackagesResponse> {
			return this.http.post<ListDatasourcePackagesResponse>(this.baseUri + 'graph/datasources/list?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the list of behavior graphs that the calling account is an administrator account of. This operation can only be called by an administrator account.</p> <p>Because an account can currently only be the administrator of one behavior graph within a Region, the results always contain a single behavior graph.</p>
		 * Post graphs/list
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGraphsResponse} Success
		 */
		ListGraphs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGraphsPostBody): Observable<ListGraphsResponse> {
			return this.http.post<ListGraphsResponse>(this.baseUri + 'graphs/list?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the list of open and accepted behavior graph invitations for the member account. This operation can only be called by an invited member account.</p> <p>Open invitations are invitations that the member account has not responded to.</p> <p>The results do not include behavior graphs for which the member account declined the invitation. The results also do not include behavior graphs that the member account resigned from or was removed from.</p>
		 * Post invitations/list
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInvitationsResponse} Success
		 */
		ListInvitations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListInvitationsPostBody): Observable<ListInvitationsResponse> {
			return this.http.post<ListInvitationsResponse>(this.baseUri + 'invitations/list?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the list of member accounts for a behavior graph.</p> <p>For invited accounts, the results do not include member accounts that were removed from the behavior graph.</p> <p>For the organization behavior graph, the results do not include organization accounts that the Detective administrator account has not enabled as member accounts.</p>
		 * Post graph/members/list
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMembersResponse} Success
		 */
		ListMembers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListMembersPostBody): Observable<ListMembersResponse> {
			return this.http.post<ListMembersResponse>(this.baseUri + 'graph/members/list?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the Detective administrator account for an organization. Can only be called by the organization management account.
		 * Post orgs/adminAccountslist
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOrganizationAdminAccountsResponse} Success
		 */
		ListOrganizationAdminAccounts(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListOrganizationAdminAccountsPostBody): Observable<ListOrganizationAdminAccountsResponse> {
			return this.http.post<ListOrganizationAdminAccountsResponse>(this.baseUri + 'orgs/adminAccountslist?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the tag values that are assigned to a behavior graph.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn The ARN of the behavior graph for which to retrieve the tag values.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * Applies tag values to a behavior graph.
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn The ARN of the behavior graph to assign the tags to.
		 * @return {void} 
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Rejects an invitation to contribute the account data to a behavior graph. This operation must be called by an invited member account that has the <code>INVITED</code> status.</p> <p> <code>RejectInvitation</code> cannot be called by an organization account in the organization behavior graph. In the organization behavior graph, organization accounts do not receive an invitation.</p>
		 * Post invitation/removal
		 * @return {void} Success
		 */
		RejectInvitation(requestBody: RejectInvitationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'invitation/removal', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Sends a request to enable data ingest for a member account that has a status of <code>ACCEPTED_BUT_DISABLED</code>.</p> <p>For valid member accounts, the status is updated as follows.</p> <ul> <li> <p>If Detective enabled the member account, then the new status is <code>ENABLED</code>.</p> </li> <li> <p>If Detective cannot enable the member account, the status remains <code>ACCEPTED_BUT_DISABLED</code>. </p> </li> </ul>
		 * Post graph/member/monitoringstate
		 * @return {void} Success
		 */
		StartMonitoringMember(requestBody: StartMonitoringMemberPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'graph/member/monitoringstate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes tags from a behavior graph.
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn The ARN of the behavior graph to remove the tags from.
		 * @param {Array<string>} tagKeys The tag keys of the tags to remove from the behavior graph. You can remove up to 50 tags at a time.
		 * @return {void} 
		 */
		UntagResource(ResourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts a data source packages for the behavior graph.
		 * Post graph/datasources/update
		 * @return {void} Success
		 */
		UpdateDatasourcePackages(requestBody: UpdateDatasourcePackagesPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'graph/datasources/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the configuration for the Organizations integration in the current Region. Can only be called by the Detective administrator account for the organization.
		 * Post orgs/updateOrganizationConfiguration
		 * @return {void} Success
		 */
		UpdateOrganizationConfiguration(requestBody: UpdateOrganizationConfigurationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'orgs/updateOrganizationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface AcceptInvitationPutBody {

		/**
		 * <p>The ARN of the behavior graph that the member account is accepting the invitation for.</p> <p>The member account status in the behavior graph must be <code>INVITED</code>.</p>
		 * Required
		 */
		GraphArn: string;
	}
	export interface AcceptInvitationPutBodyFormProperties {

		/**
		 * <p>The ARN of the behavior graph that the member account is accepting the invitation for.</p> <p>The member account status in the behavior graph must be <code>INVITED</code>.</p>
		 * Required
		 */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateAcceptInvitationPutBodyFormGroup() {
		return new FormGroup<AcceptInvitationPutBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$')]),
		});

	}

	export interface BatchGetGraphMemberDatasourcesPostBody {

		/**
		 * The ARN of the behavior graph.
		 * Required
		 */
		GraphArn: string;

		/**
		 * The list of Amazon Web Services accounts to get data source package information on.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		AccountIds: Array<string>;
	}
	export interface BatchGetGraphMemberDatasourcesPostBodyFormProperties {

		/**
		 * The ARN of the behavior graph.
		 * Required
		 */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetGraphMemberDatasourcesPostBodyFormGroup() {
		return new FormGroup<BatchGetGraphMemberDatasourcesPostBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$')]),
		});

	}

	export interface BatchGetMembershipDatasourcesPostBody {

		/**
		 * The ARN of the behavior graph.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		GraphArns: Array<string>;
	}
	export interface BatchGetMembershipDatasourcesPostBodyFormProperties {
	}
	export function CreateBatchGetMembershipDatasourcesPostBodyFormGroup() {
		return new FormGroup<BatchGetMembershipDatasourcesPostBodyFormProperties>({
		});

	}

	export interface CreateGraphPostBody {

		/** The tags to assign to the new behavior graph. You can add up to 50 tags. For each tag, you provide the tag key and the tag value. Each tag key can contain up to 128 characters. Each tag value can contain up to 256 characters. */
		Tags?: {[id: string]: string };
	}
	export interface CreateGraphPostBodyFormProperties {

		/** The tags to assign to the new behavior graph. You can add up to 50 tags. For each tag, you provide the tag key and the tag value. Each tag key can contain up to 128 characters. Each tag value can contain up to 256 characters. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateGraphPostBodyFormGroup() {
		return new FormGroup<CreateGraphPostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateMembersPostBody {

		/**
		 * The ARN of the behavior graph.
		 * Required
		 */
		GraphArn: string;

		/**
		 * Customized message text to include in the invitation email message to the invited member accounts.
		 * Max length: 1000
		 * Min length: 1
		 */
		Message?: string | null;

		/** <p>if set to <code>true</code>, then the invited accounts do not receive email notifications. By default, this is set to <code>false</code>, and the invited accounts receive email notifications.</p> <p>Organization accounts in the organization behavior graph do not receive email notifications.</p> */
		DisableEmailNotification?: boolean | null;

		/**
		 * The list of Amazon Web Services accounts to invite or to enable. You can invite or enable up to 50 accounts at a time. For each invited account, the account list contains the account identifier and the Amazon Web Services account root user email address. For organization accounts in the organization behavior graph, the email address is not required.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Accounts: Array<Account>;
	}
	export interface CreateMembersPostBodyFormProperties {

		/**
		 * The ARN of the behavior graph.
		 * Required
		 */
		GraphArn: FormControl<string | null | undefined>,

		/**
		 * Customized message text to include in the invitation email message to the invited member accounts.
		 * Max length: 1000
		 * Min length: 1
		 */
		Message: FormControl<string | null | undefined>,

		/** <p>if set to <code>true</code>, then the invited accounts do not receive email notifications. By default, this is set to <code>false</code>, and the invited accounts receive email notifications.</p> <p>Organization accounts in the organization behavior graph do not receive email notifications.</p> */
		DisableEmailNotification: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateMembersPostBodyFormGroup() {
		return new FormGroup<CreateMembersPostBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$')]),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000)]),
			DisableEmailNotification: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteGraphPostBody {

		/**
		 * The ARN of the behavior graph to disable.
		 * Required
		 */
		GraphArn: string;
	}
	export interface DeleteGraphPostBodyFormProperties {

		/**
		 * The ARN of the behavior graph to disable.
		 * Required
		 */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGraphPostBodyFormGroup() {
		return new FormGroup<DeleteGraphPostBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$')]),
		});

	}

	export interface DeleteMembersPostBody {

		/**
		 * The ARN of the behavior graph to remove members from.
		 * Required
		 */
		GraphArn: string;

		/**
		 * The list of Amazon Web Services account identifiers for the member accounts to remove from the behavior graph. You can remove up to 50 member accounts at a time.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		AccountIds: Array<string>;
	}
	export interface DeleteMembersPostBodyFormProperties {

		/**
		 * The ARN of the behavior graph to remove members from.
		 * Required
		 */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMembersPostBodyFormGroup() {
		return new FormGroup<DeleteMembersPostBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$')]),
		});

	}

	export interface DescribeOrganizationConfigurationPostBody {

		/**
		 * The ARN of the organization behavior graph.
		 * Required
		 */
		GraphArn: string;
	}
	export interface DescribeOrganizationConfigurationPostBodyFormProperties {

		/**
		 * The ARN of the organization behavior graph.
		 * Required
		 */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrganizationConfigurationPostBodyFormGroup() {
		return new FormGroup<DescribeOrganizationConfigurationPostBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$')]),
		});

	}

	export interface DisassociateMembershipPostBody {

		/**
		 * <p>The ARN of the behavior graph to remove the member account from.</p> <p>The member account's member status in the behavior graph must be <code>ENABLED</code>.</p>
		 * Required
		 */
		GraphArn: string;
	}
	export interface DisassociateMembershipPostBodyFormProperties {

		/**
		 * <p>The ARN of the behavior graph to remove the member account from.</p> <p>The member account's member status in the behavior graph must be <code>ENABLED</code>.</p>
		 * Required
		 */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateMembershipPostBodyFormGroup() {
		return new FormGroup<DisassociateMembershipPostBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$')]),
		});

	}

	export interface EnableOrganizationAdminAccountPostBody {

		/**
		 * The Amazon Web Services account identifier of the account to designate as the Detective administrator account for the organization.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: string;
	}
	export interface EnableOrganizationAdminAccountPostBodyFormProperties {

		/**
		 * The Amazon Web Services account identifier of the account to designate as the Detective administrator account for the organization.
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateEnableOrganizationAdminAccountPostBodyFormGroup() {
		return new FormGroup<EnableOrganizationAdminAccountPostBodyFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^[0-9]+$')]),
		});

	}

	export interface GetMembersPostBody {

		/**
		 * The ARN of the behavior graph for which to request the member details.
		 * Required
		 */
		GraphArn: string;

		/**
		 * <p>The list of Amazon Web Services account identifiers for the member account for which to return member details. You can request details for up to 50 member accounts at a time.</p> <p>You cannot use <code>GetMembers</code> to retrieve information about member accounts that were removed from the behavior graph.</p>
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		AccountIds: Array<string>;
	}
	export interface GetMembersPostBodyFormProperties {

		/**
		 * The ARN of the behavior graph for which to request the member details.
		 * Required
		 */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateGetMembersPostBodyFormGroup() {
		return new FormGroup<GetMembersPostBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$')]),
		});

	}

	export interface ListDatasourcePackagesPostBody {

		/**
		 * The ARN of the behavior graph.
		 * Required
		 */
		GraphArn: string;

		/**
		 * For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults?: number | null;
	}
	export interface ListDatasourcePackagesPostBodyFormProperties {

		/**
		 * The ARN of the behavior graph.
		 * Required
		 */
		GraphArn: FormControl<string | null | undefined>,

		/**
		 * For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatasourcePackagesPostBodyFormGroup() {
		return new FormGroup<ListDatasourcePackagesPostBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(200)]),
		});

	}

	export interface ListGraphsPostBody {

		/**
		 * For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of graphs to return at a time. The total must be less than the overall limit on the number of results to return, which is currently 200.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults?: number | null;
	}
	export interface ListGraphsPostBodyFormProperties {

		/**
		 * For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of graphs to return at a time. The total must be less than the overall limit on the number of results to return, which is currently 200.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListGraphsPostBodyFormGroup() {
		return new FormGroup<ListGraphsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(200)]),
		});

	}

	export interface ListInvitationsPostBody {

		/**
		 * For requests to retrieve the next page of results, the pagination token that was returned with the previous page of results. The initial request does not include a pagination token.
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of behavior graph invitations to return in the response. The total must be less than the overall limit on the number of results to return, which is currently 200.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults?: number | null;
	}
	export interface ListInvitationsPostBodyFormProperties {

		/**
		 * For requests to retrieve the next page of results, the pagination token that was returned with the previous page of results. The initial request does not include a pagination token.
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of behavior graph invitations to return in the response. The total must be less than the overall limit on the number of results to return, which is currently 200.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListInvitationsPostBodyFormGroup() {
		return new FormGroup<ListInvitationsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(200)]),
		});

	}

	export interface ListMembersPostBody {

		/**
		 * The ARN of the behavior graph for which to retrieve the list of member accounts.
		 * Required
		 */
		GraphArn: string;

		/**
		 * For requests to retrieve the next page of member account results, the pagination token that was returned with the previous page of results. The initial request does not include a pagination token.
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of member accounts to include in the response. The total must be less than the overall limit on the number of results to return, which is currently 200.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults?: number | null;
	}
	export interface ListMembersPostBodyFormProperties {

		/**
		 * The ARN of the behavior graph for which to retrieve the list of member accounts.
		 * Required
		 */
		GraphArn: FormControl<string | null | undefined>,

		/**
		 * For requests to retrieve the next page of member account results, the pagination token that was returned with the previous page of results. The initial request does not include a pagination token.
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of member accounts to include in the response. The total must be less than the overall limit on the number of results to return, which is currently 200.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListMembersPostBodyFormGroup() {
		return new FormGroup<ListMembersPostBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(200)]),
		});

	}

	export interface ListOrganizationAdminAccountsPostBody {

		/**
		 * For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults?: number | null;
	}
	export interface ListOrganizationAdminAccountsPostBodyFormProperties {

		/**
		 * For requests to get the next page of results, the pagination token that was returned with the previous set of results. The initial request does not include a pagination token.
		 * Max length: 1024
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListOrganizationAdminAccountsPostBodyFormGroup() {
		return new FormGroup<ListOrganizationAdminAccountsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(200)]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to assign to the behavior graph. You can add up to 50 tags. For each tag, you provide the tag key and the tag value. Each tag key can contain up to 128 characters. Each tag value can contain up to 256 characters.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to assign to the behavior graph. You can add up to 50 tags. For each tag, you provide the tag key and the tag value. Each tag key can contain up to 128 characters. Each tag value can contain up to 256 characters.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RejectInvitationPostBody {

		/**
		 * <p>The ARN of the behavior graph to reject the invitation to.</p> <p>The member account's current member status in the behavior graph must be <code>INVITED</code>.</p>
		 * Required
		 */
		GraphArn: string;
	}
	export interface RejectInvitationPostBodyFormProperties {

		/**
		 * <p>The ARN of the behavior graph to reject the invitation to.</p> <p>The member account's current member status in the behavior graph must be <code>INVITED</code>.</p>
		 * Required
		 */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateRejectInvitationPostBodyFormGroup() {
		return new FormGroup<RejectInvitationPostBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$')]),
		});

	}

	export interface StartMonitoringMemberPostBody {

		/**
		 * The ARN of the behavior graph.
		 * Required
		 */
		GraphArn: string;

		/**
		 * <p>The account ID of the member account to try to enable.</p> <p>The account must be an invited member account with a status of <code>ACCEPTED_BUT_DISABLED</code>. </p>
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: string;
	}
	export interface StartMonitoringMemberPostBodyFormProperties {

		/**
		 * The ARN of the behavior graph.
		 * Required
		 */
		GraphArn: FormControl<string | null | undefined>,

		/**
		 * <p>The account ID of the member account to try to enable.</p> <p>The account must be an invited member account with a status of <code>ACCEPTED_BUT_DISABLED</code>. </p>
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateStartMonitoringMemberPostBodyFormGroup() {
		return new FormGroup<StartMonitoringMemberPostBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$')]),
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^[0-9]+$')]),
		});

	}

	export interface UpdateDatasourcePackagesPostBody {

		/**
		 * The ARN of the behavior graph.
		 * Required
		 */
		GraphArn: string;

		/**
		 * The data source package start for the behavior graph.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		DatasourcePackages: Array<DatasourcePackage>;
	}
	export interface UpdateDatasourcePackagesPostBodyFormProperties {

		/**
		 * The ARN of the behavior graph.
		 * Required
		 */
		GraphArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDatasourcePackagesPostBodyFormGroup() {
		return new FormGroup<UpdateDatasourcePackagesPostBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$')]),
		});

	}

	export interface UpdateOrganizationConfigurationPostBody {

		/**
		 * The ARN of the organization behavior graph.
		 * Required
		 */
		GraphArn: string;

		/** Indicates whether to automatically enable new organization accounts as member accounts in the organization behavior graph. */
		AutoEnable?: boolean | null;
	}
	export interface UpdateOrganizationConfigurationPostBodyFormProperties {

		/**
		 * The ARN of the organization behavior graph.
		 * Required
		 */
		GraphArn: FormControl<string | null | undefined>,

		/** Indicates whether to automatically enable new organization accounts as member accounts in the organization behavior graph. */
		AutoEnable: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateOrganizationConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateOrganizationConfigurationPostBodyFormProperties>({
			GraphArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws[-\w]{0,10}?:detective:[-\w]{2,20}?:\d{12}?:graph:[abcdef\d]{32}?$')]),
			AutoEnable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

}

