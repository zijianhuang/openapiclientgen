import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Error {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: string;

		/** List of the specific fields, and the errors found with their contents */
		fields?: Array<ErrorField>;

		/** Human-readable, English description of the error */
		message?: string | null;
	}
	export interface ErrorFormProperties {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Human-readable, English description of the error */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorField {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: string;

		/** Human-readable, English description of the problem with the contents of the field */
		message?: string | null;

		/**
		 * <ul>
		 * <li style='margin-left: 12px;'>JSONPath referring to a field containing an error</li>
		 * <strong style='margin-left: 12px;'>OR</strong>
		 * <li style='margin-left: 12px;'>JSONPath referring to a field that refers to an object containing an error, with more detail in `pathRelated`</li>
		 * </ul>
		 * Required
		 */
		path: string;

		/** JSONPath referring to a field containing an error, which is referenced by `path` */
		pathRelated?: string | null;
	}
	export interface ErrorFieldFormProperties {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Human-readable, English description of the problem with the contents of the field */
		message: FormControl<string | null | undefined>,

		/**
		 * <ul>
		 * <li style='margin-left: 12px;'>JSONPath referring to a field containing an error</li>
		 * <strong style='margin-left: 12px;'>OR</strong>
		 * <li style='margin-left: 12px;'>JSONPath referring to a field that refers to an object containing an error, with more detail in `pathRelated`</li>
		 * </ul>
		 * Required
		 */
		path: FormControl<string | null | undefined>,

		/** JSONPath referring to a field containing an error, which is referenced by `path` */
		pathRelated: FormControl<string | null | undefined>,
	}
	export function CreateErrorFieldFormGroup() {
		return new FormGroup<ErrorFieldFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pathRelated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorLimit {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: string;

		/** List of the specific fields, and the errors found with their contents */
		fields?: Array<ErrorField>;

		/** Human-readable, English description of the error */
		message?: string | null;

		/**
		 * Number of seconds to wait before attempting a similar request
		 * Required
		 */
		retryAfterSec: string;
	}
	export interface ErrorLimitFormProperties {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Human-readable, English description of the error */
		message: FormControl<string | null | undefined>,

		/**
		 * Number of seconds to wait before attempting a similar request
		 * Required
		 */
		retryAfterSec: FormControl<string | null | undefined>,
	}
	export function CreateErrorLimitFormGroup() {
		return new FormGroup<ErrorLimitFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
			retryAfterSec: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Pagination {

		/** URI to access the first page */
		first?: string | null;

		/** URI to access the last page */
		last?: string | null;

		/** URI to access the next page */
		next?: string | null;

		/** URI to access the previous page */
		previous?: string | null;

		/** Number of records available */
		total?: number | null;
	}
	export interface PaginationFormProperties {

		/** URI to access the first page */
		first: FormControl<string | null | undefined>,

		/** URI to access the last page */
		last: FormControl<string | null | undefined>,

		/** URI to access the next page */
		next: FormControl<string | null | undefined>,

		/** URI to access the previous page */
		previous: FormControl<string | null | undefined>,

		/** Number of records available */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePaginationFormGroup() {
		return new FormGroup<PaginationFormProperties>({
			first: new FormControl<string | null | undefined>(undefined),
			last: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProductGroup {

		/**
		 * Primary key of a grouping of related Subscriptions
		 * Required
		 */
		productGroupKey: string;

		/**
		 * The number of Subscriptions that the shopper owns in this group
		 * Required
		 */
		subscriptionCount: number;
	}
	export interface ProductGroupFormProperties {

		/**
		 * Primary key of a grouping of related Subscriptions
		 * Required
		 */
		productGroupKey: FormControl<string | null | undefined>,

		/**
		 * The number of Subscriptions that the shopper owns in this group
		 * Required
		 */
		subscriptionCount: FormControl<number | null | undefined>,
	}
	export function CreateProductGroupFormGroup() {
		return new FormGroup<ProductGroupFormProperties>({
			productGroupKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriptionCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Subscription {

		/** An array of additional products that have been purchased to augment this Subscription */
		addons?: Array<SubscriptionAddon>;

		/** Required */
		billing: SubscriptionBilling;

		/** Whether or not the Subscription is allowed to be canceled */
		cancelable?: boolean | null;

		/**
		 * When the Subscription was created
		 * Required
		 */
		createdAt: string;

		/** When the Subscription will expire */
		expiresAt?: string | null;

		/** A human readable description of this Subscription */
		label?: string | null;

		/** The url to use or manage this Subscription's active product */
		launchUrl?: string | null;

		/** Unique identifier of the payment profile that will be used to automatically renew this Subscription */
		paymentProfileId?: number | null;

		/**
		 * Whether the renewal price will be based from the list price or a locked-in price for this shopper
		 * Required
		 */
		priceLocked: boolean;

		/** Required */
		product: SubscriptionProduct;
		relations?: SubscriptionRelations;

		/**
		 * Whether or not the Subscription is set to be automatically renewed via the billing agent
		 * Required
		 */
		renewAuto: boolean;

		/**
		 * Whether or not the Subscription is allowed to be renewed
		 * Required
		 */
		renewable: boolean;

		/**
		 * Whether the Subscription is active or the specific non-active state
		 * Required
		 */
		status: SubscriptionStatus;

		/**
		 * Unique identifier of the Subscription
		 * Required
		 */
		subscriptionId: string;

		/**
		 * Whether or not the Subscription is allowed to be upgraded
		 * Required
		 */
		upgradeable: boolean;
	}
	export interface SubscriptionFormProperties {

		/** Whether or not the Subscription is allowed to be canceled */
		cancelable: FormControl<boolean | null | undefined>,

		/**
		 * When the Subscription was created
		 * Required
		 */
		createdAt: FormControl<string | null | undefined>,

		/** When the Subscription will expire */
		expiresAt: FormControl<string | null | undefined>,

		/** A human readable description of this Subscription */
		label: FormControl<string | null | undefined>,

		/** The url to use or manage this Subscription's active product */
		launchUrl: FormControl<string | null | undefined>,

		/** Unique identifier of the payment profile that will be used to automatically renew this Subscription */
		paymentProfileId: FormControl<number | null | undefined>,

		/**
		 * Whether the renewal price will be based from the list price or a locked-in price for this shopper
		 * Required
		 */
		priceLocked: FormControl<boolean | null | undefined>,

		/**
		 * Whether or not the Subscription is set to be automatically renewed via the billing agent
		 * Required
		 */
		renewAuto: FormControl<boolean | null | undefined>,

		/**
		 * Whether or not the Subscription is allowed to be renewed
		 * Required
		 */
		renewable: FormControl<boolean | null | undefined>,

		/**
		 * Whether the Subscription is active or the specific non-active state
		 * Required
		 */
		status: FormControl<SubscriptionStatus | null | undefined>,

		/**
		 * Unique identifier of the Subscription
		 * Required
		 */
		subscriptionId: FormControl<string | null | undefined>,

		/**
		 * Whether or not the Subscription is allowed to be upgraded
		 * Required
		 */
		upgradeable: FormControl<boolean | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			cancelable: new FormControl<boolean | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expiresAt: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			launchUrl: new FormControl<string | null | undefined>(undefined),
			paymentProfileId: new FormControl<number | null | undefined>(undefined),
			priceLocked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			renewAuto: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			renewable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<SubscriptionStatus | null | undefined>(undefined, [Validators.required]),
			subscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			upgradeable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SubscriptionAddon {

		/**
		 * The financial commitment the customer has in the product
		 * Required
		 */
		commitment: SubscriptionAddonCommitment;

		/**
		 * Unique identifier of the add-in product
		 * Required
		 */
		pfid: number;

		/** Required */
		quantity: number;
	}
	export interface SubscriptionAddonFormProperties {

		/**
		 * The financial commitment the customer has in the product
		 * Required
		 */
		commitment: FormControl<SubscriptionAddonCommitment | null | undefined>,

		/**
		 * Unique identifier of the add-in product
		 * Required
		 */
		pfid: FormControl<number | null | undefined>,

		/** Required */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateSubscriptionAddonFormGroup() {
		return new FormGroup<SubscriptionAddonFormProperties>({
			commitment: new FormControl<SubscriptionAddonCommitment | null | undefined>(undefined, [Validators.required]),
			pfid: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SubscriptionAddonCommitment { PAID = 'PAID', FREE = 'FREE', TRIAL = 'TRIAL' }

	export enum SubscriptionStatus { ACTIVE = 'ACTIVE', PENDING = 'PENDING', CANCELED = 'CANCELED' }

	export interface SubscriptionBilling {

		/**
		 * The financial commitment the customer has in the product
		 * Required
		 */
		commitment: SubscriptionAddonCommitment;

		/** The types of charges that are past due when `status` is PAST_DUE */
		pastDueTypes?: Array<string>;

		/**
		 * The point in time after which the Subscription will bill for automatic renewal
		 * Required
		 */
		renewAt: string;

		/**
		 * Whether payments are past due
		 * Required
		 */
		status: SubscriptionBillingStatus;
	}
	export interface SubscriptionBillingFormProperties {

		/**
		 * The financial commitment the customer has in the product
		 * Required
		 */
		commitment: FormControl<SubscriptionAddonCommitment | null | undefined>,

		/**
		 * The point in time after which the Subscription will bill for automatic renewal
		 * Required
		 */
		renewAt: FormControl<string | null | undefined>,

		/**
		 * Whether payments are past due
		 * Required
		 */
		status: FormControl<SubscriptionBillingStatus | null | undefined>,
	}
	export function CreateSubscriptionBillingFormGroup() {
		return new FormGroup<SubscriptionBillingFormProperties>({
			commitment: new FormControl<SubscriptionAddonCommitment | null | undefined>(undefined, [Validators.required]),
			renewAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<SubscriptionBillingStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SubscriptionBillingStatus { CURRENT = 'CURRENT', PAST_DUE = 'PAST_DUE' }

	export interface SubscriptionList {

		/** Required */
		pagination: Pagination;

		/**
		 * A collection of subscriptions
		 * Required
		 */
		subscriptions: Array<Subscription>;
	}
	export interface SubscriptionListFormProperties {
	}
	export function CreateSubscriptionListFormGroup() {
		return new FormGroup<SubscriptionListFormProperties>({
		});

	}

	export interface SubscriptionProduct {

		/**
		 * A human readable description of the Product that is subscribed
		 * Required
		 */
		label: string;

		/**
		 * Grouping of related Subscriptions
		 * Required
		 */
		namespace: string;

		/**
		 * Unique identifier of the Product that is subscribed
		 * Required
		 */
		pfid: number;

		/**
		 * Primary key of a grouping of related Subscriptions
		 * Required
		 */
		productGroupKey: string;

		/**
		 * The number of `renewalPeriodUnits` that will be added by the `renewalPfid`
		 * Required
		 */
		renewalPeriod: number;

		/**
		 * The unit of time that `renewalPeriod` is measured in
		 * Required
		 */
		renewalPeriodUnit: SubscriptionProductRenewalPeriodUnit;

		/**
		 * Unique identifier of the renewal Product
		 * Required
		 */
		renewalPfid: number;

		/**
		 * Whether the product supports the `billOn` option on the renewal endpoint
		 * Required
		 */
		supportBillOn: boolean;
	}
	export interface SubscriptionProductFormProperties {

		/**
		 * A human readable description of the Product that is subscribed
		 * Required
		 */
		label: FormControl<string | null | undefined>,

		/**
		 * Grouping of related Subscriptions
		 * Required
		 */
		namespace: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the Product that is subscribed
		 * Required
		 */
		pfid: FormControl<number | null | undefined>,

		/**
		 * Primary key of a grouping of related Subscriptions
		 * Required
		 */
		productGroupKey: FormControl<string | null | undefined>,

		/**
		 * The number of `renewalPeriodUnits` that will be added by the `renewalPfid`
		 * Required
		 */
		renewalPeriod: FormControl<number | null | undefined>,

		/**
		 * The unit of time that `renewalPeriod` is measured in
		 * Required
		 */
		renewalPeriodUnit: FormControl<SubscriptionProductRenewalPeriodUnit | null | undefined>,

		/**
		 * Unique identifier of the renewal Product
		 * Required
		 */
		renewalPfid: FormControl<number | null | undefined>,

		/**
		 * Whether the product supports the `billOn` option on the renewal endpoint
		 * Required
		 */
		supportBillOn: FormControl<boolean | null | undefined>,
	}
	export function CreateSubscriptionProductFormGroup() {
		return new FormGroup<SubscriptionProductFormProperties>({
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			namespace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pfid: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			productGroupKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			renewalPeriod: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			renewalPeriodUnit: new FormControl<SubscriptionProductRenewalPeriodUnit | null | undefined>(undefined, [Validators.required]),
			renewalPfid: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			supportBillOn: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SubscriptionProductRenewalPeriodUnit { MONTH = 'MONTH', QUARTER = 'QUARTER', SEMI_ANNUAL = 'SEMI_ANNUAL', YEAR = 'YEAR' }

	export interface SubscriptionRelations {

		/** A set of related Subscriptions that will be canceled automatically if this Subscription is canceled */
		children?: Array<string>;

		/** Unique identifier of this Subscription's parent */
		parent?: string | null;
	}
	export interface SubscriptionRelationsFormProperties {

		/** Unique identifier of this Subscription's parent */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionRelationsFormGroup() {
		return new FormGroup<SubscriptionRelationsFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubscriptionUpdate {

		/** Unique identifier of the payment profile you want to be used for automatic renewal */
		paymentProfileId?: number | null;

		/** Whether or not you want the Subscription renew automatically */
		renewAuto?: boolean | null;
	}
	export interface SubscriptionUpdateFormProperties {

		/** Unique identifier of the payment profile you want to be used for automatic renewal */
		paymentProfileId: FormControl<number | null | undefined>,

		/** Whether or not you want the Subscription renew automatically */
		renewAuto: FormControl<boolean | null | undefined>,
	}
	export function CreateSubscriptionUpdateFormGroup() {
		return new FormGroup<SubscriptionUpdateFormProperties>({
			paymentProfileId: new FormControl<number | null | undefined>(undefined),
			renewAuto: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of Subscriptions for the specified Shopper
		 * Get v1/subscriptions
		 * @param {Array<string>} productGroupKeys Only return Subscriptions with the specified product groups
		 * @param {Array<string>} includes Optional details to be included in the response
		 * @param {number} offset Number of Subscriptions to skip before starting to return paged results (must be a multiple of the limit)
		 * @param {number} limit Number of Subscriptions to retrieve in this page, starting after offset
		 * @param {ListSort} sort Property name that will be used to sort results. "-" indicates descending
		 * @return {SubscriptionList} Request was successful
		 */
		List(productGroupKeys: Array<string> | null | undefined, includes: Array<string> | null | undefined, offset: number | null | undefined, limit: number | null | undefined, sort: ListSort | null | undefined): Observable<SubscriptionList> {
			return this.http.get<SubscriptionList>(this.baseUri + 'v1/subscriptions?' + productGroupKeys?.map(z => `productGroupKeys=${encodeURIComponent(z)}`).join('&') + '&' + includes?.map(z => `includes=${encodeURIComponent(z)}`).join('&') + '&offset=' + offset + '&limit=' + limit + '&sort=' + sort, {});
		}

		/**
		 * Retrieve a list of ProductGroups for the specified Shopper
		 * Get v1/subscriptions/productGroups
		 * @return {Array<ProductGroup>} Request was successful
		 */
		ProductGroups(): Observable<Array<ProductGroup>> {
			return this.http.get<Array<ProductGroup>>(this.baseUri + 'v1/subscriptions/productGroups', {});
		}

		/**
		 * Cancel the specified Subscription
		 * Delete v1/subscriptions/{subscriptionId}
		 * @param {string} subscriptionId Unique identifier of the Subscription to cancel
		 * @return {void} 
		 */
		Cancel(subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve details for the specified Subscription
		 * Get v1/subscriptions/{subscriptionId}
		 * @param {string} subscriptionId Unique identifier of the Subscription to retrieve
		 * @return {Subscription} Request was successful
		 */
		Get(subscriptionId: string): Observable<Subscription> {
			return this.http.get<Subscription>(this.baseUri + 'v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)), {});
		}

		/**
		 * Update details for the specified Subscription
		 * Only Subscription properties that can be changed without immediate financial impact can be modified via PATCH, whereas some properties can be changed by purchasing a renewal<br/><strong>This endpoint only supports JWT authentication</strong>
		 * Patch v1/subscriptions/{subscriptionId}
		 * @param {string} subscriptionId Unique identifier of the Subscription to update
		 * @param {SubscriptionUpdate} requestBody Details of the Subscription to change
		 * @return {void} 
		 */
		Update(subscriptionId: string, requestBody: SubscriptionUpdate): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum ListSort { expiresAt = 'expiresAt', '-expiresAt' = '-expiresAt' }

}

