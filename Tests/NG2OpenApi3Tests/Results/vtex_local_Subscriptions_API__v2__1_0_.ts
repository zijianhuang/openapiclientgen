import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Additemsubscription_groupIdRequest {

		/** Required */
		endpoint: string;

		/** Required */
		priceAtSubscriptionDate: number;

		/** Required */
		quantity: number;

		/** Required */
		sellingPrice: number;

		/** Required */
		sku: Sku;
	}
	export interface Additemsubscription_groupIdRequestFormProperties {

		/** Required */
		endpoint: FormControl<string | null | undefined>,

		/** Required */
		priceAtSubscriptionDate: FormControl<number | null | undefined>,

		/** Required */
		quantity: FormControl<number | null | undefined>,

		/** Required */
		sellingPrice: FormControl<number | null | undefined>,
	}
	export function CreateAdditemsubscription_groupIdRequestFormGroup() {
		return new FormGroup<Additemsubscription_groupIdRequestFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			priceAtSubscriptionDate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sellingPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Sku {

		/** Required */
		detailUrl: string;

		/** Required */
		id: string;

		/** Required */
		imageUrl: string;

		/** Required */
		name: string;

		/** Required */
		nameComplete: string;

		/** Required */
		productName: string;
	}
	export interface SkuFormProperties {

		/** Required */
		detailUrl: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		imageUrl: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		nameComplete: FormControl<string | null | undefined>,

		/** Required */
		productName: FormControl<string | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			detailUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nameComplete: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AdditionalComponent {

		/** Required */
		longName: string;

		/** Required */
		shortName: string;

		/** Required */
		types: Array<string>;
	}
	export interface AdditionalComponentFormProperties {

		/** Required */
		longName: FormControl<string | null | undefined>,

		/** Required */
		shortName: FormControl<string | null | undefined>,
	}
	export function CreateAdditionalComponentFormGroup() {
		return new FormGroup<AdditionalComponentFormProperties>({
			longName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shortName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Frequency {

		/** Required */
		interval: number;

		/** Required */
		periodicity: string;
	}
	export interface FrequencyFormProperties {

		/** Required */
		interval: FormControl<number | null | undefined>,

		/** Required */
		periodicity: FormControl<string | null | undefined>,
	}
	export function CreateFrequencyFormGroup() {
		return new FormGroup<FrequencyFormProperties>({
			interval: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			periodicity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InsertAddressesbygroupIdRequest {

		/** Required */
		additionalComponents: Array<AdditionalComponent>;

		/** Required */
		addressId: string;

		/** Required */
		addressName: string;

		/** Required */
		addressType: string;

		/** Required */
		city: string;

		/** Required */
		complement: string;

		/** Required */
		country: string;

		/** Required */
		formattedAddress: string;

		/** Required */
		geoCoordinate: Array<number>;

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
	export interface InsertAddressesbygroupIdRequestFormProperties {

		/** Required */
		addressId: FormControl<string | null | undefined>,

		/** Required */
		addressName: FormControl<string | null | undefined>,

		/** Required */
		addressType: FormControl<string | null | undefined>,

		/** Required */
		city: FormControl<string | null | undefined>,

		/** Required */
		complement: FormControl<string | null | undefined>,

		/** Required */
		country: FormControl<string | null | undefined>,

		/** Required */
		formattedAddress: FormControl<string | null | undefined>,

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
	export function CreateInsertAddressesbygroupIdRequestFormGroup() {
		return new FormGroup<InsertAddressesbygroupIdRequestFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			addressName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			addressType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			complement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			formattedAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			neighborhood: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			receiverName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			street: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InsertAddressesforSubscriptionRequest {

		/** Required */
		additionalComponents: string;

		/** Required */
		addressId: string;

		/** Required */
		addressName: string;

		/** Required */
		addressType: string;

		/** Required */
		city: string;

		/** Required */
		complement: string;

		/** Required */
		country: string;

		/** Required */
		formattedAddress: string;

		/** Required */
		geoCoordinate: string;

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
	export interface InsertAddressesforSubscriptionRequestFormProperties {

		/** Required */
		additionalComponents: FormControl<string | null | undefined>,

		/** Required */
		addressId: FormControl<string | null | undefined>,

		/** Required */
		addressName: FormControl<string | null | undefined>,

		/** Required */
		addressType: FormControl<string | null | undefined>,

		/** Required */
		city: FormControl<string | null | undefined>,

		/** Required */
		complement: FormControl<string | null | undefined>,

		/** Required */
		country: FormControl<string | null | undefined>,

		/** Required */
		formattedAddress: FormControl<string | null | undefined>,

		/** Required */
		geoCoordinate: FormControl<string | null | undefined>,

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
	export function CreateInsertAddressesforSubscriptionRequestFormGroup() {
		return new FormGroup<InsertAddressesforSubscriptionRequestFormProperties>({
			additionalComponents: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			addressId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			addressName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			addressType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			complement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			formattedAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			geoCoordinate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			neighborhood: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			receiverName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			street: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Item {

		/** Required */
		endpoint: string;

		/** Required */
		priceAtSubscriptionDate: number;

		/** Required */
		quantity: number;

		/** Required */
		sellingPrice: number;

		/** Required */
		sku: Sku;
	}
	export interface ItemFormProperties {

		/** Required */
		endpoint: FormControl<string | null | undefined>,

		/** Required */
		priceAtSubscriptionDate: FormControl<number | null | undefined>,

		/** Required */
		quantity: FormControl<number | null | undefined>,

		/** Required */
		sellingPrice: FormControl<number | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			priceAtSubscriptionDate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sellingPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Item1 {

		/** Required */
		SubscriptionId: string;

		/** Required */
		createdAt: string;

		/** Required */
		cycleCount: number;

		/** Required */
		endpoint: string;

		/** Required */
		isSkipped: boolean;

		/** Required */
		lastUpdate: string;

		/** Required */
		metadata: Array<Metadatum>;

		/** Required */
		originalItemIndex: number;

		/** Required */
		originalOrderId: string;

		/** Required */
		priceAtSubscriptionDate: number;

		/** Required */
		quantity: number;

		/** Required */
		sellingPrice: number;

		/** Required */
		sku: Sku;

		/** Required */
		status: string;
	}
	export interface Item1FormProperties {

		/** Required */
		SubscriptionId: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<string | null | undefined>,

		/** Required */
		cycleCount: FormControl<number | null | undefined>,

		/** Required */
		endpoint: FormControl<string | null | undefined>,

		/** Required */
		isSkipped: FormControl<boolean | null | undefined>,

		/** Required */
		lastUpdate: FormControl<string | null | undefined>,

		/** Required */
		originalItemIndex: FormControl<number | null | undefined>,

		/** Required */
		originalOrderId: FormControl<string | null | undefined>,

		/** Required */
		priceAtSubscriptionDate: FormControl<number | null | undefined>,

		/** Required */
		quantity: FormControl<number | null | undefined>,

		/** Required */
		sellingPrice: FormControl<number | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,
	}
	export function CreateItem1FormGroup() {
		return new FormGroup<Item1FormProperties>({
			SubscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cycleCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isSkipped: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			lastUpdate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			originalItemIndex: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			originalOrderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			priceAtSubscriptionDate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sellingPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Metadatum {

		/** Required */
		name: string;

		/** Required */
		properties: Properties;
	}
	export interface MetadatumFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMetadatumFormGroup() {
		return new FormGroup<MetadatumFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Properties {

		/** Required */
		additionalProp1: string;

		/** Required */
		additionalProp2: string;

		/** Required */
		additionalProp3: string;
	}
	export interface PropertiesFormProperties {

		/** Required */
		additionalProp1: FormControl<string | null | undefined>,

		/** Required */
		additionalProp2: FormControl<string | null | undefined>,

		/** Required */
		additionalProp3: FormControl<string | null | undefined>,
	}
	export function CreatePropertiesFormGroup() {
		return new FormGroup<PropertiesFormProperties>({
			additionalProp1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			additionalProp2: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			additionalProp3: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PaymentMethod {

		/** Required */
		paymentAccountId: string;

		/** Required */
		paymentSystem: string;
	}
	export interface PaymentMethodFormProperties {

		/** Required */
		paymentAccountId: FormControl<string | null | undefined>,

		/** Required */
		paymentSystem: FormControl<string | null | undefined>,
	}
	export function CreatePaymentMethodFormGroup() {
		return new FormGroup<PaymentMethodFormProperties>({
			paymentAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentSystem: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Plan {

		/** Required */
		frequency: Frequency;

		/** Required */
		type: string;

		/** Required */
		validity: Validity;
	}
	export interface PlanFormProperties {

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePlanFormGroup() {
		return new FormGroup<PlanFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Validity {

		/** Required */
		begin: string;

		/** Required */
		end: string;
	}
	export interface ValidityFormProperties {

		/** Required */
		begin: FormControl<string | null | undefined>,

		/** Required */
		end: FormControl<string | null | undefined>,
	}
	export function CreateValidityFormGroup() {
		return new FormGroup<ValidityFormProperties>({
			begin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			end: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PurchaseSettings {

		/** Required */
		currencyCode: string;

		/** Required */
		paymentMethod: PaymentMethod;

		/** Required */
		purchaseDay: string;

		/** Required */
		salesChannel: string;

		/** Required */
		selectedSla: string;

		/** Required */
		seller: string;
	}
	export interface PurchaseSettingsFormProperties {

		/** Required */
		currencyCode: FormControl<string | null | undefined>,

		/** Required */
		purchaseDay: FormControl<string | null | undefined>,

		/** Required */
		salesChannel: FormControl<string | null | undefined>,

		/** Required */
		selectedSla: FormControl<string | null | undefined>,

		/** Required */
		seller: FormControl<string | null | undefined>,
	}
	export function CreatePurchaseSettingsFormGroup() {
		return new FormGroup<PurchaseSettingsFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			purchaseDay: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			salesChannel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			selectedSla: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			seller: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ShippingAddress {

		/** Required */
		additionalComponents: Array<AdditionalComponent>;

		/** Required */
		addressId: string;

		/** Required */
		addressName: string;

		/** Required */
		addressType: string;

		/** Required */
		city: string;

		/** Required */
		complement: string;

		/** Required */
		country: string;

		/** Required */
		formattedAddress: string;

		/** Required */
		geoCoordinate: Array<number>;

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
	export interface ShippingAddressFormProperties {

		/** Required */
		addressId: FormControl<string | null | undefined>,

		/** Required */
		addressName: FormControl<string | null | undefined>,

		/** Required */
		addressType: FormControl<string | null | undefined>,

		/** Required */
		city: FormControl<string | null | undefined>,

		/** Required */
		complement: FormControl<string | null | undefined>,

		/** Required */
		country: FormControl<string | null | undefined>,

		/** Required */
		formattedAddress: FormControl<string | null | undefined>,

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
	export function CreateShippingAddressFormGroup() {
		return new FormGroup<ShippingAddressFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			addressName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			addressType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			complement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			formattedAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			neighborhood: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			receiverName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			street: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSubscriptionbygroupIdRequest {

		/** Required */
		isSkipped: boolean;

		/** Required */
		item: Array<Item1>;

		/** Required */
		metadata: Array<Metadatum>;

		/** Required */
		plan: Plan;

		/** Required */
		purchaseSettings: PurchaseSettings;

		/** Required */
		shippingAddress: ShippingAddress;

		/** Required */
		status: string;
	}
	export interface UpdateSubscriptionbygroupIdRequestFormProperties {

		/** Required */
		isSkipped: FormControl<boolean | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSubscriptionbygroupIdRequestFormGroup() {
		return new FormGroup<UpdateSubscriptionbygroupIdRequestFormProperties>({
			isSkipped: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSubscriptionsbySubscriptionIdRequest {

		/** Required */
		isSkipped: boolean;

		/** Required */
		item: Item;

		/** Required */
		metadata: Array<Metadatum>;

		/** Required */
		plan: Plan;

		/** Required */
		purchaseSettings: PurchaseSettings;

		/** Required */
		shippingAddress: ShippingAddress;

		/** Required */
		status: string;
	}
	export interface UpdateSubscriptionsbySubscriptionIdRequestFormProperties {

		/** Required */
		isSkipped: FormControl<boolean | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSubscriptionsbySubscriptionIdRequestFormGroup() {
		return new FormGroup<UpdateSubscriptionsbySubscriptionIdRequestFormProperties>({
			isSkipped: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Subscriptions settings */
	export interface Settings {

		/**
		 * Default delivery method.
		 * Required
		 */
		defaultSla: string;

		/**
		 * Array containing delivery channels.
		 * Required
		 */
		deliveryChannels: Array<string>;

		/**
		 * Indicates the time future subscription orders will be generated.
		 * Required
		 */
		executionHourInUtc: number;

		/**
		 * Defines whether or not multiple installments are enabled when a subscription is created.
		 * Required
		 */
		isMultipleInstallmentsEnabledOnCreation: boolean;

		/**
		 * Defines whether or not multiple installments are enabled when a subscription is updated.
		 * Required
		 */
		isMultipleInstallmentsEnabledOnUpdate: boolean;

		/**
		 * Indicates whether or not Subscriptions V3 is enabled.
		 * Required
		 */
		isUsingV3: boolean;

		/**
		 * When set to `true`, this property enables manual price configuration in subscription items. This is valid for all existing subscriptions, provided that there is a manual price configured and that `isUsingV3` is `true`.
		 * Required
		 */
		manualPriceAllowed: boolean;

		/**
		 * Indicates whether or not the account is in the migration process to Subscriptions V3.
		 * Required
		 */
		onMigrationProcess: boolean;

		/**
		 * When filled, this field passes along the `customData` infomration in the order to the future recurrent subscription orders.
		 * Required
		 */
		orderCustomDataAppId: string;

		/**
		 * Defines whether or not the expiration of subscriptions can be postponed.
		 * Required
		 */
		postponeExpiration: boolean;

		/**
		 * Defines whether or not the subscription order IDs will be randomly generated.
		 * Required
		 */
		randomIdGeneration: boolean;

		/**
		 * Delivery method.
		 * Required
		 */
		slaOption: string;

		/**
		 * When set to `true`, this property enables using the manual price for each item from the original subscription order. This is only valid for new subscriptions, created from the moment this configuration is enabled. For this to work, it is mandatory that the `manualPriceAllowed` property is set to `true` and that `isUsingV3` is `true`.
		 * Required
		 */
		useItemPriceFromOriginalOrder: boolean;

		/**
		 * Workflow version.
		 * Required
		 */
		workflowVersion: string;
	}

	/** Subscriptions settings */
	export interface SettingsFormProperties {

		/**
		 * Default delivery method.
		 * Required
		 */
		defaultSla: FormControl<string | null | undefined>,

		/**
		 * Indicates the time future subscription orders will be generated.
		 * Required
		 */
		executionHourInUtc: FormControl<number | null | undefined>,

		/**
		 * Defines whether or not multiple installments are enabled when a subscription is created.
		 * Required
		 */
		isMultipleInstallmentsEnabledOnCreation: FormControl<boolean | null | undefined>,

		/**
		 * Defines whether or not multiple installments are enabled when a subscription is updated.
		 * Required
		 */
		isMultipleInstallmentsEnabledOnUpdate: FormControl<boolean | null | undefined>,

		/**
		 * Indicates whether or not Subscriptions V3 is enabled.
		 * Required
		 */
		isUsingV3: FormControl<boolean | null | undefined>,

		/**
		 * When set to `true`, this property enables manual price configuration in subscription items. This is valid for all existing subscriptions, provided that there is a manual price configured and that `isUsingV3` is `true`.
		 * Required
		 */
		manualPriceAllowed: FormControl<boolean | null | undefined>,

		/**
		 * Indicates whether or not the account is in the migration process to Subscriptions V3.
		 * Required
		 */
		onMigrationProcess: FormControl<boolean | null | undefined>,

		/**
		 * When filled, this field passes along the `customData` infomration in the order to the future recurrent subscription orders.
		 * Required
		 */
		orderCustomDataAppId: FormControl<string | null | undefined>,

		/**
		 * Defines whether or not the expiration of subscriptions can be postponed.
		 * Required
		 */
		postponeExpiration: FormControl<boolean | null | undefined>,

		/**
		 * Defines whether or not the subscription order IDs will be randomly generated.
		 * Required
		 */
		randomIdGeneration: FormControl<boolean | null | undefined>,

		/**
		 * Delivery method.
		 * Required
		 */
		slaOption: FormControl<string | null | undefined>,

		/**
		 * When set to `true`, this property enables using the manual price for each item from the original subscription order. This is only valid for new subscriptions, created from the moment this configuration is enabled. For this to work, it is mandatory that the `manualPriceAllowed` property is set to `true` and that `isUsingV3` is `true`.
		 * Required
		 */
		useItemPriceFromOriginalOrder: FormControl<boolean | null | undefined>,

		/**
		 * Workflow version.
		 * Required
		 */
		workflowVersion: FormControl<string | null | undefined>,
	}
	export function CreateSettingsFormGroup() {
		return new FormGroup<SettingsFormProperties>({
			defaultSla: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			executionHourInUtc: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isMultipleInstallmentsEnabledOnCreation: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isMultipleInstallmentsEnabledOnUpdate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isUsingV3: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			manualPriceAllowed: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			onMigrationProcess: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			orderCustomDataAppId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postponeExpiration: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			randomIdGeneration: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			slaOption: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useItemPriceFromOriginalOrder: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			workflowVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get report status by ID
		 * Retrieves the Subscription's report status, filtering by its reportId.
		 * Get report/reportStatus/{reportId}
		 * @param {string} reportId Report ID.
		 * @return {void} OK
		 */
		GetreportstatusbyID(reportId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'report/reportStatus/' + (reportId == null ? '' : encodeURIComponent(reportId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve Subscription report by date
		 * Retrieves a report with the subscriptions created at the date interval requested
		 * Get report/subscriptionsByDate
		 * @param {string} requesterEmail Email that the report will be sent to
		 * @param {number} beginDate begin date of report interval, use format yyyyMMdd
		 * @param {number} endDate end date of report interval, use format yyyyMMdd
		 * @return {void} OK
		 */
		Requestreportbydate(requesterEmail: string, beginDate: number, endDate: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'report/subscriptionsByDate?requesterEmail=' + (requesterEmail == null ? '' : encodeURIComponent(requesterEmail)) + '&beginDate=' + beginDate + '&endDate=' + endDate, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve Subscription report by Status
		 * Retrieves Subscriptions' reports, filtering by status. The report will be sent by email, to the address inserted in the API's path.
		 * Get report/subscriptionsByStatus
		 * @param {string} requesterEmail Email that the report will be sent to
		 * @param {number} status Binary OR of the following status: 1 - ACTIVE; 2 - PAUSED; 4 - CANCELED; 8 - EXPIRED
		 * @return {void} OK
		 */
		RequestreportbyStatus(requesterEmail: string, status: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'report/subscriptionsByStatus?requesterEmail=' + (requesterEmail == null ? '' : encodeURIComponent(requesterEmail)) + '&status=' + status, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve Subscription report by order date
		 * Retrieves a report regarding the Subscriptions created during the date interval of orders.
		 * Get report/subscriptionsOrderByDate
		 * @param {string} requesterEmail Email that the report will be sent to
		 * @param {number} beginDate begin date of report interval, use format yyyyMMdd
		 * @param {number} endDate end date of report interval, use format yyyyMMdd
		 * @return {void} OK
		 */
		Requestreportbyorderdate(requesterEmail: string, beginDate: number, endDate: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'report/subscriptionsOrderByDate?requesterEmail=' + (requesterEmail == null ? '' : encodeURIComponent(requesterEmail)) + '&beginDate=' + beginDate + '&endDate=' + endDate, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve Subscription report by schedule
		 * Retrieves a report regarding the Subscriptions scheduled to execute at the date interval requested
		 * Get report/subscriptionsScheduled
		 * @param {string} requesterEmail Email that the report will be sent to
		 * @param {number} beginDate begin date of report interval, use format yyyyMMdd
		 * @param {number} endDate end date of report interval, use format yyyyMMdd
		 * @return {void} OK
		 */
		Requestreportbyschedule(requesterEmail: string, beginDate: number, endDate: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'report/subscriptionsScheduled?requesterEmail=' + (requesterEmail == null ? '' : encodeURIComponent(requesterEmail)) + '&beginDate=' + beginDate + '&endDate=' + endDate, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request report by update
		 * Retrieves a report regarding Subscriptions updated in the date interval chosen. The report will be sent by email, to the address inserted in the API's path.
		 * Get report/subscriptionsUpdated
		 * @param {string} requesterEmail Email that the report will be sent to
		 * @param {number} beginDate begin date of report interval, use format yyyyMMdd
		 * @param {number} endDate end date of report interval, use format yyyyMMdd
		 * @return {void} OK
		 */
		Requestreportbyupdate(requesterEmail: string, beginDate: number, endDate: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'report/subscriptionsUpdated?requesterEmail=' + (requesterEmail == null ? '' : encodeURIComponent(requesterEmail)) + '&beginDate=' + beginDate + '&endDate=' + endDate, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Subscriptions Settings
		 * Lists the current Subscriptions settings in your store.
		 * Get settings
		 * @return {Settings} OK
		 */
		GetSettings(): Observable<Settings> {
			return this.http.get<Settings>(this.baseUri + 'settings', {});
		}

		/**
		 * Edit Subscriptions settings
		 * Edits Subscriptions settings in your store.
		 * Post settings
		 * @param {Settings} requestBody Request body
		 * @return {Settings} OK
		 */
		EditSettings(requestBody: Settings): Observable<Settings> {
			return this.http.post<Settings>(this.baseUri + 'settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve customer's subscriptions
		 * Retrieves details of a given customer's subscriptions, searching by that customer's `customerId`.
		 * Get subscriptions
		 * @param {string} customerId Customer ID.
		 * @return {void} OK
		 */
		Getsubscriptionstocustomer(customerId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions?customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List All subscription groups
		 * Retrieves all subscription groups in your store.
		 * Get subscriptions-group
		 * @return {void} OK
		 */
		GetAllsubscriptiongroup(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions-group', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get subscription group list
		 * Retrieves a list of Subscription groups in your store.
		 * Get subscriptions-group/list
		 * @return {void} OK
		 */
		Getsubscriptiongrouplist(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions-group/list', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Next purchase
		 * Lists details of a given subscription group's next purchase, filtering by dateStr.
		 * Get subscriptions-group/nextPurchase/{dateStr}
		 * @param {string} dateStr Reference date that retrieves all next purchases, starting from the dateStr inserted. Must be in the format of {{yyyyMMdd}}
		 * @return {void} OK
		 */
		GetNextpurchase(dateStr: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions-group/nextPurchase/' + (dateStr == null ? '' : encodeURIComponent(dateStr)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Simulation by subscription-group
		 * Retrieves Subscription simulations, filtering by groupId.
		 * Get subscriptions-group/simulate/{groupId}
		 * @param {string} groupId Group ID.
		 * @return {void} OK
		 */
		GetSimulatebysubscription_group(groupId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions-group/simulate/' + (groupId == null ? '' : encodeURIComponent(groupId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Subscription by groupId
		 * Lists Subscription details, filtering by `groupId`.
		 * Get subscriptions-group/{groupId}
		 * @param {string} groupId Group ID.
		 * @return {void} OK
		 */
		GetSubscriptionbygroupId(groupId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions-group/' + (groupId == null ? '' : encodeURIComponent(groupId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Subscription by groupId
		 * Updates a Subscription by `groupId`.
		 * Patch subscriptions-group/{groupId}
		 * @param {string} groupId Group ID.
		 * @return {void} OK
		 */
		UpdateSubscriptionbygroupId(groupId: string, requestBody: UpdateSubscriptionbygroupIdRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'subscriptions-group/' + (groupId == null ? '' : encodeURIComponent(groupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add Subscription item by groupId
		 * Adds an SKU to a given Subscription, filtering by groupId.
		 * Post subscriptions-group/{groupId}/additem
		 * @param {string} groupId Group ID.
		 * @return {void} OK
		 */
		Additemsubscription_groupId(groupId: string, requestBody: Additemsubscription_groupIdRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions-group/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/additem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get addresses by groupId
		 * Lists addresses linked to a given Subscription group, filtering by groupId.
		 * Get subscriptions-group/{groupId}/addresses
		 * @return {void} 
		 */
		GetaddressesbygroupId(groupId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions-group/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/addresses', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Insert Addresses by groupId
		 * Insert address information of a given Subscription group, filtering by groupId.
		 * Post subscriptions-group/{groupId}/addresses
		 * @param {string} groupId Group ID.
		 * @return {void} OK
		 */
		InsertAddressesbygroupId(groupId: string, requestBody: InsertAddressesbygroupIdRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions-group/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/addresses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel Subscription by groupId
		 * Cancels Subscription by `groupId`
		 * Patch subscriptions-group/{groupId}/cancel
		 * @param {string} groupId Group ID.
		 * @return {void} OK
		 */
		CancelSubscriptionbygroupId(groupId: string): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'subscriptions-group/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/cancel', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List Subscription group's Configuration
		 * Retrieves details about a given subscription group's configuration, filtering by groupId.
		 * Get subscriptions-group/{groupId}/config
		 * @param {string} groupId Group ID.
		 * @return {void} OK
		 */
		GetConfigsubscriptionsgroup(groupId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions-group/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Conversation Message by groupId
		 * Retrieves the conversation of a given Subscription group, filtering by groupId.
		 * Get subscriptions-group/{groupId}/conversation-message
		 * @param {string} groupId Group ID.
		 * @return {void} OK
		 */
		GetConversationMessagebygroupId(groupId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions-group/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/conversation-message', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get frequency options by groupId
		 * Lists frequency options of a given Subscription group, filtering by groupId.
		 * Get subscriptions-group/{groupId}/frequency-options
		 * @param {string} groupId Group ID.
		 * @return {void} OK
		 */
		GetfrequencyoptionsbygroupId(groupId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions-group/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/frequency-options', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get payment System by groupId
		 * Retrieves payment system's information of a given Subscription group, filtering by groupId.
		 * Get subscriptions-group/{groupId}/payment-systems
		 * @param {string} groupId Group ID.
		 * @return {void} OK
		 */
		GetpaymentSystembygroupId(groupId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions-group/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/payment-systems', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List 'Will create' by groupId
		 * Retrieves Subscription groups listed as 'will create', filtering by groupId.
		 * Get subscriptions-group/{groupId}/will-create
		 * @param {string} groupId Group ID.
		 * @return {void} OK
		 */
		GetwillcreatebygroupId(groupId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions-group/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/will-create', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retry subscription by groupId
		 * Permits the retry of a Subscription group, via API, filtering by groupId and instanceId.
		 * Post subscriptions-group/{groupid}/instances/{instanceId}/retry
		 * @param {string} groupid Group ID.
		 * @param {string} instanceId Instance ID.
		 * @return {void} OK
		 */
		RetrysubscriptionbygroupId(groupid: string, instanceId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions-group/' + (groupid == null ? '' : encodeURIComponent(groupid)) + '/instances/' + (instanceId == null ? '' : encodeURIComponent(instanceId)) + '/retry', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Subscription List
		 * Retrieves a list of Subscriptions linked to your store.
		 * Get subscriptions/list
		 * @return {void} OK
		 */
		GetSubscriptionList(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions/list', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve subscription by ID
		 * Lists Subscription's details, searching by `subscriptionId`.
		 * Get subscriptions/{subscriptionId}
		 * @param {string} subscriptionId Subscription ID.
		 * @return {void} OK
		 */
		GetsubscriptionbyId(subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Subscriptions by SubscriptionId
		 * Update, add or alter information of a given Subscription, filtering by `subscriptionId`.
		 * Patch subscriptions/{subscriptionId}
		 * @param {string} subscriptionId Subscription ID.
		 * @return {void} OK
		 */
		UpdateSubscriptionsbySubscriptionId(subscriptionId: string, requestBody: UpdateSubscriptionsbySubscriptionIdRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Insert Addresses for Subscription
		 * Inserts address's information to complement the Subscription details.
		 * Post subscriptions/{subscriptionId}/addresses
		 * @param {string} subscriptionId Subscription ID.
		 * @return {void} OK
		 */
		InsertAddressesforSubscription(subscriptionId: string, requestBody: Array<InsertAddressesforSubscriptionRequest>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/addresses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel Subscriptions by SubscriptionId
		 * Cancels all Subscriptions of a subscription group. This operation does not have a rollback. Once cancelled, it cannot be re-activated
		 * Patch subscriptions/{subscriptionId}/cancel
		 * @param {string} subscriptionId Subscription ID.
		 * @return {void} OK
		 */
		CancelSubscriptionsbySubscriptionId(subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/cancel', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get frequency options by subscriptionId
		 * Lists frequency options for the Subscription, filtering by `subscriptionId`.
		 * Get subscriptions/{subscriptionId}/frequency-options
		 * @param {string} subscriptionId Subscription ID.
		 * @return {void} OK
		 */
		GetfrequencyoptionsbysubscriptionId(subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/frequency-options', { observe: 'response', responseType: 'text' });
		}
	}

}

