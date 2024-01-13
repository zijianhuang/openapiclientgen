import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Object that contains properties of the file share resource. */
	export interface FileShare {

		/** Properties of a file share resource. */
		properties?: FileShareModel;
	}

	/** Object that contains properties of the file share resource. */
	export interface FileShareFormProperties {
	}
	export function CreateFileShareFormGroup() {
		return new FormGroup<FileShareFormProperties>({
		});

	}


	/** Properties of a file share resource. */
	export interface FileShareModel {

		/** Associated volume ID. */
		associatedVolume?: string | null;

		/** The UNCPath for the fileshare. */
		uncPath?: string | null;
	}

	/** Properties of a file share resource. */
	export interface FileShareModelFormProperties {

		/** Associated volume ID. */
		associatedVolume: FormControl<string | null | undefined>,

		/** The UNCPath for the fileshare. */
		uncPath: FormControl<string | null | undefined>,
	}
	export function CreateFileShareModelFormGroup() {
		return new FormGroup<FileShareModelFormProperties>({
			associatedVolume: new FormControl<string | null | undefined>(undefined),
			uncPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pageable list of fabric file share locations. */
	export interface FileShareList {

		/** List of fabric file shares. */
		value?: Array<FileShare>;
	}

	/** Pageable list of fabric file share locations. */
	export interface FileShareListFormProperties {
	}
	export function CreateFileShareListFormGroup() {
		return new FormGroup<FileShareListFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of all fabric file shares at a certain location.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/fileShares
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {FileShareList} OK
		 */
		FileShares_List(subscriptionId: string, resourceGroupName: string, location: string, api_version: string, filter: string | null | undefined): Observable<FileShareList> {
			return this.http.get<FileShareList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/fileShares&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Returns the requested fabric file share.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/fileShares/{fileShare}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} fileShare Fabric file share name.
		 * @param {string} api_version Client API Version.
		 * @return {FileShare} OK
		 */
		FileShares_Get(subscriptionId: string, resourceGroupName: string, location: string, fileShare: string, api_version: string): Observable<FileShare> {
			return this.http.get<FileShare>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/fileShares/' + (fileShare == null ? '' : encodeURIComponent(fileShare)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

