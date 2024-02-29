import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelGiftCardTransactionRequest {

		/** Required */
		requestId: string;

		/**
		 * Required
		 * Type: double
		 */
		value: number;
	}
	export interface CancelGiftCardTransactionRequestFormProperties {

		/** Required */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateCancelGiftCardTransactionRequestFormGroup() {
		return new FormGroup<CancelGiftCardTransactionRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Cart {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		discounts: number;

		/**
		 * Required
		 * Type: double
		 */
		grandTotal: number;

		/** Required */
		items: Array<Item>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemsTotal: number;

		/** Required */
		redemptionCode: string;

		/** Required */
		relationName: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		shipping: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		taxes: number;
	}
	export interface CartFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		discounts: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		grandTotal: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemsTotal: FormControl<number | null | undefined>,

		/** Required */
		redemptionCode: FormControl<string | null | undefined>,

		/** Required */
		relationName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		shipping: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		taxes: FormControl<number | null | undefined>,
	}
	export function CreateCartFormGroup() {
		return new FormGroup<CartFormProperties>({
			discounts: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			grandTotal: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			itemsTotal: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			redemptionCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			relationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shipping: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			taxes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Item {

		/** Required */
		id: string;

		/** Required */
		name: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: number;

		/** Required */
		productId: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;

		/** Required */
		refId: string;
	}
	export interface ItemFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** Required */
		productId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** Required */
		refId: FormControl<string | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			productId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			refId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Cart1 {

		/**
		 * Required
		 * Type: double
		 */
		discounts: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		grandTotal: number;

		/** Required */
		items: Array<Item2>;

		/**
		 * Required
		 * Type: double
		 */
		itemsTotal: number;

		/**
		 * Required
		 * Type: double
		 */
		shipping: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		taxes: number;
	}
	export interface Cart1FormProperties {

		/**
		 * Required
		 * Type: double
		 */
		discounts: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		grandTotal: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		itemsTotal: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		shipping: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		taxes: FormControl<number | null | undefined>,
	}
	export function CreateCart1FormGroup() {
		return new FormGroup<Cart1FormProperties>({
			discounts: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			grandTotal: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			itemsTotal: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			shipping: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			taxes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Item2 {

		/**
		 * Required
		 * Type: double
		 */
		discount: number;

		/** Required */
		id: string;

		/** Required */
		name: string;

		/**
		 * Required
		 * Type: double
		 */
		price: number;

		/** Required */
		priceTags: Array<PriceTag>;

		/** Required */
		productId: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;

		/** Required */
		refId: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		shippingDiscount: number;

		/**
		 * Required
		 * Type: double
		 */
		value: number;
	}
	export interface Item2FormProperties {

		/**
		 * Required
		 * Type: double
		 */
		discount: FormControl<number | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		price: FormControl<number | null | undefined>,

		/** Required */
		productId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** Required */
		refId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		shippingDiscount: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateItem2FormGroup() {
		return new FormGroup<Item2FormProperties>({
			discount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			productId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			refId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shippingDiscount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PriceTag {

		/** Required */
		name: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: number;
	}
	export interface PriceTagFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreatePriceTagFormGroup() {
		return new FormGroup<PriceTagFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Client {

		/** Required */
		document: string;

		/** Required */
		email: string;

		/** Required */
		id: string;
	}
	export interface ClientFormProperties {

		/** Required */
		document: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateClientFormGroup() {
		return new FormGroup<ClientFormProperties>({
			document: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ClientProfile {

		/** Required */
		birthDate: string;

		/** Required */
		document: string;

		/** Required */
		email: string;

		/** Required */
		firstName: string;

		/** Required */
		isCorporate: boolean;

		/** Required */
		lastName: string;

		/** Required */
		phone: string;
	}
	export interface ClientProfileFormProperties {

		/** Required */
		birthDate: FormControl<string | null | undefined>,

		/** Required */
		document: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,

		/** Required */
		firstName: FormControl<string | null | undefined>,

		/** Required */
		isCorporate: FormControl<boolean | null | undefined>,

		/** Required */
		lastName: FormControl<string | null | undefined>,

		/** Required */
		phone: FormControl<string | null | undefined>,
	}
	export function CreateClientProfileFormGroup() {
		return new FormGroup<ClientProfileFormProperties>({
			birthDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			document: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isCorporate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateGiftCardRequest {

		/**
		 * The caption of the Giftcard.
		 * Required
		 */
		caption: string;

		/**
		 * It must be in the format `YYYY-MM-DDThh:mm:ss.fff`.
		 * Required
		 */
		expiringDate: string;

		/** The Giftcard balance can be changed. */
		multipleCredits?: boolean | null;

		/** The Giftcard can be used to make new purchases until its value is completely used. */
		multipleRedemptions?: boolean | null;

		/**
		 * The client's ID.
		 * Required
		 */
		profileId: string;

		/**
		 * Represents the relationship between the client and the store.
		 * Required
		 */
		relationName: string;

		/** The Giftcard can only be used for a specified client's ID. */
		restrictedToOwner?: boolean | null;
	}
	export interface CreateGiftCardRequestFormProperties {

		/**
		 * The caption of the Giftcard.
		 * Required
		 */
		caption: FormControl<string | null | undefined>,

		/**
		 * It must be in the format `YYYY-MM-DDThh:mm:ss.fff`.
		 * Required
		 */
		expiringDate: FormControl<string | null | undefined>,

		/** The Giftcard balance can be changed. */
		multipleCredits: FormControl<boolean | null | undefined>,

		/** The Giftcard can be used to make new purchases until its value is completely used. */
		multipleRedemptions: FormControl<boolean | null | undefined>,

		/**
		 * The client's ID.
		 * Required
		 */
		profileId: FormControl<string | null | undefined>,

		/**
		 * Represents the relationship between the client and the store.
		 * Required
		 */
		relationName: FormControl<string | null | undefined>,

		/** The Giftcard can only be used for a specified client's ID. */
		restrictedToOwner: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateGiftCardRequestFormGroup() {
		return new FormGroup<CreateGiftCardRequestFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expiringDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			multipleCredits: new FormControl<boolean | null | undefined>(undefined),
			multipleRedemptions: new FormControl<boolean | null | undefined>(undefined),
			profileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			relationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			restrictedToOwner: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateGiftCardTransactionRequest {

		/** Required */
		description: string;

		/** Required */
		operation: string;
		orderInfo?: OrderInfo;

		/** Required */
		redemptionCode: string;

		/** Required */
		redemptionToken: string;

		/** Required */
		requestId: string;

		/**
		 * Required
		 * Type: decimal
		 */
		value: number;
	}
	export interface CreateGiftCardTransactionRequestFormProperties {

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		operation: FormControl<string | null | undefined>,

		/** Required */
		redemptionCode: FormControl<string | null | undefined>,

		/** Required */
		redemptionToken: FormControl<string | null | undefined>,

		/** Required */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: decimal
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateCreateGiftCardTransactionRequestFormGroup() {
		return new FormGroup<CreateGiftCardTransactionRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			redemptionCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			redemptionToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OrderInfo {
		cart?: Cart1;
		clientProfile?: ClientProfile;
		orderId?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sequence?: number | null;
		shipping?: Shipping;
	}
	export interface OrderInfoFormProperties {
		orderId: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sequence: FormControl<number | null | undefined>,
	}
	export function CreateOrderInfoFormGroup() {
		return new FormGroup<OrderInfoFormProperties>({
			orderId: new FormControl<string | null | undefined>(undefined),
			sequence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Shipping {

		/** Required */
		city: string;

		/** Required */
		complement: string;

		/** Required */
		country: string;

		/** Required */
		neighborhood: string;

		/** Required */
		number: string;

		/** Required */
		postalCode: string;

		/** Required */
		receiverName: string;

		/** Required */
		reference: string;

		/** Required */
		state: string;

		/** Required */
		street: string;
	}
	export interface ShippingFormProperties {

		/** Required */
		city: FormControl<string | null | undefined>,

		/** Required */
		complement: FormControl<string | null | undefined>,

		/** Required */
		country: FormControl<string | null | undefined>,

		/** Required */
		neighborhood: FormControl<string | null | undefined>,

		/** Required */
		number: FormControl<string | null | undefined>,

		/** Required */
		postalCode: FormControl<string | null | undefined>,

		/** Required */
		receiverName: FormControl<string | null | undefined>,

		/** Required */
		reference: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<string | null | undefined>,

		/** Required */
		street: FormControl<string | null | undefined>,
	}
	export function CreateShippingFormGroup() {
		return new FormGroup<ShippingFormProperties>({
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

	export interface GetGiftCardusingJSONRequest {

		/** Required */
		cart: Cart;

		/** Required */
		client: Client;
	}
	export interface GetGiftCardusingJSONRequestFormProperties {
	}
	export function CreateGetGiftCardusingJSONRequestFormGroup() {
		return new FormGroup<GetGiftCardusingJSONRequestFormProperties>({
		});

	}

	export interface Item1 {

		/** Required */
		_self: Self;

		/** Required */
		id: string;
	}
	export interface Item1FormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateItem1FormGroup() {
		return new FormGroup<Item1FormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Self {

		/** Required */
		href: string;
	}
	export interface SelfFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,
	}
	export function CreateSelfFormGroup() {
		return new FormGroup<SelfFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Paging {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		perPage: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface PagingFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pages: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		perPage: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePagingFormGroup() {
		return new FormGroup<PagingFormProperties>({
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pages: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			perPage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SettleGiftCardTransactionRequest {

		/** Required */
		requestId: string;

		/**
		 * Required
		 * Type: double
		 */
		value: number;
	}
	export interface SettleGiftCardTransactionRequestFormProperties {

		/** Required */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateSettleGiftCardTransactionRequestFormGroup() {
		return new FormGroup<SettleGiftCardTransactionRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Transactions {

		/** Required */
		href: string;
	}
	export interface TransactionsFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,
	}
	export function CreateTransactionsFormGroup() {
		return new FormGroup<TransactionsFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Response {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		balance: number;

		/** Required */
		caption: string;

		/** Required */
		emissionDate: string;

		/** Required */
		expiringDate: string;

		/** Required */
		id: string;

		/** Required */
		redemptionCode: string;

		/** Required */
		redemptionToken: string;

		/** Required */
		relationName: string;

		/** Required */
		transactions: Transactions;
	}
	export interface ResponseFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		balance: FormControl<number | null | undefined>,

		/** Required */
		caption: FormControl<string | null | undefined>,

		/** Required */
		emissionDate: FormControl<string | null | undefined>,

		/** Required */
		expiringDate: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		redemptionCode: FormControl<string | null | undefined>,

		/** Required */
		redemptionToken: FormControl<string | null | undefined>,

		/** Required */
		relationName: FormControl<string | null | undefined>,
	}
	export function CreateResponseFormGroup() {
		return new FormGroup<ResponseFormProperties>({
			balance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			caption: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			emissionDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expiringDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			redemptionCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			redemptionToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			relationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Response2 {

		/** Required */
		items: Array<Item1>;

		/** Required */
		paging: Paging;
	}
	export interface Response2FormProperties {
	}
	export function CreateResponse2FormGroup() {
		return new FormGroup<Response2FormProperties>({
		});

	}

	export interface Response3 {

		/** Required */
		_self: Self;

		/** Required */
		id: string;
	}
	export interface Response3FormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateResponse3FormGroup() {
		return new FormGroup<Response3FormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Response5 {

		/** Required */
		date: string;

		/** Required */
		description: string;

		/** Required */
		redemptionMode: string;

		/**
		 * Required
		 * Type: double
		 */
		value: number;
	}
	export interface Response5FormProperties {

		/** Required */
		date: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		redemptionMode: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateResponse5FormGroup() {
		return new FormGroup<Response5FormProperties>({
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			redemptionMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Response6 {

		/** Required */
		date: string;

		/** Required */
		oid: string;

		/**
		 * Required
		 * Type: double
		 */
		value: number;
	}
	export interface Response6FormProperties {

		/** Required */
		date: FormControl<string | null | undefined>,

		/** Required */
		oid: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateResponse6FormGroup() {
		return new FormGroup<Response6FormProperties>({
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			oid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Response7 {

		/** Required */
		date: string;

		/** Required */
		id: string;

		/**
		 * Required
		 * Type: double
		 */
		value: number;
	}
	export interface Response7FormProperties {

		/** Required */
		date: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateResponse7FormGroup() {
		return new FormGroup<Response7FormProperties>({
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get GiftCard using JSON
		 * Returns the giftcards based on the cart data.
		 * Post giftcards/_search
		 */
		GetGiftCardusingJSON(requestBody: GetGiftCardusingJSONRequest): Observable<Response2> {
			return this.http.post<Response2>(this.baseUri + 'giftcards/_search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get GiftCard by ID
		 * Returns associated data for a specified giftcardId.
		 * Get giftcards/{giftCardID}
		 */
		GetGiftCardbyID(giftCardID: string): Observable<Response> {
			return this.http.get<Response>(this.baseUri + 'giftcards/' + (giftCardID == null ? '' : encodeURIComponent(giftCardID)), {});
		}

		/**
		 * Get GiftCard Transactions
		 * Returns all transaction of a giftcard.
		 * Get giftcards/{giftCardID}/transactions
		 */
		GetGiftCardTransactions(giftCardID: string): Observable<Array<Response3>> {
			return this.http.get<Array<Response3>>(this.baseUri + 'giftcards/' + (giftCardID == null ? '' : encodeURIComponent(giftCardID)) + '/transactions', {});
		}

		/**
		 * Create GiftCard Transaction
		 * Register a new giftcard transaction and authorize the item reservation.
		 * Post giftcards/{giftCardID}/transactions
		 */
		CreateGiftCardTransaction(giftCardID: string, requestBody: CreateGiftCardTransactionRequest): Observable<Response3> {
			return this.http.post<Response3>(this.baseUri + 'giftcards/' + (giftCardID == null ? '' : encodeURIComponent(giftCardID)) + '/transactions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get GiftCard Transaction by ID
		 * Get giftcards/{giftCardID}/transactions/{transactionID}
		 */
		GetGiftCardTransactionbyID(giftCardID: string, transactionID: string): Observable<Response5> {
			return this.http.get<Response5>(this.baseUri + 'giftcards/' + (giftCardID == null ? '' : encodeURIComponent(giftCardID)) + '/transactions/' + (transactionID == null ? '' : encodeURIComponent(transactionID)), {});
		}

		/**
		 * Get Transaction Authorizations
		 * Returns the giftcard transaction authorizations.
		 * Get giftcards/{giftCardID}/transactions/{transactionID}/authorization
		 */
		GetTransactionAuthorizations(giftCardID: string, transactionID: string): Observable<Response6> {
			return this.http.get<Response6>(this.baseUri + 'giftcards/' + (giftCardID == null ? '' : encodeURIComponent(giftCardID)) + '/transactions/' + (transactionID == null ? '' : encodeURIComponent(transactionID)) + '/authorization', {});
		}

		/**
		 * Get Transaction Cancellations
		 * Returns the giftcard transaction cancellations.
		 * Get giftcards/{giftCardID}/transactions/{transactionID}/cancellations
		 */
		GetTransactionCancellations(giftCardID: string, transactionID: string): Observable<Array<Response7>> {
			return this.http.get<Array<Response7>>(this.baseUri + 'giftcards/' + (giftCardID == null ? '' : encodeURIComponent(giftCardID)) + '/transactions/' + (transactionID == null ? '' : encodeURIComponent(transactionID)) + '/cancellations', {});
		}

		/**
		 * Cancel GiftCard Transaction
		 * Creates a cancellation in the transaction. Cancel a item reservation or create a refund.
		 * Post giftcards/{giftCardID}/transactions/{transactionID}/cancellations
		 */
		CancelGiftCardTransaction(giftCardID: string, transactionID: string, requestBody: CancelGiftCardTransactionRequest): Observable<Response6> {
			return this.http.post<Response6>(this.baseUri + 'giftcards/' + (giftCardID == null ? '' : encodeURIComponent(giftCardID)) + '/transactions/' + (transactionID == null ? '' : encodeURIComponent(transactionID)) + '/cancellations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Transaction Settlements
		 * Returns the giftcard transaction settlements.
		 * Get giftcards/{giftCardID}/transactions/{transactionID}/settlements
		 */
		GetTransactionSettlements(giftCardID: string, transactionID: string): Observable<Array<Response6>> {
			return this.http.get<Array<Response6>>(this.baseUri + 'giftcards/' + (giftCardID == null ? '' : encodeURIComponent(giftCardID)) + '/transactions/' + (transactionID == null ? '' : encodeURIComponent(transactionID)) + '/settlements', {});
		}

		/**
		 * Settle GiftCard Transaction
		 * Creates a giftcard transaction settlement.
		 * Post giftcards/{giftCardID}/transactions/{transactionID}/settlements
		 */
		SettleGiftCardTransaction(giftCardID: string, transactionID: string, requestBody: SettleGiftCardTransactionRequest): Observable<Response6> {
			return this.http.post<Response6>(this.baseUri + 'giftcards/' + (giftCardID == null ? '' : encodeURIComponent(giftCardID)) + '/transactions/' + (transactionID == null ? '' : encodeURIComponent(transactionID)) + '/settlements', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

