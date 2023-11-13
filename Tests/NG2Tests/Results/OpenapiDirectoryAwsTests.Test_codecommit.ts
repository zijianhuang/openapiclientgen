import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AssociateApprovalRuleTemplateWithRepositoryInput {
		approvalRuleTemplateName: string;
		repositoryName: string;
	}

	export interface ApprovalRuleTemplateNameRequiredException {
	}

	export interface InvalidApprovalRuleTemplateNameException {
	}

	export interface ApprovalRuleTemplateDoesNotExistException {
	}

	export interface MaximumRuleTemplatesAssociatedWithRepositoryException {
	}

	export interface RepositoryNameRequiredException {
	}

	export interface InvalidRepositoryNameException {
	}

	export interface RepositoryDoesNotExistException {
	}

	export interface EncryptionIntegrityChecksFailedException {
	}

	export interface EncryptionKeyAccessDeniedException {
	}

	export interface EncryptionKeyDisabledException {
	}

	export interface EncryptionKeyNotFoundException {
	}

	export interface EncryptionKeyUnavailableException {
	}

	export interface BatchAssociateApprovalRuleTemplateWithRepositoriesOutput {
		associatedRepositoryNames: Array<string>;
		errors: Array<BatchAssociateApprovalRuleTemplateWithRepositoriesError>;
	}


	/** Returns information about errors in a BatchAssociateApprovalRuleTemplateWithRepositories operation. */
	export interface BatchAssociateApprovalRuleTemplateWithRepositoriesError {
		repositoryName?: string | null;
		errorCode?: string | null;
		errorMessage?: string | null;
	}

	export interface BatchAssociateApprovalRuleTemplateWithRepositoriesInput {
		approvalRuleTemplateName: string;
		repositoryNames: Array<string>;
	}

	export interface RepositoryNamesRequiredException {
	}

	export interface MaximumRepositoryNamesExceededException {
	}

	export interface BatchDescribeMergeConflictsOutput {
		conflicts: Array<Conflict>;
		nextToken?: string | null;
		errors?: Array<BatchDescribeMergeConflictsError> | null;
		destinationCommitId: string;
		sourceCommitId: string;
		baseCommitId?: string | null;
	}


	/** Information about conflicts in a merge operation. */
	export interface Conflict {

		/** Information about the metadata for a conflict in a merge operation. */
		conflictMetadata?: ConflictMetadata | null;
		mergeHunks?: Array<MergeHunk> | null;
	}


	/** Information about the metadata for a conflict in a merge operation. */
	export interface ConflictMetadata {
		filePath?: string | null;

		/** Information about the size of files in a merge or pull request. */
		fileSizes?: FileSizes | null;

		/** Information about file modes in a merge or pull request. */
		fileModes?: FileModes | null;

		/** Information about the type of an object in a merge operation. */
		objectTypes?: ObjectTypes | null;
		numberOfConflicts?: number | null;

		/** Information about whether a file is binary or textual in a merge or pull request operation. */
		isBinaryFile?: IsBinaryFile | null;
		contentConflict?: boolean | null;
		fileModeConflict?: boolean | null;
		objectTypeConflict?: boolean | null;

		/** Information about the file operation conflicts in a merge operation. */
		mergeOperations?: MergeOperations | null;
	}


	/** Information about the size of files in a merge or pull request. */
	export interface FileSizes {
		source?: number | null;
		destination?: number | null;
		base?: number | null;
	}


	/** Information about file modes in a merge or pull request. */
	export interface FileModes {
		source?: FileModesSource | null;
		destination?: FileModesSource | null;
		base?: FileModesSource | null;
	}

	export enum FileModesSource { EXECUTABLE = 0, NORMAL = 1, SYMLINK = 2 }


	/** Information about the type of an object in a merge operation. */
	export interface ObjectTypes {
		source?: ObjectTypesSource | null;
		destination?: ObjectTypesSource | null;
		base?: ObjectTypesSource | null;
	}

	export enum ObjectTypesSource { FILE = 0, DIRECTORY = 1, GIT_LINK = 2, SYMBOLIC_LINK = 3 }


	/** Information about whether a file is binary or textual in a merge or pull request operation. */
	export interface IsBinaryFile {
		source?: boolean | null;
		destination?: boolean | null;
		base?: boolean | null;
	}


	/** Information about the file operation conflicts in a merge operation. */
	export interface MergeOperations {
		source?: MergeOperationsSource | null;
		destination?: MergeOperationsSource | null;
	}

	export enum MergeOperationsSource { A = 0, M = 1, D = 2 }


	/** Information about merge hunks in a merge or pull request operation. */
	export interface MergeHunk {
		isConflict?: boolean | null;

		/** Information about the details of a merge hunk that contains a conflict in a merge or pull request operation. */
		source?: MergeHunkDetail | null;

		/** Information about the details of a merge hunk that contains a conflict in a merge or pull request operation. */
		destination?: MergeHunkDetail | null;

		/** Information about the details of a merge hunk that contains a conflict in a merge or pull request operation. */
		base?: MergeHunkDetail | null;
	}


	/** Information about the details of a merge hunk that contains a conflict in a merge or pull request operation. */
	export interface MergeHunkDetail {
		startLine?: number | null;
		endLine?: number | null;
		hunkContent?: string | null;
	}


	/** Returns information about errors in a BatchDescribeMergeConflicts operation. */
	export interface BatchDescribeMergeConflictsError {
		filePath: string;
		exceptionName: string;
		message: string;
	}

	export interface BatchDescribeMergeConflictsInput {
		repositoryName: string;
		destinationCommitSpecifier: string;
		sourceCommitSpecifier: string;
		mergeOption: BatchDescribeMergeConflictsInputMergeOption;
		maxMergeHunks?: number | null;
		maxConflictFiles?: number | null;
		filePaths?: Array<string> | null;
		conflictDetailLevel?: BatchDescribeMergeConflictsInputConflictDetailLevel | null;
		conflictResolutionStrategy?: BatchDescribeMergeConflictsInputConflictResolutionStrategy | null;
		nextToken?: string | null;
	}

	export enum BatchDescribeMergeConflictsInputMergeOption { FAST_FORWARD_MERGE = 0, SQUASH_MERGE = 1, THREE_WAY_MERGE = 2 }

	export enum BatchDescribeMergeConflictsInputConflictDetailLevel { FILE_LEVEL = 0, LINE_LEVEL = 1 }

	export enum BatchDescribeMergeConflictsInputConflictResolutionStrategy { NONE = 0, ACCEPT_SOURCE = 1, ACCEPT_DESTINATION = 2, AUTOMERGE = 3 }

	export interface MergeOptionRequiredException {
	}

	export interface InvalidMergeOptionException {
	}

	export interface InvalidContinuationTokenException {
	}

	export interface CommitRequiredException {
	}

	export interface CommitDoesNotExistException {
	}

	export interface InvalidCommitException {
	}

	export interface TipsDivergenceExceededException {
	}

	export interface InvalidMaxConflictFilesException {
	}

	export interface InvalidMaxMergeHunksException {
	}

	export interface InvalidConflictDetailLevelException {
	}

	export interface InvalidConflictResolutionStrategyException {
	}

	export interface MaximumFileContentToLoadExceededException {
	}

	export interface MaximumItemsToCompareExceededException {
	}

	export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput {
		disassociatedRepositoryNames: Array<string>;
		errors: Array<BatchDisassociateApprovalRuleTemplateFromRepositoriesError>;
	}


	/** Returns information about errors in a BatchDisassociateApprovalRuleTemplateFromRepositories operation. */
	export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesError {
		repositoryName?: string | null;
		errorCode?: string | null;
		errorMessage?: string | null;
	}

	export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesInput {
		approvalRuleTemplateName: string;
		repositoryNames: Array<string>;
	}

	export interface BatchGetCommitsOutput {
		commits?: Array<Commit> | null;
		errors?: Array<BatchGetCommitsError> | null;
	}


	/** Returns information about a specific commit. */
	export interface Commit {
		commitId?: string | null;
		treeId?: string | null;
		parents?: Array<string> | null;
		message?: string | null;

		/** Information about the user who made a specified commit. */
		author?: UserInfo | null;

		/** Information about the user who made a specified commit. */
		committer?: UserInfo | null;
		additionalData?: string | null;
	}


	/** Information about the user who made a specified commit. */
	export interface UserInfo {
		name?: string | null;
		email?: string | null;
		date?: string | null;
	}


	/** Returns information about errors in a BatchGetCommits operation. */
	export interface BatchGetCommitsError {
		commitId?: string | null;
		errorCode?: string | null;
		errorMessage?: string | null;
	}

	export interface BatchGetCommitsInput {
		commitIds: Array<string>;
		repositoryName: string;
	}

	export interface CommitIdsListRequiredException {
	}

	export interface CommitIdsLimitExceededException {
	}


	/** Represents the output of a batch get repositories operation. */
	export interface BatchGetRepositoriesOutput {
		repositories?: Array<RepositoryMetadata> | null;
		repositoriesNotFound?: Array<string> | null;
	}


	/** Information about a repository. */
	export interface RepositoryMetadata {
		accountId?: string | null;
		repositoryId?: string | null;
		repositoryName?: string | null;
		repositoryDescription?: string | null;
		defaultBranch?: string | null;
		lastModifiedDate?: Date | null;
		creationDate?: Date | null;
		cloneUrlHttp?: string | null;
		cloneUrlSsh?: string | null;
		Arn?: string | null;
	}


	/** Represents the input of a batch get repositories operation. */
	export interface BatchGetRepositoriesInput {
		repositoryNames: Array<string>;
	}

	export interface CreateApprovalRuleTemplateOutput {

		/**
		 * Returns information about an approval rule template.
		 * Required
		 */
		approvalRuleTemplate: ApprovalRuleTemplate;
	}


	/** Returns information about an approval rule template. */
	export interface ApprovalRuleTemplate {
		approvalRuleTemplateId?: string | null;
		approvalRuleTemplateName?: string | null;
		approvalRuleTemplateDescription?: string | null;
		approvalRuleTemplateContent?: string | null;
		ruleContentSha256?: string | null;
		lastModifiedDate?: Date | null;
		creationDate?: Date | null;
		lastModifiedUser?: string | null;
	}

	export interface CreateApprovalRuleTemplateInput {
		approvalRuleTemplateName: string;
		approvalRuleTemplateContent: string;
		approvalRuleTemplateDescription?: string | null;
	}

	export interface ApprovalRuleTemplateNameAlreadyExistsException {
	}

	export interface ApprovalRuleTemplateContentRequiredException {
	}

	export interface InvalidApprovalRuleTemplateContentException {
	}

	export interface InvalidApprovalRuleTemplateDescriptionException {
	}

	export interface NumberOfRuleTemplatesExceededException {
	}


	/** Represents the input of a create branch operation. */
	export interface CreateBranchInput {
		repositoryName: string;
		branchName: string;
		commitId: string;
	}

	export interface BranchNameRequiredException {
	}

	export interface BranchNameExistsException {
	}

	export interface InvalidBranchNameException {
	}

	export interface CommitIdRequiredException {
	}

	export interface InvalidCommitIdException {
	}

	export interface CreateCommitOutput {
		commitId?: string | null;
		treeId?: string | null;
		filesAdded?: Array<FileMetadata> | null;
		filesUpdated?: Array<FileMetadata> | null;
		filesDeleted?: Array<FileMetadata> | null;
	}


	/** A file to be added, updated, or deleted as part of a commit. */
	export interface FileMetadata {
		absolutePath?: string | null;
		blobId?: string | null;
		fileMode?: FileModesSource | null;
	}

	export interface CreateCommitInput {
		repositoryName: string;
		branchName: string;
		parentCommitId?: string | null;
		authorName?: string | null;
		email?: string | null;
		commitMessage?: string | null;
		keepEmptyFolders?: boolean | null;
		putFiles?: Array<PutFileEntry> | null;
		deleteFiles?: Array<DeleteFileEntry> | null;
		setFileModes?: Array<SetFileModeEntry> | null;
	}


	/** Information about a file added or updated as part of a commit. */
	export interface PutFileEntry {
		filePath: string;
		fileMode?: FileModesSource | null;
		fileContent?: string | null;

		/** Information about a source file that is part of changes made in a commit. */
		sourceFile?: SourceFileSpecifier | null;
	}


	/** Information about a source file that is part of changes made in a commit. */
	export interface SourceFileSpecifier {
		filePath: string;
		isMove?: boolean | null;
	}


	/** A file that is deleted as part of a commit. */
	export interface DeleteFileEntry {
		filePath: string;
	}


	/** Information about the file mode changes. */
	export interface SetFileModeEntry {
		filePath: string;
		fileMode: FileModesSource;
	}

	export interface ParentCommitIdRequiredException {
	}

	export interface InvalidParentCommitIdException {
	}

	export interface ParentCommitDoesNotExistException {
	}

	export interface ParentCommitIdOutdatedException {
	}

	export interface BranchDoesNotExistException {
	}

	export interface BranchNameIsTagNameException {
	}

	export interface FileEntryRequiredException {
	}

	export interface MaximumFileEntriesExceededException {
	}

	export interface PutFileEntryConflictException {
	}

	export interface SourceFileOrContentRequiredException {
	}

	export interface FileContentAndSourceFileSpecifiedException {
	}

	export interface PathRequiredException {
	}

	export interface InvalidPathException {
	}

	export interface SamePathRequestException {
	}

	export interface FileDoesNotExistException {
	}

	export interface FileContentSizeLimitExceededException {
	}

	export interface FolderContentSizeLimitExceededException {
	}

	export interface InvalidDeletionParameterException {
	}

	export interface RestrictedSourceFileException {
	}

	export interface FileModeRequiredException {
	}

	export interface InvalidFileModeException {
	}

	export interface NameLengthExceededException {
	}

	export interface InvalidEmailException {
	}

	export interface CommitMessageLengthExceededException {
	}

	export interface NoChangeException {
	}

	export interface FileNameConflictsWithDirectoryNameException {
	}

	export interface DirectoryNameConflictsWithFileNameException {
	}

	export interface FilePathConflictsWithSubmodulePathException {
	}

	export interface CreatePullRequestOutput {

		/**
		 * Returns information about a pull request.
		 * Required
		 */
		pullRequest: PullRequest;
	}


	/** Returns information about a pull request. */
	export interface PullRequest {
		pullRequestId?: string | null;
		title?: string | null;
		description?: string | null;
		lastActivityDate?: Date | null;
		creationDate?: Date | null;
		pullRequestStatus?: PullRequestPullRequestStatus | null;
		authorArn?: string | null;
		pullRequestTargets?: Array<PullRequestTarget> | null;
		clientRequestToken?: string | null;
		revisionId?: string | null;
		approvalRules?: Array<ApprovalRule> | null;
	}

	export enum PullRequestPullRequestStatus { OPEN = 0, CLOSED = 1 }


	/** Returns information about a pull request target. */
	export interface PullRequestTarget {
		repositoryName?: string | null;
		sourceReference?: string | null;
		destinationReference?: string | null;
		destinationCommit?: string | null;
		sourceCommit?: string | null;
		mergeBase?: string | null;

		/** Returns information about a merge or potential merge between a source reference and a destination reference in a pull request. */
		mergeMetadata?: MergeMetadata | null;
	}


	/** Returns information about a merge or potential merge between a source reference and a destination reference in a pull request. */
	export interface MergeMetadata {
		isMerged?: boolean | null;
		mergedBy?: string | null;
		mergeCommitId?: string | null;
		mergeOption?: BatchDescribeMergeConflictsInputMergeOption | null;
	}


	/** Returns information about an approval rule. */
	export interface ApprovalRule {
		approvalRuleId?: string | null;
		approvalRuleName?: string | null;
		approvalRuleContent?: string | null;
		ruleContentSha256?: string | null;
		lastModifiedDate?: Date | null;
		creationDate?: Date | null;
		lastModifiedUser?: string | null;

		/** Returns information about the template that created the approval rule for a pull request. */
		originApprovalRuleTemplate?: OriginApprovalRuleTemplate | null;
	}


	/** Returns information about the template that created the approval rule for a pull request. */
	export interface OriginApprovalRuleTemplate {
		approvalRuleTemplateId?: string | null;
		approvalRuleTemplateName?: string | null;
	}

	export interface CreatePullRequestInput {
		title: string;
		description?: string | null;
		targets: Array<Target>;
		clientRequestToken?: string | null;
	}


	/** Returns information about a target for a pull request. */
	export interface Target {
		repositoryName: string;
		sourceReference: string;
		destinationReference?: string | null;
	}

	export interface ClientRequestTokenRequiredException {
	}

	export interface InvalidClientRequestTokenException {
	}

	export interface IdempotencyParameterMismatchException {
	}

	export interface ReferenceNameRequiredException {
	}

	export interface InvalidReferenceNameException {
	}

	export interface ReferenceDoesNotExistException {
	}

	export interface ReferenceTypeNotSupportedException {
	}

	export interface TitleRequiredException {
	}

	export interface InvalidTitleException {
	}

	export interface InvalidDescriptionException {
	}

	export interface TargetsRequiredException {
	}

	export interface InvalidTargetsException {
	}

	export interface TargetRequiredException {
	}

	export interface InvalidTargetException {
	}

	export interface MultipleRepositoriesInPullRequestException {
	}

	export interface MaximumOpenPullRequestsExceededException {
	}

	export interface SourceAndDestinationAreSameException {
	}

	export interface CreatePullRequestApprovalRuleOutput {

		/**
		 * Returns information about an approval rule.
		 * Required
		 */
		approvalRule: ApprovalRule;
	}

	export interface CreatePullRequestApprovalRuleInput {
		pullRequestId: string;
		approvalRuleName: string;
		approvalRuleContent: string;
	}

	export interface ApprovalRuleNameRequiredException {
	}

	export interface InvalidApprovalRuleNameException {
	}

	export interface ApprovalRuleNameAlreadyExistsException {
	}

	export interface ApprovalRuleContentRequiredException {
	}

	export interface InvalidApprovalRuleContentException {
	}

	export interface NumberOfRulesExceededException {
	}

	export interface PullRequestDoesNotExistException {
	}

	export interface InvalidPullRequestIdException {
	}

	export interface PullRequestIdRequiredException {
	}

	export interface PullRequestAlreadyClosedException {
	}


	/** Represents the output of a create repository operation. */
	export interface CreateRepositoryOutput {

		/** Information about a repository. */
		repositoryMetadata?: RepositoryMetadata | null;
	}


	/** Represents the input of a create repository operation. */
	export interface CreateRepositoryInput {
		repositoryName: string;
		repositoryDescription?: string | null;
		tags?: TagsMap | null;
	}

	export interface TagsMap {
	}

	export interface RepositoryNameExistsException {
	}

	export interface InvalidRepositoryDescriptionException {
	}

	export interface RepositoryLimitExceededException {
	}

	export interface InvalidTagsMapException {
	}

	export interface TooManyTagsException {
	}

	export interface InvalidSystemTagUsageException {
	}

	export interface TagPolicyException {
	}

	export interface CreateUnreferencedMergeCommitOutput {
		commitId?: string | null;
		treeId?: string | null;
	}

	export interface CreateUnreferencedMergeCommitInput {
		repositoryName: string;
		sourceCommitSpecifier: string;
		destinationCommitSpecifier: string;
		mergeOption: BatchDescribeMergeConflictsInputMergeOption;
		conflictDetailLevel?: BatchDescribeMergeConflictsInputConflictDetailLevel | null;
		conflictResolutionStrategy?: BatchDescribeMergeConflictsInputConflictResolutionStrategy | null;
		authorName?: string | null;
		email?: string | null;
		commitMessage?: string | null;
		keepEmptyFolders?: boolean | null;

		/** If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge. */
		conflictResolution?: ConflictResolution | null;
	}


	/** If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge. */
	export interface ConflictResolution {
		replaceContents?: Array<ReplaceContentEntry> | null;
		deleteFiles?: Array<DeleteFileEntry> | null;
		setFileModes?: Array<SetFileModeEntry> | null;
	}


	/** Information about a replacement content entry in the conflict of a merge or pull request operation. */
	export interface ReplaceContentEntry {
		filePath: string;
		replacementType: ReplaceContentEntryReplacementType;
		content?: string | null;
		fileMode?: FileModesSource | null;
	}

	export enum ReplaceContentEntryReplacementType { KEEP_BASE = 0, KEEP_SOURCE = 1, KEEP_DESTINATION = 2, USE_NEW_CONTENT = 3 }

	export interface InvalidConflictResolutionException {
	}

	export interface ManualMergeRequiredException {
	}

	export interface MaximumConflictResolutionEntriesExceededException {
	}

	export interface MultipleConflictResolutionEntriesException {
	}

	export interface ReplacementTypeRequiredException {
	}

	export interface InvalidReplacementTypeException {
	}

	export interface ReplacementContentRequiredException {
	}

	export interface InvalidReplacementContentException {
	}

	export interface ConcurrentReferenceUpdateException {
	}

	export interface DeleteApprovalRuleTemplateOutput {
		approvalRuleTemplateId: string;
	}

	export interface DeleteApprovalRuleTemplateInput {
		approvalRuleTemplateName: string;
	}

	export interface ApprovalRuleTemplateInUseException {
	}


	/** Represents the output of a delete branch operation. */
	export interface DeleteBranchOutput {

		/** Returns information about a branch. */
		deletedBranch?: BranchInfo | null;
	}


	/** Returns information about a branch. */
	export interface BranchInfo {
		branchName?: string | null;
		commitId?: string | null;
	}


	/** Represents the input of a delete branch operation. */
	export interface DeleteBranchInput {
		repositoryName: string;
		branchName: string;
	}

	export interface DefaultBranchCannotBeDeletedException {
	}

	export interface DeleteCommentContentOutput {

		/** Returns information about a specific comment. */
		comment?: Comment | null;
	}


	/** Returns information about a specific comment. */
	export interface Comment {
		commentId?: string | null;
		content?: string | null;
		inReplyTo?: string | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
		authorArn?: string | null;
		deleted?: boolean | null;
		clientRequestToken?: string | null;
	}

	export interface DeleteCommentContentInput {
		commentId: string;
	}

	export interface CommentDoesNotExistException {
	}

	export interface CommentIdRequiredException {
	}

	export interface InvalidCommentIdException {
	}

	export interface CommentDeletedException {
	}

	export interface DeleteFileOutput {
		commitId: string;
		blobId: string;
		treeId: string;
		filePath: string;
	}

	export interface DeleteFileInput {
		repositoryName: string;
		branchName: string;
		filePath: string;
		parentCommitId: string;
		keepEmptyFolders?: boolean | null;
		commitMessage?: string | null;
		name?: string | null;
		email?: string | null;
	}

	export interface DeletePullRequestApprovalRuleOutput {
		approvalRuleId: string;
	}

	export interface DeletePullRequestApprovalRuleInput {
		pullRequestId: string;
		approvalRuleName: string;
	}

	export interface CannotDeleteApprovalRuleFromTemplateException {
	}


	/** Represents the output of a delete repository operation. */
	export interface DeleteRepositoryOutput {
		repositoryId?: string | null;
	}


	/** Represents the input of a delete repository operation. */
	export interface DeleteRepositoryInput {
		repositoryName: string;
	}

	export interface DescribeMergeConflictsOutput {

		/**
		 * Information about the metadata for a conflict in a merge operation.
		 * Required
		 */
		conflictMetadata: ConflictMetadata;
		mergeHunks: Array<MergeHunk>;
		nextToken?: string | null;
		destinationCommitId: string;
		sourceCommitId: string;
		baseCommitId?: string | null;
	}

	export interface DescribeMergeConflictsInput {
		repositoryName: string;
		destinationCommitSpecifier: string;
		sourceCommitSpecifier: string;
		mergeOption: BatchDescribeMergeConflictsInputMergeOption;
		maxMergeHunks?: number | null;
		filePath: string;
		conflictDetailLevel?: BatchDescribeMergeConflictsInputConflictDetailLevel | null;
		conflictResolutionStrategy?: BatchDescribeMergeConflictsInputConflictResolutionStrategy | null;
		nextToken?: string | null;
	}

	export interface DescribePullRequestEventsOutput {
		pullRequestEvents: Array<PullRequestEvent>;
		nextToken?: string | null;
	}


	/** Returns information about a pull request event. */
	export interface PullRequestEvent {
		pullRequestId?: string | null;
		eventDate?: Date | null;
		pullRequestEventType?: PullRequestEventPullRequestEventType | null;
		actorArn?: string | null;

		/** Metadata about the pull request that is used when comparing the pull request source with its destination. */
		pullRequestCreatedEventMetadata?: PullRequestCreatedEventMetadata | null;

		/** Information about a change to the status of a pull request. */
		pullRequestStatusChangedEventMetadata?: PullRequestStatusChangedEventMetadata | null;

		/** Information about an update to the source branch of a pull request. */
		pullRequestSourceReferenceUpdatedEventMetadata?: PullRequestSourceReferenceUpdatedEventMetadata | null;

		/** Returns information about the change in the merge state for a pull request event. */
		pullRequestMergedStateChangedEventMetadata?: PullRequestMergedStateChangedEventMetadata | null;

		/** Returns information about an event for an approval rule. */
		approvalRuleEventMetadata?: ApprovalRuleEventMetadata | null;

		/** Returns information about a change in the approval state for a pull request. */
		approvalStateChangedEventMetadata?: ApprovalStateChangedEventMetadata | null;

		/** Returns information about an override event for approval rules for a pull request. */
		approvalRuleOverriddenEventMetadata?: ApprovalRuleOverriddenEventMetadata | null;
	}

	export enum PullRequestEventPullRequestEventType { PULL_REQUEST_CREATED = 0, PULL_REQUEST_STATUS_CHANGED = 1, PULL_REQUEST_SOURCE_REFERENCE_UPDATED = 2, PULL_REQUEST_MERGE_STATE_CHANGED = 3, PULL_REQUEST_APPROVAL_RULE_CREATED = 4, PULL_REQUEST_APPROVAL_RULE_UPDATED = 5, PULL_REQUEST_APPROVAL_RULE_DELETED = 6, PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN = 7, PULL_REQUEST_APPROVAL_STATE_CHANGED = 8 }


	/** Metadata about the pull request that is used when comparing the pull request source with its destination. */
	export interface PullRequestCreatedEventMetadata {
		repositoryName?: string | null;
		sourceCommitId?: string | null;
		destinationCommitId?: string | null;
		mergeBase?: string | null;
	}


	/** Information about a change to the status of a pull request. */
	export interface PullRequestStatusChangedEventMetadata {
		pullRequestStatus?: PullRequestPullRequestStatus | null;
	}


	/** Information about an update to the source branch of a pull request. */
	export interface PullRequestSourceReferenceUpdatedEventMetadata {
		repositoryName?: string | null;
		beforeCommitId?: string | null;
		afterCommitId?: string | null;
		mergeBase?: string | null;
	}


	/** Returns information about the change in the merge state for a pull request event.  */
	export interface PullRequestMergedStateChangedEventMetadata {
		repositoryName?: string | null;
		destinationReference?: string | null;

		/** Returns information about a merge or potential merge between a source reference and a destination reference in a pull request. */
		mergeMetadata?: MergeMetadata | null;
	}


	/** Returns information about an event for an approval rule. */
	export interface ApprovalRuleEventMetadata {
		approvalRuleName?: string | null;
		approvalRuleId?: string | null;
		approvalRuleContent?: string | null;
	}


	/** Returns information about a change in the approval state for a pull request. */
	export interface ApprovalStateChangedEventMetadata {
		revisionId?: string | null;
		approvalStatus?: ApprovalStateChangedEventMetadataApprovalStatus | null;
	}

	export enum ApprovalStateChangedEventMetadataApprovalStatus { APPROVE = 0, REVOKE = 1 }


	/** Returns information about an override event for approval rules for a pull request. */
	export interface ApprovalRuleOverriddenEventMetadata {
		revisionId?: string | null;
		overrideStatus?: ApprovalRuleOverriddenEventMetadataOverrideStatus | null;
	}

	export enum ApprovalRuleOverriddenEventMetadataOverrideStatus { OVERRIDE = 0, REVOKE = 1 }

	export interface DescribePullRequestEventsInput {
		pullRequestId: string;
		pullRequestEventType?: PullRequestEventPullRequestEventType | null;
		actorArn?: string | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export interface InvalidPullRequestEventTypeException {
	}

	export interface InvalidActorArnException {
	}

	export interface ActorDoesNotExistException {
	}

	export interface InvalidMaxResultsException {
	}

	export interface DisassociateApprovalRuleTemplateFromRepositoryInput {
		approvalRuleTemplateName: string;
		repositoryName: string;
	}

	export interface EvaluatePullRequestApprovalRulesOutput {

		/**
		 * Returns information about the approval rules applied to a pull request and whether conditions have been met.
		 * Required
		 */
		evaluation: Evaluation;
	}


	/** Returns information about the approval rules applied to a pull request and whether conditions have been met. */
	export interface Evaluation {
		approved?: boolean | null;
		overridden?: boolean | null;
		approvalRulesSatisfied?: Array<string> | null;
		approvalRulesNotSatisfied?: Array<string> | null;
	}

	export interface EvaluatePullRequestApprovalRulesInput {
		pullRequestId: string;
		revisionId: string;
	}

	export interface InvalidRevisionIdException {
	}

	export interface RevisionIdRequiredException {
	}

	export interface RevisionNotCurrentException {
	}

	export interface GetApprovalRuleTemplateOutput {

		/**
		 * Returns information about an approval rule template.
		 * Required
		 */
		approvalRuleTemplate: ApprovalRuleTemplate;
	}

	export interface GetApprovalRuleTemplateInput {
		approvalRuleTemplateName: string;
	}


	/** Represents the output of a get blob operation. */
	export interface GetBlobOutput {
		content: string;
	}


	/** Represents the input of a get blob operation. */
	export interface GetBlobInput {
		repositoryName: string;
		blobId: string;
	}

	export interface BlobIdRequiredException {
	}

	export interface InvalidBlobIdException {
	}

	export interface BlobIdDoesNotExistException {
	}

	export interface FileTooLargeException {
	}


	/** Represents the output of a get branch operation. */
	export interface GetBranchOutput {

		/** Returns information about a branch. */
		branch?: BranchInfo | null;
	}


	/** Represents the input of a get branch operation. */
	export interface GetBranchInput {
		repositoryName?: string | null;
		branchName?: string | null;
	}

	export interface GetCommentOutput {

		/** Returns information about a specific comment. */
		comment?: Comment | null;
	}

	export interface GetCommentInput {
		commentId: string;
	}

	export interface GetCommentsForComparedCommitOutput {
		commentsForComparedCommitData?: Array<CommentsForComparedCommit> | null;
		nextToken?: string | null;
	}


	/** Returns information about comments on the comparison between two commits. */
	export interface CommentsForComparedCommit {
		repositoryName?: string | null;
		beforeCommitId?: string | null;
		afterCommitId?: string | null;
		beforeBlobId?: string | null;
		afterBlobId?: string | null;

		/** Returns information about the location of a change or comment in the comparison between two commits or a pull request. */
		location?: Location | null;
		comments?: Array<Comment> | null;
	}


	/** Returns information about the location of a change or comment in the comparison between two commits or a pull request. */
	export interface Location {
		filePath?: string | null;
		filePosition?: number | null;
		relativeFileVersion?: LocationRelativeFileVersion | null;
	}

	export enum LocationRelativeFileVersion { BEFORE = 0, AFTER = 1 }

	export interface GetCommentsForComparedCommitInput {
		repositoryName: string;
		beforeCommitId?: string | null;
		afterCommitId: string;
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export interface GetCommentsForPullRequestOutput {
		commentsForPullRequestData?: Array<CommentsForPullRequest> | null;
		nextToken?: string | null;
	}


	/** Returns information about comments on a pull request. */
	export interface CommentsForPullRequest {
		pullRequestId?: string | null;
		repositoryName?: string | null;
		beforeCommitId?: string | null;
		afterCommitId?: string | null;
		beforeBlobId?: string | null;
		afterBlobId?: string | null;

		/** Returns information about the location of a change or comment in the comparison between two commits or a pull request. */
		location?: Location | null;
		comments?: Array<Comment> | null;
	}

	export interface GetCommentsForPullRequestInput {
		pullRequestId: string;
		repositoryName?: string | null;
		beforeCommitId?: string | null;
		afterCommitId?: string | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export interface RepositoryNotAssociatedWithPullRequestException {
	}


	/** Represents the output of a get commit operation. */
	export interface GetCommitOutput {

		/**
		 * Returns information about a specific commit.
		 * Required
		 */
		commit: Commit;
	}


	/** Represents the input of a get commit operation. */
	export interface GetCommitInput {
		repositoryName: string;
		commitId: string;
	}

	export interface CommitIdDoesNotExistException {
	}

	export interface GetDifferencesOutput {
		differences?: Array<Difference> | null;
		NextToken?: string | null;
	}


	/** Returns information about a set of differences for a commit specifier. */
	export interface Difference {

		/** Returns information about a specific Git blob object. */
		beforeBlob?: BlobMetadata | null;

		/** Returns information about a specific Git blob object. */
		afterBlob?: BlobMetadata | null;
		changeType?: MergeOperationsSource | null;
	}


	/** Returns information about a specific Git blob object. */
	export interface BlobMetadata {
		blobId?: string | null;
		path?: string | null;
		mode?: string | null;
	}

	export interface GetDifferencesInput {
		repositoryName: string;
		beforeCommitSpecifier?: string | null;
		afterCommitSpecifier: string;
		beforePath?: string | null;
		afterPath?: string | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface PathDoesNotExistException {
	}

	export interface GetFileOutput {
		commitId: string;
		blobId: string;
		filePath: string;
		fileMode: FileModesSource;
		fileSize: number;
		fileContent: string;
	}

	export interface GetFileInput {
		repositoryName: string;
		commitSpecifier?: string | null;
		filePath: string;
	}

	export interface GetFolderOutput {
		commitId: string;
		folderPath: string;
		treeId?: string | null;
		subFolders?: Array<Folder> | null;
		files?: Array<File> | null;
		symbolicLinks?: Array<SymbolicLink> | null;
		subModules?: Array<SubModule> | null;
	}


	/** Returns information about a folder in a repository. */
	export interface Folder {
		treeId?: string | null;
		absolutePath?: string | null;
		relativePath?: string | null;
	}


	/** Returns information about a file in a repository. */
	export interface File {
		blobId?: string | null;
		absolutePath?: string | null;
		relativePath?: string | null;
		fileMode?: FileModesSource | null;
	}


	/** Returns information about a symbolic link in a repository folder. */
	export interface SymbolicLink {
		blobId?: string | null;
		absolutePath?: string | null;
		relativePath?: string | null;
		fileMode?: FileModesSource | null;
	}


	/** Returns information about a submodule reference in a repository folder. */
	export interface SubModule {
		commitId?: string | null;
		absolutePath?: string | null;
		relativePath?: string | null;
	}

	export interface GetFolderInput {
		repositoryName: string;
		commitSpecifier?: string | null;
		folderPath: string;
	}

	export interface FolderDoesNotExistException {
	}

	export interface GetMergeCommitOutput {
		sourceCommitId?: string | null;
		destinationCommitId?: string | null;
		baseCommitId?: string | null;
		mergedCommitId?: string | null;
	}

	export interface GetMergeCommitInput {
		repositoryName: string;
		sourceCommitSpecifier: string;
		destinationCommitSpecifier: string;
		conflictDetailLevel?: BatchDescribeMergeConflictsInputConflictDetailLevel | null;
		conflictResolutionStrategy?: BatchDescribeMergeConflictsInputConflictResolutionStrategy | null;
	}

	export interface GetMergeConflictsOutput {
		mergeable: boolean;
		destinationCommitId: string;
		sourceCommitId: string;
		baseCommitId?: string | null;
		conflictMetadataList: Array<ConflictMetadata>;
		nextToken?: string | null;
	}

	export interface GetMergeConflictsInput {
		repositoryName: string;
		destinationCommitSpecifier: string;
		sourceCommitSpecifier: string;
		mergeOption: BatchDescribeMergeConflictsInputMergeOption;
		conflictDetailLevel?: BatchDescribeMergeConflictsInputConflictDetailLevel | null;
		maxConflictFiles?: number | null;
		conflictResolutionStrategy?: BatchDescribeMergeConflictsInputConflictResolutionStrategy | null;
		nextToken?: string | null;
	}

	export interface InvalidDestinationCommitSpecifierException {
	}

	export interface InvalidSourceCommitSpecifierException {
	}

	export interface GetMergeOptionsOutput {
		mergeOptions: Array<MergeOptionTypeEnum>;
		sourceCommitId: string;
		destinationCommitId: string;
		baseCommitId: string;
	}

	export enum MergeOptionTypeEnum { FAST_FORWARD_MERGE = 0, SQUASH_MERGE = 1, THREE_WAY_MERGE = 2 }

	export interface GetMergeOptionsInput {
		repositoryName: string;
		sourceCommitSpecifier: string;
		destinationCommitSpecifier: string;
		conflictDetailLevel?: BatchDescribeMergeConflictsInputConflictDetailLevel | null;
		conflictResolutionStrategy?: BatchDescribeMergeConflictsInputConflictResolutionStrategy | null;
	}

	export interface GetPullRequestOutput {

		/**
		 * Returns information about a pull request.
		 * Required
		 */
		pullRequest: PullRequest;
	}

	export interface GetPullRequestInput {
		pullRequestId: string;
	}

	export interface GetPullRequestApprovalStatesOutput {
		approvals?: Array<Approval> | null;
	}


	/** Returns information about a specific approval on a pull request. */
	export interface Approval {
		userArn?: string | null;
		approvalState?: ApprovalStateChangedEventMetadataApprovalStatus | null;
	}

	export interface GetPullRequestApprovalStatesInput {
		pullRequestId: string;
		revisionId: string;
	}

	export interface GetPullRequestOverrideStateOutput {
		overridden?: boolean | null;
		overrider?: string | null;
	}

	export interface GetPullRequestOverrideStateInput {
		pullRequestId: string;
		revisionId: string;
	}


	/** Represents the output of a get repository operation. */
	export interface GetRepositoryOutput {

		/** Information about a repository. */
		repositoryMetadata?: RepositoryMetadata | null;
	}


	/** Represents the input of a get repository operation. */
	export interface GetRepositoryInput {
		repositoryName: string;
	}


	/** Represents the output of a get repository triggers operation. */
	export interface GetRepositoryTriggersOutput {
		configurationId?: string | null;
		triggers?: Array<RepositoryTrigger> | null;
	}


	/** Information about a trigger for a repository. */
	export interface RepositoryTrigger {
		name: string;
		destinationArn: string;
		customData?: string | null;
		branches?: Array<string> | null;
		events: Array<RepositoryTriggerEventEnum>;
	}

	export enum RepositoryTriggerEventEnum { all = 0, updateReference = 1, createReference = 2, deleteReference = 3 }


	/** Represents the input of a get repository triggers operation. */
	export interface GetRepositoryTriggersInput {
		repositoryName: string;
	}

	export interface ListApprovalRuleTemplatesOutput {
		approvalRuleTemplateNames?: Array<string> | null;
		nextToken?: string | null;
	}

	export interface ListApprovalRuleTemplatesInput {
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export interface ListAssociatedApprovalRuleTemplatesForRepositoryOutput {
		approvalRuleTemplateNames?: Array<string> | null;
		nextToken?: string | null;
	}

	export interface ListAssociatedApprovalRuleTemplatesForRepositoryInput {
		repositoryName: string;
		nextToken?: string | null;
		maxResults?: number | null;
	}


	/** Represents the output of a list branches operation. */
	export interface ListBranchesOutput {
		branches?: Array<string> | null;
		nextToken?: string | null;
	}


	/** Represents the input of a list branches operation. */
	export interface ListBranchesInput {
		repositoryName: string;
		nextToken?: string | null;
	}

	export interface ListPullRequestsOutput {
		pullRequestIds: Array<string>;
		nextToken?: string | null;
	}

	export interface ListPullRequestsInput {
		repositoryName: string;
		authorArn?: string | null;
		pullRequestStatus?: PullRequestPullRequestStatus | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export interface InvalidPullRequestStatusException {
	}

	export interface InvalidAuthorArnException {
	}

	export interface AuthorDoesNotExistException {
	}


	/** Represents the output of a list repositories operation. */
	export interface ListRepositoriesOutput {
		repositories?: Array<RepositoryNameIdPair> | null;
		nextToken?: string | null;
	}


	/** Information about a repository name and ID. */
	export interface RepositoryNameIdPair {
		repositoryName?: string | null;
		repositoryId?: string | null;
	}


	/** Represents the input of a list repositories operation. */
	export interface ListRepositoriesInput {
		nextToken?: string | null;
		sortBy?: ListRepositoriesInputSortBy | null;
		order?: ListRepositoriesInputOrder | null;
	}

	export enum ListRepositoriesInputSortBy { repositoryName = 0, lastModifiedDate = 1 }

	export enum ListRepositoriesInputOrder { ascending = 0, descending = 1 }

	export interface InvalidSortByException {
	}

	export interface InvalidOrderException {
	}

	export interface ListRepositoriesForApprovalRuleTemplateOutput {
		repositoryNames?: Array<string> | null;
		nextToken?: string | null;
	}

	export interface ListRepositoriesForApprovalRuleTemplateInput {
		approvalRuleTemplateName: string;
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export interface ListTagsForResourceOutput {
		tags?: TagsMap | null;
		nextToken?: string | null;
	}

	export interface ListTagsForResourceInput {
		resourceArn: string;
		nextToken?: string | null;
	}

	export interface ResourceArnRequiredException {
	}

	export interface InvalidResourceArnException {
	}

	export interface MergeBranchesByFastForwardOutput {
		commitId?: string | null;
		treeId?: string | null;
	}

	export interface MergeBranchesByFastForwardInput {
		repositoryName: string;
		sourceCommitSpecifier: string;
		destinationCommitSpecifier: string;
		targetBranch?: string | null;
	}

	export interface InvalidTargetBranchException {
	}

	export interface MergeBranchesBySquashOutput {
		commitId?: string | null;
		treeId?: string | null;
	}

	export interface MergeBranchesBySquashInput {
		repositoryName: string;
		sourceCommitSpecifier: string;
		destinationCommitSpecifier: string;
		targetBranch?: string | null;
		conflictDetailLevel?: BatchDescribeMergeConflictsInputConflictDetailLevel | null;
		conflictResolutionStrategy?: BatchDescribeMergeConflictsInputConflictResolutionStrategy | null;
		authorName?: string | null;
		email?: string | null;
		commitMessage?: string | null;
		keepEmptyFolders?: boolean | null;

		/** If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge. */
		conflictResolution?: ConflictResolution | null;
	}

	export interface MergeBranchesByThreeWayOutput {
		commitId?: string | null;
		treeId?: string | null;
	}

	export interface MergeBranchesByThreeWayInput {
		repositoryName: string;
		sourceCommitSpecifier: string;
		destinationCommitSpecifier: string;
		targetBranch?: string | null;
		conflictDetailLevel?: BatchDescribeMergeConflictsInputConflictDetailLevel | null;
		conflictResolutionStrategy?: BatchDescribeMergeConflictsInputConflictResolutionStrategy | null;
		authorName?: string | null;
		email?: string | null;
		commitMessage?: string | null;
		keepEmptyFolders?: boolean | null;

		/** If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge. */
		conflictResolution?: ConflictResolution | null;
	}

	export interface MergePullRequestByFastForwardOutput {

		/** Returns information about a pull request. */
		pullRequest?: PullRequest | null;
	}

	export interface MergePullRequestByFastForwardInput {
		pullRequestId: string;
		repositoryName: string;
		sourceCommitId?: string | null;
	}

	export interface TipOfSourceReferenceIsDifferentException {
	}

	export interface PullRequestApprovalRulesNotSatisfiedException {
	}

	export interface MergePullRequestBySquashOutput {

		/** Returns information about a pull request. */
		pullRequest?: PullRequest | null;
	}

	export interface MergePullRequestBySquashInput {
		pullRequestId: string;
		repositoryName: string;
		sourceCommitId?: string | null;
		conflictDetailLevel?: BatchDescribeMergeConflictsInputConflictDetailLevel | null;
		conflictResolutionStrategy?: BatchDescribeMergeConflictsInputConflictResolutionStrategy | null;
		commitMessage?: string | null;
		authorName?: string | null;
		email?: string | null;
		keepEmptyFolders?: boolean | null;

		/** If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge. */
		conflictResolution?: ConflictResolution | null;
	}

	export interface MergePullRequestByThreeWayOutput {

		/** Returns information about a pull request. */
		pullRequest?: PullRequest | null;
	}

	export interface MergePullRequestByThreeWayInput {
		pullRequestId: string;
		repositoryName: string;
		sourceCommitId?: string | null;
		conflictDetailLevel?: BatchDescribeMergeConflictsInputConflictDetailLevel | null;
		conflictResolutionStrategy?: BatchDescribeMergeConflictsInputConflictResolutionStrategy | null;
		commitMessage?: string | null;
		authorName?: string | null;
		email?: string | null;
		keepEmptyFolders?: boolean | null;

		/** If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge. */
		conflictResolution?: ConflictResolution | null;
	}

	export interface OverridePullRequestApprovalRulesInput {
		pullRequestId: string;
		revisionId: string;
		overrideStatus: ApprovalRuleOverriddenEventMetadataOverrideStatus;
	}

	export interface InvalidOverrideStatusException {
	}

	export interface OverrideStatusRequiredException {
	}

	export interface OverrideAlreadySetException {
	}

	export interface PostCommentForComparedCommitOutput {
		repositoryName?: string | null;
		beforeCommitId?: string | null;
		afterCommitId?: string | null;
		beforeBlobId?: string | null;
		afterBlobId?: string | null;

		/** Returns information about the location of a change or comment in the comparison between two commits or a pull request. */
		location?: Location | null;

		/** Returns information about a specific comment. */
		comment?: Comment | null;
	}

	export interface PostCommentForComparedCommitInput {
		repositoryName: string;
		beforeCommitId?: string | null;
		afterCommitId: string;

		/** Returns information about the location of a change or comment in the comparison between two commits or a pull request. */
		location?: Location | null;
		content: string;
		clientRequestToken?: string | null;
	}

	export interface CommentContentRequiredException {
	}

	export interface CommentContentSizeLimitExceededException {
	}

	export interface InvalidFileLocationException {
	}

	export interface InvalidRelativeFileVersionEnumException {
	}

	export interface InvalidFilePositionException {
	}

	export interface BeforeCommitIdAndAfterCommitIdAreSameException {
	}

	export interface PostCommentForPullRequestOutput {
		repositoryName?: string | null;
		pullRequestId?: string | null;
		beforeCommitId?: string | null;
		afterCommitId?: string | null;
		beforeBlobId?: string | null;
		afterBlobId?: string | null;

		/** Returns information about the location of a change or comment in the comparison between two commits or a pull request. */
		location?: Location | null;

		/** Returns information about a specific comment. */
		comment?: Comment | null;
	}

	export interface PostCommentForPullRequestInput {
		pullRequestId: string;
		repositoryName: string;
		beforeCommitId: string;
		afterCommitId: string;

		/** Returns information about the location of a change or comment in the comparison between two commits or a pull request. */
		location?: Location | null;
		content: string;
		clientRequestToken?: string | null;
	}

	export interface PostCommentReplyOutput {

		/** Returns information about a specific comment. */
		comment?: Comment | null;
	}

	export interface PostCommentReplyInput {
		inReplyTo: string;
		clientRequestToken?: string | null;
		content: string;
	}

	export interface PutFileOutput {
		commitId: string;
		blobId: string;
		treeId: string;
	}

	export interface PutFileInput {
		repositoryName: string;
		branchName: string;
		fileContent: string;
		filePath: string;
		fileMode?: FileModesSource | null;
		parentCommitId?: string | null;
		commitMessage?: string | null;
		name?: string | null;
		email?: string | null;
	}

	export interface FileContentRequiredException {
	}

	export interface SameFileContentException {
	}


	/** Represents the output of a put repository triggers operation. */
	export interface PutRepositoryTriggersOutput {
		configurationId?: string | null;
	}


	/** Represents the input of a put repository triggers operation. */
	export interface PutRepositoryTriggersInput {
		repositoryName: string;
		triggers: Array<RepositoryTrigger>;
	}

	export interface RepositoryTriggersListRequiredException {
	}

	export interface MaximumRepositoryTriggersExceededException {
	}

	export interface InvalidRepositoryTriggerNameException {
	}

	export interface InvalidRepositoryTriggerDestinationArnException {
	}

	export interface InvalidRepositoryTriggerRegionException {
	}

	export interface InvalidRepositoryTriggerCustomDataException {
	}

	export interface MaximumBranchesExceededException {
	}

	export interface InvalidRepositoryTriggerBranchNameException {
	}

	export interface InvalidRepositoryTriggerEventsException {
	}

	export interface RepositoryTriggerNameRequiredException {
	}

	export interface RepositoryTriggerDestinationArnRequiredException {
	}

	export interface RepositoryTriggerBranchNameListRequiredException {
	}

	export interface RepositoryTriggerEventsListRequiredException {
	}

	export interface TagResourceInput {
		resourceArn: string;
		tags: TagsMap;
	}

	export interface TagsMapRequiredException {
	}


	/** Represents the output of a test repository triggers operation. */
	export interface TestRepositoryTriggersOutput {
		successfulExecutions?: Array<string> | null;
		failedExecutions?: Array<RepositoryTriggerExecutionFailure> | null;
	}


	/** A trigger failed to run. */
	export interface RepositoryTriggerExecutionFailure {
		trigger?: string | null;
		failureMessage?: string | null;
	}


	/** Represents the input of a test repository triggers operation. */
	export interface TestRepositoryTriggersInput {
		repositoryName: string;
		triggers: Array<RepositoryTrigger>;
	}

	export interface UntagResourceInput {
		resourceArn: string;
		tagKeys: Array<string>;
	}

	export interface TagKeysListRequiredException {
	}

	export interface InvalidTagKeysListException {
	}

	export interface UpdateApprovalRuleTemplateContentOutput {

		/**
		 * Returns information about an approval rule template.
		 * Required
		 */
		approvalRuleTemplate: ApprovalRuleTemplate;
	}

	export interface UpdateApprovalRuleTemplateContentInput {
		approvalRuleTemplateName: string;
		newRuleContent: string;
		existingRuleContentSha256?: string | null;
	}

	export interface InvalidRuleContentSha256Exception {
	}

	export interface UpdateApprovalRuleTemplateDescriptionOutput {

		/**
		 * Returns information about an approval rule template.
		 * Required
		 */
		approvalRuleTemplate: ApprovalRuleTemplate;
	}

	export interface UpdateApprovalRuleTemplateDescriptionInput {
		approvalRuleTemplateName: string;
		approvalRuleTemplateDescription: string;
	}

	export interface UpdateApprovalRuleTemplateNameOutput {

		/**
		 * Returns information about an approval rule template.
		 * Required
		 */
		approvalRuleTemplate: ApprovalRuleTemplate;
	}

	export interface UpdateApprovalRuleTemplateNameInput {
		oldApprovalRuleTemplateName: string;
		newApprovalRuleTemplateName: string;
	}

	export interface UpdateCommentOutput {

		/** Returns information about a specific comment. */
		comment?: Comment | null;
	}

	export interface UpdateCommentInput {
		commentId: string;
		content: string;
	}

	export interface CommentNotCreatedByCallerException {
	}


	/** Represents the input of an update default branch operation. */
	export interface UpdateDefaultBranchInput {
		repositoryName: string;
		defaultBranchName: string;
	}

	export interface UpdatePullRequestApprovalRuleContentOutput {

		/**
		 * Returns information about an approval rule.
		 * Required
		 */
		approvalRule: ApprovalRule;
	}

	export interface UpdatePullRequestApprovalRuleContentInput {
		pullRequestId: string;
		approvalRuleName: string;
		existingRuleContentSha256?: string | null;
		newRuleContent: string;
	}

	export interface ApprovalRuleDoesNotExistException {
	}

	export interface CannotModifyApprovalRuleFromTemplateException {
	}

	export interface UpdatePullRequestApprovalStateInput {
		pullRequestId: string;
		revisionId: string;
		approvalState: ApprovalStateChangedEventMetadataApprovalStatus;
	}

	export interface InvalidApprovalStateException {
	}

	export interface ApprovalStateRequiredException {
	}

	export interface PullRequestCannotBeApprovedByAuthorException {
	}

	export interface MaximumNumberOfApprovalsExceededException {
	}

	export interface UpdatePullRequestDescriptionOutput {

		/**
		 * Returns information about a pull request.
		 * Required
		 */
		pullRequest: PullRequest;
	}

	export interface UpdatePullRequestDescriptionInput {
		pullRequestId: string;
		description: string;
	}

	export interface UpdatePullRequestStatusOutput {

		/**
		 * Returns information about a pull request.
		 * Required
		 */
		pullRequest: PullRequest;
	}

	export interface UpdatePullRequestStatusInput {
		pullRequestId: string;
		pullRequestStatus: PullRequestPullRequestStatus;
	}

	export interface InvalidPullRequestStatusUpdateException {
	}

	export interface PullRequestStatusRequiredException {
	}

	export interface UpdatePullRequestTitleOutput {

		/**
		 * Returns information about a pull request.
		 * Required
		 */
		pullRequest: PullRequest;
	}

	export interface UpdatePullRequestTitleInput {
		pullRequestId: string;
		title: string;
	}


	/** Represents the input of an update repository description operation. */
	export interface UpdateRepositoryDescriptionInput {
		repositoryName: string;
		repositoryDescription?: string | null;
	}


	/** Represents the input of an update repository description operation. */
	export interface UpdateRepositoryNameInput {
		oldName: string;
		newName: string;
	}

	export enum ApprovalState { APPROVE = 0, REVOKE = 1 }

	export enum OverrideStatus { OVERRIDE = 0, REVOKE = 1 }

	export enum ConflictDetailLevelTypeEnum { FILE_LEVEL = 0, LINE_LEVEL = 1 }

	export enum ConflictResolutionStrategyTypeEnum { NONE = 0, ACCEPT_SOURCE = 1, ACCEPT_DESTINATION = 2, AUTOMERGE = 3 }

	export enum ChangeTypeEnum { A = 0, M = 1, D = 2 }

	export enum PullRequestEventType { PULL_REQUEST_CREATED = 0, PULL_REQUEST_STATUS_CHANGED = 1, PULL_REQUEST_SOURCE_REFERENCE_UPDATED = 2, PULL_REQUEST_MERGE_STATE_CHANGED = 3, PULL_REQUEST_APPROVAL_RULE_CREATED = 4, PULL_REQUEST_APPROVAL_RULE_UPDATED = 5, PULL_REQUEST_APPROVAL_RULE_DELETED = 6, PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN = 7, PULL_REQUEST_APPROVAL_STATE_CHANGED = 8 }

	export enum FileModeTypeEnum { EXECUTABLE = 0, NORMAL = 1, SYMLINK = 2 }

	export enum PullRequestStatusEnum { OPEN = 0, CLOSED = 1 }

	export enum SortByEnum { repositoryName = 0, lastModifiedDate = 1 }

	export enum OrderEnum { ascending = 0, descending = 1 }

	export enum RelativeFileVersionEnum { BEFORE = 0, AFTER = 1 }

	export enum ObjectTypeEnum { FILE = 0, DIRECTORY = 1, GIT_LINK = 2, SYMBOLIC_LINK = 3 }

	export enum ReplacementTypeEnum { KEEP_BASE = 0, KEEP_SOURCE = 1, KEEP_DESTINATION = 2, USE_NEW_CONTENT = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates an association between an approval rule template and a specified repository. Then, the next time a pull request is created in the repository where the destination reference (if specified) matches the destination reference (branch) for the pull request, an approval rule that matches the template conditions is automatically created for that pull request. If no destination references are specified in the template, an approval rule that matches the template contents is created for all pull requests in that repository.
		 * Post #X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository
		 * @return {void} Success
		 */
		AssociateApprovalRuleTemplateWithRepository(requestBody: AssociateApprovalRuleTemplateWithRepositoryInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an association between an approval rule template and one or more specified repositories.
		 * Post #X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories
		 * @return {BatchAssociateApprovalRuleTemplateWithRepositoriesOutput} Success
		 */
		BatchAssociateApprovalRuleTemplateWithRepositories(requestBody: BatchAssociateApprovalRuleTemplateWithRepositoriesInput): Observable<BatchAssociateApprovalRuleTemplateWithRepositoriesOutput> {
			return this.http.post<BatchAssociateApprovalRuleTemplateWithRepositoriesOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.
		 * Post #X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts
		 * @return {BatchDescribeMergeConflictsOutput} Success
		 */
		BatchDescribeMergeConflicts(requestBody: BatchDescribeMergeConflictsInput): Observable<BatchDescribeMergeConflictsOutput> {
			return this.http.post<BatchDescribeMergeConflictsOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.BatchDescribeMergeConflicts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the association between an approval rule template and one or more specified repositories.
		 * Post #X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories
		 * @return {BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput} Success
		 */
		BatchDisassociateApprovalRuleTemplateFromRepositories(requestBody: BatchDisassociateApprovalRuleTemplateFromRepositoriesInput): Observable<BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput> {
			return this.http.post<BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.BatchDisassociateApprovalRuleTemplateFromRepositories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the contents of one or more commits in a repository.
		 * Post #X-Amz-Target=CodeCommit_20150413.BatchGetCommits
		 * @return {BatchGetCommitsOutput} Success
		 */
		BatchGetCommits(requestBody: BatchGetCommitsInput): Observable<BatchGetCommitsOutput> {
			return this.http.post<BatchGetCommitsOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.BatchGetCommits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about one or more repositories.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
		 * Post #X-Amz-Target=CodeCommit_20150413.BatchGetRepositories
		 * @return {BatchGetRepositoriesOutput} Success
		 */
		BatchGetRepositories(requestBody: BatchGetRepositoriesInput): Observable<BatchGetRepositoriesOutput> {
			return this.http.post<BatchGetRepositoriesOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.BatchGetRepositories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a template for approval rules that can then be associated with one or more repositories in your AWS account. When you associate a template with a repository, AWS CodeCommit creates an approval rule that matches the conditions of the template for all pull requests that meet the conditions of the template. For more information, see <a>AssociateApprovalRuleTemplateWithRepository</a>.
		 * Post #X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate
		 * @return {CreateApprovalRuleTemplateOutput} Success
		 */
		CreateApprovalRuleTemplate(requestBody: CreateApprovalRuleTemplateInput): Observable<CreateApprovalRuleTemplateOutput> {
			return this.http.post<CreateApprovalRuleTemplateOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.CreateApprovalRuleTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a branch in a repository and points the branch to a commit.</p> <note> <p>Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</p> </note>
		 * Post #X-Amz-Target=CodeCommit_20150413.CreateBranch
		 * @return {void} Success
		 */
		CreateBranch(requestBody: CreateBranchInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.CreateBranch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a commit for a repository on the tip of a specified branch.
		 * Post #X-Amz-Target=CodeCommit_20150413.CreateCommit
		 * @return {CreateCommitOutput} Success
		 */
		CreateCommit(requestBody: CreateCommitInput): Observable<CreateCommitOutput> {
			return this.http.post<CreateCommitOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.CreateCommit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a pull request in the specified repository.
		 * Post #X-Amz-Target=CodeCommit_20150413.CreatePullRequest
		 * @return {CreatePullRequestOutput} Success
		 */
		CreatePullRequest(requestBody: CreatePullRequestInput): Observable<CreatePullRequestOutput> {
			return this.http.post<CreatePullRequestOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.CreatePullRequest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an approval rule for a pull request.
		 * Post #X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule
		 * @return {CreatePullRequestApprovalRuleOutput} Success
		 */
		CreatePullRequestApprovalRule(requestBody: CreatePullRequestApprovalRuleInput): Observable<CreatePullRequestApprovalRuleOutput> {
			return this.http.post<CreatePullRequestApprovalRuleOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.CreatePullRequestApprovalRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new, empty repository.
		 * Post #X-Amz-Target=CodeCommit_20150413.CreateRepository
		 * @return {CreateRepositoryOutput} Success
		 */
		CreateRepository(requestBody: CreateRepositoryInput): Observable<CreateRepositoryOutput> {
			return this.http.post<CreateRepositoryOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.CreateRepository', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an unreferenced commit that represents the result of merging two branches using a specified merge strategy. This can help you determine the outcome of a potential merge. This API cannot be used with the fast-forward merge strategy because that strategy does not create a merge commit.</p> <note> <p>This unreferenced merge commit can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.</p> </note>
		 * Post #X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit
		 * @return {CreateUnreferencedMergeCommitOutput} Success
		 */
		CreateUnreferencedMergeCommit(requestBody: CreateUnreferencedMergeCommitInput): Observable<CreateUnreferencedMergeCommitOutput> {
			return this.http.post<CreateUnreferencedMergeCommitOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.CreateUnreferencedMergeCommit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.
		 * Post #X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate
		 * @return {DeleteApprovalRuleTemplateOutput} Success
		 */
		DeleteApprovalRuleTemplate(requestBody: DeleteApprovalRuleTemplateInput): Observable<DeleteApprovalRuleTemplateOutput> {
			return this.http.post<DeleteApprovalRuleTemplateOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.DeleteApprovalRuleTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a branch from a repository, unless that branch is the default branch for the repository.
		 * Post #X-Amz-Target=CodeCommit_20150413.DeleteBranch
		 * @return {DeleteBranchOutput} Success
		 */
		DeleteBranch(requestBody: DeleteBranchInput): Observable<DeleteBranchOutput> {
			return this.http.post<DeleteBranchOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.DeleteBranch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the content of a comment made on a change, file, or commit in a repository.
		 * Post #X-Amz-Target=CodeCommit_20150413.DeleteCommentContent
		 * @return {DeleteCommentContentOutput} Success
		 */
		DeleteCommentContent(requestBody: DeleteCommentContentInput): Observable<DeleteCommentContentOutput> {
			return this.http.post<DeleteCommentContentOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.DeleteCommentContent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specified file from a specified branch. A commit is created on the branch that contains the revision. The file still exists in the commits earlier to the commit that contains the deletion.
		 * Post #X-Amz-Target=CodeCommit_20150413.DeleteFile
		 * @return {DeleteFileOutput} Success
		 */
		DeleteFile(requestBody: DeleteFileInput): Observable<DeleteFileOutput> {
			return this.http.post<DeleteFileOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.DeleteFile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the pull request was created. You cannot delete an approval rule from a merged or closed pull request.
		 * Post #X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule
		 * @return {DeletePullRequestApprovalRuleOutput} Success
		 */
		DeletePullRequestApprovalRule(requestBody: DeletePullRequestApprovalRuleInput): Observable<DeletePullRequestApprovalRuleOutput> {
			return this.http.post<DeletePullRequestApprovalRuleOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.DeletePullRequestApprovalRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a repository. If a specified repository was already deleted, a null repository ID is returned.</p> <important> <p>Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository fail.</p> </important>
		 * Post #X-Amz-Target=CodeCommit_20150413.DeleteRepository
		 * @return {DeleteRepositoryOutput} Success
		 */
		DeleteRepository(requestBody: DeleteRepositoryInput): Observable<DeleteRepositoryOutput> {
			return this.http.post<DeleteRepositoryOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.DeleteRepository', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy. If the merge option for the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.
		 * Post #X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts
		 * @param {string} maxMergeHunks Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeMergeConflictsOutput} Success
		 */
		DescribeMergeConflicts(maxMergeHunks: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeMergeConflictsInput): Observable<DescribeMergeConflictsOutput> {
			return this.http.post<DescribeMergeConflictsOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.DescribeMergeConflicts?maxMergeHunks=' + (maxMergeHunks == null ? '' : encodeURIComponent(maxMergeHunks)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about one or more pull request events.
		 * Post #X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribePullRequestEventsOutput} Success
		 */
		DescribePullRequestEvents(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribePullRequestEventsInput): Observable<DescribePullRequestEventsOutput> {
			return this.http.post<DescribePullRequestEventsOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.DescribePullRequestEvents?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository. This does not delete any approval rules previously created for pull requests through the template association.
		 * Post #X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository
		 * @return {void} Success
		 */
		DisassociateApprovalRuleTemplateFromRepository(requestBody: DisassociateApprovalRuleTemplateFromRepositoryInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.DisassociateApprovalRuleTemplateFromRepository', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Evaluates whether a pull request has met all the conditions specified in its associated approval rules.
		 * Post #X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules
		 * @return {EvaluatePullRequestApprovalRulesOutput} Success
		 */
		EvaluatePullRequestApprovalRules(requestBody: EvaluatePullRequestApprovalRulesInput): Observable<EvaluatePullRequestApprovalRulesOutput> {
			return this.http.post<EvaluatePullRequestApprovalRulesOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.EvaluatePullRequestApprovalRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specified approval rule template.
		 * Post #X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate
		 * @return {GetApprovalRuleTemplateOutput} Success
		 */
		GetApprovalRuleTemplate(requestBody: GetApprovalRuleTemplateInput): Observable<GetApprovalRuleTemplateOutput> {
			return this.http.post<GetApprovalRuleTemplateOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.GetApprovalRuleTemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the base-64 encoded content of an individual blob in a repository.
		 * Post #X-Amz-Target=CodeCommit_20150413.GetBlob
		 * @return {GetBlobOutput} Success
		 */
		GetBlob(requestBody: GetBlobInput): Observable<GetBlobOutput> {
			return this.http.post<GetBlobOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.GetBlob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a repository branch, including its name and the last commit ID.
		 * Post #X-Amz-Target=CodeCommit_20150413.GetBranch
		 * @return {GetBranchOutput} Success
		 */
		GetBranch(requestBody: GetBranchInput): Observable<GetBranchOutput> {
			return this.http.post<GetBranchOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.GetBranch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the content of a comment made on a change, file, or commit in a repository.
		 * Post #X-Amz-Target=CodeCommit_20150413.GetComment
		 * @return {GetCommentOutput} Success
		 */
		GetComment(requestBody: GetCommentInput): Observable<GetCommentOutput> {
			return this.http.post<GetCommentOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.GetComment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about comments made on the comparison between two commits.
		 * Post #X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetCommentsForComparedCommitOutput} Success
		 */
		GetCommentsForComparedCommit(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetCommentsForComparedCommitInput): Observable<GetCommentsForComparedCommitOutput> {
			return this.http.post<GetCommentsForComparedCommitOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.GetCommentsForComparedCommit?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns comments made on a pull request.
		 * Post #X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetCommentsForPullRequestOutput} Success
		 */
		GetCommentsForPullRequest(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetCommentsForPullRequestInput): Observable<GetCommentsForPullRequestOutput> {
			return this.http.post<GetCommentsForPullRequestOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.GetCommentsForPullRequest?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a commit, including commit message and committer information.
		 * Post #X-Amz-Target=CodeCommit_20150413.GetCommit
		 * @return {GetCommitOutput} Success
		 */
		GetCommit(requestBody: GetCommitInput): Observable<GetCommitOutput> {
			return this.http.post<GetCommitOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.GetCommit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be limited to a specified path.
		 * Post #X-Amz-Target=CodeCommit_20150413.GetDifferences
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetDifferencesOutput} Success
		 */
		GetDifferences(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetDifferencesInput): Observable<GetDifferencesOutput> {
			return this.http.post<GetDifferencesOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.GetDifferences?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the base-64 encoded contents of a specified file and its metadata.
		 * Post #X-Amz-Target=CodeCommit_20150413.GetFile
		 * @return {GetFileOutput} Success
		 */
		GetFile(requestBody: GetFileInput): Observable<GetFileOutput> {
			return this.http.post<GetFileOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.GetFile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the contents of a specified folder in a repository.
		 * Post #X-Amz-Target=CodeCommit_20150413.GetFolder
		 * @return {GetFolderOutput} Success
		 */
		GetFolder(requestBody: GetFolderInput): Observable<GetFolderOutput> {
			return this.http.post<GetFolderOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.GetFolder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specified merge commit.
		 * Post #X-Amz-Target=CodeCommit_20150413.GetMergeCommit
		 * @return {GetMergeCommitOutput} Success
		 */
		GetMergeCommit(requestBody: GetMergeCommitInput): Observable<GetMergeCommitOutput> {
			return this.http.post<GetMergeCommitOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.GetMergeCommit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.
		 * Post #X-Amz-Target=CodeCommit_20150413.GetMergeConflicts
		 * @param {string} maxConflictFiles Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetMergeConflictsOutput} Success
		 */
		GetMergeConflicts(maxConflictFiles: string | null | undefined, nextToken: string | null | undefined, requestBody: GetMergeConflictsInput): Observable<GetMergeConflictsOutput> {
			return this.http.post<GetMergeConflictsOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.GetMergeConflicts?maxConflictFiles=' + (maxConflictFiles == null ? '' : encodeURIComponent(maxConflictFiles)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the merge options available for merging two specified branches. For details about why a merge option is not available, use GetMergeConflicts or DescribeMergeConflicts.
		 * Post #X-Amz-Target=CodeCommit_20150413.GetMergeOptions
		 * @return {GetMergeOptionsOutput} Success
		 */
		GetMergeOptions(requestBody: GetMergeOptionsInput): Observable<GetMergeOptionsOutput> {
			return this.http.post<GetMergeOptionsOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.GetMergeOptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a pull request in a specified repository.
		 * Post #X-Amz-Target=CodeCommit_20150413.GetPullRequest
		 * @return {GetPullRequestOutput} Success
		 */
		GetPullRequest(requestBody: GetPullRequestInput): Observable<GetPullRequestOutput> {
			return this.http.post<GetPullRequestOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.GetPullRequest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more approval rules applied to them.
		 * Post #X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates
		 * @return {GetPullRequestApprovalStatesOutput} Success
		 */
		GetPullRequestApprovalStates(requestBody: GetPullRequestApprovalStatesInput): Observable<GetPullRequestApprovalStatesOutput> {
			return this.http.post<GetPullRequestApprovalStatesOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.GetPullRequestApprovalStates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about whether approval rules have been set aside (overridden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.
		 * Post #X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState
		 * @return {GetPullRequestOverrideStateOutput} Success
		 */
		GetPullRequestOverrideState(requestBody: GetPullRequestOverrideStateInput): Observable<GetPullRequestOverrideStateOutput> {
			return this.http.post<GetPullRequestOverrideStateOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.GetPullRequestOverrideState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
		 * Post #X-Amz-Target=CodeCommit_20150413.GetRepository
		 * @return {GetRepositoryOutput} Success
		 */
		GetRepository(requestBody: GetRepositoryInput): Observable<GetRepositoryOutput> {
			return this.http.post<GetRepositoryOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.GetRepository', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about triggers configured for a repository.
		 * Post #X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers
		 * @return {GetRepositoryTriggersOutput} Success
		 */
		GetRepositoryTriggers(requestBody: GetRepositoryTriggersInput): Observable<GetRepositoryTriggersOutput> {
			return this.http.post<GetRepositoryTriggersOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.GetRepositoryTriggers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all approval rule templates in the specified AWS Region in your AWS account. If an AWS Region is not specified, the AWS Region where you are signed in is used.
		 * Post #X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListApprovalRuleTemplatesOutput} Success
		 */
		ListApprovalRuleTemplates(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListApprovalRuleTemplatesInput): Observable<ListApprovalRuleTemplatesOutput> {
			return this.http.post<ListApprovalRuleTemplatesOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.ListApprovalRuleTemplates?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all approval rule templates that are associated with a specified repository.
		 * Post #X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAssociatedApprovalRuleTemplatesForRepositoryOutput} Success
		 */
		ListAssociatedApprovalRuleTemplatesForRepository(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAssociatedApprovalRuleTemplatesForRepositoryInput): Observable<ListAssociatedApprovalRuleTemplatesForRepositoryOutput> {
			return this.http.post<ListAssociatedApprovalRuleTemplatesForRepositoryOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.ListAssociatedApprovalRuleTemplatesForRepository?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about one or more branches in a repository.
		 * Post #X-Amz-Target=CodeCommit_20150413.ListBranches
		 * @param {string} nextToken Pagination token
		 * @return {ListBranchesOutput} Success
		 */
		ListBranches(nextToken: string | null | undefined, requestBody: ListBranchesInput): Observable<ListBranchesOutput> {
			return this.http.post<ListBranchesOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.ListBranches?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of pull requests for a specified repository. The return list can be refined by pull request status or pull request author ARN.
		 * Post #X-Amz-Target=CodeCommit_20150413.ListPullRequests
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListPullRequestsOutput} Success
		 */
		ListPullRequests(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListPullRequestsInput): Observable<ListPullRequestsOutput> {
			return this.http.post<ListPullRequestsOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.ListPullRequests?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about one or more repositories.
		 * Post #X-Amz-Target=CodeCommit_20150413.ListRepositories
		 * @param {string} nextToken Pagination token
		 * @return {ListRepositoriesOutput} Success
		 */
		ListRepositories(nextToken: string | null | undefined, requestBody: ListRepositoriesInput): Observable<ListRepositoriesOutput> {
			return this.http.post<ListRepositoriesOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.ListRepositories?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all repositories associated with the specified approval rule template.
		 * Post #X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListRepositoriesForApprovalRuleTemplateOutput} Success
		 */
		ListRepositoriesForApprovalRuleTemplate(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListRepositoriesForApprovalRuleTemplateInput): Observable<ListRepositoriesForApprovalRuleTemplateOutput> {
			return this.http.post<ListRepositoriesForApprovalRuleTemplateOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the<i> AWS CodeCommit User Guide</i>.
		 * Post #X-Amz-Target=CodeCommit_20150413.ListTagsForResource
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceInput): Observable<ListTagsForResourceOutput> {
			return this.http.post<ListTagsForResourceOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Merges two branches using the fast-forward merge strategy.
		 * Post #X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward
		 * @return {MergeBranchesByFastForwardOutput} Success
		 */
		MergeBranchesByFastForward(requestBody: MergeBranchesByFastForwardInput): Observable<MergeBranchesByFastForwardOutput> {
			return this.http.post<MergeBranchesByFastForwardOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.MergeBranchesByFastForward', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Merges two branches using the squash merge strategy.
		 * Post #X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash
		 * @return {MergeBranchesBySquashOutput} Success
		 */
		MergeBranchesBySquash(requestBody: MergeBranchesBySquashInput): Observable<MergeBranchesBySquashOutput> {
			return this.http.post<MergeBranchesBySquashOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.MergeBranchesBySquash', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Merges two specified branches using the three-way merge strategy.
		 * Post #X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay
		 * @return {MergeBranchesByThreeWayOutput} Success
		 */
		MergeBranchesByThreeWay(requestBody: MergeBranchesByThreeWayInput): Observable<MergeBranchesByThreeWayOutput> {
			return this.http.post<MergeBranchesByThreeWayOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.MergeBranchesByThreeWay', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the fast-forward merge strategy. If the merge is successful, it closes the pull request.
		 * Post #X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward
		 * @return {MergePullRequestByFastForwardOutput} Success
		 */
		MergePullRequestByFastForward(requestBody: MergePullRequestByFastForwardInput): Observable<MergePullRequestByFastForwardOutput> {
			return this.http.post<MergePullRequestByFastForwardOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.MergePullRequestByFastForward', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.
		 * Post #X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash
		 * @return {MergePullRequestBySquashOutput} Success
		 */
		MergePullRequestBySquash(requestBody: MergePullRequestBySquashInput): Observable<MergePullRequestBySquashOutput> {
			return this.http.post<MergePullRequestBySquashOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.MergePullRequestBySquash', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.
		 * Post #X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay
		 * @return {MergePullRequestByThreeWayOutput} Success
		 */
		MergePullRequestByThreeWay(requestBody: MergePullRequestByThreeWayInput): Observable<MergePullRequestByThreeWayOutput> {
			return this.http.post<MergePullRequestByThreeWayOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.MergePullRequestByThreeWay', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets aside (overrides) all approval rule requirements for a specified pull request.
		 * Post #X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules
		 * @return {void} Success
		 */
		OverridePullRequestApprovalRules(requestBody: OverridePullRequestApprovalRulesInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.OverridePullRequestApprovalRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Posts a comment on the comparison between two commits.
		 * Post #X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit
		 * @return {PostCommentForComparedCommitOutput} Success
		 */
		PostCommentForComparedCommit(requestBody: PostCommentForComparedCommitInput): Observable<PostCommentForComparedCommitOutput> {
			return this.http.post<PostCommentForComparedCommitOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.PostCommentForComparedCommit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Posts a comment on a pull request.
		 * Post #X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest
		 * @return {PostCommentForPullRequestOutput} Success
		 */
		PostCommentForPullRequest(requestBody: PostCommentForPullRequestInput): Observable<PostCommentForPullRequestOutput> {
			return this.http.post<PostCommentForPullRequestOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.PostCommentForPullRequest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Posts a comment in reply to an existing comment on a comparison between commits or a pull request.
		 * Post #X-Amz-Target=CodeCommit_20150413.PostCommentReply
		 * @return {PostCommentReplyOutput} Success
		 */
		PostCommentReply(requestBody: PostCommentReplyInput): Observable<PostCommentReplyOutput> {
			return this.http.post<PostCommentReplyOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.PostCommentReply', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds or updates a file in a branch in an AWS CodeCommit repository, and generates a commit for the addition in the specified branch.
		 * Post #X-Amz-Target=CodeCommit_20150413.PutFile
		 * @return {PutFileOutput} Success
		 */
		PutFile(requestBody: PutFileInput): Observable<PutFileOutput> {
			return this.http.post<PutFileOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.PutFile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Replaces all triggers for a repository. Used to create or delete triggers.
		 * Post #X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers
		 * @return {PutRepositoryTriggersOutput} Success
		 */
		PutRepositoryTriggers(requestBody: PutRepositoryTriggersInput): Observable<PutRepositoryTriggersOutput> {
			return this.http.post<PutRepositoryTriggersOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.PutRepositoryTriggers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds or updates tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.
		 * Post #X-Amz-Target=CodeCommit_20150413.TagResource
		 * @return {void} Success
		 */
		TagResource(requestBody: TagResourceInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test sends data from the last commit. If no data is available, sample data is generated.
		 * Post #X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers
		 * @return {TestRepositoryTriggersOutput} Success
		 */
		TestRepositoryTriggers(requestBody: TestRepositoryTriggersInput): Observable<TestRepositoryTriggersOutput> {
			return this.http.post<TestRepositoryTriggersOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.TestRepositoryTriggers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags for a resource in AWS CodeCommit. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the <i>AWS CodeCommit User Guide</i>.
		 * Post #X-Amz-Target=CodeCommit_20150413.UntagResource
		 * @return {void} Success
		 */
		UntagResource(requestBody: UntagResourceInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the content of an approval rule template. You can change the number of required approvals, the membership of the approval rule, and whether an approval pool is defined.
		 * Post #X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent
		 * @return {UpdateApprovalRuleTemplateContentOutput} Success
		 */
		UpdateApprovalRuleTemplateContent(requestBody: UpdateApprovalRuleTemplateContentInput): Observable<UpdateApprovalRuleTemplateContentOutput> {
			return this.http.post<UpdateApprovalRuleTemplateContentOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateContent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the description for a specified approval rule template.
		 * Post #X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription
		 * @return {UpdateApprovalRuleTemplateDescriptionOutput} Success
		 */
		UpdateApprovalRuleTemplateDescription(requestBody: UpdateApprovalRuleTemplateDescriptionInput): Observable<UpdateApprovalRuleTemplateDescriptionOutput> {
			return this.http.post<UpdateApprovalRuleTemplateDescriptionOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateDescription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the name of a specified approval rule template.
		 * Post #X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName
		 * @return {UpdateApprovalRuleTemplateNameOutput} Success
		 */
		UpdateApprovalRuleTemplateName(requestBody: UpdateApprovalRuleTemplateNameInput): Observable<UpdateApprovalRuleTemplateNameOutput> {
			return this.http.post<UpdateApprovalRuleTemplateNameOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.UpdateApprovalRuleTemplateName', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Replaces the contents of a comment.
		 * Post #X-Amz-Target=CodeCommit_20150413.UpdateComment
		 * @return {UpdateCommentOutput} Success
		 */
		UpdateComment(requestBody: UpdateCommentInput): Observable<UpdateCommentOutput> {
			return this.http.post<UpdateCommentOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.UpdateComment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sets or changes the default branch name for the specified repository.</p> <note> <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p> </note>
		 * Post #X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch
		 * @return {void} Success
		 */
		UpdateDefaultBranch(requestBody: UpdateDefaultBranchInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.UpdateDefaultBranch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and the approval pool for approvers.
		 * Post #X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent
		 * @return {UpdatePullRequestApprovalRuleContentOutput} Success
		 */
		UpdatePullRequestApprovalRuleContent(requestBody: UpdatePullRequestApprovalRuleContentInput): Observable<UpdatePullRequestApprovalRuleContentOutput> {
			return this.http.post<UpdatePullRequestApprovalRuleContentOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalRuleContent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the state of a user's approval on a pull request. The user is derived from the signed-in account when the request is made.
		 * Post #X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState
		 * @return {void} Success
		 */
		UpdatePullRequestApprovalState(requestBody: UpdatePullRequestApprovalStateInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestApprovalState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Replaces the contents of the description of a pull request.
		 * Post #X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription
		 * @return {UpdatePullRequestDescriptionOutput} Success
		 */
		UpdatePullRequestDescription(requestBody: UpdatePullRequestDescriptionInput): Observable<UpdatePullRequestDescriptionOutput> {
			return this.http.post<UpdatePullRequestDescriptionOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestDescription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the status of a pull request.
		 * Post #X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus
		 * @return {UpdatePullRequestStatusOutput} Success
		 */
		UpdatePullRequestStatus(requestBody: UpdatePullRequestStatusInput): Observable<UpdatePullRequestStatusOutput> {
			return this.http.post<UpdatePullRequestStatusOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Replaces the title of a pull request.
		 * Post #X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle
		 * @return {UpdatePullRequestTitleOutput} Success
		 */
		UpdatePullRequestTitle(requestBody: UpdatePullRequestTitleInput): Observable<UpdatePullRequestTitleOutput> {
			return this.http.post<UpdatePullRequestTitleOutput>(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.UpdatePullRequestTitle', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sets or changes the comment or description for a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.</p> </note>
		 * Post #X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription
		 * @return {void} Success
		 */
		UpdateRepositoryDescription(requestBody: UpdateRepositoryDescriptionInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryDescription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Renames a repository. The repository name must be unique across the calling AWS account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix .git is prohibited. For more information about the limits on repository names, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the AWS CodeCommit User Guide.
		 * Post #X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName
		 * @return {void} Success
		 */
		UpdateRepositoryName(requestBody: UpdateRepositoryNameInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodeCommit_20150413.UpdateRepositoryName', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum AssociateApprovalRuleTemplateWithRepositoryX_Amz_Target { CodeCommit_20150413_AssociateApprovalRuleTemplateWithRepository = 0 }

	export enum BatchAssociateApprovalRuleTemplateWithRepositoriesX_Amz_Target { CodeCommit_20150413_BatchAssociateApprovalRuleTemplateWithRepositories = 0 }

	export enum BatchDescribeMergeConflictsX_Amz_Target { CodeCommit_20150413_BatchDescribeMergeConflicts = 0 }

	export enum BatchDisassociateApprovalRuleTemplateFromRepositoriesX_Amz_Target { CodeCommit_20150413_BatchDisassociateApprovalRuleTemplateFromRepositories = 0 }

	export enum BatchGetCommitsX_Amz_Target { CodeCommit_20150413_BatchGetCommits = 0 }

	export enum BatchGetRepositoriesX_Amz_Target { CodeCommit_20150413_BatchGetRepositories = 0 }

	export enum CreateApprovalRuleTemplateX_Amz_Target { CodeCommit_20150413_CreateApprovalRuleTemplate = 0 }

	export enum CreateBranchX_Amz_Target { CodeCommit_20150413_CreateBranch = 0 }

	export enum CreateCommitX_Amz_Target { CodeCommit_20150413_CreateCommit = 0 }

	export enum CreatePullRequestX_Amz_Target { CodeCommit_20150413_CreatePullRequest = 0 }

	export enum CreatePullRequestApprovalRuleX_Amz_Target { CodeCommit_20150413_CreatePullRequestApprovalRule = 0 }

	export enum CreateRepositoryX_Amz_Target { CodeCommit_20150413_CreateRepository = 0 }

	export enum CreateUnreferencedMergeCommitX_Amz_Target { CodeCommit_20150413_CreateUnreferencedMergeCommit = 0 }

	export enum DeleteApprovalRuleTemplateX_Amz_Target { CodeCommit_20150413_DeleteApprovalRuleTemplate = 0 }

	export enum DeleteBranchX_Amz_Target { CodeCommit_20150413_DeleteBranch = 0 }

	export enum DeleteCommentContentX_Amz_Target { CodeCommit_20150413_DeleteCommentContent = 0 }

	export enum DeleteFileX_Amz_Target { CodeCommit_20150413_DeleteFile = 0 }

	export enum DeletePullRequestApprovalRuleX_Amz_Target { CodeCommit_20150413_DeletePullRequestApprovalRule = 0 }

	export enum DeleteRepositoryX_Amz_Target { CodeCommit_20150413_DeleteRepository = 0 }

	export enum DescribeMergeConflictsX_Amz_Target { CodeCommit_20150413_DescribeMergeConflicts = 0 }

	export enum DescribePullRequestEventsX_Amz_Target { CodeCommit_20150413_DescribePullRequestEvents = 0 }

	export enum DisassociateApprovalRuleTemplateFromRepositoryX_Amz_Target { CodeCommit_20150413_DisassociateApprovalRuleTemplateFromRepository = 0 }

	export enum EvaluatePullRequestApprovalRulesX_Amz_Target { CodeCommit_20150413_EvaluatePullRequestApprovalRules = 0 }

	export enum GetApprovalRuleTemplateX_Amz_Target { CodeCommit_20150413_GetApprovalRuleTemplate = 0 }

	export enum GetBlobX_Amz_Target { CodeCommit_20150413_GetBlob = 0 }

	export enum GetBranchX_Amz_Target { CodeCommit_20150413_GetBranch = 0 }

	export enum GetCommentX_Amz_Target { CodeCommit_20150413_GetComment = 0 }

	export enum GetCommentsForComparedCommitX_Amz_Target { CodeCommit_20150413_GetCommentsForComparedCommit = 0 }

	export enum GetCommentsForPullRequestX_Amz_Target { CodeCommit_20150413_GetCommentsForPullRequest = 0 }

	export enum GetCommitX_Amz_Target { CodeCommit_20150413_GetCommit = 0 }

	export enum GetDifferencesX_Amz_Target { CodeCommit_20150413_GetDifferences = 0 }

	export enum GetFileX_Amz_Target { CodeCommit_20150413_GetFile = 0 }

	export enum GetFolderX_Amz_Target { CodeCommit_20150413_GetFolder = 0 }

	export enum GetMergeCommitX_Amz_Target { CodeCommit_20150413_GetMergeCommit = 0 }

	export enum GetMergeConflictsX_Amz_Target { CodeCommit_20150413_GetMergeConflicts = 0 }

	export enum GetMergeOptionsX_Amz_Target { CodeCommit_20150413_GetMergeOptions = 0 }

	export enum GetPullRequestX_Amz_Target { CodeCommit_20150413_GetPullRequest = 0 }

	export enum GetPullRequestApprovalStatesX_Amz_Target { CodeCommit_20150413_GetPullRequestApprovalStates = 0 }

	export enum GetPullRequestOverrideStateX_Amz_Target { CodeCommit_20150413_GetPullRequestOverrideState = 0 }

	export enum GetRepositoryX_Amz_Target { CodeCommit_20150413_GetRepository = 0 }

	export enum GetRepositoryTriggersX_Amz_Target { CodeCommit_20150413_GetRepositoryTriggers = 0 }

	export enum ListApprovalRuleTemplatesX_Amz_Target { CodeCommit_20150413_ListApprovalRuleTemplates = 0 }

	export enum ListAssociatedApprovalRuleTemplatesForRepositoryX_Amz_Target { CodeCommit_20150413_ListAssociatedApprovalRuleTemplatesForRepository = 0 }

	export enum ListBranchesX_Amz_Target { CodeCommit_20150413_ListBranches = 0 }

	export enum ListPullRequestsX_Amz_Target { CodeCommit_20150413_ListPullRequests = 0 }

	export enum ListRepositoriesX_Amz_Target { CodeCommit_20150413_ListRepositories = 0 }

	export enum ListRepositoriesForApprovalRuleTemplateX_Amz_Target { CodeCommit_20150413_ListRepositoriesForApprovalRuleTemplate = 0 }

	export enum ListTagsForResourceX_Amz_Target { CodeCommit_20150413_ListTagsForResource = 0 }

	export enum MergeBranchesByFastForwardX_Amz_Target { CodeCommit_20150413_MergeBranchesByFastForward = 0 }

	export enum MergeBranchesBySquashX_Amz_Target { CodeCommit_20150413_MergeBranchesBySquash = 0 }

	export enum MergeBranchesByThreeWayX_Amz_Target { CodeCommit_20150413_MergeBranchesByThreeWay = 0 }

	export enum MergePullRequestByFastForwardX_Amz_Target { CodeCommit_20150413_MergePullRequestByFastForward = 0 }

	export enum MergePullRequestBySquashX_Amz_Target { CodeCommit_20150413_MergePullRequestBySquash = 0 }

	export enum MergePullRequestByThreeWayX_Amz_Target { CodeCommit_20150413_MergePullRequestByThreeWay = 0 }

	export enum OverridePullRequestApprovalRulesX_Amz_Target { CodeCommit_20150413_OverridePullRequestApprovalRules = 0 }

	export enum PostCommentForComparedCommitX_Amz_Target { CodeCommit_20150413_PostCommentForComparedCommit = 0 }

	export enum PostCommentForPullRequestX_Amz_Target { CodeCommit_20150413_PostCommentForPullRequest = 0 }

	export enum PostCommentReplyX_Amz_Target { CodeCommit_20150413_PostCommentReply = 0 }

	export enum PutFileX_Amz_Target { CodeCommit_20150413_PutFile = 0 }

	export enum PutRepositoryTriggersX_Amz_Target { CodeCommit_20150413_PutRepositoryTriggers = 0 }

	export enum TagResourceX_Amz_Target { CodeCommit_20150413_TagResource = 0 }

	export enum TestRepositoryTriggersX_Amz_Target { CodeCommit_20150413_TestRepositoryTriggers = 0 }

	export enum UntagResourceX_Amz_Target { CodeCommit_20150413_UntagResource = 0 }

	export enum UpdateApprovalRuleTemplateContentX_Amz_Target { CodeCommit_20150413_UpdateApprovalRuleTemplateContent = 0 }

	export enum UpdateApprovalRuleTemplateDescriptionX_Amz_Target { CodeCommit_20150413_UpdateApprovalRuleTemplateDescription = 0 }

	export enum UpdateApprovalRuleTemplateNameX_Amz_Target { CodeCommit_20150413_UpdateApprovalRuleTemplateName = 0 }

	export enum UpdateCommentX_Amz_Target { CodeCommit_20150413_UpdateComment = 0 }

	export enum UpdateDefaultBranchX_Amz_Target { CodeCommit_20150413_UpdateDefaultBranch = 0 }

	export enum UpdatePullRequestApprovalRuleContentX_Amz_Target { CodeCommit_20150413_UpdatePullRequestApprovalRuleContent = 0 }

	export enum UpdatePullRequestApprovalStateX_Amz_Target { CodeCommit_20150413_UpdatePullRequestApprovalState = 0 }

	export enum UpdatePullRequestDescriptionX_Amz_Target { CodeCommit_20150413_UpdatePullRequestDescription = 0 }

	export enum UpdatePullRequestStatusX_Amz_Target { CodeCommit_20150413_UpdatePullRequestStatus = 0 }

	export enum UpdatePullRequestTitleX_Amz_Target { CodeCommit_20150413_UpdatePullRequestTitle = 0 }

	export enum UpdateRepositoryDescriptionX_Amz_Target { CodeCommit_20150413_UpdateRepositoryDescription = 0 }

	export enum UpdateRepositoryNameX_Amz_Target { CodeCommit_20150413_UpdateRepositoryName = 0 }

}

