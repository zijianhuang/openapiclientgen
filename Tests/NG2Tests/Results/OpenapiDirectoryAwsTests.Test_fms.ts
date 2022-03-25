import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AssociateAdminAccountRequest {
		AdminAccount: string;
	}

	export interface InvalidOperationException {
	}

	export interface InvalidInputException {
	}

	export interface ResourceNotFoundException {
	}

	export interface InternalErrorException {
	}

	export interface DeleteNotificationChannelRequest {
	}

	export interface DeletePolicyRequest {
		PolicyId: string;
		DeleteAllPolicyResources?: boolean;
	}

	export interface DisassociateAdminAccountRequest {
	}

	export interface GetAdminAccountResponse {
		AdminAccount?: string;
		RoleStatus?: GetAdminAccountResponseRoleStatus;
	}

	export enum GetAdminAccountResponseRoleStatus { READY = 0, CREATING = 1, PENDING_DELETION = 2, DELETING = 3, DELETED = 4 }

	export interface GetAdminAccountRequest {
	}

	export interface GetComplianceDetailResponse {

		/** Describes the noncompliant resources in a member account for a specific AWS Firewall Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are noncompliant, <code>EvaluationLimitExceeded</code> is set to <code>True</code>. */
		PolicyComplianceDetail?: PolicyComplianceDetail;
	}


	/** Describes the noncompliant resources in a member account for a specific AWS Firewall Manager policy. A maximum of 100 entries are displayed. If more than 100 resources are noncompliant, <code>EvaluationLimitExceeded</code> is set to <code>True</code>. */
	export interface PolicyComplianceDetail {
		PolicyOwner?: string;
		PolicyId?: string;
		MemberAccount?: string;
		Violators?: Array<ComplianceViolator>;
		EvaluationLimitExceeded?: boolean;
		ExpiredAt?: Date;
		IssueInfoMap?: IssueInfoMap;
	}


	/** Details of the resource that is not protected by the policy. */
	export interface ComplianceViolator {
		ResourceId?: string;
		ViolationReason?: ComplianceViolatorViolationReason;
		ResourceType?: string;
	}

	export enum ComplianceViolatorViolationReason { WEB_ACL_MISSING_RULE_GROUP = 0, RESOURCE_MISSING_WEB_ACL = 1, RESOURCE_INCORRECT_WEB_ACL = 2, RESOURCE_MISSING_SHIELD_PROTECTION = 3, RESOURCE_MISSING_WEB_ACL_OR_SHIELD_PROTECTION = 4, RESOURCE_MISSING_SECURITY_GROUP = 5, RESOURCE_VIOLATES_AUDIT_SECURITY_GROUP = 6, SECURITY_GROUP_UNUSED = 7, SECURITY_GROUP_REDUNDANT = 8 }

	export interface IssueInfoMap {
	}

	export interface GetComplianceDetailRequest {
		PolicyId: string;
		MemberAccount: string;
	}

	export interface GetNotificationChannelResponse {
		SnsTopicArn?: string;
		SnsRoleName?: string;
	}

	export interface GetNotificationChannelRequest {
	}

	export interface GetPolicyResponse {

		/** An AWS Firewall Manager policy. */
		Policy?: Policy;
		PolicyArn?: string;
	}


	/** An AWS Firewall Manager policy. */
	export interface Policy {
		PolicyId?: string;
		PolicyName: string;
		PolicyUpdateToken?: string;

		/**
		 * Details about the security service that is being used to protect the resources.
		 * Required
		 */
		SecurityServicePolicyData: SecurityServicePolicyData;
		ResourceType: string;
		ResourceTypeList?: Array<string>;
		ResourceTags?: Array<ResourceTag>;
		ExcludeResourceTags: boolean;
		RemediationEnabled: boolean;
		IncludeMap?: CustomerPolicyScopeMap;
		ExcludeMap?: CustomerPolicyScopeMap;
	}


	/** Details about the security service that is being used to protect the resources. */
	export interface SecurityServicePolicyData {
		Type: SecurityServicePolicyDataType;
		ManagedServiceData?: string;
	}

	export enum SecurityServicePolicyDataType { WAF = 0, WAFV2 = 1, SHIELD_ADVANCED = 2, SECURITY_GROUPS_COMMON = 3, SECURITY_GROUPS_CONTENT_AUDIT = 4, SECURITY_GROUPS_USAGE_AUDIT = 5 }


	/** The resource tags that AWS Firewall Manager uses to determine if a particular resource should be included or excluded from the AWS Firewall Manager policy. Tags enable you to categorize your AWS resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value. Firewall Manager combines the tags with "AND" so that, if you add more than one tag to a policy scope, a resource must have all the specified tags to be included or excluded. For more information, see <a href="https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/tag-editor.html">Working with Tag Editor</a>. */
	export interface ResourceTag {
		Key: string;
		Value?: string;
	}

	export interface CustomerPolicyScopeMap {
	}

	export interface GetPolicyRequest {
		PolicyId: string;
	}

	export interface InvalidTypeException {
	}

	export interface GetProtectionStatusResponse {
		AdminAccountId?: string;
		ServiceType?: SecurityServicePolicyDataType;
		Data?: string;
		NextToken?: string;
	}

	export interface GetProtectionStatusRequest {
		PolicyId: string;
		MemberAccountId?: string;
		StartTime?: Date;
		EndTime?: Date;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListComplianceStatusResponse {
		PolicyComplianceStatusList?: Array<PolicyComplianceStatus>;
		NextToken?: string;
	}


	/** Indicates whether the account is compliant with the specified policy. An account is considered noncompliant if it includes resources that are not protected by the policy, for AWS WAF and Shield Advanced policies, or that are noncompliant with the policy, for security group policies. */
	export interface PolicyComplianceStatus {
		PolicyOwner?: string;
		PolicyId?: string;
		PolicyName?: string;
		MemberAccount?: string;
		EvaluationResults?: Array<EvaluationResult>;
		LastUpdated?: Date;
		IssueInfoMap?: IssueInfoMap;
	}


	/** Describes the compliance status for the account. An account is considered noncompliant if it includes resources that are not protected by the specified policy or that don't comply with the policy. */
	export interface EvaluationResult {
		ComplianceStatus?: EvaluationResultComplianceStatus;
		ViolatorCount?: number;
		EvaluationLimitExceeded?: boolean;
	}

	export enum EvaluationResultComplianceStatus { COMPLIANT = 0, NON_COMPLIANT = 1 }

	export interface ListComplianceStatusRequest {
		PolicyId: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListMemberAccountsResponse {
		MemberAccounts?: Array<string>;
		NextToken?: string;
	}

	export interface ListMemberAccountsRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListPoliciesResponse {
		PolicyList?: Array<PolicySummary>;
		NextToken?: string;
	}


	/** Details of the AWS Firewall Manager policy.  */
	export interface PolicySummary {
		PolicyArn?: string;
		PolicyId?: string;
		PolicyName?: string;
		ResourceType?: string;
		SecurityServiceType?: SecurityServicePolicyDataType;
		RemediationEnabled?: boolean;
	}

	export interface ListPoliciesRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface LimitExceededException {
	}

	export interface ListTagsForResourceResponse {
		TagList?: Array<Tag>;
	}


	/** A collection of key:value pairs associated with an AWS resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.  */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface ListTagsForResourceRequest {
		ResourceArn: string;
	}

	export interface PutNotificationChannelRequest {
		SnsTopicArn: string;
		SnsRoleName: string;
	}

	export interface PutPolicyResponse {

		/** An AWS Firewall Manager policy. */
		Policy?: Policy;
		PolicyArn?: string;
	}

	export interface PutPolicyRequest {

		/**
		 * An AWS Firewall Manager policy.
		 * Required
		 */
		Policy: Policy;
		TagList?: Array<Tag>;
	}

	export interface TagResourceResponse {
	}

	export interface TagResourceRequest {
		ResourceArn: string;
		TagList: Array<Tag>;
	}

	export interface UntagResourceResponse {
	}

	export interface UntagResourceRequest {
		ResourceArn: string;
		TagKeys: Array<string>;
	}

	export enum AccountRoleStatus { READY = 0, CREATING = 1, PENDING_DELETION = 2, DELETING = 3, DELETED = 4 }

	export enum ViolationReason { WEB_ACL_MISSING_RULE_GROUP = 0, RESOURCE_MISSING_WEB_ACL = 1, RESOURCE_INCORRECT_WEB_ACL = 2, RESOURCE_MISSING_SHIELD_PROTECTION = 3, RESOURCE_MISSING_WEB_ACL_OR_SHIELD_PROTECTION = 4, RESOURCE_MISSING_SECURITY_GROUP = 5, RESOURCE_VIOLATES_AUDIT_SECURITY_GROUP = 6, SECURITY_GROUP_UNUSED = 7, SECURITY_GROUP_REDUNDANT = 8 }

	export enum CustomerPolicyScopeIdType { ACCOUNT = 0, ORG_UNIT = 1 }

	export enum DependentServiceName { AWSCONFIG = 0, AWSWAF = 1, AWSSHIELD_ADVANCED = 2, AWSVPC = 3 }

	export enum PolicyComplianceStatusType { COMPLIANT = 0, NON_COMPLIANT = 1 }

	export enum SecurityServiceType { WAF = 0, WAFV2 = 1, SHIELD_ADVANCED = 2, SECURITY_GROUPS_COMMON = 3, SECURITY_GROUPS_CONTENT_AUDIT = 4, SECURITY_GROUPS_USAGE_AUDIT = 5 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Sets the AWS Firewall Manager administrator account. AWS Firewall Manager must be associated with the master account of your AWS organization or associated with a member account that has the appropriate permissions. If the account ID that you submit is not an AWS Organizations master account, AWS Firewall Manager will set the appropriate permissions for the given member account.</p> <p>The account that you associate with AWS Firewall Manager is called the AWS Firewall Manager administrator account. </p>
		 * Post #X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount
		 * @return {void} Success
		 */
		AssociateAdminAccount(requestBody: AssociateAdminAccountRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.AssociateAdminAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an AWS Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs.
		 * Post #X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel
		 * @return {void} Success
		 */
		DeleteNotificationChannel(requestBody: DeleteNotificationChannelRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.DeleteNotificationChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently deletes an AWS Firewall Manager policy.
		 * Post #X-Amz-Target=AWSFMS_20180101.DeletePolicy
		 * @return {void} Success
		 */
		DeletePolicy(requestBody: DeletePolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.DeletePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disassociates the account that has been set as the AWS Firewall Manager administrator account. To set a different account as the administrator account, you must submit an <code>AssociateAdminAccount</code> request.
		 * Post #X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount
		 * @return {void} Success
		 */
		DisassociateAdminAccount(requestBody: DisassociateAdminAccountRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.DisassociateAdminAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the AWS Organizations master account that is associated with AWS Firewall Manager as the AWS Firewall Manager administrator.
		 * Post #X-Amz-Target=AWSFMS_20180101.GetAdminAccount
		 * @return {GetAdminAccountResponse} Success
		 */
		GetAdminAccount(requestBody: GetAdminAccountRequest): Observable<GetAdminAccountResponse> {
			return this.http.post<GetAdminAccountResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.GetAdminAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. Resources are considered noncompliant for AWS WAF and Shield Advanced policies if the specified policy has not been applied to them. Resources are considered noncompliant for security group policies if they are in scope of the policy, they violate one or more of the policy rules, and remediation is disabled or not possible.
		 * Post #X-Amz-Target=AWSFMS_20180101.GetComplianceDetail
		 * @return {GetComplianceDetailResponse} Success
		 */
		GetComplianceDetail(requestBody: GetComplianceDetailRequest): Observable<GetComplianceDetailResponse> {
			return this.http.post<GetComplianceDetailResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.GetComplianceDetail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Information about the Amazon Simple Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs.
		 * Post #X-Amz-Target=AWSFMS_20180101.GetNotificationChannel
		 * @return {GetNotificationChannelResponse} Success
		 */
		GetNotificationChannel(requestBody: GetNotificationChannelRequest): Observable<GetNotificationChannelResponse> {
			return this.http.post<GetNotificationChannelResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.GetNotificationChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the specified AWS Firewall Manager policy.
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
		 * Returns an array of <code>PolicyComplianceStatus</code> objects in the response. Use <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected by the specified policy.
		 * Post #X-Amz-Target=AWSFMS_20180101.ListComplianceStatus
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListComplianceStatusResponse} Success
		 */
		ListComplianceStatus(MaxResults: string, NextToken: string, requestBody: ListComplianceStatusRequest): Observable<ListComplianceStatusResponse> {
			return this.http.post<ListComplianceStatusResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.ListComplianceStatus?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the administrator's AWS organization.</p> <p>The <code>ListMemberAccounts</code> must be submitted by the account that is set as the AWS Firewall Manager administrator.</p>
		 * Post #X-Amz-Target=AWSFMS_20180101.ListMemberAccounts
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMemberAccountsResponse} Success
		 */
		ListMemberAccounts(MaxResults: string, NextToken: string, requestBody: ListMemberAccountsRequest): Observable<ListMemberAccountsResponse> {
			return this.http.post<ListMemberAccountsResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.ListMemberAccounts?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of <code>PolicySummary</code> objects in the response.
		 * Post #X-Amz-Target=AWSFMS_20180101.ListPolicies
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPoliciesResponse} Success
		 */
		ListPolicies(MaxResults: string, NextToken: string, requestBody: ListPoliciesRequest): Observable<ListPoliciesResponse> {
			return this.http.post<ListPoliciesResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.ListPolicies?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the list of tags for the specified AWS resource.
		 * Post #X-Amz-Target=AWSFMS_20180101.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Designates the IAM role and Amazon Simple Notification Service (SNS) topic that AWS Firewall Manager uses to record SNS logs.
		 * Post #X-Amz-Target=AWSFMS_20180101.PutNotificationChannel
		 * @return {void} Success
		 */
		PutNotificationChannel(requestBody: PutNotificationChannelRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.PutNotificationChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an AWS Firewall Manager policy.</p> <p>Firewall Manager provides the following types of policies: </p> <ul> <li> <p>A Shield Advanced policy, which applies Shield Advanced protection to specified accounts and resources</p> </li> <li> <p>An AWS WAF policy (type WAFV2), which defines rule groups to run first in the corresponding AWS WAF web ACL and rule groups to run last in the web ACL.</p> </li> <li> <p>An AWS WAF Classic policy (type WAF), which defines a rule group. </p> </li> <li> <p>A security group policy, which manages VPC security groups across your AWS organization. </p> </li> </ul> <p>Each policy is specific to one of the types. If you want to enforce more than one policy type across accounts, create multiple policies. You can create multiple policies for each type.</p> <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more information about subscribing to Shield Advanced, see <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>
		 * Post #X-Amz-Target=AWSFMS_20180101.PutPolicy
		 * @return {PutPolicyResponse} Success
		 */
		PutPolicy(requestBody: PutPolicyRequest): Observable<PutPolicyResponse> {
			return this.http.post<PutPolicyResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.PutPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds one or more tags to an AWS resource.
		 * Post #X-Amz-Target=AWSFMS_20180101.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from an AWS resource.
		 * Post #X-Amz-Target=AWSFMS_20180101.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSFMS_20180101.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateAdminAccountX_Amz_Target { AWSFMS_20180101_AssociateAdminAccount = 0 }

	export enum DeleteNotificationChannelX_Amz_Target { AWSFMS_20180101_DeleteNotificationChannel = 0 }

	export enum DeletePolicyX_Amz_Target { AWSFMS_20180101_DeletePolicy = 0 }

	export enum DisassociateAdminAccountX_Amz_Target { AWSFMS_20180101_DisassociateAdminAccount = 0 }

	export enum GetAdminAccountX_Amz_Target { AWSFMS_20180101_GetAdminAccount = 0 }

	export enum GetComplianceDetailX_Amz_Target { AWSFMS_20180101_GetComplianceDetail = 0 }

	export enum GetNotificationChannelX_Amz_Target { AWSFMS_20180101_GetNotificationChannel = 0 }

	export enum GetPolicyX_Amz_Target { AWSFMS_20180101_GetPolicy = 0 }

	export enum GetProtectionStatusX_Amz_Target { AWSFMS_20180101_GetProtectionStatus = 0 }

	export enum ListComplianceStatusX_Amz_Target { AWSFMS_20180101_ListComplianceStatus = 0 }

	export enum ListMemberAccountsX_Amz_Target { AWSFMS_20180101_ListMemberAccounts = 0 }

	export enum ListPoliciesX_Amz_Target { AWSFMS_20180101_ListPolicies = 0 }

	export enum ListTagsForResourceX_Amz_Target { AWSFMS_20180101_ListTagsForResource = 0 }

	export enum PutNotificationChannelX_Amz_Target { AWSFMS_20180101_PutNotificationChannel = 0 }

	export enum PutPolicyX_Amz_Target { AWSFMS_20180101_PutPolicy = 0 }

	export enum TagResourceX_Amz_Target { AWSFMS_20180101_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { AWSFMS_20180101_UntagResource = 0 }

}

