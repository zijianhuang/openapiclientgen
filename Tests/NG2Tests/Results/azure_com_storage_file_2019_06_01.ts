import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An error response from the Storage service. */
	export interface CloudError {

		/** An error response from the Storage service. */
		error?: CloudErrorBody;
	}

	/** An error response from the Storage service. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** An error response from the Storage service. */
	export interface CloudErrorBody {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** A list of additional details about the error. */
		details?: Array<CloudErrorBody>;

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message?: string | null;

		/** The target of the particular error. For example, the name of the property in error. */
		target?: string | null;
	}

	/** An error response from the Storage service. */
	export interface CloudErrorBodyFormProperties {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. For example, the name of the property in error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FileServiceItems {

		/** List of file services returned. */
		value?: Array<FileServiceProperties>;
	}
	export interface FileServiceItemsFormProperties {
	}
	export function CreateFileServiceItemsFormGroup() {
		return new FormGroup<FileServiceItemsFormProperties>({
		});

	}

	export interface FileServiceProperties {
	}
	export interface FileServicePropertiesFormProperties {
	}
	export function CreateFileServicePropertiesFormGroup() {
		return new FormGroup<FileServicePropertiesFormProperties>({
		});

	}

	export interface FileShare {
	}
	export interface FileShareFormProperties {
	}
	export function CreateFileShareFormGroup() {
		return new FormGroup<FileShareFormProperties>({
		});

	}

	export interface FileShareItem {
	}
	export interface FileShareItemFormProperties {
	}
	export function CreateFileShareItemFormGroup() {
		return new FormGroup<FileShareItemFormProperties>({
		});

	}


	/** Response schema. Contains list of shares returned, and if paging is requested or required, a URL to next page of shares. */
	export interface FileShareItems {

		/** Request URL that can be used to query next page of shares. Returned when total number of requested shares exceed maximum page size. */
		nextLink?: string | null;

		/** List of file shares returned. */
		value?: Array<FileShareItem>;
	}

	/** Response schema. Contains list of shares returned, and if paging is requested or required, a URL to next page of shares. */
	export interface FileShareItemsFormProperties {

		/** Request URL that can be used to query next page of shares. Returned when total number of requested shares exceed maximum page size. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateFileShareItemsFormGroup() {
		return new FormGroup<FileShareItemsFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of the file share. */
	export interface FileShareProperties {

		/** Returns the date and time the share was last modified. */
		lastModifiedTime?: Date | null;

		/** A name-value pair to associate with the share as metadata. */
		metadata?: {[id: string]: string };

		/**
		 * The maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5TB (5120). For Large File Shares, the maximum size is 102400.
		 * Minimum: 1
		 * Maximum: 102400
		 */
		shareQuota?: number | null;
	}

	/** The properties of the file share. */
	export interface FileSharePropertiesFormProperties {

		/** Returns the date and time the share was last modified. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** A name-value pair to associate with the share as metadata. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5TB (5120). For Large File Shares, the maximum size is 102400.
		 * Minimum: 1
		 * Maximum: 102400
		 */
		shareQuota: FormControl<number | null | undefined>,
	}
	export function CreateFileSharePropertiesFormGroup() {
		return new FormGroup<FileSharePropertiesFormProperties>({
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			shareQuota: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(102400)]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all file services in storage accounts
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {FileServiceItems} OK -- List file services operation completed successfully.
		 */
		FileServices_List(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string): Observable<FileServiceItems> {
			return this.http.get<FileServiceItems>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/fileServices&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all shares.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} maxpagesize Optional. Specified maximum number of shares that can be included in the list.
		 * @param {string} filter Optional. When specified, only share names starting with the filter will be listed.
		 * @return {FileShareItems} OK -- List Shares operation completed successfully.
		 */
		FileShares_List(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, maxpagesize: string | null | undefined, filter: string | null | undefined): Observable<FileShareItems> {
			return this.http.get<FileShareItems>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/fileServices/default/shares&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&maxpagesize=' + (maxpagesize == null ? '' : encodeURIComponent(maxpagesize)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Gets properties of a specified share.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} shareName The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {FileShare} OK -- Get Share operation completed successfully.
		 */
		FileShares_Get(resourceGroupName: string, accountName: string, shareName: string, api_version: string, subscriptionId: string): Observable<FileShare> {
			return this.http.get<FileShare>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/fileServices/default/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new share under the specified account as described by request body. The share resource includes metadata and properties for that share. It does not include a list of the files contained by the share.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} shareName The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {FileShare} requestBody Properties of the file share to create.
		 * @return {FileShare} OK -- The Share is already created.
		 */
		FileShares_Create(resourceGroupName: string, accountName: string, shareName: string, api_version: string, subscriptionId: string, requestBody: FileShare): Observable<FileShare> {
			return this.http.put<FileShare>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/fileServices/default/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes specified share under its account.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} shareName The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} OK -- Delete Share operation completed successfully.
		 */
		FileShares_Delete(resourceGroupName: string, accountName: string, shareName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/fileServices/default/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates share properties as specified in request body. Properties not mentioned in the request will not be changed. Update fails if the specified share does not already exist.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/default/shares/{shareName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} shareName The name of the file share within the specified storage account. File share names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {FileShare} requestBody Properties to update for the file share.
		 * @return {FileShare} OK -- Update Share operation completed successfully.
		 */
		FileShares_Update(resourceGroupName: string, accountName: string, shareName: string, api_version: string, subscriptionId: string, requestBody: FileShare): Observable<FileShare> {
			return this.http.patch<FileShare>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/fileServices/default/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties of file services in storage accounts, including CORS (Cross-Origin Resource Sharing) rules.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/{FileServicesName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {FileServices_GetServicePropertiesFileServicesName} FileServicesName The name of the file Service within the specified storage account. File Service Name must be "default"
		 * @return {FileServiceProperties} OK -- returned the properties of a storage account’s File service.
		 */
		FileServices_GetServiceProperties(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, FileServicesName: FileServices_GetServicePropertiesFileServicesName): Observable<FileServiceProperties> {
			return this.http.get<FileServiceProperties>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/fileServices/' + FileServicesName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Sets the properties of file services in storage accounts, including CORS (Cross-Origin Resource Sharing) rules.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/{FileServicesName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {FileServices_GetServicePropertiesFileServicesName} FileServicesName The name of the file Service within the specified storage account. File Service Name must be "default"
		 * @param {FileServiceProperties} requestBody The properties of file services in storage accounts, including CORS (Cross-Origin Resource Sharing) rules.
		 * @return {FileServiceProperties} OK -- Sets The properties of a storage account’s File service successfully.
		 */
		FileServices_SetServiceProperties(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, FileServicesName: FileServices_GetServicePropertiesFileServicesName, requestBody: FileServiceProperties): Observable<FileServiceProperties> {
			return this.http.put<FileServiceProperties>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/fileServices/' + FileServicesName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum FileServices_GetServicePropertiesFileServicesName { default = 'default' }

}

