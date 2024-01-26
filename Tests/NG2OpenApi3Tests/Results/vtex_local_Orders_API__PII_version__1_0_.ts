import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Address {

		/**
		 * Address ID.
		 * Required
		 */
		addressId: string;

		/**
		 * Address type.
		 * Required
		 */
		addressType: string;

		/**
		 * Address city.
		 * Required
		 */
		city: string;

		/**
		 * Address complement.
		 * Required
		 */
		complement: string;

		/**
		 * Address country.
		 * Required
		 */
		country: string;

		/**
		 * Geolocation coordinates.
		 * Required
		 */
		geoCoordinates: Array<string>;

		/**
		 * Address neighborhood.
		 * Required
		 */
		neighborhood: string;

		/**
		 * Address number.
		 * Required
		 */
		number: string;

		/**
		 * Address postal code.
		 * Required
		 */
		postalCode: string;

		/**
		 * Address receiver name.
		 * Required
		 */
		receiverName: string;

		/**
		 * Address reference.
		 * Required
		 */
		reference: string;

		/**
		 * Address state.
		 * Required
		 */
		state: string;

		/**
		 * Address street.
		 * Required
		 */
		street: string;
	}
	export interface AddressFormProperties {

		/**
		 * Address ID.
		 * Required
		 */
		addressId: FormControl<string | null | undefined>,

		/**
		 * Address type.
		 * Required
		 */
		addressType: FormControl<string | null | undefined>,

		/**
		 * Address city.
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * Address complement.
		 * Required
		 */
		complement: FormControl<string | null | undefined>,

		/**
		 * Address country.
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Address neighborhood.
		 * Required
		 */
		neighborhood: FormControl<string | null | undefined>,

		/**
		 * Address number.
		 * Required
		 */
		number: FormControl<string | null | undefined>,

		/**
		 * Address postal code.
		 * Required
		 */
		postalCode: FormControl<string | null | undefined>,

		/**
		 * Address receiver name.
		 * Required
		 */
		receiverName: FormControl<string | null | undefined>,

		/**
		 * Address reference.
		 * Required
		 */
		reference: FormControl<string | null | undefined>,

		/**
		 * Address state.
		 * Required
		 */
		state: FormControl<string | null | undefined>,

		/**
		 * Address street.
		 * Required
		 */
		street: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
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

	export interface BRL {

		/**
		 * Count.
		 * Required
		 */
		Count: number;

		/**
		 * Facets.
		 * Required
		 */
		Facets: string;

		/**
		 * Maximum.
		 * Required
		 */
		Max: number;

		/**
		 * Mean.
		 * Required
		 */
		Mean: number;

		/**
		 * Minimum.
		 * Required
		 */
		Min: number;

		/**
		 * Missing.
		 * Required
		 */
		Missing: number;

		/**
		 * Standard deviation.
		 * Required
		 */
		StdDev: number;

		/**
		 * Sum.
		 * Required
		 */
		Sum: number;

		/**
		 * Sum of squares.
		 * Required
		 */
		SumOfSquares: number;
	}
	export interface BRLFormProperties {

		/**
		 * Count.
		 * Required
		 */
		Count: FormControl<number | null | undefined>,

		/**
		 * Facets.
		 * Required
		 */
		Facets: FormControl<string | null | undefined>,

		/**
		 * Maximum.
		 * Required
		 */
		Max: FormControl<number | null | undefined>,

		/**
		 * Mean.
		 * Required
		 */
		Mean: FormControl<number | null | undefined>,

		/**
		 * Minimum.
		 * Required
		 */
		Min: FormControl<number | null | undefined>,

		/**
		 * Missing.
		 * Required
		 */
		Missing: FormControl<number | null | undefined>,

		/**
		 * Standard deviation.
		 * Required
		 */
		StdDev: FormControl<number | null | undefined>,

		/**
		 * Sum.
		 * Required
		 */
		Sum: FormControl<number | null | undefined>,

		/**
		 * Sum of squares.
		 * Required
		 */
		SumOfSquares: FormControl<number | null | undefined>,
	}
	export function CreateBRLFormGroup() {
		return new FormGroup<BRLFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Facets: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Max: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Mean: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Min: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Missing: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StdDev: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SumOfSquares: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BRL1 {

		/**
		 * Count.
		 * Required
		 */
		Count: number;

		/**
		 * Facets.
		 * Required
		 */
		Facets: string;

		/**
		 * Maximum.
		 * Required
		 */
		Max: number;

		/**
		 * Mean.
		 * Required
		 */
		Mean: number;

		/**
		 * Minimum.
		 * Required
		 */
		Min: number;

		/**
		 * Missing.
		 * Required
		 */
		Missing: number;

		/**
		 * Standard deviation.
		 * Required
		 */
		StdDev: number;

		/**
		 * Sum.
		 * Required
		 */
		Sum: number;

		/**
		 * Sum of squares.
		 * Required
		 */
		SumOfSquares: number;
	}
	export interface BRL1FormProperties {

		/**
		 * Count.
		 * Required
		 */
		Count: FormControl<number | null | undefined>,

		/**
		 * Facets.
		 * Required
		 */
		Facets: FormControl<string | null | undefined>,

		/**
		 * Maximum.
		 * Required
		 */
		Max: FormControl<number | null | undefined>,

		/**
		 * Mean.
		 * Required
		 */
		Mean: FormControl<number | null | undefined>,

		/**
		 * Minimum.
		 * Required
		 */
		Min: FormControl<number | null | undefined>,

		/**
		 * Missing.
		 * Required
		 */
		Missing: FormControl<number | null | undefined>,

		/**
		 * Standard deviation.
		 * Required
		 */
		StdDev: FormControl<number | null | undefined>,

		/**
		 * Sum.
		 * Required
		 */
		Sum: FormControl<number | null | undefined>,

		/**
		 * Sum of squares.
		 * Required
		 */
		SumOfSquares: FormControl<number | null | undefined>,
	}
	export function CreateBRL1FormGroup() {
		return new FormGroup<BRL1FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Facets: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Max: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Mean: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Min: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Missing: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StdDev: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SumOfSquares: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ChangesAttachment {

		/**
		 * Array with data on order changes.
		 * Required
		 */
		changesData: Array<ChangesDatum>;

		/**
		 * Change ID.
		 * Required
		 */
		id: string;
	}
	export interface ChangesAttachmentFormProperties {

		/**
		 * Change ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateChangesAttachmentFormGroup() {
		return new FormGroup<ChangesAttachmentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ChangesDatum {

		/**
		 * Discount value in cents.
		 * Required
		 */
		discountValue: number;

		/**
		 * Order value increment in cents.
		 * Required
		 */
		incrementValue: number;

		/**
		 * Array with information on items added to the order.
		 * Required
		 */
		itemsAdded: Array<string>;

		/**
		 * Array with information on items removed from the order.
		 * Required
		 */
		itemsRemoved: Array<ItemsRemoved>;

		/**
		 * Change reason.
		 * Required
		 */
		reason: string;

		/** Required */
		receipt: Receipt;
	}
	export interface ChangesDatumFormProperties {

		/**
		 * Discount value in cents.
		 * Required
		 */
		discountValue: FormControl<number | null | undefined>,

		/**
		 * Order value increment in cents.
		 * Required
		 */
		incrementValue: FormControl<number | null | undefined>,

		/**
		 * Change reason.
		 * Required
		 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateChangesDatumFormGroup() {
		return new FormGroup<ChangesDatumFormProperties>({
			discountValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			incrementValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ItemsRemoved {

		/**
		 * Id of removed item.
		 * Required
		 */
		id: string;

		/**
		 * Name of removed item.
		 * Required
		 */
		name: string;

		/**
		 * Removed items price in cents.
		 * Required
		 */
		price: number;

		/**
		 * Quantity of items removed.
		 * Required
		 */
		quantity: number;

		/**
		 * Removed item unit multiplier.
		 * Required
		 */
		unitMultiplier: string;
	}
	export interface ItemsRemovedFormProperties {

		/**
		 * Id of removed item.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Name of removed item.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Removed items price in cents.
		 * Required
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Quantity of items removed.
		 * Required
		 */
		quantity: FormControl<number | null | undefined>,

		/**
		 * Removed item unit multiplier.
		 * Required
		 */
		unitMultiplier: FormControl<string | null | undefined>,
	}
	export function CreateItemsRemovedFormGroup() {
		return new FormGroup<ItemsRemovedFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unitMultiplier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Receipt {

		/**
		 * Date.
		 * Required
		 */
		date: string;

		/**
		 * Order ID.
		 * Required
		 */
		orderId: string;

		/**
		 * Receipt.
		 * Required
		 */
		receipt: string;
	}
	export interface ReceiptFormProperties {

		/**
		 * Date.
		 * Required
		 */
		date: FormControl<string | null | undefined>,

		/**
		 * Order ID.
		 * Required
		 */
		orderId: FormControl<string | null | undefined>,

		/**
		 * Receipt.
		 * Required
		 */
		receipt: FormControl<string | null | undefined>,
	}
	export function CreateReceiptFormGroup() {
		return new FormGroup<ReceiptFormProperties>({
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			receipt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ClientProfileData {

		/**
		 * Company document, in case client is corporate.
		 * Required
		 */
		corporateDocument: string;

		/**
		 * Company name, in case client is corporate.
		 * Required
		 */
		corporateName: string;

		/**
		 * Company telephone number, in case client is corporate.
		 * Required
		 */
		corporatePhone: string;

		/**
		 * Customer class.
		 * Required
		 */
		customerClass: string;

		/**
		 * Client document.
		 * Required
		 */
		document: string;

		/**
		 * Client document type.
		 * Required
		 */
		documentType: string;

		/**
		 * Client email address.
		 * Required
		 */
		email: string;

		/**
		 * Client first name.
		 * Required
		 */
		firstName: string;

		/**
		 * Client ID.
		 * Required
		 */
		id: string;

		/**
		 * Indicates whether client is corporate.
		 * Required
		 */
		isCorporate: boolean;

		/**
		 * Client last name.
		 * Required
		 */
		lastName: string;

		/**
		 * Client telephone number.
		 * Required
		 */
		phone: string;

		/**
		 * Company state inscription, in case client is corporate.
		 * Required
		 */
		stateInscription: string;

		/**
		 * Company trade name, in case client is corporate.
		 * Required
		 */
		tradeName: string;

		/**
		 * User profile ID.
		 * Required
		 */
		userProfileId: string;
	}
	export interface ClientProfileDataFormProperties {

		/**
		 * Company document, in case client is corporate.
		 * Required
		 */
		corporateDocument: FormControl<string | null | undefined>,

		/**
		 * Company name, in case client is corporate.
		 * Required
		 */
		corporateName: FormControl<string | null | undefined>,

		/**
		 * Company telephone number, in case client is corporate.
		 * Required
		 */
		corporatePhone: FormControl<string | null | undefined>,

		/**
		 * Customer class.
		 * Required
		 */
		customerClass: FormControl<string | null | undefined>,

		/**
		 * Client document.
		 * Required
		 */
		document: FormControl<string | null | undefined>,

		/**
		 * Client document type.
		 * Required
		 */
		documentType: FormControl<string | null | undefined>,

		/**
		 * Client email address.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Client first name.
		 * Required
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * Client ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Indicates whether client is corporate.
		 * Required
		 */
		isCorporate: FormControl<boolean | null | undefined>,

		/**
		 * Client last name.
		 * Required
		 */
		lastName: FormControl<string | null | undefined>,

		/**
		 * Client telephone number.
		 * Required
		 */
		phone: FormControl<string | null | undefined>,

		/**
		 * Company state inscription, in case client is corporate.
		 * Required
		 */
		stateInscription: FormControl<string | null | undefined>,

		/**
		 * Company trade name, in case client is corporate.
		 * Required
		 */
		tradeName: FormControl<string | null | undefined>,

		/**
		 * User profile ID.
		 * Required
		 */
		userProfileId: FormControl<string | null | undefined>,
	}
	export function CreateClientProfileDataFormGroup() {
		return new FormGroup<ClientProfileDataFormProperties>({
			corporateDocument: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			corporateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			corporatePhone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			customerClass: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			document: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			documentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isCorporate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stateInscription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tradeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CurrencyCode {

		/** Required */
		BRL: BRL;
	}
	export interface CurrencyCodeFormProperties {
	}
	export function CreateCurrencyCodeFormGroup() {
		return new FormGroup<CurrencyCodeFormProperties>({
		});

	}

	export interface CurrencyCode1 {

		/** Required */
		BRL: BRL1;
	}
	export interface CurrencyCode1FormProperties {
	}
	export function CreateCurrencyCode1FormGroup() {
		return new FormGroup<CurrencyCode1FormProperties>({
		});

	}

	export interface CurrencyFormatInfo {

		/**
		 * Currency decimal digits.
		 * Required
		 */
		CurrencyDecimalDigits: number;

		/**
		 * Currency decimal separator.
		 * Required
		 */
		CurrencyDecimalSeparator: string;

		/**
		 * Currency group separator.
		 * Required
		 */
		CurrencyGroupSeparator: string;

		/**
		 * Currency group size.
		 * Required
		 */
		CurrencyGroupSize: number;

		/**
		 * Indicates whether value representations start with currency symbol.
		 * Required
		 */
		StartsWithCurrencySymbol: boolean;
	}
	export interface CurrencyFormatInfoFormProperties {

		/**
		 * Currency decimal digits.
		 * Required
		 */
		CurrencyDecimalDigits: FormControl<number | null | undefined>,

		/**
		 * Currency decimal separator.
		 * Required
		 */
		CurrencyDecimalSeparator: FormControl<string | null | undefined>,

		/**
		 * Currency group separator.
		 * Required
		 */
		CurrencyGroupSeparator: FormControl<string | null | undefined>,

		/**
		 * Currency group size.
		 * Required
		 */
		CurrencyGroupSize: FormControl<number | null | undefined>,

		/**
		 * Indicates whether value representations start with currency symbol.
		 * Required
		 */
		StartsWithCurrencySymbol: FormControl<boolean | null | undefined>,
	}
	export function CreateCurrencyFormatInfoFormGroup() {
		return new FormGroup<CurrencyFormatInfoFormProperties>({
			CurrencyDecimalDigits: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			CurrencyDecimalSeparator: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CurrencyGroupSeparator: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CurrencyGroupSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StartsWithCurrencySymbol: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeliveryId {

		/**
		 * Courier ID.
		 * Required
		 */
		courierId: string;

		/**
		 * Courier name.
		 * Required
		 */
		courierName: string;

		/**
		 * Dock ID.
		 * Required
		 */
		dockId: string;

		/**
		 * Quantity.
		 * Required
		 */
		quantity: number;

		/**
		 * Warehouse ID.
		 * Required
		 */
		warehouseId: string;
	}
	export interface DeliveryIdFormProperties {

		/**
		 * Courier ID.
		 * Required
		 */
		courierId: FormControl<string | null | undefined>,

		/**
		 * Courier name.
		 * Required
		 */
		courierName: FormControl<string | null | undefined>,

		/**
		 * Dock ID.
		 * Required
		 */
		dockId: FormControl<string | null | undefined>,

		/**
		 * Quantity.
		 * Required
		 */
		quantity: FormControl<number | null | undefined>,

		/**
		 * Warehouse ID.
		 * Required
		 */
		warehouseId: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryIdFormGroup() {
		return new FormGroup<DeliveryIdFormProperties>({
			courierId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			courierName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			warehouseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Facets {

		/** Required */
		currencyCode: CurrencyCode;

		/** Required */
		origin: Origin;
	}
	export interface FacetsFormProperties {
	}
	export function CreateFacetsFormGroup() {
		return new FormGroup<FacetsFormProperties>({
		});

	}

	export interface Origin {

		/** Required */
		Fulfillment: Fulfillment;

		/** Required */
		Marketplace: Marketplace1;
	}
	export interface OriginFormProperties {
	}
	export function CreateOriginFormGroup() {
		return new FormGroup<OriginFormProperties>({
		});

	}

	export interface Fulfillment {

		/**
		 * Count.
		 * Required
		 */
		Count: number;

		/**
		 * Facets.
		 * Required
		 */
		Facets: string;

		/**
		 * Maximum.
		 * Required
		 */
		Max: number;

		/**
		 * Mean.
		 * Required
		 */
		Mean: number;

		/**
		 * Minimum.
		 * Required
		 */
		Min: number;

		/**
		 * Missing.
		 * Required
		 */
		Missing: number;

		/**
		 * Standard deviation.
		 * Required
		 */
		StdDev: number;

		/**
		 * Sum.
		 * Required
		 */
		Sum: number;

		/**
		 * Sum of squares.
		 * Required
		 */
		SumOfSquares: number;
	}
	export interface FulfillmentFormProperties {

		/**
		 * Count.
		 * Required
		 */
		Count: FormControl<number | null | undefined>,

		/**
		 * Facets.
		 * Required
		 */
		Facets: FormControl<string | null | undefined>,

		/**
		 * Maximum.
		 * Required
		 */
		Max: FormControl<number | null | undefined>,

		/**
		 * Mean.
		 * Required
		 */
		Mean: FormControl<number | null | undefined>,

		/**
		 * Minimum.
		 * Required
		 */
		Min: FormControl<number | null | undefined>,

		/**
		 * Missing.
		 * Required
		 */
		Missing: FormControl<number | null | undefined>,

		/**
		 * Standard deviation.
		 * Required
		 */
		StdDev: FormControl<number | null | undefined>,

		/**
		 * Sum.
		 * Required
		 */
		Sum: FormControl<number | null | undefined>,

		/**
		 * Sum of squares.
		 * Required
		 */
		SumOfSquares: FormControl<number | null | undefined>,
	}
	export function CreateFulfillmentFormGroup() {
		return new FormGroup<FulfillmentFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Facets: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Max: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Mean: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Min: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Missing: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StdDev: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SumOfSquares: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Marketplace1 {

		/**
		 * Count.
		 * Required
		 */
		Count: number;

		/**
		 * Facets.
		 * Required
		 */
		Facets: string;

		/**
		 * Maximum.
		 * Required
		 */
		Max: number;

		/**
		 * Mean.
		 * Required
		 */
		Mean: number;

		/**
		 * Minimum.
		 * Required
		 */
		Min: number;

		/**
		 * Missing.
		 * Required
		 */
		Missing: number;

		/**
		 * Standard deviation.
		 * Required
		 */
		StdDev: number;

		/**
		 * Sum.
		 * Required
		 */
		Sum: number;

		/**
		 * Sum of squares.
		 * Required
		 */
		SumOfSquares: number;
	}
	export interface Marketplace1FormProperties {

		/**
		 * Count.
		 * Required
		 */
		Count: FormControl<number | null | undefined>,

		/**
		 * Facets.
		 * Required
		 */
		Facets: FormControl<string | null | undefined>,

		/**
		 * Maximum.
		 * Required
		 */
		Max: FormControl<number | null | undefined>,

		/**
		 * Mean.
		 * Required
		 */
		Mean: FormControl<number | null | undefined>,

		/**
		 * Minimum.
		 * Required
		 */
		Min: FormControl<number | null | undefined>,

		/**
		 * Missing.
		 * Required
		 */
		Missing: FormControl<number | null | undefined>,

		/**
		 * Standard deviation.
		 * Required
		 */
		StdDev: FormControl<number | null | undefined>,

		/**
		 * Sum.
		 * Required
		 */
		Sum: FormControl<number | null | undefined>,

		/**
		 * Sum of squares.
		 * Required
		 */
		SumOfSquares: FormControl<number | null | undefined>,
	}
	export function CreateMarketplace1FormGroup() {
		return new FormGroup<Marketplace1FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Facets: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Max: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Mean: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Min: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Missing: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StdDev: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SumOfSquares: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Facets1 {

		/** Required */
		currencyCode: CurrencyCode1;

		/** Required */
		origin: Origin1;
	}
	export interface Facets1FormProperties {
	}
	export function CreateFacets1FormGroup() {
		return new FormGroup<Facets1FormProperties>({
		});

	}

	export interface Origin1 {

		/** Required */
		Fulfillment: Fulfillment1;

		/** Required */
		Marketplace: Marketplace2;
	}
	export interface Origin1FormProperties {
	}
	export function CreateOrigin1FormGroup() {
		return new FormGroup<Origin1FormProperties>({
		});

	}

	export interface Fulfillment1 {

		/**
		 * Count.
		 * Required
		 */
		Count: number;

		/**
		 * Facets.
		 * Required
		 */
		Facets: string;

		/**
		 * Maximum.
		 * Required
		 */
		Max: number;

		/**
		 * Mean.
		 * Required
		 */
		Mean: number;

		/**
		 * Minimum.
		 * Required
		 */
		Min: number;

		/**
		 * Missing.
		 * Required
		 */
		Missing: number;

		/**
		 * Standard deviation.
		 * Required
		 */
		StdDev: number;

		/**
		 * Sum.
		 * Required
		 */
		Sum: number;

		/**
		 * Sum of squares.
		 * Required
		 */
		SumOfSquares: number;
	}
	export interface Fulfillment1FormProperties {

		/**
		 * Count.
		 * Required
		 */
		Count: FormControl<number | null | undefined>,

		/**
		 * Facets.
		 * Required
		 */
		Facets: FormControl<string | null | undefined>,

		/**
		 * Maximum.
		 * Required
		 */
		Max: FormControl<number | null | undefined>,

		/**
		 * Mean.
		 * Required
		 */
		Mean: FormControl<number | null | undefined>,

		/**
		 * Minimum.
		 * Required
		 */
		Min: FormControl<number | null | undefined>,

		/**
		 * Missing.
		 * Required
		 */
		Missing: FormControl<number | null | undefined>,

		/**
		 * Standard deviation.
		 * Required
		 */
		StdDev: FormControl<number | null | undefined>,

		/**
		 * Sum.
		 * Required
		 */
		Sum: FormControl<number | null | undefined>,

		/**
		 * Sum of squares.
		 * Required
		 */
		SumOfSquares: FormControl<number | null | undefined>,
	}
	export function CreateFulfillment1FormGroup() {
		return new FormGroup<Fulfillment1FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Facets: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Max: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Mean: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Min: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Missing: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StdDev: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SumOfSquares: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Marketplace2 {

		/**
		 * Count.
		 * Required
		 */
		Count: number;

		/**
		 * Facets.
		 * Required
		 */
		Facets: string;

		/**
		 * Maximum.
		 * Required
		 */
		Max: number;

		/**
		 * Mean.
		 * Required
		 */
		Mean: number;

		/**
		 * Minimum.
		 * Required
		 */
		Min: number;

		/**
		 * Missing.
		 * Required
		 */
		Missing: number;

		/**
		 * Standard deviation.
		 * Required
		 */
		StdDev: number;

		/**
		 * Sum.
		 * Required
		 */
		Sum: number;

		/**
		 * Sum of squares.
		 * Required
		 */
		SumOfSquares: number;
	}
	export interface Marketplace2FormProperties {

		/**
		 * Count.
		 * Required
		 */
		Count: FormControl<number | null | undefined>,

		/**
		 * Facets.
		 * Required
		 */
		Facets: FormControl<string | null | undefined>,

		/**
		 * Maximum.
		 * Required
		 */
		Max: FormControl<number | null | undefined>,

		/**
		 * Mean.
		 * Required
		 */
		Mean: FormControl<number | null | undefined>,

		/**
		 * Minimum.
		 * Required
		 */
		Min: FormControl<number | null | undefined>,

		/**
		 * Missing.
		 * Required
		 */
		Missing: FormControl<number | null | undefined>,

		/**
		 * Standard deviation.
		 * Required
		 */
		StdDev: FormControl<number | null | undefined>,

		/**
		 * Sum.
		 * Required
		 */
		Sum: FormControl<number | null | undefined>,

		/**
		 * Sum of squares.
		 * Required
		 */
		SumOfSquares: FormControl<number | null | undefined>,
	}
	export function CreateMarketplace2FormGroup() {
		return new FormGroup<Marketplace2FormProperties>({
			Count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Facets: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Max: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Mean: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Min: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Missing: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StdDev: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SumOfSquares: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvoiceNotificationRequest {

		/** Fiscal code used in Brazil. */
		cfop?: string | null;

		/**
		 * The name of the carrier responsible for delivering the order.
		 * > This field should only be used when sending **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).
		 */
		courier?: string | null;

		/** Extra value in the invoice in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`. */
		extraValue?: number | null;

		/** Invoice key. */
		invoiceKey?: string | null;

		/**
		 * Number that identifies the invoice.
		 * Required
		 */
		invoiceNumber: string;

		/** URL of the invoice. Can be used to send the URL of an XML file, for example, which is useful for some integrations. */
		invoiceUrl?: string | null;

		/**
		 * Total amount being invoiced in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.
		 * Required
		 */
		invoiceValue: string;

		/**
		 * Issuance date of the invoice in ISO format.
		 * Required
		 */
		issuedDate: string;

		/**
		 * Array containing the SKUs that are being invoiced.
		 * Required
		 */
		items: Array<Item1>;

		/**
		 * Code that identifies the order tracking.
		 * > This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).
		 */
		trackingNumber?: string | null;

		/**
		 * URL used to track the order.
		 * > This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).
		 */
		trackingUrl?: string | null;

		/**
		 * The type of invoice. There are two possible values: `"Output"` and `"Input"`. The `"Output"` type should be used when the invoice you are sending is a selling invoice. The `"Input"` type should be used when you send a return invoice.
		 * Required
		 */
		type: string;

		/** Number of volumes in the invoice. */
		volumes?: number | null;
	}
	export interface InvoiceNotificationRequestFormProperties {

		/** Fiscal code used in Brazil. */
		cfop: FormControl<string | null | undefined>,

		/**
		 * The name of the carrier responsible for delivering the order.
		 * > This field should only be used when sending **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).
		 */
		courier: FormControl<string | null | undefined>,

		/** Extra value in the invoice in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`. */
		extraValue: FormControl<number | null | undefined>,

		/** Invoice key. */
		invoiceKey: FormControl<string | null | undefined>,

		/**
		 * Number that identifies the invoice.
		 * Required
		 */
		invoiceNumber: FormControl<string | null | undefined>,

		/** URL of the invoice. Can be used to send the URL of an XML file, for example, which is useful for some integrations. */
		invoiceUrl: FormControl<string | null | undefined>,

		/**
		 * Total amount being invoiced in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.
		 * Required
		 */
		invoiceValue: FormControl<string | null | undefined>,

		/**
		 * Issuance date of the invoice in ISO format.
		 * Required
		 */
		issuedDate: FormControl<string | null | undefined>,

		/**
		 * Code that identifies the order tracking.
		 * > This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).
		 */
		trackingNumber: FormControl<string | null | undefined>,

		/**
		 * URL used to track the order.
		 * > This field should only be used when sending the **tracking** information. When the request is used for sending the invoice, this field should be left empty (`""`).
		 */
		trackingUrl: FormControl<string | null | undefined>,

		/**
		 * The type of invoice. There are two possible values: `"Output"` and `"Input"`. The `"Output"` type should be used when the invoice you are sending is a selling invoice. The `"Input"` type should be used when you send a return invoice.
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/** Number of volumes in the invoice. */
		volumes: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceNotificationRequestFormGroup() {
		return new FormGroup<InvoiceNotificationRequestFormProperties>({
			cfop: new FormControl<string | null | undefined>(undefined),
			courier: new FormControl<string | null | undefined>(undefined),
			extraValue: new FormControl<number | null | undefined>(undefined),
			invoiceKey: new FormControl<string | null | undefined>(undefined),
			invoiceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			invoiceUrl: new FormControl<string | null | undefined>(undefined),
			invoiceValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			issuedDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trackingNumber: new FormControl<string | null | undefined>(undefined),
			trackingUrl: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			volumes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Item1 {

		/**
		 * Index of the SKU being invoiced.
		 * Required
		 */
		itemIndex: string;

		/**
		 * Total price of the SKU being invoiced in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.
		 * Required
		 */
		price: number;

		/**
		 * Quantity cof the SKU being invoiced.
		 * Required
		 */
		quantity: number;
	}
	export interface Item1FormProperties {

		/**
		 * Index of the SKU being invoiced.
		 * Required
		 */
		itemIndex: FormControl<string | null | undefined>,

		/**
		 * Total price of the SKU being invoiced in cents. Do not use any decimal separator. For instance, `$24.99` should be represented as `2499`.
		 * Required
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Quantity cof the SKU being invoiced.
		 * Required
		 */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateItem1FormGroup() {
		return new FormGroup<Item1FormProperties>({
			itemIndex: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface List {

		/**
		 * Shipping estimate date.
		 * Required
		 */
		ShippingEstimatedDate: string;

		/**
		 * Maximum shipping estimate date.
		 * Required
		 */
		ShippingEstimatedDateMax: string;

		/**
		 * Minimum shipping estimate date.
		 * Required
		 */
		ShippingEstimatedDateMin: string;

		/**
		 * Three letter code indicating the marketplace in which the order was placed.
		 * Required
		 */
		affiliateId: string;

		/**
		 * Authorized date.
		 * Required
		 */
		authorizedDate: string;

		/**
		 * Call center operator name.
		 * Required
		 */
		callCenterOperatorName: string;

		/**
		 * Client name.
		 * Required
		 */
		clientName: string;

		/**
		 * Creation date.
		 * Required
		 */
		creationDate: string;

		/**
		 * Currency code.
		 * Required
		 */
		currencyCode: string;

		/**
		 * Order items.
		 * Required
		 */
		items: string;

		/**
		 * Last unread message.
		 * Required
		 */
		lastMessageUnread: string;

		/**
		 * List ID.
		 * Required
		 */
		listId: string;

		/**
		 * List type.
		 * Required
		 */
		listType: string;

		/**
		 * ID of the order in the marketplace.
		 * Required
		 */
		marketPlaceOrderId: string;

		/**
		 * Order ID.
		 * Required
		 */
		orderId: string;

		/**
		 * Indicates whether order is complete.
		 * Required
		 */
		orderIsComplete: boolean;

		/**
		 * Indicates whether order is marketplace, fulfillment or chain.
		 * Required
		 */
		origin: string;

		/**
		 * Order payment names.
		 * Required
		 */
		paymentNames: string;

		/**
		 * Sales channel.
		 * Required
		 */
		salesChannel: string;

		/**
		 * Order sequence number.
		 * Required
		 */
		sequence: string;

		/**
		 * Order status.
		 * Required
		 */
		status: string;

		/**
		 * Order status description.
		 * Required
		 */
		statusDescription: string;

		/**
		 * Total items.
		 * Required
		 */
		totalItems: number;

		/**
		 * Order total value in cents.
		 * Required
		 */
		totalValue: number;

		/**
		 * Indicates whether order workflow is in error state.
		 * Required
		 */
		workflowInErrorState: boolean;

		/**
		 * Indicates whether workflow is in retry.
		 * Required
		 */
		workflowInRetry: boolean;
	}
	export interface ListFormProperties {

		/**
		 * Shipping estimate date.
		 * Required
		 */
		ShippingEstimatedDate: FormControl<string | null | undefined>,

		/**
		 * Maximum shipping estimate date.
		 * Required
		 */
		ShippingEstimatedDateMax: FormControl<string | null | undefined>,

		/**
		 * Minimum shipping estimate date.
		 * Required
		 */
		ShippingEstimatedDateMin: FormControl<string | null | undefined>,

		/**
		 * Three letter code indicating the marketplace in which the order was placed.
		 * Required
		 */
		affiliateId: FormControl<string | null | undefined>,

		/**
		 * Authorized date.
		 * Required
		 */
		authorizedDate: FormControl<string | null | undefined>,

		/**
		 * Call center operator name.
		 * Required
		 */
		callCenterOperatorName: FormControl<string | null | undefined>,

		/**
		 * Client name.
		 * Required
		 */
		clientName: FormControl<string | null | undefined>,

		/**
		 * Creation date.
		 * Required
		 */
		creationDate: FormControl<string | null | undefined>,

		/**
		 * Currency code.
		 * Required
		 */
		currencyCode: FormControl<string | null | undefined>,

		/**
		 * Order items.
		 * Required
		 */
		items: FormControl<string | null | undefined>,

		/**
		 * Last unread message.
		 * Required
		 */
		lastMessageUnread: FormControl<string | null | undefined>,

		/**
		 * List ID.
		 * Required
		 */
		listId: FormControl<string | null | undefined>,

		/**
		 * List type.
		 * Required
		 */
		listType: FormControl<string | null | undefined>,

		/**
		 * ID of the order in the marketplace.
		 * Required
		 */
		marketPlaceOrderId: FormControl<string | null | undefined>,

		/**
		 * Order ID.
		 * Required
		 */
		orderId: FormControl<string | null | undefined>,

		/**
		 * Indicates whether order is complete.
		 * Required
		 */
		orderIsComplete: FormControl<boolean | null | undefined>,

		/**
		 * Indicates whether order is marketplace, fulfillment or chain.
		 * Required
		 */
		origin: FormControl<string | null | undefined>,

		/**
		 * Order payment names.
		 * Required
		 */
		paymentNames: FormControl<string | null | undefined>,

		/**
		 * Sales channel.
		 * Required
		 */
		salesChannel: FormControl<string | null | undefined>,

		/**
		 * Order sequence number.
		 * Required
		 */
		sequence: FormControl<string | null | undefined>,

		/**
		 * Order status.
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * Order status description.
		 * Required
		 */
		statusDescription: FormControl<string | null | undefined>,

		/**
		 * Total items.
		 * Required
		 */
		totalItems: FormControl<number | null | undefined>,

		/**
		 * Order total value in cents.
		 * Required
		 */
		totalValue: FormControl<number | null | undefined>,

		/**
		 * Indicates whether order workflow is in error state.
		 * Required
		 */
		workflowInErrorState: FormControl<boolean | null | undefined>,

		/**
		 * Indicates whether workflow is in retry.
		 * Required
		 */
		workflowInRetry: FormControl<boolean | null | undefined>,
	}
	export function CreateListFormGroup() {
		return new FormGroup<ListFormProperties>({
			ShippingEstimatedDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShippingEstimatedDateMax: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShippingEstimatedDateMin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			affiliateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authorizedDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			callCenterOperatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currencyCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			items: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastMessageUnread: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			listId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			listType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			marketPlaceOrderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orderIsComplete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			origin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentNames: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			salesChannel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sequence: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			statusDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			totalItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			totalValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			workflowInErrorState: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			workflowInRetry: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListOrders {

		/**
		 * Array of facets.
		 * Required
		 */
		facets: Array<string>;

		/**
		 * Array containing information on orders listed.
		 * Required
		 */
		list: Array<List>;

		/** Required */
		paging: Paging;

		/** Required */
		stats: Stats;
	}
	export interface ListOrdersFormProperties {
	}
	export function CreateListOrdersFormGroup() {
		return new FormGroup<ListOrdersFormProperties>({
		});

	}

	export interface Paging {

		/**
		 * Current returned page.
		 * Required
		 */
		currentPage: number;

		/**
		 * Number of pages.
		 * Required
		 */
		pages: number;

		/**
		 * Number of items returned per page.
		 * Required
		 */
		perPage: number;

		/**
		 * Paging total.
		 * Required
		 */
		total: number;
	}
	export interface PagingFormProperties {

		/**
		 * Current returned page.
		 * Required
		 */
		currentPage: FormControl<number | null | undefined>,

		/**
		 * Number of pages.
		 * Required
		 */
		pages: FormControl<number | null | undefined>,

		/**
		 * Number of items returned per page.
		 * Required
		 */
		perPage: FormControl<number | null | undefined>,

		/**
		 * Paging total.
		 * Required
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePagingFormGroup() {
		return new FormGroup<PagingFormProperties>({
			currentPage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pages: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			perPage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Stats {

		/** Required */
		stats: Stats1;
	}
	export interface StatsFormProperties {
	}
	export function CreateStatsFormGroup() {
		return new FormGroup<StatsFormProperties>({
		});

	}

	export interface Stats1 {

		/** Required */
		totalItems: TotalItems;

		/** Required */
		totalValue: TotalValue;
	}
	export interface Stats1FormProperties {
	}
	export function CreateStats1FormGroup() {
		return new FormGroup<Stats1FormProperties>({
		});

	}

	export interface TotalItems {

		/**
		 * Count.
		 * Required
		 */
		Count: number;

		/**
		 * Facets.
		 * Required
		 */
		Facets: string;

		/**
		 * Maximum.
		 * Required
		 */
		Max: number;

		/**
		 * Mean.
		 * Required
		 */
		Mean: number;

		/**
		 * Minimum.
		 * Required
		 */
		Min: number;

		/**
		 * Missing.
		 * Required
		 */
		Missing: number;

		/**
		 * Standard deviation.
		 * Required
		 */
		StdDev: number;

		/**
		 * Sum.
		 * Required
		 */
		Sum: number;

		/**
		 * Sum of squares.
		 * Required
		 */
		SumOfSquares: number;
	}
	export interface TotalItemsFormProperties {

		/**
		 * Count.
		 * Required
		 */
		Count: FormControl<number | null | undefined>,

		/**
		 * Facets.
		 * Required
		 */
		Facets: FormControl<string | null | undefined>,

		/**
		 * Maximum.
		 * Required
		 */
		Max: FormControl<number | null | undefined>,

		/**
		 * Mean.
		 * Required
		 */
		Mean: FormControl<number | null | undefined>,

		/**
		 * Minimum.
		 * Required
		 */
		Min: FormControl<number | null | undefined>,

		/**
		 * Missing.
		 * Required
		 */
		Missing: FormControl<number | null | undefined>,

		/**
		 * Standard deviation.
		 * Required
		 */
		StdDev: FormControl<number | null | undefined>,

		/**
		 * Sum.
		 * Required
		 */
		Sum: FormControl<number | null | undefined>,

		/**
		 * Sum of squares.
		 * Required
		 */
		SumOfSquares: FormControl<number | null | undefined>,
	}
	export function CreateTotalItemsFormGroup() {
		return new FormGroup<TotalItemsFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Facets: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Max: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Mean: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Min: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Missing: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StdDev: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SumOfSquares: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TotalValue {

		/**
		 * Value count.
		 * Required
		 */
		Count: number;

		/** Required */
		Facets: Facets;

		/**
		 * Value maximum.
		 * Required
		 */
		Max: number;

		/**
		 * Value mean.
		 * Required
		 */
		Mean: number;

		/**
		 * Value minimum.
		 * Required
		 */
		Min: number;

		/**
		 * Missing values.
		 * Required
		 */
		Missing: number;

		/**
		 * Values standard deviation.
		 * Required
		 */
		StdDev: number;

		/**
		 * Values sum.
		 * Required
		 */
		Sum: number;

		/**
		 * Values sum of squares
		 * Required
		 */
		SumOfSquares: number;
	}
	export interface TotalValueFormProperties {

		/**
		 * Value count.
		 * Required
		 */
		Count: FormControl<number | null | undefined>,

		/**
		 * Value maximum.
		 * Required
		 */
		Max: FormControl<number | null | undefined>,

		/**
		 * Value mean.
		 * Required
		 */
		Mean: FormControl<number | null | undefined>,

		/**
		 * Value minimum.
		 * Required
		 */
		Min: FormControl<number | null | undefined>,

		/**
		 * Missing values.
		 * Required
		 */
		Missing: FormControl<number | null | undefined>,

		/**
		 * Values standard deviation.
		 * Required
		 */
		StdDev: FormControl<number | null | undefined>,

		/**
		 * Values sum.
		 * Required
		 */
		Sum: FormControl<number | null | undefined>,

		/**
		 * Values sum of squares
		 * Required
		 */
		SumOfSquares: FormControl<number | null | undefined>,
	}
	export function CreateTotalValueFormGroup() {
		return new FormGroup<TotalValueFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Max: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Mean: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Min: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Missing: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StdDev: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SumOfSquares: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LogisticsInfo {

		/**
		 * Address ID.
		 * Required
		 */
		addressId: string;

		/**
		 * Delivery channel.
		 * Required
		 */
		deliveryChannel: string;

		/**
		 * Delivery company.
		 * Required
		 */
		deliveryCompany: string;

		/**
		 * Array of delivery IDs.
		 * Required
		 */
		deliveryIds: Array<DeliveryId>;

		/**
		 * Delivery window information.
		 * Required
		 */
		deliveryWindow: string;

		/**
		 * Item index, matching the index in the `items` array.
		 * Required
		 */
		itemIndex: number;

		/**
		 * List price in cents.
		 * Required
		 */
		listPrice: number;

		/**
		 * Reservation lasting period.
		 * Required
		 */
		lockTTL: string;

		/** Required */
		pickupStoreInfo: PickupStoreInfo;

		/**
		 * Polygon name.
		 * Required
		 */
		polygonName: string;

		/**
		 * Prince in cents.
		 * Required
		 */
		price: number;

		/**
		 * Selected SLA.
		 * Required
		 */
		selectedSla: string;

		/**
		 * Selling price in cents.
		 * Required
		 */
		sellingPrice: number;

		/**
		 * Shipping estimate.
		 * Required
		 */
		shippingEstimate: string;

		/**
		 * Shipping estimate date.
		 * Required
		 */
		shippingEstimateDate: string;

		/**
		 * List of countries (three letter ISO code) to which shipping is available.
		 * Required
		 */
		shipsTo: Array<string>;

		/**
		 * Array with information on the SLAs.
		 * Required
		 */
		slas: Array<Sla>;
	}
	export interface LogisticsInfoFormProperties {

		/**
		 * Address ID.
		 * Required
		 */
		addressId: FormControl<string | null | undefined>,

		/**
		 * Delivery channel.
		 * Required
		 */
		deliveryChannel: FormControl<string | null | undefined>,

		/**
		 * Delivery company.
		 * Required
		 */
		deliveryCompany: FormControl<string | null | undefined>,

		/**
		 * Delivery window information.
		 * Required
		 */
		deliveryWindow: FormControl<string | null | undefined>,

		/**
		 * Item index, matching the index in the `items` array.
		 * Required
		 */
		itemIndex: FormControl<number | null | undefined>,

		/**
		 * List price in cents.
		 * Required
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * Reservation lasting period.
		 * Required
		 */
		lockTTL: FormControl<string | null | undefined>,

		/**
		 * Polygon name.
		 * Required
		 */
		polygonName: FormControl<string | null | undefined>,

		/**
		 * Prince in cents.
		 * Required
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Selected SLA.
		 * Required
		 */
		selectedSla: FormControl<string | null | undefined>,

		/**
		 * Selling price in cents.
		 * Required
		 */
		sellingPrice: FormControl<number | null | undefined>,

		/**
		 * Shipping estimate.
		 * Required
		 */
		shippingEstimate: FormControl<string | null | undefined>,

		/**
		 * Shipping estimate date.
		 * Required
		 */
		shippingEstimateDate: FormControl<string | null | undefined>,
	}
	export function CreateLogisticsInfoFormGroup() {
		return new FormGroup<LogisticsInfoFormProperties>({
			addressId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deliveryChannel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deliveryCompany: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deliveryWindow: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			itemIndex: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			listPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lockTTL: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			polygonName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			selectedSla: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellingPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			shippingEstimate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shippingEstimateDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PickupStoreInfo {

		/**
		 * Pickup additional information.
		 * Required
		 */
		additionalInfo: string;

		/**
		 * Pickup address.
		 * Required
		 */
		address: string;

		/**
		 * Pickup dock ID.
		 * Required
		 */
		dockId: string;

		/**
		 * Pickup friendly name.
		 * Required
		 */
		friendlyName: string;

		/**
		 * Indicates whether it is pickup store.
		 * Required
		 */
		isPickupStore: boolean;
	}
	export interface PickupStoreInfoFormProperties {

		/**
		 * Pickup additional information.
		 * Required
		 */
		additionalInfo: FormControl<string | null | undefined>,

		/**
		 * Pickup address.
		 * Required
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * Pickup dock ID.
		 * Required
		 */
		dockId: FormControl<string | null | undefined>,

		/**
		 * Pickup friendly name.
		 * Required
		 */
		friendlyName: FormControl<string | null | undefined>,

		/**
		 * Indicates whether it is pickup store.
		 * Required
		 */
		isPickupStore: FormControl<boolean | null | undefined>,
	}
	export function CreatePickupStoreInfoFormGroup() {
		return new FormGroup<PickupStoreInfoFormProperties>({
			additionalInfo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			friendlyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isPickupStore: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Sla {

		/**
		 * SLA delivery channel.
		 * Required
		 */
		deliveryChannel: string;

		/**
		 * SLA delivery window.
		 * Required
		 */
		deliveryWindow: string;

		/**
		 * SLA ID.
		 * Required
		 */
		id: string;

		/**
		 * SLA name.
		 * Required
		 */
		name: string;

		/** Required */
		pickupStoreInfo: PickupStoreInfo;

		/**
		 * SLA polygon name.
		 * Required
		 */
		polygonName: string;

		/**
		 * SLA price in cents.
		 * Required
		 */
		price: number;

		/**
		 * SLA shipping estimate.
		 * Required
		 */
		shippingEstimate: string;
	}
	export interface SlaFormProperties {

		/**
		 * SLA delivery channel.
		 * Required
		 */
		deliveryChannel: FormControl<string | null | undefined>,

		/**
		 * SLA delivery window.
		 * Required
		 */
		deliveryWindow: FormControl<string | null | undefined>,

		/**
		 * SLA ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * SLA name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * SLA polygon name.
		 * Required
		 */
		polygonName: FormControl<string | null | undefined>,

		/**
		 * SLA price in cents.
		 * Required
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * SLA shipping estimate.
		 * Required
		 */
		shippingEstimate: FormControl<string | null | undefined>,
	}
	export function CreateSlaFormGroup() {
		return new FormGroup<SlaFormProperties>({
			deliveryChannel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deliveryWindow: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			polygonName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			shippingEstimate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Marketplace {

		/**
		 * Marketplace base URL.
		 * Required
		 */
		baseURL: string;

		/**
		 * Indicates whether marketplace is certified.
		 * Required
		 */
		isCertified: string;

		/**
		 * Marketplace name.
		 * Required
		 */
		name: string;
	}
	export interface MarketplaceFormProperties {

		/**
		 * Marketplace base URL.
		 * Required
		 */
		baseURL: FormControl<string | null | undefined>,

		/**
		 * Indicates whether marketplace is certified.
		 * Required
		 */
		isCertified: FormControl<string | null | undefined>,

		/**
		 * Marketplace name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMarketplaceFormGroup() {
		return new FormGroup<MarketplaceFormProperties>({
			baseURL: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isCertified: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Payment {

		/**
		 * Card holder
		 * Required
		 */
		cardHolder: string;

		/**
		 * Card number.
		 * Required
		 */
		cardNumber: string;

		/**
		 * Connector responses.
		 * Required
		 */
		connectorResponses: string;

		/**
		 * Card verification code.
		 * Required
		 */
		cvv2: string;

		/**
		 * Due date.
		 * Required
		 */
		dueDate: string;

		/**
		 * Card expiration month.
		 * Required
		 */
		expireMonth: string;

		/**
		 * Card expiration year.
		 * Required
		 */
		expireYear: string;

		/**
		 * Card first digits.
		 * Required
		 */
		firstDigits: string;

		/**
		 * Gift card caption.
		 * Required
		 */
		giftCardCaption: string;

		/**
		 * Gift card ID.
		 * Required
		 */
		giftCardId: string;

		/**
		 * Gift card name.
		 * Required
		 */
		giftCardName: string;

		/**
		 * Payment group.
		 * Required
		 */
		group: string;

		/**
		 * Payment ID.
		 * Required
		 */
		id: string;

		/**
		 * Payment installments.
		 * Required
		 */
		installments: number;

		/**
		 * Card last digits.
		 * Required
		 */
		lastDigits: string;

		/**
		 * Payment system.
		 * Required
		 */
		paymentSystem: string;

		/**
		 * Payment system name.
		 * Required
		 */
		paymentSystemName: string;

		/**
		 * Redemption code.
		 * Required
		 */
		redemptionCode: string;

		/**
		 * Reference value for interest calculation in cents.
		 * Required
		 */
		referenceValue: number;

		/**
		 * Payment TID.
		 * Required
		 */
		tid: string;

		/**
		 * Payment URL.
		 * Required
		 */
		url: string;

		/**
		 * Payment value in cents.
		 * Required
		 */
		value: number;
	}
	export interface PaymentFormProperties {

		/**
		 * Card holder
		 * Required
		 */
		cardHolder: FormControl<string | null | undefined>,

		/**
		 * Card number.
		 * Required
		 */
		cardNumber: FormControl<string | null | undefined>,

		/**
		 * Connector responses.
		 * Required
		 */
		connectorResponses: FormControl<string | null | undefined>,

		/**
		 * Card verification code.
		 * Required
		 */
		cvv2: FormControl<string | null | undefined>,

		/**
		 * Due date.
		 * Required
		 */
		dueDate: FormControl<string | null | undefined>,

		/**
		 * Card expiration month.
		 * Required
		 */
		expireMonth: FormControl<string | null | undefined>,

		/**
		 * Card expiration year.
		 * Required
		 */
		expireYear: FormControl<string | null | undefined>,

		/**
		 * Card first digits.
		 * Required
		 */
		firstDigits: FormControl<string | null | undefined>,

		/**
		 * Gift card caption.
		 * Required
		 */
		giftCardCaption: FormControl<string | null | undefined>,

		/**
		 * Gift card ID.
		 * Required
		 */
		giftCardId: FormControl<string | null | undefined>,

		/**
		 * Gift card name.
		 * Required
		 */
		giftCardName: FormControl<string | null | undefined>,

		/**
		 * Payment group.
		 * Required
		 */
		group: FormControl<string | null | undefined>,

		/**
		 * Payment ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Payment installments.
		 * Required
		 */
		installments: FormControl<number | null | undefined>,

		/**
		 * Card last digits.
		 * Required
		 */
		lastDigits: FormControl<string | null | undefined>,

		/**
		 * Payment system.
		 * Required
		 */
		paymentSystem: FormControl<string | null | undefined>,

		/**
		 * Payment system name.
		 * Required
		 */
		paymentSystemName: FormControl<string | null | undefined>,

		/**
		 * Redemption code.
		 * Required
		 */
		redemptionCode: FormControl<string | null | undefined>,

		/**
		 * Reference value for interest calculation in cents.
		 * Required
		 */
		referenceValue: FormControl<number | null | undefined>,

		/**
		 * Payment TID.
		 * Required
		 */
		tid: FormControl<string | null | undefined>,

		/**
		 * Payment URL.
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/**
		 * Payment value in cents.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreatePaymentFormGroup() {
		return new FormGroup<PaymentFormProperties>({
			cardHolder: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cardNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			connectorResponses: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cvv2: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dueDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expireMonth: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expireYear: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			firstDigits: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			giftCardCaption: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			giftCardId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			giftCardName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			group: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			installments: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lastDigits: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentSystem: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentSystemName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			redemptionCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			tid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PaymentData {

		/**
		 * Array with information on each transaction of the order.
		 * Required
		 */
		transactions: Array<Transaction>;
	}
	export interface PaymentDataFormProperties {
	}
	export function CreatePaymentDataFormGroup() {
		return new FormGroup<PaymentDataFormProperties>({
		});

	}

	export interface Transaction {

		/**
		 * Indicates whether transaction is active.
		 * Required
		 */
		isActive: boolean;

		/**
		 * Merchant name.
		 * Required
		 */
		merchantName: string;

		/**
		 * Array with information on each payment for the order.
		 * Required
		 */
		payments: Array<Payment>;

		/**
		 * Transaction ID.
		 * Required
		 */
		transactionId: string;
	}
	export interface TransactionFormProperties {

		/**
		 * Indicates whether transaction is active.
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Merchant name.
		 * Required
		 */
		merchantName: FormControl<string | null | undefined>,

		/**
		 * Transaction ID.
		 * Required
		 */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateTransactionFormGroup() {
		return new FormGroup<TransactionFormProperties>({
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			merchantName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RatesAndBenefitsData {

		/**
		 * Field ID.
		 * Required
		 */
		id: string;

		/**
		 * Array with rates and benefits IDs.
		 * Required
		 */
		rateAndBenefitsIdentifiers: Array<string>;
	}
	export interface RatesAndBenefitsDataFormProperties {

		/**
		 * Field ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateRatesAndBenefitsDataFormGroup() {
		return new FormGroup<RatesAndBenefitsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SelectedAddress {

		/**
		 * Address ID.
		 * Required
		 */
		addressId: string;

		/**
		 * Address type.
		 * Required
		 */
		addressType: string;

		/**
		 * Address city.
		 * Required
		 */
		city: string;

		/**
		 * Address complement.
		 * Required
		 */
		complement: string;

		/**
		 * Address country.
		 * Required
		 */
		country: string;

		/**
		 * Geolocation coordinates.
		 * Required
		 */
		geoCoordinates: Array<string>;

		/**
		 * Address neighborhood.
		 * Required
		 */
		neighborhood: string;

		/**
		 * Address number.
		 * Required
		 */
		number: string;

		/**
		 * Address postal code.
		 * Required
		 */
		postalCode: string;

		/**
		 * Address receiver name.
		 * Required
		 */
		receiverName: string;

		/**
		 * Address reference.
		 * Required
		 */
		reference: string;

		/**
		 * Address state.
		 * Required
		 */
		state: string;

		/**
		 * Address street.
		 * Required
		 */
		street: string;
	}
	export interface SelectedAddressFormProperties {

		/**
		 * Address ID.
		 * Required
		 */
		addressId: FormControl<string | null | undefined>,

		/**
		 * Address type.
		 * Required
		 */
		addressType: FormControl<string | null | undefined>,

		/**
		 * Address city.
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * Address complement.
		 * Required
		 */
		complement: FormControl<string | null | undefined>,

		/**
		 * Address country.
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Address neighborhood.
		 * Required
		 */
		neighborhood: FormControl<string | null | undefined>,

		/**
		 * Address number.
		 * Required
		 */
		number: FormControl<string | null | undefined>,

		/**
		 * Address postal code.
		 * Required
		 */
		postalCode: FormControl<string | null | undefined>,

		/**
		 * Address receiver name.
		 * Required
		 */
		receiverName: FormControl<string | null | undefined>,

		/**
		 * Address reference.
		 * Required
		 */
		reference: FormControl<string | null | undefined>,

		/**
		 * Address state.
		 * Required
		 */
		state: FormControl<string | null | undefined>,

		/**
		 * Address street.
		 * Required
		 */
		street: FormControl<string | null | undefined>,
	}
	export function CreateSelectedAddressFormGroup() {
		return new FormGroup<SelectedAddressFormProperties>({
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

	export interface Seller {

		/**
		 * Seller ID.
		 * Required
		 */
		id: string;

		/**
		 * Seller logo.
		 * Required
		 */
		logo: string;

		/**
		 * Seller name.
		 * Required
		 */
		name: string;
	}
	export interface SellerFormProperties {

		/**
		 * Seller ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Seller logo.
		 * Required
		 */
		logo: FormControl<string | null | undefined>,

		/**
		 * Seller name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSellerFormGroup() {
		return new FormGroup<SellerFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ShippingData {

		/** Required */
		address: Address;

		/**
		 * Field ID.
		 * Required
		 */
		id: string;

		/**
		 * Array with logistics information of each item in the order.
		 * Required
		 */
		logisticsInfo: Array<LogisticsInfo>;

		/**
		 * Array of the selected addresses' information.
		 * Required
		 */
		selectedAddresses: Array<Address>;

		/**
		 * Tracking hints.
		 * Required
		 */
		trackingHints: string;
	}
	export interface ShippingDataFormProperties {

		/**
		 * Field ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Tracking hints.
		 * Required
		 */
		trackingHints: FormControl<string | null | undefined>,
	}
	export function CreateShippingDataFormGroup() {
		return new FormGroup<ShippingDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trackingHints: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StorePreferencesData {

		/**
		 * Three letter ISO country code.
		 * Required
		 */
		countryCode: string;

		/**
		 * Currency code.
		 * Required
		 */
		currencyCode: string;

		/** Required */
		currencyFormatInfo: CurrencyFormatInfo;

		/**
		 * Currency locale.
		 * Required
		 */
		currencyLocale: number;

		/**
		 * Currency symbol.
		 * Required
		 */
		currencySymbol: string;

		/**
		 * Time zone.
		 * Required
		 */
		timeZone: string;
	}
	export interface StorePreferencesDataFormProperties {

		/**
		 * Three letter ISO country code.
		 * Required
		 */
		countryCode: FormControl<string | null | undefined>,

		/**
		 * Currency code.
		 * Required
		 */
		currencyCode: FormControl<string | null | undefined>,

		/**
		 * Currency locale.
		 * Required
		 */
		currencyLocale: FormControl<number | null | undefined>,

		/**
		 * Currency symbol.
		 * Required
		 */
		currencySymbol: FormControl<string | null | undefined>,

		/**
		 * Time zone.
		 * Required
		 */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateStorePreferencesDataFormGroup() {
		return new FormGroup<StorePreferencesDataFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currencyCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currencyLocale: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			currencySymbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeZone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List orders
		 * Retrieves a list of orders according to the filters described below.
		 * > This endpoint returns masked order data.
		 * > This should **not** be used for integrations. Use the [orders Feed or hook](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1) for this purpose.
		 * This endpoint returns only orders that already have been indexed, which takes aproximately four minutes. Because of this, the data retrieved may present inconsistencies. To get live up to date information and [build order integrations](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration) use the [orders Feed or hook](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1).
		 * > Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.
		 * ## Do not use request for integrations
		 * > This endpoint returns only orders that already have been indexed, which takes aproximately four minutes. Because of this, the data retrieved may present inconsistencies or become unavailable in periods of peak order volume. In other words, **order integrations built with the List orders endpoint are not reliable** and **will not be supported**. To get live up to date information and [build order integrations](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration) use the [orders Feed or hook](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1).
		 * ## Throtling
		 * Each account can make up to 5000 requests per minute.
		 * ## Request parameters allowed
		 * | Attribute    | Type        | Description |
		 * | --------------- |:---------:| -------------------------------------------------------------------------------------------:|
		 * | `orderBy` | string | Order Field and Order Type concatenated `orderBy={{OrderField}},{{OrderType}}`  |
		 * | `OrderField` | string | Order Field expected values: `creationDate`,`orderId`,`items`,`totalValue` and `origin` |
		 * | `OrderType` | string | Order Type expected values: `asc` and `desc`  |
		 * ## Sorting Examples
		 * CreationDate:
		 * `/api/oms/pvt/orders?orderBy=creationDate,desc`
		 * OrderID:
		 * `/api/oms/pvt/orders?orderBy=orderId,desc`
		 * Items:
		 * `/api/oms/pvt/orders?orderBy=items,asc`
		 * TotalValue:
		 * `/api/oms/pvt/orders?orderBy=totalValue,desc`
		 * Origin:
		 * `/api/oms/pvt/orders?orderBy=origin,asc`
		 * | Attribute    | Type      | Description |
		 * | ------------ |:---------:| -----------:|
		 * | `page` | integer | Page Number  |
		 * ## Pagination Examples:
		 * `/api/oms/pvt/orders?page=3`
		 * | Attribute    | Type      | Description |
		 * | ------------ |:---------:| -----------:|
		 * | `per_page` | integer | Quantity orders per page  |
		 * Quantity per Page Examples:
		 * `/api/oms/pvt/orders?per_page=15`
		 * <div class="alert alert-info">Pagination Limit: The limit of pages that can be requested is 30.
		 * </div>
		 * ## Time zone query
		 * | Attribute    | Type      | Description |
		 * | ------------ |:---------:| -----------:|
		 * | `utc` | integer | Time Zone. By including this parameter alone in your query, the call will not convert the UTC nor show the number of orders set for that UTC. To filter orders with the desired UTC, you must also modify date and time in the `f_creationDate=creationDate:` parameter.  |
		 * Time Zone Example:
		 * `/api/oms/pvt/orders?utc=-0200`
		 * ## Request filters
		 * ## Fulltext
		 * | Attribute    | Type      | Description |
		 * | ------------ |:---------:| -----------:|
		 * | `q` | string | Fulltext accepts Order Ids, Client E-mail, Client Document and Client Name  |
		 * > The `+` caracter isn't allowed in Fulltext Search
		 * Fulltext filter Examples:
		 * OrderID:
		 * `/api/oms/pvt/orders?q=v212333lux-02`
		 * Email:
		 * `/api/oms/pvt/orders?q=rodrigo.cunha@vtex.com`
		 * Document:
		 * `/api/oms/pvt/orders?q=21133355524`
		 * ClientName:
		 * `/api/oms/pvt/orders?q=Cunha`
		 * ## Shipping Estimate
		 * | Attribute    | Type      | Description |
		 * | ------------ |:---------:| -----------:|
		 * | `f_shippingEstimate` | string | Concatened value of quantity days and sufix `.days`  |
		 * Shipping Estimate filter Examples:
		 * Next 7 days:
		 * `/api/oms/pvt/orders?f_shippingEstimate=7.days`
		 * Tomorrow:
		 * `/api/oms/pvt/orders?f_shippingEstimate=1.days`
		 * Today:
		 * `/api/oms/pvt/orders?f_shippingEstimate=0.days`
		 * Late:
		 * `/api/oms/pvt/orders?f_shippingEstimate=-1.days`
		 * ## Invoiced Date
		 * | Attribute    | Type      | Description |
		 * | ------------ |:---------:| -----------:|
		 * | `f_invoicedDate` | string | Concatened value sufix `invoicedDate` and range date in Timestamp format  |
		 * Invoiced Date filter Examples:
		 * 1 Day:
		 * `/api/oms/pvt/orders?f_invoicedDate=invoicedDate:[2017-01-01T02:00:00.000Z TO 2017-01-02T01:59:59.999Z]`
		 * 1 Month:
		 * `/api/oms/pvt/orders?f_invoicedDate=invoicedDate:[2017-01-01T02:00:00.000Z TO 2017-02-01T01:59:59.999Z]`
		 * 1 Year:
		 * `/api/oms/pvt/orders?f_invoicedDate=invoicedDate:[2016-01-01T02:00:00.000Z TO 2017-01-01T01:59:59.999Z]`
		 * ## Order Date
		 * | Attribute    | Type      | Description |
		 * | ------------ |:---------:| -----------:|
		 * | `f_creationDate` | string | Concatened value suffix `creationDate` and range date in Timestamp format  |
		 * Order Date filter Examples:
		 * 1 Day:
		 * `/api/oms/pvt/orders?f_creationDate=creationDate:[2017-01-01T02:00:00.000Z TO 2017-01-02T01:59:59.999Z]`
		 * 1 Month:
		 * `/api/oms/pvt/orders?f_creationDate=creationDate:[2017-01-01T02:00:00.000Z TO 2017-02-01T01:59:59.999Z]`
		 * 1 Year:
		 * `/api/oms/pvt/orders?f_creationDate=creationDate:[2016-01-01T02:00:00.000Z TO 2017-01-01T01:59:59.999Z]`
		 * ## Authorized Date
		 * | Attribute    | Type      | Description |
		 * | ------------ |:---------:| -----------:|
		 * | `f_authorizedDate` | string | Concatened value suffix `authorizedDate` and range date in Timestamp format  |
		 * Authorized Date filter Examples:
		 * 1 Day:
		 * `/api/oms/pvt/orders?f_authorizedDate=authorizedDate:[2017-01-01T02:00:00.000Z TO 2017-01-02T01:59:59.999Z]`
		 * 1 Month:
		 * `/api/oms/pvt/orders?f_authorizedDate=authorizedDate:[2017-01-01T02:00:00.000Z TO 2017-02-01T01:59:59.999Z]`
		 * 1 Year:
		 * `/api/oms/pvt/orders?f_authorizedDate=authorizedDate:[2016-01-01T02:00:00.000Z TO 2017-01-01T01:59:59.999Z]`
		 * ## UTMs
		 * | Attribute    | Type      | Description |
		 * | ------------ |:---------:| -----------:|
		 * | `f_UtmSource` | string | UTM Source value  |
		 * Channels filter Examples:
		 * `/api/oms/pvt/orders?f_UtmSource=buscape_campaign`
		 * ## Seller
		 * | Attribute    | Type      | Description |
		 * | ------------ |:---------:| -----------:|
		 * | `f_sellerNames` | string | Seller Name value  |
		 * Seller filter Examples:
		 * `/api/oms/pvt/orders?f_sellerNames=Fast+Shop`
		 * ## Call Center Operator
		 * | Attribute    | Type      | Description |
		 * | ------------ |:---------:| -----------:|
		 * | `f_callCenterOperatorName` | string | Call Center Operator Value  |
		 * Call Center Operator filter Examples:
		 * `/api/oms/pvt/orders?f_callCenterOperatorName=Operator%20Name`
		 * ## Sales Channel Name
		 * | Attribute    | Type      | Description |
		 * | ------------ |:---------:| -----------:|
		 * | `f_salesChannel` | string | Sales Channel Name Value  |
		 * Sales Channel Name filter Examples:
		 * `/api/oms/pvt/orders?f_salesChannel=Main`
		 * ## Sales Channel ID
		 * | Attribute    | Type      | Description |
		 * | ------------ |:---------:| -----------:|
		 * | `salesChannelId` | string | Sales Channel ID Value  |
		 * Sales Channel ID filter Examples:
		 * `/api/oms/pvt/orders?salesChannelId=1`
		 * ## Affiliate ID
		 * | Attribute    | Type      | Description |
		 * | ------------ |:---------:| -----------:|
		 * | `f_affiliateId` | string | Affiliate ID Value  |
		 * Affiliate ID filter Examples:
		 * `/api/oms/pvt/orders?f_affiliateId=WLM`
		 * ## Order Status
		 * | Attribute    | Type      | Description |
		 * | ------------ |:---------:| -----------:|
		 * | `f_status` | string | Order Status Value  |
		 * | Order Status avaible to filter    |
		 * | --------------------- |
		 * | `waiting-for-sellers-confirmation` |
		 * | `payment-pending` |
		 * | `payment-approved` |
		 * | `ready-for-handling` |
		 * | `handling` |
		 * | `invoiced` |
		 * | `canceled` |
		 * Order Status filter Examples:
		 * `/api/oms/pvt/orders?f_status=ready-for-handling`
		 * ## Order Status Description
		 * | Attribute    | Type      | Description |
		 * | ------------ |:---------:| -----------:|
		 * | `f_statusDescription` | string | Order Status Description Value  |
		 * | Order Status Description avaible to filter |
		 * | --------------------- |
		 * | `Aguardando+autorização+para+despachar` |
		 * | `Pagamento+Pendente` |
		 * | `Pagamento+Aprovado` |
		 * | `Pronto+para+o+manuseio` |
		 * | `Preparando+Entrega` |
		 * | `Faturado` |
		 * | `Cancelado` |
		 * Order Status Description filter Examples:
		 * `/api/oms/pvt/orders?f_statusDescription=Pronto+para+o+manuseio`
		 * ## Order Situation
		 * | Attribute    | Type      | Description |
		 * | ------------ |:---------:| -----------:|
		 * | `incompleteOrders` | boolean | If is a Incomplete Order  |
		 * > know more about [Incomplete Orders in VTEX Help](https://help.vtex.com/en/tutorial/understanding-incomplete-orders)
		 * Order Situation filter Examples:
		 * `/api/oms/pvt/orders?incompleteOrders=true`
		 * ## Error Situation
		 * | Attribute    | Type      | Description |
		 * | ------------ |:---------:| -----------:|
		 * | `incompleteOrders` | boolean | Error Situation Type  |
		 * | Error Situation Values avaible to filter |
		 * | ------- |
		 * | `all` |
		 * | `perm` |
		 * | `temp` |
		 * Error Situation filter Examples:
		 * `/api/oms/pvt/orders?filterError=all`
		 * ## Payment Type Name
		 * | Attribute    | Type      | Description |
		 * | ------------ |:---------:| -----------:|
		 * | `f_paymentNames` | string | Payment Type Value  |
		 * Payment Type Name filter Examples:
		 * `/api/oms/pvt/orders?f_paymentNames=Visa`
		 * ## Rates and Benefits Name
		 * | Attribute    | Type      | Description |
		 * | ------------ |:---------:| -----------:|
		 * | `f_RnB` | string | Rates and Benefits Name  |
		 * Rates and Benefits filter Examples:
		 * `/api/oms/pvt/orders?f_RnB="Free+Shipping"`
		 * ## Search Field
		 * | Attribute    | Type      | Description |
		 * | ------------ |:---------:| -----------:|
		 * | `searchField` | string | Affiliate ID Value  |
		 * | `sku_Ids&sku_Ids` | integer | SKU ID  |
		 * | `listId&listId` | integer | Gift List ID  |
		 * | `tid&tid` | integer | Transaction ID (TID)  |
		 * | `pci_tid&pci_tid` | integer | PCI Connector's Transaction ID (TID)  |
		 * | `paymentId&paymentId` | integer | Payment ID (PID)  |
		 * | `nsu&nsu` | integer | Connector's NSU  |
		 * Search Field filter Examples:
		 * SKU ID:
		 * `/api/oms/pvt/orders?searchField=sku_Ids&sku_Ids=11223`
		 * Gift List ID:
		 * `/api/oms/pvt/orders?searchField=listId&listId=11223`
		 * Transaction ID (TID):
		 * `/api/oms/pvt/orders?searchField=tid&tid=54546300238810034995829230012`
		 * PCI Connector's Transaction ID (TID):
		 * `/api/oms/pvt/orders?searchField=pci_tid&pci_tid=7032909234899834298423209`
		 * Payment ID (PID):
		 * `/api/oms/pvt/orders?searchField=paymentId&paymentId=2`
		 * Connector's NSU:
		 * `/api/oms/pvt/orders?searchField=nsu&nsu=2437281`
		 * \n\r\n\r## Response objects\n\r\n\r,
		 * **Response object has the following properties:**
		 * | Attribute    | Type        | Description |
		 * | --------------- |:---------:| --------------------------------------:|
		 * | `list` | object | Order List Object |
		 * | `shippingEstimateDate` | string | Estimate Shipping Date |
		 * | `affiliateId` | string | Seller Name who was responsible for the order |
		 * | `authorizedDate` | string | Authorized Order Date |
		 * | `callCenterOperatorData` | string | Call Center Operator responsible for the order |
		 * | `name` | string | Client Name|
		 * | `creationDate` | string | Order Creation Date |
		 * | `currencyCode` | string | Currency Code in ISO 4217  |
		 * | `items` | object | Obsolete Field  |
		 * | `lastMessageUnread` | string | Last sent transactional message  |
		 * | `listId` | string | Releated Gift List Id |
		 * | `listType` | string | Releated Gift List Type |
		 * | `marketplaceOrderId` | string | Marketplace Order Id |
		 * | `orderId` | string | Change receipt order Id |
		 * | `orderIsComplete` | boolean | If is a Order Completed |
		 * | `origin` | string | Order Origin: "Marketplace" or "Fulfillment" |
		 * | `paymentNames` | string | Payment System Name |
		 * | `salesChannel` | string | Order Sales Channel Id |
		 * | `sequence` | string | Order Sequence ID |
		 * | `status` | string | Order Status |
		 * | `statusDescription` | string | Status Description |
		 * | `totalItems` | integer | Total Order Items |
		 * | `totalValue` | integer | Total Value Amount |
		 * | `workflowInErrorState` | boolean | If is a Work Flow Error |
		 * | `workflowInRetry` | boolean | If is in a Work Flow Retry |
		 * | `paging` | object | Paging Details Object |
		 * | `pages` | integer | Paging Total Pages |
		 * | `perPage` | integer | Paging total per Page |
		 * | `total` | integer | Total Result |
		 * | `stats` | object | Results segmented by `totalItems` and `totalValue` |
		 * | `totalItems` | integer | Total Order Items segmeted by `currencyCode` and `origin`|
		 * | `totalValue` | integer | Total Value Amount segmeted by `currencyCode` and `origin`|
		 * | `currencyCode` | string | Currency Code in ISO 4217  |
		 * | `origin` | string | Order Origin: "Marketplace" or "Fulfillment" |
		 * | `Count` | integer | Orders Count |
		 * | `Facets` | object | Grouping Object |
		 * | `Max` | object | Paging Details Object |
		 * | `Mean` | object | Paging Details Object |
		 * | `Min` | object | Paging Details Object |
		 * | `Missing` | object | Paging Details Object |
		 * | `StdDev` | object | Paging Details Object |
		 * | `Sum` | object | Paging Details Object |
		 * | `SumOfSquares` | object | Paging Details Object |
		 * Post api/orders/extendsearch/orders
		 * @param {boolean} f_hasInputInvoice Filters list to return only orders with non `null` values for the `invoiceInput` field.
		 * @return {void} OK
		 */
		ListOrders2(f_hasInputInvoice: boolean | null | undefined, requestBody: ListOrders2PostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/orders/extendsearch/orders?f_hasInputInvoice=' + f_hasInputInvoice, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get order
		 * Retrieves order details by searching a specific order ID.
		 * >If you wish to retrieve unmasked data, use the `reason` parameter.
		 * > The `View order` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).
		 * > Check the new [Orders onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/orders-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Orders and is organized by focusing on the developer's journey.
		 * > Throttling: Each account can make up to 5000 requests per minute.
		 * ## Request object has the following properties:
		 * | Attribute    | Type        | Description |
		 * | --------------- |:---------:| --------------------------------------:|
		 * | `orderId` | string | Order Id |
		 * ## Response object has the following properties:
		 * | Attribute    | Type        | Description |
		 * | --------------- |:---------:| --------------------------------------:|
		 * | `affiliateId` | string | Seller Name who was responsible for the order |
		 * | `allowCancellation` | boolean | If Cancellation is allowed |
		 * | `allowEdition` | boolean | If Order Edition is allowed |
		 * | `approvedBy` | string | User who approved the order |
		 * | `authorizedDate` | string | Authorized Order Date |
		 * | `callCenterOperatorData` | string | Call Center Operator responsible for the order |
		 * | `cancelReason` | string | Cancel Reason |
		 * | `cancelledBy` | string | User who Cancelled the order |
		 * | `changesAttachment` | object | Change details object |
		 * | `changesData` | object | Array with each change |
		 * | `discountValue` | integer | Change Discount Value |
		 * | `incrementValue` | integer | Change Increment Value |
		 * | `itemsAdded` | object | Added items details |
		 * | `itemsRemoved` | object | Removed items details |
		 * | `id` | integer | Changed SKU ID |
		 * | `name` | string | Changed SKU Name |
		 * | `price` | integer | Changed SKU Price |
		 * | `quantity` | integer | Changed SKU Quantity |
		 * | `unitMultiplier` | integer | Changed SKU Unit Multiplier |
		 * | `reason` | string | Change Reason |
		 * | `receipt` | object | Change receipt details object |
		 * | `date` | string | Change receipt date |
		 * | `orderId` | string | Change receipt order Id |
		 * | `receipt` | object | Change receipt ID |
		 * | `id` | string | Object Id, expect value "changeAttachment" |
		 * | `clientProfileData` | object | Object with all Cliente Profile Data |
		 * | `corporateDocument` | string | Client Corporate Document |
		 * | `corporateName` | string | Client Corporate Name |
		 * | `corporatePhone` | string | Cliente Corporate Telephone |
		 * | `customerClass` | string | Customer class |
		 * | `document` | string | Client Document |
		 * | `documentType` | string | Client Document Type |
		 * | `email` | string | Client e-mail |
		 * | `firstName` | string | Client First Name |
		 * | `id` | string | Object ID, expected value "clientProfileData" |
		 * | `isCorporate` | string | If the Client is a Corporate Client |
		 * | `lastName` | string | Client Last Name|
		 * | `phone` | string | Client Telephone |
		 * | `stateInscription` | string | Client Corporate Inscription |
		 * | `tradeName` | string | Client Corporate Trade Name |
		 * | `userProfileId` | string | Client User Profile ID |
		 * | `commercialConditionData` | object | Commercial condition information, including `"Id"`, `"parentOrderId"`, and `"reason"` |
		 * | `creationDate` | string | Order Creation Date |
		 * | `customData` | object | Custom Data Object |
		 * | `customApps` | object | Custom apps details object |
		 * | `fields` | object | Custom app fields |
		 * | `id` | string | Custom App ID |
		 * | `major` | integer | Major |
		 * | `emailTracked` | string | Client Conversation Tracker email  |
		 * | `followUpEmail` | string | Responsible store e-mail |
		 * | `giftRegistryData` | object | Gift registry list information, including `"addressId"` (object), `"description"` (string), and `"giftRegistryId"` (string) |
		 * | `hostname` | string | Account hostname registered in License Manager |
		 * | `invoiceData` | object | Information pertinent to the order's invoice |
		 * | `invoicedDate` | string | Invoice Date |
		 * | `isCheckedIn` | boolean | True if order is from inStore |
		 * | `isCompleted` | boolean | True if the order is completed |
		 * | `items` | object | Order items object |
		 * | `additionalInfo` | string | Order item additional info |
		 * | `brandId` | string | Brand ID |
		 * | `brandName` | string | Brand name |
		 * | `categoriesIds` | string | Item category ID |
		 * | `commercialConditionId` | string | Invoice date |
		 * | `dimension` | object | Item dimension object |
		 * | `cubicweight` | number | Item cubic weight |
		 * | `height` | number | Item height |
		 * | `length` | number | Item length |
		 * | `weight` | number | Item weight |
		 * | `width` | number | Item width |
		 * | `offeringInfo` | string | Extra information on offering |
		 * | `offeringType` | string | Offering type |
		 * | `offeringTypeId` | string | ID of offering type |
		 * | `productClusterId` | string | All releated product clusters |
		 * | `attachments` | object | Attachents Array |
		 * | `content` | object | Attachment Content Custom Field |
		 * | `name` | string | Attachment Name |
		 * | `bundleItems` | object | Invoice date |
		 * | `commission` | string | Comission value registered to Seller |
		 * | `components` | object | If item is a kit, contains components information |
		 * | `detailUrl` | string | Product Slug URL |
		 * | `ean` | string | SKU EAN |
		 * | `freightCommission` | integer | Comission value registered to seller |
		 * | `id` | string | SKU Id |
		 * | `imageUrl` | string | SKU Image URL |
		 * | `isGift` | string | If this item is a gift in order context |
		 * | `itemAttachment` | object | Attachment Object |
		 * | `content` | object | Attachment Content Array |
		 * | `name` | string | Attachment Name |
		 * | `listPrice` | integer | Item List Price |
		 * | `lockId` | string | Reservation ID |
		 * | `manualPrice` | string | Manually inserted price, if there is one. |
		 * | `measurementUnit` | string | Item measurement unit |
		 * | `name` | string | Item name |
		 * | `offerings` | object | Offerings information |
		 * | `params` | object | "ContextParameter" hashset with `"name"` and `"value"` |
		 * | `preSaleDate` | string | Item pre sale date |
		 * | `price` | integer | Item Price |
		 * | `items[].priceDefinition`                        | Object   | Price information for all units of a specific item.                                                                                                                  |
		 * | `items[].priceDefinition.total`                  | Integer  | Total value for all units of the item in cents.                                                                                                                      |
		 * | `items[].priceDefinition.calculatedSellingPrice` | Integer  | Item's calculated unitary selling price in cents.                                                                                                                    |
		 * | `items[].priceDefinition.sellingPrices`          | Array    | Array of objects, each containing `value` (in cents) and `quantity` for the different rounding instances that can be combined to form the correctly rounded `total`. |
		 * | `priceTags` | object | Object with all price modifiers |
		 * | `identifier` | string | Price Tag ID |
		 * | `isPercentual` | boolean | Indicates whether the price tag is a percentual modifier |
		 * | `name` | string | Price tag name |
		 * | `rawValue` | string | Price tag raw value |
		 * | `value` | string | Price tag value |
		 * | `priceValidUntil` | string | Price expiration date |
		 * | `productId` | string | Item product ID |
		 * | `quantity` | integer | Item quantity |
		 * | `refId` | string | Item reference ID |
		 * | `rewardValue` | integer | Item reward value |
		 * | `seller` | string | Item seller |
		 * | `sellerSku` | string | Invoice Date |
		 * | `sellingPrice` | integer | Item selling price. For more accurate information, see the `priceDefinition` field |
		 * | `shippingPrice` | string | Item Shipping Price |
		 * | `tax` | integer | Item Tax |
		 * | `taxCode` | string | Item Tax Code |
		 * | `uniqueId` | string | Item Order Unique ID |
		 * | `unitMultiplier` | integer | Item Unit Multipler |
		 * | `lastChange` | string | Order Last Change Date |
		 * | `lastMessage` | string | initial excerpt from last message sent to the customer |
		 * | `marketingData` | string | Marketing Data Object |
		 * | `coupon` | string | Order Disccount Coupon |
		 * | `id` | string |  Object ID, expected value "marketingData" |
		 * | `marketingTags` | object | Marketing Tags Array |
		 * | `utmCampaign` | string | UTM Campaign Parameters |
		 * | `utmMedium` | string | UTM Medium Parameters |
		 * | `utmPartner` | string | UTM Source Parameters |
		 * | `utmSource` | string | UTM Source Parameters|
		 * | `utmiCampaign` | string | UTMI Campaign Internal Parameters |
		 * | `utmiPart` | string | UTMI Part Internal Parameters |
		 * | `utmipage` | string | UTMI Page Internal Parameters |
		 * | `marketplace` | object | Marketplace Details Object |
		 * | `baseURL` | string | Marketplace Base URL |
		 * | `isCertified` | string | If is a Certified Marketplace |
		 * | `name` | string | Marketplace Name |
		 * | `marketplaceItems` | object | Marketplace Details Object |
		 * | `marketplaceOrderId` | string | Marketplace Order Id |
		 * | `marketplaceServicesEndpoint` | string | Marketplace Services Endpoint |
		 * | `merchantName` | string | Merchant Name |
		 * | `openTextField` | object | Open Text Field Object |
		 * | `value` | string | Open Text Field Value |
		 * | `orderFormId` | string | Order Form Id |
		 * | `orderGroup` | string | Order Group Id |
		 * | `orderId` | string | Order Id |
		 * | `origin` | string | Order Origin: "Marketplace", "Fulfillment", or "Chain" (for the third level in a [Multilevel Omnichannel Inventory](https://help.vtex.com/en/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4?&utm_source=autocomplete#) purchase). |
		 * | `packageAttachment` | object | Package Object |
		 * | `packages` | object | Packages Details Object, populated after order invoiced |
		 * | `cfop` | string | Fiscal code for operations and installments |
		 * | `courier` | string | Package selected Courier |
		 * | `courierStatus` | string | Package Tracking Status |
		 * | `data` | object | Package Tracking Timeline |
		 * | `finished` | string | If the delivery are finished |
		 * | `status` | string | Courier Status |
		 * | `embeddedInvoice` | string | XML of the invoice |
		 * | `invoiceKey` | string | Invoice Credencial Key |
		 * | `invoiceNumber` | string | Package Invoice Number |
		 * | `invoiceUrl` | string | Package Invoice URL |
		 * | `invoiceValue` | string | Package Invoice Value |
		 * | `issuanceDate` | string | Package Issuance Date |
		 * | `items` | string | Items Package Array |
		 * | `description` | string | Item Desciprtion |
		 * | `itemIndex` | string | Item Index |
		 * | `price` | string | Item Price |
		 * | `quantity` | string | Item Quantity |
		 * | `unitMultiplier` | string | Unit Multiplier |
		 * | `trackingNumber` | string | Package Tracking Number |
		 * | `trackingUrl` | string | Tracking Order URL |
		 * | `type` | string | Invoice Type, expected values "Output" and "Input" |
		 * | `paymentData` | object | Payment Object |
		 * | `transactions` | object | Transactions Object |
		 * | `isActive` | boolean | If the payment is Active |
		 * | `merchantName` | string | Merchant Name|
		 * | `payments` | object | Payment Object |
		 * | `cardHolder` | string | Payment Card Holder |
		 * | `connectorResponses` | object | Connector Responses Object |
		 * | `billingAddress` | object | Billing Address information |
		 * | `Message` | string | Connector Responses Message |
		 * | `ReturnCode` | string | Connector Return Code |
		 * | `Tid` | string | Connector Transaction ID |
		 * | `acquirer` | string | Connector acquirer |
		 * | `authId` | string | Connector authorization ID |
		 * | `dueDate` | string | Payment due date |
		 * | `firstDigits` | string | Payment card first digits |
		 * | `giftCardCaption` | string | Gift card caption |
		 * | `giftCardId` | string | Gift card ID |
		 * | `giftCardName` | string | Gift card name |
		 * | `group` | string | Payment group |
		 * | `id` | string | Payment ID |
		 * | `installments` | string | Payment installments quantity |
		 * | `lastDigits` | string | Payment card last digits |
		 * | `paymentSystem` | string | Payment system type ID |
		 * | `paymentSystemName` | string | Payment system name |
		 * | `redemptionCode` | string | Gift card redemption code |
		 * | `referenceValue` | string | Payment reference value |
		 * | `tid` | string | Payment transaction ID |
		 * | `url` | string | Payment URL |
		 * | `value` | string | Payment value with interest if it applies |
		 * | `transactionId` | string | Transaction Id |
		 * | `ratesAndBenefitsData` | string | Rates and Benefits Data Object |
		 * | `id` | string |  Object ID, expected value "ratesAndBenefitsData" |
		 * | `rateAndBenefitsIdentifiers` | object | Rates and Benefits Details Object |
		 * | `additionalInfo` | string |  Rates and Benefits Additional Info |
		 * | `description` | string | Rates and Benefits Description |
		 * | `featured` | string |  If is allowed to acumulate the Rates and Benefits |
		 * | `matchedParameters` | object | March Parameters Array |
		 * | `name` | string |  Rates and Benefits Name |
		 * | `roundingError` | integer | Rounding Error Total Amount  |
		 * | `salesChannel` | string | Order Sales Channel Id |
		 * | `sellerOrderId` | string | Order Seller Id |
		 * | `sellers` | object | Sellers Array |
		 * | `id` | string | Seller Id |
		 * | `logo` | string | URL Seller Logo |
		 * | `name` | string | Seller Name |
		 * | `sequence` | string | Order Sequence ID |
		 * | `shippingData` | object | Shipping Data Object |
		 * | `address` | object | Shipping Address |
		 * | `addressId` | string | Shipping Address Id |
		 * | `addressType` | string | Shipping Address Type |
		 * | `city` | string | Shipping City |
		 * | `complement` | string | Shipping Complement |
		 * | `country` | string | Shipping Country in ISO 3166 ALPHA-3 abbreviation  |
		 * | `geoCoordinates` | object | Shipping Geo Coordinates Array |
		 * | `neighborhood` | string | Shipping Neighborhood |
		 * | `number` | string | Shipping Number |
		 * | `postalCode` | string | Shipping Postal Code |
		 * | `receiverName` | string | Shipping Receiver Name |
		 * | `reference` | string | Shipping Reference |
		 * | `state` | string | Shipping State |
		 * | `street` | string | Shipping Street |
		 * | `id` | string | Object ID, expected value "shippingData"|
		 * | `logisticsInfo` | object | Logistics Info Object |
		 * | `addressId` | string | Adress Id |
		 * | `deliveryChannel` | string | Delivery Channel, allowed values "delivery" or "pickup-in-point" |
		 * | `deliveryCompany` | string | Courier Company Name |
		 * | `deliveryIds` | object | Delivery Ids Object |
		 * | `courierId` | string | Courier Id |
		 * | `courierName` | string | Courier Name |
		 * | `dockId` | string | Releated Dock Id |
		 * | `quantity` | integer | Items Quantity |
		 * | `warehouseId` | string | Releated Warehouse Id |
		 * | `deliveryWindow` | object | Delivery Window Object |
		 * | `endDateUtc` | string | Delivery Date End in UTC  |
		 * | `price` | string | Delivery Window Cost |
		 * | `startDateUtc` | string | Delivery Date Starts in UTC |
		 * | `itemIndex` | integer | Logistic Info Item Index |
		 * | `listPrice` | integer | Logistic Info Item List Price |
		 * | `lockTTL` | string | Stock reservation waiting period |
		 * | `pickupStoreInfo` | object | Pickup Store Info Object |
		 * | `additionalInfo` | string | Pickup Store Additional Info |
		 * | `address` | string | Pickup Store Address |
		 * | `dockId` | string | Pickup Store Releated Dock Id |
		 * | `friendlyName` | string | Pickup Store Friendly Name |
		 * | `isPickupStore` | boolean | If is a Pickup Store |
		 * | `polygonName` | string | Releated Polygom Name |
		 * | `price` | integer | Logistic Info Item Price |
		 * | `selectedSla` | string | Selected SLA |
		 * | `sellingPrice` | integer | Logistic Info Item Selling Price |
		 * | `shippingEstimate` | string | Estimate Shipping Duration |
		 * | `shippingEstimateDate` | string | Estimate Shipping Date |
		 * | `shipsTo` | object | Shipping Country in ISO 3166 ALPHA-3 abbreviation |
		 * | `slas` | object | SLAs Object |
		 * | `deliveryChannel` | string | Delivery Channel, allowed values "delivery" or "pickup-in-point" |
		 * | `deliveryWindow` | object | Delivery Window Object |
		 * | `endDateUtc` | string | Delivery Date End in UTC  |
		 * | `price` | string | Delivery Window Cost |
		 * | `startDateUtc` | string | Delivery Date Starts in UTC |
		 * | `id` | string | SLA Id |
		 * | `pickupStoreInfo` | object | Pickup Store Details Object |
		 * | `additionalInfo` | string | Pickup Store Additional Info |
		 * | `address` | string | Pickup Store Address |
		 * | `dockId` | string | Pickup Store releated Dock Id  |
		 * | `friendlyName` | string | Pickup Store Friendly Name |
		 * | `isPickupStore` | boolean | If is a Pickup Store |
		 * | `polygonName` | string | Releated Polygon Name |
		 * | `price` | integer | SLA Price |
		 * | `shippingEstimate` | string | SLA Shipping Estimate |
		 * | `selectedAddresses` | object | Selected Address Details Object |
		 * | `addressId` | string | Shipping Address Id |
		 * | `addressType` | string | Shipping Address Type |
		 * | `city` | string | Shipping City |
		 * | `complement` | string | Shipping Complement |
		 * | `country` | string | Shipping Country in ISO 3166 ALPHA-3 abbreviation  |
		 * | `geoCoordinates` | object | Shipping Geo Coordinates Array |
		 * | `neighborhood` | string | Shipping Neighborhood |
		 * | `number` | string | Shipping Number |
		 * | `postalCode` | string | Shipping Postal Code |
		 * | `receiverName` | string | Shipping Receiver Name |
		 * | `reference` | string | Shipping Reference |
		 * | `state` | string | Shipping State |
		 * | `street` | string | Shipping Street |
		 * | `trackingHints` | array | Array of tracking hint objects, containing `"courierName"`, `"trackingId"`, `"trackingLabel"`, and `"trackingUrl"` |
		 * | `status` | string | Order Status |
		 * | `statusDescription` | string | Status Description |
		 * | `storePreferencesData` | object | Store Preferences Data Object |
		 * | `countryCode` | string | Country Code in ISO 3166 ALPHA-3 abbreviation |
		 * | `currencyCode` | string | Currency Code in ISO 4217  |
		 * | `currencyFormatInfo` | object | Currency Format Info Object |
		 * | `CurrencyDecimalDigits` | integer | Currency Decimal Digits |
		 * | `CurrencyDecimalSeparator` | string | Currency Decimal Separator |
		 * | `CurrencyGroupSeparator` | string | Currency Group Separator |
		 * | `CurrencyGroupSize` | integer | Currency Group Size |
		 * | `StartsWithCurrencySymbol` | boolean | If Starts With Currency Symbol |
		 * | `currencyLocale` | integer | LCID Decimal |
		 * | `currencySymbol` | string | Currency Symbol |
		 * | `timeZone` | string | Order Time Zone |
		 * | `totals` | object | Totals Object |
		 * | `id` | string | Totals Ids, expected values: "Items", "Discounts", "Shipping" and "Tax" |
		 * | `name` | string | Totals ID Description |
		 * | `value` | integer | Totals Value |
		 * | `value` | integer | Order Value |
		 * Get api/orders/pvt/document/{orderId}
		 * @param {string} orderId ID of the order.
		 * @param {string} reason Reason for requesting unmasked data.
		 * @return {GetOrder2Return} OK
		 */
		GetOrder2(orderId: string, reason: string | null | undefined): Observable<GetOrder2Return> {
			return this.http.get<GetOrder2Return>(this.baseUri + 'api/orders/pvt/document/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '&reason=' + (reason == null ? '' : encodeURIComponent(reason)), {});
		}

		/**
		 * Start handling order
		 * Change the status of an order to indicate that is is in `handling`.
		 * > Expect a `status 204` response with no content in case of a successful request.
		 * > The `Change order workflow status` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).
		 * Post api/orders/pvt/document/{orderId}/actions/start-handling
		 * @param {string} orderId ID of the order.
		 * @return {void} 
		 */
		StartHandling2(orderId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/orders/pvt/document/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/actions/start-handling', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel order
		 * You should use this endpoint to cancel an order by its `orderId`.
		 * A common scenario is one where the seller has a problem with the order fulfillment and needs to request the order cancellation to the marketplace. To do this, the seller would need to make this request, passing the `orderId` in the URL.
		 * You should expect a response with the date when the notification was received, the orderId, and a receipt protocol code.
		 * Be aware that if the order status is already `Invoiced`, the order can only be canceled if - before using this request - you send a return invoice through the [Order Invoice Notification endpoint](https://developers.vtex.com/reference/invoice#invoicenotification).
		 * > The `Cancel order` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).
		 * Post api/orders/pvt/document/{orderId}/cancel
		 * @param {string} orderId ID of the order.
		 * @return {CancelOrder2Return} OK
		 */
		CancelOrder2(orderId: string, requestBody: CancelOrder2PostBody): Observable<CancelOrder2Return> {
			return this.http.post<CancelOrder2Return>(this.baseUri + 'api/orders/pvt/document/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Order invoice notification
		 * Once the order is invoiced, the seller should use this request to send the invoice information to the marketplace.
		 * We strongly recommend that you always send the object of the invoiced items. With this practice, rounding errors will be avoided.
		 * It is not allowed to use the same `invoiceNumber` in more than one request to the Order Invoice Notification endpoint.
		 * Be aware that this endpoint is also used by the seller to send the order tracking information. This, however, should be done in a separate moment, once the seller has the tracking information.
		 * > The `Notify invoice` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).
		 * Post api/orders/pvt/document/{orderId}/invoices
		 * @param {string} orderId ID of the order.
		 * @return {InvoiceNotification2Return} OK
		 */
		InvoiceNotification2(orderId: string, requestBody: InvoiceNotificationRequest): Observable<InvoiceNotification2Return> {
			return this.http.post<InvoiceNotification2Return>(this.baseUri + 'api/orders/pvt/document/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/invoices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Send payment notification
		 * Send a payment notification of a given order, by order ID and payment ID.
		 * > The `Notify payment` resource is needed to use this API request. This is included in `OMS - Full access` and `IntegrationProfile - Fulfillment Oms`, among other default roles available in the Admin. Learn more about the [License manager roles and resources](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#).
		 * > Learn more about [Transaction Details](https://help.vtex.com/en/tutorial/how-to-view-the-orders-details).
		 * ## Request body properties
		 * | Attribute    | Type        | Description |
		 * | --------------- |:---------:| --------------------------------------:|
		 * | `orderId` | string | Order Id |
		 * | `paymentId` | string | Payment ID |
		 * Post api/orders/pvt/document/{orderId}/payment/{paymentId}/notify-payment
		 * @param {string} orderId ID of the order.
		 * @param {string} paymentId ID of the payment.
		 * @return {void} OK
		 */
		SendPaymentNotification2(orderId: string, paymentId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/orders/pvt/document/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/payment/' + (paymentId == null ? '' : encodeURIComponent(paymentId)) + '/notify-payment', null, { observe: 'response', responseType: 'text' });
		}
	}

	export interface ListOrders2PostBody {

		/**
		 * Concatened value sufix {{creationDate}} and range date in Timestamp format.
		 * Required
		 */
		f_creationDate: string;

		/**
		 * Number of the page to be retrieved.
		 * Required
		 */
		page: number;

		/**
		 * Number of orders per page.
		 * Required
		 */
		per_page: number;

		/** Full-text search for the orders. */
		q?: string | null;
	}
	export interface ListOrders2PostBodyFormProperties {

		/**
		 * Concatened value sufix {{creationDate}} and range date in Timestamp format.
		 * Required
		 */
		f_creationDate: FormControl<string | null | undefined>,

		/**
		 * Number of the page to be retrieved.
		 * Required
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Number of orders per page.
		 * Required
		 */
		per_page: FormControl<number | null | undefined>,

		/** Full-text search for the orders. */
		q: FormControl<string | null | undefined>,
	}
	export function CreateListOrders2PostBodyFormGroup() {
		return new FormGroup<ListOrders2PostBodyFormProperties>({
			f_creationDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			q: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOrder2Return {

		/** Three letter code identifying the marketplace where the order was placed. */
		affiliateId?: string | null;

		/** Indicates whether cancelation is allowed for the order. */
		allowCancellation?: boolean | null;

		/** Indicates whether edition is allowed for the order. */
		allowEdition?: boolean | null;

		/** User that approved the order, in case of manual approval. */
		approvedBy?: string | null;

		/** Date in which the order was authorized in UTC. */
		authorizedDate?: string | null;

		/** Call center operator data. */
		callCenterOperatorData?: string | null;

		/** Reason for cancelation. */
		cancelReason?: string | null;

		/** User that canceled the order. */
		cancelledBy?: string | null;
		changesAttachment?: ChangesAttachment;
		clientProfileData?: ClientProfileData;

		/** Commercial condition data. */
		commercialConditionData?: string | null;

		/** Creation date. */
		creationDate?: string | null;

		/** Custom data. */
		customData?: string | null;

		/** Email tracked. */
		emailTracked?: string | null;

		/** Follow up email. */
		followUpEmail?: string | null;

		/** Gift registry data. */
		giftRegistryData?: string | null;

		/** Host name. */
		hostname?: string | null;

		/** Information pertinent to the order's invoice. */
		invoiceData?: string | null;

		/** Date in which the order was invoiced in UTC. */
		invoicedDate?: string | null;

		/** Indicates whether client is checked in. */
		isCheckedIn?: boolean | null;

		/** Indicates whether order is completed. */
		isCompleted?: boolean | null;

		/** Information on each item in the order. */
		GetOrder2ReturnItems?: Array<GetOrder2ReturnItems>;

		/** Date of last change. */
		lastChange?: string | null;

		/** Last message. */
		lastMessage?: string | null;

		/** Marketing data. */
		marketingData?: string | null;
		marketplace?: Marketplace;

		/** Marketplace items. */
		marketplaceItems?: Array<string>;

		/** ID of the order in the marketplace. */
		marketplaceOrderId?: string | null;

		/** Marketplace endpoint for post purchase communication. */
		marketplaceServicesEndpoint?: string | null;

		/** Merchant name. */
		merchantName?: string | null;

		/** Open text field. */
		openTextField?: string | null;

		/** ID of the shopping cart from which the order was created. */
		orderFormId?: string | null;

		/** Order group. */
		orderGroup?: string | null;

		/** Order ID. */
		orderId?: string | null;

		/** Origin. */
		origin?: string | null;

		/** Package attachment. */
		packageAttachment?: GetOrder2ReturnPackageAttachment;
		paymentData?: PaymentData;
		ratesAndBenefitsData?: RatesAndBenefitsData;

		/** Rounding error in cents. */
		roundingError?: number | null;

		/** Sales channel. */
		salesChannel?: string | null;

		/** Seller order ID. */
		sellerOrderId?: string | null;

		/** Array with sellers information. */
		sellers?: Array<Seller>;

		/** Sequence number. */
		sequence?: string | null;
		shippingData?: ShippingData;

		/** Status in the order workflow. */
		status?: string | null;

		/** Status description which is displayed on the Admin panel. */
		statusDescription?: string | null;
		storePreferencesData?: StorePreferencesData;

		/** Information on each of the order's totals. */
		GetOrder2ReturnTotals?: Array<GetOrder2ReturnTotals>;

		/** Value in cents. */
		value?: number | null;
	}
	export interface GetOrder2ReturnFormProperties {

		/** Three letter code identifying the marketplace where the order was placed. */
		affiliateId: FormControl<string | null | undefined>,

		/** Indicates whether cancelation is allowed for the order. */
		allowCancellation: FormControl<boolean | null | undefined>,

		/** Indicates whether edition is allowed for the order. */
		allowEdition: FormControl<boolean | null | undefined>,

		/** User that approved the order, in case of manual approval. */
		approvedBy: FormControl<string | null | undefined>,

		/** Date in which the order was authorized in UTC. */
		authorizedDate: FormControl<string | null | undefined>,

		/** Call center operator data. */
		callCenterOperatorData: FormControl<string | null | undefined>,

		/** Reason for cancelation. */
		cancelReason: FormControl<string | null | undefined>,

		/** User that canceled the order. */
		cancelledBy: FormControl<string | null | undefined>,

		/** Commercial condition data. */
		commercialConditionData: FormControl<string | null | undefined>,

		/** Creation date. */
		creationDate: FormControl<string | null | undefined>,

		/** Custom data. */
		customData: FormControl<string | null | undefined>,

		/** Email tracked. */
		emailTracked: FormControl<string | null | undefined>,

		/** Follow up email. */
		followUpEmail: FormControl<string | null | undefined>,

		/** Gift registry data. */
		giftRegistryData: FormControl<string | null | undefined>,

		/** Host name. */
		hostname: FormControl<string | null | undefined>,

		/** Information pertinent to the order's invoice. */
		invoiceData: FormControl<string | null | undefined>,

		/** Date in which the order was invoiced in UTC. */
		invoicedDate: FormControl<string | null | undefined>,

		/** Indicates whether client is checked in. */
		isCheckedIn: FormControl<boolean | null | undefined>,

		/** Indicates whether order is completed. */
		isCompleted: FormControl<boolean | null | undefined>,

		/** Date of last change. */
		lastChange: FormControl<string | null | undefined>,

		/** Last message. */
		lastMessage: FormControl<string | null | undefined>,

		/** Marketing data. */
		marketingData: FormControl<string | null | undefined>,

		/** ID of the order in the marketplace. */
		marketplaceOrderId: FormControl<string | null | undefined>,

		/** Marketplace endpoint for post purchase communication. */
		marketplaceServicesEndpoint: FormControl<string | null | undefined>,

		/** Merchant name. */
		merchantName: FormControl<string | null | undefined>,

		/** Open text field. */
		openTextField: FormControl<string | null | undefined>,

		/** ID of the shopping cart from which the order was created. */
		orderFormId: FormControl<string | null | undefined>,

		/** Order group. */
		orderGroup: FormControl<string | null | undefined>,

		/** Order ID. */
		orderId: FormControl<string | null | undefined>,

		/** Origin. */
		origin: FormControl<string | null | undefined>,

		/** Rounding error in cents. */
		roundingError: FormControl<number | null | undefined>,

		/** Sales channel. */
		salesChannel: FormControl<string | null | undefined>,

		/** Seller order ID. */
		sellerOrderId: FormControl<string | null | undefined>,

		/** Sequence number. */
		sequence: FormControl<string | null | undefined>,

		/** Status in the order workflow. */
		status: FormControl<string | null | undefined>,

		/** Status description which is displayed on the Admin panel. */
		statusDescription: FormControl<string | null | undefined>,

		/** Value in cents. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateGetOrder2ReturnFormGroup() {
		return new FormGroup<GetOrder2ReturnFormProperties>({
			affiliateId: new FormControl<string | null | undefined>(undefined),
			allowCancellation: new FormControl<boolean | null | undefined>(undefined),
			allowEdition: new FormControl<boolean | null | undefined>(undefined),
			approvedBy: new FormControl<string | null | undefined>(undefined),
			authorizedDate: new FormControl<string | null | undefined>(undefined),
			callCenterOperatorData: new FormControl<string | null | undefined>(undefined),
			cancelReason: new FormControl<string | null | undefined>(undefined),
			cancelledBy: new FormControl<string | null | undefined>(undefined),
			commercialConditionData: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<string | null | undefined>(undefined),
			customData: new FormControl<string | null | undefined>(undefined),
			emailTracked: new FormControl<string | null | undefined>(undefined),
			followUpEmail: new FormControl<string | null | undefined>(undefined),
			giftRegistryData: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			invoiceData: new FormControl<string | null | undefined>(undefined),
			invoicedDate: new FormControl<string | null | undefined>(undefined),
			isCheckedIn: new FormControl<boolean | null | undefined>(undefined),
			isCompleted: new FormControl<boolean | null | undefined>(undefined),
			lastChange: new FormControl<string | null | undefined>(undefined),
			lastMessage: new FormControl<string | null | undefined>(undefined),
			marketingData: new FormControl<string | null | undefined>(undefined),
			marketplaceOrderId: new FormControl<string | null | undefined>(undefined),
			marketplaceServicesEndpoint: new FormControl<string | null | undefined>(undefined),
			merchantName: new FormControl<string | null | undefined>(undefined),
			openTextField: new FormControl<string | null | undefined>(undefined),
			orderFormId: new FormControl<string | null | undefined>(undefined),
			orderGroup: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			roundingError: new FormControl<number | null | undefined>(undefined),
			salesChannel: new FormControl<string | null | undefined>(undefined),
			sellerOrderId: new FormControl<string | null | undefined>(undefined),
			sequence: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			statusDescription: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetOrder2ReturnItems {

		/** Additional information. */
		additionalInfo?: GetOrder2ReturnItemsAdditionalInfo;

		/** Array containing information on attachments. */
		attachments?: Array<string>;

		/** Availability */
		availability?: string | null;

		/** Information on services sold along with the SKU. Example: a gift package. */
		GetOrder2ReturnItemsBundleItems?: Array<GetOrder2ReturnItemsBundleItems>;

		/** Detail URL. */
		detailUrl?: string | null;

		/** European Article Number. */
		ean?: string | null;

		/** ID. */
		id?: string | null;

		/** Image URL. */
		imageUrl?: string | null;

		/** Indicates whether item is a gift. */
		isGift?: boolean | null;

		/** List price in cents. */
		listPrice?: number | null;

		/** Manual price in cents. */
		manualPrice?: number | null;

		/** User that applied the manual price, if that is the case. */
		manualPriceAppliedBy?: string | null;

		/** Manufacturer code. */
		manufacturerCode?: string | null;

		/** Measurement unit */
		measurementUnit?: string | null;

		/** Modal type. */
		modalType?: string | null;

		/** Name. */
		name?: string | null;

		/** Parent assembly binding. */
		parentAssemblyBinding?: string | null;

		/** Parent item index. */
		parentItemIndex?: number | null;

		/** Presale date. */
		preSaleDate?: string | null;

		/** Price in cents. */
		price?: number | null;

		/** Price information. */
		priceDefinition?: GetOrder2ReturnItemsPriceDefinition;

		/** Array of price tags, each of which, modifies the price in some way, like discounts or rates that apply to the item in the context of the order. */
		GetOrder2ReturnItemsPriceTags?: Array<GetOrder2ReturnItemsPriceTags>;

		/** Price expiration date and time. */
		priceValidUntil?: string | null;

		/** Object, where each field is an ID from `productCategoryIds. */
		productCategories?: GetOrder2ReturnItemsProductCategories;

		/** Product category IDs. */
		productCategoryIds?: string | null;

		/** Product ID. */
		productId?: string | null;

		/** Product Ref ID. */
		productRefId?: string | null;

		/** Quantity. */
		quantity?: number | null;

		/** Ref ID. */
		refId?: string | null;

		/** Reward value in cents. */
		rewardValue?: number | null;

		/** Seller. */
		seller?: string | null;

		/** Sellers involved in the chain. The list should contain only one seller, unless it is a [Multilevel Omnichannel Inventory](https://help.vtex.com/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) order. */
		sellerChain?: Array<string>;

		/** Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead. */
		sellingPrice?: number | null;

		/** SKU name. */
		skuName?: string | null;

		/** Tax value in cents. */
		tax?: number | null;

		/** Order's item unique ID. */
		uniqueId?: string | null;

		/** Unit multiplier */
		unitMultiplier?: number | null;
	}
	export interface GetOrder2ReturnItemsFormProperties {

		/** Availability */
		availability: FormControl<string | null | undefined>,

		/** Detail URL. */
		detailUrl: FormControl<string | null | undefined>,

		/** European Article Number. */
		ean: FormControl<string | null | undefined>,

		/** ID. */
		id: FormControl<string | null | undefined>,

		/** Image URL. */
		imageUrl: FormControl<string | null | undefined>,

		/** Indicates whether item is a gift. */
		isGift: FormControl<boolean | null | undefined>,

		/** List price in cents. */
		listPrice: FormControl<number | null | undefined>,

		/** Manual price in cents. */
		manualPrice: FormControl<number | null | undefined>,

		/** User that applied the manual price, if that is the case. */
		manualPriceAppliedBy: FormControl<string | null | undefined>,

		/** Manufacturer code. */
		manufacturerCode: FormControl<string | null | undefined>,

		/** Measurement unit */
		measurementUnit: FormControl<string | null | undefined>,

		/** Modal type. */
		modalType: FormControl<string | null | undefined>,

		/** Name. */
		name: FormControl<string | null | undefined>,

		/** Parent assembly binding. */
		parentAssemblyBinding: FormControl<string | null | undefined>,

		/** Parent item index. */
		parentItemIndex: FormControl<number | null | undefined>,

		/** Presale date. */
		preSaleDate: FormControl<string | null | undefined>,

		/** Price in cents. */
		price: FormControl<number | null | undefined>,

		/** Price expiration date and time. */
		priceValidUntil: FormControl<string | null | undefined>,

		/** Product category IDs. */
		productCategoryIds: FormControl<string | null | undefined>,

		/** Product ID. */
		productId: FormControl<string | null | undefined>,

		/** Product Ref ID. */
		productRefId: FormControl<string | null | undefined>,

		/** Quantity. */
		quantity: FormControl<number | null | undefined>,

		/** Ref ID. */
		refId: FormControl<string | null | undefined>,

		/** Reward value in cents. */
		rewardValue: FormControl<number | null | undefined>,

		/** Seller. */
		seller: FormControl<string | null | undefined>,

		/** Selling price in cents. Note that this field may be subject to rounding discrepancies. We recommend retrieving data from the `priceDefinition` data structure instead. */
		sellingPrice: FormControl<number | null | undefined>,

		/** SKU name. */
		skuName: FormControl<string | null | undefined>,

		/** Tax value in cents. */
		tax: FormControl<number | null | undefined>,

		/** Order's item unique ID. */
		uniqueId: FormControl<string | null | undefined>,

		/** Unit multiplier */
		unitMultiplier: FormControl<number | null | undefined>,
	}
	export function CreateGetOrder2ReturnItemsFormGroup() {
		return new FormGroup<GetOrder2ReturnItemsFormProperties>({
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

	export interface GetOrder2ReturnItemsAdditionalInfo {

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
	export interface GetOrder2ReturnItemsAdditionalInfoFormProperties {

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
	export function CreateGetOrder2ReturnItemsAdditionalInfoFormGroup() {
		return new FormGroup<GetOrder2ReturnItemsAdditionalInfoFormProperties>({
			brandId: new FormControl<string | null | undefined>(undefined),
			brandName: new FormControl<string | null | undefined>(undefined),
			dimension: new FormControl<string | null | undefined>(undefined),
			offeringInfo: new FormControl<string | null | undefined>(undefined),
			offeringType: new FormControl<string | null | undefined>(undefined),
			offeringTypeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOrder2ReturnItemsBundleItems {

		/** Service identifier. */
		id?: number | null;

		/** Name. */
		name?: string | null;

		/** Price in cents. */
		price?: number | null;

		/** Type */
		type?: string | null;
	}
	export interface GetOrder2ReturnItemsBundleItemsFormProperties {

		/** Service identifier. */
		id: FormControl<number | null | undefined>,

		/** Name. */
		name: FormControl<string | null | undefined>,

		/** Price in cents. */
		price: FormControl<number | null | undefined>,

		/** Type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGetOrder2ReturnItemsBundleItemsFormGroup() {
		return new FormGroup<GetOrder2ReturnItemsBundleItemsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOrder2ReturnItemsPriceDefinition {

		/** Calculated selling price in cents. */
		calculatedSellingPrice?: number | null;

		/** Selling prices. */
		GetOrder2ReturnItemsPriceDefinitionSellingPrices?: Array<GetOrder2ReturnItemsPriceDefinitionSellingPrices>;

		/** Total in cents. */
		total?: number | null;
	}
	export interface GetOrder2ReturnItemsPriceDefinitionFormProperties {

		/** Calculated selling price in cents. */
		calculatedSellingPrice: FormControl<number | null | undefined>,

		/** Total in cents. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateGetOrder2ReturnItemsPriceDefinitionFormGroup() {
		return new FormGroup<GetOrder2ReturnItemsPriceDefinitionFormProperties>({
			calculatedSellingPrice: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetOrder2ReturnItemsPriceDefinitionSellingPrices {

		/** Quantity. */
		quantity?: number | null;

		/** Value in cents. */
		value?: number | null;
	}
	export interface GetOrder2ReturnItemsPriceDefinitionSellingPricesFormProperties {

		/** Quantity. */
		quantity: FormControl<number | null | undefined>,

		/** Value in cents. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateGetOrder2ReturnItemsPriceDefinitionSellingPricesFormGroup() {
		return new FormGroup<GetOrder2ReturnItemsPriceDefinitionSellingPricesFormProperties>({
			quantity: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetOrder2ReturnItemsPriceTags {

		/** Price tag identifier. */
		identifier?: string | null;

		/** Indicates whether price tag value is applied through a percentage. */
		isPercentual?: boolean | null;

		/** Name. */
		name?: string | null;

		/** Raw value. */
		rawValue?: number | null;

		/** Value. */
		value?: number | null;
	}
	export interface GetOrder2ReturnItemsPriceTagsFormProperties {

		/** Price tag identifier. */
		identifier: FormControl<string | null | undefined>,

		/** Indicates whether price tag value is applied through a percentage. */
		isPercentual: FormControl<boolean | null | undefined>,

		/** Name. */
		name: FormControl<string | null | undefined>,

		/** Raw value. */
		rawValue: FormControl<number | null | undefined>,

		/** Value. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateGetOrder2ReturnItemsPriceTagsFormGroup() {
		return new FormGroup<GetOrder2ReturnItemsPriceTagsFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined),
			isPercentual: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rawValue: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetOrder2ReturnItemsProductCategories {

		/** Product category corresponding to the ID in the field key. */
		'{ID}'?: string | null;
	}
	export interface GetOrder2ReturnItemsProductCategoriesFormProperties {

		/** Product category corresponding to the ID in the field key. */
		'{ID}': FormControl<string | null | undefined>,
	}
	export function CreateGetOrder2ReturnItemsProductCategoriesFormGroup() {
		return new FormGroup<GetOrder2ReturnItemsProductCategoriesFormProperties>({
			'{ID}': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOrder2ReturnPackageAttachment {

		/** Information on each package. */
		GetOrder2ReturnPackageAttachmentPackages?: Array<GetOrder2ReturnPackageAttachmentPackages>;
	}
	export interface GetOrder2ReturnPackageAttachmentFormProperties {
	}
	export function CreateGetOrder2ReturnPackageAttachmentFormGroup() {
		return new FormGroup<GetOrder2ReturnPackageAttachmentFormProperties>({
		});

	}

	export interface GetOrder2ReturnPackageAttachmentPackages {

		/** Fiscal operation code. */
		cfop?: string | null;

		/** Courier. */
		courier?: string | null;

		/** Courier status. */
		courierStatus?: string | null;

		/** Embedded voice in XML. */
		embeddedInvoice?: string | null;

		/** Invoice key. */
		invoiceKey?: string | null;

		/** Invoice number. */
		invoiceNumber?: string | null;

		/** Invoice URL. */
		invoiceUrl?: string | null;

		/** Invoice value in cents. */
		invoiceValue?: number | null;

		/** Issuance date. */
		issuanceDate?: string | null;

		/** Information on each item in the package. */
		GetOrder2ReturnPackageAttachmentPackagesItems?: Array<GetOrder2ReturnPackageAttachmentPackagesItems>;

		/** Information on how restitutions are to be made to the customer, in case of a return (invoice `type` is `input`). */
		restitutions?: GetOrder2ReturnPackageAttachmentPackagesRestitutions;

		/** Tracking number. */
		trackingNumber?: string | null;

		/** Tracking URL. */
		trackingUrl?: string | null;

		/** Invoice type `Output` for sales and `Input` for returns. */
		type?: string | null;

		/** Quantity of packages involved in the order. */
		volumes?: number | null;
	}
	export interface GetOrder2ReturnPackageAttachmentPackagesFormProperties {

		/** Fiscal operation code. */
		cfop: FormControl<string | null | undefined>,

		/** Courier. */
		courier: FormControl<string | null | undefined>,

		/** Courier status. */
		courierStatus: FormControl<string | null | undefined>,

		/** Embedded voice in XML. */
		embeddedInvoice: FormControl<string | null | undefined>,

		/** Invoice key. */
		invoiceKey: FormControl<string | null | undefined>,

		/** Invoice number. */
		invoiceNumber: FormControl<string | null | undefined>,

		/** Invoice URL. */
		invoiceUrl: FormControl<string | null | undefined>,

		/** Invoice value in cents. */
		invoiceValue: FormControl<number | null | undefined>,

		/** Issuance date. */
		issuanceDate: FormControl<string | null | undefined>,

		/** Tracking number. */
		trackingNumber: FormControl<string | null | undefined>,

		/** Tracking URL. */
		trackingUrl: FormControl<string | null | undefined>,

		/** Invoice type `Output` for sales and `Input` for returns. */
		type: FormControl<string | null | undefined>,

		/** Quantity of packages involved in the order. */
		volumes: FormControl<number | null | undefined>,
	}
	export function CreateGetOrder2ReturnPackageAttachmentPackagesFormGroup() {
		return new FormGroup<GetOrder2ReturnPackageAttachmentPackagesFormProperties>({
			cfop: new FormControl<string | null | undefined>(undefined),
			courier: new FormControl<string | null | undefined>(undefined),
			courierStatus: new FormControl<string | null | undefined>(undefined),
			embeddedInvoice: new FormControl<string | null | undefined>(undefined),
			invoiceKey: new FormControl<string | null | undefined>(undefined),
			invoiceNumber: new FormControl<string | null | undefined>(undefined),
			invoiceUrl: new FormControl<string | null | undefined>(undefined),
			invoiceValue: new FormControl<number | null | undefined>(undefined),
			issuanceDate: new FormControl<string | null | undefined>(undefined),
			trackingNumber: new FormControl<string | null | undefined>(undefined),
			trackingUrl: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			volumes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetOrder2ReturnPackageAttachmentPackagesItems {

		/** Item description. */
		description?: string | null;

		/** Item index in reference to the position of the item in the `items` array. */
		itemIndex?: number | null;

		/** Item price in cents. */
		price?: number | null;

		/** Item quantity. */
		quantity?: number | null;

		/** Item unit multiplier. */
		unitMultiplier?: number | null;
	}
	export interface GetOrder2ReturnPackageAttachmentPackagesItemsFormProperties {

		/** Item description. */
		description: FormControl<string | null | undefined>,

		/** Item index in reference to the position of the item in the `items` array. */
		itemIndex: FormControl<number | null | undefined>,

		/** Item price in cents. */
		price: FormControl<number | null | undefined>,

		/** Item quantity. */
		quantity: FormControl<number | null | undefined>,

		/** Item unit multiplier. */
		unitMultiplier: FormControl<number | null | undefined>,
	}
	export function CreateGetOrder2ReturnPackageAttachmentPackagesItemsFormGroup() {
		return new FormGroup<GetOrder2ReturnPackageAttachmentPackagesItemsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			itemIndex: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			unitMultiplier: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetOrder2ReturnPackageAttachmentPackagesRestitutions {

		/** Information on refunds. */
		refund?: GetOrder2ReturnPackageAttachmentPackagesRestitutionsRefund;
	}
	export interface GetOrder2ReturnPackageAttachmentPackagesRestitutionsFormProperties {
	}
	export function CreateGetOrder2ReturnPackageAttachmentPackagesRestitutionsFormGroup() {
		return new FormGroup<GetOrder2ReturnPackageAttachmentPackagesRestitutionsFormProperties>({
		});

	}

	export interface GetOrder2ReturnPackageAttachmentPackagesRestitutionsRefund {

		/** Information on items. */
		GetOrder2ReturnPackageAttachmentPackagesRestitutionsRefundItems?: Array<GetOrder2ReturnPackageAttachmentPackagesRestitutionsRefundItems>;
	}
	export interface GetOrder2ReturnPackageAttachmentPackagesRestitutionsRefundFormProperties {
	}
	export function CreateGetOrder2ReturnPackageAttachmentPackagesRestitutionsRefundFormGroup() {
		return new FormGroup<GetOrder2ReturnPackageAttachmentPackagesRestitutionsRefundFormProperties>({
		});

	}

	export interface GetOrder2ReturnPackageAttachmentPackagesRestitutionsRefundItems {

		/** Item index corresponding to the position of the item in the main `items` array. */
		itemIndex?: string | null;

		/** Quantity. */
		quantity?: number | null;
	}
	export interface GetOrder2ReturnPackageAttachmentPackagesRestitutionsRefundItemsFormProperties {

		/** Item index corresponding to the position of the item in the main `items` array. */
		itemIndex: FormControl<string | null | undefined>,

		/** Quantity. */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateGetOrder2ReturnPackageAttachmentPackagesRestitutionsRefundItemsFormGroup() {
		return new FormGroup<GetOrder2ReturnPackageAttachmentPackagesRestitutionsRefundItemsFormProperties>({
			itemIndex: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetOrder2ReturnTotals {

		/** Order's total ID. */
		id?: string | null;

		/** Order's total name. */
		name?: string | null;

		/** Order's total value. */
		value?: number | null;
	}
	export interface GetOrder2ReturnTotalsFormProperties {

		/** Order's total ID. */
		id: FormControl<string | null | undefined>,

		/** Order's total name. */
		name: FormControl<string | null | undefined>,

		/** Order's total value. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateGetOrder2ReturnTotalsFormGroup() {
		return new FormGroup<GetOrder2ReturnTotalsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CancelOrder2PostBody {

		/** Reason for cancelling the order. */
		reason?: string | null;
	}
	export interface CancelOrder2PostBodyFormProperties {

		/** Reason for cancelling the order. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateCancelOrder2PostBodyFormGroup() {
		return new FormGroup<CancelOrder2PostBodyFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CancelOrder2Return {

		/** Date and time when the notification was received. */
		date?: string | null;

		/** Identification of the order in the seller. */
		orderId?: string | null;

		/** Protocol code generated by the update. It may be `null`. */
		receipt?: string | null;
	}
	export interface CancelOrder2ReturnFormProperties {

		/** Date and time when the notification was received. */
		date: FormControl<string | null | undefined>,

		/** Identification of the order in the seller. */
		orderId: FormControl<string | null | undefined>,

		/** Protocol code generated by the update. It may be `null`. */
		receipt: FormControl<string | null | undefined>,
	}
	export function CreateCancelOrder2ReturnFormGroup() {
		return new FormGroup<CancelOrder2ReturnFormProperties>({
			date: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			receipt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvoiceNotification2Return {

		/** Date and time when the notification was received. */
		date?: string | null;

		/** Identification of the order in the seller. */
		orderId?: string | null;

		/** Protocol code generated by the update. It may be `null`. */
		receipt?: string | null;
	}
	export interface InvoiceNotification2ReturnFormProperties {

		/** Date and time when the notification was received. */
		date: FormControl<string | null | undefined>,

		/** Identification of the order in the seller. */
		orderId: FormControl<string | null | undefined>,

		/** Protocol code generated by the update. It may be `null`. */
		receipt: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceNotification2ReturnFormGroup() {
		return new FormGroup<InvoiceNotification2ReturnFormProperties>({
			date: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			receipt: new FormControl<string | null | undefined>(undefined),
		});

	}

}

