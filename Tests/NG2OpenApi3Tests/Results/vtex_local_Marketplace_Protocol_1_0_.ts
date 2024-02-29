import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Approveorder {

		/**
		 * String that indicates which account made the request.
		 * Required
		 */
		accountName: string;

		/**
		 * String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the Response Codes section of this API Reference.
		 * Required
		 */
		code: string;

		/**
		 * List with errors related to the response, if there is any.
		 * Required
		 */
		ApproveorderErrors: Array<ApproveorderErrors>;

		/**
		 * Structure with important fields for the connector. This structure is only returned if the response is successful. Includes the following fields:
		 * `mainOrderId`: String with the order's ID inside the main seller account in VTEX.
		 * `franchiseOrderId`: - String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is:
		 * - `allowFranchises` field set to `true` when integrating the order
		 * - `SLA` chosen for the order is from a franchise account.
		 * Required
		 */
		fields: ApproveorderFields;

		/**
		 * String containing the name of the flow responsible for the response. This field can contain the following values:
		 * `PlaceOrder`: when integrating new orders.
		 * `ApproveOrder`: when approving existing orders.
		 * `Unknown`: when we’re not able to identify the flow.
		 * Required
		 */
		flow: string;

		/**
		 * String that indicates the order's ID in the marketplace.
		 * Required
		 */
		marketplaceOrderId: string;

		/**
		 * String with a message explaining the code returned in the response.
		 * Required
		 */
		message: string;

		/**
		 * String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.
		 * Required
		 */
		operationId: string;

		/**
		 * Boolean that indicates if the response is successful or not.
		 * Required
		 */
		success: boolean;
	}
	export interface ApproveorderFormProperties {

		/**
		 * String that indicates which account made the request.
		 * Required
		 */
		accountName: FormControl<string | null | undefined>,

		/**
		 * String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the Response Codes section of this API Reference.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * String containing the name of the flow responsible for the response. This field can contain the following values:
		 * `PlaceOrder`: when integrating new orders.
		 * `ApproveOrder`: when approving existing orders.
		 * `Unknown`: when we’re not able to identify the flow.
		 * Required
		 */
		flow: FormControl<string | null | undefined>,

		/**
		 * String that indicates the order's ID in the marketplace.
		 * Required
		 */
		marketplaceOrderId: FormControl<string | null | undefined>,

		/**
		 * String with a message explaining the code returned in the response.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/**
		 * String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.
		 * Required
		 */
		operationId: FormControl<string | null | undefined>,

		/**
		 * Boolean that indicates if the response is successful or not.
		 * Required
		 */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateApproveorderFormGroup() {
		return new FormGroup<ApproveorderFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			flow: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			marketplaceOrderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ApproveorderErrors {

		/**
		 * String containing the code returned by the source. Example value: If the source is `Fulfillment`, the code can be FMT005 to indicate that the item(s) in the order are not available.
		 * Required
		 */
		code: string;

		/**
		 * String containing the error message/description returned by the source.
		 * Required
		 */
		description: string;

		/**
		 * Includes the following fields pointing out the context of the error:
		 * `Fulfillment`
		 * `Checkout`
		 * `Order Integration`
		 * Required
		 */
		source: string;
	}
	export interface ApproveorderErrorsFormProperties {

		/**
		 * String containing the code returned by the source. Example value: If the source is `Fulfillment`, the code can be FMT005 to indicate that the item(s) in the order are not available.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * String containing the error message/description returned by the source.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Includes the following fields pointing out the context of the error:
		 * `Fulfillment`
		 * `Checkout`
		 * `Order Integration`
		 * Required
		 */
		source: FormControl<string | null | undefined>,
	}
	export function CreateApproveorderErrorsFormGroup() {
		return new FormGroup<ApproveorderErrorsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ApproveorderFields {
		fields?: ApproveorderFieldsFields;
	}
	export interface ApproveorderFieldsFormProperties {
	}
	export function CreateApproveorderFieldsFormGroup() {
		return new FormGroup<ApproveorderFieldsFormProperties>({
		});

	}

	export interface ApproveorderFieldsFields {

		/**
		 * String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is:
		 * - `allowFranchises` field set to `true` when integrating the order
		 * - SLA chosen for the order is from a franchise account
		 */
		franchiseOrderId?: string | null;

		/**
		 * String with the order’s ID inside the main seller account in VTEX.
		 * Required
		 */
		mainOrderId: string;
	}
	export interface ApproveorderFieldsFieldsFormProperties {

		/**
		 * String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is:
		 * - `allowFranchises` field set to `true` when integrating the order
		 * - SLA chosen for the order is from a franchise account
		 */
		franchiseOrderId: FormControl<string | null | undefined>,

		/**
		 * String with the order’s ID inside the main seller account in VTEX.
		 * Required
		 */
		mainOrderId: FormControl<string | null | undefined>,
	}
	export function CreateApproveorderFieldsFieldsFormGroup() {
		return new FormGroup<ApproveorderFieldsFieldsFormProperties>({
			franchiseOrderId: new FormControl<string | null | undefined>(undefined),
			mainOrderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Structure with the customer's information. An order will be identified as corporate if any of the corporate fields are filled out (`corporateDocument`, `corporatePhone`, `corporateName` or `tradeName`). */
	export interface ClientProfileData {

		/**
		 * String with the company’s document number, in case of corporate orders.
		 * Required
		 */
		corporateDocument: string;

		/**
		 * String with the company’s name, in case of corporate orders.
		 * Required
		 */
		corporateName: string;

		/**
		 * String with the company’s phone number, in case of corporate orders.
		 * Required
		 */
		corporatePhone: string;

		/**
		 * String with the customer’s document number.
		 * Required
		 */
		document: string;

		/**
		 * String with the customer's email.
		 * Required
		 */
		email: string;

		/**
		 * String with the customer's first name.
		 * Required
		 */
		firstName: string;

		/**
		 * String with the customer’s surname.
		 * Required
		 */
		lastName: string;

		/**
		 * String with the customer’s phone number.
		 * Required
		 */
		phone: string;

		/**
		 * String with the company’s state registration, in case of corporate orders.
		 * Required
		 */
		stateInscription: string;

		/**
		 * String with the company’s fantasy name, in case of corporate orders.
		 * Required
		 */
		tradeName: string;
	}

	/** Structure with the customer's information. An order will be identified as corporate if any of the corporate fields are filled out (`corporateDocument`, `corporatePhone`, `corporateName` or `tradeName`). */
	export interface ClientProfileDataFormProperties {

		/**
		 * String with the company’s document number, in case of corporate orders.
		 * Required
		 */
		corporateDocument: FormControl<string | null | undefined>,

		/**
		 * String with the company’s name, in case of corporate orders.
		 * Required
		 */
		corporateName: FormControl<string | null | undefined>,

		/**
		 * String with the company’s phone number, in case of corporate orders.
		 * Required
		 */
		corporatePhone: FormControl<string | null | undefined>,

		/**
		 * String with the customer’s document number.
		 * Required
		 */
		document: FormControl<string | null | undefined>,

		/**
		 * String with the customer's email.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * String with the customer's first name.
		 * Required
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * String with the customer’s surname.
		 * Required
		 */
		lastName: FormControl<string | null | undefined>,

		/**
		 * String with the customer’s phone number.
		 * Required
		 */
		phone: FormControl<string | null | undefined>,

		/**
		 * String with the company’s state registration, in case of corporate orders.
		 * Required
		 */
		stateInscription: FormControl<string | null | undefined>,

		/**
		 * String with the company’s fantasy name, in case of corporate orders.
		 * Required
		 */
		tradeName: FormControl<string | null | undefined>,
	}
	export function CreateClientProfileDataFormGroup() {
		return new FormGroup<ClientProfileDataFormProperties>({
			corporateDocument: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			corporateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			corporatePhone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			document: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stateInscription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tradeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CustomApp {

		/**
		 * String dictionary with the names of the fields and their respective values that must be inserted into the order.
		 * Required
		 */
		fields: Fields;

		/**
		 * App's ID.
		 * Required
		 */
		id: string;

		/**
		 * Integer with the major version of the app. Optional, defaulting to one.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		major: number;
	}
	export interface CustomAppFormProperties {

		/**
		 * App's ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Integer with the major version of the app. Optional, defaulting to one.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		major: FormControl<number | null | undefined>,
	}
	export function CreateCustomAppFormGroup() {
		return new FormGroup<CustomAppFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			major: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** String dictionary with the names of the fields and their respective values that must be inserted into the order. */
	export interface Fields {

		/**
		 * String with field's key and value.
		 * Required
		 */
		marketplacePaymentMethod: string;
	}

	/** String dictionary with the names of the fields and their respective values that must be inserted into the order. */
	export interface FieldsFormProperties {

		/**
		 * String with field's key and value.
		 * Required
		 */
		marketplacePaymentMethod: FormControl<string | null | undefined>,
	}
	export function CreateFieldsFormGroup() {
		return new FormGroup<FieldsFormProperties>({
			marketplacePaymentMethod: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Structure with the order's customizable fields. To insert custom fields in the order, you must first go through the process of [Creating an app](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template), and then adding the app, as well as the desired fields, within the seller's `orderForm`. More information on [Creating customizable fields in the cart with Checkout API](https://developers.vtex.com/vtex-rest-api/docs/customizable-fields-with-checkout-api). */
	export interface CustomData {

		/** Required */
		customApps: Array<CustomApp>;
	}

	/** Structure with the order's customizable fields. To insert custom fields in the order, you must first go through the process of [Creating an app](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template), and then adding the app, as well as the desired fields, within the seller's `orderForm`. More information on [Creating customizable fields in the cart with Checkout API](https://developers.vtex.com/vtex-rest-api/docs/customizable-fields-with-checkout-api). */
	export interface CustomDataFormProperties {
	}
	export function CreateCustomDataFormGroup() {
		return new FormGroup<CustomDataFormProperties>({
		});

	}


	/** List of delivery IDs, used for orders where the marketplace is responsible for the fulfillment of the order, including keeping inventory at a warehouse as well as the delivery. */
	export interface DeliveryIds {

		/**
		 * String with the ID of the warehouse used for marketplace fulfillment. Required when `isFob` = `true` and `isMarketplaceFulfillment` = `true`.
		 * Required
		 */
		warehouseId: string;
	}

	/** List of delivery IDs, used for orders where the marketplace is responsible for the fulfillment of the order, including keeping inventory at a warehouse as well as the delivery. */
	export interface DeliveryIdsFormProperties {

		/**
		 * String with the ID of the warehouse used for marketplace fulfillment. Required when `isFob` = `true` and `isMarketplaceFulfillment` = `true`.
		 * Required
		 */
		warehouseId: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryIdsFormGroup() {
		return new FormGroup<DeliveryIdsFormProperties>({
			warehouseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Deliverybyfranchiseseller {

		/**
		 * String that indicates which account made the request.
		 * Required
		 */
		accountName: string;

		/**
		 * String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the [Response Codes]() section.
		 * Required
		 */
		code: string;

		/**
		 * List with errors related to the response, if there's any.
		 * Required
		 */
		DeliverybyfranchisesellerErrors: Array<DeliverybyfranchisesellerErrors>;

		/**
		 * Structure with important fields for the connector. This structure is only returned if the response is successful. Includes the following fields:
		 * `mainOrderId`: String with the order's ID inside the main seller account in VTEX.
		 * `franchiseOrderId`: - String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is:
		 * - `allowFranchises` field set to `true` when integrating the order
		 * - `SLA` chosen for the order is from a franchise account.
		 * Required
		 */
		fields: DeliverybyfranchisesellerFields;

		/**
		 * String containing the name of the flow responsible for the response. This field can contain the following values:
		 * `PlaceOrder`: when integrating new orders
		 * `ApproveOrder`: when approving existing orders
		 * `Unknown`: when we’re not able to identify the flow
		 * Required
		 */
		flow: string;

		/**
		 * String that indicates the order's ID in the marketplace.
		 * Required
		 */
		marketplaceOrderId: string;

		/**
		 * String with a message explaining the code returned in the response.
		 * Required
		 */
		message: string;

		/**
		 * String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.
		 * Required
		 */
		operationId: string;

		/**
		 * Boolean that indicates if the response is successful or not.
		 * Required
		 */
		success: boolean;
	}
	export interface DeliverybyfranchisesellerFormProperties {

		/**
		 * String that indicates which account made the request.
		 * Required
		 */
		accountName: FormControl<string | null | undefined>,

		/**
		 * String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the [Response Codes]() section.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * String containing the name of the flow responsible for the response. This field can contain the following values:
		 * `PlaceOrder`: when integrating new orders
		 * `ApproveOrder`: when approving existing orders
		 * `Unknown`: when we’re not able to identify the flow
		 * Required
		 */
		flow: FormControl<string | null | undefined>,

		/**
		 * String that indicates the order's ID in the marketplace.
		 * Required
		 */
		marketplaceOrderId: FormControl<string | null | undefined>,

		/**
		 * String with a message explaining the code returned in the response.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/**
		 * String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.
		 * Required
		 */
		operationId: FormControl<string | null | undefined>,

		/**
		 * Boolean that indicates if the response is successful or not.
		 * Required
		 */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateDeliverybyfranchisesellerFormGroup() {
		return new FormGroup<DeliverybyfranchisesellerFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			flow: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			marketplaceOrderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeliverybyfranchisesellerErrors {

		/**
		 * String containing the code returned by the source. Example value: If the source is `Fulfillment`, the code can be FMT005 to indicate that the item(s) in the order are not available.
		 * Required
		 */
		code: string;

		/**
		 * String containing the error message/description returned by the source.
		 * Required
		 */
		description: string;

		/**
		 * Includes the following fields pointing out the context of the error:
		 * `Fulfillment`
		 * `Checkout`
		 * `Order Integration`
		 * Required
		 */
		source: string;
	}
	export interface DeliverybyfranchisesellerErrorsFormProperties {

		/**
		 * String containing the code returned by the source. Example value: If the source is `Fulfillment`, the code can be FMT005 to indicate that the item(s) in the order are not available.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * String containing the error message/description returned by the source.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Includes the following fields pointing out the context of the error:
		 * `Fulfillment`
		 * `Checkout`
		 * `Order Integration`
		 * Required
		 */
		source: FormControl<string | null | undefined>,
	}
	export function CreateDeliverybyfranchisesellerErrorsFormGroup() {
		return new FormGroup<DeliverybyfranchisesellerErrorsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeliverybyfranchisesellerFields {
		fields?: DeliverybyfranchisesellerFieldsFields;
	}
	export interface DeliverybyfranchisesellerFieldsFormProperties {
	}
	export function CreateDeliverybyfranchisesellerFieldsFormGroup() {
		return new FormGroup<DeliverybyfranchisesellerFieldsFormProperties>({
		});

	}

	export interface DeliverybyfranchisesellerFieldsFields {

		/**
		 * String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is:
		 * - `allowFranchises` field set to `true` when integrating the order
		 * - SLA chosen for the order is from a franchise account
		 */
		franchiseOrderId?: string | null;

		/**
		 * String with the order’s ID inside the main seller account in VTEX.
		 * Required
		 */
		mainOrderId: string;
	}
	export interface DeliverybyfranchisesellerFieldsFieldsFormProperties {

		/**
		 * String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is:
		 * - `allowFranchises` field set to `true` when integrating the order
		 * - SLA chosen for the order is from a franchise account
		 */
		franchiseOrderId: FormControl<string | null | undefined>,

		/**
		 * String with the order’s ID inside the main seller account in VTEX.
		 * Required
		 */
		mainOrderId: FormControl<string | null | undefined>,
	}
	export function CreateDeliverybyfranchisesellerFieldsFieldsFormGroup() {
		return new FormGroup<DeliverybyfranchisesellerFieldsFieldsFormProperties>({
			franchiseOrderId: new FormControl<string | null | undefined>(undefined),
			mainOrderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Deliverybyseller {

		/**
		 * String that indicates which account made the request.
		 * Required
		 */
		accountName: string;

		/**
		 * String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the [Response Codes]() section.
		 * Required
		 */
		code: string;

		/**
		 * List with errors related to the response, if there's any.
		 * Required
		 */
		DeliverybysellerErrors: Array<DeliverybysellerErrors>;

		/**
		 * Structure with important fields for the connector. This structure is only returned if the response is successful. Includes the following fields:
		 * `mainOrderId`: String with the order's ID inside the main seller account in VTEX.
		 * `franchiseOrderId`: - String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is:
		 * - `allowFranchises` field set to `true` when integrating the order
		 * - `SLA` chosen for the order is from a franchise account.
		 * Required
		 */
		fields: DeliverybysellerFields;

		/**
		 * String containing the name of the flow responsible for the response. This field can contain the following values:
		 * `PlaceOrder`: when integrating new orders
		 * `ApproveOrder`: when approving existing orders
		 * `Unknown`: when we’re not able to identify the flow
		 * Required
		 */
		flow: string;

		/**
		 * String that indicates the order's ID in the marketplace.
		 * Required
		 */
		marketplaceOrderId: string;

		/**
		 * String with a message explaining the code returned in the response.
		 * Required
		 */
		message: string;

		/**
		 * String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.
		 * Required
		 */
		operationId: string;

		/**
		 * Boolean that indicates if the response is successful or not.
		 * Required
		 */
		success: boolean;
	}
	export interface DeliverybysellerFormProperties {

		/**
		 * String that indicates which account made the request.
		 * Required
		 */
		accountName: FormControl<string | null | undefined>,

		/**
		 * String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the [Response Codes]() section.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * String containing the name of the flow responsible for the response. This field can contain the following values:
		 * `PlaceOrder`: when integrating new orders
		 * `ApproveOrder`: when approving existing orders
		 * `Unknown`: when we’re not able to identify the flow
		 * Required
		 */
		flow: FormControl<string | null | undefined>,

		/**
		 * String that indicates the order's ID in the marketplace.
		 * Required
		 */
		marketplaceOrderId: FormControl<string | null | undefined>,

		/**
		 * String with a message explaining the code returned in the response.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/**
		 * String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.
		 * Required
		 */
		operationId: FormControl<string | null | undefined>,

		/**
		 * Boolean that indicates if the response is successful or not.
		 * Required
		 */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateDeliverybysellerFormGroup() {
		return new FormGroup<DeliverybysellerFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			flow: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			marketplaceOrderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeliverybysellerErrors {

		/**
		 * String containing the code returned by the source. Example value: If the source is `Fulfillment`, the code can be FMT005 to indicate that the item(s) in the order are not available.
		 * Required
		 */
		code: string;

		/**
		 * String containing the error message/description returned by the source.
		 * Required
		 */
		description: string;

		/**
		 * Includes the following fields pointing out the context of the error:
		 * `Fulfillment`
		 * `Checkout`
		 * `Order Integration`
		 * Required
		 */
		source: string;
	}
	export interface DeliverybysellerErrorsFormProperties {

		/**
		 * String containing the code returned by the source. Example value: If the source is `Fulfillment`, the code can be FMT005 to indicate that the item(s) in the order are not available.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * String containing the error message/description returned by the source.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Includes the following fields pointing out the context of the error:
		 * `Fulfillment`
		 * `Checkout`
		 * `Order Integration`
		 * Required
		 */
		source: FormControl<string | null | undefined>,
	}
	export function CreateDeliverybysellerErrorsFormGroup() {
		return new FormGroup<DeliverybysellerErrorsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeliverybysellerFields {
		fields?: DeliverybysellerFieldsFields;
	}
	export interface DeliverybysellerFieldsFormProperties {
	}
	export function CreateDeliverybysellerFieldsFormGroup() {
		return new FormGroup<DeliverybysellerFieldsFormProperties>({
		});

	}

	export interface DeliverybysellerFieldsFields {

		/**
		 * String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is:
		 * - `allowFranchises` field set to `true` when integrating the order
		 * - SLA chosen for the order is from a franchise account
		 */
		franchiseOrderId?: string | null;

		/**
		 * String with the order’s ID inside the main seller account in VTEX.
		 * Required
		 */
		mainOrderId: string;
	}
	export interface DeliverybysellerFieldsFieldsFormProperties {

		/**
		 * String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is:
		 * - `allowFranchises` field set to `true` when integrating the order
		 * - SLA chosen for the order is from a franchise account
		 */
		franchiseOrderId: FormControl<string | null | undefined>,

		/**
		 * String with the order’s ID inside the main seller account in VTEX.
		 * Required
		 */
		mainOrderId: FormControl<string | null | undefined>,
	}
	export function CreateDeliverybysellerFieldsFieldsFormGroup() {
		return new FormGroup<DeliverybysellerFieldsFieldsFormProperties>({
			franchiseOrderId: new FormControl<string | null | undefined>(undefined),
			mainOrderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EnqueueNewOrderRequest {

		/**
		 * Boolean indicating whether franchise accounts linked to the main seller should be considered. That is, if the order delivery pickup/SLA can belong to a [franchise account](https://help.vtex.com/en/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl), for example. This field is optional and defaults to `false`.
		 * Required
		 */
		allowFranchises: boolean;

		/**
		 * Structure with the customer's information. An order will be identified as corporate if any of the corporate fields are filled out (`corporateDocument`, `corporatePhone`, `corporateName` or `tradeName`).
		 * Required
		 */
		clientProfileData: ClientProfileData;

		/**
		 * String with the connector's base endpoint that will receive notifications about the orders processing results, as well as status updates from VTEX OMS. This field accepts query strings. You can use the models below:
		 * - `https://{{externalconnector}}.com`
		 * - `https://{{externalconnector.com}}/api/vtex` if you additionaly want to send a relative URL with the endpoint.
		 * This field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.
		 * It is required if the connector is native or does not use the App Template.
		 */
		connectorEndpoint?: string | null;

		/**
		 * String with the identifier code of the connector responsible for the order.
		 * This field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.
		 * It is required if the connector is native or does not use the App Template.
		 */
		connectorName?: string | null;

		/** Structure with the order's customizable fields. To insert custom fields in the order, you must first go through the process of [Creating an app](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template), and then adding the app, as well as the desired fields, within the seller's `orderForm`. More information on [Creating customizable fields in the cart with Checkout API](https://developers.vtex.com/vtex-rest-api/docs/customizable-fields-with-checkout-api). */
		customData?: CustomData;

		/**
		 * Object with the order's billing data.
		 * Required
		 */
		invoiceData: InvoiceData;

		/** Required */
		items: Array<Item>;

		/**
		 * String that indicates the order's ID in the marketplace.
		 * Required
		 */
		marketplaceOrderId: string;

		/**
		 * Required field including a string with the order’s status in the marketplace. If you send an order with the status APPROVED to integrate, our service will automatically try to advance it’s status in VTEX after integrating it. This field accepts the following values:
		 * - `new`
		 * - `approved`
		 * Required
		 */
		marketplaceOrderStatus: string;

		/**
		 * Integer that indicates the order’s total value, which the marketplace will pay to the seller. It’s important to note that this value should include interest, if that’s the case. If the value is `USD110.50`, convert it to the format → `11050`.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		marketplacePaymentValue: number;

		/** String that indicates the name of the account responsible for the order’s pickup point. It is only required for pickup-in-point orders from franchise accounts, when franchise accounts `allowFranchises` is `true` and the order in question has a `pickup-in-point` delivery type. It is optional otherwise. */
		pickupAccountName?: string | null;

		/** Required */
		shippingData: ShippingData;
	}
	export interface EnqueueNewOrderRequestFormProperties {

		/**
		 * Boolean indicating whether franchise accounts linked to the main seller should be considered. That is, if the order delivery pickup/SLA can belong to a [franchise account](https://help.vtex.com/en/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl), for example. This field is optional and defaults to `false`.
		 * Required
		 */
		allowFranchises: FormControl<boolean | null | undefined>,

		/**
		 * String with the connector's base endpoint that will receive notifications about the orders processing results, as well as status updates from VTEX OMS. This field accepts query strings. You can use the models below:
		 * - `https://{{externalconnector}}.com`
		 * - `https://{{externalconnector.com}}/api/vtex` if you additionaly want to send a relative URL with the endpoint.
		 * This field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.
		 * It is required if the connector is native or does not use the App Template.
		 */
		connectorEndpoint: FormControl<string | null | undefined>,

		/**
		 * String with the identifier code of the connector responsible for the order.
		 * This field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.
		 * It is required if the connector is native or does not use the App Template.
		 */
		connectorName: FormControl<string | null | undefined>,

		/**
		 * String that indicates the order's ID in the marketplace.
		 * Required
		 */
		marketplaceOrderId: FormControl<string | null | undefined>,

		/**
		 * Required field including a string with the order’s status in the marketplace. If you send an order with the status APPROVED to integrate, our service will automatically try to advance it’s status in VTEX after integrating it. This field accepts the following values:
		 * - `new`
		 * - `approved`
		 * Required
		 */
		marketplaceOrderStatus: FormControl<string | null | undefined>,

		/**
		 * Integer that indicates the order’s total value, which the marketplace will pay to the seller. It’s important to note that this value should include interest, if that’s the case. If the value is `USD110.50`, convert it to the format → `11050`.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		marketplacePaymentValue: FormControl<number | null | undefined>,

		/** String that indicates the name of the account responsible for the order’s pickup point. It is only required for pickup-in-point orders from franchise accounts, when franchise accounts `allowFranchises` is `true` and the order in question has a `pickup-in-point` delivery type. It is optional otherwise. */
		pickupAccountName: FormControl<string | null | undefined>,
	}
	export function CreateEnqueueNewOrderRequestFormGroup() {
		return new FormGroup<EnqueueNewOrderRequestFormProperties>({
			allowFranchises: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			connectorEndpoint: new FormControl<string | null | undefined>(undefined),
			connectorName: new FormControl<string | null | undefined>(undefined),
			marketplaceOrderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			marketplaceOrderStatus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			marketplacePaymentValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pickupAccountName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object with the order's billing data. */
	export interface InvoiceData {

		/**
		 * Structure with the order’s payment data. Required only if `invoiceData` is defined.
		 * Required
		 */
		userPaymentInfo: UserPaymentInfo;
	}

	/** Object with the order's billing data. */
	export interface InvoiceDataFormProperties {
	}
	export function CreateInvoiceDataFormGroup() {
		return new FormGroup<InvoiceDataFormProperties>({
		});

	}


	/** Structure with the order’s payment data. Required only if `invoiceData` is defined. */
	export interface UserPaymentInfo {

		/**
		 * List of strings with the payment methods used in the order. Required only if invoiceData is defined. The format and some possible values of payment methods accepted in this list can be found in the call [Fetching marketplace information with the Orders API](https://developers.vtex.com/vtex-rest-api/docs/get-marketplace-data-orders-api).
		 * Required
		 */
		paymentMethods: Array<string>;
	}

	/** Structure with the order’s payment data. Required only if `invoiceData` is defined. */
	export interface UserPaymentInfoFormProperties {
	}
	export function CreateUserPaymentInfoFormGroup() {
		return new FormGroup<UserPaymentInfoFormProperties>({
		});

	}

	export interface Item {

		/**
		 * String with the SKU ID in VTEX’s catalog.
		 * Required
		 */
		id: string;

		/**
		 * Integer with the SKU’s unit price. If the value is `USD110.50`, convert it to the format → `11050`.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: number;

		/**
		 * Integer with the quantity of the SKU present in the order. The value should be greater than zero.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;
	}
	export interface ItemFormProperties {

		/**
		 * String with the SKU ID in VTEX’s catalog.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Integer with the SKU’s unit price. If the value is `USD110.50`, convert it to the format → `11050`.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Integer with the quantity of the SKU present in the order. The value should be greater than zero.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ShippingData {

		/**
		 * Boolean that indicates whether the order's delivery is the marketplace responsibility. Optional, defaulting to false.
		 * Required
		 */
		isFob: boolean;

		/**
		 * Boolean that indicates whether the order's inventory in warehouse is the marketplace's responsibility. Optional, defaulting to false.
		 * Required
		 */
		isMarketplaceFulfillment: boolean;

		/**
		 * List that references the SLAs responsible for delivering each item in the order.
		 * This list must contain the same number of items as the `items` list, previously defined. For example: if the order contains 3 SKUs, you must describe 3 SLAs in this list, one for each SKU (even in cases where the same SLA will deliver all of them).
		 * The order of the SLAs in this list must also follow the same order as in the `items` list. For example: if the SLA named **Correios Express** will be responsible for delivering the SKU with ID equal to **1015**, which is found at index 0 of the `items` list, it must be in index 0 of the `logisticsInfo` list as well.
		 * Required
		 */
		logisticsInfo: Array<LogisticsInfo>;

		/** Required */
		selectedAddresses: Array<SelectedAddress>;
	}
	export interface ShippingDataFormProperties {

		/**
		 * Boolean that indicates whether the order's delivery is the marketplace responsibility. Optional, defaulting to false.
		 * Required
		 */
		isFob: FormControl<boolean | null | undefined>,

		/**
		 * Boolean that indicates whether the order's inventory in warehouse is the marketplace's responsibility. Optional, defaulting to false.
		 * Required
		 */
		isMarketplaceFulfillment: FormControl<boolean | null | undefined>,
	}
	export function CreateShippingDataFormGroup() {
		return new FormGroup<ShippingDataFormProperties>({
			isFob: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isMarketplaceFulfillment: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * List that references the SLAs responsible for delivering each item in the order.  
	 * This list must contain the same number of items as the `items` list, previously defined. For example: if the order contains 3 SKUs, you must describe 3 SLAs in this list, one for each SKU (even in cases where the same SLA will deliver all of them).  
	 * The order of the SLAs in this list must also follow the same order as in the `items` list. For example: if the SLA named **Correios Express** will be responsible for delivering the SKU with ID equal to **1015**, which is found at index 0 of the `items` list, it must be in index 0 of the `logisticsInfo` list as well.
	 */
	export interface LogisticsInfo {

		/**
		 * List of delivery IDs, used for orders where the marketplace is responsible for the fulfillment of the order, including keeping inventory at a warehouse as well as the delivery.
		 * Required
		 */
		deliveryIds: DeliveryIds;

		/**
		 * String with the inventory reservation period in VTEX's logistics system. To fill in this field insert the number of days, followed by the letter for the chosen unit.
		 * - Days: `d`
		 * - Business days: `bd`.
		 * Example formats: `12d`, `5d`.
		 * Required
		 */
		lockTTL: string;

		/**
		 * Integer indicating the shipping price for this SKU. If the value is `USD20.50`, convert it to the format → `2050`.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: number;

		/**
		 * String with the selected delivery channel. This field supports the following values:
		 * - `delivery`,
		 * - `pickup-in-point`.
		 * Required
		 */
		selectedDeliveryChannel: string;

		/**
		 * String with the selected delivery SLA.
		 * Required
		 */
		selectedSla: string;

		/**
		 * String with the order's estimated delivery time. To fill in this field, insert a number,  followed by the letter for the chosen unit.
		 * - Days: `d`
		 * - Business days: `bd`.
		 * - Hours: `h`
		 * - Minutes: `m`.
		 * Example formats: `12d`, `5bd`, `3h`, `50m`.
		 * Required
		 */
		shippingEstimate: string;
	}

	/**
	 * List that references the SLAs responsible for delivering each item in the order.  
	 * This list must contain the same number of items as the `items` list, previously defined. For example: if the order contains 3 SKUs, you must describe 3 SLAs in this list, one for each SKU (even in cases where the same SLA will deliver all of them).  
	 * The order of the SLAs in this list must also follow the same order as in the `items` list. For example: if the SLA named **Correios Express** will be responsible for delivering the SKU with ID equal to **1015**, which is found at index 0 of the `items` list, it must be in index 0 of the `logisticsInfo` list as well.
	 */
	export interface LogisticsInfoFormProperties {

		/**
		 * String with the inventory reservation period in VTEX's logistics system. To fill in this field insert the number of days, followed by the letter for the chosen unit.
		 * - Days: `d`
		 * - Business days: `bd`.
		 * Example formats: `12d`, `5d`.
		 * Required
		 */
		lockTTL: FormControl<string | null | undefined>,

		/**
		 * Integer indicating the shipping price for this SKU. If the value is `USD20.50`, convert it to the format → `2050`.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * String with the selected delivery channel. This field supports the following values:
		 * - `delivery`,
		 * - `pickup-in-point`.
		 * Required
		 */
		selectedDeliveryChannel: FormControl<string | null | undefined>,

		/**
		 * String with the selected delivery SLA.
		 * Required
		 */
		selectedSla: FormControl<string | null | undefined>,

		/**
		 * String with the order's estimated delivery time. To fill in this field, insert a number,  followed by the letter for the chosen unit.
		 * - Days: `d`
		 * - Business days: `bd`.
		 * - Hours: `h`
		 * - Minutes: `m`.
		 * Example formats: `12d`, `5bd`, `3h`, `50m`.
		 * Required
		 */
		shippingEstimate: FormControl<string | null | undefined>,
	}
	export function CreateLogisticsInfoFormGroup() {
		return new FormGroup<LogisticsInfoFormProperties>({
			lockTTL: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			selectedDeliveryChannel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			selectedSla: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shippingEstimate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List with the delivery addresses selected for the order. We currently only support a single delivery address. */
	export interface SelectedAddress {

		/**
		 * String with the address identifier. Optional for `delivery` type orders, and required for `pickup-in-point` orders.
		 * Required
		 */
		addressId: string;

		/**
		 * String with the address type. The field supports the values: `residential`, `commercial`, `pickup`.
		 * Required
		 */
		addressType: string;

		/** String with the city’s name. */
		city?: string | null;

		/** String with the address' complement, like building name, or extra number. */
		complement?: string | null;

		/**
		 * String with the state's name, filled in with three letter code.
		 * Required
		 */
		country: string;

		/** Structure with the address geocoordinates. Optional for `delivery` orders, required for `pickup-in-point` orders. */
		geoCoordinates?: GeoCoordinates;

		/** String with the neighborhood's name. */
		neighborhood?: string | null;

		/** String with the street's number. */
		number?: string | null;

		/**
		 * String with the address' postal code.
		 * Required
		 */
		postalCode: string;

		/**
		 * String with the name of the person responsible for receiving the order.
		 * Required
		 */
		receiverName: string;

		/** String with the state's name, filled in with two letter code. */
		state?: string | null;

		/** String with the street's name. */
		street?: string | null;
	}

	/** List with the delivery addresses selected for the order. We currently only support a single delivery address. */
	export interface SelectedAddressFormProperties {

		/**
		 * String with the address identifier. Optional for `delivery` type orders, and required for `pickup-in-point` orders.
		 * Required
		 */
		addressId: FormControl<string | null | undefined>,

		/**
		 * String with the address type. The field supports the values: `residential`, `commercial`, `pickup`.
		 * Required
		 */
		addressType: FormControl<string | null | undefined>,

		/** String with the city’s name. */
		city: FormControl<string | null | undefined>,

		/** String with the address' complement, like building name, or extra number. */
		complement: FormControl<string | null | undefined>,

		/**
		 * String with the state's name, filled in with three letter code.
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/** String with the neighborhood's name. */
		neighborhood: FormControl<string | null | undefined>,

		/** String with the street's number. */
		number: FormControl<string | null | undefined>,

		/**
		 * String with the address' postal code.
		 * Required
		 */
		postalCode: FormControl<string | null | undefined>,

		/**
		 * String with the name of the person responsible for receiving the order.
		 * Required
		 */
		receiverName: FormControl<string | null | undefined>,

		/** String with the state's name, filled in with two letter code. */
		state: FormControl<string | null | undefined>,

		/** String with the street's name. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateSelectedAddressFormGroup() {
		return new FormGroup<SelectedAddressFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			addressType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			receiverName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Structure with the address geocoordinates. Optional for `delivery` orders, required for `pickup-in-point` orders. */
	export interface GeoCoordinates {

		/**
		 * Double value with the latitude coordinates of the address. Required only if the geoCoordinates field is defined.
		 * Example format: `-25.4158764`.
		 * Required
		 */
		latitude: string;

		/**
		 * Double value with the longitude coordinates of the address. Required only if the geoCoordinates field is defined. Example format: `-49.342759`.
		 * Required
		 */
		longitude: string;
	}

	/** Structure with the address geocoordinates. Optional for `delivery` orders, required for `pickup-in-point` orders. */
	export interface GeoCoordinatesFormProperties {

		/**
		 * Double value with the latitude coordinates of the address. Required only if the geoCoordinates field is defined.
		 * Example format: `-25.4158764`.
		 * Required
		 */
		latitude: FormControl<string | null | undefined>,

		/**
		 * Double value with the longitude coordinates of the address. Required only if the geoCoordinates field is defined. Example format: `-49.342759`.
		 * Required
		 */
		longitude: FormControl<string | null | undefined>,
	}
	export function CreateGeoCoordinatesFormGroup() {
		return new FormGroup<GeoCoordinatesFormProperties>({
			latitude: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Pickup_in_point {

		/**
		 * String that indicates which account made the request.
		 * Required
		 */
		accountName: string;

		/**
		 * String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the [Response Codes]() section.
		 * Required
		 */
		code: string;

		/**
		 * List with errors related to the response, if there's any.
		 * Required
		 */
		Pickup_in_pointErrors: Array<Pickup_in_pointErrors>;

		/**
		 * Structure with important fields for the connector. This structure is only returned if the response is successful. Includes the following fields:
		 * `mainOrderId`: String with the order's ID inside the main seller account in VTEX.
		 * `franchiseOrderId`: - String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is:
		 * - `allowFranchises` field set to `true` when integrating the order
		 * - `SLA` chosen for the order is from a franchise account.
		 * Required
		 */
		fields: Pickup_in_pointFields;

		/**
		 * String containing the name of the flow responsible for the response. This field can contain the following values:
		 * `PlaceOrder`: when integrating new orders
		 * `ApproveOrder`: when approving existing orders
		 * `Unknown`: when we’re not able to identify the flow
		 * Required
		 */
		flow: string;

		/**
		 * String that indicates the order's ID in the marketplace.
		 * Required
		 */
		marketplaceOrderId: string;

		/**
		 * String with a message explaining the code returned in the response.
		 * Required
		 */
		message: string;

		/**
		 * String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.
		 * Required
		 */
		operationId: string;

		/**
		 * Boolean that indicates if the response is successful or not.
		 * Required
		 */
		success: boolean;
	}
	export interface Pickup_in_pointFormProperties {

		/**
		 * String that indicates which account made the request.
		 * Required
		 */
		accountName: FormControl<string | null | undefined>,

		/**
		 * String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the [Response Codes]() section.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * String containing the name of the flow responsible for the response. This field can contain the following values:
		 * `PlaceOrder`: when integrating new orders
		 * `ApproveOrder`: when approving existing orders
		 * `Unknown`: when we’re not able to identify the flow
		 * Required
		 */
		flow: FormControl<string | null | undefined>,

		/**
		 * String that indicates the order's ID in the marketplace.
		 * Required
		 */
		marketplaceOrderId: FormControl<string | null | undefined>,

		/**
		 * String with a message explaining the code returned in the response.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/**
		 * String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.
		 * Required
		 */
		operationId: FormControl<string | null | undefined>,

		/**
		 * Boolean that indicates if the response is successful or not.
		 * Required
		 */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreatePickup_in_pointFormGroup() {
		return new FormGroup<Pickup_in_pointFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			flow: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			marketplaceOrderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Pickup_in_pointErrors {

		/**
		 * String containing the code returned by the source. Example value: If the source is `Fulfillment`, the code can be FMT005 to indicate that the item(s) in the order are not available.
		 * Required
		 */
		code: string;

		/**
		 * String containing the error message/description returned by the source.
		 * Required
		 */
		description: string;

		/**
		 * Includes the following fields pointing out the context of the error:
		 * `Fulfillment`
		 * `Checkout`
		 * `Order Integration`
		 * Required
		 */
		source: string;
	}
	export interface Pickup_in_pointErrorsFormProperties {

		/**
		 * String containing the code returned by the source. Example value: If the source is `Fulfillment`, the code can be FMT005 to indicate that the item(s) in the order are not available.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * String containing the error message/description returned by the source.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Includes the following fields pointing out the context of the error:
		 * `Fulfillment`
		 * `Checkout`
		 * `Order Integration`
		 * Required
		 */
		source: FormControl<string | null | undefined>,
	}
	export function CreatePickup_in_pointErrorsFormGroup() {
		return new FormGroup<Pickup_in_pointErrorsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Pickup_in_pointFields {
		fields?: Pickup_in_pointFieldsFields;
	}
	export interface Pickup_in_pointFieldsFormProperties {
	}
	export function CreatePickup_in_pointFieldsFormGroup() {
		return new FormGroup<Pickup_in_pointFieldsFormProperties>({
		});

	}

	export interface Pickup_in_pointFieldsFields {

		/**
		 * String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is:
		 * - `allowFranchises` field set to `true` when integrating the order
		 * - SLA chosen for the order is from a franchise account
		 */
		franchiseOrderId?: string | null;

		/**
		 * String with the order's ID inside the main seller account in VTEX.
		 * Required
		 */
		mainOrderId: string;
	}
	export interface Pickup_in_pointFieldsFieldsFormProperties {

		/**
		 * String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is:
		 * - `allowFranchises` field set to `true` when integrating the order
		 * - SLA chosen for the order is from a franchise account
		 */
		franchiseOrderId: FormControl<string | null | undefined>,

		/**
		 * String with the order's ID inside the main seller account in VTEX.
		 * Required
		 */
		mainOrderId: FormControl<string | null | undefined>,
	}
	export function CreatePickup_in_pointFieldsFieldsFormGroup() {
		return new FormGroup<Pickup_in_pointFieldsFieldsFormProperties>({
			franchiseOrderId: new FormControl<string | null | undefined>(undefined),
			mainOrderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Pickup_in_pointfranchise {

		/**
		 * String that indicates which account made the request.
		 * Required
		 */
		accountName: string;

		/**
		 * String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the [Response Codes]() section.
		 * Required
		 */
		code: string;

		/**
		 * List with errors related to the response, if there's any.
		 * Required
		 */
		Pickup_in_pointfranchiseErrors: Array<Pickup_in_pointfranchiseErrors>;

		/**
		 * Structure with important fields for the connector. This structure is only returned if the response is successful. Includes the following fields:
		 * `mainOrderId`: String with the order's ID inside the main seller account in VTEX.
		 * `franchiseOrderId`: - String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is:
		 * - `allowFranchises` field set to `true` when integrating the order
		 * - `SLA` chosen for the order is from a franchise account.
		 * Required
		 */
		fields: Pickup_in_pointfranchiseFields;

		/**
		 * String containing the name of the flow responsible for the response. This field can contain the following values:
		 * `PlaceOrder`: when integrating new orders
		 * `ApproveOrder`: when approving existing orders
		 * `Unknown`: when we’re not able to identify the flow
		 * Required
		 */
		flow: string;

		/**
		 * String that indicates the order's ID in the marketplace.
		 * Required
		 */
		marketplaceOrderId: string;

		/**
		 * String with a message explaining the code returned in the response.
		 * Required
		 */
		message: string;

		/**
		 * String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.
		 * Required
		 */
		operationId: string;

		/**
		 * Boolean that indicates if the response is successful or not.
		 * Required
		 */
		success: boolean;
	}
	export interface Pickup_in_pointfranchiseFormProperties {

		/**
		 * String that indicates which account made the request.
		 * Required
		 */
		accountName: FormControl<string | null | undefined>,

		/**
		 * String with a internal Channel Order API code that classifies the response. The possible values returned in this field are described in the [Response Codes]() section.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * String containing the name of the flow responsible for the response. This field can contain the following values:
		 * `PlaceOrder`: when integrating new orders
		 * `ApproveOrder`: when approving existing orders
		 * `Unknown`: when we’re not able to identify the flow
		 * Required
		 */
		flow: FormControl<string | null | undefined>,

		/**
		 * String that indicates the order's ID in the marketplace.
		 * Required
		 */
		marketplaceOrderId: FormControl<string | null | undefined>,

		/**
		 * String with a message explaining the code returned in the response.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/**
		 * String GUID that identifies the operation in our service. This field can be used to help us analyze unexpected errors or behaviors.
		 * Required
		 */
		operationId: FormControl<string | null | undefined>,

		/**
		 * Boolean that indicates if the response is successful or not.
		 * Required
		 */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreatePickup_in_pointfranchiseFormGroup() {
		return new FormGroup<Pickup_in_pointfranchiseFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			flow: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			marketplaceOrderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Pickup_in_pointfranchiseErrors {

		/**
		 * String containing the code returned by the source. Example value: If the source is `Fulfillment`, the code can be FMT005 to indicate that the item(s) in the order are not available.
		 * Required
		 */
		code: string;

		/**
		 * String containing the error message/description returned by the source.
		 * Required
		 */
		description: string;

		/**
		 * Includes the following fields pointing out the context of the error:
		 * `Fulfillment`
		 * `Checkout`
		 * `Order Integration`
		 * Required
		 */
		source: string;
	}
	export interface Pickup_in_pointfranchiseErrorsFormProperties {

		/**
		 * String containing the code returned by the source. Example value: If the source is `Fulfillment`, the code can be FMT005 to indicate that the item(s) in the order are not available.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * String containing the error message/description returned by the source.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Includes the following fields pointing out the context of the error:
		 * `Fulfillment`
		 * `Checkout`
		 * `Order Integration`
		 * Required
		 */
		source: FormControl<string | null | undefined>,
	}
	export function CreatePickup_in_pointfranchiseErrorsFormGroup() {
		return new FormGroup<Pickup_in_pointfranchiseErrorsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Pickup_in_pointfranchiseFields {
		fields?: Pickup_in_pointfranchiseFieldsFields;
	}
	export interface Pickup_in_pointfranchiseFieldsFormProperties {
	}
	export function CreatePickup_in_pointfranchiseFieldsFormGroup() {
		return new FormGroup<Pickup_in_pointfranchiseFieldsFormProperties>({
		});

	}

	export interface Pickup_in_pointfranchiseFieldsFields {

		/**
		 * String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is:
		 * - `allowFranchises` field set to `true` when integrating the order
		 * - SLA chosen for the order is from a franchise account
		 */
		franchiseOrderId?: string | null;

		/**
		 * String with the order’s ID inside the main seller account in VTEX.
		 * Required
		 */
		mainOrderId: string;
	}
	export interface Pickup_in_pointfranchiseFieldsFieldsFormProperties {

		/**
		 * String with the order's ID inside the franchise seller account in VTEX. Only returned if the order was integrated using the [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) feature, that is:
		 * - `allowFranchises` field set to `true` when integrating the order
		 * - SLA chosen for the order is from a franchise account
		 */
		franchiseOrderId: FormControl<string | null | undefined>,

		/**
		 * String with the order’s ID inside the main seller account in VTEX.
		 * Required
		 */
		mainOrderId: FormControl<string | null | undefined>,
	}
	export function CreatePickup_in_pointfranchiseFieldsFieldsFormGroup() {
		return new FormGroup<Pickup_in_pointfranchiseFieldsFieldsFormProperties>({
			franchiseOrderId: new FormControl<string | null | undefined>(undefined),
			mainOrderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateOrderStatusRequest {

		/**
		 * String with the connector's base endpoint that will receive notifications about the orders processing results, as well as status updates from VTEX OMS. This field does not accept query strings. You can use the models below:
		 * - `https://{{externalconnector}}.com`
		 * - `https://{{externalconnector.com}}/api/vtex` if you additionaly want to send a relative URL with the endpoint.
		 * This field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.
		 * It is required if the connector is native or does not use the App Template.
		 * Required
		 */
		connectorEndpoint: string;

		/**
		 * String with the identifier code of the connector responsible for the order.
		 * This field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.
		 * It is required if the connector is native or does not use the App Template.
		 * Required
		 */
		connectorName: string;

		/**
		 * String that indicates the order's ID in the marketplace.
		 * Required
		 */
		marketplaceOrderId: string;

		/**
		 * Required field including a string with the order’s status in the marketplace. If you send an order with the status APPROVED to integrate, our service will automatically try to advance its status in VTEX after integrating it. This field accepts the following values:
		 * - `new`
		 * - `approved`.
		 * Required
		 */
		marketplaceOrderStatus: string;
	}
	export interface UpdateOrderStatusRequestFormProperties {

		/**
		 * String with the connector's base endpoint that will receive notifications about the orders processing results, as well as status updates from VTEX OMS. This field does not accept query strings. You can use the models below:
		 * - `https://{{externalconnector}}.com`
		 * - `https://{{externalconnector.com}}/api/vtex` if you additionaly want to send a relative URL with the endpoint.
		 * This field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.
		 * It is required if the connector is native or does not use the App Template.
		 * Required
		 */
		connectorEndpoint: FormControl<string | null | undefined>,

		/**
		 * String with the identifier code of the connector responsible for the order.
		 * This field is optional if the connector uses the [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template) and authenticates on our request via `VtexIdclientAutCookie`.
		 * It is required if the connector is native or does not use the App Template.
		 * Required
		 */
		connectorName: FormControl<string | null | undefined>,

		/**
		 * String that indicates the order's ID in the marketplace.
		 * Required
		 */
		marketplaceOrderId: FormControl<string | null | undefined>,

		/**
		 * Required field including a string with the order’s status in the marketplace. If you send an order with the status APPROVED to integrate, our service will automatically try to advance its status in VTEX after integrating it. This field accepts the following values:
		 * - `new`
		 * - `approved`.
		 * Required
		 */
		marketplaceOrderStatus: FormControl<string | null | undefined>,
	}
	export function CreateUpdateOrderStatusRequestFormGroup() {
		return new FormGroup<UpdateOrderStatusRequestFormProperties>({
			connectorEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			connectorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			marketplaceOrderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			marketplaceOrderStatus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VtexMapperRegistration {

		/** The `CategoryTreeProcessingNotificationEndpoint` is optional, and should be an endpoint from the external marketplace, that will be notified after the marketplace's category tree is successfully processed or not. */
		CategoryTreeProcessingNotificationEndpoint?: string | null;

		/**
		 * Endpoint that returns categories and attributes according to VTEX  Mapper specifications.
		 * Required
		 */
		categoryTreeEndPoint: string;

		/**
		 * Marketplace Name, that will be displayed in VTEX Mapper.
		 * Required
		 */
		displayName: string;

		/**
		 * Secure endpoint that will receive the category mapping sent by VTEX Mapper.
		 * Required
		 */
		mappingEndPoint: string;

		/**
		 * Refers to the `allowsRemap` property.
		 * Required
		 */
		properties: string;
	}
	export interface VtexMapperRegistrationFormProperties {

		/** The `CategoryTreeProcessingNotificationEndpoint` is optional, and should be an endpoint from the external marketplace, that will be notified after the marketplace's category tree is successfully processed or not. */
		CategoryTreeProcessingNotificationEndpoint: FormControl<string | null | undefined>,

		/**
		 * Endpoint that returns categories and attributes according to VTEX  Mapper specifications.
		 * Required
		 */
		categoryTreeEndPoint: FormControl<string | null | undefined>,

		/**
		 * Marketplace Name, that will be displayed in VTEX Mapper.
		 * Required
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Secure endpoint that will receive the category mapping sent by VTEX Mapper.
		 * Required
		 */
		mappingEndPoint: FormControl<string | null | undefined>,

		/**
		 * Refers to the `allowsRemap` property.
		 * Required
		 */
		properties: FormControl<string | null | undefined>,
	}
	export function CreateVtexMapperRegistrationFormGroup() {
		return new FormGroup<VtexMapperRegistrationFormProperties>({
			CategoryTreeProcessingNotificationEndpoint: new FormControl<string | null | undefined>(undefined),
			categoryTreeEndPoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mappingEndPoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			properties: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BundleItemsItem {

		/**
		 * Service identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Service name. */
		name?: string | null;

		/**
		 * Service price. The last two digits are the cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Service type. */
		type?: string | null;
	}
	export interface BundleItemsItemFormProperties {

		/**
		 * Service identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Service name. */
		name: FormControl<string | null | undefined>,

		/**
		 * Service price. The last two digits are the cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** Service type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateBundleItemsItemFormGroup() {
		return new FormGroup<BundleItemsItemFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FulfillmentItem {

		/**
		 * SKU ID.
		 * Required
		 */
		id: string;

		/**
		 * Quantity of items of the SKU in the cart.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;

		/**
		 * ID of the seller registered in VTEX.
		 * Required
		 */
		seller: string;
	}
	export interface FulfillmentItemFormProperties {

		/**
		 * SKU ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Quantity of items of the SKU in the cart.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/**
		 * ID of the seller registered in VTEX.
		 * Required
		 */
		seller: FormControl<string | null | undefined>,
	}
	export function CreateFulfillmentItemFormGroup() {
		return new FormGroup<FulfillmentItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			seller: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ItemAttachment {

		/** Content referring to the customization requested by the customer. */
		content?: string | null;

		/** Attachment name. */
		name?: string | null;
	}
	export interface ItemAttachmentFormProperties {

		/** Content referring to the customization requested by the customer. */
		content: FormControl<string | null | undefined>,

		/** Attachment name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateItemAttachmentFormGroup() {
		return new FormGroup<ItemAttachmentFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderPlacement {

		/** Customer's profile information. */
		clientProfileData?: OrderPlacementClientProfileData;

		/** Array of objects containing data about each SKU in the cart. */
		OrderPlacementItems?: Array<OrderPlacementItems>;

		/** Marketing tracking data. If the order has no tracking data, the value will be `null`. */
		marketingData?: OrderPlacementMarketingData;

		/** Identifies the order in the marketplace. */
		marketplaceOrderId?: string | null;

		/**
		 * Amount that the marketplace agrees to pay to the seller. The last two digits are the cents. For example, $24.99 is represented 2499.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		marketplacePaymentValue?: number | null;

		/** Endpoint sent by VTEX to the seller, that will be used to send the invoice and tracking data to the marketplace. This endpoint will also be used in [change order in Multilevel Omnichannel Inventory](https://developers.vtex.com/docs/guides/change-orders-multilevel-omnichannel-inventory-external-marketplaces#implementators) operations in external marketplaces. */
		marketplaceServicesEndpoint?: string | null;

		/** Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `json` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1) */
		openTextField?: string | null;

		/** In other contexts, this field tipically holds an object with payment information. However, since the payment is processed by the marketplace, it will be sent to the seller as `null` in this context. */
		paymentData?: string | null;

		/** Shipping information. */
		shippingData?: OrderPlacementShippingData;
	}
	export interface OrderPlacementFormProperties {

		/** Identifies the order in the marketplace. */
		marketplaceOrderId: FormControl<string | null | undefined>,

		/**
		 * Amount that the marketplace agrees to pay to the seller. The last two digits are the cents. For example, $24.99 is represented 2499.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		marketplacePaymentValue: FormControl<number | null | undefined>,

		/** Endpoint sent by VTEX to the seller, that will be used to send the invoice and tracking data to the marketplace. This endpoint will also be used in [change order in Multilevel Omnichannel Inventory](https://developers.vtex.com/docs/guides/change-orders-multilevel-omnichannel-inventory-external-marketplaces#implementators) operations in external marketplaces. */
		marketplaceServicesEndpoint: FormControl<string | null | undefined>,

		/** Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `json` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1) */
		openTextField: FormControl<string | null | undefined>,

		/** In other contexts, this field tipically holds an object with payment information. However, since the payment is processed by the marketplace, it will be sent to the seller as `null` in this context. */
		paymentData: FormControl<string | null | undefined>,
	}
	export function CreateOrderPlacementFormGroup() {
		return new FormGroup<OrderPlacementFormProperties>({
			marketplaceOrderId: new FormControl<string | null | undefined>(undefined),
			marketplacePaymentValue: new FormControl<number | null | undefined>(undefined),
			marketplaceServicesEndpoint: new FormControl<string | null | undefined>(undefined),
			openTextField: new FormControl<string | null | undefined>(undefined),
			paymentData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderPlacementClientProfileData {

		/** Corporate document, if the customer is a legal entity. */
		corporateDocument?: string | null;

		/** Company name, if the customer is a legal entity. */
		corporateName?: string | null;

		/** Corporate phone number, if the customer is a legal entity. */
		corporatePhone?: string | null;

		/**
		 * Document number informed by the customer.
		 * Required
		 */
		document: string;

		/**
		 * Type of the document informed by the customer.
		 * Required
		 */
		documentType: string;

		/**
		 * Customer's email address.
		 * Required
		 */
		email: string;

		/**
		 * Customer's first name.
		 * Required
		 */
		firstName: string;

		/**
		 * `true` if the customer is a legal entity.
		 * Required
		 */
		isCorporate: boolean;

		/**
		 * Customer's last name.
		 * Required
		 */
		lastName: string;

		/** Customer's phone number. */
		phone?: string | null;

		/** State inscription, if the customer is a legal entity. */
		stateInscription?: string | null;

		/** Trade name, if the customer is a legal entity. */
		tradeName?: string | null;
	}
	export interface OrderPlacementClientProfileDataFormProperties {

		/** Corporate document, if the customer is a legal entity. */
		corporateDocument: FormControl<string | null | undefined>,

		/** Company name, if the customer is a legal entity. */
		corporateName: FormControl<string | null | undefined>,

		/** Corporate phone number, if the customer is a legal entity. */
		corporatePhone: FormControl<string | null | undefined>,

		/**
		 * Document number informed by the customer.
		 * Required
		 */
		document: FormControl<string | null | undefined>,

		/**
		 * Type of the document informed by the customer.
		 * Required
		 */
		documentType: FormControl<string | null | undefined>,

		/**
		 * Customer's email address.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Customer's first name.
		 * Required
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * `true` if the customer is a legal entity.
		 * Required
		 */
		isCorporate: FormControl<boolean | null | undefined>,

		/**
		 * Customer's last name.
		 * Required
		 */
		lastName: FormControl<string | null | undefined>,

		/** Customer's phone number. */
		phone: FormControl<string | null | undefined>,

		/** State inscription, if the customer is a legal entity. */
		stateInscription: FormControl<string | null | undefined>,

		/** Trade name, if the customer is a legal entity. */
		tradeName: FormControl<string | null | undefined>,
	}
	export function CreateOrderPlacementClientProfileDataFormGroup() {
		return new FormGroup<OrderPlacementClientProfileDataFormProperties>({
			corporateDocument: new FormControl<string | null | undefined>(undefined),
			corporateName: new FormControl<string | null | undefined>(undefined),
			corporatePhone: new FormControl<string | null | undefined>(undefined),
			document: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			documentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isCorporate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined),
			stateInscription: new FormControl<string | null | undefined>(undefined),
			tradeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderPlacementItems {

		/** Array containing information on attachments. */
		attachments?: Array<string>;

		/** Information on services sold along with the SKU. Example: a gift package. */
		bundleItems?: Array<BundleItemsItem>;

		/**
		 * Comission.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		commission?: number | null;

		/**
		 * Freight comission.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		freightCommission?: number | null;

		/** SKU ID. */
		id?: string | null;

		/** `true` if the item is a gift. */
		isGift?: boolean | null;

		/** Attachments sold with the SKU. */
		itemsAttachment?: Array<ItemAttachment>;

		/** SKU measurement unit. */
		measurementUnit?: string | null;

		/**
		 * SKU price. The last two digits are the cents. For example, $24.99 is represented 2499.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order. */
		OrderPlacementItemsPriceTags?: Array<OrderPlacementItemsPriceTags>;

		/**
		 * Quantity of the item.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity?: number | null;

		/** ID of the seller registered in VTEX. */
		seller?: string | null;

		/**
		 * SKU unit multiplier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unitMultiplier?: number | null;
	}
	export interface OrderPlacementItemsFormProperties {

		/**
		 * Comission.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		commission: FormControl<number | null | undefined>,

		/**
		 * Freight comission.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		freightCommission: FormControl<number | null | undefined>,

		/** SKU ID. */
		id: FormControl<string | null | undefined>,

		/** `true` if the item is a gift. */
		isGift: FormControl<boolean | null | undefined>,

		/** SKU measurement unit. */
		measurementUnit: FormControl<string | null | undefined>,

		/**
		 * SKU price. The last two digits are the cents. For example, $24.99 is represented 2499.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Quantity of the item.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** ID of the seller registered in VTEX. */
		seller: FormControl<string | null | undefined>,

		/**
		 * SKU unit multiplier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unitMultiplier: FormControl<number | null | undefined>,
	}
	export function CreateOrderPlacementItemsFormGroup() {
		return new FormGroup<OrderPlacementItemsFormProperties>({
			commission: new FormControl<number | null | undefined>(undefined),
			freightCommission: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isGift: new FormControl<boolean | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			seller: new FormControl<string | null | undefined>(undefined),
			unitMultiplier: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OrderPlacementItemsPriceTags {

		/** Price tag identifier. */
		identifier?: string | null;

		/** `true` if price tag value is applied through a percentage. */
		isPercentual?: boolean | null;

		/** Price tag name. */
		name?: string | null;

		/**
		 * Price tag value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rawValue?: number | null;

		/**
		 * Price tag raw value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface OrderPlacementItemsPriceTagsFormProperties {

		/** Price tag identifier. */
		identifier: FormControl<string | null | undefined>,

		/** `true` if price tag value is applied through a percentage. */
		isPercentual: FormControl<boolean | null | undefined>,

		/** Price tag name. */
		name: FormControl<string | null | undefined>,

		/**
		 * Price tag value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rawValue: FormControl<number | null | undefined>,

		/**
		 * Price tag raw value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateOrderPlacementItemsPriceTagsFormGroup() {
		return new FormGroup<OrderPlacementItemsPriceTagsFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined),
			isPercentual: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rawValue: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OrderPlacementMarketingData {

		/** UTM campaign */
		utmCampaign?: string | null;

		/** UTM medium. */
		utmMedium?: string | null;

		/** UTM source. */
		utmSource?: string | null;

		/** utmi_campaign (internal utm) */
		utmiCampaign?: string | null;

		/** utmi_page (internal utm) */
		utmiPage?: string | null;

		/** utmi_part (internal utm) */
		utmiPart?: string | null;
	}
	export interface OrderPlacementMarketingDataFormProperties {

		/** UTM campaign */
		utmCampaign: FormControl<string | null | undefined>,

		/** UTM medium. */
		utmMedium: FormControl<string | null | undefined>,

		/** UTM source. */
		utmSource: FormControl<string | null | undefined>,

		/** utmi_campaign (internal utm) */
		utmiCampaign: FormControl<string | null | undefined>,

		/** utmi_page (internal utm) */
		utmiPage: FormControl<string | null | undefined>,

		/** utmi_part (internal utm) */
		utmiPart: FormControl<string | null | undefined>,
	}
	export function CreateOrderPlacementMarketingDataFormGroup() {
		return new FormGroup<OrderPlacementMarketingDataFormProperties>({
			utmCampaign: new FormControl<string | null | undefined>(undefined),
			utmMedium: new FormControl<string | null | undefined>(undefined),
			utmSource: new FormControl<string | null | undefined>(undefined),
			utmiCampaign: new FormControl<string | null | undefined>(undefined),
			utmiPage: new FormControl<string | null | undefined>(undefined),
			utmiPart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderPlacementShippingData {

		/** Shipping address. */
		address?: OrderPlacementShippingDataAddress;

		/** Array of objects containing logistics information of each item. */
		OrderPlacementShippingDataLogisticsInfo?: Array<OrderPlacementShippingDataLogisticsInfo>;

		/** Indicate whether this object's information is up to date according to the order's items. An order can not be placed if `"outdated"` */
		updateStatus?: string | null;
	}
	export interface OrderPlacementShippingDataFormProperties {

		/** Indicate whether this object's information is up to date according to the order's items. An order can not be placed if `"outdated"` */
		updateStatus: FormControl<string | null | undefined>,
	}
	export function CreateOrderPlacementShippingDataFormGroup() {
		return new FormGroup<OrderPlacementShippingDataFormProperties>({
			updateStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderPlacementShippingDataAddress {

		/** Address ID. */
		addressId?: string | null;

		/**
		 * Type of address. For example, `Residential` or `Pickup`, among others.
		 * Required
		 */
		addressType: string;

		/**
		 * City of the shipping address.
		 * Required
		 */
		city: string;

		/** Complement to the shipping address in case it applies. */
		complement?: string | null;

		/**
		 * Three letter ISO code of the country of the shipping address.
		 * Required
		 */
		country: string;

		/** Array with two strings with geocoordinates, first latitude, then longitude. */
		geoCoordinates?: Array<string>;

		/**
		 * Neighborhood of the shipping address.
		 * Required
		 */
		neighborhood: string;

		/**
		 * Number of the building, house or apartment in the shipping address.
		 * Required
		 */
		number: string;

		/**
		 * Postal Code.
		 * Required
		 */
		postalCode: string;

		/**
		 * Name of the person who is going to receive the order.
		 * Required
		 */
		receiverName: string;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/**
		 * State of the shipping address.
		 * Required
		 */
		state: string;

		/**
		 * Street of the shipping address.
		 * Required
		 */
		street: string;
	}
	export interface OrderPlacementShippingDataAddressFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/**
		 * Type of address. For example, `Residential` or `Pickup`, among others.
		 * Required
		 */
		addressType: FormControl<string | null | undefined>,

		/**
		 * City of the shipping address.
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address in case it applies. */
		complement: FormControl<string | null | undefined>,

		/**
		 * Three letter ISO code of the country of the shipping address.
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Neighborhood of the shipping address.
		 * Required
		 */
		neighborhood: FormControl<string | null | undefined>,

		/**
		 * Number of the building, house or apartment in the shipping address.
		 * Required
		 */
		number: FormControl<string | null | undefined>,

		/**
		 * Postal Code.
		 * Required
		 */
		postalCode: FormControl<string | null | undefined>,

		/**
		 * Name of the person who is going to receive the order.
		 * Required
		 */
		receiverName: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/**
		 * State of the shipping address.
		 * Required
		 */
		state: FormControl<string | null | undefined>,

		/**
		 * Street of the shipping address.
		 * Required
		 */
		street: FormControl<string | null | undefined>,
	}
	export function CreateOrderPlacementShippingDataAddressFormGroup() {
		return new FormGroup<OrderPlacementShippingDataAddressFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			neighborhood: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			receiverName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			street: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OrderPlacementShippingDataLogisticsInfo {

		/** Scheduled delivery window information, in case it applies to the item. */
		deliveryWindow?: OrderPlacementShippingDataLogisticsInfoDeliveryWindow;

		/**
		 * Index of the item in the `items` array, starting from 0.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex: number;

		/** Logistics reservation waiting time. */
		lockTTL?: string | null;

		/**
		 * Shipping price for the item. Does not account for the whole order's shipping price.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: number;

		/**
		 * Selected shipping option
		 * Required
		 */
		selectedSla: string;

		/** Estimated time until delivery for the item. */
		shippingEstimate?: string | null;
	}
	export interface OrderPlacementShippingDataLogisticsInfoFormProperties {

		/**
		 * Index of the item in the `items` array, starting from 0.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex: FormControl<number | null | undefined>,

		/** Logistics reservation waiting time. */
		lockTTL: FormControl<string | null | undefined>,

		/**
		 * Shipping price for the item. Does not account for the whole order's shipping price.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Selected shipping option
		 * Required
		 */
		selectedSla: FormControl<string | null | undefined>,

		/** Estimated time until delivery for the item. */
		shippingEstimate: FormControl<string | null | undefined>,
	}
	export function CreateOrderPlacementShippingDataLogisticsInfoFormGroup() {
		return new FormGroup<OrderPlacementShippingDataLogisticsInfoFormProperties>({
			itemIndex: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lockTTL: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			selectedSla: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shippingEstimate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderPlacementShippingDataLogisticsInfoDeliveryWindow {

		/** Scheduled delivery window end date in UTC. */
		endDateUtc?: string | null;

		/**
		 * Scheduled delivery window list price.
		 * Type: double
		 */
		listPrice?: number | null;

		/** Scheduled delivery window start date in UTC. */
		startDateUtc?: string | null;
	}
	export interface OrderPlacementShippingDataLogisticsInfoDeliveryWindowFormProperties {

		/** Scheduled delivery window end date in UTC. */
		endDateUtc: FormControl<string | null | undefined>,

		/**
		 * Scheduled delivery window list price.
		 * Type: double
		 */
		listPrice: FormControl<number | null | undefined>,

		/** Scheduled delivery window start date in UTC. */
		startDateUtc: FormControl<string | null | undefined>,
	}
	export function CreateOrderPlacementShippingDataLogisticsInfoDeliveryWindowFormGroup() {
		return new FormGroup<OrderPlacementShippingDataLogisticsInfoDeliveryWindowFormProperties>({
			endDateUtc: new FormControl<string | null | undefined>(undefined),
			listPrice: new FormControl<number | null | undefined>(undefined),
			startDateUtc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendCategoryMappingToVtexMapper {

		/**
		 * Array with Marketplace parent categories and their information.
		 * Required
		 */
		SendCategoryMappingToVtexMapperCategories: Array<SendCategoryMappingToVtexMapperCategories>;
	}
	export interface SendCategoryMappingToVtexMapperFormProperties {
	}
	export function CreateSendCategoryMappingToVtexMapperFormGroup() {
		return new FormGroup<SendCategoryMappingToVtexMapperFormProperties>({
		});

	}

	export interface SendCategoryMappingToVtexMapperCategories {

		/** Array with children categories in the marketplace, and their information. */
		SendCategoryMappingToVtexMapperCategoriesChildren?: Array<SendCategoryMappingToVtexMapperCategoriesChildren>;

		/** ID of the parent category in the marketplace. */
		id?: string | null;

		/** Name of the parent category in the marketplace. */
		name?: string | null;
	}
	export interface SendCategoryMappingToVtexMapperCategoriesFormProperties {

		/** ID of the parent category in the marketplace. */
		id: FormControl<string | null | undefined>,

		/** Name of the parent category in the marketplace. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSendCategoryMappingToVtexMapperCategoriesFormGroup() {
		return new FormGroup<SendCategoryMappingToVtexMapperCategoriesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendCategoryMappingToVtexMapperCategoriesChildren {

		/**
		 * Grandchildren categories in the marketplace. Send as array of `ID`, `name` and `specifications`.
		 * Required
		 */
		children: Array<string>;

		/**
		 * ID of the child  category in the marketplace.
		 * Required
		 */
		id: string;

		/**
		 * Name of the child  category in the marketplace.
		 * Required
		 */
		name: string;

		/**
		 * Specifications for the Product or SKU
		 * Required
		 */
		SendCategoryMappingToVtexMapperCategoriesChildrenSpecifications: Array<SendCategoryMappingToVtexMapperCategoriesChildrenSpecifications>;
	}
	export interface SendCategoryMappingToVtexMapperCategoriesChildrenFormProperties {

		/**
		 * ID of the child  category in the marketplace.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Name of the child  category in the marketplace.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSendCategoryMappingToVtexMapperCategoriesChildrenFormGroup() {
		return new FormGroup<SendCategoryMappingToVtexMapperCategoriesChildrenFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SendCategoryMappingToVtexMapperCategoriesChildrenSpecifications {

		/**
		 * Name of the attribute sent as a specification.
		 * Required
		 */
		attributeName: string;

		/**
		 * Values of the atttribute specified.
		 * Required
		 */
		SendCategoryMappingToVtexMapperCategoriesChildrenSpecificationsAttributeValues: Array<SendCategoryMappingToVtexMapperCategoriesChildrenSpecificationsAttributeValues>;

		/**
		 * If the specification is required, mark this flag as `true`. If not, mark it as `false`.
		 * Required
		 */
		required: boolean;
	}
	export interface SendCategoryMappingToVtexMapperCategoriesChildrenSpecificationsFormProperties {

		/**
		 * Name of the attribute sent as a specification.
		 * Required
		 */
		attributeName: FormControl<string | null | undefined>,

		/**
		 * If the specification is required, mark this flag as `true`. If not, mark it as `false`.
		 * Required
		 */
		required: FormControl<boolean | null | undefined>,
	}
	export function CreateSendCategoryMappingToVtexMapperCategoriesChildrenSpecificationsFormGroup() {
		return new FormGroup<SendCategoryMappingToVtexMapperCategoriesChildrenSpecificationsFormProperties>({
			attributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			required: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SendCategoryMappingToVtexMapperCategoriesChildrenSpecificationsAttributeValues {

		/**
		 * Name of the value
		 * Required
		 */
		valueName: string;
	}
	export interface SendCategoryMappingToVtexMapperCategoriesChildrenSpecificationsAttributeValuesFormProperties {

		/**
		 * Name of the value
		 * Required
		 */
		valueName: FormControl<string | null | undefined>,
	}
	export function CreateSendCategoryMappingToVtexMapperCategoriesChildrenSpecificationsAttributeValuesFormGroup() {
		return new FormGroup<SendCategoryMappingToVtexMapperCategoriesChildrenSpecificationsAttributeValuesFormProperties>({
			valueName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Fulfillment simulation - External Marketplace
		 * This endpoint can be triggered by marketplaces to simulate the fulfillment of an item in the cart.
		 * The fulfillment information is useful whenever you need to know the availability of fulfilling an order for a specific cart setting, since the API response will let you know the updated price, inventory and shipping data.
		 * Post api/checkout/pub/orderForms/simulation
		 * @param {string} affiliateId The affiliate ID code created by the seller.
		 * @param {number} sc Trade Policy (Sales Channel) identification.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Fulfillment_simulation_external_marketplaceReturn} OK
		 */
		Fulfillment_simulation_external_marketplace(affiliateId: string | null | undefined, sc: number | null | undefined, requestBody: Fulfillment_simulation_external_marketplacePostBody): Observable<Fulfillment_simulation_external_marketplaceReturn> {
			return this.http.post<Fulfillment_simulation_external_marketplaceReturn>(this.baseUri + 'api/checkout/pub/orderForms/simulation?affiliateId=' + (affiliateId == null ? '' : encodeURIComponent(affiliateId)) + '&sc=' + sc, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Send Category Mapping to VTEX Mapper
		 * Mapping categories guarantees that the VTEX category tree has a correct association with the marketplace’s category tree.
		 * To perform this association, VTEX made VTEX Mapper available. It is a tool integrated to the VTEX platform that allows the user to relate categories created in VTEX to categories from the marketplace.
		 * This endpoint allows connectors to send the marketplace's category tree mapped in the integration.
		 * Connectors should send the payload compacted in .gzip format.
		 * For a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).
		 * Post portal.vtexcommercestable.com.br/api/mkp-category-mapper/categories/marketplace/{id}
		 * @param {string} id Code identifying returned in the *VTEX Mapper Registration* endpoint.
		 * @return {void} OK
		 */
		Send_category_mapping_vtex_mapper(id: string, requestBody: SendCategoryMappingToVtexMapper): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'portal.vtexcommercestable.com.br/api/mkp-category-mapper/categories/marketplace/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * VTEX Mapper Registration
		 * Mapping categories guarantees that the VTEX category tree has a correct association with the marketplace’s category tree.
		 * To perform this association, VTEX made VTEX Mapper available. It is a tool integrated to the VTEX platform that allows the user to relate categories created in VTEX to categories from the marketplace.
		 * This endpoint allows connectors to register the external marketplace integration in VTEX Mapper.
		 * In case VTEX Mapper detects an error and the call fails, the connector should check if mandatory information was sent correctly. Ex. are URLs correctly registered in the properties categoryTreeEndPoint and mappingEndPoint?
		 * For a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).
		 * Post portal.vtexcommercestable.com.br/api/mkp-category-mapper/connector/register
		 * @param {string} an Name of the VTEX account. Used as part of the URL.
		 * @return {void} OK
		 */
		Vtex_mapper_registration(an: string, requestBody: VtexMapperRegistration): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'portal.vtexcommercestable.com.br/api/mkp-category-mapper/connector/register?an=' + (an == null ? '' : encodeURIComponent(an)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * New Order Integration
		 * API to integrate an external channel's order into the VTEX plataform.
		 * This process is asynchronous and a notification with the order's integration results will be sent to the endpoint specified in the **connectorEndpoint** field in [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template), if the connector uses our App template. The field **connectorName** is also optional for connectors that use our App Template and authenticate using the app's auth cookie. If the account is not informed in the URL host, it should also be defined as a query string parameter in the route: `an={account}`.
		 * For a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).
		 * Post {accountName}.vtexcommercestable.com.br/api/order-integration/orders
		 * @param {string} an Parameter should indicate the name of the VTEX account where the order is being integrated or updated, meaning the seller responsible for the order.
		 * @param {string} accountName Parameter should indicate the name of the VTEX account where the order is being integrated or updated, meaning the seller responsible for the order.
		 * @param {string} affiliateId ID identifying the marketplace where the order originates. This ID is configured in the seller's VTEX account, and should be informed to the marketplace.
		 * @return {Deliverybyseller} OK
		 */
		EnqueueNewOrder(an: string | null | undefined, accountName: string, affiliateId: string, requestBody: EnqueueNewOrderRequest): Observable<Deliverybyseller> {
			return this.http.post<Deliverybyseller>(this.baseUri + (accountName == null ? '' : encodeURIComponent(accountName)) + '.vtexcommercestable.com.br/api/order-integration/orders?an=' + (an == null ? '' : encodeURIComponent(an)) + '&affiliateId=' + (affiliateId == null ? '' : encodeURIComponent(affiliateId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update Order Status
		 * API request used to update an order status in VTEX.
		 * This process is asynchronous and a notification with the order's integration results will be sent to the endpoint specified in the **connectiorEndpoint** field or the **connectiorEndpoint** [App Template](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-app-template), if the connector uses our App template. The field **connectorName** is also optional for connectors that use our App Template and authenticate using the app's auth cookie.
		 * For a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).
		 * Put {accountName}.vtexcommercestable.com.br/api/order-integration/orders/status
		 * @param {string} an Parameter should indicate the name of the VTEX account where the order is being integrated or updated, meaning the seller responsible for the order.
		 * @param {string} accountName Parameter should indicate the name of the VTEX account where the order is being integrated or updated, meaning the seller responsible for the order.
		 * @return {Approveorder} OK
		 */
		UpdateOrderStatus(an: string | null | undefined, accountName: string, requestBody: UpdateOrderStatusRequest): Observable<Approveorder> {
			return this.http.put<Approveorder>(this.baseUri + (accountName == null ? '' : encodeURIComponent(accountName)) + '.vtexcommercestable.com.br/api/order-integration/orders/status?an=' + (an == null ? '' : encodeURIComponent(an)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Place fulfillment order
		 * Creates fulfillment order, meaning that it is an order for the seller's side in a sale made through a marketplace. This order assumes the transaction itself has already happened on the marketplace's side and, therfore, cares only about the fulfillment side.
		 * > If you plan to integrate external orders with possible [Price divergence](https://help.vtex.com/en/tutorial/price-divergence-rule--6RlFLhD1rIRRshl83KnCjW#) be mindful of the `isCreatedAsync` request body field.
		 * For a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).
		 * Post {accountName}.{environment}.com.br/api/fulfillment/pvt/orders
		 * @param {string} accountName Name of the VTEX account. Used as part of the URL.
		 * @param {string} environment Environment to be used. It is passed as part of the URL.
		 * @param {string} sc Sales channel.
		 * @param {string} affiliateId ID identifying the marketplace where the order originates. This ID is configured in the seller's VTEX account, and should be informed to the marketplace.
		 * @return {void} OK
		 */
		PlaceFulfillmentOrder(accountName: string, environment: string, sc: string | null | undefined, affiliateId: string, requestBody: PlaceFulfillmentOrderPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (accountName == null ? '' : encodeURIComponent(accountName)) + '.' + (environment == null ? '' : encodeURIComponent(environment)) + '.com.br/api/fulfillment/pvt/orders&sc=' + (sc == null ? '' : encodeURIComponent(sc)) + '&affiliateId=' + (affiliateId == null ? '' : encodeURIComponent(affiliateId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Authorize dispatch for fulfillment order
		 * Creates fulfillment order, meaning that it is an order for the seller's side in a sale made through a marketplace. This order assumes the transaction itself has already happened on the marketplace's side and, therfore, cares only about the fulfillment side.
		 * For a detailed explanation of the steps required to develop a custom connector to become an external marketplace for VTEX sellers, check out our complete [External Marketplace Integration Guide](https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide).
		 * Post {accountName}.{environment}.com.br/api/fulfillment/pvt/orders/{orderId}/fulfill
		 * @param {string} accountName Name of the VTEX account. Used as part of the URL.
		 * @param {string} environment Environment to be used. It is passed as part of the URL.
		 * @param {string} orderId ID of the order that is to be authorized. It is composed of the `afilliateId` and the `marketplaceOrderId` joined with a `-`. For instance, an order with an ID `"123"` coming from the marketplace `"MKP"` has an `orderId` of `"MKP-123"`.
		 * @param {string} sc Sales channel.
		 * @param {string} affiliateId ID identifying the marketplace where the order originates. This ID is configured in the seller's VTEX account, and should be informed to the marketplace.
		 * @return {void} OK
		 */
		AuthorizeDispatchForFulfillmentOrder(accountName: string, environment: string, orderId: string, sc: string | null | undefined, affiliateId: string, requestBody: AuthorizeDispatchForFulfillmentOrderPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (accountName == null ? '' : encodeURIComponent(accountName)) + '.' + (environment == null ? '' : encodeURIComponent(environment)) + '.com.br/api/fulfillment/pvt/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/fulfill&sc=' + (sc == null ? '' : encodeURIComponent(sc)) + '&affiliateId=' + (affiliateId == null ? '' : encodeURIComponent(affiliateId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fulfillment simulation - External Seller
		 * This endpoint may be called upon by VTEX for fulfillment simulation in the external seller different contexts. See examples below.
		 * When a [price](https://developers.vtex.com/docs/api-reference/marketplace-apis#post-/notificator/-sellerId-/changenotification/-skuId-/price) or [inventory](https://developers.vtex.com/docs/api-reference/marketplace-apis#post-/notificator/-sellerId-/changenotification/-skuId-/inventory) notification request returns a response with status `200 OK`, it means that the SKU already exists in the marketplace. Whenever this happens, the marketplace will call the seller to get two updated information about the SKU: Price and Inventory.
		 * The seller needs to have an endpoint implemented in order to receive this call and send a response containing the requested information to the marketplace. We call it the Fulfillment Simulation endpoint.
		 * If the seller wishes to include other parameters in this call (like account name, or [sales channel](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) ID), this should be done within their {fulfillmentEndpoint}. This path is then inserted in the marketplace's VTEX admin when [configuring a seller](https://help.vtex.com/en/tutorial/configurando-seller--tutorials_392).
		 * The marketplace will send an object containing an array of items. The seller must use this list to get the updated information about the referred SKUs and send them back to the marketplace, following the response format explained in the API Reference.
		 * This call is also applied in the Storefront simulation scenario, in which case the request from VTEX does not send the paramenters `country` and `postalCode`.
		 * The call's payload can be adapted into two scenarios:
		 * - **Displaying items in the storefront**: the address information can be nulled in the request, since they are not mandatory data for this context.
		 * - **Making a shopping cart simulation during checkout**: address information must be sent, since this data is needed to calculate freight values. If the address information (including `postalCode` and `country`) is not sent through the call, VTEX interprets the stock balance as zero. Without a valid stock balance, the seller will not be shown as an option during checkout.
		 * ## Request body example - Indexing simulation
		 * ```
		 * {
		 * "items": [
		 * {
		 * "id": "7908010136043",
		 * "quantity": 1,
		 * "seller": "1",
		 * }
		 * ],
		 * "isCheckedIn": false,
		 * }
		 * ```
		 * ## Request body example - Checkout simulation
		 * ```
		 * {
		 * "items": [
		 * {
		 * "id": "7908010136043",
		 * "quantity": 1,
		 * "seller": "1",
		 * }
		 * ],
		 * "postalCode": "22270-030",
		 * "country": "BRA",
		 * }
		 * ```
		 * Post {fulfillmentEndpoint}/pvt/orderForms/simulation
		 * @param {string} fulfillmentEndpoint This is the fulfillment endpoint registered for each specific external seller in the **seller management** section of VTEX's admin panel.
		 * @return {Fulfillment_simulationReturn} OK
		 */
		Fulfillment_simulation(fulfillmentEndpoint: string, requestBody: Fulfillment_simulationPostBody): Observable<Fulfillment_simulationReturn> {
			return this.http.post<Fulfillment_simulationReturn>(this.baseUri + (fulfillmentEndpoint == null ? '' : encodeURIComponent(fulfillmentEndpoint)) + '/pvt/orderForms/simulation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Order placement
		 * This request is sent by VTEX to the external seller once the customer finishes their checkout, to let the seller know there is a newly placed order. It does that by calling the **Order Placement** endpoint, which needs to be implemented by the seller.
		 * The marketplace will send information such as the items contained in the cart, the client’s profile data, the shipping data, and the payment data. With all that, the seller will be able to create the order in their own store.
		 * Post {fulfillmentEndpoint}/pvt/orders
		 * @param {string} fulfillmentEndpoint This is the fulfillment endpoint registered for each specific external seller in the **seller management** section of VTEX's admin panel.
		 * @return {void} OK
		 */
		Order_placement(fulfillmentEndpoint: string, requestBody: OrderPlacement): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (fulfillmentEndpoint == null ? '' : encodeURIComponent(fulfillmentEndpoint)) + '/pvt/orders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Marketplace order cancellation
		 * This request may be sent from VTEX to the external seller in case of order cancelation. For that, the seller will need to implement the Marketplace order cancellation endpoint. Whenever this request is received by the seler, the order should be canceled and the fulfillment flow should not proceed.
		 * For the seller to:
		 * - **Evaluate a cancellation request:** it is possible to send an empty body as a response to the cancellation request, meaning that the seller is evaluating whether to proceed with the cancellation or not.
		 * - **Confirm the cancellation request:** it is possible to confirm the order cancellation by the marketplace by responding to the call with a body including only one information: the `marketplaceOrderId`, which identifies the order in the marketplace. The seller should use this ID to trigger the cancellation of the corresponding order. The seller should then respond with the same `marketplaceOrderId` and also with the `orderId`, which identifies the order in the seller, the date and time of the notification receipt, and a protocol code that confirms the receipt of the request (which may have the value `null`).
		 * - **Refuse a cancellation request:** it is possible to to [send the Invoice](https://developers.vtex.com/vtex-rest-api/reference/external-seller#send-invoice), meaning that the cancellation has been denied, and the flow continues to the [Order Invoicing](https://developers.vtex.com/vtex-rest-api/docs/external-seller-integration-connector#order-invoicing) step, and the ones that follow it.
		 * This call should be made twice: once for the *Evaluate cancellation request* scenario, and a second time to *Confirm cancellation* or *Refuse cancellation*.
		 * Post {fulfillmentEndpoint}/pvt/orders/{orderId}/cancel
		 * @param {string} fulfillmentEndpoint This is the fulfillment endpoint registered for each specific external seller in the **seller management** section of VTEX's admin panel.
		 * @param {string} orderId ID of the order being fulfilled
		 * @return {void} OK
		 */
		Mkp_order_cancellation(fulfillmentEndpoint: string, orderId: string, requestBody: Mkp_order_cancellationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (fulfillmentEndpoint == null ? '' : encodeURIComponent(fulfillmentEndpoint)) + '/pvt/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Authorize fulfillment
		 * This request is sent from VTEX to the seller after the payment is approved, to notify them that the fulfillment process can start.
		 * Post {fulfillmentEndpoint}/pvt/orders/{sellerOrderId}/fulfill
		 * @param {string} fulfillmentEndpoint This is the fulfillment endpoint registered for each specific external seller in the **seller management** section of VTEX's admin panel.
		 * @param {string} sellerOrderId Seller's order ID of the order ready for fulfillment. The seller can be a VTEX seller or an external one.
		 * @return {void} OK
		 */
		Authorize_fulfillment(fulfillmentEndpoint: string, sellerOrderId: string, requestBody: Authorize_fulfillmentPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (fulfillmentEndpoint == null ? '' : encodeURIComponent(fulfillmentEndpoint)) + '/pvt/orders/' + (sellerOrderId == null ? '' : encodeURIComponent(sellerOrderId)) + '/fulfill', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel order in marketplace
		 * This request is sent by the external seller to the VTEX marketplace to cancel an order.
		 * Post {marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/cancel
		 * @param {string} marketplaceServicesEndpoint This is an endpoint sent from VTEX to the external seller in the [Order placement request](https://developers.vtex.com/vtex-rest-api/reference/external-seller#order-placement).
		 * @param {string} marketplaceOrderId Identifies the order in the marketplace.
		 * @return {void} OK
		 */
		Cancel_order_in_marketplace(marketplaceServicesEndpoint: string, marketplaceOrderId: string, requestBody: Cancel_order_in_marketplacePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (marketplaceServicesEndpoint == null ? '' : encodeURIComponent(marketplaceServicesEndpoint)) + '/pvt/orders/' + (marketplaceOrderId == null ? '' : encodeURIComponent(marketplaceOrderId)) + '/cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Send invoice
		 * This request is sent by the external seller to the VTEX marketplace to send invoice information.
		 * This can be necessary in a regular order or in the case of a return. The `type` field is used to indicate which of these is the case.
		 * Post {marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/invoice
		 * @param {string} marketplaceServicesEndpoint This is an endpoint sent from VTEX to the external seller in the [Order placement request](https://developers.vtex.com/vtex-rest-api/reference/external-seller#order-placement).
		 * @param {string} marketplaceOrderId Identifies the order in the marketplace.
		 * @return {void} OK
		 */
		Send_invoice(marketplaceServicesEndpoint: string, marketplaceOrderId: string, requestBody: Send_invoicePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (marketplaceServicesEndpoint == null ? '' : encodeURIComponent(marketplaceServicesEndpoint)) + '/pvt/orders/' + (marketplaceOrderId == null ? '' : encodeURIComponent(marketplaceOrderId)) + '/invoice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Send tracking information
		 * This request is sent by the external seller to the VTEX marketplace to add tracking information to a given order's invoice, in case it is necessary to do so after the invoice has been sent.
		 * Post {marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/invoice/{invoiceNumber}
		 * @param {string} marketplaceServicesEndpoint This is an endpoint sent from VTEX to the external seller in the [Order placement request](https://developers.vtex.com/vtex-rest-api/reference/external-seller#order-placement).
		 * @param {string} marketplaceOrderId Identifies the order in the marketplace.
		 * @param {string} invoiceNumber Invoice number.
		 * @return {void} OK
		 */
		Send_tracking_information(marketplaceServicesEndpoint: string, marketplaceOrderId: string, invoiceNumber: string, requestBody: Send_tracking_informationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (marketplaceServicesEndpoint == null ? '' : encodeURIComponent(marketplaceServicesEndpoint)) + '/pvt/orders/' + (marketplaceOrderId == null ? '' : encodeURIComponent(marketplaceOrderId)) + '/invoice/' + (invoiceNumber == null ? '' : encodeURIComponent(invoiceNumber)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update tracking status
		 * This request is sent by the external seller to the VTEX marketplace to update a given order's tracking status.
		 * Post {marketplaceServicesEndpoint}/pvt/orders/{marketplaceOrderId}/invoice/{invoiceNumber}/tracking
		 * @param {string} marketplaceServicesEndpoint This is an endpoint sent from VTEX to the external seller in the [Order placement request](https://developers.vtex.com/vtex-rest-api/reference/external-seller#order-placement).
		 * @param {string} marketplaceOrderId Identifies the order in the marketplace.
		 * @param {string} invoiceNumber Invoice number.
		 * @return {void} OK
		 */
		Update_tracking_status(marketplaceServicesEndpoint: string, marketplaceOrderId: string, invoiceNumber: string, requestBody: Update_tracking_statusPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (marketplaceServicesEndpoint == null ? '' : encodeURIComponent(marketplaceServicesEndpoint)) + '/pvt/orders/' + (marketplaceOrderId == null ? '' : encodeURIComponent(marketplaceOrderId)) + '/invoice/' + (invoiceNumber == null ? '' : encodeURIComponent(invoiceNumber)) + '/tracking', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface Fulfillment_simulation_external_marketplacePostBody {

		/** Customer's profile information. */
		clientProfileData?: Fulfillment_simulation_external_marketplacePostBodyClientProfileData;

		/** Three letter ISO code of the country of the shipping address. This value must be sent along with the `postalCode` or `geoCoordinates` values. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Indicates whether order is checked in. */
		isCheckedIn?: boolean | null;

		/** Array containing information about the SKUs inside the cart to be simulated. */
		Fulfillment_simulation_external_marketplacePostBodyItems?: Array<Fulfillment_simulation_external_marketplacePostBodyItems>;

		/** Object containing promotion data such as coupon tracking information and internal or external UTMs. */
		marketingData?: Fulfillment_simulation_external_marketplacePostBodyMarketingData;

		/** Postal code. */
		postalCode?: string | null;

		/** SLA selected by the customer. */
		selectedSla?: string | null;

		/** ID of the store. */
		storeId?: string | null;
	}
	export interface Fulfillment_simulation_external_marketplacePostBodyFormProperties {

		/** Three letter ISO code of the country of the shipping address. This value must be sent along with the `postalCode` or `geoCoordinates` values. */
		country: FormControl<string | null | undefined>,

		/** Indicates whether order is checked in. */
		isCheckedIn: FormControl<boolean | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,

		/** SLA selected by the customer. */
		selectedSla: FormControl<string | null | undefined>,

		/** ID of the store. */
		storeId: FormControl<string | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplacePostBodyFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplacePostBodyFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			isCheckedIn: new FormControl<boolean | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			selectedSla: new FormControl<string | null | undefined>(undefined),
			storeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplacePostBodyClientProfileData {

		/** Corporate document, if the customer is a legal entity. */
		corporateDocument?: string | null;

		/** Company name, if the customer is a legal entity. */
		corporateName?: string | null;

		/** Corporate phone number, if the customer is a legal entity. */
		corporatePhone?: string | null;

		/** Customer class. */
		customerClass?: string | null;

		/** Document informed by the customer. */
		document?: string | null;

		/** Type of the document informed by the customer. */
		documentType?: string | null;

		/** Email address. */
		email?: string | null;

		/** First name. */
		firstName?: string | null;

		/** Indicates whether the customer is a legal entity. */
		isCorporate?: boolean | null;

		/** Last name. */
		lastName?: string | null;

		/** Phone number. */
		phone?: string | null;

		/** Indicates whether profile is complete on loading. */
		profileCompleteOnLoading?: boolean | null;

		/** Indicates whether profile presents error on loading. */
		profileErrorOnLoading?: boolean | null;

		/** State inscription, if the customer is a legal entity. */
		stateInscription?: string | null;

		/** Trade name, if the customer is a legal entity. */
		tradeName?: string | null;
	}
	export interface Fulfillment_simulation_external_marketplacePostBodyClientProfileDataFormProperties {

		/** Corporate document, if the customer is a legal entity. */
		corporateDocument: FormControl<string | null | undefined>,

		/** Company name, if the customer is a legal entity. */
		corporateName: FormControl<string | null | undefined>,

		/** Corporate phone number, if the customer is a legal entity. */
		corporatePhone: FormControl<string | null | undefined>,

		/** Customer class. */
		customerClass: FormControl<string | null | undefined>,

		/** Document informed by the customer. */
		document: FormControl<string | null | undefined>,

		/** Type of the document informed by the customer. */
		documentType: FormControl<string | null | undefined>,

		/** Email address. */
		email: FormControl<string | null | undefined>,

		/** First name. */
		firstName: FormControl<string | null | undefined>,

		/** Indicates whether the customer is a legal entity. */
		isCorporate: FormControl<boolean | null | undefined>,

		/** Last name. */
		lastName: FormControl<string | null | undefined>,

		/** Phone number. */
		phone: FormControl<string | null | undefined>,

		/** Indicates whether profile is complete on loading. */
		profileCompleteOnLoading: FormControl<boolean | null | undefined>,

		/** Indicates whether profile presents error on loading. */
		profileErrorOnLoading: FormControl<boolean | null | undefined>,

		/** State inscription, if the customer is a legal entity. */
		stateInscription: FormControl<string | null | undefined>,

		/** Trade name, if the customer is a legal entity. */
		tradeName: FormControl<string | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplacePostBodyClientProfileDataFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplacePostBodyClientProfileDataFormProperties>({
			corporateDocument: new FormControl<string | null | undefined>(undefined),
			corporateName: new FormControl<string | null | undefined>(undefined),
			corporatePhone: new FormControl<string | null | undefined>(undefined),
			customerClass: new FormControl<string | null | undefined>(undefined),
			document: new FormControl<string | null | undefined>(undefined),
			documentType: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			isCorporate: new FormControl<boolean | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			profileCompleteOnLoading: new FormControl<boolean | null | undefined>(undefined),
			profileErrorOnLoading: new FormControl<boolean | null | undefined>(undefined),
			stateInscription: new FormControl<string | null | undefined>(undefined),
			tradeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplacePostBodyItems {

		/** The SKU ID. */
		id?: string | null;

		/**
		 * The quantity of items of this specific SKU in the cart to be simulated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity?: number | null;

		/** The ID of the seller responsible for this SKU. This ID can be found in your VTEX Admin. */
		seller?: string | null;
	}
	export interface Fulfillment_simulation_external_marketplacePostBodyItemsFormProperties {

		/** The SKU ID. */
		id: FormControl<string | null | undefined>,

		/**
		 * The quantity of items of this specific SKU in the cart to be simulated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** The ID of the seller responsible for this SKU. This ID can be found in your VTEX Admin. */
		seller: FormControl<string | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplacePostBodyItemsFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplacePostBodyItemsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			seller: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplacePostBodyMarketingData {

		/** Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order. */
		coupon?: string | null;

		/** UTM campaign */
		utmCampaign?: string | null;

		/** UTM medium. */
		utmMedium?: string | null;

		/** UTM source. */
		utmSource?: string | null;

		/** utmi_campaign (internal utm). */
		utmiCampaign?: string | null;

		/** utmi_page (internal utm). */
		utmiPage?: string | null;

		/** utmi_part (internal utm). */
		utmiPart?: string | null;
	}
	export interface Fulfillment_simulation_external_marketplacePostBodyMarketingDataFormProperties {

		/** Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order. */
		coupon: FormControl<string | null | undefined>,

		/** UTM campaign */
		utmCampaign: FormControl<string | null | undefined>,

		/** UTM medium. */
		utmMedium: FormControl<string | null | undefined>,

		/** UTM source. */
		utmSource: FormControl<string | null | undefined>,

		/** utmi_campaign (internal utm). */
		utmiCampaign: FormControl<string | null | undefined>,

		/** utmi_page (internal utm). */
		utmiPage: FormControl<string | null | undefined>,

		/** utmi_part (internal utm). */
		utmiPart: FormControl<string | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplacePostBodyMarketingDataFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplacePostBodyMarketingDataFormProperties>({
			coupon: new FormControl<string | null | undefined>(undefined),
			utmCampaign: new FormControl<string | null | undefined>(undefined),
			utmMedium: new FormControl<string | null | undefined>(undefined),
			utmSource: new FormControl<string | null | undefined>(undefined),
			utmiCampaign: new FormControl<string | null | undefined>(undefined),
			utmiPage: new FormControl<string | null | undefined>(undefined),
			utmiPart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturn {

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Information on each item in the cart. */
		Fulfillment_simulation_external_marketplaceReturnItems?: Array<Fulfillment_simulation_external_marketplaceReturnItems>;

		/** Array with logistics information on each item of the `items` array in the `orderForm`. */
		Fulfillment_simulation_external_marketplaceReturnLogisticsInfo?: Array<Fulfillment_simulation_external_marketplaceReturnLogisticsInfo>;

		/** Object containing promotion data such as coupon tracking information and internal or external UTMs. */
		marketingData?: string | null;

		/** Payment data information. */
		paymentData?: Fulfillment_simulation_external_marketplaceReturnPaymentData;

		/** Postal Code. */
		postalCode?: string | null;

		/** Information on rates and benefits that apply to the order. */
		ratesAndBenefitsData?: Fulfillment_simulation_external_marketplaceReturnRatesAndBenefitsData;

		/** Array containing the data of the item selected as a gift. */
		selectableGifts?: Array<string>;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnFormProperties {

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Object containing promotion data such as coupon tracking information and internal or external UTMs. */
		marketingData: FormControl<string | null | undefined>,

		/** Postal Code. */
		postalCode: FormControl<string | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			marketingData: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnItems {

		/** Availability. */
		availability?: string | null;

		/** ID of the item. */
		id?: string | null;

		/**
		 * List price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice?: number | null;

		/** Measurement unit. */
		measurementUnit?: string | null;

		/** Array containing offering information. */
		offerings?: Array<string>;

		/** Parent assembly binding. */
		parentAssemblyBinding?: string | null;

		/**
		 * Parent item index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		parentItemIndex?: number | null;

		/**
		 * Price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Price information for all units of a specific item. */
		priceDefinition?: Fulfillment_simulation_external_marketplaceReturnItemsPriceDefinition;

		/** Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order. */
		Fulfillment_simulation_external_marketplaceReturnItemsPriceTags?: Array<Fulfillment_simulation_external_marketplaceReturnItemsPriceTags>;

		/** Price expiration date and time. */
		priceValidUntil?: string | null;

		/**
		 * The quantity of the item the cart.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity?: number | null;

		/**
		 * Request index information.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestIndex?: number | null;

		/**
		 * Reward value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rewardValue?: number | null;

		/** The seller responsible for the SKU. */
		seller?: string | null;

		/** Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order. */
		sellerChain?: Array<string>;

		/**
		 * Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sellingPrice?: number | null;

		/**
		 * Tax value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax?: number | null;

		/**
		 * Unit multiplier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unitMultiplier?: number | null;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnItemsFormProperties {

		/** Availability. */
		availability: FormControl<string | null | undefined>,

		/** ID of the item. */
		id: FormControl<string | null | undefined>,

		/**
		 * List price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice: FormControl<number | null | undefined>,

		/** Measurement unit. */
		measurementUnit: FormControl<string | null | undefined>,

		/** Parent assembly binding. */
		parentAssemblyBinding: FormControl<string | null | undefined>,

		/**
		 * Parent item index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		parentItemIndex: FormControl<number | null | undefined>,

		/**
		 * Price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** Price expiration date and time. */
		priceValidUntil: FormControl<string | null | undefined>,

		/**
		 * The quantity of the item the cart.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/**
		 * Request index information.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestIndex: FormControl<number | null | undefined>,

		/**
		 * Reward value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rewardValue: FormControl<number | null | undefined>,

		/** The seller responsible for the SKU. */
		seller: FormControl<string | null | undefined>,

		/**
		 * Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sellingPrice: FormControl<number | null | undefined>,

		/**
		 * Tax value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax: FormControl<number | null | undefined>,

		/**
		 * Unit multiplier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unitMultiplier: FormControl<number | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnItemsFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnItemsFormProperties>({
			availability: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			listPrice: new FormControl<number | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			parentAssemblyBinding: new FormControl<string | null | undefined>(undefined),
			parentItemIndex: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			priceValidUntil: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			requestIndex: new FormControl<number | null | undefined>(undefined),
			rewardValue: new FormControl<number | null | undefined>(undefined),
			seller: new FormControl<string | null | undefined>(undefined),
			sellingPrice: new FormControl<number | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
			unitMultiplier: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnItemsPriceDefinition {

		/**
		 * Item's calculated unitary selling price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		calculatedSellingPrice?: number | null;

		/** Array of objects, each containing value (in cents) and quantity for the different rounding instances that can be combined to form the correctly rounded total. */
		Fulfillment_simulation_external_marketplaceReturnItemsPriceDefinitionSellingPrices?: Array<Fulfillment_simulation_external_marketplaceReturnItemsPriceDefinitionSellingPrices>;

		/**
		 * Total value for all units of the item in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnItemsPriceDefinitionFormProperties {

		/**
		 * Item's calculated unitary selling price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		calculatedSellingPrice: FormControl<number | null | undefined>,

		/**
		 * Total value for all units of the item in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnItemsPriceDefinitionFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnItemsPriceDefinitionFormProperties>({
			calculatedSellingPrice: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnItemsPriceDefinitionSellingPrices {

		/**
		 * Rounding quantity, meaning how many items are rounded to this value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity?: number | null;

		/**
		 * Value in cents for that specific rounding.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnItemsPriceDefinitionSellingPricesFormProperties {

		/**
		 * Rounding quantity, meaning how many items are rounded to this value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/**
		 * Value in cents for that specific rounding.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnItemsPriceDefinitionSellingPricesFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnItemsPriceDefinitionSellingPricesFormProperties>({
			quantity: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnItemsPriceTags {

		/** Price tag identifier. */
		identifier?: string | null;

		/** Indicates whether price tag value is applied through a percentage. */
		isPercentual?: boolean | null;

		/** Price tag name. */
		name?: string | null;

		/** Identification of the responsible for the price tag. */
		owner?: string | null;

		/**
		 * Price tag raw value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rawValue?: number | null;

		/**
		 * Price tag value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnItemsPriceTagsFormProperties {

		/** Price tag identifier. */
		identifier: FormControl<string | null | undefined>,

		/** Indicates whether price tag value is applied through a percentage. */
		isPercentual: FormControl<boolean | null | undefined>,

		/** Price tag name. */
		name: FormControl<string | null | undefined>,

		/** Identification of the responsible for the price tag. */
		owner: FormControl<string | null | undefined>,

		/**
		 * Price tag raw value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rawValue: FormControl<number | null | undefined>,

		/**
		 * Price tag value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnItemsPriceTagsFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnItemsPriceTagsFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined),
			isPercentual: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			rawValue: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfo {

		/** Address ID. */
		addressId?: string | null;

		/** List of available delivery channels. */
		Fulfillment_simulation_external_marketplaceReturnLogisticsInfoDeliveryChannels?: Array<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoDeliveryChannels>;

		/**
		 * Index of item in items array.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex?: number | null;

		/** Item metadata. */
		itemMetadata?: Fulfillment_simulation_external_marketplaceReturnLogisticsInfoItemMetadata;

		/** Array containing an object for each message generated by our servers while processing the request. */
		messages?: Array<string>;

		/** Array containing pickup points information. */
		pickupPoints?: Array<string>;

		/** Purchase conditions information. */
		purchaseConditions?: Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditions;

		/**
		 * Quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity?: number | null;

		/** Delivery channel selected by the customer. For example, `"delivery"` or `"pickup-in-point"`. */
		selectedDeliveryChannel?: string | null;

		/** Selected SLA. For example, `"normal"` or `"express"`. */
		selectedSla?: string | null;

		/** List of countries that the item may be shipped to. */
		shipsTo?: Array<string>;

		/** Information on available SLAs. */
		Fulfillment_simulation_external_marketplaceReturnLogisticsInfoSlas?: Array<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoSlas>;

		/** Subscription information. */
		subscriptionData?: string | null;

		/** Information on order totals. */
		Fulfillment_simulation_external_marketplaceReturnLogisticsInfoTotals?: Array<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoTotals>;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/**
		 * Index of item in items array.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex: FormControl<number | null | undefined>,

		/**
		 * Quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** Delivery channel selected by the customer. For example, `"delivery"` or `"pickup-in-point"`. */
		selectedDeliveryChannel: FormControl<string | null | undefined>,

		/** Selected SLA. For example, `"normal"` or `"express"`. */
		selectedSla: FormControl<string | null | undefined>,

		/** Subscription information. */
		subscriptionData: FormControl<string | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnLogisticsInfoFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			itemIndex: new FormControl<number | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			selectedDeliveryChannel: new FormControl<string | null | undefined>(undefined),
			selectedSla: new FormControl<string | null | undefined>(undefined),
			subscriptionData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoDeliveryChannels {

		/** Delivery channel ID. */
		id?: string | null;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoDeliveryChannelsFormProperties {

		/** Delivery channel ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnLogisticsInfoDeliveryChannelsFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoDeliveryChannelsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoItemMetadata {

		/** List of objects containing metadata on each item in the order. */
		Fulfillment_simulation_external_marketplaceReturnLogisticsInfoItemMetadataItems?: Array<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoItemMetadataItems>;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoItemMetadataFormProperties {
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnLogisticsInfoItemMetadataFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoItemMetadataFormProperties>({
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoItemMetadataItems {

		/** Assembly options information. */
		assemblyOptions?: Array<string>;

		/** Item ID. */
		id?: string | null;

		/** Seller. */
		seller?: string | null;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoItemMetadataItemsFormProperties {

		/** Item ID. */
		id: FormControl<string | null | undefined>,

		/** Seller. */
		seller: FormControl<string | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnLogisticsInfoItemMetadataItemsFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoItemMetadataItemsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			seller: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditions {

		/** List of objects containing purchase condition information on each item in the order. */
		Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditions?: Array<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditions>;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsFormProperties {
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsFormProperties>({
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditions {

		/** Item ID. */
		id?: string | null;

		/**
		 * List price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice?: number | null;

		/**
		 * Price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Seller. */
		seller?: string | null;

		/** Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order. */
		sellerChain?: Array<string>;

		/** Information on available SLAs. */
		Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlas?: Array<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlas>;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsFormProperties {

		/** Item ID. */
		id: FormControl<string | null | undefined>,

		/**
		 * List price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * Price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** Seller. */
		seller: FormControl<string | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			listPrice: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			seller: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlas {

		/** This object contains information about the delivery window available to the shopper. */
		availableDeliveryWindows?: Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasAvailableDeliveryWindows;

		/** Delivery channel. */
		deliveryChannel?: string | null;

		/** Information on each delivery ID. */
		Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryIds?: Array<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryIds>;

		/** In case of scheduled delivery, this object will contain information on the delivery window selected by the shopper. */
		deliveryWindow?: Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryWindow;

		/** SLA ID. */
		id?: string | null;

		/**
		 * List price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice?: number | null;

		/** Estimate date of delivery. */
		lockTTL?: string | null;

		/** SLA name. */
		name?: string | null;

		/**
		 * Pickup point distance.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pickupDistance?: number | null;

		/** Pickup point ID. */
		pickupPointId?: string | null;

		/** Information on the pickup store. */
		pickupStoreInfo?: Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasPickupStoreInfo;

		/** Polygon name. */
		polygonName?: string | null;

		/**
		 * Price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Shipping estimate. For instance, "three business days" will be represented as `3bd`. */
		shippingEstimate?: string | null;

		/** Shipping estimate date. */
		shippingEstimateDate?: string | null;

		/**
		 * Tax in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax?: number | null;

		/** Transit time. For instance, "three business days" is represented as `3bd`. */
		transitTime?: string | null;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasFormProperties {

		/** Delivery channel. */
		deliveryChannel: FormControl<string | null | undefined>,

		/** SLA ID. */
		id: FormControl<string | null | undefined>,

		/**
		 * List price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice: FormControl<number | null | undefined>,

		/** Estimate date of delivery. */
		lockTTL: FormControl<string | null | undefined>,

		/** SLA name. */
		name: FormControl<string | null | undefined>,

		/**
		 * Pickup point distance.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pickupDistance: FormControl<number | null | undefined>,

		/** Pickup point ID. */
		pickupPointId: FormControl<string | null | undefined>,

		/** Polygon name. */
		polygonName: FormControl<string | null | undefined>,

		/**
		 * Price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** Shipping estimate. For instance, "three business days" will be represented as `3bd`. */
		shippingEstimate: FormControl<string | null | undefined>,

		/** Shipping estimate date. */
		shippingEstimateDate: FormControl<string | null | undefined>,

		/**
		 * Tax in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax: FormControl<number | null | undefined>,

		/** Transit time. For instance, "three business days" is represented as `3bd`. */
		transitTime: FormControl<string | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasFormProperties>({
			deliveryChannel: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			listPrice: new FormControl<number | null | undefined>(undefined),
			lockTTL: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pickupDistance: new FormControl<number | null | undefined>(undefined),
			pickupPointId: new FormControl<string | null | undefined>(undefined),
			polygonName: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			shippingEstimate: new FormControl<string | null | undefined>(undefined),
			shippingEstimateDate: new FormControl<string | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
			transitTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasAvailableDeliveryWindows {

		/** Delivery window ending day and time in UTC. */
		endDateUtc?: string | null;

		/**
		 * Delivery window list price.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lisPrice?: number | null;

		/**
		 * Delivery window price.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Delivery window starting day and time in UTC. */
		startDateUtc?: string | null;

		/**
		 * Delivery window tax.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax?: number | null;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasAvailableDeliveryWindowsFormProperties {

		/** Delivery window ending day and time in UTC. */
		endDateUtc: FormControl<string | null | undefined>,

		/**
		 * Delivery window list price.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lisPrice: FormControl<number | null | undefined>,

		/**
		 * Delivery window price.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** Delivery window starting day and time in UTC. */
		startDateUtc: FormControl<string | null | undefined>,

		/**
		 * Delivery window tax.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax: FormControl<number | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasAvailableDeliveryWindowsFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasAvailableDeliveryWindowsFormProperties>({
			endDateUtc: new FormControl<string | null | undefined>(undefined),
			lisPrice: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			startDateUtc: new FormControl<string | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryIds {

		/** Courier ID. */
		courierId?: string | null;

		/** Courier name. */
		courierName?: string | null;

		/** Warehouse ID. */
		dockId?: string | null;

		/**
		 * Quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity?: number | null;

		/** Warehouse ID. */
		warehouseId?: string | null;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryIdsFormProperties {

		/** Courier ID. */
		courierId: FormControl<string | null | undefined>,

		/** Courier name. */
		courierName: FormControl<string | null | undefined>,

		/** Warehouse ID. */
		dockId: FormControl<string | null | undefined>,

		/**
		 * Quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** Warehouse ID. */
		warehouseId: FormControl<string | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryIdsFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryIdsFormProperties>({
			courierId: new FormControl<string | null | undefined>(undefined),
			courierName: new FormControl<string | null | undefined>(undefined),
			dockId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			warehouseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryWindow {

		/** Delivery window ending day and time in UTC. */
		endDateUtc?: string | null;

		/**
		 * Delivery window list price.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lisPrice?: number | null;

		/**
		 * Delivery window price.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Delivery window starting day and time in UTC. */
		startDateUtc?: string | null;

		/**
		 * Delivery window tax.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax?: number | null;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryWindowFormProperties {

		/** Delivery window ending day and time in UTC. */
		endDateUtc: FormControl<string | null | undefined>,

		/**
		 * Delivery window list price.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lisPrice: FormControl<number | null | undefined>,

		/**
		 * Delivery window price.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** Delivery window starting day and time in UTC. */
		startDateUtc: FormControl<string | null | undefined>,

		/**
		 * Delivery window tax.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax: FormControl<number | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryWindowFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryWindowFormProperties>({
			endDateUtc: new FormControl<string | null | undefined>(undefined),
			lisPrice: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			startDateUtc: new FormControl<string | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasPickupStoreInfo {

		/** Additional information. */
		additionalInfo?: string | null;

		/** Address information. */
		address?: string | null;

		/** Corresponding dock ID. */
		dockId?: string | null;

		/** Friendly name. */
		friendlyName?: string | null;

		/** Indicates whether it is the pickup store. */
		isPickupStore?: boolean | null;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasPickupStoreInfoFormProperties {

		/** Additional information. */
		additionalInfo: FormControl<string | null | undefined>,

		/** Address information. */
		address: FormControl<string | null | undefined>,

		/** Corresponding dock ID. */
		dockId: FormControl<string | null | undefined>,

		/** Friendly name. */
		friendlyName: FormControl<string | null | undefined>,

		/** Indicates whether it is the pickup store. */
		isPickupStore: FormControl<boolean | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasPickupStoreInfoFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasPickupStoreInfoFormProperties>({
			additionalInfo: new FormControl<string | null | undefined>(undefined),
			address: new FormControl<string | null | undefined>(undefined),
			dockId: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			isPickupStore: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoSlas {

		/** This object contains information about the delivery window available to the shopper. */
		availableDeliveryWindows?: Fulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasAvailableDeliveryWindows;

		/** Delivery channel. */
		deliveryChannel?: string | null;

		/** Information on each delivery ID. */
		Fulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasDeliveryIds?: Array<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasDeliveryIds>;

		/** In case of scheduled delivery, this object will contain information on the delivery window selected by the shopper. */
		deliveryWindow?: Fulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasDeliveryWindow;

		/** SLA ID. */
		id?: string | null;

		/**
		 * List price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice?: number | null;

		/** Estimate date of delivery. */
		lockTTL?: string | null;

		/** SLA name. */
		name?: string | null;

		/**
		 * Pickup point distance.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pickupDistance?: number | null;

		/** Pickup point ID. */
		pickupPointId?: string | null;

		/** Information on the pickup store. */
		pickupStoreInfo?: Fulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasPickupStoreInfo;

		/** Polygon name. */
		polygonName?: string | null;

		/**
		 * Price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Shipping estimate. For instance, "three business days" will be represented as `3bd`. */
		shippingEstimate?: string | null;

		/** Shipping estimate date. */
		shippingEstimateDate?: string | null;

		/**
		 * Tax in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax?: number | null;

		/** Transit time. For instance, "three business days" is represented as `3bd`. */
		transitTime?: string | null;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasFormProperties {

		/** Delivery channel. */
		deliveryChannel: FormControl<string | null | undefined>,

		/** SLA ID. */
		id: FormControl<string | null | undefined>,

		/**
		 * List price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice: FormControl<number | null | undefined>,

		/** Estimate date of delivery. */
		lockTTL: FormControl<string | null | undefined>,

		/** SLA name. */
		name: FormControl<string | null | undefined>,

		/**
		 * Pickup point distance.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pickupDistance: FormControl<number | null | undefined>,

		/** Pickup point ID. */
		pickupPointId: FormControl<string | null | undefined>,

		/** Polygon name. */
		polygonName: FormControl<string | null | undefined>,

		/**
		 * Price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** Shipping estimate. For instance, "three business days" will be represented as `3bd`. */
		shippingEstimate: FormControl<string | null | undefined>,

		/** Shipping estimate date. */
		shippingEstimateDate: FormControl<string | null | undefined>,

		/**
		 * Tax in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax: FormControl<number | null | undefined>,

		/** Transit time. For instance, "three business days" is represented as `3bd`. */
		transitTime: FormControl<string | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasFormProperties>({
			deliveryChannel: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			listPrice: new FormControl<number | null | undefined>(undefined),
			lockTTL: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pickupDistance: new FormControl<number | null | undefined>(undefined),
			pickupPointId: new FormControl<string | null | undefined>(undefined),
			polygonName: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			shippingEstimate: new FormControl<string | null | undefined>(undefined),
			shippingEstimateDate: new FormControl<string | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
			transitTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasAvailableDeliveryWindows {

		/** Delivery window ending day and time in UTC. */
		endDateUtc?: string | null;

		/**
		 * Delivery window list price.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lisPrice?: number | null;

		/**
		 * Delivery window price.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Delivery window starting day and time in UTC. */
		startDateUtc?: string | null;

		/**
		 * Delivery window tax.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax?: number | null;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasAvailableDeliveryWindowsFormProperties {

		/** Delivery window ending day and time in UTC. */
		endDateUtc: FormControl<string | null | undefined>,

		/**
		 * Delivery window list price.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lisPrice: FormControl<number | null | undefined>,

		/**
		 * Delivery window price.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** Delivery window starting day and time in UTC. */
		startDateUtc: FormControl<string | null | undefined>,

		/**
		 * Delivery window tax.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax: FormControl<number | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasAvailableDeliveryWindowsFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasAvailableDeliveryWindowsFormProperties>({
			endDateUtc: new FormControl<string | null | undefined>(undefined),
			lisPrice: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			startDateUtc: new FormControl<string | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasDeliveryIds {

		/** Courier ID. */
		courierId?: string | null;

		/** Courier name. */
		courierName?: string | null;

		/** Warehouse ID. */
		dockId?: string | null;

		/**
		 * Quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity?: number | null;

		/** Warehouse ID. */
		warehouseId?: string | null;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasDeliveryIdsFormProperties {

		/** Courier ID. */
		courierId: FormControl<string | null | undefined>,

		/** Courier name. */
		courierName: FormControl<string | null | undefined>,

		/** Warehouse ID. */
		dockId: FormControl<string | null | undefined>,

		/**
		 * Quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** Warehouse ID. */
		warehouseId: FormControl<string | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasDeliveryIdsFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasDeliveryIdsFormProperties>({
			courierId: new FormControl<string | null | undefined>(undefined),
			courierName: new FormControl<string | null | undefined>(undefined),
			dockId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			warehouseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasDeliveryWindow {

		/** Delivery window ending day and time in UTC. */
		endDateUtc?: string | null;

		/**
		 * Delivery window list price.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lisPrice?: number | null;

		/**
		 * Delivery window price.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Delivery window starting day and time in UTC. */
		startDateUtc?: string | null;

		/**
		 * Delivery window tax.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax?: number | null;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasDeliveryWindowFormProperties {

		/** Delivery window ending day and time in UTC. */
		endDateUtc: FormControl<string | null | undefined>,

		/**
		 * Delivery window list price.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lisPrice: FormControl<number | null | undefined>,

		/**
		 * Delivery window price.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** Delivery window starting day and time in UTC. */
		startDateUtc: FormControl<string | null | undefined>,

		/**
		 * Delivery window tax.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax: FormControl<number | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasDeliveryWindowFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasDeliveryWindowFormProperties>({
			endDateUtc: new FormControl<string | null | undefined>(undefined),
			lisPrice: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			startDateUtc: new FormControl<string | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasPickupStoreInfo {

		/** Additional information. */
		additionalInfo?: string | null;

		/** Address information. */
		address?: string | null;

		/** Corresponding dock ID. */
		dockId?: string | null;

		/** Friendly name. */
		friendlyName?: string | null;

		/** Indicates whether it is the pickup store. */
		isPickupStore?: boolean | null;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasPickupStoreInfoFormProperties {

		/** Additional information. */
		additionalInfo: FormControl<string | null | undefined>,

		/** Address information. */
		address: FormControl<string | null | undefined>,

		/** Corresponding dock ID. */
		dockId: FormControl<string | null | undefined>,

		/** Friendly name. */
		friendlyName: FormControl<string | null | undefined>,

		/** Indicates whether it is the pickup store. */
		isPickupStore: FormControl<boolean | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasPickupStoreInfoFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoSlasPickupStoreInfoFormProperties>({
			additionalInfo: new FormControl<string | null | undefined>(undefined),
			address: new FormControl<string | null | undefined>(undefined),
			dockId: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			isPickupStore: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoTotals {

		/** Total ID. */
		id?: string | null;

		/** Total name. */
		name?: string | null;

		/**
		 * Total value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnLogisticsInfoTotalsFormProperties {

		/** Total ID. */
		id: FormControl<string | null | undefined>,

		/** Total name. */
		name: FormControl<string | null | undefined>,

		/**
		 * Total value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnLogisticsInfoTotalsFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnLogisticsInfoTotalsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnPaymentData {

		/** Available accounts. */
		availableAccounts?: Array<string>;

		/** Available associations. */
		availableAssociations?: string | null;

		/** Available tokens. */
		availableTokens?: Array<string>;

		/** Array of gift card messages. */
		giftCardMessages?: Array<string>;

		/** Gift card information, if it applies to the order. */
		giftCards?: Array<string>;

		/** Installment options information. */
		installmentOptions?: Array<string>;

		/** Information on payment systems. */
		Fulfillment_simulation_external_marketplaceReturnPaymentDataPaymentSystems?: Array<Fulfillment_simulation_external_marketplaceReturnPaymentDataPaymentSystems>;

		/** Information on each payment. */
		payments?: Array<string>;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnPaymentDataFormProperties {

		/** Available associations. */
		availableAssociations: FormControl<string | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnPaymentDataFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnPaymentDataFormProperties>({
			availableAssociations: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnPaymentDataPaymentSystems {

		/** Availability of payment. */
		availablePayments?: string | null;

		/** Description. */
		description?: string | null;

		/** Indicates whether a document is shown. */
		displayDocument?: boolean | null;

		/** Payment due date. */
		dueDate?: string | null;

		/** Payment group name. */
		groupName?: string | null;

		/**
		 * Payment system ID.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Indicates whether it is custom. */
		isCustom?: boolean | null;

		/** Payment system name. */
		name?: string | null;

		/** Indicates whether a authentication is required. */
		requiresAuthentication?: boolean | null;

		/** Indicates whether a document is required. */
		requiresDocument?: boolean | null;

		/** String ID. */
		stringId?: string | null;

		/** Template. */
		template?: string | null;

		/** Payment system validator. */
		validator?: string | null;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnPaymentDataPaymentSystemsFormProperties {

		/** Availability of payment. */
		availablePayments: FormControl<string | null | undefined>,

		/** Description. */
		description: FormControl<string | null | undefined>,

		/** Indicates whether a document is shown. */
		displayDocument: FormControl<boolean | null | undefined>,

		/** Payment due date. */
		dueDate: FormControl<string | null | undefined>,

		/** Payment group name. */
		groupName: FormControl<string | null | undefined>,

		/**
		 * Payment system ID.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Indicates whether it is custom. */
		isCustom: FormControl<boolean | null | undefined>,

		/** Payment system name. */
		name: FormControl<string | null | undefined>,

		/** Indicates whether a authentication is required. */
		requiresAuthentication: FormControl<boolean | null | undefined>,

		/** Indicates whether a document is required. */
		requiresDocument: FormControl<boolean | null | undefined>,

		/** String ID. */
		stringId: FormControl<string | null | undefined>,

		/** Template. */
		template: FormControl<string | null | undefined>,

		/** Payment system validator. */
		validator: FormControl<string | null | undefined>,
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnPaymentDataPaymentSystemsFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnPaymentDataPaymentSystemsFormProperties>({
			availablePayments: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayDocument: new FormControl<boolean | null | undefined>(undefined),
			dueDate: new FormControl<string | null | undefined>(undefined),
			groupName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isCustom: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			requiresAuthentication: new FormControl<boolean | null | undefined>(undefined),
			requiresDocument: new FormControl<boolean | null | undefined>(undefined),
			stringId: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
			validator: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulation_external_marketplaceReturnRatesAndBenefitsData {

		/** List with rates and benefits identifiers. */
		rateAndBenefitsIdentifiers?: Array<string>;

		/** List with rates and benefits teasers. */
		teaser?: Array<string>;
	}
	export interface Fulfillment_simulation_external_marketplaceReturnRatesAndBenefitsDataFormProperties {
	}
	export function CreateFulfillment_simulation_external_marketplaceReturnRatesAndBenefitsDataFormGroup() {
		return new FormGroup<Fulfillment_simulation_external_marketplaceReturnRatesAndBenefitsDataFormProperties>({
		});

	}

	export interface PlaceFulfillmentOrderPostBody {

		/**
		 * Customer's profile information.
		 * Required
		 */
		clientProfileData: PlaceFulfillmentOrderPostBodyClientProfileData;

		/** Indicates whether an order is created. It must be `true` if an order is being placed with [Price divergence](https://help.vtex.com/en/tutorial/price-divergence-rule--6RlFLhD1rIRRshl83KnCjW#), otherwise the request will not work. */
		isCreatedAsync?: boolean | null;

		/**
		 * Array of objects containing information on each of the order's items.
		 * Required
		 */
		PlaceFulfillmentOrderPostBodyItems: Array<PlaceFulfillmentOrderPostBodyItems>;
		marketingData?: PlaceFulfillmentOrderPostBodyMarketingData;

		/**
		 * ID of the order in the marketplace.
		 * Required
		 */
		marketplaceOrderId: string;

		/**
		 * Value of the payment made to the marketplace.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		marketplacePaymentValue: number;

		/**
		 * Endpoint provided by the marketplace for post purchase communication. Should be an URL, containing protocol, host, path and query string (in case it applies).
		 * Required
		 */
		marketplaceServicesEndpoint: string;

		/** Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1) */
		openTextField?: string | null;

		/** In other contexts, this field tipically holds an object with payment information. However, since the payment is processed by the marketplace, it will be sent to the seller as `null` in this context. */
		paymentData?: string | null;

		/**
		 * Shipping information.
		 * Required
		 */
		shippingData: PlaceFulfillmentOrderPostBodyShippingData;
	}
	export interface PlaceFulfillmentOrderPostBodyFormProperties {

		/** Indicates whether an order is created. It must be `true` if an order is being placed with [Price divergence](https://help.vtex.com/en/tutorial/price-divergence-rule--6RlFLhD1rIRRshl83KnCjW#), otherwise the request will not work. */
		isCreatedAsync: FormControl<boolean | null | undefined>,

		/**
		 * ID of the order in the marketplace.
		 * Required
		 */
		marketplaceOrderId: FormControl<string | null | undefined>,

		/**
		 * Value of the payment made to the marketplace.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		marketplacePaymentValue: FormControl<number | null | undefined>,

		/**
		 * Endpoint provided by the marketplace for post purchase communication. Should be an URL, containing protocol, host, path and query string (in case it applies).
		 * Required
		 */
		marketplaceServicesEndpoint: FormControl<string | null | undefined>,

		/** Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1) */
		openTextField: FormControl<string | null | undefined>,

		/** In other contexts, this field tipically holds an object with payment information. However, since the payment is processed by the marketplace, it will be sent to the seller as `null` in this context. */
		paymentData: FormControl<string | null | undefined>,
	}
	export function CreatePlaceFulfillmentOrderPostBodyFormGroup() {
		return new FormGroup<PlaceFulfillmentOrderPostBodyFormProperties>({
			isCreatedAsync: new FormControl<boolean | null | undefined>(undefined),
			marketplaceOrderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			marketplacePaymentValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			marketplaceServicesEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			openTextField: new FormControl<string | null | undefined>(undefined),
			paymentData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceFulfillmentOrderPostBodyClientProfileData {

		/** Corporate document, if the customer is a legal entity. */
		corporateDocument?: string | null;

		/** Company name, if the customer is a legal entity. */
		corporateName?: string | null;

		/** Corporate phone number, if the customer is a legal entity. */
		corporatePhone?: string | null;

		/**
		 * Document informed by the customer. Validation depends on the country.
		 * Required
		 */
		document: string;

		/**
		 * Type of the document informed by the customer.
		 * Required
		 */
		documentType: string;

		/**
		 * Customer's email address.
		 * Required
		 */
		email: string;

		/**
		 * Customer's first name.
		 * Required
		 */
		firstName: string;

		/** `true` if the customer is a legal entity. */
		isCorporate?: boolean | null;

		/**
		 * Customer's last name.
		 * Required
		 */
		lastName: string;

		/** Customer's phone number. */
		phone?: string | null;

		/** State inscription, if the customer is a legal entity. */
		stateInscription?: string | null;

		/** Trade name, if the customer is a legal entity. */
		tradeName?: string | null;
	}
	export interface PlaceFulfillmentOrderPostBodyClientProfileDataFormProperties {

		/** Corporate document, if the customer is a legal entity. */
		corporateDocument: FormControl<string | null | undefined>,

		/** Company name, if the customer is a legal entity. */
		corporateName: FormControl<string | null | undefined>,

		/** Corporate phone number, if the customer is a legal entity. */
		corporatePhone: FormControl<string | null | undefined>,

		/**
		 * Document informed by the customer. Validation depends on the country.
		 * Required
		 */
		document: FormControl<string | null | undefined>,

		/**
		 * Type of the document informed by the customer.
		 * Required
		 */
		documentType: FormControl<string | null | undefined>,

		/**
		 * Customer's email address.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Customer's first name.
		 * Required
		 */
		firstName: FormControl<string | null | undefined>,

		/** `true` if the customer is a legal entity. */
		isCorporate: FormControl<boolean | null | undefined>,

		/**
		 * Customer's last name.
		 * Required
		 */
		lastName: FormControl<string | null | undefined>,

		/** Customer's phone number. */
		phone: FormControl<string | null | undefined>,

		/** State inscription, if the customer is a legal entity. */
		stateInscription: FormControl<string | null | undefined>,

		/** Trade name, if the customer is a legal entity. */
		tradeName: FormControl<string | null | undefined>,
	}
	export function CreatePlaceFulfillmentOrderPostBodyClientProfileDataFormGroup() {
		return new FormGroup<PlaceFulfillmentOrderPostBodyClientProfileDataFormProperties>({
			corporateDocument: new FormControl<string | null | undefined>(undefined),
			corporateName: new FormControl<string | null | undefined>(undefined),
			corporatePhone: new FormControl<string | null | undefined>(undefined),
			document: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			documentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isCorporate: new FormControl<boolean | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined),
			stateInscription: new FormControl<string | null | undefined>(undefined),
			tradeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceFulfillmentOrderPostBodyItems {

		/** Array containing information on attachments. */
		attachments?: Array<string>;

		/** Information on services sold along with the SKU. Example: a gift package. */
		PlaceFulfillmentOrderPostBodyItemsBundleItems?: Array<PlaceFulfillmentOrderPostBodyItemsBundleItems>;

		/**
		 * Comission.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		commission?: number | null;

		/**
		 * Freight comission
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		freightCommission?: number | null;

		/**
		 * The SKU ID.
		 * Required
		 */
		id: string;

		/** Indicates whether the order is a gift. */
		isGift?: boolean | null;

		/** Item attachment. */
		itemAttachment?: PlaceFulfillmentOrderPostBodyItemsItemAttachment;

		/** SKU measurement unit. */
		measurementUnit?: string | null;

		/**
		 * Item price within the context of the order without separating cents. For example, $24.99 is represented `2499`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order. */
		PlaceFulfillmentOrderPostBodyItemsPriceTags?: Array<PlaceFulfillmentOrderPostBodyItemsPriceTags>;

		/**
		 * The quantity of items of this specific SKU in the cart to be simulated.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;

		/**
		 * The ID of the seller responsible for this SKU. This ID can be found in your VTEX Admin.
		 * Required
		 */
		seller: string;

		/**
		 * SKU unit multiplier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unitMultiplier?: number | null;
	}
	export interface PlaceFulfillmentOrderPostBodyItemsFormProperties {

		/**
		 * Comission.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		commission: FormControl<number | null | undefined>,

		/**
		 * Freight comission
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		freightCommission: FormControl<number | null | undefined>,

		/**
		 * The SKU ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Indicates whether the order is a gift. */
		isGift: FormControl<boolean | null | undefined>,

		/** SKU measurement unit. */
		measurementUnit: FormControl<string | null | undefined>,

		/**
		 * Item price within the context of the order without separating cents. For example, $24.99 is represented `2499`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * The quantity of items of this specific SKU in the cart to be simulated.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/**
		 * The ID of the seller responsible for this SKU. This ID can be found in your VTEX Admin.
		 * Required
		 */
		seller: FormControl<string | null | undefined>,

		/**
		 * SKU unit multiplier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unitMultiplier: FormControl<number | null | undefined>,
	}
	export function CreatePlaceFulfillmentOrderPostBodyItemsFormGroup() {
		return new FormGroup<PlaceFulfillmentOrderPostBodyItemsFormProperties>({
			commission: new FormControl<number | null | undefined>(undefined),
			freightCommission: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isGift: new FormControl<boolean | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			seller: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unitMultiplier: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlaceFulfillmentOrderPostBodyItemsBundleItems {

		/**
		 * Service identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Service name. */
		name?: string | null;

		/**
		 * Service price. The last two digits are the cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Service type. */
		type?: string | null;
	}
	export interface PlaceFulfillmentOrderPostBodyItemsBundleItemsFormProperties {

		/**
		 * Service identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Service name. */
		name: FormControl<string | null | undefined>,

		/**
		 * Service price. The last two digits are the cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** Service type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePlaceFulfillmentOrderPostBodyItemsBundleItemsFormGroup() {
		return new FormGroup<PlaceFulfillmentOrderPostBodyItemsBundleItemsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceFulfillmentOrderPostBodyItemsItemAttachment {

		/** Content referring to the customization requested by the customer. */
		content?: string | null;

		/** Attachment name. */
		name?: string | null;
	}
	export interface PlaceFulfillmentOrderPostBodyItemsItemAttachmentFormProperties {

		/** Content referring to the customization requested by the customer. */
		content: FormControl<string | null | undefined>,

		/** Attachment name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePlaceFulfillmentOrderPostBodyItemsItemAttachmentFormGroup() {
		return new FormGroup<PlaceFulfillmentOrderPostBodyItemsItemAttachmentFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceFulfillmentOrderPostBodyItemsPriceTags {

		/** Price tag identifier. */
		identifier?: string | null;

		/** `true` if price tag value is applied through a percentage. */
		isPercentual?: boolean | null;

		/** Price tag name. */
		name?: string | null;

		/**
		 * Price tag value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rawValue?: number | null;

		/**
		 * Price tag raw value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface PlaceFulfillmentOrderPostBodyItemsPriceTagsFormProperties {

		/** Price tag identifier. */
		identifier: FormControl<string | null | undefined>,

		/** `true` if price tag value is applied through a percentage. */
		isPercentual: FormControl<boolean | null | undefined>,

		/** Price tag name. */
		name: FormControl<string | null | undefined>,

		/**
		 * Price tag value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rawValue: FormControl<number | null | undefined>,

		/**
		 * Price tag raw value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreatePlaceFulfillmentOrderPostBodyItemsPriceTagsFormGroup() {
		return new FormGroup<PlaceFulfillmentOrderPostBodyItemsPriceTagsFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined),
			isPercentual: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rawValue: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlaceFulfillmentOrderPostBodyMarketingData {

		/** UTM campaign */
		utmCampaign?: string | null;

		/** UTM medium. */
		utmMedium?: string | null;

		/** UTM source. */
		utmSource?: string | null;

		/** utmi_campaign (internal utm) */
		utmiCampaign?: string | null;

		/** utmi_page (internal utm) */
		utmiPage?: string | null;

		/** utmi_part (internal utm) */
		utmiPart?: string | null;
	}
	export interface PlaceFulfillmentOrderPostBodyMarketingDataFormProperties {

		/** UTM campaign */
		utmCampaign: FormControl<string | null | undefined>,

		/** UTM medium. */
		utmMedium: FormControl<string | null | undefined>,

		/** UTM source. */
		utmSource: FormControl<string | null | undefined>,

		/** utmi_campaign (internal utm) */
		utmiCampaign: FormControl<string | null | undefined>,

		/** utmi_page (internal utm) */
		utmiPage: FormControl<string | null | undefined>,

		/** utmi_part (internal utm) */
		utmiPart: FormControl<string | null | undefined>,
	}
	export function CreatePlaceFulfillmentOrderPostBodyMarketingDataFormGroup() {
		return new FormGroup<PlaceFulfillmentOrderPostBodyMarketingDataFormProperties>({
			utmCampaign: new FormControl<string | null | undefined>(undefined),
			utmMedium: new FormControl<string | null | undefined>(undefined),
			utmSource: new FormControl<string | null | undefined>(undefined),
			utmiCampaign: new FormControl<string | null | undefined>(undefined),
			utmiPage: new FormControl<string | null | undefined>(undefined),
			utmiPart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceFulfillmentOrderPostBodyShippingData {

		/** Shipping address. */
		address?: PlaceFulfillmentOrderPostBodyShippingDataAddress;

		/** Array of objects containing logistics information of each item. */
		PlaceFulfillmentOrderPostBodyShippingDataLogisticsInfo?: Array<PlaceFulfillmentOrderPostBodyShippingDataLogisticsInfo>;

		/** Indicate whether this object's information is up to date according to the order's items. An order can not be placed if `"outdated"` */
		updateStatus?: string | null;
	}
	export interface PlaceFulfillmentOrderPostBodyShippingDataFormProperties {

		/** Indicate whether this object's information is up to date according to the order's items. An order can not be placed if `"outdated"` */
		updateStatus: FormControl<string | null | undefined>,
	}
	export function CreatePlaceFulfillmentOrderPostBodyShippingDataFormGroup() {
		return new FormGroup<PlaceFulfillmentOrderPostBodyShippingDataFormProperties>({
			updateStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceFulfillmentOrderPostBodyShippingDataAddress {

		/** Address ID. */
		addressId?: string | null;

		/**
		 * Type of address. For example, `Residential` or `Pickup`, among others.
		 * Required
		 */
		addressType: string;

		/**
		 * City of the shipping address.
		 * Required
		 */
		city: string;

		/** Complement to the shipping address in case it applies. */
		complement?: string | null;

		/**
		 * Three letter ISO code of the country of the shipping address.
		 * Required
		 */
		country: string;

		/** Array with two strings with geocoordinates, first latitude, then longitude. */
		geoCoordinates?: Array<string>;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/**
		 * Number of the building, house or apartment in the shipping address.
		 * Required
		 */
		number: string;

		/**
		 * Postal Code. Validation depends on the country.
		 * Required
		 */
		postalCode: string;

		/**
		 * Name of the person who is going to receive the order.
		 * Required
		 */
		receiverName: string;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/**
		 * State of the shipping address.
		 * Required
		 */
		state: string;

		/**
		 * Street of the shipping address.
		 * Required
		 */
		street: string;
	}
	export interface PlaceFulfillmentOrderPostBodyShippingDataAddressFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/**
		 * Type of address. For example, `Residential` or `Pickup`, among others.
		 * Required
		 */
		addressType: FormControl<string | null | undefined>,

		/**
		 * City of the shipping address.
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address in case it applies. */
		complement: FormControl<string | null | undefined>,

		/**
		 * Three letter ISO code of the country of the shipping address.
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/**
		 * Number of the building, house or apartment in the shipping address.
		 * Required
		 */
		number: FormControl<string | null | undefined>,

		/**
		 * Postal Code. Validation depends on the country.
		 * Required
		 */
		postalCode: FormControl<string | null | undefined>,

		/**
		 * Name of the person who is going to receive the order.
		 * Required
		 */
		receiverName: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/**
		 * State of the shipping address.
		 * Required
		 */
		state: FormControl<string | null | undefined>,

		/**
		 * Street of the shipping address.
		 * Required
		 */
		street: FormControl<string | null | undefined>,
	}
	export function CreatePlaceFulfillmentOrderPostBodyShippingDataAddressFormGroup() {
		return new FormGroup<PlaceFulfillmentOrderPostBodyShippingDataAddressFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			receiverName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			street: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PlaceFulfillmentOrderPostBodyShippingDataLogisticsInfo {

		/** In case of scheduled delivery, this object will contain information on the delivery window selected by the shopper. */
		deliveryWindow?: PlaceFulfillmentOrderPostBodyShippingDataLogisticsInfoDeliveryWindow;

		/**
		 * Index of the item in the `items` array, starting from 0.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex: number;

		/** Logistics reservation waiting time. */
		lockTTL?: string | null;

		/**
		 * Shipping price for the item. Does not account for the whole order's shipping price.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: number;

		/**
		 * Selected shipping option
		 * Required
		 */
		selectedSla: string;

		/** Estimated time until delivery for the item. */
		shippingEstimate?: string | null;
	}
	export interface PlaceFulfillmentOrderPostBodyShippingDataLogisticsInfoFormProperties {

		/**
		 * Index of the item in the `items` array, starting from 0.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex: FormControl<number | null | undefined>,

		/** Logistics reservation waiting time. */
		lockTTL: FormControl<string | null | undefined>,

		/**
		 * Shipping price for the item. Does not account for the whole order's shipping price.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Selected shipping option
		 * Required
		 */
		selectedSla: FormControl<string | null | undefined>,

		/** Estimated time until delivery for the item. */
		shippingEstimate: FormControl<string | null | undefined>,
	}
	export function CreatePlaceFulfillmentOrderPostBodyShippingDataLogisticsInfoFormGroup() {
		return new FormGroup<PlaceFulfillmentOrderPostBodyShippingDataLogisticsInfoFormProperties>({
			itemIndex: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lockTTL: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			selectedSla: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shippingEstimate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceFulfillmentOrderPostBodyShippingDataLogisticsInfoDeliveryWindow {

		/** Delivery window ending day and time in UTC. */
		endDateUtc?: string | null;

		/**
		 * Delivery window list price.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lisPrice?: number | null;

		/**
		 * Delivery window price.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Delivery window starting day and time in UTC. */
		startDateUtc?: string | null;

		/**
		 * Delivery window tax.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax?: number | null;
	}
	export interface PlaceFulfillmentOrderPostBodyShippingDataLogisticsInfoDeliveryWindowFormProperties {

		/** Delivery window ending day and time in UTC. */
		endDateUtc: FormControl<string | null | undefined>,

		/**
		 * Delivery window list price.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lisPrice: FormControl<number | null | undefined>,

		/**
		 * Delivery window price.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** Delivery window starting day and time in UTC. */
		startDateUtc: FormControl<string | null | undefined>,

		/**
		 * Delivery window tax.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax: FormControl<number | null | undefined>,
	}
	export function CreatePlaceFulfillmentOrderPostBodyShippingDataLogisticsInfoDeliveryWindowFormGroup() {
		return new FormGroup<PlaceFulfillmentOrderPostBodyShippingDataLogisticsInfoDeliveryWindowFormProperties>({
			endDateUtc: new FormControl<string | null | undefined>(undefined),
			lisPrice: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			startDateUtc: new FormControl<string | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AuthorizeDispatchForFulfillmentOrderPostBody {

		/** ID of the order in the marketplace. It is the same as the `orderId` without the `afilliateId` at the beginning. For instance, if the `orderId` is `"MKP-123"`, the `marketplaceOrderId` is `"123"`. */
		marketplaceOrderId?: string | null;
	}
	export interface AuthorizeDispatchForFulfillmentOrderPostBodyFormProperties {

		/** ID of the order in the marketplace. It is the same as the `orderId` without the `afilliateId` at the beginning. For instance, if the `orderId` is `"MKP-123"`, the `marketplaceOrderId` is `"123"`. */
		marketplaceOrderId: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizeDispatchForFulfillmentOrderPostBodyFormGroup() {
		return new FormGroup<AuthorizeDispatchForFulfillmentOrderPostBodyFormProperties>({
			marketplaceOrderId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulationPostBody {

		/** ISO 3-digit code of the country where the delivery address is located.  This field is mandatory, for shopping carts simulations, where both Country and Postal Code are required. This field should be sent as `null` for storefront simulations, where the information is not necessary. */
		country?: string | null;

		/** Geographic coordinates of the delivery address. This may be used instead of the postalCode, in case the marketplace is configured to accept geolocation. Example of value: `[-22.9443504,-43.1825635]`. */
		geoCoordinates?: Array<string>;

		/** Array containing the cart items. */
		items?: Array<FulfillmentItem>;

		/**
		 * Delivery address postal code. This field is mandatory for shopping carts simulations, where both Country and Postal Code are required. This field should be sent as `null` for storefront simulations, where the information is not necessary.
		 * Required
		 */
		postalCode: string;

		/** Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) associated to the seller account created. */
		sc?: string | null;
	}
	export interface Fulfillment_simulationPostBodyFormProperties {

		/** ISO 3-digit code of the country where the delivery address is located.  This field is mandatory, for shopping carts simulations, where both Country and Postal Code are required. This field should be sent as `null` for storefront simulations, where the information is not necessary. */
		country: FormControl<string | null | undefined>,

		/**
		 * Delivery address postal code. This field is mandatory for shopping carts simulations, where both Country and Postal Code are required. This field should be sent as `null` for storefront simulations, where the information is not necessary.
		 * Required
		 */
		postalCode: FormControl<string | null | undefined>,

		/** Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) associated to the seller account created. */
		sc: FormControl<string | null | undefined>,
	}
	export function CreateFulfillment_simulationPostBodyFormGroup() {
		return new FormGroup<Fulfillment_simulationPostBodyFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Fulfillment_simulationReturn {

		/**
		 * ISO 3-digit code of the country where the delivery address is located. If you don’t want to send it, use the value null.
		 * Required
		 */
		country: string;

		/**
		 * Contains the data about each SKU in the cart.
		 * Required
		 */
		Fulfillment_simulationReturnItems: Array<Fulfillment_simulationReturnItems>;

		/**
		 * Array that contains the data regarding the delivery methods and stock for each item. If all products are unavailable, this field should return empty.
		 * Required
		 */
		Fulfillment_simulationReturnLogisticsInfo: Array<Fulfillment_simulationReturnLogisticsInfo>;

		/**
		 * Postal code of the delivery address. This field is mandatory, for shopping carts simulations, where both Country and Postal Code are required. This field should be sent as `null` for storefront simulations, where the information is not necessary.
		 * Required
		 */
		postalCode: string;
	}
	export interface Fulfillment_simulationReturnFormProperties {

		/**
		 * ISO 3-digit code of the country where the delivery address is located. If you don’t want to send it, use the value null.
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Postal code of the delivery address. This field is mandatory, for shopping carts simulations, where both Country and Postal Code are required. This field should be sent as `null` for storefront simulations, where the information is not necessary.
		 * Required
		 */
		postalCode: FormControl<string | null | undefined>,
	}
	export function CreateFulfillment_simulationReturnFormGroup() {
		return new FormGroup<Fulfillment_simulationReturnFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Fulfillment_simulationReturnItems {

		/**
		 * SKU ID
		 * Required
		 */
		id: string;

		/**
		 * List price. It’s the amount presented to the customer as a “previous” price that has been lowered due to a discount. Don’t separate the decimal places. The last two digits are the cents.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice: number;

		/**
		 * SKU’s measurement unit.
		 * Required
		 */
		measurementUnit: string;

		/**
		 * Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [​​Payments in VTEX marketplaces](https://help.vtex.com/en/tutorial/payments-in-vtex-marketplaces--2kYOfWCZYweJkYl18bw9yD) article to know more.
		 * Required
		 */
		merchantName: string;

		/**
		 * Services that may be offered for this SKU. example are the assembly of a piece of furniture or warranty. In case these information are sent, the following fields are mandatory. If you don’t want to send it, use an empty array.
		 * Required
		 */
		Fulfillment_simulationReturnItemsOfferings: Array<Fulfillment_simulationReturnItemsOfferings>;

		/**
		 * Actual selling price of the SKU. Don’t separate the decimal places. The last two digits are the cents.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: number;

		/**
		 * List with the promotions applied to the SKU.
		 * Required
		 */
		priceTags: Array<string>;

		/**
		 * Expiration date of the SKU price. Example: `2014-03-01T22:58:28.143`. In case you don’t want to send it, use the value null.
		 * Required
		 */
		priceValidUntil: string;

		/**
		 * Quantity of the item. The seller should send the quantity that was indicated in the request, or the maximum quantity possible.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;

		/**
		 * Position of this item in the original array (request).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestIndex: number;

		/**
		 * ID of the seller as registered in VTEX. You should send the same value that came in the request.
		 * Required
		 */
		seller: string;

		/**
		 * SKU unit multiplier. The default value is 1.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unitMultiplier: number;
	}
	export interface Fulfillment_simulationReturnItemsFormProperties {

		/**
		 * SKU ID
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * List price. It’s the amount presented to the customer as a “previous” price that has been lowered due to a discount. Don’t separate the decimal places. The last two digits are the cents.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * SKU’s measurement unit.
		 * Required
		 */
		measurementUnit: FormControl<string | null | undefined>,

		/**
		 * Name of the marketplace, used to guide payments. This field should be nulled if the marketplace is responsible for processing payments. Check out our [​​Payments in VTEX marketplaces](https://help.vtex.com/en/tutorial/payments-in-vtex-marketplaces--2kYOfWCZYweJkYl18bw9yD) article to know more.
		 * Required
		 */
		merchantName: FormControl<string | null | undefined>,

		/**
		 * Actual selling price of the SKU. Don’t separate the decimal places. The last two digits are the cents.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Expiration date of the SKU price. Example: `2014-03-01T22:58:28.143`. In case you don’t want to send it, use the value null.
		 * Required
		 */
		priceValidUntil: FormControl<string | null | undefined>,

		/**
		 * Quantity of the item. The seller should send the quantity that was indicated in the request, or the maximum quantity possible.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/**
		 * Position of this item in the original array (request).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestIndex: FormControl<number | null | undefined>,

		/**
		 * ID of the seller as registered in VTEX. You should send the same value that came in the request.
		 * Required
		 */
		seller: FormControl<string | null | undefined>,

		/**
		 * SKU unit multiplier. The default value is 1.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unitMultiplier: FormControl<number | null | undefined>,
	}
	export function CreateFulfillment_simulationReturnItemsFormGroup() {
		return new FormGroup<Fulfillment_simulationReturnItemsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			listPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			measurementUnit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			merchantName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			priceValidUntil: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			requestIndex: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			seller: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unitMultiplier: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Fulfillment_simulationReturnItemsOfferings {

		/**
		 * Service ID.
		 * Required
		 */
		id: string;

		/**
		 * Service name.
		 * Required
		 */
		name: string;

		/**
		 * Service price. The last two digits are the cents.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: number;

		/**
		 * Type of the service.
		 * Required
		 */
		type: string;
	}
	export interface Fulfillment_simulationReturnItemsOfferingsFormProperties {

		/**
		 * Service ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Service name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Service price. The last two digits are the cents.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Type of the service.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFulfillment_simulationReturnItemsOfferingsFormGroup() {
		return new FormGroup<Fulfillment_simulationReturnItemsOfferingsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Fulfillment_simulationReturnLogisticsInfo {

		/**
		 * Array contains the stock balance for each channel.
		 * Required
		 */
		Fulfillment_simulationReturnLogisticsInfoDeliveryChannels: Array<Fulfillment_simulationReturnLogisticsInfoDeliveryChannels>;

		/**
		 * Position of this item in the original array, i.e., in the array that came with the request. This index is what identifies which SKU you are referring to for each object inside the logisticsInfo.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex: number;

		/**
		 * Quantity of the item. The seller should send the quantity that was indicated in the request, or the maximum quantity possible.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;

		/**
		 * ISO 3-digit code of the countries to where the SKU is delivered.
		 * Required
		 */
		shipsTo: Array<string>;

		/**
		 * Contains the available delivery methods.
		 * Required
		 */
		Fulfillment_simulationReturnLogisticsInfoSlas: Array<Fulfillment_simulationReturnLogisticsInfoSlas>;

		/**
		 * Stock balance of the SKU.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		stockBalance: number;
	}
	export interface Fulfillment_simulationReturnLogisticsInfoFormProperties {

		/**
		 * Position of this item in the original array, i.e., in the array that came with the request. This index is what identifies which SKU you are referring to for each object inside the logisticsInfo.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex: FormControl<number | null | undefined>,

		/**
		 * Quantity of the item. The seller should send the quantity that was indicated in the request, or the maximum quantity possible.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/**
		 * Stock balance of the SKU.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		stockBalance: FormControl<number | null | undefined>,
	}
	export function CreateFulfillment_simulationReturnLogisticsInfoFormGroup() {
		return new FormGroup<Fulfillment_simulationReturnLogisticsInfoFormProperties>({
			itemIndex: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			stockBalance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Fulfillment_simulationReturnLogisticsInfoDeliveryChannels {

		/**
		 * Identifies the channel type whose stock balance will be informed in the next field. Possible values are: pickup-in-point for pickup point and delivery for regular delivery.
		 * Required
		 */
		id: string;

		/**
		 * Stock balance for the channel type selected in the previous field.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		stockBalance: number;
	}
	export interface Fulfillment_simulationReturnLogisticsInfoDeliveryChannelsFormProperties {

		/**
		 * Identifies the channel type whose stock balance will be informed in the next field. Possible values are: pickup-in-point for pickup point and delivery for regular delivery.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Stock balance for the channel type selected in the previous field.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		stockBalance: FormControl<number | null | undefined>,
	}
	export function CreateFulfillment_simulationReturnLogisticsInfoDeliveryChannelsFormGroup() {
		return new FormGroup<Fulfillment_simulationReturnLogisticsInfoDeliveryChannelsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stockBalance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Fulfillment_simulationReturnLogisticsInfoSlas {

		/**
		 * Contains the delivery windows available for the SLA.
		 * Required
		 */
		Fulfillment_simulationReturnLogisticsInfoSlasAvailableDeliveryWindows: Array<Fulfillment_simulationReturnLogisticsInfoSlasAvailableDeliveryWindows>;

		/**
		 * Type of delivery channel. The values that are possible are: `pickup-in-point` for pickup point and `delivery` for regular delivery.
		 * Required
		 */
		deliveryChannel: string;

		/**
		 * Identifier of the delivery method.
		 * Required
		 */
		id: string;

		/**
		 * Name of the delivery method.
		 * Required
		 */
		name: string;

		/**
		 * Contains the data about the pickup point. If you don’t want to send this, use the value `null`.
		 * Required
		 */
		pickupStoreInfo: Fulfillment_simulationReturnLogisticsInfoSlasPickupStoreInfo;

		/**
		 * Delivery price. The two last digits are the cents.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: number;

		/**
		 * Time estimated for the delivery. Possible suffixes are `bd` for *business day* , `h` for *hours*, and `m` for *minutes*.
		 * Required
		 */
		shippingEstimate: string;
	}
	export interface Fulfillment_simulationReturnLogisticsInfoSlasFormProperties {

		/**
		 * Type of delivery channel. The values that are possible are: `pickup-in-point` for pickup point and `delivery` for regular delivery.
		 * Required
		 */
		deliveryChannel: FormControl<string | null | undefined>,

		/**
		 * Identifier of the delivery method.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Name of the delivery method.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Delivery price. The two last digits are the cents.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Time estimated for the delivery. Possible suffixes are `bd` for *business day* , `h` for *hours*, and `m` for *minutes*.
		 * Required
		 */
		shippingEstimate: FormControl<string | null | undefined>,
	}
	export function CreateFulfillment_simulationReturnLogisticsInfoSlasFormGroup() {
		return new FormGroup<Fulfillment_simulationReturnLogisticsInfoSlasFormProperties>({
			deliveryChannel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			shippingEstimate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Fulfillment_simulationReturnLogisticsInfoSlasAvailableDeliveryWindows {

		/**
		 * End date of the delivery window.
		 * Required
		 */
		endDateUtc: string;

		/**
		 * Extra price for scheduled delivery. The last two digits are the cents.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: number;

		/**
		 * Start date of the delivery window.
		 * Required
		 */
		startDateUtc: string;
	}
	export interface Fulfillment_simulationReturnLogisticsInfoSlasAvailableDeliveryWindowsFormProperties {

		/**
		 * End date of the delivery window.
		 * Required
		 */
		endDateUtc: FormControl<string | null | undefined>,

		/**
		 * Extra price for scheduled delivery. The last two digits are the cents.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Start date of the delivery window.
		 * Required
		 */
		startDateUtc: FormControl<string | null | undefined>,
	}
	export function CreateFulfillment_simulationReturnLogisticsInfoSlasAvailableDeliveryWindowsFormGroup() {
		return new FormGroup<Fulfillment_simulationReturnLogisticsInfoSlasAvailableDeliveryWindowsFormProperties>({
			endDateUtc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startDateUtc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Fulfillment_simulationReturnLogisticsInfoSlasPickupStoreInfo {

		/**
		 * Description or extra information about the pickup point.
		 * Required
		 */
		additionalInfo: string;

		/**
		 * Address data of the pickup point.
		 * Required
		 */
		address: Fulfillment_simulationReturnLogisticsInfoSlasPickupStoreInfoAddress;

		/**
		 * Friendly name of the pickup point.
		 * Required
		 */
		friendlyName: string;

		/**
		 * `true` if it is a pickup point.
		 * Required
		 */
		isPickupStore: boolean;
	}
	export interface Fulfillment_simulationReturnLogisticsInfoSlasPickupStoreInfoFormProperties {

		/**
		 * Description or extra information about the pickup point.
		 * Required
		 */
		additionalInfo: FormControl<string | null | undefined>,

		/**
		 * Friendly name of the pickup point.
		 * Required
		 */
		friendlyName: FormControl<string | null | undefined>,

		/**
		 * `true` if it is a pickup point.
		 * Required
		 */
		isPickupStore: FormControl<boolean | null | undefined>,
	}
	export function CreateFulfillment_simulationReturnLogisticsInfoSlasPickupStoreInfoFormGroup() {
		return new FormGroup<Fulfillment_simulationReturnLogisticsInfoSlasPickupStoreInfoFormProperties>({
			additionalInfo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			friendlyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isPickupStore: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Fulfillment_simulationReturnLogisticsInfoSlasPickupStoreInfoAddress {

		/**
		 * Identifies the pickup point.
		 * Required
		 */
		addressId: string;

		/**
		 * The possible value is pickup.
		 * Required
		 */
		addressType: string;

		/**
		 * Pickup point's city.
		 * Required
		 */
		city: string;

		/**
		 * Complement of the pickup point address.
		 * Required
		 */
		complement: string;

		/**
		 * 3-digit ISO code of the country where the pickup point is located.
		 * Required
		 */
		country: string;

		/**
		 * Contains the geographic coordinates of the pickup point.
		 * Required
		 */
		geoCoordinates: Array<number>;

		/**
		 * Neighborhood where the pickup point is located.
		 * Required
		 */
		neighborhood: string;

		/**
		 * Address number of the pickup point.
		 * Required
		 */
		number: string;

		/**
		 * Postal code of the pickup point. This field is mandatory, for shopping carts simulations, where both Country and Postal Code are required. This field should be sent as `null` for storefront simulations, where the information is not necessary.
		 * Required
		 */
		postalCode: string;

		/**
		 * Name of the person who will receive the product. May be sent as `null`.
		 * Required
		 */
		receiverName: string;

		/**
		 * A reference for the pickup point address.
		 * Required
		 */
		reference: string;

		/**
		 * Pickup point's state.
		 * Required
		 */
		state: string;

		/**
		 * Street where the pickup point is located.
		 * Required
		 */
		street: string;
	}
	export interface Fulfillment_simulationReturnLogisticsInfoSlasPickupStoreInfoAddressFormProperties {

		/**
		 * Identifies the pickup point.
		 * Required
		 */
		addressId: FormControl<string | null | undefined>,

		/**
		 * The possible value is pickup.
		 * Required
		 */
		addressType: FormControl<string | null | undefined>,

		/**
		 * Pickup point's city.
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * Complement of the pickup point address.
		 * Required
		 */
		complement: FormControl<string | null | undefined>,

		/**
		 * 3-digit ISO code of the country where the pickup point is located.
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Neighborhood where the pickup point is located.
		 * Required
		 */
		neighborhood: FormControl<string | null | undefined>,

		/**
		 * Address number of the pickup point.
		 * Required
		 */
		number: FormControl<string | null | undefined>,

		/**
		 * Postal code of the pickup point. This field is mandatory, for shopping carts simulations, where both Country and Postal Code are required. This field should be sent as `null` for storefront simulations, where the information is not necessary.
		 * Required
		 */
		postalCode: FormControl<string | null | undefined>,

		/**
		 * Name of the person who will receive the product. May be sent as `null`.
		 * Required
		 */
		receiverName: FormControl<string | null | undefined>,

		/**
		 * A reference for the pickup point address.
		 * Required
		 */
		reference: FormControl<string | null | undefined>,

		/**
		 * Pickup point's state.
		 * Required
		 */
		state: FormControl<string | null | undefined>,

		/**
		 * Street where the pickup point is located.
		 * Required
		 */
		street: FormControl<string | null | undefined>,
	}
	export function CreateFulfillment_simulationReturnLogisticsInfoSlasPickupStoreInfoAddressFormGroup() {
		return new FormGroup<Fulfillment_simulationReturnLogisticsInfoSlasPickupStoreInfoAddressFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			addressType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			complement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			neighborhood: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			receiverName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			street: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Mkp_order_cancellationPostBody {

		/**
		 * Identifies the order. The seller should use this ID to trigger the cancellation of the corresponding order.
		 * Required
		 */
		marketplaceOrderId: string;
	}
	export interface Mkp_order_cancellationPostBodyFormProperties {

		/**
		 * Identifies the order. The seller should use this ID to trigger the cancellation of the corresponding order.
		 * Required
		 */
		marketplaceOrderId: FormControl<string | null | undefined>,
	}
	export function CreateMkp_order_cancellationPostBodyFormGroup() {
		return new FormGroup<Mkp_order_cancellationPostBodyFormProperties>({
			marketplaceOrderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Authorize_fulfillmentPostBody {

		/**
		 * Identifies the order. The seller should use this ID to trigger the fulfillment process of the corresponding order.
		 * Required
		 */
		marketplaceOrderId: string;
	}
	export interface Authorize_fulfillmentPostBodyFormProperties {

		/**
		 * Identifies the order. The seller should use this ID to trigger the fulfillment process of the corresponding order.
		 * Required
		 */
		marketplaceOrderId: FormControl<string | null | undefined>,
	}
	export function CreateAuthorize_fulfillmentPostBodyFormGroup() {
		return new FormGroup<Authorize_fulfillmentPostBodyFormProperties>({
			marketplaceOrderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Cancel_order_in_marketplacePostBody {

		/**
		 * Insert here the reason for the order's cancellation.
		 * Required
		 */
		reason: string;
	}
	export interface Cancel_order_in_marketplacePostBodyFormProperties {

		/**
		 * Insert here the reason for the order's cancellation.
		 * Required
		 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateCancel_order_in_marketplacePostBodyFormGroup() {
		return new FormGroup<Cancel_order_in_marketplacePostBodyFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Send_invoicePostBody {

		/** Courier, if available on invoice. */
		courier?: string | null;

		/**
		 * Invoice number
		 * Required
		 */
		invoiceNumber: string;

		/**
		 * Invoice value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		invoiceValue?: number | null;

		/** Issuance date. */
		issuanceDate?: string | null;

		/**
		 * Array containing the order items.
		 * Required
		 */
		Send_invoicePostBodyItems: Array<Send_invoicePostBodyItems>;

		/** Tracking number. */
		trackingNumber?: string | null;

		/** Tracking URL. */
		trackingUrl?: string | null;

		/**
		 * Indicates the type of the invoice. Use `"Output"` for regular orders and `"Input"` for returns.
		 * Required
		 */
		type: string;
	}
	export interface Send_invoicePostBodyFormProperties {

		/** Courier, if available on invoice. */
		courier: FormControl<string | null | undefined>,

		/**
		 * Invoice number
		 * Required
		 */
		invoiceNumber: FormControl<string | null | undefined>,

		/**
		 * Invoice value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		invoiceValue: FormControl<number | null | undefined>,

		/** Issuance date. */
		issuanceDate: FormControl<string | null | undefined>,

		/** Tracking number. */
		trackingNumber: FormControl<string | null | undefined>,

		/** Tracking URL. */
		trackingUrl: FormControl<string | null | undefined>,

		/**
		 * Indicates the type of the invoice. Use `"Output"` for regular orders and `"Input"` for returns.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSend_invoicePostBodyFormGroup() {
		return new FormGroup<Send_invoicePostBodyFormProperties>({
			courier: new FormControl<string | null | undefined>(undefined),
			invoiceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			invoiceValue: new FormControl<number | null | undefined>(undefined),
			issuanceDate: new FormControl<string | null | undefined>(undefined),
			trackingNumber: new FormControl<string | null | undefined>(undefined),
			trackingUrl: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Send_invoicePostBodyItems {

		/**
		 * SKU ID.
		 * Required
		 */
		id: string;

		/**
		 * Price of the item.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: number;

		/**
		 * Quantity of items of the SKU in the cart.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;
	}
	export interface Send_invoicePostBodyItemsFormProperties {

		/**
		 * SKU ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Price of the item.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Quantity of items of the SKU in the cart.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateSend_invoicePostBodyItemsFormGroup() {
		return new FormGroup<Send_invoicePostBodyItemsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Send_tracking_informationPostBody {

		/** Courier. */
		courier?: string | null;

		/** Date of order dispatch. */
		dispatchedDate?: string | null;

		/** Tracking number. */
		trackingNumber?: string | null;

		/** Tracking URL. */
		trackingUrl?: string | null;
	}
	export interface Send_tracking_informationPostBodyFormProperties {

		/** Courier. */
		courier: FormControl<string | null | undefined>,

		/** Date of order dispatch. */
		dispatchedDate: FormControl<string | null | undefined>,

		/** Tracking number. */
		trackingNumber: FormControl<string | null | undefined>,

		/** Tracking URL. */
		trackingUrl: FormControl<string | null | undefined>,
	}
	export function CreateSend_tracking_informationPostBodyFormGroup() {
		return new FormGroup<Send_tracking_informationPostBodyFormProperties>({
			courier: new FormControl<string | null | undefined>(undefined),
			dispatchedDate: new FormControl<string | null | undefined>(undefined),
			trackingNumber: new FormControl<string | null | undefined>(undefined),
			trackingUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Update_tracking_statusPostBody {

		/** Array containing information on each tracking event received. */
		Update_tracking_statusPostBodyEvents?: Array<Update_tracking_statusPostBodyEvents>;

		/**
		 * Indicates if order has been delivered. `false` if it is in transit.
		 * Required
		 */
		isDelivered: boolean;
	}
	export interface Update_tracking_statusPostBodyFormProperties {

		/**
		 * Indicates if order has been delivered. `false` if it is in transit.
		 * Required
		 */
		isDelivered: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdate_tracking_statusPostBodyFormGroup() {
		return new FormGroup<Update_tracking_statusPostBodyFormProperties>({
			isDelivered: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Update_tracking_statusPostBodyEvents {

		/** City where the event ocurred. */
		city?: string | null;

		/** Date when event ocurred. */
		date?: string | null;

		/** Description of the event. */
		description?: string | null;

		/** State where the event ocurred. */
		state?: string | null;
	}
	export interface Update_tracking_statusPostBodyEventsFormProperties {

		/** City where the event ocurred. */
		city: FormControl<string | null | undefined>,

		/** Date when event ocurred. */
		date: FormControl<string | null | undefined>,

		/** Description of the event. */
		description: FormControl<string | null | undefined>,

		/** State where the event ocurred. */
		state: FormControl<string | null | undefined>,
	}
	export function CreateUpdate_tracking_statusPostBodyEventsFormGroup() {
		return new FormGroup<Update_tracking_statusPostBodyEventsFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

}

