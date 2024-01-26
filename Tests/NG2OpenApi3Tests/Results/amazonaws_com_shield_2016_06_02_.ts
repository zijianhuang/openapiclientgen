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

		/** Required */
		LogBucket: string;
	}
	export interface AssociateDRTLogBucketRequestFormProperties {

		/** Required */
		LogBucket: FormControl<string | null | undefined>,
	}
	export function CreateAssociateDRTLogBucketRequestFormGroup() {
		return new FormGroup<AssociateDRTLogBucketRequestFormProperties>({
			LogBucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		RoleArn: string;
	}
	export interface AssociateDRTRoleRequestFormProperties {

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateDRTRoleRequestFormGroup() {
		return new FormGroup<AssociateDRTRoleRequestFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		ProtectionId: string;

		/** Required */
		HealthCheckArn: string;
	}
	export interface AssociateHealthCheckRequestFormProperties {

		/** Required */
		ProtectionId: FormControl<string | null | undefined>,

		/** Required */
		HealthCheckArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateHealthCheckRequestFormGroup() {
		return new FormGroup<AssociateHealthCheckRequestFormProperties>({
			ProtectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HealthCheckArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface AssociateProactiveEngagementDetailsResponse {
	}
	export interface AssociateProactiveEngagementDetailsResponseFormProperties {
	}
	export function CreateAssociateProactiveEngagementDetailsResponseFormGroup() {
		return new FormGroup<AssociateProactiveEngagementDetailsResponseFormProperties>({
		});

	}

	export interface AssociateProactiveEngagementDetailsRequest {

		/** Required */
		EmergencyContactList: Array<EmergencyContact>;
	}
	export interface AssociateProactiveEngagementDetailsRequestFormProperties {
	}
	export function CreateAssociateProactiveEngagementDetailsRequestFormGroup() {
		return new FormGroup<AssociateProactiveEngagementDetailsRequestFormProperties>({
		});

	}


	/** Contact information that the SRT can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support. */
	export interface EmergencyContact {

		/** Required */
		EmailAddress: string;
		PhoneNumber?: string;
		ContactNotes?: string;
	}

	/** Contact information that the SRT can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support. */
	export interface EmergencyContactFormProperties {

		/** Required */
		EmailAddress: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
		ContactNotes: FormControl<string | null | undefined>,
	}
	export function CreateEmergencyContactFormGroup() {
		return new FormGroup<EmergencyContactFormProperties>({
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			ContactNotes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProtectionResponse {
		ProtectionId?: string;
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

		/** Required */
		Name: string;

		/** Required */
		ResourceArn: string;
		Tags?: Array<Tag>;
	}
	export interface CreateProtectionRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateProtectionRequestFormGroup() {
		return new FormGroup<CreateProtectionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A tag associated with an Amazon Web Services resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	/** A tag associated with an Amazon Web Services resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource. */
	export interface TagFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
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

	export interface CreateProtectionGroupResponse {
	}
	export interface CreateProtectionGroupResponseFormProperties {
	}
	export function CreateCreateProtectionGroupResponseFormGroup() {
		return new FormGroup<CreateProtectionGroupResponseFormProperties>({
		});

	}

	export interface CreateProtectionGroupRequest {

		/** Required */
		ProtectionGroupId: string;

		/** Required */
		Aggregation: ProtectionGroupAggregation;

		/** Required */
		Pattern: ProtectionGroupPattern;
		ResourceType?: ProtectedResourceType;
		Members?: Array<string>;
		Tags?: Array<Tag>;
	}
	export interface CreateProtectionGroupRequestFormProperties {

		/** Required */
		ProtectionGroupId: FormControl<string | null | undefined>,

		/** Required */
		Aggregation: FormControl<ProtectionGroupAggregation | null | undefined>,

		/** Required */
		Pattern: FormControl<ProtectionGroupPattern | null | undefined>,
		ResourceType: FormControl<ProtectedResourceType | null | undefined>,
	}
	export function CreateCreateProtectionGroupRequestFormGroup() {
		return new FormGroup<CreateProtectionGroupRequestFormProperties>({
			ProtectionGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Aggregation: new FormControl<ProtectionGroupAggregation | null | undefined>(undefined, [Validators.required]),
			Pattern: new FormControl<ProtectionGroupPattern | null | undefined>(undefined, [Validators.required]),
			ResourceType: new FormControl<ProtectedResourceType | null | undefined>(undefined),
		});

	}

	export enum ProtectionGroupAggregation { SUM = 0, MEAN = 1, MAX = 2 }

	export enum ProtectionGroupPattern { ALL = 0, ARBITRARY = 1, BY_RESOURCE_TYPE = 2 }

	export enum ProtectedResourceType { CLOUDFRONT_DISTRIBUTION = 0, ROUTE_53_HOSTED_ZONE = 1, ELASTIC_IP_ALLOCATION = 2, CLASSIC_LOAD_BALANCER = 3, APPLICATION_LOAD_BALANCER = 4, GLOBAL_ACCELERATOR = 5 }

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

		/** Required */
		ProtectionId: string;
	}
	export interface DeleteProtectionRequestFormProperties {

		/** Required */
		ProtectionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProtectionRequestFormGroup() {
		return new FormGroup<DeleteProtectionRequestFormProperties>({
			ProtectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteProtectionGroupResponse {
	}
	export interface DeleteProtectionGroupResponseFormProperties {
	}
	export function CreateDeleteProtectionGroupResponseFormGroup() {
		return new FormGroup<DeleteProtectionGroupResponseFormProperties>({
		});

	}

	export interface DeleteProtectionGroupRequest {

		/** Required */
		ProtectionGroupId: string;
	}
	export interface DeleteProtectionGroupRequestFormProperties {

		/** Required */
		ProtectionGroupId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProtectionGroupRequestFormGroup() {
		return new FormGroup<DeleteProtectionGroupRequestFormProperties>({
			ProtectionGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		AttackId?: string;
		ResourceArn?: string;
		SubResources?: Array<SubResourceSummary>;
		StartTime?: Date;
		EndTime?: Date;
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
		Type?: SubResourceType;
		Id?: string;
		AttackVectors?: Array<SummarizedAttackVector>;
		Counters?: Array<SummarizedCounter>;
	}

	/** The attack information for the specified SubResource. */
	export interface SubResourceSummaryFormProperties {
		Type: FormControl<SubResourceType | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateSubResourceSummaryFormGroup() {
		return new FormGroup<SubResourceSummaryFormProperties>({
			Type: new FormControl<SubResourceType | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SubResourceType { IP = 0, URL = 1 }


	/** A summary of information about the attack. */
	export interface SummarizedAttackVector {

		/** Required */
		VectorType: string;
		VectorCounters?: Array<SummarizedCounter>;
	}

	/** A summary of information about the attack. */
	export interface SummarizedAttackVectorFormProperties {

		/** Required */
		VectorType: FormControl<string | null | undefined>,
	}
	export function CreateSummarizedAttackVectorFormGroup() {
		return new FormGroup<SummarizedAttackVectorFormProperties>({
			VectorType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The counter that describes a DDoS attack. */
	export interface SummarizedCounter {
		Name?: string;
		Max?: number | null;
		Average?: number | null;
		Sum?: number | null;
		N?: number | null;
		Unit?: string;
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


	/** Details of a Shield event. This is provided as part of an <a>AttackDetail</a>. */
	export interface AttackProperty {
		AttackLayer?: AttackLayer;
		AttackPropertyIdentifier?: AttackPropertyIdentifier;
		TopContributors?: Array<Contributor>;
		Unit?: Unit;
		Total?: number | null;
	}

	/** Details of a Shield event. This is provided as part of an <a>AttackDetail</a>. */
	export interface AttackPropertyFormProperties {
		AttackLayer: FormControl<AttackLayer | null | undefined>,
		AttackPropertyIdentifier: FormControl<AttackPropertyIdentifier | null | undefined>,
		Unit: FormControl<Unit | null | undefined>,
		Total: FormControl<number | null | undefined>,
	}
	export function CreateAttackPropertyFormGroup() {
		return new FormGroup<AttackPropertyFormProperties>({
			AttackLayer: new FormControl<AttackLayer | null | undefined>(undefined),
			AttackPropertyIdentifier: new FormControl<AttackPropertyIdentifier | null | undefined>(undefined),
			Unit: new FormControl<Unit | null | undefined>(undefined),
			Total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AttackLayer { NETWORK = 0, APPLICATION = 1 }

	export enum AttackPropertyIdentifier { DESTINATION_URL = 0, REFERRER = 1, SOURCE_ASN = 2, SOURCE_COUNTRY = 3, SOURCE_IP_ADDRESS = 4, SOURCE_USER_AGENT = 5, WORDPRESS_PINGBACK_REFLECTOR = 6, WORDPRESS_PINGBACK_SOURCE = 7 }


	/** A contributor to the attack and their contribution.  */
	export interface Contributor {
		Name?: string;
		Value?: number | null;
	}

	/** A contributor to the attack and their contribution.  */
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

	export enum Unit { BITS = 0, BYTES = 1, PACKETS = 2, REQUESTS = 3 }


	/** The mitigation applied to a DDoS attack. */
	export interface Mitigation {
		MitigationName?: string;
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

		/** Required */
		AttackId: string;
	}
	export interface DescribeAttackRequestFormProperties {

		/** Required */
		AttackId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAttackRequestFormGroup() {
		return new FormGroup<DescribeAttackRequestFormProperties>({
			AttackId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DescribeAttackStatisticsResponse {

		/** Required */
		TimeRange: TimeRange;

		/** Required */
		DataItems: Array<AttackStatisticsDataItem>;
	}
	export interface DescribeAttackStatisticsResponseFormProperties {
	}
	export function CreateDescribeAttackStatisticsResponseFormGroup() {
		return new FormGroup<DescribeAttackStatisticsResponseFormProperties>({
		});

	}


	/** The time range.  */
	export interface TimeRange {
		FromInclusive?: Date;
		ToExclusive?: Date;
	}

	/** The time range.  */
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


	/** A single attack statistics data record. This is returned by <a>DescribeAttackStatistics</a> along with a time range indicating the time period that the attack statistics apply to.  */
	export interface AttackStatisticsDataItem {
		AttackVolume?: AttackVolume;

		/** Required */
		AttackCount: number;
	}

	/** A single attack statistics data record. This is returned by <a>DescribeAttackStatistics</a> along with a time range indicating the time period that the attack statistics apply to.  */
	export interface AttackStatisticsDataItemFormProperties {

		/** Required */
		AttackCount: FormControl<number | null | undefined>,
	}
	export function CreateAttackStatisticsDataItemFormGroup() {
		return new FormGroup<AttackStatisticsDataItemFormProperties>({
			AttackCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the volume of attacks during the time period, included in an <a>AttackStatisticsDataItem</a>. If the accompanying <code>AttackCount</code> in the statistics object is zero, this setting might be empty. */
	export interface AttackVolume {
		BitsPerSecond?: AttackVolumeStatistics;
		PacketsPerSecond?: AttackVolumeStatistics;
		RequestsPerSecond?: AttackVolumeStatistics;
	}

	/** Information about the volume of attacks during the time period, included in an <a>AttackStatisticsDataItem</a>. If the accompanying <code>AttackCount</code> in the statistics object is zero, this setting might be empty. */
	export interface AttackVolumeFormProperties {
	}
	export function CreateAttackVolumeFormGroup() {
		return new FormGroup<AttackVolumeFormProperties>({
		});

	}


	/** Statistics objects for the various data types in <a>AttackVolume</a>.  */
	export interface AttackVolumeStatistics {

		/** Required */
		Max: number;
	}

	/** Statistics objects for the various data types in <a>AttackVolume</a>.  */
	export interface AttackVolumeStatisticsFormProperties {

		/** Required */
		Max: FormControl<number | null | undefined>,
	}
	export function CreateAttackVolumeStatisticsFormGroup() {
		return new FormGroup<AttackVolumeStatisticsFormProperties>({
			Max: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAttackStatisticsRequest {
	}
	export interface DescribeAttackStatisticsRequestFormProperties {
	}
	export function CreateDescribeAttackStatisticsRequestFormGroup() {
		return new FormGroup<DescribeAttackStatisticsRequestFormProperties>({
		});

	}

	export interface DescribeDRTAccessResponse {
		RoleArn?: string;
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
		Id?: string;
		Name?: string;
		ResourceArn?: string;
		HealthCheckIds?: Array<string>;
		ProtectionArn?: string;
		ApplicationLayerAutomaticResponseConfiguration?: ApplicationLayerAutomaticResponseConfiguration;
	}

	/** An object that represents a resource that is under DDoS protection. */
	export interface ProtectionFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		ProtectionArn: FormControl<string | null | undefined>,
	}
	export function CreateProtectionFormGroup() {
		return new FormGroup<ProtectionFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ProtectionArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The automatic application layer DDoS mitigation settings for a <a>Protection</a>. This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks.  */
	export interface ApplicationLayerAutomaticResponseConfiguration {

		/** Required */
		Status: ApplicationLayerAutomaticResponseStatus;

		/** Required */
		Action: ResponseAction;
	}

	/** The automatic application layer DDoS mitigation settings for a <a>Protection</a>. This configuration determines whether Shield Advanced automatically manages rules in the web ACL in order to respond to application layer events that Shield Advanced determines to be DDoS attacks.  */
	export interface ApplicationLayerAutomaticResponseConfigurationFormProperties {

		/** Required */
		Status: FormControl<ApplicationLayerAutomaticResponseStatus | null | undefined>,
	}
	export function CreateApplicationLayerAutomaticResponseConfigurationFormGroup() {
		return new FormGroup<ApplicationLayerAutomaticResponseConfigurationFormProperties>({
			Status: new FormControl<ApplicationLayerAutomaticResponseStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ApplicationLayerAutomaticResponseStatus { ENABLED = 0, DISABLED = 1 }


	/** Specifies the action setting that Shield Advanced should use in the WAF rules that it creates on behalf of the protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource.  */
	export interface ResponseAction {
		Block?: BlockAction;
		Count?: CountAction;
	}

	/** Specifies the action setting that Shield Advanced should use in the WAF rules that it creates on behalf of the protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource.  */
	export interface ResponseActionFormProperties {
	}
	export function CreateResponseActionFormGroup() {
		return new FormGroup<ResponseActionFormProperties>({
		});

	}


	/** <p>Specifies that Shield Advanced should configure its WAF rules with the WAF <code>Block</code> action. </p> <p>This is only used in the context of the <code>ResponseAction</code> setting. </p> <p>JSON specification: <code>"Block": {}</code> </p> */
	export interface BlockAction {
	}

	/** <p>Specifies that Shield Advanced should configure its WAF rules with the WAF <code>Block</code> action. </p> <p>This is only used in the context of the <code>ResponseAction</code> setting. </p> <p>JSON specification: <code>"Block": {}</code> </p> */
	export interface BlockActionFormProperties {
	}
	export function CreateBlockActionFormGroup() {
		return new FormGroup<BlockActionFormProperties>({
		});

	}


	/** <p>Specifies that Shield Advanced should configure its WAF rules with the WAF <code>Count</code> action. </p> <p>This is only used in the context of the <code>ResponseAction</code> setting. </p> <p>JSON specification: <code>"Count": {}</code> </p> */
	export interface CountAction {
	}

	/** <p>Specifies that Shield Advanced should configure its WAF rules with the WAF <code>Count</code> action. </p> <p>This is only used in the context of the <code>ResponseAction</code> setting. </p> <p>JSON specification: <code>"Count": {}</code> </p> */
	export interface CountActionFormProperties {
	}
	export function CreateCountActionFormGroup() {
		return new FormGroup<CountActionFormProperties>({
		});

	}

	export interface DescribeProtectionRequest {
		ProtectionId?: string;
		ResourceArn?: string;
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

	export interface DescribeProtectionGroupResponse {

		/** Required */
		ProtectionGroup: ProtectionGroup;
	}
	export interface DescribeProtectionGroupResponseFormProperties {
	}
	export function CreateDescribeProtectionGroupResponseFormGroup() {
		return new FormGroup<DescribeProtectionGroupResponseFormProperties>({
		});

	}


	/** A grouping of protected resources that you and Shield Advanced can monitor as a collective. This resource grouping improves the accuracy of detection and reduces false positives.  */
	export interface ProtectionGroup {

		/** Required */
		ProtectionGroupId: string;

		/** Required */
		Aggregation: ProtectionGroupAggregation;

		/** Required */
		Pattern: ProtectionGroupPattern;
		ResourceType?: ProtectedResourceType;

		/** Required */
		Members: Array<string>;
		ProtectionGroupArn?: string;
	}

	/** A grouping of protected resources that you and Shield Advanced can monitor as a collective. This resource grouping improves the accuracy of detection and reduces false positives.  */
	export interface ProtectionGroupFormProperties {

		/** Required */
		ProtectionGroupId: FormControl<string | null | undefined>,

		/** Required */
		Aggregation: FormControl<ProtectionGroupAggregation | null | undefined>,

		/** Required */
		Pattern: FormControl<ProtectionGroupPattern | null | undefined>,
		ResourceType: FormControl<ProtectedResourceType | null | undefined>,
		ProtectionGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateProtectionGroupFormGroup() {
		return new FormGroup<ProtectionGroupFormProperties>({
			ProtectionGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Aggregation: new FormControl<ProtectionGroupAggregation | null | undefined>(undefined, [Validators.required]),
			Pattern: new FormControl<ProtectionGroupPattern | null | undefined>(undefined, [Validators.required]),
			ResourceType: new FormControl<ProtectedResourceType | null | undefined>(undefined),
			ProtectionGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeProtectionGroupRequest {

		/** Required */
		ProtectionGroupId: string;
	}
	export interface DescribeProtectionGroupRequestFormProperties {

		/** Required */
		ProtectionGroupId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProtectionGroupRequestFormGroup() {
		return new FormGroup<DescribeProtectionGroupRequestFormProperties>({
			ProtectionGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeSubscriptionResponse {
		Subscription?: Subscription;
	}
	export interface DescribeSubscriptionResponseFormProperties {
	}
	export function CreateDescribeSubscriptionResponseFormGroup() {
		return new FormGroup<DescribeSubscriptionResponseFormProperties>({
		});

	}


	/** Information about the Shield Advanced subscription for an account. */
	export interface Subscription {
		StartTime?: Date;
		EndTime?: Date;
		TimeCommitmentInSeconds?: number | null;
		AutoRenew?: ApplicationLayerAutomaticResponseStatus;
		Limits?: Array<Limit>;
		ProactiveEngagementStatus?: ProactiveEngagementStatus;

		/** Required */
		SubscriptionLimits: SubscriptionLimits;
		SubscriptionArn?: string;
	}

	/** Information about the Shield Advanced subscription for an account. */
	export interface SubscriptionFormProperties {
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		TimeCommitmentInSeconds: FormControl<number | null | undefined>,
		AutoRenew: FormControl<ApplicationLayerAutomaticResponseStatus | null | undefined>,
		ProactiveEngagementStatus: FormControl<ProactiveEngagementStatus | null | undefined>,
		SubscriptionArn: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			TimeCommitmentInSeconds: new FormControl<number | null | undefined>(undefined),
			AutoRenew: new FormControl<ApplicationLayerAutomaticResponseStatus | null | undefined>(undefined),
			ProactiveEngagementStatus: new FormControl<ProactiveEngagementStatus | null | undefined>(undefined),
			SubscriptionArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies how many protections of a given type you can create. */
	export interface Limit {
		Type?: string;
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

	export enum ProactiveEngagementStatus { ENABLED = 0, DISABLED = 1, PENDING = 2 }


	/** Limits settings for your subscription.  */
	export interface SubscriptionLimits {

		/** Required */
		ProtectionLimits: ProtectionLimits;

		/** Required */
		ProtectionGroupLimits: ProtectionGroupLimits;
	}

	/** Limits settings for your subscription.  */
	export interface SubscriptionLimitsFormProperties {
	}
	export function CreateSubscriptionLimitsFormGroup() {
		return new FormGroup<SubscriptionLimitsFormProperties>({
		});

	}


	/** Limits settings on protections for your subscription.  */
	export interface ProtectionLimits {

		/** Required */
		ProtectedResourceTypeLimits: Array<Limit>;
	}

	/** Limits settings on protections for your subscription.  */
	export interface ProtectionLimitsFormProperties {
	}
	export function CreateProtectionLimitsFormGroup() {
		return new FormGroup<ProtectionLimitsFormProperties>({
		});

	}


	/** Limits settings on protection groups for your subscription.  */
	export interface ProtectionGroupLimits {

		/** Required */
		MaxProtectionGroups: number;

		/** Required */
		PatternTypeLimits: ProtectionGroupPatternTypeLimits;
	}

	/** Limits settings on protection groups for your subscription.  */
	export interface ProtectionGroupLimitsFormProperties {

		/** Required */
		MaxProtectionGroups: FormControl<number | null | undefined>,
	}
	export function CreateProtectionGroupLimitsFormGroup() {
		return new FormGroup<ProtectionGroupLimitsFormProperties>({
			MaxProtectionGroups: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Limits settings by pattern type in the protection groups for your subscription.  */
	export interface ProtectionGroupPatternTypeLimits {

		/** Required */
		ArbitraryPatternLimits: ProtectionGroupArbitraryPatternLimits;
	}

	/** Limits settings by pattern type in the protection groups for your subscription.  */
	export interface ProtectionGroupPatternTypeLimitsFormProperties {
	}
	export function CreateProtectionGroupPatternTypeLimitsFormGroup() {
		return new FormGroup<ProtectionGroupPatternTypeLimitsFormProperties>({
		});

	}


	/** Limits settings on protection groups with arbitrary pattern type.  */
	export interface ProtectionGroupArbitraryPatternLimits {

		/** Required */
		MaxMembers: number;
	}

	/** Limits settings on protection groups with arbitrary pattern type.  */
	export interface ProtectionGroupArbitraryPatternLimitsFormProperties {

		/** Required */
		MaxMembers: FormControl<number | null | undefined>,
	}
	export function CreateProtectionGroupArbitraryPatternLimitsFormGroup() {
		return new FormGroup<ProtectionGroupArbitraryPatternLimitsFormProperties>({
			MaxMembers: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeSubscriptionRequest {
	}
	export interface DescribeSubscriptionRequestFormProperties {
	}
	export function CreateDescribeSubscriptionRequestFormGroup() {
		return new FormGroup<DescribeSubscriptionRequestFormProperties>({
		});

	}

	export interface DisableApplicationLayerAutomaticResponseResponse {
	}
	export interface DisableApplicationLayerAutomaticResponseResponseFormProperties {
	}
	export function CreateDisableApplicationLayerAutomaticResponseResponseFormGroup() {
		return new FormGroup<DisableApplicationLayerAutomaticResponseResponseFormProperties>({
		});

	}

	export interface DisableApplicationLayerAutomaticResponseRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface DisableApplicationLayerAutomaticResponseRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDisableApplicationLayerAutomaticResponseRequestFormGroup() {
		return new FormGroup<DisableApplicationLayerAutomaticResponseRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		LogBucket: string;
	}
	export interface DisassociateDRTLogBucketRequestFormProperties {

		/** Required */
		LogBucket: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateDRTLogBucketRequestFormGroup() {
		return new FormGroup<DisassociateDRTLogBucketRequestFormProperties>({
			LogBucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		ProtectionId: string;

		/** Required */
		HealthCheckArn: string;
	}
	export interface DisassociateHealthCheckRequestFormProperties {

		/** Required */
		ProtectionId: FormControl<string | null | undefined>,

		/** Required */
		HealthCheckArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateHealthCheckRequestFormGroup() {
		return new FormGroup<DisassociateHealthCheckRequestFormProperties>({
			ProtectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HealthCheckArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EnableApplicationLayerAutomaticResponseResponse {
	}
	export interface EnableApplicationLayerAutomaticResponseResponseFormProperties {
	}
	export function CreateEnableApplicationLayerAutomaticResponseResponseFormGroup() {
		return new FormGroup<EnableApplicationLayerAutomaticResponseResponseFormProperties>({
		});

	}

	export interface EnableApplicationLayerAutomaticResponseRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Action: ResponseAction;
	}
	export interface EnableApplicationLayerAutomaticResponseRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateEnableApplicationLayerAutomaticResponseRequestFormGroup() {
		return new FormGroup<EnableApplicationLayerAutomaticResponseRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		SubscriptionState: SubscriptionState;
	}
	export interface GetSubscriptionStateResponseFormProperties {

		/** Required */
		SubscriptionState: FormControl<SubscriptionState | null | undefined>,
	}
	export function CreateGetSubscriptionStateResponseFormGroup() {
		return new FormGroup<GetSubscriptionStateResponseFormProperties>({
			SubscriptionState: new FormControl<SubscriptionState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SubscriptionState { ACTIVE = 0, INACTIVE = 1 }

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
		NextToken?: string;
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
		AttackId?: string;
		ResourceArn?: string;
		StartTime?: Date;
		EndTime?: Date;
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

		/** Required */
		VectorType: string;
	}

	/** Describes the attack. */
	export interface AttackVectorDescriptionFormProperties {

		/** Required */
		VectorType: FormControl<string | null | undefined>,
	}
	export function CreateAttackVectorDescriptionFormGroup() {
		return new FormGroup<AttackVectorDescriptionFormProperties>({
			VectorType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAttacksRequest {
		ResourceArns?: Array<string>;
		StartTime?: TimeRange;
		EndTime?: TimeRange;
		NextToken?: string;
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

	export interface ListProtectionGroupsResponse {

		/** Required */
		ProtectionGroups: Array<ProtectionGroup>;
		NextToken?: string;
	}
	export interface ListProtectionGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProtectionGroupsResponseFormGroup() {
		return new FormGroup<ListProtectionGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProtectionGroupsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		InclusionFilters?: InclusionProtectionGroupFilters;
	}
	export interface ListProtectionGroupsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListProtectionGroupsRequestFormGroup() {
		return new FormGroup<ListProtectionGroupsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Narrows the set of protection groups that the call retrieves. You can retrieve a single protection group by its name and you can retrieve all protection groups that are configured with a specific pattern, aggregation, or resource type. You can provide up to one criteria per filter type. Shield Advanced returns the protection groups that exactly match all of the search criteria that you provide. */
	export interface InclusionProtectionGroupFilters {
		ProtectionGroupIds?: Array<string>;
		Patterns?: Array<ProtectionGroupPattern>;
		ResourceTypes?: Array<ProtectedResourceType>;
		Aggregations?: Array<ProtectionGroupAggregation>;
	}

	/** Narrows the set of protection groups that the call retrieves. You can retrieve a single protection group by its name and you can retrieve all protection groups that are configured with a specific pattern, aggregation, or resource type. You can provide up to one criteria per filter type. Shield Advanced returns the protection groups that exactly match all of the search criteria that you provide. */
	export interface InclusionProtectionGroupFiltersFormProperties {
	}
	export function CreateInclusionProtectionGroupFiltersFormGroup() {
		return new FormGroup<InclusionProtectionGroupFiltersFormProperties>({
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

	export interface ListProtectionsResponse {
		Protections?: Array<Protection>;
		NextToken?: string;
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
		NextToken?: string;
		MaxResults?: number | null;
		InclusionFilters?: InclusionProtectionFilters;
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


	/** Narrows the set of protections that the call retrieves. You can retrieve a single protection by providing its name or the ARN (Amazon Resource Name) of its protected resource. You can also retrieve all protections for a specific resource type. You can provide up to one criteria per filter type. Shield Advanced returns protections that exactly match all of the filter criteria that you provide. */
	export interface InclusionProtectionFilters {
		ResourceArns?: Array<string>;
		ProtectionNames?: Array<string>;
		ResourceTypes?: Array<ProtectedResourceType>;
	}

	/** Narrows the set of protections that the call retrieves. You can retrieve a single protection by providing its name or the ARN (Amazon Resource Name) of its protected resource. You can also retrieve all protections for a specific resource type. You can provide up to one criteria per filter type. Shield Advanced returns protections that exactly match all of the filter criteria that you provide. */
	export interface InclusionProtectionFiltersFormProperties {
	}
	export function CreateInclusionProtectionFiltersFormGroup() {
		return new FormGroup<InclusionProtectionFiltersFormProperties>({
		});

	}

	export interface ListResourcesInProtectionGroupResponse {

		/** Required */
		ResourceArns: Array<string>;
		NextToken?: string;
	}
	export interface ListResourcesInProtectionGroupResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourcesInProtectionGroupResponseFormGroup() {
		return new FormGroup<ListResourcesInProtectionGroupResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourcesInProtectionGroupRequest {

		/** Required */
		ProtectionGroupId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListResourcesInProtectionGroupRequestFormProperties {

		/** Required */
		ProtectionGroupId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResourcesInProtectionGroupRequestFormGroup() {
		return new FormGroup<ListResourcesInProtectionGroupRequestFormProperties>({
			ProtectionGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
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

	export interface UpdateApplicationLayerAutomaticResponseResponse {
	}
	export interface UpdateApplicationLayerAutomaticResponseResponseFormProperties {
	}
	export function CreateUpdateApplicationLayerAutomaticResponseResponseFormGroup() {
		return new FormGroup<UpdateApplicationLayerAutomaticResponseResponseFormProperties>({
		});

	}

	export interface UpdateApplicationLayerAutomaticResponseRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Action: ResponseAction;
	}
	export interface UpdateApplicationLayerAutomaticResponseRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationLayerAutomaticResponseRequestFormGroup() {
		return new FormGroup<UpdateApplicationLayerAutomaticResponseRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateProtectionGroupResponse {
	}
	export interface UpdateProtectionGroupResponseFormProperties {
	}
	export function CreateUpdateProtectionGroupResponseFormGroup() {
		return new FormGroup<UpdateProtectionGroupResponseFormProperties>({
		});

	}

	export interface UpdateProtectionGroupRequest {

		/** Required */
		ProtectionGroupId: string;

		/** Required */
		Aggregation: ProtectionGroupAggregation;

		/** Required */
		Pattern: ProtectionGroupPattern;
		ResourceType?: ProtectedResourceType;
		Members?: Array<string>;
	}
	export interface UpdateProtectionGroupRequestFormProperties {

		/** Required */
		ProtectionGroupId: FormControl<string | null | undefined>,

		/** Required */
		Aggregation: FormControl<ProtectionGroupAggregation | null | undefined>,

		/** Required */
		Pattern: FormControl<ProtectionGroupPattern | null | undefined>,
		ResourceType: FormControl<ProtectedResourceType | null | undefined>,
	}
	export function CreateUpdateProtectionGroupRequestFormGroup() {
		return new FormGroup<UpdateProtectionGroupRequestFormProperties>({
			ProtectionGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Aggregation: new FormControl<ProtectionGroupAggregation | null | undefined>(undefined, [Validators.required]),
			Pattern: new FormControl<ProtectionGroupPattern | null | undefined>(undefined, [Validators.required]),
			ResourceType: new FormControl<ProtectedResourceType | null | undefined>(undefined),
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
		AutoRenew?: ApplicationLayerAutomaticResponseStatus;
	}
	export interface UpdateSubscriptionRequestFormProperties {
		AutoRenew: FormControl<ApplicationLayerAutomaticResponseStatus | null | undefined>,
	}
	export function CreateUpdateSubscriptionRequestFormGroup() {
		return new FormGroup<UpdateSubscriptionRequestFormProperties>({
			AutoRenew: new FormControl<ApplicationLayerAutomaticResponseStatus | null | undefined>(undefined),
		});

	}

	export enum AutoRenew { ENABLED = 0, DISABLED = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as Application Load Balancer access logs, CloudFront logs, or logs from third party sources. You can associate up to 10 Amazon S3 buckets with your subscription.</p> <p>To use the services of the SRT and make an <code>AssociateDRTLogBucket</code> request, you must be subscribed to the <a href="http://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="http://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
		 * Post #X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket
		 * @return {AssociateDRTLogBucketResponse} Success
		 */
		AssociateDRTLogBucket(requestBody: AssociateDRTLogBucketRequest): Observable<AssociateDRTLogBucketResponse> {
			return this.http.post<AssociateDRTLogBucketResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.AssociateDRTLogBucket', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Authorizes the Shield Response Team (SRT) using the specified role, to access your Amazon Web Services account to assist with DDoS attack mitigation during potential attacks. This enables the SRT to inspect your WAF configuration and create or update WAF rules and web ACLs.</p> <p>You can associate only one <code>RoleArn</code> with your subscription. If you submit an <code>AssociateDRTRole</code> request for an account that already has an associated role, the new <code>RoleArn</code> will replace the existing <code>RoleArn</code>. </p> <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <code>AWSShieldDRTAccessPolicy</code> managed policy to the role that you'll specify in the request. You can access this policy in the IAM console at <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a>. For more information see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Adding and removing IAM identity permissions</a>. The role must also trust the service principal <code>drt.shield.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">IAM JSON policy elements: Principal</a>.</p> <p>The SRT will have access only to your WAF and Shield resources. By submitting this request, you authorize the SRT to inspect your WAF and Shield configuration and create and update WAF rules and web ACLs on your behalf. The SRT takes these actions only if explicitly authorized by you.</p> <p>You must have the <code>iam:PassRole</code> permission to make an <code>AssociateDRTRole</code> request. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a user permissions to pass a role to an Amazon Web Services service</a>. </p> <p>To use the services of the SRT and make an <code>AssociateDRTRole</code> request, you must be subscribed to the <a href="http://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="http://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
		 * Post #X-Amz-Target=AWSShield_20160616.AssociateDRTRole
		 * @return {AssociateDRTRoleResponse} Success
		 */
		AssociateDRTRole(requestBody: AssociateDRTRoleRequest): Observable<AssociateDRTRoleResponse> {
			return this.http.post<AssociateDRTRoleResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.AssociateDRTRole', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds health-based detection to the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. </p> <p>You define the health check in Route 53 and then associate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>
		 * Post #X-Amz-Target=AWSShield_20160616.AssociateHealthCheck
		 * @return {AssociateHealthCheckResponse} Success
		 */
		AssociateHealthCheck(requestBody: AssociateHealthCheckRequest): Observable<AssociateHealthCheckResponse> {
			return this.http.post<AssociateHealthCheckResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.AssociateHealthCheck', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Initializes proactive engagement and sets the list of contacts for the Shield Response Team (SRT) to use. You must provide at least one phone number in the emergency contact list. </p> <p>After you have initialized proactive engagement using this call, to disable or enable proactive engagement, use the calls <code>DisableProactiveEngagement</code> and <code>EnableProactiveEngagement</code>. </p> <note> <p>This call defines the list of email addresses and phone numbers that the SRT can use to contact you for escalations to the SRT and to initiate proactive customer support.</p> <p>The contacts that you provide in the request replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using <code>DescribeEmergencyContactSettings</code> and then provide it to this call. </p> </note>
		 * Post #X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails
		 * @return {AssociateProactiveEngagementDetailsResponse} Success
		 */
		AssociateProactiveEngagementDetails(requestBody: AssociateProactiveEngagementDetailsRequest): Observable<AssociateProactiveEngagementDetailsResponse> {
			return this.http.post<AssociateProactiveEngagementDetailsResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.AssociateProactiveEngagementDetails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Enables Shield Advanced for a specific Amazon Web Services resource. The resource can be an Amazon CloudFront distribution, Amazon Route 53 hosted zone, Global Accelerator standard accelerator, Elastic IP Address, Application Load Balancer, or a Classic Load Balancer. You can protect Amazon EC2 instances and Network Load Balancers by association with protected Amazon EC2 Elastic IP addresses.</p> <p>You can add protection to only a single resource with each <code>CreateProtection</code> request. You can add protection to multiple resources at once through the Shield Advanced console at <a href="https://console.aws.amazon.com/wafv2/shieldv2#/">https://console.aws.amazon.com/wafv2/shieldv2#/</a>. For more information see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with Shield Advanced</a> and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/configure-new-protection.html">Adding Shield Advanced protection to Amazon Web Services resources</a>.</p>
		 * Post #X-Amz-Target=AWSShield_20160616.CreateProtection
		 * @return {CreateProtectionResponse} Success
		 */
		CreateProtection(requestBody: CreateProtectionRequest): Observable<CreateProtectionResponse> {
			return this.http.post<CreateProtectionResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.CreateProtection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives.
		 * Post #X-Amz-Target=AWSShield_20160616.CreateProtectionGroup
		 * @return {CreateProtectionGroupResponse} Success
		 */
		CreateProtectionGroup(requestBody: CreateProtectionGroupRequest): Observable<CreateProtectionGroupResponse> {
			return this.http.post<CreateProtectionGroupResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.CreateProtectionGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Activates Shield Advanced for an account.</p> <note> <p>For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed. </p> </note> <p>When you initially create a subscription, your subscription is set to be automatically renewed at the end of the existing subscription period. You can change this by submitting an <code>UpdateSubscription</code> request. </p>
		 * Post #X-Amz-Target=AWSShield_20160616.CreateSubscription
		 * @return {CreateSubscriptionResponse} Success
		 */
		CreateSubscription(requestBody: CreateSubscriptionRequest): Observable<CreateSubscriptionResponse> {
			return this.http.post<CreateSubscriptionResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.CreateSubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Shield Advanced <a>Protection</a>.
		 * Post #X-Amz-Target=AWSShield_20160616.DeleteProtection
		 * @return {DeleteProtectionResponse} Success
		 */
		DeleteProtection(requestBody: DeleteProtectionRequest): Observable<DeleteProtectionResponse> {
			return this.http.post<DeleteProtectionResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.DeleteProtection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified protection group.
		 * Post #X-Amz-Target=AWSShield_20160616.DeleteProtectionGroup
		 * @return {DeleteProtectionGroupResponse} Success
		 */
		DeleteProtectionGroup(requestBody: DeleteProtectionGroupRequest): Observable<DeleteProtectionGroupResponse> {
			return this.http.post<DeleteProtectionGroupResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.DeleteProtectionGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes Shield Advanced from an account. Shield Advanced requires a 1-year subscription commitment. You cannot delete a subscription prior to the completion of that commitment.
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
		 * <p>Provides information about the number and type of attacks Shield has detected in the last year for all resources that belong to your account, regardless of whether you've defined Shield protections for them. This operation is available to Shield customers as well as to Shield Advanced customers.</p> <p>The operation returns data for the time range of midnight UTC, one year ago, to midnight UTC, today. For example, if the current time is <code>2020-10-26 15:39:32 PDT</code>, equal to <code>2020-10-26 22:39:32 UTC</code>, then the time range for the attack data returned is from <code>2019-10-26 00:00:00 UTC</code> to <code>2020-10-26 00:00:00 UTC</code>. </p> <p>The time range indicates the period covered by the attack statistics data items.</p>
		 * Post #X-Amz-Target=AWSShield_20160616.DescribeAttackStatistics
		 * @return {DescribeAttackStatisticsResponse} Success
		 */
		DescribeAttackStatistics(requestBody: DescribeAttackStatisticsRequest): Observable<DescribeAttackStatisticsResponse> {
			return this.http.post<DescribeAttackStatisticsResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.DescribeAttackStatistics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the current role and list of Amazon S3 log buckets used by the Shield Response Team (SRT) to access your Amazon Web Services account while assisting with attack mitigation.
		 * Post #X-Amz-Target=AWSShield_20160616.DescribeDRTAccess
		 * @return {DescribeDRTAccessResponse} Success
		 */
		DescribeDRTAccess(requestBody: DescribeDRTAccessRequest): Observable<DescribeDRTAccessResponse> {
			return this.http.post<DescribeDRTAccessResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.DescribeDRTAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
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
		 * Returns the specification for the specified protection group.
		 * Post #X-Amz-Target=AWSShield_20160616.DescribeProtectionGroup
		 * @return {DescribeProtectionGroupResponse} Success
		 */
		DescribeProtectionGroup(requestBody: DescribeProtectionGroupRequest): Observable<DescribeProtectionGroupResponse> {
			return this.http.post<DescribeProtectionGroupResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.DescribeProtectionGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides details about the Shield Advanced subscription for an account.
		 * Post #X-Amz-Target=AWSShield_20160616.DescribeSubscription
		 * @return {DescribeSubscriptionResponse} Success
		 */
		DescribeSubscription(requestBody: DescribeSubscriptionRequest): Observable<DescribeSubscriptionResponse> {
			return this.http.post<DescribeSubscriptionResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.DescribeSubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable the Shield Advanced automatic application layer DDoS mitigation feature for the protected resource. This stops Shield Advanced from creating, verifying, and applying WAF rules for attacks that it detects for the resource.
		 * Post #X-Amz-Target=AWSShield_20160616.DisableApplicationLayerAutomaticResponse
		 * @return {DisableApplicationLayerAutomaticResponseResponse} Success
		 */
		DisableApplicationLayerAutomaticResponse(requestBody: DisableApplicationLayerAutomaticResponseRequest): Observable<DisableApplicationLayerAutomaticResponseResponse> {
			return this.http.post<DisableApplicationLayerAutomaticResponseResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.DisableApplicationLayerAutomaticResponse', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes authorization from the Shield Response Team (SRT) to notify contacts about escalations to the SRT and to initiate proactive customer support.
		 * Post #X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement
		 * @return {DisableProactiveEngagementResponse} Success
		 */
		DisableProactiveEngagement(requestBody: DisableProactiveEngagementRequest): Observable<DisableProactiveEngagementResponse> {
			return this.http.post<DisableProactiveEngagementResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.DisableProactiveEngagement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the Shield Response Team's (SRT) access to the specified Amazon S3 bucket containing the logs that you shared previously.
		 * Post #X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket
		 * @return {DisassociateDRTLogBucketResponse} Success
		 */
		DisassociateDRTLogBucket(requestBody: DisassociateDRTLogBucketRequest): Observable<DisassociateDRTLogBucketResponse> {
			return this.http.post<DisassociateDRTLogBucketResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.DisassociateDRTLogBucket', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the Shield Response Team's (SRT) access to your Amazon Web Services account.
		 * Post #X-Amz-Target=AWSShield_20160616.DisassociateDRTRole
		 * @return {DisassociateDRTRoleResponse} Success
		 */
		DisassociateDRTRole(requestBody: DisassociateDRTRoleRequest): Observable<DisassociateDRTRoleResponse> {
			return this.http.post<DisassociateDRTRoleResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.DisassociateDRTRole', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes health-based detection from the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. </p> <p>You define the health check in Route 53 and then associate or disassociate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>
		 * Post #X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck
		 * @return {DisassociateHealthCheckResponse} Success
		 */
		DisassociateHealthCheck(requestBody: DisassociateHealthCheckRequest): Observable<DisassociateHealthCheckResponse> {
			return this.http.post<DisassociateHealthCheckResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.DisassociateHealthCheck', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Enable the Shield Advanced automatic application layer DDoS mitigation for the protected resource. </p> <note> <p>This feature is available for Amazon CloudFront distributions and Application Load Balancers only.</p> </note> <p>This causes Shield Advanced to create, verify, and apply WAF rules for DDoS attacks that it detects for the resource. Shield Advanced applies the rules in a Shield rule group inside the web ACL that you've associated with the resource. For information about how automatic mitigation works and the requirements for using it, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced-automatic-app-layer-response.html">Shield Advanced automatic application layer DDoS mitigation</a>.</p> <note> <p>Don't use this action to make changes to automatic mitigation settings when it's already enabled for a resource. Instead, use <a>UpdateApplicationLayerAutomaticResponse</a>.</p> </note> <p>To use this feature, you must associate a web ACL with the protected resource. The web ACL must be created using the latest version of WAF (v2). You can associate the web ACL through the Shield Advanced console at <a href="https://console.aws.amazon.com/wafv2/shieldv2#/">https://console.aws.amazon.com/wafv2/shieldv2#/</a>. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with Shield Advanced</a>. You can also associate the web ACL to the resource through the WAF console or the WAF API, but you must manage Shield Advanced automatic mitigation through Shield Advanced. For information about WAF, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">WAF Developer Guide</a>.</p>
		 * Post #X-Amz-Target=AWSShield_20160616.EnableApplicationLayerAutomaticResponse
		 * @return {EnableApplicationLayerAutomaticResponseResponse} Success
		 */
		EnableApplicationLayerAutomaticResponse(requestBody: EnableApplicationLayerAutomaticResponseRequest): Observable<EnableApplicationLayerAutomaticResponseResponse> {
			return this.http.post<EnableApplicationLayerAutomaticResponseResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.EnableApplicationLayerAutomaticResponse', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Authorizes the Shield Response Team (SRT) to use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.
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
		 * Retrieves <a>ProtectionGroup</a> objects for the account. You can retrieve all protection groups or you can provide filtering criteria and retrieve just the subset of protection groups that match the criteria.
		 * Post #X-Amz-Target=AWSShield_20160616.ListProtectionGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProtectionGroupsResponse} Success
		 */
		ListProtectionGroups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListProtectionGroupsRequest): Observable<ListProtectionGroupsResponse> {
			return this.http.post<ListProtectionGroupsResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.ListProtectionGroups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves <a>Protection</a> objects for the account. You can retrieve all protections or you can provide filtering criteria and retrieve just the subset of protections that match the criteria.
		 * Post #X-Amz-Target=AWSShield_20160616.ListProtections
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProtectionsResponse} Success
		 */
		ListProtections(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListProtectionsRequest): Observable<ListProtectionsResponse> {
			return this.http.post<ListProtectionsResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.ListProtections?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the resources that are included in the protection group.
		 * Post #X-Amz-Target=AWSShield_20160616.ListResourcesInProtectionGroup
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResourcesInProtectionGroupResponse} Success
		 */
		ListResourcesInProtectionGroup(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResourcesInProtectionGroupRequest): Observable<ListResourcesInProtectionGroupResponse> {
			return this.http.post<ListResourcesInProtectionGroupResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.ListResourcesInProtectionGroup?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about Amazon Web Services tags for a specified Amazon Resource Name (ARN) in Shield.
		 * Post #X-Amz-Target=AWSShield_20160616.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds or updates tags for a resource in Shield.
		 * Post #X-Amz-Target=AWSShield_20160616.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from a resource in Shield.
		 * Post #X-Amz-Target=AWSShield_20160616.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing Shield Advanced automatic application layer DDoS mitigation configuration for the specified resource.
		 * Post #X-Amz-Target=AWSShield_20160616.UpdateApplicationLayerAutomaticResponse
		 * @return {UpdateApplicationLayerAutomaticResponseResponse} Success
		 */
		UpdateApplicationLayerAutomaticResponse(requestBody: UpdateApplicationLayerAutomaticResponseRequest): Observable<UpdateApplicationLayerAutomaticResponseResponse> {
			return this.http.post<UpdateApplicationLayerAutomaticResponseResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.UpdateApplicationLayerAutomaticResponse', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the details of the list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
		 * Post #X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings
		 * @return {UpdateEmergencyContactSettingsResponse} Success
		 */
		UpdateEmergencyContactSettings(requestBody: UpdateEmergencyContactSettingsRequest): Observable<UpdateEmergencyContactSettingsResponse> {
			return this.http.post<UpdateEmergencyContactSettingsResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.UpdateEmergencyContactSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing protection group. A protection group is a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives.
		 * Post #X-Amz-Target=AWSShield_20160616.UpdateProtectionGroup
		 * @return {UpdateProtectionGroupResponse} Success
		 */
		UpdateProtectionGroup(requestBody: UpdateProtectionGroupRequest): Observable<UpdateProtectionGroupResponse> {
			return this.http.post<UpdateProtectionGroupResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.UpdateProtectionGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the details of an existing subscription. Only enter values for parameters you want to change. Empty parameters are not updated.</p> <note> <p>For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed. </p> </note>
		 * Post #X-Amz-Target=AWSShield_20160616.UpdateSubscription
		 * @return {UpdateSubscriptionResponse} Success
		 */
		UpdateSubscription(requestBody: UpdateSubscriptionRequest): Observable<UpdateSubscriptionResponse> {
			return this.http.post<UpdateSubscriptionResponse>(this.baseUri + '#X-Amz-Target=AWSShield_20160616.UpdateSubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateDRTLogBucketX_Amz_Target { 'AWSShield_20160616.AssociateDRTLogBucket' = 0 }

	export enum AssociateDRTRoleX_Amz_Target { 'AWSShield_20160616.AssociateDRTRole' = 0 }

	export enum AssociateHealthCheckX_Amz_Target { 'AWSShield_20160616.AssociateHealthCheck' = 0 }

	export enum AssociateProactiveEngagementDetailsX_Amz_Target { 'AWSShield_20160616.AssociateProactiveEngagementDetails' = 0 }

	export enum CreateProtectionX_Amz_Target { 'AWSShield_20160616.CreateProtection' = 0 }

	export enum CreateProtectionGroupX_Amz_Target { 'AWSShield_20160616.CreateProtectionGroup' = 0 }

	export enum CreateSubscriptionX_Amz_Target { 'AWSShield_20160616.CreateSubscription' = 0 }

	export enum DeleteProtectionX_Amz_Target { 'AWSShield_20160616.DeleteProtection' = 0 }

	export enum DeleteProtectionGroupX_Amz_Target { 'AWSShield_20160616.DeleteProtectionGroup' = 0 }

	export enum DeleteSubscriptionX_Amz_Target { 'AWSShield_20160616.DeleteSubscription' = 0 }

	export enum DescribeAttackX_Amz_Target { 'AWSShield_20160616.DescribeAttack' = 0 }

	export enum DescribeAttackStatisticsX_Amz_Target { 'AWSShield_20160616.DescribeAttackStatistics' = 0 }

	export enum DescribeDRTAccessX_Amz_Target { 'AWSShield_20160616.DescribeDRTAccess' = 0 }

	export enum DescribeEmergencyContactSettingsX_Amz_Target { 'AWSShield_20160616.DescribeEmergencyContactSettings' = 0 }

	export enum DescribeProtectionX_Amz_Target { 'AWSShield_20160616.DescribeProtection' = 0 }

	export enum DescribeProtectionGroupX_Amz_Target { 'AWSShield_20160616.DescribeProtectionGroup' = 0 }

	export enum DescribeSubscriptionX_Amz_Target { 'AWSShield_20160616.DescribeSubscription' = 0 }

	export enum DisableApplicationLayerAutomaticResponseX_Amz_Target { 'AWSShield_20160616.DisableApplicationLayerAutomaticResponse' = 0 }

	export enum DisableProactiveEngagementX_Amz_Target { 'AWSShield_20160616.DisableProactiveEngagement' = 0 }

	export enum DisassociateDRTLogBucketX_Amz_Target { 'AWSShield_20160616.DisassociateDRTLogBucket' = 0 }

	export enum DisassociateDRTRoleX_Amz_Target { 'AWSShield_20160616.DisassociateDRTRole' = 0 }

	export enum DisassociateHealthCheckX_Amz_Target { 'AWSShield_20160616.DisassociateHealthCheck' = 0 }

	export enum EnableApplicationLayerAutomaticResponseX_Amz_Target { 'AWSShield_20160616.EnableApplicationLayerAutomaticResponse' = 0 }

	export enum EnableProactiveEngagementX_Amz_Target { 'AWSShield_20160616.EnableProactiveEngagement' = 0 }

	export enum GetSubscriptionStateX_Amz_Target { 'AWSShield_20160616.GetSubscriptionState' = 0 }

	export enum ListAttacksX_Amz_Target { 'AWSShield_20160616.ListAttacks' = 0 }

	export enum ListProtectionGroupsX_Amz_Target { 'AWSShield_20160616.ListProtectionGroups' = 0 }

	export enum ListProtectionsX_Amz_Target { 'AWSShield_20160616.ListProtections' = 0 }

	export enum ListResourcesInProtectionGroupX_Amz_Target { 'AWSShield_20160616.ListResourcesInProtectionGroup' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'AWSShield_20160616.ListTagsForResource' = 0 }

	export enum TagResourceX_Amz_Target { 'AWSShield_20160616.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'AWSShield_20160616.UntagResource' = 0 }

	export enum UpdateApplicationLayerAutomaticResponseX_Amz_Target { 'AWSShield_20160616.UpdateApplicationLayerAutomaticResponse' = 0 }

	export enum UpdateEmergencyContactSettingsX_Amz_Target { 'AWSShield_20160616.UpdateEmergencyContactSettings' = 0 }

	export enum UpdateProtectionGroupX_Amz_Target { 'AWSShield_20160616.UpdateProtectionGroup' = 0 }

	export enum UpdateSubscriptionX_Amz_Target { 'AWSShield_20160616.UpdateSubscription' = 0 }

}

