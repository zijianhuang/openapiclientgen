import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Number of nodes based on the Filter */
	export interface NodeCount {

		/** Gets the name of a count type */
		name?: string | null;
		properties?: NodeCountProperties;
	}

	/** Number of nodes based on the Filter */
	export interface NodeCountFormProperties {

		/** Gets the name of a count type */
		name: FormControl<string | null | undefined>,
	}
	export function CreateNodeCountFormGroup() {
		return new FormGroup<NodeCountFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NodeCountProperties {

		/** Gets the count for the name */
		count?: number | null;
	}
	export interface NodeCountPropertiesFormProperties {

		/** Gets the count for the name */
		count: FormControl<number | null | undefined>,
	}
	export function CreateNodeCountPropertiesFormGroup() {
		return new FormGroup<NodeCountPropertiesFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Gets the count of nodes by count type */
	export interface NodeCounts {

		/** Gets the total number of records matching countType criteria. */
		totalCount?: number | null;

		/** Gets an array of counts */
		value?: Array<NodeCount>;
	}

	/** Gets the count of nodes by count type */
	export interface NodeCountsFormProperties {

		/** Gets the total number of records matching countType criteria. */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateNodeCountsFormGroup() {
		return new FormGroup<NodeCountsFormProperties>({
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve counts for Dsc Nodes.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodecounts/{countType}
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {NodeCountInformation_GetCountType} countType The type of counts to retrieve
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {NodeCounts} OK
		 */
		NodeCountInformation_Get(resourceGroupName: string, automationAccountName: string, countType: NodeCountInformation_GetCountType, subscriptionId: string, api_version: string): Observable<NodeCounts> {
			return this.http.get<NodeCounts>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/nodecounts/' + countType + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export enum NodeCountInformation_GetCountType { status = 0, nodeconfiguration = 1 }

}

