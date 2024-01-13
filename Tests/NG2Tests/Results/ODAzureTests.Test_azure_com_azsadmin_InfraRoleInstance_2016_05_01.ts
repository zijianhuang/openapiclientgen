import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The virtual machine resource is used to represent an infrastructure virtual machine in the Azure Stack environment. The fabric resource provider only surfaces infrastructure virtual machines. These machines are never created directly by the admin, but rather as a side effect of expanding admin services. */
	export interface InfraRoleInstance {

		/** All properties of an infrastructure role instance. */
		properties?: InfraRoleInstanceModel;
	}

	/** The virtual machine resource is used to represent an infrastructure virtual machine in the Azure Stack environment. The fabric resource provider only surfaces infrastructure virtual machines. These machines are never created directly by the admin, but rather as a side effect of expanding admin services. */
	export interface InfraRoleInstanceFormProperties {
	}
	export function CreateInfraRoleInstanceFormGroup() {
		return new FormGroup<InfraRoleInstanceFormProperties>({
		});

	}


	/** All properties of an infrastructure role instance. */
	export interface InfraRoleInstanceModel {

		/** The cluster that the virtual machine's host is part of. */
		scaleUnit?: string | null;

		/** URI to the scale unit node. */
		scaleUnitNode?: string | null;

		/** The capacity information for a virtual machine. */
		size?: InfraRoleInstanceSize;

		/** The current state of the virtual machine. */
		state?: InfraRoleInstanceModelState | null;
	}

	/** All properties of an infrastructure role instance. */
	export interface InfraRoleInstanceModelFormProperties {

		/** The cluster that the virtual machine's host is part of. */
		scaleUnit: FormControl<string | null | undefined>,

		/** URI to the scale unit node. */
		scaleUnitNode: FormControl<string | null | undefined>,

		/** The current state of the virtual machine. */
		state: FormControl<InfraRoleInstanceModelState | null | undefined>,
	}
	export function CreateInfraRoleInstanceModelFormGroup() {
		return new FormGroup<InfraRoleInstanceModelFormProperties>({
			scaleUnit: new FormControl<string | null | undefined>(undefined),
			scaleUnitNode: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<InfraRoleInstanceModelState | null | undefined>(undefined),
		});

	}


	/** The capacity information for a virtual machine. */
	export interface InfraRoleInstanceSize {

		/** The number of cores assigned to the virtual machine. */
		cores?: number | null;

		/** The amount of memory, in GB, currently assigned to the virtual machine. */
		memoryGb?: number | null;
	}

	/** The capacity information for a virtual machine. */
	export interface InfraRoleInstanceSizeFormProperties {

		/** The number of cores assigned to the virtual machine. */
		cores: FormControl<number | null | undefined>,

		/** The amount of memory, in GB, currently assigned to the virtual machine. */
		memoryGb: FormControl<number | null | undefined>,
	}
	export function CreateInfraRoleInstanceSizeFormGroup() {
		return new FormGroup<InfraRoleInstanceSizeFormProperties>({
			cores: new FormControl<number | null | undefined>(undefined),
			memoryGb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum InfraRoleInstanceModelState { Stopped = 0, Starting = 1, Running = 2, Stopping = 3 }


	/** Pageable list of infrastructure role instances. */
	export interface InfraRoleInstanceList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of infrastructure role instances. */
		value?: Array<InfraRoleInstance>;
	}

	/** Pageable list of infrastructure role instances. */
	export interface InfraRoleInstanceListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateInfraRoleInstanceListFormGroup() {
		return new FormGroup<InfraRoleInstanceListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of all infrastructure role instances at a location.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/infraRoleInstances
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {InfraRoleInstanceList} OK
		 */
		InfraRoleInstances_List(subscriptionId: string, resourceGroupName: string, location: string, api_version: string, filter: string | null | undefined): Observable<InfraRoleInstanceList> {
			return this.http.get<InfraRoleInstanceList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/infraRoleInstances&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Return the requested infrastructure role instance.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/infraRoleInstances/{infraRoleInstance}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} infraRoleInstance Name of an infrastructure role instance.
		 * @param {string} api_version Client API Version.
		 * @return {InfraRoleInstance} OK
		 */
		InfraRoleInstances_Get(subscriptionId: string, resourceGroupName: string, location: string, infraRoleInstance: string, api_version: string): Observable<InfraRoleInstance> {
			return this.http.get<InfraRoleInstance>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/infraRoleInstances/' + (infraRoleInstance == null ? '' : encodeURIComponent(infraRoleInstance)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Power off an infrastructure role instance.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/infraRoleInstances/{infraRoleInstance}/PowerOff
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} infraRoleInstance Name of an infrastructure role instance.
		 * @param {string} api_version Client API Version.
		 * @return {void} OK
		 */
		InfraRoleInstances_PowerOff(subscriptionId: string, resourceGroupName: string, location: string, infraRoleInstance: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/infraRoleInstances/' + (infraRoleInstance == null ? '' : encodeURIComponent(infraRoleInstance)) + '/PowerOff&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Power on an infrastructure role instance.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/infraRoleInstances/{infraRoleInstance}/PowerOn
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} infraRoleInstance Name of an infrastructure role instance.
		 * @param {string} api_version Client API Version.
		 * @return {void} OK
		 */
		InfraRoleInstances_PowerOn(subscriptionId: string, resourceGroupName: string, location: string, infraRoleInstance: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/infraRoleInstances/' + (infraRoleInstance == null ? '' : encodeURIComponent(infraRoleInstance)) + '/PowerOn&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reboot an infrastructure role instance.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/infraRoleInstances/{infraRoleInstance}/Reboot
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} infraRoleInstance Name of an infrastructure role instance.
		 * @param {string} api_version Client API Version.
		 * @return {void} OK
		 */
		InfraRoleInstances_Reboot(subscriptionId: string, resourceGroupName: string, location: string, infraRoleInstance: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/infraRoleInstances/' + (infraRoleInstance == null ? '' : encodeURIComponent(infraRoleInstance)) + '/Reboot&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Shut down an infrastructure role instance.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/infraRoleInstances/{infraRoleInstance}/Shutdown
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName Name of the resource group.
		 * @param {string} location Location of the resource.
		 * @param {string} infraRoleInstance Name of an infrastructure role instance.
		 * @param {string} api_version Client API Version.
		 * @return {void} OK
		 */
		InfraRoleInstances_Shutdown(subscriptionId: string, resourceGroupName: string, location: string, infraRoleInstance: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Fabric.Admin/fabricLocations/' + (location == null ? '' : encodeURIComponent(location)) + '/infraRoleInstances/' + (infraRoleInstance == null ? '' : encodeURIComponent(infraRoleInstance)) + '/Shutdown&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

