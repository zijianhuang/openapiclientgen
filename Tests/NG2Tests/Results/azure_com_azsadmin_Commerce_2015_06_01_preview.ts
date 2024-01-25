import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contains the localized display information for this particular operation / action. */
	export interface Display {

		/** The localized, friendly description for the operation. The description will be displayed to the user. It should be thorough and concise for used in both tooltips and detailed views. */
		description?: string | null;

		/** The localized, friendly name for the operation. Use the name as it will be displayed to the user. */
		operation?: string | null;

		/** The localized, friendly version of the resource provider name. The provider name is expected to include the name of the publisher or company responsible. The provider name format should use title case and begin with "Microsoft" for first-party services. For example, the provider name may be"Microsoft Monitoring Insights" or "Microsoft Compute". */
		provider?: string | null;

		/** The localized, friendly version of the resource type related to this action or operation; the resource type should match the public documentation for the resource provider. */
		resource?: string | null;
	}

	/** Contains the localized display information for this particular operation / action. */
	export interface DisplayFormProperties {

		/** The localized, friendly description for the operation. The description will be displayed to the user. It should be thorough and concise for used in both tooltips and detailed views. */
		description: FormControl<string | null | undefined>,

		/** The localized, friendly name for the operation. Use the name as it will be displayed to the user. */
		operation: FormControl<string | null | undefined>,

		/** The localized, friendly version of the resource provider name. The provider name is expected to include the name of the publisher or company responsible. The provider name format should use title case and begin with "Microsoft" for first-party services. For example, the provider name may be"Microsoft Monitoring Insights" or "Microsoft Compute". */
		provider: FormControl<string | null | undefined>,

		/** The localized, friendly version of the resource type related to this action or operation; the resource type should match the public documentation for the resource provider. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateDisplayFormGroup() {
		return new FormGroup<DisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the supported REST operation. */
	export interface Operation {

		/** Contains the localized display information for this particular operation / action. */
		display?: Display;

		/** The name of the operation performed on the object. The name should match the action name that appears in RBAC or the event service. */
		name?: string | null;
	}

	/** Describes the supported REST operation. */
	export interface OperationFormProperties {

		/** The name of the operation performed on the object. The name should match the action name that appears in RBAC or the event service. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of Operations */
	export interface OperationList {

		/** URI to the next page of operations. */
		nextLink?: string | null;

		/** Array of operations */
		value?: Array<Operation>;
	}

	/** List of Operations */
	export interface OperationListFormProperties {

		/** URI to the next page of operations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListFormGroup() {
		return new FormGroup<OperationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Base Resource Object */
	export interface Resource {

		/** URI of the resource. */
		id?: string | null;

		/** Location where resource is location. */
		location?: string | null;

		/** Name of the resource. */
		name?: string | null;

		/** List of key-value pairs. */
		tags?: {[id: string]: string };

		/** Type of resource. */
		type?: string | null;
	}

	/** Base Resource Object */
	export interface ResourceFormProperties {

		/** URI of the resource. */
		id: FormControl<string | null | undefined>,

		/** Location where resource is location. */
		location: FormControl<string | null | undefined>,

		/** Name of the resource. */
		name: FormControl<string | null | undefined>,

		/** List of key-value pairs. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Type of resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Aggregate usage values for resource. */
	export interface UsageAggregate {

		/** Properties for aggregate usage. */
		properties?: UsageAggregateModel;
	}

	/** Aggregate usage values for resource. */
	export interface UsageAggregateFormProperties {
	}
	export function CreateUsageAggregateFormGroup() {
		return new FormGroup<UsageAggregateFormProperties>({
		});

	}


	/** Properties for aggregate usage. */
	export interface UsageAggregateModel {

		/** Key-value pairs of instance details represented as a string. */
		instanceData?: string | null;

		/** Unique ID for the resource that was consumed, for example, the Resource ID. */
		meterId?: string | null;

		/** The amount of the resource consumption that occurred in this time frame. */
		quantity?: string | null;

		/** Subscription ID of tenant using plan. */
		subscriptionId?: string | null;

		/** UTC end time for the usage category to which this usage aggregate belongs. */
		usageEndTime?: Date | null;

		/** UTC start time for the usage category to which this usage aggregate belongs. */
		usageStartTime?: Date | null;
	}

	/** Properties for aggregate usage. */
	export interface UsageAggregateModelFormProperties {

		/** Key-value pairs of instance details represented as a string. */
		instanceData: FormControl<string | null | undefined>,

		/** Unique ID for the resource that was consumed, for example, the Resource ID. */
		meterId: FormControl<string | null | undefined>,

		/** The amount of the resource consumption that occurred in this time frame. */
		quantity: FormControl<string | null | undefined>,

		/** Subscription ID of tenant using plan. */
		subscriptionId: FormControl<string | null | undefined>,

		/** UTC end time for the usage category to which this usage aggregate belongs. */
		usageEndTime: FormControl<Date | null | undefined>,

		/** UTC start time for the usage category to which this usage aggregate belongs. */
		usageStartTime: FormControl<Date | null | undefined>,
	}
	export function CreateUsageAggregateModelFormGroup() {
		return new FormGroup<UsageAggregateModelFormProperties>({
			instanceData: new FormControl<string | null | undefined>(undefined),
			meterId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			usageEndTime: new FormControl<Date | null | undefined>(undefined),
			usageStartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Pageable list of usage aggregates */
	export interface UsageAggregatePage {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of usage aggregates. */
		value?: Array<UsageAggregate>;
	}

	/** Pageable list of usage aggregates */
	export interface UsageAggregatePageFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateUsageAggregatePageFormGroup() {
		return new FormGroup<UsageAggregatePageFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the list of supported REST operations.
		 * Get providers/Microsoft.Commerce.Admin/operations
		 * @param {string} api_version Client API Version.
		 * @return {OperationList} OK
		 */
		Operations_List(api_version: string): Observable<OperationList> {
			return this.http.get<OperationList>(this.baseUri + 'providers/Microsoft.Commerce.Admin/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a collection of SubscriberUsageAggregates, which are UsageAggregates from users.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Commerce.Admin/subscriberUsageAggregates
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @param {Date} reportedStartTime The reported start time (inclusive).
		 * @param {Date} reportedEndTime The reported end time (exclusive).
		 * @param {string} aggregationGranularity The aggregation granularity.
		 * @param {string} subscriberId The tenant subscription identifier.
		 * @param {string} continuationToken The continuation token.
		 * @return {UsageAggregatePage} OK
		 */
		SubscriberUsageAggregates_List(subscriptionId: string, api_version: string, reportedStartTime: Date, reportedEndTime: Date, aggregationGranularity: string | null | undefined, subscriberId: string | null | undefined, continuationToken: string | null | undefined): Observable<UsageAggregatePage> {
			return this.http.get<UsageAggregatePage>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Commerce.Admin/subscriberUsageAggregates&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&reportedStartTime=' + reportedStartTime.toISOString() + '&reportedEndTime=' + reportedEndTime.toISOString() + '&aggregationGranularity=' + (aggregationGranularity == null ? '' : encodeURIComponent(aggregationGranularity)) + '&subscriberId=' + (subscriberId == null ? '' : encodeURIComponent(subscriberId)) + '&continuationToken=' + (continuationToken == null ? '' : encodeURIComponent(continuationToken)), {});
		}

		/**
		 * Update the encryption.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Commerce.Admin/updateEncryption
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {void} OK
		 */
		UpdateEncryption(subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Commerce.Admin/updateEncryption&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

