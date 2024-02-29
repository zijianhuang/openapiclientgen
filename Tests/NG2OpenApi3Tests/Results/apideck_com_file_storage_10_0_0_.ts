import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BadRequestResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface BadRequestResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateBadRequestResponseFormGroup() {
		return new FormGroup<BadRequestResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CopyFolderRequest {

		/** A unique identifier for an object. */
		id?: string | null;

		/** The name of the folder. */
		name?: string | null;

		/**
		 * The parent folder to create the new file within.
		 * Required
		 */
		parent_folder_id: string;
	}
	export interface CopyFolderRequestFormProperties {

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** The name of the folder. */
		name: FormControl<string | null | undefined>,

		/**
		 * The parent folder to create the new file within.
		 * Required
		 */
		parent_folder_id: FormControl<string | null | undefined>,
	}
	export function CreateCopyFolderRequestFormGroup() {
		return new FormGroup<CopyFolderRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent_folder_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDriveGroupResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreateDriveGroupResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateDriveGroupResponseFormGroup() {
		return new FormGroup<CreateDriveGroupResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnifiedId {

		/**
		 * The unique identifier of the resource
		 * Required
		 */
		id: string;
	}
	export interface UnifiedIdFormProperties {

		/**
		 * The unique identifier of the resource
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateUnifiedIdFormGroup() {
		return new FormGroup<UnifiedIdFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDriveResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreateDriveResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateDriveResponseFormGroup() {
		return new FormGroup<CreateDriveResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateFileRequest {

		/** Optional description of the file. */
		description?: string | null;

		/** ID of the drive to upload to. */
		drive_id?: string | null;

		/**
		 * The name of the file.
		 * Required
		 */
		name: string;

		/**
		 * The parent folder to create the new file within.
		 * Required
		 */
		parent_folder_id: string;
	}
	export interface CreateFileRequestFormProperties {

		/** Optional description of the file. */
		description: FormControl<string | null | undefined>,

		/** ID of the drive to upload to. */
		drive_id: FormControl<string | null | undefined>,

		/**
		 * The name of the file.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The parent folder to create the new file within.
		 * Required
		 */
		parent_folder_id: FormControl<string | null | undefined>,
	}
	export function CreateCreateFileRequestFormGroup() {
		return new FormGroup<CreateFileRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			drive_id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parent_folder_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateFileResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreateFileResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateFileResponseFormGroup() {
		return new FormGroup<CreateFileResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateFolderRequest {

		/** Optional description of the folder. */
		description?: string | null;

		/** ID of the drive to create the folder in. */
		drive_id?: string | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/**
		 * The name of the folder.
		 * Required
		 */
		name: string;

		/**
		 * The parent folder to create the new file within.
		 * Required
		 */
		parent_folder_id: string;
	}
	export interface CreateFolderRequestFormProperties {

		/** Optional description of the folder. */
		description: FormControl<string | null | undefined>,

		/** ID of the drive to create the folder in. */
		drive_id: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the folder.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The parent folder to create the new file within.
		 * Required
		 */
		parent_folder_id: FormControl<string | null | undefined>,
	}
	export function CreateCreateFolderRequestFormGroup() {
		return new FormGroup<CreateFolderRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			drive_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parent_folder_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateFolderResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreateFolderResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateFolderResponseFormGroup() {
		return new FormGroup<CreateFolderResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSharedLinkResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreateSharedLinkResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateSharedLinkResponseFormGroup() {
		return new FormGroup<CreateSharedLinkResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUploadSessionRequest {

		/** ID of the drive to upload to. */
		drive_id?: string | null;

		/**
		 * The name of the file.
		 * Required
		 */
		name: string;

		/**
		 * The parent folder to create the new file within.
		 * Required
		 */
		parent_folder_id: string;

		/**
		 * The size of the file in bytes
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		size: number;
	}
	export interface CreateUploadSessionRequestFormProperties {

		/** ID of the drive to upload to. */
		drive_id: FormControl<string | null | undefined>,

		/**
		 * The name of the file.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The parent folder to create the new file within.
		 * Required
		 */
		parent_folder_id: FormControl<string | null | undefined>,

		/**
		 * The size of the file in bytes
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		size: FormControl<number | null | undefined>,
	}
	export function CreateCreateUploadSessionRequestFormGroup() {
		return new FormGroup<CreateUploadSessionRequestFormProperties>({
			drive_id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parent_folder_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUploadSessionResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface CreateUploadSessionResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateCreateUploadSessionResponseFormGroup() {
		return new FormGroup<CreateUploadSessionResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** When custom mappings are configured on the resource, the result is included here. */
	export interface CustomMappings {
	}

	/** When custom mappings are configured on the resource, the result is included here. */
	export interface CustomMappingsFormProperties {
	}
	export function CreateCustomMappingsFormGroup() {
		return new FormGroup<CustomMappingsFormProperties>({
		});

	}

	export interface DeleteDriveGroupResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface DeleteDriveGroupResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteDriveGroupResponseFormGroup() {
		return new FormGroup<DeleteDriveGroupResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDriveResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface DeleteDriveResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteDriveResponseFormGroup() {
		return new FormGroup<DeleteDriveResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteFileResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface DeleteFileResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteFileResponseFormGroup() {
		return new FormGroup<DeleteFileResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteFolderResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface DeleteFolderResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteFolderResponseFormGroup() {
		return new FormGroup<DeleteFolderResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSharedLinkResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface DeleteSharedLinkResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteSharedLinkResponseFormGroup() {
		return new FormGroup<DeleteSharedLinkResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteUploadSessionResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface DeleteUploadSessionResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateDeleteUploadSessionResponseFormGroup() {
		return new FormGroup<DeleteUploadSessionResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Drive {

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** A description of the object. */
		description?: string | null;

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: string;

		/**
		 * The name of the drive
		 * Required
		 */
		name: string;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface DriveFormProperties {

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** A description of the object. */
		description: FormControl<string | null | undefined>,

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the drive
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateDriveFormGroup() {
		return new FormGroup<DriveFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DriveGroup {

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** A description of the object. */
		description?: string | null;

		/** The display name of the drive group */
		display_name?: string | null;

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: string;

		/**
		 * The name of the drive group
		 * Required
		 */
		name: string;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface DriveGroupFormProperties {

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** A description of the object. */
		description: FormControl<string | null | undefined>,

		/** The display name of the drive group */
		display_name: FormControl<string | null | undefined>,

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the drive group
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateDriveGroupFormGroup() {
		return new FormGroup<DriveGroupFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DriveGroupsFilter {

		/** ID of the drive group to filter on */
		parent_group_id?: string | null;
	}
	export interface DriveGroupsFilterFormProperties {

		/** ID of the drive group to filter on */
		parent_group_id: FormControl<string | null | undefined>,
	}
	export function CreateDriveGroupsFilterFormGroup() {
		return new FormGroup<DriveGroupsFilterFormProperties>({
			parent_group_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DrivesFilter {

		/** ID of the drive group to filter on */
		group_id?: string | null;
	}
	export interface DrivesFilterFormProperties {

		/** ID of the drive group to filter on */
		group_id: FormControl<string | null | undefined>,
	}
	export function CreateDrivesFilterFormGroup() {
		return new FormGroup<DrivesFilterFormProperties>({
			group_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FileStorageEventType { '*' = '*', 'file-storage.file.created' = 'file-storage.file.created', 'file-storage.file.updated' = 'file-storage.file.updated', 'file-storage.file.deleted' = 'file-storage.file.deleted' }

	export interface FileStorageWebhookEvent {
	}
	export interface FileStorageWebhookEventFormProperties {
	}
	export function CreateFileStorageWebhookEventFormGroup() {
		return new FormGroup<FileStorageWebhookEventFormProperties>({
		});

	}


	/** The type of resource. Could be file, folder or url */
	export enum FileType { file = 'file', folder = 'folder', url = 'url' }

	export interface FilesFilter {

		/** ID of the drive to filter on */
		drive_id?: string | null;

		/** ID of the folder to filter on. The root folder has an alias "root" */
		folder_id?: string | null;

		/** Only return files and folders that are shared */
		shared?: boolean | null;
	}
	export interface FilesFilterFormProperties {

		/** ID of the drive to filter on */
		drive_id: FormControl<string | null | undefined>,

		/** ID of the folder to filter on. The root folder has an alias "root" */
		folder_id: FormControl<string | null | undefined>,

		/** Only return files and folders that are shared */
		shared: FormControl<boolean | null | undefined>,
	}
	export function CreateFilesFilterFormGroup() {
		return new FormGroup<FilesFilterFormProperties>({
			drive_id: new FormControl<string | null | undefined>(undefined),
			folder_id: new FormControl<string | null | undefined>(undefined),
			shared: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface FilesSearch {

		/** ID of the drive to filter on */
		drive_id?: string | null;

		/**
		 * The query to search for. May match across multiple fields.
		 * Required
		 */
		query: string;
	}
	export interface FilesSearchFormProperties {

		/** ID of the drive to filter on */
		drive_id: FormControl<string | null | undefined>,

		/**
		 * The query to search for. May match across multiple fields.
		 * Required
		 */
		query: FormControl<string | null | undefined>,
	}
	export function CreateFilesSearchFormGroup() {
		return new FormGroup<FilesSearchFormProperties>({
			drive_id: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FilesSort {

		/** The field on which to sort the Files */
		by?: FilesSortBy | null;

		/** The direction in which to sort the results */
		direction?: FilesSortDirection | null;
	}
	export interface FilesSortFormProperties {

		/** The field on which to sort the Files */
		by: FormControl<FilesSortBy | null | undefined>,

		/** The direction in which to sort the results */
		direction: FormControl<FilesSortDirection | null | undefined>,
	}
	export function CreateFilesSortFormGroup() {
		return new FormGroup<FilesSortFormProperties>({
			by: new FormControl<FilesSortBy | null | undefined>(undefined),
			direction: new FormControl<FilesSortDirection | null | undefined>(undefined),
		});

	}

	export enum FilesSortBy { updated_at = 'updated_at', name = 'name' }

	export enum FilesSortDirection { asc = 'asc', desc = 'desc' }

	export interface Folder {

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** Optional description of the folder */
		description?: string | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/**
		 * The name of the folder
		 * Required
		 */
		name: string;
		owner?: Owner;

		/**
		 * The parent folders of the file, starting from the root
		 * Required
		 */
		parent_folders: Array<LinkedFolder>;

		/** Whether the list of parent folder is complete. Some connectors only return the direct parent of a folder */
		parent_folders_complete?: boolean | null;

		/** The full path of the folder (includes the folder name) */
		path?: string | null;

		/**
		 * The size of the folder in bytes
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		size?: number | null;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface FolderFormProperties {

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Optional description of the folder */
		description: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the folder
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Whether the list of parent folder is complete. Some connectors only return the direct parent of a folder */
		parent_folders_complete: FormControl<boolean | null | undefined>,

		/** The full path of the folder (includes the folder name) */
		path: FormControl<string | null | undefined>,

		/**
		 * The size of the folder in bytes
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		size: FormControl<number | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateFolderFormGroup() {
		return new FormGroup<FolderFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parent_folders_complete: new FormControl<boolean | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Owner {

		/** Email of the owner */
		email?: string | null;

		/** ID of the owner */
		id?: string | null;

		/** Name of the owner */
		name?: string | null;
	}
	export interface OwnerFormProperties {

		/** Email of the owner */
		email: FormControl<string | null | undefined>,

		/** ID of the owner */
		id: FormControl<string | null | undefined>,

		/** Name of the owner */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOwnerFormGroup() {
		return new FormGroup<OwnerFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LinkedFolder {

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: string;

		/** The name of the folder */
		name?: string | null;
	}
	export interface LinkedFolderFormProperties {

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The name of the folder */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLinkedFolderFormGroup() {
		return new FormGroup<LinkedFolderFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDriveGroupResponse {

		/** Required */
		data: DriveGroup;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetDriveGroupResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetDriveGroupResponseFormGroup() {
		return new FormGroup<GetDriveGroupResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDriveGroupsResponse {

		/** Required */
		data: Array<DriveGroup>;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetDriveGroupsResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetDriveGroupsResponseFormGroup() {
		return new FormGroup<GetDriveGroupsResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Links to navigate to previous or next pages through the API */
	export interface Links {

		/** Link to navigate to the current page through the API */
		current?: string | null;

		/** Link to navigate to the previous page through the API */
		next?: string | null;

		/** Link to navigate to the previous page through the API */
		previous?: string | null;
	}

	/** Links to navigate to previous or next pages through the API */
	export interface LinksFormProperties {

		/** Link to navigate to the current page through the API */
		current: FormControl<string | null | undefined>,

		/** Link to navigate to the previous page through the API */
		next: FormControl<string | null | undefined>,

		/** Link to navigate to the previous page through the API */
		previous: FormControl<string | null | undefined>,
	}
	export function CreateLinksFormGroup() {
		return new FormGroup<LinksFormProperties>({
			current: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response metadata */
	export interface Meta {

		/** Cursors to navigate to previous or next pages through the API */
		cursors?: MetaCursors;

		/**
		 * Number of items returned in the data property of the response
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		items_on_page?: number | null;
	}

	/** Response metadata */
	export interface MetaFormProperties {

		/**
		 * Number of items returned in the data property of the response
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		items_on_page: FormControl<number | null | undefined>,
	}
	export function CreateMetaFormGroup() {
		return new FormGroup<MetaFormProperties>({
			items_on_page: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MetaCursors {

		/** Cursor to navigate to the current page of results through the API */
		current?: string | null;

		/** Cursor to navigate to the next page of results through the API */
		next?: string | null;

		/** Cursor to navigate to the previous page of results through the API */
		previous?: string | null;
	}
	export interface MetaCursorsFormProperties {

		/** Cursor to navigate to the current page of results through the API */
		current: FormControl<string | null | undefined>,

		/** Cursor to navigate to the next page of results through the API */
		next: FormControl<string | null | undefined>,

		/** Cursor to navigate to the previous page of results through the API */
		previous: FormControl<string | null | undefined>,
	}
	export function CreateMetaCursorsFormGroup() {
		return new FormGroup<MetaCursorsFormProperties>({
			current: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDriveResponse {

		/** Required */
		data: Drive;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetDriveResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetDriveResponseFormGroup() {
		return new FormGroup<GetDriveResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDrivesResponse {

		/** Required */
		data: Array<Drive>;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetDrivesResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetDrivesResponseFormGroup() {
		return new FormGroup<GetDrivesResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetFileResponse {

		/** Required */
		data: UnifiedFile;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetFileResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetFileResponseFormGroup() {
		return new FormGroup<GetFileResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnifiedFile {

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The user who created the object. */
		created_by?: string | null;

		/** When custom mappings are configured on the resource, the result is included here. */
		custom_mappings?: CustomMappings;

		/** Optional description of the file */
		description?: string | null;

		/** Whether the current user can download this file */
		downloadable?: boolean | null;

		/** The third-party API ID of original entity */
		downstream_id?: string | null;

		/** The available file formats when exporting this file. */
		export_formats?: Array<string>;

		/** Whether the current file is exportable to other file formats. This property is relevant for proprietary file formats such as Google Docs or Dropbox Paper. */
		exportable?: boolean | null;

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: string;

		/** The MIME type of the file. */
		mime_type?: string | null;

		/**
		 * The name of the file
		 * Required
		 */
		name: string;
		owner?: Owner;

		/** The parent folders of the file, starting from the root */
		parent_folders?: Array<LinkedFolder>;

		/** Whether the list of parent folders is complete. Some connectors only return the direct parent of a file */
		parent_folders_complete?: boolean | null;

		/** The full path of the file or folder (includes the file name) */
		path?: string | null;

		/** Permissions the current user has on this file. */
		permissions?: UnifiedFilePermissions;

		/**
		 * The size of the file in bytes
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		size?: number | null;

		/**
		 * The type of resource. Could be file, folder or url
		 * Required
		 */
		type: FileType;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The user who last updated the object. */
		updated_by?: string | null;
	}
	export interface UnifiedFileFormProperties {

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The user who created the object. */
		created_by: FormControl<string | null | undefined>,

		/** Optional description of the file */
		description: FormControl<string | null | undefined>,

		/** Whether the current user can download this file */
		downloadable: FormControl<boolean | null | undefined>,

		/** The third-party API ID of original entity */
		downstream_id: FormControl<string | null | undefined>,

		/** Whether the current file is exportable to other file formats. This property is relevant for proprietary file formats such as Google Docs or Dropbox Paper. */
		exportable: FormControl<boolean | null | undefined>,

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The MIME type of the file. */
		mime_type: FormControl<string | null | undefined>,

		/**
		 * The name of the file
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Whether the list of parent folders is complete. Some connectors only return the direct parent of a file */
		parent_folders_complete: FormControl<boolean | null | undefined>,

		/** The full path of the file or folder (includes the file name) */
		path: FormControl<string | null | undefined>,

		/**
		 * The size of the file in bytes
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		size: FormControl<number | null | undefined>,

		/**
		 * The type of resource. Could be file, folder or url
		 * Required
		 */
		type: FormControl<FileType | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The user who last updated the object. */
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateUnifiedFileFormGroup() {
		return new FormGroup<UnifiedFileFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			downloadable: new FormControl<boolean | null | undefined>(undefined),
			downstream_id: new FormControl<string | null | undefined>(undefined),
			exportable: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mime_type: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parent_folders_complete: new FormControl<boolean | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<FileType | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnifiedFilePermissions {

		/** Whether the current user can download this file. */
		download?: boolean | null;
	}
	export interface UnifiedFilePermissionsFormProperties {

		/** Whether the current user can download this file. */
		download: FormControl<boolean | null | undefined>,
	}
	export function CreateUnifiedFilePermissionsFormGroup() {
		return new FormGroup<UnifiedFilePermissionsFormProperties>({
			download: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetFilesResponse {

		/** Required */
		data: Array<UnifiedFile>;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetFilesResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetFilesResponseFormGroup() {
		return new FormGroup<GetFilesResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetFolderResponse {

		/** Required */
		data: Folder;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetFolderResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetFolderResponseFormGroup() {
		return new FormGroup<GetFolderResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetFoldersResponse {

		/** Required */
		data: Array<Folder>;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetFoldersResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetFoldersResponseFormGroup() {
		return new FormGroup<GetFoldersResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSharedLinkResponse {

		/** Required */
		data: SharedLink;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetSharedLinkResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetSharedLinkResponseFormGroup() {
		return new FormGroup<GetSharedLinkResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SharedLink {

		/** The date and time when the object was created. */
		created_at?: Date | null;

		/** The URL that can be used to download the file. */
		download_url?: string | null;
		expires_at?: Date | null;

		/** Optional password for the shared link. */
		password?: string | null;

		/** Indicated if the shared link is password protected. */
		password_protected?: boolean | null;

		/** The scope of the shared link. */
		scope?: SharedLinkScope | null;
		target?: SharedLinkTarget;

		/**
		 * The ID of the file or folder to link.
		 * Required
		 */
		target_id: string;

		/** The date and time when the object was last updated. */
		updated_at?: Date | null;

		/** The URL that can be used to view the file. */
		url?: string | null;
	}
	export interface SharedLinkFormProperties {

		/** The date and time when the object was created. */
		created_at: FormControl<Date | null | undefined>,

		/** The URL that can be used to download the file. */
		download_url: FormControl<string | null | undefined>,
		expires_at: FormControl<Date | null | undefined>,

		/** Optional password for the shared link. */
		password: FormControl<string | null | undefined>,

		/** Indicated if the shared link is password protected. */
		password_protected: FormControl<boolean | null | undefined>,

		/** The scope of the shared link. */
		scope: FormControl<SharedLinkScope | null | undefined>,

		/**
		 * The ID of the file or folder to link.
		 * Required
		 */
		target_id: FormControl<string | null | undefined>,

		/** The date and time when the object was last updated. */
		updated_at: FormControl<Date | null | undefined>,

		/** The URL that can be used to view the file. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSharedLinkFormGroup() {
		return new FormGroup<SharedLinkFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			download_url: new FormControl<string | null | undefined>(undefined),
			expires_at: new FormControl<Date | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			password_protected: new FormControl<boolean | null | undefined>(undefined),
			scope: new FormControl<SharedLinkScope | null | undefined>(undefined),
			target_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SharedLinkScope { public = 'public', company = 'company' }

	export interface SharedLinkTarget {

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: string;

		/** The name of the file */
		name?: string | null;

		/** The type of resource. Could be file, folder or url */
		type?: FileType | null;
	}
	export interface SharedLinkTargetFormProperties {

		/**
		 * A unique identifier for an object.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The name of the file */
		name: FormControl<string | null | undefined>,

		/** The type of resource. Could be file, folder or url */
		type: FormControl<FileType | null | undefined>,
	}
	export function CreateSharedLinkTargetFormGroup() {
		return new FormGroup<SharedLinkTargetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<FileType | null | undefined>(undefined),
		});

	}

	export interface GetSharedLinksResponse {

		/** Required */
		data: Array<SharedLink>;

		/** Links to navigate to previous or next pages through the API */
		links?: Links;

		/** Response metadata */
		meta?: Meta;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetSharedLinksResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetSharedLinksResponseFormGroup() {
		return new FormGroup<GetSharedLinksResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetUploadSessionResponse {

		/** Required */
		data: UploadSession;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface GetUploadSessionResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateGetUploadSessionResponseFormGroup() {
		return new FormGroup<GetUploadSessionResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UploadSession {
		expires_at?: Date | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/** Indicates if parts of the file can uploaded in parallel. */
		parallel_upload_supported?: boolean | null;

		/**
		 * Size in bytes of each part of the file that you will upload. Uploaded parts need to be this size for the upload to be successful.
		 * Type: double
		 */
		part_size?: number | null;

		/** Indicates if the upload session was completed successfully. */
		success?: boolean | null;

		/** The range of bytes that was successfully uploaded. */
		uploaded_byte_range?: string | null;
	}
	export interface UploadSessionFormProperties {
		expires_at: FormControl<Date | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** Indicates if parts of the file can uploaded in parallel. */
		parallel_upload_supported: FormControl<boolean | null | undefined>,

		/**
		 * Size in bytes of each part of the file that you will upload. Uploaded parts need to be this size for the upload to be successful.
		 * Type: double
		 */
		part_size: FormControl<number | null | undefined>,

		/** Indicates if the upload session was completed successfully. */
		success: FormControl<boolean | null | undefined>,

		/** The range of bytes that was successfully uploaded. */
		uploaded_byte_range: FormControl<string | null | undefined>,
	}
	export function CreateUploadSessionFormGroup() {
		return new FormGroup<UploadSessionFormProperties>({
			expires_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			parallel_upload_supported: new FormControl<boolean | null | undefined>(undefined),
			part_size: new FormControl<number | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
			uploaded_byte_range: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NotFoundResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface NotFoundResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateNotFoundResponseFormGroup() {
		return new FormGroup<NotFoundResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NotImplementedResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface NotImplementedResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateNotImplementedResponseFormGroup() {
		return new FormGroup<NotImplementedResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PassThroughQuery {

		/** All passthrough query parameters are passed along to the connector as is (?pass_through[search]=leads becomes ?search=leads) */
		example_downstream_property?: string | null;
	}
	export interface PassThroughQueryFormProperties {

		/** All passthrough query parameters are passed along to the connector as is (?pass_through[search]=leads becomes ?search=leads) */
		example_downstream_property: FormControl<string | null | undefined>,
	}
	export function CreatePassThroughQueryFormGroup() {
		return new FormGroup<PassThroughQueryFormProperties>({
			example_downstream_property: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaymentRequiredResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string | null;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface PaymentRequiredResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreatePaymentRequiredResponseFormGroup() {
		return new FormGroup<PaymentRequiredResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The direction in which to sort the results */
	export enum SortDirection { asc = 'asc', desc = 'desc' }

	export interface TooManyRequestsResponse {
		detail?: TooManyRequestsResponseDetail;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 6585) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface TooManyRequestsResponseFormProperties {

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 6585) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateTooManyRequestsResponseFormGroup() {
		return new FormGroup<TooManyRequestsResponseFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TooManyRequestsResponseDetail {
		context?: string | null;
		error?: string | null;
	}
	export interface TooManyRequestsResponseDetailFormProperties {
		context: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,
	}
	export function CreateTooManyRequestsResponseDetailFormGroup() {
		return new FormGroup<TooManyRequestsResponseDetailFormProperties>({
			context: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnauthorizedResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string | null;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface UnauthorizedResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateUnauthorizedResponseFormGroup() {
		return new FormGroup<UnauthorizedResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnexpectedErrorResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface UnexpectedErrorResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateUnexpectedErrorResponseFormGroup() {
		return new FormGroup<UnexpectedErrorResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnprocessableResponse {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail?: string | null;

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error?: string | null;

		/** A human-readable message providing more details about the error. */
		message?: string | null;

		/** Link to documentation of error type */
		ref?: string | null;

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code?: number | null;

		/** The type of error returned */
		type_name?: string | null;
	}
	export interface UnprocessableResponseFormProperties {

		/** Contains parameter or domain specific information related to the error and why it occurred. */
		detail: FormControl<string | null | undefined>,

		/** Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) */
		error: FormControl<string | null | undefined>,

		/** A human-readable message providing more details about the error. */
		message: FormControl<string | null | undefined>,

		/** Link to documentation of error type */
		ref: FormControl<string | null | undefined>,

		/**
		 * HTTP status code
		 * Type: double
		 */
		status_code: FormControl<number | null | undefined>,

		/** The type of error returned */
		type_name: FormControl<string | null | undefined>,
	}
	export function CreateUnprocessableResponseFormGroup() {
		return new FormGroup<UnprocessableResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ref: new FormControl<string | null | undefined>(undefined),
			status_code: new FormControl<number | null | undefined>(undefined),
			type_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDriveGroupResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface UpdateDriveGroupResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDriveGroupResponseFormGroup() {
		return new FormGroup<UpdateDriveGroupResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDriveResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface UpdateDriveResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDriveResponseFormGroup() {
		return new FormGroup<UpdateDriveResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateFileRequest {

		/** Optional description of the file. */
		description?: string | null;

		/** The name of the file. */
		name?: string | null;

		/** The parent folder to create the new file within. */
		parent_folder_id?: string | null;
	}
	export interface UpdateFileRequestFormProperties {

		/** Optional description of the file. */
		description: FormControl<string | null | undefined>,

		/** The name of the file. */
		name: FormControl<string | null | undefined>,

		/** The parent folder to create the new file within. */
		parent_folder_id: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFileRequestFormGroup() {
		return new FormGroup<UpdateFileRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent_folder_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFileResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface UpdateFileResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFileResponseFormGroup() {
		return new FormGroup<UpdateFileResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateFolderRequest {

		/** Optional description of the folder. */
		description?: string | null;

		/** A unique identifier for an object. */
		id?: string | null;

		/** The name of the folder. */
		name?: string | null;

		/** The parent folder to create the new file within. */
		parent_folder_id?: string | null;
	}
	export interface UpdateFolderRequestFormProperties {

		/** Optional description of the folder. */
		description: FormControl<string | null | undefined>,

		/** A unique identifier for an object. */
		id: FormControl<string | null | undefined>,

		/** The name of the folder. */
		name: FormControl<string | null | undefined>,

		/** The parent folder to create the new file within. */
		parent_folder_id: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFolderRequestFormGroup() {
		return new FormGroup<UpdateFolderRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent_folder_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFolderResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface UpdateFolderResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFolderResponseFormGroup() {
		return new FormGroup<UpdateFolderResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSharedLinkResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface UpdateSharedLinkResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateSharedLinkResponseFormGroup() {
		return new FormGroup<UpdateSharedLinkResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateUploadSessionResponse {

		/** Required */
		data: UnifiedId;

		/**
		 * Operation performed
		 * Required
		 */
		operation: string;

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: string;

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: string;

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: string;

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: number;
	}
	export interface UpdateUploadSessionResponseFormProperties {

		/**
		 * Operation performed
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unified API resource name
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Apideck ID of service provider
		 * Required
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * HTTP Response Status Code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status_code: FormControl<number | null | undefined>,
	}
	export function CreateUpdateUploadSessionResponseFormGroup() {
		return new FormGroup<UpdateUploadSessionResponseFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List DriveGroups
		 * List DriveGroups
		 * Get file-storage/drive-groups
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {DriveGroupsFilter} filter Apply filters
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetDriveGroupsResponse} DriveGroups
		 */
		DriveGroupsAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, filter: DriveGroupsFilter | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetDriveGroupsResponse> {
			return this.http.get<GetDriveGroupsResponse>(this.baseUri + 'file-storage/drive-groups?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&filter=' + filter + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create DriveGroup
		 * Create DriveGroup
		 * Post file-storage/drive-groups
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		DriveGroupsAdd(raw: boolean | null | undefined, requestBody: DriveGroup): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'file-storage/drive-groups?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete DriveGroup
		 * Delete DriveGroup
		 * Delete file-storage/drive-groups/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteDriveGroupResponse} DriveGroups
		 */
		DriveGroupsDelete(id: string, raw: boolean | null | undefined): Observable<DeleteDriveGroupResponse> {
			return this.http.delete<DeleteDriveGroupResponse>(this.baseUri + 'file-storage/drive-groups/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get DriveGroup
		 * Get DriveGroup
		 * Get file-storage/drive-groups/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetDriveGroupResponse} DriveGroups
		 */
		DriveGroupsOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetDriveGroupResponse> {
			return this.http.get<GetDriveGroupResponse>(this.baseUri + 'file-storage/drive-groups/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update DriveGroup
		 * Update DriveGroup
		 * Patch file-storage/drive-groups/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateDriveGroupResponse} DriveGroups
		 */
		DriveGroupsUpdate(id: string, raw: boolean | null | undefined, requestBody: DriveGroup): Observable<UpdateDriveGroupResponse> {
			return this.http.patch<UpdateDriveGroupResponse>(this.baseUri + 'file-storage/drive-groups/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Drives
		 * List Drives
		 * Get file-storage/drives
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {DrivesFilter} filter Apply filters
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetDrivesResponse} Drives
		 */
		DrivesAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, filter: DrivesFilter | null | undefined, fields: string | null | undefined): Observable<GetDrivesResponse> {
			return this.http.get<GetDrivesResponse>(this.baseUri + 'file-storage/drives?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&filter=' + filter + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Drive
		 * Create Drive
		 * Post file-storage/drives
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		DrivesAdd(raw: boolean | null | undefined, requestBody: Drive): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'file-storage/drives?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Drive
		 * Delete Drive
		 * Delete file-storage/drives/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteDriveResponse} Drives
		 */
		DrivesDelete(id: string, raw: boolean | null | undefined): Observable<DeleteDriveResponse> {
			return this.http.delete<DeleteDriveResponse>(this.baseUri + 'file-storage/drives/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Drive
		 * Get Drive
		 * Get file-storage/drives/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetDriveResponse} Drives
		 */
		DrivesOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetDriveResponse> {
			return this.http.get<GetDriveResponse>(this.baseUri + 'file-storage/drives/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Drive
		 * Update Drive
		 * Patch file-storage/drives/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateDriveResponse} Drives
		 */
		DrivesUpdate(id: string, raw: boolean | null | undefined, requestBody: Drive): Observable<UpdateDriveResponse> {
			return this.http.patch<UpdateDriveResponse>(this.baseUri + 'file-storage/drives/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Files
		 * List Files
		 * Get file-storage/files
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {FilesFilter} filter Apply filters
		 * @param {FilesSort} sort Apply sorting
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetFilesResponse} Files
		 */
		FilesAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, filter: FilesFilter | null | undefined, sort: FilesSort | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetFilesResponse> {
			return this.http.get<GetFilesResponse>(this.baseUri + 'file-storage/files?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&filter=' + filter + '&sort=' + sort + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Search Files
		 * Search Files
		 * Post file-storage/files/search
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @return {GetFilesResponse} Files
		 */
		FilesSearch(pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, requestBody: FilesSearch): Observable<GetFilesResponse> {
			return this.http.post<GetFilesResponse>(this.baseUri + 'file-storage/files/search?pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete File
		 * Delete File
		 * Delete file-storage/files/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteFileResponse} Files
		 */
		FilesDelete(id: string, raw: boolean | null | undefined): Observable<DeleteFileResponse> {
			return this.http.delete<DeleteFileResponse>(this.baseUri + 'file-storage/files/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get File
		 * Get File
		 * Get file-storage/files/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetFileResponse} File
		 */
		FilesOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetFileResponse> {
			return this.http.get<GetFileResponse>(this.baseUri + 'file-storage/files/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Rename or move File
		 * Rename or move File
		 * Patch file-storage/files/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateFileResponse} Files
		 */
		FilesUpdate(id: string, raw: boolean | null | undefined, requestBody: UpdateFileRequest): Observable<UpdateFileResponse> {
			return this.http.patch<UpdateFileResponse>(this.baseUri + 'file-storage/files/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Download File
		 * Download File
		 * Get file-storage/files/{id}/download
		 * @param {string} id ID of the record you are acting upon.
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {void} File Download
		 */
		FilesDownload(id: string, fields: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'file-storage/files/' + (id == null ? '' : encodeURIComponent(id)) + '/download&fields=' + (fields == null ? '' : encodeURIComponent(fields)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Export File
		 * Export File
		 * Get file-storage/files/{id}/export
		 * @param {string} id ID of the record you are acting upon.
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @param {string} format File format to export this file to. A list of available file formats for the current file is available as `export_formats` on the File resource.
		 * @return {void} File Download
		 */
		FilesExport(id: string, fields: string | null | undefined, format: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'file-storage/files/' + (id == null ? '' : encodeURIComponent(id)) + '/export&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&format=' + (format == null ? '' : encodeURIComponent(format)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create Folder
		 * Create Folder
		 * Post file-storage/folders
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {void} 
		 */
		FoldersAdd(raw: boolean | null | undefined, fields: string | null | undefined, requestBody: CreateFolderRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'file-storage/folders?raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Folder
		 * Delete Folder
		 * Delete file-storage/folders/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteFolderResponse} Folders
		 */
		FoldersDelete(id: string, raw: boolean | null | undefined): Observable<DeleteFolderResponse> {
			return this.http.delete<DeleteFolderResponse>(this.baseUri + 'file-storage/folders/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Folder
		 * Get Folder
		 * Get file-storage/folders/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetFolderResponse} Folders
		 */
		FoldersOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetFolderResponse> {
			return this.http.get<GetFolderResponse>(this.baseUri + 'file-storage/folders/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Rename or move Folder
		 * Rename or move Folder
		 * Patch file-storage/folders/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateFolderResponse} Folders
		 */
		FoldersUpdate(id: string, raw: boolean | null | undefined, requestBody: UpdateFolderRequest): Observable<UpdateFolderResponse> {
			return this.http.patch<UpdateFolderResponse>(this.baseUri + 'file-storage/folders/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Copy Folder
		 * Copy Folder
		 * Post file-storage/folders/{id}/copy
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {UpdateFolderResponse} Folders
		 */
		FoldersCopy(id: string, raw: boolean | null | undefined, fields: string | null | undefined, requestBody: CopyFolderRequest): Observable<UpdateFolderResponse> {
			return this.http.post<UpdateFolderResponse>(this.baseUri + 'file-storage/folders/' + (id == null ? '' : encodeURIComponent(id)) + '/copy&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List SharedLinks
		 * List SharedLinks
		 * Get file-storage/shared-links
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} cursor Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
		 * @param {number} limit Number of results to return. Minimum 1, Maximum 200, Default 20
		 *     Minimum: 1    Maximum: 200
		 * @param {PassThroughQuery} pass_through Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetSharedLinksResponse} Shared Links
		 */
		SharedLinksAll(raw: boolean | null | undefined, cursor: string | null | undefined, limit: number | null | undefined, pass_through: PassThroughQuery | null | undefined, fields: string | null | undefined): Observable<GetSharedLinksResponse> {
			return this.http.get<GetSharedLinksResponse>(this.baseUri + 'file-storage/shared-links?raw=' + raw + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&pass_through=' + pass_through + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Create Shared Link
		 * Create Shared Link
		 * Post file-storage/shared-links
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		SharedLinksAdd(raw: boolean | null | undefined, requestBody: SharedLink): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'file-storage/shared-links?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Shared Link
		 * Delete Shared Link
		 * Delete file-storage/shared-links/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteSharedLinkResponse} Shared Links
		 */
		SharedLinksDelete(id: string, raw: boolean | null | undefined): Observable<DeleteSharedLinkResponse> {
			return this.http.delete<DeleteSharedLinkResponse>(this.baseUri + 'file-storage/shared-links/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Shared Link
		 * Get Shared Link
		 * Get file-storage/shared-links/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetSharedLinkResponse} Shared Link
		 */
		SharedLinksOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetSharedLinkResponse> {
			return this.http.get<GetSharedLinkResponse>(this.baseUri + 'file-storage/shared-links/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Update Shared Link
		 * Update Shared Link
		 * Patch file-storage/shared-links/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {UpdateSharedLinkResponse} Shared Links
		 */
		SharedLinksUpdate(id: string, raw: boolean | null | undefined, requestBody: SharedLink): Observable<UpdateSharedLinkResponse> {
			return this.http.patch<UpdateSharedLinkResponse>(this.baseUri + 'file-storage/shared-links/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Start Upload Session
		 * Start an Upload Session. Upload sessions are used to upload large files, use the [Upload File](#operation/filesUpload) endpoint to upload smaller files (up to 100MB). Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).
		 * Post file-storage/upload-sessions
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		UploadSessionsAdd(raw: boolean | null | undefined, requestBody: CreateUploadSessionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'file-storage/upload-sessions?raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Abort Upload Session
		 * Abort Upload Session. Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).
		 * Delete file-storage/upload-sessions/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {DeleteUploadSessionResponse} UploadSessions
		 */
		UploadSessionsDelete(id: string, raw: boolean | null | undefined): Observable<DeleteUploadSessionResponse> {
			return this.http.delete<DeleteUploadSessionResponse>(this.baseUri + 'file-storage/upload-sessions/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw, {});
		}

		/**
		 * Get Upload Session
		 * Get Upload Session. Use the `part_size` to split your file into parts. Upload the parts to the [Upload part of File](#operation/uploadSessionsUpload) endpoint. Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).
		 * Get file-storage/upload-sessions/{id}
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @param {string} fields The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
		 * @return {GetUploadSessionResponse} UploadSessions
		 */
		UploadSessionsOne(id: string, raw: boolean | null | undefined, fields: string | null | undefined): Observable<GetUploadSessionResponse> {
			return this.http.get<GetUploadSessionResponse>(this.baseUri + 'file-storage/upload-sessions/' + (id == null ? '' : encodeURIComponent(id)) + '&raw=' + raw + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Finish Upload Session
		 * Finish Upload Session. Only call this endpoint after all File parts have been uploaded to [Upload part of File](#operation/uploadSessionsUpload). Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).
		 * Post file-storage/upload-sessions/{id}/finish
		 * @param {string} id ID of the record you are acting upon.
		 * @param {boolean} raw Include raw response. Mostly used for debugging purposes
		 * @return {void} 
		 */
		UploadSessionsFinish(id: string, raw: boolean | null | undefined, requestBody: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'file-storage/upload-sessions/' + (id == null ? '' : encodeURIComponent(id)) + '/finish&raw=' + raw, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

