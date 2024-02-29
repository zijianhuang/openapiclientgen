import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DataLakeStorageError {

		/** The service error response object. */
		error?: any;
	}
	export interface DataLakeStorageErrorFormProperties {

		/** The service error response object. */
		error: FormControl<any | null | undefined>,
	}
	export function CreateDataLakeStorageErrorFormGroup() {
		return new FormGroup<DataLakeStorageErrorFormProperties>({
			error: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface Filesystem {
		eTag?: string | null;
		lastModified?: string | null;
		name?: string | null;
	}
	export interface FilesystemFormProperties {
		eTag: FormControl<string | null | undefined>,
		lastModified: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateFilesystemFormGroup() {
		return new FormGroup<FilesystemFormProperties>({
			eTag: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FilesystemList {
		filesystems?: Array<Filesystem>;
	}
	export interface FilesystemListFormProperties {
	}
	export function CreateFilesystemListFormGroup() {
		return new FormGroup<FilesystemListFormProperties>({
		});

	}

	export interface Path {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		contentLength?: string | null;
		eTag?: string | null;
		group?: string | null;
		isDirectory?: boolean | null;
		lastModified?: string | null;
		name?: string | null;
		owner?: string | null;
		permissions?: string | null;
	}
	export interface PathFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		contentLength: FormControl<string | null | undefined>,
		eTag: FormControl<string | null | undefined>,
		group: FormControl<string | null | undefined>,
		isDirectory: FormControl<boolean | null | undefined>,
		lastModified: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
		permissions: FormControl<string | null | undefined>,
	}
	export function CreatePathFormGroup() {
		return new FormGroup<PathFormProperties>({
			contentLength: new FormControl<string | null | undefined>(undefined),
			eTag: new FormControl<string | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			isDirectory: new FormControl<boolean | null | undefined>(undefined),
			lastModified: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			permissions: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PathList {
		paths?: Array<Path>;
	}
	export interface PathListFormProperties {
	}
	export function CreatePathListFormGroup() {
		return new FormGroup<PathListFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List Filesystems
		 * List filesystems and their properties in given account.
		 * Get 
		 * @param {Filesystem_ListResource} resource The value must be "account" for all account operations.
		 * @param {string} prefix Filters results to filesystems within the specified prefix.
		 * @param {string} continuation The number of filesystems returned with each invocation is limited. If the number of filesystems to be returned exceeds this limit, a continuation token is returned in the response header x-ms-continuation. When a continuation token is  returned in the response, it must be specified in a subsequent invocation of the list operation to continue listing the filesystems.
		 * @param {number} maxResults An optional value that specifies the maximum number of items to return. If omitted or greater than 5,000, the response will include up to 5,000 items.
		 *     Minimum: 1
		 * @param {number} timeout An optional operation timeout value in seconds. The period begins when the request is received by the service. If the timeout value elapses before the operation completes, the operation fails.
		 *     Minimum: 1
		 * @return {FilesystemList} OK
		 */
		Filesystem_List(resource: Filesystem_ListResource, prefix: string | null | undefined, continuation: string | null | undefined, maxResults: number | null | undefined, timeout: number | null | undefined): Observable<FilesystemList> {
			return this.http.get<FilesystemList>(this.baseUri + '?resource=' + resource + '&prefix=' + (prefix == null ? '' : encodeURIComponent(prefix)) + '&continuation=' + (continuation == null ? '' : encodeURIComponent(continuation)) + '&maxResults=' + maxResults + '&timeout=' + timeout, {});
		}

		/**
		 * List Paths
		 * List filesystem paths and their properties.
		 * Get {filesystem}
		 * @param {string} directory Filters results to paths within the specified directory. An error occurs if the directory does not exist.
		 * @param {boolean} recursive If "true", all paths are listed; otherwise, only paths at the root of the filesystem are listed.  If "directory" is specified, the list will only include paths that share the same root.
		 * @param {string} continuation The number of paths returned with each invocation is limited. If the number of paths to be returned exceeds this limit, a continuation token is returned in the response header x-ms-continuation. When a continuation token is  returned in the response, it must be specified in a subsequent invocation of the list operation to continue listing the paths.
		 * @param {number} maxResults An optional value that specifies the maximum number of items to return. If omitted or greater than 5,000, the response will include up to 5,000 items.
		 *     Minimum: 1
		 * @param {boolean} upn Optional. Valid only when Hierarchical Namespace is enabled for the account. If "true", the user identity values returned in the owner and group fields of each list entry will be transformed from Azure Active Directory Object IDs to User Principal Names.  If "false", the values will be returned as Azure Active Directory Object IDs. The default value is false. Note that group and application Object IDs are not translated because they do not have unique friendly names.
		 * @return {PathList} Ok
		 */
		Path_List(directory: string | null | undefined, recursive: boolean, continuation: string | null | undefined, maxResults: number | null | undefined, upn: boolean | null | undefined): Observable<PathList> {
			return this.http.get<PathList>(this.baseUri + '{filesystem}?directory=' + (directory == null ? '' : encodeURIComponent(directory)) + '&recursive=' + recursive + '&continuation=' + (continuation == null ? '' : encodeURIComponent(continuation)) + '&maxResults=' + maxResults + '&upn=' + upn, {});
		}

		/**
		 * Create Filesystem
		 * Create a filesystem rooted at the specified location. If the filesystem already exists, the operation fails.  This operation does not support conditional HTTP requests.
		 * Put {filesystem}
		 * @return {void} 
		 */
		Filesystem_Create(): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{filesystem}', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Filesystem
		 * Marks the filesystem for deletion.  When a filesystem is deleted, a filesystem with the same identifier cannot be created for at least 30 seconds. While the filesystem is being deleted, attempts to create a filesystem with the same identifier will fail with status code 409 (Conflict), with the service returning additional error information indicating that the filesystem is being deleted. All other operations, including operations on any files or directories within the filesystem, will fail with status code 404 (Not Found) while the filesystem is being deleted. This operation supports conditional HTTP requests.  For more information, see [Specifying Conditional Headers for Blob Service Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
		 * Delete {filesystem}
		 * @return {void} 
		 */
		Filesystem_Delete(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{filesystem}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Set Filesystem Properties
		 * Set properties for the filesystem.  This operation supports conditional HTTP requests.  For more information, see [Specifying Conditional Headers for Blob Service Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
		 * Patch {filesystem}
		 * @return {void} Ok
		 */
		Filesystem_SetProperties(): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + '{filesystem}', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Read File
		 * Read the contents of a file.  For read operations, range requests are supported. This operation supports conditional HTTP requests.  For more information, see [Specifying Conditional Headers for Blob Service Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
		 * Get {filesystem}/{path}
		 * @return {string} Ok
		 */
		Path_Read(): Observable<string> {
			return this.http.get(this.baseUri + '{filesystem}/{path}', { responseType: 'text' });
		}

		/**
		 * Create File | Create Directory | Rename File | Rename Directory
		 * Create or rename a file or directory.    By default, the destination is overwritten and if the destination already exists and has a lease the lease is broken.  This operation supports conditional HTTP requests.  For more information, see [Specifying Conditional Headers for Blob Service Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).  To fail if the destination already exists, use a conditional request with If-None-Match: "*".
		 * Put {filesystem}/{path}
		 * @param {Path_CreateResource} resource Required only for Create File and Create Directory. The value must be "file" or "directory".
		 * @param {string} continuation Optional.  When renaming a directory, the number of paths that are renamed with each invocation is limited.  If the number of paths to be renamed exceeds this limit, a continuation token is returned in this response header.  When a continuation token is returned in the response, it must be specified in a subsequent invocation of the rename operation to continue renaming the directory.
		 * @param {Path_CreateMode} mode Optional. Valid only when namespace is enabled. This parameter determines the behavior of the rename operation. The value must be "legacy" or "posix", and the default value will be "posix". 
		 * @return {void} 
		 */
		Path_Create(resource: Path_CreateResource | null | undefined, continuation: string | null | undefined, mode: Path_CreateMode | null | undefined): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{filesystem}/{path}?resource=' + resource + '&continuation=' + (continuation == null ? '' : encodeURIComponent(continuation)) + '&mode=' + mode, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lease Path
		 * Create and manage a lease to restrict write and delete access to the path. This operation supports conditional HTTP requests.  For more information, see [Specifying Conditional Headers for Blob Service Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
		 * Post {filesystem}/{path}
		 * @return {void} The "renew", "change" or "release" action was successful.
		 */
		Path_Lease(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '{filesystem}/{path}', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete File | Delete Directory
		 * Delete the file or directory. This operation supports conditional HTTP requests.  For more information, see [Specifying Conditional Headers for Blob Service Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
		 * Delete {filesystem}/{path}
		 * @param {boolean} recursive Required and valid only when the resource is a directory.  If "true", all paths beneath the directory will be deleted. If "false" and the directory is non-empty, an error occurs.
		 * @param {string} continuation Optional.  When deleting a directory, the number of paths that are deleted with each invocation is limited.  If the number of paths to be deleted exceeds this limit, a continuation token is returned in this response header.  When a continuation token is returned in the response, it must be specified in a subsequent invocation of the delete operation to continue deleting the directory.
		 * @return {void} The file was deleted.
		 */
		Path_Delete(recursive: boolean | null | undefined, continuation: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{filesystem}/{path}?recursive=' + recursive + '&continuation=' + (continuation == null ? '' : encodeURIComponent(continuation)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Filesystem_ListResource { account = 'account' }

	export enum Path_CreateResource { directory = 'directory', file = 'file' }

	export enum Path_CreateMode { legacy = 'legacy', posix = 'posix' }

	export enum Path_LeaseX_ms_lease_action { acquire = 'acquire', break = 'break', change = 'change', renew = 'renew', release = 'release' }

	export enum Path_UpdateAction { append = 'append', flush = 'flush', setProperties = 'setProperties', setAccessControl = 'setAccessControl' }

}

