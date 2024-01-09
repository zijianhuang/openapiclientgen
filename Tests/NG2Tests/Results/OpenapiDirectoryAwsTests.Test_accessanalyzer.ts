import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The response to the request to create an analyzer. */
	export interface CreateAnalyzerResponse {
		arn?: string | null;
	}

	/** The response to the request to create an analyzer. */
	export interface CreateAnalyzerResponseFormProperties {
		arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAnalyzerResponseFormGroup() {
		return new FormGroup<CreateAnalyzerResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An criterion statement in an archive rule. Each archive rule may have multiple criteria. */
	export interface InlineArchiveRule {

		/** Required */
		filter: FilterCriteriaMap;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ruleName: string;
	}

	/** An criterion statement in an archive rule. Each archive rule may have multiple criteria. */
	export interface InlineArchiveRuleFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ruleName: FormControl<string | null | undefined>,
	}
	export function CreateInlineArchiveRuleFormGroup() {
		return new FormGroup<InlineArchiveRuleFormProperties>({
			ruleName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1), Validators.pattern('^[A-Za-z][A-Za-z0-9_.-]*$')]),
		});

	}

	export interface FilterCriteriaMap {
	}
	export interface FilterCriteriaMapFormProperties {
	}
	export function CreateFilterCriteriaMapFormGroup() {
		return new FormGroup<FilterCriteriaMapFormProperties>({
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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


	/** The criteria to use in the filter that defines the archive rule. */
	export interface Criterion {

		/**
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		contains?: Array<string>;

		/**
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		eq?: Array<string>;
		exists?: boolean | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		neq?: Array<string>;
	}

	/** The criteria to use in the filter that defines the archive rule. */
	export interface CriterionFormProperties {
		exists: FormControl<boolean | null | undefined>,
	}
	export function CreateCriterionFormGroup() {
		return new FormGroup<CriterionFormProperties>({
			exists: new FormControl<boolean | null | undefined>(undefined),
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


	/** The response to the request. */
	export interface GetAnalyzedResourceResponse {

		/** Contains details about the analyzed resource. */
		resource?: AnalyzedResource;
	}

	/** The response to the request. */
	export interface GetAnalyzedResourceResponseFormProperties {
	}
	export function CreateGetAnalyzedResourceResponseFormGroup() {
		return new FormGroup<GetAnalyzedResourceResponseFormProperties>({
		});

	}


	/** Contains details about the analyzed resource. */
	export interface AnalyzedResource {
		actions?: Array<string>;

		/** Required */
		analyzedAt: Date;

		/** Required */
		createdAt: Date;
		error?: string | null;

		/** Required */
		isPublic: boolean;

		/** Required */
		resourceArn: string;

		/** Required */
		resourceOwnerAccount: string;

		/** Required */
		resourceType: AnalyzedResourceResourceType;
		sharedVia?: Array<string>;
		status?: AnalyzedResourceStatus | null;

		/** Required */
		updatedAt: Date;
	}

	/** Contains details about the analyzed resource. */
	export interface AnalyzedResourceFormProperties {

		/** Required */
		analyzedAt: FormControl<Date | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		error: FormControl<string | null | undefined>,

		/** Required */
		isPublic: FormControl<boolean | null | undefined>,

		/** Required */
		resourceArn: FormControl<string | null | undefined>,

		/** Required */
		resourceOwnerAccount: FormControl<string | null | undefined>,

		/** Required */
		resourceType: FormControl<AnalyzedResourceResourceType | null | undefined>,
		status: FormControl<AnalyzedResourceStatus | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateAnalyzedResourceFormGroup() {
		return new FormGroup<AnalyzedResourceFormProperties>({
			analyzedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			error: new FormControl<string | null | undefined>(undefined),
			isPublic: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceOwnerAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceType: new FormControl<AnalyzedResourceResourceType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<AnalyzedResourceStatus | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AnalyzedResourceResourceType { AWSIAMRole = 0, AWSKMSKey = 1, AWSLambdaFunction = 2, AWSLambdaLayerVersion = 3, AWSS3Bucket = 4, AWSSQSQueue = 5 }

	export enum AnalyzedResourceStatus { ACTIVE = 0, ARCHIVED = 1, RESOLVED = 2 }


	/** The response to the request. */
	export interface GetAnalyzerResponse {

		/**
		 * Contains information about the analyzer.
		 * Required
		 */
		analyzer: AnalyzerSummary;
	}

	/** The response to the request. */
	export interface GetAnalyzerResponseFormProperties {
	}
	export function CreateGetAnalyzerResponseFormGroup() {
		return new FormGroup<GetAnalyzerResponseFormProperties>({
		});

	}


	/** Contains information about the analyzer. */
	export interface AnalyzerSummary {

		/** Required */
		arn: string;

		/** Required */
		createdAt: Date;
		lastResourceAnalyzed?: string | null;
		lastResourceAnalyzedAt?: Date | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/** Required */
		status: AnalyzerSummaryStatus;

		/** Provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a <code>Failed</code> status is displayed. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the AWS organization. */
		statusReason?: StatusReason;
		tags?: TagsMap;

		/** Required */
		type: AnalyzerSummaryType;
	}

	/** Contains information about the analyzer. */
	export interface AnalyzerSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		lastResourceAnalyzed: FormControl<string | null | undefined>,
		lastResourceAnalyzedAt: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<AnalyzerSummaryStatus | null | undefined>,

		/** Required */
		type: FormControl<AnalyzerSummaryType | null | undefined>,
	}
	export function CreateAnalyzerSummaryFormGroup() {
		return new FormGroup<AnalyzerSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastResourceAnalyzed: new FormControl<string | null | undefined>(undefined),
			lastResourceAnalyzedAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1), Validators.pattern('^[A-Za-z][A-Za-z0-9_.-]*$')]),
			status: new FormControl<AnalyzerSummaryStatus | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AnalyzerSummaryType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AnalyzerSummaryStatus { ACTIVE = 0, CREATING = 1, DISABLED = 2, FAILED = 3 }


	/** Provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a <code>Failed</code> status is displayed. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the AWS organization. */
	export interface StatusReason {

		/** Required */
		code: StatusReasonCode;
	}

	/** Provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a <code>Failed</code> status is displayed. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the AWS organization. */
	export interface StatusReasonFormProperties {

		/** Required */
		code: FormControl<StatusReasonCode | null | undefined>,
	}
	export function CreateStatusReasonFormGroup() {
		return new FormGroup<StatusReasonFormProperties>({
			code: new FormControl<StatusReasonCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StatusReasonCode { AWS_SERVICE_ACCESS_DISABLED = 0, DELEGATED_ADMINISTRATOR_DEREGISTERED = 1, ORGANIZATION_DELETED = 2, SERVICE_LINKED_ROLE_CREATION_FAILED = 3 }

	export interface TagsMap {
	}
	export interface TagsMapFormProperties {
	}
	export function CreateTagsMapFormGroup() {
		return new FormGroup<TagsMapFormProperties>({
		});

	}

	export enum AnalyzerSummaryType { ACCOUNT = 0, ORGANIZATION = 1 }


	/** The response to the request. */
	export interface GetArchiveRuleResponse {

		/**
		 * Contains information about an archive rule.
		 * Required
		 */
		archiveRule: ArchiveRuleSummary;
	}

	/** The response to the request. */
	export interface GetArchiveRuleResponseFormProperties {
	}
	export function CreateGetArchiveRuleResponseFormGroup() {
		return new FormGroup<GetArchiveRuleResponseFormProperties>({
		});

	}


	/** Contains information about an archive rule. */
	export interface ArchiveRuleSummary {

		/** Required */
		createdAt: Date;

		/** Required */
		filter: FilterCriteriaMap;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ruleName: string;

		/** Required */
		updatedAt: Date;
	}

	/** Contains information about an archive rule. */
	export interface ArchiveRuleSummaryFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ruleName: FormControl<string | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateArchiveRuleSummaryFormGroup() {
		return new FormGroup<ArchiveRuleSummaryFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ruleName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1), Validators.pattern('^[A-Za-z][A-Za-z0-9_.-]*$')]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response to the request. */
	export interface GetFindingResponse {

		/** Contains information about a finding. */
		finding?: Finding;
	}

	/** The response to the request. */
	export interface GetFindingResponseFormProperties {
	}
	export function CreateGetFindingResponseFormGroup() {
		return new FormGroup<GetFindingResponseFormProperties>({
		});

	}


	/** Contains information about a finding. */
	export interface Finding {
		action?: Array<string>;

		/** Required */
		analyzedAt: Date;

		/** Required */
		condition: ConditionKeyMap;

		/** Required */
		createdAt: Date;
		error?: string | null;

		/** Required */
		id: string;
		isPublic?: boolean | null;
		principal?: PrincipalMap;
		resource?: string | null;

		/** Required */
		resourceOwnerAccount: string;

		/** Required */
		resourceType: FindingResourceType;
		sources?: Array<FindingSource>;

		/** Required */
		status: AnalyzedResourceStatus;

		/** Required */
		updatedAt: Date;
	}

	/** Contains information about a finding. */
	export interface FindingFormProperties {

		/** Required */
		analyzedAt: FormControl<Date | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		error: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		isPublic: FormControl<boolean | null | undefined>,
		resource: FormControl<string | null | undefined>,

		/** Required */
		resourceOwnerAccount: FormControl<string | null | undefined>,

		/** Required */
		resourceType: FormControl<FindingResourceType | null | undefined>,

		/** Required */
		status: FormControl<AnalyzedResourceStatus | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateFindingFormGroup() {
		return new FormGroup<FindingFormProperties>({
			analyzedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			error: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isPublic: new FormControl<boolean | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
			resourceOwnerAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceType: new FormControl<FindingResourceType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<AnalyzedResourceStatus | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConditionKeyMap {
	}
	export interface ConditionKeyMapFormProperties {
	}
	export function CreateConditionKeyMapFormGroup() {
		return new FormGroup<ConditionKeyMapFormProperties>({
		});

	}

	export interface PrincipalMap {
	}
	export interface PrincipalMapFormProperties {
	}
	export function CreatePrincipalMapFormGroup() {
		return new FormGroup<PrincipalMapFormProperties>({
		});

	}

	export enum FindingResourceType { AWSIAMRole = 0, AWSKMSKey = 1, AWSLambdaFunction = 2, AWSLambdaLayerVersion = 3, AWSS3Bucket = 4, AWSSQSQueue = 5 }


	/** The source of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings. */
	export interface FindingSource {

		/** Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings. */
		detail?: FindingSourceDetail;

		/** Required */
		type: FindingSourceType;
	}

	/** The source of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings. */
	export interface FindingSourceFormProperties {

		/** Required */
		type: FormControl<FindingSourceType | null | undefined>,
	}
	export function CreateFindingSourceFormGroup() {
		return new FormGroup<FindingSourceFormProperties>({
			type: new FormControl<FindingSourceType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings. */
	export interface FindingSourceDetail {
		accessPointArn?: string | null;
	}

	/** Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings. */
	export interface FindingSourceDetailFormProperties {
		accessPointArn: FormControl<string | null | undefined>,
	}
	export function CreateFindingSourceDetailFormGroup() {
		return new FormGroup<FindingSourceDetailFormProperties>({
			accessPointArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FindingSourceType { BUCKET_ACL = 0, POLICY = 1, S3_ACCESS_POINT = 2 }


	/** The response to the request. */
	export interface ListAnalyzedResourcesResponse {

		/** Required */
		analyzedResources: Array<AnalyzedResourceSummary>;
		nextToken?: string | null;
	}

	/** The response to the request. */
	export interface ListAnalyzedResourcesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnalyzedResourcesResponseFormGroup() {
		return new FormGroup<ListAnalyzedResourcesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the ARN of the analyzed resource. */
	export interface AnalyzedResourceSummary {

		/** Required */
		resourceArn: string;

		/** Required */
		resourceOwnerAccount: string;

		/** Required */
		resourceType: AnalyzedResourceSummaryResourceType;
	}

	/** Contains the ARN of the analyzed resource. */
	export interface AnalyzedResourceSummaryFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,

		/** Required */
		resourceOwnerAccount: FormControl<string | null | undefined>,

		/** Required */
		resourceType: FormControl<AnalyzedResourceSummaryResourceType | null | undefined>,
	}
	export function CreateAnalyzedResourceSummaryFormGroup() {
		return new FormGroup<AnalyzedResourceSummaryFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceOwnerAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceType: new FormControl<AnalyzedResourceSummaryResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AnalyzedResourceSummaryResourceType { AWSIAMRole = 0, AWSKMSKey = 1, AWSLambdaFunction = 2, AWSLambdaLayerVersion = 3, AWSS3Bucket = 4, AWSSQSQueue = 5 }


	/** The response to the request. */
	export interface ListAnalyzersResponse {

		/** Required */
		analyzers: Array<AnalyzerSummary>;
		nextToken?: string | null;
	}

	/** The response to the request. */
	export interface ListAnalyzersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnalyzersResponseFormGroup() {
		return new FormGroup<ListAnalyzersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to the request. */
	export interface ListArchiveRulesResponse {

		/** Required */
		archiveRules: Array<ArchiveRuleSummary>;
		nextToken?: string | null;
	}

	/** The response to the request. */
	export interface ListArchiveRulesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListArchiveRulesResponseFormGroup() {
		return new FormGroup<ListArchiveRulesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to the request. */
	export interface ListFindingsResponse {

		/** Required */
		findings: Array<FindingSummary>;
		nextToken?: string | null;
	}

	/** The response to the request. */
	export interface ListFindingsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingsResponseFormGroup() {
		return new FormGroup<ListFindingsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a finding. */
	export interface FindingSummary {
		action?: Array<string>;

		/** Required */
		analyzedAt: Date;

		/** Required */
		condition: ConditionKeyMap;

		/** Required */
		createdAt: Date;
		error?: string | null;

		/** Required */
		id: string;
		isPublic?: boolean | null;
		principal?: PrincipalMap;
		resource?: string | null;

		/** Required */
		resourceOwnerAccount: string;

		/** Required */
		resourceType: FindingSummaryResourceType;
		sources?: Array<FindingSource>;

		/** Required */
		status: AnalyzedResourceStatus;

		/** Required */
		updatedAt: Date;
	}

	/** Contains information about a finding. */
	export interface FindingSummaryFormProperties {

		/** Required */
		analyzedAt: FormControl<Date | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		error: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		isPublic: FormControl<boolean | null | undefined>,
		resource: FormControl<string | null | undefined>,

		/** Required */
		resourceOwnerAccount: FormControl<string | null | undefined>,

		/** Required */
		resourceType: FormControl<FindingSummaryResourceType | null | undefined>,

		/** Required */
		status: FormControl<AnalyzedResourceStatus | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateFindingSummaryFormGroup() {
		return new FormGroup<FindingSummaryFormProperties>({
			analyzedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			error: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isPublic: new FormControl<boolean | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
			resourceOwnerAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceType: new FormControl<FindingSummaryResourceType | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<AnalyzedResourceStatus | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FindingSummaryResourceType { AWSIAMRole = 0, AWSKMSKey = 1, AWSLambdaFunction = 2, AWSLambdaLayerVersion = 3, AWSS3Bucket = 4, AWSSQSQueue = 5 }

	export enum OrderBy { ASC = 0, DESC = 1 }


	/** The response to the request. */
	export interface ListTagsForResourceResponse {
		tags?: TagsMap;
	}

	/** The response to the request. */
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}


	/** The response to the request. */
	export interface TagResourceResponse {
	}

	/** The response to the request. */
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}


	/** The response to the request. */
	export interface UntagResourceResponse {
	}

	/** The response to the request. */
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export enum ResourceType { AWSIAMRole = 0, AWSKMSKey = 1, AWSLambdaFunction = 2, AWSLambdaLayerVersion = 3, AWSS3Bucket = 4, AWSSQSQueue = 5 }

	export enum FindingStatus { ACTIVE = 0, ARCHIVED = 1, RESOLVED = 2 }

	export enum AnalyzerStatus { ACTIVE = 0, CREATING = 1, DISABLED = 2, FAILED = 3 }

	export enum Type { ACCOUNT = 0, ORGANIZATION = 1 }


	/** Creates an analyzer. */
	export interface CreateAnalyzerRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		analyzerName: string;
		archiveRules?: Array<InlineArchiveRule>;
		clientToken?: string | null;
		tags?: TagsMap;

		/** Required */
		type: AnalyzerSummaryType;
	}

	/** Creates an analyzer. */
	export interface CreateAnalyzerRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		analyzerName: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AnalyzerSummaryType | null | undefined>,
	}
	export function CreateCreateAnalyzerRequestFormGroup() {
		return new FormGroup<CreateAnalyzerRequestFormProperties>({
			analyzerName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1), Validators.pattern('^[A-Za-z][A-Za-z0-9_.-]*$')]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AnalyzerSummaryType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Creates an archive rule. */
	export interface CreateArchiveRuleRequest {
		clientToken?: string | null;

		/** Required */
		filter: FilterCriteriaMap;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ruleName: string;
	}

	/** Creates an archive rule. */
	export interface CreateArchiveRuleRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ruleName: FormControl<string | null | undefined>,
	}
	export function CreateCreateArchiveRuleRequestFormGroup() {
		return new FormGroup<CreateArchiveRuleRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			ruleName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1), Validators.pattern('^[A-Za-z][A-Za-z0-9_.-]*$')]),
		});

	}


	/** Deletes an analyzer. */
	export interface DeleteAnalyzerRequest {
	}

	/** Deletes an analyzer. */
	export interface DeleteAnalyzerRequestFormProperties {
	}
	export function CreateDeleteAnalyzerRequestFormGroup() {
		return new FormGroup<DeleteAnalyzerRequestFormProperties>({
		});

	}


	/** Deletes an archive rule. */
	export interface DeleteArchiveRuleRequest {
	}

	/** Deletes an archive rule. */
	export interface DeleteArchiveRuleRequestFormProperties {
	}
	export function CreateDeleteArchiveRuleRequestFormGroup() {
		return new FormGroup<DeleteArchiveRuleRequestFormProperties>({
		});

	}

	export enum FindingStatusUpdate { ACTIVE = 0, ARCHIVED = 1 }


	/** Retrieves an analyzed resource. */
	export interface GetAnalyzedResourceRequest {
	}

	/** Retrieves an analyzed resource. */
	export interface GetAnalyzedResourceRequestFormProperties {
	}
	export function CreateGetAnalyzedResourceRequestFormGroup() {
		return new FormGroup<GetAnalyzedResourceRequestFormProperties>({
		});

	}


	/** Retrieves an analyzer. */
	export interface GetAnalyzerRequest {
	}

	/** Retrieves an analyzer. */
	export interface GetAnalyzerRequestFormProperties {
	}
	export function CreateGetAnalyzerRequestFormGroup() {
		return new FormGroup<GetAnalyzerRequestFormProperties>({
		});

	}


	/** Retrieves an archive rule. */
	export interface GetArchiveRuleRequest {
	}

	/** Retrieves an archive rule. */
	export interface GetArchiveRuleRequestFormProperties {
	}
	export function CreateGetArchiveRuleRequestFormGroup() {
		return new FormGroup<GetArchiveRuleRequestFormProperties>({
		});

	}


	/** Retrieves a finding. */
	export interface GetFindingRequest {
	}

	/** Retrieves a finding. */
	export interface GetFindingRequestFormProperties {
	}
	export function CreateGetFindingRequestFormGroup() {
		return new FormGroup<GetFindingRequestFormProperties>({
		});

	}


	/** Retrieves a list of resources that have been analyzed. */
	export interface ListAnalyzedResourcesRequest {

		/** Required */
		analyzerArn: string;
		maxResults?: number | null;
		nextToken?: string | null;
		resourceType?: ListAnalyzedResourcesRequestResourceType | null;
	}

	/** Retrieves a list of resources that have been analyzed. */
	export interface ListAnalyzedResourcesRequestFormProperties {

		/** Required */
		analyzerArn: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		resourceType: FormControl<ListAnalyzedResourcesRequestResourceType | null | undefined>,
	}
	export function CreateListAnalyzedResourcesRequestFormGroup() {
		return new FormGroup<ListAnalyzedResourcesRequestFormProperties>({
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<ListAnalyzedResourcesRequestResourceType | null | undefined>(undefined),
		});

	}

	export enum ListAnalyzedResourcesRequestResourceType { AWSIAMRole = 0, AWSKMSKey = 1, AWSLambdaFunction = 2, AWSLambdaLayerVersion = 3, AWSS3Bucket = 4, AWSSQSQueue = 5 }


	/** Retrieves a list of analyzers. */
	export interface ListAnalyzersRequest {
	}

	/** Retrieves a list of analyzers. */
	export interface ListAnalyzersRequestFormProperties {
	}
	export function CreateListAnalyzersRequestFormGroup() {
		return new FormGroup<ListAnalyzersRequestFormProperties>({
		});

	}


	/** Retrieves a list of archive rules created for the specified analyzer. */
	export interface ListArchiveRulesRequest {
	}

	/** Retrieves a list of archive rules created for the specified analyzer. */
	export interface ListArchiveRulesRequestFormProperties {
	}
	export function CreateListArchiveRulesRequestFormGroup() {
		return new FormGroup<ListArchiveRulesRequestFormProperties>({
		});

	}


	/** The criteria used to sort. */
	export interface SortCriteria {
		attributeName?: string | null;
		orderBy?: OrderBy | null;
	}

	/** The criteria used to sort. */
	export interface SortCriteriaFormProperties {
		attributeName: FormControl<string | null | undefined>,
		orderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateSortCriteriaFormGroup() {
		return new FormGroup<SortCriteriaFormProperties>({
			attributeName: new FormControl<string | null | undefined>(undefined),
			orderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}


	/** Retrieves a list of findings generated by the specified analyzer. */
	export interface ListFindingsRequest {

		/** Required */
		analyzerArn: string;
		filter?: FilterCriteriaMap;
		maxResults?: number | null;
		nextToken?: string | null;

		/** The criteria used to sort. */
		sort?: SortCriteria;
	}

	/** Retrieves a list of findings generated by the specified analyzer. */
	export interface ListFindingsRequestFormProperties {

		/** Required */
		analyzerArn: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingsRequestFormGroup() {
		return new FormGroup<ListFindingsRequestFormProperties>({
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Retrieves a list of tags applied to the specified resource. */
	export interface ListTagsForResourceRequest {
	}

	/** Retrieves a list of tags applied to the specified resource. */
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export enum ReasonCode { AWS_SERVICE_ACCESS_DISABLED = 0, DELEGATED_ADMINISTRATOR_DEREGISTERED = 1, ORGANIZATION_DELETED = 2, SERVICE_LINKED_ROLE_CREATION_FAILED = 3 }


	/** Starts a scan of the policies applied to the specified resource. */
	export interface StartResourceScanRequest {

		/** Required */
		analyzerArn: string;

		/** Required */
		resourceArn: string;
	}

	/** Starts a scan of the policies applied to the specified resource. */
	export interface StartResourceScanRequestFormProperties {

		/** Required */
		analyzerArn: FormControl<string | null | undefined>,

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateStartResourceScanRequestFormGroup() {
		return new FormGroup<StartResourceScanRequestFormProperties>({
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Adds a tag to the specified resource. */
	export interface TagResourceRequest {

		/** Required */
		tags: TagsMap;
	}

	/** Adds a tag to the specified resource. */
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}


	/** Removes a tag from the specified resource. */
	export interface UntagResourceRequest {
	}

	/** Removes a tag from the specified resource. */
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}


	/** Updates the specified archive rule. */
	export interface UpdateArchiveRuleRequest {
		clientToken?: string | null;

		/** Required */
		filter: FilterCriteriaMap;
	}

	/** Updates the specified archive rule. */
	export interface UpdateArchiveRuleRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateArchiveRuleRequestFormGroup() {
		return new FormGroup<UpdateArchiveRuleRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates findings with the new values provided in the request. */
	export interface UpdateFindingsRequest {

		/** Required */
		analyzerArn: string;
		clientToken?: string | null;
		ids?: Array<string>;
		resourceArn?: string | null;

		/** Required */
		status: FindingStatusUpdate;
	}

	/** Updates findings with the new values provided in the request. */
	export interface UpdateFindingsRequestFormProperties {

		/** Required */
		analyzerArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		resourceArn: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<FindingStatusUpdate | null | undefined>,
	}
	export function CreateUpdateFindingsRequestFormGroup() {
		return new FormGroup<UpdateFindingsRequestFormProperties>({
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			resourceArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<FindingStatusUpdate | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates an analyzer for your account.
		 * Put analyzer
		 * @return {CreateAnalyzerResponse} Success
		 */
		CreateAnalyzer(requestBody: CreateAnalyzerPutBody): Observable<CreateAnalyzerResponse> {
			return this.http.put<CreateAnalyzerResponse>(this.baseUri + 'analyzer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of analyzers.
		 * Get analyzer
		 * @param {number} maxResults The maximum number of results to return in the response.
		 * @param {string} nextToken A token used for pagination of results returned.
		 * @param {AnalyzerSummaryType} type The type of analyzer.
		 * @return {ListAnalyzersResponse} Success
		 */
		ListAnalyzers(maxResults: number | null | undefined, nextToken: string | null | undefined, type: AnalyzerSummaryType | null | undefined): Observable<ListAnalyzersResponse> {
			return this.http.get<ListAnalyzersResponse>(this.baseUri + 'analyzer?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&type=' + type, {});
		}

		/**
		 * Creates an archive rule for the specified analyzer. Archive rules automatically archive findings that meet the criteria you define when you create the rule.
		 * Put analyzer/{analyzerName}/archive-rule
		 * @param {string} analyzerName The name of the created analyzer.
		 * @return {void} Success
		 */
		CreateArchiveRule(analyzerName: string, requestBody: CreateArchiveRulePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '/archive-rule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of archive rules created for the specified analyzer.
		 * Get analyzer/{analyzerName}/archive-rule
		 * @param {string} analyzerName The name of the analyzer to retrieve rules from.
		 * @param {number} maxResults The maximum number of results to return in the request.
		 * @param {string} nextToken A token used for pagination of results returned.
		 * @return {ListArchiveRulesResponse} Success
		 */
		ListArchiveRules(analyzerName: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListArchiveRulesResponse> {
			return this.http.get<ListArchiveRulesResponse>(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '/archive-rule&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Deletes the specified analyzer. When you delete an analyzer, Access Analyzer is disabled for the account in the current or specific Region. All findings that were generated by the analyzer are deleted. You cannot undo this action.
		 * Delete analyzer/{analyzerName}
		 * @param {string} analyzerName The name of the analyzer to delete.
		 * @param {string} clientToken A client token.
		 * @return {void} Success
		 */
		DeleteAnalyzer(analyzerName: string, clientToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the specified analyzer.
		 * Get analyzer/{analyzerName}
		 * @param {string} analyzerName The name of the analyzer retrieved.
		 * @return {GetAnalyzerResponse} Success
		 */
		GetAnalyzer(analyzerName: string): Observable<GetAnalyzerResponse> {
			return this.http.get<GetAnalyzerResponse>(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)), {});
		}

		/**
		 * Deletes the specified archive rule.
		 * Delete analyzer/{analyzerName}/archive-rule/{ruleName}
		 * @param {string} analyzerName The name of the analyzer that associated with the archive rule to delete.
		 * @param {string} clientToken A client token.
		 * @param {string} ruleName The name of the rule to delete.
		 * @return {void} Success
		 */
		DeleteArchiveRule(analyzerName: string, clientToken: string | null | undefined, ruleName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '/archive-rule/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about an archive rule.
		 * Get analyzer/{analyzerName}/archive-rule/{ruleName}
		 * @param {string} analyzerName The name of the analyzer to retrieve rules from.
		 * @param {string} ruleName The name of the rule to retrieve.
		 * @return {GetArchiveRuleResponse} Success
		 */
		GetArchiveRule(analyzerName: string, ruleName: string): Observable<GetArchiveRuleResponse> {
			return this.http.get<GetArchiveRuleResponse>(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '/archive-rule/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), {});
		}

		/**
		 * Updates the criteria and values for the specified archive rule.
		 * Put analyzer/{analyzerName}/archive-rule/{ruleName}
		 * @param {string} analyzerName The name of the analyzer to update the archive rules for.
		 * @param {string} ruleName The name of the rule to update.
		 * @return {void} Success
		 */
		UpdateArchiveRule(analyzerName: string, ruleName: string, requestBody: UpdateArchiveRulePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'analyzer/' + (analyzerName == null ? '' : encodeURIComponent(analyzerName)) + '/archive-rule/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a resource that was analyzed.
		 * Get analyzed-resource#analyzerArn&resourceArn
		 * @param {string} analyzerArn The ARN of the analyzer to retrieve information from.
		 * @param {string} resourceArn The ARN of the resource to retrieve information about.
		 * @return {GetAnalyzedResourceResponse} Success
		 */
		GetAnalyzedResource(analyzerArn: string, resourceArn: string): Observable<GetAnalyzedResourceResponse> {
			return this.http.get<GetAnalyzedResourceResponse>(this.baseUri + 'analyzed-resource#analyzerArn&resourceArn?analyzerArn=' + (analyzerArn == null ? '' : encodeURIComponent(analyzerArn)) + '&resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Retrieves information about the specified finding.
		 * Get finding/{id}#analyzerArn
		 * @param {string} analyzerArn The ARN of the analyzer that generated the finding.
		 * @param {string} id The ID of the finding to retrieve.
		 * @return {GetFindingResponse} Success
		 */
		GetFinding(analyzerArn: string, id: string): Observable<GetFindingResponse> {
			return this.http.get<GetFindingResponse>(this.baseUri + 'finding/' + (id == null ? '' : encodeURIComponent(id)) + '#analyzerArn?analyzerArn=' + (analyzerArn == null ? '' : encodeURIComponent(analyzerArn)), {});
		}

		/**
		 * Retrieves a list of resources of the specified type that have been analyzed by the specified analyzer..
		 * Post analyzed-resource
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAnalyzedResourcesResponse} Success
		 */
		ListAnalyzedResources(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAnalyzedResourcesPostBody): Observable<ListAnalyzedResourcesResponse> {
			return this.http.post<ListAnalyzedResourcesResponse>(this.baseUri + 'analyzed-resource?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of findings generated by the specified analyzer.
		 * Post finding
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListFindingsResponse} Success
		 */
		ListFindings(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListFindingsPostBody): Observable<ListFindingsResponse> {
			return this.http.post<ListFindingsResponse>(this.baseUri + 'finding?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the status for the specified findings.
		 * Put finding
		 * @return {void} Success
		 */
		UpdateFindings(requestBody: UpdateFindingsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'finding', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of tags applied to the specified resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource to retrieve tags from.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds a tag to the specified resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource to add the tag to.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Immediately starts a scan of the policies applied to the specified resource.
		 * Post resource/scan
		 * @return {void} Success
		 */
		StartResourceScan(requestBody: StartResourceScanPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'resource/scan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a tag from the specified resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The ARN of the resource to remove the tag from.
		 * @param {Array<string>} tagKeys The key for the tag to add.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateAnalyzerPutBody {

		/**
		 * The name of the analyzer to create.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		analyzerName: string;

		/** Specifies the archive rules to add for the analyzer. Archive rules automatically archive findings that meet the criteria you define for the rule. */
		archiveRules?: Array<InlineArchiveRule>;

		/** A client token. */
		clientToken?: string | null;

		/** The tags to apply to the analyzer. */
		tags?: {[id: string]: string };

		/**
		 * The type of analyzer to create. Only ACCOUNT analyzers are supported. You can create only one analyzer per account per Region.
		 * Required
		 */
		type: AnalyzerSummaryType;
	}
	export interface CreateAnalyzerPutBodyFormProperties {

		/**
		 * The name of the analyzer to create.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		analyzerName: FormControl<string | null | undefined>,

		/** A client token. */
		clientToken: FormControl<string | null | undefined>,

		/** The tags to apply to the analyzer. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The type of analyzer to create. Only ACCOUNT analyzers are supported. You can create only one analyzer per account per Region.
		 * Required
		 */
		type: FormControl<AnalyzerSummaryType | null | undefined>,
	}
	export function CreateCreateAnalyzerPutBodyFormGroup() {
		return new FormGroup<CreateAnalyzerPutBodyFormProperties>({
			analyzerName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1), Validators.pattern('^[A-Za-z][A-Za-z0-9_.-]*$')]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<AnalyzerSummaryType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateArchiveRulePutBody {

		/** A client token. */
		clientToken?: string | null;

		/**
		 * The criteria for the rule.
		 * Required
		 */
		filter: {[id: string]: Criterion };

		/**
		 * The name of the rule to create.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ruleName: string;
	}
	export interface CreateArchiveRulePutBodyFormProperties {

		/** A client token. */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The criteria for the rule.
		 * Required
		 */
		filter: FormControl<{[id: string]: Criterion } | null | undefined>,

		/**
		 * The name of the rule to create.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ruleName: FormControl<string | null | undefined>,
	}
	export function CreateCreateArchiveRulePutBodyFormGroup() {
		return new FormGroup<CreateArchiveRulePutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<{[id: string]: Criterion } | null | undefined>(undefined, [Validators.required]),
			ruleName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1), Validators.pattern('^[A-Za-z][A-Za-z0-9_.-]*$')]),
		});

	}

	export interface UpdateArchiveRulePutBody {

		/** A client token. */
		clientToken?: string | null;

		/**
		 * A filter to match for the rules to update. Only rules that match the filter are updated.
		 * Required
		 */
		filter: {[id: string]: Criterion };
	}
	export interface UpdateArchiveRulePutBodyFormProperties {

		/** A client token. */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * A filter to match for the rules to update. Only rules that match the filter are updated.
		 * Required
		 */
		filter: FormControl<{[id: string]: Criterion } | null | undefined>,
	}
	export function CreateUpdateArchiveRulePutBodyFormGroup() {
		return new FormGroup<UpdateArchiveRulePutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<{[id: string]: Criterion } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAnalyzedResourcesPostBody {

		/**
		 * The ARN of the analyzer to retrieve a list of analyzed resources from.
		 * Required
		 */
		analyzerArn: string;

		/** The maximum number of results to return in the response. */
		maxResults?: number | null;

		/** A token used for pagination of results returned. */
		nextToken?: string | null;

		/** The type of resource. */
		resourceType?: ListAnalyzedResourcesPostBodyResourceType | null;
	}
	export interface ListAnalyzedResourcesPostBodyFormProperties {

		/**
		 * The ARN of the analyzer to retrieve a list of analyzed resources from.
		 * Required
		 */
		analyzerArn: FormControl<string | null | undefined>,

		/** The maximum number of results to return in the response. */
		maxResults: FormControl<number | null | undefined>,

		/** A token used for pagination of results returned. */
		nextToken: FormControl<string | null | undefined>,

		/** The type of resource. */
		resourceType: FormControl<ListAnalyzedResourcesPostBodyResourceType | null | undefined>,
	}
	export function CreateListAnalyzedResourcesPostBodyFormGroup() {
		return new FormGroup<ListAnalyzedResourcesPostBodyFormProperties>({
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<ListAnalyzedResourcesPostBodyResourceType | null | undefined>(undefined),
		});

	}

	export enum ListAnalyzedResourcesPostBodyResourceType { AWSIAMRole = 0, AWSKMSKey = 1, AWSLambdaFunction = 2, AWSLambdaLayerVersion = 3, AWSS3Bucket = 4, AWSSQSQueue = 5 }

	export interface ListFindingsPostBody {

		/**
		 * The ARN of the analyzer to retrieve findings from.
		 * Required
		 */
		analyzerArn: string;

		/** A filter to match for the findings to return. */
		filter?: {[id: string]: Criterion };

		/** The maximum number of results to return in the response. */
		maxResults?: number | null;

		/** A token used for pagination of results returned. */
		nextToken?: string | null;

		/** The criteria used to sort. */
		sort?: ListFindingsPostBodySort;
	}
	export interface ListFindingsPostBodyFormProperties {

		/**
		 * The ARN of the analyzer to retrieve findings from.
		 * Required
		 */
		analyzerArn: FormControl<string | null | undefined>,

		/** A filter to match for the findings to return. */
		filter: FormControl<{[id: string]: Criterion } | null | undefined>,

		/** The maximum number of results to return in the response. */
		maxResults: FormControl<number | null | undefined>,

		/** A token used for pagination of results returned. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingsPostBodyFormGroup() {
		return new FormGroup<ListFindingsPostBodyFormProperties>({
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filter: new FormControl<{[id: string]: Criterion } | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFindingsPostBodySort {
		attributeName?: string | null;
		orderBy?: OrderBy | null;
	}
	export interface ListFindingsPostBodySortFormProperties {
		attributeName: FormControl<string | null | undefined>,
		orderBy: FormControl<OrderBy | null | undefined>,
	}
	export function CreateListFindingsPostBodySortFormGroup() {
		return new FormGroup<ListFindingsPostBodySortFormProperties>({
			attributeName: new FormControl<string | null | undefined>(undefined),
			orderBy: new FormControl<OrderBy | null | undefined>(undefined),
		});

	}

	export interface UpdateFindingsPutBody {

		/**
		 * The ARN of the analyzer that generated the findings to update.
		 * Required
		 */
		analyzerArn: string;

		/** A client token. */
		clientToken?: string | null;

		/** The IDs of the findings to update. */
		ids?: Array<string>;

		/** The ARN of the resource identified in the finding. */
		resourceArn?: string | null;

		/**
		 * The state represents the action to take to update the finding Status. Use <code>ARCHIVE</code> to change an Active finding to an Archived finding. Use <code>ACTIVE</code> to change an Archived finding to an Active finding.
		 * Required
		 */
		status: FindingStatusUpdate;
	}
	export interface UpdateFindingsPutBodyFormProperties {

		/**
		 * The ARN of the analyzer that generated the findings to update.
		 * Required
		 */
		analyzerArn: FormControl<string | null | undefined>,

		/** A client token. */
		clientToken: FormControl<string | null | undefined>,

		/** The ARN of the resource identified in the finding. */
		resourceArn: FormControl<string | null | undefined>,

		/**
		 * The state represents the action to take to update the finding Status. Use <code>ARCHIVE</code> to change an Active finding to an Archived finding. Use <code>ACTIVE</code> to change an Archived finding to an Active finding.
		 * Required
		 */
		status: FormControl<FindingStatusUpdate | null | undefined>,
	}
	export function CreateUpdateFindingsPutBodyFormGroup() {
		return new FormGroup<UpdateFindingsPutBodyFormProperties>({
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			resourceArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<FindingStatusUpdate | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to add to the resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to add to the resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartResourceScanPostBody {

		/**
		 * The ARN of the analyzer to use to scan the policies applied to the specified resource.
		 * Required
		 */
		analyzerArn: string;

		/**
		 * The ARN of the resource to scan.
		 * Required
		 */
		resourceArn: string;
	}
	export interface StartResourceScanPostBodyFormProperties {

		/**
		 * The ARN of the analyzer to use to scan the policies applied to the specified resource.
		 * Required
		 */
		analyzerArn: FormControl<string | null | undefined>,

		/**
		 * The ARN of the resource to scan.
		 * Required
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateStartResourceScanPostBodyFormGroup() {
		return new FormGroup<StartResourceScanPostBodyFormProperties>({
			analyzerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

