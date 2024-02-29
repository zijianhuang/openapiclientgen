import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateRepositoryResponse {
		RepositoryAssociation?: RepositoryAssociation;
		Tags?: TagMap;
	}
	export interface AssociateRepositoryResponseFormProperties {
	}
	export function CreateAssociateRepositoryResponseFormGroup() {
		return new FormGroup<AssociateRepositoryResponseFormProperties>({
		});

	}


	/** Information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeRepositoryAssociation.html">DescribeRepositoryAssociation</a> operation returns a <code>RepositoryAssociation</code> object. */
	export interface RepositoryAssociation {
		AssociationId?: string;
		AssociationArn?: string;
		ConnectionArn?: string;
		Name?: string;
		Owner?: string;
		ProviderType?: ProviderType;
		State?: RepositoryAssociationState;
		StateReason?: string;
		LastUpdatedTimeStamp?: Date;
		CreatedTimeStamp?: Date;
		KMSKeyDetails?: KMSKeyDetails;

		/** Specifies the name of an S3 bucket and a <code>CodeArtifacts</code> object that contains the S3 object keys for a source code .zip file and for a build artifacts .zip file that contains .jar or .class files. */
		S3RepositoryDetails?: S3RepositoryDetails;
	}

	/** Information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeRepositoryAssociation.html">DescribeRepositoryAssociation</a> operation returns a <code>RepositoryAssociation</code> object. */
	export interface RepositoryAssociationFormProperties {
		AssociationId: FormControl<string | null | undefined>,
		AssociationArn: FormControl<string | null | undefined>,
		ConnectionArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		ProviderType: FormControl<ProviderType | null | undefined>,
		State: FormControl<RepositoryAssociationState | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		LastUpdatedTimeStamp: FormControl<Date | null | undefined>,
		CreatedTimeStamp: FormControl<Date | null | undefined>,
	}
	export function CreateRepositoryAssociationFormGroup() {
		return new FormGroup<RepositoryAssociationFormProperties>({
			AssociationId: new FormControl<string | null | undefined>(undefined),
			AssociationArn: new FormControl<string | null | undefined>(undefined),
			ConnectionArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined),
			ProviderType: new FormControl<ProviderType | null | undefined>(undefined),
			State: new FormControl<RepositoryAssociationState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTimeStamp: new FormControl<Date | null | undefined>(undefined),
			CreatedTimeStamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ProviderType { CodeCommit = 'CodeCommit', GitHub = 'GitHub', Bitbucket = 'Bitbucket', GitHubEnterpriseServer = 'GitHubEnterpriseServer', S3Bucket = 'S3Bucket' }

	export enum RepositoryAssociationState { Associated = 'Associated', Associating = 'Associating', Failed = 'Failed', Disassociating = 'Disassociating', Disassociated = 'Disassociated' }


	/** <p>An object that contains:</p> <ul> <li> <p>The encryption option for a repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).</p> </li> <li> <p>The ID of the Amazon Web Services KMS key that is associated with a repository association.</p> </li> </ul> */
	export interface KMSKeyDetails {
		KMSKeyId?: string;
		EncryptionOption?: EncryptionOption;
	}

	/** <p>An object that contains:</p> <ul> <li> <p>The encryption option for a repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).</p> </li> <li> <p>The ID of the Amazon Web Services KMS key that is associated with a repository association.</p> </li> </ul> */
	export interface KMSKeyDetailsFormProperties {
		KMSKeyId: FormControl<string | null | undefined>,
		EncryptionOption: FormControl<EncryptionOption | null | undefined>,
	}
	export function CreateKMSKeyDetailsFormGroup() {
		return new FormGroup<KMSKeyDetailsFormProperties>({
			KMSKeyId: new FormControl<string | null | undefined>(undefined),
			EncryptionOption: new FormControl<EncryptionOption | null | undefined>(undefined),
		});

	}

	export enum EncryptionOption { AWS_OWNED_CMK = 'AWS_OWNED_CMK', CUSTOMER_MANAGED_CMK = 'CUSTOMER_MANAGED_CMK' }


	/** Specifies the name of an S3 bucket and a <code>CodeArtifacts</code> object that contains the S3 object keys for a source code .zip file and for a build artifacts .zip file that contains .jar or .class files. */
	export interface S3RepositoryDetails {
		BucketName?: string;
		CodeArtifacts?: CodeArtifacts;
	}

	/** Specifies the name of an S3 bucket and a <code>CodeArtifacts</code> object that contains the S3 object keys for a source code .zip file and for a build artifacts .zip file that contains .jar or .class files. */
	export interface S3RepositoryDetailsFormProperties {
		BucketName: FormControl<string | null | undefined>,
	}
	export function CreateS3RepositoryDetailsFormGroup() {
		return new FormGroup<S3RepositoryDetailsFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Code artifacts are source code artifacts and build artifacts used in a repository analysis or a pull request review.</p> <ul> <li> <p>Source code artifacts are source code files in a Git repository that are compressed into a .zip file.</p> </li> <li> <p>Build artifacts are .jar or .class files that are compressed in a .zip file.</p> </li> </ul> */
	export interface CodeArtifacts {

		/** Required */
		SourceCodeArtifactsObjectKey: string;
		BuildArtifactsObjectKey?: string;
	}

	/** <p>Code artifacts are source code artifacts and build artifacts used in a repository analysis or a pull request review.</p> <ul> <li> <p>Source code artifacts are source code files in a Git repository that are compressed into a .zip file.</p> </li> <li> <p>Build artifacts are .jar or .class files that are compressed in a .zip file.</p> </li> </ul> */
	export interface CodeArtifactsFormProperties {

		/** Required */
		SourceCodeArtifactsObjectKey: FormControl<string | null | undefined>,
		BuildArtifactsObjectKey: FormControl<string | null | undefined>,
	}
	export function CreateCodeArtifactsFormGroup() {
		return new FormGroup<CodeArtifactsFormProperties>({
			SourceCodeArtifactsObjectKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BuildArtifactsObjectKey: new FormControl<string | null | undefined>(undefined),
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


	/** Information about an Amazon Web Services CodeCommit repository. The CodeCommit repository must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured. */
	export interface CodeCommitRepository {

		/** Required */
		Name: string;
	}

	/** Information about an Amazon Web Services CodeCommit repository. The CodeCommit repository must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured. */
	export interface CodeCommitRepositoryFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCodeCommitRepositoryFormGroup() {
		return new FormGroup<CodeCommitRepositoryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a third-party source repository connected to CodeGuru Reviewer. */
	export interface ThirdPartySourceRepository {

		/** Required */
		Name: string;

		/** Required */
		ConnectionArn: string;

		/** Required */
		Owner: string;
	}

	/** Information about a third-party source repository connected to CodeGuru Reviewer. */
	export interface ThirdPartySourceRepositoryFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ConnectionArn: FormControl<string | null | undefined>,

		/** Required */
		Owner: FormControl<string | null | undefined>,
	}
	export function CreateThirdPartySourceRepositoryFormGroup() {
		return new FormGroup<ThirdPartySourceRepositoryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a repository in an S3 bucket. */
	export interface S3Repository {

		/** Required */
		Name: string;

		/** Required */
		BucketName: string;
	}

	/** Information about a repository in an S3 bucket. */
	export interface S3RepositoryFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		BucketName: FormControl<string | null | undefined>,
	}
	export function CreateS3RepositoryFormGroup() {
		return new FormGroup<S3RepositoryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateCodeReviewResponse {

		/** Information about a code review. A code review belongs to the associated repository that contains the reviewed code. */
		CodeReview?: CodeReview;
	}
	export interface CreateCodeReviewResponseFormProperties {
	}
	export function CreateCreateCodeReviewResponseFormGroup() {
		return new FormGroup<CreateCodeReviewResponseFormProperties>({
		});

	}


	/** Information about a code review. A code review belongs to the associated repository that contains the reviewed code. */
	export interface CodeReview {
		Name?: string;
		CodeReviewArn?: string;
		RepositoryName?: string;
		Owner?: string;
		ProviderType?: ProviderType;
		State?: JobState;
		StateReason?: string;
		CreatedTimeStamp?: Date;
		LastUpdatedTimeStamp?: Date;
		Type?: Type;
		PullRequestId?: string;
		SourceCodeType?: SourceCodeType;
		AssociationArn?: string;
		Metrics?: Metrics;
		AnalysisTypes?: Array<AnalysisType>;
		ConfigFileState?: ConfigFileState;
	}

	/** Information about a code review. A code review belongs to the associated repository that contains the reviewed code. */
	export interface CodeReviewFormProperties {
		Name: FormControl<string | null | undefined>,
		CodeReviewArn: FormControl<string | null | undefined>,
		RepositoryName: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		ProviderType: FormControl<ProviderType | null | undefined>,
		State: FormControl<JobState | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		CreatedTimeStamp: FormControl<Date | null | undefined>,
		LastUpdatedTimeStamp: FormControl<Date | null | undefined>,
		Type: FormControl<Type | null | undefined>,
		PullRequestId: FormControl<string | null | undefined>,
		AssociationArn: FormControl<string | null | undefined>,
		ConfigFileState: FormControl<ConfigFileState | null | undefined>,
	}
	export function CreateCodeReviewFormGroup() {
		return new FormGroup<CodeReviewFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			CodeReviewArn: new FormControl<string | null | undefined>(undefined),
			RepositoryName: new FormControl<string | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined),
			ProviderType: new FormControl<ProviderType | null | undefined>(undefined),
			State: new FormControl<JobState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			CreatedTimeStamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimeStamp: new FormControl<Date | null | undefined>(undefined),
			Type: new FormControl<Type | null | undefined>(undefined),
			PullRequestId: new FormControl<string | null | undefined>(undefined),
			AssociationArn: new FormControl<string | null | undefined>(undefined),
			ConfigFileState: new FormControl<ConfigFileState | null | undefined>(undefined),
		});

	}

	export enum JobState { Completed = 'Completed', Pending = 'Pending', Failed = 'Failed', Deleting = 'Deleting' }

	export enum Type { PullRequest = 'PullRequest', RepositoryAnalysis = 'RepositoryAnalysis' }


	/** Specifies the source code that is analyzed in a code review. */
	export interface SourceCodeType {
		CommitDiff?: CommitDiffSourceCodeType;

		/** A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies the tip of a branch in an associated repository. */
		RepositoryHead?: RepositoryHeadSourceCodeType;
		BranchDiff?: BranchDiffSourceCodeType;
		S3BucketRepository?: S3BucketRepository;
		RequestMetadata?: RequestMetadata;
	}

	/** Specifies the source code that is analyzed in a code review. */
	export interface SourceCodeTypeFormProperties {
	}
	export function CreateSourceCodeTypeFormGroup() {
		return new FormGroup<SourceCodeTypeFormProperties>({
		});

	}


	/** A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies the commit diff for a pull request on an associated repository. The <code>SourceCommit</code> and <code>DestinationCommit</code> fields are required to do a pull request code review. */
	export interface CommitDiffSourceCodeType {
		SourceCommit?: string;
		DestinationCommit?: string;
		MergeBaseCommit?: string;
	}

	/** A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies the commit diff for a pull request on an associated repository. The <code>SourceCommit</code> and <code>DestinationCommit</code> fields are required to do a pull request code review. */
	export interface CommitDiffSourceCodeTypeFormProperties {
		SourceCommit: FormControl<string | null | undefined>,
		DestinationCommit: FormControl<string | null | undefined>,
		MergeBaseCommit: FormControl<string | null | undefined>,
	}
	export function CreateCommitDiffSourceCodeTypeFormGroup() {
		return new FormGroup<CommitDiffSourceCodeTypeFormProperties>({
			SourceCommit: new FormControl<string | null | undefined>(undefined),
			DestinationCommit: new FormControl<string | null | undefined>(undefined),
			MergeBaseCommit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies the tip of a branch in an associated repository. */
	export interface RepositoryHeadSourceCodeType {

		/** Required */
		BranchName: string;
	}

	/** A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies the tip of a branch in an associated repository. */
	export interface RepositoryHeadSourceCodeTypeFormProperties {

		/** Required */
		BranchName: FormControl<string | null | undefined>,
	}
	export function CreateRepositoryHeadSourceCodeTypeFormGroup() {
		return new FormGroup<RepositoryHeadSourceCodeTypeFormProperties>({
			BranchName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies a code diff between a source and destination branch in an associated repository. */
	export interface BranchDiffSourceCodeType {

		/** Required */
		SourceBranchName: string;

		/** Required */
		DestinationBranchName: string;
	}

	/** A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">SourceCodeType</a> that specifies a code diff between a source and destination branch in an associated repository. */
	export interface BranchDiffSourceCodeTypeFormProperties {

		/** Required */
		SourceBranchName: FormControl<string | null | undefined>,

		/** Required */
		DestinationBranchName: FormControl<string | null | undefined>,
	}
	export function CreateBranchDiffSourceCodeTypeFormGroup() {
		return new FormGroup<BranchDiffSourceCodeTypeFormProperties>({
			SourceBranchName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DestinationBranchName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about an associated repository in an S3 bucket. The associated repository contains a source code .zip file and a build artifacts .zip file that contains .jar or .class files. */
	export interface S3BucketRepository {

		/** Required */
		Name: string;
		Details?: S3RepositoryDetails;
	}

	/** Information about an associated repository in an S3 bucket. The associated repository contains a source code .zip file and a build artifacts .zip file that contains .jar or .class files. */
	export interface S3BucketRepositoryFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateS3BucketRepositoryFormGroup() {
		return new FormGroup<S3BucketRepositoryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Metadata that is associated with a code review. This applies to both pull request and repository analysis code reviews. */
	export interface RequestMetadata {
		RequestId?: string;
		Requester?: string;
		EventInfo?: EventInfo;
		VendorName?: VendorName;
	}

	/** Metadata that is associated with a code review. This applies to both pull request and repository analysis code reviews. */
	export interface RequestMetadataFormProperties {
		RequestId: FormControl<string | null | undefined>,
		Requester: FormControl<string | null | undefined>,
		VendorName: FormControl<VendorName | null | undefined>,
	}
	export function CreateRequestMetadataFormGroup() {
		return new FormGroup<RequestMetadataFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			Requester: new FormControl<string | null | undefined>(undefined),
			VendorName: new FormControl<VendorName | null | undefined>(undefined),
		});

	}


	/** Information about an event. The event might be a push, pull request, scheduled request, or another type of event. */
	export interface EventInfo {
		Name?: string;
		State?: string;
	}

	/** Information about an event. The event might be a push, pull request, scheduled request, or another type of event. */
	export interface EventInfoFormProperties {
		Name: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
	}
	export function CreateEventInfoFormGroup() {
		return new FormGroup<EventInfoFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VendorName { GitHub = 'GitHub', GitLab = 'GitLab', NativeS3 = 'NativeS3' }


	/** Information about the statistics from the code review. */
	export interface Metrics {
		MeteredLinesOfCodeCount?: number | null;
		SuppressedLinesOfCodeCount?: number | null;
		FindingsCount?: number | null;
	}

	/** Information about the statistics from the code review. */
	export interface MetricsFormProperties {
		MeteredLinesOfCodeCount: FormControl<number | null | undefined>,
		SuppressedLinesOfCodeCount: FormControl<number | null | undefined>,
		FindingsCount: FormControl<number | null | undefined>,
	}
	export function CreateMetricsFormGroup() {
		return new FormGroup<MetricsFormProperties>({
			MeteredLinesOfCodeCount: new FormControl<number | null | undefined>(undefined),
			SuppressedLinesOfCodeCount: new FormControl<number | null | undefined>(undefined),
			FindingsCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AnalysisType { Security = 'Security', CodeQuality = 'CodeQuality' }

	export enum ConfigFileState { Present = 'Present', Absent = 'Absent', PresentWithErrors = 'PresentWithErrors' }


	/** A code review type that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN when you call <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview">CreateCodeReview</a>. */
	export interface RepositoryAnalysis {
		RepositoryHead?: RepositoryHeadSourceCodeType;

		/** Specifies the source code that is analyzed in a code review. */
		SourceCodeType?: SourceCodeType;
	}

	/** A code review type that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN when you call <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview">CreateCodeReview</a>. */
	export interface RepositoryAnalysisFormProperties {
	}
	export function CreateRepositoryAnalysisFormGroup() {
		return new FormGroup<RepositoryAnalysisFormProperties>({
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

	export interface DescribeCodeReviewResponse {
		CodeReview?: CodeReview;
	}
	export interface DescribeCodeReviewResponseFormProperties {
	}
	export function CreateDescribeCodeReviewResponseFormGroup() {
		return new FormGroup<DescribeCodeReviewResponseFormProperties>({
		});

	}

	export interface DescribeRecommendationFeedbackResponse {
		RecommendationFeedback?: RecommendationFeedback;
	}
	export interface DescribeRecommendationFeedbackResponseFormProperties {
	}
	export function CreateDescribeRecommendationFeedbackResponseFormGroup() {
		return new FormGroup<DescribeRecommendationFeedbackResponseFormProperties>({
		});

	}


	/** Information about the recommendation feedback. */
	export interface RecommendationFeedback {
		CodeReviewArn?: string;
		RecommendationId?: string;
		Reactions?: Array<Reaction>;
		UserId?: string;
		CreatedTimeStamp?: Date;
		LastUpdatedTimeStamp?: Date;
	}

	/** Information about the recommendation feedback. */
	export interface RecommendationFeedbackFormProperties {
		CodeReviewArn: FormControl<string | null | undefined>,
		RecommendationId: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
		CreatedTimeStamp: FormControl<Date | null | undefined>,
		LastUpdatedTimeStamp: FormControl<Date | null | undefined>,
	}
	export function CreateRecommendationFeedbackFormGroup() {
		return new FormGroup<RecommendationFeedbackFormProperties>({
			CodeReviewArn: new FormControl<string | null | undefined>(undefined),
			RecommendationId: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
			CreatedTimeStamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimeStamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum Reaction { ThumbsUp = 'ThumbsUp', ThumbsDown = 'ThumbsDown' }

	export interface DescribeRepositoryAssociationResponse {
		RepositoryAssociation?: RepositoryAssociation;
		Tags?: TagMap;
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
		RepositoryAssociation?: RepositoryAssociation;
		Tags?: TagMap;
	}
	export interface DisassociateRepositoryResponseFormProperties {
	}
	export function CreateDisassociateRepositoryResponseFormGroup() {
		return new FormGroup<DisassociateRepositoryResponseFormProperties>({
		});

	}

	export interface ListCodeReviewsResponse {
		CodeReviewSummaries?: Array<CodeReviewSummary>;
		NextToken?: string;
	}
	export interface ListCodeReviewsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCodeReviewsResponseFormGroup() {
		return new FormGroup<ListCodeReviewsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the summary of the code review. */
	export interface CodeReviewSummary {
		Name?: string;
		CodeReviewArn?: string;
		RepositoryName?: string;
		Owner?: string;
		ProviderType?: ProviderType;
		State?: JobState;
		CreatedTimeStamp?: Date;
		LastUpdatedTimeStamp?: Date;
		Type?: Type;
		PullRequestId?: string;
		MetricsSummary?: MetricsSummary;

		/** Specifies the source code that is analyzed in a code review. */
		SourceCodeType?: SourceCodeType;
	}

	/** Information about the summary of the code review. */
	export interface CodeReviewSummaryFormProperties {
		Name: FormControl<string | null | undefined>,
		CodeReviewArn: FormControl<string | null | undefined>,
		RepositoryName: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		ProviderType: FormControl<ProviderType | null | undefined>,
		State: FormControl<JobState | null | undefined>,
		CreatedTimeStamp: FormControl<Date | null | undefined>,
		LastUpdatedTimeStamp: FormControl<Date | null | undefined>,
		Type: FormControl<Type | null | undefined>,
		PullRequestId: FormControl<string | null | undefined>,
	}
	export function CreateCodeReviewSummaryFormGroup() {
		return new FormGroup<CodeReviewSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			CodeReviewArn: new FormControl<string | null | undefined>(undefined),
			RepositoryName: new FormControl<string | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined),
			ProviderType: new FormControl<ProviderType | null | undefined>(undefined),
			State: new FormControl<JobState | null | undefined>(undefined),
			CreatedTimeStamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimeStamp: new FormControl<Date | null | undefined>(undefined),
			Type: new FormControl<Type | null | undefined>(undefined),
			PullRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about metrics summaries. */
	export interface MetricsSummary {
		MeteredLinesOfCodeCount?: number | null;
		SuppressedLinesOfCodeCount?: number | null;
		FindingsCount?: number | null;
	}

	/** Information about metrics summaries. */
	export interface MetricsSummaryFormProperties {
		MeteredLinesOfCodeCount: FormControl<number | null | undefined>,
		SuppressedLinesOfCodeCount: FormControl<number | null | undefined>,
		FindingsCount: FormControl<number | null | undefined>,
	}
	export function CreateMetricsSummaryFormGroup() {
		return new FormGroup<MetricsSummaryFormProperties>({
			MeteredLinesOfCodeCount: new FormControl<number | null | undefined>(undefined),
			SuppressedLinesOfCodeCount: new FormControl<number | null | undefined>(undefined),
			FindingsCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRecommendationFeedbackResponse {
		RecommendationFeedbackSummaries?: Array<RecommendationFeedbackSummary>;
		NextToken?: string;
	}
	export interface ListRecommendationFeedbackResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecommendationFeedbackResponseFormGroup() {
		return new FormGroup<ListRecommendationFeedbackResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about recommendation feedback summaries. */
	export interface RecommendationFeedbackSummary {
		RecommendationId?: string;
		Reactions?: Array<Reaction>;
		UserId?: string;
	}

	/** Information about recommendation feedback summaries. */
	export interface RecommendationFeedbackSummaryFormProperties {
		RecommendationId: FormControl<string | null | undefined>,
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationFeedbackSummaryFormGroup() {
		return new FormGroup<RecommendationFeedbackSummaryFormProperties>({
			RecommendationId: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRecommendationsResponse {
		RecommendationSummaries?: Array<RecommendationSummary>;
		NextToken?: string;
	}
	export interface ListRecommendationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecommendationsResponseFormGroup() {
		return new FormGroup<ListRecommendationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about recommendations. */
	export interface RecommendationSummary {
		FilePath?: string;
		RecommendationId?: string;
		StartLine?: number | null;
		EndLine?: number | null;
		Description?: string;
		RecommendationCategory?: RecommendationCategory;
		RuleMetadata?: RuleMetadata;
		Severity?: Severity;
	}

	/** Information about recommendations. */
	export interface RecommendationSummaryFormProperties {
		FilePath: FormControl<string | null | undefined>,
		RecommendationId: FormControl<string | null | undefined>,
		StartLine: FormControl<number | null | undefined>,
		EndLine: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RecommendationCategory: FormControl<RecommendationCategory | null | undefined>,
		Severity: FormControl<Severity | null | undefined>,
	}
	export function CreateRecommendationSummaryFormGroup() {
		return new FormGroup<RecommendationSummaryFormProperties>({
			FilePath: new FormControl<string | null | undefined>(undefined),
			RecommendationId: new FormControl<string | null | undefined>(undefined),
			StartLine: new FormControl<number | null | undefined>(undefined),
			EndLine: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			RecommendationCategory: new FormControl<RecommendationCategory | null | undefined>(undefined),
			Severity: new FormControl<Severity | null | undefined>(undefined),
		});

	}

	export enum RecommendationCategory { AWSBestPractices = 'AWSBestPractices', AWSCloudFormationIssues = 'AWSCloudFormationIssues', DuplicateCode = 'DuplicateCode', CodeMaintenanceIssues = 'CodeMaintenanceIssues', ConcurrencyIssues = 'ConcurrencyIssues', InputValidations = 'InputValidations', PythonBestPractices = 'PythonBestPractices', JavaBestPractices = 'JavaBestPractices', ResourceLeaks = 'ResourceLeaks', SecurityIssues = 'SecurityIssues', CodeInconsistencies = 'CodeInconsistencies' }


	/** Metadata about a rule. Rule metadata includes an ID, a name, a list of tags, and a short and long description. CodeGuru Reviewer uses rules to analyze code. A rule's recommendation is included in analysis results if code is detected that violates the rule. */
	export interface RuleMetadata {
		RuleId?: string;
		RuleName?: string;
		ShortDescription?: string;
		LongDescription?: string;
		RuleTags?: Array<string>;
	}

	/** Metadata about a rule. Rule metadata includes an ID, a name, a list of tags, and a short and long description. CodeGuru Reviewer uses rules to analyze code. A rule's recommendation is included in analysis results if code is detected that violates the rule. */
	export interface RuleMetadataFormProperties {
		RuleId: FormControl<string | null | undefined>,
		RuleName: FormControl<string | null | undefined>,
		ShortDescription: FormControl<string | null | undefined>,
		LongDescription: FormControl<string | null | undefined>,
	}
	export function CreateRuleMetadataFormGroup() {
		return new FormGroup<RuleMetadataFormProperties>({
			RuleId: new FormControl<string | null | undefined>(undefined),
			RuleName: new FormControl<string | null | undefined>(undefined),
			ShortDescription: new FormControl<string | null | undefined>(undefined),
			LongDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Severity { Info = 'Info', Low = 'Low', Medium = 'Medium', High = 'High', Critical = 'Critical' }

	export interface ListRepositoryAssociationsResponse {
		RepositoryAssociationSummaries?: Array<RepositoryAssociationSummary>;
		NextToken?: string;
	}
	export interface ListRepositoryAssociationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRepositoryAssociationsResponseFormGroup() {
		return new FormGroup<ListRepositoryAssociationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a> operation returns a list of <code>RepositoryAssociationSummary</code> objects. */
	export interface RepositoryAssociationSummary {
		AssociationArn?: string;
		ConnectionArn?: string;
		LastUpdatedTimeStamp?: Date;
		AssociationId?: string;
		Name?: string;
		Owner?: string;
		ProviderType?: ProviderType;
		State?: RepositoryAssociationState;
	}

	/** Summary information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a> operation returns a list of <code>RepositoryAssociationSummary</code> objects. */
	export interface RepositoryAssociationSummaryFormProperties {
		AssociationArn: FormControl<string | null | undefined>,
		ConnectionArn: FormControl<string | null | undefined>,
		LastUpdatedTimeStamp: FormControl<Date | null | undefined>,
		AssociationId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		ProviderType: FormControl<ProviderType | null | undefined>,
		State: FormControl<RepositoryAssociationState | null | undefined>,
	}
	export function CreateRepositoryAssociationSummaryFormGroup() {
		return new FormGroup<RepositoryAssociationSummaryFormProperties>({
			AssociationArn: new FormControl<string | null | undefined>(undefined),
			ConnectionArn: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTimeStamp: new FormControl<Date | null | undefined>(undefined),
			AssociationId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined),
			ProviderType: new FormControl<ProviderType | null | undefined>(undefined),
			State: new FormControl<RepositoryAssociationState | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
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

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
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


	/** Information about an associated Amazon Web Services CodeCommit repository or an associated repository that is managed by Amazon Web Services CodeStar Connections (for example, Bitbucket). This <code>Repository</code> object is not used if your source code is in an associated GitHub repository. */
	export interface Repository {
		CodeCommit?: CodeCommitRepository;
		Bitbucket?: ThirdPartySourceRepository;
		GitHubEnterpriseServer?: ThirdPartySourceRepository;

		/** Information about a repository in an S3 bucket. */
		S3Bucket?: S3Repository;
	}

	/** Information about an associated Amazon Web Services CodeCommit repository or an associated repository that is managed by Amazon Web Services CodeStar Connections (for example, Bitbucket). This <code>Repository</code> object is not used if your source code is in an associated GitHub repository. */
	export interface RepositoryFormProperties {
	}
	export function CreateRepositoryFormGroup() {
		return new FormGroup<RepositoryFormProperties>({
		});

	}

	export interface AssociateRepositoryRequest {

		/** Required */
		Repository: Repository;
		ClientRequestToken?: string;
		Tags?: TagMap;
		KMSKeyDetails?: KMSKeyDetails;
	}
	export interface AssociateRepositoryRequestFormProperties {
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateRepositoryRequestFormGroup() {
		return new FormGroup<AssociateRepositoryRequestFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The type of a code review. There are two code review types:</p> <ul> <li> <p> <code>PullRequest</code> - A code review that is automatically triggered by a pull request on an associated repository.</p> </li> <li> <p> <code>RepositoryAnalysis</code> - A code review that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview">CreateCodeReview</a>.</p> </li> </ul> */
	export interface CodeReviewType {

		/** Required */
		RepositoryAnalysis: RepositoryAnalysis;
		AnalysisTypes?: Array<AnalysisType>;
	}

	/** <p>The type of a code review. There are two code review types:</p> <ul> <li> <p> <code>PullRequest</code> - A code review that is automatically triggered by a pull request on an associated repository.</p> </li> <li> <p> <code>RepositoryAnalysis</code> - A code review that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview">CreateCodeReview</a>.</p> </li> </ul> */
	export interface CodeReviewTypeFormProperties {
	}
	export function CreateCodeReviewTypeFormGroup() {
		return new FormGroup<CodeReviewTypeFormProperties>({
		});

	}

	export interface CreateCodeReviewRequest {

		/** Required */
		Name: string;

		/** Required */
		RepositoryAssociationArn: string;

		/** Required */
		Type: CodeReviewType;
		ClientRequestToken?: string;
	}
	export interface CreateCodeReviewRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RepositoryAssociationArn: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateCodeReviewRequestFormGroup() {
		return new FormGroup<CreateCodeReviewRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RepositoryAssociationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

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

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface PutRecommendationFeedbackRequest {

		/** Required */
		CodeReviewArn: string;

		/** Required */
		RecommendationId: string;

		/** Required */
		Reactions: Array<Reaction>;
	}
	export interface PutRecommendationFeedbackRequestFormProperties {

		/** Required */
		CodeReviewArn: FormControl<string | null | undefined>,

		/** Required */
		RecommendationId: FormControl<string | null | undefined>,
	}
	export function CreatePutRecommendationFeedbackRequestFormGroup() {
		return new FormGroup<PutRecommendationFeedbackRequestFormProperties>({
			CodeReviewArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecommendationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Use to associate an Amazon Web Services CodeCommit repository or a repository managed by Amazon Web Services CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a repository, CodeGuru Reviewer reviews source code changes in the repository's pull requests and provides automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/recommendations.html">Recommendations in Amazon CodeGuru Reviewer</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <p>If you associate a CodeCommit or S3 repository, it must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.</p> <p>Bitbucket and GitHub Enterprise Server repositories are managed by Amazon Web Services CodeStar Connections to connect to CodeGuru Reviewer. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-associate-repository.html">Associate a repository</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <note> <p>You cannot use the CodeGuru Reviewer SDK or the Amazon Web Services CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate a GitHub repository, use the console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-with-guru.html">Getting started with CodeGuru Reviewer</a> in the <i>CodeGuru Reviewer User Guide.</i> </p> </note>
		 * Post associations
		 * @return {AssociateRepositoryResponse} Success
		 */
		AssociateRepository(requestBody: AssociateRepositoryPostBody): Observable<AssociateRepositoryResponse> {
			return this.http.post<AssociateRepositoryResponse>(this.baseUri + 'associations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html">RepositoryAssociationSummary</a> objects that contain summary information about a repository association. You can filter the returned list by <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-ProviderType">ProviderType</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Name">Name</a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-State">State</a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Owner">Owner</a>.
		 * Get associations
		 * @param {Array<ProviderType>} ProviderType List of provider types to use as a filter.
		 *     Minimum items: 1    Maximum items: 3
		 * @param {Array<RepositoryAssociationState>} State <p>List of repository association states to use as a filter.</p> <p>The valid repository association states are:</p> <ul> <li> <p> <b>Associated</b>: The repository association is complete.</p> </li> <li> <p> <b>Associating</b>: CodeGuru Reviewer is:</p> <ul> <li> <p>Setting up pull request notifications. This is required for pull requests to trigger a CodeGuru Reviewer review.</p> <note> <p>If your repository <code>ProviderType</code> is <code>GitHub</code>, <code>GitHub Enterprise Server</code>, or <code>Bitbucket</code>, CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks, reviews of code in your repository cannot be triggered.</p> </note> </li> <li> <p>Setting up source code access. This is required for CodeGuru Reviewer to securely clone code in your repository.</p> </li> </ul> </li> <li> <p> <b>Failed</b>: The repository failed to associate or disassociate.</p> </li> <li> <p> <b>Disassociating</b>: CodeGuru Reviewer is removing the repository's pull request notifications and source code access.</p> </li> <li> <p> <b>Disassociated</b>: CodeGuru Reviewer successfully disassociated the repository. You can create a new association with this repository if you want to review source code in it later. You can control access to code reviews created in anassociated repository with tags after it has been disassociated. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/auth-and-access-control-using-tags.html">Using tags to control access to associated repositories</a> in the <i>Amazon CodeGuru Reviewer User Guide</i>.</p> </li> </ul>
		 *     Minimum items: 1    Maximum items: 5
		 * @param {Array<string>} Name List of repository names to use as a filter.
		 *     Minimum items: 1    Maximum items: 3
		 * @param {Array<string>} Owner List of owners to use as a filter. For Amazon Web Services CodeCommit, it is the name of the CodeCommit account that was used to associate the repository. For other repository source providers, such as Bitbucket and GitHub Enterprise Server, this is name of the account that was used to associate the repository. 
		 *     Minimum items: 1    Maximum items: 3
		 * @param {number} MaxResults The maximum number of repository association results returned by <code>ListRepositoryAssociations</code> in paginated output. When this parameter is used, <code>ListRepositoryAssociations</code> only returns <code>maxResults</code> results in a single page with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRepositoryAssociations</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, <code>ListRepositoryAssociations</code> returns up to 100 results and a <code>nextToken</code> value if applicable. 
		 *     Minimum: 1    Maximum: 100
		 * @param {string} NextToken <p>The <code>nextToken</code> value returned from a previous paginated <code>ListRepositoryAssociations</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>Treat this token as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 *     Min length: 1    Max length: 2048
		 * @return {ListRepositoryAssociationsResponse} Success
		 */
		ListRepositoryAssociations(ProviderType: Array<ProviderType> | null | undefined, State: Array<RepositoryAssociationState> | null | undefined, Name: Array<string> | null | undefined, Owner: Array<string> | null | undefined, MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListRepositoryAssociationsResponse> {
			return this.http.get<ListRepositoryAssociationsResponse>(this.baseUri + 'associations?' + ProviderType?.map(z => `ProviderType=${z}`).join('&') + '&' + State?.map(z => `State=${z}`).join('&') + '&' + Name?.map(z => `Name=${encodeURIComponent(z)}`).join('&') + '&' + Owner?.map(z => `Owner=${encodeURIComponent(z)}`).join('&') + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Use to create a code review with a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html">CodeReviewType</a> of <code>RepositoryAnalysis</code>. This type of code review analyzes all code under a specified branch in an associated repository. <code>PullRequest</code> code reviews are automatically triggered by a pull request.
		 * Post codereviews
		 * @return {CreateCodeReviewResponse} Success
		 */
		CreateCodeReview(requestBody: CreateCodeReviewPostBody): Observable<CreateCodeReviewResponse> {
			return this.http.post<CreateCodeReviewResponse>(this.baseUri + 'codereviews', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the metadata associated with the code review along with its status.
		 * Get codereviews/{CodeReviewArn}
		 * @param {string} CodeReviewArn The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object. 
		 *     Min length: 1    Max length: 1600
		 * @return {DescribeCodeReviewResponse} Success
		 */
		DescribeCodeReview(CodeReviewArn: string): Observable<DescribeCodeReviewResponse> {
			return this.http.get<DescribeCodeReviewResponse>(this.baseUri + 'codereviews/' + (CodeReviewArn == null ? '' : encodeURIComponent(CodeReviewArn)), {});
		}

		/**
		 * Describes the customer feedback for a CodeGuru Reviewer recommendation.
		 * Get feedback/{CodeReviewArn}#RecommendationId
		 * @param {string} CodeReviewArn The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object. 
		 *     Min length: 1    Max length: 1600
		 * @param {string} RecommendationId The recommendation ID that can be used to track the provided recommendations and then to collect the feedback.
		 *     Min length: 1    Max length: 64
		 * @param {string} UserId <p>Optional parameter to describe the feedback for a given user. If this is not supplied, it defaults to the user making the request.</p> <p> The <code>UserId</code> is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying"> Specifying a Principal</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>
		 *     Min length: 1    Max length: 256
		 * @return {DescribeRecommendationFeedbackResponse} Success
		 */
		DescribeRecommendationFeedback(CodeReviewArn: string, RecommendationId: string, UserId: string | null | undefined): Observable<DescribeRecommendationFeedbackResponse> {
			return this.http.get<DescribeRecommendationFeedbackResponse>(this.baseUri + 'feedback/' + (CodeReviewArn == null ? '' : encodeURIComponent(CodeReviewArn)) + '#RecommendationId&RecommendationId=' + (RecommendationId == null ? '' : encodeURIComponent(RecommendationId)) + '&UserId=' + (UserId == null ? '' : encodeURIComponent(UserId)), {});
		}

		/**
		 * Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object that contains information about the requested repository association.
		 * Get associations/{AssociationArn}
		 * @param {string} AssociationArn The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.
		 *     Min length: 1    Max length: 1600
		 * @return {DescribeRepositoryAssociationResponse} Success
		 */
		DescribeRepositoryAssociation(AssociationArn: string): Observable<DescribeRepositoryAssociationResponse> {
			return this.http.get<DescribeRepositoryAssociationResponse>(this.baseUri + 'associations/' + (AssociationArn == null ? '' : encodeURIComponent(AssociationArn)), {});
		}

		/**
		 * Removes the association between Amazon CodeGuru Reviewer and a repository.
		 * Delete associations/{AssociationArn}
		 * @param {string} AssociationArn The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.
		 *     Min length: 1    Max length: 1600
		 * @return {DisassociateRepositoryResponse} Success
		 */
		DisassociateRepository(AssociationArn: string): Observable<DisassociateRepositoryResponse> {
			return this.http.delete<DisassociateRepositoryResponse>(this.baseUri + 'associations/' + (AssociationArn == null ? '' : encodeURIComponent(AssociationArn)), {});
		}

		/**
		 * Lists all the code reviews that the customer has created in the past 90 days.
		 * Get codereviews#Type
		 * @param {Array<ProviderType>} ProviderTypes List of provider types for filtering that needs to be applied before displaying the result. For example, <code>providerTypes=[GitHub]</code> lists code reviews from GitHub.
		 *     Minimum items: 1    Maximum items: 3
		 * @param {Array<JobState>} States <p>List of states for filtering that needs to be applied before displaying the result. For example, <code>states=[Pending]</code> lists code reviews in the Pending state.</p> <p>The valid code review states are:</p> <ul> <li> <p> <code>Completed</code>: The code review is complete.</p> </li> <li> <p> <code>Pending</code>: The code review started and has not completed or failed.</p> </li> <li> <p> <code>Failed</code>: The code review failed.</p> </li> <li> <p> <code>Deleting</code>: The code review is being deleted.</p> </li> </ul>
		 *     Minimum items: 1    Maximum items: 3
		 * @param {Array<string>} RepositoryNames List of repository names for filtering that needs to be applied before displaying the result.
		 *     Minimum items: 1    Maximum items: 100
		 * @param {Type} Type The type of code reviews to list in the response.
		 * @param {number} MaxResults The maximum number of results that are returned per call. The default is 100.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} NextToken If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
		 *     Min length: 1    Max length: 2048
		 * @return {ListCodeReviewsResponse} Success
		 */
		ListCodeReviews(ProviderTypes: Array<ProviderType> | null | undefined, States: Array<JobState> | null | undefined, RepositoryNames: Array<string> | null | undefined, Type: Type, MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListCodeReviewsResponse> {
			return this.http.get<ListCodeReviewsResponse>(this.baseUri + 'codereviews#Type?' + ProviderTypes?.map(z => `ProviderTypes=${z}`).join('&') + '&' + States?.map(z => `States=${z}`).join('&') + '&' + RepositoryNames?.map(z => `RepositoryNames=${encodeURIComponent(z)}`).join('&') + '&Type=' + Type + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html">RecommendationFeedbackSummary</a> objects that contain customer recommendation feedback for all CodeGuru Reviewer users.
		 * Get feedback/{CodeReviewArn}/RecommendationFeedback
		 * @param {string} NextToken If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
		 *     Min length: 1    Max length: 2048
		 * @param {number} MaxResults The maximum number of results that are returned per call. The default is 100.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} CodeReviewArn The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object. 
		 *     Min length: 1    Max length: 1600
		 * @param {Array<string>} UserIds <p>An Amazon Web Services user's account ID or Amazon Resource Name (ARN). Use this ID to query the recommendation feedback for a code review from that user.</p> <p> The <code>UserId</code> is an IAM principal that can be specified as an Amazon Web Services account ID or an Amazon Resource Name (ARN). For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying"> Specifying a Principal</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>
		 *     Minimum items: 1    Maximum items: 100
		 * @param {Array<string>} RecommendationIds Used to query the recommendation feedback for a given recommendation.
		 *     Minimum items: 1    Maximum items: 100
		 * @return {ListRecommendationFeedbackResponse} Success
		 */
		ListRecommendationFeedback(NextToken: string | null | undefined, MaxResults: number | null | undefined, CodeReviewArn: string, UserIds: Array<string> | null | undefined, RecommendationIds: Array<string> | null | undefined): Observable<ListRecommendationFeedbackResponse> {
			return this.http.get<ListRecommendationFeedbackResponse>(this.baseUri + 'feedback/' + (CodeReviewArn == null ? '' : encodeURIComponent(CodeReviewArn)) + '/RecommendationFeedback?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&' + UserIds?.map(z => `UserIds=${encodeURIComponent(z)}`).join('&') + '&' + RecommendationIds?.map(z => `RecommendationIds=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Returns the list of all recommendations for a completed code review.
		 * Get codereviews/{CodeReviewArn}/Recommendations
		 * @param {string} NextToken Pagination token.
		 *     Min length: 1    Max length: 2048
		 * @param {number} MaxResults The maximum number of results that are returned per call. The default is 100.
		 *     Minimum: 1    Maximum: 300
		 * @param {string} CodeReviewArn The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object. 
		 *     Min length: 1    Max length: 1600
		 * @return {ListRecommendationsResponse} Success
		 */
		ListRecommendations(NextToken: string | null | undefined, MaxResults: number | null | undefined, CodeReviewArn: string): Observable<ListRecommendationsResponse> {
			return this.http.get<ListRecommendationsResponse>(this.baseUri + 'codereviews/' + (CodeReviewArn == null ? '' : encodeURIComponent(CodeReviewArn)) + '/Recommendations?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * Returns the list of tags associated with an associated repository resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.
		 *     Min length: 1    Max length: 1600
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds one or more tags to an associated repository.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.
		 *     Min length: 1    Max length: 1600
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.
		 * Put feedback
		 * @return {PutRecommendationFeedbackResponse} Success
		 */
		PutRecommendationFeedback(requestBody: PutRecommendationFeedbackPutBody): Observable<PutRecommendationFeedbackResponse> {
			return this.http.put<PutRecommendationFeedbackResponse>(this.baseUri + 'feedback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag from an associated repository.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.
		 *     Min length: 1    Max length: 1600
		 * @param {Array<string>} tagKeys A list of the keys for each tag you want to remove from an associated repository.
		 *     Minimum items: 1    Maximum items: 50
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface AssociateRepositoryPostBody {

		/**
		 * Information about an associated Amazon Web Services CodeCommit repository or an associated repository that is managed by Amazon Web Services CodeStar Connections (for example, Bitbucket). This <code>Repository</code> object is not used if your source code is in an associated GitHub repository.
		 * Required
		 */
		Repository: AssociateRepositoryPostBodyRepository;

		/**
		 * Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate repository associations if there are failures and retries.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken?: string | null;

		/** <p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p> <ul> <li> <p>A <i>tag key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag keys are case sensitive.</p> </li> <li> <p>An optional field known as a <i>tag value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.</p> </li> </ul> */
		Tags?: {[id: string]: string };

		/** <p>An object that contains:</p> <ul> <li> <p>The encryption option for a repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).</p> </li> <li> <p>The ID of the Amazon Web Services KMS key that is associated with a repository association.</p> </li> </ul> */
		KMSKeyDetails?: AssociateRepositoryPostBodyKMSKeyDetails;
	}
	export interface AssociateRepositoryPostBodyFormProperties {

		/**
		 * Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate repository associations if there are failures and retries.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** <p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p> <ul> <li> <p>A <i>tag key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag keys are case sensitive.</p> </li> <li> <p>An optional field known as a <i>tag value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.</p> </li> </ul> */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateAssociateRepositoryPostBodyFormGroup() {
		return new FormGroup<AssociateRepositoryPostBodyFormProperties>({
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[\w-]+$')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface AssociateRepositoryPostBodyRepository {
		CodeCommit?: CodeCommitRepository;
		Bitbucket?: ThirdPartySourceRepository;
		GitHubEnterpriseServer?: ThirdPartySourceRepository;

		/** Information about a repository in an S3 bucket. */
		S3Bucket?: S3Repository;
	}
	export interface AssociateRepositoryPostBodyRepositoryFormProperties {
	}
	export function CreateAssociateRepositoryPostBodyRepositoryFormGroup() {
		return new FormGroup<AssociateRepositoryPostBodyRepositoryFormProperties>({
		});

	}

	export interface AssociateRepositoryPostBodyKMSKeyDetails {
		KMSKeyId?: string;
		EncryptionOption?: EncryptionOption;
	}
	export interface AssociateRepositoryPostBodyKMSKeyDetailsFormProperties {
		KMSKeyId: FormControl<string | null | undefined>,
		EncryptionOption: FormControl<EncryptionOption | null | undefined>,
	}
	export function CreateAssociateRepositoryPostBodyKMSKeyDetailsFormGroup() {
		return new FormGroup<AssociateRepositoryPostBodyKMSKeyDetailsFormProperties>({
			KMSKeyId: new FormControl<string | null | undefined>(undefined),
			EncryptionOption: new FormControl<EncryptionOption | null | undefined>(undefined),
		});

	}

	export interface CreateCodeReviewPostBody {

		/**
		 * The name of the code review. The name of each code review in your Amazon Web Services account must be unique.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		Name: string;

		/**
		 * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.</p> <p>A code review can only be created on an associated repository. This is the ARN of the associated repository.</p>
		 * Required
		 * Min length: 1
		 * Max length: 1600
		 */
		RepositoryAssociationArn: string;

		/**
		 * <p>The type of a code review. There are two code review types:</p> <ul> <li> <p> <code>PullRequest</code> - A code review that is automatically triggered by a pull request on an associated repository.</p> </li> <li> <p> <code>RepositoryAnalysis</code> - A code review that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview">CreateCodeReview</a>.</p> </li> </ul>
		 * Required
		 */
		Type: CreateCodeReviewPostBodyType;

		/**
		 * Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate code reviews if there are failures and retries.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken?: string | null;
	}
	export interface CreateCodeReviewPostBodyFormProperties {

		/**
		 * The name of the code review. The name of each code review in your Amazon Web Services account must be unique.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">RepositoryAssociation</a> object. You can retrieve this ARN by calling <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">ListRepositoryAssociations</a>.</p> <p>A code review can only be created on an associated repository. This is the ARN of the associated repository.</p>
		 * Required
		 * Min length: 1
		 * Max length: 1600
		 */
		RepositoryAssociationArn: FormControl<string | null | undefined>,

		/**
		 * Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate code reviews if there are failures and retries.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateCodeReviewPostBodyFormGroup() {
		return new FormGroup<CreateCodeReviewPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9-_]*')]),
			RepositoryAssociationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('^arn:aws[^:\s]*:codeguru-reviewer:[^:\s]+:[\d]{12}:association:[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[\w-]+$')]),
		});

	}

	export interface CreateCodeReviewPostBodyType {
		RepositoryAnalysis?: RepositoryAnalysis;
		AnalysisTypes?: Array<AnalysisType>;
	}
	export interface CreateCodeReviewPostBodyTypeFormProperties {
	}
	export function CreateCreateCodeReviewPostBodyTypeFormGroup() {
		return new FormGroup<CreateCodeReviewPostBodyTypeFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * <p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p> <ul> <li> <p>A <i>tag key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag keys are case sensitive.</p> </li> <li> <p>An optional field known as a <i>tag value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.</p> </li> </ul>
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * <p>An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:</p> <ul> <li> <p>A <i>tag key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag keys are case sensitive.</p> </li> <li> <p>An optional field known as a <i>tag value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag value is the same as using an empty string. Like tag keys, tag values are case sensitive.</p> </li> </ul>
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutRecommendationFeedbackPutBody {

		/**
		 * The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object.
		 * Required
		 * Min length: 1
		 * Max length: 1600
		 */
		CodeReviewArn: string;

		/**
		 * The recommendation ID that can be used to track the provided recommendations and then to collect the feedback.
		 * Required
		 * Min length: 1
		 * Max length: 64
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
		 * The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">CodeReview</a> object.
		 * Required
		 * Min length: 1
		 * Max length: 1600
		 */
		CodeReviewArn: FormControl<string | null | undefined>,

		/**
		 * The recommendation ID that can be used to track the provided recommendations and then to collect the feedback.
		 * Required
		 * Min length: 1
		 * Max length: 64
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

