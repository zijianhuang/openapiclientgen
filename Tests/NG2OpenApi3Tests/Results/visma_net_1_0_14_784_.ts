import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddSalesOrderLinesCommand {
		lines?: Array<NewSalesOrderLineDto>;
	}
	export interface AddSalesOrderLinesCommandFormProperties {
	}
	export function CreateAddSalesOrderLinesCommandFormGroup() {
		return new FormGroup<AddSalesOrderLinesCommandFormProperties>({
		});

	}

	export interface NewSalesOrderLineDto {

		/**
		 * The branch with which this line is associated.
		 * If no `BranchId` is provided, default is set from order `BranchId`
		 * Max length: 30
		 */
		branchId?: string | null;

		/**
		 * Indicates if line is comissionable.
		 * If not set, the default value is picked from the inventory item
		 */
		commissionable?: boolean | null;

		/**
		 * Sets the description of the order line item. This will override the default description from the inventory item
		 * <br>Note that text fields should not contain any personally identifiable or otherwise sensitive data
		 * Max length: 256
		 */
		description?: string | null;

		/**
		 * Sets the manual currency discount amount for the line.
		 * <remarks>
		 * Note that the behavior of the 'discountAmount' field is affected by the 'hasManualDiscount' option.
		 * If 'hasManualDiscount' is provided and set to "false", and 'discountAmount' is provided, the system will set the discountAmount according to the predefined rules.
		 * </remarks>
		 */
		discountAmount?: number | null;

		/**
		 * Sets the discount for the line if applicable. This must be one of the selectable discount codes.
		 * <remarks>
		 * Note that the behavior of the 'discountCode' field is affected by the 'hasManualDiscount' option.
		 * If 'hasManualDiscount' is provided and set to "false", and 'discountCode' is provided, the system will set the discountCode according to the predefined rules.
		 * </remarks>
		 * Max length: 10
		 */
		discountCode?: string | null;

		/**
		 * Sets the manual percentage discount for the line.
		 * <remarks>
		 * Note that the behavior of the 'discountPercent' field is affected by the 'hasManualDiscount' option.
		 * If 'hasManualDiscount' is provided and set to "false", and 'discountPercent' is provided, the system will set the discountPercent according to the predefined rules.
		 * </remarks>
		 * Minimum: -100
		 * Maximum: 100
		 */
		discountPercent?: number | null;

		/**
		 * Sets the external link for the line
		 * Max length: 255
		 */
		externalLink?: string | null;

		/**
		 * Indicates that line level discount is applied manually.
		 * <remarks>
		 * Note that the behavior of the fields 'discountCode', 'discountPercent' and 'discountAmount' is affected by this option.
		 * If 'hasManualDiscount' is provided and set to "false", and discount field(s) is provided, the system will set the line level discounts according to the predefined rules.
		 * </remarks>
		 */
		hasManualDiscount?: boolean | null;

		/**
		 * Indicates that the `unitPrice` in this line has been specified manually.
		 * If set to "false", the system updates the unit price in the line according to predefined rules.
		 * Note that the behavior of the field `unitPrice` is affected by this option.
		 * If `hasManualPrice` is provided and set to "false", and `unitPrice` is provided, the system will set the `unitPrice` according to the predefined rules.
		 */
		hasManualPrice?: boolean | null;

		/**
		 * The Inventory Id of the item to add
		 * Required
		 * Min length: 1
		 */
		inventoryId: string;

		/**
		 * Adds a text note to the sales order line.
		 * Max length: 2048
		 */
		note?: string | null;

		/** The type of operation the line represents to the order. Acceptable values are 'Issue' or 'Receipt'. This must be a valid operation for sales order type. */
		operation?: string | null;

		/**
		 * Sets the overship threshold in percent. If not set, information from the inventory item is used
		 * Minimum: 100
		 * Maximum: 999
		 */
		overshipThreshold?: number | null;

		/**
		 * The project task with which this sales order line is associated
		 * Max length: 30
		 */
		projectTaskId?: string | null;

		/**
		 * Sets the purchase source of the line.
		 * Accepted values are `dropShip` or `purchaseToOrder`, when no value provided, the default value is picked from the inventory item.
		 * If the value was provided as '' (empty string), the value will set to null.
		 */
		purchaseOrderSource?: string | null;

		/** Sets the quantity of items on the order line */
		quantity?: number | null;

		/** Sets the reason code for the line. This must be one of the selectable reason codes */
		reasonCode?: string | null;

		/**
		 * Sets the date the order line is requested (Requested On)
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		requestDate?: Date | null;

		/**
		 * Overrides the Sales Account Id of the line. The value must be one of the selectable Accounts.
		 * If not set, a value based on the rules is used
		 * Max length: 10
		 */
		salesAccountId?: string | null;

		/**
		 * Sets the sales person for the line.
		 * If `SalesPersonId` is provided as (null), the value will be set from from order `SalesPersonId`
		 * Max length: 15
		 */
		salesPersonId?: string | null;

		/**
		 * Sets the day the order line should be shipped, so that the customer gets it on the requested date (Ship On).
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		shipDate?: Date | null;

		/**
		 * The way the line item should be shipped. This will override the default or the one set on the order head.
		 * <br>One of the following options can be set:<br><list type="bullet"><item><term>CancelRemainder: </term><description>The ordered quantity should be delivered in one shipment</description></item><item><term>BackOrderAllowed: </term><description>The ordered quantity can be delivered in multiple shipments.</description></item><item><term>ShipComplete: </term><description>The ordered quantity should be delivered in one shipment.</description></item></list>
		 */
		shippingRule?: string | null;

		/**
		 * Overrides the Subaccount setup for the line.
		 * Each entry corresponds to a subaccount id/value pair
		 */
		subaccount?: {[id: string]: string };

		/**
		 * <remarks>
		 * If the actual value was provided as (null), the value will be set from the inventory item preferred supplier,
		 * can be set only if the Purchase Order Source is set to `dropShip` or `purchaseToOrder`
		 * </remarks>
		 */
		supplierId?: string | null;

		/** Sets the supplier price for the line item. */
		supplierPrice?: number | null;

		/** Overrides the default tax category id (from customer's class). The value must be one of the selectable Tax Categories */
		taxCategoryId?: string | null;

		/**
		 * Sets the undership threshold in percent. If not set, information from the inventory item is used
		 * Minimum: 0
		 * Maximum: 100
		 */
		undershipThreshold?: number | null;

		/**
		 * Sets the unit cost of the product on the line. If no cost is set (null or omitted) the cost will be set
		 * according to predefined rules
		 */
		unitCost?: number | null;

		/**
		 * Sets the Unit of measure for the line item. This will override the default UOM for the inventory item
		 * Max length: 6
		 */
		unitOfMeasure?: string | null;

		/**
		 * Sets the unit price for the product on the line.
		 * If no price is set(null or omitted) the price will be set according to predefined rules based on the inventoryId and the customer.
		 * Note that the behavior of the `unitPrice` field is affected by the `hasManualPrice` option.
		 * If `hasManualPrice` is provided and set to "false", and `unitPrice` is provided, the system will set the `unitPrice` according to the predefined rules.
		 */
		unitPrice?: number | null;

		/** Sets the warehouse the item should be shipped from. This will override the default, or the one set on the order head. */
		warehouseId?: string | null;

		/** Sets the warehouse location that will be used for the shipment generated for the order the warehouse location Id for this line. This must be a valid location for `warehouseId` and will override the default if set. */
		warehouseLocationId?: string | null;
	}
	export interface NewSalesOrderLineDtoFormProperties {

		/**
		 * The branch with which this line is associated.
		 * If no `BranchId` is provided, default is set from order `BranchId`
		 * Max length: 30
		 */
		branchId: FormControl<string | null | undefined>,

		/**
		 * Indicates if line is comissionable.
		 * If not set, the default value is picked from the inventory item
		 */
		commissionable: FormControl<boolean | null | undefined>,

		/**
		 * Sets the description of the order line item. This will override the default description from the inventory item
		 * <br>Note that text fields should not contain any personally identifiable or otherwise sensitive data
		 * Max length: 256
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Sets the manual currency discount amount for the line.
		 * <remarks>
		 * Note that the behavior of the 'discountAmount' field is affected by the 'hasManualDiscount' option.
		 * If 'hasManualDiscount' is provided and set to "false", and 'discountAmount' is provided, the system will set the discountAmount according to the predefined rules.
		 * </remarks>
		 */
		discountAmount: FormControl<number | null | undefined>,

		/**
		 * Sets the discount for the line if applicable. This must be one of the selectable discount codes.
		 * <remarks>
		 * Note that the behavior of the 'discountCode' field is affected by the 'hasManualDiscount' option.
		 * If 'hasManualDiscount' is provided and set to "false", and 'discountCode' is provided, the system will set the discountCode according to the predefined rules.
		 * </remarks>
		 * Max length: 10
		 */
		discountCode: FormControl<string | null | undefined>,

		/**
		 * Sets the manual percentage discount for the line.
		 * <remarks>
		 * Note that the behavior of the 'discountPercent' field is affected by the 'hasManualDiscount' option.
		 * If 'hasManualDiscount' is provided and set to "false", and 'discountPercent' is provided, the system will set the discountPercent according to the predefined rules.
		 * </remarks>
		 * Minimum: -100
		 * Maximum: 100
		 */
		discountPercent: FormControl<number | null | undefined>,

		/**
		 * Sets the external link for the line
		 * Max length: 255
		 */
		externalLink: FormControl<string | null | undefined>,

		/**
		 * Indicates that line level discount is applied manually.
		 * <remarks>
		 * Note that the behavior of the fields 'discountCode', 'discountPercent' and 'discountAmount' is affected by this option.
		 * If 'hasManualDiscount' is provided and set to "false", and discount field(s) is provided, the system will set the line level discounts according to the predefined rules.
		 * </remarks>
		 */
		hasManualDiscount: FormControl<boolean | null | undefined>,

		/**
		 * Indicates that the `unitPrice` in this line has been specified manually.
		 * If set to "false", the system updates the unit price in the line according to predefined rules.
		 * Note that the behavior of the field `unitPrice` is affected by this option.
		 * If `hasManualPrice` is provided and set to "false", and `unitPrice` is provided, the system will set the `unitPrice` according to the predefined rules.
		 */
		hasManualPrice: FormControl<boolean | null | undefined>,

		/**
		 * The Inventory Id of the item to add
		 * Required
		 * Min length: 1
		 */
		inventoryId: FormControl<string | null | undefined>,

		/**
		 * Adds a text note to the sales order line.
		 * Max length: 2048
		 */
		note: FormControl<string | null | undefined>,

		/** The type of operation the line represents to the order. Acceptable values are 'Issue' or 'Receipt'. This must be a valid operation for sales order type. */
		operation: FormControl<string | null | undefined>,

		/**
		 * Sets the overship threshold in percent. If not set, information from the inventory item is used
		 * Minimum: 100
		 * Maximum: 999
		 */
		overshipThreshold: FormControl<number | null | undefined>,

		/**
		 * The project task with which this sales order line is associated
		 * Max length: 30
		 */
		projectTaskId: FormControl<string | null | undefined>,

		/**
		 * Sets the purchase source of the line.
		 * Accepted values are `dropShip` or `purchaseToOrder`, when no value provided, the default value is picked from the inventory item.
		 * If the value was provided as '' (empty string), the value will set to null.
		 */
		purchaseOrderSource: FormControl<string | null | undefined>,

		/** Sets the quantity of items on the order line */
		quantity: FormControl<number | null | undefined>,

		/** Sets the reason code for the line. This must be one of the selectable reason codes */
		reasonCode: FormControl<string | null | undefined>,

		/**
		 * Sets the date the order line is requested (Requested On)
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		requestDate: FormControl<Date | null | undefined>,

		/**
		 * Overrides the Sales Account Id of the line. The value must be one of the selectable Accounts.
		 * If not set, a value based on the rules is used
		 * Max length: 10
		 */
		salesAccountId: FormControl<string | null | undefined>,

		/**
		 * Sets the sales person for the line.
		 * If `SalesPersonId` is provided as (null), the value will be set from from order `SalesPersonId`
		 * Max length: 15
		 */
		salesPersonId: FormControl<string | null | undefined>,

		/**
		 * Sets the day the order line should be shipped, so that the customer gets it on the requested date (Ship On).
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		shipDate: FormControl<Date | null | undefined>,

		/**
		 * The way the line item should be shipped. This will override the default or the one set on the order head.
		 * <br>One of the following options can be set:<br><list type="bullet"><item><term>CancelRemainder: </term><description>The ordered quantity should be delivered in one shipment</description></item><item><term>BackOrderAllowed: </term><description>The ordered quantity can be delivered in multiple shipments.</description></item><item><term>ShipComplete: </term><description>The ordered quantity should be delivered in one shipment.</description></item></list>
		 */
		shippingRule: FormControl<string | null | undefined>,

		/**
		 * Overrides the Subaccount setup for the line.
		 * Each entry corresponds to a subaccount id/value pair
		 */
		subaccount: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * <remarks>
		 * If the actual value was provided as (null), the value will be set from the inventory item preferred supplier,
		 * can be set only if the Purchase Order Source is set to `dropShip` or `purchaseToOrder`
		 * </remarks>
		 */
		supplierId: FormControl<string | null | undefined>,

		/** Sets the supplier price for the line item. */
		supplierPrice: FormControl<number | null | undefined>,

		/** Overrides the default tax category id (from customer's class). The value must be one of the selectable Tax Categories */
		taxCategoryId: FormControl<string | null | undefined>,

		/**
		 * Sets the undership threshold in percent. If not set, information from the inventory item is used
		 * Minimum: 0
		 * Maximum: 100
		 */
		undershipThreshold: FormControl<number | null | undefined>,

		/**
		 * Sets the unit cost of the product on the line. If no cost is set (null or omitted) the cost will be set
		 * according to predefined rules
		 */
		unitCost: FormControl<number | null | undefined>,

		/**
		 * Sets the Unit of measure for the line item. This will override the default UOM for the inventory item
		 * Max length: 6
		 */
		unitOfMeasure: FormControl<string | null | undefined>,

		/**
		 * Sets the unit price for the product on the line.
		 * If no price is set(null or omitted) the price will be set according to predefined rules based on the inventoryId and the customer.
		 * Note that the behavior of the `unitPrice` field is affected by the `hasManualPrice` option.
		 * If `hasManualPrice` is provided and set to "false", and `unitPrice` is provided, the system will set the `unitPrice` according to the predefined rules.
		 */
		unitPrice: FormControl<number | null | undefined>,

		/** Sets the warehouse the item should be shipped from. This will override the default, or the one set on the order head. */
		warehouseId: FormControl<string | null | undefined>,

		/** Sets the warehouse location that will be used for the shipment generated for the order the warehouse location Id for this line. This must be a valid location for `warehouseId` and will override the default if set. */
		warehouseLocationId: FormControl<string | null | undefined>,
	}
	export function CreateNewSalesOrderLineDtoFormGroup() {
		return new FormGroup<NewSalesOrderLineDtoFormProperties>({
			branchId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(30)]),
			commissionable: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			discountAmount: new FormControl<number | null | undefined>(undefined),
			discountCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10)]),
			discountPercent: new FormControl<number | null | undefined>(undefined, [Validators.min(-100), Validators.max(100)]),
			externalLink: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			hasManualDiscount: new FormControl<boolean | null | undefined>(undefined),
			hasManualPrice: new FormControl<boolean | null | undefined>(undefined),
			inventoryId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			note: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			operation: new FormControl<string | null | undefined>(undefined),
			overshipThreshold: new FormControl<number | null | undefined>(undefined, [Validators.min(100), Validators.max(999)]),
			projectTaskId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(30)]),
			purchaseOrderSource: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			reasonCode: new FormControl<string | null | undefined>(undefined),
			requestDate: new FormControl<Date | null | undefined>(undefined),
			salesAccountId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10)]),
			salesPersonId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(15)]),
			shipDate: new FormControl<Date | null | undefined>(undefined),
			shippingRule: new FormControl<string | null | undefined>(undefined),
			subaccount: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			supplierId: new FormControl<string | null | undefined>(undefined),
			supplierPrice: new FormControl<number | null | undefined>(undefined),
			taxCategoryId: new FormControl<string | null | undefined>(undefined),
			undershipThreshold: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			unitCost: new FormControl<number | null | undefined>(undefined),
			unitOfMeasure: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(6)]),
			unitPrice: new FormControl<number | null | undefined>(undefined),
			warehouseId: new FormControl<string | null | undefined>(undefined),
			warehouseLocationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddressDto {

		/** The city */
		city?: string | null;
		country?: CdNamePairDto;
		county?: CdNamePairDto;

		/** The address id */
		id?: number | null;

		/** Address line 1 */
		line1?: string | null;

		/** Address line 2 */
		line2?: string | null;

		/** Address line 3 */
		line3?: string | null;

		/** Whether this address overrides the default address */
		overridesDefault?: boolean | null;

		/** The postal code */
		postalCode?: string | null;
	}
	export interface AddressDtoFormProperties {

		/** The city */
		city: FormControl<string | null | undefined>,

		/** The address id */
		id: FormControl<number | null | undefined>,

		/** Address line 1 */
		line1: FormControl<string | null | undefined>,

		/** Address line 2 */
		line2: FormControl<string | null | undefined>,

		/** Address line 3 */
		line3: FormControl<string | null | undefined>,

		/** Whether this address overrides the default address */
		overridesDefault: FormControl<boolean | null | undefined>,

		/** The postal code */
		postalCode: FormControl<string | null | undefined>,
	}
	export function CreateAddressDtoFormGroup() {
		return new FormGroup<AddressDtoFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			line1: new FormControl<string | null | undefined>(undefined),
			line2: new FormControl<string | null | undefined>(undefined),
			line3: new FormControl<string | null | undefined>(undefined),
			overridesDefault: new FormControl<boolean | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CdNamePairDto {

		/** The id */
		id?: string | null;

		/** The name */
		name?: string | null;
	}
	export interface CdNamePairDtoFormProperties {

		/** The id */
		id: FormControl<string | null | undefined>,

		/** The name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCdNamePairDtoFormGroup() {
		return new FormGroup<CdNamePairDtoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttachmentDto {
		id?: string | null;
		name?: string | null;
		revision?: number | null;
	}
	export interface AttachmentDtoFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		revision: FormControl<number | null | undefined>,
	}
	export function CreateAttachmentDtoFormGroup() {
		return new FormGroup<AttachmentDtoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CdDescriptionPairDto {

		/** The description */
		description?: string | null;

		/** The id */
		id?: string | null;
	}
	export interface CdDescriptionPairDtoFormProperties {

		/** The description */
		description: FormControl<string | null | undefined>,

		/** The id */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCdDescriptionPairDtoFormGroup() {
		return new FormGroup<CdDescriptionPairDtoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactDto {

		/** Any attention for the contact */
		attention?: string | null;

		/** The e-mail address of the contact */
		email?: string | null;

		/** The fax number of the contact */
		fax?: string | null;

		/** The id of the contact */
		id?: number | null;

		/** The name of the contact */
		name?: string | null;

		/** Whether this overrides the default contact */
		overridesDefault?: boolean | null;

		/** The phone number of the contact */
		phone1?: string | null;

		/** The secondary phone number of the contact */
		phone2?: string | null;
	}
	export interface ContactDtoFormProperties {

		/** Any attention for the contact */
		attention: FormControl<string | null | undefined>,

		/** The e-mail address of the contact */
		email: FormControl<string | null | undefined>,

		/** The fax number of the contact */
		fax: FormControl<string | null | undefined>,

		/** The id of the contact */
		id: FormControl<number | null | undefined>,

		/** The name of the contact */
		name: FormControl<string | null | undefined>,

		/** Whether this overrides the default contact */
		overridesDefault: FormControl<boolean | null | undefined>,

		/** The phone number of the contact */
		phone1: FormControl<string | null | undefined>,

		/** The secondary phone number of the contact */
		phone2: FormControl<string | null | undefined>,
	}
	export function CreateContactDtoFormGroup() {
		return new FormGroup<ContactDtoFormProperties>({
			attention: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			overridesDefault: new FormControl<boolean | null | undefined>(undefined),
			phone1: new FormControl<string | null | undefined>(undefined),
			phone2: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Visma.net.ERP.SalesOrders.Api.Dto.CustomerDto class Defines a customer */
	export interface CustomerDto {

		/** The customer's first address line */
		addressLine1?: string | null;

		/** The customer's second address line */
		addressLine2?: string | null;

		/** The customer's country code */
		country?: string | null;

		/** The currency Id used by the customer */
		currencyId?: string | null;

		/** The class of the customer */
		customerClassId?: string | null;
		defaultLocation?: CustomerLocationDto;

		/** Unique id for the customer */
		id?: string | null;

		/** An internal unique id */
		internalId?: number | null;

		/** The name of the customer */
		name?: string | null;

		/** The customer's postal code */
		postalCode?: string | null;

		/** The customer's salutation */
		salutation?: string | null;

		/** The customer's status code */
		status?: string | null;
	}

	/** The Visma.net.ERP.SalesOrders.Api.Dto.CustomerDto class Defines a customer */
	export interface CustomerDtoFormProperties {

		/** The customer's first address line */
		addressLine1: FormControl<string | null | undefined>,

		/** The customer's second address line */
		addressLine2: FormControl<string | null | undefined>,

		/** The customer's country code */
		country: FormControl<string | null | undefined>,

		/** The currency Id used by the customer */
		currencyId: FormControl<string | null | undefined>,

		/** The class of the customer */
		customerClassId: FormControl<string | null | undefined>,

		/** Unique id for the customer */
		id: FormControl<string | null | undefined>,

		/** An internal unique id */
		internalId: FormControl<number | null | undefined>,

		/** The name of the customer */
		name: FormControl<string | null | undefined>,

		/** The customer's postal code */
		postalCode: FormControl<string | null | undefined>,

		/** The customer's salutation */
		salutation: FormControl<string | null | undefined>,

		/** The customer's status code */
		status: FormControl<string | null | undefined>,
	}
	export function CreateCustomerDtoFormGroup() {
		return new FormGroup<CustomerDtoFormProperties>({
			addressLine1: new FormControl<string | null | undefined>(undefined),
			addressLine2: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			currencyId: new FormControl<string | null | undefined>(undefined),
			customerClassId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			internalId: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			salutation: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerLocationDto {

		/** The corporate id of the location */
		corporateId?: string | null;

		/** The country code of the location */
		countryId?: string | null;

		/** The global localization number of the location */
		gln?: string | null;

		/** Location id */
		id?: string | null;

		/** An internal id of the customer location */
		internalId?: number | null;

		/** Location description */
		name?: string | null;

		/** The tax registration id of the location */
		taxRegistrationId?: string | null;

		/** The site id of the location */
		warehouseId?: string | null;
	}
	export interface CustomerLocationDtoFormProperties {

		/** The corporate id of the location */
		corporateId: FormControl<string | null | undefined>,

		/** The country code of the location */
		countryId: FormControl<string | null | undefined>,

		/** The global localization number of the location */
		gln: FormControl<string | null | undefined>,

		/** Location id */
		id: FormControl<string | null | undefined>,

		/** An internal id of the customer location */
		internalId: FormControl<number | null | undefined>,

		/** Location description */
		name: FormControl<string | null | undefined>,

		/** The tax registration id of the location */
		taxRegistrationId: FormControl<string | null | undefined>,

		/** The site id of the location */
		warehouseId: FormControl<string | null | undefined>,
	}
	export function CreateCustomerLocationDtoFormGroup() {
		return new FormGroup<CustomerLocationDtoFormProperties>({
			corporateId: new FormControl<string | null | undefined>(undefined),
			countryId: new FormControl<string | null | undefined>(undefined),
			gln: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			internalId: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			taxRegistrationId: new FormControl<string | null | undefined>(undefined),
			warehouseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerDtoPagedResult {

		/** Gets or sets the link to the next page with more results. If set to null then no more records are present. */
		nextPage?: string | null;

		/** Gets or sets the total number of items available. If set to null, then the total number of items cannot be determined */
		totalCount?: number | null;

		/** Gets or sets the items that are paged */
		value?: Array<CustomerDto>;
	}
	export interface CustomerDtoPagedResultFormProperties {

		/** Gets or sets the link to the next page with more results. If set to null then no more records are present. */
		nextPage: FormControl<string | null | undefined>,

		/** Gets or sets the total number of items available. If set to null, then the total number of items cannot be determined */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateCustomerDtoPagedResultFormGroup() {
		return new FormGroup<CustomerDtoPagedResultFormProperties>({
			nextPage: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CustomerLocationItemDto {
		address?: AddressDto;
		contact?: ContactDto;

		/** The corporate id of the location */
		corporateId?: string | null;

		/** The country code of the location */
		countryId?: string | null;

		/** Default FobPointId */
		fobPointId?: string | null;

		/** The global localization number of the location */
		gln?: string | null;

		/** Location id */
		id?: string | null;

		/** Default Insurance */
		insurance?: boolean | null;

		/** An internal id of the customer location */
		internalId?: number | null;

		/**
		 * The number of days required for the shipped goods to reach the customer.
		 * Used in the calculation of the scheduled shipment date
		 */
		leadTime?: number | null;

		/** Location description */
		name?: string | null;

		/** The preferred shipping warehouse of the customer set default for the order */
		preferredWarehouseId?: string | null;

		/** Price class */
		priceClassId?: string | null;

		/** Default Priority */
		priority?: number | null;

		/**
		 * Default ResidentialDelivery.<br />
		 * This field will be removed with due date 1.12.2023. It is recommended to use <see cref="P:Visma.net.ERP.SalesOrders.Api.Dto.CustomerLocationItemDto.ResidentialDelivery">ResidentialDelivery</see> instead.
		 */
		resedentialDelivery?: boolean | null;

		/** Default ResidentialDelivery */
		residentialDelivery?: boolean | null;

		/** Default SaturdayDelivery */
		saturdayDelivery?: boolean | null;

		/** Default ShipTermsId */
		shipTermsId?: string | null;

		/** The ship via id that represents the carrier and its service to be used for shipping the ordered goods */
		shipViaId?: string | null;

		/** Default ShipZoneId */
		shipZoneId?: string | null;

		/**
		 * Shipping rule of the customer set default for the order
		 * <br>Is one of the following options:<br><list type="bullet"><item><term>CancelRemainder: </term><description>The ordered quantity should be delivered in one shipment</description></item><item><term>BackOrderAllowed: </term><description>The ordered quantity can be delivered in multiple shipments.</description></item><item><term>ShipComplete: </term><description>The ordered quantity should be delivered in one shipment.</description></item></list>
		 */
		shippingRule?: string | null;

		/** The tax registration id of the location */
		taxRegistrationId?: string | null;

		/** The location tax/VAT zone id */
		taxZoneId?: string | null;

		/** The site id of the location */
		warehouseId?: string | null;
	}
	export interface CustomerLocationItemDtoFormProperties {

		/** The corporate id of the location */
		corporateId: FormControl<string | null | undefined>,

		/** The country code of the location */
		countryId: FormControl<string | null | undefined>,

		/** Default FobPointId */
		fobPointId: FormControl<string | null | undefined>,

		/** The global localization number of the location */
		gln: FormControl<string | null | undefined>,

		/** Location id */
		id: FormControl<string | null | undefined>,

		/** Default Insurance */
		insurance: FormControl<boolean | null | undefined>,

		/** An internal id of the customer location */
		internalId: FormControl<number | null | undefined>,

		/**
		 * The number of days required for the shipped goods to reach the customer.
		 * Used in the calculation of the scheduled shipment date
		 */
		leadTime: FormControl<number | null | undefined>,

		/** Location description */
		name: FormControl<string | null | undefined>,

		/** The preferred shipping warehouse of the customer set default for the order */
		preferredWarehouseId: FormControl<string | null | undefined>,

		/** Price class */
		priceClassId: FormControl<string | null | undefined>,

		/** Default Priority */
		priority: FormControl<number | null | undefined>,

		/**
		 * Default ResidentialDelivery.<br />
		 * This field will be removed with due date 1.12.2023. It is recommended to use <see cref="P:Visma.net.ERP.SalesOrders.Api.Dto.CustomerLocationItemDto.ResidentialDelivery">ResidentialDelivery</see> instead.
		 */
		resedentialDelivery: FormControl<boolean | null | undefined>,

		/** Default ResidentialDelivery */
		residentialDelivery: FormControl<boolean | null | undefined>,

		/** Default SaturdayDelivery */
		saturdayDelivery: FormControl<boolean | null | undefined>,

		/** Default ShipTermsId */
		shipTermsId: FormControl<string | null | undefined>,

		/** The ship via id that represents the carrier and its service to be used for shipping the ordered goods */
		shipViaId: FormControl<string | null | undefined>,

		/** Default ShipZoneId */
		shipZoneId: FormControl<string | null | undefined>,

		/**
		 * Shipping rule of the customer set default for the order
		 * <br>Is one of the following options:<br><list type="bullet"><item><term>CancelRemainder: </term><description>The ordered quantity should be delivered in one shipment</description></item><item><term>BackOrderAllowed: </term><description>The ordered quantity can be delivered in multiple shipments.</description></item><item><term>ShipComplete: </term><description>The ordered quantity should be delivered in one shipment.</description></item></list>
		 */
		shippingRule: FormControl<string | null | undefined>,

		/** The tax registration id of the location */
		taxRegistrationId: FormControl<string | null | undefined>,

		/** The location tax/VAT zone id */
		taxZoneId: FormControl<string | null | undefined>,

		/** The site id of the location */
		warehouseId: FormControl<string | null | undefined>,
	}
	export function CreateCustomerLocationItemDtoFormGroup() {
		return new FormGroup<CustomerLocationItemDtoFormProperties>({
			corporateId: new FormControl<string | null | undefined>(undefined),
			countryId: new FormControl<string | null | undefined>(undefined),
			fobPointId: new FormControl<string | null | undefined>(undefined),
			gln: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			insurance: new FormControl<boolean | null | undefined>(undefined),
			internalId: new FormControl<number | null | undefined>(undefined),
			leadTime: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			preferredWarehouseId: new FormControl<string | null | undefined>(undefined),
			priceClassId: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			resedentialDelivery: new FormControl<boolean | null | undefined>(undefined),
			residentialDelivery: new FormControl<boolean | null | undefined>(undefined),
			saturdayDelivery: new FormControl<boolean | null | undefined>(undefined),
			shipTermsId: new FormControl<string | null | undefined>(undefined),
			shipViaId: new FormControl<string | null | undefined>(undefined),
			shipZoneId: new FormControl<string | null | undefined>(undefined),
			shippingRule: new FormControl<string | null | undefined>(undefined),
			taxRegistrationId: new FormControl<string | null | undefined>(undefined),
			taxZoneId: new FormControl<string | null | undefined>(undefined),
			warehouseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DtoLink {

		/** A link to the item in question */
		href?: string | null;
	}
	export interface DtoLinkFormProperties {

		/** A link to the item in question */
		href: FormControl<string | null | undefined>,
	}
	export function CreateDtoLinkFormGroup() {
		return new FormGroup<DtoLinkFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmployeeDto {

		/** The identifier of the employee */
		id?: string | null;

		/** The internal unique identifier of the employee */
		internalId?: string | null;
	}
	export interface EmployeeDtoFormProperties {

		/** The identifier of the employee */
		id: FormControl<string | null | undefined>,

		/** The internal unique identifier of the employee */
		internalId: FormControl<string | null | undefined>,
	}
	export function CreateEmployeeDtoFormGroup() {
		return new FormGroup<EmployeeDtoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			internalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IdDescriptionPairDto {

		/** The description */
		description?: string | null;

		/** The id */
		id?: number | null;
	}
	export interface IdDescriptionPairDtoFormProperties {

		/** The description */
		description: FormControl<string | null | undefined>,

		/** The id */
		id: FormControl<number | null | undefined>,
	}
	export function CreateIdDescriptionPairDtoFormGroup() {
		return new FormGroup<IdDescriptionPairDtoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Defines expansion options for the inventory summary endpoint. */
	export enum InventoryAvailabilityExpansions { None = 'None', Location = 'Location', Attribute = 'Attribute', All = 'All' }


	/** Inventory summary for a specific inventory item */
	export interface InventoryItemAvailabilityDto {

		/** Attributes applied to the inventory item */
		attributes?: {[id: string]: string };

		/** Warehouse information for the inventory item */
		availability?: Array<WarehouseAvailabilityDto>;

		/** The base unit for the inventory item */
		baseUnit?: string | null;

		/** The description of the inventory item */
		description?: string | null;

		/** The internal Id used by the system to identify the inventory item */
		internalId?: number | null;

		/** The inventory id (InventoryCd) */
		inventoryId?: string | null;
	}

	/** Inventory summary for a specific inventory item */
	export interface InventoryItemAvailabilityDtoFormProperties {

		/** Attributes applied to the inventory item */
		attributes: FormControl<{[id: string]: string } | null | undefined>,

		/** The base unit for the inventory item */
		baseUnit: FormControl<string | null | undefined>,

		/** The description of the inventory item */
		description: FormControl<string | null | undefined>,

		/** The internal Id used by the system to identify the inventory item */
		internalId: FormControl<number | null | undefined>,

		/** The inventory id (InventoryCd) */
		inventoryId: FormControl<string | null | undefined>,
	}
	export function CreateInventoryItemAvailabilityDtoFormGroup() {
		return new FormGroup<InventoryItemAvailabilityDtoFormProperties>({
			attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			baseUnit: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			internalId: new FormControl<number | null | undefined>(undefined),
			inventoryId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Warehouse information for a specific inventory item */
	export interface WarehouseAvailabilityDto {

		/** The description of the warehouse */
		description?: string | null;

		/** The total cost for the QuantityOnHand */
		estimatedTotalCost?: number | null;

		/** The estimated cost per unit, calculated as EstimatedTotalCost/QuantityOnHand */
		estimatedUnitCost?: number | null;

		/** The internal id used by the system for the warehouse */
		internalWarehouseId?: number | null;

		/**
		 * The date and time the entry for this warehouse was modified
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T12:15:14+02:00'), the date is considered to be in the UTC time zone.
		 */
		lastModified?: Date | null;

		/**
		 * List of locations in the warehouse for the specific inventory item.
		 * Note that this is not returned as part of the response unless expand=Location is specified with the request.
		 */
		locations?: Array<LocationAvailabilityDto>;

		/**
		 * You can configure the way this estimated quantity is calculated by using availability
		 * calculation rules. The available quantity may include anticipated transactions and therefore
		 * may be less than or greater than the QuantityOnHand. Anticipated transactions correspond
		 * to the documents and transactions that have been entered in the system but not yet
		 * processed to the end.
		 * In the availability calculation settings of an item class, you specify which anticipated
		 * transactions affect the available quantity. Thus, the available quantity may include
		 * goods on purchase orders and exclude the goods allocated for sales orders. You can use
		 * the available quantity as an indicator of demand
		 */
		quantityAvailable?: number | null;

		/**
		 * Estimated quantity calculated by using the following formula: the QuantityOnHand minus the quantity on unreleased inventory
		 * issues, minus the quantity allocated for shipping. Thus, the QuantityAvailableForShipment can be less than the QuantityOnHand
		 */
		quantityAvailableForShipment?: number | null;

		/**
		 * The quantity stored at locations not included in the availability calculation.
		 * For each warehouse location, the 'Include in Qty. Available' check box on the
		 * Warehouses(IN204000) screen defines whether the quantity of items stored at this
		 * location is included in the quantity of available items.
		 */
		quantityNotAvailable?: number | null;

		/** Physical quantity on-hand of items in the specific warehouse */
		quantityOnHand?: number | null;

		/** The quantity of the inventory item included in open purchase orders. */
		quantityPurchaseOrders?: number | null;

		/** The id (SiteCd) of the warehouse */
		warehouseId?: string | null;
	}

	/** Warehouse information for a specific inventory item */
	export interface WarehouseAvailabilityDtoFormProperties {

		/** The description of the warehouse */
		description: FormControl<string | null | undefined>,

		/** The total cost for the QuantityOnHand */
		estimatedTotalCost: FormControl<number | null | undefined>,

		/** The estimated cost per unit, calculated as EstimatedTotalCost/QuantityOnHand */
		estimatedUnitCost: FormControl<number | null | undefined>,

		/** The internal id used by the system for the warehouse */
		internalWarehouseId: FormControl<number | null | undefined>,

		/**
		 * The date and time the entry for this warehouse was modified
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T12:15:14+02:00'), the date is considered to be in the UTC time zone.
		 */
		lastModified: FormControl<Date | null | undefined>,

		/**
		 * You can configure the way this estimated quantity is calculated by using availability
		 * calculation rules. The available quantity may include anticipated transactions and therefore
		 * may be less than or greater than the QuantityOnHand. Anticipated transactions correspond
		 * to the documents and transactions that have been entered in the system but not yet
		 * processed to the end.
		 * In the availability calculation settings of an item class, you specify which anticipated
		 * transactions affect the available quantity. Thus, the available quantity may include
		 * goods on purchase orders and exclude the goods allocated for sales orders. You can use
		 * the available quantity as an indicator of demand
		 */
		quantityAvailable: FormControl<number | null | undefined>,

		/**
		 * Estimated quantity calculated by using the following formula: the QuantityOnHand minus the quantity on unreleased inventory
		 * issues, minus the quantity allocated for shipping. Thus, the QuantityAvailableForShipment can be less than the QuantityOnHand
		 */
		quantityAvailableForShipment: FormControl<number | null | undefined>,

		/**
		 * The quantity stored at locations not included in the availability calculation.
		 * For each warehouse location, the 'Include in Qty. Available' check box on the
		 * Warehouses(IN204000) screen defines whether the quantity of items stored at this
		 * location is included in the quantity of available items.
		 */
		quantityNotAvailable: FormControl<number | null | undefined>,

		/** Physical quantity on-hand of items in the specific warehouse */
		quantityOnHand: FormControl<number | null | undefined>,

		/** The quantity of the inventory item included in open purchase orders. */
		quantityPurchaseOrders: FormControl<number | null | undefined>,

		/** The id (SiteCd) of the warehouse */
		warehouseId: FormControl<string | null | undefined>,
	}
	export function CreateWarehouseAvailabilityDtoFormGroup() {
		return new FormGroup<WarehouseAvailabilityDtoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			estimatedTotalCost: new FormControl<number | null | undefined>(undefined),
			estimatedUnitCost: new FormControl<number | null | undefined>(undefined),
			internalWarehouseId: new FormControl<number | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			quantityAvailable: new FormControl<number | null | undefined>(undefined),
			quantityAvailableForShipment: new FormControl<number | null | undefined>(undefined),
			quantityNotAvailable: new FormControl<number | null | undefined>(undefined),
			quantityOnHand: new FormControl<number | null | undefined>(undefined),
			quantityPurchaseOrders: new FormControl<number | null | undefined>(undefined),
			warehouseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LocationAvailabilityDto {

		/** The description of the location */
		description?: string | null;

		/** The internal id used by the sytem for this location */
		internalLocationId?: number | null;

		/**
		 * Date and time this entry for this location was modified
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T12:15:14+02:00'), the date is considered to be in the UTC time zone.
		 */
		lastModified?: Date | null;

		/** The location id (LocationCd) for this location */
		locationId?: string | null;

		/**
		 * You can configure the way this estimated quantity is calculated by using availability
		 * calculation rules. The available quantity may include anticipated transactions and therefore
		 * may be less than or greater than the QuantityOnHand. Anticipated transactions correspond
		 * to the documents and transactions that have been entered in the system but not yet
		 * processed to the end.
		 * In the availability calculation settings of an item class, you specify which anticipated
		 * transactions affect the available quantity. Thus, the available quantity may include
		 * goods on purchase orders and exclude the goods allocated for sales orders. You can use
		 * the available quantity as an indicator of demand.
		 * Note: For quantities on warehouse location level, only quantities added specifically for the location are taken into consideration in quantityAvailable
		 */
		quantityAvailable?: number | null;

		/**
		 * Estimated quantity calculated by using the following formula: the QuantityOnHand minus the quantity on unreleased inventory
		 * issues, minus the quantity allocated for shipping. Thus, the QuantityAvailableForShipment can be less than the QuantityOnHand.
		 * Note: For quantities on warehouse location level, only quantities added specifically for the location are taken into consideration in quantityAvailableForShipment
		 */
		quantityAvailableForShipment?: number | null;

		/**
		 * The quantity stored at locations not included in the availability calculation.
		 * For each warehouse location, the 'Include in Qty. Available' check box on the
		 * Warehouses(IN204000) screen defines whether the quantity of items stored at this
		 * location is included in the quantity of available items.
		 */
		quantityNotAvailable?: number | null;

		/** Physical quantity on-hand of items in the specific location */
		quantityOnHand?: number | null;

		/**
		 * The quantity of the inventory item included in open purchase orders.
		 * Note: For quantities on warehouse location level, only quantities added specifically for the location are taken into consideration
		 */
		quantityPurchaseOrders?: number | null;
	}
	export interface LocationAvailabilityDtoFormProperties {

		/** The description of the location */
		description: FormControl<string | null | undefined>,

		/** The internal id used by the sytem for this location */
		internalLocationId: FormControl<number | null | undefined>,

		/**
		 * Date and time this entry for this location was modified
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T12:15:14+02:00'), the date is considered to be in the UTC time zone.
		 */
		lastModified: FormControl<Date | null | undefined>,

		/** The location id (LocationCd) for this location */
		locationId: FormControl<string | null | undefined>,

		/**
		 * You can configure the way this estimated quantity is calculated by using availability
		 * calculation rules. The available quantity may include anticipated transactions and therefore
		 * may be less than or greater than the QuantityOnHand. Anticipated transactions correspond
		 * to the documents and transactions that have been entered in the system but not yet
		 * processed to the end.
		 * In the availability calculation settings of an item class, you specify which anticipated
		 * transactions affect the available quantity. Thus, the available quantity may include
		 * goods on purchase orders and exclude the goods allocated for sales orders. You can use
		 * the available quantity as an indicator of demand.
		 * Note: For quantities on warehouse location level, only quantities added specifically for the location are taken into consideration in quantityAvailable
		 */
		quantityAvailable: FormControl<number | null | undefined>,

		/**
		 * Estimated quantity calculated by using the following formula: the QuantityOnHand minus the quantity on unreleased inventory
		 * issues, minus the quantity allocated for shipping. Thus, the QuantityAvailableForShipment can be less than the QuantityOnHand.
		 * Note: For quantities on warehouse location level, only quantities added specifically for the location are taken into consideration in quantityAvailableForShipment
		 */
		quantityAvailableForShipment: FormControl<number | null | undefined>,

		/**
		 * The quantity stored at locations not included in the availability calculation.
		 * For each warehouse location, the 'Include in Qty. Available' check box on the
		 * Warehouses(IN204000) screen defines whether the quantity of items stored at this
		 * location is included in the quantity of available items.
		 */
		quantityNotAvailable: FormControl<number | null | undefined>,

		/** Physical quantity on-hand of items in the specific location */
		quantityOnHand: FormControl<number | null | undefined>,

		/**
		 * The quantity of the inventory item included in open purchase orders.
		 * Note: For quantities on warehouse location level, only quantities added specifically for the location are taken into consideration
		 */
		quantityPurchaseOrders: FormControl<number | null | undefined>,
	}
	export function CreateLocationAvailabilityDtoFormGroup() {
		return new FormGroup<LocationAvailabilityDtoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			internalLocationId: new FormControl<number | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			quantityAvailable: new FormControl<number | null | undefined>(undefined),
			quantityAvailableForShipment: new FormControl<number | null | undefined>(undefined),
			quantityNotAvailable: new FormControl<number | null | undefined>(undefined),
			quantityOnHand: new FormControl<number | null | undefined>(undefined),
			quantityPurchaseOrders: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InventoryItemAvailabilityDtoPagedResult {

		/** Gets or sets the link to the next page with more results. If set to null then no more records are present. */
		nextPage?: string | null;

		/** Gets or sets the total number of items available. If set to null, then the total number of items cannot be determined */
		totalCount?: number | null;

		/** Gets or sets the items that are paged */
		value?: Array<InventoryItemAvailabilityDto>;
	}
	export interface InventoryItemAvailabilityDtoPagedResultFormProperties {

		/** Gets or sets the link to the next page with more results. If set to null then no more records are present. */
		nextPage: FormControl<string | null | undefined>,

		/** Gets or sets the total number of items available. If set to null, then the total number of items cannot be determined */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateInventoryItemAvailabilityDtoPagedResultFormGroup() {
		return new FormGroup<InventoryItemAvailabilityDtoPagedResultFormProperties>({
			nextPage: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Defines a warehouse location */
	export interface LocationDto {

		/** The description */
		description?: string | null;

		/** The id */
		id?: string | null;
	}

	/** Defines a warehouse location */
	export interface LocationDtoFormProperties {

		/** The description */
		description: FormControl<string | null | undefined>,

		/** The id */
		id: FormControl<string | null | undefined>,
	}
	export function CreateLocationDtoFormGroup() {
		return new FormGroup<LocationDtoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Defines a new address when creating a sales order.
	 * When the address information is provided, it is expected to provide all needed fields for the address(line1, line2, countryId etc).
	 * No default values from the customer will be set for the non defined address fields.
	 */
	export interface NewSalesOrderAddressDto {

		/**
		 * The city
		 * Max length: 50
		 */
		city?: string | null;

		/**
		 * The country. Required when setting the address.
		 * Max length: 2
		 */
		countryId?: string | null;

		/**
		 * Address line 1
		 * Max length: 50
		 */
		line1?: string | null;

		/**
		 * Address line 2
		 * Max length: 50
		 */
		line2?: string | null;

		/**
		 * Address line 3
		 * Max length: 50
		 */
		line3?: string | null;

		/**
		 * The postal code
		 * Max length: 20
		 */
		postalCode?: string | null;

		/**
		 * The state
		 * Max length: 50
		 */
		stateId?: string | null;
	}

	/**
	 * Defines a new address when creating a sales order.
	 * When the address information is provided, it is expected to provide all needed fields for the address(line1, line2, countryId etc).
	 * No default values from the customer will be set for the non defined address fields.
	 */
	export interface NewSalesOrderAddressDtoFormProperties {

		/**
		 * The city
		 * Max length: 50
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * The country. Required when setting the address.
		 * Max length: 2
		 */
		countryId: FormControl<string | null | undefined>,

		/**
		 * Address line 1
		 * Max length: 50
		 */
		line1: FormControl<string | null | undefined>,

		/**
		 * Address line 2
		 * Max length: 50
		 */
		line2: FormControl<string | null | undefined>,

		/**
		 * Address line 3
		 * Max length: 50
		 */
		line3: FormControl<string | null | undefined>,

		/**
		 * The postal code
		 * Max length: 20
		 */
		postalCode: FormControl<string | null | undefined>,

		/**
		 * The state
		 * Max length: 50
		 */
		stateId: FormControl<string | null | undefined>,
	}
	export function CreateNewSalesOrderAddressDtoFormGroup() {
		return new FormGroup<NewSalesOrderAddressDtoFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			countryId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2)]),
			line1: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			line2: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			line3: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(20)]),
			stateId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
		});

	}

	export interface NewSalesOrderBillingDto {

		/**
		 * Defines a new address when creating a sales order.
		 * When the address information is provided, it is expected to provide all needed fields for the address(line1, line2, countryId etc).
		 * No default values from the customer will be set for the non defined address fields.
		 */
		address?: NewSalesOrderAddressDto;

		/**
		 * Defines a new contact when creating a new sales order.
		 * When the contact information is provided, it is expected to provide all needed fields for the contact(name, attention etc).
		 * No default values from the customer will be set for the non defined contact fields.
		 */
		contact?: NewSalesOrderContactDto;
	}
	export interface NewSalesOrderBillingDtoFormProperties {
	}
	export function CreateNewSalesOrderBillingDtoFormGroup() {
		return new FormGroup<NewSalesOrderBillingDtoFormProperties>({
		});

	}


	/**
	 * Defines a new contact when creating a new sales order.
	 * When the contact information is provided, it is expected to provide all needed fields for the contact(name, attention etc).
	 * No default values from the customer will be set for the non defined contact fields.
	 */
	export interface NewSalesOrderContactDto {

		/**
		 * Sets any attention for the contact
		 * Max length: 255
		 */
		attention?: string | null;

		/**
		 * Sets the e-mail address of the contact
		 * Max length: 255
		 */
		email?: string | null;

		/**
		 * Sets the full name of the contact
		 * Max length: 255
		 */
		name?: string | null;

		/**
		 * Sets the primary phone number of the contact
		 * Max length: 50
		 */
		phone1?: string | null;
	}

	/**
	 * Defines a new contact when creating a new sales order.
	 * When the contact information is provided, it is expected to provide all needed fields for the contact(name, attention etc).
	 * No default values from the customer will be set for the non defined contact fields.
	 */
	export interface NewSalesOrderContactDtoFormProperties {

		/**
		 * Sets any attention for the contact
		 * Max length: 255
		 */
		attention: FormControl<string | null | undefined>,

		/**
		 * Sets the e-mail address of the contact
		 * Max length: 255
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Sets the full name of the contact
		 * Max length: 255
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Sets the primary phone number of the contact
		 * Max length: 50
		 */
		phone1: FormControl<string | null | undefined>,
	}
	export function CreateNewSalesOrderContactDtoFormGroup() {
		return new FormGroup<NewSalesOrderContactDtoFormProperties>({
			attention: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			phone1: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
		});

	}

	export interface NewSalesOrderCommand {
		billing?: NewSalesOrderBillingDto;

		/**
		 * The branch with which this order is associated. Prio for setting the Branch ID being:
		 * <list type="number"><item>BranchID set in body</item><item>BranchID from call header</item><item>BranchID from customer location</item><item>Company's default branch ID</item></list>
		 * Max length: 30
		 */
		branchId?: string | null;

		/**
		 * Sets the cancel by date for the order to create. If not supplied, the order type's days to keep will be added to the current date to determine the value of this field
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		cancelBy?: Date | null;

		/**
		 * Override the CurrencyId for the order. Must be a valid currency Id. If not specified, the customer's currency is used if not null. If null, company base currency is used
		 * Max length: 5
		 */
		currencyId?: string | null;

		/** Required */
		customer: NewSalesOrderCustomerDto;

		/**
		 * Sets the order date of the order to create. If not supplied, the current date will be used
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		date?: Date | null;

		/**
		 * Sets the description for the order to create
		 * <br>Note that text fields should not contain any personally identifiable or otherwise sensitive data
		 * Max length: 255
		 */
		description?: string | null;
		financialInformation?: NewSalesOrderFinancialInfoDto;
		freight?: NewSalesOrderFreightDto;

		/**
		 * Any note to apply to the order header.
		 * Max length: 2048
		 */
		note?: string | null;

		/**
		 * Sets the new id that should be assigned to the new sales order.
		 * This is required if the specified Visma.net.ERP.SalesOrders.Api.Application.Commands.NewSalesOrder.NewSalesOrderCommand.Type has manual numbering set up. If not it should be null or empty.
		 * Max length: 15
		 */
		orderId?: string | null;

		/** The lines that are added to the order upon creation */
		orderLines?: Array<NewSalesOrderLineDto>;

		/**
		 * Sets the unique identifier of the original order
		 * Max length: 15
		 */
		originalOrderId?: string | null;

		/**
		 * Sets the type code for the original sales order
		 * Max length: 2
		 */
		originalOrderType?: string | null;

		/** Sets the owner (employee) for the order */
		ownerId?: string | null;
		paymentSettings?: NewSalesOrderPaymentSettings;
		print?: SalesOrderPrintDto;

		/**
		 * The project with which this sales order is associated
		 * Max length: 30
		 */
		projectId?: string | null;

		/**
		 * Sets the requested on date for the order to create. If not supplied, the current date will be used
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		requestOn?: Date | null;

		/**
		 * Sets default sales person for the order
		 * Max length: 15
		 */
		salesPersonId?: string | null;
		shipping?: NewSalesOrderShippingDto;

		/** Sets the initial status code for the order. Must be null, empty or one of "Open" or "Hold". If not supplied the value will be determined by the sales order type. */
		status?: string | null;

		/** Override the TaxZoneId for the order. If not specified, the customer's location's TaxZoneId will be used */
		taxZoneId?: string | null;

		/**
		 * Sets the type id of an active sales order type to create
		 * Required
		 * Min length: 1
		 */
		type: string;

		/**
		 * When this option is set to `true`, the `costTotal` of the order will be calculated based on `replacementUnitCost`.
		 * If option is set to `false`, the `costTotal` will be calculated based on `unitCost`
		 */
		useReplacementCostForMarginAndProfit?: boolean | null;
	}
	export interface NewSalesOrderCommandFormProperties {

		/**
		 * The branch with which this order is associated. Prio for setting the Branch ID being:
		 * <list type="number"><item>BranchID set in body</item><item>BranchID from call header</item><item>BranchID from customer location</item><item>Company's default branch ID</item></list>
		 * Max length: 30
		 */
		branchId: FormControl<string | null | undefined>,

		/**
		 * Sets the cancel by date for the order to create. If not supplied, the order type's days to keep will be added to the current date to determine the value of this field
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		cancelBy: FormControl<Date | null | undefined>,

		/**
		 * Override the CurrencyId for the order. Must be a valid currency Id. If not specified, the customer's currency is used if not null. If null, company base currency is used
		 * Max length: 5
		 */
		currencyId: FormControl<string | null | undefined>,

		/**
		 * Sets the order date of the order to create. If not supplied, the current date will be used
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		date: FormControl<Date | null | undefined>,

		/**
		 * Sets the description for the order to create
		 * <br>Note that text fields should not contain any personally identifiable or otherwise sensitive data
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Any note to apply to the order header.
		 * Max length: 2048
		 */
		note: FormControl<string | null | undefined>,

		/**
		 * Sets the new id that should be assigned to the new sales order.
		 * This is required if the specified Visma.net.ERP.SalesOrders.Api.Application.Commands.NewSalesOrder.NewSalesOrderCommand.Type has manual numbering set up. If not it should be null or empty.
		 * Max length: 15
		 */
		orderId: FormControl<string | null | undefined>,

		/**
		 * Sets the unique identifier of the original order
		 * Max length: 15
		 */
		originalOrderId: FormControl<string | null | undefined>,

		/**
		 * Sets the type code for the original sales order
		 * Max length: 2
		 */
		originalOrderType: FormControl<string | null | undefined>,

		/** Sets the owner (employee) for the order */
		ownerId: FormControl<string | null | undefined>,

		/**
		 * The project with which this sales order is associated
		 * Max length: 30
		 */
		projectId: FormControl<string | null | undefined>,

		/**
		 * Sets the requested on date for the order to create. If not supplied, the current date will be used
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		requestOn: FormControl<Date | null | undefined>,

		/**
		 * Sets default sales person for the order
		 * Max length: 15
		 */
		salesPersonId: FormControl<string | null | undefined>,

		/** Sets the initial status code for the order. Must be null, empty or one of "Open" or "Hold". If not supplied the value will be determined by the sales order type. */
		status: FormControl<string | null | undefined>,

		/** Override the TaxZoneId for the order. If not specified, the customer's location's TaxZoneId will be used */
		taxZoneId: FormControl<string | null | undefined>,

		/**
		 * Sets the type id of an active sales order type to create
		 * Required
		 * Min length: 1
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * When this option is set to `true`, the `costTotal` of the order will be calculated based on `replacementUnitCost`.
		 * If option is set to `false`, the `costTotal` will be calculated based on `unitCost`
		 */
		useReplacementCostForMarginAndProfit: FormControl<boolean | null | undefined>,
	}
	export function CreateNewSalesOrderCommandFormGroup() {
		return new FormGroup<NewSalesOrderCommandFormProperties>({
			branchId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(30)]),
			cancelBy: new FormControl<Date | null | undefined>(undefined),
			currencyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(5)]),
			date: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			note: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			orderId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(15)]),
			originalOrderId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(15)]),
			originalOrderType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2)]),
			ownerId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(30)]),
			requestOn: new FormControl<Date | null | undefined>(undefined),
			salesPersonId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(15)]),
			status: new FormControl<string | null | undefined>(undefined),
			taxZoneId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			useReplacementCostForMarginAndProfit: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface NewSalesOrderCustomerDto {

		/** The contact id for the customer */
		contactId?: number | null;

		/** The unique global location number of the customer */
		gln?: string | null;

		/** The unique id of the the customer */
		id?: string | null;

		/**
		 * Sets the location for the customer supplied to use on the order.
		 * Must be a valid active location for the customer supplied in Visma.net.ERP.SalesOrders.Api.Dto.NewSalesOrder.NewSalesOrderCustomerDto.Id
		 */
		locationId?: string | null;

		/**
		 * The customer order text
		 * Max length: 40
		 */
		order?: string | null;

		/**
		 * The customer ref number text
		 * Max length: 40
		 */
		refNo?: string | null;

		/**
		 * Sets the terms to use for the sales order.
		 * Must be a valid terms identifier
		 */
		termsId?: string | null;
	}
	export interface NewSalesOrderCustomerDtoFormProperties {

		/** The contact id for the customer */
		contactId: FormControl<number | null | undefined>,

		/** The unique global location number of the customer */
		gln: FormControl<string | null | undefined>,

		/** The unique id of the the customer */
		id: FormControl<string | null | undefined>,

		/**
		 * Sets the location for the customer supplied to use on the order.
		 * Must be a valid active location for the customer supplied in Visma.net.ERP.SalesOrders.Api.Dto.NewSalesOrder.NewSalesOrderCustomerDto.Id
		 */
		locationId: FormControl<string | null | undefined>,

		/**
		 * The customer order text
		 * Max length: 40
		 */
		order: FormControl<string | null | undefined>,

		/**
		 * The customer ref number text
		 * Max length: 40
		 */
		refNo: FormControl<string | null | undefined>,

		/**
		 * Sets the terms to use for the sales order.
		 * Must be a valid terms identifier
		 */
		termsId: FormControl<string | null | undefined>,
	}
	export function CreateNewSalesOrderCustomerDtoFormGroup() {
		return new FormGroup<NewSalesOrderCustomerDtoFormProperties>({
			contactId: new FormControl<number | null | undefined>(undefined),
			gln: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40)]),
			refNo: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40)]),
			termsId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewSalesOrderFinancialInfoDto {

		/**
		 * The date when the cash discount is available for the invoice created for the order. Default date is set based on the terms selected in the order.
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		cashDiscountDate?: Date | null;

		/**
		 * The due date for the invoice created for the order. Default due date is set according to the credit terms.
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		dueDate?: Date | null;

		/**
		 * Sets the invoice date of the invoice that will be generated for the order.
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		invoiceDate?: Date | null;

		/**
		 * The reference number of the invoice generated for this order.
		 * This can be used if the numbering sequence assigned to invoices is configured for manual numbering.
		 * Max length: 15
		 */
		invoiceId?: string | null;

		/** Sets if the order should be invoiced/billed separately */
		invoiceSeparately?: boolean | null;

		/**
		 * The post period for the invoice. This can be used to override the financial period. Must be a valid existing financial period.
		 * Max length: 6
		 */
		postPeriod?: string | null;
	}
	export interface NewSalesOrderFinancialInfoDtoFormProperties {

		/**
		 * The date when the cash discount is available for the invoice created for the order. Default date is set based on the terms selected in the order.
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		cashDiscountDate: FormControl<Date | null | undefined>,

		/**
		 * The due date for the invoice created for the order. Default due date is set according to the credit terms.
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		dueDate: FormControl<Date | null | undefined>,

		/**
		 * Sets the invoice date of the invoice that will be generated for the order.
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		invoiceDate: FormControl<Date | null | undefined>,

		/**
		 * The reference number of the invoice generated for this order.
		 * This can be used if the numbering sequence assigned to invoices is configured for manual numbering.
		 * Max length: 15
		 */
		invoiceId: FormControl<string | null | undefined>,

		/** Sets if the order should be invoiced/billed separately */
		invoiceSeparately: FormControl<boolean | null | undefined>,

		/**
		 * The post period for the invoice. This can be used to override the financial period. Must be a valid existing financial period.
		 * Max length: 6
		 */
		postPeriod: FormControl<string | null | undefined>,
	}
	export function CreateNewSalesOrderFinancialInfoDtoFormGroup() {
		return new FormGroup<NewSalesOrderFinancialInfoDtoFormProperties>({
			cashDiscountDate: new FormControl<Date | null | undefined>(undefined),
			dueDate: new FormControl<Date | null | undefined>(undefined),
			invoiceDate: new FormControl<Date | null | undefined>(undefined),
			invoiceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(15)]),
			invoiceSeparately: new FormControl<boolean | null | undefined>(undefined),
			postPeriod: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(6)]),
		});

	}

	export interface NewSalesOrderFreightDto {

		/** The freight cost calculated for the sales order, can be manually set if orders Ship via code allows it. */
		cost?: number | null;

		/** The additional freight charges for handling the order. */
		premiumAmount?: number | null;

		/**
		 * The tax category that applies to the freight amount.
		 * By default, it is the tax category associated with the ship via code selected for the order.
		 * Max length: 10
		 */
		taxCategoryId?: string | null;
	}
	export interface NewSalesOrderFreightDtoFormProperties {

		/** The freight cost calculated for the sales order, can be manually set if orders Ship via code allows it. */
		cost: FormControl<number | null | undefined>,

		/** The additional freight charges for handling the order. */
		premiumAmount: FormControl<number | null | undefined>,

		/**
		 * The tax category that applies to the freight amount.
		 * By default, it is the tax category associated with the ship via code selected for the order.
		 * Max length: 10
		 */
		taxCategoryId: FormControl<string | null | undefined>,
	}
	export function CreateNewSalesOrderFreightDtoFormGroup() {
		return new FormGroup<NewSalesOrderFreightDtoFormProperties>({
			cost: new FormControl<number | null | undefined>(undefined),
			premiumAmount: new FormControl<number | null | undefined>(undefined),
			taxCategoryId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10)]),
		});

	}

	export interface NewSalesOrderPaymentSettings {

		/**
		 * The cash account associated with the set payment method.
		 * Max length: 10
		 */
		cashAccountId?: string | null;

		/** Overrides the default payment method set on the customer. This must be a valid and active payment method id. */
		paymentMethodId?: string | null;

		/**
		 * Sets the external reference number for the order. This must be set if order type requires it.
		 * Max length: 40
		 */
		paymentReference?: string | null;
	}
	export interface NewSalesOrderPaymentSettingsFormProperties {

		/**
		 * The cash account associated with the set payment method.
		 * Max length: 10
		 */
		cashAccountId: FormControl<string | null | undefined>,

		/** Overrides the default payment method set on the customer. This must be a valid and active payment method id. */
		paymentMethodId: FormControl<string | null | undefined>,

		/**
		 * Sets the external reference number for the order. This must be set if order type requires it.
		 * Max length: 40
		 */
		paymentReference: FormControl<string | null | undefined>,
	}
	export function CreateNewSalesOrderPaymentSettingsFormGroup() {
		return new FormGroup<NewSalesOrderPaymentSettingsFormProperties>({
			cashAccountId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10)]),
			paymentMethodId: new FormControl<string | null | undefined>(undefined),
			paymentReference: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40)]),
		});

	}

	export interface SalesOrderPrintDto {

		/** Set to true to print description on the invoice */
		descriptionOnInvoice?: boolean | null;

		/** Set to true to print note on external documents */
		noteOnExternalDocuments?: boolean | null;

		/** Set to true to print note on internal documents */
		noteOnInternalDocuments?: boolean | null;
	}
	export interface SalesOrderPrintDtoFormProperties {

		/** Set to true to print description on the invoice */
		descriptionOnInvoice: FormControl<boolean | null | undefined>,

		/** Set to true to print note on external documents */
		noteOnExternalDocuments: FormControl<boolean | null | undefined>,

		/** Set to true to print note on internal documents */
		noteOnInternalDocuments: FormControl<boolean | null | undefined>,
	}
	export function CreateSalesOrderPrintDtoFormGroup() {
		return new FormGroup<SalesOrderPrintDtoFormProperties>({
			descriptionOnInvoice: new FormControl<boolean | null | undefined>(undefined),
			noteOnExternalDocuments: new FormControl<boolean | null | undefined>(undefined),
			noteOnInternalDocuments: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface NewSalesOrderShippingDto {

		/**
		 * Defines a new address when creating a sales order.
		 * When the address information is provided, it is expected to provide all needed fields for the address(line1, line2, countryId etc).
		 * No default values from the customer will be set for the non defined address fields.
		 */
		address?: NewSalesOrderAddressDto;

		/**
		 * Defines a new contact when creating a new sales order.
		 * When the contact information is provided, it is expected to provide all needed fields for the contact(name, attention etc).
		 * No default values from the customer will be set for the non defined contact fields.
		 */
		contact?: NewSalesOrderContactDto;

		/**
		 * The identifier of the point (such as a city or town) where the title of goods passes from the company to the customer.
		 * Max length: 15
		 */
		fobPointId?: string | null;

		/** Sets whether insurance applies to this shipping */
		insurance?: boolean | null;

		/** Sets the intrastat transaction type id for the sales order, if not supplied the default value from the ordertype will be used. Must be a valid intrastat transaction type id. */
		intrastatTransactionTypeId?: number | null;

		/**
		 * Sets the default site for the customer supplied to use on the order. Must be a valid site id
		 * Max length: 30
		 */
		preferredWarehouseId?: string | null;

		/** Sets priority of the order */
		priority?: number | null;

		/** Sets whether this is residential delivery */
		residentialDelivery?: boolean | null;

		/** Sets the shipping rule for the order */
		rule?: string | null;

		/** Sets whether this is a saturday delivery */
		saturdayDelivery?: boolean | null;

		/**
		 * Sets the date the shipment is scheduled for
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		scheduledDate?: Date | null;

		/** Sets whether the order should be shipped separately or included in a batch segment */
		shipSeparately?: boolean | null;

		/**
		 * Sets the unique id that represents the carrier and its service to be used for shipping the ordered goods.
		 * Max length: 15
		 */
		shipViaId?: string | null;

		/**
		 * The identifier of the shipping terms used for the order.
		 * Max length: 15
		 */
		termsId?: string | null;

		/**
		 * Sets the shipping zone of the order freight
		 * Max length: 15
		 */
		zoneId?: string | null;
	}
	export interface NewSalesOrderShippingDtoFormProperties {

		/**
		 * The identifier of the point (such as a city or town) where the title of goods passes from the company to the customer.
		 * Max length: 15
		 */
		fobPointId: FormControl<string | null | undefined>,

		/** Sets whether insurance applies to this shipping */
		insurance: FormControl<boolean | null | undefined>,

		/** Sets the intrastat transaction type id for the sales order, if not supplied the default value from the ordertype will be used. Must be a valid intrastat transaction type id. */
		intrastatTransactionTypeId: FormControl<number | null | undefined>,

		/**
		 * Sets the default site for the customer supplied to use on the order. Must be a valid site id
		 * Max length: 30
		 */
		preferredWarehouseId: FormControl<string | null | undefined>,

		/** Sets priority of the order */
		priority: FormControl<number | null | undefined>,

		/** Sets whether this is residential delivery */
		residentialDelivery: FormControl<boolean | null | undefined>,

		/** Sets the shipping rule for the order */
		rule: FormControl<string | null | undefined>,

		/** Sets whether this is a saturday delivery */
		saturdayDelivery: FormControl<boolean | null | undefined>,

		/**
		 * Sets the date the shipment is scheduled for
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		scheduledDate: FormControl<Date | null | undefined>,

		/** Sets whether the order should be shipped separately or included in a batch segment */
		shipSeparately: FormControl<boolean | null | undefined>,

		/**
		 * Sets the unique id that represents the carrier and its service to be used for shipping the ordered goods.
		 * Max length: 15
		 */
		shipViaId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the shipping terms used for the order.
		 * Max length: 15
		 */
		termsId: FormControl<string | null | undefined>,

		/**
		 * Sets the shipping zone of the order freight
		 * Max length: 15
		 */
		zoneId: FormControl<string | null | undefined>,
	}
	export function CreateNewSalesOrderShippingDtoFormGroup() {
		return new FormGroup<NewSalesOrderShippingDtoFormProperties>({
			fobPointId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(15)]),
			insurance: new FormControl<boolean | null | undefined>(undefined),
			intrastatTransactionTypeId: new FormControl<number | null | undefined>(undefined),
			preferredWarehouseId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(30)]),
			priority: new FormControl<number | null | undefined>(undefined),
			residentialDelivery: new FormControl<boolean | null | undefined>(undefined),
			rule: new FormControl<string | null | undefined>(undefined),
			saturdayDelivery: new FormControl<boolean | null | undefined>(undefined),
			scheduledDate: new FormControl<Date | null | undefined>(undefined),
			shipSeparately: new FormControl<boolean | null | undefined>(undefined),
			shipViaId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(15)]),
			termsId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(15)]),
			zoneId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(15)]),
		});

	}


	/**
	 * Defines an address when updating a sales order.
	 * Only the provided fields will be changed in address.
	 */
	export interface PatchSalesOrderAddressDto {

		/**
		 * The city
		 * Max length: 50
		 */
		city?: string | null;

		/**
		 * The country.
		 * Max length: 2
		 */
		countryId?: string | null;

		/**
		 * Address line 1
		 * Max length: 50
		 */
		line1?: string | null;

		/**
		 * Address line 2
		 * Max length: 50
		 */
		line2?: string | null;

		/**
		 * Address line 3
		 * Max length: 50
		 */
		line3?: string | null;

		/** Whether this address overrides the default address */
		overridesDefault?: boolean | null;

		/**
		 * The postal code
		 * Max length: 20
		 */
		postalCode?: string | null;

		/**
		 * The state
		 * Max length: 50
		 */
		stateId?: string | null;
	}

	/**
	 * Defines an address when updating a sales order.
	 * Only the provided fields will be changed in address.
	 */
	export interface PatchSalesOrderAddressDtoFormProperties {

		/**
		 * The city
		 * Max length: 50
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * The country.
		 * Max length: 2
		 */
		countryId: FormControl<string | null | undefined>,

		/**
		 * Address line 1
		 * Max length: 50
		 */
		line1: FormControl<string | null | undefined>,

		/**
		 * Address line 2
		 * Max length: 50
		 */
		line2: FormControl<string | null | undefined>,

		/**
		 * Address line 3
		 * Max length: 50
		 */
		line3: FormControl<string | null | undefined>,

		/** Whether this address overrides the default address */
		overridesDefault: FormControl<boolean | null | undefined>,

		/**
		 * The postal code
		 * Max length: 20
		 */
		postalCode: FormControl<string | null | undefined>,

		/**
		 * The state
		 * Max length: 50
		 */
		stateId: FormControl<string | null | undefined>,
	}
	export function CreatePatchSalesOrderAddressDtoFormGroup() {
		return new FormGroup<PatchSalesOrderAddressDtoFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			countryId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2)]),
			line1: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			line2: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			line3: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			overridesDefault: new FormControl<boolean | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(20)]),
			stateId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
		});

	}

	export interface PatchSalesOrderBillingDto {

		/**
		 * Defines an address when updating a sales order.
		 * Only the provided fields will be changed in address.
		 */
		address?: PatchSalesOrderAddressDto;

		/**
		 * Defines an contact when updating a sales order.
		 * Only the provided fields will be changed in contact.
		 */
		contact?: PatchSalesOrderContactDto;
	}
	export interface PatchSalesOrderBillingDtoFormProperties {
	}
	export function CreatePatchSalesOrderBillingDtoFormGroup() {
		return new FormGroup<PatchSalesOrderBillingDtoFormProperties>({
		});

	}


	/**
	 * Defines an contact when updating a sales order.
	 * Only the provided fields will be changed in contact.
	 */
	export interface PatchSalesOrderContactDto {

		/**
		 * Sets any attention for the contact
		 * Max length: 255
		 */
		attention?: string | null;

		/**
		 * Sets the e-mail address of the contact
		 * Max length: 255
		 */
		email?: string | null;

		/**
		 * Sets the full name of the contact
		 * Max length: 255
		 */
		name?: string | null;

		/** Whether this contact overrides the default contact */
		overridesDefault?: boolean | null;

		/**
		 * Sets the primary phone number of the contact
		 * Max length: 50
		 */
		phone1?: string | null;
	}

	/**
	 * Defines an contact when updating a sales order.
	 * Only the provided fields will be changed in contact.
	 */
	export interface PatchSalesOrderContactDtoFormProperties {

		/**
		 * Sets any attention for the contact
		 * Max length: 255
		 */
		attention: FormControl<string | null | undefined>,

		/**
		 * Sets the e-mail address of the contact
		 * Max length: 255
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Sets the full name of the contact
		 * Max length: 255
		 */
		name: FormControl<string | null | undefined>,

		/** Whether this contact overrides the default contact */
		overridesDefault: FormControl<boolean | null | undefined>,

		/**
		 * Sets the primary phone number of the contact
		 * Max length: 50
		 */
		phone1: FormControl<string | null | undefined>,
	}
	export function CreatePatchSalesOrderContactDtoFormGroup() {
		return new FormGroup<PatchSalesOrderContactDtoFormProperties>({
			attention: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			overridesDefault: new FormControl<boolean | null | undefined>(undefined),
			phone1: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
		});

	}


	/** The Visma.net.ERP.SalesOrders.Api.Application.Commands.PatchSalesOrder.PatchSalesOrderCommand is a command for updating parts of a sales order */
	export interface PatchSalesOrderCommand {
		billing?: PatchSalesOrderBillingDto;

		/**
		 * The branch with which this order is associated.
		 * Max length: 30
		 */
		branchId?: string | null;

		/**
		 * Cancel by date for the order.
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		cancelBy?: Date | null;

		/**
		 * Override the CurrencyId for the order. Must be a valid currency Id.
		 * Max length: 5
		 */
		currencyId?: string | null;
		customer?: PatchSalesOrderCustomerDto;

		/**
		 * Sets the order date of the order.
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		date?: Date | null;

		/**
		 * Description for the order
		 * <br>Note that text fields should not contain any personally identifiable or otherwise sensitive data
		 * Max length: 255
		 */
		description?: string | null;
		financialInformation?: PatchSalesOrderFinancialInfoDto;
		freight?: PatchSalesOrderFreightDto;

		/**
		 * Any note to apply to the order header.
		 * Max length: 2048
		 */
		note?: string | null;

		/**
		 * Sets the unique identifier of the original order
		 * Max length: 15
		 */
		originalOrderId?: string | null;

		/**
		 * Sets the type code for the original sales order
		 * Max length: 2
		 */
		originalOrderType?: string | null;

		/** Sets the owner (employee) for the order */
		ownerId?: string | null;
		paymentSettings?: PatchSalesOrderPaymentSettingsDto;
		print?: SalesOrderPrintDto;

		/**
		 * The project with which this sales order is associated
		 * Max length: 30
		 */
		projectId?: string | null;

		/**
		 * Sets the requested on date for the order.
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		requestOn?: Date | null;

		/**
		 * Sets default sales person for the order
		 * Max length: 15
		 */
		salesPersonId?: string | null;
		shipping?: PatchSalesOrderShippingDto;

		/** Sets the status code for the order. Must be "Open", "Hold" or "BackOrder". */
		status?: string | null;

		/** Override the TaxZoneId for the order */
		taxZoneId?: string | null;

		/**
		 * When this option is set to `true`, the `costTotal` of the order will be calculated based on `replacementUnitCost`.
		 * If option is set to `false`, the `costTotal` will be calculated based on `unitCost`
		 */
		useReplacementCostForMarginAndProfit?: boolean | null;
	}

	/** The Visma.net.ERP.SalesOrders.Api.Application.Commands.PatchSalesOrder.PatchSalesOrderCommand is a command for updating parts of a sales order */
	export interface PatchSalesOrderCommandFormProperties {

		/**
		 * The branch with which this order is associated.
		 * Max length: 30
		 */
		branchId: FormControl<string | null | undefined>,

		/**
		 * Cancel by date for the order.
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		cancelBy: FormControl<Date | null | undefined>,

		/**
		 * Override the CurrencyId for the order. Must be a valid currency Id.
		 * Max length: 5
		 */
		currencyId: FormControl<string | null | undefined>,

		/**
		 * Sets the order date of the order.
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		date: FormControl<Date | null | undefined>,

		/**
		 * Description for the order
		 * <br>Note that text fields should not contain any personally identifiable or otherwise sensitive data
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Any note to apply to the order header.
		 * Max length: 2048
		 */
		note: FormControl<string | null | undefined>,

		/**
		 * Sets the unique identifier of the original order
		 * Max length: 15
		 */
		originalOrderId: FormControl<string | null | undefined>,

		/**
		 * Sets the type code for the original sales order
		 * Max length: 2
		 */
		originalOrderType: FormControl<string | null | undefined>,

		/** Sets the owner (employee) for the order */
		ownerId: FormControl<string | null | undefined>,

		/**
		 * The project with which this sales order is associated
		 * Max length: 30
		 */
		projectId: FormControl<string | null | undefined>,

		/**
		 * Sets the requested on date for the order.
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		requestOn: FormControl<Date | null | undefined>,

		/**
		 * Sets default sales person for the order
		 * Max length: 15
		 */
		salesPersonId: FormControl<string | null | undefined>,

		/** Sets the status code for the order. Must be "Open", "Hold" or "BackOrder". */
		status: FormControl<string | null | undefined>,

		/** Override the TaxZoneId for the order */
		taxZoneId: FormControl<string | null | undefined>,

		/**
		 * When this option is set to `true`, the `costTotal` of the order will be calculated based on `replacementUnitCost`.
		 * If option is set to `false`, the `costTotal` will be calculated based on `unitCost`
		 */
		useReplacementCostForMarginAndProfit: FormControl<boolean | null | undefined>,
	}
	export function CreatePatchSalesOrderCommandFormGroup() {
		return new FormGroup<PatchSalesOrderCommandFormProperties>({
			branchId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(30)]),
			cancelBy: new FormControl<Date | null | undefined>(undefined),
			currencyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(5)]),
			date: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			note: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			originalOrderId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(15)]),
			originalOrderType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2)]),
			ownerId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(30)]),
			requestOn: new FormControl<Date | null | undefined>(undefined),
			salesPersonId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(15)]),
			status: new FormControl<string | null | undefined>(undefined),
			taxZoneId: new FormControl<string | null | undefined>(undefined),
			useReplacementCostForMarginAndProfit: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PatchSalesOrderCustomerDto {

		/** The contact id for the customer */
		contactId?: number | null;

		/** The unique id of the the customer */
		id?: string | null;

		/**
		 * Sets the location for the customer supplied to use on the order.
		 * Must be a valid active location for the customer/>
		 */
		locationId?: string | null;

		/**
		 * The customer order text.
		 * Max length: 40
		 */
		order?: string | null;

		/**
		 * The customer ref number text. If null or not supplied the value will not be changed
		 * Max length: 40
		 */
		refNo?: string | null;

		/**
		 * Sets the terms to use for the sales order.
		 * Must be a valid terms identifier
		 */
		termsId?: string | null;
	}
	export interface PatchSalesOrderCustomerDtoFormProperties {

		/** The contact id for the customer */
		contactId: FormControl<number | null | undefined>,

		/** The unique id of the the customer */
		id: FormControl<string | null | undefined>,

		/**
		 * Sets the location for the customer supplied to use on the order.
		 * Must be a valid active location for the customer/>
		 */
		locationId: FormControl<string | null | undefined>,

		/**
		 * The customer order text.
		 * Max length: 40
		 */
		order: FormControl<string | null | undefined>,

		/**
		 * The customer ref number text. If null or not supplied the value will not be changed
		 * Max length: 40
		 */
		refNo: FormControl<string | null | undefined>,

		/**
		 * Sets the terms to use for the sales order.
		 * Must be a valid terms identifier
		 */
		termsId: FormControl<string | null | undefined>,
	}
	export function CreatePatchSalesOrderCustomerDtoFormGroup() {
		return new FormGroup<PatchSalesOrderCustomerDtoFormProperties>({
			contactId: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40)]),
			refNo: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40)]),
			termsId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchSalesOrderFinancialInfoDto {

		/**
		 * The date when the cash discount is available for the invoice created for the order. Default date is set based on the terms selected in the order.
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		cashDiscountDate?: Date | null;

		/**
		 * The due date for the invoice created for the order. Default due date is set according to the credit terms.
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		dueDate?: Date | null;

		/**
		 * Sets the invoice date of the invoice that will be generated for the order.
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		invoiceDate?: Date | null;

		/**
		 * The reference number of the invoice generated for this order.
		 * This can be used if the numbering sequence assigned to invoices is configured for manual numbering.
		 * Max length: 15
		 */
		invoiceId?: string | null;

		/** Sets if the order should be invoiced/billed separately */
		invoiceSeparately?: boolean | null;

		/**
		 * The post period for the invoice. This can be used to override the financial period. Must be a valid existing financial period.
		 * Max length: 6
		 */
		postPeriod?: string | null;
	}
	export interface PatchSalesOrderFinancialInfoDtoFormProperties {

		/**
		 * The date when the cash discount is available for the invoice created for the order. Default date is set based on the terms selected in the order.
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		cashDiscountDate: FormControl<Date | null | undefined>,

		/**
		 * The due date for the invoice created for the order. Default due date is set according to the credit terms.
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		dueDate: FormControl<Date | null | undefined>,

		/**
		 * Sets the invoice date of the invoice that will be generated for the order.
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		invoiceDate: FormControl<Date | null | undefined>,

		/**
		 * The reference number of the invoice generated for this order.
		 * This can be used if the numbering sequence assigned to invoices is configured for manual numbering.
		 * Max length: 15
		 */
		invoiceId: FormControl<string | null | undefined>,

		/** Sets if the order should be invoiced/billed separately */
		invoiceSeparately: FormControl<boolean | null | undefined>,

		/**
		 * The post period for the invoice. This can be used to override the financial period. Must be a valid existing financial period.
		 * Max length: 6
		 */
		postPeriod: FormControl<string | null | undefined>,
	}
	export function CreatePatchSalesOrderFinancialInfoDtoFormGroup() {
		return new FormGroup<PatchSalesOrderFinancialInfoDtoFormProperties>({
			cashDiscountDate: new FormControl<Date | null | undefined>(undefined),
			dueDate: new FormControl<Date | null | undefined>(undefined),
			invoiceDate: new FormControl<Date | null | undefined>(undefined),
			invoiceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(15)]),
			invoiceSeparately: new FormControl<boolean | null | undefined>(undefined),
			postPeriod: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(6)]),
		});

	}

	export interface PatchSalesOrderFreightDto {

		/** The freight cost calculated for the sales order, can be manually set if orders Ship via code allows it. */
		cost?: number | null;

		/** The additional freight charges for handling the order. */
		premiumAmount?: number | null;

		/**
		 * The tax category that applies to the freight amount.
		 * By default, it is the tax category associated with the ship via code selected for the order.
		 * Max length: 10
		 */
		taxCategoryId?: string | null;
	}
	export interface PatchSalesOrderFreightDtoFormProperties {

		/** The freight cost calculated for the sales order, can be manually set if orders Ship via code allows it. */
		cost: FormControl<number | null | undefined>,

		/** The additional freight charges for handling the order. */
		premiumAmount: FormControl<number | null | undefined>,

		/**
		 * The tax category that applies to the freight amount.
		 * By default, it is the tax category associated with the ship via code selected for the order.
		 * Max length: 10
		 */
		taxCategoryId: FormControl<string | null | undefined>,
	}
	export function CreatePatchSalesOrderFreightDtoFormGroup() {
		return new FormGroup<PatchSalesOrderFreightDtoFormProperties>({
			cost: new FormControl<number | null | undefined>(undefined),
			premiumAmount: new FormControl<number | null | undefined>(undefined),
			taxCategoryId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10)]),
		});

	}

	export interface PatchSalesOrderPaymentSettingsDto {

		/**
		 * The cash account associated with the set payment method.
		 * Max length: 10
		 */
		cashAccountId?: string | null;

		/** Overrides the default payment method set on the customer. This must be a valid and active payment method id. */
		paymentMethodId?: string | null;

		/**
		 * Sets the external reference number for the order. This must be set if order type requires it.
		 * Max length: 40
		 */
		paymentReference?: string | null;
	}
	export interface PatchSalesOrderPaymentSettingsDtoFormProperties {

		/**
		 * The cash account associated with the set payment method.
		 * Max length: 10
		 */
		cashAccountId: FormControl<string | null | undefined>,

		/** Overrides the default payment method set on the customer. This must be a valid and active payment method id. */
		paymentMethodId: FormControl<string | null | undefined>,

		/**
		 * Sets the external reference number for the order. This must be set if order type requires it.
		 * Max length: 40
		 */
		paymentReference: FormControl<string | null | undefined>,
	}
	export function CreatePatchSalesOrderPaymentSettingsDtoFormGroup() {
		return new FormGroup<PatchSalesOrderPaymentSettingsDtoFormProperties>({
			cashAccountId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10)]),
			paymentMethodId: new FormControl<string | null | undefined>(undefined),
			paymentReference: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40)]),
		});

	}

	export interface PatchSalesOrderShippingDto {

		/**
		 * Defines an address when updating a sales order.
		 * Only the provided fields will be changed in address.
		 */
		address?: PatchSalesOrderAddressDto;

		/**
		 * Defines an contact when updating a sales order.
		 * Only the provided fields will be changed in contact.
		 */
		contact?: PatchSalesOrderContactDto;

		/**
		 * The identifier of the point (such as a city or town) where the title of goods passes from the company to the customer.
		 * Max length: 15
		 */
		fobPointId?: string | null;

		/** Sets whether insurance applies to this shipping */
		insurance?: boolean | null;

		/** Sets the intrastat transaction type id for the sales order. Must be a valid intrastat transaction type id. */
		intrastatTransactionTypeId?: number | null;

		/**
		 * Sets the default site for the customer supplied to use on the order. Must be a valid site id
		 * If empty string, the default site for order will be removed
		 * Max length: 30
		 */
		preferredWarehouseId?: string | null;

		/** Sets priority of the order */
		priority?: number | null;

		/** Sets whether this is residential delivery */
		residentialDelivery?: boolean | null;

		/** Sets the shipping rule for the order */
		rule?: string | null;

		/** Sets whether this is a saturday delivery */
		saturdayDelivery?: boolean | null;

		/**
		 * Sets the date the shipment is scheduled for
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		scheduledDate?: Date | null;

		/** Sets whether the order should be shipped separately or included in a batch segment */
		shipSeparately?: boolean | null;

		/**
		 * Sets the unique id that represents the carrier and its service to be used for shipping the ordered goods. Must be a valid carrier id.
		 * If empty string then the value will be set to null
		 * Max length: 15
		 */
		shipViaId?: string | null;

		/**
		 * The identifier of the shipping terms used for the order.
		 * Max length: 15
		 */
		termsId?: string | null;

		/** Sets the shipping zone of the order freight */
		zoneId?: string | null;
	}
	export interface PatchSalesOrderShippingDtoFormProperties {

		/**
		 * The identifier of the point (such as a city or town) where the title of goods passes from the company to the customer.
		 * Max length: 15
		 */
		fobPointId: FormControl<string | null | undefined>,

		/** Sets whether insurance applies to this shipping */
		insurance: FormControl<boolean | null | undefined>,

		/** Sets the intrastat transaction type id for the sales order. Must be a valid intrastat transaction type id. */
		intrastatTransactionTypeId: FormControl<number | null | undefined>,

		/**
		 * Sets the default site for the customer supplied to use on the order. Must be a valid site id
		 * If empty string, the default site for order will be removed
		 * Max length: 30
		 */
		preferredWarehouseId: FormControl<string | null | undefined>,

		/** Sets priority of the order */
		priority: FormControl<number | null | undefined>,

		/** Sets whether this is residential delivery */
		residentialDelivery: FormControl<boolean | null | undefined>,

		/** Sets the shipping rule for the order */
		rule: FormControl<string | null | undefined>,

		/** Sets whether this is a saturday delivery */
		saturdayDelivery: FormControl<boolean | null | undefined>,

		/**
		 * Sets the date the shipment is scheduled for
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		scheduledDate: FormControl<Date | null | undefined>,

		/** Sets whether the order should be shipped separately or included in a batch segment */
		shipSeparately: FormControl<boolean | null | undefined>,

		/**
		 * Sets the unique id that represents the carrier and its service to be used for shipping the ordered goods. Must be a valid carrier id.
		 * If empty string then the value will be set to null
		 * Max length: 15
		 */
		shipViaId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the shipping terms used for the order.
		 * Max length: 15
		 */
		termsId: FormControl<string | null | undefined>,

		/** Sets the shipping zone of the order freight */
		zoneId: FormControl<string | null | undefined>,
	}
	export function CreatePatchSalesOrderShippingDtoFormGroup() {
		return new FormGroup<PatchSalesOrderShippingDtoFormProperties>({
			fobPointId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(15)]),
			insurance: new FormControl<boolean | null | undefined>(undefined),
			intrastatTransactionTypeId: new FormControl<number | null | undefined>(undefined),
			preferredWarehouseId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(30)]),
			priority: new FormControl<number | null | undefined>(undefined),
			residentialDelivery: new FormControl<boolean | null | undefined>(undefined),
			rule: new FormControl<string | null | undefined>(undefined),
			saturdayDelivery: new FormControl<boolean | null | undefined>(undefined),
			scheduledDate: new FormControl<Date | null | undefined>(undefined),
			shipSeparately: new FormControl<boolean | null | undefined>(undefined),
			shipViaId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(15)]),
			termsId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(15)]),
			zoneId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The sales order line which is set to patch */
	export interface PatchSalesOrderLineDto {

		/**
		 * Sets the branch with which this line is associated.
		 * If `BranchId` is provided as (null), the value will be set from from order `BranchId`
		 */
		branchId?: string | null;

		/** Indicates if line is comissionable. */
		commissionable?: boolean | null;

		/**
		 * Sets the description of the order line item. This will override the default description from the inventory item
		 * <br>Note that text fields should not contain any personally identifiable or otherwise sensitive data
		 * Max length: 256
		 */
		description?: string | null;

		/**
		 * Sets the manual currency discount amount for the line.
		 * <remarks>
		 * Note that the behavior of the 'discountAmount' field is affected by the 'hasManualDiscount' option.
		 * If 'hasManualDiscount' is provided and set to "false", and 'discountAmount' is provided, the system will set the discountAmount according to the predefined rules.
		 * </remarks>
		 */
		discountAmount?: number | null;

		/**
		 * Sets the discount for the line if applicable. This must be one of the selectable discount codes.
		 * <remarks>
		 * Note that the behavior of the 'discountCode' field is affected by the 'hasManualDiscount' option.
		 * If 'hasManualDiscount' is provided and set to "false", and 'discountCode' is provided, the system will set the discountCode according to the predefined rules.
		 * </remarks>
		 * Max length: 10
		 */
		discountCode?: string | null;

		/**
		 * Sets the manual percentage discount for the line.
		 * <remarks>
		 * Note that the behavior of the 'discountPercent' field is affected by the 'hasManualDiscount' option.
		 * If 'hasManualDiscount' is provided and set to "false", and 'discountPercent' is provided, the system will set the discountPercent according to the predefined rules.
		 * </remarks>
		 * Minimum: -100
		 * Maximum: 100
		 */
		discountPercent?: number | null;

		/**
		 * Sets the external link for the line
		 * Max length: 255
		 */
		externalLink?: string | null;

		/**
		 * Indicates that line level discount is applied manually.
		 * <remarks>
		 * Note that the behavior of the fields 'discountCode', 'discountPercent' and 'discountAmount' is affected by this option.
		 * If 'hasManualDiscount' is provided and set to "false", and discount field(s) is provided, the system will set the line level discounts according to the predefined rules.
		 * </remarks>
		 */
		hasManualDiscount?: boolean | null;

		/**
		 * Indicates that the `unitPrice` in this line has been specified manually.
		 * If set to "false", the system updates the unit price in the line according to predefined rules.
		 * Note that the behavior of the field `unitPrice` is affected by this option.
		 * If `hasManualPrice` is provided and set to "false", and `unitPrice` is provided, the system will set the `unitPrice` according to the predefined rules.
		 */
		hasManualPrice?: boolean | null;

		/**
		 * The line id of the line.
		 * Required
		 */
		lineId: number;

		/**
		 * Any note to apply to the order header.
		 * Max length: 2048
		 */
		note?: string | null;

		/** The type of operation the line represents to the order. Acceptable values are 'Issue' or 'Receipt'. This must be a valid operation for sales order type. */
		operation?: string | null;

		/**
		 * Sets the overship threshold in percent. If not set, information from the inventory item is used
		 * Minimum: 100
		 * Maximum: 999
		 */
		overshipThreshold?: number | null;

		/**
		 * The project task with which this sales order line is associated
		 * Max length: 30
		 */
		projectTaskId?: string | null;

		/**
		 * Sets the purchase source of the line.
		 * Accepted values are `dropShip` or `purchaseToOrder`, when null provided, value will be set from default value from the inventory item.
		 * If the value was provided as '' (empty string), the value will set to null.
		 */
		purchaseOrderSource?: string | null;

		/** Sets the quantity of items on the order line */
		quantity?: number | null;

		/** Patch the reason code for the line. This must be one of the selectable reason codes */
		reasonCode?: string | null;

		/**
		 * Sets the date the order line is requested (Requested On)
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		requestDate?: Date | null;

		/**
		 * Overrides the Sales Account Id of the line. The value must be one of the selectable Accounts.
		 * If not set, a value based on the rules is used
		 * Max length: 10
		 */
		salesAccountId?: string | null;

		/**
		 * Sets the sales person for the line.
		 * If `SalesPersonId` is provided as (null), the value will be set from from order `SalesPersonId`
		 * Max length: 15
		 */
		salesPersonId?: string | null;

		/**
		 * Sets the day the order line should be shipped, so that the customer gets it on the requested date (Ship On).
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		shipDate?: Date | null;

		/**
		 * The way the line item should be shipped.
		 * <br>One of the following options can be set:<br><list type="bullet"><item><term>CancelRemainder: </term><description>The ordered quantity should be delivered in one shipment</description></item><item><term>BackOrderAllowed: </term><description>The ordered quantity can be delivered in multiple shipments.</description></item><item><term>ShipComplete: </term><description>The ordered quantity should be delivered in one shipment.</description></item></list>
		 */
		shippingRule?: string | null;
		sortOrder?: number | null;

		/**
		 * Overrides the Subaccount setup for the line.
		 * Each entry corresponds to a subaccount id/value pair
		 */
		subaccount?: {[id: string]: string };

		/** Sets the Purchase Order Vendor for the line, can be set if the purchase order source is `purchaseToOrder` or `dropShip`. */
		supplierId?: string | null;

		/** Sets the supplier price for the line item. */
		supplierPrice?: number | null;

		/** Overrides the default tax category id. The value must be one of the selectable Tax Categories */
		taxCategoryId?: string | null;

		/**
		 * Sets the undership threshold in percent. If not set, information from the inventory item is used
		 * Minimum: 0
		 * Maximum: 100
		 */
		undershipThreshold?: number | null;

		/** Sets the unit cost of the product on the line. */
		unitCost?: number | null;

		/**
		 * Sets the Unit of measure for the line item. This will override the default UOM for the inventory item
		 * Max length: 6
		 */
		unitOfMeasure?: string | null;

		/**
		 * Sets the unit price for the product on the line.
		 * If no price is set(null or omitted) the price will be set according to predefined rules based on the inventoryId and the customer.
		 * Note that the behavior of the `unitPrice` field is affected by the `hasManualPrice` option.
		 * If `hasManualPrice` is provided and set to "false", and `unitPrice` is provided, the system will set the `unitPrice` according to the predefined rules.
		 */
		unitPrice?: number | null;

		/** Sets the warehouse the item should be shipped from. This will override the default, or the one set on the order head. */
		warehouseId?: string | null;

		/**
		 * Sets the warehouse location that will be used for the shipment generated for the order the warehouse location Id for this line.
		 * This must be a valid location for `warehouseId` and will override the default if set.
		 */
		warehouseLocationId?: string | null;
	}

	/** The sales order line which is set to patch */
	export interface PatchSalesOrderLineDtoFormProperties {

		/**
		 * Sets the branch with which this line is associated.
		 * If `BranchId` is provided as (null), the value will be set from from order `BranchId`
		 */
		branchId: FormControl<string | null | undefined>,

		/** Indicates if line is comissionable. */
		commissionable: FormControl<boolean | null | undefined>,

		/**
		 * Sets the description of the order line item. This will override the default description from the inventory item
		 * <br>Note that text fields should not contain any personally identifiable or otherwise sensitive data
		 * Max length: 256
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Sets the manual currency discount amount for the line.
		 * <remarks>
		 * Note that the behavior of the 'discountAmount' field is affected by the 'hasManualDiscount' option.
		 * If 'hasManualDiscount' is provided and set to "false", and 'discountAmount' is provided, the system will set the discountAmount according to the predefined rules.
		 * </remarks>
		 */
		discountAmount: FormControl<number | null | undefined>,

		/**
		 * Sets the discount for the line if applicable. This must be one of the selectable discount codes.
		 * <remarks>
		 * Note that the behavior of the 'discountCode' field is affected by the 'hasManualDiscount' option.
		 * If 'hasManualDiscount' is provided and set to "false", and 'discountCode' is provided, the system will set the discountCode according to the predefined rules.
		 * </remarks>
		 * Max length: 10
		 */
		discountCode: FormControl<string | null | undefined>,

		/**
		 * Sets the manual percentage discount for the line.
		 * <remarks>
		 * Note that the behavior of the 'discountPercent' field is affected by the 'hasManualDiscount' option.
		 * If 'hasManualDiscount' is provided and set to "false", and 'discountPercent' is provided, the system will set the discountPercent according to the predefined rules.
		 * </remarks>
		 * Minimum: -100
		 * Maximum: 100
		 */
		discountPercent: FormControl<number | null | undefined>,

		/**
		 * Sets the external link for the line
		 * Max length: 255
		 */
		externalLink: FormControl<string | null | undefined>,

		/**
		 * Indicates that line level discount is applied manually.
		 * <remarks>
		 * Note that the behavior of the fields 'discountCode', 'discountPercent' and 'discountAmount' is affected by this option.
		 * If 'hasManualDiscount' is provided and set to "false", and discount field(s) is provided, the system will set the line level discounts according to the predefined rules.
		 * </remarks>
		 */
		hasManualDiscount: FormControl<boolean | null | undefined>,

		/**
		 * Indicates that the `unitPrice` in this line has been specified manually.
		 * If set to "false", the system updates the unit price in the line according to predefined rules.
		 * Note that the behavior of the field `unitPrice` is affected by this option.
		 * If `hasManualPrice` is provided and set to "false", and `unitPrice` is provided, the system will set the `unitPrice` according to the predefined rules.
		 */
		hasManualPrice: FormControl<boolean | null | undefined>,

		/**
		 * The line id of the line.
		 * Required
		 */
		lineId: FormControl<number | null | undefined>,

		/**
		 * Any note to apply to the order header.
		 * Max length: 2048
		 */
		note: FormControl<string | null | undefined>,

		/** The type of operation the line represents to the order. Acceptable values are 'Issue' or 'Receipt'. This must be a valid operation for sales order type. */
		operation: FormControl<string | null | undefined>,

		/**
		 * Sets the overship threshold in percent. If not set, information from the inventory item is used
		 * Minimum: 100
		 * Maximum: 999
		 */
		overshipThreshold: FormControl<number | null | undefined>,

		/**
		 * The project task with which this sales order line is associated
		 * Max length: 30
		 */
		projectTaskId: FormControl<string | null | undefined>,

		/**
		 * Sets the purchase source of the line.
		 * Accepted values are `dropShip` or `purchaseToOrder`, when null provided, value will be set from default value from the inventory item.
		 * If the value was provided as '' (empty string), the value will set to null.
		 */
		purchaseOrderSource: FormControl<string | null | undefined>,

		/** Sets the quantity of items on the order line */
		quantity: FormControl<number | null | undefined>,

		/** Patch the reason code for the line. This must be one of the selectable reason codes */
		reasonCode: FormControl<string | null | undefined>,

		/**
		 * Sets the date the order line is requested (Requested On)
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		requestDate: FormControl<Date | null | undefined>,

		/**
		 * Overrides the Sales Account Id of the line. The value must be one of the selectable Accounts.
		 * If not set, a value based on the rules is used
		 * Max length: 10
		 */
		salesAccountId: FormControl<string | null | undefined>,

		/**
		 * Sets the sales person for the line.
		 * If `SalesPersonId` is provided as (null), the value will be set from from order `SalesPersonId`
		 * Max length: 15
		 */
		salesPersonId: FormControl<string | null | undefined>,

		/**
		 * Sets the day the order line should be shipped, so that the customer gets it on the requested date (Ship On).
		 * Unless a specific time zone offset is specified with the date (e.g. '2012-12-24T13:30:23+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		shipDate: FormControl<Date | null | undefined>,

		/**
		 * The way the line item should be shipped.
		 * <br>One of the following options can be set:<br><list type="bullet"><item><term>CancelRemainder: </term><description>The ordered quantity should be delivered in one shipment</description></item><item><term>BackOrderAllowed: </term><description>The ordered quantity can be delivered in multiple shipments.</description></item><item><term>ShipComplete: </term><description>The ordered quantity should be delivered in one shipment.</description></item></list>
		 */
		shippingRule: FormControl<string | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,

		/**
		 * Overrides the Subaccount setup for the line.
		 * Each entry corresponds to a subaccount id/value pair
		 */
		subaccount: FormControl<{[id: string]: string } | null | undefined>,

		/** Sets the Purchase Order Vendor for the line, can be set if the purchase order source is `purchaseToOrder` or `dropShip`. */
		supplierId: FormControl<string | null | undefined>,

		/** Sets the supplier price for the line item. */
		supplierPrice: FormControl<number | null | undefined>,

		/** Overrides the default tax category id. The value must be one of the selectable Tax Categories */
		taxCategoryId: FormControl<string | null | undefined>,

		/**
		 * Sets the undership threshold in percent. If not set, information from the inventory item is used
		 * Minimum: 0
		 * Maximum: 100
		 */
		undershipThreshold: FormControl<number | null | undefined>,

		/** Sets the unit cost of the product on the line. */
		unitCost: FormControl<number | null | undefined>,

		/**
		 * Sets the Unit of measure for the line item. This will override the default UOM for the inventory item
		 * Max length: 6
		 */
		unitOfMeasure: FormControl<string | null | undefined>,

		/**
		 * Sets the unit price for the product on the line.
		 * If no price is set(null or omitted) the price will be set according to predefined rules based on the inventoryId and the customer.
		 * Note that the behavior of the `unitPrice` field is affected by the `hasManualPrice` option.
		 * If `hasManualPrice` is provided and set to "false", and `unitPrice` is provided, the system will set the `unitPrice` according to the predefined rules.
		 */
		unitPrice: FormControl<number | null | undefined>,

		/** Sets the warehouse the item should be shipped from. This will override the default, or the one set on the order head. */
		warehouseId: FormControl<string | null | undefined>,

		/**
		 * Sets the warehouse location that will be used for the shipment generated for the order the warehouse location Id for this line.
		 * This must be a valid location for `warehouseId` and will override the default if set.
		 */
		warehouseLocationId: FormControl<string | null | undefined>,
	}
	export function CreatePatchSalesOrderLineDtoFormGroup() {
		return new FormGroup<PatchSalesOrderLineDtoFormProperties>({
			branchId: new FormControl<string | null | undefined>(undefined),
			commissionable: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			discountAmount: new FormControl<number | null | undefined>(undefined),
			discountCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10)]),
			discountPercent: new FormControl<number | null | undefined>(undefined, [Validators.min(-100), Validators.max(100)]),
			externalLink: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			hasManualDiscount: new FormControl<boolean | null | undefined>(undefined),
			hasManualPrice: new FormControl<boolean | null | undefined>(undefined),
			lineId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			note: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			operation: new FormControl<string | null | undefined>(undefined),
			overshipThreshold: new FormControl<number | null | undefined>(undefined, [Validators.min(100), Validators.max(999)]),
			projectTaskId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(30)]),
			purchaseOrderSource: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			reasonCode: new FormControl<string | null | undefined>(undefined),
			requestDate: new FormControl<Date | null | undefined>(undefined),
			salesAccountId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10)]),
			salesPersonId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(15)]),
			shipDate: new FormControl<Date | null | undefined>(undefined),
			shippingRule: new FormControl<string | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
			subaccount: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			supplierId: new FormControl<string | null | undefined>(undefined),
			supplierPrice: new FormControl<number | null | undefined>(undefined),
			taxCategoryId: new FormControl<string | null | undefined>(undefined),
			undershipThreshold: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			unitCost: new FormControl<number | null | undefined>(undefined),
			unitOfMeasure: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(6)]),
			unitPrice: new FormControl<number | null | undefined>(undefined),
			warehouseId: new FormControl<string | null | undefined>(undefined),
			warehouseLocationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Visma.net.ERP.SalesOrders.Api.Application.Commands.PatchSalesOrderLines.PatchSalesOrderLinesCommand is a command for updating the lines of a sales order */
	export interface PatchSalesOrderLinesCommand {

		/** The sales order lines that are set to patch */
		lines?: Array<PatchSalesOrderLineDto>;
	}

	/** The Visma.net.ERP.SalesOrders.Api.Application.Commands.PatchSalesOrderLines.PatchSalesOrderLinesCommand is a command for updating the lines of a sales order */
	export interface PatchSalesOrderLinesCommandFormProperties {
	}
	export function CreatePatchSalesOrderLinesCommandFormGroup() {
		return new FormGroup<PatchSalesOrderLinesCommandFormProperties>({
		});

	}

	export interface ProblemDetails {
		detail?: string | null;
		instance?: string | null;
		status?: number | null;
		title?: string | null;
		type?: string | null;
	}
	export interface ProblemDetailsFormProperties {
		detail: FormControl<string | null | undefined>,
		instance: FormControl<string | null | undefined>,
		status: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateProblemDetailsFormGroup() {
		return new FormGroup<ProblemDetailsFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Visma.net.ERP.SalesOrders.Api.Dto.ProjectDto class defines a project reference for a sales order */
	export interface ProjectDto {

		/** The description */
		description?: string | null;

		/** The id */
		id?: string | null;

		/** An internal unique identifier of the project */
		internalId?: number | null;
	}

	/** The Visma.net.ERP.SalesOrders.Api.Dto.ProjectDto class defines a project reference for a sales order */
	export interface ProjectDtoFormProperties {

		/** The description */
		description: FormControl<string | null | undefined>,

		/** The id */
		id: FormControl<string | null | undefined>,

		/** An internal unique identifier of the project */
		internalId: FormControl<number | null | undefined>,
	}
	export function CreateProjectDtoFormGroup() {
		return new FormGroup<ProjectDtoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			internalId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SalesOrderBillingDto {
		address?: AddressDto;
		contact?: ContactDto;
	}
	export interface SalesOrderBillingDtoFormProperties {
	}
	export function CreateSalesOrderBillingDtoFormGroup() {
		return new FormGroup<SalesOrderBillingDtoFormProperties>({
		});

	}

	export interface SalesOrderCommissionDto {

		/** The commission amount */
		amount?: number | null;

		/** The order's commissionable amount */
		commissionableAmount?: number | null;

		/** The commission percent */
		percent?: number | null;

		/** The id of the sales person that gets the commision */
		salesPersonId?: string | null;
	}
	export interface SalesOrderCommissionDtoFormProperties {

		/** The commission amount */
		amount: FormControl<number | null | undefined>,

		/** The order's commissionable amount */
		commissionableAmount: FormControl<number | null | undefined>,

		/** The commission percent */
		percent: FormControl<number | null | undefined>,

		/** The id of the sales person that gets the commision */
		salesPersonId: FormControl<string | null | undefined>,
	}
	export function CreateSalesOrderCommissionDtoFormGroup() {
		return new FormGroup<SalesOrderCommissionDtoFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			commissionableAmount: new FormControl<number | null | undefined>(undefined),
			percent: new FormControl<number | null | undefined>(undefined),
			salesPersonId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesOrderCustomerDto {

		/** The contact id for the customer */
		contactId?: number | null;

		/** The unique id of the the customer */
		id?: string | null;

		/** An internal unique id of the customer */
		internalId?: number | null;
		location?: CustomerLocationDto;

		/** The customer name */
		name?: string | null;

		/** The customer order text */
		order?: string | null;

		/** The customer ref number text */
		refNo?: string | null;
		taxZone?: CdDescriptionPairDto;
	}
	export interface SalesOrderCustomerDtoFormProperties {

		/** The contact id for the customer */
		contactId: FormControl<number | null | undefined>,

		/** The unique id of the the customer */
		id: FormControl<string | null | undefined>,

		/** An internal unique id of the customer */
		internalId: FormControl<number | null | undefined>,

		/** The customer name */
		name: FormControl<string | null | undefined>,

		/** The customer order text */
		order: FormControl<string | null | undefined>,

		/** The customer ref number text */
		refNo: FormControl<string | null | undefined>,
	}
	export function CreateSalesOrderCustomerDtoFormGroup() {
		return new FormGroup<SalesOrderCustomerDtoFormProperties>({
			contactId: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			internalId: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<string | null | undefined>(undefined),
			refNo: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesOrderDiscountDto {

		/** The amount of the discount */
		discountAmount?: number | null;

		/** The identifier of the discount applied to the order */
		discountId?: string | null;

		/** The discount percent, if the discount is defined to be calculated as a percentage */
		discountPercent?: number | null;

		/** The identifier of the discount sequence of the discount ID applied to the order */
		discountSequenceId?: string | null;

		/** The amount used as a base for discount calculation if the discount is based on amount. */
		discountableAmount?: number | null;

		/** The quantity used as a base for discount calculation if the discount is based on quantity. */
		discountableQuantity?: number | null;
		freeItem?: CdDescriptionPairDto;

		/** The quantity of the free item. Used to set the quantity for the order line generate by a free item discount */
		freeItemQuantity?: number | null;

		/** Indicates that the discount has been applied manually */
		isManual?: boolean | null;

		/** The number of discount line set for the order */
		manualOrderIndex?: number | null;

		/** Indicates if the discount has been cancelled for the order and is not applicable */
		skipDiscount?: boolean | null;

		/** The type of discount whose sequence was applied to the document(Group or Document) */
		type?: string | null;
	}
	export interface SalesOrderDiscountDtoFormProperties {

		/** The amount of the discount */
		discountAmount: FormControl<number | null | undefined>,

		/** The identifier of the discount applied to the order */
		discountId: FormControl<string | null | undefined>,

		/** The discount percent, if the discount is defined to be calculated as a percentage */
		discountPercent: FormControl<number | null | undefined>,

		/** The identifier of the discount sequence of the discount ID applied to the order */
		discountSequenceId: FormControl<string | null | undefined>,

		/** The amount used as a base for discount calculation if the discount is based on amount. */
		discountableAmount: FormControl<number | null | undefined>,

		/** The quantity used as a base for discount calculation if the discount is based on quantity. */
		discountableQuantity: FormControl<number | null | undefined>,

		/** The quantity of the free item. Used to set the quantity for the order line generate by a free item discount */
		freeItemQuantity: FormControl<number | null | undefined>,

		/** Indicates that the discount has been applied manually */
		isManual: FormControl<boolean | null | undefined>,

		/** The number of discount line set for the order */
		manualOrderIndex: FormControl<number | null | undefined>,

		/** Indicates if the discount has been cancelled for the order and is not applicable */
		skipDiscount: FormControl<boolean | null | undefined>,

		/** The type of discount whose sequence was applied to the document(Group or Document) */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSalesOrderDiscountDtoFormGroup() {
		return new FormGroup<SalesOrderDiscountDtoFormProperties>({
			discountAmount: new FormControl<number | null | undefined>(undefined),
			discountId: new FormControl<string | null | undefined>(undefined),
			discountPercent: new FormControl<number | null | undefined>(undefined),
			discountSequenceId: new FormControl<string | null | undefined>(undefined),
			discountableAmount: new FormControl<number | null | undefined>(undefined),
			discountableQuantity: new FormControl<number | null | undefined>(undefined),
			freeItemQuantity: new FormControl<number | null | undefined>(undefined),
			isManual: new FormControl<boolean | null | undefined>(undefined),
			manualOrderIndex: new FormControl<number | null | undefined>(undefined),
			skipDiscount: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesOrderDto {

		/** The attachments of the order */
		attachments?: Array<AttachmentDto>;
		billing?: SalesOrderBillingDto;
		branch?: CdDescriptionPairDto;

		/**
		 * The cancel date for the order
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		cancelBy?: Date | null;

		/** The user name of the creator of the order. If the order was created by an API call this field will be null or empty. */
		createdBy?: string | null;

		/** CurrencyId for the order. */
		currencyId?: string | null;
		customer?: SalesOrderCustomerDto;

		/**
		 * Date the order was submitted
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		date?: Date | null;

		/** Description of the order */
		description?: string | null;
		financialInformation?: SalesOrderFinancialInfoDto;
		freight?: SalesOrderFreightDto;

		/** Whether the order is ROT/RUT deductible */
		isRotRutDeductable?: boolean | null;

		/**
		 * Date the order was last modified
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		lastModified?: Date | null;

		/** Any notes on the order */
		note?: string | null;

		/** The unique identifier of the order */
		orderId?: string | null;

		/** The total quantity of inventory items in the order */
		orderQty?: number | null;
		origin?: SalesOrderOriginDto;

		/** The unique identifier of the original order */
		originalOrderId?: string | null;

		/** The type code for the original sales order */
		originalOrderType?: string | null;
		owner?: EmployeeDto;
		paymentSettings?: SalesOrderPaymentDto;
		print?: SalesOrderPrintDto;

		/** The Visma.net.ERP.SalesOrders.Api.Dto.ProjectDto class defines a project reference for a sales order */
		project?: ProjectDto;

		/**
		 * Date the order was requested
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		requestOn?: Date | null;
		salesPerson?: SalesPersonDto;
		shipping?: SalesOrderShippingDto;
		status?: SalesOrderStatusDto;
		totals?: SalesOrderTotalsDto;

		/** The type code for the sales order */
		type?: string | null;

		/**
		 * When this option is set to `true`, the `costTotal` of the order will be calculated based on `replacementUnitCost`.
		 * If option is set to `false`, the `costTotal` will be calculated based on `unitCost`
		 */
		useReplacementCostForMarginAndProfit?: boolean | null;

		/** An internal order version used for detecting concurrent updates to an order */
		version?: string | null;
	}
	export interface SalesOrderDtoFormProperties {

		/**
		 * The cancel date for the order
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		cancelBy: FormControl<Date | null | undefined>,

		/** The user name of the creator of the order. If the order was created by an API call this field will be null or empty. */
		createdBy: FormControl<string | null | undefined>,

		/** CurrencyId for the order. */
		currencyId: FormControl<string | null | undefined>,

		/**
		 * Date the order was submitted
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		date: FormControl<Date | null | undefined>,

		/** Description of the order */
		description: FormControl<string | null | undefined>,

		/** Whether the order is ROT/RUT deductible */
		isRotRutDeductable: FormControl<boolean | null | undefined>,

		/**
		 * Date the order was last modified
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		lastModified: FormControl<Date | null | undefined>,

		/** Any notes on the order */
		note: FormControl<string | null | undefined>,

		/** The unique identifier of the order */
		orderId: FormControl<string | null | undefined>,

		/** The total quantity of inventory items in the order */
		orderQty: FormControl<number | null | undefined>,

		/** The unique identifier of the original order */
		originalOrderId: FormControl<string | null | undefined>,

		/** The type code for the original sales order */
		originalOrderType: FormControl<string | null | undefined>,

		/**
		 * Date the order was requested
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		requestOn: FormControl<Date | null | undefined>,

		/** The type code for the sales order */
		type: FormControl<string | null | undefined>,

		/**
		 * When this option is set to `true`, the `costTotal` of the order will be calculated based on `replacementUnitCost`.
		 * If option is set to `false`, the `costTotal` will be calculated based on `unitCost`
		 */
		useReplacementCostForMarginAndProfit: FormControl<boolean | null | undefined>,

		/** An internal order version used for detecting concurrent updates to an order */
		version: FormControl<string | null | undefined>,
	}
	export function CreateSalesOrderDtoFormGroup() {
		return new FormGroup<SalesOrderDtoFormProperties>({
			cancelBy: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			currencyId: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			isRotRutDeductable: new FormControl<boolean | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			orderQty: new FormControl<number | null | undefined>(undefined),
			originalOrderId: new FormControl<string | null | undefined>(undefined),
			originalOrderType: new FormControl<string | null | undefined>(undefined),
			requestOn: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			useReplacementCostForMarginAndProfit: new FormControl<boolean | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesOrderFinancialInfoDto {

		/**
		 * The date for the cash discount
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		cashDiscountDate?: Date | null;

		/**
		 * The due date for the invoice
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		dueDate?: Date | null;

		/**
		 * The invoice date
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		invoiceDate?: Date | null;

		/** The id of the invoice issued for the order */
		invoiceId?: string | null;

		/** Whether the order should be invoiced separately */
		invoiceSeparately?: boolean | null;

		/** The post period for the invoice */
		postPeriod?: string | null;
		terms?: CdDescriptionPairDto;
	}
	export interface SalesOrderFinancialInfoDtoFormProperties {

		/**
		 * The date for the cash discount
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		cashDiscountDate: FormControl<Date | null | undefined>,

		/**
		 * The due date for the invoice
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		dueDate: FormControl<Date | null | undefined>,

		/**
		 * The invoice date
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		invoiceDate: FormControl<Date | null | undefined>,

		/** The id of the invoice issued for the order */
		invoiceId: FormControl<string | null | undefined>,

		/** Whether the order should be invoiced separately */
		invoiceSeparately: FormControl<boolean | null | undefined>,

		/** The post period for the invoice */
		postPeriod: FormControl<string | null | undefined>,
	}
	export function CreateSalesOrderFinancialInfoDtoFormGroup() {
		return new FormGroup<SalesOrderFinancialInfoDtoFormProperties>({
			cashDiscountDate: new FormControl<Date | null | undefined>(undefined),
			dueDate: new FormControl<Date | null | undefined>(undefined),
			invoiceDate: new FormControl<Date | null | undefined>(undefined),
			invoiceId: new FormControl<string | null | undefined>(undefined),
			invoiceSeparately: new FormControl<boolean | null | undefined>(undefined),
			postPeriod: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesOrderFreightDto {

		/**
		 * The amounts calculated based on the ship terms.
		 * ///
		 */
		amount?: number | null;

		/** The amounts calculated based on the ship terms in base currency of the order. */
		amountInBaseCurrency?: number | null;

		/** The freight cost calculated for the sales order, */
		cost?: number | null;

		/** The freight cost calculated for the sales order in base currency. */
		costInBaseCurrency?: number | null;

		/** The additional freight charges for handling the order. */
		premiumAmount?: number | null;

		/** The additional freight charges in base currency for handling the order. */
		premiumAmountInBaseCurrency?: number | null;

		/**
		 * The tax category that applies to the freight amount.
		 * By default, it is the tax category associated with the ship via code selected for the order.
		 */
		taxCategoryId?: string | null;
		volume?: number | null;
		weight?: number | null;
	}
	export interface SalesOrderFreightDtoFormProperties {

		/**
		 * The amounts calculated based on the ship terms.
		 * ///
		 */
		amount: FormControl<number | null | undefined>,

		/** The amounts calculated based on the ship terms in base currency of the order. */
		amountInBaseCurrency: FormControl<number | null | undefined>,

		/** The freight cost calculated for the sales order, */
		cost: FormControl<number | null | undefined>,

		/** The freight cost calculated for the sales order in base currency. */
		costInBaseCurrency: FormControl<number | null | undefined>,

		/** The additional freight charges for handling the order. */
		premiumAmount: FormControl<number | null | undefined>,

		/** The additional freight charges in base currency for handling the order. */
		premiumAmountInBaseCurrency: FormControl<number | null | undefined>,

		/**
		 * The tax category that applies to the freight amount.
		 * By default, it is the tax category associated with the ship via code selected for the order.
		 */
		taxCategoryId: FormControl<string | null | undefined>,
		volume: FormControl<number | null | undefined>,
		weight: FormControl<number | null | undefined>,
	}
	export function CreateSalesOrderFreightDtoFormGroup() {
		return new FormGroup<SalesOrderFreightDtoFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			amountInBaseCurrency: new FormControl<number | null | undefined>(undefined),
			cost: new FormControl<number | null | undefined>(undefined),
			costInBaseCurrency: new FormControl<number | null | undefined>(undefined),
			premiumAmount: new FormControl<number | null | undefined>(undefined),
			premiumAmountInBaseCurrency: new FormControl<number | null | undefined>(undefined),
			taxCategoryId: new FormControl<string | null | undefined>(undefined),
			volume: new FormControl<number | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SalesOrderOriginDto {

		/** Links applicable for the dto */
		_links?: {[id: string]: DtoLink };

		/** The unique id of the origin order */
		orderId?: string | null;

		/** The order type code for the origin order */
		orderType?: string | null;
	}
	export interface SalesOrderOriginDtoFormProperties {

		/** Links applicable for the dto */
		_links: FormControl<{[id: string]: DtoLink } | null | undefined>,

		/** The unique id of the origin order */
		orderId: FormControl<string | null | undefined>,

		/** The order type code for the origin order */
		orderType: FormControl<string | null | undefined>,
	}
	export function CreateSalesOrderOriginDtoFormGroup() {
		return new FormGroup<SalesOrderOriginDtoFormProperties>({
			_links: new FormControl<{[id: string]: DtoLink } | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			orderType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesOrderPaymentDto {

		/** The cash account to use */
		cashAccountId?: string | null;
		paymentMethod?: CdDescriptionPairDto;

		/** The payment reference */
		paymentReference?: string | null;
	}
	export interface SalesOrderPaymentDtoFormProperties {

		/** The cash account to use */
		cashAccountId: FormControl<string | null | undefined>,

		/** The payment reference */
		paymentReference: FormControl<string | null | undefined>,
	}
	export function CreateSalesOrderPaymentDtoFormGroup() {
		return new FormGroup<SalesOrderPaymentDtoFormProperties>({
			cashAccountId: new FormControl<string | null | undefined>(undefined),
			paymentReference: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesPersonDto {

		/** The description */
		description?: string | null;

		/** The id */
		id?: string | null;
	}
	export interface SalesPersonDtoFormProperties {

		/** The description */
		description: FormControl<string | null | undefined>,

		/** The id */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSalesPersonDtoFormGroup() {
		return new FormGroup<SalesPersonDtoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesOrderShippingDto {
		address?: AddressDto;
		contact?: ContactDto;
		fobPoint?: CdDescriptionPairDto;

		/** Whether insurance applies to this shipping */
		insurance?: boolean | null;
		intrastatTransactionType?: IdDescriptionPairDto;
		preferredWarehouse?: CdDescriptionPairDto;

		/** Priority of the order */
		priority?: number | null;

		/** Whether this is residential delivery */
		residentialDelivery?: boolean | null;

		/** The shipping rule */
		rule?: string | null;

		/** Whether this is a saturday delivery */
		saturdayDelivery?: boolean | null;

		/**
		 * The shipping scheduled date
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		scheduledDate?: Date | null;

		/** Whether this order can/is shipped separately */
		shipSeparately?: boolean | null;
		shipVia?: CdDescriptionPairDto;
		terms?: CdDescriptionPairDto;
		zone?: CdDescriptionPairDto;
	}
	export interface SalesOrderShippingDtoFormProperties {

		/** Whether insurance applies to this shipping */
		insurance: FormControl<boolean | null | undefined>,

		/** Priority of the order */
		priority: FormControl<number | null | undefined>,

		/** Whether this is residential delivery */
		residentialDelivery: FormControl<boolean | null | undefined>,

		/** The shipping rule */
		rule: FormControl<string | null | undefined>,

		/** Whether this is a saturday delivery */
		saturdayDelivery: FormControl<boolean | null | undefined>,

		/**
		 * The shipping scheduled date
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		scheduledDate: FormControl<Date | null | undefined>,

		/** Whether this order can/is shipped separately */
		shipSeparately: FormControl<boolean | null | undefined>,
	}
	export function CreateSalesOrderShippingDtoFormGroup() {
		return new FormGroup<SalesOrderShippingDtoFormProperties>({
			insurance: new FormControl<boolean | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			residentialDelivery: new FormControl<boolean | null | undefined>(undefined),
			rule: new FormControl<string | null | undefined>(undefined),
			saturdayDelivery: new FormControl<boolean | null | undefined>(undefined),
			scheduledDate: new FormControl<Date | null | undefined>(undefined),
			shipSeparately: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SalesOrderStatusDto {

		/** Whether this order is in a cancelled state */
		cancelled?: boolean | null;

		/** The status code for the order */
		description?: string | null;

		/** Whether this order is in a held state */
		hold?: boolean | null;
	}
	export interface SalesOrderStatusDtoFormProperties {

		/** Whether this order is in a cancelled state */
		cancelled: FormControl<boolean | null | undefined>,

		/** The status code for the order */
		description: FormControl<string | null | undefined>,

		/** Whether this order is in a held state */
		hold: FormControl<boolean | null | undefined>,
	}
	export function CreateSalesOrderStatusDtoFormGroup() {
		return new FormGroup<SalesOrderStatusDtoFormProperties>({
			cancelled: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			hold: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SalesOrderTotalsDto {

		/**
		 * The total of the costs on the lines of the sales order. How the `costTotal` is calculated is dependent on the option `useReplacementCostForMarginAndProfit`.
		 * If this option is `true` the `costTotal` will be calculated based on the `replacementUnitCost`.
		 * If this option is `false`, the `costTotal` will be calculate based on `unitCost`
		 */
		costTotal?: number | null;

		/** The total of the costs on the lines of the sales order in base currency. */
		costTotalInBaseCurrency?: number | null;

		/** The discount total */
		discountTotal?: number | null;

		/** The discount total in base currency */
		discountTotalInBaseCurrency?: number | null;

		/** The freight cost calculated for the sales order. Not applicable for transfer order types. */
		freightCost?: number | null;

		/** The freight cost calculated for the sales order in base currency. Not applicable for transfer order types. */
		freightCostInBaseCurrency?: number | null;

		/** The freight amount calculated in accordance with the shipping terms. Not applicable for transfer order types. */
		freightTotal?: number | null;

		/** The freight amount calculated in accordance with the shipping terms in base currency. Not applicable for transfer order types. */
		freightTotalInBaseCurrency?: number | null;

		/** The order total */
		orderTotal?: number | null;

		/** The order total in base currency */
		orderTotalInBaseCurrency?: number | null;

		/** The VAT exempt total */
		taxExemptTotal?: number | null;

		/** The VAT exempt total in base currency */
		taxExemptTotalInBaseCurrency?: number | null;

		/** The tax total */
		taxTotal?: number | null;

		/** The tax total in base currency */
		taxTotalInBaseCurrency?: number | null;

		/** The VAT taxable total */
		taxableTotal?: number | null;

		/** The VAT taxable in base currency */
		taxableTotalInBaseCurrency?: number | null;

		/** The sum of unbilled amounts for the lines */
		unbilledAmount?: number | null;

		/** The sum of unbilled amounts for the lines in base currency */
		unbilledAmountInBaseCurrency?: number | null;

		/** The sum of unshipped amounts for the lines */
		unshippedAmount?: number | null;

		/** The sum of unshipped amounts for the lines in base currency */
		unshippedAmountInBaseCurrency?: number | null;
	}
	export interface SalesOrderTotalsDtoFormProperties {

		/**
		 * The total of the costs on the lines of the sales order. How the `costTotal` is calculated is dependent on the option `useReplacementCostForMarginAndProfit`.
		 * If this option is `true` the `costTotal` will be calculated based on the `replacementUnitCost`.
		 * If this option is `false`, the `costTotal` will be calculate based on `unitCost`
		 */
		costTotal: FormControl<number | null | undefined>,

		/** The total of the costs on the lines of the sales order in base currency. */
		costTotalInBaseCurrency: FormControl<number | null | undefined>,

		/** The discount total */
		discountTotal: FormControl<number | null | undefined>,

		/** The discount total in base currency */
		discountTotalInBaseCurrency: FormControl<number | null | undefined>,

		/** The freight cost calculated for the sales order. Not applicable for transfer order types. */
		freightCost: FormControl<number | null | undefined>,

		/** The freight cost calculated for the sales order in base currency. Not applicable for transfer order types. */
		freightCostInBaseCurrency: FormControl<number | null | undefined>,

		/** The freight amount calculated in accordance with the shipping terms. Not applicable for transfer order types. */
		freightTotal: FormControl<number | null | undefined>,

		/** The freight amount calculated in accordance with the shipping terms in base currency. Not applicable for transfer order types. */
		freightTotalInBaseCurrency: FormControl<number | null | undefined>,

		/** The order total */
		orderTotal: FormControl<number | null | undefined>,

		/** The order total in base currency */
		orderTotalInBaseCurrency: FormControl<number | null | undefined>,

		/** The VAT exempt total */
		taxExemptTotal: FormControl<number | null | undefined>,

		/** The VAT exempt total in base currency */
		taxExemptTotalInBaseCurrency: FormControl<number | null | undefined>,

		/** The tax total */
		taxTotal: FormControl<number | null | undefined>,

		/** The tax total in base currency */
		taxTotalInBaseCurrency: FormControl<number | null | undefined>,

		/** The VAT taxable total */
		taxableTotal: FormControl<number | null | undefined>,

		/** The VAT taxable in base currency */
		taxableTotalInBaseCurrency: FormControl<number | null | undefined>,

		/** The sum of unbilled amounts for the lines */
		unbilledAmount: FormControl<number | null | undefined>,

		/** The sum of unbilled amounts for the lines in base currency */
		unbilledAmountInBaseCurrency: FormControl<number | null | undefined>,

		/** The sum of unshipped amounts for the lines */
		unshippedAmount: FormControl<number | null | undefined>,

		/** The sum of unshipped amounts for the lines in base currency */
		unshippedAmountInBaseCurrency: FormControl<number | null | undefined>,
	}
	export function CreateSalesOrderTotalsDtoFormGroup() {
		return new FormGroup<SalesOrderTotalsDtoFormProperties>({
			costTotal: new FormControl<number | null | undefined>(undefined),
			costTotalInBaseCurrency: new FormControl<number | null | undefined>(undefined),
			discountTotal: new FormControl<number | null | undefined>(undefined),
			discountTotalInBaseCurrency: new FormControl<number | null | undefined>(undefined),
			freightCost: new FormControl<number | null | undefined>(undefined),
			freightCostInBaseCurrency: new FormControl<number | null | undefined>(undefined),
			freightTotal: new FormControl<number | null | undefined>(undefined),
			freightTotalInBaseCurrency: new FormControl<number | null | undefined>(undefined),
			orderTotal: new FormControl<number | null | undefined>(undefined),
			orderTotalInBaseCurrency: new FormControl<number | null | undefined>(undefined),
			taxExemptTotal: new FormControl<number | null | undefined>(undefined),
			taxExemptTotalInBaseCurrency: new FormControl<number | null | undefined>(undefined),
			taxTotal: new FormControl<number | null | undefined>(undefined),
			taxTotalInBaseCurrency: new FormControl<number | null | undefined>(undefined),
			taxableTotal: new FormControl<number | null | undefined>(undefined),
			taxableTotalInBaseCurrency: new FormControl<number | null | undefined>(undefined),
			unbilledAmount: new FormControl<number | null | undefined>(undefined),
			unbilledAmountInBaseCurrency: new FormControl<number | null | undefined>(undefined),
			unshippedAmount: new FormControl<number | null | undefined>(undefined),
			unshippedAmountInBaseCurrency: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The Visma.net.ERP.SalesOrders.Api.Dto.SalesOrderExpansions enumeration defines individual parts of the Visma.net.ERP.SalesOrders.Api.Dto.SalesOrder.SalesOrderDto that can be filled */
	export enum SalesOrderExpansions { None = 'None', Billing = 'Billing', Payment = 'Payment', FinancialInformation = 'FinancialInformation', Shipping = 'Shipping', Customer = 'Customer', Owner = 'Owner', Origin = 'Origin', Note = 'Note', Freight = 'Freight', Attachments = 'Attachments', All = 'All' }

	export interface SalesOrderLineDto {

		/** The attachments associated with this sales order line */
		attachments?: Array<AttachmentDto>;

		/** The base order quantity for this line */
		baseOrderQuantity?: number | null;

		/** The billed quantity for this line */
		billedQuantity?: number | null;
		branch?: CdDescriptionPairDto;

		/** Indicates if line is comissionable */
		commissionable?: boolean | null;

		/** Whether this order line is completed or not */
		completed?: boolean | null;

		/** Any description for this order line */
		description?: string | null;

		/** The discount amount for this line */
		discountAmount?: number | null;

		/** Code of discount applied to this line */
		discountCode?: string | null;

		/** Discount percentage applied to this line */
		discountPercent?: number | null;

		/** Id of discount sequence applied to this line */
		discountSequenceId?: string | null;

		/** The extended price for this sales order line */
		extendedPrice?: number | null;

		/** Any external link for this sales order line */
		externalLink?: string | null;

		/** Whether these item(s) are free or not */
		freeItem?: boolean | null;

		/** Discount is applied manually */
		hasManualDiscount?: boolean | null;

		/** Unit price is applied manually */
		hasManualPrice?: boolean | null;
		inventory?: SalesOrderLineInventoryDto;
		inventoryAlternateId?: string | null;

		/** The line number of the sales order line */
		lineId?: number | null;

		/** The line total before any discounts are applied */
		lineTotalBeforeDiscount?: number | null;

		/** The type of sales order line */
		lineType?: string | null;

		/** Any note that has been applied to this order line */
		note?: string | null;

		/** Indicates if line has quantity left to be shipped */
		openLine?: boolean | null;

		/** The open quantity for this line */
		openQuantity?: number | null;

		/** The type of operation the line represents to the order */
		operation?: string | null;

		/**
		 * The date the order line was added
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		orderDate?: Date | null;

		/** The overship threshold value (%) */
		overshipThreshold?: number | null;

		/** The project task with which this sales order line is associated */
		projectTaskId?: string | null;

		/** Information about line purchase order source */
		purchaseOrderSource?: string | null;

		/** The quantity of unit of measure this line represents */
		quantity?: number | null;

		/** The quantity on shipments for this line */
		quantityOnShipments?: number | null;

		/** The reason code */
		reasonCode?: string | null;

		/**
		 * The replacement unit cost of an item. This is set based on the supplier price.
		 * If no supplier price found, the last price of the item's default supplier will be used.
		 * If no default supplier is set, the last cost of the item will be used.
		 */
		replacementUnitCost?: number | null;

		/**
		 * The request date for this order line
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		requestDate?: Date | null;

		/** The general ledger account this line applies to */
		salesAccountId?: string | null;
		salesPerson?: SalesPersonDto;

		/**
		 * The expected shipping date for this order line
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		shipDate?: Date | null;

		/** The shipping rule code for this order line */
		shippingRule?: string | null;

		/** Used to apply sort order to a set of lines */
		sortOrder?: number | null;

		/** The general ledger subaccount this line applies to */
		subaccount?: {[id: string]: string };
		supplier?: SupplierDto;
		supplierPrice?: number | null;

		/** The Tax Category Id applying to this order line */
		taxCategoryId?: string | null;

		/** The undership threshold value (%) */
		undershipThreshold?: number | null;

		/** The unit cost of items on this order line */
		unitCost?: number | null;

		/** The unit of measure (UOM) for the sales order line */
		unitOfMeasure?: string | null;

		/** The unit price for items on this order line */
		unitPrice?: number | null;

		/** The Site Id for items on this line */
		warehouseId?: string | null;

		/** Defines a warehouse location */
		warehouseLocation?: LocationDto;
	}
	export interface SalesOrderLineDtoFormProperties {

		/** The base order quantity for this line */
		baseOrderQuantity: FormControl<number | null | undefined>,

		/** The billed quantity for this line */
		billedQuantity: FormControl<number | null | undefined>,

		/** Indicates if line is comissionable */
		commissionable: FormControl<boolean | null | undefined>,

		/** Whether this order line is completed or not */
		completed: FormControl<boolean | null | undefined>,

		/** Any description for this order line */
		description: FormControl<string | null | undefined>,

		/** The discount amount for this line */
		discountAmount: FormControl<number | null | undefined>,

		/** Code of discount applied to this line */
		discountCode: FormControl<string | null | undefined>,

		/** Discount percentage applied to this line */
		discountPercent: FormControl<number | null | undefined>,

		/** Id of discount sequence applied to this line */
		discountSequenceId: FormControl<string | null | undefined>,

		/** The extended price for this sales order line */
		extendedPrice: FormControl<number | null | undefined>,

		/** Any external link for this sales order line */
		externalLink: FormControl<string | null | undefined>,

		/** Whether these item(s) are free or not */
		freeItem: FormControl<boolean | null | undefined>,

		/** Discount is applied manually */
		hasManualDiscount: FormControl<boolean | null | undefined>,

		/** Unit price is applied manually */
		hasManualPrice: FormControl<boolean | null | undefined>,
		inventoryAlternateId: FormControl<string | null | undefined>,

		/** The line number of the sales order line */
		lineId: FormControl<number | null | undefined>,

		/** The line total before any discounts are applied */
		lineTotalBeforeDiscount: FormControl<number | null | undefined>,

		/** The type of sales order line */
		lineType: FormControl<string | null | undefined>,

		/** Any note that has been applied to this order line */
		note: FormControl<string | null | undefined>,

		/** Indicates if line has quantity left to be shipped */
		openLine: FormControl<boolean | null | undefined>,

		/** The open quantity for this line */
		openQuantity: FormControl<number | null | undefined>,

		/** The type of operation the line represents to the order */
		operation: FormControl<string | null | undefined>,

		/**
		 * The date the order line was added
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		orderDate: FormControl<Date | null | undefined>,

		/** The overship threshold value (%) */
		overshipThreshold: FormControl<number | null | undefined>,

		/** The project task with which this sales order line is associated */
		projectTaskId: FormControl<string | null | undefined>,

		/** Information about line purchase order source */
		purchaseOrderSource: FormControl<string | null | undefined>,

		/** The quantity of unit of measure this line represents */
		quantity: FormControl<number | null | undefined>,

		/** The quantity on shipments for this line */
		quantityOnShipments: FormControl<number | null | undefined>,

		/** The reason code */
		reasonCode: FormControl<string | null | undefined>,

		/**
		 * The replacement unit cost of an item. This is set based on the supplier price.
		 * If no supplier price found, the last price of the item's default supplier will be used.
		 * If no default supplier is set, the last cost of the item will be used.
		 */
		replacementUnitCost: FormControl<number | null | undefined>,

		/**
		 * The request date for this order line
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		requestDate: FormControl<Date | null | undefined>,

		/** The general ledger account this line applies to */
		salesAccountId: FormControl<string | null | undefined>,

		/**
		 * The expected shipping date for this order line
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		shipDate: FormControl<Date | null | undefined>,

		/** The shipping rule code for this order line */
		shippingRule: FormControl<string | null | undefined>,

		/** Used to apply sort order to a set of lines */
		sortOrder: FormControl<number | null | undefined>,

		/** The general ledger subaccount this line applies to */
		subaccount: FormControl<{[id: string]: string } | null | undefined>,
		supplierPrice: FormControl<number | null | undefined>,

		/** The Tax Category Id applying to this order line */
		taxCategoryId: FormControl<string | null | undefined>,

		/** The undership threshold value (%) */
		undershipThreshold: FormControl<number | null | undefined>,

		/** The unit cost of items on this order line */
		unitCost: FormControl<number | null | undefined>,

		/** The unit of measure (UOM) for the sales order line */
		unitOfMeasure: FormControl<string | null | undefined>,

		/** The unit price for items on this order line */
		unitPrice: FormControl<number | null | undefined>,

		/** The Site Id for items on this line */
		warehouseId: FormControl<string | null | undefined>,
	}
	export function CreateSalesOrderLineDtoFormGroup() {
		return new FormGroup<SalesOrderLineDtoFormProperties>({
			baseOrderQuantity: new FormControl<number | null | undefined>(undefined),
			billedQuantity: new FormControl<number | null | undefined>(undefined),
			commissionable: new FormControl<boolean | null | undefined>(undefined),
			completed: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			discountAmount: new FormControl<number | null | undefined>(undefined),
			discountCode: new FormControl<string | null | undefined>(undefined),
			discountPercent: new FormControl<number | null | undefined>(undefined),
			discountSequenceId: new FormControl<string | null | undefined>(undefined),
			extendedPrice: new FormControl<number | null | undefined>(undefined),
			externalLink: new FormControl<string | null | undefined>(undefined),
			freeItem: new FormControl<boolean | null | undefined>(undefined),
			hasManualDiscount: new FormControl<boolean | null | undefined>(undefined),
			hasManualPrice: new FormControl<boolean | null | undefined>(undefined),
			inventoryAlternateId: new FormControl<string | null | undefined>(undefined),
			lineId: new FormControl<number | null | undefined>(undefined),
			lineTotalBeforeDiscount: new FormControl<number | null | undefined>(undefined),
			lineType: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			openLine: new FormControl<boolean | null | undefined>(undefined),
			openQuantity: new FormControl<number | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			orderDate: new FormControl<Date | null | undefined>(undefined),
			overshipThreshold: new FormControl<number | null | undefined>(undefined),
			projectTaskId: new FormControl<string | null | undefined>(undefined),
			purchaseOrderSource: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			quantityOnShipments: new FormControl<number | null | undefined>(undefined),
			reasonCode: new FormControl<string | null | undefined>(undefined),
			replacementUnitCost: new FormControl<number | null | undefined>(undefined),
			requestDate: new FormControl<Date | null | undefined>(undefined),
			salesAccountId: new FormControl<string | null | undefined>(undefined),
			shipDate: new FormControl<Date | null | undefined>(undefined),
			shippingRule: new FormControl<string | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
			subaccount: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			supplierPrice: new FormControl<number | null | undefined>(undefined),
			taxCategoryId: new FormControl<string | null | undefined>(undefined),
			undershipThreshold: new FormControl<number | null | undefined>(undefined),
			unitCost: new FormControl<number | null | undefined>(undefined),
			unitOfMeasure: new FormControl<string | null | undefined>(undefined),
			unitPrice: new FormControl<number | null | undefined>(undefined),
			warehouseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesOrderLineInventoryDto {
		baseUnit?: string | null;

		/** The description */
		description?: string | null;

		/** The id */
		id?: string | null;
	}
	export interface SalesOrderLineInventoryDtoFormProperties {
		baseUnit: FormControl<string | null | undefined>,

		/** The description */
		description: FormControl<string | null | undefined>,

		/** The id */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSalesOrderLineInventoryDtoFormGroup() {
		return new FormGroup<SalesOrderLineInventoryDtoFormProperties>({
			baseUnit: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SupplierDto {
		id?: string | null;
		name?: string | null;
	}
	export interface SupplierDtoFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateSupplierDtoFormGroup() {
		return new FormGroup<SupplierDtoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesOrderLineDtoPagedResult {

		/** Gets or sets the link to the next page with more results. If set to null then no more records are present. */
		nextPage?: string | null;

		/** Gets or sets the total number of items available. If set to null, then the total number of items cannot be determined */
		totalCount?: number | null;

		/** Gets or sets the items that are paged */
		value?: Array<SalesOrderLineDto>;
	}
	export interface SalesOrderLineDtoPagedResultFormProperties {

		/** Gets or sets the link to the next page with more results. If set to null then no more records are present. */
		nextPage: FormControl<string | null | undefined>,

		/** Gets or sets the total number of items available. If set to null, then the total number of items cannot be determined */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateSalesOrderLineDtoPagedResultFormGroup() {
		return new FormGroup<SalesOrderLineDtoPagedResultFormProperties>({
			nextPage: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SalesOrderListDto {

		/** Links applicable for the dto */
		_links?: {[id: string]: DtoLink };

		/** The currency id for the order */
		currency?: string | null;

		/** The customer Id for the order (a.k.a CustoemrCd) */
		customerId?: string | null;

		/** The name of the customer as it appears on the order */
		customerName?: string | null;

		/** The customer order link */
		customerOrder?: string | null;

		/** The order reference number of the customer */
		customerRefNo?: string | null;

		/**
		 * The order date
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		date?: Date | null;

		/** Any description on the order */
		description?: string | null;

		/** The date and time the order was last modified */
		lastModified?: Date | null;

		/** The customer location for this order */
		location?: string | null;

		/** The order id (a.k.a OrderCd) for the order */
		orderId?: string | null;

		/** The total number of items on the order */
		orderQty?: number | null;

		/** The total amount on the order */
		orderTotal?: number | null;

		/**
		 * The date the order is requested
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		requestOn?: Date | null;

		/**
		 * The date shipment is scheduled
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		shippingScheduledDate?: Date | null;

		/** The current status of the order */
		status?: string | null;

		/** The type of the order */
		type?: string | null;
	}
	export interface SalesOrderListDtoFormProperties {

		/** Links applicable for the dto */
		_links: FormControl<{[id: string]: DtoLink } | null | undefined>,

		/** The currency id for the order */
		currency: FormControl<string | null | undefined>,

		/** The customer Id for the order (a.k.a CustoemrCd) */
		customerId: FormControl<string | null | undefined>,

		/** The name of the customer as it appears on the order */
		customerName: FormControl<string | null | undefined>,

		/** The customer order link */
		customerOrder: FormControl<string | null | undefined>,

		/** The order reference number of the customer */
		customerRefNo: FormControl<string | null | undefined>,

		/**
		 * The order date
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		date: FormControl<Date | null | undefined>,

		/** Any description on the order */
		description: FormControl<string | null | undefined>,

		/** The date and time the order was last modified */
		lastModified: FormControl<Date | null | undefined>,

		/** The customer location for this order */
		location: FormControl<string | null | undefined>,

		/** The order id (a.k.a OrderCd) for the order */
		orderId: FormControl<string | null | undefined>,

		/** The total number of items on the order */
		orderQty: FormControl<number | null | undefined>,

		/** The total amount on the order */
		orderTotal: FormControl<number | null | undefined>,

		/**
		 * The date the order is requested
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		requestOn: FormControl<Date | null | undefined>,

		/**
		 * The date shipment is scheduled
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T00:00:00+02:00'), the passed date is considered to be in the UTC time zone.
		 */
		shippingScheduledDate: FormControl<Date | null | undefined>,

		/** The current status of the order */
		status: FormControl<string | null | undefined>,

		/** The type of the order */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSalesOrderListDtoFormGroup() {
		return new FormGroup<SalesOrderListDtoFormProperties>({
			_links: new FormControl<{[id: string]: DtoLink } | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
			customerName: new FormControl<string | null | undefined>(undefined),
			customerOrder: new FormControl<string | null | undefined>(undefined),
			customerRefNo: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			orderQty: new FormControl<number | null | undefined>(undefined),
			orderTotal: new FormControl<number | null | undefined>(undefined),
			requestOn: new FormControl<Date | null | undefined>(undefined),
			shippingScheduledDate: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesOrderListDtoPagedResult {

		/** Gets or sets the link to the next page with more results. If set to null then no more records are present. */
		nextPage?: string | null;

		/** Gets or sets the total number of items available. If set to null, then the total number of items cannot be determined */
		totalCount?: number | null;

		/** Gets or sets the items that are paged */
		value?: Array<SalesOrderListDto>;
	}
	export interface SalesOrderListDtoPagedResultFormProperties {

		/** Gets or sets the link to the next page with more results. If set to null then no more records are present. */
		nextPage: FormControl<string | null | undefined>,

		/** Gets or sets the total number of items available. If set to null, then the total number of items cannot be determined */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateSalesOrderListDtoPagedResultFormGroup() {
		return new FormGroup<SalesOrderListDtoPagedResultFormProperties>({
			nextPage: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SalesOrderRotRutDistributionDto {

		/** The amount */
		amount?: number | null;

		/** Whether this is extra or not */
		extra?: boolean | null;

		/** Reference to the order line */
		lineId?: number | null;

		/** The personal id */
		personalId?: string | null;
	}
	export interface SalesOrderRotRutDistributionDtoFormProperties {

		/** The amount */
		amount: FormControl<number | null | undefined>,

		/** Whether this is extra or not */
		extra: FormControl<boolean | null | undefined>,

		/** Reference to the order line */
		lineId: FormControl<number | null | undefined>,

		/** The personal id */
		personalId: FormControl<string | null | undefined>,
	}
	export function CreateSalesOrderRotRutDistributionDtoFormGroup() {
		return new FormGroup<SalesOrderRotRutDistributionDtoFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			extra: new FormControl<boolean | null | undefined>(undefined),
			lineId: new FormControl<number | null | undefined>(undefined),
			personalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesOrderRotRutDto {

		/** The appartment reference */
		appartment?: string | null;

		/** Whether the ROT/RUT is distributed automatically */
		distributedAutomatically?: boolean | null;

		/** The distrinbution entries */
		distribution?: Array<SalesOrderRotRutDistributionDto>;

		/** The estate reference */
		estate?: string | null;

		/** The organization number */
		organizationNumber?: string | null;

		/** The type of ROT/RUT */
		type?: string | null;
	}
	export interface SalesOrderRotRutDtoFormProperties {

		/** The appartment reference */
		appartment: FormControl<string | null | undefined>,

		/** Whether the ROT/RUT is distributed automatically */
		distributedAutomatically: FormControl<boolean | null | undefined>,

		/** The estate reference */
		estate: FormControl<string | null | undefined>,

		/** The organization number */
		organizationNumber: FormControl<string | null | undefined>,

		/** The type of ROT/RUT */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSalesOrderRotRutDtoFormGroup() {
		return new FormGroup<SalesOrderRotRutDtoFormProperties>({
			appartment: new FormControl<string | null | undefined>(undefined),
			distributedAutomatically: new FormControl<boolean | null | undefined>(undefined),
			estate: new FormControl<string | null | undefined>(undefined),
			organizationNumber: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Visma.net.ERP.SalesOrders.Api.Dto.SalesOrder.SalesOrderShipmentDto specifies a shipment line detail for a sales order */
	export interface SalesOrderShipmentDto {

		/** The date of the shipment */
		date?: Date | null;

		/** The id of a shipments created for the order */
		id?: string | null;

		/** The type of inventory document created for the shipment */
		inventoryDocumentType?: string | null;

		/** The id of the inventory document created for the shipment */
		inventoryReferenceId?: string | null;

		/** The id of the invoice */
		invoiceId?: string | null;

		/** The type of invoice */
		invoiceType?: string | null;

		/** The quantity of goods on the shipment */
		quantity?: number | null;

		/** The type of the shipment */
		type?: string | null;

		/** The volume of the shipped goods */
		volume?: number | null;

		/** The weight of the shipped goods */
		weight?: number | null;
	}

	/** The Visma.net.ERP.SalesOrders.Api.Dto.SalesOrder.SalesOrderShipmentDto specifies a shipment line detail for a sales order */
	export interface SalesOrderShipmentDtoFormProperties {

		/** The date of the shipment */
		date: FormControl<Date | null | undefined>,

		/** The id of a shipments created for the order */
		id: FormControl<string | null | undefined>,

		/** The type of inventory document created for the shipment */
		inventoryDocumentType: FormControl<string | null | undefined>,

		/** The id of the inventory document created for the shipment */
		inventoryReferenceId: FormControl<string | null | undefined>,

		/** The id of the invoice */
		invoiceId: FormControl<string | null | undefined>,

		/** The type of invoice */
		invoiceType: FormControl<string | null | undefined>,

		/** The quantity of goods on the shipment */
		quantity: FormControl<number | null | undefined>,

		/** The type of the shipment */
		type: FormControl<string | null | undefined>,

		/** The volume of the shipped goods */
		volume: FormControl<number | null | undefined>,

		/** The weight of the shipped goods */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateSalesOrderShipmentDtoFormGroup() {
		return new FormGroup<SalesOrderShipmentDtoFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			inventoryDocumentType: new FormControl<string | null | undefined>(undefined),
			inventoryReferenceId: new FormControl<string | null | undefined>(undefined),
			invoiceId: new FormControl<string | null | undefined>(undefined),
			invoiceType: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			volume: new FormControl<number | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The Visma.net.ERP.SalesOrders.Api.Dto.SalesOrder.SalesOrderTaxDto specifies a tax line detail for a sales order */
	export interface SalesOrderTaxDto {

		/** Indicates if the taxable amount will be included in taxExemptTotal */
		exemptTax?: boolean | null;

		/** Indicates if the taxable amount will be included in taxableTotal */
		includeInTaxable?: boolean | null;

		/** Indicates if the tax calculated is treated as a pending tax */
		isPendingTax?: boolean | null;

		/** Indicates if the tax is treated as a reverse tax */
		isReverseTax?: boolean | null;

		/** Indicates if the tax calculated is treated as a statistical tax */
		isStatisticalTax?: boolean | null;

		/** The calculated tax amount for the specific tax */
		taxAmount?: number | null;

		/** The unique tax identifier of the specific tax applied to the document */
		taxId?: string | null;

		/** The tax rate used for the tax */
		taxRate?: number | null;

		/** The type of tax, which can be Sales, Use, VAT or Withholding */
		taxType?: string | null;

		/** The calculated taxable amount for the specific tax */
		taxableAmount?: number | null;
	}

	/** The Visma.net.ERP.SalesOrders.Api.Dto.SalesOrder.SalesOrderTaxDto specifies a tax line detail for a sales order */
	export interface SalesOrderTaxDtoFormProperties {

		/** Indicates if the taxable amount will be included in taxExemptTotal */
		exemptTax: FormControl<boolean | null | undefined>,

		/** Indicates if the taxable amount will be included in taxableTotal */
		includeInTaxable: FormControl<boolean | null | undefined>,

		/** Indicates if the tax calculated is treated as a pending tax */
		isPendingTax: FormControl<boolean | null | undefined>,

		/** Indicates if the tax is treated as a reverse tax */
		isReverseTax: FormControl<boolean | null | undefined>,

		/** Indicates if the tax calculated is treated as a statistical tax */
		isStatisticalTax: FormControl<boolean | null | undefined>,

		/** The calculated tax amount for the specific tax */
		taxAmount: FormControl<number | null | undefined>,

		/** The unique tax identifier of the specific tax applied to the document */
		taxId: FormControl<string | null | undefined>,

		/** The tax rate used for the tax */
		taxRate: FormControl<number | null | undefined>,

		/** The type of tax, which can be Sales, Use, VAT or Withholding */
		taxType: FormControl<string | null | undefined>,

		/** The calculated taxable amount for the specific tax */
		taxableAmount: FormControl<number | null | undefined>,
	}
	export function CreateSalesOrderTaxDtoFormGroup() {
		return new FormGroup<SalesOrderTaxDtoFormProperties>({
			exemptTax: new FormControl<boolean | null | undefined>(undefined),
			includeInTaxable: new FormControl<boolean | null | undefined>(undefined),
			isPendingTax: new FormControl<boolean | null | undefined>(undefined),
			isReverseTax: new FormControl<boolean | null | undefined>(undefined),
			isStatisticalTax: new FormControl<boolean | null | undefined>(undefined),
			taxAmount: new FormControl<number | null | undefined>(undefined),
			taxId: new FormControl<string | null | undefined>(undefined),
			taxRate: new FormControl<number | null | undefined>(undefined),
			taxType: new FormControl<string | null | undefined>(undefined),
			taxableAmount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Defines an error response for validation problems */
	export interface SalesOrderValidationProblemDetails {
		detail?: string | null;

		/** List with details for all the validation problems */
		details?: Array<ValidationErrorCodeDetails>;
		errors?: {[id: string]: Array<string> };
		instance?: string | null;
		status?: number | null;
		title?: string | null;
		type?: string | null;
	}

	/** Defines an error response for validation problems */
	export interface SalesOrderValidationProblemDetailsFormProperties {
		detail: FormControl<string | null | undefined>,
		errors: FormControl<{[id: string]: Array<string> } | null | undefined>,
		instance: FormControl<string | null | undefined>,
		status: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateSalesOrderValidationProblemDetailsFormGroup() {
		return new FormGroup<SalesOrderValidationProblemDetailsFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			errors: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines details related to validation problems */
	export interface ValidationErrorCodeDetails {

		/** Error code */
		code?: string | null;

		/** Detailed validation message */
		message?: string | null;

		/**
		 * Extra parameters related to the validation problem.
		 * <remarks>If the validation problem refers to a particular field the "property" element will contain the field name</remarks>
		 */
		parameters?: {[id: string]: any };
	}

	/** Defines details related to validation problems */
	export interface ValidationErrorCodeDetailsFormProperties {

		/** Error code */
		code: FormControl<string | null | undefined>,

		/** Detailed validation message */
		message: FormControl<string | null | undefined>,

		/**
		 * Extra parameters related to the validation problem.
		 * <remarks>If the validation problem refers to a particular field the "property" element will contain the field name</remarks>
		 */
		parameters: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateValidationErrorCodeDetailsFormGroup() {
		return new FormGroup<ValidationErrorCodeDetailsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of customers
		 * Sample request:
		 * GET /customers?filter=visma&pageSize=10
		 * Get api/v3/Customers
		 * @param {string} filter An optional text string to find customers matching (searching fields id, name, gln, tax registration id). If not specified all customers are returned.
		 * @param {number} pageSize The number of customers retrieved per page. If not specified, the default value of 100 will be used.
		 * @param {number} pageIndex The zero based page index to retrieve
		 * @return {CustomerDtoPagedResult} Returns the list of customers found
		 */
		Customers_GetList_(filter: string | null | undefined, pageSize: number | null | undefined, pageIndex: number | null | undefined): Observable<CustomerDtoPagedResult> {
			return this.http.get<CustomerDtoPagedResult>(this.baseUri + 'api/v3/Customers?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageIndex=' + pageIndex, {});
		}

		/**
		 * Gets a list of locations for the specified customer
		 * Sample rquest:
		 * GET /customers/10000/locations
		 * Get api/v3/Customers/{customerId}/locations
		 * @param {string} customerId The customer id (CustomerCd) to retrieve locations for
		 * @return {Array<CustomerLocationItemDto>} List of locations for the specified customer
		 */
		Customers_GetCustomerLocationList_customerIdlocations(customerId: string): Observable<Array<CustomerLocationItemDto>> {
			return this.http.get<Array<CustomerLocationItemDto>>(this.baseUri + 'api/v3/Customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/locations', {});
		}

		/**
		 * Gets an inventory summary for inventory items.
		 * Sample request:
		 * GET /inventory?inventoryId=Item1
		 * GET /inventory?warehouseId=MAIN&modifiedSince=2021-08-01T12:00:00&pageSize=1000
		 * GET /inventory?inventoryId=Item1&InventoryId=Item2&expand=location,attribute
		 * GET /inventory?expand=location&attributeFilter=WEBSHOP:1
		 * Get api/v3/Inventory
		 * @param {Array<string>} inventoryId A list of zero or more inventory items to get a summary for. If no inventoryId is passed, all inventory items will be included in the response.
		 * @param {Array<string>} warehouseId A list of zero or more warehouses to get a summary for. If no warehouse is supplied, all warehouses will be included in the response.
		 * @param {Array<string>} locationId A list of zero or more locations to get a summary for. If no location is supplied, all locations will be included in the response.
		 * @param {Array<InventoryAvailabilityExpansions>} expand An additional option to include location detail information with the warehouse summary, or attribute details for the inventory item. If this is not supplied, location information or attributes will not be included in the response.
		 * @param {Date} modifiedSince A date/time value for filtering when an inventory item's warehouse or location availability last changed
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T12:15:14+02:00'), the date is considered to be in the UTC time zone.
		 * @param {Array<string>} attributeFilter One or more attribute filter values specified as attribute-id:attribute-value. For example "attributeFilter=WEBSHOP:1&attributeFilter=AnotherAttribute:someValue"
		 * If two attributeFilter values have the same attribute-Id either one need to match.
		 * @param {number} pageSize The number of inventory items retrieved per page. If not specified the default pagesize is 10000 items per page
		 * @param {number} pageIndex Gets or sets the zero based page index to get
		 * @return {InventoryItemAvailabilityDtoPagedResult} Returns list of inventory items found
		 */
		Inventory_GetList_(inventoryId: Array<string> | null | undefined, warehouseId: Array<string> | null | undefined, locationId: Array<string> | null | undefined, expand: Array<InventoryAvailabilityExpansions> | null | undefined, modifiedSince: Date | null | undefined, attributeFilter: Array<string> | null | undefined, pageSize: number | null | undefined, pageIndex: number | null | undefined): Observable<InventoryItemAvailabilityDtoPagedResult> {
			return this.http.get<InventoryItemAvailabilityDtoPagedResult>(this.baseUri + 'api/v3/Inventory?' + inventoryId?.map(z => `inventoryId=${encodeURIComponent(z)}`).join('&') + '&' + warehouseId?.map(z => `warehouseId=${encodeURIComponent(z)}`).join('&') + '&' + locationId?.map(z => `locationId=${encodeURIComponent(z)}`).join('&') + '&' + expand?.map(z => `expand=${z}`).join('&') + '&modifiedSince=' + modifiedSince?.toISOString() + '&' + attributeFilter?.map(z => `attributeFilter=${encodeURIComponent(z)}`).join('&') + '&pageSize=' + pageSize + '&pageIndex=' + pageIndex, {});
		}

		/**
		 * Gets a paged list with sales orders of any type
		 * Sample requests:
		 * `GET /salesorders`
		 * `GET /salesorders?customerId=10000&status=Open&pageSize=10`
		 * `GET /salesorders?orderBy=lastModified%20asc`
		 * Get api/v3/SalesOrders
		 * @param {string} customerId The customer for which to retrieve orders. If omitted or empty, orders for all customers are included
		 * @param {string} status The order status to include in the result. If omitted or empty, orders with any status are included.
		 * @param {Date} modifiedSince A date/time value for filtering when a sales order last changed.
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T12:15:14+02:00'), the date is considered to be in the UTC time zone.
		 * @param {number} pageSize The number of customers retrieved per page
		 * @param {number} pageIndex The zero based page index to retrieve
		 * @param {string} orderBy The field to order the list by. Can be one of `created`, `lastModified`, or `orderId` followed by an optional sort direction (`asc` or `desc`), default direction is `asc` (ascending) if not present.
		 * @param {string} filter A filter for the list, applied to the orderId
		 * @return {SalesOrderListDtoPagedResult} Returns a list of Visma.net.ERP.SalesOrders.Api.Dto.SalesOrder.SalesOrderListDto found.
		 */
		SalesOrders_GetList_(customerId: string | null | undefined, status: string | null | undefined, modifiedSince: Date | null | undefined, pageSize: number | null | undefined, pageIndex: number | null | undefined, orderBy: string | null | undefined, filter: string | null | undefined): Observable<SalesOrderListDtoPagedResult> {
			return this.http.get<SalesOrderListDtoPagedResult>(this.baseUri + 'api/v3/SalesOrders?customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&modifiedSince=' + modifiedSince?.toISOString() + '&pageSize=' + pageSize + '&pageIndex=' + pageIndex + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Adds a new sales order to the system
		 * Sample requests:
		 * ```
		 * POST /salesorders
		 * {
		 * "customer": {
		 * "id": "10001",
		 * },
		 * "type": "SO"
		 * }
		 * ```
		 * ```
		 * POST /salesorders
		 * {
		 * "customer": {
		 * "id": "10000",
		 * "order": "some-customer-order-nbr"
		 * },
		 * "type": "SO",
		 * "description": "sample request order",
		 * "status": "Hold",
		 * "orderLines": [
		 * {
		 * "inventoryId": "StockItem1",
		 * "quantity": 4,
		 * "unitPrice": 101.25
		 * }
		 * ]
		 * }
		 * ```
		 * Post api/v3/SalesOrders
		 * @param {NewSalesOrderCommand} requestBody Information about the sales order to create
		 * @return {void} 
		 */
		SalesOrders_CreateNewItem_(requestBody: NewSalesOrderCommand): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v3/SalesOrders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a paged list with sales orders of a specific type
		 * Sample requests:
		 * `GET /salesorders/SO`
		 * `GET /salesorders/SO?customerId=10000&status=Open&pageSize=10`
		 * `GET /salesorders/SO?orderBy=created%20desc`
		 * Get api/v3/SalesOrders/{type}
		 * @param {string} type The type of sales orders to get.
		 * @param {string} customerId The customer for which to retrieve orders. If omitted or empty, orders for all customers are included
		 * @param {string} status The order status to include in the result. If omitted or empty, orders with any status are included.
		 * @param {Date} modifiedSince A date/time value for filtering when a sales order last changed.
		 * Unless a specific time zone offset is included (e.g. '2012-12-24T12:15:14+02:00'), the date is considered to be in the UTC time zone.
		 * @param {number} pageSize The number of customers retrieved per page
		 * @param {number} pageIndex The zero based page index to retrieve
		 * @param {string} orderBy The field to order the list by. Can be one of `created`, `lastModified`, or `orderId` followed by an optional sort direction (`asc` or `desc`), default direction is `asc` (ascending) if not present.
		 * @param {string} filter A filter for the list, applied to the orderId
		 * @return {SalesOrderListDtoPagedResult} Returns a list of Visma.net.ERP.SalesOrders.Api.Dto.SalesOrder.SalesOrderListDto found.
		 */
		SalesOrders_GetList_type(type: string, customerId: string | null | undefined, status: string | null | undefined, modifiedSince: Date | null | undefined, pageSize: number | null | undefined, pageIndex: number | null | undefined, orderBy: string | null | undefined, filter: string | null | undefined): Observable<SalesOrderListDtoPagedResult> {
			return this.http.get<SalesOrderListDtoPagedResult>(this.baseUri + 'api/v3/SalesOrders/' + (type == null ? '' : encodeURIComponent(type)) + '&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&modifiedSince=' + modifiedSince?.toISOString() + '&pageSize=' + pageSize + '&pageIndex=' + pageIndex + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Delete an existing sales order
		 * If-Match header represents a version of Sales Order to be modified and must be included in request.
		 * Value of current version is included in GET /salesorders/{type}/{orderId} and modification endpoints on that resource as ETag header.
		 * Delete api/v3/SalesOrders/{type}/{orderId}
		 * @param {string} type The type of the order to delete
		 * @param {string} orderId The order number to delete
		 * @return {void} 
		 */
		SalesOrders_Delete_typeorderId(type: string, orderId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v3/SalesOrders/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (orderId == null ? '' : encodeURIComponent(orderId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a single sales order
		 * The expand query parameter corresponds to sections in the Visma.net.ERP.SalesOrders.Api.Dto.SalesOrder.SalesOrderDto.
		 * If an expand value is not specified it will not be filled and returned in the response object.
		 * Sample request:
		 * `GET /salesorders/SO/000100?expand=customer,payment`
		 * Get api/v3/SalesOrders/{type}/{orderId}
		 * @param {string} type The type of sales order to get
		 * @param {string} orderId The id of the sales order to get
		 * @param {Array<SalesOrderExpansions>} expand An optional specification of what details to include about the sales order. The default value if not supplied is "None"
		 * @return {SalesOrderDto} A Visma.net.ERP.SalesOrders.Api.Dto.SalesOrder.SalesOrderDto if found and accessible
		 */
		SalesOrders_GetItemAsync_typeorderId(type: string, orderId: string, expand: Array<SalesOrderExpansions> | null | undefined): Observable<SalesOrderDto> {
			return this.http.get<SalesOrderDto>(this.baseUri + 'api/v3/SalesOrders/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '&' + expand?.map(z => `expand=${z}`).join('&'), {});
		}

		/**
		 * Make modifications to an existing sales order
		 * If-Match header represents a version of Sales Order to be modified and must be included in request.
		 * Value of current version is included in GET /salesorders/{type}/{orderId} and modification endpoints on that resource as ETag header.
		 * Patch api/v3/SalesOrders/{type}/{orderId}
		 * @param {string} type The type of the order to make modifications to
		 * @param {string} orderId The order number to make modifications to
		 * @param {PatchSalesOrderCommand} requestBody Data to change about the sales order
		 * @return {void} 
		 */
		SalesOrders_Patch_typeorderId(type: string, orderId: string, requestBody: PatchSalesOrderCommand): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'api/v3/SalesOrders/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (orderId == null ? '' : encodeURIComponent(orderId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets commission information for a single sales order
		 * Sample request:
		 * `GET /salesorders/SO/000101/commissions`
		 * Get api/v3/SalesOrders/{type}/{orderId}/commissions
		 * @param {string} type The type of sales order to get
		 * @param {string} orderId The id of the sales order to get
		 * @return {Array<SalesOrderCommissionDto>} A Visma.net.ERP.SalesOrders.Api.Dto.SalesOrder.SalesOrderCommissionDto if found and accessible
		 */
		SalesOrders_GetItemCommissions_typeorderIdcommissions(type: string, orderId: string): Observable<Array<SalesOrderCommissionDto>> {
			return this.http.get<Array<SalesOrderCommissionDto>>(this.baseUri + 'api/v3/SalesOrders/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/commissions', {});
		}

		/**
		 * Gets discount details information for a single sales order
		 * Sample request:
		 * `GET /salesorders/SO/000101/discounts`
		 * Get api/v3/SalesOrders/{type}/{orderId}/discounts
		 * @param {string} type The type of sales order to get
		 * @param {string} orderId The id of the sales order to get
		 * @return {Array<SalesOrderDiscountDto>} A list of Visma.net.ERP.SalesOrders.Api.Dto.SalesOrder.SalesOrderDiscountDto if found and accessible
		 */
		SalesOrders_GetItemDiscounts_typeorderIddiscounts(type: string, orderId: string): Observable<Array<SalesOrderDiscountDto>> {
			return this.http.get<Array<SalesOrderDiscountDto>>(this.baseUri + 'api/v3/SalesOrders/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/discounts', {});
		}

		/**
		 * Delete lines from an existing sales order
		 * If-Match header represents a version of Sales Order to be modified and must be included in request.
		 * Value of current version is included in GET /salesorders/{type}/{orderId} and modification endpoints on that resource as ETag header.
		 * Delete api/v3/SalesOrders/{type}/{orderId}/lines
		 * @param {string} type The type of the order to make modifications to
		 * @param {string} orderId The order number to make modifications to
		 * @param {Array<number>} ids Lines to delete with comma seprator. Limit of line ids is 1000.
		 * @return {void} 
		 */
		SalesOrders_DeleteLines_typeorderIdlines(type: string, orderId: string, ids: Array<number> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v3/SalesOrders/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/lines&' + ids?.map(z => `ids=${z}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets sales order lines for a single sales order
		 * Sample request:
		 * `GET /salesorders/SO/000101/lines`
		 * Get api/v3/SalesOrders/{type}/{orderId}/lines
		 * @param {string} type The type of sales order to get
		 * @param {string} orderId The id of the sales order to get
		 * @param {number} pageSize The number of lines retrieved per page, defaults to 1000 if not specified
		 * @param {number} pageIndex The zero based page index to retrieve, defaults to 0 if not specified
		 * @return {SalesOrderLineDtoPagedResult} A Visma.net.ERP.SalesOrders.Api.Dto.PagedResult`1 object if sales order is found and accessible
		 */
		SalesOrders_GetItemLines_typeorderIdlines(type: string, orderId: string, pageSize: number | null | undefined, pageIndex: number | null | undefined): Observable<SalesOrderLineDtoPagedResult> {
			return this.http.get<SalesOrderLineDtoPagedResult>(this.baseUri + 'api/v3/SalesOrders/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/lines&pageSize=' + pageSize + '&pageIndex=' + pageIndex, {});
		}

		/**
		 * Make modifications to an existing sales order lines
		 * If-Match header represents a version of Sales Order to be modified and must be included in request.
		 * Value of current version is included in GET /salesorders/{type}/{orderId} and modification endpoints on that resource as ETag header.
		 * Patch api/v3/SalesOrders/{type}/{orderId}/lines
		 * @param {string} type The type of the order to make modifications to
		 * @param {string} orderId The order number to make modifications to
		 * @param {PatchSalesOrderLinesCommand} requestBody Data to change about the sales order lines
		 * @return {void} 
		 */
		SalesOrders_PatchLines_typeorderIdlines(type: string, orderId: string, requestBody: PatchSalesOrderLinesCommand): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'api/v3/SalesOrders/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/lines', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds new lines to a existing sales order in the system
		 * If-Match header represents a version of Sales Order to be modified and must be included in request.
		 * Value of current version is included in GET /salesorders/{type}/{orderId} and modification endpoints on that resource as ETag header.
		 * Post api/v3/SalesOrders/{type}/{orderId}/lines
		 * @param {AddSalesOrderLinesCommand} requestBody Information about the lines to create
		 * @return {void} 
		 */
		SalesOrders_AddLines_typeorderIdlines(type: string, orderId: string, requestBody: AddSalesOrderLinesCommand): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v3/SalesOrders/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/lines', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a specific sales order line for a single sales order
		 * Sample request:
		 * `GET /salesorders/SO/000101/lines/1`
		 * Get api/v3/SalesOrders/{type}/{orderId}/lines/{lineId}
		 * @param {string} type The type of sales order to get
		 * @param {string} orderId The id of the sales order to get
		 * @param {number} lineId The id of the line to get
		 * @return {SalesOrderLineDto} A Visma.net.ERP.SalesOrders.Api.Dto.SalesOrder.SalesOrderLineDto object if sales order line is found and accessible
		 */
		SalesOrders_GetItemLine_typeorderIdlineslineId(type: string, orderId: string, lineId: number): Observable<SalesOrderLineDto> {
			return this.http.get<SalesOrderLineDto>(this.baseUri + 'api/v3/SalesOrders/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/lines/' + lineId, {});
		}

		/**
		 * Gets ROT/RUT information for a single sales order
		 * Sample request:
		 * `GET /salesorders/SO/000123/rotrut`
		 * Get api/v3/SalesOrders/{type}/{orderId}/rotrut
		 * @param {string} type The type of sales order to get
		 * @param {string} orderId The id of the sales order to get
		 * @return {SalesOrderRotRutDto} A Visma.net.ERP.SalesOrders.Api.Dto.SalesOrder.SalesOrderRotRutDto if found and accessible
		 */
		SalesOrders_GetItemRotRut_typeorderIdrotrut(type: string, orderId: string): Observable<SalesOrderRotRutDto> {
			return this.http.get<SalesOrderRotRutDto>(this.baseUri + 'api/v3/SalesOrders/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/rotrut', {});
		}

		/**
		 * Gets shipment information for a single sales order
		 * Sample request:
		 * `GET /salesorders/SO/000101/shipment`
		 * Get api/v3/SalesOrders/{type}/{orderId}/shipment
		 * @param {string} type The type of sales order to get
		 * @param {string} orderId The id of the sales order to get
		 * @return {Array<SalesOrderShipmentDto>} A list of Visma.net.ERP.SalesOrders.Api.Dto.SalesOrder.SalesOrderShipmentDto if found and accessible
		 */
		SalesOrders_GetSalesOrderShipment_typeorderIdshipment(type: string, orderId: string): Observable<Array<SalesOrderShipmentDto>> {
			return this.http.get<Array<SalesOrderShipmentDto>>(this.baseUri + 'api/v3/SalesOrders/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/shipment', {});
		}

		/**
		 * Gets tax information for a single sales order
		 * Sample request:
		 * `GET /salesorders/SO/000101/tax`
		 * Get api/v3/SalesOrders/{type}/{orderId}/tax
		 * @param {string} type The type of sales order to get
		 * @param {string} orderId The id of the sales order to get
		 * @return {Array<SalesOrderTaxDto>} A list of Visma.net.ERP.SalesOrders.Api.Dto.SalesOrder.SalesOrderTaxDto if found and accessible
		 */
		SalesOrders_GetItemTax_typeorderIdtax(type: string, orderId: string): Observable<Array<SalesOrderTaxDto>> {
			return this.http.get<Array<SalesOrderTaxDto>>(this.baseUri + 'api/v3/SalesOrders/' + (type == null ? '' : encodeURIComponent(type)) + '/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/tax', {});
		}
	}

}

