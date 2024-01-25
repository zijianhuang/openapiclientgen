import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Data Lake Store file or directory Access Control List information. */
	export interface AclStatus {

		/** the list of ACLSpec entries on a file or directory. */
		entries?: Array<string>;

		/** the group owner, an AAD Object ID. */
		group?: string | null;

		/** the user owner, an AAD Object ID. */
		owner?: string | null;

		/** The octal representation of the unnamed user, mask and other permissions. */
		permission?: string | null;

		/** the indicator of whether the sticky bit is on or off. */
		stickyBit?: boolean | null;
	}

	/** Data Lake Store file or directory Access Control List information. */
	export interface AclStatusFormProperties {

		/** the group owner, an AAD Object ID. */
		group: FormControl<string | null | undefined>,

		/** the user owner, an AAD Object ID. */
		owner: FormControl<string | null | undefined>,

		/** The octal representation of the unnamed user, mask and other permissions. */
		permission: FormControl<string | null | undefined>,

		/** the indicator of whether the sticky bit is on or off. */
		stickyBit: FormControl<boolean | null | undefined>,
	}
	export function CreateAclStatusFormGroup() {
		return new FormGroup<AclStatusFormProperties>({
			group: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			permission: new FormControl<string | null | undefined>(undefined),
			stickyBit: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Data Lake Store file or directory Access Control List information. */
	export interface AclStatusResult {

		/** Data Lake Store file or directory Access Control List information. */
		aclStatus?: AclStatus;
	}

	/** Data Lake Store file or directory Access Control List information. */
	export interface AclStatusResultFormProperties {
	}
	export function CreateAclStatusResultFormGroup() {
		return new FormGroup<AclStatusResultFormProperties>({
		});

	}


	/** A WebHDFS exception thrown indicating that access is denied due to insufficient permissions. Thrown when a 403 error response code is returned (forbidden). */
	export interface AdlsAccessControlException {
	}

	/** A WebHDFS exception thrown indicating that access is denied due to insufficient permissions. Thrown when a 403 error response code is returned (forbidden). */
	export interface AdlsAccessControlExceptionFormProperties {
	}
	export function CreateAdlsAccessControlExceptionFormGroup() {
		return new FormGroup<AdlsAccessControlExceptionFormProperties>({
		});

	}


	/** A WebHDFS exception thrown indicating the append or read is from a bad offset. Thrown when a 400 error response code is returned for append and open operations (Bad request). */
	export interface AdlsBadOffsetException {
	}

	/** A WebHDFS exception thrown indicating the append or read is from a bad offset. Thrown when a 400 error response code is returned for append and open operations (Bad request). */
	export interface AdlsBadOffsetExceptionFormProperties {
	}
	export function CreateAdlsBadOffsetExceptionFormGroup() {
		return new FormGroup<AdlsBadOffsetExceptionFormProperties>({
		});

	}


	/** Data Lake Store filesystem error containing a specific WebHDFS exception. */
	export interface AdlsError {

		/** Data Lake Store filesystem exception based on the WebHDFS definition for RemoteExceptions. This is a WebHDFS 'catch all' exception */
		remoteException?: AdlsRemoteException;
	}

	/** Data Lake Store filesystem error containing a specific WebHDFS exception. */
	export interface AdlsErrorFormProperties {
	}
	export function CreateAdlsErrorFormGroup() {
		return new FormGroup<AdlsErrorFormProperties>({
		});

	}


	/** A WebHDFS exception thrown indicating the file or folder already exists. Thrown when a 403 error response code is returned (forbidden). */
	export interface AdlsFileAlreadyExistsException {
	}

	/** A WebHDFS exception thrown indicating the file or folder already exists. Thrown when a 403 error response code is returned (forbidden). */
	export interface AdlsFileAlreadyExistsExceptionFormProperties {
	}
	export function CreateAdlsFileAlreadyExistsExceptionFormGroup() {
		return new FormGroup<AdlsFileAlreadyExistsExceptionFormProperties>({
		});

	}


	/** A WebHDFS exception thrown indicating the file or folder could not be found. Thrown when a 404 error response code is returned (not found). */
	export interface AdlsFileNotFoundException {
	}

	/** A WebHDFS exception thrown indicating the file or folder could not be found. Thrown when a 404 error response code is returned (not found). */
	export interface AdlsFileNotFoundExceptionFormProperties {
	}
	export function CreateAdlsFileNotFoundExceptionFormGroup() {
		return new FormGroup<AdlsFileNotFoundExceptionFormProperties>({
		});

	}


	/** A WebHDFS exception thrown indicating there was an IO (read or write) error. Thrown when a 403 error response code is returned (forbidden). */
	export interface AdlsIOException {
	}

	/** A WebHDFS exception thrown indicating there was an IO (read or write) error. Thrown when a 403 error response code is returned (forbidden). */
	export interface AdlsIOExceptionFormProperties {
	}
	export function CreateAdlsIOExceptionFormGroup() {
		return new FormGroup<AdlsIOExceptionFormProperties>({
		});

	}


	/** A WebHDFS exception thrown indicating that one more arguments is incorrect. Thrown when a 400 error response code is returned (bad request). */
	export interface AdlsIllegalArgumentException {
	}

	/** A WebHDFS exception thrown indicating that one more arguments is incorrect. Thrown when a 400 error response code is returned (bad request). */
	export interface AdlsIllegalArgumentExceptionFormProperties {
	}
	export function CreateAdlsIllegalArgumentExceptionFormGroup() {
		return new FormGroup<AdlsIllegalArgumentExceptionFormProperties>({
		});

	}


	/** Data Lake Store filesystem exception based on the WebHDFS definition for RemoteExceptions. This is a WebHDFS 'catch all' exception */
	export interface AdlsRemoteException {

		/**
		 * the class name of the exception thrown, such as 'IllegalArgumentException'.
		 * Required
		 */
		exception: string;

		/** the full class package name for the exception thrown, such as 'java.lang.IllegalArgumentException'. */
		javaClassName?: string | null;

		/** the message associated with the exception that was thrown, such as 'Invalid value for webhdfs parameter "permission":...'. */
		message?: string | null;
	}

	/** Data Lake Store filesystem exception based on the WebHDFS definition for RemoteExceptions. This is a WebHDFS 'catch all' exception */
	export interface AdlsRemoteExceptionFormProperties {

		/**
		 * the class name of the exception thrown, such as 'IllegalArgumentException'.
		 * Required
		 */
		exception: FormControl<string | null | undefined>,

		/** the full class package name for the exception thrown, such as 'java.lang.IllegalArgumentException'. */
		javaClassName: FormControl<string | null | undefined>,

		/** the message associated with the exception that was thrown, such as 'Invalid value for webhdfs parameter "permission":...'. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateAdlsRemoteExceptionFormGroup() {
		return new FormGroup<AdlsRemoteExceptionFormProperties>({
			exception: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			javaClassName: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A WebHDFS exception thrown when an unexpected error occurs during an operation. Thrown when a 500 error response code is returned (Internal server error). */
	export interface AdlsRuntimeException {
	}

	/** A WebHDFS exception thrown when an unexpected error occurs during an operation. Thrown when a 500 error response code is returned (Internal server error). */
	export interface AdlsRuntimeExceptionFormProperties {
	}
	export function CreateAdlsRuntimeExceptionFormGroup() {
		return new FormGroup<AdlsRuntimeExceptionFormProperties>({
		});

	}


	/** A WebHDFS exception thrown indicating that access is denied. Thrown when a 401 error response code is returned (Unauthorized). */
	export interface AdlsSecurityException {
	}

	/** A WebHDFS exception thrown indicating that access is denied. Thrown when a 401 error response code is returned (Unauthorized). */
	export interface AdlsSecurityExceptionFormProperties {
	}
	export function CreateAdlsSecurityExceptionFormGroup() {
		return new FormGroup<AdlsSecurityExceptionFormProperties>({
		});

	}


	/** A WebHDFS exception thrown indicating that the request is being throttled. Reducing the number of requests or request size helps to mitigate this error. */
	export interface AdlsThrottledException {
	}

	/** A WebHDFS exception thrown indicating that the request is being throttled. Reducing the number of requests or request size helps to mitigate this error. */
	export interface AdlsThrottledExceptionFormProperties {
	}
	export function CreateAdlsThrottledExceptionFormGroup() {
		return new FormGroup<AdlsThrottledExceptionFormProperties>({
		});

	}


	/** A WebHDFS exception thrown indicating that the requested operation is not supported. Thrown when a 400 error response code is returned (bad request). */
	export interface AdlsUnsupportedOperationException {
	}

	/** A WebHDFS exception thrown indicating that the requested operation is not supported. Thrown when a 400 error response code is returned (bad request). */
	export interface AdlsUnsupportedOperationExceptionFormProperties {
	}
	export function CreateAdlsUnsupportedOperationExceptionFormGroup() {
		return new FormGroup<AdlsUnsupportedOperationExceptionFormProperties>({
		});

	}


	/** Data Lake Store content summary information */
	export interface ContentSummary {

		/** the number of directories. */
		directoryCount?: number | null;

		/** the number of files. */
		fileCount?: number | null;

		/** the number of bytes used by the content. */
		length?: number | null;

		/** the disk space consumed by the content. */
		spaceConsumed?: number | null;
	}

	/** Data Lake Store content summary information */
	export interface ContentSummaryFormProperties {

		/** the number of directories. */
		directoryCount: FormControl<number | null | undefined>,

		/** the number of files. */
		fileCount: FormControl<number | null | undefined>,

		/** the number of bytes used by the content. */
		length: FormControl<number | null | undefined>,

		/** the disk space consumed by the content. */
		spaceConsumed: FormControl<number | null | undefined>,
	}
	export function CreateContentSummaryFormGroup() {
		return new FormGroup<ContentSummaryFormProperties>({
			directoryCount: new FormControl<number | null | undefined>(undefined),
			fileCount: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			spaceConsumed: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Data Lake Store filesystem content summary information response. */
	export interface ContentSummaryResult {

		/** Data Lake Store content summary information */
		contentSummary?: ContentSummary;
	}

	/** Data Lake Store filesystem content summary information response. */
	export interface ContentSummaryResultFormProperties {
	}
	export function CreateContentSummaryResultFormGroup() {
		return new FormGroup<ContentSummaryResultFormProperties>({
		});

	}


	/** The result of the request or operation. */
	export interface FileOperationResult {

		/** the result of the operation or request. */
		boolean?: boolean | null;
	}

	/** The result of the request or operation. */
	export interface FileOperationResultFormProperties {

		/** the result of the operation or request. */
		boolean: FormControl<boolean | null | undefined>,
	}
	export function CreateFileOperationResultFormGroup() {
		return new FormGroup<FileOperationResultFormProperties>({
			boolean: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Data Lake Store file or directory information. */
	export interface FileStatusProperties {

		/** the last access time as ticks since the epoch. */
		accessTime?: number | null;

		/** flag to indicate if extended acls are enabled */
		aclBit?: boolean | null;

		/** the block size for the file. */
		blockSize?: number | null;

		/** the group owner. */
		group?: string | null;

		/** the number of bytes in a file. */
		length?: number | null;

		/** the modification time as ticks since the epoch. */
		modificationTime?: number | null;

		/** Gets the expiration time, if any, as ticks since the epoch. If the value is 0 or DateTime.MaxValue there is no expiration. */
		msExpirationTime?: number | null;

		/** the user who is the owner. */
		owner?: string | null;

		/** the path suffix. */
		pathSuffix?: string | null;

		/** the permission represented as an string. */
		permission?: string | null;

		/** the type of the path object. */
		type?: FileStatusPropertiesType | null;
	}

	/** Data Lake Store file or directory information. */
	export interface FileStatusPropertiesFormProperties {

		/** the last access time as ticks since the epoch. */
		accessTime: FormControl<number | null | undefined>,

		/** flag to indicate if extended acls are enabled */
		aclBit: FormControl<boolean | null | undefined>,

		/** the block size for the file. */
		blockSize: FormControl<number | null | undefined>,

		/** the group owner. */
		group: FormControl<string | null | undefined>,

		/** the number of bytes in a file. */
		length: FormControl<number | null | undefined>,

		/** the modification time as ticks since the epoch. */
		modificationTime: FormControl<number | null | undefined>,

		/** Gets the expiration time, if any, as ticks since the epoch. If the value is 0 or DateTime.MaxValue there is no expiration. */
		msExpirationTime: FormControl<number | null | undefined>,

		/** the user who is the owner. */
		owner: FormControl<string | null | undefined>,

		/** the path suffix. */
		pathSuffix: FormControl<string | null | undefined>,

		/** the permission represented as an string. */
		permission: FormControl<string | null | undefined>,

		/** the type of the path object. */
		type: FormControl<FileStatusPropertiesType | null | undefined>,
	}
	export function CreateFileStatusPropertiesFormGroup() {
		return new FormGroup<FileStatusPropertiesFormProperties>({
			accessTime: new FormControl<number | null | undefined>(undefined),
			aclBit: new FormControl<boolean | null | undefined>(undefined),
			blockSize: new FormControl<number | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			modificationTime: new FormControl<number | null | undefined>(undefined),
			msExpirationTime: new FormControl<number | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			pathSuffix: new FormControl<string | null | undefined>(undefined),
			permission: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<FileStatusPropertiesType | null | undefined>(undefined),
		});

	}

	export enum FileStatusPropertiesType { FILE = 0, DIRECTORY = 1 }


	/** Data Lake Store filesystem file status information response. */
	export interface FileStatusResult {

		/** Data Lake Store file or directory information. */
		fileStatus?: FileStatusProperties;
	}

	/** Data Lake Store filesystem file status information response. */
	export interface FileStatusResultFormProperties {
	}
	export function CreateFileStatusResultFormGroup() {
		return new FormGroup<FileStatusResultFormProperties>({
		});

	}


	/** Data Lake Store file status list information. */
	export interface FileStatuses {

		/** the object containing the list of properties of the files. */
		fileStatus?: Array<FileStatusProperties>;
	}

	/** Data Lake Store file status list information. */
	export interface FileStatusesFormProperties {
	}
	export function CreateFileStatusesFormGroup() {
		return new FormGroup<FileStatusesFormProperties>({
		});

	}


	/** Data Lake Store filesystem file status list information response. */
	export interface FileStatusesResult {

		/** Data Lake Store file status list information. */
		fileStatuses?: FileStatuses;
	}

	/** Data Lake Store filesystem file status list information response. */
	export interface FileStatusesResultFormProperties {
	}
	export function CreateFileStatusesResultFormGroup() {
		return new FormGroup<FileStatusesResultFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Sets or removes the expiration time on the specified file. This operation can only be executed against files. Folders are not supported.
		 * Put WebHdfsExt/{path}
		 * @param {string} path The Data Lake Store path (starting with '/') of the file on which to set or remove the expiration time.
		 * @param {FileSystem_SetFileExpiryExpiryOption} expiryOption Indicates the type of expiration to use for the file: 1. NeverExpire: ExpireTime is ignored. 2. RelativeToNow: ExpireTime is an integer in milliseconds representing the expiration date relative to when file expiration is updated. 3. RelativeToCreationDate: ExpireTime is an integer in milliseconds representing the expiration date relative to file creation. 4. Absolute: ExpireTime is an integer in milliseconds, as a Unix timestamp relative to 1/1/1970 00:00:00.
		 * @param {number} expireTime The time that the file will expire, corresponding to the ExpiryOption that was set.
		 * @param {FileSystem_SetFileExpiryOp} op The constant value for the operation.
		 * @param {string} api_version Client Api Version.
		 * @return {void} Successfully set the expiration time on the specified file.
		 */
		FileSystem_SetFileExpiry(path: string, expiryOption: FileSystem_SetFileExpiryExpiryOption, expireTime: number | null | undefined, op: FileSystem_SetFileExpiryOp, api_version: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'WebHdfsExt/' + (path == null ? '' : encodeURIComponent(path)) + '&expiryOption=' + expiryOption + '&expireTime=' + expireTime + '&op=' + op + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks if the specified access is available at the given path.
		 * Get webhdfs/v1/{path}
		 * @param {string} path The Data Lake Store path (starting with '/') of the file or directory for which to check access.
		 * @param {string} fsaction File system operation read/write/execute in string form, matching regex pattern '[rwx-]{3}'
		 * @param {FileSystem_CheckAccessOp} op The constant value for the operation.
		 * @param {string} api_version Client Api Version.
		 * @return {void} OK
		 */
		FileSystem_CheckAccess(path: string, fsaction: string, op: FileSystem_CheckAccessOp, api_version: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'webhdfs/v1/' + (path == null ? '' : encodeURIComponent(path)) + '&fsaction=' + (fsaction == null ? '' : encodeURIComponent(fsaction)) + '&op=' + op + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum FileSystem_SetFileExpiryExpiryOption { NeverExpire = 0, RelativeToNow = 1, RelativeToCreationDate = 2, Absolute = 3 }

	export enum FileSystem_SetFileExpiryOp { SETEXPIRY = 0 }

	export enum FileSystem_ConcurrentAppendAppendMode { autocreate = 0 }

	export enum FileSystem_ConcurrentAppendOp { CONCURRENTAPPEND = 0 }

	export enum FileSystem_ConcurrentAppendTransfer_Encoding { chunked = 0 }

	export enum FileSystem_ConcurrentAppendSyncFlag { DATA = 0, METADATA = 1, CLOSE = 2 }

	export enum FileSystem_CheckAccessOp { CHECKACCESS = 0 }

}

