import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Cart {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		discounts: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
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
		 * Type: int, -2,147,483,648 to 2,147,483,647
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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		discounts: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		grandTotal: number;

		/** Required */
		items: Array<Item1>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemsTotal: number;

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
	export interface Cart1FormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		discounts: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		grandTotal: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemsTotal: FormControl<number | null | undefined>,

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
	export function CreateCart1FormGroup() {
		return new FormGroup<Cart1FormProperties>({
			discounts: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			grandTotal: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			itemsTotal: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			shipping: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			taxes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Item1 {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		discount: number;

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
		priceTags: Array<string>;

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
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: number;
	}
	export interface Item1FormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		discount: FormControl<number | null | undefined>,

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

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		shippingDiscount: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateItem1FormGroup() {
		return new FormGroup<Item1FormProperties>({
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

	export interface Cart2 {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		discounts: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
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
	export interface Cart2FormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		discounts: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
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
	export function CreateCart2FormGroup() {
		return new FormGroup<Cart2FormProperties>({
			discounts: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			grandTotal: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			itemsTotal: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			redemptionCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			relationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shipping: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			taxes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
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
		documentType: string;

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
		documentType: FormControl<string | null | undefined>,

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
			documentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isCorporate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateGiftCardCancellationTransactionRequest {

		/** Required */
		requestId: string;

		/**
		 * Required
		 * Type: double
		 */
		value: number;
	}
	export interface CreateGiftCardCancellationTransactionRequestFormProperties {

		/** Required */
		requestId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateCreateGiftCardCancellationTransactionRequestFormGroup() {
		return new FormGroup<CreateGiftCardCancellationTransactionRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateGiftCardSettlementTransactionRequest {

		/** Required */
		cart: Cart2;

		/** Required */
		client: Client;
	}
	export interface CreateGiftCardSettlementTransactionRequestFormProperties {
	}
	export function CreateCreateGiftCardSettlementTransactionRequestFormGroup() {
		return new FormGroup<CreateGiftCardSettlementTransactionRequestFormProperties>({
		});

	}

	export interface CreateGiftCardTransactionRequest {

		/** Required */
		description: string;

		/** Required */
		operation: string;

		/** Required */
		orderInfo: OrderInfo;

		/** Required */
		redemptionCode: string;

		/** Required */
		redemptionToken: string;

		/** Required */
		requestId: string;

		/**
		 * Required
		 * Type: double
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
		 * Type: double
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

		/** Required */
		cart: Cart1;

		/** Required */
		clientProfile: ClientProfile;

		/** Required */
		orderId: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sequence: number;

		/** Required */
		shipping: Shipping;
	}
	export interface OrderInfoFormProperties {

		/** Required */
		orderId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sequence: FormControl<number | null | undefined>,
	}
	export function CreateOrderInfoFormGroup() {
		return new FormGroup<OrderInfoFormProperties>({
			orderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sequence: new FormControl<number | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateGiftCardinGiftCardProviderRequest {

		/** Required */
		caption: string;

		/** Required */
		emissionDate: string;

		/** Required */
		expiringDate: string;

		/** Required */
		multipleCredits: boolean;

		/** Required */
		multipleRedemptions: boolean;

		/** Required */
		profileId: string;

		/** Required */
		relationName: string;

		/** Required */
		restrictedToOwner: boolean;
	}
	export interface CreateGiftCardinGiftCardProviderRequestFormProperties {

		/** Required */
		caption: FormControl<string | null | undefined>,

		/** Required */
		emissionDate: FormControl<string | null | undefined>,

		/** Required */
		expiringDate: FormControl<string | null | undefined>,

		/** Required */
		multipleCredits: FormControl<boolean | null | undefined>,

		/** Required */
		multipleRedemptions: FormControl<boolean | null | undefined>,

		/** Required */
		profileId: FormControl<string | null | undefined>,

		/** Required */
		relationName: FormControl<string | null | undefined>,

		/** Required */
		restrictedToOwner: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateGiftCardinGiftCardProviderRequestFormGroup() {
		return new FormGroup<CreateGiftCardinGiftCardProviderRequestFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			emissionDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expiringDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			multipleCredits: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			multipleRedemptions: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			profileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			relationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			restrictedToOwner: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateGiftCardProviderbyIDRequest {

		/** Credential provided by the merchant that VTEX will use for identification */
		appKey?: string | null;

		/** Credential provided by the merchant that VTEX will use for identification */
		appToken?: string | null;

		/**
		 * It says if it is possible to cancel the transaction, generated through the provider
		 * Required
		 */
		cancelEnabled: boolean;

		/**
		 * Provider's authentication
		 * Required
		 */
		oauthProvider: string;

		/**
		 * Related to the pre-authorization that can happen on the transaction generated through the provider
		 * Required
		 */
		preAuthEnabled: boolean;

		/**
		 * URL from the provider
		 * Required
		 */
		serviceUrl: string;
	}
	export interface CreateUpdateGiftCardProviderbyIDRequestFormProperties {

		/** Credential provided by the merchant that VTEX will use for identification */
		appKey: FormControl<string | null | undefined>,

		/** Credential provided by the merchant that VTEX will use for identification */
		appToken: FormControl<string | null | undefined>,

		/**
		 * It says if it is possible to cancel the transaction, generated through the provider
		 * Required
		 */
		cancelEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Provider's authentication
		 * Required
		 */
		oauthProvider: FormControl<string | null | undefined>,

		/**
		 * Related to the pre-authorization that can happen on the transaction generated through the provider
		 * Required
		 */
		preAuthEnabled: FormControl<boolean | null | undefined>,

		/**
		 * URL from the provider
		 * Required
		 */
		serviceUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateGiftCardProviderbyIDRequestFormGroup() {
		return new FormGroup<CreateUpdateGiftCardProviderbyIDRequestFormProperties>({
			appKey: new FormControl<string | null | undefined>(undefined),
			appToken: new FormControl<string | null | undefined>(undefined),
			cancelEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			oauthProvider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			preAuthEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			serviceUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetGiftCardfromGiftCardProviderRequest {

		/** Required */
		cart: Cart;

		/** Required */
		client: Client;
	}
	export interface GetGiftCardfromGiftCardProviderRequestFormProperties {
	}
	export function CreateGetGiftCardfromGiftCardProviderRequestFormGroup() {
		return new FormGroup<GetGiftCardfromGiftCardProviderRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List All GiftCard Providers
		 * Returns a collection of giftcard providers from a store.
		 * Get giftcardproviders
		 */
		ListAllGiftCardProviders(): Observable<string> {
			return this.http.get(this.baseUri + 'giftcardproviders', { responseType: 'text' });
		}

		/**
		 * Delete GiftCard Provider by ID
		 * Delete a giftcard provider from a store.
		 * Delete giftcardproviders/{giftCardProviderID}
		 * @param {string} giftCardProviderID Gift Card provider's ID.
		 */
		DeleteGiftCardProviderbyID(giftCardProviderID: string): Observable<string> {
			return this.http.delete(this.baseUri + 'giftcardproviders/' + (giftCardProviderID == null ? '' : encodeURIComponent(giftCardProviderID)), { responseType: 'text' });
		}

		/**
		 * Get GiftCard from GiftCard Provider by ID
		 * Returns a specific giftcard from a giftcard provider.
		 * Get giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}
		 * @param {string} giftCardProviderID Gift Card provider's ID.
		 * @param {string} giftCardID Gift Card ID.
		 */
		GetGiftCardfromGiftCardProviderbyID(giftCardProviderID: string, giftCardID: string): Observable<string> {
			return this.http.get(this.baseUri + 'giftcardproviders/' + (giftCardProviderID == null ? '' : encodeURIComponent(giftCardProviderID)) + '/giftcards/' + (giftCardID == null ? '' : encodeURIComponent(giftCardID)), { responseType: 'text' });
		}

		/**
		 * List All GiftCard Transactions
		 * Return all transaction from a giftcard.
		 * Get giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions
		 * @param {string} giftCardProviderID Gift Card provider's ID.
		 * @param {string} giftCardID Gift Card ID.
		 */
		ListAllGiftCardTransactions(giftCardProviderID: string, giftCardID: string): Observable<string> {
			return this.http.get(this.baseUri + 'giftcardproviders/' + (giftCardProviderID == null ? '' : encodeURIComponent(giftCardProviderID)) + '/giftcards/' + (giftCardID == null ? '' : encodeURIComponent(giftCardID)) + '/transactions', { responseType: 'text' });
		}

		/**
		 * List All GiftCard Cancellation Transactions
		 * Returns a collection of cancellation transactions from a giftcard.
		 * Get giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{tId}/cancellations
		 * @param {string} giftCardProviderID Gift Card provider's ID.
		 * @param {string} giftCardID Gift Card ID.
		 * @param {string} tId Transaction ID generated by the provider. It is different from the `transactionID` generated by VTEX.
		 */
		ListAllGiftCardCancellationTransactions(giftCardProviderID: string, giftCardID: string, tId: string): Observable<string> {
			return this.http.get(this.baseUri + 'giftcardproviders/' + (giftCardProviderID == null ? '' : encodeURIComponent(giftCardProviderID)) + '/giftcards/' + (giftCardID == null ? '' : encodeURIComponent(giftCardID)) + '/transactions/' + (tId == null ? '' : encodeURIComponent(tId)) + '/cancellations', { responseType: 'text' });
		}

		/**
		 * List All GiftCard Settlement Transactions
		 * Returns a collection of settlement transactions from a giftcard.
		 * Get giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{tId}/settlements
		 * @param {string} giftCardProviderID Gift Card provider's ID.
		 * @param {string} giftCardID Gift Card ID.
		 * @param {string} tId Transaction ID generated by the provider. It is different from the `transactionID` generated by VTEX.
		 */
		ListAllGiftCardSettlementTransactions(giftCardProviderID: string, giftCardID: string, tId: string): Observable<string> {
			return this.http.get(this.baseUri + 'giftcardproviders/' + (giftCardProviderID == null ? '' : encodeURIComponent(giftCardProviderID)) + '/giftcards/' + (giftCardID == null ? '' : encodeURIComponent(giftCardID)) + '/transactions/' + (tId == null ? '' : encodeURIComponent(tId)) + '/settlements', { responseType: 'text' });
		}

		/**
		 * Get GiftCard Transaction by ID
		 * Returns a specific transaction from a giftcard.
		 * Get giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{transactionID}
		 * @param {string} giftCardProviderID Gift Card provider's ID.
		 * @param {string} giftCardID Gift Card ID.
		 * @param {string} transactionID Gift Card transaction ID.
		 */
		GetGiftCardTransactionbyID(giftCardProviderID: string, giftCardID: string, transactionID: string): Observable<string> {
			return this.http.get(this.baseUri + 'giftcardproviders/' + (giftCardProviderID == null ? '' : encodeURIComponent(giftCardProviderID)) + '/giftcards/' + (giftCardID == null ? '' : encodeURIComponent(giftCardID)) + '/transactions/' + (transactionID == null ? '' : encodeURIComponent(transactionID)), { responseType: 'text' });
		}

		/**
		 * Get GiftCard Authorization Transaction
		 * Returns the transaction authorization info.
		 * Get giftcardproviders/{giftCardProviderID}/giftcards/{giftCardID}/transactions/{transactionID}/authorization
		 * @param {string} giftCardProviderID Gift Card provider's ID.
		 * @param {string} giftCardID Gift Card ID.
		 * @param {string} transactionID Gift Card transaction ID.
		 */
		GetGiftCardAuthorizationTransaction(giftCardProviderID: string, giftCardID: string, transactionID: string): Observable<string> {
			return this.http.get(this.baseUri + 'giftcardproviders/' + (giftCardProviderID == null ? '' : encodeURIComponent(giftCardProviderID)) + '/giftcards/' + (giftCardID == null ? '' : encodeURIComponent(giftCardID)) + '/transactions/' + (transactionID == null ? '' : encodeURIComponent(transactionID)) + '/authorization', { responseType: 'text' });
		}

		/**
		 * Get GiftCard Provider by ID
		 * Returns a giftcard provider from a store.
		 * Get giftcardproviders/{giftCardProviderId}
		 * @param {string} giftCardProviderId Gift Card provider's ID.
		 */
		GetGiftCardProviderbyID(giftCardProviderId: string): Observable<string> {
			return this.http.get(this.baseUri + 'giftcardproviders/' + (giftCardProviderId == null ? '' : encodeURIComponent(giftCardProviderId)), { responseType: 'text' });
		}
	}

}

