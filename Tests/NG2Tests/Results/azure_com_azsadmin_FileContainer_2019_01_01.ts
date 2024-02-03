import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Extended Error Information. */
	export interface ErrorInfo {

		/** The error code. */
		code?: string | null;

		/** The detailed error messages. */
		details?: Array<ErrorInfo>;

		/** The error message. */
		message?: string | null;
	}

	/** Extended Error Information. */
	export interface ErrorInfoFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorInfoFormGroup() {
		return new FormGroup<ErrorInfoFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** File container entity. */
	export interface FileContainer {

		/** File Container Properties. */
		properties?: FileContainerAdminProperties;
	}

	/** File container entity. */
	export interface FileContainerFormProperties {
	}
	export function CreateFileContainerFormGroup() {
		return new FormGroup<FileContainerFormProperties>({
		});

	}


	/** File Container Properties. */
	export interface FileContainerAdminProperties {

		/** Extended Error Information. */
		error?: ErrorInfo;

		/** File container resource identifier containing product manifest. */
		fileContainerId?: string | null;

		/** Specifies the file post copy action. */
		postCopyAction?: FileContainerAdminPropertiesPostCopyAction | null;

		/** Provisioning state of the resource. */
		provisioningState?: string | null;

		/** Specifies The remote file location. */
		sourceUri?: string | null;

		/** The file or container Uri. This is read-only property; a user cannot set it. */
		uri?: string | null;
	}

	/** File Container Properties. */
	export interface FileContainerAdminPropertiesFormProperties {

		/** File container resource identifier containing product manifest. */
		fileContainerId: FormControl<string | null | undefined>,

		/** Specifies the file post copy action. */
		postCopyAction: FormControl<FileContainerAdminPropertiesPostCopyAction | null | undefined>,

		/** Provisioning state of the resource. */
		provisioningState: FormControl<string | null | undefined>,

		/** Specifies The remote file location. */
		sourceUri: FormControl<string | null | undefined>,

		/** The file or container Uri. This is read-only property; a user cannot set it. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateFileContainerAdminPropertiesFormGroup() {
		return new FormGroup<FileContainerAdminPropertiesFormProperties>({
			fileContainerId: new FormControl<string | null | undefined>(undefined),
			postCopyAction: new FormControl<FileContainerAdminPropertiesPostCopyAction | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			sourceUri: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FileContainerAdminPropertiesPostCopyAction { None = 'None', Unzip = 'Unzip' }


	/** Parameters for creating a new file container. */
	export interface FileContainerParameters {

		/** Specifies the file post copy action. */
		postCopyAction?: FileContainerAdminPropertiesPostCopyAction | null;

		/** Specifies The remote file location. */
		sourceUri?: string | null;
	}

	/** Parameters for creating a new file container. */
	export interface FileContainerParametersFormProperties {

		/** Specifies the file post copy action. */
		postCopyAction: FormControl<FileContainerAdminPropertiesPostCopyAction | null | undefined>,

		/** Specifies The remote file location. */
		sourceUri: FormControl<string | null | undefined>,
	}
	export function CreateFileContainerParametersFormGroup() {
		return new FormGroup<FileContainerParametersFormProperties>({
			postCopyAction: new FormControl<FileContainerAdminPropertiesPostCopyAction | null | undefined>(undefined),
			sourceUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of file containers. */
	export interface FileContainersList {

		/** Continuation token. */
		nextLink?: string | null;

		/** List of file containers. */
		value?: Array<FileContainer>;
	}

	/** List of file containers. */
	export interface FileContainersListFormProperties {

		/** Continuation token. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateFileContainersListFormGroup() {
		return new FormGroup<FileContainersListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the file post copy action. */
	export enum PostCopyAction { None = 'None', Unzip = 'Unzip' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns an array of file containers.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/fileContainers
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {FileContainersList} OK
		 */
		FileContainers_List(subscriptionId: string, api_version: string): Observable<FileContainersList> {
			return this.http.get<FileContainersList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/fileContainers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the specific file container details.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/fileContainers/{fileContainerId}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} fileContainerId The file container identifier.
		 * @param {string} api_version Client API Version.
		 * @return {FileContainer} OK
		 */
		FileContainers_Get(subscriptionId: string, fileContainerId: string, api_version: string): Observable<FileContainer> {
			return this.http.get<FileContainer>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/fileContainers/' + (fileContainerId == null ? '' : encodeURIComponent(fileContainerId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new file container.
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/fileContainers/{fileContainerId}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} fileContainerId The file container identifier.
		 * @param {FileContainerParameters} requestBody The parameters required to create a new file container.
		 * @return {FileContainer} OK
		 */
		FileContainers_Create(subscriptionId: string, api_version: string, fileContainerId: string, requestBody: FileContainerParameters): Observable<FileContainer> {
			return this.http.put<FileContainer>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/fileContainers/' + (fileContainerId == null ? '' : encodeURIComponent(fileContainerId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes specified file container.
		 * Delete an existing file container.
		 * Delete subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/fileContainers/{fileContainerId}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} fileContainerId The file container identifier.
		 * @param {string} api_version Client API Version.
		 * @return {void} OK
		 */
		FileContainers_Delete(subscriptionId: string, fileContainerId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Deployment.Admin/locations/global/fileContainers/' + (fileContainerId == null ? '' : encodeURIComponent(fileContainerId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

