import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AssociateDRTLogBucketResponse {
	}

	export interface AssociateDRTLogBucketRequest {
		LogBucket: string;
	}

	export interface InternalErrorException {
	}

	export interface InvalidOperationException {
	}

	export interface NoAssociatedRoleException {
	}

	export interface LimitsExceededException {
	}

	export interface InvalidParameterException {
	}

	export interface AccessDeniedForDependencyException {
	}

	export interface OptimisticLockException {
	}

	export interface ResourceNotFoundException {
	}

	export interface AssociateDRTRoleResponse {
	}

	export interface AssociateDRTRoleRequest {
		RoleArn: string;
	}

	export interface AssociateHealthCheckResponse {
	}

	export interface AssociateHealthCheckRequest {
		ProtectionId: string;
		HealthCheckArn: string;
	}

	export interface AssociateProactiveEngagementDetailsResponse {
	}

	export interface AssociateProactiveEngagementDetailsRequest {
		EmergencyContactList: Array<EmergencyContact>;
	}


	/** Contact information that the DRT can use to contact you if you have proactive engagement enabled, for escalations to the DRT and to initiate proactive customer support. */
	export interface EmergencyContact {
		EmailAddress: string;
		PhoneNumber?: string;
		ContactNotes?: string;
	}

	export interface CreateProtectionResponse {
		ProtectionId?: string;
	}

	export interface CreateProtectionRequest {
		Name: string;
		ResourceArn: string;
	}

	export interface InvalidResourceException {
	}

	export interface ResourceAlreadyExistsException {
	}

	export interface CreateSubscriptionResponse {
	}

	export interface CreateSubscriptionRequest {
	}

	export interface DeleteProtectionResponse {
	}

	export interface DeleteProtectionRequest {
		ProtectionId: string;
	}

	export interface DeleteSubscriptionResponse {
	}

	export interface DeleteSubscriptionRequest {
	}

	export interface LockedSubscriptionException {
	}

	export interface DescribeAttackResponse {

		/** The details of a DDoS attack. */
		Attack?: AttackDetail;
	}


	/** The details of a DDoS attack. */
	export interface AttackDetail {
		AttackId?: string;
		ResourceArn?: string;
		SubResources?: Array<SubResourceSummary>;
		StartTime?: Date;
		EndTime?: Date;
		AttackCounters?: Array<SummarizedCounter>;
		AttackProperties?: Array<AttackProperty>;
		Mitigations?: Array<Mitigation>;
	}


	/** The attack information for the specified SubResource. */
	export interface SubResourceSummary {
		Type?: SubResourceSummaryType;
		Id?: string;
		AttackVectors?: Array<SummarizedAttackVector>;
		Counters?: Array<SummarizedCounter>;
	}

	export enum SubResourceSummaryType { IP = 0, URL = 1 }


	/** A summary of information about the attack. */
	export interface SummarizedAttackVector {
		VectorType: string;
		VectorCounters?: Array<SummarizedCounter>;
	}


	/** The counter that describes a DDoS attack. */
	export interface SummarizedCounter {
		Name?: string;
		Max?: number;
		Average?: number;
		Sum?: number;
		N?: number;
		Unit?: string;
	}


	/** Details of the described attack. */
	export interface AttackProperty {
		AttackLayer?: AttackPropertyAttackLayer;
		AttackPropertyIdentifier?: AttackPropertyAttackPropertyIdentifier;
		TopContributors?: Array<Contributor>;
		Unit?: AttackPropertyUnit;
		Total?: number;
	}

	export enum AttackPropertyAttackLayer { NETWORK = 0, APPLICATION = 1 }

	export enum AttackPropertyAttackPropertyIdentifier { DESTINATION_URL = 0, REFERRER = 1, SOURCE_ASN = 2, SOURCE_COUNTRY = 3, SOURCE_IP_ADDRESS = 4, SOURCE_USER_AGENT = 5, WORDPRESS_PINGBACK_REFLECTOR = 6, WORDPRESS_PINGBACK_SOURCE = 7 }


	/** A contributor to the attack and their contribution. */
	export interface Contributor {
		Name?: string;
		Value?: number;
	}

	export enum AttackPropertyUnit { BITS = 0, BYTES = 1, PACKETS = 2, REQUESTS = 3 }


	/** The mitigation applied to a DDoS attack. */
	export interface Mitigation {
		MitigationName?: string;
	}

	export interface DescribeAttackRequest {
		AttackId: string;
	}

	export interface AccessDeniedException {
	}

	export interface DescribeDRTAccessResponse {
		RoleArn?: string;
		LogBucketList?: Array<string>;
	}

	export interface DescribeDRTAccessRequest {
	}

	export interface DescribeEmergencyContactSettingsResponse {
		EmergencyContactList?: Array<EmergencyContact>;
	}

	export interface DescribeEmergencyContactSettingsRequest {
	}

	export interface DescribeProtectionResponse {

		/** An object that represents a resource that is under DDoS protection. */
		Protection?: Protection;
	}


	/** An object that represents a resource that is under DDoS protection. */
	export interface Protection {
		Id?: string;
		Name?: string;
		ResourceArn?: string;
		HealthCheckIds?: Array<string>;
	}

	export interface DescribeProtectionRequest {
		ProtectionId?: string;
		ResourceArn?: string;
	}

	export interface DescribeSubscriptionResponse {

		/** Information about the AWS Shield Advanced subscription for an account. */
		Subscription?: Subscription;
	}


	/** Information about the AWS Shield Advanced subscription for an account. */
	export interface Subscription {
		StartTime?: Date;
		EndTime?: Date;
		TimeCommitmentInSeconds?: number;
		AutoRenew?: SubscriptionAutoRenew;
		Limits?: Array<Limit>;
		ProactiveEngagementStatus?: SubscriptionProactiveEngagementStatus;
	}

	export enum SubscriptionAutoRenew { ENABLED = 0, DISABLED = 1 }


	/** Specifies how many protections of a given type you can create. */
	export interface Limit {
		Type?: string;
		Max?: number;
	}

	export enum SubscriptionProactiveEngagementStatus { ENABLED = 0, DISABLED = 1, PENDING = 2 }

	export interface DescribeSubscriptionRequest {
	}

	export interface DisableProactiveEngagementResponse {
	}

	export interface DisableProactiveEngagementRequest {
	}

	export interface DisassociateDRTLogBucketResponse {
	}

	export interface DisassociateDRTLogBucketRequest {
		LogBucket: string;
	}

	export interface DisassociateDRTRoleResponse {
	}

	export interface DisassociateDRTRoleRequest {
	}

	export interface DisassociateHealthCheckResponse {
	}

	export interface DisassociateHealthCheckRequest {
		ProtectionId: string;
		HealthCheckArn: string;
	}

	export interface EnableProactiveEngagementResponse {
	}

	export interface EnableProactiveEngagementRequest {
	}

	export interface GetSubscriptionStateResponse {
		SubscriptionState: GetSubscriptionStateResponseSubscriptionState;
	}

	export enum GetSubscriptionStateResponseSubscriptionState { ACTIVE = 0, INACTIVE = 1 }

	export interface GetSubscriptionStateRequest {
	}

	export interface ListAttacksResponse {
		AttackSummaries?: Array<AttackSummary>;
		NextToken?: string;
	}


	/** Summarizes all DDoS attacks for a specified time period. */
	export interface AttackSummary {
		AttackId?: string;
		ResourceArn?: string;
		StartTime?: Date;
		EndTime?: Date;
		AttackVectors?: Array<AttackVectorDescription>;
	}


	/** Describes the attack. */
	export interface AttackVectorDescription {
		VectorType: string;
	}

	export interface ListAttacksRequest {
		ResourceArns?: Array<string>;

		/** The time range. */
		StartTime?: TimeRange;

		/** The time range. */
		EndTime?: TimeRange;
		NextToken?: string;
		MaxResults?: number;
	}


	/** The time range. */
	export interface TimeRange {
		FromInclusive?: Date;
		ToExclusive?: Date;
	}

	export interface ListProtectionsResponse {
		Protections?: Array<Protection>;
		NextToken?: string;
	}

	export interface ListProtectionsRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface InvalidPaginationTokenException {
	}

	export interface UpdateEmergencyContactSettingsResponse {
	}

	export interface UpdateEmergencyContactSettingsRequest {
		EmergencyContactList?: Array<EmergencyContact>;
	}

	export interface UpdateSubscriptionResponse {
	}

	export interface UpdateSubscriptionRequest {
		AutoRenew?: SubscriptionAutoRenew;
	}

	export enum AttackLayer { NETWORK = 0, APPLICATION = 1 }

	export enum AttackPropertyIdentifier { DESTINATION_URL = 0, REFERRER = 1, SOURCE_ASN = 2, SOURCE_COUNTRY = 3, SOURCE_IP_ADDRESS = 4, SOURCE_USER_AGENT = 5, WORDPRESS_PINGBACK_REFLECTOR = 6, WORDPRESS_PINGBACK_SOURCE = 7 }

	export enum Unit { BITS = 0, BYTES = 1, PACKETS = 2, REQUESTS = 3 }

	export enum AutoRenew { ENABLED = 0, DISABLED = 1 }

	export enum SubscriptionState { ACTIVE = 0, INACTIVE = 1 }

	export enum ProactiveEngagementStatus { ENABLED = 0, DISABLED = 1, PENDING = 2 }

	export enum SubResourceType { IP = 0, URL = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Authorizes the DDoS Response Team (DRT) to access the specified Amazon S3 bucket containing your AWS WAF logs. You can associate up to 10 Amazon S3 buckets with your subscription.</p> <p>To use the services of the DRT and make an <code>AssociateDRTLogBucket</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
		 * Post #X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket
		 * @return {AssociateDRTLogBucketResponse} Success
		 */
		AssociateDRTLogBucket(requestBody: AssociateDRTLogBucketRequest): Observable<AssociateDRTLogBucketResponse> {
			return this.http.post<AssociateDRTLogBucketResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Authorizes the DDoS Response Team (DRT), using the specified role, to access your AWS account to assist with DDoS attack mitigation during potential attacks. This enables the DRT to inspect your AWS WAF configuration and create or update AWS WAF rules and web ACLs.</p> <p>You can associate only one <code>RoleArn</code> with your subscription. If you submit an <code>AssociateDRTRole</code> request for an account that already has an associated role, the new <code>RoleArn</code> will replace the existing <code>RoleArn</code>. </p> <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a> managed policy to the role you will specify in the request. For more information see <a href=" https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Attaching and Detaching IAM Policies</a>. The role must also trust the service principal <code> drt.shield.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">IAM JSON Policy Elements: Principal</a>.</p> <p>The DRT will have access only to your AWS WAF and Shield resources. By submitting this request, you authorize the DRT to inspect your AWS WAF and Shield configuration and create and update AWS WAF rules and web ACLs on your behalf. The DRT takes these actions only if explicitly authorized by you.</p> <p>You must have the <code>iam:PassRole</code> permission to make an <code>AssociateDRTRole</code> request. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a User Permissions to Pass a Role to an AWS Service</a>. </p> <p>To use the services of the DRT and make an <code>AssociateDRTRole</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
		 * Post #X-Amz-Target=AWSShield_20160616.AssociateDRTRole
		 * @return {AssociateDRTRoleResponse} Success
		 */
		AssociateDRTRole(requestBody: AssociateDRTRoleRequest): Observable<AssociateDRTRoleResponse> {
			return this.http.post<AssociateDRTRoleResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.AssociateDRTRole', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds health-based detection to the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your AWS resource to improve responsiveness and accuracy in attack detection and mitigation. </p> <p>You define the health check in Route 53 and then associate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF and AWS Shield Developer Guide</a>. </p>
		 * Post #X-Amz-Target=AWSShield_20160616.AssociateHealthCheck
		 * @return {AssociateHealthCheckResponse} Success
		 */
		AssociateHealthCheck(requestBody: AssociateHealthCheckRequest): Observable<AssociateHealthCheckResponse> {
			return this.http.post<AssociateHealthCheckResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.AssociateHealthCheck', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Initializes proactive engagement and sets the list of contacts for the DDoS Response Team (DRT) to use. You must provide at least one phone number in the emergency contact list. </p> <p>After you have initialized proactive engagement using this call, to disable or enable proactive engagement, use the calls <code>DisableProactiveEngagement</code> and <code>EnableProactiveEngagement</code>. </p> <note> <p>This call defines the list of email addresses and phone numbers that the DDoS Response Team (DRT) can use to contact you for escalations to the DRT and to initiate proactive customer support.</p> <p>The contacts that you provide in the request replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using <code>DescribeEmergencyContactSettings</code> and then provide it to this call. </p> </note>
		 * Post #X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails
		 * @return {AssociateProactiveEngagementDetailsResponse} Success
		 */
		AssociateProactiveEngagementDetails(requestBody: AssociateProactiveEngagementDetailsRequest): Observable<AssociateProactiveEngagementDetailsResponse> {
			return this.http.post<AssociateProactiveEngagementDetailsResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Enables AWS Shield Advanced for a specific AWS resource. The resource can be an Amazon CloudFront distribution, Elastic Load Balancing load balancer, AWS Global Accelerator accelerator, Elastic IP Address, or an Amazon Route 53 hosted zone.</p> <p>You can add protection to only a single resource with each CreateProtection request. If you want to add protection to multiple resources at once, use the <a href="https://console.aws.amazon.com/waf/">AWS WAF console</a>. For more information see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with AWS Shield Advanced</a> and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/configure-new-protection.html">Add AWS Shield Advanced Protection to more AWS Resources</a>.</p>
		 * Post #X-Amz-Target=AWSShield_20160616.CreateProtection
		 * @return {CreateProtectionResponse} Success
		 */
		CreateProtection(requestBody: CreateProtectionRequest): Observable<CreateProtectionResponse> {
			return this.http.post<CreateProtectionResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.CreateProtection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Activates AWS Shield Advanced for an account.</p> <p>As part of this request you can specify <code>EmergencySettings</code> that automaticaly grant the DDoS response team (DRT) needed permissions to assist you during a suspected DDoS attack. For more information see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/authorize-DRT.html">Authorize the DDoS Response Team to Create Rules and Web ACLs on Your Behalf</a>.</p> <p>To use the services of the DRT, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p> <p>When you initally create a subscription, your subscription is set to be automatically renewed at the end of the existing subscription period. You can change this by submitting an <code>UpdateSubscription</code> request. </p>
		 * Post #X-Amz-Target=AWSShield_20160616.CreateSubscription
		 * @return {CreateSubscriptionResponse} Success
		 */
		CreateSubscription(requestBody: CreateSubscriptionRequest): Observable<CreateSubscriptionResponse> {
			return this.http.post<CreateSubscriptionResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.CreateSubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an AWS Shield Advanced <a>Protection</a>.
		 * Post #X-Amz-Target=AWSShield_20160616.DeleteProtection
		 * @return {DeleteProtectionResponse} Success
		 */
		DeleteProtection(requestBody: DeleteProtectionRequest): Observable<DeleteProtectionResponse> {
			return this.http.post<DeleteProtectionResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.DeleteProtection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes AWS Shield Advanced from an account. AWS Shield Advanced requires a 1-year subscription commitment. You cannot delete a subscription prior to the completion of that commitment.
		 * Post #X-Amz-Target=AWSShield_20160616.DeleteSubscription
		 * @return {DeleteSubscriptionResponse} Success
		 */
		DeleteSubscription(requestBody: DeleteSubscriptionRequest): Observable<DeleteSubscriptionResponse> {
			return this.http.post<DeleteSubscriptionResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.DeleteSubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the details of a DDoS attack.
		 * Post #X-Amz-Target=AWSShield_20160616.DescribeAttack
		 * @return {DescribeAttackResponse} Success
		 */
		DescribeAttack(requestBody: DescribeAttackRequest): Observable<DescribeAttackResponse> {
			return this.http.post<DescribeAttackResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.DescribeAttack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the current role and list of Amazon S3 log buckets used by the DDoS Response Team (DRT) to access your AWS account while assisting with attack mitigation.
		 * Post #X-Amz-Target=AWSShield_20160616.DescribeDRTAccess
		 * @return {DescribeDRTAccessResponse} Success
		 */
		DescribeDRTAccess(requestBody: DescribeDRTAccessRequest): Observable<DescribeDRTAccessResponse> {
			return this.http.post<DescribeDRTAccessResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.DescribeDRTAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A list of email addresses and phone numbers that the DDoS Response Team (DRT) can use to contact you if you have proactive engagement enabled, for escalations to the DRT and to initiate proactive customer support.
		 * Post #X-Amz-Target=AWSShield_20160616.DescribeEmergencyContactSettings
		 * @return {DescribeEmergencyContactSettingsResponse} Success
		 */
		DescribeEmergencyContactSettings(requestBody: DescribeEmergencyContactSettingsRequest): Observable<DescribeEmergencyContactSettingsResponse> {
			return this.http.post<DescribeEmergencyContactSettingsResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.DescribeEmergencyContactSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the details of a <a>Protection</a> object.
		 * Post #X-Amz-Target=AWSShield_20160616.DescribeProtection
		 * @return {DescribeProtectionResponse} Success
		 */
		DescribeProtection(requestBody: DescribeProtectionRequest): Observable<DescribeProtectionResponse> {
			return this.http.post<DescribeProtectionResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.DescribeProtection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides details about the AWS Shield Advanced subscription for an account.
		 * Post #X-Amz-Target=AWSShield_20160616.DescribeSubscription
		 * @return {DescribeSubscriptionResponse} Success
		 */
		DescribeSubscription(requestBody: DescribeSubscriptionRequest): Observable<DescribeSubscriptionResponse> {
			return this.http.post<DescribeSubscriptionResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.DescribeSubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes authorization from the DDoS Response Team (DRT) to notify contacts about escalations to the DRT and to initiate proactive customer support.
		 * Post #X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement
		 * @return {DisableProactiveEngagementResponse} Success
		 */
		DisableProactiveEngagement(requestBody: DisableProactiveEngagementRequest): Observable<DisableProactiveEngagementResponse> {
			return this.http.post<DisableProactiveEngagementResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the DDoS Response Team's (DRT) access to the specified Amazon S3 bucket containing your AWS WAF logs.</p> <p>To make a <code>DisassociateDRTLogBucket</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>. However, if you are not subscribed to one of these support plans, but had been previously and had granted the DRT access to your account, you can submit a <code>DisassociateDRTLogBucket</code> request to remove this access.</p>
		 * Post #X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket
		 * @return {DisassociateDRTLogBucketResponse} Success
		 */
		DisassociateDRTLogBucket(requestBody: DisassociateDRTLogBucketRequest): Observable<DisassociateDRTLogBucketResponse> {
			return this.http.post<DisassociateDRTLogBucketResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the DDoS Response Team's (DRT) access to your AWS account.</p> <p>To make a <code>DisassociateDRTRole</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>. However, if you are not subscribed to one of these support plans, but had been previously and had granted the DRT access to your account, you can submit a <code>DisassociateDRTRole</code> request to remove this access.</p>
		 * Post #X-Amz-Target=AWSShield_20160616.DisassociateDRTRole
		 * @return {DisassociateDRTRoleResponse} Success
		 */
		DisassociateDRTRole(requestBody: DisassociateDRTRoleRequest): Observable<DisassociateDRTRoleResponse> {
			return this.http.post<DisassociateDRTRoleResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.DisassociateDRTRole', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes health-based detection from the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your AWS resource to improve responsiveness and accuracy in attack detection and mitigation. </p> <p>You define the health check in Route 53 and then associate or disassociate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF and AWS Shield Developer Guide</a>. </p>
		 * Post #X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck
		 * @return {DisassociateHealthCheckResponse} Success
		 */
		DisassociateHealthCheck(requestBody: DisassociateHealthCheckRequest): Observable<DisassociateHealthCheckResponse> {
			return this.http.post<DisassociateHealthCheckResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Authorizes the DDoS Response Team (DRT) to use email and phone to notify contacts about escalations to the DRT and to initiate proactive customer support.
		 * Post #X-Amz-Target=AWSShield_20160616.EnableProactiveEngagement
		 * @return {EnableProactiveEngagementResponse} Success
		 */
		EnableProactiveEngagement(requestBody: EnableProactiveEngagementRequest): Observable<EnableProactiveEngagementResponse> {
			return this.http.post<EnableProactiveEngagementResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.EnableProactiveEngagement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the <code>SubscriptionState</code>, either <code>Active</code> or <code>Inactive</code>.
		 * Post #X-Amz-Target=AWSShield_20160616.GetSubscriptionState
		 * @return {GetSubscriptionStateResponse} Success
		 */
		GetSubscriptionState(requestBody: GetSubscriptionStateRequest): Observable<GetSubscriptionStateResponse> {
			return this.http.post<GetSubscriptionStateResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.GetSubscriptionState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all ongoing DDoS attacks or all DDoS attacks during a specified time period.
		 * Post #X-Amz-Target=AWSShield_20160616.ListAttacks
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAttacksResponse} Success
		 */
		ListAttacks(MaxResults: string, NextToken: string, requestBody: ListAttacksRequest): Observable<ListAttacksResponse> {
			return this.http.post<ListAttacksResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.ListAttacks?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all <a>Protection</a> objects for the account.
		 * Post #X-Amz-Target=AWSShield_20160616.ListProtections
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProtectionsResponse} Success
		 */
		ListProtections(MaxResults: string, NextToken: string, requestBody: ListProtectionsRequest): Observable<ListProtectionsResponse> {
			return this.http.post<ListProtectionsResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.ListProtections?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the details of the list of email addresses and phone numbers that the DDoS Response Team (DRT) can use to contact you if you have proactive engagement enabled, for escalations to the DRT and to initiate proactive customer support.
		 * Post #X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings
		 * @return {UpdateEmergencyContactSettingsResponse} Success
		 */
		UpdateEmergencyContactSettings(requestBody: UpdateEmergencyContactSettingsRequest): Observable<UpdateEmergencyContactSettingsResponse> {
			return this.http.post<UpdateEmergencyContactSettingsResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the details of an existing subscription. Only enter values for parameters you want to change. Empty parameters are not updated.
		 * Post #X-Amz-Target=AWSShield_20160616.UpdateSubscription
		 * @return {UpdateSubscriptionResponse} Success
		 */
		UpdateSubscription(requestBody: UpdateSubscriptionRequest): Observable<UpdateSubscriptionResponse> {
			return this.http.post<UpdateSubscriptionResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.UpdateSubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateDRTLogBucketX_Amz_Target { AWSShield_20160616_AssociateDRTLogBucket = 0 }

	export enum AssociateDRTRoleX_Amz_Target { AWSShield_20160616_AssociateDRTRole = 0 }

	export enum AssociateHealthCheckX_Amz_Target { AWSShield_20160616_AssociateHealthCheck = 0 }

	export enum AssociateProactiveEngagementDetailsX_Amz_Target { AWSShield_20160616_AssociateProactiveEngagementDetails = 0 }

	export enum CreateProtectionX_Amz_Target { AWSShield_20160616_CreateProtection = 0 }

	export enum CreateSubscriptionX_Amz_Target { AWSShield_20160616_CreateSubscription = 0 }

	export enum DeleteProtectionX_Amz_Target { AWSShield_20160616_DeleteProtection = 0 }

	export enum DeleteSubscriptionX_Amz_Target { AWSShield_20160616_DeleteSubscription = 0 }

	export enum DescribeAttackX_Amz_Target { AWSShield_20160616_DescribeAttack = 0 }

	export enum DescribeDRTAccessX_Amz_Target { AWSShield_20160616_DescribeDRTAccess = 0 }

	export enum DescribeEmergencyContactSettingsX_Amz_Target { AWSShield_20160616_DescribeEmergencyContactSettings = 0 }

	export enum DescribeProtectionX_Amz_Target { AWSShield_20160616_DescribeProtection = 0 }

	export enum DescribeSubscriptionX_Amz_Target { AWSShield_20160616_DescribeSubscription = 0 }

	export enum DisableProactiveEngagementX_Amz_Target { AWSShield_20160616_DisableProactiveEngagement = 0 }

	export enum DisassociateDRTLogBucketX_Amz_Target { AWSShield_20160616_DisassociateDRTLogBucket = 0 }

	export enum DisassociateDRTRoleX_Amz_Target { AWSShield_20160616_DisassociateDRTRole = 0 }

	export enum DisassociateHealthCheckX_Amz_Target { AWSShield_20160616_DisassociateHealthCheck = 0 }

	export enum EnableProactiveEngagementX_Amz_Target { AWSShield_20160616_EnableProactiveEngagement = 0 }

	export enum GetSubscriptionStateX_Amz_Target { AWSShield_20160616_GetSubscriptionState = 0 }

	export enum ListAttacksX_Amz_Target { AWSShield_20160616_ListAttacks = 0 }

	export enum ListProtectionsX_Amz_Target { AWSShield_20160616_ListProtections = 0 }

	export enum UpdateEmergencyContactSettingsX_Amz_Target { AWSShield_20160616_UpdateEmergencyContactSettings = 0 }

	export enum UpdateSubscriptionX_Amz_Target { AWSShield_20160616_UpdateSubscription = 0 }

}

