import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Item {

		/**
		 * The SKU ID.
		 * Required
		 */
		id: string;

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
	}
	export interface ItemFormProperties {

		/**
		 * The SKU ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

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
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			seller: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OrderFormSimulationRequest {

		/** Required */
		country: string;

		/**
		 * Array containing information about the SKUs inside the cart to be simulated.
		 * Required
		 */
		items: Array<Item>;
	}
	export interface OrderFormSimulationRequestFormProperties {

		/** Required */
		country: FormControl<string | null | undefined>,
	}
	export function CreateOrderFormSimulationRequestFormGroup() {
		return new FormGroup<OrderFormSimulationRequestFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Payment Configuration object */
	export interface PaymentConfiguration {

		/** By default (when `false`), on a multi-seller purchase is on the run, a simple intersection with installments options configured by every seller will be available. When `true`, this option allows a more complex but flexible installment option, since it considers max installments of every seller configuration, even if those don't match. Installment values ​​may not be equal in this case. */
		allowInstallmentsMerge?: boolean | null;

		/**
		 * Determines whether pre-authorized payments require authentication
		 * Required
		 */
		requiresAuthenticationForPreAuthorizedPaymentOption: boolean;
	}

	/** Payment Configuration object */
	export interface PaymentConfigurationFormProperties {

		/** By default (when `false`), on a multi-seller purchase is on the run, a simple intersection with installments options configured by every seller will be available. When `true`, this option allows a more complex but flexible installment option, since it considers max installments of every seller configuration, even if those don't match. Installment values ​​may not be equal in this case. */
		allowInstallmentsMerge: FormControl<boolean | null | undefined>,

		/**
		 * Determines whether pre-authorized payments require authentication
		 * Required
		 */
		requiresAuthenticationForPreAuthorizedPaymentOption: FormControl<boolean | null | undefined>,
	}
	export function CreatePaymentConfigurationFormGroup() {
		return new FormGroup<PaymentConfigurationFormProperties>({
			allowInstallmentsMerge: new FormControl<boolean | null | undefined>(undefined),
			requiresAuthenticationForPreAuthorizedPaymentOption: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PriceChangeRequest {

		/**
		 * The new price of the item.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: number;
	}
	export interface PriceChangeRequestFormProperties {

		/**
		 * The new price of the item.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,
	}
	export function CreatePriceChangeRequestFormGroup() {
		return new FormGroup<PriceChangeRequestFormProperties>({
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetsinglecustomfieldvalueRequest {

		/**
		 * The value you want to set to the specified field.
		 * Required
		 */
		value: string;
	}
	export interface SetsinglecustomfieldvalueRequestFormProperties {

		/**
		 * The value you want to set to the specified field.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSetsinglecustomfieldvalueRequestFormGroup() {
		return new FormGroup<SetsinglecustomfieldvalueRequestFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateorderFormconfigurationRequest {

		/**
		 * Allows the editing of SKU prices right in the cart.
		 * Required
		 */
		allowManualPrice: boolean;

		/**
		 * On the same purchase, allows the selection of items from multiple delivery channels.
		 * Required
		 */
		allowMultipleDeliveries: boolean;

		/**
		 * Array of objects containing Apps configuration information.
		 * Required
		 */
		UpdateorderFormconfigurationRequestApps: Array<UpdateorderFormconfigurationRequestApps>;

		/**
		 * Number of price digits.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		decimalDigitsPrecision: number;

		/** Allows, on a first purchase, masking client's data. It could be useful when a shared cart is used and the client doesn't want to share its data. */
		maskFirstPurchaseData?: boolean | null;

		/**
		 * Allows the input of a limit of white label sellers involved on the cart.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxNumberOfWhiteLabelSellers?: number | null;

		/**
		 * Minimum SKU quantity by cart.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimumQuantityAccumulatedForItems: number;

		/**
		 * Minimum cart value.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimumValueAccumulated: number;

		/**
		 * Payment Configuration object
		 * Required
		 */
		paymentConfiguration: PaymentConfiguration;

		/** If you want to apply a first installment discount to a particular payment system, set this field to that payment system's ID. Learn more: [Configuring a discount for orders prepaid in full](https://help.vtex.com/en/tutorial/configurar-desconto-de-preco-a-vista--7Lfcj9Wb5dpYfA2gKkACIt). */
		paymentSystemToCheckFirstInstallment?: string | null;

		/**
		 * Configures reCAPTCHA validation for the account, defining in which situations the shopper will be prompted to validate a purchase with reCAPTCHA. Learn more about [reCAPTCHA validation for VTEX stores](https://help.vtex.com/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP)
		 * Possible values are:
		 * - `"never"`: no purchases are validated with reCAPTCHA.
		 * - `"always"`: every purchase is validated with reCAPTCHA.
		 * - `"vtexCriteria"`: only some purchases are validated with reCAPTCHA in order to minimize friction and improve shopping experience. VTEX’s algorithm determines which sessions are trustworthy and which should be validated with reCAPTCHA. This is the recommended option.
		 */
		recaptchaValidation?: string | null;

		/**
		 * External tax service configuration.
		 * Required
		 */
		taxConfiguration: UpdateorderFormconfigurationRequestTaxConfiguration;
	}
	export interface UpdateorderFormconfigurationRequestFormProperties {

		/**
		 * Allows the editing of SKU prices right in the cart.
		 * Required
		 */
		allowManualPrice: FormControl<boolean | null | undefined>,

		/**
		 * On the same purchase, allows the selection of items from multiple delivery channels.
		 * Required
		 */
		allowMultipleDeliveries: FormControl<boolean | null | undefined>,

		/**
		 * Number of price digits.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		decimalDigitsPrecision: FormControl<number | null | undefined>,

		/** Allows, on a first purchase, masking client's data. It could be useful when a shared cart is used and the client doesn't want to share its data. */
		maskFirstPurchaseData: FormControl<boolean | null | undefined>,

		/**
		 * Allows the input of a limit of white label sellers involved on the cart.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxNumberOfWhiteLabelSellers: FormControl<number | null | undefined>,

		/**
		 * Minimum SKU quantity by cart.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimumQuantityAccumulatedForItems: FormControl<number | null | undefined>,

		/**
		 * Minimum cart value.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimumValueAccumulated: FormControl<number | null | undefined>,

		/** If you want to apply a first installment discount to a particular payment system, set this field to that payment system's ID. Learn more: [Configuring a discount for orders prepaid in full](https://help.vtex.com/en/tutorial/configurar-desconto-de-preco-a-vista--7Lfcj9Wb5dpYfA2gKkACIt). */
		paymentSystemToCheckFirstInstallment: FormControl<string | null | undefined>,

		/**
		 * Configures reCAPTCHA validation for the account, defining in which situations the shopper will be prompted to validate a purchase with reCAPTCHA. Learn more about [reCAPTCHA validation for VTEX stores](https://help.vtex.com/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP)
		 * Possible values are:
		 * - `"never"`: no purchases are validated with reCAPTCHA.
		 * - `"always"`: every purchase is validated with reCAPTCHA.
		 * - `"vtexCriteria"`: only some purchases are validated with reCAPTCHA in order to minimize friction and improve shopping experience. VTEX’s algorithm determines which sessions are trustworthy and which should be validated with reCAPTCHA. This is the recommended option.
		 */
		recaptchaValidation: FormControl<string | null | undefined>,
	}
	export function CreateUpdateorderFormconfigurationRequestFormGroup() {
		return new FormGroup<UpdateorderFormconfigurationRequestFormProperties>({
			allowManualPrice: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			allowMultipleDeliveries: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			decimalDigitsPrecision: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			maskFirstPurchaseData: new FormControl<boolean | null | undefined>(undefined),
			maxNumberOfWhiteLabelSellers: new FormControl<number | null | undefined>(undefined),
			minimumQuantityAccumulatedForItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minimumValueAccumulated: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			paymentSystemToCheckFirstInstallment: new FormControl<string | null | undefined>(undefined),
			recaptchaValidation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateorderFormconfigurationRequestApps {

		/** Array of fields available to the app. */
		fields?: Array<string>;

		/** App ID. */
		id?: string | null;

		/**
		 * App major version.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		major?: number | null;
	}
	export interface UpdateorderFormconfigurationRequestAppsFormProperties {

		/** App ID. */
		id: FormControl<string | null | undefined>,

		/**
		 * App major version.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		major: FormControl<number | null | undefined>,
	}
	export function CreateUpdateorderFormconfigurationRequestAppsFormGroup() {
		return new FormGroup<UpdateorderFormconfigurationRequestAppsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			major: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateorderFormconfigurationRequestTaxConfiguration {

		/** Custom data ID sent to the tax system. */
		appId?: string | null;

		/** Authorization header. */
		authorizationHeader?: string | null;

		/** Endpoint URL. */
		url?: string | null;
	}
	export interface UpdateorderFormconfigurationRequestTaxConfigurationFormProperties {

		/** Custom data ID sent to the tax system. */
		appId: FormControl<string | null | undefined>,

		/** Authorization header. */
		authorizationHeader: FormControl<string | null | undefined>,

		/** Endpoint URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateUpdateorderFormconfigurationRequestTaxConfigurationFormGroup() {
		return new FormGroup<UpdateorderFormconfigurationRequestTaxConfigurationFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			authorizationHeader: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WaitingTime {

		/**
		 * Number of days after order cancelation by a seller, during which another seller may be assigned to fulfill the order.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		waitingTime: number;
	}
	export interface WaitingTimeFormProperties {

		/**
		 * Number of days after order cancelation by a seller, during which another seller may be assigned to fulfill the order.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		waitingTime: FormControl<number | null | undefined>,
	}
	export function CreateWaitingTimeFormGroup() {
		return new FormGroup<WaitingTimeFormProperties>({
			waitingTime: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Process order
		 * Order processing callback request, which is made after an order's payment is approved.
		 * > This request has to be made until five minutes after the [Place order](https://developers.vtex.com/docs/api-reference/checkout-api#put-/api/checkout/pub/orders) or [Place order from existing cart](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/transaction) request has been made, or else, the order will not be processed.
		 * Post api/checkout/pub/gatewayCallback/{orderGroup}
		 * @param {string} orderGroup Order group. It is the part of the `orderId` that comes before the `-`. For example, the `orderGroup` of the order `123456789-01` is `123456789`.
		 * @return {void} OK
		 */
		ProcessOrder(orderGroup: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/checkout/pub/gatewayCallback/' + (orderGroup == null ? '' : encodeURIComponent(orderGroup)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get current or create a new cart
		 * You can use this request to get your current shopping cart information (`orderFormId`) or to create a new cart.
		 * **Important**: To create a new empty shopping cart you need to send this request with the query param `forceNewCart=true`.
		 * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` obtained in response is the identification code of the newly created cart.
		 * > This request has a time out of 45 seconds.
		 * Get api/checkout/pub/orderForm
		 * @param {boolean} forceNewCart Use this query parameter to create a new empty shopping cart.
		 * @return {void} OK
		 */
		CreateANewCart(forceNewCart: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/checkout/pub/orderForm?forceNewCart=' + forceNewCart, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get cart information by ID
		 * Use this request to get all information associated to a given shopping  cart.
		 * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
		 * > This request has a time out of 45 seconds.
		 * Get api/checkout/pub/orderForm/{orderFormId}
		 * @param {string} orderFormId ID of the orderForm corresponding to the cart whose information you want to retrieve.
		 * @param {boolean} refreshOutdatedData It is possible to use the [Update cart items request](https://developers.vtex.com/vtex-rest-api/reference/cart-update#itemsupdate) so as to allow outdated information in the `orderForm`, which may improve performance in some cases. To guarantee that all cart information is updated, send this request with this parameter as `true`. We recommend doing this in the final stages of the shopping experience, starting from the checkout page.
		 * @return {void} 
		 */
		GetCartInformationById(orderFormId: string, refreshOutdatedData: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/checkout/pub/orderForm/' + (orderFormId == null ? '' : encodeURIComponent(orderFormId)) + '&refreshOutdatedData=' + refreshOutdatedData, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add client preferences
		 * Use this request to include client preferences information to a given shopping cart.
		 * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
		 * > This request has a time out of 12 seconds.
		 * Post api/checkout/pub/orderForm/{orderFormId}/attachments/clientPreferencesData
		 * @param {string} orderFormId ID of the orderForm that will receive client profile information.
		 * @return {any} OK
		 */
		AddClientPreferences(orderFormId: string, requestBody: AddClientPreferencesPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/checkout/pub/orderForm/' + (orderFormId == null ? '' : encodeURIComponent(orderFormId)) + '/attachments/clientPreferencesData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add client profile
		 * Use this request to include client profile information to a given shopping cart.
		 * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
		 * > This request has a time out of 12 seconds.
		 * >⚠️ The authentication of this endpoint can change depending on the customer context. If you are modifying information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.
		 * Post api/checkout/pub/orderForm/{orderFormId}/attachments/clientProfileData
		 * @param {string} orderFormId ID of the orderForm that will receive client profile information.
		 * @return {void} OK
		 */
		AddClientProfile(orderFormId: string, requestBody: AddClientProfilePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/checkout/pub/orderForm/' + (orderFormId == null ? '' : encodeURIComponent(orderFormId)) + '/attachments/clientProfileData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add marketing data
		 * Use this request to include marketing information to a given shopping cart.
		 * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
		 * > This request has a time out of 12 seconds.
		 * Post api/checkout/pub/orderForm/{orderFormId}/attachments/marketingData
		 * @param {string} orderFormId ID of the orderForm that will receive client profile information.
		 * @return {void} OK
		 */
		AddMarketingData(orderFormId: string, requestBody: AddMarketingDataPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/checkout/pub/orderForm/' + (orderFormId == null ? '' : encodeURIComponent(orderFormId)) + '/attachments/marketingData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add merchant context data
		 * This endpoint is used for the merchant to add to the cart any relevant information that is related to the context of a specific order.
		 * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
		 * > This request has a time out of 12 seconds.
		 * Post api/checkout/pub/orderForm/{orderFormId}/attachments/merchantContextData
		 * @param {string} orderFormId ID of the orderForm that will receive the relevant information added by the merchant.
		 * @return {AddMerchantContextDataReturn} OK
		 */
		AddMerchantContextData(orderFormId: string, requestBody: AddMerchantContextDataPostBody): Observable<AddMerchantContextDataReturn> {
			return this.http.post<AddMerchantContextDataReturn>(this.baseUri + 'api/checkout/pub/orderForm/' + (orderFormId == null ? '' : encodeURIComponent(orderFormId)) + '/attachments/merchantContextData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add payment data
		 * Use this request to include payment information to a given shopping cart. The payment information attachment in the shopping cart does not determine the final order payment method in itself. However, it allows tha platform to update any relevant information that may be impacted by the payment method.
		 * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
		 * > This request has a time out of 12 seconds.
		 * Post api/checkout/pub/orderForm/{orderFormId}/attachments/paymentData
		 * @param {string} orderFormId ID of the orderForm that will receive client profile information.
		 * @return {void} 
		 */
		AddPaymentData(orderFormId: string, requestBody: AddPaymentDataPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/checkout/pub/orderForm/' + (orderFormId == null ? '' : encodeURIComponent(orderFormId)) + '/attachments/paymentData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add shipping address and select delivery option
		 * Use this request to include shipping information and/or selected delivery option to a given shopping cart.
		 * To add shipping addresses send the `selectedAddresses` array. For delivery option use the `logisticsInfo` array.
		 * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
		 * > This request has a time out of 12 seconds.
		 * >⚠️ The authentication of this endpoint can change depending on the customer context. If you are modifying information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.
		 * Post api/checkout/pub/orderForm/{orderFormId}/attachments/shippingData
		 * @param {string} orderFormId ID of the orderForm that will receive client profile information.
		 * @return {void} 
		 */
		AddShippingAddress(orderFormId: string, requestBody: AddShippingAddressPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/checkout/pub/orderForm/' + (orderFormId == null ? '' : encodeURIComponent(orderFormId)) + '/attachments/shippingData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add coupons to the cart
		 * Use this request to add coupons to a given shopping cart.
		 * Post api/checkout/pub/orderForm/{orderFormId}/coupons
		 * @param {string} orderFormId ID of the orderForm that will receive coupon information.
		 * @return {AddCouponsReturn} OK
		 */
		AddCoupons(orderFormId: string, requestBody: AddCouponsPostBody): Observable<AddCouponsReturn> {
			return this.http.post<AddCouponsReturn>(this.baseUri + 'api/checkout/pub/orderForm/' + (orderFormId == null ? '' : encodeURIComponent(orderFormId)) + '/coupons', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Set multiple custom field values
		 * Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration) request. The values of these custom fields can then be updated by this request.
		 * To do that, you need to inform the ID of the app you created with the configuration API (`appId`).
		 * In the body of the request, for each field created in this app (`appFieldName`) you will inform a value (`appFieldValue`).
		 * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
		 * Put api/checkout/pub/orderForm/{orderFormId}/customData/{appId}
		 * @param {string} orderFormId ID of the orderForm that will receive the new custom field values.
		 * @param {string} appId ID of the app created with the configuration API.
		 * @return {any} OK
		 */
		SetMultipleCustomFieldValues(orderFormId: string, appId: string, requestBody: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/checkout/pub/orderForm/' + (orderFormId == null ? '' : encodeURIComponent(orderFormId)) + '/customData/' + (appId == null ? '' : encodeURIComponent(appId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove single custom field value
		 * Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) request. The value of a specific custom field can be removed by this request.
		 * To do that, you need to inform in the URL the ID of the app you created with the configuration API (`appId`).
		 * You also need to iform the specific field created in this app (identified by the `appFieldName` parameter, also passed through the URL) whose value you want to remove.
		 * Delete api/checkout/pub/orderForm/{orderFormId}/customData/{appId}/{appFieldName}
		 * @param {string} orderFormId The ID of the orderForm from which you want to remove the custom field value.
		 * @param {string} appId ID of the app created through the Update orderForm Configuration endpoint.
		 * @param {string} appFieldName Name of the app's field created through the Update orderForm Configuration endpoint and which will be deleted.
		 * @return {void} OK
		 */
		Removesinglecustomfieldvalue(orderFormId: string, appId: string, appFieldName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/checkout/pub/orderForm/' + (orderFormId == null ? '' : encodeURIComponent(orderFormId)) + '/customData/' + (appId == null ? '' : encodeURIComponent(appId)) + '/' + (appFieldName == null ? '' : encodeURIComponent(appFieldName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Set single custom field value
		 * Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) request. The value of a specific custom field can then be updated by this request.
		 * To do that, you need to inform in the URL the ID of the app you created with the configuration API (`appId`).
		 * In the body of the request, you will inform the new value (`appFieldValue`, passed through the body) of the specific field created in this app (identified by the `appFieldName` parameter, passed through the URL).
		 * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
		 * Put api/checkout/pub/orderForm/{orderFormId}/customData/{appId}/{appFieldName}
		 * @param {string} orderFormId The ID of the orderForm whose custom field's value you want to change.
		 * @param {string} appId ID of the app created through the Update orderForm Configuration endpoint.
		 * @param {string} appFieldName Name of the app's field created through the Update orderForm Configuration endpoint.
		 * @return {void} 
		 */
		SetSingleCustomFieldValue(orderFormId: string, appId: string, appFieldName: string, requestBody: SetsinglecustomfieldvalueRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/checkout/pub/orderForm/' + (orderFormId == null ? '' : encodeURIComponent(orderFormId)) + '/customData/' + (appId == null ? '' : encodeURIComponent(appId)) + '/' + (appFieldName == null ? '' : encodeURIComponent(appFieldName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cart installments
		 * Retrieves possible amount of installments and respective values for a given cart with a given payment method.
		 * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
		 * This endpoint can be used to get the installment options for only one payment method at a time.
		 * This endpoint should be called only after the selected `orderForm` already has a `paymentData`.
		 * Get api/checkout/pub/orderForm/{orderFormId}/installments
		 * @param {string} orderFormId ID of the `orderForm` to be consulted for installments.
		 * @param {number} paymentSystem ID of the payment method to be consulted for installments.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		GetCartInstallments(orderFormId: string, paymentSystem: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/checkout/pub/orderForm/' + (orderFormId == null ? '' : encodeURIComponent(orderFormId)) + '/installments&paymentSystem=' + paymentSystem, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add cart items
		 * Use this request to add a new item to the shopping cart.
		 * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
		 * > This request has a time out of 45 seconds.
		 * Post api/checkout/pub/orderForm/{orderFormId}/items
		 * @param {string} orderFormId ID of the orderForm corresponding to the cart in which the new item will be added.
		 * @param {Array<string>} allowedOutdatedData In order to optimize performance, this parameter allows some information to not be updated when there are changes in the minicart. For instance, if a shopper adds another unit of a given SKU to the cart, it may not be necessary to recalculate payment information, which could impact performance.
		 * This array accepts strings and currently the only possible value is `”paymentData”`.
		 * @return {ItemsReturn} OK
		 */
		Items(orderFormId: string, allowedOutdatedData: Array<string> | null | undefined, requestBody: ItemsPostBody): Observable<ItemsReturn> {
			return this.http.post<ItemsReturn>(this.baseUri + 'api/checkout/pub/orderForm/' + (orderFormId == null ? '' : encodeURIComponent(orderFormId)) + '/items&' + allowedOutdatedData?.map(z => `allowedOutdatedData=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove all items
		 * This request removes all items from a given cart, leaving it empty.
		 * You must send an empty JSON in the body of the request.
		 * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
		 * **Important**: **Request Body** must always be sent with empty value "{ }" in this endpoint.
		 * Post api/checkout/pub/orderForm/{orderFormId}/items/removeAll
		 * @param {string} orderFormId ID of the orderForm corresponding to the cart whose items you want to remove.
		 */
		RemoveAllItems(orderFormId: string, requestBody: string): Observable<string> {
			return this.http.post(this.baseUri + 'api/checkout/pub/orderForm/' + (orderFormId == null ? '' : encodeURIComponent(orderFormId)) + '/items/removeAll', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Update cart items
		 * You can use this request to:
		 * 1. Change the quantity of one or more items in a specific cart.
		 * 2. Remove an item from the cart (by sending the `quantity` value = `0` in the request body).
		 * **Important**: To remove all items from the cart at the same time, use the [Remove all items](https://developers.vtex.com/vtex-rest-api/reference/removeallitems) endpoint.
		 * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure that represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
		 * > This request has a time out of 45 seconds.
		 * Post api/checkout/pub/orderForm/{orderFormId}/items/update
		 * @param {string} orderFormId ID of the `orderForm` corresponding to the cart whose items you want to update.
		 * @param {Array<string>} allowedOutdatedData In order to optimize performance, this parameter allows some information to not be updated when there are changes in the minicart. For instance, if a shopper adds another unit of a given SKU to the cart, it may not be necessary to recalculate payment information, which could impact performance.
		 * This array accepts strings and currently the only possible value is `”paymentData”`.
		 * @return {ItemsUpdateReturn} OK
		 */
		ItemsUpdate(orderFormId: string, allowedOutdatedData: Array<string> | null | undefined, requestBody: ItemsUpdatePostBody): Observable<ItemsUpdateReturn> {
			return this.http.post<ItemsUpdateReturn>(this.baseUri + 'api/checkout/pub/orderForm/' + (orderFormId == null ? '' : encodeURIComponent(orderFormId)) + '/items/update&' + allowedOutdatedData?.map(z => `allowedOutdatedData=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Change price
		 * This request changes the price of an SKU in a cart. You can also perform type of bulk price change with the [Update cart items request](https://developers.vtex.com/vtex-rest-api/reference/shopping-cart#itemsupdate)
		 * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
		 * You need to inform which cart you are referring to, by sending its `orderFormId`; and what is the item whose price you want to change, by sending its `itemIndex`.
		 * You also need to pass the new price value in the body.
		 * Remember that, to use this endpoint, the feature of *manual price* must be active. To check if it's active, use the [Get orderForm configuration](https://developers.vtex.com/reference#getorderformconfiguration) endpoint. To make it active, use the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) endpoint, making the `allowManualPrice` field `true`.
		 * > Whenever you use this request to change the price of an item, all items in that cart with the same SKU are affected by this change. This applies even to items that share the SKU but have been separated into different objects in the `items` array due to customizations or attachments, for example.
		 * Put api/checkout/pub/orderForm/{orderFormId}/items/{itemIndex}/price
		 * @param {string} orderFormId ID of the orderForm corresponding to the cart whose items will have the price changed.
		 * @param {string} itemIndex The index of the item in the cart. Each cart item is identified by an index, starting in 0.
		 * @return {void} OK
		 */
		PriceChange(orderFormId: string, itemIndex: string, requestBody: PriceChangeRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/checkout/pub/orderForm/' + (orderFormId == null ? '' : encodeURIComponent(orderFormId)) + '/items/' + (itemIndex == null ? '' : encodeURIComponent(itemIndex)) + '/price', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Clear orderForm messages
		 * This request removes all messages from the `messages` field of the orderForm , leaving it empty.
		 * You must send an empty JSON in the body of the request.
		 * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
		 * **Important**: **Request Body** must always be sent with empty value "{ }" in this endpoint.
		 * Post api/checkout/pub/orderForm/{orderFormId}/messages/clear
		 * @param {string} orderFormId ID of the orderForm corresponding to the cart whose messages you want to remove.
		 * @return {ClearorderFormMessagesReturn} OK
		 */
		ClearorderFormMessages(orderFormId: string, requestBody: string): Observable<ClearorderFormMessagesReturn> {
			return this.http.post<ClearorderFormMessagesReturn>(this.baseUri + 'api/checkout/pub/orderForm/' + (orderFormId == null ? '' : encodeURIComponent(orderFormId)) + '/messages/clear', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Ignore profile data
		 * When a shopper provides an email address at Checkout, the platform tries to retrieve existing profile information for that email and add it to the shopping cart information. Use this request if you want to change this behavior for a given cart, meaning profile information will not be included in the order automattically.
		 * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
		 * Note that this request will only work if you have not sent the `clientProfileData` to the cart yet. Sending it to a cart that already has a `clientProfileData` should return a status `403 Forbidden` error, with an `Access denied` message.
		 * Patch api/checkout/pub/orderForm/{orderFormId}/profile
		 * @param {string} orderFormId ID of the orderForm corresponding to the cart whose items will have the price changed.
		 * @return {void} 
		 */
		IgnoreProfileData(orderFormId: string, requestBody: IgnoreProfileDataPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'api/checkout/pub/orderForm/' + (orderFormId == null ? '' : encodeURIComponent(orderFormId)) + '/profile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Place order from an existing cart
		 * This endpoint places an order from an existing `orderForm` object, meaning an existing cart.
		 * After the creation of an order with this request, you have five minutes to send payment information and then request payment processing.
		 * Post api/checkout/pub/orderForm/{orderFormId}/transaction
		 * @param {string} orderFormId ID of the `orderForm` corresponding to the cart from which to place the order.
		 */
		PlaceOrderFromExistingOrderForm(orderFormId: string, requestBody: PlaceOrderFromExistingOrderFormPostBody): Observable<string> {
			return this.http.post(this.baseUri + 'api/checkout/pub/orderForm/' + (orderFormId == null ? '' : encodeURIComponent(orderFormId)) + '/transaction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Cart simulation
		 * This endpoint is used to simulate a cart in VTEX Checkout.
		 * It receives an **SKU ID**, the **quantity** of items in the cart and the ID of the **Seller**.
		 * It sends back all information about the cart, such as the selling price of each item, rates and benefits data, payment and logistics info.
		 * This is useful whenever you need to know the availability of fulfilling an order for a specific cart setting, since the API response will let you know the updated price, inventory and shipping data.
		 * **Important**: The fields (`sku id`, `quantity`, `seller`, `country`, `postalCode` and `geoCoordinates`) are just examples of content that you can simulate in your cart. You can add more fields to the request as per your need. Access the [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) guide to check the available fields.
		 * Post api/checkout/pub/orderForms/simulation
		 * @param {number} RnbBehavior This parameter defines which promotions apply to the simulation. Use `0` for simulations at cart stage, which means all promotions apply. In case of window simulation use `1`, which indicates promotions that apply nominal discounts over the total purchase value shouldn't be considered on the simulation.
		 * Note that if this not sent, the parameter is `1`.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} sc Trade Policy (Sales Channel) identification.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {CartSimulationReturn} OK
		 */
		CartSimulation(RnbBehavior: number | null | undefined, sc: number | null | undefined, requestBody: CartSimulationPostBody): Observable<CartSimulationReturn> {
			return this.http.post<CartSimulationReturn>(this.baseUri + 'api/checkout/pub/orderForms/simulation?RnbBehavior=' + RnbBehavior + '&sc=' + sc, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Place order
		 * Places order without having any prior cart information. This means all information on items, client, payment and shipping must be sent in the body.
		 * >⚠️ The authentication of this endpoint is required if you are creating an order with an item that has an attachment that creates a Subscription. For more information, access [Subscriptions API](https://developers.vtex.com/docs/api-reference/subscriptions-api-v3).
		 * Put api/checkout/pub/orders
		 * @param {number} sc Trade Policy (Sales Channel) identification. This query can be used to create an order for a specific sales channel.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {PlaceOrderReturn} OK
		 */
		PlaceOrder(sc: number | null | undefined, requestBody: PlaceOrderPutBody): Observable<PlaceOrderReturn> {
			return this.http.put<PlaceOrderReturn>(this.baseUri + 'api/checkout/pub/orders?sc=' + sc, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List pickup points by location
		 * Retrieves information on pickup points close to a given location determined by geocoordinates or postal code.
		 * The pickup points returned are not necessarily all active ones. Make sure to validate the information consumed by integrations.
		 * Get api/checkout/pub/pickup-points
		 * @param {Array<number>} geoCoordinates Geocoordinates (first longitude, then latitude) around which to search for pickup points. If you use this type of search, do not pass postal and country codes.
		 * @param {string} postalCode Postal code around which to search for pickup points. If you use this type of search, make sure to pass a `countryCode` and do not pass `geoCoordinates`.
		 * @param {string} countryCode Three letter country code refering to the `postalCode` field. Pass the country code only if you are searching pickup points by postal code.
		 * @return {void} OK
		 */
		ListPickupPpointsByLocation(geoCoordinates: Array<number> | null | undefined, postalCode: string | null | undefined, countryCode: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/checkout/pub/pickup-points?' + geoCoordinates?.map(z => `geoCoordinates=${z}`).join('&') + '&postalCode=' + (postalCode == null ? '' : encodeURIComponent(postalCode)) + '&countryCode=' + (countryCode == null ? '' : encodeURIComponent(countryCode)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get address by postal code
		 * Retrieves address information for a given postal code and country.
		 * This request can be used to implement auto complete functionality when a customer needs to fill in an address.
		 * Get api/checkout/pub/postal-code/{countryCode}/{postalCode}
		 * @param {string} countryCode Three letter country code refering to the `postalCode` field.
		 * @param {string} postalCode Postal code.
		 * @return {void} OK
		 */
		GetAddressByPostalCode(countryCode: string, postalCode: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/checkout/pub/postal-code/' + (countryCode == null ? '' : encodeURIComponent(countryCode)) + '/' + (postalCode == null ? '' : encodeURIComponent(postalCode)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get client profile by email
		 * Retrieve a client's profile information by providing an email address.
		 * If the response body fields are empty, the following situations may have occurred:
		 * 1. There is no client registered with the email address provided in your store, or;
		 * 2. Client profile is invalid or incomplete. For more information, see [SmartCheckout - Customer information automatic fill-in](https://help.vtex.com/en/tutorial/smartcheckout-customer-information-automatic-fill-in--2Nuu3xAFzdhIzJIldAdtan).
		 * >⚠️ The authentication of this endpoint can change depending on the customer context. If you are consulting information from a customer with a complete profile on the store, the response will return the customer's data masked. You can only access the customer data with an authenticated request.
		 * Get api/checkout/pub/profiles
		 * @param {string} email Client's email address to be searched.
		 * @return {GetClientProfileByEmailReturn} OK
		 */
		GetClientProfileByEmail(email: string): Observable<GetClientProfileByEmailReturn> {
			return this.http.get<GetClientProfileByEmailReturn>(this.baseUri + 'api/checkout/pub/profiles?email=' + (email == null ? '' : encodeURIComponent(email)), {});
		}

		/**
		 * Get sellers by region or address
		 * Retrieve a list of sellers that cater to a specific region or address, according to your set up of our [regionalization feature](https://help.vtex.com/en/tutorial/setting-up-price-and-availability-of-skus-by-region--12ne58BmvYsYuGsimmugoc#). Learn more about [Region v2](https://developers.vtex.com/vtex-developer-docs/changelog/region-v2).
		 * To access the list of sellers, you must choose one of the following methods:
		 * 1. Send the identification of the list of sellers (`regionId`) as a path parameter through the URL. Or;
		 * 2. Send the `country` (3-digit ISO code) and at least one of the two values (`postal Code` or `geo Coordinates`) as query parameters through the URL. For this method, it is also allowed to send both values (`postalCode` or `geoCoordinates`) in the same request.
		 * Get api/checkout/pub/regions/{regionId}
		 * @param {string} regionId ID of the region corresponding to the shopper's location.
		 * @param {string} country Three letter country code refering to the `postalCode` field.
		 * @param {string} postalCode Postal code corresponding to the shopper's location.
		 * @param {Array<number>} geoCoordinates Geocoordinates (first longitude, semicolon, then latitude) corresponding to the shopper's location.
		 * @return {GetSellersByRegionReturn} OK
		 */
		GetSellersByRegion(regionId: string, country: string, postalCode: string | null | undefined, geoCoordinates: Array<number> | null | undefined): Observable<GetSellersByRegionReturn> {
			return this.http.get<GetSellersByRegionReturn>(this.baseUri + 'api/checkout/pub/regions/' + (regionId == null ? '' : encodeURIComponent(regionId)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&postalCode=' + (postalCode == null ? '' : encodeURIComponent(postalCode)) + '&' + geoCoordinates?.map(z => `geoCoordinates=${z}`).join('&'), {});
		}

		/**
		 * Get orderForm configuration
		 * Retrieves the settings that are currently applied to every orderForm in the account.
		 * These settings are defined by the request [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration).
		 * Always use this request to retrieve the current configuration before performing an update. By doing so you ensure that you are modifying only the properties you want.
		 * Get api/checkout/pvt/configuration/orderForm
		 */
		GetorderFormconfiguration(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/checkout/pvt/configuration/orderForm', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update orderForm configuration
		 * Determines settings that will apply to every orderForm in the account.
		 * For example, if you create an app using this request, every orderForm of this account will have the custom fields created though it.
		 * **Important**: always retrieve the current configuration before performing an update to ensure that you are modifying only the properties you want. Otherwise, old values can be overwritten. To retrieve the current configuration, use the request [Get orderForm configuration](https://developers.vtex.com/reference#getorderformconfiguration).
		 * Post api/checkout/pvt/configuration/orderForm
		 * @return {void} 
		 */
		UpdateorderFormconfiguration(requestBody: UpdateorderFormconfigurationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/checkout/pvt/configuration/orderForm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get window to change seller
		 * Retrieves a marketplace’s window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.
		 * The default period for this window is of 2 days, but it can be configured by the request Update window to change seller.
		 * Get api/checkout/pvt/configuration/window-to-change-seller
		 * @return {void} OK
		 */
		GetWindowToChangeSeller(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/checkout/pvt/configuration/window-to-change-seller', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update window to change seller
		 * Updates a marketplace’s window to change seller, that is, the period when it is possible to choose another seller to fulfill a given order after the original seller has canceled it.
		 * It is possible to check the current window using the request Get window to change seller.
		 * Post api/checkout/pvt/configuration/window-to-change-seller
		 * @return {void} 
		 */
		UpdateWindowToChangeSeller(requestBody: WaitingTime): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/checkout/pvt/configuration/window-to-change-seller', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove all personal data
		 * This call removes all user information, making a cart anonymous while leaving the items.
		 * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure that represents a shopping cart and contains all information about it. Hence, the `orderFormId` is the identification code of a given cart.
		 * This call works by creating a new orderForm, setting a new cookie, and returning a redirect 302 to the cart URL (`/checkout/#/orderform`).
		 * Get checkout/changeToAnonymousUser/{orderFormId}
		 * @param {string} orderFormId ID of the orderForm corresponding to the cart whose user's personal data you want to remove.
		 * @return {string} OK
		 */
		Removeallpersonaldata(orderFormId: string): Observable<string> {
			return this.http.get(this.baseUri + 'checkout/changeToAnonymousUser/' + (orderFormId == null ? '' : encodeURIComponent(orderFormId)), { responseType: 'text' });
		}
	}

	export interface AddClientPreferencesPostBody {

		/** Locale chosen by the shopper. Determines website language. */
		locale?: string | null;

		/** Indicates whether the shopper opted in to receive the store's news letter. */
		optinNewsLetter?: boolean | null;
	}
	export interface AddClientPreferencesPostBodyFormProperties {

		/** Locale chosen by the shopper. Determines website language. */
		locale: FormControl<string | null | undefined>,

		/** Indicates whether the shopper opted in to receive the store's news letter. */
		optinNewsLetter: FormControl<boolean | null | undefined>,
	}
	export function CreateAddClientPreferencesPostBodyFormGroup() {
		return new FormGroup<AddClientPreferencesPostBodyFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
			optinNewsLetter: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AddClientProfilePostBody {

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
	export interface AddClientProfilePostBodyFormProperties {

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
	export function CreateAddClientProfilePostBodyFormGroup() {
		return new FormGroup<AddClientProfilePostBodyFormProperties>({
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

	export interface AddMarketingDataPostBody {

		/** Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order. */
		coupon?: string | null;

		/** Marketing tags. */
		marketingTags?: Array<string>;

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
	export interface AddMarketingDataPostBodyFormProperties {

		/** Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order. */
		coupon: FormControl<string | null | undefined>,

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
	export function CreateAddMarketingDataPostBodyFormGroup() {
		return new FormGroup<AddMarketingDataPostBodyFormProperties>({
			coupon: new FormControl<string | null | undefined>(undefined),
			utmCampaign: new FormControl<string | null | undefined>(undefined),
			utmMedium: new FormControl<string | null | undefined>(undefined),
			utmSource: new FormControl<string | null | undefined>(undefined),
			utmiCampaign: new FormControl<string | null | undefined>(undefined),
			utmiPage: new FormControl<string | null | undefined>(undefined),
			utmiPart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddMerchantContextDataPostBody {

		/**
		 * Sales Associate information.
		 * Required
		 */
		salesAssociateData: AddMerchantContextDataPostBodySalesAssociateData;
	}
	export interface AddMerchantContextDataPostBodyFormProperties {
	}
	export function CreateAddMerchantContextDataPostBodyFormGroup() {
		return new FormGroup<AddMerchantContextDataPostBodyFormProperties>({
		});

	}

	export interface AddMerchantContextDataPostBodySalesAssociateData {

		/** Sales Associate (Seller) identification code. All information should be registered by the merchant. Maximum of 100 characters. */
		salesAssociateId?: string | null;
	}
	export interface AddMerchantContextDataPostBodySalesAssociateDataFormProperties {

		/** Sales Associate (Seller) identification code. All information should be registered by the merchant. Maximum of 100 characters. */
		salesAssociateId: FormControl<string | null | undefined>,
	}
	export function CreateAddMerchantContextDataPostBodySalesAssociateDataFormGroup() {
		return new FormGroup<AddMerchantContextDataPostBodySalesAssociateDataFormProperties>({
			salesAssociateId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddMerchantContextDataReturn {

		/** Sales Associate (Seller) identification code. */
		salesAssociateId?: string | null;
	}
	export interface AddMerchantContextDataReturnFormProperties {

		/** Sales Associate (Seller) identification code. */
		salesAssociateId: FormControl<string | null | undefined>,
	}
	export function CreateAddMerchantContextDataReturnFormGroup() {
		return new FormGroup<AddMerchantContextDataReturnFormProperties>({
			salesAssociateId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddPaymentDataPostBody {

		/** Array with information on each payment chosen by the shopper. */
		AddPaymentDataPostBodyPayments?: Array<AddPaymentDataPostBodyPayments>;
	}
	export interface AddPaymentDataPostBodyFormProperties {
	}
	export function CreateAddPaymentDataPostBodyFormGroup() {
		return new FormGroup<AddPaymentDataPostBodyFormProperties>({
		});

	}

	export interface AddPaymentDataPostBodyPayments {

		/** Payment system group. */
		group?: string | null;

		/** Indicates whether billing address for this payment is the default address. */
		hasDefaultBillingAddress?: boolean | null;

		/**
		 * Selected number of installments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		installments?: number | null;

		/**
		 * Installments' interest rate.
		 * Type: double
		 */
		installmentsInterestRate?: number | null;

		/**
		 * Value of the installments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		installmentsValue?: number | null;

		/**
		 * Payment system ID.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		paymentSystem?: number | null;

		/** Payment system name. */
		paymentSystemName?: string | null;

		/**
		 * Reference value used to calculate total order value with interest.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		referenceValue?: number | null;

		/**
		 * Total value assigned to this payment.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface AddPaymentDataPostBodyPaymentsFormProperties {

		/** Payment system group. */
		group: FormControl<string | null | undefined>,

		/** Indicates whether billing address for this payment is the default address. */
		hasDefaultBillingAddress: FormControl<boolean | null | undefined>,

		/**
		 * Selected number of installments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		installments: FormControl<number | null | undefined>,

		/**
		 * Installments' interest rate.
		 * Type: double
		 */
		installmentsInterestRate: FormControl<number | null | undefined>,

		/**
		 * Value of the installments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		installmentsValue: FormControl<number | null | undefined>,

		/**
		 * Payment system ID.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		paymentSystem: FormControl<number | null | undefined>,

		/** Payment system name. */
		paymentSystemName: FormControl<string | null | undefined>,

		/**
		 * Reference value used to calculate total order value with interest.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		referenceValue: FormControl<number | null | undefined>,

		/**
		 * Total value assigned to this payment.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateAddPaymentDataPostBodyPaymentsFormGroup() {
		return new FormGroup<AddPaymentDataPostBodyPaymentsFormProperties>({
			group: new FormControl<string | null | undefined>(undefined),
			hasDefaultBillingAddress: new FormControl<boolean | null | undefined>(undefined),
			installments: new FormControl<number | null | undefined>(undefined),
			installmentsInterestRate: new FormControl<number | null | undefined>(undefined),
			installmentsValue: new FormControl<number | null | undefined>(undefined),
			paymentSystem: new FormControl<number | null | undefined>(undefined),
			paymentSystemName: new FormControl<string | null | undefined>(undefined),
			referenceValue: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AddShippingAddressPostBody {

		/** This field should be sent as `false` to prevent the address information from being filled in automatically based on the `postalCode` information. */
		clearAddressIfPostalCodeNotFound?: boolean | null;

		/** Array with logistics information on each item of the `items` array in the `orderForm`. */
		AddShippingAddressPostBodyLogisticsInfo?: Array<AddShippingAddressPostBodyLogisticsInfo>;

		/** List of objects with addresses information. */
		AddShippingAddressPostBodySelectedAddresses?: Array<AddShippingAddressPostBodySelectedAddresses>;
	}
	export interface AddShippingAddressPostBodyFormProperties {

		/** This field should be sent as `false` to prevent the address information from being filled in automatically based on the `postalCode` information. */
		clearAddressIfPostalCodeNotFound: FormControl<boolean | null | undefined>,
	}
	export function CreateAddShippingAddressPostBodyFormGroup() {
		return new FormGroup<AddShippingAddressPostBodyFormProperties>({
			clearAddressIfPostalCodeNotFound: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AddShippingAddressPostBodyLogisticsInfo {

		/**
		 * Index of item in items array
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex?: number | null;

		/** Delivery channel selected by the customer. For example, `"delivery"` or `"pickup-in-point"`. */
		selectedDeliveryChannel?: string | null;

		/** Selected SLA. For example, `"normal"` or `"express"`. */
		selectedSla?: string | null;
	}
	export interface AddShippingAddressPostBodyLogisticsInfoFormProperties {

		/**
		 * Index of item in items array
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex: FormControl<number | null | undefined>,

		/** Delivery channel selected by the customer. For example, `"delivery"` or `"pickup-in-point"`. */
		selectedDeliveryChannel: FormControl<string | null | undefined>,

		/** Selected SLA. For example, `"normal"` or `"express"`. */
		selectedSla: FormControl<string | null | undefined>,
	}
	export function CreateAddShippingAddressPostBodyLogisticsInfoFormGroup() {
		return new FormGroup<AddShippingAddressPostBodyLogisticsInfoFormProperties>({
			itemIndex: new FormControl<number | null | undefined>(undefined),
			selectedDeliveryChannel: new FormControl<string | null | undefined>(undefined),
			selectedSla: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddShippingAddressPostBodySelectedAddresses {

		/** Type of address. For example, `Residential` or `Pickup`, among others. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal Code. */
		postalCode?: string | null;

		/** Name of the person who is going to receive the order. */
		receiverName?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the shipping address. */
		street?: string | null;
	}
	export interface AddShippingAddressPostBodySelectedAddressesFormProperties {

		/** Type of address. For example, `Residential` or `Pickup`, among others. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal Code. */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the person who is going to receive the order. */
		receiverName: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the shipping address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateAddShippingAddressPostBodySelectedAddressesFormGroup() {
		return new FormGroup<AddShippingAddressPostBodySelectedAddressesFormProperties>({
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddCouponsPostBody {

		/** Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order. */
		text?: string | null;
	}
	export interface AddCouponsPostBodyFormProperties {

		/** Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateAddCouponsPostBodyFormGroup() {
		return new FormGroup<AddCouponsPostBodyFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturn {

		/** Permission to modify item price manually. */
		allowManualPrice?: boolean | null;

		/** Available accounts. */
		availableAccounts?: Array<string>;

		/** Information on each available address. */
		AddCouponsReturnAvailableAddresses?: Array<AddCouponsReturnAvailableAddresses>;

		/** Data can be edited. */
		canEditData?: boolean | null;

		/** Object containing preferences from the client who placed the order. */
		clientPreferencesData?: AddCouponsReturnClientPreferencesData;

		/** Customer's profile information. */
		clientProfileData?: AddCouponsReturnClientProfileData;

		/** Object containing commercial condition information. */
		commercialConditionData?: string | null;

		/** Customer additional information. */
		customData?: string | null;

		/** Gift registry list information. */
		giftRegistryData?: string | null;

		/** Hooks information. */
		hooksData?: string | null;

		/** Ignore customer profile data. */
		ignoreProfileData?: boolean | null;

		/** Object containing information pertinent to the order's invoice. */
		invoiceData?: string | null;

		/** Indicates whether order is checked in. */
		isCheckedIn?: boolean | null;

		/** Item metadata. */
		itemMetadata?: AddCouponsReturnItemMetadata;

		/** Information on each item in the order. */
		AddCouponsReturnItems?: Array<AddCouponsReturnItems>;

		/** Object containing information about the ordering of items within the orderForm. */
		itemsOrdination?: AddCouponsReturnItemsOrdination;

		/** Indicates whether the user is logged into the store. */
		loggedIn?: boolean | null;

		/** Object containIng promotion data such as coupon tracking information and internal or external UTMs. */
		marketingData?: AddCouponsReturnMarketingData;

		/** Array containing an object for each message generated by our servers while processing the request. */
		messages?: Array<string>;

		/** Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1) */
		openTextField?: string | null;

		/** ID of the orderForm corresponding to a specific cart. */
		orderFormId?: string | null;

		/** Information on the order's payment. */
		paymentData?: AddCouponsReturnPaymentData;

		/** Profile provider. */
		profileProvider?: string | null;

		/** Information on rates and benefits that apply to the order. */
		ratesAndBenefitsData?: AddCouponsReturnRatesAndBenefitsData;

		/** Attribute created by the seller, in their VTEX store configuration. */
		salesChannel?: string | null;

		/** Array containing the data of the item selected as a gift. */
		selectableGifts?: Array<string>;

		/** Information on each seller. */
		AddCouponsReturnSellers?: Array<AddCouponsReturnSellers>;

		/** Shipping information pertinent to the order. */
		shippingData?: AddCouponsReturnShippingData;

		/** ID of the store. */
		storeId?: string | null;

		/** Object containing data from the store's configuration (stored in VTEX's License Manager). */
		storePreferencesData?: string | null;

		/** Subscription information. */
		subscriptionData?: string | null;

		/** Array containing an object for each totalizer for the purchase. Totalizers contain the sum of values for a specific part of the order (e.g. Total item value, Total shipping value). */
		totalizers?: Array<string>;

		/** Unique ID associated with the customer profile. */
		userProfileId?: string | null;

		/** User type. */
		userType?: string | null;

		/**
		 * Total value of the order without separating cents. For example, $24.99 is represented `2499`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface AddCouponsReturnFormProperties {

		/** Permission to modify item price manually. */
		allowManualPrice: FormControl<boolean | null | undefined>,

		/** Data can be edited. */
		canEditData: FormControl<boolean | null | undefined>,

		/** Object containing commercial condition information. */
		commercialConditionData: FormControl<string | null | undefined>,

		/** Customer additional information. */
		customData: FormControl<string | null | undefined>,

		/** Gift registry list information. */
		giftRegistryData: FormControl<string | null | undefined>,

		/** Hooks information. */
		hooksData: FormControl<string | null | undefined>,

		/** Ignore customer profile data. */
		ignoreProfileData: FormControl<boolean | null | undefined>,

		/** Object containing information pertinent to the order's invoice. */
		invoiceData: FormControl<string | null | undefined>,

		/** Indicates whether order is checked in. */
		isCheckedIn: FormControl<boolean | null | undefined>,

		/** Indicates whether the user is logged into the store. */
		loggedIn: FormControl<boolean | null | undefined>,

		/** Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1) */
		openTextField: FormControl<string | null | undefined>,

		/** ID of the orderForm corresponding to a specific cart. */
		orderFormId: FormControl<string | null | undefined>,

		/** Profile provider. */
		profileProvider: FormControl<string | null | undefined>,

		/** Attribute created by the seller, in their VTEX store configuration. */
		salesChannel: FormControl<string | null | undefined>,

		/** ID of the store. */
		storeId: FormControl<string | null | undefined>,

		/** Object containing data from the store's configuration (stored in VTEX's License Manager). */
		storePreferencesData: FormControl<string | null | undefined>,

		/** Subscription information. */
		subscriptionData: FormControl<string | null | undefined>,

		/** Unique ID associated with the customer profile. */
		userProfileId: FormControl<string | null | undefined>,

		/** User type. */
		userType: FormControl<string | null | undefined>,

		/**
		 * Total value of the order without separating cents. For example, $24.99 is represented `2499`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateAddCouponsReturnFormGroup() {
		return new FormGroup<AddCouponsReturnFormProperties>({
			allowManualPrice: new FormControl<boolean | null | undefined>(undefined),
			canEditData: new FormControl<boolean | null | undefined>(undefined),
			commercialConditionData: new FormControl<string | null | undefined>(undefined),
			customData: new FormControl<string | null | undefined>(undefined),
			giftRegistryData: new FormControl<string | null | undefined>(undefined),
			hooksData: new FormControl<string | null | undefined>(undefined),
			ignoreProfileData: new FormControl<boolean | null | undefined>(undefined),
			invoiceData: new FormControl<string | null | undefined>(undefined),
			isCheckedIn: new FormControl<boolean | null | undefined>(undefined),
			loggedIn: new FormControl<boolean | null | undefined>(undefined),
			openTextField: new FormControl<string | null | undefined>(undefined),
			orderFormId: new FormControl<string | null | undefined>(undefined),
			profileProvider: new FormControl<string | null | undefined>(undefined),
			salesChannel: new FormControl<string | null | undefined>(undefined),
			storeId: new FormControl<string | null | undefined>(undefined),
			storePreferencesData: new FormControl<string | null | undefined>(undefined),
			subscriptionData: new FormControl<string | null | undefined>(undefined),
			userProfileId: new FormControl<string | null | undefined>(undefined),
			userType: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnAvailableAddresses {

		/** Address ID. */
		addressId?: string | null;

		/** Address type. */
		addressType?: string | null;

		/** City of the address. */
		city?: string | null;

		/** Complement to the address. */
		complement?: string | null;

		/** Country of the address. ISO three-letter code. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Indicates whether address is disposable. */
		isDisposable?: boolean | null;

		/** Neighborhood of the address. */
		neighborhood?: string | null;

		/** Number of the address. */
		number?: string | null;

		/** Name of the receiver. */
		receiverName?: string | null;

		/** Reference that may help in the location of the address. */
		reference?: string | null;

		/** State of the address. */
		state?: string | null;

		/** Street of the address. */
		street?: string | null;
	}
	export interface AddCouponsReturnAvailableAddressesFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Address type. */
		addressType: FormControl<string | null | undefined>,

		/** City of the address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the address. */
		complement: FormControl<string | null | undefined>,

		/** Country of the address. ISO three-letter code. */
		country: FormControl<string | null | undefined>,

		/** Indicates whether address is disposable. */
		isDisposable: FormControl<boolean | null | undefined>,

		/** Neighborhood of the address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the address. */
		number: FormControl<string | null | undefined>,

		/** Name of the receiver. */
		receiverName: FormControl<string | null | undefined>,

		/** Reference that may help in the location of the address. */
		reference: FormControl<string | null | undefined>,

		/** State of the address. */
		state: FormControl<string | null | undefined>,

		/** Street of the address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateAddCouponsReturnAvailableAddressesFormGroup() {
		return new FormGroup<AddCouponsReturnAvailableAddressesFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			isDisposable: new FormControl<boolean | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnClientPreferencesData {

		/** Client's locale. Examples: `pt-BR` and `en-US`. */
		locale?: string | null;

		/** `true` if the client opted to receive newsletter from the store. */
		optinNewsLetter?: boolean | null;
	}
	export interface AddCouponsReturnClientPreferencesDataFormProperties {

		/** Client's locale. Examples: `pt-BR` and `en-US`. */
		locale: FormControl<string | null | undefined>,

		/** `true` if the client opted to receive newsletter from the store. */
		optinNewsLetter: FormControl<boolean | null | undefined>,
	}
	export function CreateAddCouponsReturnClientPreferencesDataFormGroup() {
		return new FormGroup<AddCouponsReturnClientPreferencesDataFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
			optinNewsLetter: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnClientProfileData {

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
	export interface AddCouponsReturnClientProfileDataFormProperties {

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
	export function CreateAddCouponsReturnClientProfileDataFormGroup() {
		return new FormGroup<AddCouponsReturnClientProfileDataFormProperties>({
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

	export interface AddCouponsReturnItemMetadata {

		/** List of objects containing metadata on each item in the order. */
		AddCouponsReturnItemMetadataItems?: Array<AddCouponsReturnItemMetadataItems>;
	}
	export interface AddCouponsReturnItemMetadataFormProperties {
	}
	export function CreateAddCouponsReturnItemMetadataFormGroup() {
		return new FormGroup<AddCouponsReturnItemMetadataFormProperties>({
		});

	}

	export interface AddCouponsReturnItemMetadataItems {

		/** Detail URL. */
		detailUrl?: string | null;

		/** European Article Number. */
		ean?: string | null;

		/** Item ID. */
		id?: string | null;

		/** Image URL. */
		imageUrl?: string | null;

		/** Product name. */
		name?: string | null;

		/** Product ID. */
		productId?: string | null;

		/** Ref ID. */
		refId?: string | null;

		/** Seller. */
		seller?: string | null;

		/** SKU name. */
		skuName?: string | null;
	}
	export interface AddCouponsReturnItemMetadataItemsFormProperties {

		/** Detail URL. */
		detailUrl: FormControl<string | null | undefined>,

		/** European Article Number. */
		ean: FormControl<string | null | undefined>,

		/** Item ID. */
		id: FormControl<string | null | undefined>,

		/** Image URL. */
		imageUrl: FormControl<string | null | undefined>,

		/** Product name. */
		name: FormControl<string | null | undefined>,

		/** Product ID. */
		productId: FormControl<string | null | undefined>,

		/** Ref ID. */
		refId: FormControl<string | null | undefined>,

		/** Seller. */
		seller: FormControl<string | null | undefined>,

		/** SKU name. */
		skuName: FormControl<string | null | undefined>,
	}
	export function CreateAddCouponsReturnItemMetadataItemsFormGroup() {
		return new FormGroup<AddCouponsReturnItemMetadataItemsFormProperties>({
			detailUrl: new FormControl<string | null | undefined>(undefined),
			ean: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			refId: new FormControl<string | null | undefined>(undefined),
			seller: new FormControl<string | null | undefined>(undefined),
			skuName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnItems {

		/** Additional information. */
		additionalInfo?: AddCouponsReturnItemsAdditionalInfo;

		/** Array containing information on attachments. */
		attachments?: Array<string>;

		/** Availability */
		availability?: string | null;

		/** Information on services sold along with the SKU. Example: a gift package. */
		AddCouponsReturnItemsBundleItems?: Array<AddCouponsReturnItemsBundleItems>;

		/** Detail URL. */
		detailUrl?: string | null;

		/** European Article Number. */
		ean?: string | null;

		/** ID of the item. */
		id?: string | null;

		/** Image URL. */
		imageUrl?: string | null;

		/** Indicates whether item is a gift. */
		isGift?: boolean | null;

		/**
		 * List price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice?: number | null;

		/**
		 * Manual price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		manualPrice?: number | null;

		/** User that applied the manual price, if that is the case. */
		manualPriceAppliedBy?: string | null;

		/** Manufacturer code. */
		manufacturerCode?: string | null;

		/** Measurement unit */
		measurementUnit?: string | null;

		/** Modal type. */
		modalType?: string | null;

		/** Product name. */
		name?: string | null;

		/** Parent assembly binding. */
		parentAssemblyBinding?: string | null;

		/**
		 * Parent item index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		parentItemIndex?: number | null;

		/** Presale date. */
		preSaleDate?: string | null;

		/**
		 * Price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Price information for all units of a specific item. */
		priceDefinition?: AddCouponsReturnItemsPriceDefinition;

		/** Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order. */
		AddCouponsReturnItemsPriceTags?: Array<AddCouponsReturnItemsPriceTags>;

		/** Price expiration date and time. */
		priceValidUntil?: string | null;

		/** Object, where each field is an ID from `productCategoryIds`. */
		productCategories?: AddCouponsReturnItemsProductCategories;

		/** Product category IDs. */
		productCategoryIds?: string | null;

		/** Product ID. */
		productId?: string | null;

		/** Product Ref ID. */
		productRefId?: string | null;

		/**
		 * Quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity?: number | null;

		/** Ref ID. */
		refId?: string | null;

		/**
		 * Reward value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rewardValue?: number | null;

		/** Seller. */
		seller?: string | null;

		/** Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order. */
		sellerChain?: Array<string>;

		/**
		 * Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sellingPrice?: number | null;

		/** SKU name. */
		skuName?: string | null;

		/**
		 * Tax value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax?: number | null;

		/** Unique ID. */
		uniqueId?: string | null;

		/**
		 * Unit multiplier
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unitMultiplier?: number | null;
	}
	export interface AddCouponsReturnItemsFormProperties {

		/** Availability */
		availability: FormControl<string | null | undefined>,

		/** Detail URL. */
		detailUrl: FormControl<string | null | undefined>,

		/** European Article Number. */
		ean: FormControl<string | null | undefined>,

		/** ID of the item. */
		id: FormControl<string | null | undefined>,

		/** Image URL. */
		imageUrl: FormControl<string | null | undefined>,

		/** Indicates whether item is a gift. */
		isGift: FormControl<boolean | null | undefined>,

		/**
		 * List price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * Manual price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		manualPrice: FormControl<number | null | undefined>,

		/** User that applied the manual price, if that is the case. */
		manualPriceAppliedBy: FormControl<string | null | undefined>,

		/** Manufacturer code. */
		manufacturerCode: FormControl<string | null | undefined>,

		/** Measurement unit */
		measurementUnit: FormControl<string | null | undefined>,

		/** Modal type. */
		modalType: FormControl<string | null | undefined>,

		/** Product name. */
		name: FormControl<string | null | undefined>,

		/** Parent assembly binding. */
		parentAssemblyBinding: FormControl<string | null | undefined>,

		/**
		 * Parent item index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		parentItemIndex: FormControl<number | null | undefined>,

		/** Presale date. */
		preSaleDate: FormControl<string | null | undefined>,

		/**
		 * Price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** Price expiration date and time. */
		priceValidUntil: FormControl<string | null | undefined>,

		/** Product category IDs. */
		productCategoryIds: FormControl<string | null | undefined>,

		/** Product ID. */
		productId: FormControl<string | null | undefined>,

		/** Product Ref ID. */
		productRefId: FormControl<string | null | undefined>,

		/**
		 * Quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** Ref ID. */
		refId: FormControl<string | null | undefined>,

		/**
		 * Reward value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rewardValue: FormControl<number | null | undefined>,

		/** Seller. */
		seller: FormControl<string | null | undefined>,

		/**
		 * Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sellingPrice: FormControl<number | null | undefined>,

		/** SKU name. */
		skuName: FormControl<string | null | undefined>,

		/**
		 * Tax value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax: FormControl<number | null | undefined>,

		/** Unique ID. */
		uniqueId: FormControl<string | null | undefined>,

		/**
		 * Unit multiplier
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unitMultiplier: FormControl<number | null | undefined>,
	}
	export function CreateAddCouponsReturnItemsFormGroup() {
		return new FormGroup<AddCouponsReturnItemsFormProperties>({
			availability: new FormControl<string | null | undefined>(undefined),
			detailUrl: new FormControl<string | null | undefined>(undefined),
			ean: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			isGift: new FormControl<boolean | null | undefined>(undefined),
			listPrice: new FormControl<number | null | undefined>(undefined),
			manualPrice: new FormControl<number | null | undefined>(undefined),
			manualPriceAppliedBy: new FormControl<string | null | undefined>(undefined),
			manufacturerCode: new FormControl<string | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			modalType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentAssemblyBinding: new FormControl<string | null | undefined>(undefined),
			parentItemIndex: new FormControl<number | null | undefined>(undefined),
			preSaleDate: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			priceValidUntil: new FormControl<string | null | undefined>(undefined),
			productCategoryIds: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			productRefId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			refId: new FormControl<string | null | undefined>(undefined),
			rewardValue: new FormControl<number | null | undefined>(undefined),
			seller: new FormControl<string | null | undefined>(undefined),
			sellingPrice: new FormControl<number | null | undefined>(undefined),
			skuName: new FormControl<string | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
			uniqueId: new FormControl<string | null | undefined>(undefined),
			unitMultiplier: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnItemsAdditionalInfo {

		/** Brand ID. */
		brandId?: string | null;

		/** Brand name. */
		brandName?: string | null;

		/** Dimension. */
		dimension?: string | null;

		/** Offering information. */
		offeringInfo?: string | null;

		/** Offering type. */
		offeringType?: string | null;

		/** Offering type ID. */
		offeringTypeId?: string | null;
	}
	export interface AddCouponsReturnItemsAdditionalInfoFormProperties {

		/** Brand ID. */
		brandId: FormControl<string | null | undefined>,

		/** Brand name. */
		brandName: FormControl<string | null | undefined>,

		/** Dimension. */
		dimension: FormControl<string | null | undefined>,

		/** Offering information. */
		offeringInfo: FormControl<string | null | undefined>,

		/** Offering type. */
		offeringType: FormControl<string | null | undefined>,

		/** Offering type ID. */
		offeringTypeId: FormControl<string | null | undefined>,
	}
	export function CreateAddCouponsReturnItemsAdditionalInfoFormGroup() {
		return new FormGroup<AddCouponsReturnItemsAdditionalInfoFormProperties>({
			brandId: new FormControl<string | null | undefined>(undefined),
			brandName: new FormControl<string | null | undefined>(undefined),
			dimension: new FormControl<string | null | undefined>(undefined),
			offeringInfo: new FormControl<string | null | undefined>(undefined),
			offeringType: new FormControl<string | null | undefined>(undefined),
			offeringTypeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnItemsBundleItems {

		/**
		 * Service identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Service name. */
		name?: string | null;

		/**
		 * Service price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Service type. */
		type?: string | null;
	}
	export interface AddCouponsReturnItemsBundleItemsFormProperties {

		/**
		 * Service identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Service name. */
		name: FormControl<string | null | undefined>,

		/**
		 * Service price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** Service type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAddCouponsReturnItemsBundleItemsFormGroup() {
		return new FormGroup<AddCouponsReturnItemsBundleItemsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnItemsPriceDefinition {

		/**
		 * Item's calculated unitary selling price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		calculatedSellingPrice?: number | null;

		/** Array of objects, each containing value (in cents) and quantity for the different rounding instances that can be combined to form the correctly rounded total. */
		AddCouponsReturnItemsPriceDefinitionSellingPrices?: Array<AddCouponsReturnItemsPriceDefinitionSellingPrices>;

		/**
		 * Total value for all units of the item in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface AddCouponsReturnItemsPriceDefinitionFormProperties {

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
	export function CreateAddCouponsReturnItemsPriceDefinitionFormGroup() {
		return new FormGroup<AddCouponsReturnItemsPriceDefinitionFormProperties>({
			calculatedSellingPrice: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnItemsPriceDefinitionSellingPrices {

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
	export interface AddCouponsReturnItemsPriceDefinitionSellingPricesFormProperties {

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
	export function CreateAddCouponsReturnItemsPriceDefinitionSellingPricesFormGroup() {
		return new FormGroup<AddCouponsReturnItemsPriceDefinitionSellingPricesFormProperties>({
			quantity: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnItemsPriceTags {

		/** Price tag identifier. */
		identifier?: string | null;

		/** Indicates whether price tag value is applied through a percentage. */
		isPercentual?: boolean | null;

		/** Price tag name. */
		name?: string | null;

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
	export interface AddCouponsReturnItemsPriceTagsFormProperties {

		/** Price tag identifier. */
		identifier: FormControl<string | null | undefined>,

		/** Indicates whether price tag value is applied through a percentage. */
		isPercentual: FormControl<boolean | null | undefined>,

		/** Price tag name. */
		name: FormControl<string | null | undefined>,

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
	export function CreateAddCouponsReturnItemsPriceTagsFormGroup() {
		return new FormGroup<AddCouponsReturnItemsPriceTagsFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined),
			isPercentual: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rawValue: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnItemsProductCategories {

		/** Product category corresponding to the ID in the field key. */
		'{ID}'?: string | null;
	}
	export interface AddCouponsReturnItemsProductCategoriesFormProperties {

		/** Product category corresponding to the ID in the field key. */
		'{ID}': FormControl<string | null | undefined>,
	}
	export function CreateAddCouponsReturnItemsProductCategoriesFormGroup() {
		return new FormGroup<AddCouponsReturnItemsProductCategoriesFormProperties>({
			'{ID}': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnItemsOrdination {

		/** Indicates whether the ordering is ascending. */
		ascending?: boolean | null;

		/** Criteria adopted to order the items in the list. */
		criteria?: string | null;
	}
	export interface AddCouponsReturnItemsOrdinationFormProperties {

		/** Indicates whether the ordering is ascending. */
		ascending: FormControl<boolean | null | undefined>,

		/** Criteria adopted to order the items in the list. */
		criteria: FormControl<string | null | undefined>,
	}
	export function CreateAddCouponsReturnItemsOrdinationFormGroup() {
		return new FormGroup<AddCouponsReturnItemsOrdinationFormProperties>({
			ascending: new FormControl<boolean | null | undefined>(undefined),
			criteria: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnMarketingData {

		/** Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order. */
		coupon?: string | null;

		/** UTM campaign. */
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
	export interface AddCouponsReturnMarketingDataFormProperties {

		/** Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order. */
		coupon: FormControl<string | null | undefined>,

		/** UTM campaign. */
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
	export function CreateAddCouponsReturnMarketingDataFormGroup() {
		return new FormGroup<AddCouponsReturnMarketingDataFormProperties>({
			coupon: new FormControl<string | null | undefined>(undefined),
			utmCampaign: new FormControl<string | null | undefined>(undefined),
			utmMedium: new FormControl<string | null | undefined>(undefined),
			utmSource: new FormControl<string | null | undefined>(undefined),
			utmiCampaign: new FormControl<string | null | undefined>(undefined),
			utmiPage: new FormControl<string | null | undefined>(undefined),
			utmiPart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnPaymentData {

		/** Gift card information, if it applies to the order. */
		AddCouponsReturnPaymentDataGiftCards?: Array<AddCouponsReturnPaymentDataGiftCards>;

		/** Information on each transaction pertinent to the order. */
		AddCouponsReturnPaymentDataTransactions?: Array<AddCouponsReturnPaymentDataTransactions>;
	}
	export interface AddCouponsReturnPaymentDataFormProperties {
	}
	export function CreateAddCouponsReturnPaymentDataFormGroup() {
		return new FormGroup<AddCouponsReturnPaymentDataFormProperties>({
		});

	}

	export interface AddCouponsReturnPaymentDataGiftCards {

		/**
		 * Gift card balance in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		balance?: number | null;

		/** Gift card ID. */
		id?: string | null;

		/** Indicates whether gift card is in use. */
		inUse?: boolean | null;

		/** Indicates whether gift card is special. */
		isSpecialCard?: boolean | null;

		/** Gift card name. */
		name?: string | null;

		/** Gift card redemption code. */
		redemptionCode?: string | null;

		/**
		 * Gift card value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface AddCouponsReturnPaymentDataGiftCardsFormProperties {

		/**
		 * Gift card balance in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		balance: FormControl<number | null | undefined>,

		/** Gift card ID. */
		id: FormControl<string | null | undefined>,

		/** Indicates whether gift card is in use. */
		inUse: FormControl<boolean | null | undefined>,

		/** Indicates whether gift card is special. */
		isSpecialCard: FormControl<boolean | null | undefined>,

		/** Gift card name. */
		name: FormControl<string | null | undefined>,

		/** Gift card redemption code. */
		redemptionCode: FormControl<string | null | undefined>,

		/**
		 * Gift card value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateAddCouponsReturnPaymentDataGiftCardsFormGroup() {
		return new FormGroup<AddCouponsReturnPaymentDataGiftCardsFormProperties>({
			balance: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			inUse: new FormControl<boolean | null | undefined>(undefined),
			isSpecialCard: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			redemptionCode: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnPaymentDataTransactions {

		/** Indicates whether transaction is active. */
		isActive?: boolean | null;

		/** Merchant name. */
		merchantName?: string | null;

		/** Information on each payment. */
		AddCouponsReturnPaymentDataTransactionsPayments?: Array<AddCouponsReturnPaymentDataTransactionsPayments>;

		/** Indicates whather transaction is shared. */
		sharedTransaction?: boolean | null;

		/** Transaction ID. */
		transactionId?: string | null;
	}
	export interface AddCouponsReturnPaymentDataTransactionsFormProperties {

		/** Indicates whether transaction is active. */
		isActive: FormControl<boolean | null | undefined>,

		/** Merchant name. */
		merchantName: FormControl<string | null | undefined>,

		/** Indicates whather transaction is shared. */
		sharedTransaction: FormControl<boolean | null | undefined>,

		/** Transaction ID. */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateAddCouponsReturnPaymentDataTransactionsFormGroup() {
		return new FormGroup<AddCouponsReturnPaymentDataTransactionsFormProperties>({
			isActive: new FormControl<boolean | null | undefined>(undefined),
			merchantName: new FormControl<string | null | undefined>(undefined),
			sharedTransaction: new FormControl<boolean | null | undefined>(undefined),
			transactionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnPaymentDataTransactionsPayments {

		/** Account ID. */
		accountId?: string | null;

		/** Bin. */
		bin?: string | null;

		/**
		 * Number of installments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		installments?: number | null;

		/** Payment system. */
		paymentSystem?: string | null;

		/**
		 * Reference value for calculating interest rates, in case it applies. Displayed in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		referenceValue?: number | null;

		/**
		 * Value including interest, in case it applies. Displayed in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface AddCouponsReturnPaymentDataTransactionsPaymentsFormProperties {

		/** Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** Bin. */
		bin: FormControl<string | null | undefined>,

		/**
		 * Number of installments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		installments: FormControl<number | null | undefined>,

		/** Payment system. */
		paymentSystem: FormControl<string | null | undefined>,

		/**
		 * Reference value for calculating interest rates, in case it applies. Displayed in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		referenceValue: FormControl<number | null | undefined>,

		/**
		 * Value including interest, in case it applies. Displayed in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateAddCouponsReturnPaymentDataTransactionsPaymentsFormGroup() {
		return new FormGroup<AddCouponsReturnPaymentDataTransactionsPaymentsFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			bin: new FormControl<string | null | undefined>(undefined),
			installments: new FormControl<number | null | undefined>(undefined),
			paymentSystem: new FormControl<string | null | undefined>(undefined),
			referenceValue: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnRatesAndBenefitsData {

		/** List with rates and benefits identifiers. */
		rateAndBenefitsIdentifiers?: Array<string>;

		/** List with rates and benefits teasers. */
		teaser?: Array<string>;
	}
	export interface AddCouponsReturnRatesAndBenefitsDataFormProperties {
	}
	export function CreateAddCouponsReturnRatesAndBenefitsDataFormGroup() {
		return new FormGroup<AddCouponsReturnRatesAndBenefitsDataFormProperties>({
		});

	}

	export interface AddCouponsReturnSellers {

		/** Seller ID. */
		id?: string | null;

		/** Seller logo. */
		logo?: string | null;

		/** Seller name. */
		name?: string | null;
	}
	export interface AddCouponsReturnSellersFormProperties {

		/** Seller ID. */
		id: FormControl<string | null | undefined>,

		/** Seller logo. */
		logo: FormControl<string | null | undefined>,

		/** Seller name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAddCouponsReturnSellersFormGroup() {
		return new FormGroup<AddCouponsReturnSellersFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnShippingData {

		/** Address information. */
		address?: AddCouponsReturnShippingDataAddress;

		/** Array with information on the available addresses for the order. */
		AddCouponsReturnShippingDataAvailableAddresses?: Array<AddCouponsReturnShippingDataAvailableAddresses>;

		/** Array with logistics information. Each object in this array corresponds to an object in the `items` array, based on the respective `itemIndex`. */
		AddCouponsReturnShippingDataLogisticsInfo?: Array<AddCouponsReturnShippingDataLogisticsInfo>;

		/** Array with information on the selected addresses for the order. */
		AddCouponsReturnShippingDataSelectedAddresses?: Array<AddCouponsReturnShippingDataSelectedAddresses>;
	}
	export interface AddCouponsReturnShippingDataFormProperties {
	}
	export function CreateAddCouponsReturnShippingDataFormGroup() {
		return new FormGroup<AddCouponsReturnShippingDataFormProperties>({
		});

	}

	export interface AddCouponsReturnShippingDataAddress {

		/** Address ID. */
		addressId?: string | null;

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address, in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Indicates whether address is disposable. */
		isDisposable?: boolean | null;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal code. */
		postalCode?: string | null;

		/** Name of the person who is going to receive the order. */
		receiverName?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the shipping address. */
		street?: string | null;
	}
	export interface AddCouponsReturnShippingDataAddressFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address, in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Indicates whether address is disposable. */
		isDisposable: FormControl<boolean | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the person who is going to receive the order. */
		receiverName: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the shipping address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateAddCouponsReturnShippingDataAddressFormGroup() {
		return new FormGroup<AddCouponsReturnShippingDataAddressFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			isDisposable: new FormControl<boolean | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnShippingDataAvailableAddresses {

		/** Address ID. */
		addressId?: string | null;

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address, in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Indicates whether address is disposable. */
		isDisposable?: boolean | null;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal code. */
		postalCode?: string | null;

		/** Name of the person who is going to receive the order. */
		receiverName?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the shipping address. */
		street?: string | null;
	}
	export interface AddCouponsReturnShippingDataAvailableAddressesFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address, in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Indicates whether address is disposable. */
		isDisposable: FormControl<boolean | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the person who is going to receive the order. */
		receiverName: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the shipping address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateAddCouponsReturnShippingDataAvailableAddressesFormGroup() {
		return new FormGroup<AddCouponsReturnShippingDataAvailableAddressesFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			isDisposable: new FormControl<boolean | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnShippingDataLogisticsInfo {

		/** Address ID. */
		addressId?: string | null;

		/** List of available delivery channels. */
		AddCouponsReturnShippingDataLogisticsInfoDeliveryChannels?: Array<AddCouponsReturnShippingDataLogisticsInfoDeliveryChannels>;

		/** Item ID. */
		itemId?: string | null;

		/**
		 * Index corresponding to the position of the object in the `items` array.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex?: number | null;

		/** Delivery channel selected by the customer. */
		selectedDeliveryChannel?: string | null;

		/** SLA selected by the customer. */
		selectedSla?: string | null;

		/** List of countries that the item may be shipped to. */
		shipsTo?: Array<string>;

		/** Information on available SLAs. */
		AddCouponsReturnShippingDataLogisticsInfoSlas?: Array<AddCouponsReturnShippingDataLogisticsInfoSlas>;
	}
	export interface AddCouponsReturnShippingDataLogisticsInfoFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Item ID. */
		itemId: FormControl<string | null | undefined>,

		/**
		 * Index corresponding to the position of the object in the `items` array.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex: FormControl<number | null | undefined>,

		/** Delivery channel selected by the customer. */
		selectedDeliveryChannel: FormControl<string | null | undefined>,

		/** SLA selected by the customer. */
		selectedSla: FormControl<string | null | undefined>,
	}
	export function CreateAddCouponsReturnShippingDataLogisticsInfoFormGroup() {
		return new FormGroup<AddCouponsReturnShippingDataLogisticsInfoFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			itemId: new FormControl<string | null | undefined>(undefined),
			itemIndex: new FormControl<number | null | undefined>(undefined),
			selectedDeliveryChannel: new FormControl<string | null | undefined>(undefined),
			selectedSla: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnShippingDataLogisticsInfoDeliveryChannels {

		/** Delivery channel ID. */
		id?: string | null;
	}
	export interface AddCouponsReturnShippingDataLogisticsInfoDeliveryChannelsFormProperties {

		/** Delivery channel ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateAddCouponsReturnShippingDataLogisticsInfoDeliveryChannelsFormGroup() {
		return new FormGroup<AddCouponsReturnShippingDataLogisticsInfoDeliveryChannelsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnShippingDataLogisticsInfoSlas {

		/** Delivery channel. */
		deliveryChannel?: string | null;

		/** Information on each delivery ID. */
		AddCouponsReturnShippingDataLogisticsInfoSlasDeliveryIds?: Array<AddCouponsReturnShippingDataLogisticsInfoSlasDeliveryIds>;

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
		pickupStoreInfo?: AddCouponsReturnShippingDataLogisticsInfoSlasPickupStoreInfo;

		/** Polygon name. */
		polygonName?: string | null;

		/**
		 * Price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Shipping estimate. For instance, Three business days will be represented `3bd`. */
		shippingEstimate?: string | null;

		/** Shipping estimate date. */
		shippingEstimateDate?: string | null;

		/**
		 * Tax in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax?: number | null;

		/** Transit time. For instance, "three business days" is represented `3bd`. */
		transitTime?: string | null;
	}
	export interface AddCouponsReturnShippingDataLogisticsInfoSlasFormProperties {

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

		/** Shipping estimate. For instance, Three business days will be represented `3bd`. */
		shippingEstimate: FormControl<string | null | undefined>,

		/** Shipping estimate date. */
		shippingEstimateDate: FormControl<string | null | undefined>,

		/**
		 * Tax in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax: FormControl<number | null | undefined>,

		/** Transit time. For instance, "three business days" is represented `3bd`. */
		transitTime: FormControl<string | null | undefined>,
	}
	export function CreateAddCouponsReturnShippingDataLogisticsInfoSlasFormGroup() {
		return new FormGroup<AddCouponsReturnShippingDataLogisticsInfoSlasFormProperties>({
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

	export interface AddCouponsReturnShippingDataLogisticsInfoSlasDeliveryIds {

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
	export interface AddCouponsReturnShippingDataLogisticsInfoSlasDeliveryIdsFormProperties {

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
	export function CreateAddCouponsReturnShippingDataLogisticsInfoSlasDeliveryIdsFormGroup() {
		return new FormGroup<AddCouponsReturnShippingDataLogisticsInfoSlasDeliveryIdsFormProperties>({
			courierId: new FormControl<string | null | undefined>(undefined),
			courierName: new FormControl<string | null | undefined>(undefined),
			dockId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			warehouseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnShippingDataLogisticsInfoSlasPickupStoreInfo {

		/** Additional information. */
		additionalInfo?: string | null;

		/** Address information. */
		address?: AddCouponsReturnShippingDataLogisticsInfoSlasPickupStoreInfoAddress;

		/** Corresponding dock ID. */
		dockId?: string | null;

		/** Friendly name. */
		friendlyName?: string | null;

		/** Indicates whether it is the pickup store. */
		isPickupStore?: boolean | null;
	}
	export interface AddCouponsReturnShippingDataLogisticsInfoSlasPickupStoreInfoFormProperties {

		/** Additional information. */
		additionalInfo: FormControl<string | null | undefined>,

		/** Corresponding dock ID. */
		dockId: FormControl<string | null | undefined>,

		/** Friendly name. */
		friendlyName: FormControl<string | null | undefined>,

		/** Indicates whether it is the pickup store. */
		isPickupStore: FormControl<boolean | null | undefined>,
	}
	export function CreateAddCouponsReturnShippingDataLogisticsInfoSlasPickupStoreInfoFormGroup() {
		return new FormGroup<AddCouponsReturnShippingDataLogisticsInfoSlasPickupStoreInfoFormProperties>({
			additionalInfo: new FormControl<string | null | undefined>(undefined),
			dockId: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			isPickupStore: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnShippingDataLogisticsInfoSlasPickupStoreInfoAddress {

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address, in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal code. */
		postalCode?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the shipping address. */
		street?: string | null;
	}
	export interface AddCouponsReturnShippingDataLogisticsInfoSlasPickupStoreInfoAddressFormProperties {

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address, in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the shipping address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateAddCouponsReturnShippingDataLogisticsInfoSlasPickupStoreInfoAddressFormGroup() {
		return new FormGroup<AddCouponsReturnShippingDataLogisticsInfoSlasPickupStoreInfoAddressFormProperties>({
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddCouponsReturnShippingDataSelectedAddresses {

		/** Address ID. */
		addressId?: string | null;

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address, in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Indicates whether address is disposable. */
		isDisposable?: boolean | null;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal code. */
		postalCode?: string | null;

		/** Name of the person who is going to receive the order. */
		receiverName?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the shipping address. */
		street?: string | null;
	}
	export interface AddCouponsReturnShippingDataSelectedAddressesFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address, in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Indicates whether address is disposable. */
		isDisposable: FormControl<boolean | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the person who is going to receive the order. */
		receiverName: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the shipping address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateAddCouponsReturnShippingDataSelectedAddressesFormGroup() {
		return new FormGroup<AddCouponsReturnShippingDataSelectedAddressesFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			isDisposable: new FormControl<boolean | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsPostBody {

		/** Array containing the cart items. Each object inside this array corresponds to a different item. */
		ItemsPostBodyOrderItems?: Array<ItemsPostBodyOrderItems>;
	}
	export interface ItemsPostBodyFormProperties {
	}
	export function CreateItemsPostBodyFormGroup() {
		return new FormGroup<ItemsPostBodyFormProperties>({
		});

	}

	export interface ItemsPostBodyOrderItems {

		/**
		 * The ID of the SKU in VTEX platform.
		 * Required
		 */
		id: string;

		/**
		 * The position of the item in the array.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;

		/**
		 * Price of the item in cents. Send this value in case you want to make a bulk price change.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/**
		 * The quantity of the item (SKU) in the cart.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;

		/**
		 * The seller responsible for the SKU.
		 * Required
		 */
		seller: string;
	}
	export interface ItemsPostBodyOrderItemsFormProperties {

		/**
		 * The ID of the SKU in VTEX platform.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The position of the item in the array.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: FormControl<number | null | undefined>,

		/**
		 * Price of the item in cents. Send this value in case you want to make a bulk price change.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * The quantity of the item (SKU) in the cart.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/**
		 * The seller responsible for the SKU.
		 * Required
		 */
		seller: FormControl<string | null | undefined>,
	}
	export function CreateItemsPostBodyOrderItemsFormGroup() {
		return new FormGroup<ItemsPostBodyOrderItemsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			index: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			seller: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ItemsReturn {

		/** Permission to modify item price manually. */
		allowManualPrice?: boolean | null;

		/** Available accounts. */
		availableAccounts?: Array<string>;

		/** Information on each available address. */
		ItemsReturnAvailableAddresses?: Array<ItemsReturnAvailableAddresses>;

		/** Data can be edited. */
		canEditData?: boolean | null;

		/** Object containing preferences from the client who placed the order. */
		clientPreferencesData?: ItemsReturnClientPreferencesData;

		/** Customer's profile information. */
		clientProfileData?: ItemsReturnClientProfileData;

		/** Object containing commercial condition information. */
		commercialConditionData?: string | null;

		/** Customer additional information. */
		customData?: string | null;

		/** Gift registry list information. */
		giftRegistryData?: string | null;

		/** Hooks information. */
		hooksData?: string | null;

		/** Ignore customer profile data. */
		ignoreProfileData?: boolean | null;

		/** Object containing information pertinent to the order's invoice. */
		invoiceData?: string | null;

		/** Indicates whether order is checked in. */
		isCheckedIn?: boolean | null;

		/** Item metadata. */
		itemMetadata?: ItemsReturnItemMetadata;

		/** Information on each item in the order. */
		ItemsReturnItems?: Array<ItemsReturnItems>;

		/** Object containing information about the ordering of items within the orderForm. */
		itemsOrdination?: ItemsReturnItemsOrdination;

		/** Indicates whether the user is logged into the store. */
		loggedIn?: boolean | null;

		/** Object containing promotion data such as coupon tracking information and internal or external UTMs. */
		marketingData?: ItemsReturnMarketingData;

		/** Array containing an object for each message generated by our servers while processing the request. */
		messages?: Array<string>;

		/** Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1). */
		openTextField?: string | null;

		/** ID of the orderForm corresponding to a specific cart. */
		orderFormId?: string | null;

		/** Information on the order's payment. */
		paymentData?: ItemsReturnPaymentData;

		/** Profile provider. */
		profileProvider?: string | null;

		/** Information on rates and benefits that apply to the order. */
		ratesAndBenefitsData?: ItemsReturnRatesAndBenefitsData;

		/** Attribute created by the seller, in their VTEX store configuration. */
		salesChannel?: string | null;

		/** Array containing the data of the item selected as a gift. */
		selectableGifts?: Array<string>;

		/** Information on each seller. */
		ItemsReturnSellers?: Array<ItemsReturnSellers>;

		/** Shipping information pertinent to the order. */
		shippingData?: ItemsReturnShippingData;

		/** ID of the store. */
		storeId?: string | null;

		/** Object containing data from the store's configuration (stored in VTEX's License Manager). */
		storePreferencesData?: string | null;

		/** Subscription information. */
		subscriptionData?: string | null;

		/** Array containing an object for each totalizer for the purchase. Totalizers contain the sum of values for a specific part of the order (e.g. Total item value, Total shipping value). */
		totalizers?: Array<string>;

		/** Unique ID associated with the customer profile. */
		userProfileId?: string | null;

		/** User type. */
		userType?: string | null;

		/**
		 * Total value of the order without separating cents. For example, $24.99 is represented `2499`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface ItemsReturnFormProperties {

		/** Permission to modify item price manually. */
		allowManualPrice: FormControl<boolean | null | undefined>,

		/** Data can be edited. */
		canEditData: FormControl<boolean | null | undefined>,

		/** Object containing commercial condition information. */
		commercialConditionData: FormControl<string | null | undefined>,

		/** Customer additional information. */
		customData: FormControl<string | null | undefined>,

		/** Gift registry list information. */
		giftRegistryData: FormControl<string | null | undefined>,

		/** Hooks information. */
		hooksData: FormControl<string | null | undefined>,

		/** Ignore customer profile data. */
		ignoreProfileData: FormControl<boolean | null | undefined>,

		/** Object containing information pertinent to the order's invoice. */
		invoiceData: FormControl<string | null | undefined>,

		/** Indicates whether order is checked in. */
		isCheckedIn: FormControl<boolean | null | undefined>,

		/** Indicates whether the user is logged into the store. */
		loggedIn: FormControl<boolean | null | undefined>,

		/** Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1). */
		openTextField: FormControl<string | null | undefined>,

		/** ID of the orderForm corresponding to a specific cart. */
		orderFormId: FormControl<string | null | undefined>,

		/** Profile provider. */
		profileProvider: FormControl<string | null | undefined>,

		/** Attribute created by the seller, in their VTEX store configuration. */
		salesChannel: FormControl<string | null | undefined>,

		/** ID of the store. */
		storeId: FormControl<string | null | undefined>,

		/** Object containing data from the store's configuration (stored in VTEX's License Manager). */
		storePreferencesData: FormControl<string | null | undefined>,

		/** Subscription information. */
		subscriptionData: FormControl<string | null | undefined>,

		/** Unique ID associated with the customer profile. */
		userProfileId: FormControl<string | null | undefined>,

		/** User type. */
		userType: FormControl<string | null | undefined>,

		/**
		 * Total value of the order without separating cents. For example, $24.99 is represented `2499`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateItemsReturnFormGroup() {
		return new FormGroup<ItemsReturnFormProperties>({
			allowManualPrice: new FormControl<boolean | null | undefined>(undefined),
			canEditData: new FormControl<boolean | null | undefined>(undefined),
			commercialConditionData: new FormControl<string | null | undefined>(undefined),
			customData: new FormControl<string | null | undefined>(undefined),
			giftRegistryData: new FormControl<string | null | undefined>(undefined),
			hooksData: new FormControl<string | null | undefined>(undefined),
			ignoreProfileData: new FormControl<boolean | null | undefined>(undefined),
			invoiceData: new FormControl<string | null | undefined>(undefined),
			isCheckedIn: new FormControl<boolean | null | undefined>(undefined),
			loggedIn: new FormControl<boolean | null | undefined>(undefined),
			openTextField: new FormControl<string | null | undefined>(undefined),
			orderFormId: new FormControl<string | null | undefined>(undefined),
			profileProvider: new FormControl<string | null | undefined>(undefined),
			salesChannel: new FormControl<string | null | undefined>(undefined),
			storeId: new FormControl<string | null | undefined>(undefined),
			storePreferencesData: new FormControl<string | null | undefined>(undefined),
			subscriptionData: new FormControl<string | null | undefined>(undefined),
			userProfileId: new FormControl<string | null | undefined>(undefined),
			userType: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnAvailableAddresses {

		/** Address ID. */
		addressId?: string | null;

		/** Address type. */
		addressType?: string | null;

		/** City of the address. */
		city?: string | null;

		/** Complement to the address. */
		complement?: string | null;

		/** Country of the address. ISO three-letter code. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Indicates whether address is disposable. */
		isDisposable?: boolean | null;

		/** Neighborhood of the address. */
		neighborhood?: string | null;

		/** Number of the address. */
		number?: string | null;

		/** Name of the receiver. */
		receiverName?: string | null;

		/** Reference that may help in the location of the address. */
		reference?: string | null;

		/** State of the address. */
		state?: string | null;

		/** Street of the address. */
		street?: string | null;
	}
	export interface ItemsReturnAvailableAddressesFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Address type. */
		addressType: FormControl<string | null | undefined>,

		/** City of the address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the address. */
		complement: FormControl<string | null | undefined>,

		/** Country of the address. ISO three-letter code. */
		country: FormControl<string | null | undefined>,

		/** Indicates whether address is disposable. */
		isDisposable: FormControl<boolean | null | undefined>,

		/** Neighborhood of the address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the address. */
		number: FormControl<string | null | undefined>,

		/** Name of the receiver. */
		receiverName: FormControl<string | null | undefined>,

		/** Reference that may help in the location of the address. */
		reference: FormControl<string | null | undefined>,

		/** State of the address. */
		state: FormControl<string | null | undefined>,

		/** Street of the address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateItemsReturnAvailableAddressesFormGroup() {
		return new FormGroup<ItemsReturnAvailableAddressesFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			isDisposable: new FormControl<boolean | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnClientPreferencesData {

		/** Client's locale. Examples: `pt-BR` and `en-US`. */
		locale?: string | null;

		/** `true` if the client opted to receive newsletter from the store. */
		optinNewsLetter?: boolean | null;
	}
	export interface ItemsReturnClientPreferencesDataFormProperties {

		/** Client's locale. Examples: `pt-BR` and `en-US`. */
		locale: FormControl<string | null | undefined>,

		/** `true` if the client opted to receive newsletter from the store. */
		optinNewsLetter: FormControl<boolean | null | undefined>,
	}
	export function CreateItemsReturnClientPreferencesDataFormGroup() {
		return new FormGroup<ItemsReturnClientPreferencesDataFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
			optinNewsLetter: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnClientProfileData {

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
	export interface ItemsReturnClientProfileDataFormProperties {

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
	export function CreateItemsReturnClientProfileDataFormGroup() {
		return new FormGroup<ItemsReturnClientProfileDataFormProperties>({
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

	export interface ItemsReturnItemMetadata {

		/** List of objects containing metadata on each item in the order. */
		ItemsReturnItemMetadataItems?: Array<ItemsReturnItemMetadataItems>;
	}
	export interface ItemsReturnItemMetadataFormProperties {
	}
	export function CreateItemsReturnItemMetadataFormGroup() {
		return new FormGroup<ItemsReturnItemMetadataFormProperties>({
		});

	}

	export interface ItemsReturnItemMetadataItems {

		/** Detail URL. */
		detailUrl?: string | null;

		/** European Article Number. */
		ean?: string | null;

		/** Item ID. */
		id?: string | null;

		/** Image URL. */
		imageUrl?: string | null;

		/** Product name. */
		name?: string | null;

		/** Product ID. */
		productId?: string | null;

		/** Ref ID. */
		refId?: string | null;

		/** Seller. */
		seller?: string | null;

		/** SKU name. */
		skuName?: string | null;
	}
	export interface ItemsReturnItemMetadataItemsFormProperties {

		/** Detail URL. */
		detailUrl: FormControl<string | null | undefined>,

		/** European Article Number. */
		ean: FormControl<string | null | undefined>,

		/** Item ID. */
		id: FormControl<string | null | undefined>,

		/** Image URL. */
		imageUrl: FormControl<string | null | undefined>,

		/** Product name. */
		name: FormControl<string | null | undefined>,

		/** Product ID. */
		productId: FormControl<string | null | undefined>,

		/** Ref ID. */
		refId: FormControl<string | null | undefined>,

		/** Seller. */
		seller: FormControl<string | null | undefined>,

		/** SKU name. */
		skuName: FormControl<string | null | undefined>,
	}
	export function CreateItemsReturnItemMetadataItemsFormGroup() {
		return new FormGroup<ItemsReturnItemMetadataItemsFormProperties>({
			detailUrl: new FormControl<string | null | undefined>(undefined),
			ean: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			refId: new FormControl<string | null | undefined>(undefined),
			seller: new FormControl<string | null | undefined>(undefined),
			skuName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnItems {

		/** Additional information. */
		additionalInfo?: ItemsReturnItemsAdditionalInfo;

		/** Array containing information on attachments. */
		attachments?: Array<string>;

		/** Availability. */
		availability?: string | null;

		/** Information on services sold along with the SKU. Example: a gift package. */
		ItemsReturnItemsBundleItems?: Array<ItemsReturnItemsBundleItems>;

		/** Detail URL. */
		detailUrl?: string | null;

		/** European Article Number. */
		ean?: string | null;

		/** ID of the item. */
		id?: string | null;

		/** Image URL. */
		imageUrl?: string | null;

		/** Indicates whether item is a gift. */
		isGift?: boolean | null;

		/**
		 * List price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice?: number | null;

		/**
		 * Manual price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		manualPrice?: number | null;

		/** User that applied the manual price, if that is the case. */
		manualPriceAppliedBy?: string | null;

		/** Manufacturer code. */
		manufacturerCode?: string | null;

		/** Measurement unit. */
		measurementUnit?: string | null;

		/** Modal type. */
		modalType?: string | null;

		/** Product name. */
		name?: string | null;

		/** Parent assembly binding. */
		parentAssemblyBinding?: string | null;

		/**
		 * Parent item index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		parentItemIndex?: number | null;

		/** Presale date. */
		preSaleDate?: string | null;

		/**
		 * Price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Price information for all units of a specific item. */
		priceDefinition?: ItemsReturnItemsPriceDefinition;

		/** Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order. */
		ItemsReturnItemsPriceTags?: Array<ItemsReturnItemsPriceTags>;

		/** Price expiration date and time. */
		priceValidUntil?: string | null;

		/** Object, where each field is an ID from `productCategoryIds`. */
		productCategories?: ItemsReturnItemsProductCategories;

		/** Product category IDs. */
		productCategoryIds?: string | null;

		/** Product ID. */
		productId?: string | null;

		/** Product Ref ID. */
		productRefId?: string | null;

		/**
		 * Quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity?: number | null;

		/** Ref ID. */
		refId?: string | null;

		/**
		 * Reward value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rewardValue?: number | null;

		/** Seller. */
		seller?: string | null;

		/** Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order. */
		sellerChain?: Array<string>;

		/**
		 * Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sellingPrice?: number | null;

		/** SKU name. */
		skuName?: string | null;

		/**
		 * Tax value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax?: number | null;

		/** Unique ID. */
		uniqueId?: string | null;

		/**
		 * Unit multiplier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unitMultiplier?: number | null;
	}
	export interface ItemsReturnItemsFormProperties {

		/** Availability. */
		availability: FormControl<string | null | undefined>,

		/** Detail URL. */
		detailUrl: FormControl<string | null | undefined>,

		/** European Article Number. */
		ean: FormControl<string | null | undefined>,

		/** ID of the item. */
		id: FormControl<string | null | undefined>,

		/** Image URL. */
		imageUrl: FormControl<string | null | undefined>,

		/** Indicates whether item is a gift. */
		isGift: FormControl<boolean | null | undefined>,

		/**
		 * List price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * Manual price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		manualPrice: FormControl<number | null | undefined>,

		/** User that applied the manual price, if that is the case. */
		manualPriceAppliedBy: FormControl<string | null | undefined>,

		/** Manufacturer code. */
		manufacturerCode: FormControl<string | null | undefined>,

		/** Measurement unit. */
		measurementUnit: FormControl<string | null | undefined>,

		/** Modal type. */
		modalType: FormControl<string | null | undefined>,

		/** Product name. */
		name: FormControl<string | null | undefined>,

		/** Parent assembly binding. */
		parentAssemblyBinding: FormControl<string | null | undefined>,

		/**
		 * Parent item index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		parentItemIndex: FormControl<number | null | undefined>,

		/** Presale date. */
		preSaleDate: FormControl<string | null | undefined>,

		/**
		 * Price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** Price expiration date and time. */
		priceValidUntil: FormControl<string | null | undefined>,

		/** Product category IDs. */
		productCategoryIds: FormControl<string | null | undefined>,

		/** Product ID. */
		productId: FormControl<string | null | undefined>,

		/** Product Ref ID. */
		productRefId: FormControl<string | null | undefined>,

		/**
		 * Quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** Ref ID. */
		refId: FormControl<string | null | undefined>,

		/**
		 * Reward value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rewardValue: FormControl<number | null | undefined>,

		/** Seller. */
		seller: FormControl<string | null | undefined>,

		/**
		 * Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sellingPrice: FormControl<number | null | undefined>,

		/** SKU name. */
		skuName: FormControl<string | null | undefined>,

		/**
		 * Tax value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax: FormControl<number | null | undefined>,

		/** Unique ID. */
		uniqueId: FormControl<string | null | undefined>,

		/**
		 * Unit multiplier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unitMultiplier: FormControl<number | null | undefined>,
	}
	export function CreateItemsReturnItemsFormGroup() {
		return new FormGroup<ItemsReturnItemsFormProperties>({
			availability: new FormControl<string | null | undefined>(undefined),
			detailUrl: new FormControl<string | null | undefined>(undefined),
			ean: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			isGift: new FormControl<boolean | null | undefined>(undefined),
			listPrice: new FormControl<number | null | undefined>(undefined),
			manualPrice: new FormControl<number | null | undefined>(undefined),
			manualPriceAppliedBy: new FormControl<string | null | undefined>(undefined),
			manufacturerCode: new FormControl<string | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			modalType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentAssemblyBinding: new FormControl<string | null | undefined>(undefined),
			parentItemIndex: new FormControl<number | null | undefined>(undefined),
			preSaleDate: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			priceValidUntil: new FormControl<string | null | undefined>(undefined),
			productCategoryIds: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			productRefId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			refId: new FormControl<string | null | undefined>(undefined),
			rewardValue: new FormControl<number | null | undefined>(undefined),
			seller: new FormControl<string | null | undefined>(undefined),
			sellingPrice: new FormControl<number | null | undefined>(undefined),
			skuName: new FormControl<string | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
			uniqueId: new FormControl<string | null | undefined>(undefined),
			unitMultiplier: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnItemsAdditionalInfo {

		/** Brand ID. */
		brandId?: string | null;

		/** Brand name. */
		brandName?: string | null;

		/** Dimension. */
		dimension?: string | null;

		/** Offering information. */
		offeringInfo?: string | null;

		/** Offering type. */
		offeringType?: string | null;

		/** Offering type ID. */
		offeringTypeId?: string | null;
	}
	export interface ItemsReturnItemsAdditionalInfoFormProperties {

		/** Brand ID. */
		brandId: FormControl<string | null | undefined>,

		/** Brand name. */
		brandName: FormControl<string | null | undefined>,

		/** Dimension. */
		dimension: FormControl<string | null | undefined>,

		/** Offering information. */
		offeringInfo: FormControl<string | null | undefined>,

		/** Offering type. */
		offeringType: FormControl<string | null | undefined>,

		/** Offering type ID. */
		offeringTypeId: FormControl<string | null | undefined>,
	}
	export function CreateItemsReturnItemsAdditionalInfoFormGroup() {
		return new FormGroup<ItemsReturnItemsAdditionalInfoFormProperties>({
			brandId: new FormControl<string | null | undefined>(undefined),
			brandName: new FormControl<string | null | undefined>(undefined),
			dimension: new FormControl<string | null | undefined>(undefined),
			offeringInfo: new FormControl<string | null | undefined>(undefined),
			offeringType: new FormControl<string | null | undefined>(undefined),
			offeringTypeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnItemsBundleItems {

		/**
		 * Service identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Service name. */
		name?: string | null;

		/**
		 * Service price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Service type. */
		type?: string | null;
	}
	export interface ItemsReturnItemsBundleItemsFormProperties {

		/**
		 * Service identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Service name. */
		name: FormControl<string | null | undefined>,

		/**
		 * Service price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** Service type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateItemsReturnItemsBundleItemsFormGroup() {
		return new FormGroup<ItemsReturnItemsBundleItemsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnItemsPriceDefinition {

		/**
		 * Item's calculated unitary selling price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		calculatedSellingPrice?: number | null;

		/** Array of objects, each containing value (in cents) and quantity for the different rounding instances that can be combined to form the correctly rounded total. */
		ItemsReturnItemsPriceDefinitionSellingPrices?: Array<ItemsReturnItemsPriceDefinitionSellingPrices>;

		/**
		 * Total value for all units of the item in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface ItemsReturnItemsPriceDefinitionFormProperties {

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
	export function CreateItemsReturnItemsPriceDefinitionFormGroup() {
		return new FormGroup<ItemsReturnItemsPriceDefinitionFormProperties>({
			calculatedSellingPrice: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnItemsPriceDefinitionSellingPrices {

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
	export interface ItemsReturnItemsPriceDefinitionSellingPricesFormProperties {

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
	export function CreateItemsReturnItemsPriceDefinitionSellingPricesFormGroup() {
		return new FormGroup<ItemsReturnItemsPriceDefinitionSellingPricesFormProperties>({
			quantity: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnItemsPriceTags {

		/** Price tag identifier. */
		identifier?: string | null;

		/** Indicates whether price tag value is applied through a percentage. */
		isPercentual?: boolean | null;

		/** Price tag name. */
		name?: string | null;

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
	export interface ItemsReturnItemsPriceTagsFormProperties {

		/** Price tag identifier. */
		identifier: FormControl<string | null | undefined>,

		/** Indicates whether price tag value is applied through a percentage. */
		isPercentual: FormControl<boolean | null | undefined>,

		/** Price tag name. */
		name: FormControl<string | null | undefined>,

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
	export function CreateItemsReturnItemsPriceTagsFormGroup() {
		return new FormGroup<ItemsReturnItemsPriceTagsFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined),
			isPercentual: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rawValue: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnItemsProductCategories {

		/** Product category corresponding to the ID in the field key. */
		'{ID}'?: string | null;
	}
	export interface ItemsReturnItemsProductCategoriesFormProperties {

		/** Product category corresponding to the ID in the field key. */
		'{ID}': FormControl<string | null | undefined>,
	}
	export function CreateItemsReturnItemsProductCategoriesFormGroup() {
		return new FormGroup<ItemsReturnItemsProductCategoriesFormProperties>({
			'{ID}': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnItemsOrdination {

		/** Indicates whether the ordering is ascending. */
		ascending?: boolean | null;

		/** Criteria adopted to order the items in the list. */
		criteria?: string | null;
	}
	export interface ItemsReturnItemsOrdinationFormProperties {

		/** Indicates whether the ordering is ascending. */
		ascending: FormControl<boolean | null | undefined>,

		/** Criteria adopted to order the items in the list. */
		criteria: FormControl<string | null | undefined>,
	}
	export function CreateItemsReturnItemsOrdinationFormGroup() {
		return new FormGroup<ItemsReturnItemsOrdinationFormProperties>({
			ascending: new FormControl<boolean | null | undefined>(undefined),
			criteria: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnMarketingData {

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
	export interface ItemsReturnMarketingDataFormProperties {

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
	export function CreateItemsReturnMarketingDataFormGroup() {
		return new FormGroup<ItemsReturnMarketingDataFormProperties>({
			coupon: new FormControl<string | null | undefined>(undefined),
			utmCampaign: new FormControl<string | null | undefined>(undefined),
			utmMedium: new FormControl<string | null | undefined>(undefined),
			utmSource: new FormControl<string | null | undefined>(undefined),
			utmiCampaign: new FormControl<string | null | undefined>(undefined),
			utmiPage: new FormControl<string | null | undefined>(undefined),
			utmiPart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnPaymentData {

		/** Gift card information, if it applies to the order. */
		ItemsReturnPaymentDataGiftCards?: Array<ItemsReturnPaymentDataGiftCards>;

		/** Information on each transaction pertinent to the order. */
		ItemsReturnPaymentDataTransactions?: Array<ItemsReturnPaymentDataTransactions>;
	}
	export interface ItemsReturnPaymentDataFormProperties {
	}
	export function CreateItemsReturnPaymentDataFormGroup() {
		return new FormGroup<ItemsReturnPaymentDataFormProperties>({
		});

	}

	export interface ItemsReturnPaymentDataGiftCards {

		/**
		 * Gift card balance in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		balance?: number | null;

		/** Gift card ID. */
		id?: string | null;

		/** Indicates whether gift card is in use. */
		inUse?: boolean | null;

		/** Indicates whether gift card is special. */
		isSpecialCard?: boolean | null;

		/** Gift card name. */
		name?: string | null;

		/** Gift card redemption code. */
		redemptionCode?: string | null;

		/**
		 * Gift card value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface ItemsReturnPaymentDataGiftCardsFormProperties {

		/**
		 * Gift card balance in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		balance: FormControl<number | null | undefined>,

		/** Gift card ID. */
		id: FormControl<string | null | undefined>,

		/** Indicates whether gift card is in use. */
		inUse: FormControl<boolean | null | undefined>,

		/** Indicates whether gift card is special. */
		isSpecialCard: FormControl<boolean | null | undefined>,

		/** Gift card name. */
		name: FormControl<string | null | undefined>,

		/** Gift card redemption code. */
		redemptionCode: FormControl<string | null | undefined>,

		/**
		 * Gift card value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateItemsReturnPaymentDataGiftCardsFormGroup() {
		return new FormGroup<ItemsReturnPaymentDataGiftCardsFormProperties>({
			balance: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			inUse: new FormControl<boolean | null | undefined>(undefined),
			isSpecialCard: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			redemptionCode: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnPaymentDataTransactions {

		/** Indicates whether transaction is active. */
		isActive?: boolean | null;

		/** Merchant name. */
		merchantName?: string | null;

		/** Information on each payment. */
		ItemsReturnPaymentDataTransactionsPayments?: Array<ItemsReturnPaymentDataTransactionsPayments>;

		/** Indicates whather transaction is shared. */
		sharedTransaction?: boolean | null;

		/** Transaction ID. */
		transactionId?: string | null;
	}
	export interface ItemsReturnPaymentDataTransactionsFormProperties {

		/** Indicates whether transaction is active. */
		isActive: FormControl<boolean | null | undefined>,

		/** Merchant name. */
		merchantName: FormControl<string | null | undefined>,

		/** Indicates whather transaction is shared. */
		sharedTransaction: FormControl<boolean | null | undefined>,

		/** Transaction ID. */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateItemsReturnPaymentDataTransactionsFormGroup() {
		return new FormGroup<ItemsReturnPaymentDataTransactionsFormProperties>({
			isActive: new FormControl<boolean | null | undefined>(undefined),
			merchantName: new FormControl<string | null | undefined>(undefined),
			sharedTransaction: new FormControl<boolean | null | undefined>(undefined),
			transactionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnPaymentDataTransactionsPayments {

		/** Account ID. */
		accountId?: string | null;

		/** Bin. */
		bin?: string | null;

		/**
		 * Number of installments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		installments?: number | null;

		/** Payment system. */
		paymentSystem?: string | null;

		/**
		 * Reference value for calculating interest rates, in case it applies. Displayed in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		referenceValue?: number | null;

		/**
		 * Value including interest, in case it applies. Displayed in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface ItemsReturnPaymentDataTransactionsPaymentsFormProperties {

		/** Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** Bin. */
		bin: FormControl<string | null | undefined>,

		/**
		 * Number of installments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		installments: FormControl<number | null | undefined>,

		/** Payment system. */
		paymentSystem: FormControl<string | null | undefined>,

		/**
		 * Reference value for calculating interest rates, in case it applies. Displayed in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		referenceValue: FormControl<number | null | undefined>,

		/**
		 * Value including interest, in case it applies. Displayed in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateItemsReturnPaymentDataTransactionsPaymentsFormGroup() {
		return new FormGroup<ItemsReturnPaymentDataTransactionsPaymentsFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			bin: new FormControl<string | null | undefined>(undefined),
			installments: new FormControl<number | null | undefined>(undefined),
			paymentSystem: new FormControl<string | null | undefined>(undefined),
			referenceValue: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnRatesAndBenefitsData {

		/** List with rates and benefits identifiers. */
		rateAndBenefitsIdentifiers?: Array<string>;

		/** List with rates and benefits teasers. */
		teaser?: Array<string>;
	}
	export interface ItemsReturnRatesAndBenefitsDataFormProperties {
	}
	export function CreateItemsReturnRatesAndBenefitsDataFormGroup() {
		return new FormGroup<ItemsReturnRatesAndBenefitsDataFormProperties>({
		});

	}

	export interface ItemsReturnSellers {

		/** Seller ID. */
		id?: string | null;

		/** Seller logo. */
		logo?: string | null;

		/** Seller name. */
		name?: string | null;
	}
	export interface ItemsReturnSellersFormProperties {

		/** Seller ID. */
		id: FormControl<string | null | undefined>,

		/** Seller logo. */
		logo: FormControl<string | null | undefined>,

		/** Seller name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateItemsReturnSellersFormGroup() {
		return new FormGroup<ItemsReturnSellersFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnShippingData {

		/** Address information. */
		address?: ItemsReturnShippingDataAddress;

		/** Array with information on the available addresses for the order. */
		ItemsReturnShippingDataAvailableAddresses?: Array<ItemsReturnShippingDataAvailableAddresses>;

		/** Array with logistics information. Each object in this array corresponds to an object in the `items` array, based on the respective `itemIndex`. */
		ItemsReturnShippingDataLogisticsInfo?: Array<ItemsReturnShippingDataLogisticsInfo>;

		/** Array with information on the selected addresses for the order. */
		ItemsReturnShippingDataSelectedAddresses?: Array<ItemsReturnShippingDataSelectedAddresses>;
	}
	export interface ItemsReturnShippingDataFormProperties {
	}
	export function CreateItemsReturnShippingDataFormGroup() {
		return new FormGroup<ItemsReturnShippingDataFormProperties>({
		});

	}

	export interface ItemsReturnShippingDataAddress {

		/** Address ID. */
		addressId?: string | null;

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address, in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Indicates whether address is disposable. */
		isDisposable?: boolean | null;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal code. */
		postalCode?: string | null;

		/** Name of the person who is going to receive the order. */
		receiverName?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the shipping address. */
		street?: string | null;
	}
	export interface ItemsReturnShippingDataAddressFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address, in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Indicates whether address is disposable. */
		isDisposable: FormControl<boolean | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the person who is going to receive the order. */
		receiverName: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the shipping address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateItemsReturnShippingDataAddressFormGroup() {
		return new FormGroup<ItemsReturnShippingDataAddressFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			isDisposable: new FormControl<boolean | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnShippingDataAvailableAddresses {

		/** Address ID. */
		addressId?: string | null;

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address, in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Indicates whether address is disposable. */
		isDisposable?: boolean | null;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal code. */
		postalCode?: string | null;

		/** Name of the person who is going to receive the order. */
		receiverName?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the shipping address. */
		street?: string | null;
	}
	export interface ItemsReturnShippingDataAvailableAddressesFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address, in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Indicates whether address is disposable. */
		isDisposable: FormControl<boolean | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the person who is going to receive the order. */
		receiverName: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the shipping address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateItemsReturnShippingDataAvailableAddressesFormGroup() {
		return new FormGroup<ItemsReturnShippingDataAvailableAddressesFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			isDisposable: new FormControl<boolean | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnShippingDataLogisticsInfo {

		/** Address ID. */
		addressId?: string | null;

		/** List of available delivery channels. */
		ItemsReturnShippingDataLogisticsInfoDeliveryChannels?: Array<ItemsReturnShippingDataLogisticsInfoDeliveryChannels>;

		/** Item ID. */
		itemId?: string | null;

		/**
		 * Index corresponding to the position of the object in the `items` array.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex?: number | null;

		/** Delivery channel selected by the customer. */
		selectedDeliveryChannel?: string | null;

		/** SLA selected by the customer. */
		selectedSla?: string | null;

		/** List of countries that the item may be shipped to. */
		shipsTo?: Array<string>;

		/** Information on available SLAs. */
		ItemsReturnShippingDataLogisticsInfoSlas?: Array<ItemsReturnShippingDataLogisticsInfoSlas>;
	}
	export interface ItemsReturnShippingDataLogisticsInfoFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Item ID. */
		itemId: FormControl<string | null | undefined>,

		/**
		 * Index corresponding to the position of the object in the `items` array.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex: FormControl<number | null | undefined>,

		/** Delivery channel selected by the customer. */
		selectedDeliveryChannel: FormControl<string | null | undefined>,

		/** SLA selected by the customer. */
		selectedSla: FormControl<string | null | undefined>,
	}
	export function CreateItemsReturnShippingDataLogisticsInfoFormGroup() {
		return new FormGroup<ItemsReturnShippingDataLogisticsInfoFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			itemId: new FormControl<string | null | undefined>(undefined),
			itemIndex: new FormControl<number | null | undefined>(undefined),
			selectedDeliveryChannel: new FormControl<string | null | undefined>(undefined),
			selectedSla: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnShippingDataLogisticsInfoDeliveryChannels {

		/** Delivery channel ID. */
		id?: string | null;
	}
	export interface ItemsReturnShippingDataLogisticsInfoDeliveryChannelsFormProperties {

		/** Delivery channel ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateItemsReturnShippingDataLogisticsInfoDeliveryChannelsFormGroup() {
		return new FormGroup<ItemsReturnShippingDataLogisticsInfoDeliveryChannelsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnShippingDataLogisticsInfoSlas {

		/** Delivery channel. */
		deliveryChannel?: string | null;

		/** Information on each delivery ID. */
		ItemsReturnShippingDataLogisticsInfoSlasDeliveryIds?: Array<ItemsReturnShippingDataLogisticsInfoSlasDeliveryIds>;

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
		pickupStoreInfo?: ItemsReturnShippingDataLogisticsInfoSlasPickupStoreInfo;

		/** Polygon name. */
		polygonName?: string | null;

		/**
		 * Price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Shipping estimate. For instance, Three business days will be represented `3bd`. */
		shippingEstimate?: string | null;

		/** Shipping estimate date. */
		shippingEstimateDate?: string | null;

		/**
		 * Tax in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax?: number | null;

		/** Transit time. For instance, "three business days" is represented `3bd`. */
		transitTime?: string | null;
	}
	export interface ItemsReturnShippingDataLogisticsInfoSlasFormProperties {

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

		/** Shipping estimate. For instance, Three business days will be represented `3bd`. */
		shippingEstimate: FormControl<string | null | undefined>,

		/** Shipping estimate date. */
		shippingEstimateDate: FormControl<string | null | undefined>,

		/**
		 * Tax in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax: FormControl<number | null | undefined>,

		/** Transit time. For instance, "three business days" is represented `3bd`. */
		transitTime: FormControl<string | null | undefined>,
	}
	export function CreateItemsReturnShippingDataLogisticsInfoSlasFormGroup() {
		return new FormGroup<ItemsReturnShippingDataLogisticsInfoSlasFormProperties>({
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

	export interface ItemsReturnShippingDataLogisticsInfoSlasDeliveryIds {

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
	export interface ItemsReturnShippingDataLogisticsInfoSlasDeliveryIdsFormProperties {

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
	export function CreateItemsReturnShippingDataLogisticsInfoSlasDeliveryIdsFormGroup() {
		return new FormGroup<ItemsReturnShippingDataLogisticsInfoSlasDeliveryIdsFormProperties>({
			courierId: new FormControl<string | null | undefined>(undefined),
			courierName: new FormControl<string | null | undefined>(undefined),
			dockId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			warehouseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnShippingDataLogisticsInfoSlasPickupStoreInfo {

		/** Additional information. */
		additionalInfo?: string | null;

		/** Address information. */
		address?: ItemsReturnShippingDataLogisticsInfoSlasPickupStoreInfoAddress;

		/** Corresponding dock ID. */
		dockId?: string | null;

		/** Friendly name. */
		friendlyName?: string | null;

		/** Indicates whether it is the pickup store. */
		isPickupStore?: boolean | null;
	}
	export interface ItemsReturnShippingDataLogisticsInfoSlasPickupStoreInfoFormProperties {

		/** Additional information. */
		additionalInfo: FormControl<string | null | undefined>,

		/** Corresponding dock ID. */
		dockId: FormControl<string | null | undefined>,

		/** Friendly name. */
		friendlyName: FormControl<string | null | undefined>,

		/** Indicates whether it is the pickup store. */
		isPickupStore: FormControl<boolean | null | undefined>,
	}
	export function CreateItemsReturnShippingDataLogisticsInfoSlasPickupStoreInfoFormGroup() {
		return new FormGroup<ItemsReturnShippingDataLogisticsInfoSlasPickupStoreInfoFormProperties>({
			additionalInfo: new FormControl<string | null | undefined>(undefined),
			dockId: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			isPickupStore: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnShippingDataLogisticsInfoSlasPickupStoreInfoAddress {

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address, in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal code. */
		postalCode?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the shipping address. */
		street?: string | null;
	}
	export interface ItemsReturnShippingDataLogisticsInfoSlasPickupStoreInfoAddressFormProperties {

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address, in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the shipping address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateItemsReturnShippingDataLogisticsInfoSlasPickupStoreInfoAddressFormGroup() {
		return new FormGroup<ItemsReturnShippingDataLogisticsInfoSlasPickupStoreInfoAddressFormProperties>({
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsReturnShippingDataSelectedAddresses {

		/** Address ID. */
		addressId?: string | null;

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address, in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Indicates whether address is disposable. */
		isDisposable?: boolean | null;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal code. */
		postalCode?: string | null;

		/** Name of the person who is going to receive the order. */
		receiverName?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the shipping address. */
		street?: string | null;
	}
	export interface ItemsReturnShippingDataSelectedAddressesFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address, in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Indicates whether address is disposable. */
		isDisposable: FormControl<boolean | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the person who is going to receive the order. */
		receiverName: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the shipping address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateItemsReturnShippingDataSelectedAddressesFormGroup() {
		return new FormGroup<ItemsReturnShippingDataSelectedAddressesFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			isDisposable: new FormControl<boolean | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdatePostBody {

		/** Array containing the cart items. Each object inside this array corresponds to a different item. */
		ItemsUpdatePostBodyOrderItems?: Array<ItemsUpdatePostBodyOrderItems>;
	}
	export interface ItemsUpdatePostBodyFormProperties {
	}
	export function CreateItemsUpdatePostBodyFormGroup() {
		return new FormGroup<ItemsUpdatePostBodyFormProperties>({
		});

	}

	export interface ItemsUpdatePostBodyOrderItems {

		/**
		 * The position of the item in the array.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: number;

		/**
		 * The quantity of the item in the cart.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;
	}
	export interface ItemsUpdatePostBodyOrderItemsFormProperties {

		/**
		 * The position of the item in the array.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: FormControl<number | null | undefined>,

		/**
		 * The quantity of the item in the cart.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateItemsUpdatePostBodyOrderItemsFormGroup() {
		return new FormGroup<ItemsUpdatePostBodyOrderItemsFormProperties>({
			index: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ItemsUpdateReturn {

		/** Permission to modify item price manually. */
		allowManualPrice?: boolean | null;

		/** Available accounts. */
		availableAccounts?: Array<string>;

		/** Information on each available address. */
		ItemsUpdateReturnAvailableAddresses?: Array<ItemsUpdateReturnAvailableAddresses>;

		/** Data can be edited. */
		canEditData?: boolean | null;

		/** Object containing preferences from the client who placed the order. */
		clientPreferencesData?: ItemsUpdateReturnClientPreferencesData;

		/** Customer's profile information. */
		clientProfileData?: ItemsUpdateReturnClientProfileData;

		/** Object containing commercial condition information. */
		commercialConditionData?: string | null;

		/** Customer additional information. */
		customData?: string | null;

		/** Gift registry list information. */
		giftRegistryData?: string | null;

		/** Hooks information. */
		hooksData?: string | null;

		/** Ignore customer profile data. */
		ignoreProfileData?: boolean | null;

		/** Object containing information pertinent to the order's invoice. */
		invoiceData?: string | null;

		/** Indicates whether order is checked in. */
		isCheckedIn?: boolean | null;

		/** Item metadata. */
		itemMetadata?: ItemsUpdateReturnItemMetadata;

		/** Information on each item in the order. */
		ItemsUpdateReturnItems?: Array<ItemsUpdateReturnItems>;

		/** Object containing information about the ordering of items within the `orderForm`. */
		itemsOrdination?: ItemsUpdateReturnItemsOrdination;

		/** Indicates whether the user is logged into the store. */
		loggedIn?: boolean | null;

		/** Object containing promotion data such as coupon tracking information and internal or external UTMs. */
		marketingData?: ItemsUpdateReturnMarketingData;

		/** Array containing an object for each message generated by our servers while processing the request. */
		messages?: Array<string>;

		/** Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1). */
		openTextField?: string | null;

		/** ID of the orderForm corresponding to a specific cart. */
		orderFormId?: string | null;

		/** Information on the order's payment. */
		paymentData?: ItemsUpdateReturnPaymentData;

		/** Profile provider. */
		profileProvider?: string | null;

		/** Information on rates and benefits that apply to the order. */
		ratesAndBenefitsData?: ItemsUpdateReturnRatesAndBenefitsData;

		/** Attribute created by the seller, in their VTEX store configuration. */
		salesChannel?: string | null;

		/** Array containing the data of the item selected as a gift. */
		selectableGifts?: Array<string>;

		/** Information on each seller. */
		ItemsUpdateReturnSellers?: Array<ItemsUpdateReturnSellers>;

		/** Shipping information pertinent to the order. */
		shippingData?: ItemsUpdateReturnShippingData;

		/** ID of the store. */
		storeId?: string | null;

		/** Object containing data from the store's configuration (stored in VTEX's License Manager). */
		storePreferencesData?: string | null;

		/** Subscription information. */
		subscriptionData?: string | null;

		/** Array containing an object for each totalizer for the purchase. Totalizers contain the sum of values for a specific part of the order (e.g. Total item value, Total shipping value). */
		totalizers?: Array<string>;

		/** Unique ID associated with the customer profile. */
		userProfileId?: string | null;

		/** User type. */
		userType?: string | null;

		/**
		 * Total value of the order without separating cents. For example, $24.99 is represented as `2499`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface ItemsUpdateReturnFormProperties {

		/** Permission to modify item price manually. */
		allowManualPrice: FormControl<boolean | null | undefined>,

		/** Data can be edited. */
		canEditData: FormControl<boolean | null | undefined>,

		/** Object containing commercial condition information. */
		commercialConditionData: FormControl<string | null | undefined>,

		/** Customer additional information. */
		customData: FormControl<string | null | undefined>,

		/** Gift registry list information. */
		giftRegistryData: FormControl<string | null | undefined>,

		/** Hooks information. */
		hooksData: FormControl<string | null | undefined>,

		/** Ignore customer profile data. */
		ignoreProfileData: FormControl<boolean | null | undefined>,

		/** Object containing information pertinent to the order's invoice. */
		invoiceData: FormControl<string | null | undefined>,

		/** Indicates whether order is checked in. */
		isCheckedIn: FormControl<boolean | null | undefined>,

		/** Indicates whether the user is logged into the store. */
		loggedIn: FormControl<boolean | null | undefined>,

		/** Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1). */
		openTextField: FormControl<string | null | undefined>,

		/** ID of the orderForm corresponding to a specific cart. */
		orderFormId: FormControl<string | null | undefined>,

		/** Profile provider. */
		profileProvider: FormControl<string | null | undefined>,

		/** Attribute created by the seller, in their VTEX store configuration. */
		salesChannel: FormControl<string | null | undefined>,

		/** ID of the store. */
		storeId: FormControl<string | null | undefined>,

		/** Object containing data from the store's configuration (stored in VTEX's License Manager). */
		storePreferencesData: FormControl<string | null | undefined>,

		/** Subscription information. */
		subscriptionData: FormControl<string | null | undefined>,

		/** Unique ID associated with the customer profile. */
		userProfileId: FormControl<string | null | undefined>,

		/** User type. */
		userType: FormControl<string | null | undefined>,

		/**
		 * Total value of the order without separating cents. For example, $24.99 is represented as `2499`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateItemsUpdateReturnFormGroup() {
		return new FormGroup<ItemsUpdateReturnFormProperties>({
			allowManualPrice: new FormControl<boolean | null | undefined>(undefined),
			canEditData: new FormControl<boolean | null | undefined>(undefined),
			commercialConditionData: new FormControl<string | null | undefined>(undefined),
			customData: new FormControl<string | null | undefined>(undefined),
			giftRegistryData: new FormControl<string | null | undefined>(undefined),
			hooksData: new FormControl<string | null | undefined>(undefined),
			ignoreProfileData: new FormControl<boolean | null | undefined>(undefined),
			invoiceData: new FormControl<string | null | undefined>(undefined),
			isCheckedIn: new FormControl<boolean | null | undefined>(undefined),
			loggedIn: new FormControl<boolean | null | undefined>(undefined),
			openTextField: new FormControl<string | null | undefined>(undefined),
			orderFormId: new FormControl<string | null | undefined>(undefined),
			profileProvider: new FormControl<string | null | undefined>(undefined),
			salesChannel: new FormControl<string | null | undefined>(undefined),
			storeId: new FormControl<string | null | undefined>(undefined),
			storePreferencesData: new FormControl<string | null | undefined>(undefined),
			subscriptionData: new FormControl<string | null | undefined>(undefined),
			userProfileId: new FormControl<string | null | undefined>(undefined),
			userType: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnAvailableAddresses {

		/** Address ID. */
		addressId?: string | null;

		/** Address type. */
		addressType?: string | null;

		/** City of the address. */
		city?: string | null;

		/** Complement to the address. */
		complement?: string | null;

		/** Country of the address. ISO three-letter code. */
		country?: string | null;

		/** List with the two geocoordinates. */
		geoCoordinates?: Array<string>;

		/** Indicates whether address is disposable. */
		isDisposable?: boolean | null;

		/** Neighborhood of the address. */
		neighborhood?: string | null;

		/** Number of the address. */
		number?: string | null;

		/** Name of the receiver. */
		receiverName?: string | null;

		/** Reference that may help in the location of the address. */
		reference?: string | null;

		/** State of the address. */
		state?: string | null;

		/** Street of the address. */
		street?: string | null;
	}
	export interface ItemsUpdateReturnAvailableAddressesFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Address type. */
		addressType: FormControl<string | null | undefined>,

		/** City of the address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the address. */
		complement: FormControl<string | null | undefined>,

		/** Country of the address. ISO three-letter code. */
		country: FormControl<string | null | undefined>,

		/** Indicates whether address is disposable. */
		isDisposable: FormControl<boolean | null | undefined>,

		/** Neighborhood of the address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the address. */
		number: FormControl<string | null | undefined>,

		/** Name of the receiver. */
		receiverName: FormControl<string | null | undefined>,

		/** Reference that may help in the location of the address. */
		reference: FormControl<string | null | undefined>,

		/** State of the address. */
		state: FormControl<string | null | undefined>,

		/** Street of the address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateItemsUpdateReturnAvailableAddressesFormGroup() {
		return new FormGroup<ItemsUpdateReturnAvailableAddressesFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			isDisposable: new FormControl<boolean | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnClientPreferencesData {

		/** Client's locale. Examples: `pt-BR` and `en-US`. */
		locale?: string | null;

		/** `true` if the client opted to receive newsletter from the store. */
		optinNewsLetter?: boolean | null;
	}
	export interface ItemsUpdateReturnClientPreferencesDataFormProperties {

		/** Client's locale. Examples: `pt-BR` and `en-US`. */
		locale: FormControl<string | null | undefined>,

		/** `true` if the client opted to receive newsletter from the store. */
		optinNewsLetter: FormControl<boolean | null | undefined>,
	}
	export function CreateItemsUpdateReturnClientPreferencesDataFormGroup() {
		return new FormGroup<ItemsUpdateReturnClientPreferencesDataFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
			optinNewsLetter: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnClientProfileData {

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
	export interface ItemsUpdateReturnClientProfileDataFormProperties {

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
	export function CreateItemsUpdateReturnClientProfileDataFormGroup() {
		return new FormGroup<ItemsUpdateReturnClientProfileDataFormProperties>({
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

	export interface ItemsUpdateReturnItemMetadata {

		/** List of objects containing metadata on each item in the order. */
		ItemsUpdateReturnItemMetadataItems?: Array<ItemsUpdateReturnItemMetadataItems>;
	}
	export interface ItemsUpdateReturnItemMetadataFormProperties {
	}
	export function CreateItemsUpdateReturnItemMetadataFormGroup() {
		return new FormGroup<ItemsUpdateReturnItemMetadataFormProperties>({
		});

	}

	export interface ItemsUpdateReturnItemMetadataItems {

		/** Detail URL. */
		detailUrl?: string | null;

		/** European Article Number. */
		ean?: string | null;

		/** Item ID. */
		id?: string | null;

		/** Image URL. */
		imageUrl?: string | null;

		/** Product name. */
		name?: string | null;

		/** Product ID. */
		productId?: string | null;

		/** Ref ID. */
		refId?: string | null;

		/** Seller. */
		seller?: string | null;

		/** SKU name. */
		skuName?: string | null;
	}
	export interface ItemsUpdateReturnItemMetadataItemsFormProperties {

		/** Detail URL. */
		detailUrl: FormControl<string | null | undefined>,

		/** European Article Number. */
		ean: FormControl<string | null | undefined>,

		/** Item ID. */
		id: FormControl<string | null | undefined>,

		/** Image URL. */
		imageUrl: FormControl<string | null | undefined>,

		/** Product name. */
		name: FormControl<string | null | undefined>,

		/** Product ID. */
		productId: FormControl<string | null | undefined>,

		/** Ref ID. */
		refId: FormControl<string | null | undefined>,

		/** Seller. */
		seller: FormControl<string | null | undefined>,

		/** SKU name. */
		skuName: FormControl<string | null | undefined>,
	}
	export function CreateItemsUpdateReturnItemMetadataItemsFormGroup() {
		return new FormGroup<ItemsUpdateReturnItemMetadataItemsFormProperties>({
			detailUrl: new FormControl<string | null | undefined>(undefined),
			ean: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			refId: new FormControl<string | null | undefined>(undefined),
			seller: new FormControl<string | null | undefined>(undefined),
			skuName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnItems {

		/** Additional information. */
		additionalInfo?: ItemsUpdateReturnItemsAdditionalInfo;

		/** Array containing information on attachments. */
		attachments?: Array<string>;

		/** Availability. */
		availability?: string | null;

		/** Information on services sold along with the SKU. Example: a gift package. */
		ItemsUpdateReturnItemsBundleItems?: Array<ItemsUpdateReturnItemsBundleItems>;

		/** Detail URL. */
		detailUrl?: string | null;

		/** European Article Number. */
		ean?: string | null;

		/** ID of the item. */
		id?: string | null;

		/** Image URL. */
		imageUrl?: string | null;

		/** Indicates whether item is a gift. */
		isGift?: boolean | null;

		/**
		 * List price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice?: number | null;

		/**
		 * Manual price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		manualPrice?: number | null;

		/** User that applied the manual price, if that is the case. */
		manualPriceAppliedBy?: string | null;

		/** Manufacturer code. */
		manufacturerCode?: string | null;

		/** Measurement unit. */
		measurementUnit?: string | null;

		/** Modal type. */
		modalType?: string | null;

		/** Product name. */
		name?: string | null;

		/** Parent assembly binding. */
		parentAssemblyBinding?: string | null;

		/**
		 * Parent item index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		parentItemIndex?: number | null;

		/** Presale date. */
		preSaleDate?: string | null;

		/**
		 * Price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Price information for all units of a specific item. */
		priceDefinition?: ItemsUpdateReturnItemsPriceDefinition;

		/** Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order. */
		ItemsUpdateReturnItemsPriceTags?: Array<ItemsUpdateReturnItemsPriceTags>;

		/** Price expiration date and time. */
		priceValidUntil?: string | null;

		/** Object, where each field is an ID from `productCategoryIds`. */
		productCategories?: ItemsUpdateReturnItemsProductCategories;

		/** Product category IDs. */
		productCategoryIds?: string | null;

		/** Product ID. */
		productId?: string | null;

		/** Product Ref ID. */
		productRefId?: string | null;

		/**
		 * Quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity?: number | null;

		/** Ref ID. */
		refId?: string | null;

		/**
		 * Reward value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rewardValue?: number | null;

		/** Seller. */
		seller?: string | null;

		/** Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order. */
		sellerChain?: Array<string>;

		/**
		 * Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sellingPrice?: number | null;

		/** SKU name. */
		skuName?: string | null;

		/**
		 * Tax value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax?: number | null;

		/** Unique ID. */
		uniqueId?: string | null;

		/**
		 * Unit multiplier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unitMultiplier?: number | null;
	}
	export interface ItemsUpdateReturnItemsFormProperties {

		/** Availability. */
		availability: FormControl<string | null | undefined>,

		/** Detail URL. */
		detailUrl: FormControl<string | null | undefined>,

		/** European Article Number. */
		ean: FormControl<string | null | undefined>,

		/** ID of the item. */
		id: FormControl<string | null | undefined>,

		/** Image URL. */
		imageUrl: FormControl<string | null | undefined>,

		/** Indicates whether item is a gift. */
		isGift: FormControl<boolean | null | undefined>,

		/**
		 * List price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * Manual price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		manualPrice: FormControl<number | null | undefined>,

		/** User that applied the manual price, if that is the case. */
		manualPriceAppliedBy: FormControl<string | null | undefined>,

		/** Manufacturer code. */
		manufacturerCode: FormControl<string | null | undefined>,

		/** Measurement unit. */
		measurementUnit: FormControl<string | null | undefined>,

		/** Modal type. */
		modalType: FormControl<string | null | undefined>,

		/** Product name. */
		name: FormControl<string | null | undefined>,

		/** Parent assembly binding. */
		parentAssemblyBinding: FormControl<string | null | undefined>,

		/**
		 * Parent item index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		parentItemIndex: FormControl<number | null | undefined>,

		/** Presale date. */
		preSaleDate: FormControl<string | null | undefined>,

		/**
		 * Price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** Price expiration date and time. */
		priceValidUntil: FormControl<string | null | undefined>,

		/** Product category IDs. */
		productCategoryIds: FormControl<string | null | undefined>,

		/** Product ID. */
		productId: FormControl<string | null | undefined>,

		/** Product Ref ID. */
		productRefId: FormControl<string | null | undefined>,

		/**
		 * Quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** Ref ID. */
		refId: FormControl<string | null | undefined>,

		/**
		 * Reward value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rewardValue: FormControl<number | null | undefined>,

		/** Seller. */
		seller: FormControl<string | null | undefined>,

		/**
		 * Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sellingPrice: FormControl<number | null | undefined>,

		/** SKU name. */
		skuName: FormControl<string | null | undefined>,

		/**
		 * Tax value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax: FormControl<number | null | undefined>,

		/** Unique ID. */
		uniqueId: FormControl<string | null | undefined>,

		/**
		 * Unit multiplier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unitMultiplier: FormControl<number | null | undefined>,
	}
	export function CreateItemsUpdateReturnItemsFormGroup() {
		return new FormGroup<ItemsUpdateReturnItemsFormProperties>({
			availability: new FormControl<string | null | undefined>(undefined),
			detailUrl: new FormControl<string | null | undefined>(undefined),
			ean: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			isGift: new FormControl<boolean | null | undefined>(undefined),
			listPrice: new FormControl<number | null | undefined>(undefined),
			manualPrice: new FormControl<number | null | undefined>(undefined),
			manualPriceAppliedBy: new FormControl<string | null | undefined>(undefined),
			manufacturerCode: new FormControl<string | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			modalType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentAssemblyBinding: new FormControl<string | null | undefined>(undefined),
			parentItemIndex: new FormControl<number | null | undefined>(undefined),
			preSaleDate: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			priceValidUntil: new FormControl<string | null | undefined>(undefined),
			productCategoryIds: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			productRefId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			refId: new FormControl<string | null | undefined>(undefined),
			rewardValue: new FormControl<number | null | undefined>(undefined),
			seller: new FormControl<string | null | undefined>(undefined),
			sellingPrice: new FormControl<number | null | undefined>(undefined),
			skuName: new FormControl<string | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
			uniqueId: new FormControl<string | null | undefined>(undefined),
			unitMultiplier: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnItemsAdditionalInfo {

		/** Brand ID. */
		brandId?: string | null;

		/** Brand name. */
		brandName?: string | null;

		/** Dimension. */
		dimension?: string | null;

		/** Offering information. */
		offeringInfo?: string | null;

		/** Offering type. */
		offeringType?: string | null;

		/** Offering type ID. */
		offeringTypeId?: string | null;
	}
	export interface ItemsUpdateReturnItemsAdditionalInfoFormProperties {

		/** Brand ID. */
		brandId: FormControl<string | null | undefined>,

		/** Brand name. */
		brandName: FormControl<string | null | undefined>,

		/** Dimension. */
		dimension: FormControl<string | null | undefined>,

		/** Offering information. */
		offeringInfo: FormControl<string | null | undefined>,

		/** Offering type. */
		offeringType: FormControl<string | null | undefined>,

		/** Offering type ID. */
		offeringTypeId: FormControl<string | null | undefined>,
	}
	export function CreateItemsUpdateReturnItemsAdditionalInfoFormGroup() {
		return new FormGroup<ItemsUpdateReturnItemsAdditionalInfoFormProperties>({
			brandId: new FormControl<string | null | undefined>(undefined),
			brandName: new FormControl<string | null | undefined>(undefined),
			dimension: new FormControl<string | null | undefined>(undefined),
			offeringInfo: new FormControl<string | null | undefined>(undefined),
			offeringType: new FormControl<string | null | undefined>(undefined),
			offeringTypeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnItemsBundleItems {

		/**
		 * Service identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Service name. */
		name?: string | null;

		/**
		 * Service price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Service type. */
		type?: string | null;
	}
	export interface ItemsUpdateReturnItemsBundleItemsFormProperties {

		/**
		 * Service identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Service name. */
		name: FormControl<string | null | undefined>,

		/**
		 * Service price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** Service type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateItemsUpdateReturnItemsBundleItemsFormGroup() {
		return new FormGroup<ItemsUpdateReturnItemsBundleItemsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnItemsPriceDefinition {

		/**
		 * Item's calculated unitary selling price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		calculatedSellingPrice?: number | null;

		/** Array of objects, each containing value (in cents) and quantity for the different rounding instances that can be combined to form the correctly rounded total. */
		ItemsUpdateReturnItemsPriceDefinitionSellingPrices?: Array<ItemsUpdateReturnItemsPriceDefinitionSellingPrices>;

		/**
		 * Total value for all units of the item in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface ItemsUpdateReturnItemsPriceDefinitionFormProperties {

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
	export function CreateItemsUpdateReturnItemsPriceDefinitionFormGroup() {
		return new FormGroup<ItemsUpdateReturnItemsPriceDefinitionFormProperties>({
			calculatedSellingPrice: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnItemsPriceDefinitionSellingPrices {

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
	export interface ItemsUpdateReturnItemsPriceDefinitionSellingPricesFormProperties {

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
	export function CreateItemsUpdateReturnItemsPriceDefinitionSellingPricesFormGroup() {
		return new FormGroup<ItemsUpdateReturnItemsPriceDefinitionSellingPricesFormProperties>({
			quantity: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnItemsPriceTags {

		/** Price tag identifier. */
		identifier?: string | null;

		/** Indicates whether price tag value is applied through a percentage. */
		isPercentual?: boolean | null;

		/** Price tag name. */
		name?: string | null;

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
	export interface ItemsUpdateReturnItemsPriceTagsFormProperties {

		/** Price tag identifier. */
		identifier: FormControl<string | null | undefined>,

		/** Indicates whether price tag value is applied through a percentage. */
		isPercentual: FormControl<boolean | null | undefined>,

		/** Price tag name. */
		name: FormControl<string | null | undefined>,

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
	export function CreateItemsUpdateReturnItemsPriceTagsFormGroup() {
		return new FormGroup<ItemsUpdateReturnItemsPriceTagsFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined),
			isPercentual: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rawValue: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnItemsProductCategories {

		/** Product category corresponding to the ID in the field key. */
		'{ID}'?: string | null;
	}
	export interface ItemsUpdateReturnItemsProductCategoriesFormProperties {

		/** Product category corresponding to the ID in the field key. */
		'{ID}': FormControl<string | null | undefined>,
	}
	export function CreateItemsUpdateReturnItemsProductCategoriesFormGroup() {
		return new FormGroup<ItemsUpdateReturnItemsProductCategoriesFormProperties>({
			'{ID}': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnItemsOrdination {

		/** Indicates whether the ordering is ascending. */
		ascending?: boolean | null;

		/** Criteria adopted to order the items in the list. */
		criteria?: string | null;
	}
	export interface ItemsUpdateReturnItemsOrdinationFormProperties {

		/** Indicates whether the ordering is ascending. */
		ascending: FormControl<boolean | null | undefined>,

		/** Criteria adopted to order the items in the list. */
		criteria: FormControl<string | null | undefined>,
	}
	export function CreateItemsUpdateReturnItemsOrdinationFormGroup() {
		return new FormGroup<ItemsUpdateReturnItemsOrdinationFormProperties>({
			ascending: new FormControl<boolean | null | undefined>(undefined),
			criteria: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnMarketingData {

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
	export interface ItemsUpdateReturnMarketingDataFormProperties {

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
	export function CreateItemsUpdateReturnMarketingDataFormGroup() {
		return new FormGroup<ItemsUpdateReturnMarketingDataFormProperties>({
			coupon: new FormControl<string | null | undefined>(undefined),
			utmCampaign: new FormControl<string | null | undefined>(undefined),
			utmMedium: new FormControl<string | null | undefined>(undefined),
			utmSource: new FormControl<string | null | undefined>(undefined),
			utmiCampaign: new FormControl<string | null | undefined>(undefined),
			utmiPage: new FormControl<string | null | undefined>(undefined),
			utmiPart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnPaymentData {

		/** Gift card information, if it applies to the order. */
		ItemsUpdateReturnPaymentDataGiftCards?: Array<ItemsUpdateReturnPaymentDataGiftCards>;

		/** Information on each transaction pertinent to the order. */
		ItemsUpdateReturnPaymentDataTransactions?: Array<ItemsUpdateReturnPaymentDataTransactions>;
	}
	export interface ItemsUpdateReturnPaymentDataFormProperties {
	}
	export function CreateItemsUpdateReturnPaymentDataFormGroup() {
		return new FormGroup<ItemsUpdateReturnPaymentDataFormProperties>({
		});

	}

	export interface ItemsUpdateReturnPaymentDataGiftCards {

		/**
		 * Gift card balance in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		balance?: number | null;

		/** Gift card ID. */
		id?: string | null;

		/** Indicates whether gift card is in use. */
		inUse?: boolean | null;

		/** Indicates whether gift card is special. */
		isSpecialCard?: boolean | null;

		/** Gift card name. */
		name?: string | null;

		/** Gift card redemption code. */
		redemptionCode?: string | null;

		/**
		 * Gift card value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface ItemsUpdateReturnPaymentDataGiftCardsFormProperties {

		/**
		 * Gift card balance in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		balance: FormControl<number | null | undefined>,

		/** Gift card ID. */
		id: FormControl<string | null | undefined>,

		/** Indicates whether gift card is in use. */
		inUse: FormControl<boolean | null | undefined>,

		/** Indicates whether gift card is special. */
		isSpecialCard: FormControl<boolean | null | undefined>,

		/** Gift card name. */
		name: FormControl<string | null | undefined>,

		/** Gift card redemption code. */
		redemptionCode: FormControl<string | null | undefined>,

		/**
		 * Gift card value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateItemsUpdateReturnPaymentDataGiftCardsFormGroup() {
		return new FormGroup<ItemsUpdateReturnPaymentDataGiftCardsFormProperties>({
			balance: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			inUse: new FormControl<boolean | null | undefined>(undefined),
			isSpecialCard: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			redemptionCode: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnPaymentDataTransactions {

		/** Indicates whether transaction is active. */
		isActive?: boolean | null;

		/** Merchant name. */
		merchantName?: string | null;

		/** Information on each payment. */
		ItemsUpdateReturnPaymentDataTransactionsPayments?: Array<ItemsUpdateReturnPaymentDataTransactionsPayments>;

		/** Indicates whather transaction is shared. */
		sharedTransaction?: boolean | null;

		/** Transaction ID. */
		transactionId?: string | null;
	}
	export interface ItemsUpdateReturnPaymentDataTransactionsFormProperties {

		/** Indicates whether transaction is active. */
		isActive: FormControl<boolean | null | undefined>,

		/** Merchant name. */
		merchantName: FormControl<string | null | undefined>,

		/** Indicates whather transaction is shared. */
		sharedTransaction: FormControl<boolean | null | undefined>,

		/** Transaction ID. */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateItemsUpdateReturnPaymentDataTransactionsFormGroup() {
		return new FormGroup<ItemsUpdateReturnPaymentDataTransactionsFormProperties>({
			isActive: new FormControl<boolean | null | undefined>(undefined),
			merchantName: new FormControl<string | null | undefined>(undefined),
			sharedTransaction: new FormControl<boolean | null | undefined>(undefined),
			transactionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnPaymentDataTransactionsPayments {

		/** Account ID. */
		accountId?: string | null;

		/** Bin. */
		bin?: string | null;

		/**
		 * Number of installments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		installments?: number | null;

		/** Payment system. */
		paymentSystem?: string | null;

		/**
		 * Reference value for calculating interest rates, in case it applies. Displayed in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		referenceValue?: number | null;

		/**
		 * Value including interest, in case it applies. Displayed in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface ItemsUpdateReturnPaymentDataTransactionsPaymentsFormProperties {

		/** Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** Bin. */
		bin: FormControl<string | null | undefined>,

		/**
		 * Number of installments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		installments: FormControl<number | null | undefined>,

		/** Payment system. */
		paymentSystem: FormControl<string | null | undefined>,

		/**
		 * Reference value for calculating interest rates, in case it applies. Displayed in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		referenceValue: FormControl<number | null | undefined>,

		/**
		 * Value including interest, in case it applies. Displayed in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateItemsUpdateReturnPaymentDataTransactionsPaymentsFormGroup() {
		return new FormGroup<ItemsUpdateReturnPaymentDataTransactionsPaymentsFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			bin: new FormControl<string | null | undefined>(undefined),
			installments: new FormControl<number | null | undefined>(undefined),
			paymentSystem: new FormControl<string | null | undefined>(undefined),
			referenceValue: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnRatesAndBenefitsData {

		/** List with rates and benefits identifiers. */
		rateAndBenefitsIdentifiers?: Array<string>;

		/** List with rates and benefits teasers. */
		teaser?: Array<string>;
	}
	export interface ItemsUpdateReturnRatesAndBenefitsDataFormProperties {
	}
	export function CreateItemsUpdateReturnRatesAndBenefitsDataFormGroup() {
		return new FormGroup<ItemsUpdateReturnRatesAndBenefitsDataFormProperties>({
		});

	}

	export interface ItemsUpdateReturnSellers {

		/** Seller ID. */
		id?: string | null;

		/** Seller logo. */
		logo?: string | null;

		/** Seller name. */
		name?: string | null;
	}
	export interface ItemsUpdateReturnSellersFormProperties {

		/** Seller ID. */
		id: FormControl<string | null | undefined>,

		/** Seller logo. */
		logo: FormControl<string | null | undefined>,

		/** Seller name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateItemsUpdateReturnSellersFormGroup() {
		return new FormGroup<ItemsUpdateReturnSellersFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnShippingData {

		/** Address information. */
		address?: ItemsUpdateReturnShippingDataAddress;

		/** Array with information on the available addresses for the order. */
		ItemsUpdateReturnShippingDataAvailableAddresses?: Array<ItemsUpdateReturnShippingDataAvailableAddresses>;

		/** Array with logistics information. Each object in this array corresponds to an object in the `items` array, based on the respective `itemIndex`. */
		ItemsUpdateReturnShippingDataLogisticsInfo?: Array<ItemsUpdateReturnShippingDataLogisticsInfo>;

		/** Array with information on the selected addresses for the order. */
		ItemsUpdateReturnShippingDataSelectedAddresses?: Array<ItemsUpdateReturnShippingDataSelectedAddresses>;
	}
	export interface ItemsUpdateReturnShippingDataFormProperties {
	}
	export function CreateItemsUpdateReturnShippingDataFormGroup() {
		return new FormGroup<ItemsUpdateReturnShippingDataFormProperties>({
		});

	}

	export interface ItemsUpdateReturnShippingDataAddress {

		/** Address ID. */
		addressId?: string | null;

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address, in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Array with two strings with geocoordinates, first latitude, then longitude. */
		geoCoordinates?: Array<string>;

		/** Indicates whether address is disposable. */
		isDisposable?: boolean | null;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal code. */
		postalCode?: string | null;

		/** Name of the person who is going to receive the order. */
		receiverName?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the shipping address. */
		street?: string | null;
	}
	export interface ItemsUpdateReturnShippingDataAddressFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address, in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Indicates whether address is disposable. */
		isDisposable: FormControl<boolean | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the person who is going to receive the order. */
		receiverName: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the shipping address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateItemsUpdateReturnShippingDataAddressFormGroup() {
		return new FormGroup<ItemsUpdateReturnShippingDataAddressFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			isDisposable: new FormControl<boolean | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnShippingDataAvailableAddresses {

		/** Address ID. */
		addressId?: string | null;

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address, in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Array with two strings with geocoordinates, first latitude, then longitude. */
		geoCoordinates?: Array<string>;

		/** Indicates whether address is disposable. */
		isDisposable?: boolean | null;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal code. */
		postalCode?: string | null;

		/** Name of the person who is going to receive the order. */
		receiverName?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the shipping address. */
		street?: string | null;
	}
	export interface ItemsUpdateReturnShippingDataAvailableAddressesFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address, in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Indicates whether address is disposable. */
		isDisposable: FormControl<boolean | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the person who is going to receive the order. */
		receiverName: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the shipping address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateItemsUpdateReturnShippingDataAvailableAddressesFormGroup() {
		return new FormGroup<ItemsUpdateReturnShippingDataAvailableAddressesFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			isDisposable: new FormControl<boolean | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnShippingDataLogisticsInfo {

		/** Address ID. */
		addressId?: string | null;

		/** List of available delivery channels. */
		ItemsUpdateReturnShippingDataLogisticsInfoDeliveryChannels?: Array<ItemsUpdateReturnShippingDataLogisticsInfoDeliveryChannels>;

		/** Item ID. */
		itemId?: string | null;

		/**
		 * Index corresponding to the position of the object in the `items` array.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex?: number | null;

		/** Delivery channel selected by the customer. */
		selectedDeliveryChannel?: string | null;

		/** SLA selected by the customer. */
		selectedSla?: string | null;

		/** List of countries that the item may be shipped to. */
		shipsTo?: Array<string>;

		/** Information on available SLAs. */
		ItemsUpdateReturnShippingDataLogisticsInfoSlas?: Array<ItemsUpdateReturnShippingDataLogisticsInfoSlas>;
	}
	export interface ItemsUpdateReturnShippingDataLogisticsInfoFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Item ID. */
		itemId: FormControl<string | null | undefined>,

		/**
		 * Index corresponding to the position of the object in the `items` array.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex: FormControl<number | null | undefined>,

		/** Delivery channel selected by the customer. */
		selectedDeliveryChannel: FormControl<string | null | undefined>,

		/** SLA selected by the customer. */
		selectedSla: FormControl<string | null | undefined>,
	}
	export function CreateItemsUpdateReturnShippingDataLogisticsInfoFormGroup() {
		return new FormGroup<ItemsUpdateReturnShippingDataLogisticsInfoFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			itemId: new FormControl<string | null | undefined>(undefined),
			itemIndex: new FormControl<number | null | undefined>(undefined),
			selectedDeliveryChannel: new FormControl<string | null | undefined>(undefined),
			selectedSla: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnShippingDataLogisticsInfoDeliveryChannels {

		/** Delivery channel ID. */
		id?: string | null;
	}
	export interface ItemsUpdateReturnShippingDataLogisticsInfoDeliveryChannelsFormProperties {

		/** Delivery channel ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateItemsUpdateReturnShippingDataLogisticsInfoDeliveryChannelsFormGroup() {
		return new FormGroup<ItemsUpdateReturnShippingDataLogisticsInfoDeliveryChannelsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnShippingDataLogisticsInfoSlas {

		/** Delivery channel. */
		deliveryChannel?: string | null;

		/** Information on each delivery ID. */
		ItemsUpdateReturnShippingDataLogisticsInfoSlasDeliveryIds?: Array<ItemsUpdateReturnShippingDataLogisticsInfoSlasDeliveryIds>;

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
		pickupStoreInfo?: ItemsUpdateReturnShippingDataLogisticsInfoSlasPickupStoreInfo;

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
	export interface ItemsUpdateReturnShippingDataLogisticsInfoSlasFormProperties {

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
	export function CreateItemsUpdateReturnShippingDataLogisticsInfoSlasFormGroup() {
		return new FormGroup<ItemsUpdateReturnShippingDataLogisticsInfoSlasFormProperties>({
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

	export interface ItemsUpdateReturnShippingDataLogisticsInfoSlasDeliveryIds {

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
	export interface ItemsUpdateReturnShippingDataLogisticsInfoSlasDeliveryIdsFormProperties {

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
	export function CreateItemsUpdateReturnShippingDataLogisticsInfoSlasDeliveryIdsFormGroup() {
		return new FormGroup<ItemsUpdateReturnShippingDataLogisticsInfoSlasDeliveryIdsFormProperties>({
			courierId: new FormControl<string | null | undefined>(undefined),
			courierName: new FormControl<string | null | undefined>(undefined),
			dockId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			warehouseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnShippingDataLogisticsInfoSlasPickupStoreInfo {

		/** Additional information. */
		additionalInfo?: string | null;

		/** Address information. */
		address?: ItemsUpdateReturnShippingDataLogisticsInfoSlasPickupStoreInfoAddress;

		/** Corresponding dock ID. */
		dockId?: string | null;

		/** Friendly name. */
		friendlyName?: string | null;

		/** Indicates whether it is the pickup store. */
		isPickupStore?: boolean | null;
	}
	export interface ItemsUpdateReturnShippingDataLogisticsInfoSlasPickupStoreInfoFormProperties {

		/** Additional information. */
		additionalInfo: FormControl<string | null | undefined>,

		/** Corresponding dock ID. */
		dockId: FormControl<string | null | undefined>,

		/** Friendly name. */
		friendlyName: FormControl<string | null | undefined>,

		/** Indicates whether it is the pickup store. */
		isPickupStore: FormControl<boolean | null | undefined>,
	}
	export function CreateItemsUpdateReturnShippingDataLogisticsInfoSlasPickupStoreInfoFormGroup() {
		return new FormGroup<ItemsUpdateReturnShippingDataLogisticsInfoSlasPickupStoreInfoFormProperties>({
			additionalInfo: new FormControl<string | null | undefined>(undefined),
			dockId: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			isPickupStore: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnShippingDataLogisticsInfoSlasPickupStoreInfoAddress {

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address, in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Array with two strings with geocoordinates, first latitude, then longitude. */
		geoCoordinates?: Array<string>;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal code. */
		postalCode?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the shipping address. */
		street?: string | null;
	}
	export interface ItemsUpdateReturnShippingDataLogisticsInfoSlasPickupStoreInfoAddressFormProperties {

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address, in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the shipping address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateItemsUpdateReturnShippingDataLogisticsInfoSlasPickupStoreInfoAddressFormGroup() {
		return new FormGroup<ItemsUpdateReturnShippingDataLogisticsInfoSlasPickupStoreInfoAddressFormProperties>({
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemsUpdateReturnShippingDataSelectedAddresses {

		/** Address ID. */
		addressId?: string | null;

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address, in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Array with two strings with geocoordinates, first latitude, then longitude. */
		geoCoordinates?: Array<string>;

		/** Indicates whether address is disposable. */
		isDisposable?: boolean | null;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal code. */
		postalCode?: string | null;

		/** Name of the person who is going to receive the order. */
		receiverName?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the shipping address. */
		street?: string | null;
	}
	export interface ItemsUpdateReturnShippingDataSelectedAddressesFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address, in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Indicates whether address is disposable. */
		isDisposable: FormControl<boolean | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the person who is going to receive the order. */
		receiverName: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the shipping address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateItemsUpdateReturnShippingDataSelectedAddressesFormGroup() {
		return new FormGroup<ItemsUpdateReturnShippingDataSelectedAddressesFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			isDisposable: new FormControl<boolean | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturn {

		/** Permission to modify item price manually. */
		allowManualPrice?: boolean | null;

		/** Available accounts. */
		availableAccounts?: Array<string>;

		/** Information on each available address. */
		ClearorderFormMessagesReturnAvailableAddresses?: Array<ClearorderFormMessagesReturnAvailableAddresses>;

		/** Data can be edited. */
		canEditData?: boolean | null;

		/** Object containing preferences from the client who placed the order. */
		clientPreferencesData?: ClearorderFormMessagesReturnClientPreferencesData;

		/** Customer's profile information. */
		clientProfileData?: ClearorderFormMessagesReturnClientProfileData;

		/** Object containing commercial condition information. */
		commercialConditionData?: string | null;

		/** Customer additional information. */
		customData?: string | null;

		/** Gift registry list information. */
		giftRegistryData?: string | null;

		/** Hooks information. */
		hooksData?: string | null;

		/** Ignore customer profile data. */
		ignoreProfileData?: boolean | null;

		/** Object containing information pertinent to the order's invoice. */
		invoiceData?: string | null;

		/** Indicates whether order is checked in. */
		isCheckedIn?: boolean | null;

		/** Item metadata. */
		itemMetadata?: ClearorderFormMessagesReturnItemMetadata;

		/** Information on each item in the order. */
		ClearorderFormMessagesReturnItems?: Array<ClearorderFormMessagesReturnItems>;

		/** Object containing information about the ordering of items within the orderForm. */
		itemsOrdination?: ClearorderFormMessagesReturnItemsOrdination;

		/** Indicates whether the user is logged into the store. */
		loggedIn?: boolean | null;

		/** Object containing promotion data such as coupon tracking information and internal or external UTMs. */
		marketingData?: ClearorderFormMessagesReturnMarketingData;

		/** Array containing an object for each message generated by our servers while processing the request. */
		messages?: Array<string>;

		/** Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1). */
		openTextField?: string | null;

		/** ID of the orderForm corresponding to a specific cart. */
		orderFormId?: string | null;

		/** Information on the order's payment. */
		paymentData?: ClearorderFormMessagesReturnPaymentData;

		/** Profile provider. */
		profileProvider?: string | null;

		/** Information on rates and benefits that apply to the order. */
		ratesAndBenefitsData?: ClearorderFormMessagesReturnRatesAndBenefitsData;

		/** Attribute created by the seller, in their VTEX store configuration. */
		salesChannel?: string | null;

		/** Array containing the data of the item selected as a gift. */
		selectableGifts?: Array<string>;

		/** Information on each seller. */
		ClearorderFormMessagesReturnSellers?: Array<ClearorderFormMessagesReturnSellers>;

		/** Shipping information pertinent to the order. */
		shippingData?: ClearorderFormMessagesReturnShippingData;

		/** ID of the store. */
		storeId?: string | null;

		/** Object containing data from the store's configuration (stored in VTEX's License Manager). */
		storePreferencesData?: string | null;

		/** Subscription information. */
		subscriptionData?: string | null;

		/** Array containing an object for each totalizer for the purchase. Totalizers contain the sum of values for a specific part of the order (e.g. Total item value, Total shipping value). */
		totalizers?: Array<string>;

		/** Unique ID associated with the customer profile. */
		userProfileId?: string | null;

		/** User type. */
		userType?: string | null;

		/**
		 * Total value of the order without separating cents. For example, $24.99 is represented `2499`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface ClearorderFormMessagesReturnFormProperties {

		/** Permission to modify item price manually. */
		allowManualPrice: FormControl<boolean | null | undefined>,

		/** Data can be edited. */
		canEditData: FormControl<boolean | null | undefined>,

		/** Object containing commercial condition information. */
		commercialConditionData: FormControl<string | null | undefined>,

		/** Customer additional information. */
		customData: FormControl<string | null | undefined>,

		/** Gift registry list information. */
		giftRegistryData: FormControl<string | null | undefined>,

		/** Hooks information. */
		hooksData: FormControl<string | null | undefined>,

		/** Ignore customer profile data. */
		ignoreProfileData: FormControl<boolean | null | undefined>,

		/** Object containing information pertinent to the order's invoice. */
		invoiceData: FormControl<string | null | undefined>,

		/** Indicates whether order is checked in. */
		isCheckedIn: FormControl<boolean | null | undefined>,

		/** Indicates whether the user is logged into the store. */
		loggedIn: FormControl<boolean | null | undefined>,

		/** Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1). */
		openTextField: FormControl<string | null | undefined>,

		/** ID of the orderForm corresponding to a specific cart. */
		orderFormId: FormControl<string | null | undefined>,

		/** Profile provider. */
		profileProvider: FormControl<string | null | undefined>,

		/** Attribute created by the seller, in their VTEX store configuration. */
		salesChannel: FormControl<string | null | undefined>,

		/** ID of the store. */
		storeId: FormControl<string | null | undefined>,

		/** Object containing data from the store's configuration (stored in VTEX's License Manager). */
		storePreferencesData: FormControl<string | null | undefined>,

		/** Subscription information. */
		subscriptionData: FormControl<string | null | undefined>,

		/** Unique ID associated with the customer profile. */
		userProfileId: FormControl<string | null | undefined>,

		/** User type. */
		userType: FormControl<string | null | undefined>,

		/**
		 * Total value of the order without separating cents. For example, $24.99 is represented `2499`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateClearorderFormMessagesReturnFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnFormProperties>({
			allowManualPrice: new FormControl<boolean | null | undefined>(undefined),
			canEditData: new FormControl<boolean | null | undefined>(undefined),
			commercialConditionData: new FormControl<string | null | undefined>(undefined),
			customData: new FormControl<string | null | undefined>(undefined),
			giftRegistryData: new FormControl<string | null | undefined>(undefined),
			hooksData: new FormControl<string | null | undefined>(undefined),
			ignoreProfileData: new FormControl<boolean | null | undefined>(undefined),
			invoiceData: new FormControl<string | null | undefined>(undefined),
			isCheckedIn: new FormControl<boolean | null | undefined>(undefined),
			loggedIn: new FormControl<boolean | null | undefined>(undefined),
			openTextField: new FormControl<string | null | undefined>(undefined),
			orderFormId: new FormControl<string | null | undefined>(undefined),
			profileProvider: new FormControl<string | null | undefined>(undefined),
			salesChannel: new FormControl<string | null | undefined>(undefined),
			storeId: new FormControl<string | null | undefined>(undefined),
			storePreferencesData: new FormControl<string | null | undefined>(undefined),
			subscriptionData: new FormControl<string | null | undefined>(undefined),
			userProfileId: new FormControl<string | null | undefined>(undefined),
			userType: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnAvailableAddresses {

		/** Address ID. */
		addressId?: string | null;

		/** Address type. */
		addressType?: string | null;

		/** City of the address. */
		city?: string | null;

		/** Complement to the address. */
		complement?: string | null;

		/** Country of the address. ISO three-letter code. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Indicates whether address is disposable. */
		isDisposable?: boolean | null;

		/** Neighborhood of the address. */
		neighborhood?: string | null;

		/** Number of the address. */
		number?: string | null;

		/** Name of the receiver. */
		receiverName?: string | null;

		/** Reference that may help in the location of the address. */
		reference?: string | null;

		/** State of the address. */
		state?: string | null;

		/** Street of the address. */
		street?: string | null;
	}
	export interface ClearorderFormMessagesReturnAvailableAddressesFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Address type. */
		addressType: FormControl<string | null | undefined>,

		/** City of the address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the address. */
		complement: FormControl<string | null | undefined>,

		/** Country of the address. ISO three-letter code. */
		country: FormControl<string | null | undefined>,

		/** Indicates whether address is disposable. */
		isDisposable: FormControl<boolean | null | undefined>,

		/** Neighborhood of the address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the address. */
		number: FormControl<string | null | undefined>,

		/** Name of the receiver. */
		receiverName: FormControl<string | null | undefined>,

		/** Reference that may help in the location of the address. */
		reference: FormControl<string | null | undefined>,

		/** State of the address. */
		state: FormControl<string | null | undefined>,

		/** Street of the address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateClearorderFormMessagesReturnAvailableAddressesFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnAvailableAddressesFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			isDisposable: new FormControl<boolean | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnClientPreferencesData {

		/** Client's locale. Examples: `pt-BR` and `en-US`. */
		locale?: string | null;

		/** `true` if the client opted to receive newsletter from the store. */
		optinNewsLetter?: boolean | null;
	}
	export interface ClearorderFormMessagesReturnClientPreferencesDataFormProperties {

		/** Client's locale. Examples: `pt-BR` and `en-US`. */
		locale: FormControl<string | null | undefined>,

		/** `true` if the client opted to receive newsletter from the store. */
		optinNewsLetter: FormControl<boolean | null | undefined>,
	}
	export function CreateClearorderFormMessagesReturnClientPreferencesDataFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnClientPreferencesDataFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
			optinNewsLetter: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnClientProfileData {

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
	export interface ClearorderFormMessagesReturnClientProfileDataFormProperties {

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
	export function CreateClearorderFormMessagesReturnClientProfileDataFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnClientProfileDataFormProperties>({
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

	export interface ClearorderFormMessagesReturnItemMetadata {

		/** List of objects containing metadata on each item in the order. */
		ClearorderFormMessagesReturnItemMetadataItems?: Array<ClearorderFormMessagesReturnItemMetadataItems>;
	}
	export interface ClearorderFormMessagesReturnItemMetadataFormProperties {
	}
	export function CreateClearorderFormMessagesReturnItemMetadataFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnItemMetadataFormProperties>({
		});

	}

	export interface ClearorderFormMessagesReturnItemMetadataItems {

		/** Detail URL. */
		detailUrl?: string | null;

		/** European Article Number. */
		ean?: string | null;

		/** Item ID. */
		id?: string | null;

		/** Image URL. */
		imageUrl?: string | null;

		/** Product name. */
		name?: string | null;

		/** Product ID. */
		productId?: string | null;

		/** Ref ID. */
		refId?: string | null;

		/** Seller. */
		seller?: string | null;

		/** SKU name. */
		skuName?: string | null;
	}
	export interface ClearorderFormMessagesReturnItemMetadataItemsFormProperties {

		/** Detail URL. */
		detailUrl: FormControl<string | null | undefined>,

		/** European Article Number. */
		ean: FormControl<string | null | undefined>,

		/** Item ID. */
		id: FormControl<string | null | undefined>,

		/** Image URL. */
		imageUrl: FormControl<string | null | undefined>,

		/** Product name. */
		name: FormControl<string | null | undefined>,

		/** Product ID. */
		productId: FormControl<string | null | undefined>,

		/** Ref ID. */
		refId: FormControl<string | null | undefined>,

		/** Seller. */
		seller: FormControl<string | null | undefined>,

		/** SKU name. */
		skuName: FormControl<string | null | undefined>,
	}
	export function CreateClearorderFormMessagesReturnItemMetadataItemsFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnItemMetadataItemsFormProperties>({
			detailUrl: new FormControl<string | null | undefined>(undefined),
			ean: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			refId: new FormControl<string | null | undefined>(undefined),
			seller: new FormControl<string | null | undefined>(undefined),
			skuName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnItems {

		/** Additional information. */
		additionalInfo?: ClearorderFormMessagesReturnItemsAdditionalInfo;

		/** Array containing information on attachments. */
		attachments?: Array<string>;

		/** Availability. */
		availability?: string | null;

		/** Information on services sold along with the SKU. Example: a gift package. */
		ClearorderFormMessagesReturnItemsBundleItems?: Array<ClearorderFormMessagesReturnItemsBundleItems>;

		/** Detail URL. */
		detailUrl?: string | null;

		/** European Article Number. */
		ean?: string | null;

		/** ID of the item. */
		id?: string | null;

		/** Image URL. */
		imageUrl?: string | null;

		/** Indicates whether item is a gift. */
		isGift?: boolean | null;

		/**
		 * List price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice?: number | null;

		/**
		 * Manual price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		manualPrice?: number | null;

		/** User that applied the manual price, if that is the case. */
		manualPriceAppliedBy?: string | null;

		/** Manufacturer code. */
		manufacturerCode?: string | null;

		/** Measurement unit. */
		measurementUnit?: string | null;

		/** Modal type. */
		modalType?: string | null;

		/** Product name. */
		name?: string | null;

		/** Parent assembly binding. */
		parentAssemblyBinding?: string | null;

		/**
		 * Parent item index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		parentItemIndex?: number | null;

		/** Presale date. */
		preSaleDate?: string | null;

		/**
		 * Price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Price information for all units of a specific item. */
		priceDefinition?: ClearorderFormMessagesReturnItemsPriceDefinition;

		/** Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order. */
		ClearorderFormMessagesReturnItemsPriceTags?: Array<ClearorderFormMessagesReturnItemsPriceTags>;

		/** Price expiration date and time. */
		priceValidUntil?: string | null;

		/** Object, where each field is an ID from `productCategoryIds`. */
		productCategories?: ClearorderFormMessagesReturnItemsProductCategories;

		/** Product category IDs. */
		productCategoryIds?: string | null;

		/** Product ID. */
		productId?: string | null;

		/** Product Ref ID. */
		productRefId?: string | null;

		/**
		 * Quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity?: number | null;

		/** Ref ID. */
		refId?: string | null;

		/**
		 * Reward value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rewardValue?: number | null;

		/** Seller. */
		seller?: string | null;

		/** Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order. */
		sellerChain?: Array<string>;

		/**
		 * Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sellingPrice?: number | null;

		/** SKU name. */
		skuName?: string | null;

		/**
		 * Tax value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax?: number | null;

		/** Unique ID. */
		uniqueId?: string | null;

		/**
		 * Unit multiplier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unitMultiplier?: number | null;
	}
	export interface ClearorderFormMessagesReturnItemsFormProperties {

		/** Availability. */
		availability: FormControl<string | null | undefined>,

		/** Detail URL. */
		detailUrl: FormControl<string | null | undefined>,

		/** European Article Number. */
		ean: FormControl<string | null | undefined>,

		/** ID of the item. */
		id: FormControl<string | null | undefined>,

		/** Image URL. */
		imageUrl: FormControl<string | null | undefined>,

		/** Indicates whether item is a gift. */
		isGift: FormControl<boolean | null | undefined>,

		/**
		 * List price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * Manual price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		manualPrice: FormControl<number | null | undefined>,

		/** User that applied the manual price, if that is the case. */
		manualPriceAppliedBy: FormControl<string | null | undefined>,

		/** Manufacturer code. */
		manufacturerCode: FormControl<string | null | undefined>,

		/** Measurement unit. */
		measurementUnit: FormControl<string | null | undefined>,

		/** Modal type. */
		modalType: FormControl<string | null | undefined>,

		/** Product name. */
		name: FormControl<string | null | undefined>,

		/** Parent assembly binding. */
		parentAssemblyBinding: FormControl<string | null | undefined>,

		/**
		 * Parent item index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		parentItemIndex: FormControl<number | null | undefined>,

		/** Presale date. */
		preSaleDate: FormControl<string | null | undefined>,

		/**
		 * Price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** Price expiration date and time. */
		priceValidUntil: FormControl<string | null | undefined>,

		/** Product category IDs. */
		productCategoryIds: FormControl<string | null | undefined>,

		/** Product ID. */
		productId: FormControl<string | null | undefined>,

		/** Product Ref ID. */
		productRefId: FormControl<string | null | undefined>,

		/**
		 * Quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** Ref ID. */
		refId: FormControl<string | null | undefined>,

		/**
		 * Reward value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rewardValue: FormControl<number | null | undefined>,

		/** Seller. */
		seller: FormControl<string | null | undefined>,

		/**
		 * Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sellingPrice: FormControl<number | null | undefined>,

		/** SKU name. */
		skuName: FormControl<string | null | undefined>,

		/**
		 * Tax value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax: FormControl<number | null | undefined>,

		/** Unique ID. */
		uniqueId: FormControl<string | null | undefined>,

		/**
		 * Unit multiplier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unitMultiplier: FormControl<number | null | undefined>,
	}
	export function CreateClearorderFormMessagesReturnItemsFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnItemsFormProperties>({
			availability: new FormControl<string | null | undefined>(undefined),
			detailUrl: new FormControl<string | null | undefined>(undefined),
			ean: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			isGift: new FormControl<boolean | null | undefined>(undefined),
			listPrice: new FormControl<number | null | undefined>(undefined),
			manualPrice: new FormControl<number | null | undefined>(undefined),
			manualPriceAppliedBy: new FormControl<string | null | undefined>(undefined),
			manufacturerCode: new FormControl<string | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			modalType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentAssemblyBinding: new FormControl<string | null | undefined>(undefined),
			parentItemIndex: new FormControl<number | null | undefined>(undefined),
			preSaleDate: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			priceValidUntil: new FormControl<string | null | undefined>(undefined),
			productCategoryIds: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			productRefId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			refId: new FormControl<string | null | undefined>(undefined),
			rewardValue: new FormControl<number | null | undefined>(undefined),
			seller: new FormControl<string | null | undefined>(undefined),
			sellingPrice: new FormControl<number | null | undefined>(undefined),
			skuName: new FormControl<string | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
			uniqueId: new FormControl<string | null | undefined>(undefined),
			unitMultiplier: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnItemsAdditionalInfo {

		/** Brand ID. */
		brandId?: string | null;

		/** Brand name. */
		brandName?: string | null;

		/** Dimension. */
		dimension?: string | null;

		/** Offering information. */
		offeringInfo?: string | null;

		/** Offering type. */
		offeringType?: string | null;

		/** Offering type ID. */
		offeringTypeId?: string | null;
	}
	export interface ClearorderFormMessagesReturnItemsAdditionalInfoFormProperties {

		/** Brand ID. */
		brandId: FormControl<string | null | undefined>,

		/** Brand name. */
		brandName: FormControl<string | null | undefined>,

		/** Dimension. */
		dimension: FormControl<string | null | undefined>,

		/** Offering information. */
		offeringInfo: FormControl<string | null | undefined>,

		/** Offering type. */
		offeringType: FormControl<string | null | undefined>,

		/** Offering type ID. */
		offeringTypeId: FormControl<string | null | undefined>,
	}
	export function CreateClearorderFormMessagesReturnItemsAdditionalInfoFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnItemsAdditionalInfoFormProperties>({
			brandId: new FormControl<string | null | undefined>(undefined),
			brandName: new FormControl<string | null | undefined>(undefined),
			dimension: new FormControl<string | null | undefined>(undefined),
			offeringInfo: new FormControl<string | null | undefined>(undefined),
			offeringType: new FormControl<string | null | undefined>(undefined),
			offeringTypeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnItemsBundleItems {

		/**
		 * Service identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Service name. */
		name?: string | null;

		/**
		 * Service price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Service type. */
		type?: string | null;
	}
	export interface ClearorderFormMessagesReturnItemsBundleItemsFormProperties {

		/**
		 * Service identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Service name. */
		name: FormControl<string | null | undefined>,

		/**
		 * Service price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** Service type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateClearorderFormMessagesReturnItemsBundleItemsFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnItemsBundleItemsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnItemsPriceDefinition {

		/**
		 * Item's calculated unitary selling price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		calculatedSellingPrice?: number | null;

		/** Array of objects, each containing value (in cents) and quantity for the different rounding instances that can be combined to form the correctly rounded total. */
		ClearorderFormMessagesReturnItemsPriceDefinitionSellingPrices?: Array<ClearorderFormMessagesReturnItemsPriceDefinitionSellingPrices>;

		/**
		 * Total value for all units of the item in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface ClearorderFormMessagesReturnItemsPriceDefinitionFormProperties {

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
	export function CreateClearorderFormMessagesReturnItemsPriceDefinitionFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnItemsPriceDefinitionFormProperties>({
			calculatedSellingPrice: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnItemsPriceDefinitionSellingPrices {

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
	export interface ClearorderFormMessagesReturnItemsPriceDefinitionSellingPricesFormProperties {

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
	export function CreateClearorderFormMessagesReturnItemsPriceDefinitionSellingPricesFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnItemsPriceDefinitionSellingPricesFormProperties>({
			quantity: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnItemsPriceTags {

		/** Price tag identifier. */
		identifier?: string | null;

		/** Indicates whether price tag value is applied through a percentage. */
		isPercentual?: boolean | null;

		/** Price tag name. */
		name?: string | null;

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
	export interface ClearorderFormMessagesReturnItemsPriceTagsFormProperties {

		/** Price tag identifier. */
		identifier: FormControl<string | null | undefined>,

		/** Indicates whether price tag value is applied through a percentage. */
		isPercentual: FormControl<boolean | null | undefined>,

		/** Price tag name. */
		name: FormControl<string | null | undefined>,

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
	export function CreateClearorderFormMessagesReturnItemsPriceTagsFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnItemsPriceTagsFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined),
			isPercentual: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rawValue: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnItemsProductCategories {

		/** Product category corresponding to the ID in the field key. */
		'{ID}'?: string | null;
	}
	export interface ClearorderFormMessagesReturnItemsProductCategoriesFormProperties {

		/** Product category corresponding to the ID in the field key. */
		'{ID}': FormControl<string | null | undefined>,
	}
	export function CreateClearorderFormMessagesReturnItemsProductCategoriesFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnItemsProductCategoriesFormProperties>({
			'{ID}': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnItemsOrdination {

		/** Indicates whether the ordering is ascending. */
		ascending?: boolean | null;

		/** Criteria adopted to order the items in the list. */
		criteria?: string | null;
	}
	export interface ClearorderFormMessagesReturnItemsOrdinationFormProperties {

		/** Indicates whether the ordering is ascending. */
		ascending: FormControl<boolean | null | undefined>,

		/** Criteria adopted to order the items in the list. */
		criteria: FormControl<string | null | undefined>,
	}
	export function CreateClearorderFormMessagesReturnItemsOrdinationFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnItemsOrdinationFormProperties>({
			ascending: new FormControl<boolean | null | undefined>(undefined),
			criteria: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnMarketingData {

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

		/** utmi_page (internal utm) */
		utmiPage?: string | null;

		/** utmi_part (internal utm). */
		utmiPart?: string | null;
	}
	export interface ClearorderFormMessagesReturnMarketingDataFormProperties {

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

		/** utmi_page (internal utm) */
		utmiPage: FormControl<string | null | undefined>,

		/** utmi_part (internal utm). */
		utmiPart: FormControl<string | null | undefined>,
	}
	export function CreateClearorderFormMessagesReturnMarketingDataFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnMarketingDataFormProperties>({
			coupon: new FormControl<string | null | undefined>(undefined),
			utmCampaign: new FormControl<string | null | undefined>(undefined),
			utmMedium: new FormControl<string | null | undefined>(undefined),
			utmSource: new FormControl<string | null | undefined>(undefined),
			utmiCampaign: new FormControl<string | null | undefined>(undefined),
			utmiPage: new FormControl<string | null | undefined>(undefined),
			utmiPart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnPaymentData {

		/** Gift card information, if it applies to the order. */
		ClearorderFormMessagesReturnPaymentDataGiftCards?: Array<ClearorderFormMessagesReturnPaymentDataGiftCards>;

		/** Information on each transaction pertinent to the order. */
		ClearorderFormMessagesReturnPaymentDataTransactions?: Array<ClearorderFormMessagesReturnPaymentDataTransactions>;
	}
	export interface ClearorderFormMessagesReturnPaymentDataFormProperties {
	}
	export function CreateClearorderFormMessagesReturnPaymentDataFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnPaymentDataFormProperties>({
		});

	}

	export interface ClearorderFormMessagesReturnPaymentDataGiftCards {

		/**
		 * Gift card balance in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		balance?: number | null;

		/** Gift card ID. */
		id?: string | null;

		/** Indicates whether gift card is in use. */
		inUse?: boolean | null;

		/** Indicates whether gift card is special. */
		isSpecialCard?: boolean | null;

		/** Gift card name. */
		name?: string | null;

		/** Gift card redemption code. */
		redemptionCode?: string | null;

		/**
		 * Gift card value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface ClearorderFormMessagesReturnPaymentDataGiftCardsFormProperties {

		/**
		 * Gift card balance in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		balance: FormControl<number | null | undefined>,

		/** Gift card ID. */
		id: FormControl<string | null | undefined>,

		/** Indicates whether gift card is in use. */
		inUse: FormControl<boolean | null | undefined>,

		/** Indicates whether gift card is special. */
		isSpecialCard: FormControl<boolean | null | undefined>,

		/** Gift card name. */
		name: FormControl<string | null | undefined>,

		/** Gift card redemption code. */
		redemptionCode: FormControl<string | null | undefined>,

		/**
		 * Gift card value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateClearorderFormMessagesReturnPaymentDataGiftCardsFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnPaymentDataGiftCardsFormProperties>({
			balance: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			inUse: new FormControl<boolean | null | undefined>(undefined),
			isSpecialCard: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			redemptionCode: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnPaymentDataTransactions {

		/** Indicates whether transaction is active. */
		isActive?: boolean | null;

		/** Merchant name. */
		merchantName?: string | null;

		/** Information on each payment. */
		ClearorderFormMessagesReturnPaymentDataTransactionsPayments?: Array<ClearorderFormMessagesReturnPaymentDataTransactionsPayments>;

		/** Indicates whather transaction is shared. */
		sharedTransaction?: boolean | null;

		/** Transaction ID. */
		transactionId?: string | null;
	}
	export interface ClearorderFormMessagesReturnPaymentDataTransactionsFormProperties {

		/** Indicates whether transaction is active. */
		isActive: FormControl<boolean | null | undefined>,

		/** Merchant name. */
		merchantName: FormControl<string | null | undefined>,

		/** Indicates whather transaction is shared. */
		sharedTransaction: FormControl<boolean | null | undefined>,

		/** Transaction ID. */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateClearorderFormMessagesReturnPaymentDataTransactionsFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnPaymentDataTransactionsFormProperties>({
			isActive: new FormControl<boolean | null | undefined>(undefined),
			merchantName: new FormControl<string | null | undefined>(undefined),
			sharedTransaction: new FormControl<boolean | null | undefined>(undefined),
			transactionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnPaymentDataTransactionsPayments {

		/** Account ID. */
		accountId?: string | null;

		/** Bin. */
		bin?: string | null;

		/**
		 * Number of installments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		installments?: number | null;

		/** Payment system. */
		paymentSystem?: string | null;

		/**
		 * Reference value for calculating interest rates, in case it applies. Displayed in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		referenceValue?: number | null;

		/**
		 * Value including interest, in case it applies. Displayed in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface ClearorderFormMessagesReturnPaymentDataTransactionsPaymentsFormProperties {

		/** Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** Bin. */
		bin: FormControl<string | null | undefined>,

		/**
		 * Number of installments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		installments: FormControl<number | null | undefined>,

		/** Payment system. */
		paymentSystem: FormControl<string | null | undefined>,

		/**
		 * Reference value for calculating interest rates, in case it applies. Displayed in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		referenceValue: FormControl<number | null | undefined>,

		/**
		 * Value including interest, in case it applies. Displayed in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateClearorderFormMessagesReturnPaymentDataTransactionsPaymentsFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnPaymentDataTransactionsPaymentsFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			bin: new FormControl<string | null | undefined>(undefined),
			installments: new FormControl<number | null | undefined>(undefined),
			paymentSystem: new FormControl<string | null | undefined>(undefined),
			referenceValue: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnRatesAndBenefitsData {

		/** List with rates and benefits identifiers. */
		rateAndBenefitsIdentifiers?: Array<string>;

		/** List with rates and benefits teasers. */
		teaser?: Array<string>;
	}
	export interface ClearorderFormMessagesReturnRatesAndBenefitsDataFormProperties {
	}
	export function CreateClearorderFormMessagesReturnRatesAndBenefitsDataFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnRatesAndBenefitsDataFormProperties>({
		});

	}

	export interface ClearorderFormMessagesReturnSellers {

		/** Seller ID. */
		id?: string | null;

		/** Seller logo. */
		logo?: string | null;

		/** Seller name. */
		name?: string | null;
	}
	export interface ClearorderFormMessagesReturnSellersFormProperties {

		/** Seller ID. */
		id: FormControl<string | null | undefined>,

		/** Seller logo. */
		logo: FormControl<string | null | undefined>,

		/** Seller name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateClearorderFormMessagesReturnSellersFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnSellersFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnShippingData {

		/** Address information. */
		address?: ClearorderFormMessagesReturnShippingDataAddress;

		/** Array with information on the available addresses for the order. */
		ClearorderFormMessagesReturnShippingDataAvailableAddresses?: Array<ClearorderFormMessagesReturnShippingDataAvailableAddresses>;

		/** Array with logistics information. Each object in this array corresponds to an object in the `items` array, based on the respective `itemIndex`. */
		ClearorderFormMessagesReturnShippingDataLogisticsInfo?: Array<ClearorderFormMessagesReturnShippingDataLogisticsInfo>;

		/** Array with information on the selected addresses for the order. */
		ClearorderFormMessagesReturnShippingDataSelectedAddresses?: Array<ClearorderFormMessagesReturnShippingDataSelectedAddresses>;
	}
	export interface ClearorderFormMessagesReturnShippingDataFormProperties {
	}
	export function CreateClearorderFormMessagesReturnShippingDataFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnShippingDataFormProperties>({
		});

	}

	export interface ClearorderFormMessagesReturnShippingDataAddress {

		/** Address ID. */
		addressId?: string | null;

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address, in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Indicates whether address is disposable. */
		isDisposable?: boolean | null;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal code. */
		postalCode?: string | null;

		/** Name of the person who is going to receive the order. */
		receiverName?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the shipping address. */
		street?: string | null;
	}
	export interface ClearorderFormMessagesReturnShippingDataAddressFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address, in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Indicates whether address is disposable. */
		isDisposable: FormControl<boolean | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the person who is going to receive the order. */
		receiverName: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the shipping address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateClearorderFormMessagesReturnShippingDataAddressFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnShippingDataAddressFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			isDisposable: new FormControl<boolean | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnShippingDataAvailableAddresses {

		/** Address ID. */
		addressId?: string | null;

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address, in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Indicates whether address is disposable. */
		isDisposable?: boolean | null;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal code. */
		postalCode?: string | null;

		/** Name of the person who is going to receive the order. */
		receiverName?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the shipping address. */
		street?: string | null;
	}
	export interface ClearorderFormMessagesReturnShippingDataAvailableAddressesFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address, in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Indicates whether address is disposable. */
		isDisposable: FormControl<boolean | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the person who is going to receive the order. */
		receiverName: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the shipping address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateClearorderFormMessagesReturnShippingDataAvailableAddressesFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnShippingDataAvailableAddressesFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			isDisposable: new FormControl<boolean | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnShippingDataLogisticsInfo {

		/** Address ID. */
		addressId?: string | null;

		/** List of available delivery channels. */
		ClearorderFormMessagesReturnShippingDataLogisticsInfoDeliveryChannels?: Array<ClearorderFormMessagesReturnShippingDataLogisticsInfoDeliveryChannels>;

		/** Item ID. */
		itemId?: string | null;

		/**
		 * Index corresponding to the position of the object in the `items` array.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex?: number | null;

		/** Delivery channel selected by the customer. */
		selectedDeliveryChannel?: string | null;

		/** SLA selected by the customer. */
		selectedSla?: string | null;

		/** List of countries that the item may be shipped to. */
		shipsTo?: Array<string>;

		/** Information on available SLAs. */
		ClearorderFormMessagesReturnShippingDataLogisticsInfoSlas?: Array<ClearorderFormMessagesReturnShippingDataLogisticsInfoSlas>;
	}
	export interface ClearorderFormMessagesReturnShippingDataLogisticsInfoFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Item ID. */
		itemId: FormControl<string | null | undefined>,

		/**
		 * Index corresponding to the position of the object in the `items` array.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex: FormControl<number | null | undefined>,

		/** Delivery channel selected by the customer. */
		selectedDeliveryChannel: FormControl<string | null | undefined>,

		/** SLA selected by the customer. */
		selectedSla: FormControl<string | null | undefined>,
	}
	export function CreateClearorderFormMessagesReturnShippingDataLogisticsInfoFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnShippingDataLogisticsInfoFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			itemId: new FormControl<string | null | undefined>(undefined),
			itemIndex: new FormControl<number | null | undefined>(undefined),
			selectedDeliveryChannel: new FormControl<string | null | undefined>(undefined),
			selectedSla: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnShippingDataLogisticsInfoDeliveryChannels {

		/** Delivery channel ID. */
		id?: string | null;
	}
	export interface ClearorderFormMessagesReturnShippingDataLogisticsInfoDeliveryChannelsFormProperties {

		/** Delivery channel ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateClearorderFormMessagesReturnShippingDataLogisticsInfoDeliveryChannelsFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnShippingDataLogisticsInfoDeliveryChannelsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnShippingDataLogisticsInfoSlas {

		/** Delivery channel. */
		deliveryChannel?: string | null;

		/** Information on each delivery ID. */
		ClearorderFormMessagesReturnShippingDataLogisticsInfoSlasDeliveryIds?: Array<ClearorderFormMessagesReturnShippingDataLogisticsInfoSlasDeliveryIds>;

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
		pickupStoreInfo?: ClearorderFormMessagesReturnShippingDataLogisticsInfoSlasPickupStoreInfo;

		/** Polygon name. */
		polygonName?: string | null;

		/**
		 * Price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Shipping estimate. For instance, Three business days will be represented `3bd`. */
		shippingEstimate?: string | null;

		/** Shipping estimate date. */
		shippingEstimateDate?: string | null;

		/**
		 * Tax in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax?: number | null;

		/** Transit time. For instance, "three business days" is represented `3bd`. */
		transitTime?: string | null;
	}
	export interface ClearorderFormMessagesReturnShippingDataLogisticsInfoSlasFormProperties {

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

		/** Shipping estimate. For instance, Three business days will be represented `3bd`. */
		shippingEstimate: FormControl<string | null | undefined>,

		/** Shipping estimate date. */
		shippingEstimateDate: FormControl<string | null | undefined>,

		/**
		 * Tax in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax: FormControl<number | null | undefined>,

		/** Transit time. For instance, "three business days" is represented `3bd`. */
		transitTime: FormControl<string | null | undefined>,
	}
	export function CreateClearorderFormMessagesReturnShippingDataLogisticsInfoSlasFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnShippingDataLogisticsInfoSlasFormProperties>({
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

	export interface ClearorderFormMessagesReturnShippingDataLogisticsInfoSlasDeliveryIds {

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
	export interface ClearorderFormMessagesReturnShippingDataLogisticsInfoSlasDeliveryIdsFormProperties {

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
	export function CreateClearorderFormMessagesReturnShippingDataLogisticsInfoSlasDeliveryIdsFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnShippingDataLogisticsInfoSlasDeliveryIdsFormProperties>({
			courierId: new FormControl<string | null | undefined>(undefined),
			courierName: new FormControl<string | null | undefined>(undefined),
			dockId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			warehouseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnShippingDataLogisticsInfoSlasPickupStoreInfo {

		/** Additional information. */
		additionalInfo?: string | null;

		/** Address information. */
		address?: ClearorderFormMessagesReturnShippingDataLogisticsInfoSlasPickupStoreInfoAddress;

		/** Corresponding dock ID. */
		dockId?: string | null;

		/** Friendly name. */
		friendlyName?: string | null;

		/** Indicates whether it is the pickup store. */
		isPickupStore?: boolean | null;
	}
	export interface ClearorderFormMessagesReturnShippingDataLogisticsInfoSlasPickupStoreInfoFormProperties {

		/** Additional information. */
		additionalInfo: FormControl<string | null | undefined>,

		/** Corresponding dock ID. */
		dockId: FormControl<string | null | undefined>,

		/** Friendly name. */
		friendlyName: FormControl<string | null | undefined>,

		/** Indicates whether it is the pickup store. */
		isPickupStore: FormControl<boolean | null | undefined>,
	}
	export function CreateClearorderFormMessagesReturnShippingDataLogisticsInfoSlasPickupStoreInfoFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnShippingDataLogisticsInfoSlasPickupStoreInfoFormProperties>({
			additionalInfo: new FormControl<string | null | undefined>(undefined),
			dockId: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			isPickupStore: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnShippingDataLogisticsInfoSlasPickupStoreInfoAddress {

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address, in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal code. */
		postalCode?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the shipping address. */
		street?: string | null;
	}
	export interface ClearorderFormMessagesReturnShippingDataLogisticsInfoSlasPickupStoreInfoAddressFormProperties {

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address, in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the shipping address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateClearorderFormMessagesReturnShippingDataLogisticsInfoSlasPickupStoreInfoAddressFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnShippingDataLogisticsInfoSlasPickupStoreInfoAddressFormProperties>({
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClearorderFormMessagesReturnShippingDataSelectedAddresses {

		/** Address ID. */
		addressId?: string | null;

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address, in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Indicates whether address is disposable. */
		isDisposable?: boolean | null;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal code. */
		postalCode?: string | null;

		/** Name of the person who is going to receive the order. */
		receiverName?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the shipping address. */
		street?: string | null;
	}
	export interface ClearorderFormMessagesReturnShippingDataSelectedAddressesFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address, in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Indicates whether address is disposable. */
		isDisposable: FormControl<boolean | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the person who is going to receive the order. */
		receiverName: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the shipping address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateClearorderFormMessagesReturnShippingDataSelectedAddressesFormGroup() {
		return new FormGroup<ClearorderFormMessagesReturnShippingDataSelectedAddressesFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			isDisposable: new FormControl<boolean | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IgnoreProfileDataPatchBody {

		/** Indicates whether profile data should be ignored. */
		ignoreProfileData?: boolean | null;
	}
	export interface IgnoreProfileDataPatchBodyFormProperties {

		/** Indicates whether profile data should be ignored. */
		ignoreProfileData: FormControl<boolean | null | undefined>,
	}
	export function CreateIgnoreProfileDataPatchBodyFormGroup() {
		return new FormGroup<IgnoreProfileDataPatchBodyFormProperties>({
			ignoreProfileData: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderFromExistingOrderFormPostBody {

		/**
		 * Interest rate to be used in case it applies.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		interestValue: number;

		/** True if the shopper opted to receive the newsletter. */
		optinNewsLetter?: boolean | null;

		/**
		 * ID of the `orderForm` corresponding to the cart from which to place the order. This is the same as the `orderFormId` parameter.
		 * Required
		 */
		referenceId: string;

		/**
		 * Reference value of the order for calculating interest if that is the case. Can be equal to the total value and does not separate cents. For example, $24.99 is represented `2499`.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		referenceValue: number;

		/** `true` if the shopper's data provided during checkout should be saved for future reference. */
		savePersonalData?: boolean | null;

		/**
		 * Total value of the order without separating cents. For example, $24.99 is represented `2499`.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: number;
	}
	export interface PlaceOrderFromExistingOrderFormPostBodyFormProperties {

		/**
		 * Interest rate to be used in case it applies.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		interestValue: FormControl<number | null | undefined>,

		/** True if the shopper opted to receive the newsletter. */
		optinNewsLetter: FormControl<boolean | null | undefined>,

		/**
		 * ID of the `orderForm` corresponding to the cart from which to place the order. This is the same as the `orderFormId` parameter.
		 * Required
		 */
		referenceId: FormControl<string | null | undefined>,

		/**
		 * Reference value of the order for calculating interest if that is the case. Can be equal to the total value and does not separate cents. For example, $24.99 is represented `2499`.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		referenceValue: FormControl<number | null | undefined>,

		/** `true` if the shopper's data provided during checkout should be saved for future reference. */
		savePersonalData: FormControl<boolean | null | undefined>,

		/**
		 * Total value of the order without separating cents. For example, $24.99 is represented `2499`.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreatePlaceOrderFromExistingOrderFormPostBodyFormGroup() {
		return new FormGroup<PlaceOrderFromExistingOrderFormPostBodyFormProperties>({
			interestValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			optinNewsLetter: new FormControl<boolean | null | undefined>(undefined),
			referenceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			savePersonalData: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CartSimulationPostBody {

		/** Three letter ISO code of the country of the shipping address. This value must be sent along with the `postalCode` or `geoCoordinates` values. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Array containing information about the SKUs inside the cart to be simulated. */
		CartSimulationPostBodyItems?: Array<CartSimulationPostBodyItems>;

		/** Postal code. */
		postalCode?: string | null;
	}
	export interface CartSimulationPostBodyFormProperties {

		/** Three letter ISO code of the country of the shipping address. This value must be sent along with the `postalCode` or `geoCoordinates` values. */
		country: FormControl<string | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,
	}
	export function CreateCartSimulationPostBodyFormGroup() {
		return new FormGroup<CartSimulationPostBodyFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CartSimulationPostBodyItems {

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
	export interface CartSimulationPostBodyItemsFormProperties {

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
	export function CreateCartSimulationPostBodyItemsFormGroup() {
		return new FormGroup<CartSimulationPostBodyItemsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			seller: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CartSimulationReturn {

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Information on each item in the cart. */
		CartSimulationReturnItems?: Array<CartSimulationReturnItems>;

		/** Array with logistics information on each item of the `items` array in the `orderForm`. */
		CartSimulationReturnLogisticsInfo?: Array<CartSimulationReturnLogisticsInfo>;

		/** Object containing promotion data such as coupon tracking information and internal or external UTMs. */
		marketingData?: string | null;

		/** Payment data information. */
		paymentData?: CartSimulationReturnPaymentData;

		/** Postal Code. */
		postalCode?: string | null;

		/** Information on rates and benefits that apply to the order. */
		ratesAndBenefitsData?: CartSimulationReturnRatesAndBenefitsData;

		/** Array containing the data of the item selected as a gift. */
		selectableGifts?: Array<string>;
	}
	export interface CartSimulationReturnFormProperties {

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Object containing promotion data such as coupon tracking information and internal or external UTMs. */
		marketingData: FormControl<string | null | undefined>,

		/** Postal Code. */
		postalCode: FormControl<string | null | undefined>,
	}
	export function CreateCartSimulationReturnFormGroup() {
		return new FormGroup<CartSimulationReturnFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			marketingData: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CartSimulationReturnItems {

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
		priceDefinition?: CartSimulationReturnItemsPriceDefinition;

		/** Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order. */
		CartSimulationReturnItemsPriceTags?: Array<CartSimulationReturnItemsPriceTags>;

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
	export interface CartSimulationReturnItemsFormProperties {

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
	export function CreateCartSimulationReturnItemsFormGroup() {
		return new FormGroup<CartSimulationReturnItemsFormProperties>({
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

	export interface CartSimulationReturnItemsPriceDefinition {

		/**
		 * Item's calculated unitary selling price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		calculatedSellingPrice?: number | null;

		/** Array of objects, each containing value (in cents) and quantity for the different rounding instances that can be combined to form the correctly rounded total. */
		CartSimulationReturnItemsPriceDefinitionSellingPrices?: Array<CartSimulationReturnItemsPriceDefinitionSellingPrices>;

		/**
		 * Total value for all units of the item in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface CartSimulationReturnItemsPriceDefinitionFormProperties {

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
	export function CreateCartSimulationReturnItemsPriceDefinitionFormGroup() {
		return new FormGroup<CartSimulationReturnItemsPriceDefinitionFormProperties>({
			calculatedSellingPrice: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CartSimulationReturnItemsPriceDefinitionSellingPrices {

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
	export interface CartSimulationReturnItemsPriceDefinitionSellingPricesFormProperties {

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
	export function CreateCartSimulationReturnItemsPriceDefinitionSellingPricesFormGroup() {
		return new FormGroup<CartSimulationReturnItemsPriceDefinitionSellingPricesFormProperties>({
			quantity: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CartSimulationReturnItemsPriceTags {

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
	export interface CartSimulationReturnItemsPriceTagsFormProperties {

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
	export function CreateCartSimulationReturnItemsPriceTagsFormGroup() {
		return new FormGroup<CartSimulationReturnItemsPriceTagsFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined),
			isPercentual: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			rawValue: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CartSimulationReturnLogisticsInfo {

		/** Address ID. */
		addressId?: string | null;

		/** List of available delivery channels. */
		CartSimulationReturnLogisticsInfoDeliveryChannels?: Array<CartSimulationReturnLogisticsInfoDeliveryChannels>;

		/**
		 * Index of item in items array.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex?: number | null;

		/** Item metadata. */
		itemMetadata?: CartSimulationReturnLogisticsInfoItemMetadata;

		/** Array containing an object for each message generated by our servers while processing the request. */
		messages?: Array<string>;

		/** Array containing pickup points information. */
		pickupPoints?: Array<string>;

		/** Purchase conditions information. */
		purchaseConditions?: CartSimulationReturnLogisticsInfoPurchaseConditions;

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
		CartSimulationReturnLogisticsInfoSlas?: Array<CartSimulationReturnLogisticsInfoSlas>;

		/** Subscription information. */
		subscriptionData?: string | null;

		/** Information on order totals. */
		CartSimulationReturnLogisticsInfoTotals?: Array<CartSimulationReturnLogisticsInfoTotals>;
	}
	export interface CartSimulationReturnLogisticsInfoFormProperties {

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
	export function CreateCartSimulationReturnLogisticsInfoFormGroup() {
		return new FormGroup<CartSimulationReturnLogisticsInfoFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			itemIndex: new FormControl<number | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			selectedDeliveryChannel: new FormControl<string | null | undefined>(undefined),
			selectedSla: new FormControl<string | null | undefined>(undefined),
			subscriptionData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CartSimulationReturnLogisticsInfoDeliveryChannels {

		/** Delivery channel ID. */
		id?: string | null;
	}
	export interface CartSimulationReturnLogisticsInfoDeliveryChannelsFormProperties {

		/** Delivery channel ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCartSimulationReturnLogisticsInfoDeliveryChannelsFormGroup() {
		return new FormGroup<CartSimulationReturnLogisticsInfoDeliveryChannelsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CartSimulationReturnLogisticsInfoItemMetadata {

		/** List of objects containing metadata on each item in the order. */
		CartSimulationReturnLogisticsInfoItemMetadataItems?: Array<CartSimulationReturnLogisticsInfoItemMetadataItems>;
	}
	export interface CartSimulationReturnLogisticsInfoItemMetadataFormProperties {
	}
	export function CreateCartSimulationReturnLogisticsInfoItemMetadataFormGroup() {
		return new FormGroup<CartSimulationReturnLogisticsInfoItemMetadataFormProperties>({
		});

	}

	export interface CartSimulationReturnLogisticsInfoItemMetadataItems {

		/** Assembly options information. */
		assemblyOptions?: Array<string>;

		/** Item ID. */
		id?: string | null;

		/** Seller. */
		seller?: string | null;
	}
	export interface CartSimulationReturnLogisticsInfoItemMetadataItemsFormProperties {

		/** Item ID. */
		id: FormControl<string | null | undefined>,

		/** Seller. */
		seller: FormControl<string | null | undefined>,
	}
	export function CreateCartSimulationReturnLogisticsInfoItemMetadataItemsFormGroup() {
		return new FormGroup<CartSimulationReturnLogisticsInfoItemMetadataItemsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			seller: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CartSimulationReturnLogisticsInfoPurchaseConditions {

		/** List of objects containing purchase condition information on each item in the order. */
		CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditions?: Array<CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditions>;
	}
	export interface CartSimulationReturnLogisticsInfoPurchaseConditionsFormProperties {
	}
	export function CreateCartSimulationReturnLogisticsInfoPurchaseConditionsFormGroup() {
		return new FormGroup<CartSimulationReturnLogisticsInfoPurchaseConditionsFormProperties>({
		});

	}

	export interface CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditions {

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
		CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlas?: Array<CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlas>;
	}
	export interface CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsFormProperties {

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
	export function CreateCartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsFormGroup() {
		return new FormGroup<CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			listPrice: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			seller: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlas {

		/** This object contains information about the delivery window available to the shopper. */
		availableDeliveryWindows?: CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasAvailableDeliveryWindows;

		/** Delivery channel. */
		deliveryChannel?: string | null;

		/** Information on each delivery ID. */
		CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryIds?: Array<CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryIds>;

		/** In case of scheduled delivery, this object will contain information on the delivery window selected by the shopper. */
		deliveryWindow?: CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryWindow;

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
		pickupStoreInfo?: CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasPickupStoreInfo;

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
	export interface CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasFormProperties {

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
	export function CreateCartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasFormGroup() {
		return new FormGroup<CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasFormProperties>({
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

	export interface CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasAvailableDeliveryWindows {

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
	export interface CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasAvailableDeliveryWindowsFormProperties {

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
	export function CreateCartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasAvailableDeliveryWindowsFormGroup() {
		return new FormGroup<CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasAvailableDeliveryWindowsFormProperties>({
			endDateUtc: new FormControl<string | null | undefined>(undefined),
			lisPrice: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			startDateUtc: new FormControl<string | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryIds {

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
	export interface CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryIdsFormProperties {

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
	export function CreateCartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryIdsFormGroup() {
		return new FormGroup<CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryIdsFormProperties>({
			courierId: new FormControl<string | null | undefined>(undefined),
			courierName: new FormControl<string | null | undefined>(undefined),
			dockId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			warehouseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryWindow {

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
	export interface CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryWindowFormProperties {

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
	export function CreateCartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryWindowFormGroup() {
		return new FormGroup<CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasDeliveryWindowFormProperties>({
			endDateUtc: new FormControl<string | null | undefined>(undefined),
			lisPrice: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			startDateUtc: new FormControl<string | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasPickupStoreInfo {

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
	export interface CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasPickupStoreInfoFormProperties {

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
	export function CreateCartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasPickupStoreInfoFormGroup() {
		return new FormGroup<CartSimulationReturnLogisticsInfoPurchaseConditionsItemPurchaseConditionsSlasPickupStoreInfoFormProperties>({
			additionalInfo: new FormControl<string | null | undefined>(undefined),
			address: new FormControl<string | null | undefined>(undefined),
			dockId: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			isPickupStore: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CartSimulationReturnLogisticsInfoSlas {

		/** This object contains information about the delivery window available to the shopper. */
		availableDeliveryWindows?: CartSimulationReturnLogisticsInfoSlasAvailableDeliveryWindows;

		/** Delivery channel. */
		deliveryChannel?: string | null;

		/** Information on each delivery ID. */
		CartSimulationReturnLogisticsInfoSlasDeliveryIds?: Array<CartSimulationReturnLogisticsInfoSlasDeliveryIds>;

		/** In case of scheduled delivery, this object will contain information on the delivery window selected by the shopper. */
		deliveryWindow?: CartSimulationReturnLogisticsInfoSlasDeliveryWindow;

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
		pickupStoreInfo?: CartSimulationReturnLogisticsInfoSlasPickupStoreInfo;

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
	export interface CartSimulationReturnLogisticsInfoSlasFormProperties {

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
	export function CreateCartSimulationReturnLogisticsInfoSlasFormGroup() {
		return new FormGroup<CartSimulationReturnLogisticsInfoSlasFormProperties>({
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

	export interface CartSimulationReturnLogisticsInfoSlasAvailableDeliveryWindows {

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
	export interface CartSimulationReturnLogisticsInfoSlasAvailableDeliveryWindowsFormProperties {

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
	export function CreateCartSimulationReturnLogisticsInfoSlasAvailableDeliveryWindowsFormGroup() {
		return new FormGroup<CartSimulationReturnLogisticsInfoSlasAvailableDeliveryWindowsFormProperties>({
			endDateUtc: new FormControl<string | null | undefined>(undefined),
			lisPrice: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			startDateUtc: new FormControl<string | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CartSimulationReturnLogisticsInfoSlasDeliveryIds {

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
	export interface CartSimulationReturnLogisticsInfoSlasDeliveryIdsFormProperties {

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
	export function CreateCartSimulationReturnLogisticsInfoSlasDeliveryIdsFormGroup() {
		return new FormGroup<CartSimulationReturnLogisticsInfoSlasDeliveryIdsFormProperties>({
			courierId: new FormControl<string | null | undefined>(undefined),
			courierName: new FormControl<string | null | undefined>(undefined),
			dockId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			warehouseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CartSimulationReturnLogisticsInfoSlasDeliveryWindow {

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
	export interface CartSimulationReturnLogisticsInfoSlasDeliveryWindowFormProperties {

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
	export function CreateCartSimulationReturnLogisticsInfoSlasDeliveryWindowFormGroup() {
		return new FormGroup<CartSimulationReturnLogisticsInfoSlasDeliveryWindowFormProperties>({
			endDateUtc: new FormControl<string | null | undefined>(undefined),
			lisPrice: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			startDateUtc: new FormControl<string | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CartSimulationReturnLogisticsInfoSlasPickupStoreInfo {

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
	export interface CartSimulationReturnLogisticsInfoSlasPickupStoreInfoFormProperties {

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
	export function CreateCartSimulationReturnLogisticsInfoSlasPickupStoreInfoFormGroup() {
		return new FormGroup<CartSimulationReturnLogisticsInfoSlasPickupStoreInfoFormProperties>({
			additionalInfo: new FormControl<string | null | undefined>(undefined),
			address: new FormControl<string | null | undefined>(undefined),
			dockId: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			isPickupStore: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CartSimulationReturnLogisticsInfoTotals {

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
	export interface CartSimulationReturnLogisticsInfoTotalsFormProperties {

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
	export function CreateCartSimulationReturnLogisticsInfoTotalsFormGroup() {
		return new FormGroup<CartSimulationReturnLogisticsInfoTotalsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CartSimulationReturnPaymentData {

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
		CartSimulationReturnPaymentDataPaymentSystems?: Array<CartSimulationReturnPaymentDataPaymentSystems>;

		/** Information on each payment. */
		payments?: Array<string>;
	}
	export interface CartSimulationReturnPaymentDataFormProperties {

		/** Available associations. */
		availableAssociations: FormControl<string | null | undefined>,
	}
	export function CreateCartSimulationReturnPaymentDataFormGroup() {
		return new FormGroup<CartSimulationReturnPaymentDataFormProperties>({
			availableAssociations: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CartSimulationReturnPaymentDataPaymentSystems {

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
	export interface CartSimulationReturnPaymentDataPaymentSystemsFormProperties {

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
	export function CreateCartSimulationReturnPaymentDataPaymentSystemsFormGroup() {
		return new FormGroup<CartSimulationReturnPaymentDataPaymentSystemsFormProperties>({
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

	export interface CartSimulationReturnRatesAndBenefitsData {

		/** List with rates and benefits identifiers. */
		rateAndBenefitsIdentifiers?: Array<string>;

		/** List with rates and benefits teasers. */
		teaser?: Array<string>;
	}
	export interface CartSimulationReturnRatesAndBenefitsDataFormProperties {
	}
	export function CreateCartSimulationReturnRatesAndBenefitsDataFormGroup() {
		return new FormGroup<CartSimulationReturnRatesAndBenefitsDataFormProperties>({
		});

	}

	export interface PlaceOrderPutBody {

		/**
		 * Customer's profile information. The `email` functions as a customer's ID.
		 * For customers already in your database, sending only the email address is enough to register the order to the shopper’s existing account.
		 * > If the shopper exists in you database but is not logged in, sending other profile information along with the email will cause the platform to fail placing the order. This happens because this action is interpreted as an attempt to edit profile data, which is not possible unless the customer is logged in to the store.
		 * Required
		 */
		clientProfileData: PlaceOrderPutBodyClientProfileData;

		/**
		 * Array of objects containing information on each of the order's items.
		 * Required
		 */
		PlaceOrderPutBodyItems: Array<PlaceOrderPutBodyItems>;
		marketingData?: PlaceOrderPutBodyMarketingData;

		/** Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1) */
		openTextField?: string | null;

		/**
		 * Payment infomation.
		 * Required
		 */
		paymentData: PlaceOrderPutBodyPaymentData;

		/** Sales Associate information. */
		salesAssociateData?: PlaceOrderPutBodySalesAssociateData;

		/**
		 * Shipping information.
		 * Required
		 */
		shippingData: PlaceOrderPutBodyShippingData;
	}
	export interface PlaceOrderPutBodyFormProperties {

		/** Optional field meant to hold additional information about the order. We recommend using this field for text, not data formats such as `JSON` even if escaped. For that purpose, see [Creating customizable fields](https://developers.vtex.com/vtex-rest-api/docs/creating-customizable-fields-in-the-cart-with-checkout-api-1) */
		openTextField: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderPutBodyFormGroup() {
		return new FormGroup<PlaceOrderPutBodyFormProperties>({
			openTextField: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderPutBodyClientProfileData {

		/** Corporate document, if the customer is a legal entity. */
		corporateDocument?: string | null;

		/** Company name, if the customer is a legal entity. */
		corporateName?: string | null;

		/** Corporate phone number, if the customer is a legal entity. */
		corporatePhone?: string | null;

		/** Document number informed by the customer. */
		document?: string | null;

		/** Type of the document informed by the customer. */
		documentType?: string | null;

		/**
		 * Customer's email address.
		 * Required
		 */
		email: string;

		/** Customer's first name. */
		firstName?: string | null;

		/** `true` if the customer is a legal entity. */
		isCorporate?: boolean | null;

		/** Customer's last name. */
		lastName?: string | null;

		/** Customer's phone number. */
		phone?: string | null;

		/** State inscription, if the customer is a legal entity. */
		stateInscription?: string | null;

		/** Trade name, if the customer is a legal entity. */
		tradeName?: string | null;
	}
	export interface PlaceOrderPutBodyClientProfileDataFormProperties {

		/** Corporate document, if the customer is a legal entity. */
		corporateDocument: FormControl<string | null | undefined>,

		/** Company name, if the customer is a legal entity. */
		corporateName: FormControl<string | null | undefined>,

		/** Corporate phone number, if the customer is a legal entity. */
		corporatePhone: FormControl<string | null | undefined>,

		/** Document number informed by the customer. */
		document: FormControl<string | null | undefined>,

		/** Type of the document informed by the customer. */
		documentType: FormControl<string | null | undefined>,

		/**
		 * Customer's email address.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/** Customer's first name. */
		firstName: FormControl<string | null | undefined>,

		/** `true` if the customer is a legal entity. */
		isCorporate: FormControl<boolean | null | undefined>,

		/** Customer's last name. */
		lastName: FormControl<string | null | undefined>,

		/** Customer's phone number. */
		phone: FormControl<string | null | undefined>,

		/** State inscription, if the customer is a legal entity. */
		stateInscription: FormControl<string | null | undefined>,

		/** Trade name, if the customer is a legal entity. */
		tradeName: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderPutBodyClientProfileDataFormGroup() {
		return new FormGroup<PlaceOrderPutBodyClientProfileDataFormProperties>({
			corporateDocument: new FormControl<string | null | undefined>(undefined),
			corporateName: new FormControl<string | null | undefined>(undefined),
			corporatePhone: new FormControl<string | null | undefined>(undefined),
			document: new FormControl<string | null | undefined>(undefined),
			documentType: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			firstName: new FormControl<string | null | undefined>(undefined),
			isCorporate: new FormControl<boolean | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			stateInscription: new FormControl<string | null | undefined>(undefined),
			tradeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderPutBodyItems {

		/** Array containing information on attachments. */
		attachments?: Array<string>;

		/** Information on services sold along with the SKU. Example: a gift package. */
		PlaceOrderPutBodyItemsBundleItems?: Array<PlaceOrderPutBodyItemsBundleItems>;

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
		itemAttachment?: PlaceOrderPutBodyItemsItemAttachment;

		/** SKU measurement unit. */
		measurementUnit?: string | null;

		/**
		 * Item price within the context of the order without separating cents. For example, $24.99 is represented `2499`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order. */
		PlaceOrderPutBodyItemsPriceTags?: Array<PlaceOrderPutBodyItemsPriceTags>;

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
	export interface PlaceOrderPutBodyItemsFormProperties {

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
	export function CreatePlaceOrderPutBodyItemsFormGroup() {
		return new FormGroup<PlaceOrderPutBodyItemsFormProperties>({
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

	export interface PlaceOrderPutBodyItemsBundleItems {

		/** Service identifier. */
		id?: string | null;

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
	export interface PlaceOrderPutBodyItemsBundleItemsFormProperties {

		/** Service identifier. */
		id: FormControl<string | null | undefined>,

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
	export function CreatePlaceOrderPutBodyItemsBundleItemsFormGroup() {
		return new FormGroup<PlaceOrderPutBodyItemsBundleItemsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderPutBodyItemsItemAttachment {

		/** Content referring to the customization requested by the customer. */
		content?: string | null;

		/** Attachment name. */
		name?: string | null;
	}
	export interface PlaceOrderPutBodyItemsItemAttachmentFormProperties {

		/** Content referring to the customization requested by the customer. */
		content: FormControl<string | null | undefined>,

		/** Attachment name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderPutBodyItemsItemAttachmentFormGroup() {
		return new FormGroup<PlaceOrderPutBodyItemsItemAttachmentFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderPutBodyItemsPriceTags {

		/** Price tag identifier. */
		identifier?: string | null;

		/** `true` if price tag value is applied through a percentage. */
		isPercentual?: boolean | null;

		/** Price tag name. */
		name?: string | null;

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
	export interface PlaceOrderPutBodyItemsPriceTagsFormProperties {

		/** Price tag identifier. */
		identifier: FormControl<string | null | undefined>,

		/** `true` if price tag value is applied through a percentage. */
		isPercentual: FormControl<boolean | null | undefined>,

		/** Price tag name. */
		name: FormControl<string | null | undefined>,

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
	export function CreatePlaceOrderPutBodyItemsPriceTagsFormGroup() {
		return new FormGroup<PlaceOrderPutBodyItemsPriceTagsFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined),
			isPercentual: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rawValue: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderPutBodyMarketingData {

		/** Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order. */
		coupon?: string | null;

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
	export interface PlaceOrderPutBodyMarketingDataFormProperties {

		/** Sending an existing coupon code in this field will return the corresponding discount in the purchase. Use the [cart simulation](https://developers.vtex.com/vtex-rest-api/reference/orderform#orderformsimulation) request to check which coupons might apply before placing the order. */
		coupon: FormControl<string | null | undefined>,

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
	export function CreatePlaceOrderPutBodyMarketingDataFormGroup() {
		return new FormGroup<PlaceOrderPutBodyMarketingDataFormProperties>({
			coupon: new FormControl<string | null | undefined>(undefined),
			utmCampaign: new FormControl<string | null | undefined>(undefined),
			utmMedium: new FormControl<string | null | undefined>(undefined),
			utmSource: new FormControl<string | null | undefined>(undefined),
			utmiCampaign: new FormControl<string | null | undefined>(undefined),
			utmiPage: new FormControl<string | null | undefined>(undefined),
			utmiPart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderPutBodyPaymentData {

		/** Array of gift card messages. */
		giftCardMessages?: Array<string>;

		/** Gift card information, if it applies to the order. */
		PlaceOrderPutBodyPaymentDataGiftCards?: Array<PlaceOrderPutBodyPaymentDataGiftCards>;

		/** Information on payment systems. */
		PlaceOrderPutBodyPaymentDataPaymentSystems?: Array<PlaceOrderPutBodyPaymentDataPaymentSystems>;

		/**
		 * Payment information.
		 * Required
		 */
		PlaceOrderPutBodyPaymentDataPayments: Array<PlaceOrderPutBodyPaymentDataPayments>;

		/** Indicates whether this object's information is up to date according to the order's items. An order can not be placed if `"outdated"` */
		updateStatus?: string | null;
	}
	export interface PlaceOrderPutBodyPaymentDataFormProperties {

		/** Indicates whether this object's information is up to date according to the order's items. An order can not be placed if `"outdated"` */
		updateStatus: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderPutBodyPaymentDataFormGroup() {
		return new FormGroup<PlaceOrderPutBodyPaymentDataFormProperties>({
			updateStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderPutBodyPaymentDataGiftCards {

		/**
		 * Gift card balance.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		balance?: number | null;

		/** Gift card ID. */
		id?: string | null;

		/** Indicates whether gift card is in use. */
		inUse?: boolean | null;

		/** Indicates whether gift card is special. */
		isSpecialCard?: boolean | null;

		/** Gift card name. */
		name?: string | null;

		/**
		 * Gift card redemption code.
		 * Required
		 */
		redemptionCode: string;

		/**
		 * Gift card value.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: number;
	}
	export interface PlaceOrderPutBodyPaymentDataGiftCardsFormProperties {

		/**
		 * Gift card balance.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		balance: FormControl<number | null | undefined>,

		/** Gift card ID. */
		id: FormControl<string | null | undefined>,

		/** Indicates whether gift card is in use. */
		inUse: FormControl<boolean | null | undefined>,

		/** Indicates whether gift card is special. */
		isSpecialCard: FormControl<boolean | null | undefined>,

		/** Gift card name. */
		name: FormControl<string | null | undefined>,

		/**
		 * Gift card redemption code.
		 * Required
		 */
		redemptionCode: FormControl<string | null | undefined>,

		/**
		 * Gift card value.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreatePlaceOrderPutBodyPaymentDataGiftCardsFormGroup() {
		return new FormGroup<PlaceOrderPutBodyPaymentDataGiftCardsFormProperties>({
			balance: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			inUse: new FormControl<boolean | null | undefined>(undefined),
			isSpecialCard: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			redemptionCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PlaceOrderPutBodyPaymentDataPaymentSystems {

		/** Description. */
		description?: string | null;

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

		/** Indicates whether a document is required. */
		requiresDocument?: boolean | null;

		/** Indicates whether this payment system has been selected. */
		selected?: boolean | null;

		/** String ID. */
		stringId?: string | null;

		/** Template. */
		template?: string | null;

		/** Payment system validator. */
		validator?: PlaceOrderPutBodyPaymentDataPaymentSystemsValidator;
	}
	export interface PlaceOrderPutBodyPaymentDataPaymentSystemsFormProperties {

		/** Description. */
		description: FormControl<string | null | undefined>,

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

		/** Indicates whether a document is required. */
		requiresDocument: FormControl<boolean | null | undefined>,

		/** Indicates whether this payment system has been selected. */
		selected: FormControl<boolean | null | undefined>,

		/** String ID. */
		stringId: FormControl<string | null | undefined>,

		/** Template. */
		template: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderPutBodyPaymentDataPaymentSystemsFormGroup() {
		return new FormGroup<PlaceOrderPutBodyPaymentDataPaymentSystemsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			groupName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isCustom: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			requiresDocument: new FormControl<boolean | null | undefined>(undefined),
			selected: new FormControl<boolean | null | undefined>(undefined),
			stringId: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderPutBodyPaymentDataPaymentSystemsValidator {

		/** Card code mask. */
		cardCodeMask?: string | null;

		/** Card code regular expression. */
		cardCodeRegex?: string | null;

		/** Validator mask. */
		mask?: string | null;
		regex?: string | null;

		/** Weights. */
		weights?: Array<number>;
	}
	export interface PlaceOrderPutBodyPaymentDataPaymentSystemsValidatorFormProperties {

		/** Card code mask. */
		cardCodeMask: FormControl<string | null | undefined>,

		/** Card code regular expression. */
		cardCodeRegex: FormControl<string | null | undefined>,

		/** Validator mask. */
		mask: FormControl<string | null | undefined>,
		regex: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderPutBodyPaymentDataPaymentSystemsValidatorFormGroup() {
		return new FormGroup<PlaceOrderPutBodyPaymentDataPaymentSystemsValidatorFormProperties>({
			cardCodeMask: new FormControl<string | null | undefined>(undefined),
			cardCodeRegex: new FormControl<string | null | undefined>(undefined),
			mask: new FormControl<string | null | undefined>(undefined),
			regex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderPutBodyPaymentDataPayments {

		/** Account ID. */
		accountId?: string | null;

		/** Payment bin. */
		bin?: string | null;

		/**
		 * Number of installments.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		installments: number;

		/**
		 * Payment system.
		 * Required
		 */
		paymentSystem: string;

		/**
		 * Reference value for calculating interest rates, in case it applies.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		referenceValue: number;

		/**
		 * Value including interest, in case it applies.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: number;
	}
	export interface PlaceOrderPutBodyPaymentDataPaymentsFormProperties {

		/** Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** Payment bin. */
		bin: FormControl<string | null | undefined>,

		/**
		 * Number of installments.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		installments: FormControl<number | null | undefined>,

		/**
		 * Payment system.
		 * Required
		 */
		paymentSystem: FormControl<string | null | undefined>,

		/**
		 * Reference value for calculating interest rates, in case it applies.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		referenceValue: FormControl<number | null | undefined>,

		/**
		 * Value including interest, in case it applies.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreatePlaceOrderPutBodyPaymentDataPaymentsFormGroup() {
		return new FormGroup<PlaceOrderPutBodyPaymentDataPaymentsFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			bin: new FormControl<string | null | undefined>(undefined),
			installments: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			paymentSystem: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PlaceOrderPutBodySalesAssociateData {

		/** Sales Associate (Seller) identification code. All information should be registered by the merchant. Maximum of 100 characters. */
		salesAssociateId?: string | null;
	}
	export interface PlaceOrderPutBodySalesAssociateDataFormProperties {

		/** Sales Associate (Seller) identification code. All information should be registered by the merchant. Maximum of 100 characters. */
		salesAssociateId: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderPutBodySalesAssociateDataFormGroup() {
		return new FormGroup<PlaceOrderPutBodySalesAssociateDataFormProperties>({
			salesAssociateId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderPutBodyShippingData {

		/**
		 * Shipping address.
		 * For customers already in your data base, it is enough to send this object only with an `addressId`, which you may obtain from a [Cart simulation request](https://developers.vtex.com/vtex-rest-api/reference/shopping-cart#cartsimulation), for example.
		 */
		address?: PlaceOrderPutBodyShippingDataAddress;

		/** Array of objects containing logistics information of each item. */
		PlaceOrderPutBodyShippingDataLogisticsInfo?: Array<PlaceOrderPutBodyShippingDataLogisticsInfo>;

		/** Indicate whether this object's information is up to date according to the order's items. An order can not be placed if `"outdated"` */
		updateStatus?: string | null;
	}
	export interface PlaceOrderPutBodyShippingDataFormProperties {

		/** Indicate whether this object's information is up to date according to the order's items. An order can not be placed if `"outdated"` */
		updateStatus: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderPutBodyShippingDataFormGroup() {
		return new FormGroup<PlaceOrderPutBodyShippingDataFormProperties>({
			updateStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderPutBodyShippingDataAddress {

		/** Address ID. */
		addressId?: string | null;

		/** Type of address. For example, `Residential` or `Pickup`, among others. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal Code. */
		postalCode?: string | null;

		/** Name of the person who is going to receive the order. */
		receiverName?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the shipping address. */
		street?: string | null;
	}
	export interface PlaceOrderPutBodyShippingDataAddressFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Type of address. For example, `Residential` or `Pickup`, among others. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal Code. */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the person who is going to receive the order. */
		receiverName: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the shipping address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderPutBodyShippingDataAddressFormGroup() {
		return new FormGroup<PlaceOrderPutBodyShippingDataAddressFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderPutBodyShippingDataLogisticsInfo {

		/** In case of scheduled delivery, this object will contain information on the delivery window selected by the shopper. */
		deliveryWindow?: PlaceOrderPutBodyShippingDataLogisticsInfoDeliveryWindow;

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
	export interface PlaceOrderPutBodyShippingDataLogisticsInfoFormProperties {

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
	export function CreatePlaceOrderPutBodyShippingDataLogisticsInfoFormGroup() {
		return new FormGroup<PlaceOrderPutBodyShippingDataLogisticsInfoFormProperties>({
			itemIndex: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lockTTL: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			selectedSla: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shippingEstimate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderPutBodyShippingDataLogisticsInfoDeliveryWindow {

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
	export interface PlaceOrderPutBodyShippingDataLogisticsInfoDeliveryWindowFormProperties {

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
	export function CreatePlaceOrderPutBodyShippingDataLogisticsInfoDeliveryWindowFormGroup() {
		return new FormGroup<PlaceOrderPutBodyShippingDataLogisticsInfoDeliveryWindowFormProperties>({
			endDateUtc: new FormControl<string | null | undefined>(undefined),
			lisPrice: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			startDateUtc: new FormControl<string | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturn {

		/** This is `null` since this request does not depend on any previously existing orderForm information in the platform. */
		orderForm?: string | null;

		/** Information on each of the orders created. */
		PlaceOrderReturnOrders?: Array<PlaceOrderReturnOrders>;

		/** Information on each transaction pertinent to the order placed. */
		transactionData?: PlaceOrderReturnTransactionData;
	}
	export interface PlaceOrderReturnFormProperties {

		/** This is `null` since this request does not depend on any previously existing orderForm information in the platform. */
		orderForm: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderReturnFormGroup() {
		return new FormGroup<PlaceOrderReturnFormProperties>({
			orderForm: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnOrders {

		/** Indicates whether cancelation is allowed. */
		allowCancelation?: boolean | null;

		/** Indicates whether seller changing is allowed. */
		allowChangeSeller?: boolean | null;

		/** Indicates whether edition is allowed. */
		allowEdition?: boolean | null;

		/** Checked in pickuppoint. */
		checkedInPickupPointId?: string | null;

		/** Customer's profile information. */
		clientProfileData?: PlaceOrderReturnOrdersClientProfileData;

		/** Creation date. */
		creationDate?: string | null;

		/** Follow up email address. */
		followUpEmail?: string | null;

		/** Host name. */
		hostName?: string | null;

		/** Indicates whether order is checked in. */
		isCheckedIn?: boolean | null;

		/** Indicates whether order is completed. */
		isCompleted?: boolean | null;

		/** Indicates whether user data is visible. */
		isUserDataVisible?: boolean | null;

		/** Item metadata. */
		itemMetadata?: PlaceOrderReturnOrdersItemMetadata;

		/** Information on each item in the order. */
		PlaceOrderReturnOrdersItems?: Array<PlaceOrderReturnOrdersItems>;

		/** Last change. */
		lastChange?: string | null;

		/** Merchant name. */
		merchantName?: string | null;

		/** `orderForm` creation date. */
		orderFormCreationDate?: string | null;

		/** Order group. Orders that involve different sellers are split into different orders of a same order group. */
		orderGroup?: string | null;

		/** ID of the order in the Order Management System (OMS). */
		orderId?: string | null;

		/** Information on the order's payment. */
		paymentData?: PlaceOrderReturnOrdersPaymentData;

		/** Information on rates and benefits that apply to the order. */
		ratesAndBenefitsData?: PlaceOrderReturnOrdersRatesAndBenefitsData;

		/**
		 * Rounding error.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		roundingError?: number | null;

		/** Sales Associate (Seller) identification code. */
		salesAssociateId?: string | null;

		/** Sales channel. */
		salesChannel?: string | null;

		/** ID of the order in the seller. */
		sellerOrderId?: string | null;

		/** Information on each seller. */
		PlaceOrderReturnOrdersSellers?: Array<PlaceOrderReturnOrdersSellers>;

		/** Shipping information pertinent to the order. */
		shippingData?: PlaceOrderReturnOrdersShippingData;

		/** State. */
		state?: string | null;

		/** Store ID. */
		storeId?: string | null;

		/** Time zone creation date. */
		timeZoneCreationDate?: string | null;

		/** Time zone last change. */
		timeZoneLastChange?: string | null;

		/** Information on order totals. */
		PlaceOrderReturnOrdersTotals?: Array<PlaceOrderReturnOrdersTotals>;

		/** User type. */
		userType?: string | null;

		/**
		 * Value of the order.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface PlaceOrderReturnOrdersFormProperties {

		/** Indicates whether cancelation is allowed. */
		allowCancelation: FormControl<boolean | null | undefined>,

		/** Indicates whether seller changing is allowed. */
		allowChangeSeller: FormControl<boolean | null | undefined>,

		/** Indicates whether edition is allowed. */
		allowEdition: FormControl<boolean | null | undefined>,

		/** Checked in pickuppoint. */
		checkedInPickupPointId: FormControl<string | null | undefined>,

		/** Creation date. */
		creationDate: FormControl<string | null | undefined>,

		/** Follow up email address. */
		followUpEmail: FormControl<string | null | undefined>,

		/** Host name. */
		hostName: FormControl<string | null | undefined>,

		/** Indicates whether order is checked in. */
		isCheckedIn: FormControl<boolean | null | undefined>,

		/** Indicates whether order is completed. */
		isCompleted: FormControl<boolean | null | undefined>,

		/** Indicates whether user data is visible. */
		isUserDataVisible: FormControl<boolean | null | undefined>,

		/** Last change. */
		lastChange: FormControl<string | null | undefined>,

		/** Merchant name. */
		merchantName: FormControl<string | null | undefined>,

		/** `orderForm` creation date. */
		orderFormCreationDate: FormControl<string | null | undefined>,

		/** Order group. Orders that involve different sellers are split into different orders of a same order group. */
		orderGroup: FormControl<string | null | undefined>,

		/** ID of the order in the Order Management System (OMS). */
		orderId: FormControl<string | null | undefined>,

		/**
		 * Rounding error.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		roundingError: FormControl<number | null | undefined>,

		/** Sales Associate (Seller) identification code. */
		salesAssociateId: FormControl<string | null | undefined>,

		/** Sales channel. */
		salesChannel: FormControl<string | null | undefined>,

		/** ID of the order in the seller. */
		sellerOrderId: FormControl<string | null | undefined>,

		/** State. */
		state: FormControl<string | null | undefined>,

		/** Store ID. */
		storeId: FormControl<string | null | undefined>,

		/** Time zone creation date. */
		timeZoneCreationDate: FormControl<string | null | undefined>,

		/** Time zone last change. */
		timeZoneLastChange: FormControl<string | null | undefined>,

		/** User type. */
		userType: FormControl<string | null | undefined>,

		/**
		 * Value of the order.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreatePlaceOrderReturnOrdersFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersFormProperties>({
			allowCancelation: new FormControl<boolean | null | undefined>(undefined),
			allowChangeSeller: new FormControl<boolean | null | undefined>(undefined),
			allowEdition: new FormControl<boolean | null | undefined>(undefined),
			checkedInPickupPointId: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<string | null | undefined>(undefined),
			followUpEmail: new FormControl<string | null | undefined>(undefined),
			hostName: new FormControl<string | null | undefined>(undefined),
			isCheckedIn: new FormControl<boolean | null | undefined>(undefined),
			isCompleted: new FormControl<boolean | null | undefined>(undefined),
			isUserDataVisible: new FormControl<boolean | null | undefined>(undefined),
			lastChange: new FormControl<string | null | undefined>(undefined),
			merchantName: new FormControl<string | null | undefined>(undefined),
			orderFormCreationDate: new FormControl<string | null | undefined>(undefined),
			orderGroup: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			roundingError: new FormControl<number | null | undefined>(undefined),
			salesAssociateId: new FormControl<string | null | undefined>(undefined),
			salesChannel: new FormControl<string | null | undefined>(undefined),
			sellerOrderId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			storeId: new FormControl<string | null | undefined>(undefined),
			timeZoneCreationDate: new FormControl<string | null | undefined>(undefined),
			timeZoneLastChange: new FormControl<string | null | undefined>(undefined),
			userType: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnOrdersClientProfileData {

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
	export interface PlaceOrderReturnOrdersClientProfileDataFormProperties {

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
	export function CreatePlaceOrderReturnOrdersClientProfileDataFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersClientProfileDataFormProperties>({
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

	export interface PlaceOrderReturnOrdersItemMetadata {

		/** List of objects containing metadata on each item in the order. */
		PlaceOrderReturnOrdersItemMetadataItems?: Array<PlaceOrderReturnOrdersItemMetadataItems>;
	}
	export interface PlaceOrderReturnOrdersItemMetadataFormProperties {
	}
	export function CreatePlaceOrderReturnOrdersItemMetadataFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersItemMetadataFormProperties>({
		});

	}

	export interface PlaceOrderReturnOrdersItemMetadataItems {

		/** Detail URL. */
		detailUrl?: string | null;

		/** European Article Number. */
		ean?: string | null;

		/** Item ID. */
		id?: string | null;

		/** Image URL. */
		imageUrl?: string | null;

		/** Product name. */
		name?: string | null;

		/** Product ID. */
		productId?: string | null;

		/** Ref ID. */
		refId?: string | null;

		/** Seller. */
		seller?: string | null;

		/** SKU name. */
		skuName?: string | null;
	}
	export interface PlaceOrderReturnOrdersItemMetadataItemsFormProperties {

		/** Detail URL. */
		detailUrl: FormControl<string | null | undefined>,

		/** European Article Number. */
		ean: FormControl<string | null | undefined>,

		/** Item ID. */
		id: FormControl<string | null | undefined>,

		/** Image URL. */
		imageUrl: FormControl<string | null | undefined>,

		/** Product name. */
		name: FormControl<string | null | undefined>,

		/** Product ID. */
		productId: FormControl<string | null | undefined>,

		/** Ref ID. */
		refId: FormControl<string | null | undefined>,

		/** Seller. */
		seller: FormControl<string | null | undefined>,

		/** SKU name. */
		skuName: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderReturnOrdersItemMetadataItemsFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersItemMetadataItemsFormProperties>({
			detailUrl: new FormControl<string | null | undefined>(undefined),
			ean: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			refId: new FormControl<string | null | undefined>(undefined),
			seller: new FormControl<string | null | undefined>(undefined),
			skuName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnOrdersItems {

		/** Additional information. */
		additionalInfo?: PlaceOrderReturnOrdersItemsAdditionalInfo;

		/** Array containing information on attachments. */
		attachments?: Array<string>;

		/** Availability */
		availability?: string | null;

		/** Information on services sold along with the SKU. Example: a gift package. */
		PlaceOrderReturnOrdersItemsBundleItems?: Array<PlaceOrderReturnOrdersItemsBundleItems>;

		/** Detail URL. */
		detailUrl?: string | null;

		/** European Article Number. */
		ean?: string | null;

		/** ID of the item. */
		id?: string | null;

		/** Image URL. */
		imageUrl?: string | null;

		/** Indicates whether item is a gift. */
		isGift?: boolean | null;

		/**
		 * List price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice?: number | null;

		/**
		 * Manual price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		manualPrice?: number | null;

		/** User that applied the manual price, if that is the case. */
		manualPriceAppliedBy?: string | null;

		/** Manufacturer code. */
		manufacturerCode?: string | null;

		/** Measurement unit */
		measurementUnit?: string | null;

		/** Modal type. */
		modalType?: string | null;

		/** Product name. */
		name?: string | null;

		/** Parent assembly binding. */
		parentAssemblyBinding?: string | null;

		/**
		 * Parent item index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		parentItemIndex?: number | null;

		/** Presale date. */
		preSaleDate?: string | null;

		/**
		 * Price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Price information for all units of a specific item. */
		priceDefinition?: PlaceOrderReturnOrdersItemsPriceDefinition;

		/** Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order. */
		PlaceOrderReturnOrdersItemsPriceTags?: Array<PlaceOrderReturnOrdersItemsPriceTags>;

		/** Price expiration date and time. */
		priceValidUntil?: string | null;

		/** Object, where each field is an ID from `productCategoryIds`. */
		productCategories?: PlaceOrderReturnOrdersItemsProductCategories;

		/** Product category IDs. */
		productCategoryIds?: string | null;

		/** Product ID. */
		productId?: string | null;

		/** Product Ref ID. */
		productRefId?: string | null;

		/**
		 * Quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity?: number | null;

		/** Ref ID. */
		refId?: string | null;

		/**
		 * Reward value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rewardValue?: number | null;

		/** Seller. */
		seller?: string | null;

		/** Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order. */
		sellerChain?: Array<string>;

		/**
		 * Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sellingPrice?: number | null;

		/** SKU name. */
		skuName?: string | null;

		/**
		 * Tax value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax?: number | null;

		/** Unique ID. */
		uniqueId?: string | null;

		/**
		 * Unit multiplier
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unitMultiplier?: number | null;
	}
	export interface PlaceOrderReturnOrdersItemsFormProperties {

		/** Availability */
		availability: FormControl<string | null | undefined>,

		/** Detail URL. */
		detailUrl: FormControl<string | null | undefined>,

		/** European Article Number. */
		ean: FormControl<string | null | undefined>,

		/** ID of the item. */
		id: FormControl<string | null | undefined>,

		/** Image URL. */
		imageUrl: FormControl<string | null | undefined>,

		/** Indicates whether item is a gift. */
		isGift: FormControl<boolean | null | undefined>,

		/**
		 * List price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * Manual price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		manualPrice: FormControl<number | null | undefined>,

		/** User that applied the manual price, if that is the case. */
		manualPriceAppliedBy: FormControl<string | null | undefined>,

		/** Manufacturer code. */
		manufacturerCode: FormControl<string | null | undefined>,

		/** Measurement unit */
		measurementUnit: FormControl<string | null | undefined>,

		/** Modal type. */
		modalType: FormControl<string | null | undefined>,

		/** Product name. */
		name: FormControl<string | null | undefined>,

		/** Parent assembly binding. */
		parentAssemblyBinding: FormControl<string | null | undefined>,

		/**
		 * Parent item index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		parentItemIndex: FormControl<number | null | undefined>,

		/** Presale date. */
		preSaleDate: FormControl<string | null | undefined>,

		/**
		 * Price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** Price expiration date and time. */
		priceValidUntil: FormControl<string | null | undefined>,

		/** Product category IDs. */
		productCategoryIds: FormControl<string | null | undefined>,

		/** Product ID. */
		productId: FormControl<string | null | undefined>,

		/** Product Ref ID. */
		productRefId: FormControl<string | null | undefined>,

		/**
		 * Quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** Ref ID. */
		refId: FormControl<string | null | undefined>,

		/**
		 * Reward value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rewardValue: FormControl<number | null | undefined>,

		/** Seller. */
		seller: FormControl<string | null | undefined>,

		/**
		 * Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sellingPrice: FormControl<number | null | undefined>,

		/** SKU name. */
		skuName: FormControl<string | null | undefined>,

		/**
		 * Tax value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax: FormControl<number | null | undefined>,

		/** Unique ID. */
		uniqueId: FormControl<string | null | undefined>,

		/**
		 * Unit multiplier
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unitMultiplier: FormControl<number | null | undefined>,
	}
	export function CreatePlaceOrderReturnOrdersItemsFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersItemsFormProperties>({
			availability: new FormControl<string | null | undefined>(undefined),
			detailUrl: new FormControl<string | null | undefined>(undefined),
			ean: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			isGift: new FormControl<boolean | null | undefined>(undefined),
			listPrice: new FormControl<number | null | undefined>(undefined),
			manualPrice: new FormControl<number | null | undefined>(undefined),
			manualPriceAppliedBy: new FormControl<string | null | undefined>(undefined),
			manufacturerCode: new FormControl<string | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			modalType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentAssemblyBinding: new FormControl<string | null | undefined>(undefined),
			parentItemIndex: new FormControl<number | null | undefined>(undefined),
			preSaleDate: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			priceValidUntil: new FormControl<string | null | undefined>(undefined),
			productCategoryIds: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			productRefId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			refId: new FormControl<string | null | undefined>(undefined),
			rewardValue: new FormControl<number | null | undefined>(undefined),
			seller: new FormControl<string | null | undefined>(undefined),
			sellingPrice: new FormControl<number | null | undefined>(undefined),
			skuName: new FormControl<string | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
			uniqueId: new FormControl<string | null | undefined>(undefined),
			unitMultiplier: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnOrdersItemsAdditionalInfo {

		/** Brand ID. */
		brandId?: string | null;

		/** Brand name. */
		brandName?: string | null;

		/** Dimension. */
		dimension?: string | null;

		/** Offering information. */
		offeringInfo?: string | null;

		/** Offering type. */
		offeringType?: string | null;

		/** Offering type ID. */
		offeringTypeId?: string | null;
	}
	export interface PlaceOrderReturnOrdersItemsAdditionalInfoFormProperties {

		/** Brand ID. */
		brandId: FormControl<string | null | undefined>,

		/** Brand name. */
		brandName: FormControl<string | null | undefined>,

		/** Dimension. */
		dimension: FormControl<string | null | undefined>,

		/** Offering information. */
		offeringInfo: FormControl<string | null | undefined>,

		/** Offering type. */
		offeringType: FormControl<string | null | undefined>,

		/** Offering type ID. */
		offeringTypeId: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderReturnOrdersItemsAdditionalInfoFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersItemsAdditionalInfoFormProperties>({
			brandId: new FormControl<string | null | undefined>(undefined),
			brandName: new FormControl<string | null | undefined>(undefined),
			dimension: new FormControl<string | null | undefined>(undefined),
			offeringInfo: new FormControl<string | null | undefined>(undefined),
			offeringType: new FormControl<string | null | undefined>(undefined),
			offeringTypeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnOrdersItemsBundleItems {

		/**
		 * Service identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Service name. */
		name?: string | null;

		/**
		 * Service price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Service type. */
		type?: string | null;
	}
	export interface PlaceOrderReturnOrdersItemsBundleItemsFormProperties {

		/**
		 * Service identifier.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Service name. */
		name: FormControl<string | null | undefined>,

		/**
		 * Service price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/** Service type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderReturnOrdersItemsBundleItemsFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersItemsBundleItemsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnOrdersItemsPriceDefinition {

		/**
		 * Item's calculated unitary selling price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		calculatedSellingPrice?: number | null;

		/** Array of objects, each containing value (in cents) and quantity for the different rounding instances that can be combined to form the correctly rounded total. */
		PlaceOrderReturnOrdersItemsPriceDefinitionSellingPrices?: Array<PlaceOrderReturnOrdersItemsPriceDefinitionSellingPrices>;

		/**
		 * Total value for all units of the item in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface PlaceOrderReturnOrdersItemsPriceDefinitionFormProperties {

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
	export function CreatePlaceOrderReturnOrdersItemsPriceDefinitionFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersItemsPriceDefinitionFormProperties>({
			calculatedSellingPrice: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnOrdersItemsPriceDefinitionSellingPrices {

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
	export interface PlaceOrderReturnOrdersItemsPriceDefinitionSellingPricesFormProperties {

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
	export function CreatePlaceOrderReturnOrdersItemsPriceDefinitionSellingPricesFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersItemsPriceDefinitionSellingPricesFormProperties>({
			quantity: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnOrdersItemsPriceTags {

		/** Price tag identifier. */
		identifier?: string | null;

		/** Indicates whether price tag value is applied through a percentage. */
		isPercentual?: boolean | null;

		/** Price tag name. */
		name?: string | null;

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
	export interface PlaceOrderReturnOrdersItemsPriceTagsFormProperties {

		/** Price tag identifier. */
		identifier: FormControl<string | null | undefined>,

		/** Indicates whether price tag value is applied through a percentage. */
		isPercentual: FormControl<boolean | null | undefined>,

		/** Price tag name. */
		name: FormControl<string | null | undefined>,

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
	export function CreatePlaceOrderReturnOrdersItemsPriceTagsFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersItemsPriceTagsFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined),
			isPercentual: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rawValue: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnOrdersItemsProductCategories {

		/** Product category corresponding to the ID in the field key. */
		'{ID}'?: string | null;
	}
	export interface PlaceOrderReturnOrdersItemsProductCategoriesFormProperties {

		/** Product category corresponding to the ID in the field key. */
		'{ID}': FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderReturnOrdersItemsProductCategoriesFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersItemsProductCategoriesFormProperties>({
			'{ID}': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnOrdersPaymentData {

		/** Gift card information, if it applies to the order. */
		PlaceOrderReturnOrdersPaymentDataGiftCards?: Array<PlaceOrderReturnOrdersPaymentDataGiftCards>;

		/** Information on each transaction pertinent to the order. */
		PlaceOrderReturnOrdersPaymentDataTransactions?: Array<PlaceOrderReturnOrdersPaymentDataTransactions>;
	}
	export interface PlaceOrderReturnOrdersPaymentDataFormProperties {
	}
	export function CreatePlaceOrderReturnOrdersPaymentDataFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersPaymentDataFormProperties>({
		});

	}

	export interface PlaceOrderReturnOrdersPaymentDataGiftCards {

		/**
		 * Gift card balance in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		balance?: number | null;

		/** Gift card ID. */
		id?: string | null;

		/** Indicates whether gift card is in use. */
		inUse?: boolean | null;

		/** Indicates whether gift card is special. */
		isSpecialCard?: boolean | null;

		/** Gift card name. */
		name?: string | null;

		/** Gift card redemption code. */
		redemptionCode?: string | null;

		/**
		 * Gift card value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface PlaceOrderReturnOrdersPaymentDataGiftCardsFormProperties {

		/**
		 * Gift card balance in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		balance: FormControl<number | null | undefined>,

		/** Gift card ID. */
		id: FormControl<string | null | undefined>,

		/** Indicates whether gift card is in use. */
		inUse: FormControl<boolean | null | undefined>,

		/** Indicates whether gift card is special. */
		isSpecialCard: FormControl<boolean | null | undefined>,

		/** Gift card name. */
		name: FormControl<string | null | undefined>,

		/** Gift card redemption code. */
		redemptionCode: FormControl<string | null | undefined>,

		/**
		 * Gift card value in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreatePlaceOrderReturnOrdersPaymentDataGiftCardsFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersPaymentDataGiftCardsFormProperties>({
			balance: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			inUse: new FormControl<boolean | null | undefined>(undefined),
			isSpecialCard: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			redemptionCode: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnOrdersPaymentDataTransactions {

		/** Indicates whether transaction is active. */
		isActive?: boolean | null;

		/** Merchant name. */
		merchantName?: string | null;

		/** Information on each payment. */
		PlaceOrderReturnOrdersPaymentDataTransactionsPayments?: Array<PlaceOrderReturnOrdersPaymentDataTransactionsPayments>;

		/** Indicates whather transaction is shared. */
		sharedTransaction?: boolean | null;

		/** Transaction ID. */
		transactionId?: string | null;
	}
	export interface PlaceOrderReturnOrdersPaymentDataTransactionsFormProperties {

		/** Indicates whether transaction is active. */
		isActive: FormControl<boolean | null | undefined>,

		/** Merchant name. */
		merchantName: FormControl<string | null | undefined>,

		/** Indicates whather transaction is shared. */
		sharedTransaction: FormControl<boolean | null | undefined>,

		/** Transaction ID. */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderReturnOrdersPaymentDataTransactionsFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersPaymentDataTransactionsFormProperties>({
			isActive: new FormControl<boolean | null | undefined>(undefined),
			merchantName: new FormControl<string | null | undefined>(undefined),
			sharedTransaction: new FormControl<boolean | null | undefined>(undefined),
			transactionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnOrdersPaymentDataTransactionsPayments {

		/** Account ID. */
		accountId?: string | null;

		/** Bin. */
		bin?: string | null;

		/**
		 * Number of installments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		installments?: number | null;

		/** Payment system. */
		paymentSystem?: string | null;

		/**
		 * Reference value for calculating interest rates, in case it applies. Displayed in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		referenceValue?: number | null;

		/**
		 * Value including interest, in case it applies. Displayed in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface PlaceOrderReturnOrdersPaymentDataTransactionsPaymentsFormProperties {

		/** Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** Bin. */
		bin: FormControl<string | null | undefined>,

		/**
		 * Number of installments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		installments: FormControl<number | null | undefined>,

		/** Payment system. */
		paymentSystem: FormControl<string | null | undefined>,

		/**
		 * Reference value for calculating interest rates, in case it applies. Displayed in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		referenceValue: FormControl<number | null | undefined>,

		/**
		 * Value including interest, in case it applies. Displayed in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreatePlaceOrderReturnOrdersPaymentDataTransactionsPaymentsFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersPaymentDataTransactionsPaymentsFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			bin: new FormControl<string | null | undefined>(undefined),
			installments: new FormControl<number | null | undefined>(undefined),
			paymentSystem: new FormControl<string | null | undefined>(undefined),
			referenceValue: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnOrdersRatesAndBenefitsData {

		/** List with rates and benefits identifiers. */
		rateAndBenefitsIdentifiers?: Array<string>;

		/** List with rates and benefits teasers. */
		teaser?: Array<string>;
	}
	export interface PlaceOrderReturnOrdersRatesAndBenefitsDataFormProperties {
	}
	export function CreatePlaceOrderReturnOrdersRatesAndBenefitsDataFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersRatesAndBenefitsDataFormProperties>({
		});

	}

	export interface PlaceOrderReturnOrdersSellers {

		/** Seller ID. */
		id?: string | null;

		/** Seller logo. */
		logo?: string | null;

		/** Seller name. */
		name?: string | null;
	}
	export interface PlaceOrderReturnOrdersSellersFormProperties {

		/** Seller ID. */
		id: FormControl<string | null | undefined>,

		/** Seller logo. */
		logo: FormControl<string | null | undefined>,

		/** Seller name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderReturnOrdersSellersFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersSellersFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnOrdersShippingData {

		/** Address information. */
		address?: PlaceOrderReturnOrdersShippingDataAddress;

		/** Array with information on the available addresses for the order. */
		PlaceOrderReturnOrdersShippingDataAvailableAddresses?: Array<PlaceOrderReturnOrdersShippingDataAvailableAddresses>;

		/** Array with logistics information. Each object in this array corresponds to an object in the `items` array, based on the respective `itemIndex`. */
		PlaceOrderReturnOrdersShippingDataLogisticsInfo?: Array<PlaceOrderReturnOrdersShippingDataLogisticsInfo>;

		/** Array with information on the selected addresses for the order. */
		PlaceOrderReturnOrdersShippingDataSelectedAddresses?: Array<PlaceOrderReturnOrdersShippingDataSelectedAddresses>;
	}
	export interface PlaceOrderReturnOrdersShippingDataFormProperties {
	}
	export function CreatePlaceOrderReturnOrdersShippingDataFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersShippingDataFormProperties>({
		});

	}

	export interface PlaceOrderReturnOrdersShippingDataAddress {

		/** Address ID. */
		addressId?: string | null;

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address, in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Indicates whether address is disposable. */
		isDisposable?: boolean | null;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal code. */
		postalCode?: string | null;

		/** Name of the person who is going to receive the order. */
		receiverName?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the shipping address. */
		street?: string | null;
	}
	export interface PlaceOrderReturnOrdersShippingDataAddressFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address, in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Indicates whether address is disposable. */
		isDisposable: FormControl<boolean | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the person who is going to receive the order. */
		receiverName: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the shipping address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderReturnOrdersShippingDataAddressFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersShippingDataAddressFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			isDisposable: new FormControl<boolean | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnOrdersShippingDataAvailableAddresses {

		/** Address ID. */
		addressId?: string | null;

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address, in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Indicates whether address is disposable. */
		isDisposable?: boolean | null;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal code. */
		postalCode?: string | null;

		/** Name of the person who is going to receive the order. */
		receiverName?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the shipping address. */
		street?: string | null;
	}
	export interface PlaceOrderReturnOrdersShippingDataAvailableAddressesFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address, in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Indicates whether address is disposable. */
		isDisposable: FormControl<boolean | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the person who is going to receive the order. */
		receiverName: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the shipping address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderReturnOrdersShippingDataAvailableAddressesFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersShippingDataAvailableAddressesFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			isDisposable: new FormControl<boolean | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnOrdersShippingDataLogisticsInfo {

		/** Address ID. */
		addressId?: string | null;

		/** List of available delivery channels. */
		PlaceOrderReturnOrdersShippingDataLogisticsInfoDeliveryChannels?: Array<PlaceOrderReturnOrdersShippingDataLogisticsInfoDeliveryChannels>;

		/** Item ID. */
		itemId?: string | null;

		/**
		 * Index corresponding to the position of the object in the `items` array.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex?: number | null;

		/** Delivery channel selected by the customer. */
		selectedDeliveryChannel?: string | null;

		/** SLA selected by the customer. */
		selectedSla?: string | null;

		/** List of countries that the item may be shipped to. */
		shipsTo?: Array<string>;

		/** Information on available SLAs. */
		PlaceOrderReturnOrdersShippingDataLogisticsInfoSlas?: Array<PlaceOrderReturnOrdersShippingDataLogisticsInfoSlas>;
	}
	export interface PlaceOrderReturnOrdersShippingDataLogisticsInfoFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Item ID. */
		itemId: FormControl<string | null | undefined>,

		/**
		 * Index corresponding to the position of the object in the `items` array.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		itemIndex: FormControl<number | null | undefined>,

		/** Delivery channel selected by the customer. */
		selectedDeliveryChannel: FormControl<string | null | undefined>,

		/** SLA selected by the customer. */
		selectedSla: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderReturnOrdersShippingDataLogisticsInfoFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersShippingDataLogisticsInfoFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			itemId: new FormControl<string | null | undefined>(undefined),
			itemIndex: new FormControl<number | null | undefined>(undefined),
			selectedDeliveryChannel: new FormControl<string | null | undefined>(undefined),
			selectedSla: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnOrdersShippingDataLogisticsInfoDeliveryChannels {

		/** Delivery channel ID. */
		id?: string | null;
	}
	export interface PlaceOrderReturnOrdersShippingDataLogisticsInfoDeliveryChannelsFormProperties {

		/** Delivery channel ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderReturnOrdersShippingDataLogisticsInfoDeliveryChannelsFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersShippingDataLogisticsInfoDeliveryChannelsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnOrdersShippingDataLogisticsInfoSlas {

		/** Delivery channel. */
		deliveryChannel?: string | null;

		/** Information on each delivery ID. */
		PlaceOrderReturnOrdersShippingDataLogisticsInfoSlasDeliveryIds?: Array<PlaceOrderReturnOrdersShippingDataLogisticsInfoSlasDeliveryIds>;

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
		pickupStoreInfo?: PlaceOrderReturnOrdersShippingDataLogisticsInfoSlasPickupStoreInfo;

		/** Polygon name. */
		polygonName?: string | null;

		/**
		 * Price in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price?: number | null;

		/** Shipping estimate. For instance, Three business days will be represented `3bd`. */
		shippingEstimate?: string | null;

		/** Shipping estimate date. */
		shippingEstimateDate?: string | null;

		/**
		 * Tax in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax?: number | null;

		/** Transit time. For instance, "three business days" is represented `3bd`. */
		transitTime?: string | null;
	}
	export interface PlaceOrderReturnOrdersShippingDataLogisticsInfoSlasFormProperties {

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

		/** Shipping estimate. For instance, Three business days will be represented `3bd`. */
		shippingEstimate: FormControl<string | null | undefined>,

		/** Shipping estimate date. */
		shippingEstimateDate: FormControl<string | null | undefined>,

		/**
		 * Tax in cents.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tax: FormControl<number | null | undefined>,

		/** Transit time. For instance, "three business days" is represented `3bd`. */
		transitTime: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderReturnOrdersShippingDataLogisticsInfoSlasFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersShippingDataLogisticsInfoSlasFormProperties>({
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

	export interface PlaceOrderReturnOrdersShippingDataLogisticsInfoSlasDeliveryIds {

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
	export interface PlaceOrderReturnOrdersShippingDataLogisticsInfoSlasDeliveryIdsFormProperties {

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
	export function CreatePlaceOrderReturnOrdersShippingDataLogisticsInfoSlasDeliveryIdsFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersShippingDataLogisticsInfoSlasDeliveryIdsFormProperties>({
			courierId: new FormControl<string | null | undefined>(undefined),
			courierName: new FormControl<string | null | undefined>(undefined),
			dockId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			warehouseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnOrdersShippingDataLogisticsInfoSlasPickupStoreInfo {

		/** Additional information. */
		additionalInfo?: string | null;

		/** Address information. */
		address?: PlaceOrderReturnOrdersShippingDataLogisticsInfoSlasPickupStoreInfoAddress;

		/** Corresponding dock ID. */
		dockId?: string | null;

		/** Friendly name. */
		friendlyName?: string | null;

		/** Indicates whether it is the pickup store. */
		isPickupStore?: boolean | null;
	}
	export interface PlaceOrderReturnOrdersShippingDataLogisticsInfoSlasPickupStoreInfoFormProperties {

		/** Additional information. */
		additionalInfo: FormControl<string | null | undefined>,

		/** Corresponding dock ID. */
		dockId: FormControl<string | null | undefined>,

		/** Friendly name. */
		friendlyName: FormControl<string | null | undefined>,

		/** Indicates whether it is the pickup store. */
		isPickupStore: FormControl<boolean | null | undefined>,
	}
	export function CreatePlaceOrderReturnOrdersShippingDataLogisticsInfoSlasPickupStoreInfoFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersShippingDataLogisticsInfoSlasPickupStoreInfoFormProperties>({
			additionalInfo: new FormControl<string | null | undefined>(undefined),
			dockId: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			isPickupStore: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnOrdersShippingDataLogisticsInfoSlasPickupStoreInfoAddress {

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address, in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal code. */
		postalCode?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the shipping address. */
		street?: string | null;
	}
	export interface PlaceOrderReturnOrdersShippingDataLogisticsInfoSlasPickupStoreInfoAddressFormProperties {

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address, in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the shipping address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderReturnOrdersShippingDataLogisticsInfoSlasPickupStoreInfoAddressFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersShippingDataLogisticsInfoSlasPickupStoreInfoAddressFormProperties>({
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnOrdersShippingDataSelectedAddresses {

		/** Address ID. */
		addressId?: string | null;

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType?: string | null;

		/** City of the shipping address. */
		city?: string | null;

		/** Complement to the shipping address, in case it applies. */
		complement?: string | null;

		/** Three letter ISO code of the country of the shipping address. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Indicates whether address is disposable. */
		isDisposable?: boolean | null;

		/** Neighborhood of the shipping address. */
		neighborhood?: string | null;

		/** Number of the building, house or apartment in the shipping address. */
		number?: string | null;

		/** Postal code. */
		postalCode?: string | null;

		/** Name of the person who is going to receive the order. */
		receiverName?: string | null;

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference?: string | null;

		/** State of the shipping address. */
		state?: string | null;

		/** Street of the shipping address. */
		street?: string | null;
	}
	export interface PlaceOrderReturnOrdersShippingDataSelectedAddressesFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Type of address. For example, `Residential` or `Pickup`. */
		addressType: FormControl<string | null | undefined>,

		/** City of the shipping address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the shipping address, in case it applies. */
		complement: FormControl<string | null | undefined>,

		/** Three letter ISO code of the country of the shipping address. */
		country: FormControl<string | null | undefined>,

		/** Indicates whether address is disposable. */
		isDisposable: FormControl<boolean | null | undefined>,

		/** Neighborhood of the shipping address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the building, house or apartment in the shipping address. */
		number: FormControl<string | null | undefined>,

		/** Postal code. */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the person who is going to receive the order. */
		receiverName: FormControl<string | null | undefined>,

		/** Complement that might help locate the shipping address more precisely in case of delivery. */
		reference: FormControl<string | null | undefined>,

		/** State of the shipping address. */
		state: FormControl<string | null | undefined>,

		/** Street of the shipping address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderReturnOrdersShippingDataSelectedAddressesFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersShippingDataSelectedAddressesFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			isDisposable: new FormControl<boolean | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnOrdersTotals {

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
	export interface PlaceOrderReturnOrdersTotalsFormProperties {

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
	export function CreatePlaceOrderReturnOrdersTotalsFormGroup() {
		return new FormGroup<PlaceOrderReturnOrdersTotalsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnTransactionData {

		/** Template of the gateway callback path, which may later be used to send information about the transaction. */
		gatewayCallbackTemplatePath?: string | null;

		/** Information on each merchant transaction. */
		PlaceOrderReturnTransactionDataMerchantTransactions?: Array<PlaceOrderReturnTransactionDataMerchantTransactions>;

		/** Receiver URI. */
		receiverUri?: string | null;
	}
	export interface PlaceOrderReturnTransactionDataFormProperties {

		/** Template of the gateway callback path, which may later be used to send information about the transaction. */
		gatewayCallbackTemplatePath: FormControl<string | null | undefined>,

		/** Receiver URI. */
		receiverUri: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderReturnTransactionDataFormGroup() {
		return new FormGroup<PlaceOrderReturnTransactionDataFormProperties>({
			gatewayCallbackTemplatePath: new FormControl<string | null | undefined>(undefined),
			receiverUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnTransactionDataMerchantTransactions {

		/** ID of the seller. */
		id?: string | null;

		/** Name of the merchant responsible for the sale. */
		merchantName?: string | null;

		/** Information on each payment pertinent to the transaction. */
		PlaceOrderReturnTransactionDataMerchantTransactionsPayments?: Array<PlaceOrderReturnTransactionDataMerchantTransactionsPayments>;

		/** ID of the transaction in the platform. */
		transactionId?: string | null;
	}
	export interface PlaceOrderReturnTransactionDataMerchantTransactionsFormProperties {

		/** ID of the seller. */
		id: FormControl<string | null | undefined>,

		/** Name of the merchant responsible for the sale. */
		merchantName: FormControl<string | null | undefined>,

		/** ID of the transaction in the platform. */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreatePlaceOrderReturnTransactionDataMerchantTransactionsFormGroup() {
		return new FormGroup<PlaceOrderReturnTransactionDataMerchantTransactionsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			merchantName: new FormControl<string | null | undefined>(undefined),
			transactionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlaceOrderReturnTransactionDataMerchantTransactionsPayments {

		/** Account ID. */
		accountId?: string | null;

		/** Payment bin. */
		bin?: string | null;

		/** Gift card ID. */
		giftCardId?: string | null;

		/** Gift card provider. */
		giftCardProvider?: string | null;

		/** Gift card redemption code. */
		giftCardRedemptionCode?: string | null;

		/** Payment system. */
		paymentSystem?: string | null;

		/**
		 * Reference value over which interests may be applied.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		referenceValue?: number | null;

		/** Token ID. */
		tokenId?: string | null;

		/**
		 * Total value to be paid in this payment.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value?: number | null;
	}
	export interface PlaceOrderReturnTransactionDataMerchantTransactionsPaymentsFormProperties {

		/** Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** Payment bin. */
		bin: FormControl<string | null | undefined>,

		/** Gift card ID. */
		giftCardId: FormControl<string | null | undefined>,

		/** Gift card provider. */
		giftCardProvider: FormControl<string | null | undefined>,

		/** Gift card redemption code. */
		giftCardRedemptionCode: FormControl<string | null | undefined>,

		/** Payment system. */
		paymentSystem: FormControl<string | null | undefined>,

		/**
		 * Reference value over which interests may be applied.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		referenceValue: FormControl<number | null | undefined>,

		/** Token ID. */
		tokenId: FormControl<string | null | undefined>,

		/**
		 * Total value to be paid in this payment.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreatePlaceOrderReturnTransactionDataMerchantTransactionsPaymentsFormGroup() {
		return new FormGroup<PlaceOrderReturnTransactionDataMerchantTransactionsPaymentsFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			bin: new FormControl<string | null | undefined>(undefined),
			giftCardId: new FormControl<string | null | undefined>(undefined),
			giftCardProvider: new FormControl<string | null | undefined>(undefined),
			giftCardRedemptionCode: new FormControl<string | null | undefined>(undefined),
			paymentSystem: new FormControl<string | null | undefined>(undefined),
			referenceValue: new FormControl<number | null | undefined>(undefined),
			tokenId: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetClientProfileByEmailReturn {

		/** Available accounts. */
		availableAccounts?: Array<string>;

		/** Information on each available address. */
		GetClientProfileByEmailReturnAvailableAddresses?: Array<GetClientProfileByEmailReturnAvailableAddresses>;

		/** Indicates whether customer profile is complete. */
		isComplete?: boolean | null;

		/** Profile provider. */
		profileProvider?: string | null;

		/** Customer profile information. */
		userProfile?: GetClientProfileByEmailReturnUserProfile;

		/** Unique ID associated with the customer profile. */
		userProfileId?: string | null;
	}
	export interface GetClientProfileByEmailReturnFormProperties {

		/** Indicates whether customer profile is complete. */
		isComplete: FormControl<boolean | null | undefined>,

		/** Profile provider. */
		profileProvider: FormControl<string | null | undefined>,

		/** Unique ID associated with the customer profile. */
		userProfileId: FormControl<string | null | undefined>,
	}
	export function CreateGetClientProfileByEmailReturnFormGroup() {
		return new FormGroup<GetClientProfileByEmailReturnFormProperties>({
			isComplete: new FormControl<boolean | null | undefined>(undefined),
			profileProvider: new FormControl<string | null | undefined>(undefined),
			userProfileId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetClientProfileByEmailReturnAvailableAddresses {

		/** Address ID. */
		addressId?: string | null;

		/** Address type. */
		addressType?: string | null;

		/** City of the address. */
		city?: string | null;

		/** Complement to the address. */
		complement?: string | null;

		/** Country of the address. ISO three-letter code. */
		country?: string | null;

		/** Array containing two floats with geocoordinates, first longitude, then latitude. */
		geoCoordinates?: Array<number>;

		/** Indicates whether address is disposable. */
		isDisposable?: boolean | null;

		/** Neighborhood of the address. */
		neighborhood?: string | null;

		/** Number of the address. */
		number?: string | null;

		/** Name of the receiver. */
		receiverName?: string | null;

		/** Reference that may help in the location of the address. */
		reference?: string | null;

		/** State of the address. */
		state?: string | null;

		/** Street of the address. */
		street?: string | null;
	}
	export interface GetClientProfileByEmailReturnAvailableAddressesFormProperties {

		/** Address ID. */
		addressId: FormControl<string | null | undefined>,

		/** Address type. */
		addressType: FormControl<string | null | undefined>,

		/** City of the address. */
		city: FormControl<string | null | undefined>,

		/** Complement to the address. */
		complement: FormControl<string | null | undefined>,

		/** Country of the address. ISO three-letter code. */
		country: FormControl<string | null | undefined>,

		/** Indicates whether address is disposable. */
		isDisposable: FormControl<boolean | null | undefined>,

		/** Neighborhood of the address. */
		neighborhood: FormControl<string | null | undefined>,

		/** Number of the address. */
		number: FormControl<string | null | undefined>,

		/** Name of the receiver. */
		receiverName: FormControl<string | null | undefined>,

		/** Reference that may help in the location of the address. */
		reference: FormControl<string | null | undefined>,

		/** State of the address. */
		state: FormControl<string | null | undefined>,

		/** Street of the address. */
		street: FormControl<string | null | undefined>,
	}
	export function CreateGetClientProfileByEmailReturnAvailableAddressesFormGroup() {
		return new FormGroup<GetClientProfileByEmailReturnAvailableAddressesFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined),
			addressType: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			complement: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			isDisposable: new FormControl<boolean | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			receiverName: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetClientProfileByEmailReturnUserProfile {

		/** Document. Used for corporate clients. */
		corporateDocument?: string | null;

		/** Name of the company. Used for corporate clients. */
		corporateName?: string | null;

		/** Telephone number. Used for corporate clients. */
		corporatePhone?: string | null;

		/** Customer class. */
		customerClass?: string | null;

		/** Document. */
		document?: string | null;

		/** Document type. */
		documentType?: string | null;

		/** Email address. */
		email?: string | null;

		/** First name. */
		firstName?: string | null;

		/** Indicates whether client is corporate. */
		isCorporate?: boolean | null;

		/** Last name. */
		lastName?: string | null;

		/** Telephone number. */
		phone?: string | null;

		/** Profile complete when loading. */
		profileCompleteOnLoading?: string | null;

		/** Profile error when loading. */
		profileErrorOnLoading?: string | null;

		/** State inscription. Used for corporate clients. */
		stateInscription?: string | null;

		/** Trade name. Used for corporate clients. */
		tradeName?: string | null;
	}
	export interface GetClientProfileByEmailReturnUserProfileFormProperties {

		/** Document. Used for corporate clients. */
		corporateDocument: FormControl<string | null | undefined>,

		/** Name of the company. Used for corporate clients. */
		corporateName: FormControl<string | null | undefined>,

		/** Telephone number. Used for corporate clients. */
		corporatePhone: FormControl<string | null | undefined>,

		/** Customer class. */
		customerClass: FormControl<string | null | undefined>,

		/** Document. */
		document: FormControl<string | null | undefined>,

		/** Document type. */
		documentType: FormControl<string | null | undefined>,

		/** Email address. */
		email: FormControl<string | null | undefined>,

		/** First name. */
		firstName: FormControl<string | null | undefined>,

		/** Indicates whether client is corporate. */
		isCorporate: FormControl<boolean | null | undefined>,

		/** Last name. */
		lastName: FormControl<string | null | undefined>,

		/** Telephone number. */
		phone: FormControl<string | null | undefined>,

		/** Profile complete when loading. */
		profileCompleteOnLoading: FormControl<string | null | undefined>,

		/** Profile error when loading. */
		profileErrorOnLoading: FormControl<string | null | undefined>,

		/** State inscription. Used for corporate clients. */
		stateInscription: FormControl<string | null | undefined>,

		/** Trade name. Used for corporate clients. */
		tradeName: FormControl<string | null | undefined>,
	}
	export function CreateGetClientProfileByEmailReturnUserProfileFormGroup() {
		return new FormGroup<GetClientProfileByEmailReturnUserProfileFormProperties>({
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
			profileCompleteOnLoading: new FormControl<string | null | undefined>(undefined),
			profileErrorOnLoading: new FormControl<string | null | undefined>(undefined),
			stateInscription: new FormControl<string | null | undefined>(undefined),
			tradeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSellersByRegionReturn {

		/** Region ID. */
		id?: string | null;

		/** Array with information on each seller retrieved for the given region. */
		GetSellersByRegionReturnSellers?: Array<GetSellersByRegionReturnSellers>;
	}
	export interface GetSellersByRegionReturnFormProperties {

		/** Region ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGetSellersByRegionReturnFormGroup() {
		return new FormGroup<GetSellersByRegionReturnFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSellersByRegionReturnSellers {

		/** Seller ID. */
		id?: string | null;

		/** Seller logo. */
		logo?: string | null;

		/** Seller name. */
		name?: string | null;
	}
	export interface GetSellersByRegionReturnSellersFormProperties {

		/** Seller ID. */
		id: FormControl<string | null | undefined>,

		/** Seller logo. */
		logo: FormControl<string | null | undefined>,

		/** Seller name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetSellersByRegionReturnSellersFormGroup() {
		return new FormGroup<GetSellersByRegionReturnSellersFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

}

