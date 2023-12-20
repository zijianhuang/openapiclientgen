import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddAttributesToFindingsResponse {
		failedItems: FailedItems;
	}
	export interface AddAttributesToFindingsResponseFormProperties {
	}
	export function CreateAddAttributesToFindingsResponseFormGroup() {
		return new FormGroup<AddAttributesToFindingsResponseFormProperties>({
		});

	}

	export interface FailedItems {
	}
	export interface FailedItemsFormProperties {
	}
	export function CreateFailedItemsFormGroup() {
		return new FormGroup<FailedItemsFormProperties>({
		});

	}

	export interface AddAttributesToFindingsRequest {
		findingArns: Array<string>;
		attributes: Array<Attribute>;
	}
	export interface AddAttributesToFindingsRequestFormProperties {
	}
	export function CreateAddAttributesToFindingsRequestFormGroup() {
		return new FormGroup<AddAttributesToFindingsRequestFormProperties>({
		});

	}


	/** This data type is used as a request parameter in the <a>AddAttributesToFindings</a> and <a>CreateAssessmentTemplate</a> actions. */
	export interface Attribute {
		key: string;
		value?: string | null;
	}

	/** This data type is used as a request parameter in the <a>AddAttributesToFindings</a> and <a>CreateAssessmentTemplate</a> actions. */
	export interface AttributeFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateAttributeFormGroup() {
		return new FormGroup<AttributeFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InternalException {
	}
	export interface InternalExceptionFormProperties {
	}
	export function CreateInternalExceptionFormGroup() {
		return new FormGroup<InternalExceptionFormProperties>({
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface NoSuchEntityException {
	}
	export interface NoSuchEntityExceptionFormProperties {
	}
	export function CreateNoSuchEntityExceptionFormGroup() {
		return new FormGroup<NoSuchEntityExceptionFormProperties>({
		});

	}

	export interface ServiceTemporarilyUnavailableException {
	}
	export interface ServiceTemporarilyUnavailableExceptionFormProperties {
	}
	export function CreateServiceTemporarilyUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceTemporarilyUnavailableExceptionFormProperties>({
		});

	}

	export interface CreateAssessmentTargetResponse {
		assessmentTargetArn: string;
	}
	export interface CreateAssessmentTargetResponseFormProperties {
		assessmentTargetArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssessmentTargetResponseFormGroup() {
		return new FormGroup<CreateAssessmentTargetResponseFormProperties>({
			assessmentTargetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAssessmentTargetRequest {
		assessmentTargetName: string;
		resourceGroupArn?: string | null;
	}
	export interface CreateAssessmentTargetRequestFormProperties {
		assessmentTargetName: FormControl<string | null | undefined>,
		resourceGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssessmentTargetRequestFormGroup() {
		return new FormGroup<CreateAssessmentTargetRequestFormProperties>({
			assessmentTargetName: new FormControl<string | null | undefined>(undefined),
			resourceGroupArn: new FormControl<string | null | undefined>(undefined),
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

	export interface InvalidCrossAccountRoleException {
	}
	export interface InvalidCrossAccountRoleExceptionFormProperties {
	}
	export function CreateInvalidCrossAccountRoleExceptionFormGroup() {
		return new FormGroup<InvalidCrossAccountRoleExceptionFormProperties>({
		});

	}

	export interface CreateAssessmentTemplateResponse {
		assessmentTemplateArn: string;
	}
	export interface CreateAssessmentTemplateResponseFormProperties {
		assessmentTemplateArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssessmentTemplateResponseFormGroup() {
		return new FormGroup<CreateAssessmentTemplateResponseFormProperties>({
			assessmentTemplateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAssessmentTemplateRequest {
		assessmentTargetArn: string;
		assessmentTemplateName: string;
		durationInSeconds: number;
		rulesPackageArns: Array<string>;
		userAttributesForFindings?: Array<Attribute>;
	}
	export interface CreateAssessmentTemplateRequestFormProperties {
		assessmentTargetArn: FormControl<string | null | undefined>,
		assessmentTemplateName: FormControl<string | null | undefined>,
		durationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateAssessmentTemplateRequestFormGroup() {
		return new FormGroup<CreateAssessmentTemplateRequestFormProperties>({
			assessmentTargetArn: new FormControl<string | null | undefined>(undefined),
			assessmentTemplateName: new FormControl<string | null | undefined>(undefined),
			durationInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateExclusionsPreviewResponse {
		previewToken: string;
	}
	export interface CreateExclusionsPreviewResponseFormProperties {
		previewToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateExclusionsPreviewResponseFormGroup() {
		return new FormGroup<CreateExclusionsPreviewResponseFormProperties>({
			previewToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateExclusionsPreviewRequest {
		assessmentTemplateArn: string;
	}
	export interface CreateExclusionsPreviewRequestFormProperties {
		assessmentTemplateArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateExclusionsPreviewRequestFormGroup() {
		return new FormGroup<CreateExclusionsPreviewRequestFormProperties>({
			assessmentTemplateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PreviewGenerationInProgressException {
	}
	export interface PreviewGenerationInProgressExceptionFormProperties {
	}
	export function CreatePreviewGenerationInProgressExceptionFormGroup() {
		return new FormGroup<PreviewGenerationInProgressExceptionFormProperties>({
		});

	}

	export interface CreateResourceGroupResponse {
		resourceGroupArn: string;
	}
	export interface CreateResourceGroupResponseFormProperties {
		resourceGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourceGroupResponseFormGroup() {
		return new FormGroup<CreateResourceGroupResponseFormProperties>({
			resourceGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateResourceGroupRequest {
		resourceGroupTags: Array<ResourceGroupTag>;
	}
	export interface CreateResourceGroupRequestFormProperties {
	}
	export function CreateCreateResourceGroupRequestFormGroup() {
		return new FormGroup<CreateResourceGroupRequestFormProperties>({
		});

	}


	/** This data type is used as one of the elements of the <a>ResourceGroup</a> data type. */
	export interface ResourceGroupTag {
		key: string;
		value?: string | null;
	}

	/** This data type is used as one of the elements of the <a>ResourceGroup</a> data type. */
	export interface ResourceGroupTagFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateResourceGroupTagFormGroup() {
		return new FormGroup<ResourceGroupTagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAssessmentRunRequest {
		assessmentRunArn: string;
	}
	export interface DeleteAssessmentRunRequestFormProperties {
		assessmentRunArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAssessmentRunRequestFormGroup() {
		return new FormGroup<DeleteAssessmentRunRequestFormProperties>({
			assessmentRunArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssessmentRunInProgressException {
	}
	export interface AssessmentRunInProgressExceptionFormProperties {
	}
	export function CreateAssessmentRunInProgressExceptionFormGroup() {
		return new FormGroup<AssessmentRunInProgressExceptionFormProperties>({
		});

	}

	export interface DeleteAssessmentTargetRequest {
		assessmentTargetArn: string;
	}
	export interface DeleteAssessmentTargetRequestFormProperties {
		assessmentTargetArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAssessmentTargetRequestFormGroup() {
		return new FormGroup<DeleteAssessmentTargetRequestFormProperties>({
			assessmentTargetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAssessmentTemplateRequest {
		assessmentTemplateArn: string;
	}
	export interface DeleteAssessmentTemplateRequestFormProperties {
		assessmentTemplateArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAssessmentTemplateRequestFormGroup() {
		return new FormGroup<DeleteAssessmentTemplateRequestFormProperties>({
			assessmentTemplateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAssessmentRunsResponse {
		assessmentRuns: Array<AssessmentRun>;
		failedItems: FailedItems;
	}
	export interface DescribeAssessmentRunsResponseFormProperties {
	}
	export function CreateDescribeAssessmentRunsResponseFormGroup() {
		return new FormGroup<DescribeAssessmentRunsResponseFormProperties>({
		});

	}


	/** <p>A snapshot of an Amazon Inspector assessment run that contains the findings of the assessment run .</p> <p>Used as the response element in the <a>DescribeAssessmentRuns</a> action.</p> */
	export interface AssessmentRun {
		arn: string;
		name: string;
		assessmentTemplateArn: string;
		state: AssessmentRunState;
		durationInSeconds: number;
		rulesPackageArns: Array<string>;
		userAttributesForFindings: Array<Attribute>;
		createdAt: Date;
		startedAt?: Date | null;
		completedAt?: Date | null;
		stateChangedAt: Date;
		dataCollected: boolean;
		stateChanges: Array<AssessmentRunStateChange>;
		notifications: Array<AssessmentRunNotification>;
		findingCounts: AssessmentRunFindingCounts;
	}

	/** <p>A snapshot of an Amazon Inspector assessment run that contains the findings of the assessment run .</p> <p>Used as the response element in the <a>DescribeAssessmentRuns</a> action.</p> */
	export interface AssessmentRunFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		assessmentTemplateArn: FormControl<string | null | undefined>,
		state: FormControl<AssessmentRunState | null | undefined>,
		durationInSeconds: FormControl<number | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		startedAt: FormControl<Date | null | undefined>,
		completedAt: FormControl<Date | null | undefined>,
		stateChangedAt: FormControl<Date | null | undefined>,
		dataCollected: FormControl<boolean | null | undefined>,
	}
	export function CreateAssessmentRunFormGroup() {
		return new FormGroup<AssessmentRunFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			assessmentTemplateArn: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<AssessmentRunState | null | undefined>(undefined),
			durationInSeconds: new FormControl<number | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			startedAt: new FormControl<Date | null | undefined>(undefined),
			completedAt: new FormControl<Date | null | undefined>(undefined),
			stateChangedAt: new FormControl<Date | null | undefined>(undefined),
			dataCollected: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum AssessmentRunState { CREATED = 0, START_DATA_COLLECTION_PENDING = 1, START_DATA_COLLECTION_IN_PROGRESS = 2, COLLECTING_DATA = 3, STOP_DATA_COLLECTION_PENDING = 4, DATA_COLLECTED = 5, START_EVALUATING_RULES_PENDING = 6, EVALUATING_RULES = 7, FAILED = 8, ERROR = 9, COMPLETED = 10, COMPLETED_WITH_ERRORS = 11, CANCELED = 12 }


	/** Used as one of the elements of the <a>AssessmentRun</a> data type. */
	export interface AssessmentRunStateChange {
		stateChangedAt: Date;
		state: AssessmentRunState;
	}

	/** Used as one of the elements of the <a>AssessmentRun</a> data type. */
	export interface AssessmentRunStateChangeFormProperties {
		stateChangedAt: FormControl<Date | null | undefined>,
		state: FormControl<AssessmentRunState | null | undefined>,
	}
	export function CreateAssessmentRunStateChangeFormGroup() {
		return new FormGroup<AssessmentRunStateChangeFormProperties>({
			stateChangedAt: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<AssessmentRunState | null | undefined>(undefined),
		});

	}


	/** Used as one of the elements of the <a>AssessmentRun</a> data type. */
	export interface AssessmentRunNotification {
		date: Date;
		event: AssessmentRunNotificationEvent;
		message?: string | null;
		error: boolean;
		snsTopicArn?: string | null;
		snsPublishStatusCode?: AssessmentRunNotificationSnsPublishStatusCode | null;
	}

	/** Used as one of the elements of the <a>AssessmentRun</a> data type. */
	export interface AssessmentRunNotificationFormProperties {
		date: FormControl<Date | null | undefined>,
		event: FormControl<AssessmentRunNotificationEvent | null | undefined>,
		message: FormControl<string | null | undefined>,
		error: FormControl<boolean | null | undefined>,
		snsTopicArn: FormControl<string | null | undefined>,
		snsPublishStatusCode: FormControl<AssessmentRunNotificationSnsPublishStatusCode | null | undefined>,
	}
	export function CreateAssessmentRunNotificationFormGroup() {
		return new FormGroup<AssessmentRunNotificationFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			event: new FormControl<AssessmentRunNotificationEvent | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<boolean | null | undefined>(undefined),
			snsTopicArn: new FormControl<string | null | undefined>(undefined),
			snsPublishStatusCode: new FormControl<AssessmentRunNotificationSnsPublishStatusCode | null | undefined>(undefined),
		});

	}

	export enum AssessmentRunNotificationEvent { ASSESSMENT_RUN_STARTED = 0, ASSESSMENT_RUN_COMPLETED = 1, ASSESSMENT_RUN_STATE_CHANGED = 2, FINDING_REPORTED = 3, OTHER = 4 }

	export enum AssessmentRunNotificationSnsPublishStatusCode { SUCCESS = 0, TOPIC_DOES_NOT_EXIST = 1, ACCESS_DENIED = 2, INTERNAL_ERROR = 3 }

	export interface AssessmentRunFindingCounts {
	}
	export interface AssessmentRunFindingCountsFormProperties {
	}
	export function CreateAssessmentRunFindingCountsFormGroup() {
		return new FormGroup<AssessmentRunFindingCountsFormProperties>({
		});

	}

	export interface DescribeAssessmentRunsRequest {
		assessmentRunArns: Array<string>;
	}
	export interface DescribeAssessmentRunsRequestFormProperties {
	}
	export function CreateDescribeAssessmentRunsRequestFormGroup() {
		return new FormGroup<DescribeAssessmentRunsRequestFormProperties>({
		});

	}

	export interface DescribeAssessmentTargetsResponse {
		assessmentTargets: Array<AssessmentTarget>;
		failedItems: FailedItems;
	}
	export interface DescribeAssessmentTargetsResponseFormProperties {
	}
	export function CreateDescribeAssessmentTargetsResponseFormGroup() {
		return new FormGroup<DescribeAssessmentTargetsResponseFormProperties>({
		});

	}


	/** Contains information about an Amazon Inspector application. This data type is used as the response element in the <a>DescribeAssessmentTargets</a> action. */
	export interface AssessmentTarget {
		arn: string;
		name: string;
		resourceGroupArn?: string | null;
		createdAt: Date;
		updatedAt: Date;
	}

	/** Contains information about an Amazon Inspector application. This data type is used as the response element in the <a>DescribeAssessmentTargets</a> action. */
	export interface AssessmentTargetFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		resourceGroupArn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateAssessmentTargetFormGroup() {
		return new FormGroup<AssessmentTargetFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceGroupArn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeAssessmentTargetsRequest {
		assessmentTargetArns: Array<string>;
	}
	export interface DescribeAssessmentTargetsRequestFormProperties {
	}
	export function CreateDescribeAssessmentTargetsRequestFormGroup() {
		return new FormGroup<DescribeAssessmentTargetsRequestFormProperties>({
		});

	}

	export interface DescribeAssessmentTemplatesResponse {
		assessmentTemplates: Array<AssessmentTemplate>;
		failedItems: FailedItems;
	}
	export interface DescribeAssessmentTemplatesResponseFormProperties {
	}
	export function CreateDescribeAssessmentTemplatesResponseFormGroup() {
		return new FormGroup<DescribeAssessmentTemplatesResponseFormProperties>({
		});

	}


	/** Contains information about an Amazon Inspector assessment template. This data type is used as the response element in the <a>DescribeAssessmentTemplates</a> action. */
	export interface AssessmentTemplate {
		arn: string;
		name: string;
		assessmentTargetArn: string;
		durationInSeconds: number;
		rulesPackageArns: Array<string>;
		userAttributesForFindings: Array<Attribute>;
		lastAssessmentRunArn?: string | null;
		assessmentRunCount: number;
		createdAt: Date;
	}

	/** Contains information about an Amazon Inspector assessment template. This data type is used as the response element in the <a>DescribeAssessmentTemplates</a> action. */
	export interface AssessmentTemplateFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		assessmentTargetArn: FormControl<string | null | undefined>,
		durationInSeconds: FormControl<number | null | undefined>,
		lastAssessmentRunArn: FormControl<string | null | undefined>,
		assessmentRunCount: FormControl<number | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateAssessmentTemplateFormGroup() {
		return new FormGroup<AssessmentTemplateFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			assessmentTargetArn: new FormControl<string | null | undefined>(undefined),
			durationInSeconds: new FormControl<number | null | undefined>(undefined),
			lastAssessmentRunArn: new FormControl<string | null | undefined>(undefined),
			assessmentRunCount: new FormControl<number | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeAssessmentTemplatesRequest {
		assessmentTemplateArns: Array<string>;
	}
	export interface DescribeAssessmentTemplatesRequestFormProperties {
	}
	export function CreateDescribeAssessmentTemplatesRequestFormGroup() {
		return new FormGroup<DescribeAssessmentTemplatesRequestFormProperties>({
		});

	}

	export interface DescribeCrossAccountAccessRoleResponse {
		roleArn: string;
		valid: boolean;
		registeredAt: Date;
	}
	export interface DescribeCrossAccountAccessRoleResponseFormProperties {
		roleArn: FormControl<string | null | undefined>,
		valid: FormControl<boolean | null | undefined>,
		registeredAt: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeCrossAccountAccessRoleResponseFormGroup() {
		return new FormGroup<DescribeCrossAccountAccessRoleResponseFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
			valid: new FormControl<boolean | null | undefined>(undefined),
			registeredAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeExclusionsResponse {
		exclusions: ExclusionMap;
		failedItems: FailedItems;
	}
	export interface DescribeExclusionsResponseFormProperties {
	}
	export function CreateDescribeExclusionsResponseFormGroup() {
		return new FormGroup<DescribeExclusionsResponseFormProperties>({
		});

	}

	export interface ExclusionMap {
	}
	export interface ExclusionMapFormProperties {
	}
	export function CreateExclusionMapFormGroup() {
		return new FormGroup<ExclusionMapFormProperties>({
		});

	}

	export interface DescribeExclusionsRequest {
		exclusionArns: Array<string>;
		locale?: DescribeExclusionsRequestLocale | null;
	}
	export interface DescribeExclusionsRequestFormProperties {
		locale: FormControl<DescribeExclusionsRequestLocale | null | undefined>,
	}
	export function CreateDescribeExclusionsRequestFormGroup() {
		return new FormGroup<DescribeExclusionsRequestFormProperties>({
			locale: new FormControl<DescribeExclusionsRequestLocale | null | undefined>(undefined),
		});

	}

	export enum DescribeExclusionsRequestLocale { EN_US = 0 }

	export interface DescribeFindingsResponse {
		findings: Array<Finding>;
		failedItems: FailedItems;
	}
	export interface DescribeFindingsResponseFormProperties {
	}
	export function CreateDescribeFindingsResponseFormGroup() {
		return new FormGroup<DescribeFindingsResponseFormProperties>({
		});

	}


	/** Contains information about an Amazon Inspector finding. This data type is used as the response element in the <a>DescribeFindings</a> action. */
	export interface Finding {
		arn: string;
		schemaVersion?: number | null;
		service?: string | null;

		/** This data type is used in the <a>Finding</a> data type. */
		serviceAttributes?: InspectorServiceAttributes;
		assetType?: FindingAssetType | null;

		/** A collection of attributes of the host from which the finding is generated. */
		assetAttributes?: AssetAttributes;
		id?: string | null;
		title?: string | null;
		description?: string | null;
		recommendation?: string | null;
		severity?: FindingSeverity | null;
		numericSeverity?: number | null;
		confidence?: number | null;
		indicatorOfCompromise?: boolean | null;
		attributes: Array<Attribute>;
		userAttributes: Array<Attribute>;
		createdAt: Date;
		updatedAt: Date;
	}

	/** Contains information about an Amazon Inspector finding. This data type is used as the response element in the <a>DescribeFindings</a> action. */
	export interface FindingFormProperties {
		arn: FormControl<string | null | undefined>,
		schemaVersion: FormControl<number | null | undefined>,
		service: FormControl<string | null | undefined>,
		assetType: FormControl<FindingAssetType | null | undefined>,
		id: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		recommendation: FormControl<string | null | undefined>,
		severity: FormControl<FindingSeverity | null | undefined>,
		numericSeverity: FormControl<number | null | undefined>,
		confidence: FormControl<number | null | undefined>,
		indicatorOfCompromise: FormControl<boolean | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateFindingFormGroup() {
		return new FormGroup<FindingFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			schemaVersion: new FormControl<number | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
			assetType: new FormControl<FindingAssetType | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			recommendation: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<FindingSeverity | null | undefined>(undefined),
			numericSeverity: new FormControl<number | null | undefined>(undefined),
			confidence: new FormControl<number | null | undefined>(undefined),
			indicatorOfCompromise: new FormControl<boolean | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** This data type is used in the <a>Finding</a> data type. */
	export interface InspectorServiceAttributes {
		schemaVersion: number;
		assessmentRunArn?: string | null;
		rulesPackageArn?: string | null;
	}

	/** This data type is used in the <a>Finding</a> data type. */
	export interface InspectorServiceAttributesFormProperties {
		schemaVersion: FormControl<number | null | undefined>,
		assessmentRunArn: FormControl<string | null | undefined>,
		rulesPackageArn: FormControl<string | null | undefined>,
	}
	export function CreateInspectorServiceAttributesFormGroup() {
		return new FormGroup<InspectorServiceAttributesFormProperties>({
			schemaVersion: new FormControl<number | null | undefined>(undefined),
			assessmentRunArn: new FormControl<string | null | undefined>(undefined),
			rulesPackageArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FindingAssetType { ec2_instance = 0 }


	/** A collection of attributes of the host from which the finding is generated. */
	export interface AssetAttributes {
		schemaVersion: number;
		agentId?: string | null;
		autoScalingGroup?: string | null;
		amiId?: string | null;
		hostname?: string | null;
		ipv4Addresses?: Array<string>;
		tags?: Array<Tag>;
		networkInterfaces?: Array<NetworkInterface>;
	}

	/** A collection of attributes of the host from which the finding is generated. */
	export interface AssetAttributesFormProperties {
		schemaVersion: FormControl<number | null | undefined>,
		agentId: FormControl<string | null | undefined>,
		autoScalingGroup: FormControl<string | null | undefined>,
		amiId: FormControl<string | null | undefined>,
		hostname: FormControl<string | null | undefined>,
	}
	export function CreateAssetAttributesFormGroup() {
		return new FormGroup<AssetAttributesFormProperties>({
			schemaVersion: new FormControl<number | null | undefined>(undefined),
			agentId: new FormControl<string | null | undefined>(undefined),
			autoScalingGroup: new FormControl<string | null | undefined>(undefined),
			amiId: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A key and value pair. This data type is used as a request parameter in the <a>SetTagsForResource</a> action and a response element in the <a>ListTagsForResource</a> action. */
	export interface Tag {
		key: string;
		value?: string | null;
	}

	/** A key and value pair. This data type is used as a request parameter in the <a>SetTagsForResource</a> action and a response element in the <a>ListTagsForResource</a> action. */
	export interface TagFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the network interfaces interacting with an EC2 instance. This data type is used as one of the elements of the <a>AssetAttributes</a> data type. */
	export interface NetworkInterface {
		networkInterfaceId?: string | null;
		subnetId?: string | null;
		vpcId?: string | null;
		privateDnsName?: string | null;
		privateIpAddress?: string | null;
		privateIpAddresses?: Array<PrivateIp>;
		publicDnsName?: string | null;
		publicIp?: string | null;
		ipv6Addresses?: Array<string>;
		securityGroups?: Array<SecurityGroup>;
	}

	/** Contains information about the network interfaces interacting with an EC2 instance. This data type is used as one of the elements of the <a>AssetAttributes</a> data type. */
	export interface NetworkInterfaceFormProperties {
		networkInterfaceId: FormControl<string | null | undefined>,
		subnetId: FormControl<string | null | undefined>,
		vpcId: FormControl<string | null | undefined>,
		privateDnsName: FormControl<string | null | undefined>,
		privateIpAddress: FormControl<string | null | undefined>,
		publicDnsName: FormControl<string | null | undefined>,
		publicIp: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInterfaceFormGroup() {
		return new FormGroup<NetworkInterfaceFormProperties>({
			networkInterfaceId: new FormControl<string | null | undefined>(undefined),
			subnetId: new FormControl<string | null | undefined>(undefined),
			vpcId: new FormControl<string | null | undefined>(undefined),
			privateDnsName: new FormControl<string | null | undefined>(undefined),
			privateIpAddress: new FormControl<string | null | undefined>(undefined),
			publicDnsName: new FormControl<string | null | undefined>(undefined),
			publicIp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a private IP address associated with a network interface. This data type is used as a response element in the <a>DescribeFindings</a> action. */
	export interface PrivateIp {
		privateDnsName?: string | null;
		privateIpAddress?: string | null;
	}

	/** Contains information about a private IP address associated with a network interface. This data type is used as a response element in the <a>DescribeFindings</a> action. */
	export interface PrivateIpFormProperties {
		privateDnsName: FormControl<string | null | undefined>,
		privateIpAddress: FormControl<string | null | undefined>,
	}
	export function CreatePrivateIpFormGroup() {
		return new FormGroup<PrivateIpFormProperties>({
			privateDnsName: new FormControl<string | null | undefined>(undefined),
			privateIpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a security group associated with a network interface. This data type is used as one of the elements of the <a>NetworkInterface</a> data type. */
	export interface SecurityGroup {
		groupName?: string | null;
		groupId?: string | null;
	}

	/** Contains information about a security group associated with a network interface. This data type is used as one of the elements of the <a>NetworkInterface</a> data type. */
	export interface SecurityGroupFormProperties {
		groupName: FormControl<string | null | undefined>,
		groupId: FormControl<string | null | undefined>,
	}
	export function CreateSecurityGroupFormGroup() {
		return new FormGroup<SecurityGroupFormProperties>({
			groupName: new FormControl<string | null | undefined>(undefined),
			groupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FindingSeverity { Low = 0, Medium = 1, High = 2, Informational = 3, Undefined = 4 }

	export interface DescribeFindingsRequest {
		findingArns: Array<string>;
		locale?: DescribeExclusionsRequestLocale | null;
	}
	export interface DescribeFindingsRequestFormProperties {
		locale: FormControl<DescribeExclusionsRequestLocale | null | undefined>,
	}
	export function CreateDescribeFindingsRequestFormGroup() {
		return new FormGroup<DescribeFindingsRequestFormProperties>({
			locale: new FormControl<DescribeExclusionsRequestLocale | null | undefined>(undefined),
		});

	}

	export interface DescribeResourceGroupsResponse {
		resourceGroups: Array<ResourceGroup>;
		failedItems: FailedItems;
	}
	export interface DescribeResourceGroupsResponseFormProperties {
	}
	export function CreateDescribeResourceGroupsResponseFormGroup() {
		return new FormGroup<DescribeResourceGroupsResponseFormProperties>({
		});

	}


	/** Contains information about a resource group. The resource group defines a set of tags that, when queried, identify the AWS resources that make up the assessment target. This data type is used as the response element in the <a>DescribeResourceGroups</a> action. */
	export interface ResourceGroup {
		arn: string;
		tags: Array<ResourceGroupTag>;
		createdAt: Date;
	}

	/** Contains information about a resource group. The resource group defines a set of tags that, when queried, identify the AWS resources that make up the assessment target. This data type is used as the response element in the <a>DescribeResourceGroups</a> action. */
	export interface ResourceGroupFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateResourceGroupFormGroup() {
		return new FormGroup<ResourceGroupFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeResourceGroupsRequest {
		resourceGroupArns: Array<string>;
	}
	export interface DescribeResourceGroupsRequestFormProperties {
	}
	export function CreateDescribeResourceGroupsRequestFormGroup() {
		return new FormGroup<DescribeResourceGroupsRequestFormProperties>({
		});

	}

	export interface DescribeRulesPackagesResponse {
		rulesPackages: Array<RulesPackage>;
		failedItems: FailedItems;
	}
	export interface DescribeRulesPackagesResponseFormProperties {
	}
	export function CreateDescribeRulesPackagesResponseFormGroup() {
		return new FormGroup<DescribeRulesPackagesResponseFormProperties>({
		});

	}


	/** Contains information about an Amazon Inspector rules package. This data type is used as the response element in the <a>DescribeRulesPackages</a> action. */
	export interface RulesPackage {
		arn: string;
		name: string;
		version: string;
		provider: string;
		description?: string | null;
	}

	/** Contains information about an Amazon Inspector rules package. This data type is used as the response element in the <a>DescribeRulesPackages</a> action. */
	export interface RulesPackageFormProperties {
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		provider: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateRulesPackageFormGroup() {
		return new FormGroup<RulesPackageFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRulesPackagesRequest {
		rulesPackageArns: Array<string>;
		locale?: DescribeExclusionsRequestLocale | null;
	}
	export interface DescribeRulesPackagesRequestFormProperties {
		locale: FormControl<DescribeExclusionsRequestLocale | null | undefined>,
	}
	export function CreateDescribeRulesPackagesRequestFormGroup() {
		return new FormGroup<DescribeRulesPackagesRequestFormProperties>({
			locale: new FormControl<DescribeExclusionsRequestLocale | null | undefined>(undefined),
		});

	}

	export interface GetAssessmentReportResponse {
		status: GetAssessmentReportResponseStatus;
		url?: string | null;
	}
	export interface GetAssessmentReportResponseFormProperties {
		status: FormControl<GetAssessmentReportResponseStatus | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateGetAssessmentReportResponseFormGroup() {
		return new FormGroup<GetAssessmentReportResponseFormProperties>({
			status: new FormControl<GetAssessmentReportResponseStatus | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetAssessmentReportResponseStatus { WORK_IN_PROGRESS = 0, FAILED = 1, COMPLETED = 2 }

	export interface GetAssessmentReportRequest {
		assessmentRunArn: string;
		reportFileFormat: GetAssessmentReportRequestReportFileFormat;
		reportType: GetAssessmentReportRequestReportType;
	}
	export interface GetAssessmentReportRequestFormProperties {
		assessmentRunArn: FormControl<string | null | undefined>,
		reportFileFormat: FormControl<GetAssessmentReportRequestReportFileFormat | null | undefined>,
		reportType: FormControl<GetAssessmentReportRequestReportType | null | undefined>,
	}
	export function CreateGetAssessmentReportRequestFormGroup() {
		return new FormGroup<GetAssessmentReportRequestFormProperties>({
			assessmentRunArn: new FormControl<string | null | undefined>(undefined),
			reportFileFormat: new FormControl<GetAssessmentReportRequestReportFileFormat | null | undefined>(undefined),
			reportType: new FormControl<GetAssessmentReportRequestReportType | null | undefined>(undefined),
		});

	}

	export enum GetAssessmentReportRequestReportFileFormat { HTML = 0, PDF = 1 }

	export enum GetAssessmentReportRequestReportType { FINDING = 0, FULL = 1 }

	export interface UnsupportedFeatureException {
	}
	export interface UnsupportedFeatureExceptionFormProperties {
	}
	export function CreateUnsupportedFeatureExceptionFormGroup() {
		return new FormGroup<UnsupportedFeatureExceptionFormProperties>({
		});

	}

	export interface GetExclusionsPreviewResponse {
		previewStatus: GetExclusionsPreviewResponsePreviewStatus;
		exclusionPreviews?: Array<ExclusionPreview>;
		nextToken?: string | null;
	}
	export interface GetExclusionsPreviewResponseFormProperties {
		previewStatus: FormControl<GetExclusionsPreviewResponsePreviewStatus | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetExclusionsPreviewResponseFormGroup() {
		return new FormGroup<GetExclusionsPreviewResponseFormProperties>({
			previewStatus: new FormControl<GetExclusionsPreviewResponsePreviewStatus | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetExclusionsPreviewResponsePreviewStatus { WORK_IN_PROGRESS = 0, COMPLETED = 1 }


	/** Contains information about what is excluded from an assessment run given the current state of the assessment template. */
	export interface ExclusionPreview {
		title: string;
		description: string;
		recommendation: string;
		scopes: Array<Scope>;
		attributes?: Array<Attribute>;
	}

	/** Contains information about what is excluded from an assessment run given the current state of the assessment template. */
	export interface ExclusionPreviewFormProperties {
		title: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		recommendation: FormControl<string | null | undefined>,
	}
	export function CreateExclusionPreviewFormGroup() {
		return new FormGroup<ExclusionPreviewFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			recommendation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This data type contains key-value pairs that identify various Amazon resources. */
	export interface Scope {
		key?: ScopeKey | null;
		value?: string | null;
	}

	/** This data type contains key-value pairs that identify various Amazon resources. */
	export interface ScopeFormProperties {
		key: FormControl<ScopeKey | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateScopeFormGroup() {
		return new FormGroup<ScopeFormProperties>({
			key: new FormControl<ScopeKey | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScopeKey { INSTANCE_ID = 0, RULES_PACKAGE_ARN = 1 }

	export interface GetExclusionsPreviewRequest {
		assessmentTemplateArn: string;
		previewToken: string;
		nextToken?: string | null;
		maxResults?: number | null;
		locale?: DescribeExclusionsRequestLocale | null;
	}
	export interface GetExclusionsPreviewRequestFormProperties {
		assessmentTemplateArn: FormControl<string | null | undefined>,
		previewToken: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		locale: FormControl<DescribeExclusionsRequestLocale | null | undefined>,
	}
	export function CreateGetExclusionsPreviewRequestFormGroup() {
		return new FormGroup<GetExclusionsPreviewRequestFormProperties>({
			assessmentTemplateArn: new FormControl<string | null | undefined>(undefined),
			previewToken: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			locale: new FormControl<DescribeExclusionsRequestLocale | null | undefined>(undefined),
		});

	}

	export interface GetTelemetryMetadataResponse {
		telemetryMetadata: Array<TelemetryMetadata>;
	}
	export interface GetTelemetryMetadataResponseFormProperties {
	}
	export function CreateGetTelemetryMetadataResponseFormGroup() {
		return new FormGroup<GetTelemetryMetadataResponseFormProperties>({
		});

	}


	/** The metadata about the Amazon Inspector application data metrics collected by the agent. This data type is used as the response element in the <a>GetTelemetryMetadata</a> action. */
	export interface TelemetryMetadata {
		messageType: string;
		count: number;
		dataSize?: number | null;
	}

	/** The metadata about the Amazon Inspector application data metrics collected by the agent. This data type is used as the response element in the <a>GetTelemetryMetadata</a> action. */
	export interface TelemetryMetadataFormProperties {
		messageType: FormControl<string | null | undefined>,
		count: FormControl<number | null | undefined>,
		dataSize: FormControl<number | null | undefined>,
	}
	export function CreateTelemetryMetadataFormGroup() {
		return new FormGroup<TelemetryMetadataFormProperties>({
			messageType: new FormControl<string | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			dataSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTelemetryMetadataRequest {
		assessmentRunArn: string;
	}
	export interface GetTelemetryMetadataRequestFormProperties {
		assessmentRunArn: FormControl<string | null | undefined>,
	}
	export function CreateGetTelemetryMetadataRequestFormGroup() {
		return new FormGroup<GetTelemetryMetadataRequestFormProperties>({
			assessmentRunArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssessmentRunAgentsResponse {
		assessmentRunAgents: Array<AssessmentRunAgent>;
		nextToken?: string | null;
	}
	export interface ListAssessmentRunAgentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssessmentRunAgentsResponseFormGroup() {
		return new FormGroup<ListAssessmentRunAgentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about an Amazon Inspector agent. This data type is used as a response element in the <a>ListAssessmentRunAgents</a> action. */
	export interface AssessmentRunAgent {
		agentId: string;
		assessmentRunArn: string;
		agentHealth: AssessmentRunAgentAgentHealth;
		agentHealthCode: AssessmentRunAgentAgentHealthCode;
		agentHealthDetails?: string | null;
		autoScalingGroup?: string | null;
		telemetryMetadata: Array<TelemetryMetadata>;
	}

	/** Contains information about an Amazon Inspector agent. This data type is used as a response element in the <a>ListAssessmentRunAgents</a> action. */
	export interface AssessmentRunAgentFormProperties {
		agentId: FormControl<string | null | undefined>,
		assessmentRunArn: FormControl<string | null | undefined>,
		agentHealth: FormControl<AssessmentRunAgentAgentHealth | null | undefined>,
		agentHealthCode: FormControl<AssessmentRunAgentAgentHealthCode | null | undefined>,
		agentHealthDetails: FormControl<string | null | undefined>,
		autoScalingGroup: FormControl<string | null | undefined>,
	}
	export function CreateAssessmentRunAgentFormGroup() {
		return new FormGroup<AssessmentRunAgentFormProperties>({
			agentId: new FormControl<string | null | undefined>(undefined),
			assessmentRunArn: new FormControl<string | null | undefined>(undefined),
			agentHealth: new FormControl<AssessmentRunAgentAgentHealth | null | undefined>(undefined),
			agentHealthCode: new FormControl<AssessmentRunAgentAgentHealthCode | null | undefined>(undefined),
			agentHealthDetails: new FormControl<string | null | undefined>(undefined),
			autoScalingGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssessmentRunAgentAgentHealth { HEALTHY = 0, UNHEALTHY = 1, UNKNOWN = 2 }

	export enum AssessmentRunAgentAgentHealthCode { IDLE = 0, RUNNING = 1, SHUTDOWN = 2, UNHEALTHY = 3, THROTTLED = 4, UNKNOWN = 5 }

	export interface ListAssessmentRunAgentsRequest {
		assessmentRunArn: string;

		/** Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the <a>ListAssessmentRunAgents</a> action. */
		filter?: AgentFilter;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface ListAssessmentRunAgentsRequestFormProperties {
		assessmentRunArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAssessmentRunAgentsRequestFormGroup() {
		return new FormGroup<ListAssessmentRunAgentsRequestFormProperties>({
			assessmentRunArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the <a>ListAssessmentRunAgents</a> action. */
	export interface AgentFilter {
		agentHealths: Array<AgentHealth>;
		agentHealthCodes: Array<AgentHealthCode>;
	}

	/** Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the <a>ListAssessmentRunAgents</a> action. */
	export interface AgentFilterFormProperties {
	}
	export function CreateAgentFilterFormGroup() {
		return new FormGroup<AgentFilterFormProperties>({
		});

	}

	export enum AgentHealth { HEALTHY = 0, UNHEALTHY = 1, UNKNOWN = 2 }

	export enum AgentHealthCode { IDLE = 0, RUNNING = 1, SHUTDOWN = 2, UNHEALTHY = 3, THROTTLED = 4, UNKNOWN = 5 }

	export interface ListAssessmentRunsResponse {
		assessmentRunArns: Array<string>;
		nextToken?: string | null;
	}
	export interface ListAssessmentRunsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssessmentRunsResponseFormGroup() {
		return new FormGroup<ListAssessmentRunsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssessmentRunsRequest {
		assessmentTemplateArns?: Array<string>;

		/** Used as the request parameter in the <a>ListAssessmentRuns</a> action. */
		filter?: AssessmentRunFilter;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface ListAssessmentRunsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAssessmentRunsRequestFormGroup() {
		return new FormGroup<ListAssessmentRunsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Used as the request parameter in the <a>ListAssessmentRuns</a> action. */
	export interface AssessmentRunFilter {
		namePattern?: string | null;
		states?: Array<AssessmentRunState>;

		/** This data type is used in the <a>AssessmentTemplateFilter</a> data type. */
		durationRange?: DurationRange;
		rulesPackageArns?: Array<string>;

		/** This data type is used in the <a>AssessmentRunFilter</a> data type. */
		startTimeRange?: TimestampRange;

		/** This data type is used in the <a>AssessmentRunFilter</a> data type. */
		completionTimeRange?: TimestampRange;

		/** This data type is used in the <a>AssessmentRunFilter</a> data type. */
		stateChangeTimeRange?: TimestampRange;
	}

	/** Used as the request parameter in the <a>ListAssessmentRuns</a> action. */
	export interface AssessmentRunFilterFormProperties {
		namePattern: FormControl<string | null | undefined>,
	}
	export function CreateAssessmentRunFilterFormGroup() {
		return new FormGroup<AssessmentRunFilterFormProperties>({
			namePattern: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This data type is used in the <a>AssessmentTemplateFilter</a> data type. */
	export interface DurationRange {
		minSeconds?: number | null;
		maxSeconds?: number | null;
	}

	/** This data type is used in the <a>AssessmentTemplateFilter</a> data type. */
	export interface DurationRangeFormProperties {
		minSeconds: FormControl<number | null | undefined>,
		maxSeconds: FormControl<number | null | undefined>,
	}
	export function CreateDurationRangeFormGroup() {
		return new FormGroup<DurationRangeFormProperties>({
			minSeconds: new FormControl<number | null | undefined>(undefined),
			maxSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This data type is used in the <a>AssessmentRunFilter</a> data type. */
	export interface TimestampRange {
		beginDate?: Date | null;
		endDate?: Date | null;
	}

	/** This data type is used in the <a>AssessmentRunFilter</a> data type. */
	export interface TimestampRangeFormProperties {
		beginDate: FormControl<Date | null | undefined>,
		endDate: FormControl<Date | null | undefined>,
	}
	export function CreateTimestampRangeFormGroup() {
		return new FormGroup<TimestampRangeFormProperties>({
			beginDate: new FormControl<Date | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListAssessmentTargetsResponse {
		assessmentTargetArns: Array<string>;
		nextToken?: string | null;
	}
	export interface ListAssessmentTargetsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssessmentTargetsResponseFormGroup() {
		return new FormGroup<ListAssessmentTargetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssessmentTargetsRequest {

		/** Used as the request parameter in the <a>ListAssessmentTargets</a> action. */
		filter?: AssessmentTargetFilter;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface ListAssessmentTargetsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAssessmentTargetsRequestFormGroup() {
		return new FormGroup<ListAssessmentTargetsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Used as the request parameter in the <a>ListAssessmentTargets</a> action. */
	export interface AssessmentTargetFilter {
		assessmentTargetNamePattern?: string | null;
	}

	/** Used as the request parameter in the <a>ListAssessmentTargets</a> action. */
	export interface AssessmentTargetFilterFormProperties {
		assessmentTargetNamePattern: FormControl<string | null | undefined>,
	}
	export function CreateAssessmentTargetFilterFormGroup() {
		return new FormGroup<AssessmentTargetFilterFormProperties>({
			assessmentTargetNamePattern: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssessmentTemplatesResponse {
		assessmentTemplateArns: Array<string>;
		nextToken?: string | null;
	}
	export interface ListAssessmentTemplatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssessmentTemplatesResponseFormGroup() {
		return new FormGroup<ListAssessmentTemplatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssessmentTemplatesRequest {
		assessmentTargetArns?: Array<string>;

		/** Used as the request parameter in the <a>ListAssessmentTemplates</a> action. */
		filter?: AssessmentTemplateFilter;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface ListAssessmentTemplatesRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAssessmentTemplatesRequestFormGroup() {
		return new FormGroup<ListAssessmentTemplatesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Used as the request parameter in the <a>ListAssessmentTemplates</a> action. */
	export interface AssessmentTemplateFilter {
		namePattern?: string | null;

		/** This data type is used in the <a>AssessmentTemplateFilter</a> data type. */
		durationRange?: DurationRange;
		rulesPackageArns?: Array<string>;
	}

	/** Used as the request parameter in the <a>ListAssessmentTemplates</a> action. */
	export interface AssessmentTemplateFilterFormProperties {
		namePattern: FormControl<string | null | undefined>,
	}
	export function CreateAssessmentTemplateFilterFormGroup() {
		return new FormGroup<AssessmentTemplateFilterFormProperties>({
			namePattern: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEventSubscriptionsResponse {
		subscriptions: Array<Subscription>;
		nextToken?: string | null;
	}
	export interface ListEventSubscriptionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEventSubscriptionsResponseFormGroup() {
		return new FormGroup<ListEventSubscriptionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This data type is used as a response element in the <a>ListEventSubscriptions</a> action. */
	export interface Subscription {
		resourceArn: string;
		topicArn: string;
		eventSubscriptions: Array<EventSubscription>;
	}

	/** This data type is used as a response element in the <a>ListEventSubscriptions</a> action. */
	export interface SubscriptionFormProperties {
		resourceArn: FormControl<string | null | undefined>,
		topicArn: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
			topicArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This data type is used in the <a>Subscription</a> data type. */
	export interface EventSubscription {
		event: AssessmentRunNotificationEvent;
		subscribedAt: Date;
	}

	/** This data type is used in the <a>Subscription</a> data type. */
	export interface EventSubscriptionFormProperties {
		event: FormControl<AssessmentRunNotificationEvent | null | undefined>,
		subscribedAt: FormControl<Date | null | undefined>,
	}
	export function CreateEventSubscriptionFormGroup() {
		return new FormGroup<EventSubscriptionFormProperties>({
			event: new FormControl<AssessmentRunNotificationEvent | null | undefined>(undefined),
			subscribedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListEventSubscriptionsRequest {
		resourceArn?: string | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface ListEventSubscriptionsRequestFormProperties {
		resourceArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListEventSubscriptionsRequestFormGroup() {
		return new FormGroup<ListEventSubscriptionsRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListExclusionsResponse {
		exclusionArns: Array<string>;
		nextToken?: string | null;
	}
	export interface ListExclusionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExclusionsResponseFormGroup() {
		return new FormGroup<ListExclusionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListExclusionsRequest {
		assessmentRunArn: string;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface ListExclusionsRequestFormProperties {
		assessmentRunArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListExclusionsRequestFormGroup() {
		return new FormGroup<ListExclusionsRequestFormProperties>({
			assessmentRunArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListFindingsResponse {
		findingArns: Array<string>;
		nextToken?: string | null;
	}
	export interface ListFindingsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingsResponseFormGroup() {
		return new FormGroup<ListFindingsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFindingsRequest {
		assessmentRunArns?: Array<string>;

		/** This data type is used as a request parameter in the <a>ListFindings</a> action. */
		filter?: FindingFilter;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface ListFindingsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFindingsRequestFormGroup() {
		return new FormGroup<ListFindingsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This data type is used as a request parameter in the <a>ListFindings</a> action. */
	export interface FindingFilter {
		agentIds?: Array<string>;
		autoScalingGroups?: Array<string>;
		ruleNames?: Array<string>;
		severities?: Array<Severity>;
		rulesPackageArns?: Array<string>;
		attributes?: Array<Attribute>;
		userAttributes?: Array<Attribute>;

		/** This data type is used in the <a>AssessmentRunFilter</a> data type. */
		creationTimeRange?: TimestampRange;
	}

	/** This data type is used as a request parameter in the <a>ListFindings</a> action. */
	export interface FindingFilterFormProperties {
	}
	export function CreateFindingFilterFormGroup() {
		return new FormGroup<FindingFilterFormProperties>({
		});

	}

	export enum Severity { Low = 0, Medium = 1, High = 2, Informational = 3, Undefined = 4 }

	export interface ListRulesPackagesResponse {
		rulesPackageArns: Array<string>;
		nextToken?: string | null;
	}
	export interface ListRulesPackagesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRulesPackagesResponseFormGroup() {
		return new FormGroup<ListRulesPackagesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRulesPackagesRequest {
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface ListRulesPackagesRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRulesPackagesRequestFormGroup() {
		return new FormGroup<ListRulesPackagesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
		resourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PreviewAgentsResponse {
		agentPreviews: Array<AgentPreview>;
		nextToken?: string | null;
	}
	export interface PreviewAgentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreatePreviewAgentsResponseFormGroup() {
		return new FormGroup<PreviewAgentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used as a response element in the <a>PreviewAgents</a> action. */
	export interface AgentPreview {
		hostname?: string | null;
		agentId: string;
		autoScalingGroup?: string | null;
		agentHealth?: AssessmentRunAgentAgentHealth | null;
		agentVersion?: string | null;
		operatingSystem?: string | null;
		kernelVersion?: string | null;
		ipv4Address?: string | null;
	}

	/** Used as a response element in the <a>PreviewAgents</a> action. */
	export interface AgentPreviewFormProperties {
		hostname: FormControl<string | null | undefined>,
		agentId: FormControl<string | null | undefined>,
		autoScalingGroup: FormControl<string | null | undefined>,
		agentHealth: FormControl<AssessmentRunAgentAgentHealth | null | undefined>,
		agentVersion: FormControl<string | null | undefined>,
		operatingSystem: FormControl<string | null | undefined>,
		kernelVersion: FormControl<string | null | undefined>,
		ipv4Address: FormControl<string | null | undefined>,
	}
	export function CreateAgentPreviewFormGroup() {
		return new FormGroup<AgentPreviewFormProperties>({
			hostname: new FormControl<string | null | undefined>(undefined),
			agentId: new FormControl<string | null | undefined>(undefined),
			autoScalingGroup: new FormControl<string | null | undefined>(undefined),
			agentHealth: new FormControl<AssessmentRunAgentAgentHealth | null | undefined>(undefined),
			agentVersion: new FormControl<string | null | undefined>(undefined),
			operatingSystem: new FormControl<string | null | undefined>(undefined),
			kernelVersion: new FormControl<string | null | undefined>(undefined),
			ipv4Address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PreviewAgentsRequest {
		previewAgentsArn: string;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface PreviewAgentsRequestFormProperties {
		previewAgentsArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreatePreviewAgentsRequestFormGroup() {
		return new FormGroup<PreviewAgentsRequestFormProperties>({
			previewAgentsArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RegisterCrossAccountAccessRoleRequest {
		roleArn: string;
	}
	export interface RegisterCrossAccountAccessRoleRequestFormProperties {
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateRegisterCrossAccountAccessRoleRequestFormGroup() {
		return new FormGroup<RegisterCrossAccountAccessRoleRequestFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveAttributesFromFindingsResponse {
		failedItems: FailedItems;
	}
	export interface RemoveAttributesFromFindingsResponseFormProperties {
	}
	export function CreateRemoveAttributesFromFindingsResponseFormGroup() {
		return new FormGroup<RemoveAttributesFromFindingsResponseFormProperties>({
		});

	}

	export interface RemoveAttributesFromFindingsRequest {
		findingArns: Array<string>;
		attributeKeys: Array<string>;
	}
	export interface RemoveAttributesFromFindingsRequestFormProperties {
	}
	export function CreateRemoveAttributesFromFindingsRequestFormGroup() {
		return new FormGroup<RemoveAttributesFromFindingsRequestFormProperties>({
		});

	}

	export interface SetTagsForResourceRequest {
		resourceArn: string;
		tags?: Array<Tag>;
	}
	export interface SetTagsForResourceRequestFormProperties {
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateSetTagsForResourceRequestFormGroup() {
		return new FormGroup<SetTagsForResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartAssessmentRunResponse {
		assessmentRunArn: string;
	}
	export interface StartAssessmentRunResponseFormProperties {
		assessmentRunArn: FormControl<string | null | undefined>,
	}
	export function CreateStartAssessmentRunResponseFormGroup() {
		return new FormGroup<StartAssessmentRunResponseFormProperties>({
			assessmentRunArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartAssessmentRunRequest {
		assessmentTemplateArn: string;
		assessmentRunName?: string | null;
	}
	export interface StartAssessmentRunRequestFormProperties {
		assessmentTemplateArn: FormControl<string | null | undefined>,
		assessmentRunName: FormControl<string | null | undefined>,
	}
	export function CreateStartAssessmentRunRequestFormGroup() {
		return new FormGroup<StartAssessmentRunRequestFormProperties>({
			assessmentTemplateArn: new FormControl<string | null | undefined>(undefined),
			assessmentRunName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AgentsAlreadyRunningAssessmentException {
	}
	export interface AgentsAlreadyRunningAssessmentExceptionFormProperties {
	}
	export function CreateAgentsAlreadyRunningAssessmentExceptionFormGroup() {
		return new FormGroup<AgentsAlreadyRunningAssessmentExceptionFormProperties>({
		});

	}

	export interface StopAssessmentRunRequest {
		assessmentRunArn: string;
		stopAction?: StopAssessmentRunRequestStopAction | null;
	}
	export interface StopAssessmentRunRequestFormProperties {
		assessmentRunArn: FormControl<string | null | undefined>,
		stopAction: FormControl<StopAssessmentRunRequestStopAction | null | undefined>,
	}
	export function CreateStopAssessmentRunRequestFormGroup() {
		return new FormGroup<StopAssessmentRunRequestFormProperties>({
			assessmentRunArn: new FormControl<string | null | undefined>(undefined),
			stopAction: new FormControl<StopAssessmentRunRequestStopAction | null | undefined>(undefined),
		});

	}

	export enum StopAssessmentRunRequestStopAction { START_EVALUATION = 0, SKIP_EVALUATION = 1 }

	export interface SubscribeToEventRequest {
		resourceArn: string;
		event: AssessmentRunNotificationEvent;
		topicArn: string;
	}
	export interface SubscribeToEventRequestFormProperties {
		resourceArn: FormControl<string | null | undefined>,
		event: FormControl<AssessmentRunNotificationEvent | null | undefined>,
		topicArn: FormControl<string | null | undefined>,
	}
	export function CreateSubscribeToEventRequestFormGroup() {
		return new FormGroup<SubscribeToEventRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
			event: new FormControl<AssessmentRunNotificationEvent | null | undefined>(undefined),
			topicArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnsubscribeFromEventRequest {
		resourceArn: string;
		event: AssessmentRunNotificationEvent;
		topicArn: string;
	}
	export interface UnsubscribeFromEventRequestFormProperties {
		resourceArn: FormControl<string | null | undefined>,
		event: FormControl<AssessmentRunNotificationEvent | null | undefined>,
		topicArn: FormControl<string | null | undefined>,
	}
	export function CreateUnsubscribeFromEventRequestFormGroup() {
		return new FormGroup<UnsubscribeFromEventRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
			event: new FormControl<AssessmentRunNotificationEvent | null | undefined>(undefined),
			topicArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAssessmentTargetRequest {
		assessmentTargetArn: string;
		assessmentTargetName: string;
		resourceGroupArn?: string | null;
	}
	export interface UpdateAssessmentTargetRequestFormProperties {
		assessmentTargetArn: FormControl<string | null | undefined>,
		assessmentTargetName: FormControl<string | null | undefined>,
		resourceGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssessmentTargetRequestFormGroup() {
		return new FormGroup<UpdateAssessmentTargetRequestFormProperties>({
			assessmentTargetArn: new FormControl<string | null | undefined>(undefined),
			assessmentTargetName: new FormControl<string | null | undefined>(undefined),
			resourceGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InspectorEvent { ASSESSMENT_RUN_STARTED = 0, ASSESSMENT_RUN_COMPLETED = 1, ASSESSMENT_RUN_STATE_CHANGED = 2, FINDING_REPORTED = 3, OTHER = 4 }

	export enum AssessmentRunNotificationSnsStatusCode { SUCCESS = 0, TOPIC_DOES_NOT_EXIST = 1, ACCESS_DENIED = 2, INTERNAL_ERROR = 3 }

	export enum AssetType { ec2_instance = 0 }

	export enum Locale { EN_US = 0 }


	/** Contains information about what was excluded from an assessment run. */
	export interface Exclusion {
		arn: string;
		title: string;
		description: string;
		recommendation: string;
		scopes: Array<Scope>;
		attributes?: Array<Attribute>;
	}

	/** Contains information about what was excluded from an assessment run. */
	export interface ExclusionFormProperties {
		arn: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		recommendation: FormControl<string | null | undefined>,
	}
	export function CreateExclusionFormGroup() {
		return new FormGroup<ExclusionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			recommendation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FailedItemErrorCode { INVALID_ARN = 0, DUPLICATE_ARN = 1, ITEM_DOES_NOT_EXIST = 2, ACCESS_DENIED = 3, LIMIT_EXCEEDED = 4, INTERNAL_ERROR = 5 }


	/** Includes details about the failed items. */
	export interface FailedItemDetails {
		failureCode: FailedItemErrorCode;
		retryable: boolean;
	}

	/** Includes details about the failed items. */
	export interface FailedItemDetailsFormProperties {
		failureCode: FormControl<FailedItemErrorCode | null | undefined>,
		retryable: FormControl<boolean | null | undefined>,
	}
	export function CreateFailedItemDetailsFormGroup() {
		return new FormGroup<FailedItemDetailsFormProperties>({
			failureCode: new FormControl<FailedItemErrorCode | null | undefined>(undefined),
			retryable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ReportFileFormat { HTML = 0, PDF = 1 }

	export enum ReportType { FINDING = 0, FULL = 1 }

	export enum ReportStatus { WORK_IN_PROGRESS = 0, FAILED = 1, COMPLETED = 2 }

	export enum PreviewStatus { WORK_IN_PROGRESS = 0, COMPLETED = 1 }

	export enum ScopeType { INSTANCE_ID = 0, RULES_PACKAGE_ARN = 1 }

	export enum StopAction { START_EVALUATION = 0, SKIP_EVALUATION = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Assigns attributes (key and value pairs) to the findings that are specified by the ARNs of the findings.
		 * Post #X-Amz-Target=InspectorService.AddAttributesToFindings
		 * @return {AddAttributesToFindingsResponse} Success
		 */
		AddAttributesToFindings(requestBody: AddAttributesToFindingsRequest): Observable<AddAttributesToFindingsResponse> {
			return this.http.post<AddAttributesToFindingsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.AddAttributesToFindings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new assessment target using the ARN of the resource group that is generated by <a>CreateResourceGroup</a>. If resourceGroupArn is not specified, all EC2 instances in the current AWS account and region are included in the assessment target. If the <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html">service-linked role</a> isn’t already registered, this action also creates and registers a service-linked role to grant Amazon Inspector access to AWS Services needed to perform security assessments. You can create up to 50 assessment targets per AWS account. You can run up to 500 concurrent agents per AWS account. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html"> Amazon Inspector Assessment Targets</a>.
		 * Post #X-Amz-Target=InspectorService.CreateAssessmentTarget
		 * @return {CreateAssessmentTargetResponse} Success
		 */
		CreateAssessmentTarget(requestBody: CreateAssessmentTargetRequest): Observable<CreateAssessmentTargetResponse> {
			return this.http.post<CreateAssessmentTargetResponse>(this.baseUri + '#X-Amz-Target=InspectorService.CreateAssessmentTarget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an assessment template for the assessment target that is specified by the ARN of the assessment target. If the <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html">service-linked role</a> isn’t already registered, this action also creates and registers a service-linked role to grant Amazon Inspector access to AWS Services needed to perform security assessments.
		 * Post #X-Amz-Target=InspectorService.CreateAssessmentTemplate
		 * @return {CreateAssessmentTemplateResponse} Success
		 */
		CreateAssessmentTemplate(requestBody: CreateAssessmentTemplateRequest): Observable<CreateAssessmentTemplateResponse> {
			return this.http.post<CreateAssessmentTemplateResponse>(this.baseUri + '#X-Amz-Target=InspectorService.CreateAssessmentTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts the generation of an exclusions preview for the specified assessment template. The exclusions preview lists the potential exclusions (ExclusionPreview) that Inspector can detect before it runs the assessment.
		 * Post #X-Amz-Target=InspectorService.CreateExclusionsPreview
		 * @return {CreateExclusionsPreviewResponse} Success
		 */
		CreateExclusionsPreview(requestBody: CreateExclusionsPreviewRequest): Observable<CreateExclusionsPreviewResponse> {
			return this.http.post<CreateExclusionsPreviewResponse>(this.baseUri + '#X-Amz-Target=InspectorService.CreateExclusionsPreview', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a resource group using the specified set of tags (key and value pairs) that are used to select the EC2 instances to be included in an Amazon Inspector assessment target. The created resource group is then used to create an Amazon Inspector assessment target. For more information, see <a>CreateAssessmentTarget</a>.
		 * Post #X-Amz-Target=InspectorService.CreateResourceGroup
		 * @return {CreateResourceGroupResponse} Success
		 */
		CreateResourceGroup(requestBody: CreateResourceGroupRequest): Observable<CreateResourceGroupResponse> {
			return this.http.post<CreateResourceGroupResponse>(this.baseUri + '#X-Amz-Target=InspectorService.CreateResourceGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the assessment run that is specified by the ARN of the assessment run.
		 * Post #X-Amz-Target=InspectorService.DeleteAssessmentRun
		 * @return {void} Success
		 */
		DeleteAssessmentRun(requestBody: DeleteAssessmentRunRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=InspectorService.DeleteAssessmentRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the assessment target that is specified by the ARN of the assessment target.
		 * Post #X-Amz-Target=InspectorService.DeleteAssessmentTarget
		 * @return {void} Success
		 */
		DeleteAssessmentTarget(requestBody: DeleteAssessmentTargetRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=InspectorService.DeleteAssessmentTarget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the assessment template that is specified by the ARN of the assessment template.
		 * Post #X-Amz-Target=InspectorService.DeleteAssessmentTemplate
		 * @return {void} Success
		 */
		DeleteAssessmentTemplate(requestBody: DeleteAssessmentTemplateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=InspectorService.DeleteAssessmentTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the assessment runs that are specified by the ARNs of the assessment runs.
		 * Post #X-Amz-Target=InspectorService.DescribeAssessmentRuns
		 * @return {DescribeAssessmentRunsResponse} Success
		 */
		DescribeAssessmentRuns(requestBody: DescribeAssessmentRunsRequest): Observable<DescribeAssessmentRunsResponse> {
			return this.http.post<DescribeAssessmentRunsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.DescribeAssessmentRuns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the assessment targets that are specified by the ARNs of the assessment targets.
		 * Post #X-Amz-Target=InspectorService.DescribeAssessmentTargets
		 * @return {DescribeAssessmentTargetsResponse} Success
		 */
		DescribeAssessmentTargets(requestBody: DescribeAssessmentTargetsRequest): Observable<DescribeAssessmentTargetsResponse> {
			return this.http.post<DescribeAssessmentTargetsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.DescribeAssessmentTargets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the assessment templates that are specified by the ARNs of the assessment templates.
		 * Post #X-Amz-Target=InspectorService.DescribeAssessmentTemplates
		 * @return {DescribeAssessmentTemplatesResponse} Success
		 */
		DescribeAssessmentTemplates(requestBody: DescribeAssessmentTemplatesRequest): Observable<DescribeAssessmentTemplatesResponse> {
			return this.http.post<DescribeAssessmentTemplatesResponse>(this.baseUri + '#X-Amz-Target=InspectorService.DescribeAssessmentTemplates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the IAM role that enables Amazon Inspector to access your AWS account.
		 * Post #X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole
		 * @return {DescribeCrossAccountAccessRoleResponse} Success
		 */
		DescribeCrossAccountAccessRole(): Observable<DescribeCrossAccountAccessRoleResponse> {
			return this.http.post<DescribeCrossAccountAccessRoleResponse>(this.baseUri + '#X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole', null, {});
		}

		/**
		 * Describes the exclusions that are specified by the exclusions' ARNs.
		 * Post #X-Amz-Target=InspectorService.DescribeExclusions
		 * @return {DescribeExclusionsResponse} Success
		 */
		DescribeExclusions(requestBody: DescribeExclusionsRequest): Observable<DescribeExclusionsResponse> {
			return this.http.post<DescribeExclusionsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.DescribeExclusions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the findings that are specified by the ARNs of the findings.
		 * Post #X-Amz-Target=InspectorService.DescribeFindings
		 * @return {DescribeFindingsResponse} Success
		 */
		DescribeFindings(requestBody: DescribeFindingsRequest): Observable<DescribeFindingsResponse> {
			return this.http.post<DescribeFindingsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.DescribeFindings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the resource groups that are specified by the ARNs of the resource groups.
		 * Post #X-Amz-Target=InspectorService.DescribeResourceGroups
		 * @return {DescribeResourceGroupsResponse} Success
		 */
		DescribeResourceGroups(requestBody: DescribeResourceGroupsRequest): Observable<DescribeResourceGroupsResponse> {
			return this.http.post<DescribeResourceGroupsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.DescribeResourceGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the rules packages that are specified by the ARNs of the rules packages.
		 * Post #X-Amz-Target=InspectorService.DescribeRulesPackages
		 * @return {DescribeRulesPackagesResponse} Success
		 */
		DescribeRulesPackages(requestBody: DescribeRulesPackagesRequest): Observable<DescribeRulesPackagesResponse> {
			return this.http.post<DescribeRulesPackagesResponse>(this.baseUri + '#X-Amz-Target=InspectorService.DescribeRulesPackages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Produces an assessment report that includes detailed and comprehensive results of a specified assessment run.
		 * Post #X-Amz-Target=InspectorService.GetAssessmentReport
		 * @return {GetAssessmentReportResponse} Success
		 */
		GetAssessmentReport(requestBody: GetAssessmentReportRequest): Observable<GetAssessmentReportResponse> {
			return this.http.post<GetAssessmentReportResponse>(this.baseUri + '#X-Amz-Target=InspectorService.GetAssessmentReport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the exclusions preview (a list of ExclusionPreview objects) specified by the preview token. You can obtain the preview token by running the CreateExclusionsPreview API.
		 * Post #X-Amz-Target=InspectorService.GetExclusionsPreview
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetExclusionsPreviewResponse} Success
		 */
		GetExclusionsPreview(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetExclusionsPreviewRequest): Observable<GetExclusionsPreviewResponse> {
			return this.http.post<GetExclusionsPreviewResponse>(this.baseUri + '#X-Amz-Target=InspectorService.GetExclusionsPreview?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Information about the data that is collected for the specified assessment run.
		 * Post #X-Amz-Target=InspectorService.GetTelemetryMetadata
		 * @return {GetTelemetryMetadataResponse} Success
		 */
		GetTelemetryMetadata(requestBody: GetTelemetryMetadataRequest): Observable<GetTelemetryMetadataResponse> {
			return this.http.post<GetTelemetryMetadataResponse>(this.baseUri + '#X-Amz-Target=InspectorService.GetTelemetryMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the agents of the assessment runs that are specified by the ARNs of the assessment runs.
		 * Post #X-Amz-Target=InspectorService.ListAssessmentRunAgents
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAssessmentRunAgentsResponse} Success
		 */
		ListAssessmentRunAgents(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAssessmentRunAgentsRequest): Observable<ListAssessmentRunAgentsResponse> {
			return this.http.post<ListAssessmentRunAgentsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.ListAssessmentRunAgents?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the assessment runs that correspond to the assessment templates that are specified by the ARNs of the assessment templates.
		 * Post #X-Amz-Target=InspectorService.ListAssessmentRuns
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAssessmentRunsResponse} Success
		 */
		ListAssessmentRuns(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAssessmentRunsRequest): Observable<ListAssessmentRunsResponse> {
			return this.http.post<ListAssessmentRunsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.ListAssessmentRuns?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the ARNs of the assessment targets within this AWS account. For more information about assessment targets, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html">Amazon Inspector Assessment Targets</a>.
		 * Post #X-Amz-Target=InspectorService.ListAssessmentTargets
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAssessmentTargetsResponse} Success
		 */
		ListAssessmentTargets(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAssessmentTargetsRequest): Observable<ListAssessmentTargetsResponse> {
			return this.http.post<ListAssessmentTargetsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.ListAssessmentTargets?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the assessment templates that correspond to the assessment targets that are specified by the ARNs of the assessment targets.
		 * Post #X-Amz-Target=InspectorService.ListAssessmentTemplates
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAssessmentTemplatesResponse} Success
		 */
		ListAssessmentTemplates(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAssessmentTemplatesRequest): Observable<ListAssessmentTemplatesResponse> {
			return this.http.post<ListAssessmentTemplatesResponse>(this.baseUri + '#X-Amz-Target=InspectorService.ListAssessmentTemplates?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the event subscriptions for the assessment template that is specified by the ARN of the assessment template. For more information, see <a>SubscribeToEvent</a> and <a>UnsubscribeFromEvent</a>.
		 * Post #X-Amz-Target=InspectorService.ListEventSubscriptions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListEventSubscriptionsResponse} Success
		 */
		ListEventSubscriptions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListEventSubscriptionsRequest): Observable<ListEventSubscriptionsResponse> {
			return this.http.post<ListEventSubscriptionsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.ListEventSubscriptions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List exclusions that are generated by the assessment run.
		 * Post #X-Amz-Target=InspectorService.ListExclusions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListExclusionsResponse} Success
		 */
		ListExclusions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListExclusionsRequest): Observable<ListExclusionsResponse> {
			return this.http.post<ListExclusionsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.ListExclusions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists findings that are generated by the assessment runs that are specified by the ARNs of the assessment runs.
		 * Post #X-Amz-Target=InspectorService.ListFindings
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListFindingsResponse} Success
		 */
		ListFindings(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListFindingsRequest): Observable<ListFindingsResponse> {
			return this.http.post<ListFindingsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.ListFindings?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all available Amazon Inspector rules packages.
		 * Post #X-Amz-Target=InspectorService.ListRulesPackages
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListRulesPackagesResponse} Success
		 */
		ListRulesPackages(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListRulesPackagesRequest): Observable<ListRulesPackagesResponse> {
			return this.http.post<ListRulesPackagesResponse>(this.baseUri + '#X-Amz-Target=InspectorService.ListRulesPackages?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tags associated with an assessment template.
		 * Post #X-Amz-Target=InspectorService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=InspectorService.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Previews the agents installed on the EC2 instances that are part of the specified assessment target.
		 * Post #X-Amz-Target=InspectorService.PreviewAgents
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {PreviewAgentsResponse} Success
		 */
		PreviewAgents(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: PreviewAgentsRequest): Observable<PreviewAgentsResponse> {
			return this.http.post<PreviewAgentsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.PreviewAgents?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers the IAM role that grants Amazon Inspector access to AWS Services needed to perform security assessments.
		 * Post #X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole
		 * @return {void} Success
		 */
		RegisterCrossAccountAccessRole(requestBody: RegisterCrossAccountAccessRoleRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes entire attributes (key and value pairs) from the findings that are specified by the ARNs of the findings where an attribute with the specified key exists.
		 * Post #X-Amz-Target=InspectorService.RemoveAttributesFromFindings
		 * @return {RemoveAttributesFromFindingsResponse} Success
		 */
		RemoveAttributesFromFindings(requestBody: RemoveAttributesFromFindingsRequest): Observable<RemoveAttributesFromFindingsResponse> {
			return this.http.post<RemoveAttributesFromFindingsResponse>(this.baseUri + '#X-Amz-Target=InspectorService.RemoveAttributesFromFindings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets tags (key and value pairs) to the assessment template that is specified by the ARN of the assessment template.
		 * Post #X-Amz-Target=InspectorService.SetTagsForResource
		 * @return {void} Success
		 */
		SetTagsForResource(requestBody: SetTagsForResourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=InspectorService.SetTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts the assessment run specified by the ARN of the assessment template. For this API to function properly, you must not exceed the limit of running up to 500 concurrent agents per AWS account.
		 * Post #X-Amz-Target=InspectorService.StartAssessmentRun
		 * @return {StartAssessmentRunResponse} Success
		 */
		StartAssessmentRun(requestBody: StartAssessmentRunRequest): Observable<StartAssessmentRunResponse> {
			return this.http.post<StartAssessmentRunResponse>(this.baseUri + '#X-Amz-Target=InspectorService.StartAssessmentRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops the assessment run that is specified by the ARN of the assessment run.
		 * Post #X-Amz-Target=InspectorService.StopAssessmentRun
		 * @return {void} Success
		 */
		StopAssessmentRun(requestBody: StopAssessmentRunRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=InspectorService.StopAssessmentRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.
		 * Post #X-Amz-Target=InspectorService.SubscribeToEvent
		 * @return {void} Success
		 */
		SubscribeToEvent(requestBody: SubscribeToEventRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=InspectorService.SubscribeToEvent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.
		 * Post #X-Amz-Target=InspectorService.UnsubscribeFromEvent
		 * @return {void} Success
		 */
		UnsubscribeFromEvent(requestBody: UnsubscribeFromEventRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=InspectorService.UnsubscribeFromEvent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the assessment target that is specified by the ARN of the assessment target.</p> <p>If resourceGroupArn is not specified, all EC2 instances in the current AWS account and region are included in the assessment target.</p>
		 * Post #X-Amz-Target=InspectorService.UpdateAssessmentTarget
		 * @return {void} Success
		 */
		UpdateAssessmentTarget(requestBody: UpdateAssessmentTargetRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=InspectorService.UpdateAssessmentTarget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum AddAttributesToFindingsX_Amz_Target { InspectorService_AddAttributesToFindings = 0 }

	export enum CreateAssessmentTargetX_Amz_Target { InspectorService_CreateAssessmentTarget = 0 }

	export enum CreateAssessmentTemplateX_Amz_Target { InspectorService_CreateAssessmentTemplate = 0 }

	export enum CreateExclusionsPreviewX_Amz_Target { InspectorService_CreateExclusionsPreview = 0 }

	export enum CreateResourceGroupX_Amz_Target { InspectorService_CreateResourceGroup = 0 }

	export enum DeleteAssessmentRunX_Amz_Target { InspectorService_DeleteAssessmentRun = 0 }

	export enum DeleteAssessmentTargetX_Amz_Target { InspectorService_DeleteAssessmentTarget = 0 }

	export enum DeleteAssessmentTemplateX_Amz_Target { InspectorService_DeleteAssessmentTemplate = 0 }

	export enum DescribeAssessmentRunsX_Amz_Target { InspectorService_DescribeAssessmentRuns = 0 }

	export enum DescribeAssessmentTargetsX_Amz_Target { InspectorService_DescribeAssessmentTargets = 0 }

	export enum DescribeAssessmentTemplatesX_Amz_Target { InspectorService_DescribeAssessmentTemplates = 0 }

	export enum DescribeCrossAccountAccessRoleX_Amz_Target { InspectorService_DescribeCrossAccountAccessRole = 0 }

	export enum DescribeExclusionsX_Amz_Target { InspectorService_DescribeExclusions = 0 }

	export enum DescribeFindingsX_Amz_Target { InspectorService_DescribeFindings = 0 }

	export enum DescribeResourceGroupsX_Amz_Target { InspectorService_DescribeResourceGroups = 0 }

	export enum DescribeRulesPackagesX_Amz_Target { InspectorService_DescribeRulesPackages = 0 }

	export enum GetAssessmentReportX_Amz_Target { InspectorService_GetAssessmentReport = 0 }

	export enum GetExclusionsPreviewX_Amz_Target { InspectorService_GetExclusionsPreview = 0 }

	export enum GetTelemetryMetadataX_Amz_Target { InspectorService_GetTelemetryMetadata = 0 }

	export enum ListAssessmentRunAgentsX_Amz_Target { InspectorService_ListAssessmentRunAgents = 0 }

	export enum ListAssessmentRunsX_Amz_Target { InspectorService_ListAssessmentRuns = 0 }

	export enum ListAssessmentTargetsX_Amz_Target { InspectorService_ListAssessmentTargets = 0 }

	export enum ListAssessmentTemplatesX_Amz_Target { InspectorService_ListAssessmentTemplates = 0 }

	export enum ListEventSubscriptionsX_Amz_Target { InspectorService_ListEventSubscriptions = 0 }

	export enum ListExclusionsX_Amz_Target { InspectorService_ListExclusions = 0 }

	export enum ListFindingsX_Amz_Target { InspectorService_ListFindings = 0 }

	export enum ListRulesPackagesX_Amz_Target { InspectorService_ListRulesPackages = 0 }

	export enum ListTagsForResourceX_Amz_Target { InspectorService_ListTagsForResource = 0 }

	export enum PreviewAgentsX_Amz_Target { InspectorService_PreviewAgents = 0 }

	export enum RegisterCrossAccountAccessRoleX_Amz_Target { InspectorService_RegisterCrossAccountAccessRole = 0 }

	export enum RemoveAttributesFromFindingsX_Amz_Target { InspectorService_RemoveAttributesFromFindings = 0 }

	export enum SetTagsForResourceX_Amz_Target { InspectorService_SetTagsForResource = 0 }

	export enum StartAssessmentRunX_Amz_Target { InspectorService_StartAssessmentRun = 0 }

	export enum StopAssessmentRunX_Amz_Target { InspectorService_StopAssessmentRun = 0 }

	export enum SubscribeToEventX_Amz_Target { InspectorService_SubscribeToEvent = 0 }

	export enum UnsubscribeFromEventX_Amz_Target { InspectorService_UnsubscribeFromEvent = 0 }

	export enum UpdateAssessmentTargetX_Amz_Target { InspectorService_UpdateAssessmentTarget = 0 }

}

