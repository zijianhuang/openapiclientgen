import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DiscoveredSecuritySolution {

		/** Required */
		properties: DiscoveredSecuritySolutionProperties;
	}
	export interface DiscoveredSecuritySolutionFormProperties {
	}
	export function CreateDiscoveredSecuritySolutionFormGroup() {
		return new FormGroup<DiscoveredSecuritySolutionFormProperties>({
		});

	}

	export interface DiscoveredSecuritySolutionProperties {

		/**
		 * The security solutions' image offer
		 * Required
		 */
		offer: string;

		/**
		 * The security solutions' image publisher
		 * Required
		 */
		publisher: string;

		/**
		 * The security family of the discovered solution
		 * Required
		 */
		securityFamily: DiscoveredSecuritySolutionPropertiesSecurityFamily;

		/**
		 * The security solutions' image sku
		 * Required
		 */
		sku: string;
	}
	export interface DiscoveredSecuritySolutionPropertiesFormProperties {

		/**
		 * The security solutions' image offer
		 * Required
		 */
		offer: FormControl<string | null | undefined>,

		/**
		 * The security solutions' image publisher
		 * Required
		 */
		publisher: FormControl<string | null | undefined>,

		/**
		 * The security family of the discovered solution
		 * Required
		 */
		securityFamily: FormControl<DiscoveredSecuritySolutionPropertiesSecurityFamily | null | undefined>,

		/**
		 * The security solutions' image sku
		 * Required
		 */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateDiscoveredSecuritySolutionPropertiesFormGroup() {
		return new FormGroup<DiscoveredSecuritySolutionPropertiesFormProperties>({
			offer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			publisher: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			securityFamily: new FormControl<DiscoveredSecuritySolutionPropertiesSecurityFamily | null | undefined>(undefined, [Validators.required]),
			sku: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DiscoveredSecuritySolutionPropertiesSecurityFamily { Waf = 0, Ngfw = 1, SaasWaf = 2, Va = 3 }

	export interface DiscoveredSecuritySolutionList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;
		value?: Array<DiscoveredSecuritySolution>;
	}
	export interface DiscoveredSecuritySolutionListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDiscoveredSecuritySolutionListFormGroup() {
		return new FormGroup<DiscoveredSecuritySolutionListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of discovered Security Solutions for the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/discoveredSecuritySolutions
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} api_version API version for the operation
		 * @return {DiscoveredSecuritySolutionList} OK
		 */
		DiscoveredSecuritySolutions_List(subscriptionId: string, api_version: string): Observable<DiscoveredSecuritySolutionList> {
			return this.http.get<DiscoveredSecuritySolutionList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/discoveredSecuritySolutions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of discovered Security Solutions for the subscription and location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/discoveredSecuritySolutions
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @param {string} api_version API version for the operation
		 * @return {DiscoveredSecuritySolutionList} OK
		 */
		DiscoveredSecuritySolutions_ListByHomeRegion(subscriptionId: string, ascLocation: string, api_version: string): Observable<DiscoveredSecuritySolutionList> {
			return this.http.get<DiscoveredSecuritySolutionList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '/discoveredSecuritySolutions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a specific discovered Security Solution.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/discoveredSecuritySolutions/{discoveredSecuritySolutionName}
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @param {string} discoveredSecuritySolutionName Name of a discovered security solution.
		 * @param {string} api_version API version for the operation
		 * @return {DiscoveredSecuritySolution} OK
		 */
		DiscoveredSecuritySolutions_Get(subscriptionId: string, resourceGroupName: string, ascLocation: string, discoveredSecuritySolutionName: string, api_version: string): Observable<DiscoveredSecuritySolution> {
			return this.http.get<DiscoveredSecuritySolution>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '/discoveredSecuritySolutions/' + (discoveredSecuritySolutionName == null ? '' : encodeURIComponent(discoveredSecuritySolutionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

