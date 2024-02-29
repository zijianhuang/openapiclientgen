import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddProductCustomField {
		field?: AddProductCustomFieldFields;
	}
	export interface AddProductCustomFieldFormProperties {
	}
	export function CreateAddProductCustomFieldFormGroup() {
		return new FormGroup<AddProductCustomFieldFormProperties>({
		});

	}

	export interface AddProductCustomFieldFields {

		/**
		 * Unique identifier of the ProductCustomField (custom_field_id)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** The value for the ProductCustomField */
		value?: string | null;
	}
	export interface AddProductCustomFieldFieldsFormProperties {

		/**
		 * Unique identifier of the ProductCustomField (custom_field_id)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** The value for the ProductCustomField */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAddProductCustomFieldFieldsFormGroup() {
		return new FormGroup<AddProductCustomFieldFieldsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface App {
		apps?: Array<AppFields>;
	}
	export interface AppFormProperties {
	}
	export function CreateAppFormGroup() {
		return new FormGroup<AppFormProperties>({
		});

	}

	export interface AppFields {

		/** Author of the app */
		author?: string | null;

		/** Code of the app */
		code?: string | null;

		/** Description of the app */
		description?: string | null;

		/** True if the app is a jsapp */
		js?: boolean | null;

		/** Name of the app */
		name?: string | null;

		/** Page of the app */
		page?: string | null;
	}
	export interface AppFieldsFormProperties {

		/** Author of the app */
		author: FormControl<string | null | undefined>,

		/** Code of the app */
		code: FormControl<string | null | undefined>,

		/** Description of the app */
		description: FormControl<string | null | undefined>,

		/** True if the app is a jsapp */
		js: FormControl<boolean | null | undefined>,

		/** Name of the app */
		name: FormControl<string | null | undefined>,

		/** Page of the app */
		page: FormControl<string | null | undefined>,
	}
	export function CreateAppFieldsFormGroup() {
		return new FormGroup<AppFieldsFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			js: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Attachment {
		attachment?: AttachmentFields;
	}
	export interface AttachmentFormProperties {
	}
	export function CreateAttachmentFormGroup() {
		return new FormGroup<AttachmentFormProperties>({
		});

	}

	export interface AttachmentFields {

		/**
		 * Unique identifier of the attachment
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Private URL of the attachment */
		url?: string | null;
	}
	export interface AttachmentFieldsFormProperties {

		/**
		 * Unique identifier of the attachment
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Private URL of the attachment */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentFieldsFormGroup() {
		return new FormGroup<AttachmentFieldsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttachmentEdit {
		attachment?: AttachmentEditFields;
	}
	export interface AttachmentEditFormProperties {
	}
	export function CreateAttachmentEditFormGroup() {
		return new FormGroup<AttachmentEditFormProperties>({
		});

	}

	export interface AttachmentEditFields {

		/** Filename of the attachment (with file extensison) */
		filename?: string | null;

		/** Public accessible URL with the desired file contents. (LIMIT: 100MB) */
		url?: string | null;
	}
	export interface AttachmentEditFieldsFormProperties {

		/** Filename of the attachment (with file extensison) */
		filename: FormControl<string | null | undefined>,

		/** Public accessible URL with the desired file contents. (LIMIT: 100MB) */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentEditFieldsFormGroup() {
		return new FormGroup<AttachmentEditFieldsFormProperties>({
			filename: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BadParams {
		message?: string | null;
	}
	export interface BadParamsFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateBadParamsFormGroup() {
		return new FormGroup<BadParamsFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BestSold {

		/**
		 * Quantity sold.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		product_id?: number | null;
		product_name?: string | null;

		/**
		 * Total sold amount.
		 * Type: float
		 */
		total?: number | null;
	}
	export interface BestSoldFormProperties {

		/**
		 * Quantity sold.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		product_id: FormControl<number | null | undefined>,
		product_name: FormControl<string | null | undefined>,

		/**
		 * Total sold amount.
		 * Type: float
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBestSoldFormGroup() {
		return new FormGroup<BestSoldFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			product_id: new FormControl<number | null | undefined>(undefined),
			product_name: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BillingAddress {

		/** Address of the Customer's Billing Address */
		address?: string | null;

		/** City of the Customer's Billing Address */
		city?: string | null;

		/** Country code of the Customer's Billing Address (ISO 3166-1 alpha-2) */
		country?: string | null;

		/** Municipality of the Customer's Billing Address */
		municipality?: string | null;

		/** Name of the Customer's Billing Address */
		name?: string | null;

		/** Postal code of the Customer's Billing Address */
		postal?: string | null;

		/** Region code of the Customer's Billing Address (Use the FIPS standard - http://www.geonames.org/countries/) */
		region?: string | null;

		/** Surname of the Customer's Billing Address */
		surname?: string | null;

		/** Tax id of the Customer's Billing Address */
		taxid?: string | null;
	}
	export interface BillingAddressFormProperties {

		/** Address of the Customer's Billing Address */
		address: FormControl<string | null | undefined>,

		/** City of the Customer's Billing Address */
		city: FormControl<string | null | undefined>,

		/** Country code of the Customer's Billing Address (ISO 3166-1 alpha-2) */
		country: FormControl<string | null | undefined>,

		/** Municipality of the Customer's Billing Address */
		municipality: FormControl<string | null | undefined>,

		/** Name of the Customer's Billing Address */
		name: FormControl<string | null | undefined>,

		/** Postal code of the Customer's Billing Address */
		postal: FormControl<string | null | undefined>,

		/** Region code of the Customer's Billing Address (Use the FIPS standard - http://www.geonames.org/countries/) */
		region: FormControl<string | null | undefined>,

		/** Surname of the Customer's Billing Address */
		surname: FormControl<string | null | undefined>,

		/** Tax id of the Customer's Billing Address */
		taxid: FormControl<string | null | undefined>,
	}
	export function CreateBillingAddressFormGroup() {
		return new FormGroup<BillingAddressFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			municipality: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			postal: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			surname: new FormControl<string | null | undefined>(undefined),
			taxid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Category {
		category?: CategoryFields;
	}
	export interface CategoryFormProperties {
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
		});

	}

	export interface CategoryFields {

		/**
		 * Unique identifier of the Category
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Name of the Category */
		name?: string | null;

		/**
		 * Unique identifier of the Parent Category
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		parent_id?: number | null;

		/** Category unique URL path */
		permalink?: string | null;
	}
	export interface CategoryFieldsFormProperties {

		/**
		 * Unique identifier of the Category
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Name of the Category */
		name: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the Parent Category
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		parent_id: FormControl<number | null | undefined>,

		/** Category unique URL path */
		permalink: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFieldsFormGroup() {
		return new FormGroup<CategoryFieldsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent_id: new FormControl<number | null | undefined>(undefined),
			permalink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CategoryEdit {
		category?: CategoryEditFields;
	}
	export interface CategoryEditFormProperties {
	}
	export function CreateCategoryEditFormGroup() {
		return new FormGroup<CategoryEditFormProperties>({
		});

	}

	export interface CategoryEditFields {

		/** Name of the Category */
		name?: string | null;

		/**
		 * Unique identifier of the Parent Category
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		parent_id?: number | null;
	}
	export interface CategoryEditFieldsFormProperties {

		/** Name of the Category */
		name: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the Parent Category
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		parent_id: FormControl<number | null | undefined>,
	}
	export function CreateCategoryEditFieldsFormGroup() {
		return new FormGroup<CategoryEditFieldsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			parent_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CheckoutCustomField {
		checkout_custom_field?: CheckoutCustomFieldFields;
	}
	export interface CheckoutCustomFieldFormProperties {
	}
	export function CreateCheckoutCustomFieldFormGroup() {
		return new FormGroup<CheckoutCustomFieldFormProperties>({
		});

	}

	export interface CheckoutCustomFieldFields {

		/** Area of the CheckoutCustomField */
		area?: CheckoutCustomFieldFieldsArea | null;

		/** The values for the CheckoutCustomField selection */
		custom_field_select_options?: Array<string>;

		/** True if the CheckoutCustomField can be removed from the store */
		deletable?: boolean | null;

		/**
		 * Unique identifier of the CheckoutCustomField
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Label given to the CheckoutCustomField */
		label?: string | null;

		/**
		 * Position of the CheckoutCustomField
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		position?: number | null;

		/** True if the CheckoutCustomField is mandatory */
		required?: boolean | null;

		/** Type of the CheckoutCustomField */
		type?: CheckoutCustomFieldFieldsType | null;
	}
	export interface CheckoutCustomFieldFieldsFormProperties {

		/** Area of the CheckoutCustomField */
		area: FormControl<CheckoutCustomFieldFieldsArea | null | undefined>,

		/** True if the CheckoutCustomField can be removed from the store */
		deletable: FormControl<boolean | null | undefined>,

		/**
		 * Unique identifier of the CheckoutCustomField
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Label given to the CheckoutCustomField */
		label: FormControl<string | null | undefined>,

		/**
		 * Position of the CheckoutCustomField
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		position: FormControl<number | null | undefined>,

		/** True if the CheckoutCustomField is mandatory */
		required: FormControl<boolean | null | undefined>,

		/** Type of the CheckoutCustomField */
		type: FormControl<CheckoutCustomFieldFieldsType | null | undefined>,
	}
	export function CreateCheckoutCustomFieldFieldsFormGroup() {
		return new FormGroup<CheckoutCustomFieldFieldsFormProperties>({
			area: new FormControl<CheckoutCustomFieldFieldsArea | null | undefined>(undefined),
			deletable: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<CheckoutCustomFieldFieldsType | null | undefined>(undefined),
		});

	}

	export enum CheckoutCustomFieldFieldsArea { contact = 'contact', billing_shipping = 'billing_shipping', other = 'other' }

	export enum CheckoutCustomFieldFieldsType { text = 'text', select = 'select', input = 'input', checkbox = 'checkbox' }

	export interface CheckoutCustomFieldEdit {
		checkout_custom_field?: CheckoutCustomFieldEditFields;
	}
	export interface CheckoutCustomFieldEditFormProperties {
	}
	export function CreateCheckoutCustomFieldEditFormGroup() {
		return new FormGroup<CheckoutCustomFieldEditFormProperties>({
		});

	}

	export interface CheckoutCustomFieldEditFields {

		/** Area of the CheckoutCustomField */
		area?: CheckoutCustomFieldFieldsArea | null;

		/** The values for the CheckoutCustomField selection */
		custom_field_select_options?: Array<string>;

		/** True if the CheckoutCustomField can be removed from the store */
		deletable?: boolean | null;

		/** Label given to the CheckoutCustomField */
		label?: string | null;

		/**
		 * Position of the CheckoutCustomField
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		position?: number | null;

		/** True if the CheckoutCustomField is mandatory */
		required?: boolean | null;

		/** Type of the CheckoutCustomField */
		type?: CheckoutCustomFieldEditFieldsType | null;
	}
	export interface CheckoutCustomFieldEditFieldsFormProperties {

		/** Area of the CheckoutCustomField */
		area: FormControl<CheckoutCustomFieldFieldsArea | null | undefined>,

		/** True if the CheckoutCustomField can be removed from the store */
		deletable: FormControl<boolean | null | undefined>,

		/** Label given to the CheckoutCustomField */
		label: FormControl<string | null | undefined>,

		/**
		 * Position of the CheckoutCustomField
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		position: FormControl<number | null | undefined>,

		/** True if the CheckoutCustomField is mandatory */
		required: FormControl<boolean | null | undefined>,

		/** Type of the CheckoutCustomField */
		type: FormControl<CheckoutCustomFieldEditFieldsType | null | undefined>,
	}
	export function CreateCheckoutCustomFieldEditFieldsFormGroup() {
		return new FormGroup<CheckoutCustomFieldEditFieldsFormProperties>({
			area: new FormControl<CheckoutCustomFieldFieldsArea | null | undefined>(undefined),
			deletable: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<CheckoutCustomFieldEditFieldsType | null | undefined>(undefined),
		});

	}

	export enum CheckoutCustomFieldEditFieldsType { text = 'text', select = 'select', input = 'input', checkbox = 'checkbox', date = 'date' }

	export interface Count {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
	}
	export interface CountFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
	}
	export function CreateCountFormGroup() {
		return new FormGroup<CountFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Country {
		code?: string | null;
		name?: string | null;
	}
	export interface CountryFormProperties {
		code: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCountryFormGroup() {
		return new FormGroup<CountryFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CountryOrders {
		code?: string | null;

		/**
		 * Number of country orders.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;
		country?: string | null;

		/** Orders per region. */
		orders?: Array<RegionOrders>;
	}
	export interface CountryOrdersFormProperties {
		code: FormControl<string | null | undefined>,

		/**
		 * Number of country orders.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
		country: FormControl<string | null | undefined>,
	}
	export function CreateCountryOrdersFormGroup() {
		return new FormGroup<CountryOrdersFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegionOrders {
		city?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		country?: number | null;
	}
	export interface RegionOrdersFormProperties {
		city: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		country: FormControl<number | null | undefined>,
	}
	export function CreateRegionOrdersFormGroup() {
		return new FormGroup<RegionOrdersFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<number | null | undefined>(undefined),
			country: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CustomField {
		custom_field?: CustomFieldFields;
	}
	export interface CustomFieldFormProperties {
	}
	export function CreateCustomFieldFormGroup() {
		return new FormGroup<CustomFieldFormProperties>({
		});

	}

	export interface CustomFieldFields {

		/**
		 * Unique identifier of the Custom Field
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Label given to the Custom Field */
		label?: string | null;

		/** Type of the Custom Field */
		type?: CustomFieldFieldsType | null;

		/** All the possible Values of the Custom Field (for type 'selection') */
		values?: Array<string>;
	}
	export interface CustomFieldFieldsFormProperties {

		/**
		 * Unique identifier of the Custom Field
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Label given to the Custom Field */
		label: FormControl<string | null | undefined>,

		/** Type of the Custom Field */
		type: FormControl<CustomFieldFieldsType | null | undefined>,
	}
	export function CreateCustomFieldFieldsFormGroup() {
		return new FormGroup<CustomFieldFieldsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CustomFieldFieldsType | null | undefined>(undefined),
		});

	}

	export enum CustomFieldFieldsType { text = 'text', selection = 'selection', input = 'input' }

	export interface CustomFieldEdit {
		custom_field?: CustomFieldEditFields;
	}
	export interface CustomFieldEditFormProperties {
	}
	export function CreateCustomFieldEditFormGroup() {
		return new FormGroup<CustomFieldEditFormProperties>({
		});

	}

	export interface CustomFieldEditFields {

		/** Label given to the Custom Field */
		label?: string | null;

		/** Type of the Custom Field */
		type?: CustomFieldFieldsType | null;

		/** All the possible Values of the Custom Field (for type 'selection') */
		values?: Array<string>;
	}
	export interface CustomFieldEditFieldsFormProperties {

		/** Label given to the Custom Field */
		label: FormControl<string | null | undefined>,

		/** Type of the Custom Field */
		type: FormControl<CustomFieldFieldsType | null | undefined>,
	}
	export function CreateCustomFieldEditFieldsFormGroup() {
		return new FormGroup<CustomFieldEditFieldsFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CustomFieldFieldsType | null | undefined>(undefined),
		});

	}

	export interface CustomFieldSelectOption {
		custom_field_select_option?: CustomFieldSelectOptionFields;
	}
	export interface CustomFieldSelectOptionFormProperties {
	}
	export function CreateCustomFieldSelectOptionFormGroup() {
		return new FormGroup<CustomFieldSelectOptionFormProperties>({
		});

	}

	export interface CustomFieldSelectOptionFields {

		/**
		 * Unique identifier of the Custom Field Select Option
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Value given to the Custom Field Select Option */
		value?: string | null;
	}
	export interface CustomFieldSelectOptionFieldsFormProperties {

		/**
		 * Unique identifier of the Custom Field Select Option
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Value given to the Custom Field Select Option */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCustomFieldSelectOptionFieldsFormGroup() {
		return new FormGroup<CustomFieldSelectOptionFieldsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomFieldSelectOptionEdit {
		custom_field_select_option?: CustomFieldSelectOptionEditFields;
	}
	export interface CustomFieldSelectOptionEditFormProperties {
	}
	export function CreateCustomFieldSelectOptionEditFormGroup() {
		return new FormGroup<CustomFieldSelectOptionEditFormProperties>({
		});

	}

	export interface CustomFieldSelectOptionEditFields {

		/** Value given to the Custom Field Select Option */
		value?: string | null;
	}
	export interface CustomFieldSelectOptionEditFieldsFormProperties {

		/** Value given to the Custom Field Select Option */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCustomFieldSelectOptionEditFieldsFormGroup() {
		return new FormGroup<CustomFieldSelectOptionEditFieldsFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Customer {
		customer?: CustomerFields;
	}
	export interface CustomerFormProperties {
	}
	export function CreateCustomerFormGroup() {
		return new FormGroup<CustomerFormProperties>({
		});

	}

	export interface CustomerFields {
		billing_address?: BillingAddress;
		customer_additional_fields?: Array<CustomerAdditionalField>;
		customer_categories?: Array<CustomerCategory>;

		/** Email of the Customer */
		email?: string | null;

		/**
		 * Unique identifier of the Customer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Name of the Customer */
		name?: string | null;

		/** Phone of the Customer */
		phone?: string | null;
		shipping_address?: ShippingAddress;

		/** Status of the Customer */
		status?: CustomerFieldsStatus | null;

		/** Surname of the Customer */
		surname?: string | null;
	}
	export interface CustomerFieldsFormProperties {

		/** Email of the Customer */
		email: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the Customer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Name of the Customer */
		name: FormControl<string | null | undefined>,

		/** Phone of the Customer */
		phone: FormControl<string | null | undefined>,

		/** Status of the Customer */
		status: FormControl<CustomerFieldsStatus | null | undefined>,

		/** Surname of the Customer */
		surname: FormControl<string | null | undefined>,
	}
	export function CreateCustomerFieldsFormGroup() {
		return new FormGroup<CustomerFieldsFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CustomerFieldsStatus | null | undefined>(undefined),
			surname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerAdditionalField {
		customer_additional_field?: CustomerAdditionalFieldFields;
	}
	export interface CustomerAdditionalFieldFormProperties {
	}
	export function CreateCustomerAdditionalFieldFormGroup() {
		return new FormGroup<CustomerAdditionalFieldFormProperties>({
		});

	}

	export interface CustomerAdditionalFieldFields {

		/** Area of the Customer Additional Field */
		area?: string | null;

		/**
		 * Unique identifier of the Checkout Custom Field
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		checkout_custom_field_id?: number | null;

		/**
		 * Unique identifier of the Customer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		customer_id?: number | null;

		/**
		 * Unique identifier of the Customer Additional Field
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Label of the Customer Additional Field */
		label?: string | null;

		/** Value of the Customer Additional Field */
		value?: string | null;
	}
	export interface CustomerAdditionalFieldFieldsFormProperties {

		/** Area of the Customer Additional Field */
		area: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the Checkout Custom Field
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		checkout_custom_field_id: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Customer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		customer_id: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Customer Additional Field
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Label of the Customer Additional Field */
		label: FormControl<string | null | undefined>,

		/** Value of the Customer Additional Field */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCustomerAdditionalFieldFieldsFormGroup() {
		return new FormGroup<CustomerAdditionalFieldFieldsFormProperties>({
			area: new FormControl<string | null | undefined>(undefined),
			checkout_custom_field_id: new FormControl<number | null | undefined>(undefined),
			customer_id: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerCategory {
		category?: CustomerCategoryFields;
	}
	export interface CustomerCategoryFormProperties {
	}
	export function CreateCustomerCategoryFormGroup() {
		return new FormGroup<CustomerCategoryFormProperties>({
		});

	}

	export interface CustomerCategoryFields {

		/** Code of the CustomerCategory */
		code?: string | null;

		/**
		 * Unique identifier of the CustomerCategory
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Name of the CustomerCategory */
		name?: string | null;
	}
	export interface CustomerCategoryFieldsFormProperties {

		/** Code of the CustomerCategory */
		code: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the CustomerCategory
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Name of the CustomerCategory */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCustomerCategoryFieldsFormGroup() {
		return new FormGroup<CustomerCategoryFieldsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CustomerFieldsStatus { approved = 'approved', pending = 'pending', disabled = 'disabled' }

	export interface CustomerAdditionalFieldEdit {
		customer_additional_field?: CustomerAdditionalFieldEditFields;
	}
	export interface CustomerAdditionalFieldEditFormProperties {
	}
	export function CreateCustomerAdditionalFieldEditFormGroup() {
		return new FormGroup<CustomerAdditionalFieldEditFormProperties>({
		});

	}

	export interface CustomerAdditionalFieldEditFields {

		/**
		 * Unique identifier of the Checkout Custom Field
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		checkout_custom_field_id?: number | null;

		/** Value of the Customer Additional Field */
		value?: string | null;
	}
	export interface CustomerAdditionalFieldEditFieldsFormProperties {

		/**
		 * Unique identifier of the Checkout Custom Field
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		checkout_custom_field_id: FormControl<number | null | undefined>,

		/** Value of the Customer Additional Field */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCustomerAdditionalFieldEditFieldsFormGroup() {
		return new FormGroup<CustomerAdditionalFieldEditFieldsFormProperties>({
			checkout_custom_field_id: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerCategoryEdit {
		category?: CustomerCategoryEditFields;
	}
	export interface CustomerCategoryEditFormProperties {
	}
	export function CreateCustomerCategoryEditFormGroup() {
		return new FormGroup<CustomerCategoryEditFormProperties>({
		});

	}

	export interface CustomerCategoryEditFields {

		/** Name of the CustomerCategory */
		name?: string | null;
	}
	export interface CustomerCategoryEditFieldsFormProperties {

		/** Name of the CustomerCategory */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCustomerCategoryEditFieldsFormGroup() {
		return new FormGroup<CustomerCategoryEditFieldsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerFieldsWithBillingAddressAndShippingAddressFields {
		billing_address?: BillingAddress;

		/**
		 * Unique identifier of the Customer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;
		shipping_address?: ShippingAddress;
	}
	export interface CustomerFieldsWithBillingAddressAndShippingAddressFieldsFormProperties {

		/**
		 * Unique identifier of the Customer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateCustomerFieldsWithBillingAddressAndShippingAddressFieldsFormGroup() {
		return new FormGroup<CustomerFieldsWithBillingAddressAndShippingAddressFieldsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CustomerFieldsWithPassword {
		billing_address?: BillingAddress;

		/** Email of the Customer */
		email?: string | null;

		/**
		 * Unique identifier of the Customer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Password */
		password?: string | null;

		/** Phone of the Customer */
		phone?: string | null;
		shipping_address?: ShippingAddress;

		/** Status of the Customer */
		status?: CustomerFieldsStatus | null;
	}
	export interface CustomerFieldsWithPasswordFormProperties {

		/** Email of the Customer */
		email: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the Customer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Password */
		password: FormControl<string | null | undefined>,

		/** Phone of the Customer */
		phone: FormControl<string | null | undefined>,

		/** Status of the Customer */
		status: FormControl<CustomerFieldsStatus | null | undefined>,
	}
	export function CreateCustomerFieldsWithPasswordFormGroup() {
		return new FormGroup<CustomerFieldsWithPasswordFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CustomerFieldsStatus | null | undefined>(undefined),
		});

	}

	export interface CustomerFieldsWithPasswordNoID {
		billing_address?: BillingAddress;
		customer_category?: Array<number>;

		/** Email of the Customer */
		email?: string | null;

		/** Password */
		password?: string | null;

		/** Phone of the Customer */
		phone?: string | null;
		shipping_address?: ShippingAddress;

		/** Status of the Customer */
		status?: CustomerFieldsStatus | null;
	}
	export interface CustomerFieldsWithPasswordNoIDFormProperties {

		/** Email of the Customer */
		email: FormControl<string | null | undefined>,

		/** Password */
		password: FormControl<string | null | undefined>,

		/** Phone of the Customer */
		phone: FormControl<string | null | undefined>,

		/** Status of the Customer */
		status: FormControl<CustomerFieldsStatus | null | undefined>,
	}
	export function CreateCustomerFieldsWithPasswordNoIDFormGroup() {
		return new FormGroup<CustomerFieldsWithPasswordNoIDFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CustomerFieldsStatus | null | undefined>(undefined),
		});

	}

	export interface CustomerToCustomerCategory {

		/** Email of the Customer */
		email?: string | null;

		/**
		 * Unique identifier of the Customer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;
	}
	export interface CustomerToCustomerCategoryFormProperties {

		/** Email of the Customer */
		email: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the Customer
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateCustomerToCustomerCategoryFormGroup() {
		return new FormGroup<CustomerToCustomerCategoryFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CustomerWithPassword {
		customer?: CustomerFieldsWithPassword;
	}
	export interface CustomerWithPasswordFormProperties {
	}
	export function CreateCustomerWithPasswordFormGroup() {
		return new FormGroup<CustomerWithPasswordFormProperties>({
		});

	}

	export interface CustomerWithPasswordNoID {
		customer?: CustomerFieldsWithPasswordNoID;
	}
	export interface CustomerWithPasswordNoIDFormProperties {
	}
	export function CreateCustomerWithPasswordNoIDFormGroup() {
		return new FormGroup<CustomerWithPasswordNoIDFormProperties>({
		});

	}

	export interface CustomersToCustomerCategory {
		customers?: Array<CustomerToCustomerCategory>;
	}
	export interface CustomersToCustomerCategoryFormProperties {
	}
	export function CreateCustomersToCustomerCategoryFormGroup() {
		return new FormGroup<CustomersToCustomerCategoryFormProperties>({
		});

	}

	export interface DailyVisits {
		date?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		visits?: number | null;
	}
	export interface DailyVisitsFormProperties {
		date: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		visits: FormControl<number | null | undefined>,
	}
	export function CreateDailyVisitsFormGroup() {
		return new FormGroup<DailyVisitsFormProperties>({
			date: new FormControl<string | null | undefined>(undefined),
			visits: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DigitalProduct {
		digital_product?: DigitalProductFields;
	}
	export interface DigitalProductFormProperties {
	}
	export function CreateDigitalProductFormGroup() {
		return new FormGroup<DigitalProductFormProperties>({
		});

	}

	export interface DigitalProductFields {

		/**
		 * Time left in seconds before the current private URL expires
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expiration_seconds?: number | null;

		/**
		 * Unique identifier of the digital product
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Private URL of the digital product */
		url?: string | null;
	}
	export interface DigitalProductFieldsFormProperties {

		/**
		 * Time left in seconds before the current private URL expires
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expiration_seconds: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the digital product
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Private URL of the digital product */
		url: FormControl<string | null | undefined>,
	}
	export function CreateDigitalProductFieldsFormGroup() {
		return new FormGroup<DigitalProductFieldsFormProperties>({
			expiration_seconds: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DigitalProductEdit {
		digital_product?: DigitalProductEditFields;
	}
	export interface DigitalProductEditFormProperties {
	}
	export function CreateDigitalProductEditFormGroup() {
		return new FormGroup<DigitalProductEditFormProperties>({
		});

	}

	export interface DigitalProductEditFields {

		/** Filename of the digital product (with file extensison) */
		filename?: string | null;

		/** Public accessible URL with the desired file contents. (LIMIT: 100MB) */
		url?: string | null;
	}
	export interface DigitalProductEditFieldsFormProperties {

		/** Filename of the digital product (with file extensison) */
		filename: FormControl<string | null | undefined>,

		/** Public accessible URL with the desired file contents. (LIMIT: 100MB) */
		url: FormControl<string | null | undefined>,
	}
	export function CreateDigitalProductEditFieldsFormGroup() {
		return new FormGroup<DigitalProductEditFieldsFormProperties>({
			filename: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Fulfillment {
		category?: FulfillmentFields;
	}
	export interface FulfillmentFormProperties {
	}
	export function CreateFulfillmentFormGroup() {
		return new FormGroup<FulfillmentFormProperties>({
		});

	}

	export interface FulfillmentFields {

		/** Unique identifier of the Fulfillment used by the tracking company */
		external_id?: string | null;

		/**
		 * Unique identifier of the Fulfillment
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Order associated with the fulfillment */
		order_id?: string | null;

		/** Type of Service requested to the tracking company */
		service_type?: string | null;

		/** Status of the fulfillment */
		shipment_status?: string | null;

		/** Tracking company responsible for the fulfillment */
		tracking_company?: string | null;

		/** Tracking Number associated with the fulfillment */
		tracking_number?: string | null;

		/** Type of fulfillment Service used */
		type?: string | null;
	}
	export interface FulfillmentFieldsFormProperties {

		/** Unique identifier of the Fulfillment used by the tracking company */
		external_id: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the Fulfillment
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Order associated with the fulfillment */
		order_id: FormControl<string | null | undefined>,

		/** Type of Service requested to the tracking company */
		service_type: FormControl<string | null | undefined>,

		/** Status of the fulfillment */
		shipment_status: FormControl<string | null | undefined>,

		/** Tracking company responsible for the fulfillment */
		tracking_company: FormControl<string | null | undefined>,

		/** Tracking Number associated with the fulfillment */
		tracking_number: FormControl<string | null | undefined>,

		/** Type of fulfillment Service used */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFulfillmentFieldsFormGroup() {
		return new FormGroup<FulfillmentFieldsFormProperties>({
			external_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			order_id: new FormControl<string | null | undefined>(undefined),
			service_type: new FormControl<string | null | undefined>(undefined),
			shipment_status: new FormControl<string | null | undefined>(undefined),
			tracking_company: new FormControl<string | null | undefined>(undefined),
			tracking_number: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FulfillmentCreate {
		order?: FulfillmentCreateFields;
	}
	export interface FulfillmentCreateFormProperties {
	}
	export function CreateFulfillmentCreateFormGroup() {
		return new FormGroup<FulfillmentCreateFormProperties>({
		});

	}

	export interface FulfillmentCreateFields {

		/** First date expected for the fulfillment to arrive at customer place */
		expected_arrival_from?: string | null;

		/** Last date expected for the fulfillment to arrive at customer place */
		expected_arrival_to?: string | null;

		/** Unique identifier of the Fulfillment used by the tracking company */
		external_id?: string | null;

		/** Order associated with the fulfillment */
		order_id?: string | null;

		/** Type of Service requested to the tracking company */
		service_type?: string | null;

		/** Status of the Fulfillment */
		shipment_status?: FulfillmentCreateFieldsShipment_status | null;

		/** Tracking company responsible for the fulfillment */
		tracking_company?: string | null;

		/** Tracking Number associated with the fulfillment */
		tracking_number?: string | null;

		/** Type of fulfillment Service used */
		type?: FulfillmentCreateFieldsType | null;
	}
	export interface FulfillmentCreateFieldsFormProperties {

		/** First date expected for the fulfillment to arrive at customer place */
		expected_arrival_from: FormControl<string | null | undefined>,

		/** Last date expected for the fulfillment to arrive at customer place */
		expected_arrival_to: FormControl<string | null | undefined>,

		/** Unique identifier of the Fulfillment used by the tracking company */
		external_id: FormControl<string | null | undefined>,

		/** Order associated with the fulfillment */
		order_id: FormControl<string | null | undefined>,

		/** Type of Service requested to the tracking company */
		service_type: FormControl<string | null | undefined>,

		/** Status of the Fulfillment */
		shipment_status: FormControl<FulfillmentCreateFieldsShipment_status | null | undefined>,

		/** Tracking company responsible for the fulfillment */
		tracking_company: FormControl<string | null | undefined>,

		/** Tracking Number associated with the fulfillment */
		tracking_number: FormControl<string | null | undefined>,

		/** Type of fulfillment Service used */
		type: FormControl<FulfillmentCreateFieldsType | null | undefined>,
	}
	export function CreateFulfillmentCreateFieldsFormGroup() {
		return new FormGroup<FulfillmentCreateFieldsFormProperties>({
			expected_arrival_from: new FormControl<string | null | undefined>(undefined),
			expected_arrival_to: new FormControl<string | null | undefined>(undefined),
			external_id: new FormControl<string | null | undefined>(undefined),
			order_id: new FormControl<string | null | undefined>(undefined),
			service_type: new FormControl<string | null | undefined>(undefined),
			shipment_status: new FormControl<FulfillmentCreateFieldsShipment_status | null | undefined>(undefined),
			tracking_company: new FormControl<string | null | undefined>(undefined),
			tracking_number: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<FulfillmentCreateFieldsType | null | undefined>(undefined),
		});

	}

	export enum FulfillmentCreateFieldsShipment_status { requested = 'requested', in_transit = 'in_transit', delivered = 'delivered', failed = 'failed' }

	export enum FulfillmentCreateFieldsType { manual = 'manual', shipit = 'shipit', chilexpress = 'chilexpress', ctt = 'ctt', correos_chile = 'correos_chile', dhl = 'dhl', servientrega = 'servientrega', starken = 'starken', bluexpress = 'bluexpress' }

	export interface FulfillmentEdit {
		order?: FulfillmentEditFields;
	}
	export interface FulfillmentEditFormProperties {
	}
	export function CreateFulfillmentEditFormGroup() {
		return new FormGroup<FulfillmentEditFormProperties>({
		});

	}

	export interface FulfillmentEditFields {

		/** First date expected for the fulfillment to arrive at customer place */
		expected_arrival_from?: string | null;

		/** Last date expected for the fulfillment to arrive at customer place */
		expected_arrival_to?: string | null;

		/** Unique identifier of the Fulfillment used by the tracking company */
		external_id?: string | null;

		/** Order associated with the fulfillment */
		order_id?: string | null;

		/** Type of Service requested to the tracking company */
		service_type?: string | null;

		/** Status of the Fulfillment */
		shipment_status?: FulfillmentCreateFieldsShipment_status | null;

		/** Tracking company responsible for the fulfillment */
		tracking_company?: string | null;

		/** Tracking Number associated with the fulfillment */
		tracking_number?: string | null;

		/** Type of fulfillment Service used */
		type?: FulfillmentCreateFieldsType | null;
	}
	export interface FulfillmentEditFieldsFormProperties {

		/** First date expected for the fulfillment to arrive at customer place */
		expected_arrival_from: FormControl<string | null | undefined>,

		/** Last date expected for the fulfillment to arrive at customer place */
		expected_arrival_to: FormControl<string | null | undefined>,

		/** Unique identifier of the Fulfillment used by the tracking company */
		external_id: FormControl<string | null | undefined>,

		/** Order associated with the fulfillment */
		order_id: FormControl<string | null | undefined>,

		/** Type of Service requested to the tracking company */
		service_type: FormControl<string | null | undefined>,

		/** Status of the Fulfillment */
		shipment_status: FormControl<FulfillmentCreateFieldsShipment_status | null | undefined>,

		/** Tracking company responsible for the fulfillment */
		tracking_company: FormControl<string | null | undefined>,

		/** Tracking Number associated with the fulfillment */
		tracking_number: FormControl<string | null | undefined>,

		/** Type of fulfillment Service used */
		type: FormControl<FulfillmentCreateFieldsType | null | undefined>,
	}
	export function CreateFulfillmentEditFieldsFormGroup() {
		return new FormGroup<FulfillmentEditFieldsFormProperties>({
			expected_arrival_from: new FormControl<string | null | undefined>(undefined),
			expected_arrival_to: new FormControl<string | null | undefined>(undefined),
			external_id: new FormControl<string | null | undefined>(undefined),
			order_id: new FormControl<string | null | undefined>(undefined),
			service_type: new FormControl<string | null | undefined>(undefined),
			shipment_status: new FormControl<FulfillmentCreateFieldsShipment_status | null | undefined>(undefined),
			tracking_company: new FormControl<string | null | undefined>(undefined),
			tracking_number: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<FulfillmentCreateFieldsType | null | undefined>(undefined),
		});

	}

	export interface Hook {
		hook?: HookFields;
	}
	export interface HookFormProperties {
	}
	export function CreateHookFormGroup() {
		return new FormGroup<HookFormProperties>({
		});

	}

	export interface HookFields {

		/** Hook creation date */
		created_at?: string | null;

		/** Event associated with Hook */
		event?: string | null;

		/**
		 * Unique identifier of the Hook
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Hook name */
		name?: string | null;

		/** Hook URL to be notified */
		url?: string | null;
	}
	export interface HookFieldsFormProperties {

		/** Hook creation date */
		created_at: FormControl<string | null | undefined>,

		/** Event associated with Hook */
		event: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the Hook
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Hook name */
		name: FormControl<string | null | undefined>,

		/** Hook URL to be notified */
		url: FormControl<string | null | undefined>,
	}
	export function CreateHookFieldsFormGroup() {
		return new FormGroup<HookFieldsFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			event: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HookEdit {
		hook?: HookEditFields;
	}
	export interface HookEditFormProperties {
	}
	export function CreateHookEditFormGroup() {
		return new FormGroup<HookEditFormProperties>({
		});

	}

	export interface HookEditFields {

		/**
		 * Event associated with Hook
		 * Required
		 */
		event: HookEditFieldsEvent;

		/**
		 * Hook URL to be notified
		 * Required
		 */
		url: string;
	}
	export interface HookEditFieldsFormProperties {

		/**
		 * Event associated with Hook
		 * Required
		 */
		event: FormControl<HookEditFieldsEvent | null | undefined>,

		/**
		 * Hook URL to be notified
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateHookEditFieldsFormGroup() {
		return new FormGroup<HookEditFieldsFormProperties>({
			event: new FormControl<HookEditFieldsEvent | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HookEditFieldsEvent { order_updated = 'order_updated', order_pending_payment = 'order_pending_payment', order_paid = 'order_paid', order_shipped = 'order_shipped', order_canceled = 'order_canceled', order_abandoned = 'order_abandoned', product_created = 'product_created', product_updated = 'product_updated', product_deleted = 'product_deleted', customer_created = 'customer_created', customer_updated = 'customer_updated', customer_deleted = 'customer_deleted' }

	export interface Id {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
	}
	export interface IdFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateIdFormGroup() {
		return new FormGroup<IdFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Image {
		image?: ImageFields;
	}
	export interface ImageFormProperties {
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
		});

	}

	export interface ImageFields {

		/**
		 * Unique identifier of the image
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/**
		 * Position of the image
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		position?: number | null;

		/** Complete URL of the image */
		url?: string | null;
	}
	export interface ImageFieldsFormProperties {

		/**
		 * Unique identifier of the image
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Position of the image
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		position: FormControl<number | null | undefined>,

		/** Complete URL of the image */
		url: FormControl<string | null | undefined>,
	}
	export function CreateImageFieldsFormGroup() {
		return new FormGroup<ImageFieldsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageEdit {
		image?: ImageEditFields;
	}
	export interface ImageEditFormProperties {
	}
	export function CreateImageEditFormGroup() {
		return new FormGroup<ImageEditFormProperties>({
		});

	}

	export interface ImageEditFields {

		/** Complete URL of the image */
		url?: string | null;
	}
	export interface ImageEditFieldsFormProperties {

		/** Complete URL of the image */
		url: FormControl<string | null | undefined>,
	}
	export function CreateImageEditFieldsFormGroup() {
		return new FormGroup<ImageEditFieldsFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JSApp {

		/** Element of Template to inject HTML */
		element?: string | null;

		/** Template of Store Theme to inject HTML */
		template?: string | null;

		/** Url of the HTML to inject */
		url?: string | null;
	}
	export interface JSAppFormProperties {

		/** Element of Template to inject HTML */
		element: FormControl<string | null | undefined>,

		/** Template of Store Theme to inject HTML */
		template: FormControl<string | null | undefined>,

		/** Url of the HTML to inject */
		url: FormControl<string | null | undefined>,
	}
	export function CreateJSAppFormGroup() {
		return new FormGroup<JSAppFormProperties>({
			element: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JSAppEdit {
		app?: JSApp;
	}
	export interface JSAppEditFormProperties {
	}
	export function CreateJSAppEditFormGroup() {
		return new FormGroup<JSAppEditFormProperties>({
		});

	}

	export interface Language {
		code?: string | null;
		name?: string | null;
	}
	export interface LanguageFormProperties {
		code: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateLanguageFormGroup() {
		return new FormGroup<LanguageFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessageObject {
		message?: string | null;
	}
	export interface MessageObjectFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateMessageObjectFormGroup() {
		return new FormGroup<MessageObjectFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewPartnerStore {
		store?: NewPartnerStoreStore;
	}
	export interface NewPartnerStoreFormProperties {
	}
	export function CreateNewPartnerStoreFormGroup() {
		return new FormGroup<NewPartnerStoreFormProperties>({
		});

	}

	export interface NewPartnerStoreStore {

		/** New Store code. */
		code?: string | null;

		/** Partner email. */
		email_partner?: string | null;

		/** New Store name. */
		name?: string | null;

		/** New Store redirect url. */
		redirect_url?: string | null;
	}
	export interface NewPartnerStoreStoreFormProperties {

		/** New Store code. */
		code: FormControl<string | null | undefined>,

		/** Partner email. */
		email_partner: FormControl<string | null | undefined>,

		/** New Store name. */
		name: FormControl<string | null | undefined>,

		/** New Store redirect url. */
		redirect_url: FormControl<string | null | undefined>,
	}
	export function CreateNewPartnerStoreStoreFormGroup() {
		return new FormGroup<NewPartnerStoreStoreFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			email_partner: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			redirect_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewVsReturning {
		date?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		new?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		returning?: number | null;
	}
	export interface NewVsReturningFormProperties {
		date: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		new: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		returning: FormControl<number | null | undefined>,
	}
	export function CreateNewVsReturningFormGroup() {
		return new FormGroup<NewVsReturningFormProperties>({
			date: new FormControl<string | null | undefined>(undefined),
			new: new FormControl<number | null | undefined>(undefined),
			returning: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface NotFound {
		message?: string | null;
	}
	export interface NotFoundFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateNotFoundFormGroup() {
		return new FormGroup<NotFoundFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Order {
		order?: OrderFields;
	}
	export interface OrderFormProperties {
	}
	export function CreateOrderFormGroup() {
		return new FormGroup<OrderFormProperties>({
		});

	}


	/** Additional field of an order */
	export interface OrderAdditionalFields {

		/** Label of the additional field */
		label?: string | null;

		/** Value of the additional field */
		value?: string | null;
	}

	/** Additional field of an order */
	export interface OrderAdditionalFieldsFormProperties {

		/** Label of the additional field */
		label: FormControl<string | null | undefined>,

		/** Value of the additional field */
		value: FormControl<string | null | undefined>,
	}
	export function CreateOrderAdditionalFieldsFormGroup() {
		return new FormGroup<OrderAdditionalFieldsFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderBillingAddress {

		/** Address of the Order's Billing Address */
		address?: string | null;

		/** City of the Order's Billing Address */
		city?: string | null;

		/** Country code of the Order's Billing Address (ISO 3166-1 alpha-2) */
		country?: string | null;

		/** Country name of the Order's Billing Address */
		country_name?: string | null;

		/** Municipality of the Order's Billing Address */
		municipality?: string | null;

		/** Name of the Order's Billing Address */
		name?: string | null;

		/** Postal code of the Order's Billing Address */
		postal?: string | null;

		/** Region code of the Order's Billing Address (Use the FIPS standard - http://www.geonames.org/countries/) */
		region?: string | null;

		/**
		 * Street number of the Order's Billing Address
		 * Type: double
		 */
		street_number?: number | null;

		/** Surname of the Order's Billing Address */
		surname?: string | null;
	}
	export interface OrderBillingAddressFormProperties {

		/** Address of the Order's Billing Address */
		address: FormControl<string | null | undefined>,

		/** City of the Order's Billing Address */
		city: FormControl<string | null | undefined>,

		/** Country code of the Order's Billing Address (ISO 3166-1 alpha-2) */
		country: FormControl<string | null | undefined>,

		/** Country name of the Order's Billing Address */
		country_name: FormControl<string | null | undefined>,

		/** Municipality of the Order's Billing Address */
		municipality: FormControl<string | null | undefined>,

		/** Name of the Order's Billing Address */
		name: FormControl<string | null | undefined>,

		/** Postal code of the Order's Billing Address */
		postal: FormControl<string | null | undefined>,

		/** Region code of the Order's Billing Address (Use the FIPS standard - http://www.geonames.org/countries/) */
		region: FormControl<string | null | undefined>,

		/**
		 * Street number of the Order's Billing Address
		 * Type: double
		 */
		street_number: FormControl<number | null | undefined>,

		/** Surname of the Order's Billing Address */
		surname: FormControl<string | null | undefined>,
	}
	export function CreateOrderBillingAddressFormGroup() {
		return new FormGroup<OrderBillingAddressFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			country_name: new FormControl<string | null | undefined>(undefined),
			municipality: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			postal: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			street_number: new FormControl<number | null | undefined>(undefined),
			surname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderCreate {
		order?: OrderCreateFields;
	}
	export interface OrderCreateFormProperties {
	}
	export function CreateOrderCreateFormGroup() {
		return new FormGroup<OrderCreateFormProperties>({
		});

	}

	export interface OrderCreateFields {
		customer?: CustomerFieldsWithBillingAddressAndShippingAddressFields;
		products?: Array<OrderProductOrderCreate>;

		/**
		 * Shipping method id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		shipping_method_id?: number | null;

		/** Shipping method name e.g. Royal Mail */
		shipping_method_name?: string | null;

		/**
		 * Shipping method's price (applicable if shipping_method_name is provided instead of a shipping_method_id)
		 * Type: float
		 */
		shipping_price?: number | null;

		/** Status of the Order */
		status?: OrderCreateFieldsStatus | null;
	}
	export interface OrderCreateFieldsFormProperties {

		/**
		 * Shipping method id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		shipping_method_id: FormControl<number | null | undefined>,

		/** Shipping method name e.g. Royal Mail */
		shipping_method_name: FormControl<string | null | undefined>,

		/**
		 * Shipping method's price (applicable if shipping_method_name is provided instead of a shipping_method_id)
		 * Type: float
		 */
		shipping_price: FormControl<number | null | undefined>,

		/** Status of the Order */
		status: FormControl<OrderCreateFieldsStatus | null | undefined>,
	}
	export function CreateOrderCreateFieldsFormGroup() {
		return new FormGroup<OrderCreateFieldsFormProperties>({
			shipping_method_id: new FormControl<number | null | undefined>(undefined),
			shipping_method_name: new FormControl<string | null | undefined>(undefined),
			shipping_price: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<OrderCreateFieldsStatus | null | undefined>(undefined),
		});

	}

	export interface OrderProductOrderCreate {

		/**
		 * Discount of the Order Product
		 * Type: float
		 */
		discount?: number | null;

		/**
		 * Unique identifier of the original Product
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/**
		 * Price of the Order Product
		 * Type: float
		 */
		price?: number | null;

		/**
		 * Price of the Order Product
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		qty?: number | null;

		/**
		 * Unique identifier of the original Product Variant
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		variant_id?: number | null;
	}
	export interface OrderProductOrderCreateFormProperties {

		/**
		 * Discount of the Order Product
		 * Type: float
		 */
		discount: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the original Product
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Price of the Order Product
		 * Type: float
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Price of the Order Product
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		qty: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the original Product Variant
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		variant_id: FormControl<number | null | undefined>,
	}
	export function CreateOrderProductOrderCreateFormGroup() {
		return new FormGroup<OrderProductOrderCreateFormProperties>({
			discount: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			qty: new FormControl<number | null | undefined>(undefined),
			variant_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum OrderCreateFieldsStatus { Abandoned = 'Abandoned', Canceled = 'Canceled', 'Pending Payment' = 'Pending Payment', Paid = 'Paid' }

	export interface OrderEdit {
		order?: OrderEditFields;
	}
	export interface OrderEditFormProperties {
	}
	export function CreateOrderEditFormGroup() {
		return new FormGroup<OrderEditFormProperties>({
		});

	}

	export interface OrderEditFields {

		/** Array of additional fields for the given Order */
		additional_fields?: Array<OrderAdditionalFields>;

		/** Additional information for the given Order */
		additional_information?: string | null;

		/** Status of the Order Shipping */
		shipment_status?: OrderEditFieldsShipment_status | null;

		/** Status of the Order */
		status?: OrderCreateFieldsStatus | null;

		/** Shipping Company used for the given Order */
		tracking_company?: string | null;

		/** Shipping Tracking Number used for the given Order */
		tracking_number?: string | null;

		/** URL to check delivery information for the given Order */
		tracking_url?: string | null;
	}
	export interface OrderEditFieldsFormProperties {

		/** Additional information for the given Order */
		additional_information: FormControl<string | null | undefined>,

		/** Status of the Order Shipping */
		shipment_status: FormControl<OrderEditFieldsShipment_status | null | undefined>,

		/** Status of the Order */
		status: FormControl<OrderCreateFieldsStatus | null | undefined>,

		/** Shipping Company used for the given Order */
		tracking_company: FormControl<string | null | undefined>,

		/** Shipping Tracking Number used for the given Order */
		tracking_number: FormControl<string | null | undefined>,

		/** URL to check delivery information for the given Order */
		tracking_url: FormControl<string | null | undefined>,
	}
	export function CreateOrderEditFieldsFormGroup() {
		return new FormGroup<OrderEditFieldsFormProperties>({
			additional_information: new FormControl<string | null | undefined>(undefined),
			shipment_status: new FormControl<OrderEditFieldsShipment_status | null | undefined>(undefined),
			status: new FormControl<OrderCreateFieldsStatus | null | undefined>(undefined),
			tracking_company: new FormControl<string | null | undefined>(undefined),
			tracking_number: new FormControl<string | null | undefined>(undefined),
			tracking_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OrderEditFieldsShipment_status { requested = 'requested', in_transit = 'in_transit', delivered = 'delivered', failed = 'failed', pickup_available = 'pickup_available' }

	export interface OrderFields {

		/** Array of additional fields for the given Order */
		additional_fields?: Array<OrderAdditionalFields>;

		/** Additional information for the given Order */
		additional_information?: string | null;
		billing_address?: OrderBillingAddress;

		/** Store Checkout Order URL for the given Order */
		checkout_url?: string | null;

		/** Promotion Coupons used on the given Order */
		coupons?: string | null;

		/** Order date */
		created_at?: string | null;

		/** Currency of the Order */
		currency?: string | null;
		customer?: Customer;

		/**
		 * Discount value for the given Order
		 * Type: float
		 */
		discount?: number | null;

		/** Duplicate Order URL for the given Order */
		duplicate_url?: string | null;

		/** Rate id for selected External Shipping Method rate */
		external_shipping_rate_id?: string | null;

		/**
		 * Unique identifier of the Order
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Payment information for the given Order */
		payment_information?: string | null;

		/** Payment Method name used e.g. PayPal */
		payment_method_name?: string | null;

		/** Payment Method type used e.g. paypal */
		payment_method_type?: string | null;
		products?: Array<OrderProduct>;

		/** Recovery Order URL for the given Order */
		recovery_url?: string | null;

		/** Shipment Status for Order Fulfillment. */
		shipment_status?: OrderFieldsShipment_status | null;

		/**
		 * Shipping value for the given Order
		 * Type: float
		 */
		shipping?: number | null;
		shipping_address?: OrderShippingAddress;

		/**
		 * Shipping Discount value for the given order
		 * Type: float
		 */
		shipping_discount?: number | null;

		/**
		 * Shipping method e.g. Royal Mail
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		shipping_method_id?: number | null;

		/** Shipping method e.g. Royal Mail */
		shipping_method_name?: string | null;

		/** Shipping option for this order. */
		shipping_option?: OrderFieldsShipping_option | null;

		/** False if the order is digital. */
		shipping_required?: boolean | null;

		/**
		 * Shipping Tax value for the given order
		 * Type: float
		 */
		shipping_tax?: number | null;
		shipping_taxes?: Array<OrderShippingTax>;
		source?: TrafficSource;

		/** Status of the Order */
		status?: OrderCreateFieldsStatus | null;

		/**
		 * Subtotal value for the given Order. Excluding taxes, shipping and discounts
		 * Type: float
		 */
		subtotal?: number | null;

		/**
		 * Tax value for the given order
		 * Type: float
		 */
		tax?: number | null;

		/**
		 * Total value for the given Order. Including taxes, shipping and discounts
		 * Type: float
		 */
		total?: number | null;

		/** Company Used for Order Fulfillment. */
		tracking_company?: string | null;

		/** Tracking Number for Order Fulfillment. */
		tracking_number?: string | null;

		/** Tracking URL for Order Fulfillment. */
		tracking_url?: string | null;
	}
	export interface OrderFieldsFormProperties {

		/** Additional information for the given Order */
		additional_information: FormControl<string | null | undefined>,

		/** Store Checkout Order URL for the given Order */
		checkout_url: FormControl<string | null | undefined>,

		/** Promotion Coupons used on the given Order */
		coupons: FormControl<string | null | undefined>,

		/** Order date */
		created_at: FormControl<string | null | undefined>,

		/** Currency of the Order */
		currency: FormControl<string | null | undefined>,

		/**
		 * Discount value for the given Order
		 * Type: float
		 */
		discount: FormControl<number | null | undefined>,

		/** Duplicate Order URL for the given Order */
		duplicate_url: FormControl<string | null | undefined>,

		/** Rate id for selected External Shipping Method rate */
		external_shipping_rate_id: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the Order
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Payment information for the given Order */
		payment_information: FormControl<string | null | undefined>,

		/** Payment Method name used e.g. PayPal */
		payment_method_name: FormControl<string | null | undefined>,

		/** Payment Method type used e.g. paypal */
		payment_method_type: FormControl<string | null | undefined>,

		/** Recovery Order URL for the given Order */
		recovery_url: FormControl<string | null | undefined>,

		/** Shipment Status for Order Fulfillment. */
		shipment_status: FormControl<OrderFieldsShipment_status | null | undefined>,

		/**
		 * Shipping value for the given Order
		 * Type: float
		 */
		shipping: FormControl<number | null | undefined>,

		/**
		 * Shipping Discount value for the given order
		 * Type: float
		 */
		shipping_discount: FormControl<number | null | undefined>,

		/**
		 * Shipping method e.g. Royal Mail
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		shipping_method_id: FormControl<number | null | undefined>,

		/** Shipping method e.g. Royal Mail */
		shipping_method_name: FormControl<string | null | undefined>,

		/** Shipping option for this order. */
		shipping_option: FormControl<OrderFieldsShipping_option | null | undefined>,

		/** False if the order is digital. */
		shipping_required: FormControl<boolean | null | undefined>,

		/**
		 * Shipping Tax value for the given order
		 * Type: float
		 */
		shipping_tax: FormControl<number | null | undefined>,

		/** Status of the Order */
		status: FormControl<OrderCreateFieldsStatus | null | undefined>,

		/**
		 * Subtotal value for the given Order. Excluding taxes, shipping and discounts
		 * Type: float
		 */
		subtotal: FormControl<number | null | undefined>,

		/**
		 * Tax value for the given order
		 * Type: float
		 */
		tax: FormControl<number | null | undefined>,

		/**
		 * Total value for the given Order. Including taxes, shipping and discounts
		 * Type: float
		 */
		total: FormControl<number | null | undefined>,

		/** Company Used for Order Fulfillment. */
		tracking_company: FormControl<string | null | undefined>,

		/** Tracking Number for Order Fulfillment. */
		tracking_number: FormControl<string | null | undefined>,

		/** Tracking URL for Order Fulfillment. */
		tracking_url: FormControl<string | null | undefined>,
	}
	export function CreateOrderFieldsFormGroup() {
		return new FormGroup<OrderFieldsFormProperties>({
			additional_information: new FormControl<string | null | undefined>(undefined),
			checkout_url: new FormControl<string | null | undefined>(undefined),
			coupons: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			discount: new FormControl<number | null | undefined>(undefined),
			duplicate_url: new FormControl<string | null | undefined>(undefined),
			external_shipping_rate_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			payment_information: new FormControl<string | null | undefined>(undefined),
			payment_method_name: new FormControl<string | null | undefined>(undefined),
			payment_method_type: new FormControl<string | null | undefined>(undefined),
			recovery_url: new FormControl<string | null | undefined>(undefined),
			shipment_status: new FormControl<OrderFieldsShipment_status | null | undefined>(undefined),
			shipping: new FormControl<number | null | undefined>(undefined),
			shipping_discount: new FormControl<number | null | undefined>(undefined),
			shipping_method_id: new FormControl<number | null | undefined>(undefined),
			shipping_method_name: new FormControl<string | null | undefined>(undefined),
			shipping_option: new FormControl<OrderFieldsShipping_option | null | undefined>(undefined),
			shipping_required: new FormControl<boolean | null | undefined>(undefined),
			shipping_tax: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<OrderCreateFieldsStatus | null | undefined>(undefined),
			subtotal: new FormControl<number | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			tracking_company: new FormControl<string | null | undefined>(undefined),
			tracking_number: new FormControl<string | null | undefined>(undefined),
			tracking_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderProduct {

		/**
		 * Discount of the Order Product
		 * Type: float
		 */
		discount?: number | null;

		/**
		 * Unique identifier of the original Product
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Image URL of the Order Product */
		image?: string | null;

		/** Name of the Order Product */
		name?: string | null;

		/**
		 * Price of the Order Product
		 * Type: float
		 */
		price?: number | null;

		/**
		 * Price of the Order Product
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		qty?: number | null;

		/** Stock Keeping Unit of the Order Product */
		sku?: string | null;
		taxes?: Array<OrderProductTax>;

		/**
		 * Unique identifier of the original Product Variant
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		variant_id?: number | null;

		/**
		 * Weight of the Order Product
		 * Type: float
		 */
		weight?: number | null;
	}
	export interface OrderProductFormProperties {

		/**
		 * Discount of the Order Product
		 * Type: float
		 */
		discount: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the original Product
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Image URL of the Order Product */
		image: FormControl<string | null | undefined>,

		/** Name of the Order Product */
		name: FormControl<string | null | undefined>,

		/**
		 * Price of the Order Product
		 * Type: float
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Price of the Order Product
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		qty: FormControl<number | null | undefined>,

		/** Stock Keeping Unit of the Order Product */
		sku: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the original Product Variant
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		variant_id: FormControl<number | null | undefined>,

		/**
		 * Weight of the Order Product
		 * Type: float
		 */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateOrderProductFormGroup() {
		return new FormGroup<OrderProductFormProperties>({
			discount: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			qty: new FormControl<number | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			variant_id: new FormControl<number | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OrderProductTax {

		/** False if rate is a percentage and true if rate is monetary */
		fixed?: boolean | null;

		/**
		 * Unique identifier of the Order Product Tax
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Name of the category that the tax is associated with or the tax name */
		name?: string | null;

		/**
		 * Tax rate
		 * Type: float
		 */
		rate?: number | null;

		/** False if tax is not included on product price */
		tax_on_product_price?: boolean | null;
	}
	export interface OrderProductTaxFormProperties {

		/** False if rate is a percentage and true if rate is monetary */
		fixed: FormControl<boolean | null | undefined>,

		/**
		 * Unique identifier of the Order Product Tax
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Name of the category that the tax is associated with or the tax name */
		name: FormControl<string | null | undefined>,

		/**
		 * Tax rate
		 * Type: float
		 */
		rate: FormControl<number | null | undefined>,

		/** False if tax is not included on product price */
		tax_on_product_price: FormControl<boolean | null | undefined>,
	}
	export function CreateOrderProductTaxFormGroup() {
		return new FormGroup<OrderProductTaxFormProperties>({
			fixed: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
			tax_on_product_price: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum OrderFieldsShipment_status { delivered = 'delivered', requested = 'requested', in_transit = 'in_transit', failed = 'failed', pickup_available = 'pickup_available' }

	export enum OrderFieldsShipping_option { delivery = 'delivery', store_pickup = 'store_pickup', no_shipping = 'no_shipping' }

	export interface OrderShippingTax {

		/** Code of the associated country */
		country?: string | null;

		/** False if rate is a percentage and true if rate is monetary */
		fixed?: boolean | null;

		/**
		 * Unique identifier of the Order Shipping Tax
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Tax name */
		name?: string | null;

		/**
		 * Tax rate
		 * Type: float
		 */
		rate?: number | null;

		/** Code of the associated region */
		region?: string | null;

		/** False if shipping tax is not included on shipping price */
		tax_on_shipping_price?: boolean | null;
	}
	export interface OrderShippingTaxFormProperties {

		/** Code of the associated country */
		country: FormControl<string | null | undefined>,

		/** False if rate is a percentage and true if rate is monetary */
		fixed: FormControl<boolean | null | undefined>,

		/**
		 * Unique identifier of the Order Shipping Tax
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Tax name */
		name: FormControl<string | null | undefined>,

		/**
		 * Tax rate
		 * Type: float
		 */
		rate: FormControl<number | null | undefined>,

		/** Code of the associated region */
		region: FormControl<string | null | undefined>,

		/** False if shipping tax is not included on shipping price */
		tax_on_shipping_price: FormControl<boolean | null | undefined>,
	}
	export function CreateOrderShippingTaxFormGroup() {
		return new FormGroup<OrderShippingTaxFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			fixed: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			tax_on_shipping_price: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OrderHistory {
		order_history?: OrderHistoryFields;
	}
	export interface OrderHistoryFormProperties {
	}
	export function CreateOrderHistoryFormGroup() {
		return new FormGroup<OrderHistoryFormProperties>({
		});

	}

	export interface OrderHistoryFields {

		/** Creation date of the order history */
		created_at?: string | null;

		/**
		 * Unique identifier of the Order History
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Message of the Order History */
		message?: string | null;
	}
	export interface OrderHistoryFieldsFormProperties {

		/** Creation date of the order history */
		created_at: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the Order History
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Message of the Order History */
		message: FormControl<string | null | undefined>,
	}
	export function CreateOrderHistoryFieldsFormGroup() {
		return new FormGroup<OrderHistoryFieldsFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderHistoryEdit {
		order_history?: OrderHistoryEditFields;
	}
	export interface OrderHistoryEditFormProperties {
	}
	export function CreateOrderHistoryEditFormGroup() {
		return new FormGroup<OrderHistoryEditFormProperties>({
		});

	}

	export interface OrderHistoryEditFields {

		/** Message of the Order History */
		message?: string | null;
	}
	export interface OrderHistoryEditFieldsFormProperties {

		/** Message of the Order History */
		message: FormControl<string | null | undefined>,
	}
	export function CreateOrderHistoryEditFieldsFormGroup() {
		return new FormGroup<OrderHistoryEditFieldsFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderShippingAddress {

		/** Address of the Order's Shipping Address */
		address?: string | null;

		/** City of the Order's Shipping Address */
		city?: string | null;

		/** Country code of the Order's Shipping Address (ISO 3166-1 alpha-2) */
		country?: string | null;

		/** Country name of the Order's Shipping Address */
		country_name?: string | null;

		/**
		 * Latitude of the Order's Shipping Address
		 * Type: double
		 */
		latitude?: number | null;

		/**
		 * Longitude of the Order's Shipping Address
		 * Type: double
		 */
		longitude?: number | null;

		/** Municipality of the Order's Shipping Address */
		municipality?: string | null;

		/** Name of the Order's Shipping Address */
		name?: string | null;

		/** Postal code of the Order's Shipping Address */
		postal?: string | null;

		/** Region code of the Order's Shipping Address (Use the FIPS standard - http://www.geonames.org/countries/) */
		region?: string | null;

		/**
		 * Street number of the Order's Shipping Address
		 * Type: double
		 */
		street_number?: number | null;

		/** Surname of the Order's Shipping Address */
		surname?: string | null;
	}
	export interface OrderShippingAddressFormProperties {

		/** Address of the Order's Shipping Address */
		address: FormControl<string | null | undefined>,

		/** City of the Order's Shipping Address */
		city: FormControl<string | null | undefined>,

		/** Country code of the Order's Shipping Address (ISO 3166-1 alpha-2) */
		country: FormControl<string | null | undefined>,

		/** Country name of the Order's Shipping Address */
		country_name: FormControl<string | null | undefined>,

		/**
		 * Latitude of the Order's Shipping Address
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude of the Order's Shipping Address
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,

		/** Municipality of the Order's Shipping Address */
		municipality: FormControl<string | null | undefined>,

		/** Name of the Order's Shipping Address */
		name: FormControl<string | null | undefined>,

		/** Postal code of the Order's Shipping Address */
		postal: FormControl<string | null | undefined>,

		/** Region code of the Order's Shipping Address (Use the FIPS standard - http://www.geonames.org/countries/) */
		region: FormControl<string | null | undefined>,

		/**
		 * Street number of the Order's Shipping Address
		 * Type: double
		 */
		street_number: FormControl<number | null | undefined>,

		/** Surname of the Order's Shipping Address */
		surname: FormControl<string | null | undefined>,
	}
	export function CreateOrderShippingAddressFormGroup() {
		return new FormGroup<OrderShippingAddressFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			country_name: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			municipality: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			postal: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			street_number: new FormControl<number | null | undefined>(undefined),
			surname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersData {

		/** Type: float */
		average?: number | null;

		/** Type: float */
		count?: number | null;
		date?: string | null;

		/**
		 * Total amount paid.
		 * Type: float
		 */
		paid?: number | null;

		/** Type: float */
		pending?: number | null;

		/** Type: float */
		total?: number | null;
	}
	export interface OrdersDataFormProperties {

		/** Type: float */
		average: FormControl<number | null | undefined>,

		/** Type: float */
		count: FormControl<number | null | undefined>,
		date: FormControl<string | null | undefined>,

		/**
		 * Total amount paid.
		 * Type: float
		 */
		paid: FormControl<number | null | undefined>,

		/** Type: float */
		pending: FormControl<number | null | undefined>,

		/** Type: float */
		total: FormControl<number | null | undefined>,
	}
	export function CreateOrdersDataFormGroup() {
		return new FormGroup<OrdersDataFormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			paid: new FormControl<number | null | undefined>(undefined),
			pending: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Page {
		page?: PageFields;
	}
	export interface PageFormProperties {
	}
	export function CreatePageFormGroup() {
		return new FormGroup<PageFormProperties>({
		});

	}

	export interface PageFields {

		/** Body of the Page */
		body?: string | null;

		/** Page categories to which the Page belongs to */
		categories?: Array<PageCategory>;

		/**
		 * Id of the Page
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Image of the Page */
		image?: PageFieldsImage;

		/** True if it is a legal page */
		legal?: boolean | null;

		/** Meta description of the Page */
		meta_description?: string | null;

		/** Meta title of the Page */
		page_title?: string | null;

		/** URL of the Page */
		permalink?: string | null;

		/** Status of the Page */
		status?: PageFieldsStatus | null;

		/** Template of the Page */
		template?: PageTemplate;

		/** Title of the Page */
		title?: string | null;
	}
	export interface PageFieldsFormProperties {

		/** Body of the Page */
		body: FormControl<string | null | undefined>,

		/**
		 * Id of the Page
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** True if it is a legal page */
		legal: FormControl<boolean | null | undefined>,

		/** Meta description of the Page */
		meta_description: FormControl<string | null | undefined>,

		/** Meta title of the Page */
		page_title: FormControl<string | null | undefined>,

		/** URL of the Page */
		permalink: FormControl<string | null | undefined>,

		/** Status of the Page */
		status: FormControl<PageFieldsStatus | null | undefined>,

		/** Title of the Page */
		title: FormControl<string | null | undefined>,
	}
	export function CreatePageFieldsFormGroup() {
		return new FormGroup<PageFieldsFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			legal: new FormControl<boolean | null | undefined>(undefined),
			meta_description: new FormControl<string | null | undefined>(undefined),
			page_title: new FormControl<string | null | undefined>(undefined),
			permalink: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PageFieldsStatus | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageCategory {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position?: number | null;
	}
	export interface PageCategoryFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position: FormControl<number | null | undefined>,
	}
	export function CreatePageCategoryFormGroup() {
		return new FormGroup<PageCategoryFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PageFieldsImage {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		url?: string | null;
	}
	export interface PageFieldsImageFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreatePageFieldsImageFormGroup() {
		return new FormGroup<PageFieldsImageFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PageFieldsStatus { public = 'public', draft = 'draft', hidden = 'hidden' }


	/** Template of the Page */
	export interface PageTemplate {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;
	}

	/** Template of the Page */
	export interface PageTemplateFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreatePageTemplateFormGroup() {
		return new FormGroup<PageTemplateFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageModify {
		page?: PageModifyFields;
	}
	export interface PageModifyFormProperties {
	}
	export function CreatePageModifyFormGroup() {
		return new FormGroup<PageModifyFormProperties>({
		});

	}

	export interface PageModifyFields {

		/** Body of the Page */
		body?: string | null;

		/** Page categories to which the Page belongs to */
		categories?: Array<PageCategory>;

		/** Image of the Page */
		image?: PageModifyFieldsImage;

		/** Meta description of the Page */
		meta_description?: string | null;

		/** Meta title of the Page */
		page_title?: string | null;

		/** URL of the Page */
		permalink?: string | null;

		/** Status of the Page */
		status?: PageFieldsStatus | null;

		/**
		 * ID of the Page template. Use null for the blank layout ('None')
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		template?: number | null;

		/** Title of the Page */
		title?: string | null;
	}
	export interface PageModifyFieldsFormProperties {

		/** Body of the Page */
		body: FormControl<string | null | undefined>,

		/** Meta description of the Page */
		meta_description: FormControl<string | null | undefined>,

		/** Meta title of the Page */
		page_title: FormControl<string | null | undefined>,

		/** URL of the Page */
		permalink: FormControl<string | null | undefined>,

		/** Status of the Page */
		status: FormControl<PageFieldsStatus | null | undefined>,

		/**
		 * ID of the Page template. Use null for the blank layout ('None')
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		template: FormControl<number | null | undefined>,

		/** Title of the Page */
		title: FormControl<string | null | undefined>,
	}
	export function CreatePageModifyFieldsFormGroup() {
		return new FormGroup<PageModifyFieldsFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			meta_description: new FormControl<string | null | undefined>(undefined),
			page_title: new FormControl<string | null | undefined>(undefined),
			permalink: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PageFieldsStatus | null | undefined>(undefined),
			template: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageModifyFieldsImage {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		url?: string | null;
	}
	export interface PageModifyFieldsImageFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreatePageModifyFieldsImageFormGroup() {
		return new FormGroup<PageModifyFieldsImageFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PartnerError {

		/** True when an error occurs. */
		error?: boolean | null;

		/** Field causing the error. */
		field?: string | null;

		/** Message describing the error. */
		message?: string | null;
	}
	export interface PartnerErrorFormProperties {

		/** True when an error occurs. */
		error: FormControl<boolean | null | undefined>,

		/** Field causing the error. */
		field: FormControl<string | null | undefined>,

		/** Message describing the error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreatePartnerErrorFormGroup() {
		return new FormGroup<PartnerErrorFormProperties>({
			error: new FormControl<boolean | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PartnerStoreCode {
		store?: PartnerStoreCodeStore;
	}
	export interface PartnerStoreCodeFormProperties {
	}
	export function CreatePartnerStoreCodeFormGroup() {
		return new FormGroup<PartnerStoreCodeFormProperties>({
		});

	}

	export interface PartnerStoreCodeStore {

		/** Store code. */
		code?: string | null;
	}
	export interface PartnerStoreCodeStoreFormProperties {

		/** Store code. */
		code: FormControl<string | null | undefined>,
	}
	export function CreatePartnerStoreCodeStoreFormGroup() {
		return new FormGroup<PartnerStoreCodeStoreFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PartnerStoreCreate {

		/** Partner code. */
		aff?: string | null;

		/** New Store administrator email. */
		email?: string | null;

		/** ISO3166-2 code for the store langauge. */
		locale?: string | null;

		/** New Store administrator password. */
		password?: string | null;

		/** New Store plan name. */
		plan_name?: PartnerStoreCreatePlan_name | null;

		/** Indicates whether the request should fail if the Store name provided is already in use. */
		reject_duplicates?: boolean | null;

		/** New Store name. */
		store_name?: string | null;
	}
	export interface PartnerStoreCreateFormProperties {

		/** Partner code. */
		aff: FormControl<string | null | undefined>,

		/** New Store administrator email. */
		email: FormControl<string | null | undefined>,

		/** ISO3166-2 code for the store langauge. */
		locale: FormControl<string | null | undefined>,

		/** New Store administrator password. */
		password: FormControl<string | null | undefined>,

		/** New Store plan name. */
		plan_name: FormControl<PartnerStoreCreatePlan_name | null | undefined>,

		/** Indicates whether the request should fail if the Store name provided is already in use. */
		reject_duplicates: FormControl<boolean | null | undefined>,

		/** New Store name. */
		store_name: FormControl<string | null | undefined>,
	}
	export function CreatePartnerStoreCreateFormGroup() {
		return new FormGroup<PartnerStoreCreateFormProperties>({
			aff: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			plan_name: new FormControl<PartnerStoreCreatePlan_name | null | undefined>(undefined),
			reject_duplicates: new FormControl<boolean | null | undefined>(undefined),
			store_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PartnerStoreCreatePlan_name { pro = 'pro', plus = 'plus', premium = 'premium' }

	export interface PartnerStoreStatus {
		status?: PartnerStoreStatusStatus;
	}
	export interface PartnerStoreStatusFormProperties {
	}
	export function CreatePartnerStoreStatusFormGroup() {
		return new FormGroup<PartnerStoreStatusFormProperties>({
		});

	}

	export interface PartnerStoreStatusStatus {

		/** Message describing the current creation status. */
		message?: string | null;

		/** Percentage of the creation process that was already completed. */
		percentage?: string | null;
	}
	export interface PartnerStoreStatusStatusFormProperties {

		/** Message describing the current creation status. */
		message: FormControl<string | null | undefined>,

		/** Percentage of the creation process that was already completed. */
		percentage: FormControl<string | null | undefined>,
	}
	export function CreatePartnerStoreStatusStatusFormGroup() {
		return new FormGroup<PartnerStoreStatusStatusFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			percentage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaymentMethod {
		payment_method?: PaymentMethodFields;
	}
	export interface PaymentMethodFormProperties {
	}
	export function CreatePaymentMethodFormGroup() {
		return new FormGroup<PaymentMethodFormProperties>({
		});

	}

	export interface PaymentMethodFields {

		/**
		 * Unique identifier of the Payment Method
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Name of the Payment Method */
		name?: string | null;

		/** Type of the Payment Method */
		type?: PaymentMethodFieldsType | null;
	}
	export interface PaymentMethodFieldsFormProperties {

		/**
		 * Unique identifier of the Payment Method
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Name of the Payment Method */
		name: FormControl<string | null | undefined>,

		/** Type of the Payment Method */
		type: FormControl<PaymentMethodFieldsType | null | undefined>,
	}
	export function CreatePaymentMethodFieldsFormGroup() {
		return new FormGroup<PaymentMethodFieldsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PaymentMethodFieldsType | null | undefined>(undefined),
		});

	}

	export enum PaymentMethodFieldsType { manual = 'manual', paypal = 'paypal', pagseguro = 'pagseguro', moneybookers = 'moneybookers', webpay_cl = 'webpay_cl', easypay = 'easypay', easypaycc = 'easypaycc', easypayboleto = 'easypayboleto', ideal_basic = 'ideal_basic', hipay = 'hipay', khipu = 'khipu', mercado_pago = 'mercado_pago', ifthenpay = 'ifthenpay', eupago = 'eupago', stripe = 'stripe', payu = 'payu', servipag = 'servipag' }

	export interface PaymentMethodFreq {
		count?: string | null;
		name?: string | null;
	}
	export interface PaymentMethodFreqFormProperties {
		count: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreatePaymentMethodFreqFormGroup() {
		return new FormGroup<PaymentMethodFreqFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Product {
		product?: ProductFields;
	}
	export interface ProductFormProperties {
	}
	export function CreateProductFormGroup() {
		return new FormGroup<ProductFormProperties>({
		});

	}

	export interface ProductFields {

		/** Barcode of the product */
		barcode?: string | null;
		categories?: Array<CategoryFields>;

		/** Date of product creation */
		created_at?: string | null;

		/** Description of the product */
		description?: string | null;

		/**
		 * Diameter of the product
		 * Type: float
		 */
		diameter?: number | null;

		/**
		 * Discount of the product
		 * Type: float
		 */
		discount?: number | null;

		/** True if the product is featured */
		featured?: boolean | null;

		/** Category of a Product based on the Google product taxonomy */
		google_product_category?: string | null;

		/**
		 * Height of the product
		 * Type: float
		 */
		height?: number | null;

		/**
		 * Unique identifier of the product
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;
		images?: Array<ImageFields>;

		/**
		 * Length of the product
		 * Type: float
		 */
		length?: number | null;

		/** Name of the product */
		name?: string | null;

		/** Format the product package */
		package_format?: ProductFieldsPackage_format | null;

		/** Product unique URL path */
		permalink?: string | null;

		/**
		 * Price of the product
		 * Type: float
		 */
		price?: number | null;

		/** Stock Keeping Unit of the product */
		sku?: string | null;

		/** Status of the product */
		status?: ProductFieldsStatus | null;

		/**
		 * Quantity in stock for the product
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		stock?: number | null;

		/** True if the Product has unlimited stock */
		stock_unlimited?: boolean | null;
		variants?: Array<VariantFields>;

		/**
		 * Weight of the product
		 * Type: float
		 */
		weight?: number | null;

		/**
		 * Width of the product
		 * Type: float
		 */
		width?: number | null;
	}
	export interface ProductFieldsFormProperties {

		/** Barcode of the product */
		barcode: FormControl<string | null | undefined>,

		/** Date of product creation */
		created_at: FormControl<string | null | undefined>,

		/** Description of the product */
		description: FormControl<string | null | undefined>,

		/**
		 * Diameter of the product
		 * Type: float
		 */
		diameter: FormControl<number | null | undefined>,

		/**
		 * Discount of the product
		 * Type: float
		 */
		discount: FormControl<number | null | undefined>,

		/** True if the product is featured */
		featured: FormControl<boolean | null | undefined>,

		/** Category of a Product based on the Google product taxonomy */
		google_product_category: FormControl<string | null | undefined>,

		/**
		 * Height of the product
		 * Type: float
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the product
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Length of the product
		 * Type: float
		 */
		length: FormControl<number | null | undefined>,

		/** Name of the product */
		name: FormControl<string | null | undefined>,

		/** Format the product package */
		package_format: FormControl<ProductFieldsPackage_format | null | undefined>,

		/** Product unique URL path */
		permalink: FormControl<string | null | undefined>,

		/**
		 * Price of the product
		 * Type: float
		 */
		price: FormControl<number | null | undefined>,

		/** Stock Keeping Unit of the product */
		sku: FormControl<string | null | undefined>,

		/** Status of the product */
		status: FormControl<ProductFieldsStatus | null | undefined>,

		/**
		 * Quantity in stock for the product
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		stock: FormControl<number | null | undefined>,

		/** True if the Product has unlimited stock */
		stock_unlimited: FormControl<boolean | null | undefined>,

		/**
		 * Weight of the product
		 * Type: float
		 */
		weight: FormControl<number | null | undefined>,

		/**
		 * Width of the product
		 * Type: float
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateProductFieldsFormGroup() {
		return new FormGroup<ProductFieldsFormProperties>({
			barcode: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			diameter: new FormControl<number | null | undefined>(undefined),
			discount: new FormControl<number | null | undefined>(undefined),
			featured: new FormControl<boolean | null | undefined>(undefined),
			google_product_category: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			package_format: new FormControl<ProductFieldsPackage_format | null | undefined>(undefined),
			permalink: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ProductFieldsStatus | null | undefined>(undefined),
			stock: new FormControl<number | null | undefined>(undefined),
			stock_unlimited: new FormControl<boolean | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ProductFieldsPackage_format { box = 'box', cylinder = 'cylinder' }

	export enum ProductFieldsStatus { available = 'available', 'not-available' = 'not-available', disabled = 'disabled' }

	export interface VariantFields {

		/**
		 * Unique identifier of the product
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;
		image?: ImageFields;
		options?: Array<ProductOptionVariantEdit>;

		/**
		 * Price of the product
		 * Type: float
		 */
		price?: number | null;

		/** Stock Keeping Unit of the Product's Variant */
		sku?: string | null;

		/**
		 * Quantity in stock for the Product's Variant
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		stock?: number | null;

		/** True if the Product's Variant has unlimited stock */
		stock_unlimited?: boolean | null;
	}
	export interface VariantFieldsFormProperties {

		/**
		 * Unique identifier of the product
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Price of the product
		 * Type: float
		 */
		price: FormControl<number | null | undefined>,

		/** Stock Keeping Unit of the Product's Variant */
		sku: FormControl<string | null | undefined>,

		/**
		 * Quantity in stock for the Product's Variant
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		stock: FormControl<number | null | undefined>,

		/** True if the Product's Variant has unlimited stock */
		stock_unlimited: FormControl<boolean | null | undefined>,
	}
	export function CreateVariantFieldsFormGroup() {
		return new FormGroup<VariantFieldsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			stock: new FormControl<number | null | undefined>(undefined),
			stock_unlimited: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ProductOptionVariantEdit {

		/** Name of the product option */
		name?: string | null;

		/**
		 * Id of the product option
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		product_option_id?: number | null;

		/**
		 * position of product option
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		product_option_position?: number | null;

		/**
		 * Id of product option value
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		product_option_value_id?: number | null;

		/**
		 * position of product option value
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		product_value_position?: number | null;

		/** Value of the product option */
		value?: string | null;
	}
	export interface ProductOptionVariantEditFormProperties {

		/** Name of the product option */
		name: FormControl<string | null | undefined>,

		/**
		 * Id of the product option
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		product_option_id: FormControl<number | null | undefined>,

		/**
		 * position of product option
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		product_option_position: FormControl<number | null | undefined>,

		/**
		 * Id of product option value
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		product_option_value_id: FormControl<number | null | undefined>,

		/**
		 * position of product option value
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		product_value_position: FormControl<number | null | undefined>,

		/** Value of the product option */
		value: FormControl<string | null | undefined>,
	}
	export function CreateProductOptionVariantEditFormGroup() {
		return new FormGroup<ProductOptionVariantEditFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			product_option_id: new FormControl<number | null | undefined>(undefined),
			product_option_position: new FormControl<number | null | undefined>(undefined),
			product_option_value_id: new FormControl<number | null | undefined>(undefined),
			product_value_position: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductCustomField {
		field?: ProductCustomFieldFields;
	}
	export interface ProductCustomFieldFormProperties {
	}
	export function CreateProductCustomFieldFormGroup() {
		return new FormGroup<ProductCustomFieldFormProperties>({
		});

	}

	export interface ProductCustomFieldFields {

		/**
		 * Unique identifier of the ProductCustomField
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		custom_field_id?: number | null;

		/**
		 * Unique identifier of the ProductCustomField value
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** The label for the ProductCustomField */
		label?: string | null;

		/** The type of the ProductCustomField */
		type?: string | null;

		/** The value for the ProductCustomField */
		value?: string | null;

		/** The value id for the ProductCustomField */
		value_id?: string | null;
	}
	export interface ProductCustomFieldFieldsFormProperties {

		/**
		 * Unique identifier of the ProductCustomField
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		custom_field_id: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the ProductCustomField value
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** The label for the ProductCustomField */
		label: FormControl<string | null | undefined>,

		/** The type of the ProductCustomField */
		type: FormControl<string | null | undefined>,

		/** The value for the ProductCustomField */
		value: FormControl<string | null | undefined>,

		/** The value id for the ProductCustomField */
		value_id: FormControl<string | null | undefined>,
	}
	export function CreateProductCustomFieldFieldsFormGroup() {
		return new FormGroup<ProductCustomFieldFieldsFormProperties>({
			custom_field_id: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			value_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductEdit {
		product?: ProductEditFields;
	}
	export interface ProductEditFormProperties {
	}
	export function CreateProductEditFormGroup() {
		return new FormGroup<ProductEditFormProperties>({
		});

	}

	export interface ProductEditFields {

		/** Barcode of the product */
		barcode?: string | null;
		categories?: Array<CategoryFields>;

		/** Description of the product */
		description?: string | null;

		/**
		 * Diameter of the product
		 * Type: float
		 */
		diameter?: number | null;

		/** True if the product is featured */
		featured?: boolean | null;

		/** Category of a Product based on the Google product taxonomy */
		google_product_category?: string | null;

		/**
		 * Height of the product
		 * Type: float
		 */
		height?: number | null;

		/**
		 * Length of the product
		 * Type: float
		 */
		length?: number | null;

		/** SEO meta description of the product */
		meta_description?: string | null;

		/**
		 * Name of the product
		 * Required
		 */
		name: string;

		/** Format the product package */
		package_format?: ProductFieldsPackage_format | null;

		/** SEO title of the product */
		page_title?: string | null;

		/** Product unique URL path */
		permalink?: string | null;

		/**
		 * Price of the product
		 * Required
		 * Type: float
		 */
		price: number;

		/** False if the product is digital */
		shipping_required?: boolean | null;

		/** Stock Keeping Unit of the product */
		sku?: string | null;

		/** Status of the product */
		status?: ProductFieldsStatus | null;

		/**
		 * Quantity in stock for the product
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		stock?: number | null;

		/** True if the Product has unlimited stock */
		stock_unlimited?: boolean | null;

		/**
		 * Weight of the product
		 * Type: float
		 */
		weight?: number | null;

		/**
		 * Width of the product
		 * Type: float
		 */
		width?: number | null;
	}
	export interface ProductEditFieldsFormProperties {

		/** Barcode of the product */
		barcode: FormControl<string | null | undefined>,

		/** Description of the product */
		description: FormControl<string | null | undefined>,

		/**
		 * Diameter of the product
		 * Type: float
		 */
		diameter: FormControl<number | null | undefined>,

		/** True if the product is featured */
		featured: FormControl<boolean | null | undefined>,

		/** Category of a Product based on the Google product taxonomy */
		google_product_category: FormControl<string | null | undefined>,

		/**
		 * Height of the product
		 * Type: float
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Length of the product
		 * Type: float
		 */
		length: FormControl<number | null | undefined>,

		/** SEO meta description of the product */
		meta_description: FormControl<string | null | undefined>,

		/**
		 * Name of the product
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Format the product package */
		package_format: FormControl<ProductFieldsPackage_format | null | undefined>,

		/** SEO title of the product */
		page_title: FormControl<string | null | undefined>,

		/** Product unique URL path */
		permalink: FormControl<string | null | undefined>,

		/**
		 * Price of the product
		 * Required
		 * Type: float
		 */
		price: FormControl<number | null | undefined>,

		/** False if the product is digital */
		shipping_required: FormControl<boolean | null | undefined>,

		/** Stock Keeping Unit of the product */
		sku: FormControl<string | null | undefined>,

		/** Status of the product */
		status: FormControl<ProductFieldsStatus | null | undefined>,

		/**
		 * Quantity in stock for the product
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		stock: FormControl<number | null | undefined>,

		/** True if the Product has unlimited stock */
		stock_unlimited: FormControl<boolean | null | undefined>,

		/**
		 * Weight of the product
		 * Type: float
		 */
		weight: FormControl<number | null | undefined>,

		/**
		 * Width of the product
		 * Type: float
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateProductEditFieldsFormGroup() {
		return new FormGroup<ProductEditFieldsFormProperties>({
			barcode: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			diameter: new FormControl<number | null | undefined>(undefined),
			featured: new FormControl<boolean | null | undefined>(undefined),
			google_product_category: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			meta_description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			package_format: new FormControl<ProductFieldsPackage_format | null | undefined>(undefined),
			page_title: new FormControl<string | null | undefined>(undefined),
			permalink: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			shipping_required: new FormControl<boolean | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ProductFieldsStatus | null | undefined>(undefined),
			stock: new FormControl<number | null | undefined>(undefined),
			stock_unlimited: new FormControl<boolean | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProductOption {
		option?: ProductOptionFields;
	}
	export interface ProductOptionFormProperties {
	}
	export function CreateProductOptionFormGroup() {
		return new FormGroup<ProductOptionFormProperties>({
		});

	}

	export interface ProductOptionFields {

		/**
		 * Unique identifier of the product option
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Name of the product option */
		name?: string | null;

		/** Type of the product option */
		option_type?: ProductOptionFieldsOption_type | null;

		/**
		 * Position of the product option
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		position?: number | null;
		values?: Array<ProductOptionValueFields>;
	}
	export interface ProductOptionFieldsFormProperties {

		/**
		 * Unique identifier of the product option
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Name of the product option */
		name: FormControl<string | null | undefined>,

		/** Type of the product option */
		option_type: FormControl<ProductOptionFieldsOption_type | null | undefined>,

		/**
		 * Position of the product option
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		position: FormControl<number | null | undefined>,
	}
	export function CreateProductOptionFieldsFormGroup() {
		return new FormGroup<ProductOptionFieldsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			option_type: new FormControl<ProductOptionFieldsOption_type | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ProductOptionFieldsOption_type { option = 'option', input = 'input', text = 'text', file = 'file' }

	export interface ProductOptionValueFields {

		/**
		 * Unique identifier of the product option value
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Name of the product option value */
		name?: string | null;

		/**
		 * Position of the product option value
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		position?: number | null;
		product_option?: ProductOption;
		variants?: Array<Variant>;
	}
	export interface ProductOptionValueFieldsFormProperties {

		/**
		 * Unique identifier of the product option value
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Name of the product option value */
		name: FormControl<string | null | undefined>,

		/**
		 * Position of the product option value
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		position: FormControl<number | null | undefined>,
	}
	export function CreateProductOptionValueFieldsFormGroup() {
		return new FormGroup<ProductOptionValueFieldsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Variant {
		variant?: VariantFields;
	}
	export interface VariantFormProperties {
	}
	export function CreateVariantFormGroup() {
		return new FormGroup<VariantFormProperties>({
		});

	}

	export interface ProductOptionEdit {
		option?: ProductOptionEditFields;
	}
	export interface ProductOptionEditFormProperties {
	}
	export function CreateProductOptionEditFormGroup() {
		return new FormGroup<ProductOptionEditFormProperties>({
		});

	}

	export interface ProductOptionEditFields {

		/** Name of the product option */
		name?: string | null;

		/** Type of the product option */
		option_type?: ProductOptionFieldsOption_type | null;

		/**
		 * Position of the product option
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		position?: number | null;
	}
	export interface ProductOptionEditFieldsFormProperties {

		/** Name of the product option */
		name: FormControl<string | null | undefined>,

		/** Type of the product option */
		option_type: FormControl<ProductOptionFieldsOption_type | null | undefined>,

		/**
		 * Position of the product option
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		position: FormControl<number | null | undefined>,
	}
	export function CreateProductOptionEditFieldsFormGroup() {
		return new FormGroup<ProductOptionEditFieldsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			option_type: new FormControl<ProductOptionFieldsOption_type | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProductOptionValue {
		value?: ProductOptionValueFields;
	}
	export interface ProductOptionValueFormProperties {
	}
	export function CreateProductOptionValueFormGroup() {
		return new FormGroup<ProductOptionValueFormProperties>({
		});

	}

	export interface ProductOptionValueEdit {
		value?: ProductOptionValueEditFields;
	}
	export interface ProductOptionValueEditFormProperties {
	}
	export function CreateProductOptionValueEditFormGroup() {
		return new FormGroup<ProductOptionValueEditFormProperties>({
		});

	}

	export interface ProductOptionValueEditFields {

		/** Name of the product option value */
		name?: string | null;

		/**
		 * Position of the product option value
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		position?: number | null;
	}
	export interface ProductOptionValueEditFieldsFormProperties {

		/** Name of the product option value */
		name: FormControl<string | null | undefined>,

		/**
		 * Position of the product option value
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		position: FormControl<number | null | undefined>,
	}
	export function CreateProductOptionValueEditFieldsFormGroup() {
		return new FormGroup<ProductOptionValueEditFieldsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Promotion {
		promotion?: PromotionFields;
	}
	export interface PromotionFormProperties {
	}
	export function CreatePromotionFormGroup() {
		return new FormGroup<PromotionFormProperties>({
		});

	}

	export interface PromotionFields {

		/** Creation date of the promotion (requires 'lasts' param - 'date') */
		begins_at?: string | null;

		/** Products Categories where the promotion will be applied (requires 'discount_target' param - 'categories') */
		categories?: Array<Id>;

		/** Code of the promotion */
		code?: string | null;

		/**
		 * Minimum order amount to validate the promotion
		 * Type: float
		 */
		condition_price?: number | null;

		/**
		 * Minimum quantity of ordered itens to validate the promotion
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		condition_qty?: number | null;

		/** True if the promotion can be acumulated with others */
		cumulative?: boolean | null;

		/** Customer Categories to whom the promotion will be applied (requires 'customers' param - 'categories') */
		customer_categories?: Array<Id>;

		/**
		 * Fixed discount amount of the promotion
		 * Type: float
		 */
		discount_amount_fix?: number | null;

		/**
		 * Percentual discount amount of the promotion
		 * Type: float
		 */
		discount_amount_percent?: number | null;

		/** Where the promotion will be applied ('order', 'shipping', 'categories', 'buy_x_get_y) */
		discount_target?: string | null;

		/** If the promotion is currently enabled */
		enabled?: boolean | null;

		/** Expiration date of the promotion (requires 'lasts' param - 'date') */
		expires_at?: string | null;

		/**
		 * Unique identifier of the product
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Controls when the promotion will expire ('none', 'date', 'max_times_used') */
		lasts?: string | null;

		/**
		 * Maximum amount a promotion can be used (requires 'lasts' param - 'max_times_used')
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_times_used?: number | null;

		/** Name of the product */
		name?: string | null;

		/** Products where the promotion will be applied (requires 'discount_target' param - 'categories' or 'buy_x_get_y') */
		products?: Array<Id>;

		/** Products required to apply the promotion (requires 'discount_target' param - 'buy_x_get_y') */
		products_x?: Array<Id>;

		/**
		 * Number of sets of products_x needed to be able to apply the promotion (requires 'discount_target' param - 'buy_x_get_y')
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity_x?: number | null;

		/** Status of the promotion ('active', 'expired') */
		status?: string | null;

		/**
		 * Amount of times the promotion was used
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		times_used?: number | null;
	}
	export interface PromotionFieldsFormProperties {

		/** Creation date of the promotion (requires 'lasts' param - 'date') */
		begins_at: FormControl<string | null | undefined>,

		/** Code of the promotion */
		code: FormControl<string | null | undefined>,

		/**
		 * Minimum order amount to validate the promotion
		 * Type: float
		 */
		condition_price: FormControl<number | null | undefined>,

		/**
		 * Minimum quantity of ordered itens to validate the promotion
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		condition_qty: FormControl<number | null | undefined>,

		/** True if the promotion can be acumulated with others */
		cumulative: FormControl<boolean | null | undefined>,

		/**
		 * Fixed discount amount of the promotion
		 * Type: float
		 */
		discount_amount_fix: FormControl<number | null | undefined>,

		/**
		 * Percentual discount amount of the promotion
		 * Type: float
		 */
		discount_amount_percent: FormControl<number | null | undefined>,

		/** Where the promotion will be applied ('order', 'shipping', 'categories', 'buy_x_get_y) */
		discount_target: FormControl<string | null | undefined>,

		/** If the promotion is currently enabled */
		enabled: FormControl<boolean | null | undefined>,

		/** Expiration date of the promotion (requires 'lasts' param - 'date') */
		expires_at: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the product
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Controls when the promotion will expire ('none', 'date', 'max_times_used') */
		lasts: FormControl<string | null | undefined>,

		/**
		 * Maximum amount a promotion can be used (requires 'lasts' param - 'max_times_used')
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_times_used: FormControl<number | null | undefined>,

		/** Name of the product */
		name: FormControl<string | null | undefined>,

		/**
		 * Number of sets of products_x needed to be able to apply the promotion (requires 'discount_target' param - 'buy_x_get_y')
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity_x: FormControl<number | null | undefined>,

		/** Status of the promotion ('active', 'expired') */
		status: FormControl<string | null | undefined>,

		/**
		 * Amount of times the promotion was used
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		times_used: FormControl<number | null | undefined>,
	}
	export function CreatePromotionFieldsFormGroup() {
		return new FormGroup<PromotionFieldsFormProperties>({
			begins_at: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			condition_price: new FormControl<number | null | undefined>(undefined),
			condition_qty: new FormControl<number | null | undefined>(undefined),
			cumulative: new FormControl<boolean | null | undefined>(undefined),
			discount_amount_fix: new FormControl<number | null | undefined>(undefined),
			discount_amount_percent: new FormControl<number | null | undefined>(undefined),
			discount_target: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			expires_at: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lasts: new FormControl<string | null | undefined>(undefined),
			max_times_used: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			quantity_x: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			times_used: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PromotionEdit {
		promotion?: PromotionEditFields;
	}
	export interface PromotionEditFormProperties {
	}
	export function CreatePromotionEditFormGroup() {
		return new FormGroup<PromotionEditFormProperties>({
		});

	}

	export interface PromotionEditFields {

		/** Creation date of the promotion (requires 'lasts' param - 'date') */
		begins_at?: string | null;

		/** Controls the promotion's condition ('none', 'price', 'qty') */
		buys_at_least?: string | null;

		/** Products Categories where the promotion will be applied (requires 'discount_target' param - 'categories') */
		categories?: Array<Id>;

		/** Code of the promotion */
		code?: string | null;

		/**
		 * Minimum order amount to validate the promotion (requires 'buys_at_least' param - 'price')
		 * Type: float
		 */
		condition_price?: number | null;

		/**
		 * Minimum quantity of ordered itens to validate the promotion (requires 'buys_at_least' param - 'qty')
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		condition_qty?: number | null;

		/** True if the promotion can be acumulated with others */
		cumulative?: boolean | null;

		/** Customer Categories to whom the promotion will be applied (requires 'customers' param - 'categories') */
		customer_categories?: Array<Id>;

		/** Controls to which customers the promotion will be applied ('all', 'loggedin', 'categories', 'guests') */
		customers?: string | null;

		/**
		 * Fixed discount amount of the promotion (requires 'type' param - 'fix')
		 * Type: float
		 */
		discount_amount_fix?: number | null;

		/**
		 * Percentual discount amount of the promotion (requires 'type' param - 'percentage')
		 * Type: float
		 */
		discount_amount_percent?: number | null;

		/** Where the promotion will be applied ('order', 'shipping', 'categories', 'buy_x_get_y) */
		discount_target?: string | null;

		/** If the promotion is to be temporarily disabled */
		enabled?: boolean | null;

		/** Expiration date of the promotion (requires 'lasts' param - 'date') */
		expires_at?: string | null;

		/** Controls when the promotion will expire ('none', 'date', 'max_times_used') */
		lasts?: string | null;

		/**
		 * Maximum amount a promotion can be used (requires 'lasts' param - 'max_times_used')
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_times_used?: number | null;

		/** Name of the product */
		name?: string | null;

		/** Products where the promotion will be applied (requires 'discount_target' param - 'categories' or 'buy_x_get_y') */
		products?: Array<Id>;

		/** Products required to apply the promotion (requires 'discount_target' param - 'buy_x_get_y') */
		products_x?: Array<Id>;

		/**
		 * Number of sets of products_x needed to be able to apply the promotion (requires 'discount_target' param - 'buy_x_get_y')
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity_x?: number | null;

		/** Controls if the discount will be a fixed area ('fix', 'percentage') */
		type?: string | null;
	}
	export interface PromotionEditFieldsFormProperties {

		/** Creation date of the promotion (requires 'lasts' param - 'date') */
		begins_at: FormControl<string | null | undefined>,

		/** Controls the promotion's condition ('none', 'price', 'qty') */
		buys_at_least: FormControl<string | null | undefined>,

		/** Code of the promotion */
		code: FormControl<string | null | undefined>,

		/**
		 * Minimum order amount to validate the promotion (requires 'buys_at_least' param - 'price')
		 * Type: float
		 */
		condition_price: FormControl<number | null | undefined>,

		/**
		 * Minimum quantity of ordered itens to validate the promotion (requires 'buys_at_least' param - 'qty')
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		condition_qty: FormControl<number | null | undefined>,

		/** True if the promotion can be acumulated with others */
		cumulative: FormControl<boolean | null | undefined>,

		/** Controls to which customers the promotion will be applied ('all', 'loggedin', 'categories', 'guests') */
		customers: FormControl<string | null | undefined>,

		/**
		 * Fixed discount amount of the promotion (requires 'type' param - 'fix')
		 * Type: float
		 */
		discount_amount_fix: FormControl<number | null | undefined>,

		/**
		 * Percentual discount amount of the promotion (requires 'type' param - 'percentage')
		 * Type: float
		 */
		discount_amount_percent: FormControl<number | null | undefined>,

		/** Where the promotion will be applied ('order', 'shipping', 'categories', 'buy_x_get_y) */
		discount_target: FormControl<string | null | undefined>,

		/** If the promotion is to be temporarily disabled */
		enabled: FormControl<boolean | null | undefined>,

		/** Expiration date of the promotion (requires 'lasts' param - 'date') */
		expires_at: FormControl<string | null | undefined>,

		/** Controls when the promotion will expire ('none', 'date', 'max_times_used') */
		lasts: FormControl<string | null | undefined>,

		/**
		 * Maximum amount a promotion can be used (requires 'lasts' param - 'max_times_used')
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_times_used: FormControl<number | null | undefined>,

		/** Name of the product */
		name: FormControl<string | null | undefined>,

		/**
		 * Number of sets of products_x needed to be able to apply the promotion (requires 'discount_target' param - 'buy_x_get_y')
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity_x: FormControl<number | null | undefined>,

		/** Controls if the discount will be a fixed area ('fix', 'percentage') */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePromotionEditFieldsFormGroup() {
		return new FormGroup<PromotionEditFieldsFormProperties>({
			begins_at: new FormControl<string | null | undefined>(undefined),
			buys_at_least: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			condition_price: new FormControl<number | null | undefined>(undefined),
			condition_qty: new FormControl<number | null | undefined>(undefined),
			cumulative: new FormControl<boolean | null | undefined>(undefined),
			customers: new FormControl<string | null | undefined>(undefined),
			discount_amount_fix: new FormControl<number | null | undefined>(undefined),
			discount_amount_percent: new FormControl<number | null | undefined>(undefined),
			discount_target: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			expires_at: new FormControl<string | null | undefined>(undefined),
			lasts: new FormControl<string | null | undefined>(undefined),
			max_times_used: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			quantity_x: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Referrer {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		source?: string | null;
	}
	export interface ReferrerFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		source: FormControl<string | null | undefined>,
	}
	export function CreateReferrerFormGroup() {
		return new FormGroup<ReferrerFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Region {
		code?: string | null;
		name?: string | null;
	}
	export interface RegionFormProperties {
		code: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateRegionFormGroup() {
		return new FormGroup<RegionFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShippingAddress {

		/** Address of the Customer's Shipping Address */
		address?: string | null;

		/** City of the Customer's Shipping Address */
		city?: string | null;

		/** Country code of the Customer's Shipping Address (ISO 3166-1 alpha-2) */
		country?: string | null;

		/** Municipality of the Customer's Shipping Address */
		municipality?: string | null;

		/** Name of the Customer's Shipping Address */
		name?: string | null;

		/** Postal code of the Customer's Shipping Address */
		postal?: string | null;

		/** Region code of the Customer's Shipping Address (Use the FIPS standard - http://www.geonames.org/countries/) */
		region?: string | null;

		/** Surname of the Customer's Shipping Address */
		surname?: string | null;
	}
	export interface ShippingAddressFormProperties {

		/** Address of the Customer's Shipping Address */
		address: FormControl<string | null | undefined>,

		/** City of the Customer's Shipping Address */
		city: FormControl<string | null | undefined>,

		/** Country code of the Customer's Shipping Address (ISO 3166-1 alpha-2) */
		country: FormControl<string | null | undefined>,

		/** Municipality of the Customer's Shipping Address */
		municipality: FormControl<string | null | undefined>,

		/** Name of the Customer's Shipping Address */
		name: FormControl<string | null | undefined>,

		/** Postal code of the Customer's Shipping Address */
		postal: FormControl<string | null | undefined>,

		/** Region code of the Customer's Shipping Address (Use the FIPS standard - http://www.geonames.org/countries/) */
		region: FormControl<string | null | undefined>,

		/** Surname of the Customer's Shipping Address */
		surname: FormControl<string | null | undefined>,
	}
	export function CreateShippingAddressFormGroup() {
		return new FormGroup<ShippingAddressFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			municipality: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			postal: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			surname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShippingMethod {
		shipping_method?: ShippingMethodFields;
	}
	export interface ShippingMethodFormProperties {
	}
	export function CreateShippingMethodFormGroup() {
		return new FormGroup<ShippingMethodFormProperties>({
		});

	}

	export interface ShippingMethodFields {

		/** URL that receives the shipping data and returns rates */
		callback_url?: string | null;

		/** City/Municipality name of origin */
		city?: string | null;

		/** URL that returns available shipping services */
		fetch_services_url?: string | null;

		/**
		 * Unique identifier of the Shipping Method
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Name of the Shipping Method */
		name?: string | null;

		/** Postal/Zipcode of origin */
		postal?: string | null;
		services?: Array<ShippingService>;

		/** State/Region code of origin */
		state?: string | null;

		/** Type of the Shipping Method */
		type?: ShippingMethodFieldsType | null;
	}
	export interface ShippingMethodFieldsFormProperties {

		/** URL that receives the shipping data and returns rates */
		callback_url: FormControl<string | null | undefined>,

		/** City/Municipality name of origin */
		city: FormControl<string | null | undefined>,

		/** URL that returns available shipping services */
		fetch_services_url: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the Shipping Method
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Name of the Shipping Method */
		name: FormControl<string | null | undefined>,

		/** Postal/Zipcode of origin */
		postal: FormControl<string | null | undefined>,

		/** State/Region code of origin */
		state: FormControl<string | null | undefined>,

		/** Type of the Shipping Method */
		type: FormControl<ShippingMethodFieldsType | null | undefined>,
	}
	export function CreateShippingMethodFieldsFormGroup() {
		return new FormGroup<ShippingMethodFieldsFormProperties>({
			callback_url: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			fetch_services_url: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			postal: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ShippingMethodFieldsType | null | undefined>(undefined),
		});

	}

	export interface ShippingService {

		/**
		 * Unique identifier of the Shipping Service
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Name of the Shipping Service */
		name?: string | null;

		/** Code of the Shipping Service */
		service_code?: string | null;
	}
	export interface ShippingServiceFormProperties {

		/**
		 * Unique identifier of the Shipping Service
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Name of the Shipping Service */
		name: FormControl<string | null | undefined>,

		/** Code of the Shipping Service */
		service_code: FormControl<string | null | undefined>,
	}
	export function CreateShippingServiceFormGroup() {
		return new FormGroup<ShippingServiceFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			service_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ShippingMethodFieldsType { free = 'free', tables = 'tables', correiosbr = 'correiosbr', correos_chile = 'correos_chile', chilexpress = 'chilexpress', flat = 'flat', ups = 'ups', external = 'external' }

	export interface ShippingMethodEdit {
		shipping_method?: ShippingMethodEditShipping_method;
	}
	export interface ShippingMethodEditFormProperties {
	}
	export function CreateShippingMethodEditFormGroup() {
		return new FormGroup<ShippingMethodEditFormProperties>({
		});

	}

	export interface ShippingMethodEditShipping_method {

		/** URL that receives the shipping data and returns rates */
		callback_url?: string | null;

		/** City/Municipality name of origin */
		city?: string | null;

		/** URL that returns available shipping services */
		fetch_services_url?: string | null;

		/** Name of the Shipping Method */
		name?: string | null;

		/** Postal/Zipcode of origin */
		postal?: string | null;

		/** State/Region code of origin */
		state?: string | null;

		/** Token used to authentica on the the fetch_services_url */
		token?: string | null;
	}
	export interface ShippingMethodEditShipping_methodFormProperties {

		/** URL that receives the shipping data and returns rates */
		callback_url: FormControl<string | null | undefined>,

		/** City/Municipality name of origin */
		city: FormControl<string | null | undefined>,

		/** URL that returns available shipping services */
		fetch_services_url: FormControl<string | null | undefined>,

		/** Name of the Shipping Method */
		name: FormControl<string | null | undefined>,

		/** Postal/Zipcode of origin */
		postal: FormControl<string | null | undefined>,

		/** State/Region code of origin */
		state: FormControl<string | null | undefined>,

		/** Token used to authentica on the the fetch_services_url */
		token: FormControl<string | null | undefined>,
	}
	export function CreateShippingMethodEditShipping_methodFormGroup() {
		return new FormGroup<ShippingMethodEditShipping_methodFormProperties>({
			callback_url: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			fetch_services_url: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			postal: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShippingMethodFreq {
		count?: string | null;
		name?: string | null;
	}
	export interface ShippingMethodFreqFormProperties {
		count: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateShippingMethodFreqFormGroup() {
		return new FormGroup<ShippingMethodFreqFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StatusInvalid {
		message?: string | null;
	}
	export interface StatusInvalidFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusInvalidFormGroup() {
		return new FormGroup<StatusInvalidFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Store {
		address?: StoreAddress;

		/** Store Code */
		code?: string | null;

		/** Store Country */
		country?: string | null;

		/** Store Currency */
		currency?: string | null;

		/** Store Admin Email */
		email?: string | null;

		/** Store Hooks Auth token */
		hooks_token?: string | null;

		/** Store Logo URL */
		logo?: string | null;

		/** Store Name */
		name?: string | null;

		/** Store Timezone */
		timezone?: string | null;

		/** Store URL */
		url?: string | null;

		/** Store Weight Unit */
		weight_unit?: string | null;
	}
	export interface StoreFormProperties {

		/** Store Code */
		code: FormControl<string | null | undefined>,

		/** Store Country */
		country: FormControl<string | null | undefined>,

		/** Store Currency */
		currency: FormControl<string | null | undefined>,

		/** Store Admin Email */
		email: FormControl<string | null | undefined>,

		/** Store Hooks Auth token */
		hooks_token: FormControl<string | null | undefined>,

		/** Store Logo URL */
		logo: FormControl<string | null | undefined>,

		/** Store Name */
		name: FormControl<string | null | undefined>,

		/** Store Timezone */
		timezone: FormControl<string | null | undefined>,

		/** Store URL */
		url: FormControl<string | null | undefined>,

		/** Store Weight Unit */
		weight_unit: FormControl<string | null | undefined>,
	}
	export function CreateStoreFormGroup() {
		return new FormGroup<StoreFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			hooks_token: new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			weight_unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StoreAddress {

		/** Address of the Store's Address */
		address?: string | null;

		/** City of the Store's Address */
		city?: string | null;

		/** Country of the Store's Address (ISO 3166-1 alpha-2) */
		country?: string | null;

		/** Country code of the Store's Address */
		country_code?: string | null;

		/** Postal code of the Store's Address */
		postal?: string | null;

		/** Region of the Store's Address */
		region?: string | null;

		/** Region code of the Store's Address */
		region_code?: string | null;
	}
	export interface StoreAddressFormProperties {

		/** Address of the Store's Address */
		address: FormControl<string | null | undefined>,

		/** City of the Store's Address */
		city: FormControl<string | null | undefined>,

		/** Country of the Store's Address (ISO 3166-1 alpha-2) */
		country: FormControl<string | null | undefined>,

		/** Country code of the Store's Address */
		country_code: FormControl<string | null | undefined>,

		/** Postal code of the Store's Address */
		postal: FormControl<string | null | undefined>,

		/** Region of the Store's Address */
		region: FormControl<string | null | undefined>,

		/** Region code of the Store's Address */
		region_code: FormControl<string | null | undefined>,
	}
	export function CreateStoreAddressFormGroup() {
		return new FormGroup<StoreAddressFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			country_code: new FormControl<string | null | undefined>(undefined),
			postal: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			region_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StoreStats {

		/** Top 10 best sold products. */
		best_sold?: Array<BestSold>;
		conversions?: StoreStatsConversions;

		/** Store currency. */
		currency?: string | null;

		/** Visits per day. */
		daily_visits?: Array<DailyVisits>;

		/** Statistics start date. */
		from?: string | null;
		new_vs_returning_customers?: StoreStatsNew_vs_returning_customers;
		new_vs_returning_orders?: StoreStatsNew_vs_returning_orders;
		orders?: StoreStatsOrders;

		/** Store payment methods and their frequency. */
		payment_methods?: Array<PaymentMethodFreq>;

		/** Top 10 referrer sources and their frequency. */
		referrers?: Array<Referrer>;
		region_orders?: StoreStatsRegion_orders;

		/** Number of times each search was conducted under the form of an aggregation query. */
		search_frequencies_all?: Array<string>;

		/** Number of times each search with zero results was conducted under the form of an aggregation query. */
		search_frequencies_without_results?: Array<string>;

		/** Store shipping methods and their frequency. */
		shipping_methods?: Array<ShippingMethodFreq>;

		/** Statistics end date. */
		to?: string | null;

		/** Type of store traffic and its frequency. */
		traffic_type?: Array<TrafficType>;

		/**
		 * Total number of visits.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		visits?: number | null;
	}
	export interface StoreStatsFormProperties {

		/** Store currency. */
		currency: FormControl<string | null | undefined>,

		/** Statistics start date. */
		from: FormControl<string | null | undefined>,

		/** Statistics end date. */
		to: FormControl<string | null | undefined>,

		/**
		 * Total number of visits.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		visits: FormControl<number | null | undefined>,
	}
	export function CreateStoreStatsFormGroup() {
		return new FormGroup<StoreStatsFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			visits: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StoreStatsConversions {

		/**
		 * Total add to cart conversions.
		 * Type: float
		 */
		added_to_cart?: number | null;

		/**
		 * Total checkout conversions.
		 * Type: float
		 */
		checkout?: number | null;

		/**
		 * Total paid conversions.
		 * Type: float
		 */
		paid?: number | null;
	}
	export interface StoreStatsConversionsFormProperties {

		/**
		 * Total add to cart conversions.
		 * Type: float
		 */
		added_to_cart: FormControl<number | null | undefined>,

		/**
		 * Total checkout conversions.
		 * Type: float
		 */
		checkout: FormControl<number | null | undefined>,

		/**
		 * Total paid conversions.
		 * Type: float
		 */
		paid: FormControl<number | null | undefined>,
	}
	export function CreateStoreStatsConversionsFormGroup() {
		return new FormGroup<StoreStatsConversionsFormProperties>({
			added_to_cart: new FormControl<number | null | undefined>(undefined),
			checkout: new FormControl<number | null | undefined>(undefined),
			paid: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StoreStatsNew_vs_returning_customers {

		/**
		 * Global percentage of new vs returning customers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		global?: number | null;

		/** Numbers of new and returning customers per day. */
		per_day?: Array<NewVsReturning>;
	}
	export interface StoreStatsNew_vs_returning_customersFormProperties {

		/**
		 * Global percentage of new vs returning customers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		global: FormControl<number | null | undefined>,
	}
	export function CreateStoreStatsNew_vs_returning_customersFormGroup() {
		return new FormGroup<StoreStatsNew_vs_returning_customersFormProperties>({
			global: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StoreStatsNew_vs_returning_orders {

		/**
		 * Global percentage of new vs returning customers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		global?: number | null;

		/** Numbers of new and returning customers per day. */
		per_day?: Array<NewVsReturning>;
	}
	export interface StoreStatsNew_vs_returning_ordersFormProperties {

		/**
		 * Global percentage of new vs returning customers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		global: FormControl<number | null | undefined>,
	}
	export function CreateStoreStatsNew_vs_returning_ordersFormGroup() {
		return new FormGroup<StoreStatsNew_vs_returning_ordersFormProperties>({
			global: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StoreStatsOrders {

		/**
		 * Average order amount.
		 * Type: float
		 */
		average?: number | null;

		/**
		 * Total number of orders.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/** Orders data. */
		data?: Array<OrdersData>;

		/**
		 * Total amount from all orders.
		 * Type: float
		 */
		total?: number | null;
	}
	export interface StoreStatsOrdersFormProperties {

		/**
		 * Average order amount.
		 * Type: float
		 */
		average: FormControl<number | null | undefined>,

		/**
		 * Total number of orders.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Total amount from all orders.
		 * Type: float
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateStoreStatsOrdersFormGroup() {
		return new FormGroup<StoreStatsOrdersFormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StoreStatsRegion_orders {

		/** Can be 'regions' when orders are specific of 1 country or 'auto'. */
		display_mode?: string | null;

		/** Orders per country and region(inside the country). */
		regions_orders?: Array<CountryOrders>;
	}
	export interface StoreStatsRegion_ordersFormProperties {

		/** Can be 'regions' when orders are specific of 1 country or 'auto'. */
		display_mode: FormControl<string | null | undefined>,
	}
	export function CreateStoreStatsRegion_ordersFormGroup() {
		return new FormGroup<StoreStatsRegion_ordersFormProperties>({
			display_mode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TrafficType {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		name?: string | null;
	}
	export interface TrafficTypeFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateTrafficTypeFormGroup() {
		return new FormGroup<TrafficTypeFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tax {
		tax?: TaxFields;
	}
	export interface TaxFormProperties {
	}
	export function CreateTaxFormGroup() {
		return new FormGroup<TaxFormProperties>({
		});

	}

	export interface TaxFields {

		/**
		 * Unique identifier of the category of the Tax
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		category_id?: number | null;

		/** Country name where the Tax applies */
		country?: string | null;

		/** True if the tax has a fixed valued amount */
		fixed?: boolean | null;

		/**
		 * Unique identifier of the Tax
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Name that identifies tax */
		name?: string | null;

		/** Region name where the Tax applies */
		region?: string | null;

		/** True if the tax should be applied to shipping costs */
		shipping?: boolean | null;

		/**
		 * Tax value for the given Tax
		 * Type: float
		 */
		tax_amount?: number | null;
	}
	export interface TaxFieldsFormProperties {

		/**
		 * Unique identifier of the category of the Tax
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		category_id: FormControl<number | null | undefined>,

		/** Country name where the Tax applies */
		country: FormControl<string | null | undefined>,

		/** True if the tax has a fixed valued amount */
		fixed: FormControl<boolean | null | undefined>,

		/**
		 * Unique identifier of the Tax
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Name that identifies tax */
		name: FormControl<string | null | undefined>,

		/** Region name where the Tax applies */
		region: FormControl<string | null | undefined>,

		/** True if the tax should be applied to shipping costs */
		shipping: FormControl<boolean | null | undefined>,

		/**
		 * Tax value for the given Tax
		 * Type: float
		 */
		tax_amount: FormControl<number | null | undefined>,
	}
	export function CreateTaxFieldsFormGroup() {
		return new FormGroup<TaxFieldsFormProperties>({
			category_id: new FormControl<number | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			fixed: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			shipping: new FormControl<boolean | null | undefined>(undefined),
			tax_amount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TaxEdit {
		tax?: TaxEditFields;
	}
	export interface TaxEditFormProperties {
	}
	export function CreateTaxEditFormGroup() {
		return new FormGroup<TaxEditFormProperties>({
		});

	}

	export interface TaxEditFields {

		/**
		 * Unique identifier of the category of the Tax
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		category_id?: number | null;

		/** Country where the Tax applies */
		country?: string | null;

		/** True if the tax has a fixed valued amount */
		fixed?: boolean | null;

		/** Name that identifies tax */
		name?: string | null;

		/** Region where the Tax applies */
		region?: string | null;

		/** True if the tax should be applied to shipping costs */
		shipping?: boolean | null;

		/**
		 * Tax value for the given Tax
		 * Type: float
		 */
		tax?: number | null;
	}
	export interface TaxEditFieldsFormProperties {

		/**
		 * Unique identifier of the category of the Tax
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		category_id: FormControl<number | null | undefined>,

		/** Country where the Tax applies */
		country: FormControl<string | null | undefined>,

		/** True if the tax has a fixed valued amount */
		fixed: FormControl<boolean | null | undefined>,

		/** Name that identifies tax */
		name: FormControl<string | null | undefined>,

		/** Region where the Tax applies */
		region: FormControl<string | null | undefined>,

		/** True if the tax should be applied to shipping costs */
		shipping: FormControl<boolean | null | undefined>,

		/**
		 * Tax value for the given Tax
		 * Type: float
		 */
		tax: FormControl<number | null | undefined>,
	}
	export function CreateTaxEditFieldsFormGroup() {
		return new FormGroup<TaxEditFieldsFormProperties>({
			category_id: new FormControl<number | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			fixed: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			shipping: new FormControl<boolean | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TrafficSource {

		/** The campaign that referred the customer to the checkout */
		campaign?: string | null;

		/** The first url visited by the customer */
		first_page_visited?: string | null;

		/** The date when the customer visited the first page */
		first_page_visited_at?: string | null;

		/** The medium that referred the customer to the checkout */
		medium?: string | null;

		/** The code that referred the customer to the checkout */
		referral_code?: string | null;

		/** The source that referred the customer to the website */
		referral_source?: string | null;

		/** The website that referred the customer to the checkout */
		referral_url?: string | null;

		/** Where the checkout originated */
		source_name?: string | null;

		/** User agent of the referred request to checkout */
		user_agent?: string | null;
	}
	export interface TrafficSourceFormProperties {

		/** The campaign that referred the customer to the checkout */
		campaign: FormControl<string | null | undefined>,

		/** The first url visited by the customer */
		first_page_visited: FormControl<string | null | undefined>,

		/** The date when the customer visited the first page */
		first_page_visited_at: FormControl<string | null | undefined>,

		/** The medium that referred the customer to the checkout */
		medium: FormControl<string | null | undefined>,

		/** The code that referred the customer to the checkout */
		referral_code: FormControl<string | null | undefined>,

		/** The source that referred the customer to the website */
		referral_source: FormControl<string | null | undefined>,

		/** The website that referred the customer to the checkout */
		referral_url: FormControl<string | null | undefined>,

		/** Where the checkout originated */
		source_name: FormControl<string | null | undefined>,

		/** User agent of the referred request to checkout */
		user_agent: FormControl<string | null | undefined>,
	}
	export function CreateTrafficSourceFormGroup() {
		return new FormGroup<TrafficSourceFormProperties>({
			campaign: new FormControl<string | null | undefined>(undefined),
			first_page_visited: new FormControl<string | null | undefined>(undefined),
			first_page_visited_at: new FormControl<string | null | undefined>(undefined),
			medium: new FormControl<string | null | undefined>(undefined),
			referral_code: new FormControl<string | null | undefined>(undefined),
			referral_source: new FormControl<string | null | undefined>(undefined),
			referral_url: new FormControl<string | null | undefined>(undefined),
			source_name: new FormControl<string | null | undefined>(undefined),
			user_agent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VariantEdit {
		variant?: VariantEditFields;
	}
	export interface VariantEditFormProperties {
	}
	export function CreateVariantEditFormGroup() {
		return new FormGroup<VariantEditFormProperties>({
		});

	}

	export interface VariantEditFields {

		/**
		 * Unique identifier of the product image to associate with this variant
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		image_id?: number | null;
		options?: Array<ProductOptionVariantEdit>;

		/**
		 * Price of the product
		 * Type: float
		 */
		price?: number | null;

		/** Stock Keeping Unit of the Product's Variant */
		sku?: string | null;

		/**
		 * Quantity in stock for the Product's Variant
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		stock?: number | null;

		/** True if the Product's Variant has unlimited stock */
		stock_unlimited?: boolean | null;
	}
	export interface VariantEditFieldsFormProperties {

		/**
		 * Unique identifier of the product image to associate with this variant
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		image_id: FormControl<number | null | undefined>,

		/**
		 * Price of the product
		 * Type: float
		 */
		price: FormControl<number | null | undefined>,

		/** Stock Keeping Unit of the Product's Variant */
		sku: FormControl<string | null | undefined>,

		/**
		 * Quantity in stock for the Product's Variant
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		stock: FormControl<number | null | undefined>,

		/** True if the Product's Variant has unlimited stock */
		stock_unlimited: FormControl<boolean | null | undefined>,
	}
	export function CreateVariantEditFieldsFormGroup() {
		return new FormGroup<VariantEditFieldsFormProperties>({
			image_id: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			stock: new FormControl<number | null | undefined>(undefined),
			stock_unlimited: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Type {

		/** Store code. */
		code?: string | null;
		stats?: StoreStats;
	}
	export interface TypeFormProperties {

		/** Store code. */
		code: FormControl<string | null | undefined>,
	}
	export function CreateTypeFormGroup() {
		return new FormGroup<TypeFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve all Categories.
		 * Get categories.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @return {Category} OK
		 */
		Categories_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, headersHandler?: () => HttpHeaders): Observable<Category> {
			return this.http.get<Category>(this.baseUri + 'categories.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new Category.
		 * Category's permalink is automatically generated from the given category's name.
		 * Post categories.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {CategoryEdit} requestBody Category parameters.
		 * @return {Category} OK
		 */
		Categories_jsonPostByLoginAndAuthtoken(login: string, authtoken: string, requestBody: CategoryEdit, headersHandler?: () => HttpHeaders): Observable<Category> {
			return this.http.post<Category>(this.baseUri + 'categories.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Count all Categories.
		 * Get categories/count.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @return {Count} OK
		 */
		CategoriesCount_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, headersHandler?: () => HttpHeaders): Observable<Count> {
			return this.http.get<Count>(this.baseUri + 'categories/count.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete an existing Category.
		 * Delete categories/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Category
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {string} OK
		 */
		Categories_id_jsonDeleteByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'categories/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve a single Category.
		 * Get categories/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Category
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Category} The selected Category.
		 */
		Categories_id_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Category> {
			return this.http.get<Category>(this.baseUri + 'categories/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modify an existing Category.
		 * Put categories/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Category
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {CategoryEdit} requestBody Category parameters.
		 * @return {Category} OK
		 */
		Categories_id_jsonPutByLoginAndAuthtoken(login: string, authtoken: string, id: number, requestBody: CategoryEdit, headersHandler?: () => HttpHeaders): Observable<Category> {
			return this.http.put<Category>(this.baseUri + 'categories/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve all Checkout Custom Fields.
		 * Get checkout_custom_fields.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} limit List restriction
		 *     Maximum: 200
		 * @param {string} page List page
		 * @return {Array<CheckoutCustomField>} An array of Checkout Custom Fields
		 */
		Checkout_custom_fields_jsonGetByLoginAndAuthtokenAndLimitAndPage(login: string, authtoken: string, limit: string | null | undefined, page: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<CheckoutCustomField>> {
			return this.http.get<Array<CheckoutCustomField>>(this.baseUri + 'checkout_custom_fields.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&page=' + (page == null ? '' : encodeURIComponent(page)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new CheckoutCustomField.
		 * Type values can be: input, selection, checkbox, date or text. Area values can be: contact, billing_shipping or other.
		 * Post checkout_custom_fields.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {CheckoutCustomFieldEdit} requestBody CheckoutCustomField parameters.
		 * @return {CheckoutCustomField} OK
		 */
		Checkout_custom_fields_jsonPostByLoginAndAuthtoken(login: string, authtoken: string, requestBody: CheckoutCustomFieldEdit, headersHandler?: () => HttpHeaders): Observable<CheckoutCustomField> {
			return this.http.post<CheckoutCustomField>(this.baseUri + 'checkout_custom_fields.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete an existing CheckoutCustomField.
		 * Delete checkout_custom_fields/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the CheckoutCustomField
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {string} OK
		 */
		Checkout_custom_fields_id_jsonDeleteByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'checkout_custom_fields/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve a single CheckoutCustomField.
		 * Get checkout_custom_fields/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the CheckoutCustomField
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {CheckoutCustomField} OK
		 */
		Checkout_custom_fields_id_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<CheckoutCustomField> {
			return this.http.get<CheckoutCustomField>(this.baseUri + 'checkout_custom_fields/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a CheckoutCustomField.
		 * Put checkout_custom_fields/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the CheckoutCustomField
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {CheckoutCustomFieldEdit} requestBody CheckoutCustomField parameters.
		 * @return {CheckoutCustomField} OK
		 */
		Checkout_custom_fields_id_jsonPutByLoginAndAuthtoken(login: string, authtoken: string, id: number, requestBody: CheckoutCustomFieldEdit, headersHandler?: () => HttpHeaders): Observable<CheckoutCustomField> {
			return this.http.put<CheckoutCustomField>(this.baseUri + 'checkout_custom_fields/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve all Countries.
		 * Get countries.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @return {Array<Country>} An array of Countries
		 */
		Countries_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, headersHandler?: () => HttpHeaders): Observable<Array<Country>> {
			return this.http.get<Array<Country>>(this.baseUri + 'countries.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a single Country information.
		 * Get countries/{country_code}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} country_code ISO3166 Country Code
		 * @return {Country} A Country information object
		 */
		Countries_country_code_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, country_code: string, headersHandler?: () => HttpHeaders): Observable<Country> {
			return this.http.get<Country>(this.baseUri + 'countries/' + (country_code == null ? '' : encodeURIComponent(country_code)) + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve all Regions from a single Country.
		 * Get countries/{country_code}/regions.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} country_code ISO3166 Country Code
		 * @return {Array<Region>} An array of Regions from a single Country
		 */
		Countries_country_codeRegions_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, country_code: string, headersHandler?: () => HttpHeaders): Observable<Array<Region>> {
			return this.http.get<Array<Region>>(this.baseUri + 'countries/' + (country_code == null ? '' : encodeURIComponent(country_code)) + '/regions.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a single Region information object.
		 * Get countries/{country_code}/regions/{region_code}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} country_code ISO3166 Country Code
		 * @param {string} region_code Region Code
		 * @return {Region} A Region information object
		 */
		Countries_country_codeRegions_region_code_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, country_code: string, region_code: string, headersHandler?: () => HttpHeaders): Observable<Region> {
			return this.http.get<Region>(this.baseUri + 'countries/' + (country_code == null ? '' : encodeURIComponent(country_code)) + '/regions/' + (region_code == null ? '' : encodeURIComponent(region_code)) + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve all Store's Custom Fields.
		 * Get custom_fields.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @return {Array<CustomField>} An array of Custom Fields
		 */
		Custom_fields_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, headersHandler?: () => HttpHeaders): Observable<Array<CustomField>> {
			return this.http.get<Array<CustomField>>(this.baseUri + 'custom_fields.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new Custom Field.
		 * Post custom_fields.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {CustomFieldEdit} requestBody Custom Field parameters.
		 * @return {CustomField} OK
		 */
		Custom_fields_jsonPostByLoginAndAuthtoken(login: string, authtoken: string, requestBody: CustomFieldEdit, headersHandler?: () => HttpHeaders): Observable<CustomField> {
			return this.http.post<CustomField>(this.baseUri + 'custom_fields.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete an existing CustomField.
		 * Delete custom_fields/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the CustomField
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {string} OK
		 */
		Custom_fields_id_jsonDeleteByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'custom_fields/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve a single CustomField.
		 * Get custom_fields/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the CustomField
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {CustomField} OK
		 */
		Custom_fields_id_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<CustomField> {
			return this.http.get<CustomField>(this.baseUri + 'custom_fields/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a CustomField.
		 * Put custom_fields/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the CustomField
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {CustomFieldEdit} requestBody CustomField parameters.
		 * @return {CustomField} OK
		 */
		Custom_fields_id_jsonPutByLoginAndAuthtoken(login: string, authtoken: string, id: number, requestBody: CustomFieldEdit, headersHandler?: () => HttpHeaders): Observable<CustomField> {
			return this.http.put<CustomField>(this.baseUri + 'custom_fields/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve all Store's Custom Fields.
		 * Get custom_fields/{id}/select_options.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the CustomField
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<CustomFieldSelectOption>} An array of Custom Fields Select Options
		 */
		Custom_fields_idSelect_options_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Array<CustomFieldSelectOption>> {
			return this.http.get<Array<CustomFieldSelectOption>>(this.baseUri + 'custom_fields/' + id + '/select_options.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new Custom Field Select Option.
		 * Post custom_fields/{id}/select_options.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} id Automatically added
		 * @param {CustomFieldSelectOptionEdit} requestBody Custom Field Select Option parameters.
		 * @return {CustomFieldSelectOption} OK
		 */
		Custom_fields_idSelect_options_jsonPostByLoginAndAuthtoken(login: string, authtoken: string, id: string, requestBody: CustomFieldSelectOptionEdit, headersHandler?: () => HttpHeaders): Observable<CustomFieldSelectOption> {
			return this.http.post<CustomFieldSelectOption>(this.baseUri + 'custom_fields/' + (id == null ? '' : encodeURIComponent(id)) + '/select_options.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete an existing CustomFieldSelectOption.
		 * Delete custom_fields/{id}/select_options/{custom_field_select_option_id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the CustomField
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} custom_field_select_option_id Id of the CustomFieldSelectOption
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {string} OK
		 */
		Custom_fields_idSelect_options_custom_field_select_option_id_jsonDeleteByLoginAndAuthtoken(login: string, authtoken: string, id: number, custom_field_select_option_id: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'custom_fields/' + id + '/select_options/' + custom_field_select_option_id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve a single SelectOption from a CustomField.
		 * Get custom_fields/{id}/select_options/{custom_field_select_option_id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the CustomField
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} custom_field_select_option_id Id of the CustomFieldSelectOption
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {CustomFieldSelectOption} OK
		 */
		Custom_fields_idSelect_options_custom_field_select_option_id_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, custom_field_select_option_id: number, headersHandler?: () => HttpHeaders): Observable<CustomFieldSelectOption> {
			return this.http.get<CustomFieldSelectOption>(this.baseUri + 'custom_fields/' + id + '/select_options/' + custom_field_select_option_id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a SelectOption from a CustomField.
		 * Put custom_fields/{id}/select_options/{custom_field_select_option_id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the CustomField
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} custom_field_select_option_id Id of the CustomFieldSelectOption
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {CustomFieldSelectOptionEdit} requestBody CustomFieldSelectOption parameters.
		 * @return {CustomFieldSelectOption} OK
		 */
		Custom_fields_idSelect_options_custom_field_select_option_id_jsonPutByLoginAndAuthtoken(login: string, authtoken: string, id: number, custom_field_select_option_id: number, requestBody: CustomFieldSelectOptionEdit, headersHandler?: () => HttpHeaders): Observable<CustomFieldSelectOption> {
			return this.http.put<CustomFieldSelectOption>(this.baseUri + 'custom_fields/' + id + '/select_options/' + custom_field_select_option_id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve all Customer Categories.
		 * Get customer_categories.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} limit List restriction
		 *     Maximum: 200
		 * @param {string} page List page
		 * @return {Array<CustomerCategory>} An array of Customer Categories
		 */
		Customer_categories_jsonGetByLoginAndAuthtokenAndLimitAndPage(login: string, authtoken: string, limit: string | null | undefined, page: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<CustomerCategory>> {
			return this.http.get<Array<CustomerCategory>>(this.baseUri + 'customer_categories.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&page=' + (page == null ? '' : encodeURIComponent(page)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new CustomerCategory.
		 * Post customer_categories.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {CustomerCategoryEdit} requestBody CustomerCategory parameters.
		 * @return {CustomerCategory} OK
		 */
		Customer_categories_jsonPostByLoginAndAuthtoken(login: string, authtoken: string, requestBody: CustomerCategoryEdit, headersHandler?: () => HttpHeaders): Observable<CustomerCategory> {
			return this.http.post<CustomerCategory>(this.baseUri + 'customer_categories.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete an existing CustomerCategory.
		 * Delete customer_categories/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the CustomerCategory
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {string} OK
		 */
		Customer_categories_id_jsonDeleteByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'customer_categories/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve a single CustomerCategory.
		 * Get customer_categories/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the CustomerCategory
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {CustomerCategory} OK
		 */
		Customer_categories_id_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<CustomerCategory> {
			return this.http.get<CustomerCategory>(this.baseUri + 'customer_categories/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a CustomerCategory.
		 * Put customer_categories/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the CustomerCategory
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {CustomerCategoryEdit} requestBody CustomerCategory parameters.
		 * @return {CustomerCategory} OK
		 */
		Customer_categories_id_jsonPutByLoginAndAuthtoken(login: string, authtoken: string, id: number, requestBody: CustomerCategoryEdit, headersHandler?: () => HttpHeaders): Observable<CustomerCategory> {
			return this.http.put<CustomerCategory>(this.baseUri + 'customer_categories/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete Customers from an existing CustomerCategory.
		 * Delete customer_categories/{id}/customers.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the CustomerCategory
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {string} OK
		 */
		Customer_categories_idCustomers_jsonDeleteByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'customer_categories/' + id + '/customers.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieves the customers in a CustomerCategory.
		 * Get customer_categories/{id}/customers.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the CustomerCategory
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Customer>} OK
		 */
		Customer_categories_idCustomers_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Array<Customer>> {
			return this.http.get<Array<Customer>>(this.baseUri + 'customer_categories/' + id + '/customers.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Adds Customers to a CustomerCategory.
		 * Post customer_categories/{id}/customers.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the CustomerCategory
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {CustomersToCustomerCategory} requestBody Customer parameters.
		 * @return {Array<Customer>} Array of Customers in the Customer Category
		 */
		Customer_categories_idCustomers_jsonPostByLoginAndAuthtoken(login: string, authtoken: string, id: number, requestBody: CustomersToCustomerCategory, headersHandler?: () => HttpHeaders): Observable<Array<Customer>> {
			return this.http.post<Array<Customer>>(this.baseUri + 'customer_categories/' + id + '/customers.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve all Customers.
		 * Get customers.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} limit List restriction
		 *     Maximum: 200
		 * @param {string} page List page
		 * @return {Array<Customer>} An array of Orders
		 */
		Customers_jsonGetByLoginAndAuthtokenAndLimitAndPage(login: string, authtoken: string, limit: string | null | undefined, page: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Customer>> {
			return this.http.get<Array<Customer>>(this.baseUri + 'customers.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&page=' + (page == null ? '' : encodeURIComponent(page)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new Customer.
		 * Post customers.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {CustomerWithPasswordNoID} requestBody Customer parameters.
		 * @return {Customer} OK
		 */
		Customers_jsonPostByLoginAndAuthtoken(login: string, authtoken: string, requestBody: CustomerWithPasswordNoID, headersHandler?: () => HttpHeaders): Observable<Customer> {
			return this.http.post<Customer>(this.baseUri + 'customers.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Count all Customers.
		 * Get customers/count.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @return {Count} OK
		 */
		CustomersCount_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, headersHandler?: () => HttpHeaders): Observable<Count> {
			return this.http.get<Count>(this.baseUri + 'customers/count.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a single Customer by email.
		 * Get customers/email/{email}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} email Email of the Customer
		 * @return {Customer} OK
		 */
		CustomersEmail_email_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, email: string, headersHandler?: () => HttpHeaders): Observable<Customer> {
			return this.http.get<Customer>(this.baseUri + 'customers/email/' + (email == null ? '' : encodeURIComponent(email)) + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete an existing Customer.
		 * Delete customers/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Customer
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {string} OK
		 */
		Customers_id_jsonDeleteByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'customers/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve a single Customer by id.
		 * Get customers/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Customer
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Customer} OK
		 */
		Customers_id_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Customer> {
			return this.http.get<Customer>(this.baseUri + 'customers/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a new Customer.
		 * Put customers/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Customer
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {CustomerWithPasswordNoID} requestBody Customer parameters.
		 * @return {Customer} OK
		 */
		Customers_id_jsonPutByLoginAndAuthtoken(login: string, authtoken: string, id: number, requestBody: CustomerWithPasswordNoID, headersHandler?: () => HttpHeaders): Observable<Customer> {
			return this.http.put<Customer>(this.baseUri + 'customers/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves the Customer Additional Field of a Customer.
		 * Get customers/{id}/fields
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Customer
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<CustomerAdditionalField>} OK
		 */
		Customers_idFieldsGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Array<CustomerAdditionalField>> {
			return this.http.get<Array<CustomerAdditionalField>>(this.baseUri + 'customers/' + id + '/fields?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Adds Customer Additional Fields to a Customer.
		 * Post customers/{id}/fields
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Customer
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {CustomerAdditionalFieldEdit} requestBody Customer Additional Field parameters.
		 * @return {CustomerAdditionalField} OK
		 */
		Customers_idFieldsPostByLoginAndAuthtoken(login: string, authtoken: string, id: number, requestBody: CustomerAdditionalFieldEdit, headersHandler?: () => HttpHeaders): Observable<CustomerAdditionalField> {
			return this.http.post<CustomerAdditionalField>(this.baseUri + 'customers/' + id + '/fields?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a Customer Additional Field.
		 * Delete customers/{id}/fields/{field_id}
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Customer
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} field_id Id of the Customer Additional Field
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {string} OK
		 */
		Customers_idFields_field_idDeleteByLoginAndAuthtoken(login: string, authtoken: string, id: number, field_id: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'customers/' + id + '/fields/' + field_id + '?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve a single Customer Additional Field.
		 * Get customers/{id}/fields/{field_id}
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Customer
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} field_id Id of the Customer Additional Field
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {CustomerAdditionalField} OK
		 */
		Customers_idFields_field_idGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, field_id: number, headersHandler?: () => HttpHeaders): Observable<CustomerAdditionalField> {
			return this.http.get<CustomerAdditionalField>(this.baseUri + 'customers/' + id + '/fields/' + field_id + '?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a Customer Additional Field.
		 * Put customers/{id}/fields/{field_id}
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Customer
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} field_id Id of the Customer Additional Field
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {CustomerAdditionalFieldEdit} requestBody Customer Additional Field parameters.
		 * @return {CustomerAdditionalField} OK
		 */
		Customers_idFields_field_idPutByLoginAndAuthtoken(login: string, authtoken: string, id: number, field_id: number, requestBody: CustomerAdditionalFieldEdit, headersHandler?: () => HttpHeaders): Observable<CustomerAdditionalField> {
			return this.http.put<CustomerAdditionalField>(this.baseUri + 'customers/' + id + '/fields/' + field_id + '?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve all Fulfillments.
		 * Get fulfillments.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} limit List restriction
		 *     Maximum: 200
		 * @param {string} page List page
		 * @return {Array<Fulfillment>} An array of Fulfillments
		 */
		Fulfillments_jsonGetByLoginAndAuthtokenAndLimitAndPage(login: string, authtoken: string, limit: string | null | undefined, page: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Fulfillment>> {
			return this.http.get<Array<Fulfillment>>(this.baseUri + 'fulfillments.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&page=' + (page == null ? '' : encodeURIComponent(page)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Count all Fulfillments.
		 * Get fulfillments/count.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @return {Count} OK
		 */
		FulfillmentsCount_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, headersHandler?: () => HttpHeaders): Observable<Count> {
			return this.http.get<Count>(this.baseUri + 'fulfillments/count.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a single Fulfillment.
		 * Get fulfillments/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Fulfillment
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Fulfillment} OK
		 */
		Fulfillments_id_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Fulfillment> {
			return this.http.get<Fulfillment>(this.baseUri + 'fulfillments/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve all Hooks.
		 * Get hooks.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} limit List restriction
		 *     Maximum: 200
		 * @param {string} page List page
		 * @return {Array<Hook>} An array of Hooks
		 */
		Hooks_jsonGetByLoginAndAuthtokenAndLimitAndPage(login: string, authtoken: string, limit: string | null | undefined, page: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Hook>> {
			return this.http.get<Array<Hook>>(this.baseUri + 'hooks.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&page=' + (page == null ? '' : encodeURIComponent(page)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new Hook.
		 * Post hooks.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {HookEdit} requestBody Hook parameters.
		 * @return {Hook} OK
		 */
		Hooks_jsonPostByLoginAndAuthtoken(login: string, authtoken: string, requestBody: HookEdit, headersHandler?: () => HttpHeaders): Observable<Hook> {
			return this.http.post<Hook>(this.baseUri + 'hooks.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete an existing Hook.
		 * Delete hooks/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Hook
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {string} OK
		 */
		Hooks_id_jsonDeleteByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'hooks/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve a single Hook.
		 * Get hooks/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Hook
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Hook} OK
		 */
		Hooks_id_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Hook> {
			return this.http.get<Hook>(this.baseUri + 'hooks/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a Hook.
		 * Put hooks/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Hook
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {HookEdit} requestBody Hook parameters.
		 * @return {Hook} OK
		 */
		Hooks_id_jsonPutByLoginAndAuthtoken(login: string, authtoken: string, id: number, requestBody: HookEdit, headersHandler?: () => HttpHeaders): Observable<Hook> {
			return this.http.put<Hook>(this.baseUri + 'hooks/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve all the Store's JSApps.
		 * Get jsapps.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @return {App} OK
		 */
		Jsapps_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, headersHandler?: () => HttpHeaders): Observable<App> {
			return this.http.get<App>(this.baseUri + 'jsapps.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a Store JSApp.
		 * Post jsapps.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {JSAppEdit} requestBody JSApp parameters to create
		 * @return {JSApp} OK
		 */
		Jsapps_jsonPostByLoginAndAuthtoken(login: string, authtoken: string, requestBody: JSAppEdit, headersHandler?: () => HttpHeaders): Observable<JSApp> {
			return this.http.post<JSApp>(this.baseUri + 'jsapps.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete an existing JSApp.
		 * Delete jsapps/{code}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} code Code of the App
		 * @return {string} OK
		 */
		Jsapps_code_jsonDeleteByLoginAndAuthtoken(login: string, authtoken: string, code: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'jsapps/' + (code == null ? '' : encodeURIComponent(code)) + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve a JSApp.
		 * Get jsapps/{code}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} code Code of the App
		 * @return {JSApp} OK
		 */
		Jsapps_code_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, code: string, headersHandler?: () => HttpHeaders): Observable<JSApp> {
			return this.http.get<JSApp>(this.baseUri + 'jsapps/' + (code == null ? '' : encodeURIComponent(code)) + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve the Fulfillments associated with the Order.
		 * Get order/{id}/fulfillments.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Order
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Fulfillment>} OK
		 */
		Order_idFulfillments_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Array<Fulfillment>> {
			return this.http.get<Array<Fulfillment>>(this.baseUri + 'order/' + id + '/fulfillments.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve all Orders.
		 * Get orders.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} limit List restriction
		 *     Maximum: 200
		 * @param {string} page List page
		 * @return {Array<Order>} An array of Orders
		 */
		Orders_jsonGetByLoginAndAuthtokenAndLimitAndPage(login: string, authtoken: string, limit: string | null | undefined, page: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Order>> {
			return this.http.get<Array<Order>>(this.baseUri + 'orders.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&page=' + (page == null ? '' : encodeURIComponent(page)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new Order.
		 * Orders created externally keep the given order product's values (bypassing internal promotion or product amounts).
		 * Post orders.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {OrderCreate} requestBody Order parameters.
		 * @return {Order} OK
		 */
		Orders_jsonPostByLoginAndAuthtoken(login: string, authtoken: string, requestBody: OrderCreate, headersHandler?: () => HttpHeaders): Observable<Order> {
			return this.http.post<Order>(this.baseUri + 'orders.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve orders filtered by Order Id.
		 * For example the GET /orders/after/5000 will return Order 5001, 5002, 5003, etc.
		 * Get orders/after/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Order
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Order} OK
		 */
		OrdersAfter_id_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Order> {
			return this.http.get<Order>(this.baseUri + 'orders/after/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Count all Orders.
		 * Get orders/count.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @return {Count} OK
		 */
		OrdersCount_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, headersHandler?: () => HttpHeaders): Observable<Count> {
			return this.http.get<Count>(this.baseUri + 'orders/count.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve orders filtered by status.
		 * Get orders/status/{status}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {OrderCreateFieldsStatus} status Status of the Order used as filter
		 * @return {Array<Order>} OK
		 */
		OrdersStatus_status_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, status: OrderCreateFieldsStatus, headersHandler?: () => HttpHeaders): Observable<Array<Order>> {
			return this.http.get<Array<Order>>(this.baseUri + 'orders/status/' + status + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a single Order.
		 * Get orders/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Order
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Order} OK
		 */
		Orders_id_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Order> {
			return this.http.get<Order>(this.baseUri + 'orders/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modify an existing Order.
		 * Only `status`, `shipment_status`, `tracking_number`, `tracking_company`, `tracking_url`, `additional_information` and `additional_fields` are available for update. An email is send if `shipment_status` changes.
		 * Put orders/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Order
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {OrderEdit} requestBody Order parameters to change
		 * @return {Order} OK
		 */
		Orders_id_jsonPutByLoginAndAuthtoken(login: string, authtoken: string, id: number, requestBody: OrderEdit, headersHandler?: () => HttpHeaders): Observable<Order> {
			return this.http.put<Order>(this.baseUri + 'orders/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve all Order History.
		 * Get orders/{id}/history.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Order
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<OrderHistory>} An array with Order History
		 */
		Orders_idHistory_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Array<OrderHistory>> {
			return this.http.get<Array<OrderHistory>>(this.baseUri + 'orders/' + id + '/history.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new Order History Entry.
		 * Post orders/{id}/history.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the OrderHistory
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {OrderHistoryEdit} requestBody Order History parameters.
		 * @return {OrderHistory} OK
		 */
		Orders_idHistory_jsonPostByLoginAndAuthtoken(login: string, authtoken: string, id: number, requestBody: OrderHistoryEdit, headersHandler?: () => HttpHeaders): Observable<OrderHistory> {
			return this.http.post<OrderHistory>(this.baseUri + 'orders/' + id + '/history.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve all Pages.
		 * Get pages.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} limit List restriction
		 *     Maximum: 200
		 * @param {string} page List page
		 * @return {Array<Page>} An array of Pages
		 */
		Pages_jsonGetByLoginAndAuthtokenAndLimitAndPage(login: string, authtoken: string, limit: string | null | undefined, page: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Page>> {
			return this.http.get<Array<Page>>(this.baseUri + 'pages.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&page=' + (page == null ? '' : encodeURIComponent(page)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new Page.
		 * Post pages.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {PageModify} requestBody Page parameters.
		 * @return {Page} OK
		 */
		Pages_jsonPostByLoginAndAuthtoken(login: string, authtoken: string, requestBody: PageModify, headersHandler?: () => HttpHeaders): Observable<Page> {
			return this.http.post<Page>(this.baseUri + 'pages.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Count all Pages.
		 * Get pages/count.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @return {Count} Total number of pages
		 */
		PagesCount_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, headersHandler?: () => HttpHeaders): Observable<Count> {
			return this.http.get<Count>(this.baseUri + 'pages/count.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete an existing Page.
		 * Delete pages/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {string} OK
		 */
		Pages_id_jsonDeleteByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'pages/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve a single Page by id.
		 * Get pages/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Page} OK
		 */
		Pages_id_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Page> {
			return this.http.get<Page>(this.baseUri + 'pages/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a Page.
		 * Put pages/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {PageModify} requestBody Page parameters.
		 * @return {Page} OK
		 */
		Pages_id_jsonPutByLoginAndAuthtoken(login: string, authtoken: string, id: number, requestBody: PageModify, headersHandler?: () => HttpHeaders): Observable<Page> {
			return this.http.put<Page>(this.baseUri + 'pages/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve statistics.
		 * Get partners/stores.json
		 * @param {string} partner_code Partner code.
		 * @param {string} auth_token Partner authentication token.
		 * @param {string} page List page
		 * @param {string} from Statistics start date. Should be in format 'Y-m-d'.
		 * @param {string} to Statistics end date. Should be in format 'Y-m-d'.
		 * @return {Array<Type>} Array of partner stores statistics.
		 */
		PartnersStores_jsonGetByPartner_codeAndAuth_tokenAndPageAndFromAndTo(partner_code: string, auth_token: string, page: string | null | undefined, from: string, to: string, headersHandler?: () => HttpHeaders): Observable<Array<Type>> {
			return this.http.get<Array<Type>>(this.baseUri + 'partners/stores.json?partner_code=' + (partner_code == null ? '' : encodeURIComponent(partner_code)) + '&auth_token=' + (auth_token == null ? '' : encodeURIComponent(auth_token)) + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&from=' + (from == null ? '' : encodeURIComponent(from)) + '&to=' + (to == null ? '' : encodeURIComponent(to)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve all Store's Payment Methods.
		 * Get payment_methods.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @return {Array<PaymentMethod>} An array of Payment Methods
		 */
		Payment_methods_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, headersHandler?: () => HttpHeaders): Observable<Array<PaymentMethod>> {
			return this.http.get<Array<PaymentMethod>>(this.baseUri + 'payment_methods.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a single Payment Method.
		 * Get payment_methods/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Payment Method
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {PaymentMethod} OK
		 */
		Payment_methods_id_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<PaymentMethod> {
			return this.http.get<PaymentMethod>(this.baseUri + 'payment_methods/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve all Products.
		 * Get products.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} limit List restriction
		 *     Maximum: 200
		 * @param {string} page List page
		 * @param {string} locale Locale code of the translation
		 * @return {Array<Product>} OK
		 */
		Products_jsonGetByLoginAndAuthtokenAndLimitAndPageAndLocale(login: string, authtoken: string, limit: string | null | undefined, page: string | null | undefined, locale: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Product>> {
			return this.http.get<Array<Product>>(this.baseUri + 'products.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new Product.
		 * Post products.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} locale Locale code of the translation
		 * @param {ProductEdit} requestBody Product parameters.
		 * @return {Product} OK
		 */
		Products_jsonPostByLoginAndAuthtokenAndLocale(login: string, authtoken: string, locale: string | null | undefined, requestBody: ProductEdit, headersHandler?: () => HttpHeaders): Observable<Product> {
			return this.http.post<Product>(this.baseUri + 'products.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieves Products after the given id.
		 * Get products/after/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} locale Locale code of the translation
		 * @return {Array<Product>} OK
		 */
		ProductsAfter_id_jsonGetByLoginAndAuthtokenAndLocale(login: string, authtoken: string, id: number, locale: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Product>> {
			return this.http.get<Array<Product>>(this.baseUri + 'products/after/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve Products filtered by category.
		 * Get products/category/{category_id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} locale Locale code of the translation
		 * @param {number} category_id Category ID of the Product used as filter
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Product>} OK
		 */
		ProductsCategory_category_id_jsonGetByLoginAndAuthtokenAndLocale(login: string, authtoken: string, locale: string | null | undefined, category_id: number, headersHandler?: () => HttpHeaders): Observable<Array<Product>> {
			return this.http.get<Array<Product>>(this.baseUri + 'products/category/' + category_id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Count Products filtered by category.
		 * Get products/category/{category_id}/count.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} locale Locale code of the translation
		 * @param {number} category_id Category ID of the Product used as filter
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Count} OK
		 */
		ProductsCategory_category_idCount_jsonGetByLoginAndAuthtokenAndLocale(login: string, authtoken: string, locale: string | null | undefined, category_id: number, headersHandler?: () => HttpHeaders): Observable<Count> {
			return this.http.get<Count>(this.baseUri + 'products/category/' + category_id + '/count.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Count all Products.
		 * Get products/count.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @return {Count} OK
		 */
		ProductsCount_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, headersHandler?: () => HttpHeaders): Observable<Count> {
			return this.http.get<Count>(this.baseUri + 'products/count.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a Product List from a query.
		 * Endpoint example:
		 * ```text
		 * https://api.jumpseller.com/v1/products/search.json?login=XXXXXX&authtoken=XXXXX&query=test&fields=name,description
		 * ```
		 * Get products/search.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} locale Locale code of the translation
		 * @param {string} query Text to query for the Product
		 * @param {ProductsSearch_jsonGetByLoginAndAuthtokenAndLocaleAndQueryAndFieldsFields} fields Comma separated values of the fields to query for the Product
		 * @return {Array<Product>} An array of products
		 */
		ProductsSearch_jsonGetByLoginAndAuthtokenAndLocaleAndQueryAndFields(login: string, authtoken: string, locale: string | null | undefined, query: string, fields: ProductsSearch_jsonGetByLoginAndAuthtokenAndLocaleAndQueryAndFieldsFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Product>> {
			return this.http.get<Array<Product>>(this.baseUri + 'products/search.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve Products filtered by status.
		 * Get products/status/{status}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} locale Locale code of the translation
		 * @param {ProductFieldsStatus} status Status of the Product used as filter
		 * @return {Array<Product>} OK
		 */
		ProductsStatus_status_jsonGetByLoginAndAuthtokenAndLocale(login: string, authtoken: string, locale: string | null | undefined, status: ProductFieldsStatus, headersHandler?: () => HttpHeaders): Observable<Array<Product>> {
			return this.http.get<Array<Product>>(this.baseUri + 'products/status/' + status + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Count Products filtered by status.
		 * Get products/status/{status}/count.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} locale Locale code of the translation
		 * @param {ProductFieldsStatus} status Status of the Product used as filter
		 * @return {Count} OK
		 */
		ProductsStatus_statusCount_jsonGetByLoginAndAuthtokenAndLocale(login: string, authtoken: string, locale: string | null | undefined, status: ProductFieldsStatus, headersHandler?: () => HttpHeaders): Observable<Count> {
			return this.http.get<Count>(this.baseUri + 'products/status/' + status + '/count.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete an existing Product.
		 * Delete products/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {string} OK
		 */
		Products_id_jsonDeleteByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'products/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve a single Product.
		 * Get products/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} locale Locale code of the translation
		 * @param {number} id ID of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Product} OK
		 */
		Products_id_jsonGetByLoginAndAuthtokenAndLocale(login: string, authtoken: string, locale: string | null | undefined, id: number, headersHandler?: () => HttpHeaders): Observable<Product> {
			return this.http.get<Product>(this.baseUri + 'products/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modify an existing Product.
		 * Put products/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} locale Locale code of the translation
		 * @param {ProductEdit} requestBody Product parameters to change
		 * @return {Product} OK
		 */
		Products_id_jsonPutByLoginAndAuthtokenAndLocale(login: string, authtoken: string, id: number, locale: string | null | undefined, requestBody: ProductEdit, headersHandler?: () => HttpHeaders): Observable<Product> {
			return this.http.put<Product>(this.baseUri + 'products/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve all Product Attachments.
		 * Get products/{id}/attachments.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id ID of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Attachment>} OK
		 */
		Products_idAttachments_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Array<Attachment>> {
			return this.http.get<Array<Attachment>>(this.baseUri + 'products/' + id + '/attachments.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new Product Attachment.
		 * Post products/{id}/attachments.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {AttachmentEdit} requestBody Product Attachment parameters.
		 * @return {Attachment} OK
		 */
		Products_idAttachments_jsonPostByLoginAndAuthtoken(login: string, authtoken: string, id: number, requestBody: AttachmentEdit, headersHandler?: () => HttpHeaders): Observable<Attachment> {
			return this.http.post<Attachment>(this.baseUri + 'products/' + id + '/attachments.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Count all Product Attachments.
		 * Get products/{id}/attachments/count.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id ID of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Count} OK
		 */
		Products_idAttachmentsCount_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Count> {
			return this.http.get<Count>(this.baseUri + 'products/' + id + '/attachments/count.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete a Product Attachment.
		 * Delete products/{id}/attachments/{attachment_id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} attachment_id Id of the Product Attachment
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {string} OK
		 */
		Products_idAttachments_attachment_id_jsonDeleteByLoginAndAuthtoken(login: string, authtoken: string, id: number, attachment_id: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'products/' + id + '/attachments/' + attachment_id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve a single Product Attachment.
		 * Get products/{id}/attachments/{attachment_id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} attachment_id Id of the Product Attachment
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Attachment} OK
		 */
		Products_idAttachments_attachment_id_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, attachment_id: number, headersHandler?: () => HttpHeaders): Observable<Attachment> {
			return this.http.get<Attachment>(this.baseUri + 'products/' + id + '/attachments/' + attachment_id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve all Product DigitalProducts.
		 * Get products/{id}/digital_products.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id ID of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<DigitalProduct>} OK
		 */
		Products_idDigital_products_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Array<DigitalProduct>> {
			return this.http.get<Array<DigitalProduct>>(this.baseUri + 'products/' + id + '/digital_products.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new Product DigitalProduct.
		 * Post products/{id}/digital_products.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {DigitalProductEdit} requestBody Product DigitalProduct parameters.
		 * @return {DigitalProduct} OK
		 */
		Products_idDigital_products_jsonPostByLoginAndAuthtoken(login: string, authtoken: string, id: number, requestBody: DigitalProductEdit, headersHandler?: () => HttpHeaders): Observable<DigitalProduct> {
			return this.http.post<DigitalProduct>(this.baseUri + 'products/' + id + '/digital_products.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Count all Product DigitalProducts.
		 * Get products/{id}/digital_products/count.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id ID of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Count} OK
		 */
		Products_idDigital_productsCount_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Count> {
			return this.http.get<Count>(this.baseUri + 'products/' + id + '/digital_products/count.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete a Product DigitalProduct.
		 * Delete products/{id}/digital_products/{digital_product_id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} digital_product_id Id of the Product DigitalProduct
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {string} OK
		 */
		Products_idDigital_products_digital_product_id_jsonDeleteByLoginAndAuthtoken(login: string, authtoken: string, id: number, digital_product_id: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'products/' + id + '/digital_products/' + digital_product_id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve a single Product DigitalProduct.
		 * Get products/{id}/digital_products/{digital_product_id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} digital_product_id Id of the Product DigitalProduct
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {DigitalProduct} OK
		 */
		Products_idDigital_products_digital_product_id_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, digital_product_id: number, headersHandler?: () => HttpHeaders): Observable<DigitalProduct> {
			return this.http.get<DigitalProduct>(this.baseUri + 'products/' + id + '/digital_products/' + digital_product_id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve all Product Custom Fields
		 * Get products/{id}/fields.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<ProductCustomField>} OK
		 */
		Products_idFields_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Array<ProductCustomField>> {
			return this.http.get<Array<ProductCustomField>>(this.baseUri + 'products/' + id + '/fields.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add an existing Custom Field to a Product.
		 * Post products/{id}/fields.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {AddProductCustomField} requestBody Product Custom Field parameters.
		 * @return {Product} OK
		 */
		Products_idFields_jsonPostByLoginAndAuthtoken(login: string, authtoken: string, id: number, requestBody: AddProductCustomField, headersHandler?: () => HttpHeaders): Observable<Product> {
			return this.http.post<Product>(this.baseUri + 'products/' + id + '/fields.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Count all Product Custom Fields.
		 * Get products/{id}/fields/count.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id ID of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Count} OK
		 */
		Products_idFieldsCount_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Count> {
			return this.http.get<Count>(this.baseUri + 'products/' + id + '/fields/count.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve all Product Images.
		 * Get products/{id}/images.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id ID of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Image>} OK
		 */
		Products_idImages_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Array<Image>> {
			return this.http.get<Array<Image>>(this.baseUri + 'products/' + id + '/images.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new Product Image.
		 * Post products/{id}/images.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ImageEdit} requestBody Product Image parameters.
		 * @return {Image} OK
		 */
		Products_idImages_jsonPostByLoginAndAuthtoken(login: string, authtoken: string, id: number, requestBody: ImageEdit, headersHandler?: () => HttpHeaders): Observable<Image> {
			return this.http.post<Image>(this.baseUri + 'products/' + id + '/images.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Count all Product Images.
		 * Get products/{id}/images/count.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id ID of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Count} OK
		 */
		Products_idImagesCount_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Count> {
			return this.http.get<Count>(this.baseUri + 'products/' + id + '/images/count.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete a Product Image.
		 * Delete products/{id}/images/{image_id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} image_id Id of the Product Image
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {string} OK
		 */
		Products_idImages_image_id_jsonDeleteByLoginAndAuthtoken(login: string, authtoken: string, id: number, image_id: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'products/' + id + '/images/' + image_id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve a single Product Image.
		 * Get products/{id}/images/{image_id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} image_id Id of the Product Image
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Image} OK
		 */
		Products_idImages_image_id_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, image_id: number, headersHandler?: () => HttpHeaders): Observable<Image> {
			return this.http.get<Image>(this.baseUri + 'products/' + id + '/images/' + image_id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve all Product Options.
		 * Get products/{id}/options.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id ID of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<ProductOption>} OK
		 */
		Products_idOptions_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Array<ProductOption>> {
			return this.http.get<Array<ProductOption>>(this.baseUri + 'products/' + id + '/options.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new Product Option.
		 * Post products/{id}/options.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ProductOptionEdit} requestBody Product Option parameters.
		 * @return {ProductOption} OK
		 */
		Products_idOptions_jsonPostByLoginAndAuthtoken(login: string, authtoken: string, id: number, requestBody: ProductOptionEdit, headersHandler?: () => HttpHeaders): Observable<ProductOption> {
			return this.http.post<ProductOption>(this.baseUri + 'products/' + id + '/options.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Count all Product Options.
		 * Get products/{id}/options/count.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id ID of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Count} OK
		 */
		Products_idOptionsCount_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Count> {
			return this.http.get<Count>(this.baseUri + 'products/' + id + '/options/count.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete a Product Option.
		 * Delete products/{id}/options/{option_id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} option_id Id of the Product Option
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {string} OK
		 */
		Products_idOptions_option_id_jsonDeleteByLoginAndAuthtoken(login: string, authtoken: string, id: number, option_id: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'products/' + id + '/options/' + option_id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve a single Product Option.
		 * Get products/{id}/options/{option_id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} option_id Id of the Product Option
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ProductOption} OK
		 */
		Products_idOptions_option_id_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, option_id: number, headersHandler?: () => HttpHeaders): Observable<ProductOption> {
			return this.http.get<ProductOption>(this.baseUri + 'products/' + id + '/options/' + option_id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modify an existing Product Option.
		 * Put products/{id}/options/{option_id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} option_id Id of the Product Option
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ProductOptionEdit} requestBody Product option parameters to change
		 * @return {ProductOption} OK
		 */
		Products_idOptions_option_id_jsonPutByLoginAndAuthtoken(login: string, authtoken: string, id: number, option_id: number, requestBody: ProductOptionEdit, headersHandler?: () => HttpHeaders): Observable<ProductOption> {
			return this.http.put<ProductOption>(this.baseUri + 'products/' + id + '/options/' + option_id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve all Product Option Values.
		 * Get products/{id}/options/{option_id}/values.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id ID of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} option_id ID of the Product Option
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<ProductOptionValue>} OK
		 */
		Products_idOptions_option_idValues_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, option_id: number, headersHandler?: () => HttpHeaders): Observable<Array<ProductOptionValue>> {
			return this.http.get<Array<ProductOptionValue>>(this.baseUri + 'products/' + id + '/options/' + option_id + '/values.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new Product Option Value.
		 * Post products/{id}/options/{option_id}/values.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} option_id Id of the Product Option
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ProductOptionValueEdit} requestBody Product Option Value parameters.
		 * @return {ProductOptionValue} OK
		 */
		Products_idOptions_option_idValues_jsonPostByLoginAndAuthtoken(login: string, authtoken: string, id: number, option_id: number, requestBody: ProductOptionValueEdit, headersHandler?: () => HttpHeaders): Observable<ProductOptionValue> {
			return this.http.post<ProductOptionValue>(this.baseUri + 'products/' + id + '/options/' + option_id + '/values.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Count all Product Option Values.
		 * Get products/{id}/options/{option_id}/values/count.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id ID of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} option_id ID of the Product Option
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Count} OK
		 */
		Products_idOptions_option_idValuesCount_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, option_id: number, headersHandler?: () => HttpHeaders): Observable<Count> {
			return this.http.get<Count>(this.baseUri + 'products/' + id + '/options/' + option_id + '/values/count.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete a Product Option Value.
		 * Delete products/{id}/options/{option_id}/values/{value_id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} option_id Id of the Product Option
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} value_id ID of the Product Option Value
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {string} OK
		 */
		Products_idOptions_option_idValues_value_id_jsonDeleteByLoginAndAuthtoken(login: string, authtoken: string, id: number, option_id: number, value_id: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'products/' + id + '/options/' + option_id + '/values/' + value_id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve a single Product Option Value.
		 * Get products/{id}/options/{option_id}/values/{value_id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} option_id Id of the Product Option
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} value_id ID of the Product Option Value
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ProductOptionValue} OK
		 */
		Products_idOptions_option_idValues_value_id_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, option_id: number, value_id: number, headersHandler?: () => HttpHeaders): Observable<ProductOptionValue> {
			return this.http.get<ProductOptionValue>(this.baseUri + 'products/' + id + '/options/' + option_id + '/values/' + value_id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modify an existing Product Option Value.
		 * Put products/{id}/options/{option_id}/values/{value_id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} option_id Id of the Product Option
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} value_id Id of the Product Option Value
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ProductOptionValueEdit} requestBody Product option value parameters to change
		 * @return {ProductOptionValue} OK
		 */
		Products_idOptions_option_idValues_value_id_jsonPutByLoginAndAuthtoken(login: string, authtoken: string, id: number, option_id: number, value_id: number, requestBody: ProductOptionValueEdit, headersHandler?: () => HttpHeaders): Observable<ProductOptionValue> {
			return this.http.put<ProductOptionValue>(this.baseUri + 'products/' + id + '/options/' + option_id + '/values/' + value_id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve all Product Variants.
		 * Get products/{id}/variants.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id ID of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Variant>} OK
		 */
		Products_idVariants_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Array<Variant>> {
			return this.http.get<Array<Variant>>(this.baseUri + 'products/' + id + '/variants.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new Product Variant.
		 * Post products/{id}/variants.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {VariantEdit} requestBody Product Variant parameters.
		 * @return {Variant} OK
		 */
		Products_idVariants_jsonPostByLoginAndAuthtoken(login: string, authtoken: string, id: number, requestBody: VariantEdit, headersHandler?: () => HttpHeaders): Observable<Variant> {
			return this.http.post<Variant>(this.baseUri + 'products/' + id + '/variants.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Count all Product Variants.
		 * Get products/{id}/variants/count.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id ID of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Count} OK
		 */
		Products_idVariantsCount_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Count> {
			return this.http.get<Count>(this.baseUri + 'products/' + id + '/variants/count.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a single Product Variant.
		 * Get products/{id}/variants/{variant_id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} variant_id Id of the Product Variant
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Variant} OK
		 */
		Products_idVariants_variant_id_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, variant_id: number, headersHandler?: () => HttpHeaders): Observable<Variant> {
			return this.http.get<Variant>(this.baseUri + 'products/' + id + '/variants/' + variant_id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Modify an existing Product Variant.
		 * Put products/{id}/variants/{variant_id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Product
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} variant_id Id of the Product Variant
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {VariantEdit} requestBody Product Variant parameters to change
		 * @return {Variant} OK
		 */
		Products_idVariants_variant_id_jsonPutByLoginAndAuthtoken(login: string, authtoken: string, id: number, variant_id: number, requestBody: VariantEdit, headersHandler?: () => HttpHeaders): Observable<Variant> {
			return this.http.put<Variant>(this.baseUri + 'products/' + id + '/variants/' + variant_id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete value of Product Custom Field
		 * Delete products/{product_id}/fields/{field_id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} product_id Id of the Product.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} field_id Id of the Custom Field Value.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {MessageObject} OK
		 */
		Products_product_idFields_field_id_jsonDeleteByLoginAndAuthtoken(login: string, authtoken: string, product_id: number, field_id: number, headersHandler?: () => HttpHeaders): Observable<MessageObject> {
			return this.http.delete<MessageObject>(this.baseUri + 'products/' + product_id + '/fields/' + field_id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update value of Product Custom Field
		 * Put products/{product_id}/fields/{field_id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} product_id Id of the Product.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} field_id Id of the Custom Field Value.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ProductCustomField} OK
		 */
		Products_product_idFields_field_id_jsonPutByLoginAndAuthtoken(login: string, authtoken: string, product_id: number, field_id: number, headersHandler?: () => HttpHeaders): Observable<ProductCustomField> {
			return this.http.put<ProductCustomField>(this.baseUri + 'products/' + product_id + '/fields/' + field_id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve all Promotions.
		 * Get promotions.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {string} limit Promotions' list restriction (default: 50 | max: 200).
		 * @param {string} page Promotions' list page (default: 1).
		 * @return {Array<Promotion>} An array of Promotions
		 */
		Promotions_jsonGetByLoginAndAuthtokenAndLimitAndPage(login: string, authtoken: string, limit: string | null | undefined, page: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Promotion>> {
			return this.http.get<Array<Promotion>>(this.baseUri + 'promotions.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&page=' + (page == null ? '' : encodeURIComponent(page)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new Promotion.
		 * Post promotions.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {PromotionEdit} requestBody Promotion parameters.
		 * @return {Promotion} OK
		 */
		Promotions_jsonPostByLoginAndAuthtoken(login: string, authtoken: string, requestBody: PromotionEdit, headersHandler?: () => HttpHeaders): Observable<Promotion> {
			return this.http.post<Promotion>(this.baseUri + 'promotions.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete an existing Promotion.
		 * Delete promotions/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Promotion
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {string} OK
		 */
		Promotions_id_jsonDeleteByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'promotions/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve a single Promotion.
		 * Get promotions/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Promotion
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Promotion} OK
		 */
		Promotions_id_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Promotion> {
			return this.http.get<Promotion>(this.baseUri + 'promotions/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a Promotion.
		 * Put promotions/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Promotion
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {PromotionEdit} requestBody Promotion parameters.
		 * @return {Promotion} OK
		 */
		Promotions_id_jsonPutByLoginAndAuthtoken(login: string, authtoken: string, id: number, requestBody: PromotionEdit, headersHandler?: () => HttpHeaders): Observable<Promotion> {
			return this.http.put<Promotion>(this.baseUri + 'promotions/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve all Store's Shipping Methods.
		 * Get shipping_methods.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @return {Array<ShippingMethod>} An array of Shipping Methods
		 */
		Shipping_methods_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, headersHandler?: () => HttpHeaders): Observable<Array<ShippingMethod>> {
			return this.http.get<Array<ShippingMethod>>(this.baseUri + 'shipping_methods.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a Shipping Method.
		 * Post shipping_methods.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {ShippingMethodEdit} requestBody Shipping Method parameters.
		 * @return {ShippingMethod} OK
		 */
		Shipping_methods_jsonPostByLoginAndAuthtoken(login: string, authtoken: string, requestBody: ShippingMethodEdit, headersHandler?: () => HttpHeaders): Observable<ShippingMethod> {
			return this.http.post<ShippingMethod>(this.baseUri + 'shipping_methods.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete an existing Shipping Method.
		 * Delete shipping_methods/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Shipping Method
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {string} OK
		 */
		Shipping_methods_id_jsonDeleteByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.delete(this.baseUri + 'shipping_methods/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Retrieve a single Shipping Method.
		 * Get shipping_methods/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Shipping Method
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ShippingMethod} OK
		 */
		Shipping_methods_id_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<ShippingMethod> {
			return this.http.get<ShippingMethod>(this.baseUri + 'shipping_methods/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a Shipping Method.
		 * Put shipping_methods/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Shipping Method
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ShippingMethodEdit} requestBody Shipping Method parameters.
		 * @return {ShippingMethod} OK
		 */
		Shipping_methods_id_jsonPutByLoginAndAuthtoken(login: string, authtoken: string, id: number, requestBody: ShippingMethodEdit, headersHandler?: () => HttpHeaders): Observable<ShippingMethod> {
			return this.http.put<ShippingMethod>(this.baseUri + 'shipping_methods/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrive store creation status.
		 * Get store/check_status.json
		 * @param {string} partner_code Partner code.
		 * @param {string} auth_token Partner authentication token.
		 * @param {string} store_code Store Code
		 * @param {string} locale ISO 3166-2 code of the language used in the response messages.
		 * @return {PartnerStoreStatus} A Store status object if creation is still in progress. A new Partner Store object when creation is done.
		 */
		StoreCheck_status_jsonGetByPartner_codeAndAuth_tokenAndStore_codeAndLocale(partner_code: string, auth_token: string, store_code: string, locale: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<PartnerStoreStatus> {
			return this.http.get<PartnerStoreStatus>(this.baseUri + 'store/check_status.json?partner_code=' + (partner_code == null ? '' : encodeURIComponent(partner_code)) + '&auth_token=' + (auth_token == null ? '' : encodeURIComponent(auth_token)) + '&store_code=' + (store_code == null ? '' : encodeURIComponent(store_code)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a Partnered Store
		 * Post store/create.json
		 * @param {string} partner_code Partner code.
		 * @param {string} auth_token Partner authentication token.
		 * @param {PartnerStoreCreate} requestBody New partnered Store parameters.
		 * @return {PartnerStoreCode} A Partner Store object.
		 */
		StoreCreate_jsonPostByPartner_codeAndAuth_token(partner_code: string, auth_token: string, requestBody: PartnerStoreCreate, headersHandler?: () => HttpHeaders): Observable<PartnerStoreCode> {
			return this.http.post<PartnerStoreCode>(this.baseUri + 'store/create.json?partner_code=' + (partner_code == null ? '' : encodeURIComponent(partner_code)) + '&auth_token=' + (auth_token == null ? '' : encodeURIComponent(auth_token)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve Store Information.
		 * Get store/info.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @return {Store} OK
		 */
		StoreInfo_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, headersHandler?: () => HttpHeaders): Observable<Store> {
			return this.http.get<Store>(this.baseUri + 'store/info.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve Store Languages.
		 * Get store/languages.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @return {Array<Language>} OK
		 */
		StoreLanguages_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, headersHandler?: () => HttpHeaders): Observable<Array<Language>> {
			return this.http.get<Array<Language>>(this.baseUri + 'store/languages.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve all Taxes.
		 * Get taxes.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @return {Array<Tax>} An array of Taxes
		 */
		Taxes_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, headersHandler?: () => HttpHeaders): Observable<Array<Tax>> {
			return this.http.get<Array<Tax>>(this.baseUri + 'taxes.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new Tax.
		 * Post taxes.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {TaxEdit} requestBody Tax parameters.
		 * @return {Tax} OK
		 */
		Taxes_jsonPostByLoginAndAuthtoken(login: string, authtoken: string, requestBody: TaxEdit, headersHandler?: () => HttpHeaders): Observable<Tax> {
			return this.http.post<Tax>(this.baseUri + 'taxes.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a single Tax information.
		 * Get taxes/{id}.json
		 * @param {string} login API OAuth login.
		 * @param {string} authtoken API OAuth token.
		 * @param {number} id Id of the Tax
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Tax} A Tax information object
		 */
		Taxes_id_jsonGetByLoginAndAuthtoken(login: string, authtoken: string, id: number, headersHandler?: () => HttpHeaders): Observable<Tax> {
			return this.http.get<Tax>(this.baseUri + 'taxes/' + id + '.json?login=' + (login == null ? '' : encodeURIComponent(login)) + '&authtoken=' + (authtoken == null ? '' : encodeURIComponent(authtoken)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export enum ProductsSearch_jsonGetByLoginAndAuthtokenAndLocaleAndQueryAndFieldsFields { sku = 'sku', barcode = 'barcode', brand = 'brand', name = 'name', description = 'description', variants = 'variants', option_name = 'option_name', custom_fields = 'custom_fields', custom_fields_selects = 'custom_fields_selects' }

}

