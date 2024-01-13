import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateRepositoryResponse {

		/** Information about a repository association. */
		RepositoryAssociation?: RepositoryAssociation;
	}
	export interface AssociateRepositoryResponseFormProperties {
	}
	export function CreateAssociateRepositoryResponseFormGroup() {
		return new FormGroup<AssociateRepositoryResponseFormProperties>({
		});

	}


	/** Information about a repository association. */
	export interface RepositoryAssociation {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		AssociationId?: string | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		AssociationArn?: string | null;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		ConnectionArn?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Owner?: string | null;
		ProviderType?: RepositoryAssociationProviderType | null;
		State?: RepositoryAssociationState | null;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		StateReason?: string | null;
		LastUpdatedTimeStamp?: Date | null;
		CreatedTimeStamp?: Date | null;
	}

	/** Information about a repository association. */
	export interface RepositoryAssociationFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		AssociationId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		AssociationArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		ConnectionArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Owner: FormControl<string | null | undefined>,
		ProviderType: FormControl<RepositoryAssociationProviderType | null | undefined>,
		State: FormControl<RepositoryAssociationState | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		StateReason: FormControl<string | null | undefined>,
		LastUpdatedTimeStamp: FormControl<Date | null | undefined>,
		CreatedTimeStamp: FormControl<Date | null | undefined>,
	}
	export function CreateRepositoryAssociationFormGroup() {
		return new FormGroup<RepositoryAssociationFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			AssociationArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('^arn:aws[^:\s]*:codeguru-reviewer:[^:\s]+:[\d]{12}:[a-z-]+:[\w-]+$')]),
			ConnectionArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('arn:aws(-[\w]+)*:.+:.+:[0-9]{12}:.+')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^\S[\w.-]*$')]),
			Owner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^\S(.*\S)?$')]),
			ProviderType: new FormControl<RepositoryAssociationProviderType | null | undefined>(undefined),
			State: new FormControl<RepositoryAssociationState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			LastUpdatedTimeStamp: new FormControl<Date | null | undefined>(undefined),
			CreatedTimeStamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum RepositoryAssociationProviderType { CodeCommit = 0, GitHub = 1, Bitbucket = 2 }

	export enum RepositoryAssociationState { Associated = 0, Associating = 1, Failed = 2, Disassociating = 3 }


	/** Information about an AWS CodeCommit repository. */
	export interface CodeCommitRepository {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Name: string;
	}

	/** Information about an AWS CodeCommit repository. */
	export interface CodeCommitRepositoryFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCodeCommitRepositoryFormGroup() {
		return new FormGroup<CodeCommitRepositoryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^\S[\w.-]*$')]),
		});

	}


	/**  Information about a third party source repository connected through CodeStar Connections.  */
	export interface ThirdPartySourceRepository {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		ConnectionArn: string;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Owner: string;
	}

	/**  Information about a third party source repository connected through CodeStar Connections.  */
	export interface ThirdPartySourceRepositoryFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		ConnectionArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Owner: FormControl<string | null | undefined>,
	}
	export function CreateThirdPartySourceRepositoryFormGroup() {
		return new FormGroup<ThirdPartySourceRepositoryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^\S[\w.-]*$')]),
			ConnectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256), Validators.pattern('arn:aws(-[\w]+)*:.+:.+:[0-9]{12}:.+')]),
			Owner: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^\S(.*\S)?$')]),
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

	export interface DescribeCodeReviewResponse {

		/** Information about a code review. */
		CodeReview?: CodeReview;
	}
	export interface DescribeCodeReviewResponseFormProperties {
	}
	export function CreateDescribeCodeReviewResponseFormGroup() {
		return new FormGroup<DescribeCodeReviewResponseFormProperties>({
		});

	}


	/**  Information about a code review.  */
	export interface CodeReview {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		CodeReviewArn?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		RepositoryName?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Owner?: string | null;
		ProviderType?: RepositoryAssociationProviderType | null;
		State?: CodeReviewState | null;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		StateReason?: string | null;
		CreatedTimeStamp?: Date | null;
		LastUpdatedTimeStamp?: Date | null;
		Type?: CodeReviewType | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		PullRequestId?: string | null;

		/** Information about the source code type. */
		SourceCodeType?: SourceCodeType;

		/** Information about the statistics from the code review. */
		Metrics?: Metrics;
	}

	/**  Information about a code review.  */
	export interface CodeReviewFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		CodeReviewArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		RepositoryName: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Owner: FormControl<string | null | undefined>,
		ProviderType: FormControl<RepositoryAssociationProviderType | null | undefined>,
		State: FormControl<CodeReviewState | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		StateReason: FormControl<string | null | undefined>,
		CreatedTimeStamp: FormControl<Date | null | undefined>,
		LastUpdatedTimeStamp: FormControl<Date | null | undefined>,
		Type: FormControl<CodeReviewType | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		PullRequestId: FormControl<string | null | undefined>,
	}
	export function CreateCodeReviewFormGroup() {
		return new FormGroup<CodeReviewFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^\S[\w.-]*$')]),
			CodeReviewArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('^arn:aws[^:\s]*:codeguru-reviewer:[^:\s]+:[\d]{12}:[a-z-]+:[\w-]+$')]),
			RepositoryName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^\S[\w.-]*$')]),
			Owner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^\S(.*\S)?$')]),
			ProviderType: new FormControl<RepositoryAssociationProviderType | null | undefined>(undefined),
			State: new FormControl<CodeReviewState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			CreatedTimeStamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimeStamp: new FormControl<Date | null | undefined>(undefined),
			Type: new FormControl<CodeReviewType | null | undefined>(undefined),
			PullRequestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	export enum CodeReviewState { Completed = 0, Pending = 1, Failed = 2, Deleting = 3 }

	export enum CodeReviewType { PullRequest = 0 }


	/**  Information about the source code type.  */
	export interface SourceCodeType {

		/** The commit diff for the pull request. */
		CommitDiff?: CommitDiffSourceCodeType;
	}

	/**  Information about the source code type.  */
	export interface SourceCodeTypeFormProperties {
	}
	export function CreateSourceCodeTypeFormGroup() {
		return new FormGroup<SourceCodeTypeFormProperties>({
		});

	}


	/**  The commit diff for the pull request.  */
	export interface CommitDiffSourceCodeType {

		/**
		 * Max length: 64
		 * Min length: 6
		 */
		SourceCommit?: string | null;

		/**
		 * Max length: 64
		 * Min length: 6
		 */
		DestinationCommit?: string | null;
	}

	/**  The commit diff for the pull request.  */
	export interface CommitDiffSourceCodeTypeFormProperties {

		/**
		 * Max length: 64
		 * Min length: 6
		 */
		SourceCommit: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 6
		 */
		DestinationCommit: FormControl<string | null | undefined>,
	}
	export function CreateCommitDiffSourceCodeTypeFormGroup() {
		return new FormGroup<CommitDiffSourceCodeTypeFormProperties>({
			SourceCommit: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(64)]),
			DestinationCommit: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(64)]),
		});

	}


	/**  Information about the statistics from the code review.  */
	export interface Metrics {
		MeteredLinesOfCodeCount?: number | null;
		FindingsCount?: number | null;
	}

	/**  Information about the statistics from the code review.  */
	export interface MetricsFormProperties {
		MeteredLinesOfCodeCount: FormControl<number | null | undefined>,
		FindingsCount: FormControl<number | null | undefined>,
	}
	export function CreateMetricsFormGroup() {
		return new FormGroup<MetricsFormProperties>({
			MeteredLinesOfCodeCount: new FormControl<number | null | undefined>(undefined),
			FindingsCount: new FormControl<number | null | undefined>(undefined),
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

	export interface DescribeRecommendationFeedbackResponse {

		/** Information about the recommendation feedback. */
		RecommendationFeedback?: RecommendationFeedback;
	}
	export interface DescribeRecommendationFeedbackResponseFormProperties {
	}
	export function CreateDescribeRecommendationFeedbackResponseFormGroup() {
		return new FormGroup<DescribeRecommendationFeedbackResponseFormProperties>({
		});

	}


	/**  Information about the recommendation feedback.  */
	export interface RecommendationFeedback {

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		CodeReviewArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		RecommendationId?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		Reactions?: Array<Reaction>;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		UserId?: string | null;
		CreatedTimeStamp?: Date | null;
		LastUpdatedTimeStamp?: Date | null;
	}

	/**  Information about the recommendation feedback.  */
	export interface RecommendationFeedbackFormProperties {

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		CodeReviewArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		RecommendationId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		UserId: FormControl<string | null | undefined>,
		CreatedTimeStamp: FormControl<Date | null | undefined>,
		LastUpdatedTimeStamp: FormControl<Date | null | undefined>,
	}
	export function CreateRecommendationFeedbackFormGroup() {
		return new FormGroup<RecommendationFeedbackFormProperties>({
			CodeReviewArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('^arn:aws[^:\s]*:codeguru-reviewer:[^:\s]+:[\d]{12}:[a-z-]+:[\w-]+$')]),
			RecommendationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			CreatedTimeStamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimeStamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum Reaction { ThumbsUp = 0, ThumbsDown = 1 }

	export interface DescribeRepositoryAssociationResponse {

		/** Information about a repository association. */
		RepositoryAssociation?: RepositoryAssociation;
	}
	export interface DescribeRepositoryAssociationResponseFormProperties {
	}
	export function CreateDescribeRepositoryAssociationResponseFormGroup() {
		return new FormGroup<DescribeRepositoryAssociationResponseFormProperties>({
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface DisassociateRepositoryResponse {

		/** Information about a repository association. */
		RepositoryAssociation?: RepositoryAssociation;
	}
	export interface DisassociateRepositoryResponseFormProperties {
	}
	export function CreateDisassociateRepositoryResponseFormGroup() {
		return new FormGroup<DisassociateRepositoryResponseFormProperties>({
		});

	}

	export interface ListCodeReviewsResponse {
		CodeReviewSummaries?: Array<CodeReviewSummary>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListCodeReviewsResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCodeReviewsResponseFormGroup() {
		return new FormGroup<ListCodeReviewsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}


	/**  Information about the summary of the code review.  */
	export interface CodeReviewSummary {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		CodeReviewArn?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		RepositoryName?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Owner?: string | null;
		ProviderType?: RepositoryAssociationProviderType | null;
		State?: CodeReviewState | null;
		CreatedTimeStamp?: Date | null;
		LastUpdatedTimeStamp?: Date | null;
		Type?: CodeReviewType | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		PullRequestId?: string | null;

		/** Information about metrics summaries. */
		MetricsSummary?: MetricsSummary;
	}

	/**  Information about the summary of the code review.  */
	export interface CodeReviewSummaryFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		CodeReviewArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		RepositoryName: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Owner: FormControl<string | null | undefined>,
		ProviderType: FormControl<RepositoryAssociationProviderType | null | undefined>,
		State: FormControl<CodeReviewState | null | undefined>,
		CreatedTimeStamp: FormControl<Date | null | undefined>,
		LastUpdatedTimeStamp: FormControl<Date | null | undefined>,
		Type: FormControl<CodeReviewType | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		PullRequestId: FormControl<string | null | undefined>,
	}
	export function CreateCodeReviewSummaryFormGroup() {
		return new FormGroup<CodeReviewSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^\S[\w.-]*$')]),
			CodeReviewArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('^arn:aws[^:\s]*:codeguru-reviewer:[^:\s]+:[\d]{12}:[a-z-]+:[\w-]+$')]),
			RepositoryName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^\S[\w.-]*$')]),
			Owner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^\S(.*\S)?$')]),
			ProviderType: new FormControl<RepositoryAssociationProviderType | null | undefined>(undefined),
			State: new FormControl<CodeReviewState | null | undefined>(undefined),
			CreatedTimeStamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimeStamp: new FormControl<Date | null | undefined>(undefined),
			Type: new FormControl<CodeReviewType | null | undefined>(undefined),
			PullRequestId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
		});

	}


	/**  Information about metrics summaries.  */
	export interface MetricsSummary {
		MeteredLinesOfCodeCount?: number | null;
		FindingsCount?: number | null;
	}

	/**  Information about metrics summaries.  */
	export interface MetricsSummaryFormProperties {
		MeteredLinesOfCodeCount: FormControl<number | null | undefined>,
		FindingsCount: FormControl<number | null | undefined>,
	}
	export function CreateMetricsSummaryFormGroup() {
		return new FormGroup<MetricsSummaryFormProperties>({
			MeteredLinesOfCodeCount: new FormControl<number | null | undefined>(undefined),
			FindingsCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ProviderType { CodeCommit = 0, GitHub = 1, Bitbucket = 2 }

	export enum JobState { Completed = 0, Pending = 1, Failed = 2, Deleting = 3 }

	export interface ListRecommendationFeedbackResponse {
		RecommendationFeedbackSummaries?: Array<RecommendationFeedbackSummary>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListRecommendationFeedbackResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecommendationFeedbackResponseFormGroup() {
		return new FormGroup<ListRecommendationFeedbackResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}


	/**  Information about recommendation feedback summaries.  */
	export interface RecommendationFeedbackSummary {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		RecommendationId?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		Reactions?: Array<Reaction>;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		UserId?: string | null;
	}

	/**  Information about recommendation feedback summaries.  */
	export interface RecommendationFeedbackSummaryFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		RecommendationId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationFeedbackSummaryFormGroup() {
		return new FormGroup<RecommendationFeedbackSummaryFormProperties>({
			RecommendationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface ListRecommendationsResponse {
		RecommendationSummaries?: Array<RecommendationSummary>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListRecommendationsResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecommendationsResponseFormGroup() {
		return new FormGroup<ListRecommendationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}


	/**  Information about recommendations.  */
	export interface RecommendationSummary {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		FilePath?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		RecommendationId?: string | null;
		StartLine?: number | null;
		EndLine?: number | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Description?: string | null;
	}

	/**  Information about recommendations.  */
	export interface RecommendationSummaryFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		FilePath: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		RecommendationId: FormControl<string | null | undefined>,
		StartLine: FormControl<number | null | undefined>,
		EndLine: FormControl<number | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationSummaryFormGroup() {
		return new FormGroup<RecommendationSummaryFormProperties>({
			FilePath: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			RecommendationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			StartLine: new FormControl<number | null | undefined>(undefined),
			EndLine: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface ListRepositoryAssociationsResponse {
		RepositoryAssociationSummaries?: Array<RepositoryAssociationSummary>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListRepositoryAssociationsResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRepositoryAssociationsResponseFormGroup() {
		return new FormGroup<ListRepositoryAssociationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}


	/** Information about a repository association. */
	export interface RepositoryAssociationSummary {

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		AssociationArn?: string | null;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		ConnectionArn?: string | null;
		LastUpdatedTimeStamp?: Date | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		AssociationId?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Owner?: string | null;
		ProviderType?: RepositoryAssociationProviderType | null;
		State?: RepositoryAssociationState | null;
	}

	/** Information about a repository association. */
	export interface RepositoryAssociationSummaryFormProperties {

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		AssociationArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		ConnectionArn: FormControl<string | null | undefined>,
		LastUpdatedTimeStamp: FormControl<Date | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		AssociationId: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		Owner: FormControl<string | null | undefined>,
		ProviderType: FormControl<RepositoryAssociationProviderType | null | undefined>,
		State: FormControl<RepositoryAssociationState | null | undefined>,
	}
	export function CreateRepositoryAssociationSummaryFormGroup() {
		return new FormGroup<RepositoryAssociationSummaryFormProperties>({
			AssociationArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('^arn:aws[^:\s]*:codeguru-reviewer:[^:\s]+:[\d]{12}:[a-z-]+:[\w-]+$')]),
			ConnectionArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('arn:aws(-[\w]+)*:.+:.+:[0-9]{12}:.+')]),
			LastUpdatedTimeStamp: new FormControl<Date | null | undefined>(undefined),
			AssociationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^\S[\w.-]*$')]),
			Owner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^\S(.*\S)?$')]),
			ProviderType: new FormControl<RepositoryAssociationProviderType | null | undefined>(undefined),
			State: new FormControl<RepositoryAssociationState | null | undefined>(undefined),
		});

	}

	export interface PutRecommendationFeedbackResponse {
	}
	export interface PutRecommendationFeedbackResponseFormProperties {
	}
	export function CreatePutRecommendationFeedbackResponseFormGroup() {
		return new FormGroup<PutRecommendationFeedbackResponseFormProperties>({
		});

	}


	/** Information about a repository. */
	export interface Repository {

		/** Information about an AWS CodeCommit repository. */
		CodeCommit?: CodeCommitRepository;

		/** Information about a third party source repository connected through CodeStar Connections. */
		Bitbucket?: ThirdPartySourceRepository;
	}

	/** Information about a repository. */
	export interface RepositoryFormProperties {
	}
	export function CreateRepositoryFormGroup() {
		return new FormGroup<RepositoryFormProperties>({
		});

	}

	export interface AssociateRepositoryRequest {

		/**
		 * Information about a repository.
		 * Required
		 */
		Repository: Repository;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
	}
	export interface AssociateRepositoryRequestFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateRepositoryRequestFormGroup() {
		return new FormGroup<AssociateRepositoryRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[\w-]+$')]),
		});

	}

	export enum Type { PullRequest = 0 }

	export interface DescribeCodeReviewRequest {
	}
	export interface DescribeCodeReviewRequestFormProperties {
	}
	export function CreateDescribeCodeReviewRequestFormGroup() {
		return new FormGroup<DescribeCodeReviewRequestFormProperties>({
		});

	}

	export interface DescribeRecommendationFeedbackRequest {
	}
	export interface DescribeRecommendationFeedbackRequestFormProperties {
	}
	export function CreateDescribeRecommendationFeedbackRequestFormGroup() {
		return new FormGroup<DescribeRecommendationFeedbackRequestFormProperties>({
		});

	}

	export interface DescribeRepositoryAssociationRequest {
	}
	export interface DescribeRepositoryAssociationRequestFormProperties {
	}
	export function CreateDescribeRepositoryAssociationRequestFormGroup() {
		return new FormGroup<DescribeRepositoryAssociationRequestFormProperties>({
		});

	}

	export interface DisassociateRepositoryRequest {
	}
	export interface DisassociateRepositoryRequestFormProperties {
	}
	export function CreateDisassociateRepositoryRequestFormGroup() {
		return new FormGroup<DisassociateRepositoryRequestFormProperties>({
		});

	}

	export interface ListCodeReviewsRequest {
	}
	export interface ListCodeReviewsRequestFormProperties {
	}
	export function CreateListCodeReviewsRequestFormGroup() {
		return new FormGroup<ListCodeReviewsRequestFormProperties>({
		});

	}

	export interface ListRecommendationFeedbackRequest {
	}
	export interface ListRecommendationFeedbackRequestFormProperties {
	}
	export function CreateListRecommendationFeedbackRequestFormGroup() {
		return new FormGroup<ListRecommendationFeedbackRequestFormProperties>({
		});

	}

	export interface ListRecommendationsRequest {
	}
	export interface ListRecommendationsRequestFormProperties {
	}
	export function CreateListRecommendationsRequestFormGroup() {
		return new FormGroup<ListRecommendationsRequestFormProperties>({
		});

	}

	export interface ListRepositoryAssociationsRequest {
	}
	export interface ListRepositoryAssociationsRequestFormProperties {
	}
	export function CreateListRepositoryAssociationsRequestFormGroup() {
		return new FormGroup<ListRepositoryAssociationsRequestFormProperties>({
		});

	}

	export interface PutRecommendationFeedbackRequest {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		CodeReviewArn: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		RecommendationId: string;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		Reactions: Array<Reaction>;
	}
	export interface PutRecommendationFeedbackRequestFormProperties {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		CodeReviewArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		RecommendationId: FormControl<string | null | undefined>,
	}
	export function CreatePutRecommendationFeedbackRequestFormGroup() {
		return new FormGroup<PutRecommendationFeedbackRequestFormProperties>({
			CodeReviewArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('^arn:aws[^:\s]*:codeguru-reviewer:[^:\s]+:[\d]{12}:[a-z-]+:[\w-]+$')]),
			RecommendationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associates an AWS CodeCommit repository with Amazon CodeGuru Reviewer. When you associate an AWS CodeCommit repository with Amazon CodeGuru Reviewer, Amazon CodeGuru Reviewer will provide recommendations for each pull request raised within the repository. You can view recommendations in the AWS CodeCommit repository.</p> <p>You can associate a GitHub repository using the Amazon CodeGuru Reviewer console.</p>
		 * Post associations
		 * @return {AssociateRepositoryResponse} Success
		 */
		AssociateRepository(requestBody: AssociateRepositoryPostBody): Observable<AssociateRepositoryResponse> {
			return this.http.post<AssociateRepositoryResponse>(this.baseUri + 'associations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists repository associations. You can optionally filter on one or more of the following recommendation properties: provider types, states, names, and owners.
		 * Get associations
		 * @param {Array<ProviderType>} ProviderType List of provider types to use as a filter.
		 * @param {Array<RepositoryAssociationState>} State List of states to use as a filter.
		 * @param {Array<string>} Name List of repository names to use as a filter.
		 * @param {Array<string>} Owner List of owners to use as a filter. For GitHub, this is name of the GitHub account that was used to associate the repository. For AWS CodeCommit, it is the name of the CodeCommit account that was used to associate the repository.
		 * @param {number} MaxResults The maximum number of repository association results returned by <code>ListRepositoryAssociations</code> in paginated output. When this parameter is used, <code>ListRepositoryAssociations</code> only returns <code>maxResults</code> results in a single page with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRepositoryAssociations</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 25. If this parameter is not used, <code>ListRepositoryAssociations</code> returns up to 25 results and a <code>nextToken</code> value if applicable. 
		 * @param {string} NextToken <p>The <code>nextToken</code> value returned from a previous paginated <code>ListRepositoryAssociations</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>Treat this token as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 * @return {ListRepositoryAssociationsResponse} Success
		 */
		ListRepositoryAssociations(ProviderType: Array<ProviderType> | null | undefined, State: Array<RepositoryAssociationState> | null | undefined, Name: Array<string> | null | undefined, Owner: Array<string> | null | undefined, MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListRepositoryAssociationsResponse> {
			return this.http.get<ListRepositoryAssociationsResponse>(this.baseUri + 'associations?' + ProviderType?.map(z => `ProviderType=${z}`).join('&') + '&' + State?.map(z => `State=${z}`).join('&') + '&' + Name?.map(z => `Name=${encodeURIComponent(z)}`).join('&') + '&' + Owner?.map(z => `Owner=${encodeURIComponent(z)}`).join('&') + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns the metadaata associated with the code review along with its status.
		 * Get codereviews/{CodeReviewArn}
		 * @param {string} CodeReviewArn  The Amazon Resource Name (ARN) of the code review to describe. 
		 * @return {DescribeCodeReviewResponse} Success
		 */
		DescribeCodeReview(CodeReviewArn: string): Observable<DescribeCodeReviewResponse> {
			return this.http.get<DescribeCodeReviewResponse>(this.baseUri + 'codereviews/' + (CodeReviewArn == null ? '' : encodeURIComponent(CodeReviewArn)), {});
		}

		/**
		 * Describes the customer feedback for a CodeGuru Reviewer recommendation.
		 * Get feedback/{CodeReviewArn}#RecommendationId
		 * @param {string} CodeReviewArn  The Amazon Resource Name (ARN) that identifies the code review. 
		 * @param {string} RecommendationId  The recommendation ID that can be used to track the provided recommendations and then to collect the feedback. 
		 * @param {string} UserId  Optional parameter to describe the feedback for a given user. If this is not supplied, it defaults to the user making the request. 
		 * @return {DescribeRecommendationFeedbackResponse} Success
		 */
		DescribeRecommendationFeedback(CodeReviewArn: string, RecommendationId: string, UserId: string | null | undefined): Observable<DescribeRecommendationFeedbackResponse> {
			return this.http.get<DescribeRecommendationFeedbackResponse>(this.baseUri + 'feedback/' + (CodeReviewArn == null ? '' : encodeURIComponent(CodeReviewArn)) + '#RecommendationId&RecommendationId=' + (RecommendationId == null ? '' : encodeURIComponent(RecommendationId)) + '&UserId=' + (UserId == null ? '' : encodeURIComponent(UserId)), {});
		}

		/**
		 * Describes a repository association.
		 * Get associations/{AssociationArn}
		 * @param {string} AssociationArn The Amazon Resource Name (ARN) identifying the association. You can retrieve this ARN by calling <code>ListRepositories</code>.
		 * @return {DescribeRepositoryAssociationResponse} Success
		 */
		DescribeRepositoryAssociation(AssociationArn: string): Observable<DescribeRepositoryAssociationResponse> {
			return this.http.get<DescribeRepositoryAssociationResponse>(this.baseUri + 'associations/' + (AssociationArn == null ? '' : encodeURIComponent(AssociationArn)), {});
		}

		/**
		 * Removes the association between Amazon CodeGuru Reviewer and a repository.
		 * Delete associations/{AssociationArn}
		 * @param {string} AssociationArn The Amazon Resource Name (ARN) identifying the association.
		 * @return {DisassociateRepositoryResponse} Success
		 */
		DisassociateRepository(AssociationArn: string): Observable<DisassociateRepositoryResponse> {
			return this.http.delete<DisassociateRepositoryResponse>(this.baseUri + 'associations/' + (AssociationArn == null ? '' : encodeURIComponent(AssociationArn)), {});
		}

		/**
		 * Lists all the code reviews that the customer has created in the past 90 days.
		 * Get codereviews#Type
		 * @param {Array<ProviderType>} ProviderTypes  List of provider types for filtering that needs to be applied before displaying the result. For example, "providerTypes=[GitHub]" will list code reviews from GitHub. 
		 * @param {Array<JobState>} States  List of states for filtering that needs to be applied before displaying the result. For example, "states=[Pending]" will list code reviews in the Pending state. 
		 * @param {Array<string>} RepositoryNames  List of repository names for filtering that needs to be applied before displaying the result. 
		 * @param {CodeReviewType} Type  The type of code reviews to list in the response. 
		 * @param {number} MaxResults  The maximum number of results that are returned per call. The default is 100. 
		 * @param {string} NextToken  If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. 
		 * @return {ListCodeReviewsResponse} Success
		 */
		ListCodeReviews(ProviderTypes: Array<ProviderType> | null | undefined, States: Array<JobState> | null | undefined, RepositoryNames: Array<string> | null | undefined, Type: CodeReviewType, MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListCodeReviewsResponse> {
			return this.http.get<ListCodeReviewsResponse>(this.baseUri + 'codereviews#Type?' + ProviderTypes?.map(z => `ProviderTypes=${z}`).join('&') + '&' + States?.map(z => `States=${z}`).join('&') + '&' + RepositoryNames?.map(z => `RepositoryNames=${encodeURIComponent(z)}`).join('&') + '&Type=' + Type + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the customer feedback for a CodeGuru Reviewer recommendation for all users. This API will be used from the console to extract the previously given feedback by the user to pre-populate the feedback emojis for all recommendations.
		 * Get feedback/{CodeReviewArn}/RecommendationFeedback
		 * @param {string} NextToken  If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. 
		 * @param {number} MaxResults  The maximum number of results that are returned per call. The default is 100. 
		 * @param {string} CodeReviewArn  The Amazon Resource Name (ARN) that identifies the code review. 
		 * @param {Array<string>} UserIds  Filter on userIds that need to be applied before displaying the result. This can be used to query all the recommendation feedback for a code review from a given user. 
		 * @param {Array<string>} RecommendationIds  Filter on recommendationIds that need to be applied before displaying the result. This can be used to query all the recommendation feedback for a given recommendation. 
		 * @return {ListRecommendationFeedbackResponse} Success
		 */
		ListRecommendationFeedback(NextToken: string | null | undefined, MaxResults: number | null | undefined, CodeReviewArn: string, UserIds: Array<string> | null | undefined, RecommendationIds: Array<string> | null | undefined): Observable<ListRecommendationFeedbackResponse> {
			return this.http.get<ListRecommendationFeedbackResponse>(this.baseUri + 'feedback/' + (CodeReviewArn == null ? '' : encodeURIComponent(CodeReviewArn)) + '/RecommendationFeedback?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&' + UserIds?.map(z => `UserIds=${encodeURIComponent(z)}`).join('&') + '&' + RecommendationIds?.map(z => `RecommendationIds=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Returns the list of all recommendations for a completed code review.
		 * Get codereviews/{CodeReviewArn}/Recommendations
		 * @param {string} NextToken  Pagination token. 
		 * @param {number} MaxResults  The maximum number of results that are returned per call. The default is 100. 
		 * @param {string} CodeReviewArn  The Amazon Resource Name (ARN) of the code review to describe. 
		 * @return {ListRecommendationsResponse} Success
		 */
		ListRecommendations(NextToken: string | null | undefined, MaxResults: number | null | undefined, CodeReviewArn: string): Observable<ListRecommendationsResponse> {
			return this.http.get<ListRecommendationsResponse>(this.baseUri + 'codereviews/' + (CodeReviewArn == null ? '' : encodeURIComponent(CodeReviewArn)) + '/Recommendations?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * Stores customer feedback for a CodeGuru-Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.
		 * Put feedback
		 * @return {PutRecommendationFeedbackResponse} Success
		 */
		PutRecommendationFeedback(requestBody: PutRecommendationFeedbackPutBody): Observable<PutRecommendationFeedbackResponse> {
			return this.http.put<PutRecommendationFeedbackResponse>(this.baseUri + 'feedback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AssociateRepositoryPostBody {

		/**
		 * Information about a repository.
		 * Required
		 */
		Repository: AssociateRepositoryPostBodyRepository;

		/**
		 * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p> <p>To add a new repository association, this parameter specifies a unique identifier for the new repository association that helps ensure idempotency.</p> <p>If you use the AWS CLI or one of the AWS SDKs to call this operation, you can leave this parameter empty. The CLI or SDK generates a random UUID for you and includes that in the request. If you don't use the SDK and instead generate a raw HTTP request to the Secrets Manager service endpoint, you must generate a ClientRequestToken yourself for new versions and include that value in the request.</p> <p>You typically interact with this value if you implement your own retry logic and want to ensure that a given repository association is not created twice. We recommend that you generate a UUID-type value to ensure uniqueness within the specified repository association.</p> <p>Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate repository associations if there are failures and retries. </p>
		 * Max length: 64
		 * Min length: 1
		 */
		ClientRequestToken?: string | null;
	}
	export interface AssociateRepositoryPostBodyFormProperties {

		/**
		 * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p> <p>To add a new repository association, this parameter specifies a unique identifier for the new repository association that helps ensure idempotency.</p> <p>If you use the AWS CLI or one of the AWS SDKs to call this operation, you can leave this parameter empty. The CLI or SDK generates a random UUID for you and includes that in the request. If you don't use the SDK and instead generate a raw HTTP request to the Secrets Manager service endpoint, you must generate a ClientRequestToken yourself for new versions and include that value in the request.</p> <p>You typically interact with this value if you implement your own retry logic and want to ensure that a given repository association is not created twice. We recommend that you generate a UUID-type value to ensure uniqueness within the specified repository association.</p> <p>Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate repository associations if there are failures and retries. </p>
		 * Max length: 64
		 * Min length: 1
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateRepositoryPostBodyFormGroup() {
		return new FormGroup<AssociateRepositoryPostBodyFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[\w-]+$')]),
		});

	}

	export interface AssociateRepositoryPostBodyRepository {

		/** Information about an AWS CodeCommit repository. */
		CodeCommit?: CodeCommitRepository;

		/** Information about a third party source repository connected through CodeStar Connections. */
		Bitbucket?: ThirdPartySourceRepository;
	}
	export interface AssociateRepositoryPostBodyRepositoryFormProperties {
	}
	export function CreateAssociateRepositoryPostBodyRepositoryFormGroup() {
		return new FormGroup<AssociateRepositoryPostBodyRepositoryFormProperties>({
		});

	}

	export interface PutRecommendationFeedbackPutBody {

		/**
		 * The Amazon Resource Name (ARN) that identifies the code review.
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		CodeReviewArn: string;

		/**
		 * The recommendation ID that can be used to track the provided recommendations and then to collect the feedback.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		RecommendationId: string;

		/**
		 * List for storing reactions. Reactions are utf-8 text code for emojis. If you send an empty list it clears all your feedback.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		Reactions: Array<Reaction>;
	}
	export interface PutRecommendationFeedbackPutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) that identifies the code review.
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		CodeReviewArn: FormControl<string | null | undefined>,

		/**
		 * The recommendation ID that can be used to track the provided recommendations and then to collect the feedback.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		RecommendationId: FormControl<string | null | undefined>,
	}
	export function CreatePutRecommendationFeedbackPutBodyFormGroup() {
		return new FormGroup<PutRecommendationFeedbackPutBodyFormProperties>({
			CodeReviewArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('^arn:aws[^:\s]*:codeguru-reviewer:[^:\s]+:[\d]{12}:[a-z-]+:[\w-]+$')]),
			RecommendationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
		});

	}

}

