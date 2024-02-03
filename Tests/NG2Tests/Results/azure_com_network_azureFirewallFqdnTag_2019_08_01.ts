import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AzureFirewallFqdnTag {
	}
	export interface AzureFirewallFqdnTagFormProperties {
	}
	export function CreateAzureFirewallFqdnTagFormGroup() {
		return new FormGroup<AzureFirewallFqdnTagFormProperties>({
		});

	}


	/** Response for ListAzureFirewallFqdnTags API service call. */
	export interface AzureFirewallFqdnTagListResult {

		/** URL to get the next set of results. */
		nextLink?: string | null;

		/** List of Azure Firewall FQDN Tags in a resource group. */
		value?: Array<AzureFirewallFqdnTag>;
	}

	/** Response for ListAzureFirewallFqdnTags API service call. */
	export interface AzureFirewallFqdnTagListResultFormProperties {

		/** URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAzureFirewallFqdnTagListResultFormGroup() {
		return new FormGroup<AzureFirewallFqdnTagListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure Firewall FQDN Tag Properties. */
	export interface AzureFirewallFqdnTagPropertiesFormat {

		/** The name of this FQDN Tag. */
		fqdnTagName?: string | null;

		/** The current provisioning state. */
		provisioningState?: AzureFirewallFqdnTagPropertiesFormatProvisioningState | null;
	}

	/** Azure Firewall FQDN Tag Properties. */
	export interface AzureFirewallFqdnTagPropertiesFormatFormProperties {

		/** The name of this FQDN Tag. */
		fqdnTagName: FormControl<string | null | undefined>,

		/** The current provisioning state. */
		provisioningState: FormControl<AzureFirewallFqdnTagPropertiesFormatProvisioningState | null | undefined>,
	}
	export function CreateAzureFirewallFqdnTagPropertiesFormatFormGroup() {
		return new FormGroup<AzureFirewallFqdnTagPropertiesFormatFormProperties>({
			fqdnTagName: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<AzureFirewallFqdnTagPropertiesFormatProvisioningState | null | undefined>(undefined),
		});

	}

	export enum AzureFirewallFqdnTagPropertiesFormatProvisioningState { Succeeded = 'Succeeded', Updating = 'Updating', Deleting = 'Deleting', Failed = 'Failed' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets all the Azure Firewall FQDN Tags in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/azureFirewallFqdnTags
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AzureFirewallFqdnTagListResult} Success. The operation returns a list of Azure Firewall FQDN Tag resources.
		 */
		AzureFirewallFqdnTags_ListAll(api_version: string, subscriptionId: string): Observable<AzureFirewallFqdnTagListResult> {
			return this.http.get<AzureFirewallFqdnTagListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/azureFirewallFqdnTags?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

