import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Describes an available Compute SKU. */
	export interface ResourceSku {

		/** The api versions that support this SKU. */
		apiVersions?: Array<string>;

		/** A name value pair to describe the capability. */
		capabilities?: Array<ResourceSkuCapabilities>;

		/** Describes scaling information of a SKU. */
		capacity?: ResourceSkuCapacity;

		/** Metadata for retrieving price info. */
		costs?: Array<ResourceSkuCosts>;

		/** The Family of this particular SKU. */
		family?: string | null;

		/** The Kind of resources that are supported in this SKU. */
		kind?: string | null;

		/** A list of locations and availability zones in those locations where the SKU is available. */
		locationInfo?: Array<ResourceSkuLocationInfo>;

		/** The set of locations that the SKU is available. */
		locations?: Array<string>;

		/** The name of SKU. */
		name?: string | null;

		/** The type of resource the SKU applies to. */
		resourceType?: string | null;

		/** The restrictions because of which SKU cannot be used. This is empty if there are no restrictions. */
		restrictions?: Array<ResourceSkuRestrictions>;

		/** The Size of the SKU. */
		size?: string | null;

		/** Specifies the tier of virtual machines in a scale set.<br /><br /> Possible Values:<br /><br /> **Standard**<br /><br /> **Basic** */
		tier?: string | null;
	}

	/** Describes an available Compute SKU. */
	export interface ResourceSkuFormProperties {

		/** The Family of this particular SKU. */
		family: FormControl<string | null | undefined>,

		/** The Kind of resources that are supported in this SKU. */
		kind: FormControl<string | null | undefined>,

		/** The name of SKU. */
		name: FormControl<string | null | undefined>,

		/** The type of resource the SKU applies to. */
		resourceType: FormControl<string | null | undefined>,

		/** The Size of the SKU. */
		size: FormControl<string | null | undefined>,

		/** Specifies the tier of virtual machines in a scale set.<br /><br /> Possible Values:<br /><br /> **Standard**<br /><br /> **Basic** */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateResourceSkuFormGroup() {
		return new FormGroup<ResourceSkuFormProperties>({
			family: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes The SKU capabilities object. */
	export interface ResourceSkuCapabilities {

		/** An invariant to describe the feature. */
		name?: string | null;

		/** An invariant if the feature is measured by quantity. */
		value?: string | null;
	}

	/** Describes The SKU capabilities object. */
	export interface ResourceSkuCapabilitiesFormProperties {

		/** An invariant to describe the feature. */
		name: FormControl<string | null | undefined>,

		/** An invariant if the feature is measured by quantity. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateResourceSkuCapabilitiesFormGroup() {
		return new FormGroup<ResourceSkuCapabilitiesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes metadata for retrieving price info. */
	export interface ResourceSkuCosts {

		/** An invariant to show the extended unit. */
		extendedUnit?: string | null;

		/** Used for querying price from commerce. */
		meterID?: string | null;

		/** The multiplier is needed to extend the base metered cost. */
		quantity?: number | null;
	}

	/** Describes metadata for retrieving price info. */
	export interface ResourceSkuCostsFormProperties {

		/** An invariant to show the extended unit. */
		extendedUnit: FormControl<string | null | undefined>,

		/** Used for querying price from commerce. */
		meterID: FormControl<string | null | undefined>,

		/** The multiplier is needed to extend the base metered cost. */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateResourceSkuCostsFormGroup() {
		return new FormGroup<ResourceSkuCostsFormProperties>({
			extendedUnit: new FormControl<string | null | undefined>(undefined),
			meterID: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResourceSkuLocationInfo {

		/** Location of the SKU */
		location?: string | null;

		/** Details of capabilities available to a SKU in specific zones. */
		zoneDetails?: Array<ResourceSkuZoneDetails>;

		/** List of availability zones where the SKU is supported. */
		zones?: Array<string>;
	}
	export interface ResourceSkuLocationInfoFormProperties {

		/** Location of the SKU */
		location: FormControl<string | null | undefined>,
	}
	export function CreateResourceSkuLocationInfoFormGroup() {
		return new FormGroup<ResourceSkuLocationInfoFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes The zonal capabilities of a SKU. */
	export interface ResourceSkuZoneDetails {

		/** A list of capabilities that are available for the SKU in the specified list of zones. */
		capabilities?: Array<ResourceSkuCapabilities>;

		/** The set of zones that the SKU is available in with the specified capabilities. */
		name?: Array<string>;
	}

	/** Describes The zonal capabilities of a SKU. */
	export interface ResourceSkuZoneDetailsFormProperties {
	}
	export function CreateResourceSkuZoneDetailsFormGroup() {
		return new FormGroup<ResourceSkuZoneDetailsFormProperties>({
		});

	}


	/** Describes scaling information of a SKU. */
	export interface ResourceSkuRestrictions {

		/** The reason for restriction. */
		reasonCode?: ResourceSkuRestrictionsReasonCode | null;
		restrictionInfo?: ResourceSkuRestrictionInfo;

		/** The type of restrictions. */
		type?: ResourceSkuRestrictionsType | null;

		/** The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted. */
		values?: Array<string>;
	}

	/** Describes scaling information of a SKU. */
	export interface ResourceSkuRestrictionsFormProperties {

		/** The reason for restriction. */
		reasonCode: FormControl<ResourceSkuRestrictionsReasonCode | null | undefined>,

		/** The type of restrictions. */
		type: FormControl<ResourceSkuRestrictionsType | null | undefined>,
	}
	export function CreateResourceSkuRestrictionsFormGroup() {
		return new FormGroup<ResourceSkuRestrictionsFormProperties>({
			reasonCode: new FormControl<ResourceSkuRestrictionsReasonCode | null | undefined>(undefined),
			type: new FormControl<ResourceSkuRestrictionsType | null | undefined>(undefined),
		});

	}

	export enum ResourceSkuRestrictionsReasonCode { QuotaId = 0, NotAvailableForSubscription = 1 }

	export enum ResourceSkuRestrictionsType { Location = 0, Zone = 1 }


	/** Describes scaling information of a SKU. */
	export interface ResourceSkuCapacity {

		/** The default capacity. */
		default?: number | null;

		/** The maximum capacity that can be set. */
		maximum?: number | null;

		/** The minimum capacity. */
		minimum?: number | null;

		/** The scale type applicable to the sku. */
		scaleType?: ResourceSkuCapacityScaleType | null;
	}

	/** Describes scaling information of a SKU. */
	export interface ResourceSkuCapacityFormProperties {

		/** The default capacity. */
		default: FormControl<number | null | undefined>,

		/** The maximum capacity that can be set. */
		maximum: FormControl<number | null | undefined>,

		/** The minimum capacity. */
		minimum: FormControl<number | null | undefined>,

		/** The scale type applicable to the sku. */
		scaleType: FormControl<ResourceSkuCapacityScaleType | null | undefined>,
	}
	export function CreateResourceSkuCapacityFormGroup() {
		return new FormGroup<ResourceSkuCapacityFormProperties>({
			default: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			scaleType: new FormControl<ResourceSkuCapacityScaleType | null | undefined>(undefined),
		});

	}

	export enum ResourceSkuCapacityScaleType { Automatic = 0, Manual = 1, None = 2 }

	export interface ResourceSkuRestrictionInfo {

		/** Locations where the SKU is restricted */
		locations?: Array<string>;

		/** List of availability zones where the SKU is restricted. */
		zones?: Array<string>;
	}
	export interface ResourceSkuRestrictionInfoFormProperties {
	}
	export function CreateResourceSkuRestrictionInfoFormGroup() {
		return new FormGroup<ResourceSkuRestrictionInfoFormProperties>({
		});

	}


	/** The List Resource Skus operation response. */
	export interface ResourceSkusResult {

		/** The URI to fetch the next page of Resource Skus. Call ListNext() with this URI to fetch the next page of Resource Skus */
		nextLink?: string | null;

		/**
		 * The list of skus available for the subscription.
		 * Required
		 */
		value: Array<ResourceSku>;
	}

	/** The List Resource Skus operation response. */
	export interface ResourceSkusResultFormProperties {

		/** The URI to fetch the next page of Resource Skus. Call ListNext() with this URI to fetch the next page of Resource Skus */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateResourceSkusResultFormGroup() {
		return new FormGroup<ResourceSkusResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the list of Microsoft.Compute SKUs available for your Subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute/skus
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} filter The filter to apply on the operation.
		 * @return {ResourceSkusResult} OK
		 */
		ResourceSkus_List(api_version: string, subscriptionId: string, filter: string | null | undefined): Observable<ResourceSkusResult> {
			return this.http.get<ResourceSkusResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute/skus?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}
	}

}

