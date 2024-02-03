import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
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

	export interface CreateLensShareOutput {

		/** The ID associated with the share. */
		ShareId?: string | null;
	}
	export interface CreateLensShareOutputFormProperties {

		/** The ID associated with the share. */
		ShareId: FormControl<string | null | undefined>,
	}
	export function CreateCreateLensShareOutputFormGroup() {
		return new FormGroup<CreateLensShareOutputFormProperties>({
			ShareId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9a-f]{32}')]),
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

	export interface CreateLensVersionOutput {
		LensArn?: string;
		LensVersion?: string;
	}
	export interface CreateLensVersionOutputFormProperties {
		LensArn: FormControl<string | null | undefined>,
		LensVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateLensVersionOutputFormGroup() {
		return new FormGroup<CreateLensVersionOutputFormProperties>({
			LensArn: new FormControl<string | null | undefined>(undefined),
			LensVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output of a create milestone call. */
	export interface CreateMilestoneOutput {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/**
		 * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MilestoneNumber?: number | null;
	}

	/** Output of a create milestone call. */
	export interface CreateMilestoneOutputFormProperties {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,

		/**
		 * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MilestoneNumber: FormControl<number | null | undefined>,
	}
	export function CreateCreateMilestoneOutputFormGroup() {
		return new FormGroup<CreateMilestoneOutputFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
			MilestoneNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface CreateProfileOutput {
		ProfileArn?: string;
		ProfileVersion?: string;
	}
	export interface CreateProfileOutputFormProperties {
		ProfileArn: FormControl<string | null | undefined>,
		ProfileVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateProfileOutputFormGroup() {
		return new FormGroup<CreateProfileOutputFormProperties>({
			ProfileArn: new FormControl<string | null | undefined>(undefined),
			ProfileVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An update to a profile question. */
	export interface ProfileQuestionUpdate {

		/**
		 * The ID of the question.
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId?: string | null;
		SelectedChoiceIds?: Array<string>;
	}

	/** An update to a profile question. */
	export interface ProfileQuestionUpdateFormProperties {

		/**
		 * The ID of the question.
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId: FormControl<string | null | undefined>,
	}
	export function CreateProfileQuestionUpdateFormGroup() {
		return new FormGroup<ProfileQuestionUpdateFormProperties>({
			QuestionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface CreateProfileShareOutput {

		/** The ID associated with the share. */
		ShareId?: string | null;
		ProfileArn?: string;
	}
	export interface CreateProfileShareOutputFormProperties {

		/** The ID associated with the share. */
		ShareId: FormControl<string | null | undefined>,
		ProfileArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateProfileShareOutputFormGroup() {
		return new FormGroup<CreateProfileShareOutputFormProperties>({
			ShareId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9a-f]{32}')]),
			ProfileArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output of a create workload call. */
	export interface CreateWorkloadOutput {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/** The ARN for the workload. */
		WorkloadArn?: string | null;
	}

	/** Output of a create workload call. */
	export interface CreateWorkloadOutputFormProperties {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,

		/** The ARN for the workload. */
		WorkloadArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkloadOutputFormGroup() {
		return new FormGroup<CreateWorkloadOutputFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
			WorkloadArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TrustedAdvisorIntegrationStatus { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export enum DefinitionType { WORKLOAD_METADATA = 'WORKLOAD_METADATA', APP_REGISTRY = 'APP_REGISTRY' }


	/** Input for Create Workload Share */
	export interface CreateWorkloadShareOutput {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/** The ID associated with the share. */
		ShareId?: string | null;
	}

	/** Input for Create Workload Share */
	export interface CreateWorkloadShareOutputFormProperties {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,

		/** The ID associated with the share. */
		ShareId: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkloadShareOutputFormGroup() {
		return new FormGroup<CreateWorkloadShareOutputFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
			ShareId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9a-f]{32}')]),
		});

	}

	export interface ExportLensOutput {
		LensJSON?: string;
	}
	export interface ExportLensOutputFormProperties {
		LensJSON: FormControl<string | null | undefined>,
	}
	export function CreateExportLensOutputFormGroup() {
		return new FormGroup<ExportLensOutputFormProperties>({
			LensJSON: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output of a get answer call. */
	export interface GetAnswerOutput {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/**
		 * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MilestoneNumber?: number | null;

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias?: string | null;
		LensArn?: string;

		/** An answer of the question. */
		Answer?: Answer;
	}

	/** Output of a get answer call. */
	export interface GetAnswerOutputFormProperties {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,

		/**
		 * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MilestoneNumber: FormControl<number | null | undefined>,

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias: FormControl<string | null | undefined>,
		LensArn: FormControl<string | null | undefined>,
	}
	export function CreateGetAnswerOutputFormGroup() {
		return new FormGroup<GetAnswerOutputFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
			MilestoneNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			LensAlias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			LensArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An answer of the question. */
	export interface Answer {

		/**
		 * The ID of the question.
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId?: string | null;

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId?: string | null;

		/**
		 * The title of the question.
		 * Max length: 512
		 * Min length: 1
		 */
		QuestionTitle?: string | null;

		/**
		 * The description of the question.
		 * Max length: 1024
		 * Min length: 1
		 */
		QuestionDescription?: string | null;

		/**
		 * <p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p> <p>This value is only available if the question has been answered.</p> <p>This value does not apply to custom lenses.</p>
		 * Max length: 2048
		 * Min length: 1
		 */
		ImprovementPlanUrl?: string | null;

		/**
		 * <p>The helpful resource URL.</p> <p>For Amazon Web Services official lenses, this is the helpful resource URL for a question or choice.</p> <p>For custom lenses, this is the helpful resource URL for a question and is only provided if <code>HelpfulResourceDisplayText</code> was specified for the question.</p>
		 * Max length: 2048
		 * Min length: 1
		 */
		HelpfulResourceUrl?: string | null;
		HelpfulResourceDisplayText?: string;

		/** List of choices available for a question. */
		Choices?: Array<Choice>;

		/** <p>List of selected choice IDs in a question answer.</p> <p>The values entered replace the previously selected choices.</p> */
		SelectedChoices?: Array<string>;
		ChoiceAnswers?: Array<ChoiceAnswer>;

		/** Defines whether this question is applicable to a lens review. */
		IsApplicable?: boolean | null;

		/** The risk for a given workload, lens review, pillar, or question. */
		Risk?: AnswerRisk | null;

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		Notes?: string | null;
		Reason?: ChoiceReason;
	}

	/** An answer of the question. */
	export interface AnswerFormProperties {

		/**
		 * The ID of the question.
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId: FormControl<string | null | undefined>,

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId: FormControl<string | null | undefined>,

		/**
		 * The title of the question.
		 * Max length: 512
		 * Min length: 1
		 */
		QuestionTitle: FormControl<string | null | undefined>,

		/**
		 * The description of the question.
		 * Max length: 1024
		 * Min length: 1
		 */
		QuestionDescription: FormControl<string | null | undefined>,

		/**
		 * <p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p> <p>This value is only available if the question has been answered.</p> <p>This value does not apply to custom lenses.</p>
		 * Max length: 2048
		 * Min length: 1
		 */
		ImprovementPlanUrl: FormControl<string | null | undefined>,

		/**
		 * <p>The helpful resource URL.</p> <p>For Amazon Web Services official lenses, this is the helpful resource URL for a question or choice.</p> <p>For custom lenses, this is the helpful resource URL for a question and is only provided if <code>HelpfulResourceDisplayText</code> was specified for the question.</p>
		 * Max length: 2048
		 * Min length: 1
		 */
		HelpfulResourceUrl: FormControl<string | null | undefined>,
		HelpfulResourceDisplayText: FormControl<string | null | undefined>,

		/** Defines whether this question is applicable to a lens review. */
		IsApplicable: FormControl<boolean | null | undefined>,

		/** The risk for a given workload, lens review, pillar, or question. */
		Risk: FormControl<AnswerRisk | null | undefined>,

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		Notes: FormControl<string | null | undefined>,
		Reason: FormControl<ChoiceReason | null | undefined>,
	}
	export function CreateAnswerFormGroup() {
		return new FormGroup<AnswerFormProperties>({
			QuestionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			PillarId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			QuestionTitle: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			QuestionDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			ImprovementPlanUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			HelpfulResourceUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			HelpfulResourceDisplayText: new FormControl<string | null | undefined>(undefined),
			IsApplicable: new FormControl<boolean | null | undefined>(undefined),
			Risk: new FormControl<AnswerRisk | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2084)]),
			Reason: new FormControl<ChoiceReason | null | undefined>(undefined),
		});

	}


	/** A choice available to answer question. */
	export interface Choice {

		/**
		 * The ID of a choice.
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId?: string | null;

		/**
		 * The title of a choice.
		 * Max length: 512
		 * Min length: 1
		 */
		Title?: string | null;

		/**
		 * The description of a choice.
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;
		HelpfulResource?: ChoiceContent;
		ImprovementPlan?: ChoiceContent;
		AdditionalResources?: Array<AdditionalResources>;
	}

	/** A choice available to answer question. */
	export interface ChoiceFormProperties {

		/**
		 * The ID of a choice.
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId: FormControl<string | null | undefined>,

		/**
		 * The title of a choice.
		 * Max length: 512
		 * Min length: 1
		 */
		Title: FormControl<string | null | undefined>,

		/**
		 * The description of a choice.
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateChoiceFormGroup() {
		return new FormGroup<ChoiceFormProperties>({
			ChoiceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			Title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** The choice content. */
	export interface ChoiceContent {
		DisplayText?: string;
		Url?: string;
	}

	/** The choice content. */
	export interface ChoiceContentFormProperties {
		DisplayText: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateChoiceContentFormGroup() {
		return new FormGroup<ChoiceContentFormProperties>({
			DisplayText: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The choice level additional resources for a custom lens.</p> <p>This field does not apply to Amazon Web Services official lenses.</p> */
	export interface AdditionalResources {
		Type?: AdditionalResourceType;
		Content?: Array<ChoiceContent>;
	}

	/** <p>The choice level additional resources for a custom lens.</p> <p>This field does not apply to Amazon Web Services official lenses.</p> */
	export interface AdditionalResourcesFormProperties {
		Type: FormControl<AdditionalResourceType | null | undefined>,
	}
	export function CreateAdditionalResourcesFormGroup() {
		return new FormGroup<AdditionalResourcesFormProperties>({
			Type: new FormControl<AdditionalResourceType | null | undefined>(undefined),
		});

	}

	export enum AdditionalResourceType { HELPFUL_RESOURCE = 'HELPFUL_RESOURCE', IMPROVEMENT_PLAN = 'IMPROVEMENT_PLAN' }


	/** A choice that has been answered on a question in your workload. */
	export interface ChoiceAnswer {

		/**
		 * The ID of a choice.
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId?: string | null;
		Status?: ChoiceStatus;
		Reason?: ChoiceReason;
		Notes?: string;
	}

	/** A choice that has been answered on a question in your workload. */
	export interface ChoiceAnswerFormProperties {

		/**
		 * The ID of a choice.
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId: FormControl<string | null | undefined>,
		Status: FormControl<ChoiceStatus | null | undefined>,
		Reason: FormControl<ChoiceReason | null | undefined>,
		Notes: FormControl<string | null | undefined>,
	}
	export function CreateChoiceAnswerFormGroup() {
		return new FormGroup<ChoiceAnswerFormProperties>({
			ChoiceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			Status: new FormControl<ChoiceStatus | null | undefined>(undefined),
			Reason: new FormControl<ChoiceReason | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChoiceStatus { SELECTED = 'SELECTED', NOT_APPLICABLE = 'NOT_APPLICABLE', UNSELECTED = 'UNSELECTED' }

	export enum ChoiceReason { OUT_OF_SCOPE = 'OUT_OF_SCOPE', BUSINESS_PRIORITIES = 'BUSINESS_PRIORITIES', ARCHITECTURE_CONSTRAINTS = 'ARCHITECTURE_CONSTRAINTS', OTHER = 'OTHER', NONE = 'NONE' }

	export enum AnswerRisk { UNANSWERED = 'UNANSWERED', HIGH = 'HIGH', MEDIUM = 'MEDIUM', NONE = 'NONE', NOT_APPLICABLE = 'NOT_APPLICABLE' }

	export interface GetConsolidatedReportOutput {
		Metrics?: Array<ConsolidatedReportMetric>;

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;

		/** <p>The Base64-encoded string representation of a lens review report.</p> <p>This data can be used to create a PDF file.</p> <p>Only returned by <a>GetConsolidatedReport</a> when <code>PDF</code> format is requested.</p> */
		Base64String?: string | null;
	}
	export interface GetConsolidatedReportOutputFormProperties {

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,

		/** <p>The Base64-encoded string representation of a lens review report.</p> <p>This data can be used to create a PDF file.</p> <p>Only returned by <a>GetConsolidatedReport</a> when <code>PDF</code> format is requested.</p> */
		Base64String: FormControl<string | null | undefined>,
	}
	export function CreateGetConsolidatedReportOutputFormGroup() {
		return new FormGroup<GetConsolidatedReportOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			Base64String: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A metric that contributes to the consolidated report. */
	export interface ConsolidatedReportMetric {
		MetricType?: MetricType;

		/** A map from risk names to the count of how many questions have that rating. */
		RiskCounts?: RiskCounts;

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/**
		 * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		WorkloadName?: string | null;

		/** The ARN for the workload. */
		WorkloadArn?: string | null;

		/** The date and time recorded. */
		UpdatedAt?: Date | null;
		Lenses?: Array<LensMetric>;
		LensesAppliedCount?: number | null;
	}

	/** A metric that contributes to the consolidated report. */
	export interface ConsolidatedReportMetricFormProperties {
		MetricType: FormControl<MetricType | null | undefined>,

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,

		/**
		 * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		WorkloadName: FormControl<string | null | undefined>,

		/** The ARN for the workload. */
		WorkloadArn: FormControl<string | null | undefined>,

		/** The date and time recorded. */
		UpdatedAt: FormControl<Date | null | undefined>,
		LensesAppliedCount: FormControl<number | null | undefined>,
	}
	export function CreateConsolidatedReportMetricFormGroup() {
		return new FormGroup<ConsolidatedReportMetricFormProperties>({
			MetricType: new FormControl<MetricType | null | undefined>(undefined),
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
			WorkloadName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(100)]),
			WorkloadArn: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			LensesAppliedCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum MetricType { WORKLOAD = 'WORKLOAD' }


	/** A map from risk names to the count of how many questions have that rating. */
	export interface RiskCounts {
	}

	/** A map from risk names to the count of how many questions have that rating. */
	export interface RiskCountsFormProperties {
	}
	export function CreateRiskCountsFormGroup() {
		return new FormGroup<RiskCountsFormProperties>({
		});

	}


	/** A metric for a particular lens in a workload. */
	export interface LensMetric {
		LensArn?: string;
		Pillars?: Array<PillarMetric>;

		/** A map from risk names to the count of how many questions have that rating. */
		RiskCounts?: RiskCounts;
	}

	/** A metric for a particular lens in a workload. */
	export interface LensMetricFormProperties {
		LensArn: FormControl<string | null | undefined>,
	}
	export function CreateLensMetricFormGroup() {
		return new FormGroup<LensMetricFormProperties>({
			LensArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A metric for a particular pillar in a lens. */
	export interface PillarMetric {

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId?: string | null;

		/** A map from risk names to the count of how many questions have that rating. */
		RiskCounts?: RiskCounts;
		Questions?: Array<QuestionMetric>;
	}

	/** A metric for a particular pillar in a lens. */
	export interface PillarMetricFormProperties {

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId: FormControl<string | null | undefined>,
	}
	export function CreatePillarMetricFormGroup() {
		return new FormGroup<PillarMetricFormProperties>({
			PillarId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
		});

	}


	/** A metric for a particular question in the pillar.  */
	export interface QuestionMetric {

		/**
		 * The ID of the question.
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId?: string | null;

		/** The risk for a given workload, lens review, pillar, or question. */
		Risk?: AnswerRisk | null;
		BestPractices?: Array<BestPractice>;
	}

	/** A metric for a particular question in the pillar.  */
	export interface QuestionMetricFormProperties {

		/**
		 * The ID of the question.
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId: FormControl<string | null | undefined>,

		/** The risk for a given workload, lens review, pillar, or question. */
		Risk: FormControl<AnswerRisk | null | undefined>,
	}
	export function CreateQuestionMetricFormGroup() {
		return new FormGroup<QuestionMetricFormProperties>({
			QuestionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			Risk: new FormControl<AnswerRisk | null | undefined>(undefined),
		});

	}


	/** A best practice, or question choice, that has been identified as a risk in this question. */
	export interface BestPractice {

		/**
		 * The ID of a choice.
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId?: string | null;

		/**
		 * The title of a choice.
		 * Max length: 512
		 * Min length: 1
		 */
		ChoiceTitle?: string | null;
	}

	/** A best practice, or question choice, that has been identified as a risk in this question. */
	export interface BestPracticeFormProperties {

		/**
		 * The ID of a choice.
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId: FormControl<string | null | undefined>,

		/**
		 * The title of a choice.
		 * Max length: 512
		 * Min length: 1
		 */
		ChoiceTitle: FormControl<string | null | undefined>,
	}
	export function CreateBestPracticeFormGroup() {
		return new FormGroup<BestPracticeFormProperties>({
			ChoiceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			ChoiceTitle: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
		});

	}

	export interface GetLensOutput {
		Lens?: Lens;
	}
	export interface GetLensOutputFormProperties {
	}
	export function CreateGetLensOutputFormGroup() {
		return new FormGroup<GetLensOutputFormProperties>({
		});

	}


	/** A lens return object. */
	export interface Lens {
		LensArn?: string;
		LensVersion?: string;

		/**
		 * The full name of the lens.
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * The description of the lens.
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;
		Owner?: string;
		ShareInvitationId?: string;
		Tags?: TagMap;
	}

	/** A lens return object. */
	export interface LensFormProperties {
		LensArn: FormControl<string | null | undefined>,
		LensVersion: FormControl<string | null | undefined>,

		/**
		 * The full name of the lens.
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the lens.
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		ShareInvitationId: FormControl<string | null | undefined>,
	}
	export function CreateLensFormGroup() {
		return new FormGroup<LensFormProperties>({
			LensArn: new FormControl<string | null | undefined>(undefined),
			LensVersion: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			Owner: new FormControl<string | null | undefined>(undefined),
			ShareInvitationId: new FormControl<string | null | undefined>(undefined),
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


	/** Output of a get lens review call. */
	export interface GetLensReviewOutput {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/**
		 * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MilestoneNumber?: number | null;

		/** A lens review of a question. */
		LensReview?: LensReview;
	}

	/** Output of a get lens review call. */
	export interface GetLensReviewOutputFormProperties {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,

		/**
		 * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MilestoneNumber: FormControl<number | null | undefined>,
	}
	export function CreateGetLensReviewOutputFormGroup() {
		return new FormGroup<GetLensReviewOutputFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
			MilestoneNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}


	/** A lens review of a question. */
	export interface LensReview {

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias?: string | null;
		LensArn?: string;
		LensVersion?: string;

		/**
		 * The full name of the lens.
		 * Max length: 128
		 * Min length: 1
		 */
		LensName?: string | null;
		LensStatus?: LensStatus;

		/** List of pillar review summaries of lens review in a workload. */
		PillarReviewSummaries?: Array<PillarReviewSummary>;

		/** The date and time recorded. */
		UpdatedAt?: Date | null;

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		Notes?: string | null;

		/** A map from risk names to the count of how many questions have that rating. */
		RiskCounts?: RiskCounts;

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;
		Profiles?: Array<WorkloadProfile>;

		/** A map from risk names to the count of how many questions have that rating. */
		PrioritizedRiskCounts?: RiskCounts;
	}

	/** A lens review of a question. */
	export interface LensReviewFormProperties {

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias: FormControl<string | null | undefined>,
		LensArn: FormControl<string | null | undefined>,
		LensVersion: FormControl<string | null | undefined>,

		/**
		 * The full name of the lens.
		 * Max length: 128
		 * Min length: 1
		 */
		LensName: FormControl<string | null | undefined>,
		LensStatus: FormControl<LensStatus | null | undefined>,

		/** The date and time recorded. */
		UpdatedAt: FormControl<Date | null | undefined>,

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		Notes: FormControl<string | null | undefined>,

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateLensReviewFormGroup() {
		return new FormGroup<LensReviewFormProperties>({
			LensAlias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			LensArn: new FormControl<string | null | undefined>(undefined),
			LensVersion: new FormControl<string | null | undefined>(undefined),
			LensName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			LensStatus: new FormControl<LensStatus | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2084)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LensStatus { CURRENT = 'CURRENT', NOT_CURRENT = 'NOT_CURRENT', DEPRECATED = 'DEPRECATED', DELETED = 'DELETED', UNSHARED = 'UNSHARED' }


	/** A pillar review summary of a lens review. */
	export interface PillarReviewSummary {

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId?: string | null;

		/**
		 * The name of the pillar.
		 * Max length: 128
		 * Min length: 1
		 */
		PillarName?: string | null;

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		Notes?: string | null;

		/** A map from risk names to the count of how many questions have that rating. */
		RiskCounts?: RiskCounts;

		/** A map from risk names to the count of how many questions have that rating. */
		PrioritizedRiskCounts?: RiskCounts;
	}

	/** A pillar review summary of a lens review. */
	export interface PillarReviewSummaryFormProperties {

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId: FormControl<string | null | undefined>,

		/**
		 * The name of the pillar.
		 * Max length: 128
		 * Min length: 1
		 */
		PillarName: FormControl<string | null | undefined>,

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		Notes: FormControl<string | null | undefined>,
	}
	export function CreatePillarReviewSummaryFormGroup() {
		return new FormGroup<PillarReviewSummaryFormProperties>({
			PillarId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			PillarName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			Notes: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2084)]),
		});

	}


	/** The profile associated with a workload. */
	export interface WorkloadProfile {
		ProfileArn?: string;
		ProfileVersion?: string;
	}

	/** The profile associated with a workload. */
	export interface WorkloadProfileFormProperties {
		ProfileArn: FormControl<string | null | undefined>,
		ProfileVersion: FormControl<string | null | undefined>,
	}
	export function CreateWorkloadProfileFormGroup() {
		return new FormGroup<WorkloadProfileFormProperties>({
			ProfileArn: new FormControl<string | null | undefined>(undefined),
			ProfileVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output of a get lens review report call. */
	export interface GetLensReviewReportOutput {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/**
		 * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MilestoneNumber?: number | null;

		/** A report of a lens review. */
		LensReviewReport?: LensReviewReport;
	}

	/** Output of a get lens review report call. */
	export interface GetLensReviewReportOutputFormProperties {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,

		/**
		 * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MilestoneNumber: FormControl<number | null | undefined>,
	}
	export function CreateGetLensReviewReportOutputFormGroup() {
		return new FormGroup<GetLensReviewReportOutputFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
			MilestoneNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}


	/** A report of a lens review. */
	export interface LensReviewReport {

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias?: string | null;
		LensArn?: string;

		/** <p>The Base64-encoded string representation of a lens review report.</p> <p>This data can be used to create a PDF file.</p> <p>Only returned by <a>GetConsolidatedReport</a> when <code>PDF</code> format is requested.</p> */
		Base64String?: string | null;
	}

	/** A report of a lens review. */
	export interface LensReviewReportFormProperties {

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias: FormControl<string | null | undefined>,
		LensArn: FormControl<string | null | undefined>,

		/** <p>The Base64-encoded string representation of a lens review report.</p> <p>This data can be used to create a PDF file.</p> <p>Only returned by <a>GetConsolidatedReport</a> when <code>PDF</code> format is requested.</p> */
		Base64String: FormControl<string | null | undefined>,
	}
	export function CreateLensReviewReportFormGroup() {
		return new FormGroup<LensReviewReportFormProperties>({
			LensAlias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			LensArn: new FormControl<string | null | undefined>(undefined),
			Base64String: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLensVersionDifferenceOutput {

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias?: string | null;
		LensArn?: string;
		BaseLensVersion?: string;
		TargetLensVersion?: string;
		LatestLensVersion?: string;

		/** The differences between the base and latest versions of the lens. */
		VersionDifferences?: VersionDifferences;
	}
	export interface GetLensVersionDifferenceOutputFormProperties {

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias: FormControl<string | null | undefined>,
		LensArn: FormControl<string | null | undefined>,
		BaseLensVersion: FormControl<string | null | undefined>,
		TargetLensVersion: FormControl<string | null | undefined>,
		LatestLensVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetLensVersionDifferenceOutputFormGroup() {
		return new FormGroup<GetLensVersionDifferenceOutputFormProperties>({
			LensAlias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			LensArn: new FormControl<string | null | undefined>(undefined),
			BaseLensVersion: new FormControl<string | null | undefined>(undefined),
			TargetLensVersion: new FormControl<string | null | undefined>(undefined),
			LatestLensVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The differences between the base and latest versions of the lens. */
	export interface VersionDifferences {
		PillarDifferences?: Array<PillarDifference>;
	}

	/** The differences between the base and latest versions of the lens. */
	export interface VersionDifferencesFormProperties {
	}
	export function CreateVersionDifferencesFormGroup() {
		return new FormGroup<VersionDifferencesFormProperties>({
		});

	}


	/** A pillar difference return object. */
	export interface PillarDifference {

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId?: string | null;

		/**
		 * The name of the pillar.
		 * Max length: 128
		 * Min length: 1
		 */
		PillarName?: string | null;
		DifferenceStatus?: DifferenceStatus;
		QuestionDifferences?: Array<QuestionDifference>;
	}

	/** A pillar difference return object. */
	export interface PillarDifferenceFormProperties {

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId: FormControl<string | null | undefined>,

		/**
		 * The name of the pillar.
		 * Max length: 128
		 * Min length: 1
		 */
		PillarName: FormControl<string | null | undefined>,
		DifferenceStatus: FormControl<DifferenceStatus | null | undefined>,
	}
	export function CreatePillarDifferenceFormGroup() {
		return new FormGroup<PillarDifferenceFormProperties>({
			PillarId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			PillarName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			DifferenceStatus: new FormControl<DifferenceStatus | null | undefined>(undefined),
		});

	}

	export enum DifferenceStatus { UPDATED = 'UPDATED', NEW = 'NEW', DELETED = 'DELETED' }


	/** A question difference return object. */
	export interface QuestionDifference {

		/**
		 * The ID of the question.
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId?: string | null;

		/**
		 * The title of the question.
		 * Max length: 512
		 * Min length: 1
		 */
		QuestionTitle?: string | null;
		DifferenceStatus?: DifferenceStatus;
	}

	/** A question difference return object. */
	export interface QuestionDifferenceFormProperties {

		/**
		 * The ID of the question.
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId: FormControl<string | null | undefined>,

		/**
		 * The title of the question.
		 * Max length: 512
		 * Min length: 1
		 */
		QuestionTitle: FormControl<string | null | undefined>,
		DifferenceStatus: FormControl<DifferenceStatus | null | undefined>,
	}
	export function CreateQuestionDifferenceFormGroup() {
		return new FormGroup<QuestionDifferenceFormProperties>({
			QuestionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			QuestionTitle: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			DifferenceStatus: new FormControl<DifferenceStatus | null | undefined>(undefined),
		});

	}


	/** Output of a get milestone call. */
	export interface GetMilestoneOutput {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/** A milestone return object. */
		Milestone?: Milestone;
	}

	/** Output of a get milestone call. */
	export interface GetMilestoneOutputFormProperties {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,
	}
	export function CreateGetMilestoneOutputFormGroup() {
		return new FormGroup<GetMilestoneOutputFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
		});

	}


	/** A milestone return object. */
	export interface Milestone {

		/**
		 * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MilestoneNumber?: number | null;

		/**
		 * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		MilestoneName?: string | null;

		/** The date and time recorded. */
		RecordedAt?: Date | null;

		/** A workload return object. */
		Workload?: Workload;
	}

	/** A milestone return object. */
	export interface MilestoneFormProperties {

		/**
		 * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MilestoneNumber: FormControl<number | null | undefined>,

		/**
		 * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		MilestoneName: FormControl<string | null | undefined>,

		/** The date and time recorded. */
		RecordedAt: FormControl<Date | null | undefined>,
	}
	export function CreateMilestoneFormGroup() {
		return new FormGroup<MilestoneFormProperties>({
			MilestoneNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			MilestoneName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(100)]),
			RecordedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A workload return object. */
	export interface Workload {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/** The ARN for the workload. */
		WorkloadArn?: string | null;

		/**
		 * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		WorkloadName?: string | null;

		/**
		 * The description for the workload.
		 * Max length: 250
		 * Min length: 3
		 */
		Description?: string | null;

		/** The environment for the workload. */
		Environment?: WorkloadEnvironment | null;

		/** The date and time recorded. */
		UpdatedAt?: Date | null;

		/**
		 * The list of Amazon Web Services account IDs associated with the workload.
		 * Maximum items: 100
		 */
		AccountIds?: Array<string>;

		/**
		 * The list of Amazon Web Services Regions associated with the workload, for example, <code>us-east-2</code>, or <code>ca-central-1</code>.
		 * Maximum items: 50
		 */
		AwsRegions?: Array<string>;

		/**
		 * The list of non-Amazon Web Services Regions associated with the workload.
		 * Maximum items: 5
		 */
		NonAwsRegions?: Array<string>;

		/**
		 * The URL of the architectural design for the workload.
		 * Max length: 2048
		 */
		ArchitecturalDesign?: string | null;

		/**
		 * The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.
		 * Max length: 255
		 * Min length: 3
		 */
		ReviewOwner?: string | null;

		/** The date and time recorded. */
		ReviewRestrictionDate?: Date | null;
		IsReviewOwnerUpdateAcknowledged?: boolean | null;

		/**
		 * <p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>
		 * Max length: 100
		 */
		IndustryType?: string | null;

		/**
		 * The industry for the workload.
		 * Max length: 100
		 */
		Industry?: string | null;

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		Notes?: string | null;

		/** The improvement status for a workload. */
		ImprovementStatus?: WorkloadImprovementStatus | null;

		/** A map from risk names to the count of how many questions have that rating. */
		RiskCounts?: RiskCounts;

		/** The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>. */
		PillarPriorities?: Array<string>;

		/** The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>. */
		Lenses?: Array<string>;

		/**
		 * An Amazon Web Services account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		Owner?: string | null;
		ShareInvitationId?: string;
		Tags?: TagMap;
		DiscoveryConfig?: WorkloadDiscoveryConfig;
		Applications?: Array<string>;
		Profiles?: Array<WorkloadProfile>;

		/** A map from risk names to the count of how many questions have that rating. */
		PrioritizedRiskCounts?: RiskCounts;
	}

	/** A workload return object. */
	export interface WorkloadFormProperties {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,

		/** The ARN for the workload. */
		WorkloadArn: FormControl<string | null | undefined>,

		/**
		 * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		WorkloadName: FormControl<string | null | undefined>,

		/**
		 * The description for the workload.
		 * Max length: 250
		 * Min length: 3
		 */
		Description: FormControl<string | null | undefined>,

		/** The environment for the workload. */
		Environment: FormControl<WorkloadEnvironment | null | undefined>,

		/** The date and time recorded. */
		UpdatedAt: FormControl<Date | null | undefined>,

		/**
		 * The URL of the architectural design for the workload.
		 * Max length: 2048
		 */
		ArchitecturalDesign: FormControl<string | null | undefined>,

		/**
		 * The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.
		 * Max length: 255
		 * Min length: 3
		 */
		ReviewOwner: FormControl<string | null | undefined>,

		/** The date and time recorded. */
		ReviewRestrictionDate: FormControl<Date | null | undefined>,
		IsReviewOwnerUpdateAcknowledged: FormControl<boolean | null | undefined>,

		/**
		 * <p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>
		 * Max length: 100
		 */
		IndustryType: FormControl<string | null | undefined>,

		/**
		 * The industry for the workload.
		 * Max length: 100
		 */
		Industry: FormControl<string | null | undefined>,

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		Notes: FormControl<string | null | undefined>,

		/** The improvement status for a workload. */
		ImprovementStatus: FormControl<WorkloadImprovementStatus | null | undefined>,

		/**
		 * An Amazon Web Services account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		Owner: FormControl<string | null | undefined>,
		ShareInvitationId: FormControl<string | null | undefined>,
	}
	export function CreateWorkloadFormGroup() {
		return new FormGroup<WorkloadFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
			WorkloadArn: new FormControl<string | null | undefined>(undefined),
			WorkloadName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(100)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(250)]),
			Environment: new FormControl<WorkloadEnvironment | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			ArchitecturalDesign: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('^(|(https?|ftp):\/\/[^\s/$.?#].[^\s]*)$')]),
			ReviewOwner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(255)]),
			ReviewRestrictionDate: new FormControl<Date | null | undefined>(undefined),
			IsReviewOwnerUpdateAcknowledged: new FormControl<boolean | null | undefined>(undefined),
			IndustryType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Industry: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Notes: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2084)]),
			ImprovementStatus: new FormControl<WorkloadImprovementStatus | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12}')]),
			ShareInvitationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WorkloadEnvironment { PRODUCTION = 'PRODUCTION', PREPRODUCTION = 'PREPRODUCTION' }

	export enum WorkloadImprovementStatus { NOT_APPLICABLE = 'NOT_APPLICABLE', NOT_STARTED = 'NOT_STARTED', IN_PROGRESS = 'IN_PROGRESS', COMPLETE = 'COMPLETE', RISK_ACKNOWLEDGED = 'RISK_ACKNOWLEDGED' }


	/** Discovery configuration associated to the workload. */
	export interface WorkloadDiscoveryConfig {
		TrustedAdvisorIntegrationStatus?: TrustedAdvisorIntegrationStatus;
		WorkloadResourceDefinition?: Array<DefinitionType>;
	}

	/** Discovery configuration associated to the workload. */
	export interface WorkloadDiscoveryConfigFormProperties {
		TrustedAdvisorIntegrationStatus: FormControl<TrustedAdvisorIntegrationStatus | null | undefined>,
	}
	export function CreateWorkloadDiscoveryConfigFormGroup() {
		return new FormGroup<WorkloadDiscoveryConfigFormProperties>({
			TrustedAdvisorIntegrationStatus: new FormControl<TrustedAdvisorIntegrationStatus | null | undefined>(undefined),
		});

	}

	export interface GetProfileOutput {
		Profile?: Profile;
	}
	export interface GetProfileOutputFormProperties {
	}
	export function CreateGetProfileOutputFormGroup() {
		return new FormGroup<GetProfileOutputFormProperties>({
		});

	}


	/** A profile. */
	export interface Profile {
		ProfileArn?: string;
		ProfileVersion?: string;
		ProfileName?: string;
		ProfileDescription?: string;
		ProfileQuestions?: Array<ProfileQuestion>;

		/**
		 * An Amazon Web Services account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		Owner?: string | null;

		/** The date and time recorded. */
		CreatedAt?: Date | null;

		/** The date and time recorded. */
		UpdatedAt?: Date | null;
		ShareInvitationId?: string;
		Tags?: TagMap;
	}

	/** A profile. */
	export interface ProfileFormProperties {
		ProfileArn: FormControl<string | null | undefined>,
		ProfileVersion: FormControl<string | null | undefined>,
		ProfileName: FormControl<string | null | undefined>,
		ProfileDescription: FormControl<string | null | undefined>,

		/**
		 * An Amazon Web Services account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		Owner: FormControl<string | null | undefined>,

		/** The date and time recorded. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** The date and time recorded. */
		UpdatedAt: FormControl<Date | null | undefined>,
		ShareInvitationId: FormControl<string | null | undefined>,
	}
	export function CreateProfileFormGroup() {
		return new FormGroup<ProfileFormProperties>({
			ProfileArn: new FormControl<string | null | undefined>(undefined),
			ProfileVersion: new FormControl<string | null | undefined>(undefined),
			ProfileName: new FormControl<string | null | undefined>(undefined),
			ProfileDescription: new FormControl<string | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12}')]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			ShareInvitationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A profile question. */
	export interface ProfileQuestion {

		/**
		 * The ID of the question.
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId?: string | null;

		/**
		 * The title of the question.
		 * Max length: 512
		 * Min length: 1
		 */
		QuestionTitle?: string | null;

		/**
		 * The description of the question.
		 * Max length: 1024
		 * Min length: 1
		 */
		QuestionDescription?: string | null;
		QuestionChoices?: Array<ProfileChoice>;
		SelectedChoiceIds?: Array<string>;
		MinSelectedChoices?: number | null;
		MaxSelectedChoices?: number | null;
	}

	/** A profile question. */
	export interface ProfileQuestionFormProperties {

		/**
		 * The ID of the question.
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId: FormControl<string | null | undefined>,

		/**
		 * The title of the question.
		 * Max length: 512
		 * Min length: 1
		 */
		QuestionTitle: FormControl<string | null | undefined>,

		/**
		 * The description of the question.
		 * Max length: 1024
		 * Min length: 1
		 */
		QuestionDescription: FormControl<string | null | undefined>,
		MinSelectedChoices: FormControl<number | null | undefined>,
		MaxSelectedChoices: FormControl<number | null | undefined>,
	}
	export function CreateProfileQuestionFormGroup() {
		return new FormGroup<ProfileQuestionFormProperties>({
			QuestionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			QuestionTitle: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			QuestionDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			MinSelectedChoices: new FormControl<number | null | undefined>(undefined),
			MaxSelectedChoices: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The profile choice. */
	export interface ProfileChoice {

		/**
		 * The ID of a choice.
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId?: string | null;

		/**
		 * The title of a choice.
		 * Max length: 512
		 * Min length: 1
		 */
		ChoiceTitle?: string | null;

		/**
		 * The description of a choice.
		 * Max length: 1024
		 * Min length: 1
		 */
		ChoiceDescription?: string | null;
	}

	/** The profile choice. */
	export interface ProfileChoiceFormProperties {

		/**
		 * The ID of a choice.
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId: FormControl<string | null | undefined>,

		/**
		 * The title of a choice.
		 * Max length: 512
		 * Min length: 1
		 */
		ChoiceTitle: FormControl<string | null | undefined>,

		/**
		 * The description of a choice.
		 * Max length: 1024
		 * Min length: 1
		 */
		ChoiceDescription: FormControl<string | null | undefined>,
	}
	export function CreateProfileChoiceFormGroup() {
		return new FormGroup<ProfileChoiceFormProperties>({
			ChoiceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			ChoiceTitle: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			ChoiceDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}

	export interface GetProfileTemplateOutput {
		ProfileTemplate?: ProfileTemplate;
	}
	export interface GetProfileTemplateOutputFormProperties {
	}
	export function CreateGetProfileTemplateOutputFormGroup() {
		return new FormGroup<GetProfileTemplateOutputFormProperties>({
		});

	}


	/** The profile template. */
	export interface ProfileTemplate {
		TemplateName?: string;
		TemplateQuestions?: Array<ProfileTemplateQuestion>;

		/** The date and time recorded. */
		CreatedAt?: Date | null;

		/** The date and time recorded. */
		UpdatedAt?: Date | null;
	}

	/** The profile template. */
	export interface ProfileTemplateFormProperties {
		TemplateName: FormControl<string | null | undefined>,

		/** The date and time recorded. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** The date and time recorded. */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateProfileTemplateFormGroup() {
		return new FormGroup<ProfileTemplateFormProperties>({
			TemplateName: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A profile template question. */
	export interface ProfileTemplateQuestion {

		/**
		 * The ID of the question.
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId?: string | null;

		/**
		 * The title of the question.
		 * Max length: 512
		 * Min length: 1
		 */
		QuestionTitle?: string | null;

		/**
		 * The description of the question.
		 * Max length: 1024
		 * Min length: 1
		 */
		QuestionDescription?: string | null;
		QuestionChoices?: Array<ProfileTemplateChoice>;
		MinSelectedChoices?: number | null;
		MaxSelectedChoices?: number | null;
	}

	/** A profile template question. */
	export interface ProfileTemplateQuestionFormProperties {

		/**
		 * The ID of the question.
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId: FormControl<string | null | undefined>,

		/**
		 * The title of the question.
		 * Max length: 512
		 * Min length: 1
		 */
		QuestionTitle: FormControl<string | null | undefined>,

		/**
		 * The description of the question.
		 * Max length: 1024
		 * Min length: 1
		 */
		QuestionDescription: FormControl<string | null | undefined>,
		MinSelectedChoices: FormControl<number | null | undefined>,
		MaxSelectedChoices: FormControl<number | null | undefined>,
	}
	export function CreateProfileTemplateQuestionFormGroup() {
		return new FormGroup<ProfileTemplateQuestionFormProperties>({
			QuestionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			QuestionTitle: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			QuestionDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			MinSelectedChoices: new FormControl<number | null | undefined>(undefined),
			MaxSelectedChoices: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A profile template choice. */
	export interface ProfileTemplateChoice {

		/**
		 * The ID of a choice.
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId?: string | null;

		/**
		 * The title of a choice.
		 * Max length: 512
		 * Min length: 1
		 */
		ChoiceTitle?: string | null;

		/**
		 * The description of a choice.
		 * Max length: 1024
		 * Min length: 1
		 */
		ChoiceDescription?: string | null;
	}

	/** A profile template choice. */
	export interface ProfileTemplateChoiceFormProperties {

		/**
		 * The ID of a choice.
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId: FormControl<string | null | undefined>,

		/**
		 * The title of a choice.
		 * Max length: 512
		 * Min length: 1
		 */
		ChoiceTitle: FormControl<string | null | undefined>,

		/**
		 * The description of a choice.
		 * Max length: 1024
		 * Min length: 1
		 */
		ChoiceDescription: FormControl<string | null | undefined>,
	}
	export function CreateProfileTemplateChoiceFormGroup() {
		return new FormGroup<ProfileTemplateChoiceFormProperties>({
			ChoiceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			ChoiceTitle: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			ChoiceDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

	}


	/** Output of a get workload call. */
	export interface GetWorkloadOutput {

		/** A workload return object. */
		Workload?: Workload;
	}

	/** Output of a get workload call. */
	export interface GetWorkloadOutputFormProperties {
	}
	export function CreateGetWorkloadOutputFormGroup() {
		return new FormGroup<GetWorkloadOutputFormProperties>({
		});

	}

	export interface ImportLensOutput {
		LensArn?: string;
		Status?: ImportLensStatus;
	}
	export interface ImportLensOutputFormProperties {
		LensArn: FormControl<string | null | undefined>,
		Status: FormControl<ImportLensStatus | null | undefined>,
	}
	export function CreateImportLensOutputFormGroup() {
		return new FormGroup<ImportLensOutputFormProperties>({
			LensArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ImportLensStatus | null | undefined>(undefined),
		});

	}

	export enum ImportLensStatus { IN_PROGRESS = 'IN_PROGRESS', COMPLETE = 'COMPLETE', ERROR = 'ERROR' }


	/** Output of a list answers call. */
	export interface ListAnswersOutput {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/**
		 * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MilestoneNumber?: number | null;

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias?: string | null;
		LensArn?: string;

		/** List of answer summaries of lens review in a workload. */
		AnswerSummaries?: Array<AnswerSummary>;

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;
	}

	/** Output of a list answers call. */
	export interface ListAnswersOutputFormProperties {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,

		/**
		 * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MilestoneNumber: FormControl<number | null | undefined>,

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias: FormControl<string | null | undefined>,
		LensArn: FormControl<string | null | undefined>,

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnswersOutputFormGroup() {
		return new FormGroup<ListAnswersOutputFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
			MilestoneNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			LensAlias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			LensArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An answer summary of a lens review in a workload. */
	export interface AnswerSummary {

		/**
		 * The ID of the question.
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId?: string | null;

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId?: string | null;

		/**
		 * The title of the question.
		 * Max length: 512
		 * Min length: 1
		 */
		QuestionTitle?: string | null;

		/** List of choices available for a question. */
		Choices?: Array<Choice>;

		/** <p>List of selected choice IDs in a question answer.</p> <p>The values entered replace the previously selected choices.</p> */
		SelectedChoices?: Array<string>;
		ChoiceAnswerSummaries?: Array<ChoiceAnswerSummary>;

		/** Defines whether this question is applicable to a lens review. */
		IsApplicable?: boolean | null;

		/** The risk for a given workload, lens review, pillar, or question. */
		Risk?: AnswerRisk | null;
		Reason?: ChoiceReason;
		QuestionType?: QuestionType;
	}

	/** An answer summary of a lens review in a workload. */
	export interface AnswerSummaryFormProperties {

		/**
		 * The ID of the question.
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId: FormControl<string | null | undefined>,

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId: FormControl<string | null | undefined>,

		/**
		 * The title of the question.
		 * Max length: 512
		 * Min length: 1
		 */
		QuestionTitle: FormControl<string | null | undefined>,

		/** Defines whether this question is applicable to a lens review. */
		IsApplicable: FormControl<boolean | null | undefined>,

		/** The risk for a given workload, lens review, pillar, or question. */
		Risk: FormControl<AnswerRisk | null | undefined>,
		Reason: FormControl<ChoiceReason | null | undefined>,
		QuestionType: FormControl<QuestionType | null | undefined>,
	}
	export function CreateAnswerSummaryFormGroup() {
		return new FormGroup<AnswerSummaryFormProperties>({
			QuestionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			PillarId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			QuestionTitle: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			IsApplicable: new FormControl<boolean | null | undefined>(undefined),
			Risk: new FormControl<AnswerRisk | null | undefined>(undefined),
			Reason: new FormControl<ChoiceReason | null | undefined>(undefined),
			QuestionType: new FormControl<QuestionType | null | undefined>(undefined),
		});

	}


	/** A choice summary that has been answered on a question in your workload. */
	export interface ChoiceAnswerSummary {

		/**
		 * The ID of a choice.
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId?: string | null;
		Status?: ChoiceStatus;
		Reason?: ChoiceReason;
	}

	/** A choice summary that has been answered on a question in your workload. */
	export interface ChoiceAnswerSummaryFormProperties {

		/**
		 * The ID of a choice.
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId: FormControl<string | null | undefined>,
		Status: FormControl<ChoiceStatus | null | undefined>,
		Reason: FormControl<ChoiceReason | null | undefined>,
	}
	export function CreateChoiceAnswerSummaryFormGroup() {
		return new FormGroup<ChoiceAnswerSummaryFormProperties>({
			ChoiceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			Status: new FormControl<ChoiceStatus | null | undefined>(undefined),
			Reason: new FormControl<ChoiceReason | null | undefined>(undefined),
		});

	}

	export enum QuestionType { PRIORITIZED = 'PRIORITIZED', NON_PRIORITIZED = 'NON_PRIORITIZED' }

	export interface ListCheckDetailsOutput {
		CheckDetails?: Array<CheckDetail>;

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;
	}
	export interface ListCheckDetailsOutputFormProperties {

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCheckDetailsOutputFormGroup() {
		return new FormGroup<ListCheckDetailsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Account details for a Well-Architected best practice in relation to Trusted Advisor checks. */
	export interface CheckDetail {
		Id?: string;
		Name?: string;
		Description?: string;
		Provider?: CheckProvider;
		LensArn?: string;

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId?: string | null;

		/**
		 * The ID of the question.
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId?: string | null;

		/**
		 * The ID of a choice.
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId?: string | null;
		Status?: CheckStatus;

		/**
		 * An Amazon Web Services account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId?: string | null;
		FlaggedResources?: number | null;
		Reason?: CheckFailureReason;

		/** The date and time recorded. */
		UpdatedAt?: Date | null;
	}

	/** Account details for a Well-Architected best practice in relation to Trusted Advisor checks. */
	export interface CheckDetailFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Provider: FormControl<CheckProvider | null | undefined>,
		LensArn: FormControl<string | null | undefined>,

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId: FormControl<string | null | undefined>,

		/**
		 * The ID of the question.
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId: FormControl<string | null | undefined>,

		/**
		 * The ID of a choice.
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId: FormControl<string | null | undefined>,
		Status: FormControl<CheckStatus | null | undefined>,

		/**
		 * An Amazon Web Services account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: FormControl<string | null | undefined>,
		FlaggedResources: FormControl<number | null | undefined>,
		Reason: FormControl<CheckFailureReason | null | undefined>,

		/** The date and time recorded. */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateCheckDetailFormGroup() {
		return new FormGroup<CheckDetailFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Provider: new FormControl<CheckProvider | null | undefined>(undefined),
			LensArn: new FormControl<string | null | undefined>(undefined),
			PillarId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			QuestionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			ChoiceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			Status: new FormControl<CheckStatus | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12}')]),
			FlaggedResources: new FormControl<number | null | undefined>(undefined),
			Reason: new FormControl<CheckFailureReason | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum CheckProvider { TRUSTED_ADVISOR = 'TRUSTED_ADVISOR' }

	export enum CheckStatus { OKAY = 'OKAY', WARNING = 'WARNING', ERROR = 'ERROR', NOT_AVAILABLE = 'NOT_AVAILABLE', FETCH_FAILED = 'FETCH_FAILED' }

	export enum CheckFailureReason { ASSUME_ROLE_ERROR = 'ASSUME_ROLE_ERROR', ACCESS_DENIED = 'ACCESS_DENIED', UNKNOWN_ERROR = 'UNKNOWN_ERROR', PREMIUM_SUPPORT_REQUIRED = 'PREMIUM_SUPPORT_REQUIRED' }

	export interface ListCheckSummariesOutput {
		CheckSummaries?: Array<CheckSummary>;

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;
	}
	export interface ListCheckSummariesOutputFormProperties {

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCheckSummariesOutputFormGroup() {
		return new FormGroup<ListCheckSummariesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Trusted Advisor check summary. */
	export interface CheckSummary {
		Id?: string;
		Name?: string;
		Provider?: CheckProvider;
		Description?: string;

		/** The date and time recorded. */
		UpdatedAt?: Date | null;
		LensArn?: string;

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId?: string | null;

		/**
		 * The ID of the question.
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId?: string | null;

		/**
		 * The ID of a choice.
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId?: string | null;
		Status?: CheckStatus;
		AccountSummary?: AccountSummary;
	}

	/** Trusted Advisor check summary. */
	export interface CheckSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Provider: FormControl<CheckProvider | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** The date and time recorded. */
		UpdatedAt: FormControl<Date | null | undefined>,
		LensArn: FormControl<string | null | undefined>,

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId: FormControl<string | null | undefined>,

		/**
		 * The ID of the question.
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId: FormControl<string | null | undefined>,

		/**
		 * The ID of a choice.
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId: FormControl<string | null | undefined>,
		Status: FormControl<CheckStatus | null | undefined>,
	}
	export function CreateCheckSummaryFormGroup() {
		return new FormGroup<CheckSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Provider: new FormControl<CheckProvider | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			LensArn: new FormControl<string | null | undefined>(undefined),
			PillarId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			QuestionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			ChoiceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			Status: new FormControl<CheckStatus | null | undefined>(undefined),
		});

	}


	/** Account summary for a Well-Architected best practice in relation to Trusted Advisor checks. */
	export interface AccountSummary {
	}

	/** Account summary for a Well-Architected best practice in relation to Trusted Advisor checks. */
	export interface AccountSummaryFormProperties {
	}
	export function CreateAccountSummaryFormGroup() {
		return new FormGroup<AccountSummaryFormProperties>({
		});

	}


	/** Output of a list lens review improvements call. */
	export interface ListLensReviewImprovementsOutput {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/**
		 * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MilestoneNumber?: number | null;

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias?: string | null;
		LensArn?: string;

		/** List of improvement summaries of lens review in a workload. */
		ImprovementSummaries?: Array<ImprovementSummary>;

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;
	}

	/** Output of a list lens review improvements call. */
	export interface ListLensReviewImprovementsOutputFormProperties {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,

		/**
		 * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MilestoneNumber: FormControl<number | null | undefined>,

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias: FormControl<string | null | undefined>,
		LensArn: FormControl<string | null | undefined>,

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLensReviewImprovementsOutputFormGroup() {
		return new FormGroup<ListLensReviewImprovementsOutputFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
			MilestoneNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			LensAlias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			LensArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An improvement summary of a lens review in a workload. */
	export interface ImprovementSummary {

		/**
		 * The ID of the question.
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId?: string | null;

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId?: string | null;

		/**
		 * The title of the question.
		 * Max length: 512
		 * Min length: 1
		 */
		QuestionTitle?: string | null;

		/** The risk for a given workload, lens review, pillar, or question. */
		Risk?: AnswerRisk | null;

		/**
		 * <p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p> <p>This value is only available if the question has been answered.</p> <p>This value does not apply to custom lenses.</p>
		 * Max length: 2048
		 * Min length: 1
		 */
		ImprovementPlanUrl?: string | null;
		ImprovementPlans?: Array<ChoiceImprovementPlan>;
	}

	/** An improvement summary of a lens review in a workload. */
	export interface ImprovementSummaryFormProperties {

		/**
		 * The ID of the question.
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId: FormControl<string | null | undefined>,

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId: FormControl<string | null | undefined>,

		/**
		 * The title of the question.
		 * Max length: 512
		 * Min length: 1
		 */
		QuestionTitle: FormControl<string | null | undefined>,

		/** The risk for a given workload, lens review, pillar, or question. */
		Risk: FormControl<AnswerRisk | null | undefined>,

		/**
		 * <p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p> <p>This value is only available if the question has been answered.</p> <p>This value does not apply to custom lenses.</p>
		 * Max length: 2048
		 * Min length: 1
		 */
		ImprovementPlanUrl: FormControl<string | null | undefined>,
	}
	export function CreateImprovementSummaryFormGroup() {
		return new FormGroup<ImprovementSummaryFormProperties>({
			QuestionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			PillarId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			QuestionTitle: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512)]),
			Risk: new FormControl<AnswerRisk | null | undefined>(undefined),
			ImprovementPlanUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}


	/** The choice level improvement plan. */
	export interface ChoiceImprovementPlan {

		/**
		 * The ID of a choice.
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId?: string | null;
		DisplayText?: string;

		/**
		 * <p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p> <p>This value is only available if the question has been answered.</p> <p>This value does not apply to custom lenses.</p>
		 * Max length: 2048
		 * Min length: 1
		 */
		ImprovementPlanUrl?: string | null;
	}

	/** The choice level improvement plan. */
	export interface ChoiceImprovementPlanFormProperties {

		/**
		 * The ID of a choice.
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId: FormControl<string | null | undefined>,
		DisplayText: FormControl<string | null | undefined>,

		/**
		 * <p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p> <p>This value is only available if the question has been answered.</p> <p>This value does not apply to custom lenses.</p>
		 * Max length: 2048
		 * Min length: 1
		 */
		ImprovementPlanUrl: FormControl<string | null | undefined>,
	}
	export function CreateChoiceImprovementPlanFormGroup() {
		return new FormGroup<ChoiceImprovementPlanFormProperties>({
			ChoiceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			DisplayText: new FormControl<string | null | undefined>(undefined),
			ImprovementPlanUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}


	/** Output of a list lens reviews call. */
	export interface ListLensReviewsOutput {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/**
		 * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MilestoneNumber?: number | null;

		/** List of lens summaries of lens reviews of a workload. */
		LensReviewSummaries?: Array<LensReviewSummary>;

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;
	}

	/** Output of a list lens reviews call. */
	export interface ListLensReviewsOutputFormProperties {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,

		/**
		 * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MilestoneNumber: FormControl<number | null | undefined>,

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLensReviewsOutputFormGroup() {
		return new FormGroup<ListLensReviewsOutputFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
			MilestoneNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A lens review summary of a workload. */
	export interface LensReviewSummary {

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias?: string | null;
		LensArn?: string;
		LensVersion?: string;

		/**
		 * The full name of the lens.
		 * Max length: 128
		 * Min length: 1
		 */
		LensName?: string | null;
		LensStatus?: LensStatus;

		/** The date and time recorded. */
		UpdatedAt?: Date | null;

		/** A map from risk names to the count of how many questions have that rating. */
		RiskCounts?: RiskCounts;
		Profiles?: Array<WorkloadProfile>;

		/** A map from risk names to the count of how many questions have that rating. */
		PrioritizedRiskCounts?: RiskCounts;
	}

	/** A lens review summary of a workload. */
	export interface LensReviewSummaryFormProperties {

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias: FormControl<string | null | undefined>,
		LensArn: FormControl<string | null | undefined>,
		LensVersion: FormControl<string | null | undefined>,

		/**
		 * The full name of the lens.
		 * Max length: 128
		 * Min length: 1
		 */
		LensName: FormControl<string | null | undefined>,
		LensStatus: FormControl<LensStatus | null | undefined>,

		/** The date and time recorded. */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateLensReviewSummaryFormGroup() {
		return new FormGroup<LensReviewSummaryFormProperties>({
			LensAlias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			LensArn: new FormControl<string | null | undefined>(undefined),
			LensVersion: new FormControl<string | null | undefined>(undefined),
			LensName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			LensStatus: new FormControl<LensStatus | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListLensSharesOutput {
		LensShareSummaries?: Array<LensShareSummary>;

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;
	}
	export interface ListLensSharesOutputFormProperties {

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLensSharesOutputFormGroup() {
		return new FormGroup<ListLensSharesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A lens share summary return object. */
	export interface LensShareSummary {

		/** The ID associated with the share. */
		ShareId?: string | null;

		/**
		 * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload, lens, or profile is shared.
		 * Max length: 2048
		 * Min length: 12
		 */
		SharedWith?: string | null;

		/** The status of the share request. */
		Status?: LensShareSummaryStatus | null;
		StatusMessage?: string;
	}

	/** A lens share summary return object. */
	export interface LensShareSummaryFormProperties {

		/** The ID associated with the share. */
		ShareId: FormControl<string | null | undefined>,

		/**
		 * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload, lens, or profile is shared.
		 * Max length: 2048
		 * Min length: 12
		 */
		SharedWith: FormControl<string | null | undefined>,

		/** The status of the share request. */
		Status: FormControl<LensShareSummaryStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateLensShareSummaryFormGroup() {
		return new FormGroup<LensShareSummaryFormProperties>({
			ShareId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9a-f]{32}')]),
			SharedWith: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(2048)]),
			Status: new FormControl<LensShareSummaryStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LensShareSummaryStatus { ACCEPTED = 'ACCEPTED', REJECTED = 'REJECTED', PENDING = 'PENDING', REVOKED = 'REVOKED', EXPIRED = 'EXPIRED', ASSOCIATING = 'ASSOCIATING', ASSOCIATED = 'ASSOCIATED', FAILED = 'FAILED' }


	/** Output of a list lenses call. */
	export interface ListLensesOutput {

		/** List of lens summaries of available lenses. */
		LensSummaries?: Array<LensSummary>;

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;
	}

	/** Output of a list lenses call. */
	export interface ListLensesOutputFormProperties {

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLensesOutputFormGroup() {
		return new FormGroup<ListLensesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A lens summary of a lens. */
	export interface LensSummary {
		LensArn?: string;

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias?: string | null;

		/**
		 * The full name of the lens.
		 * Max length: 128
		 * Min length: 1
		 */
		LensName?: string | null;
		LensType?: LensType;

		/**
		 * The description of the lens.
		 * Max length: 1024
		 * Min length: 1
		 */
		Description?: string | null;

		/** The date and time recorded. */
		CreatedAt?: Date | null;

		/** The date and time recorded. */
		UpdatedAt?: Date | null;
		LensVersion?: string;

		/**
		 * An Amazon Web Services account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		Owner?: string | null;
		LensStatus?: LensStatus;
	}

	/** A lens summary of a lens. */
	export interface LensSummaryFormProperties {
		LensArn: FormControl<string | null | undefined>,

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias: FormControl<string | null | undefined>,

		/**
		 * The full name of the lens.
		 * Max length: 128
		 * Min length: 1
		 */
		LensName: FormControl<string | null | undefined>,
		LensType: FormControl<LensType | null | undefined>,

		/**
		 * The description of the lens.
		 * Max length: 1024
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/** The date and time recorded. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** The date and time recorded. */
		UpdatedAt: FormControl<Date | null | undefined>,
		LensVersion: FormControl<string | null | undefined>,

		/**
		 * An Amazon Web Services account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		Owner: FormControl<string | null | undefined>,
		LensStatus: FormControl<LensStatus | null | undefined>,
	}
	export function CreateLensSummaryFormGroup() {
		return new FormGroup<LensSummaryFormProperties>({
			LensArn: new FormControl<string | null | undefined>(undefined),
			LensAlias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			LensName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			LensType: new FormControl<LensType | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			LensVersion: new FormControl<string | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12}')]),
			LensStatus: new FormControl<LensStatus | null | undefined>(undefined),
		});

	}

	export enum LensType { AWS_OFFICIAL = 'AWS_OFFICIAL', CUSTOM_SHARED = 'CUSTOM_SHARED', CUSTOM_SELF = 'CUSTOM_SELF' }


	/** Output of a list milestones call. */
	export interface ListMilestonesOutput {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/** A list of milestone summaries. */
		MilestoneSummaries?: Array<MilestoneSummary>;

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;
	}

	/** Output of a list milestones call. */
	export interface ListMilestonesOutputFormProperties {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMilestonesOutputFormGroup() {
		return new FormGroup<ListMilestonesOutputFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A milestone summary return object. */
	export interface MilestoneSummary {

		/**
		 * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MilestoneNumber?: number | null;

		/**
		 * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		MilestoneName?: string | null;

		/** The date and time recorded. */
		RecordedAt?: Date | null;

		/** A workload summary return object. */
		WorkloadSummary?: WorkloadSummary;
	}

	/** A milestone summary return object. */
	export interface MilestoneSummaryFormProperties {

		/**
		 * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MilestoneNumber: FormControl<number | null | undefined>,

		/**
		 * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		MilestoneName: FormControl<string | null | undefined>,

		/** The date and time recorded. */
		RecordedAt: FormControl<Date | null | undefined>,
	}
	export function CreateMilestoneSummaryFormGroup() {
		return new FormGroup<MilestoneSummaryFormProperties>({
			MilestoneNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			MilestoneName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(100)]),
			RecordedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A workload summary return object. */
	export interface WorkloadSummary {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/** The ARN for the workload. */
		WorkloadArn?: string | null;

		/**
		 * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		WorkloadName?: string | null;

		/**
		 * An Amazon Web Services account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		Owner?: string | null;

		/** The date and time recorded. */
		UpdatedAt?: Date | null;

		/** The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>. */
		Lenses?: Array<string>;

		/** A map from risk names to the count of how many questions have that rating. */
		RiskCounts?: RiskCounts;

		/** The improvement status for a workload. */
		ImprovementStatus?: WorkloadImprovementStatus | null;
		Profiles?: Array<WorkloadProfile>;

		/** A map from risk names to the count of how many questions have that rating. */
		PrioritizedRiskCounts?: RiskCounts;
	}

	/** A workload summary return object. */
	export interface WorkloadSummaryFormProperties {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,

		/** The ARN for the workload. */
		WorkloadArn: FormControl<string | null | undefined>,

		/**
		 * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		WorkloadName: FormControl<string | null | undefined>,

		/**
		 * An Amazon Web Services account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		Owner: FormControl<string | null | undefined>,

		/** The date and time recorded. */
		UpdatedAt: FormControl<Date | null | undefined>,

		/** The improvement status for a workload. */
		ImprovementStatus: FormControl<WorkloadImprovementStatus | null | undefined>,
	}
	export function CreateWorkloadSummaryFormGroup() {
		return new FormGroup<WorkloadSummaryFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
			WorkloadArn: new FormControl<string | null | undefined>(undefined),
			WorkloadName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(100)]),
			Owner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12}')]),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			ImprovementStatus: new FormControl<WorkloadImprovementStatus | null | undefined>(undefined),
		});

	}

	export interface ListNotificationsOutput {
		NotificationSummaries?: Array<NotificationSummary>;

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;
	}
	export interface ListNotificationsOutputFormProperties {

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNotificationsOutputFormGroup() {
		return new FormGroup<ListNotificationsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A notification summary return object. */
	export interface NotificationSummary {
		Type?: NotificationType;
		LensUpgradeSummary?: LensUpgradeSummary;
	}

	/** A notification summary return object. */
	export interface NotificationSummaryFormProperties {
		Type: FormControl<NotificationType | null | undefined>,
	}
	export function CreateNotificationSummaryFormGroup() {
		return new FormGroup<NotificationSummaryFormProperties>({
			Type: new FormControl<NotificationType | null | undefined>(undefined),
		});

	}

	export enum NotificationType { LENS_VERSION_UPGRADED = 'LENS_VERSION_UPGRADED', LENS_VERSION_DEPRECATED = 'LENS_VERSION_DEPRECATED' }


	/** Lens upgrade summary return object. */
	export interface LensUpgradeSummary {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/**
		 * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		WorkloadName?: string | null;

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias?: string | null;
		LensArn?: string;
		CurrentLensVersion?: string;
		LatestLensVersion?: string;
	}

	/** Lens upgrade summary return object. */
	export interface LensUpgradeSummaryFormProperties {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,

		/**
		 * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		WorkloadName: FormControl<string | null | undefined>,

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias: FormControl<string | null | undefined>,
		LensArn: FormControl<string | null | undefined>,
		CurrentLensVersion: FormControl<string | null | undefined>,
		LatestLensVersion: FormControl<string | null | undefined>,
	}
	export function CreateLensUpgradeSummaryFormGroup() {
		return new FormGroup<LensUpgradeSummaryFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
			WorkloadName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(100)]),
			LensAlias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			LensArn: new FormControl<string | null | undefined>(undefined),
			CurrentLensVersion: new FormControl<string | null | undefined>(undefined),
			LatestLensVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProfileNotificationsOutput {
		NotificationSummaries?: Array<ProfileNotificationSummary>;

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;
	}
	export interface ListProfileNotificationsOutputFormProperties {

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProfileNotificationsOutputFormGroup() {
		return new FormGroup<ListProfileNotificationsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The profile notification summary. */
	export interface ProfileNotificationSummary {
		CurrentProfileVersion?: string;
		LatestProfileVersion?: string;
		Type?: ProfileNotificationType;
		ProfileArn?: string;
		ProfileName?: string;

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/**
		 * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		WorkloadName?: string | null;
	}

	/** The profile notification summary. */
	export interface ProfileNotificationSummaryFormProperties {
		CurrentProfileVersion: FormControl<string | null | undefined>,
		LatestProfileVersion: FormControl<string | null | undefined>,
		Type: FormControl<ProfileNotificationType | null | undefined>,
		ProfileArn: FormControl<string | null | undefined>,
		ProfileName: FormControl<string | null | undefined>,

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,

		/**
		 * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		WorkloadName: FormControl<string | null | undefined>,
	}
	export function CreateProfileNotificationSummaryFormGroup() {
		return new FormGroup<ProfileNotificationSummaryFormProperties>({
			CurrentProfileVersion: new FormControl<string | null | undefined>(undefined),
			LatestProfileVersion: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ProfileNotificationType | null | undefined>(undefined),
			ProfileArn: new FormControl<string | null | undefined>(undefined),
			ProfileName: new FormControl<string | null | undefined>(undefined),
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
			WorkloadName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(100)]),
		});

	}

	export enum ProfileNotificationType { PROFILE_ANSWERS_UPDATED = 'PROFILE_ANSWERS_UPDATED', PROFILE_DELETED = 'PROFILE_DELETED' }

	export interface ListProfileSharesOutput {
		ProfileShareSummaries?: Array<ProfileShareSummary>;

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;
	}
	export interface ListProfileSharesOutputFormProperties {

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProfileSharesOutputFormGroup() {
		return new FormGroup<ListProfileSharesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of a profile share. */
	export interface ProfileShareSummary {

		/** The ID associated with the share. */
		ShareId?: string | null;

		/**
		 * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload, lens, or profile is shared.
		 * Max length: 2048
		 * Min length: 12
		 */
		SharedWith?: string | null;

		/** The status of the share request. */
		Status?: LensShareSummaryStatus | null;
		StatusMessage?: string;
	}

	/** Summary of a profile share. */
	export interface ProfileShareSummaryFormProperties {

		/** The ID associated with the share. */
		ShareId: FormControl<string | null | undefined>,

		/**
		 * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload, lens, or profile is shared.
		 * Max length: 2048
		 * Min length: 12
		 */
		SharedWith: FormControl<string | null | undefined>,

		/** The status of the share request. */
		Status: FormControl<LensShareSummaryStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateProfileShareSummaryFormGroup() {
		return new FormGroup<ProfileShareSummaryFormProperties>({
			ShareId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9a-f]{32}')]),
			SharedWith: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(2048)]),
			Status: new FormControl<LensShareSummaryStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProfilesOutput {
		ProfileSummaries?: Array<ProfileSummary>;

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;
	}
	export interface ListProfilesOutputFormProperties {

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProfilesOutputFormGroup() {
		return new FormGroup<ListProfilesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of a profile. */
	export interface ProfileSummary {
		ProfileArn?: string;
		ProfileVersion?: string;
		ProfileName?: string;
		ProfileDescription?: string;

		/**
		 * An Amazon Web Services account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		Owner?: string | null;

		/** The date and time recorded. */
		CreatedAt?: Date | null;

		/** The date and time recorded. */
		UpdatedAt?: Date | null;
	}

	/** Summary of a profile. */
	export interface ProfileSummaryFormProperties {
		ProfileArn: FormControl<string | null | undefined>,
		ProfileVersion: FormControl<string | null | undefined>,
		ProfileName: FormControl<string | null | undefined>,
		ProfileDescription: FormControl<string | null | undefined>,

		/**
		 * An Amazon Web Services account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		Owner: FormControl<string | null | undefined>,

		/** The date and time recorded. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** The date and time recorded. */
		UpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateProfileSummaryFormGroup() {
		return new FormGroup<ProfileSummaryFormProperties>({
			ProfileArn: new FormControl<string | null | undefined>(undefined),
			ProfileVersion: new FormControl<string | null | undefined>(undefined),
			ProfileName: new FormControl<string | null | undefined>(undefined),
			ProfileDescription: new FormControl<string | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12}')]),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Input for List Share Invitations */
	export interface ListShareInvitationsOutput {
		ShareInvitationSummaries?: Array<ShareInvitationSummary>;

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;
	}

	/** Input for List Share Invitations */
	export interface ListShareInvitationsOutputFormProperties {

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListShareInvitationsOutputFormGroup() {
		return new FormGroup<ListShareInvitationsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A share invitation summary return object. */
	export interface ShareInvitationSummary {
		ShareInvitationId?: string;

		/**
		 * An Amazon Web Services account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		SharedBy?: string | null;

		/**
		 * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload, lens, or profile is shared.
		 * Max length: 2048
		 * Min length: 12
		 */
		SharedWith?: string | null;

		/** Permission granted on a share request. */
		PermissionType?: ShareInvitationSummaryPermissionType | null;
		ShareResourceType?: ShareResourceType;

		/**
		 * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		WorkloadName?: string | null;

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/**
		 * The full name of the lens.
		 * Max length: 128
		 * Min length: 1
		 */
		LensName?: string | null;
		LensArn?: string;
		ProfileName?: string;
		ProfileArn?: string;
	}

	/** A share invitation summary return object. */
	export interface ShareInvitationSummaryFormProperties {
		ShareInvitationId: FormControl<string | null | undefined>,

		/**
		 * An Amazon Web Services account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		SharedBy: FormControl<string | null | undefined>,

		/**
		 * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload, lens, or profile is shared.
		 * Max length: 2048
		 * Min length: 12
		 */
		SharedWith: FormControl<string | null | undefined>,

		/** Permission granted on a share request. */
		PermissionType: FormControl<ShareInvitationSummaryPermissionType | null | undefined>,
		ShareResourceType: FormControl<ShareResourceType | null | undefined>,

		/**
		 * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		WorkloadName: FormControl<string | null | undefined>,

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,

		/**
		 * The full name of the lens.
		 * Max length: 128
		 * Min length: 1
		 */
		LensName: FormControl<string | null | undefined>,
		LensArn: FormControl<string | null | undefined>,
		ProfileName: FormControl<string | null | undefined>,
		ProfileArn: FormControl<string | null | undefined>,
	}
	export function CreateShareInvitationSummaryFormGroup() {
		return new FormGroup<ShareInvitationSummaryFormProperties>({
			ShareInvitationId: new FormControl<string | null | undefined>(undefined),
			SharedBy: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12}')]),
			SharedWith: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(2048)]),
			PermissionType: new FormControl<ShareInvitationSummaryPermissionType | null | undefined>(undefined),
			ShareResourceType: new FormControl<ShareResourceType | null | undefined>(undefined),
			WorkloadName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(100)]),
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
			LensName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			LensArn: new FormControl<string | null | undefined>(undefined),
			ProfileName: new FormControl<string | null | undefined>(undefined),
			ProfileArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ShareInvitationSummaryPermissionType { READONLY = 'READONLY', CONTRIBUTOR = 'CONTRIBUTOR' }

	export enum ShareResourceType { WORKLOAD = 'WORKLOAD', LENS = 'LENS', PROFILE = 'PROFILE' }

	export interface ListTagsForResourceOutput {
		Tags?: TagMap;
	}
	export interface ListTagsForResourceOutputFormProperties {
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
		});

	}


	/** Input for List Workload Share */
	export interface ListWorkloadSharesOutput {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/** A list of workload share summaries. */
		WorkloadShareSummaries?: Array<WorkloadShareSummary>;

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;
	}

	/** Input for List Workload Share */
	export interface ListWorkloadSharesOutputFormProperties {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkloadSharesOutputFormGroup() {
		return new FormGroup<ListWorkloadSharesOutputFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A workload share summary return object. */
	export interface WorkloadShareSummary {

		/** The ID associated with the share. */
		ShareId?: string | null;

		/**
		 * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload, lens, or profile is shared.
		 * Max length: 2048
		 * Min length: 12
		 */
		SharedWith?: string | null;

		/** Permission granted on a share request. */
		PermissionType?: ShareInvitationSummaryPermissionType | null;

		/** The status of the share request. */
		Status?: LensShareSummaryStatus | null;
		StatusMessage?: string;
	}

	/** A workload share summary return object. */
	export interface WorkloadShareSummaryFormProperties {

		/** The ID associated with the share. */
		ShareId: FormControl<string | null | undefined>,

		/**
		 * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload, lens, or profile is shared.
		 * Max length: 2048
		 * Min length: 12
		 */
		SharedWith: FormControl<string | null | undefined>,

		/** Permission granted on a share request. */
		PermissionType: FormControl<ShareInvitationSummaryPermissionType | null | undefined>,

		/** The status of the share request. */
		Status: FormControl<LensShareSummaryStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateWorkloadShareSummaryFormGroup() {
		return new FormGroup<WorkloadShareSummaryFormProperties>({
			ShareId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9a-f]{32}')]),
			SharedWith: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(2048)]),
			PermissionType: new FormControl<ShareInvitationSummaryPermissionType | null | undefined>(undefined),
			Status: new FormControl<LensShareSummaryStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output of a list workloads call. */
	export interface ListWorkloadsOutput {

		/** A list of workload summaries. */
		WorkloadSummaries?: Array<WorkloadSummary>;

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;
	}

	/** Output of a list workloads call. */
	export interface ListWorkloadsOutputFormProperties {

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkloadsOutputFormGroup() {
		return new FormGroup<ListWorkloadsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceOutput {
	}
	export interface TagResourceOutputFormProperties {
	}
	export function CreateTagResourceOutputFormGroup() {
		return new FormGroup<TagResourceOutputFormProperties>({
		});

	}

	export interface UntagResourceOutput {
	}
	export interface UntagResourceOutputFormProperties {
	}
	export function CreateUntagResourceOutputFormGroup() {
		return new FormGroup<UntagResourceOutputFormProperties>({
		});

	}


	/** Output of a update answer call. */
	export interface UpdateAnswerOutput {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias?: string | null;
		LensArn?: string;

		/** An answer of the question. */
		Answer?: Answer;
	}

	/** Output of a update answer call. */
	export interface UpdateAnswerOutputFormProperties {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias: FormControl<string | null | undefined>,
		LensArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAnswerOutputFormGroup() {
		return new FormGroup<UpdateAnswerOutputFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
			LensAlias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			LensArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of choices to be updated. */
	export interface ChoiceUpdate {

		/** Required */
		Status: ChoiceStatus;
		Reason?: ChoiceReason;
		Notes?: string;
	}

	/** A list of choices to be updated. */
	export interface ChoiceUpdateFormProperties {

		/** Required */
		Status: FormControl<ChoiceStatus | null | undefined>,
		Reason: FormControl<ChoiceReason | null | undefined>,
		Notes: FormControl<string | null | undefined>,
	}
	export function CreateChoiceUpdateFormGroup() {
		return new FormGroup<ChoiceUpdateFormProperties>({
			Status: new FormControl<ChoiceStatus | null | undefined>(undefined, [Validators.required]),
			Reason: new FormControl<ChoiceReason | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output of a update lens review call. */
	export interface UpdateLensReviewOutput {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/** A lens review of a question. */
		LensReview?: LensReview;
	}

	/** Output of a update lens review call. */
	export interface UpdateLensReviewOutputFormProperties {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLensReviewOutputFormGroup() {
		return new FormGroup<UpdateLensReviewOutputFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
		});

	}

	export interface UpdateProfileOutput {
		Profile?: Profile;
	}
	export interface UpdateProfileOutputFormProperties {
	}
	export function CreateUpdateProfileOutputFormGroup() {
		return new FormGroup<UpdateProfileOutputFormProperties>({
		});

	}

	export interface UpdateShareInvitationOutput {
		ShareInvitation?: ShareInvitation;
	}
	export interface UpdateShareInvitationOutputFormProperties {
	}
	export function CreateUpdateShareInvitationOutputFormGroup() {
		return new FormGroup<UpdateShareInvitationOutputFormProperties>({
		});

	}


	/** The share invitation. */
	export interface ShareInvitation {
		ShareInvitationId?: string;
		ShareResourceType?: ShareResourceType;

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias?: string | null;
		LensArn?: string;
		ProfileArn?: string;
	}

	/** The share invitation. */
	export interface ShareInvitationFormProperties {
		ShareInvitationId: FormControl<string | null | undefined>,
		ShareResourceType: FormControl<ShareResourceType | null | undefined>,

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias: FormControl<string | null | undefined>,
		LensArn: FormControl<string | null | undefined>,
		ProfileArn: FormControl<string | null | undefined>,
	}
	export function CreateShareInvitationFormGroup() {
		return new FormGroup<ShareInvitationFormProperties>({
			ShareInvitationId: new FormControl<string | null | undefined>(undefined),
			ShareResourceType: new FormControl<ShareResourceType | null | undefined>(undefined),
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
			LensAlias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			LensArn: new FormControl<string | null | undefined>(undefined),
			ProfileArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output of an update workload call. */
	export interface UpdateWorkloadOutput {

		/** A workload return object. */
		Workload?: Workload;
	}

	/** Output of an update workload call. */
	export interface UpdateWorkloadOutputFormProperties {
	}
	export function CreateUpdateWorkloadOutputFormGroup() {
		return new FormGroup<UpdateWorkloadOutputFormProperties>({
		});

	}


	/** Input for Update Workload Share */
	export interface UpdateWorkloadShareOutput {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/** A workload share return object. */
		WorkloadShare?: WorkloadShare;
	}

	/** Input for Update Workload Share */
	export interface UpdateWorkloadShareOutputFormProperties {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkloadShareOutputFormGroup() {
		return new FormGroup<UpdateWorkloadShareOutputFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
		});

	}


	/** A workload share return object. */
	export interface WorkloadShare {

		/** The ID associated with the share. */
		ShareId?: string | null;

		/**
		 * An Amazon Web Services account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		SharedBy?: string | null;

		/**
		 * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload, lens, or profile is shared.
		 * Max length: 2048
		 * Min length: 12
		 */
		SharedWith?: string | null;

		/** Permission granted on a share request. */
		PermissionType?: ShareInvitationSummaryPermissionType | null;

		/** The status of the share request. */
		Status?: LensShareSummaryStatus | null;

		/**
		 * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		WorkloadName?: string | null;

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;
	}

	/** A workload share return object. */
	export interface WorkloadShareFormProperties {

		/** The ID associated with the share. */
		ShareId: FormControl<string | null | undefined>,

		/**
		 * An Amazon Web Services account ID.
		 * Max length: 12
		 * Min length: 12
		 */
		SharedBy: FormControl<string | null | undefined>,

		/**
		 * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload, lens, or profile is shared.
		 * Max length: 2048
		 * Min length: 12
		 */
		SharedWith: FormControl<string | null | undefined>,

		/** Permission granted on a share request. */
		PermissionType: FormControl<ShareInvitationSummaryPermissionType | null | undefined>,

		/** The status of the share request. */
		Status: FormControl<LensShareSummaryStatus | null | undefined>,

		/**
		 * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		WorkloadName: FormControl<string | null | undefined>,

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,
	}
	export function CreateWorkloadShareFormGroup() {
		return new FormGroup<WorkloadShareFormProperties>({
			ShareId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9a-f]{32}')]),
			SharedBy: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]{12}')]),
			SharedWith: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(2048)]),
			PermissionType: new FormControl<ShareInvitationSummaryPermissionType | null | undefined>(undefined),
			Status: new FormControl<LensShareSummaryStatus | null | undefined>(undefined),
			WorkloadName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(100)]),
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
		});

	}


	/** The risk for a given workload, lens review, pillar, or question. */
	export enum Risk { UNANSWERED = 'UNANSWERED', HIGH = 'HIGH', MEDIUM = 'MEDIUM', NONE = 'NONE', NOT_APPLICABLE = 'NOT_APPLICABLE' }

	export enum AnswerReason { OUT_OF_SCOPE = 'OUT_OF_SCOPE', BUSINESS_PRIORITIES = 'BUSINESS_PRIORITIES', ARCHITECTURE_CONSTRAINTS = 'ARCHITECTURE_CONSTRAINTS', OTHER = 'OTHER', NONE = 'NONE' }


	/** Input to associate lens reviews. */
	export interface AssociateLensesInput {

		/**
		 * <p>List of lens aliases to associate or disassociate with a workload. Up to 10 lenses can be specified.</p> <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>
		 * Required
		 * Minimum items: 1
		 */
		LensAliases: Array<string>;
	}

	/** Input to associate lens reviews. */
	export interface AssociateLensesInputFormProperties {
	}
	export function CreateAssociateLensesInputFormGroup() {
		return new FormGroup<AssociateLensesInputFormProperties>({
		});

	}

	export interface AssociateProfilesInput {

		/** Required */
		ProfileArns: Array<string>;
	}
	export interface AssociateProfilesInputFormProperties {
	}
	export function CreateAssociateProfilesInputFormGroup() {
		return new FormGroup<AssociateProfilesInputFormProperties>({
		});

	}

	export interface ChoiceUpdates {
	}
	export interface ChoiceUpdatesFormProperties {
	}
	export function CreateChoiceUpdatesFormGroup() {
		return new FormGroup<ChoiceUpdatesFormProperties>({
		});

	}

	export interface CreateLensShareInput {

		/**
		 * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload, lens, or profile is shared.
		 * Required
		 * Max length: 2048
		 * Min length: 12
		 */
		SharedWith: string;

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: string;
	}
	export interface CreateLensShareInputFormProperties {

		/**
		 * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload, lens, or profile is shared.
		 * Required
		 * Max length: 2048
		 * Min length: 12
		 */
		SharedWith: FormControl<string | null | undefined>,

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateLensShareInputFormGroup() {
		return new FormGroup<CreateLensShareInputFormProperties>({
			SharedWith: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(2048)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface CreateLensVersionInput {

		/** Required */
		LensVersion: string;
		IsMajorVersion?: boolean | null;

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: string;
	}
	export interface CreateLensVersionInputFormProperties {

		/** Required */
		LensVersion: FormControl<string | null | undefined>,
		IsMajorVersion: FormControl<boolean | null | undefined>,

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateLensVersionInputFormGroup() {
		return new FormGroup<CreateLensVersionInputFormProperties>({
			LensVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsMajorVersion: new FormControl<boolean | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}


	/** Input for milestone creation. */
	export interface CreateMilestoneInput {

		/**
		 * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
		 * Required
		 * Max length: 100
		 * Min length: 3
		 */
		MilestoneName: string;

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: string;
	}

	/** Input for milestone creation. */
	export interface CreateMilestoneInputFormProperties {

		/**
		 * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
		 * Required
		 * Max length: 100
		 * Min length: 3
		 */
		MilestoneName: FormControl<string | null | undefined>,

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateMilestoneInputFormGroup() {
		return new FormGroup<CreateMilestoneInputFormProperties>({
			MilestoneName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface CreateProfileInput {

		/** Required */
		ProfileName: string;

		/** Required */
		ProfileDescription: string;

		/** Required */
		ProfileQuestions: Array<ProfileQuestionUpdate>;

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: string;
		Tags?: TagMap;
	}
	export interface CreateProfileInputFormProperties {

		/** Required */
		ProfileName: FormControl<string | null | undefined>,

		/** Required */
		ProfileDescription: FormControl<string | null | undefined>,

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateProfileInputFormGroup() {
		return new FormGroup<CreateProfileInputFormProperties>({
			ProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProfileDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface CreateProfileShareInput {

		/**
		 * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload, lens, or profile is shared.
		 * Required
		 * Max length: 2048
		 * Min length: 12
		 */
		SharedWith: string;

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: string;
	}
	export interface CreateProfileShareInputFormProperties {

		/**
		 * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload, lens, or profile is shared.
		 * Required
		 * Max length: 2048
		 * Min length: 12
		 */
		SharedWith: FormControl<string | null | undefined>,

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateProfileShareInputFormGroup() {
		return new FormGroup<CreateProfileShareInputFormProperties>({
			SharedWith: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(2048)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}


	/** Input for workload creation. */
	export interface CreateWorkloadInput {

		/**
		 * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
		 * Required
		 * Max length: 100
		 * Min length: 3
		 */
		WorkloadName: string;

		/**
		 * The description for the workload.
		 * Required
		 * Max length: 250
		 * Min length: 3
		 */
		Description: string;

		/**
		 * The environment for the workload.
		 * Required
		 */
		Environment: WorkloadEnvironment;

		/**
		 * The list of Amazon Web Services account IDs associated with the workload.
		 * Maximum items: 100
		 */
		AccountIds?: Array<string>;

		/**
		 * The list of Amazon Web Services Regions associated with the workload, for example, <code>us-east-2</code>, or <code>ca-central-1</code>.
		 * Maximum items: 50
		 */
		AwsRegions?: Array<string>;

		/**
		 * The list of non-Amazon Web Services Regions associated with the workload.
		 * Maximum items: 5
		 */
		NonAwsRegions?: Array<string>;

		/** The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>. */
		PillarPriorities?: Array<string>;

		/**
		 * The URL of the architectural design for the workload.
		 * Max length: 2048
		 */
		ArchitecturalDesign?: string | null;

		/**
		 * The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.
		 * Max length: 255
		 * Min length: 3
		 */
		ReviewOwner?: string | null;

		/**
		 * <p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>
		 * Max length: 100
		 */
		IndustryType?: string | null;

		/**
		 * The industry for the workload.
		 * Max length: 100
		 */
		Industry?: string | null;

		/**
		 * The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.
		 * Required
		 */
		Lenses: Array<string>;

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		Notes?: string | null;

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: string;
		Tags?: TagMap;
		DiscoveryConfig?: WorkloadDiscoveryConfig;
		Applications?: Array<string>;
		ProfileArns?: Array<string>;
	}

	/** Input for workload creation. */
	export interface CreateWorkloadInputFormProperties {

		/**
		 * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
		 * Required
		 * Max length: 100
		 * Min length: 3
		 */
		WorkloadName: FormControl<string | null | undefined>,

		/**
		 * The description for the workload.
		 * Required
		 * Max length: 250
		 * Min length: 3
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The environment for the workload.
		 * Required
		 */
		Environment: FormControl<WorkloadEnvironment | null | undefined>,

		/**
		 * The URL of the architectural design for the workload.
		 * Max length: 2048
		 */
		ArchitecturalDesign: FormControl<string | null | undefined>,

		/**
		 * The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.
		 * Max length: 255
		 * Min length: 3
		 */
		ReviewOwner: FormControl<string | null | undefined>,

		/**
		 * <p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>
		 * Max length: 100
		 */
		IndustryType: FormControl<string | null | undefined>,

		/**
		 * The industry for the workload.
		 * Max length: 100
		 */
		Industry: FormControl<string | null | undefined>,

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		Notes: FormControl<string | null | undefined>,

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkloadInputFormGroup() {
		return new FormGroup<CreateWorkloadInputFormProperties>({
			WorkloadName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]),
			Environment: new FormControl<WorkloadEnvironment | null | undefined>(undefined, [Validators.required]),
			ArchitecturalDesign: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('^(|(https?|ftp):\/\/[^\s/$.?#].[^\s]*)$')]),
			ReviewOwner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(255)]),
			IndustryType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Industry: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Notes: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2084)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}


	/** Permission granted on a share request. */
	export enum PermissionType { READONLY = 'READONLY', CONTRIBUTOR = 'CONTRIBUTOR' }


	/** Input for Create Workload Share */
	export interface CreateWorkloadShareInput {

		/**
		 * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload, lens, or profile is shared.
		 * Required
		 * Max length: 2048
		 * Min length: 12
		 */
		SharedWith: string;

		/**
		 * Permission granted on a share request.
		 * Required
		 */
		PermissionType: ShareInvitationSummaryPermissionType;

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: string;
	}

	/** Input for Create Workload Share */
	export interface CreateWorkloadShareInputFormProperties {

		/**
		 * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload, lens, or profile is shared.
		 * Required
		 * Max length: 2048
		 * Min length: 12
		 */
		SharedWith: FormControl<string | null | undefined>,

		/**
		 * Permission granted on a share request.
		 * Required
		 */
		PermissionType: FormControl<ShareInvitationSummaryPermissionType | null | undefined>,

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkloadShareInputFormGroup() {
		return new FormGroup<CreateWorkloadShareInputFormProperties>({
			SharedWith: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(2048)]),
			PermissionType: new FormControl<ShareInvitationSummaryPermissionType | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export enum LensStatusType { ALL = 'ALL', DRAFT = 'DRAFT', PUBLISHED = 'PUBLISHED' }

	export interface DeleteLensInput {
	}
	export interface DeleteLensInputFormProperties {
	}
	export function CreateDeleteLensInputFormGroup() {
		return new FormGroup<DeleteLensInputFormProperties>({
		});

	}

	export interface DeleteLensShareInput {
	}
	export interface DeleteLensShareInputFormProperties {
	}
	export function CreateDeleteLensShareInputFormGroup() {
		return new FormGroup<DeleteLensShareInputFormProperties>({
		});

	}

	export interface DeleteProfileInput {
	}
	export interface DeleteProfileInputFormProperties {
	}
	export function CreateDeleteProfileInputFormGroup() {
		return new FormGroup<DeleteProfileInputFormProperties>({
		});

	}

	export interface DeleteProfileShareInput {
	}
	export interface DeleteProfileShareInputFormProperties {
	}
	export function CreateDeleteProfileShareInputFormGroup() {
		return new FormGroup<DeleteProfileShareInputFormProperties>({
		});

	}


	/** Input for workload deletion. */
	export interface DeleteWorkloadInput {
	}

	/** Input for workload deletion. */
	export interface DeleteWorkloadInputFormProperties {
	}
	export function CreateDeleteWorkloadInputFormGroup() {
		return new FormGroup<DeleteWorkloadInputFormProperties>({
		});

	}


	/** Input for Delete Workload Share */
	export interface DeleteWorkloadShareInput {
	}

	/** Input for Delete Workload Share */
	export interface DeleteWorkloadShareInputFormProperties {
	}
	export function CreateDeleteWorkloadShareInputFormGroup() {
		return new FormGroup<DeleteWorkloadShareInputFormProperties>({
		});

	}


	/** Input to disassociate lens reviews. */
	export interface DisassociateLensesInput {

		/**
		 * <p>List of lens aliases to associate or disassociate with a workload. Up to 10 lenses can be specified.</p> <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>
		 * Required
		 * Minimum items: 1
		 */
		LensAliases: Array<string>;
	}

	/** Input to disassociate lens reviews. */
	export interface DisassociateLensesInputFormProperties {
	}
	export function CreateDisassociateLensesInputFormGroup() {
		return new FormGroup<DisassociateLensesInputFormProperties>({
		});

	}

	export interface DisassociateProfilesInput {

		/** Required */
		ProfileArns: Array<string>;
	}
	export interface DisassociateProfilesInputFormProperties {
	}
	export function CreateDisassociateProfilesInputFormGroup() {
		return new FormGroup<DisassociateProfilesInputFormProperties>({
		});

	}

	export enum DiscoveryIntegrationStatus { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export interface ExportLensInput {
	}
	export interface ExportLensInputFormProperties {
	}
	export function CreateExportLensInputFormGroup() {
		return new FormGroup<ExportLensInputFormProperties>({
		});

	}


	/** Input to get answer. */
	export interface GetAnswerInput {
	}

	/** Input to get answer. */
	export interface GetAnswerInputFormProperties {
	}
	export function CreateGetAnswerInputFormGroup() {
		return new FormGroup<GetAnswerInputFormProperties>({
		});

	}

	export enum ReportFormat { PDF = 'PDF', JSON = 'JSON' }

	export interface GetConsolidatedReportInput {
	}
	export interface GetConsolidatedReportInputFormProperties {
	}
	export function CreateGetConsolidatedReportInputFormGroup() {
		return new FormGroup<GetConsolidatedReportInputFormProperties>({
		});

	}

	export interface GetLensInput {
	}
	export interface GetLensInputFormProperties {
	}
	export function CreateGetLensInputFormGroup() {
		return new FormGroup<GetLensInputFormProperties>({
		});

	}


	/** Input to get lens review. */
	export interface GetLensReviewInput {
	}

	/** Input to get lens review. */
	export interface GetLensReviewInputFormProperties {
	}
	export function CreateGetLensReviewInputFormGroup() {
		return new FormGroup<GetLensReviewInputFormProperties>({
		});

	}


	/** Input to get lens review report. */
	export interface GetLensReviewReportInput {
	}

	/** Input to get lens review report. */
	export interface GetLensReviewReportInputFormProperties {
	}
	export function CreateGetLensReviewReportInputFormGroup() {
		return new FormGroup<GetLensReviewReportInputFormProperties>({
		});

	}

	export interface GetLensVersionDifferenceInput {
	}
	export interface GetLensVersionDifferenceInputFormProperties {
	}
	export function CreateGetLensVersionDifferenceInputFormGroup() {
		return new FormGroup<GetLensVersionDifferenceInputFormProperties>({
		});

	}


	/** Input to get a milestone. */
	export interface GetMilestoneInput {
	}

	/** Input to get a milestone. */
	export interface GetMilestoneInputFormProperties {
	}
	export function CreateGetMilestoneInputFormGroup() {
		return new FormGroup<GetMilestoneInputFormProperties>({
		});

	}

	export interface GetProfileInput {
	}
	export interface GetProfileInputFormProperties {
	}
	export function CreateGetProfileInputFormGroup() {
		return new FormGroup<GetProfileInputFormProperties>({
		});

	}

	export interface GetProfileTemplateInput {
	}
	export interface GetProfileTemplateInputFormProperties {
	}
	export function CreateGetProfileTemplateInputFormGroup() {
		return new FormGroup<GetProfileTemplateInputFormProperties>({
		});

	}


	/** Input to get a workload. */
	export interface GetWorkloadInput {
	}

	/** Input to get a workload. */
	export interface GetWorkloadInputFormProperties {
	}
	export function CreateGetWorkloadInputFormGroup() {
		return new FormGroup<GetWorkloadInputFormProperties>({
		});

	}

	export interface ImportLensInput {

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias?: string | null;

		/** Required */
		JSONString: string;

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: string;
		Tags?: TagMap;
	}
	export interface ImportLensInputFormProperties {

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias: FormControl<string | null | undefined>,

		/** Required */
		JSONString: FormControl<string | null | undefined>,

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateImportLensInputFormGroup() {
		return new FormGroup<ImportLensInputFormProperties>({
			LensAlias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			JSONString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}


	/** The status of the share request. */
	export enum ShareStatus { ACCEPTED = 'ACCEPTED', REJECTED = 'REJECTED', PENDING = 'PENDING', REVOKED = 'REVOKED', EXPIRED = 'EXPIRED', ASSOCIATING = 'ASSOCIATING', ASSOCIATED = 'ASSOCIATED', FAILED = 'FAILED' }

	export enum QuestionPriority { PRIORITIZED = 'PRIORITIZED', NONE = 'NONE' }


	/** Input to list answers. */
	export interface ListAnswersInput {
	}

	/** Input to list answers. */
	export interface ListAnswersInputFormProperties {
	}
	export function CreateListAnswersInputFormGroup() {
		return new FormGroup<ListAnswersInputFormProperties>({
		});

	}

	export interface ListCheckDetailsInput {

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return for this request.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;

		/** Required */
		LensArn: string;

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId: string;

		/**
		 * The ID of the question.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId: string;

		/**
		 * The ID of a choice.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId: string;
	}
	export interface ListCheckDetailsInputFormProperties {

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return for this request.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Required */
		LensArn: FormControl<string | null | undefined>,

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId: FormControl<string | null | undefined>,

		/**
		 * The ID of the question.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId: FormControl<string | null | undefined>,

		/**
		 * The ID of a choice.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId: FormControl<string | null | undefined>,
	}
	export function CreateListCheckDetailsInputFormGroup() {
		return new FormGroup<ListCheckDetailsInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			LensArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PillarId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			QuestionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			ChoiceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	export interface ListCheckSummariesInput {

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return for this request.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;

		/** Required */
		LensArn: string;

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId: string;

		/**
		 * The ID of the question.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId: string;

		/**
		 * The ID of a choice.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId: string;
	}
	export interface ListCheckSummariesInputFormProperties {

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return for this request.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** Required */
		LensArn: FormControl<string | null | undefined>,

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId: FormControl<string | null | undefined>,

		/**
		 * The ID of the question.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId: FormControl<string | null | undefined>,

		/**
		 * The ID of a choice.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId: FormControl<string | null | undefined>,
	}
	export function CreateListCheckSummariesInputFormGroup() {
		return new FormGroup<ListCheckSummariesInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			LensArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PillarId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			QuestionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			ChoiceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
		});

	}


	/** Input to list lens review improvements. */
	export interface ListLensReviewImprovementsInput {
	}

	/** Input to list lens review improvements. */
	export interface ListLensReviewImprovementsInputFormProperties {
	}
	export function CreateListLensReviewImprovementsInputFormGroup() {
		return new FormGroup<ListLensReviewImprovementsInputFormProperties>({
		});

	}


	/** Input to list lens reviews. */
	export interface ListLensReviewsInput {
	}

	/** Input to list lens reviews. */
	export interface ListLensReviewsInputFormProperties {
	}
	export function CreateListLensReviewsInputFormGroup() {
		return new FormGroup<ListLensReviewsInputFormProperties>({
		});

	}

	export interface ListLensSharesInput {
	}
	export interface ListLensSharesInputFormProperties {
	}
	export function CreateListLensSharesInputFormGroup() {
		return new FormGroup<ListLensSharesInputFormProperties>({
		});

	}


	/** Input to list lenses. */
	export interface ListLensesInput {
	}

	/** Input to list lenses. */
	export interface ListLensesInputFormProperties {
	}
	export function CreateListLensesInputFormGroup() {
		return new FormGroup<ListLensesInputFormProperties>({
		});

	}


	/** Input to list all milestones for a workload. */
	export interface ListMilestonesInput {

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return for this request.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
	}

	/** Input to list all milestones for a workload. */
	export interface ListMilestonesInputFormProperties {

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return for this request.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListMilestonesInputFormGroup() {
		return new FormGroup<ListMilestonesInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface ListNotificationsInput {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface ListNotificationsInputFormProperties {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListNotificationsInputFormGroup() {
		return new FormGroup<ListNotificationsInputFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListProfileNotificationsInput {
	}
	export interface ListProfileNotificationsInputFormProperties {
	}
	export function CreateListProfileNotificationsInputFormGroup() {
		return new FormGroup<ListProfileNotificationsInputFormProperties>({
		});

	}

	export interface ListProfileSharesInput {
	}
	export interface ListProfileSharesInputFormProperties {
	}
	export function CreateListProfileSharesInputFormGroup() {
		return new FormGroup<ListProfileSharesInputFormProperties>({
		});

	}

	export enum ProfileOwnerType { SELF = 'SELF', SHARED = 'SHARED' }

	export interface ListProfilesInput {
	}
	export interface ListProfilesInputFormProperties {
	}
	export function CreateListProfilesInputFormGroup() {
		return new FormGroup<ListProfilesInputFormProperties>({
		});

	}


	/** Input for List Share Invitations */
	export interface ListShareInvitationsInput {
	}

	/** Input for List Share Invitations */
	export interface ListShareInvitationsInputFormProperties {
	}
	export function CreateListShareInvitationsInputFormGroup() {
		return new FormGroup<ListShareInvitationsInputFormProperties>({
		});

	}

	export interface ListTagsForResourceInput {
	}
	export interface ListTagsForResourceInputFormProperties {
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
		});

	}


	/** Input for List Workload Share */
	export interface ListWorkloadSharesInput {
	}

	/** Input for List Workload Share */
	export interface ListWorkloadSharesInputFormProperties {
	}
	export function CreateListWorkloadSharesInputFormGroup() {
		return new FormGroup<ListWorkloadSharesInputFormProperties>({
		});

	}


	/** Input to list all workloads. */
	export interface ListWorkloadsInput {

		/**
		 * An optional string added to the beginning of each workload name returned in the results.
		 * Max length: 100
		 */
		WorkloadNamePrefix?: string | null;

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	/** Input to list all workloads. */
	export interface ListWorkloadsInputFormProperties {

		/**
		 * An optional string added to the beginning of each workload name returned in the results.
		 * Max length: 100
		 */
		WorkloadNamePrefix: FormControl<string | null | undefined>,

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListWorkloadsInputFormGroup() {
		return new FormGroup<ListWorkloadsInputFormProperties>({
			WorkloadNamePrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum OrganizationSharingStatus { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }


	/** List of pillar notes of a lens review in a workload. */
	export interface PillarNotes {
	}

	/** List of pillar notes of a lens review in a workload. */
	export interface PillarNotesFormProperties {
	}
	export function CreatePillarNotesFormGroup() {
		return new FormGroup<PillarNotesFormProperties>({
		});

	}


	/** Share invitation action taken by contributor. */
	export enum ShareInvitationAction { ACCEPT = 'ACCEPT', REJECT = 'REJECT' }

	export interface TagResourceInput {

		/** Required */
		Tags: TagMap;
	}
	export interface TagResourceInputFormProperties {
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
		});

	}

	export interface UntagResourceInput {
	}
	export interface UntagResourceInputFormProperties {
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
		});

	}


	/** Input to update answer. */
	export interface UpdateAnswerInput {

		/** <p>List of selected choice IDs in a question answer.</p> <p>The values entered replace the previously selected choices.</p> */
		SelectedChoices?: Array<string>;
		ChoiceUpdates?: ChoiceUpdates;

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		Notes?: string | null;

		/** Defines whether this question is applicable to a lens review. */
		IsApplicable?: boolean | null;
		Reason?: ChoiceReason;
	}

	/** Input to update answer. */
	export interface UpdateAnswerInputFormProperties {

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		Notes: FormControl<string | null | undefined>,

		/** Defines whether this question is applicable to a lens review. */
		IsApplicable: FormControl<boolean | null | undefined>,
		Reason: FormControl<ChoiceReason | null | undefined>,
	}
	export function CreateUpdateAnswerInputFormGroup() {
		return new FormGroup<UpdateAnswerInputFormProperties>({
			Notes: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2084)]),
			IsApplicable: new FormControl<boolean | null | undefined>(undefined),
			Reason: new FormControl<ChoiceReason | null | undefined>(undefined),
		});

	}

	export interface UpdateGlobalSettingsInput {
		OrganizationSharingStatus?: TrustedAdvisorIntegrationStatus;
		DiscoveryIntegrationStatus?: TrustedAdvisorIntegrationStatus;
	}
	export interface UpdateGlobalSettingsInputFormProperties {
		OrganizationSharingStatus: FormControl<TrustedAdvisorIntegrationStatus | null | undefined>,
		DiscoveryIntegrationStatus: FormControl<TrustedAdvisorIntegrationStatus | null | undefined>,
	}
	export function CreateUpdateGlobalSettingsInputFormGroup() {
		return new FormGroup<UpdateGlobalSettingsInputFormProperties>({
			OrganizationSharingStatus: new FormControl<TrustedAdvisorIntegrationStatus | null | undefined>(undefined),
			DiscoveryIntegrationStatus: new FormControl<TrustedAdvisorIntegrationStatus | null | undefined>(undefined),
		});

	}


	/** Input for update lens review. */
	export interface UpdateLensReviewInput {

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		LensNotes?: string | null;

		/** List of pillar notes of a lens review in a workload. */
		PillarNotes?: PillarNotes;
	}

	/** Input for update lens review. */
	export interface UpdateLensReviewInputFormProperties {

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		LensNotes: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLensReviewInputFormGroup() {
		return new FormGroup<UpdateLensReviewInputFormProperties>({
			LensNotes: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2084)]),
		});

	}

	export interface UpdateProfileInput {
		ProfileDescription?: string;
		ProfileQuestions?: Array<ProfileQuestionUpdate>;
	}
	export interface UpdateProfileInputFormProperties {
		ProfileDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProfileInputFormGroup() {
		return new FormGroup<UpdateProfileInputFormProperties>({
			ProfileDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input for Update Share Invitation */
	export interface UpdateShareInvitationInput {

		/**
		 * Share invitation action taken by contributor.
		 * Required
		 */
		ShareInvitationAction: ShareInvitationAction;
	}

	/** Input for Update Share Invitation */
	export interface UpdateShareInvitationInputFormProperties {

		/**
		 * Share invitation action taken by contributor.
		 * Required
		 */
		ShareInvitationAction: FormControl<ShareInvitationAction | null | undefined>,
	}
	export function CreateUpdateShareInvitationInputFormGroup() {
		return new FormGroup<UpdateShareInvitationInputFormProperties>({
			ShareInvitationAction: new FormControl<ShareInvitationAction | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Input to update a workload. */
	export interface UpdateWorkloadInput {

		/**
		 * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		WorkloadName?: string | null;

		/**
		 * The description for the workload.
		 * Max length: 250
		 * Min length: 3
		 */
		Description?: string | null;

		/** The environment for the workload. */
		Environment?: WorkloadEnvironment | null;

		/**
		 * The list of Amazon Web Services account IDs associated with the workload.
		 * Maximum items: 100
		 */
		AccountIds?: Array<string>;

		/**
		 * The list of Amazon Web Services Regions associated with the workload, for example, <code>us-east-2</code>, or <code>ca-central-1</code>.
		 * Maximum items: 50
		 */
		AwsRegions?: Array<string>;

		/**
		 * The list of non-Amazon Web Services Regions associated with the workload.
		 * Maximum items: 5
		 */
		NonAwsRegions?: Array<string>;

		/** The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>. */
		PillarPriorities?: Array<string>;

		/**
		 * The URL of the architectural design for the workload.
		 * Max length: 2048
		 */
		ArchitecturalDesign?: string | null;

		/**
		 * The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.
		 * Max length: 255
		 * Min length: 3
		 */
		ReviewOwner?: string | null;
		IsReviewOwnerUpdateAcknowledged?: boolean | null;

		/**
		 * <p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>
		 * Max length: 100
		 */
		IndustryType?: string | null;

		/**
		 * The industry for the workload.
		 * Max length: 100
		 */
		Industry?: string | null;

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		Notes?: string | null;

		/** The improvement status for a workload. */
		ImprovementStatus?: WorkloadImprovementStatus | null;
		DiscoveryConfig?: WorkloadDiscoveryConfig;
		Applications?: Array<string>;
	}

	/** Input to update a workload. */
	export interface UpdateWorkloadInputFormProperties {

		/**
		 * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		WorkloadName: FormControl<string | null | undefined>,

		/**
		 * The description for the workload.
		 * Max length: 250
		 * Min length: 3
		 */
		Description: FormControl<string | null | undefined>,

		/** The environment for the workload. */
		Environment: FormControl<WorkloadEnvironment | null | undefined>,

		/**
		 * The URL of the architectural design for the workload.
		 * Max length: 2048
		 */
		ArchitecturalDesign: FormControl<string | null | undefined>,

		/**
		 * The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.
		 * Max length: 255
		 * Min length: 3
		 */
		ReviewOwner: FormControl<string | null | undefined>,
		IsReviewOwnerUpdateAcknowledged: FormControl<boolean | null | undefined>,

		/**
		 * <p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>
		 * Max length: 100
		 */
		IndustryType: FormControl<string | null | undefined>,

		/**
		 * The industry for the workload.
		 * Max length: 100
		 */
		Industry: FormControl<string | null | undefined>,

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		Notes: FormControl<string | null | undefined>,

		/** The improvement status for a workload. */
		ImprovementStatus: FormControl<WorkloadImprovementStatus | null | undefined>,
	}
	export function CreateUpdateWorkloadInputFormGroup() {
		return new FormGroup<UpdateWorkloadInputFormProperties>({
			WorkloadName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(100)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(250)]),
			Environment: new FormControl<WorkloadEnvironment | null | undefined>(undefined),
			ArchitecturalDesign: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('^(|(https?|ftp):\/\/[^\s/$.?#].[^\s]*)$')]),
			ReviewOwner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(255)]),
			IsReviewOwnerUpdateAcknowledged: new FormControl<boolean | null | undefined>(undefined),
			IndustryType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Industry: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Notes: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2084)]),
			ImprovementStatus: new FormControl<WorkloadImprovementStatus | null | undefined>(undefined),
		});

	}


	/** Input for Update Workload Share */
	export interface UpdateWorkloadShareInput {

		/**
		 * Permission granted on a share request.
		 * Required
		 */
		PermissionType: ShareInvitationSummaryPermissionType;
	}

	/** Input for Update Workload Share */
	export interface UpdateWorkloadShareInputFormProperties {

		/**
		 * Permission granted on a share request.
		 * Required
		 */
		PermissionType: FormControl<ShareInvitationSummaryPermissionType | null | undefined>,
	}
	export function CreateUpdateWorkloadShareInputFormGroup() {
		return new FormGroup<UpdateWorkloadShareInputFormProperties>({
			PermissionType: new FormControl<ShareInvitationSummaryPermissionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpgradeLensReviewInput {

		/**
		 * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
		 * Required
		 * Max length: 100
		 * Min length: 3
		 */
		MilestoneName: string;

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
	}
	export interface UpgradeLensReviewInputFormProperties {

		/**
		 * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
		 * Required
		 * Max length: 100
		 * Min length: 3
		 */
		MilestoneName: FormControl<string | null | undefined>,

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateUpgradeLensReviewInputFormGroup() {
		return new FormGroup<UpgradeLensReviewInputFormProperties>({
			MilestoneName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface UpgradeProfileVersionInput {

		/**
		 * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		MilestoneName?: string | null;

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
	}
	export interface UpgradeProfileVersionInputFormProperties {

		/**
		 * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		MilestoneName: FormControl<string | null | undefined>,

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateUpgradeProfileVersionInputFormGroup() {
		return new FormGroup<UpgradeProfileVersionInputFormProperties>({
			MilestoneName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(100)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associate a lens to a workload.</p> <p>Up to 10 lenses can be associated with a workload in a single API operation. A maximum of 20 lenses can be associated with a workload.</p> <note> <p> <b>Disclaimer</b> </p> <p>By accessing and/or applying custom lenses created by another Amazon Web Services user or account, you acknowledge that custom lenses created by other users and shared with you are Third Party Content as defined in the Amazon Web Services Customer Agreement. </p> </note>
		 * Patch workloads/{WorkloadId}/associateLenses
		 * @return {void} Success
		 */
		AssociateLenses(WorkloadId: string, requestBody: AssociateLensesPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/associateLenses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Associate a profile with a workload.
		 * Patch workloads/{WorkloadId}/associateProfiles
		 * @return {void} Success
		 */
		AssociateProfiles(WorkloadId: string, requestBody: AssociateProfilesPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/associateProfiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Create a lens share.</p> <p>The owner of a lens can share it with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be shared.</p> <p> Shared access to a lens is not removed until the lens invitation is deleted.</p> <p>If you share a lens with an organization or OU, all accounts in the organization or OU are granted access to the lens.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-sharing.html">Sharing a custom lens</a> in the <i>Well-Architected Tool User Guide</i>.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
		 * Post lenses/{LensAlias}/shares
		 * @return {CreateLensShareOutput} Success
		 */
		CreateLensShare(LensAlias: string, requestBody: CreateLensSharePostBody): Observable<CreateLensShareOutput> {
			return this.http.post<CreateLensShareOutput>(this.baseUri + 'lenses/' + (LensAlias == null ? '' : encodeURIComponent(LensAlias)) + '/shares', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the lens shares associated with the lens.
		 * Get lenses/{LensAlias}/shares
		 * @param {string} SharedWithPrefix The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the lens is shared.
		 * @param {number} MaxResults The maximum number of results to return for this request.
		 * @return {ListLensSharesOutput} Success
		 */
		ListLensShares(LensAlias: string, SharedWithPrefix: string | null | undefined, NextToken: string | null | undefined, MaxResults: number | null | undefined, Status: LensShareSummaryStatus | null | undefined): Observable<ListLensSharesOutput> {
			return this.http.get<ListLensSharesOutput>(this.baseUri + 'lenses/' + (LensAlias == null ? '' : encodeURIComponent(LensAlias)) + '/shares&SharedWithPrefix=' + (SharedWithPrefix == null ? '' : encodeURIComponent(SharedWithPrefix)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&Status=' + Status, {});
		}

		/**
		 * <p>Create a new lens version.</p> <p>A lens can have up to 100 versions.</p> <p>Use this operation to publish a new lens version after you have imported a lens. The <code>LensAlias</code> is used to identify the lens to be published. The owner of a lens can share the lens with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Only the owner of a lens can delete it. </p>
		 * Post lenses/{LensAlias}/versions
		 * @return {CreateLensVersionOutput} Success
		 */
		CreateLensVersion(LensAlias: string, requestBody: CreateLensVersionPostBody): Observable<CreateLensVersionOutput> {
			return this.http.post<CreateLensVersionOutput>(this.baseUri + 'lenses/' + (LensAlias == null ? '' : encodeURIComponent(LensAlias)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a milestone for an existing workload.
		 * Post workloads/{WorkloadId}/milestones
		 * @return {CreateMilestoneOutput} Success
		 */
		CreateMilestone(WorkloadId: string, requestBody: CreateMilestonePostBody): Observable<CreateMilestoneOutput> {
			return this.http.post<CreateMilestoneOutput>(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/milestones', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a profile.
		 * Post profiles
		 * @return {CreateProfileOutput} Success
		 */
		CreateProfile(requestBody: CreateProfilePostBody): Observable<CreateProfileOutput> {
			return this.http.post<CreateProfileOutput>(this.baseUri + 'profiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a profile share.
		 * Post profiles/{ProfileArn}/shares
		 * @param {string} ProfileArn The profile ARN.
		 * @return {CreateProfileShareOutput} Success
		 */
		CreateProfileShare(ProfileArn: string, requestBody: CreateProfileSharePostBody): Observable<CreateProfileShareOutput> {
			return this.http.post<CreateProfileShareOutput>(this.baseUri + 'profiles/' + (ProfileArn == null ? '' : encodeURIComponent(ProfileArn)) + '/shares', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List profile shares.
		 * Get profiles/{ProfileArn}/shares
		 * @param {string} ProfileArn The profile ARN.
		 * @param {string} SharedWithPrefix The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the profile is shared.
		 * @param {number} MaxResults The maximum number of results to return for this request.
		 * @return {ListProfileSharesOutput} Success
		 */
		ListProfileShares(ProfileArn: string, SharedWithPrefix: string | null | undefined, NextToken: string | null | undefined, MaxResults: number | null | undefined, Status: LensShareSummaryStatus | null | undefined): Observable<ListProfileSharesOutput> {
			return this.http.get<ListProfileSharesOutput>(this.baseUri + 'profiles/' + (ProfileArn == null ? '' : encodeURIComponent(ProfileArn)) + '/shares&SharedWithPrefix=' + (SharedWithPrefix == null ? '' : encodeURIComponent(SharedWithPrefix)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&Status=' + Status, {});
		}

		/**
		 * <p>Create a new workload.</p> <p>The owner of a workload can share the workload with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Only the owner of a workload can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html">Defining a Workload</a> in the <i>Well-Architected Tool User Guide</i>.</p> <important> <p>Either <code>AwsRegions</code>, <code>NonAwsRegions</code>, or both must be specified when creating a workload.</p> <p>You also must specify <code>ReviewOwner</code>, even though the parameter is listed as not being required in the following section. </p> </important>
		 * Post workloads
		 * @return {CreateWorkloadOutput} Success
		 */
		CreateWorkload(requestBody: CreateWorkloadPostBody): Observable<CreateWorkloadOutput> {
			return this.http.post<CreateWorkloadOutput>(this.baseUri + 'workloads', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Create a workload share.</p> <p>The owner of a workload can share it with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is deleted.</p> <p>If you share a workload with an organization or OU, all accounts in the organization or OU are granted access to the workload.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html">Sharing a workload</a> in the <i>Well-Architected Tool User Guide</i>.</p>
		 * Post workloads/{WorkloadId}/shares
		 * @return {CreateWorkloadShareOutput} Success
		 */
		CreateWorkloadShare(WorkloadId: string, requestBody: CreateWorkloadSharePostBody): Observable<CreateWorkloadShareOutput> {
			return this.http.post<CreateWorkloadShareOutput>(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/shares', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the workload shares associated with the workload.
		 * Get workloads/{WorkloadId}/shares
		 * @param {string} SharedWithPrefix The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.
		 * @param {number} MaxResults The maximum number of results to return for this request.
		 * @return {ListWorkloadSharesOutput} Success
		 */
		ListWorkloadShares(WorkloadId: string, SharedWithPrefix: string | null | undefined, NextToken: string | null | undefined, MaxResults: number | null | undefined, Status: LensShareSummaryStatus | null | undefined): Observable<ListWorkloadSharesOutput> {
			return this.http.get<ListWorkloadSharesOutput>(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/shares&SharedWithPrefix=' + (SharedWithPrefix == null ? '' : encodeURIComponent(SharedWithPrefix)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&Status=' + Status, {});
		}

		/**
		 * <p>Delete an existing lens.</p> <p>Only the owner of a lens can delete it. After the lens is deleted, Amazon Web Services accounts and users that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads. </p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
		 * Delete lenses/{LensAlias}#ClientRequestToken&LensStatus
		 * @param {LensStatusType} LensStatus The status of the lens to be deleted.
		 * @return {void} Success
		 */
		DeleteLens(LensAlias: string, ClientRequestToken: string, LensStatus: LensStatusType): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'lenses/' + (LensAlias == null ? '' : encodeURIComponent(LensAlias)) + '#ClientRequestToken&LensStatus&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)) + '&LensStatus=' + LensStatus, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Delete a lens share.</p> <p>After the lens share is deleted, Amazon Web Services accounts, users, organizations, and organizational units (OUs) that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
		 * Delete lenses/{LensAlias}/shares/{ShareId}#ClientRequestToken
		 * @return {void} Success
		 */
		DeleteLensShare(ShareId: string, LensAlias: string, ClientRequestToken: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'lenses/' + (LensAlias == null ? '' : encodeURIComponent(LensAlias)) + '/shares/' + (ShareId == null ? '' : encodeURIComponent(ShareId)) + '#ClientRequestToken&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Delete a profile.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your profile with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your profile available to those other accounts. Those other accounts may continue to access and use your shared profile even if you delete the profile from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>
		 * Delete profiles/{ProfileArn}#ClientRequestToken
		 * @param {string} ProfileArn The profile ARN.
		 * @return {void} Success
		 */
		DeleteProfile(ProfileArn: string, ClientRequestToken: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'profiles/' + (ProfileArn == null ? '' : encodeURIComponent(ProfileArn)) + '#ClientRequestToken&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a profile share.
		 * Delete profiles/{ProfileArn}/shares/{ShareId}#ClientRequestToken
		 * @param {string} ProfileArn The profile ARN.
		 * @return {void} Success
		 */
		DeleteProfileShare(ShareId: string, ProfileArn: string, ClientRequestToken: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'profiles/' + (ProfileArn == null ? '' : encodeURIComponent(ProfileArn)) + '/shares/' + (ShareId == null ? '' : encodeURIComponent(ShareId)) + '#ClientRequestToken&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an existing workload.
		 * Delete workloads/{WorkloadId}#ClientRequestToken
		 * @return {void} Success
		 */
		DeleteWorkload(WorkloadId: string, ClientRequestToken: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '#ClientRequestToken&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a workload share.
		 * Delete workloads/{WorkloadId}/shares/{ShareId}#ClientRequestToken
		 * @return {void} Success
		 */
		DeleteWorkloadShare(ShareId: string, WorkloadId: string, ClientRequestToken: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/shares/' + (ShareId == null ? '' : encodeURIComponent(ShareId)) + '#ClientRequestToken&ClientRequestToken=' + (ClientRequestToken == null ? '' : encodeURIComponent(ClientRequestToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Disassociate a lens from a workload.</p> <p>Up to 10 lenses can be disassociated from a workload in a single API operation.</p> <note> <p>The Amazon Web Services Well-Architected Framework lens (<code>wellarchitected</code>) cannot be removed from a workload.</p> </note>
		 * Patch workloads/{WorkloadId}/disassociateLenses
		 * @return {void} Success
		 */
		DisassociateLenses(WorkloadId: string, requestBody: DisassociateLensesPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/disassociateLenses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disassociate a profile from a workload.
		 * Patch workloads/{WorkloadId}/disassociateProfiles
		 * @return {void} Success
		 */
		DisassociateProfiles(WorkloadId: string, requestBody: DisassociateProfilesPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/disassociateProfiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Export an existing lens.</p> <p>Only the owner of a lens can export it. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be exported.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>
		 * Get lenses/{LensAlias}/export
		 * @param {string} LensVersion The lens version to be exported.
		 * @return {ExportLensOutput} Success
		 */
		ExportLens(LensAlias: string, LensVersion: string | null | undefined): Observable<ExportLensOutput> {
			return this.http.get<ExportLensOutput>(this.baseUri + 'lenses/' + (LensAlias == null ? '' : encodeURIComponent(LensAlias)) + '/export&LensVersion=' + (LensVersion == null ? '' : encodeURIComponent(LensVersion)), {});
		}

		/**
		 * Get the answer to a specific question in a workload review.
		 * Get workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}
		 * @return {GetAnswerOutput} Success
		 */
		GetAnswer(WorkloadId: string, LensAlias: string, QuestionId: string, MilestoneNumber: number | null | undefined): Observable<GetAnswerOutput> {
			return this.http.get<GetAnswerOutput>(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/lensReviews/' + (LensAlias == null ? '' : encodeURIComponent(LensAlias)) + '/answers/' + (QuestionId == null ? '' : encodeURIComponent(QuestionId)) + '&MilestoneNumber=' + MilestoneNumber, {});
		}

		/**
		 * Update the answer to a specific question in a workload review.
		 * Patch workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}
		 * @return {UpdateAnswerOutput} Success
		 */
		UpdateAnswer(WorkloadId: string, LensAlias: string, QuestionId: string, requestBody: UpdateAnswerPatchBody): Observable<UpdateAnswerOutput> {
			return this.http.patch<UpdateAnswerOutput>(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/lensReviews/' + (LensAlias == null ? '' : encodeURIComponent(LensAlias)) + '/answers/' + (QuestionId == null ? '' : encodeURIComponent(QuestionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Get a consolidated report of your workloads.</p> <p>You can optionally choose to include workloads that have been shared with you.</p>
		 * Get consolidatedReport#Format
		 * @param {ReportFormat} Format <p>The format of the consolidated report.</p> <p>For <code>PDF</code>, <code>Base64String</code> is returned. For <code>JSON</code>, <code>Metrics</code> is returned.</p>
		 * @param {boolean} IncludeSharedResources Set to <code>true</code> to have shared resources included in the report.
		 * @param {number} MaxResults The maximum number of results to return for this request.
		 * @return {GetConsolidatedReportOutput} Success
		 */
		GetConsolidatedReport(Format: ReportFormat, IncludeSharedResources: boolean | null | undefined, NextToken: string | null | undefined, MaxResults: number | null | undefined): Observable<GetConsolidatedReportOutput> {
			return this.http.get<GetConsolidatedReportOutput>(this.baseUri + 'consolidatedReport#Format?Format=' + Format + '&IncludeSharedResources=' + IncludeSharedResources + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * Get an existing lens.
		 * Get lenses/{LensAlias}
		 * @param {string} LensVersion The lens version to be retrieved.
		 * @return {GetLensOutput} Success
		 */
		GetLens(LensAlias: string, LensVersion: string | null | undefined): Observable<GetLensOutput> {
			return this.http.get<GetLensOutput>(this.baseUri + 'lenses/' + (LensAlias == null ? '' : encodeURIComponent(LensAlias)) + '&LensVersion=' + (LensVersion == null ? '' : encodeURIComponent(LensVersion)), {});
		}

		/**
		 * Get lens review.
		 * Get workloads/{WorkloadId}/lensReviews/{LensAlias}
		 * @return {GetLensReviewOutput} Success
		 */
		GetLensReview(WorkloadId: string, LensAlias: string, MilestoneNumber: number | null | undefined): Observable<GetLensReviewOutput> {
			return this.http.get<GetLensReviewOutput>(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/lensReviews/' + (LensAlias == null ? '' : encodeURIComponent(LensAlias)) + '&MilestoneNumber=' + MilestoneNumber, {});
		}

		/**
		 * Update lens review for a particular workload.
		 * Patch workloads/{WorkloadId}/lensReviews/{LensAlias}
		 * @return {UpdateLensReviewOutput} Success
		 */
		UpdateLensReview(WorkloadId: string, LensAlias: string, requestBody: UpdateLensReviewPatchBody): Observable<UpdateLensReviewOutput> {
			return this.http.patch<UpdateLensReviewOutput>(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/lensReviews/' + (LensAlias == null ? '' : encodeURIComponent(LensAlias)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get lens review report.
		 * Get workloads/{WorkloadId}/lensReviews/{LensAlias}/report
		 * @return {GetLensReviewReportOutput} Success
		 */
		GetLensReviewReport(WorkloadId: string, LensAlias: string, MilestoneNumber: number | null | undefined): Observable<GetLensReviewReportOutput> {
			return this.http.get<GetLensReviewReportOutput>(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/lensReviews/' + (LensAlias == null ? '' : encodeURIComponent(LensAlias)) + '/report&MilestoneNumber=' + MilestoneNumber, {});
		}

		/**
		 * Get lens version differences.
		 * Get lenses/{LensAlias}/versionDifference
		 * @param {string} BaseLensVersion The base version of the lens.
		 * @param {string} TargetLensVersion The lens version to target a difference for.
		 * @return {GetLensVersionDifferenceOutput} Success
		 */
		GetLensVersionDifference(LensAlias: string, BaseLensVersion: string | null | undefined, TargetLensVersion: string | null | undefined): Observable<GetLensVersionDifferenceOutput> {
			return this.http.get<GetLensVersionDifferenceOutput>(this.baseUri + 'lenses/' + (LensAlias == null ? '' : encodeURIComponent(LensAlias)) + '/versionDifference&BaseLensVersion=' + (BaseLensVersion == null ? '' : encodeURIComponent(BaseLensVersion)) + '&TargetLensVersion=' + (TargetLensVersion == null ? '' : encodeURIComponent(TargetLensVersion)), {});
		}

		/**
		 * Get a milestone for an existing workload.
		 * Get workloads/{WorkloadId}/milestones/{MilestoneNumber}
		 * @return {GetMilestoneOutput} Success
		 */
		GetMilestone(WorkloadId: string, MilestoneNumber: number): Observable<GetMilestoneOutput> {
			return this.http.get<GetMilestoneOutput>(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/milestones/' + MilestoneNumber, {});
		}

		/**
		 * Get profile information.
		 * Get profiles/{ProfileArn}
		 * @param {string} ProfileArn The profile ARN.
		 * @param {string} ProfileVersion The profile version.
		 * @return {GetProfileOutput} Success
		 */
		GetProfile(ProfileArn: string, ProfileVersion: string | null | undefined): Observable<GetProfileOutput> {
			return this.http.get<GetProfileOutput>(this.baseUri + 'profiles/' + (ProfileArn == null ? '' : encodeURIComponent(ProfileArn)) + '&ProfileVersion=' + (ProfileVersion == null ? '' : encodeURIComponent(ProfileVersion)), {});
		}

		/**
		 * Update a profile.
		 * Patch profiles/{ProfileArn}
		 * @param {string} ProfileArn The profile ARN.
		 * @return {UpdateProfileOutput} Success
		 */
		UpdateProfile(ProfileArn: string, requestBody: UpdateProfilePatchBody): Observable<UpdateProfileOutput> {
			return this.http.patch<UpdateProfileOutput>(this.baseUri + 'profiles/' + (ProfileArn == null ? '' : encodeURIComponent(ProfileArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get profile template.
		 * Get profileTemplate
		 * @return {GetProfileTemplateOutput} Success
		 */
		GetProfileTemplate(): Observable<GetProfileTemplateOutput> {
			return this.http.get<GetProfileTemplateOutput>(this.baseUri + 'profileTemplate', {});
		}

		/**
		 * Get an existing workload.
		 * Get workloads/{WorkloadId}
		 * @return {GetWorkloadOutput} Success
		 */
		GetWorkload(WorkloadId: string): Observable<GetWorkloadOutput> {
			return this.http.get<GetWorkloadOutput>(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)), {});
		}

		/**
		 * Update an existing workload.
		 * Patch workloads/{WorkloadId}
		 * @return {UpdateWorkloadOutput} Success
		 */
		UpdateWorkload(WorkloadId: string, requestBody: UpdateWorkloadPatchBody): Observable<UpdateWorkloadOutput> {
			return this.http.patch<UpdateWorkloadOutput>(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Import a new custom lens or update an existing custom lens.</p> <p>To update an existing custom lens, specify its ARN as the <code>LensAlias</code>. If no ARN is specified, a new custom lens is created.</p> <p>The new or updated lens will have a status of <code>DRAFT</code>. The lens cannot be applied to workloads or shared with other Amazon Web Services accounts until it's published with <a>CreateLensVersion</a>.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <p>A custom lens cannot exceed 500 KB in size.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>
		 * Put importLens
		 * @return {ImportLensOutput} Success
		 */
		ImportLens(requestBody: ImportLensPutBody): Observable<ImportLensOutput> {
			return this.http.put<ImportLensOutput>(this.baseUri + 'importLens', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List of answers for a particular workload and lens.
		 * Get workloads/{WorkloadId}/lensReviews/{LensAlias}/answers
		 * @param {number} MaxResults The maximum number of results to return for this request.
		 * @param {QuestionPriority} QuestionPriority The priority of the question.
		 * @return {ListAnswersOutput} Success
		 */
		ListAnswers(WorkloadId: string, LensAlias: string, PillarId: string | null | undefined, MilestoneNumber: number | null | undefined, NextToken: string | null | undefined, MaxResults: number | null | undefined, QuestionPriority: QuestionPriority | null | undefined): Observable<ListAnswersOutput> {
			return this.http.get<ListAnswersOutput>(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/lensReviews/' + (LensAlias == null ? '' : encodeURIComponent(LensAlias)) + '/answers&PillarId=' + (PillarId == null ? '' : encodeURIComponent(PillarId)) + '&MilestoneNumber=' + MilestoneNumber + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&QuestionPriority=' + QuestionPriority, {});
		}

		/**
		 * List of Trusted Advisor check details by account related to the workload.
		 * Post workloads/{WorkloadId}/checks
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCheckDetailsOutput} Success
		 */
		ListCheckDetails(WorkloadId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCheckDetailsPostBody): Observable<ListCheckDetailsOutput> {
			return this.http.post<ListCheckDetailsOutput>(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/checks&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List of Trusted Advisor checks summarized for all accounts related to the workload.
		 * Post workloads/{WorkloadId}/checkSummaries
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCheckSummariesOutput} Success
		 */
		ListCheckSummaries(WorkloadId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCheckSummariesPostBody): Observable<ListCheckSummariesOutput> {
			return this.http.post<ListCheckSummariesOutput>(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/checkSummaries&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List lens review improvements.
		 * Get workloads/{WorkloadId}/lensReviews/{LensAlias}/improvements
		 * @param {number} MaxResults The maximum number of results to return for this request.
		 * @param {QuestionPriority} QuestionPriority The priority of the question.
		 * @return {ListLensReviewImprovementsOutput} Success
		 */
		ListLensReviewImprovements(WorkloadId: string, LensAlias: string, PillarId: string | null | undefined, MilestoneNumber: number | null | undefined, NextToken: string | null | undefined, MaxResults: number | null | undefined, QuestionPriority: QuestionPriority | null | undefined): Observable<ListLensReviewImprovementsOutput> {
			return this.http.get<ListLensReviewImprovementsOutput>(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/lensReviews/' + (LensAlias == null ? '' : encodeURIComponent(LensAlias)) + '/improvements&PillarId=' + (PillarId == null ? '' : encodeURIComponent(PillarId)) + '&MilestoneNumber=' + MilestoneNumber + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&QuestionPriority=' + QuestionPriority, {});
		}

		/**
		 * List lens reviews for a particular workload.
		 * Get workloads/{WorkloadId}/lensReviews
		 * @return {ListLensReviewsOutput} Success
		 */
		ListLensReviews(WorkloadId: string, MilestoneNumber: number | null | undefined, NextToken: string | null | undefined, MaxResults: number | null | undefined): Observable<ListLensReviewsOutput> {
			return this.http.get<ListLensReviewsOutput>(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/lensReviews&MilestoneNumber=' + MilestoneNumber + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * List the available lenses.
		 * Get lenses
		 * @param {LensType} LensType The type of lenses to be returned.
		 * @param {LensStatusType} LensStatus The status of lenses to be returned.
		 * @return {ListLensesOutput} Success
		 */
		ListLenses(NextToken: string | null | undefined, MaxResults: number | null | undefined, LensType: LensType | null | undefined, LensStatus: LensStatusType | null | undefined, LensName: string | null | undefined): Observable<ListLensesOutput> {
			return this.http.get<ListLensesOutput>(this.baseUri + 'lenses?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&LensType=' + LensType + '&LensStatus=' + LensStatus + '&LensName=' + (LensName == null ? '' : encodeURIComponent(LensName)), {});
		}

		/**
		 * List all milestones for an existing workload.
		 * Post workloads/{WorkloadId}/milestonesSummaries
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMilestonesOutput} Success
		 */
		ListMilestones(WorkloadId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListMilestonesPostBody): Observable<ListMilestonesOutput> {
			return this.http.post<ListMilestonesOutput>(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/milestonesSummaries&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List lens notifications.
		 * Post notifications
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListNotificationsOutput} Success
		 */
		ListNotifications(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListNotificationsPostBody): Observable<ListNotificationsOutput> {
			return this.http.post<ListNotificationsOutput>(this.baseUri + 'notifications?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List profile notifications.
		 * Get profileNotifications/
		 * @return {ListProfileNotificationsOutput} Success
		 */
		ListProfileNotifications(WorkloadId: string | null | undefined, NextToken: string | null | undefined, MaxResults: number | null | undefined): Observable<ListProfileNotificationsOutput> {
			return this.http.get<ListProfileNotificationsOutput>(this.baseUri + 'profileNotifications/?WorkloadId=' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * List profiles.
		 * Get profileSummaries
		 * @param {string} ProfileNamePrefix Prefix for profile name.
		 * @param {ProfileOwnerType} ProfileOwnerType Profile owner type.
		 * @return {ListProfilesOutput} Success
		 */
		ListProfiles(ProfileNamePrefix: string | null | undefined, ProfileOwnerType: ProfileOwnerType | null | undefined, NextToken: string | null | undefined, MaxResults: number | null | undefined): Observable<ListProfilesOutput> {
			return this.http.get<ListProfilesOutput>(this.baseUri + 'profileSummaries?ProfileNamePrefix=' + (ProfileNamePrefix == null ? '' : encodeURIComponent(ProfileNamePrefix)) + '&ProfileOwnerType=' + ProfileOwnerType + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * List the workload invitations.
		 * Get shareInvitations
		 * @param {string} LensNamePrefix An optional string added to the beginning of each lens name returned in the results.
		 * @param {ShareResourceType} ShareResourceType The type of share invitations to be returned.
		 * @param {number} MaxResults The maximum number of results to return for this request.
		 * @param {string} ProfileNamePrefix Profile name prefix.
		 * @return {ListShareInvitationsOutput} Success
		 */
		ListShareInvitations(WorkloadNamePrefix: string | null | undefined, LensNamePrefix: string | null | undefined, ShareResourceType: ShareResourceType | null | undefined, NextToken: string | null | undefined, MaxResults: number | null | undefined, ProfileNamePrefix: string | null | undefined): Observable<ListShareInvitationsOutput> {
			return this.http.get<ListShareInvitationsOutput>(this.baseUri + 'shareInvitations?WorkloadNamePrefix=' + (WorkloadNamePrefix == null ? '' : encodeURIComponent(WorkloadNamePrefix)) + '&LensNamePrefix=' + (LensNamePrefix == null ? '' : encodeURIComponent(LensNamePrefix)) + '&ShareResourceType=' + ShareResourceType + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&ProfileNamePrefix=' + (ProfileNamePrefix == null ? '' : encodeURIComponent(ProfileNamePrefix)), {});
		}

		/**
		 * <p>List the tags for a resource.</p> <note> <p>The WorkloadArn parameter can be a workload ARN, a custom lens ARN, or a profile ARN.</p> </note>
		 * Get tags/{WorkloadArn}
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(WorkloadArn: string): Observable<ListTagsForResourceOutput> {
			return this.http.get<ListTagsForResourceOutput>(this.baseUri + 'tags/' + (WorkloadArn == null ? '' : encodeURIComponent(WorkloadArn)), {});
		}

		/**
		 * <p>Adds one or more tags to the specified resource.</p> <note> <p>The WorkloadArn parameter can be a workload ARN, a custom lens ARN, or a profile ARN.</p> </note>
		 * Post tags/{WorkloadArn}
		 * @return {TagResourceOutput} Success
		 */
		TagResource(WorkloadArn: string, requestBody: TagResourcePostBody): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + 'tags/' + (WorkloadArn == null ? '' : encodeURIComponent(WorkloadArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Paginated list of workloads.
		 * Post workloadsSummaries
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWorkloadsOutput} Success
		 */
		ListWorkloads(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListWorkloadsPostBody): Observable<ListWorkloadsOutput> {
			return this.http.post<ListWorkloadsOutput>(this.baseUri + 'workloadsSummaries?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes specified tags from a resource.</p> <note> <p>The WorkloadArn parameter can be a workload ARN, a custom lens ARN, or a profile ARN.</p> </note> <p>To specify multiple tags, use separate <b>tagKeys</b> parameters, for example:</p> <p> <code>DELETE /tags/WorkloadArn?tagKeys=key1&amp;tagKeys=key2</code> </p>
		 * Delete tags/{WorkloadArn}#tagKeys
		 * @param {Array<string>} tagKeys A list of tag keys. Existing tags of the resource whose keys are members of this list are removed from the resource.
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(WorkloadArn: string, tagKeys: Array<string>): Observable<UntagResourceOutput> {
			return this.http.delete<UntagResourceOutput>(this.baseUri + 'tags/' + (WorkloadArn == null ? '' : encodeURIComponent(WorkloadArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates whether the Amazon Web Services account is opted into organization sharing and discovery integration features.
		 * Patch global-settings
		 * @return {void} Success
		 */
		UpdateGlobalSettings(requestBody: UpdateGlobalSettingsPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'global-settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Update a workload or custom lens share invitation.</p> <note> <p>This API operation can be called independently of any resource. Previous documentation implied that a workload ARN must be specified.</p> </note>
		 * Patch shareInvitations/{ShareInvitationId}
		 * @param {string} ShareInvitationId The ID assigned to the share invitation.
		 * @return {UpdateShareInvitationOutput} Success
		 */
		UpdateShareInvitation(ShareInvitationId: string, requestBody: UpdateShareInvitationPatchBody): Observable<UpdateShareInvitationOutput> {
			return this.http.patch<UpdateShareInvitationOutput>(this.baseUri + 'shareInvitations/' + (ShareInvitationId == null ? '' : encodeURIComponent(ShareInvitationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a workload share.
		 * Patch workloads/{WorkloadId}/shares/{ShareId}
		 * @return {UpdateWorkloadShareOutput} Success
		 */
		UpdateWorkloadShare(ShareId: string, WorkloadId: string, requestBody: UpdateWorkloadSharePatchBody): Observable<UpdateWorkloadShareOutput> {
			return this.http.patch<UpdateWorkloadShareOutput>(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/shares/' + (ShareId == null ? '' : encodeURIComponent(ShareId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Upgrade lens review for a particular workload.
		 * Put workloads/{WorkloadId}/lensReviews/{LensAlias}/upgrade
		 * @return {void} Success
		 */
		UpgradeLensReview(WorkloadId: string, LensAlias: string, requestBody: UpgradeLensReviewPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/lensReviews/' + (LensAlias == null ? '' : encodeURIComponent(LensAlias)) + '/upgrade', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Upgrade a profile.
		 * Put workloads/{WorkloadId}/profiles/{ProfileArn}/upgrade
		 * @param {string} ProfileArn The profile ARN.
		 * @return {void} Success
		 */
		UpgradeProfileVersion(WorkloadId: string, ProfileArn: string, requestBody: UpgradeProfileVersionPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'workloads/' + (WorkloadId == null ? '' : encodeURIComponent(WorkloadId)) + '/profiles/' + (ProfileArn == null ? '' : encodeURIComponent(ProfileArn)) + '/upgrade', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface AssociateLensesPatchBody {

		/**
		 * <p>List of lens aliases to associate or disassociate with a workload. Up to 10 lenses can be specified.</p> <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>
		 * Required
		 * Minimum items: 1
		 */
		LensAliases: Array<string>;
	}
	export interface AssociateLensesPatchBodyFormProperties {
	}
	export function CreateAssociateLensesPatchBodyFormGroup() {
		return new FormGroup<AssociateLensesPatchBodyFormProperties>({
		});

	}

	export interface AssociateProfilesPatchBody {

		/**
		 * The list of profile ARNs to associate with the workload.
		 * Required
		 * Minimum items: 1
		 */
		ProfileArns: Array<string>;
	}
	export interface AssociateProfilesPatchBodyFormProperties {
	}
	export function CreateAssociateProfilesPatchBodyFormGroup() {
		return new FormGroup<AssociateProfilesPatchBodyFormProperties>({
		});

	}

	export interface CreateLensSharePostBody {

		/**
		 * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload, lens, or profile is shared.
		 * Required
		 * Max length: 2048
		 * Min length: 12
		 */
		SharedWith: string;

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: string;
	}
	export interface CreateLensSharePostBodyFormProperties {

		/**
		 * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload, lens, or profile is shared.
		 * Required
		 * Max length: 2048
		 * Min length: 12
		 */
		SharedWith: FormControl<string | null | undefined>,

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateLensSharePostBodyFormGroup() {
		return new FormGroup<CreateLensSharePostBodyFormProperties>({
			SharedWith: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(2048)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface CreateLensVersionPostBody {

		/**
		 * The version of the lens being created.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		LensVersion: string;

		/** Set to true if this new major lens version. */
		IsMajorVersion?: boolean | null;

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: string;
	}
	export interface CreateLensVersionPostBodyFormProperties {

		/**
		 * The version of the lens being created.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		LensVersion: FormControl<string | null | undefined>,

		/** Set to true if this new major lens version. */
		IsMajorVersion: FormControl<boolean | null | undefined>,

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateLensVersionPostBodyFormGroup() {
		return new FormGroup<CreateLensVersionPostBodyFormProperties>({
			LensVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32)]),
			IsMajorVersion: new FormControl<boolean | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface CreateMilestonePostBody {

		/**
		 * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
		 * Required
		 * Max length: 100
		 * Min length: 3
		 */
		MilestoneName: string;

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: string;
	}
	export interface CreateMilestonePostBodyFormProperties {

		/**
		 * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
		 * Required
		 * Max length: 100
		 * Min length: 3
		 */
		MilestoneName: FormControl<string | null | undefined>,

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateMilestonePostBodyFormGroup() {
		return new FormGroup<CreateMilestonePostBodyFormProperties>({
			MilestoneName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface CreateProfilePostBody {

		/**
		 * Name of the profile.
		 * Required
		 * Max length: 100
		 * Min length: 3
		 */
		ProfileName: string;

		/**
		 * The profile description.
		 * Required
		 * Max length: 100
		 * Min length: 3
		 */
		ProfileDescription: string;

		/**
		 * The profile questions.
		 * Required
		 */
		ProfileQuestions: Array<ProfileQuestionUpdate>;

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: string;

		/** The tags assigned to the profile. */
		Tags?: {[id: string]: string };
	}
	export interface CreateProfilePostBodyFormProperties {

		/**
		 * Name of the profile.
		 * Required
		 * Max length: 100
		 * Min length: 3
		 */
		ProfileName: FormControl<string | null | undefined>,

		/**
		 * The profile description.
		 * Required
		 * Max length: 100
		 * Min length: 3
		 */
		ProfileDescription: FormControl<string | null | undefined>,

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** The tags assigned to the profile. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateProfilePostBodyFormGroup() {
		return new FormGroup<CreateProfilePostBodyFormProperties>({
			ProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.pattern('^[A-Za-z0-9-_.,:/()@!&?#+\'’\s]+$')]),
			ProfileDescription: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.pattern('^[A-Za-z0-9-_.,:/()@!&?#+\'’\s]+$')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateProfileSharePostBody {

		/**
		 * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload, lens, or profile is shared.
		 * Required
		 * Max length: 2048
		 * Min length: 12
		 */
		SharedWith: string;

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: string;
	}
	export interface CreateProfileSharePostBodyFormProperties {

		/**
		 * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload, lens, or profile is shared.
		 * Required
		 * Max length: 2048
		 * Min length: 12
		 */
		SharedWith: FormControl<string | null | undefined>,

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateProfileSharePostBodyFormGroup() {
		return new FormGroup<CreateProfileSharePostBodyFormProperties>({
			SharedWith: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(2048)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface CreateWorkloadPostBody {

		/**
		 * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
		 * Required
		 * Max length: 100
		 * Min length: 3
		 */
		WorkloadName: string;

		/**
		 * The description for the workload.
		 * Required
		 * Max length: 250
		 * Min length: 3
		 */
		Description: string;

		/**
		 * The environment for the workload.
		 * Required
		 */
		Environment: WorkloadEnvironment;

		/**
		 * The list of Amazon Web Services account IDs associated with the workload.
		 * Maximum items: 100
		 */
		AccountIds?: Array<string>;

		/**
		 * The list of Amazon Web Services Regions associated with the workload, for example, <code>us-east-2</code>, or <code>ca-central-1</code>.
		 * Maximum items: 50
		 */
		AwsRegions?: Array<string>;

		/**
		 * The list of non-Amazon Web Services Regions associated with the workload.
		 * Maximum items: 5
		 */
		NonAwsRegions?: Array<string>;

		/** The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>. */
		PillarPriorities?: Array<string>;

		/**
		 * The URL of the architectural design for the workload.
		 * Max length: 2048
		 */
		ArchitecturalDesign?: string | null;

		/**
		 * The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.
		 * Max length: 255
		 * Min length: 3
		 */
		ReviewOwner?: string | null;

		/**
		 * <p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>
		 * Max length: 100
		 */
		IndustryType?: string | null;

		/**
		 * The industry for the workload.
		 * Max length: 100
		 */
		Industry?: string | null;

		/**
		 * The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.
		 * Required
		 */
		Lenses: Array<string>;

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		Notes?: string | null;

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: string;

		/** The tags to be associated with the workload. */
		Tags?: {[id: string]: string };

		/** Discovery configuration associated to the workload. */
		DiscoveryConfig?: CreateWorkloadPostBodyDiscoveryConfig;

		/**
		 * List of AppRegistry application ARNs associated to the workload.
		 * Maximum items: 1
		 */
		Applications?: Array<string>;

		/**
		 * The list of profile ARNs associated with the workload.
		 * Maximum items: 1
		 */
		ProfileArns?: Array<string>;
	}
	export interface CreateWorkloadPostBodyFormProperties {

		/**
		 * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
		 * Required
		 * Max length: 100
		 * Min length: 3
		 */
		WorkloadName: FormControl<string | null | undefined>,

		/**
		 * The description for the workload.
		 * Required
		 * Max length: 250
		 * Min length: 3
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The environment for the workload.
		 * Required
		 */
		Environment: FormControl<WorkloadEnvironment | null | undefined>,

		/**
		 * The URL of the architectural design for the workload.
		 * Max length: 2048
		 */
		ArchitecturalDesign: FormControl<string | null | undefined>,

		/**
		 * The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.
		 * Max length: 255
		 * Min length: 3
		 */
		ReviewOwner: FormControl<string | null | undefined>,

		/**
		 * <p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>
		 * Max length: 100
		 */
		IndustryType: FormControl<string | null | undefined>,

		/**
		 * The industry for the workload.
		 * Max length: 100
		 */
		Industry: FormControl<string | null | undefined>,

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		Notes: FormControl<string | null | undefined>,

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** The tags to be associated with the workload. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateWorkloadPostBodyFormGroup() {
		return new FormGroup<CreateWorkloadPostBodyFormProperties>({
			WorkloadName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]),
			Environment: new FormControl<WorkloadEnvironment | null | undefined>(undefined, [Validators.required]),
			ArchitecturalDesign: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('^(|(https?|ftp):\/\/[^\s/$.?#].[^\s]*)$')]),
			ReviewOwner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(255)]),
			IndustryType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Industry: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Notes: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2084)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateWorkloadPostBodyDiscoveryConfig {
		TrustedAdvisorIntegrationStatus?: TrustedAdvisorIntegrationStatus;
		WorkloadResourceDefinition?: Array<DefinitionType>;
	}
	export interface CreateWorkloadPostBodyDiscoveryConfigFormProperties {
		TrustedAdvisorIntegrationStatus: FormControl<TrustedAdvisorIntegrationStatus | null | undefined>,
	}
	export function CreateCreateWorkloadPostBodyDiscoveryConfigFormGroup() {
		return new FormGroup<CreateWorkloadPostBodyDiscoveryConfigFormProperties>({
			TrustedAdvisorIntegrationStatus: new FormControl<TrustedAdvisorIntegrationStatus | null | undefined>(undefined),
		});

	}

	export interface CreateWorkloadSharePostBody {

		/**
		 * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload, lens, or profile is shared.
		 * Required
		 * Max length: 2048
		 * Min length: 12
		 */
		SharedWith: string;

		/**
		 * Permission granted on a share request.
		 * Required
		 */
		PermissionType: ShareInvitationSummaryPermissionType;

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: string;
	}
	export interface CreateWorkloadSharePostBodyFormProperties {

		/**
		 * The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload, lens, or profile is shared.
		 * Required
		 * Max length: 2048
		 * Min length: 12
		 */
		SharedWith: FormControl<string | null | undefined>,

		/**
		 * Permission granted on a share request.
		 * Required
		 */
		PermissionType: FormControl<ShareInvitationSummaryPermissionType | null | undefined>,

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkloadSharePostBodyFormGroup() {
		return new FormGroup<CreateWorkloadSharePostBodyFormProperties>({
			SharedWith: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(2048)]),
			PermissionType: new FormControl<ShareInvitationSummaryPermissionType | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface DisassociateLensesPatchBody {

		/**
		 * <p>List of lens aliases to associate or disassociate with a workload. Up to 10 lenses can be specified.</p> <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>
		 * Required
		 * Minimum items: 1
		 */
		LensAliases: Array<string>;
	}
	export interface DisassociateLensesPatchBodyFormProperties {
	}
	export function CreateDisassociateLensesPatchBodyFormGroup() {
		return new FormGroup<DisassociateLensesPatchBodyFormProperties>({
		});

	}

	export interface DisassociateProfilesPatchBody {

		/**
		 * The list of profile ARNs to disassociate from the workload.
		 * Required
		 * Minimum items: 1
		 */
		ProfileArns: Array<string>;
	}
	export interface DisassociateProfilesPatchBodyFormProperties {
	}
	export function CreateDisassociateProfilesPatchBodyFormGroup() {
		return new FormGroup<DisassociateProfilesPatchBodyFormProperties>({
		});

	}

	export interface UpdateAnswerPatchBody {

		/** <p>List of selected choice IDs in a question answer.</p> <p>The values entered replace the previously selected choices.</p> */
		SelectedChoices?: Array<string>;

		/** A list of choices to update on a question in your workload. The String key corresponds to the choice ID to be updated. */
		ChoiceUpdates?: {[id: string]: ChoiceUpdate };

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		Notes?: string | null;

		/** Defines whether this question is applicable to a lens review. */
		IsApplicable?: boolean | null;

		/** The reason why a question is not applicable to your workload. */
		Reason?: ChoiceReason | null;
	}
	export interface UpdateAnswerPatchBodyFormProperties {

		/** A list of choices to update on a question in your workload. The String key corresponds to the choice ID to be updated. */
		ChoiceUpdates: FormControl<{[id: string]: ChoiceUpdate } | null | undefined>,

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		Notes: FormControl<string | null | undefined>,

		/** Defines whether this question is applicable to a lens review. */
		IsApplicable: FormControl<boolean | null | undefined>,

		/** The reason why a question is not applicable to your workload. */
		Reason: FormControl<ChoiceReason | null | undefined>,
	}
	export function CreateUpdateAnswerPatchBodyFormGroup() {
		return new FormGroup<UpdateAnswerPatchBodyFormProperties>({
			ChoiceUpdates: new FormControl<{[id: string]: ChoiceUpdate } | null | undefined>(undefined),
			Notes: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2084)]),
			IsApplicable: new FormControl<boolean | null | undefined>(undefined),
			Reason: new FormControl<ChoiceReason | null | undefined>(undefined),
		});

	}

	export interface UpdateLensReviewPatchBody {

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		LensNotes?: string | null;

		/** List of pillar notes of a lens review in a workload. */
		PillarNotes?: {[id: string]: string };
	}
	export interface UpdateLensReviewPatchBodyFormProperties {

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		LensNotes: FormControl<string | null | undefined>,

		/** List of pillar notes of a lens review in a workload. */
		PillarNotes: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdateLensReviewPatchBodyFormGroup() {
		return new FormGroup<UpdateLensReviewPatchBodyFormProperties>({
			LensNotes: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2084)]),
			PillarNotes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateProfilePatchBody {

		/**
		 * The profile description.
		 * Max length: 100
		 * Min length: 3
		 */
		ProfileDescription?: string | null;

		/** Profile questions. */
		ProfileQuestions?: Array<ProfileQuestionUpdate>;
	}
	export interface UpdateProfilePatchBodyFormProperties {

		/**
		 * The profile description.
		 * Max length: 100
		 * Min length: 3
		 */
		ProfileDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProfilePatchBodyFormGroup() {
		return new FormGroup<UpdateProfilePatchBodyFormProperties>({
			ProfileDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(100), Validators.pattern('^[A-Za-z0-9-_.,:/()@!&?#+\'’\s]+$')]),
		});

	}

	export interface UpdateWorkloadPatchBody {

		/**
		 * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		WorkloadName?: string | null;

		/**
		 * The description for the workload.
		 * Max length: 250
		 * Min length: 3
		 */
		Description?: string | null;

		/** The environment for the workload. */
		Environment?: WorkloadEnvironment | null;

		/**
		 * The list of Amazon Web Services account IDs associated with the workload.
		 * Maximum items: 100
		 */
		AccountIds?: Array<string>;

		/**
		 * The list of Amazon Web Services Regions associated with the workload, for example, <code>us-east-2</code>, or <code>ca-central-1</code>.
		 * Maximum items: 50
		 */
		AwsRegions?: Array<string>;

		/**
		 * The list of non-Amazon Web Services Regions associated with the workload.
		 * Maximum items: 5
		 */
		NonAwsRegions?: Array<string>;

		/** The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>. */
		PillarPriorities?: Array<string>;

		/**
		 * The URL of the architectural design for the workload.
		 * Max length: 2048
		 */
		ArchitecturalDesign?: string | null;

		/**
		 * The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.
		 * Max length: 255
		 * Min length: 3
		 */
		ReviewOwner?: string | null;

		/** <p>Flag indicating whether the workload owner has acknowledged that the <i>Review owner</i> field is required.</p> <p>If a <b>Review owner</b> is not added to the workload within 60 days of acknowledgement, access to the workload is restricted until an owner is added.</p> */
		IsReviewOwnerUpdateAcknowledged?: boolean | null;

		/**
		 * <p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>
		 * Max length: 100
		 */
		IndustryType?: string | null;

		/**
		 * The industry for the workload.
		 * Max length: 100
		 */
		Industry?: string | null;

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		Notes?: string | null;

		/** The improvement status for a workload. */
		ImprovementStatus?: WorkloadImprovementStatus | null;

		/** Discovery configuration associated to the workload. */
		DiscoveryConfig?: UpdateWorkloadPatchBodyDiscoveryConfig;

		/**
		 * List of AppRegistry application ARNs to associate to the workload.
		 * Maximum items: 1
		 */
		Applications?: Array<string>;
	}
	export interface UpdateWorkloadPatchBodyFormProperties {

		/**
		 * <p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		WorkloadName: FormControl<string | null | undefined>,

		/**
		 * The description for the workload.
		 * Max length: 250
		 * Min length: 3
		 */
		Description: FormControl<string | null | undefined>,

		/** The environment for the workload. */
		Environment: FormControl<WorkloadEnvironment | null | undefined>,

		/**
		 * The URL of the architectural design for the workload.
		 * Max length: 2048
		 */
		ArchitecturalDesign: FormControl<string | null | undefined>,

		/**
		 * The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.
		 * Max length: 255
		 * Min length: 3
		 */
		ReviewOwner: FormControl<string | null | undefined>,

		/** <p>Flag indicating whether the workload owner has acknowledged that the <i>Review owner</i> field is required.</p> <p>If a <b>Review owner</b> is not added to the workload within 60 days of acknowledgement, access to the workload is restricted until an owner is added.</p> */
		IsReviewOwnerUpdateAcknowledged: FormControl<boolean | null | undefined>,

		/**
		 * <p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>
		 * Max length: 100
		 */
		IndustryType: FormControl<string | null | undefined>,

		/**
		 * The industry for the workload.
		 * Max length: 100
		 */
		Industry: FormControl<string | null | undefined>,

		/**
		 * The notes associated with the workload.
		 * Max length: 2084
		 */
		Notes: FormControl<string | null | undefined>,

		/** The improvement status for a workload. */
		ImprovementStatus: FormControl<WorkloadImprovementStatus | null | undefined>,
	}
	export function CreateUpdateWorkloadPatchBodyFormGroup() {
		return new FormGroup<UpdateWorkloadPatchBodyFormProperties>({
			WorkloadName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(100)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(250)]),
			Environment: new FormControl<WorkloadEnvironment | null | undefined>(undefined),
			ArchitecturalDesign: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('^(|(https?|ftp):\/\/[^\s/$.?#].[^\s]*)$')]),
			ReviewOwner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(255)]),
			IsReviewOwnerUpdateAcknowledged: new FormControl<boolean | null | undefined>(undefined),
			IndustryType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Industry: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			Notes: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2084)]),
			ImprovementStatus: new FormControl<WorkloadImprovementStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkloadPatchBodyDiscoveryConfig {
		TrustedAdvisorIntegrationStatus?: TrustedAdvisorIntegrationStatus;
		WorkloadResourceDefinition?: Array<DefinitionType>;
	}
	export interface UpdateWorkloadPatchBodyDiscoveryConfigFormProperties {
		TrustedAdvisorIntegrationStatus: FormControl<TrustedAdvisorIntegrationStatus | null | undefined>,
	}
	export function CreateUpdateWorkloadPatchBodyDiscoveryConfigFormGroup() {
		return new FormGroup<UpdateWorkloadPatchBodyDiscoveryConfigFormProperties>({
			TrustedAdvisorIntegrationStatus: new FormControl<TrustedAdvisorIntegrationStatus | null | undefined>(undefined),
		});

	}

	export interface ImportLensPutBody {

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias?: string | null;

		/**
		 * The JSON representation of a lens.
		 * Required
		 * Max length: 500000
		 * Min length: 2
		 */
		JSONString: string;

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: string;

		/** Tags to associate to a lens. */
		Tags?: {[id: string]: string };
	}
	export interface ImportLensPutBodyFormProperties {

		/**
		 * <p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>
		 * Max length: 128
		 * Min length: 1
		 */
		LensAlias: FormControl<string | null | undefined>,

		/**
		 * The JSON representation of a lens.
		 * Required
		 * Max length: 500000
		 * Min length: 2
		 */
		JSONString: FormControl<string | null | undefined>,

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Tags to associate to a lens. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateImportLensPutBodyFormGroup() {
		return new FormGroup<ImportLensPutBodyFormProperties>({
			LensAlias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			JSONString: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(500000)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface ListCheckDetailsPostBody {

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return for this request.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;

		/**
		 * Well-Architected Lens ARN.
		 * Required
		 */
		LensArn: string;

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId: string;

		/**
		 * The ID of the question.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId: string;

		/**
		 * The ID of a choice.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId: string;
	}
	export interface ListCheckDetailsPostBodyFormProperties {

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return for this request.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Well-Architected Lens ARN.
		 * Required
		 */
		LensArn: FormControl<string | null | undefined>,

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId: FormControl<string | null | undefined>,

		/**
		 * The ID of the question.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId: FormControl<string | null | undefined>,

		/**
		 * The ID of a choice.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId: FormControl<string | null | undefined>,
	}
	export function CreateListCheckDetailsPostBodyFormGroup() {
		return new FormGroup<ListCheckDetailsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			LensArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PillarId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			QuestionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			ChoiceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	export interface ListCheckSummariesPostBody {

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return for this request.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;

		/**
		 * Well-Architected Lens ARN.
		 * Required
		 */
		LensArn: string;

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId: string;

		/**
		 * The ID of the question.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId: string;

		/**
		 * The ID of a choice.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId: string;
	}
	export interface ListCheckSummariesPostBodyFormProperties {

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return for this request.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Well-Architected Lens ARN.
		 * Required
		 */
		LensArn: FormControl<string | null | undefined>,

		/**
		 * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		PillarId: FormControl<string | null | undefined>,

		/**
		 * The ID of the question.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		QuestionId: FormControl<string | null | undefined>,

		/**
		 * The ID of a choice.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ChoiceId: FormControl<string | null | undefined>,
	}
	export function CreateListCheckSummariesPostBodyFormGroup() {
		return new FormGroup<ListCheckSummariesPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			LensArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PillarId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			QuestionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			ChoiceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	export interface ListMilestonesPostBody {

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return for this request.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
	}
	export interface ListMilestonesPostBodyFormProperties {

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return for this request.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListMilestonesPostBodyFormGroup() {
		return new FormGroup<ListMilestonesPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface ListNotificationsPostBody {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId?: string | null;

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return for this request.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
	}
	export interface ListNotificationsPostBodyFormProperties {

		/**
		 * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
		 * Max length: 32
		 * Min length: 32
		 */
		WorkloadId: FormControl<string | null | undefined>,

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return for this request.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListNotificationsPostBodyFormGroup() {
		return new FormGroup<ListNotificationsPostBodyFormProperties>({
			WorkloadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(32), Validators.pattern('[0-9a-f]{32}')]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags for the resource.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags for the resource.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListWorkloadsPostBody {

		/**
		 * An optional string added to the beginning of each workload name returned in the results.
		 * Max length: 100
		 */
		WorkloadNamePrefix?: string | null;

		/** The token to use to retrieve the next set of results. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return for this request.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
	}
	export interface ListWorkloadsPostBodyFormProperties {

		/**
		 * An optional string added to the beginning of each workload name returned in the results.
		 * Max length: 100
		 */
		WorkloadNamePrefix: FormControl<string | null | undefined>,

		/** The token to use to retrieve the next set of results. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return for this request.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListWorkloadsPostBodyFormGroup() {
		return new FormGroup<ListWorkloadsPostBodyFormProperties>({
			WorkloadNamePrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface UpdateGlobalSettingsPatchBody {

		/** The status of organization sharing settings. */
		OrganizationSharingStatus?: TrustedAdvisorIntegrationStatus | null;

		/** The status of discovery support settings. */
		DiscoveryIntegrationStatus?: TrustedAdvisorIntegrationStatus | null;
	}
	export interface UpdateGlobalSettingsPatchBodyFormProperties {

		/** The status of organization sharing settings. */
		OrganizationSharingStatus: FormControl<TrustedAdvisorIntegrationStatus | null | undefined>,

		/** The status of discovery support settings. */
		DiscoveryIntegrationStatus: FormControl<TrustedAdvisorIntegrationStatus | null | undefined>,
	}
	export function CreateUpdateGlobalSettingsPatchBodyFormGroup() {
		return new FormGroup<UpdateGlobalSettingsPatchBodyFormProperties>({
			OrganizationSharingStatus: new FormControl<TrustedAdvisorIntegrationStatus | null | undefined>(undefined),
			DiscoveryIntegrationStatus: new FormControl<TrustedAdvisorIntegrationStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateShareInvitationPatchBody {

		/**
		 * Share invitation action taken by contributor.
		 * Required
		 */
		ShareInvitationAction: ShareInvitationAction;
	}
	export interface UpdateShareInvitationPatchBodyFormProperties {

		/**
		 * Share invitation action taken by contributor.
		 * Required
		 */
		ShareInvitationAction: FormControl<ShareInvitationAction | null | undefined>,
	}
	export function CreateUpdateShareInvitationPatchBodyFormGroup() {
		return new FormGroup<UpdateShareInvitationPatchBodyFormProperties>({
			ShareInvitationAction: new FormControl<ShareInvitationAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateWorkloadSharePatchBody {

		/**
		 * Permission granted on a share request.
		 * Required
		 */
		PermissionType: ShareInvitationSummaryPermissionType;
	}
	export interface UpdateWorkloadSharePatchBodyFormProperties {

		/**
		 * Permission granted on a share request.
		 * Required
		 */
		PermissionType: FormControl<ShareInvitationSummaryPermissionType | null | undefined>,
	}
	export function CreateUpdateWorkloadSharePatchBodyFormGroup() {
		return new FormGroup<UpdateWorkloadSharePatchBodyFormProperties>({
			PermissionType: new FormControl<ShareInvitationSummaryPermissionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpgradeLensReviewPutBody {

		/**
		 * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
		 * Required
		 * Max length: 100
		 * Min length: 3
		 */
		MilestoneName: string;

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
	}
	export interface UpgradeLensReviewPutBodyFormProperties {

		/**
		 * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
		 * Required
		 * Max length: 100
		 * Min length: 3
		 */
		MilestoneName: FormControl<string | null | undefined>,

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateUpgradeLensReviewPutBodyFormGroup() {
		return new FormGroup<UpgradeLensReviewPutBodyFormProperties>({
			MilestoneName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface UpgradeProfileVersionPutBody {

		/**
		 * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		MilestoneName?: string | null;

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
	}
	export interface UpgradeProfileVersionPutBodyFormProperties {

		/**
		 * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
		 * Max length: 100
		 * Min length: 3
		 */
		MilestoneName: FormControl<string | null | undefined>,

		/**
		 * <p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>
		 * Max length: 2048
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateUpgradeProfileVersionPutBodyFormGroup() {
		return new FormGroup<UpgradeProfileVersionPutBodyFormProperties>({
			MilestoneName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(100)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

}

