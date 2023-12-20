import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateDRTLogBucketResponse {
	}
	export interface AssociateDRTLogBucketResponseFormProperties {
	}
	export function CreateAssociateDRTLogBucketResponseFormGroup() {
		return new FormGroup<AssociateDRTLogBucketResponseFormProperties>({
		});

	}

	export interface AssociateDRTLogBucketRequest {
		LogBucket: string;
	}
	export interface AssociateDRTLogBucketRequestFormProperties {
		LogBucket: FormControl<string | null | undefined>,
	}
	export function CreateAssociateDRTLogBucketRequestFormGroup() {
		return new FormGroup<AssociateDRTLogBucketRequestFormProperties>({
			LogBucket: new FormControl<string | null | undefined>(undefined),
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

	export interface InvalidOperationException {
	}
	export interface InvalidOperationExceptionFormProperties {
	}
	export function CreateInvalidOperationExceptionFormGroup() {
		return new FormGroup<InvalidOperationExceptionFormProperties>({
		});

	}

	export interface NoAssociatedRoleException {
	}
	export interface NoAssociatedRoleExceptionFormProperties {
	}
	export function CreateNoAssociatedRoleExceptionFormGroup() {
		return new FormGroup<NoAssociatedRoleExceptionFormProperties>({
		});

	}

	export interface LimitsExceededException {
	}
	export interface LimitsExceededExceptionFormProperties {
	}
	export function CreateLimitsExceededExceptionFormGroup() {
		return new FormGroup<LimitsExceededExceptionFormProperties>({
		});

	}

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
		});

	}

	export interface AccessDeniedForDependencyException {
	}
	export interface AccessDeniedForDependencyExceptionFormProperties {
	}
	export function CreateAccessDeniedForDependencyExceptionFormGroup() {
		return new FormGroup<AccessDeniedForDependencyExceptionFormProperties>({
		});

	}

	export interface OptimisticLockException {
	}
	export interface OptimisticLockExceptionFormProperties {
	}
	export function CreateOptimisticLockExceptionFormGroup() {
		return new FormGroup<OptimisticLockExceptionFormProperties>({
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

	export interface AssociateDRTRoleResponse {
	}
	export interface AssociateDRTRoleResponseFormProperties {
	}
	export function CreateAssociateDRTRoleResponseFormGroup() {
		return new FormGroup<AssociateDRTRoleResponseFormProperties>({
		});

	}

	export interface AssociateDRTRoleRequest {
		RoleArn: string;
	}
	export interface AssociateDRTRoleRequestFormProperties {
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateDRTRoleRequestFormGroup() {
		return new FormGroup<AssociateDRTRoleRequestFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateHealthCheckResponse {
	}
	export interface AssociateHealthCheckResponseFormProperties {
	}
	export function CreateAssociateHealthCheckResponseFormGroup() {
		return new FormGroup<AssociateHealthCheckResponseFormProperties>({
		});

	}

	export interface AssociateHealthCheckRequest {
		ProtectionId: string;
		HealthCheckArn: string;
	}
	export interface AssociateHealthCheckRequestFormProperties {
		ProtectionId: FormControl<string | null | undefined>,
		HealthCheckArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateHealthCheckRequestFormGroup() {
		return new FormGroup<AssociateHealthCheckRequestFormProperties>({
			ProtectionId: new FormControl<string | null | undefined>(undefined),
			HealthCheckArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateProactiveEngagementDetailsResponse {
	}
	export interface AssociateProactiveEngagementDetailsResponseFormProperties {
	}
	export function CreateAssociateProactiveEngagementDetailsResponseFormGroup() {
		return new FormGroup<AssociateProactiveEngagementDetailsResponseFormProperties>({
		});

	}

	export interface AssociateProactiveEngagementDetailsRequest {
		EmergencyContactList: Array<EmergencyContact>;
	}
	export interface AssociateProactiveEngagementDetailsRequestFormProperties {
	}
	export function CreateAssociateProactiveEngagementDetailsRequestFormGroup() {
		return new FormGroup<AssociateProactiveEngagementDetailsRequestFormProperties>({
		});

	}


	/** Contact information that the DRT can use to contact you if you have proactive engagement enabled, for escalations to the DRT and to initiate proactive customer support. */
	export interface EmergencyContact {
		EmailAddress: string;
		PhoneNumber?: string | null;
		ContactNotes?: string | null;
	}

	/** Contact information that the DRT can use to contact you if you have proactive engagement enabled, for escalations to the DRT and to initiate proactive customer support. */
	export interface EmergencyContactFormProperties {
		EmailAddress: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
		ContactNotes: FormControl<string | null | undefined>,
	}
	export function CreateEmergencyContactFormGroup() {
		return new FormGroup<EmergencyContactFormProperties>({
			EmailAddress: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			ContactNotes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProtectionResponse {
		ProtectionId?: string | null;
	}
	export interface CreateProtectionResponseFormProperties {
		ProtectionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateProtectionResponseFormGroup() {
		return new FormGroup<CreateProtectionResponseFormProperties>({
			ProtectionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProtectionRequest {
		Name: string;
		ResourceArn: string;
	}
	export interface CreateProtectionRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateProtectionRequestFormGroup() {
		return new FormGroup<CreateProtectionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidResourceException {
	}
	export interface InvalidResourceExceptionFormProperties {
	}
	export function CreateInvalidResourceExceptionFormGroup() {
		return new FormGroup<InvalidResourceExceptionFormProperties>({
		});

	}

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface CreateSubscriptionResponse {
	}
	export interface CreateSubscriptionResponseFormProperties {
	}
	export function CreateCreateSubscriptionResponseFormGroup() {
		return new FormGroup<CreateSubscriptionResponseFormProperties>({
		});

	}

	export interface CreateSubscriptionRequest {
	}
	export interface CreateSubscriptionRequestFormProperties {
	}
	export function CreateCreateSubscriptionRequestFormGroup() {
		return new FormGroup<CreateSubscriptionRequestFormProperties>({
		});

	}

	export interface DeleteProtectionResponse {
	}
	export interface DeleteProtectionResponseFormProperties {
	}
	export function CreateDeleteProtectionResponseFormGroup() {
		return new FormGroup<DeleteProtectionResponseFormProperties>({
		});

	}

	export interface DeleteProtectionRequest {
		ProtectionId: string;
	}
	export interface DeleteProtectionRequestFormProperties {
		ProtectionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProtectionRequestFormGroup() {
		return new FormGroup<DeleteProtectionRequestFormProperties>({
			ProtectionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteSubscriptionResponse {
	}
	export interface DeleteSubscriptionResponseFormProperties {
	}
	export function CreateDeleteSubscriptionResponseFormGroup() {
		return new FormGroup<DeleteSubscriptionResponseFormProperties>({
		});

	}

	export interface DeleteSubscriptionRequest {
	}
	export interface DeleteSubscriptionRequestFormProperties {
	}
	export function CreateDeleteSubscriptionRequestFormGroup() {
		return new FormGroup<DeleteSubscriptionRequestFormProperties>({
		});

	}

	export interface LockedSubscriptionException {
	}
	export interface LockedSubscriptionExceptionFormProperties {
	}
	export function CreateLockedSubscriptionExceptionFormGroup() {
		return new FormGroup<LockedSubscriptionExceptionFormProperties>({
		});

	}

	export interface DescribeAttackResponse {

		/** The details of a DDoS attack. */
		Attack?: AttackDetail;
	}
	export interface DescribeAttackResponseFormProperties {
	}
	export function CreateDescribeAttackResponseFormGroup() {
		return new FormGroup<DescribeAttackResponseFormProperties>({
		});

	}


	/** The details of a DDoS attack. */
	export interface AttackDetail {
		AttackId?: string | null;
		ResourceArn?: string | null;
		SubResources?: Array<SubResourceSummary>;
		StartTime?: Date | null;
		EndTime?: Date | null;
		AttackCounters?: Array<SummarizedCounter>;
		AttackProperties?: Array<AttackProperty>;
		Mitigations?: Array<Mitigation>;
	}

	/** The details of a DDoS attack. */
	export interface AttackDetailFormProperties {
		AttackId: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateAttackDetailFormGroup() {
		return new FormGroup<AttackDetailFormProperties>({
			AttackId: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The attack information for the specified SubResource. */
	export interface SubResourceSummary {
		Type?: SubResourceSummaryType | null;
		Id?: string | null;
		AttackVectors?: Array<SummarizedAttackVector>;
		Counters?: Array<SummarizedCounter>;
	}

	/** The attack information for the specified SubResource. */
	export interface SubResourceSummaryFormProperties {
		Type: FormControl<SubResourceSummaryType | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateSubResourceSummaryFormGroup() {
		return new FormGroup<SubResourceSummaryFormProperties>({
			Type: new FormControl<SubResourceSummaryType | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SubResourceSummaryType { IP = 0, URL = 1 }


	/** A summary of information about the attack. */
	export interface SummarizedAttackVector {
		VectorType: string;
		VectorCounters?: Array<SummarizedCounter>;
	}

	/** A summary of information about the attack. */
	export interface SummarizedAttackVectorFormProperties {
		VectorType: FormControl<string | null | undefined>,
	}
	export function CreateSummarizedAttackVectorFormGroup() {
		return new FormGroup<SummarizedAttackVectorFormProperties>({
			VectorType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The counter that describes a DDoS attack. */
	export interface SummarizedCounter {
		Name?: string | null;
		Max?: number | null;
		Average?: number | null;
		Sum?: number | null;
		N?: number | null;
		Unit?: string | null;
	}

	/** The counter that describes a DDoS attack. */
	export interface SummarizedCounterFormProperties {
		Name: FormControl<string | null | undefined>,
		Max: FormControl<number | null | undefined>,
		Average: FormControl<number | null | undefined>,
		Sum: FormControl<number | null | undefined>,
		N: FormControl<number | null | undefined>,
		Unit: FormControl<string | null | undefined>,
	}
	export function CreateSummarizedCounterFormGroup() {
		return new FormGroup<SummarizedCounterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Max: new FormControl<number | null | undefined>(undefined),
			Average: new FormControl<number | null | undefined>(undefined),
			Sum: new FormControl<number | null | undefined>(undefined),
			N: new FormControl<number | null | undefined>(undefined),
			Unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of the described attack. */
	export interface AttackProperty {
		AttackLayer?: AttackPropertyAttackLayer | null;
		AttackPropertyIdentifier?: AttackPropertyAttackPropertyIdentifier | null;
		TopContributors?: Array<Contributor>;
		Unit?: AttackPropertyUnit | null;
		Total?: number | null;
	}

	/** Details of the described attack. */
	export interface AttackPropertyFormProperties {
		AttackLayer: FormControl<AttackPropertyAttackLayer | null | undefined>,
		AttackPropertyIdentifier: FormControl<AttackPropertyAttackPropertyIdentifier | null | undefined>,
		Unit: FormControl<AttackPropertyUnit | null | undefined>,
		Total: FormControl<number | null | undefined>,
	}
	export function CreateAttackPropertyFormGroup() {
		return new FormGroup<AttackPropertyFormProperties>({
			AttackLayer: new FormControl<AttackPropertyAttackLayer | null | undefined>(undefined),
			AttackPropertyIdentifier: new FormControl<AttackPropertyAttackPropertyIdentifier | null | undefined>(undefined),
			Unit: new FormControl<AttackPropertyUnit | null | undefined>(undefined),
			Total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AttackPropertyAttackLayer { NETWORK = 0, APPLICATION = 1 }

	export enum AttackPropertyAttackPropertyIdentifier { DESTINATION_URL = 0, REFERRER = 1, SOURCE_ASN = 2, SOURCE_COUNTRY = 3, SOURCE_IP_ADDRESS = 4, SOURCE_USER_AGENT = 5, WORDPRESS_PINGBACK_REFLECTOR = 6, WORDPRESS_PINGBACK_SOURCE = 7 }


	/** A contributor to the attack and their contribution. */
	export interface Contributor {
		Name?: string | null;
		Value?: number | null;
	}

	/** A contributor to the attack and their contribution. */
	export interface ContributorFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<number | null | undefined>,
	}
	export function CreateContributorFormGroup() {
		return new FormGroup<ContributorFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AttackPropertyUnit { BITS = 0, BYTES = 1, PACKETS = 2, REQUESTS = 3 }


	/** The mitigation applied to a DDoS attack. */
	export interface Mitigation {
		MitigationName?: string | null;
	}

	/** The mitigation applied to a DDoS attack. */
	export interface MitigationFormProperties {
		MitigationName: FormControl<string | null | undefined>,
	}
	export function CreateMitigationFormGroup() {
		return new FormGroup<MitigationFormProperties>({
			MitigationName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAttackRequest {
		AttackId: string;
	}
	export interface DescribeAttackRequestFormProperties {
		AttackId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAttackRequestFormGroup() {
		return new FormGroup<DescribeAttackRequestFormProperties>({
			AttackId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface DescribeDRTAccessResponse {
		RoleArn?: string | null;
		LogBucketList?: Array<string>;
	}
	export interface DescribeDRTAccessResponseFormProperties {
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDRTAccessResponseFormGroup() {
		return new FormGroup<DescribeDRTAccessResponseFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDRTAccessRequest {
	}
	export interface DescribeDRTAccessRequestFormProperties {
	}
	export function CreateDescribeDRTAccessRequestFormGroup() {
		return new FormGroup<DescribeDRTAccessRequestFormProperties>({
		});

	}

	export interface DescribeEmergencyContactSettingsResponse {
		EmergencyContactList?: Array<EmergencyContact>;
	}
	export interface DescribeEmergencyContactSettingsResponseFormProperties {
	}
	export function CreateDescribeEmergencyContactSettingsResponseFormGroup() {
		return new FormGroup<DescribeEmergencyContactSettingsResponseFormProperties>({
		});

	}

	export interface DescribeEmergencyContactSettingsRequest {
	}
	export interface DescribeEmergencyContactSettingsRequestFormProperties {
	}
	export function CreateDescribeEmergencyContactSettingsRequestFormGroup() {
		return new FormGroup<DescribeEmergencyContactSettingsRequestFormProperties>({
		});

	}

	export interface DescribeProtectionResponse {

		/** An object that represents a resource that is under DDoS protection. */
		Protection?: Protection;
	}
	export interface DescribeProtectionResponseFormProperties {
	}
	export function CreateDescribeProtectionResponseFormGroup() {
		return new FormGroup<DescribeProtectionResponseFormProperties>({
		});

	}


	/** An object that represents a resource that is under DDoS protection. */
	export interface Protection {
		Id?: string | null;
		Name?: string | null;
		ResourceArn?: string | null;
		HealthCheckIds?: Array<string>;
	}

	/** An object that represents a resource that is under DDoS protection. */
	export interface ProtectionFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateProtectionFormGroup() {
		return new FormGroup<ProtectionFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeProtectionRequest {
		ProtectionId?: string | null;
		ResourceArn?: string | null;
	}
	export interface DescribeProtectionRequestFormProperties {
		ProtectionId: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProtectionRequestFormGroup() {
		return new FormGroup<DescribeProtectionRequestFormProperties>({
			ProtectionId: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSubscriptionResponse {

		/** Information about the AWS Shield Advanced subscription for an account. */
		Subscription?: Subscription;
	}
	export interface DescribeSubscriptionResponseFormProperties {
	}
	export function CreateDescribeSubscriptionResponseFormGroup() {
		return new FormGroup<DescribeSubscriptionResponseFormProperties>({
		});

	}


	/** Information about the AWS Shield Advanced subscription for an account. */
	export interface Subscription {
		StartTime?: Date | null;
		EndTime?: Date | null;
		TimeCommitmentInSeconds?: number | null;
		AutoRenew?: SubscriptionAutoRenew | null;
		Limits?: Array<Limit>;
		ProactiveEngagementStatus?: SubscriptionProactiveEngagementStatus | null;
	}

	/** Information about the AWS Shield Advanced subscription for an account. */
	export interface SubscriptionFormProperties {
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		TimeCommitmentInSeconds: FormControl<number | null | undefined>,
		AutoRenew: FormControl<SubscriptionAutoRenew | null | undefined>,
		ProactiveEngagementStatus: FormControl<SubscriptionProactiveEngagementStatus | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			TimeCommitmentInSeconds: new FormControl<number | null | undefined>(undefined),
			AutoRenew: new FormControl<SubscriptionAutoRenew | null | undefined>(undefined),
			ProactiveEngagementStatus: new FormControl<SubscriptionProactiveEngagementStatus | null | undefined>(undefined),
		});

	}

	export enum SubscriptionAutoRenew { ENABLED = 0, DISABLED = 1 }


	/** Specifies how many protections of a given type you can create. */
	export interface Limit {
		Type?: string | null;
		Max?: number | null;
	}

	/** Specifies how many protections of a given type you can create. */
	export interface LimitFormProperties {
		Type: FormControl<string | null | undefined>,
		Max: FormControl<number | null | undefined>,
	}
	export function CreateLimitFormGroup() {
		return new FormGroup<LimitFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
			Max: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SubscriptionProactiveEngagementStatus { ENABLED = 0, DISABLED = 1, PENDING = 2 }

	export interface DescribeSubscriptionRequest {
	}
	export interface DescribeSubscriptionRequestFormProperties {
	}
	export function CreateDescribeSubscriptionRequestFormGroup() {
		return new FormGroup<DescribeSubscriptionRequestFormProperties>({
		});

	}

	export interface DisableProactiveEngagementResponse {
	}
	export interface DisableProactiveEngagementResponseFormProperties {
	}
	export function CreateDisableProactiveEngagementResponseFormGroup() {
		return new FormGroup<DisableProactiveEngagementResponseFormProperties>({
		});

	}

	export interface DisableProactiveEngagementRequest {
	}
	export interface DisableProactiveEngagementRequestFormProperties {
	}
	export function CreateDisableProactiveEngagementRequestFormGroup() {
		return new FormGroup<DisableProactiveEngagementRequestFormProperties>({
		});

	}

	export interface DisassociateDRTLogBucketResponse {
	}
	export interface DisassociateDRTLogBucketResponseFormProperties {
	}
	export function CreateDisassociateDRTLogBucketResponseFormGroup() {
		return new FormGroup<DisassociateDRTLogBucketResponseFormProperties>({
		});

	}

	export interface DisassociateDRTLogBucketRequest {
		LogBucket: string;
	}
	export interface DisassociateDRTLogBucketRequestFormProperties {
		LogBucket: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateDRTLogBucketRequestFormGroup() {
		return new FormGroup<DisassociateDRTLogBucketRequestFormProperties>({
			LogBucket: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateDRTRoleResponse {
	}
	export interface DisassociateDRTRoleResponseFormProperties {
	}
	export function CreateDisassociateDRTRoleResponseFormGroup() {
		return new FormGroup<DisassociateDRTRoleResponseFormProperties>({
		});

	}

	export interface DisassociateDRTRoleRequest {
	}
	export interface DisassociateDRTRoleRequestFormProperties {
	}
	export function CreateDisassociateDRTRoleRequestFormGroup() {
		return new FormGroup<DisassociateDRTRoleRequestFormProperties>({
		});

	}

	export interface DisassociateHealthCheckResponse {
	}
	export interface DisassociateHealthCheckResponseFormProperties {
	}
	export function CreateDisassociateHealthCheckResponseFormGroup() {
		return new FormGroup<DisassociateHealthCheckResponseFormProperties>({
		});

	}

	export interface DisassociateHealthCheckRequest {
		ProtectionId: string;
		HealthCheckArn: string;
	}
	export interface DisassociateHealthCheckRequestFormProperties {
		ProtectionId: FormControl<string | null | undefined>,
		HealthCheckArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateHealthCheckRequestFormGroup() {
		return new FormGroup<DisassociateHealthCheckRequestFormProperties>({
			ProtectionId: new FormControl<string | null | undefined>(undefined),
			HealthCheckArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnableProactiveEngagementResponse {
	}
	export interface EnableProactiveEngagementResponseFormProperties {
	}
	export function CreateEnableProactiveEngagementResponseFormGroup() {
		return new FormGroup<EnableProactiveEngagementResponseFormProperties>({
		});

	}

	export interface EnableProactiveEngagementRequest {
	}
	export interface EnableProactiveEngagementRequestFormProperties {
	}
	export function CreateEnableProactiveEngagementRequestFormGroup() {
		return new FormGroup<EnableProactiveEngagementRequestFormProperties>({
		});

	}

	export interface GetSubscriptionStateResponse {
		SubscriptionState: GetSubscriptionStateResponseSubscriptionState;
	}
	export interface GetSubscriptionStateResponseFormProperties {
		SubscriptionState: FormControl<GetSubscriptionStateResponseSubscriptionState | null | undefined>,
	}
	export function CreateGetSubscriptionStateResponseFormGroup() {
		return new FormGroup<GetSubscriptionStateResponseFormProperties>({
			SubscriptionState: new FormControl<GetSubscriptionStateResponseSubscriptionState | null | undefined>(undefined),
		});

	}

	export enum GetSubscriptionStateResponseSubscriptionState { ACTIVE = 0, INACTIVE = 1 }

	export interface GetSubscriptionStateRequest {
	}
	export interface GetSubscriptionStateRequestFormProperties {
	}
	export function CreateGetSubscriptionStateRequestFormGroup() {
		return new FormGroup<GetSubscriptionStateRequestFormProperties>({
		});

	}

	export interface ListAttacksResponse {
		AttackSummaries?: Array<AttackSummary>;
		NextToken?: string | null;
	}
	export interface ListAttacksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAttacksResponseFormGroup() {
		return new FormGroup<ListAttacksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summarizes all DDoS attacks for a specified time period. */
	export interface AttackSummary {
		AttackId?: string | null;
		ResourceArn?: string | null;
		StartTime?: Date | null;
		EndTime?: Date | null;
		AttackVectors?: Array<AttackVectorDescription>;
	}

	/** Summarizes all DDoS attacks for a specified time period. */
	export interface AttackSummaryFormProperties {
		AttackId: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateAttackSummaryFormGroup() {
		return new FormGroup<AttackSummaryFormProperties>({
			AttackId: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes the attack. */
	export interface AttackVectorDescription {
		VectorType: string;
	}

	/** Describes the attack. */
	export interface AttackVectorDescriptionFormProperties {
		VectorType: FormControl<string | null | undefined>,
	}
	export function CreateAttackVectorDescriptionFormGroup() {
		return new FormGroup<AttackVectorDescriptionFormProperties>({
			VectorType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAttacksRequest {
		ResourceArns?: Array<string>;

		/** The time range. */
		StartTime?: TimeRange;

		/** The time range. */
		EndTime?: TimeRange;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListAttacksRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAttacksRequestFormGroup() {
		return new FormGroup<ListAttacksRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The time range. */
	export interface TimeRange {
		FromInclusive?: Date | null;
		ToExclusive?: Date | null;
	}

	/** The time range. */
	export interface TimeRangeFormProperties {
		FromInclusive: FormControl<Date | null | undefined>,
		ToExclusive: FormControl<Date | null | undefined>,
	}
	export function CreateTimeRangeFormGroup() {
		return new FormGroup<TimeRangeFormProperties>({
			FromInclusive: new FormControl<Date | null | undefined>(undefined),
			ToExclusive: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListProtectionsResponse {
		Protections?: Array<Protection>;
		NextToken?: string | null;
	}
	export interface ListProtectionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProtectionsResponseFormGroup() {
		return new FormGroup<ListProtectionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProtectionsRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListProtectionsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListProtectionsRequestFormGroup() {
		return new FormGroup<ListProtectionsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvalidPaginationTokenException {
	}
	export interface InvalidPaginationTokenExceptionFormProperties {
	}
	export function CreateInvalidPaginationTokenExceptionFormGroup() {
		return new FormGroup<InvalidPaginationTokenExceptionFormProperties>({
		});

	}

	export interface UpdateEmergencyContactSettingsResponse {
	}
	export interface UpdateEmergencyContactSettingsResponseFormProperties {
	}
	export function CreateUpdateEmergencyContactSettingsResponseFormGroup() {
		return new FormGroup<UpdateEmergencyContactSettingsResponseFormProperties>({
		});

	}

	export interface UpdateEmergencyContactSettingsRequest {
		EmergencyContactList?: Array<EmergencyContact>;
	}
	export interface UpdateEmergencyContactSettingsRequestFormProperties {
	}
	export function CreateUpdateEmergencyContactSettingsRequestFormGroup() {
		return new FormGroup<UpdateEmergencyContactSettingsRequestFormProperties>({
		});

	}

	export interface UpdateSubscriptionResponse {
	}
	export interface UpdateSubscriptionResponseFormProperties {
	}
	export function CreateUpdateSubscriptionResponseFormGroup() {
		return new FormGroup<UpdateSubscriptionResponseFormProperties>({
		});

	}

	export interface UpdateSubscriptionRequest {
		AutoRenew?: SubscriptionAutoRenew | null;
	}
	export interface UpdateSubscriptionRequestFormProperties {
		AutoRenew: FormControl<SubscriptionAutoRenew | null | undefined>,
	}
	export function CreateUpdateSubscriptionRequestFormGroup() {
		return new FormGroup<UpdateSubscriptionRequestFormProperties>({
			AutoRenew: new FormControl<SubscriptionAutoRenew | null | undefined>(undefined),
		});

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
		ListAttacks(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAttacksRequest): Observable<ListAttacksResponse> {
			return this.http.post<ListAttacksResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.ListAttacks?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all <a>Protection</a> objects for the account.
		 * Post #X-Amz-Target=AWSShield_20160616.ListProtections
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProtectionsResponse} Success
		 */
		ListProtections(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListProtectionsRequest): Observable<ListProtectionsResponse> {
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

