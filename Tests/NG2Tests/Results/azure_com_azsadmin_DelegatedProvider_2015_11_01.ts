import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get the list of delegatedProviders.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Subscriptions.Admin/delegatedProviders
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {any} OK
		 */
		DelegatedProviders_List(subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Subscriptions.Admin/delegatedProviders&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the specified delegated provider.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Subscriptions.Admin/delegatedProviders/{delegatedProvider}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
		 * @param {string} delegatedProvider DelegatedProvider identifier.
		 * @param {string} api_version Client Api Version.
		 * @return {DelegatedProviders_GetReturn} OK
		 */
		DelegatedProviders_Get(subscriptionId: string, delegatedProvider: string, api_version: string): Observable<DelegatedProviders_GetReturn> {
			return this.http.get<DelegatedProviders_GetReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Subscriptions.Admin/delegatedProviders/' + (delegatedProvider == null ? '' : encodeURIComponent(delegatedProvider)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export interface DelegatedProviders_GetReturn {

		/** Parent DelegatedProvider subscription identifier. */
		delegatedProviderSubscriptionId?: string | null;

		/** Subscription name. */
		displayName?: string | null;

		/** External reference identifier. */
		externalReferenceId?: string | null;

		/** Fully qualified identifier. */
		id?: string | null;

		/** Identifier of the offer under the scope of a delegated provider. */
		offerId?: string | null;

		/** Subscription owner. */
		owner?: string | null;

		/** Resource manager type. */
		routingResourceManagerType?: DelegatedProviders_GetReturnRoutingResourceManagerType | null;

		/** Subscription notification state. */
		state?: DelegatedProviders_GetReturnState | null;

		/** Subscription identifier. */
		subscriptionId?: string | null;

		/** Directory tenant identifier. */
		tenantId?: string | null;
	}
	export interface DelegatedProviders_GetReturnFormProperties {

		/** Parent DelegatedProvider subscription identifier. */
		delegatedProviderSubscriptionId: FormControl<string | null | undefined>,

		/** Subscription name. */
		displayName: FormControl<string | null | undefined>,

		/** External reference identifier. */
		externalReferenceId: FormControl<string | null | undefined>,

		/** Fully qualified identifier. */
		id: FormControl<string | null | undefined>,

		/** Identifier of the offer under the scope of a delegated provider. */
		offerId: FormControl<string | null | undefined>,

		/** Subscription owner. */
		owner: FormControl<string | null | undefined>,

		/** Resource manager type. */
		routingResourceManagerType: FormControl<DelegatedProviders_GetReturnRoutingResourceManagerType | null | undefined>,

		/** Subscription notification state. */
		state: FormControl<DelegatedProviders_GetReturnState | null | undefined>,

		/** Subscription identifier. */
		subscriptionId: FormControl<string | null | undefined>,

		/** Directory tenant identifier. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateDelegatedProviders_GetReturnFormGroup() {
		return new FormGroup<DelegatedProviders_GetReturnFormProperties>({
			delegatedProviderSubscriptionId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			externalReferenceId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			offerId: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			routingResourceManagerType: new FormControl<DelegatedProviders_GetReturnRoutingResourceManagerType | null | undefined>(undefined),
			state: new FormControl<DelegatedProviders_GetReturnState | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DelegatedProviders_GetReturnRoutingResourceManagerType { Default = 'Default', Admin = 'Admin' }

	export enum DelegatedProviders_GetReturnState { NotDefined = 'NotDefined', Enabled = 'Enabled', Warned = 'Warned', PastDue = 'PastDue', Disabled = 'Disabled', Deleted = 'Deleted', Deleting = 'Deleting', PartiallyDeleted = 'PartiallyDeleted' }

}

