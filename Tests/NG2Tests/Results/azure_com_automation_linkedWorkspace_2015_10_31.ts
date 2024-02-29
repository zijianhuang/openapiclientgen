import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Definition of the linked workspace. */
	export interface LinkedWorkspace {

		/** Gets the id of the linked workspace. */
		id?: string | null;
	}

	/** Definition of the linked workspace. */
	export interface LinkedWorkspaceFormProperties {

		/** Gets the id of the linked workspace. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateLinkedWorkspaceFormGroup() {
		return new FormGroup<LinkedWorkspaceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve the linked workspace for the account id.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/linkedWorkspace
		 * @param {string} resourceGroupName Name of an Azure Resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} automationAccountName The name of the automation account.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {LinkedWorkspace} OK
		 */
		LinkedWorkspace_Get(resourceGroupName: string, automationAccountName: string, subscriptionId: string, api_version: string): Observable<LinkedWorkspace> {
			return this.http.get<LinkedWorkspace>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Automation/automationAccounts/' + (automationAccountName == null ? '' : encodeURIComponent(automationAccountName)) + '/linkedWorkspace&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

