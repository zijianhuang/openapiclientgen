import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddAttributesToFindingsResponse {

		/** Required */
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

		/** Required */
		findingArns: Array<string>;

		/** Required */
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

		/** Required */
		key: string;
		value?: string;
	}

	/** This data type is used as a request parameter in the <a>AddAttributesToFindings</a> and <a>CreateAssessmentTemplate</a> actions. */
	export interface AttributeFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateAttributeFormGroup() {
		return new FormGroup<AttributeFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		assessmentTargetArn: string;
	}
	export interface CreateAssessmentTargetResponseFormProperties {

		/** Required */
		assessmentTargetArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssessmentTargetResponseFormGroup() {
		return new FormGroup<CreateAssessmentTargetResponseFormProperties>({
			assessmentTargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAssessmentTargetRequest {

		/** Required */
		assessmentTargetName: string;
		resourceGroupArn?: string;
	}
	export interface CreateAssessmentTargetRequestFormProperties {

		/** Required */
		assessmentTargetName: FormControl<string | null | undefined>,
		resourceGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssessmentTargetRequestFormGroup() {
		return new FormGroup<CreateAssessmentTargetRequestFormProperties>({
			assessmentTargetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		assessmentTemplateArn: string;
	}
	export interface CreateAssessmentTemplateResponseFormProperties {

		/** Required */
		assessmentTemplateArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssessmentTemplateResponseFormGroup() {
		return new FormGroup<CreateAssessmentTemplateResponseFormProperties>({
			assessmentTemplateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAssessmentTemplateRequest {

		/** Required */
		assessmentTargetArn: string;

		/** Required */
		assessmentTemplateName: string;

		/** Required */
		durationInSeconds: number;

		/** Required */
		rulesPackageArns: Array<string>;
		userAttributesForFindings?: Array<Attribute>;
	}
	export interface CreateAssessmentTemplateRequestFormProperties {

		/** Required */
		assessmentTargetArn: FormControl<string | null | undefined>,

		/** Required */
		assessmentTemplateName: FormControl<string | null | undefined>,

		/** Required */
		durationInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateAssessmentTemplateRequestFormGroup() {
		return new FormGroup<CreateAssessmentTemplateRequestFormProperties>({
			assessmentTargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assessmentTemplateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			durationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateExclusionsPreviewResponse {

		/** Required */
		previewToken: string;
	}
	export interface CreateExclusionsPreviewResponseFormProperties {

		/** Required */
		previewToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateExclusionsPreviewResponseFormGroup() {
		return new FormGroup<CreateExclusionsPreviewResponseFormProperties>({
			previewToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateExclusionsPreviewRequest {

		/** Required */
		assessmentTemplateArn: string;
	}
	export interface CreateExclusionsPreviewRequestFormProperties {

		/** Required */
		assessmentTemplateArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateExclusionsPreviewRequestFormGroup() {
		return new FormGroup<CreateExclusionsPreviewRequestFormProperties>({
			assessmentTemplateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		resourceGroupArn: string;
	}
	export interface CreateResourceGroupResponseFormProperties {

		/** Required */
		resourceGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourceGroupResponseFormGroup() {
		return new FormGroup<CreateResourceGroupResponseFormProperties>({
			resourceGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateResourceGroupRequest {

		/** Required */
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

		/** Required */
		key: string;
		value?: string;
	}

	/** This data type is used as one of the elements of the <a>ResourceGroup</a> data type. */
	export interface ResourceGroupTagFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateResourceGroupTagFormGroup() {
		return new FormGroup<ResourceGroupTagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAssessmentRunRequest {

		/** Required */
		assessmentRunArn: string;
	}
	export interface DeleteAssessmentRunRequestFormProperties {

		/** Required */
		assessmentRunArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAssessmentRunRequestFormGroup() {
		return new FormGroup<DeleteAssessmentRunRequestFormProperties>({
			assessmentRunArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		assessmentTargetArn: string;
	}
	export interface DeleteAssessmentTargetRequestFormProperties {

		/** Required */
		assessmentTargetArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAssessmentTargetRequestFormGroup() {
		return new FormGroup<DeleteAssessmentTargetRequestFormProperties>({
			assessmentTargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAssessmentTemplateRequest {

		/** Required */
		assessmentTemplateArn: string;
	}
	export interface DeleteAssessmentTemplateRequestFormProperties {

		/** Required */
		assessmentTemplateArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAssessmentTemplateRequestFormGroup() {
		return new FormGroup<DeleteAssessmentTemplateRequestFormProperties>({
			assessmentTemplateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAssessmentRunsResponse {

		/** Required */
		assessmentRuns: Array<AssessmentRun>;

		/** Required */
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

		/** Required */
		arn: string;

		/** Required */
		name: string;

		/** Required */
		assessmentTemplateArn: string;

		/** Required */
		state: AssessmentRunState;

		/** Required */
		durationInSeconds: number;

		/** Required */
		rulesPackageArns: Array<string>;

		/** Required */
		userAttributesForFindings: Array<Attribute>;

		/** Required */
		createdAt: Date;
		startedAt?: Date;
		completedAt?: Date;

		/** Required */
		stateChangedAt: Date;

		/** Required */
		dataCollected: boolean;

		/** Required */
		stateChanges: Array<AssessmentRunStateChange>;

		/** Required */
		notifications: Array<AssessmentRunNotification>;

		/** Required */
		findingCounts: AssessmentRunFindingCounts;
	}

	/** <p>A snapshot of an Amazon Inspector assessment run that contains the findings of the assessment run .</p> <p>Used as the response element in the <a>DescribeAssessmentRuns</a> action.</p> */
	export interface AssessmentRunFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		assessmentTemplateArn: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<AssessmentRunState | null | undefined>,

		/** Required */
		durationInSeconds: FormControl<number | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		startedAt: FormControl<Date | null | undefined>,
		completedAt: FormControl<Date | null | undefined>,

		/** Required */
		stateChangedAt: FormControl<Date | null | undefined>,

		/** Required */
		dataCollected: FormControl<boolean | null | undefined>,
	}
	export function CreateAssessmentRunFormGroup() {
		return new FormGroup<AssessmentRunFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assessmentTemplateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<AssessmentRunState | null | undefined>(undefined, [Validators.required]),
			durationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			startedAt: new FormControl<Date | null | undefined>(undefined),
			completedAt: new FormControl<Date | null | undefined>(undefined),
			stateChangedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			dataCollected: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AssessmentRunState { CREATED = 'CREATED', START_DATA_COLLECTION_PENDING = 'START_DATA_COLLECTION_PENDING', START_DATA_COLLECTION_IN_PROGRESS = 'START_DATA_COLLECTION_IN_PROGRESS', COLLECTING_DATA = 'COLLECTING_DATA', STOP_DATA_COLLECTION_PENDING = 'STOP_DATA_COLLECTION_PENDING', DATA_COLLECTED = 'DATA_COLLECTED', START_EVALUATING_RULES_PENDING = 'START_EVALUATING_RULES_PENDING', EVALUATING_RULES = 'EVALUATING_RULES', FAILED = 'FAILED', ERROR = 'ERROR', COMPLETED = 'COMPLETED', COMPLETED_WITH_ERRORS = 'COMPLETED_WITH_ERRORS', CANCELED = 'CANCELED' }


	/** Used as one of the elements of the <a>AssessmentRun</a> data type. */
	export interface AssessmentRunStateChange {

		/** Required */
		stateChangedAt: Date;

		/** Required */
		state: AssessmentRunState;
	}

	/** Used as one of the elements of the <a>AssessmentRun</a> data type. */
	export interface AssessmentRunStateChangeFormProperties {

		/** Required */
		stateChangedAt: FormControl<Date | null | undefined>,

		/** Required */
		state: FormControl<AssessmentRunState | null | undefined>,
	}
	export function CreateAssessmentRunStateChangeFormGroup() {
		return new FormGroup<AssessmentRunStateChangeFormProperties>({
			stateChangedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<AssessmentRunState | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Used as one of the elements of the <a>AssessmentRun</a> data type. */
	export interface AssessmentRunNotification {

		/** Required */
		date: Date;

		/** Required */
		event: InspectorEvent;
		message?: string;

		/** Required */
		error: boolean;
		snsTopicArn?: string;
		snsPublishStatusCode?: AssessmentRunNotificationSnsStatusCode;
	}

	/** Used as one of the elements of the <a>AssessmentRun</a> data type. */
	export interface AssessmentRunNotificationFormProperties {

		/** Required */
		date: FormControl<Date | null | undefined>,

		/** Required */
		event: FormControl<InspectorEvent | null | undefined>,
		message: FormControl<string | null | undefined>,

		/** Required */
		error: FormControl<boolean | null | undefined>,
		snsTopicArn: FormControl<string | null | undefined>,
		snsPublishStatusCode: FormControl<AssessmentRunNotificationSnsStatusCode | null | undefined>,
	}
	export function CreateAssessmentRunNotificationFormGroup() {
		return new FormGroup<AssessmentRunNotificationFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			event: new FormControl<InspectorEvent | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			snsTopicArn: new FormControl<string | null | undefined>(undefined),
			snsPublishStatusCode: new FormControl<AssessmentRunNotificationSnsStatusCode | null | undefined>(undefined),
		});

	}

	export enum InspectorEvent { ASSESSMENT_RUN_STARTED = 'ASSESSMENT_RUN_STARTED', ASSESSMENT_RUN_COMPLETED = 'ASSESSMENT_RUN_COMPLETED', ASSESSMENT_RUN_STATE_CHANGED = 'ASSESSMENT_RUN_STATE_CHANGED', FINDING_REPORTED = 'FINDING_REPORTED', OTHER = 'OTHER' }

	export enum AssessmentRunNotificationSnsStatusCode { SUCCESS = 'SUCCESS', TOPIC_DOES_NOT_EXIST = 'TOPIC_DOES_NOT_EXIST', ACCESS_DENIED = 'ACCESS_DENIED', INTERNAL_ERROR = 'INTERNAL_ERROR' }

	export interface AssessmentRunFindingCounts {
	}
	export interface AssessmentRunFindingCountsFormProperties {
	}
	export function CreateAssessmentRunFindingCountsFormGroup() {
		return new FormGroup<AssessmentRunFindingCountsFormProperties>({
		});

	}

	export interface DescribeAssessmentRunsRequest {

		/** Required */
		assessmentRunArns: Array<string>;
	}
	export interface DescribeAssessmentRunsRequestFormProperties {
	}
	export function CreateDescribeAssessmentRunsRequestFormGroup() {
		return new FormGroup<DescribeAssessmentRunsRequestFormProperties>({
		});

	}

	export interface DescribeAssessmentTargetsResponse {

		/** Required */
		assessmentTargets: Array<AssessmentTarget>;

		/** Required */
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

		/** Required */
		arn: string;

		/** Required */
		name: string;
		resourceGroupArn?: string;

		/** Required */
		createdAt: Date;

		/** Required */
		updatedAt: Date;
	}

	/** Contains information about an Amazon Inspector application. This data type is used as the response element in the <a>DescribeAssessmentTargets</a> action. */
	export interface AssessmentTargetFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		resourceGroupArn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateAssessmentTargetFormGroup() {
		return new FormGroup<AssessmentTargetFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceGroupArn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAssessmentTargetsRequest {

		/** Required */
		assessmentTargetArns: Array<string>;
	}
	export interface DescribeAssessmentTargetsRequestFormProperties {
	}
	export function CreateDescribeAssessmentTargetsRequestFormGroup() {
		return new FormGroup<DescribeAssessmentTargetsRequestFormProperties>({
		});

	}

	export interface DescribeAssessmentTemplatesResponse {

		/** Required */
		assessmentTemplates: Array<AssessmentTemplate>;

		/** Required */
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

		/** Required */
		arn: string;

		/** Required */
		name: string;

		/** Required */
		assessmentTargetArn: string;

		/** Required */
		durationInSeconds: number;

		/** Required */
		rulesPackageArns: Array<string>;

		/** Required */
		userAttributesForFindings: Array<Attribute>;
		lastAssessmentRunArn?: string;

		/** Required */
		assessmentRunCount: number;

		/** Required */
		createdAt: Date;
	}

	/** Contains information about an Amazon Inspector assessment template. This data type is used as the response element in the <a>DescribeAssessmentTemplates</a> action. */
	export interface AssessmentTemplateFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		assessmentTargetArn: FormControl<string | null | undefined>,

		/** Required */
		durationInSeconds: FormControl<number | null | undefined>,
		lastAssessmentRunArn: FormControl<string | null | undefined>,

		/** Required */
		assessmentRunCount: FormControl<number | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateAssessmentTemplateFormGroup() {
		return new FormGroup<AssessmentTemplateFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assessmentTargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			durationInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lastAssessmentRunArn: new FormControl<string | null | undefined>(undefined),
			assessmentRunCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAssessmentTemplatesRequest {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		assessmentTemplateArns: Array<string>;
	}
	export interface DescribeAssessmentTemplatesRequestFormProperties {
	}
	export function CreateDescribeAssessmentTemplatesRequestFormGroup() {
		return new FormGroup<DescribeAssessmentTemplatesRequestFormProperties>({
		});

	}

	export interface DescribeCrossAccountAccessRoleResponse {

		/** Required */
		roleArn: string;

		/** Required */
		valid: boolean;

		/** Required */
		registeredAt: Date;
	}
	export interface DescribeCrossAccountAccessRoleResponseFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		valid: FormControl<boolean | null | undefined>,

		/** Required */
		registeredAt: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeCrossAccountAccessRoleResponseFormGroup() {
		return new FormGroup<DescribeCrossAccountAccessRoleResponseFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			valid: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			registeredAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeExclusionsResponse {

		/** Required */
		exclusions: ExclusionMap;

		/** Required */
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

		/** Required */
		exclusionArns: Array<string>;
		locale?: Locale;
	}
	export interface DescribeExclusionsRequestFormProperties {
		locale: FormControl<Locale | null | undefined>,
	}
	export function CreateDescribeExclusionsRequestFormGroup() {
		return new FormGroup<DescribeExclusionsRequestFormProperties>({
			locale: new FormControl<Locale | null | undefined>(undefined),
		});

	}

	export enum Locale { EN_US = 'EN_US' }

	export interface DescribeFindingsResponse {

		/** Required */
		findings: Array<Finding>;

		/** Required */
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

		/** Required */
		arn: string;
		schemaVersion?: number | null;
		service?: string;
		serviceAttributes?: InspectorServiceAttributes;
		assetType?: AssetType;
		assetAttributes?: AssetAttributes;
		id?: string;
		title?: string;
		description?: string;
		recommendation?: string;
		severity?: Severity;
		numericSeverity?: number | null;
		confidence?: number | null;
		indicatorOfCompromise?: boolean | null;

		/** Required */
		attributes: Array<Attribute>;

		/** Required */
		userAttributes: Array<Attribute>;

		/** Required */
		createdAt: Date;

		/** Required */
		updatedAt: Date;
	}

	/** Contains information about an Amazon Inspector finding. This data type is used as the response element in the <a>DescribeFindings</a> action. */
	export interface FindingFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
		schemaVersion: FormControl<number | null | undefined>,
		service: FormControl<string | null | undefined>,
		assetType: FormControl<AssetType | null | undefined>,
		id: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		recommendation: FormControl<string | null | undefined>,
		severity: FormControl<Severity | null | undefined>,
		numericSeverity: FormControl<number | null | undefined>,
		confidence: FormControl<number | null | undefined>,
		indicatorOfCompromise: FormControl<boolean | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateFindingFormGroup() {
		return new FormGroup<FindingFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schemaVersion: new FormControl<number | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
			assetType: new FormControl<AssetType | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			recommendation: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<Severity | null | undefined>(undefined),
			numericSeverity: new FormControl<number | null | undefined>(undefined),
			confidence: new FormControl<number | null | undefined>(undefined),
			indicatorOfCompromise: new FormControl<boolean | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This data type is used in the <a>Finding</a> data type. */
	export interface InspectorServiceAttributes {

		/** Required */
		schemaVersion: number;
		assessmentRunArn?: string;
		rulesPackageArn?: string;
	}

	/** This data type is used in the <a>Finding</a> data type. */
	export interface InspectorServiceAttributesFormProperties {

		/** Required */
		schemaVersion: FormControl<number | null | undefined>,
		assessmentRunArn: FormControl<string | null | undefined>,
		rulesPackageArn: FormControl<string | null | undefined>,
	}
	export function CreateInspectorServiceAttributesFormGroup() {
		return new FormGroup<InspectorServiceAttributesFormProperties>({
			schemaVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			assessmentRunArn: new FormControl<string | null | undefined>(undefined),
			rulesPackageArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssetType { 'ec2-instance' = 'ec2-instance' }


	/** A collection of attributes of the host from which the finding is generated. */
	export interface AssetAttributes {

		/** Required */
		schemaVersion: number;
		agentId?: string;
		autoScalingGroup?: string;
		amiId?: string;
		hostname?: string;
		ipv4Addresses?: Array<string>;
		tags?: Array<Tag>;
		networkInterfaces?: Array<NetworkInterface>;
	}

	/** A collection of attributes of the host from which the finding is generated. */
	export interface AssetAttributesFormProperties {

		/** Required */
		schemaVersion: FormControl<number | null | undefined>,
		agentId: FormControl<string | null | undefined>,
		autoScalingGroup: FormControl<string | null | undefined>,
		amiId: FormControl<string | null | undefined>,
		hostname: FormControl<string | null | undefined>,
	}
	export function CreateAssetAttributesFormGroup() {
		return new FormGroup<AssetAttributesFormProperties>({
			schemaVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			agentId: new FormControl<string | null | undefined>(undefined),
			autoScalingGroup: new FormControl<string | null | undefined>(undefined),
			amiId: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A key and value pair. This data type is used as a request parameter in the <a>SetTagsForResource</a> action and a response element in the <a>ListTagsForResource</a> action. */
	export interface Tag {

		/** Required */
		key: string;
		value?: string;
	}

	/** A key and value pair. This data type is used as a request parameter in the <a>SetTagsForResource</a> action and a response element in the <a>ListTagsForResource</a> action. */
	export interface TagFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the network interfaces interacting with an EC2 instance. This data type is used as one of the elements of the <a>AssetAttributes</a> data type. */
	export interface NetworkInterface {
		networkInterfaceId?: string;
		subnetId?: string;
		vpcId?: string;
		privateDnsName?: string;
		privateIpAddress?: string;
		privateIpAddresses?: Array<PrivateIp>;
		publicDnsName?: string;
		publicIp?: string;
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
		privateDnsName?: string;
		privateIpAddress?: string;
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
		groupName?: string;
		groupId?: string;
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

	export enum Severity { Low = 'Low', Medium = 'Medium', High = 'High', Informational = 'Informational', Undefined = 'Undefined' }

	export interface DescribeFindingsRequest {

		/** Required */
		findingArns: Array<string>;
		locale?: Locale;
	}
	export interface DescribeFindingsRequestFormProperties {
		locale: FormControl<Locale | null | undefined>,
	}
	export function CreateDescribeFindingsRequestFormGroup() {
		return new FormGroup<DescribeFindingsRequestFormProperties>({
			locale: new FormControl<Locale | null | undefined>(undefined),
		});

	}

	export interface DescribeResourceGroupsResponse {

		/** Required */
		resourceGroups: Array<ResourceGroup>;

		/** Required */
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

		/** Required */
		arn: string;

		/** Required */
		tags: Array<ResourceGroupTag>;

		/** Required */
		createdAt: Date;
	}

	/** Contains information about a resource group. The resource group defines a set of tags that, when queried, identify the AWS resources that make up the assessment target. This data type is used as the response element in the <a>DescribeResourceGroups</a> action. */
	export interface ResourceGroupFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateResourceGroupFormGroup() {
		return new FormGroup<ResourceGroupFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeResourceGroupsRequest {

		/** Required */
		resourceGroupArns: Array<string>;
	}
	export interface DescribeResourceGroupsRequestFormProperties {
	}
	export function CreateDescribeResourceGroupsRequestFormGroup() {
		return new FormGroup<DescribeResourceGroupsRequestFormProperties>({
		});

	}

	export interface DescribeRulesPackagesResponse {

		/** Required */
		rulesPackages: Array<RulesPackage>;

		/** Required */
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

		/** Required */
		arn: string;

		/** Required */
		name: string;

		/** Required */
		version: string;

		/** Required */
		provider: string;
		description?: string;
	}

	/** Contains information about an Amazon Inspector rules package. This data type is used as the response element in the <a>DescribeRulesPackages</a> action. */
	export interface RulesPackageFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,

		/** Required */
		provider: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateRulesPackageFormGroup() {
		return new FormGroup<RulesPackageFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRulesPackagesRequest {

		/** Required */
		rulesPackageArns: Array<string>;
		locale?: Locale;
	}
	export interface DescribeRulesPackagesRequestFormProperties {
		locale: FormControl<Locale | null | undefined>,
	}
	export function CreateDescribeRulesPackagesRequestFormGroup() {
		return new FormGroup<DescribeRulesPackagesRequestFormProperties>({
			locale: new FormControl<Locale | null | undefined>(undefined),
		});

	}

	export interface GetAssessmentReportResponse {

		/** Required */
		status: ReportStatus;
		url?: string;
	}
	export interface GetAssessmentReportResponseFormProperties {

		/** Required */
		status: FormControl<ReportStatus | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateGetAssessmentReportResponseFormGroup() {
		return new FormGroup<GetAssessmentReportResponseFormProperties>({
			status: new FormControl<ReportStatus | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReportStatus { WORK_IN_PROGRESS = 'WORK_IN_PROGRESS', FAILED = 'FAILED', COMPLETED = 'COMPLETED' }

	export interface GetAssessmentReportRequest {

		/** Required */
		assessmentRunArn: string;

		/** Required */
		reportFileFormat: ReportFileFormat;

		/** Required */
		reportType: ReportType;
	}
	export interface GetAssessmentReportRequestFormProperties {

		/** Required */
		assessmentRunArn: FormControl<string | null | undefined>,

		/** Required */
		reportFileFormat: FormControl<ReportFileFormat | null | undefined>,

		/** Required */
		reportType: FormControl<ReportType | null | undefined>,
	}
	export function CreateGetAssessmentReportRequestFormGroup() {
		return new FormGroup<GetAssessmentReportRequestFormProperties>({
			assessmentRunArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reportFileFormat: new FormControl<ReportFileFormat | null | undefined>(undefined, [Validators.required]),
			reportType: new FormControl<ReportType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ReportFileFormat { HTML = 'HTML', PDF = 'PDF' }

	export enum ReportType { FINDING = 'FINDING', FULL = 'FULL' }

	export interface UnsupportedFeatureException {
	}
	export interface UnsupportedFeatureExceptionFormProperties {
	}
	export function CreateUnsupportedFeatureExceptionFormGroup() {
		return new FormGroup<UnsupportedFeatureExceptionFormProperties>({
		});

	}

	export interface GetExclusionsPreviewResponse {

		/** Required */
		previewStatus: PreviewStatus;
		exclusionPreviews?: Array<ExclusionPreview>;
		nextToken?: string;
	}
	export interface GetExclusionsPreviewResponseFormProperties {

		/** Required */
		previewStatus: FormControl<PreviewStatus | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetExclusionsPreviewResponseFormGroup() {
		return new FormGroup<GetExclusionsPreviewResponseFormProperties>({
			previewStatus: new FormControl<PreviewStatus | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PreviewStatus { WORK_IN_PROGRESS = 'WORK_IN_PROGRESS', COMPLETED = 'COMPLETED' }


	/** Contains information about what is excluded from an assessment run given the current state of the assessment template. */
	export interface ExclusionPreview {

		/** Required */
		title: string;

		/** Required */
		description: string;

		/** Required */
		recommendation: string;

		/** Required */
		scopes: Array<Scope>;
		attributes?: Array<Attribute>;
	}

	/** Contains information about what is excluded from an assessment run given the current state of the assessment template. */
	export interface ExclusionPreviewFormProperties {

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		recommendation: FormControl<string | null | undefined>,
	}
	export function CreateExclusionPreviewFormGroup() {
		return new FormGroup<ExclusionPreviewFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			recommendation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This data type contains key-value pairs that identify various Amazon resources. */
	export interface Scope {
		key?: ScopeType;
		value?: string;
	}

	/** This data type contains key-value pairs that identify various Amazon resources. */
	export interface ScopeFormProperties {
		key: FormControl<ScopeType | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateScopeFormGroup() {
		return new FormGroup<ScopeFormProperties>({
			key: new FormControl<ScopeType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScopeType { INSTANCE_ID = 'INSTANCE_ID', RULES_PACKAGE_ARN = 'RULES_PACKAGE_ARN' }

	export interface GetExclusionsPreviewRequest {

		/** Required */
		assessmentTemplateArn: string;

		/** Required */
		previewToken: string;
		nextToken?: string;
		maxResults?: number | null;
		locale?: Locale;
	}
	export interface GetExclusionsPreviewRequestFormProperties {

		/** Required */
		assessmentTemplateArn: FormControl<string | null | undefined>,

		/** Required */
		previewToken: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		locale: FormControl<Locale | null | undefined>,
	}
	export function CreateGetExclusionsPreviewRequestFormGroup() {
		return new FormGroup<GetExclusionsPreviewRequestFormProperties>({
			assessmentTemplateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			previewToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			locale: new FormControl<Locale | null | undefined>(undefined),
		});

	}

	export interface GetTelemetryMetadataResponse {

		/** Required */
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

		/** Required */
		messageType: string;

		/** Required */
		count: number;
		dataSize?: number | null;
	}

	/** The metadata about the Amazon Inspector application data metrics collected by the agent. This data type is used as the response element in the <a>GetTelemetryMetadata</a> action. */
	export interface TelemetryMetadataFormProperties {

		/** Required */
		messageType: FormControl<string | null | undefined>,

		/** Required */
		count: FormControl<number | null | undefined>,
		dataSize: FormControl<number | null | undefined>,
	}
	export function CreateTelemetryMetadataFormGroup() {
		return new FormGroup<TelemetryMetadataFormProperties>({
			messageType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dataSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTelemetryMetadataRequest {

		/** Required */
		assessmentRunArn: string;
	}
	export interface GetTelemetryMetadataRequestFormProperties {

		/** Required */
		assessmentRunArn: FormControl<string | null | undefined>,
	}
	export function CreateGetTelemetryMetadataRequestFormGroup() {
		return new FormGroup<GetTelemetryMetadataRequestFormProperties>({
			assessmentRunArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAssessmentRunAgentsResponse {

		/** Required */
		assessmentRunAgents: Array<AssessmentRunAgent>;
		nextToken?: string;
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

		/** Required */
		agentId: string;

		/** Required */
		assessmentRunArn: string;

		/** Required */
		agentHealth: AgentHealth;

		/** Required */
		agentHealthCode: AgentHealthCode;
		agentHealthDetails?: string;
		autoScalingGroup?: string;

		/** Required */
		telemetryMetadata: Array<TelemetryMetadata>;
	}

	/** Contains information about an Amazon Inspector agent. This data type is used as a response element in the <a>ListAssessmentRunAgents</a> action. */
	export interface AssessmentRunAgentFormProperties {

		/** Required */
		agentId: FormControl<string | null | undefined>,

		/** Required */
		assessmentRunArn: FormControl<string | null | undefined>,

		/** Required */
		agentHealth: FormControl<AgentHealth | null | undefined>,

		/** Required */
		agentHealthCode: FormControl<AgentHealthCode | null | undefined>,
		agentHealthDetails: FormControl<string | null | undefined>,
		autoScalingGroup: FormControl<string | null | undefined>,
	}
	export function CreateAssessmentRunAgentFormGroup() {
		return new FormGroup<AssessmentRunAgentFormProperties>({
			agentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assessmentRunArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			agentHealth: new FormControl<AgentHealth | null | undefined>(undefined, [Validators.required]),
			agentHealthCode: new FormControl<AgentHealthCode | null | undefined>(undefined, [Validators.required]),
			agentHealthDetails: new FormControl<string | null | undefined>(undefined),
			autoScalingGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AgentHealth { HEALTHY = 'HEALTHY', UNHEALTHY = 'UNHEALTHY', UNKNOWN = 'UNKNOWN' }

	export enum AgentHealthCode { IDLE = 'IDLE', RUNNING = 'RUNNING', SHUTDOWN = 'SHUTDOWN', UNHEALTHY = 'UNHEALTHY', THROTTLED = 'THROTTLED', UNKNOWN = 'UNKNOWN' }

	export interface ListAssessmentRunAgentsRequest {

		/** Required */
		assessmentRunArn: string;
		filter?: AgentFilter;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListAssessmentRunAgentsRequestFormProperties {

		/** Required */
		assessmentRunArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAssessmentRunAgentsRequestFormGroup() {
		return new FormGroup<ListAssessmentRunAgentsRequestFormProperties>({
			assessmentRunArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the <a>ListAssessmentRunAgents</a> action. */
	export interface AgentFilter {

		/** Required */
		agentHealths: Array<AgentHealth>;

		/** Required */
		agentHealthCodes: Array<AgentHealthCode>;
	}

	/** Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the <a>ListAssessmentRunAgents</a> action. */
	export interface AgentFilterFormProperties {
	}
	export function CreateAgentFilterFormGroup() {
		return new FormGroup<AgentFilterFormProperties>({
		});

	}

	export interface ListAssessmentRunsResponse {

		/** Required */
		assessmentRunArns: Array<string>;
		nextToken?: string;
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
		filter?: AssessmentRunFilter;
		nextToken?: string;
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
		namePattern?: string;
		states?: Array<AssessmentRunState>;
		durationRange?: DurationRange;
		rulesPackageArns?: Array<string>;
		startTimeRange?: TimestampRange;
		completionTimeRange?: TimestampRange;
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
		beginDate?: Date;
		endDate?: Date;
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

		/** Required */
		assessmentTargetArns: Array<string>;
		nextToken?: string;
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
		filter?: AssessmentTargetFilter;
		nextToken?: string;
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
		assessmentTargetNamePattern?: string;
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

		/** Required */
		assessmentTemplateArns: Array<string>;
		nextToken?: string;
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
		filter?: AssessmentTemplateFilter;
		nextToken?: string;
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
		namePattern?: string;
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

		/** Required */
		subscriptions: Array<Subscription>;
		nextToken?: string;
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

		/** Required */
		resourceArn: string;

		/** Required */
		topicArn: string;

		/** Required */
		eventSubscriptions: Array<EventSubscription>;
	}

	/** This data type is used as a response element in the <a>ListEventSubscriptions</a> action. */
	export interface SubscriptionFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,

		/** Required */
		topicArn: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			topicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This data type is used in the <a>Subscription</a> data type. */
	export interface EventSubscription {

		/** Required */
		event: InspectorEvent;

		/** Required */
		subscribedAt: Date;
	}

	/** This data type is used in the <a>Subscription</a> data type. */
	export interface EventSubscriptionFormProperties {

		/** Required */
		event: FormControl<InspectorEvent | null | undefined>,

		/** Required */
		subscribedAt: FormControl<Date | null | undefined>,
	}
	export function CreateEventSubscriptionFormGroup() {
		return new FormGroup<EventSubscriptionFormProperties>({
			event: new FormControl<InspectorEvent | null | undefined>(undefined, [Validators.required]),
			subscribedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListEventSubscriptionsRequest {
		resourceArn?: string;
		nextToken?: string;
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

		/** Required */
		exclusionArns: Array<string>;
		nextToken?: string;
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

		/** Required */
		assessmentRunArn: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListExclusionsRequestFormProperties {

		/** Required */
		assessmentRunArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListExclusionsRequestFormGroup() {
		return new FormGroup<ListExclusionsRequestFormProperties>({
			assessmentRunArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListFindingsResponse {

		/** Required */
		findingArns: Array<string>;
		nextToken?: string;
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
		filter?: FindingFilter;
		nextToken?: string;
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
		creationTimeRange?: TimestampRange;
	}

	/** This data type is used as a request parameter in the <a>ListFindings</a> action. */
	export interface FindingFilterFormProperties {
	}
	export function CreateFindingFilterFormGroup() {
		return new FormGroup<FindingFilterFormProperties>({
		});

	}

	export interface ListRulesPackagesResponse {

		/** Required */
		rulesPackageArns: Array<string>;
		nextToken?: string;
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
		nextToken?: string;
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

		/** Required */
		tags: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		resourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PreviewAgentsResponse {

		/** Required */
		agentPreviews: Array<AgentPreview>;
		nextToken?: string;
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
		hostname?: string;

		/** Required */
		agentId: string;
		autoScalingGroup?: string;
		agentHealth?: AgentHealth;
		agentVersion?: string;
		operatingSystem?: string;
		kernelVersion?: string;
		ipv4Address?: string;
	}

	/** Used as a response element in the <a>PreviewAgents</a> action. */
	export interface AgentPreviewFormProperties {
		hostname: FormControl<string | null | undefined>,

		/** Required */
		agentId: FormControl<string | null | undefined>,
		autoScalingGroup: FormControl<string | null | undefined>,
		agentHealth: FormControl<AgentHealth | null | undefined>,
		agentVersion: FormControl<string | null | undefined>,
		operatingSystem: FormControl<string | null | undefined>,
		kernelVersion: FormControl<string | null | undefined>,
		ipv4Address: FormControl<string | null | undefined>,
	}
	export function CreateAgentPreviewFormGroup() {
		return new FormGroup<AgentPreviewFormProperties>({
			hostname: new FormControl<string | null | undefined>(undefined),
			agentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			autoScalingGroup: new FormControl<string | null | undefined>(undefined),
			agentHealth: new FormControl<AgentHealth | null | undefined>(undefined),
			agentVersion: new FormControl<string | null | undefined>(undefined),
			operatingSystem: new FormControl<string | null | undefined>(undefined),
			kernelVersion: new FormControl<string | null | undefined>(undefined),
			ipv4Address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PreviewAgentsRequest {

		/** Required */
		previewAgentsArn: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface PreviewAgentsRequestFormProperties {

		/** Required */
		previewAgentsArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreatePreviewAgentsRequestFormGroup() {
		return new FormGroup<PreviewAgentsRequestFormProperties>({
			previewAgentsArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RegisterCrossAccountAccessRoleRequest {

		/** Required */
		roleArn: string;
	}
	export interface RegisterCrossAccountAccessRoleRequestFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateRegisterCrossAccountAccessRoleRequestFormGroup() {
		return new FormGroup<RegisterCrossAccountAccessRoleRequestFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveAttributesFromFindingsResponse {

		/** Required */
		failedItems: FailedItems;
	}
	export interface RemoveAttributesFromFindingsResponseFormProperties {
	}
	export function CreateRemoveAttributesFromFindingsResponseFormGroup() {
		return new FormGroup<RemoveAttributesFromFindingsResponseFormProperties>({
		});

	}

	export interface RemoveAttributesFromFindingsRequest {

		/** Required */
		findingArns: Array<string>;

		/** Required */
		attributeKeys: Array<string>;
	}
	export interface RemoveAttributesFromFindingsRequestFormProperties {
	}
	export function CreateRemoveAttributesFromFindingsRequestFormGroup() {
		return new FormGroup<RemoveAttributesFromFindingsRequestFormProperties>({
		});

	}

	export interface SetTagsForResourceRequest {

		/** Required */
		resourceArn: string;
		tags?: Array<Tag>;
	}
	export interface SetTagsForResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateSetTagsForResourceRequestFormGroup() {
		return new FormGroup<SetTagsForResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartAssessmentRunResponse {

		/** Required */
		assessmentRunArn: string;
	}
	export interface StartAssessmentRunResponseFormProperties {

		/** Required */
		assessmentRunArn: FormControl<string | null | undefined>,
	}
	export function CreateStartAssessmentRunResponseFormGroup() {
		return new FormGroup<StartAssessmentRunResponseFormProperties>({
			assessmentRunArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartAssessmentRunRequest {

		/** Required */
		assessmentTemplateArn: string;
		assessmentRunName?: string;
	}
	export interface StartAssessmentRunRequestFormProperties {

		/** Required */
		assessmentTemplateArn: FormControl<string | null | undefined>,
		assessmentRunName: FormControl<string | null | undefined>,
	}
	export function CreateStartAssessmentRunRequestFormGroup() {
		return new FormGroup<StartAssessmentRunRequestFormProperties>({
			assessmentTemplateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		assessmentRunArn: string;
		stopAction?: StopAction;
	}
	export interface StopAssessmentRunRequestFormProperties {

		/** Required */
		assessmentRunArn: FormControl<string | null | undefined>,
		stopAction: FormControl<StopAction | null | undefined>,
	}
	export function CreateStopAssessmentRunRequestFormGroup() {
		return new FormGroup<StopAssessmentRunRequestFormProperties>({
			assessmentRunArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stopAction: new FormControl<StopAction | null | undefined>(undefined),
		});

	}

	export enum StopAction { START_EVALUATION = 'START_EVALUATION', SKIP_EVALUATION = 'SKIP_EVALUATION' }

	export interface SubscribeToEventRequest {

		/** Required */
		resourceArn: string;

		/** Required */
		event: InspectorEvent;

		/** Required */
		topicArn: string;
	}
	export interface SubscribeToEventRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,

		/** Required */
		event: FormControl<InspectorEvent | null | undefined>,

		/** Required */
		topicArn: FormControl<string | null | undefined>,
	}
	export function CreateSubscribeToEventRequestFormGroup() {
		return new FormGroup<SubscribeToEventRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			event: new FormControl<InspectorEvent | null | undefined>(undefined, [Validators.required]),
			topicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnsubscribeFromEventRequest {

		/** Required */
		resourceArn: string;

		/** Required */
		event: InspectorEvent;

		/** Required */
		topicArn: string;
	}
	export interface UnsubscribeFromEventRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,

		/** Required */
		event: FormControl<InspectorEvent | null | undefined>,

		/** Required */
		topicArn: FormControl<string | null | undefined>,
	}
	export function CreateUnsubscribeFromEventRequestFormGroup() {
		return new FormGroup<UnsubscribeFromEventRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			event: new FormControl<InspectorEvent | null | undefined>(undefined, [Validators.required]),
			topicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAssessmentTargetRequest {

		/** Required */
		assessmentTargetArn: string;

		/** Required */
		assessmentTargetName: string;
		resourceGroupArn?: string;
	}
	export interface UpdateAssessmentTargetRequestFormProperties {

		/** Required */
		assessmentTargetArn: FormControl<string | null | undefined>,

		/** Required */
		assessmentTargetName: FormControl<string | null | undefined>,
		resourceGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssessmentTargetRequestFormGroup() {
		return new FormGroup<UpdateAssessmentTargetRequestFormProperties>({
			assessmentTargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assessmentTargetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about what was excluded from an assessment run. */
	export interface Exclusion {

		/** Required */
		arn: string;

		/** Required */
		title: string;

		/** Required */
		description: string;

		/** Required */
		recommendation: string;

		/** Required */
		scopes: Array<Scope>;
		attributes?: Array<Attribute>;
	}

	/** Contains information about what was excluded from an assessment run. */
	export interface ExclusionFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		recommendation: FormControl<string | null | undefined>,
	}
	export function CreateExclusionFormGroup() {
		return new FormGroup<ExclusionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			recommendation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FailedItemErrorCode { INVALID_ARN = 'INVALID_ARN', DUPLICATE_ARN = 'DUPLICATE_ARN', ITEM_DOES_NOT_EXIST = 'ITEM_DOES_NOT_EXIST', ACCESS_DENIED = 'ACCESS_DENIED', LIMIT_EXCEEDED = 'LIMIT_EXCEEDED', INTERNAL_ERROR = 'INTERNAL_ERROR' }


	/** Includes details about the failed items. */
	export interface FailedItemDetails {

		/** Required */
		failureCode: FailedItemErrorCode;

		/** Required */
		retryable: boolean;
	}

	/** Includes details about the failed items. */
	export interface FailedItemDetailsFormProperties {

		/** Required */
		failureCode: FormControl<FailedItemErrorCode | null | undefined>,

		/** Required */
		retryable: FormControl<boolean | null | undefined>,
	}
	export function CreateFailedItemDetailsFormGroup() {
		return new FormGroup<FailedItemDetailsFormProperties>({
			failureCode: new FormControl<FailedItemErrorCode | null | undefined>(undefined, [Validators.required]),
			retryable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

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

	export enum AddAttributesToFindingsX_Amz_Target { 'InspectorService.AddAttributesToFindings' = 'InspectorService.AddAttributesToFindings' }

	export enum CreateAssessmentTargetX_Amz_Target { 'InspectorService.CreateAssessmentTarget' = 'InspectorService.CreateAssessmentTarget' }

	export enum CreateAssessmentTemplateX_Amz_Target { 'InspectorService.CreateAssessmentTemplate' = 'InspectorService.CreateAssessmentTemplate' }

	export enum CreateExclusionsPreviewX_Amz_Target { 'InspectorService.CreateExclusionsPreview' = 'InspectorService.CreateExclusionsPreview' }

	export enum CreateResourceGroupX_Amz_Target { 'InspectorService.CreateResourceGroup' = 'InspectorService.CreateResourceGroup' }

	export enum DeleteAssessmentRunX_Amz_Target { 'InspectorService.DeleteAssessmentRun' = 'InspectorService.DeleteAssessmentRun' }

	export enum DeleteAssessmentTargetX_Amz_Target { 'InspectorService.DeleteAssessmentTarget' = 'InspectorService.DeleteAssessmentTarget' }

	export enum DeleteAssessmentTemplateX_Amz_Target { 'InspectorService.DeleteAssessmentTemplate' = 'InspectorService.DeleteAssessmentTemplate' }

	export enum DescribeAssessmentRunsX_Amz_Target { 'InspectorService.DescribeAssessmentRuns' = 'InspectorService.DescribeAssessmentRuns' }

	export enum DescribeAssessmentTargetsX_Amz_Target { 'InspectorService.DescribeAssessmentTargets' = 'InspectorService.DescribeAssessmentTargets' }

	export enum DescribeAssessmentTemplatesX_Amz_Target { 'InspectorService.DescribeAssessmentTemplates' = 'InspectorService.DescribeAssessmentTemplates' }

	export enum DescribeCrossAccountAccessRoleX_Amz_Target { 'InspectorService.DescribeCrossAccountAccessRole' = 'InspectorService.DescribeCrossAccountAccessRole' }

	export enum DescribeExclusionsX_Amz_Target { 'InspectorService.DescribeExclusions' = 'InspectorService.DescribeExclusions' }

	export enum DescribeFindingsX_Amz_Target { 'InspectorService.DescribeFindings' = 'InspectorService.DescribeFindings' }

	export enum DescribeResourceGroupsX_Amz_Target { 'InspectorService.DescribeResourceGroups' = 'InspectorService.DescribeResourceGroups' }

	export enum DescribeRulesPackagesX_Amz_Target { 'InspectorService.DescribeRulesPackages' = 'InspectorService.DescribeRulesPackages' }

	export enum GetAssessmentReportX_Amz_Target { 'InspectorService.GetAssessmentReport' = 'InspectorService.GetAssessmentReport' }

	export enum GetExclusionsPreviewX_Amz_Target { 'InspectorService.GetExclusionsPreview' = 'InspectorService.GetExclusionsPreview' }

	export enum GetTelemetryMetadataX_Amz_Target { 'InspectorService.GetTelemetryMetadata' = 'InspectorService.GetTelemetryMetadata' }

	export enum ListAssessmentRunAgentsX_Amz_Target { 'InspectorService.ListAssessmentRunAgents' = 'InspectorService.ListAssessmentRunAgents' }

	export enum ListAssessmentRunsX_Amz_Target { 'InspectorService.ListAssessmentRuns' = 'InspectorService.ListAssessmentRuns' }

	export enum ListAssessmentTargetsX_Amz_Target { 'InspectorService.ListAssessmentTargets' = 'InspectorService.ListAssessmentTargets' }

	export enum ListAssessmentTemplatesX_Amz_Target { 'InspectorService.ListAssessmentTemplates' = 'InspectorService.ListAssessmentTemplates' }

	export enum ListEventSubscriptionsX_Amz_Target { 'InspectorService.ListEventSubscriptions' = 'InspectorService.ListEventSubscriptions' }

	export enum ListExclusionsX_Amz_Target { 'InspectorService.ListExclusions' = 'InspectorService.ListExclusions' }

	export enum ListFindingsX_Amz_Target { 'InspectorService.ListFindings' = 'InspectorService.ListFindings' }

	export enum ListRulesPackagesX_Amz_Target { 'InspectorService.ListRulesPackages' = 'InspectorService.ListRulesPackages' }

	export enum ListTagsForResourceX_Amz_Target { 'InspectorService.ListTagsForResource' = 'InspectorService.ListTagsForResource' }

	export enum PreviewAgentsX_Amz_Target { 'InspectorService.PreviewAgents' = 'InspectorService.PreviewAgents' }

	export enum RegisterCrossAccountAccessRoleX_Amz_Target { 'InspectorService.RegisterCrossAccountAccessRole' = 'InspectorService.RegisterCrossAccountAccessRole' }

	export enum RemoveAttributesFromFindingsX_Amz_Target { 'InspectorService.RemoveAttributesFromFindings' = 'InspectorService.RemoveAttributesFromFindings' }

	export enum SetTagsForResourceX_Amz_Target { 'InspectorService.SetTagsForResource' = 'InspectorService.SetTagsForResource' }

	export enum StartAssessmentRunX_Amz_Target { 'InspectorService.StartAssessmentRun' = 'InspectorService.StartAssessmentRun' }

	export enum StopAssessmentRunX_Amz_Target { 'InspectorService.StopAssessmentRun' = 'InspectorService.StopAssessmentRun' }

	export enum SubscribeToEventX_Amz_Target { 'InspectorService.SubscribeToEvent' = 'InspectorService.SubscribeToEvent' }

	export enum UnsubscribeFromEventX_Amz_Target { 'InspectorService.UnsubscribeFromEvent' = 'InspectorService.UnsubscribeFromEvent' }

	export enum UpdateAssessmentTargetX_Amz_Target { 'InspectorService.UpdateAssessmentTarget' = 'InspectorService.UpdateAssessmentTarget' }

}

