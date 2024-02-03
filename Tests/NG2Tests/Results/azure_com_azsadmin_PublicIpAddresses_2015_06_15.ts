import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Properties of a public IP Address. */
	export interface PublicIPAddressProperties {

		/** The allocation method. */
		allocationMethod?: PublicIPAddressPropertiesAllocationMethod | null;

		/** The IP address. */
		ipAddress?: string | null;

		/** The IP pool. */
		ipPool?: string | null;
	}

	/** Properties of a public IP Address. */
	export interface PublicIPAddressPropertiesFormProperties {

		/** The allocation method. */
		allocationMethod: FormControl<PublicIPAddressPropertiesAllocationMethod | null | undefined>,

		/** The IP address. */
		ipAddress: FormControl<string | null | undefined>,

		/** The IP pool. */
		ipPool: FormControl<string | null | undefined>,
	}
	export function CreatePublicIPAddressPropertiesFormGroup() {
		return new FormGroup<PublicIPAddressPropertiesFormProperties>({
			allocationMethod: new FormControl<PublicIPAddressPropertiesAllocationMethod | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			ipPool: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PublicIPAddressPropertiesAllocationMethod { Dynamic = 'Dynamic', Static = 'Static' }


	/** This resource represents an IP Address. */
	export interface PublicIpAddress {

		/** Properties of a public IP Address. */
		properties?: PublicIPAddressProperties;
	}

	/** This resource represents an IP Address. */
	export interface PublicIpAddressFormProperties {
	}
	export function CreatePublicIpAddressFormGroup() {
		return new FormGroup<PublicIpAddressFormProperties>({
		});

	}


	/** Pageable list of public ip addresses. */
	export interface PublicIpAddressList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of public ip addresses for this page. */
		value?: Array<PublicIpAddress>;
	}

	/** Pageable list of public ip addresses. */
	export interface PublicIpAddressListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePublicIpAddressListFormGroup() {
		return new FormGroup<PublicIpAddressListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List of public ip addresses.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network.Admin/adminPublicIpAddresses
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @param {string} orderBy OData orderBy parameter.
		 * @param {string} top OData top parameter.
		 * @param {string} skip OData skip parameter.
		 * @param {string} inlineCount OData inline count parameter.
		 * @return {PublicIpAddressList} OK
		 */
		PublicIPAddresses_List(subscriptionId: string, api_version: string, filter: string | null | undefined, orderBy: string | null | undefined, top: string | null | undefined, skip: string | null | undefined, inlineCount: string | null | undefined): Observable<PublicIpAddressList> {
			return this.http.get<PublicIpAddressList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network.Admin/adminPublicIpAddresses&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&top=' + (top == null ? '' : encodeURIComponent(top)) + '&skip=' + (skip == null ? '' : encodeURIComponent(skip)) + '&inlineCount=' + (inlineCount == null ? '' : encodeURIComponent(inlineCount)), {});
		}
	}

}

