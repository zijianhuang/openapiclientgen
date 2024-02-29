import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GetServiceSettingsResponse {
		HomeRegions?: Array<string>;
		LinuxSubscriptionsDiscovery?: LinuxSubscriptionsDiscovery;
		LinuxSubscriptionsDiscoverySettings?: LinuxSubscriptionsDiscoverySettings;
		Status?: Status;
		StatusMessage?: StringMap;
	}
	export interface GetServiceSettingsResponseFormProperties {
		LinuxSubscriptionsDiscovery: FormControl<LinuxSubscriptionsDiscovery | null | undefined>,
		Status: FormControl<Status | null | undefined>,
	}
	export function CreateGetServiceSettingsResponseFormGroup() {
		return new FormGroup<GetServiceSettingsResponseFormProperties>({
			LinuxSubscriptionsDiscovery: new FormControl<LinuxSubscriptionsDiscovery | null | undefined>(undefined),
			Status: new FormControl<Status | null | undefined>(undefined),
		});

	}

	export enum LinuxSubscriptionsDiscovery { Enabled = 'Enabled', Disabled = 'Disabled' }


	/** Lists the settings defined for discovering Linux subscriptions. */
	export interface LinuxSubscriptionsDiscoverySettings {

		/** Required */
		OrganizationIntegration: LinuxSubscriptionsDiscovery;

		/** Required */
		SourceRegions: Array<string>;
	}

	/** Lists the settings defined for discovering Linux subscriptions. */
	export interface LinuxSubscriptionsDiscoverySettingsFormProperties {

		/** Required */
		OrganizationIntegration: FormControl<LinuxSubscriptionsDiscovery | null | undefined>,
	}
	export function CreateLinuxSubscriptionsDiscoverySettingsFormGroup() {
		return new FormGroup<LinuxSubscriptionsDiscoverySettingsFormProperties>({
			OrganizationIntegration: new FormControl<LinuxSubscriptionsDiscovery | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Status { InProgress = 'InProgress', Completed = 'Completed', Successful = 'Successful', Failed = 'Failed' }

	export interface StringMap {
	}
	export interface StringMapFormProperties {
	}
	export function CreateStringMapFormGroup() {
		return new FormGroup<StringMapFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ListLinuxSubscriptionInstancesResponse {
		Instances?: Array<Instance>;
		NextToken?: string;
	}
	export interface ListLinuxSubscriptionInstancesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLinuxSubscriptionInstancesResponseFormGroup() {
		return new FormGroup<ListLinuxSubscriptionInstancesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details discovered information about a running instance using Linux subscriptions. */
	export interface Instance {
		AccountID?: string;
		AmiId?: string;
		InstanceID?: string;
		InstanceType?: string;
		LastUpdatedTime?: string;
		ProductCode?: Array<string>;
		Region?: string;
		Status?: string;
		SubscriptionName?: string;
		UsageOperation?: string;
	}

	/** Details discovered information about a running instance using Linux subscriptions. */
	export interface InstanceFormProperties {
		AccountID: FormControl<string | null | undefined>,
		AmiId: FormControl<string | null | undefined>,
		InstanceID: FormControl<string | null | undefined>,
		InstanceType: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		SubscriptionName: FormControl<string | null | undefined>,
		UsageOperation: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			AccountID: new FormControl<string | null | undefined>(undefined),
			AmiId: new FormControl<string | null | undefined>(undefined),
			InstanceID: new FormControl<string | null | undefined>(undefined),
			InstanceType: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			SubscriptionName: new FormControl<string | null | undefined>(undefined),
			UsageOperation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter object that is used to return more specific results from a describe operation. Filters can be used to match a set of resources by specific criteria. */
	export interface Filter {
		Name?: string;
		Operator?: Operator;
		Values?: Array<string>;
	}

	/** A filter object that is used to return more specific results from a describe operation. Filters can be used to match a set of resources by specific criteria. */
	export interface FilterFormProperties {
		Name: FormControl<string | null | undefined>,
		Operator: FormControl<Operator | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Operator: new FormControl<Operator | null | undefined>(undefined),
		});

	}

	export enum Operator { Equal = 'Equal', NotEqual = 'NotEqual', Contains = 'Contains' }

	export interface ListLinuxSubscriptionsResponse {
		NextToken?: string;
		Subscriptions?: Array<Subscription>;
	}
	export interface ListLinuxSubscriptionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLinuxSubscriptionsResponseFormGroup() {
		return new FormGroup<ListLinuxSubscriptionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object which details a discovered Linux subscription. */
	export interface Subscription {
		InstanceCount?: number | null;
		Name?: string;
		Type?: string;
	}

	/** An object which details a discovered Linux subscription. */
	export interface SubscriptionFormProperties {
		InstanceCount: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			InstanceCount: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateServiceSettingsResponse {
		HomeRegions?: Array<string>;
		LinuxSubscriptionsDiscovery?: LinuxSubscriptionsDiscovery;
		LinuxSubscriptionsDiscoverySettings?: LinuxSubscriptionsDiscoverySettings;
		Status?: Status;
		StatusMessage?: StringMap;
	}
	export interface UpdateServiceSettingsResponseFormProperties {
		LinuxSubscriptionsDiscovery: FormControl<LinuxSubscriptionsDiscovery | null | undefined>,
		Status: FormControl<Status | null | undefined>,
	}
	export function CreateUpdateServiceSettingsResponseFormGroup() {
		return new FormGroup<UpdateServiceSettingsResponseFormProperties>({
			LinuxSubscriptionsDiscovery: new FormControl<LinuxSubscriptionsDiscovery | null | undefined>(undefined),
			Status: new FormControl<Status | null | undefined>(undefined),
		});

	}

	export enum OrganizationIntegration { Enabled = 'Enabled', Disabled = 'Disabled' }

	export interface GetServiceSettingsRequest {
	}
	export interface GetServiceSettingsRequestFormProperties {
	}
	export function CreateGetServiceSettingsRequestFormGroup() {
		return new FormGroup<GetServiceSettingsRequestFormProperties>({
		});

	}


	/** NextToken length limit is half of ddb accepted limit. Increase this limit if parameters in request increases. */
	export interface ListLinuxSubscriptionInstancesRequest {
		Filters?: Array<Filter>;
		MaxResults?: number | null;
		NextToken?: string;
	}

	/** NextToken length limit is half of ddb accepted limit. Increase this limit if parameters in request increases. */
	export interface ListLinuxSubscriptionInstancesRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLinuxSubscriptionInstancesRequestFormGroup() {
		return new FormGroup<ListLinuxSubscriptionInstancesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** NextToken length limit is half of ddb accepted limit. Increase this limit if parameters in request increases. */
	export interface ListLinuxSubscriptionsRequest {
		Filters?: Array<Filter>;
		MaxResults?: number | null;
		NextToken?: string;
	}

	/** NextToken length limit is half of ddb accepted limit. Increase this limit if parameters in request increases. */
	export interface ListLinuxSubscriptionsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLinuxSubscriptionsRequestFormGroup() {
		return new FormGroup<ListLinuxSubscriptionsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateServiceSettingsRequest {
		AllowUpdate?: boolean | null;

		/** Required */
		LinuxSubscriptionsDiscovery: LinuxSubscriptionsDiscovery;

		/** Required */
		LinuxSubscriptionsDiscoverySettings: LinuxSubscriptionsDiscoverySettings;
	}
	export interface UpdateServiceSettingsRequestFormProperties {
		AllowUpdate: FormControl<boolean | null | undefined>,

		/** Required */
		LinuxSubscriptionsDiscovery: FormControl<LinuxSubscriptionsDiscovery | null | undefined>,
	}
	export function CreateUpdateServiceSettingsRequestFormGroup() {
		return new FormGroup<UpdateServiceSettingsRequestFormProperties>({
			AllowUpdate: new FormControl<boolean | null | undefined>(undefined),
			LinuxSubscriptionsDiscovery: new FormControl<LinuxSubscriptionsDiscovery | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the Linux subscriptions service settings.
		 * Post subscription/GetServiceSettings
		 * @return {GetServiceSettingsResponse} Success
		 */
		GetServiceSettings(): Observable<GetServiceSettingsResponse> {
			return this.http.post<GetServiceSettingsResponse>(this.baseUri + 'subscription/GetServiceSettings', null, {});
		}

		/**
		 * Lists the running Amazon EC2 instances that were discovered with commercial Linux subscriptions.
		 * Post subscription/ListLinuxSubscriptionInstances
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLinuxSubscriptionInstancesResponse} Success
		 */
		ListLinuxSubscriptionInstances(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListLinuxSubscriptionInstancesPostBody): Observable<ListLinuxSubscriptionInstancesResponse> {
			return this.http.post<ListLinuxSubscriptionInstancesResponse>(this.baseUri + 'subscription/ListLinuxSubscriptionInstances?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Linux subscriptions that have been discovered. If you have linked your organization, the returned results will include data aggregated across your accounts in Organizations.
		 * Post subscription/ListLinuxSubscriptions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLinuxSubscriptionsResponse} Success
		 */
		ListLinuxSubscriptions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListLinuxSubscriptionsPostBody): Observable<ListLinuxSubscriptionsResponse> {
			return this.http.post<ListLinuxSubscriptionsResponse>(this.baseUri + 'subscription/ListLinuxSubscriptions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the service settings for Linux subscriptions.
		 * Post subscription/UpdateServiceSettings
		 * @return {UpdateServiceSettingsResponse} Success
		 */
		UpdateServiceSettings(requestBody: UpdateServiceSettingsPostBody): Observable<UpdateServiceSettingsResponse> {
			return this.http.post<UpdateServiceSettingsResponse>(this.baseUri + 'subscription/UpdateServiceSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface ListLinuxSubscriptionInstancesPostBody {

		/** <p>An array of structures that you can use to filter the results to those that match one or more sets of key-value pairs that you specify. For example, you can filter by the name of <code>AmiID</code> with an optional operator to see subscriptions that match, partially match, or don't match a certain Amazon Machine Image (AMI) ID.</p> <p>The valid names for this filter are:</p> <ul> <li> <p> <code>AmiID</code> </p> </li> <li> <p> <code>InstanceID</code> </p> </li> <li> <p> <code>AccountID</code> </p> </li> <li> <p> <code>Status</code> </p> </li> <li> <p> <code>Region</code> </p> </li> <li> <p> <code>UsageOperation</code> </p> </li> <li> <p> <code>ProductCode</code> </p> </li> <li> <p> <code>InstanceType</code> </p> </li> </ul> <p>The valid Operators for this filter are:</p> <ul> <li> <p> <code>contains</code> </p> </li> <li> <p> <code>equals</code> </p> </li> <li> <p> <code>Notequal</code> </p> </li> </ul> */
		Filters?: Array<Filter>;

		/**
		 * Maximum number of results to return in a single call.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MaxResults?: number | null;

		/**
		 * Token for the next set of results.
		 * Min length: 1
		 * Max length: 16384
		 */
		NextToken?: string | null;
	}
	export interface ListLinuxSubscriptionInstancesPostBodyFormProperties {

		/**
		 * Maximum number of results to return in a single call.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Token for the next set of results.
		 * Min length: 1
		 * Max length: 16384
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLinuxSubscriptionInstancesPostBodyFormGroup() {
		return new FormGroup<ListLinuxSubscriptionInstancesPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(16384)]),
		});

	}

	export interface ListLinuxSubscriptionsPostBody {

		/** <p>An array of structures that you can use to filter the results to those that match one or more sets of key-value pairs that you specify. For example, you can filter by the name of <code>Subscription</code> with an optional operator to see subscriptions that match, partially match, or don't match a certain subscription's name.</p> <p>The valid names for this filter are:</p> <ul> <li> <p> <code>Subscription</code> </p> </li> </ul> <p>The valid Operators for this filter are:</p> <ul> <li> <p> <code>contains</code> </p> </li> <li> <p> <code>equals</code> </p> </li> <li> <p> <code>Notequal</code> </p> </li> </ul> */
		Filters?: Array<Filter>;

		/**
		 * Maximum number of results to return in a single call.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MaxResults?: number | null;

		/**
		 * Token for the next set of results.
		 * Min length: 1
		 * Max length: 16384
		 */
		NextToken?: string | null;
	}
	export interface ListLinuxSubscriptionsPostBodyFormProperties {

		/**
		 * Maximum number of results to return in a single call.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Token for the next set of results.
		 * Min length: 1
		 * Max length: 16384
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLinuxSubscriptionsPostBodyFormGroup() {
		return new FormGroup<ListLinuxSubscriptionsPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(16384)]),
		});

	}

	export interface UpdateServiceSettingsPostBody {

		/** Describes if updates are allowed to the service settings for Linux subscriptions. If you allow updates, you can aggregate Linux subscription data in more than one home Region. */
		AllowUpdate?: boolean | null;

		/**
		 * Describes if the discovery of Linux subscriptions is enabled.
		 * Required
		 */
		LinuxSubscriptionsDiscovery: LinuxSubscriptionsDiscovery;

		/**
		 * Lists the settings defined for discovering Linux subscriptions.
		 * Required
		 */
		LinuxSubscriptionsDiscoverySettings: UpdateServiceSettingsPostBodyLinuxSubscriptionsDiscoverySettings;
	}
	export interface UpdateServiceSettingsPostBodyFormProperties {

		/** Describes if updates are allowed to the service settings for Linux subscriptions. If you allow updates, you can aggregate Linux subscription data in more than one home Region. */
		AllowUpdate: FormControl<boolean | null | undefined>,

		/**
		 * Describes if the discovery of Linux subscriptions is enabled.
		 * Required
		 */
		LinuxSubscriptionsDiscovery: FormControl<LinuxSubscriptionsDiscovery | null | undefined>,
	}
	export function CreateUpdateServiceSettingsPostBodyFormGroup() {
		return new FormGroup<UpdateServiceSettingsPostBodyFormProperties>({
			AllowUpdate: new FormControl<boolean | null | undefined>(undefined),
			LinuxSubscriptionsDiscovery: new FormControl<LinuxSubscriptionsDiscovery | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateServiceSettingsPostBodyLinuxSubscriptionsDiscoverySettings {
		OrganizationIntegration?: LinuxSubscriptionsDiscovery;
		SourceRegions?: Array<string>;
	}
	export interface UpdateServiceSettingsPostBodyLinuxSubscriptionsDiscoverySettingsFormProperties {
		OrganizationIntegration: FormControl<LinuxSubscriptionsDiscovery | null | undefined>,
	}
	export function CreateUpdateServiceSettingsPostBodyLinuxSubscriptionsDiscoverySettingsFormGroup() {
		return new FormGroup<UpdateServiceSettingsPostBodyLinuxSubscriptionsDiscoverySettingsFormProperties>({
			OrganizationIntegration: new FormControl<LinuxSubscriptionsDiscovery | null | undefined>(undefined),
		});

	}

}

