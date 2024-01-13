import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Base Resource Object */
	export interface Resource {

		/** URI of the resource. */
		id?: string | null;

		/** Location where resource is location. */
		location?: string | null;

		/** Name of the resource. */
		name?: string | null;

		/** List of key value pairs. */
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

		/** List of key value pairs. */
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

		/** Unique ID for the resource that was consumed (aka ResourceID). */
		meterId?: string | null;

		/** The amount of the resource consumption that occurred in this time frame. */
		quantity?: string | null;

		/** Subscription id of tenant using plan. */
		subscriptionId?: string | null;

		/** UTC end time for the usage bucket to which this usage aggregate belongs. */
		usageEndTime?: Date | null;

		/** UTC start time for the usage bucket to which this usage aggregate belongs. */
		usageStartTime?: Date | null;
	}

	/** Properties for aggregate usage. */
	export interface UsageAggregateModelFormProperties {

		/** Key-value pairs of instance details represented as a string. */
		instanceData: FormControl<string | null | undefined>,

		/** Unique ID for the resource that was consumed (aka ResourceID). */
		meterId: FormControl<string | null | undefined>,

		/** The amount of the resource consumption that occurred in this time frame. */
		quantity: FormControl<string | null | undefined>,

		/** Subscription id of tenant using plan. */
		subscriptionId: FormControl<string | null | undefined>,

		/** UTC end time for the usage bucket to which this usage aggregate belongs. */
		usageEndTime: FormControl<Date | null | undefined>,

		/** UTC start time for the usage bucket to which this usage aggregate belongs. */
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


	/** Holds an array of usage aggregates and the continuation token. */
	export interface UsageAggregatePage {

		/** Continuation token */
		nextLink?: string | null;

		/** Array of usage aggregates. */
		value?: Array<UsageAggregate>;
	}

	/** Holds an array of usage aggregates and the continuation token. */
	export interface UsageAggregatePageFormProperties {

		/** Continuation token */
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
		 * Gets a collection of SubscriberUsageAggregates, which are UsageAggregates from direct tenants.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Commerce/subscriberUsageAggregates
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {Date} reportedStartTime The reported start time (inclusive).
		 * @param {Date} reportedEndTime The reported end time (exclusive).
		 * @param {string} aggregationGranularity The aggregation granularity.
		 * @param {string} subscriberId The tenant subscription identifier.
		 * @param {string} continuationToken The continuation token.
		 * @return {UsageAggregatePage} OK
		 */
		SubscriberUsageAggregates_List(subscriptionId: string, api_version: string, reportedStartTime: Date, reportedEndTime: Date, aggregationGranularity: string | null | undefined, subscriberId: string | null | undefined, continuationToken: string | null | undefined): Observable<UsageAggregatePage> {
			return this.http.get<UsageAggregatePage>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Commerce/subscriberUsageAggregates&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&reportedStartTime=' + reportedStartTime.toISOString() + '&reportedEndTime=' + reportedEndTime.toISOString() + '&aggregationGranularity=' + (aggregationGranularity == null ? '' : encodeURIComponent(aggregationGranularity)) + '&subscriberId=' + (subscriberId == null ? '' : encodeURIComponent(subscriberId)) + '&continuationToken=' + (continuationToken == null ? '' : encodeURIComponent(continuationToken)), {});
		}
	}

}

