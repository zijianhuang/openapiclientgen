import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A type that defines the fields for an ad. */
	export interface Ad {

		/** A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model. This ID is created after a successful <a href="/api-docs/sell/marketing/resources/adgroup/methods/createAdGroup">createAdGroup</a> call, and all ad groups must be associated with a CPC campaign. */
		adGroupId?: string | null;

		/** A unique eBay-assigned ID that is generated when the ad is created. */
		adId?: string | null;

		/** The current status of the CPC ad.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul><span class="tablenote"><b>Note:</b> This type only applies to the Cost Per Click (CPC) funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdStatusEnum'>eBay API documentation</a> */
		adStatus?: string | null;

		/** An array containing alert messages for the ad. */
		alerts?: Array<Alert>;

		/** The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><span class="tablenote"><b>Note:</b>This field will always be returned for campaigns that use the Cost Per Sale (CPS) funding model. It will not be returned for campaigns that use the Cost Per Click (CPC) funding model.</span><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0 */
		bidPercentage?: string | null;

		/** An ID that identifies a single-item listing or multiple-variation listing that is managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>. <p>The <i>inventory reference ID</i> is a seller-defined value that can be either an <b>SKU</b> for a single-item listing or an <b>inventoryItemGroupKey</b> for a multiple-value listing.</p>  <p>An <i>inventoryItemGroupKey</i> is a value that the seller defines to indicate a listing that's the parent of an inventory item group (a multiple-variation listing, such as a listing for a shirt that's available in multiple sizes and colors).</p><p>This field is only returned if the ad is associated with a SKU or an inventory item group value.</p> */
		inventoryReferenceId?: string | null;

		/** The enumeration value returned here indicates the type of listing the inventoryReferenceId references. The value returned here will be <code>INVENTORY_ITEM</code> for a single-variation listing, or <code>INVENTORY_ITEM_GROUP</code> for a multiple-variation listing. <p>This field is only returned if the ad is associated with a SKU or an inventory item group value.</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a> */
		inventoryReferenceType?: string | null;

		/** A unique eBay-assigned ID that is generated when a listing is created. */
		listingId?: string | null;
	}

	/** A type that defines the fields for an ad. */
	export interface AdFormProperties {

		/** A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model. This ID is created after a successful <a href="/api-docs/sell/marketing/resources/adgroup/methods/createAdGroup">createAdGroup</a> call, and all ad groups must be associated with a CPC campaign. */
		adGroupId: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID that is generated when the ad is created. */
		adId: FormControl<string | null | undefined>,

		/** The current status of the CPC ad.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul><span class="tablenote"><b>Note:</b> This type only applies to the Cost Per Click (CPC) funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdStatusEnum'>eBay API documentation</a> */
		adStatus: FormControl<string | null | undefined>,

		/** The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><span class="tablenote"><b>Note:</b>This field will always be returned for campaigns that use the Cost Per Sale (CPS) funding model. It will not be returned for campaigns that use the Cost Per Click (CPC) funding model.</span><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0 */
		bidPercentage: FormControl<string | null | undefined>,

		/** An ID that identifies a single-item listing or multiple-variation listing that is managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>. <p>The <i>inventory reference ID</i> is a seller-defined value that can be either an <b>SKU</b> for a single-item listing or an <b>inventoryItemGroupKey</b> for a multiple-value listing.</p>  <p>An <i>inventoryItemGroupKey</i> is a value that the seller defines to indicate a listing that's the parent of an inventory item group (a multiple-variation listing, such as a listing for a shirt that's available in multiple sizes and colors).</p><p>This field is only returned if the ad is associated with a SKU or an inventory item group value.</p> */
		inventoryReferenceId: FormControl<string | null | undefined>,

		/** The enumeration value returned here indicates the type of listing the inventoryReferenceId references. The value returned here will be <code>INVENTORY_ITEM</code> for a single-variation listing, or <code>INVENTORY_ITEM_GROUP</code> for a multiple-variation listing. <p>This field is only returned if the ad is associated with a SKU or an inventory item group value.</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a> */
		inventoryReferenceType: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID that is generated when a listing is created. */
		listingId: FormControl<string | null | undefined>,
	}
	export function CreateAdFormGroup() {
		return new FormGroup<AdFormProperties>({
			adGroupId: new FormControl<string | null | undefined>(undefined),
			adId: new FormControl<string | null | undefined>(undefined),
			adStatus: new FormControl<string | null | undefined>(undefined),
			bidPercentage: new FormControl<string | null | undefined>(undefined),
			inventoryReferenceId: new FormControl<string | null | undefined>(undefined),
			inventoryReferenceType: new FormControl<string | null | undefined>(undefined),
			listingId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that contains the alert message fields for the ad. */
	export interface Alert {

		/** The type of alert message. For example, an invalid bid percentage. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AlertTypeEnum'>eBay API documentation</a> */
		alertType?: string | null;

		/** A description of the alert including dimensions and aspects. */
		details?: Array<AlertDetails>;
	}

	/** A type that contains the alert message fields for the ad. */
	export interface AlertFormProperties {

		/** The type of alert message. For example, an invalid bid percentage. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AlertTypeEnum'>eBay API documentation</a> */
		alertType: FormControl<string | null | undefined>,
	}
	export function CreateAlertFormGroup() {
		return new FormGroup<AlertFormProperties>({
			alertType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that contains the alert detail fields. */
	export interface AlertDetails {

		/** A type that contains the aspect fields. */
		aspect?: Aspect;

		/** A type that contains the dimension fields. */
		dimension?: AlertDimension;
	}

	/** A type that contains the alert detail fields. */
	export interface AlertDetailsFormProperties {
	}
	export function CreateAlertDetailsFormGroup() {
		return new FormGroup<AlertDetailsFormProperties>({
		});

	}


	/** A type that contains the aspect fields. */
	export interface Aspect {

		/** The type of the aspect. For example, <code>MINIMUM_REQUIRED</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AspectKeyEnum'>eBay API documentation</a> */
		key?: string | null;

		/** The value of the aspect. For example, if the aspect is a percentage, a value of '2.0' would equal 2%. */
		value?: string | null;
	}

	/** A type that contains the aspect fields. */
	export interface AspectFormProperties {

		/** The type of the aspect. For example, <code>MINIMUM_REQUIRED</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AspectKeyEnum'>eBay API documentation</a> */
		key: FormControl<string | null | undefined>,

		/** The value of the aspect. For example, if the aspect is a percentage, a value of '2.0' would equal 2%. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAspectFormGroup() {
		return new FormGroup<AspectFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that contains the dimension fields. */
	export interface AlertDimension {

		/** The key field of the applied dimension. For example, the marketplace Id. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:DimensionKeyEnum'>eBay API documentation</a> */
		key?: string | null;

		/** The value field of the applied dimension. For example, if the key is a <code>MARKETPLACE_ID</code>, the value would be from <a href='/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>MarketplaceIdEnum</a>. */
		value?: string | null;
	}

	/** A type that contains the dimension fields. */
	export interface AlertDimensionFormProperties {

		/** The key field of the applied dimension. For example, the marketplace Id. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:DimensionKeyEnum'>eBay API documentation</a> */
		key: FormControl<string | null | undefined>,

		/** The value field of the applied dimension. For example, if the key is a <code>MARKETPLACE_ID</code>, the value would be from <a href='/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>MarketplaceIdEnum</a>. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAlertDimensionFormGroup() {
		return new FormGroup<AlertDimensionFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container for the details of an existing ad group.<br /><br />An ad group can be added to a campaign that uses the Cost Per Click (CPC) funding model. A campaign may have multiple ad groups. All listings that are promoted in the campaign are included in the ad group.<br /><br /><span class="tablenote"><b>Note:</b> This type only applies to the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span> */
	export interface AdGroup {

		/** A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model. */
		adGroupId?: string | null;

		/** An enumeration value representing the current status of the ad group.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdGroupStatusEnum'>eBay API documentation</a> */
		adGroupStatus?: string | null;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		defaultBid?: Amount;

		/** The seller-defined name of the ad group. */
		name?: string | null;
	}

	/** A container for the details of an existing ad group.<br /><br />An ad group can be added to a campaign that uses the Cost Per Click (CPC) funding model. A campaign may have multiple ad groups. All listings that are promoted in the campaign are included in the ad group.<br /><br /><span class="tablenote"><b>Note:</b> This type only applies to the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span> */
	export interface AdGroupFormProperties {

		/** A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model. */
		adGroupId: FormControl<string | null | undefined>,

		/** An enumeration value representing the current status of the ad group.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdGroupStatusEnum'>eBay API documentation</a> */
		adGroupStatus: FormControl<string | null | undefined>,

		/** The seller-defined name of the ad group. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAdGroupFormGroup() {
		return new FormGroup<AdGroupFormProperties>({
			adGroupId: new FormControl<string | null | undefined>(undefined),
			adGroupStatus: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that describes the value of a monetary amount as represented by a global currency. */
	export interface Amount {

		/** The base currency applied to the <b>value</b> field to establish a monetary amount.  <br><br>The currency is represented as a 3-letter <a href="https://www.iso.org/iso-4217-currency-codes.html " title="https://www.iso.org " target="_blank">ISO 4217</a> currency code. For example, the code for the Canadian Dollar is <code>CAD</code>.  <br><br><b>Default:</b> The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:CurrencyCodeEnum'>eBay API documentation</a> */
		currency?: string | null;

		/** The monetary amount in the specified <b>currency</b>.  <br><br><i>Required in</i> the <b>amount</b> type. */
		value?: string | null;
	}

	/** A complex type that describes the value of a monetary amount as represented by a global currency. */
	export interface AmountFormProperties {

		/** The base currency applied to the <b>value</b> field to establish a monetary amount.  <br><br>The currency is represented as a 3-letter <a href="https://www.iso.org/iso-4217-currency-codes.html " title="https://www.iso.org " target="_blank">ISO 4217</a> currency code. For example, the code for the Canadian Dollar is <code>CAD</code>.  <br><br><b>Default:</b> The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:CurrencyCodeEnum'>eBay API documentation</a> */
		currency: FormControl<string | null | undefined>,

		/** The monetary amount in the specified <b>currency</b>.  <br><br><i>Required in</i> the <b>amount</b> type. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAmountFormGroup() {
		return new FormGroup<AmountFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container for the details of a paged collection of ad groups.<br /><br /><span class="tablenote"><b>Note:</b> This type only applies to the Cost Per Click (CPC) funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span> */
	export interface AdGroupPagedCollectionResponse {

		/** The details of existing ad groups, such as the name, ID, and status of the ad groups. */
		adGroups?: Array<AdGroup>;

		/** The URI of the current page of results from the result set. */
		href?: string | null;

		/**
		 * The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set. */
		next?: string | null;

		/**
		 * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p><b>Default:</b> 0</p><br><span class="tablenote"><b>Note: </b>The items in a paginated result set use a zero-based list, where the first item in the list has an offset of <code>0</code>.</span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results. */
		prev?: string | null;

		/**
		 * The total number of items retrieved in the result set.<br /><br /><span class="tablenote"><b>Note: </b>If no items are found, this field is returned with a value of <code>0</code>.</span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}

	/** A container for the details of a paged collection of ad groups.<br /><br /><span class="tablenote"><b>Note:</b> This type only applies to the Cost Per Click (CPC) funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span> */
	export interface AdGroupPagedCollectionResponseFormProperties {

		/** The URI of the current page of results from the result set. */
		href: FormControl<string | null | undefined>,

		/**
		 * The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set. */
		next: FormControl<string | null | undefined>,

		/**
		 * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p><b>Default:</b> 0</p><br><span class="tablenote"><b>Note: </b>The items in a paginated result set use a zero-based list, where the first item in the list has an offset of <code>0</code>.</span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results. */
		prev: FormControl<string | null | undefined>,

		/**
		 * The total number of items retrieved in the result set.<br /><br /><span class="tablenote"><b>Note: </b>If no items are found, this field is returned with a value of <code>0</code>.</span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateAdGroupPagedCollectionResponseFormGroup() {
		return new FormGroup<AdGroupPagedCollectionResponseFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type is a container for a list of ad IDs. */
	export interface AdIds {

		/** A list of ad IDs. Only one ad can be deleted per operation and only one adId value will be returned. */
		adIds?: Array<string>;
	}

	/** This type is a container for a list of ad IDs. */
	export interface AdIdsFormProperties {
	}
	export function CreateAdIdsFormGroup() {
		return new FormGroup<AdIdsFormProperties>({
		});

	}


	/** This type defines the fields that paginate the ads returned by the request. The entire <i>result set</i> consists of 0 or more sequenced <i>response pages</i>, where each page consists of 0 or more items from the complete result set. */
	export interface AdPagedCollectionResponse {

		/** The list of ads that matched the request criteria. */
		ads?: Array<Ad>;

		/** The URI of the current page of results from the result set. */
		href?: string | null;

		/**
		 * The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.<p><b>Default</b>: <code>10</code>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** The call URI that can be used to retrieve the next page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be increased to retrieve the next page of results. <br><br><b>Max length</b>: 2048 */
		next?: string | null;

		/**
		 * The number of results skipped in the result set before listing the first result on the current page. This value can be set in the request with the <b>offset</b> query parameter. If the <b>offset</b> value is not set, it defaults to zero.<p><b>Default</b>: <code>0</code></p><p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results. <br><br><b>Max length</b>: 2048 */
		prev?: string | null;

		/**
		 * The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}

	/** This type defines the fields that paginate the ads returned by the request. The entire <i>result set</i> consists of 0 or more sequenced <i>response pages</i>, where each page consists of 0 or more items from the complete result set. */
	export interface AdPagedCollectionResponseFormProperties {

		/** The URI of the current page of results from the result set. */
		href: FormControl<string | null | undefined>,

		/**
		 * The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.<p><b>Default</b>: <code>10</code>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** The call URI that can be used to retrieve the next page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be increased to retrieve the next page of results. <br><br><b>Max length</b>: 2048 */
		next: FormControl<string | null | undefined>,

		/**
		 * The number of results skipped in the result set before listing the first result on the current page. This value can be set in the request with the <b>offset</b> query parameter. If the <b>offset</b> value is not set, it defaults to zero.<p><b>Default</b>: <code>0</code></p><p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results. <br><br><b>Max length</b>: 2048 */
		prev: FormControl<string | null | undefined>,

		/**
		 * The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateAdPagedCollectionResponseFormGroup() {
		return new FormGroup<AdPagedCollectionResponseFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type defines the fields for an ad ID and its associated URL. */
	export interface AdReference {

		/** A unique eBay-assigned ID for an ad. This ID is generated when an ad is created. */
		adId?: string | null;

		/** The getAd URI of an ad. You can use this URI to retrieve the ad. */
		href?: string | null;
	}

	/** This type defines the fields for an ad ID and its associated URL. */
	export interface AdReferenceFormProperties {

		/** A unique eBay-assigned ID for an ad. This ID is generated when an ad is created. */
		adId: FormControl<string | null | undefined>,

		/** The getAd URI of an ad. You can use this URI to retrieve the ad. */
		href: FormControl<string | null | undefined>,
	}
	export function CreateAdReferenceFormGroup() {
		return new FormGroup<AdReferenceFormProperties>({
			adId: new FormControl<string | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is a container for a list of ad IDs and their associated URIs. */
	export interface AdReferences {

		/** A list of ad IDs. An ad ID is generated for each successfully created ad. Only one ad can be created per operation. */
		ads?: Array<AdReference>;
	}

	/** This type is a container for a list of ad IDs and their associated URIs. */
	export interface AdReferencesFormProperties {
	}
	export function CreateAdReferencesFormGroup() {
		return new FormGroup<AdReferencesFormProperties>({
		});

	}


	/** This type defines the fields returned in an ad response. */
	export interface AdResponse {

		/** A unique eBay-assigned ID for an ad group in a Promoted Listings Advanced (PLA) campaign that uses the Cost Per Click (CPC) funding model.<span class="tablenote"><b>Note:</b> This field will always be returned for  campaigns that use the CPC funding model. It will not be returned for campaigns that use the Cost Per Sale (CPS) funding model.</span> */
		adGroupId?: string | null;

		/** A unique eBay-assigned ID for an ad. This ID is generated when an ad is created.<span class="tablenote"><b>Note:</b>This field is only returned when an ad is successfully created for the corresponding listing.</span> */
		adId?: string | null;

		/** An array of errors associated with the request. */
		errors?: Array<Error>;

		/** The getAd URI that points to the ad.<span class="tablenote"><b>Note:</b>This field is only returned when an ad is successfully created for the corresponding listing.</span> */
		href?: string | null;

		/** A unique eBay-assigned ID for a listing that is generated when the listing is created. */
		listingId?: string | null;

		/**
		 * An HTTP status code indicating if the corresponding ad was successfully created or not. <code>200 Successful</code> should be returned for successfully created ads.<span class="tablenote"><b>Note:</b>A status code is returned for each ad that the seller creates, or attempts to create.</span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;
	}

	/** This type defines the fields returned in an ad response. */
	export interface AdResponseFormProperties {

		/** A unique eBay-assigned ID for an ad group in a Promoted Listings Advanced (PLA) campaign that uses the Cost Per Click (CPC) funding model.<span class="tablenote"><b>Note:</b> This field will always be returned for  campaigns that use the CPC funding model. It will not be returned for campaigns that use the Cost Per Sale (CPS) funding model.</span> */
		adGroupId: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID for an ad. This ID is generated when an ad is created.<span class="tablenote"><b>Note:</b>This field is only returned when an ad is successfully created for the corresponding listing.</span> */
		adId: FormControl<string | null | undefined>,

		/** The getAd URI that points to the ad.<span class="tablenote"><b>Note:</b>This field is only returned when an ad is successfully created for the corresponding listing.</span> */
		href: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID for a listing that is generated when the listing is created. */
		listingId: FormControl<string | null | undefined>,

		/**
		 * An HTTP status code indicating if the corresponding ad was successfully created or not. <code>200 Successful</code> should be returned for successfully created ads.<span class="tablenote"><b>Note:</b>A status code is returned for each ad that the seller creates, or attempts to create.</span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateAdResponseFormGroup() {
		return new FormGroup<AdResponseFormProperties>({
			adGroupId: new FormControl<string | null | undefined>(undefined),
			adId: new FormControl<string | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			listingId: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A container that defines the elements of error and warning messages. */
	export interface Error {

		/** The category type for this error or warning. It takes an ErrorCategory object which can have one of three values:<ul><li><code>Application</code>: Indicates an exception or error occurred in the application code or at runtime. Examples include catching an exception in a service's business logic, system failures, or request errors from a dependency.</li><li><code>Business</code>: Used when your service or a dependent service refused to continue processing on the resource because of a business rule violation such as "Seller does not ship item to Antarctica" or "Buyer ineligible to purchase an alcoholic item". Business errors are not syntactical input errors.</li><li><code>Request</code>: Used when there is anything wrong with the request, such as authentication, syntactical errors, rate limiting or missing headers, bad HTTP header values, and so on.</li></ul> */
		category?: string | null;

		/** Name of the domain containing the service or application. */
		domain?: string | null;

		/**
		 * A positive integer that uniquely identifies the specific error condition that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorId?: number | null;

		/** Identifies specific request elements associated with the error, if any. inputRefId's response is format specific. For JSON, use <i>JSONPath</i> notation. */
		inputRefIds?: Array<string>;

		/** An expanded version of message that should be around 100-200 characters long, but is not required to be such. */
		longMessage?: string | null;

		/** An end user and app developer friendly device agnostic message. It explains what the error or warning is, and how to fix it (in a general sense). Its value is at most 50 characters long. If applicable, the value is localized in the end user's requested locale. */
		message?: string | null;

		/** Identifies specific response elements associated with the error, if any. Path format is the same as <code>inputRefId</code>. */
		outputRefIds?: Array<string>;

		/** This optional complex field type contains a list of one or more context-specific <code>ErrorParameter</code> objects, with each item in the list entry being a parameter (or input field name) that caused an error condition. Each <code>ErrorParameter</code> object consists of two fields, a <code>name</code> and a <code>value</code>. */
		parameters?: Array<ErrorParameter>;

		/** Name of the domain's subsystem or subdivision. For example, checkout is a subdomain in the buying domain. */
		subdomain?: string | null;
	}

	/** A container that defines the elements of error and warning messages. */
	export interface ErrorFormProperties {

		/** The category type for this error or warning. It takes an ErrorCategory object which can have one of three values:<ul><li><code>Application</code>: Indicates an exception or error occurred in the application code or at runtime. Examples include catching an exception in a service's business logic, system failures, or request errors from a dependency.</li><li><code>Business</code>: Used when your service or a dependent service refused to continue processing on the resource because of a business rule violation such as "Seller does not ship item to Antarctica" or "Buyer ineligible to purchase an alcoholic item". Business errors are not syntactical input errors.</li><li><code>Request</code>: Used when there is anything wrong with the request, such as authentication, syntactical errors, rate limiting or missing headers, bad HTTP header values, and so on.</li></ul> */
		category: FormControl<string | null | undefined>,

		/** Name of the domain containing the service or application. */
		domain: FormControl<string | null | undefined>,

		/**
		 * A positive integer that uniquely identifies the specific error condition that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorId: FormControl<number | null | undefined>,

		/** An expanded version of message that should be around 100-200 characters long, but is not required to be such. */
		longMessage: FormControl<string | null | undefined>,

		/** An end user and app developer friendly device agnostic message. It explains what the error or warning is, and how to fix it (in a general sense). Its value is at most 50 characters long. If applicable, the value is localized in the end user's requested locale. */
		message: FormControl<string | null | undefined>,

		/** Name of the domain's subsystem or subdivision. For example, checkout is a subdomain in the buying domain. */
		subdomain: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			errorId: new FormControl<number | null | undefined>(undefined),
			longMessage: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			subdomain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for a error parameter. */
	export interface ErrorParameter {

		/** Name of the entity that threw the error. */
		name?: string | null;

		/** A description of the error. */
		value?: string | null;
	}

	/** Container for a error parameter. */
	export interface ErrorParameterFormProperties {

		/** Name of the entity that threw the error. */
		name: FormControl<string | null | undefined>,

		/** A description of the error. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateErrorParameterFormGroup() {
		return new FormGroup<ErrorParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that contains the fields for the ad update response. */
	export interface AdUpdateResponse {

		/** A unique eBay-assigned ID that is generated when the ad is created. */
		adId?: string | null;

		/** A list of errors associated with the specified listing ID. */
		errors?: Array<Error>;

		/** The URI for the ad, which can be used to retrieve the ad. */
		href?: string | null;

		/** A unique eBay-assigned ID that is generated when the listing is created. */
		listingId?: string | null;

		/**
		 * An HTTP status code that indicates the response-status of the request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;
	}

	/** A type that contains the fields for the ad update response. */
	export interface AdUpdateResponseFormProperties {

		/** A unique eBay-assigned ID that is generated when the ad is created. */
		adId: FormControl<string | null | undefined>,

		/** The URI for the ad, which can be used to retrieve the ad. */
		href: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID that is generated when the listing is created. */
		listingId: FormControl<string | null | undefined>,

		/**
		 * An HTTP status code that indicates the response-status of the request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateAdUpdateResponseFormGroup() {
		return new FormGroup<AdUpdateResponseFormProperties>({
			adId: new FormControl<string | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			listingId: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A type that contains the fields for the ad update status by listing ID response. */
	export interface AdUpdateStatusByListingIdResponse {

		/** A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model. */
		adGroupId?: string | null;

		/** A list of errors associated with the specified listing ID. */
		errors?: Array<Error>;

		/** The URI for the ad, which can be used to retrieve the ad. */
		href?: string | null;

		/** A unique eBay-assigned ID that is generated when the listing is created. */
		listingId?: string | null;

		/**
		 * An HTTP status code that indicates the response-status of the request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;
	}

	/** A type that contains the fields for the ad update status by listing ID response. */
	export interface AdUpdateStatusByListingIdResponseFormProperties {

		/** A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model. */
		adGroupId: FormControl<string | null | undefined>,

		/** The URI for the ad, which can be used to retrieve the ad. */
		href: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID that is generated when the listing is created. */
		listingId: FormControl<string | null | undefined>,

		/**
		 * An HTTP status code that indicates the response-status of the request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateAdUpdateStatusByListingIdResponseFormGroup() {
		return new FormGroup<AdUpdateStatusByListingIdResponseFormProperties>({
			adGroupId: new FormControl<string | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			listingId: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A type that contains the fields for the ad update status response. */
	export interface AdUpdateStatusResponse {

		/** A unique eBay-assigned ID that is generated when the ad is created. */
		adId?: string | null;

		/** A list of errors associated with the specified listing ID. */
		errors?: Array<Error>;

		/** The URI for the ad, which can be used to retrieve the ad. */
		href?: string | null;

		/**
		 * An HTTP status code that indicates the response-status of the request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;
	}

	/** A type that contains the fields for the ad update status response. */
	export interface AdUpdateStatusResponseFormProperties {

		/** A unique eBay-assigned ID that is generated when the ad is created. */
		adId: FormControl<string | null | undefined>,

		/** The URI for the ad, which can be used to retrieve the ad. */
		href: FormControl<string | null | undefined>,

		/**
		 * An HTTP status code that indicates the response-status of the request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateAdUpdateStatusResponseFormGroup() {
		return new FormGroup<AdUpdateStatusResponseFormProperties>({
			adId: new FormControl<string | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A type that provides additional information for suggested keywords. */
	export interface AdditionalInfo {

		/** The type of additional information provided for the suggested keyword.<br /><br /><strong>Valid Value:</strong> <code>KEYWORD_INSIGHTS</code> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdditionalInfoEnum'>eBay API documentation</a> */
		infoType?: string | null;

		/** A list of additional data provided for the suggested keyword. */
		metrics?: Array<AdditionalInfoData>;
	}

	/** A type that provides additional information for suggested keywords. */
	export interface AdditionalInfoFormProperties {

		/** The type of additional information provided for the suggested keyword.<br /><br /><strong>Valid Value:</strong> <code>KEYWORD_INSIGHTS</code> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdditionalInfoEnum'>eBay API documentation</a> */
		infoType: FormControl<string | null | undefined>,
	}
	export function CreateAdditionalInfoFormGroup() {
		return new FormGroup<AdditionalInfoFormProperties>({
			infoType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that defines the data produced for additional information about suggested keywords. */
	export interface AdditionalInfoData {

		/** The metric used to provide additional information for the suggested keyword.<br /><br /><strong>Valid Values:</strong> <ul><li><code>ACTIVE_SELLER_COUNT</code></li><li><code>SEARCH_VOLUME</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MetricEnum'>eBay API documentation</a> */
		metricKey?: string | null;

		/** The data provided for the specified metric.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> All metric data is compiled for the marketplace associated with the specified campaign ID.</span> */
		value?: string | null;
	}

	/** A type that defines the data produced for additional information about suggested keywords. */
	export interface AdditionalInfoDataFormProperties {

		/** The metric used to provide additional information for the suggested keyword.<br /><br /><strong>Valid Values:</strong> <ul><li><code>ACTIVE_SELLER_COUNT</code></li><li><code>SEARCH_VOLUME</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MetricEnum'>eBay API documentation</a> */
		metricKey: FormControl<string | null | undefined>,

		/** The data provided for the specified metric.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> All metric data is compiled for the marketplace associated with the specified campaign ID.</span> */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAdditionalInfoDataFormGroup() {
		return new FormGroup<AdditionalInfoDataFormProperties>({
			metricKey: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the container for an array of ads. */
	export interface Ads {

		/** A list of ad IDs. An ad ID is generated for each successfully created ad. */
		ads?: Array<Ad>;
	}

	/** This type defines the container for an array of ads. */
	export interface AdsFormProperties {
	}
	export function CreateAdsFormGroup() {
		return new FormGroup<AdsFormProperties>({
		});

	}


	/** This type defines the fields for any warning error messages. */
	export interface BaseResponse {

		/** The container for any warning error messages generated by the request. Warnings are not fatal in that they do not prevent the call from running and returning a response, but they should be reviewed to ensure your requests are returning the responses you expect. */
		warnings?: Array<Error>;
	}

	/** This type defines the fields for any warning error messages. */
	export interface BaseResponseFormProperties {
	}
	export function CreateBaseResponseFormGroup() {
		return new FormGroup<BaseResponseFormProperties>({
		});

	}


	/** A container for the budget details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model.<br /><br /><span class="tablenote"><b>Note:</b> This container will only be returned for campaigns using the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span> */
	export interface Budget {

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		amount?: Amount;

		/** The budget status for a CPC Promoted Listings campaign. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:BudgetStatusEnum'>eBay API documentation</a> */
		budgetStatus?: string | null;
	}

	/** A container for the budget details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model.<br /><br /><span class="tablenote"><b>Note:</b> This container will only be returned for campaigns using the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span> */
	export interface BudgetFormProperties {

		/** The budget status for a CPC Promoted Listings campaign. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:BudgetStatusEnum'>eBay API documentation</a> */
		budgetStatus: FormControl<string | null | undefined>,
	}
	export function CreateBudgetFormGroup() {
		return new FormGroup<BudgetFormProperties>({
			budgetStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container for the budget details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model.<br /><br /><span class="tablenote"><b>Note:</b> This container will only be returned for campaigns using the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span> */
	export interface BudgetRequest {

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		amount?: Amount;
	}

	/** A container for the budget details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model.<br /><br /><span class="tablenote"><b>Note:</b> This container will only be returned for campaigns using the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span> */
	export interface BudgetRequestFormProperties {
	}
	export function CreateBudgetRequestFormGroup() {
		return new FormGroup<BudgetRequestFormProperties>({
		});

	}


	/** This type defines the fields for the create ads in bulk response. */
	export interface BulkAdResponse {

		/** This array displays the list of ads that were successfully created. For any ads that were not created successfully, the errors array may provide more detail about why creation of one or more ads failed. */
		responses?: Array<AdResponse>;
	}

	/** This type defines the fields for the create ads in bulk response. */
	export interface BulkAdResponseFormProperties {
	}
	export function CreateBulkAdResponseFormGroup() {
		return new FormGroup<BulkAdResponseFormProperties>({
		});

	}


	/** A type that defines the fields for updated ads in the bulk response. */
	export interface BulkAdUpdateResponse {

		/** A set of ad listings processed by the call. */
		responses?: Array<AdUpdateResponse>;
	}

	/** A type that defines the fields for updated ads in the bulk response. */
	export interface BulkAdUpdateResponseFormProperties {
	}
	export function CreateBulkAdUpdateResponseFormGroup() {
		return new FormGroup<BulkAdUpdateResponseFormProperties>({
		});

	}


	/** A type that defines the fields for the updated ad status in the bulk response. */
	export interface BulkAdUpdateStatusByListingIdResponse {

		/** An array of processed ad listings in bulk. */
		responses?: Array<AdUpdateStatusByListingIdResponse>;
	}

	/** A type that defines the fields for the updated ad status in the bulk response. */
	export interface BulkAdUpdateStatusByListingIdResponseFormProperties {
	}
	export function CreateBulkAdUpdateStatusByListingIdResponseFormGroup() {
		return new FormGroup<BulkAdUpdateStatusByListingIdResponseFormProperties>({
		});

	}


	/** A type that defines the fields for the updated ad status in the bulk response. */
	export interface BulkAdUpdateStatusResponse {

		/** An array of processed ad listings in bulk. */
		responses?: Array<AdUpdateStatusResponse>;
	}

	/** A type that defines the fields for the updated ad status in the bulk response. */
	export interface BulkAdUpdateStatusResponseFormProperties {
	}
	export function CreateBulkAdUpdateStatusResponseFormGroup() {
		return new FormGroup<BulkAdUpdateStatusResponseFormProperties>({
		});

	}


	/** This type defines the fields for the create ads in bulk by listing IDs. */
	export interface BulkCreateAdRequest {

		/** An array of listing IDs and their associated bid percentages, which the request uses to create ads in bulk. This request accepts both listing IDs, as generated by the Inventory API, and an item IDs, as used in the eBay Traditional API set (e.g., the Trading and Finding APIs).  <br><br><b>Maximum: </b> 500 IDs per call */
		requests?: Array<CreateAdRequest>;
	}

	/** This type defines the fields for the create ads in bulk by listing IDs. */
	export interface BulkCreateAdRequestFormProperties {
	}
	export function CreateBulkCreateAdRequestFormGroup() {
		return new FormGroup<BulkCreateAdRequestFormProperties>({
		});

	}


	/** This type defines the fields for the create ad request. */
	export interface CreateAdRequest {

		/** A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model. <p><i>Required if</i> the campaign's funding model is Cost Per Click (CPC).</p><p>Create an ad group using the <a href="/api-docs/sell/marketing/resources/adgroup/methods/createAdGroup">createAdGroup</a> method.</p><p>Specify the campaign to associate the ad group with using the <b>campaign_id</b> path parameter. </p><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span> */
		adGroupId?: string | null;

		/** The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.<br><br><i>Required if</i> the campaign's funding model is Cost Per Sale (CPS).  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>,&nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0 */
		bidPercentage?: string | null;

		/** A unique eBay-assigned ID for a listing that is generated when the listing is created.  <p class="tablenote"><b>Note:</b> This field accepts listing IDs, as generated by the Inventory API, and item IDs, as used in the eBay Traditional API set (e.g., the Trading and Finding APIs).</p> */
		listingId?: string | null;
	}

	/** This type defines the fields for the create ad request. */
	export interface CreateAdRequestFormProperties {

		/** A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model. <p><i>Required if</i> the campaign's funding model is Cost Per Click (CPC).</p><p>Create an ad group using the <a href="/api-docs/sell/marketing/resources/adgroup/methods/createAdGroup">createAdGroup</a> method.</p><p>Specify the campaign to associate the ad group with using the <b>campaign_id</b> path parameter. </p><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span> */
		adGroupId: FormControl<string | null | undefined>,

		/** The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.<br><br><i>Required if</i> the campaign's funding model is Cost Per Sale (CPS).  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>,&nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0 */
		bidPercentage: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID for a listing that is generated when the listing is created.  <p class="tablenote"><b>Note:</b> This field accepts listing IDs, as generated by the Inventory API, and item IDs, as used in the eBay Traditional API set (e.g., the Trading and Finding APIs).</p> */
		listingId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAdRequestFormGroup() {
		return new FormGroup<CreateAdRequestFormProperties>({
			adGroupId: new FormControl<string | null | undefined>(undefined),
			bidPercentage: new FormControl<string | null | undefined>(undefined),
			listingId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the fields used to create ads in bulk by inventory reference IDs. */
	export interface BulkCreateAdsByInventoryReferenceRequest {

		/** A list of inventory reference ID and inventory reference type pairs, and the bid percentage, which the call uses to create ads in bulk. */
		requests?: Array<CreateAdsByInventoryReferenceRequest>;
	}

	/** This type defines the fields used to create ads in bulk by inventory reference IDs. */
	export interface BulkCreateAdsByInventoryReferenceRequestFormProperties {
	}
	export function CreateBulkCreateAdsByInventoryReferenceRequestFormGroup() {
		return new FormGroup<BulkCreateAdsByInventoryReferenceRequestFormProperties>({
		});

	}


	/** This type defines the fields needed to create ads by inventory reference ID request. */
	export interface CreateAdsByInventoryReferenceRequest {

		/** <span class="tablenote"><b>Note:</b> This field is not currently in use. Ad groups are only applicable to Promoted Listings Advanced (PLA) ad campaigns that use the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span> */
		adGroupId?: string | null;

		/** The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.<br /><br /><i>Required if</i> the campaign's funding model is Cost Per Sale (CPS).<br /><br />The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee.<br /><br />The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign.<br /><br />The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>,&nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0 */
		bidPercentage?: string | null;

		/** An ID that identifies a single-item listing or multiple-variation listing that is managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>. <p>The <i>inventory reference ID</i> is a seller-defined value that can be either an <b>SKU</b> for a single-item listing or an <b>inventoryItemGroupKey</b> for a multiple-value listing.</p>  <p>An <i>inventoryItemGroupKey</i> is a value that the seller defines to indicate a listing that's the parent of an inventory item group (a multiple-variation listing, such as a listing for a shirt that's available in multiple sizes and colors).</p>  <p>You must always specify both an <b>inventoryReferenceId</b> and an <b>inventoryReferenceType</b> to indicate an item that's managed with the Inventory API.</p> */
		inventoryReferenceId?: string | null;

		/** Indicates the type of item the <b>inventoryReferenceId</b> references. The item can be either an <code>INVENTORY_ITEM</code> or <code>INVENTORY_ITEM_GROUP</code>. <p>You must always pair an <b>inventoryReferenceId</b> with and <b>inventoryReferenceType</b>.</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a> */
		inventoryReferenceType?: string | null;
	}

	/** This type defines the fields needed to create ads by inventory reference ID request. */
	export interface CreateAdsByInventoryReferenceRequestFormProperties {

		/** <span class="tablenote"><b>Note:</b> This field is not currently in use. Ad groups are only applicable to Promoted Listings Advanced (PLA) ad campaigns that use the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span> */
		adGroupId: FormControl<string | null | undefined>,

		/** The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.<br /><br /><i>Required if</i> the campaign's funding model is Cost Per Sale (CPS).<br /><br />The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee.<br /><br />The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign.<br /><br />The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>,&nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0 */
		bidPercentage: FormControl<string | null | undefined>,

		/** An ID that identifies a single-item listing or multiple-variation listing that is managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>. <p>The <i>inventory reference ID</i> is a seller-defined value that can be either an <b>SKU</b> for a single-item listing or an <b>inventoryItemGroupKey</b> for a multiple-value listing.</p>  <p>An <i>inventoryItemGroupKey</i> is a value that the seller defines to indicate a listing that's the parent of an inventory item group (a multiple-variation listing, such as a listing for a shirt that's available in multiple sizes and colors).</p>  <p>You must always specify both an <b>inventoryReferenceId</b> and an <b>inventoryReferenceType</b> to indicate an item that's managed with the Inventory API.</p> */
		inventoryReferenceId: FormControl<string | null | undefined>,

		/** Indicates the type of item the <b>inventoryReferenceId</b> references. The item can be either an <code>INVENTORY_ITEM</code> or <code>INVENTORY_ITEM_GROUP</code>. <p>You must always pair an <b>inventoryReferenceId</b> with and <b>inventoryReferenceType</b>.</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a> */
		inventoryReferenceType: FormControl<string | null | undefined>,
	}
	export function CreateCreateAdsByInventoryReferenceRequestFormGroup() {
		return new FormGroup<CreateAdsByInventoryReferenceRequestFormProperties>({
			adGroupId: new FormControl<string | null | undefined>(undefined),
			bidPercentage: new FormControl<string | null | undefined>(undefined),
			inventoryReferenceId: new FormControl<string | null | undefined>(undefined),
			inventoryReferenceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the response fields used by the <b>bulkCreateAdsByInventoryReference</b> method. */
	export interface BulkCreateAdsByInventoryReferenceResponse {

		/** This array displays the list of ads that were successfully created. For any ads that were not created successfully, the errors array may provide more detail about why creation of one or more ads failed. */
		responses?: Array<CreateAdsByInventoryReferenceResponse>;
	}

	/** This type defines the response fields used by the <b>bulkCreateAdsByInventoryReference</b> method. */
	export interface BulkCreateAdsByInventoryReferenceResponseFormProperties {
	}
	export function CreateBulkCreateAdsByInventoryReferenceResponseFormGroup() {
		return new FormGroup<BulkCreateAdsByInventoryReferenceResponseFormProperties>({
		});

	}


	/** This type defines the fields returned when you create an ad by inventory reference ID. */
	export interface CreateAdsByInventoryReferenceResponse {

		/** A unique eBay-assigned ID for an ad group in a Promoted Listings Advanced (PLA) campaign that uses the Cost Per Click (CPC) funding model.<span class="tablenote"><b>Note:</b> This field will always be returned for campaigns that use the CPC funding model. It will not be returned for campaigns that use the Cost Per Sale (CPS) funding model.</span> */
		adGroupId?: string | null;

		/** A list of ad IDs. An ad ID is generated for each successfully created ad. */
		ads?: Array<AdReference>;

		/** An array of errors or warnings associated with the create-ads request. */
		errors?: Array<Error>;

		/** An ID that identifies a single-item listing or multiple-variation listing that is managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>. <p>The <i>inventory reference ID</i> is a seller-defined value that can be either an <b>SKU</b> for a single-item listing or an <b>inventoryItemGroupKey</b> for a multiple-value listing.</p> */
		inventoryReferenceId?: string | null;

		/** Indicates the type of item the <b>inventoryReferenceId</b> references. The item can be either an <code>INVENTORY_ITEM</code> or <code>INVENTORY_ITEM_GROUP</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a> */
		inventoryReferenceType?: string | null;

		/**
		 * An HTTP status code that indicates the response-status of the request. Check this code to see if the ads were successfuly created.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;
	}

	/** This type defines the fields returned when you create an ad by inventory reference ID. */
	export interface CreateAdsByInventoryReferenceResponseFormProperties {

		/** A unique eBay-assigned ID for an ad group in a Promoted Listings Advanced (PLA) campaign that uses the Cost Per Click (CPC) funding model.<span class="tablenote"><b>Note:</b> This field will always be returned for campaigns that use the CPC funding model. It will not be returned for campaigns that use the Cost Per Sale (CPS) funding model.</span> */
		adGroupId: FormControl<string | null | undefined>,

		/** An ID that identifies a single-item listing or multiple-variation listing that is managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>. <p>The <i>inventory reference ID</i> is a seller-defined value that can be either an <b>SKU</b> for a single-item listing or an <b>inventoryItemGroupKey</b> for a multiple-value listing.</p> */
		inventoryReferenceId: FormControl<string | null | undefined>,

		/** Indicates the type of item the <b>inventoryReferenceId</b> references. The item can be either an <code>INVENTORY_ITEM</code> or <code>INVENTORY_ITEM_GROUP</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a> */
		inventoryReferenceType: FormControl<string | null | undefined>,

		/**
		 * An HTTP status code that indicates the response-status of the request. Check this code to see if the ads were successfuly created.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateCreateAdsByInventoryReferenceResponseFormGroup() {
		return new FormGroup<CreateAdsByInventoryReferenceResponseFormProperties>({
			adGroupId: new FormControl<string | null | undefined>(undefined),
			inventoryReferenceId: new FormControl<string | null | undefined>(undefined),
			inventoryReferenceType: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A type that contains the fields for the bulk request to create keywords. */
	export interface BulkCreateKeywordRequest {

		/** This array is used to pass in multiple keywords for one or more ad groups that belong to a campaign that uses the Cost Per Click (CPC) funding model. Up to {max value} keywords can be created with one call. */
		requests?: Array<CreateKeywordRequest>;
	}

	/** A type that contains the fields for the bulk request to create keywords. */
	export interface BulkCreateKeywordRequestFormProperties {
	}
	export function CreateBulkCreateKeywordRequestFormGroup() {
		return new FormGroup<BulkCreateKeywordRequestFormProperties>({
		});

	}


	/** A type that defines the fields for the <b>CreateKeyword</b> request. */
	export interface CreateKeywordRequest {

		/** This adGroupId is created when an ad group is first created and associated with a campaign. This is the ad group that the corresponding keyword will be added to. This ad group must be a part of the campaign that is specified in the call URI.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller, and <a href="/api-docs/sell/marketing/resources/keywords/methods/getKeywords">getKeywords</a> to retrieve the keyword IDs for a seller's keywords.</span> */
		adGroupId?: string | null;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		bid?: Amount;

		/** Input the keyword into this field. */
		keywordText?: string | null;

		/** A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a> */
		matchType?: string | null;
	}

	/** A type that defines the fields for the <b>CreateKeyword</b> request. */
	export interface CreateKeywordRequestFormProperties {

		/** This adGroupId is created when an ad group is first created and associated with a campaign. This is the ad group that the corresponding keyword will be added to. This ad group must be a part of the campaign that is specified in the call URI.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller, and <a href="/api-docs/sell/marketing/resources/keywords/methods/getKeywords">getKeywords</a> to retrieve the keyword IDs for a seller's keywords.</span> */
		adGroupId: FormControl<string | null | undefined>,

		/** Input the keyword into this field. */
		keywordText: FormControl<string | null | undefined>,

		/** A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a> */
		matchType: FormControl<string | null | undefined>,
	}
	export function CreateCreateKeywordRequestFormGroup() {
		return new FormGroup<CreateKeywordRequestFormProperties>({
			adGroupId: new FormControl<string | null | undefined>(undefined),
			keywordText: new FormControl<string | null | undefined>(undefined),
			matchType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that contains the response fields for the bulk request to create keywords. */
	export interface BulkCreateKeywordResponse {

		/** A list of keywords that have been processed by the request. */
		responses?: Array<KeywordResponse>;
	}

	/** A type that contains the response fields for the bulk request to create keywords. */
	export interface BulkCreateKeywordResponseFormProperties {
	}
	export function CreateBulkCreateKeywordResponseFormGroup() {
		return new FormGroup<BulkCreateKeywordResponseFormProperties>({
		});

	}


	/** A type that defines the response fields used by the <b>Keyword</b> method. */
	export interface KeywordResponse {

		/** The identifier of the ad group that the keyword was added to. */
		adGroupId?: string | null;

		/** This container will be returned if there is an issue creating the corresponding keyword and/or adding that keyword to the corresponding ad group. */
		errors?: Array<Error>;

		/** The getKeyword URI for the keyword, which is used to retrieve the keyword. This URI will be returned for each successfully created keyword. */
		href?: string | null;

		/** A unique eBay-assigned ID for a keyword that is generated for an ad group. This keyword ID will be generated for each successfully created keyword. */
		keywordId?: string | null;

		/** The text of the keyword. */
		keywordText?: string | null;

		/** A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a> */
		matchType?: string | null;

		/**
		 * An HTTP status code is returned for each keyword to indicate the success or failure of adding that keyword to the ad group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;
	}

	/** A type that defines the response fields used by the <b>Keyword</b> method. */
	export interface KeywordResponseFormProperties {

		/** The identifier of the ad group that the keyword was added to. */
		adGroupId: FormControl<string | null | undefined>,

		/** The getKeyword URI for the keyword, which is used to retrieve the keyword. This URI will be returned for each successfully created keyword. */
		href: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID for a keyword that is generated for an ad group. This keyword ID will be generated for each successfully created keyword. */
		keywordId: FormControl<string | null | undefined>,

		/** The text of the keyword. */
		keywordText: FormControl<string | null | undefined>,

		/** A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a> */
		matchType: FormControl<string | null | undefined>,

		/**
		 * An HTTP status code is returned for each keyword to indicate the success or failure of adding that keyword to the ad group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateKeywordResponseFormGroup() {
		return new FormGroup<KeywordResponseFormProperties>({
			adGroupId: new FormControl<string | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			keywordId: new FormControl<string | null | undefined>(undefined),
			keywordText: new FormControl<string | null | undefined>(undefined),
			matchType: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A type that contains the fields for the bulk request to create negative keywords. */
	export interface BulkCreateNegativeKeywordRequest {

		/** This array is used to pass in multiple negative keywords for one or more ad groups that belong to a campaign that uses the Cost Per Click (CPC) funding model. */
		requests?: Array<CreateNegativeKeywordRequest>;
	}

	/** A type that contains the fields for the bulk request to create negative keywords. */
	export interface BulkCreateNegativeKeywordRequestFormProperties {
	}
	export function CreateBulkCreateNegativeKeywordRequestFormGroup() {
		return new FormGroup<BulkCreateNegativeKeywordRequestFormProperties>({
		});

	}


	/** A type that defines the fields for the <b>CreateNegativeKeyword</b> request. */
	export interface CreateNegativeKeywordRequest {

		/** This adGroupId is created when an ad group is first created and associated with a campaign. This is the ad group to which the corresponding negative keyword will be added.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span><br /><br /><i>Required if</i> the negative keyword is being created at the ad group level. */
		adGroupId?: string | null;

		/** A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created.<br /><br /><i>Required if</i> the negative keyword is being created at the ad group level. */
		campaignId?: string | null;

		/** A field that defines the match type for the negative keyword.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Broad matching of negative keywords is not currently supported.</span><br /><b>Valid Values:</b><ul><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordMatchTypeEnum'>eBay API documentation</a> */
		negativeKeywordMatchType?: string | null;

		/** The negative keyword text. */
		negativeKeywordText?: string | null;
	}

	/** A type that defines the fields for the <b>CreateNegativeKeyword</b> request. */
	export interface CreateNegativeKeywordRequestFormProperties {

		/** This adGroupId is created when an ad group is first created and associated with a campaign. This is the ad group to which the corresponding negative keyword will be added.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span><br /><br /><i>Required if</i> the negative keyword is being created at the ad group level. */
		adGroupId: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created.<br /><br /><i>Required if</i> the negative keyword is being created at the ad group level. */
		campaignId: FormControl<string | null | undefined>,

		/** A field that defines the match type for the negative keyword.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Broad matching of negative keywords is not currently supported.</span><br /><b>Valid Values:</b><ul><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordMatchTypeEnum'>eBay API documentation</a> */
		negativeKeywordMatchType: FormControl<string | null | undefined>,

		/** The negative keyword text. */
		negativeKeywordText: FormControl<string | null | undefined>,
	}
	export function CreateCreateNegativeKeywordRequestFormGroup() {
		return new FormGroup<CreateNegativeKeywordRequestFormProperties>({
			adGroupId: new FormControl<string | null | undefined>(undefined),
			campaignId: new FormControl<string | null | undefined>(undefined),
			negativeKeywordMatchType: new FormControl<string | null | undefined>(undefined),
			negativeKeywordText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that contains the response fields for the bulk request to create negative keywords. */
	export interface BulkCreateNegativeKeywordResponse {

		/** A list of negative keywords that have been processed by the request. */
		responses?: Array<NegativeKeywordResponse>;
	}

	/** A type that contains the response fields for the bulk request to create negative keywords. */
	export interface BulkCreateNegativeKeywordResponseFormProperties {
	}
	export function CreateBulkCreateNegativeKeywordResponseFormGroup() {
		return new FormGroup<BulkCreateNegativeKeywordResponseFormProperties>({
		});

	}


	/** A type that defines the negative keyword response. */
	export interface NegativeKeywordResponse {

		/** A unique identifier for an ad group that is generated when an ad group is first created and associated with a campaign. */
		adGroupId?: string | null;

		/** A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created. */
		campaignId?: string | null;

		/** This container will be returned if there is an issue creating the corresponding negative keyword. */
		errors?: Array<Error>;

		/** The URI for the negative keyword, which is used to retrieve the negative keyword. This URI will be returned for each successfully created negative keyword. */
		href?: string | null;

		/** A unique eBay-assigned ID for a negative keyword. This negative keyword ID will be generated for each successfully created negative keyword. */
		negativeKeywordId?: string | null;

		/** The match type for the negative keyword.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Broad matching of negative keywords is not currently supported.</span><br /><b>Valid Values:</b><ul><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordMatchTypeEnum'>eBay API documentation</a> */
		negativeKeywordMatchType?: string | null;

		/** The text for the negative keyword. */
		negativeKeywordText?: string | null;

		/**
		 * The status of the request to create a negative keyword. This field indicates whether the process was successful or not.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;
	}

	/** A type that defines the negative keyword response. */
	export interface NegativeKeywordResponseFormProperties {

		/** A unique identifier for an ad group that is generated when an ad group is first created and associated with a campaign. */
		adGroupId: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created. */
		campaignId: FormControl<string | null | undefined>,

		/** The URI for the negative keyword, which is used to retrieve the negative keyword. This URI will be returned for each successfully created negative keyword. */
		href: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID for a negative keyword. This negative keyword ID will be generated for each successfully created negative keyword. */
		negativeKeywordId: FormControl<string | null | undefined>,

		/** The match type for the negative keyword.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Broad matching of negative keywords is not currently supported.</span><br /><b>Valid Values:</b><ul><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordMatchTypeEnum'>eBay API documentation</a> */
		negativeKeywordMatchType: FormControl<string | null | undefined>,

		/** The text for the negative keyword. */
		negativeKeywordText: FormControl<string | null | undefined>,

		/**
		 * The status of the request to create a negative keyword. This field indicates whether the process was successful or not.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateNegativeKeywordResponseFormGroup() {
		return new FormGroup<NegativeKeywordResponseFormProperties>({
			adGroupId: new FormControl<string | null | undefined>(undefined),
			campaignId: new FormControl<string | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			negativeKeywordId: new FormControl<string | null | undefined>(undefined),
			negativeKeywordMatchType: new FormControl<string | null | undefined>(undefined),
			negativeKeywordText: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type defines the fields that the call uses to remove ads in bulk. */
	export interface BulkDeleteAdRequest {

		/** An array of the listing IDs that identify the ads to remove. */
		requests?: Array<DeleteAdRequest>;
	}

	/** This type defines the fields that the call uses to remove ads in bulk. */
	export interface BulkDeleteAdRequestFormProperties {
	}
	export function CreateBulkDeleteAdRequestFormGroup() {
		return new FormGroup<BulkDeleteAdRequestFormProperties>({
		});

	}


	/** This type defines the fields used in a delete-ad request. */
	export interface DeleteAdRequest {

		/** A unique eBay-assigned ID for a listing that is generated when the listing is created.  <p class="tablenote"><b>Note:</b> This request accepts both listing IDs, as generated by the Inventory API, and an item IDs, as used in the eBay Traditional API set (e.g., the Trading and Finding APIs).</p> */
		listingId?: string | null;
	}

	/** This type defines the fields used in a delete-ad request. */
	export interface DeleteAdRequestFormProperties {

		/** A unique eBay-assigned ID for a listing that is generated when the listing is created.  <p class="tablenote"><b>Note:</b> This request accepts both listing IDs, as generated by the Inventory API, and an item IDs, as used in the eBay Traditional API set (e.g., the Trading and Finding APIs).</p> */
		listingId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAdRequestFormGroup() {
		return new FormGroup<DeleteAdRequestFormProperties>({
			listingId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines a container that lists the ads that <b>bulkDeleteAdsByListingId</b> deleted. */
	export interface BulkDeleteAdResponse {

		/** An array of the ads that were deleted by the <b>bulkDeleteAdsByListingId</b> request, including information associated with each individual delete request. */
		responses?: Array<DeleteAdResponse>;
	}

	/** This type defines a container that lists the ads that <b>bulkDeleteAdsByListingId</b> deleted. */
	export interface BulkDeleteAdResponseFormProperties {
	}
	export function CreateBulkDeleteAdResponseFormGroup() {
		return new FormGroup<BulkDeleteAdResponseFormProperties>({
		});

	}


	/** This type defines the fields returned in a delete-ad response. */
	export interface DeleteAdResponse {

		/** The unique identifier of the ad that was deleted, or the ad that the seller attempted to delete. */
		adId?: string | null;

		/** An array of the errors or warnings associated with the request. */
		errors?: Array<Error>;

		/** A unique eBay-assigned ID for a listing that is generated when the listing is created. */
		listingId?: string | null;

		/**
		 * An HTTP status code that indicates the response-status of the request. Check this code to see if the ad was successfully deleted.<span class="tablenote"><b>Note:</b>A status code is returned for each ad that the seller deletes, or attempts to delete.</span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;
	}

	/** This type defines the fields returned in a delete-ad response. */
	export interface DeleteAdResponseFormProperties {

		/** The unique identifier of the ad that was deleted, or the ad that the seller attempted to delete. */
		adId: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID for a listing that is generated when the listing is created. */
		listingId: FormControl<string | null | undefined>,

		/**
		 * An HTTP status code that indicates the response-status of the request. Check this code to see if the ad was successfully deleted.<span class="tablenote"><b>Note:</b>A status code is returned for each ad that the seller deletes, or attempts to delete.</span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateDeleteAdResponseFormGroup() {
		return new FormGroup<DeleteAdResponseFormProperties>({
			adId: new FormControl<string | null | undefined>(undefined),
			listingId: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type defines the request fields that <b>bulkDeleteAdsByInventoryReference</b> uses to delete ads in bulk. */
	export interface BulkDeleteAdsByInventoryReferenceRequest {

		/** A list of inventory referenceID and inventory reference type pairs that specify the set of ads to remove in bulk. */
		requests?: Array<DeleteAdsByInventoryReferenceRequest>;
	}

	/** This type defines the request fields that <b>bulkDeleteAdsByInventoryReference</b> uses to delete ads in bulk. */
	export interface BulkDeleteAdsByInventoryReferenceRequestFormProperties {
	}
	export function CreateBulkDeleteAdsByInventoryReferenceRequestFormGroup() {
		return new FormGroup<BulkDeleteAdsByInventoryReferenceRequestFormProperties>({
		});

	}


	/** This type defines the fields needed to delete an ad by its inventory reference ID.  You must always supply both <b>inventory_reference_id</b> and <b>inventory_reference_type</b>. */
	export interface DeleteAdsByInventoryReferenceRequest {

		/** The inventory reference ID is a seller-defined SKU value for a single-item listing, or a seller-defined identifier for an inventory item group. Both of these values are defined when using the Inventory API, and an inventory item group is used to create a multiple-variation listing. */
		inventoryReferenceId?: string | null;

		/** The enumeration value passed into this field indicates the type of value used for the corresponding <b>inventoryReferenceId</b> value. The enumeration value used here will either be <code>INVENTORY_ITEM</code> (to delete the ad for a single SKU listing) or <code>INVENTORY_ITEM_GROUP</code> (to delete the ad for a multiple-variation listing). For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a> */
		inventoryReferenceType?: string | null;
	}

	/** This type defines the fields needed to delete an ad by its inventory reference ID.  You must always supply both <b>inventory_reference_id</b> and <b>inventory_reference_type</b>. */
	export interface DeleteAdsByInventoryReferenceRequestFormProperties {

		/** The inventory reference ID is a seller-defined SKU value for a single-item listing, or a seller-defined identifier for an inventory item group. Both of these values are defined when using the Inventory API, and an inventory item group is used to create a multiple-variation listing. */
		inventoryReferenceId: FormControl<string | null | undefined>,

		/** The enumeration value passed into this field indicates the type of value used for the corresponding <b>inventoryReferenceId</b> value. The enumeration value used here will either be <code>INVENTORY_ITEM</code> (to delete the ad for a single SKU listing) or <code>INVENTORY_ITEM_GROUP</code> (to delete the ad for a multiple-variation listing). For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a> */
		inventoryReferenceType: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAdsByInventoryReferenceRequestFormGroup() {
		return new FormGroup<DeleteAdsByInventoryReferenceRequestFormProperties>({
			inventoryReferenceId: new FormControl<string | null | undefined>(undefined),
			inventoryReferenceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines a container that lists the ads that <b>bulkDeleteAdsByInventoryReference</b> deleted. */
	export interface BulkDeleteAdsByInventoryReferenceResponse {

		/** An array of the ads that were deleted by the <b>bulkDeleteAdsByInventoryReference</b> request, including information associated with each individual delete request. */
		responses?: Array<DeleteAdsByInventoryReferenceResponse>;
	}

	/** This type defines a container that lists the ads that <b>bulkDeleteAdsByInventoryReference</b> deleted. */
	export interface BulkDeleteAdsByInventoryReferenceResponseFormProperties {
	}
	export function CreateBulkDeleteAdsByInventoryReferenceResponseFormGroup() {
		return new FormGroup<BulkDeleteAdsByInventoryReferenceResponseFormProperties>({
		});

	}


	/** This type defines the fields returned by request to delete a set of ads by inventory reference ID. */
	export interface DeleteAdsByInventoryReferenceResponse {

		/** The unique identifier of the ad that was deleted, or the ad that the seller attempted to delete.<span class="tablenote"><b>Note:</b>Although the field name is plural and it is an array, only one ad ID will be returned here since there can be only one ad per listing.</span> */
		adIds?: Array<string>;

		/** The container for the errors associated with the request. */
		errors?: Array<Error>;

		/** The inventory reference ID is a seller-defined SKU value for a single-item listing, or a seller-defined identifier for an inventory item group. Both of these values are defined when using the Inventory API, and an inventory item group is used to create a multiple-variation listing. */
		inventoryReferenceId?: string | null;

		/** The enumeration value returned here indicates if the ad was for a single-variation listing or a multiple-variation listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a> */
		inventoryReferenceType?: string | null;

		/**
		 * An HTTP status code indicating if the corresponding ad was successfully deleted or not. <code>200 Successful</code> should be returned for successfully deleted ads. <span class="tablenote"><b>Note:</b>A status code is returned for each ad that the seller deletes, or attempts to delete.</span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;
	}

	/** This type defines the fields returned by request to delete a set of ads by inventory reference ID. */
	export interface DeleteAdsByInventoryReferenceResponseFormProperties {

		/** The inventory reference ID is a seller-defined SKU value for a single-item listing, or a seller-defined identifier for an inventory item group. Both of these values are defined when using the Inventory API, and an inventory item group is used to create a multiple-variation listing. */
		inventoryReferenceId: FormControl<string | null | undefined>,

		/** The enumeration value returned here indicates if the ad was for a single-variation listing or a multiple-variation listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a> */
		inventoryReferenceType: FormControl<string | null | undefined>,

		/**
		 * An HTTP status code indicating if the corresponding ad was successfully deleted or not. <code>200 Successful</code> should be returned for successfully deleted ads. <span class="tablenote"><b>Note:</b>A status code is returned for each ad that the seller deletes, or attempts to delete.</span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateDeleteAdsByInventoryReferenceResponseFormGroup() {
		return new FormGroup<DeleteAdsByInventoryReferenceResponseFormProperties>({
			inventoryReferenceId: new FormControl<string | null | undefined>(undefined),
			inventoryReferenceType: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A type that defines the fields for the <b>BulkUpdateAdStatusByListingId</b> request. */
	export interface BulkUpdateAdStatusByListingIdRequest {

		/** An array of listing IDs and bid percentages. */
		requests?: Array<UpdateAdStatusByListingIdRequest>;
	}

	/** A type that defines the fields for the <b>BulkUpdateAdStatusByListingId</b> request. */
	export interface BulkUpdateAdStatusByListingIdRequestFormProperties {
	}
	export function CreateBulkUpdateAdStatusByListingIdRequestFormGroup() {
		return new FormGroup<BulkUpdateAdStatusByListingIdRequestFormProperties>({
		});

	}


	/** A type that contains the fields for the <b>UpdateAdStatusByListingId</b> request. */
	export interface UpdateAdStatusByListingIdRequest {

		/** A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span> */
		adGroupId?: string | null;

		/** An enumeration value representing the current status of the ad.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdStatusEnum'>eBay API documentation</a> */
		adStatus?: string | null;

		/** A unique eBay-assigned ID for a listing that is generated when the listing is created.<br /><br /><span class="tablenote"><b>Note:</b> This field accepts both listing IDs (as generated by the Inventory API), and item IDs (as used in the eBay Traditional API set, such as the Trading and Finding APIs).</span> */
		listingId?: string | null;
	}

	/** A type that contains the fields for the <b>UpdateAdStatusByListingId</b> request. */
	export interface UpdateAdStatusByListingIdRequestFormProperties {

		/** A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span> */
		adGroupId: FormControl<string | null | undefined>,

		/** An enumeration value representing the current status of the ad.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdStatusEnum'>eBay API documentation</a> */
		adStatus: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID for a listing that is generated when the listing is created.<br /><br /><span class="tablenote"><b>Note:</b> This field accepts both listing IDs (as generated by the Inventory API), and item IDs (as used in the eBay Traditional API set, such as the Trading and Finding APIs).</span> */
		listingId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAdStatusByListingIdRequestFormGroup() {
		return new FormGroup<UpdateAdStatusByListingIdRequestFormProperties>({
			adGroupId: new FormControl<string | null | undefined>(undefined),
			adStatus: new FormControl<string | null | undefined>(undefined),
			listingId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that defines the fields for the <b>BulkUpdateAdStatus</b> request. */
	export interface BulkUpdateAdStatusRequest {

		/** An array of listing IDs and bid percentages. */
		requests?: Array<UpdateAdStatusRequest>;
	}

	/** A type that defines the fields for the <b>BulkUpdateAdStatus</b> request. */
	export interface BulkUpdateAdStatusRequestFormProperties {
	}
	export function CreateBulkUpdateAdStatusRequestFormGroup() {
		return new FormGroup<BulkUpdateAdStatusRequestFormProperties>({
		});

	}


	/** A type that contains the fields for the <b>UpdateAdStatus</b> request. */
	export interface UpdateAdStatusRequest {

		/** A unique eBay-assigned ID that is generated when the ad is created. */
		adId?: string | null;

		/** An enumeration value representing the current status of the ad.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdStatusEnum'>eBay API documentation</a> */
		adStatus?: string | null;
	}

	/** A type that contains the fields for the <b>UpdateAdStatus</b> request. */
	export interface UpdateAdStatusRequestFormProperties {

		/** A unique eBay-assigned ID that is generated when the ad is created. */
		adId: FormControl<string | null | undefined>,

		/** An enumeration value representing the current status of the ad.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdStatusEnum'>eBay API documentation</a> */
		adStatus: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAdStatusRequestFormGroup() {
		return new FormGroup<UpdateAdStatusRequestFormProperties>({
			adId: new FormControl<string | null | undefined>(undefined),
			adStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that defines the fields for the <b>BulkUpdateAdStatusByInventoryReference</b> response. */
	export interface BulkUpdateAdsByInventoryReferenceResponse {

		/** A list of inventory references that were processed from the request. */
		responses?: Array<UpdateAdsByInventoryReferenceResponse>;
	}

	/** A type that defines the fields for the <b>BulkUpdateAdStatusByInventoryReference</b> response. */
	export interface BulkUpdateAdsByInventoryReferenceResponseFormProperties {
	}
	export function CreateBulkUpdateAdsByInventoryReferenceResponseFormGroup() {
		return new FormGroup<BulkUpdateAdsByInventoryReferenceResponseFormProperties>({
		});

	}


	/** A type that contains the response fields used by the <b>UpdateAdsByInventoryReference</b> method. */
	export interface UpdateAdsByInventoryReferenceResponse {

		/** A list of ad IDs and links to retrieve them. */
		ads?: Array<AdReference>;

		/** A container for all of the errors associated with the specified inventory reference ID. */
		errors?: Array<Error>;

		/** The reference ID associated with the ad. The reference ID could be a SKU number or Inventory Item Group, depending on value of <code>inventoryReferenceType</code>. */
		inventoryReferenceId?: string | null;

		/** The inventory reference type associated with the ad. The inventory reference type could be a SKU number or Inventory Item Group. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a> */
		inventoryReferenceType?: string | null;

		/**
		 * An HTTP status code that indicates whether or not the CPS ad was successfully updated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;
	}

	/** A type that contains the response fields used by the <b>UpdateAdsByInventoryReference</b> method. */
	export interface UpdateAdsByInventoryReferenceResponseFormProperties {

		/** The reference ID associated with the ad. The reference ID could be a SKU number or Inventory Item Group, depending on value of <code>inventoryReferenceType</code>. */
		inventoryReferenceId: FormControl<string | null | undefined>,

		/** The inventory reference type associated with the ad. The inventory reference type could be a SKU number or Inventory Item Group. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a> */
		inventoryReferenceType: FormControl<string | null | undefined>,

		/**
		 * An HTTP status code that indicates whether or not the CPS ad was successfully updated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateUpdateAdsByInventoryReferenceResponseFormGroup() {
		return new FormGroup<UpdateAdsByInventoryReferenceResponseFormProperties>({
			inventoryReferenceId: new FormControl<string | null | undefined>(undefined),
			inventoryReferenceType: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A type that defines the fields for the <b>BulkUpdateKeyword</b> request. */
	export interface BulkUpdateKeywordRequest {

		/** Use this array to update the bid values and/or statuses of one or more existing keywords. */
		requests?: Array<UpdateKeywordByKeywordIdRequest>;
	}

	/** A type that defines the fields for the <b>BulkUpdateKeyword</b> request. */
	export interface BulkUpdateKeywordRequestFormProperties {
	}
	export function CreateBulkUpdateKeywordRequestFormGroup() {
		return new FormGroup<BulkUpdateKeywordRequestFormProperties>({
		});

	}


	/** A type that contains the fields for the <b>UpdateKeywordByKeywordId</b> request. */
	export interface UpdateKeywordByKeywordIdRequest {

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		bid?: Amount;

		/** This field is used to identify the keyword to be updated. The <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeyword">getKeyword</a> method can be used to retrieve keywordId values. */
		keywordId?: string | null;

		/** Include this field if you wish to change the status of the keyword. The status value specified here must be different than the keyword's current status. To confirm the current status of a keyword, you can use the <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeyword">getKeyword</a> method.</p><p>If the status of the ad is currently <code>ACTIVE</code>, you can change status to <code>PAUSED</code> or <code>ARCHIVED</code>. If ad group is currently in <code>PAUSED</code> status, you can change the status back to <code>ACTIVE</code>. Ads that are currently in <code>ARCHIVED</code> status cannot be made <code>ACTIVE</code> again. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:KeywordStatusEnum'>eBay API documentation</a> */
		keywordStatus?: string | null;
	}

	/** A type that contains the fields for the <b>UpdateKeywordByKeywordId</b> request. */
	export interface UpdateKeywordByKeywordIdRequestFormProperties {

		/** This field is used to identify the keyword to be updated. The <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeyword">getKeyword</a> method can be used to retrieve keywordId values. */
		keywordId: FormControl<string | null | undefined>,

		/** Include this field if you wish to change the status of the keyword. The status value specified here must be different than the keyword's current status. To confirm the current status of a keyword, you can use the <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeyword">getKeyword</a> method.</p><p>If the status of the ad is currently <code>ACTIVE</code>, you can change status to <code>PAUSED</code> or <code>ARCHIVED</code>. If ad group is currently in <code>PAUSED</code> status, you can change the status back to <code>ACTIVE</code>. Ads that are currently in <code>ARCHIVED</code> status cannot be made <code>ACTIVE</code> again. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:KeywordStatusEnum'>eBay API documentation</a> */
		keywordStatus: FormControl<string | null | undefined>,
	}
	export function CreateUpdateKeywordByKeywordIdRequestFormGroup() {
		return new FormGroup<UpdateKeywordByKeywordIdRequestFormProperties>({
			keywordId: new FormControl<string | null | undefined>(undefined),
			keywordStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that defines the fields for the <b>BulkUpdateKeyword</b> response. */
	export interface BulkUpdateKeywordResponse {

		/** A list of keywords that have been processed from the bulk request. */
		responses?: Array<UpdateKeywordResponse>;
	}

	/** A type that defines the fields for the <b>BulkUpdateKeyword</b> response. */
	export interface BulkUpdateKeywordResponseFormProperties {
	}
	export function CreateBulkUpdateKeywordResponseFormGroup() {
		return new FormGroup<BulkUpdateKeywordResponseFormProperties>({
		});

	}


	/** A type that contains the fields for the <b>UpdateKeyword</b> response. */
	export interface UpdateKeywordResponse {

		/** This container will be returned if there are one or more issues associated with modifying the corresponding keyword. */
		errors?: Array<Error>;

		/** This field identifies the keyword that the seller updated, or attempted to update. */
		keywordId?: string | null;

		/**
		 * An HTTP status code is returned for each keyword to indicate the success or failure of updating that keyword.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;
	}

	/** A type that contains the fields for the <b>UpdateKeyword</b> response. */
	export interface UpdateKeywordResponseFormProperties {

		/** This field identifies the keyword that the seller updated, or attempted to update. */
		keywordId: FormControl<string | null | undefined>,

		/**
		 * An HTTP status code is returned for each keyword to indicate the success or failure of updating that keyword.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateUpdateKeywordResponseFormGroup() {
		return new FormGroup<UpdateKeywordResponseFormProperties>({
			keywordId: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A type that defines the fields for the <b>BulkUpdateNegativeKeyword</b> request. */
	export interface BulkUpdateNegativeKeywordRequest {

		/** An array to update the statuses of one or more existing negative keywords. */
		requests?: Array<UpdateNegativeKeywordIdRequest>;
	}

	/** A type that defines the fields for the <b>BulkUpdateNegativeKeyword</b> request. */
	export interface BulkUpdateNegativeKeywordRequestFormProperties {
	}
	export function CreateBulkUpdateNegativeKeywordRequestFormGroup() {
		return new FormGroup<BulkUpdateNegativeKeywordRequestFormProperties>({
		});

	}


	/** A type that defines the fields used to update a negative keyword. */
	export interface UpdateNegativeKeywordIdRequest {

		/** A unique eBay-assigned ID for a negative keyword. This keyword ID will be generated for each successfully created negative keyword. */
		negativeKeywordId?: string | null;

		/** A field that defines the status of the negative keyword. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordStatusEnum'>eBay API documentation</a> */
		negativeKeywordStatus?: string | null;
	}

	/** A type that defines the fields used to update a negative keyword. */
	export interface UpdateNegativeKeywordIdRequestFormProperties {

		/** A unique eBay-assigned ID for a negative keyword. This keyword ID will be generated for each successfully created negative keyword. */
		negativeKeywordId: FormControl<string | null | undefined>,

		/** A field that defines the status of the negative keyword. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordStatusEnum'>eBay API documentation</a> */
		negativeKeywordStatus: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNegativeKeywordIdRequestFormGroup() {
		return new FormGroup<UpdateNegativeKeywordIdRequestFormProperties>({
			negativeKeywordId: new FormControl<string | null | undefined>(undefined),
			negativeKeywordStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that defines the fields for the <b>BulkUpdateNegativeKeyword</b> response. */
	export interface BulkUpdateNegativeKeywordResponse {

		/** A list of negative keywords that have been processed from the bulk request. */
		responses?: Array<UpdateNegativeKeywordResponse>;
	}

	/** A type that defines the fields for the <b>BulkUpdateNegativeKeyword</b> response. */
	export interface BulkUpdateNegativeKeywordResponseFormProperties {
	}
	export function CreateBulkUpdateNegativeKeywordResponseFormGroup() {
		return new FormGroup<BulkUpdateNegativeKeywordResponseFormProperties>({
		});

	}


	/** A type that contains the fields for the <b>UpdateNegativeKeyword</b> response. */
	export interface UpdateNegativeKeywordResponse {

		/** A container that will be returned if there are one or more issues associated with modifying the corresponding negative keyword. */
		errors?: Array<Error>;

		/** A unique eBay-assigned ID for a negative keyword. This keyword ID will be generated for each successfully created negative keyword. */
		negativeKeywordId?: string | null;

		/**
		 * An HTTP status code that indicates the success or failure of updating that negative keyword.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;
	}

	/** A type that contains the fields for the <b>UpdateNegativeKeyword</b> response. */
	export interface UpdateNegativeKeywordResponseFormProperties {

		/** A unique eBay-assigned ID for a negative keyword. This keyword ID will be generated for each successfully created negative keyword. */
		negativeKeywordId: FormControl<string | null | undefined>,

		/**
		 * An HTTP status code that indicates the success or failure of updating that negative keyword.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateUpdateNegativeKeywordResponseFormGroup() {
		return new FormGroup<UpdateNegativeKeywordResponseFormProperties>({
			negativeKeywordId: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type defines the fields that describe an ad campaign. */
	export interface Campaign {

		/** This array contains alert messages for the campaign. */
		alerts?: Array<Alert>;

		/** A type that defines the budget details for a Cost Per Click (CPC) Promoted Listings campaign. */
		budget?: CampaignBudget;

		/** This type defines the fields for specifying the criterion (selection rule) settings of an ad campaign. If you populate the campaignCriterion object in your <b>createCampaign</b> request, ads for the campaign are created by rule for the listings that meet the criteria you specify, and these ads are associated with the newly created campaign. */
		campaignCriterion?: CampaignCriterion;

		/** A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created. */
		campaignId?: string | null;

		/** A seller-defined name for the campaign. This value must be unique for the seller. <p>You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.</p><b>Max length: </b>80 characters */
		campaignName?: string | null;

		/** Indicates the status of the campaign, such as <code>RUNNING</code>, <code>PAUSED</code>, and <code>ENDED</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:CampaignStatusEnum'>eBay API documentation</a> */
		campaignStatus?: string | null;

		/** The date and time the campaign ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an <a href="/api-docs/sell/marketing/resources/campaign/methods/endCampaign">endCampaign</a> call, or if they update the campaign at a later time with an end date. */
		endDate?: string | null;

		/** This type defines how the Promoted Listings fee is calculated for a Promoted Listings ad campaign. */
		fundingStrategy?: FundingStrategy;

		/** The ID of the eBay marketplace where the campaign is hosted. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId?: string | null;

		/** The date and time the campaign starts, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.  <p>On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign. Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaign">getCampaign</a> to check the status of the campaign.</p> */
		startDate?: string | null;
	}

	/** This type defines the fields that describe an ad campaign. */
	export interface CampaignFormProperties {

		/** A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created. */
		campaignId: FormControl<string | null | undefined>,

		/** A seller-defined name for the campaign. This value must be unique for the seller. <p>You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.</p><b>Max length: </b>80 characters */
		campaignName: FormControl<string | null | undefined>,

		/** Indicates the status of the campaign, such as <code>RUNNING</code>, <code>PAUSED</code>, and <code>ENDED</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:CampaignStatusEnum'>eBay API documentation</a> */
		campaignStatus: FormControl<string | null | undefined>,

		/** The date and time the campaign ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an <a href="/api-docs/sell/marketing/resources/campaign/methods/endCampaign">endCampaign</a> call, or if they update the campaign at a later time with an end date. */
		endDate: FormControl<string | null | undefined>,

		/** The ID of the eBay marketplace where the campaign is hosted. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId: FormControl<string | null | undefined>,

		/** The date and time the campaign starts, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.  <p>On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign. Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaign">getCampaign</a> to check the status of the campaign.</p> */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreateCampaignFormGroup() {
		return new FormGroup<CampaignFormProperties>({
			campaignId: new FormControl<string | null | undefined>(undefined),
			campaignName: new FormControl<string | null | undefined>(undefined),
			campaignStatus: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			marketplaceId: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that defines the budget details for a Cost Per Click (CPC) Promoted Listings campaign. */
	export interface CampaignBudget {

		/** A container for the budget details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model.<br /><br /><span class="tablenote"><b>Note:</b> This container will only be returned for campaigns using the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span> */
		daily?: Budget;
	}

	/** A type that defines the budget details for a Cost Per Click (CPC) Promoted Listings campaign. */
	export interface CampaignBudgetFormProperties {
	}
	export function CreateCampaignBudgetFormGroup() {
		return new FormGroup<CampaignBudgetFormProperties>({
		});

	}


	/** This type defines the fields for specifying the criterion (selection rule) settings of an ad campaign. If you populate the campaignCriterion object in your <b>createCampaign</b> request, ads for the campaign are created by rule for the listings that meet the criteria you specify, and these ads are associated with the newly created campaign. */
	export interface CampaignCriterion {

		/** A field used to indicate whether listings shall be automatically added to, or removed from, a Promoted Listings campaign based on the rules that have been configured for the campaign.<br /><br />If set to <code>true</code>, eBay adds all listings matching the campaign criterion to the campaign, including any new listings created from the items in a seller's inventory.<br /><br /><b>Default:</b> <code>false</code> */
		autoSelectFutureInventory?: boolean | null;

		/** This enum defines the criterion (selection rule) types. Currently, the only criterion type supported is <code>INVENTORY_PARTITION</code>, and you must specify this value if you manage your items with the Inventory API and you want to include items based on their inventory reference IDs.  <br><br>Do not include this field if you manage your listings with Trading API/legacy model. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:CriterionTypeEnum'>eBay API documentation</a> */
		criterionType?: string | null;

		/** This container shows all of the rules/inclusion filters used to add listings to the campaign. For information on using the contained fields, see <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Campaign ">Promoted Listing campaigns</a>. */
		selectionRules?: Array<SelectionRule>;
	}

	/** This type defines the fields for specifying the criterion (selection rule) settings of an ad campaign. If you populate the campaignCriterion object in your <b>createCampaign</b> request, ads for the campaign are created by rule for the listings that meet the criteria you specify, and these ads are associated with the newly created campaign. */
	export interface CampaignCriterionFormProperties {

		/** A field used to indicate whether listings shall be automatically added to, or removed from, a Promoted Listings campaign based on the rules that have been configured for the campaign.<br /><br />If set to <code>true</code>, eBay adds all listings matching the campaign criterion to the campaign, including any new listings created from the items in a seller's inventory.<br /><br /><b>Default:</b> <code>false</code> */
		autoSelectFutureInventory: FormControl<boolean | null | undefined>,

		/** This enum defines the criterion (selection rule) types. Currently, the only criterion type supported is <code>INVENTORY_PARTITION</code>, and you must specify this value if you manage your items with the Inventory API and you want to include items based on their inventory reference IDs.  <br><br>Do not include this field if you manage your listings with Trading API/legacy model. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:CriterionTypeEnum'>eBay API documentation</a> */
		criterionType: FormControl<string | null | undefined>,
	}
	export function CreateCampaignCriterionFormGroup() {
		return new FormGroup<CampaignCriterionFormProperties>({
			autoSelectFutureInventory: new FormControl<boolean | null | undefined>(undefined),
			criterionType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines all rules/inclusion filters used to add listings to campaigns or promotions. Use of the specific fields is different for campaigns or promotions. See <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html ">Using the selectionRules container</a>. */
	export interface SelectionRule {

		/** An array of product brands. For more details, see <a href="/api-docs/sell/static/marketing/using-the-selectionrules-container.html ">Using the selectionRules container</a>. */
		brands?: Array<string>;

		/** This field contains an array of the associated category ID(s).<br><br>For <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Promotio ">Item promotions</a>, a single-item array containing the category ID associated with the promotion. Required when used in an Item promotion and either specifying a <b>selectionRules</b> container or when <b>inventoryCriterionType</b> is set to <code>INVENTORY_BY_RULE</code>.<br><br>For <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Campaign ">Promoted Listing campaigns</a>, an array of category ID(s) associated with the campaign. <br><br>For information on how to get category IDs, see <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#eBay ">eBay Marketplace category IDs</a> and <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Seller ">Seller store category IDs</a> */
		categoryIds?: Array<string>;

		/** This enumerated value indicates if the category ID for the item is an identifier for eBay categories or for a seller's eBay store categories. <br><br>For <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Campaign ">Promoted Listing campaigns</a>, this field includes the type of the category ID for the item(s) to be included in the campaign.<br><br>For <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Promotio ">Item promotions</a>, this field identifies the scope for the corresponding array as eBay categories or for a seller's eBay store categories. Required when used in an Item promotion and <b>inventoryCriterionType</b> is set to <code>INVENTORY_BY_RULE</code>.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:CategoryScopeEnum'>eBay API documentation</a> */
		categoryScope?: string | null;

		/** A comma-separated list of unique identifiers for the conditions of listings to be included<br><br>For <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Campaign ">Promoted Listing campaigns</a>, refer to <a href= "/api-docs/sell/static/marketing/pl-campaign-flow-pls.html#add-by-rule ">Add items to the PLS campaign</a>. Up to four IDs can be specified.<br><br>For <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Promotio ">Item promotions</a>, refer to <a href= "/api-docs/sell/static/metadata/condition-id-values.html ">Item condition ID and name values</a>. */
		listingConditionIds?: Array<string>;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		maxPrice?: Amount;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		minPrice?: Amount;
	}

	/** This type defines all rules/inclusion filters used to add listings to campaigns or promotions. Use of the specific fields is different for campaigns or promotions. See <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html ">Using the selectionRules container</a>. */
	export interface SelectionRuleFormProperties {

		/** This enumerated value indicates if the category ID for the item is an identifier for eBay categories or for a seller's eBay store categories. <br><br>For <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Campaign ">Promoted Listing campaigns</a>, this field includes the type of the category ID for the item(s) to be included in the campaign.<br><br>For <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Promotio ">Item promotions</a>, this field identifies the scope for the corresponding array as eBay categories or for a seller's eBay store categories. Required when used in an Item promotion and <b>inventoryCriterionType</b> is set to <code>INVENTORY_BY_RULE</code>.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:CategoryScopeEnum'>eBay API documentation</a> */
		categoryScope: FormControl<string | null | undefined>,
	}
	export function CreateSelectionRuleFormGroup() {
		return new FormGroup<SelectionRuleFormProperties>({
			categoryScope: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines how the Promoted Listings fee is calculated for a Promoted Listings ad campaign. */
	export interface FundingStrategy {

		/** The ad rate strategy that shall be applied to the campaign. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdRateStrategyEnum'>eBay API documentation</a> */
		adRateStrategy?: string | null;

		/** The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is the default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><span class="tablenote"><b>Note:</b>This field is only relevant for campaigns that use the CPS funding model and a fixed ad rate. It is not used for campaigns that use the Cost Per Click (CPC) funding model and should not be provided when the selected adRateStrategy for the campaign is dynamic.</span><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0 */
		bidPercentage?: string | null;

		/** A field that indicates whether a single, user-defined bid percentage (also known as the <i>ad rate</i>) should be used, or whether eBay should automatically adjust listings to maintain the daily suggested bid percentage.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Dynamic adjustment is only applicable when the <b>adRateStrategy</b> is set to <code>DYNAMIC</code>.</span><br /><b>Default:</b> <code>FIXED</code> */
		dynamicAdRatePreferences?: Array<DynamicAdRatePreference>;

		/** Indicates the model that eBay uses to calculate the Promoted Listings fee. <p>For a description of the funding model types, refer to <b>FundingModelTypeEnum</b>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:FundingModelEnum'>eBay API documentation</a> */
		fundingModel?: string | null;
	}

	/** This type defines how the Promoted Listings fee is calculated for a Promoted Listings ad campaign. */
	export interface FundingStrategyFormProperties {

		/** The ad rate strategy that shall be applied to the campaign. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdRateStrategyEnum'>eBay API documentation</a> */
		adRateStrategy: FormControl<string | null | undefined>,

		/** The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is the default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><span class="tablenote"><b>Note:</b>This field is only relevant for campaigns that use the CPS funding model and a fixed ad rate. It is not used for campaigns that use the Cost Per Click (CPC) funding model and should not be provided when the selected adRateStrategy for the campaign is dynamic.</span><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0 */
		bidPercentage: FormControl<string | null | undefined>,

		/** Indicates the model that eBay uses to calculate the Promoted Listings fee. <p>For a description of the funding model types, refer to <b>FundingModelTypeEnum</b>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:FundingModelEnum'>eBay API documentation</a> */
		fundingModel: FormControl<string | null | undefined>,
	}
	export function CreateFundingStrategyFormGroup() {
		return new FormGroup<FundingStrategyFormProperties>({
			adRateStrategy: new FormControl<string | null | undefined>(undefined),
			bidPercentage: new FormControl<string | null | undefined>(undefined),
			fundingModel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that defines the ad rate details for a Promoted Listings Standard (PLS) ad campaign. */
	export interface DynamicAdRatePreference {

		/** The percentage above or below (-) the eBay suggested ad rate that a seller is willing to pay.<br /><br />This specifies the maximum and minimum values to which an ad rate can be dynamically adjusted. */
		adRateAdjustmentPercent?: string | null;

		/** The maximum value (specified as a percentage) to which the eBay suggested ad rate can be adjusted. The adjusted ad rate will never exceed this percentage. */
		adRateCapPercent?: string | null;
	}

	/** A type that defines the ad rate details for a Promoted Listings Standard (PLS) ad campaign. */
	export interface DynamicAdRatePreferenceFormProperties {

		/** The percentage above or below (-) the eBay suggested ad rate that a seller is willing to pay.<br /><br />This specifies the maximum and minimum values to which an ad rate can be dynamically adjusted. */
		adRateAdjustmentPercent: FormControl<string | null | undefined>,

		/** The maximum value (specified as a percentage) to which the eBay suggested ad rate can be adjusted. The adjusted ad rate will never exceed this percentage. */
		adRateCapPercent: FormControl<string | null | undefined>,
	}
	export function CreateDynamicAdRatePreferenceFormGroup() {
		return new FormGroup<DynamicAdRatePreferenceFormProperties>({
			adRateAdjustmentPercent: new FormControl<string | null | undefined>(undefined),
			adRateCapPercent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container for the details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model. */
	export interface CampaignBudgetRequest {

		/** A container for the budget details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model.<br /><br /><span class="tablenote"><b>Note:</b> This container will only be returned for campaigns using the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span> */
		daily?: BudgetRequest;
	}

	/** A container for the details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model. */
	export interface CampaignBudgetRequestFormProperties {
	}
	export function CreateCampaignBudgetRequestFormGroup() {
		return new FormGroup<CampaignBudgetRequestFormProperties>({
		});

	}


	/** This type defines the fields that paginate the campaigns returned by the request. The entire <i>result set</i> consists of 0 or more sequenced <i>response pages</i>, where each page consists of 0 or more items from the complete result set. */
	export interface CampaignPagedCollectionResponse {

		/** This array contains all of the seller's campaign that match the request criteria. */
		campaigns?: Array<Campaign>;

		/** The URI of the current page of results from the result set. */
		href?: string | null;

		/**
		 * The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048 */
		next?: string | null;

		/**
		 * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results. <br><br><b>Max length</b>: 2048 */
		prev?: string | null;

		/**
		 * The total number of campaigns retrieved in the result set.  <br><br>If no campaigns are found, this field is returned with a value of <code>0</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}

	/** This type defines the fields that paginate the campaigns returned by the request. The entire <i>result set</i> consists of 0 or more sequenced <i>response pages</i>, where each page consists of 0 or more items from the complete result set. */
	export interface CampaignPagedCollectionResponseFormProperties {

		/** The URI of the current page of results from the result set. */
		href: FormControl<string | null | undefined>,

		/**
		 * The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048 */
		next: FormControl<string | null | undefined>,

		/**
		 * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results. <br><br><b>Max length</b>: 2048 */
		prev: FormControl<string | null | undefined>,

		/**
		 * The total number of campaigns retrieved in the result set.  <br><br>If no campaigns are found, this field is returned with a value of <code>0</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateCampaignPagedCollectionResponseFormGroup() {
		return new FormGroup<CampaignPagedCollectionResponseFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type contains a list of campaigns. */
	export interface Campaigns {

		/** This is an array of one or campaigns that match the listing or inventory item group specified in the request. */
		campaigns?: Array<Campaign>;
	}

	/** This type contains a list of campaigns. */
	export interface CampaignsFormProperties {
	}
	export function CreateCampaignsFormGroup() {
		return new FormGroup<CampaignsFormProperties>({
		});

	}


	/** This type defines the fields needed for a clone-campaign request. */
	export interface CloneCampaignRequest {

		/** A seller-defined name for the newly-cloned campaign. This value must be unique for the seller. <p>You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.</p><b>Max length: </b>80 characters */
		campaignName?: string | null;

		/** The date and time the campaign ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an <a href="/api-docs/sell/marketing/resources/campaign/methods/endCampaign">endCampaign</a> call, or if they update the campaign at a later time with an end date. */
		endDate?: string | null;

		/** This type defines how the Promoted Listings fee is calculated for a Promoted Listings ad campaign. */
		fundingStrategy?: FundingStrategy;

		/** The date and time the cloned campaign starts, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.  <p>On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign. Call <b>getCampaign</b> to check the status of the campaign.</p> */
		startDate?: string | null;
	}

	/** This type defines the fields needed for a clone-campaign request. */
	export interface CloneCampaignRequestFormProperties {

		/** A seller-defined name for the newly-cloned campaign. This value must be unique for the seller. <p>You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.</p><b>Max length: </b>80 characters */
		campaignName: FormControl<string | null | undefined>,

		/** The date and time the campaign ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an <a href="/api-docs/sell/marketing/resources/campaign/methods/endCampaign">endCampaign</a> call, or if they update the campaign at a later time with an end date. */
		endDate: FormControl<string | null | undefined>,

		/** The date and time the cloned campaign starts, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.  <p>On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign. Call <b>getCampaign</b> to check the status of the campaign.</p> */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreateCloneCampaignRequestFormGroup() {
		return new FormGroup<CloneCampaignRequestFormProperties>({
			campaignName: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This container defines a coded coupon promotion. It is required if the promotion type is CODED_COUPON. */
	export interface CouponConfiguration {

		/** A unique code that buyers can use during checkout to receive a discount. The code must be unique across eBay. <br><br>The code must be from 8-15 alphanumeric characters and can contain no more than two dashes ( - ).<br><br>This is required when the promotion type is CODED_COUPON. */
		couponCode?: string | null;

		/** This indicates the type of Coded Coupon promotion, and is required when the promotion type is <b>CODED_COUPON</b>.<br><br>Supported types:<ul><li><b>PRIVATE_SINGLE_SELLER_COUPON:</b> Anyone can use and share the coupon code, but it isn't posted on eBay.</li><li><b>PUBLIC_SINGLE_SELLER_COUPON:</b> Anyone can find the coupon code on eBay and use it.</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:CouponTypeEnum'>eBay API documentation</a> */
		couponType?: string | null;

		/**
		 * This sets the limit on the number of times a buyer can use this coupon. The range of values is 1-10. If no value is provided, a buyer can use the coupon an unlimited number of times.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxCouponRedemptionPerUser?: number | null;
	}

	/** This container defines a coded coupon promotion. It is required if the promotion type is CODED_COUPON. */
	export interface CouponConfigurationFormProperties {

		/** A unique code that buyers can use during checkout to receive a discount. The code must be unique across eBay. <br><br>The code must be from 8-15 alphanumeric characters and can contain no more than two dashes ( - ).<br><br>This is required when the promotion type is CODED_COUPON. */
		couponCode: FormControl<string | null | undefined>,

		/** This indicates the type of Coded Coupon promotion, and is required when the promotion type is <b>CODED_COUPON</b>.<br><br>Supported types:<ul><li><b>PRIVATE_SINGLE_SELLER_COUPON:</b> Anyone can use and share the coupon code, but it isn't posted on eBay.</li><li><b>PUBLIC_SINGLE_SELLER_COUPON:</b> Anyone can find the coupon code on eBay and use it.</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:CouponTypeEnum'>eBay API documentation</a> */
		couponType: FormControl<string | null | undefined>,

		/**
		 * This sets the limit on the number of times a buyer can use this coupon. The range of values is 1-10. If no value is provided, a buyer can use the coupon an unlimited number of times.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxCouponRedemptionPerUser: FormControl<number | null | undefined>,
	}
	export function CreateCouponConfigurationFormGroup() {
		return new FormGroup<CouponConfigurationFormProperties>({
			couponCode: new FormControl<string | null | undefined>(undefined),
			couponType: new FormControl<string | null | undefined>(undefined),
			maxCouponRedemptionPerUser: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A type that defines the fields for the <b>CreateAdGroup</b> request. */
	export interface CreateAdGroupRequest {

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		defaultBid?: Amount;

		/** The seller-defined name of the ad group. */
		name?: string | null;
	}

	/** A type that defines the fields for the <b>CreateAdGroup</b> request. */
	export interface CreateAdGroupRequestFormProperties {

		/** The seller-defined name of the ad group. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateAdGroupRequestFormGroup() {
		return new FormGroup<CreateAdGroupRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the fields needed to create a campaign. To create a campaign, you need to specify a name, start and end dates, funding, marketplace, and optionally the criterion (selection rules). */
	export interface CreateCampaignRequest {

		/** A container for the details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model. */
		budget?: CampaignBudgetRequest;

		/** This type defines the fields for specifying the criterion (selection rule) settings of an ad campaign. If you populate the campaignCriterion object in your <b>createCampaign</b> request, ads for the campaign are created by rule for the listings that meet the criteria you specify, and these ads are associated with the newly created campaign. */
		campaignCriterion?: CampaignCriterion;

		/** A seller-defined name for the campaign. This value must be unique for the seller. <p>You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.</p><b>Max length: </b>80 characters */
		campaignName?: string | null;

		/** The date and time the campaign ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an <a href="/api-docs/sell/marketing/resources/campaign/methods/endCampaign">endCampaign</a> call, or if they update the campaign at a later time with an end date. */
		endDate?: string | null;

		/** This type defines how the Promoted Listings fee is calculated for a Promoted Listings ad campaign. */
		fundingStrategy?: FundingStrategy;

		/** The ID of the eBay marketplace where the campaign is hosted. See the <b>MarketplaceIdEnum</b> type to get the appropriate enumeration value for the listing marketplace. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId?: string | null;

		/** The date and time the campaign starts, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.  <p>On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign. Call <b>getCampaign</b> to check the status of the campaign.</p> */
		startDate?: string | null;
	}

	/** This type defines the fields needed to create a campaign. To create a campaign, you need to specify a name, start and end dates, funding, marketplace, and optionally the criterion (selection rules). */
	export interface CreateCampaignRequestFormProperties {

		/** A seller-defined name for the campaign. This value must be unique for the seller. <p>You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.</p><b>Max length: </b>80 characters */
		campaignName: FormControl<string | null | undefined>,

		/** The date and time the campaign ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an <a href="/api-docs/sell/marketing/resources/campaign/methods/endCampaign">endCampaign</a> call, or if they update the campaign at a later time with an end date. */
		endDate: FormControl<string | null | undefined>,

		/** The ID of the eBay marketplace where the campaign is hosted. See the <b>MarketplaceIdEnum</b> type to get the appropriate enumeration value for the listing marketplace. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId: FormControl<string | null | undefined>,

		/** The date and time the campaign starts, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller.  <p>On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign. Call <b>getCampaign</b> to check the status of the campaign.</p> */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreateCreateCampaignRequestFormGroup() {
		return new FormGroup<CreateCampaignRequestFormProperties>({
			campaignName: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			marketplaceId: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the rules that govern the generation of a report task and the criteria that's used to create the report. The report-generation rules include the starting and ending dates for the report. Report-task criteria includes the report dimensions, metrics, listings covered in the report, and so on. For information on the required and optional fields for each report type, see <a href="/api-docs/sell/static/marketing/pl-reports.html">Promoted Listings reporting</a>. */
	export interface CreateReportTask {

		/** A list of additional records that shall be included in the report, such as non-performing data.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Additional records are only applicable to Promoted Listings Advanced (PLA) campaigns that use the Cost Per Click (CPC) funding model.</span><br /><b>Valid Value:</b> <code>NON_PERFORMING_DATA</code> */
		additionalRecords?: Array<string>;

		/** A list of campaign IDs to be included in the report task. Call <b>getCampaigns</b> to get a list of the current campaign IDs for a seller.<br /><br />For Promoted Listings Standard (PLS) sellers, this field is required if the <b>reportType</b> is set to <code>CAMPAIGN_PERFORMANCE_REPORT</code> or <code>CAMPAIGN_PERFORMANCE_SUMMARY_REPORT</code>.<br /><br />For Promoted Listings Advanced (PLA) sellers, leave this request field blank to retrieve the details for all campaigns associated with your account, or specify the campaign IDs for which you would like to retrieve the campaign-specific details.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> There is a maximum data limit that cannot be exceeded when generating reports. If this threshold is exceeded, the report will fail. Refer to <a href="/api-docs/sell/static/marketing/pl-reports.html#creation">Promoted Listings reporting</a> in the Selling Integration Guide for details.</span><br /><br /><b>Maximum:</b><ul><li>25 IDs for PLS</li><li>1,000 IDs for PLA</li></ul> */
		campaignIds?: Array<string>;

		/** The date defining the start of the timespan covered by the report.<br /><br />Format the timestamp as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock with local offset.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The date specified cannot be a future date.</span><br /><br /><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code><br /><br /><b>Example:</b> <code>2021-03-15T13:00:00-07:00</code> */
		dateFrom?: string | null;

		/** The date defining the end of the timespan covered by the report.<br /><br />As with the <b>dateFrom</b> field, format the timestamp as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The date specified cannot be a future date. Additionally, the time specified must be a later time than that specified in the <b>dateFrom</b> field.</span><br /><br /><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code><br /><br /><b>Example:</b> <code>2021-03-17T13:00:00-07:00</code> */
		dateTo?: string | null;

		/** The list of the dimensions applied to the report.  <p>A dimension is an attribute to which the report data applies. For example, if you set <b>dimensionKey</b> to <code>campaign_id</code> in a Campaign Performance Report, the data will apply to the entire ad campaign. For information on the dimensions and how to specify them, see <a href="/api-docs/sell/static/marketing/pl-reports.html">Promoted Listings reporting</a>.</p> */
		dimensions?: Array<Dimension>;

		/** The funding model for the campaign that shall be included in the report.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The default funding model for Promoted Listings reports is <code>COST_PER_SALE</code>.</span><br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Multiple value support for the <b>fundingModels</b> array has been deprecated. See <a href ="/develop/apis/api-deprecation-status ">API&nbsp;Deprecation&nbsp;Status</a> for information.</span><br /><br /><b>Valid Values:</b><ul><li><code>COST_PER_SALE</code></li><li><code>COST_PER_CLICK</code></li></ul><i>Required if</i> the campaign funding model is Cost Per Click (CPC). */
		fundingModels?: Array<string>;

		/** You can use this field to supply an array of items to include in the report if you manage your inventory with the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a>.  <br><br>This field is mutually exclusive with the <b>listingIds</b> field; if you populate this field, <i>do not</i> populate the <b>listingIds</b> field.  <br><br>An inventory reference identifies an item in your inventory using a pair of values, where the <b>inventoryReferenceId</b> can be either a seller-defined <b>SKU</b> value or an <b>inventoryItemGroupKey</b>, where an <b>inventoryItemGroupKey</b> is seller-defined ID for an inventory item group (a multiple-variation listing). <br><br>Couple the <b>inventoryReferenceId</b> with an <b>inventoryReferenceType</b> identifier to fully identify an item in your inventory.  <br><br><b>Maximum: </b> 500 items <br><br><i>Required if </i> you do not supply an array of <b>listingId</b> values or if you set <b>reportType</b> to <code>INVENTORY_PERFORMANCE_REPORT</code>. */
		inventoryReferences?: Array<InventoryReference>;

		/** Use this field to supply an array of listing IDs you want to include in the report.<br><br>A listing ID is the eBay listing identifier that is generated when the listing is created. This field accepts listing ID values generated with both the Inventory API and the eBay Traditional APIs, such as the Trading and Finding APIs.<br><br><span class="tablenote"><span style="color:#FF0000"><strong>Important:</strong></span> This field is mutually exclusive with the <b>inventoryReferences</b> field; if you populate this field, <i>do not</i> populate the <b>inventoryReferences</b> field.</span><br /><br />For Promoted Listings Standard (PLS) sellers, this field is required if you do not supply an array of <b>inventoryReferences</b> values or if you set the <b>reportType</b> to <code>LISTING_PERFORMANCE_REPORT</code>.<br /><br />For Promoted Listings Advanced (PLA) sellers, leave this field blank to retrieve the details for all listings associated with the specified campaign IDs (or all campaigns associated with your account, if no campaign IDs are specified), or specify the listing IDs for which you would like to retrieve the listing-specific details.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> There is a maximum data limit that cannot be exceeded when generating reports. If this threshold is exceeded, the report will fail. Refer to <a href="/api-docs/sell/static/marketing/pl-reports.html#creation">Promoted Listings reporting</a> in the Selling Integration Guide for details.</span><br /><br /><b>Maximum:</b> 500 listings */
		listingIds?: Array<string>;

		/** The ID for the eBay marketplace on which the report is based.<br /><br /><b>Maximum: </b> 1 For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId?: string | null;

		/** The list of metrics to be included in the report.  <p>Metrics are the quantitative measurements compiled into the report and the data returned is based on the specified dimension of the report. For example, if the dimension is <code>campaign</code>, the metrics for <b>number of sales</b> would be the number of sales in the campaign. However, if the dimension is <code>listing</code>, the <b>number of sales</b> represents the number of items sold in that listing.</p>  <p>For information on metric keys and how to set them, see <a href="/api-docs/sell/static/marketing/pl-reports.html">Promoted Listings reporting</a>.</p><b>Minimum: </b> 1 */
		metricKeys?: Array<string>;

		/** The file format of the report. Currently, the only supported format is <code>TSV_GZIP</code>, which is a gzip file with tab separated values. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportFormatEnum'>eBay API documentation</a> */
		reportFormat?: string | null;

		/** The type of report to be generated, such as <code>ACCOUNT_PERFORMANCE_REPORT</code> or <code>CAMPAIGN_PERFORMANCE_REPORT</code>.<br/><br/><span class="tablenote"><b>Note:</b> INVENTORY_PERFORMANCE_REPORT is not currently available; availability date is pending.</span><br /><br /><b>Maximum:</b> 1 For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportTypeEnum'>eBay API documentation</a> */
		reportType?: string | null;
	}

	/** This type defines the rules that govern the generation of a report task and the criteria that's used to create the report. The report-generation rules include the starting and ending dates for the report. Report-task criteria includes the report dimensions, metrics, listings covered in the report, and so on. For information on the required and optional fields for each report type, see <a href="/api-docs/sell/static/marketing/pl-reports.html">Promoted Listings reporting</a>. */
	export interface CreateReportTaskFormProperties {

		/** The date defining the start of the timespan covered by the report.<br /><br />Format the timestamp as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock with local offset.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The date specified cannot be a future date.</span><br /><br /><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code><br /><br /><b>Example:</b> <code>2021-03-15T13:00:00-07:00</code> */
		dateFrom: FormControl<string | null | undefined>,

		/** The date defining the end of the timespan covered by the report.<br /><br />As with the <b>dateFrom</b> field, format the timestamp as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The date specified cannot be a future date. Additionally, the time specified must be a later time than that specified in the <b>dateFrom</b> field.</span><br /><br /><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z</code><br /><br /><b>Example:</b> <code>2021-03-17T13:00:00-07:00</code> */
		dateTo: FormControl<string | null | undefined>,

		/** The ID for the eBay marketplace on which the report is based.<br /><br /><b>Maximum: </b> 1 For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId: FormControl<string | null | undefined>,

		/** The file format of the report. Currently, the only supported format is <code>TSV_GZIP</code>, which is a gzip file with tab separated values. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportFormatEnum'>eBay API documentation</a> */
		reportFormat: FormControl<string | null | undefined>,

		/** The type of report to be generated, such as <code>ACCOUNT_PERFORMANCE_REPORT</code> or <code>CAMPAIGN_PERFORMANCE_REPORT</code>.<br/><br/><span class="tablenote"><b>Note:</b> INVENTORY_PERFORMANCE_REPORT is not currently available; availability date is pending.</span><br /><br /><b>Maximum:</b> 1 For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportTypeEnum'>eBay API documentation</a> */
		reportType: FormControl<string | null | undefined>,
	}
	export function CreateCreateReportTaskFormGroup() {
		return new FormGroup<CreateReportTaskFormProperties>({
			dateFrom: new FormControl<string | null | undefined>(undefined),
			dateTo: new FormControl<string | null | undefined>(undefined),
			marketplaceId: new FormControl<string | null | undefined>(undefined),
			reportFormat: new FormControl<string | null | undefined>(undefined),
			reportType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the annotation and dimension key used by the report. For information on how to set these values, see <a href="/api-docs/sell/static/marketing/pl-reports.html">Promoted Listings reporting</a>. */
	export interface Dimension {

		/** A list of annotations associated with the dimension of the report. */
		annotationKeys?: Array<string>;

		/** The name of the dimension on which the report is based. <p>A dimension is an attribute to which the report data applies.</p> */
		dimensionKey?: string | null;
	}

	/** This type defines the annotation and dimension key used by the report. For information on how to set these values, see <a href="/api-docs/sell/static/marketing/pl-reports.html">Promoted Listings reporting</a>. */
	export interface DimensionFormProperties {

		/** The name of the dimension on which the report is based. <p>A dimension is an attribute to which the report data applies.</p> */
		dimensionKey: FormControl<string | null | undefined>,
	}
	export function CreateDimensionFormGroup() {
		return new FormGroup<DimensionFormProperties>({
			dimensionKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type is used to identify an item that is managed by the Inventory API. The type defines the fields contained in an inventory reference ID. */
	export interface InventoryReference {

		/** The seller's inventory reference ID for an item that is managed with the Inventory API.  <br><br>An inventory reference is either the ID of a single listing or the ID of the parent of an item group listing (a multi-variation listing, such as a shirt that is available in multiple sizes and colors).  <br><br><i>Required if </i> if you supply an <b>inventoryReferenceType</b>. */
		inventoryReferenceId?: string | null;

		/** Indicates the type of item indicated by the <b>inventoryReferenceId</b>.  <br><br>This value can be set to either <code>INVENTORY_ITEM</code> or <code>INVENTORY_ITEM_GROUP</code> (if the ID points to a multi-variation listing). <br><br><i>Required if </i> if you supply an <b>inventoryReferenceId</b>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a> */
		inventoryReferenceType?: string | null;
	}

	/** This complex type is used to identify an item that is managed by the Inventory API. The type defines the fields contained in an inventory reference ID. */
	export interface InventoryReferenceFormProperties {

		/** The seller's inventory reference ID for an item that is managed with the Inventory API.  <br><br>An inventory reference is either the ID of a single listing or the ID of the parent of an item group listing (a multi-variation listing, such as a shirt that is available in multiple sizes and colors).  <br><br><i>Required if </i> if you supply an <b>inventoryReferenceType</b>. */
		inventoryReferenceId: FormControl<string | null | undefined>,

		/** Indicates the type of item indicated by the <b>inventoryReferenceId</b>.  <br><br>This value can be set to either <code>INVENTORY_ITEM</code> or <code>INVENTORY_ITEM_GROUP</code> (if the ID points to a multi-variation listing). <br><br><i>Required if </i> if you supply an <b>inventoryReferenceId</b>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum'>eBay API documentation</a> */
		inventoryReferenceType: FormControl<string | null | undefined>,
	}
	export function CreateInventoryReferenceFormGroup() {
		return new FormGroup<InventoryReferenceFormProperties>({
			inventoryReferenceId: new FormControl<string | null | undefined>(undefined),
			inventoryReferenceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the annotation values associated with a dimension. Annotations are metadata of the dimension. For example, annotations for a listing ID could be <code>listing_title</code> or <code>listing_quantity_sold</code>. */
	export interface DimensionKeyAnnotation {

		/** An annotation key associated with the dimension. */
		annotationKey?: string | null;

		/** The data type of the annotation key value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:DataTypeEnum'>eBay API documentation</a> */
		dataType?: string | null;
	}

	/** This type defines the annotation values associated with a dimension. Annotations are metadata of the dimension. For example, annotations for a listing ID could be <code>listing_title</code> or <code>listing_quantity_sold</code>. */
	export interface DimensionKeyAnnotationFormProperties {

		/** An annotation key associated with the dimension. */
		annotationKey: FormControl<string | null | undefined>,

		/** The data type of the annotation key value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:DataTypeEnum'>eBay API documentation</a> */
		dataType: FormControl<string | null | undefined>,
	}
	export function CreateDimensionKeyAnnotationFormGroup() {
		return new FormGroup<DimensionKeyAnnotationFormProperties>({
			annotationKey: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the dimension used to create the report and the annotation keys associated with that dimension. */
	export interface DimensionMetadata {

		/** The data type of the dimension value used to create the report. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:DataTypeEnum'>eBay API documentation</a> */
		dataType?: string | null;

		/** The name of the dimension used to create the report. */
		dimensionKey?: string | null;

		/** An list of annotation keys associated with the specified dimension of the report. */
		dimensionKeyAnnotations?: Array<DimensionKeyAnnotation>;
	}

	/** This type defines the dimension used to create the report and the annotation keys associated with that dimension. */
	export interface DimensionMetadataFormProperties {

		/** The data type of the dimension value used to create the report. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:DataTypeEnum'>eBay API documentation</a> */
		dataType: FormControl<string | null | undefined>,

		/** The name of the dimension used to create the report. */
		dimensionKey: FormControl<string | null | undefined>,
	}
	export function CreateDimensionMetadataFormGroup() {
		return new FormGroup<DimensionMetadataFormProperties>({
			dataType: new FormControl<string | null | undefined>(undefined),
			dimensionKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This container defines the promotional discount as either a monetary amount or a percentage of the sales price.  <p class="tablenote"><b>Important!:</b> You must populate one and only one of the fields in this container: <ul><li><b>amountOffItem</b></li> <li><b>amountOffOrder</b></li> <li><b>percentageOffItem</b></li> <li><b>percentageOffOrder</b></li></ul></p>  <p class="tablenote"><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/pm-specifying-discounts.html">Configuring discounts for threshold promotions</a> for information and examples on how to combine <b>discountBenefit</b> and <b>discountSpecification</b> values to create different types of promotions.</p> */
	export interface DiscountBenefit {

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		amountOffItem?: Amount;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		amountOffOrder?: Amount;

		/** The percentage applied to the sales price that is discounted off the promoted item (or items) when the promotion criteria is met.  <br><br>Valid integer values for percentage off: &nbsp;&nbsp;<b>Min:</b> <code>5</code> &nbsp;&nbsp;<b>Max:</b> <code>80</code> */
		percentageOffItem?: string | null;

		/** Used for threshold promotions, this is the percentage of the order price that is discounted off the order when the promotion criteria is met. This field is not value for markdown promotions.  <br><br>Valid integer values for ORDER_DISCOUNT promotions: &nbsp;&nbsp;<b>Min:</b> <code>5</code> &nbsp;&nbsp;<b>Max:</b> <code>80</code>  <br><br>For VOLUME_DISCOUNT promotions: Must be set to <code>0</code> for the first discount rule. */
		percentageOffOrder?: string | null;
	}

	/** This container defines the promotional discount as either a monetary amount or a percentage of the sales price.  <p class="tablenote"><b>Important!:</b> You must populate one and only one of the fields in this container: <ul><li><b>amountOffItem</b></li> <li><b>amountOffOrder</b></li> <li><b>percentageOffItem</b></li> <li><b>percentageOffOrder</b></li></ul></p>  <p class="tablenote"><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/pm-specifying-discounts.html">Configuring discounts for threshold promotions</a> for information and examples on how to combine <b>discountBenefit</b> and <b>discountSpecification</b> values to create different types of promotions.</p> */
	export interface DiscountBenefitFormProperties {

		/** The percentage applied to the sales price that is discounted off the promoted item (or items) when the promotion criteria is met.  <br><br>Valid integer values for percentage off: &nbsp;&nbsp;<b>Min:</b> <code>5</code> &nbsp;&nbsp;<b>Max:</b> <code>80</code> */
		percentageOffItem: FormControl<string | null | undefined>,

		/** Used for threshold promotions, this is the percentage of the order price that is discounted off the order when the promotion criteria is met. This field is not value for markdown promotions.  <br><br>Valid integer values for ORDER_DISCOUNT promotions: &nbsp;&nbsp;<b>Min:</b> <code>5</code> &nbsp;&nbsp;<b>Max:</b> <code>80</code>  <br><br>For VOLUME_DISCOUNT promotions: Must be set to <code>0</code> for the first discount rule. */
		percentageOffOrder: FormControl<string | null | undefined>,
	}
	export function CreateDiscountBenefitFormGroup() {
		return new FormGroup<DiscountBenefitFormProperties>({
			percentageOffItem: new FormControl<string | null | undefined>(undefined),
			percentageOffOrder: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type defines a promotion as being either a monetary amount or a percentage of a sales price that's subtracted from the price of an item or order. <p>Set the amount of the discount and the rules that govern when the discount triggers using the <b>discountBenefit</b> and <b>discountSpecification</b> fields.</p>  <p class="tablenote"><b>Note:</b> In <b>volume pricing promotions</b>, you must configure at least two <b>discountRule</b> containers and at most four.</p> */
	export interface DiscountRule {

		/** This container defines the promotional discount as either a monetary amount or a percentage of the sales price.  <p class="tablenote"><b>Important!:</b> You must populate one and only one of the fields in this container: <ul><li><b>amountOffItem</b></li> <li><b>amountOffOrder</b></li> <li><b>percentageOffItem</b></li> <li><b>percentageOffOrder</b></li></ul></p>  <p class="tablenote"><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/pm-specifying-discounts.html">Configuring discounts for threshold promotions</a> for information and examples on how to combine <b>discountBenefit</b> and <b>discountSpecification</b> values to create different types of promotions.</p> */
		discountBenefit?: DiscountBenefit;

		/** This container defines the criteria for when the discounts of a promotion trigger, such as the minimum quantity the buyer must purchase before the promotion kicks in. The promotional discount is applied each time the criteria defined by this container is met.  <p><b>Note:</b> When configuring the rules that govern when the discounts are applied, populate just one of the following fields in the <b>discountSpecification</b> container:</p>  <ul><li><b>minAmount</b></li> <li><b>minQuantity</b></li> <li><b>forEachQuantity</b></li> <li><b>forEachAmount</b></li></ul> <p class="tablenote"><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/pm-specifying-discounts.html">Configuring discounts for threshold promotions</a> for information and examples on how to combine <b>discountBenefit</b> and <b>discountSpecification</b> to create different types of promotions.</p> */
		discountSpecification?: DiscountSpecification;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		maxDiscountAmount?: Amount;

		/**
		 * This field indicates the order in which the <b>discountRules</b> are presented. The value specified for this field must equal the associated <b>minQuantity</b> value. <br><br><i>Required if </i> you are creating a volume pricing promotion.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ruleOrder?: number | null;
	}

	/** This complex type defines a promotion as being either a monetary amount or a percentage of a sales price that's subtracted from the price of an item or order. <p>Set the amount of the discount and the rules that govern when the discount triggers using the <b>discountBenefit</b> and <b>discountSpecification</b> fields.</p>  <p class="tablenote"><b>Note:</b> In <b>volume pricing promotions</b>, you must configure at least two <b>discountRule</b> containers and at most four.</p> */
	export interface DiscountRuleFormProperties {

		/**
		 * This field indicates the order in which the <b>discountRules</b> are presented. The value specified for this field must equal the associated <b>minQuantity</b> value. <br><br><i>Required if </i> you are creating a volume pricing promotion.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ruleOrder: FormControl<number | null | undefined>,
	}
	export function CreateDiscountRuleFormGroup() {
		return new FormGroup<DiscountRuleFormProperties>({
			ruleOrder: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This container defines the criteria for when the discounts of a promotion trigger, such as the minimum quantity the buyer must purchase before the promotion kicks in. The promotional discount is applied each time the criteria defined by this container is met.  <p><b>Note:</b> When configuring the rules that govern when the discounts are applied, populate just one of the following fields in the <b>discountSpecification</b> container:</p>  <ul><li><b>minAmount</b></li> <li><b>minQuantity</b></li> <li><b>forEachQuantity</b></li> <li><b>forEachAmount</b></li></ul> <p class="tablenote"><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/pm-specifying-discounts.html">Configuring discounts for threshold promotions</a> for information and examples on how to combine <b>discountBenefit</b> and <b>discountSpecification</b> to create different types of promotions.</p> */
	export interface DiscountSpecification {

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		forEachAmount?: Amount;

		/**
		 * The number of items that must be purchased in order to qualify for the discount.  <br><br><b>Valid values:</b> <br><code> &nbsp; 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, <br> &nbsp; 12, 13, 14, 15, 16, 17, 18, 19 <br> &nbsp; 20, 25, 50, 75, 100</code>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		forEachQuantity?: number | null;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		minAmount?: Amount;

		/**
		 * The minimum quantity of promoted items that needs to be bought in order to qualify for the promotion's discount.  <br><br><b>Valid values:</b> <br><code> &nbsp; 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, <br> &nbsp; 12, 13, 14, 15, 16, 17, 18, 19 <br> &nbsp; 20, 25, 50, 75, 100</code>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minQuantity?: number | null;

		/**
		 * Use this field to configure "Buy One Get One" (or <b>BOGO</b>) promotions.  <br><br>You must couple this field with <b>forEachQuantity</b> and an <b>amountOffItem</b> or <b>percentOffItem</b> field to configure your BOGO promotion. This field is not valid with order-based promotions. <br><br>The value of this field represents the number of items to be discounted when other promotion criteria is met. For example, when the buyer adds the number of items identified by the <b>forEachQuantity</b> value to their cart, they are then eligible to receive the stated discount from an additional number of like items (the number of which is identified by this field) when they add those items to their cart. To receive the discount, the buyer must purchase the number of items indicated by  <b>forEachQuantity</b> <i>plus</i> the number indicated by this field.  <br><br><b>Valid values:</b> <br><code> &nbsp; 1, 2, 3, 4, 5, 6, 7, 8, 9, 10</code>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfDiscountedItems?: number | null;
	}

	/** This container defines the criteria for when the discounts of a promotion trigger, such as the minimum quantity the buyer must purchase before the promotion kicks in. The promotional discount is applied each time the criteria defined by this container is met.  <p><b>Note:</b> When configuring the rules that govern when the discounts are applied, populate just one of the following fields in the <b>discountSpecification</b> container:</p>  <ul><li><b>minAmount</b></li> <li><b>minQuantity</b></li> <li><b>forEachQuantity</b></li> <li><b>forEachAmount</b></li></ul> <p class="tablenote"><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/pm-specifying-discounts.html">Configuring discounts for threshold promotions</a> for information and examples on how to combine <b>discountBenefit</b> and <b>discountSpecification</b> to create different types of promotions.</p> */
	export interface DiscountSpecificationFormProperties {

		/**
		 * The number of items that must be purchased in order to qualify for the discount.  <br><br><b>Valid values:</b> <br><code> &nbsp; 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, <br> &nbsp; 12, 13, 14, 15, 16, 17, 18, 19 <br> &nbsp; 20, 25, 50, 75, 100</code>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		forEachQuantity: FormControl<number | null | undefined>,

		/**
		 * The minimum quantity of promoted items that needs to be bought in order to qualify for the promotion's discount.  <br><br><b>Valid values:</b> <br><code> &nbsp; 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, <br> &nbsp; 12, 13, 14, 15, 16, 17, 18, 19 <br> &nbsp; 20, 25, 50, 75, 100</code>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minQuantity: FormControl<number | null | undefined>,

		/**
		 * Use this field to configure "Buy One Get One" (or <b>BOGO</b>) promotions.  <br><br>You must couple this field with <b>forEachQuantity</b> and an <b>amountOffItem</b> or <b>percentOffItem</b> field to configure your BOGO promotion. This field is not valid with order-based promotions. <br><br>The value of this field represents the number of items to be discounted when other promotion criteria is met. For example, when the buyer adds the number of items identified by the <b>forEachQuantity</b> value to their cart, they are then eligible to receive the stated discount from an additional number of like items (the number of which is identified by this field) when they add those items to their cart. To receive the discount, the buyer must purchase the number of items indicated by  <b>forEachQuantity</b> <i>plus</i> the number indicated by this field.  <br><br><b>Valid values:</b> <br><code> &nbsp; 1, 2, 3, 4, 5, 6, 7, 8, 9, 10</code>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfDiscountedItems: FormControl<number | null | undefined>,
	}
	export function CreateDiscountSpecificationFormGroup() {
		return new FormGroup<DiscountSpecificationFormProperties>({
			forEachQuantity: new FormControl<number | null | undefined>(undefined),
			minQuantity: new FormControl<number | null | undefined>(undefined),
			numberOfDiscountedItems: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type defines either the selections rules or the list of listing IDs for the promotion. The "listing IDs" are are either the seller's item IDs or the eBay listing IDs. */
	export interface InventoryCriterion {

		/** Indicates how the items to include in the promotion are selected. You can include inventory by ID, using rules, or globally include all your inventory.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:InventoryCriterionEnum'>eBay API documentation</a> */
		inventoryCriterionType?: string | null;

		/** An array of containers for the seller's inventory reference IDs (also known as an "SKU" or "custom label") to be added to the promotion.  <p class="tablenote"><b>Note:</b> The request can have either <b>inventoryItems</b> or <b>listingIds</b>, but not both.</p>  <br><br><b>Required:</b> All listings in a promotion must offer an electronic payment method.  <br><b>Maximum:</b> 500 parent items  <br><b>Maximum SKU or custom label length:</b> 50 characters <br><br><i>Required if </i> <b>InventoryCriterionType</b> is set to <code>INVENTORY_BY_VALUE</code>, you must specify either <b>inventoryItems</b> or <b>listingIds</b>. */
		inventoryItems?: Array<InventoryItem>;

		/** An array of eBay listing IDs to be added to the promotion.  <p class="tablenote"><b>Note:</b> The request can have either <b>inventoryItems</b> or <b>listingIds</b>, but not both.</p>  <br><br><b>Required:</b> All listings in a promotion must offer an electronic payment method.  <br><b>Maximum:</b> 500 parent items  <br><b>Maximum SKU or custom label length:</b> 50 characters <br><br><i>Required if </i> <b>InventoryCriterionType</b> is set to <code>INVENTORY_BY_VALUE</code>, you must specify either <b>inventoryItems</b> or <b>listingIds</b>. */
		listingIds?: Array<string>;

		/** This type defines the fields for a set of inventory selection rules.  <br><br><b>Required:</b> When <b>inventoryCriterionType</b> is set to <code>INVENTORY_BY_RULE</code> or <code>INVENTORY_ANY</code>. */
		ruleCriteria?: RuleCriteria;
	}

	/** This type defines either the selections rules or the list of listing IDs for the promotion. The "listing IDs" are are either the seller's item IDs or the eBay listing IDs. */
	export interface InventoryCriterionFormProperties {

		/** Indicates how the items to include in the promotion are selected. You can include inventory by ID, using rules, or globally include all your inventory.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:InventoryCriterionEnum'>eBay API documentation</a> */
		inventoryCriterionType: FormControl<string | null | undefined>,
	}
	export function CreateInventoryCriterionFormGroup() {
		return new FormGroup<InventoryCriterionFormProperties>({
			inventoryCriterionType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the fields for the seller inventory reference IDs (also known as an "SKU" or "custom label"). */
	export interface InventoryItem {

		/** The seller's inventory reference ID for a listing. Also known as the "SKU" or "custom label," an inventory reference ID is either the ID of the listing or, if the listing has variations (such as a shirt that's available in multiple sizes and colors), the ID of the parent listing. */
		inventoryReferenceId?: string | null;
	}

	/** This type defines the fields for the seller inventory reference IDs (also known as an "SKU" or "custom label"). */
	export interface InventoryItemFormProperties {

		/** The seller's inventory reference ID for a listing. Also known as the "SKU" or "custom label," an inventory reference ID is either the ID of the listing or, if the listing has variations (such as a shirt that's available in multiple sizes and colors), the ID of the parent listing. */
		inventoryReferenceId: FormControl<string | null | undefined>,
	}
	export function CreateInventoryItemFormGroup() {
		return new FormGroup<InventoryItemFormProperties>({
			inventoryReferenceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the fields for a set of inventory selection rules.  <br><br><b>Required:</b> When <b>inventoryCriterionType</b> is set to <code>INVENTORY_BY_RULE</code> or <code>INVENTORY_ANY</code>. */
	export interface RuleCriteria {

		/** A list of seller inventory reference IDs to exclude from the promotion.  <br><br><p class="tablenote"><b>Note:</b> The request can have either <b>excludeInventoryItems</b> or <b>excludeListingIds</b> but not both.</p> <b>Maximum:</b> 100 parent items <br><b>Maximum SKU or custom label length:</b> 50 characters */
		excludeInventoryItems?: Array<InventoryItem>;

		/** A list of eBay listing IDs to exclude from the promotion.  <br><br><p class="tablenote"><b>Note:</b> The request can have either <b>excludeInventoryItems</b> or <b>excludeListingIds</b> but not both.</p> <b>Maximum:</b> 100 parent items <br><b>Maximum SKU or custom label length:</b> 50 characters */
		excludeListingIds?: Array<string>;

		/** A list of SKUs to remove from a markdown promotion. The listed SKUs are 'marked up' to their standard price after being part of the markdown promotion. */
		markupInventoryItems?: Array<InventoryItem>;

		/** A list of listing IDs to remove from a markdown promotion. The listed items are 'marked up' to their standard price after being part of the markdown promotion. */
		markupListingIds?: Array<string>;

		/** The container for the rules that select the items to include in a promotion.  <br><br><i>Required if </i> <b>inventoryCriterionType</b> is set to <code>INVENTORY_BY_RULE</code>. <br><br>For information on using the contained fields, see <a href= "/api-docs/sell/static/marketing/using-the-selectionrules-container.html#Promotio ">Item promotions</a>. */
		selectionRules?: Array<SelectionRule>;
	}

	/** This type defines the fields for a set of inventory selection rules.  <br><br><b>Required:</b> When <b>inventoryCriterionType</b> is set to <code>INVENTORY_BY_RULE</code> or <code>INVENTORY_ANY</code>. */
	export interface RuleCriteriaFormProperties {
	}
	export function CreateRuleCriteriaFormGroup() {
		return new FormGroup<RuleCriteriaFormProperties>({
		});

	}


	/** A container for details regarding the basis for an item. */
	export interface ItemBasis {

		/**
		 * The estimated value of the search impressions for items based on the provided dimensions. <br /><br /><b>Duration:</b> 17 days<br /><br /><b>Total slots:</b> 200 <br /><br /><b>Channel:</b> Dweb, Mweb, Native
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		estimatedValue?: number | null;

		/** The basis of the statistics. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:TargetingMetricsEnum'>eBay API documentation</a> */
		metric?: string | null;
	}

	/** A container for details regarding the basis for an item. */
	export interface ItemBasisFormProperties {

		/**
		 * The estimated value of the search impressions for items based on the provided dimensions. <br /><br /><b>Duration:</b> 17 days<br /><br /><b>Total slots:</b> 200 <br /><br /><b>Channel:</b> Dweb, Mweb, Native
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		estimatedValue: FormControl<number | null | undefined>,

		/** The basis of the statistics. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:TargetingMetricsEnum'>eBay API documentation</a> */
		metric: FormControl<string | null | undefined>,
	}
	export function CreateItemBasisFormGroup() {
		return new FormGroup<ItemBasisFormProperties>({
			estimatedValue: new FormControl<number | null | undefined>(undefined),
			metric: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the status of a markdown promotion. */
	export interface ItemMarkdownStatus {

		/** Indicates the state assigned to the markdown promotion using one of the <b>status</b> values. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:ItemMarkdownStatusEnum'>eBay API documentation</a> */
		listingMarkdownStatus?: string | null;

		/** Identifies the date the last time the state of the promotion changed. Both both markdown and markup events can trigger a status change. */
		statusChangedDate?: string | null;

		/** An eBay-assigned text string that describes the status of the promotion. */
		statusMessage?: string | null;
	}

	/** This type defines the status of a markdown promotion. */
	export interface ItemMarkdownStatusFormProperties {

		/** Indicates the state assigned to the markdown promotion using one of the <b>status</b> values. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:ItemMarkdownStatusEnum'>eBay API documentation</a> */
		listingMarkdownStatus: FormControl<string | null | undefined>,

		/** Identifies the date the last time the state of the promotion changed. Both both markdown and markup events can trigger a status change. */
		statusChangedDate: FormControl<string | null | undefined>,

		/** An eBay-assigned text string that describes the status of the promotion. */
		statusMessage: FormControl<string | null | undefined>,
	}
	export function CreateItemMarkdownStatusFormGroup() {
		return new FormGroup<ItemMarkdownStatusFormProperties>({
			listingMarkdownStatus: new FormControl<string | null | undefined>(undefined),
			statusChangedDate: new FormControl<string | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the fields used to describe an item price markdown promotion. */
	export interface ItemPriceMarkdown {

		/** If set to <code>true</code>, free shipping is applied to the first shipping service specified for the item. The first domestic shipping option is set to "free shipping," regardless if the shipping <b>optionType</b> for that service is set to <code>FLAT_RATE</code>, <code>CALCULATED</code>, or <code>NOT_SPECIFIED</code> (freight). This flag essentially adds free shipping as a promotional bonus. <br><br><b>Default:</b> <code>false</code> */
		applyFreeShipping?: boolean | null;

		/** If set to <code>true</code>, eBay will automatically add inventory items to the markdown promotion if they meet the <b>selectedInventoryDiscounts</b> criteria specified for the markdown promotion.  <br><br><b>Default:</b> <code>false</code> */
		autoSelectFutureInventory?: boolean | null;

		/** If set to <code>true</code>, price increases (including removing the free shipping flag) are blocked and an error message is returned if a seller attempts to adjust the price of an item that's partaking in this markdown promotion. If set to <code>false</code>, an item is dropped from the markdown promotion if the seller adjusts the price.  <br><br><b>Default:</b> <code>false</code> */
		blockPriceIncreaseInItemRevision?: boolean | null;

		/** This field is required if you are configuring an MARKDOWN_SALE promotion. <br><br>This is the seller-defined "tag line" for the offer, such as "Save on designer shoes." A tag line appears under the "offer-type text" that is generated for the promotion. The text is displayed on the offer tile that is shown on the seller's <b>All Offers</b> page and on the event page for the promotion.  <p class="tablenote"><b>Note:</b> Offer-type text is a teaser that's presented throughout the buyer's journey through the sales flow and is generated by eBay. This text is not editable by the seller&mdash;it's derived from the settings in the <b>discountRules</b> and <b>discountSpecification</b> fields&mdash;and can be, for example, "20% off".</p>  <br><b>Maximum length:</b> 50 */
		description?: string | null;

		/** The date and time the promotion ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). The value supplied for <b>endDate</b> must be at least 24 hours after the value supplied for the <b>startDate</b> of the markdown promotion.<br><br>For display purposes, convert this time into the local time of the seller.  <br><br><b>Max value:</b><ul><li><code>14</code> days for the AT, CH, DE, ES, FR, IE, IT, and UK, marketplaces.</li>  <li><code>45</code> days for all other marketplaces.</li></ul> */
		endDate?: string | null;

		/** The eBay marketplace ID of the site where the markdown promotion is hosted. Markdown promotions are supported on all eBay marketplaces. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId?: string | null;

		/** The seller-defined name or 'title' of the promotion that the seller can use to identify a promotion. This label is not displayed in end-user flows.  <br><br><b>Maximum length:</b> 90 */
		name?: string | null;

		/** This field is ignored in markdown promotions. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a> */
		priority?: string | null;

		/** Required for CODED_COUPON, MARKDOWN_SALE, and ORDER_DISCOUNT promotions, populate this field with a URL that points to an image to be used with the promotion. This image is displayed on the seller's <b>All Offers</b> page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size. */
		promotionImageUrl?: string | null;

		/** The current status of the promotion. When creating a new promotion, you must set this value to either <code>DRAFT</code> or <code>SCHEDULED</code>.  <br><br>Note that you must set this value to <code>SCHEDULED</code> when you update a <b>RUNNING</b> promotion. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a> */
		promotionStatus?: string | null;

		/** A list that defines the sets of selected items for the markdown promotion and the discount specified for promotion. */
		selectedInventoryDiscounts?: Array<SelectedInventoryDiscount>;

		/** The date and time the promotion starts in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller. */
		startDate?: string | null;
	}

	/** This type defines the fields used to describe an item price markdown promotion. */
	export interface ItemPriceMarkdownFormProperties {

		/** If set to <code>true</code>, free shipping is applied to the first shipping service specified for the item. The first domestic shipping option is set to "free shipping," regardless if the shipping <b>optionType</b> for that service is set to <code>FLAT_RATE</code>, <code>CALCULATED</code>, or <code>NOT_SPECIFIED</code> (freight). This flag essentially adds free shipping as a promotional bonus. <br><br><b>Default:</b> <code>false</code> */
		applyFreeShipping: FormControl<boolean | null | undefined>,

		/** If set to <code>true</code>, eBay will automatically add inventory items to the markdown promotion if they meet the <b>selectedInventoryDiscounts</b> criteria specified for the markdown promotion.  <br><br><b>Default:</b> <code>false</code> */
		autoSelectFutureInventory: FormControl<boolean | null | undefined>,

		/** If set to <code>true</code>, price increases (including removing the free shipping flag) are blocked and an error message is returned if a seller attempts to adjust the price of an item that's partaking in this markdown promotion. If set to <code>false</code>, an item is dropped from the markdown promotion if the seller adjusts the price.  <br><br><b>Default:</b> <code>false</code> */
		blockPriceIncreaseInItemRevision: FormControl<boolean | null | undefined>,

		/** This field is required if you are configuring an MARKDOWN_SALE promotion. <br><br>This is the seller-defined "tag line" for the offer, such as "Save on designer shoes." A tag line appears under the "offer-type text" that is generated for the promotion. The text is displayed on the offer tile that is shown on the seller's <b>All Offers</b> page and on the event page for the promotion.  <p class="tablenote"><b>Note:</b> Offer-type text is a teaser that's presented throughout the buyer's journey through the sales flow and is generated by eBay. This text is not editable by the seller&mdash;it's derived from the settings in the <b>discountRules</b> and <b>discountSpecification</b> fields&mdash;and can be, for example, "20% off".</p>  <br><b>Maximum length:</b> 50 */
		description: FormControl<string | null | undefined>,

		/** The date and time the promotion ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). The value supplied for <b>endDate</b> must be at least 24 hours after the value supplied for the <b>startDate</b> of the markdown promotion.<br><br>For display purposes, convert this time into the local time of the seller.  <br><br><b>Max value:</b><ul><li><code>14</code> days for the AT, CH, DE, ES, FR, IE, IT, and UK, marketplaces.</li>  <li><code>45</code> days for all other marketplaces.</li></ul> */
		endDate: FormControl<string | null | undefined>,

		/** The eBay marketplace ID of the site where the markdown promotion is hosted. Markdown promotions are supported on all eBay marketplaces. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId: FormControl<string | null | undefined>,

		/** The seller-defined name or 'title' of the promotion that the seller can use to identify a promotion. This label is not displayed in end-user flows.  <br><br><b>Maximum length:</b> 90 */
		name: FormControl<string | null | undefined>,

		/** This field is ignored in markdown promotions. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a> */
		priority: FormControl<string | null | undefined>,

		/** Required for CODED_COUPON, MARKDOWN_SALE, and ORDER_DISCOUNT promotions, populate this field with a URL that points to an image to be used with the promotion. This image is displayed on the seller's <b>All Offers</b> page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size. */
		promotionImageUrl: FormControl<string | null | undefined>,

		/** The current status of the promotion. When creating a new promotion, you must set this value to either <code>DRAFT</code> or <code>SCHEDULED</code>.  <br><br>Note that you must set this value to <code>SCHEDULED</code> when you update a <b>RUNNING</b> promotion. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a> */
		promotionStatus: FormControl<string | null | undefined>,

		/** The date and time the promotion starts in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller. */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreateItemPriceMarkdownFormGroup() {
		return new FormGroup<ItemPriceMarkdownFormProperties>({
			applyFreeShipping: new FormControl<boolean | null | undefined>(undefined),
			autoSelectFutureInventory: new FormControl<boolean | null | undefined>(undefined),
			blockPriceIncreaseInItemRevision: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			marketplaceId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<string | null | undefined>(undefined),
			promotionImageUrl: new FormControl<string | null | undefined>(undefined),
			promotionStatus: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the fields that describe the discounts applied to a set of inventory items and the order in which the selection rules are applied. */
	export interface SelectedInventoryDiscount {

		/** This container defines the promotional discount as either a monetary amount or a percentage of the sales price.  <p class="tablenote"><b>Important!:</b> You must populate one and only one of the fields in this container: <ul><li><b>amountOffItem</b></li> <li><b>amountOffOrder</b></li> <li><b>percentageOffItem</b></li> <li><b>percentageOffOrder</b></li></ul></p>  <p class="tablenote"><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/pm-specifying-discounts.html">Configuring discounts for threshold promotions</a> for information and examples on how to combine <b>discountBenefit</b> and <b>discountSpecification</b> values to create different types of promotions.</p> */
		discountBenefit?: DiscountBenefit;

		/** A unique, eBay-generated ID that you can use to identify the discount. This field is ignored in POST and PUT operations. */
		discountId?: string | null;

		/** This type defines either the selections rules or the list of listing IDs for the promotion. The "listing IDs" are are either the seller's item IDs or the eBay listing IDs. */
		inventoryCriterion?: InventoryCriterion;

		/**
		 * For markdown promotions, this field is reserved for future use. <!--This field specifies the precedence of this set of inventory criteria, which is taken into account if an item is selected for multiple discounts by different sets of criteria. The criteria with the highest priority (lowest ruleOrder value) takes precedence over criteria with a lower precedence.-->
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ruleOrder?: number | null;
	}

	/** This type defines the fields that describe the discounts applied to a set of inventory items and the order in which the selection rules are applied. */
	export interface SelectedInventoryDiscountFormProperties {

		/** A unique, eBay-generated ID that you can use to identify the discount. This field is ignored in POST and PUT operations. */
		discountId: FormControl<string | null | undefined>,

		/**
		 * For markdown promotions, this field is reserved for future use. <!--This field specifies the precedence of this set of inventory criteria, which is taken into account if an item is selected for multiple discounts by different sets of criteria. The criteria with the highest priority (lowest ruleOrder value) takes precedence over criteria with a lower precedence.-->
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ruleOrder: FormControl<number | null | undefined>,
	}
	export function CreateSelectedInventoryDiscountFormGroup() {
		return new FormGroup<SelectedInventoryDiscountFormProperties>({
			discountId: new FormControl<string | null | undefined>(undefined),
			ruleOrder: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type defines the fields that describe a threshold promotion and includes the promotional discount, the items included in the promotion, and the rules that specify when the promotion is applied. */
	export interface ItemPromotion {

		/** This flag is relevant in only when <b>promotionType</b> is set to <code>VOLUME_DISCOUNT</code>. For details on volume pricing promotions, see <a href="/api-docs/sell/static/marketing/pm-volume-discounts.html">Configuring volume pricing discounts</a>.  <br><br>If set to <code>true</code>, the discount is applied only when the buyer purchases multiple quantities of a single item in the promotion. Otherwise, the promotional discount applies to multiple quantities of any items in the promotion. Different variations of a multi-variation item are considered to be the same item. Note that this flag is not relevant if the <b>inventoryCriterion</b> container identifies a single listing ID for the promotion. */
		applyDiscountToSingleItemOnly?: boolean | null;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		budget?: Amount;

		/** This container defines a coded coupon promotion. It is required if the promotion type is CODED_COUPON. */
		couponConfiguration?: CouponConfiguration;

		/** This is the seller-defined "tag line" for the offer, such as "Save on designer shoes."  <br><br>The tag line appears under the "offer-type text" that is generated for the promotion and is displayed on the offer tile that's shown on the seller's <b>All Offers</b> page, and on the event page for the promotion.  <p class="tablenote"><b>Note:</b> Offer-type text is a teaser that's presented throughout the buyer's journey through the sales flow and is generated by eBay. The offer-type text is not editable by the seller&mdash;it's derived from the settings in the <b>discountRules</b> and <b>discountSpecification</b> fields&mdash;and can be, for example, "Extra 20% off when you buy 3+".</p>  <br><b>Maximum length:</b> 50 <br><br><i>Required if</i> you are configuring CODED_COUPON, ORDER_DISCOUNT, or MARKDOWN_SALE promotions (and not valid for VOLUME_DISCOUNT promotions). */
		description?: string | null;

		/** This container defines a promotion using the following two required fields: <ul><li><b>discountBenefit</b> &ndash; Defines a discount as either a monetary amount or a percentage that is subtracted from the sales price of an item, a set of items, or an order.</li>  <li><b>discountSpecification</b> &ndash; Defines a set of rules that determine when the promotion is applied.</li></ul> <p class="tablenote"><b>Note:</b> For volume pricing, you must specify at least two and not more than four <b>discountBenefit</b>/<b>discountSpecification</b> pairs. In addition, you must define each set of rules with a <b>ruleOrder</b> value that corresponds with the order of volume discounts you present.</p>  <p><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/pm-specifying-discounts.html">Specifying item promotion discounts</a> for information and examples on how to combine <b>discountBenefit</b> and <b>discountSpecification</b> to create different types of promotions.</p> */
		discountRules?: Array<DiscountRule>;

		/** The date and time the promotion ends in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller. */
		endDate?: string | null;

		/** This type defines either the selections rules or the list of listing IDs for the promotion. The "listing IDs" are are either the seller's item IDs or the eBay listing IDs. */
		inventoryCriterion?: InventoryCriterion;

		/** The eBay marketplace ID of the site where the threshold promotion is hosted. Threshold promotions are currently supported on a limited number of eBay marketplaces.  <p><b>Valid values:</b></p>  <ul><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId?: string | null;

		/** The seller-defined name or "title" of the promotion that the seller can use to identify a promotion. This label is not displayed in end-user flows.  <br><br><b>Maximum length:</b> 90 */
		name?: string | null;

		/** Applicable for only <b>ORDER_DISCOUNT</b> promotions, this field indicates the precedence of the promotion, which is used to determine the position of a promotion on the seller's <b>All Offers</b> page. If an item is associated with multiple promotions, the promotion with the higher priority takes precedence. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a> */
		priority?: string | null;

		/** Required for CODED_COUPON, MARKDOWN_SALE, and ORDER_DISCOUNT promotions, and not valid for VOLUME_DISCOUNT promotions.  <br><br>Populate this field with a URL that points to an image to be used with the promotion. This image is displayed on the seller's <b>All Offers</b> page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size. */
		promotionImageUrl?: string | null;

		/** The current status of the promotion. When creating a new promotion, this value must be set to either <code>DRAFT</code> or <code>SCHEDULED</code>.  <br><br>Note that you must set this value to <code>SCHEDULED</code> when you update a <b>RUNNING</b> promotion. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a> */
		promotionStatus?: string | null;

		/** Use this field to specify the type of the promotion you are creating. <p>The supported types are:</p> <ul><li><code>CODED_COUPON</code> &ndash; A coupon code promotion set with <b>createItemPromotion</b>.</li> <li><code>MARKDOWN_SALE</code> &ndash; A markdown promotion set with <b>createItemPriceMarkdownPromotion</b>.</li> <li><code>ORDER_DISCOUNT</code> &ndash; A threshold promotion set with <b>createItemPromotion</b>.</li> <li><code>VOLUME_DISCOUNT</code> &ndash; A volume pricing promotion set with <b>createItemPromotion</b>.</li></ul> <p>See the <a href="/api-docs/sell/static/marketing/promotions-manager.html" target="_blank">Promotions Manager</a> documentation for details.</p> <p><i>Required if </i> you are creating a volume pricing promotion (<code>VOLUME_DISCOUNT</code>).</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum'>eBay API documentation</a> */
		promotionType?: string | null;

		/** The date and time the promotion starts in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller. */
		startDate?: string | null;
	}

	/** This type defines the fields that describe a threshold promotion and includes the promotional discount, the items included in the promotion, and the rules that specify when the promotion is applied. */
	export interface ItemPromotionFormProperties {

		/** This flag is relevant in only when <b>promotionType</b> is set to <code>VOLUME_DISCOUNT</code>. For details on volume pricing promotions, see <a href="/api-docs/sell/static/marketing/pm-volume-discounts.html">Configuring volume pricing discounts</a>.  <br><br>If set to <code>true</code>, the discount is applied only when the buyer purchases multiple quantities of a single item in the promotion. Otherwise, the promotional discount applies to multiple quantities of any items in the promotion. Different variations of a multi-variation item are considered to be the same item. Note that this flag is not relevant if the <b>inventoryCriterion</b> container identifies a single listing ID for the promotion. */
		applyDiscountToSingleItemOnly: FormControl<boolean | null | undefined>,

		/** This is the seller-defined "tag line" for the offer, such as "Save on designer shoes."  <br><br>The tag line appears under the "offer-type text" that is generated for the promotion and is displayed on the offer tile that's shown on the seller's <b>All Offers</b> page, and on the event page for the promotion.  <p class="tablenote"><b>Note:</b> Offer-type text is a teaser that's presented throughout the buyer's journey through the sales flow and is generated by eBay. The offer-type text is not editable by the seller&mdash;it's derived from the settings in the <b>discountRules</b> and <b>discountSpecification</b> fields&mdash;and can be, for example, "Extra 20% off when you buy 3+".</p>  <br><b>Maximum length:</b> 50 <br><br><i>Required if</i> you are configuring CODED_COUPON, ORDER_DISCOUNT, or MARKDOWN_SALE promotions (and not valid for VOLUME_DISCOUNT promotions). */
		description: FormControl<string | null | undefined>,

		/** The date and time the promotion ends in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller. */
		endDate: FormControl<string | null | undefined>,

		/** The eBay marketplace ID of the site where the threshold promotion is hosted. Threshold promotions are currently supported on a limited number of eBay marketplaces.  <p><b>Valid values:</b></p>  <ul><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId: FormControl<string | null | undefined>,

		/** The seller-defined name or "title" of the promotion that the seller can use to identify a promotion. This label is not displayed in end-user flows.  <br><br><b>Maximum length:</b> 90 */
		name: FormControl<string | null | undefined>,

		/** Applicable for only <b>ORDER_DISCOUNT</b> promotions, this field indicates the precedence of the promotion, which is used to determine the position of a promotion on the seller's <b>All Offers</b> page. If an item is associated with multiple promotions, the promotion with the higher priority takes precedence. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a> */
		priority: FormControl<string | null | undefined>,

		/** Required for CODED_COUPON, MARKDOWN_SALE, and ORDER_DISCOUNT promotions, and not valid for VOLUME_DISCOUNT promotions.  <br><br>Populate this field with a URL that points to an image to be used with the promotion. This image is displayed on the seller's <b>All Offers</b> page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size. */
		promotionImageUrl: FormControl<string | null | undefined>,

		/** The current status of the promotion. When creating a new promotion, this value must be set to either <code>DRAFT</code> or <code>SCHEDULED</code>.  <br><br>Note that you must set this value to <code>SCHEDULED</code> when you update a <b>RUNNING</b> promotion. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a> */
		promotionStatus: FormControl<string | null | undefined>,

		/** Use this field to specify the type of the promotion you are creating. <p>The supported types are:</p> <ul><li><code>CODED_COUPON</code> &ndash; A coupon code promotion set with <b>createItemPromotion</b>.</li> <li><code>MARKDOWN_SALE</code> &ndash; A markdown promotion set with <b>createItemPriceMarkdownPromotion</b>.</li> <li><code>ORDER_DISCOUNT</code> &ndash; A threshold promotion set with <b>createItemPromotion</b>.</li> <li><code>VOLUME_DISCOUNT</code> &ndash; A volume pricing promotion set with <b>createItemPromotion</b>.</li></ul> <p>See the <a href="/api-docs/sell/static/marketing/promotions-manager.html" target="_blank">Promotions Manager</a> documentation for details.</p> <p><i>Required if </i> you are creating a volume pricing promotion (<code>VOLUME_DISCOUNT</code>).</p> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum'>eBay API documentation</a> */
		promotionType: FormControl<string | null | undefined>,

		/** The date and time the promotion starts in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller. */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreateItemPromotionFormGroup() {
		return new FormGroup<ItemPromotionFormProperties>({
			applyDiscountToSingleItemOnly: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			marketplaceId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<string | null | undefined>(undefined),
			promotionImageUrl: new FormControl<string | null | undefined>(undefined),
			promotionStatus: new FormControl<string | null | undefined>(undefined),
			promotionType: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type defines the fields returned for an item (threshold) promotion. */
	export interface ItemPromotionResponse {

		/** If set to <code>true</code>, the discount is applied only when the buyer purchases multiple quantities of a single item in the promotion. Otherwise, the promotional discount applies to multiple quantities of any items in the promotion. Different variations of a multi-variation item are considered to be the same item. Note that this flag is not relevant if the <b>inventoryCriterion</b> container identifies a single listing ID for the promotion. */
		applyDiscountToSingleItemOnly?: boolean | null;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		budget?: Amount;

		/** This container defines a coded coupon promotion. It is required if the promotion type is CODED_COUPON. */
		couponConfiguration?: CouponConfiguration;

		/** Required for CODED_COUPON promotions, this is the seller-defined "tag line" for the offer, such as "Save on designer shoes." The tag line appears under the "offer-type text" that is generated for the promotion and is displayed under the offer tile that is shown on the seller's <b>All Offers</b> page and on the event page for the promotion.  This tag line is not used with volume pricing promotions. <p class="tablenote"><b>Note:</b> Offer-type text is a teaser that's presented throughout the buyer's journey through the sales flow and is generated by eBay. This text is not editable by the seller&mdash;it's derived from the settings in the <b>discountRules</b> and <b>discountSpecification</b> fields&mdash;and can be, for example, "Extra 20% off when you buy 3+".</p>  <br><b>Maximum length:</b> 50 */
		description?: string | null;

		/** A list containing the promotion benefits (<b>discountRule</b>) and the rules that define when the benefit is applied (<b>discountSpecification</b>). */
		discountRules?: Array<DiscountRule>;

		/** The date and time the promotion ends in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller. */
		endDate?: string | null;

		/** This type defines either the selections rules or the list of listing IDs for the promotion. The "listing IDs" are are either the seller's item IDs or the eBay listing IDs. */
		inventoryCriterion?: InventoryCriterion;

		/** The eBay marketplace ID of the site where the threshold promotion is hosted. Threshold promotions are currently supported on a limited number of eBay marketplaces.  <p><b>Valid values:</b></p>  <ul class="compact"><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId?: string | null;

		/** The seller-defined name or "title" of the promotion that the seller can use to identify a promotion. This label is not displayed in end-user flows.  <br><br><b>Maximum length:</b> 90 */
		name?: string | null;

		/** Applicable for only <b>ORDER_DISCOUNT</b> promotions, this field indicates the precedence of the promotion, which eBay uses to determine the position of a promotion on the seller's <b>All Offers</b> page. If an item is associated with multiple promotions, the promotion with the higher priority takes precedence. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a> */
		priority?: string | null;

		/** A unique eBay-assigned ID for the promotion that's generated when the promotion is created. */
		promotionId?: string | null;

		/** Required for CODED_COUPON, MARKDOWN_SALE, and ORDER_DISCOUNT promotions, and not applicable for <b>VOLUME_DISCOUNT</b> promotions, this field is a URL that points to an image for the promotion. This image is displayed on the seller's <b>All Offers</b> page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size. */
		promotionImageUrl?: string | null;

		/** The current status of the promotion. When creating a new promotion, this value must be set to either <code>DRAFT</code> or <code>SCHEDULED</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a> */
		promotionStatus?: string | null;

		/** Indicates the type of the promotion, either <code>CODED_COUPON</code>, <code>MARKDOWN_SALE</code>, <code>ORDER_DISCOUNT</code>, or <code>VOLUME_DISCOUNT</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum'>eBay API documentation</a> */
		promotionType?: string | null;

		/** The date and time the promotion starts in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller. */
		startDate?: string | null;
	}

	/** This complex type defines the fields returned for an item (threshold) promotion. */
	export interface ItemPromotionResponseFormProperties {

		/** If set to <code>true</code>, the discount is applied only when the buyer purchases multiple quantities of a single item in the promotion. Otherwise, the promotional discount applies to multiple quantities of any items in the promotion. Different variations of a multi-variation item are considered to be the same item. Note that this flag is not relevant if the <b>inventoryCriterion</b> container identifies a single listing ID for the promotion. */
		applyDiscountToSingleItemOnly: FormControl<boolean | null | undefined>,

		/** Required for CODED_COUPON promotions, this is the seller-defined "tag line" for the offer, such as "Save on designer shoes." The tag line appears under the "offer-type text" that is generated for the promotion and is displayed under the offer tile that is shown on the seller's <b>All Offers</b> page and on the event page for the promotion.  This tag line is not used with volume pricing promotions. <p class="tablenote"><b>Note:</b> Offer-type text is a teaser that's presented throughout the buyer's journey through the sales flow and is generated by eBay. This text is not editable by the seller&mdash;it's derived from the settings in the <b>discountRules</b> and <b>discountSpecification</b> fields&mdash;and can be, for example, "Extra 20% off when you buy 3+".</p>  <br><b>Maximum length:</b> 50 */
		description: FormControl<string | null | undefined>,

		/** The date and time the promotion ends in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller. */
		endDate: FormControl<string | null | undefined>,

		/** The eBay marketplace ID of the site where the threshold promotion is hosted. Threshold promotions are currently supported on a limited number of eBay marketplaces.  <p><b>Valid values:</b></p>  <ul class="compact"><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId: FormControl<string | null | undefined>,

		/** The seller-defined name or "title" of the promotion that the seller can use to identify a promotion. This label is not displayed in end-user flows.  <br><br><b>Maximum length:</b> 90 */
		name: FormControl<string | null | undefined>,

		/** Applicable for only <b>ORDER_DISCOUNT</b> promotions, this field indicates the precedence of the promotion, which eBay uses to determine the position of a promotion on the seller's <b>All Offers</b> page. If an item is associated with multiple promotions, the promotion with the higher priority takes precedence. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a> */
		priority: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID for the promotion that's generated when the promotion is created. */
		promotionId: FormControl<string | null | undefined>,

		/** Required for CODED_COUPON, MARKDOWN_SALE, and ORDER_DISCOUNT promotions, and not applicable for <b>VOLUME_DISCOUNT</b> promotions, this field is a URL that points to an image for the promotion. This image is displayed on the seller's <b>All Offers</b> page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size. */
		promotionImageUrl: FormControl<string | null | undefined>,

		/** The current status of the promotion. When creating a new promotion, this value must be set to either <code>DRAFT</code> or <code>SCHEDULED</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a> */
		promotionStatus: FormControl<string | null | undefined>,

		/** Indicates the type of the promotion, either <code>CODED_COUPON</code>, <code>MARKDOWN_SALE</code>, <code>ORDER_DISCOUNT</code>, or <code>VOLUME_DISCOUNT</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum'>eBay API documentation</a> */
		promotionType: FormControl<string | null | undefined>,

		/** The date and time the promotion starts in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller. */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreateItemPromotionResponseFormGroup() {
		return new FormGroup<ItemPromotionResponseFormProperties>({
			applyDiscountToSingleItemOnly: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			marketplaceId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<string | null | undefined>(undefined),
			promotionId: new FormControl<string | null | undefined>(undefined),
			promotionImageUrl: new FormControl<string | null | undefined>(undefined),
			promotionStatus: new FormControl<string | null | undefined>(undefined),
			promotionType: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the fields for a paginated result set of promotions. The response consists of 0 or more sequenced pages that are returned from the complete <i>result set</i>, where each page consists of 0 or more items. */
	export interface ItemsPagedCollection {

		/** The URI of the current page of results from the result set. */
		href?: string | null;

		/**
		 * The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** An array of the listings associated with a promotion. */
		listings?: Array<ListingDetail>;

		/** The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048 */
		next?: string | null;

		/**
		 * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. <br><br><b>Max length</b>: 2048 */
		prev?: string | null;

		/**
		 * The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;

		/** A list of warnings that were generated by the request. Warning do not stop processing, but should be checked to ensure that the response contains the correct information. */
		warnings?: Array<Error>;
	}

	/** This type defines the fields for a paginated result set of promotions. The response consists of 0 or more sequenced pages that are returned from the complete <i>result set</i>, where each page consists of 0 or more items. */
	export interface ItemsPagedCollectionFormProperties {

		/** The URI of the current page of results from the result set. */
		href: FormControl<string | null | undefined>,

		/**
		 * The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048 */
		next: FormControl<string | null | undefined>,

		/**
		 * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. <br><br><b>Max length</b>: 2048 */
		prev: FormControl<string | null | undefined>,

		/**
		 * The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateItemsPagedCollectionFormGroup() {
		return new FormGroup<ItemsPagedCollectionFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type defines the fields that describe a listing that is in a promotion. */
	export interface ListingDetail {

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		currentPrice?: Amount;

		/** If set to <code>true</code>, the seller pays for the shipping (or that the item is marked for local pickup only) In this case, the listing does not have an associated shipping cost for the first listed domestic-shipping option (even if the first domestic-shipping option specifies a flat-rate or calculated shipping option). If <code>false</code>, the buyer is required to pay for a flat-rate or calculated cost shipping service. */
		freeShipping?: boolean | null;

		/** The seller's inventory reference ID for a listing. Also known as the "SKU" or "custom label," an inventory reference ID is either the ID of the listing or, if the listing has variations (such as a shirt that's available in multiple sizes and colors), the ID of the parent listing. */
		inventoryReferenceId?: string | null;

		/** Indicates the type of the <b>inventoryReferenceId</b>, which can be either a single-SKU or a multi-SKU listing (<code>INVENTORY_ITEM</code> and <code>INVENTORY_ITEM_GROUP</code>, respectively).  <br><br><b>Note:</b> This value is not currently returned in the response. */
		inventoryReferenceType?: string | null;

		/** The ID of the category that listing belongs to. The ID is a numeric and unique identifier for the category that is assigned by eBay. */
		listingCategoryId?: string | null;

		/** An eBay-assigned value that indicates condition of the associated item. For more information, see <a href="/api-docs/sell/static/metadata/condition-id-values.html">Item condition ID and name values</a>. */
		listingCondition?: string | null;

		/** The ID of the condition associated with the item. For more information, see <a href="/api-docs/sell/static/metadata/condition-id-values.html">Item condition ID and name values</a>.<br /><br /><span class="tablenote"><b>Note: </b> This value is not currently returned in the response.</span> */
		listingConditionId?: string | null;

		/** A unique eBay-assigned ID that is generated when the item is listed. */
		listingId?: string | null;

		/** A list of the status values assigned to the item and the date that each new status was assigned. */
		listingPromotionStatuses?: Array<ItemMarkdownStatus>;

		/**
		 * The number of items being sold in the listing.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity?: number | null;

		/** Store CategoryId (if any) that to which the listing belongs. This field is blank if there is no seller Store category ID. */
		storeCategoryId?: string | null;

		/** The seller-defined title of the listing that a seller can use to identify the item.  This label is not displayed in end-user flows. */
		title?: string | null;
	}

	/** This type defines the fields that describe a listing that is in a promotion. */
	export interface ListingDetailFormProperties {

		/** If set to <code>true</code>, the seller pays for the shipping (or that the item is marked for local pickup only) In this case, the listing does not have an associated shipping cost for the first listed domestic-shipping option (even if the first domestic-shipping option specifies a flat-rate or calculated shipping option). If <code>false</code>, the buyer is required to pay for a flat-rate or calculated cost shipping service. */
		freeShipping: FormControl<boolean | null | undefined>,

		/** The seller's inventory reference ID for a listing. Also known as the "SKU" or "custom label," an inventory reference ID is either the ID of the listing or, if the listing has variations (such as a shirt that's available in multiple sizes and colors), the ID of the parent listing. */
		inventoryReferenceId: FormControl<string | null | undefined>,

		/** Indicates the type of the <b>inventoryReferenceId</b>, which can be either a single-SKU or a multi-SKU listing (<code>INVENTORY_ITEM</code> and <code>INVENTORY_ITEM_GROUP</code>, respectively).  <br><br><b>Note:</b> This value is not currently returned in the response. */
		inventoryReferenceType: FormControl<string | null | undefined>,

		/** The ID of the category that listing belongs to. The ID is a numeric and unique identifier for the category that is assigned by eBay. */
		listingCategoryId: FormControl<string | null | undefined>,

		/** An eBay-assigned value that indicates condition of the associated item. For more information, see <a href="/api-docs/sell/static/metadata/condition-id-values.html">Item condition ID and name values</a>. */
		listingCondition: FormControl<string | null | undefined>,

		/** The ID of the condition associated with the item. For more information, see <a href="/api-docs/sell/static/metadata/condition-id-values.html">Item condition ID and name values</a>.<br /><br /><span class="tablenote"><b>Note: </b> This value is not currently returned in the response.</span> */
		listingConditionId: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID that is generated when the item is listed. */
		listingId: FormControl<string | null | undefined>,

		/**
		 * The number of items being sold in the listing.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** Store CategoryId (if any) that to which the listing belongs. This field is blank if there is no seller Store category ID. */
		storeCategoryId: FormControl<string | null | undefined>,

		/** The seller-defined title of the listing that a seller can use to identify the item.  This label is not displayed in end-user flows. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateListingDetailFormGroup() {
		return new FormGroup<ListingDetailFormProperties>({
			freeShipping: new FormControl<boolean | null | undefined>(undefined),
			inventoryReferenceId: new FormControl<string | null | undefined>(undefined),
			inventoryReferenceType: new FormControl<string | null | undefined>(undefined),
			listingCategoryId: new FormControl<string | null | undefined>(undefined),
			listingCondition: new FormControl<string | null | undefined>(undefined),
			listingConditionId: new FormControl<string | null | undefined>(undefined),
			listingId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			storeCategoryId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that contains the details for keywords that are associated with an ad group.<br /><br /><span class="tablenote"><b>Note:</b> This type only applies to the Cost Per Click (CPC) funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span> */
	export interface Keyword {

		/** This field identifies the ad group that the keyword is associated with. */
		adGroupId?: string | null;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		bid?: Amount;

		/** The unique identifier of a keyword. */
		keywordId?: string | null;

		/** The status of the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:KeywordStatusEnum'>eBay API documentation</a> */
		keywordStatus?: string | null;

		/** The text of the keyword. */
		keywordText?: string | null;

		/** A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a> */
		matchType?: string | null;
	}

	/** A type that contains the details for keywords that are associated with an ad group.<br /><br /><span class="tablenote"><b>Note:</b> This type only applies to the Cost Per Click (CPC) funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span> */
	export interface KeywordFormProperties {

		/** This field identifies the ad group that the keyword is associated with. */
		adGroupId: FormControl<string | null | undefined>,

		/** The unique identifier of a keyword. */
		keywordId: FormControl<string | null | undefined>,

		/** The status of the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:KeywordStatusEnum'>eBay API documentation</a> */
		keywordStatus: FormControl<string | null | undefined>,

		/** The text of the keyword. */
		keywordText: FormControl<string | null | undefined>,

		/** A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a> */
		matchType: FormControl<string | null | undefined>,
	}
	export function CreateKeywordFormGroup() {
		return new FormGroup<KeywordFormProperties>({
			adGroupId: new FormControl<string | null | undefined>(undefined),
			keywordId: new FormControl<string | null | undefined>(undefined),
			keywordStatus: new FormControl<string | null | undefined>(undefined),
			keywordText: new FormControl<string | null | undefined>(undefined),
			matchType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that defines the keywords of the paged collection. */
	export interface KeywordPagedCollectionResponse {

		/** The URI of the current page of results from the result set. */
		href?: string | null;

		/** This array contains all of the keywords that match the request criteria. Keywords will be sorted by adGroupId, regardless of whether you searched for keywords across the entire campaign, or if you searched for keywords within one or specific ad groups. */
		keywords?: Array<Keyword>;

		/**
		 * The number of keywords returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048 */
		next?: string | null;

		/**
		 * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results. <br><br><b>Max length</b>: 2048 */
		prev?: string | null;

		/**
		 * The total number of keywords retrieved in the result set.  <br><br>If no keywords are found, this field is returned with a value of <code>0</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}

	/** A type that defines the keywords of the paged collection. */
	export interface KeywordPagedCollectionResponseFormProperties {

		/** The URI of the current page of results from the result set. */
		href: FormControl<string | null | undefined>,

		/**
		 * The number of keywords returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048 */
		next: FormControl<string | null | undefined>,

		/**
		 * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results. <br><br><b>Max length</b>: 2048 */
		prev: FormControl<string | null | undefined>,

		/**
		 * The total number of keywords retrieved in the result set.  <br><br>If no keywords are found, this field is returned with a value of <code>0</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateKeywordPagedCollectionResponseFormGroup() {
		return new FormGroup<KeywordPagedCollectionResponseFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A type that defines the fields used by the <b>Keyword</b> method. */
	export interface KeywordRequest {

		/** The text of the keyword. Keywords are not case sensitive and compound words can be used without additional encoding (for example, tennis ball).<br /><br /><b>Maximum number of characters: </b>100 <br /><br /><b>Maximum number of words: </b>10 */
		keywordText?: string | null;

		/** A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a> */
		matchType?: string | null;
	}

	/** A type that defines the fields used by the <b>Keyword</b> method. */
	export interface KeywordRequestFormProperties {

		/** The text of the keyword. Keywords are not case sensitive and compound words can be used without additional encoding (for example, tennis ball).<br /><br /><b>Maximum number of characters: </b>100 <br /><br /><b>Maximum number of words: </b>10 */
		keywordText: FormControl<string | null | undefined>,

		/** A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a> */
		matchType: FormControl<string | null | undefined>,
	}
	export function CreateKeywordRequestFormGroup() {
		return new FormGroup<KeywordRequestFormProperties>({
			keywordText: new FormControl<string | null | undefined>(undefined),
			matchType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the name and data type of a metric. */
	export interface MetricMetadata {

		/** The data type of the returned metric value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:DataTypeEnum'>eBay API documentation</a> */
		dataType?: string | null;

		/** The name of the metric. */
		metricKey?: string | null;
	}

	/** This type defines the name and data type of a metric. */
	export interface MetricMetadataFormProperties {

		/** The data type of the returned metric value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:DataTypeEnum'>eBay API documentation</a> */
		dataType: FormControl<string | null | undefined>,

		/** The name of the metric. */
		metricKey: FormControl<string | null | undefined>,
	}
	export function CreateMetricMetadataFormGroup() {
		return new FormGroup<MetricMetadataFormProperties>({
			dataType: new FormControl<string | null | undefined>(undefined),
			metricKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that defines the fields for a negative keyword. */
	export interface NegativeKeyword {

		/** An ad group ID that is generated when an ad group is first created and associated with a campaign.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span> */
		adGroupId?: string | null;

		/** A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created. */
		campaignId?: string | null;

		/** A unique eBay-assigned ID for a negative keyword. This keyword ID will be generated for each successfully created negative keyword. */
		negativeKeywordId?: string | null;

		/** A field that defines the match type for the negative keyword.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Broad matching of negative keywords is not currently supported.</span><br /><b>Valid Values:</b><ul><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordMatchTypeEnum'>eBay API documentation</a> */
		negativeKeywordMatchType?: string | null;

		/** A field that defines the status of the negative keyword. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordStatusEnum'>eBay API documentation</a> */
		negativeKeywordStatus?: string | null;

		/** The text for the negative keyword. */
		negativeKeywordText?: string | null;
	}

	/** A type that defines the fields for a negative keyword. */
	export interface NegativeKeywordFormProperties {

		/** An ad group ID that is generated when an ad group is first created and associated with a campaign.<br /><br /><span class="tablenote"><b>Note:</b> You can call the  <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span> */
		adGroupId: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created. */
		campaignId: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID for a negative keyword. This keyword ID will be generated for each successfully created negative keyword. */
		negativeKeywordId: FormControl<string | null | undefined>,

		/** A field that defines the match type for the negative keyword.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Broad matching of negative keywords is not currently supported.</span><br /><b>Valid Values:</b><ul><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordMatchTypeEnum'>eBay API documentation</a> */
		negativeKeywordMatchType: FormControl<string | null | undefined>,

		/** A field that defines the status of the negative keyword. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordStatusEnum'>eBay API documentation</a> */
		negativeKeywordStatus: FormControl<string | null | undefined>,

		/** The text for the negative keyword. */
		negativeKeywordText: FormControl<string | null | undefined>,
	}
	export function CreateNegativeKeywordFormGroup() {
		return new FormGroup<NegativeKeywordFormProperties>({
			adGroupId: new FormControl<string | null | undefined>(undefined),
			campaignId: new FormControl<string | null | undefined>(undefined),
			negativeKeywordId: new FormControl<string | null | undefined>(undefined),
			negativeKeywordMatchType: new FormControl<string | null | undefined>(undefined),
			negativeKeywordStatus: new FormControl<string | null | undefined>(undefined),
			negativeKeywordText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that defines the negative keywords, returned in a paged collection. */
	export interface NegativeKeywordPagedCollectionResponse {

		/** The URI of the current page of results from the result set. */
		href?: string | null;

		/**
		 * The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** A list of negative keywords returned in the paginated collection. */
		negativeKeywords?: Array<NegativeKeyword>;

		/** The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set. */
		next?: string | null;

		/**
		 * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter.<br /><br /><b>Default:</b> <code>0</code><br /><br /><span class="tablenote"><b>Note: </b>The items in a paginated result set use a zero-based list, where the first item in the list has an offset of <code>0</code>.</span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results. */
		prev?: string | null;

		/**
		 * The total number of result sets in the paginated collection.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}

	/** A type that defines the negative keywords, returned in a paged collection. */
	export interface NegativeKeywordPagedCollectionResponseFormProperties {

		/** The URI of the current page of results from the result set. */
		href: FormControl<string | null | undefined>,

		/**
		 * The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set. */
		next: FormControl<string | null | undefined>,

		/**
		 * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter.<br /><br /><b>Default:</b> <code>0</code><br /><br /><span class="tablenote"><b>Note: </b>The items in a paginated result set use a zero-based list, where the first item in the list has an offset of <code>0</code>.</span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results. */
		prev: FormControl<string | null | undefined>,

		/**
		 * The total number of result sets in the paginated collection.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateNegativeKeywordPagedCollectionResponseFormGroup() {
		return new FormGroup<NegativeKeywordPagedCollectionResponseFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type defines the fields that describe a promotion. This includes all the information about a promotion except for the listings that are a part of the promotion. */
	export interface PromotionDetail {

		/** A unique code that buyers can use during checkout to receive a discount. The code must be unique across eBay. */
		couponCode?: string | null;

		/** This is the seller-defined "tag line" for the offer, such as "Save on designer shoes." Tag lines appear under the "offer-type text" that is generated for a promotion and displayed under the offer tile that is shown on the seller's <b>All Offers</b> page and on the promotion's event page.  <p class="tablenote"><b>Note:</b> Offer-type text is a teaser that's presented throughout the buyer's journey through the sales flow and is generated by eBay. This text is not editable by the seller&mdash;it's derived from the settings in the <b>discountRules</b> and <b>discountSpecification</b> fields&mdash;and can be, for example, "Extra 20% off when you buy 3+".</p>  <br><b>Maximum length:</b> 50 <br><br><i>Required if</i> you are configuring ORDER_DISCOUNT or MARKDOWN_SALE promotions (and not valid for VOLUME_DISCOUNT promotions). */
		description?: string | null;

		/** The date and time the promotion ends in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller. */
		endDate?: string | null;

		/** The eBay marketplace ID of the site where the promotion is hosted. Threshold promotions are supported on a select set of marketplaces while markdown promotions are supported on all eBay marketplaces. <p><b>Valid values for threshold promotions are as follows:</b></p>  <ul class="compact"><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId?: string | null;

		/** The seller-defined name or "title" of the promotion, such as "Buy 1 Get 1", that the seller can use to identify a promotion. This label is not displayed in end-user flows.  <br><br><b>Maximum length:</b> 90 */
		name?: string | null;

		/** Applicable for only <b>ORDER_DISCOUNT</b> promotions, this field indicates the precedence of the promotion, which is used to determine the position of a promotion on the seller's <b>All Offers</b> page. If an item is associated with multiple promotions, the promotion with the higher priority takes precedence. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a> */
		priority?: string | null;

		/** The URI of the promotion details. */
		promotionHref?: string | null;

		/** A unique eBay-assigned ID for the promotion that's generated when the promotion is created. */
		promotionId?: string | null;

		/** Required for CODED_COUPON, MARKDOWN_SALE, and ORDER_DISCOUNT promotions, and not applicable for <b>VOLUME_DISCOUNT</b> promotions, this field is a URL that points to an image for the promotion. This image is displayed on the seller's <b>All Offers</b> page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size. */
		promotionImageUrl?: string | null;

		/** The current status of the promotion. When creating a new promotion, you must set this value to either <code>DRAFT</code> or <code>SCHEDULED</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a> */
		promotionStatus?: string | null;

		/** Indicates type of the promotion, either <code>CODED_COUPON</code>, <code>MARKDOWN_SALE</code>, <code>ORDER_DISCOUNT</code>, or <code>VOLUME_DISCOUNT</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum'>eBay API documentation</a> */
		promotionType?: string | null;

		/** The date and time the promotion starts in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller. */
		startDate?: string | null;
	}

	/** This type defines the fields that describe a promotion. This includes all the information about a promotion except for the listings that are a part of the promotion. */
	export interface PromotionDetailFormProperties {

		/** A unique code that buyers can use during checkout to receive a discount. The code must be unique across eBay. */
		couponCode: FormControl<string | null | undefined>,

		/** This is the seller-defined "tag line" for the offer, such as "Save on designer shoes." Tag lines appear under the "offer-type text" that is generated for a promotion and displayed under the offer tile that is shown on the seller's <b>All Offers</b> page and on the promotion's event page.  <p class="tablenote"><b>Note:</b> Offer-type text is a teaser that's presented throughout the buyer's journey through the sales flow and is generated by eBay. This text is not editable by the seller&mdash;it's derived from the settings in the <b>discountRules</b> and <b>discountSpecification</b> fields&mdash;and can be, for example, "Extra 20% off when you buy 3+".</p>  <br><b>Maximum length:</b> 50 <br><br><i>Required if</i> you are configuring ORDER_DISCOUNT or MARKDOWN_SALE promotions (and not valid for VOLUME_DISCOUNT promotions). */
		description: FormControl<string | null | undefined>,

		/** The date and time the promotion ends in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller. */
		endDate: FormControl<string | null | undefined>,

		/** The eBay marketplace ID of the site where the promotion is hosted. Threshold promotions are supported on a select set of marketplaces while markdown promotions are supported on all eBay marketplaces. <p><b>Valid values for threshold promotions are as follows:</b></p>  <ul class="compact"><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId: FormControl<string | null | undefined>,

		/** The seller-defined name or "title" of the promotion, such as "Buy 1 Get 1", that the seller can use to identify a promotion. This label is not displayed in end-user flows.  <br><br><b>Maximum length:</b> 90 */
		name: FormControl<string | null | undefined>,

		/** Applicable for only <b>ORDER_DISCOUNT</b> promotions, this field indicates the precedence of the promotion, which is used to determine the position of a promotion on the seller's <b>All Offers</b> page. If an item is associated with multiple promotions, the promotion with the higher priority takes precedence. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionPriorityEnum'>eBay API documentation</a> */
		priority: FormControl<string | null | undefined>,

		/** The URI of the promotion details. */
		promotionHref: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID for the promotion that's generated when the promotion is created. */
		promotionId: FormControl<string | null | undefined>,

		/** Required for CODED_COUPON, MARKDOWN_SALE, and ORDER_DISCOUNT promotions, and not applicable for <b>VOLUME_DISCOUNT</b> promotions, this field is a URL that points to an image for the promotion. This image is displayed on the seller's <b>All Offers</b> page. The URL must point to either JPEG or PNG image and it must be a minimum of 500x500 pixels in dimension and cannot exceed 12Mb in size. */
		promotionImageUrl: FormControl<string | null | undefined>,

		/** The current status of the promotion. When creating a new promotion, you must set this value to either <code>DRAFT</code> or <code>SCHEDULED</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionStatusEnum'>eBay API documentation</a> */
		promotionStatus: FormControl<string | null | undefined>,

		/** Indicates type of the promotion, either <code>CODED_COUPON</code>, <code>MARKDOWN_SALE</code>, <code>ORDER_DISCOUNT</code>, or <code>VOLUME_DISCOUNT</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum'>eBay API documentation</a> */
		promotionType: FormControl<string | null | undefined>,

		/** The date and time the promotion starts in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). For display purposes, convert this time into the local time of the seller. */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreatePromotionDetailFormGroup() {
		return new FormGroup<PromotionDetailFormProperties>({
			couponCode: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			marketplaceId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<string | null | undefined>(undefined),
			promotionHref: new FormControl<string | null | undefined>(undefined),
			promotionId: new FormControl<string | null | undefined>(undefined),
			promotionImageUrl: new FormControl<string | null | undefined>(undefined),
			promotionStatus: new FormControl<string | null | undefined>(undefined),
			promotionType: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the fields in a promotion-level report. */
	export interface PromotionReportDetail {

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		averageItemDiscount?: Amount;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		averageItemRevenue?: Amount;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		averageOrderDiscount?: Amount;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		averageOrderRevenue?: Amount;

		/** The <i>average order size</i> is the average number of items that each order contained in a promotion. This value is calculated as follows:  <br><br><b>itemsSoldQuantity</b> / <b>numberOfOrdersSold</b> = <b>averageOrderSize</b> */
		averageOrderSize?: string | null;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		baseSale?: Amount;

		/**
		 * This is the quantity of items purchased in a threshold promotion where the threshold <i>has been met</i> and the discount was applied. <br><br>For example, suppose you're running a "Buy 1, get 1 at 50%" promotion on $5 socks. One buyer purchases two pairs of socks, so they pay $7.50 for both pairs (rather than the full price of $10). Your number of items sold (<b>itemsSoldQuantity</b>) would be 2 and you number of orders sold (<b>numberOfOrdersSold</b>) would be 1.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemsSoldQuantity?: number | null;

		/**
		 * This is the number of orders sold in a threshold promotion where the threshold <i>has been met</i> and the discount was applied. <br><br>For example, suppose you're running a "Buy 1, get 1 at 50%" promotion on $5 socks. One buyer purchases two pairs of socks, so they pay $7.50 for both pairs (rather than the full price of $10). Your <b>numberOfOrdersSold</b> would be 1 and your <b>itemsSoldQuantity</b> would be 2.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfOrdersSold?: number | null;

		/** The <i>percentage sales lift</i> is the total dollar amount gained due to promotions. This value is calculated as follows:  <br><br> <b>promotionSale</b> / <b>totalSale</b> =  <b>percentageSalesLift</b> */
		percentageSalesLift?: string | null;

		/** The URI of the promotion report. */
		promotionHref?: string | null;

		/** A unique eBay-assigned ID for the promotion that's generated when the promotion is created. */
		promotionId?: string | null;

		/** The unique eBay-assigned ID of the promotion report that is generated when the report is created. */
		promotionReportId?: string | null;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		promotionSale?: Amount;

		/** Indicates the type of the promotion, either <code>CODED_COUPON</code>, <code>MARKDOWN_SALE</code>, <code>ORDER_DISCOUNT</code>, or <code>VOLUME_DISCOUNT</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum'>eBay API documentation</a> */
		promotionType?: string | null;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		totalDiscount?: Amount;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		totalSale?: Amount;
	}

	/** This type defines the fields in a promotion-level report. */
	export interface PromotionReportDetailFormProperties {

		/** The <i>average order size</i> is the average number of items that each order contained in a promotion. This value is calculated as follows:  <br><br><b>itemsSoldQuantity</b> / <b>numberOfOrdersSold</b> = <b>averageOrderSize</b> */
		averageOrderSize: FormControl<string | null | undefined>,

		/**
		 * This is the quantity of items purchased in a threshold promotion where the threshold <i>has been met</i> and the discount was applied. <br><br>For example, suppose you're running a "Buy 1, get 1 at 50%" promotion on $5 socks. One buyer purchases two pairs of socks, so they pay $7.50 for both pairs (rather than the full price of $10). Your number of items sold (<b>itemsSoldQuantity</b>) would be 2 and you number of orders sold (<b>numberOfOrdersSold</b>) would be 1.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemsSoldQuantity: FormControl<number | null | undefined>,

		/**
		 * This is the number of orders sold in a threshold promotion where the threshold <i>has been met</i> and the discount was applied. <br><br>For example, suppose you're running a "Buy 1, get 1 at 50%" promotion on $5 socks. One buyer purchases two pairs of socks, so they pay $7.50 for both pairs (rather than the full price of $10). Your <b>numberOfOrdersSold</b> would be 1 and your <b>itemsSoldQuantity</b> would be 2.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfOrdersSold: FormControl<number | null | undefined>,

		/** The <i>percentage sales lift</i> is the total dollar amount gained due to promotions. This value is calculated as follows:  <br><br> <b>promotionSale</b> / <b>totalSale</b> =  <b>percentageSalesLift</b> */
		percentageSalesLift: FormControl<string | null | undefined>,

		/** The URI of the promotion report. */
		promotionHref: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID for the promotion that's generated when the promotion is created. */
		promotionId: FormControl<string | null | undefined>,

		/** The unique eBay-assigned ID of the promotion report that is generated when the report is created. */
		promotionReportId: FormControl<string | null | undefined>,

		/** Indicates the type of the promotion, either <code>CODED_COUPON</code>, <code>MARKDOWN_SALE</code>, <code>ORDER_DISCOUNT</code>, or <code>VOLUME_DISCOUNT</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:PromotionTypeEnum'>eBay API documentation</a> */
		promotionType: FormControl<string | null | undefined>,
	}
	export function CreatePromotionReportDetailFormGroup() {
		return new FormGroup<PromotionReportDetailFormProperties>({
			averageOrderSize: new FormControl<string | null | undefined>(undefined),
			itemsSoldQuantity: new FormControl<number | null | undefined>(undefined),
			numberOfOrdersSold: new FormControl<number | null | undefined>(undefined),
			percentageSalesLift: new FormControl<string | null | undefined>(undefined),
			promotionHref: new FormControl<string | null | undefined>(undefined),
			promotionId: new FormControl<string | null | undefined>(undefined),
			promotionReportId: new FormControl<string | null | undefined>(undefined),
			promotionType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the fields in a paginated result set of seller promotions. The response consists of 0 or more sequenced pages that are returned from the complete <i>result set</i>, where each page consists of 0 or more items. */
	export interface PromotionsPagedCollection {

		/** The URI of the current page of results from the result set. */
		href?: string | null;

		/**
		 * The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048 */
		next?: string | null;

		/**
		 * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. <br><br><b>Max length</b>: 2048 */
		prev?: string | null;

		/** A list containing the details of each returned promotion. This includes all the information about the promotions except for the listings that are part of the promotions. */
		promotions?: Array<PromotionDetail>;

		/**
		 * The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}

	/** This type defines the fields in a paginated result set of seller promotions. The response consists of 0 or more sequenced pages that are returned from the complete <i>result set</i>, where each page consists of 0 or more items. */
	export interface PromotionsPagedCollectionFormProperties {

		/** The URI of the current page of results from the result set. */
		href: FormControl<string | null | undefined>,

		/**
		 * The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048 */
		next: FormControl<string | null | undefined>,

		/**
		 * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. <br><br><b>Max length</b>: 2048 */
		prev: FormControl<string | null | undefined>,

		/**
		 * The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePromotionsPagedCollectionFormGroup() {
		return new FormGroup<PromotionsPagedCollectionFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type defines the fields in a paginated result set of promotion-level reports. The response consists of 0 or more sequenced pages that are returned from the complete <i>result set</i>, where each page consists of 0 or more items. */
	export interface PromotionsReportPagedCollection {

		/** The URI of the current page of results from the result set. */
		href?: string | null;

		/**
		 * The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048 */
		next?: string | null;

		/**
		 * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. <br><br><b>Max length</b>: 2048 */
		prev?: string | null;

		/** A list of <b>promotionReports</b> contained in the paginated result set. */
		promotionReports?: Array<PromotionReportDetail>;

		/**
		 * The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}

	/** This type defines the fields in a paginated result set of promotion-level reports. The response consists of 0 or more sequenced pages that are returned from the complete <i>result set</i>, where each page consists of 0 or more items. */
	export interface PromotionsReportPagedCollectionFormProperties {

		/** The URI of the current page of results from the result set. */
		href: FormControl<string | null | undefined>,

		/**
		 * The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048 */
		next: FormControl<string | null | undefined>,

		/**
		 * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p class="tablenote"><strong>Note: </strong>The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. <br><br><b>Max length</b>: 2048 */
		prev: FormControl<string | null | undefined>,

		/**
		 * The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePromotionsReportPagedCollectionFormGroup() {
		return new FormGroup<PromotionsReportPagedCollectionFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A type that defines the data for a payment amount, such as the sale price. */
	export interface ProposedBid {

		/** The base currency applied to the <b>value</b> field to establish a monetary amount.  <br><br>The currency is represented as a 3-letter <a href="https://www.iso.org/iso-4217-currency-codes.html " title="https://www.iso.org " target="_blank">ISO 4217</a> currency code. For example, the code for the Canadian Dollar is <code>CAD</code>.  <br><br><b>Default:</b> The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:CurrencyCodeEnum'>eBay API documentation</a> */
		currency?: string | null;

		/** The end of the range specified for the bid. */
		rangeEnd?: string | null;

		/** The start of the range specified for the bid. */
		rangeStart?: string | null;

		/** The value of the proposed bid. */
		value?: string | null;
	}

	/** A type that defines the data for a payment amount, such as the sale price. */
	export interface ProposedBidFormProperties {

		/** The base currency applied to the <b>value</b> field to establish a monetary amount.  <br><br>The currency is represented as a 3-letter <a href="https://www.iso.org/iso-4217-currency-codes.html " title="https://www.iso.org " target="_blank">ISO 4217</a> currency code. For example, the code for the Canadian Dollar is <code>CAD</code>.  <br><br><b>Default:</b> The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:CurrencyCodeEnum'>eBay API documentation</a> */
		currency: FormControl<string | null | undefined>,

		/** The end of the range specified for the bid. */
		rangeEnd: FormControl<string | null | undefined>,

		/** The start of the range specified for the bid. */
		rangeStart: FormControl<string | null | undefined>,

		/** The value of the proposed bid. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateProposedBidFormGroup() {
		return new FormGroup<ProposedBidFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined),
			rangeEnd: new FormControl<string | null | undefined>(undefined),
			rangeStart: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the fields included in the report. */
	export interface ReportMetadata {

		/** A list containing the metadata for the dimension used in the report. */
		dimensionMetadata?: Array<DimensionMetadata>;

		/**
		 * The maximum number of dimensions that can be requested for the specified report type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxNumberOfDimensionsToRequest?: number | null;

		/**
		 * The maximum number of metrics that can be requested for the specified report type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxNumberOfMetricsToRequest?: number | null;

		/** A list containing the metadata for the metrics in the report. */
		metricMetadata?: Array<MetricMetadata>;

		/** The <b>report_type</b>, as specified in the request to create the report task.<br/><br/><span class="tablenote"><b>Note:</b> INVENTORY_PERFORMANCE_REPORT is not currently available; availability date is pending.</span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportTypeEnum'>eBay API documentation</a> */
		reportType?: string | null;
	}

	/** This type defines the fields included in the report. */
	export interface ReportMetadataFormProperties {

		/**
		 * The maximum number of dimensions that can be requested for the specified report type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxNumberOfDimensionsToRequest: FormControl<number | null | undefined>,

		/**
		 * The maximum number of metrics that can be requested for the specified report type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxNumberOfMetricsToRequest: FormControl<number | null | undefined>,

		/** The <b>report_type</b>, as specified in the request to create the report task.<br/><br/><span class="tablenote"><b>Note:</b> INVENTORY_PERFORMANCE_REPORT is not currently available; availability date is pending.</span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportTypeEnum'>eBay API documentation</a> */
		reportType: FormControl<string | null | undefined>,
	}
	export function CreateReportMetadataFormGroup() {
		return new FormGroup<ReportMetadataFormProperties>({
			maxNumberOfDimensionsToRequest: new FormControl<number | null | undefined>(undefined),
			maxNumberOfMetricsToRequest: new FormControl<number | null | undefined>(undefined),
			reportType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the metadata used by the all report types. */
	export interface ReportMetadatas {

		/** A list of the metadata for the associated report type. */
		reportMetadata?: Array<ReportMetadata>;
	}

	/** This type defines the metadata used by the all report types. */
	export interface ReportMetadatasFormProperties {
	}
	export function CreateReportMetadatasFormGroup() {
		return new FormGroup<ReportMetadatasFormProperties>({
		});

	}


	/** This type defines the fields in a report task. */
	export interface ReportTask {

		/** A list of IDs for the campaigns that are included in the report. A campaign ID is a unique eBay-assigned identifier of the campaign that's generated when the campaign is created.<br /><br />Call <b>getCampaigns</b> to return the current campaign IDs for a seller. */
		campaignIds?: Array<string>;

		/** The date defining the start of the timespan covered by the report, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html " title="https://www.iso.org " target="_blank">ISO 8601</a> timestamp. */
		dateFrom?: string | null;

		/** The date defining the end of the timespan covered by the report, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html " title="https://www.iso.org " target="_blank">ISO 8601</a> timestamp. */
		dateTo?: string | null;

		/** A list containing the dimension in the report. */
		dimensions?: Array<Dimension>;

		/** The funding model for the campaign that shall be included in the report.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The default funding model for Promoted Listings reports is <code>COST_PER_SALE</code>.</span><br /><br /><b>Valid Values:</b><ul><li><code>COST_PER_SALE</code></li><li><code>COST_PER_CLICK</code></li></ul> */
		fundingModels?: Array<string>;

		/** If supplied in the request, this field returns a list of the seller's inventory reference IDs included in the report.  <p>Each item is referenced by a pair of <b>inventoryRefernceID</b> and <b>inventoryReferenceType</b> values, where an inventory reference ID can be either a seller-defined <b>SKU</b> value or an <b>inventoryItemGroupKey</b>. An <b>inventoryItemGroupKey</b> is seller-defined ID for an inventory item group (a multiple-variation listing), and is created and used by the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a>.</p> */
		inventoryReferences?: Array<InventoryReference>;

		/** If supplied in the request, this field returns a list of the listing IDs included in the report. A listing ID is an eBay-assigned ID that's generated when a listing is created. */
		listingIds?: Array<string>;

		/** The ID of the eBay marketplace used by the report task. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId?: string | null;

		/** A list of metrics for the report task. */
		metricKeys?: Array<string>;

		/** The date after which the report is no longer be available. Reports are available for 30 days and you cannot download a report after it has expired.  <br><br><b>Format (UTC): </b> yyyy-MM-ddThh:mm:ss.sssZ */
		reportExpirationDate?: string | null;

		/** Indicates the format of the report. Currently, only <code>TSV_GZIP</code> is supported. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportFormatEnum'>eBay API documentation</a> */
		reportFormat?: string | null;

		/** The URL of the generated report, which can be used to download the report once it has been generated. */
		reportHref?: string | null;

		/** A unique eBay-assigned ID for the report. */
		reportId?: string | null;

		/** An eBay-assigned name for the report that's created by the <b>createReportTask</b> call. This name is unique for the seller. */
		reportName?: string | null;

		/** The date the report task completed the report generation.  <br><br><b>Format (UTC): </b> yyyy-MM-ddThh:mm:ss.sssZ */
		reportTaskCompletionDate?: string | null;

		/** The date the report task was created.  <br><br><b>Format (UTC): </b> yyyy-MM-ddThh:mm:ss.sssZ */
		reportTaskCreationDate?: string | null;

		/** The date the report task is expected to complete the report generation.  <br><br><b>Format (UTC): </b> yyyy-MM-ddThh:mm:ss.sssZ */
		reportTaskExpectedCompletionDate?: string | null;

		/** The unique eBay-assigned ID of the report task. This value is generated when the report task is created with a call to <b>createReportTask</b>. */
		reportTaskId?: string | null;

		/** Indicates the current state of the report task. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:TaskStatusEnum'>eBay API documentation</a> */
		reportTaskStatus?: string | null;

		/** A status message with additional information about the report task. */
		reportTaskStatusMessage?: string | null;

		/** Indicates type of report associated with the report task.<br/><br/><span class="tablenote"><b>Note:</b> INVENTORY_PERFORMANCE_REPORT is not currently available; availability date is pending.</span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportTypeEnum'>eBay API documentation</a> */
		reportType?: string | null;
	}

	/** This type defines the fields in a report task. */
	export interface ReportTaskFormProperties {

		/** The date defining the start of the timespan covered by the report, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html " title="https://www.iso.org " target="_blank">ISO 8601</a> timestamp. */
		dateFrom: FormControl<string | null | undefined>,

		/** The date defining the end of the timespan covered by the report, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html " title="https://www.iso.org " target="_blank">ISO 8601</a> timestamp. */
		dateTo: FormControl<string | null | undefined>,

		/** The ID of the eBay marketplace used by the report task. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum'>eBay API documentation</a> */
		marketplaceId: FormControl<string | null | undefined>,

		/** The date after which the report is no longer be available. Reports are available for 30 days and you cannot download a report after it has expired.  <br><br><b>Format (UTC): </b> yyyy-MM-ddThh:mm:ss.sssZ */
		reportExpirationDate: FormControl<string | null | undefined>,

		/** Indicates the format of the report. Currently, only <code>TSV_GZIP</code> is supported. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportFormatEnum'>eBay API documentation</a> */
		reportFormat: FormControl<string | null | undefined>,

		/** The URL of the generated report, which can be used to download the report once it has been generated. */
		reportHref: FormControl<string | null | undefined>,

		/** A unique eBay-assigned ID for the report. */
		reportId: FormControl<string | null | undefined>,

		/** An eBay-assigned name for the report that's created by the <b>createReportTask</b> call. This name is unique for the seller. */
		reportName: FormControl<string | null | undefined>,

		/** The date the report task completed the report generation.  <br><br><b>Format (UTC): </b> yyyy-MM-ddThh:mm:ss.sssZ */
		reportTaskCompletionDate: FormControl<string | null | undefined>,

		/** The date the report task was created.  <br><br><b>Format (UTC): </b> yyyy-MM-ddThh:mm:ss.sssZ */
		reportTaskCreationDate: FormControl<string | null | undefined>,

		/** The date the report task is expected to complete the report generation.  <br><br><b>Format (UTC): </b> yyyy-MM-ddThh:mm:ss.sssZ */
		reportTaskExpectedCompletionDate: FormControl<string | null | undefined>,

		/** The unique eBay-assigned ID of the report task. This value is generated when the report task is created with a call to <b>createReportTask</b>. */
		reportTaskId: FormControl<string | null | undefined>,

		/** Indicates the current state of the report task. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:TaskStatusEnum'>eBay API documentation</a> */
		reportTaskStatus: FormControl<string | null | undefined>,

		/** A status message with additional information about the report task. */
		reportTaskStatusMessage: FormControl<string | null | undefined>,

		/** Indicates type of report associated with the report task.<br/><br/><span class="tablenote"><b>Note:</b> INVENTORY_PERFORMANCE_REPORT is not currently available; availability date is pending.</span> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/plr:ReportTypeEnum'>eBay API documentation</a> */
		reportType: FormControl<string | null | undefined>,
	}
	export function CreateReportTaskFormGroup() {
		return new FormGroup<ReportTaskFormProperties>({
			dateFrom: new FormControl<string | null | undefined>(undefined),
			dateTo: new FormControl<string | null | undefined>(undefined),
			marketplaceId: new FormControl<string | null | undefined>(undefined),
			reportExpirationDate: new FormControl<string | null | undefined>(undefined),
			reportFormat: new FormControl<string | null | undefined>(undefined),
			reportHref: new FormControl<string | null | undefined>(undefined),
			reportId: new FormControl<string | null | undefined>(undefined),
			reportName: new FormControl<string | null | undefined>(undefined),
			reportTaskCompletionDate: new FormControl<string | null | undefined>(undefined),
			reportTaskCreationDate: new FormControl<string | null | undefined>(undefined),
			reportTaskExpectedCompletionDate: new FormControl<string | null | undefined>(undefined),
			reportTaskId: new FormControl<string | null | undefined>(undefined),
			reportTaskStatus: new FormControl<string | null | undefined>(undefined),
			reportTaskStatusMessage: new FormControl<string | null | undefined>(undefined),
			reportType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the fields that paginate the reports tasks returned by the request. The entire <i>result set</i> consists of 0 or more sequenced <i>response pages</i>, where each page consists of 0 or more items from the complete result set. */
	export interface ReportTaskPagedCollection {

		/** The URI of the current page of results from the result set. */
		href?: string | null;

		/**
		 * The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048 */
		next?: string | null;

		/**
		 * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. <br><br><b>Max length</b>: 2048 */
		prev?: string | null;

		/** A list of report tasks contained on this page from the paginated response. */
		reportTasks?: Array<ReportTask>;

		/**
		 * The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}

	/** This type defines the fields that paginate the reports tasks returned by the request. The entire <i>result set</i> consists of 0 or more sequenced <i>response pages</i>, where each page consists of 0 or more items from the complete result set. */
	export interface ReportTaskPagedCollectionFormProperties {

		/** The URI of the current page of results from the result set. */
		href: FormControl<string | null | undefined>,

		/**
		 * The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. <br><br><b>Max length</b>: 2048 */
		next: FormControl<string | null | undefined>,

		/**
		 * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The items in a paginated result set use a zero-based list where the first item in the list has an offset of <code>0</code>.</span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. <br><br><b>Max length</b>: 2048 */
		prev: FormControl<string | null | undefined>,

		/**
		 * The total number of items retrieved in the result set.  <br><br>If no items are found, this field is returned with a value of <code>0</code>.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateReportTaskPagedCollectionFormGroup() {
		return new FormGroup<ReportTaskPagedCollectionFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The suggested bid rate for the item. */
	export interface SuggestedBids {

		/** The text for the keyword. */
		keywordText?: string | null;

		/** A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a> */
		matchType?: string | null;

		/** A type that defines the data for a payment amount, such as the sale price. */
		proposedBid?: ProposedBid;
	}

	/** The suggested bid rate for the item. */
	export interface SuggestedBidsFormProperties {

		/** The text for the keyword. */
		keywordText: FormControl<string | null | undefined>,

		/** A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a> */
		matchType: FormControl<string | null | undefined>,
	}
	export function CreateSuggestedBidsFormGroup() {
		return new FormGroup<SuggestedBidsFormProperties>({
			keywordText: new FormControl<string | null | undefined>(undefined),
			matchType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The suggested keywords for the item. */
	export interface SuggestedKeywords {

		/** A container for the additional information and compiled insight data for suggested keywords. */
		additionalInfo?: Array<AdditionalInfo>;

		/** The text for the keyword. */
		keywordText?: string | null;

		/** A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a> */
		matchType?: string | null;
	}

	/** The suggested keywords for the item. */
	export interface SuggestedKeywordsFormProperties {

		/** The text for the keyword. */
		keywordText: FormControl<string | null | undefined>,

		/** A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a> */
		matchType: FormControl<string | null | undefined>,
	}
	export function CreateSuggestedKeywordsFormGroup() {
		return new FormGroup<SuggestedKeywordsFormProperties>({
			keywordText: new FormControl<string | null | undefined>(undefined),
			matchType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type defines the fields in an Promotions Manager Summary report. Reports are formatted in JSON. For more details, see <a href="/api-docs/sell/static/marketing/pm-summary-reports.html">Reading item promotion Summary reports</a>. */
	export interface SummaryReportResponse {

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		baseSale?: Amount;

		/** The date the report was generated. */
		lastUpdated?: string | null;

		/** The percentage of the total dollar amount gained due to promotions. This value is calculated as follows:  <br><br><b>precentageSalesLift</b> = <b>promotionSale</b> / (<b>baseSale</b> + <b>promotionSale</b>) */
		percentageSalesLift?: string | null;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		promotionSale?: Amount;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		totalSale?: Amount;
	}

	/** This type defines the fields in an Promotions Manager Summary report. Reports are formatted in JSON. For more details, see <a href="/api-docs/sell/static/marketing/pm-summary-reports.html">Reading item promotion Summary reports</a>. */
	export interface SummaryReportResponseFormProperties {

		/** The date the report was generated. */
		lastUpdated: FormControl<string | null | undefined>,

		/** The percentage of the total dollar amount gained due to promotions. This value is calculated as follows:  <br><br><b>precentageSalesLift</b> = <b>promotionSale</b> / (<b>baseSale</b> + <b>promotionSale</b>) */
		percentageSalesLift: FormControl<string | null | undefined>,
	}
	export function CreateSummaryReportResponseFormGroup() {
		return new FormGroup<SummaryReportResponseFormProperties>({
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			percentageSalesLift: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that defines the keywords of the paged collection. */
	export interface TargetedAdsPagedCollection {

		/** The URI of the current page of results from the result set. */
		href?: string | null;

		/**
		 * The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set. */
		next?: string | null;

		/**
		 * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p><b>Default:</b> 0</p><br><span class="tablenote"><b>Note: </b>The items in a paginated result set use a zero-based list, where the first item in the list has an offset of <code>0</code>.</span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results. */
		prev?: string | null;

		/** A list of suggested items in the paginated collection. */
		suggestedItems?: Array<TargetingItems>;

		/**
		 * The total number of items retrieved in the result set.<br /><br /><span class="tablenote"><b>Note: </b>If no items are found, this field is returned with a value of <code>0</code>.</span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}

	/** A type that defines the keywords of the paged collection. */
	export interface TargetedAdsPagedCollectionFormProperties {

		/** The URI of the current page of results from the result set. */
		href: FormControl<string | null | undefined>,

		/**
		 * The number of items returned on a single page from the result set. This value can be set in the request with the <b>limit</b> query parameter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set. */
		next: FormControl<string | null | undefined>,

		/**
		 * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the <b>offset</b> query parameter. <p><b>Default:</b> 0</p><br><span class="tablenote"><b>Note: </b>The items in a paginated result set use a zero-based list, where the first item in the list has an offset of <code>0</code>.</span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results. */
		prev: FormControl<string | null | undefined>,

		/**
		 * The total number of items retrieved in the result set.<br /><br /><span class="tablenote"><b>Note: </b>If no items are found, this field is returned with a value of <code>0</code>.</span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateTargetedAdsPagedCollectionFormGroup() {
		return new FormGroup<TargetedAdsPagedCollectionFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A type that defines the targeted items. */
	export interface TargetingItems {

		/** The metrics and additional information for the items. */
		bases?: Array<ItemBasis>;

		/** The listing ID of the targeted item. */
		listingId?: string | null;
	}

	/** A type that defines the targeted items. */
	export interface TargetingItemsFormProperties {

		/** The listing ID of the targeted item. */
		listingId: FormControl<string | null | undefined>,
	}
	export function CreateTargetingItemsFormGroup() {
		return new FormGroup<TargetingItemsFormProperties>({
			listingId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that defines the targeted bid. */
	export interface TargetedBidRequest {

		/** A list of keywords in the paginated collection. <br /><br /><b>Maximum number of keywords: </b>500 */
		keywords?: Array<KeywordRequest>;
	}

	/** A type that defines the targeted bid. */
	export interface TargetedBidRequestFormProperties {
	}
	export function CreateTargetedBidRequestFormGroup() {
		return new FormGroup<TargetedBidRequestFormProperties>({
		});

	}


	/** A type that defines the keywords of the paged collection. */
	export interface TargetedBidsPagedCollection {

		/** A list of bids in the paginated collection. */
		suggestedBids?: Array<SuggestedBids>;
	}

	/** A type that defines the keywords of the paged collection. */
	export interface TargetedBidsPagedCollectionFormProperties {
	}
	export function CreateTargetedBidsPagedCollectionFormGroup() {
		return new FormGroup<TargetedBidsPagedCollectionFormProperties>({
		});

	}


	/** A type that provides details for the targeted keywords. */
	export interface TargetedKeywordRequest {

		/** A field used to indicate whether additional information and insight data shall be provided for suggested keywords.<br /><br /><strong>Valid Value:</strong> <code>KEYWORD_INSIGHTS</code> */
		additionalInfo?: Array<string>;

		/** A field used to indicate that the keywords already selected by sellers for the specified listing IDs should be filtered out of the response, and only new and unique keyword recommendations shall be returned.<br /><br /><strong>Valid Value:</strong> <code>ADOPTED_KEYWORDS</code> */
		exclusions?: Array<string>;

		/** A set of comma-separated listing IDs in the paginated collection. <br /><br /><b>Maximum number of listings requested: </b>300 */
		listingIds?: Array<string>;

		/** A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a> */
		matchType?: string | null;
	}

	/** A type that provides details for the targeted keywords. */
	export interface TargetedKeywordRequestFormProperties {

		/** A field that defines the match type for the keyword.<br /><br /><b>Valid Values:</b><ul><li><code>BROAD</code></li><li><code>EXACT</code></li><li><code>PHRASE</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:MatchTypeEnum'>eBay API documentation</a> */
		matchType: FormControl<string | null | undefined>,
	}
	export function CreateTargetedKeywordRequestFormGroup() {
		return new FormGroup<TargetedKeywordRequestFormProperties>({
			matchType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that defines the keywords of the paged collection. */
	export interface TargetedKeywordsPagedCollection {

		/** A list of suggested keywords in the paged collection. <p> <span class="tablenote"><strong>Note:</strong> A relevancy check with items already present in the ad-group is performed even if item IDs associated with the ad-group are not explicitly passed in the request.</span></p> */
		suggestedKeywords?: Array<SuggestedKeywords>;
	}

	/** A type that defines the keywords of the paged collection. */
	export interface TargetedKeywordsPagedCollectionFormProperties {
	}
	export function CreateTargetedKeywordsPagedCollectionFormGroup() {
		return new FormGroup<TargetedKeywordsPagedCollectionFormProperties>({
		});

	}


	/** A type that contains the fields used by the <b>UpdateAdGroup</b> request. */
	export interface UpdateAdGroupRequest {

		/** An enumeration value representing the current status of the ad group.<p>If the status of the ad is currently <code>ACTIVE</code>, you can change status to <code>PAUSED</code> or <code>ARCHIVED</code>. If ad group is currently in <code>PAUSED</code> status, you can change the status back to <code>ACTIVE</code>. Ads that are currently in <code>ARCHIVED</code> status cannot be made <code>ACTIVE</code> again.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdGroupStatusEnum'>eBay API documentation</a> */
		adGroupStatus?: string | null;

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		defaultBid?: Amount;

		/** The updated name for the specified ad group. */
		name?: string | null;
	}

	/** A type that contains the fields used by the <b>UpdateAdGroup</b> request. */
	export interface UpdateAdGroupRequestFormProperties {

		/** An enumeration value representing the current status of the ad group.<p>If the status of the ad is currently <code>ACTIVE</code>, you can change status to <code>PAUSED</code> or <code>ARCHIVED</code>. If ad group is currently in <code>PAUSED</code> status, you can change the status back to <code>ACTIVE</code>. Ads that are currently in <code>ARCHIVED</code> status cannot be made <code>ACTIVE</code> again.<br /><br /><b>Valid Values:</b><ul><li><code>ACTIVE</code></li><li><code>PAUSED</code></li><li><code>ARCHIVED</code></li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdGroupStatusEnum'>eBay API documentation</a> */
		adGroupStatus: FormControl<string | null | undefined>,

		/** The updated name for the specified ad group. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAdGroupRequestFormGroup() {
		return new FormGroup<UpdateAdGroupRequestFormProperties>({
			adGroupStatus: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that defines the request fields used to update the ad rate strategy for a Promoted Listings ad campaign. */
	export interface UpdateAdrateStrategyRequest {

		/** The ad rate strategy that shall be applied to the campaign. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdRateStrategyEnum'>eBay API documentation</a> */
		adRateStrategy?: string | null;

		/** The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is the default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0 */
		bidPercentage?: string | null;

		/** A field that indicates whether a single, user-defined bid percentage (also known as the <i>ad rate</i>) should be used, or whether eBay should automatically adjust listings to maintain the daily suggested bid percentage.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Dynamic adjustment is only applicable when the <b>adRateStrategy</b> is set to <code>DYNAMIC</code>.</span><br /><b>Default:</b> <code>FIXED</code> */
		dynamicAdRatePreferences?: Array<DynamicAdRatePreference>;
	}

	/** A type that defines the request fields used to update the ad rate strategy for a Promoted Listings ad campaign. */
	export interface UpdateAdrateStrategyRequestFormProperties {

		/** The ad rate strategy that shall be applied to the campaign. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdRateStrategyEnum'>eBay API documentation</a> */
		adRateStrategy: FormControl<string | null | undefined>,

		/** The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is the default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0 */
		bidPercentage: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAdrateStrategyRequestFormGroup() {
		return new FormGroup<UpdateAdrateStrategyRequestFormProperties>({
			adRateStrategy: new FormControl<string | null | undefined>(undefined),
			bidPercentage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type specifies the bid percentage for an ad campaign. */
	export interface UpdateBidPercentageRequest {

		/** The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0 */
		bidPercentage?: string | null;
	}

	/** This type specifies the bid percentage for an ad campaign. */
	export interface UpdateBidPercentageRequestFormProperties {

		/** The user-defined <b>bid percentage</b> (also known as the <i>ad rate</i>) sets the level that eBay increases the visibility in search results for the associated listing. The higher the <b>bidPercentage</b> value, the more eBay promotes the listing.  <br><br>The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. <br><br>The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. <br><br>The <b>bidPercentage</b> is a single precision value that is guided by the following rules: <ul><li>These values are <b>valid</b>:<br>&nbsp;&nbsp;&nbsp;<code>4.1</code>, &nbsp;&nbsp;&nbsp;<code>5.0</code>, &nbsp;&nbsp;&nbsp;<code>5.5</code>, ...</li>  <li>These values are <b>not valid</b>:<br /> &nbsp;&nbsp;&nbsp;<code>0.01</code>, &nbsp;&nbsp;&nbsp;<code>10.75</code>, &nbsp;&nbsp;&nbsp;<code>99.99</code>,<br /> &nbsp;&nbsp;&nbsp;and so on.</li></ul>This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.<br /><br />If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.<br /><br /><b>Minimum value:</b> 2.0 <br><b>Maximum value:</b> 100.0 */
		bidPercentage: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBidPercentageRequestFormGroup() {
		return new FormGroup<UpdateBidPercentageRequestFormProperties>({
			bidPercentage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that contains the fields for the <b>UpdateCampaignBudget</b> request. */
	export interface UpdateCampaignBudgetRequest {

		/** A container for the budget details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model.<br /><br /><span class="tablenote"><b>Note:</b> This container will only be returned for campaigns using the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span> */
		daily?: BudgetRequest;
	}

	/** A type that contains the fields for the <b>UpdateCampaignBudget</b> request. */
	export interface UpdateCampaignBudgetRequestFormProperties {
	}
	export function CreateUpdateCampaignBudgetRequestFormGroup() {
		return new FormGroup<UpdateCampaignBudgetRequestFormProperties>({
		});

	}


	/** This type specifies the updated name, and start and end dates for an update-campaign request. */
	export interface UpdateCampaignIdentificationRequest {

		/** The new seller-defined name for the campaign. This value must be unique for the seller. <p>If you don't want to change the name of the campaign, specify the current campaign name in this field.<p>You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.</p><b>Max length: </b>80 characters. */
		campaignName?: string | null;

		/** The date and time the campaign ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an <a href="/api-docs/sell/marketing/resources/campaign/methods/endCampaign">endCampaign</a> call, or if they update the campaign at a later time with an end date.<p>If you want to change only the end date of the campaign, you must specify the current campaign name, set the <b>endDate</b> as desired, and set the <b>startDate</b> to the actual start date of the campaign. This applies if the campaign status is <code>RUNNING</code> or <code>PAUSED</code>. You can retrieve the <b>startDate</b> using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaign#response.startDate">getCampaign</a> method.</p> <p>Note that if you do not set a new end date in this call, any current endDate value will be set to null. To preserve the currently-set end date, you must specify the value again in your request.</p> */
		endDate?: string | null;

		/** The new start date for the campaign, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>).<p>If the campaign status is <code>RUNNING</code> or <code>PAUSED</code>, the <b>startDate</b> must be specified and must be the actual start date of the campaign, even if you are only changing the <b>endDate</b>. You can retrieve the campaign's <b>startDate</b> using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaign#response.startDate">getCampaign</a> method.</p><p>On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller's campaigns.</p> */
		startDate?: string | null;
	}

	/** This type specifies the updated name, and start and end dates for an update-campaign request. */
	export interface UpdateCampaignIdentificationRequestFormProperties {

		/** The new seller-defined name for the campaign. This value must be unique for the seller. <p>If you don't want to change the name of the campaign, specify the current campaign name in this field.<p>You can use any alphanumeric characters in the name, except the less than (&lt;) or greater than (&gt;) characters.</p><b>Max length: </b>80 characters. */
		campaignName: FormControl<string | null | undefined>,

		/** The date and time the campaign ends, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an <a href="/api-docs/sell/marketing/resources/campaign/methods/endCampaign">endCampaign</a> call, or if they update the campaign at a later time with an end date.<p>If you want to change only the end date of the campaign, you must specify the current campaign name, set the <b>endDate</b> as desired, and set the <b>startDate</b> to the actual start date of the campaign. This applies if the campaign status is <code>RUNNING</code> or <code>PAUSED</code>. You can retrieve the <b>startDate</b> using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaign#response.startDate">getCampaign</a> method.</p> <p>Note that if you do not set a new end date in this call, any current endDate value will be set to null. To preserve the currently-set end date, you must specify the value again in your request.</p> */
		endDate: FormControl<string | null | undefined>,

		/** The new start date for the campaign, in UTC format (<code>yyyy-MM-ddThh:mm:ssZ</code>).<p>If the campaign status is <code>RUNNING</code> or <code>PAUSED</code>, the <b>startDate</b> must be specified and must be the actual start date of the campaign, even if you are only changing the <b>endDate</b>. You can retrieve the campaign's <b>startDate</b> using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaign#response.startDate">getCampaign</a> method.</p><p>On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller's campaigns.</p> */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCampaignIdentificationRequestFormGroup() {
		return new FormGroup<UpdateCampaignIdentificationRequestFormProperties>({
			campaignName: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that contains the fields for the <b>UpdateKeyword</b> request. */
	export interface UpdateKeywordRequest {

		/** A complex type that describes the value of a monetary amount as represented by a global currency. */
		bid?: Amount;

		/** Include this field if you wish to change the status of the keyword. The status value specified here must be different than the keyword's current status. To confirm the current status of a keyword, you can use the <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeyword">getKeyword</a> method.</p><p>If the status of the ad is currently <code>ACTIVE</code>, you can change status to <code>PAUSED</code> or <code>ARCHIVED</code>. If ad group is currently in <code>PAUSED</code> status, you can change the status back to <code>ACTIVE</code>. Ads that are currently in <code>ARCHIVED</code> status cannot be made <code>ACTIVE</code> again. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:KeywordStatusEnum'>eBay API documentation</a> */
		keywordStatus?: string | null;
	}

	/** A type that contains the fields for the <b>UpdateKeyword</b> request. */
	export interface UpdateKeywordRequestFormProperties {

		/** Include this field if you wish to change the status of the keyword. The status value specified here must be different than the keyword's current status. To confirm the current status of a keyword, you can use the <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeyword">getKeyword</a> method.</p><p>If the status of the ad is currently <code>ACTIVE</code>, you can change status to <code>PAUSED</code> or <code>ARCHIVED</code>. If ad group is currently in <code>PAUSED</code> status, you can change the status back to <code>ACTIVE</code>. Ads that are currently in <code>ARCHIVED</code> status cannot be made <code>ACTIVE</code> again. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:KeywordStatusEnum'>eBay API documentation</a> */
		keywordStatus: FormControl<string | null | undefined>,
	}
	export function CreateUpdateKeywordRequestFormGroup() {
		return new FormGroup<UpdateKeywordRequestFormProperties>({
			keywordStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type that contains the fields for the <b>UpdateNegativeKeyword</b> request. */
	export interface UpdateNegativeKeywordRequest {

		/** A field that defines the status of the negative keyword. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordStatusEnum'>eBay API documentation</a> */
		negativeKeywordStatus?: string | null;
	}

	/** A type that contains the fields for the <b>UpdateNegativeKeyword</b> request. */
	export interface UpdateNegativeKeywordRequestFormProperties {

		/** A field that defines the status of the negative keyword. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordStatusEnum'>eBay API documentation</a> */
		negativeKeywordStatus: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNegativeKeywordRequestFormGroup() {
		return new FormGroup<UpdateNegativeKeywordRequestFormProperties>({
			negativeKeywordStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * This method retrieves the details for all of the seller's defined campaigns. Request parameters can be used to retrieve a specific campaign, such as the campaign's name, the start and end date, the status, and the funding model (Cost Per Sale (CPS) or Cost Per Click (CPC). <p>You can filter the result set by a campaign name, end date range, start date range, or campaign status. You can also paginate the records returned from the result set using the <b>limit</b> query parameter, and control which records to return using the  <b>offset</b> parameter.</p>
		 * Get ad_campaign
		 * @param {string} campaign_name Specifies the campaign name. The results are filtered to include only the campaign by the specified name.<br /><br /><b>Note: </b>The results might be null if other filters exclude the campaign with this name. <br /><br /><b>Maximum: </b> 1 campaign name
		 * @param {string} campaign_status Include this filter and input a specific campaign status to retrieve campaigns currently in that state. <br /><br /><b>Note: </b>The results might not include all the campaigns with this status if other filters exclude them. <br /><br /><b>Valid values:</b> See <a href="/api-docs/sell/marketing/types/pls:CampaignStatusEnum">CampaignStatusEnum</a> <br /><br /><b>Maximum: </b> 1 status
		 * @param {string} end_date_range Specifies the range of a campaign's end date. The results are filtered to include only campaigns with an end date that is within specified range. <br><br><b>Valid format (UTC)</b>: <ul><li><code> yyyy-MM-ddThh:mm:ssZ..yyyy-MM-ddThh:mm:ssZ </code>  (campaign ends within this range)</li><li><code>yyyy-MM-ddThh:mm:ssZ..</code> (campaign ends on or after this date)</li><li><code>..yyyy-MM-ddThh:mm:ssZ </code> (campaign ends on or before this date)</li><li><code>2016-09-08T00:00.00.000Z..2016-09-09T00:00:00Z</code> (campaign ends on September 08, 2016)</li></ul> <br /><br /><b>Note: </b>The results might not include all the campaigns ending on this date if other filters exclude them.
		 * @param {string} funding_strategy Specifies the funding strategy for the campaign.<br /><br />The results will be filtered to only include campaigns with the specified funding model. If not specified, all campaigns matching the other filter parameters will be returned. The results might not include these campaigns if other search conditions exclude them.<br /><br /><b>Valid Values:</b><ul><li><code>COST_PER_SALE</code></li><li><code>COST_PER_CLICK</code></li></ul>
		 * @param {string} limit <p>Specifies the maximum number of campaigns to return on a page in the paginated response.</p>  <b>Default: </b>10 <br><b>Maximum: </b> 500
		 * @param {string} offset Specifies the number of campaigns to skip in the result set before returning the first report in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>
		 * @param {string} start_date_range Specifies the range of a campaign's start date in which to filter the results. The results are filtered to include only campaigns with a start date that is equal to this date or is within specified range.<br><br><b>Valid format (UTC): </b> <ul><li><code>yyyy-MM-ddThh:mm:ssZ..yyyy-MM-ddThh:mm:ssZ</code> (starts within this range)</li><li><code>yyyy-MM-ddThh:mm:ssZ</code> (campaign starts on or after this date)</li><li><code>..yyyy-MM-ddThh:mm:ssZ </code>(campaign starts on or before this date)</li><li><code>2016-09-08T00:00.00.000Z..2016-09-09T00:00:00Z</code> (campaign starts on September 08, 2016)</li></ul><br /><br /><b>Note: </b>The results might not include all the campaigns with this start date if other filters exclude them.
		 * @return {CampaignPagedCollectionResponse} Success
		 */
		GetCampaigns(campaign_name: string | null | undefined, campaign_status: string | null | undefined, end_date_range: string | null | undefined, funding_strategy: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined, start_date_range: string | null | undefined): Observable<CampaignPagedCollectionResponse> {
			return this.http.get<CampaignPagedCollectionResponse>(this.baseUri + 'ad_campaign?campaign_name=' + (campaign_name == null ? '' : encodeURIComponent(campaign_name)) + '&campaign_status=' + (campaign_status == null ? '' : encodeURIComponent(campaign_status)) + '&end_date_range=' + (end_date_range == null ? '' : encodeURIComponent(end_date_range)) + '&funding_strategy=' + (funding_strategy == null ? '' : encodeURIComponent(funding_strategy)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&start_date_range=' + (start_date_range == null ? '' : encodeURIComponent(start_date_range)), {});
		}

		/**
		 * This method creates a Promoted Listings ad campaign. <p>A Promoted Listings <i>campaign</i> is the structure into which you place the ads or ad group for the listings you want to promote.</p>  <p>Identify the items you want to place into a campaign either by "key" or by "rule" as follows:</p> <ul><li><b>Rules-based campaigns</b> &ndash; A rules-based campaign adds items to the campaign according to the <i>criteria</i> you specify in your call to <b>createCampaign</b>. You can set the <b>autoSelectFutureInventory</b> request field to <code>true</code> so that after your campaign launches, eBay will regularly assess your new, revised, or newly-eligible listings to determine whether any should be added or removed from your campaign according to the rules you set. If there are, eBay will add or remove them automatically on a daily basis.</li> <li><b>Key-based campaigns</b> &ndash; Add items to an existing campaign using either listing ID values or Inventory Reference values: <ul><li>Add <b>listingId</b> values to an existing campaign by calling either <b>createAdByListingID</b> or <b>bulkCreateAdsByListingId</b>.</li>  <li>Add <b>inventoryReference</b> values to an existing campaign by calling either <b>createAdByInventoryReference</b> or <b>bulkCreateAdsByInventoryReference</b>.</li><li>Add an <b>ad group</b> to an existing campaign by calling <b>createAdGroup</b>.</li></ul><p class="tablenote"><b>Note:</b> No matter how you add items to a Promoted Listings campaign, each campaign can contain ads for a maximum of 50,000 items. <br><br>If a rules-based campaign identifies more than 50,000 items, ads are created for only the first 50,000 items identified by the specified criteria, and ads are not created for the remaining items.</p>  <p><b>Creating a campaign</b></p> <p>To create a basic campaign, supply:</p>  <ul><li>The user-defined campaign name</li> <li>The start date (and optionally the end date) of the campaign</li> <li>The eBay marketplace on which the campaign is hosted</li> <li>Details on the campaign funding model</li></ul>  <p>The campaign funding model specifies how the Promoted Listings fee is calculated. Currently, the supported funding models are <code>COST_PER_SALE</code> and <code>COST_PER_CLICK</code>. For complete information on how the fee is calculated and when it applies, see <a href="/api-docs/sell/static/marketing/pl-overview.html#pl-fees">Promoted Listings fees</a>.</p>   <p>If you populate the <b>campaignCriterion</b> object in your <b>createCampaign</b> request, campaign "ads" are created by "rule" for the listings that meet the criteria you specify, and these ads are associated with the newly created campaign.</p>  <p>For details on creating Promoted Listings campaigns and how to select the items to be included in your campaigns, see <a href="/api-docs/sell/static/marketing/pl-create-campaign.html">Promoted Listings campaign creation</a>.</p>  <p>For recommendations on which listings are prime for a Promoted Listings ad campaign and to get guidance on how to set the <b>bidPercentage</b> field, see <a href="/api-docs/sell/static/marketing/pl-reco-api.html">Using the Recommendation API to help configure campaigns</a>.</p>  <p class="tablenote"><b>Tip:</b> See <a href="/api-docs/sell/marketing/static/overview.html#PL-requirements">Promoted Listings requirements and restrictions</a> for the details on the marketplaces that support Promoted Listings via the API. See <a href="/api-docs/sell/static/marketing/pl-restrictions">Promoted Listings restrictions</a> for details about campaign limitations and restrictions.</p>
		 * Post ad_campaign
		 * @param {CreateCampaignRequest} requestBody This type defines the fields for the create campaign request.
		 * @return {void} 
		 */
		CreateCampaign(requestBody: CreateCampaignRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ad_campaign', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method retrieves the campaigns containing the listing that is specified using either a listing ID, or an inventory reference ID and inventory reference type pair. The request accepts either a <b>listing_id</b>, <i>or</i> an <b>inventory_reference_id</b> and <b>inventory_reference_type</b> pair, as used in the Inventory API.<br /><br />eBay <i>listing IDs</i> are generated by either the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a> when you create a listing.<br /><br />An <i>inventory reference ID</i> can be either a seller-defined <b>SKU</b> or <b>inventoryItemGroupKey</b>, as specified in the Inventory API.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>
		 * Get ad_campaign/find_campaign_by_ad_reference
		 * @param {string} inventory_reference_id The seller's inventory reference ID of the listing to be used to find the campaign in which it is associated.  This will either be a seller-defined <b>SKU</b> value or inventory item group ID, depending on the reference type specified. You must always pass in both  <b>inventory_reference_id</b> and <b>inventory_reference_type</b>.
		 * @param {string} inventory_reference_type The type of the seller's inventory reference ID, which is a listing or group of items. You must always pass in both <b>inventory_reference_id</b> and <b>inventory_reference_type</b>.
		 * @param {string} listing_id Identifier of the eBay listing associated with the ad.
		 * @return {Campaigns} Success
		 */
		FindCampaignByAdReference(inventory_reference_id: string | null | undefined, inventory_reference_type: string | null | undefined, listing_id: string | null | undefined): Observable<Campaigns> {
			return this.http.get<Campaigns>(this.baseUri + 'ad_campaign/find_campaign_by_ad_reference?inventory_reference_id=' + (inventory_reference_id == null ? '' : encodeURIComponent(inventory_reference_id)) + '&inventory_reference_type=' + (inventory_reference_type == null ? '' : encodeURIComponent(inventory_reference_type)) + '&listing_id=' + (listing_id == null ? '' : encodeURIComponent(listing_id)), {});
		}

		/**
		 * This method retrieves the details of a single campaign, as specified with the <b>campaign_name</b> query parameter. Note that the campaign name you specify must be an exact, case-sensitive match of the name of the campaign you want to retrieve.</p><p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the seller's campaign names.</p>
		 * Get ad_campaign/get_campaign_by_name
		 * @param {string} campaign_name The name of the campaign.
		 * @return {Campaign} Success
		 */
		GetCampaignByName(campaign_name: string): Observable<Campaign> {
			return this.http.get<Campaign>(this.baseUri + 'ad_campaign/get_campaign_by_name?campaign_name=' + (campaign_name == null ? '' : encodeURIComponent(campaign_name)), {});
		}

		/**
		 * This method deletes the campaign specified by the <code>campaign_id</code> query parameter.<br /><br /><span class="tablenote"><b>Note: </b> You can only delete campaigns that have ended.</span><br /><br />Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller's campaigns.
		 * Delete ad_campaign/{campaign_id}
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @return {void} 
		 */
		DeleteCampaign(campaign_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This method retrieves the details of a single campaign, as specified with the <b>campaign_id</b> query parameter.  <p>This method returns all the details of a campaign (including the campaign's the selection rules), except the for the listing IDs or inventory reference IDs included in the campaign. These IDs are returned by <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a>.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the seller's campaign IDs.</p>
		 * Get ad_campaign/{campaign_id}
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @return {Campaign} Success
		 */
		GetCampaign(campaign_id: string): Observable<Campaign> {
			return this.http.get<Campaign>(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)), {});
		}

		/**
		 * This method retrieves Promoted Listings ads that are associated with listings created with either the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>. <p>The method retrieves ads related to the specified campaign. Specify the Promoted Listings campaign to target with the <b>campaign_id</b> path parameter.</p>  <p>Because of the large number of possible results, you can use query parameters to paginate the result set by specifying a <b>limit</b>, which dictates how many ads to return on each page of the response. You can also specify how many ads to skip in the result set before returning the first result using the <b>offset</b> path parameter.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the current campaign IDs for the seller.</p>
		 * Get ad_campaign/{campaign_id}/ad
		 * @param {string} ad_group_ids A comma-separated list of ad group IDs. The results will be filtered to only include active ads for these ad groups. Call <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> to retrieve the ad group ID for the ad group.<br /><br /><span class="tablenote"><b>Note:</b> This field only applies to the Cost Per Click (CPC) funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>
		 * @param {string} ad_status A comma-separated list of ad statuses. The results will be filtered to only include the given statuses of the ad. If none are provided, all ads are returned.
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {string} limit Specifies the maximum number of ads to return on a page in the paginated response. <p><b>Default: </b>10 <br><b>Maximum:</b> 500</p>
		 * @param {string} listing_ids A comma-separated list of listing IDs. The response includes only active ads (ads associated with a RUNNING campaign). The results do not include listing IDs that are excluded by other conditions.
		 * @param {string} offset Specifies the number of ads to skip in the result set before returning the first ad in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>
		 * @return {AdPagedCollectionResponse} Success
		 */
		GetAds(ad_group_ids: string | null | undefined, ad_status: string | null | undefined, campaign_id: string, limit: string | null | undefined, listing_ids: string | null | undefined, offset: string | null | undefined): Observable<AdPagedCollectionResponse> {
			return this.http.get<AdPagedCollectionResponse>(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/ad?ad_group_ids=' + (ad_group_ids == null ? '' : encodeURIComponent(ad_group_ids)) + '&ad_status=' + (ad_status == null ? '' : encodeURIComponent(ad_status)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&listing_ids=' + (listing_ids == null ? '' : encodeURIComponent(listing_ids)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), {});
		}

		/**
		 * This method adds a listing to an existing Promoted Listings campaign using a <b>listingId</b> value generated by the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>, or using a value generated by an ad group ID. <p>For Promoted Listings Standard (PLS) campaigns using the Cost Per Sale (CPS) funding model, an ad may be directly created for the listing.</p><p>For the listing ID specified in the request, this method:</p>  <ul><li>Creates an ad for the listing.</li> <li>Sets the bid percentage (also known as the <i>ad rate</i>) for the ad.</li> <li>Associates the ad with the specified campaign.</li></ul>  <p>To create an ad for a listing, specify its <b>listingId</b>, plus the <b>bidPercentage</b> for the ad in the payload of the request. Specify the campaign to associate the ad with using the <b>campaign_id</b> path parameter. Listing IDs are generated by eBay when a seller creates listings with the Trading API.</p><p>For Promoted Listings Advanced (PLA) campaigns using the Cost Per Click (CPC) funding model, an ad group must be created first. If no ad group has been created for the campaign, an ad cannot be created.</p><p>For the ad group specified in the request, this method associates the ad with the specified ad group.</p><p>To create an ad for an ad group, specify the name of the ad group in the payload of the request. Specify the campaign to associate the ads with using the <b>campaign_id</b> path parameter. Ad groups are generated using the <a href="/api-docs/sell/marketing/resources/adgroup/methods/createAdGroup">createAdGroup</a> method.</p> <p>You can specify one or more ad groups per campaign.</p><p>Use <a href="/api-docs/sell/marketing/resources/campaign/methods/createCampaign">createCampaign</a> to create a new campaign and use <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to get a list of existing campaigns.</p><p>This call has no response payload. If the ad is successfully created, a <code>201 Created</code> HTTP status code and the <a href="/api-docs/sell/marketing/resources/ad/methods/getAd">getAd</a> URI of the ad are returned in the location header.</p>
		 * Post ad_campaign/{campaign_id}/ad
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {CreateAdRequest} requestBody This request object defines the fields used in the <b>createAdByListingId</b> request.
		 * @return {void} 
		 */
		CreateAdByListingId(campaign_id: string, requestBody: CreateAdRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/ad', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method removes the specified ad from the specified campaign.<br /><br />Pass the ID of the ad to delete with the ID of the campaign associated with the ad as path parameters to the call.<br /><br />Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to get the current list of the seller's campaign IDs.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span><br /><br />When using the CPC funding model, use the <b>bulkUpdateAdsStatusByListingId</b> method to change the status of ads to ARCHIVED.
		 * Delete ad_campaign/{campaign_id}/ad/{ad_id}
		 * @param {string} ad_id Identifier of an ad. This ID was generated when the ad was created.
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @return {void} 
		 */
		DeleteAd(ad_id: string, campaign_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/ad/' + (ad_id == null ? '' : encodeURIComponent(ad_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This method retrieves the specified ad from the specified campaign.  <p>In the request, supply the <b>campaign_id</b> and <b>ad_id</b> as path parameters.</p> <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the seller's current campaign IDs and call <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a> to retrieve their current ad IDs.</p>
		 * Get ad_campaign/{campaign_id}/ad/{ad_id}
		 * @param {string} ad_id A unique identifier for an ad. This ID is generated when the ad is created.
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @return {Ad} Success
		 */
		GetAd(ad_id: string, campaign_id: string): Observable<Ad> {
			return this.http.get<Ad>(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/ad/' + (ad_id == null ? '' : encodeURIComponent(ad_id)), {});
		}

		/**
		 * This method updates the bid percentage (also known as the "ad rate") for the specified ad in the specified campaign. <p>In the request, supply the <b>campaign_id</b> and <b>ad_id</b> as path parameters, and supply the new <b>bidPercentage</b> value in the payload of the call.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a seller's current campaign IDs and call <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a> to get their ad IDs.</p><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>
		 * Post ad_campaign/{campaign_id}/ad/{ad_id}/update_bid
		 * @param {string} ad_id A unique eBay-assigned ID for an ad that's generated when an ad is created.
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {UpdateBidPercentageRequest} requestBody This type defines the fields for the <b>updateBid</b> request.
		 * @return {void} 
		 */
		UpdateBid(ad_id: string, campaign_id: string, requestBody: UpdateBidPercentageRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/ad/' + (ad_id == null ? '' : encodeURIComponent(ad_id)) + '/update_bid', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method retrieves ad groups for the specified campaigns.<br /><br />Each campaign can only have <b>one</b> ad group.<br /><br />In the request, supply the <b>campaign_ids</b> as path parameters.<br /><br />Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the current campaign IDs for a seller.
		 * Get ad_campaign/{campaign_id}/ad_group
		 * @param {string} ad_group_status A comma-separated list of ad group statuses. The results will be filtered to only include the given statuses of the ad group.<br /><br />The results might not include these ad groups if other search conditions exclude them.
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {string} limit The number of results, from the current result set, to be returned in a single page.
		 * @param {string} offset The number of results that will be skipped in the result set. This is used with the <b>limit</b> field to control the pagination of the output.<br /><br />For example, if the <b>offset</b> is set to <code>0</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 1 through 10 from the list of items returned. If the <b>offset</b> is set to <code>10</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 11 through 20 from the list of items returned.<br><br><b>Default</b>: <code>0</code>
		 * @return {AdGroupPagedCollectionResponse} Success
		 */
		GetAdGroups(ad_group_status: string | null | undefined, campaign_id: string, limit: string | null | undefined, offset: string | null | undefined): Observable<AdGroupPagedCollectionResponse> {
			return this.http.get<AdGroupPagedCollectionResponse>(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/ad_group?ad_group_status=' + (ad_group_status == null ? '' : encodeURIComponent(ad_group_status)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), {});
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method adds an ad group to an existing PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />To create an ad group for a campaign, specify the <b>defaultBid</b> for the ad group in the payload of the request. Then specify the campaign to which the ad group should be associated using the <b>campaign_id</b> path parameter.<br /><br />Each campaign can have one or more associated ad groups.
		 * Post ad_campaign/{campaign_id}/ad_group
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {CreateAdGroupRequest} requestBody This type defines the fields for the <b>createAdGroup</b> request.
		 * @return {void} 
		 */
		CreateAdGroup(campaign_id: string, requestBody: CreateAdGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/ad_group', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method retrieves the details of a specified ad group, such as the ad group’s default bid and status.<br /><br />In the request, specify the <b>campaign_id</b> and <b>ad_group_id</b> as path parameters.<br /><br />Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a list of the current campaign IDs for a seller and call <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> for the ad group ID of the ad group you wish to retrieve.
		 * Get ad_campaign/{campaign_id}/ad_group/{ad_group_id}
		 * @param {string} ad_group_id The ID of the ad group that shall be retrieved.
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @return {AdGroup} Success
		 */
		GetAdGroup(ad_group_id: string, campaign_id: string): Observable<AdGroup> {
			return this.http.get<AdGroup>(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/ad_group/' + (ad_group_id == null ? '' : encodeURIComponent(ad_group_id)), {});
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the ad group associated with a campaign.<br /><br />With this method, you can modify the <b>default bid</b> for the ad group, change the state of the ad group, or change the name of the ad group. Pass the <b>ad_group_id</b> you want to update as a URI parameter, and configure the <b>adGroupStatus</b> and <b>defaultBid</b> in the request payload.<br /><br />Call <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroup">getAdGroup</a> to retrieve the current default bid and status of the ad group that you would like to update.
		 * Put ad_campaign/{campaign_id}/ad_group/{ad_group_id}
		 * @param {string} ad_group_id The ID of the ad group that shall be updated.
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {UpdateAdGroupRequest} requestBody This type defines the fields for the <b>UpdateAdGroup</b> request.
		 * @return {void} 
		 */
		UpdateAdGroup(ad_group_id: string, campaign_id: string, requestBody: UpdateAdGroupRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/ad_group/' + (ad_group_id == null ? '' : encodeURIComponent(ad_group_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method allows sellers to retrieve the suggested bids for input keywords and match type.
		 * Post ad_campaign/{campaign_id}/ad_group/{ad_group_id}/suggest_bids
		 * @param {string} ad_group_id The ID of the ad group containing the keywords for which the bid suggestions will be provided.
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {TargetedBidRequest} requestBody The data requested to retrieve the suggested bids.
		 * @return {TargetedBidsPagedCollection} Success
		 */
		SuggestBids(ad_group_id: string, campaign_id: string, requestBody: TargetedBidRequest): Observable<TargetedBidsPagedCollection> {
			return this.http.post<TargetedBidsPagedCollection>(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/ad_group/' + (ad_group_id == null ? '' : encodeURIComponent(ad_group_id)) + '/suggest_bids', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method allows sellers to retrieve a list of keyword ideas to be targeted for Promoted Listings campaigns.
		 * Post ad_campaign/{campaign_id}/ad_group/{ad_group_id}/suggest_keywords
		 * @param {string} ad_group_id The ID of the ad group for which the keyword suggestions will be provided.
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {TargetedKeywordRequest} requestBody The required data to retrieve suggested keywords.
		 * @return {TargetedKeywordsPagedCollection} Success
		 */
		SuggestKeywords(ad_group_id: string, campaign_id: string, requestBody: TargetedKeywordRequest): Observable<TargetedKeywordsPagedCollection> {
			return this.http.post<TargetedKeywordsPagedCollection>(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/ad_group/' + (ad_group_id == null ? '' : encodeURIComponent(ad_group_id)) + '/suggest_keywords', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This method adds multiple listings that are managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a> to an existing Promoted Listings campaign.<br /><br />For Promoted Listings Standard (PLS) campaigns using the Cost Per Sale (CPS) model, bulk ads may be directly created for the listing.<br /><br />For each listing specified in the request, this method:<br /><ul><li>Creates an ad for the listing.</li> <li>Sets the bid percentage (also known as the <i>ad rate</i>) for the ads created.</li> <li>Associates the ads created with the specified campaign.</li></ul><br />To create ads for a listing, specify their <b>inventoryReferenceId</b> and <b>inventoryReferenceType</b>, plus the <b>bidPercentage</b> for the ad in the payload of the request. Specify the campaign to which you want to associate the ads using the <b>campaign_id</b> path parameter.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span><br /><br />Use <a href="/api-docs/sell/marketing/resources/campaign/methods/createCampaign">createCampaign</a> to create a new campaign and use <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to get a list of existing campaigns.
		 * Post ad_campaign/{campaign_id}/bulk_create_ads_by_inventory_reference
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created. Get a seller's campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.
		 * @param {BulkCreateAdsByInventoryReferenceRequest} requestBody The container for the bulk request to create ads for eBay inventory reference IDs. eBay inventory reference IDs are seller-defined IDs used by theInventory API.
		 * @return {BulkCreateAdsByInventoryReferenceResponse} Success
		 */
		BulkCreateAdsByInventoryReference(campaign_id: string, requestBody: BulkCreateAdsByInventoryReferenceRequest): Observable<BulkCreateAdsByInventoryReferenceResponse> {
			return this.http.post<BulkCreateAdsByInventoryReferenceResponse>(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/bulk_create_ads_by_inventory_reference', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This method adds multiple listings to an existing Promoted Listings campaign using <b>listingId</b> values generated by the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>, or using values generated by an ad group ID.<p>For Promoted Listings Standard (PLS) campaigns using the Cost Per Sale (CPS) funding model, bulk ads may be directly created for the listing.</p><p>For each listing ID specified in the request, this method:</p>  <ul><li>Creates an ad for the listing.</li> <li>Sets the bid percentage (also known as the <i>ad rate</i>) for the ad.</li> <li>Associates the ad with the specified campaign.</li></ul><p>To create an ad for a listing, specify its <b>listingId</b>, plus the <b>bidPercentage</b> for the ad in the payload of the request. Specify the campaign to associate the ads with using the <b>campaign_id</b> path parameter. Listing IDs are generated by eBay when a seller creates listings with the Trading API.</p><p>You can specify a maximum of <b>500 listings per call</b> and each campaign can have ads for a maximum of 50,000 items. Be aware when using this call that each variation in a multiple-variation listing creates an individual ad.</p><p>For Promoted Listings Advanced (PLA) campaigns using the Cost Per Click (CPC) funding model, an ad group must be created first. If no ad group has been created for the campaign, ads cannot be created.</p><p>For the ad group specified in the request, this method associates the ad with the specified ad group.</p><p>To create an ad for an ad group, specify the name of the ad group plus the <b>defaultBid</b> for the ad in the payload of the request. Specify the campaign to associate the ads with using the <b>campaign_id</b> path parameter. Ad groups are generated using the <a href="/api-docs/sell/marketing/resources/adgroup/methods/createAdGroup">createAdGroup</a>  method.</p> <p>You can specify one or more ad groups per campaign.</p><p>Use <a href="/api-docs/sell/marketing/resources/campaign/methods/createCampaign">createCampaign</a> to create a new campaign and use <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to get a list of existing campaigns.</p>
		 * Post ad_campaign/{campaign_id}/bulk_create_ads_by_listing_id
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.
		 * @param {BulkCreateAdRequest} requestBody The container for the bulk request to create ads for eBay listing IDs. eBay listing IDs are generated by the Trading API and Inventory API when the listing is created on eBay.
		 * @return {BulkAdResponse} Success
		 */
		BulkCreateAdsByListingId(campaign_id: string, requestBody: BulkCreateAdRequest): Observable<BulkAdResponse> {
			return this.http.post<BulkAdResponse>(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/bulk_create_ads_by_listing_id', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method adds keywords, in bulk, to an existing PLA ad group in a campaign that uses the Cost Per Click (CPC) funding model.<br /><br />This method also sets the CPC rate for each keyword.<br /><br />In the request, supply the <b>campaign_id</b> as a path parameter.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a specified seller.
		 * Post ad_campaign/{campaign_id}/bulk_create_keyword
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {BulkCreateKeywordRequest} requestBody A type that defines the fields for the bulk request to create keywords.
		 * @return {BulkCreateKeywordResponse} Success
		 */
		BulkCreateKeyword(campaign_id: string, requestBody: BulkCreateKeywordRequest): Observable<BulkCreateKeywordResponse> {
			return this.http.post<BulkCreateKeywordResponse>(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/bulk_create_keyword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This method works with listings created with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>.<br /><br />The method deletes a set of ads, as specified by a list of inventory reference IDs, from the specified campaign. <i>Inventory reference IDs</i> are seller-defined IDs that are used with the Inventory API</a>.<br /><br />Pass the <b>campaign_id</b> as a path parameter and populate the payload with a list of <b>inventoryReferenceId</b> and <b>inventoryReferenceType</b> pairs that you want to delete.<br /><br />Get the campaign IDs for a seller by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> and call <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a> to get a list of the seller's inventory reference IDs.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>
		 * Post ad_campaign/{campaign_id}/bulk_delete_ads_by_inventory_reference
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.
		 * @param {BulkDeleteAdsByInventoryReferenceRequest} requestBody This request works with listings created via the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a>.<br /><br />The request is to delete a set of ads in bulk, as specified by a list of inventory reference IDs from the specified campaign.
		 * @return {BulkDeleteAdsByInventoryReferenceResponse} Success
		 */
		BulkDeleteAdsByInventoryReference(campaign_id: string, requestBody: BulkDeleteAdsByInventoryReferenceRequest): Observable<BulkDeleteAdsByInventoryReferenceResponse> {
			return this.http.post<BulkDeleteAdsByInventoryReferenceResponse>(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/bulk_delete_ads_by_inventory_reference', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This method works with listing IDs created with either the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>.<br /><br />The method deletes a set of ads, as specified by a list of <b>listingID</b> values from a Promoted Listings campaign. A listing ID value is generated by eBay when a seller creates a listing with either the Trading API and Inventory API.<br /><br />Pass the <b>campaign_id</b> as a path parameter and populate the payload with the set of listing IDs that you want to delete.<br /><br />Get the campaign IDs for a seller by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> and call <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a> to get a list of the seller's inventory reference IDs.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span><br /><br />When using the CPC funding model, use the <a href="/api-docs/sell/marketing/resources/ad/methods/bulkUpdateAdsStatusByListingId">bulkUpdateAdsStatusByListingId</a> method to change the status of ads to ARCHIVED.
		 * Post ad_campaign/{campaign_id}/bulk_delete_ads_by_listing_id
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.
		 * @param {BulkDeleteAdRequest} requestBody This request object defines the fields for the <b>bulkDeleteAdsByListingId</b> request.
		 * @return {BulkDeleteAdResponse} Success
		 */
		BulkDeleteAdsByListingId(campaign_id: string, requestBody: BulkDeleteAdRequest): Observable<BulkDeleteAdResponse> {
			return this.http.post<BulkDeleteAdResponse>(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/bulk_delete_ads_by_listing_id', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This method works with listings created with either the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>.  <p>The method updates the <b>bidPercentage</b> values for a set of ads associated with the specified campaign.</p>  <p>Specify the <b>campaign_id</b> as a path parameter and supply a set of listing IDs with their associated updated <b>bidPercentage</b> values in the request body. An eBay listing ID is generated when a listing is created with the Trading API.</p>  <p>Get the campaign IDs for a seller by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> and call <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a> to get a list of the seller's inventory reference IDs.</p><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>
		 * Post ad_campaign/{campaign_id}/bulk_update_ads_bid_by_inventory_reference
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.
		 * @param {BulkCreateAdsByInventoryReferenceRequest} requestBody This request object defines the fields for the <b>BulkCreateAdsByInventoryReference</b> request.
		 * @return {BulkUpdateAdsByInventoryReferenceResponse} Success
		 */
		BulkUpdateAdsBidByInventoryReference(campaign_id: string, requestBody: BulkCreateAdsByInventoryReferenceRequest): Observable<BulkUpdateAdsByInventoryReferenceResponse> {
			return this.http.post<BulkUpdateAdsByInventoryReferenceResponse>(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/bulk_update_ads_bid_by_inventory_reference', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This method works with listings created with either the <a href="/Devzone/XML/docs/Reference/eBay/index.html" title="Trading API Reference">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>.  <p>The method updates the <b>bidPercentage</b> values for a set of ads associated with the specified campaign.</p>  <p>Specify the <b>campaign_id</b> as a path parameter and supply a set of listing IDs with their associated updated <b>bidPercentage</b> values in the request body. An eBay listing ID is generated when a listing is created with the Trading API.</p>  <p>Get the campaign IDs for a seller by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> and call <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a> to get a list of the seller's inventory reference IDs.</p><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>
		 * Post ad_campaign/{campaign_id}/bulk_update_ads_bid_by_listing_id
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a>.
		 * @param {BulkCreateAdRequest} requestBody This request object defines the fields for the <b>BulkCreateAdsByListingId</b> request.
		 * @return {BulkAdUpdateResponse} Success
		 */
		BulkUpdateAdsBidByListingId(campaign_id: string, requestBody: BulkCreateAdRequest): Observable<BulkAdUpdateResponse> {
			return this.http.post<BulkAdUpdateResponse>(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/bulk_update_ads_bid_by_listing_id', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method works with listings created with either the <a href= "/Devzone/XML/docs/Reference/eBay/index.html">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a>.<br /><br />This method updates the status of ads in bulk.<br /><br />Specify the <b>campaign_id</b> you want to update as a URI parameter, and configure the <b>adGroupStatus</b> in the request payload.
		 * Post ad_campaign/{campaign_id}/bulk_update_ads_status
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {BulkUpdateAdStatusRequest} requestBody The bulk request to update the ads.
		 * @return {BulkAdUpdateStatusResponse} Success
		 */
		BulkUpdateAdsStatus(campaign_id: string, requestBody: BulkUpdateAdStatusRequest): Observable<BulkAdUpdateStatusResponse> {
			return this.http.post<BulkAdUpdateStatusResponse>(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/bulk_update_ads_status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method works with listings created with either the <a href="/Devzone/XML/docs/Reference/eBay/index.html">Trading API</a> or the <a href="/api-docs/sell/inventory/resources/methods">Inventory API</a>.<br /><br />The method updates the status of ads in bulk, based on listing ID values.<br /><br />Specify the <b>campaign_id</b> as a path parameter and supply a set of listing IDs with their updated <b>adStatus</b> values in the request body. An eBay listing ID is generated when a listing is created with the Trading API.<br /><br />Get the campaign IDs for a seller by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> and call <a href="/api-docs/sell/marketing/resources/ad/methods/getAds">getAds</a> to retrieve a list of seller inventory reference IDs.
		 * Post ad_campaign/{campaign_id}/bulk_update_ads_status_by_listing_id
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {BulkUpdateAdStatusByListingIdRequest} requestBody The bulk request to update ads.
		 * @return {BulkAdUpdateStatusByListingIdResponse} Success
		 */
		BulkUpdateAdsStatusByListingId(campaign_id: string, requestBody: BulkUpdateAdStatusByListingIdRequest): Observable<BulkAdUpdateStatusByListingIdResponse> {
			return this.http.post<BulkAdUpdateStatusByListingIdResponse>(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/bulk_update_ads_status_by_listing_id', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the bids and statuses of keywords, in bulk, for an existing PLA campaign.<br /><br />In the request, supply the <b>campaign_id</b> as a path parameter.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a specified seller.
		 * Post ad_campaign/{campaign_id}/bulk_update_keyword
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {BulkUpdateKeywordRequest} requestBody A type that defines the fields for the bulk request to update keywords.
		 * @return {BulkUpdateKeywordResponse} Success
		 */
		BulkUpdateKeyword(campaign_id: string, requestBody: BulkUpdateKeywordRequest): Observable<BulkUpdateKeywordResponse> {
			return this.http.post<BulkUpdateKeywordResponse>(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/bulk_update_keyword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This method clones (makes a copy of) the specified campaign's <b>campaign criterion</b>. The <b>campaign criterion</b> is a container for the fields that define the criteria for a rule-based campaign.<p>To clone a campaign, supply the <b>campaign_id</b> as a path parameter in your call. There is no request payload.</p>  <p>The ID of the newly-cloned campaign is returned in the <b>Location</b> response header.</p><p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a seller's current campaign IDs.</p>  <p><b>Requirement: </b>In order to clone a campaign, the <b>campaignStatus</b> must be <code>ENDED</code> and the campaign must define a set of selection rules (it must be a rules-based campaign).</p><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>
		 * Post ad_campaign/{campaign_id}/clone
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created. This ID is the campaign ID of the campaign being cloned.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {CloneCampaignRequest} requestBody This type defines the fields for a clone campaign request.
		 * @return {void} 
		 */
		CloneCampaign(campaign_id: string, requestBody: CloneCampaignRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/clone', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method adds a listing that is managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a> to an existing Promoted Listings campaign.<br /><br />For Promoted Listings Standard (PLS) campaigns using the Cost Per Sale (CPS) funding model, an ad may be directly created for the listing.<br /><br />For each listing specified in the request, this method:<br /><ul><li>Creates an ad for the listing.</li> <li>Sets the bid percentage (also known as the <i>ad rate</i>) for the ads created.</li> <li>Associates the created ad with the specified campaign.</li></ul><br />To create an ad for a listing, specify its <b>inventoryReferenceId</b> and <b>inventoryReferenceType</b>, plus the <b>bidPercentage</b> for the ad in the payload of the request. Specify the campaign to associate the ad with using the <b>campaign_id</b> path parameter.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span><br /><br />Use <a href="/api-docs/sell/marketing/resources/campaign/methods/createCampaign">createCampaign</a> to create a new campaign and use <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to get a list of existing campaigns.
		 * Post ad_campaign/{campaign_id}/create_ads_by_inventory_reference
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {CreateAdsByInventoryReferenceRequest} requestBody This request object defines the fields used in the <b>createAdsByInventoryReference</b> request.
		 * @return {void} 
		 */
		CreateAdsByInventoryReference(campaign_id: string, requestBody: CreateAdsByInventoryReferenceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/create_ads_by_inventory_reference', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method works with listings that are managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a>.  <p>The method deletes ads using a list of seller-defined inventory reference IDs, used with the Inventory API, that are associated with the specified campaign ID.</p> <p>Specify the campaign ID (as a path parameter) and a list of <b>inventoryReferenceId</b> and <b>inventoryReferenceType</b> pairs to be deleted.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to get a list of the seller's current campaign IDs.</p><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span><br /><br />When using the CPC funding model, use the bulkUpdateAdsStatusByInventoryReference method to change the status of ads to ARCHIVED.
		 * Post ad_campaign/{campaign_id}/delete_ads_by_inventory_reference
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {DeleteAdsByInventoryReferenceRequest} requestBody This request object defines the fields for the <b>deleteAdsByInventoryReference</b> request.
		 * @return {AdIds} Success
		 */
		DeleteAdsByInventoryReference(campaign_id: string, requestBody: DeleteAdsByInventoryReferenceRequest): Observable<AdIds> {
			return this.http.post<AdIds>(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/delete_ads_by_inventory_reference', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This method ends an active (<code>RUNNING</code>) or paused campaign. Specify the campaign you want to end by supplying its campaign ID in a query parameter.  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller's campaigns.</p>
		 * Post ad_campaign/{campaign_id}/end
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @return {void} 
		 */
		EndCampaign(campaign_id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/end', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * This method retrieves Promoted Listings ads associated with listings that are managed with the <a href="/api-docs/sell/inventory/resources/methods" title="Inventory API Reference">Inventory API</a> from the specified campaign.<br /><br />Supply the <b>campaign_id</b> as a path parameter and use query parameters to specify the <b>inventory_reference_id</b> and <b>inventory_reference_type</b> pairs.<br /><br />In the Inventory API, an <i>inventory reference ID</i> is either a seller-defined <b>SKU</b> value or an <b>inventoryItemGroupKey</b> (a seller-defined ID for an inventory item group, which is an entity that's used in the Inventory API to create a multiple-variation listing). To indicate a listing managed by the Inventory API, you must always specify both an <b>inventory_reference_id</b> and the associated <b>inventory_reference_type</b>.<br /><br />Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve all of the seller's the current campaign IDs.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>
		 * Get ad_campaign/{campaign_id}/get_ads_by_inventory_reference
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {string} inventory_reference_id The inventory reference ID associated with the ad you want returned. A seller's inventory reference ID is the ID of either a listing or the ID of an inventory item group (the parent of a multi-variation listing, such as a shirt that is available in multiple sizes and colors). You must always supply in both an <b>inventory_reference_id</b> and an <b>inventory_reference_type</b>.
		 * @param {string} inventory_reference_type The type of the inventory reference ID. Set this value to either <code>INVENTORY_ITEM</CODE> (a single listing) or <code>INVENTORY_ITEM_GROUP</CODE> (a multi-variation listing). You must always pass in both an <b>inventory_reference_id</b> and an <b>inventory_reference_type</b>. 
		 * @return {Ads} Success
		 */
		GetAdsByInventoryReference(campaign_id: string, inventory_reference_id: string, inventory_reference_type: string): Observable<Ads> {
			return this.http.get<Ads>(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/get_ads_by_inventory_reference&inventory_reference_id=' + (inventory_reference_id == null ? '' : encodeURIComponent(inventory_reference_id)) + '&inventory_reference_type=' + (inventory_reference_type == null ? '' : encodeURIComponent(inventory_reference_type)), {});
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method can be used to retrieve all of the keywords for ad groups in PLA campaigns that use the Cost Per Click (CPC) funding model.<br /><br />In the request, specify the <b>campaign_id</b> as a path parameter. If one or more <b>ad_group_ids</b> are passed in the request body, the keywords for those ad groups will be returned. If <b>ad_group_ids</b> are not passed in the response body, the call will return all the keywords in the campaign.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller.
		 * Get ad_campaign/{campaign_id}/keyword
		 * @param {string} ad_group_ids A comma-separated list of ad group IDs. This query parameter is used if the seller wants to retrieve keywords from one or more specific ad groups. If this query parameter is not used, all keywords that are part of the CPC campaign are returned.<span class="tablenote"><b>Note:</b>You can call the <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a>  method to retrieve the ad group IDs for a seller.</span>
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {string} keyword_status A comma-separated list of keyword statuses. The results will be filtered to only include the given statuses of the keyword. If none are provided, all keywords are returned.
		 * @param {string} limit <p>Specifies the maximum number of results to return on a page in the paginated response.</p>  <b>Default: </b>10 <br><b>Maximum: </b> 500
		 * @param {string} offset Specifies the number of results to skip in the result set before returning the first report in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>
		 * @return {KeywordPagedCollectionResponse} Success
		 */
		GetKeywords(ad_group_ids: string | null | undefined, campaign_id: string, keyword_status: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined): Observable<KeywordPagedCollectionResponse> {
			return this.http.get<KeywordPagedCollectionResponse>(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/keyword?ad_group_ids=' + (ad_group_ids == null ? '' : encodeURIComponent(ad_group_ids)) + '&keyword_status=' + (keyword_status == null ? '' : encodeURIComponent(keyword_status)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), {});
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method creates keywords using a specified campaign ID for an existing PLA campaign.<br /><br />In the request, supply the <b>campaign_id</b> as a path parameter.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/suggestKeywords">suggestKeywords</a> method to retrieve a list of keyword ideas to be targeted for PLA campaigns, and call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller.
		 * Post ad_campaign/{campaign_id}/keyword
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {CreateKeywordRequest} requestBody A type that defines the fields for the request to create a keyword.
		 * @return {void} 
		 */
		CreateKeyword(campaign_id: string, requestBody: CreateKeywordRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/keyword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method retrieves details on a specific keyword from an ad group within a PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />In the request, specify the <b>campaign_id</b> and <b>keyword_id</b> as path parameters.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller and call the <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeywords">getKeywords</a> method to retrieve their keyword IDs.
		 * Get ad_campaign/{campaign_id}/keyword/{keyword_id}
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {string} keyword_id This path parameter is used to identify the keyword to retrieve.
		 * @return {Keyword} Success
		 */
		GetKeyword(campaign_id: string, keyword_id: string): Observable<Keyword> {
			return this.http.get<Keyword>(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/keyword/' + (keyword_id == null ? '' : encodeURIComponent(keyword_id)), {});
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates keywords using a campaign ID and keyword ID for an existing PLA campaign.<br /><br />In the request, specify the <b>campaign_id</b> and <b>keyword_id</b> as path parameters.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller and call the <a href="/api-docs/sell/marketing/resources/keyword/methods/getKeywords">getKeywords</a> method to retrieve their keyword IDs.
		 * Put ad_campaign/{campaign_id}/keyword/{keyword_id}
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {string} keyword_id A unique eBay-assigned ID that is generated when a keyword is created.
		 * @param {UpdateKeywordRequest} requestBody A type that defines the fields for the request to update a keyword.
		 * @return {void} 
		 */
		UpdateKeyword(campaign_id: string, keyword_id: string, requestBody: UpdateKeywordRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/keyword/' + (keyword_id == null ? '' : encodeURIComponent(keyword_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method pauses an active (RUNNING) campaign.  <p>You can restart the campaign by calling <a href="/api-docs/sell/marketing/resources/campaign/methods/resumeCampaign">resumeCampaign</a>, as long as the campaign's end date is in the future.</p>  <p><b>Note: </b> The listings associated with a paused campaign cannot be added into another campaign.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller's campaigns.</p>
		 * Post ad_campaign/{campaign_id}/pause
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @return {void} 
		 */
		PauseCampaign(campaign_id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/pause', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * This method resumes a paused campaign, as long as its end date is in the future. Supply the <b>campaign_id</b> for the campaign you want to restart as a query parameter in the request.  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve the <b>campaign_id</b> and the campaign status (<code>RUNNING</code>, <code>PAUSED</code>, <code>ENDED</code>, and so on) for all the seller's campaigns.</p>
		 * Post ad_campaign/{campaign_id}/resume
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @return {void} 
		 */
		ResumeCampaign(campaign_id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/resume', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method allows sellers to obtain ideas for listings, which can be targeted for Promoted Listings campaigns.
		 * Get ad_campaign/{campaign_id}/suggest_items
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {string} category_ids Specifies the category ID that is used to limit the results. This refers to an exact leaf category (the lowest level in that category and has no children). This field can have one category ID, or a comma-separated list of IDs. To return all category IDs, set to <code>null</code>. <br /><br /><b>Maximum: </b> 10 
		 * @param {string} limit Specifies the maximum number of campaigns to return on a page in the paginated response. If no value is specified, the default value is used. <br /><br /><b>Default: </b>10 <br /><br /><b>Minimum: </b> 1<br /><br /><b>Maximum: </b> 1000
		 * @param {string} offset Specifies the number of campaigns to skip in the result set before returning the first report in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>
		 * @return {TargetedAdsPagedCollection} Success
		 */
		SuggestItems(campaign_id: string, category_ids: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined): Observable<TargetedAdsPagedCollection> {
			return this.http.get<TargetedAdsPagedCollection>(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/suggest_items&category_ids=' + (category_ids == null ? '' : encodeURIComponent(category_ids)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), {});
		}

		/**
		 * This method updates the ad rate strategy for an existing Promoted Listings Standard (PLS) rules-based ad campaign that uses the Cost Per Sale (CPS) funding model.<br /><br />Specify the <b>campaign_id</b> as a path parameter. You can retrieve the campaign IDs for a seller by calling the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.<br /><br /><span class="tablenote"><b>Note:</b> This method only applies to the CPS funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href="/api-docs/sell/static/marketing/pl-overview.html#funding-model">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>
		 * Post ad_campaign/{campaign_id}/update_ad_rate_strategy
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {UpdateAdrateStrategyRequest} requestBody This type defines the request fields for the ad rate strategy that shall be updated.
		 * @return {void} 
		 */
		UpdateAdRateStrategy(campaign_id: string, requestBody: UpdateAdrateStrategyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/update_ad_rate_strategy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the daily budget for a PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />A click occurs when an eBay user finds and clicks on the seller’s listing (within the search results) after using a keyword that the seller has created for the campaign. For each ad in an ad group in the campaign, each click triggers a cost, which gets subtracted from the campaign’s daily budget. If the cost of the clicks exceeds the daily budget, the Promoted Listings campaign will be paused until the next day.<br /><br />Specify the <b>campaign_id</b> as a path parameter. You can retrieve the campaign IDs for a seller by calling the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.
		 * Post ad_campaign/{campaign_id}/update_campaign_budget
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {UpdateCampaignBudgetRequest} requestBody This type defines the request fields for the budget details that shall be updated.
		 * @return {void} 
		 */
		UpdateCampaignBudget(campaign_id: string, requestBody: UpdateCampaignBudgetRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/update_campaign_budget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method can be used to change the name of a campaign, as well as modify the start or end dates. <p>Specify the <b>campaign_id</b> you want to update as a URI parameter, and configure the <b>campaignName</b> and <b>startDate</b> in the request payload.  <p>If you want to change only the end date of the campaign, specify the current campaign name, set <b>endDate</b> as desired, and set <b>startDate</b> to the actual start date of the campaign. This applies if the campaign status is <code>RUNNING</code> or <code>PAUSED</code>. You can retrieve the <b>startDate</b> using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaign#response.startDate">getCampaign</a> method.</p> <p>Note that if you do not set a new end date in this call, any current <b>endDate</b> value will be set to <code>null</code>. To preserve the currently-set end date, you must specify the value again in your request.</p>  <p>Call <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> to retrieve a seller's campaign details, including the campaign ID, campaign name, and the start and end dates of the campaign.
		 * Post ad_campaign/{campaign_id}/update_campaign_identification
		 * @param {string} campaign_id A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class="tablenote"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method.</span>
		 * @param {UpdateCampaignIdentificationRequest} requestBody This type defines the fields to update the campaign name and start and end dates.
		 * @return {void} 
		 */
		UpdateCampaignIdentification(campaign_id: string, requestBody: UpdateCampaignIdentificationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ad_campaign/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/update_campaign_identification', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This call downloads the report as specified by the <b>report_id</b> path parameter.  <br><br>Call <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/createReportTask" title="createReportTask API docs">createReportTask</a> to schedule and generate a Promoted Listings report. All date values are returned in UTC format (<code>yyyy-MM-ddThh:mm:ss.sssZ</code>).<br/><br/><span class="tablenote"><b>Note:</b> The reporting of some data related to sales and ad-fees may require a 72-hour (<b>maximum</b>) adjustment period which is often referred to as the <i>Reconciliation Period</i>. Such adjustment periods should, on average, be minimal. However, at any given time, the <b>payments</b> tab may be used to view those amounts that have actually been charged.</span><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>For <b>ad_report</b> and <b>ad_report_task</b> methods, the API call limit is subject to a per user quota. These API calls can <b>only</b> be executed a maximum of 200 times per hour for each seller/user. If the number of calls per hour exceeds this limit, any new calls will be blocked for the next hour.</p></div>
		 * Get ad_report/{report_id}
		 * @param {string} report_id The unique ID of the Promoted Listings report you want to get. <p>This ID is generated by eBay when you run a report task with a call to <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/createReportTask">createReportTask</a>. Get all the seller's report IDs by calling <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/getReportTasks">getReportTasks</a>.</p>
		 * @return {void} Success
		 */
		GetReport(report_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ad_report/' + (report_id == null ? '' : encodeURIComponent(report_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This call retrieves information that details the fields used in each of the Promoted Listings reports. Use the returned information to configure the different types of Promoted Listings reports.</br></br>The request for this method does not use a payload or any URI parameters.<br/><br/><span class="tablenote"><b>Note:</b> The reporting of some data related to sales and ad-fees may require a 72-hour (<b>maximum</b>) adjustment period which is often referred to as the <i>Reconciliation Period</i>. Such adjustment periods should, on average, be minimal. However, at any given time, the <b>payments</b> tab may be used to view those amounts that have actually been charged.</span>
		 * Get ad_report_metadata
		 * @return {ReportMetadatas} Success
		 */
		GetReportMetadata(): Observable<ReportMetadatas> {
			return this.http.get<ReportMetadatas>(this.baseUri + 'ad_report_metadata', {});
		}

		/**
		 * This call retrieves metadata that details the fields used by a specific Promoted Listings report type. Use the <b>report_type</b> path parameter to indicate metadata to retrieve.<br/><br/>This method does not use a request payload.<br/><br/><span class="tablenote"><b>Note:</b> The reporting of some data related to sales and ad-fees may require a 72-hour (<b>maximum</b>) adjustment period which is often referred to as the <i>Reconciliation Period</i>. Such adjustment periods should, on average, be minimal. However, at any given time, the <b>payments</b> tab may be used to view those amounts that have actually been charged.</span>
		 * Get ad_report_metadata/{report_type}
		 * @param {string} report_type The name of the report type whose metadata you want to retrieve.<br /><br /><span class="tablenote"><b>Tip:</b> For details about available report types and their descriptions, refer to the <a href="/api-docs/sell/marketing/types/plr:ReportTypeEnum">ReportTypeEnum</a>.</span>
		 * @return {ReportMetadata} Success
		 */
		GetReportMetadataForReportType(report_type: string): Observable<ReportMetadata> {
			return this.http.get<ReportMetadata>(this.baseUri + 'ad_report_metadata/' + (report_type == null ? '' : encodeURIComponent(report_type)), {});
		}

		/**
		 * This method returns information on all the existing report tasks related to a seller. <p>Use the <b>report_task_statuses</b> query parameter to control which reports to return. You can paginate the result set by specifying a <b>limit</b>, which dictates how many report tasks to return on each page of the response. Use the <b>offset</b> parameter to specify how many reports to skip in the result set before returning the first result.</p><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>For <b>ad_report</b> and <b>ad_report_task</b> methods, the API call limit is subject to a per user quota. These API calls can <b>only</b> be executed a maximum of 200 times per hour for each seller/user. If the number of calls per hour exceeds this limit, any new calls will be blocked for the next hour.</p></div>
		 * Get ad_report_task
		 * @param {string} limit Specifies the maximum number of report tasks to return on a page in the paginated response.  <p><b>Default:</b> 10<br><b>Maximum:</b> 500</p>
		 * @param {string} offset Specifies the number of report tasks to skip in the result set before returning the first report in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the reports returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the response contains the first 10 reports from the complete list of report tasks retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>10</code>, the first page of the response contains reports 11-20 from the complete result set.</p> <b>Default:</b> 0
		 * @param {string} report_task_statuses This parameter filters the returned report tasks by their status. Supply a comma-separated list of the report statuses you want returned. The results are filtered to include only the report statuses you specify.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The results might not include some report tasks if other search conditions exclude them.</span><br /><br /><b>Valid values: </b> <br>&nbsp;&nbsp;&nbsp;<code>PENDING</code> <br>&nbsp;&nbsp;&nbsp;<code>SUCCESS</code> <br>&nbsp;&nbsp;&nbsp;<code>FAILED</code>
		 * @return {ReportTaskPagedCollection} Success
		 */
		GetReportTasks(limit: string | null | undefined, offset: string | null | undefined, report_task_statuses: string | null | undefined): Observable<ReportTaskPagedCollection> {
			return this.http.get<ReportTaskPagedCollection>(this.baseUri + 'ad_report_task?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&report_task_statuses=' + (report_task_statuses == null ? '' : encodeURIComponent(report_task_statuses)), {});
		}

		/**
		 * <span class="tablenote"><b>Note:</b> Using multiple funding models in one report is deprecated. If multiple funding models are used, a Warning will be returned in a header. This functionality will be decommissioned on April 3, 2023. See <a href="/develop/apis/api-deprecation-status">API Deprecation Status</a> for details.</span><br /><br />This method creates a <i>report task</i>, which generates a Promoted Listings report based on the values specified in the call.<br /><br />The report is generated based on the criteria you specify, including the report type, the report's dimensions and metrics, the report's start and end dates, the listings to include in the report, and more. <i>Metrics </i>are the quantitative measurements in the report while <i>dimensions</i> specify the attributes of the data included in the reports.<br /><br />When creating a report task, you can specify the items you want included in the report. The items you specify, using either <b>listingId</b> or <b>inventoryReference</b> values, must be in a Promoted Listings campaign for them to be included in the report.<br /><br />For details on the required and optional fields for each report type, see <a href="/api-docs/sell/static/marketing/pl-reports.html">Promoted Listings reporting</a>.<br /><br />This call returns the URL to the report task in the <b>Location</b> response header, and the URL includes the report-task ID.<br /><br />Reports often take time to generate and it's common for this call to return an HTTP status of <code>202</code>, which indicates the report is being generated. Call <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/getReportTasks">getReportTasks</a> (or <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/getReportTask">getReportTask</a> with the report-task ID) to determine the status of a Promoted Listings report. When a report is complete, eBay sets its status to <b>SUCCESS</b> and you can download it using the URL returned in the <b>reportHref</b> field of the <b>getReportTask</b> call. Report files are tab-separated value gzip files with a file extension of <code>.tsv.gz</code>.<br/><br/><span class="tablenote"><b>Note:</b> The reporting of some data related to sales and ad-fees may require a 72-hour (<b>maximum</b>) adjustment period which is often referred to as the <i>Reconciliation Period</i>. Such adjustment periods should, on average, be minimal. However, at any given time, the <b>payments</b> tab may be used to view those amounts that have actually been charged.</span><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> This call fails if you don't submit all the required fields for the specified report type. Fields not supported by the specified report type are ignored. Call <a href="/api-docs/sell/marketing/resources/ad_report_metadata/methods/getReportMetadata">getReportMetadata</a> to retrieve a list of the fields you need to configure for each Promoted Listings report type.</span><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>For <b>ad_report</b> and <b>ad_report_task</b> methods, the API call limit is subject to a per user quota. These API calls can <b>only</b> be executed a maximum of 200 times per hour for each seller/user. If the number of calls per hour exceeds this limit, any new calls will be blocked for the next hour.</p></div>
		 * Post ad_report_task
		 * @param {CreateReportTask} requestBody The container for the fields that define the report task.
		 * @return {void} 
		 */
		CreateReportTask(requestBody: CreateReportTask): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'ad_report_task', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This call deletes the report task specified by the <b>report_task_id</b> path parameter. This method also deletes any reports generated by the report task.  <p>Report task IDs are generated by eBay when you call <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/createReportTask">createReportTask</a>. Get a complete list of a seller's report-task IDs by calling <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/getReportTasks">getReportTasks</a>.</p><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>For <b>ad_report</b> and <b>ad_report_task</b> methods, the API call limit is subject to a per user quota. These API calls can <b>only</b> be executed a maximum of 200 times per hour for each seller/user. If the number of calls per hour exceeds this limit, any new calls will be blocked for the next hour.</p></div>
		 * Delete ad_report_task/{report_task_id}
		 * @param {string} report_task_id A unique eBay-assigned ID for the report task that's generated when the report task is created by a call to <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/createReportTask">createReportTask</a>.
		 * @return {void} 
		 */
		DeleteReportTask(report_task_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'ad_report_task/' + (report_task_id == null ? '' : encodeURIComponent(report_task_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This call returns the details of a specific Promoted Listings report task, as specified by the <b>report_task_id</b> path parameter. <p>The report task includes the report criteria (such as the report dimensions, metrics, and included listing) and the report-generation rules (such as starting and ending dates for the specified report task).</p>  <p>Report-task IDs are generated by eBay when you call <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/createReportTask">createReportTask</a>. Get a complete list of a seller's report-task IDs by calling <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/getReportTasks">getReportTasks</a>.</p><br/><div class="msgbox_important"><p class="msgbox_importantInDiv" data-mc-autonum="&lt;b&gt;&lt;span style=&quot;color: #dd1e31;&quot; class=&quot;mcFormatColor&quot;&gt;Important! &lt;/span&gt;&lt;/b&gt;"><span class="autonumber"><span><b><span style="color: #dd1e31;" class="mcFormatColor">Important!</span></b></span></span>For <b>ad_report</b> and <b>ad_report_task</b> methods, the API call limit is subject to a per user quota. These API calls can <b>only</b> be executed a maximum of 200 times per hour for each seller/user. If the number of calls per hour exceeds this limit, any new calls will be blocked for the next hour.</p></div>
		 * Get ad_report_task/{report_task_id}
		 * @param {string} report_task_id A unique eBay-assigned ID for the report task that's generated when the report task is created by a call to <a href="/api-docs/sell/marketing/resources/ad_report_task/methods/createReportTask">createReportTask</a>.
		 * @return {ReportTask} Success
		 */
		GetReportTask(report_task_id: string): Observable<ReportTask> {
			return this.http.get<ReportTask>(this.baseUri + 'ad_report_task/' + (report_task_id == null ? '' : encodeURIComponent(report_task_id)), {});
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method adds negative keywords, in bulk, to an existing ad group in a PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />Specify the <b>campaignId</b> and <b>adGroupId</b> in the request body, along with the <b>negativeKeywordText</b> and <b>negativeKeywordMatchType</b>.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a specified seller.
		 * Post bulk_create_negative_keyword
		 * @param {BulkCreateNegativeKeywordRequest} requestBody A type that defines the fields for the bulk request to create negative keywords.
		 * @return {BulkCreateNegativeKeywordResponse} Success
		 */
		BulkCreateNegativeKeyword(requestBody: BulkCreateNegativeKeywordRequest): Observable<BulkCreateNegativeKeywordResponse> {
			return this.http.post<BulkCreateNegativeKeywordResponse>(this.baseUri + 'bulk_create_negative_keyword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the statuses of existing negative keywords, in bulk.<br /><br />Specify the <b>negativeKeywordId</b> and <b>negativeKeywordStatus</b> in the request body.
		 * Post bulk_update_negative_keyword
		 * @param {BulkUpdateNegativeKeywordRequest} requestBody A type that defines the fields for the bulk request to update negative keyword statuses.
		 * @return {BulkUpdateNegativeKeywordResponse} Success
		 */
		BulkUpdateNegativeKeyword(requestBody: BulkUpdateNegativeKeywordRequest): Observable<BulkUpdateNegativeKeywordResponse> {
			return this.http.post<BulkUpdateNegativeKeywordResponse>(this.baseUri + 'bulk_update_negative_keyword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This method creates an <b>item price markdown promotion</b> (know simply as a "markdown promotion") where a discount amount is applied directly to the items included the promotion. Discounts can be specified as either a monetary amount or a percentage off the standard sales price. eBay highlights promoted items by placing teasers for the items throughout the online sales flows.  <p>Unlike an <a href="/api-docs/sell/marketing/resources/item_promotion/methods/createItemPromotion">item promotion</a>, a markdown promotion does not require the buyer meet a "threshold" before the offer takes effect. With markdown promotions, all the buyer needs to do is purchase the item to receive the promotion benefit.</p>  <p class="tablenote"><b>Important:</b> There are some restrictions for which listings are available for price markdown promotions. For details, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>. <br><br>In addition, we recommend you list items at competitive prices before including them in your markdown promotions. For an extensive list of pricing recommendations, see the <b>Growth</b> tab in Seller Hub.</p> <p>There are two ways to add items to markdown promotions:</p> <ul><li><b>Key-based promotions</b> select items using either the listing IDs or inventory reference IDs of the items you want to promote. Note that if you use inventory reference IDs, you must specify both the <b>inventoryReferenceId</b> and the associated <b>inventoryReferenceType</b> of the item(s) you want to include the promotion.</li>  <li><b>Rule-based promotions</b> select items using a list of eBay category IDs or seller Store category IDs. Rules can further constrain items in a promotion by minimum and maximum prices, brands, and item conditions.</li></ul>  <p>New promotions must be created in either a <code>DRAFT</code> or a <code>SCHEDULED</code> state. Use the DRAFT state when you are initially creating a promotion and you want to be sure it's correctly configured before scheduling it to run. When you create a promotion, the promotion ID is returned in the <b>Location</b> response header. Use this ID to reference the promotion in subsequent requests (such as to schedule a promotion that's in a DRAFT state).</p>  <p class="tablenote"><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/promotions-manager.html">Promotions Manager</a> in the <i>Selling Integration Guide</i> for details and examples showing how to create and manage seller promotions.</p>  <p>Markdown promotions are available on all eBay marketplaces. For more information, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>.</p>
		 * Post item_price_markdown
		 * @param {ItemPriceMarkdown} requestBody This type defines the fields that describe an item price markdown promotion.
		 * @return {void} 
		 */
		CreateItemPriceMarkdownPromotion(requestBody: ItemPriceMarkdown): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'item_price_markdown', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method deletes the item price markdown promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <br><br>You can delete any promotion with the exception of those that are currently active (RUNNING). To end a running promotion, call <a href="/api-docs/sell/marketing/resources/item_price_markdown/methods/updateItemPriceMarkdownPromotion">updateItemPriceMarkdownPromotion</a> and adjust the <b>endDate</b> field as appropriate.
		 * Delete item_price_markdown/{promotion_id}
		 * @param {string} promotion_id This path parameter takes a concatenation of the ID of the promotion you want to delete plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>
		 * @return {void} 
		 */
		DeleteItemPriceMarkdownPromotion(promotion_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'item_price_markdown/' + (promotion_id == null ? '' : encodeURIComponent(promotion_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This method returns the complete details of the item price markdown promotion that's indicated by the <b>promotion_id</b> path parameter. <br><br>Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.
		 * Get item_price_markdown/{promotion_id}
		 * @param {string} promotion_id This path parameter takes a concatenation of the ID of the promotion you want to get plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>
		 * @return {ItemPriceMarkdown} Success
		 */
		GetItemPriceMarkdownPromotion(promotion_id: string): Observable<ItemPriceMarkdown> {
			return this.http.get<ItemPriceMarkdown>(this.baseUri + 'item_price_markdown/' + (promotion_id == null ? '' : encodeURIComponent(promotion_id)), {});
		}

		/**
		 * This method updates the specified item price markdown promotion with the new configuration that you supply in the payload of the request. Specify the promotion you want to update using the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <br><br>When updating a promotion, supply all the fields that you used to configure the original promotion (and not just the fields you are updating). eBay replaces the specified promotion with the values you supply in the update request and if you don't pass a field that currently has a value, the update request fails.  <br><br>The parameters you are allowed to update with this request depend on the status of the promotion you're updating:  <ul><li>DRAFT or SCHEDULED promotions: You can update any of the parameters in these promotions that have not yet started to run, including the <b>discountRules</b>.</li> <li>RUNNING promotions: You can change the <b>endDate</b> and the item's inventory but you cannot change the promotional discount or the promotion's start date.</li> <li>ENDED promotions: Nothing can be changed.</li></ul>
		 * Put item_price_markdown/{promotion_id}
		 * @param {string} promotion_id This path parameter takes a concatenation of the ID of the promotion you want to update plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>
		 * @param {ItemPriceMarkdown} requestBody This type defines the fields that describe an item price markdown promotion.
		 * @return {string} Success
		 */
		UpdateItemPriceMarkdownPromotion(promotion_id: string, requestBody: ItemPriceMarkdown): Observable<string> {
			return this.http.put(this.baseUri + 'item_price_markdown/' + (promotion_id == null ? '' : encodeURIComponent(promotion_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * This method creates an <b>item promotion</b>, where the buyer receives a discount when they meet the buying criteria that's set for the promotion. Known here as "threshold promotions", these promotions trigger when a threshold is met.  <p>eBay highlights promoted items by placing teasers for the promoted items throughout the online buyer flows.</p>  <p><i>Discounts</i> are specified as either a monetary amount or a percentage off the standard sales price of a listing, letting you offer deals such as "Buy 1 Get 1" and "Buy $50, get 20% off".</p> <p><i>Volume pricing</i> promotions increase the value of the discount as the buyer increases the quantity they purchase.</p> <p><i>Coded Coupons</i> provide unique codes that a buyer can use during checkout to receive a discount. The seller can specify the number of times a buyer can use the coupon and the maximum amount across all purchases that can be discounted using the coupon. The coupon code can also be made public (appearing on the seller's Offer page, search pages, the item listing, and the checkout page) or private (only on the seller's Offer page, but the seller can include the code in email and social media).</p> <p class="tablenote"><b>Note</b>: Coded Coupons are currently available in the US, UK, DE, FR, IT, ES, and AU marketplaces.</p><p>There are two ways to add items to a threshold promotion:</p>  <ul><li><b>Key-based promotions</b> select items using either the listing IDs or inventory reference IDs of the items you want to promote. Note that if you use inventory reference IDs, you must specify both the <b>inventoryReferenceId</b> and the associated <b>inventoryReferenceType</b> of the item(s) you want to include the promotion.</li> <li><b>Rule-based promotions</b> select items using a list of eBay category IDs or seller Store category IDs. Rules can further constrain items in a promotion by minimum and maximum prices, brands, and item conditions.</li></ul>  <p>You must create a new promotion in either a <code>DRAFT</code> or <code>SCHEDULED</code> state. Use the DRAFT state when you are initially creating a promotion and you want to be sure it's correctly configured before scheduling it to run. When you create a promotion, the promotion ID is returned in the <b>Location</b> response header. Use this ID to reference the promotion in subsequent requests.</p>  <p class="tablenote"><b>Tip:</b> Refer to the <a href="/api-docs/sell/static/marketing/promotions-manager.html">Selling Integration Guide</a> for details and examples showing how to create and manage threshold promotions using the Promotions Manager.</p>  <p>For information on the eBay marketplaces that support item promotions, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>.</p>
		 * Post item_promotion
		 * @param {ItemPromotion} requestBody This type defines the fields that describe an item promotion.
		 * @return {void} 
		 */
		CreateItemPromotion(requestBody: ItemPromotion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'item_promotion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method deletes the threshold promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <br><br>You can delete any promotion with the exception of those that are currently active (RUNNING). To end a running threshold promotion, call <a href="/api-docs/sell/marketing/resources/item_promotion/methods/updateItemPromotion">updateItemPromotion</a> and adjust the <b>endDate</b> field as appropriate.
		 * Delete item_promotion/{promotion_id}
		 * @param {string} promotion_id This path parameter takes a concatenation of the ID of the promotion you want to delete plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>
		 * @return {void} 
		 */
		DeleteItemPromotion(promotion_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'item_promotion/' + (promotion_id == null ? '' : encodeURIComponent(promotion_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This method returns the complete details of the threshold promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.
		 * Get item_promotion/{promotion_id}
		 * @param {string} promotion_id This path parameter takes a concatenation of the ID of the promotion you want to retrieve plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>
		 * @return {ItemPromotionResponse} Success
		 */
		GetItemPromotion(promotion_id: string): Observable<ItemPromotionResponse> {
			return this.http.get<ItemPromotionResponse>(this.baseUri + 'item_promotion/' + (promotion_id == null ? '' : encodeURIComponent(promotion_id)), {});
		}

		/**
		 * This method updates the specified threshold promotion with the new configuration that you supply in the request. Indicate the promotion you want to update using the <b>promotion_id</b> path parameter.  <p>Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.</p>  <p>When updating a promotion, supply all the fields that you used to configure the original promotion (and not just the fields you are updating). eBay replaces the specified promotion with the values you supply in the update request and if you don't pass a field that currently has a value, the update request will fail.</p>  <p>The parameters you are allowed to update with this request depend on the status of the promotion you're updating:  <ul><li>DRAFT or SCHEDULED promotions: You can update any of the parameters in these promotions that have not yet started to run, including the <b>discountRules</b>.</li> <li>RUNNING or PAUSED promotions: You can change the <b>endDate</b> and the item's inventory but you cannot change the promotional discount or the promotion's start date.</li> <li>ENDED promotions: Nothing can be changed.</li></ul> <p class="tablenote"><b>Tip:</b> When updating a <code>RUNNING</code> or <code>PAUSED</code> promotion, set the <b>status</b> field to <code>SCHEDULED</code> for the update request. When the promotion is updated, the previous status (either <code>RUNNING</code> or <code>PAUSED</code>) is retained.</p>
		 * Put item_promotion/{promotion_id}
		 * @param {string} promotion_id This path parameter takes a concatenation of the ID of the promotion you want to update plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>
		 * @param {ItemPromotion} requestBody This type defines the fields that describe an item promotion.
		 * @return {BaseResponse} Success
		 */
		UpdateItemPromotion(promotion_id: string, requestBody: ItemPromotion): Observable<BaseResponse> {
			return this.http.put<BaseResponse>(this.baseUri + 'item_promotion/' + (promotion_id == null ? '' : encodeURIComponent(promotion_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method can be used to retrieve all of the negative keywords for ad groups in PLA campaigns that use the Cost Per Click (CPC) funding model.<br /><br />The results can be filtered using the <b>campaign_ids</b>, <b>ad_group_ids</b>, and <b>negative_keyword_status</b> query parameters.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller.
		 * Get negative_keyword
		 * @param {string} ad_group_ids A comma-separated list of ad group IDs.<br /><br />This query parameter is used if the seller wants to retrieve the negative keywords from one or more specific ad groups. The results might not include these ad group IDs if other search conditions exclude them.<br /><br /><span class="tablenote"><b>Note:</b>You can call the <a href="/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span><br /><br /><i>Required if</i> the search results must be filtered to include negative keywords created at the ad group level.
		 * @param {string} campaign_ids A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br />This query parameter is used if the seller wants to retrieve the negative keywords from a specific campaign. The results might not include these campaign IDs if other search conditions exclude them.<br /><br /><span class="tablenote"><b>Note:</b> Currently, only one campaign ID value is supported for each request.</span>
		 * @param {string} limit The number of results, from the current result set, to be returned in a single page.
		 * @param {string} negative_keyword_status A comma-separated list of negative keyword statuses.<br /><br />This query parameter is used if the seller wants to filter the search results based on one or more negative keyword statuses.
		 * @param {string} offset The number of results that will be skipped in the result set. This is used with the <b>limit</b> field to control the pagination of the output.<br /><br />For example, if the <b>offset</b> is set to <code>0</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 1 through 10 from the list of items returned. If the <b>offset</b> is set to <code>10</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 11 through 20 from the list of items returned.
		 * @return {NegativeKeywordPagedCollectionResponse} Success
		 */
		GetNegativeKeywords(ad_group_ids: string | null | undefined, campaign_ids: string | null | undefined, limit: string | null | undefined, negative_keyword_status: string | null | undefined, offset: string | null | undefined): Observable<NegativeKeywordPagedCollectionResponse> {
			return this.http.get<NegativeKeywordPagedCollectionResponse>(this.baseUri + 'negative_keyword?ad_group_ids=' + (ad_group_ids == null ? '' : encodeURIComponent(ad_group_ids)) + '&campaign_ids=' + (campaign_ids == null ? '' : encodeURIComponent(campaign_ids)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&negative_keyword_status=' + (negative_keyword_status == null ? '' : encodeURIComponent(negative_keyword_status)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), {});
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method adds a negative keyword to an existing ad group in a PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />Specify the <b>campaignId</b> and <b>adGroupId</b> in the request body, along with the <b>negativeKeywordText</b> and <b>negativeKeywordMatchType</b>.<br /><br />Call the <a href="/api-docs/sell/marketing/resources/campaign/methods/getCampaigns">getCampaigns</a> method to retrieve a list of current campaign IDs for a specified seller.
		 * Post negative_keyword
		 * @param {CreateNegativeKeywordRequest} requestBody A type that defines the fields for the request to create a negative keyword.
		 * @return {void} 
		 */
		CreateNegativeKeyword(requestBody: CreateNegativeKeywordRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'negative_keyword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method retrieves details on a specific negative keyword.<br /><br />In the request, specify the <b>negative_keyword_id</b> as a path parameter.
		 * Get negative_keyword/{negative_keyword_id}
		 * @param {string} negative_keyword_id The unique identifier for the negative keyword.<br /><br />This value is returned in the <b>Location</b> response header from the <a href="/api-docs/sell/marketing/resources/negative_keyword/methods/createNegativeKeyword">createNegativeKeyword</a> method.
		 * @return {NegativeKeyword} Success
		 */
		GetNegativeKeyword(negative_keyword_id: string): Observable<NegativeKeyword> {
			return this.http.get<NegativeKeyword>(this.baseUri + 'negative_keyword/' + (negative_keyword_id == null ? '' : encodeURIComponent(negative_keyword_id)), {});
		}

		/**
		 * <span class="tablenote"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href="/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests " target="_blank "> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href="/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility " target="_blank ">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the status of an existing negative keyword.<br /><br />Specify the <b>negative_keyword_id</b> as a path parameter, and specify the <b>negativeKeywordStatus</b> in the request body.
		 * Put negative_keyword/{negative_keyword_id}
		 * @param {string} negative_keyword_id The unique identifier for the negative keyword.<br /><br />This value is returned in the <b>Location</b> response header from the <a href="/api-docs/sell/marketing/resources/negative_keyword/methods/createNegativeKeyword">createNegativeKeyword</a> method.
		 * @param {UpdateNegativeKeywordRequest} requestBody A type that defines the fields for the request to update a negative keyword.
		 * @return {void} 
		 */
		UpdateNegativeKeyword(negative_keyword_id: string, requestBody: UpdateNegativeKeywordRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'negative_keyword/' + (negative_keyword_id == null ? '' : encodeURIComponent(negative_keyword_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method returns a list of a seller's undeleted promotions. <p>The call returns up to 200 currently-available promotions on the specified marketplace. While the response body does not include the promotion's <b>discountRules</b> or <b>inventoryCriterion</b> containers, it does include the <b>promotionHref</b> (which you can use to retrieve the complete details of the promotion).</p>  <p>Use query parameters to sort and filter the results by the number of promotions to return, the promotion state or type, and the eBay marketplace. You can also supply keywords to limit the response to the promotions that contain that keywords in the title of the promotion.</p> <p><b>Maximum returned:</b> 200</p>
		 * Get promotion
		 * @param {string} limit Specifies the maximum number of promotions returned on a page from the result set.  <br><br><b>Default:</b> 200 <br><b>Maximum:</b> 200
		 * @param {string} marketplace_id The eBay marketplace ID of the site where the promotion is hosted.  <p><b>Valid values:</b></p>  <ul><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul>
		 * @param {string} offset Specifies the number of promotions to skip in the result set before returning the first promotion in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>
		 * @param {string} promotion_status Specifies the promotion state by which you want to filter the results. The response contains only those promotions that match the state you specify.  <br><br><b>Valid values:</b> <ul><li><code>DRAFT</code></li> <li><code>SCHEDULED</code></li> <li><code>RUNNING</code></li> <li><code>PAUSED</code></li> <li><code>ENDED</code></li></ul><b>Maximum number of input values:</b> 1
		 * @param {string} promotion_type Filters the returned promotions based on their campaign promotion type. Specify one of the following values to indicate the promotion type you want returned: <ul><li><code>CODED_COUPON</code> &ndash; A coupon code promotion set with <b>createItemPromotion</b>.</li> <li><code>MARKDOWN_SALE</code> &ndash; A markdown promotion set with <b>createItemPriceMarkdownPromotion</b>.</li> <li><code>ORDER_DISCOUNT</code> &ndash; A threshold promotion set with <b>createItemPromotion</b>.</li> <li><code>VOLUME_DISCOUNT</code> &ndash; A volume pricing promotion set with <b>createItemPromotion</b>.</li></ul>
		 * @param {string} q A string consisting of one or more <i>keywords</i>. eBay filters the response by returning only the promotions that contain the supplied keywords in the promotion title.  <br><br><b>Example:</b> "iPhone" or "Harry Potter."  <br><br>Commas that separate keywords are ignored. For example, a keyword string of "iPhone, iPad" equals "iPhone iPad", and each results in a response that contains promotions with both "iPhone" and "iPad" in the title.
		 * @param {string} sort Specifies the order for how to sort the response. If you precede the supplied value with a dash, the response is sorted in reverse order.  <br><br><b>Example:</b> <br>&nbsp;&nbsp;&nbsp;<code>sort=END_DATE</code> &nbsp; Sorts the promotions in the response by their end dates in ascending order <br>&nbsp;&nbsp;&nbsp;<code>sort=-PROMOTION_NAME</code> &nbsp; Sorts the promotions by their promotion name in descending alphabetical order (Z-Az-a)  <br><br><b>Valid values</b>:<ul><li><code>START_DATE</code></li> <li><code>END_DATE</code></li> <li><code>PROMOTION_NAME</code></li></ul> For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/marketing/types/csb:SortField
		 * @return {PromotionsPagedCollection} Success
		 */
		GetPromotions(limit: string | null | undefined, marketplace_id: string, offset: string | null | undefined, promotion_status: string | null | undefined, promotion_type: string | null | undefined, q: string | null | undefined, sort: string | null | undefined): Observable<PromotionsPagedCollection> {
			return this.http.get<PromotionsPagedCollection>(this.baseUri + 'promotion?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&marketplace_id=' + (marketplace_id == null ? '' : encodeURIComponent(marketplace_id)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&promotion_status=' + (promotion_status == null ? '' : encodeURIComponent(promotion_status)) + '&promotion_type=' + (promotion_type == null ? '' : encodeURIComponent(promotion_type)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * This method returns the set of listings associated with the <b>promotion_id</b> specified in the path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <p>The listing details are returned in a paginated set and you can control and results returned using the following query parameters: <b>limit</b>, <b>offset</b>, <b>q</b>, <b>sort</b>, and <b>status</b>.</p>  <ul><li><b>Maximum associated listings returned:</b> 200</li>  <li><b>Default number of listings returned:</b> 200</li></ul>
		 * Get promotion/{promotion_id}/get_listing_set
		 * @param {string} limit Specifies the maximum number of promotions returned on a page from the result set. <br><br><b>Default:</b> 200<br><b>Maximum:</b> 200
		 * @param {string} offset Specifies the number of promotions to skip in the result set before returning the first promotion in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>
		 * @param {string} promotion_id This path parameter takes a concatenation of the ID of the promotion you want to get plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>
		 * @param {string} q Reserved for future use.
		 * @param {string} sort Specifies the order in which to sort the associated listings in the response. If you precede the supplied value with a dash, the response is sorted in reverse order.  <br><br><b>Example:</b> <br>&nbsp;&nbsp;&nbsp;<code>sort=PRICE</code> - Sorts the associated listings by their current price in ascending order <br>&nbsp;&nbsp;&nbsp;<code>sort=-TITLE</code> - Sorts the associated listings by their title in descending alphabetical order (Z-Az-a)  <br><br><b>Valid values</b>:<ul class="compact"><li>AVAILABLE</li> <li>PRICE</li> <li>TITLE</li></ul> For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/marketing/types/csb:SortField
		 * @param {string} status This query parameter applies only to markdown promotions. It filters the response based on the indicated status of the promotion. Currently, the only supported value for this parameter is <code>MARKED_DOWN</code>, which indicates active markdown promotions. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/marketing/types/sme:ItemMarkdownStatusEnum
		 * @return {ItemsPagedCollection} Success
		 */
		GetListingSet(limit: string | null | undefined, offset: string | null | undefined, promotion_id: string, q: string | null | undefined, sort: string | null | undefined, status: string | null | undefined): Observable<ItemsPagedCollection> {
			return this.http.get<ItemsPagedCollection>(this.baseUri + 'promotion/' + (promotion_id == null ? '' : encodeURIComponent(promotion_id)) + '/get_listing_set?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&status=' + (status == null ? '' : encodeURIComponent(status)), {});
		}

		/**
		 * This method pauses a currently-active (RUNNING) threshold promotion and changes the state of the promotion from <code>RUNNING</code> to <code>PAUSED</code>. Pausing a promotion makes the promotion temporarily unavailable to buyers and any currently-incomplete transactions will not receive the promotional offer until the promotion is resumed. Also, promotion teasers are not displayed when a promotion is paused.  <br><br>Pass the ID of the promotion you want to pause using the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of the seller's promotions. <br><br><b>Note:</b> You can only pause threshold promotions (you cannot pause markdown promotions).
		 * Post promotion/{promotion_id}/pause
		 * @param {string} promotion_id This path parameter takes a concatenation of the ID of the promotion you want to pause plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>
		 * @return {void} 
		 */
		PausePromotion(promotion_id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'promotion/' + (promotion_id == null ? '' : encodeURIComponent(promotion_id)) + '/pause', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * This method restarts a threshold promotion that was previously paused and changes the state of the promotion from <code>PAUSED</code> to <code>RUNNING</code>. Only promotions that have been previously paused can be resumed. Resuming a promotion reinstates the promotional teasers and any transactions that were in motion before the promotion was paused will again be eligible for the promotion.  <br><br>Pass the ID of the promotion you want to resume using the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of the seller's promotions.
		 * Post promotion/{promotion_id}/resume
		 * @param {string} promotion_id This path parameter takes a concatenation of the ID of the promotion you want to resume plus the marketplace ID on which the promotion is hosted. Concatenate the two values by separating them with an "at sign" (<b>@</b>).  <br><br>The ID of the promotion (<b>promotionId</b>) is a unique eBay-assigned value that's generated when the promotion is created. The Marketplace ID is the ENUM value of eBay marketplace where the promotion is hosted. <br><br><b>Example:</b> <code>1********5@EBAY_US</code>
		 * @return {void} 
		 */
		ResumePromotion(promotion_id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'promotion/' + (promotion_id == null ? '' : encodeURIComponent(promotion_id)) + '/resume', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * This method generates a report that lists the seller's running, paused, and ended promotions for the specified eBay marketplace. The result set can be filtered by the promotion status and the number of results to return. You can also supply <i>keywords</i> to limit the report to promotions that contain the specified keywords. <br><br>Specify the eBay marketplace for which you want the report run using the <b>marketplace_id</b> query parameter. Supply additional query parameters to control the report as needed.
		 * Get promotion_report
		 * @param {string} limit Specifies the maximum number of promotions returned on a page from the result set.  <br><br><b>Default:</b> 200 <br><b>Maximum:</b> 200
		 * @param {string} marketplace_id The eBay marketplace ID of the site for which you want the promotions report.  <p><b>Valid values:</b>  </p><ul><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul>
		 * @param {string} offset Specifies the number of promotions to skip in the result set before returning the first promotion in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p>
		 * @param {string} promotion_status Limits the results to the promotions that are in the state specified by this query parameter.  <br><br><b>Valid values:</b> <ul><li><code>DRAFT</code></li> <li><code>SCHEDULED</code></li> <li><code>RUNNING</code></li> <li><code>PAUSED</code></li> <li><code>ENDED</code></li></ul><b>Maximum number of values supported:</b> 1
		 * @param {string} promotion_type Filters the returned promotions in the report based on their campaign promotion type. Specify one of the following values to indicate the promotion type you want returned in the report: <ul><li><code>CODED_COUPON</code> &ndash; A coupon code promotion set with <b>createItemPromotion</b>.</li> <li><code>MARKDOWN_SALE</code> &ndash; A markdown promotion set with <b>createItemPriceMarkdownPromotion</b>.</li> <li><code>ORDER_DISCOUNT</code> &ndash; A threshold promotion set with <b>createItemPromotion</b>.</li> <li><code>VOLUME_DISCOUNT</code> &ndash; A volume pricing promotion set with <b>createItemPromotion</b>.</li></ul>
		 * @param {string} q A string consisting of one or more <i>keywords</i>. eBay filters the response by returning only the promotions that contain the supplied keywords in the promotion title.  <br><br><b>Example:</b> "iPhone" or "Harry Potter."  <br><br>Commas that separate keywords are ignored. For example, a keyword string of "iPhone, iPad" equals "iPhone iPad", and each results in a response that contains promotions with both "iPhone" and "iPad" in the title.
		 * @return {PromotionsReportPagedCollection} Success
		 */
		GetPromotionReports(limit: string | null | undefined, marketplace_id: string, offset: string | null | undefined, promotion_status: string | null | undefined, promotion_type: string | null | undefined, q: string | null | undefined): Observable<PromotionsReportPagedCollection> {
			return this.http.get<PromotionsReportPagedCollection>(this.baseUri + 'promotion_report?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&marketplace_id=' + (marketplace_id == null ? '' : encodeURIComponent(marketplace_id)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&promotion_status=' + (promotion_status == null ? '' : encodeURIComponent(promotion_status)) + '&promotion_type=' + (promotion_type == null ? '' : encodeURIComponent(promotion_type)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * This method generates a report that summarizes the seller's promotions for the specified eBay marketplace. The report returns information on <code>RUNNING</code>, <code>PAUSED</code>, and <code>ENDED</code> promotions (deleted reports are not returned) and summarizes the seller's campaign performance for all promotions on a given site.  <br><br>For information about summary reports, see <a href="/api-docs/sell/static/marketing/pm-summary-report.html">Reading the item promotion Summary report</a>.
		 * Get promotion_summary_report
		 * @param {string} marketplace_id The eBay marketplace ID of the site you for which you want a promotion summary report.  <p><b>Valid values:</b></p>  <ul><li><code>EBAY_AU</code> = Australia</li> <li><code>EBAY_DE</code> = Germany</li> <li><code>EBAY_ES</code> = Spain</li> <li><code>EBAY_FR</code> = France</li> <li><code>EBAY_GB</code> = Great Britain</li> <li><code>EBAY_IT</code> = Italy</li> <li><code>EBAY_US</code> = United States</li></ul>
		 * @return {SummaryReportResponse} Success
		 */
		GetPromotionSummaryReport(marketplace_id: string): Observable<SummaryReportResponse> {
			return this.http.get<SummaryReportResponse>(this.baseUri + 'promotion_summary_report?marketplace_id=' + (marketplace_id == null ? '' : encodeURIComponent(marketplace_id)), {});
		}
	}

}

