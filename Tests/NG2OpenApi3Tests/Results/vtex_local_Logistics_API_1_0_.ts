import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Address {

		/** Required */
		city: string;

		/** Required */
		complement: string;

		/** Required */
		coordinates: string;

		/** Required */
		country: AddressCountry;

		/** Required */
		neighborhood: string;

		/** Required */
		number: string;

		/** Required */
		postalCode: string;

		/** Required */
		state: string;

		/** Required */
		street: string;
	}
	export interface AddressFormProperties {

		/** Required */
		city: FormControl<string | null | undefined>,

		/** Required */
		complement: FormControl<string | null | undefined>,

		/** Required */
		coordinates: FormControl<string | null | undefined>,

		/** Required */
		neighborhood: FormControl<string | null | undefined>,

		/** Required */
		number: FormControl<string | null | undefined>,

		/** Required */
		postalCode: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<string | null | undefined>,

		/** Required */
		street: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			complement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			coordinates: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			neighborhood: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			street: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddressCountry {

		/** Required */
		acronym: string;

		/** Required */
		name: string;
	}
	export interface AddressCountryFormProperties {

		/** Required */
		acronym: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAddressCountryFormGroup() {
		return new FormGroup<AddressCountryFormProperties>({
			acronym: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Address1 {

		/** Required */
		city: string;

		/** Required */
		complement: string;

		/** Required */
		coordinates: Array<string>;

		/** Required */
		country: Address1Country;

		/** Required */
		neighborhood: string;

		/** Required */
		number: string;

		/** Required */
		postalCode: string;

		/** Required */
		state: string;

		/** Required */
		street: string;
	}
	export interface Address1FormProperties {

		/** Required */
		city: FormControl<string | null | undefined>,

		/** Required */
		complement: FormControl<string | null | undefined>,

		/** Required */
		neighborhood: FormControl<string | null | undefined>,

		/** Required */
		number: FormControl<string | null | undefined>,

		/** Required */
		postalCode: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<string | null | undefined>,

		/** Required */
		street: FormControl<string | null | undefined>,
	}
	export function CreateAddress1FormGroup() {
		return new FormGroup<Address1FormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			complement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			neighborhood: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			street: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Address1Country {

		/** Required */
		acronym: string;

		/** Required */
		name: string;
	}
	export interface Address1CountryFormProperties {

		/** Required */
		acronym: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAddress1CountryFormGroup() {
		return new FormGroup<Address1CountryFormProperties>({
			acronym: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Address2 {

		/** Required */
		city: string;

		/** Required */
		complement: string;

		/** Required */
		country: Address2Country;

		/** Required */
		location: Address2Location;

		/** Required */
		neighborhood: string;

		/** Required */
		number: string;

		/** Required */
		postalCode: string;

		/** Required */
		reference: string;

		/** Required */
		state: string;

		/** Required */
		street: string;
	}
	export interface Address2FormProperties {

		/** Required */
		city: FormControl<string | null | undefined>,

		/** Required */
		complement: FormControl<string | null | undefined>,

		/** Required */
		neighborhood: FormControl<string | null | undefined>,

		/** Required */
		number: FormControl<string | null | undefined>,

		/** Required */
		postalCode: FormControl<string | null | undefined>,

		/** Required */
		reference: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<string | null | undefined>,

		/** Required */
		street: FormControl<string | null | undefined>,
	}
	export function CreateAddress2FormGroup() {
		return new FormGroup<Address2FormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			complement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			neighborhood: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			street: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Address2Country {

		/** Required */
		acronym: string;

		/** Required */
		name: string;
	}
	export interface Address2CountryFormProperties {

		/** Required */
		acronym: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAddress2CountryFormGroup() {
		return new FormGroup<Address2CountryFormProperties>({
			acronym: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Address2Location {

		/**
		 * Required
		 * Type: double
		 */
		latitude: number;

		/**
		 * Required
		 * Type: double
		 */
		longitude: number;
	}
	export interface Address2LocationFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateAddress2LocationFormGroup() {
		return new FormGroup<Address2LocationFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Address4 {

		/** Required */
		city: string;

		/** Required */
		complement: string;

		/** Required */
		country: Address4Country;

		/** Required */
		location: Address4Location;

		/** Required */
		neighborhood: string;

		/** Required */
		number: string;

		/** Required */
		postalCode: string;

		/** Required */
		state: string;

		/** Required */
		street: string;
	}
	export interface Address4FormProperties {

		/** Required */
		city: FormControl<string | null | undefined>,

		/** Required */
		complement: FormControl<string | null | undefined>,

		/** Required */
		neighborhood: FormControl<string | null | undefined>,

		/** Required */
		number: FormControl<string | null | undefined>,

		/** Required */
		postalCode: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<string | null | undefined>,

		/** Required */
		street: FormControl<string | null | undefined>,
	}
	export function CreateAddress4FormGroup() {
		return new FormGroup<Address4FormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			complement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			neighborhood: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			street: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Address4Country {

		/** Required */
		acronym: string;

		/** Required */
		name: string;
	}
	export interface Address4CountryFormProperties {

		/** Required */
		acronym: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAddress4CountryFormGroup() {
		return new FormGroup<Address4CountryFormProperties>({
			acronym: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Address4Location {

		/**
		 * Required
		 * Type: double
		 */
		latitude: number;

		/**
		 * Required
		 * Type: double
		 */
		longitude: number;
	}
	export interface Address4LocationFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateAddress4LocationFormGroup() {
		return new FormGroup<Address4LocationFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Balance {

		/** Required */
		hasUnlimitedQuantity: boolean;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reservedQuantity: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalQuantity: number;

		/** Required */
		warehouseId: string;

		/** Required */
		warehouseName: string;
	}
	export interface BalanceFormProperties {

		/** Required */
		hasUnlimitedQuantity: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reservedQuantity: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalQuantity: FormControl<number | null | undefined>,

		/** Required */
		warehouseId: FormControl<string | null | undefined>,

		/** Required */
		warehouseName: FormControl<string | null | undefined>,
	}
	export function CreateBalanceFormGroup() {
		return new FormGroup<BalanceFormProperties>({
			hasUnlimitedQuantity: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			reservedQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			totalQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			warehouseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			warehouseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BusinessHour {

		/** Required */
		closingTime: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: number;

		/** Required */
		openingTime: string;
	}
	export interface BusinessHourFormProperties {

		/** Required */
		closingTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: FormControl<number | null | undefined>,

		/** Required */
		openingTime: FormControl<string | null | undefined>,
	}
	export function CreateBusinessHourFormGroup() {
		return new FormGroup<BusinessHourFormProperties>({
			closingTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dayOfWeek: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			openingTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CalculateSLARequest {

		/** Required */
		CalculateSLARequestItems: Array<CalculateSLARequestItems>;

		/** Required */
		location: CalculateSLARequestLocation;

		/** Required */
		salesChannel: string;
	}
	export interface CalculateSLARequestFormProperties {

		/** Required */
		salesChannel: FormControl<string | null | undefined>,
	}
	export function CreateCalculateSLARequestFormGroup() {
		return new FormGroup<CalculateSLARequestFormProperties>({
			salesChannel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CalculateSLARequestItems {

		/** Required */
		additionalHandlingTime: string;

		/** Required */
		dimension: CalculateSLARequestItemsDimension;

		/** Required */
		groupItemId: string;

		/** Required */
		id: string;

		/** Required */
		CalculateSLARequestItemsKitItem: Array<CalculateSLARequestItemsKitItem>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;
	}
	export interface CalculateSLARequestItemsFormProperties {

		/** Required */
		additionalHandlingTime: FormControl<string | null | undefined>,

		/** Required */
		groupItemId: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateCalculateSLARequestItemsFormGroup() {
		return new FormGroup<CalculateSLARequestItemsFormProperties>({
			additionalHandlingTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupItemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CalculateSLARequestItemsDimension {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: number;
	}
	export interface CalculateSLARequestItemsDimensionFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateCalculateSLARequestItemsDimensionFormGroup() {
		return new FormGroup<CalculateSLARequestItemsDimensionFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CalculateSLARequestItemsKitItem {

		/** Required */
		additionalHandlingTime: string;

		/** Required */
		dimension: CalculateSLARequestItemsKitItemDimension;

		/** Required */
		groupItemId: string;

		/** Required */
		id: string;

		/** Required */
		kitItem: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;
	}
	export interface CalculateSLARequestItemsKitItemFormProperties {

		/** Required */
		additionalHandlingTime: FormControl<string | null | undefined>,

		/** Required */
		groupItemId: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateCalculateSLARequestItemsKitItemFormGroup() {
		return new FormGroup<CalculateSLARequestItemsKitItemFormProperties>({
			additionalHandlingTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupItemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CalculateSLARequestItemsKitItemDimension {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: number;
	}
	export interface CalculateSLARequestItemsKitItemDimensionFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateCalculateSLARequestItemsKitItemDimensionFormGroup() {
		return new FormGroup<CalculateSLARequestItemsKitItemDimensionFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CalculateSLARequestLocation {

		/** Required */
		country: string;

		/** Required */
		point: Array<number>;

		/** Required */
		zipCode: string;
	}
	export interface CalculateSLARequestLocationFormProperties {

		/** Required */
		country: FormControl<string | null | undefined>,

		/** Required */
		zipCode: FormControl<string | null | undefined>,
	}
	export function CreateCalculateSLARequestLocationFormGroup() {
		return new FormGroup<CalculateSLARequestLocationFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			zipCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Country {

		/** Required */
		acronym: string;

		/** Required */
		name: string;
	}
	export interface CountryFormProperties {

		/** Required */
		acronym: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCountryFormGroup() {
		return new FormGroup<CountryFormProperties>({
			acronym: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateReservation {

		/** Required */
		AuthorizedDateUtc: string;

		/** Required */
		CanceledDateUtc: string;

		/** Required */
		ConfirmedDateUtc: string;

		/** Required */
		Errors: Array<string>;

		/** Required */
		IsSucess: boolean;

		/** Required */
		LastUpdateDateUtc: string;

		/** Required */
		LockId: string;

		/** Required */
		MaximumConfirmationDateUtc: string;

		/** Required */
		PickupPointItemOptions: string;

		/** Required */
		ReservationDateUtc: string;

		/** Required */
		SalesChannel: string;

		/** Required */
		CreateReservationSlaRequest: Array<CreateReservationSlaRequest>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Status: number;
	}
	export interface CreateReservationFormProperties {

		/** Required */
		AuthorizedDateUtc: FormControl<string | null | undefined>,

		/** Required */
		CanceledDateUtc: FormControl<string | null | undefined>,

		/** Required */
		ConfirmedDateUtc: FormControl<string | null | undefined>,

		/** Required */
		IsSucess: FormControl<boolean | null | undefined>,

		/** Required */
		LastUpdateDateUtc: FormControl<string | null | undefined>,

		/** Required */
		LockId: FormControl<string | null | undefined>,

		/** Required */
		MaximumConfirmationDateUtc: FormControl<string | null | undefined>,

		/** Required */
		PickupPointItemOptions: FormControl<string | null | undefined>,

		/** Required */
		ReservationDateUtc: FormControl<string | null | undefined>,

		/** Required */
		SalesChannel: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Status: FormControl<number | null | undefined>,
	}
	export function CreateCreateReservationFormGroup() {
		return new FormGroup<CreateReservationFormProperties>({
			AuthorizedDateUtc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CanceledDateUtc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConfirmedDateUtc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsSucess: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			LastUpdateDateUtc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LockId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaximumConfirmationDateUtc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PickupPointItemOptions: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReservationDateUtc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SalesChannel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateReservationSlaRequest {

		/** Required */
		deliveryWindows: string;

		/** Required */
		dockId: string;

		/** Required */
		dockTime: string;

		/** Required */
		freightTableId: string;

		/** Required */
		freightTableName: string;

		/** Required */
		item: CreateReservationSlaRequestItem;

		/**
		 * Required
		 * Type: double
		 */
		listPrice: number;

		/** Required */
		location: CreateReservationSlaRequestLocation;

		/** Required */
		pickupStoreInfo: string;

		/**
		 * Required
		 * Type: double
		 */
		promotionalPrice: number;

		/** Required */
		slaType: string;

		/** Required */
		slaTypeName: string;

		/** Required */
		timeToDockPlusDockTime: string;

		/** Required */
		totalTime: string;

		/** Required */
		transitTime: string;

		/** Required */
		wareHouseId: string;

		/** Required */
		wmsEndPoint: string;
	}
	export interface CreateReservationSlaRequestFormProperties {

		/** Required */
		deliveryWindows: FormControl<string | null | undefined>,

		/** Required */
		dockId: FormControl<string | null | undefined>,

		/** Required */
		dockTime: FormControl<string | null | undefined>,

		/** Required */
		freightTableId: FormControl<string | null | undefined>,

		/** Required */
		freightTableName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		listPrice: FormControl<number | null | undefined>,

		/** Required */
		pickupStoreInfo: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		promotionalPrice: FormControl<number | null | undefined>,

		/** Required */
		slaType: FormControl<string | null | undefined>,

		/** Required */
		slaTypeName: FormControl<string | null | undefined>,

		/** Required */
		timeToDockPlusDockTime: FormControl<string | null | undefined>,

		/** Required */
		totalTime: FormControl<string | null | undefined>,

		/** Required */
		transitTime: FormControl<string | null | undefined>,

		/** Required */
		wareHouseId: FormControl<string | null | undefined>,

		/** Required */
		wmsEndPoint: FormControl<string | null | undefined>,
	}
	export function CreateCreateReservationSlaRequestFormGroup() {
		return new FormGroup<CreateReservationSlaRequestFormProperties>({
			deliveryWindows: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			freightTableId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			freightTableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			listPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pickupStoreInfo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			promotionalPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			slaType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slaTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeToDockPlusDockTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			totalTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transitTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wareHouseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wmsEndPoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateReservationSlaRequestItem {

		/** Required */
		additionalHandlingTime: string;

		/** Required */
		dimension: CreateReservationSlaRequestItemDimension;

		/** Required */
		groupItemId: string;

		/** Required */
		id: string;

		/** Required */
		kitItem: Array<string>;

		/** Required */
		modal: string;

		/**
		 * Required
		 * Type: double
		 */
		price: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;

		/** Required */
		unlimitedQuantity: boolean;
	}
	export interface CreateReservationSlaRequestItemFormProperties {

		/** Required */
		additionalHandlingTime: FormControl<string | null | undefined>,

		/** Required */
		groupItemId: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		modal: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** Required */
		unlimitedQuantity: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateReservationSlaRequestItemFormGroup() {
		return new FormGroup<CreateReservationSlaRequestItemFormProperties>({
			additionalHandlingTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupItemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unlimitedQuantity: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateReservationSlaRequestItemDimension {

		/**
		 * Required
		 * Type: double
		 */
		height: number;

		/**
		 * Required
		 * Type: double
		 */
		length: number;

		/**
		 * Required
		 * Type: double
		 */
		maxSumDimension: number;

		/**
		 * Required
		 * Type: double
		 */
		weight: number;

		/**
		 * Required
		 * Type: double
		 */
		width: number;
	}
	export interface CreateReservationSlaRequestItemDimensionFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		maxSumDimension: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		weight: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateCreateReservationSlaRequestItemDimensionFormGroup() {
		return new FormGroup<CreateReservationSlaRequestItemDimensionFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			maxSumDimension: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateReservationSlaRequestLocation {

		/** Required */
		country: string;

		/** Required */
		deliveryPointId: string;

		/** Required */
		inStore: CreateReservationSlaRequestLocationInStore;

		/** Required */
		point: string;

		/** Required */
		zipCode: string;
	}
	export interface CreateReservationSlaRequestLocationFormProperties {

		/** Required */
		country: FormControl<string | null | undefined>,

		/** Required */
		deliveryPointId: FormControl<string | null | undefined>,

		/** Required */
		point: FormControl<string | null | undefined>,

		/** Required */
		zipCode: FormControl<string | null | undefined>,
	}
	export function CreateCreateReservationSlaRequestLocationFormGroup() {
		return new FormGroup<CreateReservationSlaRequestLocationFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deliveryPointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			point: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			zipCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateReservationSlaRequestLocationInStore {

		/** Required */
		IsCheckedIn: boolean;

		/** Required */
		StoreId: string;
	}
	export interface CreateReservationSlaRequestLocationInStoreFormProperties {

		/** Required */
		IsCheckedIn: FormControl<boolean | null | undefined>,

		/** Required */
		StoreId: FormControl<string | null | undefined>,
	}
	export function CreateCreateReservationSlaRequestLocationInStoreFormGroup() {
		return new FormGroup<CreateReservationSlaRequestLocationInStoreFormProperties>({
			IsCheckedIn: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			StoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateReservationRequest {

		/** Required */
		autorizationExpirationTTL: string;

		/** Required */
		CreateReservationRequestDeliveryItemOptions: Array<CreateReservationRequestDeliveryItemOptions>;

		/** Required */
		lockId: string;

		/** Required */
		salesChannel: string;
	}
	export interface CreateReservationRequestFormProperties {

		/** Required */
		autorizationExpirationTTL: FormControl<string | null | undefined>,

		/** Required */
		lockId: FormControl<string | null | undefined>,

		/** Required */
		salesChannel: FormControl<string | null | undefined>,
	}
	export function CreateCreateReservationRequestFormGroup() {
		return new FormGroup<CreateReservationRequestFormProperties>({
			autorizationExpirationTTL: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lockId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			salesChannel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateReservationRequestDeliveryItemOptions {

		/** Required */
		aditionalTimeBlockedDays: string;

		/** Required */
		deliveryWindows: Array<string>;

		/** Required */
		dockId: string;

		/** Required */
		dockTime: string;

		/** Required */
		item: CreateReservationRequestDeliveryItemOptionsItem;

		/**
		 * Required
		 * Type: double
		 */
		listPrice: number;

		/** Required */
		location: CreateReservationRequestDeliveryItemOptionsLocation;

		/**
		 * Required
		 * Type: double
		 */
		promotionalPrice: number;

		/** Required */
		slaType: string;

		/** Required */
		slaTypeName: string;

		/** Required */
		timeToDockPlusDockTime: string;

		/** Required */
		totalTime: string;

		/** Required */
		transitTime: string;

		/** Required */
		wareHouseId: string;
	}
	export interface CreateReservationRequestDeliveryItemOptionsFormProperties {

		/** Required */
		aditionalTimeBlockedDays: FormControl<string | null | undefined>,

		/** Required */
		dockId: FormControl<string | null | undefined>,

		/** Required */
		dockTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		promotionalPrice: FormControl<number | null | undefined>,

		/** Required */
		slaType: FormControl<string | null | undefined>,

		/** Required */
		slaTypeName: FormControl<string | null | undefined>,

		/** Required */
		timeToDockPlusDockTime: FormControl<string | null | undefined>,

		/** Required */
		totalTime: FormControl<string | null | undefined>,

		/** Required */
		transitTime: FormControl<string | null | undefined>,

		/** Required */
		wareHouseId: FormControl<string | null | undefined>,
	}
	export function CreateCreateReservationRequestDeliveryItemOptionsFormGroup() {
		return new FormGroup<CreateReservationRequestDeliveryItemOptionsFormProperties>({
			aditionalTimeBlockedDays: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			listPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			promotionalPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			slaType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slaTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeToDockPlusDockTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			totalTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transitTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wareHouseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateReservationRequestDeliveryItemOptionsItem {

		/** Required */
		additionalHandlingTime: string;

		/** Required */
		dimension: CreateReservationRequestDeliveryItemOptionsItemDimension;

		/** Required */
		groupItemId: string;

		/** Required */
		id: string;

		/** Required */
		kitItem: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;
	}
	export interface CreateReservationRequestDeliveryItemOptionsItemFormProperties {

		/** Required */
		additionalHandlingTime: FormControl<string | null | undefined>,

		/** Required */
		groupItemId: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateCreateReservationRequestDeliveryItemOptionsItemFormGroup() {
		return new FormGroup<CreateReservationRequestDeliveryItemOptionsItemFormProperties>({
			additionalHandlingTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupItemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateReservationRequestDeliveryItemOptionsItemDimension {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: number;
	}
	export interface CreateReservationRequestDeliveryItemOptionsItemDimensionFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateCreateReservationRequestDeliveryItemOptionsItemDimensionFormGroup() {
		return new FormGroup<CreateReservationRequestDeliveryItemOptionsItemDimensionFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateReservationRequestDeliveryItemOptionsLocation {

		/** Required */
		country: string;

		/** Required */
		inStore: CreateReservationRequestDeliveryItemOptionsLocationInStore;

		/** Required */
		zipCode: string;
	}
	export interface CreateReservationRequestDeliveryItemOptionsLocationFormProperties {

		/** Required */
		country: FormControl<string | null | undefined>,

		/** Required */
		zipCode: FormControl<string | null | undefined>,
	}
	export function CreateCreateReservationRequestDeliveryItemOptionsLocationFormGroup() {
		return new FormGroup<CreateReservationRequestDeliveryItemOptionsLocationFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			zipCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateReservationRequestDeliveryItemOptionsLocationInStore {

		/** Required */
		IsCheckedIn: boolean;

		/** Required */
		StoreId: string;
	}
	export interface CreateReservationRequestDeliveryItemOptionsLocationInStoreFormProperties {

		/** Required */
		IsCheckedIn: FormControl<boolean | null | undefined>,

		/** Required */
		StoreId: FormControl<string | null | undefined>,
	}
	export function CreateCreateReservationRequestDeliveryItemOptionsLocationInStoreFormGroup() {
		return new FormGroup<CreateReservationRequestDeliveryItemOptionsLocationInStoreFormProperties>({
			IsCheckedIn: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			StoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdate {

		/** Required */
		address: CreateUpdateAddress;

		/** Required */
		CreateUpdateBusinessHours: Array<CreateUpdateBusinessHours>;

		/** Required */
		description: string;

		/** Required */
		formatted_address: string;

		/** Required */
		id: string;

		/** Required */
		instructions: string;

		/** Required */
		isActive: boolean;

		/** Required */
		name: string;

		/** Required */
		pickupHolidays: Array<string>;

		/** Required */
		tagsLabel: Array<string>;
	}
	export interface CreateUpdateFormProperties {

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		formatted_address: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		instructions: FormControl<string | null | undefined>,

		/** Required */
		isActive: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateFormGroup() {
		return new FormGroup<CreateUpdateFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			formatted_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instructions: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateAddress {

		/** Required */
		city: string;

		/** Required */
		complement: string;

		/** Required */
		country: CreateUpdateAddressCountry;

		/** Required */
		location: CreateUpdateAddressLocation;

		/** Required */
		neighborhood: string;

		/** Required */
		number: string;

		/** Required */
		postalCode: string;

		/** Required */
		reference: string;

		/** Required */
		state: string;

		/** Required */
		street: string;
	}
	export interface CreateUpdateAddressFormProperties {

		/** Required */
		city: FormControl<string | null | undefined>,

		/** Required */
		complement: FormControl<string | null | undefined>,

		/** Required */
		neighborhood: FormControl<string | null | undefined>,

		/** Required */
		number: FormControl<string | null | undefined>,

		/** Required */
		postalCode: FormControl<string | null | undefined>,

		/** Required */
		reference: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<string | null | undefined>,

		/** Required */
		street: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateAddressFormGroup() {
		return new FormGroup<CreateUpdateAddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			complement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			neighborhood: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			street: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateAddressCountry {

		/** Required */
		acronym: string;

		/** Required */
		name: string;
	}
	export interface CreateUpdateAddressCountryFormProperties {

		/** Required */
		acronym: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateAddressCountryFormGroup() {
		return new FormGroup<CreateUpdateAddressCountryFormProperties>({
			acronym: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateAddressLocation {

		/**
		 * Required
		 * Type: double
		 */
		latitude: number;

		/**
		 * Required
		 * Type: double
		 */
		longitude: number;
	}
	export interface CreateUpdateAddressLocationFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateCreateUpdateAddressLocationFormGroup() {
		return new FormGroup<CreateUpdateAddressLocationFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateBusinessHours {

		/** Required */
		closingTime: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: number;

		/** Required */
		openingTime: string;
	}
	export interface CreateUpdateBusinessHoursFormProperties {

		/** Required */
		closingTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: FormControl<number | null | undefined>,

		/** Required */
		openingTime: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateBusinessHoursFormGroup() {
		return new FormGroup<CreateUpdateBusinessHoursFormProperties>({
			closingTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dayOfWeek: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			openingTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateCarrierDeliveryWindowsRequest {

		/** Required */
		carrierSchedule: Array<string>;

		/**
		 * Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example.
		 * Required
		 */
		CreateUpdateCarrierDeliveryWindowsRequestDayOfWeekForDelivery: Array<CreateUpdateCarrierDeliveryWindowsRequestDayOfWeekForDelivery>;

		/** Required */
		deliveryOnWeekends: boolean;

		/** Required */
		factorCubicWeight: string;

		/** Required */
		id: string;

		/** Required */
		maxDimension: CreateUpdateCarrierDeliveryWindowsRequestMaxDimension;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxRangeDelivery: number;

		/** Required */
		minimunCubicWeight: string;

		/** Required */
		modals: Array<string>;

		/** Required */
		name: string;

		/** Required */
		numberOfItemsPerShipment: string;

		/** Required */
		onlyItemsWithDefinedModal: boolean;

		/** Required */
		scheduledDelivery: boolean;

		/** Required */
		slaType: string;
	}
	export interface CreateUpdateCarrierDeliveryWindowsRequestFormProperties {

		/** Required */
		deliveryOnWeekends: FormControl<boolean | null | undefined>,

		/** Required */
		factorCubicWeight: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxRangeDelivery: FormControl<number | null | undefined>,

		/** Required */
		minimunCubicWeight: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		numberOfItemsPerShipment: FormControl<string | null | undefined>,

		/** Required */
		onlyItemsWithDefinedModal: FormControl<boolean | null | undefined>,

		/** Required */
		scheduledDelivery: FormControl<boolean | null | undefined>,

		/** Required */
		slaType: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateCarrierDeliveryWindowsRequestFormGroup() {
		return new FormGroup<CreateUpdateCarrierDeliveryWindowsRequestFormProperties>({
			deliveryOnWeekends: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			factorCubicWeight: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxRangeDelivery: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minimunCubicWeight: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numberOfItemsPerShipment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			onlyItemsWithDefinedModal: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			scheduledDelivery: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			slaType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateCarrierDeliveryWindowsRequestDayOfWeekForDelivery {

		/**
		 * Day of the week, from `0` (sunday) to `6` (saturday).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: number;

		/**
		 * Reservation windows for scheduled delivery.
		 * Required
		 */
		CreateUpdateCarrierDeliveryWindowsRequestDayOfWeekForDeliveryDeliveryRanges: Array<CreateUpdateCarrierDeliveryWindowsRequestDayOfWeekForDeliveryDeliveryRanges>;
	}
	export interface CreateUpdateCarrierDeliveryWindowsRequestDayOfWeekForDeliveryFormProperties {

		/**
		 * Day of the week, from `0` (sunday) to `6` (saturday).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: FormControl<number | null | undefined>,
	}
	export function CreateCreateUpdateCarrierDeliveryWindowsRequestDayOfWeekForDeliveryFormGroup() {
		return new FormGroup<CreateUpdateCarrierDeliveryWindowsRequestDayOfWeekForDeliveryFormProperties>({
			dayOfWeek: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateCarrierDeliveryWindowsRequestDayOfWeekForDeliveryDeliveryRanges {

		/** Sets maximum delivery capacity for a given reservation window for scheduled delivery. */
		CreateUpdateCarrierDeliveryWindowsRequestDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity?: Array<CreateUpdateCarrierDeliveryWindowsRequestDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity>;

		/**
		 * End time for day of the week.
		 * Required
		 */
		endTime: string;

		/**
		 * List price for day of the week.
		 * Required
		 * Type: double
		 */
		listPrice: number;

		/**
		 * Start time for day of the week.
		 * Required
		 */
		startTime: string;
	}
	export interface CreateUpdateCarrierDeliveryWindowsRequestDayOfWeekForDeliveryDeliveryRangesFormProperties {

		/**
		 * End time for day of the week.
		 * Required
		 */
		endTime: FormControl<string | null | undefined>,

		/**
		 * List price for day of the week.
		 * Required
		 * Type: double
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * Start time for day of the week.
		 * Required
		 */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateCarrierDeliveryWindowsRequestDayOfWeekForDeliveryDeliveryRangesFormGroup() {
		return new FormGroup<CreateUpdateCarrierDeliveryWindowsRequestDayOfWeekForDeliveryDeliveryRangesFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			listPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateCarrierDeliveryWindowsRequestDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity {

		/**
		 * Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).
		 * Required
		 */
		capacityType: string;

		/**
		 * Maximum number of orders or SKUs that the store is capable of fulfilling.
		 * Required
		 * Type: double
		 */
		maxValue: number;
	}
	export interface CreateUpdateCarrierDeliveryWindowsRequestDayOfWeekForDeliveryDeliveryRangesDeliveryCapacityFormProperties {

		/**
		 * Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).
		 * Required
		 */
		capacityType: FormControl<string | null | undefined>,

		/**
		 * Maximum number of orders or SKUs that the store is capable of fulfilling.
		 * Required
		 * Type: double
		 */
		maxValue: FormControl<number | null | undefined>,
	}
	export function CreateCreateUpdateCarrierDeliveryWindowsRequestDayOfWeekForDeliveryDeliveryRangesDeliveryCapacityFormGroup() {
		return new FormGroup<CreateUpdateCarrierDeliveryWindowsRequestDayOfWeekForDeliveryDeliveryRangesDeliveryCapacityFormProperties>({
			capacityType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateCarrierDeliveryWindowsRequestMaxDimension {

		/** Required */
		height: string;

		/** Required */
		length: string;

		/** Required */
		maxSumDimension: string;
	}
	export interface CreateUpdateCarrierDeliveryWindowsRequestMaxDimensionFormProperties {

		/** Required */
		height: FormControl<string | null | undefined>,

		/** Required */
		length: FormControl<string | null | undefined>,

		/** Required */
		maxSumDimension: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateCarrierDeliveryWindowsRequestMaxDimensionFormGroup() {
		return new FormGroup<CreateUpdateCarrierDeliveryWindowsRequestMaxDimensionFormProperties>({
			height: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxSumDimension: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateCarrierRequest {

		/** Required */
		carrierSchedule: Array<string>;

		/** Required */
		dayOfWeekBlockeds: Array<string>;

		/**
		 * Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example.
		 * Required
		 */
		CreateUpdateCarrierRequestDayOfWeekForDelivery: Array<CreateUpdateCarrierRequestDayOfWeekForDelivery>;

		/** Required */
		deliveryOnWeekends: boolean;

		/** Required */
		exclusiveToDeliveryPoints: boolean;

		/** Required */
		factorCubicWeight: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		freightTableProcessStatus: number;

		/** Required */
		freightTableValueError: string;

		/** Required */
		freightValue: Array<string>;

		/** Required */
		id: string;

		/** Required */
		isPolygon: boolean;

		/** Required */
		maxDimension: CreateUpdateCarrierRequestMaxDimension;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxRangeDelivery: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimunCubicWeight: number;

		/** Required */
		modals: Array<string>;

		/** Required */
		name: string;

		/** Required */
		numberOfItemsPerShipment: string;

		/** Required */
		onlyItemsWithDefinedModal: boolean;

		/** Required */
		scheduledDelivery: boolean;

		/** Required */
		slaType: string;
	}
	export interface CreateUpdateCarrierRequestFormProperties {

		/** Required */
		deliveryOnWeekends: FormControl<boolean | null | undefined>,

		/** Required */
		exclusiveToDeliveryPoints: FormControl<boolean | null | undefined>,

		/** Required */
		factorCubicWeight: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		freightTableProcessStatus: FormControl<number | null | undefined>,

		/** Required */
		freightTableValueError: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		isPolygon: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxRangeDelivery: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimunCubicWeight: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		numberOfItemsPerShipment: FormControl<string | null | undefined>,

		/** Required */
		onlyItemsWithDefinedModal: FormControl<boolean | null | undefined>,

		/** Required */
		scheduledDelivery: FormControl<boolean | null | undefined>,

		/** Required */
		slaType: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateCarrierRequestFormGroup() {
		return new FormGroup<CreateUpdateCarrierRequestFormProperties>({
			deliveryOnWeekends: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			exclusiveToDeliveryPoints: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			factorCubicWeight: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			freightTableProcessStatus: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			freightTableValueError: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isPolygon: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			maxRangeDelivery: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minimunCubicWeight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numberOfItemsPerShipment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			onlyItemsWithDefinedModal: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			scheduledDelivery: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			slaType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateCarrierRequestDayOfWeekForDelivery {

		/**
		 * Day of the week, from `0` (sunday) to `6` (saturday).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: number;

		/**
		 * Reservation windows for scheduled delivery.
		 * Required
		 */
		CreateUpdateCarrierRequestDayOfWeekForDeliveryDeliveryRanges: Array<CreateUpdateCarrierRequestDayOfWeekForDeliveryDeliveryRanges>;
	}
	export interface CreateUpdateCarrierRequestDayOfWeekForDeliveryFormProperties {

		/**
		 * Day of the week, from `0` (sunday) to `6` (saturday).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: FormControl<number | null | undefined>,
	}
	export function CreateCreateUpdateCarrierRequestDayOfWeekForDeliveryFormGroup() {
		return new FormGroup<CreateUpdateCarrierRequestDayOfWeekForDeliveryFormProperties>({
			dayOfWeek: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateCarrierRequestDayOfWeekForDeliveryDeliveryRanges {

		/** Sets maximum delivery capacity for a given reservation window for scheduled delivery. */
		CreateUpdateCarrierRequestDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity?: Array<CreateUpdateCarrierRequestDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity>;

		/**
		 * End time for day of the week.
		 * Required
		 */
		endTime: string;

		/**
		 * List price for day of the week.
		 * Required
		 * Type: double
		 */
		listPrice: number;

		/**
		 * Start time for day of the week.
		 * Required
		 */
		startTime: string;
	}
	export interface CreateUpdateCarrierRequestDayOfWeekForDeliveryDeliveryRangesFormProperties {

		/**
		 * End time for day of the week.
		 * Required
		 */
		endTime: FormControl<string | null | undefined>,

		/**
		 * List price for day of the week.
		 * Required
		 * Type: double
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * Start time for day of the week.
		 * Required
		 */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateCarrierRequestDayOfWeekForDeliveryDeliveryRangesFormGroup() {
		return new FormGroup<CreateUpdateCarrierRequestDayOfWeekForDeliveryDeliveryRangesFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			listPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateCarrierRequestDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity {

		/**
		 * Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).
		 * Required
		 */
		capacityType: string;

		/**
		 * Maximum number of orders or SKUs that the store is capable of fulfilling.
		 * Required
		 * Type: double
		 */
		maxValue: number;
	}
	export interface CreateUpdateCarrierRequestDayOfWeekForDeliveryDeliveryRangesDeliveryCapacityFormProperties {

		/**
		 * Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).
		 * Required
		 */
		capacityType: FormControl<string | null | undefined>,

		/**
		 * Maximum number of orders or SKUs that the store is capable of fulfilling.
		 * Required
		 * Type: double
		 */
		maxValue: FormControl<number | null | undefined>,
	}
	export function CreateCreateUpdateCarrierRequestDayOfWeekForDeliveryDeliveryRangesDeliveryCapacityFormGroup() {
		return new FormGroup<CreateUpdateCarrierRequestDayOfWeekForDeliveryDeliveryRangesDeliveryCapacityFormProperties>({
			capacityType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateCarrierRequestMaxDimension {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxSumDimension: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: number;
	}
	export interface CreateUpdateCarrierRequestMaxDimensionFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxSumDimension: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateCreateUpdateCarrierRequestMaxDimensionFormGroup() {
		return new FormGroup<CreateUpdateCarrierRequestMaxDimensionFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			maxSumDimension: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateDockRequest {

		/** Required */
		address: CreateUpdateDockRequestAddress;

		/** Required */
		dockTimeFake: string;

		/** Required */
		freightTableIds: Array<string>;

		/** Required */
		id: string;

		/** Required */
		name: string;

		/** Required */
		pickupStoreInfo: CreateUpdateDockRequestPickupStoreInfo;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: number;

		/** Required */
		salesChannel: string;

		/** Required */
		salesChannels: Array<string>;

		/** Required */
		timeFakeOverhead: string;

		/** Required */
		wmsEndPoint: string;
	}
	export interface CreateUpdateDockRequestFormProperties {

		/** Required */
		dockTimeFake: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,

		/** Required */
		salesChannel: FormControl<string | null | undefined>,

		/** Required */
		timeFakeOverhead: FormControl<string | null | undefined>,

		/** Required */
		wmsEndPoint: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateDockRequestFormGroup() {
		return new FormGroup<CreateUpdateDockRequestFormProperties>({
			dockTimeFake: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			salesChannel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeFakeOverhead: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wmsEndPoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateDockRequestAddress {

		/** Required */
		city: string;

		/** Required */
		complement: string;

		/** Required */
		coordinates: Array<string>;

		/** Required */
		country: CreateUpdateDockRequestAddressCountry;

		/** Required */
		neighborhood: string;

		/** Required */
		number: string;

		/** Required */
		postalCode: string;

		/** Required */
		state: string;

		/** Required */
		street: string;
	}
	export interface CreateUpdateDockRequestAddressFormProperties {

		/** Required */
		city: FormControl<string | null | undefined>,

		/** Required */
		complement: FormControl<string | null | undefined>,

		/** Required */
		neighborhood: FormControl<string | null | undefined>,

		/** Required */
		number: FormControl<string | null | undefined>,

		/** Required */
		postalCode: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<string | null | undefined>,

		/** Required */
		street: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateDockRequestAddressFormGroup() {
		return new FormGroup<CreateUpdateDockRequestAddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			complement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			neighborhood: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			street: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateDockRequestAddressCountry {

		/** Required */
		acronym: string;

		/** Required */
		name: string;
	}
	export interface CreateUpdateDockRequestAddressCountryFormProperties {

		/** Required */
		acronym: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateDockRequestAddressCountryFormGroup() {
		return new FormGroup<CreateUpdateDockRequestAddressCountryFormProperties>({
			acronym: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateDockRequestPickupStoreInfo {

		/** Required */
		additionalInfo: string;

		/** Required */
		address: CreateUpdateDockRequestPickupStoreInfoAddress;

		/** Required */
		dockId: string;

		/** Required */
		friendlyName: string;

		/** Required */
		isPickupStore: boolean;

		/** Required */
		storeId: string;
	}
	export interface CreateUpdateDockRequestPickupStoreInfoFormProperties {

		/** Required */
		additionalInfo: FormControl<string | null | undefined>,

		/** Required */
		dockId: FormControl<string | null | undefined>,

		/** Required */
		friendlyName: FormControl<string | null | undefined>,

		/** Required */
		isPickupStore: FormControl<boolean | null | undefined>,

		/** Required */
		storeId: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateDockRequestPickupStoreInfoFormGroup() {
		return new FormGroup<CreateUpdateDockRequestPickupStoreInfoFormProperties>({
			additionalInfo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			friendlyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isPickupStore: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			storeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateDockRequestPickupStoreInfoAddress {

		/** Required */
		city: string;

		/** Required */
		complement: string;

		/** Required */
		coordinates: string;

		/** Required */
		country: CreateUpdateDockRequestPickupStoreInfoAddressCountry;

		/** Required */
		neighborhood: string;

		/** Required */
		number: string;

		/** Required */
		postalCode: string;

		/** Required */
		state: string;

		/** Required */
		street: string;
	}
	export interface CreateUpdateDockRequestPickupStoreInfoAddressFormProperties {

		/** Required */
		city: FormControl<string | null | undefined>,

		/** Required */
		complement: FormControl<string | null | undefined>,

		/** Required */
		coordinates: FormControl<string | null | undefined>,

		/** Required */
		neighborhood: FormControl<string | null | undefined>,

		/** Required */
		number: FormControl<string | null | undefined>,

		/** Required */
		postalCode: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<string | null | undefined>,

		/** Required */
		street: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateDockRequestPickupStoreInfoAddressFormGroup() {
		return new FormGroup<CreateUpdateDockRequestPickupStoreInfoAddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			complement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			coordinates: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			neighborhood: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			street: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateDockRequestPickupStoreInfoAddressCountry {

		/** Required */
		acronym: string;

		/** Required */
		name: string;
	}
	export interface CreateUpdateDockRequestPickupStoreInfoAddressCountryFormProperties {

		/** Required */
		acronym: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateDockRequestPickupStoreInfoAddressCountryFormGroup() {
		return new FormGroup<CreateUpdateDockRequestPickupStoreInfoAddressCountryFormProperties>({
			acronym: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateFreightValuesRequest {

		/** Required */
		absoluteMoneyCost: string;

		/** Required */
		country: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxVolume: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		operationType: number;

		/** Required */
		polygon: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pricePercent: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pricePercentByWeight: number;

		/** Required */
		timeCost: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weightEnd: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weightStart: number;

		/** Required */
		zipCodeEnd: string;

		/** Required */
		zipCodeStart: string;
	}
	export interface CreateUpdateFreightValuesRequestFormProperties {

		/** Required */
		absoluteMoneyCost: FormControl<string | null | undefined>,

		/** Required */
		country: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxVolume: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		operationType: FormControl<number | null | undefined>,

		/** Required */
		polygon: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pricePercent: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pricePercentByWeight: FormControl<number | null | undefined>,

		/** Required */
		timeCost: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weightEnd: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weightStart: FormControl<number | null | undefined>,

		/** Required */
		zipCodeEnd: FormControl<string | null | undefined>,

		/** Required */
		zipCodeStart: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateFreightValuesRequestFormGroup() {
		return new FormGroup<CreateUpdateFreightValuesRequestFormProperties>({
			absoluteMoneyCost: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxVolume: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			operationType: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			polygon: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pricePercent: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pricePercentByWeight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timeCost: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			weightEnd: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			weightStart: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			zipCodeEnd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			zipCodeStart: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateHolidayRequest {

		/** Required */
		name: string;

		/** Required */
		startDate: string;
	}
	export interface CreateUpdateHolidayRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateHolidayRequestFormGroup() {
		return new FormGroup<CreateUpdateHolidayRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdatePolygonRequest {

		/** Required */
		geoShape: CreateUpdatePolygonRequestGeoShape;

		/** Required */
		name: string;
	}
	export interface CreateUpdatePolygonRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdatePolygonRequestFormGroup() {
		return new FormGroup<CreateUpdatePolygonRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdatePolygonRequestGeoShape {

		/** Required */
		coordinates: Array<string>;
	}
	export interface CreateUpdatePolygonRequestGeoShapeFormProperties {
	}
	export function CreateCreateUpdatePolygonRequestGeoShapeFormGroup() {
		return new FormGroup<CreateUpdatePolygonRequestGeoShapeFormProperties>({
		});

	}

	export interface CreateUpdateRequest {

		/** Required */
		address: CreateUpdateRequestAddress;

		/** Required */
		CreateUpdateRequestBusinessHours: Array<CreateUpdateRequestBusinessHours>;

		/** Required */
		description: string;

		/** Required */
		formatted_address: string;

		/** Required */
		id: string;

		/** Required */
		instructions: string;

		/** Required */
		isActive: boolean;

		/** Required */
		name: string;

		/** Required */
		tagsLabel: Array<string>;
	}
	export interface CreateUpdateRequestFormProperties {

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		formatted_address: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		instructions: FormControl<string | null | undefined>,

		/** Required */
		isActive: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateRequestFormGroup() {
		return new FormGroup<CreateUpdateRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			formatted_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instructions: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateRequestAddress {

		/** Required */
		city: string;

		/** Required */
		complement: string;

		/** Required */
		country: CreateUpdateRequestAddressCountry;

		/** Required */
		location: CreateUpdateRequestAddressLocation;

		/** Required */
		neighborhood: string;

		/** Required */
		number: string;

		/** Required */
		postalCode: string;

		/** Required */
		reference: string;

		/** Required */
		state: string;

		/** Required */
		street: string;
	}
	export interface CreateUpdateRequestAddressFormProperties {

		/** Required */
		city: FormControl<string | null | undefined>,

		/** Required */
		complement: FormControl<string | null | undefined>,

		/** Required */
		neighborhood: FormControl<string | null | undefined>,

		/** Required */
		number: FormControl<string | null | undefined>,

		/** Required */
		postalCode: FormControl<string | null | undefined>,

		/** Required */
		reference: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<string | null | undefined>,

		/** Required */
		street: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateRequestAddressFormGroup() {
		return new FormGroup<CreateUpdateRequestAddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			complement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			neighborhood: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			street: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateRequestAddressCountry {

		/** Required */
		acronym: string;

		/** Required */
		name: string;
	}
	export interface CreateUpdateRequestAddressCountryFormProperties {

		/** Required */
		acronym: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateRequestAddressCountryFormGroup() {
		return new FormGroup<CreateUpdateRequestAddressCountryFormProperties>({
			acronym: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateRequestAddressLocation {

		/**
		 * Required
		 * Type: double
		 */
		latitude: number;

		/**
		 * Required
		 * Type: double
		 */
		longitude: number;
	}
	export interface CreateUpdateRequestAddressLocationFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateCreateUpdateRequestAddressLocationFormGroup() {
		return new FormGroup<CreateUpdateRequestAddressLocationFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateRequestBusinessHours {

		/** Required */
		closingTime: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: number;

		/** Required */
		openingTime: string;
	}
	export interface CreateUpdateRequestBusinessHoursFormProperties {

		/** Required */
		closingTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: FormControl<number | null | undefined>,

		/** Required */
		openingTime: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateRequestBusinessHoursFormGroup() {
		return new FormGroup<CreateUpdateRequestBusinessHoursFormProperties>({
			closingTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dayOfWeek: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			openingTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateWarehouseRequest {

		/** Required */
		id: string;

		/** Required */
		name: string;

		/** Required */
		CreateUpdateWarehouseRequestWarehouseDocks: Array<CreateUpdateWarehouseRequestWarehouseDocks>;
	}
	export interface CreateUpdateWarehouseRequestFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateWarehouseRequestFormGroup() {
		return new FormGroup<CreateUpdateWarehouseRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdateWarehouseRequestWarehouseDocks {

		/** Required */
		cost: string;

		/** Required */
		costToDisplay: string;

		/** Required */
		dockId: string;

		/** Required */
		name: string;

		/** Required */
		time: string;

		/** Required */
		translateDays: string;
	}
	export interface CreateUpdateWarehouseRequestWarehouseDocksFormProperties {

		/** Required */
		cost: FormControl<string | null | undefined>,

		/** Required */
		costToDisplay: FormControl<string | null | undefined>,

		/** Required */
		dockId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		time: FormControl<string | null | undefined>,

		/** Required */
		translateDays: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdateWarehouseRequestWarehouseDocksFormGroup() {
		return new FormGroup<CreateUpdateWarehouseRequestWarehouseDocksFormProperties>({
			cost: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			costToDisplay: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			translateDays: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DayOfWeekForDelivery {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: number;

		/** Required */
		DayOfWeekForDeliveryDeliveryRanges: Array<DayOfWeekForDeliveryDeliveryRanges>;
	}
	export interface DayOfWeekForDeliveryFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: FormControl<number | null | undefined>,
	}
	export function CreateDayOfWeekForDeliveryFormGroup() {
		return new FormGroup<DayOfWeekForDeliveryFormProperties>({
			dayOfWeek: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DayOfWeekForDeliveryDeliveryRanges {

		/** Required */
		endTime: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice: number;

		/** Required */
		startTime: string;
	}
	export interface DayOfWeekForDeliveryDeliveryRangesFormProperties {

		/** Required */
		endTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice: FormControl<number | null | undefined>,

		/** Required */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateDayOfWeekForDeliveryDeliveryRangesFormGroup() {
		return new FormGroup<DayOfWeekForDeliveryDeliveryRangesFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			listPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DayOfWeekForDelivery1 {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: number;

		/** Required */
		DayOfWeekForDelivery1DeliveryRanges: Array<DayOfWeekForDelivery1DeliveryRanges>;
	}
	export interface DayOfWeekForDelivery1FormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: FormControl<number | null | undefined>,
	}
	export function CreateDayOfWeekForDelivery1FormGroup() {
		return new FormGroup<DayOfWeekForDelivery1FormProperties>({
			dayOfWeek: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DayOfWeekForDelivery1DeliveryRanges {

		/** Required */
		endTime: string;

		/**
		 * Required
		 * Type: double
		 */
		listPrice: number;

		/** Required */
		startTime: string;
	}
	export interface DayOfWeekForDelivery1DeliveryRangesFormProperties {

		/** Required */
		endTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		listPrice: FormControl<number | null | undefined>,

		/** Required */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateDayOfWeekForDelivery1DeliveryRangesFormGroup() {
		return new FormGroup<DayOfWeekForDelivery1DeliveryRangesFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			listPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeliveryItemOption {

		/** Required */
		aditionalTimeBlockedDays: string;

		/** Required */
		deliveryWindows: Array<string>;

		/** Required */
		dockId: string;

		/** Required */
		dockTime: string;

		/** Required */
		item: DeliveryItemOptionItem;

		/**
		 * Required
		 * Type: double
		 */
		listPrice: number;

		/** Required */
		location: DeliveryItemOptionLocation;

		/**
		 * Required
		 * Type: double
		 */
		promotionalPrice: number;

		/** Required */
		slaType: string;

		/** Required */
		slaTypeName: string;

		/** Required */
		timeToDockPlusDockTime: string;

		/** Required */
		totalTime: string;

		/** Required */
		transitTime: string;

		/** Required */
		wareHouseId: string;
	}
	export interface DeliveryItemOptionFormProperties {

		/** Required */
		aditionalTimeBlockedDays: FormControl<string | null | undefined>,

		/** Required */
		dockId: FormControl<string | null | undefined>,

		/** Required */
		dockTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		promotionalPrice: FormControl<number | null | undefined>,

		/** Required */
		slaType: FormControl<string | null | undefined>,

		/** Required */
		slaTypeName: FormControl<string | null | undefined>,

		/** Required */
		timeToDockPlusDockTime: FormControl<string | null | undefined>,

		/** Required */
		totalTime: FormControl<string | null | undefined>,

		/** Required */
		transitTime: FormControl<string | null | undefined>,

		/** Required */
		wareHouseId: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryItemOptionFormGroup() {
		return new FormGroup<DeliveryItemOptionFormProperties>({
			aditionalTimeBlockedDays: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			listPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			promotionalPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			slaType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slaTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeToDockPlusDockTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			totalTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transitTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wareHouseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeliveryItemOptionItem {

		/** Required */
		additionalHandlingTime: string;

		/** Required */
		dimension: DeliveryItemOptionItemDimension;

		/** Required */
		groupItemId: string;

		/** Required */
		id: string;

		/** Required */
		kitItem: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;
	}
	export interface DeliveryItemOptionItemFormProperties {

		/** Required */
		additionalHandlingTime: FormControl<string | null | undefined>,

		/** Required */
		groupItemId: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateDeliveryItemOptionItemFormGroup() {
		return new FormGroup<DeliveryItemOptionItemFormProperties>({
			additionalHandlingTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupItemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeliveryItemOptionItemDimension {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: number;
	}
	export interface DeliveryItemOptionItemDimensionFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateDeliveryItemOptionItemDimensionFormGroup() {
		return new FormGroup<DeliveryItemOptionItemDimensionFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeliveryItemOptionLocation {

		/** Required */
		country: string;

		/** Required */
		inStore: DeliveryItemOptionLocationInStore;

		/** Required */
		zipCode: string;
	}
	export interface DeliveryItemOptionLocationFormProperties {

		/** Required */
		country: FormControl<string | null | undefined>,

		/** Required */
		zipCode: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryItemOptionLocationFormGroup() {
		return new FormGroup<DeliveryItemOptionLocationFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			zipCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeliveryItemOptionLocationInStore {

		/** Required */
		IsCheckedIn: boolean;

		/** Required */
		StoreId: string;
	}
	export interface DeliveryItemOptionLocationInStoreFormProperties {

		/** Required */
		IsCheckedIn: FormControl<boolean | null | undefined>,

		/** Required */
		StoreId: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryItemOptionLocationInStoreFormGroup() {
		return new FormGroup<DeliveryItemOptionLocationInStoreFormProperties>({
			IsCheckedIn: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			StoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeliveryRange {

		/** Required */
		endTime: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice: number;

		/** Required */
		startTime: string;
	}
	export interface DeliveryRangeFormProperties {

		/** Required */
		endTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		listPrice: FormControl<number | null | undefined>,

		/** Required */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryRangeFormGroup() {
		return new FormGroup<DeliveryRangeFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			listPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeliveryRange1 {

		/** Required */
		endTime: string;

		/**
		 * Required
		 * Type: double
		 */
		listPrice: number;

		/** Required */
		startTime: string;
	}
	export interface DeliveryRange1FormProperties {

		/** Required */
		endTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		listPrice: FormControl<number | null | undefined>,

		/** Required */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryRange1FormGroup() {
		return new FormGroup<DeliveryRange1FormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			listPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeliveryWindow {
		endDateUtc?: string | null;

		/** Type: double */
		listPrice?: number | null;
		startDateUtc?: string | null;
	}
	export interface DeliveryWindowFormProperties {
		endDateUtc: FormControl<string | null | undefined>,

		/** Type: double */
		listPrice: FormControl<number | null | undefined>,
		startDateUtc: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryWindowFormGroup() {
		return new FormGroup<DeliveryWindowFormProperties>({
			endDateUtc: new FormControl<string | null | undefined>(undefined),
			listPrice: new FormControl<number | null | undefined>(undefined),
			startDateUtc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Dimension {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: number;
	}
	export interface DimensionFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateDimensionFormGroup() {
		return new FormGroup<DimensionFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Dimension1 {

		/**
		 * Required
		 * Type: double
		 */
		height: number;

		/**
		 * Required
		 * Type: double
		 */
		length: number;

		/**
		 * Required
		 * Type: double
		 */
		maxSumDimension: number;

		/**
		 * Required
		 * Type: double
		 */
		weight: number;

		/**
		 * Required
		 * Type: double
		 */
		width: number;
	}
	export interface Dimension1FormProperties {

		/**
		 * Required
		 * Type: double
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		maxSumDimension: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		weight: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateDimension1FormGroup() {
		return new FormGroup<Dimension1FormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			maxSumDimension: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Error {

		/** Required */
		code: string;

		/** Required */
		message: string;
	}
	export interface ErrorFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Errorbytoomanyactivereservations {

		/** Required */
		error: ErrorbytoomanyactivereservationsError;
	}
	export interface ErrorbytoomanyactivereservationsFormProperties {
	}
	export function CreateErrorbytoomanyactivereservationsFormGroup() {
		return new FormGroup<ErrorbytoomanyactivereservationsFormProperties>({
		});

	}

	export interface ErrorbytoomanyactivereservationsError {

		/** Required */
		code: string;

		/** Required */
		message: string;
	}
	export interface ErrorbytoomanyactivereservationsErrorFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorbytoomanyactivereservationsErrorFormGroup() {
		return new FormGroup<ErrorbytoomanyactivereservationsErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GeoShape {

		/** Required */
		coordinates: Array<string>;
	}
	export interface GeoShapeFormProperties {
	}
	export function CreateGeoShapeFormGroup() {
		return new FormGroup<GeoShapeFormProperties>({
		});

	}

	export interface GetById {

		/** Required */
		address: GetByIdAddress;

		/** Required */
		GetByIdBusinessHours: Array<GetByIdBusinessHours>;

		/** Required */
		description: string;

		/** Required */
		formatted_address: string;

		/** Required */
		id: string;

		/** Required */
		instructions: string;

		/** Required */
		isActive: boolean;

		/** Required */
		name: string;

		/** Required */
		warehouseId: string;
	}
	export interface GetByIdFormProperties {

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		formatted_address: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		instructions: FormControl<string | null | undefined>,

		/** Required */
		isActive: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		warehouseId: FormControl<string | null | undefined>,
	}
	export function CreateGetByIdFormGroup() {
		return new FormGroup<GetByIdFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			formatted_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instructions: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			warehouseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetByIdAddress {

		/** Required */
		city: string;

		/** Required */
		complement: string;

		/** Required */
		country: GetByIdAddressCountry;

		/** Required */
		location: GetByIdAddressLocation;

		/** Required */
		neighborhood: string;

		/** Required */
		number: string;

		/** Required */
		postalCode: string;

		/** Required */
		state: string;

		/** Required */
		street: string;
	}
	export interface GetByIdAddressFormProperties {

		/** Required */
		city: FormControl<string | null | undefined>,

		/** Required */
		complement: FormControl<string | null | undefined>,

		/** Required */
		neighborhood: FormControl<string | null | undefined>,

		/** Required */
		number: FormControl<string | null | undefined>,

		/** Required */
		postalCode: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<string | null | undefined>,

		/** Required */
		street: FormControl<string | null | undefined>,
	}
	export function CreateGetByIdAddressFormGroup() {
		return new FormGroup<GetByIdAddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			complement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			neighborhood: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			street: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetByIdAddressCountry {

		/** Required */
		acronym: string;

		/** Required */
		name: string;
	}
	export interface GetByIdAddressCountryFormProperties {

		/** Required */
		acronym: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetByIdAddressCountryFormGroup() {
		return new FormGroup<GetByIdAddressCountryFormProperties>({
			acronym: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetByIdAddressLocation {

		/**
		 * Required
		 * Type: double
		 */
		latitude: number;

		/**
		 * Required
		 * Type: double
		 */
		longitude: number;
	}
	export interface GetByIdAddressLocationFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateGetByIdAddressLocationFormGroup() {
		return new FormGroup<GetByIdAddressLocationFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetByIdBusinessHours {

		/** Required */
		closingTime: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: number;

		/** Required */
		openingTime: string;
	}
	export interface GetByIdBusinessHoursFormProperties {

		/** Required */
		closingTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: FormControl<number | null | undefined>,

		/** Required */
		openingTime: FormControl<string | null | undefined>,
	}
	export function CreateGetByIdBusinessHoursFormGroup() {
		return new FormGroup<GetByIdBusinessHoursFormProperties>({
			closingTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dayOfWeek: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			openingTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InStore {

		/** Required */
		IsCheckedIn: boolean;

		/** Required */
		StoreId: string;
	}
	export interface InStoreFormProperties {

		/** Required */
		IsCheckedIn: FormControl<boolean | null | undefined>,

		/** Required */
		StoreId: FormControl<string | null | undefined>,
	}
	export function CreateInStoreFormGroup() {
		return new FormGroup<InStoreFormProperties>({
			IsCheckedIn: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			StoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InStore1 {

		/** Required */
		IsCheckedIn: boolean;

		/** Required */
		StoreId: string;
	}
	export interface InStore1FormProperties {

		/** Required */
		IsCheckedIn: FormControl<boolean | null | undefined>,

		/** Required */
		StoreId: FormControl<string | null | undefined>,
	}
	export function CreateInStore1FormGroup() {
		return new FormGroup<InStore1FormProperties>({
			IsCheckedIn: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			StoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Item {

		/** Required */
		additionalHandlingTime: string;

		/** Required */
		dimension: ItemDimension;

		/** Required */
		groupItemId: string;

		/** Required */
		id: string;

		/** Required */
		kitItem: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;
	}
	export interface ItemFormProperties {

		/** Required */
		additionalHandlingTime: FormControl<string | null | undefined>,

		/** Required */
		groupItemId: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			additionalHandlingTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupItemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ItemDimension {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: number;
	}
	export interface ItemDimensionFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateItemDimensionFormGroup() {
		return new FormGroup<ItemDimensionFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Item1 {

		/** Required */
		additionalHandlingTime: string;

		/** Required */
		dimension: Item1Dimension;

		/** Required */
		groupItemId: string;

		/** Required */
		id: string;

		/** Required */
		kitItem: Array<string>;

		/** Required */
		modal: string;

		/**
		 * Required
		 * Type: double
		 */
		price: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;

		/** Required */
		unlimitedQuantity: boolean;
	}
	export interface Item1FormProperties {

		/** Required */
		additionalHandlingTime: FormControl<string | null | undefined>,

		/** Required */
		groupItemId: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		modal: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** Required */
		unlimitedQuantity: FormControl<boolean | null | undefined>,
	}
	export function CreateItem1FormGroup() {
		return new FormGroup<Item1FormProperties>({
			additionalHandlingTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupItemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unlimitedQuantity: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Item1Dimension {

		/**
		 * Required
		 * Type: double
		 */
		height: number;

		/**
		 * Required
		 * Type: double
		 */
		length: number;

		/**
		 * Required
		 * Type: double
		 */
		maxSumDimension: number;

		/**
		 * Required
		 * Type: double
		 */
		weight: number;

		/**
		 * Required
		 * Type: double
		 */
		width: number;
	}
	export interface Item1DimensionFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		maxSumDimension: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		weight: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateItem1DimensionFormGroup() {
		return new FormGroup<Item1DimensionFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			maxSumDimension: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Item3 {

		/** Required */
		additionalHandlingTime: string;

		/** Required */
		dimension: Item3Dimension;

		/** Required */
		groupItemId: string;

		/** Required */
		id: string;

		/** Required */
		Item3KitItem: Array<Item3KitItem>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;
	}
	export interface Item3FormProperties {

		/** Required */
		additionalHandlingTime: FormControl<string | null | undefined>,

		/** Required */
		groupItemId: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateItem3FormGroup() {
		return new FormGroup<Item3FormProperties>({
			additionalHandlingTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupItemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Item3Dimension {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: number;
	}
	export interface Item3DimensionFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateItem3DimensionFormGroup() {
		return new FormGroup<Item3DimensionFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Item3KitItem {

		/** Required */
		additionalHandlingTime: string;

		/** Required */
		dimension: Item3KitItemDimension;

		/** Required */
		groupItemId: string;

		/** Required */
		id: string;

		/** Required */
		kitItem: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;
	}
	export interface Item3KitItemFormProperties {

		/** Required */
		additionalHandlingTime: FormControl<string | null | undefined>,

		/** Required */
		groupItemId: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateItem3KitItemFormGroup() {
		return new FormGroup<Item3KitItemFormProperties>({
			additionalHandlingTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupItemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Item3KitItemDimension {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: number;
	}
	export interface Item3KitItemDimensionFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateItem3KitItemDimensionFormGroup() {
		return new FormGroup<Item3KitItemDimensionFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface KitItem {

		/** Required */
		additionalHandlingTime: string;

		/** Required */
		dimension: KitItemDimension;

		/** Required */
		groupItemId: string;

		/** Required */
		id: string;

		/** Required */
		kitItem: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;
	}
	export interface KitItemFormProperties {

		/** Required */
		additionalHandlingTime: FormControl<string | null | undefined>,

		/** Required */
		groupItemId: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateKitItemFormGroup() {
		return new FormGroup<KitItemFormProperties>({
			additionalHandlingTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupItemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface KitItemDimension {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: number;
	}
	export interface KitItemDimensionFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateKitItemDimensionFormGroup() {
		return new FormGroup<KitItemDimensionFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAllAarehouses {

		/** Required */
		id: string;

		/** Required */
		name: string;

		/** Required */
		ListAllAarehousesWarehouseDocks: Array<ListAllAarehousesWarehouseDocks>;
	}
	export interface ListAllAarehousesFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateListAllAarehousesFormGroup() {
		return new FormGroup<ListAllAarehousesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAllAarehousesWarehouseDocks {

		/**
		 * Required
		 * Type: double
		 */
		cost: number;

		/** Required */
		dockId: string;

		/** Required */
		time: string;
	}
	export interface ListAllAarehousesWarehouseDocksFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		cost: FormControl<number | null | undefined>,

		/** Required */
		dockId: FormControl<string | null | undefined>,

		/** Required */
		time: FormControl<string | null | undefined>,
	}
	export function CreateListAllAarehousesWarehouseDocksFormGroup() {
		return new FormGroup<ListAllAarehousesWarehouseDocksFormProperties>({
			cost: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dockId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAllDocks {

		/** Required */
		dockTimeFake: string;

		/** Required */
		freightTableIds: Array<string>;

		/** Required */
		id: string;

		/** Required */
		name: string;

		/** Required */
		pickupStoreInfo: ListAllDocksPickupStoreInfo;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: number;

		/** Required */
		salesChannel: string;

		/** Required */
		salesChannels: Array<string>;

		/** Required */
		timeFakeOverhead: string;

		/** Required */
		wmsEndPoint: string;
	}
	export interface ListAllDocksFormProperties {

		/** Required */
		dockTimeFake: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,

		/** Required */
		salesChannel: FormControl<string | null | undefined>,

		/** Required */
		timeFakeOverhead: FormControl<string | null | undefined>,

		/** Required */
		wmsEndPoint: FormControl<string | null | undefined>,
	}
	export function CreateListAllDocksFormGroup() {
		return new FormGroup<ListAllDocksFormProperties>({
			dockTimeFake: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			salesChannel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeFakeOverhead: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wmsEndPoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAllDocksPickupStoreInfo {

		/** Required */
		additionalInfo: string;

		/** Required */
		address: string;

		/** Required */
		dockId: string;

		/** Required */
		friendlyName: string;

		/** Required */
		isPickupStore: boolean;

		/** Required */
		storeId: string;
	}
	export interface ListAllDocksPickupStoreInfoFormProperties {

		/** Required */
		additionalInfo: FormControl<string | null | undefined>,

		/** Required */
		address: FormControl<string | null | undefined>,

		/** Required */
		dockId: FormControl<string | null | undefined>,

		/** Required */
		friendlyName: FormControl<string | null | undefined>,

		/** Required */
		isPickupStore: FormControl<boolean | null | undefined>,

		/** Required */
		storeId: FormControl<string | null | undefined>,
	}
	export function CreateListAllDocksPickupStoreInfoFormGroup() {
		return new FormGroup<ListAllDocksPickupStoreInfoFormProperties>({
			additionalInfo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			friendlyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isPickupStore: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			storeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListFreightValues {

		/**
		 * Required
		 * Type: double
		 */
		absoluteMoneyCost: number;

		/** Required */
		country: string;

		/**
		 * Required
		 * Type: double
		 */
		maxVolume: number;

		/**
		 * Required
		 * Type: double
		 */
		minimumValueInsurance: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		operationType: number;

		/** Required */
		polygon: string;

		/**
		 * Required
		 * Type: double
		 */
		pricePercent: number;

		/**
		 * Required
		 * Type: double
		 */
		pricePercentByWeight: number;

		/** Required */
		restrictedFreights: Array<string>;

		/** Required */
		timeCost: string;

		/**
		 * Required
		 * Type: double
		 */
		weightEnd: number;

		/**
		 * Required
		 * Type: double
		 */
		weightStart: number;

		/** Required */
		zipCodeEnd: string;

		/** Required */
		zipCodeStart: string;
	}
	export interface ListFreightValuesFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		absoluteMoneyCost: FormControl<number | null | undefined>,

		/** Required */
		country: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		maxVolume: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		minimumValueInsurance: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		operationType: FormControl<number | null | undefined>,

		/** Required */
		polygon: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		pricePercent: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		pricePercentByWeight: FormControl<number | null | undefined>,

		/** Required */
		timeCost: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		weightEnd: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		weightStart: FormControl<number | null | undefined>,

		/** Required */
		zipCodeEnd: FormControl<string | null | undefined>,

		/** Required */
		zipCodeStart: FormControl<string | null | undefined>,
	}
	export function CreateListFreightValuesFormGroup() {
		return new FormGroup<ListFreightValuesFormProperties>({
			absoluteMoneyCost: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxVolume: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minimumValueInsurance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			operationType: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			polygon: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pricePercent: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pricePercentByWeight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timeCost: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			weightEnd: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			weightStart: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			zipCodeEnd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			zipCodeStart: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListInventoryBySKU {

		/** Required */
		ListInventoryBySKUBalance: Array<ListInventoryBySKUBalance>;

		/** Required */
		skuId: string;
	}
	export interface ListInventoryBySKUFormProperties {

		/** Required */
		skuId: FormControl<string | null | undefined>,
	}
	export function CreateListInventoryBySKUFormGroup() {
		return new FormGroup<ListInventoryBySKUFormProperties>({
			skuId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListInventoryBySKUBalance {

		/** Required */
		hasUnlimitedQuantity: boolean;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reservedQuantity: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalQuantity: number;

		/** Required */
		warehouseId: string;

		/** Required */
		warehouseName: string;
	}
	export interface ListInventoryBySKUBalanceFormProperties {

		/** Required */
		hasUnlimitedQuantity: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reservedQuantity: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalQuantity: FormControl<number | null | undefined>,

		/** Required */
		warehouseId: FormControl<string | null | undefined>,

		/** Required */
		warehouseName: FormControl<string | null | undefined>,
	}
	export function CreateListInventoryBySKUBalanceFormGroup() {
		return new FormGroup<ListInventoryBySKUBalanceFormProperties>({
			hasUnlimitedQuantity: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			reservedQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			totalQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			warehouseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			warehouseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListReservationByWarehouseAndSKU {

		/** Required */
		aditionalTimeBlockedDays: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availabilityQuantity: number;

		/** Required */
		carrierSchedule: Array<string>;

		/** Required */
		coordinates: string;

		/** Required */
		deliveryOnWeekends: boolean;

		/** Required */
		ListReservationByWarehouseAndSKUDeliveryWindows: Array<ListReservationByWarehouseAndSKUDeliveryWindows>;

		/** Required */
		dockId: string;

		/** Required */
		dockTime: string;

		/** Required */
		freightTableId: string;

		/** Required */
		freightTableName: string;

		/** Required */
		itemId: string;

		/**
		 * Required
		 * Type: double
		 */
		listPrice: number;

		/** Required */
		location: ListReservationByWarehouseAndSKULocation;

		/** Required */
		pickupStoreInfo: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;

		/** Required */
		restrictedFreight: string;

		/** Required */
		salesChannel: string;

		/** Required */
		slaType: string;

		/** Required */
		slaTypeName: string;

		/** Required */
		timeToDockPlusDockTime: string;

		/** Required */
		totalTime: string;

		/** Required */
		transitTime: string;

		/** Required */
		wareHouseId: string;
	}
	export interface ListReservationByWarehouseAndSKUFormProperties {

		/** Required */
		aditionalTimeBlockedDays: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availabilityQuantity: FormControl<number | null | undefined>,

		/** Required */
		coordinates: FormControl<string | null | undefined>,

		/** Required */
		deliveryOnWeekends: FormControl<boolean | null | undefined>,

		/** Required */
		dockId: FormControl<string | null | undefined>,

		/** Required */
		dockTime: FormControl<string | null | undefined>,

		/** Required */
		freightTableId: FormControl<string | null | undefined>,

		/** Required */
		freightTableName: FormControl<string | null | undefined>,

		/** Required */
		itemId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		listPrice: FormControl<number | null | undefined>,

		/** Required */
		pickupStoreInfo: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** Required */
		restrictedFreight: FormControl<string | null | undefined>,

		/** Required */
		salesChannel: FormControl<string | null | undefined>,

		/** Required */
		slaType: FormControl<string | null | undefined>,

		/** Required */
		slaTypeName: FormControl<string | null | undefined>,

		/** Required */
		timeToDockPlusDockTime: FormControl<string | null | undefined>,

		/** Required */
		totalTime: FormControl<string | null | undefined>,

		/** Required */
		transitTime: FormControl<string | null | undefined>,

		/** Required */
		wareHouseId: FormControl<string | null | undefined>,
	}
	export function CreateListReservationByWarehouseAndSKUFormGroup() {
		return new FormGroup<ListReservationByWarehouseAndSKUFormProperties>({
			aditionalTimeBlockedDays: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			availabilityQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			coordinates: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deliveryOnWeekends: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			dockId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			freightTableId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			freightTableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			itemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			listPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pickupStoreInfo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			restrictedFreight: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			salesChannel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slaType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slaTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeToDockPlusDockTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			totalTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transitTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wareHouseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListReservationByWarehouseAndSKUDeliveryWindows {
		endDateUtc?: string | null;

		/** Type: double */
		listPrice?: number | null;
		startDateUtc?: string | null;
	}
	export interface ListReservationByWarehouseAndSKUDeliveryWindowsFormProperties {
		endDateUtc: FormControl<string | null | undefined>,

		/** Type: double */
		listPrice: FormControl<number | null | undefined>,
		startDateUtc: FormControl<string | null | undefined>,
	}
	export function CreateListReservationByWarehouseAndSKUDeliveryWindowsFormGroup() {
		return new FormGroup<ListReservationByWarehouseAndSKUDeliveryWindowsFormProperties>({
			endDateUtc: new FormControl<string | null | undefined>(undefined),
			listPrice: new FormControl<number | null | undefined>(undefined),
			startDateUtc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListReservationByWarehouseAndSKULocation {

		/** Required */
		country: string;

		/** Required */
		deliveryPointId: string;

		/** Required */
		inStore: ListReservationByWarehouseAndSKULocationInStore;

		/** Required */
		point: string;

		/** Required */
		zipCode: string;
	}
	export interface ListReservationByWarehouseAndSKULocationFormProperties {

		/** Required */
		country: FormControl<string | null | undefined>,

		/** Required */
		deliveryPointId: FormControl<string | null | undefined>,

		/** Required */
		point: FormControl<string | null | undefined>,

		/** Required */
		zipCode: FormControl<string | null | undefined>,
	}
	export function CreateListReservationByWarehouseAndSKULocationFormGroup() {
		return new FormGroup<ListReservationByWarehouseAndSKULocationFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deliveryPointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			point: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			zipCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListReservationByWarehouseAndSKULocationInStore {

		/** Required */
		IsCheckedIn: boolean;

		/** Required */
		StoreId: string;
	}
	export interface ListReservationByWarehouseAndSKULocationInStoreFormProperties {

		/** Required */
		IsCheckedIn: FormControl<boolean | null | undefined>,

		/** Required */
		StoreId: FormControl<string | null | undefined>,
	}
	export function CreateListReservationByWarehouseAndSKULocationInStoreFormGroup() {
		return new FormGroup<ListReservationByWarehouseAndSKULocationInStoreFormProperties>({
			IsCheckedIn: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			StoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Location {

		/** Required */
		country: string;

		/** Required */
		inStore: LocationInStore;

		/** Required */
		zipCode: string;
	}
	export interface LocationFormProperties {

		/** Required */
		country: FormControl<string | null | undefined>,

		/** Required */
		zipCode: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			zipCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LocationInStore {

		/** Required */
		IsCheckedIn: boolean;

		/** Required */
		StoreId: string;
	}
	export interface LocationInStoreFormProperties {

		/** Required */
		IsCheckedIn: FormControl<boolean | null | undefined>,

		/** Required */
		StoreId: FormControl<string | null | undefined>,
	}
	export function CreateLocationInStoreFormGroup() {
		return new FormGroup<LocationInStoreFormProperties>({
			IsCheckedIn: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			StoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Location1 {

		/** Required */
		country: string;

		/** Required */
		deliveryPointId: string;

		/** Required */
		inStore: Location1InStore;

		/** Required */
		point: string;

		/** Required */
		zipCode: string;
	}
	export interface Location1FormProperties {

		/** Required */
		country: FormControl<string | null | undefined>,

		/** Required */
		deliveryPointId: FormControl<string | null | undefined>,

		/** Required */
		point: FormControl<string | null | undefined>,

		/** Required */
		zipCode: FormControl<string | null | undefined>,
	}
	export function CreateLocation1FormGroup() {
		return new FormGroup<Location1FormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deliveryPointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			point: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			zipCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Location1InStore {

		/** Required */
		IsCheckedIn: boolean;

		/** Required */
		StoreId: string;
	}
	export interface Location1InStoreFormProperties {

		/** Required */
		IsCheckedIn: FormControl<boolean | null | undefined>,

		/** Required */
		StoreId: FormControl<string | null | undefined>,
	}
	export function CreateLocation1InStoreFormGroup() {
		return new FormGroup<Location1InStoreFormProperties>({
			IsCheckedIn: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			StoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Location3 {

		/** Required */
		country: string;

		/** Required */
		point: Array<number>;

		/** Required */
		zipCode: string;
	}
	export interface Location3FormProperties {

		/** Required */
		country: FormControl<string | null | undefined>,

		/** Required */
		zipCode: FormControl<string | null | undefined>,
	}
	export function CreateLocation3FormGroup() {
		return new FormGroup<Location3FormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			zipCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Location5 {

		/**
		 * Required
		 * Type: double
		 */
		latitude: number;

		/**
		 * Required
		 * Type: double
		 */
		longitude: number;
	}
	export interface Location5FormProperties {

		/**
		 * Required
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateLocation5FormGroup() {
		return new FormGroup<Location5FormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MaxDimension {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxSumDimension: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: number;
	}
	export interface MaxDimensionFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxSumDimension: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateMaxDimensionFormGroup() {
		return new FormGroup<MaxDimensionFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			maxSumDimension: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MaxDimension1 {

		/** Required */
		height: string;

		/** Required */
		length: string;

		/** Required */
		maxSumDimension: string;
	}
	export interface MaxDimension1FormProperties {

		/** Required */
		height: FormControl<string | null | undefined>,

		/** Required */
		length: FormControl<string | null | undefined>,

		/** Required */
		maxSumDimension: FormControl<string | null | undefined>,
	}
	export function CreateMaxDimension1FormGroup() {
		return new FormGroup<MaxDimension1FormProperties>({
			height: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxSumDimension: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MaxDimension2 {

		/**
		 * Required
		 * Type: double
		 */
		height: number;

		/**
		 * Required
		 * Type: double
		 */
		length: number;

		/**
		 * Required
		 * Type: double
		 */
		maxSumDimension: number;

		/**
		 * Required
		 * Type: double
		 */
		weight: number;

		/**
		 * Required
		 * Type: double
		 */
		width: number;
	}
	export interface MaxDimension2FormProperties {

		/**
		 * Required
		 * Type: double
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		maxSumDimension: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		weight: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateMaxDimension2FormGroup() {
		return new FormGroup<MaxDimension2FormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			maxSumDimension: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PickupStoreInfo {

		/** Required */
		additionalInfo: string;

		/** Required */
		address: PickupStoreInfoAddress;

		/** Required */
		dockId: string;

		/** Required */
		friendlyName: string;

		/** Required */
		isPickupStore: boolean;

		/** Required */
		storeId: string;
	}
	export interface PickupStoreInfoFormProperties {

		/** Required */
		additionalInfo: FormControl<string | null | undefined>,

		/** Required */
		dockId: FormControl<string | null | undefined>,

		/** Required */
		friendlyName: FormControl<string | null | undefined>,

		/** Required */
		isPickupStore: FormControl<boolean | null | undefined>,

		/** Required */
		storeId: FormControl<string | null | undefined>,
	}
	export function CreatePickupStoreInfoFormGroup() {
		return new FormGroup<PickupStoreInfoFormProperties>({
			additionalInfo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			friendlyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isPickupStore: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			storeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PickupStoreInfoAddress {

		/** Required */
		city: string;

		/** Required */
		complement: string;

		/** Required */
		coordinates: string;

		/** Required */
		country: PickupStoreInfoAddressCountry;

		/** Required */
		neighborhood: string;

		/** Required */
		number: string;

		/** Required */
		postalCode: string;

		/** Required */
		state: string;

		/** Required */
		street: string;
	}
	export interface PickupStoreInfoAddressFormProperties {

		/** Required */
		city: FormControl<string | null | undefined>,

		/** Required */
		complement: FormControl<string | null | undefined>,

		/** Required */
		coordinates: FormControl<string | null | undefined>,

		/** Required */
		neighborhood: FormControl<string | null | undefined>,

		/** Required */
		number: FormControl<string | null | undefined>,

		/** Required */
		postalCode: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<string | null | undefined>,

		/** Required */
		street: FormControl<string | null | undefined>,
	}
	export function CreatePickupStoreInfoAddressFormGroup() {
		return new FormGroup<PickupStoreInfoAddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			complement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			coordinates: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			neighborhood: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			street: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PickupStoreInfoAddressCountry {

		/** Required */
		acronym: string;

		/** Required */
		name: string;
	}
	export interface PickupStoreInfoAddressCountryFormProperties {

		/** Required */
		acronym: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePickupStoreInfoAddressCountryFormGroup() {
		return new FormGroup<PickupStoreInfoAddressCountryFormProperties>({
			acronym: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PickupStoreInfo1 {

		/** Required */
		additionalInfo: string;

		/** Required */
		address: string;

		/** Required */
		dockId: string;

		/** Required */
		friendlyName: string;

		/** Required */
		isPickupStore: boolean;

		/** Required */
		storeId: string;
	}
	export interface PickupStoreInfo1FormProperties {

		/** Required */
		additionalInfo: FormControl<string | null | undefined>,

		/** Required */
		address: FormControl<string | null | undefined>,

		/** Required */
		dockId: FormControl<string | null | undefined>,

		/** Required */
		friendlyName: FormControl<string | null | undefined>,

		/** Required */
		isPickupStore: FormControl<boolean | null | undefined>,

		/** Required */
		storeId: FormControl<string | null | undefined>,
	}
	export function CreatePickupStoreInfo1FormGroup() {
		return new FormGroup<PickupStoreInfo1FormProperties>({
			additionalInfo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			friendlyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isPickupStore: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			storeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SlaRequest {

		/** Required */
		deliveryWindows: string;

		/** Required */
		dockId: string;

		/** Required */
		dockTime: string;

		/** Required */
		freightTableId: string;

		/** Required */
		freightTableName: string;

		/** Required */
		item: SlaRequestItem;

		/**
		 * Required
		 * Type: double
		 */
		listPrice: number;

		/** Required */
		location: SlaRequestLocation;

		/** Required */
		pickupStoreInfo: string;

		/**
		 * Required
		 * Type: double
		 */
		promotionalPrice: number;

		/** Required */
		slaType: string;

		/** Required */
		slaTypeName: string;

		/** Required */
		timeToDockPlusDockTime: string;

		/** Required */
		totalTime: string;

		/** Required */
		transitTime: string;

		/** Required */
		wareHouseId: string;

		/** Required */
		wmsEndPoint: string;
	}
	export interface SlaRequestFormProperties {

		/** Required */
		deliveryWindows: FormControl<string | null | undefined>,

		/** Required */
		dockId: FormControl<string | null | undefined>,

		/** Required */
		dockTime: FormControl<string | null | undefined>,

		/** Required */
		freightTableId: FormControl<string | null | undefined>,

		/** Required */
		freightTableName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		listPrice: FormControl<number | null | undefined>,

		/** Required */
		pickupStoreInfo: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		promotionalPrice: FormControl<number | null | undefined>,

		/** Required */
		slaType: FormControl<string | null | undefined>,

		/** Required */
		slaTypeName: FormControl<string | null | undefined>,

		/** Required */
		timeToDockPlusDockTime: FormControl<string | null | undefined>,

		/** Required */
		totalTime: FormControl<string | null | undefined>,

		/** Required */
		transitTime: FormControl<string | null | undefined>,

		/** Required */
		wareHouseId: FormControl<string | null | undefined>,

		/** Required */
		wmsEndPoint: FormControl<string | null | undefined>,
	}
	export function CreateSlaRequestFormGroup() {
		return new FormGroup<SlaRequestFormProperties>({
			deliveryWindows: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			freightTableId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			freightTableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			listPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pickupStoreInfo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			promotionalPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			slaType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slaTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeToDockPlusDockTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			totalTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transitTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wareHouseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wmsEndPoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SlaRequestItem {

		/** Required */
		additionalHandlingTime: string;

		/** Required */
		dimension: SlaRequestItemDimension;

		/** Required */
		groupItemId: string;

		/** Required */
		id: string;

		/** Required */
		kitItem: Array<string>;

		/** Required */
		modal: string;

		/**
		 * Required
		 * Type: double
		 */
		price: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;

		/** Required */
		unlimitedQuantity: boolean;
	}
	export interface SlaRequestItemFormProperties {

		/** Required */
		additionalHandlingTime: FormControl<string | null | undefined>,

		/** Required */
		groupItemId: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		modal: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** Required */
		unlimitedQuantity: FormControl<boolean | null | undefined>,
	}
	export function CreateSlaRequestItemFormGroup() {
		return new FormGroup<SlaRequestItemFormProperties>({
			additionalHandlingTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupItemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unlimitedQuantity: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SlaRequestItemDimension {

		/**
		 * Required
		 * Type: double
		 */
		height: number;

		/**
		 * Required
		 * Type: double
		 */
		length: number;

		/**
		 * Required
		 * Type: double
		 */
		maxSumDimension: number;

		/**
		 * Required
		 * Type: double
		 */
		weight: number;

		/**
		 * Required
		 * Type: double
		 */
		width: number;
	}
	export interface SlaRequestItemDimensionFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		maxSumDimension: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		weight: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateSlaRequestItemDimensionFormGroup() {
		return new FormGroup<SlaRequestItemDimensionFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			maxSumDimension: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SlaRequestLocation {

		/** Required */
		country: string;

		/** Required */
		deliveryPointId: string;

		/** Required */
		inStore: SlaRequestLocationInStore;

		/** Required */
		point: string;

		/** Required */
		zipCode: string;
	}
	export interface SlaRequestLocationFormProperties {

		/** Required */
		country: FormControl<string | null | undefined>,

		/** Required */
		deliveryPointId: FormControl<string | null | undefined>,

		/** Required */
		point: FormControl<string | null | undefined>,

		/** Required */
		zipCode: FormControl<string | null | undefined>,
	}
	export function CreateSlaRequestLocationFormGroup() {
		return new FormGroup<SlaRequestLocationFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deliveryPointId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			point: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			zipCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SlaRequestLocationInStore {

		/** Required */
		IsCheckedIn: boolean;

		/** Required */
		StoreId: string;
	}
	export interface SlaRequestLocationInStoreFormProperties {

		/** Required */
		IsCheckedIn: FormControl<boolean | null | undefined>,

		/** Required */
		StoreId: FormControl<string | null | undefined>,
	}
	export function CreateSlaRequestLocationInStoreFormGroup() {
		return new FormGroup<SlaRequestLocationInStoreFormProperties>({
			IsCheckedIn: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			StoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Success {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availableQuantity: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dispatchedReservationsQuantity: number;

		/** Required */
		isUnlimitedQuantity: boolean;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;

		/** Required */
		skuId: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalReservedQuantity: number;

		/** Required */
		warehouseId: string;
	}
	export interface SuccessFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availableQuantity: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dispatchedReservationsQuantity: FormControl<number | null | undefined>,

		/** Required */
		isUnlimitedQuantity: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** Required */
		skuId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalReservedQuantity: FormControl<number | null | undefined>,

		/** Required */
		warehouseId: FormControl<string | null | undefined>,
	}
	export function CreateSuccessFormGroup() {
		return new FormGroup<SuccessFormProperties>({
			availableQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dispatchedReservationsQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isUnlimitedQuantity: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			skuId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			totalReservedQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			warehouseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateInventoryBySkuandWarehouseRequest {

		/** Required */
		dateUtcOnBalanceSystem: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: number;

		/** Required */
		unlimitedQuantity: boolean;
	}
	export interface UpdateInventoryBySkuandWarehouseRequestFormProperties {

		/** Required */
		dateUtcOnBalanceSystem: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** Required */
		unlimitedQuantity: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateInventoryBySkuandWarehouseRequestFormGroup() {
		return new FormGroup<UpdateInventoryBySkuandWarehouseRequestFormProperties>({
			dateUtcOnBalanceSystem: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unlimitedQuantity: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WarehouseDock {

		/** Required */
		cost: string;

		/** Required */
		costToDisplay: string;

		/** Required */
		dockId: string;

		/** Required */
		name: string;

		/** Required */
		time: string;

		/** Required */
		translateDays: string;
	}
	export interface WarehouseDockFormProperties {

		/** Required */
		cost: FormControl<string | null | undefined>,

		/** Required */
		costToDisplay: FormControl<string | null | undefined>,

		/** Required */
		dockId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		time: FormControl<string | null | undefined>,

		/** Required */
		translateDays: FormControl<string | null | undefined>,
	}
	export function CreateWarehouseDockFormGroup() {
		return new FormGroup<WarehouseDockFormProperties>({
			cost: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			costToDisplay: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dockId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			translateDays: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WarehouseDock1 {

		/**
		 * Required
		 * Type: double
		 */
		cost: number;

		/** Required */
		dockId: string;

		/** Required */
		time: string;
	}
	export interface WarehouseDock1FormProperties {

		/**
		 * Required
		 * Type: double
		 */
		cost: FormControl<number | null | undefined>,

		/** Required */
		dockId: FormControl<string | null | undefined>,

		/** Required */
		time: FormControl<string | null | undefined>,
	}
	export function CreateWarehouseDock1FormGroup() {
		return new FormGroup<WarehouseDock1FormProperties>({
			cost: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dockId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Allcarrier {

		/** Required */
		carrierSchedule: Array<string>;

		/** Required */
		dayOfWeekBlockeds: Array<string>;

		/**
		 * Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example.
		 * Required
		 */
		AllcarrierDayOfWeekForDelivery: Array<AllcarrierDayOfWeekForDelivery>;

		/** Required */
		deliveryOnWeekends: boolean;

		/** Required */
		exclusiveToDeliveryPoints: boolean;

		/**
		 * Required
		 * Type: double
		 */
		factorCubicWeight: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		freightTableProcessStatus: number;

		/** Required */
		freightTableValueError: string;

		/** Required */
		freightValue: Array<string>;

		/** Required */
		id: string;

		/** Required */
		isPolygon: boolean;

		/** Required */
		maxDimension: AllcarrierMaxDimension;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxRangeDelivery: number;

		/**
		 * Required
		 * Type: double
		 */
		minimunCubicWeight: number;

		/** Required */
		modals: Array<string>;

		/** Required */
		name: string;

		/** Required */
		numberOfItemsPerShipment: string;

		/** Required */
		onlyItemsWithDefinedModal: boolean;

		/** Required */
		scheduledDelivery: boolean;

		/** Required */
		slaType: string;
	}
	export interface AllcarrierFormProperties {

		/** Required */
		deliveryOnWeekends: FormControl<boolean | null | undefined>,

		/** Required */
		exclusiveToDeliveryPoints: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		factorCubicWeight: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		freightTableProcessStatus: FormControl<number | null | undefined>,

		/** Required */
		freightTableValueError: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		isPolygon: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxRangeDelivery: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		minimunCubicWeight: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		numberOfItemsPerShipment: FormControl<string | null | undefined>,

		/** Required */
		onlyItemsWithDefinedModal: FormControl<boolean | null | undefined>,

		/** Required */
		scheduledDelivery: FormControl<boolean | null | undefined>,

		/** Required */
		slaType: FormControl<string | null | undefined>,
	}
	export function CreateAllcarrierFormGroup() {
		return new FormGroup<AllcarrierFormProperties>({
			deliveryOnWeekends: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			exclusiveToDeliveryPoints: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			factorCubicWeight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			freightTableProcessStatus: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			freightTableValueError: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isPolygon: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			maxRangeDelivery: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minimunCubicWeight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numberOfItemsPerShipment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			onlyItemsWithDefinedModal: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			scheduledDelivery: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			slaType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AllcarrierDayOfWeekForDelivery {

		/**
		 * Day of the week, from `0` (sunday) to `6` (saturday).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: number;

		/**
		 * Reservation windows for scheduled delivery.
		 * Required
		 */
		AllcarrierDayOfWeekForDeliveryDeliveryRanges: Array<AllcarrierDayOfWeekForDeliveryDeliveryRanges>;
	}
	export interface AllcarrierDayOfWeekForDeliveryFormProperties {

		/**
		 * Day of the week, from `0` (sunday) to `6` (saturday).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: FormControl<number | null | undefined>,
	}
	export function CreateAllcarrierDayOfWeekForDeliveryFormGroup() {
		return new FormGroup<AllcarrierDayOfWeekForDeliveryFormProperties>({
			dayOfWeek: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AllcarrierDayOfWeekForDeliveryDeliveryRanges {

		/** Sets maximum delivery capacity for a given reservation window for scheduled delivery. */
		AllcarrierDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity?: Array<AllcarrierDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity>;

		/**
		 * End time for day of the week.
		 * Required
		 */
		endTime: string;

		/**
		 * List price for day of the week.
		 * Required
		 * Type: double
		 */
		listPrice: number;

		/**
		 * Start time for day of the week.
		 * Required
		 */
		startTime: string;
	}
	export interface AllcarrierDayOfWeekForDeliveryDeliveryRangesFormProperties {

		/**
		 * End time for day of the week.
		 * Required
		 */
		endTime: FormControl<string | null | undefined>,

		/**
		 * List price for day of the week.
		 * Required
		 * Type: double
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * Start time for day of the week.
		 * Required
		 */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateAllcarrierDayOfWeekForDeliveryDeliveryRangesFormGroup() {
		return new FormGroup<AllcarrierDayOfWeekForDeliveryDeliveryRangesFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			listPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AllcarrierDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity {

		/**
		 * Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).
		 * Required
		 */
		capacityType: string;

		/**
		 * Maximum number of orders or SKUs that the store is capable of fulfilling.
		 * Required
		 * Type: double
		 */
		maxValue: number;
	}
	export interface AllcarrierDayOfWeekForDeliveryDeliveryRangesDeliveryCapacityFormProperties {

		/**
		 * Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).
		 * Required
		 */
		capacityType: FormControl<string | null | undefined>,

		/**
		 * Maximum number of orders or SKUs that the store is capable of fulfilling.
		 * Required
		 * Type: double
		 */
		maxValue: FormControl<number | null | undefined>,
	}
	export function CreateAllcarrierDayOfWeekForDeliveryDeliveryRangesDeliveryCapacityFormGroup() {
		return new FormGroup<AllcarrierDayOfWeekForDeliveryDeliveryRangesDeliveryCapacityFormProperties>({
			capacityType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AllcarrierMaxDimension {

		/**
		 * Required
		 * Type: double
		 */
		height: number;

		/**
		 * Required
		 * Type: double
		 */
		length: number;

		/**
		 * Required
		 * Type: double
		 */
		maxSumDimension: number;

		/**
		 * Required
		 * Type: double
		 */
		weight: number;

		/**
		 * Required
		 * Type: double
		 */
		width: number;
	}
	export interface AllcarrierMaxDimensionFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		maxSumDimension: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		weight: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateAllcarrierMaxDimensionFormGroup() {
		return new FormGroup<AllcarrierMaxDimensionFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			maxSumDimension: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Carrierbyid {

		/** Required */
		carrierSchedule: Array<string>;

		/** Required */
		dayOfWeekBlockeds: Array<string>;

		/**
		 * Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example.
		 * Required
		 */
		CarrierbyidDayOfWeekForDelivery: Array<CarrierbyidDayOfWeekForDelivery>;

		/** Required */
		deliveryOnWeekends: boolean;

		/** Required */
		exclusiveToDeliveryPoints: boolean;

		/**
		 * Required
		 * Type: double
		 */
		factorCubicWeight: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		freightTableProcessStatus: number;

		/** Required */
		freightTableValueError: string;

		/** Required */
		freightValue: Array<string>;

		/** Required */
		id: string;

		/** Required */
		isPolygon: boolean;

		/** Required */
		maxDimension: CarrierbyidMaxDimension;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxRangeDelivery: number;

		/**
		 * Required
		 * Type: double
		 */
		minimunCubicWeight: number;

		/** Required */
		modals: Array<string>;

		/** Required */
		name: string;

		/** Required */
		numberOfItemsPerShipment: string;

		/** Required */
		onlyItemsWithDefinedModal: boolean;

		/** Required */
		scheduledDelivery: boolean;

		/** Required */
		slaType: string;
	}
	export interface CarrierbyidFormProperties {

		/** Required */
		deliveryOnWeekends: FormControl<boolean | null | undefined>,

		/** Required */
		exclusiveToDeliveryPoints: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		factorCubicWeight: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		freightTableProcessStatus: FormControl<number | null | undefined>,

		/** Required */
		freightTableValueError: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		isPolygon: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxRangeDelivery: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		minimunCubicWeight: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		numberOfItemsPerShipment: FormControl<string | null | undefined>,

		/** Required */
		onlyItemsWithDefinedModal: FormControl<boolean | null | undefined>,

		/** Required */
		scheduledDelivery: FormControl<boolean | null | undefined>,

		/** Required */
		slaType: FormControl<string | null | undefined>,
	}
	export function CreateCarrierbyidFormGroup() {
		return new FormGroup<CarrierbyidFormProperties>({
			deliveryOnWeekends: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			exclusiveToDeliveryPoints: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			factorCubicWeight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			freightTableProcessStatus: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			freightTableValueError: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isPolygon: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			maxRangeDelivery: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minimunCubicWeight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numberOfItemsPerShipment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			onlyItemsWithDefinedModal: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			scheduledDelivery: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			slaType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CarrierbyidDayOfWeekForDelivery {

		/**
		 * Day of the week, from `0` (sunday) to `6` (saturday).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: number;

		/**
		 * Reservation windows for scheduled delivery.
		 * Required
		 */
		CarrierbyidDayOfWeekForDeliveryDeliveryRanges: Array<CarrierbyidDayOfWeekForDeliveryDeliveryRanges>;
	}
	export interface CarrierbyidDayOfWeekForDeliveryFormProperties {

		/**
		 * Day of the week, from `0` (sunday) to `6` (saturday).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: FormControl<number | null | undefined>,
	}
	export function CreateCarrierbyidDayOfWeekForDeliveryFormGroup() {
		return new FormGroup<CarrierbyidDayOfWeekForDeliveryFormProperties>({
			dayOfWeek: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CarrierbyidDayOfWeekForDeliveryDeliveryRanges {

		/** Sets maximum delivery capacity for a given reservation window for scheduled delivery. */
		CarrierbyidDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity?: Array<CarrierbyidDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity>;

		/**
		 * End time for day of the week.
		 * Required
		 */
		endTime: string;

		/**
		 * List price for day of the week.
		 * Required
		 * Type: double
		 */
		listPrice: number;

		/**
		 * Start time for day of the week.
		 * Required
		 */
		startTime: string;
	}
	export interface CarrierbyidDayOfWeekForDeliveryDeliveryRangesFormProperties {

		/**
		 * End time for day of the week.
		 * Required
		 */
		endTime: FormControl<string | null | undefined>,

		/**
		 * List price for day of the week.
		 * Required
		 * Type: double
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * Start time for day of the week.
		 * Required
		 */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateCarrierbyidDayOfWeekForDeliveryDeliveryRangesFormGroup() {
		return new FormGroup<CarrierbyidDayOfWeekForDeliveryDeliveryRangesFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			listPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CarrierbyidDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity {

		/**
		 * Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).
		 * Required
		 */
		capacityType: string;

		/**
		 * Maximum number of orders or SKUs that the store is capable of fulfilling.
		 * Required
		 * Type: double
		 */
		maxValue: number;
	}
	export interface CarrierbyidDayOfWeekForDeliveryDeliveryRangesDeliveryCapacityFormProperties {

		/**
		 * Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).
		 * Required
		 */
		capacityType: FormControl<string | null | undefined>,

		/**
		 * Maximum number of orders or SKUs that the store is capable of fulfilling.
		 * Required
		 * Type: double
		 */
		maxValue: FormControl<number | null | undefined>,
	}
	export function CreateCarrierbyidDayOfWeekForDeliveryDeliveryRangesDeliveryCapacityFormGroup() {
		return new FormGroup<CarrierbyidDayOfWeekForDeliveryDeliveryRangesDeliveryCapacityFormProperties>({
			capacityType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CarrierbyidMaxDimension {

		/**
		 * Required
		 * Type: double
		 */
		height: number;

		/**
		 * Required
		 * Type: double
		 */
		length: number;

		/**
		 * Required
		 * Type: double
		 */
		maxSumDimension: number;

		/**
		 * Required
		 * Type: double
		 */
		weight: number;

		/**
		 * Required
		 * Type: double
		 */
		width: number;
	}
	export interface CarrierbyidMaxDimensionFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		maxSumDimension: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		weight: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateCarrierbyidMaxDimensionFormGroup() {
		return new FormGroup<CarrierbyidMaxDimensionFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			maxSumDimension: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Search capacity reservations in time range
		 * Get information on all capacity reservations made to scheduled delivery windows in a given time range.
		 * > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.
		 * > Note that the combined string `carrier@{capacityType}@{shippingPolicyId}` can be referred to as a "resource" in the API's messages.
		 * Get api/logistics-capacity/resources/carrier@{capacityType}@{shippingPolicyId}/time-frames
		 * @param {string} capacityType How the delivery capacity is measured as defined in the shipping policy. Capacity can be measured by maximum number of orders (`"orders_quantity"`) or SKUs (`"skus_quantity"`).
		 * @param {string} shippingPolicyId ID of shipping policy to search.
		 * @param {string} rangeStart Starting date of time range
		 * @param {string} rangeEnd End date of time range.
		 * @return {void} OK
		 */
		Scheduled_DeliveryGetByCapacityTypeAndShippingPolicyIdAndRangeStartAndRangeEnd(capacityType: string, shippingPolicyId: string, rangeStart: string, rangeEnd: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/logistics-capacity/resources/carrier@' + (capacityType == null ? '' : encodeURIComponent(capacityType)) + '@' + (shippingPolicyId == null ? '' : encodeURIComponent(shippingPolicyId)) + '/time-frames&rangeStart=' + (rangeStart == null ? '' : encodeURIComponent(rangeStart)) + '&rangeEnd=' + (rangeEnd == null ? '' : encodeURIComponent(rangeEnd)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get capacity reservation usage by window
		 * Retrieves capacity usage of a specific scheduled delivery reservation window.
		 * > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns time adjusted to the configured time zone of the account.
		 * > Note that the combined string `carrier@{capacityType}@{shippingPolicyId}` can be referred to as a "resource" in the API's messages.
		 * Get api/logistics-capacity/resources/carrier@{capacityType}@{shippingPolicyId}/time-frames/{windowDay}F{windowStartTime}T{windowEndTime}
		 * @param {string} capacityType How the delivery capacity is measured as defined in the shipping policy. Capacity can be measured by maximum number of orders (`"orders_quantity"`) or SKUs (`"skus_quantity"`).
		 * @param {string} shippingPolicyId ID of shipping policy to search.
		 * @param {string} windowDay Day of the specific scheduled delivery window to be consulted for reservations.
		 * @param {string} windowStartTime Start time of specific scheduled delivery window to be consulted for reservations.
		 * @param {string} windowEndTime End time of specific scheduled delivery window to be consulted for reservations.
		 * @return {void} OK
		 */
		Scheduled_DeliveryGetByCapacityTypeAndShippingPolicyIdAndWindowDayAndWindowStartTimeAndWindowEndTime(capacityType: string, shippingPolicyId: string, windowDay: string, windowStartTime: string, windowEndTime: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/logistics-capacity/resources/carrier@' + (capacityType == null ? '' : encodeURIComponent(capacityType)) + '@' + (shippingPolicyId == null ? '' : encodeURIComponent(shippingPolicyId)) + '/time-frames/' + (windowDay == null ? '' : encodeURIComponent(windowDay)) + 'F' + (windowStartTime == null ? '' : encodeURIComponent(windowStartTime)) + 'T' + (windowEndTime == null ? '' : encodeURIComponent(windowEndTime)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve blocked delivery windows
		 * Lists all blocked delivery windows of your store's shipping policies, searching by carrier ID.
		 * > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.
		 * Get api/logistics/pvt/configuration/carriers/{carrierId}/getdayofweekblocked
		 * @return {void} OK
		 */
		RetrieveBlockedDeliveryWindows(carrierId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/logistics/pvt/configuration/carriers/' + (carrierId == null ? '' : encodeURIComponent(carrierId)) + '/getdayofweekblocked', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all  docks
		 * Informs a list of all docks.
		 * Get api/logistics/pvt/configuration/docks
		 * @return {void} OK
		 */
		AllDocks(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/logistics/pvt/configuration/docks', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete dock
		 * Deletes dock by dock ID.
		 * Delete api/logistics/pvt/configuration/docks/{dockId}
		 * @return {void} OK
		 */
		Dock(dockId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/logistics/pvt/configuration/docks/' + (dockId == null ? '' : encodeURIComponent(dockId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List dock by ID
		 * Informs a given dock's information, searching by dock ID.
		 * Get api/logistics/pvt/configuration/docks/{dockId}
		 * @return {void} OK
		 */
		DockById(dockId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/logistics/pvt/configuration/docks/' + (dockId == null ? '' : encodeURIComponent(dockId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Activate dock
		 * Activates dock through dock ID.
		 * Post api/logistics/pvt/configuration/docks/{dockId}/activation
		 * @return {void} OK
		 */
		ActivateDock(dockId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/logistics/pvt/configuration/docks/' + (dockId == null ? '' : encodeURIComponent(dockId)) + '/activation', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deactivate dock
		 * Deactivate dock by dock ID
		 * Post api/logistics/pvt/configuration/docks/{dockId}/deactivation
		 * @return {void} OK
		 */
		DeactivateDock(dockId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/logistics/pvt/configuration/docks/' + (dockId == null ? '' : encodeURIComponent(dockId)) + '/deactivation', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List freight values
		 * Lists freight values apointed to your store's carriers, searching by carrier ID and postal code (`cep`).
		 * Get api/logistics/pvt/configuration/freights/{carrierId}/{cep}/values
		 * @param {string} carrierId Carrier ID
		 * @param {string} cep Postal code.
		 * @return {void} OK
		 */
		FreightValues(carrierId: string, cep: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/logistics/pvt/configuration/freights/' + (carrierId == null ? '' : encodeURIComponent(carrierId)) + '/' + (cep == null ? '' : encodeURIComponent(cep)) + '/values', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List paged polygons
		 * Lists stored polygons.
		 * Get api/logistics/pvt/configuration/geoshape
		 * @return {void} OK
		 */
		PagedPolygons(page: string, perPage: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/logistics/pvt/configuration/geoshape?page=' + (page == null ? '' : encodeURIComponent(page)) + '&perPage=' + (perPage == null ? '' : encodeURIComponent(perPage)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete polygon
		 * Deletes polygon set up in your store, by polygon name.
		 * Delete api/logistics/pvt/configuration/geoshape/{polygonName}
		 * @return {void} OK
		 */
		DeletePolygon(polygonName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/logistics/pvt/configuration/geoshape/' + (polygonName == null ? '' : encodeURIComponent(polygonName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List polygon by ID
		 * Lists your store's polygons by searching through polygon name
		 * Get api/logistics/pvt/configuration/geoshape/{polygonName}
		 * @return {void} OK
		 */
		PolygonbyId(polygonName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/logistics/pvt/configuration/geoshape/' + (polygonName == null ? '' : encodeURIComponent(polygonName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all holidays
		 * Lists information of all holidays.
		 * Get api/logistics/pvt/configuration/holidays
		 * @return {void} OK
		 */
		AllHolidays(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/logistics/pvt/configuration/holidays', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete holiday
		 * Deletes given holidays set up in your store.
		 * Delete api/logistics/pvt/configuration/holidays/{holidayId}
		 * @return {void} OK
		 */
		Holiday(holidayId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/logistics/pvt/configuration/holidays/' + (holidayId == null ? '' : encodeURIComponent(holidayId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List holiday by ID
		 * Lists holiday's information by holiday ID.
		 * Get api/logistics/pvt/configuration/holidays/{holidayId}
		 * @return {void} OK
		 */
		HolidayById(holidayId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/logistics/pvt/configuration/holidays/' + (holidayId == null ? '' : encodeURIComponent(holidayId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all pickup points
		 * Lists all of your store's pickup points.
		 * Get api/logistics/pvt/configuration/pickuppoints
		 * @return {void} OK
		 */
		ListAllPickupPpoints(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/logistics/pvt/configuration/pickuppoints', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List paged Pickup Points
		 * Lists paged pickup points in your store.
		 * Get api/logistics/pvt/configuration/pickuppoints/_search
		 * @return {void} OK
		 */
		Getpaged(page: string, pageSize: string, keyword: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/logistics/pvt/configuration/pickuppoints/_search?page=' + (page == null ? '' : encodeURIComponent(page)) + '&pageSize=' + (pageSize == null ? '' : encodeURIComponent(pageSize)) + '&keyword=' + (keyword == null ? '' : encodeURIComponent(keyword)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Pickup Point
		 * Deletes a given pickup point for your store, by pickup point ID.
		 * Delete api/logistics/pvt/configuration/pickuppoints/{pickupPointId}
		 * @return {void} OK
		 */
		Delete(pickupPointId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/logistics/pvt/configuration/pickuppoints/' + (pickupPointId == null ? '' : encodeURIComponent(pickupPointId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List Pickup Point By ID
		 * Lists your store's pickup points while searching by ID.
		 * Get api/logistics/pvt/configuration/pickuppoints/{pickupPointId}
		 * @return {void} 
		 */
		GetById(pickupPointId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/logistics/pvt/configuration/pickuppoints/' + (pickupPointId == null ? '' : encodeURIComponent(pickupPointId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all warehouses
		 * Lists information about all warehouses set up in your store.
		 * Get api/logistics/pvt/configuration/warehouses
		 * @return {void} OK
		 */
		AllWarehouses(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/logistics/pvt/configuration/warehouses', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove warehouse
		 * Deletes given warehouse by warehouse ID.
		 * Delete api/logistics/pvt/configuration/warehouses/{warehouseId}
		 * @return {void} OK
		 */
		RemoveWarehouse(warehouseId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/logistics/pvt/configuration/warehouses/' + (warehouseId == null ? '' : encodeURIComponent(warehouseId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List warehouse by ID
		 * Lists the information of a given warehouse, searching by warehouse ID.
		 * Get api/logistics/pvt/configuration/warehouses/{warehouseId}
		 * @return {void} OK
		 */
		WarehouseById(warehouseId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/logistics/pvt/configuration/warehouses/' + (warehouseId == null ? '' : encodeURIComponent(warehouseId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Activate warehouse
		 * Activates a given warehouse, by warehouse ID.
		 * Post api/logistics/pvt/configuration/warehouses/{warehouseId}/activation
		 * @return {void} OK
		 */
		ActivateWarehouse(warehouseId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/logistics/pvt/configuration/warehouses/' + (warehouseId == null ? '' : encodeURIComponent(warehouseId)) + '/activation', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deactivate warehouse
		 * Deactivates a given warehouse by warehouse ID.
		 * Post api/logistics/pvt/configuration/warehouses/{warehouseId}/deactivation
		 * @return {void} OK
		 */
		DeactivateWarehouse(warehouseId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/logistics/pvt/configuration/warehouses/' + (warehouseId == null ? '' : encodeURIComponent(warehouseId)) + '/deactivation', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List inventory with dispatched reservations
		 * Lists inventory with dispatched reservations. When the number of active reservations is more than 2000 the return is an error with status code 400 (BadRequest) and the message: Too many active reservations.
		 * Get api/logistics/pvt/inventory/items/{itemId}/warehouses/{warehouseId}/dispatched
		 * @return {Array<GetinventorywithdispatchedreservationsReturn>} OK
		 */
		Getinventorywithdispatchedreservations(itemId: string, warehouseId: string): Observable<Array<GetinventorywithdispatchedreservationsReturn>> {
			return this.http.get<Array<GetinventorywithdispatchedreservationsReturn>>(this.baseUri + 'api/logistics/pvt/inventory/items/' + (itemId == null ? '' : encodeURIComponent(itemId)) + '/warehouses/' + (warehouseId == null ? '' : encodeURIComponent(warehouseId)) + '/dispatched', {});
		}

		/**
		 * List inventory per dock
		 * Lists inventory information per dock set up in your store.
		 * Get api/logistics/pvt/inventory/items/{skuId}/docks/{dockId}
		 * @return {Array<InventoryperdockReturn>} OK
		 */
		Inventoryperdock(skuId: string, dockId: string): Observable<Array<InventoryperdockReturn>> {
			return this.http.get<Array<InventoryperdockReturn>>(this.baseUri + 'api/logistics/pvt/inventory/items/' + (skuId == null ? '' : encodeURIComponent(skuId)) + '/docks/' + (dockId == null ? '' : encodeURIComponent(dockId)), {});
		}

		/**
		 * List inventory per dock and warehouse
		 * Lists information of inventory per dock and warehouse.
		 * Get api/logistics/pvt/inventory/items/{skuId}/docks/{dockId}/warehouses/{warehouseId}
		 * @return {Array<InventoryperdockandwarehouseReturn>} OK
		 */
		Inventoryperdockandwarehouse(skuId: string, dockId: string, warehouseId: string): Observable<Array<InventoryperdockandwarehouseReturn>> {
			return this.http.get<Array<InventoryperdockandwarehouseReturn>>(this.baseUri + 'api/logistics/pvt/inventory/items/' + (skuId == null ? '' : encodeURIComponent(skuId)) + '/docks/' + (dockId == null ? '' : encodeURIComponent(dockId)) + '/warehouses/' + (warehouseId == null ? '' : encodeURIComponent(warehouseId)), {});
		}

		/**
		 * List inventory per warehouse
		 * Lists inventory information per warehouse on your store.
		 * Get api/logistics/pvt/inventory/items/{skuId}/warehouses/{warehouseId}
		 * @return {Array<InventoryperwarehouseReturn>} OK
		 */
		Inventoryperwarehouse(skuId: string, warehouseId: string): Observable<Array<InventoryperwarehouseReturn>> {
			return this.http.get<Array<InventoryperwarehouseReturn>>(this.baseUri + 'api/logistics/pvt/inventory/items/' + (skuId == null ? '' : encodeURIComponent(skuId)) + '/warehouses/' + (warehouseId == null ? '' : encodeURIComponent(warehouseId)), {});
		}

		/**
		 * List supply lots
		 * Returns a list of the supply lots of an SKU in a specific warehouse.
		 * Get api/logistics/pvt/inventory/items/{skuId}/warehouses/{warehouseId}/supplyLots
		 * @param {string} skuId ID of the SKU.
		 * @param {string} warehouseId ID of the warehouse where the SKU is located.
		 * @return {void} OK
		 */
		GetSupplyLots(skuId: string, warehouseId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/logistics/pvt/inventory/items/' + (skuId == null ? '' : encodeURIComponent(skuId)) + '/warehouses/' + (warehouseId == null ? '' : encodeURIComponent(warehouseId)) + '/supplyLots', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Transfer supply lot
		 * Transfers an SKU from a Supply Lot to the currently available inventory.
		 * Check out how this transfer works in further detail by reading our [documentation](https://help.vtex.com/pt/tutorial/configurar-estoque-futuro--UMSGjooqRfkRbeoh94kS4) about this feature.
		 * Post api/logistics/pvt/inventory/items/{skuId}/warehouses/{warehouseId}/supplyLots/{supplyLotId}/transfer
		 * @param {string} skuId ID of the SKU.
		 * @param {string} warehouseId ID of the warehouse where the SKU is located.
		 * @param {string} supplyLotId ID of the Supply Lot in which the SKU is currently located and from where it will be transfered.
		 * @return {void} OK
		 */
		TransferSupplyLot(skuId: string, warehouseId: string, supplyLotId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/logistics/pvt/inventory/items/' + (skuId == null ? '' : encodeURIComponent(skuId)) + '/warehouses/' + (warehouseId == null ? '' : encodeURIComponent(warehouseId)) + '/supplyLots/' + (supplyLotId == null ? '' : encodeURIComponent(supplyLotId)) + '/transfer', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List reservation by ID
		 * Lists reservation's information by ID.
		 * Get api/logistics/pvt/inventory/reservations/{reservationId}
		 * @return {void} OK
		 */
		ReservationById(reservationId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/logistics/pvt/inventory/reservations/' + (reservationId == null ? '' : encodeURIComponent(reservationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Acknowledgment reservation
		 * Acknowledges reservations made by reservation ID.
		 * Post api/logistics/pvt/inventory/reservations/{reservationId}/acknowledge
		 * @return {void} OK
		 */
		AcknowledgmentReservation(reservationId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/logistics/pvt/inventory/reservations/' + (reservationId == null ? '' : encodeURIComponent(reservationId)) + '/acknowledge', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel reservation
		 * Cancels reservation by reservation ID.
		 * Post api/logistics/pvt/inventory/reservations/{reservationId}/cancel
		 * @return {void} OK
		 */
		CancelReservation(reservationId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/logistics/pvt/inventory/reservations/' + (reservationId == null ? '' : encodeURIComponent(reservationId)) + '/cancel', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Confirm reservation
		 * Confirms reservation by reservation ID.
		 * Post api/logistics/pvt/inventory/reservations/{reservationId}/confirm
		 * @return {void} OK
		 */
		ConfirmReservation(reservationId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/logistics/pvt/inventory/reservations/' + (reservationId == null ? '' : encodeURIComponent(reservationId)) + '/confirm', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List reservation by warehouse and SKU
		 * Lists reservations in your store, by searching through warehouse and SKU.
		 * Get api/logistics/pvt/inventory/reservations/{warehouseId}/{skuId}
		 * @return {void} OK
		 */
		ReservationbyWarehouseandSku(warehouseId: string, skuId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/logistics/pvt/inventory/reservations/' + (warehouseId == null ? '' : encodeURIComponent(warehouseId)) + '/' + (skuId == null ? '' : encodeURIComponent(skuId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List inventory by SKU
		 * Lists your store's inventory by SKU ID
		 * Get api/logistics/pvt/inventory/skus/{skuId}
		 * @return {void} 
		 */
		InventoryBySku(skuId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/logistics/pvt/inventory/skus/' + (skuId == null ? '' : encodeURIComponent(skuId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List shipping policies
		 * This endpoint lists existing shipping policies from carriers in your store.
		 * > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.
		 * Get api/logistics/pvt/shipping-policies
		 * @param {string} page Desired number of pages to retrieve information from your Shipping Policies.
		 * @param {string} perPage Desired number of items per page, to retrieve information from your Shipping Policies.
		 * @return {void} OK
		 */
		Shipping_PoliciesGetByPageAndPerPage(page: string, perPage: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/logistics/pvt/shipping-policies?page=' + (page == null ? '' : encodeURIComponent(page)) + '&perPage=' + (perPage == null ? '' : encodeURIComponent(perPage)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create shipping policy
		 * This endpoint creates new shipping policies from carriers in your store.
		 * > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.
		 * Post api/logistics/pvt/shipping-policies
		 * @return {void} OK
		 */
		Shipping_PoliciesPost(requestBody: Shipping_PoliciesPostPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/logistics/pvt/shipping-policies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete shipping policies by ID
		 * This endpoint deletes existing shipping policies from carriers in your store, searching by their IDs.
		 * Delete api/logistics/pvt/shipping-policies/{id}
		 * @param {string} id ID of the shipping policy.
		 * @return {void} OK
		 */
		Shipping_PoliciesDeleteById(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/logistics/pvt/shipping-policies/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve shipping policy by ID
		 * This endpoint lists existing [shipping policies](https://help.vtex.com/en/tutorial/shipping-policy--tutorials_140) from carriers in your store, searching by their IDs.
		 * > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.
		 * Get api/logistics/pvt/shipping-policies/{id}
		 * @param {string} id ID of the shipping policy.
		 * @return {void} OK
		 */
		Shipping_PoliciesGetById(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/logistics/pvt/shipping-policies/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update shipping policy
		 * This endpoint updates information on existing Shipping Policies from carriers.
		 * > Note that, while most of our API endpoints return time fields in UTC, this endpoint returns **Scheduled Delivery** related time fields adjusted to the configured time zone of the account.
		 * Put api/logistics/pvt/shipping-policies/{id}
		 * @param {string} id Shipping policy's ID
		 * @return {void} OK
		 */
		Shipping_PoliciesPutById(id: string, requestBody: Shipping_PoliciesPutByIdPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/logistics/pvt/shipping-policies/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface GetinventorywithdispatchedreservationsReturn {

		/**
		 * Available quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availableQuantity?: number | null;

		/**
		 * Dispatched reservations quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dispatchedReservationsQuantity?: number | null;

		/** Indicates whether the SKU's availability is unlimited ("infinite inventory"). */
		isUnlimitedQuantity?: boolean | null;

		/**
		 * SKU quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity?: number | null;

		/** SKU ID. */
		skuId?: string | null;

		/**
		 * Total reserved quantity of the SKU.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalReservedQuantity?: number | null;

		/** Warehouse ID. */
		warehouseId?: string | null;
	}
	export interface GetinventorywithdispatchedreservationsReturnFormProperties {

		/**
		 * Available quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availableQuantity: FormControl<number | null | undefined>,

		/**
		 * Dispatched reservations quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dispatchedReservationsQuantity: FormControl<number | null | undefined>,

		/** Indicates whether the SKU's availability is unlimited ("infinite inventory"). */
		isUnlimitedQuantity: FormControl<boolean | null | undefined>,

		/**
		 * SKU quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** SKU ID. */
		skuId: FormControl<string | null | undefined>,

		/**
		 * Total reserved quantity of the SKU.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalReservedQuantity: FormControl<number | null | undefined>,

		/** Warehouse ID. */
		warehouseId: FormControl<string | null | undefined>,
	}
	export function CreateGetinventorywithdispatchedreservationsReturnFormGroup() {
		return new FormGroup<GetinventorywithdispatchedreservationsReturnFormProperties>({
			availableQuantity: new FormControl<number | null | undefined>(undefined),
			dispatchedReservationsQuantity: new FormControl<number | null | undefined>(undefined),
			isUnlimitedQuantity: new FormControl<boolean | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			skuId: new FormControl<string | null | undefined>(undefined),
			totalReservedQuantity: new FormControl<number | null | undefined>(undefined),
			warehouseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InventoryperdockReturn {

		/**
		 * Amount of items available for sale. Difference between total quantity and reserved quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availableQuantity?: number | null;

		/** Date of supply lot in UTC. */
		dateOfSupplyUtc?: string | null;

		/** List of delivery channels available. */
		deliveryChannel?: Array<string>;

		/** Dock ID. */
		dockId?: string | null;

		/** Indicates whether the SKU's availability is unlimited ("infinite inventory"). */
		isUnlimited?: boolean | null;

		/** Indicates whether SKU can continue to be sold after the available quantity gets to 0. */
		keepSellingAfterExpiration?: boolean | null;

		/**
		 * Reserved quantity of the SKU.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reservedQuantity?: number | null;

		/** List of sales channels associated. */
		salesChannel?: Array<string>;

		/** SKU ID. */
		skuId?: string | null;

		/** Time to refill (deprecated). */
		timeToRefill?: string | null;

		/**
		 * Total quantity of SKU.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalQuantity?: number | null;

		/** Transfer. */
		transfer?: string | null;

		/** Warehouse ID. */
		warehouseId?: string | null;
	}
	export interface InventoryperdockReturnFormProperties {

		/**
		 * Amount of items available for sale. Difference between total quantity and reserved quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availableQuantity: FormControl<number | null | undefined>,

		/** Date of supply lot in UTC. */
		dateOfSupplyUtc: FormControl<string | null | undefined>,

		/** Dock ID. */
		dockId: FormControl<string | null | undefined>,

		/** Indicates whether the SKU's availability is unlimited ("infinite inventory"). */
		isUnlimited: FormControl<boolean | null | undefined>,

		/** Indicates whether SKU can continue to be sold after the available quantity gets to 0. */
		keepSellingAfterExpiration: FormControl<boolean | null | undefined>,

		/**
		 * Reserved quantity of the SKU.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reservedQuantity: FormControl<number | null | undefined>,

		/** SKU ID. */
		skuId: FormControl<string | null | undefined>,

		/** Time to refill (deprecated). */
		timeToRefill: FormControl<string | null | undefined>,

		/**
		 * Total quantity of SKU.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalQuantity: FormControl<number | null | undefined>,

		/** Transfer. */
		transfer: FormControl<string | null | undefined>,

		/** Warehouse ID. */
		warehouseId: FormControl<string | null | undefined>,
	}
	export function CreateInventoryperdockReturnFormGroup() {
		return new FormGroup<InventoryperdockReturnFormProperties>({
			availableQuantity: new FormControl<number | null | undefined>(undefined),
			dateOfSupplyUtc: new FormControl<string | null | undefined>(undefined),
			dockId: new FormControl<string | null | undefined>(undefined),
			isUnlimited: new FormControl<boolean | null | undefined>(undefined),
			keepSellingAfterExpiration: new FormControl<boolean | null | undefined>(undefined),
			reservedQuantity: new FormControl<number | null | undefined>(undefined),
			skuId: new FormControl<string | null | undefined>(undefined),
			timeToRefill: new FormControl<string | null | undefined>(undefined),
			totalQuantity: new FormControl<number | null | undefined>(undefined),
			transfer: new FormControl<string | null | undefined>(undefined),
			warehouseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InventoryperdockandwarehouseReturn {

		/**
		 * Amount of items available for sale. Difference between total quantity and reserved quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availableQuantity?: number | null;

		/** Date of supply lot in UTC. */
		dateOfSupplyUtc?: string | null;

		/** List of delivery channels available. */
		deliveryChannel?: Array<string>;

		/** Dock ID. */
		dockId?: string | null;

		/** Indicates whether the SKU's availability is unlimited ("infinite inventory"). */
		isUnlimited?: boolean | null;

		/** Indicates whether SKU can continue to be sold after the available quantity gets to 0. */
		keepSellingAfterExpiration?: boolean | null;

		/**
		 * Reserved quantity of the SKU.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reservedQuantity?: number | null;

		/** List of sales channels associated. */
		salesChannel?: Array<string>;

		/** SKU ID. */
		skuId?: string | null;

		/** Time to refill (deprecated). */
		timeToRefill?: string | null;

		/**
		 * Total quantity of SKU.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalQuantity?: number | null;

		/** Transfer. */
		transfer?: string | null;

		/** Warehouse ID. */
		warehouseId?: string | null;
	}
	export interface InventoryperdockandwarehouseReturnFormProperties {

		/**
		 * Amount of items available for sale. Difference between total quantity and reserved quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availableQuantity: FormControl<number | null | undefined>,

		/** Date of supply lot in UTC. */
		dateOfSupplyUtc: FormControl<string | null | undefined>,

		/** Dock ID. */
		dockId: FormControl<string | null | undefined>,

		/** Indicates whether the SKU's availability is unlimited ("infinite inventory"). */
		isUnlimited: FormControl<boolean | null | undefined>,

		/** Indicates whether SKU can continue to be sold after the available quantity gets to 0. */
		keepSellingAfterExpiration: FormControl<boolean | null | undefined>,

		/**
		 * Reserved quantity of the SKU.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reservedQuantity: FormControl<number | null | undefined>,

		/** SKU ID. */
		skuId: FormControl<string | null | undefined>,

		/** Time to refill (deprecated). */
		timeToRefill: FormControl<string | null | undefined>,

		/**
		 * Total quantity of SKU.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalQuantity: FormControl<number | null | undefined>,

		/** Transfer. */
		transfer: FormControl<string | null | undefined>,

		/** Warehouse ID. */
		warehouseId: FormControl<string | null | undefined>,
	}
	export function CreateInventoryperdockandwarehouseReturnFormGroup() {
		return new FormGroup<InventoryperdockandwarehouseReturnFormProperties>({
			availableQuantity: new FormControl<number | null | undefined>(undefined),
			dateOfSupplyUtc: new FormControl<string | null | undefined>(undefined),
			dockId: new FormControl<string | null | undefined>(undefined),
			isUnlimited: new FormControl<boolean | null | undefined>(undefined),
			keepSellingAfterExpiration: new FormControl<boolean | null | undefined>(undefined),
			reservedQuantity: new FormControl<number | null | undefined>(undefined),
			skuId: new FormControl<string | null | undefined>(undefined),
			timeToRefill: new FormControl<string | null | undefined>(undefined),
			totalQuantity: new FormControl<number | null | undefined>(undefined),
			transfer: new FormControl<string | null | undefined>(undefined),
			warehouseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InventoryperwarehouseReturn {

		/**
		 * Amount of items available for sale. Difference between total quantity and reserved quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availableQuantity?: number | null;

		/** Date of supply lot in UTC. */
		dateOfSupplyUtc?: string | null;

		/** List of delivery channels available. */
		deliveryChannel?: Array<string>;

		/** Dock ID. */
		dockId?: string | null;

		/** Indicates whether the SKU's availability is unlimited ("infinite inventory"). */
		isUnlimited?: boolean | null;

		/** Indicates whether SKU can continue to be sold after the available quantity gets to 0. */
		keepSellingAfterExpiration?: boolean | null;

		/**
		 * Reserved quantity of the SKU.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reservedQuantity?: number | null;

		/** List of sales channels associated. */
		salesChannel?: Array<string>;

		/** SKU ID. */
		skuId?: string | null;

		/** Time to refill (deprecated). */
		timeToRefill?: string | null;

		/**
		 * Total quantity of SKU.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalQuantity?: number | null;

		/** Transfer. */
		transfer?: string | null;

		/** Warehouse ID. */
		warehouseId?: string | null;
	}
	export interface InventoryperwarehouseReturnFormProperties {

		/**
		 * Amount of items available for sale. Difference between total quantity and reserved quantity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availableQuantity: FormControl<number | null | undefined>,

		/** Date of supply lot in UTC. */
		dateOfSupplyUtc: FormControl<string | null | undefined>,

		/** Dock ID. */
		dockId: FormControl<string | null | undefined>,

		/** Indicates whether the SKU's availability is unlimited ("infinite inventory"). */
		isUnlimited: FormControl<boolean | null | undefined>,

		/** Indicates whether SKU can continue to be sold after the available quantity gets to 0. */
		keepSellingAfterExpiration: FormControl<boolean | null | undefined>,

		/**
		 * Reserved quantity of the SKU.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reservedQuantity: FormControl<number | null | undefined>,

		/** SKU ID. */
		skuId: FormControl<string | null | undefined>,

		/** Time to refill (deprecated). */
		timeToRefill: FormControl<string | null | undefined>,

		/**
		 * Total quantity of SKU.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalQuantity: FormControl<number | null | undefined>,

		/** Transfer. */
		transfer: FormControl<string | null | undefined>,

		/** Warehouse ID. */
		warehouseId: FormControl<string | null | undefined>,
	}
	export function CreateInventoryperwarehouseReturnFormGroup() {
		return new FormGroup<InventoryperwarehouseReturnFormProperties>({
			availableQuantity: new FormControl<number | null | undefined>(undefined),
			dateOfSupplyUtc: new FormControl<string | null | undefined>(undefined),
			dockId: new FormControl<string | null | undefined>(undefined),
			isUnlimited: new FormControl<boolean | null | undefined>(undefined),
			keepSellingAfterExpiration: new FormControl<boolean | null | undefined>(undefined),
			reservedQuantity: new FormControl<number | null | undefined>(undefined),
			skuId: new FormControl<string | null | undefined>(undefined),
			timeToRefill: new FormControl<string | null | undefined>(undefined),
			totalQuantity: new FormControl<number | null | undefined>(undefined),
			transfer: new FormControl<string | null | undefined>(undefined),
			warehouseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Shipping_PoliciesPostPostBody {

		/**
		 * Business hour configuration.
		 * Required
		 */
		businessHourSettings: Shipping_PoliciesPostPostBodyBusinessHourSettings;

		/** Schedule sent by the carrier, to configure Shipping policy */
		Shipping_PoliciesPostPostBodyCarrierSchedule?: Array<Shipping_PoliciesPostPostBodyCarrierSchedule>;

		/**
		 * Measure that accounts package's volume, and not only weight.
		 * Required
		 */
		cubicWeightSettings: Shipping_PoliciesPostPostBodyCubicWeightSettings;

		/**
		 * Settings for the Scheduled Delivery feature.
		 * Required
		 */
		deliveryScheduleSettings: Shipping_PoliciesPostPostBodyDeliveryScheduleSettings;

		/**
		 * ID of the shipping policy.
		 * Required
		 */
		id: string;

		/**
		 * Indicates whether shipping policy is active or not.
		 * Required
		 */
		isActive: boolean;

		/**
		 * Object containing attributes of maximum dimension permitted by the shipping policy (carrier).
		 * Required
		 */
		maxDimension: Shipping_PoliciesPostPostBodyMaxDimension;

		/**
		 * Maximum value accepted by the carrier, to realize the shipping.
		 * Required
		 * Type: double
		 */
		maximumValueAceptable: number;

		/**
		 * Minimum value accepted by the carrier, to realize the shipping.
		 * Required
		 * Type: double
		 */
		minimumValueAceptable: number;

		/**
		 * Configurations for the [modal](https://help.vtex.com/en/tutorial/how-does-the-modal-work--tutorials_125), which is the attachement of a specific product to a carrier specialized in delivering that type of product.
		 * Required
		 */
		modalSettings: Shipping_PoliciesPostPostBodyModalSettings;

		/**
		 * Name of the shipping policy.
		 * Required
		 */
		name: string;

		/**
		 * Capacity of your store's logistics of shipment, determines number of items permitted per shipment.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfItemsPerShipment: number;

		/**
		 * Configuration for Pickup Points.
		 * Required
		 */
		pickupPointsSettings: Shipping_PoliciesPostPostBodyPickupPointsSettings;

		/**
		 * Type of shipping available for this shipping policy (carrier). Options shown on freight simulation
		 * Required
		 */
		shippingMethod: string;

		/**
		 * If the shipping policy includes deliveries on weekends and holidays.
		 * Required
		 */
		weekendAndHolidays: Shipping_PoliciesPostPostBodyWeekendAndHolidays;
	}
	export interface Shipping_PoliciesPostPostBodyFormProperties {

		/**
		 * ID of the shipping policy.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Indicates whether shipping policy is active or not.
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Maximum value accepted by the carrier, to realize the shipping.
		 * Required
		 * Type: double
		 */
		maximumValueAceptable: FormControl<number | null | undefined>,

		/**
		 * Minimum value accepted by the carrier, to realize the shipping.
		 * Required
		 * Type: double
		 */
		minimumValueAceptable: FormControl<number | null | undefined>,

		/**
		 * Name of the shipping policy.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Capacity of your store's logistics of shipment, determines number of items permitted per shipment.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfItemsPerShipment: FormControl<number | null | undefined>,

		/**
		 * Type of shipping available for this shipping policy (carrier). Options shown on freight simulation
		 * Required
		 */
		shippingMethod: FormControl<string | null | undefined>,
	}
	export function CreateShipping_PoliciesPostPostBodyFormGroup() {
		return new FormGroup<Shipping_PoliciesPostPostBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			maximumValueAceptable: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minimumValueAceptable: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numberOfItemsPerShipment: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			shippingMethod: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Shipping_PoliciesPostPostBodyBusinessHourSettings {

		/**
		 * Array containing objects with business hour configurations.
		 * Required
		 */
		Shipping_PoliciesPostPostBodyBusinessHourSettingsCarrierBusinessHours: Array<Shipping_PoliciesPostPostBodyBusinessHourSettingsCarrierBusinessHours>;

		/**
		 * Select whether the shipping policy allows deliveries outside business hours.
		 * Required
		 */
		isOpenOutsideBusinessHours: boolean;
	}
	export interface Shipping_PoliciesPostPostBodyBusinessHourSettingsFormProperties {

		/**
		 * Select whether the shipping policy allows deliveries outside business hours.
		 * Required
		 */
		isOpenOutsideBusinessHours: FormControl<boolean | null | undefined>,
	}
	export function CreateShipping_PoliciesPostPostBodyBusinessHourSettingsFormGroup() {
		return new FormGroup<Shipping_PoliciesPostPostBodyBusinessHourSettingsFormProperties>({
			isOpenOutsideBusinessHours: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Shipping_PoliciesPostPostBodyBusinessHourSettingsCarrierBusinessHours {

		/**
		 * Closing time.
		 * Required
		 */
		closingTime: string;

		/**
		 * Day of the week, from `0` (sunday) to `6` (saturday).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: number;

		/**
		 * Opening time.
		 * Required
		 */
		openingTime: string;
	}
	export interface Shipping_PoliciesPostPostBodyBusinessHourSettingsCarrierBusinessHoursFormProperties {

		/**
		 * Closing time.
		 * Required
		 */
		closingTime: FormControl<string | null | undefined>,

		/**
		 * Day of the week, from `0` (sunday) to `6` (saturday).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: FormControl<number | null | undefined>,

		/**
		 * Opening time.
		 * Required
		 */
		openingTime: FormControl<string | null | undefined>,
	}
	export function CreateShipping_PoliciesPostPostBodyBusinessHourSettingsCarrierBusinessHoursFormGroup() {
		return new FormGroup<Shipping_PoliciesPostPostBodyBusinessHourSettingsCarrierBusinessHoursFormProperties>({
			closingTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dayOfWeek: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			openingTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Shipping_PoliciesPostPostBodyCarrierSchedule {

		/**
		 * Day of the week, from `0` (sunday) to `6` (saturday).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek?: number | null;

		/** Time limit. */
		timeLimit?: string | null;
	}
	export interface Shipping_PoliciesPostPostBodyCarrierScheduleFormProperties {

		/**
		 * Day of the week, from `0` (sunday) to `6` (saturday).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: FormControl<number | null | undefined>,

		/** Time limit. */
		timeLimit: FormControl<string | null | undefined>,
	}
	export function CreateShipping_PoliciesPostPostBodyCarrierScheduleFormGroup() {
		return new FormGroup<Shipping_PoliciesPostPostBodyCarrierScheduleFormProperties>({
			dayOfWeek: new FormControl<number | null | undefined>(undefined),
			timeLimit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Shipping_PoliciesPostPostBodyCubicWeightSettings {

		/**
		 * Required
		 * Type: double
		 */
		minimunAcceptableVolumetricWeight: number;

		/**
		 * Factor that will be used on the cubic weight calculation.
		 * Required
		 * Type: double
		 */
		volumetricFactor: number;
	}
	export interface Shipping_PoliciesPostPostBodyCubicWeightSettingsFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		minimunAcceptableVolumetricWeight: FormControl<number | null | undefined>,

		/**
		 * Factor that will be used on the cubic weight calculation.
		 * Required
		 * Type: double
		 */
		volumetricFactor: FormControl<number | null | undefined>,
	}
	export function CreateShipping_PoliciesPostPostBodyCubicWeightSettingsFormGroup() {
		return new FormGroup<Shipping_PoliciesPostPostBodyCubicWeightSettingsFormProperties>({
			minimunAcceptableVolumetricWeight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			volumetricFactor: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Shipping_PoliciesPostPostBodyDeliveryScheduleSettings {

		/**
		 * Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example.
		 * Required
		 */
		Shipping_PoliciesPostPostBodyDeliveryScheduleSettingsDayOfWeekForDelivery: Array<Shipping_PoliciesPostPostBodyDeliveryScheduleSettingsDayOfWeekForDelivery>;

		/**
		 * Range of days available within a delivery window, for the customer to choose the scheduled delivery. For example, if the configured maxRangeDelivery is equal 7, and the customer buys something on a Tuesday, the options for scheduled delivery will be shown until the following Tuesday (7 days from the purchase day). If no options are available within the maxRangeDelivery set, this shipping policy won't be shown on the checkout.
		 * Required
		 * Type: double
		 */
		maxRangeDelivery: number;

		/**
		 * Select the Scheduled Delivery configuration.
		 * Required
		 */
		useDeliverySchedule: boolean;
	}
	export interface Shipping_PoliciesPostPostBodyDeliveryScheduleSettingsFormProperties {

		/**
		 * Range of days available within a delivery window, for the customer to choose the scheduled delivery. For example, if the configured maxRangeDelivery is equal 7, and the customer buys something on a Tuesday, the options for scheduled delivery will be shown until the following Tuesday (7 days from the purchase day). If no options are available within the maxRangeDelivery set, this shipping policy won't be shown on the checkout.
		 * Required
		 * Type: double
		 */
		maxRangeDelivery: FormControl<number | null | undefined>,

		/**
		 * Select the Scheduled Delivery configuration.
		 * Required
		 */
		useDeliverySchedule: FormControl<boolean | null | undefined>,
	}
	export function CreateShipping_PoliciesPostPostBodyDeliveryScheduleSettingsFormGroup() {
		return new FormGroup<Shipping_PoliciesPostPostBodyDeliveryScheduleSettingsFormProperties>({
			maxRangeDelivery: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			useDeliverySchedule: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Shipping_PoliciesPostPostBodyDeliveryScheduleSettingsDayOfWeekForDelivery {

		/**
		 * Day of the week, from `0` (sunday) to `6` (saturday).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: number;

		/**
		 * Reservation windows for scheduled delivery.
		 * Required
		 */
		Shipping_PoliciesPostPostBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges: Array<Shipping_PoliciesPostPostBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges>;
	}
	export interface Shipping_PoliciesPostPostBodyDeliveryScheduleSettingsDayOfWeekForDeliveryFormProperties {

		/**
		 * Day of the week, from `0` (sunday) to `6` (saturday).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: FormControl<number | null | undefined>,
	}
	export function CreateShipping_PoliciesPostPostBodyDeliveryScheduleSettingsDayOfWeekForDeliveryFormGroup() {
		return new FormGroup<Shipping_PoliciesPostPostBodyDeliveryScheduleSettingsDayOfWeekForDeliveryFormProperties>({
			dayOfWeek: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Shipping_PoliciesPostPostBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges {

		/** Sets maximum delivery capacity for a given reservation window for scheduled delivery. */
		Shipping_PoliciesPostPostBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity?: Array<Shipping_PoliciesPostPostBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity>;

		/**
		 * End time for day of the week.
		 * Required
		 */
		endTime: string;

		/**
		 * List price for day of the week.
		 * Required
		 * Type: double
		 */
		listPrice: number;

		/**
		 * Start time for day of the week.
		 * Required
		 */
		startTime: string;
	}
	export interface Shipping_PoliciesPostPostBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesFormProperties {

		/**
		 * End time for day of the week.
		 * Required
		 */
		endTime: FormControl<string | null | undefined>,

		/**
		 * List price for day of the week.
		 * Required
		 * Type: double
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * Start time for day of the week.
		 * Required
		 */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateShipping_PoliciesPostPostBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesFormGroup() {
		return new FormGroup<Shipping_PoliciesPostPostBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			listPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Shipping_PoliciesPostPostBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity {

		/**
		 * Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).
		 * Required
		 */
		capacityType: string;

		/**
		 * Maximum number of orders or SKUs that the store is capable of fulfilling.
		 * Required
		 * Type: double
		 */
		maxValue: number;
	}
	export interface Shipping_PoliciesPostPostBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacityFormProperties {

		/**
		 * Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).
		 * Required
		 */
		capacityType: FormControl<string | null | undefined>,

		/**
		 * Maximum number of orders or SKUs that the store is capable of fulfilling.
		 * Required
		 * Type: double
		 */
		maxValue: FormControl<number | null | undefined>,
	}
	export function CreateShipping_PoliciesPostPostBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacityFormGroup() {
		return new FormGroup<Shipping_PoliciesPostPostBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacityFormProperties>({
			capacityType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Shipping_PoliciesPostPostBodyMaxDimension {

		/**
		 * Largest measure of the package.
		 * Required
		 * Type: double
		 */
		largestMeasure: number;

		/**
		 * Sum of all maximum measures of the package.
		 * Required
		 * Type: double
		 */
		maxMeasureSum: number;
	}
	export interface Shipping_PoliciesPostPostBodyMaxDimensionFormProperties {

		/**
		 * Largest measure of the package.
		 * Required
		 * Type: double
		 */
		largestMeasure: FormControl<number | null | undefined>,

		/**
		 * Sum of all maximum measures of the package.
		 * Required
		 * Type: double
		 */
		maxMeasureSum: FormControl<number | null | undefined>,
	}
	export function CreateShipping_PoliciesPostPostBodyMaxDimensionFormGroup() {
		return new FormGroup<Shipping_PoliciesPostPostBodyMaxDimensionFormProperties>({
			largestMeasure: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			maxMeasureSum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Shipping_PoliciesPostPostBodyModalSettings {

		/**
		 * Type of special freight.
		 * Required
		 */
		modals: Array<string>;

		/**
		 * When set as `true`, the modal's configurations will apply only for items with a defined modal.
		 * Required
		 */
		useOnlyItemsWithDefinedModal: boolean;
	}
	export interface Shipping_PoliciesPostPostBodyModalSettingsFormProperties {

		/**
		 * When set as `true`, the modal's configurations will apply only for items with a defined modal.
		 * Required
		 */
		useOnlyItemsWithDefinedModal: FormControl<boolean | null | undefined>,
	}
	export function CreateShipping_PoliciesPostPostBodyModalSettingsFormGroup() {
		return new FormGroup<Shipping_PoliciesPostPostBodyModalSettingsFormProperties>({
			useOnlyItemsWithDefinedModal: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Shipping_PoliciesPostPostBodyPickupPointsSettings {

		/**
		 * Insert the IDs for pickup points previously configured in your store.
		 * Required
		 */
		pickupPointIds: Array<string>;

		/**
		 * Insert the tags for pickup points previously configured in your store.
		 * Required
		 */
		pickupPointTags: Array<string>;

		/**
		 * Sellers that will be associated with the [pickup points](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) of the shipping policy being created.
		 * Required
		 */
		sellers: Array<string>;
	}
	export interface Shipping_PoliciesPostPostBodyPickupPointsSettingsFormProperties {
	}
	export function CreateShipping_PoliciesPostPostBodyPickupPointsSettingsFormGroup() {
		return new FormGroup<Shipping_PoliciesPostPostBodyPickupPointsSettingsFormProperties>({
		});

	}

	export interface Shipping_PoliciesPostPostBodyWeekendAndHolidays {

		/**
		 * Does the shipping policy allow deliveries onholidays?
		 * Required
		 */
		holiday: boolean;

		/**
		 * Does the shipping policy allow deliveries on saturdays?
		 * Required
		 */
		saturday: boolean;

		/**
		 * Does the shipping policy allow deliveries on sundays?
		 * Required
		 */
		sunday: boolean;
	}
	export interface Shipping_PoliciesPostPostBodyWeekendAndHolidaysFormProperties {

		/**
		 * Does the shipping policy allow deliveries onholidays?
		 * Required
		 */
		holiday: FormControl<boolean | null | undefined>,

		/**
		 * Does the shipping policy allow deliveries on saturdays?
		 * Required
		 */
		saturday: FormControl<boolean | null | undefined>,

		/**
		 * Does the shipping policy allow deliveries on sundays?
		 * Required
		 */
		sunday: FormControl<boolean | null | undefined>,
	}
	export function CreateShipping_PoliciesPostPostBodyWeekendAndHolidaysFormGroup() {
		return new FormGroup<Shipping_PoliciesPostPostBodyWeekendAndHolidaysFormProperties>({
			holiday: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			saturday: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			sunday: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Shipping_PoliciesPutByIdPutBody {

		/**
		 * If the shipping policy (carrier) delivers on weekends
		 * Required
		 */
		deliveryOnWeekends: boolean;

		/** Settings for the Scheduled Delivery feature. */
		deliveryScheduleSettings?: Shipping_PoliciesPutByIdPutBodyDeliveryScheduleSettings;

		/**
		 * If the shipping policy is active or not.
		 * Required
		 */
		isActive: boolean;

		/**
		 * Object containing attributes of maximum dimension permitted by the shipping policy (carrier).
		 * Required
		 */
		maxDimension: Shipping_PoliciesPutByIdPutBodyMaxDimension;

		/**
		 * Name of the shipping policy
		 * Required
		 */
		name: string;

		/**
		 * Type of shipping available for this shipping policy (carrier). Options shown on freight simulation.
		 * Required
		 */
		shippingMethod: string;
	}
	export interface Shipping_PoliciesPutByIdPutBodyFormProperties {

		/**
		 * If the shipping policy (carrier) delivers on weekends
		 * Required
		 */
		deliveryOnWeekends: FormControl<boolean | null | undefined>,

		/**
		 * If the shipping policy is active or not.
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Name of the shipping policy
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of shipping available for this shipping policy (carrier). Options shown on freight simulation.
		 * Required
		 */
		shippingMethod: FormControl<string | null | undefined>,
	}
	export function CreateShipping_PoliciesPutByIdPutBodyFormGroup() {
		return new FormGroup<Shipping_PoliciesPutByIdPutBodyFormProperties>({
			deliveryOnWeekends: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shippingMethod: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Shipping_PoliciesPutByIdPutBodyDeliveryScheduleSettings {

		/**
		 * Select the chosen days for delivery. Values for each day of the week are: 0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = saturday. Make sure to add the available hours for the chosen days, following the example.
		 * Required
		 */
		Shipping_PoliciesPutByIdPutBodyDeliveryScheduleSettingsDayOfWeekForDelivery: Array<Shipping_PoliciesPutByIdPutBodyDeliveryScheduleSettingsDayOfWeekForDelivery>;

		/**
		 * Range of days available within a delivery window, for the customer to choose the scheduled delivery. For example, if the configured maxRangeDelivery is equal 7, and the customer buys something on a Tuesday, the options for scheduled delivery will be shown until the following Tuesday (7 days from the purchase day). If no options are available within the maxRangeDelivery set, this shipping policy won't be shown on the checkout.
		 * Required
		 * Type: double
		 */
		maxRangeDelivery: number;

		/**
		 * Select the Scheduled Delivery configuration.
		 * Required
		 */
		useDeliverySchedule: boolean;
	}
	export interface Shipping_PoliciesPutByIdPutBodyDeliveryScheduleSettingsFormProperties {

		/**
		 * Range of days available within a delivery window, for the customer to choose the scheduled delivery. For example, if the configured maxRangeDelivery is equal 7, and the customer buys something on a Tuesday, the options for scheduled delivery will be shown until the following Tuesday (7 days from the purchase day). If no options are available within the maxRangeDelivery set, this shipping policy won't be shown on the checkout.
		 * Required
		 * Type: double
		 */
		maxRangeDelivery: FormControl<number | null | undefined>,

		/**
		 * Select the Scheduled Delivery configuration.
		 * Required
		 */
		useDeliverySchedule: FormControl<boolean | null | undefined>,
	}
	export function CreateShipping_PoliciesPutByIdPutBodyDeliveryScheduleSettingsFormGroup() {
		return new FormGroup<Shipping_PoliciesPutByIdPutBodyDeliveryScheduleSettingsFormProperties>({
			maxRangeDelivery: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			useDeliverySchedule: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Shipping_PoliciesPutByIdPutBodyDeliveryScheduleSettingsDayOfWeekForDelivery {

		/**
		 * Day of the week, from `0` (sunday) to `6` (saturday).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: number;

		/**
		 * Reservation windows for scheduled delivery.
		 * Required
		 */
		Shipping_PoliciesPutByIdPutBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges: Array<Shipping_PoliciesPutByIdPutBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges>;
	}
	export interface Shipping_PoliciesPutByIdPutBodyDeliveryScheduleSettingsDayOfWeekForDeliveryFormProperties {

		/**
		 * Day of the week, from `0` (sunday) to `6` (saturday).
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dayOfWeek: FormControl<number | null | undefined>,
	}
	export function CreateShipping_PoliciesPutByIdPutBodyDeliveryScheduleSettingsDayOfWeekForDeliveryFormGroup() {
		return new FormGroup<Shipping_PoliciesPutByIdPutBodyDeliveryScheduleSettingsDayOfWeekForDeliveryFormProperties>({
			dayOfWeek: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Shipping_PoliciesPutByIdPutBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRanges {

		/** Sets maximum delivery capacity for a given reservation window for scheduled delivery. */
		Shipping_PoliciesPutByIdPutBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity?: Array<Shipping_PoliciesPutByIdPutBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity>;

		/**
		 * End time for day of the week.
		 * Required
		 */
		endTime: string;

		/**
		 * List price for day of the week.
		 * Required
		 * Type: double
		 */
		listPrice: number;

		/**
		 * Start time for day of the week.
		 * Required
		 */
		startTime: string;
	}
	export interface Shipping_PoliciesPutByIdPutBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesFormProperties {

		/**
		 * End time for day of the week.
		 * Required
		 */
		endTime: FormControl<string | null | undefined>,

		/**
		 * List price for day of the week.
		 * Required
		 * Type: double
		 */
		listPrice: FormControl<number | null | undefined>,

		/**
		 * Start time for day of the week.
		 * Required
		 */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateShipping_PoliciesPutByIdPutBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesFormGroup() {
		return new FormGroup<Shipping_PoliciesPutByIdPutBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			listPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Shipping_PoliciesPutByIdPutBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacity {

		/**
		 * Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).
		 * Required
		 */
		capacityType: string;

		/**
		 * Maximum number of orders or SKUs that the store is capable of fulfilling.
		 * Required
		 * Type: double
		 */
		maxValue: number;
	}
	export interface Shipping_PoliciesPutByIdPutBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacityFormProperties {

		/**
		 * Defines how the delivery capacity is measured for this reservation window, by maximum number of orders (`"ORDERS_QUANTITY"`) or SKUs (`"SKUS_QUANTITY"`).
		 * Required
		 */
		capacityType: FormControl<string | null | undefined>,

		/**
		 * Maximum number of orders or SKUs that the store is capable of fulfilling.
		 * Required
		 * Type: double
		 */
		maxValue: FormControl<number | null | undefined>,
	}
	export function CreateShipping_PoliciesPutByIdPutBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacityFormGroup() {
		return new FormGroup<Shipping_PoliciesPutByIdPutBodyDeliveryScheduleSettingsDayOfWeekForDeliveryDeliveryRangesDeliveryCapacityFormProperties>({
			capacityType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Shipping_PoliciesPutByIdPutBodyMaxDimension {

		/**
		 * Largest measure of the package.
		 * Required
		 * Type: double
		 */
		largestMeasure: number;

		/**
		 * Sum of all maximum measures of the package.
		 * Required
		 * Type: double
		 */
		maxMeasureSum: number;
	}
	export interface Shipping_PoliciesPutByIdPutBodyMaxDimensionFormProperties {

		/**
		 * Largest measure of the package.
		 * Required
		 * Type: double
		 */
		largestMeasure: FormControl<number | null | undefined>,

		/**
		 * Sum of all maximum measures of the package.
		 * Required
		 * Type: double
		 */
		maxMeasureSum: FormControl<number | null | undefined>,
	}
	export function CreateShipping_PoliciesPutByIdPutBodyMaxDimensionFormGroup() {
		return new FormGroup<Shipping_PoliciesPutByIdPutBodyMaxDimensionFormProperties>({
			largestMeasure: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			maxMeasureSum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

}

