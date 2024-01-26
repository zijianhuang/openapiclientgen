import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateAdminAccountRequest {

		/** Required */
		AdminAccount: string;
	}
	export interface AssociateAdminAccountRequestFormProperties {

		/** Required */
		AdminAccount: FormControl<string | null | undefined>,
	}
	export function CreateAssociateAdminAccountRequestFormGroup() {
		return new FormGroup<AssociateAdminAccountRequestFormProperties>({
			AdminAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface InvalidInputException {
	}
	export interface InvalidInputExceptionFormProperties {
	}
	export function CreateInvalidInputExceptionFormGroup() {
		return new FormGroup<InvalidInputExceptionFormProperties>({
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

	export interface InternalErrorException {
	}
	export interface InternalErrorExceptionFormProperties {
	}
	export function CreateInternalErrorExceptionFormGroup() {
		return new FormGroup<InternalErrorExceptionFormProperties>({
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

	export interface AssociateThirdPartyFirewallResponse {
		ThirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatus;
	}
	export interface AssociateThirdPartyFirewallResponseFormProperties {
		ThirdPartyFirewallStatus: FormControl<ThirdPartyFirewallAssociationStatus | null | undefined>,
	}
	export function CreateAssociateThirdPartyFirewallResponseFormGroup() {
		return new FormGroup<AssociateThirdPartyFirewallResponseFormProperties>({
			ThirdPartyFirewallStatus: new FormControl<ThirdPartyFirewallAssociationStatus | null | undefined>(undefined),
		});

	}

	export enum ThirdPartyFirewallAssociationStatus { ONBOARDING = 0, ONBOARD_COMPLETE = 1, OFFBOARDING = 2, OFFBOARD_COMPLETE = 3, NOT_EXIST = 4 }

	export interface AssociateThirdPartyFirewallRequest {

		/** Required */
		ThirdPartyFirewall: ThirdPartyFirewall;
	}
	export interface AssociateThirdPartyFirewallRequestFormProperties {

		/** Required */
		ThirdPartyFirewall: FormControl<ThirdPartyFirewall | null | undefined>,
	}
	export function CreateAssociateThirdPartyFirewallRequestFormGroup() {
		return new FormGroup<AssociateThirdPartyFirewallRequestFormProperties>({
			ThirdPartyFirewall: new FormControl<ThirdPartyFirewall | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ThirdPartyFirewall { PALO_ALTO_NETWORKS_CLOUD_NGFW = 0, FORTIGATE_CLOUD_NATIVE_FIREWALL = 1 }

	export interface BatchAssociateResourceResponse {

		/** Required */
		ResourceSetIdentifier: string;

		/** Required */
		FailedItems: Array<FailedItem>;
	}
	export interface BatchAssociateResourceResponseFormProperties {

		/** Required */
		ResourceSetIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateBatchAssociateResourceResponseFormGroup() {
		return new FormGroup<BatchAssociateResourceResponseFormProperties>({
			ResourceSetIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details of a resource that failed when trying to update it's association to a resource set. */
	export interface FailedItem {
		URI?: string;
		Reason?: FailedItemReason;
	}

	/** Details of a resource that failed when trying to update it's association to a resource set. */
	export interface FailedItemFormProperties {
		URI: FormControl<string | null | undefined>,
		Reason: FormControl<FailedItemReason | null | undefined>,
	}
	export function CreateFailedItemFormGroup() {
		return new FormGroup<FailedItemFormProperties>({
			URI: new FormControl<string | null | undefined>(undefined),
			Reason: new FormControl<FailedItemReason | null | undefined>(undefined),
		});

	}

	export enum FailedItemReason { NOT_VALID_ARN = 0, NOT_VALID_PARTITION = 1, NOT_VALID_REGION = 2, NOT_VALID_SERVICE = 3, NOT_VALID_RESOURCE_TYPE = 4, NOT_VALID_ACCOUNT_ID = 5 }

	export interface BatchAssociateResourceRequest {

		/** Required */
		ResourceSetIdentifier: string;

		/** Required */
		Items: Array<string>;
	}
	export interface BatchAssociateResourceRequestFormProperties {

		/** Required */
		ResourceSetIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateBatchAssociateResourceRequestFormGroup() {
		return new FormGroup<BatchAssociateResourceRequestFormProperties>({
			ResourceSetIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchDisassociateResourceResponse {

		/** Required */
		ResourceSetIdentifier: string;

		/** Required */
		FailedItems: Array<FailedItem>;
	}
	export interface BatchDisassociateResourceResponseFormProperties {

		/** Required */
		ResourceSetIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateBatchDisassociateResourceResponseFormGroup() {
		return new FormGroup<BatchDisassociateResourceResponseFormProperties>({
			ResourceSetIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchDisassociateResourceRequest {

		/** Required */
		ResourceSetIdentifier: string;

		/** Required */
		Items: Array<string>;
	}
	export interface BatchDisassociateResourceRequestFormProperties {

		/** Required */
		ResourceSetIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateBatchDisassociateResourceRequestFormGroup() {
		return new FormGroup<BatchDisassociateResourceRequestFormProperties>({
			ResourceSetIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAppsListRequest {

		/** Required */
		ListId: string;
	}
	export interface DeleteAppsListRequestFormProperties {

		/** Required */
		ListId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAppsListRequestFormGroup() {
		return new FormGroup<DeleteAppsListRequestFormProperties>({
			ListId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteNotificationChannelRequest {
	}
	export interface DeleteNotificationChannelRequestFormProperties {
	}
	export function CreateDeleteNotificationChannelRequestFormGroup() {
		return new FormGroup<DeleteNotificationChannelRequestFormProperties>({
		});

	}

	export interface DeletePolicyRequest {

		/** Required */
		PolicyId: string;
		DeleteAllPolicyResources?: boolean | null;
	}
	export interface DeletePolicyRequestFormProperties {

		/** Required */
		PolicyId: FormControl<string | null | undefined>,
		DeleteAllPolicyResources: FormControl<boolean | null | undefined>,
	}
	export function CreateDeletePolicyRequestFormGroup() {
		return new FormGroup<DeletePolicyRequestFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeleteAllPolicyResources: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteProtocolsListRequest {

		/** Required */
		ListId: string;
	}
	export interface DeleteProtocolsListRequestFormProperties {

		/** Required */
		ListId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProtocolsListRequestFormGroup() {
		return new FormGroup<DeleteProtocolsListRequestFormProperties>({
			ListId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteResourceSetRequest {

		/** Required */
		Identifier: string;
	}
	export interface DeleteResourceSetRequestFormProperties {

		/** Required */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourceSetRequestFormGroup() {
		return new FormGroup<DeleteResourceSetRequestFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateAdminAccountRequest {
	}
	export interface DisassociateAdminAccountRequestFormProperties {
	}
	export function CreateDisassociateAdminAccountRequestFormGroup() {
		return new FormGroup<DisassociateAdminAccountRequestFormProperties>({
		});

	}

	export interface DisassociateThirdPartyFirewallResponse {
		ThirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatus;
	}
	export interface DisassociateThirdPartyFirewallResponseFormProperties {
		ThirdPartyFirewallStatus: FormControl<ThirdPartyFirewallAssociationStatus | null | undefined>,
	}
	export function CreateDisassociateThirdPartyFirewallResponseFormGroup() {
		return new FormGroup<DisassociateThirdPartyFirewallResponseFormProperties>({
			ThirdPartyFirewallStatus: new FormControl<ThirdPartyFirewallAssociationStatus | null | undefined>(undefined),
		});

	}

	export interface DisassociateThirdPartyFirewallRequest {

		/** Required */
		ThirdPartyFirewall: ThirdPartyFirewall;
	}
	export interface DisassociateThirdPartyFirewallRequestFormProperties {

		/** Required */
		ThirdPartyFirewall: FormControl<ThirdPartyFirewall | null | undefined>,
	}
	export function CreateDisassociateThirdPartyFirewallRequestFormGroup() {
		return new FormGroup<DisassociateThirdPartyFirewallRequestFormProperties>({
			ThirdPartyFirewall: new FormControl<ThirdPartyFirewall | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAdminAccountResponse {
		AdminAccount?: string;
		RoleStatus?: AccountRoleStatus;
	}
	export interface GetAdminAccountResponseFormProperties {
		AdminAccount: FormControl<string | null | undefined>,
		RoleStatus: FormControl<AccountRoleStatus | null | undefined>,
	}
	export function CreateGetAdminAccountResponseFormGroup() {
		return new FormGroup<GetAdminAccountResponseFormProperties>({
			AdminAccount: new FormControl<string | null | undefined>(undefined),
			RoleStatus: new FormControl<AccountRoleStatus | null | undefined>(undefined),
		});

	}

	export enum AccountRoleStatus { READY = 0, CREATING = 1, PENDING_DELETION = 2, DELETING = 3, DELETED = 4 }

	export interface GetAdminAccountRequest {
	}
	export interface GetAdminAccountRequestFormProperties {
	}
	export function CreateGetAdminAccountRequestFormGroup() {
		return new FormGroup<GetAdminAccountRequestFormProperties>({
		});

	}

	export interface GetAdminScopeResponse {
		AdminScope?: AdminScope;
		Status?: OrganizationStatus;
	}
	export interface GetAdminScopeResponseFormProperties {
		Status: FormControl<OrganizationStatus | null | undefined>,
	}
	export function CreateGetAdminScopeResponseFormGroup() {
		return new FormGroup<GetAdminScopeResponseFormProperties>({
			Status: new FormControl<OrganizationStatus | null | undefined>(undefined),
		});

	}


	/** Defines the resources that the Firewall Manager administrator can manage. For more information about administrative scope, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-administrators.html">Managing Firewall Manager administrators</a> in the <i>Firewall Manager Developer Guide</i>. */
	export interface AdminScope {
		AccountScope?: AccountScope;
		OrganizationalUnitScope?: OrganizationalUnitScope;
		RegionScope?: RegionScope;
		PolicyTypeScope?: PolicyTypeScope;
	}

	/** Defines the resources that the Firewall Manager administrator can manage. For more information about administrative scope, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-administrators.html">Managing Firewall Manager administrators</a> in the <i>Firewall Manager Developer Guide</i>. */
	export interface AdminScopeFormProperties {
	}
	export function CreateAdminScopeFormGroup() {
		return new FormGroup<AdminScopeFormProperties>({
		});

	}


	/** Configures the accounts within the administrator's Organizations organization that the specified Firewall Manager administrator can apply policies to. */
	export interface AccountScope {
		Accounts?: Array<string>;
		AllAccountsEnabled?: boolean | null;
		ExcludeSpecifiedAccounts?: boolean | null;
	}

	/** Configures the accounts within the administrator's Organizations organization that the specified Firewall Manager administrator can apply policies to. */
	export interface AccountScopeFormProperties {
		AllAccountsEnabled: FormControl<boolean | null | undefined>,
		ExcludeSpecifiedAccounts: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountScopeFormGroup() {
		return new FormGroup<AccountScopeFormProperties>({
			AllAccountsEnabled: new FormControl<boolean | null | undefined>(undefined),
			ExcludeSpecifiedAccounts: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Defines the Organizations organizational units (OUs) that the specified Firewall Manager administrator can apply policies to. For more information about OUs in Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html">Managing organizational units (OUs) </a> in the <i>Organizations User Guide</i>. */
	export interface OrganizationalUnitScope {
		OrganizationalUnits?: Array<string>;
		AllOrganizationalUnitsEnabled?: boolean | null;
		ExcludeSpecifiedOrganizationalUnits?: boolean | null;
	}

	/** Defines the Organizations organizational units (OUs) that the specified Firewall Manager administrator can apply policies to. For more information about OUs in Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html">Managing organizational units (OUs) </a> in the <i>Organizations User Guide</i>. */
	export interface OrganizationalUnitScopeFormProperties {
		AllOrganizationalUnitsEnabled: FormControl<boolean | null | undefined>,
		ExcludeSpecifiedOrganizationalUnits: FormControl<boolean | null | undefined>,
	}
	export function CreateOrganizationalUnitScopeFormGroup() {
		return new FormGroup<OrganizationalUnitScopeFormProperties>({
			AllOrganizationalUnitsEnabled: new FormControl<boolean | null | undefined>(undefined),
			ExcludeSpecifiedOrganizationalUnits: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Defines the Amazon Web Services Regions that the specified Firewall Manager administrator can manage. */
	export interface RegionScope {
		Regions?: Array<string>;
		AllRegionsEnabled?: boolean | null;
	}

	/** Defines the Amazon Web Services Regions that the specified Firewall Manager administrator can manage. */
	export interface RegionScopeFormProperties {
		AllRegionsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateRegionScopeFormGroup() {
		return new FormGroup<RegionScopeFormProperties>({
			AllRegionsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Defines the policy types that the specified Firewall Manager administrator can manage. */
	export interface PolicyTypeScope {
		PolicyTypes?: Array<SecurityServiceType>;
		AllPolicyTypesEnabled?: boolean | null;
	}

	/** Defines the policy types that the specified Firewall Manager administrator can manage. */
	export interface PolicyTypeScopeFormProperties {
		AllPolicyTypesEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePolicyTypeScopeFormGroup() {
		return new FormGroup<PolicyTypeScopeFormProperties>({
			AllPolicyTypesEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum SecurityServiceType { WAF = 0, WAFV2 = 1, SHIELD_ADVANCED = 2, SECURITY_GROUPS_COMMON = 3, SECURITY_GROUPS_CONTENT_AUDIT = 4, SECURITY_GROUPS_USAGE_AUDIT = 5, NETWORK_FIREWALL = 6, DNS_FIREWALL = 7, THIRD_PARTY_FIREWALL = 8, IMPORT_NETWORK_FIREWALL = 9 }

	export enum OrganizationStatus { ONBOARDING = 0, ONBOARDING_COMPLETE = 1, OFFBOARDING = 2, OFFBOARDING_COMPLETE = 3 }

	export interface GetAdminScopeRequest {

		/** Required */
		AdminAccount: string;
	}
	export interface GetAdminScopeRequestFormProperties {

		/** Required */
		AdminAccount: FormControl<string | null | undefined>,
	}
	export function CreateGetAdminScopeRequestFormGroup() {
		return new FormGroup<GetAdminScopeRequestFormProperties>({
			AdminAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAppsListResponse {
		AppsList?: AppsListData;
		AppsListArn?: string;
	}
	export interface GetAppsListResponseFormProperties {
		AppsListArn: FormControl<string | null | undefined>,
	}
	export function CreateGetAppsListResponseFormGroup() {
		return new FormGroup<GetAppsListResponseFormProperties>({
			AppsListArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Firewall Manager applications list. */
	export interface AppsListData {
		ListId?: string;

		/** Required */
		ListName: string;
		ListUpdateToken?: string;
		CreateTime?: Date;
		LastUpdateTime?: Date;

		/** Required */
		AppsList: Array<App>;
		PreviousAppsList?: PreviousAppsList;
	}

	/** An Firewall Manager applications list. */
	export interface AppsListDataFormProperties {
		ListId: FormControl<string | null | undefined>,

		/** Required */
		ListName: FormControl<string | null | undefined>,
		ListUpdateToken: FormControl<string | null | undefined>,
		CreateTime: FormControl<Date | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateAppsListDataFormGroup() {
		return new FormGroup<AppsListDataFormProperties>({
			ListId: new FormControl<string | null | undefined>(undefined),
			ListName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ListUpdateToken: new FormControl<string | null | undefined>(undefined),
			CreateTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** An individual Firewall Manager application. */
	export interface App {

		/** Required */
		AppName: string;

		/** Required */
		Protocol: string;

		/** Required */
		Port: number;
	}

	/** An individual Firewall Manager application. */
	export interface AppFormProperties {

		/** Required */
		AppName: FormControl<string | null | undefined>,

		/** Required */
		Protocol: FormControl<string | null | undefined>,

		/** Required */
		Port: FormControl<number | null | undefined>,
	}
	export function CreateAppFormGroup() {
		return new FormGroup<AppFormProperties>({
			AppName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Protocol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PreviousAppsList {
	}
	export interface PreviousAppsListFormProperties {
	}
	export function CreatePreviousAppsListFormGroup() {
		return new FormGroup<PreviousAppsListFormProperties>({
		});

	}

	export interface GetAppsListRequest {

		/** Required */
		ListId: string;
		DefaultList?: boolean | null;
	}
	export interface GetAppsListRequestFormProperties {

		/** Required */
		ListId: FormControl<string | null | undefined>,
		DefaultList: FormControl<boolean | null | undefined>,
	}
	export function CreateGetAppsListRequestFormGroup() {
		return new FormGroup<GetAppsListRequestFormProperties>({
			ListId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultList: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetComplianceDetailResponse {
		PolicyComplianceDetail?: PolicyComplianceDetail;
	}
	export interface GetComplianceDetailResponseFormProperties {
	}
	export function CreateGetComplianceDetailResponseFormGroup() {
		return new FormGroup<GetComplianceDetailResponseFormProperties>({
		});

	}


	/** Describes the noncompliant resources in a member account for a specific Firewall Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are noncompliant, <code>EvaluationLimitExceeded</code> is set to <code>True</code>. */
	export interface PolicyComplianceDetail {
		PolicyOwner?: string;
		PolicyId?: string;
		MemberAccount?: string;
		Violators?: Array<ComplianceViolator>;
		EvaluationLimitExceeded?: boolean | null;
		ExpiredAt?: Date;
		IssueInfoMap?: IssueInfoMap;
	}

	/** Describes the noncompliant resources in a member account for a specific Firewall Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are noncompliant, <code>EvaluationLimitExceeded</code> is set to <code>True</code>. */
	export interface PolicyComplianceDetailFormProperties {
		PolicyOwner: FormControl<string | null | undefined>,
		PolicyId: FormControl<string | null | undefined>,
		MemberAccount: FormControl<string | null | undefined>,
		EvaluationLimitExceeded: FormControl<boolean | null | undefined>,
		ExpiredAt: FormControl<Date | null | undefined>,
	}
	export function CreatePolicyComplianceDetailFormGroup() {
		return new FormGroup<PolicyComplianceDetailFormProperties>({
			PolicyOwner: new FormControl<string | null | undefined>(undefined),
			PolicyId: new FormControl<string | null | undefined>(undefined),
			MemberAccount: new FormControl<string | null | undefined>(undefined),
			EvaluationLimitExceeded: new FormControl<boolean | null | undefined>(undefined),
			ExpiredAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Details of the resource that is not protected by the policy. */
	export interface ComplianceViolator {
		ResourceId?: string;
		ViolationReason?: ViolationReason;
		ResourceType?: string;
		Metadata?: ComplianceViolatorMetadata;
	}

	/** Details of the resource that is not protected by the policy. */
	export interface ComplianceViolatorFormProperties {
		ResourceId: FormControl<string | null | undefined>,
		ViolationReason: FormControl<ViolationReason | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateComplianceViolatorFormGroup() {
		return new FormGroup<ComplianceViolatorFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ViolationReason: new FormControl<ViolationReason | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ViolationReason { WEB_ACL_MISSING_RULE_GROUP = 0, RESOURCE_MISSING_WEB_ACL = 1, RESOURCE_INCORRECT_WEB_ACL = 2, RESOURCE_MISSING_SHIELD_PROTECTION = 3, RESOURCE_MISSING_WEB_ACL_OR_SHIELD_PROTECTION = 4, RESOURCE_MISSING_SECURITY_GROUP = 5, RESOURCE_VIOLATES_AUDIT_SECURITY_GROUP = 6, SECURITY_GROUP_UNUSED = 7, SECURITY_GROUP_REDUNDANT = 8, FMS_CREATED_SECURITY_GROUP_EDITED = 9, MISSING_FIREWALL = 10, MISSING_FIREWALL_SUBNET_IN_AZ = 11, MISSING_EXPECTED_ROUTE_TABLE = 12, NETWORK_FIREWALL_POLICY_MODIFIED = 13, FIREWALL_SUBNET_IS_OUT_OF_SCOPE = 14, INTERNET_GATEWAY_MISSING_EXPECTED_ROUTE = 15, FIREWALL_SUBNET_MISSING_EXPECTED_ROUTE = 16, UNEXPECTED_FIREWALL_ROUTES = 17, UNEXPECTED_TARGET_GATEWAY_ROUTES = 18, TRAFFIC_INSPECTION_CROSSES_AZ_BOUNDARY = 19, INVALID_ROUTE_CONFIGURATION = 20, MISSING_TARGET_GATEWAY = 21, INTERNET_TRAFFIC_NOT_INSPECTED = 22, BLACK_HOLE_ROUTE_DETECTED = 23, BLACK_HOLE_ROUTE_DETECTED_IN_FIREWALL_SUBNET = 24, RESOURCE_MISSING_DNS_FIREWALL = 25, ROUTE_HAS_OUT_OF_SCOPE_ENDPOINT = 26, FIREWALL_SUBNET_MISSING_VPCE_ENDPOINT = 27 }

	export interface ComplianceViolatorMetadata {
	}
	export interface ComplianceViolatorMetadataFormProperties {
	}
	export function CreateComplianceViolatorMetadataFormGroup() {
		return new FormGroup<ComplianceViolatorMetadataFormProperties>({
		});

	}

	export interface IssueInfoMap {
	}
	export interface IssueInfoMapFormProperties {
	}
	export function CreateIssueInfoMapFormGroup() {
		return new FormGroup<IssueInfoMapFormProperties>({
		});

	}

	export interface GetComplianceDetailRequest {

		/** Required */
		PolicyId: string;

		/** Required */
		MemberAccount: string;
	}
	export interface GetComplianceDetailRequestFormProperties {

		/** Required */
		PolicyId: FormControl<string | null | undefined>,

		/** Required */
		MemberAccount: FormControl<string | null | undefined>,
	}
	export function CreateGetComplianceDetailRequestFormGroup() {
		return new FormGroup<GetComplianceDetailRequestFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MemberAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetNotificationChannelResponse {
		SnsTopicArn?: string;
		SnsRoleName?: string;
	}
	export interface GetNotificationChannelResponseFormProperties {
		SnsTopicArn: FormControl<string | null | undefined>,
		SnsRoleName: FormControl<string | null | undefined>,
	}
	export function CreateGetNotificationChannelResponseFormGroup() {
		return new FormGroup<GetNotificationChannelResponseFormProperties>({
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			SnsRoleName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetNotificationChannelRequest {
	}
	export interface GetNotificationChannelRequestFormProperties {
	}
	export function CreateGetNotificationChannelRequestFormGroup() {
		return new FormGroup<GetNotificationChannelRequestFormProperties>({
		});

	}

	export interface GetPolicyResponse {
		Policy?: Policy;
		PolicyArn?: string;
	}
	export interface GetPolicyResponseFormProperties {
		PolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateGetPolicyResponseFormGroup() {
		return new FormGroup<GetPolicyResponseFormProperties>({
			PolicyArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Firewall Manager policy. */
	export interface Policy {
		PolicyId?: string;

		/** Required */
		PolicyName: string;
		PolicyUpdateToken?: string;

		/** Required */
		SecurityServicePolicyData: SecurityServicePolicyData;

		/** Required */
		ResourceType: string;
		ResourceTypeList?: Array<string>;
		ResourceTags?: Array<ResourceTag>;

		/** Required */
		ExcludeResourceTags: boolean;

		/** Required */
		RemediationEnabled: boolean;
		DeleteUnusedFMManagedResources?: boolean | null;
		IncludeMap?: CustomerPolicyScopeMap;
		ExcludeMap?: CustomerPolicyScopeMap;
		ResourceSetIds?: Array<string>;
		PolicyDescription?: string;
		PolicyStatus?: CustomerPolicyStatus;
	}

	/** An Firewall Manager policy. */
	export interface PolicyFormProperties {
		PolicyId: FormControl<string | null | undefined>,

		/** Required */
		PolicyName: FormControl<string | null | undefined>,
		PolicyUpdateToken: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<string | null | undefined>,

		/** Required */
		ExcludeResourceTags: FormControl<boolean | null | undefined>,

		/** Required */
		RemediationEnabled: FormControl<boolean | null | undefined>,
		DeleteUnusedFMManagedResources: FormControl<boolean | null | undefined>,
		PolicyDescription: FormControl<string | null | undefined>,
		PolicyStatus: FormControl<CustomerPolicyStatus | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyUpdateToken: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExcludeResourceTags: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			RemediationEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			DeleteUnusedFMManagedResources: new FormControl<boolean | null | undefined>(undefined),
			PolicyDescription: new FormControl<string | null | undefined>(undefined),
			PolicyStatus: new FormControl<CustomerPolicyStatus | null | undefined>(undefined),
		});

	}


	/** Details about the security service that is being used to protect the resources. */
	export interface SecurityServicePolicyData {

		/** Required */
		Type: SecurityServiceType;
		ManagedServiceData?: string;
		PolicyOption?: PolicyOption;
	}

	/** Details about the security service that is being used to protect the resources. */
	export interface SecurityServicePolicyDataFormProperties {

		/** Required */
		Type: FormControl<SecurityServiceType | null | undefined>,
		ManagedServiceData: FormControl<string | null | undefined>,
	}
	export function CreateSecurityServicePolicyDataFormGroup() {
		return new FormGroup<SecurityServicePolicyDataFormProperties>({
			Type: new FormControl<SecurityServiceType | null | undefined>(undefined, [Validators.required]),
			ManagedServiceData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the Network Firewall firewall policy options to configure the policy's deployment model and third-party firewall policy settings. */
	export interface PolicyOption {
		NetworkFirewallPolicy?: NetworkFirewallPolicy;
		ThirdPartyFirewallPolicy?: ThirdPartyFirewallPolicy;
	}

	/** Contains the Network Firewall firewall policy options to configure the policy's deployment model and third-party firewall policy settings. */
	export interface PolicyOptionFormProperties {
	}
	export function CreatePolicyOptionFormGroup() {
		return new FormGroup<PolicyOptionFormProperties>({
		});

	}


	/** Configures the firewall policy deployment model of Network Firewall. For information about Network Firewall deployment models, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/architectures.html">Network Firewall example architectures with routing</a> in the <i>Network Firewall Developer Guide</i>. */
	export interface NetworkFirewallPolicy {
		FirewallDeploymentModel?: FirewallDeploymentModel;
	}

	/** Configures the firewall policy deployment model of Network Firewall. For information about Network Firewall deployment models, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/architectures.html">Network Firewall example architectures with routing</a> in the <i>Network Firewall Developer Guide</i>. */
	export interface NetworkFirewallPolicyFormProperties {
		FirewallDeploymentModel: FormControl<FirewallDeploymentModel | null | undefined>,
	}
	export function CreateNetworkFirewallPolicyFormGroup() {
		return new FormGroup<NetworkFirewallPolicyFormProperties>({
			FirewallDeploymentModel: new FormControl<FirewallDeploymentModel | null | undefined>(undefined),
		});

	}

	export enum FirewallDeploymentModel { CENTRALIZED = 0, DISTRIBUTED = 1 }


	/** Configures the deployment model for the third-party firewall. */
	export interface ThirdPartyFirewallPolicy {
		FirewallDeploymentModel?: FirewallDeploymentModel;
	}

	/** Configures the deployment model for the third-party firewall. */
	export interface ThirdPartyFirewallPolicyFormProperties {
		FirewallDeploymentModel: FormControl<FirewallDeploymentModel | null | undefined>,
	}
	export function CreateThirdPartyFirewallPolicyFormGroup() {
		return new FormGroup<ThirdPartyFirewallPolicyFormProperties>({
			FirewallDeploymentModel: new FormControl<FirewallDeploymentModel | null | undefined>(undefined),
		});

	}


	/** The resource tags that Firewall Manager uses to determine if a particular resource should be included or excluded from the Firewall Manager policy. Tags enable you to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value. Firewall Manager combines the tags with "AND" so that, if you add more than one tag to a policy scope, a resource must have all the specified tags to be included or excluded. For more information, see <a href="https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/tag-editor.html">Working with Tag Editor</a>. */
	export interface ResourceTag {

		/** Required */
		Key: string;
		Value?: string;
	}

	/** The resource tags that Firewall Manager uses to determine if a particular resource should be included or excluded from the Firewall Manager policy. Tags enable you to categorize your Amazon Web Services resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value. Firewall Manager combines the tags with "AND" so that, if you add more than one tag to a policy scope, a resource must have all the specified tags to be included or excluded. For more information, see <a href="https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/tag-editor.html">Working with Tag Editor</a>. */
	export interface ResourceTagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateResourceTagFormGroup() {
		return new FormGroup<ResourceTagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerPolicyScopeMap {
	}
	export interface CustomerPolicyScopeMapFormProperties {
	}
	export function CreateCustomerPolicyScopeMapFormGroup() {
		return new FormGroup<CustomerPolicyScopeMapFormProperties>({
		});

	}

	export enum CustomerPolicyStatus { ACTIVE = 0, OUT_OF_ADMIN_SCOPE = 1 }

	export interface GetPolicyRequest {

		/** Required */
		PolicyId: string;
	}
	export interface GetPolicyRequestFormProperties {

		/** Required */
		PolicyId: FormControl<string | null | undefined>,
	}
	export function CreateGetPolicyRequestFormGroup() {
		return new FormGroup<GetPolicyRequestFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidTypeException {
	}
	export interface InvalidTypeExceptionFormProperties {
	}
	export function CreateInvalidTypeExceptionFormGroup() {
		return new FormGroup<InvalidTypeExceptionFormProperties>({
		});

	}

	export interface GetProtectionStatusResponse {
		AdminAccountId?: string;
		ServiceType?: SecurityServiceType;
		Data?: string;
		NextToken?: string;
	}
	export interface GetProtectionStatusResponseFormProperties {
		AdminAccountId: FormControl<string | null | undefined>,
		ServiceType: FormControl<SecurityServiceType | null | undefined>,
		Data: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetProtectionStatusResponseFormGroup() {
		return new FormGroup<GetProtectionStatusResponseFormProperties>({
			AdminAccountId: new FormControl<string | null | undefined>(undefined),
			ServiceType: new FormControl<SecurityServiceType | null | undefined>(undefined),
			Data: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetProtectionStatusRequest {

		/** Required */
		PolicyId: string;
		MemberAccountId?: string;
		StartTime?: Date;
		EndTime?: Date;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetProtectionStatusRequestFormProperties {

		/** Required */
		PolicyId: FormControl<string | null | undefined>,
		MemberAccountId: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetProtectionStatusRequestFormGroup() {
		return new FormGroup<GetProtectionStatusRequestFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MemberAccountId: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetProtocolsListResponse {
		ProtocolsList?: ProtocolsListData;
		ProtocolsListArn?: string;
	}
	export interface GetProtocolsListResponseFormProperties {
		ProtocolsListArn: FormControl<string | null | undefined>,
	}
	export function CreateGetProtocolsListResponseFormGroup() {
		return new FormGroup<GetProtocolsListResponseFormProperties>({
			ProtocolsListArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Firewall Manager protocols list. */
	export interface ProtocolsListData {
		ListId?: string;

		/** Required */
		ListName: string;
		ListUpdateToken?: string;
		CreateTime?: Date;
		LastUpdateTime?: Date;

		/** Required */
		ProtocolsList: Array<string>;
		PreviousProtocolsList?: PreviousProtocolsList;
	}

	/** An Firewall Manager protocols list. */
	export interface ProtocolsListDataFormProperties {
		ListId: FormControl<string | null | undefined>,

		/** Required */
		ListName: FormControl<string | null | undefined>,
		ListUpdateToken: FormControl<string | null | undefined>,
		CreateTime: FormControl<Date | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateProtocolsListDataFormGroup() {
		return new FormGroup<ProtocolsListDataFormProperties>({
			ListId: new FormControl<string | null | undefined>(undefined),
			ListName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ListUpdateToken: new FormControl<string | null | undefined>(undefined),
			CreateTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PreviousProtocolsList {
	}
	export interface PreviousProtocolsListFormProperties {
	}
	export function CreatePreviousProtocolsListFormGroup() {
		return new FormGroup<PreviousProtocolsListFormProperties>({
		});

	}

	export interface GetProtocolsListRequest {

		/** Required */
		ListId: string;
		DefaultList?: boolean | null;
	}
	export interface GetProtocolsListRequestFormProperties {

		/** Required */
		ListId: FormControl<string | null | undefined>,
		DefaultList: FormControl<boolean | null | undefined>,
	}
	export function CreateGetProtocolsListRequestFormGroup() {
		return new FormGroup<GetProtocolsListRequestFormProperties>({
			ListId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultList: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetResourceSetResponse {

		/** Required */
		ResourceSet: ResourceSet;

		/** Required */
		ResourceSetArn: string;
	}
	export interface GetResourceSetResponseFormProperties {

		/** Required */
		ResourceSetArn: FormControl<string | null | undefined>,
	}
	export function CreateGetResourceSetResponseFormGroup() {
		return new FormGroup<GetResourceSetResponseFormProperties>({
			ResourceSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A set of resources to include in a policy. */
	export interface ResourceSet {
		Id?: string;

		/** Required */
		Name: string;
		Description?: string;
		UpdateToken?: string;

		/** Required */
		ResourceTypeList: Array<string>;
		LastUpdateTime?: Date;
		ResourceSetStatus?: CustomerPolicyStatus;
	}

	/** A set of resources to include in a policy. */
	export interface ResourceSetFormProperties {
		Id: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		UpdateToken: FormControl<string | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
		ResourceSetStatus: FormControl<CustomerPolicyStatus | null | undefined>,
	}
	export function CreateResourceSetFormGroup() {
		return new FormGroup<ResourceSetFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			UpdateToken: new FormControl<string | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			ResourceSetStatus: new FormControl<CustomerPolicyStatus | null | undefined>(undefined),
		});

	}

	export interface GetResourceSetRequest {

		/** Required */
		Identifier: string;
	}
	export interface GetResourceSetRequestFormProperties {

		/** Required */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateGetResourceSetRequestFormGroup() {
		return new FormGroup<GetResourceSetRequestFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetThirdPartyFirewallAssociationStatusResponse {
		ThirdPartyFirewallStatus?: ThirdPartyFirewallAssociationStatus;
		MarketplaceOnboardingStatus?: MarketplaceSubscriptionOnboardingStatus;
	}
	export interface GetThirdPartyFirewallAssociationStatusResponseFormProperties {
		ThirdPartyFirewallStatus: FormControl<ThirdPartyFirewallAssociationStatus | null | undefined>,
		MarketplaceOnboardingStatus: FormControl<MarketplaceSubscriptionOnboardingStatus | null | undefined>,
	}
	export function CreateGetThirdPartyFirewallAssociationStatusResponseFormGroup() {
		return new FormGroup<GetThirdPartyFirewallAssociationStatusResponseFormProperties>({
			ThirdPartyFirewallStatus: new FormControl<ThirdPartyFirewallAssociationStatus | null | undefined>(undefined),
			MarketplaceOnboardingStatus: new FormControl<MarketplaceSubscriptionOnboardingStatus | null | undefined>(undefined),
		});

	}

	export enum MarketplaceSubscriptionOnboardingStatus { NO_SUBSCRIPTION = 0, NOT_COMPLETE = 1, COMPLETE = 2 }

	export interface GetThirdPartyFirewallAssociationStatusRequest {

		/** Required */
		ThirdPartyFirewall: ThirdPartyFirewall;
	}
	export interface GetThirdPartyFirewallAssociationStatusRequestFormProperties {

		/** Required */
		ThirdPartyFirewall: FormControl<ThirdPartyFirewall | null | undefined>,
	}
	export function CreateGetThirdPartyFirewallAssociationStatusRequestFormGroup() {
		return new FormGroup<GetThirdPartyFirewallAssociationStatusRequestFormProperties>({
			ThirdPartyFirewall: new FormControl<ThirdPartyFirewall | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetViolationDetailsResponse {
		ViolationDetail?: ViolationDetail;
	}
	export interface GetViolationDetailsResponseFormProperties {
	}
	export function CreateGetViolationDetailsResponseFormGroup() {
		return new FormGroup<GetViolationDetailsResponseFormProperties>({
		});

	}


	/** Violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account. */
	export interface ViolationDetail {

		/** Required */
		PolicyId: string;

		/** Required */
		MemberAccount: string;

		/** Required */
		ResourceId: string;

		/** Required */
		ResourceType: string;

		/** Required */
		ResourceViolations: Array<ResourceViolation>;
		ResourceTags?: Array<Tag>;
		ResourceDescription?: string;
	}

	/** Violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account. */
	export interface ViolationDetailFormProperties {

		/** Required */
		PolicyId: FormControl<string | null | undefined>,

		/** Required */
		MemberAccount: FormControl<string | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<string | null | undefined>,
		ResourceDescription: FormControl<string | null | undefined>,
	}
	export function CreateViolationDetailFormGroup() {
		return new FormGroup<ViolationDetailFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MemberAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Violation detail based on resource type. */
	export interface ResourceViolation {
		AwsVPCSecurityGroupViolation?: AwsVPCSecurityGroupViolation;
		AwsEc2NetworkInterfaceViolation?: AwsEc2NetworkInterfaceViolation;
		AwsEc2InstanceViolation?: AwsEc2InstanceViolation;
		NetworkFirewallMissingFirewallViolation?: NetworkFirewallMissingFirewallViolation;
		NetworkFirewallMissingSubnetViolation?: NetworkFirewallMissingSubnetViolation;
		NetworkFirewallMissingExpectedRTViolation?: NetworkFirewallMissingExpectedRTViolation;
		NetworkFirewallPolicyModifiedViolation?: NetworkFirewallPolicyModifiedViolation;
		NetworkFirewallInternetTrafficNotInspectedViolation?: NetworkFirewallInternetTrafficNotInspectedViolation;
		NetworkFirewallInvalidRouteConfigurationViolation?: NetworkFirewallInvalidRouteConfigurationViolation;

		/** Violation detail for an internet gateway route with an inactive state in the customer subnet route table or Network Firewall subnet route table. */
		NetworkFirewallBlackHoleRouteDetectedViolation?: NetworkFirewallBlackHoleRouteDetectedViolation;
		NetworkFirewallUnexpectedFirewallRoutesViolation?: NetworkFirewallUnexpectedFirewallRoutesViolation;
		NetworkFirewallUnexpectedGatewayRoutesViolation?: NetworkFirewallUnexpectedGatewayRoutesViolation;
		NetworkFirewallMissingExpectedRoutesViolation?: NetworkFirewallMissingExpectedRoutesViolation;
		DnsRuleGroupPriorityConflictViolation?: DnsRuleGroupPriorityConflictViolation;
		DnsDuplicateRuleGroupViolation?: DnsDuplicateRuleGroupViolation;
		DnsRuleGroupLimitExceededViolation?: DnsRuleGroupLimitExceededViolation;
		PossibleRemediationActions?: PossibleRemediationActions;
		FirewallSubnetIsOutOfScopeViolation?: FirewallSubnetIsOutOfScopeViolation;
		RouteHasOutOfScopeEndpointViolation?: RouteHasOutOfScopeEndpointViolation;
		ThirdPartyFirewallMissingFirewallViolation?: ThirdPartyFirewallMissingFirewallViolation;
		ThirdPartyFirewallMissingSubnetViolation?: ThirdPartyFirewallMissingSubnetViolation;
		ThirdPartyFirewallMissingExpectedRouteTableViolation?: ThirdPartyFirewallMissingExpectedRouteTableViolation;
		FirewallSubnetMissingVPCEndpointViolation?: FirewallSubnetMissingVPCEndpointViolation;
	}

	/** Violation detail based on resource type. */
	export interface ResourceViolationFormProperties {
	}
	export function CreateResourceViolationFormGroup() {
		return new FormGroup<ResourceViolationFormProperties>({
		});

	}


	/** Violation detail for the rule violation in a security group when compared to the primary security group of the Firewall Manager policy. */
	export interface AwsVPCSecurityGroupViolation {
		ViolationTarget?: string;
		ViolationTargetDescription?: string;
		PartialMatches?: Array<PartialMatch>;
		PossibleSecurityGroupRemediationActions?: Array<SecurityGroupRemediationAction>;
	}

	/** Violation detail for the rule violation in a security group when compared to the primary security group of the Firewall Manager policy. */
	export interface AwsVPCSecurityGroupViolationFormProperties {
		ViolationTarget: FormControl<string | null | undefined>,
		ViolationTargetDescription: FormControl<string | null | undefined>,
	}
	export function CreateAwsVPCSecurityGroupViolationFormGroup() {
		return new FormGroup<AwsVPCSecurityGroupViolationFormProperties>({
			ViolationTarget: new FormControl<string | null | undefined>(undefined),
			ViolationTargetDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The reference rule that partially matches the <code>ViolationTarget</code> rule and violation reason. */
	export interface PartialMatch {
		Reference?: string;
		TargetViolationReasons?: Array<string>;
	}

	/** The reference rule that partially matches the <code>ViolationTarget</code> rule and violation reason. */
	export interface PartialMatchFormProperties {
		Reference: FormControl<string | null | undefined>,
	}
	export function CreatePartialMatchFormGroup() {
		return new FormGroup<PartialMatchFormProperties>({
			Reference: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Remediation option for the rule specified in the <code>ViolationTarget</code>. */
	export interface SecurityGroupRemediationAction {
		RemediationActionType?: RemediationActionType;
		Description?: string;
		RemediationResult?: SecurityGroupRuleDescription;
		IsDefaultAction?: boolean | null;
	}

	/** Remediation option for the rule specified in the <code>ViolationTarget</code>. */
	export interface SecurityGroupRemediationActionFormProperties {
		RemediationActionType: FormControl<RemediationActionType | null | undefined>,
		Description: FormControl<string | null | undefined>,
		IsDefaultAction: FormControl<boolean | null | undefined>,
	}
	export function CreateSecurityGroupRemediationActionFormGroup() {
		return new FormGroup<SecurityGroupRemediationActionFormProperties>({
			RemediationActionType: new FormControl<RemediationActionType | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			IsDefaultAction: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum RemediationActionType { REMOVE = 0, MODIFY = 1 }


	/** Describes a set of permissions for a security group rule. */
	export interface SecurityGroupRuleDescription {
		IPV4Range?: string;
		IPV6Range?: string;
		PrefixListId?: string;
		Protocol?: string;
		FromPort?: number | null;
		ToPort?: number | null;
	}

	/** Describes a set of permissions for a security group rule. */
	export interface SecurityGroupRuleDescriptionFormProperties {
		IPV4Range: FormControl<string | null | undefined>,
		IPV6Range: FormControl<string | null | undefined>,
		PrefixListId: FormControl<string | null | undefined>,
		Protocol: FormControl<string | null | undefined>,
		FromPort: FormControl<number | null | undefined>,
		ToPort: FormControl<number | null | undefined>,
	}
	export function CreateSecurityGroupRuleDescriptionFormGroup() {
		return new FormGroup<SecurityGroupRuleDescriptionFormProperties>({
			IPV4Range: new FormControl<string | null | undefined>(undefined),
			IPV6Range: new FormControl<string | null | undefined>(undefined),
			PrefixListId: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<string | null | undefined>(undefined),
			FromPort: new FormControl<number | null | undefined>(undefined),
			ToPort: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Violation detail for network interfaces associated with an EC2 instance. */
	export interface AwsEc2NetworkInterfaceViolation {
		ViolationTarget?: string;
		ViolatingSecurityGroups?: Array<string>;
	}

	/** Violation detail for network interfaces associated with an EC2 instance. */
	export interface AwsEc2NetworkInterfaceViolationFormProperties {
		ViolationTarget: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2NetworkInterfaceViolationFormGroup() {
		return new FormGroup<AwsEc2NetworkInterfaceViolationFormProperties>({
			ViolationTarget: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Violation detail for an EC2 instance resource. */
	export interface AwsEc2InstanceViolation {
		ViolationTarget?: string;
		AwsEc2NetworkInterfaceViolations?: Array<AwsEc2NetworkInterfaceViolation>;
	}

	/** Violation detail for an EC2 instance resource. */
	export interface AwsEc2InstanceViolationFormProperties {
		ViolationTarget: FormControl<string | null | undefined>,
	}
	export function CreateAwsEc2InstanceViolationFormGroup() {
		return new FormGroup<AwsEc2InstanceViolationFormProperties>({
			ViolationTarget: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Violation detail for Network Firewall for a subnet that doesn't have a Firewall Manager managed firewall in its VPC.  */
	export interface NetworkFirewallMissingFirewallViolation {
		ViolationTarget?: string;
		VPC?: string;
		AvailabilityZone?: string;
		TargetViolationReason?: string;
	}

	/** Violation detail for Network Firewall for a subnet that doesn't have a Firewall Manager managed firewall in its VPC.  */
	export interface NetworkFirewallMissingFirewallViolationFormProperties {
		ViolationTarget: FormControl<string | null | undefined>,
		VPC: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		TargetViolationReason: FormControl<string | null | undefined>,
	}
	export function CreateNetworkFirewallMissingFirewallViolationFormGroup() {
		return new FormGroup<NetworkFirewallMissingFirewallViolationFormProperties>({
			ViolationTarget: new FormControl<string | null | undefined>(undefined),
			VPC: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			TargetViolationReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Violation detail for Network Firewall for an Availability Zone that's missing the expected Firewall Manager managed subnet. */
	export interface NetworkFirewallMissingSubnetViolation {
		ViolationTarget?: string;
		VPC?: string;
		AvailabilityZone?: string;
		TargetViolationReason?: string;
	}

	/** Violation detail for Network Firewall for an Availability Zone that's missing the expected Firewall Manager managed subnet. */
	export interface NetworkFirewallMissingSubnetViolationFormProperties {
		ViolationTarget: FormControl<string | null | undefined>,
		VPC: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		TargetViolationReason: FormControl<string | null | undefined>,
	}
	export function CreateNetworkFirewallMissingSubnetViolationFormGroup() {
		return new FormGroup<NetworkFirewallMissingSubnetViolationFormProperties>({
			ViolationTarget: new FormControl<string | null | undefined>(undefined),
			VPC: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			TargetViolationReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Violation detail for Network Firewall for a subnet that's not associated to the expected Firewall Manager managed route table. */
	export interface NetworkFirewallMissingExpectedRTViolation {
		ViolationTarget?: string;
		VPC?: string;
		AvailabilityZone?: string;
		CurrentRouteTable?: string;
		ExpectedRouteTable?: string;
	}

	/** Violation detail for Network Firewall for a subnet that's not associated to the expected Firewall Manager managed route table. */
	export interface NetworkFirewallMissingExpectedRTViolationFormProperties {
		ViolationTarget: FormControl<string | null | undefined>,
		VPC: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		CurrentRouteTable: FormControl<string | null | undefined>,
		ExpectedRouteTable: FormControl<string | null | undefined>,
	}
	export function CreateNetworkFirewallMissingExpectedRTViolationFormGroup() {
		return new FormGroup<NetworkFirewallMissingExpectedRTViolationFormProperties>({
			ViolationTarget: new FormControl<string | null | undefined>(undefined),
			VPC: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			CurrentRouteTable: new FormControl<string | null | undefined>(undefined),
			ExpectedRouteTable: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Violation detail for Network Firewall for a firewall policy that has a different <a>NetworkFirewallPolicyDescription</a> than is required by the Firewall Manager policy.  */
	export interface NetworkFirewallPolicyModifiedViolation {
		ViolationTarget?: string;
		CurrentPolicyDescription?: NetworkFirewallPolicyDescription;
		ExpectedPolicyDescription?: NetworkFirewallPolicyDescription;
	}

	/** Violation detail for Network Firewall for a firewall policy that has a different <a>NetworkFirewallPolicyDescription</a> than is required by the Firewall Manager policy.  */
	export interface NetworkFirewallPolicyModifiedViolationFormProperties {
		ViolationTarget: FormControl<string | null | undefined>,
	}
	export function CreateNetworkFirewallPolicyModifiedViolationFormGroup() {
		return new FormGroup<NetworkFirewallPolicyModifiedViolationFormProperties>({
			ViolationTarget: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The definition of the Network Firewall firewall policy. */
	export interface NetworkFirewallPolicyDescription {
		StatelessRuleGroups?: Array<StatelessRuleGroup>;
		StatelessDefaultActions?: Array<string>;
		StatelessFragmentDefaultActions?: Array<string>;
		StatelessCustomActions?: Array<string>;
		StatefulRuleGroups?: Array<StatefulRuleGroup>;
		StatefulDefaultActions?: Array<string>;
		StatefulEngineOptions?: StatefulEngineOptions;
	}

	/** The definition of the Network Firewall firewall policy. */
	export interface NetworkFirewallPolicyDescriptionFormProperties {
	}
	export function CreateNetworkFirewallPolicyDescriptionFormGroup() {
		return new FormGroup<NetworkFirewallPolicyDescriptionFormProperties>({
		});

	}


	/** Network Firewall stateless rule group, used in a <a>NetworkFirewallPolicyDescription</a>.  */
	export interface StatelessRuleGroup {
		RuleGroupName?: string;
		ResourceId?: string;
		Priority?: number | null;
	}

	/** Network Firewall stateless rule group, used in a <a>NetworkFirewallPolicyDescription</a>.  */
	export interface StatelessRuleGroupFormProperties {
		RuleGroupName: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
	}
	export function CreateStatelessRuleGroupFormGroup() {
		return new FormGroup<StatelessRuleGroupFormProperties>({
			RuleGroupName: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Network Firewall stateful rule group, used in a <a>NetworkFirewallPolicyDescription</a>.  */
	export interface StatefulRuleGroup {
		RuleGroupName?: string;
		ResourceId?: string;
		Priority?: number | null;
		Override?: NetworkFirewallStatefulRuleGroupOverride;
	}

	/** Network Firewall stateful rule group, used in a <a>NetworkFirewallPolicyDescription</a>.  */
	export interface StatefulRuleGroupFormProperties {
		RuleGroupName: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
	}
	export function CreateStatefulRuleGroupFormGroup() {
		return new FormGroup<StatefulRuleGroupFormProperties>({
			RuleGroupName: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The setting that allows the policy owner to change the behavior of the rule group within a policy. */
	export interface NetworkFirewallStatefulRuleGroupOverride {
		Action?: NetworkFirewallOverrideAction;
	}

	/** The setting that allows the policy owner to change the behavior of the rule group within a policy. */
	export interface NetworkFirewallStatefulRuleGroupOverrideFormProperties {
		Action: FormControl<NetworkFirewallOverrideAction | null | undefined>,
	}
	export function CreateNetworkFirewallStatefulRuleGroupOverrideFormGroup() {
		return new FormGroup<NetworkFirewallStatefulRuleGroupOverrideFormProperties>({
			Action: new FormControl<NetworkFirewallOverrideAction | null | undefined>(undefined),
		});

	}

	export enum NetworkFirewallOverrideAction { DROP_TO_ALERT = 0 }


	/** Configuration settings for the handling of the stateful rule groups in a Network Firewall firewall policy. */
	export interface StatefulEngineOptions {
		RuleOrder?: RuleOrder;
	}

	/** Configuration settings for the handling of the stateful rule groups in a Network Firewall firewall policy. */
	export interface StatefulEngineOptionsFormProperties {
		RuleOrder: FormControl<RuleOrder | null | undefined>,
	}
	export function CreateStatefulEngineOptionsFormGroup() {
		return new FormGroup<StatefulEngineOptionsFormProperties>({
			RuleOrder: new FormControl<RuleOrder | null | undefined>(undefined),
		});

	}

	export enum RuleOrder { STRICT_ORDER = 0, DEFAULT_ACTION_ORDER = 1 }


	/** Violation detail for the subnet for which internet traffic that hasn't been inspected. */
	export interface NetworkFirewallInternetTrafficNotInspectedViolation {
		SubnetId?: string;
		SubnetAvailabilityZone?: string;
		RouteTableId?: string;
		ViolatingRoutes?: Array<Route>;
		IsRouteTableUsedInDifferentAZ?: boolean | null;
		CurrentFirewallSubnetRouteTable?: string;
		ExpectedFirewallEndpoint?: string;
		FirewallSubnetId?: string;
		ExpectedFirewallSubnetRoutes?: Array<ExpectedRoute>;
		ActualFirewallSubnetRoutes?: Array<Route>;
		InternetGatewayId?: string;
		CurrentInternetGatewayRouteTable?: string;
		ExpectedInternetGatewayRoutes?: Array<ExpectedRoute>;
		ActualInternetGatewayRoutes?: Array<Route>;
		VpcId?: string;
	}

	/** Violation detail for the subnet for which internet traffic that hasn't been inspected. */
	export interface NetworkFirewallInternetTrafficNotInspectedViolationFormProperties {
		SubnetId: FormControl<string | null | undefined>,
		SubnetAvailabilityZone: FormControl<string | null | undefined>,
		RouteTableId: FormControl<string | null | undefined>,
		IsRouteTableUsedInDifferentAZ: FormControl<boolean | null | undefined>,
		CurrentFirewallSubnetRouteTable: FormControl<string | null | undefined>,
		ExpectedFirewallEndpoint: FormControl<string | null | undefined>,
		FirewallSubnetId: FormControl<string | null | undefined>,
		InternetGatewayId: FormControl<string | null | undefined>,
		CurrentInternetGatewayRouteTable: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkFirewallInternetTrafficNotInspectedViolationFormGroup() {
		return new FormGroup<NetworkFirewallInternetTrafficNotInspectedViolationFormProperties>({
			SubnetId: new FormControl<string | null | undefined>(undefined),
			SubnetAvailabilityZone: new FormControl<string | null | undefined>(undefined),
			RouteTableId: new FormControl<string | null | undefined>(undefined),
			IsRouteTableUsedInDifferentAZ: new FormControl<boolean | null | undefined>(undefined),
			CurrentFirewallSubnetRouteTable: new FormControl<string | null | undefined>(undefined),
			ExpectedFirewallEndpoint: new FormControl<string | null | undefined>(undefined),
			FirewallSubnetId: new FormControl<string | null | undefined>(undefined),
			InternetGatewayId: new FormControl<string | null | undefined>(undefined),
			CurrentInternetGatewayRouteTable: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a route in a route table. */
	export interface Route {
		DestinationType?: DestinationType;
		TargetType?: TargetType;
		Destination?: string;
		Target?: string;
	}

	/** Describes a route in a route table. */
	export interface RouteFormProperties {
		DestinationType: FormControl<DestinationType | null | undefined>,
		TargetType: FormControl<TargetType | null | undefined>,
		Destination: FormControl<string | null | undefined>,
		Target: FormControl<string | null | undefined>,
	}
	export function CreateRouteFormGroup() {
		return new FormGroup<RouteFormProperties>({
			DestinationType: new FormControl<DestinationType | null | undefined>(undefined),
			TargetType: new FormControl<TargetType | null | undefined>(undefined),
			Destination: new FormControl<string | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DestinationType { IPV4 = 0, IPV6 = 1, PREFIX_LIST = 2 }

	export enum TargetType { GATEWAY = 0, CARRIER_GATEWAY = 1, INSTANCE = 2, LOCAL_GATEWAY = 3, NAT_GATEWAY = 4, NETWORK_INTERFACE = 5, VPC_ENDPOINT = 6, VPC_PEERING_CONNECTION = 7, EGRESS_ONLY_INTERNET_GATEWAY = 8, TRANSIT_GATEWAY = 9 }


	/** Information about the expected route in the route table. */
	export interface ExpectedRoute {
		IpV4Cidr?: string;
		PrefixListId?: string;
		IpV6Cidr?: string;
		ContributingSubnets?: Array<string>;
		AllowedTargets?: Array<string>;
		RouteTableId?: string;
	}

	/** Information about the expected route in the route table. */
	export interface ExpectedRouteFormProperties {
		IpV4Cidr: FormControl<string | null | undefined>,
		PrefixListId: FormControl<string | null | undefined>,
		IpV6Cidr: FormControl<string | null | undefined>,
		RouteTableId: FormControl<string | null | undefined>,
	}
	export function CreateExpectedRouteFormGroup() {
		return new FormGroup<ExpectedRouteFormProperties>({
			IpV4Cidr: new FormControl<string | null | undefined>(undefined),
			PrefixListId: new FormControl<string | null | undefined>(undefined),
			IpV6Cidr: new FormControl<string | null | undefined>(undefined),
			RouteTableId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Violation detail for the improperly configured subnet route. It's possible there is a missing route table route, or a configuration that causes traffic to cross an Availability Zone boundary. */
	export interface NetworkFirewallInvalidRouteConfigurationViolation {
		AffectedSubnets?: Array<string>;
		RouteTableId?: string;
		IsRouteTableUsedInDifferentAZ?: boolean | null;
		ViolatingRoute?: Route;
		CurrentFirewallSubnetRouteTable?: string;
		ExpectedFirewallEndpoint?: string;
		ActualFirewallEndpoint?: string;
		ExpectedFirewallSubnetId?: string;
		ActualFirewallSubnetId?: string;
		ExpectedFirewallSubnetRoutes?: Array<ExpectedRoute>;
		ActualFirewallSubnetRoutes?: Array<Route>;
		InternetGatewayId?: string;
		CurrentInternetGatewayRouteTable?: string;
		ExpectedInternetGatewayRoutes?: Array<ExpectedRoute>;
		ActualInternetGatewayRoutes?: Array<Route>;
		VpcId?: string;
	}

	/** Violation detail for the improperly configured subnet route. It's possible there is a missing route table route, or a configuration that causes traffic to cross an Availability Zone boundary. */
	export interface NetworkFirewallInvalidRouteConfigurationViolationFormProperties {
		RouteTableId: FormControl<string | null | undefined>,
		IsRouteTableUsedInDifferentAZ: FormControl<boolean | null | undefined>,
		CurrentFirewallSubnetRouteTable: FormControl<string | null | undefined>,
		ExpectedFirewallEndpoint: FormControl<string | null | undefined>,
		ActualFirewallEndpoint: FormControl<string | null | undefined>,
		ExpectedFirewallSubnetId: FormControl<string | null | undefined>,
		ActualFirewallSubnetId: FormControl<string | null | undefined>,
		InternetGatewayId: FormControl<string | null | undefined>,
		CurrentInternetGatewayRouteTable: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkFirewallInvalidRouteConfigurationViolationFormGroup() {
		return new FormGroup<NetworkFirewallInvalidRouteConfigurationViolationFormProperties>({
			RouteTableId: new FormControl<string | null | undefined>(undefined),
			IsRouteTableUsedInDifferentAZ: new FormControl<boolean | null | undefined>(undefined),
			CurrentFirewallSubnetRouteTable: new FormControl<string | null | undefined>(undefined),
			ExpectedFirewallEndpoint: new FormControl<string | null | undefined>(undefined),
			ActualFirewallEndpoint: new FormControl<string | null | undefined>(undefined),
			ExpectedFirewallSubnetId: new FormControl<string | null | undefined>(undefined),
			ActualFirewallSubnetId: new FormControl<string | null | undefined>(undefined),
			InternetGatewayId: new FormControl<string | null | undefined>(undefined),
			CurrentInternetGatewayRouteTable: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Violation detail for an internet gateway route with an inactive state in the customer subnet route table or Network Firewall subnet route table. */
	export interface NetworkFirewallBlackHoleRouteDetectedViolation {
		ViolationTarget?: string;
		RouteTableId?: string;
		VpcId?: string;
		ViolatingRoutes?: Array<Route>;
	}

	/** Violation detail for an internet gateway route with an inactive state in the customer subnet route table or Network Firewall subnet route table. */
	export interface NetworkFirewallBlackHoleRouteDetectedViolationFormProperties {
		ViolationTarget: FormControl<string | null | undefined>,
		RouteTableId: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkFirewallBlackHoleRouteDetectedViolationFormGroup() {
		return new FormGroup<NetworkFirewallBlackHoleRouteDetectedViolationFormProperties>({
			ViolationTarget: new FormControl<string | null | undefined>(undefined),
			RouteTableId: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Violation detail for an unexpected route that's present in a route table. */
	export interface NetworkFirewallUnexpectedFirewallRoutesViolation {
		FirewallSubnetId?: string;
		ViolatingRoutes?: Array<Route>;
		RouteTableId?: string;
		FirewallEndpoint?: string;
		VpcId?: string;
	}

	/** Violation detail for an unexpected route that's present in a route table. */
	export interface NetworkFirewallUnexpectedFirewallRoutesViolationFormProperties {
		FirewallSubnetId: FormControl<string | null | undefined>,
		RouteTableId: FormControl<string | null | undefined>,
		FirewallEndpoint: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkFirewallUnexpectedFirewallRoutesViolationFormGroup() {
		return new FormGroup<NetworkFirewallUnexpectedFirewallRoutesViolationFormProperties>({
			FirewallSubnetId: new FormControl<string | null | undefined>(undefined),
			RouteTableId: new FormControl<string | null | undefined>(undefined),
			FirewallEndpoint: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Violation detail for an unexpected gateway route that’s present in a route table. */
	export interface NetworkFirewallUnexpectedGatewayRoutesViolation {
		GatewayId?: string;
		ViolatingRoutes?: Array<Route>;
		RouteTableId?: string;
		VpcId?: string;
	}

	/** Violation detail for an unexpected gateway route that’s present in a route table. */
	export interface NetworkFirewallUnexpectedGatewayRoutesViolationFormProperties {
		GatewayId: FormControl<string | null | undefined>,
		RouteTableId: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkFirewallUnexpectedGatewayRoutesViolationFormGroup() {
		return new FormGroup<NetworkFirewallUnexpectedGatewayRoutesViolationFormProperties>({
			GatewayId: new FormControl<string | null | undefined>(undefined),
			RouteTableId: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Violation detail for an expected route missing in Network Firewall. */
	export interface NetworkFirewallMissingExpectedRoutesViolation {
		ViolationTarget?: string;
		ExpectedRoutes?: Array<ExpectedRoute>;
		VpcId?: string;
	}

	/** Violation detail for an expected route missing in Network Firewall. */
	export interface NetworkFirewallMissingExpectedRoutesViolationFormProperties {
		ViolationTarget: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkFirewallMissingExpectedRoutesViolationFormGroup() {
		return new FormGroup<NetworkFirewallMissingExpectedRoutesViolationFormProperties>({
			ViolationTarget: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A rule group that Firewall Manager tried to associate with a VPC has the same priority as a rule group that's already associated.  */
	export interface DnsRuleGroupPriorityConflictViolation {
		ViolationTarget?: string;
		ViolationTargetDescription?: string;
		ConflictingPriority?: number | null;
		ConflictingPolicyId?: string;
		UnavailablePriorities?: Array<number> | null;
	}

	/** A rule group that Firewall Manager tried to associate with a VPC has the same priority as a rule group that's already associated.  */
	export interface DnsRuleGroupPriorityConflictViolationFormProperties {
		ViolationTarget: FormControl<string | null | undefined>,
		ViolationTargetDescription: FormControl<string | null | undefined>,
		ConflictingPriority: FormControl<number | null | undefined>,
		ConflictingPolicyId: FormControl<string | null | undefined>,
	}
	export function CreateDnsRuleGroupPriorityConflictViolationFormGroup() {
		return new FormGroup<DnsRuleGroupPriorityConflictViolationFormProperties>({
			ViolationTarget: new FormControl<string | null | undefined>(undefined),
			ViolationTargetDescription: new FormControl<string | null | undefined>(undefined),
			ConflictingPriority: new FormControl<number | null | undefined>(undefined),
			ConflictingPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A DNS Firewall rule group that Firewall Manager tried to associate with a VPC is already associated with the VPC and can't be associated again.  */
	export interface DnsDuplicateRuleGroupViolation {
		ViolationTarget?: string;
		ViolationTargetDescription?: string;
	}

	/** A DNS Firewall rule group that Firewall Manager tried to associate with a VPC is already associated with the VPC and can't be associated again.  */
	export interface DnsDuplicateRuleGroupViolationFormProperties {
		ViolationTarget: FormControl<string | null | undefined>,
		ViolationTargetDescription: FormControl<string | null | undefined>,
	}
	export function CreateDnsDuplicateRuleGroupViolationFormGroup() {
		return new FormGroup<DnsDuplicateRuleGroupViolationFormProperties>({
			ViolationTarget: new FormControl<string | null | undefined>(undefined),
			ViolationTargetDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The VPC that Firewall Manager was applying a DNS Fireall policy to reached the limit for associated DNS Firewall rule groups. Firewall Manager tried to associate another rule group with the VPC and failed due to the limit.  */
	export interface DnsRuleGroupLimitExceededViolation {
		ViolationTarget?: string;
		ViolationTargetDescription?: string;
		NumberOfRuleGroupsAlreadyAssociated?: number | null;
	}

	/** The VPC that Firewall Manager was applying a DNS Fireall policy to reached the limit for associated DNS Firewall rule groups. Firewall Manager tried to associate another rule group with the VPC and failed due to the limit.  */
	export interface DnsRuleGroupLimitExceededViolationFormProperties {
		ViolationTarget: FormControl<string | null | undefined>,
		ViolationTargetDescription: FormControl<string | null | undefined>,
		NumberOfRuleGroupsAlreadyAssociated: FormControl<number | null | undefined>,
	}
	export function CreateDnsRuleGroupLimitExceededViolationFormGroup() {
		return new FormGroup<DnsRuleGroupLimitExceededViolationFormProperties>({
			ViolationTarget: new FormControl<string | null | undefined>(undefined),
			ViolationTargetDescription: new FormControl<string | null | undefined>(undefined),
			NumberOfRuleGroupsAlreadyAssociated: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A list of possible remediation action lists. Each individual possible remediation action is a list of individual remediation actions. */
	export interface PossibleRemediationActions {
		Description?: string;
		Actions?: Array<PossibleRemediationAction>;
	}

	/** A list of possible remediation action lists. Each individual possible remediation action is a list of individual remediation actions. */
	export interface PossibleRemediationActionsFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreatePossibleRemediationActionsFormGroup() {
		return new FormGroup<PossibleRemediationActionsFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of remediation actions. */
	export interface PossibleRemediationAction {
		Description?: string;

		/** Required */
		OrderedRemediationActions: Array<RemediationActionWithOrder>;
		IsDefaultAction?: boolean | null;
	}

	/** A list of remediation actions. */
	export interface PossibleRemediationActionFormProperties {
		Description: FormControl<string | null | undefined>,
		IsDefaultAction: FormControl<boolean | null | undefined>,
	}
	export function CreatePossibleRemediationActionFormGroup() {
		return new FormGroup<PossibleRemediationActionFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			IsDefaultAction: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An ordered list of actions you can take to remediate a violation. */
	export interface RemediationActionWithOrder {
		RemediationAction?: RemediationAction;
		Order?: number | null;
	}

	/** An ordered list of actions you can take to remediate a violation. */
	export interface RemediationActionWithOrderFormProperties {
		Order: FormControl<number | null | undefined>,
	}
	export function CreateRemediationActionWithOrderFormGroup() {
		return new FormGroup<RemediationActionWithOrderFormProperties>({
			Order: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about an individual action you can take to remediate a violation. */
	export interface RemediationAction {
		Description?: string;
		EC2CreateRouteAction?: EC2CreateRouteAction;
		EC2ReplaceRouteAction?: EC2ReplaceRouteAction;
		EC2DeleteRouteAction?: EC2DeleteRouteAction;
		EC2CopyRouteTableAction?: EC2CopyRouteTableAction;
		EC2ReplaceRouteTableAssociationAction?: EC2ReplaceRouteTableAssociationAction;
		EC2AssociateRouteTableAction?: EC2AssociateRouteTableAction;
		EC2CreateRouteTableAction?: EC2CreateRouteTableAction;
		FMSPolicyUpdateFirewallCreationConfigAction?: FMSPolicyUpdateFirewallCreationConfigAction;
	}

	/** Information about an individual action you can take to remediate a violation. */
	export interface RemediationActionFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateRemediationActionFormGroup() {
		return new FormGroup<RemediationActionFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the CreateRoute action in Amazon EC2. */
	export interface EC2CreateRouteAction {
		Description?: string;
		DestinationCidrBlock?: string;
		DestinationPrefixListId?: string;
		DestinationIpv6CidrBlock?: string;
		VpcEndpointId?: ActionTarget;
		GatewayId?: ActionTarget;

		/** Required */
		RouteTableId: ActionTarget;
	}

	/** Information about the CreateRoute action in Amazon EC2. */
	export interface EC2CreateRouteActionFormProperties {
		Description: FormControl<string | null | undefined>,
		DestinationCidrBlock: FormControl<string | null | undefined>,
		DestinationPrefixListId: FormControl<string | null | undefined>,
		DestinationIpv6CidrBlock: FormControl<string | null | undefined>,
	}
	export function CreateEC2CreateRouteActionFormGroup() {
		return new FormGroup<EC2CreateRouteActionFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			DestinationCidrBlock: new FormControl<string | null | undefined>(undefined),
			DestinationPrefixListId: new FormControl<string | null | undefined>(undefined),
			DestinationIpv6CidrBlock: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a remediation action target. */
	export interface ActionTarget {
		ResourceId?: string;
		Description?: string;
	}

	/** Describes a remediation action target. */
	export interface ActionTargetFormProperties {
		ResourceId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateActionTargetFormGroup() {
		return new FormGroup<ActionTargetFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the ReplaceRoute action in Amazon EC2. */
	export interface EC2ReplaceRouteAction {
		Description?: string;
		DestinationCidrBlock?: string;
		DestinationPrefixListId?: string;
		DestinationIpv6CidrBlock?: string;
		GatewayId?: ActionTarget;

		/** Required */
		RouteTableId: ActionTarget;
	}

	/** Information about the ReplaceRoute action in Amazon EC2. */
	export interface EC2ReplaceRouteActionFormProperties {
		Description: FormControl<string | null | undefined>,
		DestinationCidrBlock: FormControl<string | null | undefined>,
		DestinationPrefixListId: FormControl<string | null | undefined>,
		DestinationIpv6CidrBlock: FormControl<string | null | undefined>,
	}
	export function CreateEC2ReplaceRouteActionFormGroup() {
		return new FormGroup<EC2ReplaceRouteActionFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			DestinationCidrBlock: new FormControl<string | null | undefined>(undefined),
			DestinationPrefixListId: new FormControl<string | null | undefined>(undefined),
			DestinationIpv6CidrBlock: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the DeleteRoute action in Amazon EC2. */
	export interface EC2DeleteRouteAction {
		Description?: string;
		DestinationCidrBlock?: string;
		DestinationPrefixListId?: string;
		DestinationIpv6CidrBlock?: string;

		/** Required */
		RouteTableId: ActionTarget;
	}

	/** Information about the DeleteRoute action in Amazon EC2. */
	export interface EC2DeleteRouteActionFormProperties {
		Description: FormControl<string | null | undefined>,
		DestinationCidrBlock: FormControl<string | null | undefined>,
		DestinationPrefixListId: FormControl<string | null | undefined>,
		DestinationIpv6CidrBlock: FormControl<string | null | undefined>,
	}
	export function CreateEC2DeleteRouteActionFormGroup() {
		return new FormGroup<EC2DeleteRouteActionFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			DestinationCidrBlock: new FormControl<string | null | undefined>(undefined),
			DestinationPrefixListId: new FormControl<string | null | undefined>(undefined),
			DestinationIpv6CidrBlock: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An action that copies the EC2 route table for use in remediation. */
	export interface EC2CopyRouteTableAction {
		Description?: string;

		/** Required */
		VpcId: ActionTarget;

		/** Required */
		RouteTableId: ActionTarget;
	}

	/** An action that copies the EC2 route table for use in remediation. */
	export interface EC2CopyRouteTableActionFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateEC2CopyRouteTableActionFormGroup() {
		return new FormGroup<EC2CopyRouteTableActionFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the ReplaceRouteTableAssociation action in Amazon EC2. */
	export interface EC2ReplaceRouteTableAssociationAction {
		Description?: string;

		/** Required */
		AssociationId: ActionTarget;

		/** Required */
		RouteTableId: ActionTarget;
	}

	/** Information about the ReplaceRouteTableAssociation action in Amazon EC2. */
	export interface EC2ReplaceRouteTableAssociationActionFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateEC2ReplaceRouteTableAssociationActionFormGroup() {
		return new FormGroup<EC2ReplaceRouteTableAssociationActionFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The action of associating an EC2 resource, such as a subnet or internet gateway, with a route table. */
	export interface EC2AssociateRouteTableAction {
		Description?: string;

		/** Required */
		RouteTableId: ActionTarget;
		SubnetId?: ActionTarget;
		GatewayId?: ActionTarget;
	}

	/** The action of associating an EC2 resource, such as a subnet or internet gateway, with a route table. */
	export interface EC2AssociateRouteTableActionFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateEC2AssociateRouteTableActionFormGroup() {
		return new FormGroup<EC2AssociateRouteTableActionFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the CreateRouteTable action in Amazon EC2. */
	export interface EC2CreateRouteTableAction {
		Description?: string;

		/** Required */
		VpcId: ActionTarget;
	}

	/** Information about the CreateRouteTable action in Amazon EC2. */
	export interface EC2CreateRouteTableActionFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateEC2CreateRouteTableActionFormGroup() {
		return new FormGroup<EC2CreateRouteTableActionFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the actions that you can take to remediate scope violations caused by your policy's <code>FirewallCreationConfig</code>. <code>FirewallCreationConfig</code> is an optional configuration that you can use to choose which Availability Zones Firewall Manager creates Network Firewall endpoints in. */
	export interface FMSPolicyUpdateFirewallCreationConfigAction {
		Description?: string;
		FirewallCreationConfig?: string;
	}

	/** Contains information about the actions that you can take to remediate scope violations caused by your policy's <code>FirewallCreationConfig</code>. <code>FirewallCreationConfig</code> is an optional configuration that you can use to choose which Availability Zones Firewall Manager creates Network Firewall endpoints in. */
	export interface FMSPolicyUpdateFirewallCreationConfigActionFormProperties {
		Description: FormControl<string | null | undefined>,
		FirewallCreationConfig: FormControl<string | null | undefined>,
	}
	export function CreateFMSPolicyUpdateFirewallCreationConfigActionFormGroup() {
		return new FormGroup<FMSPolicyUpdateFirewallCreationConfigActionFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			FirewallCreationConfig: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about the firewall subnet that violates the policy scope. */
	export interface FirewallSubnetIsOutOfScopeViolation {
		FirewallSubnetId?: string;
		VpcId?: string;
		SubnetAvailabilityZone?: string;
		SubnetAvailabilityZoneId?: string;
		VpcEndpointId?: string;
	}

	/** Contains details about the firewall subnet that violates the policy scope. */
	export interface FirewallSubnetIsOutOfScopeViolationFormProperties {
		FirewallSubnetId: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		SubnetAvailabilityZone: FormControl<string | null | undefined>,
		SubnetAvailabilityZoneId: FormControl<string | null | undefined>,
		VpcEndpointId: FormControl<string | null | undefined>,
	}
	export function CreateFirewallSubnetIsOutOfScopeViolationFormGroup() {
		return new FormGroup<FirewallSubnetIsOutOfScopeViolationFormProperties>({
			FirewallSubnetId: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			SubnetAvailabilityZone: new FormControl<string | null | undefined>(undefined),
			SubnetAvailabilityZoneId: new FormControl<string | null | undefined>(undefined),
			VpcEndpointId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about the route endpoint that violates the policy scope. */
	export interface RouteHasOutOfScopeEndpointViolation {
		SubnetId?: string;
		VpcId?: string;
		RouteTableId?: string;
		ViolatingRoutes?: Array<Route>;
		SubnetAvailabilityZone?: string;
		SubnetAvailabilityZoneId?: string;
		CurrentFirewallSubnetRouteTable?: string;
		FirewallSubnetId?: string;
		FirewallSubnetRoutes?: Array<Route>;
		InternetGatewayId?: string;
		CurrentInternetGatewayRouteTable?: string;
		InternetGatewayRoutes?: Array<Route>;
	}

	/** Contains details about the route endpoint that violates the policy scope. */
	export interface RouteHasOutOfScopeEndpointViolationFormProperties {
		SubnetId: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		RouteTableId: FormControl<string | null | undefined>,
		SubnetAvailabilityZone: FormControl<string | null | undefined>,
		SubnetAvailabilityZoneId: FormControl<string | null | undefined>,
		CurrentFirewallSubnetRouteTable: FormControl<string | null | undefined>,
		FirewallSubnetId: FormControl<string | null | undefined>,
		InternetGatewayId: FormControl<string | null | undefined>,
		CurrentInternetGatewayRouteTable: FormControl<string | null | undefined>,
	}
	export function CreateRouteHasOutOfScopeEndpointViolationFormGroup() {
		return new FormGroup<RouteHasOutOfScopeEndpointViolationFormProperties>({
			SubnetId: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			RouteTableId: new FormControl<string | null | undefined>(undefined),
			SubnetAvailabilityZone: new FormControl<string | null | undefined>(undefined),
			SubnetAvailabilityZoneId: new FormControl<string | null | undefined>(undefined),
			CurrentFirewallSubnetRouteTable: new FormControl<string | null | undefined>(undefined),
			FirewallSubnetId: new FormControl<string | null | undefined>(undefined),
			InternetGatewayId: new FormControl<string | null | undefined>(undefined),
			CurrentInternetGatewayRouteTable: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The violation details about a third-party firewall's subnet that doesn't have a Firewall Manager managed firewall in its VPC. */
	export interface ThirdPartyFirewallMissingFirewallViolation {
		ViolationTarget?: string;
		VPC?: string;
		AvailabilityZone?: string;
		TargetViolationReason?: string;
	}

	/** The violation details about a third-party firewall's subnet that doesn't have a Firewall Manager managed firewall in its VPC. */
	export interface ThirdPartyFirewallMissingFirewallViolationFormProperties {
		ViolationTarget: FormControl<string | null | undefined>,
		VPC: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		TargetViolationReason: FormControl<string | null | undefined>,
	}
	export function CreateThirdPartyFirewallMissingFirewallViolationFormGroup() {
		return new FormGroup<ThirdPartyFirewallMissingFirewallViolationFormProperties>({
			ViolationTarget: new FormControl<string | null | undefined>(undefined),
			VPC: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			TargetViolationReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The violation details for a third-party firewall for an Availability Zone that's missing the Firewall Manager managed subnet. */
	export interface ThirdPartyFirewallMissingSubnetViolation {
		ViolationTarget?: string;
		VPC?: string;
		AvailabilityZone?: string;
		TargetViolationReason?: string;
	}

	/** The violation details for a third-party firewall for an Availability Zone that's missing the Firewall Manager managed subnet. */
	export interface ThirdPartyFirewallMissingSubnetViolationFormProperties {
		ViolationTarget: FormControl<string | null | undefined>,
		VPC: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		TargetViolationReason: FormControl<string | null | undefined>,
	}
	export function CreateThirdPartyFirewallMissingSubnetViolationFormGroup() {
		return new FormGroup<ThirdPartyFirewallMissingSubnetViolationFormProperties>({
			ViolationTarget: new FormControl<string | null | undefined>(undefined),
			VPC: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			TargetViolationReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The violation details for a third-party firewall that's not associated with an Firewall Manager managed route table. */
	export interface ThirdPartyFirewallMissingExpectedRouteTableViolation {
		ViolationTarget?: string;
		VPC?: string;
		AvailabilityZone?: string;
		CurrentRouteTable?: string;
		ExpectedRouteTable?: string;
	}

	/** The violation details for a third-party firewall that's not associated with an Firewall Manager managed route table. */
	export interface ThirdPartyFirewallMissingExpectedRouteTableViolationFormProperties {
		ViolationTarget: FormControl<string | null | undefined>,
		VPC: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		CurrentRouteTable: FormControl<string | null | undefined>,
		ExpectedRouteTable: FormControl<string | null | undefined>,
	}
	export function CreateThirdPartyFirewallMissingExpectedRouteTableViolationFormGroup() {
		return new FormGroup<ThirdPartyFirewallMissingExpectedRouteTableViolationFormProperties>({
			ViolationTarget: new FormControl<string | null | undefined>(undefined),
			VPC: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			CurrentRouteTable: new FormControl<string | null | undefined>(undefined),
			ExpectedRouteTable: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The violation details for a firewall subnet's VPC endpoint that's deleted or missing. */
	export interface FirewallSubnetMissingVPCEndpointViolation {
		FirewallSubnetId?: string;
		VpcId?: string;
		SubnetAvailabilityZone?: string;
		SubnetAvailabilityZoneId?: string;
	}

	/** The violation details for a firewall subnet's VPC endpoint that's deleted or missing. */
	export interface FirewallSubnetMissingVPCEndpointViolationFormProperties {
		FirewallSubnetId: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		SubnetAvailabilityZone: FormControl<string | null | undefined>,
		SubnetAvailabilityZoneId: FormControl<string | null | undefined>,
	}
	export function CreateFirewallSubnetMissingVPCEndpointViolationFormGroup() {
		return new FormGroup<FirewallSubnetMissingVPCEndpointViolationFormProperties>({
			FirewallSubnetId: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			SubnetAvailabilityZone: new FormControl<string | null | undefined>(undefined),
			SubnetAvailabilityZoneId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of key:value pairs associated with an Amazon Web Services resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each Amazon Web Services resource.  */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A collection of key:value pairs associated with an Amazon Web Services resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each Amazon Web Services resource.  */
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

	export interface GetViolationDetailsRequest {

		/** Required */
		PolicyId: string;

		/** Required */
		MemberAccount: string;

		/** Required */
		ResourceId: string;

		/** Required */
		ResourceType: string;
	}
	export interface GetViolationDetailsRequestFormProperties {

		/** Required */
		PolicyId: FormControl<string | null | undefined>,

		/** Required */
		MemberAccount: FormControl<string | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateGetViolationDetailsRequestFormGroup() {
		return new FormGroup<GetViolationDetailsRequestFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MemberAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAdminAccountsForOrganizationResponse {
		AdminAccounts?: Array<AdminAccountSummary>;
		NextToken?: string;
	}
	export interface ListAdminAccountsForOrganizationResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAdminAccountsForOrganizationResponseFormGroup() {
		return new FormGroup<ListAdminAccountsForOrganizationResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains high level information about the Firewall Manager administrator account. */
	export interface AdminAccountSummary {
		AdminAccount?: string;
		DefaultAdmin?: boolean | null;
		Status?: OrganizationStatus;
	}

	/** Contains high level information about the Firewall Manager administrator account. */
	export interface AdminAccountSummaryFormProperties {
		AdminAccount: FormControl<string | null | undefined>,
		DefaultAdmin: FormControl<boolean | null | undefined>,
		Status: FormControl<OrganizationStatus | null | undefined>,
	}
	export function CreateAdminAccountSummaryFormGroup() {
		return new FormGroup<AdminAccountSummaryFormProperties>({
			AdminAccount: new FormControl<string | null | undefined>(undefined),
			DefaultAdmin: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<OrganizationStatus | null | undefined>(undefined),
		});

	}

	export interface ListAdminAccountsForOrganizationRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListAdminAccountsForOrganizationRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAdminAccountsForOrganizationRequestFormGroup() {
		return new FormGroup<ListAdminAccountsForOrganizationRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListAdminsManagingAccountResponse {
		AdminAccounts?: Array<string>;
		NextToken?: string;
	}
	export interface ListAdminsManagingAccountResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAdminsManagingAccountResponseFormGroup() {
		return new FormGroup<ListAdminsManagingAccountResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAdminsManagingAccountRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListAdminsManagingAccountRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAdminsManagingAccountRequestFormGroup() {
		return new FormGroup<ListAdminsManagingAccountRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListAppsListsResponse {
		AppsLists?: Array<AppsListDataSummary>;
		NextToken?: string;
	}
	export interface ListAppsListsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppsListsResponseFormGroup() {
		return new FormGroup<ListAppsListsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of the Firewall Manager applications list. */
	export interface AppsListDataSummary {
		ListArn?: string;
		ListId?: string;
		ListName?: string;
		AppsList?: Array<App>;
	}

	/** Details of the Firewall Manager applications list. */
	export interface AppsListDataSummaryFormProperties {
		ListArn: FormControl<string | null | undefined>,
		ListId: FormControl<string | null | undefined>,
		ListName: FormControl<string | null | undefined>,
	}
	export function CreateAppsListDataSummaryFormGroup() {
		return new FormGroup<AppsListDataSummaryFormProperties>({
			ListArn: new FormControl<string | null | undefined>(undefined),
			ListId: new FormControl<string | null | undefined>(undefined),
			ListName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAppsListsRequest {
		DefaultLists?: boolean | null;
		NextToken?: string;

		/** Required */
		MaxResults: number;
	}
	export interface ListAppsListsRequestFormProperties {
		DefaultLists: FormControl<boolean | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAppsListsRequestFormGroup() {
		return new FormGroup<ListAppsListsRequestFormProperties>({
			DefaultLists: new FormControl<boolean | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListComplianceStatusResponse {
		PolicyComplianceStatusList?: Array<PolicyComplianceStatus>;
		NextToken?: string;
	}
	export interface ListComplianceStatusResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComplianceStatusResponseFormGroup() {
		return new FormGroup<ListComplianceStatusResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates whether the account is compliant with the specified policy. An account is considered noncompliant if it includes resources that are not protected by the policy, for WAF and Shield Advanced policies, or that are noncompliant with the policy, for security group policies. */
	export interface PolicyComplianceStatus {
		PolicyOwner?: string;
		PolicyId?: string;
		PolicyName?: string;
		MemberAccount?: string;
		EvaluationResults?: Array<EvaluationResult>;
		LastUpdated?: Date;
		IssueInfoMap?: IssueInfoMap;
	}

	/** Indicates whether the account is compliant with the specified policy. An account is considered noncompliant if it includes resources that are not protected by the policy, for WAF and Shield Advanced policies, or that are noncompliant with the policy, for security group policies. */
	export interface PolicyComplianceStatusFormProperties {
		PolicyOwner: FormControl<string | null | undefined>,
		PolicyId: FormControl<string | null | undefined>,
		PolicyName: FormControl<string | null | undefined>,
		MemberAccount: FormControl<string | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
	}
	export function CreatePolicyComplianceStatusFormGroup() {
		return new FormGroup<PolicyComplianceStatusFormProperties>({
			PolicyOwner: new FormControl<string | null | undefined>(undefined),
			PolicyId: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined),
			MemberAccount: new FormControl<string | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes the compliance status for the account. An account is considered noncompliant if it includes resources that are not protected by the specified policy or that don't comply with the policy. */
	export interface EvaluationResult {
		ComplianceStatus?: PolicyComplianceStatusType;
		ViolatorCount?: number | null;
		EvaluationLimitExceeded?: boolean | null;
	}

	/** Describes the compliance status for the account. An account is considered noncompliant if it includes resources that are not protected by the specified policy or that don't comply with the policy. */
	export interface EvaluationResultFormProperties {
		ComplianceStatus: FormControl<PolicyComplianceStatusType | null | undefined>,
		ViolatorCount: FormControl<number | null | undefined>,
		EvaluationLimitExceeded: FormControl<boolean | null | undefined>,
	}
	export function CreateEvaluationResultFormGroup() {
		return new FormGroup<EvaluationResultFormProperties>({
			ComplianceStatus: new FormControl<PolicyComplianceStatusType | null | undefined>(undefined),
			ViolatorCount: new FormControl<number | null | undefined>(undefined),
			EvaluationLimitExceeded: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PolicyComplianceStatusType { COMPLIANT = 0, NON_COMPLIANT = 1 }

	export interface ListComplianceStatusRequest {

		/** Required */
		PolicyId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListComplianceStatusRequestFormProperties {

		/** Required */
		PolicyId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListComplianceStatusRequestFormGroup() {
		return new FormGroup<ListComplianceStatusRequestFormProperties>({
			PolicyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDiscoveredResourcesResponse {
		Items?: Array<DiscoveredResource>;
		NextToken?: string;
	}
	export interface ListDiscoveredResourcesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDiscoveredResourcesResponseFormGroup() {
		return new FormGroup<ListDiscoveredResourcesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource in the organization that's available to be associated with a Firewall Manager resource set. */
	export interface DiscoveredResource {
		URI?: string;
		AccountId?: string;
		Type?: string;
		Name?: string;
	}

	/** A resource in the organization that's available to be associated with a Firewall Manager resource set. */
	export interface DiscoveredResourceFormProperties {
		URI: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDiscoveredResourceFormGroup() {
		return new FormGroup<DiscoveredResourceFormProperties>({
			URI: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDiscoveredResourcesRequest {

		/** Required */
		MemberAccountIds: Array<string>;

		/** Required */
		ResourceType: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListDiscoveredResourcesRequestFormProperties {

		/** Required */
		ResourceType: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDiscoveredResourcesRequestFormGroup() {
		return new FormGroup<ListDiscoveredResourcesRequestFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMemberAccountsResponse {
		MemberAccounts?: Array<string>;
		NextToken?: string;
	}
	export interface ListMemberAccountsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMemberAccountsResponseFormGroup() {
		return new FormGroup<ListMemberAccountsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMemberAccountsRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListMemberAccountsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListMemberAccountsRequestFormGroup() {
		return new FormGroup<ListMemberAccountsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListPoliciesResponse {
		PolicyList?: Array<PolicySummary>;
		NextToken?: string;
	}
	export interface ListPoliciesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPoliciesResponseFormGroup() {
		return new FormGroup<ListPoliciesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of the Firewall Manager policy.  */
	export interface PolicySummary {
		PolicyArn?: string;
		PolicyId?: string;
		PolicyName?: string;
		ResourceType?: string;
		SecurityServiceType?: SecurityServiceType;
		RemediationEnabled?: boolean | null;
		DeleteUnusedFMManagedResources?: boolean | null;
		PolicyStatus?: CustomerPolicyStatus;
	}

	/** Details of the Firewall Manager policy.  */
	export interface PolicySummaryFormProperties {
		PolicyArn: FormControl<string | null | undefined>,
		PolicyId: FormControl<string | null | undefined>,
		PolicyName: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		SecurityServiceType: FormControl<SecurityServiceType | null | undefined>,
		RemediationEnabled: FormControl<boolean | null | undefined>,
		DeleteUnusedFMManagedResources: FormControl<boolean | null | undefined>,
		PolicyStatus: FormControl<CustomerPolicyStatus | null | undefined>,
	}
	export function CreatePolicySummaryFormGroup() {
		return new FormGroup<PolicySummaryFormProperties>({
			PolicyArn: new FormControl<string | null | undefined>(undefined),
			PolicyId: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			SecurityServiceType: new FormControl<SecurityServiceType | null | undefined>(undefined),
			RemediationEnabled: new FormControl<boolean | null | undefined>(undefined),
			DeleteUnusedFMManagedResources: new FormControl<boolean | null | undefined>(undefined),
			PolicyStatus: new FormControl<CustomerPolicyStatus | null | undefined>(undefined),
		});

	}

	export interface ListPoliciesRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListPoliciesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPoliciesRequestFormGroup() {
		return new FormGroup<ListPoliciesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListProtocolsListsResponse {
		ProtocolsLists?: Array<ProtocolsListDataSummary>;
		NextToken?: string;
	}
	export interface ListProtocolsListsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProtocolsListsResponseFormGroup() {
		return new FormGroup<ListProtocolsListsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of the Firewall Manager protocols list. */
	export interface ProtocolsListDataSummary {
		ListArn?: string;
		ListId?: string;
		ListName?: string;
		ProtocolsList?: Array<string>;
	}

	/** Details of the Firewall Manager protocols list. */
	export interface ProtocolsListDataSummaryFormProperties {
		ListArn: FormControl<string | null | undefined>,
		ListId: FormControl<string | null | undefined>,
		ListName: FormControl<string | null | undefined>,
	}
	export function CreateProtocolsListDataSummaryFormGroup() {
		return new FormGroup<ProtocolsListDataSummaryFormProperties>({
			ListArn: new FormControl<string | null | undefined>(undefined),
			ListId: new FormControl<string | null | undefined>(undefined),
			ListName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProtocolsListsRequest {
		DefaultLists?: boolean | null;
		NextToken?: string;

		/** Required */
		MaxResults: number;
	}
	export interface ListProtocolsListsRequestFormProperties {
		DefaultLists: FormControl<boolean | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListProtocolsListsRequestFormGroup() {
		return new FormGroup<ListProtocolsListsRequestFormProperties>({
			DefaultLists: new FormControl<boolean | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListResourceSetResourcesResponse {

		/** Required */
		Items: Array<Resource>;
		NextToken?: string;
	}
	export interface ListResourceSetResourcesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceSetResourcesResponseFormGroup() {
		return new FormGroup<ListResourceSetResourcesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of a resource that is associated to an Firewall Manager resource set. */
	export interface Resource {

		/** Required */
		URI: string;
		AccountId?: string;
	}

	/** Details of a resource that is associated to an Firewall Manager resource set. */
	export interface ResourceFormProperties {

		/** Required */
		URI: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			URI: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourceSetResourcesRequest {

		/** Required */
		Identifier: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListResourceSetResourcesRequestFormProperties {

		/** Required */
		Identifier: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceSetResourcesRequestFormGroup() {
		return new FormGroup<ListResourceSetResourcesRequestFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourceSetsResponse {
		ResourceSets?: Array<ResourceSetSummary>;
		NextToken?: string;
	}
	export interface ListResourceSetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceSetsResponseFormGroup() {
		return new FormGroup<ListResourceSetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summarizes the resource sets used in a policy. */
	export interface ResourceSetSummary {
		Id?: string;
		Name?: string;
		Description?: string;
		LastUpdateTime?: Date;
		ResourceSetStatus?: CustomerPolicyStatus;
	}

	/** Summarizes the resource sets used in a policy. */
	export interface ResourceSetSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
		ResourceSetStatus: FormControl<CustomerPolicyStatus | null | undefined>,
	}
	export function CreateResourceSetSummaryFormGroup() {
		return new FormGroup<ResourceSetSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			ResourceSetStatus: new FormControl<CustomerPolicyStatus | null | undefined>(undefined),
		});

	}

	export interface ListResourceSetsRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListResourceSetsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResourceSetsRequestFormGroup() {
		return new FormGroup<ListResourceSetsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		TagList?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListThirdPartyFirewallFirewallPoliciesResponse {
		ThirdPartyFirewallFirewallPolicies?: Array<ThirdPartyFirewallFirewallPolicy>;
		NextToken?: string;
	}
	export interface ListThirdPartyFirewallFirewallPoliciesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListThirdPartyFirewallFirewallPoliciesResponseFormGroup() {
		return new FormGroup<ListThirdPartyFirewallFirewallPoliciesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configures the third-party firewall's firewall policy. */
	export interface ThirdPartyFirewallFirewallPolicy {
		FirewallPolicyId?: string;
		FirewallPolicyName?: string;
	}

	/** Configures the third-party firewall's firewall policy. */
	export interface ThirdPartyFirewallFirewallPolicyFormProperties {
		FirewallPolicyId: FormControl<string | null | undefined>,
		FirewallPolicyName: FormControl<string | null | undefined>,
	}
	export function CreateThirdPartyFirewallFirewallPolicyFormGroup() {
		return new FormGroup<ThirdPartyFirewallFirewallPolicyFormProperties>({
			FirewallPolicyId: new FormControl<string | null | undefined>(undefined),
			FirewallPolicyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListThirdPartyFirewallFirewallPoliciesRequest {

		/** Required */
		ThirdPartyFirewall: ThirdPartyFirewall;
		NextToken?: string;

		/** Required */
		MaxResults: number;
	}
	export interface ListThirdPartyFirewallFirewallPoliciesRequestFormProperties {

		/** Required */
		ThirdPartyFirewall: FormControl<ThirdPartyFirewall | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListThirdPartyFirewallFirewallPoliciesRequestFormGroup() {
		return new FormGroup<ListThirdPartyFirewallFirewallPoliciesRequestFormProperties>({
			ThirdPartyFirewall: new FormControl<ThirdPartyFirewall | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutAdminAccountRequest {

		/** Required */
		AdminAccount: string;
		AdminScope?: AdminScope;
	}
	export interface PutAdminAccountRequestFormProperties {

		/** Required */
		AdminAccount: FormControl<string | null | undefined>,
	}
	export function CreatePutAdminAccountRequestFormGroup() {
		return new FormGroup<PutAdminAccountRequestFormProperties>({
			AdminAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutAppsListResponse {
		AppsList?: AppsListData;
		AppsListArn?: string;
	}
	export interface PutAppsListResponseFormProperties {
		AppsListArn: FormControl<string | null | undefined>,
	}
	export function CreatePutAppsListResponseFormGroup() {
		return new FormGroup<PutAppsListResponseFormProperties>({
			AppsListArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutAppsListRequest {

		/** Required */
		AppsList: AppsListData;
		TagList?: Array<Tag>;
	}
	export interface PutAppsListRequestFormProperties {
	}
	export function CreatePutAppsListRequestFormGroup() {
		return new FormGroup<PutAppsListRequestFormProperties>({
		});

	}

	export interface PutNotificationChannelRequest {

		/** Required */
		SnsTopicArn: string;

		/** Required */
		SnsRoleName: string;
	}
	export interface PutNotificationChannelRequestFormProperties {

		/** Required */
		SnsTopicArn: FormControl<string | null | undefined>,

		/** Required */
		SnsRoleName: FormControl<string | null | undefined>,
	}
	export function CreatePutNotificationChannelRequestFormGroup() {
		return new FormGroup<PutNotificationChannelRequestFormProperties>({
			SnsTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SnsRoleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutPolicyResponse {
		Policy?: Policy;
		PolicyArn?: string;
	}
	export interface PutPolicyResponseFormProperties {
		PolicyArn: FormControl<string | null | undefined>,
	}
	export function CreatePutPolicyResponseFormGroup() {
		return new FormGroup<PutPolicyResponseFormProperties>({
			PolicyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutPolicyRequest {

		/** Required */
		Policy: Policy;
		TagList?: Array<Tag>;
	}
	export interface PutPolicyRequestFormProperties {
	}
	export function CreatePutPolicyRequestFormGroup() {
		return new FormGroup<PutPolicyRequestFormProperties>({
		});

	}

	export interface PutProtocolsListResponse {
		ProtocolsList?: ProtocolsListData;
		ProtocolsListArn?: string;
	}
	export interface PutProtocolsListResponseFormProperties {
		ProtocolsListArn: FormControl<string | null | undefined>,
	}
	export function CreatePutProtocolsListResponseFormGroup() {
		return new FormGroup<PutProtocolsListResponseFormProperties>({
			ProtocolsListArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutProtocolsListRequest {

		/** Required */
		ProtocolsList: ProtocolsListData;
		TagList?: Array<Tag>;
	}
	export interface PutProtocolsListRequestFormProperties {
	}
	export function CreatePutProtocolsListRequestFormGroup() {
		return new FormGroup<PutProtocolsListRequestFormProperties>({
		});

	}

	export interface PutResourceSetResponse {

		/** Required */
		ResourceSet: ResourceSet;

		/** Required */
		ResourceSetArn: string;
	}
	export interface PutResourceSetResponseFormProperties {

		/** Required */
		ResourceSetArn: FormControl<string | null | undefined>,
	}
	export function CreatePutResourceSetResponseFormGroup() {
		return new FormGroup<PutResourceSetResponseFormProperties>({
			ResourceSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutResourceSetRequest {

		/** Required */
		ResourceSet: ResourceSet;
		TagList?: Array<Tag>;
	}
	export interface PutResourceSetRequestFormProperties {
	}
	export function CreatePutResourceSetRequestFormGroup() {
		return new FormGroup<PutResourceSetRequestFormProperties>({
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
		ResourceArn: string;

		/** Required */
		TagList: Array<Tag>;
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

	export enum CustomerPolicyScopeIdType { ACCOUNT = 0, ORG_UNIT = 1 }

	export enum DependentServiceName { AWSCONFIG = 0, AWSWAF = 1, AWSSHIELD_ADVANCED = 2, AWSVPC = 3 }

	export enum ResourceSetStatus { ACTIVE = 0, OUT_OF_ADMIN_SCOPE = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Sets a Firewall Manager default administrator account. The Firewall Manager default administrator account can manage third-party firewalls and has full administrative scope that allows administration of all policy types, accounts, organizational units, and Regions. This account must be a member account of the organization in Organizations whose resources you want to protect.</p> <p>For information about working with Firewall Manager administrator accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/fms-administrators.html">Managing Firewall Manager administrators</a> in the <i>Firewall Manager Developer Guide</i>.</p>
		 * Post #X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount
		 * @return {void} Success
		 */
		AssociateAdminAccount(requestBody: AssociateAdminAccountRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the Firewall Manager policy administrator as a tenant administrator of a third-party firewall service. A tenant is an instance of the third-party firewall service that's associated with your Amazon Web Services customer account.
		 * Post #X-Amz-Target=AWSFMS_20180101.AssociateThirdPartyFirewall
		 * @return {AssociateThirdPartyFirewallResponse} Success
		 */
		AssociateThirdPartyFirewall(requestBody: AssociateThirdPartyFirewallRequest): Observable<AssociateThirdPartyFirewallResponse> {
			return this.http.post<AssociateThirdPartyFirewallResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.AssociateThirdPartyFirewall', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associate resources to a Firewall Manager resource set.
		 * Post #X-Amz-Target=AWSFMS_20180101.BatchAssociateResource
		 * @return {BatchAssociateResourceResponse} Success
		 */
		BatchAssociateResource(requestBody: BatchAssociateResourceRequest): Observable<BatchAssociateResourceResponse> {
			return this.http.post<BatchAssociateResourceResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.BatchAssociateResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates resources from a Firewall Manager resource set.
		 * Post #X-Amz-Target=AWSFMS_20180101.BatchDisassociateResource
		 * @return {BatchDisassociateResourceResponse} Success
		 */
		BatchDisassociateResource(requestBody: BatchDisassociateResourceRequest): Observable<BatchDisassociateResourceResponse> {
			return this.http.post<BatchDisassociateResourceResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.BatchDisassociateResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Permanently deletes an Firewall Manager applications list.
		 * Post #X-Amz-Target=AWSFMS_20180101.DeleteAppsList
		 * @return {void} Success
		 */
		DeleteAppsList(requestBody: DeleteAppsListRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.DeleteAppsList', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.
		 * Post #X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel
		 * @return {void} Success
		 */
		DeleteNotificationChannel(requestBody: DeleteNotificationChannelRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently deletes an Firewall Manager policy.
		 * Post #X-Amz-Target=AWSFMS_20180101.DeletePolicy
		 * @return {void} Success
		 */
		DeletePolicy(requestBody: DeletePolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.DeletePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently deletes an Firewall Manager protocols list.
		 * Post #X-Amz-Target=AWSFMS_20180101.DeleteProtocolsList
		 * @return {void} Success
		 */
		DeleteProtocolsList(requestBody: DeleteProtocolsListRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.DeleteProtocolsList', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified <a>ResourceSet</a>.
		 * Post #X-Amz-Target=AWSFMS_20180101.DeleteResourceSet
		 * @return {void} Success
		 */
		DeleteResourceSet(requestBody: DeleteResourceSetRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.DeleteResourceSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Disassociates an Firewall Manager administrator account. To set a different account as an Firewall Manager administrator, submit a <a>PutAdminAccount</a> request. To set an account as a default administrator account, you must submit an <a>AssociateAdminAccount</a> request.</p> <p>Disassociation of the default administrator account follows the first in, last out principle. If you are the default administrator, all Firewall Manager administrators within the organization must first disassociate their accounts before you can disassociate your account.</p>
		 * Post #X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount
		 * @return {void} Success
		 */
		DisassociateAdminAccount(requestBody: DisassociateAdminAccountRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disassociates a Firewall Manager policy administrator from a third-party firewall tenant. When you call <code>DisassociateThirdPartyFirewall</code>, the third-party firewall vendor deletes all of the firewalls that are associated with the account.
		 * Post #X-Amz-Target=AWSFMS_20180101.DisassociateThirdPartyFirewall
		 * @return {DisassociateThirdPartyFirewallResponse} Success
		 */
		DisassociateThirdPartyFirewall(requestBody: DisassociateThirdPartyFirewallRequest): Observable<DisassociateThirdPartyFirewallResponse> {
			return this.http.post<DisassociateThirdPartyFirewallResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.DisassociateThirdPartyFirewall', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the Organizations account that is associated with Firewall Manager as the Firewall Manager default administrator.
		 * Post #X-Amz-Target=AWSFMS_20180101.GetAdminAccount
		 * @return {GetAdminAccountResponse} Success
		 */
		GetAdminAccount(requestBody: GetAdminAccountRequest): Observable<GetAdminAccountResponse> {
			return this.http.post<GetAdminAccountResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.GetAdminAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the specified account's administrative scope. The admistrative scope defines the resources that an Firewall Manager administrator can manage.
		 * Post #X-Amz-Target=AWSFMS_20180101.GetAdminScope
		 * @return {GetAdminScopeResponse} Success
		 */
		GetAdminScope(requestBody: GetAdminScopeRequest): Observable<GetAdminScopeResponse> {
			return this.http.post<GetAdminScopeResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.GetAdminScope', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the specified Firewall Manager applications list.
		 * Post #X-Amz-Target=AWSFMS_20180101.GetAppsList
		 * @return {GetAppsListResponse} Success
		 */
		GetAppsList(requestBody: GetAppsListRequest): Observable<GetAppsListResponse> {
			return this.http.post<GetAppsListResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.GetAppsList', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. </p> <ul> <li> <p>Resources are considered noncompliant for WAF and Shield Advanced policies if the specified policy has not been applied to them.</p> </li> <li> <p>Resources are considered noncompliant for security group policies if they are in scope of the policy, they violate one or more of the policy rules, and remediation is disabled or not possible.</p> </li> <li> <p>Resources are considered noncompliant for Network Firewall policies if a firewall is missing in the VPC, if the firewall endpoint isn't set up in an expected Availability Zone and subnet, if a subnet created by the Firewall Manager doesn't have the expected route table, and for modifications to a firewall policy that violate the Firewall Manager policy's rules.</p> </li> <li> <p>Resources are considered noncompliant for DNS Firewall policies if a DNS Firewall rule group is missing from the rule group associations for the VPC. </p> </li> </ul>
		 * Post #X-Amz-Target=AWSFMS_20180101.GetComplianceDetail
		 * @return {GetComplianceDetailResponse} Success
		 */
		GetComplianceDetail(requestBody: GetComplianceDetailRequest): Observable<GetComplianceDetailResponse> {
			return this.http.post<GetComplianceDetailResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.GetComplianceDetail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Information about the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.
		 * Post #X-Amz-Target=AWSFMS_20180101.GetNotificationChannel
		 * @return {GetNotificationChannelResponse} Success
		 */
		GetNotificationChannel(requestBody: GetNotificationChannelRequest): Observable<GetNotificationChannelResponse> {
			return this.http.post<GetNotificationChannelResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.GetNotificationChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the specified Firewall Manager policy.
		 * Post #X-Amz-Target=AWSFMS_20180101.GetPolicy
		 * @return {GetPolicyResponse} Success
		 */
		GetPolicy(requestBody: GetPolicyRequest): Observable<GetPolicyResponse> {
			return this.http.post<GetPolicyResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.GetPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * If you created a Shield Advanced policy, returns policy-level attack summary information in the event of a potential DDoS attack. Other policy types are currently unsupported.
		 * Post #X-Amz-Target=AWSFMS_20180101.GetProtectionStatus
		 * @return {GetProtectionStatusResponse} Success
		 */
		GetProtectionStatus(requestBody: GetProtectionStatusRequest): Observable<GetProtectionStatusResponse> {
			return this.http.post<GetProtectionStatusResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.GetProtectionStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the specified Firewall Manager protocols list.
		 * Post #X-Amz-Target=AWSFMS_20180101.GetProtocolsList
		 * @return {GetProtocolsListResponse} Success
		 */
		GetProtocolsList(requestBody: GetProtocolsListRequest): Observable<GetProtocolsListResponse> {
			return this.http.post<GetProtocolsListResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.GetProtocolsList', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a specific resource set.
		 * Post #X-Amz-Target=AWSFMS_20180101.GetResourceSet
		 * @return {GetResourceSetResponse} Success
		 */
		GetResourceSet(requestBody: GetResourceSetRequest): Observable<GetResourceSetResponse> {
			return this.http.post<GetResourceSetResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.GetResourceSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The onboarding status of a Firewall Manager admin account to third-party firewall vendor tenant.
		 * Post #X-Amz-Target=AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus
		 * @return {GetThirdPartyFirewallAssociationStatusResponse} Success
		 */
		GetThirdPartyFirewallAssociationStatus(requestBody: GetThirdPartyFirewallAssociationStatusRequest): Observable<GetThirdPartyFirewallAssociationStatusResponse> {
			return this.http.post<GetThirdPartyFirewallAssociationStatusResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.
		 * Post #X-Amz-Target=AWSFMS_20180101.GetViolationDetails
		 * @return {GetViolationDetailsResponse} Success
		 */
		GetViolationDetails(requestBody: GetViolationDetailsRequest): Observable<GetViolationDetailsResponse> {
			return this.http.post<GetViolationDetailsResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.GetViolationDetails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a <code>AdminAccounts</code> object that lists the Firewall Manager administrators within the organization that are onboarded to Firewall Manager by <a>AssociateAdminAccount</a>.</p> <p>This operation can be called only from the organization's management account.</p>
		 * Post #X-Amz-Target=AWSFMS_20180101.ListAdminAccountsForOrganization
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAdminAccountsForOrganizationResponse} Success
		 */
		ListAdminAccountsForOrganization(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAdminAccountsForOrganizationRequest): Observable<ListAdminAccountsForOrganizationResponse> {
			return this.http.post<ListAdminAccountsForOrganizationResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.ListAdminAccountsForOrganization?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the accounts that are managing the specified Organizations member account. This is useful for any member account so that they can view the accounts who are managing their account. This operation only returns the managing administrators that have the requested account within their <a>AdminScope</a>.
		 * Post #X-Amz-Target=AWSFMS_20180101.ListAdminsManagingAccount
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAdminsManagingAccountResponse} Success
		 */
		ListAdminsManagingAccount(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAdminsManagingAccountRequest): Observable<ListAdminsManagingAccountResponse> {
			return this.http.post<ListAdminsManagingAccountResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.ListAdminsManagingAccount?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of <code>AppsListDataSummary</code> objects.
		 * Post #X-Amz-Target=AWSFMS_20180101.ListAppsLists
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAppsListsResponse} Success
		 */
		ListAppsLists(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAppsListsRequest): Observable<ListAppsListsResponse> {
			return this.http.post<ListAppsListsResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.ListAppsLists?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of <code>PolicyComplianceStatus</code> objects. Use <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected by the specified policy.
		 * Post #X-Amz-Target=AWSFMS_20180101.ListComplianceStatus
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListComplianceStatusResponse} Success
		 */
		ListComplianceStatus(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListComplianceStatusRequest): Observable<ListComplianceStatusResponse> {
			return this.http.post<ListComplianceStatusResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.ListComplianceStatus?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of resources in the organization's accounts that are available to be associated with a resource set.
		 * Post #X-Amz-Target=AWSFMS_20180101.ListDiscoveredResources
		 * @return {ListDiscoveredResourcesResponse} Success
		 */
		ListDiscoveredResources(requestBody: ListDiscoveredResourcesRequest): Observable<ListDiscoveredResourcesResponse> {
			return this.http.post<ListDiscoveredResourcesResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.ListDiscoveredResources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the administrator's Amazon Web Services organization.</p> <p>Either an Firewall Manager administrator or the organization's management account can make this request.</p>
		 * Post #X-Amz-Target=AWSFMS_20180101.ListMemberAccounts
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMemberAccountsResponse} Success
		 */
		ListMemberAccounts(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListMemberAccountsRequest): Observable<ListMemberAccountsResponse> {
			return this.http.post<ListMemberAccountsResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.ListMemberAccounts?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of <code>PolicySummary</code> objects.
		 * Post #X-Amz-Target=AWSFMS_20180101.ListPolicies
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPoliciesResponse} Success
		 */
		ListPolicies(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPoliciesRequest): Observable<ListPoliciesResponse> {
			return this.http.post<ListPoliciesResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.ListPolicies?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of <code>ProtocolsListDataSummary</code> objects.
		 * Post #X-Amz-Target=AWSFMS_20180101.ListProtocolsLists
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProtocolsListsResponse} Success
		 */
		ListProtocolsLists(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListProtocolsListsRequest): Observable<ListProtocolsListsResponse> {
			return this.http.post<ListProtocolsListsResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.ListProtocolsLists?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of resources that are currently associated to a resource set.
		 * Post #X-Amz-Target=AWSFMS_20180101.ListResourceSetResources
		 * @return {ListResourceSetResourcesResponse} Success
		 */
		ListResourceSetResources(requestBody: ListResourceSetResourcesRequest): Observable<ListResourceSetResourcesResponse> {
			return this.http.post<ListResourceSetResourcesResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.ListResourceSetResources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of <code>ResourceSetSummary</code> objects.
		 * Post #X-Amz-Target=AWSFMS_20180101.ListResourceSets
		 * @return {ListResourceSetsResponse} Success
		 */
		ListResourceSets(requestBody: ListResourceSetsRequest): Observable<ListResourceSetsResponse> {
			return this.http.post<ListResourceSetsResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.ListResourceSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the list of tags for the specified Amazon Web Services resource.
		 * Post #X-Amz-Target=AWSFMS_20180101.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of all of the third-party firewall policies that are associated with the third-party firewall administrator's account.
		 * Post #X-Amz-Target=AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListThirdPartyFirewallFirewallPoliciesResponse} Success
		 */
		ListThirdPartyFirewallFirewallPolicies(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListThirdPartyFirewallFirewallPoliciesRequest): Observable<ListThirdPartyFirewallFirewallPoliciesResponse> {
			return this.http.post<ListThirdPartyFirewallFirewallPoliciesResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates an Firewall Manager administrator account. The account must be a member of the organization that was onboarded to Firewall Manager by <a>AssociateAdminAccount</a>. Only the organization's management account can create an Firewall Manager administrator account. When you create an Firewall Manager administrator account, the service checks to see if the account is already a delegated administrator within Organizations. If the account isn't a delegated administrator, Firewall Manager calls Organizations to delegate the account within Organizations. For more information about administrator accounts within Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html">Managing the Amazon Web Services Accounts in Your Organization</a>.
		 * Post #X-Amz-Target=AWSFMS_20180101.PutAdminAccount
		 * @return {void} Success
		 */
		PutAdminAccount(requestBody: PutAdminAccountRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.PutAdminAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an Firewall Manager applications list.
		 * Post #X-Amz-Target=AWSFMS_20180101.PutAppsList
		 * @return {PutAppsListResponse} Success
		 */
		PutAppsList(requestBody: PutAppsListRequest): Observable<PutAppsListResponse> {
			return this.http.post<PutAppsListResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.PutAppsList', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that Firewall Manager uses to record SNS logs.</p> <p>To perform this action outside of the console, you must first configure the SNS topic's access policy to allow the <code>SnsRoleName</code> to publish SNS logs. If the <code>SnsRoleName</code> provided is a role other than the <code>AWSServiceRoleForFMS</code> service-linked role, this role must have a trust relationship configured to allow the Firewall Manager service principal <code>fms.amazonaws.com</code> to assume this role. For information about configuring an SNS access policy, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-security_iam_service-with-iam.html#fms-security_iam_service-with-iam-roles-service">Service roles for Firewall Manager</a> in the <i>Firewall Manager Developer Guide</i>.</p>
		 * Post #X-Amz-Target=AWSFMS_20180101.PutNotificationChannel
		 * @return {void} Success
		 */
		PutNotificationChannel(requestBody: PutNotificationChannelRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.PutNotificationChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an Firewall Manager policy.</p> <p>Firewall Manager provides the following types of policies: </p> <ul> <li> <p>An WAF policy (type WAFV2), which defines rule groups to run first in the corresponding WAF web ACL and rule groups to run last in the web ACL.</p> </li> <li> <p>An WAF Classic policy (type WAF), which defines a rule group. </p> </li> <li> <p>A Shield Advanced policy, which applies Shield Advanced protection to specified accounts and resources.</p> </li> <li> <p>A security group policy, which manages VPC security groups across your Amazon Web Services organization. </p> </li> <li> <p>An Network Firewall policy, which provides firewall rules to filter network traffic in specified Amazon VPCs.</p> </li> <li> <p>A DNS Firewall policy, which provides Route 53 Resolver DNS Firewall rules to filter DNS queries for specified VPCs.</p> </li> </ul> <p>Each policy is specific to one of the types. If you want to enforce more than one policy type across accounts, create multiple policies. You can create multiple policies for each type.</p> <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more information about subscribing to Shield Advanced, see <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>
		 * Post #X-Amz-Target=AWSFMS_20180101.PutPolicy
		 * @return {PutPolicyResponse} Success
		 */
		PutPolicy(requestBody: PutPolicyRequest): Observable<PutPolicyResponse> {
			return this.http.post<PutPolicyResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.PutPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an Firewall Manager protocols list.
		 * Post #X-Amz-Target=AWSFMS_20180101.PutProtocolsList
		 * @return {PutProtocolsListResponse} Success
		 */
		PutProtocolsList(requestBody: PutProtocolsListRequest): Observable<PutProtocolsListResponse> {
			return this.http.post<PutProtocolsListResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.PutProtocolsList', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates the resource set.</p> <p>An Firewall Manager resource set defines the resources to import into an Firewall Manager policy from another Amazon Web Services service.</p>
		 * Post #X-Amz-Target=AWSFMS_20180101.PutResourceSet
		 * @return {PutResourceSetResponse} Success
		 */
		PutResourceSet(requestBody: PutResourceSetRequest): Observable<PutResourceSetResponse> {
			return this.http.post<PutResourceSetResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.PutResourceSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds one or more tags to an Amazon Web Services resource.
		 * Post #X-Amz-Target=AWSFMS_20180101.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from an Amazon Web Services resource.
		 * Post #X-Amz-Target=AWSFMS_20180101.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateAdminAccountX_Amz_Target { 'AWSFMS_20180101.AssociateAdminAccount' = 0 }

	export enum AssociateThirdPartyFirewallX_Amz_Target { 'AWSFMS_20180101.AssociateThirdPartyFirewall' = 0 }

	export enum BatchAssociateResourceX_Amz_Target { 'AWSFMS_20180101.BatchAssociateResource' = 0 }

	export enum BatchDisassociateResourceX_Amz_Target { 'AWSFMS_20180101.BatchDisassociateResource' = 0 }

	export enum DeleteAppsListX_Amz_Target { 'AWSFMS_20180101.DeleteAppsList' = 0 }

	export enum DeleteNotificationChannelX_Amz_Target { 'AWSFMS_20180101.DeleteNotificationChannel' = 0 }

	export enum DeletePolicyX_Amz_Target { 'AWSFMS_20180101.DeletePolicy' = 0 }

	export enum DeleteProtocolsListX_Amz_Target { 'AWSFMS_20180101.DeleteProtocolsList' = 0 }

	export enum DeleteResourceSetX_Amz_Target { 'AWSFMS_20180101.DeleteResourceSet' = 0 }

	export enum DisassociateAdminAccountX_Amz_Target { 'AWSFMS_20180101.DisassociateAdminAccount' = 0 }

	export enum DisassociateThirdPartyFirewallX_Amz_Target { 'AWSFMS_20180101.DisassociateThirdPartyFirewall' = 0 }

	export enum GetAdminAccountX_Amz_Target { 'AWSFMS_20180101.GetAdminAccount' = 0 }

	export enum GetAdminScopeX_Amz_Target { 'AWSFMS_20180101.GetAdminScope' = 0 }

	export enum GetAppsListX_Amz_Target { 'AWSFMS_20180101.GetAppsList' = 0 }

	export enum GetComplianceDetailX_Amz_Target { 'AWSFMS_20180101.GetComplianceDetail' = 0 }

	export enum GetNotificationChannelX_Amz_Target { 'AWSFMS_20180101.GetNotificationChannel' = 0 }

	export enum GetPolicyX_Amz_Target { 'AWSFMS_20180101.GetPolicy' = 0 }

	export enum GetProtectionStatusX_Amz_Target { 'AWSFMS_20180101.GetProtectionStatus' = 0 }

	export enum GetProtocolsListX_Amz_Target { 'AWSFMS_20180101.GetProtocolsList' = 0 }

	export enum GetResourceSetX_Amz_Target { 'AWSFMS_20180101.GetResourceSet' = 0 }

	export enum GetThirdPartyFirewallAssociationStatusX_Amz_Target { 'AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus' = 0 }

	export enum GetViolationDetailsX_Amz_Target { 'AWSFMS_20180101.GetViolationDetails' = 0 }

	export enum ListAdminAccountsForOrganizationX_Amz_Target { 'AWSFMS_20180101.ListAdminAccountsForOrganization' = 0 }

	export enum ListAdminsManagingAccountX_Amz_Target { 'AWSFMS_20180101.ListAdminsManagingAccount' = 0 }

	export enum ListAppsListsX_Amz_Target { 'AWSFMS_20180101.ListAppsLists' = 0 }

	export enum ListComplianceStatusX_Amz_Target { 'AWSFMS_20180101.ListComplianceStatus' = 0 }

	export enum ListDiscoveredResourcesX_Amz_Target { 'AWSFMS_20180101.ListDiscoveredResources' = 0 }

	export enum ListMemberAccountsX_Amz_Target { 'AWSFMS_20180101.ListMemberAccounts' = 0 }

	export enum ListPoliciesX_Amz_Target { 'AWSFMS_20180101.ListPolicies' = 0 }

	export enum ListProtocolsListsX_Amz_Target { 'AWSFMS_20180101.ListProtocolsLists' = 0 }

	export enum ListResourceSetResourcesX_Amz_Target { 'AWSFMS_20180101.ListResourceSetResources' = 0 }

	export enum ListResourceSetsX_Amz_Target { 'AWSFMS_20180101.ListResourceSets' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'AWSFMS_20180101.ListTagsForResource' = 0 }

	export enum ListThirdPartyFirewallFirewallPoliciesX_Amz_Target { 'AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies' = 0 }

	export enum PutAdminAccountX_Amz_Target { 'AWSFMS_20180101.PutAdminAccount' = 0 }

	export enum PutAppsListX_Amz_Target { 'AWSFMS_20180101.PutAppsList' = 0 }

	export enum PutNotificationChannelX_Amz_Target { 'AWSFMS_20180101.PutNotificationChannel' = 0 }

	export enum PutPolicyX_Amz_Target { 'AWSFMS_20180101.PutPolicy' = 0 }

	export enum PutProtocolsListX_Amz_Target { 'AWSFMS_20180101.PutProtocolsList' = 0 }

	export enum PutResourceSetX_Amz_Target { 'AWSFMS_20180101.PutResourceSet' = 0 }

	export enum TagResourceX_Amz_Target { 'AWSFMS_20180101.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'AWSFMS_20180101.UntagResource' = 0 }

}

