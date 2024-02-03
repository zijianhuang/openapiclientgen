import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Collections of files */
	export interface CollectionResponseFile {
		paging?: Paging;

		/** Required */
		results: Array<File>;
	}

	/** Collections of files */
	export interface CollectionResponseFileFormProperties {
	}
	export function CreateCollectionResponseFileFormGroup() {
		return new FormGroup<CollectionResponseFileFormProperties>({
		});

	}

	export interface Paging {
		next?: NextPage;
		prev?: PreviousPage;
	}
	export interface PagingFormProperties {
	}
	export function CreatePagingFormGroup() {
		return new FormGroup<PagingFormProperties>({
		});

	}

	export interface NextPage {

		/** Required */
		after: string;
		link?: string | null;
	}
	export interface NextPageFormProperties {

		/** Required */
		after: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
	}
	export function CreateNextPageFormGroup() {
		return new FormGroup<NextPageFormProperties>({
			after: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PreviousPage {

		/** Required */
		before: string;
		link?: string | null;
	}
	export interface PreviousPageFormProperties {

		/** Required */
		before: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
	}
	export function CreatePreviousPageFormGroup() {
		return new FormGroup<PreviousPageFormProperties>({
			before: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** File */
	export interface File {

		/**
		 * File access. Can be PUBLIC_INDEXABLE, PUBLIC_NOT_INDEXABLE, PRIVATE.
		 * Required
		 */
		access: FileAccess;

		/**
		 * If the file is deleted.
		 * Required
		 */
		archived: boolean;

		/** Deletion time of the file object. */
		archivedAt?: Date | null;

		/**
		 * Creation time of the file object.
		 * Required
		 */
		createdAt: Date;

		/** Default hosting URL of the file. This will use one of HubSpot's provided URLs to serve the file. */
		defaultHostingUrl?: string | null;

		/** Encoding of the file. */
		encoding?: string | null;
		expiresAt?: number | null;

		/** Extension of the file. ex: .jpg, .png, .gif, .pdf, etc. */
		extension?: string | null;

		/** For image and video files, the height of the content. */
		height?: number | null;

		/**
		 * File ID.
		 * Required
		 */
		id: string;

		/** Previously "archied". Indicates if the file should be used when creating new content like web pages. */
		isUsableInContent?: boolean | null;

		/** Name of the file. */
		name?: string | null;

		/** ID of the folder the file is in. */
		parentFolderId?: string | null;

		/** Path of the file in the file manager. */
		path?: string | null;

		/** Size of the file in bytes. */
		size?: number | null;

		/** Type of the file. Can be IMG, DOCUMENT, AUDIO, MOVIE, or OTHER. */
		type?: string | null;

		/**
		 * Timestamp of the latest update to the file.
		 * Required
		 */
		updatedAt: Date;

		/** URL of the given file. This URL can change depending on the domain settings of the account. Will use the select file hosting domain. */
		url?: string | null;

		/** For image and video files, the width of the content. */
		width?: number | null;
	}

	/** File */
	export interface FileFormProperties {

		/**
		 * File access. Can be PUBLIC_INDEXABLE, PUBLIC_NOT_INDEXABLE, PRIVATE.
		 * Required
		 */
		access: FormControl<FileAccess | null | undefined>,

		/**
		 * If the file is deleted.
		 * Required
		 */
		archived: FormControl<boolean | null | undefined>,

		/** Deletion time of the file object. */
		archivedAt: FormControl<Date | null | undefined>,

		/**
		 * Creation time of the file object.
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/** Default hosting URL of the file. This will use one of HubSpot's provided URLs to serve the file. */
		defaultHostingUrl: FormControl<string | null | undefined>,

		/** Encoding of the file. */
		encoding: FormControl<string | null | undefined>,
		expiresAt: FormControl<number | null | undefined>,

		/** Extension of the file. ex: .jpg, .png, .gif, .pdf, etc. */
		extension: FormControl<string | null | undefined>,

		/** For image and video files, the height of the content. */
		height: FormControl<number | null | undefined>,

		/**
		 * File ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Previously "archied". Indicates if the file should be used when creating new content like web pages. */
		isUsableInContent: FormControl<boolean | null | undefined>,

		/** Name of the file. */
		name: FormControl<string | null | undefined>,

		/** ID of the folder the file is in. */
		parentFolderId: FormControl<string | null | undefined>,

		/** Path of the file in the file manager. */
		path: FormControl<string | null | undefined>,

		/** Size of the file in bytes. */
		size: FormControl<number | null | undefined>,

		/** Type of the file. Can be IMG, DOCUMENT, AUDIO, MOVIE, or OTHER. */
		type: FormControl<string | null | undefined>,

		/**
		 * Timestamp of the latest update to the file.
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,

		/** URL of the given file. This URL can change depending on the domain settings of the account. Will use the select file hosting domain. */
		url: FormControl<string | null | undefined>,

		/** For image and video files, the width of the content. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateFileFormGroup() {
		return new FormGroup<FileFormProperties>({
			access: new FormControl<FileAccess | null | undefined>(undefined, [Validators.required]),
			archived: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			archivedAt: new FormControl<Date | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			defaultHostingUrl: new FormControl<string | null | undefined>(undefined),
			encoding: new FormControl<string | null | undefined>(undefined),
			expiresAt: new FormControl<number | null | undefined>(undefined),
			extension: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isUsableInContent: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentFolderId: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FileAccess { PUBLIC_INDEXABLE = 'PUBLIC_INDEXABLE', PUBLIC_NOT_INDEXABLE = 'PUBLIC_NOT_INDEXABLE', HIDDEN_INDEXABLE = 'HIDDEN_INDEXABLE', HIDDEN_NOT_INDEXABLE = 'HIDDEN_NOT_INDEXABLE', HIDDEN_PRIVATE = 'HIDDEN_PRIVATE', PRIVATE = 'PRIVATE' }

	export interface CollectionResponseFolder {
		paging?: Paging;

		/** Required */
		results: Array<Folder>;
	}
	export interface CollectionResponseFolderFormProperties {
	}
	export function CreateCollectionResponseFolderFormGroup() {
		return new FormGroup<CollectionResponseFolderFormProperties>({
		});

	}

	export interface Folder {

		/**
		 * Marks whether the folder is deleted or not.
		 * Required
		 */
		archived: boolean;

		/** Timestamp of folder deletion. */
		archivedAt?: Date | null;

		/**
		 * Timestamp of folder creation.
		 * Required
		 */
		createdAt: Date;

		/**
		 * ID of the folder.
		 * Required
		 */
		id: string;

		/** Name of the folder. */
		name?: string | null;

		/** ID of the parent folder. */
		parentFolderId?: string | null;

		/** Path of the folder in the file manager. */
		path?: string | null;

		/**
		 * Timestamp of the latest update to the folder.
		 * Required
		 */
		updatedAt: Date;
	}
	export interface FolderFormProperties {

		/**
		 * Marks whether the folder is deleted or not.
		 * Required
		 */
		archived: FormControl<boolean | null | undefined>,

		/** Timestamp of folder deletion. */
		archivedAt: FormControl<Date | null | undefined>,

		/**
		 * Timestamp of folder creation.
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * ID of the folder.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Name of the folder. */
		name: FormControl<string | null | undefined>,

		/** ID of the parent folder. */
		parentFolderId: FormControl<string | null | undefined>,

		/** Path of the folder in the file manager. */
		path: FormControl<string | null | undefined>,

		/**
		 * Timestamp of the latest update to the folder.
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateFolderFormGroup() {
		return new FormGroup<FolderFormProperties>({
			archived: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			archivedAt: new FormControl<Date | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			parentFolderId: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Error {

		/**
		 * The error category
		 * Required
		 */
		category: string;

		/** Context about the error condition */
		context?: {[id: string]: Array<string> };

		/**
		 * A unique identifier for the request. Include this value with any error reports or support tickets
		 * Required
		 */
		correlationId: string;

		/** further information about the error */
		errors?: Array<ErrorDetail>;

		/** A map of link names to associated URIs containing documentation about the error or recommended remediation steps */
		links?: {[id: string]: string };

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: string;

		/** A specific category that contains more specific detail about the error */
		subCategory?: string | null;
	}
	export interface ErrorFormProperties {

		/**
		 * The error category
		 * Required
		 */
		category: FormControl<string | null | undefined>,

		/** Context about the error condition */
		context: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/**
		 * A unique identifier for the request. Include this value with any error reports or support tickets
		 * Required
		 */
		correlationId: FormControl<string | null | undefined>,

		/** A map of link names to associated URIs containing documentation about the error or recommended remediation steps */
		links: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** A specific category that contains more specific detail about the error */
		subCategory: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			category: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			context: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			links: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subCategory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorDetail {

		/** The status code associated with the error detail */
		code?: string | null;

		/** Context about the error condition */
		context?: {[id: string]: Array<string> };

		/** The name of the field or parameter in which the error was found. */
		in?: string | null;

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: string;

		/** A specific category that contains more specific detail about the error */
		subCategory?: string | null;
	}
	export interface ErrorDetailFormProperties {

		/** The status code associated with the error detail */
		code: FormControl<string | null | undefined>,

		/** Context about the error condition */
		context: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/** The name of the field or parameter in which the error was found. */
		in: FormControl<string | null | undefined>,

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** A specific category that contains more specific detail about the error */
		subCategory: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			context: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			in: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subCategory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FileActionResponse {

		/**
		 * Time of completion of task.
		 * Required
		 */
		completedAt: Date;

		/** Descriptive error messages. */
		errors?: Array<StandardError>;

		/** Link to check the status of the requested task. */
		links?: {[id: string]: string };

		/** Number of errors resulting from the task. */
		numErrors?: number | null;

		/** Timestamp of when the task was requested. */
		requestedAt?: Date | null;

		/** File */
		result?: File;

		/**
		 * Timestamp of when the task was started.
		 * Required
		 */
		startedAt: Date;

		/**
		 * Current status of the task.
		 * Required
		 */
		status: FileActionResponseStatus;

		/**
		 * ID of the requested task.
		 * Required
		 */
		taskId: string;
	}
	export interface FileActionResponseFormProperties {

		/**
		 * Time of completion of task.
		 * Required
		 */
		completedAt: FormControl<Date | null | undefined>,

		/** Link to check the status of the requested task. */
		links: FormControl<{[id: string]: string } | null | undefined>,

		/** Number of errors resulting from the task. */
		numErrors: FormControl<number | null | undefined>,

		/** Timestamp of when the task was requested. */
		requestedAt: FormControl<Date | null | undefined>,

		/**
		 * Timestamp of when the task was started.
		 * Required
		 */
		startedAt: FormControl<Date | null | undefined>,

		/**
		 * Current status of the task.
		 * Required
		 */
		status: FormControl<FileActionResponseStatus | null | undefined>,

		/**
		 * ID of the requested task.
		 * Required
		 */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateFileActionResponseFormGroup() {
		return new FormGroup<FileActionResponseFormProperties>({
			completedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			links: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			numErrors: new FormControl<number | null | undefined>(undefined),
			requestedAt: new FormControl<Date | null | undefined>(undefined),
			startedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<FileActionResponseStatus | null | undefined>(undefined, [Validators.required]),
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StandardError {

		/** Required */
		category: string;

		/** Required */
		context: {[id: string]: Array<string> };

		/** Required */
		errors: Array<ErrorDetail>;
		id?: string | null;

		/** Required */
		links: {[id: string]: string };

		/** Required */
		message: string;

		/** Required */
		status: string;
		subCategory?: string | null;
	}
	export interface StandardErrorFormProperties {

		/** Required */
		category: FormControl<string | null | undefined>,

		/** Required */
		context: FormControl<{[id: string]: Array<string> } | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Required */
		links: FormControl<{[id: string]: string } | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,
		subCategory: FormControl<string | null | undefined>,
	}
	export function CreateStandardErrorFormGroup() {
		return new FormGroup<StandardErrorFormProperties>({
			category: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			context: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subCategory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FileActionResponseStatus { PENDING = 'PENDING', PROCESSING = 'PROCESSING', CANCELED = 'CANCELED', COMPLETE = 'COMPLETE' }

	export interface FileStat {

		/** File */
		file?: File;
		folder?: Folder;
	}
	export interface FileStatFormProperties {
	}
	export function CreateFileStatFormGroup() {
		return new FormGroup<FileStatFormProperties>({
		});

	}


	/** Object for updating files. */
	export interface FileUpdateInput {

		/**
		 * NONE: Do not run any duplicate validation. REJECT: Reject the upload if a duplicate is found. RETURN_EXISTING: If a duplicate file is found, do not upload a new file and return the found duplicate instead.
		 */
		access?: FileAccess | null;
		expiresAt?: number | null;

		/** Mark whether the file should be used in new content or not. */
		isUsableInContent?: boolean | null;

		/** New name for the file. */
		name?: string | null;

		/** FolderId where the file should be moved to. folderId and folderPath parameters cannot be set at the same time. */
		parentFolderId?: string | null;

		/** Folder path where the file should be moved to. folderId and folderPath parameters cannot be set at the same time. */
		parentFolderPath?: string | null;
	}

	/** Object for updating files. */
	export interface FileUpdateInputFormProperties {

		/**
		 * NONE: Do not run any duplicate validation. REJECT: Reject the upload if a duplicate is found. RETURN_EXISTING: If a duplicate file is found, do not upload a new file and return the found duplicate instead.
		 */
		access: FormControl<FileAccess | null | undefined>,
		expiresAt: FormControl<number | null | undefined>,

		/** Mark whether the file should be used in new content or not. */
		isUsableInContent: FormControl<boolean | null | undefined>,

		/** New name for the file. */
		name: FormControl<string | null | undefined>,

		/** FolderId where the file should be moved to. folderId and folderPath parameters cannot be set at the same time. */
		parentFolderId: FormControl<string | null | undefined>,

		/** Folder path where the file should be moved to. folderId and folderPath parameters cannot be set at the same time. */
		parentFolderPath: FormControl<string | null | undefined>,
	}
	export function CreateFileUpdateInputFormGroup() {
		return new FormGroup<FileUpdateInputFormProperties>({
			access: new FormControl<FileAccess | null | undefined>(undefined),
			expiresAt: new FormControl<number | null | undefined>(undefined),
			isUsableInContent: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentFolderId: new FormControl<string | null | undefined>(undefined),
			parentFolderPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FolderActionResponse {

		/**
		 * When the requested changes have been completed.
		 * Required
		 */
		completedAt: Date;

		/** Detailed errors resulting from the task. */
		errors?: Array<StandardError>;

		/** Link to check the status of the task. */
		links?: {[id: string]: string };

		/** Number of errors resulting from the requested changes. */
		numErrors?: number | null;

		/** Timestamp representing when the task was requested. */
		requestedAt?: Date | null;
		result?: Folder;

		/**
		 * Timestamp representing when the task was started at.
		 * Required
		 */
		startedAt: Date;

		/**
		 * Current status of the task.
		 * Required
		 */
		status: FileActionResponseStatus;

		/**
		 * ID of the task.
		 * Required
		 */
		taskId: string;
	}
	export interface FolderActionResponseFormProperties {

		/**
		 * When the requested changes have been completed.
		 * Required
		 */
		completedAt: FormControl<Date | null | undefined>,

		/** Link to check the status of the task. */
		links: FormControl<{[id: string]: string } | null | undefined>,

		/** Number of errors resulting from the requested changes. */
		numErrors: FormControl<number | null | undefined>,

		/** Timestamp representing when the task was requested. */
		requestedAt: FormControl<Date | null | undefined>,

		/**
		 * Timestamp representing when the task was started at.
		 * Required
		 */
		startedAt: FormControl<Date | null | undefined>,

		/**
		 * Current status of the task.
		 * Required
		 */
		status: FormControl<FileActionResponseStatus | null | undefined>,

		/**
		 * ID of the task.
		 * Required
		 */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateFolderActionResponseFormGroup() {
		return new FormGroup<FolderActionResponseFormProperties>({
			completedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			links: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			numErrors: new FormControl<number | null | undefined>(undefined),
			requestedAt: new FormControl<Date | null | undefined>(undefined),
			startedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<FileActionResponseStatus | null | undefined>(undefined, [Validators.required]),
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Object for creating a folder. */
	export interface FolderInput {

		/**
		 * Desired name for the folder.
		 * Required
		 */
		name: string;

		/** FolderId of the parent of the created folder. If not specified, the folder will be created at the root level. parentFolderId and parentFolderPath cannot be set at the same time. */
		parentFolderId?: string | null;

		/** Path of the parent of the created folder. If not specified the folder will be created at the root level. parentFolderPath and parentFolderId cannot be set at the same time. */
		parentPath?: string | null;
	}

	/** Object for creating a folder. */
	export interface FolderInputFormProperties {

		/**
		 * Desired name for the folder.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** FolderId of the parent of the created folder. If not specified, the folder will be created at the root level. parentFolderId and parentFolderPath cannot be set at the same time. */
		parentFolderId: FormControl<string | null | undefined>,

		/** Path of the parent of the created folder. If not specified the folder will be created at the root level. parentFolderPath and parentFolderId cannot be set at the same time. */
		parentPath: FormControl<string | null | undefined>,
	}
	export function CreateFolderInputFormGroup() {
		return new FormGroup<FolderInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parentFolderId: new FormControl<string | null | undefined>(undefined),
			parentPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object for updating folders. */
	export interface FolderUpdateInput {

		/**
		 * ID of the folder to change.
		 * Required
		 */
		id: string;

		/** New name. If specified the folder's name and fullPath will change. All children of the folder will be updated accordingly. */
		name?: string | null;

		/** New parent folderId. If changed, the folder and all it's children will be moved into the specified folder. parentFolderId and parentFolderPath cannot be specified at the same time. */
		parentFolderId?: number | null;
	}

	/** Object for updating folders. */
	export interface FolderUpdateInputFormProperties {

		/**
		 * ID of the folder to change.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** New name. If specified the folder's name and fullPath will change. All children of the folder will be updated accordingly. */
		name: FormControl<string | null | undefined>,

		/** New parent folderId. If changed, the folder and all it's children will be moved into the specified folder. parentFolderId and parentFolderPath cannot be specified at the same time. */
		parentFolderId: FormControl<number | null | undefined>,
	}
	export function CreateFolderUpdateInputFormGroup() {
		return new FormGroup<FolderUpdateInputFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			parentFolderId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information on the task that has been started, and where to check it's status. */
	export interface FolderUpdateTaskLocator {

		/**
		 * ID of the task
		 * Required
		 */
		id: string;

		/**
		 * Links for where to check information related to the task. The `status` link gives the URL for where to check the status of the task.
		 * Required
		 */
		links: {[id: string]: string };
	}

	/** Information on the task that has been started, and where to check it's status. */
	export interface FolderUpdateTaskLocatorFormProperties {

		/**
		 * ID of the task
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Links for where to check information related to the task. The `status` link gives the URL for where to check the status of the task.
		 * Required
		 */
		links: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateFolderUpdateTaskLocatorFormGroup() {
		return new FormGroup<FolderUpdateTaskLocatorFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			links: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportFromUrlInput {

		/**
		 * PUBLIC_INDEXABLE: File is publicly accessible by anyone who has the URL. Search engines can index the file. PUBLIC_NOT_INDEXABLE: File is publicly accessible by anyone who has the URL. Search engines *can't* index the file. PRIVATE: File is NOT publicly accessible. Requires a signed URL to see content. Search engines *can't* index the file.
		 * Required
		 */
		access: FileAccess;

		/**
		 * ENTIRE_PORTAL: Look for a duplicate file in the entire account. EXACT_FOLDER: Look for a duplicate file in the provided folder.
		 */
		duplicateValidationScope?: ImportFromUrlInputDuplicateValidationScope | null;

		/**
		 * NONE: Do not run any duplicate validation. REJECT: Reject the upload if a duplicate is found. RETURN_EXISTING: If a duplicate file is found, do not upload a new file and return the found duplicate instead.
		 */
		duplicateValidationStrategy?: ImportFromUrlInputDuplicateValidationStrategy | null;

		/** One of folderId or folderPath is required. Destination folderId for the uploaded file. */
		folderId?: string | null;

		/** One of folderPath or folderId is required. Destination folder path for the uploaded file. If the folder path does not exist, there will be an attempt to create the folder path. */
		folderPath?: string | null;

		/** Name to give the resulting file in the file manager. */
		name?: string | null;

		/** If true, will overwrite existing file if one with the same name and extension exists in the given folder. The overwritten file will be deleted and the uploaded file will take its place with a new ID. If unset or set as false, the new file's name will be updated to prevent colliding with existing file if one exists with the same path, name, and extension */
		overwrite?: boolean | null;

		/** Time to live. If specified the file will be deleted after the given time frame. If left unset, the file will exist indefinitely */
		ttl?: string | null;

		/**
		 * URL to download the new file from.
		 * Required
		 */
		url: string;
	}
	export interface ImportFromUrlInputFormProperties {

		/**
		 * PUBLIC_INDEXABLE: File is publicly accessible by anyone who has the URL. Search engines can index the file. PUBLIC_NOT_INDEXABLE: File is publicly accessible by anyone who has the URL. Search engines *can't* index the file. PRIVATE: File is NOT publicly accessible. Requires a signed URL to see content. Search engines *can't* index the file.
		 * Required
		 */
		access: FormControl<FileAccess | null | undefined>,

		/**
		 * ENTIRE_PORTAL: Look for a duplicate file in the entire account. EXACT_FOLDER: Look for a duplicate file in the provided folder.
		 */
		duplicateValidationScope: FormControl<ImportFromUrlInputDuplicateValidationScope | null | undefined>,

		/**
		 * NONE: Do not run any duplicate validation. REJECT: Reject the upload if a duplicate is found. RETURN_EXISTING: If a duplicate file is found, do not upload a new file and return the found duplicate instead.
		 */
		duplicateValidationStrategy: FormControl<ImportFromUrlInputDuplicateValidationStrategy | null | undefined>,

		/** One of folderId or folderPath is required. Destination folderId for the uploaded file. */
		folderId: FormControl<string | null | undefined>,

		/** One of folderPath or folderId is required. Destination folder path for the uploaded file. If the folder path does not exist, there will be an attempt to create the folder path. */
		folderPath: FormControl<string | null | undefined>,

		/** Name to give the resulting file in the file manager. */
		name: FormControl<string | null | undefined>,

		/** If true, will overwrite existing file if one with the same name and extension exists in the given folder. The overwritten file will be deleted and the uploaded file will take its place with a new ID. If unset or set as false, the new file's name will be updated to prevent colliding with existing file if one exists with the same path, name, and extension */
		overwrite: FormControl<boolean | null | undefined>,

		/** Time to live. If specified the file will be deleted after the given time frame. If left unset, the file will exist indefinitely */
		ttl: FormControl<string | null | undefined>,

		/**
		 * URL to download the new file from.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateImportFromUrlInputFormGroup() {
		return new FormGroup<ImportFromUrlInputFormProperties>({
			access: new FormControl<FileAccess | null | undefined>(undefined, [Validators.required]),
			duplicateValidationScope: new FormControl<ImportFromUrlInputDuplicateValidationScope | null | undefined>(undefined),
			duplicateValidationStrategy: new FormControl<ImportFromUrlInputDuplicateValidationStrategy | null | undefined>(undefined),
			folderId: new FormControl<string | null | undefined>(undefined),
			folderPath: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			overwrite: new FormControl<boolean | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ImportFromUrlInputDuplicateValidationScope { ENTIRE_PORTAL = 'ENTIRE_PORTAL', EXACT_FOLDER = 'EXACT_FOLDER' }

	export enum ImportFromUrlInputDuplicateValidationStrategy { NONE = 'NONE', REJECT = 'REJECT', RETURN_EXISTING = 'RETURN_EXISTING' }


	/** Information on the task that has been started, and where to check it's status. */
	export interface ImportFromUrlTaskLocator {

		/**
		 * ID of the task
		 * Required
		 */
		id: string;

		/**
		 * Links for where to check information related to the task. The `status` link gives the URL for where to check the status of the task.
		 * Required
		 */
		links: {[id: string]: string };
	}

	/** Information on the task that has been started, and where to check it's status. */
	export interface ImportFromUrlTaskLocatorFormProperties {

		/**
		 * ID of the task
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Links for where to check information related to the task. The `status` link gives the URL for where to check the status of the task.
		 * Required
		 */
		links: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateImportFromUrlTaskLocatorFormGroup() {
		return new FormGroup<ImportFromUrlTaskLocatorFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			links: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Signed Url object with optional ancillary metadata of requested file */
	export interface SignedUrl {

		/**
		 * Timestamp of when the URL will no longer grant access to the file.
		 * Required
		 */
		expiresAt: Date;

		/**
		 * Extension of the requested file.
		 * Required
		 */
		extension: string;

		/** For image and video files. The height of the file. */
		height?: number | null;

		/**
		 * Name of the requested file.
		 * Required
		 */
		name: string;

		/**
		 * Size in bytes of the requested file.
		 * Required
		 */
		size: number;

		/**
		 * Type of the file. Can be IMG, DOCUMENT, AUDIO, MOVIE, or OTHER.
		 * Required
		 */
		type: string;

		/**
		 * Signed URL with access to the specified file. Anyone with this URL will be able to access the file until it expires.
		 * Required
		 */
		url: string;

		/** For image and video files. The width of the file. */
		width?: number | null;
	}

	/** Signed Url object with optional ancillary metadata of requested file */
	export interface SignedUrlFormProperties {

		/**
		 * Timestamp of when the URL will no longer grant access to the file.
		 * Required
		 */
		expiresAt: FormControl<Date | null | undefined>,

		/**
		 * Extension of the requested file.
		 * Required
		 */
		extension: FormControl<string | null | undefined>,

		/** For image and video files. The height of the file. */
		height: FormControl<number | null | undefined>,

		/**
		 * Name of the requested file.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Size in bytes of the requested file.
		 * Required
		 */
		size: FormControl<number | null | undefined>,

		/**
		 * Type of the file. Can be IMG, DOCUMENT, AUDIO, MOVIE, or OTHER.
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * Signed URL with access to the specified file. Anyone with this URL will be able to access the file until it expires.
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/** For image and video files. The width of the file. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateSignedUrlFormGroup() {
		return new FormGroup<SignedUrlFormProperties>({
			expiresAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			extension: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			height: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Import a file from a URL into the file manager.
		 * Asynchronously imports the file at the given URL into the file manager.
		 * Post files/v3/files/import-from-url/async
		 * @return {void} 
		 */
		Post_SlashfilesSlashv3SlashfilesSlashimport_from_urlSlashasync_importFromUrl(requestBody: ImportFromUrlInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'files/v3/files/import-from-url/async', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Check import status.
		 * Check the status of requested import.
		 * Get files/v3/files/import-from-url/async/tasks/{taskId}/status
		 * @param {string} taskId Import by URL task ID
		 * @return {FileActionResponse} successful operation
		 */
		Get_SlashfilesSlashv3SlashfilesSlashimport_from_urlSlashasyncSlashtasksSlashtaskIdSlashstatus_checkImport(taskId: string): Observable<FileActionResponse> {
			return this.http.get<FileActionResponse>(this.baseUri + 'files/v3/files/import-from-url/async/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/status', {});
		}

		/**
		 * Search files
		 * Search through files in the file manager. Does not display hidden or archived files.
		 * Get files/v3/files/search
		 * @param {Array<string>} properties Desired file properties in the return object.
		 * @param {string} after The maximum offset of items for a given search is 10000. Narrow your search down if you are reaching this limit.
		 * @param {number} limit Number of items to return. Maximum limit is 100.
		 * @param {Array<string>} sort Sort files by a given field.
		 * @param {string} id Search files by given ID.
		 * @param {Date} createdAt Search files by time of creation.
		 * @param {Date} updatedAt Search files by time of latest updated.
		 * @param {string} name Search for files containing the given name.
		 * @param {string} path Search files by path.
		 * @param {number} parentFolderId Search files within given folderId.
		 * @param {number} size Query by file size.
		 * @param {number} height Search files by height of image or video.
		 * @param {number} width Search files by width of image or video.
		 * @param {string} encoding Search files with specified encoding.
		 * @param {string} type Filter by provided file type.
		 * @param {string} extension Search files by given extension.
		 * @param {string} url Search for given URL
		 * @param {boolean} isUsableInContent If true shows files that have been marked to be used in new content. It false shows files that should not be used in new content.
		 * @param {boolean} allowsAnonymousAccess If 'true' will show private files; if 'false' will show public files
		 * @return {CollectionResponseFile} successful operation
		 */
		Get_SlashfilesSlashv3SlashfilesSlashsearch_doSearch(properties: Array<string> | null | undefined, after: string | null | undefined, before: string | null | undefined, limit: number | null | undefined, sort: Array<string> | null | undefined, id: string | null | undefined, createdAt: Date | null | undefined, createdAtLte: Date | null | undefined, createdAtGte: Date | null | undefined, updatedAt: Date | null | undefined, updatedAtLte: Date | null | undefined, updatedAtGte: Date | null | undefined, name: string | null | undefined, path: string | null | undefined, parentFolderId: number | null | undefined, size: number | null | undefined, height: number | null | undefined, width: number | null | undefined, encoding: string | null | undefined, type: string | null | undefined, extension: string | null | undefined, url: string | null | undefined, isUsableInContent: boolean | null | undefined, allowsAnonymousAccess: boolean | null | undefined): Observable<CollectionResponseFile> {
			return this.http.get<CollectionResponseFile>(this.baseUri + 'files/v3/files/search?' + properties?.map(z => `properties=${encodeURIComponent(z)}`).join('&') + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&before=' + (before == null ? '' : encodeURIComponent(before)) + '&limit=' + limit + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&createdAt=' + createdAt?.toISOString() + '&createdAtLte=' + createdAtLte?.toISOString() + '&createdAtGte=' + createdAtGte?.toISOString() + '&updatedAt=' + updatedAt?.toISOString() + '&updatedAtLte=' + updatedAtLte?.toISOString() + '&updatedAtGte=' + updatedAtGte?.toISOString() + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&path=' + (path == null ? '' : encodeURIComponent(path)) + '&parentFolderId=' + parentFolderId + '&size=' + size + '&height=' + height + '&width=' + width + '&encoding=' + (encoding == null ? '' : encodeURIComponent(encoding)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&extension=' + (extension == null ? '' : encodeURIComponent(extension)) + '&url=' + (url == null ? '' : encodeURIComponent(url)) + '&isUsableInContent=' + isUsableInContent + '&allowsAnonymousAccess=' + allowsAnonymousAccess, {});
		}

		/**
		 * Get files/v3/files/stat/{path}
		 * @return {FileStat} successful operation
		 */
		Get_SlashfilesSlashv3SlashfilesSlashstatSlashpath_getMetadata(path: string, properties: Array<string> | null | undefined): Observable<FileStat> {
			return this.http.get<FileStat>(this.baseUri + 'files/v3/files/stat/' + (path == null ? '' : encodeURIComponent(path)) + '&' + properties?.map(z => `properties=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Delete file
		 * Delete file by ID
		 * Delete files/v3/files/{fileId}
		 * @param {string} fileId FileId to delete
		 * @return {void} 
		 */
		Delete_SlashfilesSlashv3SlashfilesSlashfileId_archive(fileId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'files/v3/files/' + (fileId == null ? '' : encodeURIComponent(fileId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get file.
		 * Get file by ID.
		 * Get files/v3/files/{fileId}
		 * @param {string} fileId ID of the desired file.
		 * @return {File} successful operation
		 */
		Get_SlashfilesSlashv3SlashfilesSlashfileId_getById(fileId: string, properties: Array<string> | null | undefined): Observable<File> {
			return this.http.get<File>(this.baseUri + 'files/v3/files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '&' + properties?.map(z => `properties=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * update file properties
		 * Update properties of file by ID.
		 * Patch files/v3/files/{fileId}
		 * @param {string} fileId ID of file to update
		 * @param {FileUpdateInput} requestBody Options to update.
		 * @return {File} successful operation
		 */
		Patch_SlashfilesSlashv3SlashfilesSlashfileId_updateProperties(fileId: string, requestBody: FileUpdateInput): Observable<File> {
			return this.http.patch<File>(this.baseUri + 'files/v3/files/' + (fileId == null ? '' : encodeURIComponent(fileId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * GDPR delete
		 * GDRP delete file
		 * Delete files/v3/files/{fileId}/gdpr-delete
		 * @param {string} fileId ID of file to GDPR delete
		 * @return {void} 
		 */
		Delete_SlashfilesSlashv3SlashfilesSlashfileIdSlashgdpr_delete_archiveGDPR(fileId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'files/v3/files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/gdpr-delete', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get signed URL to access private file.
		 * Generates signed URL that allows temporary access to a private file.
		 * Get files/v3/files/{fileId}/signed-url
		 * @param {string} fileId ID of file.
		 * @param {Get_SlashfilesSlashv3SlashfilesSlashfileIdSlashsigned_url_getSignedUrlSize} size For image files. This will resize the image to the desired size before sharing. Does not affect the original file, just the file served by this signed URL.
		 * @param {number} expirationSeconds How long in seconds the link will provide access to the file.
		 * @param {boolean} upscale If size is provided, this will upscale the image to fit the size dimensions.
		 * @return {SignedUrl} successful operation
		 */
		Get_SlashfilesSlashv3SlashfilesSlashfileIdSlashsigned_url_getSignedUrl(fileId: string, size: Get_SlashfilesSlashv3SlashfilesSlashfileIdSlashsigned_url_getSignedUrlSize | null | undefined, expirationSeconds: number | null | undefined, upscale: boolean | null | undefined): Observable<SignedUrl> {
			return this.http.get<SignedUrl>(this.baseUri + 'files/v3/files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/signed-url&size=' + size + '&expirationSeconds=' + expirationSeconds + '&upscale=' + upscale, {});
		}

		/**
		 * Create folder.
		 * Creates a folder.
		 * Post files/v3/folders
		 * @param {FolderInput} requestBody Folder creation options
		 * @return {void} 
		 */
		Post_SlashfilesSlashv3Slashfolders_create(requestBody: FolderInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'files/v3/folders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search folders
		 * Search for folders. Does not contain hidden or archived folders.
		 * Get files/v3/folders/search
		 * @param {Array<string>} properties Properties that should be included in the returned folders.
		 * @param {string} after The maximum offset of items for a given search is 10000. Narrow your search down if you are reaching this limit.
		 * @param {number} limit Limit of results to return. Max limit is 100.
		 * @param {Array<string>} sort Sort results by given property. For example -name sorts by name field descending, name sorts by name field ascending.
		 * @param {string} id Search folder by given ID.
		 * @param {Date} createdAt Search for folders with the given creation timestamp.
		 * @param {Date} updatedAt Search for folder at given update timestamp.
		 * @param {string} name Search for folders containing the specified name.
		 * @param {string} path Search for folders by path.
		 * @param {number} parentFolderId Search for folders with the given parent folderId.
		 * @return {CollectionResponseFolder} successful operation
		 */
		Get_SlashfilesSlashv3SlashfoldersSlashsearch_doSearch(properties: Array<string> | null | undefined, after: string | null | undefined, before: string | null | undefined, limit: number | null | undefined, sort: Array<string> | null | undefined, id: string | null | undefined, createdAt: Date | null | undefined, createdAtLte: Date | null | undefined, createdAtGte: Date | null | undefined, updatedAt: Date | null | undefined, updatedAtLte: Date | null | undefined, updatedAtGte: Date | null | undefined, name: string | null | undefined, path: string | null | undefined, parentFolderId: number | null | undefined): Observable<CollectionResponseFolder> {
			return this.http.get<CollectionResponseFolder>(this.baseUri + 'files/v3/folders/search?' + properties?.map(z => `properties=${encodeURIComponent(z)}`).join('&') + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&before=' + (before == null ? '' : encodeURIComponent(before)) + '&limit=' + limit + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&createdAt=' + createdAt?.toISOString() + '&createdAtLte=' + createdAtLte?.toISOString() + '&createdAtGte=' + createdAtGte?.toISOString() + '&updatedAt=' + updatedAt?.toISOString() + '&updatedAtLte=' + updatedAtLte?.toISOString() + '&updatedAtGte=' + updatedAtGte?.toISOString() + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&path=' + (path == null ? '' : encodeURIComponent(path)) + '&parentFolderId=' + parentFolderId, {});
		}

		/**
		 * Update folder properties
		 * Update properties of folder by given ID. This action happens asynchronously and will update all of the folder's children as well.
		 * Post files/v3/folders/update/async
		 * @param {FolderUpdateInput} requestBody Properties to change in the folder
		 * @return {void} 
		 */
		Post_SlashfilesSlashv3SlashfoldersSlashupdateSlashasync_updateProperties(requestBody: FolderUpdateInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'files/v3/folders/update/async', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Check folder update status.
		 * Check status of folder update. Folder updates happen asynchronously.
		 * Get files/v3/folders/update/async/tasks/{taskId}/status
		 * @param {string} taskId TaskId of folder update
		 * @return {FolderActionResponse} successful operation
		 */
		Get_SlashfilesSlashv3SlashfoldersSlashupdateSlashasyncSlashtasksSlashtaskIdSlashstatus_checkUpdateStatus(taskId: string): Observable<FolderActionResponse> {
			return this.http.get<FolderActionResponse>(this.baseUri + 'files/v3/folders/update/async/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/status', {});
		}

		/**
		 * Delete folder.
		 * Delete folder by ID.
		 * Delete files/v3/folders/{folderId}
		 * @param {string} folderId ID of folder to delete.
		 * @return {void} 
		 */
		Delete_SlashfilesSlashv3SlashfoldersSlashfolderId_archive(folderId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'files/v3/folders/' + (folderId == null ? '' : encodeURIComponent(folderId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get folder
		 * Get folder by ID
		 * Get files/v3/folders/{folderId}
		 * @param {string} folderId ID of desired folder
		 * @param {Array<string>} properties Properties to set on returned folder.
		 * @return {Folder} successful operation
		 */
		Get_SlashfilesSlashv3SlashfoldersSlashfolderId_getById(folderId: string, properties: Array<string> | null | undefined): Observable<Folder> {
			return this.http.get<Folder>(this.baseUri + 'files/v3/folders/' + (folderId == null ? '' : encodeURIComponent(folderId)) + '&' + properties?.map(z => `properties=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Delete folder.
		 * Delete folder by path.
		 * Delete files/v3/folders/{folderPath}
		 * @param {string} folderPath Path of folder to delete
		 * @return {void} 
		 */
		Delete_SlashfilesSlashv3SlashfoldersSlashfolderPath_archiveByPath(folderPath: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'files/v3/folders/' + (folderPath == null ? '' : encodeURIComponent(folderPath)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get folder.
		 * Get folder by path.
		 * Get files/v3/folders/{folderPath}
		 * @param {string} folderPath Path of desired folder.
		 * @param {Array<string>} properties Properties to set on returned folder.
		 * @return {Folder} successful operation
		 */
		Get_SlashfilesSlashv3SlashfoldersSlashfolderPath_getByPath(folderPath: string, properties: Array<string> | null | undefined): Observable<Folder> {
			return this.http.get<Folder>(this.baseUri + 'files/v3/folders/' + (folderPath == null ? '' : encodeURIComponent(folderPath)) + '&' + properties?.map(z => `properties=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export enum Get_SlashfilesSlashv3SlashfilesSlashfileIdSlashsigned_url_getSignedUrlSize { thumb = 'thumb', icon = 'icon', medium = 'medium', preview = 'preview' }

}

