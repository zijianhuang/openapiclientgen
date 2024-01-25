import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Holds Compute quota information used to control resource allocation. */
	export interface Quota {

		/** Properties for a Compute Quota */
		properties?: QuotaProperties;
	}

	/** Holds Compute quota information used to control resource allocation. */
	export interface QuotaFormProperties {
	}
	export function CreateQuotaFormGroup() {
		return new FormGroup<QuotaFormProperties>({
		});

	}

	export interface QuotaProperties {

		/**
		 * Maximum number of availability sets allowed.
		 * Minimum: 0
		 */
		availabilitySetCount?: number | null;

		/**
		 * Maximum number of cores allowed.
		 * Minimum: 0
		 */
		coresLimit?: number | null;

		/**
		 * Maximum number of managed disks and snapshots of type premium allowed.
		 * Minimum: 0
		 */
		maxAllocationPremiumManagedDisksAndSnapshots?: number | null;

		/**
		 * Maximum number of managed disks and snapshots of type standard allowed.
		 * Minimum: 0
		 */
		maxAllocationStandardManagedDisksAndSnapshots?: number | null;

		/**
		 * Maximum number of virtual machines allowed.
		 * Minimum: 0
		 */
		virtualMachineCount?: number | null;

		/**
		 * Maximum number of scale sets allowed.
		 * Minimum: 0
		 */
		vmScaleSetCount?: number | null;
	}
	export interface QuotaPropertiesFormProperties {

		/**
		 * Maximum number of availability sets allowed.
		 * Minimum: 0
		 */
		availabilitySetCount: FormControl<number | null | undefined>,

		/**
		 * Maximum number of cores allowed.
		 * Minimum: 0
		 */
		coresLimit: FormControl<number | null | undefined>,

		/**
		 * Maximum number of managed disks and snapshots of type premium allowed.
		 * Minimum: 0
		 */
		maxAllocationPremiumManagedDisksAndSnapshots: FormControl<number | null | undefined>,

		/**
		 * Maximum number of managed disks and snapshots of type standard allowed.
		 * Minimum: 0
		 */
		maxAllocationStandardManagedDisksAndSnapshots: FormControl<number | null | undefined>,

		/**
		 * Maximum number of virtual machines allowed.
		 * Minimum: 0
		 */
		virtualMachineCount: FormControl<number | null | undefined>,

		/**
		 * Maximum number of scale sets allowed.
		 * Minimum: 0
		 */
		vmScaleSetCount: FormControl<number | null | undefined>,
	}
	export function CreateQuotaPropertiesFormGroup() {
		return new FormGroup<QuotaPropertiesFormProperties>({
			availabilitySetCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			coresLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			maxAllocationPremiumManagedDisksAndSnapshots: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			maxAllocationStandardManagedDisksAndSnapshots: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			virtualMachineCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			vmScaleSetCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** List of Compute quotas */
	export interface QuotaList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of Compute quotas */
		QuotaListValue?: Array<QuotaListValue>;
	}

	/** List of Compute quotas */
	export interface QuotaListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateQuotaListFormGroup() {
		return new FormGroup<QuotaListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QuotaListValue {

		/** Properties for a Compute Quota */
		properties?: QuotaListValueProperties;
	}
	export interface QuotaListValueFormProperties {
	}
	export function CreateQuotaListValueFormGroup() {
		return new FormGroup<QuotaListValueFormProperties>({
		});

	}

	export interface QuotaListValueProperties {

		/**
		 * Maximum number of availability sets allowed.
		 * Minimum: 0
		 */
		availabilitySetCount?: number | null;

		/**
		 * Maximum number of cores allowed.
		 * Minimum: 0
		 */
		coresLimit?: number | null;

		/**
		 * Maximum number of managed disks and snapshots of type premium allowed.
		 * Minimum: 0
		 */
		maxAllocationPremiumManagedDisksAndSnapshots?: number | null;

		/**
		 * Maximum number of managed disks and snapshots of type standard allowed.
		 * Minimum: 0
		 */
		maxAllocationStandardManagedDisksAndSnapshots?: number | null;

		/**
		 * Maximum number of virtual machines allowed.
		 * Minimum: 0
		 */
		virtualMachineCount?: number | null;

		/**
		 * Maximum number of scale sets allowed.
		 * Minimum: 0
		 */
		vmScaleSetCount?: number | null;
	}
	export interface QuotaListValuePropertiesFormProperties {

		/**
		 * Maximum number of availability sets allowed.
		 * Minimum: 0
		 */
		availabilitySetCount: FormControl<number | null | undefined>,

		/**
		 * Maximum number of cores allowed.
		 * Minimum: 0
		 */
		coresLimit: FormControl<number | null | undefined>,

		/**
		 * Maximum number of managed disks and snapshots of type premium allowed.
		 * Minimum: 0
		 */
		maxAllocationPremiumManagedDisksAndSnapshots: FormControl<number | null | undefined>,

		/**
		 * Maximum number of managed disks and snapshots of type standard allowed.
		 * Minimum: 0
		 */
		maxAllocationStandardManagedDisksAndSnapshots: FormControl<number | null | undefined>,

		/**
		 * Maximum number of virtual machines allowed.
		 * Minimum: 0
		 */
		virtualMachineCount: FormControl<number | null | undefined>,

		/**
		 * Maximum number of scale sets allowed.
		 * Minimum: 0
		 */
		vmScaleSetCount: FormControl<number | null | undefined>,
	}
	export function CreateQuotaListValuePropertiesFormGroup() {
		return new FormGroup<QuotaListValuePropertiesFormProperties>({
			availabilitySetCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			coresLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			maxAllocationPremiumManagedDisksAndSnapshots: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			maxAllocationStandardManagedDisksAndSnapshots: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			virtualMachineCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			vmScaleSetCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** Holds Compute quota information used to control resource allocation. */
	export interface NewQuotaParameter {

		/** Properties for a Compute Quota */
		properties?: NewQuotaParameterProperties;
	}

	/** Holds Compute quota information used to control resource allocation. */
	export interface NewQuotaParameterFormProperties {
	}
	export function CreateNewQuotaParameterFormGroup() {
		return new FormGroup<NewQuotaParameterFormProperties>({
		});

	}

	export interface NewQuotaParameterProperties {

		/**
		 * Maximum number of availability sets allowed.
		 * Minimum: 0
		 */
		availabilitySetCount?: number | null;

		/**
		 * Maximum number of cores allowed.
		 * Minimum: 0
		 */
		coresLimit?: number | null;

		/**
		 * Maximum number of managed disks and snapshots of type premium allowed.
		 * Minimum: 0
		 */
		maxAllocationPremiumManagedDisksAndSnapshots?: number | null;

		/**
		 * Maximum number of managed disks and snapshots of type standard allowed.
		 * Minimum: 0
		 */
		maxAllocationStandardManagedDisksAndSnapshots?: number | null;

		/**
		 * Maximum number of virtual machines allowed.
		 * Minimum: 0
		 */
		virtualMachineCount?: number | null;

		/**
		 * Maximum number of scale sets allowed.
		 * Minimum: 0
		 */
		vmScaleSetCount?: number | null;
	}
	export interface NewQuotaParameterPropertiesFormProperties {

		/**
		 * Maximum number of availability sets allowed.
		 * Minimum: 0
		 */
		availabilitySetCount: FormControl<number | null | undefined>,

		/**
		 * Maximum number of cores allowed.
		 * Minimum: 0
		 */
		coresLimit: FormControl<number | null | undefined>,

		/**
		 * Maximum number of managed disks and snapshots of type premium allowed.
		 * Minimum: 0
		 */
		maxAllocationPremiumManagedDisksAndSnapshots: FormControl<number | null | undefined>,

		/**
		 * Maximum number of managed disks and snapshots of type standard allowed.
		 * Minimum: 0
		 */
		maxAllocationStandardManagedDisksAndSnapshots: FormControl<number | null | undefined>,

		/**
		 * Maximum number of virtual machines allowed.
		 * Minimum: 0
		 */
		virtualMachineCount: FormControl<number | null | undefined>,

		/**
		 * Maximum number of scale sets allowed.
		 * Minimum: 0
		 */
		vmScaleSetCount: FormControl<number | null | undefined>,
	}
	export function CreateNewQuotaParameterPropertiesFormGroup() {
		return new FormGroup<NewQuotaParameterPropertiesFormProperties>({
			availabilitySetCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			coresLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			maxAllocationPremiumManagedDisksAndSnapshots: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			maxAllocationStandardManagedDisksAndSnapshots: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			virtualMachineCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			vmScaleSetCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all Compute quotas.
		 * Get a list of existing Compute quotas.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/quotas
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location Location of the resource.
		 * @param {string} api_version Client API Version.
		 * @return {Quotas_ListReturn} OK
		 */
		Quotas_List(subscriptionId: string, location: string, api_version: string): Observable<Quotas_ListReturn> {
			return this.http.get<Quotas_ListReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute.Admin/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/quotas&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns the requested Compute quota.
		 * Get an existing Compute Quota.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/quotas/{quotaName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location Location of the resource.
		 * @param {string} quotaName Name of the quota.
		 * @param {string} api_version Client API Version.
		 * @return {Quotas_GetReturn} OK
		 */
		Quotas_Get(subscriptionId: string, location: string, quotaName: string, api_version: string): Observable<Quotas_GetReturn> {
			return this.http.get<Quotas_GetReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute.Admin/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/quotas/' + (quotaName == null ? '' : encodeURIComponent(quotaName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or Updates a Compute Quota.
		 * Creates or Updates a Compute Quota with the provided quota parameters.
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/quotas/{quotaName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location Location of the resource.
		 * @param {string} quotaName Name of the quota.
		 * @param {string} api_version Client API Version.
		 * @param {Quotas_CreateOrUpdatePutBody} requestBody New quota to create.
		 * @return {Quotas_CreateOrUpdateReturn} OK
		 */
		Quotas_CreateOrUpdate(subscriptionId: string, location: string, quotaName: string, api_version: string, requestBody: Quotas_CreateOrUpdatePutBody): Observable<Quotas_CreateOrUpdateReturn> {
			return this.http.put<Quotas_CreateOrUpdateReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute.Admin/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/quotas/' + (quotaName == null ? '' : encodeURIComponent(quotaName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes specified Compute quota
		 * Delete an existing Compute quota.
		 * Delete subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/quotas/{quotaName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location Location of the resource.
		 * @param {string} quotaName Name of the quota.
		 * @param {string} api_version Client API Version.
		 * @return {void} OK
		 */
		Quotas_Delete(subscriptionId: string, location: string, quotaName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute.Admin/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/quotas/' + (quotaName == null ? '' : encodeURIComponent(quotaName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

	export interface Quotas_ListReturn {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of Compute quotas */
		Quotas_ListReturnValue?: Array<Quotas_ListReturnValue>;
	}
	export interface Quotas_ListReturnFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateQuotas_ListReturnFormGroup() {
		return new FormGroup<Quotas_ListReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Quotas_ListReturnValue {

		/** Properties for a Compute Quota */
		properties?: Quotas_ListReturnValueProperties;
	}
	export interface Quotas_ListReturnValueFormProperties {
	}
	export function CreateQuotas_ListReturnValueFormGroup() {
		return new FormGroup<Quotas_ListReturnValueFormProperties>({
		});

	}

	export interface Quotas_ListReturnValueProperties {

		/**
		 * Maximum number of availability sets allowed.
		 * Minimum: 0
		 */
		availabilitySetCount?: number | null;

		/**
		 * Maximum number of cores allowed.
		 * Minimum: 0
		 */
		coresLimit?: number | null;

		/**
		 * Maximum number of managed disks and snapshots of type premium allowed.
		 * Minimum: 0
		 */
		maxAllocationPremiumManagedDisksAndSnapshots?: number | null;

		/**
		 * Maximum number of managed disks and snapshots of type standard allowed.
		 * Minimum: 0
		 */
		maxAllocationStandardManagedDisksAndSnapshots?: number | null;

		/**
		 * Maximum number of virtual machines allowed.
		 * Minimum: 0
		 */
		virtualMachineCount?: number | null;

		/**
		 * Maximum number of scale sets allowed.
		 * Minimum: 0
		 */
		vmScaleSetCount?: number | null;
	}
	export interface Quotas_ListReturnValuePropertiesFormProperties {

		/**
		 * Maximum number of availability sets allowed.
		 * Minimum: 0
		 */
		availabilitySetCount: FormControl<number | null | undefined>,

		/**
		 * Maximum number of cores allowed.
		 * Minimum: 0
		 */
		coresLimit: FormControl<number | null | undefined>,

		/**
		 * Maximum number of managed disks and snapshots of type premium allowed.
		 * Minimum: 0
		 */
		maxAllocationPremiumManagedDisksAndSnapshots: FormControl<number | null | undefined>,

		/**
		 * Maximum number of managed disks and snapshots of type standard allowed.
		 * Minimum: 0
		 */
		maxAllocationStandardManagedDisksAndSnapshots: FormControl<number | null | undefined>,

		/**
		 * Maximum number of virtual machines allowed.
		 * Minimum: 0
		 */
		virtualMachineCount: FormControl<number | null | undefined>,

		/**
		 * Maximum number of scale sets allowed.
		 * Minimum: 0
		 */
		vmScaleSetCount: FormControl<number | null | undefined>,
	}
	export function CreateQuotas_ListReturnValuePropertiesFormGroup() {
		return new FormGroup<Quotas_ListReturnValuePropertiesFormProperties>({
			availabilitySetCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			coresLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			maxAllocationPremiumManagedDisksAndSnapshots: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			maxAllocationStandardManagedDisksAndSnapshots: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			virtualMachineCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			vmScaleSetCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface Quotas_GetReturn {

		/** Properties for a Compute Quota */
		properties?: Quotas_GetReturnProperties;
	}
	export interface Quotas_GetReturnFormProperties {
	}
	export function CreateQuotas_GetReturnFormGroup() {
		return new FormGroup<Quotas_GetReturnFormProperties>({
		});

	}

	export interface Quotas_GetReturnProperties {

		/**
		 * Maximum number of availability sets allowed.
		 * Minimum: 0
		 */
		availabilitySetCount?: number | null;

		/**
		 * Maximum number of cores allowed.
		 * Minimum: 0
		 */
		coresLimit?: number | null;

		/**
		 * Maximum number of managed disks and snapshots of type premium allowed.
		 * Minimum: 0
		 */
		maxAllocationPremiumManagedDisksAndSnapshots?: number | null;

		/**
		 * Maximum number of managed disks and snapshots of type standard allowed.
		 * Minimum: 0
		 */
		maxAllocationStandardManagedDisksAndSnapshots?: number | null;

		/**
		 * Maximum number of virtual machines allowed.
		 * Minimum: 0
		 */
		virtualMachineCount?: number | null;

		/**
		 * Maximum number of scale sets allowed.
		 * Minimum: 0
		 */
		vmScaleSetCount?: number | null;
	}
	export interface Quotas_GetReturnPropertiesFormProperties {

		/**
		 * Maximum number of availability sets allowed.
		 * Minimum: 0
		 */
		availabilitySetCount: FormControl<number | null | undefined>,

		/**
		 * Maximum number of cores allowed.
		 * Minimum: 0
		 */
		coresLimit: FormControl<number | null | undefined>,

		/**
		 * Maximum number of managed disks and snapshots of type premium allowed.
		 * Minimum: 0
		 */
		maxAllocationPremiumManagedDisksAndSnapshots: FormControl<number | null | undefined>,

		/**
		 * Maximum number of managed disks and snapshots of type standard allowed.
		 * Minimum: 0
		 */
		maxAllocationStandardManagedDisksAndSnapshots: FormControl<number | null | undefined>,

		/**
		 * Maximum number of virtual machines allowed.
		 * Minimum: 0
		 */
		virtualMachineCount: FormControl<number | null | undefined>,

		/**
		 * Maximum number of scale sets allowed.
		 * Minimum: 0
		 */
		vmScaleSetCount: FormControl<number | null | undefined>,
	}
	export function CreateQuotas_GetReturnPropertiesFormGroup() {
		return new FormGroup<Quotas_GetReturnPropertiesFormProperties>({
			availabilitySetCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			coresLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			maxAllocationPremiumManagedDisksAndSnapshots: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			maxAllocationStandardManagedDisksAndSnapshots: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			virtualMachineCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			vmScaleSetCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface Quotas_CreateOrUpdatePutBody {

		/** Properties for a Compute Quota */
		properties?: Quotas_CreateOrUpdatePutBodyProperties;
	}
	export interface Quotas_CreateOrUpdatePutBodyFormProperties {
	}
	export function CreateQuotas_CreateOrUpdatePutBodyFormGroup() {
		return new FormGroup<Quotas_CreateOrUpdatePutBodyFormProperties>({
		});

	}

	export interface Quotas_CreateOrUpdatePutBodyProperties {

		/**
		 * Maximum number of availability sets allowed.
		 * Minimum: 0
		 */
		availabilitySetCount?: number | null;

		/**
		 * Maximum number of cores allowed.
		 * Minimum: 0
		 */
		coresLimit?: number | null;

		/**
		 * Maximum number of managed disks and snapshots of type premium allowed.
		 * Minimum: 0
		 */
		maxAllocationPremiumManagedDisksAndSnapshots?: number | null;

		/**
		 * Maximum number of managed disks and snapshots of type standard allowed.
		 * Minimum: 0
		 */
		maxAllocationStandardManagedDisksAndSnapshots?: number | null;

		/**
		 * Maximum number of virtual machines allowed.
		 * Minimum: 0
		 */
		virtualMachineCount?: number | null;

		/**
		 * Maximum number of scale sets allowed.
		 * Minimum: 0
		 */
		vmScaleSetCount?: number | null;
	}
	export interface Quotas_CreateOrUpdatePutBodyPropertiesFormProperties {

		/**
		 * Maximum number of availability sets allowed.
		 * Minimum: 0
		 */
		availabilitySetCount: FormControl<number | null | undefined>,

		/**
		 * Maximum number of cores allowed.
		 * Minimum: 0
		 */
		coresLimit: FormControl<number | null | undefined>,

		/**
		 * Maximum number of managed disks and snapshots of type premium allowed.
		 * Minimum: 0
		 */
		maxAllocationPremiumManagedDisksAndSnapshots: FormControl<number | null | undefined>,

		/**
		 * Maximum number of managed disks and snapshots of type standard allowed.
		 * Minimum: 0
		 */
		maxAllocationStandardManagedDisksAndSnapshots: FormControl<number | null | undefined>,

		/**
		 * Maximum number of virtual machines allowed.
		 * Minimum: 0
		 */
		virtualMachineCount: FormControl<number | null | undefined>,

		/**
		 * Maximum number of scale sets allowed.
		 * Minimum: 0
		 */
		vmScaleSetCount: FormControl<number | null | undefined>,
	}
	export function CreateQuotas_CreateOrUpdatePutBodyPropertiesFormGroup() {
		return new FormGroup<Quotas_CreateOrUpdatePutBodyPropertiesFormProperties>({
			availabilitySetCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			coresLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			maxAllocationPremiumManagedDisksAndSnapshots: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			maxAllocationStandardManagedDisksAndSnapshots: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			virtualMachineCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			vmScaleSetCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface Quotas_CreateOrUpdateReturn {

		/** Properties for a Compute Quota */
		properties?: Quotas_CreateOrUpdateReturnProperties;
	}
	export interface Quotas_CreateOrUpdateReturnFormProperties {
	}
	export function CreateQuotas_CreateOrUpdateReturnFormGroup() {
		return new FormGroup<Quotas_CreateOrUpdateReturnFormProperties>({
		});

	}

	export interface Quotas_CreateOrUpdateReturnProperties {

		/**
		 * Maximum number of availability sets allowed.
		 * Minimum: 0
		 */
		availabilitySetCount?: number | null;

		/**
		 * Maximum number of cores allowed.
		 * Minimum: 0
		 */
		coresLimit?: number | null;

		/**
		 * Maximum number of managed disks and snapshots of type premium allowed.
		 * Minimum: 0
		 */
		maxAllocationPremiumManagedDisksAndSnapshots?: number | null;

		/**
		 * Maximum number of managed disks and snapshots of type standard allowed.
		 * Minimum: 0
		 */
		maxAllocationStandardManagedDisksAndSnapshots?: number | null;

		/**
		 * Maximum number of virtual machines allowed.
		 * Minimum: 0
		 */
		virtualMachineCount?: number | null;

		/**
		 * Maximum number of scale sets allowed.
		 * Minimum: 0
		 */
		vmScaleSetCount?: number | null;
	}
	export interface Quotas_CreateOrUpdateReturnPropertiesFormProperties {

		/**
		 * Maximum number of availability sets allowed.
		 * Minimum: 0
		 */
		availabilitySetCount: FormControl<number | null | undefined>,

		/**
		 * Maximum number of cores allowed.
		 * Minimum: 0
		 */
		coresLimit: FormControl<number | null | undefined>,

		/**
		 * Maximum number of managed disks and snapshots of type premium allowed.
		 * Minimum: 0
		 */
		maxAllocationPremiumManagedDisksAndSnapshots: FormControl<number | null | undefined>,

		/**
		 * Maximum number of managed disks and snapshots of type standard allowed.
		 * Minimum: 0
		 */
		maxAllocationStandardManagedDisksAndSnapshots: FormControl<number | null | undefined>,

		/**
		 * Maximum number of virtual machines allowed.
		 * Minimum: 0
		 */
		virtualMachineCount: FormControl<number | null | undefined>,

		/**
		 * Maximum number of scale sets allowed.
		 * Minimum: 0
		 */
		vmScaleSetCount: FormControl<number | null | undefined>,
	}
	export function CreateQuotas_CreateOrUpdateReturnPropertiesFormGroup() {
		return new FormGroup<Quotas_CreateOrUpdateReturnPropertiesFormProperties>({
			availabilitySetCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			coresLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			maxAllocationPremiumManagedDisksAndSnapshots: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			maxAllocationStandardManagedDisksAndSnapshots: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			virtualMachineCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			vmScaleSetCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

}

