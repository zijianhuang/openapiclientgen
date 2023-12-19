import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateApprovalRuleTemplateWithRepositoryInput {
		approvalRuleTemplateName: string;
		repositoryName: string;
	}
	export interface AssociateApprovalRuleTemplateWithRepositoryInputFormProperties {
		approvalRuleTemplateName: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateAssociateApprovalRuleTemplateWithRepositoryInputFormGroup() {
		return new FormGroup<AssociateApprovalRuleTemplateWithRepositoryInputFormProperties>({
			approvalRuleTemplateName: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApprovalRuleTemplateNameRequiredException {
	}
	export interface ApprovalRuleTemplateNameRequiredExceptionFormProperties {
	}
	export function CreateApprovalRuleTemplateNameRequiredExceptionFormGroup() {
		return new FormGroup<ApprovalRuleTemplateNameRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidApprovalRuleTemplateNameException {
	}
	export interface InvalidApprovalRuleTemplateNameExceptionFormProperties {
	}
	export function CreateInvalidApprovalRuleTemplateNameExceptionFormGroup() {
		return new FormGroup<InvalidApprovalRuleTemplateNameExceptionFormProperties>({
		});

	}

	export interface ApprovalRuleTemplateDoesNotExistException {
	}
	export interface ApprovalRuleTemplateDoesNotExistExceptionFormProperties {
	}
	export function CreateApprovalRuleTemplateDoesNotExistExceptionFormGroup() {
		return new FormGroup<ApprovalRuleTemplateDoesNotExistExceptionFormProperties>({
		});

	}

	export interface MaximumRuleTemplatesAssociatedWithRepositoryException {
	}
	export interface MaximumRuleTemplatesAssociatedWithRepositoryExceptionFormProperties {
	}
	export function CreateMaximumRuleTemplatesAssociatedWithRepositoryExceptionFormGroup() {
		return new FormGroup<MaximumRuleTemplatesAssociatedWithRepositoryExceptionFormProperties>({
		});

	}

	export interface RepositoryNameRequiredException {
	}
	export interface RepositoryNameRequiredExceptionFormProperties {
	}
	export function CreateRepositoryNameRequiredExceptionFormGroup() {
		return new FormGroup<RepositoryNameRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidRepositoryNameException {
	}
	export interface InvalidRepositoryNameExceptionFormProperties {
	}
	export function CreateInvalidRepositoryNameExceptionFormGroup() {
		return new FormGroup<InvalidRepositoryNameExceptionFormProperties>({
		});

	}

	export interface RepositoryDoesNotExistException {
	}
	export interface RepositoryDoesNotExistExceptionFormProperties {
	}
	export function CreateRepositoryDoesNotExistExceptionFormGroup() {
		return new FormGroup<RepositoryDoesNotExistExceptionFormProperties>({
		});

	}

	export interface EncryptionIntegrityChecksFailedException {
	}
	export interface EncryptionIntegrityChecksFailedExceptionFormProperties {
	}
	export function CreateEncryptionIntegrityChecksFailedExceptionFormGroup() {
		return new FormGroup<EncryptionIntegrityChecksFailedExceptionFormProperties>({
		});

	}

	export interface EncryptionKeyAccessDeniedException {
	}
	export interface EncryptionKeyAccessDeniedExceptionFormProperties {
	}
	export function CreateEncryptionKeyAccessDeniedExceptionFormGroup() {
		return new FormGroup<EncryptionKeyAccessDeniedExceptionFormProperties>({
		});

	}

	export interface EncryptionKeyDisabledException {
	}
	export interface EncryptionKeyDisabledExceptionFormProperties {
	}
	export function CreateEncryptionKeyDisabledExceptionFormGroup() {
		return new FormGroup<EncryptionKeyDisabledExceptionFormProperties>({
		});

	}

	export interface EncryptionKeyNotFoundException {
	}
	export interface EncryptionKeyNotFoundExceptionFormProperties {
	}
	export function CreateEncryptionKeyNotFoundExceptionFormGroup() {
		return new FormGroup<EncryptionKeyNotFoundExceptionFormProperties>({
		});

	}

	export interface EncryptionKeyUnavailableException {
	}
	export interface EncryptionKeyUnavailableExceptionFormProperties {
	}
	export function CreateEncryptionKeyUnavailableExceptionFormGroup() {
		return new FormGroup<EncryptionKeyUnavailableExceptionFormProperties>({
		});

	}

	export interface BatchAssociateApprovalRuleTemplateWithRepositoriesOutput {
		associatedRepositoryNames: Array<string>;
		errors: Array<BatchAssociateApprovalRuleTemplateWithRepositoriesError>;
	}
	export interface BatchAssociateApprovalRuleTemplateWithRepositoriesOutputFormProperties {
	}
	export function CreateBatchAssociateApprovalRuleTemplateWithRepositoriesOutputFormGroup() {
		return new FormGroup<BatchAssociateApprovalRuleTemplateWithRepositoriesOutputFormProperties>({
		});

	}


	/** Returns information about errors in a BatchAssociateApprovalRuleTemplateWithRepositories operation. */
	export interface BatchAssociateApprovalRuleTemplateWithRepositoriesError {
		repositoryName?: string | null;
		errorCode?: string | null;
		errorMessage?: string | null;
	}

	/** Returns information about errors in a BatchAssociateApprovalRuleTemplateWithRepositories operation. */
	export interface BatchAssociateApprovalRuleTemplateWithRepositoriesErrorFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		errorCode: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchAssociateApprovalRuleTemplateWithRepositoriesErrorFormGroup() {
		return new FormGroup<BatchAssociateApprovalRuleTemplateWithRepositoriesErrorFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchAssociateApprovalRuleTemplateWithRepositoriesInput {
		approvalRuleTemplateName: string;
		repositoryNames: Array<string>;
	}
	export interface BatchAssociateApprovalRuleTemplateWithRepositoriesInputFormProperties {
		approvalRuleTemplateName: FormControl<string | null | undefined>,
	}
	export function CreateBatchAssociateApprovalRuleTemplateWithRepositoriesInputFormGroup() {
		return new FormGroup<BatchAssociateApprovalRuleTemplateWithRepositoriesInputFormProperties>({
			approvalRuleTemplateName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RepositoryNamesRequiredException {
	}
	export interface RepositoryNamesRequiredExceptionFormProperties {
	}
	export function CreateRepositoryNamesRequiredExceptionFormGroup() {
		return new FormGroup<RepositoryNamesRequiredExceptionFormProperties>({
		});

	}

	export interface MaximumRepositoryNamesExceededException {
	}
	export interface MaximumRepositoryNamesExceededExceptionFormProperties {
	}
	export function CreateMaximumRepositoryNamesExceededExceptionFormGroup() {
		return new FormGroup<MaximumRepositoryNamesExceededExceptionFormProperties>({
		});

	}

	export interface BatchDescribeMergeConflictsOutput {
		conflicts: Array<Conflict>;
		nextToken?: string | null;
		errors?: Array<BatchDescribeMergeConflictsError>;
		destinationCommitId: string;
		sourceCommitId: string;
		baseCommitId?: string | null;
	}
	export interface BatchDescribeMergeConflictsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
		destinationCommitId: FormControl<string | null | undefined>,
		sourceCommitId: FormControl<string | null | undefined>,
		baseCommitId: FormControl<string | null | undefined>,
	}
	export function CreateBatchDescribeMergeConflictsOutputFormGroup() {
		return new FormGroup<BatchDescribeMergeConflictsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			destinationCommitId: new FormControl<string | null | undefined>(undefined),
			sourceCommitId: new FormControl<string | null | undefined>(undefined),
			baseCommitId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about conflicts in a merge operation. */
	export interface Conflict {

		/** Information about the metadata for a conflict in a merge operation. */
		conflictMetadata?: ConflictMetadata;
		mergeHunks?: Array<MergeHunk>;
	}

	/** Information about conflicts in a merge operation. */
	export interface ConflictFormProperties {
	}
	export function CreateConflictFormGroup() {
		return new FormGroup<ConflictFormProperties>({
		});

	}


	/** Information about the metadata for a conflict in a merge operation. */
	export interface ConflictMetadata {
		filePath?: string | null;

		/** Information about the size of files in a merge or pull request. */
		fileSizes?: FileSizes;

		/** Information about file modes in a merge or pull request. */
		fileModes?: FileModes;

		/** Information about the type of an object in a merge operation. */
		objectTypes?: ObjectTypes;
		numberOfConflicts?: number | null;

		/** Information about whether a file is binary or textual in a merge or pull request operation. */
		isBinaryFile?: IsBinaryFile;
		contentConflict?: boolean | null;
		fileModeConflict?: boolean | null;
		objectTypeConflict?: boolean | null;

		/** Information about the file operation conflicts in a merge operation. */
		mergeOperations?: MergeOperations;
	}

	/** Information about the metadata for a conflict in a merge operation. */
	export interface ConflictMetadataFormProperties {
		filePath: FormControl<string | null | undefined>,
		numberOfConflicts: FormControl<number | null | undefined>,
		contentConflict: FormControl<boolean | null | undefined>,
		fileModeConflict: FormControl<boolean | null | undefined>,
		objectTypeConflict: FormControl<boolean | null | undefined>,
	}
	export function CreateConflictMetadataFormGroup() {
		return new FormGroup<ConflictMetadataFormProperties>({
			filePath: new FormControl<string | null | undefined>(undefined),
			numberOfConflicts: new FormControl<number | null | undefined>(undefined),
			contentConflict: new FormControl<boolean | null | undefined>(undefined),
			fileModeConflict: new FormControl<boolean | null | undefined>(undefined),
			objectTypeConflict: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about the size of files in a merge or pull request. */
	export interface FileSizes {
		source?: number | null;
		destination?: number | null;
		base?: number | null;
	}

	/** Information about the size of files in a merge or pull request. */
	export interface FileSizesFormProperties {
		source: FormControl<number | null | undefined>,
		destination: FormControl<number | null | undefined>,
		base: FormControl<number | null | undefined>,
	}
	export function CreateFileSizesFormGroup() {
		return new FormGroup<FileSizesFormProperties>({
			source: new FormControl<number | null | undefined>(undefined),
			destination: new FormControl<number | null | undefined>(undefined),
			base: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about file modes in a merge or pull request. */
	export interface FileModes {
		source?: FileModesSource | null;
		destination?: FileModesSource | null;
		base?: FileModesSource | null;
	}

	/** Information about file modes in a merge or pull request. */
	export interface FileModesFormProperties {
		source: FormControl<FileModesSource | null | undefined>,
		destination: FormControl<FileModesSource | null | undefined>,
		base: FormControl<FileModesSource | null | undefined>,
	}
	export function CreateFileModesFormGroup() {
		return new FormGroup<FileModesFormProperties>({
			source: new FormControl<FileModesSource | null | undefined>(undefined),
			destination: new FormControl<FileModesSource | null | undefined>(undefined),
			base: new FormControl<FileModesSource | null | undefined>(undefined),
		});

	}

	export enum FileModesSource { EXECUTABLE = 0, NORMAL = 1, SYMLINK = 2 }


	/** Information about the type of an object in a merge operation. */
	export interface ObjectTypes {
		source?: ObjectTypesSource | null;
		destination?: ObjectTypesSource | null;
		base?: ObjectTypesSource | null;
	}

	/** Information about the type of an object in a merge operation. */
	export interface ObjectTypesFormProperties {
		source: FormControl<ObjectTypesSource | null | undefined>,
		destination: FormControl<ObjectTypesSource | null | undefined>,
		base: FormControl<ObjectTypesSource | null | undefined>,
	}
	export function CreateObjectTypesFormGroup() {
		return new FormGroup<ObjectTypesFormProperties>({
			source: new FormControl<ObjectTypesSource | null | undefined>(undefined),
			destination: new FormControl<ObjectTypesSource | null | undefined>(undefined),
			base: new FormControl<ObjectTypesSource | null | undefined>(undefined),
		});

	}

	export enum ObjectTypesSource { FILE = 0, DIRECTORY = 1, GIT_LINK = 2, SYMBOLIC_LINK = 3 }


	/** Information about whether a file is binary or textual in a merge or pull request operation. */
	export interface IsBinaryFile {
		source?: boolean | null;
		destination?: boolean | null;
		base?: boolean | null;
	}

	/** Information about whether a file is binary or textual in a merge or pull request operation. */
	export interface IsBinaryFileFormProperties {
		source: FormControl<boolean | null | undefined>,
		destination: FormControl<boolean | null | undefined>,
		base: FormControl<boolean | null | undefined>,
	}
	export function CreateIsBinaryFileFormGroup() {
		return new FormGroup<IsBinaryFileFormProperties>({
			source: new FormControl<boolean | null | undefined>(undefined),
			destination: new FormControl<boolean | null | undefined>(undefined),
			base: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about the file operation conflicts in a merge operation. */
	export interface MergeOperations {
		source?: MergeOperationsSource | null;
		destination?: MergeOperationsSource | null;
	}

	/** Information about the file operation conflicts in a merge operation. */
	export interface MergeOperationsFormProperties {
		source: FormControl<MergeOperationsSource | null | undefined>,
		destination: FormControl<MergeOperationsSource | null | undefined>,
	}
	export function CreateMergeOperationsFormGroup() {
		return new FormGroup<MergeOperationsFormProperties>({
			source: new FormControl<MergeOperationsSource | null | undefined>(undefined),
			destination: new FormControl<MergeOperationsSource | null | undefined>(undefined),
		});

	}

	export enum MergeOperationsSource { A = 0, M = 1, D = 2 }


	/** Information about merge hunks in a merge or pull request operation. */
	export interface MergeHunk {
		isConflict?: boolean | null;

		/** Information about the details of a merge hunk that contains a conflict in a merge or pull request operation. */
		source?: MergeHunkDetail;

		/** Information about the details of a merge hunk that contains a conflict in a merge or pull request operation. */
		destination?: MergeHunkDetail;

		/** Information about the details of a merge hunk that contains a conflict in a merge or pull request operation. */
		base?: MergeHunkDetail;
	}

	/** Information about merge hunks in a merge or pull request operation. */
	export interface MergeHunkFormProperties {
		isConflict: FormControl<boolean | null | undefined>,
	}
	export function CreateMergeHunkFormGroup() {
		return new FormGroup<MergeHunkFormProperties>({
			isConflict: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about the details of a merge hunk that contains a conflict in a merge or pull request operation. */
	export interface MergeHunkDetail {
		startLine?: number | null;
		endLine?: number | null;
		hunkContent?: string | null;
	}

	/** Information about the details of a merge hunk that contains a conflict in a merge or pull request operation. */
	export interface MergeHunkDetailFormProperties {
		startLine: FormControl<number | null | undefined>,
		endLine: FormControl<number | null | undefined>,
		hunkContent: FormControl<string | null | undefined>,
	}
	export function CreateMergeHunkDetailFormGroup() {
		return new FormGroup<MergeHunkDetailFormProperties>({
			startLine: new FormControl<number | null | undefined>(undefined),
			endLine: new FormControl<number | null | undefined>(undefined),
			hunkContent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns information about errors in a BatchDescribeMergeConflicts operation. */
	export interface BatchDescribeMergeConflictsError {
		filePath: string;
		exceptionName: string;
		message: string;
	}

	/** Returns information about errors in a BatchDescribeMergeConflicts operation. */
	export interface BatchDescribeMergeConflictsErrorFormProperties {
		filePath: FormControl<string | null | undefined>,
		exceptionName: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateBatchDescribeMergeConflictsErrorFormGroup() {
		return new FormGroup<BatchDescribeMergeConflictsErrorFormProperties>({
			filePath: new FormControl<string | null | undefined>(undefined),
			exceptionName: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchDescribeMergeConflictsInput {
		repositoryName: string;
		destinationCommitSpecifier: string;
		sourceCommitSpecifier: string;
		mergeOption: BatchDescribeMergeConflictsInputMergeOption;
		maxMergeHunks?: number | null;
		maxConflictFiles?: number | null;
		filePaths?: Array<string>;
		conflictDetailLevel?: BatchDescribeMergeConflictsInputConflictDetailLevel | null;
		conflictResolutionStrategy?: BatchDescribeMergeConflictsInputConflictResolutionStrategy | null;
		nextToken?: string | null;
	}
	export interface BatchDescribeMergeConflictsInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		destinationCommitSpecifier: FormControl<string | null | undefined>,
		sourceCommitSpecifier: FormControl<string | null | undefined>,
		mergeOption: FormControl<BatchDescribeMergeConflictsInputMergeOption | null | undefined>,
		maxMergeHunks: FormControl<number | null | undefined>,
		maxConflictFiles: FormControl<number | null | undefined>,
		conflictDetailLevel: FormControl<BatchDescribeMergeConflictsInputConflictDetailLevel | null | undefined>,
		conflictResolutionStrategy: FormControl<BatchDescribeMergeConflictsInputConflictResolutionStrategy | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchDescribeMergeConflictsInputFormGroup() {
		return new FormGroup<BatchDescribeMergeConflictsInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			destinationCommitSpecifier: new FormControl<string | null | undefined>(undefined),
			sourceCommitSpecifier: new FormControl<string | null | undefined>(undefined),
			mergeOption: new FormControl<BatchDescribeMergeConflictsInputMergeOption | null | undefined>(undefined),
			maxMergeHunks: new FormControl<number | null | undefined>(undefined),
			maxConflictFiles: new FormControl<number | null | undefined>(undefined),
			conflictDetailLevel: new FormControl<BatchDescribeMergeConflictsInputConflictDetailLevel | null | undefined>(undefined),
			conflictResolutionStrategy: new FormControl<BatchDescribeMergeConflictsInputConflictResolutionStrategy | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BatchDescribeMergeConflictsInputMergeOption { FAST_FORWARD_MERGE = 0, SQUASH_MERGE = 1, THREE_WAY_MERGE = 2 }

	export enum BatchDescribeMergeConflictsInputConflictDetailLevel { FILE_LEVEL = 0, LINE_LEVEL = 1 }

	export enum BatchDescribeMergeConflictsInputConflictResolutionStrategy { NONE = 0, ACCEPT_SOURCE = 1, ACCEPT_DESTINATION = 2, AUTOMERGE = 3 }

	export interface MergeOptionRequiredException {
	}
	export interface MergeOptionRequiredExceptionFormProperties {
	}
	export function CreateMergeOptionRequiredExceptionFormGroup() {
		return new FormGroup<MergeOptionRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidMergeOptionException {
	}
	export interface InvalidMergeOptionExceptionFormProperties {
	}
	export function CreateInvalidMergeOptionExceptionFormGroup() {
		return new FormGroup<InvalidMergeOptionExceptionFormProperties>({
		});

	}

	export interface InvalidContinuationTokenException {
	}
	export interface InvalidContinuationTokenExceptionFormProperties {
	}
	export function CreateInvalidContinuationTokenExceptionFormGroup() {
		return new FormGroup<InvalidContinuationTokenExceptionFormProperties>({
		});

	}

	export interface CommitRequiredException {
	}
	export interface CommitRequiredExceptionFormProperties {
	}
	export function CreateCommitRequiredExceptionFormGroup() {
		return new FormGroup<CommitRequiredExceptionFormProperties>({
		});

	}

	export interface CommitDoesNotExistException {
	}
	export interface CommitDoesNotExistExceptionFormProperties {
	}
	export function CreateCommitDoesNotExistExceptionFormGroup() {
		return new FormGroup<CommitDoesNotExistExceptionFormProperties>({
		});

	}

	export interface InvalidCommitException {
	}
	export interface InvalidCommitExceptionFormProperties {
	}
	export function CreateInvalidCommitExceptionFormGroup() {
		return new FormGroup<InvalidCommitExceptionFormProperties>({
		});

	}

	export interface TipsDivergenceExceededException {
	}
	export interface TipsDivergenceExceededExceptionFormProperties {
	}
	export function CreateTipsDivergenceExceededExceptionFormGroup() {
		return new FormGroup<TipsDivergenceExceededExceptionFormProperties>({
		});

	}

	export interface InvalidMaxConflictFilesException {
	}
	export interface InvalidMaxConflictFilesExceptionFormProperties {
	}
	export function CreateInvalidMaxConflictFilesExceptionFormGroup() {
		return new FormGroup<InvalidMaxConflictFilesExceptionFormProperties>({
		});

	}

	export interface InvalidMaxMergeHunksException {
	}
	export interface InvalidMaxMergeHunksExceptionFormProperties {
	}
	export function CreateInvalidMaxMergeHunksExceptionFormGroup() {
		return new FormGroup<InvalidMaxMergeHunksExceptionFormProperties>({
		});

	}

	export interface InvalidConflictDetailLevelException {
	}
	export interface InvalidConflictDetailLevelExceptionFormProperties {
	}
	export function CreateInvalidConflictDetailLevelExceptionFormGroup() {
		return new FormGroup<InvalidConflictDetailLevelExceptionFormProperties>({
		});

	}

	export interface InvalidConflictResolutionStrategyException {
	}
	export interface InvalidConflictResolutionStrategyExceptionFormProperties {
	}
	export function CreateInvalidConflictResolutionStrategyExceptionFormGroup() {
		return new FormGroup<InvalidConflictResolutionStrategyExceptionFormProperties>({
		});

	}

	export interface MaximumFileContentToLoadExceededException {
	}
	export interface MaximumFileContentToLoadExceededExceptionFormProperties {
	}
	export function CreateMaximumFileContentToLoadExceededExceptionFormGroup() {
		return new FormGroup<MaximumFileContentToLoadExceededExceptionFormProperties>({
		});

	}

	export interface MaximumItemsToCompareExceededException {
	}
	export interface MaximumItemsToCompareExceededExceptionFormProperties {
	}
	export function CreateMaximumItemsToCompareExceededExceptionFormGroup() {
		return new FormGroup<MaximumItemsToCompareExceededExceptionFormProperties>({
		});

	}

	export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput {
		disassociatedRepositoryNames: Array<string>;
		errors: Array<BatchDisassociateApprovalRuleTemplateFromRepositoriesError>;
	}
	export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesOutputFormProperties {
	}
	export function CreateBatchDisassociateApprovalRuleTemplateFromRepositoriesOutputFormGroup() {
		return new FormGroup<BatchDisassociateApprovalRuleTemplateFromRepositoriesOutputFormProperties>({
		});

	}


	/** Returns information about errors in a BatchDisassociateApprovalRuleTemplateFromRepositories operation. */
	export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesError {
		repositoryName?: string | null;
		errorCode?: string | null;
		errorMessage?: string | null;
	}

	/** Returns information about errors in a BatchDisassociateApprovalRuleTemplateFromRepositories operation. */
	export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		errorCode: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchDisassociateApprovalRuleTemplateFromRepositoriesErrorFormGroup() {
		return new FormGroup<BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesInput {
		approvalRuleTemplateName: string;
		repositoryNames: Array<string>;
	}
	export interface BatchDisassociateApprovalRuleTemplateFromRepositoriesInputFormProperties {
		approvalRuleTemplateName: FormControl<string | null | undefined>,
	}
	export function CreateBatchDisassociateApprovalRuleTemplateFromRepositoriesInputFormGroup() {
		return new FormGroup<BatchDisassociateApprovalRuleTemplateFromRepositoriesInputFormProperties>({
			approvalRuleTemplateName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchGetCommitsOutput {
		commits?: Array<Commit>;
		errors?: Array<BatchGetCommitsError>;
	}
	export interface BatchGetCommitsOutputFormProperties {
	}
	export function CreateBatchGetCommitsOutputFormGroup() {
		return new FormGroup<BatchGetCommitsOutputFormProperties>({
		});

	}


	/** Returns information about a specific commit. */
	export interface Commit {
		commitId?: string | null;
		treeId?: string | null;
		parents?: Array<string>;
		message?: string | null;

		/** Information about the user who made a specified commit. */
		author?: UserInfo;

		/** Information about the user who made a specified commit. */
		committer?: UserInfo;
		additionalData?: string | null;
	}

	/** Returns information about a specific commit. */
	export interface CommitFormProperties {
		commitId: FormControl<string | null | undefined>,
		treeId: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		additionalData: FormControl<string | null | undefined>,
	}
	export function CreateCommitFormGroup() {
		return new FormGroup<CommitFormProperties>({
			commitId: new FormControl<string | null | undefined>(undefined),
			treeId: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			additionalData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the user who made a specified commit. */
	export interface UserInfo {
		name?: string | null;
		email?: string | null;
		date?: string | null;
	}

	/** Information about the user who made a specified commit. */
	export interface UserInfoFormProperties {
		name: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
	}
	export function CreateUserInfoFormGroup() {
		return new FormGroup<UserInfoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns information about errors in a BatchGetCommits operation. */
	export interface BatchGetCommitsError {
		commitId?: string | null;
		errorCode?: string | null;
		errorMessage?: string | null;
	}

	/** Returns information about errors in a BatchGetCommits operation. */
	export interface BatchGetCommitsErrorFormProperties {
		commitId: FormControl<string | null | undefined>,
		errorCode: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetCommitsErrorFormGroup() {
		return new FormGroup<BatchGetCommitsErrorFormProperties>({
			commitId: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchGetCommitsInput {
		commitIds: Array<string>;
		repositoryName: string;
	}
	export interface BatchGetCommitsInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetCommitsInputFormGroup() {
		return new FormGroup<BatchGetCommitsInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommitIdsListRequiredException {
	}
	export interface CommitIdsListRequiredExceptionFormProperties {
	}
	export function CreateCommitIdsListRequiredExceptionFormGroup() {
		return new FormGroup<CommitIdsListRequiredExceptionFormProperties>({
		});

	}

	export interface CommitIdsLimitExceededException {
	}
	export interface CommitIdsLimitExceededExceptionFormProperties {
	}
	export function CreateCommitIdsLimitExceededExceptionFormGroup() {
		return new FormGroup<CommitIdsLimitExceededExceptionFormProperties>({
		});

	}


	/** Represents the output of a batch get repositories operation. */
	export interface BatchGetRepositoriesOutput {
		repositories?: Array<RepositoryMetadata>;
		repositoriesNotFound?: Array<string>;
	}

	/** Represents the output of a batch get repositories operation. */
	export interface BatchGetRepositoriesOutputFormProperties {
	}
	export function CreateBatchGetRepositoriesOutputFormGroup() {
		return new FormGroup<BatchGetRepositoriesOutputFormProperties>({
		});

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

	/** Information about a repository. */
	export interface RepositoryMetadataFormProperties {
		accountId: FormControl<string | null | undefined>,
		repositoryId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		repositoryDescription: FormControl<string | null | undefined>,
		defaultBranch: FormControl<string | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		cloneUrlHttp: FormControl<string | null | undefined>,
		cloneUrlSsh: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateRepositoryMetadataFormGroup() {
		return new FormGroup<RepositoryMetadataFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			repositoryId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			repositoryDescription: new FormControl<string | null | undefined>(undefined),
			defaultBranch: new FormControl<string | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			cloneUrlHttp: new FormControl<string | null | undefined>(undefined),
			cloneUrlSsh: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a batch get repositories operation. */
	export interface BatchGetRepositoriesInput {
		repositoryNames: Array<string>;
	}

	/** Represents the input of a batch get repositories operation. */
	export interface BatchGetRepositoriesInputFormProperties {
	}
	export function CreateBatchGetRepositoriesInputFormGroup() {
		return new FormGroup<BatchGetRepositoriesInputFormProperties>({
		});

	}

	export interface CreateApprovalRuleTemplateOutput {

		/**
		 * Returns information about an approval rule template.
		 * Required
		 */
		approvalRuleTemplate: ApprovalRuleTemplate;
	}
	export interface CreateApprovalRuleTemplateOutputFormProperties {
	}
	export function CreateCreateApprovalRuleTemplateOutputFormGroup() {
		return new FormGroup<CreateApprovalRuleTemplateOutputFormProperties>({
		});

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

	/** Returns information about an approval rule template. */
	export interface ApprovalRuleTemplateFormProperties {
		approvalRuleTemplateId: FormControl<string | null | undefined>,
		approvalRuleTemplateName: FormControl<string | null | undefined>,
		approvalRuleTemplateDescription: FormControl<string | null | undefined>,
		approvalRuleTemplateContent: FormControl<string | null | undefined>,
		ruleContentSha256: FormControl<string | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedUser: FormControl<string | null | undefined>,
	}
	export function CreateApprovalRuleTemplateFormGroup() {
		return new FormGroup<ApprovalRuleTemplateFormProperties>({
			approvalRuleTemplateId: new FormControl<string | null | undefined>(undefined),
			approvalRuleTemplateName: new FormControl<string | null | undefined>(undefined),
			approvalRuleTemplateDescription: new FormControl<string | null | undefined>(undefined),
			approvalRuleTemplateContent: new FormControl<string | null | undefined>(undefined),
			ruleContentSha256: new FormControl<string | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedUser: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateApprovalRuleTemplateInput {
		approvalRuleTemplateName: string;
		approvalRuleTemplateContent: string;
		approvalRuleTemplateDescription?: string | null;
	}
	export interface CreateApprovalRuleTemplateInputFormProperties {
		approvalRuleTemplateName: FormControl<string | null | undefined>,
		approvalRuleTemplateContent: FormControl<string | null | undefined>,
		approvalRuleTemplateDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateApprovalRuleTemplateInputFormGroup() {
		return new FormGroup<CreateApprovalRuleTemplateInputFormProperties>({
			approvalRuleTemplateName: new FormControl<string | null | undefined>(undefined),
			approvalRuleTemplateContent: new FormControl<string | null | undefined>(undefined),
			approvalRuleTemplateDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApprovalRuleTemplateNameAlreadyExistsException {
	}
	export interface ApprovalRuleTemplateNameAlreadyExistsExceptionFormProperties {
	}
	export function CreateApprovalRuleTemplateNameAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ApprovalRuleTemplateNameAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface ApprovalRuleTemplateContentRequiredException {
	}
	export interface ApprovalRuleTemplateContentRequiredExceptionFormProperties {
	}
	export function CreateApprovalRuleTemplateContentRequiredExceptionFormGroup() {
		return new FormGroup<ApprovalRuleTemplateContentRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidApprovalRuleTemplateContentException {
	}
	export interface InvalidApprovalRuleTemplateContentExceptionFormProperties {
	}
	export function CreateInvalidApprovalRuleTemplateContentExceptionFormGroup() {
		return new FormGroup<InvalidApprovalRuleTemplateContentExceptionFormProperties>({
		});

	}

	export interface InvalidApprovalRuleTemplateDescriptionException {
	}
	export interface InvalidApprovalRuleTemplateDescriptionExceptionFormProperties {
	}
	export function CreateInvalidApprovalRuleTemplateDescriptionExceptionFormGroup() {
		return new FormGroup<InvalidApprovalRuleTemplateDescriptionExceptionFormProperties>({
		});

	}

	export interface NumberOfRuleTemplatesExceededException {
	}
	export interface NumberOfRuleTemplatesExceededExceptionFormProperties {
	}
	export function CreateNumberOfRuleTemplatesExceededExceptionFormGroup() {
		return new FormGroup<NumberOfRuleTemplatesExceededExceptionFormProperties>({
		});

	}


	/** Represents the input of a create branch operation. */
	export interface CreateBranchInput {
		repositoryName: string;
		branchName: string;
		commitId: string;
	}

	/** Represents the input of a create branch operation. */
	export interface CreateBranchInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		branchName: FormControl<string | null | undefined>,
		commitId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBranchInputFormGroup() {
		return new FormGroup<CreateBranchInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			branchName: new FormControl<string | null | undefined>(undefined),
			commitId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BranchNameRequiredException {
	}
	export interface BranchNameRequiredExceptionFormProperties {
	}
	export function CreateBranchNameRequiredExceptionFormGroup() {
		return new FormGroup<BranchNameRequiredExceptionFormProperties>({
		});

	}

	export interface BranchNameExistsException {
	}
	export interface BranchNameExistsExceptionFormProperties {
	}
	export function CreateBranchNameExistsExceptionFormGroup() {
		return new FormGroup<BranchNameExistsExceptionFormProperties>({
		});

	}

	export interface InvalidBranchNameException {
	}
	export interface InvalidBranchNameExceptionFormProperties {
	}
	export function CreateInvalidBranchNameExceptionFormGroup() {
		return new FormGroup<InvalidBranchNameExceptionFormProperties>({
		});

	}

	export interface CommitIdRequiredException {
	}
	export interface CommitIdRequiredExceptionFormProperties {
	}
	export function CreateCommitIdRequiredExceptionFormGroup() {
		return new FormGroup<CommitIdRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidCommitIdException {
	}
	export interface InvalidCommitIdExceptionFormProperties {
	}
	export function CreateInvalidCommitIdExceptionFormGroup() {
		return new FormGroup<InvalidCommitIdExceptionFormProperties>({
		});

	}

	export interface CreateCommitOutput {
		commitId?: string | null;
		treeId?: string | null;
		filesAdded?: Array<FileMetadata>;
		filesUpdated?: Array<FileMetadata>;
		filesDeleted?: Array<FileMetadata>;
	}
	export interface CreateCommitOutputFormProperties {
		commitId: FormControl<string | null | undefined>,
		treeId: FormControl<string | null | undefined>,
	}
	export function CreateCreateCommitOutputFormGroup() {
		return new FormGroup<CreateCommitOutputFormProperties>({
			commitId: new FormControl<string | null | undefined>(undefined),
			treeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A file to be added, updated, or deleted as part of a commit. */
	export interface FileMetadata {
		absolutePath?: string | null;
		blobId?: string | null;
		fileMode?: FileModesSource | null;
	}

	/** A file to be added, updated, or deleted as part of a commit. */
	export interface FileMetadataFormProperties {
		absolutePath: FormControl<string | null | undefined>,
		blobId: FormControl<string | null | undefined>,
		fileMode: FormControl<FileModesSource | null | undefined>,
	}
	export function CreateFileMetadataFormGroup() {
		return new FormGroup<FileMetadataFormProperties>({
			absolutePath: new FormControl<string | null | undefined>(undefined),
			blobId: new FormControl<string | null | undefined>(undefined),
			fileMode: new FormControl<FileModesSource | null | undefined>(undefined),
		});

	}

	export interface CreateCommitInput {
		repositoryName: string;
		branchName: string;
		parentCommitId?: string | null;
		authorName?: string | null;
		email?: string | null;
		commitMessage?: string | null;
		keepEmptyFolders?: boolean | null;
		putFiles?: Array<PutFileEntry>;
		deleteFiles?: Array<DeleteFileEntry>;
		setFileModes?: Array<SetFileModeEntry>;
	}
	export interface CreateCommitInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		branchName: FormControl<string | null | undefined>,
		parentCommitId: FormControl<string | null | undefined>,
		authorName: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		commitMessage: FormControl<string | null | undefined>,
		keepEmptyFolders: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateCommitInputFormGroup() {
		return new FormGroup<CreateCommitInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			branchName: new FormControl<string | null | undefined>(undefined),
			parentCommitId: new FormControl<string | null | undefined>(undefined),
			authorName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			commitMessage: new FormControl<string | null | undefined>(undefined),
			keepEmptyFolders: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about a file added or updated as part of a commit. */
	export interface PutFileEntry {
		filePath: string;
		fileMode?: FileModesSource | null;
		fileContent?: string | null;

		/** Information about a source file that is part of changes made in a commit. */
		sourceFile?: SourceFileSpecifier;
	}

	/** Information about a file added or updated as part of a commit. */
	export interface PutFileEntryFormProperties {
		filePath: FormControl<string | null | undefined>,
		fileMode: FormControl<FileModesSource | null | undefined>,
		fileContent: FormControl<string | null | undefined>,
	}
	export function CreatePutFileEntryFormGroup() {
		return new FormGroup<PutFileEntryFormProperties>({
			filePath: new FormControl<string | null | undefined>(undefined),
			fileMode: new FormControl<FileModesSource | null | undefined>(undefined),
			fileContent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a source file that is part of changes made in a commit. */
	export interface SourceFileSpecifier {
		filePath: string;
		isMove?: boolean | null;
	}

	/** Information about a source file that is part of changes made in a commit. */
	export interface SourceFileSpecifierFormProperties {
		filePath: FormControl<string | null | undefined>,
		isMove: FormControl<boolean | null | undefined>,
	}
	export function CreateSourceFileSpecifierFormGroup() {
		return new FormGroup<SourceFileSpecifierFormProperties>({
			filePath: new FormControl<string | null | undefined>(undefined),
			isMove: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A file that is deleted as part of a commit. */
	export interface DeleteFileEntry {
		filePath: string;
	}

	/** A file that is deleted as part of a commit. */
	export interface DeleteFileEntryFormProperties {
		filePath: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFileEntryFormGroup() {
		return new FormGroup<DeleteFileEntryFormProperties>({
			filePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the file mode changes. */
	export interface SetFileModeEntry {
		filePath: string;
		fileMode: FileModesSource;
	}

	/** Information about the file mode changes. */
	export interface SetFileModeEntryFormProperties {
		filePath: FormControl<string | null | undefined>,
		fileMode: FormControl<FileModesSource | null | undefined>,
	}
	export function CreateSetFileModeEntryFormGroup() {
		return new FormGroup<SetFileModeEntryFormProperties>({
			filePath: new FormControl<string | null | undefined>(undefined),
			fileMode: new FormControl<FileModesSource | null | undefined>(undefined),
		});

	}

	export interface ParentCommitIdRequiredException {
	}
	export interface ParentCommitIdRequiredExceptionFormProperties {
	}
	export function CreateParentCommitIdRequiredExceptionFormGroup() {
		return new FormGroup<ParentCommitIdRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidParentCommitIdException {
	}
	export interface InvalidParentCommitIdExceptionFormProperties {
	}
	export function CreateInvalidParentCommitIdExceptionFormGroup() {
		return new FormGroup<InvalidParentCommitIdExceptionFormProperties>({
		});

	}

	export interface ParentCommitDoesNotExistException {
	}
	export interface ParentCommitDoesNotExistExceptionFormProperties {
	}
	export function CreateParentCommitDoesNotExistExceptionFormGroup() {
		return new FormGroup<ParentCommitDoesNotExistExceptionFormProperties>({
		});

	}

	export interface ParentCommitIdOutdatedException {
	}
	export interface ParentCommitIdOutdatedExceptionFormProperties {
	}
	export function CreateParentCommitIdOutdatedExceptionFormGroup() {
		return new FormGroup<ParentCommitIdOutdatedExceptionFormProperties>({
		});

	}

	export interface BranchDoesNotExistException {
	}
	export interface BranchDoesNotExistExceptionFormProperties {
	}
	export function CreateBranchDoesNotExistExceptionFormGroup() {
		return new FormGroup<BranchDoesNotExistExceptionFormProperties>({
		});

	}

	export interface BranchNameIsTagNameException {
	}
	export interface BranchNameIsTagNameExceptionFormProperties {
	}
	export function CreateBranchNameIsTagNameExceptionFormGroup() {
		return new FormGroup<BranchNameIsTagNameExceptionFormProperties>({
		});

	}

	export interface FileEntryRequiredException {
	}
	export interface FileEntryRequiredExceptionFormProperties {
	}
	export function CreateFileEntryRequiredExceptionFormGroup() {
		return new FormGroup<FileEntryRequiredExceptionFormProperties>({
		});

	}

	export interface MaximumFileEntriesExceededException {
	}
	export interface MaximumFileEntriesExceededExceptionFormProperties {
	}
	export function CreateMaximumFileEntriesExceededExceptionFormGroup() {
		return new FormGroup<MaximumFileEntriesExceededExceptionFormProperties>({
		});

	}

	export interface PutFileEntryConflictException {
	}
	export interface PutFileEntryConflictExceptionFormProperties {
	}
	export function CreatePutFileEntryConflictExceptionFormGroup() {
		return new FormGroup<PutFileEntryConflictExceptionFormProperties>({
		});

	}

	export interface SourceFileOrContentRequiredException {
	}
	export interface SourceFileOrContentRequiredExceptionFormProperties {
	}
	export function CreateSourceFileOrContentRequiredExceptionFormGroup() {
		return new FormGroup<SourceFileOrContentRequiredExceptionFormProperties>({
		});

	}

	export interface FileContentAndSourceFileSpecifiedException {
	}
	export interface FileContentAndSourceFileSpecifiedExceptionFormProperties {
	}
	export function CreateFileContentAndSourceFileSpecifiedExceptionFormGroup() {
		return new FormGroup<FileContentAndSourceFileSpecifiedExceptionFormProperties>({
		});

	}

	export interface PathRequiredException {
	}
	export interface PathRequiredExceptionFormProperties {
	}
	export function CreatePathRequiredExceptionFormGroup() {
		return new FormGroup<PathRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidPathException {
	}
	export interface InvalidPathExceptionFormProperties {
	}
	export function CreateInvalidPathExceptionFormGroup() {
		return new FormGroup<InvalidPathExceptionFormProperties>({
		});

	}

	export interface SamePathRequestException {
	}
	export interface SamePathRequestExceptionFormProperties {
	}
	export function CreateSamePathRequestExceptionFormGroup() {
		return new FormGroup<SamePathRequestExceptionFormProperties>({
		});

	}

	export interface FileDoesNotExistException {
	}
	export interface FileDoesNotExistExceptionFormProperties {
	}
	export function CreateFileDoesNotExistExceptionFormGroup() {
		return new FormGroup<FileDoesNotExistExceptionFormProperties>({
		});

	}

	export interface FileContentSizeLimitExceededException {
	}
	export interface FileContentSizeLimitExceededExceptionFormProperties {
	}
	export function CreateFileContentSizeLimitExceededExceptionFormGroup() {
		return new FormGroup<FileContentSizeLimitExceededExceptionFormProperties>({
		});

	}

	export interface FolderContentSizeLimitExceededException {
	}
	export interface FolderContentSizeLimitExceededExceptionFormProperties {
	}
	export function CreateFolderContentSizeLimitExceededExceptionFormGroup() {
		return new FormGroup<FolderContentSizeLimitExceededExceptionFormProperties>({
		});

	}

	export interface InvalidDeletionParameterException {
	}
	export interface InvalidDeletionParameterExceptionFormProperties {
	}
	export function CreateInvalidDeletionParameterExceptionFormGroup() {
		return new FormGroup<InvalidDeletionParameterExceptionFormProperties>({
		});

	}

	export interface RestrictedSourceFileException {
	}
	export interface RestrictedSourceFileExceptionFormProperties {
	}
	export function CreateRestrictedSourceFileExceptionFormGroup() {
		return new FormGroup<RestrictedSourceFileExceptionFormProperties>({
		});

	}

	export interface FileModeRequiredException {
	}
	export interface FileModeRequiredExceptionFormProperties {
	}
	export function CreateFileModeRequiredExceptionFormGroup() {
		return new FormGroup<FileModeRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidFileModeException {
	}
	export interface InvalidFileModeExceptionFormProperties {
	}
	export function CreateInvalidFileModeExceptionFormGroup() {
		return new FormGroup<InvalidFileModeExceptionFormProperties>({
		});

	}

	export interface NameLengthExceededException {
	}
	export interface NameLengthExceededExceptionFormProperties {
	}
	export function CreateNameLengthExceededExceptionFormGroup() {
		return new FormGroup<NameLengthExceededExceptionFormProperties>({
		});

	}

	export interface InvalidEmailException {
	}
	export interface InvalidEmailExceptionFormProperties {
	}
	export function CreateInvalidEmailExceptionFormGroup() {
		return new FormGroup<InvalidEmailExceptionFormProperties>({
		});

	}

	export interface CommitMessageLengthExceededException {
	}
	export interface CommitMessageLengthExceededExceptionFormProperties {
	}
	export function CreateCommitMessageLengthExceededExceptionFormGroup() {
		return new FormGroup<CommitMessageLengthExceededExceptionFormProperties>({
		});

	}

	export interface NoChangeException {
	}
	export interface NoChangeExceptionFormProperties {
	}
	export function CreateNoChangeExceptionFormGroup() {
		return new FormGroup<NoChangeExceptionFormProperties>({
		});

	}

	export interface FileNameConflictsWithDirectoryNameException {
	}
	export interface FileNameConflictsWithDirectoryNameExceptionFormProperties {
	}
	export function CreateFileNameConflictsWithDirectoryNameExceptionFormGroup() {
		return new FormGroup<FileNameConflictsWithDirectoryNameExceptionFormProperties>({
		});

	}

	export interface DirectoryNameConflictsWithFileNameException {
	}
	export interface DirectoryNameConflictsWithFileNameExceptionFormProperties {
	}
	export function CreateDirectoryNameConflictsWithFileNameExceptionFormGroup() {
		return new FormGroup<DirectoryNameConflictsWithFileNameExceptionFormProperties>({
		});

	}

	export interface FilePathConflictsWithSubmodulePathException {
	}
	export interface FilePathConflictsWithSubmodulePathExceptionFormProperties {
	}
	export function CreateFilePathConflictsWithSubmodulePathExceptionFormGroup() {
		return new FormGroup<FilePathConflictsWithSubmodulePathExceptionFormProperties>({
		});

	}

	export interface CreatePullRequestOutput {

		/**
		 * Returns information about a pull request.
		 * Required
		 */
		pullRequest: PullRequest;
	}
	export interface CreatePullRequestOutputFormProperties {
	}
	export function CreateCreatePullRequestOutputFormGroup() {
		return new FormGroup<CreatePullRequestOutputFormProperties>({
		});

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
		pullRequestTargets?: Array<PullRequestTarget>;
		clientRequestToken?: string | null;
		revisionId?: string | null;
		approvalRules?: Array<ApprovalRule>;
	}

	/** Returns information about a pull request. */
	export interface PullRequestFormProperties {
		pullRequestId: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		lastActivityDate: FormControl<Date | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		pullRequestStatus: FormControl<PullRequestPullRequestStatus | null | undefined>,
		authorArn: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreatePullRequestFormGroup() {
		return new FormGroup<PullRequestFormProperties>({
			pullRequestId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastActivityDate: new FormControl<Date | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			pullRequestStatus: new FormControl<PullRequestPullRequestStatus | null | undefined>(undefined),
			authorArn: new FormControl<string | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

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
		mergeMetadata?: MergeMetadata;
	}

	/** Returns information about a pull request target. */
	export interface PullRequestTargetFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		sourceReference: FormControl<string | null | undefined>,
		destinationReference: FormControl<string | null | undefined>,
		destinationCommit: FormControl<string | null | undefined>,
		sourceCommit: FormControl<string | null | undefined>,
		mergeBase: FormControl<string | null | undefined>,
	}
	export function CreatePullRequestTargetFormGroup() {
		return new FormGroup<PullRequestTargetFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			sourceReference: new FormControl<string | null | undefined>(undefined),
			destinationReference: new FormControl<string | null | undefined>(undefined),
			destinationCommit: new FormControl<string | null | undefined>(undefined),
			sourceCommit: new FormControl<string | null | undefined>(undefined),
			mergeBase: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns information about a merge or potential merge between a source reference and a destination reference in a pull request. */
	export interface MergeMetadata {
		isMerged?: boolean | null;
		mergedBy?: string | null;
		mergeCommitId?: string | null;
		mergeOption?: BatchDescribeMergeConflictsInputMergeOption | null;
	}

	/** Returns information about a merge or potential merge between a source reference and a destination reference in a pull request. */
	export interface MergeMetadataFormProperties {
		isMerged: FormControl<boolean | null | undefined>,
		mergedBy: FormControl<string | null | undefined>,
		mergeCommitId: FormControl<string | null | undefined>,
		mergeOption: FormControl<BatchDescribeMergeConflictsInputMergeOption | null | undefined>,
	}
	export function CreateMergeMetadataFormGroup() {
		return new FormGroup<MergeMetadataFormProperties>({
			isMerged: new FormControl<boolean | null | undefined>(undefined),
			mergedBy: new FormControl<string | null | undefined>(undefined),
			mergeCommitId: new FormControl<string | null | undefined>(undefined),
			mergeOption: new FormControl<BatchDescribeMergeConflictsInputMergeOption | null | undefined>(undefined),
		});

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
		originApprovalRuleTemplate?: OriginApprovalRuleTemplate;
	}

	/** Returns information about an approval rule. */
	export interface ApprovalRuleFormProperties {
		approvalRuleId: FormControl<string | null | undefined>,
		approvalRuleName: FormControl<string | null | undefined>,
		approvalRuleContent: FormControl<string | null | undefined>,
		ruleContentSha256: FormControl<string | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedUser: FormControl<string | null | undefined>,
	}
	export function CreateApprovalRuleFormGroup() {
		return new FormGroup<ApprovalRuleFormProperties>({
			approvalRuleId: new FormControl<string | null | undefined>(undefined),
			approvalRuleName: new FormControl<string | null | undefined>(undefined),
			approvalRuleContent: new FormControl<string | null | undefined>(undefined),
			ruleContentSha256: new FormControl<string | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedUser: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns information about the template that created the approval rule for a pull request. */
	export interface OriginApprovalRuleTemplate {
		approvalRuleTemplateId?: string | null;
		approvalRuleTemplateName?: string | null;
	}

	/** Returns information about the template that created the approval rule for a pull request. */
	export interface OriginApprovalRuleTemplateFormProperties {
		approvalRuleTemplateId: FormControl<string | null | undefined>,
		approvalRuleTemplateName: FormControl<string | null | undefined>,
	}
	export function CreateOriginApprovalRuleTemplateFormGroup() {
		return new FormGroup<OriginApprovalRuleTemplateFormProperties>({
			approvalRuleTemplateId: new FormControl<string | null | undefined>(undefined),
			approvalRuleTemplateName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePullRequestInput {
		title: string;
		description?: string | null;
		targets: Array<Target>;
		clientRequestToken?: string | null;
	}
	export interface CreatePullRequestInputFormProperties {
		title: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreatePullRequestInputFormGroup() {
		return new FormGroup<CreatePullRequestInputFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns information about a target for a pull request. */
	export interface Target {
		repositoryName: string;
		sourceReference: string;
		destinationReference?: string | null;
	}

	/** Returns information about a target for a pull request. */
	export interface TargetFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		sourceReference: FormControl<string | null | undefined>,
		destinationReference: FormControl<string | null | undefined>,
	}
	export function CreateTargetFormGroup() {
		return new FormGroup<TargetFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			sourceReference: new FormControl<string | null | undefined>(undefined),
			destinationReference: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientRequestTokenRequiredException {
	}
	export interface ClientRequestTokenRequiredExceptionFormProperties {
	}
	export function CreateClientRequestTokenRequiredExceptionFormGroup() {
		return new FormGroup<ClientRequestTokenRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidClientRequestTokenException {
	}
	export interface InvalidClientRequestTokenExceptionFormProperties {
	}
	export function CreateInvalidClientRequestTokenExceptionFormGroup() {
		return new FormGroup<InvalidClientRequestTokenExceptionFormProperties>({
		});

	}

	export interface IdempotencyParameterMismatchException {
	}
	export interface IdempotencyParameterMismatchExceptionFormProperties {
	}
	export function CreateIdempotencyParameterMismatchExceptionFormGroup() {
		return new FormGroup<IdempotencyParameterMismatchExceptionFormProperties>({
		});

	}

	export interface ReferenceNameRequiredException {
	}
	export interface ReferenceNameRequiredExceptionFormProperties {
	}
	export function CreateReferenceNameRequiredExceptionFormGroup() {
		return new FormGroup<ReferenceNameRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidReferenceNameException {
	}
	export interface InvalidReferenceNameExceptionFormProperties {
	}
	export function CreateInvalidReferenceNameExceptionFormGroup() {
		return new FormGroup<InvalidReferenceNameExceptionFormProperties>({
		});

	}

	export interface ReferenceDoesNotExistException {
	}
	export interface ReferenceDoesNotExistExceptionFormProperties {
	}
	export function CreateReferenceDoesNotExistExceptionFormGroup() {
		return new FormGroup<ReferenceDoesNotExistExceptionFormProperties>({
		});

	}

	export interface ReferenceTypeNotSupportedException {
	}
	export interface ReferenceTypeNotSupportedExceptionFormProperties {
	}
	export function CreateReferenceTypeNotSupportedExceptionFormGroup() {
		return new FormGroup<ReferenceTypeNotSupportedExceptionFormProperties>({
		});

	}

	export interface TitleRequiredException {
	}
	export interface TitleRequiredExceptionFormProperties {
	}
	export function CreateTitleRequiredExceptionFormGroup() {
		return new FormGroup<TitleRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidTitleException {
	}
	export interface InvalidTitleExceptionFormProperties {
	}
	export function CreateInvalidTitleExceptionFormGroup() {
		return new FormGroup<InvalidTitleExceptionFormProperties>({
		});

	}

	export interface InvalidDescriptionException {
	}
	export interface InvalidDescriptionExceptionFormProperties {
	}
	export function CreateInvalidDescriptionExceptionFormGroup() {
		return new FormGroup<InvalidDescriptionExceptionFormProperties>({
		});

	}

	export interface TargetsRequiredException {
	}
	export interface TargetsRequiredExceptionFormProperties {
	}
	export function CreateTargetsRequiredExceptionFormGroup() {
		return new FormGroup<TargetsRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidTargetsException {
	}
	export interface InvalidTargetsExceptionFormProperties {
	}
	export function CreateInvalidTargetsExceptionFormGroup() {
		return new FormGroup<InvalidTargetsExceptionFormProperties>({
		});

	}

	export interface TargetRequiredException {
	}
	export interface TargetRequiredExceptionFormProperties {
	}
	export function CreateTargetRequiredExceptionFormGroup() {
		return new FormGroup<TargetRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidTargetException {
	}
	export interface InvalidTargetExceptionFormProperties {
	}
	export function CreateInvalidTargetExceptionFormGroup() {
		return new FormGroup<InvalidTargetExceptionFormProperties>({
		});

	}

	export interface MultipleRepositoriesInPullRequestException {
	}
	export interface MultipleRepositoriesInPullRequestExceptionFormProperties {
	}
	export function CreateMultipleRepositoriesInPullRequestExceptionFormGroup() {
		return new FormGroup<MultipleRepositoriesInPullRequestExceptionFormProperties>({
		});

	}

	export interface MaximumOpenPullRequestsExceededException {
	}
	export interface MaximumOpenPullRequestsExceededExceptionFormProperties {
	}
	export function CreateMaximumOpenPullRequestsExceededExceptionFormGroup() {
		return new FormGroup<MaximumOpenPullRequestsExceededExceptionFormProperties>({
		});

	}

	export interface SourceAndDestinationAreSameException {
	}
	export interface SourceAndDestinationAreSameExceptionFormProperties {
	}
	export function CreateSourceAndDestinationAreSameExceptionFormGroup() {
		return new FormGroup<SourceAndDestinationAreSameExceptionFormProperties>({
		});

	}

	export interface CreatePullRequestApprovalRuleOutput {

		/**
		 * Returns information about an approval rule.
		 * Required
		 */
		approvalRule: ApprovalRule;
	}
	export interface CreatePullRequestApprovalRuleOutputFormProperties {
	}
	export function CreateCreatePullRequestApprovalRuleOutputFormGroup() {
		return new FormGroup<CreatePullRequestApprovalRuleOutputFormProperties>({
		});

	}

	export interface CreatePullRequestApprovalRuleInput {
		pullRequestId: string;
		approvalRuleName: string;
		approvalRuleContent: string;
	}
	export interface CreatePullRequestApprovalRuleInputFormProperties {
		pullRequestId: FormControl<string | null | undefined>,
		approvalRuleName: FormControl<string | null | undefined>,
		approvalRuleContent: FormControl<string | null | undefined>,
	}
	export function CreateCreatePullRequestApprovalRuleInputFormGroup() {
		return new FormGroup<CreatePullRequestApprovalRuleInputFormProperties>({
			pullRequestId: new FormControl<string | null | undefined>(undefined),
			approvalRuleName: new FormControl<string | null | undefined>(undefined),
			approvalRuleContent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApprovalRuleNameRequiredException {
	}
	export interface ApprovalRuleNameRequiredExceptionFormProperties {
	}
	export function CreateApprovalRuleNameRequiredExceptionFormGroup() {
		return new FormGroup<ApprovalRuleNameRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidApprovalRuleNameException {
	}
	export interface InvalidApprovalRuleNameExceptionFormProperties {
	}
	export function CreateInvalidApprovalRuleNameExceptionFormGroup() {
		return new FormGroup<InvalidApprovalRuleNameExceptionFormProperties>({
		});

	}

	export interface ApprovalRuleNameAlreadyExistsException {
	}
	export interface ApprovalRuleNameAlreadyExistsExceptionFormProperties {
	}
	export function CreateApprovalRuleNameAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ApprovalRuleNameAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface ApprovalRuleContentRequiredException {
	}
	export interface ApprovalRuleContentRequiredExceptionFormProperties {
	}
	export function CreateApprovalRuleContentRequiredExceptionFormGroup() {
		return new FormGroup<ApprovalRuleContentRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidApprovalRuleContentException {
	}
	export interface InvalidApprovalRuleContentExceptionFormProperties {
	}
	export function CreateInvalidApprovalRuleContentExceptionFormGroup() {
		return new FormGroup<InvalidApprovalRuleContentExceptionFormProperties>({
		});

	}

	export interface NumberOfRulesExceededException {
	}
	export interface NumberOfRulesExceededExceptionFormProperties {
	}
	export function CreateNumberOfRulesExceededExceptionFormGroup() {
		return new FormGroup<NumberOfRulesExceededExceptionFormProperties>({
		});

	}

	export interface PullRequestDoesNotExistException {
	}
	export interface PullRequestDoesNotExistExceptionFormProperties {
	}
	export function CreatePullRequestDoesNotExistExceptionFormGroup() {
		return new FormGroup<PullRequestDoesNotExistExceptionFormProperties>({
		});

	}

	export interface InvalidPullRequestIdException {
	}
	export interface InvalidPullRequestIdExceptionFormProperties {
	}
	export function CreateInvalidPullRequestIdExceptionFormGroup() {
		return new FormGroup<InvalidPullRequestIdExceptionFormProperties>({
		});

	}

	export interface PullRequestIdRequiredException {
	}
	export interface PullRequestIdRequiredExceptionFormProperties {
	}
	export function CreatePullRequestIdRequiredExceptionFormGroup() {
		return new FormGroup<PullRequestIdRequiredExceptionFormProperties>({
		});

	}

	export interface PullRequestAlreadyClosedException {
	}
	export interface PullRequestAlreadyClosedExceptionFormProperties {
	}
	export function CreatePullRequestAlreadyClosedExceptionFormGroup() {
		return new FormGroup<PullRequestAlreadyClosedExceptionFormProperties>({
		});

	}


	/** Represents the output of a create repository operation. */
	export interface CreateRepositoryOutput {

		/** Information about a repository. */
		repositoryMetadata?: RepositoryMetadata;
	}

	/** Represents the output of a create repository operation. */
	export interface CreateRepositoryOutputFormProperties {
	}
	export function CreateCreateRepositoryOutputFormGroup() {
		return new FormGroup<CreateRepositoryOutputFormProperties>({
		});

	}


	/** Represents the input of a create repository operation. */
	export interface CreateRepositoryInput {
		repositoryName: string;
		repositoryDescription?: string | null;
		tags?: TagsMap;
	}

	/** Represents the input of a create repository operation. */
	export interface CreateRepositoryInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		repositoryDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateRepositoryInputFormGroup() {
		return new FormGroup<CreateRepositoryInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			repositoryDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagsMap {
	}
	export interface TagsMapFormProperties {
	}
	export function CreateTagsMapFormGroup() {
		return new FormGroup<TagsMapFormProperties>({
		});

	}

	export interface RepositoryNameExistsException {
	}
	export interface RepositoryNameExistsExceptionFormProperties {
	}
	export function CreateRepositoryNameExistsExceptionFormGroup() {
		return new FormGroup<RepositoryNameExistsExceptionFormProperties>({
		});

	}

	export interface InvalidRepositoryDescriptionException {
	}
	export interface InvalidRepositoryDescriptionExceptionFormProperties {
	}
	export function CreateInvalidRepositoryDescriptionExceptionFormGroup() {
		return new FormGroup<InvalidRepositoryDescriptionExceptionFormProperties>({
		});

	}

	export interface RepositoryLimitExceededException {
	}
	export interface RepositoryLimitExceededExceptionFormProperties {
	}
	export function CreateRepositoryLimitExceededExceptionFormGroup() {
		return new FormGroup<RepositoryLimitExceededExceptionFormProperties>({
		});

	}

	export interface InvalidTagsMapException {
	}
	export interface InvalidTagsMapExceptionFormProperties {
	}
	export function CreateInvalidTagsMapExceptionFormGroup() {
		return new FormGroup<InvalidTagsMapExceptionFormProperties>({
		});

	}

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
		});

	}

	export interface InvalidSystemTagUsageException {
	}
	export interface InvalidSystemTagUsageExceptionFormProperties {
	}
	export function CreateInvalidSystemTagUsageExceptionFormGroup() {
		return new FormGroup<InvalidSystemTagUsageExceptionFormProperties>({
		});

	}

	export interface TagPolicyException {
	}
	export interface TagPolicyExceptionFormProperties {
	}
	export function CreateTagPolicyExceptionFormGroup() {
		return new FormGroup<TagPolicyExceptionFormProperties>({
		});

	}

	export interface CreateUnreferencedMergeCommitOutput {
		commitId?: string | null;
		treeId?: string | null;
	}
	export interface CreateUnreferencedMergeCommitOutputFormProperties {
		commitId: FormControl<string | null | undefined>,
		treeId: FormControl<string | null | undefined>,
	}
	export function CreateCreateUnreferencedMergeCommitOutputFormGroup() {
		return new FormGroup<CreateUnreferencedMergeCommitOutputFormProperties>({
			commitId: new FormControl<string | null | undefined>(undefined),
			treeId: new FormControl<string | null | undefined>(undefined),
		});

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
		conflictResolution?: ConflictResolution;
	}
	export interface CreateUnreferencedMergeCommitInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		sourceCommitSpecifier: FormControl<string | null | undefined>,
		destinationCommitSpecifier: FormControl<string | null | undefined>,
		mergeOption: FormControl<BatchDescribeMergeConflictsInputMergeOption | null | undefined>,
		conflictDetailLevel: FormControl<BatchDescribeMergeConflictsInputConflictDetailLevel | null | undefined>,
		conflictResolutionStrategy: FormControl<BatchDescribeMergeConflictsInputConflictResolutionStrategy | null | undefined>,
		authorName: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		commitMessage: FormControl<string | null | undefined>,
		keepEmptyFolders: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateUnreferencedMergeCommitInputFormGroup() {
		return new FormGroup<CreateUnreferencedMergeCommitInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			sourceCommitSpecifier: new FormControl<string | null | undefined>(undefined),
			destinationCommitSpecifier: new FormControl<string | null | undefined>(undefined),
			mergeOption: new FormControl<BatchDescribeMergeConflictsInputMergeOption | null | undefined>(undefined),
			conflictDetailLevel: new FormControl<BatchDescribeMergeConflictsInputConflictDetailLevel | null | undefined>(undefined),
			conflictResolutionStrategy: new FormControl<BatchDescribeMergeConflictsInputConflictResolutionStrategy | null | undefined>(undefined),
			authorName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			commitMessage: new FormControl<string | null | undefined>(undefined),
			keepEmptyFolders: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge. */
	export interface ConflictResolution {
		replaceContents?: Array<ReplaceContentEntry>;
		deleteFiles?: Array<DeleteFileEntry>;
		setFileModes?: Array<SetFileModeEntry>;
	}

	/** If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge. */
	export interface ConflictResolutionFormProperties {
	}
	export function CreateConflictResolutionFormGroup() {
		return new FormGroup<ConflictResolutionFormProperties>({
		});

	}


	/** Information about a replacement content entry in the conflict of a merge or pull request operation. */
	export interface ReplaceContentEntry {
		filePath: string;
		replacementType: ReplaceContentEntryReplacementType;
		content?: string | null;
		fileMode?: FileModesSource | null;
	}

	/** Information about a replacement content entry in the conflict of a merge or pull request operation. */
	export interface ReplaceContentEntryFormProperties {
		filePath: FormControl<string | null | undefined>,
		replacementType: FormControl<ReplaceContentEntryReplacementType | null | undefined>,
		content: FormControl<string | null | undefined>,
		fileMode: FormControl<FileModesSource | null | undefined>,
	}
	export function CreateReplaceContentEntryFormGroup() {
		return new FormGroup<ReplaceContentEntryFormProperties>({
			filePath: new FormControl<string | null | undefined>(undefined),
			replacementType: new FormControl<ReplaceContentEntryReplacementType | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			fileMode: new FormControl<FileModesSource | null | undefined>(undefined),
		});

	}

	export enum ReplaceContentEntryReplacementType { KEEP_BASE = 0, KEEP_SOURCE = 1, KEEP_DESTINATION = 2, USE_NEW_CONTENT = 3 }

	export interface InvalidConflictResolutionException {
	}
	export interface InvalidConflictResolutionExceptionFormProperties {
	}
	export function CreateInvalidConflictResolutionExceptionFormGroup() {
		return new FormGroup<InvalidConflictResolutionExceptionFormProperties>({
		});

	}

	export interface ManualMergeRequiredException {
	}
	export interface ManualMergeRequiredExceptionFormProperties {
	}
	export function CreateManualMergeRequiredExceptionFormGroup() {
		return new FormGroup<ManualMergeRequiredExceptionFormProperties>({
		});

	}

	export interface MaximumConflictResolutionEntriesExceededException {
	}
	export interface MaximumConflictResolutionEntriesExceededExceptionFormProperties {
	}
	export function CreateMaximumConflictResolutionEntriesExceededExceptionFormGroup() {
		return new FormGroup<MaximumConflictResolutionEntriesExceededExceptionFormProperties>({
		});

	}

	export interface MultipleConflictResolutionEntriesException {
	}
	export interface MultipleConflictResolutionEntriesExceptionFormProperties {
	}
	export function CreateMultipleConflictResolutionEntriesExceptionFormGroup() {
		return new FormGroup<MultipleConflictResolutionEntriesExceptionFormProperties>({
		});

	}

	export interface ReplacementTypeRequiredException {
	}
	export interface ReplacementTypeRequiredExceptionFormProperties {
	}
	export function CreateReplacementTypeRequiredExceptionFormGroup() {
		return new FormGroup<ReplacementTypeRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidReplacementTypeException {
	}
	export interface InvalidReplacementTypeExceptionFormProperties {
	}
	export function CreateInvalidReplacementTypeExceptionFormGroup() {
		return new FormGroup<InvalidReplacementTypeExceptionFormProperties>({
		});

	}

	export interface ReplacementContentRequiredException {
	}
	export interface ReplacementContentRequiredExceptionFormProperties {
	}
	export function CreateReplacementContentRequiredExceptionFormGroup() {
		return new FormGroup<ReplacementContentRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidReplacementContentException {
	}
	export interface InvalidReplacementContentExceptionFormProperties {
	}
	export function CreateInvalidReplacementContentExceptionFormGroup() {
		return new FormGroup<InvalidReplacementContentExceptionFormProperties>({
		});

	}

	export interface ConcurrentReferenceUpdateException {
	}
	export interface ConcurrentReferenceUpdateExceptionFormProperties {
	}
	export function CreateConcurrentReferenceUpdateExceptionFormGroup() {
		return new FormGroup<ConcurrentReferenceUpdateExceptionFormProperties>({
		});

	}

	export interface DeleteApprovalRuleTemplateOutput {
		approvalRuleTemplateId: string;
	}
	export interface DeleteApprovalRuleTemplateOutputFormProperties {
		approvalRuleTemplateId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteApprovalRuleTemplateOutputFormGroup() {
		return new FormGroup<DeleteApprovalRuleTemplateOutputFormProperties>({
			approvalRuleTemplateId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteApprovalRuleTemplateInput {
		approvalRuleTemplateName: string;
	}
	export interface DeleteApprovalRuleTemplateInputFormProperties {
		approvalRuleTemplateName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteApprovalRuleTemplateInputFormGroup() {
		return new FormGroup<DeleteApprovalRuleTemplateInputFormProperties>({
			approvalRuleTemplateName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApprovalRuleTemplateInUseException {
	}
	export interface ApprovalRuleTemplateInUseExceptionFormProperties {
	}
	export function CreateApprovalRuleTemplateInUseExceptionFormGroup() {
		return new FormGroup<ApprovalRuleTemplateInUseExceptionFormProperties>({
		});

	}


	/** Represents the output of a delete branch operation. */
	export interface DeleteBranchOutput {

		/** Returns information about a branch. */
		deletedBranch?: BranchInfo;
	}

	/** Represents the output of a delete branch operation. */
	export interface DeleteBranchOutputFormProperties {
	}
	export function CreateDeleteBranchOutputFormGroup() {
		return new FormGroup<DeleteBranchOutputFormProperties>({
		});

	}


	/** Returns information about a branch. */
	export interface BranchInfo {
		branchName?: string | null;
		commitId?: string | null;
	}

	/** Returns information about a branch. */
	export interface BranchInfoFormProperties {
		branchName: FormControl<string | null | undefined>,
		commitId: FormControl<string | null | undefined>,
	}
	export function CreateBranchInfoFormGroup() {
		return new FormGroup<BranchInfoFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined),
			commitId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a delete branch operation. */
	export interface DeleteBranchInput {
		repositoryName: string;
		branchName: string;
	}

	/** Represents the input of a delete branch operation. */
	export interface DeleteBranchInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		branchName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBranchInputFormGroup() {
		return new FormGroup<DeleteBranchInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			branchName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DefaultBranchCannotBeDeletedException {
	}
	export interface DefaultBranchCannotBeDeletedExceptionFormProperties {
	}
	export function CreateDefaultBranchCannotBeDeletedExceptionFormGroup() {
		return new FormGroup<DefaultBranchCannotBeDeletedExceptionFormProperties>({
		});

	}

	export interface DeleteCommentContentOutput {

		/** Returns information about a specific comment. */
		comment?: Comment;
	}
	export interface DeleteCommentContentOutputFormProperties {
	}
	export function CreateDeleteCommentContentOutputFormGroup() {
		return new FormGroup<DeleteCommentContentOutputFormProperties>({
		});

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

	/** Returns information about a specific comment. */
	export interface CommentFormProperties {
		commentId: FormControl<string | null | undefined>,
		content: FormControl<string | null | undefined>,
		inReplyTo: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
		authorArn: FormControl<string | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
			commentId: new FormControl<string | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			inReplyTo: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			authorArn: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteCommentContentInput {
		commentId: string;
	}
	export interface DeleteCommentContentInputFormProperties {
		commentId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCommentContentInputFormGroup() {
		return new FormGroup<DeleteCommentContentInputFormProperties>({
			commentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentDoesNotExistException {
	}
	export interface CommentDoesNotExistExceptionFormProperties {
	}
	export function CreateCommentDoesNotExistExceptionFormGroup() {
		return new FormGroup<CommentDoesNotExistExceptionFormProperties>({
		});

	}

	export interface CommentIdRequiredException {
	}
	export interface CommentIdRequiredExceptionFormProperties {
	}
	export function CreateCommentIdRequiredExceptionFormGroup() {
		return new FormGroup<CommentIdRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidCommentIdException {
	}
	export interface InvalidCommentIdExceptionFormProperties {
	}
	export function CreateInvalidCommentIdExceptionFormGroup() {
		return new FormGroup<InvalidCommentIdExceptionFormProperties>({
		});

	}

	export interface CommentDeletedException {
	}
	export interface CommentDeletedExceptionFormProperties {
	}
	export function CreateCommentDeletedExceptionFormGroup() {
		return new FormGroup<CommentDeletedExceptionFormProperties>({
		});

	}

	export interface DeleteFileOutput {
		commitId: string;
		blobId: string;
		treeId: string;
		filePath: string;
	}
	export interface DeleteFileOutputFormProperties {
		commitId: FormControl<string | null | undefined>,
		blobId: FormControl<string | null | undefined>,
		treeId: FormControl<string | null | undefined>,
		filePath: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFileOutputFormGroup() {
		return new FormGroup<DeleteFileOutputFormProperties>({
			commitId: new FormControl<string | null | undefined>(undefined),
			blobId: new FormControl<string | null | undefined>(undefined),
			treeId: new FormControl<string | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface DeleteFileInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		branchName: FormControl<string | null | undefined>,
		filePath: FormControl<string | null | undefined>,
		parentCommitId: FormControl<string | null | undefined>,
		keepEmptyFolders: FormControl<boolean | null | undefined>,
		commitMessage: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFileInputFormGroup() {
		return new FormGroup<DeleteFileInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			branchName: new FormControl<string | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined),
			parentCommitId: new FormControl<string | null | undefined>(undefined),
			keepEmptyFolders: new FormControl<boolean | null | undefined>(undefined),
			commitMessage: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletePullRequestApprovalRuleOutput {
		approvalRuleId: string;
	}
	export interface DeletePullRequestApprovalRuleOutputFormProperties {
		approvalRuleId: FormControl<string | null | undefined>,
	}
	export function CreateDeletePullRequestApprovalRuleOutputFormGroup() {
		return new FormGroup<DeletePullRequestApprovalRuleOutputFormProperties>({
			approvalRuleId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletePullRequestApprovalRuleInput {
		pullRequestId: string;
		approvalRuleName: string;
	}
	export interface DeletePullRequestApprovalRuleInputFormProperties {
		pullRequestId: FormControl<string | null | undefined>,
		approvalRuleName: FormControl<string | null | undefined>,
	}
	export function CreateDeletePullRequestApprovalRuleInputFormGroup() {
		return new FormGroup<DeletePullRequestApprovalRuleInputFormProperties>({
			pullRequestId: new FormControl<string | null | undefined>(undefined),
			approvalRuleName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CannotDeleteApprovalRuleFromTemplateException {
	}
	export interface CannotDeleteApprovalRuleFromTemplateExceptionFormProperties {
	}
	export function CreateCannotDeleteApprovalRuleFromTemplateExceptionFormGroup() {
		return new FormGroup<CannotDeleteApprovalRuleFromTemplateExceptionFormProperties>({
		});

	}


	/** Represents the output of a delete repository operation. */
	export interface DeleteRepositoryOutput {
		repositoryId?: string | null;
	}

	/** Represents the output of a delete repository operation. */
	export interface DeleteRepositoryOutputFormProperties {
		repositoryId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRepositoryOutputFormGroup() {
		return new FormGroup<DeleteRepositoryOutputFormProperties>({
			repositoryId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a delete repository operation. */
	export interface DeleteRepositoryInput {
		repositoryName: string;
	}

	/** Represents the input of a delete repository operation. */
	export interface DeleteRepositoryInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRepositoryInputFormGroup() {
		return new FormGroup<DeleteRepositoryInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface DescribeMergeConflictsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
		destinationCommitId: FormControl<string | null | undefined>,
		sourceCommitId: FormControl<string | null | undefined>,
		baseCommitId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMergeConflictsOutputFormGroup() {
		return new FormGroup<DescribeMergeConflictsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			destinationCommitId: new FormControl<string | null | undefined>(undefined),
			sourceCommitId: new FormControl<string | null | undefined>(undefined),
			baseCommitId: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface DescribeMergeConflictsInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		destinationCommitSpecifier: FormControl<string | null | undefined>,
		sourceCommitSpecifier: FormControl<string | null | undefined>,
		mergeOption: FormControl<BatchDescribeMergeConflictsInputMergeOption | null | undefined>,
		maxMergeHunks: FormControl<number | null | undefined>,
		filePath: FormControl<string | null | undefined>,
		conflictDetailLevel: FormControl<BatchDescribeMergeConflictsInputConflictDetailLevel | null | undefined>,
		conflictResolutionStrategy: FormControl<BatchDescribeMergeConflictsInputConflictResolutionStrategy | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMergeConflictsInputFormGroup() {
		return new FormGroup<DescribeMergeConflictsInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			destinationCommitSpecifier: new FormControl<string | null | undefined>(undefined),
			sourceCommitSpecifier: new FormControl<string | null | undefined>(undefined),
			mergeOption: new FormControl<BatchDescribeMergeConflictsInputMergeOption | null | undefined>(undefined),
			maxMergeHunks: new FormControl<number | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined),
			conflictDetailLevel: new FormControl<BatchDescribeMergeConflictsInputConflictDetailLevel | null | undefined>(undefined),
			conflictResolutionStrategy: new FormControl<BatchDescribeMergeConflictsInputConflictResolutionStrategy | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePullRequestEventsOutput {
		pullRequestEvents: Array<PullRequestEvent>;
		nextToken?: string | null;
	}
	export interface DescribePullRequestEventsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribePullRequestEventsOutputFormGroup() {
		return new FormGroup<DescribePullRequestEventsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns information about a pull request event. */
	export interface PullRequestEvent {
		pullRequestId?: string | null;
		eventDate?: Date | null;
		pullRequestEventType?: PullRequestEventPullRequestEventType | null;
		actorArn?: string | null;

		/** Metadata about the pull request that is used when comparing the pull request source with its destination. */
		pullRequestCreatedEventMetadata?: PullRequestCreatedEventMetadata;

		/** Information about a change to the status of a pull request. */
		pullRequestStatusChangedEventMetadata?: PullRequestStatusChangedEventMetadata;

		/** Information about an update to the source branch of a pull request. */
		pullRequestSourceReferenceUpdatedEventMetadata?: PullRequestSourceReferenceUpdatedEventMetadata;

		/** Returns information about the change in the merge state for a pull request event. */
		pullRequestMergedStateChangedEventMetadata?: PullRequestMergedStateChangedEventMetadata;

		/** Returns information about an event for an approval rule. */
		approvalRuleEventMetadata?: ApprovalRuleEventMetadata;

		/** Returns information about a change in the approval state for a pull request. */
		approvalStateChangedEventMetadata?: ApprovalStateChangedEventMetadata;

		/** Returns information about an override event for approval rules for a pull request. */
		approvalRuleOverriddenEventMetadata?: ApprovalRuleOverriddenEventMetadata;
	}

	/** Returns information about a pull request event. */
	export interface PullRequestEventFormProperties {
		pullRequestId: FormControl<string | null | undefined>,
		eventDate: FormControl<Date | null | undefined>,
		pullRequestEventType: FormControl<PullRequestEventPullRequestEventType | null | undefined>,
		actorArn: FormControl<string | null | undefined>,
	}
	export function CreatePullRequestEventFormGroup() {
		return new FormGroup<PullRequestEventFormProperties>({
			pullRequestId: new FormControl<string | null | undefined>(undefined),
			eventDate: new FormControl<Date | null | undefined>(undefined),
			pullRequestEventType: new FormControl<PullRequestEventPullRequestEventType | null | undefined>(undefined),
			actorArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PullRequestEventPullRequestEventType { PULL_REQUEST_CREATED = 0, PULL_REQUEST_STATUS_CHANGED = 1, PULL_REQUEST_SOURCE_REFERENCE_UPDATED = 2, PULL_REQUEST_MERGE_STATE_CHANGED = 3, PULL_REQUEST_APPROVAL_RULE_CREATED = 4, PULL_REQUEST_APPROVAL_RULE_UPDATED = 5, PULL_REQUEST_APPROVAL_RULE_DELETED = 6, PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN = 7, PULL_REQUEST_APPROVAL_STATE_CHANGED = 8 }


	/** Metadata about the pull request that is used when comparing the pull request source with its destination. */
	export interface PullRequestCreatedEventMetadata {
		repositoryName?: string | null;
		sourceCommitId?: string | null;
		destinationCommitId?: string | null;
		mergeBase?: string | null;
	}

	/** Metadata about the pull request that is used when comparing the pull request source with its destination. */
	export interface PullRequestCreatedEventMetadataFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		sourceCommitId: FormControl<string | null | undefined>,
		destinationCommitId: FormControl<string | null | undefined>,
		mergeBase: FormControl<string | null | undefined>,
	}
	export function CreatePullRequestCreatedEventMetadataFormGroup() {
		return new FormGroup<PullRequestCreatedEventMetadataFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			sourceCommitId: new FormControl<string | null | undefined>(undefined),
			destinationCommitId: new FormControl<string | null | undefined>(undefined),
			mergeBase: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a change to the status of a pull request. */
	export interface PullRequestStatusChangedEventMetadata {
		pullRequestStatus?: PullRequestPullRequestStatus | null;
	}

	/** Information about a change to the status of a pull request. */
	export interface PullRequestStatusChangedEventMetadataFormProperties {
		pullRequestStatus: FormControl<PullRequestPullRequestStatus | null | undefined>,
	}
	export function CreatePullRequestStatusChangedEventMetadataFormGroup() {
		return new FormGroup<PullRequestStatusChangedEventMetadataFormProperties>({
			pullRequestStatus: new FormControl<PullRequestPullRequestStatus | null | undefined>(undefined),
		});

	}


	/** Information about an update to the source branch of a pull request. */
	export interface PullRequestSourceReferenceUpdatedEventMetadata {
		repositoryName?: string | null;
		beforeCommitId?: string | null;
		afterCommitId?: string | null;
		mergeBase?: string | null;
	}

	/** Information about an update to the source branch of a pull request. */
	export interface PullRequestSourceReferenceUpdatedEventMetadataFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		beforeCommitId: FormControl<string | null | undefined>,
		afterCommitId: FormControl<string | null | undefined>,
		mergeBase: FormControl<string | null | undefined>,
	}
	export function CreatePullRequestSourceReferenceUpdatedEventMetadataFormGroup() {
		return new FormGroup<PullRequestSourceReferenceUpdatedEventMetadataFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			beforeCommitId: new FormControl<string | null | undefined>(undefined),
			afterCommitId: new FormControl<string | null | undefined>(undefined),
			mergeBase: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns information about the change in the merge state for a pull request event.  */
	export interface PullRequestMergedStateChangedEventMetadata {
		repositoryName?: string | null;
		destinationReference?: string | null;

		/** Returns information about a merge or potential merge between a source reference and a destination reference in a pull request. */
		mergeMetadata?: MergeMetadata;
	}

	/** Returns information about the change in the merge state for a pull request event.  */
	export interface PullRequestMergedStateChangedEventMetadataFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		destinationReference: FormControl<string | null | undefined>,
	}
	export function CreatePullRequestMergedStateChangedEventMetadataFormGroup() {
		return new FormGroup<PullRequestMergedStateChangedEventMetadataFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			destinationReference: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns information about an event for an approval rule. */
	export interface ApprovalRuleEventMetadata {
		approvalRuleName?: string | null;
		approvalRuleId?: string | null;
		approvalRuleContent?: string | null;
	}

	/** Returns information about an event for an approval rule. */
	export interface ApprovalRuleEventMetadataFormProperties {
		approvalRuleName: FormControl<string | null | undefined>,
		approvalRuleId: FormControl<string | null | undefined>,
		approvalRuleContent: FormControl<string | null | undefined>,
	}
	export function CreateApprovalRuleEventMetadataFormGroup() {
		return new FormGroup<ApprovalRuleEventMetadataFormProperties>({
			approvalRuleName: new FormControl<string | null | undefined>(undefined),
			approvalRuleId: new FormControl<string | null | undefined>(undefined),
			approvalRuleContent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns information about a change in the approval state for a pull request. */
	export interface ApprovalStateChangedEventMetadata {
		revisionId?: string | null;
		approvalStatus?: ApprovalStateChangedEventMetadataApprovalStatus | null;
	}

	/** Returns information about a change in the approval state for a pull request. */
	export interface ApprovalStateChangedEventMetadataFormProperties {
		revisionId: FormControl<string | null | undefined>,
		approvalStatus: FormControl<ApprovalStateChangedEventMetadataApprovalStatus | null | undefined>,
	}
	export function CreateApprovalStateChangedEventMetadataFormGroup() {
		return new FormGroup<ApprovalStateChangedEventMetadataFormProperties>({
			revisionId: new FormControl<string | null | undefined>(undefined),
			approvalStatus: new FormControl<ApprovalStateChangedEventMetadataApprovalStatus | null | undefined>(undefined),
		});

	}

	export enum ApprovalStateChangedEventMetadataApprovalStatus { APPROVE = 0, REVOKE = 1 }


	/** Returns information about an override event for approval rules for a pull request. */
	export interface ApprovalRuleOverriddenEventMetadata {
		revisionId?: string | null;
		overrideStatus?: ApprovalRuleOverriddenEventMetadataOverrideStatus | null;
	}

	/** Returns information about an override event for approval rules for a pull request. */
	export interface ApprovalRuleOverriddenEventMetadataFormProperties {
		revisionId: FormControl<string | null | undefined>,
		overrideStatus: FormControl<ApprovalRuleOverriddenEventMetadataOverrideStatus | null | undefined>,
	}
	export function CreateApprovalRuleOverriddenEventMetadataFormGroup() {
		return new FormGroup<ApprovalRuleOverriddenEventMetadataFormProperties>({
			revisionId: new FormControl<string | null | undefined>(undefined),
			overrideStatus: new FormControl<ApprovalRuleOverriddenEventMetadataOverrideStatus | null | undefined>(undefined),
		});

	}

	export enum ApprovalRuleOverriddenEventMetadataOverrideStatus { OVERRIDE = 0, REVOKE = 1 }

	export interface DescribePullRequestEventsInput {
		pullRequestId: string;
		pullRequestEventType?: PullRequestEventPullRequestEventType | null;
		actorArn?: string | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface DescribePullRequestEventsInputFormProperties {
		pullRequestId: FormControl<string | null | undefined>,
		pullRequestEventType: FormControl<PullRequestEventPullRequestEventType | null | undefined>,
		actorArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribePullRequestEventsInputFormGroup() {
		return new FormGroup<DescribePullRequestEventsInputFormProperties>({
			pullRequestId: new FormControl<string | null | undefined>(undefined),
			pullRequestEventType: new FormControl<PullRequestEventPullRequestEventType | null | undefined>(undefined),
			actorArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvalidPullRequestEventTypeException {
	}
	export interface InvalidPullRequestEventTypeExceptionFormProperties {
	}
	export function CreateInvalidPullRequestEventTypeExceptionFormGroup() {
		return new FormGroup<InvalidPullRequestEventTypeExceptionFormProperties>({
		});

	}

	export interface InvalidActorArnException {
	}
	export interface InvalidActorArnExceptionFormProperties {
	}
	export function CreateInvalidActorArnExceptionFormGroup() {
		return new FormGroup<InvalidActorArnExceptionFormProperties>({
		});

	}

	export interface ActorDoesNotExistException {
	}
	export interface ActorDoesNotExistExceptionFormProperties {
	}
	export function CreateActorDoesNotExistExceptionFormGroup() {
		return new FormGroup<ActorDoesNotExistExceptionFormProperties>({
		});

	}

	export interface InvalidMaxResultsException {
	}
	export interface InvalidMaxResultsExceptionFormProperties {
	}
	export function CreateInvalidMaxResultsExceptionFormGroup() {
		return new FormGroup<InvalidMaxResultsExceptionFormProperties>({
		});

	}

	export interface DisassociateApprovalRuleTemplateFromRepositoryInput {
		approvalRuleTemplateName: string;
		repositoryName: string;
	}
	export interface DisassociateApprovalRuleTemplateFromRepositoryInputFormProperties {
		approvalRuleTemplateName: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateApprovalRuleTemplateFromRepositoryInputFormGroup() {
		return new FormGroup<DisassociateApprovalRuleTemplateFromRepositoryInputFormProperties>({
			approvalRuleTemplateName: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EvaluatePullRequestApprovalRulesOutput {

		/**
		 * Returns information about the approval rules applied to a pull request and whether conditions have been met.
		 * Required
		 */
		evaluation: Evaluation;
	}
	export interface EvaluatePullRequestApprovalRulesOutputFormProperties {
	}
	export function CreateEvaluatePullRequestApprovalRulesOutputFormGroup() {
		return new FormGroup<EvaluatePullRequestApprovalRulesOutputFormProperties>({
		});

	}


	/** Returns information about the approval rules applied to a pull request and whether conditions have been met. */
	export interface Evaluation {
		approved?: boolean | null;
		overridden?: boolean | null;
		approvalRulesSatisfied?: Array<string>;
		approvalRulesNotSatisfied?: Array<string>;
	}

	/** Returns information about the approval rules applied to a pull request and whether conditions have been met. */
	export interface EvaluationFormProperties {
		approved: FormControl<boolean | null | undefined>,
		overridden: FormControl<boolean | null | undefined>,
	}
	export function CreateEvaluationFormGroup() {
		return new FormGroup<EvaluationFormProperties>({
			approved: new FormControl<boolean | null | undefined>(undefined),
			overridden: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EvaluatePullRequestApprovalRulesInput {
		pullRequestId: string;
		revisionId: string;
	}
	export interface EvaluatePullRequestApprovalRulesInputFormProperties {
		pullRequestId: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateEvaluatePullRequestApprovalRulesInputFormGroup() {
		return new FormGroup<EvaluatePullRequestApprovalRulesInputFormProperties>({
			pullRequestId: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidRevisionIdException {
	}
	export interface InvalidRevisionIdExceptionFormProperties {
	}
	export function CreateInvalidRevisionIdExceptionFormGroup() {
		return new FormGroup<InvalidRevisionIdExceptionFormProperties>({
		});

	}

	export interface RevisionIdRequiredException {
	}
	export interface RevisionIdRequiredExceptionFormProperties {
	}
	export function CreateRevisionIdRequiredExceptionFormGroup() {
		return new FormGroup<RevisionIdRequiredExceptionFormProperties>({
		});

	}

	export interface RevisionNotCurrentException {
	}
	export interface RevisionNotCurrentExceptionFormProperties {
	}
	export function CreateRevisionNotCurrentExceptionFormGroup() {
		return new FormGroup<RevisionNotCurrentExceptionFormProperties>({
		});

	}

	export interface GetApprovalRuleTemplateOutput {

		/**
		 * Returns information about an approval rule template.
		 * Required
		 */
		approvalRuleTemplate: ApprovalRuleTemplate;
	}
	export interface GetApprovalRuleTemplateOutputFormProperties {
	}
	export function CreateGetApprovalRuleTemplateOutputFormGroup() {
		return new FormGroup<GetApprovalRuleTemplateOutputFormProperties>({
		});

	}

	export interface GetApprovalRuleTemplateInput {
		approvalRuleTemplateName: string;
	}
	export interface GetApprovalRuleTemplateInputFormProperties {
		approvalRuleTemplateName: FormControl<string | null | undefined>,
	}
	export function CreateGetApprovalRuleTemplateInputFormGroup() {
		return new FormGroup<GetApprovalRuleTemplateInputFormProperties>({
			approvalRuleTemplateName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a get blob operation. */
	export interface GetBlobOutput {
		content: string;
	}

	/** Represents the output of a get blob operation. */
	export interface GetBlobOutputFormProperties {
		content: FormControl<string | null | undefined>,
	}
	export function CreateGetBlobOutputFormGroup() {
		return new FormGroup<GetBlobOutputFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a get blob operation. */
	export interface GetBlobInput {
		repositoryName: string;
		blobId: string;
	}

	/** Represents the input of a get blob operation. */
	export interface GetBlobInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		blobId: FormControl<string | null | undefined>,
	}
	export function CreateGetBlobInputFormGroup() {
		return new FormGroup<GetBlobInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			blobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BlobIdRequiredException {
	}
	export interface BlobIdRequiredExceptionFormProperties {
	}
	export function CreateBlobIdRequiredExceptionFormGroup() {
		return new FormGroup<BlobIdRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidBlobIdException {
	}
	export interface InvalidBlobIdExceptionFormProperties {
	}
	export function CreateInvalidBlobIdExceptionFormGroup() {
		return new FormGroup<InvalidBlobIdExceptionFormProperties>({
		});

	}

	export interface BlobIdDoesNotExistException {
	}
	export interface BlobIdDoesNotExistExceptionFormProperties {
	}
	export function CreateBlobIdDoesNotExistExceptionFormGroup() {
		return new FormGroup<BlobIdDoesNotExistExceptionFormProperties>({
		});

	}

	export interface FileTooLargeException {
	}
	export interface FileTooLargeExceptionFormProperties {
	}
	export function CreateFileTooLargeExceptionFormGroup() {
		return new FormGroup<FileTooLargeExceptionFormProperties>({
		});

	}


	/** Represents the output of a get branch operation. */
	export interface GetBranchOutput {

		/** Returns information about a branch. */
		branch?: BranchInfo;
	}

	/** Represents the output of a get branch operation. */
	export interface GetBranchOutputFormProperties {
	}
	export function CreateGetBranchOutputFormGroup() {
		return new FormGroup<GetBranchOutputFormProperties>({
		});

	}


	/** Represents the input of a get branch operation. */
	export interface GetBranchInput {
		repositoryName?: string | null;
		branchName?: string | null;
	}

	/** Represents the input of a get branch operation. */
	export interface GetBranchInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		branchName: FormControl<string | null | undefined>,
	}
	export function CreateGetBranchInputFormGroup() {
		return new FormGroup<GetBranchInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			branchName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCommentOutput {

		/** Returns information about a specific comment. */
		comment?: Comment;
	}
	export interface GetCommentOutputFormProperties {
	}
	export function CreateGetCommentOutputFormGroup() {
		return new FormGroup<GetCommentOutputFormProperties>({
		});

	}

	export interface GetCommentInput {
		commentId: string;
	}
	export interface GetCommentInputFormProperties {
		commentId: FormControl<string | null | undefined>,
	}
	export function CreateGetCommentInputFormGroup() {
		return new FormGroup<GetCommentInputFormProperties>({
			commentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCommentsForComparedCommitOutput {
		commentsForComparedCommitData?: Array<CommentsForComparedCommit>;
		nextToken?: string | null;
	}
	export interface GetCommentsForComparedCommitOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCommentsForComparedCommitOutputFormGroup() {
		return new FormGroup<GetCommentsForComparedCommitOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns information about comments on the comparison between two commits. */
	export interface CommentsForComparedCommit {
		repositoryName?: string | null;
		beforeCommitId?: string | null;
		afterCommitId?: string | null;
		beforeBlobId?: string | null;
		afterBlobId?: string | null;

		/** Returns information about the location of a change or comment in the comparison between two commits or a pull request. */
		location?: Location;
		comments?: Array<Comment>;
	}

	/** Returns information about comments on the comparison between two commits. */
	export interface CommentsForComparedCommitFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		beforeCommitId: FormControl<string | null | undefined>,
		afterCommitId: FormControl<string | null | undefined>,
		beforeBlobId: FormControl<string | null | undefined>,
		afterBlobId: FormControl<string | null | undefined>,
	}
	export function CreateCommentsForComparedCommitFormGroup() {
		return new FormGroup<CommentsForComparedCommitFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			beforeCommitId: new FormControl<string | null | undefined>(undefined),
			afterCommitId: new FormControl<string | null | undefined>(undefined),
			beforeBlobId: new FormControl<string | null | undefined>(undefined),
			afterBlobId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns information about the location of a change or comment in the comparison between two commits or a pull request. */
	export interface Location {
		filePath?: string | null;
		filePosition?: number | null;
		relativeFileVersion?: LocationRelativeFileVersion | null;
	}

	/** Returns information about the location of a change or comment in the comparison between two commits or a pull request. */
	export interface LocationFormProperties {
		filePath: FormControl<string | null | undefined>,
		filePosition: FormControl<number | null | undefined>,
		relativeFileVersion: FormControl<LocationRelativeFileVersion | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			filePath: new FormControl<string | null | undefined>(undefined),
			filePosition: new FormControl<number | null | undefined>(undefined),
			relativeFileVersion: new FormControl<LocationRelativeFileVersion | null | undefined>(undefined),
		});

	}

	export enum LocationRelativeFileVersion { BEFORE = 0, AFTER = 1 }

	export interface GetCommentsForComparedCommitInput {
		repositoryName: string;
		beforeCommitId?: string | null;
		afterCommitId: string;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface GetCommentsForComparedCommitInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		beforeCommitId: FormControl<string | null | undefined>,
		afterCommitId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetCommentsForComparedCommitInputFormGroup() {
		return new FormGroup<GetCommentsForComparedCommitInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			beforeCommitId: new FormControl<string | null | undefined>(undefined),
			afterCommitId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetCommentsForPullRequestOutput {
		commentsForPullRequestData?: Array<CommentsForPullRequest>;
		nextToken?: string | null;
	}
	export interface GetCommentsForPullRequestOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCommentsForPullRequestOutputFormGroup() {
		return new FormGroup<GetCommentsForPullRequestOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

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
		location?: Location;
		comments?: Array<Comment>;
	}

	/** Returns information about comments on a pull request. */
	export interface CommentsForPullRequestFormProperties {
		pullRequestId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		beforeCommitId: FormControl<string | null | undefined>,
		afterCommitId: FormControl<string | null | undefined>,
		beforeBlobId: FormControl<string | null | undefined>,
		afterBlobId: FormControl<string | null | undefined>,
	}
	export function CreateCommentsForPullRequestFormGroup() {
		return new FormGroup<CommentsForPullRequestFormProperties>({
			pullRequestId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			beforeCommitId: new FormControl<string | null | undefined>(undefined),
			afterCommitId: new FormControl<string | null | undefined>(undefined),
			beforeBlobId: new FormControl<string | null | undefined>(undefined),
			afterBlobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCommentsForPullRequestInput {
		pullRequestId: string;
		repositoryName?: string | null;
		beforeCommitId?: string | null;
		afterCommitId?: string | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface GetCommentsForPullRequestInputFormProperties {
		pullRequestId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		beforeCommitId: FormControl<string | null | undefined>,
		afterCommitId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetCommentsForPullRequestInputFormGroup() {
		return new FormGroup<GetCommentsForPullRequestInputFormProperties>({
			pullRequestId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			beforeCommitId: new FormControl<string | null | undefined>(undefined),
			afterCommitId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RepositoryNotAssociatedWithPullRequestException {
	}
	export interface RepositoryNotAssociatedWithPullRequestExceptionFormProperties {
	}
	export function CreateRepositoryNotAssociatedWithPullRequestExceptionFormGroup() {
		return new FormGroup<RepositoryNotAssociatedWithPullRequestExceptionFormProperties>({
		});

	}


	/** Represents the output of a get commit operation. */
	export interface GetCommitOutput {

		/**
		 * Returns information about a specific commit.
		 * Required
		 */
		commit: Commit;
	}

	/** Represents the output of a get commit operation. */
	export interface GetCommitOutputFormProperties {
	}
	export function CreateGetCommitOutputFormGroup() {
		return new FormGroup<GetCommitOutputFormProperties>({
		});

	}


	/** Represents the input of a get commit operation. */
	export interface GetCommitInput {
		repositoryName: string;
		commitId: string;
	}

	/** Represents the input of a get commit operation. */
	export interface GetCommitInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		commitId: FormControl<string | null | undefined>,
	}
	export function CreateGetCommitInputFormGroup() {
		return new FormGroup<GetCommitInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			commitId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommitIdDoesNotExistException {
	}
	export interface CommitIdDoesNotExistExceptionFormProperties {
	}
	export function CreateCommitIdDoesNotExistExceptionFormGroup() {
		return new FormGroup<CommitIdDoesNotExistExceptionFormProperties>({
		});

	}

	export interface GetDifferencesOutput {
		differences?: Array<Difference>;
		NextToken?: string | null;
	}
	export interface GetDifferencesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDifferencesOutputFormGroup() {
		return new FormGroup<GetDifferencesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns information about a set of differences for a commit specifier. */
	export interface Difference {

		/** Returns information about a specific Git blob object. */
		beforeBlob?: BlobMetadata;

		/** Returns information about a specific Git blob object. */
		afterBlob?: BlobMetadata;
		changeType?: MergeOperationsSource | null;
	}

	/** Returns information about a set of differences for a commit specifier. */
	export interface DifferenceFormProperties {
		changeType: FormControl<MergeOperationsSource | null | undefined>,
	}
	export function CreateDifferenceFormGroup() {
		return new FormGroup<DifferenceFormProperties>({
			changeType: new FormControl<MergeOperationsSource | null | undefined>(undefined),
		});

	}


	/** Returns information about a specific Git blob object. */
	export interface BlobMetadata {
		blobId?: string | null;
		path?: string | null;
		mode?: string | null;
	}

	/** Returns information about a specific Git blob object. */
	export interface BlobMetadataFormProperties {
		blobId: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
		mode: FormControl<string | null | undefined>,
	}
	export function CreateBlobMetadataFormGroup() {
		return new FormGroup<BlobMetadataFormProperties>({
			blobId: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface GetDifferencesInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		beforeCommitSpecifier: FormControl<string | null | undefined>,
		afterCommitSpecifier: FormControl<string | null | undefined>,
		beforePath: FormControl<string | null | undefined>,
		afterPath: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDifferencesInputFormGroup() {
		return new FormGroup<GetDifferencesInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			beforeCommitSpecifier: new FormControl<string | null | undefined>(undefined),
			afterCommitSpecifier: new FormControl<string | null | undefined>(undefined),
			beforePath: new FormControl<string | null | undefined>(undefined),
			afterPath: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PathDoesNotExistException {
	}
	export interface PathDoesNotExistExceptionFormProperties {
	}
	export function CreatePathDoesNotExistExceptionFormGroup() {
		return new FormGroup<PathDoesNotExistExceptionFormProperties>({
		});

	}

	export interface GetFileOutput {
		commitId: string;
		blobId: string;
		filePath: string;
		fileMode: FileModesSource;
		fileSize: number;
		fileContent: string;
	}
	export interface GetFileOutputFormProperties {
		commitId: FormControl<string | null | undefined>,
		blobId: FormControl<string | null | undefined>,
		filePath: FormControl<string | null | undefined>,
		fileMode: FormControl<FileModesSource | null | undefined>,
		fileSize: FormControl<number | null | undefined>,
		fileContent: FormControl<string | null | undefined>,
	}
	export function CreateGetFileOutputFormGroup() {
		return new FormGroup<GetFileOutputFormProperties>({
			commitId: new FormControl<string | null | undefined>(undefined),
			blobId: new FormControl<string | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined),
			fileMode: new FormControl<FileModesSource | null | undefined>(undefined),
			fileSize: new FormControl<number | null | undefined>(undefined),
			fileContent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFileInput {
		repositoryName: string;
		commitSpecifier?: string | null;
		filePath: string;
	}
	export interface GetFileInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		commitSpecifier: FormControl<string | null | undefined>,
		filePath: FormControl<string | null | undefined>,
	}
	export function CreateGetFileInputFormGroup() {
		return new FormGroup<GetFileInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			commitSpecifier: new FormControl<string | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFolderOutput {
		commitId: string;
		folderPath: string;
		treeId?: string | null;
		subFolders?: Array<Folder>;
		files?: Array<File>;
		symbolicLinks?: Array<SymbolicLink>;
		subModules?: Array<SubModule>;
	}
	export interface GetFolderOutputFormProperties {
		commitId: FormControl<string | null | undefined>,
		folderPath: FormControl<string | null | undefined>,
		treeId: FormControl<string | null | undefined>,
	}
	export function CreateGetFolderOutputFormGroup() {
		return new FormGroup<GetFolderOutputFormProperties>({
			commitId: new FormControl<string | null | undefined>(undefined),
			folderPath: new FormControl<string | null | undefined>(undefined),
			treeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns information about a folder in a repository. */
	export interface Folder {
		treeId?: string | null;
		absolutePath?: string | null;
		relativePath?: string | null;
	}

	/** Returns information about a folder in a repository. */
	export interface FolderFormProperties {
		treeId: FormControl<string | null | undefined>,
		absolutePath: FormControl<string | null | undefined>,
		relativePath: FormControl<string | null | undefined>,
	}
	export function CreateFolderFormGroup() {
		return new FormGroup<FolderFormProperties>({
			treeId: new FormControl<string | null | undefined>(undefined),
			absolutePath: new FormControl<string | null | undefined>(undefined),
			relativePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns information about a file in a repository. */
	export interface File {
		blobId?: string | null;
		absolutePath?: string | null;
		relativePath?: string | null;
		fileMode?: FileModesSource | null;
	}

	/** Returns information about a file in a repository. */
	export interface FileFormProperties {
		blobId: FormControl<string | null | undefined>,
		absolutePath: FormControl<string | null | undefined>,
		relativePath: FormControl<string | null | undefined>,
		fileMode: FormControl<FileModesSource | null | undefined>,
	}
	export function CreateFileFormGroup() {
		return new FormGroup<FileFormProperties>({
			blobId: new FormControl<string | null | undefined>(undefined),
			absolutePath: new FormControl<string | null | undefined>(undefined),
			relativePath: new FormControl<string | null | undefined>(undefined),
			fileMode: new FormControl<FileModesSource | null | undefined>(undefined),
		});

	}


	/** Returns information about a symbolic link in a repository folder. */
	export interface SymbolicLink {
		blobId?: string | null;
		absolutePath?: string | null;
		relativePath?: string | null;
		fileMode?: FileModesSource | null;
	}

	/** Returns information about a symbolic link in a repository folder. */
	export interface SymbolicLinkFormProperties {
		blobId: FormControl<string | null | undefined>,
		absolutePath: FormControl<string | null | undefined>,
		relativePath: FormControl<string | null | undefined>,
		fileMode: FormControl<FileModesSource | null | undefined>,
	}
	export function CreateSymbolicLinkFormGroup() {
		return new FormGroup<SymbolicLinkFormProperties>({
			blobId: new FormControl<string | null | undefined>(undefined),
			absolutePath: new FormControl<string | null | undefined>(undefined),
			relativePath: new FormControl<string | null | undefined>(undefined),
			fileMode: new FormControl<FileModesSource | null | undefined>(undefined),
		});

	}


	/** Returns information about a submodule reference in a repository folder. */
	export interface SubModule {
		commitId?: string | null;
		absolutePath?: string | null;
		relativePath?: string | null;
	}

	/** Returns information about a submodule reference in a repository folder. */
	export interface SubModuleFormProperties {
		commitId: FormControl<string | null | undefined>,
		absolutePath: FormControl<string | null | undefined>,
		relativePath: FormControl<string | null | undefined>,
	}
	export function CreateSubModuleFormGroup() {
		return new FormGroup<SubModuleFormProperties>({
			commitId: new FormControl<string | null | undefined>(undefined),
			absolutePath: new FormControl<string | null | undefined>(undefined),
			relativePath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFolderInput {
		repositoryName: string;
		commitSpecifier?: string | null;
		folderPath: string;
	}
	export interface GetFolderInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		commitSpecifier: FormControl<string | null | undefined>,
		folderPath: FormControl<string | null | undefined>,
	}
	export function CreateGetFolderInputFormGroup() {
		return new FormGroup<GetFolderInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			commitSpecifier: new FormControl<string | null | undefined>(undefined),
			folderPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FolderDoesNotExistException {
	}
	export interface FolderDoesNotExistExceptionFormProperties {
	}
	export function CreateFolderDoesNotExistExceptionFormGroup() {
		return new FormGroup<FolderDoesNotExistExceptionFormProperties>({
		});

	}

	export interface GetMergeCommitOutput {
		sourceCommitId?: string | null;
		destinationCommitId?: string | null;
		baseCommitId?: string | null;
		mergedCommitId?: string | null;
	}
	export interface GetMergeCommitOutputFormProperties {
		sourceCommitId: FormControl<string | null | undefined>,
		destinationCommitId: FormControl<string | null | undefined>,
		baseCommitId: FormControl<string | null | undefined>,
		mergedCommitId: FormControl<string | null | undefined>,
	}
	export function CreateGetMergeCommitOutputFormGroup() {
		return new FormGroup<GetMergeCommitOutputFormProperties>({
			sourceCommitId: new FormControl<string | null | undefined>(undefined),
			destinationCommitId: new FormControl<string | null | undefined>(undefined),
			baseCommitId: new FormControl<string | null | undefined>(undefined),
			mergedCommitId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMergeCommitInput {
		repositoryName: string;
		sourceCommitSpecifier: string;
		destinationCommitSpecifier: string;
		conflictDetailLevel?: BatchDescribeMergeConflictsInputConflictDetailLevel | null;
		conflictResolutionStrategy?: BatchDescribeMergeConflictsInputConflictResolutionStrategy | null;
	}
	export interface GetMergeCommitInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		sourceCommitSpecifier: FormControl<string | null | undefined>,
		destinationCommitSpecifier: FormControl<string | null | undefined>,
		conflictDetailLevel: FormControl<BatchDescribeMergeConflictsInputConflictDetailLevel | null | undefined>,
		conflictResolutionStrategy: FormControl<BatchDescribeMergeConflictsInputConflictResolutionStrategy | null | undefined>,
	}
	export function CreateGetMergeCommitInputFormGroup() {
		return new FormGroup<GetMergeCommitInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			sourceCommitSpecifier: new FormControl<string | null | undefined>(undefined),
			destinationCommitSpecifier: new FormControl<string | null | undefined>(undefined),
			conflictDetailLevel: new FormControl<BatchDescribeMergeConflictsInputConflictDetailLevel | null | undefined>(undefined),
			conflictResolutionStrategy: new FormControl<BatchDescribeMergeConflictsInputConflictResolutionStrategy | null | undefined>(undefined),
		});

	}

	export interface GetMergeConflictsOutput {
		mergeable: boolean;
		destinationCommitId: string;
		sourceCommitId: string;
		baseCommitId?: string | null;
		conflictMetadataList: Array<ConflictMetadata>;
		nextToken?: string | null;
	}
	export interface GetMergeConflictsOutputFormProperties {
		mergeable: FormControl<boolean | null | undefined>,
		destinationCommitId: FormControl<string | null | undefined>,
		sourceCommitId: FormControl<string | null | undefined>,
		baseCommitId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetMergeConflictsOutputFormGroup() {
		return new FormGroup<GetMergeConflictsOutputFormProperties>({
			mergeable: new FormControl<boolean | null | undefined>(undefined),
			destinationCommitId: new FormControl<string | null | undefined>(undefined),
			sourceCommitId: new FormControl<string | null | undefined>(undefined),
			baseCommitId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface GetMergeConflictsInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		destinationCommitSpecifier: FormControl<string | null | undefined>,
		sourceCommitSpecifier: FormControl<string | null | undefined>,
		mergeOption: FormControl<BatchDescribeMergeConflictsInputMergeOption | null | undefined>,
		conflictDetailLevel: FormControl<BatchDescribeMergeConflictsInputConflictDetailLevel | null | undefined>,
		maxConflictFiles: FormControl<number | null | undefined>,
		conflictResolutionStrategy: FormControl<BatchDescribeMergeConflictsInputConflictResolutionStrategy | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetMergeConflictsInputFormGroup() {
		return new FormGroup<GetMergeConflictsInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			destinationCommitSpecifier: new FormControl<string | null | undefined>(undefined),
			sourceCommitSpecifier: new FormControl<string | null | undefined>(undefined),
			mergeOption: new FormControl<BatchDescribeMergeConflictsInputMergeOption | null | undefined>(undefined),
			conflictDetailLevel: new FormControl<BatchDescribeMergeConflictsInputConflictDetailLevel | null | undefined>(undefined),
			maxConflictFiles: new FormControl<number | null | undefined>(undefined),
			conflictResolutionStrategy: new FormControl<BatchDescribeMergeConflictsInputConflictResolutionStrategy | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidDestinationCommitSpecifierException {
	}
	export interface InvalidDestinationCommitSpecifierExceptionFormProperties {
	}
	export function CreateInvalidDestinationCommitSpecifierExceptionFormGroup() {
		return new FormGroup<InvalidDestinationCommitSpecifierExceptionFormProperties>({
		});

	}

	export interface InvalidSourceCommitSpecifierException {
	}
	export interface InvalidSourceCommitSpecifierExceptionFormProperties {
	}
	export function CreateInvalidSourceCommitSpecifierExceptionFormGroup() {
		return new FormGroup<InvalidSourceCommitSpecifierExceptionFormProperties>({
		});

	}

	export interface GetMergeOptionsOutput {
		mergeOptions: Array<MergeOptionTypeEnum>;
		sourceCommitId: string;
		destinationCommitId: string;
		baseCommitId: string;
	}
	export interface GetMergeOptionsOutputFormProperties {
		sourceCommitId: FormControl<string | null | undefined>,
		destinationCommitId: FormControl<string | null | undefined>,
		baseCommitId: FormControl<string | null | undefined>,
	}
	export function CreateGetMergeOptionsOutputFormGroup() {
		return new FormGroup<GetMergeOptionsOutputFormProperties>({
			sourceCommitId: new FormControl<string | null | undefined>(undefined),
			destinationCommitId: new FormControl<string | null | undefined>(undefined),
			baseCommitId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MergeOptionTypeEnum { FAST_FORWARD_MERGE = 0, SQUASH_MERGE = 1, THREE_WAY_MERGE = 2 }

	export interface GetMergeOptionsInput {
		repositoryName: string;
		sourceCommitSpecifier: string;
		destinationCommitSpecifier: string;
		conflictDetailLevel?: BatchDescribeMergeConflictsInputConflictDetailLevel | null;
		conflictResolutionStrategy?: BatchDescribeMergeConflictsInputConflictResolutionStrategy | null;
	}
	export interface GetMergeOptionsInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		sourceCommitSpecifier: FormControl<string | null | undefined>,
		destinationCommitSpecifier: FormControl<string | null | undefined>,
		conflictDetailLevel: FormControl<BatchDescribeMergeConflictsInputConflictDetailLevel | null | undefined>,
		conflictResolutionStrategy: FormControl<BatchDescribeMergeConflictsInputConflictResolutionStrategy | null | undefined>,
	}
	export function CreateGetMergeOptionsInputFormGroup() {
		return new FormGroup<GetMergeOptionsInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			sourceCommitSpecifier: new FormControl<string | null | undefined>(undefined),
			destinationCommitSpecifier: new FormControl<string | null | undefined>(undefined),
			conflictDetailLevel: new FormControl<BatchDescribeMergeConflictsInputConflictDetailLevel | null | undefined>(undefined),
			conflictResolutionStrategy: new FormControl<BatchDescribeMergeConflictsInputConflictResolutionStrategy | null | undefined>(undefined),
		});

	}

	export interface GetPullRequestOutput {

		/**
		 * Returns information about a pull request.
		 * Required
		 */
		pullRequest: PullRequest;
	}
	export interface GetPullRequestOutputFormProperties {
	}
	export function CreateGetPullRequestOutputFormGroup() {
		return new FormGroup<GetPullRequestOutputFormProperties>({
		});

	}

	export interface GetPullRequestInput {
		pullRequestId: string;
	}
	export interface GetPullRequestInputFormProperties {
		pullRequestId: FormControl<string | null | undefined>,
	}
	export function CreateGetPullRequestInputFormGroup() {
		return new FormGroup<GetPullRequestInputFormProperties>({
			pullRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPullRequestApprovalStatesOutput {
		approvals?: Array<Approval>;
	}
	export interface GetPullRequestApprovalStatesOutputFormProperties {
	}
	export function CreateGetPullRequestApprovalStatesOutputFormGroup() {
		return new FormGroup<GetPullRequestApprovalStatesOutputFormProperties>({
		});

	}


	/** Returns information about a specific approval on a pull request. */
	export interface Approval {
		userArn?: string | null;
		approvalState?: ApprovalStateChangedEventMetadataApprovalStatus | null;
	}

	/** Returns information about a specific approval on a pull request. */
	export interface ApprovalFormProperties {
		userArn: FormControl<string | null | undefined>,
		approvalState: FormControl<ApprovalStateChangedEventMetadataApprovalStatus | null | undefined>,
	}
	export function CreateApprovalFormGroup() {
		return new FormGroup<ApprovalFormProperties>({
			userArn: new FormControl<string | null | undefined>(undefined),
			approvalState: new FormControl<ApprovalStateChangedEventMetadataApprovalStatus | null | undefined>(undefined),
		});

	}

	export interface GetPullRequestApprovalStatesInput {
		pullRequestId: string;
		revisionId: string;
	}
	export interface GetPullRequestApprovalStatesInputFormProperties {
		pullRequestId: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateGetPullRequestApprovalStatesInputFormGroup() {
		return new FormGroup<GetPullRequestApprovalStatesInputFormProperties>({
			pullRequestId: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPullRequestOverrideStateOutput {
		overridden?: boolean | null;
		overrider?: string | null;
	}
	export interface GetPullRequestOverrideStateOutputFormProperties {
		overridden: FormControl<boolean | null | undefined>,
		overrider: FormControl<string | null | undefined>,
	}
	export function CreateGetPullRequestOverrideStateOutputFormGroup() {
		return new FormGroup<GetPullRequestOverrideStateOutputFormProperties>({
			overridden: new FormControl<boolean | null | undefined>(undefined),
			overrider: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPullRequestOverrideStateInput {
		pullRequestId: string;
		revisionId: string;
	}
	export interface GetPullRequestOverrideStateInputFormProperties {
		pullRequestId: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateGetPullRequestOverrideStateInputFormGroup() {
		return new FormGroup<GetPullRequestOverrideStateInputFormProperties>({
			pullRequestId: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a get repository operation. */
	export interface GetRepositoryOutput {

		/** Information about a repository. */
		repositoryMetadata?: RepositoryMetadata;
	}

	/** Represents the output of a get repository operation. */
	export interface GetRepositoryOutputFormProperties {
	}
	export function CreateGetRepositoryOutputFormGroup() {
		return new FormGroup<GetRepositoryOutputFormProperties>({
		});

	}


	/** Represents the input of a get repository operation. */
	export interface GetRepositoryInput {
		repositoryName: string;
	}

	/** Represents the input of a get repository operation. */
	export interface GetRepositoryInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateGetRepositoryInputFormGroup() {
		return new FormGroup<GetRepositoryInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a get repository triggers operation. */
	export interface GetRepositoryTriggersOutput {
		configurationId?: string | null;
		triggers?: Array<RepositoryTrigger>;
	}

	/** Represents the output of a get repository triggers operation. */
	export interface GetRepositoryTriggersOutputFormProperties {
		configurationId: FormControl<string | null | undefined>,
	}
	export function CreateGetRepositoryTriggersOutputFormGroup() {
		return new FormGroup<GetRepositoryTriggersOutputFormProperties>({
			configurationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a trigger for a repository. */
	export interface RepositoryTrigger {
		name: string;
		destinationArn: string;
		customData?: string | null;
		branches?: Array<string>;
		events: Array<RepositoryTriggerEventEnum>;
	}

	/** Information about a trigger for a repository. */
	export interface RepositoryTriggerFormProperties {
		name: FormControl<string | null | undefined>,
		destinationArn: FormControl<string | null | undefined>,
		customData: FormControl<string | null | undefined>,
	}
	export function CreateRepositoryTriggerFormGroup() {
		return new FormGroup<RepositoryTriggerFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			destinationArn: new FormControl<string | null | undefined>(undefined),
			customData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RepositoryTriggerEventEnum { all = 0, updateReference = 1, createReference = 2, deleteReference = 3 }


	/** Represents the input of a get repository triggers operation. */
	export interface GetRepositoryTriggersInput {
		repositoryName: string;
	}

	/** Represents the input of a get repository triggers operation. */
	export interface GetRepositoryTriggersInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateGetRepositoryTriggersInputFormGroup() {
		return new FormGroup<GetRepositoryTriggersInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListApprovalRuleTemplatesOutput {
		approvalRuleTemplateNames?: Array<string>;
		nextToken?: string | null;
	}
	export interface ListApprovalRuleTemplatesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApprovalRuleTemplatesOutputFormGroup() {
		return new FormGroup<ListApprovalRuleTemplatesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListApprovalRuleTemplatesInput {
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface ListApprovalRuleTemplatesInputFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListApprovalRuleTemplatesInputFormGroup() {
		return new FormGroup<ListApprovalRuleTemplatesInputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListAssociatedApprovalRuleTemplatesForRepositoryOutput {
		approvalRuleTemplateNames?: Array<string>;
		nextToken?: string | null;
	}
	export interface ListAssociatedApprovalRuleTemplatesForRepositoryOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociatedApprovalRuleTemplatesForRepositoryOutputFormGroup() {
		return new FormGroup<ListAssociatedApprovalRuleTemplatesForRepositoryOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssociatedApprovalRuleTemplatesForRepositoryInput {
		repositoryName: string;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface ListAssociatedApprovalRuleTemplatesForRepositoryInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAssociatedApprovalRuleTemplatesForRepositoryInputFormGroup() {
		return new FormGroup<ListAssociatedApprovalRuleTemplatesForRepositoryInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the output of a list branches operation. */
	export interface ListBranchesOutput {
		branches?: Array<string>;
		nextToken?: string | null;
	}

	/** Represents the output of a list branches operation. */
	export interface ListBranchesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBranchesOutputFormGroup() {
		return new FormGroup<ListBranchesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a list branches operation. */
	export interface ListBranchesInput {
		repositoryName: string;
		nextToken?: string | null;
	}

	/** Represents the input of a list branches operation. */
	export interface ListBranchesInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBranchesInputFormGroup() {
		return new FormGroup<ListBranchesInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPullRequestsOutput {
		pullRequestIds: Array<string>;
		nextToken?: string | null;
	}
	export interface ListPullRequestsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPullRequestsOutputFormGroup() {
		return new FormGroup<ListPullRequestsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPullRequestsInput {
		repositoryName: string;
		authorArn?: string | null;
		pullRequestStatus?: PullRequestPullRequestStatus | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface ListPullRequestsInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		authorArn: FormControl<string | null | undefined>,
		pullRequestStatus: FormControl<PullRequestPullRequestStatus | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPullRequestsInputFormGroup() {
		return new FormGroup<ListPullRequestsInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			authorArn: new FormControl<string | null | undefined>(undefined),
			pullRequestStatus: new FormControl<PullRequestPullRequestStatus | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvalidPullRequestStatusException {
	}
	export interface InvalidPullRequestStatusExceptionFormProperties {
	}
	export function CreateInvalidPullRequestStatusExceptionFormGroup() {
		return new FormGroup<InvalidPullRequestStatusExceptionFormProperties>({
		});

	}

	export interface InvalidAuthorArnException {
	}
	export interface InvalidAuthorArnExceptionFormProperties {
	}
	export function CreateInvalidAuthorArnExceptionFormGroup() {
		return new FormGroup<InvalidAuthorArnExceptionFormProperties>({
		});

	}

	export interface AuthorDoesNotExistException {
	}
	export interface AuthorDoesNotExistExceptionFormProperties {
	}
	export function CreateAuthorDoesNotExistExceptionFormGroup() {
		return new FormGroup<AuthorDoesNotExistExceptionFormProperties>({
		});

	}


	/** Represents the output of a list repositories operation. */
	export interface ListRepositoriesOutput {
		repositories?: Array<RepositoryNameIdPair>;
		nextToken?: string | null;
	}

	/** Represents the output of a list repositories operation. */
	export interface ListRepositoriesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRepositoriesOutputFormGroup() {
		return new FormGroup<ListRepositoriesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a repository name and ID. */
	export interface RepositoryNameIdPair {
		repositoryName?: string | null;
		repositoryId?: string | null;
	}

	/** Information about a repository name and ID. */
	export interface RepositoryNameIdPairFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		repositoryId: FormControl<string | null | undefined>,
	}
	export function CreateRepositoryNameIdPairFormGroup() {
		return new FormGroup<RepositoryNameIdPairFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			repositoryId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a list repositories operation. */
	export interface ListRepositoriesInput {
		nextToken?: string | null;
		sortBy?: ListRepositoriesInputSortBy | null;
		order?: ListRepositoriesInputOrder | null;
	}

	/** Represents the input of a list repositories operation. */
	export interface ListRepositoriesInputFormProperties {
		nextToken: FormControl<string | null | undefined>,
		sortBy: FormControl<ListRepositoriesInputSortBy | null | undefined>,
		order: FormControl<ListRepositoriesInputOrder | null | undefined>,
	}
	export function CreateListRepositoriesInputFormGroup() {
		return new FormGroup<ListRepositoriesInputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			sortBy: new FormControl<ListRepositoriesInputSortBy | null | undefined>(undefined),
			order: new FormControl<ListRepositoriesInputOrder | null | undefined>(undefined),
		});

	}

	export enum ListRepositoriesInputSortBy { repositoryName = 0, lastModifiedDate = 1 }

	export enum ListRepositoriesInputOrder { ascending = 0, descending = 1 }

	export interface InvalidSortByException {
	}
	export interface InvalidSortByExceptionFormProperties {
	}
	export function CreateInvalidSortByExceptionFormGroup() {
		return new FormGroup<InvalidSortByExceptionFormProperties>({
		});

	}

	export interface InvalidOrderException {
	}
	export interface InvalidOrderExceptionFormProperties {
	}
	export function CreateInvalidOrderExceptionFormGroup() {
		return new FormGroup<InvalidOrderExceptionFormProperties>({
		});

	}

	export interface ListRepositoriesForApprovalRuleTemplateOutput {
		repositoryNames?: Array<string>;
		nextToken?: string | null;
	}
	export interface ListRepositoriesForApprovalRuleTemplateOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRepositoriesForApprovalRuleTemplateOutputFormGroup() {
		return new FormGroup<ListRepositoriesForApprovalRuleTemplateOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRepositoriesForApprovalRuleTemplateInput {
		approvalRuleTemplateName: string;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface ListRepositoriesForApprovalRuleTemplateInputFormProperties {
		approvalRuleTemplateName: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRepositoriesForApprovalRuleTemplateInputFormGroup() {
		return new FormGroup<ListRepositoriesForApprovalRuleTemplateInputFormProperties>({
			approvalRuleTemplateName: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceOutput {
		tags?: TagsMap;
		nextToken?: string | null;
	}
	export interface ListTagsForResourceOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceInput {
		resourceArn: string;
		nextToken?: string | null;
	}
	export interface ListTagsForResourceInputFormProperties {
		resourceArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceArnRequiredException {
	}
	export interface ResourceArnRequiredExceptionFormProperties {
	}
	export function CreateResourceArnRequiredExceptionFormGroup() {
		return new FormGroup<ResourceArnRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidResourceArnException {
	}
	export interface InvalidResourceArnExceptionFormProperties {
	}
	export function CreateInvalidResourceArnExceptionFormGroup() {
		return new FormGroup<InvalidResourceArnExceptionFormProperties>({
		});

	}

	export interface MergeBranchesByFastForwardOutput {
		commitId?: string | null;
		treeId?: string | null;
	}
	export interface MergeBranchesByFastForwardOutputFormProperties {
		commitId: FormControl<string | null | undefined>,
		treeId: FormControl<string | null | undefined>,
	}
	export function CreateMergeBranchesByFastForwardOutputFormGroup() {
		return new FormGroup<MergeBranchesByFastForwardOutputFormProperties>({
			commitId: new FormControl<string | null | undefined>(undefined),
			treeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MergeBranchesByFastForwardInput {
		repositoryName: string;
		sourceCommitSpecifier: string;
		destinationCommitSpecifier: string;
		targetBranch?: string | null;
	}
	export interface MergeBranchesByFastForwardInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		sourceCommitSpecifier: FormControl<string | null | undefined>,
		destinationCommitSpecifier: FormControl<string | null | undefined>,
		targetBranch: FormControl<string | null | undefined>,
	}
	export function CreateMergeBranchesByFastForwardInputFormGroup() {
		return new FormGroup<MergeBranchesByFastForwardInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			sourceCommitSpecifier: new FormControl<string | null | undefined>(undefined),
			destinationCommitSpecifier: new FormControl<string | null | undefined>(undefined),
			targetBranch: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidTargetBranchException {
	}
	export interface InvalidTargetBranchExceptionFormProperties {
	}
	export function CreateInvalidTargetBranchExceptionFormGroup() {
		return new FormGroup<InvalidTargetBranchExceptionFormProperties>({
		});

	}

	export interface MergeBranchesBySquashOutput {
		commitId?: string | null;
		treeId?: string | null;
	}
	export interface MergeBranchesBySquashOutputFormProperties {
		commitId: FormControl<string | null | undefined>,
		treeId: FormControl<string | null | undefined>,
	}
	export function CreateMergeBranchesBySquashOutputFormGroup() {
		return new FormGroup<MergeBranchesBySquashOutputFormProperties>({
			commitId: new FormControl<string | null | undefined>(undefined),
			treeId: new FormControl<string | null | undefined>(undefined),
		});

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
		conflictResolution?: ConflictResolution;
	}
	export interface MergeBranchesBySquashInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		sourceCommitSpecifier: FormControl<string | null | undefined>,
		destinationCommitSpecifier: FormControl<string | null | undefined>,
		targetBranch: FormControl<string | null | undefined>,
		conflictDetailLevel: FormControl<BatchDescribeMergeConflictsInputConflictDetailLevel | null | undefined>,
		conflictResolutionStrategy: FormControl<BatchDescribeMergeConflictsInputConflictResolutionStrategy | null | undefined>,
		authorName: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		commitMessage: FormControl<string | null | undefined>,
		keepEmptyFolders: FormControl<boolean | null | undefined>,
	}
	export function CreateMergeBranchesBySquashInputFormGroup() {
		return new FormGroup<MergeBranchesBySquashInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			sourceCommitSpecifier: new FormControl<string | null | undefined>(undefined),
			destinationCommitSpecifier: new FormControl<string | null | undefined>(undefined),
			targetBranch: new FormControl<string | null | undefined>(undefined),
			conflictDetailLevel: new FormControl<BatchDescribeMergeConflictsInputConflictDetailLevel | null | undefined>(undefined),
			conflictResolutionStrategy: new FormControl<BatchDescribeMergeConflictsInputConflictResolutionStrategy | null | undefined>(undefined),
			authorName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			commitMessage: new FormControl<string | null | undefined>(undefined),
			keepEmptyFolders: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MergeBranchesByThreeWayOutput {
		commitId?: string | null;
		treeId?: string | null;
	}
	export interface MergeBranchesByThreeWayOutputFormProperties {
		commitId: FormControl<string | null | undefined>,
		treeId: FormControl<string | null | undefined>,
	}
	export function CreateMergeBranchesByThreeWayOutputFormGroup() {
		return new FormGroup<MergeBranchesByThreeWayOutputFormProperties>({
			commitId: new FormControl<string | null | undefined>(undefined),
			treeId: new FormControl<string | null | undefined>(undefined),
		});

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
		conflictResolution?: ConflictResolution;
	}
	export interface MergeBranchesByThreeWayInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		sourceCommitSpecifier: FormControl<string | null | undefined>,
		destinationCommitSpecifier: FormControl<string | null | undefined>,
		targetBranch: FormControl<string | null | undefined>,
		conflictDetailLevel: FormControl<BatchDescribeMergeConflictsInputConflictDetailLevel | null | undefined>,
		conflictResolutionStrategy: FormControl<BatchDescribeMergeConflictsInputConflictResolutionStrategy | null | undefined>,
		authorName: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		commitMessage: FormControl<string | null | undefined>,
		keepEmptyFolders: FormControl<boolean | null | undefined>,
	}
	export function CreateMergeBranchesByThreeWayInputFormGroup() {
		return new FormGroup<MergeBranchesByThreeWayInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			sourceCommitSpecifier: new FormControl<string | null | undefined>(undefined),
			destinationCommitSpecifier: new FormControl<string | null | undefined>(undefined),
			targetBranch: new FormControl<string | null | undefined>(undefined),
			conflictDetailLevel: new FormControl<BatchDescribeMergeConflictsInputConflictDetailLevel | null | undefined>(undefined),
			conflictResolutionStrategy: new FormControl<BatchDescribeMergeConflictsInputConflictResolutionStrategy | null | undefined>(undefined),
			authorName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			commitMessage: new FormControl<string | null | undefined>(undefined),
			keepEmptyFolders: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MergePullRequestByFastForwardOutput {

		/** Returns information about a pull request. */
		pullRequest?: PullRequest;
	}
	export interface MergePullRequestByFastForwardOutputFormProperties {
	}
	export function CreateMergePullRequestByFastForwardOutputFormGroup() {
		return new FormGroup<MergePullRequestByFastForwardOutputFormProperties>({
		});

	}

	export interface MergePullRequestByFastForwardInput {
		pullRequestId: string;
		repositoryName: string;
		sourceCommitId?: string | null;
	}
	export interface MergePullRequestByFastForwardInputFormProperties {
		pullRequestId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		sourceCommitId: FormControl<string | null | undefined>,
	}
	export function CreateMergePullRequestByFastForwardInputFormGroup() {
		return new FormGroup<MergePullRequestByFastForwardInputFormProperties>({
			pullRequestId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			sourceCommitId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TipOfSourceReferenceIsDifferentException {
	}
	export interface TipOfSourceReferenceIsDifferentExceptionFormProperties {
	}
	export function CreateTipOfSourceReferenceIsDifferentExceptionFormGroup() {
		return new FormGroup<TipOfSourceReferenceIsDifferentExceptionFormProperties>({
		});

	}

	export interface PullRequestApprovalRulesNotSatisfiedException {
	}
	export interface PullRequestApprovalRulesNotSatisfiedExceptionFormProperties {
	}
	export function CreatePullRequestApprovalRulesNotSatisfiedExceptionFormGroup() {
		return new FormGroup<PullRequestApprovalRulesNotSatisfiedExceptionFormProperties>({
		});

	}

	export interface MergePullRequestBySquashOutput {

		/** Returns information about a pull request. */
		pullRequest?: PullRequest;
	}
	export interface MergePullRequestBySquashOutputFormProperties {
	}
	export function CreateMergePullRequestBySquashOutputFormGroup() {
		return new FormGroup<MergePullRequestBySquashOutputFormProperties>({
		});

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
		conflictResolution?: ConflictResolution;
	}
	export interface MergePullRequestBySquashInputFormProperties {
		pullRequestId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		sourceCommitId: FormControl<string | null | undefined>,
		conflictDetailLevel: FormControl<BatchDescribeMergeConflictsInputConflictDetailLevel | null | undefined>,
		conflictResolutionStrategy: FormControl<BatchDescribeMergeConflictsInputConflictResolutionStrategy | null | undefined>,
		commitMessage: FormControl<string | null | undefined>,
		authorName: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		keepEmptyFolders: FormControl<boolean | null | undefined>,
	}
	export function CreateMergePullRequestBySquashInputFormGroup() {
		return new FormGroup<MergePullRequestBySquashInputFormProperties>({
			pullRequestId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			sourceCommitId: new FormControl<string | null | undefined>(undefined),
			conflictDetailLevel: new FormControl<BatchDescribeMergeConflictsInputConflictDetailLevel | null | undefined>(undefined),
			conflictResolutionStrategy: new FormControl<BatchDescribeMergeConflictsInputConflictResolutionStrategy | null | undefined>(undefined),
			commitMessage: new FormControl<string | null | undefined>(undefined),
			authorName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			keepEmptyFolders: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MergePullRequestByThreeWayOutput {

		/** Returns information about a pull request. */
		pullRequest?: PullRequest;
	}
	export interface MergePullRequestByThreeWayOutputFormProperties {
	}
	export function CreateMergePullRequestByThreeWayOutputFormGroup() {
		return new FormGroup<MergePullRequestByThreeWayOutputFormProperties>({
		});

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
		conflictResolution?: ConflictResolution;
	}
	export interface MergePullRequestByThreeWayInputFormProperties {
		pullRequestId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		sourceCommitId: FormControl<string | null | undefined>,
		conflictDetailLevel: FormControl<BatchDescribeMergeConflictsInputConflictDetailLevel | null | undefined>,
		conflictResolutionStrategy: FormControl<BatchDescribeMergeConflictsInputConflictResolutionStrategy | null | undefined>,
		commitMessage: FormControl<string | null | undefined>,
		authorName: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		keepEmptyFolders: FormControl<boolean | null | undefined>,
	}
	export function CreateMergePullRequestByThreeWayInputFormGroup() {
		return new FormGroup<MergePullRequestByThreeWayInputFormProperties>({
			pullRequestId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			sourceCommitId: new FormControl<string | null | undefined>(undefined),
			conflictDetailLevel: new FormControl<BatchDescribeMergeConflictsInputConflictDetailLevel | null | undefined>(undefined),
			conflictResolutionStrategy: new FormControl<BatchDescribeMergeConflictsInputConflictResolutionStrategy | null | undefined>(undefined),
			commitMessage: new FormControl<string | null | undefined>(undefined),
			authorName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			keepEmptyFolders: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OverridePullRequestApprovalRulesInput {
		pullRequestId: string;
		revisionId: string;
		overrideStatus: ApprovalRuleOverriddenEventMetadataOverrideStatus;
	}
	export interface OverridePullRequestApprovalRulesInputFormProperties {
		pullRequestId: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
		overrideStatus: FormControl<ApprovalRuleOverriddenEventMetadataOverrideStatus | null | undefined>,
	}
	export function CreateOverridePullRequestApprovalRulesInputFormGroup() {
		return new FormGroup<OverridePullRequestApprovalRulesInputFormProperties>({
			pullRequestId: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			overrideStatus: new FormControl<ApprovalRuleOverriddenEventMetadataOverrideStatus | null | undefined>(undefined),
		});

	}

	export interface InvalidOverrideStatusException {
	}
	export interface InvalidOverrideStatusExceptionFormProperties {
	}
	export function CreateInvalidOverrideStatusExceptionFormGroup() {
		return new FormGroup<InvalidOverrideStatusExceptionFormProperties>({
		});

	}

	export interface OverrideStatusRequiredException {
	}
	export interface OverrideStatusRequiredExceptionFormProperties {
	}
	export function CreateOverrideStatusRequiredExceptionFormGroup() {
		return new FormGroup<OverrideStatusRequiredExceptionFormProperties>({
		});

	}

	export interface OverrideAlreadySetException {
	}
	export interface OverrideAlreadySetExceptionFormProperties {
	}
	export function CreateOverrideAlreadySetExceptionFormGroup() {
		return new FormGroup<OverrideAlreadySetExceptionFormProperties>({
		});

	}

	export interface PostCommentForComparedCommitOutput {
		repositoryName?: string | null;
		beforeCommitId?: string | null;
		afterCommitId?: string | null;
		beforeBlobId?: string | null;
		afterBlobId?: string | null;

		/** Returns information about the location of a change or comment in the comparison between two commits or a pull request. */
		location?: Location;

		/** Returns information about a specific comment. */
		comment?: Comment;
	}
	export interface PostCommentForComparedCommitOutputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		beforeCommitId: FormControl<string | null | undefined>,
		afterCommitId: FormControl<string | null | undefined>,
		beforeBlobId: FormControl<string | null | undefined>,
		afterBlobId: FormControl<string | null | undefined>,
	}
	export function CreatePostCommentForComparedCommitOutputFormGroup() {
		return new FormGroup<PostCommentForComparedCommitOutputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			beforeCommitId: new FormControl<string | null | undefined>(undefined),
			afterCommitId: new FormControl<string | null | undefined>(undefined),
			beforeBlobId: new FormControl<string | null | undefined>(undefined),
			afterBlobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostCommentForComparedCommitInput {
		repositoryName: string;
		beforeCommitId?: string | null;
		afterCommitId: string;

		/** Returns information about the location of a change or comment in the comparison between two commits or a pull request. */
		location?: Location;
		content: string;
		clientRequestToken?: string | null;
	}
	export interface PostCommentForComparedCommitInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		beforeCommitId: FormControl<string | null | undefined>,
		afterCommitId: FormControl<string | null | undefined>,
		content: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreatePostCommentForComparedCommitInputFormGroup() {
		return new FormGroup<PostCommentForComparedCommitInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			beforeCommitId: new FormControl<string | null | undefined>(undefined),
			afterCommitId: new FormControl<string | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentContentRequiredException {
	}
	export interface CommentContentRequiredExceptionFormProperties {
	}
	export function CreateCommentContentRequiredExceptionFormGroup() {
		return new FormGroup<CommentContentRequiredExceptionFormProperties>({
		});

	}

	export interface CommentContentSizeLimitExceededException {
	}
	export interface CommentContentSizeLimitExceededExceptionFormProperties {
	}
	export function CreateCommentContentSizeLimitExceededExceptionFormGroup() {
		return new FormGroup<CommentContentSizeLimitExceededExceptionFormProperties>({
		});

	}

	export interface InvalidFileLocationException {
	}
	export interface InvalidFileLocationExceptionFormProperties {
	}
	export function CreateInvalidFileLocationExceptionFormGroup() {
		return new FormGroup<InvalidFileLocationExceptionFormProperties>({
		});

	}

	export interface InvalidRelativeFileVersionEnumException {
	}
	export interface InvalidRelativeFileVersionEnumExceptionFormProperties {
	}
	export function CreateInvalidRelativeFileVersionEnumExceptionFormGroup() {
		return new FormGroup<InvalidRelativeFileVersionEnumExceptionFormProperties>({
		});

	}

	export interface InvalidFilePositionException {
	}
	export interface InvalidFilePositionExceptionFormProperties {
	}
	export function CreateInvalidFilePositionExceptionFormGroup() {
		return new FormGroup<InvalidFilePositionExceptionFormProperties>({
		});

	}

	export interface BeforeCommitIdAndAfterCommitIdAreSameException {
	}
	export interface BeforeCommitIdAndAfterCommitIdAreSameExceptionFormProperties {
	}
	export function CreateBeforeCommitIdAndAfterCommitIdAreSameExceptionFormGroup() {
		return new FormGroup<BeforeCommitIdAndAfterCommitIdAreSameExceptionFormProperties>({
		});

	}

	export interface PostCommentForPullRequestOutput {
		repositoryName?: string | null;
		pullRequestId?: string | null;
		beforeCommitId?: string | null;
		afterCommitId?: string | null;
		beforeBlobId?: string | null;
		afterBlobId?: string | null;

		/** Returns information about the location of a change or comment in the comparison between two commits or a pull request. */
		location?: Location;

		/** Returns information about a specific comment. */
		comment?: Comment;
	}
	export interface PostCommentForPullRequestOutputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		pullRequestId: FormControl<string | null | undefined>,
		beforeCommitId: FormControl<string | null | undefined>,
		afterCommitId: FormControl<string | null | undefined>,
		beforeBlobId: FormControl<string | null | undefined>,
		afterBlobId: FormControl<string | null | undefined>,
	}
	export function CreatePostCommentForPullRequestOutputFormGroup() {
		return new FormGroup<PostCommentForPullRequestOutputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			pullRequestId: new FormControl<string | null | undefined>(undefined),
			beforeCommitId: new FormControl<string | null | undefined>(undefined),
			afterCommitId: new FormControl<string | null | undefined>(undefined),
			beforeBlobId: new FormControl<string | null | undefined>(undefined),
			afterBlobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostCommentForPullRequestInput {
		pullRequestId: string;
		repositoryName: string;
		beforeCommitId: string;
		afterCommitId: string;

		/** Returns information about the location of a change or comment in the comparison between two commits or a pull request. */
		location?: Location;
		content: string;
		clientRequestToken?: string | null;
	}
	export interface PostCommentForPullRequestInputFormProperties {
		pullRequestId: FormControl<string | null | undefined>,
		repositoryName: FormControl<string | null | undefined>,
		beforeCommitId: FormControl<string | null | undefined>,
		afterCommitId: FormControl<string | null | undefined>,
		content: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreatePostCommentForPullRequestInputFormGroup() {
		return new FormGroup<PostCommentForPullRequestInputFormProperties>({
			pullRequestId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			beforeCommitId: new FormControl<string | null | undefined>(undefined),
			afterCommitId: new FormControl<string | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostCommentReplyOutput {

		/** Returns information about a specific comment. */
		comment?: Comment;
	}
	export interface PostCommentReplyOutputFormProperties {
	}
	export function CreatePostCommentReplyOutputFormGroup() {
		return new FormGroup<PostCommentReplyOutputFormProperties>({
		});

	}

	export interface PostCommentReplyInput {
		inReplyTo: string;
		clientRequestToken?: string | null;
		content: string;
	}
	export interface PostCommentReplyInputFormProperties {
		inReplyTo: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
		content: FormControl<string | null | undefined>,
	}
	export function CreatePostCommentReplyInputFormGroup() {
		return new FormGroup<PostCommentReplyInputFormProperties>({
			inReplyTo: new FormControl<string | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutFileOutput {
		commitId: string;
		blobId: string;
		treeId: string;
	}
	export interface PutFileOutputFormProperties {
		commitId: FormControl<string | null | undefined>,
		blobId: FormControl<string | null | undefined>,
		treeId: FormControl<string | null | undefined>,
	}
	export function CreatePutFileOutputFormGroup() {
		return new FormGroup<PutFileOutputFormProperties>({
			commitId: new FormControl<string | null | undefined>(undefined),
			blobId: new FormControl<string | null | undefined>(undefined),
			treeId: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface PutFileInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		branchName: FormControl<string | null | undefined>,
		fileContent: FormControl<string | null | undefined>,
		filePath: FormControl<string | null | undefined>,
		fileMode: FormControl<FileModesSource | null | undefined>,
		parentCommitId: FormControl<string | null | undefined>,
		commitMessage: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
	}
	export function CreatePutFileInputFormGroup() {
		return new FormGroup<PutFileInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			branchName: new FormControl<string | null | undefined>(undefined),
			fileContent: new FormControl<string | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined),
			fileMode: new FormControl<FileModesSource | null | undefined>(undefined),
			parentCommitId: new FormControl<string | null | undefined>(undefined),
			commitMessage: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FileContentRequiredException {
	}
	export interface FileContentRequiredExceptionFormProperties {
	}
	export function CreateFileContentRequiredExceptionFormGroup() {
		return new FormGroup<FileContentRequiredExceptionFormProperties>({
		});

	}

	export interface SameFileContentException {
	}
	export interface SameFileContentExceptionFormProperties {
	}
	export function CreateSameFileContentExceptionFormGroup() {
		return new FormGroup<SameFileContentExceptionFormProperties>({
		});

	}


	/** Represents the output of a put repository triggers operation. */
	export interface PutRepositoryTriggersOutput {
		configurationId?: string | null;
	}

	/** Represents the output of a put repository triggers operation. */
	export interface PutRepositoryTriggersOutputFormProperties {
		configurationId: FormControl<string | null | undefined>,
	}
	export function CreatePutRepositoryTriggersOutputFormGroup() {
		return new FormGroup<PutRepositoryTriggersOutputFormProperties>({
			configurationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a put repository triggers operation. */
	export interface PutRepositoryTriggersInput {
		repositoryName: string;
		triggers: Array<RepositoryTrigger>;
	}

	/** Represents the input of a put repository triggers operation. */
	export interface PutRepositoryTriggersInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreatePutRepositoryTriggersInputFormGroup() {
		return new FormGroup<PutRepositoryTriggersInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RepositoryTriggersListRequiredException {
	}
	export interface RepositoryTriggersListRequiredExceptionFormProperties {
	}
	export function CreateRepositoryTriggersListRequiredExceptionFormGroup() {
		return new FormGroup<RepositoryTriggersListRequiredExceptionFormProperties>({
		});

	}

	export interface MaximumRepositoryTriggersExceededException {
	}
	export interface MaximumRepositoryTriggersExceededExceptionFormProperties {
	}
	export function CreateMaximumRepositoryTriggersExceededExceptionFormGroup() {
		return new FormGroup<MaximumRepositoryTriggersExceededExceptionFormProperties>({
		});

	}

	export interface InvalidRepositoryTriggerNameException {
	}
	export interface InvalidRepositoryTriggerNameExceptionFormProperties {
	}
	export function CreateInvalidRepositoryTriggerNameExceptionFormGroup() {
		return new FormGroup<InvalidRepositoryTriggerNameExceptionFormProperties>({
		});

	}

	export interface InvalidRepositoryTriggerDestinationArnException {
	}
	export interface InvalidRepositoryTriggerDestinationArnExceptionFormProperties {
	}
	export function CreateInvalidRepositoryTriggerDestinationArnExceptionFormGroup() {
		return new FormGroup<InvalidRepositoryTriggerDestinationArnExceptionFormProperties>({
		});

	}

	export interface InvalidRepositoryTriggerRegionException {
	}
	export interface InvalidRepositoryTriggerRegionExceptionFormProperties {
	}
	export function CreateInvalidRepositoryTriggerRegionExceptionFormGroup() {
		return new FormGroup<InvalidRepositoryTriggerRegionExceptionFormProperties>({
		});

	}

	export interface InvalidRepositoryTriggerCustomDataException {
	}
	export interface InvalidRepositoryTriggerCustomDataExceptionFormProperties {
	}
	export function CreateInvalidRepositoryTriggerCustomDataExceptionFormGroup() {
		return new FormGroup<InvalidRepositoryTriggerCustomDataExceptionFormProperties>({
		});

	}

	export interface MaximumBranchesExceededException {
	}
	export interface MaximumBranchesExceededExceptionFormProperties {
	}
	export function CreateMaximumBranchesExceededExceptionFormGroup() {
		return new FormGroup<MaximumBranchesExceededExceptionFormProperties>({
		});

	}

	export interface InvalidRepositoryTriggerBranchNameException {
	}
	export interface InvalidRepositoryTriggerBranchNameExceptionFormProperties {
	}
	export function CreateInvalidRepositoryTriggerBranchNameExceptionFormGroup() {
		return new FormGroup<InvalidRepositoryTriggerBranchNameExceptionFormProperties>({
		});

	}

	export interface InvalidRepositoryTriggerEventsException {
	}
	export interface InvalidRepositoryTriggerEventsExceptionFormProperties {
	}
	export function CreateInvalidRepositoryTriggerEventsExceptionFormGroup() {
		return new FormGroup<InvalidRepositoryTriggerEventsExceptionFormProperties>({
		});

	}

	export interface RepositoryTriggerNameRequiredException {
	}
	export interface RepositoryTriggerNameRequiredExceptionFormProperties {
	}
	export function CreateRepositoryTriggerNameRequiredExceptionFormGroup() {
		return new FormGroup<RepositoryTriggerNameRequiredExceptionFormProperties>({
		});

	}

	export interface RepositoryTriggerDestinationArnRequiredException {
	}
	export interface RepositoryTriggerDestinationArnRequiredExceptionFormProperties {
	}
	export function CreateRepositoryTriggerDestinationArnRequiredExceptionFormGroup() {
		return new FormGroup<RepositoryTriggerDestinationArnRequiredExceptionFormProperties>({
		});

	}

	export interface RepositoryTriggerBranchNameListRequiredException {
	}
	export interface RepositoryTriggerBranchNameListRequiredExceptionFormProperties {
	}
	export function CreateRepositoryTriggerBranchNameListRequiredExceptionFormGroup() {
		return new FormGroup<RepositoryTriggerBranchNameListRequiredExceptionFormProperties>({
		});

	}

	export interface RepositoryTriggerEventsListRequiredException {
	}
	export interface RepositoryTriggerEventsListRequiredExceptionFormProperties {
	}
	export function CreateRepositoryTriggerEventsListRequiredExceptionFormGroup() {
		return new FormGroup<RepositoryTriggerEventsListRequiredExceptionFormProperties>({
		});

	}

	export interface TagResourceInput {
		resourceArn: string;
		tags: TagsMap;
	}
	export interface TagResourceInputFormProperties {
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagsMapRequiredException {
	}
	export interface TagsMapRequiredExceptionFormProperties {
	}
	export function CreateTagsMapRequiredExceptionFormGroup() {
		return new FormGroup<TagsMapRequiredExceptionFormProperties>({
		});

	}


	/** Represents the output of a test repository triggers operation. */
	export interface TestRepositoryTriggersOutput {
		successfulExecutions?: Array<string>;
		failedExecutions?: Array<RepositoryTriggerExecutionFailure>;
	}

	/** Represents the output of a test repository triggers operation. */
	export interface TestRepositoryTriggersOutputFormProperties {
	}
	export function CreateTestRepositoryTriggersOutputFormGroup() {
		return new FormGroup<TestRepositoryTriggersOutputFormProperties>({
		});

	}


	/** A trigger failed to run. */
	export interface RepositoryTriggerExecutionFailure {
		trigger?: string | null;
		failureMessage?: string | null;
	}

	/** A trigger failed to run. */
	export interface RepositoryTriggerExecutionFailureFormProperties {
		trigger: FormControl<string | null | undefined>,
		failureMessage: FormControl<string | null | undefined>,
	}
	export function CreateRepositoryTriggerExecutionFailureFormGroup() {
		return new FormGroup<RepositoryTriggerExecutionFailureFormProperties>({
			trigger: new FormControl<string | null | undefined>(undefined),
			failureMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a test repository triggers operation. */
	export interface TestRepositoryTriggersInput {
		repositoryName: string;
		triggers: Array<RepositoryTrigger>;
	}

	/** Represents the input of a test repository triggers operation. */
	export interface TestRepositoryTriggersInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
	}
	export function CreateTestRepositoryTriggersInputFormGroup() {
		return new FormGroup<TestRepositoryTriggersInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UntagResourceInput {
		resourceArn: string;
		tagKeys: Array<string>;
	}
	export interface UntagResourceInputFormProperties {
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagKeysListRequiredException {
	}
	export interface TagKeysListRequiredExceptionFormProperties {
	}
	export function CreateTagKeysListRequiredExceptionFormGroup() {
		return new FormGroup<TagKeysListRequiredExceptionFormProperties>({
		});

	}

	export interface InvalidTagKeysListException {
	}
	export interface InvalidTagKeysListExceptionFormProperties {
	}
	export function CreateInvalidTagKeysListExceptionFormGroup() {
		return new FormGroup<InvalidTagKeysListExceptionFormProperties>({
		});

	}

	export interface UpdateApprovalRuleTemplateContentOutput {

		/**
		 * Returns information about an approval rule template.
		 * Required
		 */
		approvalRuleTemplate: ApprovalRuleTemplate;
	}
	export interface UpdateApprovalRuleTemplateContentOutputFormProperties {
	}
	export function CreateUpdateApprovalRuleTemplateContentOutputFormGroup() {
		return new FormGroup<UpdateApprovalRuleTemplateContentOutputFormProperties>({
		});

	}

	export interface UpdateApprovalRuleTemplateContentInput {
		approvalRuleTemplateName: string;
		newRuleContent: string;
		existingRuleContentSha256?: string | null;
	}
	export interface UpdateApprovalRuleTemplateContentInputFormProperties {
		approvalRuleTemplateName: FormControl<string | null | undefined>,
		newRuleContent: FormControl<string | null | undefined>,
		existingRuleContentSha256: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApprovalRuleTemplateContentInputFormGroup() {
		return new FormGroup<UpdateApprovalRuleTemplateContentInputFormProperties>({
			approvalRuleTemplateName: new FormControl<string | null | undefined>(undefined),
			newRuleContent: new FormControl<string | null | undefined>(undefined),
			existingRuleContentSha256: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidRuleContentSha256Exception {
	}
	export interface InvalidRuleContentSha256ExceptionFormProperties {
	}
	export function CreateInvalidRuleContentSha256ExceptionFormGroup() {
		return new FormGroup<InvalidRuleContentSha256ExceptionFormProperties>({
		});

	}

	export interface UpdateApprovalRuleTemplateDescriptionOutput {

		/**
		 * Returns information about an approval rule template.
		 * Required
		 */
		approvalRuleTemplate: ApprovalRuleTemplate;
	}
	export interface UpdateApprovalRuleTemplateDescriptionOutputFormProperties {
	}
	export function CreateUpdateApprovalRuleTemplateDescriptionOutputFormGroup() {
		return new FormGroup<UpdateApprovalRuleTemplateDescriptionOutputFormProperties>({
		});

	}

	export interface UpdateApprovalRuleTemplateDescriptionInput {
		approvalRuleTemplateName: string;
		approvalRuleTemplateDescription: string;
	}
	export interface UpdateApprovalRuleTemplateDescriptionInputFormProperties {
		approvalRuleTemplateName: FormControl<string | null | undefined>,
		approvalRuleTemplateDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApprovalRuleTemplateDescriptionInputFormGroup() {
		return new FormGroup<UpdateApprovalRuleTemplateDescriptionInputFormProperties>({
			approvalRuleTemplateName: new FormControl<string | null | undefined>(undefined),
			approvalRuleTemplateDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateApprovalRuleTemplateNameOutput {

		/**
		 * Returns information about an approval rule template.
		 * Required
		 */
		approvalRuleTemplate: ApprovalRuleTemplate;
	}
	export interface UpdateApprovalRuleTemplateNameOutputFormProperties {
	}
	export function CreateUpdateApprovalRuleTemplateNameOutputFormGroup() {
		return new FormGroup<UpdateApprovalRuleTemplateNameOutputFormProperties>({
		});

	}

	export interface UpdateApprovalRuleTemplateNameInput {
		oldApprovalRuleTemplateName: string;
		newApprovalRuleTemplateName: string;
	}
	export interface UpdateApprovalRuleTemplateNameInputFormProperties {
		oldApprovalRuleTemplateName: FormControl<string | null | undefined>,
		newApprovalRuleTemplateName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApprovalRuleTemplateNameInputFormGroup() {
		return new FormGroup<UpdateApprovalRuleTemplateNameInputFormProperties>({
			oldApprovalRuleTemplateName: new FormControl<string | null | undefined>(undefined),
			newApprovalRuleTemplateName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCommentOutput {

		/** Returns information about a specific comment. */
		comment?: Comment;
	}
	export interface UpdateCommentOutputFormProperties {
	}
	export function CreateUpdateCommentOutputFormGroup() {
		return new FormGroup<UpdateCommentOutputFormProperties>({
		});

	}

	export interface UpdateCommentInput {
		commentId: string;
		content: string;
	}
	export interface UpdateCommentInputFormProperties {
		commentId: FormControl<string | null | undefined>,
		content: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCommentInputFormGroup() {
		return new FormGroup<UpdateCommentInputFormProperties>({
			commentId: new FormControl<string | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentNotCreatedByCallerException {
	}
	export interface CommentNotCreatedByCallerExceptionFormProperties {
	}
	export function CreateCommentNotCreatedByCallerExceptionFormGroup() {
		return new FormGroup<CommentNotCreatedByCallerExceptionFormProperties>({
		});

	}


	/** Represents the input of an update default branch operation. */
	export interface UpdateDefaultBranchInput {
		repositoryName: string;
		defaultBranchName: string;
	}

	/** Represents the input of an update default branch operation. */
	export interface UpdateDefaultBranchInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		defaultBranchName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDefaultBranchInputFormGroup() {
		return new FormGroup<UpdateDefaultBranchInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			defaultBranchName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePullRequestApprovalRuleContentOutput {

		/**
		 * Returns information about an approval rule.
		 * Required
		 */
		approvalRule: ApprovalRule;
	}
	export interface UpdatePullRequestApprovalRuleContentOutputFormProperties {
	}
	export function CreateUpdatePullRequestApprovalRuleContentOutputFormGroup() {
		return new FormGroup<UpdatePullRequestApprovalRuleContentOutputFormProperties>({
		});

	}

	export interface UpdatePullRequestApprovalRuleContentInput {
		pullRequestId: string;
		approvalRuleName: string;
		existingRuleContentSha256?: string | null;
		newRuleContent: string;
	}
	export interface UpdatePullRequestApprovalRuleContentInputFormProperties {
		pullRequestId: FormControl<string | null | undefined>,
		approvalRuleName: FormControl<string | null | undefined>,
		existingRuleContentSha256: FormControl<string | null | undefined>,
		newRuleContent: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePullRequestApprovalRuleContentInputFormGroup() {
		return new FormGroup<UpdatePullRequestApprovalRuleContentInputFormProperties>({
			pullRequestId: new FormControl<string | null | undefined>(undefined),
			approvalRuleName: new FormControl<string | null | undefined>(undefined),
			existingRuleContentSha256: new FormControl<string | null | undefined>(undefined),
			newRuleContent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApprovalRuleDoesNotExistException {
	}
	export interface ApprovalRuleDoesNotExistExceptionFormProperties {
	}
	export function CreateApprovalRuleDoesNotExistExceptionFormGroup() {
		return new FormGroup<ApprovalRuleDoesNotExistExceptionFormProperties>({
		});

	}

	export interface CannotModifyApprovalRuleFromTemplateException {
	}
	export interface CannotModifyApprovalRuleFromTemplateExceptionFormProperties {
	}
	export function CreateCannotModifyApprovalRuleFromTemplateExceptionFormGroup() {
		return new FormGroup<CannotModifyApprovalRuleFromTemplateExceptionFormProperties>({
		});

	}

	export interface UpdatePullRequestApprovalStateInput {
		pullRequestId: string;
		revisionId: string;
		approvalState: ApprovalStateChangedEventMetadataApprovalStatus;
	}
	export interface UpdatePullRequestApprovalStateInputFormProperties {
		pullRequestId: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
		approvalState: FormControl<ApprovalStateChangedEventMetadataApprovalStatus | null | undefined>,
	}
	export function CreateUpdatePullRequestApprovalStateInputFormGroup() {
		return new FormGroup<UpdatePullRequestApprovalStateInputFormProperties>({
			pullRequestId: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			approvalState: new FormControl<ApprovalStateChangedEventMetadataApprovalStatus | null | undefined>(undefined),
		});

	}

	export interface InvalidApprovalStateException {
	}
	export interface InvalidApprovalStateExceptionFormProperties {
	}
	export function CreateInvalidApprovalStateExceptionFormGroup() {
		return new FormGroup<InvalidApprovalStateExceptionFormProperties>({
		});

	}

	export interface ApprovalStateRequiredException {
	}
	export interface ApprovalStateRequiredExceptionFormProperties {
	}
	export function CreateApprovalStateRequiredExceptionFormGroup() {
		return new FormGroup<ApprovalStateRequiredExceptionFormProperties>({
		});

	}

	export interface PullRequestCannotBeApprovedByAuthorException {
	}
	export interface PullRequestCannotBeApprovedByAuthorExceptionFormProperties {
	}
	export function CreatePullRequestCannotBeApprovedByAuthorExceptionFormGroup() {
		return new FormGroup<PullRequestCannotBeApprovedByAuthorExceptionFormProperties>({
		});

	}

	export interface MaximumNumberOfApprovalsExceededException {
	}
	export interface MaximumNumberOfApprovalsExceededExceptionFormProperties {
	}
	export function CreateMaximumNumberOfApprovalsExceededExceptionFormGroup() {
		return new FormGroup<MaximumNumberOfApprovalsExceededExceptionFormProperties>({
		});

	}

	export interface UpdatePullRequestDescriptionOutput {

		/**
		 * Returns information about a pull request.
		 * Required
		 */
		pullRequest: PullRequest;
	}
	export interface UpdatePullRequestDescriptionOutputFormProperties {
	}
	export function CreateUpdatePullRequestDescriptionOutputFormGroup() {
		return new FormGroup<UpdatePullRequestDescriptionOutputFormProperties>({
		});

	}

	export interface UpdatePullRequestDescriptionInput {
		pullRequestId: string;
		description: string;
	}
	export interface UpdatePullRequestDescriptionInputFormProperties {
		pullRequestId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePullRequestDescriptionInputFormGroup() {
		return new FormGroup<UpdatePullRequestDescriptionInputFormProperties>({
			pullRequestId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePullRequestStatusOutput {

		/**
		 * Returns information about a pull request.
		 * Required
		 */
		pullRequest: PullRequest;
	}
	export interface UpdatePullRequestStatusOutputFormProperties {
	}
	export function CreateUpdatePullRequestStatusOutputFormGroup() {
		return new FormGroup<UpdatePullRequestStatusOutputFormProperties>({
		});

	}

	export interface UpdatePullRequestStatusInput {
		pullRequestId: string;
		pullRequestStatus: PullRequestPullRequestStatus;
	}
	export interface UpdatePullRequestStatusInputFormProperties {
		pullRequestId: FormControl<string | null | undefined>,
		pullRequestStatus: FormControl<PullRequestPullRequestStatus | null | undefined>,
	}
	export function CreateUpdatePullRequestStatusInputFormGroup() {
		return new FormGroup<UpdatePullRequestStatusInputFormProperties>({
			pullRequestId: new FormControl<string | null | undefined>(undefined),
			pullRequestStatus: new FormControl<PullRequestPullRequestStatus | null | undefined>(undefined),
		});

	}

	export interface InvalidPullRequestStatusUpdateException {
	}
	export interface InvalidPullRequestStatusUpdateExceptionFormProperties {
	}
	export function CreateInvalidPullRequestStatusUpdateExceptionFormGroup() {
		return new FormGroup<InvalidPullRequestStatusUpdateExceptionFormProperties>({
		});

	}

	export interface PullRequestStatusRequiredException {
	}
	export interface PullRequestStatusRequiredExceptionFormProperties {
	}
	export function CreatePullRequestStatusRequiredExceptionFormGroup() {
		return new FormGroup<PullRequestStatusRequiredExceptionFormProperties>({
		});

	}

	export interface UpdatePullRequestTitleOutput {

		/**
		 * Returns information about a pull request.
		 * Required
		 */
		pullRequest: PullRequest;
	}
	export interface UpdatePullRequestTitleOutputFormProperties {
	}
	export function CreateUpdatePullRequestTitleOutputFormGroup() {
		return new FormGroup<UpdatePullRequestTitleOutputFormProperties>({
		});

	}

	export interface UpdatePullRequestTitleInput {
		pullRequestId: string;
		title: string;
	}
	export interface UpdatePullRequestTitleInputFormProperties {
		pullRequestId: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePullRequestTitleInputFormGroup() {
		return new FormGroup<UpdatePullRequestTitleInputFormProperties>({
			pullRequestId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of an update repository description operation. */
	export interface UpdateRepositoryDescriptionInput {
		repositoryName: string;
		repositoryDescription?: string | null;
	}

	/** Represents the input of an update repository description operation. */
	export interface UpdateRepositoryDescriptionInputFormProperties {
		repositoryName: FormControl<string | null | undefined>,
		repositoryDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRepositoryDescriptionInputFormGroup() {
		return new FormGroup<UpdateRepositoryDescriptionInputFormProperties>({
			repositoryName: new FormControl<string | null | undefined>(undefined),
			repositoryDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of an update repository description operation. */
	export interface UpdateRepositoryNameInput {
		oldName: string;
		newName: string;
	}

	/** Represents the input of an update repository description operation. */
	export interface UpdateRepositoryNameInputFormProperties {
		oldName: FormControl<string | null | undefined>,
		newName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRepositoryNameInputFormGroup() {
		return new FormGroup<UpdateRepositoryNameInputFormProperties>({
			oldName: new FormControl<string | null | undefined>(undefined),
			newName: new FormControl<string | null | undefined>(undefined),
		});

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

